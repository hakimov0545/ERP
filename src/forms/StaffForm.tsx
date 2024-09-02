import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export const StaffForm = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = location.state || {};

	return (
		<div>
			<Button type="primary" onClick={() => navigate(-1)}>
				<IoChevronBack />
				Back
			</Button>
			{id ? id : "Form"}
		</div>
	);
};
