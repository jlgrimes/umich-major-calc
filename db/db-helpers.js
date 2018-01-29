let db = {
    includesReqInSubject: function(req, course) {
        return (req in crs[crs.subject(course).toLowerCase()]);
    },
    includesCourseInReq: function(course, req) {
        return (crs[crs.subject(course).toLowerCase()][req].find(o => o[0] === crs.number(course)) != null);
    },
    includesSubject: function(course) {
        return (crs.subject(course).toLowerCase() in crs);
    },
    totalCredits: function(reqObj) {
        let n = 0;
        for (let i in reqObj)
            n += reqObj[i][1];

        return n;
    },

    parse: function(d, prefix) {
        let n = 0;
        for (let i in d) {
            if (classes.includes(prefix.toUpperCase() + " " + d[i][0])) {
                classes.splice(classes.indexOf(prefix + " " + d[i][0]), 1);
                n += d[i][1];
            }
        }
        return n;
    },

    cCap: function(obj) {
        return Math.min(obj.func(), obj.max);
    },

    print: function(major) {
        let creditDist = major.creditDist;
        let text = "<div class='col s12 m6'><div class='card' style='background-color: " + primary() + "'>" +
            "<div class='card-content white-text'><span class='card-title'>" + major.name + "</span>";

        //$(".output").append('<div class="box col2"></div>');
        //$(".output").append("<div class='box col2'><p>" + major.name + "</p>");
        for (let i in creditDist) {
            let c = db.cCap(creditDist[i]);
            text += "<p>" + creditDist[i].name + ": " + c + " out of " + creditDist[i].max + "</p>";
            major.applicableCredits += c; // adds total course count with the cap
        }

        text += "<p>Total: " + major.applicableCredits + " out of " + major.requiredCredits + "</p></div></div></div>";

        $(".output").append(text);
    }


};