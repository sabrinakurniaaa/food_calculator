import React from 'react';
import {useNutritionsPreview} from "@/store/useNutritionsPreview";

const RowInput = ({value, index, propeti, type}) => {
    const {updateNutrition} = useNutritionsPreview()
    const changeHandler = (e) => {
        const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
      
        updateNutrition(index, propeti, value)
    }
    return (
        <td className="p-4 w-1">
            <input value={value} type={type ? type : "text"} onChange={changeHandler} className={`text-center`}/>
        </td>
    );
};

export default RowInput;
