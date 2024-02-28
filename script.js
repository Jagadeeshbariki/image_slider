let img = ["https://i.pinimg.com/originals/b2/1b/e1/b21be13b0c787425a3de22435c1920b8.png",
 "https://www.pngall.com/wp-content/uploads/2016/07/Tom-And-Jerry-PNG-Image.png", 
 "https://pngimg.com/d/tom_and_jerry_PNG62.png", 
 "https://pngimg.com/d/tom_and_jerry_PNG12.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eGL7HB0jcmwOSrwk75JZ7rsloc9UjTPmmxgotDpN-x279zEwLzzGQNUs1Y-8fzR4lTU&usqp=CAU", "https://w7.pngwing.com/pngs/1003/402/png-transparent-tom-and-jerry-smiling-illustration-tom-cat-jerry-mouse-nibbles-tom-and-jerry-tom-and-jerry-mammal-heroes-cat-like-mammal.png"];


 let imgContainer = document.querySelector(".imgContainer");
 
 let imgTag = document.querySelector("#imgTag");

// let imgCount=0;
let imgCount=0;
imgTag.setAttribute("src", img[imgCount]);

 function rightBtn(){
    
    if(imgCount<img.length-1){
        
        imgCount++;
        imgTag.setAttribute("src", img[imgCount]);
        // alert(img.length)
    }
    else{
        imgCount=0;
        imgTag.setAttribute("src", img[imgCount]);
    }
    // alert(imgCount)
 }

 setInterval(()=>{
    rightBtn();
 },5000)

//  Left Button Click functon

 function leftBtn(){
    if(imgCount>0){
        imgCount--;
        imgTag.setAttribute("src", img[imgCount]);

    }
    else{
        imgCount=img.length-1;
        imgTag.setAttribute("src", img[imgCount]);
    }
 }

// Taking the URL from the User:
let url ="";
function uploadURL(){
  url = document.getElementById("url").value;
  
}

// on clicking the submit button the url should add to the img array
function addURL(){
    img.push(url)
    // alert(img.length)
    imgTag.setAttribute("src", img[img.length-1]);
    document.getElementById("url").value ="";
}

// Clearing all the image in the array

function clearimg(){
    img.splice(0, img.length);
}