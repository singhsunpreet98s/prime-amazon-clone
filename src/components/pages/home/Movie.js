import React, { useState } from 'react'
import './movie.css';
import { Link } from 'react-router-dom';
export default function Movie(props) {

   const [hoverA, setHover] = useState(false)
   return (
      <Link to="/props/:id/aadsad">
         <div className="movieContainer">
            <img src={props.data.img} className="tileImg" />
            <div className="tileActions">
               <div className="play">

               </div>


            </div>
         </div>
      </Link>
   )
}
