import { DevicesTable } from "@/components/DevicesTable";
import { devices } from "@/data";

export default function Home() {
	return <DevicesTable devices={devices} />;
}
