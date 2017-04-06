/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';


import '../style/pc.less'
class PCIndex extends React.Component {
  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        <PCFooter/>
      </div>
    );
  }
}

PCIndex.defaultProps = {
};

export default PCIndex;
