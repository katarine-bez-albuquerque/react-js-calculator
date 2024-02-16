/**
 * Li
 * Li Component
 */
import { Types } from "../../types";

const Li = ({href, text}:Types) => {
    return(
        <li><a target="_blank" href={href}>{text}</a></li>
    );
}

export default Li;