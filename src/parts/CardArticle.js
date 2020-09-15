import React from "react";
import PropTypes from "prop-types";

const CardArticle = (props) => {
  const { className } = props;
  return (
    <div className={["flex", className].join(" ")}>
      <div style={{ width: 140, height: 120 }}>
        <img
          className="object-cover h-full w-full rounded-tl rounded-bl"
          src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
      <div className="py-2 flex flex-col justify-center pl-3 shadow w-full rounded relative">
        <h3 className="text-gray-800 text-lg font-semibold">
          Asuransi Kesehatan Lengkap
        </h3>
        <h4 className="text-gray-500 text-xs">
          Nikmati manfaat penggantian biaya rawat inap dan rawat jalan. Pilih
          produk dengan premi yang sesuai dengan anggaran kamu!
        </h4>
        <a
          className="bg-green-700 rounded px-2 py-1 text-white absolute cursor-pointer"
          style={{ fontSize: 9, right: 5, bottom: 5 }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

CardArticle.propTypes = {
  className: PropTypes.string,
};

export default CardArticle;
