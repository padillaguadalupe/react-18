import React, { useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { cleardata, fetchService, removeItem } from "../../api/api-service";
import { uriConstants } from "../../utils/uri-constants";
import './Users.css';

const Users = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { users } = useSelector(({data}) => data);  
   

   useEffect(() => {
      dispatch(fetchService(uriConstants().users));
   }, [dispatch])
   const goToUser = id => {
           navigate(`${id}`);
   }

   return (
   <>
      {
        <div className="text-center mb-2">
         {
           users.length !== 0 && <button className="btn btn-success" onClick={() => dispatch(cleardata())}>Limpiar</button>  
         }
         {
            users.length === 0 && <button className="btn btn-success" onClick={() => dispatch(fetchService(uriConstants().users))}>Listar</button>
         }
        </div>
      }

    <div className="users">
       {
         users.map(user => (
           <div className="card" style={{width: '18rem'}} key={user.id}>
               <div className="card-body">
               <h5 className="card-title">{user.username}</h5>
               <p className="card-text"> {user.name}</p>
               <div className="d-flex justify-content-around">
                     <button className="btn btn-info text-white" onClick={()=> goToUser(user.id)}>Ver usuario</button>
                     <button className="btn btn-danger" onClick={() => dispatch(removeItem(user.id))}>Eliminar</button>
               </div>
            </div>
         </div> 
          ))
       }
    </div>
   </>  
   )
} 
export default Users;