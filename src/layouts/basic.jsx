import React from 'react';
import Header from './header';
import Menu from './menu';
import './basic.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Menu />
        <div className="page-right">
          <Header />
          <main className="page-main">{this.props.children}</main>
        </div>
      </div>
    );
  }
}
