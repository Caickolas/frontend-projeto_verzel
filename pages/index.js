import Botao from '../componentes/botao'

export default function Home() {
  return (
    <>
    <h1>Olá Mundo</h1>
    <div> 
     <Botao texto={'Login'} cor='primaria' onClick={() => console.log('botão clicado!')}></Botao>
    </div>
    </>
  )
}
