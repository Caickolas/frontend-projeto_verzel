import HttpService from "./Httpservice";

export default class UsuarioService extends HttpService {
    async login(credenciais) {
        const {data} = await this.post('/login', credenciais);

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role),
        localStorage.setItem("token", data.token);
        
    }
    async cadastro(dados) {
        return this.post('/cadastro', dados);
    }

    estaAutenticado() {
        return localStorage.getItem('token') !== null;        
    }

    obterInformacoesDoUsuarioLogado() {
        return {
            id: localStorage.getItem('id'),
            nome: localStorage.getItem('nome'),
            role: localStorage.getItem('role')
        }
    }
}