// document.querySelector(".mobile-bar-cta").addEventListener("click",function(){
//   let a = document.querySelector(".topnav")

//   if (a.style.display == "none") {
//       a.style.display = "block";
//   } else {
//       a.style.display = "none";
//   }
// })

document.querySelector("button").addEventListener("click", function(){
  document.querySelector(".topnav").style.display = "block"
})



// document.querySelector(".mobile-bar-cta").addEventListener("click", function() {
//   document.querySelector(".topnav").style.display = "block";
 
  
// })







document.querySelector("#submit").addEventListener("click", function (e) {
    //dont do default behaviour
    e.preventDefault();
    let firstname = document.querySelector("#firstname");
    //<input name="firstname" id="firstname" placeholder="John" />
    validate(firstname);

    let youremail = document.querySelector("#youremail");
    //<input name="firstname" id="firstname" placeholder="John" />
    validate(youremail);

    let gender = document.querySelector("input[type=radio]");
    //<input name="firstname" id="firstname" placeholder="John" />
    validate(gender);

    let message = document.querySelector("#message");
    //<input name="firstname" id="firstname" placeholder="John" />
    validate(message);
    /**let firstname = document.querySelector("#firstname").value;
    if (firstname.length < 2) {
      document.querySelector("#label-firstname").classList.add("error");
    }
    let lastname = document.querySelector("#lastname").value;
    if (lastname.length < 2) {
      document.querySelector("#label-lastname").classList.add("error");
    }*/
  }),

  function validate(field) {
    //field
    //<input name="firstname" id="firstname" placeholder="John" />
    let fieldName = field.name; //value of name in the above line
    if (field.value.length < 2) {
      document.querySelector("#label-" + fieldName).classList.add("error");
    }
  
}

