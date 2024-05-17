document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById('file-input');
    const previewContainer = document.getElementById('preview-container');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('Please select an image.');
        return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imgSrc = event.target.result;
        const img = document.createElement('img');
        img.src = imgSrc;
        previewContainer.innerHTML = '';
        previewContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
});
