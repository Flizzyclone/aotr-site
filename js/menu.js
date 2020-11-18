let closed = true;
function openmenu() {
    if (closed === true) {
        var elems = document.getElementById('menucontent')
        closed = false;
        elems.style.display = 'block';
    }   else if (closed === false) {
            var elems = document.getElementById('menucontent')
            elems.style.display = 'none';
            closed = true;
        }
}