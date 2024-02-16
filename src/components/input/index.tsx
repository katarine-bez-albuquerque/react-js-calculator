/**
 * Input
 * Input component
 */
import { Types } from "../../types";

const Input = ({type,name,id,value,placeholder,readOnly}:Types) => {
    return(
        <input readOnly={readOnly}  id={id} type={type} name={name} value={value} placeholder={placeholder}/>
    );
}

export default Input;