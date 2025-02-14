import { useRouter } from 'next/router';
import React from 'react'
import { useState, useEffect } from 'react';

const index = ({ jobData }) => {
    const initialValues = { id: jobData.job[0].id, our_description: jobData.job[0].our_description, job_short_description: jobData.job[0].job_short_description, title: jobData.job[0].title, brief: jobData.job[0].brief, location: jobData.job[0].location, experience: jobData.job[0].experience, notice_period: jobData.job[0].notice_period, postingdate: jobData.job[0].postingdate, active: jobData.job[0].active, heading1: jobData.job[0].details[0].heading, content1: jobData.job[0].details[0].points.join(';'), heading2: jobData.job[0].details[1] ? jobData.job[0].details[1].heading : undefined, content2: jobData.job[0].details[1] ? jobData.job[0].details[1].points.join(';') : undefined, heading3: jobData.job[0].details[2] ? jobData.job[0].details[2].heading : undefined, content3: jobData.job[0].details[2] ? jobData.job[0].details[2].points.join(';') : undefined, heading4: jobData.job[0].details[3] ? jobData.job[0].details[3].heading : undefined, content4: jobData.job[0].details[3] ? jobData.job[0].details[3].points.join(';') : undefined, heading5: jobData.job[0].details[4] ? jobData.job[0].details[4].heading : undefined, content5: jobData.job[0].details[4] ? jobData.job[0].details[4].points.join(';') : undefined };
    // ,content2:jobData.job[0].details[1].points.join(';'),content3:jobData.job[0].details[2].points.join(';'),content4:jobData.job[0].details[3].points.join(';'),content5:jobData.job[0].details[4].points.join(';')
    //,heading2:jobData.job[0].details[1].heading,heading3:jobData.job[0].details[2].heading,heading4:jobData.job[0].details[3].heading,heading5:jobData.job[0].details[4].heading
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formattedDate, setFormattedDate] = useState(initialValues?.postingdate);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const formatDate = (postingdate) => {
        const day = postingdate.getDate();
        const month = postingdate.toLocaleString('default', { month: 'short' });
        const year = postingdate.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const formatted = formatDate(selectedDate);
        setFormattedDate(formatted);
        setFormValues({ ...formValues, postingdate: formatted });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        if (name === 'postingdate') {
            setFormattedDate(formatDate(value));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmit(true);
        setLoading(true);

        alert('submitted');
        fetch('/api/admin/job/update', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify({
                "id": formValues.id,
                "title": formValues.title,
                "brief": formValues.brief,
                "our_description": formValues.our_description,
                "job_short_description": formValues.job_short_description,
                "postingdate": formValues.postingdate,
                "location": formValues.location,
                "experience": formValues.experience,
                "active": formValues.active,
                "notice_period": formValues.notice_period,
                "heading1": formValues.heading1,
                "heading2": formValues.heading2,
                "heading3": formValues.heading3,
                "heading4": formValues.heading4,
                "heading5": formValues.heading5,
                "content1": formValues.content1,
                "content2": formValues.content2,
                "content3": formValues.content3,
                "content4": formValues.content4,
                "content5": formValues.content5
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setLoading(false);
                alert('data updated');
                router.push("/admin/jobs");
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
                alert('error');
            });

    };

    useEffect(() => {
        if (isSubmit) {
            setLoading(true);
            fetch('/api/admin/job/update', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "id": formValues.id,
                    "title": formValues.title,
                    "brief": formValues.brief,
                    "our_description": formValues.our_description,
                    "job_short_description": formValues.job_short_description,
                    "postingdate": formValues.postingdate,
                    "location": formValues.location,
                    "experience": formValues.experience,
                    "active": formValues.active,
                    "notice_period": formValues.notice_period,
                    "heading1": formValues.heading1,
                    "heading2": formValues.heading2,
                    "heading3": formValues.heading3,
                    "heading4": formValues.heading4,
                    "heading5": formValues.heading5,
                    "content1": formValues.content1,
                    "content2": formValues.content2,
                    "content3": formValues.content3,
                    "content4": formValues.content4,
                    "content5": formValues.content5
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    setLoading(false);
                    alert('data updated');
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setLoading(false);
                    alert('error');
                });

        }
    }, []);

    const handleCancel = () => {
        router.push("/admin/jobs");
    };

    return (
        <div className="p-6 bg-gray-50">
            <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-base font-semibold mb-2 text-gray-200">Job Title* -
                        </label><input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="title" value={formValues.title} onChange={handleChange} /><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Job Description* -
                    </label><input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="brief" value={formValues.brief} onChange={handleChange} /><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Our Description* -
                    </label><input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="our_description" value={formValues.our_description} onChange={handleChange} /><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Job Short Description* -
                    </label><input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="job_short_description" value={formValues.job_short_description} onChange={handleChange} /><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Experience* -
                    </label><input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="experience" value={formValues.experience} onChange={handleChange} /><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Location* -
                    </label><input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="location" value={formValues.location} onChange={handleChange} /><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Posting date* -
                    </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="date"
                                name="postingdate"
                                onChange={handleDateChange}
                                className="absolute cursor-pointer w-1 opacity-0"
                            />
                            <div className="flex items-center cursor-pointer" onClick={() => document.querySelector('input[type="date"]').showPicker()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-gray-300" viewBox="0 0 24 24">
                                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-7-7h5v5h-5z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="postingdate"
                                required
                                value={formattedDate}
                                readOnly
                                placeholder="Selected date"
                                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none"
                            />
                        </div>
                        {/* <input required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="postingdate" value={formValues.postingdate} onChange={handleChange} /><br /> */}
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Active* -
                    </label><select required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="active" value={formValues.active} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />
                    </div><div><label className="block text-base font-semibold mb-2 text-gray-200">Notice Period* -
                    </label><select required className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="notice_period" value={formValues.notice_period} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />
                    </div><label className="block text-base font-semibold mb-2 text-gray-200">Details  -
                    </label>
                    <input required placeholder='Heading 1*' className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading1" value={formValues.heading1} onChange={handleChange} /><br />
                    <textarea required placeholder="Content 1* Pointers separated by ;" className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content1" value={formValues.content1} onChange={handleChange} /><br /><br />
                    <input placeholder='Heading 2' className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading2" value={formValues.heading2} onChange={handleChange} /><br />
                    <textarea placeholder="Content 2 Pointers separated by ;" className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content2" value={formValues.content2} onChange={handleChange} /><br /><br />
                    <input placeholder='Heading 3' className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading3" value={formValues.heading3} onChange={handleChange} /><br />
                    <textarea placeholder="Content 3 Pointers separated by ;" className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content3" value={formValues.content3} onChange={handleChange} /><br /><br />
                    <input placeholder='Heading 4' className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading4" value={formValues.heading4} onChange={handleChange} /><br />
                    <textarea placeholder="Content 4 Pointers separated by ;" className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content4" value={formValues.content4} onChange={handleChange} /><br /><br />
                    <input placeholder='Heading 5' className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading5" value={formValues.heading5} onChange={handleChange} /><br />
                    <textarea placeholder="Content 5 Pointers separated by ;" className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content5" value={formValues.content5} onChange={handleChange} />
                    <div className="flex justify-between items-center mt-6">
                        <button className={`px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300
              ${loading ? "cursor-not-allowed" : ""}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <span
                                        style={{
                                            border: "2px solid #ffffff",
                                            borderTop: "2px solid #00bcd4",
                                            borderRadius: "50%",
                                            width: "12px",
                                            height: "12px",
                                            marginRight: "8px",
                                            animation: "spin 0.6s linear infinite",
                                        }}
                                    ></span>
                                    Loading...
                                </span>
                            ) : (
                                "Submit"
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                    {/* <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button> */}
                </form>
            </div>
        </div>
    )
}



export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/jobdetails?id=${context.params.post}`)
    const jobData = await res.json()
    // Pass data to the page via props
    return { props: { jobData } }
}

export default index