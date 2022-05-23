import React from 'react';

const AddToProfile = () => {

    

    return (
        <div className='p-5'>
            <h2 className='text-xl text-primary mt-3 capialize font-semibold mb-4'>Add Your Info</h2>
            <form className='flex flex-col gap-y-5'>
                <input name='educaion' type="text" placeholder="Add your education" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input name='location' type="text" placeholder="Add your location" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input name='phone' type="text" placeholder="Add your phone" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input name='social' type="text" placeholder="Add your social" className="input input-bordered rounded-none input-primary w-full max-w-xs" />
                <input className='btn btn-default rounded-none w-fit' type="submit" value="Add To Profile" />
            </form>
        </div>
    );
};

export default AddToProfile;