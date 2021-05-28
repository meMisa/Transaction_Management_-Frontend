// node modules
import * as React from 'react';
import { Layout, Avatar, Typography, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// apis
import { CURRENT_USER } from 'apis/client';
// types
import { AccountInfo } from 'types/accountTypes';
// images
import profile_icon from 'assets/images/profile_icon.png';
// texts
import { BALANCE } from 'constants/texts';
// styles
import 'styles/header.css';

const { Header } = Layout;
const { Text, Title } = Typography;

const HeaderComponent = ({ account_id, balance }: AccountInfo) => {
  const contetnt = (
    <div className="text-align-center padding-1">
      <Avatar size={64} icon={<UserOutlined />} src={profile_icon} />
      <Title level={4} className="margin-top-1">
        Misa Qarahqani
      </Title>
      <Text className="display-block">misa64gh@gmail.com</Text>
      <Text className="display-block">{account_id}</Text>
      <Title level={5} className="">
        {BALANCE}
        {balance}
      </Title>
    </div>
  );

  return (
    <Header className="header direction-rtl">
      <Popover content={contetnt} trigger="click" placement="topRight">
        <Avatar
          size={'large'}
          icon={<UserOutlined />}
          src={profile_icon}
          className="cursor-pointer"
        />
      </Popover>
    </Header>
  );
};
export default HeaderComponent;
