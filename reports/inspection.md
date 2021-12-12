# Inspection - Team *T02* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | FindRequest.java, Place.java, Places.java, Request.java, Select.java, Find.js, ResultsBox.js, SendFindRequest.js, TextBox.js |
| Meeting | 10/14/2021, 7:00pm, Virtual |
| Checklist | ./checklist.md |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Rachel Masters | 1 hour |
| Rachel Wagner | 1 hour |
| Jennifer Coburn | 45min |
| Amy Felix| 50 min |
| Alex Wedel | 30 min |

### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| ResultsBox.js:6 | Keyword let used, can we switch to const | low | Rachel Masters, ramast1 | #533 |
| FindRequest.java:4 | Unused import for hashmap | low | Rachel Masters, ramast1 | #532 |
| Select.java:3,4,8 | Logger object unused | low | Rachel Masters, ramast1 | #531 |
| SendFindRequest.js:4-8 | Commented code | low | Rachel Masters, ramast1 | #530 |
| SendFindRequest.js:15-19 | Increase test coverage | med | Rachel Wagner, rachilya | #361 |
| FindRequest.java:24-26 | Test buildResponse() | low | Rachel Wagner, rachilya | #534 |
| Select.java:7 | Manage case where limit is not assigned a value. | low | Jennifer Coburn, wellsja| |
| SendFindRequest.js:18 | Replace console.log, add better fault description | low | Jennifer Coburn, wellsja| #539 |
| SendFindRequest.js:10 | Switch serverUrl and setPlaces in the parameters | low | Amy Felix, ffelix1| 544 |
| TextBox.js:5 | Switch serverUrl and setPlaces in the parameters | low | Amy Felix, ffelix1| 543 |
| SendFindRequest.js:10 | Switch serverUrl and setPlaces | low | Amy Felix, ffelix1| 547 |
| SendFindRequest.js:13 & 16 | Earse comments | low | Amy Felix, ffelix1| 546 |
| SendFindRequest.js:13 | Change limit instead of 8 | low | Amy Felix, ffelix1| |
| Select.java:10,18 | Both return statements are very long | low | Alex Wedel, awedel| |
| SendFindRequest.js:13,16 | Remove old comments | low | Alex Wedel, awedel| |
| All except SendFindRequest.js | No comments in any file for this inspection except SendFindRequest | medium | Alex Wedel, awedel| |
