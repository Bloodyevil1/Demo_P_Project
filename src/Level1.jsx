import { useState } from "react";
import "./Level1.css";
import image1 from "./assets/int1.png";
import image2 from "./assets/int2.png";
import image3 from "./assets/int3.png";
import image4 from "./assets/int4.png";
import image5 from "./assets/int5.png";
import image6 from "./assets/int6.png";
import image7 from "./assets/int7.png";
import image8 from "./assets/int8.png";
function Level1() {
  const cards = [
    {
      title: "Fun & Fun",
      desc: "Run your fingers slowly down their back.",
      image: image1
    },
    {
      title: "Adventure Time",
      desc: "Bite your partner’s lip gently while kissing.",
      image: image2
    },
    {
      title: "Relax & Chill",
      desc: "Kiss them softly, then pause with your lips just apart.",
      image: image3
    },
    {
      title: "Checking",
      desc: "Run your lips along their shoulder slowly.",
      image: image4
    },
    {
      title: "Checking",
      desc: "Let your fingers graze their lips before kissing.",
      image: image5
    },
    {
      title: "Checking",
      desc: "Playfully trap them against the wall with your body.",
      image: image6
    },
    {
      title: "Checking",
      desc: "Velit, adipisci sequi. Cupiditate quae ratione voluptas, autem quis, obcaecati dolores eveniet, alias minus unde odit debitis.",
      image: image7
    },
    {
      title: "Checking",
      desc: "Run your fingers slowly down their spine.",
      image: image8
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeCard = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((newIndex + cards.length) % cards.length);
      setFade(false);
    }, 400);
  };

  return (
    <div className="main">
      <div className={`card ${fade ? "fade-out" : "fade-in"}`}>
        <div className="title">
          <h1>{cards[currentIndex].title}</h1>
        </div>
        <span
          className="desc"
          style={{
            backgroundImage: `url(${cards[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <p>{cards[currentIndex].desc}</p>
        </span>
        <div className="btn">
          <button onClick={() => changeCard(currentIndex - 1)}>Previous</button>
          <button onClick={() => changeCard(currentIndex + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Level1;
