import logo from '../../image/logo.svg'
import './stylo.css'

function Logo(){
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>HL</strong>Books</p>
        </div>
    )
}
export default Logo