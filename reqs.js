var majors = {
    CS: {
        reqs: function(){
            majors.CS.applicableCredits += engrCore()
                                        + engrScience()
                                        + math()
                                        + stats()
                                        + CSCore()
                                        + EECSMDE();
        },

        applicableCredits: 0
    }
};

function engrCore() {
    return (incl("ENGR 100", 4) + incl(["ENGR 101", "ENGR 151"], 4));
}

function engrScience() {
    return (incl(["CHEM 130", "CHEM 210"], 3)
            + incl(["CHEM 125", "CHEM 216", "CHEM 211"], 2)
            + incl("PHYSICS 140", 3)
            + incl("PHYSICS 141", 2)
            + incl("PHYSICS 240", 3)
            + incl("PHYSICS 241", 2));
}

function math() {
    return (incl(["MATH 115", "MATH 120"], 4)
            + incl(["MATH 116", "MATH 121"], 4)
            + incl(["MATH 214", "MATH 217", "MATH 417"], 4)
            + incl(["MATH 215", "MATH 216"], 4));
}

function stats() {
    return (incl(["STATS 250", "STATS 280", "STATS 412", "STATS 426", "EECS 301", "EECS 401", "IOE 265"], 3));
}

function CSCore() {
    return (incl(["EECS 203", "MATH 465", "MATH 565"], 4)
            + incl("TCHNCLCM 300", 1) + parseDB("CS"));
}

function EECSMDE() {
    return (incl("EECS 496", 2) + incl("TCHCLCM 497", 2));
}

function CSEFlexTechs() {
    for (var i in classes){ // sorts through remaining classes
        var subject = i.substr(0, i.indexOf(' '));
        if (subject in flexTechs);

    }
}