import React from 'react'
import ASSET_PATHS from '../../../utils/constants'
import './Footer.css';

export default function Footer() {
    const imgUrl = ASSET_PATHS.IMG_URL
    const iconUrl = ASSET_PATHS.ICON_URL


    return (
        <>
            <div className='footer'>
                <div className='subscribe'>
                    <div className='img'>
                        <img src={`${imgUrl}/newsletter_bg.jpg`} />
                    </div>
                    <div className='newsletter'>
                        <h1>Abonnez-vous à la newsletter</h1>
                        <p>Restez informé de nos nouveautés et des promotions en cours avec la newsletter Megaport.</p>
                        <form className='form'>
                            <input placeholder='Votre adresse électronique' type='email' />
                            <button>Inscription</button>
                        </form>

                    </div>


                </div>

                <div className='footer-links'>
                    <div className='links'>
                        <h4>Notre Boutique</h4>
                        <ul>
                            <li>PC Gamer</li>
                            <li>PC Premium Gamer</li>
                            <li>Packs PC tout en un</li>
                            <li>Promotions</li>
                            <li>Offres</li>
                        </ul>
                    </div>
                    <div className='links'>
                        <h4>Notre Boutique</h4>
                        <ul>
                            <li>PC Gamer</li>
                            <li>PC Premium Gamer</li>
                            <li>Packs PC tout en un</li>
                            <li>Promotions</li>
                            <li>Offres</li>
                        </ul>
                    </div>
                    <div className='links'>
                        <h4>Notre Boutique</h4>
                        <ul>
                            <li>PC Gamer</li>
                            <li>PC Premium Gamer</li>
                            <li>Packs PC tout en un</li>
                            <li>Promotions</li>
                            <li>Offres</li>
                        </ul>
                    </div>

                    <div className='links'>
                        <h4>Notre Boutique</h4>
                        <ul>
                            <li>PC Gamer</li>
                            <li>PC Premium Gamer</li>
                            <li>Packs PC tout en un</li>
                            <li>Promotions</li>
                            <li>Offres</li>
                        </ul>
                    </div>

                    <div className='details'>
                        <h4>MEGAPORT Hotline</h4>
                        <h1>02 49 88 06 17</h1>
                        <p>Nos conseillers sont à votre écoute au 02 49 88 06 17 (tarif local) du lundi au vendredi, entre 8h–16h.</p>
                    </div>



                </div>

                <div className='footer-copywrite'>
                    <div className='left'>
                        <h4>Méthodes de paiement</h4>
                        <ul>
                            <li><img src={`${iconUrl}/icon-visa.svg`} /></li>
                            <li><img src={`${iconUrl}/icon-mastercard.svg`} /></li>
                            <li><img src={`${iconUrl}/icon-paypal.svg`} /></li>
                            <li><img src={`${imgUrl}/icon-amazon.png`} /></li>
                        </ul>
                    </div>

                    <div className='right'>
                        <ul>
                            <li><svg role="img" aria-label="Facebook logo"><path fill="#97d707" d="M16 0a15.88 15.88 0 1016 15.88A15.96 15.96 0 0016 0zm3.98 16.43h-2.6v9.21h-3.85v-9.2h-1.84v-3.26h1.83v-2.1a3.6 3.6 0 013.9-3.86h2.85v3.17H18.2a.78.78 0 00-.82.88v1.91h2.94z"></path></svg></li>
                            <li><svg role="img" aria-label="Instagram logo"><path fill="#97d707" d="M16 31.74A15.95 15.95 0 010 15.88a16 16 0 1116 15.86zm9.1-17.72v-3.68a3.5 3.5 0 00-3.51-3.5H10.42a3.51 3.51 0 00-3.52 3.5v11.08a3.51 3.51 0 003.52 3.48H21.6a3.5 3.5 0 003.51-3.48zm-3.51 9.12H10.42a1.74 1.74 0 01-1.74-1.72v-7.4h2.72a4.79 4.79 0 00-.37 1.85 4.98 4.98 0 109.59-1.85h2.71v7.4a1.74 1.74 0 01-1.74 1.72zM19.9 8.94h2.69l.4-.01v3.06h-3.08zM16 19.05a3.18 3.18 0 110-6.36 3.24 3.24 0 012.6 1.32 3.17 3.17 0 01.6 1.85 3.2 3.2 0 01-3.2 3.19z"></path></svg></li>
                            <li><svg role="img" aria-label="YouTube logo"><path fill="#97d707" d="M14 19l5.2-3-5.2-3zm0 0"></path><path fill="#97d707" d="M16 0a16 16 0 1016 16A16 16 0 0016 0zm10 16.02a26.4 26.4 0 01-.41 4.8 2.5 2.5 0 01-1.76 1.77C22.26 23 16 23 16 23s-6.24 0-7.82-.43a2.5 2.5 0 01-1.77-1.76A26.3 26.3 0 016 16a26.39 26.39 0 01.41-4.8 2.56 2.56 0 011.77-1.8C9.74 9 16 9 16 9s6.26 0 7.82.43a2.5 2.5 0 011.77 1.76 25.06 25.06 0 01.41 4.83zm0 0"></path></svg></li>
                        </ul>
                        <h4>*Tous les prix comprennent la TVA et les frais d'expédition. Copyright © Megaport GmbH
                        </h4>
                    </div>

                </div>


            </div>

        </>
    )
}
