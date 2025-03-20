// A Piece of Code I'm Proud Of: Social Media Application (MERN Stack)
// Overview of the Project
// I built a social media application using the MERN stack (MongoDB, Express.js, React, Node.js). The platform allows users to:
// ✅ Sign up / Log in (User Authentication)
// ✅ Create Posts (Share text, images, videos)
// ✅ Like & Comment on posts
// ✅ Dark Mode for a better user experience
// ✅ Real-time Updates (Using WebSockets for instant notifications)

// Key Technical Highlights
// 1️⃣ User Authentication (JWT & bcrypt.js)

// Used JWT tokens for authentication, ensuring secure user logins.
// Passwords are hashed using bcrypt.js to prevent data leaks.
// 2️⃣ MongoDB Database (Mongoose ORM)

// Designed User, Post, and Comment schemas with relationships between them.
// Used indexes to optimize search and querying speed.
// 3️⃣ React Frontend with Context API & Redux

// Context API for theme management (Dark Mode).
// Redux Toolkit for managing user authentication and post states.
// 4️⃣ Backend API with Express.js & Node.js

// RESTful API endpoints for CRUD operations on posts, users, and comments.
// Middleware for authentication & request validation.



const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const auth = require("../middleware/auth");

// Like/Unlike a post
router.put("/like/:id", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        // Check if the user has already liked the post
        const alreadyLiked = post.likes.includes(req.user.id);
        if (alreadyLiked) {
            post.likes = post.likes.filter((id) => id !== req.user.id);
        } else {
            post.likes.push(req.user.id);
        }

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;


// Why I'm Proud of This Code?
//  Optimized: Instead of multiple database calls, I use array filtering to add/remove likes efficiently.
//  Secure: Uses authentication middleware to ensure only logged-in users can like/unlike.
//  Scalable: Works well even when posts have thousands of likes.