import React, { useCallback } from "react";

const FormInput = ({ name, value, label, onChange }) => {

    const onChangeEvent = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        
        onChange((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={name == 'password' ? 'password': 'text' }
                name={name}
                value={value}
                onChange={onChangeEvent}
            />
        </div>
    )
}

export default FormInput;