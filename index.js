const ramenList = document.getElementById("ramen-list");
const ramenDetails = {
    image: document.querySelector("#ramen-details img"),
    name: document.getElementById("ramen-name"),
    restaurant: document.getElementById("ramen-restaurant"),
    rating: document.getElementById("ramen-rating"),
    comment: document.getElementById("ramen-comment")
};
const ramenForm = document.getElementById("ramen-form");
const addRamenBtn = document.getElementById("add-ramen");

let ramenData = [
    {
        name: "Shoyu Ramen",
        restaurant: "Ichiran",
        image: "https://thehappyfoodie.co.uk/wp-content/uploads/2021/05/nanban-1-cdf08a51-c816-432d-88d7-528086c8f897_s600x0_q80_noupscale-225x300.jpg",
        rating: 9,
        comment: "Delicious and well-balanced broth!"
    },
    {
        name: "Tonkotsu Ramen",
        restaurant: "Ippudo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyC1vwy2-x2tO6fx5emgjB4HrcaDYdvKj-CQ&s",
        rating: 8,
        comment: "Rich and creamy broth!"
    },
    {
        name: "Miso Ramen",
        restaurant: "Ramen Nagi",
        image: "https://t3.ftcdn.net/jpg/10/21/29/08/360_F_1021290870_MyL2FN5nbXav4JDs8lKo5v42eiJ6XNHZ.jpg",
        rating: 10,
        comment: "The best miso ramen I've had!"
    }
];

function renderRamenList() {
  ramenList.innerHTML = "";
  ramenData.forEach((ramen, index) => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener("click", () => showRamenDetails(index));
      img.style.width = "150px";
      img.style.height = "150px";
      ramenList.appendChild(img);
  });
}

function showRamenDetails(index) {
    const ramen = ramenData[index];
    ramenDetails.image.src = ramen.image;
    ramenDetails.name.textContent = ramen.name;
    ramenDetails.restaurant.textContent = ramen.restaurant;
    ramenDetails.rating.textContent = ramen.rating;
    ramenDetails.comment.textContent = ramen.comment;
}

addRamenBtn.addEventListener("click", () => {
    ramenForm.style.display = ramenForm.style.display === "none" ? "block" : "none";
});

ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
        name: document.getElementById("name").value,
        restaurant: document.getElementById("restaurant").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
        comment: document.getElementById("comment").value
    };

    ramenData.push(newRamen);
    renderRamenList();
    ramenForm.reset();
    ramenForm.style.display = "none";
});

renderRamenList();
showRamenDetails(0);