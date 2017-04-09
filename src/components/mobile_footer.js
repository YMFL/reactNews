
/**
 * Created by YangQianHui on 2017/4/6.
 */
import React from 'react';
import { Row,Col } from 'antd';

class MobileFooter extends React.Component {
  constructor(){
    super();
    this.state={
      date:(new Date()).getFullYear()
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className='footer'>
            &copy;&nbsp;{[this.state.date]} ReactNews, All Rights Reserved.
            <footer></footer>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
MobileFooter.defaultProps = {
};

export default MobileFooter;
