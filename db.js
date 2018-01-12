var ULCS = {nums: [373, 381, 388, 427, 442, 445, 467, 470, 475, 477, 478,
    482, 483, 484, 485, 486, 487, 489, 490, 492, 493], prefix: "EECS"};

var CS = {nums: [280, 281, 370, 376, 496], prefix: "EECS"};
var CSMDE = {nums: [441, 467, 470, 481, 494, 497]};

var humanities = {
    aas: [[104, 3], [111, 4], [208, 4], [245, 4], [338, 3], [384, 3], [385, 3]],
    ala: [[260, 3]],
    amcult: [[103, 3], [201, 4], [204, 3], [230, 3], [235, 4], [240, 4], [243, 3], [311, 3], [324, 3], [325, 3], [346, 3], [373, 4], [376, 3], [381, 3]],
    anthrarc: [[381, 4]],
    arabam: [[235, 4], [311, 3]],
    arch: [[215, 4]],
    asian: [[200, 3], [252, 3], [258, 4], [259, 4], [280, 3], [305, 3], [312, 3], [325, 4], [327, 3], [328, 3], [335, 3], [353, 3], [362, 3], [363, 3], [367, 3], [374, 3]],
    asianpam: [[204, 3], [311, 3], [324, 3], [325, 3]],
    clarch: [[104, 3], [221, 4], [350, 3]],
    clciv: [[102, 4], [120, 3], [125, 1], [253, 3], [369, 3], [375, 4], [385, 4]],
    comm: [[271, 4]],
    complit: [[100, 3], [140, 3], [241, 3], [322, 3], [372, 3], [376, 3]],
    csp: [[105, 4]],
    czech: [[315, 3]],
    dutch: [[351, 3]],
    english: [[140, 3], [203, 3], [221, 3], [225, 4], [230, 3], [232, 3], [235, 3], [240, 3], [258, 3], [267, 3], [270, 3], [280, 3], [285, 3], [290, 3], [292, 2], [293, 2],
              [298, 3], [303, 4], [308, 3], [313, 4], [315, 3], [317, 3], [318, 3], [319, 3], [320, 3], [332, 3], [340, 3], [349, 3], [351, 4], [362, 3], [364, 3], [367, 4],
              [373, 3], [374, 3], [375, 3], [379, 3], [381, 3], [384, 3], [385, 3], [388, 3]],
    environ: [[244, 3], [304, 3], [337, 3], [376, 3], [377, 3]],
    french: [[240, 3], [270, 3], [274, 3], [350, 3], [368, 3]],
    german: [[303, 3], [304, 1], [322, 4], [346, 3], [388, 3]],
    greekmod: [[325, 3], [330, 3]],
    histart: [[194, 3], [200, 4], [208, 4], [215, 4], [216, 4], [221, 4], [230, 3], [253, 3], [272, 4], [305, 3], [342, 3], [345, 3], [357, 3], [370, 3], [382, 4], [393, 3],
              [394, 3], [395, 2]],
    history: [[103, 4], [197, 4], [201, 3], [203, 3], [216, 4], [230, 3], [245, 4], [255, 4], [321, 3], [322, 4], [328, 3], [331, 4], [373, 4]],
    honors: [[231, 4], [251, 3]],
    insthum: [[311, 3]],
    islam: [[216, 4], [245, 4], [315, 4]],
    italian: [[250, 3], [310, 3], [333, 3], [340, 3]],
    judaic: [[150, 3], [218, 1], [223, 3], [250, 4], [255, 3], [258, 3], [281, 4], [335, 3], [340, 3], [351, 3]],
    latin: [[301, 3]],
    latinoam: [[243, 3], [311, 4], [381, 3]],
    lhsp: [[228, 3]],
    ling: [[102, 3], [114, 3], [137, 3], [317, 3], [367, 3]],
    mems: [[314, 3], [333, 3], [345, 3], [367, 4]],
    musicol: [[140, 2], [240, 2], [346, 3]],
    neareast: [[216, 4], [236, 4], [279, 3], [280, 4], [281, 4], [291, 3], [295, 3], [315, 4], [335, 3], [338, 4],
               [391, 3]],
    phil: [[101, 4], [183, 3], 196[3], [294, 4], [298, 3], [340, 4], [355, 4], [366, 4], [371, 3], [376, 3], [383, 4], [385, 3], [389, 4], [393, 3]],
    polish: [[326, 3], [331, 4]],
    rchums: [[236, 4], [251, 3], [272, 4], [281, 4], [312, 3], [314, 3], [334, 3], [337, 3], [341, 3], [344, 3], [356, 3]],
    religion: [[204, 4], [236, 4], [258, 3], [305, 3], [323, 4], [328, 3], [359, 3]],
    romlang: [[253, 3]],
    russian: [[333, 3], [375, 3]],
    sac: [[190, 3], [236, 4], [250, 4], [315, 3], [335, 3], [340, 3], [346, 3], [353, 3], [376, 3], [381, 3]],
    slavic: [[150, 3], [281, 4], [290, 4 /*1 or 3?*/], [312, 3]],
    spanish: [[295, 3], [332, 3], [335, 3], [372, 3], [373, 3], [381, 3]],
    theory: [[238, 3]],
    thtremus: [[323, 3]],
    uc: [[150, 3]],
    womenstd: [[150, 3], [213, 4 /*or 3*/], [235, 4], [240, 4], [243, 3], [313, 4 /*or 3*/], [315, 3]],
}

var flexTechs = { // prefixes are name of category
    // IMPLEMENT DIRECTED STUDY RULE (credits cap at 4)
    aerosp: {
        nums: [215, 225, 245],
        other: function (courseNumber) {
            return (courseNumber >= 300)
        }
    },
    astro: {
        nums: [404]
    },
    biophys: {
        nums: [463]
    },
    biology: {
        nums: [305],
        other: function (courseNumber) {
            return (courseNumber >= 400);
        }
    },
    biomede: {
        nums: [221, 231],
        other: function (courseNumber) {
            return (courseNumber >= 400);
        }
    },
    che: { // Chemical Engineering
        nums: [230],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    chem: {
        nums: [210, 211, 215, 216, 230, 241, 242, 260],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    cee: { // Civil and Environmental Engineering
        nums: [211, 212, 230, 265],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    climate: {
        nums: [],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    space: {
        nums: [],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    cmplxsys: { // Complex Systems
        nums: [270]
    },
    econ: {
        nums: [409, 452]
    },
    eecs: {
        nums : [270, 285, 382, 441, 473, 481, 494, 497, 527, 543,
                545, 547, 567, 570, 571, 573, 574, 575, 578, 579,
                580, 581, 582, 583, 584, 586, 587, 588, 589, 590,
                591, 592, 594, 595]
    },
    engr: {
        nums: [350, 355, 403, 450, 455, 480],
    },
    entr: {
        nums: [390] // section 013 only
    },
    ioe: {
        nums: [202],
        other: function (courseNumber) {
            return (courseNumber >= 300 && courseNumber != 373 && courseNumber != 422);
        }
    },
    ling: {
        nums: [442]
    },
    matscie: {
        nums: [220, 242, 250],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    math: {
        nums: [215, 216], // IF NOT USED FOR CORE
        other: function (courseNumber) {
            var bool = true;
            var exceptions = [310, 327, 333, 385, 389, 399, 417, 419, 422, 429, 431, 485, 486, 489, 497];

            for (var i in exceptions)
                if (courseNumber == i){
                    bool = false;
                    break;
                }

            return (courseNumber >= 300 && bool);
        }
    },
    mecheng: {
        nums: [211, 235, 240, 250],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    mcdb: { // Molecular, Cellular, and Developmental Biology
        nums: [306, 310],
    },
    navarch: {
        nums: [260, 270],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    ners: {
        nums: [250],
        other: function (courseNumber) {
            return (courseNumber >= 300);
        }
    },
    pat: {
        nums: [452, 462],
    },
    phil: {
        nums: [414],
    },
    physics: {
        nums: [],
        other: function (courseNumber) {
            var bool = true;
            var exceptions = [333, 334, 365, 420, 481];

            for (var i in exceptions)
                if (courseNumber == i){
                    bool = false;
                    break;
                }

            return (courseNumber >= 300 && bool);
        }
    },
    si: {
        nums: [301, 422]
    },
    stats: {
        nums: [401, 403, 406, 413, 415, 425, 426, 430, 470, 531]
    },
    to: { // Technology and Operations
        nums: [414, 605]
    }

};

var c = {
    engrCore: {
        name: "Engineering Core",
        max: 8,
        func: function() {
            return (incl("ENGR 100", 4) + incl(["ENGR 101", "ENGR 151"], 4));
        }
    },
    engrScience: {
        name: "Engineering Science",
        max: 15,
        func: function() {
            return (incl(["CHEM 130", "CHEM 210"], 3)
            + incl(["CHEM 125", "CHEM 216", "CHEM 211"], 2)
            + incl("PHYSICS 140", 3)
            + incl("PHYSICS 141", 2)
            + incl("PHYSICS 240", 3)
            + incl("PHYSICS 241", 2));
        }
    },
    engrMath: {
        name: "Engineering Math",
        max: 12,
        func: function() {
            return (incl(["MATH 115", "MATH 120"], 4)
            + incl(["MATH 116", "MATH 121"], 4)
            + incl(["MATH 214", "MATH 217", "MATH 417"], 4)
            + incl(["MATH 215", "MATH 216"], 4));
        }
    },
    engrStats: {
        name: "Engineering Stats",
        max: 4,
        func: function() {
            return (incl(["STATS 250", "STATS 280", "STATS 412", "STATS 426", "EECS 301", "EECS 401", "IOE 265"], 4));
        }
    },
    elective: {
        name: "Electives",
        max: 15,
        func: function() {
            var n = 0;
            while (classes.length > 0){
                classes.splice(0, 1);
                n += 4; // need to fix with API
            }

            return (Math.min(n, c.elective.max));
        }
    },
    intellectualBreadth: {
        name: "Intellectual Breadth",
        max: 12,
        func: function () {
            var n = 0;
            for (var i = 0; i < classes.length; i++) { // sorts through remaining classes
                //alert(classes[i] + " in " + classes);

                var subject = classes[i].substr(0, classes[i].indexOf(' '));
                var number = parseInt(classes[i].substr(classes[i].indexOf(' ') + 1, classes[i].length - 1));
                if (subject.toLowerCase() in humanities) {
                    if (subject.toLowerCase().find(findCourse)[0] == number) {
                        classes.splice(i, 1);
                        i--;
                        n += subject.toLowerCase().find(findCourse)[1];
                    }
                }
            }

            if (n <= c.CSEFlexTechs.max)
                return n;

            return c.CSEFlexTechs.max;
        }
    },
    CSCore: {
        name: "CS Core Requirements",
        max: 25,
        func: function() {
            return (incl(["EECS 203", "MATH 465", "MATH 565"], 4)
            + incl("TCHNCLCM 300", 1) + parseDB(CS, "EECS"));
        }
    },
    CSMDE: {
        name: "CS MDE",
        max: 4,
        func: function () {
            return(parseDB(CSMDE, "EECS"));
        }
    },
    EECSMDE: {
        name: "EECS MDE",
        max: 4,
        func: function() {
            return (incl("EECS 496", 2) + incl("TCHNCLCM 497", 2));
        }
    },
    ULCS: {
        name: "Upper Level CS",
        max: 16,
        func: function () {
            return(parseDB(ULCS, "EECS"))
        }
    },
    CSEFlexTechs: {
        name: "CSE Flex Techs",
        max: 12,
        func: function () {
            var n = 0;
            for (var i = 0; i < classes.length; i++) { // sorts through remaining classes
                //alert(classes[i] + " in " + classes);

                var subject = classes[i].substr(0, classes[i].indexOf(' '));
                var number = parseInt(classes[i].substr(classes[i].indexOf(' ') + 1, classes[i].length - 1));
                if (subject.toLowerCase() in flexTechs) {
                    if (flexTechs[subject.toLowerCase()].nums.includes(number)) {
                        classes.splice(i, 1);
                        i--;
                        n += 4; // need to fix with API
                    }
                    if ("other" in flexTechs[subject.toLowerCase()])
                        if (flexTechs[subject.toLowerCase()].other(number)) {
                            classes.splice(i, 1);
                            i--;
                            n += 4; // need to fix with API
                        }
                }
            }

            if (n <= c.CSEFlexTechs.max)
                return n;

            return c.CSEFlexTechs.max;
        }
    }
};