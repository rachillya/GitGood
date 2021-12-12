# Inspection - Team *T02* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | distanceColumn.js, Itinerary.js, SendDistanceRequest.js, actions, sendTourRequest.js, Load.js, Save.js, usePlaces.js  |
| Meeting | November 3, 2021, 6:30 p.m.|
| Checklist | ./checklist.md |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
|Amy Felix| 50 min |
|Rachel Wagner| 30 min |
|Alex Wedel| 45 mins |
|Jennifer Coburn| 35 mins |


### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
|usePlaces:26| Switch context and places in parameters | low | Amy Felix, ffelix1 | |
|usePlaces:38 | Switch index and context in parameters | low | Amy Felix, ffelix1 | |
|usePlaces:62 | Switch index and context in parameters | low | Amy Felix, ffelix1 | |
|actions:15 | too long, make it two lines | low | Amy Felix,ffelix1|#785 |
|Itineray:10 | unused variables | low | Amy Felix,ffelix1| #793 |
|Load.js:67-97| Long method with nested if statements | hi | Rachel Wagner, rachilya| #759 |
|Load.js | Only has 5% test coverage and other Code Climate issues | low | Alex Wedel, awedel | #764 |
|TripNameBox.js | Has 50% test coverage but is just one line | low | Alex Wedel, awedel | #765 |
|Load.js | Has multiple instances of console.log | low | Alex Wedel, awedel | #766 |
|Actions.js | ItineraryActionsDropdown is long. | low | Jennifer Cobrn, wellsja | |
|DistanceColumn.js:8 | Variable tabs is repeted in many functions. | low | Jennifer Cobrn, wellsja | #780| 
|Itinerary.js:34 | Empty line in render, line 35. | low | Jennifer Cobrn, wellsja | #780|
|Load.js:33 | Remove comment. | low | Jennifer Cobrn, wellsja |#780 |
|Load.js:104 | Remove function FileDisplay or provide something more useful to the user to let them know their file was successfull loaded. | hi | Jennifer Cobrn, wellsja |#782 |
|Load.js:67 | parseFlile too large. | hi | Jennifer Cobrn, wellsja | |
|Actions.js:13| Itinerary.js passes tripname to ItinearyrActionsDropdown but that variable still needs to be passed on to Save. | hi | Jennifer Cobrn, wellsja | #784|
|usePlaces:10 | EarthRadius unused | low | Jennifer Coburn, wellsja | |
|Load.js:53 | too many lines of code in method, cognitive complexity too high | low | Rachel Masters, ramast1 | #775 |
|Load.js:67 | too many lines of code | low | Rachel Masters, ramast1 | |
|Load.js:36 | do we need to do error checking on the files? | low | Rachel Masters, ramast1 | #776 |



