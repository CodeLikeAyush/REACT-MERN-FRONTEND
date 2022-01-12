// import React from 'react'

// import { useState, useEffect } from 'react';


// const fetchData = async () => {
//     const res = await fetch('/dataReq');
//     const data = await res.json();
//     console.log(data);
// }


// function Data() {

//     const [data, setData] = useState();

//     useEffect(() => {
//         try {


//             const fetchData = async () => {

//                 const res = await fetch('/dataReq');
//                 const resData = await res.json();
//                 // console.log(resData);
//                 setData(resData);

//             }
//             fetchData();
//         } catch (e) {
//             console.log(e);
//         }

//     }, [])

//     return (
//         <>
//             <h1>Data Page</h1>

//             <ul>
//                 <li >{!data ? "Loading..." : data.name}</li>
//                 <li>{!data ? "Loading...." : data.age}</li>
//                 <li>{!data ? "Loading...." : data.role}</li>
//                 <li>{!data ? "Loading...." : data.language}</li>
//                 <li>{!data ? "Loading...." : data.framework}</li>
//             </ul>
//             <button onClick={() => { fetchData() }}>Fetch Data</button>
//         </>
//     )
// }

// export default Data;








