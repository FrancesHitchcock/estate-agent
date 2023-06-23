"use strict";

const propertiesList = document.getElementById("properties-list");

const propertyForm = document.getElementById("property-form");

propertyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("hi");
  propertyForm.reset();
});

function Property(
  address,
  location,
  bedrooms,
  garden,
  features,
  imgUrl,
  price
) {
  this.address = address;
  this.location = location;
  this.bedrooms = bedrooms;
  this.garden = garden;
  this.features = features;
  this.imgUrl = `/images/${imgUrl}`;
  this.price = price;
  this.render();
}

Property.prototype.render = function () {
  const propertyCard = document.createElement("article");
  propertiesList.appendChild(propertyCard);

  const h3Address = document.createElement("h3");
  h3Address.textContent = `${this.address}`;
  propertyCard.appendChild(h3Address);

  const h4Location = document.createElement("h4");
  h4Location.textContent = `Location: ${this.location}`;
  propertyCard.appendChild(h4Location);

  const pBedrooms = document.createElement("p");
  pBedrooms.textContent = `Bedrooms: ${this.bedrooms}`;
  propertyCard.appendChild(pBedrooms);

  const pGarden = document.createElement("p");
  pGarden.textContent = `Garden: ${this.garden ? "yes" : "no"}`;
  propertyCard.appendChild(pGarden);

  const pFeatures = document.createElement("p");
  pFeatures.textContent = `Features: ${this.features.join("; ")}.`;
  propertyCard.appendChild(pFeatures);

  const propertyImg = document.createElement("img");
  propertyImg.setAttribute("src", this.imgUrl);
  propertyImg.setAttribute("alt", this.address);
  propertyCard.appendChild(propertyImg);

  const h5Price = document.createElement("h5");
  h5Price.textContent = `Asking Price: £${this.price.toLocaleString()}`;
  propertyCard.appendChild(h5Price);
};

const woodLane23 = new Property(
  "23, Wood Lane",
  "Halesworth",
  4,
  true,
  ["garage", "main bedroom with en suite", "quiet residential area"],
  "23-wood-lane.png",
  850000
);

const costaHouse = new Property(
  "Costa House",
  "Barcelona",
  3,
  true,
  ["Mediterranean views", "private pool", "secluded property"],
  "costa-house.png",
  1200000
);

// console.log(woodLane23);
