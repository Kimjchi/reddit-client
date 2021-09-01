import logo from '../logo.svg';

export default function Header() {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" /><h1>Reddit client <span className="little-quote">by Jérémy</span></h1>
        </header>
    )
}