import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    let [input, setInput] = useState("");

    function handleJoin() {
        if (input.trim()) {
            navigate(`/room/${input.trim()}`);
        } else {
            alert("Please enter a valid Room ID!");
        }
    }

    return (
        <div id='home'>
            <h1>🔵 Join a Video Room</h1>
            <input type="text" placeholder='Enter Room ID' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleJoin}>Join Now</button>
            
            {/* ✅ Footer with Social Links */}
            <footer>
                <p>&copy; 2025 Kanhaiya Kumar Video Chat. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://github.com/kanhaiyakumar11" target="_blank">GitHub</a>
                    <a href="https://www.instagram.com/prince_kanha05?igsh=ODZxcTNhaTFnbDVk" target="_blank">Instagram</a>
                    <a href="https://kanhaiya-portfolio-vf06.onrender.com/" target="_blank">My Portfolio</a>
                    <a href="https://www.linkedin.com/in/kanhaiya-kumar-184166275/" target="_blank">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
