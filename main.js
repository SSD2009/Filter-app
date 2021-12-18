function setup(){
    canvas=createCanvas(640,500);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tintcolor="";
}

function draw(){
    image(video,0,0,640,500);
    tint(tintcolor);
}

function takephoto(){
    save("filterphoto.jpeg");
}

function applyfilter(){
    tintcolor=document.getElementById("color").value;
}