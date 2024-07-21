# New Chat 

## Overview

The New Chat Application is a full-stack web application designed to demonstrate capabilities in both front-end and back-end development. The application allows users to send interest messages to other users. The recipient can then accept or reject the interest. If accepted, both users can chat with each other. This project utilizes Django for the backend and React for the frontend.

## Features

- User authentication (login and registration)
- Sending and receiving interest messages
- Accepting and rejecting interest messages
- Real-time chat functionality
- Responsive and aesthetically pleasing UI
- Black and yellow color scheme for a vibrant and modern look

## Technologies Used

- **Backend**: Django
- **Frontend**: React
- **REST API**: Django REST Framework
- **Styling**: CSS
- **CORS Handling**: django-cors-headers
- **Module Bundler**: Webpack

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js and npm

python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

cd new-react-app

npm install

npm start


Running the Application
Backend: Open your browser and navigate to http://localhost:8000.
Frontend: Open your browser and navigate to http://localhost:3000.

Usage
Register a new user or log in if you already have an account.
Send interest messages to other users.
Accept or reject interest messages from other users.
Chat with users who have accepted your interest messages.
