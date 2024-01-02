import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <header class="header" id="header">
    <nav class="nav container">
        <NavLink to="#" class="nav__logo">Rohit</NavLink>

        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list grid">

                <li class="nav__item">
                    <NavLink href="" class="nav__link active-link highlight">
                        <i class="ri-home-5-line"></i> Home
                    </NavLink>
                </li>

                <li class="nav__item">
                    <NavLink to="Skills" class="nav__link highlight">
                        <i class="ri-trophy-line"></i> Skills
                    </NavLink>
                </li>

                <li class="nav__item">
                    <NavLink to="Services" class="nav__link highlight">
                        <i class="ri-briefcase-line"></i> Services
                    </NavLink>
                </li>

                <li class="nav__item">
                    <NavLink to="Project" class="nav__link highlight">
                        <i class="ri-image-line"></i> Projects
                    </NavLink>
                </li>

                <li class="nav__item">
                    <NavLink to="Contact" class="nav__link highlight">
                        <i class="ri-chat-3-line"></i>Contact
                    </NavLink>
                </li>

            </ul>

            {/* <!-- close button --> */}
            <div class="nav__close" id="nav-close">
                <i class="ri-close-line"></i>
            </div>
        </div>

        <div class="nav__buttons">
            {/* <!-- Theme change button --> */}
            <i class="ri-moon-line change-theme" id="theme-button"></i>

            {/* <!-- Toggle button --> */}
            <div class="nav__toggle" id="nav-toggle">
                <i class="ri-menu-4-line"></i>
            </div>
        </div>

    </nav>
</header>
  )
}

export default Header