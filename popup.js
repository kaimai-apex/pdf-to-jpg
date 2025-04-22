// PDF.js worker
const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.min.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Extension loaded!'); // Debug log

    // Get all elements
    const fileInput = document.getElementById('fileInput');
    const selectButton = document.getElementById('selectButton');
    const progress = document.getElementById('progress');
    const progressBar = document.getElementById('progressBar');
    const status = document.getElementById('status');
    const fileInfo = document.getElementById('fileInfo');
    const uploadCheck = document.getElementById('uploadCheck');
    const startCheck = document.getElementById('startCheck');
    const finishCheck = document.getElementById('finishCheck');

    // Debug: Log all elements to make sure they're found
    console.log('Elements found:', {
        fileInput: !!fileInput,
        selectButton: !!selectButton,
        progress: !!progress,
        status: !!status,
        fileInfo: !!fileInfo,
        uploadCheck: !!uploadCheck,
        startCheck: !!startCheck,
        finishCheck: !!finishCheck
    });

    // Add click handler to select button
    selectButton.addEventListener('click', () => {
        console.log('Select button clicked');
        fileInput.click();
    });

    // Basic file input change handler
    fileInput.addEventListener('change', (event) => {
        console.log('File input change detected');
        
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', {
                name: file.name,
                type: file.type,
                size: file.size
            });

            // Show file info immediately
            fileInfo.style.display = 'block';
            fileInfo.textContent = `Selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
            
            // Check if it's a PDF
            if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
                console.log('PDF file detected');
                alert('PDF file detected: ' + file.name); // Debug alert
                
                // Update checkbox
                uploadCheck.checked = true;
                uploadCheck.parentElement.classList.add('completed');
                
                // Show progress
                progress.style.display = 'block';
                status.textContent = 'PDF file selected...';
                progressBar.style.width = '20%';
                
                // Process the PDF
                handleFile(file);
            } else {
                console.log('Not a PDF file');
                alert('Please select a PDF file. Selected file type: ' + file.type);
                resetForm();
            }
        } else {
            console.log('No file selected');
        }
    });

    function resetForm() {
        fileInput.value = '';
        fileInfo.style.display = 'none';
        progress.style.display = 'none';
        progressBar.style.width = '0%';
        status.textContent = '';
        uploadCheck.che