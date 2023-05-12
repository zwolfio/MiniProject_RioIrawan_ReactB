import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer"
import ModalCreate from "../components/modalCreate/modalCreate";
import { useParams } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { getData, searchDestinasi ,insertPlan, deletePlan, done} from "../config/apollo/gqlClient";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPageLogin = () => {
    const { id } = useParams()
    const [insertPlans,{data:dataInsert}] = useMutation(insertPlan, )
    const [dataPlans, setdataPlans] = useState(false)
    const [loadMore, setloadMore] = useState(4);
    const handleLoad = () => {
        setloadMore(loadMore + 4)
    };

    const [Search, setSearch] = useState()
    console.log(Search)

    const { data: dataPlan, loading, refetch } = useQuery(getData, {
        variables: {
            id_user: id
        }
    })

    const [Item, setItem] = useState();
    console.log(Item)

    const { data: dataSearch } = useQuery(searchDestinasi, {
        variables: {
            id_user: id,
            namaDestinasi: Search
        }
    })

    const handleSearch = () => {
        if (Search) {
            setItem(dataSearch)
            
        } else {
            setItem(dataPlan)
            
        }
    };

    useEffect(()=>{
        if (Search) {
            setItem(dataSearch)
        } else {
            setItem(dataPlan)
        }
        refetch()
        
    ,[loading]})
    
    const imgsrc = `https://picsum.photos/id/`
    const imgsize = '/600/400'
    

    const [deletePlans] = useMutation (deletePlan)
    const handleDelete = (idPlan) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			deletePlans({
				variables: {
					idPlan,
				}
			})
		}
	};

    const [doned] = useMutation (done)
    const handleDone = (idPlan) => {
		if (window.confirm("Apakah Anda yakin sudah mengunjungi ini?")) {
			doned({
				variables: {
					idPlan,
				}
			})
		}
	};

    return (

        <div>
            <Navbar
                id={id}
            />
            <Hero
                id={id}
            />
            <ModalCreate
                id={id}
                dataPlan={dataPlan}
                insertPlans={insertPlans}
                dataInsert={dataInsert}
                
            />

            <div className="container-fluid"
                style={{ backgroundColor: "#ECEBFF" }}    
            >
                <div className="container text-center">
                <h2 className="pt-5 fw-bold "
                    style={{ color: "#EF5B00" }}
                >
                    Travel Plan List  </h2>
                <p>
                    Travel planner terbaik untuk perjalanan Anda.<br/>
                    Rencanakan liburan yang luar biasa bersama kami
                    dan nikmati pengalaman tak terlupakan.
                </p>
                <div className="row gap-0 ">
                    <div className="col-10 mb-3 pt-3 ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Masukan nama product yang dicari"
                            aria-describedby="button-search"
                            value={Search}
                            onChange={(e) => setSearch(e.target.value)}
                            id="search"
                            name="search"
                        />
                    </div>
                    <div className="col-2 pt-3">
                        <button
                            className="btn btn-outline-secondary px-5"
                            type="button"
                            id="button-search"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                </div>
                <div className="row">

                    {Item?.plan.slice(0, loadMore).map((item, idx) => (
                        <div key={idx} className="col-md-3 mb-3" >
                            <div className="card"
                                
                            >
                                <img
                                    src={imgsrc+(idx+10)+imgsize}
                                    className="card-img-top"
                                    alt={item.namaDestinasi}
                                />
                                <div className="card-body">
                                    <h5>{item.namaDestinasi}</h5>
                                    <p>{item.catatan}</p>
                                    <button className="btn btn-outline-primary me-1">
                                        <Link
                                            to={`/detail/${item.idPlan}`}
                                            className="text-decoration-none">
                                            Detail
                                        </Link>
                                    </button>
                                    <button className="btn btn-outline-warning me-1">
                                        <Link
                                            to={`/edit/${item.idPlan}`}
                                            className="text-decoration-none">
                                            Edit
                                        </Link>
                                    </button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDelete(item.idPlan)}>
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => handleDone(item.idPlan)}>
                                        DONE
                                    </button>
                                </div>
                            </div>

                        

                        </div>

                    ))}
                    <div>
                        {Item?.plan.length > loadMore && (
                            <button
                                className="btn btn-outline-primary me-1 my-3"
                                onClick={handleLoad}
                            >
                                Load More
                            </button>
                        )}
                    </div>
                </div>
                </div>
            </div>
            <hr></hr>

            <Footer />
        </div>
    )

}

export default LandingPageLogin
