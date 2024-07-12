const uploadForm = document.getElementById('upload-form');

uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(uploadForm);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'upload.php', true);
      xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Upload successful!');
        } else {
            console.log('Upload failed!');
        }
    };
    xhr.send(formData);
});