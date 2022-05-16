import "./Tabs.css";
import { useState } from 'react'

function Tabs() {



    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (

    <div className="TabsContainer">
        <div className="bloc-tabs">
            <button
             className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
             onClick={() =>toggleTab(1)}
             >Todos</button>

            <button
             className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
             onClick={() =>toggleTab(2)}
            >Frontend</button>

            <button
             className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
             onClick={() =>toggleTab(3)}
            >Backend</button>

            <button
             className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
             onClick={() =>toggleTab(4)}
            >Jogos</button>
        </div>

        <div className="content-tabs">

            <div
             className={toggleState === 1 ? "content active-content" : "content"}>
                <section>
                    <h2>IMG</h2>
                    <p>Nome do projeto</p>
                </section> 
            </div>

            <div
             className={toggleState === 2 ? "content active-content" : "content"}>
                <section>
                    <h2>IMG</h2>
                    <p>Frotend</p>
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