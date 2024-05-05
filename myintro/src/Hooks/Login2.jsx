import React, { useState } from 'react';

const Login2 = () => {
    const [name, setName] = useState('');
    const [empid, setEmpid] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDob] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [allEntries, setAllEntries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            name: name,
            empid: empid,
            contact: contact,
            dob: dob,
            photoUrl: photoUrl,
            gender: gender,
            email: email,
            department: department
        };
        setAllEntries([...allEntries, newEntry]);
        console.log(newEntry);
        // Clear form fields after submission
        setName('');
        setEmpid('');
        setContact('');
        setDob('');
        setPhotoUrl('');
        setGender('');
        setEmail('');
        setDepartment('');
    };

    return (
        <div className="container bg-light rounded my-5 py-4">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h2 className="text-center mb-4">Employee Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="photo" className="form-label">
                                Photo URL:
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                name="photo"
                                id="photo"
                                className="form-control"
                                onChange={(e) => setPhotoUrl(URL.createObjectURL(e.target.files[0]))}
                            />
                            {/* <input type="text" value={image} onChange={(e)=>{setImage(e.target.value}/> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name:
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="name"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="empid" className="form-label">
                                Employee ID:
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="empid"
                                id="empid"
                                className="form-control"
                                value={empid}
                                onChange={(e) => setEmpid(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">
                                Contact:
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="contact"
                                id="contact"
                                className="form-control"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">
                                Date of Birth:
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="dob"
                                id="dob"
                                className="form-control"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">
                                Gender:
                            </label>
                            <select
                                name="gender"
                                id="gender"
                                className="form-control"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">
                                Department:
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="department"
                                id="department"
                                className="form-control"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Contact</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allEntries.map((entry, index) => (
                                <tr key={index}>
                                    <td>
                                        {entry.photoUrl && (
                                            <img src={entry.photoUrl} alt="Employee" className="img-fluid" style={{ maxHeight: '100px' }} />
                                        )}
                                    </td>
                                    {/* Display other fields */}
                                    <td>{entry.name}</td>
                                    <td>{entry.empid}</td>
                                    <td>{entry.contact}</td>
                                    <td>{entry.dob}</td>
                                    <td>{entry.gender}</td>
                                    <td>{entry.email}</td>
                                    <td>{entry.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Login2;