    let button=document.getElementById("btn")
    button.addEventListener("dblclick",()=>
    {
        document.querySelector(".box").innerHTML="<b>Yayy you were clicked </b> Enjoy your click"
    })
   button.addEventListener("contextmenu", (e) => {
  // 👈 this stops the right-click menu
  alert("dont hack us by right click");
});