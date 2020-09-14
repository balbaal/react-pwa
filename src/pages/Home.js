import React from "react";
import { BottomNav, Header, Card } from "parts";

class Home extends React.Component {
  render() {
    return (
      <div className="bg-gray-300 h-screen overflow-auto">
        <section className="absolute inset-x-0 top-0 bg-white bg-white shadow-md">
          <Header />
        </section>

        <section className="max-w-screen-sm mx-auto bg-white pt-16 px-3 h-screen">
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-1" />
            <Card className="col-span-1" />
          </div>
        </section>

        <section className="absolute inset-x-0 bottom-0 bg-white shadow-inner">
          <BottomNav />
        </section>
      </div>
    );
  }
}

export default Home;
