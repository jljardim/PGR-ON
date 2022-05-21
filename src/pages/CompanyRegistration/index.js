import React, { useState, useEffect } from "react";
import react from "react";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import Swal from "sweetalert2";

import * as S from './styles'
import Button from "../../components/Buttons";
import BackButton from "../../components/Buttons/BackButton";
import { Link } from "react-router-dom";

const CompanyRegistration =() => {
    const optionDocumento =[{name:"CPF"}, {name:"CNPJ"}] 
    const [codigo, setCodigo] = useState(0);
    const [razaoSocial, setRazaoSocial] = useState([]);
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [local, setLocal] = useState([]);

    const typesDocument = optionDocumento.map((item) => {
      return {
        label: item.name,
        value: item.name,
      };
    });

    return (
            
        <S.ContainerHeaderWrap>
            
             <Header2
             h1Content="Cadastro de Empresa"
             h2Content="Empresa"
            />
            <S.BackButtonWrap>
              <Link to="/details">
              <BackButton
             titleBackButton= " &#8630; Voltar" 
            />
            </Link>
            </S.BackButtonWrap>

            <S.InputWrap>
            <Input
             label="Codigo"
             placeHolder="Informe um codigo do tipo numerico"
             typeInput="text"
             value={codigo}
             valueOnChange={(event) => setCodigo(event.target.value)}
           />
           <Input
             label="Razão Social *"
             placeHolder="Razão Social"
             valueOnChange={(event) => setRazaoSocial(event.target.value)}
             value={razaoSocial}
             required
           />
          <Select
            titleLabel="Tipo do Documento *"
            value={tipoDocumento}
            options={typesDocument}
            onChange={(event) => setTipoDocumento(event.target.value)}
            placeHolderName="Selecione o Tipo de Documento"
            placeHolderOption={"Selecione o tipo do documento"}
            required
          /> 
          <Input
            label="Local *"
            placeHolder="Ex: Rua Jose, 111"
            valueOnChange={(event) => setLocal(event.target.value)}
            required
           />
              <Button
            titleButton={"Novo Registro"}
            
           />
           <Button
            titleButton={"Alterar"}
           />
           <Button
            titleButton={"Excluir"}
           />
            </S.InputWrap>

          <p>{`
          Codigo: ${codigo} 
          \n________\n 
          Doc: ${tipoDocumento}
          \n________\n 
          Razão: ${razaoSocial}
          \n________\n 
          Local: ${local}
          `}
          </p>
          
        </S.ContainerHeaderWrap>  
        
          
    );
}
export default CompanyRegistration