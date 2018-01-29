# umich-major-calc
Determines what majors you're closest to fulfilling with your current classes

## source.js
The fluffy outside. Most of the work is done in db.js, source.js just makes it looks pretty. Dive into the source yourself to see what I mean.

## db.js
The database of all courses, majors, and credit distributions. Located in db/db.js.

### crs
The crs object contains the entire course database, as well as a few useful functions.

#### subject(course)
Returns the subject of the given course.

#### number(course)
Returns the number of the given course.

#### credits(course)
Returns the number of credits of a specific course stored in the database. Probably the most important function out of the bunch.

#### Data

This is where all class information is stored. Classes are categorized by department, specified by the department name in all lowercase, followed by a major requirement, then the class.

#### Example

```javascript
console.log("EECS 280: " + crs.credits("EECS 280"));
console.log("AAS " + crs.aas.humanities[0] + crs.aas.humanities[1];
```

Output
```
EECS 280: 4
AAS 104: 3
```

### majors
The majors object contains an object for every major.

#### name
Gets the full name of the major.

#### program
The program function contains the definition for the major's required curriculum, usually specified by predefined course selections in the reqs object.

#### applicableCredits
The applicableCredits variable stores the applicable credits the user has inputted for that specific major. Updates frequently

#### requiredCredits
Stores the number of credits needed to graduate with a degree in that major.

#### creditDist
Stores an array of degree requirements specified in the program function.

#### program
Sets the credit distribution for that specific major, credit caps for general distribution requirements such as electives

#### Distributions
See [reqs](#reqs) for data structure. reqs variables specific to the major, such as Major Design Experience and Core Requirements.

#### Example

```javascript
classes = ["MATH 115", "MATH 116"];
majors.math.program();
let creds = majors.math.applicableCredits;
console.log(creds);
```

Output
```
8
```

### reqs
Includes "templates" for common major requirements across majors (such as language, humanities, etc).

#### Structure

```javascript
let reqs = {
    engrCore: {
        name: "Engineering Core",
        max: 8,
        func: function() {
            return (incl("ENGR 100") + incl(["ENGR 101", "ENGR 151"]));
        }
    }
    
    //...
};
```

#### name
The full name of the requirement, aka what you want popping up on the screen.

#### max
The maximum amount of credits that are possible to earn that can apply for the requirement.

#### func()
Returns the number of credits applicable towards the requirement.

#### Example

```javascript
classes = ["EECS 280", "EECS 281"];
majors.CS.program();
console.log("CS Core: " + reqs.CSCore.func());
```

Output
```
CS Core: 8
```
## db-helpers.js
Lots of useful functions to display, manipulate, and parse course information. Located in db/db-helpers.js.

### db
Parent object to all db helper functions.

#### includesCourseInReq(course, req)
Returns true if the target course fulfills a given requirement. includesReqInSubject must be met prior to function call.

#### includesReqInSubject(req, course)
Returns true if the course's subject is contained in a requirement.

#### includesSubject(course)
Returns true if the database contains the given course's subject. Hopefully should be true.

#### totalCredits(reqObj)
Returns the total number of possible credits in a requirement object, such as crs.eecs.core.

#### parse(d, prefix)
Returns the number of applicable credits for a requirement object, such as crs.eecs.core.

#### func()
Returns the number of credits applicable towards the requirement.

#### Example

```javascript
classes = ["EECS 280", "EECS 281"];
console.log(db.parse(crs.eecs.cs, "EECS");
```
Output
```
8
```

#### cap(obj)
Applies the cap (Math.min(obj.func(), obj.max) needed for a lot of distribution requirements.

#### print(major)
Prints the specific major to the page in a card.

## colors.js
Dynamically displays cards to material design standards.

#### colorIndex
Starts off at zero, increases by one every time a new card is printed. This makes the hue of the color used (blue, because go blue!)

### getColor()
Returns an object of colors (primary, light, dark) for the selected hue.

## References

### Colors
[Material.io](https://material.io/color/#!/)

### Course Requirements
[Computer Engineering](https://www.eecs.umich.edu/eecs/undergraduate/ugce/CE_Program_Guide.pdf)

[Computer Science LSA](https://www.eecs.umich.edu/eecs/undergraduate/computer-science/lsa-docs/17_18_cs_lsa.pdf)

[Computer Science ENG](http://eecs.umich.edu/eecs/undergraduate/computer-science/16_17_cs_eng.pdf)
