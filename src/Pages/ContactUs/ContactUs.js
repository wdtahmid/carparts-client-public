import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className='py-20 bg-info text-center text-white'>
                <h2 className='text-6xl uppercase drop-shadow-xl font-bold'>Contact Us</h2>
            </div>
            <div className='py-32 p-4'>
                <h2 className='mb-10 text-info uppercase text-4xl font-bold text-center'>Reach Us For Something Special</h2>
                <div className='max-w-screen-sm mx-auto shadow-xl rounded-lg'>
                    <form className='p-10 flex flex-col gap-y-4'>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4'>
                            <div class="form-control w-full">
                                <input
                                    type="text"
                                    placeholder="Your First Name"
                                    class="input input-bordered w-full border-info" />
                            </div>
                            <div class="form-control w-full">
                                <input
                                    type="text"
                                    placeholder="Your Last Name"
                                    class="input input-bordered w-full border-info" />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4'>
                            <div class="form-control w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="input input-bordered w-full border-info" />
                            </div>
                            <div class="form-control w-full">
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    class="input input-bordered w-full border-info" />
                            </div>
                        </div>
                        <div class="form-control w-full">
                            <textarea className='w-full input input-bordered h-44 border-info' name="message"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder='Your Message'>

                            </textarea>
                        </div>
                        <button className='btn btn-primary w-full text-white rounded-none'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;