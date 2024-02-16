/**
 * Footer
 * Footer component
 */
import { Types } from "../../types";

const Footer = ({ copyright }:Types) => {
    return(
        <footer id="footer">
            <h4>{ copyright }</h4>
            <br />
        </footer>
    );
}

export default Footer;