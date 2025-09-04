import React from "react";
import { Card, Button, Row, Col } from "antd";

const { Meta } = Card;

export default function Bai03() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt="MacBook Air"
                src="https:../"
              />
            }
            actions={[
              <Button type="primary">Xem chi tiết</Button>,
              <span style={{ padding: "8px", fontWeight: "bold" }}>
                30.000.000 đ
              </span>,
            ]}
          >
            <Meta
              title="MacBook Pro"
              description="The reason I am selling the machine is because it is too much power for what I need"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt="MacBook Pro 2021"
                src="../"
              />
            }
            actions={[
              <Button type="primary">Xem chi tiết</Button>,
              <span style={{ padding: "8px", fontWeight: "bold" }}>
                20.000.000 đ
              </span>,
            ]}
          >
            <Meta
              title="MacBook Pro Max"
              description="The reason I am selling the machine is because it is too much power for what I need"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
