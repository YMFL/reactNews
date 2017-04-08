/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newsContainer'

import '../style/pc.less'
class PCIndex extends React.Component {
  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter/>
      </div>
    );
  }
}

PCIndex.defaultProps = {
};

export default PCIndex;
