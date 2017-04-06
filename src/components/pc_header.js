/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
import { Row,Col } from 'antd';
import { Menu, Icon } from 'antd';
class PCHeader extends React.Component {
  constructor(){
    super();
    this.state={
      current:'top'
    };
  }
  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>

          <Col span={4}>
            <a href="/" className="logo">
              <img src="../images/news.png" alt="logo"/>
              <span>React News</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu  mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore" />头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="user" />社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="flag" />国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="global" />国际
              </Menu.Item>
              <Menu.Item  key="yule">
                <Icon type="smile" />娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="trophy" />体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="api" />科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="coffee" />时尚
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}
PCHeader.defaultProps = {
};

export default PCHeader;
