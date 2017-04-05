import React from 'react';
import header from '../style/header.less';

class AppComponent extends React.Component {
  render() {
    return (
      <div style={header}>
        <div >APPLICATION CONTENT</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
