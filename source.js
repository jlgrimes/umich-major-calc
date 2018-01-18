var classes = [];

function compute() {
    $(".output").empty();
    for (let i in majors)
        majors[i].applicableCredits = 0; // reinitializes applicable credit count

    storeClasses();

    for (let i in majors) {
        majors[i].program(classes);
    }

    $(".output").append("<div>Total CS Credits: " + majors.CS.applicableCredits + "<div>");
}

function storeClasses() {
    classes = $("#classes").val().split('\n');
}

function incl(options) {
    if (classes.length === 0)
        return 0;

    return (inclLoop(options));
}

function inclLoop(options){
    if (Array.isArray(options)) {
        for (let i in options) {
            if (classes.includes(options[i])) {
                classes.splice(classes.indexOf(options[i]), 1);
                return crs.credits(options[i]);
            }
        }
    }
    else {
        if (classes.includes(options)) {
            classes.splice(classes.indexOf(options), 1);
            return crs.credits(options);
        }
    }

    return 0;
}

function parseDB(db, prefix) {
    let n = 0;
    for (let i in db) {
        if (classes.includes(prefix.toUpperCase() + " " + db[i][0])) {
            classes.splice(classes.indexOf(prefix + " " + db[i][0]), 1);
            n += db[i][1];
        }
    }
    return n;
}

function cCap(obj) {
    return Math.min(obj.func(), obj.max);
}