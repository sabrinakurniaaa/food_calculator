import React from 'react';
import {Typography} from "@/components/materialTailwind";
import useTableEdit from "@/store/useTableEdit";
import {useNutritionEdit} from "@/store/useNutritionEdit";

const DynamicColumn = ({value, index, propeti, type}) => {
    const {setEdit, disableEdit, isEdit} = useTableEdit()
    const {updateNutrition} = useNutritionEdit()
    const changeHandler = (e) => {
        const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value

        updateNutrition(index, propeti, value)
    }

    return (
        <td className="p-4 w-1">
            {
                isEdit ? <input value={value} type={type ? type : "text"}
                                className={`text-center`} onChange={changeHandler}/> :
                    <Typography variant="small" color="blue-gray" className="font-normal cursor-text text-center p-1">
                        {value}
                    </Typography>

            }

        </td>
    );
};

export default DynamicColumn;
