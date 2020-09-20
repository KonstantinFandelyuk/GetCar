import React from "react";
import Button from "../Button/Button";

function item({ item, openModal }) {
  return (
    <>
      <li>
        <div className="bold">
          Марка машины: <span className="normal">{item.name}</span>
        </div>
        <div className="bold">
          Скорость машины: <span className="normal">{item.speed} км.ч.</span>
        </div>
        <div className="bold">
          Бак машины: <span className="normal">{item.ml} л.</span>
        </div>
        <Button
          value={"Редактировать машину"}
          onClick={(e) => {
            openModal(e, item.id);
          }}
        ></Button>
      </li>
    </>
  );
}

export default item;
