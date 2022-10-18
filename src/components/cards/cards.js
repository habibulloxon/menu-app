import React from "react";
import { useState } from "react";
import "./cards.scss";

import img1 from "../../assets/images/item-1.jpeg"
import img2 from "../../assets/images/item-2.jpeg"
import img3 from "../../assets/images/item-3.jpeg"
import img4 from "../../assets/images/item-4.jpeg"
import img5 from "../../assets/images/item-5.jpeg"
import img6 from "../../assets/images/item-6.jpeg"
import img7 from "../../assets/images/item-7.jpeg"
import img8 from "../../assets/images/item-8.jpeg"
import img9 from "../../assets/images/item-9.jpeg"

const Cards = () => {
  const menu = [
    {
      id: 1,
      title: "Buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: {img1},
      desc: `I'm baby woke mlkshk wolf`,
    },
    {
      id: 2,
      title: "Diner double",
      category: "lunch",
      price: 13.99,
      img: {img2},
      desc: `vaporware iPhone mumblecore`,
    },
    {
      id: 3,
      title: "Godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: {img3},
      desc: `ombucha chillwave fanny pack`,
    },
    {
      id: 4,
      title: "Country delight",
      category: "breakfast",
      price: 20.99,
      img: {img4},
      desc: `Shabby chic keffiyeh neutra`,
    },
    {
      id: 5,
      title: "Egg attack",
      category: "lunch",
      price: 22.99,
      img: {img5},
      desc: `franzen vegan pabst bicycle`,
    },
    {
      id: 6,
      title: "Oreo dream",
      category: "shakes",
      price: 18.99,
      img: {img6},
      desc: `Portland chicharrones ethical`,
    },
    {
      id: 7,
      title: "Bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: {img7},
      desc: `carry jianbing normcore freegan. Viral`,
    },
    {
      id: 8,
      title: "American classic",
      category: "lunch",
      price: 12.99,
      img: {img8},
      desc: `on it tumblr kickstarter thundercat`,
    },
    {
      id: 9,
      title: "Quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: {img9},
      desc: `skateboard fam synth authentic`,
    },
  ];

  const [arr, setArr] = useState('')

  return (
    <div className="cards-wrap">
      <div className="btn-wrap">
        <button onClick={() => setArr('breakfast')}>Breakfast</button>
        <button onClick={() => setArr('shakes')}>Shakes</button>
        <button onClick={() => setArr('lunch')}>Lunch</button>
      </div>
      <div className="center-section">
        {
            menu.map(item => {
                if(item.category === arr){
                    return <article>
                    <img src={item.img} alt="pic" />
                        <div className="item-head">
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.price}
                            </p>
                        </div>
                        <p>
                            {item.desc}
                        </p>
                    </article>
                }
                
            })
        }
      </div>
    </div>
  );
};

export default Cards;
