import { useState,useEffect, useCallback } from 'react';
import { RichTextEditor } from '@mantine/rte';


export default function Editor() {
  const [value, onChange] = useState('<p>Your initial <b>html value</b> or an empty string to init editor without value</p>');

  
  
  const handleImageUpload = useCallback(
    (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('image', file);

        fetch('https://api.imgbb.com/1/upload?key=09c2f9bc0227d91fe6dd7817291dea4f', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => resolve(result.data.url))
          .catch(() => reject(new Error('Upload failed')));
      }),
    []
  );

  const showValue =()=>{
    console.log(value);
  }

  return (
    <>
    <div>Title of the blog - <input type="text"/></div>
    <div>Slug - <input type="text"/></div>
    <div>Author - <input type="text"/></div>
    <div>Reading time - <input type="text"/></div>
    <div>Publish Date - <input type="text"/></div>
    <div>Thumbnail - <input type="file"/></div>
    <div></div>
    <div>Cover photo - <input type="file"/></div>
    <div></div>
    <div>Content</div>
    <RichTextEditor value={value} onChange={onChange} onImageUpload={handleImageUpload} id="rte" />
    <br/>
    <button onClick={showValue}>hello</button>
    </>
  );
}