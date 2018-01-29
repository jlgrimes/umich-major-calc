function compute() {
    reinitializeSession();
    storeClasses();
    deleteGarbage();

    for (let i in majors) {
        reinitializeMajor();
        majors[i].program();
        db.print(majors[i]);
    }
}

function reinitializeSession() {
    $(".output").empty();
    for (let i in majors)
        majors[i].applicableCredits = 0; // reinitializes applicable credit count

    colorIndex = 0;
}

function reinitializeMajor() {
    classes = classesBackup.slice(0);
}

function storeClasses() {
    classes = $("#classes").val().split('\n');
    classesBackup = classes;
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
