import React from "react";
import { BottomNav } from "parts";

class Home extends React.Component {
  render() {
    return (
      <div className="max-w-screen-sm mx-auto">
        <section className="absolute inset-x-0 bottom-0">
          <BottomNav />
        </section>
      </div>
    );
  }
}

export default Home;
