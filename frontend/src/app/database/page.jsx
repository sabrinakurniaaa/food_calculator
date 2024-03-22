import React from 'react';
import TableNutritions from "@/components/TableNutritions";
import HeaderHome from "@/components/HeaderHome";
import {Button} from "@/components/materialTailwind";

async function getNutritions() {
    const res = await fetch('http://localhost:8000/api/nutritions', {cache: 'no-store'});

    return res.json().then(res => res.nutritions) || [];
}

const Page = async () => {
    const nutritions = await getNutritions();

    return (
        <div className={`px-36 p-10 overflow-x-hidden`}>

            <TableNutritions data={nutritions}/>


        </div>
    );
};

export default Page;

