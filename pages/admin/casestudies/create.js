import React from 'react'
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import GoogleButton from 'react-google-button'

const index = () => {

  //console.log(blogData);
  const initialValues = { open: 'true', coverimage: '', description: '', title: '', slug: '', author: '', filename: '', date: '', active: '', sequence: '', heading1: '', heading2: '', heading3: '', heading4: '', heading5: '', content1: '', content2: '', content3: '', content4: '', content5: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formValues);
  const router = useRouter();



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

      setFormValues({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

      if (upload) {
        console.log('Uploaded successfully!');
        setFormValues({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

      } else {
        console.log(upload);
        setFormValues({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

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

      setFormValues({ ...formValues, filename: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

      if (upload) {
        console.log('Uploaded successfully!');
        setFormValues({ ...formValues, filename: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

      } else {
        console.log(upload);
        setFormValues({ ...formValues, filename: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

      }

      console.log(formValues)
    } else {
      alert('file size should be less than 10MB');
      document.getElementById('casestudy_file').value = '';
    }


  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);
    setLoading(true);
    alert('submitted');
    console.log("submit2")
    fetch('/api/admin/casestudy/new', {
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
        "open": formValues.open
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

  const { data: session } = useSession()
  const [loginstate, setLoginstate] = useState(session ? true : false);

  const handleCancel = () => {
    router.push("/admin/casestudies"); // Redirects back to the blogs page
  };

  if (session) {

    return (
      <div className="p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Create New Case Study</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>

              <label className="block text-base font-semibold mb-1 text-gray-200">
                Id - </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="id" value={formValues.id} onChange={handleChange} /><br />

            </div>
            <div>
              <label className="block text-base font-semibold mb-1 text-gray-200">
                Casestudy Title -
              </label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="title" value={formValues.title} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Author -
            </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="author" value={formValues.author} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Slug - </label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="slug" value={formValues.slug} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Publish Date - </label>
              <input className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="date" value={formValues.date} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Description - </label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="description" value={formValues.description} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              File URL -</label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="filename" value={formValues.filename} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Casestudy Upload - </label>
              <input type="file" id="casestudy_file" onChange={uploadCaseStudy} accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Coverimage URL- </label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="coverimage" value={formValues.coverimage} onChange={handleChange} /><br />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Coverimage Upload - </label>
              <input type="file" id="coverimage_file" onChange={uploadPhoto} accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 bg-slate-100  py-2 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none" placeholder="No file" />
            </div>
            <div><label className="block text-base font-semibold mb-1 text-gray-200">
              Sequence - </label>
              <input required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="sequence" value={formValues.sequence} onChange={handleChange} /><br />
            </div>
            <label className="block text-base font-semibold mb-1 text-gray-200">Active - </label><select required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="active" value={formValues.active} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />
            <label className="block text-base font-semibold mb-1 text-gray-200">Open Download - </label><select required className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="active" value={formValues.open} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br />

            <label className="block text-base font-semibold mb-1 text-gray-200">Content - </label>
            <input required placeholder='Heading 1' className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading1" value={formValues.heading1} onChange={handleChange} /><br />
            <textarea required placeholder="Content 1" className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content1" value={formValues.content1} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 2' className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading2" value={formValues.heading2} onChange={handleChange} /><br />
            <textarea placeholder="Content 2" className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content2" value={formValues.content2} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 3' className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading3" value={formValues.heading3} onChange={handleChange} /><br />
            <textarea placeholder="Content 3" className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content3" value={formValues.content3} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 4' className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading4" value={formValues.heading4} onChange={handleChange} /><br />
            <textarea placeholder="Content 4" className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content4" value={formValues.content4} onChange={handleChange} /><br /><br />
            <input placeholder='Heading 5' className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="heading5" value={formValues.heading5} onChange={handleChange} /><br />
            <textarea placeholder="Content 5" className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500" type="text" name="content5" value={formValues.content5} onChange={handleChange} /><br />
            {/* <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button> */}
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
    )
  }
  return (
    <>
      <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
    </>
  )
}


export default index;