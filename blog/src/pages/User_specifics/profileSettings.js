

export default function ProfileSettings(props) {

    return(
        <>
                
            <div className="profile-setting-card">
                <button onClick={() => props.setSettings(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                </button>
            <div className="profile-setting-card-title">
            Profile Settings

            </div>        
            <div className="details-wrapper">
            <label>Username</label>
           <input type="text" placeholder="Username" name="user" className="input-style" />
           <label>Email</label>
           <input type="email" placeholder="Email" name="email" className="input-style" />
        
           <label>First Name</label>
           <input type="text" placeholder="First Name" name="name" className="input-style" />
           <label>Last Name</label>
           <input type="text" placeholder="Last Name" name="lname" className="input-style" />
          
          
            </div>




            </div>
        </>
    )
}