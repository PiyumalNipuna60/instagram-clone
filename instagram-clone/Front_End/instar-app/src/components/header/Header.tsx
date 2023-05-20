import React, { Component } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default class Header extends Component {
  render() {
    return (
      <div className="header pt-10">
        <div className="header__left w-1/6  border-r-2 border-gray-400">
          <h2 className="italic hover:not-italic">Instagram</h2>

          <div className="header__middle">
            <div className="header__options flex hover:bg-gray-100 rounded-md mt-16 mb-3 mr-2 h-12 items-center">
              <HomeIcon fontSize="large" className='hover:w-9 hover:h-9' />
              <h6 className='items-center text-center m-2 text-base'>Home</h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center">
              <SearchIcon fontSize="large" className='hover:w-9 hover:h-9'/>
              <h6 className='items-center text-center m-2 text-base'>Search</h6>
            </div>
          </div>
        </div>

        <div className="header__right bg-red-600 absolute right-0 top-0 mt-10 w-1/3">
          <div className="header__options">
            <HomeIcon fontSize="large"/>
          </div>
          <div className="header__options">
            <SearchIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  }
}
