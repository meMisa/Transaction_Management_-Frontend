// node modules
import * as React from 'react';
import { Layout, Avatar, Typography, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// images
import profile_icon from 'assets/images/profile_icon.png';
// styles
import 'styles/header.css';

const { Header } = Layout;
const { Text, Title } = Typography;

const HeaderComponent = () => {
  const contetnt = (
    <div className="text-align-center padding-1">
      <Avatar size={64} icon={<UserOutlined />} src={profile_icon} />
      <Title level={4} className="margin-top-1">
        Misa Qarahqani
      </Title>
      <Text className="display-block">misa64gh@gmail.com</Text>
    </div>
  );

  return (
    <Header className="header direction-rtl">
      <Popover content={contetnt} trigger="click" placement="topRight">
        <Avatar
          size={'large'}
          // Popover
          icon={<UserOutlined />}
          src={profile_icon}
          className="cursor-pointer"
        />
      </Popover>
    </Header>
  );
};
export default HeaderComponent;
