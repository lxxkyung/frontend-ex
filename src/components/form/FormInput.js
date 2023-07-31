import React, { useCallback } from "react";

const FormInput = ({ name, value, label }) => {

    const onChange = (e) => {
        console.log(e.target.value)
        
    }
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={name == 'password' ? 'password': 'text' }
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default FormInput;