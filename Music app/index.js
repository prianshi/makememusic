window.addEventListener("load",() => {
    const sounds=document.querySelectorAll(".sound");
    const pads =document.querySelectorAll(".pads div");
    const visual =document.querySelector(".visual");
    const colors = [
        "#ffff00",
        "#ff1a75",
        "#800080",
        "#ff0000",
        "#80bfff",
        "#ff751a"

    ];

    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
            sounds[index].currentTime =0;
            sounds[index].play();

            createBubble(index);
        });
    });

    const createBubble = (index) => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
    });