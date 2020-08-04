import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/13562291?s=460&u=16821163e98ec58bbf68ebd2e2b261553d07e3d3&v=4" alt="Rone Silveira" />
                <div>
                    <strong>Rone Silveira</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores teconologias de quimica avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                           Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;