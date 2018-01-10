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

function incl(options, credits) {
    if(inclLoop(options))
        return credits;
    return 0;
}

function inclLoop(options){
    if (Array.isArray(options))
        for (var i in options)
            if (classes.includes(options[i]))
                return true;
    else
        if (classes.includes(options))
            return true;
    return false;
}

function parseDB(db) {
    var n = 0;
    for (var i in window[db].nums)
        if (classes.includes(window[db].prefix + " " + window[db].nums[i]))
            n += 4;

    return n;
}