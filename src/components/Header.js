import logo from '../reddit.svg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">
                <span className="header-content"><img src={logo} className="App-logo" alt="logo" /><h1>Reddit client <span className="little-quote">by Jérémy</span></h1></span>
            </Link>
        </header>
    )
}