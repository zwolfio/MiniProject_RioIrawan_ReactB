import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getData, searchDestinasi } from "../config/apollo/gqlClient";


const TravelList = () => {


    const [dataPlans, setdataPlans] = useState(false)
    const [loadMore, setloadMore] = useState(4);
    const handleLoad = () => {
        setloadMore(loadMore + 4)
    };

    const [Search, setSearch] = useState()
    console.log(Search)

    const { id } = useParams()
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

    const [nothingSearch, setnothingSearch] = useState('')

    const handleSearch = () => {
        if (Search) {
            setItem(dataSearch.plan)
            if(Search==Item[0].namaDestinasi){
                setnothingSearch('Item yang dicari Ditemukan!')
            }else {
                setnothingSearch('Item yang dicari tidak ada')
            }
        } else {
            setItem(dataPlan.plan)
            
        }
    };
    const temp = () => {

        if (dataPlans == false && loading == false) {
            setdataPlans(true)
            setItem(dataPlan.plan)
        }
    }
    temp();
    const imgsrc = `https://picsum.photos/id/`
    const imgsize = '/600/400'
    return (
        <div>
            <Navbar
                id={id}
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
                        Travel planner terbaik untuk perjalanan Anda.<br />
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
                        <h3>{nothingSearch}</h3>
                    </div>
                    <div className="row">

                        {Item?.slice(0, loadMore).map((item, idx) => (
                            <div key={idx} className="col-md-3 mb-3" >
                                <div className="card"

                                >
                                    <img
                                        src={imgsrc + (idx + 10) + imgsize}
                                        className="card-img-top"
                                        alt={item.namaDestinasi}
                                    />
                                    <div className="card-body">
                                        <h5>{item.namaDestinasi}</h5>
                                        <p>{item.catatan}</p>
                                        
                                    </div>
                                </div>



                            </div>

                        ))}
                        <div>
                            {Item?.length > loadMore && (
                                <button
                                    className="btn btn-outline-primary me-1 mt-3"
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

export default TravelList