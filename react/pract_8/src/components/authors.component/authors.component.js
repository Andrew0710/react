import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuthors, getPostsByAuthorId } from '../../services/blogService';
import  './authors.component.css'; 

const AuthorRow = ({ author }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsByAuthorId(author.id).then(data => {
            setPosts(data);
        });
    }, [author.id]);

    return (
        <div className="author-row">
            <div className="author-info">
                <div className="avatar-placeholder"></div>
                <h3>{author.name}</h3>
                <p>{author.email}</p>
            </div>

            <div className="author-posts-list">
                {posts.map(post => (
                    <div key={post.id} className="mini-post-card">
                        <div className="mini-post-title">{post.title}</div>
                        <Link to={`/posts/${post.id}`} className="open-btn">
                            open
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const AuthorsComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors().then(data => setAuthors(data));
    }, []);

    return (
        <div className="authors-page">
            <h2>Authors page</h2>
            <div className="authors-container">
                {authors.map(author => (
                    <AuthorRow key={author.id} author={author} />
                ))}
            </div>
        </div>
    );
};