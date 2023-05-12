import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail } from "../../config/apollo/gqlClient";
import { useQuery } from "@apollo/client";

const DetailPlan = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { loading, data, error } = useQuery(getDetail,{
		variables: {idPlan: id},
	});

	if (loading) return <p>loading...</p>;
	if (error) return <p>error...</p>;
	const plans = data.plan[0];

	const handleKembali = () => {
		navigate(`/${plans.id_user}`)
	}

	return (
		<div>
			<div className="d-flex min-vh-100 justify-content-center align-items-center">
				<div className="w-25 p-5 rounded shadow">
					
					<button className="btn btn-primary mb-3" onClick={handleKembali}>Kembali</button>
					
					<p>id : {plans.idPlan}</p>
					<p>Nama Destinasi : {plans.namaDestinasi}</p>
					<p>Nama Kota : {plans.namaKota}</p>
					<p>Catatan : {plans.catatan}</p>
					
				</div>
			</div>
		</div>
	);
};

export default DetailPlan;
