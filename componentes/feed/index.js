import { useEffect, useState } from "react"
import Modulo from "./Modulo";

export function Feed(Modulo) {
    const [listaDeModulos, setListaDeModulos] = useState();

    useEffect(() => {
        console.log('carregar o home');
        setListaDeModulos([
            {
                id: '1',
                nome : 'pitao',
                aulas : []
            }
        ])
        
    }, [Modulo]);
    
    return(
        <div>
            {listaDeModulos.map(dadosModulo => (
                <Modulo key={dadosModulo.id} {...dadosModulo}/>
            ))}
        </div>
    )
}