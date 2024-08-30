import React from 'react';
import { FaUserGraduate, FaBookOpen, FaUsers, FaEnvelope, FaHospital } from 'react-icons/fa';
import { MdClass, MdOutlineCheckCircle } from 'react-icons/md'; 

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="stats">
                <div className="stat-box">
                    <FaUserGraduate size={30} />
                    <h2>Regular Students</h2>
                    <p>Total: 8</p>
                </div>
                <div className="stat-box">
                    <FaBookOpen size={30} />
                    <h2>Remedial Students</h2>
                    <p>Total: 13</p>
                </div>
                <div className="stat-box">
                    <FaUsers size={30} />
                    <h2>In Paid Clubs</h2>
                    <p>Total: 0</p>
                </div>
            </div>

            <div className="menu">
                <div className="menu-item">
                    <FaUserGraduate size={40} />
                    <p>Regular Enrollment</p>
                </div>
                <div className="menu-item">
                    <FaBookOpen size={40} />
                    <p>Remedial Enrollment</p>
                </div>
                <div className="menu-item">
                    <FaUsers size={40} />
                    <p>Club Management</p>
                </div>
                <div className="menu-item">
                    <MdClass size={40} />
                    <p>Classroom Management</p>
                </div>
                <div className="menu-item">
                    <FaEnvelope size={40} />
                    <p>SMS/EMAIL</p>
                </div>
                <div className="menu-item">
                    <MdOutlineCheckCircle size={40} />
                    <p>Attendance</p>
                </div>
                <div className="menu-item">
                    <FaHospital size={40} />
                    <p>Clinic</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
