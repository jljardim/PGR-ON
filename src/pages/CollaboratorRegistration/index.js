import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../components/Buttons/BackButton';
import Button from "../../components/Buttons";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";
import Swal from "sweetalert2";

import * as S from '../CompanyRegistration/styles'

const CollaboratorRegistration = () => {
    const testePermissao =[{name:"usuario"}, {name:"administrador"}] 
    const [codigo, setCodigo] = useState(0);
    const [empresaSelecionada, setEmpresaSelecionada] =useState("");
    const [nome, setNome] = useState("");
    const [cracha, setCracha] = useState(0);
    const [pis, setPis] = useState(0);
    const [permissao, setPermissao] = useState("");
    const [empresa, setGetEmpresa] = useState([]);
    

    const typesPermission = testePermissao.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });

    const handleGetMessagesChannels = async () => {
        try {
          const response = await api.get("/empresa");
          const getChannelsFormatted = response.data.map((item) => {
            return {
              label: item.name,
              value: item.name,
            };
          });
          setGetEmpresa(getChannelsFormatted);
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
    return (
        <S.ContainerHeaderWrap>
             <Header2
             h1Content="Cadastro de Colaborador"
             h2Content="Colaborador"
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
            <Select
            titleLabel="Empresa*"
            value={empresaSelecionada}
            options={empresa}
            onChange={(event) => setEmpresaSelecionada(event.target.value)}
            placeHolderName="Selecione a Empresa"
            placeHolderOption="Selecione a empresa"
            required
          />
            <Input
             label="Nome*"
             placeHolder="Informe o nome completo"
             typeInput="text"
             value={nome}
             valueOnChange={(event) => setNome(event.target.value)}
           />
             <Input
             label="Cracha*"
             placeHolder="Informe o numero do cracha"
             typeInput="text"
             value={cracha}
             valueOnChange={(event) => setCracha(event.target.value)}
           />
             <Input
             label="Pis*"
             placeHolder="Informe o numero do pis/nis"
             typeInput="text"
             value={pis}
             valueOnChange={(event) => setPis(event.target.value)}
           />
           <Select
            titleLabel="Permissão de Acesso/REP*"
            value={permissao}
            options={typesPermission}
            onChange={(event) => setPermissao(event.target.value)}
            placeHolderName="Selecione a Empresa"
            placeHolderOption="Selecione a empresa"
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

            {`${codigo} -- ${empresaSelecionada} -- ${nome} -- ${cracha} -- ${pis} --${permissao}`}
        </S.ContainerHeaderWrap>
    );
}
export default CollaboratorRegistration