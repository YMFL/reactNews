/**
 * Created by YangQianHui on 2017/4/8.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Router, Route, hasHistory, Link} from 'react-router';

class MobileList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    }
  };

  componentWillMount() {
    console.log(this.props.type)
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({news: json}))
  };

  render() {
    const {news}=this.state;
    const newsList = news.length ?
      news.map((newsItem, index) => (
        //遍历  要给key  不然会有警告
        <section key={index} className="m_article list-item special_section clearfix">
          <Link to={`details/${newsItem.uniquekey}`}>
            <div className="m_article_img">
              <img src={newsItem.thumbnail_pic_s} alt={newsItem.uniquekey}/>
            </div>
            <div className="m_article_info">
              <div className="m_article_title">
                <span>{newsItem.title}</span>
              </div>
              <div className="m_article_desc clearfix">
                <div className="m_article_desc_l">
                  <span className="m_article_channel">{newsItem.realtype}</span>
                  <span className="m_article_time">{newsItem.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )) : '没有加载到任何新闻';

    return (
      <div className="topNewsList">
        <Row>
          <Col span={24}>
            {newsList}
          </Col>
        </Row>
      </div>
    );
  }
}
MobileList.defaultProps = {};

export default MobileList;
