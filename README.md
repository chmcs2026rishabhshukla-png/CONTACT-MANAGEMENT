Contact Management System (MERN Stack)

Project Overview

The Contact Management System is a full-stack web application built using the MERN stack.
It allows users to manage contacts by adding, viewing, updating, searching, filtering, and deleting contact information.

This project demonstrates full-stack development using modern JavaScript technologies.


Technologies Used

Frontend
	•	React.js
	•	Vite
	•	Tailwind CSS
	•	DaisyUI
	•	Axios
	•	React Router
	•	React Hot Toast
	•	Lucide Icons

Backend
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose



 Features

Contact Management
	•	Add new contacts
	•	Edit existing contacts
	•	Delete contacts
	•	View all contacts

Search and Filter
	•	Search contacts by name
	•	Search contacts by phone number
	•	Filter contacts by category

UI Features
	•	Responsive user interface
	•	Toast notifications for actions
	•	Attractive card-based contact display



Project Structure

Frontend

frontend/
src/
components/
ContactCard.jsx
ContactNotFound.jsx
Navbar.jsx

pages/
HomePage.jsx
CreateContact.jsx
EditContact.jsx

lib/
axios.js
utils.js

App.jsx
main.jsx

Backend

backend/
models/
Contact.js

routes/
contactRoutes.js

controllers/
contactController.js

server.js

.env



🔌 API Endpoints

GET /contacts
Fetch all contacts

POST /contacts
Create a new contact

PUT /contacts/:id
Update contact information

DELETE /contacts/:id
Delete a contact



🗄 Database Schema

Each contact contains the following fields:
	•	name
	•	phone
	•	email
	•	address
	•	category
	•	favourite
	•	createdAt

Example document:

{
“name”: “Rahul Sharma”,
“phone”: “9876543210”,
“email”: “rahul@example.com”,
“address”: “Delhi”,
“category”: “Friend”,
“favourite”: true
}



How to Run the Project

1️Clone the repository

git clone 

cd project-folder



2️ Install backend dependencies

cd backend

npm install

⸻

3️ Create environment file

Create .env file inside backend folder:

MONGO_URI=your_mongodb_connection_string

PORT=5000

⸻

4️Run backend server

npm run dev

⸻

5️ Install frontend dependencies

cd ../frontend

npm install

⸻

6️ Run frontend

npm run dev

⸻

 Application Workflow
	1.	User interacts with the React frontend.
	2.	Axios sends requests to the Express API.
	3.	Express processes the request.
	4.	Data is stored or retrieved from MongoDB.
	5.	Response is sent back to the frontend and displayed.



 Learning Objectives

This project helped in understanding:
	•	Full stack MERN development
	•	REST API development
	•	MongoDB database operations
	•	React component architecture
	•	State management with hooks
	•	API communication using Axios



 Author

Rishabh Shukla


 License

This project is for educational purposes.
