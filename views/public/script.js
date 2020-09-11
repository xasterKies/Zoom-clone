let myVideoStream

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(create => {
    myVideoStream = stream;
})