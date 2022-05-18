import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../components/Buttons/BackButton';
import Button from "../../components/Buttons";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";
import Swal from "sweetalert2";

import * as S from '../CompanyRegistration/styles'

const EquipamentRegistration = () => {

    const testePermissao =[{name:"usuario"}, {name:"administrador"}]
    const biometriaOption =[{name:"não utiliza biometria"}, {name:"utiliza biometria"}] 
    const codinAtivo =[{name:"Ativo"}, {name:"Inativo"}] 
    const [codigo, setCodigo] = useState(0);
    const [empresaSelecionada, setEmpresaSelecionada] =useState("");
    const [descricao, setDescricao] = useState("");
    const [ip, setIp] = useState(0);
    const [tipo, setTipo] = useState("");
    const [biometria, setBiometria] = useState("");
    const [confBiometrico, setConfBiometrico] = useState(0);
    const [aplicativo, setAplicativo] = useState("");
    const [firmware, setFirmware] = useState("");
    const [codin, setCodin] = useState("");
    const [empresa, setGetEmpresa] = useState([]);
    
    
      const typesBiometria = biometriaOption.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });

      const typesCodin = codinAtivo.map((item) => {
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
        h1Content="Cadastro de Equipamento"
        h2Content="Equipamento"
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
       placeHolderOption="Selecione a empresa"
       required
     />
       <Input
        label="Descrição*"
        placeHolder="Ex: Sala de TI"
        typeInput="text"
        value={descricao}
        valueOnChange={(event) => setDescricao(event.target.value)}
      />
        <Input
        label="IP*"
        placeHolder="000.000.000.000"
        typeInput="text"
        value={ip}
        valueOnChange={(event) => setIp(event.target.value)}
      />
      <Select
       titleLabel="Tipo*"
       value={tipo}
       options={empresa}
       onChange={(event) => setTipo(event.target.value)}
       placeHolderOption="Selecione O Tipo"
       required
      />
      <Select
       titleLabel="Biometria*"
       value={biometria}
       options={typesBiometria}
       onChange={(event) => setBiometria(event.target.value)}
       placeHolderOption="Ex: utiliza / não utiliza"
       required
     />
     <Input
        label="Grau de conferencia biometrico*"
        placeHolder="Ex: 1"
        typeInput="text"
        value={confBiometrico}
        valueOnChange={(event) => setConfBiometrico(event.target.value)}
      />
      <Input
        label="Aplicativo*"
        placeHolder="Ex: APLTI"
        typeInput="text"
        value={aplicativo}
        valueOnChange={(event) => setAplicativo(event.target.value)}
      />
      <Input
        label="Firmware*"
        placeHolder="Ex: firmware.bin"
        typeInput="text"
        value={firmware}
        valueOnChange={(event) => setFirmware(event.target.value)}
      />
      <Select
       titleLabel="Codin Ativo*"
       value={codin}
       options={typesCodin}
       onChange={(event) => setCodin(event.target.value)}
       placeHolderOption="Selecione o Status"
       required
     />
       </S.InputWrap>
       <S.ButtonWrap>
      <Button
       titleButton={"Novo Registro"}
       width={"300px"}
       height={"40px"}
       background={"#DAA520"}
      />
      <Button
       titleButton={"Alterar"}
       width={"300px"}
       height={"40px"}
       background={"#DAA520"}
      />
      <Button
       titleButton={"Excluir"}
       width={"300px"}
       height={"40px"}
       background={"#DAA520"}
      />
     </S.ButtonWrap>
       {`${codigo} -- ${empresaSelecionada} -- ${descricao} -- ${ip} -- ${confBiometrico} --${aplicativo}`}
   </S.ContainerHeaderWrap>
    );
}

export default EquipamentRegistration