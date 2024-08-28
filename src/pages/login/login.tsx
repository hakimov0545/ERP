import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import logo from "@images/logo.png";
import loginImage from "@images/loginImage.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [form] = Form.useForm();

	const navigate = useNavigate();

	const email = "admin@gmail.com";
	const password = "123";

	const onFinish = () => {
		const values = form.getFieldsValue();
		console.log({ values });
		if (values.email === email) {
			if (values.password === password) {
				navigate("/admin/dashboard");
			} else {
				message.error("Password notogri kiritildi");
			}
		}
	};

	return (
		<Row style={{ minHeight: "100vh" }}>
			<Col span={12}>
				<div className="px-36 py-12">
					<div className="flex justify-between items-center">
						<div className="demo-logo-vertical pt-9 pb-10 text-center">
							<img
								src={logo}
								alt=""
								className="mx-auto"
							/>
							<p className="text-blue-700 text-base">
								UiUxOtor
							</p>
							<p>ERP System</p>
						</div>
						<Button
							style={{
								height: "50px",
								borderRadius: "15px",
							}}
						>
							Sign Up
						</Button>
					</div>
					<p>Welcome back</p>
					<p className="text-3xl font-bold mb-10">
						Please Sign In
					</p>
					<Form
						onFinish={onFinish}
						form={form}
						style={{ marginRight: "70px" }}
						layout="vertical"
					>
						<Form.Item
							name="email"
							label="Email address"
							rules={[
								{
									required: true,
									message:
										"Please enter your email",
								},
							]}
						>
							<Input
								style={{
									height: "50px",
									borderRadius: "15px",
								}}
								placeholder="Enter your email"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							label="Password"
							rules={[
								{
									required: true,
									message:
										"Please enter your password",
								},
							]}
						>
							<Input
								type="password"
								style={{
									height: "50px",
									borderRadius: "15px",
								}}
							/>
						</Form.Item>
						<Button
							type="primary"
							style={{
								width: "100%",
								height: "50px",
								borderRadius: "15px",
							}}
							onClick={form.submit}
						>
							Sign In
						</Button>
					</Form>
				</div>
			</Col>
			<Col span={12}>
				<img
					src={loginImage}
					style={{ width: "100%", height: "100%" }}
					alt=""
				/>
			</Col>
		</Row>
	);
};
