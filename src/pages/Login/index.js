import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import Swal from "sweetalert2";
import { useEffect } from "react/cjs/react.production.min";

import * as S from '../CompanyRegistration/styles'

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
        
        <S.ContainerHeaderWrap>   
        
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
                    width={"200px"}
                    height={"30px"}
                    
                />
                <Input 
                  label="Senha"
                  placeHolder="Informe a senha para continuar"
                  value={password}
                  valueOnChange={handleOnChangePassword}
                  typeInput="password"
                  width={"200px"}
                  height={"30px"}
                  
                />
              

              <S.ButtonWrap>
              {user === "user" && password === "123456" ? (
                     <Link to="/details">
                     <Button
                     titleButton="Entrar"
                     width={"230px"}
                     height={"40px"}
                     fontSize={"18px"}
                     />
                     </Link>
                ): "Aguardando senha"}

              </S.ButtonWrap>
           
              </S.ContainerHeaderWrap>
        
        
    );
}

export default Login