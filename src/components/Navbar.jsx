import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>I am a navbar and the count is at:{count}</h1>
    </>
  );
}
