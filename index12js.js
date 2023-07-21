function homePage() {

    window.location.href = "index.html";
  } 
  
  
  document.body.style.backgroundImage= "url('https://cdn.wallpapersafari.com/37/60/aLKFHY.jpg')";
  document.addEventListener("DOMContentLoaded", function() {
    var cards = localStorage.getItem("cards");
    var cardContainer = document.getElementById("card-container");
  
    if (cards) {
      var parsedCards = JSON.parse(cards);
  
      parsedCards.forEach(function(card, index) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.style.width = "300px";
        newDiv.style.height = "400px";
        newDiv.style.backgroundColor = "rgb(218 214 214)";
        newDiv.style.color = "black";
        newDiv.style.padding = "10px";
        newDiv.style.position = "relative";
  
        var heading = document.createElement('h2');
        heading.textContent = "Word: " + card.word;
  
        var details = document.createElement("div");
        details.classList.add("details");
        details.style.padding = "10px";
        details.style.fontFamily = "Sitka Text";
        details.style.fontSize = "14px";
  
        var paragraph = document.createElement('p');
        paragraph.textContent = "Meaning:"+card.meaning;
  
        //var deleteButton = document.createElement("button");
        var image =document.createElement('img');
        image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1IO_-pku4M8rgrRdWC4CFAyK_jH_QLcOGA&usqp=CAU';
        image.style.width="30px";
        image.style.height="30px";
        image.style.position = "absolute"; //
        image.style.bottom = "10px"; 
        image.style.right = "10px"; 
        image.style.cursor = "pointer";
        image.style.borderRadius = "50%"
        
        //deleteButton.appendChild(image);
        image.addEventListener("click", function() {
          parsedCards.splice(index, 1);// splice method using add or remove element:
          localStorage.setItem("cards", JSON.stringify(parsedCards));// stringify object to convert simply text
          cardContainer.removeChild(newDiv);
        });
      // using appendchild use to remove node
        details.appendChild(heading);
        details.appendChild(paragraph);
        details.appendChild(image);
        newDiv.appendChild(details);
        cardContainer.appendChild(newDiv);
      });
    }
  });