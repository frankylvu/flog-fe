import React, { useState } from 'react'

import styles from './App.module.less'

import { Layout, Menu, Space, Breadcrumb } from 'antd'
const { Header, Content, Sider } = Layout

function App() {
  const [currentTab, setCurrentTab] = useState('1')

  const onClikcMenu = (item: any) => {
    setCurrentTab(item.key)
  }

  return (
    <Layout className={styles.app}>
      <Header className={styles.header}>
        <div className={styles.profile}></div>
        <Menu theme="light" mode="horizontal" selectedKeys={[currentTab]} onClick={onClikcMenu}>
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">实战</Menu.Item>
          <Menu.Item key="3">博客</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider></Sider>
      </Layout>
    </Layout>
  )
}

export default App
