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
  // const [modalInput, setModalInput] = useState(template);
  //
  const [modalName, setModalName] = useState("");
  const [modalSpeed, setModalSpeed] = useState("");
  const [modalMl, setModalMl] = useState("");
  const [modalId, setModalId] = useState("");

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

  const openModal = (e, id) => {
    const newArr = car.filter((item) => {
      if (item.id === id) {
        setModalName(item.name);
        setModalSpeed(item.speed);
        setModalMl(item.ml);
        setModalId(item.id);
      }
      return item;
    });
    setModal("active");
  };

  const closeModal = () => {
    setModal("");
  };

  const handlerOk = (e, id) => {
    car.map((item, i) => {
      if (item.id === id) {
        item.name = modalName;
        item.speed = modalSpeed;
        item.ml = modalMl;
      }
      return item;
    });
    setModal("");
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
        // modalInput={modalInput}
        handlerOk={handlerOk}
        setModalName={setModalName}
        setModalSpeed={setModalSpeed}
        setModalMl={setModalMl}
        modalName={modalName}
        modalSpeed={modalSpeed}
        modalMl={modalMl}
        modalId={modalId}
      />
    </>
  );
}

export default App;
