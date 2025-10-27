import NavMenu from "../../navigations/Nav_Menu";
import Footer from "../../navigations/Footer";

import React, { useState } from "react";

import { Navigate } from "react-router-dom";
import ReaderBlogCard from "./readerBlogCard";
import Cookies from "js-cookie";
import ProfileCard  from "./ProfileCard";
import FollowingsList from "./FollowingsList";
import Chart from '../sections/chart'

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


console.log(userBlogs);
  const calculateTime = (timestamp) => {
    const difference = Date.now() - new Date(timestamp).getTime();

    const minutes = Math.floor(difference / 1000 / 60);
    const hours = Math.floor(difference / 1000 / 60 / 60);
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);

    if (minutes < 60) {
      return `Published ${minutes} minutes ago`;
    } else if (hours < 24) {
      return `Published ${hours} hours ago`;
    } else {
      return `Published ${days} days ago`;
    }
  };


export default function Reader_profile() {
  let [activeTab, setActiveTab] = useState("profile");

  let ReaderBlogCards = userBlogs.map((blog) => (
    <ReaderBlogCard
      key={blog._id}
      title={blog.title}
      timeStmp={calculateTime(blog.timestamp)}
      timeActual = {blog.timestamp}
      content={blog.content}
      img={"https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1200"}
      url={'/BlogPost/' + blog._id}

    />
  ));

  if (!Cookies.get("uid")) {
    return <Navigate to="/signInPatron" />;
  } else {
    // console.log(userData[0].name);
    return (
      <div className="container global-div-wrap">
        
        <NavMenu/>

	
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
					<ProfileCard name={userData[0].name} email={userData[0].email} ProfileURL = {userData[0].profile}/>
				
         <div className="content-main insight-main">
                 <p>Your Insights</p>

                  <Chart/>
                </div>
        
        	<div class="content-main ">
					<div class="blog-card-list-prof">
							<div class="content-header-intro">
								<h2>Your Blogs</h2>
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
        <Footer />
        </div>

      </div>
    );
  }
}
