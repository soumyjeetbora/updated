import React from "react";

const ContactThree = () => {
  return (
    <div class="login-area message-area rn-section-gapTop">
      <div class="container">
        <div class="row g-5">
          <div
            class="col-lg-6"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
          >
            <div class="connect-thumbnail">
              <div class="left-image">
                <img src="/contact/contact1.png" alt="Nft_Profile" />
              </div>
            </div>
          </div>
          <div
            class="col-lg-6"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
          >
            <div class="form-wrapper-one registration-area">
              <h3 class="mb--30">Contact Us</h3>
              <form
                class="rwt-dynamic-form"
                id="contact-form"
                method="POST"
                action="mailto:sushiluniyal9873@mail.com?subject=subject&message=message"
              >
                <div class="mb-5">
                  <label htmlFor="contact-name" class="form-label">
                    Your Name
                  </label>
                  <input name="contact-name" id="contact-name" type="text" />
                </div>
                <div class="mb-5">
                  <label htmlFor="contact-email" class="form-label">
                    Email
                  </label>
                  <input id="contact-email" name="contact-email" type="email" />
                </div>
                <div class="mb-5">
                  <label htmlFor="subject" class="form-label">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" />
                </div>
                <div class="mb-5">
                  <label htmlFor="contact-message" class="form-label">
                    Write Message
                  </label>
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    rows="3"
                  ></textarea>
                </div>
                <div class="mb-5 rn-check-box">
                  <input
                    id="condition"
                    type="checkbox"
                    class="rn-check-box-input"
                  />
                  <label htmlFor="condition" class="rn-check-box-label">
                    Allow to all tearms & condition
                  </label>
                </div>
                <a href="mailto:sushiluniyal9873@mail.com?subject=subject&body=contact-message"  name="submit" type="submit" class="btn btn-primary">
                  Send Message
                </a>
                
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactThree;
