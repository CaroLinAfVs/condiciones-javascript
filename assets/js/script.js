


document.querySelector("#resultado").onclick = function (elem) 
 {
   if (this.style.border === "none"){
    this.style.border = "solid 2px red"
    document.querySelector("#resultado").src= "https://media.istockphoto.com/photos/cute-red-kitten-is-sleeping-on-his-back-and-smiling-paws-up-concept-picture-id1144982182?k=20&m=1144982182&s=612x612&w=0&h=VBL-PDRr9FddwkY4c7yBIkozv6669r-xNl-QJRRb1iw="
   } else {
    this.style.border ="none"
    document.querySelector("#resultado").src= "https://i.pinimg.com/736x/8b/a2/83/8ba283897b9ad414c929ca1a8630b4bd.jpg"
   }
}