import React from 'react'

// dotenv.config()
function Profile() {

    const renderUserInfo = () => {
        const user = JSON.parse(sessionStorage.getItem('user-info'));
        // console.log(user)
        if (!user) {
            return <h2 className='text-center text-primary'>Click Refresh Profile or Login to see your profile :)</h2>
        } else {
            return (
                <>
                    <div className='container-fluid w-50 my-5 border border-primary py-5 px-5'>
                        <ul>
                            <li>Name : {user.name}</li>
                            <li>Email : {user.email}</li>
                        </ul>
                    </div>
                </>
            )

        }



    }

    const refreshProfile = async () => {

        const options = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(inputVal),
        };
        try {


            const fetchResponse = await fetch(`${process.env.api_url}/profile/refreshprofile`, options);
            // const fetchResponse = await fetch('http://localhost:4000/profile/refreshprofile', options);
            const data = await fetchResponse.json();

            const user = { name: data.name, email: data.email };
            console.log(user)

            sessionStorage.setItem('user-info', JSON.stringify(user));
            console.log(data);
            window.location.reload();

        } catch (err) {
            console.log("Error at refreshing-profile try-catch: " + err);
        }
    }

    const logOut = async () => {

        const options = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(inputVal),
        };

        const res = await fetch(`${process.env.api_url}/profile/logout`, options);
        // const res = await fetch(process.env.API_URL / profile / logout, options);
        console.log(res);


        sessionStorage.removeItem('user-info');
        window.location.reload();


    }

    return (
        <div>
            <h1 style={{ margin: "100px" }} className='text-center'>Your Profile</h1>
            {renderUserInfo()}
            <div className="text-center ">
                <button type="submit" onClick={() => refreshProfile()} className="btn btn-success btn-lg mt-5" >Refresh Profile</button>
            </div>
            <div className="text-center ">
                <button type="submit" onClick={() => logOut()} className="btn btn-danger btn-lg mt-5" >Logout</button>
            </div>
        </div>
    )
}

export default Profile
