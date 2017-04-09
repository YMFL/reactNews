/**
 * Created by YangQianHui on 2017/4/9.
 */
import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';


class MobileNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    }
  };

  componentDidMount() {
    let myFetchOptions = {
      method: 'GET'
    }
    console.log(this.props);
    console.log(this.props.params);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          newsItem: json
        })
        document.title = this.state.newsItem.title + "- React News | React 驱动的新闻平台";
      });
  }

  creatMarkup() {
    return {__html: this.state.newsItem.pagecontent};
  };

  render() {
    return (
      <div id="mobileDetailsContainer">
        <MobileHeader></MobileHeader>
        <div className="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.creatMarkup()}></div>
              <hr/>
              <CommonComments></CommonComments>
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop/>
        </div>
      </div>
    );
  }
}
MobileNewsDetails.defaultProps = {};

export default MobileNewsDetails;
