import "./Tabs.css";
import GetAPetImage from '../Assets/projects/GetAPet.gif';
import GaPLogo from '../Assets/logos/GetaPetProjectLogo.png';
import { useState } from 'react'

function Tabs() {



    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const [onContent, setOnContent] = useState(1);

    const showContent = (index) => {
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
            >Frontend</button>

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
                        <img src={GetAPetImage}></img>
                    </div>
                    <div className="logo">
                        <img src={GaPLogo}></img>
                    </div>
                    <p>Um site que simula uma adoção completa de pet, contendo regras de negocios, alem de um sistema que checagem.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>Reactjs</h4><h4>Sequelize</h4>
                    </div>
                    <div className="btnSection">
                        <button>Visit Site</button>
                        <button>See source code</button>
                    </div>
                </section>    
            </div>

            <div
             className={toggleState === 2 ? "content active-content" : "content"}>

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={GetAPetImage}></img>
                    </div>
                    <div className="logo">
                        <img src={GaPLogo}></img>
                    </div>
                    <p>Um site que simula uma adoção completa de pet, contendo regras de negocios, alem de um sistema que checagem.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>Reactjs</h4><h4>Sequelize</h4>
                    </div>
                    <div className="btnSection">
                        <button>Visit Site</button>
                        <button>See source code</button>
                    </div>
                </section>  

                <section className="sectionProject">

                    <div className="ImageProject">
                        <img src={GetAPetImage}></img>
                    </div>
                    <div className="logo">
                        <img src={GaPLogo}></img>
                    </div>
                    <p>Um site que simula uma adoção completa de pet, contendo regras de negocios, alem de um sistema que checagem.</p>
                    <h3>Technologies:</h3>
                    <div className="technologies">
                        <h4>Html</h4><h4>Css</h4><h4>Javascript</h4><h4>Nodejs</h4><h4>Reactjs</h4><h4>Sequelize</h4>
                    </div>
                    <div className="btnSection">
                        <button>Visit Site</button>
                        <button>See source code</button>
                    </div>
                </section> 
            </div>

            <div
             className={toggleState === 3 ? "content active-content" : "content"}>
                <section>
                    <h2>IMG</h2>
                    <p>Backend</p>
                </section> 
            </div>

            <div
             className={toggleState === 4 ? "content active-content" : "content"}>
                <section>
                    <h2>IMG</h2>
                    <p>Jogos</p>
                </section> 
            </div>
        </div>
    </div>    
    )
}

export default Tabs