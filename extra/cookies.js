function setCache() {
    //var name = prompt("Enter a name.");
    //name = name.split(' ').join('_');

    let lines = document.getElementById('classes').value.split('\n');
    let cvalue = "";

    for (let i = 0; i < lines.length; i++)
        cvalue += lines[i] + "~";

    localStorage.setItem("courses", cvalue);

    Materialize.toast("Courses saved!", 4000);
}

function parseCache()
{
    let lines = localStorage.getItem("courses");
    lines = lines.split('~').join('\n');

    let input = $("#classes");

    input.empty();
    input.val(lines);
    input.trigger('autoresize');

    Materialize.toast("Courses opened!", 4000);
}