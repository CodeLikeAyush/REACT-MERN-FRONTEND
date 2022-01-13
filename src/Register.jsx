import React, { useState } from 'react'



function Contact() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const [inputVal, setInputVal] = useState(initialValues);


    const handleInput = (e) => {
        setInputVal(
            {
                ...inputVal,
                [e.target.name]: e.target.value,

            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputVal),
        };

        try {
            const fetchResponse = await fetch(`${process.env.api_url}/registration`, options);
            // const fetchResponse = await fetch(process.env.API_URL/registration, options);

            const data = await fetchResponse.json();
            // return data;
            console.log(data);
            setInputVal(initialValues);
            window.alert(data.message);
        }
        catch (e) {
            // return e;
            console.log(e);
        }

        // alert(`Response recorded`);
    }
    return (


        <>
            <h1 className="text-center" style={{ marginTop: "100px" }}>Register Now</h1>

            <div className="container-fluid w-50 my-5 border border-primary py-5 px-5 ">

                <form method='POST' onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="Name"
                            name='name'
                            value={inputVal.name}
                            onChange={handleInput} />
                    </div>
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
                        <button type="submit" className="btn btn-primary btn-lg mt-5" >Submit</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default Contact
