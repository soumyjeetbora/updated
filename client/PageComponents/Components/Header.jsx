import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../../context";



import Web3 from 'web3';

const Header = ({ passedData }) => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Connect to MetaMask
      const web3 = new Web3(window.ethereum);
      
      // Request account access if needed
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          const selectedAccount = accounts[0];
          setAccount(selectedAccount);

          // Fetch account balance
          web3.eth.getBalance(selectedAccount)
            .then(result => {
              // Convert balance from Wei to Ether
              const balanceInEther = web3.utils.fromWei(result, 'ether');
              setBalance(balanceInEther);
            })
            .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
    } else {
      console.error('MetaMask not detected');
    }
  }, []);
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail]=useState("");
  const { currentAccount, connectWallet, userBlance } = useStateContext();
  
  useEffect(() => {
    const isLoggedInFromStorage = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedInFromStorage === 'true');
  }, []);
  console.log(isLoggedIn);
   
  useEffect(() => {
    const EmailFromStorage = localStorage.getItem('email');
    setEmail(EmailFromStorage);
  }, []);


  const logOut = () => {
  localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from local storage
  localStorage.removeItem('email');
  setIsLoggedIn(false); // Update isLoggedIn state
  window.location.href = "/login"; // Redirect to login page
  };



  return (
    
    <>
      <header class="rn-header haeder-default header--sticky">
        <div class="container">
          <div class="header-inner">
            <div class="header-left">
              <div class="logo-thumbnail logo-custom-css">
                <Link class="logo-light" href="/">
                  <img src="/logo/logo-white.png" alt="nft-logo" />
                </Link>
                <Link class="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </Link>
              </div>
              <div class="mainmenu-wrapper">
                <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
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
              </div>
            </div>
            <div class="header-right">
              <div class="setting-option d-none d-lg-block">
                <form class="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div class="search-icon">
                    <button>
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="setting-option rn-icon-list d-block d-lg-none">
                <div class="icon-box search-mobile-icon">
                  <button>
                    <i class="feather-search"></i>
                  </button>
                </div>
                <form
                  id="header-search-1"
                  action="#"
                  method="GET"
                  class="large-mobile-blog-search"
                >
                  <div class="rn-search-mobile form-group">
                    <button type="submit" class="search-button">
                      <i class="feather-search"></i>
                    </button>
                    <input type="text" placeholder="Search ..." />
                  </div>
                </form>
              </div>

              {/* //CONNECT WALLET */}

                <div
                  class="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div class="icon-box">
                  {isLoggedIn ? (<button
                      onClick={() => connectWallet()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>):null}
                    {!isLoggedIn? (<a
                      href="/login"
                      class="btn btn-primary-alta btn-small"
                    >
                      Login/SignUp
                    </a>):null}
                    
                {isLoggedIn? ( <button onClick={() => logOut()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Logout
                    </button>):null}
               
                  </div>
                </div>
              

              {/* //END CONNECT WALLET */}
              

              {currentAccount ? (
                <div>
                  <div class="setting-option rn-icon-list user-account">
                    <div class="icon-box">
                      <a href="/author">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </a>
                      <div class="rn-dropdown">
                        <div class="rn-inner-top">
                          <h4 class="title">
                            <a href="product-details.html">
                              {email}
                            </a>
                          </h4>
                          <span>
                            <a href="#">Set Display Name</a>
                          </span>
                        </div>
                        <div class="rn-product-inner">
                          <ul class="product-list">
                            <li class="single-product-list">
                              <div class="thumbnail">
                                <a href="product-details.html">
                                  <img
                                    src="/portfolio/portfolio-07.jpg"
                                    alt="Nft Product Images"
                                  />
                                </a>
                              </div>
                              <div class="content">
                                <h6 class="title">
                                  <a href="product-details.html">Balance</a>
                                </h6>
                                <span class="price">
                                  {balance} ETH
                                </span>
                              </div>
                              <div class="button"></div>
                            </li>
                            <li class="single-product-list">
                              <div class="thumbnail">
                              </div>
                              <div class="button"></div>
                            </li>
                          </ul>
                        </div>
                        <ul class="list-inner">
                          <li>
                            <a href="/author"><h5>My Profile</h5></a>
                          </li>
                          <li>
                          {isLoggedIn? ( <button onClick={() => logOut()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Logout
                    </button>):null}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="setting-option mobile-menu-bar d-block d-xl-none">
                <div class="hamberger">
                  <button class="hamberger-button">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div class="popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="logo logo-custom-css">
              <a class="logo-light" href="index.html">
                <img src="/logo/logo-white.png" alt="nft-logo" />
              </a>
              <a class="logo-dark" href="index.html">
                <img src="/logo/logo-dark.png" alt="nft-logo" />
              </a>
            </div>
            <div class="close-menu">
              <button class="close-button">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul class="mainmenu">
              <li>
                <a class="nav-link its_new" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a class="nav-link its_new" href="/explor">
                  Explore
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/">
                  Pages
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;