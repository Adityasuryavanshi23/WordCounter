import React from "react";
import { Route, Routes } from "react-router-dom";
import WordCounter from "../pages/WordCounter";
import PageNotFound from "../pages/PageNotFound";
import ChucNoris from "../pages/ChucNoris";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WordCounter />} />
      <Route path="/chunoris" element={<ChucNoris />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
