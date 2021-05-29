// node modules
import * as React from 'react';
import { Layout, Drawer } from 'antd';
// components
import SidebarMenuComponent from 'components/general/SidebarMenuComponent';
// images
import mentimeter_logo from 'assets/images/mentimeter_logo.png';
// styles
import 'styles/sidebar.css';

const { Sider } = Layout;

const SidebarComponent = () => {
  const [visibleDrawer, setVisibleDrawer] = React.useState(false);

  const handleCollapse = (collapse, type) => {
    if (type === 'clickTrigger' && !collapse) {
      setVisibleDrawer(true);
    } else if (type === 'responsive' && collapse) {
      setVisibleDrawer(false);
    }
  };
  const onCloseDrawer = () => {
    setVisibleDrawer(false);
  };

  return (
    <div data-testid="sidebar">
      {visibleDrawer ? (
        <Drawer
          className="text-align-center"
          title={
            <img
              className="margin-auto mentimeter-logo-sidebar"
              alt="clexi"
              src={mentimeter_logo}
            />
          }
          placement="left"
          closable={true}
          onClose={onCloseDrawer}
          visible={visibleDrawer}
        >
          <SidebarMenuComponent />
        </Drawer>
      ) : (
        <Sider
          className="sidebar-wrapper text-align-center"
          width={272}
          breakpoint="md"
          collapsedWidth={0}
          theme={'light'}
          onCollapse={handleCollapse}
        >
          <img
            className="margin-auto mentimeter-logo-sidebar"
            alt="clexi"
            src={mentimeter_logo}
          />
          <SidebarMenuComponent />
        </Sider>
      )}
    </div>
  );
};

export default SidebarComponent;
