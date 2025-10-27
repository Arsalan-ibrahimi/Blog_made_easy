import CTABTN from "./button"
export default function blogList()
{
    return(
        

<section class="blog-list">
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "1rem"}}><h1>Blogs</h1></div>
  <div class="header-blog">
    <div>
      <p class="highlight">Read Now!</p>
      <h2>Discover Insights That Inspire.</h2>
      <p class="subtitle">Stories, guides, and ideas written for you.</p>
    </div>
    <div class="filters">
      <select>
        <option>Recently added</option>
        <option>Most popular</option>
        <option>Editor's picks</option>
      </select>
      <button>See more</button>
    </div>
  </div>

  <div class="blog-grid">
    <div class="blog-card-list">
      <img src="https://images.unsplash.com/photo-1760373899546-23db228c8a0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>Testing Your Limits</h3>
      <p>A personalised guide to help you break through your barriers to achieve results</p>
      <p class="meta">Self Help • Oct 20, 2025</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
     <div class="blog-card-list">
      <img src="https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>The Cultural Boom</h3>
      <p>An insight to the western cultural adaptation and its impacts</p>
      <p class="meta">Insight • Nov 20, 2015</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
     <div class="blog-card-list">
      <img src="https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>The Humming Way</h3>
      <p>How humming birds help sustain the local ecosystem?</p>
      <p class="meta">Animal Kingdom • Jan 1, 2024</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
     <div class="blog-card-list">
      <img src="https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>The AI Race</h3>
      <p>Get into the cutting-edge artificial intelligence trends and news</p>
      <p class="meta">Technology • Aug 3, 2025</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
   
   
  </div>
</section>

 
    )
}