
export default function WhyUs() {

    
 const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      // Toggle current one
      item.classList.toggle('active');
    });
  });


    return (
       
        <div className="padding-sides " style={{background:"#f7f7f4c7", padding: "5% 8%"}}>
            <section className="faq-section">
  <div className="faq-container">
    <div className="faq-left">
      <h2>Frequently Asked Questions</h2>
      <p className="subtitle">Trusted in more than 100 countries and 5 million customers.</p>

      <div className="faq-box">
        <div className="faq-item active">
          <div className="faq-question">
            How do I update my billing information?
          </div>
          <div className="faq-answer">
            To update your billing information, log in and go to the billing or payment page.
            Look for an option to “Update payment method” or “Edit billing information” and
            follow the prompts. Be sure to save your changes before exiting.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">How do I delete my account?</div>
          <div className="faq-answer">
            To update your billing information, log in and go to the billing or payment page.
            Look for an option to “Update payment method” or “Edit billing information” and
            follow the prompts. Be sure to save your changes before exiting.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How do I join a group or community?</div>
          <div className="faq-answer">
            To update your billing information, log in and go to the billing or payment page.
            Look for an option to “Update payment method” or “Edit billing information” and
            follow the prompts. Be sure to save your changes before exiting.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How can I contact customer support?</div>
          <div className="faq-answer">
            To update your billing information, log in and go to the billing or payment page.
            Look for an option to “Update payment method” or “Edit billing information” and
            follow the prompts. Be sure to save your changes before exiting.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Which is better short term or long term?</div>
          <div className="faq-answer">
            To update your billing information, log in and go to the billing or payment page.
            Look for an option to “Update payment method” or “Edit billing information” and
            follow the prompts. Be sure to save your changes before exiting.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How do I change my email address?</div>
          <div className="faq-answer">
            To update your billing information, log in and go to the billing or payment page.
            Look for an option to “Update payment method” or “Edit billing information” and
            follow the prompts. Be sure to save your changes before exiting.
          </div>
        </div>
      </div>
    </div>

    <div className="faq-right">
      <h3>In what way can we help?</h3>
      <p>Feel free to reach out to us with your inquiries.</p>

      <form className="faq-form">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="John Smith"/>

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="pagename@gmail.com"/>

        <label for="question">Write Your Question</label>
        <textarea id="question" placeholder="Enter here..."></textarea>

        <button type="submit">Submit Now</button>
      </form>
    </div>
  </div>
</section>
        </div>
    );      

}



