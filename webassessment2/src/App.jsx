import React from 'react';
import "./index.css";
import barbieImg from"./assets/barbie.jpg";
import hiddenFiguresImg from "./assets/hidden-figures.jpg";
import lalaland from "./assets/la-la-land.jpg";
import palmSprings from "./assets/palm-springs.jpg";
import hook from "./assets/hook.jpg";
import roger from "./assets/who-framed-roger-rabbit.jpg";

const movies = [
  { id: 1, title: "Barbie", text: "Barbie (2023) is a comedy-fantasy film about Barbie, who leaves the colourful world of Barbieland and enters the real world to discover her purpose. Alongside Ken, she experiences unexpected challenges, friendship, and self-discovery.",poster:barbieImg},
  { id: 2, title: "Hidden Figures", text: "Hidden Figures (2016) is a biographical drama based on the true story of three African-American women mathematicians who work at NASA during the Space Race. Despite facing racism and discrimination, Katherine Johnson, Dorothy Vaughan, and Mary Jackson use their intelligence and determination to help NASA achieve important milestones in space exploration.", poster:hiddenFiguresImg },
  { id: 3, title: "La la  Land", text: "La La Land (2016) is a romantic musical drama about Mia, an aspiring actress, and Sebastian, a jazz musician, who fall in love while pursuing their dreams in Los Angeles. As their careers develop, they face challenges balancing their relationship with their ambitions, discovering the sacrifices required to achieve success.", poster: lalaland },
  { id: 4, title: "Palm Springs", text: "Palm Springs (2020) is a romantic comedy about two strangers who meet at a wedding in Palm Springs and find themselves trapped in a time loop, reliving the same day over and over again. As they get closer, they learn to deal with their situation and discover new ways to understand life, love, and themselves.", poster: palmSprings },
  { id: 5, title: "Hook", text: "Hook (1991) is a fantasy adventure film about Peter Pan, who has grown up and forgotten his childhood adventures in Neverland. When Captain Hook kidnaps his children, Peter returns to Neverland with the help of Tinker Bell and the Lost Boys. He must rediscover his imagination and courage to save his family and face his old enemy.", poster: hook },
  { id: 6, title: "Who Framed Roger Rabbit", text: "Who Framed Roger Rabbit (1988) is a comedy-mystery film set in a world where animated characters live alongside humans. When cartoon star Roger Rabbit is accused of murder, detective Eddie Valiant must investigate the case and prove his innocence. Together, they uncover a dangerous conspiracy while facing unexpected challenges.", poster: roger },
];

function App() {
  return (
    <><header className="header">
      <h1 className="logo">watch.it</h1>

      <nav className="menu">
        <a href="#">Action</a>
        <a href="#">Comedy</a>
        <a href="#">Romance</a>
        <a href="#">Drama</a>
      </nav>

      <button className="button">SEARCH</button>
    </header>
    <main className="container">
        {movies.map((movie) => (
          <article className="card" key={movie.id}>
            <img src={movie.poster} alt={movie.title + " poster"} />
            <div className="card-body">
              <div className="card-text">
                <h2>{movie.title}</h2>
                <p>{movie.text}</p>
              </div>
              <button className="button">WATCH NOW</button>
            </div>
          </article>
        ))}
      </main>
      </>
  );
}

export default App;