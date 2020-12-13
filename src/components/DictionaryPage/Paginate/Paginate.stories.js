import React from "react";
import Paginate from "./Paginate";

export default {
  title: "Pagination",
  component: Paginate,
};

export const TenPages = () => <Paginate pageCount={10} />;
export const FiftyPages = () => <Paginate pageCount={50} />;
export const HundredPages = () => <Paginate pageCount={100} />;
