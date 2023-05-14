import {Link} from 'react-router-dom'
import './Header.css'
import { ReactComponent as Logo } from './MOV-E.svg';
function Header(){

    return(
        <div className="header">
            <Link to='/'>
            <Logo ></Logo>
            </Link>
        </div>
    )
}
export default Header;