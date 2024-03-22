'use client'
import React, {useEffect, useState} from 'react';
import columnsNutritions from "@/const/columnsNutritions";
import {Button, Checkbox, Typography} from "@/components/materialTailwind";
import useTableEdit from "@/store/useTableEdit";
import RowInput from "@/components/RowInput";
import {useNutritionsPreview} from "@/store/useNutritionsPreview";
import axios from "axios";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import {redirect} from "next/navigation";
import {useRouter} from 'next/navigation'

const TablePreview = () => {

    const {nutritions} = useNutritionsPreview()
    const router = useRouter();

    const [modalSuccess, setModalSuccess] = useState(false)

    const saveHandler = async () => {
        await axios.post("http://localhost:8000/api/nutrition/save", {nutritions}).then(res => {
            console.log(res.data)
            router.refresh()
            setModalSuccess(true)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            {/*modal sukses*/}
            <Dialog open={modalSuccess}>
                <DialogHeader>Berhasil</DialogHeader>
                <DialogBody>
                    Data berhasil di simpan
                </DialogBody>
                <DialogFooter>
                    <Button color="green" onClick={() => {
                        router.push('/database', {});
                    }}>Oke</Button>
                </DialogFooter>
            </Dialog>
            <div className={` w-full overflow-x-scroll`}>
                <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                    <tr>
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
                            <th key={head} className="border-b text-center border-blue-gray-100  p-4">
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
                    <tbody>
                    {nutritions?.map((nutrition, index) => (
                        <tr key={index} className="border-b border-b-gray-300">


                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {index + 1}
                                </Typography>
                            </td>

                            <RowInput index={index} propeti={"name"} value={nutrition.name}/>

                            <RowInput index={index} type={'number'} value={nutrition.energy} propeti={"energy"}/>


                            <RowInput index={index} type={'number'} value={nutrition.water} propeti={"water"}/>


                            <RowInput index={index} type={'number'} value={nutrition.protein} propeti={"protein"}/>


                            <RowInput index={index} type={'number'} value={nutrition.fat} propeti={"fat"}/>

                            <RowInput index={index} type={'number'} value={nutrition.carbohydrates}
                                      propeti={"carbohydrates"}/>

                            <RowInput index={index} type={'number'} value={nutrition.fibre} propeti={"fibre"}/>
                            <RowInput index={index} type={'number'} value={nutrition.alcohol} propeti={"alcohol"}/>
                            <RowInput index={index} type={'number'} value={nutrition.pufa} propeti={"pufa"}/>
                            <RowInput index={index} type={'number'} value={nutrition.cholesterol}
                                      propeti={"cholesterol"}/>
                            <RowInput index={index} type={'number'} value={nutrition.vitamin_a} propeti={"vitamin_a"}/>
                            <RowInput index={index} type={'number'} value={nutrition.carotene} propeti={"carotene"}/>
                            <RowInput index={index} type={'number'} value={nutrition.vitamin_e} propeti={"vitamin_e"}/>
                            <RowInput index={index} type={'number'} value={nutrition.vitamin_b1}
                                      propeti={"vitamin_b1"}/>
                            <RowInput index={index} type={'number'} value={nutrition.vitamin_b2}
                                      propeti={"vitamin_b2"}/>
                            <RowInput index={index} type={'number'} value={nutrition.vitamin_b6}
                                      propeti={"vitamin_b6"}/>
                            <RowInput index={index} type={'number'} value={nutrition.fol_acid} propeti={"fol_acid"}/>
                            <RowInput index={index} type={'number'} value={nutrition.vitamin_c} propeti={"vitamin_c"}/>
                            <RowInput index={index} type={'number'} value={nutrition.sodium} propeti={"sodium"}/>
                            <RowInput index={index} type={'number'} value={nutrition.potassium} propeti={"potassium"}/>
                            <RowInput index={index} type={'number'} value={nutrition.calcium} propeti={"calcium"}/>
                            <RowInput index={index} type={'number'} value={nutrition.magnesium} propeti={"magnesium"}/>
                            <RowInput index={index} type={'number'} value={nutrition.phosphorus}
                                      propeti={"phosphorus"}/>
                            <RowInput index={index} type={'number'} value={nutrition.iron} propeti={"iron"}/>
                            <RowInput index={index} type={'number'} value={nutrition.zinc} propeti={"zinc"}/>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            <div className={`flex justify-end mt-5 mr-10`}>

                <Button onClick={saveHandler}>Simpan data</Button>
            </div>
        </>

    );
};

export default TablePreview;
