/**
 * Button
 * Button component
 */
import { Types } from "../../types";

const Button = ({text,onClick}:Types) => {
    return(
        <button type="button" onClick={onClick}>{text}</button>
    );
}

export default Button;