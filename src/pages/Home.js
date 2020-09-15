import React from "react";
import { CardSell, CardArticle } from "parts";
import Layout from "./Layout";

class Home extends React.Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default Home;
