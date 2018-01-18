function compute() {
    $(".output").empty();
    for (let i in majors)
        majors[i].applicableCredits = 0; // reinitializes applicable credit count

    storeClasses();
    deleteGarbage();

    for (let i in majors) {
        majors[i].program(classes);
    }
}

function storeClasses() {
    classes = $("#classes").val().split('\n');
}

function deleteGarbage() {
    for (let i in classes)
        if (classes[i] === "")
            classes.splice(i, 1);
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