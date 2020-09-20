import React, { useState } from "react";
import Button from "../../components/Button/Button";
import List from "../../components/List/List";
import Modal from "../../components/modal/modal";
import "./App.css";

const template = {
  id: "",
  name: "",
  speed: Number,
  ml: Number,
};

let counter = 0;

function App() {
  const [car, setCar] = useState([]);
  const [carName, setCarName] = useState("");
  const [carSpeed, setCarSpeed] = useState("");
  const [carMl, setCarMl] = useState("");
  const [modal, setModal] = useState("");
  const [modalInput, setModalInput] = useState(template);

  const handlerClick = () => {
    if (carName === carName.toString() && !isNaN(carSpeed) && !isNaN(carMl) && carName !== "") {
      const newItem = { ...template, name: carName, speed: carSpeed, ml: carMl, id: counter++ };
      setCar([...car, newItem]);
    } else {
      alert("Введите корректно данные");
    }
    setCarName("");
    setCarSpeed("");
    setCarMl("");
  };

  const openModal = (e, number) => {
    const newArr = car.filter((item) => {
      if (item.id === number) {
        const newInputModal = {
          ...modalInput,
          name: item.name,
          speed: item.speed,
          ml: item.ml,
        };
        setModalInput(newInputModal);
      }
    });
    setModal("active");
  };

  const closeModal = () => {
    setModal("");
  };
  const handlerOk = () => {
    console.log("obje :>> ");
  };
  return (
    <>
      <div className="App">
        <span>Название машины</span>
        <input
          type="text"
          name=""
          value={carName}
          onChange={(e) => {
            setCarName(e.target.value);
          }}
        />
        <span>Скорость машины</span>
        <input
          type="number"
          name=""
          value={carSpeed}
          onChange={(e) => {
            setCarSpeed(e.target.value);
          }}
        />
        <span>Литров бак</span>
        <input
          type="number"
          name=""
          value={carMl}
          onChange={(e) => {
            setCarMl(e.target.value);
          }}
        />
        <Button value={"Отправить"} onClick={handlerClick}></Button>
      </div>
      <List car={car} setModal={setModal} openModal={openModal} counter={counter} />
      <Modal
        modal={modal}
        setModal={setModal}
        closeModal={closeModal}
        modalInput={modalInput}
        handlerOk={handlerOk}
      />
    </>
  );
}

export default App;
