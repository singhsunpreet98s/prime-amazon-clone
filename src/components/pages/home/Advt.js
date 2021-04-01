import React, { useState } from 'react';
import './advt.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const data = [
   {
      img: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WomensDaySH2021/28fcf90e-6c0c-45cc-a510-02766a0ddbf3._UR3000,600_SX1500_FMwebp_.jpg',

   }, {
      img: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_IamYourWomanLaunch/fc15d680-5d89-4210-b0fd-266986e20eac._UR3000,600_SX1500_FMwebp_.jpg'
   }
]
export default function Advt() {
   const [currentImg, setCurrrentImg] = useState(0)
   const next = () => {
      (currentImg === data.length - 1) ? setCurrrentImg(0) : setCurrrentImg(currentImg + 1)
   }
   const prev = () => {
      (currentImg === 0) ? setCurrrentImg(data.length - 1) : setCurrrentImg(currentImg - 1)
   }

   return (
      <div className="advtCont">
         <ArrowBackIosIcon
            onClick={next}
            fontSize="large" style={{ color: 'white', fontSize: 40, position: 'absolute', left: 10, top: '42%', cursor: 'pointer' }} />
         <ArrowForwardIosIcon
            onClick={prev}
            fontSize="large" style={{ color: 'white', fontSize: 40, position: 'absolute', right: 10, top: '42%', cursor: 'pointer' }} />

         {
            data.map((item, index) => {
               return (index === currentImg) && <img src={data[index].img} style={{ maxWidth: 1300 }} />
            })
         }
      </div>
   )
}
