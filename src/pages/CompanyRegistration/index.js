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
    const teste =[{name:"CPF"}, {name:"CNPJ"}] 
    const [opcoes, setOpcoes] = useState([]);
    const [documentoSelecionado, setDocumentoSelecionado] = useState([]);
    const [obterDocumentoSelecionado, setObterDocumentoSelecionado] = useState("");

   const handleGetMessagesChannels = async () => {
        try {
          const getChannelsFormatted = teste.map((item) => {
            return {
              label: item.name,
              value: item.name,
            };
          });
          setDocumentoSelecionado(getChannelsFormatted);
        } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Mensagem",
              text: "Error 404 /Channels tente novamente ou contate o suporte",
            });
        }
      };
    
        useEffect(() => {
          handleGetMessagesChannels();
        }, []);
    

    
    const handleOnChangeGatilho = (event) => {
        setObterDocumentoSelecionado(event.target.value);
  };

    return (

        <S.ContainerHeaderWrap>
             <Header2
             h1Content="Cadastro de Empresa"
             h2Content="Empresa"
            />
            <S.BackButtonWrap>
              <Link to="/home">
              <BackButton
             titleBackButton= " &#8630; Voltar"    /* &#8604; */
            />
              </Link>
            </S.BackButtonWrap>
            <S.InputWrap>
            <Input
             label="Codigo"
           />
           <Input
                label="Razão Social *"
                placeHolder="Razão Social"
                required
           />
          <Select
            titleLabel="Tipo do Documento *"
            value={obterDocumentoSelecionado}
            options={documentoSelecionado}
            onChange={handleOnChangeGatilho}
            placeHolderName="Selecione o Tipo de Documento"
            required
          /> 
          <Input
            label="Local *"
            placeHolder="Ex: Rua Jose, 111"
            required
           />
            </S.InputWrap>
          <S.ButtonWrap>
          <Button
            titleButton={"Novo Registro"}
          />
          <Button
            titleButton={"Alterar"}
          />
          <Button
            titleButton={"Excluir"}
          />
          </S.ButtonWrap>
            
        </S.ContainerHeaderWrap>          
    );
}
export default CompanyRegistration