import React from 'react';
import Advt from './Advt';
import Movie from './Movie'
import './home.css'
import { Grid } from '@material-ui/core'
export default function Home() {
   const tilesData = [
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/870e7136c940bf80a82e74f5b6e885a7e95517b7bc2ce14de43d632ae2b24c5a._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d0393c112db0a6903d609e8c3884263598e6f050152520ee5d788f8e19d16466._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a168c10d593f02337a42180eff321190e7f56c721294d463f29560591355ab6d._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a0e10852e4545f8bf79f17acccec3de03391210b9803bf82811a4fd0bd31f6d8._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2d6533b539022b8283d8f88c5a770df28dbeba94faa99f401b17a9b8208d3e4d._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2d6533b539022b8283d8f88c5a770df28dbeba94faa99f401b17a9b8208d3e4d._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
      {
         img: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2d6533b539022b8283d8f88c5a770df28dbeba94faa99f401b17a9b8208d3e4d._UR1920,1080_RI_SX356_FMwebp_.jpg'
      },
   ];

   return (
      <div className="mainHomePageContainer">
         <Advt />
         <div style={{ justifyContent: 'center', padding: 20 }}>
            <h3 style={{ color: 'white' }}>Watch next TV and movies</h3>
            <div className="gridContainer">
               {
                  tilesData.map((item, index) => {

                     return <Movie data={item} />

                  })
               }
            </div>
         </div>
      </div>
   )
}
