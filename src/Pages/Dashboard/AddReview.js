import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../hookes/firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const addUserReview = (e) => {
        e.preventDefault();

        const name = user?.displayName;
        const ratings = e.target.radio.value;
        const review = e.target.review.value;
        const userReview = {
            name,
            ratings,
            review
        }

        fetch('http://localhost:5000/addreview', {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>Add A Review</h2>
            <form onSubmit={addUserReview} className='p-5'>
                <textarea name='review' class="textarea rounded-sm textarea-primary w-full" rows={6} placeholder="Write your review here"></textarea>
                <div className='flex flex-wrap gap-4'>
                    <div class="form-control w-[100px]">
                        <label class="label cursor-pointer">
                            <span class="label-text">One Star</span>
                            <input value="1" type="radio" name="radio" class="radio checked:bg-red-500" checked />
                        </label>
                    </div>
                    <div class="form-control w-[100px]">
                        <label class="label cursor-pointer">
                            <span class="label-text">Two Star</span>
                            <input value="2" type="radio" name="radio" class="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    <div class="form-control w-[100px]">
                        <label class="label cursor-pointer">
                            <span class="label-text">Three Star</span>
                            <input value="3" type="radio" name="radio" class="radio checked:bg-blue-900" checked />
                        </label>
                    </div>
                    <div class="form-control w-[100px]">
                        <label class="label cursor-pointer">
                            <span class="label-text">Four Star</span>
                            <input value="4" type="radio" name="radio" class="radio checked:bg-primary" checked />
                        </label>
                    </div>
                    <div class="form-control w-[100px]">
                        <label class="label cursor-pointer">
                            <span class="label-text">Five Star</span>
                            <input value="5" type="radio" name="radio" class="radio checked:bg-info" checked />
                        </label>
                    </div>
                </div>

                <button className='btn btn-primary btn-md rounded-sm mt-10' type='submit'>Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;