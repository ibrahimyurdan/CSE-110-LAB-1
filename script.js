window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc(event) {
    event.preventDefault();
    let emailInput = document.getElementById("email").value;
    alert("Subscriber added: " + emailInput);
}
