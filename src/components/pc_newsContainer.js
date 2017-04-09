/**
 * Created by YangQianHui on 2017/4/8.
 */
import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
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
              <div>
                <PCNewsImageBlock count={6} type="guoji" width="400px"  cardTitle="国际头条"  imageWidth="112px"/>
                {/*<PCNewsImageBlock count={6} type="yule" width="400px"  cardTitle="娱乐头条"  imageWidth="112px"/>*/}
              </div>
            </div>
            {/*<div className="rightContainer">*/}
            {/*</div>*/}
            <Tabs className="tabs_news">
              <TabPane tab="头条" key="1">
                <PCNewsBlock count={22} type='top' width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="社会" key="2">
                <PCNewsBlock count={22} type='shehui' width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国内" key="3">
                <PCNewsBlock count={22} type='guonei' width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际" key="4">
                <PCNewsBlock count={22} type='guoji' width="100%" bordered="false" />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={8}  type='guonei' width="100%" cardTitle="国内新闻"imageWidth="112px" ></PCNewsImageBlock>
              <PCNewsImageBlock count={16} type='yule' width="100%" cardTitle="娱乐新闻"imageWidth="112px" ></PCNewsImageBlock>
            </div>
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
