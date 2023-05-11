import { useFormik } from "formik";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../config/apollo/gqlClient";
const Signup = () => {

	const [errorMsg, setErrorMsg] = useState('');
	const [ register, {loading:loginload, error, data}  ] = useMutation(userSignup)
	

	const navigate = useNavigate();
	const handlerLogin = () => {
		navigate("/Login")
	}
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			userName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object().shape({
			firstName: Yup.string()
				.min(3, "First name harus lebih dari 3 huruf")
				.required(),
			lastName: Yup.string()
				.min(3, "Last name harus lebih dari 3 huruf")
				.required(),
			email: Yup.string().email("Isi email dengan benar").required(),
			password: Yup.string().min(8, "Minimal panjang password 8").required(),
			confirmPassword: Yup.string()
				.min(8, "Minimal panjang password 8")
				.required(),
		}),
		onSubmit: (values) => {
			console.log(values)
			 register ({
				variables: {
					firstname : values.firstName,
					lastname : values.lastName,
					email : values.email,
					password : values.password
				}
			})
		},

	});

	if (data) {
		if(window.confirm("Data berhasil di Edit!!! Kembali ke halaman Login?")) {
			navigate("/Login");
		}
	}

	return (
		<div>
			
			<div className="d-md-flex min-vh-100 justify-content-center align-items-center">
				<div className="w-full w-md-50 p-4 shadow">
					<form>
					<div className="text-center">{loginload?<p>loading</p>:<p></p>}</div>
					<h1 
                        className="text-center fs-3 fw-bold mb-3"
                        style={{color: "#EF5B00"}}
                    >
                        Sign Up
                    </h1>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="firstname" className="form-label">
									First Name
								</label>
								<input
									type="text"
									className={`form-control ${formik.errors.firstName && `is-invalid`} `}
									id="firstname"
									placeholder="First name"
									aria-label="First name"
									name="firstName"
									value={formik.values.firstName}
									onChange={formik.handleChange}
								/>
								<div className="invalid-feedback">{formik.errors.firstName}</div>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="lastname" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									className={`form-control ${formik.errors.lastName && `is-invalid`} `}
									id="lastname"
									placeholder="Last name"
									aria-label="Last name"
									name="lastName"
									value={formik.values.lastName}
									onChange={formik.handleChange}
								/>
								<div className="invalid-feedback">{formik.errors.lastName}</div>
							</div>
						</div>
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
						<div className="mb-3">
							<label htmlFor="confirmpassword" className="form-label">
								Confirm Password
							</label>
							<input
								type="password"
								className={`form-control ${formik.errors.confirmPassword && `is-invalid`
									} `}
								id="confirmpassword"
								placeholder="confirm password"
								name="confirmPassword"
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
							/>
							<div className="invalid-feedback">{formik.errors.confirmPassword}</div>
							{formik.values.password != formik.values.confirmPassword && (
								<div className="text-danger">
									<p className="fs-6">Confirm password tidak sama dengan password</p>
								</div>
							)}
						</div>
						{error?
							<p className="text-danger">Email sudah digunaan</p>:
							<p></p>
						}
						<button
							type="submit"
							className="btn text-white fw-bold"
							style={{ backgroundColor: "#EF5B00" }}
							onClick={formik.handleSubmit}>
							Register
						</button>
						<a
							className="text-decoration-none fs-6 fw-bold m-2"
							onClick={handlerLogin}
							style={{ color: "#EF5B00" }}
						>
							Login
						</a>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Signup;
