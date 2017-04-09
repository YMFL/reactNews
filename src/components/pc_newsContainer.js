/**
 * Created by Administrator on 2017/4/8.
 */
import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';

const TabPane =Tabs.TabPane;
class PCNewsContainer extends React.Component {
  render() {
    const setting={
      dots:true,
      speed:500,
      infinite:true,
      slidesToShow:1,
      autoplay:true
    }
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel" >
                <Carousel {...setting} >
                  <div><img src="../images/carousel_1.jpg" alt="carousel_1.jpg"/></div>
                  <div><img src="../images/carousel_2.jpg" alt="carousel_2.jpg"/></div>
                  <div><img src="../images/carousel_3.jpg" alt="carousel_3.jpg"/></div>
                  <div><img src="../images/carousel_4.jpg" alt="carousel_4.jpg"/></div>
                </Carousel>
              </div>
            </div>
            <div className="rightContainer"></div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
PCNewsContainer.defaultProps = {
};

export default PCNewsContainer;
