import React from 'react'

function Services() {
    console.log("click");
  return (
    // <!--==================== SERVICES ====================-->
        <section class="services section" id="services">
            <h2 class="section__title">Services</h2>
            <span class="section__subtitle">What i offer</span>

            <div class="services__container container grid secytion__border">

                <div class="services__card">
                    <i class="ri-layout-4-line"></i>

                    <h2 class="services__title">
                        UI/UX <br/>
                        Designer
                    </h2>

                    <p class="services__description">
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>

                    <div class="services__border"></div>
                </div>

                <div class="services__card">
                    <i class="ri-code-line"></i>

                    <h2 class="services__title">
                        Website <br/>
                        Design
                    </h2>

                    <p class="services__description">
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>

                    <div class="services__border"></div>
                </div>

                <div class="services__card">
                    <i class="ri-quill-pen-line"></i>

                    <h2 class="services__title">
                        Responsive <br/>
                        Web design
                    </h2>

                    <p class="services__description">
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>

                    <div class="services__border"></div>
                </div>
            </div>
        </section>
  )
}

export default Services