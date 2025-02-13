import perfil from '../../image/perfil.svg'
import sacola from '../../image/sacola.svg'

const icones = [perfil, sacola]

function iconesHeader () {
    return(
        <ul className='icones'>
            {icones.map( (icones) => (
                <li className='icone'><img src={icones}></img></li>
            ))}
        </ul>
    )
}
export default iconesHeader