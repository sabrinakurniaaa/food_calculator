'use client'
import React, {useEffect, useState} from 'react';
import columnsNutritions from "@/const/columnsNutritions";
import {Button, Checkbox, Input, Typography} from "@/components/materialTailwind";
import useTableEdit from "@/store/useTableEdit";
import Link from "next/link";
import DynamicColumn from "@/components/DynamicColumn";
import {useNutritionEdit} from "@/store/useNutritionEdit";
import axios from "axios";
import {useRouter} from "next/navigation";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";

const TableNutritions = ({data}) => {
    const {setEdit, disableEdit, isEdit} = useTableEdit()

    const {nutritions, setNutritions, changedNutritions} = useNutritionEdit()
    const [modalOpen, setModalOpen] = useState(false)
    const router = useRouter();

    useEffect(() => {
        console.log(data)
        setNutritions(data)
    }, [])

    const addRow = () => {
        setNutritions([...nutritions, {
            name: "",
            energy: "",
            water: "",
            protein: "",
            fat: "",
            carbohydrates: "",
            fibre: "",
            alcohol: "",
            pufa: "",
            cholesterol: "",
            vitamin_a: "",
            carotene: "",
            vitamin_e: "",
            vitamin_b1: "",
            vitamin_b2: "",
            vitamin_b6: "",
            fol_acid: "",
            vitamin_c: "",
            sodium: "",
            potassium: "",
            calcium: "",
            magnesium: "",
            phosphorus: "",
            iron: "",
            zinc: "",
        }])
    }

    const saveHandler = async () => {
        return console.log(changedNutritions)
        await axios.patch('http://127.0.0.1:8000/api/nutrition/update', {nutritions: changedNutritions}).then(res => {
            setModalOpen(true)
            disableEdit()
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <Dialog open={modalOpen}>
                <DialogHeader>Berhasil</DialogHeader>
                <DialogBody>
                    Data berhasil di simpan
                </DialogBody>
                <DialogFooter>
                    <Button color="green" onClick={() => {
                        setModalOpen(false)
                    }}>Oke</Button>
                </DialogFooter>
            </Dialog>
            <div className={`flex items-center justify-between mb-10`}>
                <div className={`w-[27rem]`}>
                    <Input label={"Cari"}/>
                </div>

                <div className="flex space-x-4">
                    <Button onClick={isEdit ? disableEdit : setEdit} color={isEdit ? "red" : "yellow"}>
                        {isEdit ? "Batal" : "Edit data"}
                    </Button>
                    {
                        isEdit ? <Button onClick={saveHandler}>{"Simpan"}</Button> : <Link href={"/import-data"}>
                            <Button>{"Import data"}</Button>
                        </Link>
                    }

                </div>
            </div>
            <div className={` w-full overflow-x-scroll max-h-[70vh]`}>
                <table className="w-full min-w-max table-auto text-left ">
                    <thead className={`sticky top-0 bg-white text-center`}>

                    <tr>
                        {/*<th className="border-b text-center border-blue-gray-100  p-4">*/}

                        {/*</th>*/}
                        <th className="border-b text-center border-blue-gray-100  p-4">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                No
                            </Typography>
                        </th>
                        {columnsNutritions.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100  p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className={' overscroll-y-auto'}>
                    {nutritions?.map((nutrition, index) => (
                        <tr key={index} className="border-b border-b-gray-300">

                            {/*<td className="p-4">*/}
                            {/*    <Checkbox/>*/}
                            {/*</td>*/}

                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {index + 1}
                                </Typography>
                            </td>

                            <DynamicColumn value={nutrition.name} index={nutrition.id} propeti={'name'}/>

                            <DynamicColumn value={nutrition.energy} type={"number"} propeti={"energy"}
                                           index={nutrition.id}/>

                            <DynamicColumn value={nutrition.water} type={"number"} propeti={"water"}
                                           index={nutrition.id}/>

                            <DynamicColumn value={nutrition.protein} type={"number"} propeti={"protein"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.fat} type={"number"} propeti={"fat"} index={nutrition.id}/>
                            <DynamicColumn value={nutrition.carbohydrates} type={"number"} propeti={"carbohydrates"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.fibre} type={"number"} propeti={"fibre"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.alcohol} type={"number"} propeti={"alcohol"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.pufa} type={"number"} propeti={"pufa"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.cholesterol} type={"number"} propeti={"cholesterol"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.vitamin_a} type={"number"} propeti={"vitamin_a"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.carotene} type={"number"} propeti={"carotene"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.vitamin_e} type={"number"} propeti={"vitamin_e"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.vitamin_b1} type={"number"} propeti={"vitamin_b1"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.vitamin_b2} type={"number"} propeti={"vitamin_b2"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.vitamin_b6} type={"number"} propeti={"vitamin_b6"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.fol_acid} type={"number"} propeti={"fol_acid"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.vitamin_c} type={"number"} propeti={"vitamin_c"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.sodium} type={"number"} propeti={"sodium"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.potassium} type={"number"} propeti={"potassium"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.calcium} type={"number"} propeti={"calcium"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.magnesium} type={"number"} propeti={"magnesium"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.phosphorus} type={"number"} propeti={"phosphorus"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.iron} type={"number"} propeti={"iron"}
                                           index={nutrition.id}/>
                            <DynamicColumn value={nutrition.zinc} type={"number"} propeti={"zinc"}
                                           index={nutrition.id}/>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            {
                isEdit ? <div className={`flex justify-end mt-5`}>
                    <Button onClick={addRow}>{"Tambah baris"}</Button>
                </div> : ""
            }

        </div>

    );
};

export default TableNutritions;
