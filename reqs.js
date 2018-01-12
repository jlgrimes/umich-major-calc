var majors = {
    CS: {
        reqs: function(){
            c.elective.max = 15;
            var reqC = [c.engrCore, c.engrScience, c.intellectualBreadth, c.engrMath, c.engrStats, c.CSCore, c.CSMDE, c.EECSMDE, c.CSEFlexTechs, c.ULCS, c.elective];
            for (var i in reqC) {
                var reqc = cCap(reqC[i]);
                $(".output").append("<p>" + reqC[i].name + ": " + reqc + " out of " + reqC[i].max + "</p>");
                majors.CS.applicableCredits += reqc; // adds total course count with the cap
                //alert(reqC[i].name + ": " + classes);
            }
        },

        applicableCredits: 0
    },

    CE: {
        reqs: function() {
            var reqC = [c.engrCore, c.engrScience. c.engrMath, ]
        }
    }
};