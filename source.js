var classes = [];

function addReqs() {

}

function initialize() {

}

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

