import WorkImage from "../../assets/images/workSection.png"
import ButtonCTA from "../sections/button"
export default function Accordian (){

    return(
        <>
        
  <section class="work-section padding-sides">
    <div class="work-container">
      
      <div class="work-image">
        <img src={WorkImage} alt="Building"/>
        <div class="consultation-badge">Your tools</div>
      </div>

   
      <div class="work-content">
        <h2>How to use</h2>
        <p class="subtitle">What we offer that others don't</p>

        <div class="steps">
          <div class="step">
            <div class="step-number">01</div>
            <div class="step-info">
              <h4>Outline your Blog Content</h4>
              <p>Using our block components, plan out chunks of contents</p>
            </div>
          </div>

           <div class="step">
            <div class="step-number">02</div>
            <div class="step-info">
              <h4>Organise Ideas</h4>
              <p>Move chunks around to suit best flow of writing</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">03</div>
            <div class="step-info">
              <h4>Save Drafts</h4>
              <p>For easier access and smooth continuation, save drafts and write when you want</p>
            </div>
          </div>

           <div class="step">
            <div class="step-number">04</div>
            <div class="step-info">
              <h4>Publish</h4>
              <p>Let your readers see your blogs by publishing and pinging readers</p>
            </div>
          </div>


          <div className="flex">
          <ButtonCTA />
          <ButtonCTA />

          </div>

        
        </div>
      </div>
    </div>
  </section>
        
        </>
    )
}
