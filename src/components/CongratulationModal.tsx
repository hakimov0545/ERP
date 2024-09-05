import { Button, Flex, Modal, Typography } from "antd";
import SVG from "../images/Congurguations.svg";

function CongratulationModal() {
  return (
    <>
      <Modal
        title={false}
        closable={false}
        footer={null}
        width={280}
        centered
        open={true}
      >
        <Flex className="text-center" vertical align="center">
          <img src={SVG} alt="" />
          <Typography.Title level={5}>Congurguations</Typography.Title>
          <Typography.Text className="mb-4">
            Your budget has been submitted successfully.
          </Typography.Text>
          <Button className="px-8" type="primary" size="large">
            Ok
          </Button>
        </Flex>
      </Modal>
    </>
  );
}

export default CongratulationModal;
