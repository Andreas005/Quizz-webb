let sendbutton = document.querySelector(".send-button");

sendbutton.addEventListener("click", handleform);

function handleform() {

    let points = 0;

    let answers = document.querySelectorAll("input:checked");
    for (let a = 0; a < answers.length; a++) {
        points += parseInt(answers[a].value, 10);
    }
    alert(`you got ${points} / 3 right`);
}