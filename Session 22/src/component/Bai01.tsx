import React from "react";
import { Button, Space } from "antd";

export default function Bai01() {
  return (
    <div>
      <Space wrap>
        <Button type="primary">Lưu</Button>
        <Button>Hủy</Button>
        <Button type="dashed">Thành công</Button>
        <Button type="default">Cảnh báo</Button>
        <Button type="primary" danger>
          Báo lỗi
        </Button>
        <Button type="dashed">Thông tin</Button>
        <Button type="link">Đường dẫn</Button>
      </Space>
    </div>
  );
}
