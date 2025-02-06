# Express.js To-Do List Application

![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

A full-featured To-Do List web application built with **Express.js**, **MongoDB**, and **EJS** templating, styled with Bootstrap for a responsive and modern interface.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks effortlessly.
- **Task Status Toggle**: Mark tasks as completed/incomplete with a single click.
- **Responsive UI**: Built with Bootstrap for seamless use on mobile and desktop.
- **MongoDB Integration**: Persistent storage using MongoDB and Mongoose ODM.
- **EJS Templating**: Dynamic HTML rendering with embedded JavaScript templates.
- **RESTful Routing**: Intuitive API endpoints for task management.

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local instance or cloud URI)
- NPM/Yarn

### Steps
1. **Clone the Repository**:
   bash
   git clone https://github.com/Abram-Emad/Express.js-To-Do-List-Application.git
   cd Express.js-To-Do-List-Application
   

2. **Install Dependencies**:
   bash
   npm install
   

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory with:
   env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   

4. **Start the Server**:
   bash
   npm start
   
   The app will be available at `http://localhost:3000`.

## Usage

### Managing Tasks
- **Add a Task**: Type a task in the input field and click "Add Task".
- **Edit Task**: Click the "Edit" button, update the task text, and save.
- **Delete Task**: Click the "Delete" button to remove a task permanently.
- **Toggle Completion**: Click the checkbox to mark a task as complete/incomplete.

### Routes
| HTTP Method | Route           | Description                  |
|-------------|-----------------|------------------------------|
| GET         | `/`             | Render all tasks             |
| POST        | `/tasks`        | Create a new task             |
| PUT         | `/tasks/:id`    | Update a task by ID           |
| DELETE      | `/tasks/:id`    | Delete a task by ID           |

## Project Structure


- Express.js-To-Do-List-Application/
- ├── models/
- │   └── todoModel.js       # Mongoose schema and model for tasks
- ├── routes/
- │   └── todoRoutes.js      # Express routes for task operations
- ├── views/
- │   ├── index.ejs          # Main page displaying all tasks
- │   └── edit.ejs           # Edit task form
- ├── public/
- │   └── css/
- │       └── styles.css     # Custom CSS styles
- ├── app.js                 # Main Express application setup
- ├── package.json
- ├── .env.example           # Environment variables template
- └── README.md


## Technologies Used

- **Backend**: 
  - [Express.js](https://expressjs.com/) - Web framework for Node.js
  - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- **Frontend**:
  - [EJS](https://ejs.co/) - Embedded JavaScript templating
  - [Bootstrap](https://getbootstrap.com/) - Responsive CSS framework
- **Database**: 
  - [MongoDB](https://www.mongodb.com/) - NoSQL database
- **Tools**:
  - [Nodemon](https://nodemon.io/) - Development server reloading

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code adheres to existing standards and includes relevant tests.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgments

- Thanks to the Express.js and MongoDB communities for documentation support.
 

