import { RootState } from "@store";
import { useSelector } from "react-redux";

export const Dashboard = () => {
	const { employees } = useSelector(
		(state: RootState) => state.employees
	);

	console.log({ employees });

	return (
		<div>
			<p className="text-2xl font-bold">Dashboard</p>
			{employees.map((m) => {
				return <div>{m.name}</div>;
			})}
		</div>
	);
};
