import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        async function getBlogs() {
            const response = await axios.get('blog.json')
            setBlogs(response.data);

        } getBlogs();

    }, [])

    return (
        <>
            <div className='py-20 bg-info text-center text-white'>
                <h2 className='text-6xl uppercase drop-shadow-xl font-bold'>Blogs</h2>
            </div>

            <div className='py-24'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {blogs?.map(blog =>
                        <div key={blog.id} class="card bg-base-100 shadow-xl">
                            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                            <div class="card-body justify-between">
                                <h2 class="card-title">{blog?.title}</h2>
                                {/* <p>{(blog.post.split(' ', 18).join(' '))}</p> */}
                                <div class="card-actions justify-end">
                                    <button className='text-white btn btn-primary rounded-none btn-sm'><Link to={`/blogs/${blog.id}`}>Read More</Link></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Blogs;