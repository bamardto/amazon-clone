import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const Header = () => {
  return (
    <div className='header__container'>
        <img className="header__logo" src="logo-white.png" alt="" />
        <div 
            className="header__search">
            <input
                className='input__header-search'
                type="text" />
            <SearchIcon 
                className="search__icon"/>
        </div>
        <div 
            className="header__nav">
            <div 
                className="header__nav-option">
                <span className='nav__option-firstline'>Hello Guest</span>
                <span className='nav__option-secondline'>Sign in</span>
            </div>
            <div className="header__nav-option">
                <span className='nav__option-firstline'>Returns</span>
                <span className='nav__option-secondline'>& Orders</span>

            </div>
            <div className="header__nav-option">
                <span className='nav__option-firstline'>Your</span>
                <span className='nav__option-secondline'>Prime</span>

            </div>
            <div className="header__nav-optionBasket">
                <ShoppingBasketIcon 
                    className="basket__icon"/>
                <span className="basket__count">0</span>
            </div>
        </div>
    </div>
  )
}
