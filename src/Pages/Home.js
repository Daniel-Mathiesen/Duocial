import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-container">
      <section className="sec-1">
        <div className="plans">
          <div className="welcome">
            <h1>Find your Duo</h1>
            <p>
              Explore the future of social media from both your phone and
              desktop!
            </p>
          </div>
          <div className="plansImg">
          <div className="sign-up-form">
                <h1>Sign Up Now</h1>
                <form>
                    <input type="email" className="input-box" placeholder="Your Email"/>
                    <input type="password" className="input-box" placeholder="Your Password"/>
                    <p className="tos"><span><input type="checkbox"/></span> I agree to the terms of services</p>
                    <button type="button" className="signup-btn">Sign up</button>
                    <hr />
                    <p className="or">OR</p>
                    <p>Do you have an existing account? <a href="#"><Link to="/Signin">Sign in</Link></a></p>
                </form>
            </div>
          </div>
        </div>
        <div className="download">
            <img src="https://godtelotten.dk/wp-content/uploads/2016/07/Google-Play-App-Store.png" alt="" />
            <img src="https://godtelotten.dk/wp-content/uploads/2016/07/Apple-App-Store.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
