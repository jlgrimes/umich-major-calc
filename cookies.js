function setCache() {
    //var name = prompt("Enter a name.");
    //name = name.split(' ').join('_');

    var lines = document.getElementById('classes').value.split('\n');
    var i;
    var cvalue = "";

    for (i = 0; i < lines.length; i++)
        cvalue += lines[i] + "~";

    localStorage.setItem("courses", cvalue);

    Materialize.toast("Courses saved!", 4000);
}

function parseCache()
{
    var lines = localStorage.getItem("courses");

    lines = lines.split('~').join('\n');

    $("#classes").empty();
    $("#classes").val(lines);
    $('#classes').trigger('autoresize');

    Materialize.toast("Courses opened!", 4000);
}