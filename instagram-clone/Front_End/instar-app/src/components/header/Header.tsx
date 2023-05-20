import React, { Component } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/Subscriptions';
import StorefrontOutlinedIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton } from '@mui/material'

export default class Header extends Component {
  render() {
    return (
      <div className='header pt-10'>
        <div className='header__left w-1/3'>
          <h2 className='italic hover:not-italic'>Instagram</h2>
        </div>

        <div className='header__middle'>
          <div className='header__options'>
            <HomeIcon fontSize='large'/>
          </div>
          <div className='header__options'>
            <SearchIcon fontSize='large'/>
          </div>
         
        </div>





        <div className='header__right bg-red-600 absolute right-0 top-0 mt-10 w-1/3'>
        <div className='header__options'>
            <HomeIcon fontSize='large'/>
          </div>
          <div className='header__options'>
            <SearchIcon fontSize='large'/>
          </div>
  
        </div>
    </div>
    )
  }
}
