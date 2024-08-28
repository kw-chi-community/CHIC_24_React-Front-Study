// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>학번 : 2023204052</h2>
            <h2>이름 : 최은비</h2>
            <button onClick={() => navigate('/conv')}>HW2</button>
        </div>
    );
}

export default HomePage;
