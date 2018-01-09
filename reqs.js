var majors = {
    CS: {
        reqs: function(classes){
            majors.CS.applicableCredits += engrCore(classes);
            majors.CS.applicableCredits += engrScience(classes);
            majors.CS.applicableCredits += math(classes);
        },

        applicableCredits: 0
    }
};

function engrCore(classes)
{
    var n = 0;

    if (classes.includes("ENGR 100"))
        n += 4;
    if (classes.includes("ENGR 101") || classes.includes("ENGR 151"))
        n += 4;

    return n;
}

function engrScience(classes)
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

function math(classes)
{
    var n = 0;

    if (classes.includes("MATH 115") || classes.includes("MATH 120"))
        n += 4;
    if (classes.includes("MATH 116") || classes.includes("MATH 121"))
        n += 4;
    if (classes.includes("MATH 214") || classes.includes("MATH 217") || classes.includes("MATH 417"))
        n += 4;
    if (classes.includes("MATH 215") || classes.includes("MATH 216"))
        n += 4;

    return n;
}






var required = [
    {
        name: "CS",
        required: ["ENGR 100", "PHYSICS 140", "PHYSICS 141", "PHYSICS 240", "PHYSICS 241",
                    "EECS 280", "EECS 281", "EECS 370", "EECS 376", "EECS 496", "TCHNCLCM 300"]
    }
];

function findMajor(courseName)
{
    for (var i in required)
        if (required[i].name == courseName)
            return i;
}

function oneReqs (classes, courseName) { // the classes that are only ONE class to fufill a requirement
    var majorRequiredLength = findMajor(courseName).required.length;
    for (var i = 0; i < required[majorRequiredLength]; i++)
        if (classes.indexOf(required[i]) < 0)
            $('.output').append("<p>" + required[i] + "</p>");
}

function mathReq (classes) {
    if (classes.indexOf("MATH 115") < 0 && classes.indexOf("MATH 120") < 0)
        $('.output').append("<p>MATH 115 or MATH 120</p>");

    if (classes.indexOf("MATH 116") < 0 && classes.indexOf("MATH 121") < 0)
        $('.output').append("<p>MATH 116 or MATH 121</p>");

    if (classes.indexOf("MATH 214") < 0 && classes.indexOf("MATH 217") < 0 && classes.indexOf("MATH 417") < 0 && classes.indexOf("MATH 419") < 0)
        $('.output').append("<p>MATH 214, 217, 417, or 419</p>");
}

function CS (classes) {
    mathReq(classes);
}
