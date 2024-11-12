# User Registration Application

This is a CRUD operation user registration application that allows users to:
- View a list of registered users.
- Add a new user with fields for Name, Email, and Date of Birth.
- Update existing user information.
- Delete a user from the list.

The frontend is built using React and styled with Tailwind CSS, while the backend uses Express and MongoDB.


## Technologies Used

### Frontend
- **React** 18.3.1
- **Axios** for API requests
- **React Toastify** for notifications
- **React Icons** for iconography
- **Tailwind CSS** for styling

### Backend
- **Express** 4.21.1 for server-side operations
- **Mongoose** for MongoDB data modeling
- **Dotenv** for environment variable management
- **CORS** to allow cross-origin requests

## Features

- **View Users**: Displays a list of registered users.
- **Add User**: Allows adding new users with fields for name, email, and date of birth.
- **Update User**: Enables editing of an existing user’s information.
- **Delete User**: Allows deletion of a user from the list.
- **Notifications**: Uses toast notifications for successful operations and error handling.
  
## Installation

To run the application locally, you need to set up both frontend and backend.

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

## Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

### Installation (Frontend)

1. **Navigate to the project directory:**
```bash
cd <filename>
```

2. **Install the dependencies:**
```bash
npm install
```
3. **Create a .env file to specify the backend URL**:
 ```bash
   REACT_APP_BACKEND_URL=http://localhost:4000
```
   
5. **Run the application:**
```bash
npm start
```
5. **Open your browser and visit:**
```bash
http://localhost:3000
```

### Installation (Backend)

To run this application locally, follow these steps:


1. **Navigate to the project directory:**
```bash
 cd backend
```

2. **Install the dependencies:**
```bash
npm install
```
3. **Create a .env file for environment variables:**
```bash
MONGO_URI=<your-mongo-db-connection-string>
PORT=5000
```
   
4. **Run the application:**
```bash
npm run server
```
5. **Open your browser and visit:**
```bash
http://localhost:4000
```

### CRUD Functionality

**Add a New User**
- Go to the form labeled Add New User.
- Fill in the fields: Name, Email, and Date of Birth.
- Click Add User. A toast notification will confirm success or alert if an error occurs.

**View Users**
- The list of registered users is displayed on the main screen under Registered Users.
- User information includes name, email, and date of birth.

 **Edit an Existing User**
- Click the Edit icon next to a user in the list.
- The form fields will be populated with the user’s information.
- Update the details and click Update User.

**Delete a User**
- Click the Delete icon next to a user in the list.
- Confirm deletion through the toast notification.

**Error Handling**
- Duplicate Emails: Users cannot be registered with duplicate emails. If attempted, a toast notification will indicate the error.
- Field Validation: All fields are required to add or edit a user, and toast notifications will alert for missing information.


## Contact
Yogeshwar Singh - yogeshwaredu198@gmail.com


