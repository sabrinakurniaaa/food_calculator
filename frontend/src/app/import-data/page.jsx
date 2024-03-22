"use client";
import React, {useEffect, useState} from "react";
import DropzoneComponent from "@/components/DropzoneComponent";
import axios from "axios";
import TablePreview from "@/components/TablePreview";
import {useNutritionsPreview} from "@/store/useNutritionsPreview";

const Page = () => {
    const [file, setFile] = useState(null);
    const {setNutritions} = useNutritionsPreview();


    async function handleDrop(files) {
        if (Array.isArray(files)) {
            const file = files[0];
            setFile(file);
            const formData = new FormData();
            formData.append("file", file);
            await axios
                .post("http://localhost:8000/api/preview", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => setNutritions(res.data));
        }
    }

    return (
        <div className={`p-4`}>
            {file ? <TablePreview/> : <DropzoneComponent onDrop={handleDrop}/>}
        </div>
    );
};

export default Page;
