import React from 'react'
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import GoogleButton from 'react-google-button'
import { uploadPhoto } from '../../../../utils/uploadPhotoFileBlogs';

const index = (casestudy) => {
  let casestudydata = casestudy.casestudy.data[0];
  //console.log(casestudy.casestudy.data[0]);
  const initialValues = {
    description: casestudydata.description, open: casestudydata.open, id: casestudydata.id, coverimage: casestudydata.coverimage,
    description: casestudydata.description, title: casestudydata.title, slug: casestudydata.slug, author: casestudydata.author,
    publishdate: casestudydata.publishdate, active: casestudydata.active, sequence: casestudydata.sequence, filename: casestudydata.filename,
    content1: casestudydata.content[0] ? casestudydata.content[0].description : undefined, heading1: casestudydata.content[0] ? casestudydata.content[0].heading : undefined, heading2: casestudydata.content[1] ? casestudydata.content[1].heading : undefined, content2: casestudydata.content[1] ? casestudydata.content[1].description : undefined, heading3: casestudydata.content[2] ? casestudydata.content[2].heading : undefined, content3: casestudydata.content[2] ? casestudydata.content[2].description : undefined, heading4: casestudydata.content[3] ? casestudydata.content[3].heading : undefined, content4: casestudydata.content[3] ? casestudydata.content[3].description : undefined, heading5: casestudydata.content[4] ? casestudydata.content[4].heading : undefined, content5: casestudydata.content[4] ? casestudydata.content[4].description : undefined,
    percentageBanner: casestudydata?.percentageBanner, clientLogo: casestudydata?.clientLogo, clientTestimonial: casestudydata?.clientTestimonial, testimonialVedioUrl: casestudydata?.testimonialVedioUrl, mainImage: casestudydata?.mainImage,
    metatitle: casestudydata.metatitle, metadescription: casestudydata.metadescription,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formattedDate, setFormattedDate] = useState(initialValues.date);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formValues);
  const router = useRouter();

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const suffix = getOrdinalSuffix(day);
    return `${day}${suffix} ${month} ${year}`;
  };

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const uploadToClient = async (event) => {
    var file_size = event.target.files[0].size;
    if (file_size < 10000000) {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];

        setResumefile(i);
        setCreateObjectURL(URL.createObjectURL(i));


      }
    } else {
      alert('file size should be less than 10MB');
      document.getElementById('resume_file').value = '';
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const formatted = formatDate(selectedDate);
    setFormattedDate(formatted);
    setFormValues({ ...formValues, date: formatted });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === 'date') {
      setFormattedDate(formatDate(value));
    }
    console.log(formValues);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);
    setLoading(true);
    alert('submitted');
    console.log("submit2")
    fetch('/api/admin/casestudy/update', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      },
      body: JSON.stringify({
        "id": formValues.id,
        "title": formValues.title,
        "slug": formValues.slug,
        "description": formValues.description,
        "author": formValues.author,
        "duration": formValues.duration,
        "date": formValues.date,
        "coverimage": formValues.coverimage,
        "filename": formValues.filename,
        "active": formValues.active,
        "sequence": formValues.sequence,
        "heading1": formValues.heading1,
        "heading2": formValues.heading2,
        "heading3": formValues.heading3,
        "heading4": formValues.heading4,
        "heading5": formValues.heading5,
        "content1": formValues.content1,
        "content2": formValues.content2,
        "content3": formValues.content3,
        "content4": formValues.content4,
        "content5": formValues.content5,
        "open": formValues.open,
        'percentageBanner': formValues.percentageBanner,
        "clientLogo": formValues.clientLogo,
        "clientTestimonial": formValues.clientTestimonial,
        "testimonialVedioUrl": formValues.testimonialVedioUrl,
        "mainImage": formValues.mainImage,
        "metatitle": formValues.metatitle,
        "metadescription": formValues.metadescription,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setLoading(false);
        alert('data updated');
        router.push("/admin/casestudies");
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        alert('error');
      });

  };

  useEffect(() => {
    // console.log(formErrors);
    if (isSubmit) {

      console.log("submit2")
      fetch('/api/admin/casestudy/update', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        },
        body: JSON.stringify({
          "id": formValues.id,
          "title": formValues.title,
          "slug": formValues.slug,
          "description": formValues.description,
          "author": formValues.author,
          "duration": formValues.duration,
          "date": formValues.date,
          "coverimage": formValues.coverimage,
          "filename": formValues.filename,
          "active": formValues.active,
          "sequence": formValues.sequence,
          "heading1": formValues.heading1,
          "heading2": formValues.heading2,
          "heading3": formValues.heading3,
          "heading4": formValues.heading4,
          "heading5": formValues.heading5,
          "content1": formValues.content1,
          "content2": formValues.content2,
          "content3": formValues.content3,
          "content4": formValues.content4,
          "content5": formValues.content5,
          "open": formValues.open,
          'percentageBanner': formValues.percentageBanner,
          "clientLogo": formValues.clientLogo,
          "clientTestimonial": formValues.clientTestimonial,
          "testimonialVedioUrl": formValues.testimonialVedioUrl,
          "mainImage": formValues.mainImage,
          "metatitle": formValues.metatitle,
          "metadescription": formValues.metadescription,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('data updated');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('error');
        });

    }
  }, []);

  const { data: session } = useSession()
  const [loginstate, setLoginstate] = useState(session ? true : false);


  if (session) {
    const handleCancel = () => {
      router.push("/admin/casestudies"); // Redirects back to the blogs page
    };
    return (
      <div className="p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Edit Case Study</h2>{" "}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Id -
              </label><input className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="id" value={formValues.id} onChange={handleChange} /><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">
              Casestudy Title -
            </label><input required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="title" value={formValues.title} onChange={handleChange} /><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">
              Author -
            </label><input className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="author" value={formValues.author} onChange={handleChange} /><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">
              Slug -
            </label><input required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="slug" value={formValues.slug} onChange={handleChange} /><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">
              Publish Date -
            </label>
              <div className="flex items-center gap-4">
                <input
                  type="date"
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
                  required
                  value={formattedDate}
                  readOnly
                  placeholder="Selected date"
                  className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none"
                />
              </div>
              {/* <input className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="publishdate" value={formValues.publishdate} onChange={handleChange} /> */}
              <br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">
              Description -
            </label><input required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="description" value={formValues.description} onChange={handleChange} /><br />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Meta Title -
              </label>

              <input
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="metatitle"
                value={formValues?.metatitle}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Meta Description -
              </label>

              <input
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="metadescription"
                value={formValues?.metadescription}
                onChange={handleChange}
              />
            </div>

            <div><label className="block text-base font-semibold mb-2 text-gray-200">
              File URL -
            </label><input required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="filename" value={formValues.filename} onChange={handleChange} /><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">
              Casestudy Upload -
            </label><input type="file" id="casestudy_file" onChange={(e) => uploadPhoto(e, 'filename', formValues, setFormValues)} accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div><div><label className="block text-base font-semibold mb-1 text-gray-200">
              Coverimage URL- </label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="coverimage" value={formValues.coverimage} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Coverimage Upload - </label>
              <input type="file" id="coverimage_file"
                onChange={(e) => uploadPhoto(e, 'coverimage', formValues, setFormValues)}
                accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              mainImage URL- </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="mainImage" value={formValues.mainImage} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              mainImage Upload - </label>
              <input type="file" id="mainImage_file"
                onChange={(e) => uploadPhoto(e, 'mainImage', formValues, setFormValues)}
                accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Client Testimonial Video URL- </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="testimonialVedioUrl" value={formValues.testimonialVedioUrl} onChange={handleChange} /><br />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              clientLogo URL- </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="clientLogo" value={formValues.clientLogo} onChange={handleChange} /><br />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              clientLogo Upload - </label>
              <input type="file" id="clientLogo_file"
                onChange={(e) => uploadPhoto(e, 'clientLogo', formValues, setFormValues)}
                accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              clientTestimonial URL- </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="clientTestimonial" value={formValues.clientTestimonial} onChange={handleChange} /><br />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              clientTestimonial Upload - </label>
              <input type="file" id="clientTestimonial_file"
                onChange={(e) => uploadPhoto(e, 'clientTestimonial', formValues, setFormValues)}
                accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>

            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              percentageBanner URL- </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="percentageBanner" value={formValues.percentageBanner} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              percentageBanner Upload - </label>
              <input type="file" id="coverimage_file"
                onChange={(e) => uploadPhoto(e, 'percentageBanner', formValues, setFormValues)}
                accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Sequence -
              </label><input required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="sequence" value={formValues.sequence} onChange={handleChange} /><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200"> Active - </label><select required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="active" value={formValues.active} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />
            </div><div><label className="block text-base font-semibold mb-2 text-gray-200">  Open Download - </label><select required className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="open" value={formValues.open} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br /><br></br>


              Content - <br />
            </div>
            <input required placeholder='Heading 1' className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading1" value={formValues.heading1} onChange={handleChange} /><br />
            <textarea required placeholder="Content 1" className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content1" value={formValues.content1} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 2' className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading2" value={formValues.heading2} onChange={handleChange} /><br />
            <textarea placeholder="Content 2" className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content2" value={formValues.content2} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 3' className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading3" value={formValues.heading3} onChange={handleChange} /><br />
            <textarea placeholder="Content 3" className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content3" value={formValues.content3} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 4' className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading4" value={formValues.heading4} onChange={handleChange} /><br />
            <textarea placeholder="Content 4" className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content4" value={formValues.content4} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 5' className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading5" value={formValues.heading5} onChange={handleChange} /><br />
            <textarea placeholder="Content 5" className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content5" value={formValues.content5} onChange={handleChange} /><br /><br />
            <div className="flex justify-between items-center mt-6">

              <button className={`px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 ${loading ? "cursor-not-allowed" : ""}`}
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
              > Cancel </button>
            </div>
            {/* <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button> */}
          </form>
        </div>
      </div>
    )
  } return (
    <>
      <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
    </>
  )
}



export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/casestudy?slug=${context.params.slug}`)
  const casestudy = await res.json()



  // Pass data to the page via props
  return { props: { casestudy } }
}

export default index;