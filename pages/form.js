import { useState } from "react";


export default function PrivatePage() {
  const [resume, setResume] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = async (event) => {
  var file_size = event.target.files[0].size;
  if(file_size < 10000000){
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setResume(i);
      setCreateObjectURL(URL.createObjectURL(i));


      const body = new FormData();
      body.append("file", resume);
      const response = await fetch("/api/resumeupload", {
        method: "POST",
        body
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
  
        })


    }
    }else{
      alert('file size should be less than 10MB');
      document.getElementById('resume_file').value='';
    }

    
  };



  return (
    <div>
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" id="resume_file" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
        >
          Send to server
        </button>
      </div>
    </div>
  );
}
