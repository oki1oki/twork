import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IDevice } from "@/components/Device";

interface DeviceFilters {
	search: string;
	brands: number[];
	deviceTypes: number[];
	minPrice: number | null;
	maxPrice: number | null;
}

interface DeviceStore {
	filters: DeviceFilters;
	setFilters: (filters: Partial<DeviceFilters>) => void;
	resetFilters: () => void;
	filteredDevices: (devices: IDevice[]) => IDevice[];
	toggleBrand: (brandId: number) => void;
	toggleDeviceType: (typeId: number) => void;
}

const initialFilters: DeviceFilters = {
	search: "",
	brands: [],
	deviceTypes: [],
	minPrice: null,
	maxPrice: null,
};

const useDeviceStore = create<DeviceStore>()(
	persist(
		(set, get) => ({
			filters: initialFilters,
			setFilters: (newFilters) =>
				set((state) => ({
					filters: {
						...initialFilters,
						...state.filters,
						...newFilters,
						brands:
							newFilters.brands || state.filters?.brands || [],
						deviceTypes:
							newFilters.deviceTypes ||
							state.filters?.deviceTypes ||
							[],
					},
				})),
			resetFilters: () => set({ filters: initialFilters }),
			toggleBrand: (brandId) =>
				set((state) => ({
					filters: {
						...state.filters,
						brands: state.filters.brands?.includes(brandId)
							? state.filters.brands.filter(
									(id) => id !== brandId
							  )
							: [...(state.filters.brands || []), brandId],
					},
				})),
			toggleDeviceType: (typeId) =>
				set((state) => ({
					filters: {
						...state.filters,
						deviceTypes: state.filters.deviceTypes?.includes(typeId)
							? state.filters.deviceTypes.filter(
									(id) => id !== typeId
							  )
							: [...(state.filters.deviceTypes || []), typeId],
					},
				})),
			filteredDevices: (devices) => {
				const { filters } = get();
				return devices.filter((device) => {
					const matchesSearch =
						!filters.search ||
						device.model
							?.toLowerCase()
							.includes(filters.search.toLowerCase()) ||
						device.description
							?.toLowerCase()
							.includes(filters.search.toLowerCase());

					const matchesBrand =
						!filters.brands?.length ||
						(device.brand && filters.brands.includes(device.brand));
					const matchesType =
						!filters.deviceTypes?.length ||
						(device.deviceType &&
							filters.deviceTypes.includes(device.deviceType));
					const matchesMinPrice =
						!filters.minPrice ||
						(device.price && device.price >= filters.minPrice);
					const matchesMaxPrice =
						!filters.maxPrice ||
						(device.price && device.price <= filters.maxPrice);

					return (
						matchesSearch &&
						matchesBrand &&
						matchesType &&
						matchesMinPrice &&
						matchesMaxPrice
					);
				});
			},
		}),
		{
			name: "device-filters",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				filters: {
					...initialFilters,
					...state.filters,
					brands: state.filters?.brands || [],
					deviceTypes: state.filters?.deviceTypes || [],
				},
			}),
		}
	)
);

export { useDeviceStore };
