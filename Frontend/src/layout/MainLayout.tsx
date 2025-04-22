import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),
  getItem('Option 2', '2', <PieChartOutlined />),


];

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
  <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    style={{
      position: 'fixed',
      left: 0,
      top: 64, // below the header
      bottom: 0,
      overflowY: 'auto',
      zIndex: 9,
    }}
    width={200}
  >
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
  </Sider>

  <Layout style={{ marginLeft: collapsed ? 90 : 200 }}>
    <Header
      style={{
        background: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 64,
        lineHeight: '64px',
        fontWeight: 'bold',
      }}
    >
      hello TypeScript
    </Header>

    <Content
      style={{
        marginTop: 84, // push down under header
        padding: '24px',
        minHeight: '100vh',
        background: colorBgContainer,
      }}
      className=' max-w-6xl border-2 border-red-50 mx-auto '
    >
      <div className="">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </h1>
      </div>
    </Content>
  </Layout>
</Layout>
  );
};

export default MainLayout;