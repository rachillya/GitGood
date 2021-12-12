# Inspection - Team *T02* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | TourRequest.java |
| Meeting | 12/1/2021, 6:00pm, Virtual |
| Checklist | ./checklist.md |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Rachel Masters | 30 minutes |
| Rachel Wagner | 30 minutes |
| Amy Felix | 30 minutes |
| Jennifer Coburn | 90 minutes |
| Alex Wedel | 30 minutes |

### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| TourRequest.java:43-55 | Cutoff logic may need reworked | hi | Rachel Masters, ramast1 | #1006 |
| TourRequest.java:57-59 | Remove commented code | low | Rachel Masters, ramast1 | #1005 |
| TourRequest.java:103-106 | Remove comments | low | Rachel Masters, ramast1 | #1004 |
| TourRequest.java:45, 75, 99, 114-115 | Adjust spacing for clarity | low | Rachel Wagner, rachilya | #1001 |
| TourRequest.java:100-106 | Break out into seperate function | low | Rachel Wagner, rachilya | #1002 |
| TourRequest.java:129-188 | Break out into new file for opt2 | med | Rachel Wagner, rachilya | #1003 |
| TourRequest.java: 39 | use javascript varibale, change it to let or const | low | Amy Felix, ffelix1 | |
| TourRequest.java: 28-29 | rename dist and g, clear variables | low | Amy Felix, ffelix1 | |
| TourRequest.java:57-59 | remove commented code | low | Amy Felix , ffelix1 | |
| TourRequest.java:71 | Suggest comment or rename optimizeTrip() &/or nearestNeighbor() | low | Jennifer Coburn , wellsja |#957 |
| TourRequest.java:38 | Server responds 3-4 times slower than other teams with a tour request | hi | Jennifer Coburn , wellsja|#957 |
| TourRequest.java:38 | Climate Code reports TourRequest.java is at a 79%. Test needed for buildResponse() and TimingDecision() | low | Jennifer Coburn , wellsja|  #1006|
| design.md:286 | User interface drawings missing | hi | Jennifer Coburn , wellsja| #996 |
| TourRequest.java:152 | trySwappingSections method takes in 4 parameters | low | Alex Wedel, awedel | |
