import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authSlice from "../config/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const userEmail = "rio@gmail.com";
	const userPass = "riogtgbgt";
    const [ErrorMsg, setErrorMsg] = useState("")

	const dispatch = useDispatch();
	const navigate = useNavigate();

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
			if (values.email === userEmail && values.password == userPass ){
				dispatch(authSlice.actions.login(true));
                setErrorMsg("")
				return navigate ("/");
			} else {
                setErrorMsg("Password atau Email anda salah")
			}
		},
	});

    return(
        <div className="d-md-flex min-vh-100 justify-content-center align-items-center">
				<div className="w-full w-md-50 p-5 rounded shadow">
					<form>
						<h1 className="text-center fs-3 mb-3">Sign In</h1>
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
							className="btn btn-primary"
							onClick={formik.handleSubmit}>
							Sign In
						</button>
					</form>
				</div>
			</div>
    )

}

export default Login