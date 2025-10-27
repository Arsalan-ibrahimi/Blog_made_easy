
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
      <p className="subtitle">Your enquiries are always a top priority</p>

      <div className="faq-box">
        <div className="faq-item active">
          <div className="faq-question">
            Do i need to pay to get started?
          </div>
          <div className="faq-answer">
            To get your blogging journey a start, you don't need to purchase any subscription. It is cost-free
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Are there any limits on the AI Assistant's credit?</div>
          <div className="faq-answer">
            A Free tier gets your 3 drafts every day and any more requests will require addition costs.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Is the draft visual editor feature free of cost?</div>
          <div className="faq-answer">
            Yes, The visual editor feature is free to use for all tier users.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How can I contact customer support?</div>
          <div className="faq-answer">
            Leave a message on our website form or email us to get in touch.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How can i reach my target audience?</div>
          <div className="faq-answer">
           By filling the target audience question form, we can help you reach your target audience
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How do I change my email address?</div>
          <div className="faq-answer">
           You can change your credentials in your profile - user settings option
          </div>
        </div>
      </div>
    </div>

    <div className="">
      

      <div className="faq-card">
        <div class="cookie-card">
    <span class="title">🤔 Still have questions?</span>
    <p class="description">Still cant find the answer to your query? leave a question by filling out the form and we will get in touch shortly </p>
    <div class="actions">
      
    </div>
</div>
      </div>

      <form className="faq-form faq-right">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="John Smith"/>

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="pagename@gmail.com"/>

        <label for="question">Write Your Question</label>
        <textarea id="question" placeholder="Message"></textarea>

        <button type="submit">Submit Now</button>
      </form>
    </div>
  </div>
</section>
        </div>
    );      

}



