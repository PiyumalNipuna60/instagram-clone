import React, { Component } from 'react'
import './Header.css';
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
        <div className='header'>
        <div className='header__left'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png'
            alt='logo'
          />
          <div className='header__input'>
            <SearchIcon />
             <input type='text'
             placeholder='Search facebook' 
             className='header__input__text'
             />
          </div>
        </div>

        <div className='header__middle'>
          <div className='header__options'>
            <HomeIcon fontSize='large'/>
          </div>
          <div className='header__options'>
            <FlagIcon fontSize='large'/>
          </div>
          <div className='header__options'>
            <SubscriptionsOutlinedIcon fontSize='large'/>
          </div>
          <div className='header__options'>
            <StorefrontOutlinedIcon fontSize='large'/>
          </div>
          <div className='header__options'>
            <SupervisorAccountIcon fontSize='large'/>
          </div>
        </div>

        <div className='header__right'>
          <div className='header__info'>
            <Avatar />
            <h4>Username</h4>
          </div>
          <IconButton>
              <AddIcon />
          </IconButton>
          <IconButton>
              <ForumIcon />
          </IconButton>
          <IconButton>
              <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
              <ArrowDropDownOutlinedIcon />
          </IconButton>

       
        </div>
    </div>
    )
  }
}
