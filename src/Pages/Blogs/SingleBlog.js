import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const param = useParams();
    console.log(param.blogId);
    return (
        <div>
            <h2>Blog id: {param.blogId}</h2>
        </div>
    );
};

export default SingleBlog;