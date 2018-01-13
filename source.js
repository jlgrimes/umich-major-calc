var classes = [];

function compute() {
    alert(courses.credits("ENGR 100"));
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

function inclExceptions(name) { // if the class can roll over to other requirements
    var bool = false;
    var CSexceptions = ["CHEM 210", "CHEM 211", "MATH 215", "MATH 216"];

    for (var i in CSexceptions) // ONLY WORKS FOR CS RIGHT NOW
        if (name == CSexceptions[i])
            bool = true;

    return bool;
}

function incl(options) {
    if (classes.length == 0)
        return 0;

    if(inclLoop(options))
        return courses.credits();
    return 0;
}

function inclLoop(options){
    if (Array.isArray(options)) {
        for (var i in options)
            if (classes.includes(options[i])) {

                if (inclExceptions(options[i]));
                else
                    classes.splice(classes.indexOf(options[i]), 1);

                return true;
            }
    }
    else {
        if (classes.includes(options)) {

            if (inclExceptions(options));
            else
                classes.splice(classes.indexOf(options), 1);

            return true;
        }
    }

    return false;
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