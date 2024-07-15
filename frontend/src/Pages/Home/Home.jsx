import React, { useState } from 'react'

import "./home.scss"
import { Link } from 'react-router-dom'

import logo from "../../assets/logo.png"
import people from "../../assets/people.png"
import DropDownBtn from "../../components/dropDownBtn/DropDownBtn.jsx"
import m1 from "../../assets/m1.png"
import m2 from "../../assets/m2.png"
import m4 from "../../assets/m4.png"
import m5 from "../../assets/m5.png"

import ReferralForm from "../../components/referralForm/ReferralForm.jsx"




const Home = () => {

    const [popFlag, setPopFlag] = useState(false)

    const handlePopupShow = (e) => {
        e.preventDefault();
        setPopFlag(true)
    }


    return (
        <div id='homePage'>
            <div id="heroSection">
                <div id="topHero1">
                    <div>
                        Navigate your ideal career path with tailored expert advice
                    </div>
                    <Link>
                        <div>
                            Contact Expert
                        </div>
                    </Link>
                </div>
                <div id="topHero2">
                    <div id='topHero2Left'>
                        <img src={logo} alt="logo" />
                        <DropDownBtn />
                    </div>
                    <div id="topHero2Right">
                        <Link>Refer & Earn</Link>
                        <Link>Resources</Link>
                        <Link>About Us</Link>
                        <Link to={"https://home.accredian.com/login"}>
                            <button id='loginBtn'>Login</button>
                        </Link>
                        <Link to={"https://trial.accredian.com/"}>
                            <button>Try for free</button>
                        </Link>
                    </div>
                </div>

                <div id="topHero3">
                    <Link>Refer</Link>
                    <Link>Benefits</Link>
                    <Link>FAQs</Link>
                    <Link>Support</Link>
                </div>

                <div id="topHero4">
                    <img src={m1} alt="" id="money1" />
                    <img src={m2} alt="" id="money2" />
                    <img src={m4} alt="" id="money4" />
                    <img src={m5} alt="" id="money5" />
                    <div id="topHero4Left">
                        <h1 class="text-6xl font-bold">Let's Learn & Earn</h1>
                        <h3 class="text-3xl">Get a chance to win up-to <span class="font-bold">Rs 15000</span></h3>
                        <button onClick={handlePopupShow}>Refer Now</button>
                    </div>
                    <div id="topHero4Right">
                        <div id="centerImage">
                            <img src={people} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {popFlag && <div id="referralPopup">
                <div id="referralForm">
                    <div id="closePopup" onClick={() => setPopFlag(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <ReferralForm />
                </div>
            </div>}

        </div>
    )
}

export default Home