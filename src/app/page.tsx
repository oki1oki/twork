"use client";

import { useState } from "react";

type Product = {
	id: number;
	name: string;
	price: number;
	brand: string;
	quantity: number;
	value: number;
};

type Filter = {
	brands: string[];
};

export default function ProductsTable() {
	// Моковые данные (в реальном приложении будут приходить с API)
	const initialProducts: Product[] = [
		{
			id: 1,
			name: "Клавиша Smart Light Switch",
			price: 6,
			brand: "Aubess",
			quantity: 1,
			value: 6,
		},
		{
			id: 5,
			name: "Диммер светодиодных лент D0742",
			price: 3,
			brand: "PICOME",
			quantity: 1,
			value: 3,
		},
		{
			id: 7,
			name: "Измеритель электро параметров CTR4A01",
			price: 0,
			brand: "eletechsup",
			quantity: 1,
			value: 0,
		},
		// ... остальные продукты из вашего примера
	];

	const [products, setProducts] = useState<Product[]>(initialProducts);
	const [filters, setFilters] = useState<Filter>({ brands: [] });
	const [showBrandFilter, setShowBrandFilter] = useState(false);

	// Получаем уникальные бренды для фильтра
	const allBrands = Array.from(new Set(initialProducts.map((p) => p.brand)));

	const toggleBrandFilter = (brand: string) => {
		setFilters((prev) => {
			const newBrands = prev.brands.includes(brand)
				? prev.brands.filter((b) => b !== brand)
				: [...prev.brands, brand];

			return { ...prev, brands: newBrands };
		});
	};

	// Применяем фильтры
	const filteredProducts = products.filter((product) => {
		if (
			filters.brands.length > 0 &&
			!filters.brands.includes(product.brand)
		) {
			return false;
		}
		return true;
	});

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Show 10 entries</h1>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								ID
							</th>
							<th scope="col" className="px-6 py-3">
								Name Device
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">
									Brand
									<button
										onClick={() =>
											setShowBrandFilter(!showBrandFilter)
										}
										className="ml-1 p-1"
									>
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</button>
									{/* Выпадающий фильтр для брендов */}
									{showBrandFilter && (
										<div className="absolute z-10 mt-8 bg-white shadow-lg rounded-md p-2 w-48 max-h-60 overflow-auto">
											{allBrands.map((brand) => (
												<div
													key={brand}
													className="flex items-center p-1"
												>
													<input
														type="checkbox"
														id={`brand-${brand}`}
														checked={filters.brands.includes(
															brand
														)}
														onChange={() =>
															toggleBrandFilter(
																brand
															)
														}
														className="mr-2"
													/>
													<label
														htmlFor={`brand-${brand}`}
													>
														{brand}
													</label>
												</div>
											))}
										</div>
									)}
								</div>
							</th>
							<th scope="col" className="px-6 py-3">
								Цена
							</th>
							<th scope="col" className="px-6 py-3">
								Количество
							</th>
							<th scope="col" className="px-6 py-3">
								Стоимость
							</th>
							<th scope="col" className="px-6 py-3">
								Управление
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredProducts.map((product, index) => (
							<tr
								key={product.id}
								className={`border-b ${
									index % 2 === 0 ? "bg-white" : "bg-gray-50"
								} hover:bg-gray-100`}
							>
								<td className="px-6 py-4">{product.id}</td>
								<td className="px-6 py-4 font-medium text-gray-900">
									{product.name}
								</td>
								<td className="px-6 py-4">{product.brand}</td>
								<td className="px-6 py-4">{product.price}</td>
								<td className="px-6 py-4">
									{product.quantity}
								</td>
								<td className="px-6 py-4">{product.value}</td>
								<td className="px-6 py-4 flex space-x-2">
									<button className="text-blue-600 hover:underline">
										Peд.
									</button>
									<button className="text-red-600 hover:underline">
										Уд.
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
