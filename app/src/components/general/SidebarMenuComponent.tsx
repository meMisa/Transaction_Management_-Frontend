// node modules
import * as React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import { TransactionOutlined, SettingOutlined } from '@ant-design/icons';
// texts
import { TRANSACTIONS, SETTINGS } from 'constants/texts';

const SidebarMenuComponent = () => {
  const history = useHistory();
  const pathName = history.location.pathname;

  return (
    <Menu mode="inline" selectedKeys={[history.location.pathname]}>
      {/**************************************************** Transactions PART ****************************************************/}
      <Menu.Item key={`/transactions`} className="sidebar-menu">
        <NavLink
          exact
          to={`transactions`}
          activeClassName={'panel-active-menu-item'}
        >
          <Row>
            <Col offset={1} className="sidebar-icon-common">
              <TransactionOutlined
                className={`${
                  pathName === '/transactions'
                    ? 'active-sidebar-icon-transaction'
                    : 'transaction'
                }`}
              />
            </Col>
            <Col offset={2}>
              <span
                className={`font-weight-bold ${
                  pathName === '/transactions'
                    ? 'sidebar-active-color'
                    : 'sidebar-color'
                }`}
              >
                {TRANSACTIONS}
              </span>
            </Col>
          </Row>
        </NavLink>
      </Menu.Item>

      {/**************************************************** Settings PART ****************************************************/}
      <Menu.Item key={`/settings`} className="sidebar-menu">
        <NavLink
          exact
          to={`settings`}
          activeClassName={'panel-active-menu-item'}
        >
          <Row>
            <Col offset={1} className="sidebar-icon-common">
              <SettingOutlined
                className={`${
                  pathName === '/settings'
                    ? 'active-sidebar-icon-transaction'
                    : 'transaction'
                }`}
              />
            </Col>
            <Col offset={2}>
              <span
                className={`font-weight-bold ${
                  pathName === '/settings'
                    ? 'sidebar-active-color'
                    : 'sidebar-color'
                }`}
              >
                {SETTINGS}
              </span>
            </Col>
          </Row>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenuComponent;
