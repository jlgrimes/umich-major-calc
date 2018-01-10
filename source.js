var classes = [];

function compute() {
    $(".output").empty();
    for (var i in majors)
        majors[i].applicableCredits = 0; // reinitializes applicable credit count

    storeClasses();

    for (var i in majors) {
        majors[i].reqs(classes);
    }

    $(".output").append("<div>" + majors.CS.applicableCredits + "<div>");
}

function storeClasses() {
    if ($("#classes").is(':empty'))
        classes = $("#classes").val().split('\n');
}

function inclExceptions(name) { // if the class can roll over to other requirements
    var bool = false;
    var CSexceptions = ["CHEM 210", "CHEM 211", "MATH 215", "MATH 216"];

    for (var i in CSexceptions) // ONLY WORKS FOR CS RIGHT NOW
        if (name == CSexceptions[i])
            bool = true;

    return bool;
}

function incl(options, credits) {
    if (classes.length == 0)
        return 0;

    if(inclLoop(options))
        return credits;
    return 0;
}

function inclLoop(options){
    if (Array.isArray(options))
        for (var i in options)
            if (classes.includes(options[i])) {
                if (inclExceptions(options[i]));
                else
                    classes.splice(classes.indexOf(options[i], 1));
                return true;
            }
    else
        if (classes.includes(options)) {
            if (inclExceptions(options));
            else
                classes.splice(classes.indexOf(options, 1));
            return true;
        }
    return false;
}

function parseDB(db) {
    var n = 0;
    for (var i in window[db].nums)
        if (classes.includes(window[db].prefix + " " + window[db].nums[i]))
            n += 4;

    return n;
}