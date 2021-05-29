// node modules
import * as React from 'react';
import { Layout } from 'antd';
// components
import HeaderComponent from 'components/general/HeaderComponent';
import SidebarComponent from 'components/general/SidebarComponent';
// hooks
import useAccountInfo from '../../hooks/useAccountInfo';

const AccountInfo = {
  account_id: '',
  balance: 0,
};
export const UserDetailContext = React.createContext(AccountInfo);

const { Content } = Layout;

const TransactionLayout = ({ children }) => {
  // ************************************************* State **********************************************************
  const { userInfo } = useAccountInfo();

  return (
    <UserDetailContext.Provider value={userInfo}>
      <Layout hasSider className="site-layout-background">
        <SidebarComponent />
        <Layout>
          <HeaderComponent {...userInfo} />
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
    </UserDetailContext.Provider>
  );
};

export default TransactionLayout;
