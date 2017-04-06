/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon } from 'antd';
class PCHeader extends React.Component {
  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>

          <Col span={5}>
            <a href="/" className="logo">
              <img src="../images/news.png" alt="logo"/>
              <span>React News</span>
            </a>
          </Col>
          <Col span={15}>
            <Menu  mode="horizontal">
              <Menu.Item key="mail">
                <Icon type="appstore" />头条
              </Menu.Item>
              <Menu.Item >
                <Icon type="user" />社会
              </Menu.Item>
              <Menu.Item >
                <Icon type="flag" />国内
              </Menu.Item>
              <Menu.Item>
                <Icon type="global" />国际
              </Menu.Item>
              <Menu.Item >
                <Icon type="smile" />娱乐
              </Menu.Item>
              <Menu.Item>
                <Icon type="trophy" />体育
              </Menu.Item>
              <Menu.Item>
                <Icon type="api" />科技
              </Menu.Item>
              <Menu.Item>
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
