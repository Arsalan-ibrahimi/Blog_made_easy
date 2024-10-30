

function App() {

  let styles = 
  {
   
    backgroundColor: '#e5e5f7',
    opacity: 0.8,
    backgroundImage: [
      'radial-gradient(#444cf7 0.5px, transparent 0.5px)',
      'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
    ].join(','),
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
  }
  return (
    <div className="features-container  padding-sides">
      <header className="" style={{marginBottom: "40px"}}>
        
        <h1 className="">Keep up with the world</h1>
        <p className="">
          Stay connected with the latest news, updates, and insights from around the world.
        </p>
      </header>

      <div className="card-grid">
        <div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1730125082387-5cbbb42bf776?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        </div>
        <div className="card" style={styles}>
          <h2>Sleep Tracking</h2>
          <p>
            Unlock deep insights into your sleep patterns, optimize rest, and wake up revitalized every morning.
          </p>
          <a href="#">More Information</a>
        </div>
        <div className="card" style={{backgroundImage: "url('https://images.pexels.com/photos/28962828/pexels-photo-28962828/free-photo-of-colorful-lifeguard-tower-on-miami-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        </div>
        <div className="card dark-card" >
          <h2>Activity Tracking</h2>
          <p>
            Seamlessly monitor your activity, set goals, and achieve new heights with personalized tracking and insights.
          </p>
          <a href="#">More Information</a>
        </div>
        <div className="card dark-blue-card">
          <h2>Mindfulness Training</h2>
          <p>
            Elevate your mind with guided meditation sessions, fostering tranquility and focus for a balanced life.
          </p>
          <a href="#">More Information</a>
        </div>
        <div className="card" style={{backgroundImage: "url('https://images.pexels.com/photos/14678657/pexels-photo-14678657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        </div>
        <div className="card">
          <h2>Health Benefits</h2>
          <p>
            Explore personalized insights, tips, and trends, unlocking the path to holistic well-being and optimal health.
          </p>
          <a href="#">More Information</a>
        </div>
        <div className="card" style={{backgroundImage: "url('https://images.pexels.com/photos/27738651/pexels-photo-27738651/free-photo-of-a-woman-with-curly-hair-and-a-smile.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
          
        </div>
      </div>
    </div>
  );
}

export default App;
