/**
 * Created by YangQianHui on 2017/4/9.
 */
import React from 'react';
import {Row, Col, Form, Input,Button,Card} from 'antd'
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
    let myFetchOptions ={
      method:'GET'
    };
    var formdata=this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+ localStorage.userid+
      "&comment="+formdata.remark+"&uniquekey=" + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      });
  };
  render() {
    let {getFieldDecorator} = this.props.form;
    const {comments}=this.state;
    const commentList=comments.length?
      comments.map((comment,index)=>(
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
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
CommonComments.defaultProps = {};

export default CommonComments=Form.create({})(CommonComments);
