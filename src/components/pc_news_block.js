/**
 * Created by YangQianHui on 2017/4/8.
 */
import React from 'react';
import { Card } from 'antd';
import {Router, Route, hasHistory, Link} from 'react-router';

class PCNewsBlock extends React.Component {
  constructor(){
    super();
    this.state={
      news:''
    }
  };
  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+ this.props.type+"&count="+this.props.count,myFetchOptions)
      .then(response=>response.json())
      .then(json=>this.setState({news:json}))
  };
  render() {
    const {news}=this.state;
    const newsList=news.length ?
      news.map((newsItem,index)=>
        <li key={index}>
          <Link to={'details/${newsItem.uniquekey}'} target="_blank" title={newsItem.title}>
            {newsItem.title}
          </Link>
        </li>
      ) :'没有加载到任何新闻';

    return (
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  }
}
PCNewsBlock.defaultProps = {
};

export default PCNewsBlock;
