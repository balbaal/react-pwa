import React from "react";
import { BottomNav, Header, CardSell, CardArticle } from "parts";

class Home extends React.Component {
  render() {
    return (
      <div className="bg-gray-300 h-screen overflow-auto">
        <section className="absolute inset-x-0 top-0 bg-white bg-white z-10 shadow-md">
          <Header />
        </section>

        <section className="max-w-screen-sm mx-auto bg-white pt-16 px-3 pb-20">
          <div className="grid grid-cols-2 gap-4">
            <CardSell className="col-span-1" />
            <CardSell className="col-span-1" />
            <CardArticle className="col-span-2" />

            <CardSell className="col-span-1" />
            <CardSell className="col-span-1" />
            <CardArticle className="col-span-2" />

            <CardSell className="col-span-1" />
            <CardSell className="col-span-1" />
            <CardArticle className="col-span-2" />
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
