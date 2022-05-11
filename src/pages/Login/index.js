import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("");

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
                     />
                     </Link>
                ): "Aguardando senha"}
           
        </div>
        
    );
}

export default Login