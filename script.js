document.addEventListener("DOMContentLoaded", () => {
    const playMusicBtn = document.getElementById("playMusicBtn");
    const specialMessage = document.getElementById("specialMessage");
    const changingContent = document.getElementById("changingContent");
    const changingImage = document.getElementById("changingImage");
    const changingMessages = document.getElementById("changingMessages");
    const nextBtn = document.getElementById("nextBtn");
    const proposalMessage = document.getElementById("proposalMessage");
    const gifContainer = document.getElementById("gifContainer");
    const responseButtons = document.getElementById("responseButtons");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const backgroundMusic = document.getElementById("backgroundMusic");

    const messages = [
        "You are a pure soul",
        "Spending time with you is very special",
        "You make me feel loved",
        "You are my best friend"
    ];

    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
    ];

    const noMessages = [
        "I will never lie to you",
        "I will take great care of you",
        "I will love you more than myself",
        "Please, please say yes"
    ];

    const noGifs = [
        "no1.gif",
        "no2.gif",
        "no3.gif",
        "no4.gif"
    ];

    let currentIndex = 0;
    let noMessageIndex = 0;

    playMusicBtn.addEventListener("click", () => {
        backgroundMusic.play();
        playMusicBtn.classList.add("hidden");
        
        setTimeout(() => {
            specialMessage.classList.remove("hidden");
            nextBtn.classList.remove("hidden");
            changingContent.classList.remove("hidden");
            changingImage.src = images[currentIndex];
            changingImage.classList.remove("hidden");
            changingMessages.innerText = messages[currentIndex];
        }, 1000);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex < messages.length) {
            changingImage.src = images[currentIndex];
            changingMessages.innerText = messages[currentIndex];
        } else {
            specialMessage.classList.add("hidden");
            changingContent.classList.add("hidden");
            nextBtn.classList.add("hidden");
            proposalMessage.innerHTML = "<img src='proposal.gif'><br>Will you be my Jaanu?";
            proposalMessage.classList.remove("hidden");
            responseButtons.classList.remove("hidden");
        }
    });

    yesBtn.addEventListener("click", () => {
        proposalMessage.innerHTML = "<img src='happy.gif'><br>I will take care of you more like my daughter!";
        responseButtons.classList.add("hidden");
    });

    noBtn.addEventListener("click", () => {
        if (noMessageIndex < noMessages.length) {
            gifContainer.innerHTML = `<img src='${noGifs[noMessageIndex]}'><br>`;
            proposalMessage.innerHTML = noMessages[noMessageIndex];
            noMessageIndex++;
        }
    });
});
