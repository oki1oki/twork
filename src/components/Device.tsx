import { deviceBrands, deviceTypes } from "@/data";

export interface IDevice {
	id: number;
	model?: string;
	price?: number | null;
	variation?: string | null;
	deviceType?: number;
	brand?: number;
	comment?: string;
	link?: string | null;
	description?: string;
	photo?: string;
	topic?: string;
	finalDevice?: boolean;
}

export const Device = (props: IDevice) => {
	return (
		<tr className="bg-white divide-y divide-gray-200">
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.id}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				<div className="flex gap-2 items-center">
					<span>{props.model || "-"}</span>
					{props.link && (
						<a
							href={props.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:text-blue-700 cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					)}
				</div>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.price ? `${props.price} ₽` : "-"}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.brand
					? deviceBrands.find((i) => i.id == props.brand)?.name
					: "-"}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.variation || "-"}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.deviceType
					? deviceTypes.find((i) => i.id == props.deviceType)?.name
					: "-"}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.comment ? (
					<div
						className="max-w-[200px] truncate"
						title={props.comment}
					>
						{props.comment}
					</div>
				) : (
					"-"
				)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
				{props.description ? (
					<div
						className="max-w-[300px] truncate"
						title={props.description}
					>
						{props.description}
					</div>
				) : (
					"-"
				)}
			</td>
		</tr>
	);
};
