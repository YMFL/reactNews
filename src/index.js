import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/fn/object/assign';
// import { Router,Route,hasHistory } from 'react-router';
import 'react-router';

import MediaQuery from 'react-responsive';

//pc
import PCIndex from './components/pc_index';
//mobile
import MobileIndex from './components/mobile_index';

//样式
import 'antd/dist/antd.css';

export default class Root extends React.Component{
  render(){
    return(
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById('app'));
