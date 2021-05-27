// node modules
import * as React from 'react';
import { Layout } from 'antd';
// components
import HeaderComponent from 'components/general/HeaderComponent';
import SidebarComponent from 'components/general/SidebarComponent';

const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout hasSider className="site-layout-background">
      <SidebarComponent />
      <Layout>
        <HeaderComponent />
        <Content
          className="site-layout-background"
          style={{
            padding: '10px 0 10px 0',
            margin: 0,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
