var data = document.getElementById("txt")
var button = document.getElementById("buttonInput")
var qr = document.getElementById("photo")
var container = document.querySelector(".container");
button.addEventListener("click",()=>{
    var news = data.value;
    async function imageshandle(){
        try{
            var response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${news} `)
            var data = await response.blob();
            var imageUrl = URL.createObjectURL(data);
            return imageUrl;
            
        }
        catch(errro){
            console.error();
        }
       
    
    }
    imageshandle().then(imageUrl =>{
        if(imageUrl){
            
            qr.src=imageUrl;
            container.classList.add("qr-generated");
        }
    })
})


