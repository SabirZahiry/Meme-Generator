document.addEventListener("DOMContentLoaded", function(){
    let memeForm = document.getElementById("meme-form");
    let listGallery = document.getElementById(".gallery");

    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        // create a new list or li
    let memeLi = document.createElement("li");
    memeLi.classList.add("img-meme");

    // Ctreating a new elements to put all our image
    //let topText = document.getElementById("text-on-top");
    let inputUrl= document.getElementById("image-uploaded").value;
    src = inputUrl;
    Img = document.createElement("img");
    img.src = src;

    let topText = document.createElement("div");
    topText.classList.add("text", "top");
    topText.innerText = document.getElementById("text-top").value;

    let bottomText = document.createElement("div");
    bottomText.classList.add("text", "bottom");
    bottomText.innerText = document.getElementById("text-bottom").value;

    let removeText = document.createElement("div");
    removeText.classList.add("red-cross");
    removeText.innerText = "X";
    removeText.style.color = "red"

    listGallery.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topText);
    memeLi.appendChild(bottomText);
    memeLi.appendChild(removeText);

    memeForm.reset();

    })

    // remove fucntion
    // function remove(event){
    //     event.target.parentNode.remove();s
    //   }
      
      
    //   listGallery.addEventListener('click', remove, false);

});