import React from 'react'
import ASSET_PATHS from '../../../utils/constants'
import './Header.css';

export default function Header() {

    const imgUrl = ASSET_PATHS.IMG_URL
    const iconUrl = ASSET_PATHS.ICON_URL

    return (
        <>
            <div className='header'>
                <div className='mini-header'>

                    <div className='left'>
    
                        <span className='heading'>MEGAPORT HOTLINE</span>
                        <span className='phone'>02 49 88 06 17</span>

                    </div>
                    <div className='right'>
                        <span className='pay'>Pays</span>
                        <span className='country'>France</span>
                    </div>

                </div>


                <div className='nav-bar'>

                    <div className='logo'> <img src={`${imgUrl}/logo.png`} /> </div>

                    <div className='links'>
                        <ul>
                            <li>PC-Gamer</li>
                            <li>Configurature PC</li>
                            <li>Ordinature de bureaue</li>
                            <li>PC Editions speciales</li>
                            <li>Accessories PC</li>
                            <li>Reductions <span><img src='' /></span></li>
                            <li>Promo <span><img src='' /></span></li>
                        </ul>
                    </div>


                    <div className='buttons'>
                        <div className='search-icon'>
                            <svg aria-label="search" ><path fill="#89c600" d="M7.18 5.92a.96.96 0 00-1.36 0 6.57 6.57 0 00-1.88 5.32.96.96 0 00.96.86H5a.96.96 0 00.86-1.05 4.65 4.65 0 011.32-3.77.96.96 0 000-1.36z"></path><path fill="#89c600" d="M10.98 0a10.98 10.98 0 1010.99 10.98A11 11 0 0010.98 0zm0 20.04a9.06 9.06 0 119.06-9.06 9.07 9.07 0 01-9.06 9.06z"></path><path fill="#89c600" d="M25.72 24.36l-6.98-6.98a.96.96 0 00-1.36 1.36l6.98 6.98a.96.96 0 001.36-1.36z"></path></svg>
                        </div>
                        <div className='user-icon'>
                            <svg><path fill="#89c600" d="M18.74 13.18a1 1 0 10-1.4 1.42A8.94 8.94 0 0120 21c0 1.22-3.5 3-9 3s-9-1.78-9-3a8.94 8.94 0 012.63-6.36 1 1 0 10-1.4-1.42A10.93 10.93 0 000 21c0 3.25 5.67 5 11 5s11-1.75 11-5a10.92 10.92 0 00-3.26-7.82z"></path><path fill="#89c600" d="M11 14a7 7 0 10-7-7 7 7 0 007 7zm0-12a5 5 0 11-5 5 5 5 0 015-5z"></path></svg>
                        </div>
                        <div className='cart-icon'>
                            <svg><path fill="#89c600" d="M0 0v1.8h3.71l2.54 15.24v2.77a2.7 2.7 0 00-1.78 2.51A2.69 2.69 0 007.15 25a2.69 2.69 0 002.67-2.67 2.63 2.63 0 00-.16-.9h8.37a2.61 2.61 0 00-.17.9A2.7 2.7 0 0020.54 25a2.69 2.69 0 002.68-2.67 2.63 2.63 0 00-.17-.9H25v-1.79H8.04v-1.78h12.5a.9.9 0 00.84-.61l3.57-10.72a.9.9 0 00-.84-1.17h-8.04v1.78h6.8l-2.98 8.93H7.9L6.41 7.14H19.5V5.36H6.12L5.34.74A.9.9 0 004.47 0zm7.14 21.43a.88.88 0 01.9.9.88.88 0 01-.9.9.88.88 0 01-.9-.9.89.89 0 01.9-.9zm13.4 0a.88.88 0 01.89.9.88.88 0 01-.9.9.88.88 0 01-.9-.9.89.89 0 01.9-.9z"></path></svg>
                        </div>
                    </div>



                </div>



            </div>
        </>
    )
}
