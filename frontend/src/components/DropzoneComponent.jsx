import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {MdOutlineFileUpload} from "react-icons/md";
import Dropzone from "react-dropzone";

export default function DropzoneComponent({onDrop}) {


    return (

        <Dropzone onDrop={onDrop}>
            {({getRootProps, getInputProps, isDragActive, acceptedFiles}) => {
            
                return (

                    <section
                    >
                        <div
                            className={`border border-dashed h-80 cursor-pointer flex justify-center items-center rounded-md ${isDragActive ? "border-green-500 border-2" : "border-gray-300 "}`} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p className="box-border p-3">
                                Upload file anda disini pastikan sudah sesuai dengan template <span
                                className={`text-blue-500`}>unduh disini</span>
                            </p>
                        </div>
                    </section>
                )
            }}
        </Dropzone>

        // <Dropzone onDrop={onDrop}>
        //     {({getRootProps, getInputProps, isDragActive}) => (
        //         <section
        //             className={`border border-dashed h-80 flex justify-center items-center rounded-md ${isDragActive ? "border-green-500 border-2" : "border-gray-300 "}`}>
        //             <div {...getRootProps()}>
        //                 <input {...getInputProps()} />
        //                 {
        //                     isDragActive ?
        //                         <p>Jatuhkan filde anda disini</p> :
        //                         <div>
        //                             <MdOutlineFileUpload size={60} className={`mx-auto`}/>
        //                             <p className={`text-xl`}>Upload file anda disini pastikan sudah sesuai dengan
        //                                 template <span
        //                                     className={`text-blue-500`}>Unduh template disini</span>
        //                             </p>
        //                         </div>
        //                 }
        //             </div>
        //         </section>
        //     )}
        // </Dropzone>
        // <div {...getRootProps()}
        //      className={`border border-dashed h-80 flex justify-center items-center rounded-md ${isDragActive ? "border-green-500 border-2" : "border-gray-300 "}`}>
        //     <input {...getInputProps()} />
        //     {
        //         isDragActive ?
        //             <p>Jatuhkan filde anda disini</p> :
        //             <div>
        //                 <MdOutlineFileUpload size={60} className={`mx-auto`}/>
        //                 <p className={`text-xl`}>Upload file anda disini pastikan sudah sesuai dengan template <span
        //                     className={`text-blue-500`}>Unduh template disini</span>
        //                 </p>
        //             </div>
        //     }
        // </div>
    )
}
