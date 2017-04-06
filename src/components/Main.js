import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Button type="danger">Danger</Button>
        <Button type="danger">Danger</Button>
        <Button type="danger">Danger</Button>
        <Button type="danger">Danger</Button>
        <Button>Default</Button>
        <div>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8} offset={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6} offset={6}>col-6 col-offset-6</Col>
            <Col span={6} offset={6}>col-6 col-offset-6</Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>col-12 col-offset-6</Col>
          </Row>
        </div>
      </div>
    );
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;
