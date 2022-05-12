import "./Home.css";

export function Home() {
    return (
    <section className="Home">
      <p className="Helloworld">Olá mundo, Meu nome é Gustavo</p>
      <h1>Gustavo Mendonça</h1>
      <span>
        <p>Developer</p>
      </span>
      <p>
        Sou uma pessoa apaixonada por tecnologia, tendo conhecimento tanto no
        Back end quanto no Frontend, tendo maior conhecimento em JavaScript.
      </p>
      <a href="#About">
        <button>Saiba mais</button>
      </a>
    </section>
    )
}