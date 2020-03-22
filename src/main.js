import { Layout, Menu, ConfigProvider } from "antd";
import ReactDOM from "react-dom";
import React from "react";
const { Content } = Layout;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Footer from "@/component/footer.js";
import Header from "@/component/header.js";
import zhCN from "antd/es/locale/zh_CN";
// import "antd/dist/antd.dark.css";
import Index from "@/pages/index";
import About from "@/pages/index";
import Inbox from "@/pages/index";
import Edit from "@/pages/edit";
import Message from "@/pages/index";

const App = props => (
  <ConfigProvider locale={zhCN}>
    <Layout className="layout">
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Layout>
  </ConfigProvider>
);

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/inbox">
          <Inbox />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);

// ReactDOM.render(<App />, document.getElementById("app"));
