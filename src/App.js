import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// These lines declare several state variables using the useState hook. 
// These variables will manage the form fields and their values, user-submitted data, and other UI-related states.
const ResumeForm = () => {
  const [educationFields, setEducationFields] = useState([{ institute: '', year: '', designation: '' }]);
  const [experienceFields, setExperienceFields] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [viewDetails, setViewDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  // This is a callback function that handles the change event for the education fields. 
  // It takes the index of the field being changed and the event object as parameters. 
  // It extracts the name and value from the event target and updates the respective field in the educationFields state.
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...educationFields];
    fields[index][name] = value;
    setEducationFields(fields);
  };

  // This function adds a new set of education fields with empty values to the educationFields state array.
  const handleAddEducation = () => {
    setEducationFields([...educationFields, { institute: '', year: '', designation: '' }]);
  };

  // Similar to handleEducationChange, this function handles the change event for the experience fields 
  // and updates the experienceFields state accordingly.
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...experienceFields];
    fields[index][name] = value;
    setExperienceFields(fields);
  };

  // This function adds a new set of experience fields with empty values to the experienceFields state array.
  const handleAddExperience = () => {
    setExperienceFields([...experienceFields, { company: '', year: '', designation: '' }]);
  };

  // This function handles the change event for the skill input field 
  // and updates the skillInput state with the new value.
  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  // This function adds a new skill to the skills state array. 
  // It checks if the skill input has a non-empty value before adding it. 
  // After adding the skill, it resets the skillInput state to an empty string.
  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  // This function sets the viewDetails state to true, 
  // indicating that the user wants to view the details after submitting the form.
  const handleViewDetails = () => {
    setViewDetails(true);
  };

  // This function handles the change event for the form input fields (name, email, address, phone) and 
  // updates the respective field in the formData state.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // This function is called when the form is submitted. 
  // It prevents the default form submission behavior, sets the submittedData state to the current form data, 
  // and logs the form data to the console.
  const handleSubmitResume = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log('Form Submitted:', formData);
  };

  // The return statement returns the JSX markup for rendering the form and its components.
  return (
    <div className="container">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmitResume}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="mt-4">
          <h4>Education</h4>
          {educationFields.map((field, index) => (
            <div key={index}>
              <div className="form-group">
                <label>Institute:</label>
                <input
                  type="text"
                  className="form-control"
                  name="institute"
                  value={field.institute}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Year:</label>
                <input
                  type="text"
                  className="form-control"
                  name="year"
                  value={field.year}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Designation/Degree:</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={field.designation}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={handleAddEducation}>
            Add More
          </button>
        </div>
        <div className="mt-4">
          <h4>Experience</h4>
          {experienceFields.map((field, index) => (
            <div key={index}>
              <div className="form-group">
                <label>Company:</label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  value={field.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Year:</label>
                <input
                  type="text"
                  className="form-control"
                  name="year"
                  value={field.year}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Designation:</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={field.designation}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={handleAddExperience}>
            Add More
          </button>
        </div>
        <div className="mt-4">
          <h4>Skills</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a skill"
              value={skillInput}
              onChange={handleSkillInputChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={handleAddSkill}>
            Add Skill
          </button>
          <ul className="mt-2">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary" onClick={handleViewDetails}>
            View Details
          </button>
          <button className="btn btn-success ml-2" type="submit">
            Submit
          </button>
        </div>
      </form>
      {viewDetails && (
        <div className="mt-4">
          <h4>View Details</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{submittedData && submittedData.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{submittedData && submittedData.email}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{submittedData && submittedData.address}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{submittedData && submittedData.phone}</td>
              </tr>
              <tr>
                <td>Education:</td>
                <td>
                  {educationFields.map((field, index) => (
                    <div key={index}>
                      <div>Institute: {field.institute}</div>
                      <div>Year: {field.year}</div>
                      <div>Designation/Degree: {field.designation}</div>
                    </div>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>
                  {experienceFields.map((field, index) => (
                    <div key={index}>
                      <div>Company: {field.company}</div>
                      <div>Year: {field.year}</div>
                      <div>Designation: {field.designation}</div>
                    </div>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Skills:</td>
                <td>
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;

