import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import FinancialManagement from './components/FinancialManagement';

function App() {
    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'FinancialManagement':
                return <FinancialManagement />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="layout">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="content">
                <Header title="Student Management" />
                {renderComponent()}
            </div>
        </div>
    );
}

export default App;
