import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../hookes/firebase.init';

const AddToProfile = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/addtoprofile?email=${email}`;

    const handleAddToProfile = (e) => {
        e.preventDefault();

        const education = e.target.education.value;
        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const social = e.target.social.value;

        const profileInfo = {
            education, location, phone, social
        }

        fetch(url, {
            'method': 'PUT',
            'headers': {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profileInfo)
        })

        console.log(profileInfo);
    }


    return (
        <div className='p-5'>
            <h2 className='text-xl text-primary mt-3 capialize font-semibold mb-4'>Add Your Info</h2>
            <form onSubmit={handleAddToProfile} className='flex flex-col gap-y-5'>
                <input name='education' type="text" placeholder="Add your education" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input name='location' type="text" placeholder="Add your address" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input name='phone' type="text" placeholder="Add your phone" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input name='social' type="text" placeholder="Add your social" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <textarea className="input input-bordered rounded-none input-primary w-full max-w-xs" name='bio' row='5' placeholder='Bio'></textarea>
                <input className='btn btn-default rounded-none w-fit' type="submit" value="Add To Profile" />
            </form>
        </div>
    );
};

export default AddToProfile;