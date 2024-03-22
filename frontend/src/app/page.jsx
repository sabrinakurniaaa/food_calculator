import React from 'react';
import TableCalculation from "@/components/TableCalculation";


async function getNutritions() {
    const res = await fetch('http://localhost:8000/api/nutritions', {cache: 'no-store'});
    return res.json().then(res => res.nutritions) || [];
}


const Page = async () => {
    const nutritions = await getNutritions();
    return (
        <div className={' p-4'}>
            <TableCalculation nutritionsData={nutritions}/>

        </div>
    );
};

export default Page;
