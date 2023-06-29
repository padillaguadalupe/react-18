import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux';
import { fetchService } from "../../api/api-service";
import { uriConstants } from "../../utils/uri-constants";



const User = () => {
   const { id } = useParams();
   const { user, loading } = useSelector(({data}) => data); 
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(fetchService(uriConstants(id).user));
   }, [dispatch, id]);


   const goToUsers = () => {
      navigate ('/users');
   }
   return (
    <div className="d-flex justify-content-center">
      {
         !loading &&  user &&
          <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text"> {user.name}</p>
               <button className="btn btn-info text-white" onClick={goToUsers}>Regresar</button>
                  
          </div>
       </div>
      }
    </div> 
   
   )
} 
export default User;