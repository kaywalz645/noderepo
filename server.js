const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.listen(3000, () => {
    console.log("im listening");
  });


app.get("/api/people", (req, res) => {
  const people = [];
  people[0] = {
    name: "Samatha Young",
    age: "47",
    fcolor: "Green",
    activity: "Knitting",
    fFoods: [" Yogurt", " Candy", " Pizza"],
    img: "images/old-lady.jpeg",
  };

  people[1] = {
    name: "Samuel Old",
    age: "2",
    fcolor: "Orange",
    activity: "Throwing things",
    fFoods: [" Peas", " Yogurt", " Banana"],
    img: "images/baby-boy.jpg",
  };

  people[2] = {
    name: "Henry Foul",
    age: "20",
    fcolor: "Yellow",
    activity: "Running",
    fFoods: [" Steak", " Mashed Potatos", " Beef Jerky"],
    img: "images/man.jpg",
  };

  people[3] = {
    name: "Katelyn Grow",
    age: "16",
    fcolor: "Purple",
    activity: "Dancing",
    fFoods: [" Cereal", " Spagetti", " Bread"],
    img: "images/teen-girl.jpg",
  };

  people[4] = {
    name: "Aaron Steve",
    age: "32",
    fcolor: "Brown",
    activity: "Coding",
    fFoods: [" Ramen", " Coffee", " Pasta"],
    img: "images/aged-guy.jpg",
  };

  res.json(people);
});

