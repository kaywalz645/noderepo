const displayPeople = async () => {
  let response = await fetch("https://nodeassignment-oxnx.onrender.com/api/people");
  let peopleJSON = await response.json();
  let peopleDiv = document.getElementById("people");

  peopleJSON.forEach((people) => {
    let section = document.createElement("section");
    peopleDiv.append(section);

    let h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = people.name;

    let p = document.createElement("p");
    p.innerHTML =
      "Age: " +
      people.age +
      "<br>Favorite Color: " +
      people.fcolor +
      "<br>Activity: " +
      people.activity +
      "<br>Favorite Foods: " +
      people.fFoods;
    section.append(p);

    let img = document.createElement("img");
    section.append(img);
    img.src = "https://nodeassignment-oxnx.onrender.com/" + people.img;
  });
};

window.onload = () => {
  displayPeople();
};
