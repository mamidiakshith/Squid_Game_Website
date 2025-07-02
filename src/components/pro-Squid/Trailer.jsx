import React, { useState } from 'react';
import './Trailer.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { counterobj } from '../../CounterContext';
function Trailer() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const {count, setCount} = useContext(counterobj); // initial number of slots

  const formsubmit = (obj) => {
    console.log(obj);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      if (res.status === 201) {
        setCount(prev => {
          const updated = prev - 1;
          localStorage.setItem("remainingSlots", updated); // optional: store to persist
          return updated;
        }); // decrease only on success
        navigate("/reg")
      }
    })
    .catch(err => {
      console.log(err);
      alert("Error");
    });
  };

  return (
    <div>
      <img src="https://pngimg.com/d/squid_game_PNG14.png" className='fori1' alt="" />
      <h3 className='fh3'>Remaining Slots: {count}</h3>

      <form className='f1' onSubmit={handleSubmit(formsubmit)}>
        <h1 className='fh1'>You're Welcome</h1>

        {/* Name Field */}
        <div className="fi1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
          {errors.name && <p className="error">Name is required</p>}
        </div>

        {/* Gender Selection */}
        <label>Gender</label>
        <div className="fi2">
          
          <div className="ma1">
            <input type="radio" id="male" value="Male" {...register('gender', { required: true })} />
            <label htmlFor="male">Male</label>
          </div>
          <div className="ma1">
            <input type="radio" id="female" value="Female" {...register('gender')} />
            <label htmlFor="female">Female</label>
          </div>
          <div className="ma1">
            <input type="radio" id="other" value="Other" {...register('gender')} />
            <label htmlFor="other">Other</label>
          </div>
          {errors.gender && <p className="error">Gender is required</p>}
        </div>

        {/* Image Field */}
        <div className="fi3">
          <label htmlFor="img">Image</label>
          <input
            type="file"
            id="img"
            {...register('img', { required: true })}
          />
          {errors.img && <p className="error">Image is required</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
      <img src="https://pngimg.com/d/squid_game_PNG14.png" className='fori2' alt="" />
    </div>
  );
}

export default Trailer;
