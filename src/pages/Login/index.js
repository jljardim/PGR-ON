import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import Swal from "sweetalert2";
import { useEffect } from "react/cjs/react.production.min";

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("");

  /*  const start= Swal.fire({
      icon:"info",
      title:"Bem vindo ao PRG ON, seu gerenciador de relogio de ponto on-line ",
      text: "Por favor informe o usuario e senha para prosseguir",
    }); */


    const handleOnChangeUser = (event) => {
        setUser(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

    return (
        
        <div className="login-container">    
                <Header2
                 h1Content="PGR ON"
                 h2Content="Programa Gerenciador de Rélogio Online"
                />
                <Input
                    label="Usuario" 
                    placeHolder="Informe o usuario para continuar"
                    value={user}
                    valueOnChange={handleOnChangeUser} 
                    typeInput="text"
                    
                />
                <Input 
                  label="Senha"
                  placeHolder="Informe a senha para continuar"
                  value={password}
                  valueOnChange={handleOnChangePassword}
                  typeInput="password"
                  
                />
                {user === "user" && password === "123456" ? (
                     <Link to="/details">
                     <Button
                     titleButton="Entrar"
                     width={"350px"}
                     height={"40px"}
                     background={"#DAA520"}
                     />
                     </Link>
                ): "Aguardando senha"}
           
        </div>
        
    );
}

export default Login