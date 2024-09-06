import { Flex, Input } from "antd";

function Circulars() {
	return (
		<>
			<Flex>
				<div style={{ width: "350px" }}>
					<p className="mb-3 text-lg">
						Quick search a staff
					</p>
					<Input
						placeholder="Enter a search word"
						className="h-[50px]"
						style={{ borderRadius: "10px" }}
					/>
				</div>
			</Flex>
		</>
	);
}

export default Circulars;
