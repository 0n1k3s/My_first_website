var count =0
document.getElementById("myButton").onclick = function (){
    // if %2==0 - close the picture %2==1 - open the picture
    count++;
    if (count%2==0){
        document.getElementById("demo").innerHTML = "";
    }
    else{
        var img = document.createElement("img");
        img.src = "https://gameguru.ru/media/comment_images/2022/09/24/image0_7dgHU07.jpg";
        document.getElementById("demo").appendChild(img);
    }
}