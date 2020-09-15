import React from "react";
import { BottomNav, Header } from "parts";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="bg-gray-300 h-screen overflow-auto">
        <section className="absolute inset-x-0 top-0 bg-white bg-white z-10 shadow-md">
          <Header />
        </section>
        {children}
        <section className="absolute inset-x-0 bottom-0 bg-white shadow-inner">
          <BottomNav />
        </section>
      </div>
    );
  }
}

export default Layout;
