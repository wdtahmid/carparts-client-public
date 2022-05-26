import React from 'react';
import { useQuery } from 'react-query';

const Reviews = () => {

    const { isLoading, error, data: reviews } = useQuery('profileInfo', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    console.log(reviews);
    return (

        <div className='pb-32'>
            <div className='max-w-screen-xl mx-auto text-info text-center px-4'>
                <h2 className='text-4xl uppercase font-bold mb-10'>Buyer Feedback</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        reviews.map(review => <div key={review._id} class="card w-full bg-info text-black">
                            <div class="card-body">
                                <h2 className="text-left"><span>{review?.name}</span></h2>
                                <p className='text-left'>{review?.review}</p>
                                <h2 className="text-right"><span>Ratings: {review?.ratings} stars</span></h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Reviews;