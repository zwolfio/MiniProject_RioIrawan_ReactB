import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authSlice from "../config/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { userLogin } from "../config/apollo/gqlClient";

const Login = () => {

    const [userEmail,setuserEmail] = useState('')
    const [userPass,setuserPass] = useState('')
    const { data } = useQuery(userLogin, {
        variables: {
            email: userEmail,
            password: userPass
        }
    })

    const [ErrorMsg, setErrorMsg] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlerSignUp = () => {
        navigate("/SignUp");
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Isi email dengan benar").required(),
            password: Yup.string().min(8, "Minimal panjang password 8").required(),
        }),
        onSubmit: (values) => {
            console.log(values)
            setuserEmail(values.email);
            setuserPass(values.password);
            console.log(userEmail)
            console.log(data)
            if (data && values.email === data.user[0].email && values.password === data.user[0].password) {
                dispatch(authSlice.actions.login(true));
                setErrorMsg("")
                return navigate(`/${data.user[0].id}`);
            } else {
                setErrorMsg("Password atau Email anda salah")
            }
        },
    });
    



    return (
        <div className="d-md-flex min-vh-100 justify-content-center align-items-center">
            <div className="w-full w-md-50 p-5 rounded shadow">
                <form>
                    <h1 
                        className="text-center fs-3 fw-bold mb-3"
                        style={{color: "#EF5B00"}}
                    >
                        Sign In
                    </h1>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className={`form-control ${formik.errors.email && `is-invalid`} `}
                            id="email"
                            placeholder="name@example.com"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className={`form-control ${formik.errors.password && `is-invalid`} `}
                            id="password"
                            placeholder="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    </div>
                    <p className='text-danger'>{ErrorMsg}</p>
                    <button
                        type="submit"
                        className="btn fw-bold text-white"
                        style={{ backgroundColor: "#EF5B00" }}
                        onClick={formik.handleSubmit}>
                        Sign In
                    </button>
                    <a
                        className="text-decoration-none fs-6 fw-bold m-2"
                        onClick={handlerSignUp}
                        style={{ color: "#EF5B00" }}
                    >
                        Sign Up
                    </a>
                </form>
            </div>
        </div>
    )

}

export default Login