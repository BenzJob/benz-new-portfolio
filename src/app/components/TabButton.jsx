import React from "react";


const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active? "text-zinc-950 border-b border-zinc-800" : "text-zinc-950"
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;