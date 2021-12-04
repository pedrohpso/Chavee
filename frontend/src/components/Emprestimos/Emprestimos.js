import React, { useContext } from "react";
import "./Emprestimos.css";
import Tabela from "../Tabela/Tabela"
import { EmprestimosContext } from "../../context/EmprestimosProvider";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";


const Emprestimos = ({props}) => {
    const {emprestimos} = useContext(EmprestimosContext);
    return(
        <body>
            <div className="conteudo">
            <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Empréstimos</h4>
                </div>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Código do Imóvel", proporcao: 10 , alinhamento: "center"},
                    {nome: "Código da Chave", proporcao: 5, alinhamento: "center"},
                    {nome: "Endereço", proporcao: 20, alinhamento: "left"},
                    {nome: "Descrição", proporcao: 20, alinhamento: "left"},
                    {nome: "Nome do cliente", proporcao: 10, alinhamento: "left"},
                    {nome: "Data da Entrega", proporcao: 10, alinhamento: "center"},
                    {nome: "Data de Retirada", proporcao: 10, alinhamento: "center"},
                    {nome: "Ações",  proporcao: 10, alinhamento: "center"}
                    
                ]}
                registros={emprestimos}></Tabela>
            </div>
        </body>
    )
}
export default Emprestimos;