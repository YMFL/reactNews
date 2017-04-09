/**
 * Created by YangQianHui on 2017/4/6.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';

import '../style/mobile.less';
import MobileList from './mobile_list';

const TabPane =Tabs.TabPane;

class MoblieIndex extends React.Component {
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
        <MobileHeader></MobileHeader>
        <Tabs >
          <TabPane tab="头条" key="1">
            <div className="carousel" >
              <Carousel {...setting} >
                <div><img src="../images/carousel_1.jpg" alt="carousel_1.jpg"/></div>
                <div><img src="../images/carousel_2.jpg" alt="carousel_2.jpg"/></div>
                <div><img src="../images/carousel_3.jpg" alt="carousel_3.jpg"/></div>
                <div><img src="../images/carousel_4.jpg" alt="carousel_4.jpg"/></div>
              </Carousel>
            </div>
            <MobileList count="20" type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count="20" type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count="20" type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count="20" type="guoji" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count="20" type="yule" />
          </TabPane>
          <TabPane tab="体育" key="6">
            <MobileList count="20" type="tiyu" />
          </TabPane>
          <TabPane tab="科技" key="7">
            <MobileList count="20" type="keji" />
          </TabPane>
          <TabPane tab="时尚" key="8">
            <MobileList count="20" type="shishang" />
          </TabPane>
        </Tabs>
        <MobileFooter/>
      </div>
    );
  }
}
MoblieIndex.defaultProps = {
};

export default MoblieIndex;
