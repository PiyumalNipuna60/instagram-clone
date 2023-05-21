import React, { Component } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Post from '../../components/post';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="">
           <div className='header__right absolute left-1/3 top-0  mt-10 w-1/4'>
              <Post />
              <Post />
              <Post />
              <Post />
           </div>
        </div>




        <div className="header__right absolute right-0 top-0 mt-10 w-1/3 pl-5">
          <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
            <div className='rounded-full w-12 h-12 bg-red-300'>
               
            </div>
            <h6 className="items-center text-center m-2 text-base/4 font-normal">
              Piyumal Nipuna
            </h6>
          </div>

          <h5 className='mt-5'>Suggested for you</h5>

          <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="hover:w-9 hover:h-9"
            />
            <h6 className="items-center text-center m-2 text-base/4 font-normal">
              look_hub
            </h6>
          </div>

          <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="hover:w-9 hover:h-9"
            />
            <h6 className="items-center text-center m-2 text-base/4 font-normal">
              acpt_lk
            </h6>
          </div>

          <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="hover:w-9 hover:h-9"
            />
            <h6 className="items-center text-center m-2 text-base/4 font-normal">
              miusoft_games
            </h6>
          </div>

          <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="hover:w-9 hover:h-9"
            />
            <h6 className="items-center text-center m-2 text-base/4 font-normal">
              tailwin_css
            </h6>
          </div>

          <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="hover:w-9 hover:h-9"
            />
            <h6 className="items-center text-center m-2 text-base/4 font-normal">
              React_js
            </h6>
          </div>
        </div>
      </div>
    )
  }
}
