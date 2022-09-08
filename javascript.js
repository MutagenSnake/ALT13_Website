window.onclick = e => {
    var parent = e.target.parentElement.className
    if (parent === "picture") {
        var url = e.target.src;
        window.open(url,'Image');
        }}

let form = document.getElementById("message_form");
let submissionTag = document.getElementById("congrats");
console.log(form)

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.submit();
    form.style.display = "none";
    submissionTag.style.display = 'block';
});