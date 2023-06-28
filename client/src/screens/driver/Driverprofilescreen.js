import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap'


export default function Driverprofilescreen() {


    const dispatch = useDispatch()

    const userstate = useSelector(state => state.driverloginReducer)
    const { currentDriver } = userstate


    





    return (
        <div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <h9 style={{ fontSize: '35px' }}>Driver Dashboard</h9>
            <br />




            <div className='row justify-content-center'>

                <div className='col-md-8 m-2 p-1 shadow p-3 mb-5 bg-white' style={{ backgroundColor: 'red', color: 'black', borderRadius: '15px' }}>

                    <img src='https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' style={{ height: '150px', height: '150px' }} />



                    <div>
                        <h2 style={{ fontSize: '30px' }}>{currentDriver.name} <i className="fa fa-edit" style={{ fontSize: '15px' }} type="button" data-bs-toggle="modal" data-bs-target="#updatename" data-bs-whatever="@mdo" ></i></h2>
                        <p>{currentDriver.email} <i className="fa fa-edit" style={{ fontSize: '13px' }} type="button" data-bs-toggle="modal" data-bs-target="#updateemail" data-bs-whatever="@mdo" ></i></p>

                    </div>

                    <p>

                        {/* <a data-bs-toggle ="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a> */}

                        <button className="btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Notifications <i class="fas fa-bell"></i>
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Welcome Back ! {currentDriver.email}
                        </div>
                    </div>
                </div>



            </div>

            <div className='row justify-content-center '>


                <div class="card col-md-4 m-4 shadow p-3 mb-5 bg-white" style={{ width: '43rem', borderRadius: '15px' }}>
                    <img src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=996&t=st=1674130196~exp=1674130796~hmac=b0d619d09a46b26135879a1cecba166a0b898b569479d7ad14c0d98857daacdb" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Delivery Requests</h4>
                        <p class="card-text"><br></br>
                        </p>
                        
                        <br />
                        <a href="/admin/selectionUC" class="btn">See More</a>
                    </div>
                </div>

                <div class="card col-md-4 m-4 shadow p-3 mb-5 bg-white " style={{ width: '43rem', borderRadius: '15px' }}>
                    <img src="https://img.freepik.com/free-vector/young-investors-working-profit-dividend-revenue_74855-6143.jpg?t=st=1681902631~exp=1681903231~hmac=ff038c5a2ece04f3025e7ced5e3faf1b93cfecbba285ce3aefcc461f94725cf9" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <br/>
                
                        <h4 class="card-title">Your Earnings</h4>
                        <p class="card-text">
                        </p>
                        
                        <br />
                        
                        <br/>
                        <a href="#" class="btn">See More</a>
                    </div>
                </div>

                <div class="card col-md-3 m-3 shadow p-4 mb-6 bg-white " style={{ width: '41rem', borderRadius: '200px', height:'40rem', backgroundColor:'#FAD02C'}}>
                    <a href="#">
                    <img src="https://www.pngall.com/wp-content/uploads/12/Delivery-Scooter-PNG-Images.png" class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h4 class="card-title">Delivery Reports</h4>
                        <p class="card-text"></p>
                        

                        <a href="#" class="btn">See More</a>

                    </div>
                </div>

                
                    
                </div>
            </div>
        



    )
}