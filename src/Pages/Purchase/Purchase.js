import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const params = useParams();
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParts(data)
            })
    }, [])
    return (
        <div>
            <h2>Product ID: {params.id}</h2>
        </div>
    );
};

export default Purchase;