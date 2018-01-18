# umich-major-calc
Determines what majors you're closest to fulfilling with your current classes

## majors
The majors object contains an object for every major.

#### majors.maj.program
The program function contains the definition for the major's required curriculum, usually specified by predefined course selections in the reqs object.

#### majors.maj.applicableCredits
The applicableCredits variable stores the applicable credits the user has inputted for that specific major. Updates frequently

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

## crs
The crs object contains the entire course database, as well as a bunch of useful functions to parse these courses. Generally only credits is going to be used outside the scope of the main program, but I've included all member functions as points of reference. 

### Functions

#### crs.subject(course)
Returns the subject of the given course.

#### crs.number(course)
Returns the number of the given course.

#### crs.includesCourseInReq(course, req)
Returns true if the target course fulfills a given requirement. includesReqInSubject must be met prior to function call.

#### crs.includesReqInSubject(req, course)
Returns true if the course's subject is contained in a requirement.

#### crs.includesSubject(course)
Returns true if the database contains the given course's subject. Hopefully should be true.

#### crs.credits(course)
Returns the number of credits of a specific course stored in the database. Probably the most important function out of the bunch.

### Data

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

## reqs
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

#### reqs.r.name
The full name of the requirement, aka what you want popping up on the screen.

#### reqs.r.max
The maximum amount of credits that are possible to earn that can apply for the requirement.

#### reqs.r.func
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
