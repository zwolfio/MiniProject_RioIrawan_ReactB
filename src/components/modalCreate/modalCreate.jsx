import React, { useEffect } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";


const modalCreate = (props) => {
    
    
    const regex = /^[^\s][\w\s]*[^\s\W]$/;
    const formik = useFormik({
        initialValues: {
            namaDestinasi: "",
            namaKota: "",
            tanggalPergi: "",
            catatan: ""
        },
        validationSchema: Yup.object().shape({
            namaDestinasi: Yup.string()
                .max(25, "Product name maksimal 25 kata")
                .required()
                .matches(regex, "Masukkan Nama destinasi tanpa simbol"),
            namaKota: Yup.string().required().matches(regex, "Masukkan Nama destinasi tanpa simbol"),
            tanggalPergi: Yup.date().required(),
            catatan: Yup.string().required(),
        }),
        onSubmit: (values) => {
            console.log(values);
             props.insertPlans({
                variables: {
                    namaDestinasi: values.namaDestinasi,
                    namaKota: values.namaKota,
                    tanggalPergi: values.tanggalPergi,
                    catatan: values.catatan,
                    id_user: props.id
                },
            })
            formik.resetForm()
            
        },
    });


    return (
        <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="modalCreateLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalCreateLabel">Create Travel Plan</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="" className="needs-validation" id="form" noValidate="">
                            <div className="mb-3 w-100">
                                <label htmlFor="name" className="form-label">
                                    Nama Destinasi
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${formik.errors.namaDestinasi && `is-invalid`
                                        } `}
                                    id="namadestinasi"
                                    required
                                    name="namaDestinasi"
                                    value={formik.values.namaDestinasi}
                                    onChange={formik.handleChange}
                                />
                                <div className="invalid-feedback">{formik.errors.namaDestinasi}</div>
                            </div>
                            <div className="mb-3 w-100">
                                <label htmlFor="namakota" className="form-label">
                                    Nama Kota
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${formik.errors.namaKota && `is-invalid`
                                        } `}
                                    id="namakota"
                                    required
                                    name="namaKota"
                                    value={formik.values.namaKota}
                                    onChange={formik.handleChange}
                                />
                                <div className="invalid-feedback">{formik.errors.namaKota}</div>
                            </div>
                            <div className="mb-3 w-100">
                                <label htmlFor="tanggalpergi" className="form-label">
                                    Tanggal Pergi
                                </label>
                                <input
                                    type="date"
                                    className={`form-control ${formik.errors.tanggalPergi && `is-invalid`
                                        } `}
                                    id="tanggalpergi"
                                    required
                                    name="tanggalPergi"
                                    value={formik.values.tanggalPergi}
                                    onChange={formik.handleChange}
                                />
                                <div className="invalid-feedback">{formik.errors.tanggalPergi}</div>
                            </div>
                            <div className="mb-3 w-100">
                                <label htmlFor="catatan" className="form-label">
                                    Catatan
                                </label>
                                <textarea
                                    type="text"
                                    className={`form-control ${formik.errors.catatan && `is-invalid`
                                        } `}
                                    id="catatan"
                                    required
                                    name="catatan"
                                    value={formik.values.catatan}
                                    onChange={formik.handleChange}
                                />
                                <div className="invalid-feedback">{formik.errors.catatan}</div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button 
                            type="submit" 
                            className="btn fw-bold text-white"
                            data-bs-dismiss="modal"
                            style={{backgroundColor : "#5A44EB"}}
                            onClick={formik.handleSubmit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default modalCreate