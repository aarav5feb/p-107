//https://teachablemachine.withgoogle.com/models/K2SYF5oHW/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/K2SYF5oHW/model.json", modelReady);

    
}

function modelReady(){
    classifier.classify(gotResults);
}