Webcam.set({
    width:360,
    height:360,
    image_format:'png',
    png_quality:100
    });
    
    camera=document.getElementById("camera");
    Webcam.attach(camera)
    
    function take_image(){
        Webcam.snap(function(data_uri){
            document.getElementById("image").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });
    }
    
    console.log("ml5 version" , ml5.version);
    
    //unpkg.com/ml5@0.4.3/dist/ml5.min.js" target="_blank">https://unpkg.com/ml5@0.4.3/dist/ml5.min.js
    
    function check(){
    img=document.getElementById("selfie");
     classifier.classify(img,gotResult);   
    }
    
    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
           document.getElementById("name").innerHTML=results[0].label;
           document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3); 
     
        }
    }