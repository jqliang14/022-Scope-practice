// Question 1

$(".question1").click(function() {
let randomNumber = Math.random();
$(".answer1").text(`The random number is... ${randomNumber}`);


});


// Question 2

// let pizzaNumber;
// pizzaNumber = Math.random() * 4;
// pizzaNumber = Math.ceil(pizzaNumber);
$(".question2").click(function() {
    let pizzaNumber = Math.ceil(Math.random(pizzaNumber) *4);
    $(".answer-two").text(`The random number is... ${pizzaNumber}`);
});