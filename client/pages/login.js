// import React from "react";

// //INTERNAL IMPORT
// import { Header, Footer, Copyright } from "../PageComponents/Components";
// import { LoginOne, LoginTwo } from "../PageComponents/LoginPage";

// const login = () => {
//   return (
//     <div class="template-color-1 nft-body-connect">
//       <Header />
//       <LoginOne />
//       <LoginTwo />
//       <Footer />
//       <Copyright />
//     </div>
//   );
// };

// export default login;
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Header, Footer, Copyright } from "../PageComponents/Components";
import Link from "next/link";

const firebaseConfig = {
  apiKey: "AIzaSyB2g_4fMEExCzf0DGKJg-aW16qshNGETO4",
  authDomain: "fir-cube-8dc2d.firebaseapp.com",
  projectId: "fir-cube-8dc2d",
  storageBucket: "fir-cube-8dc2d.appspot.com",
  messagingSenderId: "413757349966",
  appId: "1:413757349966:web:6a2ecfe9ca29543475a31f",
  measurementId: "G-3VEXWNNJ6L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [confirmSignupEmail, setConfirmSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmSignUpPassword, setConfirmSignUpPassword] = useState("");
    const [showSignup, setShowSignup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line
    

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Success! Welcome back!");
                window.alert("Success! Welcome back!");
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('email', email);
                window.location.href = "/";
                 // Update isLoggedIn state
            })
            .catch((error) => {
                console.error("Error occurred. Try again.", error.message);
                window.alert("Error occurred. Try again.");
            });
    };

    const handleSignup = () => {
        if (signupEmail !== confirmSignupEmail) {
            window.alert("Email fields do not match. Try again.");
            return;
        }

        if (signupPassword !== confirmSignUpPassword) {
            window.alert("Password fields do not match. Try again.");
            return;
        }

        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                console.log("Success! Account created.");
                window.alert("Success! Account created.");
                signInWithEmailAndPassword(auth,signupEmail,signupPassword)
                .then((userCredential) => {
                  setIsLoggedIn(true);
                  localStorage.setItem('isLoggedIn', true);
                  localStorage.setItem('email', email);
                  window.location.href = "/";
                   // Update isLoggedIn state
              })
              .catch((error) => {
                  console.error("Error occurred. Try again.", error.message);
                  window.alert("Error occurred. Try again.");
              });
            })
            .catch((error) => {
                console.error("Error occurred. Try again.", error.message);
                window.alert("Error occurred. Try again.");
            });
    };

    return (
        <div class="mainmenu-wrapper">
            <Header/>
                {/* <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                  <ul class="mainmenu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <a href="/explor">Explore</a>
                      <ul class="submenu">
                        <li>
                          <Link href="/active">
                            Activity<i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            Author<i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/create">
                            Create
                            <i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/creator">
                            Creator
                            <i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link class="live-expo" href="/explor">
                            Explore
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
               */}
            
        <div class="login-area rn-section-gapTop">
            <div class="container">
                <div class="row g-5">
                    <div class="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                        <div class="form-wrapper-one">
                        <div id="main" style={{ display: showSignup ? "none" : "block" }}>
                    <h4>Sign In</h4>
                    <input
                        type="text"
                        placeholder="Email" id="exampleInputEmail1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button class="btn btn-primary mr--15" onClick={handleLogin}>Sign In</button>
                    {/* <p><span><h4>or</h4></span></p> */}
                    <button class="btn btn-primary-alta" onClick={() => setShowSignup(true)}>Sign Up</button>
                </div>

                <div id="create-acct" style={{ display: showSignup ? "block" : "none" }}>
                    <h4>Create an Account</h4>
                    <input
                        type="text"
                        placeholder="Email *"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Confirm Email *"
                        value={confirmSignupEmail}
                        onChange={(e) => setConfirmSignupEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password *"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password *"
                        value={confirmSignUpPassword}
                        onChange={(e) => setConfirmSignUpPassword(e.target.value)}
                    />
                    <button class="btn btn-primary mr--15" onClick={handleSignup}>Create Account</button>
                    <button class="btn btn-primary-alta" onClick={() => setShowSignup(false)}>Return to Login</button>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
            <Header passedData={isLoggedIn} /> Pass isLoggedIn state as prop
        </div>
        </div>
    );
};

export default Login;