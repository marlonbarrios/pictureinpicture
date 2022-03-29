const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    await selectMediaStream()
});


button2.addEventListener('click', async () => {
    // Disable Button
    button2.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button2.disabled = false;
});


