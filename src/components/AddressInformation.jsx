import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddressInformation({ onSave }) {
    const [addressData, setAddressData] = useState({
        country: '',
        state: '',
        city: '',
        address1: '',
        address2: '',
        nearbyLocation: '',
        zipcode: ''
    });
    const [userAddress, setUserAddress] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserAddress([...userAddress, { addressData }])
        if (!addressData.country || !addressData.state || !addressData.city || !addressData.zipcode) {
            Swal.fire({
                title: "Please fill in all required fields",
                icon: "error"
            });
            return;
        }

        localStorage.setItem('registeredUser', JSON.stringify(userAddress))
        Swal.fire({
            title: "Address Saved",
            icon: "success"
        });
        onSave();
    };

    return (
        <div className="container mt-4">
            <h2>Address</h2>
            <form className="form-row p-3 shadow-sm bg-light rounded" onSubmit={handleSubmit}>
                <div className="form-row p-2">
                    <div className="form-group col-md-6">
                        <label htmlFor="country">Country</label>
                        <select name="country" className="form-control" value={addressData.country} onChange={handleChange} required>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">United States</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="state">State</label>
                        <select name="state" className="form-control" value={addressData.state} onChange={handleChange} required>
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Goa">Goa</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <select name="city" className="form-control" value={addressData.city} onChange={handleChange} required>
                            <option value="">Select City</option>
                            <option value="Pune">Pune</option>
                            <option value="Kolhapur">Kolhapur</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address1">Address 1</label>
                        <input type="text" name="address1" className="form-control" placeholder="Enter Address 1" value={addressData.address1} onChange={handleChange} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address2">Address 2</label>
                        <input type="text" name="address2" className="form-control" placeholder="Enter Address 2" value={addressData.address2} onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="nearbyLocation">Nearby Location</label>
                        <input type="text" name="nearbyLocation" className="form-control" placeholder="Enter Nearby Location" value={addressData.nearbyLocation} onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" name="zipcode" className="form-control" placeholder="Enter Zipcode" value={addressData.zipcode} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group col-md-12 text-center mt-3 ">
                    <button type="submit" className="btn btn-primary col-md-3 mb-3 mb-md-0">SAVE</button>
                </div>
            </form>
        </div>
    );
}

export default AddressInformation;
