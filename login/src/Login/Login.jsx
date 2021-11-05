import React from 'react';
import './Login.css';



export default function Login() {

    function exibirMensagem(){
        alert("O nome do usuário ou senha está inválido. ")
    }

  return (
    <div>
      <div className="content">
        <form className="form">
          <div className="input">
              <div className="user">
                <input type="text" name="user" id="user" placeholder="email@email.com" />
              </div>
              <div className="password">
                <input type="password" name="password" id="password" />
              </div>
              <button variant="primary" size="md" type="button" className="btn" onClick={() => exibirMensagem() } >entrar</button>
              <p className="link" >Esqueceu sua senha?<a target='_blank' href="https://www.google.com">Clique a aqui</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};