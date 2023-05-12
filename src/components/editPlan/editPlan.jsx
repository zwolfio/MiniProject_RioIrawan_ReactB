import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { editPlan, getDetail } from "../../config/apollo/gqlClient";
import { useEffect } from "react";

const EditPlan = () => {

    const { id } = useParams();
    const regex = /^[^\s][\w\s]*[^\s\W]$/;

    const navigate = useNavigate();
    const { loading, data } = useQuery(
        getDetail,
        {
            variables:
            {
                idPlan: id
            }
        }

    )
    const [updateplan] = useMutation(editPlan)
    const dataplan = data? data.plan[0] : []

    const formik = useFormik({
        initialValues: {
            idPlan: id,
            namaDestinasi: dataplan.namaDestinasi,
            namaKota: dataplan.namaKota,
            catatan: dataplan.catatan,
            
        },
        validationSchema: Yup.object().shape({
            namaDestinasi: Yup.string()
                .min(5, "Must be 5 characters or less")
                .required()
                .matches(
                    regex,
                    "Tidak boleh ada symbol dan tidak boleh diawali dan diakhiri dengan spasi"
                ),
        }),
        onSubmit: async (values) => {
            await updateplan({
                variables: {
                    idPlan:id,
                    namaDestinasi: values.namaDestinasi,
                    namaKota: values.namaKota,
                    catatan: values.catatan,
                    

                }
            })
            if (window.confirm("Data berhasil di Edit!!! Kembali ke halaman Home?")) {
                navigate(`/${dataplan.id_user}`);
            }
        },
    });

    useEffect(() => {
        formik.values.namaDestinasi = dataplan.namaDestinasi;
        formik.values.namaKota = dataplan.namaKota;
        formik.values.catatan = dataplan.catatan;
        
    }, [dataplan]);

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="w-25 p-5 rounded shadow">
                <form action="" className="needs-validation" id="form" noValidate="">
                    <div><h2>Edit Plan</h2></div>
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
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={formik.handleSubmit}>
                        Save
                    </button>
                </form>
            </div>
        </div>

    )

}

export default EditPlan
