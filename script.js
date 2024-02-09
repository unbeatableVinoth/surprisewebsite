const question = "pattuku ena vaangi tharuva ipo?";
const correctAnswer = "sweetcorn";

document.getElementById("question").innerText = question;

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = '<a href="https://mega.nz/folder/WKgh2QTB#9sCkmgo4k1gJd6PxXNMz2w">Click here for your gift!</a>';
    } else {
        document.getElementById("result").innerText = "Incorrect answer. Try again!";
    }
}
