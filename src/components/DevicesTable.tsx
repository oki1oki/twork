"use client";

import { useDeviceStore } from "@/store/deviceStore";
import { useState } from "react";
import { FilterDialogs } from "./FilterDialogs";
import { devices } from "@/data";
import { Device } from "./Device";

const FilterIcon = () => (
	<svg
		className="h-4 w-4 inline-block ml-1"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
		/>
	</svg>
);

export const DevicesTable = () => {
	const store = useDeviceStore();
	const [isBrandDialogOpen, setIsBrandDialogOpen] = useState(false);
	const [isTypeDialogOpen, setIsTypeDialogOpen] = useState(false);

	const clearAllFilters = () => {
		store.resetFilters();
	};

	const hasActiveFilters = () => {
		const filters = store.filters;
		return (
			(filters?.brands && filters.brands.length > 0) ||
			(filters?.deviceTypes && filters.deviceTypes.length > 0) ||
			(filters?.minPrice !== undefined &&
				filters.minPrice !== null &&
				filters.minPrice > 0) ||
			(filters?.maxPrice !== undefined &&
				filters.maxPrice !== null &&
				filters.maxPrice < Infinity)
		);
	};

	const filteredDevices = store.filteredDevices(devices);

	return (
		<div className="space-y-4">
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<input
							type="text"
							placeholder="Поиск..."
							value={store.filters?.search || ""}
							onChange={(e) =>
								store.setFilters({ search: e.target.value })
							}
							className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-64"
						/>
						<div className="flex gap-2">
							<input
								type="number"
								placeholder="Мин. цена"
								value={store.filters?.minPrice || ""}
								onChange={(e) =>
									store.setFilters({
										minPrice: e.target.value
											? Number(e.target.value)
											: null,
									})
								}
								className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-32"
							/>
							<input
								type="number"
								placeholder="Макс. цена"
								value={store.filters?.maxPrice || ""}
								onChange={(e) =>
									store.setFilters({
										maxPrice: e.target.value
											? Number(e.target.value)
											: null,
									})
								}
								className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-32"
							/>
						</div>
					</div>
					<button
						onClick={clearAllFilters}
						disabled={!hasActiveFilters()}
						className="px-4 py-2 border border-gray-300 rounded-md shadow-sm disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
					>
						Очистить все фильтры
					</button>
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								ID
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Модель
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Цена
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
								onClick={() => setIsBrandDialogOpen(true)}
							>
								Бренд <FilterIcon />
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Вариация
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
								onClick={() => setIsTypeDialogOpen(true)}
							>
								Тип <FilterIcon />
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Комментарий
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Описание
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredDevices.map((device) => (
							<Device key={device.id} {...device} />
						))}
					</tbody>
				</table>
			</div>

			<FilterDialogs
				isBrandDialogOpen={isBrandDialogOpen}
				isTypeDialogOpen={isTypeDialogOpen}
				onBrandDialogClose={() => setIsBrandDialogOpen(false)}
				onTypeDialogClose={() => setIsTypeDialogOpen(false)}
			/>
		</div>
	);
};
