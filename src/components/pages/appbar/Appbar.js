import React, { useEffect, useState } from 'react';
import './Appbar.css';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
const links = [
   {
      name: 'Home',
      to: '/'
   },
   {
      name: 'Tv Shows',
      to: '/tvshows'
   },
   {
      name: 'Movies',
      to: '/movies'
   },
   {
      name: 'Kids',
      to: '/kids'
   }
]
const sr = ['big bang theory', 'avengers', 'office', 'breaking bad', 'mirzapur', 'tandav', 'big bang theory', 'avengers', 'office', 'breaking bad', 'mirzapur', 'tandav', 'big bang theory', 'avengers', 'office', 'breaking bad', 'mirzapur', 'tandav']
function Appbar() {
   const location = useLocation();
   const [path, setpath] = useState();
   const [searchq, setSearchq] = useState("");
   const [showAccDet, setShowAccDet] = useState(false)
   useEffect(() => {

      setpath(location.pathname)
   }, [])
   const handleSearch = () => {
      if (searchq.length >= 3) {
         console.log(searchq)
      }
   }
   const SearchBox = () => {
      if (searchq.length >= 4) {
         return (
            <div className="searchText" >
               {
                  sr.map((item, index) => {
                     return <div key={index} className="eachSearchTile">{item}</div>
                  })
               }
            </div >
         )
      }
      else {
         return null
      }
   }
   return (
      <div className='appbarCont'>
         <div className='logo'>
            <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video.png" alt="logo" className="img1" />
         </div>
         <div className="links">
            {
               links.map((item, index) => {
                  return (
                     <Link to={item.to} key={index} className={(path === item.to) ? "activeLink" : 'simpleLink'} onClick={() => setpath(item.to)}>{item.name}</Link>
                  )
               })
            }
         </div>
         <div className='searchCont'>
            <div style={{ display: 'flex' }}>
               <SearchIcon className="srchIcon" />
               <input type="text" className="inpSearch" placeholder="Search" value={searchq} onChange={(e) => {
                  handleSearch()
                  setSearchq(e.target.value)
               }} />
               {(searchq.length >= 1) && <CloseIcon className="srchIcon" style={{ cursor: 'pointer' }} onClick={() => setSearchq("")} />}
            </div>
            <SearchBox />
         </div>
         <div className="account">
            <div className="avatar">

            </div>
            <strong onClick={() => setShowAccDet(!showAccDet)} style={{ display: 'flex', cursor: 'pointer' }}>Sunpreet {(showAccDet) ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</strong>

         </div>
         {
            (showAccDet) ?
               <div className="accountMenu">
                  <div className="left">
                     <Link className="menuLinks" to='/watchlist'>Your watchlist</Link>
                     <Link className="menuLinks" to='/settings'>Account & Settings</Link>
                     <Link className="menuLinks" to='/anywhere'>Watch Anywhere</Link>
                     <Link className="menuLinks" to='/help'>Help</Link>
                     <p className="menuLinks">not Sunpreet? Sign Out</p>

                  </div>
                  <div className="right">
                     <Link to="/kids" className="menuLinks">
                        <div className="avatar" style={{ backgroundColor: 'orange' }}></div>
                        <strong style={{ padding: '10px 12px' }}>Kids</strong>
                     </Link>
                     <Link to="/addnewuser" className="menuLinks">
                        <div className="avatar" style={{ backgroundColor: 'gray' }}><AddIcon style={{ marginTop: '7px' }} /></div>
                        <strong style={{ padding: '10px 12px' }}>Add new</strong>
                     </Link>
                     <Link className="menuLinks" to='/profiles'>
                        Manage profiles
                     </Link>
                     <Link className="menuLinks" to='/more'>
                        Learn more
                     </Link>

                  </div>
               </div> : null
         }
      </div >
   )
}

export default Appbar
