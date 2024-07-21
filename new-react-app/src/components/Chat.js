import React, { useState, useEffect } from 'react';
import './chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState('User1'); // Default to User1

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const message = { text: newMessage, user };
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    return (
        <div className="chat-container">
            <h1>My Chat Application</h1>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.user}`}>
                        <strong>{msg.user}: </strong>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <div className="message-input">
                <select value={user} onChange={handleUserChange}>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                </select>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
