/**
 * Created by yangqh on 2017/4/6.
 */
import React from 'react';
class MobileHeader extends React.Component {
  render() {
    return (
      <div id="mobileheader">
        <header>
          <img src="../images/news.png" alt="log"/>
          <span>React News</span>
        </header>
      </div>
    );
  }
}
MobileHeader.defaultProps = {
};

export default MobileHeader;
