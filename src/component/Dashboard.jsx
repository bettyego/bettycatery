import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = () => {
  const [user,setUser] = useState(null)
  // const [loading,setLoading] = useState(true)
  useEffect(()=>{
    fetchUserData()
  },[])

  const fetchUserData = async()=> {
    // fetch user data
    const request = await fetch('http://localhost:5000/api/fetchData',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token')
      }
    })
    const response = await request.json()

    console.log(response.user)
    response && setUser(response.user)
  }



  return (
    <section className='h-screen w-full flex justify-center items-center bg-gray-100'>
        {user && <h1 className='text-3xl font-bold'>Welcome {user.email}</h1>}
    </section>
  )
}

export default Dashboard