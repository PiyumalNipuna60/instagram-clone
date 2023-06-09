import React, { Component } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';


export default class Header extends Component {
  render() {
    return (
      <div className="header pt-10">
        <div className="header__left w-1/6 fixed border-r-2 border-gray-400">
          <h2 className="italic hover:not-italic">Instagram</h2>

          <div className="header__middle ">
            <div className="header__options flex hover:bg-gray-100 rounded-md mt-16 mb-3 mr-2 h-12 items-center cursor-pointer">
              <HomeIcon fontSize="large" className="hover:w-9 hover:h-9" />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Home
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <SearchIcon fontSize="large" className="hover:w-9 hover:h-9" />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Search
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <ExploreOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Explore
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <VideoLibraryOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Reels
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <MessageOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Massages
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <FavoriteBorderOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Notification
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <AddBoxOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Create
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-3 mr-2 h-12 items-center cursor-pointer">
              <AccountCircleOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                Profile
              </h6>
            </div>

            <div className="header__options flex hover:bg-gray-100 rounded-md mt-52 mr-2 h-12 items-center cursor-pointer">
              <ReadMoreOutlinedIcon
                fontSize="large"
                className="hover:w-9 hover:h-9"
              />
              <h6 className="items-center text-center m-2 text-base/4 font-normal">
                More
              </h6>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
