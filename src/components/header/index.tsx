/**
 * Header
 * Header component
 */
import Li from "../li";
import { Types } from "../../types";

const Header = ({title}: Types) => {
    return(
        <header id="header">
            <h1>{ title }</h1>
            <nav id="nav">
                <ul>
                    <Li href="https://www.linkedin.com/in/katarine-albuquerque/" text="Linkedin" />
                    <Li href="https://github.com/katarine-bez-albuquerque" text="Github" />
                </ul>                
            </nav>
        </header>
    );
}

export default Header;