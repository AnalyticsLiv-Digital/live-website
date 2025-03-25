export const uploadPhoto = async (e, fieldName, formValues, setFormValues) => {
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

        setFormValues({ ...formValues, [fieldName]: 'https://storage.googleapis.com/website-bucket-uploads/cs/' + new_filename });

        console.log(formValues)
    } else {
        alert('file size should be less than 10MB');
        e.target.value = '';
    }
};