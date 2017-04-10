/**
 * Created by YangQianHui on 2017/4/10.
 */
import React from 'react';
import {Tabs,Row,Col } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';


const TabPane=Tabs.TabPane;
class MobileUserCenter extends React.Component {
    render() {
        return (
            <div>
              <MobileHeader></MobileHeader>
              <Row>
                <Col span={24}>
                  <Tabs>
                    <TabPane tab="我的收藏列表"  key="1">
                    </TabPane>
                    <TabPane tab="我的评论"  key="2">
                    </TabPane>
                    <TabPane tab="头像设置"  key="3">
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
              <MobileFooter></MobileFooter>
            </div>
        );
    }
}
MobileUserCenter.defaultProps = {};

export default MobileUserCenter;
