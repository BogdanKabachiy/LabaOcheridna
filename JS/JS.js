function toconsole() {
    var fname = document.getElementById('first_name').value;
    var html = fname;
    console.log (html);
}
document.getElementById('press').addEventListener('click', toconsole);
