# TechBlog

TechBlog is a web application where users can publish their tech-related blog posts, comment on other users' posts, and interact with the tech community.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- User authentication: Users can sign up, log in, and log out securely to access the application.
- Create and publish blog posts: Users can create, edit, and publish their own tech-related blog posts.
- Comment on blog posts: Users can comment on blog posts to engage in discussions and share their thoughts.
- Edit and delete blog posts/comments: Users have the ability to edit and delete their own blog posts and comments.
- Dashboard: Users can access a personalized dashboard where they can view and manage their own blog posts.
- Homepage: The homepage displays the most recent blog posts from all users, allowing users to discover new content.
- Responsive design: The application is designed to be responsive and compatible with different devices and screen sizes.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- Handlebars (templating engine)
- MySQL (database)
- HTML/CSS
- JavaScript
- Bootstrap (CSS framework)

## Installation

1. Clone the repository: `git clone https://github.com/Vlad1slav86/Tech-Blog.git`
2. Navigate to the project directory: `cd Tech-Blog`
3. Install the dependencies: `npm install`
4. Set up the database:
   - Create a MySQL database.
   - Update the database configuration in the `.env` file.
   - Run the database migrations: `npx sequelize-cli db:migrate`
   - (Optional) Seed the database with sample data: `npx sequelize-cli db:seed:all`
5. Start the application: `npm start`
6. Open your browser and visit: `http://localhost:3000`

## Usage

- Register a new account or log in with your existing credentials.
- Create a new blog post by clicking on the "New Post" button in the navigation bar.
- View and interact with the latest blog posts on the homepage.
- Click on a blog post to view its details, including comments.
- Leave comments on blog posts by filling out the comment form.
- Access your personalized dashboard by clicking on the "Dashboard" link in the navigation bar.
- Edit or delete your own blog posts and comments from the dashboard.

## Contributing

Contributions are welcome! If you'd like to contribute to the TechBlog project, please create a pull request on GitHub.

## Contact

For any inquiries or questions, you can reach me at vladkb@yahoo.com.

## Screenshots

Here are some screenshots of the TechBlog application:

![Screenshot 1](/public/images/Main%20Page.png)
*Main Page*

![Screenshot 2](/public/images/Sign%20Up%20Page.png)
*Sign Up Paige*

## License

This project is licensed under the [MIT License](LICENSE).
