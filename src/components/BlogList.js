import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://glorious-yodel-g44545vjg7w2v4g4-8000.app.github.dev/api/blogs/')
            .then((response) => {
                console.log('Data fetched:', response.data); // Debugging line
                setBlogs(response.data); // Update state
            })
            .catch((error) => {
                console.error('Error fetching data:', error); // Log errors
            });
    }, []);

    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <small>{blog.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
