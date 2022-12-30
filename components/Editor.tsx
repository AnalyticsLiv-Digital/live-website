import { useState,useEffect, useCallback } from 'react';
import { RichTextEditor } from '@mantine/rte';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

export default function Editor() {
  const [value, onChange] = useState('<p>Your initial <b>html value</b> or an empty string to init editor without value</p>');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');

  const handleSlug = (e)=>{
    setSlug(e.target.value);
  }

  const handleTitle = (e)=>{
    setTitle(e.target.value);
  }
  useEffect(() => {
  fetch('/api/admin/blogs/edit', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "cookie": "fiif348df9fj34r3",
}),
})
    .then((response) => response.json())
    .then((data) => {
    onChange(data.blog[0].content);
    setSlug(data.blog[0].slug);
    setTitle(data.blog[0].title);
    console.log(data.blog[0].slug);
 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }, []);
  
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
    <div>Title of the blog - <input type="text" onChange={handleTitle} value={title}/></div>
    <div>Slug - <input type="text" onChange={handleSlug} value={slug}/></div>
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