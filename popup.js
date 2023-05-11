document.addEventListener('DOMContentLoaded', function () {
  var fileInput = document.getElementById('fileInput');
  //   console.log('working')
  chrome.extension
    .getBackgroundPage()
    .console.log('This message will be logged in the background page console');

  fileInput.addEventListener('change', function (event) {
    var file = event.target.files[0];

    // alert('working');
    alert('File name:', file);
    // console.log('File type:', file.type);
    // console.log('File size:', file.size, 'bytes');
  });
});
