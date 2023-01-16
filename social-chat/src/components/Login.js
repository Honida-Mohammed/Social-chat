import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
//============================================================================
const Login = () => {

  
  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();


  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Social Chat App</h2>
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, GoogleProvider)}
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(auth, FacebookProvider)}
        >
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
