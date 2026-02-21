import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>
        Navbar counter is at <span>{count}</span>
      </h1>
    </div>
  );
};

export default Navbar;
