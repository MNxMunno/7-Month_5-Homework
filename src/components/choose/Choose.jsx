import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { TfiMedall } from "react-icons/tfi";

const Choose = () => {
  const data = [
    {
      id: 1,
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: <GrDeliver />,
    },
    {
      id: 2,
      title: "Cheap Price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: <FaHandHoldingUsd />,
    },
    {
      id: 3,
      title: "Premium Quality",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: <TfiMedall />,
    },
  ];

  let card = data?.map((el) => (
    <div key={el.id} className="card">
      {el.img}
      <h2>{el.title}</h2>
      <p>{el.description}</p>
    </div>
  ));
  return (
    <section className="choose">
      <div className="container">
        <div className="content">
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
