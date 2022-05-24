import "./Tabs.css";
import GetAPetGif from '../Assets/projects/GetAPet.gif';
import ToughtsGif from '../Assets/projects/toughts.gif';
import CapturePageGif from '../Assets/projects/CapturePage.gif';
import ApiVendasImg from '../Assets/projects/API-VENDASimage.jpg';
import JogodaMemoriaGif from '../Assets/projects/JogodaMemoria.gif';


import GaPLogo from '../Assets/projects/GetaPetProjectLogo.png';
import ToughtsLogo from '../Assets/projects/toughts_logo.png';
import CapturePageLogo from '../Assets/projects/CapturePageLogo.png';
import ApiVendasLogo from '../Assets/projects/ApiVendasLogo.png';
import JogodaMemoriaLogo from '../Assets/projects/JogodaMemoriaLogo.png';

import { useState } from 'react'

function Tabs() {

    

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index : number) => {
        setToggleState(index)
    }

    const [onContent, setOnContent] = useState(1);

    const showContent = (index : number) => {
        setOnContent(index)
        return
    }

    return (

    <div className="TabsContainer">
        <div className="bloc-tabs">
            <button
             className={toggleState === 1 ? "tabs active-tabs btnActive" : "tabs btnDesativeted"}
             onClick={() =>toggleTab(1)}
             >Todos</button>

             <button
             className={toggleState === 2 ? "tabs active-tabs btnActive" : "tabs btnDesativeted"}
             onClick={() =>toggleTab(2)}
             >Web</button>

            <button
             className={toggleState === 3 ? "tabs active-tabs btnActive" : "tabs btnDesativeted"}
             onClick={() =>toggleTab(3)}
            >Backend</button>

            <button
             className={toggleState === 4 ? "tabs active-tabs btnActive" : "tabs btnDesativeted"}
             onClick={() =>toggleTab(4)}
            >Jogos</button>
        </div>

        <div className="content-tabs">

            <div
             className={toggleState === 1 ? "content active-content" : "content"}>
                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={GetAPetGif}></img>
                    </div>
                    <div className="logo">
                        <img src={GaPLogo}></img>
                    </div>
                    <p>Um site que simula uma adoção completa de pet, contendo regras de negocios, autenticação de paginas com JWT, um projeto completo contendo backend feito em Nodejs e Frontend usando Reactjs</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>Reactjs</h4><h4>Sequelize</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/Get-a-pet-BACKEND-'>
                            <button>See Backend code</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/Get-a-pet-FRONTEND-'>
                            <button>See Backend code</button>
                        </a>
                    </div>
                </section>

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={CapturePageGif}></img>
                    </div>
                    <div className="logo">
                        <img src={CapturePageLogo}></img>
                    </div>
                    <p>Ladding Page feita para conseguir o maximo de conversão possivel, sendo um projeto bem simples, mas um projeto com grande importancia para mim.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4>
                    </div>
                    <div className="btnSection">
                        <a target="_blank" href="https://projetode-captura.vercel.app">
                            <button>Visit Site</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/ProjetodeCaptura'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section>   

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={ToughtsGif}></img>
                    </div>
                    <div className="logo">
                        <img src={ToughtsLogo}></img>
                    </div>
                    <p>Um site para registrar seus pensamentos, projeto feito com intuito de colocar em pratica oque tinha aprendido na epoca, tendo um CRUD completo com MySQL, usa nodejs para o backend. </p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/Toughts'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section> 

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={ApiVendasImg}></img>
                    </div>
                    <div className="logo">
                        <img src={ApiVendasLogo}></img>
                    </div>
                    <p><span>Totalmente Backend.</span>Uma API com foco em reproduzir um e-commerce completo, possuindo recuperação de senha/email, alem de cadastro de Produtos/Usuarios/Pedidos.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/API-VENDAS'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section> 

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={JogodaMemoriaGif}></img>
                    </div>
                    <div className="logo">
                        <img src={JogodaMemoriaLogo}></img>
                    </div>
                    <p>Jogo da Memoria desenvolvido com Javascript, contendo regras de jogo, criando as cartas automaticamente e randomicamente, alem de um LockMode e Sound Effect, um dos meus primeiros projetos.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://gustavomen.github.io/Jogo-da-Memoria/'>
                            <button>Play</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/Jogo-da-Memoria'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section> 
            </div>

            <div
             className={toggleState === 2 ? "content active-content" : "content"}>

                 <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={CapturePageGif}></img>
                    </div>
                    <div className="logo">
                        <img src={CapturePageLogo}></img>
                    </div>
                    <p>Ladding Page feita para conseguir o maximo de conversão possivel, sendo um projeto bem simples, mas um projeto com grande importancia para mim.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><br></br><h4>Javascript</h4>
                    </div>
                    <div className="btnSection">
                        <a target="_blank" href="https://projetode-captura.vercel.app">
                            <button>Visit Site</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/ProjetodeCaptura'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section>

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={GetAPetGif}></img>
                    </div>
                    <div className="logo">
                        <img src={GaPLogo}></img>
                    </div>
                    <p>Um site que simula uma adoção completa de pet, contendo regras de negocios, autenticação de paginas com JWT, um projeto completo contendo backend feito em Nodejs e Frontend usando Reactjs</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>Reactjs</h4><h4>Sequelize</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/Get-a-pet-BACKEND-'>
                            <button>See Backend code</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/Get-a-pet-FRONTEND-'>
                            <button>See Backend code</button>
                        </a>
                    </div>
                </section>  

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={ToughtsGif}></img>
                    </div>
                    <div className="logo">
                        <img src={ToughtsLogo}></img>
                    </div>
                    <p>Um site para registrar seus pensamentos, projeto feito com intuito de colocar em pratica oque tinha aprendido na epoca, tendo um CRUD completo com MySQL, usa nodejs para o backend. </p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/Toughts'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section> 
            </div>

            <div
             className={toggleState === 3 ? "content active-content" : "content"}>

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={ApiVendasImg}></img>
                    </div>
                    <div className="logo">
                        <img src={ApiVendasLogo}></img>
                    </div>
                    <p><span>Totalmente Backend.</span>Uma API com foco em reproduzir um e-commerce completo, possuindo recuperação de senha/email, alem de cadastro de Produtos/Usuarios/Pedidos.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/API-VENDAS'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section> 

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={GetAPetGif}></img>
                    </div>
                    <div className="logo">
                        <img src={GaPLogo}></img>
                    </div>
                    <p>Um site que simula uma adoção completa de pet, contendo regras de negocios, autenticação de paginas com JWT, um projeto completo contendo backend feito em Nodejs e Frontend usando Reactjs</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>Reactjs</h4><h4>Sequelize</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://github.com/GustavoMen/Get-a-pet-BACKEND-'>
                            <button>See Backend code</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/Get-a-pet-FRONTEND-'>
                            <button>See Backend code</button>
                        </a>
                    </div>
                </section>  

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={ToughtsGif}></img>
                    </div>
                    <div className="logo">
                        <img src={ToughtsLogo}></img>
                    </div>
                    <p>Um site para registrar seus pensamentos, projeto feito com intuito de colocar em pratica oque tinha aprendido na epoca, tendo um CRUD completo com MySQL, usa nodejs para o backend. </p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <button>See source code</button>
                    </div>
                </section> 
            </div>

            <div
             className={toggleState === 4 ? "content active-content" : "content"}>

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={JogodaMemoriaGif}></img>
                    </div>
                    <div className="logo">
                        <img src={JogodaMemoriaLogo}></img>
                    </div>
                    <p>Jogo da Memoria desenvolvido com Javascript, contendo regras de jogo, criando as cartas automaticamente e randomicamente, alem de um LockMode e Sound Effect, um dos meus primeiros projetos.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>MVC Architecture</h4><h4>MySQL</h4>
                    </div>
                    <div className="btnSection">
                        <a target='_blank' href='https://gustavomen.github.io/Jogo-da-Memoria/'>
                            <button>Play</button>
                        </a>
                        <a target='_blank' href='https://github.com/GustavoMen/Jogo-da-Memoria'>
                            <button>See source code</button>
                        </a>
                    </div>
                </section> 
            </div>
        </div>
    </div>    
    )
}

export default Tabs