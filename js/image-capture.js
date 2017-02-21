
function capturePhoto() {
// Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 40, saveToPhotoAlbum: false, correctOrientation:true });
}

//Callback function when the picture has been successfully taken
function onPhotoDataSuccess(imageData) {                
    // Get image handle
    var smallImage = document.getElementById('smallImage');

    // Unhide image elements
    smallImage.style.display = 'block';
    smallImage.src = imageData;
		uploadPhoto(imageData);
}

//Callback function when the picture has not been successfully taken
function onFail(message) {
    alert('Failed to load picture because: ' + message);
}


function toTimestamp(strDate){
   var datum = Date.parse(strDate);
   return datum/1000;
}

function uploadPhoto(imageURI) {
 var options = new FileUploadOptions();
 options.fileKey = "file";
 options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 options.mimeType = "image/jpeg";
 console.log(options.fileName);
 var params = new Object();
 var currentDate = new Date();
 params.currentTimestamp = toTimestamp(currentDate);
 var user ="100769098";
 params.username = user;
 options.params = params;
 options.chunkedMode = false;

var ft = new FileTransfer();
 ft.upload(imageURI, "http://www.mediathrong.com/beepboards/tracking/bbtracker1.10/upload.php", function(result){
 console.log(JSON.stringify(result));
 }, function(error){
 console.log(JSON.stringify(error));
 }, options);
 }