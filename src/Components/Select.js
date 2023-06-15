import React, {useState} from "react";


function Select (props) {
    const { options,onChange } = props;
    return (
            <select className="custom-select" onChange={(e)=>{
                const value= e.target.value
                onChange(value)
            }
            }>
                <option value={null}>Choose an option</option>
                {options.map(option=>{
                    return(
                     <option value={option.value}>{option.text}</option>
                )})}
            </select>
    )
}

export default Select