function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KTESwPv03/model.json',modelReady);
}

function modelReady() {
classifier.classify(gotResults);
}

function gotResults(error,results) {
if (error) {
console.error(error);
}else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;


document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb(" +random_number_r+"," +random_number_g+"," +random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+"," +random_number_g+"," +random_number_b+")";

img = document.getElementById('Cat');
img1 = document.getElementById('Dog');
img2 = document.getElementById('Lion');
img3 = document.getElementById('Cow');

if (results[0].label == "Barking") {
    img.src = 'gamepack-studio-kitty-final.jpg'
    img1.src = '200.gif'
    img2.src = '360_F_118939938_QJEfcc07LQTjaGGvhqlCZtdKV7RyojR5.jpg'
    img3.src = 'depositphotos_3662592-stock-illustration-little-cow-eating-daisy.jpg'
    
    }else if(results[0].label == "meowing") {
        img.src = 'NAk7.gif'
        img1.src = 'depositphotos_176561306-stock-illustration-cute-little-dog-cartoon-sitting.jpg'
        img2.src = '360_F_118939938_QJEfcc07LQTjaGGvhqlCZtdKV7RyojR5.jpg'
        img3.src = 'depositphotos_3662592-stock-illustration-little-cow-eating-daisy.jpg'
    
    }else if(results[0].label == "roaring") {
        img.src = 'gamepack-studio-kitty-final.jpg'
        img1.src = 'depositphotos_176561306-stock-illustration-cute-little-dog-cartoon-sitting.jpg'
        img2.src = 'roaring-lion.gif'
        img3.src = 'depositphotos_3662592-stock-illustration-little-cow-eating-daisy.jpg'
    }else if(results[0].label == "mooing") {
        img.src = 'gamepack-studio-kitty-final.jpg'
        img1.src = 'depositphotos_176561306-stock-illustration-cute-little-dog-cartoon-sitting.jpg'
        img2.src = '360_F_118939938_QJEfcc07LQTjaGGvhqlCZtdKV7RyojR5.jpg'
        img3.src = '1626099670_16872_gif-url.gif'
    }
    }
    }
    