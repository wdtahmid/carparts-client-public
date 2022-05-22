import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const params = useParams();
    const [parts, setParts] = useState();
    const id = params.id;

    useEffect(() => {
        const url = `http://localhost:5000/purchase/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParts(data)
            })
    }, [id])

    return (
        <div className='max-w-screen-xl mx-auto my-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-start items-center'>
                <div className=''><img src={parts?.image} alt="" /></div>
                <div className=''>
                    <h2 className='text-primary font-bold uppercase text-4xl'>{parts?.name}</h2>
                    <h2 className='font-bold uppercase text-2xl mt-2'>Price: ${parts?.price}/unit</h2>
                </div>
            </div>
            <div className='p-10'>
                <h2 className="text-2xl mb-10">Description:</h2>
                <p className='leading-7'>{parts?.description}</p>
            </div>
        </div>
    );
};

export default Purchase;