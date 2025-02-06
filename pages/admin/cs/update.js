'use client'
// import NewCastdy from "@/Components/NewCastdy";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CgArrowLongLeft } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";


export default function Home(casestudydata) {
    console.log(casestudydata);

    
    const intitalContent = casestudydata.casestudydata.data[0];
    const intitalContentn = { "title": "<span class='text-[#0092f4]'>19%</span> Lower Cost Per Acquisition: <br /> A Case Study in DV360 Ad Optimization", "file": "", "slug": "", "coverimage": "", "active:": "true", "sequence": "", "open": "", "categories": "", "id": "", "background": "The client is an automotive manufacturer that produces cars, vans, and SUVs. The clients vehicles are sold in New Zealand through a network of authorised dealerships. In New Zealand, the client offers a range of vehicles and is responsible for marketing, sales, and after-sales service of the brand's products.", "kpis": [{ "value": "18%", "text": "Improvement in conversion rate for existing customer payment journeys" }, { "value": "100%", "text": "Improvement in overall conversion happening online" }, { "value": "9x", "text": "Decrease in frauds" }, { "value": "", "text": "" }], "challenge": { "title": "Client struggled to convert ad viewers into car buyers despite running ads. Analysis revealed two key issues", "points": [{ "heading": "Ineffective Creative Sizes", "point": "Certain creatives weren't driving conversions despite budget allocation" }, { "heading": "Low-Quality Creatives", "point": "Blurry or low-quality visuals in some ads were hindering user experience" }, { "heading": "", "point": "" }, { "heading": "", "point": "" }] }, "approach": { "title": "Our data-driven approach leveraged DV360 to optimise ad performance", "points": [{ "heading": "Creative Size Analysis", "point": "We identified the most effective ad sizes (e.g., 300x250, 300x600) for the \"Fuel Your Drive\" campaign." }, { "heading": "Budget Optimization", "point": "Budget was shifted towards well-performing formats, minimizing spending on underperforming ones." }, { "heading": "High-Quality Creatives", "point": "We collaborated with the client to replace low-quality visuals with clear, visually appealing elements." }, { "heading": "", "point": "" }] }, "results": { "title": "", "points": [{ "heading": "Increased Conversions", "point": "Effective cost per acquisition (CPA) dropped by 19% compared to the previous month, indicating a significant improvement in conversion rates." }, { "heading": "Enhanced User Experience", "point": "High-quality creatives provided a more engaging user experience, leading to better ad reception." }, { "heading": "", "point": "" }, { "heading": "", "point": "" }] } };
    const [contentobj, setContentObj] = useState(intitalContent);
    const [contentForm, setIscontentform] = useState(null);


    const addtitle = (e) => {
        setContentObj({ ...contentobj, ["title"]: document.getElementById('title_input').value });
        console.log(contentobj);
        setIscontentform(null);
    };

    const handletitleChange = (e) => {
        setContentObj({ ...contentobj, ["title"]: e.target.value });

    };

    const addbackground = (e) => {
        setContentObj({ ...contentobj, ["background"]: document.getElementById('background_input').value });
        console.log(contentobj);
        setIscontentform(null);
    };

    const handlebackgroundChange = (e) => {
        setContentObj({ ...contentobj, ["background"]: e.target.value });

    };


    const handlekpi1Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[0].value = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };
    const handlekpi2Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[1].value = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };
    const handlekpi3Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[2].value = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };
    const handlekpi4Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[3].value = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };


    const handletext1Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[0].text = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };

    const handletext2Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[1].text = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };

    const handletext3Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[2].text = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };

    const handletext4Change = (e) => {
        var kpis = contentobj.kpis;
        kpis[3].text = e.target.value;
        setContentObj({ ...contentobj, ["kpis"]: kpis });

    };

    const addkpis = (e) => {
        setIscontentform(null);
    };

    const handleidChange = (e) => {       
        setContentObj({ ...contentobj, ["id"]: e.target.value });
    };

    const handlecstitleChange = (e) => {       
        setContentObj({ ...contentobj, ["cstitle"]: e.target.value });
    };

    const handleslugChange = (e) => {       
        setContentObj({ ...contentobj, ["slug"]: e.target.value });
    };

    const handledescriptionChange = (e) => {       
        setContentObj({ ...contentobj, ["description"]: e.target.value });
    };

    const handledecategoriesChange = (e) => {       
        setContentObj({ ...contentobj, ["categories"]: e.target.value.replaceAll(' ,',',').replaceAll(', ',',').split(',') });
    };

    const handlesequenceChange = (e) => {       
        setContentObj({ ...contentobj, ["sequence"]: e.target.value });
    };

    const handledeactiveChange = (e) => {       
        setContentObj({ ...contentobj, ["active"]: e.target.value });
    };

    const handleopenChange = (e) => {       
        setContentObj({ ...contentobj, ["open"]: e.target.value });
    };

    const handlefileChange = (e) => {       
        setContentObj({ ...contentobj, ["file"]: e.target.value });
    };

    const handlecoverimageChange = (e) => {       
        setContentObj({ ...contentobj, ["coverimage"]: e.target.value });
    };

    const handlectitleChange = (e) => {
        var challenge = contentobj.challenge;
        challenge.title = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });       
        
    };

    const handlech1Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[0].heading = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });  
    };
    const handlech2Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[1].heading = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });
    };
    const handlech3Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[2].heading = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });
    };
    const handlech4Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[3].heading = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });
    };
    const handlecp11Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[0].point = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });
    };
    const handlecp2Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[1].point = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });
    };
    const handlecp3Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[2].point = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });
    };
    const handlecp4Change = (e) => {       
        var challenge = contentobj.challenge;
        challenge.points[3].point = e.target.value;
        setContentObj({ ...contentobj, ["challenge"]: challenge });;
    };


    const handleatitleChange = (e) => {
        var approach = contentobj.approach;
        approach.title = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });       
        
    };

    const handleah1Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[0].heading = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });  
    };
    const handleah2Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[1].heading = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });
    };
    const handleah3Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[2].heading = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });
    };
    const handleah4Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[3].heading = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });
    };
    const handleap11Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[0].point = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });
    };
    const handleap2Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[1].point = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });
    };
    const handleap3Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[2].point = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });
    };
    const handleap4Change = (e) => {       
        var approach = contentobj.approach;
        approach.points[3].point = e.target.value;
        setContentObj({ ...contentobj, ["approach"]: approach });;
    };


    const handlertitleChange = (e) => {
        var results = contentobj.results;
        results.title = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });       
        
    };

    const handlerh1Change = (e) => {       
        var results = contentobj.results;
        results.points[0].heading = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });  
    };
    const handlerh2Change = (e) => {       
        var results = contentobj.results;
        results.points[1].heading = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });
    };
    const handlerh3Change = (e) => {       
        var results = contentobj.results;
        results.points[2].heading = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });
    };
    const handlerh4Change = (e) => {       
        var results = contentobj.results;
        results.points[3].heading = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });
    };
    const handlerp11Change = (e) => {       
        var results = contentobj.results;
        results.points[0].point = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });
    };
    const handlerp2Change = (e) => {       
        var results = contentobj.results;
        results.points[1].point = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });
    };
    const handlerp3Change = (e) => {       
        var results = contentobj.results;
        results.points[2].point = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });
    };
    const handlerp4Change = (e) => {       
        var results = contentobj.results;
        results.points[3].point = e.target.value;
        setContentObj({ ...contentobj, ["results"]: results });;
    };
   
    








    const uploadPhoto = async (e) => {
        const file = e.target.files[0];
        var file_size = e.target.files[0].size;

        if (file_size < 10000000) {
            var re = /(?:\.([^.]+))?$/;
            var x = Date.now() + '' + Math.floor(Math.random() * 1000);
            var ext = re.exec(file.name)[1];
            var new_filename = x + '.' + ext;
            // console.log(new_filename);
            const filename = encodeURIComponent(file.name);
            const res = await fetch(`/api/csupload?file=${new_filename}`);
            const { url, fields } = await res.json();
            console.log(res.json);
            const formData = new FormData();

            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const upload = await fetch(url, {
                method: 'POST',
                mode: 'no-cors', // no-cors, *cors, same-origin
                body: formData,
            }).then((data) => {/*console.log(data.json)*/ });

            setContentObj({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

            if (upload) {
                console.log('Uploaded successfully!');
                setContentObj({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

            } else {
                console.log(upload);
                setContentObj({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

            }

            console.log(formValues)
        } else {
            alert('file size should be less than 10MB');
            document.getElementById('coverimage_file').value = '';
        }


    };


    const uploadCaseStudy = async (e) => {
        const file = e.target.files[0];
        var file_size = e.target.files[0].size;

        if (file_size < 10000000) {
            var re = /(?:\.([^.]+))?$/;
            var x = Date.now() + '' + Math.floor(Math.random() * 1000);
            var ext = re.exec(file.name)[1];
            var new_filename = x + '.' + ext;
            // console.log(new_filename);
            const filename = encodeURIComponent(file.name);
            const res = await fetch(`/api/csupload?file=${new_filename}`);
            const { url, fields } = await res.json();
            console.log(res.json);
            const formData = new FormData();

            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const upload = await fetch(url, {
                method: 'POST',
                mode: 'no-cors', // no-cors, *cors, same-origin
                body: formData,
            }).then((data) => {/*console.log(data.json)*/ });

            setContentObj({ ...formValues, file: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

            if (upload) {
                console.log('Uploaded successfully!');
                setContentObj({ ...formValues, file: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

            } else {
                console.log(upload);
                setContentObj({ ...formValues, file: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

            }

            console.log(formValues)
        } else {
            alert('file size should be less than 10MB');
            document.getElementById('casestudy_file').value = '';
        }


    };


    

    
    const submit = () =>{
        console.log(contentobj)

        
        fetch('/api/admin/newcasestudy/update', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify(
                contentobj
            ),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
    }

    

    return (

        <>
            <section>
                {contentForm == "title" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add Title
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4">
                                    <textarea className='w-full h-20' id="title_input" onChange={handletitleChange} value={contentobj.title} ></textarea>
                                </div>

                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={addtitle} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}


                {contentForm == "details" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add Details
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4">
                                    Id - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="id" value={contentobj.id} onChange={handleidChange} /><br />
                                    Casestudy Title - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="title" value={contentobj.cstitle} onChange={handlecstitleChange} /><br />
                                    Slug - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="slug" value={contentobj.slug} onChange={handleslugChange} /><br />
                                    Description - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="description" value={contentobj.description} onChange={handledescriptionChange} /><br />
                                    File URL -<input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="filename" value={contentobj.file} onChange={handlefileChange} /><br />
                                    Casestudy Upload - <input type="file" id="casestudy_file" onChange={uploadCaseStudy} accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" /><br />
                                    Coverimage URL- <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="coverimage" value={contentobj.coverimage} onChange={handlecoverimageChange} /><br />
                                    Coverimage Upload - <input type="file" id="coverimage_file" onChange={uploadPhoto} accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" /><br />
                                    Categories - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="sequence" value={contentobj.categories.toString()} onChange={handledecategoriesChange} /><br />
                                    Sequence - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="sequence" value={contentobj.sequence} onChange={handlesequenceChange} /><br />
                                    Active - <select required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={contentobj.active} onChange={handledeactiveChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />
                                    Open Download - <select required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={contentobj.open} onChange={handleopenChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />

                                </div>

                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={addkpis} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}

                {contentForm == "background" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add background
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4">
                                    <textarea type="text" className='w-full h-40' id="background_input" onChange={handlebackgroundChange} value={contentobj.background} ></textarea>
                                </div>

                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={addbackground} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}

                {contentForm == "kpis" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add KPIs
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>KPI1 </b>
                                    <input type="text" className='w-full' id="kpi1_input" onChange={handlekpi1Change} value={contentobj.kpis[0].value} ></input>
                                    <br /><br /><b>Text1</b> <br />
                                    <input type="text" className='w-full' id="text1_input" onChange={handletext1Change} value={contentobj.kpis[0].text} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>KPI2 </b>
                                    <input type="text" className='w-full' id="kpi2_input" onChange={handlekpi2Change} value={contentobj.kpis[1].value} ></input>
                                    <br /><br /><b>Text2 </b><br />
                                    <input type="text" className='w-full' id="text2_input" onChange={handletext2Change} value={contentobj.kpis[1].text} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>KPI3 </b>
                                    <input type="text" className='w-full' id="kpi3_input" onChange={handlekpi3Change} value={contentobj.kpis[2].value} ></input>
                                    <br /><br /><b>Text3</b> <br />
                                    <input type="text" className='w-full' id="text3_input" onChange={handletext3Change} value={contentobj.kpis[2].text} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>KPI4 </b>
                                    <input type="text" className='w-full' id="kpi4_input" onChange={handlekpi4Change} value={contentobj.kpis[3].value} ></input>
                                    <br /><br /><b>Text4</b> <br />
                                    <input type="text" className='w-full' id="text4_input" onChange={handletext4Change} value={contentobj.kpis[3].text} ></input>
                                </div>



                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={() => setIscontentform(null)} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}


                    {contentForm == "challenge" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add Challenge Details
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Challenge Title </b>
                                    <input type="text" className='w-full' id="c_heading1_input" onChange={handlectitleChange} value={contentobj.challenge.title} ></input>
                                    <br /><br /> </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading1 </b>
                                    <input type="text" className='w-full' id="c_heading1_input" onChange={handlech1Change} value={contentobj.challenge.points[0].heading} ></input>
                                    <br /><br /><b>Point1</b> <br />
                                    <input type="text" className='w-full' id="c_point1_input" onChange={handlecp11Change} value={contentobj.challenge.points[0].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading2 </b>
                                    <input type="text" className='w-full' id="c_heading2_input" onChange={handlech2Change} value={contentobj.challenge.points[1].heading} ></input>
                                    <br /><br /><b>Point2</b> <br />
                                    <input type="text" className='w-full' id="c_point2_input" onChange={handlecp2Change} value={contentobj.challenge.points[1].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading3 </b>
                                    <input type="text" className='w-full' id="c_heading3_input" onChange={handlech3Change} value={contentobj.challenge.points[2].heading} ></input>
                                    <br /><br /><b>Point3</b> <br />
                                    <input type="text" className='w-full' id="c_point3_input" onChange={handlecp3Change} value={contentobj.challenge.points[2].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading4 </b>
                                    <input type="text" className='w-full' id="c_heading4_input" onChange={handlech4Change} value={contentobj.challenge.points[3].heading} ></input>
                                    <br /><br /><b>Point4</b> <br />
                                    <input type="text" className='w-full' id="c_point4_input" onChange={handlecp4Change} value={contentobj.challenge.points[3].point} ></input>
                                </div>

                                



                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={() => setIscontentform(null)} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}


                    {contentForm == "approach" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add Approach Details
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>approach Title </b>
                                    <input type="text" className='w-full' id="a_heading1_input" onChange={handleatitleChange} value={contentobj.approach.title} ></input>
                                    <br /><br /> </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading1 </b>
                                    <input type="text" className='w-full' id="a_heading1_input" onChange={handleah1Change} value={contentobj.approach.points[0].heading} ></input>
                                    <br /><br /><b>Point1</b> <br />
                                    <input type="text" className='w-full' id="a_point1_input" onChange={handleap11Change} value={contentobj.approach.points[0].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading2 </b>
                                    <input type="text" className='w-full' id="a_heading2_input" onChange={handleah2Change} value={contentobj.approach.points[1].heading} ></input>
                                    <br /><br /><b>Point2</b> <br />
                                    <input type="text" className='w-full' id="a_point2_input" onChange={handleap2Change} value={contentobj.approach.points[1].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading3 </b>
                                    <input type="text" className='w-full' id="a_heading3_input" onChange={handleah3Change} value={contentobj.approach.points[2].heading} ></input>
                                    <br /><br /><b>Point3</b> <br />
                                    <input type="text" className='w-full' id="a_point3_input" onChange={handleap3Change} value={contentobj.approach.points[2].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading4 </b>
                                    <input type="text" className='w-full' id="a_heading4_input" onChange={handleah4Change} value={contentobj.approach.points[3].heading} ></input>
                                    <br /><br /><b>Point4</b> <br />
                                    <input type="text" className='w-full' id="a_point4_input" onChange={handleap4Change} value={contentobj.approach.points[3].point} ></input>
                                </div>

                                



                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={() => setIscontentform(null)} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}


                    {contentForm == "results" && <>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add results Details
                                    </h3>
                                    <button onClick={() => setIscontentform(null)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>results Title </b>
                                    <input type="text" className='w-full' id="r_heading1_input" onChange={handlertitleChange} value={contentobj.results.title} ></input>
                                    <br /><br /> </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading1 </b>
                                    <input type="text" className='w-full' id="r_heading1_input" onChange={handlerh1Change} value={contentobj.results.points[0].heading} ></input>
                                    <br /><br /><b>Point1</b> <br />
                                    <input type="text" className='w-full' id="r_point1_input" onChange={handlerp11Change} value={contentobj.results.points[0].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading2 </b>
                                    <input type="text" className='w-full' id="r_heading2_input" onChange={handlerh2Change} value={contentobj.results.points[1].heading} ></input>
                                    <br /><br /><b>Point2</b> <br />
                                    <input type="text" className='w-full' id="r_point2_input" onChange={handlerp2Change} value={contentobj.results.points[1].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading3 </b>
                                    <input type="text" className='w-full' id="r_heading3_input" onChange={handlerh3Change} value={contentobj.results.points[2].heading} ></input>
                                    <br /><br /><b>Point3</b> <br />
                                    <input type="text" className='w-full' id="r_point3_input" onChange={handlerp3Change} value={contentobj.results.points[2].point} ></input>
                                </div>

                                <div class="p-4 md:p-5 space-y-4"> <b>Heading4 </b>
                                    <input type="text" className='w-full' id="r_heading4_input" onChange={handlerh4Change} value={contentobj.results.points[3].heading} ></input>
                                    <br /><br /><b>Point4</b> <br />
                                    <input type="text" className='w-full' id="r_point4_input" onChange={handlerp4Change} value={contentobj.results.points[3].point} ></input>
                                </div>

                                



                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={() => setIscontentform(null)} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                                </div>
                            </div>
                        </div>
                    </div></>}







            </section>

            <section className='flex items-center'>
                <button className="tracking-wider text-[15px] my-4 px-8 py-2 m-auto border border-solid border-[#ffffff] bg-[#dda8f0] text-[#011627] rounded-[12px] hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150" onClick={() => setIscontentform("details")}>Add details</button>
                
                <button className="tracking-wider text-[15px] my-4 px-8 py-2 m-auto border border-solid border-[#ffffff] bg-[#dda8f0] text-[#011627] rounded-[12px] hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150" onClick={submit}>Update</button>
            </section>

            <section onClick={() => setIscontentform("title")} className="castdynewbnner bg-[#000] lg:min-h-[400px] font-gilroy relative overflow-hidden">
                <div className="relative px-4 md:px-20 pt-4 md:pt-4 pb-8 md:pb-4">
                    <div className="flex items-center justify-start">
                        <div className='mt-5'>
                            <div className="castdy-return ">
                                <Link href="/case-studies" className="text-[#ffffff] flex items-center gap-1 hover:text-black text-base font-normal tracking-wider rounded-xl py-3 pr-6">

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='fff flex items-center justify-center lg:mt-10'>
                        <h1 className='text-[30px] font-bold text-[#ffffff] mt-[10px] mb-[5px]' dangerouslySetInnerHTML={{ __html: contentobj.title }} ></h1>
                    </div>
                </div>
            </section>
            <section className='bg-[#ffffff]'>
                <div className='relative px-4 md:px-20 pt-4 md:pt-4 pb-8 md:pb-4'>
                    <div className='flex lg:flex-nowrap flex-wrap justify-center gap-5'>
                        <div className='lg:w-[60%]'>
                            <div onClick={() => setIscontentform("background")} className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='text-center flex items-center justify-start gap-4 mb-5'>
                                    <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="https://storage.googleapis.com/website-bucket-uploads/static/public/Background.png" alt="Background" className='w-10 h-10' /></div>
                                    <h3 className='text-[25px] font-gilroy font-semibold text-[#011627]'>Background</h3>
                                </div>
                                <p className='font-gilroy2'>{contentobj.background}</p>
                            </div>
                            <div className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div onClick={() => setIscontentform("kpis")} className='flex lg:flex-nowrap flex-wrap items-start lg:justify-between justify-center'>

                                    {contentobj.kpis && contentobj.kpis.map((kpi, key) => (
                                        <>
                                            {kpi.value != '' && <div key={key} className='p-4 lg:w-[33.33%] text-center h-auto'>
                                                <h3 className='text-[28px] font-semibold text-[#034EA2]'>{kpi.value} </h3>
                                                <p className='text-[17px] font-gilroy2 font-medium text-[#011627]'><span>{kpi.text}</span></p>
                                            </div>}
                                        </>
                                    ))}





                                </div>
                            </div>
                            <div className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='flex items-center gap-4 mb-5'>
                                    <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="/Challenge.png" alt="" className='w-12 h-12' /></div>
                                    <h3 className='text-[25px] font-semibold text-[#000]'>Challenge</h3>
                                </div>
                                <div onClick={() => setIscontentform("challenge")}>
                                    <p className='text-[16px] font-medium font-gilroy text-[#000] mr-1'>{contentobj.challenge.title}</p>
                                    <ul className='my-4 challenge-list grid sm:grid-cols-1 gap-4'>
                                        {contentobj.challenge.points && contentobj.challenge.points.map((kpi, key) => (
                                            <>
                                                {kpi.heading != '' && <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-0 pt-0 rounded-[10px]'>
                                                    <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                                    <div>
                                                        <p className='text-[15px] font-gilroy font-medium ml-1'>{kpi.heading}</p>
                                                        <p className='text-[14px] mt-1 font-gilroy2 ml-1'>{kpi.point}</p>
                                                    </div>
                                                </li>}
                                            </>
                                        ))}



                                    </ul>
                                </div>
                            </div>
                            <div onClick={() => setIscontentform("approach")} className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='flex items-center gap-4 mb-5'>
                                    <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="https://storage.googleapis.com/website-bucket-uploads/static/public/approach.png" alt="approach" className='w-12 h-12' /></div>
                                    <h3 className='text-[25px] font-semibold text-[#000]'>Approach</h3>
                                </div>
                                <p  className='text-[16px] text-[#000] font-medium font-gilroy mr-1'>{contentobj.approach.title}</p>
                                <div>
                                    <ul className='my-4 grid sm:grid-cols-1 gap-4 approach-list'>
                                        {contentobj.approach.points && contentobj.approach.points.map((kpi, key) => (
                                            <>
                                                {kpi.heading != '' && <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-0 pt-0 rounded-[10px]'>
                                                    <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                                    <div>
                                                        <p className='text-[15px] font-gilroy font-medium ml-1'>{kpi.heading}</p>
                                                        <p className='text-[14px] mt-1 font-gilroy2 ml-1'>{kpi.point}</p>
                                                    </div>
                                                </li>}
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center bg-[#ffffff] shadow-allshadow p-4 justify-start my-5'>
                                <div>
                                    <div className='text-center flex items-center justify-start gap-4 mb-5'>
                                        <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="/Result.png" alt="" className='w-12 h-12' /></div>
                                        <h3 className='text-[25px] font-gilroy font-semibold'>Results</h3>
                                    </div>
                                    <p  className='text-[16px] text-[#000] font-medium font-gilroy mr-1'>{contentobj.results.title}</p>
                                    <div onClick={() => setIscontentform("results")} className=''>
                                        <div>
                                            <ul className='grid sm:grid-cols-1 gap-4 my-4'>
                                                {contentobj.results.points && contentobj.results.points.map((kpi, key) => (
                                                    <>
                                                        {kpi.heading != '' && <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-0 pt-0 rounded-[10px]'>
                                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                                            <div>
                                                                <p className='text-[15px] font-gilroy font-medium ml-1'>{kpi.heading}</p>
                                                                <p className='text-[14px] mt-1 font-gilroy2 ml-1'>{kpi.point}</p>
                                                            </div>
                                                        </li>}
                                                    </>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[40%] w-full'>
                            <div className='p-[10px] pr-0 sticky top-3 lg:mt-[10%]'>
                                <div className='py-[15px] px-[10px] pr-0 rounded-xl'>
                                    <div className='flex items-start lg:justify-end justify-center'>
                                        <div className='bg-[#ecf9ff] sample w-[300px] rounded-[15px] p-4'>

                                            <div className='relative'>
                                                <div className='rounded-lg'>


                                                    <div className="">

                                                        <div className="text-center">
                                                            <button className="tracking-wider text-[15px] my-4 px-8 py-2 m-auto border border-solid border-[#ffffff] bg-[#BAF63A] text-[#011627] rounded-[12px] hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Download CaseStudy</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}


export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/admin/newcasestudy/edit`)
    const casestudydata = await res.json()
    console.log(casestudydata);



    // Pass data to the page via props
    return { props: { casestudydata } }
}