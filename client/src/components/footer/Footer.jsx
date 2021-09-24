import React from 'react'
import PexelsLogo from '../pexels-logo/PexelsLogo'

import siiimpleLogo from '../../assets/images/siiimple-logo@2x.png'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <section className="footer-container__about">
                    <h4>Sobre</h4>
                    <p>
                        Siiimple Photo Gallery é um projeto pessoal para estudo de React e NodeJS.<br />
                        O layout é baseado no site <a href="https://siiimple.com/">siiimple.com</a> e as 
                        fotos são buscadas utilizando a API do site <a href="https://www.pexels.com/">pexels.com</a>
                    </p>
                </section>
                <section className="footer-container__sites-icons">
                    <ul className="footer-container__sites-icons__list">
                        <li>
                            <a href="https://siiimple.com">
                                <img src={siiimpleLogo} alt="siiimple.com" />
                            </a>
                        </li>
                        <li>
                            <a href="https://pexels.com">
                                <PexelsLogo width="32" height="32" />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer-copyright">
                <p>Siiimple Photo Gallery &copy; 2021</p>
                <p className="footer-copyright__legal">As imagens são propriedade de seus respectivos donos.</p>
            </div>
        </footer>
    )
}

export default Footer
