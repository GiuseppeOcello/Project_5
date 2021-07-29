//*** Lightbox script***//
baguetteBox.run('.gallery');

window.addEventListener('load', function() {
   baguetteBox.run('.gallery');
 });

//*** Searching scripts***//

//*** Variables
const searchBar = document.querySelector(".search-bar");
const search = document.querySelector("#search");
const image = document.querySelectorAll('img');
let wrapper = document.querySelectorAll('a');
let warningCaption = document.createElement('p');
let warningImage = document.createElement('img');
let checker = 0; // Used to know if there are any images with display property set to default


//*** Functions

/* Search Function, it compares the entered string at each keyup event with the
data-caption attribute off the img elements and set the display property on and off 
depending on the match*/

search.addEventListener('keyup', e => {


   // Iterates thorugh all the img elements and compare the input with the caption
   for (i=0; i < image.length; i++) {
      let caption = wrapper[i].getAttribute("data-caption");
         if (caption.toUpperCase().indexOf(search.value.toUpperCase()) > -1) {
            wrapper[i].style.display = "";
            checker ++;
         } else {
            wrapper[i].style.display = "none";
            checker += 0;
         }
         
      }

      /* It shows or hide a message if the checker variable is null or > 0, in other
      words if some images are outputed from the previous loop of not */
      if (checker === 0) {
         warningCaption.className = "warningCpt";
         warningCaption.textContent = "Sorry there is no match with your entry, try typing somthing else.";
         warningImage.className = "warningImg";
         warningImage.src ="img/thumbnails/Image_Not_Found.png";
         searchBar.append(warningCaption, warningImage);
      } else if (searchBar.contains(warningCaption)) {
         searchBar.removeChild(warningCaption);
         searchBar.removeChild(warningImage);
      }
      checker = 0;
});

