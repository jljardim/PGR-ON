import React from 'react'
import { useState, useEffect} from 'react';
import Header2 from '../../components/Header2';
import Table from '../../components/Table';
import Input from "../../components/Input";
import api from "../../services/api";
import Swal from "sweetalert2";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";

import * as S from './styles'

const Details =() => {
    const [filtro, setFiltro] = useState("");
    const [respApi, setRespApi] = useState([]);

          const handleOnClick = async () => {
            try {
              const response = await api.get(
                `/messages?razao_like=${filtro}`
                );
              setRespApi(response.data);
              console.log(response.data)
            } catch (error) {
                  Swal.fire({
                    icon: "error",
                    title: "Mensagem",
                    text: "Error 404 /Filters tente novamente ou contate o suporte",
                  });
            }
          };
          useEffect(() => {
            handleOnClick();
          }, []);  

    return (
        
            <S.ContentWraper>
                <S.SideBar>
                    <ul>
                        <li><Link to="/company">
                        <Button
                          titleButton={"Cadastro Empresa"}
                          width={'120px'}
                          background="#DAA520"
                          fontSize={"8px"}
                          height={"25px"}
                         />
                        </Link>
                        </li>
                        <li>
                        <Link to="/register-colaborator">
                        <Button
                          titleButton={"Cadastro Colaborador"}
                          width={'120px'}
                          background="#DAA520"
                          fontSize={"8px"}
                          height={"25px"}
                         />
                        </Link>
                        </li>
                        <li>
                        <Link to="/register-equipment">
                        <Button
                          titleButton={"Cadastro Equipamento"}
                          width={'120px'}
                          background="#DAA520"
                          fontSize={"8px"}
                          height={"25px"}
                         />
                        </Link>
                        </li>
                        <li>
                        <Link to="/">
                        <Button
                          titleButton={"Sair"}
                          width={'120px'}
                          background="#DAA520"
                          fontSize={"8px"}
                          height={"25px"}
                         />
                        </Link>
                        </li>
                    </ul>
                </S.SideBar>
                <S.TableWraper>
                <Header2 
                h1Content="Empresa"
                 />
                  <Link to="/company">
                    <Button
                      titleButton={"Novo Cadastro"}
                      width={'400px'}
                      background="#DAA520"
                      fontSize={"16px"}
                      height={"35px"}
                  />
                 </Link>
                 <S.Busca>
                 <Input
                  label="Buscar:"
                  typeInput="text"
                  value={filtro}
                  valueOnChange={(event) => setFiltro(event.target.value)}
                  flexDirection={"row"}
                  onKeyCapture={handleOnClick}
                  placeHolder="faça uma busca"
                />
                 </S.Busca>
          
                   <table className="table">
                     <thead>
                       <tr>
                       <th>Codigo</th>
                       <th>Razão Social</th>
                       <th>CNPJ/CPF</th>
                       <th>Local</th>
                         <th>Editar</th>
                       </tr>
                     </thead>
                     <tbody>
              {respApi.map((item) => {
                return (
                  <tr>
                    <td>{item.codigo}</td>
                    <td>{item.razao}</td>
                    <td>{item.documento}</td>
                    <td>{item.local}</td>
                    <td>
                      <button>editar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
                   </table>
                </S.TableWraper>
            </S.ContentWraper>

           
    );
}

export default Details

/* 
               <Input
                  label="Buscar"
                  typeInput="text"
                  value={filtro}
                  valueOnChange={(event) => setFiltro(event.target.value)}
                /> 

*/

/*const filter = banco.map((item) => {
    return {
            label: item.name,
            value: item.name
            };
          });

          console.log(filter) */

          //const banco =[{codigo:"1", razao:"Avon.LTDA", documento:"23.645.065/0001-64", local:"Rua São João, 953"}]
   // {codigo:"2", razao:"Avon.LTDA", documento:"23.645.065/0001-64", local:"Rua São João, 953"},
   // {codigo:"3", razao:"Avon.LTDA", documento:"23.645.065/0001-64", local:"Rua São João, 953"},
   // {codigo:"4", razao:"Avon.LTDA", documento:"23.645.065/0001-64", local:"Rua São João, 953"}] 


    /*
           {
      "id": 1,
      "channel": "whatsapp",
      "trigger": "abertura_conta",
      "timer": "73:00",
      "message": " Na correria do dia a dia a Oi Conta Zap te ajuda a lembrar de algumas coisinhas! Ja conseguiu pagar seu boleto? Se sim, desconsidere a mensagem"
    },
    {
      "id": 1631312843768,
      "channel": "whatsapp",
      "trigger": "criou_chave_pix",
      "timer": "12:00",
      "message": "vI  que você criou um chave ?"
    },
    {
      "id": 1631313726738,
      "channel": "email",
      "trigger": "fez_pix",
      "timer": "2323",
      "message": "23232323"
    },
    {
      "channel": "whatsapp",
      "trigger": "deletou_chave_pix",
      "timer": "11:00",
      "message": "Parabéns chave pix cadastrado com sucesso !!",
      "id": 1631313726739
    },
    {
      "channel": "email",
      "trigger": "fex_transferencia_outro_banco",
      "timer": "12:00",
      "message": "Recebemos sua solicitação de transferencia dentro e alguns instantes você recebera um email ",
      "id": 1631313726740
    },
    {
      "channel": "whatsapp",
      "trigger": "recarregou_celular",
      "timer": "13:00",
      "message": "Comprei algo",
      "id": 1631313726741
    } 
    
    */

    /*
       <Table
                    campo1="Código"
                    campo2="Razão Social"
                    campo3="CNPJ/CPF"
                    campo4="Local"
                    campo5="Editar"
                    filter={respApi}
                    codigo="codigo"
                    razao="razao"
                    documento="documento"
                    local="local" 
                    
                    />
    
    */


                    /*
          <table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Razao</th>
                <th>Documento</th>
                <th>Local</th>
                <th>Upadte</th>
              </tr>
            </thead>
            <tbody>
              {respApi.map((item) => {
                return (
                  <tr>
                    <td>{item.codigo}</td>
                    <td>{item.razao}</td>
                    <td>{item.documento}</td>
                    <td>{item.local}</td>
                    <td>
                      <button>
                        ver mensagem
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
                    
                    */


          /* 
          `/messages?codigo_like=${filtro}&razao_like=${filtro}&documento_like=${filtro}&local_like${filtro}`
          
          */