import HttpService from "./Httpservice";

export default class UsuarioService extends HttpService {
    async login(credenciais) {
        const {data} = await this.post('/login', credenciais);
        console.log(data);

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);
        
    }
    async cadastro(dados) {
        return this.post('/cadastro', dados);
    }
}