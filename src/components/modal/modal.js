import React from "react";
import Button from "../Button/Button";
import "./style.css";

function modal({ modal, closeModal, modalInput, handlerOk, setCarName }) {
  return (
    <div className={`modal ${modal}`}>
      <input
        type="text"
        defaultValue={modalInput.name}
        onChange={(e) => setCarName(e.target.value)}
      />
      <input type="text" defaultValue={modalInput.speed} />
      <input type="text" defaultValue={modalInput.ml} />
      <Button value={"Ok"} onClick={handlerOk}></Button>
      <Button value={"Закрыть"} onClick={closeModal}></Button>
    </div>
  );
}

export default modal;
