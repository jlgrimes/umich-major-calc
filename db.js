var flexTechs = {
    aerospace: {
        nums: [215, 225],
        other: function (courseNumber) {
            return (courseNumber > 300 && courseNumber != 494 || courseNumber != 495)
        },
        prefix: "AEROSP"
    },
    astronomy: {
        nums: [404],
        prefix: "ASTRO"
    },
    eecs: {
        nums : [270, 285, 382, 441, 473, 481, 494, 497, 527, 543,
                545, 547, 567, 570, 571, 573, 574, 575, 578, 579,
                580, 581, 582, 583, 584, 586, 587, 588, 589, 590,
                591, 592, 594, 595],
        prefix: "EECS"
    }

};

var UCLS = {nums: [373, 381, 388, 427, 442, 445, 467, 470, 475, 477, 478,
            482, 483, 484, 485, 486, 487, 489, 490, 492, 493], prefix: "EECS"}; // prefix EECS

var CS = {nums: [280, 281, 370, 376, 496], prefix: "EECS"}; // prefix EECS

