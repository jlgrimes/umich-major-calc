var majors = {
    CS: {
        reqs: function(){
            majors.CS.applicableCredits += engrCore();
            majors.CS.applicableCredits += engrScience();
            majors.CS.applicableCredits += math();
            majors.CS.applicableCredits += CSCore();
            majors.CS.applicableCredits += EECSMDE();
        },

        applicableCredits: 0
    }
};

function engrCore()
{
    var n = 0;

    if (classes.includes("ENGR 100"))
        n += 4;
    if (classes.includes("ENGR 101") || classes.includes("ENGR 151"))
        n += 4;

    return n;
}

function engrScience()
{
    var n = 0;

    if (classes.includes("CHEM 130") || classes.includes("CHEM 210"))
        n += 3;
    if (classes.includes("CHEM 125") || classes.includes("CHEM 126"))
        n += 2;
    if (classes.includes("PHYSICS 140"))
        n += 3;
    if (classes.includes("PHYSICS 141"))
        n += 2;
    if (classes.includes("PHYSICS 240"))
        n += 3;
    if (classes.includes("PHYSICS 241"))
        n += 2;

    return n;
}

function math() {
    return (incl(["MATH 115", "MATH 120"], 4)
            + incl(["MATH 116", "MATH 121"], 4)
            + incl(["MATH 214", "MATH 217", "MATH 417"], 4)
            + incl(["MATH 215", "MATH 216"], 4));
}

function CSCore() {
    return (incl(["EECS 203", "MATH 465", "MATH 565"], 4)
            + incl("TCHNCLCM 300", 1) + parseDB("CS"));
}

function EECSMDE() {
    var n = 0;
    if (classes.includes("EECS 496"))
        n += 2;
    if (classes.includes("TCHNCLCM 497"))
        n += 2;
    return n;
}