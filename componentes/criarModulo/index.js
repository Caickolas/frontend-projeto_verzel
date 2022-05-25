import comAutorizacao from "../../hoc/comAutorizacao"

function criarModulo() {
    return (
        <h1>Home</h1>
    )
}

export default comAutorizacao(criarModulo)