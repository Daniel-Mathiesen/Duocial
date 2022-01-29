import { Link } from 'react-router-dom'
const SignIn = () => {
    return ( 
    <div className="home-container">
      <section className="sec-1">
        <div className="plans">
          <div className="plansImg">
            <div className="sign-up-form">
                <h1>Sign In</h1>
                <form>
                    <input type="email" className="input-box" placeholder="Your Email"/>
                    <input type="password" className="input-box" placeholder="Your Password"/>
                    <button type="button" className="signup-btn">Sign in</button>
                    <hr />
                    <p className="or">OR</p>
                    <p>Do you not have an existing account? <a href="#"><Link to="/">Sign up</Link></a></p>
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
}

export default SignIn
