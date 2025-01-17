import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleButton from "react-google-button";

const index = () => {
  const { data: session } = useSession();
  const [loginstate, setLoginstate] = useState(session ? true : false);
  const router = useRouter();
  // console.log(blogData);
  const initialValues = {
    coverphoto: "",
    description: "",
    title: "",
    slug: "",
    author: "",
    thumbnail: "",
    date: "",
    active: "false",
    duration: "",
    document_id: "",
    sequence: "",
    category: "",
    relatedTo: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formattedDate, setFormattedDate] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formValues);


  useEffect(() => {
    const fetchSequence = async () => {
      try {
        const response = await fetch(`/api/admin/latestsequence`);
        const sequenceData = await response.json();
        console.log("data seq object", sequenceData)

        const latestSequence = parseInt(sequenceData?.blog?.sequence) || 0; // Default to 0 if sequence is undefined or NaN
        const incrementedSequence = latestSequence + 1;
        console.log("latestSequence", latestSequence, "incrementedSequence", incrementedSequence)

        setFormValues(prevValues => ({
          ...prevValues,
          sequence: String(incrementedSequence)

        }));

      } catch (error) {
        console.error("Error fetching sequence:", error);
      }
    };

    fetchSequence();
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedToday = formatDate(today);
    setFormValues({ ...formValues, date: formattedToday });
    setFormattedDate(formattedToday);
  }, []);

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
      alert("file size should be less than 10MB");
      document.getElementById("resume_file").value = "";
    }
  };

  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    var file_size = e.target.files[0].size;

    if (file_size < 10000000) {
      var re = /(?:\.([^.]+))?$/;
      var x = Date.now() + "" + Math.floor(Math.random() * 1000);
      var ext = re.exec(file.name)[1];
      var new_filename = x + "." + ext;
      console.log(new_filename);
      const filename = encodeURIComponent(file.name);
      const res = await fetch(`/api/imageupload?file=${new_filename}`);
      const { url, fields } = await res.json();
      console.log(res.json);
      const formData = new FormData();

      Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const upload = await fetch(url, {
        method: "POST",
        mode: "no-cors", // no-cors, *cors, same-origin
        body: formData,
      }).then((data) => {
        /*console.log(data.json)*/
      });

      setFormValues({
        ...formValues,
        coverphoto:
          "https://storage.googleapis.com/website-bucket-uploads/blog_images/" +
          new_filename,
      });

      if (upload) {
        console.log("Uploaded successfully!");
        setFormValues({
          ...formValues,
          coverphoto:
            "https://storage.googleapis.com/website-bucket-uploads/blog_images/" +
            new_filename,
        });
      } else {
        console.log(upload);
        setFormValues({
          ...formValues,
          coverphoto:
            "https://storage.googleapis.com/website-bucket-uploads/blog_images/" +
            new_filename,
        });
      }

      console.log(formValues);
    } else {
      alert("file size should be less than 10MB");
      document.getElementById("resume_file").value = "";
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
    console.log("inside change", formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);
    setLoading(true);
    alert("submitted");
    console.log("submit2");
    fetch("/api/admin/blogs/new", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        title: formValues.title,
        slug: formValues.slug,
        description: formValues.description,
        author: formValues.author,
        duration: formValues.duration,
        date: formValues.date,
        coverphoto: formValues.coverphoto,
        thumbnail: formValues.thumbnail,
        document_id: formValues.document_id,
        active: formValues.active,
        category: formValues.category,
        relatedTo: formValues.relatedTo,
        sequence: formValues.sequence,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        alert("data updated");
        router.push("/admin/blogs");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        alert("error");
      });
  };

  useEffect(() => {
    // console.log(formErrors);
    if (isSubmit) {
      setLoading(true);
      console.log("submit2");
      fetch("/api/admin/blogs/create", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({
          title: formValues.title,
          slug: formValues.slug,
          description: formValues.description,
          author: formValues.author,
          duration: formValues.duration,
          date: formValues.date,
          coverphoto: formValues.coverphoto,
          thumbnail: formValues.thumbnail,
          document_id: formValues.document_id,
          active: "true",
          category: formValues.category,
          relatedTo: formValues.relatedTo,
          sequence: formValues.sequence,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setLoading(false);
          alert("data updated");
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          alert("error");
        });
    }
  }, []);

  const handleCancel = () => {
    router.push("/admin/blogs"); // Redirects back to the blogs page
  };

  if (session) {
    return (
      <div className="p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Blog Title
              </label>
              <input
                required
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Author -
              </label>
              <input
                required
                className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="author"
                value={formValues.author}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Slug -
              </label>
              <input
                required
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="slug"
                value={formValues.slug}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[45%]">
                <label className="block text-base font-semibold mb-2 text-gray-200">
                  Reading Time -
                </label>

                <input
                  required
                  className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                  type="text"
                  name="duration"
                  value={formValues.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[45%]">
                <label className="block text-base font-semibold mb-2 text-gray-200">
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
                {/* <input
                  required
                  className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                  type="text"
                  name="date"
                  value={formValues.date}
                  onChange={handleChange}
                /> */}
              </div>
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Description -
              </label>

              <input
                required
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Coverimage URL-
              </label>

              <input
                required
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="coverphoto"
                value={formValues.coverphoto}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Coverimage Upload -
              </label>

              <input
                required
                type="file"
                id="resume_file"
                onChange={uploadPhoto}
                accept=".pdf, .jpg, .jpeg, .docx"
                className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none"
                placeholder="No file"
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Document ID -
              </label>

              <input
                required
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="document_id"
                value={formValues.document_id}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Related To
              </label>

              <select
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="relatedTo"
                value={formValues?.relatedTo}
                onChange={handleChange}
              >
                <option className="bg-slate-700" value="">Select a related type</option>
                <option className="bg-slate-700" value="dv360">dv360</option>
                <option className="bg-slate-700" value="ga4">ga4</option>
                <option className="bg-slate-700" value="gtm">gtm</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Sequence -
              </label>

              <input
                required
                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="sequence"
                value={formValues.sequence}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 text-gray-200">
                Active -
              </label>

              <select
                required
                className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                type="text"
                name="active"
                value={formValues.active}
                onChange={handleChange}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className={`px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 ${loading ? "cursor-not-allowed" : ""}`}
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
          </form>
        </div>
      </div>
    );
  }
  return (
    <>
      <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
    </>
  );
};

export default index;

// import React from 'react'
// import { useState, useEffect } from 'react';
// import {useSession, signIn , signOut} from "next-auth/react"
// import { useRouter } from 'next/navigation'
// import GoogleButton from 'react-google-button'

// const index = () => {
//   const { data: session } = useSession()
//   const [loginstate, setLoginstate] = useState(session?true:false);
//   const router = useRouter();
//     //console.log(blogData);
//     const initialValues = { coverphoto: '', description:'', title: '', slug: '', author: '', thumbnail: '', date: '', active: '', duration: '', document_id: '', sequence: '',category: ''};
//     const [formValues, setFormValues] = useState(initialValues);
//     const [isSubmit, setIsSubmit] = useState(false);
//     console.log(formValues);

//     const uploadToClient = async (event) => {
//         var file_size = event.target.files[0].size;
//         if(file_size < 10000000){
//           if (event.target.files && event.target.files[0]) {
//             const i = event.target.files[0];

//             setResumefile(i);
//             setCreateObjectURL(URL.createObjectURL(i));

//           }
//           }else{
//             alert('file size should be less than 10MB');
//             document.getElementById('resume_file').value='';
//           }

//         };

//         const uploadPhoto = async (e) => {
//           const file = e.target.files[0];
//           var file_size = e.target.files[0].size;

//           if(file_size < 10000000){
//           var re = /(?:\.([^.]+))?$/;
//           var x = Date.now() +''+ Math.floor(Math.random() * 1000);
//           var ext = re.exec(file.name)[1];
//           var new_filename = x+'.'+ext;
//          // console.log(new_filename);
//           const filename = encodeURIComponent(file.name);
//           const res = await fetch(`/api/imageupload?file=${new_filename}`);
//           const { url, fields } = await res.json();
//           console.log(res.json);
//           const formData = new FormData();

//           Object.entries({ ...fields, file }).forEach(([key, value]) => {
//             formData.append(key, value);
//           });

//           const upload = await fetch(url, {
//             method: 'POST',
//             mode: 'no-cors', // no-cors, *cors, same-origin
//             body: formData,
//           }).then((data)=>{/*console.log(data.json)*/});

//           setFormValues({ ...formValues, coverphoto: 'https://storage.googleapis.com/website-bucket-uploads/blog_images/'+new_filename });

//           if (upload) {
//             console.log('Uploaded successfully!');
//              setFormValues({ ...formValues, coverphoto: 'https://storage.googleapis.com/website-bucket-uploads/blog_images/'+new_filename });

//           } else {
//             console.log(upload);
//             setFormValues({ ...formValues, coverphoto: 'https://storage.googleapis.com/website-bucket-uploads/blog_images/'+new_filename });

//           }

//           console.log(formValues)
//       }else{
//           alert('file size should be less than 10MB');
//             document.getElementById('resume_file').value='';
//       }

//         };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//         console.log(formValues);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         setIsSubmit(true);
//         alert('submitted');
//         console.log("submit2")
//         fetch('/api/admin/blogs/new', {
//             method: 'POST', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json',
//                 'mode': 'no-cors'
//             },
//             body: JSON.stringify({
//                 "title": formValues.title,
//                "slug": formValues.slug,
//                "description": formValues.description,
//                "author": formValues.author,
//                "duration": formValues.duration,
//                "date": formValues.date,
//                "coverphoto": formValues.coverphoto,
//                "thumbnail": formValues.thumbnail,
//                "document_id": formValues.document_id,
//                "active":formValues.active,
//                "category":formValues.category,
//                "sequence" :formValues.sequence
//    }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log('Success:', data);
//                 alert('data updated');
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 alert('error');
//             });

//     };

//     useEffect(() => {
//         // console.log(formErrors);
//          if (isSubmit) {

//             console.log("submit2")
//              fetch('/api/admin/blogs/create', {
//                  method: 'POST', // or 'PUT'
//                  headers: {
//                      'Content-Type': 'application/json',
//                      'mode': 'no-cors'
//                  },
//                  body: JSON.stringify({
//                      "title": formValues.title,
//                     "slug": formValues.slug,
//                     "description": formValues.description,
//                     "author": formValues.author,
//                     "duration": formValues.duration,
//                     "date": formValues.date,
//                     "coverphoto": formValues.coverphoto,
//                     "thumbnail": formValues.thumbnail,
//                     "document_id": formValues.document_id,
//                     "active":"true",
//                     "category":formValues.category,
//                     "sequence" :formValues.sequence
//         }),
//              })
//                  .then((response) => response.json())
//                  .then((data) => {
//                      console.log('Success:', data);
//                      alert('data updated');
//                  })
//                  .catch((error) => {
//                      console.error('Error:', error);
//                      alert('error');
//                  });

//          }
//      }, []);

// if(session){
//   return (
//     <div>
//         <form  onSubmit={handleSubmit}>
//             Blog Title - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="title" value={formValues.title} onChange={handleChange} /><br/>
//             Author - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="author" value={formValues.author} onChange={handleChange} /><br/>
//             Slug - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="slug" value={formValues.slug} onChange={handleChange} /><br/>
//             Reading Time - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="duration" value={formValues.duration} onChange={handleChange} /><br/>
//             Publish Date - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="date" value={formValues.date} onChange={handleChange} /><br/>
//             Description - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="description" value={formValues.description} onChange={handleChange} /><br/>
//             Coverimage URL- <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="coverphoto" value={formValues.coverphoto} onChange={handleChange} /><br/>
//             Coverimage Upload - <input required type="file" id="resume_file" onChange={uploadPhoto}  accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" /><br/>
//             Document ID - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="document_id" value={formValues.document_id} onChange={handleChange} /><br/>
//             Sequence - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="sequence" value={formValues.sequence} onChange={handleChange} /><br/>
//             Active - <select required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.active} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br/>
//             <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
//         </form>
//     </div>
//   )

// }
// return (
//   <>
//     <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
//   </>
// )
// }

// export default index
