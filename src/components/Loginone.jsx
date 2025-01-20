import React, { useState } from 'react'

const Loginone = () => {

    let data = {
        email : 'rebba@gmail.com',
        password : 'rebba123'

    }

    let handleSubmit

    //  [num,setNum] = useState(2)

    // const numadd = () =>{
    //   num = num +1 
    //   setNum(num)
    // }

    
  return (
    <>
      <div className="container mt-5 w-50">
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={data.email}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={data.password}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>

      <div className="container">
        <div className="container">
          {/* <h1>STARTING NUMBER {num}</h1> */}
        </div>
        {/* <button onClick={numadd()}>green</button> */}

        
      </div>
    </>
  );
}

export default Loginone
