import React, { useState } from 'react';
import axios from 'axios'

// const ReferralForm = () => {
//     const [formData, setFormData] = useState({
//         referrerName: '',
//         referrerEmail: '',
//         referrerPhone: '',
//         relationship: '',
//         refereeName: '',
//         refereeEmail: '',
//         refereePhone: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     // const handleFileChange = (e) => {
//     //     setFormData((prevData) => ({
//     //         ...prevData,
//     //         resume: e.target.files[0],
//     //     }));
//     // };

//     const handleReferralFormSubmit = async (e) => {
//         e.preventDefault();
//         try {

//             const config = {
//                 headers: { "Content-Type": "multipart/form-data" },
//                 withCredentials: true
//             };

//             const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/referral`, postData, config);



//         } catch (error) {
//             console.log("error occured while submitting form", error.message);
//         }

//     };

//     return (
//         // <div id='rfForm' className="flex h-screen">
//         <div className="m-auto">
//             <div>
//                 <div className="mt-5 bg-white rounded-lg">
//                     <form onSubmit={handleReferralFormSubmit}>
//                         <div className="px-5 py-5">
//                             <h2 className="text-2xl font-semibold leading-none mb-4">Referrer Information</h2>
//                             <input
//                                 name="referrerName"
//                                 value={formData.referrerName}
//                                 onChange={handleChange}
//                                 placeholder="Name"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                                 required
//                             />
//                             <input
//                                 name="referrerEmail"
//                                 type="email"
//                                 value={formData.referrerEmail}
//                                 onChange={handleChange}
//                                 placeholder="Email"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                                 required
//                             />
//                             <input
//                                 name="referrerPhone"
//                                 value={formData.referrerPhone}
//                                 onChange={handleChange}
//                                 placeholder="Phone Number"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                             />
//                             <input
//                                 name="relationship"
//                                 value={formData.relationship}
//                                 onChange={handleChange}
//                                 placeholder="Relationship to Referee"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                             />

//                             <h2 className="text-2xl font-semibold leading-none mt-6 mb-4">Referee Information</h2>
//                             <input
//                                 name="refereeName"
//                                 value={formData.refereeName}
//                                 onChange={handleChange}
//                                 placeholder="Name"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                                 required
//                             />
//                             <input
//                                 name="refereeEmail"
//                                 type="email"
//                                 value={formData.refereeEmail}
//                                 onChange={handleChange}
//                                 placeholder="Email"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                                 required
//                             />
//                             <input
//                                 name="refereePhone"
//                                 value={formData.refereePhone}
//                                 onChange={handleChange}
//                                 placeholder="Phone Number"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                             />

//                             <h2 className="text-2xl font-semibold leading-none mt-6 mb-4">Additional Information</h2>
//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 placeholder="Referral Message"
//                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
//                             ></textarea>

//                             <button
//                                 type="submit"
//                                 className="w-full flex justify-center items-center px-5 py-2.5 mt-4 font-medium tracking-wide text-white capitalize bg-[#1A73E8] rounded-md hover:bg-[#679bde] focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     height="20"
//                                     width="20"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="w-6 h-6 mr-2"
//                                 >
//                                     <path d="M22 4L12 14.01l-3-3"></path>
//                                     <path d="M9 17L2 10"></path>
//                                 </svg>
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         // </div>
//     );
// };

// export default ReferralForm;



const ReferralForm = () => {
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        referrerPhone: '',
        relationship: '',
        refereeName: '',
        refereeEmail: '',
        refereePhone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.referrerName) newErrors.referrerName = 'Referrer name is required';
        if (!formData.referrerEmail) newErrors.referrerEmail = 'Referrer email is required';
        if (!formData.refereeName) newErrors.refereeName = 'Referee name is required';
        if (!formData.refereeEmail) newErrors.refereeEmail = 'Referee email is required';
        return newErrors;
    };

    const handleReferralFormSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            };
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/referral`, formData, config);
            console.log(data);
        } catch (error) {
            console.log("error occurred while submitting form", error.message);
        }
    };

    return (
        <div className="m-auto">
            <div>
                <div className="mt-5 bg-white rounded-lg">
                    <form onSubmit={handleReferralFormSubmit}>
                        <div className="px-5 py-5">
                            <h2 className="text-2xl font-semibold leading-none mb-4">Referrer Information</h2>
                            <input
                                name="referrerName"
                                value={formData.referrerName}
                                onChange={handleChange}
                                placeholder="Name"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                required
                            />
                            {errors.referrerName && <p className="text-red-500 text-sm">{errors.referrerName}</p>}
                            <input
                                name="referrerEmail"
                                type="email"
                                value={formData.referrerEmail}
                                onChange={handleChange}
                                placeholder="Email"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                required
                            />
                            {errors.referrerEmail && <p className="text-red-500 text-sm">{errors.referrerEmail}</p>}
                            <input
                                name="referrerPhone"
                                value={formData.referrerPhone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                            <input
                                name="relationship"
                                value={formData.relationship}
                                onChange={handleChange}
                                placeholder="Relationship to Referee"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />

                            <h2 className="text-2xl font-semibold leading-none mt-6 mb-4">Referee Information</h2>
                            <input
                                name="refereeName"
                                value={formData.refereeName}
                                onChange={handleChange}
                                placeholder="Name"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                required
                            />
                            {errors.refereeName && <p className="text-red-500 text-sm">{errors.refereeName}</p>}
                            <input
                                name="refereeEmail"
                                type="email"
                                value={formData.refereeEmail}
                                onChange={handleChange}
                                placeholder="Email"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                required
                            />
                            {errors.refereeEmail && <p className="text-red-500 text-sm">{errors.refereeEmail}</p>}
                            <input
                                name="refereePhone"
                                value={formData.refereePhone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />

                            <h2 className="text-2xl font-semibold leading-none mt-6 mb-4">Additional Information</h2>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Referral Message"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center px-5 py-2.5 mt-4 font-medium tracking-wide text-white capitalize bg-[#1A73E8] rounded-md hover:bg-[#679bde] focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    width="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6 mr-2"
                                >
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                    <path d="M9 17L2 10"></path>
                                </svg>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReferralForm;
