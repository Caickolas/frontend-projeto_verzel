import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Botao from "../../componentes/botao";
import InputPublico from "../../componentes/inputPublico";
import { validarEmail, validarSenha, validarNome, validarConfirmacaoSenha } from '../../utils/validadores'
import UsuarioService from "../../services/UsuarioService";

import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";

const usuarioService = new UsuarioService();

  export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState(""); 
    const [estaSubmetendo, setEstaSubmetendo] = useState(false);
    
    const validarFormulario = () => {
      return (
          validarNome(nome) 
          && validarEmail(email) 
          && validarSenha(senha) 
          && validarConfirmacaoSenha(senha, confirmacaoSenha)
      );
    }

    const aoSubmeter= async (e) => {
        e.preventDefault();
        if(!validarFormulario()) {
            return;
        }

        setEstaSubmetendo(true);

        try{
            const corpoReqCadastro = new FormData();
            corpoReqCadastro.append("nome", nome);
            corpoReqCadastro.append("email", email);
            corpoReqCadastro.append("senha", senha);

            await usuarioService.cadastro(corpoReqCadastro);
            alert ('Sucesso!')
        }catch(error){
            alert(
                "erro ao cadastrar usuario. " + error?.response?.data?.erro
            );
        }

        setEstaSubmetendo(false);
    }


    return (
        <section className={'paginaCadastro paginaPublica'}>

            <div className="conteudoPaginaPublica">

            <h1>Cadastro</h1>

                <form onSubmit={aoSubmeter}>

                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto={"Nome Completo"}
                        type="text"
                        aoAlterarValor={e => setNome(e.target.value)}
                        valor={nome}
                        mensagemValidacao="Precisa ter ao menos 2 caracteres"
                        exibirMensagemValidacao={nome && !validarNome(nome)}
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto={"E-mail"}
                        type="email"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado é invalido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto={"Senha"}
                        type="password"
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="Precisa ter ao menos 4 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />
                    
                    <InputPublico
                        imagem={imagemChave}
                        texto={"Confirmar Senha"}
                        type="password"
                        aoAlterarValor={e => setConfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                        mensagemValidacao="Precisa ser identica a senha"
                        exibirMensagemValidacao={confirmacaoSenha && !validarConfirmacaoSenha(senha, confirmacaoSenha)}
                    />


                    <Botao
                        texto="Cadastrar"
                        type="submit"
                        disabled={!validarFormulario() || estaSubmetendo}
                    />
                </form>


                <div className="rodapePaginaPublica">
                    <p>já possui uma Conta?</p>
                    <Link href="/login"> Faça seu login agora!</Link>
                </div>
            </div>

        </section>
    );
};