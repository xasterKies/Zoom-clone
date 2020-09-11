let myVideoStream

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(create => {
    myVideoStream = stream;
})


cosnt addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener()
}