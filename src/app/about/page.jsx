import React from 'react';

const getTime = async () => {
    // Cache the na diye updated ta dibe proti refresh e notun data dibe mane network request korbe 
    // Backend theke o kora jay eta

    const res = await fetch(`https://nexjs-core-concept-3.vercel.app/time`, {cache :'no-store'})

    // kisukhon por por re validate korbe
    // const res = await fetch(`http://localhost:3000/time`, { next: { revalidate: 5 } })
    const data = await res.json()
    return data.currentTime
}

const page = async () => {
    const currentTime = await getTime();
    console.log(currentTime)

    return (
        <div>
            <h1>About Page</h1>
            <h2>Time : {currentTime}</h2>
        </div>
    );
};

export default page;