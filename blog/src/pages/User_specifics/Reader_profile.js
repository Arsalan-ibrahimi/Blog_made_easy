import NavMenu from "../../navigations/Nav_Menu";
import Footer from "../../navigations/Footer";

import React, { useState } from "react";

import { Navigate } from "react-router-dom";
import ReaderBlogCard from "./readerBlogCard";
import Cookies from "js-cookie";
import ProfileCard  from "./ProfileCard";
import FollowingsList from "./FollowingsList";


import "./styles.css";


let id = Cookies.get("_id");
let userData = {};
let userBlogs = [];

if(id)
{
	await fetch("http://localhost:8000/getReader", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify({ id: id }),
	})
	  .then((response) => response.json())
	  .then((data) => {
		userData = data.response;
	
		let blog = data.Blogs;
	
		userBlogs = blog;
	  });
}


export default function Reader_profile() {
  let [activeTab, setActiveTab] = useState("profile");

  let ReaderBlogCards = userBlogs.map((blog) => (
    <ReaderBlogCard
      key={blog._id}
      title={blog.title}
      author={blog.author}
      content={blog.content}
      img={"https://images.pexels.com/photos/28607267/pexels-photo-28607267/free-photo-of-black-and-white-portrait-on-urban-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
    />
  ));

  if (!Cookies.get("uid")) {
    return <Navigate to="/signInPatron" />;
  } else {
    // console.log(userData[0].name);
    return (
      <div className="container global-div-wrap">
        <div className="reader-menu-specific">
			<ul>
				<li>
					<a href="/">
						Profile
					</a>
				</li>
				<li>
					<a href="/blog">
						Blog
					</a>
				</li>
				<li>
					<a href="/publish">
						Write
					</a>
				</li>
				<li>
					<button className="btn" onClick={() => {Cookies.remove("uid"); window.location.reload();}}>Log Out -X  </button>
				</li>
			</ul>
		</div>

	
        <div className="content-main-wrap">

	
			  

          <main class="main">
            <div class="responsive-wrapper">
			
              <div class="main-header">
			  
                <h1>Adios! {userData[0].name}</h1>
				
                <div class="search">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i class="ph-magnifying-glass-bold"></i>
                  </button>
                </div>
              </div>
              <div class="horizontal-tabs">
                <li
                  className={activeTab === "profile" ? "active" : ""}
                  onClick={() => setActiveTab("profile")}
                >
                  <a href="#">Profile</a>
                </li>
                <li
                  className={activeTab === "followings" ? "active" : ""}
                  onClick={() => setActiveTab("followings")}
                >
                  <a href="#">Followings</a>
                </li>
                <li
                  className={activeTab === "favorites" ? "active" : ""}
                  onClick={() => setActiveTab("favorites")}
                >
                  <a href="#">Favorites</a>
                </li>
                <li
                  className={activeTab === "activity" ? "active" : ""}
                  onClick={() => setActiveTab("activity")}
                >
                  <a href="#">Activity</a>
                </li>
                <li
                  className={activeTab === "security" ? "active" : ""}
                  onClick={() => setActiveTab("security")}
                >
                  <a href="#">Security</a>
                </li>
              </div>

              {activeTab === "profile" &&  
			  <div class="content">
					<ProfileCard name={userData[0].name} ProfileURL = {userData[0].profile}/>
					<div class="content-main">
					<div class="blog-card-list">
							<div class="content-header-intro">
								<h2>Continue Reading</h2>
							</div>

						{ReaderBlogCards.length === 0 ? (
						<p className="empty-text">
							You haven't written any blog yet.
						</p>
						) : (
						ReaderBlogCards
						)}
					</div>
                </div>
            
			  </div>}
              {activeTab === "followings" && <div><FollowingsList/></div>}
              {activeTab === "favorites" && <div>{ReaderBlogCards}</div>}
              {activeTab === "activity" && <div>Activity</div>}
              {activeTab === "security" && <div>Security</div>}

             
           
            </div>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}
