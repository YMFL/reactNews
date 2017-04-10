/**
 * Created by YangQianHui on 2017/4/9.
 */
import React from 'react';
import {Row, Col, Form, Input, Button, Card,notification} from 'antd'
const FormItem = Form.Item;
class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    }
  };

  componentDidMount() {
    let myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json
        })
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let myFetchOptions = {
      method: 'GET'
    };
    var formdata = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid +
      "&comment=" + formdata.remark + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      });
  };

  addUserCollection() {
    let myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        //收藏成功以后  进行全局提醒
        notification['succsee']({message:'ReactNews提醒',description:'收藏文章成功'});
      });
  };

  render() {
    let {getFieldDecorator} = this.props.form;
    const {comments}=this.state;
    const commentList = comments.length ?
      comments.map((comment, index) => (
        <Card key={index} title={comment.UserName} extra={<a href="#">发布于{comment.datetime}</a>}>
          {/*API里没有这个Commnets这个参数*/}
          {/*<p>{comment.Commnets}</p>*/}
          <p>{comment.UserName}用户的评论</p>
        </Card>
      ))
      :
      '暂无评论';
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="your comment">
                {getFieldDecorator('remark', {initialValue: 'nice'})
                (<Input type="textarea" placeholder="write your comment :)"/>)}
                <Button type="primary" htmlType="submit">submit</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
CommonComments.defaultProps = {};

export default CommonComments = Form.create({})(CommonComments);
