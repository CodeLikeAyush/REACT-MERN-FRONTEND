import React, { useState } from 'react'

function Singin() {
    const initialVal = {
        email: '',
        password: ''
    }
    const [inputVal, setInputVal] = useState(initialVal);
    const handleInput = (e) => {
        setInputVal(
            {
                ...inputVal,
                [e.target.name]: e.target.value
            }
        )
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputVal),
        };
        try {
            const fetchResponse = await fetch(`${process.env.api_url}/signin`, options);
            // const fetchResponse = await fetch('http://localhost:4000/signin', options);
            const data = await fetchResponse.json();
            console.log(data);

            const user = { name: data.name, email: data.email };
            // console.log(user);

            sessionStorage.setItem('user-info', JSON.stringify(user));


            window.alert(data.message)
            // console.log(data.db)
            if (data) {
                window.location = `${window.location.origin}/profile`;
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1 className="text-center" style={{ marginTop: "100px" }}>Sign In</h1>
            <div className="container-fluid w-50 my-5 border border-primary py-5 px-5 ">

                <form method='POST' onSubmit={handleSubmit} >

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name='email'
                            value={inputVal.email}
                            onChange={handleInput} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={inputVal.password}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="text-center ">
                        <button type="submit" className="btn btn-primary btn-lg mt-5" >Sign In</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default Singin
