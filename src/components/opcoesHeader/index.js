const textoOpcoes = ['Categorias', 'Estante', 'Favoritos']

function opcoesHeader (){
    return(
        <ul className='opcoes'>
            {textoOpcoes.map( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}
export default opcoesHeader