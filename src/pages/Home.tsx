import "./Home.css";
import homeImage from '../components/Assets/homeImage2.jpg';
import aboutImage from '../components/Assets/aboutImage2.jpg';
import htmlLogo from '../components/Assets/logos/htmlLogo.png';
import cssLogo from '../components/Assets/logos/cssLogo.jpg';
import JSLogo from '../components/Assets/logos/JSLogo.jpg';
import TSLogo from '../components/Assets/logos/TSLogo.png';
import ReactLogo from '../components/Assets/logos/ReactLogo.png';
import MysqlLogo from '../components/Assets/logos/MySQLlogo.png';

import { useState } from "react";
import Tabs from "../components/Tabs/Tabs";

export function Home() {



    return (
<div className="Container">   
  <div className="Home">    
    <section className="Hometxt">
      <p className="Helloworld">Olá mundo, Meu nome é Gustavo</p>
      <h1>Gustavo Mendonça</h1>
      <span>
        <p>FULLSTACK DEVELOPER</p>
        <p>FREELANCER</p>
        <p>TYPESCRIPT DEVELOPER</p>
        <p>JAVASCRIPT DEVELOPER</p>
      </span>
      <p>
        Sou uma pessoa apaixonada por tecnologia, tendo conhecimento tanto no
        Back end quanto no Frontend, tendo maior conhecimento em JavaScript/TypeScript.
      </p>
      <a href="#About">
        <button>Saiba mais</button>
      </a>
    </section>

    <section className="homeImage">
      <div>
        <img src={homeImage}></img>
      </div>  
      <h1 className="BoldBlue">PROGRAMING</h1>  
    </section>
  </div>

  <div id="About" className="About">
    <h1>Sobre</h1>
    <section className="AboutImage">
      <div>
        <img src={aboutImage}></img>
      </div>
      <a href="https://drive.google.com/file/d/11CeAvJ-gSQhXURApX-W-w8E7k5yjRbyW/view?usp=sharing" target="_blank">
        <button>Ver Curriculo Drive</button>
      </a>
      <a href="">
        <button>Download Curriculo</button>
      </a>
    </section>

    <section className="Aboutme">
      <h2>Gustavo Mendonça</h2>
      <p>Desenvolvedor Web, Teve inicio na carreira em 2021, quando tomou a decisão de começar a estudar programação onde descobriu um vício: <span className="bold"> códigos.</span> Seu primeiro contato com a area foi devido a sua curiosidade de saber como sites funcionavam, <span className="bold">a partir daí começou com projetos pessoais das mais diversas formas, contando com Websites e Sistemas, Adquirindo um vasto conhecimento nas diversas linguagens de programação utilizadas hoje no mercado.</span> </p>

      <p>Tendo conhecimento em:<span className="bold"> HTML, Css, Javascript, Typescript, Node.js, React, MySQL, Postgress, MongoDB, Mongoose, TypeORM,  Jest, Docker, Git, Github.</span></p>
    </section>
  </div>  

  <div className="Skills">
    <h1>Skills</h1>
      <section>
        <div>
          <img src={htmlLogo}></img>
        </div>
        <h2>HTML</h2>
      </section>

      <section>
        <div>
          <img src={cssLogo}></img>
        </div>
        <h2>Css</h2>
      </section>

      <section>
        <div className="JSLogo">
          <img src={JSLogo}></img>
        </div>
        <h2>Javascript</h2>
      </section>

      <section>
        <div className="tslogo">
          <img src={TSLogo}></img>
        </div>
        <h2>Typescript</h2>
      </section>

      <section>
        <div className="ReactLogo">
          <img src={ReactLogo}></img>
        </div>
        <h2>React</h2>
      </section>

      <section>
        <div className="MysqlLogo">
          <img src={MysqlLogo}></img>
        </div>
        <h2>MySQL</h2>
      </section>
  </div>  

  <div className="Projects">
    <h1>Projetos</h1>
    <div className="Tabs">
      <Tabs></Tabs>
    </div>
  </div>

</div>   
    )
}