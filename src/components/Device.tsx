export const Device = () => {
	return (
		<tr className={`border-b  hover:bg-gray-100`}>
			<td className="px-6 py-4">{product.id}</td>
			<td className="px-6 py-4 font-medium text-gray-900">
				{product.name}
			</td>
			<td className="px-6 py-4">{product.brand}</td>
			<td className="px-6 py-4">{product.price}</td>
			<td className="px-6 py-4">{product.quantity}</td>
			<td className="px-6 py-4">{product.value}</td>
			<td className="px-6 py-4 flex space-x-2">
				<button className="text-blue-600 hover:underline">Peд.</button>
				<button className="text-red-600 hover:underline">Уд.</button>
			</td>
		</tr>
	);
};
