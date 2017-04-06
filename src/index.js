import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router,Route,hasHistory } from 'react-router';
import 'react-router';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';
export default class Root extends React.Component{
  render(){
    return(
      <div>
        <PCIndex/>
      </div>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById('app'));
