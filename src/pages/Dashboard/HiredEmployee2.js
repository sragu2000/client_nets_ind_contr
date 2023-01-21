import React from "react";
import Chapters from "../../data/Chapters.json"
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import swal from 'sweetalert'
import "../../App.css"
const HiredEmployee2 = () => {
    const [reqButtText, setReqButtText] = React.useState("Request Final Project Assignment");
    const reqproj = ()=>{
        swal("Good job!", "Project Assignment Request sent to your Supervisor", "success");
        setReqButtText("Requested | Project assignment in pending");
        
    }
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container">
                <div class="card mt-5">
                    <nav>
                        <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My Chapters</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Request Additional Chapters</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Guidance Ticket Request</button>
                        </div>
                    </nav>
                    <div class="tab-content p-3 border bg-light" id="nav-tabContent">
                        <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            {
                                Chapters.map((item) => {
                                    return (
                                        (item.department === "IT")
                                            ?
                                            (item.chapters).map((chapter) => {
                                                return (
                                                    <Link className="btn btn-outline-success form-control m-2">
                                                        {chapter + "  "}
                                                        <i class="bi bi-check-circle-fill"></i>
                                                    </Link>
                                                )
                                            })
                                            :
                                            null
                                    )
                                })
                            }
                            <button className={(reqButtText==="Request Final Project Assignment")?"button btn border border-dark form-control m-2 btn-warning":"btn form-control m-2 btn-outline-warning"} onClick={reqproj}>
                                {reqButtText}
                            </button>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            {
                                Chapters.map((item) => {
                                    return (
                                        (item.department !== "IT")
                                            ?
                                            (item.chapters).map((chapter) => {
                                                return (
                                                    <div className="row m-2">
                                                        <div className="col-md-6">
                                                            <div className="form-control">{chapter}</div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-control">
                                                                {"From " + item.department + " Department"}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <Link className="btn btn-outline-primary form-control">Enroll</Link>
                                                        </div>

                                                    </div>

                                                )
                                            })
                                            :
                                            null
                                    )
                                })
                            }
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <h5>Guidance Request Ticket Component Here...</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default HiredEmployee2;