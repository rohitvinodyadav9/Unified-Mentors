import React from 'react'

function Hero() {
  return (
    <div>
        <section class="home section" id="home">
            <div class="home__container container grid section__border">

                <div class="home__data grid">
                    <h1 class="home__title">
                        Hi, I'm Rohit <br/>
                        Frontend Developer <br/>
                    </h1>

                    <div class="home__blob grid">

                        <div class="home__perfil">
                            <img src="https://images.pexels.com/photos/3201588/pexels-photo-3201588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="my-avatar" alt="home perfil"/>
                        </div>
                        <img src="./assets/img/shape-wawes.svg" alt="" class="home__shape-wawes"/>
                        <img src="./assets/img/shape-circle.svg" alt="" class="home__shape-circle"/>
                    </div>

                    <ul class="home__social">
                        <a href="https://www.linkedin.com/in/rohitvinodyadav" target="_blank" class="home__social-link">
                            <i class="ri-linkedin-fill"></i>
                        </a>

                        <a href="https://github.com/rohitvinodyadav9" target="_blank" class="home__social-link ">
                            <i class="ri-github-line"></i>
                        </a>

                        <a href="https://twitter.com/rohitvinodyadav" target="_blank" class="home__social-link">
                            <i class="ri-twitter-line"></i>
                        </a>

                        
                    </ul>
                </div>

                {/* <!--==================== HOME INFO 1 ====================--> */}
                <div class="home__info">
                    <div>
                        <h3 class="home__info-title">BIOGRAPHY</h3>
                        <p class="home__info-description">
                            I'm Rohit Yadav, an upcoming web developer.
                            Some of my works available on frontend mentor. I enjoy
                            turning complex problems into simple, beautiful and intuitive
                            designs.
                        </p>
                    </div>

                    <div>
                        <h3 class="home__info-title">Some more About me...</h3>
                        <p class="home__info-description">
                            I enjoy creating things that live
                            on the internet.I'm passionate about designing beautiful web
                            interfaces.
                        </p>
                    </div>
                </div>

                {/* <!--==================== HOME INFO 2 ====================--> */}
                <div class="home__info">
                    <div>
                        <h3 class="home__info-title">CONTACT</h3>
                        <p class="home__info-description">
                            Prayagraj, U.P. <br/>
                            rohitvinodyadav9@gmail.com <br/>
                            +91 9936184992 <br/>
                        </p>
                    </div>

                    <div>
                        <h3 class="home__info-title">SERVICES</h3>
                        <p class="home__info-description">
                            Website Design <br/>
                            React Dev <br/>
                            Responsive design <br/>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    </div>
  )
}

export default Hero