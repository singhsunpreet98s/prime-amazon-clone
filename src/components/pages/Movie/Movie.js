import React from 'react';
import './movie.css';
import new1 from '../../images/blah.mp4';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
export default function Movie(props) {
   console.log(props)
   return (
      <div className="moviePage"  >
         <div className="movieTrailer">
            <div style={{}}>
               <video width="100%" height="100%" autoplay="true" muted >
                  <source src={new1} />
               </video>
            </div>
         </div>

         <div className="movieDesc">
            <h1 className="movieTitle  ">
               Joker
            </h1>
            <div className="rating">
               IMDb
               8.4
               2 h 1 min
               2019
               <span>X-Ray</span>
               <span>18+</span>

            </div>
            <div className="btns">
               <Link to="/player" className="playBtn"><span><PlayArrowIcon style={{ fontSize: '45px' }} /></span><p>Play</p></Link>
               <button className="addBtn"><AddIcon /></button>
               <button className="addBtn"><SaveAltIcon /></button>
            </div>
            <p className="description">
               Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides an alternative origin story for the character. Set in 1981, it follows Arthur Fleck, a failed clown and stand-up comedian whose descent into insanity and nihilism inspires a violent counter-cultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Glenn Fleshler, Bill.
            </p>
            <div className="cast">
               <table>
                  <tbody>
                     <tr>
                        <td>Directors</td>
                        <td>Todd Phillips</td>
                     </tr>
                     <tr>
                        <td>Starring</td>
                        <td>Joaquin Phoenix, Robert De Niro, Zazie Beetz</td>
                     </tr>
                     <tr>
                        <td>Genres</td>
                        <td>Drama</td>
                     </tr>
                     <tr>
                        <td>Subtitles</td>
                        <td>English [CC]
                        ,
                        தமிழ்
                        ,

                     more…</td>
                     </tr>
                  </tbody>
               </table>






            </div>
         </div>
      </div>
   )
}
