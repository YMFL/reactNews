/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
const FormItem = Form.Item;
const SubMemu = Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup;
const TabPane=Tabs.TabPane;
class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible:false,
      action:'login',
      hasLogined:false,
      userNickName:'',
      userid:0
    };
  };
  setModalVisible(value){
    this.setState({modalVisible:value})
  }
  handleClick(e){
    if(e.key='register'){
      this.setState({current:'register'});
      this.setModalVisible(true);
    }else {
      {
        this.setState({current:e.key});
      }
    }
  }
  handleSubmit(e){
    //页面开始向API提交数据
  }



  render() {
    let {getFieldProps} = this.props.form;
    const usershow =this.state.hasLogined?
      <Menu.Item key="logout" className="register">
        <Button type='primary' htmlType="button" >{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank">
          <Button  htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="dashed" htmlType="button">退出</Button>
      </Menu.Item> :
      <Menu.Item key="register" className="register">
        <Icon type="appstore" /> 注册/登录
      </Menu.Item>;
    return (
      <header>
        <Row>
          <Col span={2}></Col>

          <Col span={4}>
            <a href="/" className="logo">
              <img src="../images/news.png" alt="logo"/>
              <span>React News</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
              <Menu.Item key="top">
                <Icon type="appstore"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="user"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="flag"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="global"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="smile"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="trophy"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="api"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="coffee"/>时尚
              </Menu.Item>
              {usershow}
            </Menu>
            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      <input type="text" placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                    </FormItem>
                    <FormItem label="密码">
                      <input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                    </FormItem>
                    <FormItem label="密码">
                      <input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}
PCHeader.defaultProps = {};

export default PCHeader =Form.create({})(PCHeader);
