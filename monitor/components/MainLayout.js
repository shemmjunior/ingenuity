import React from "react";
import { Layout, Tabs } from "antd";
import styles from "../styles/Main.module.css";
import Dashboard from "../pages/dashboard";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

export default function MainLayout({ children }) {
  return (
    <Layout>

      <Header>
        <div className={styles.fwhite}>Application Metrics for Nodejs</div>
      </Header>

      <Content className={styles.content}>
        <Tabs>
          <TabPane tab="Dashboard" key="1">
            <Dashboard/>
          </TabPane>
          <TabPane tab="Profiling" key="2">
            Profiling
          </TabPane>
          <TabPane tab="Summary" key="3">
            Summary
          </TabPane>
        </Tabs>
        {children}
      </Content>

    </Layout>
  );
}
