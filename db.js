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

var UCLS = {nums: [373, 381, 388, 427, 442, 445, 467, 470, 475, 477, 478,
            482, 483, 484, 485, 486, 487, 489, 490, 492, 493], prefix: "EECS"};

var CS = {nums: [280, 281, 370, 376, 496], prefix: "EECS"};

