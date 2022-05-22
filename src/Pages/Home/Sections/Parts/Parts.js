import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = () => {

    const navigate = useNavigate();
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParts(data)
            })
    }, [])

    const goToPurchase = (id) => {
        navigate(`/purchase/parts/${id}`)
    }
    return (
        <div className='py-20'>
            <div className='max-w-screen-xl mx-auto'>
                <h2 className='text-4xl uppercase font-bold'>our productive parts</h2>
                <div className='grid grid-cols-3 gap-4 text-center'>
                    {parts.map(onePart => <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={onePart.image} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{onePart.name}</h2>
                            <p>{onePart.description.slice(0, 85)}</p>
                            <p className='font-semibold text-info my-4'>Price: ${onePart.price}/unit</p>
                            <div class="card-actions">
                                <button onClick={() => goToPurchase(onePart._id)} class="btn btn-primary btn-sm w-full text-white">Purchase</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Parts;