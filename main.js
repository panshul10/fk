Webcam.set({
    width : 350,
    Height : 300,
    image_format : 'cng',
    cng_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "'+ data_uri + '"/>';
    })
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J6AVd8Lxu/');

function modelLoaded()
{
    console.log('model Loaded!');
    
}

function check()
{
 img = document.getElementById('captured_image');
 classifier.classify(img, gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_Accuracy").innerHTML = result[0].confidence.toFixed(3);
    }}
