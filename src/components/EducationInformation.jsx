import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const EducationForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    educationType: '',
    passingYear: '',
    institution: '',
    percentage: ''
  });
  const [submittedData, setSubmittedData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSave = () => {
    if (!formData.educationType || !formData.passingYear || !formData.institution || !formData.percentage) {
      Swal.fire({
        title: "Please fill in all required fields before saving",
        icon: "error"
      });
      return;
    }

    // Save current form data to the submittedData array
    setSubmittedData(prevData => [...prevData, formData]);

    // Reset form fields
    setFormData({
      educationType: '',
      passingYear: '',
      institution: '',
      percentage: ''
    });

    // Display SweetAlert
    Swal.fire({
      title: "Education Details Saved",
      icon: "success"
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current form data to the submittedData array before submitting
    setSubmittedData(prevData => [...prevData, formData]);

    // Display SweetAlert
    Swal.fire({
      title: "Education Details Saved & Form Submitted",
      icon: "success"
    });

    // Reset form fields
    setFormData({
      educationType: '',
      passingYear: '',
      institution: '',
      percentage: ''
    });

    // Call the onSave function to navigate or perform other actions
    onSave();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Education Information</h2>
      <form className="form-group p-3 mb-4 rounded shadow" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="educationType">Education Type</label>
            <select
              id="educationType"
              className="form-control"
              value={formData.educationType}
              onChange={handleChange}
              required
            >
              <option value="">Select Education Type</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Graduation">Graduation</option>
              <option value="PostGraduation">PostGraduation</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="passingYear">Passing Year</label>
            <input
              type="text"
              id="passingYear"
              className="form-control"
              placeholder="Enter Passing Year"
              value={formData.passingYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="institution">School/College</label>
            <input
              type="text"
              id="institution"
              className="form-control"
              placeholder="Enter School/College"
              value={formData.institution}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="percentage">Percentage</label>
            <input
              type="text"
              id="percentage"
              className="form-control"
              placeholder="Enter Percentage"
              value={formData.percentage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-12 text-center my-3 mb-5">
            <button type="button" className="mb-3 mb-md-0 btn btn-secondary col-md-3 mr-3" onClick={handleSave}>SAVE</button>
            <button type="submit" className="btn btn-primary col-md-3">SUBMIT</button>
          </div>
        </div>
      </form>

      {submittedData.length > 0 && (
        <div className="submitted-data mt-4 p-3 border rounded">
          <h3>Submitted Data</h3>
          {submittedData.map((data, index) => (
            <div key={index} className="mb-2">
              <p><strong>Education Type:</strong> {data.educationType}</p>
              <p><strong>Passing Year:</strong> {data.passingYear}</p>
              <p><strong>School/College:</strong> {data.institution}</p>
              <p><strong>Percentage:</strong> {data.percentage}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
