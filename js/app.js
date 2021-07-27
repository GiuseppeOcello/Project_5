baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');​

// --- Search application --- //
// Variables

const search = document.querySelector("#search");
const image = document.querySelectorAll('img');
let wrapper = document.querySelectorAll('a');
const searchValue = search.value.toUpperCase();




search.addEventListener('keyup', e => {
   // console.log(e.key);
   console.log(search.value);
   // console.log(imageCaption[0].getAttribute("data-caption"));
   // console.log(imageCaption[0].textContent);

   for (i=0; i < image.length; i++) {
      caption = wrapper[i].getAttribute("data-caption");
         if (caption.toUpperCase().indexOf(search.value.toUpperCase()) > -1) {
            wrapper[i].style.display = "";
         } else {
            wrapper[i].style.display = "none";
         }
   }
})




// function myFunction() {
//    // Declare variables
//    var input, filter, ul, li, a, i, txtValue;
//    input = document.getElementById('myInput');
//    filter = input.value.toUpperCase();
//    ul = document.getElementById("myUL");
//    li = ul.getElementsByTagName('li');
 
//    // Loop through all list items, and hide those who don't match the search query
//    for (i = 0; i < li.length; i++) {
//      a = li[i].getElementsByTagName("a")[0];
//      txtValue = a.textContent || a.innerText;
//      if (txtValue.toUpperCase().indexOf(filter) > -1) {
//        li[i].style.display = "";
//      } else {
//        li[i].style.display = "none";
//      }
//    }
//  }