/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';



export default class Post extends Component {
  render() {
    return (
      <div className=' w-full rounded-2xl mt-2'>
            <div className='flex my-3 mr-3'>
                <img src='https://i.pinimg.com/236x/a9/e3/fb/a9e3fbdcc2c6c0203d5d01b2d4cabf87.jpg' className='w-10 h-10 rounded-full'/>
                <div className='m-2 hover:opacity-25'>Piyumal Nipuna</div>
            <MoreHorizOutlinedIcon className='absolute  right-0 hover:opacity-25 m-2'/>
            </div>
            <img src='https://i.pinimg.com/236x/de/18/a3/de18a31814e1f0b75a95b23988a83ec5.jpg' className='w-full'/>
            <div className=' space-x-5 h-16 items-center pt-7'>
              <FavoriteBorderOutlinedIcon className=' hover:opacity-25'/>
              <MapsUgcOutlinedIcon className=' hover:opacity-25'/>
              <RocketLaunchOutlinedIcon className=' hover:opacity-25'/>
              <BookmarkBorderOutlinedIcon className='absolute right-2 hover:opacity-25'/>
            </div>
            <input type='text' className='border-b-0' placeholder='Add a comment'/>
            <hr className='my-5 '></hr>

        
      </div>
    )
  }
}
