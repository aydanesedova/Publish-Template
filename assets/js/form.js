const myForm = document.getElementById("myForm")
const nameinp = document.getElementById("nameinp")
const surnameinp = document.getElementById("surnameinp")
const ageinp = document.getElementById("ageinp")
const emailinp = document.getElementById("emailinp")



myForm.addEventListener("submit",function(event){
    event.preventDefault()
    axios.post("https://655c83b725b76d9884fd6e9b.mockapi.io/basket",{
        name: nameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        email: emailinp.value,
    })
    .then((res)=>{
        console.log(res.data);
    })
    setTimeout(function(){
        window.location = "index.html"
    },2000)
})