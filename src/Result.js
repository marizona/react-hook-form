import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Result() {
    const state = useSelector((state) => state.ingredients);
  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Start over</Link>
    </>
  );
}

export default Result;
