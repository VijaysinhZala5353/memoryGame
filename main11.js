image_src = ["images/image1.png", "images/images2.png", "images/images3.png", "images/images4.png", "images/images5.png", "images/images6.png", "images/images7.png", "images/images8.png"]
var totalFlip = 0
var flip1;
var flip2;
var randomImages = []
var randImages1 = []
var randImages2 = []
var score = 0
var matchFlip = false;
var image1;
var image2;
var startTime;


async function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

function updateTimer() {
    var currentTime = new Date();
    var timeDifference = currentTime - startTime;
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = minutes + 'm ' + seconds + 's';
}

function endGame() {
    endTime = new Date();
    var timeDifference = endTime - startTime;
    var timeTaken = Math.floor(timeDifference / 1000);
    thisMatchScore = timeTaken
    console.log(thisMatchScore)
    clearInterval(timer);
    startTime = new Date();
    updateTimer()
    setRandomImages()
}

function setRandomImages()
{
    startTime = new Date();
    for(var i = 0; randomImages.length != 16; i++)
    {
        var randomNumber = Math.floor(Math.random() * image_src.length)
        if(!randImages1.includes(image_src[randomNumber]))
        {
            randImages1.push(image_src[randomNumber])
        }
        else if(!randImages2.includes(image_src[randomNumber]))
        {
            randImages2.push(image_src[randomNumber])
        }
        if(randImages1.length == 8 && randImages2.length == 8)
        {
            randomImages = randImages1.concat(randImages2)
        }
        console.log(randomImages[i])
        setInterval(function() {
            updateTimer();
        }, 1000);
    }
    console.log(randomImages)
}

function changeImage(imageId) {
    totalFlip++;
    indexOfFlip = imageId.replace(/\D/g,'');
    if(totalFlip == 1)
    {
        image1 = document.getElementById(imageId);
        image1.src = String(randomImages[indexOfFlip-1]);
        console.log(image1.src)
    }
    if(totalFlip == 2)
    {
        image2 = document.getElementById(imageId);
        image2.src = randomImages[indexOfFlip-1];
        console.log(image1.src)
        console.log(image2.src)
        backflip(image1.src, image2.src)
        totalFlip = 0
    }
}

async function backflip(flip1, flip2)
{
    if(flip1 == flip2)
    {
        score++;
        document.getElementById("score").innerHTML = score
        if(score == 8)
        {
            endGame()
            if(Number(document.getElementById("highScore5").innerHTML) > thisMatchScore)
            {
                document.getElementById("highScore5").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore4").innerHTML) > thisMatchScore)
            {
                document.getElementById("highScore4").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore3").innerHTML) > thisMatchScore)
            {
                document.getElementById("highScore3").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore2").innerHTML) > thisMatchScore)
            {
                document.getElementById("highScore2").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore1").innerHTML) > thisMatchScore)
            {
                document.getElementById("highScore1").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore1").innerHTML) == 0)
            {
                document.getElementById("highScore1").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore2").innerHTML) == 0)
            {
                document.getElementById("highScore2").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore3").innerHTML) == 0)
            {
                document.getElementById("highScore3").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore4").innerHTML) == 0)
            {
                document.getElementById("highScore4").innerHTML = thisMatchScore
            }
            else if(Number(document.getElementById("highScore5").innerHTML) == 0)
            {
                document.getElementById("highScore5").innerHTML = thisMatchScore
            }
            score = 0
            document.getElementById("image1").src = "images/bg.png";
            document.getElementById("image2").src = "images/bg.png";
            document.getElementById("image3").src = "images/bg.png";
            document.getElementById("image4").src = "images/bg.png";
            document.getElementById("image5").src = "images/bg.png";
            document.getElementById("image6").src = "images/bg.png";
            document.getElementById("image7").src = "images/bg.png";
            document.getElementById("image8").src = "images/bg.png";
            document.getElementById("image9").src = "images/bg.png";
            document.getElementById("image10").src = "images/bg.png";
            document.getElementById("image11").src = "images/bg.png";
            document.getElementById("image12").src = "images/bg.png";
            document.getElementById("image13").src = "images/bg.png";
            document.getElementById("image14").src = "images/bg.png";
            document.getElementById("image15").src = "images/bg.png";
            document.getElementById("image16").src = "images/bg.png";
        }
    }
    else
    {
        await delay(1000)
        image1.src = "images/bg.png";
        image2.src = "images/bg.png";
    }
}
