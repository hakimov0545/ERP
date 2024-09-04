import styled from "@emotion/styled/macro";
import { FaAngleLeft } from "react-icons/fa6";
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
function BackLinkButton() {
  return (
    <CustomLink>
      <span>
        <FaAngleLeft />
      </span>
      Back
    </CustomLink>
  );
}

export default BackLinkButton;
