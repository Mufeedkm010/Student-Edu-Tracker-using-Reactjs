import React from 'react';
import { FaUserGraduate, FaMoneyCheckAlt, FaClipboardCheck, FaChartBar, FaClipboardList } from 'react-icons/fa';
import logo from '../logo/hicet.png';

const Sidebar = ({ setActiveComponent }) => {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav>
                <ul>
                    <li onClick={() => setActiveComponent('Dashboard' )}>
                        <FaUserGraduate style={{ marginRight: '10px' }} />
                        Student Management
                    </li>
                    <li onClick={() => setActiveComponent('FinancialManagement')}>
                        <FaMoneyCheckAlt style={{ marginRight: '10px' }} />
                        Financial Management
                    </li>
                    <li onClick={() => setActiveComponent('Attendance')}>
                        <FaClipboardCheck style={{ marginRight: '10px' }} />
                        Attendance
                    </li>
                    <li onClick={() => setActiveComponent('Analytics')}>
                        <FaChartBar style={{ marginRight: '10px' }} />
                        Analytics
                    </li>
                    <li onClick={() => setActiveComponent('Reports')}>
                        <FaClipboardList style={{ marginRight: '10px' }} />
                        Reports
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
