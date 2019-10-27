window.addEventListener("load", checkHeight);

//global variables
const carCategories = [
  {//0
    category: "A",
    minHeight: 0,
    maxHeight: 1.8,
    price: 2.56
  },
  {//1
    category: "B",
    minHeight: 1.9,
    maxHeight: 3,
    price: 3.05
  },
  {//2
    category: "C",
    minHeight: 3.1,
    maxHeight: 5,
    price: 5.67
  },
  {//3
    category: "D",
    minHeight: 5.1,
    maxHeight: 8,
    price: 2.45
  }
];

//console.log(carCategories[2].maxHeight) //TEST

/**
 * Function to initialize the application
 * @param {*} event
 */



function checkHeight() {
  event.preventDefault()
  var height = document.getElementById("inputHeight").value
  // Dit zorgt ervoor dat de rode error niet blijft staan nadat er een nieuwe hoogte is aangegeven.
  document.getElementById("message").innerHTML = "";
  document.getElementById("message").className = "";
  
  
  //console.log(height) //TEST
  
  //error melding voor getallen onder 0. Aangezien je geen voertuig kan hebben in de -
  if  (height  < 0) {console.log("Geen waarde onder nul AUB")
  document.getElementById("message").innerHTML = "<p> Geen waarde onder 0 AUB </p>";
  document.getElementById("message").className = "error";
  document.getElementById("category-label").innerText = "";
  document.getElementById("category-price").innerText = "";  
  //Schrijf in DOM dat het voertuig te klein is.
  console.log("Geen waarde van onder 0 AUB")
  }

  //categorie A
  else if (height  >= carCategories[0].minHeight && height  <= carCategories[0].maxHeight) {console.log("Je voertuig zit in " + carCategories[0].category + " en dit kost € " + carCategories[0].price);
  document.getElementById("category-label").innerText = carCategories[0].category;
  document.getElementById("category-price").innerText = "€" + carCategories[0].price;
  }
  //categorie B
  else if (height  > carCategories[1].minHeight && height  <= carCategories[1].maxHeight) {console.log("Je voertuig zit in " + carCategories[1].category + " en dit kost € " + carCategories[1].price);
  document.getElementById("category-label").innerText = carCategories[1].category;
  document.getElementById("category-price").innerText = "€" + carCategories[1].price;
  }
  //categorie C
  else if (height  > carCategories[2].minHeight && height  <= carCategories[2].maxHeight) {console.log("Je voertuig zit in " + carCategories[2].category + " en dit kost € " + carCategories[2].price);
  //console.log(carCategories[2].category) //TEST
  document.getElementById("category-label").innerText = carCategories[2].category;
  document.getElementById("category-price").innerText = "€" + carCategories[2].price;
  }
  
  //categorie D
  else if (height  > carCategories[3].minHeight && height  <= carCategories[3].maxHeight) {console.log("Je voertuig zit in " + carCategories[3].category + " en dit kost € " + carCategories[3].price);
  document.getElementById("category-label").innerText = carCategories[3].category;
  document.getElementById("category-price").innerText = "€" + carCategories[3].price;
  }
  //foutmelding
  else  {document.getElementById("message").innerHTML = "<p> Je voertuig is te hoog voor onze tolwegen!. </p>";
  document.getElementById("message").className = "error";
  document.getElementById("category-label").innerText = ""; //Deze lijnen code is nodig anders komt het antwoord van de vorige nog op beeld.
  document.getElementById("category-price").innerText = "";
  //Schrijf in DOM dat het voertuig te groot is.
  console.log("Je voertui is te groot voor onze tolwegen!.")
  }
}


//Code geschreven door Laurensjan (Gerard) van Bruggen



