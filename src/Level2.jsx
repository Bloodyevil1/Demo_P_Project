import { useState } from "react";
import "./Level2.css";

function level2() {
  const cards = [
    {
      title: "Fun & Fun",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at quo quos asperiores recusandae vel aut magni? Assumenda obcaecati accusamus earum blanditiis hic vero exercitationem beatae corrupti facere illum.",
      image: "https://picsum.photos/id/1015/600/400"
    },
    {
      title: "Adventure Time",
      desc: "Quisquam, delectus. Nisi repellat sunt molestiae, quia expedita rerum dicta quas cupiditate possimus sed distinctio voluptatem voluptatibus.",
      image: "https://picsum.photos/id/1025/600/400"
    },
    {
      title: "Relax & Chill",
      desc: "Velit, adipisci sequi. Cupiditate quae ratione voluptas, autem quis, obcaecati dolores eveniet, alias minus unde odit debitis.",
      image: "https://picsum.photos/id/1035/600/400"
    },
    {
      title: "Checking",
      desc: "Velit, adipisci sequi. Cupiditate quae ratione voluptas, autem quis, obcaecati dolores eveniet, alias minus unde odit debitis.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzdhPGMDqTMp3WL5eudAnGdLvc9aO9yhukA&s"
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
      <div
        className={`card ${fade ? "fade-out" : "fade-in"}`}
        style={{
          backgroundImage: `url(${cards[currentIndex].image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          transition: "background-image 0.6s ease-in-out",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="title">
          <h1>{cards[currentIndex].title}</h1>
        </div>
        <span className="Desc">
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

export default level2;
