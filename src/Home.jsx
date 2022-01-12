import React from 'react'

function Home() {
    return (

        <>

            <div style={{ margin: "100px" }}>
                <h1 className='text-center'>A Simple Website With :</h1>
                <span className='d-block text-center' style={{ fontWeight: "bold", color: "magenta", fontSize: "2em", lineHeight: "2em" }}>backend,</span>
                <span className='d-block text-center' style={{ fontWeight: "bold", color: "magenta", fontSize: "2em", lineHeight: "2em" }}>frontend,</span>
                <span className='d-block text-center' style={{ fontWeight: "bold", color: "green", lineHeight: "1.5em", fontSize: "1.3em" }}>and</span>
                <span className='d-block text-center' style={{ fontWeight: "bold", color: "magenta", fontSize: "2em", lineHeight: "2em" }}>database.</span>
            </div>
            <div className='container-fluid py-5 bg-danger mx-auto w-100'>
                <h2 className='text-center'>About This Project </h2>
                <hr />
                <h5>What This Project Utilizes?</h5>
                <ul>
                    <li>Server : NodeJs-Express</li>
                    <ul>
                        <li>Hosted on Heroku</li>
                    </ul>
                    <li>Frontend : React with Bootstrap</li>
                    <ul>
                        <li>Hosted on Netlify</li>
                        <li>I didn't worked much on UI part for this projects, rather focussed on other Functionalities.</li>
                    </ul>
                    <li>Database : MongoDB Atlas</li>
                    <li>Google Gmail API ( OAuth Credentials )</li>
                </ul>

                <h5>Other Silent Features</h5>
                <ul>
                    <li>Bcrypt.js</li>
                    <ul>
                        <li>Login password is hashed using Bcrypt.js and then stored to Database so as to inhence security</li>
                    </ul>
                    <li>Cookies</li>
                    <ul>
                        <li>For automatic singin</li>
                    </ul>
                    <li>Logout Functionality</li>
                    <li>Sessionstorage</li>
                    <ul>
                        <li>To store some of the user's data locally in browser</li>
                    </ul>

                    <li>Automated email sending to verify user' email</li>
                    <ul>
                        <li>Email is sent by utilizing Google Gmail API with OAuth Credentials</li>
                        <li>Meaning : user can't access his profile section untill he verifies his/her email by clicking on link sent to his email</li>
                    </ul>

                </ul>


            </div>


        </>
    )
}

export default Home
