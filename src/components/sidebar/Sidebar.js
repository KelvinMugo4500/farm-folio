import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaTachometerAlt, FaBook, FaChartLine, FaQuestionCircle, FaBars, FaBox, FaGraduationCap } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Detect if the screen width is less than 768px
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Toggle the sidebar when the button is clicked
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Collapse the sidebar when the screen is mobile
    useEffect(() => {
        setIsCollapsed(isMobile);
    }, [isMobile]); // Dependency on isMobile to re-evaluate when screen size changes

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/dashboard">
                        <FaTachometerAlt />
                        {!isCollapsed && <span>Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/notebooks">
                        <FaBook />
                        {!isCollapsed && <span>Notebooks</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/analytics">
                        <FaChartLine />
                        {!isCollapsed && <span>Analytics</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/inventory">
                        <FaBox  />
                        {!isCollapsed && <span>My Inventory</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/training">
                        <FaGraduationCap  />
                        {!isCollapsed && <span>Training</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/help">
                        <FaQuestionCircle />
                        {!isCollapsed && <span>Help</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
