'use client'
import React, {useEffect, useState} from 'react';
import {Input, Typography} from "@/components/materialTailwind";
import Select from 'react-select'
import {FaTrash} from "react-icons/fa6";
import classNames from "classnames";

const TableCalculation = ({nutritionsData}) => {

    const [nutritions, setNutritions] = useState(nutritionsData)
    const [optionsNutritions, setOptionsNutritions] = useState([])
    const [rows, setRows] = useState([{id: null, amount: 0}])
    const [resultNutrition, setResultNutrition] = useState({
        energy: 0,
        water: 0,
        protein: 0,
        fat: 0,
        carbohydr: 0,
        diateryFiber: 0,
        alcohol: 0,
        pufa: 0,
        vitA: 0,
        vitB1: 0,
        vitB2: 0,
        vitB6: 0
    })


    useEffect(() => {
        setNutritions(nutritionsData)

        setOptionsNutritions(nutritionsData.map(n => ({label: n.name, value: n.id})))

        calculateNutrition()
    }, [rows]);

    const handleSelect = (val, index) => {

        if (index === 0) {
            setRows([{id: val.value, amount: 0}])
        } else {
            setRows(prevState => {
                const updatedRows = [...prevState];
                updatedRows[index].id = val.value;
                return updatedRows;
            });
        }
    }

    const calculateNutrition = () => {
        let totalEnergy = 0;
        let totalWater = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalCarbohydr = 0;
        let totalDiateryFiber = 0;
        let totalAlcohol = 0;
        let totalPufa = 0;
        let totalVitA = 0;
        let totalVitB1 = 0;
        let totalVitB2 = 0;
        let totalVitB6 = 0;


        rows.filter(n => n.id !== null).forEach(row => {
            const nutrition = nutritions.find(n => n.id === row.id);
            console.log(nutrition)
            if (nutrition) {
                const {
                    energy,
                    water,
                    protein,
                    fat,
                    carbohydrates,
                    fibre,
                    alcohol,
                    pufa,
                    vitamin_a,
                    vitamin_b1,
                    vitamin_b2,
                    vitamin_b6
                } = nutrition;
                const {amount} = row;
                totalEnergy += energy * amount;
                totalWater += water * amount;
                totalProtein += protein * amount;
                totalFat += fat * amount;
                totalCarbohydr += carbohydrates * amount;
                totalDiateryFiber += fibre * amount;
                totalAlcohol += alcohol * amount;
                totalPufa += pufa * amount;
                totalVitA += vitamin_a * amount;
                totalVitB1 += vitamin_b1 * amount;

                totalVitB2 += vitamin_b2 * amount;
                totalVitB6 += vitamin_b6 * amount;

            }
        });
        setResultNutrition(prevState => ({
            ...prevState,
            energy: totalEnergy,
            water: totalWater,
            protein: totalProtein,
            fat: totalFat,
            carbohydr: totalCarbohydr,
            diateryFiber: totalDiateryFiber,
            alcohol: totalAlcohol,
            pufa: totalPufa,
            vitA: totalVitA,
            vitB1: totalVitB1,
            vitB2: totalVitB2,
            vitB6: totalVitB6

        }));
    }


    const handleAmountChange = (e, index) => {
        let {value} = e.target;

        if (value === "") {
            value = 0
        }
        if (value.length >= 1) {
            if (value.charAt(0) === 0 || value.charAt(0) === "0") {

                value = value.slice(1)

            }
        }

        setRows(prevState => {
            const updatedRows = [...prevState];

            updatedRows[index].amount = value; // Update the amount for the specified row
            return updatedRows;
        });

        if (!rows[index + 1] && rows[index].id !== null) {
            setRows(prevState => ([...prevState, {id: null, amount: 0}]))
        }
        // calculateNutrition()
    }

    const handleDalete = (index) => {
        setRows(prevState => {
            const updatedRows = [...prevState];
            updatedRows.splice(index, 1)
            return updatedRows;
        });
    }

    return (
        <div className={`flex`}>
            {/*<h1 onClick={() => console.log(resultNutrition)}>halo</h1>*/}
            <div className={'basis-3/5 bg-white'}>
                <table className={`table-auto w-full `}>
                    <thead>
                    <tr>
                        <Th text={"Name"}/>
                        <Th text={"Amount"}/>
                        <Th/>
                    </tr>
                    </thead>

                    <tbody>
                    {Array.isArray(rows) && rows.map((row, index) => (
                        <tr key={index} className="border-b border-b-gray-300">
                            <td className="p-4">
                                <Select


                                    styles={{
                                        control: (base, state) => ({
                                            ...base,
                                            boxShadow: state.isFocused ? 0 : 0,
                                            borderColor: state.isFocused
                                                ? '#4caf50'
                                                : base.borderColor,
                                            '&:hover': {
                                                borderColor: state.isFocused
                                                    ? '#4caf50'
                                                    : base.borderColor,
                                            }
                                        }),
                                        option: (styles, {data, isDisabled, isFocused, isSelected}) => {


                                            return {
                                                ...styles,
                                                backgroundColor: isSelected ? "rgb(76,175,80)" : null,
                                                color: isSelected ? "white" : null,
                                                ":active": {
                                                    backgroundColor: '#4caf50',
                                                    color: 'white'
                                                },
                                                ":hover": {
                                                    backgroundColor: '#4caf50',
                                                    color: 'white'
                                                }
                                            };
                                        }
                                    }}


                                    classNamePrefix="react-select"
                                    defaultValue={row.id ? row.id : undefined}
                                    onChange={val => handleSelect(val, index)}
                                    options={optionsNutritions ?? []}
                                    placeholder={"Pilih makanan"}/>
                            </td>
                            <td className="p-4 w-36">
                                <Input type={'number'} onChange={val => handleAmountChange(val, index)}
                                       value={row.amount}
                                       label={'amount'}
                                       className={''}/>
                            </td>
                            <td className={``}>
                                <div className={`flex justify-center items-center`}>
                                    <span className={`active:bg-black/10 rounded-full p-3 cursor-pointer`}
                                          onClick={() => handleDalete(index)}>

                                    <FaTrash/>
                                    </span>
                                </div>

                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
            <div className={`basis-2/5 pt-2.5 ml-4 border border-gray-200 p-4 shadow-sm rounded-md bg-white`}>
                <h2 className={`text-xl mb-2`}>Kandungan nutrisi</h2>
                <hr/>

                <ul className={`mt-4 space-y-1`}>
                    <ListRes label={'Energy'} value={resultNutrition.energy}/>
                    <ListRes label={'Water'} value={resultNutrition.water}/>
                    <ListRes label={'Protein'} value={resultNutrition.protein}/>
                    <ListRes label={'Fat'} value={resultNutrition.fat}/>
                    <ListRes label={'Carbohydr'} value={resultNutrition.carbohydr}/>
                    <ListRes label={'Diatery fiber'} value={resultNutrition.diateryFiber}/>
                    <ListRes label={'Alcohol'} value={resultNutrition.alcohol}/>
                    <ListRes label={'Pufa'} value={resultNutrition.pufa}/>
                    <ListRes label={'Vit A'} value={resultNutrition.vitA}/>
                    <ListRes label={'Vit B1'} value={resultNutrition.vitB1}/>
                    <ListRes label={'Vit B2'} value={resultNutrition.vitB2}/>
                    <ListRes label={'Vit B6'} value={resultNutrition.vitB6}/>
                </ul>

            </div>
        </div>
    )
        ;
};

export default TableCalculation;


function ListRes({label, value}) {
    return (
        <li className={`flex items-center space-x-4`}>
            <span className={`basis-3/5`}>{label}</span>
            <span>{value}</span>
            {/*<Progress value={value} label={' '} color={"blue"}/>*/}
        </li>
    )
}

function Th({text}) {
    return (
        <th className="border-b border-blue-gray-100  p-4">
            {
                text ? <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                >
                    {text}
                </Typography> : null
            }

        </th>
    )
}
