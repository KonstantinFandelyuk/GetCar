import React from "react";
import Button from "../Button/Button";
import "./style.css";

function modal({ modal, closeModal, modalInput, handlerOk }) {
  return (
    <div className={`modal ${modal}`}>
      <input type="text" value={modalInput.name} />
      <input type="text" value={modalInput.speed} />
      <input type="text" value={modalInput.ml} />
      <Button value={"Ok"} onClick={handlerOk}></Button>
      <Button value={"Закрыть"} onClick={closeModal}></Button>
    </div>
  );
}

export default modal;
