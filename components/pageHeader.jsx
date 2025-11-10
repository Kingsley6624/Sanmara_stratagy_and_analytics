import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-800 text-white pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
