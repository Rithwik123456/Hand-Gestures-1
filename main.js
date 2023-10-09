/* https://teachablemachine.withgoogle.com/models/Nc0EU27le/ */

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
 });

 camera=document.getElementById("camera");
 Webcam.attach("#camera");


 function take_Snapshot(){
    Webcam.snap(function(data_Uri){
        document.getElementById("result").innerHTML='<img id = "captured_image" src="'+data_Uri+'">';
        
    })
 }
 console.log("ml5 version",ml5.version);

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Nc0EU27le/model.json", ModelReady);

 function ModelReady(){
    console.log("model loaded");
 }