import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Breadcrumb,
  Button,
  Col,
  ConfigProvider,
  Flex,
  Layout,
  Menu,
  Row,
  Select,
  theme,
} from "antd";
import {
  UploadOutlined,
  DotChartOutlined,
  OrderedListOutlined,
  UnderlineOutlined,
  UsergroupAddOutlined,
  InsuranceOutlined,
} from "@ant-design/icons";
import defaultTheme, { direction } from "./themes/defaultTheme";
import ContractsTable from "./tables/constracts";
import { DirectionType } from "antd/es/config-provider";

// https://ant.design/components/layout#components-layout-demo-custom-trigger

const sideBarItems = [
  {
    key: "1",
    icon: <InsuranceOutlined />,
    label: "Договоры ДМС",
  },
  {
    key: "2",
    icon: <DotChartOutlined />,
    label: "Программы страхования",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Застрахованные",
  },
  {
    key: "4",
    icon: <OrderedListOutlined />,
    label: "Сделки",
  },
  {
    key: "5",
    icon: <UnderlineOutlined />,
    label: "Заявки",
  },
  {
    key: "6",
    icon: <UsergroupAddOutlined />,
    label: "Пользователи",
  },
];

const App: React.FC = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider theme={defaultTheme} direction={direction}>
      <Layout>
        <Header style={{ alignItems: "center" }}>
          <div className="demo-logo" />
          {/* <Menu
            mode="horizontal"
            items={sideBarItems}
            style={{ flex: 1, minWidth: 0 }}
          /> */}
          <Row justify={"space-between"}>
            <Col>
              <Button type="primary" size="middle">
                Добавить сделку
              </Button>
            </Col>
            <Col>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Выберите страхователя"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                ]}
              />
              <Select
                showSearch
                style={{ width: 200, marginLeft: 15 }}
                placeholder="Выберите договоры"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                ]}
              />
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={sideBarItems}
            />
          </Sider>
          <Layout style={{ padding: "0 20px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Главная</Breadcrumb.Item>
              <Breadcrumb.Item>Договоры ДМС</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 5,
                margin: 0,
                minHeight: "100vh",
                // background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <ContractsTable></ContractsTable>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
