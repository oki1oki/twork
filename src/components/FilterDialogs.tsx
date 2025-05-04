import { deviceBrands, deviceTypes } from "@/data";
import { useDeviceStore } from "@/store/deviceStore";
import { useState } from "react";

interface FilterDialogsProps {
	isBrandDialogOpen: boolean;
	isTypeDialogOpen: boolean;
	onBrandDialogClose: () => void;
	onTypeDialogClose: () => void;
}

export const FilterDialogs = ({
	isBrandDialogOpen,
	isTypeDialogOpen,
	onBrandDialogClose,
	onTypeDialogClose,
}: FilterDialogsProps) => {
	const [brandSearch, setBrandSearch] = useState("");
	const [typeSearch, setTypeSearch] = useState("");
	const store = useDeviceStore();

	const selectedBrands = store.filters?.brands || [];
	const selectedTypes = store.filters?.deviceTypes || [];

	const filteredBrands = deviceBrands.filter((brand) =>
		brand.name.toLowerCase().includes(brandSearch.toLowerCase())
	);

	const filteredTypes = deviceTypes.filter((type) =>
		type.name.toLowerCase().includes(typeSearch.toLowerCase())
	);

	return (
		<>
			{isBrandDialogOpen && (
				<div className="fixed inset-0 bg-black/30 flex items-center justify-center">
					<div className="bg-white rounded-lg p-6 max-w-md w-full">
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg font-medium">Бренды</h3>
							<button
								onClick={() => {
									onBrandDialogClose();
									setBrandSearch("");
								}}
								className="text-gray-400 hover:text-gray-500 cursor-pointer"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="space-y-4">
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Поиск брендов..."
									value={brandSearch}
									onChange={(e) =>
										setBrandSearch(e.target.value)
									}
									className="px-3 py-2 border border-gray-300 rounded-md shadow-sm flex-1"
								/>
								<button
									onClick={() =>
										store.setFilters({ brands: [] })
									}
									disabled={selectedBrands.length === 0}
									className="px-4 py-2 border border-gray-300 rounded-md shadow-sm disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
								>
									Очистить
								</button>
							</div>
							<div className="max-h-96 overflow-y-auto space-y-2">
								{filteredBrands.map((brand) => (
									<label
										key={brand.id}
										className="flex items-center space-x-2 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={selectedBrands.includes(
												brand.id
											)}
											onChange={() =>
												store.toggleBrand(brand.id)
											}
											className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
										/>
										<span className="text-sm text-gray-700">
											{brand.name}
										</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{isTypeDialogOpen && (
				<div className="fixed inset-0 bg-black/30 flex items-center justify-center">
					<div className="bg-white rounded-lg p-6 max-w-md w-full">
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg font-medium">Типы</h3>
							<button
								onClick={() => {
									onTypeDialogClose();
									setTypeSearch("");
								}}
								className="text-gray-400 hover:text-gray-500 cursor-pointer"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="space-y-4">
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Поиск типов..."
									value={typeSearch}
									onChange={(e) =>
										setTypeSearch(e.target.value)
									}
									className="px-3 py-2 border border-gray-300 rounded-md shadow-sm flex-1"
								/>
								<button
									onClick={() =>
										store.setFilters({ deviceTypes: [] })
									}
									disabled={selectedTypes.length === 0}
									className="px-4 py-2 border border-gray-300 rounded-md shadow-sm disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
								>
									Очистить
								</button>
							</div>
							<div className="max-h-96 overflow-y-auto space-y-2">
								{filteredTypes.map((type) => (
									<label
										key={type.id}
										className="flex items-center space-x-2 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={selectedTypes.includes(
												type.id
											)}
											onChange={() =>
												store.toggleDeviceType(type.id)
											}
											className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
										/>
										<span className="text-sm text-gray-700">
											{type.name}
										</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
