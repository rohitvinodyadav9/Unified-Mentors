import React from 'react'

function Footer() {
  return (
    // <!--==================== FOOTER ====================-->
    <footer class="footer">
        <div class="footer__container container">
            <h1 class="footer__title">Rohit</h1>
            <p>Frontend Developer</p>

            <ul class="footer__list">
                <li><a class="footer__link highlight" href="#home">Home</a></li>
                <li><a class="footer__link highlight" href="#skills">Skills</a></li>
                <li><a class="footer__link highlight" href="#services">Services</a></li>
                <li><a class="footer__link highlight" href="#projects">Projects</a></li>
                <li><a class="footer__link highlight" href="#contact">Contact</a></li>
            </ul>

            <ul class="footer__social">
                <a href="https://www.linkedin.com/in/rohitvinodyadav" target="_blank" class="footer__social-link">
                    <i class="ri-linkedin-fill"></i>
                </a>

                <a href="https://github.com/rohitvinodyadav9" target="_blank" class="footer__social-link">
                    <i class="ri-github-line"></i>
                </a>

                <a href="https://twitter.com/rohitvinodyadav" target="_blank" class="footer__social-link">
                    <i class="ri-twitter-line"></i>
                </a>

                
            </ul>

            <span class="footer__copy">
                &#169; Copyright Rohit. All rights reserved.
            </span>
        </div>
    </footer>

  )
}

export default Footer