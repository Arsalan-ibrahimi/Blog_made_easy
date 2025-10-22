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
       <h3>Building a Creative Mindset</h3>
      <p>Stories, guides, and ideas written for you.Stories, guides, and ideas written for you.</p>
      <p class="meta">Mindset • Oct 20, 2025</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
     <div class="blog-card-list">
      <img src="https://images.unsplash.com/photo-1760373899546-23db228c8a0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>Building a Creative Mindset</h3>
      <p>Stories, guides, and ideas written for you.Stories, guides, and ideas written for you.</p>
      <p class="meta">Mindset • Oct 20, 2025</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
     <div class="blog-card-list">
      <img src="https://images.unsplash.com/photo-1760373899546-23db228c8a0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>Building a Creative Mindset</h3>
      <p>Stories, guides, and ideas written for you.Stories, guides, and ideas written for you.</p>
      <p class="meta">Mindset • Oct 20, 2025</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
     <div class="blog-card-list">
      <img src="https://images.unsplash.com/photo-1760373899546-23db228c8a0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Blog 1"/>
     <div className="blog-text-list">
       <h3>Building a Creative Mindset</h3>
      <p>Stories, guides, and ideas written for you.Stories, guides, and ideas written for you.</p>
      <p class="meta">Mindset • Oct 20, 2025</p>
       <CTABTN  innerText={"Read Article"}/>
     </div>
     
    </div>
   
   
  </div>
</section>

 
    )
}