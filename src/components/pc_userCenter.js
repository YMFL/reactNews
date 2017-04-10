/**
 * Created by YangQianHui on 2017/4/10.
 */
import React from 'react';
import {Tabs, Row, Col, Upload, Icon, Modal, Card} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';


const TabPane = Tabs.TabPane;
class PCUserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      usercollaection: '',
      previewImage: '',
      previewVisible: false
    }
  };

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          usercollaection: json
        })
        document.title = this.state.newsItem.title + "- React News | React 驱动的新闻平台";
      });
  };

  render() {
    const props = {
      action: 'http://newsapi.gugujiankong.com/Handler.ashx',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      listType: 'picture-card',
      defaultFileList: [
        {
          uid: -1,
          name: "xxx.png",
          state: "done",
          url: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
          thumbUrl: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
          // url: 'https://avatars1.githubusercontent.com/u/18079377?v=3&s=460',
          // thumbUrl: 'https://avatars1.githubusercontent.com/u/18079377?v=3&s=460',
        }
      ],
      onPreview: (file) => {
        this.setState({
          previewImage: file.url,
          previewVisible: true
        })
      }
    }
    const {usercollaection} =this.state;
    const usercollaectionList = usercollaection.length ?
      usercollaection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{uc.Title}</p>
        </Card>
      ))
      : '您还没有收藏任何新闻，快去收藏一些新闻吧！';
    return (
      <div>
        <PCHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <div className="comment">
                  <Row>
                    <Col span={24}>
                      {usercollaectionList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="我的评论" key="2">
              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus"/>
                    <div className="ant-upload-text">上传照片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img src={this.state.previewImage} alt="预览"/>
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter />
      </div>
    );
  }
}
PCUserCenter.defaultProps = {};

export default PCUserCenter;
