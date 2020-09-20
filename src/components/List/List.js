import React from "react";
import Item from "../Item/Item";

function List({ car, setModal, openModal }) {
  return (
    <>
      <ul>
        {car.map((item, i) => {
          return <Item item={item} key={i} setModal={setModal} openModal={openModal} />;
        })}
      </ul>
    </>
  );
}

export default List;
