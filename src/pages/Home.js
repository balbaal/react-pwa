import React from "react";
import { BottomNav } from "parts";

class Home extends React.Component {
  render() {
    return (
      <div className="max-w-screen-sm mx-auto">
        <section>
          <BottomNav />
        </section>
      </div>
    );
  }
}

export default Home;
