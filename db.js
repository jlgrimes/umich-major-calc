var courses = {
    subject: function(course) {
        return (course.substr(0, course.indexOf(' ')));
    },
    number: function(course) {
        return (parseInt(course.substr(course.indexOf(' ') + 1, course.length - 1)));
    },
    findCourse: function (element) {
        return (element[0] == subject);
    },
    includesCourseInReq: function(course, req) {
        return (courses.number(course) in courses[courses.subject(course).toLowerCase()][req]);
    },
    includesReqInSubject: function(req, course) {
        return (req in courses[courses.subject(course).toLowerCase()]);
    },
    includesSubject: function(course) {
        return (courses.subject(course).toLowerCase() in courses);
    },
    credits: function(course) {
        if (courses.includesSubject(course))
            for (var req in courses[courses.subject(course).toLowerCase()]) {
                if (courses[courses.subject(course).toLowerCase()][req].find(o => o[0] == courses.number(course)) != null) {
                    return (courses[courses.subject(course).toLowerCase()][req].find(o => o[0] == courses.number(course))[1]);
                }
            }
    },
    aas: {
        humanities : [[104, 3], [111, 4], [208, 4], [245, 4], [338, 3], [384, 3], [385, 3]]
    },
    aerosp: {
        flex: [[215, 4], [225, 4], [245, 4], [305, 4], [315, 4], [325, 4], [335, 4], [347, 3], [348, 3], [384, 3], [390, 2]]
    },
    ala: {
        humanities: [[260, 3]]
    },
    astro: {
        flex: [[404, 3]]
    },
    amcult: {
        humanities: [[103, 3], [201, 4], [204, 3], [230, 3], [235, 4], [240, 4], [243, 3], [311, 3], [324, 3], [325, 3], [346, 3], [373, 4], [376, 3], [381, 3]]
    },
    anthrarc: {
        humanities: [[381, 4]]
    },
    arabam: {
        humanities: [[235, 4], [311, 3]]
    },
    arch: {
        humanities: [[215, 4]]
    },
    asian: {
        humanities: [[200, 3], [252, 3], [258, 4], [259, 4], [280, 3], [305, 3], [312, 3], [325, 4], [327, 3], [328, 3], [335, 3], [353, 3], [362, 3], [363, 3], [367, 3], [374, 3]]
    },
    asianpam: {
        humanities: [[204, 3], [311, 3], [324, 3], [325, 3]]
    },
    biophys: {
        flex: [[463, 3]]
    },
    biology: {
        flex: [[305, 3]] // greater than 400??
    },
    biomede: {
        flex: [[221, 4], [231, 4]]
    },
    cee: {
        flex: [[211, 4], [212, 3], [230, 3], [265, 3], [303, 4], [307, 3], [312, 4], [325, 4], [345, 4], [351, 4], [365, 4], [366, 2], [373, 3], [375, 3]]
    },
    che: {
        flex: [[230, 4], [330, 4], [341, 4], [342, 4], [343, 4], [344, 4], [360, 4], [405, 3], [412, 4], [431, 3], [444, 3], [460, 4], [466, 3], [470, 3], [472, 4], [485, 1], [487, 5], [488, 2], [489, 3], [490, 1 /*to 16*/], [496, 1], [497, 1]] // last two are to 16 as well
    },
    chem: {
        flex: [[210, 3], [211, 4], [215, 3], [216, 2], [230, 3], [241, 2], [242, 2], [260, 3], [302, 3], [303, 3], [351, 4], [352, 2], [353, 3], [398, 1/*to 4*/], [399, 1/*to 4*/], [417, 3], [420, 3], [436, 3], [447, 3], [451, 4], [452, 4], [463, 3], [483, 3], [498, 1], [499, 1]]
    },
    clarch: {
        humanities: [[104, 3], [221, 4], [350, 3]]
    },
    clciv: {
        humanities: [[102, 4], [120, 3], [125, 1], [253, 3], [369, 3], [375, 4], [385, 4]]
    },
    climate: {
        flex: [[300, 3], [320, 3], [321, 3], [323, 4], [350, 3], [380, 3], [381, 1/* to four*/]]
    },
    cmplxsys: {
        flex: [[270, 3]]
    },
    comm: {
        humanities: [[271, 4]]
    },
    complit: {
        humanities: [[100, 3], [140, 3], [241, 3], [322, 3], [372, 3], [376, 3]]
    },
    csp: {
        humanities: [[105, 4]]
    },
    czech: {
        humanities: [[315, 3]]
    },
    dutch: {
        humanities: [[351, 3]]
    },
    econ: {
        flex: [[409, 4], [452, 4]]
    },
    english: {
        humanities: [[140, 3], [203, 3], [221, 3], [225, 4], [230, 3], [232, 3], [235, 3], [240, 3], [258, 3], [267, 3], [270, 3], [280, 3], [285, 3], [290, 3], [292, 2], [293, 2],
            [298, 3], [303, 4], [308, 3], [313, 4], [315, 3], [317, 3], [318, 3], [319, 3], [320, 3], [332, 3], [340, 3], [349, 3], [351, 4], [362, 3], [364, 3], [367, 4],
            [373, 3], [374, 3], [375, 3], [379, 3], [381, 3], [384, 3], [385, 3], [388, 3]]
    },
    eecs: {
        cs: [[280, 4], [281, 4], [370, 4], [376, 4], [496, 4]],
        csmde: [[441, 4], [467, 4], [470, 4], [481, 4], [494, 4], [497, 4]],
        flex: [[270, 4], [285, 2], [382, 4], [441, 4], [473, 4], [481, 4], [494, 4], [497, 4], [527, 3 /*or 4*/], [543, 3], [545, 3], [547, 3], [567, 3], [570, 4], [571, 4], [573, 3], [574, 4], [575, 4],
               [578, 4], [579, 4], [580, 4], [581, 3], [582, 4], [583, 4], [584, 4], [586, 4], [587, 4], [588, 4], [589, 4], [590, 4], [591, 4], [592, 4], [594, 3], [595, 3]],
        ulcs: [[373, 4], [381, 4], [388, 4], [427, 4], [442, 4], [445, 4], [467, 4], [470, 4], [475, 4], [477, 4], [478, 4],
               [482, 4], [483, 4], [484, 4], [485, 4], [486, 4], [487, 4], [489, 4], [490, 4], [492, 4], [493, 4]]
    },
    engr: {
        core: [[100, 4], [101, 4], [151, 4]],
        flex: [[350, 3], [355, 1/*1-4*/], [403, 3], [450, 4], [455, 2/*to 5*/], [480, 4]]
    },
//entr
    environ: {
        humanities: [[244, 3], [304, 3], [337, 3], [376, 3], [377, 3]]
    },
    french: {
        humanities: [[240, 3], [270, 3], [274, 3], [350, 3], [368, 3]]
    },
    german: {
        humanities: [[303, 3], [304, 1], [322, 4], [346, 3], [388, 3]]
    },
    greekmod: {
        humanities: [[325, 3], [330, 3]]
    },
    histart: {
        humanities: [[194, 3], [200, 4], [208, 4], [215, 4], [216, 4], [221, 4], [230, 3], [253, 3], [272, 4], [305, 3], [342, 3], [345, 3], [357, 3], [370, 3], [382, 4], [393, 3],
            [394, 3], [395, 2]]
    },
    history: {
        humanities: [[103, 4], [197, 4], [201, 3], [203, 3], [216, 4], [230, 3], [245, 4], [255, 4], [321, 3], [322, 4], [328, 3], [331, 4], [373, 4]]
    },
    honors: {
        humanities: [[231, 4], [251, 3]]
    },
    insthum: {
        humanities: [[311, 3]]
    },
    ioe: { // didn't add 500 level
        flex: [[202, 2], [310, 3], [316, 3], [333, 3], [334, 1], [366, 3], [373, 4], [412, 3], [413, 3], [416, 2], [419, 3], [421, 3], [422, 3], [424, 4], [425, 2], [430, 3], [432, 3],
               [434, 3], [436, 3], [437, 3], [438, 2], [440, 3], [441, 3], [447, 3], [449, 3], [452, 3], [453, 3/*no credit for math 423*/], [460, 3], [461, 3], [463, 3], [465, 3], [466, 3], [474, 4],
               [481, 4], [490, 2/*max 4*/], [499, 4]]
    },
    islam: {
        humanities: [[216, 4], [245, 4], [315, 4]]
    },
    italian: {
        humanities: [[250, 3], [310, 3], [333, 3], [340, 3]]
    },
    judaic: {
        humanities: [[150, 3], [218, 1], [223, 3], [250, 4], [255, 3], [258, 3], [281, 4], [335, 3], [340, 3], [351, 3]]
    },
    latin: {
        humanities: [[301, 3]]
    },
    latinoam: {
        humanities: [[243, 3], [311, 4], [381, 3]]
    },
    lhsp: {
        humanities: [[228, 3]]
    },
    ling: {
        humanities: [[102, 3], [114, 3], [137, 3], [317, 3], [367, 3]],
        flex: [[442, 3]]
    },
    math: {
        flex: [[215, 4], [216, 4], [316, 3], [351, 3], [354, 3], [371, 3], [396, 4], [404, 3], [412, 3], [423, 3], [424, 3], [425, 3], [433, 3],
               [450, 4], [451, 3], [452, 3], [454, 3], [462, 3], [465, 3], [471, 3], [472, 3], [475, 3], [487, 3], [498, 3], [494, 3], [498, 3]]
    },
    matscie: { // non LSA credit
        flex: [[220, 4], [242, 4], [250, 4], [335, 4], [365, 3], [440, 3], [470, 3], [480, 3], [485, 1/* to 4*/]]
    },
    mcdb: {
        flex: [[306, 3], [310, 3]]
    },
    mecheng: {
        flex: [[211, 4], [235, 3], [240, 4], [250, 4], [305, 3], [311, 3], [320, 3], [335, 3], [336, 3], [350, 4], [360, 4], [382, 4], [390, 2 /*or three*/],
               [395, 4], [400, 3], [401, 3], [406, 3], [412, 3], [420, 3], [424, 3], [432, 3], [433, 3], [438, 4], [440, 4], [450, 4], [451, 3],
               [452, 3], [455, 3 /*or 4*/], [456, 3], [458, 3], [461, 3], [476, 4], [481, 3], [482, 3], [483, 3], [487, 3], [489, 3], [490, 3], [491, 1 /*to three*/], [495, 4]]
    },
    mems: {
        humanities: [[314, 3], [333, 3], [345, 3], [367, 4]]
    },
    musicol: {
        humanities: [[140, 2], [240, 2], [346, 3]]
    },
    navarch: {
        flex: [[260, 2], [270, 3], [310, 4], [320, 4], [321, 4], [331, 3], [332, 3], [340, 4], [391, 3], [401, 4], [403, 3], [416, 3], [420, 4], [423, 4], [424, 4], [431, 3], [440, 4], [461, 3], [470, 4], [471, 3],
               [475, 4], [483, 3], [491, 3], [492, 2]] // 499 1-4
    },
    neareast: {
        humanities: [[216, 4], [236, 4], [279, 3], [280, 4], [281, 4], [291, 3], [295, 3], [315, 4], [335, 3], [338, 4],
            [391, 3]]
    },
    ners: {
        flex: [[250, 4], [311, 3], [312, 3], [315, 4], [320, 4], [344, 3], [421, 3], [425, 4], [441, 4], [442, 4], [444, 3], [462, 3], [471, 3], [472, 3], [481, 2],
               [484, 4]] // 490 1-4, 499 1-3
    },
    pat: {
        flex: [452, 462]
    },
    phil: {
        humanities: [[101, 4], [183, 3], 196[3], [294, 4], [298, 3], [340, 4], [355, 4], [366, 4], [371, 3], [376, 3], [383, 4], [385, 3], [389, 4], [393, 3]],
        flex: [[414]]
    },
    physics: {
        flex: [[340, 3], [351, 3], [360, 3], [390, 3], [391, 2], [401, 4], [405, 4], [406, 4], [411, 3], [415, 1 /*to 6*/], [417, 3], [441, 3], [442, 3], [453, 4], [457, 3],
               [460, 3], [463, 3]] // 496-499
    },
    polish: {
        humanities: [[326, 3], [331, 4]]
    },
    rchums: {
        humanities: [[236, 4], [251, 3], [272, 4], [281, 4], [312, 3], [314, 3], [334, 3], [337, 3], [341, 3], [344, 3], [356, 3]]
    },
    religion: {
        humanities: [[204, 4], [236, 4], [258, 3], [305, 3], [323, 4], [328, 3], [359, 3]]
    },
    romlang: {
        humanities: [[253, 3]]
    },
    russian: {
        humanities: [[333, 3], [375, 3]]
    },
    sac: {
        humanities: [[190, 3], [236, 4], [250, 4], [315, 3], [335, 3], [340, 3], [346, 3], [353, 3], [376, 3], [381, 3]]
    },
    si: {
        flex: [[422, 3]]
    },
    slavic: {
        humanities: [[150, 3], [281, 4], [290, 4 /*1 or 3?*/], [312, 3]]
    },
    space: {
        flex: [[300, 3], [320, 3], [321, 3], [323, 4], [350, 3], [370, 4], [380, 3], [381, 1/* to four*/]]
    },
    spanish: {
        humanities: [[295, 3], [332, 3], [335, 3], [372, 3], [373, 3], [381, 3]]
    },
    stats: {
        flex: [[401, 4], [406, 3], [413, 4], [415, 4], [425, 3], [426, 3], [430, 3], [531, 3]]
    },
    theory: {
        humanities: [[238, 3]]
    },
    thtremus: {
        humanities: [[323, 3]]
    },
    uc: {
        humanities: [[150, 3]]
    },
    womenstd: {
        humanities: [[150, 3], [213, 4 /*or 3*/], [235, 4], [240, 4], [243, 3], [313, 4 /*or 3*/], [315, 3]]
    }
};

var c = {
    engrCore: {
        name: "Engineering Core",
        max: 8,
        func: function() {
            return (incl("ENGR 100") + incl(["ENGR 101", "ENGR 151"]));
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
                if ("humanities" in subject.toLowerCase()) {
                    if (subject.toLowerCase().find(courses.findCourse)[0] == number) {
                        classes.splice(i, 1);
                        i--;
                        n += subject.toLowerCase().find(courses.findCourse)[1];
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

                if (courses.includesReqInSubject('flex', classes[i])) {
                    if (courses.includesCourseInReq(classes[i], 'flex')) {
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