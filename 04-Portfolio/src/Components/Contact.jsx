import React from 'react'

function Contact() {
  return (
    // <!--==================== CONTACT ====================-->
        <section class="contact section" id="contact">
            <h2 class="section__title">Contact Me</h2>
            <span class="section__subtitle">Get in touch</span>

            <div class="contact__container container grid section__border">
                <div class="contact__content">
                    <h3 class="contact__title"><i class="ri-chat-3-line"></i> Talk to me</h3>

                    <div class="contact__info">

                        <div class="contact__data">
                            <span class="contact__data-title">Email</span>
                            <span class="contact__data-info">rohitvinodyadav9@gmail.com</span>
                        </div>

                        <div class="contact__data">
                            <span class="contact__data-title">Whatsapp</span>
                            <span class="contact__data-info">+91 9936184992</span>
                            <a href="https://api.whatsapp.com/send?phone=919936184992&text=Hello" target="_blank"
                                class="contact__button">Write me <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>

                        <div class="contact__data">
                            <span class="contact__data-title">Linkedin</span>
                            <span class="contact__data-info">@rohitvinodyadav</span>
                            <a href="https://www.linkedin.com/in/rohitvinodyadav/" target="_blank"
                                class="contact__button">Write me <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div class="contact__content">
                    <h3 class="contact__title">
                        <i class="ri-send-plane-line"></i> Write me your project
                    </h3>

                    <form action="" class="contact__form" id="contact-form">

                        <div class="contact__form-div">
                            <label class="contact__form-tag">Name</label>
                            <input type="text" name="user_name" required placeholder="Write your name"
                                class="contact__form-input" id="contact-name"/>
                        </div>

                        <div class="contact__form-div">
                            <label class="contact__form-tag">Email</label>
                            <input type="email" name="user_email" required
                                placeholder="Write your email" class="contact__form-input" id="contact-email"/>
                        </div>

                        <div class="contact__form-div contact__form-area">
                            <label class="contact__form-tag">Project</label>
                            <textarea name="user_project" required placeholder="Write your project..."
                                class="contact__form-input" id="contact-project"></textarea>
                        </div>

                        <p class="contact__message" id="contact-message"></p>

                        <button type="submit" class="contact__button">
                            Submit <i class="ri-arrow-right-up-line"></i>
                        </button>
                    </form>
                </div>
            </div>

        </section>
  )
}

export default Contact