import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notebooks.css';

const NotebookCards = ({ image, title, navigateTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
        </div>
    );
};

export default NotebookCards;