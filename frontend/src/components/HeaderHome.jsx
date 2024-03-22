"use client";
import React from "react";
import {Button, Input} from "@/components/materialTailwind";
import useTableEdit from "@/store/useTableEdit";
import Link from "next/link";

const HeaderHome = () => {
    const {setEdit, disableEdit, isEdit} = useTableEdit();
    return (
        <div className={`flex items-center justify-between mb-10`}>
            <div className={`w-[27rem]`}>
                <Input label={"Cari"}/>
            </div>

            <div className="flex space-x-4">
                <Button onClick={isEdit ? disableEdit : setEdit} color={isEdit ? "red" : "yellow"}>
                    {isEdit ? "Batal" : "Edit data"}
                </Button>
                <Link href={"/import-data"}>
                    <Button>{"Import data"}</Button>
                </Link>
            </div>
        </div>
    );
};

export default HeaderHome;
