import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
        <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/67613857?s=460&u=0d6a5061aae6e43ce75e76d7d0288a7ad7b5d80f&v=4" alt="Bruno Pedrosa"/>
            <div>
              <strong>Bruno Pedrosa</strong>
              <span>Cálculo</span>
            </div>
          </header>

          <p>O matemático mais rápido do Sertão.
            <br /><br />
            Efetuou mais de 500 integrais em tempo recorde. Mais de 200 engenheiros alunos derrubaram suas construções.
          </p>

          <footer>
            <p>
              Preço/hora:
              <strong>R$ 25,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;