import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardAction } from "../../redux/actions/actions";

const Cards = () => {
   const dispatch = useDispatch();
   const { cards } = useSelector(({rootReducer}) => rootReducer);
   const removeCard = card => {
      console.log(card);
      dispatch(cardAction(card.id));
   }
   return (

      <div className="d-flex justify content-center">
         {
            cards.map(card => (
            <div className="d-flex justify-content-center" key={card.id}>
               <div className="card" style={{width: '18rem'}}>
                  <div className="card-body">
                     <h5 className="card-title">{card.title}</h5>
                     <p className="card-text"> {card.content}</p>
                     <button className="btn btn-danger" onClick={() => removeCard(card)}>Eliminar</button>
                  </div>
               </div>
            </div>

            )) 

            
         }
      </div>
   
   )
} 
export default Cards;