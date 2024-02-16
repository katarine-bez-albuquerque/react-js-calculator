/**
 * Paragraph
 * Paragraph component
 */
import { Types } from "../../types";

const Paragraph = ({id,text}:Types) => {
    return(
        <p id={id}>{ text }</p>
    );
}

export default Paragraph;