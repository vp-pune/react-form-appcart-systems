import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

function UserInformation({ onSave }) {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    gender: 'Male',
    hobby: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        icon: "error"
      });
      return;
    }

    try {
      console.log('Sending data to server:', userData); // Debug log
      const response = await axios.post('http://localhost:5000/userAPI', userData);

      console.log('Server response:', response.data); // Debug log

      Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success"
      });

      if (onSave) {
        onSave(userData);
      }

      // Clear the form after successful submission
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        gender: 'Male',
        hobby: ''
      });

    } catch (error) {
      console.error('Error saving data', error.response || error.message || error);
      Swal.fire({
        title: "Error!",
        text: "There was an error saving your data.",
        icon: "error"
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>User Information</h2>
      <form onSubmit={handleSubmit} className="form-row p-3 shadow bg-light rounded">
        {/* Form Fields */}
        <div className="form-group col-md-6">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            name='firstName'
            value={userData.firstName}
            type="text"
            className="form-control"
            placeholder='Enter First Name'
            id="firstName"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            name='lastName'
            value={userData.lastName}
            type="text"
            className="form-control"
            placeholder='Enter Last Name'
            id="lastName"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={handleChange}
            name='email'
            value={userData.email}
            type="email"
            className="form-control"
            placeholder='Enter Email'
            id="email"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="contact">Contact Number</label>
          <input
            onChange={handleChange}
            name='contact'
            value={userData.contact}
            type="text"
            className="form-control"
            placeholder='Enter Contact Number'
            id="contact"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            name='password'
            value={userData.password}
            type="password"
            className="form-control"
            placeholder='Enter Password'
            id="password"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            name='confirmPassword'
            value={userData.confirmPassword}
            type="password"
            className="form-control"
            placeholder='Confirm Password'
            id="confirmPassword"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label>Gender</label>
          <div className="d-flex">
            <div className="custom-control custom-radio mr-3">
              <input
                onChange={handleChange}
                type="radio"
                id="male"
                name="gender"
                value="Male"
                className="custom-control-input"
                checked={userData.gender === 'Male'}
              />
              <label className="custom-control-label" htmlFor="male">Male</label>
            </div>
            <div className="custom-control custom-radio">
              <input
                onChange={handleChange}
                type="radio"
                id="female"
                name="gender"
                value="Female"
                className="custom-control-input"
                checked={userData.gender === 'Female'}
              />
              <label className="custom-control-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="hobby">Hobby</label>
          <select
            onChange={handleChange}
            name="hobby"
            value={userData.hobby}
            id="hobby"
            className="form-control"
            required >
            <option value="">Select a Hobby</option>
            <option value="coding">Coding</option>
            <option value="cricket">Cricket</option>
            <option value="reading">Reading</option>
            <option value="travelling">Travelling</option>
            <option value="trekking">Trekking</option>
          </select>
        </div>
        <div className="form-group col-md-12 text-center mt-3">
          <button type="submit" className="btn btn-primary col-md-3 mb-3 mb-md-0">SAVE</button>
        </div>
      </form>
    </div>
  );
}

export default UserInformation;
