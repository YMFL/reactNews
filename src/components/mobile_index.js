/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import '../style/mobile.less'
class MoblieIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
      </div>
    );
  }
}
MoblieIndex.defaultProps = {
};

export default MoblieIndex;
