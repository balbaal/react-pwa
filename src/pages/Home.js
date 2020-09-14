import React from "react";
import { BottomNav, Header } from "parts";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="absolute inset-x-0 top-0 bg-white shadow-md">
          <Header />
        </section>

        <section className="absolute inset-x-0 bottom-0 bg-white shadow-inner">
          <BottomNav />
        </section>
      </div>
    );
  }
}

export default Home;
