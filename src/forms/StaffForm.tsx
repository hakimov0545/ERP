import {
  Button,
  Form,
  GetProp,
  Input,
  message,
  Select,
  Upload,
  UploadProps,
} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { LoadingOutlined } from "@ant-design/icons";
import { IoCamera } from "react-icons/io5";
import styled from "@emotion/styled";
import { FaAngleLeft } from "react-icons/fa6";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const CustomLink = styled.a`
  width: 95px;
  padding-left: 10px;
  color: #0000ff;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 6px;
  margin-bottom: 16px;
  border: 1px solid #0000ff;
  border-radius: 12px;
`;

export const StaffForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const staff = useSelector((state: RootState) => state.staff.staff);
  const { id } = location.state || {};

  const [form] = Form.useForm();

  useEffect(() => {
    if (id) form.setFieldsValue(staff.find((f) => f.id === id));
  }, [id]);

  const onFinish = () => {
    console.log("onFinish");
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleUploadChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <IoCamera
          style={{
            fontSize: "24px",
            marginInline: "auto",
            color: "gray",
          }}
        />
      )}
      <div style={{ marginTop: 8, color: "gray" }}>Upload photo</div>
    </button>
  );

  return (
    <div>
      <CustomLink onClick={() => navigate(-1)}>
        <span>
          <FaAngleLeft />
        </span>
        Back
      </CustomLink>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          width: "100%",
        }}
        className="px-5 py-6 my-5"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-3 gap-3"
        >
          <div
            style={{
              border: "1px solid gainsboro",
              borderRadius: "10px",
            }}
          >
            <div className="py-12 text-center">
              <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                beforeUpload={beforeUpload}
                onChange={handleUploadChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
              <div className="mt-5 text-center">
                <p className="text-gray-600 text-md">Allowed format</p>
                <p className="text-lg">JPG, JPEG, and PNG</p>
              </div>
              <div className="mt-5 text-center">
                <p className="text-gray-600 text-md">Max file size</p>
                <p className="text-lg">2MB</p>
              </div>
            </div>
          </div>
          <div>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter first name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email address"
              rules={[
                {
                  required: true,
                  message: "Please enter email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender",
                },
              ]}
            >
              <Select
                onChange={(event) => {
                  form.setFieldsValue({
                    gender: event.target.value,
                  });
                }}
              >
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="roleId"
              label="Role"
              rules={[
                {
                  required: true,
                  message: "Please select role",
                },
              ]}
            >
              <Select
                onChange={(event) => {
                  form.setFieldsValue({
                    gender: event.target.value,
                  });
                }}
              >
                <Select.Option value="1">First</Select.Option>
                <Select.Option value="2">Second</Select.Option>
                <Select.Option value="3">Third</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="staffId" label="Staff ID">
              <Input
                readOnly
                placeholder="Staff ID"
                className="bg-gray-100 hover:bg-gray-100"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please enter last name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please enter phone number",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="designationId"
              label="Designation"
              rules={[
                {
                  required: true,
                  message: "Please select designation",
                },
              ]}
            >
              <Select
                onChange={(event) => {
                  form.setFieldsValue({
                    gender: event.target.value,
                  });
                }}
              >
                <Select.Option value="1">First</Select.Option>
                <Select.Option value="2">Second</Select.Option>
                <Select.Option value="3">Third</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="officialEmail" label="Official email">
              <Input
                readOnly
                placeholder="Official Email"
                className="bg-gray-100 hover:bg-gray-100"
              />
            </Form.Item>
          </div>

          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "10px",
              marginTop: "15px",
            }}
          >
            {location.pathname.includes("add") ? "Add" : "Edit"} staff
          </Button>
        </Form>
      </div>
    </div>
  );
};
