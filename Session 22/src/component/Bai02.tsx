import React from "react";
import { Input, Space } from "antd";

export default function Bai02() {
  return (
    <div>
      <Space direction="vertical" style={{ width: 300 }}>
        <Input size="large" placeholder="Input cỡ lớn" />
        <Input placeholder="Input cỡ trung bình" />
        <Input size="small" placeholder="Input cỡ bé" />
      </Space>
    </div>
  );
}
