import React, { useState, useEffect } from "react";
import react from "react";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import Swal from "sweetalert2";

import * as S from './styles'

const CompanyRegistration =() => {
    const teste =[{name:"CPF"}, {name:"CNPJ"}, {name:"RG"}] /*{cnpj:"CNPJ"}, {rg:"RG"}*/
    const [opcoes, setOpcoes] = useState([]);
    const [documentoSelecionado, setDocumentoSelecionado] = useState([]);
    const [obterDocumentoSelecionado, setObterDocumentoSelecionado] = useState("");

   const handleGetMessagesChannels = async () => {
        try {
        /*  const response = await api.get("/channels"); */

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
            <S.ContainerContentWrap>
            <Input
             label="Codigo"
           />
           <Input
                label="Razão Social"
                required="true"
           />
          <Select
            titleLabel="Tipo do Documento:"
            value={obterDocumentoSelecionado}
            options={documentoSelecionado}
            onChange={handleOnChangeGatilho}
          /> 
          <Input
            label="Local"
           />

            </S.ContainerContentWrap>
        
            
        </S.ContainerHeaderWrap>
      

    
       
            
        
        
            
    );
}
export default CompanyRegistration