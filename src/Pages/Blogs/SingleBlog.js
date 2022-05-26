import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const param = useParams();
    const id = param.blogId;
    const [blog, setBlog] = useState({});

    useEffect(() => {
        async function getSingleBlog() {
            const { data } = await axios.get(`https://cryptic-plateau-83425.herokuapp.com/blogs/${id}`)
            setBlog(data)
        }
        getSingleBlog();
    }, [id]);

    const { title, image, post } = blog;

    return (
        <>
            <div className='py-20 bg-info text-white'>
                <div className='max-w-screen-md mx-auto'>
                    <h2 className='text-3xl uppercase drop-shadow-xl font-bold'>{title}</h2>
                </div>
            </div>
            <div className='max-w-screen-md mx-auto mb-10'>
                <div className='my-8'><img className='w-full' src={image} alt="" /></div>
                <p className='text-xl leading-8'>{post}</p>
            </div>
        </>
    );
};

export default SingleBlog;