var classes = [];

function compute() {
    alert(courses.credits("LING 367"));
    $(".output").empty();
    for (var i in majors)
        majors[i].applicableCredits = 0; // reinitializes applicable credit count

    storeClasses();

    for (var i in majors) {
        majors[i].reqs(classes);
    }

    $(".output").append("<div>Total CS Credits: " + majors.CS.applicableCredits + "<div>");
}

function storeClasses() {
    if ($("#classes").is(':empty'))
        classes = $("#classes").val().split('\n');
}

function incl(options) {
    if (classes.length == 0)
        return 0;

    return (inclLoop(options));
}

function inclLoop(options){
    if (Array.isArray(options)) {
        for (var i in options) {
            if (classes.includes(options[i])) {

                classes.splice(classes.indexOf(options[i]), 1);

                return courses.credits(options[i]);
            }
        }
    }
    else {
        if (classes.includes(options)) {
            classes.splice(classes.indexOf(options), 1);
            return courses.credits(options);
        }
    }

    return 0;
}

function parseDB(db, prefix) {
    var n = 0;
    for (var i in db.nums) {
        //alert(prefix + " " + db.nums[i]);
        if (classes.includes(prefix + " " + db.nums[i])) {
            classes.splice(classes.indexOf(prefix + " " + prefix), 1);
            n += 4;
        }
    }
    return n;
}

function cCap(obj) {
    return Math.min(obj.func(), obj.max);
}