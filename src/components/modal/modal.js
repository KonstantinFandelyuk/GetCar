import React from "react";
import Button from "../Button/Button";
import "./style.css";

function modal({
  modal,
  closeModal,
  modalInput,
  handlerOk,
  setModalName,
  setModalSpeed,
  setModalMl,
  modalName,
  modalSpeed,
  modalMl,
  modalId,
}) {
  return (
    <div className={`modal ${modal}`}>
      <input type="text" value={modalName} onChange={(e) => setModalName(e.target.value)} />
      <input type="text" value={modalSpeed} onChange={(e) => setModalSpeed(e.target.value)} />
      <input type="text" value={modalMl} onChange={(e) => setModalMl(e.target.value)} />
      <Button value={"Ok"} onClick={(e) => handlerOk(e, modalId)}></Button>
      <Button value={"Закрыть"} onClick={closeModal}></Button>
    </div>
  );
}

export default modal;
