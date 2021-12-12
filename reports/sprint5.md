# Sprint 5 - *t02* - *Git Good*

## Goal
### *Release!*

## Sprint Leader: 
### Jennifer Coburn

## Definition of Done

* The Increment release for `v5.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate maintainability of A (technical debt ratio==0).
* Minimize code smells and duplication.
* Use Single Responsibility Principle.

### Test Driven Development
* Write the tests before the code.
* Unit tests are fully automated.
* Code coverage is 70%

### Processes
* Incremental development.  No big bangs.
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

The first epic we are planning to complete for Sprint 5 is "User Experience". We have interviewed users to find point of improvement for our application, and now we will implement those points of improvement. The user will be able to navigate more easily, and the website will offer a better experience.

The second epic we are planning to complete for Sprint 5 is "Highlight Place". In this epic, we allow users to select one of the places in their itinerary and have it be 
highlighted with a marker on the map screen. This will help the user to see where the place is located within their trip on the map.

The third epic we are planning to complete for Sprint 5 is "Modify Place". In this epic, we will allow users more flexibility with their trip. They will be able to reorder place, change the trip starting location, shuffle their trip, remove locations, and reverse their trip.

The fourth epic we are planning to complete for Sprint 5 is "Save Map". In this epic, we will allow the user to save the map as a KML or SVG file. The user would then be able 
to use those files to import their trip to other sites such as Google Earth.

The fifth and final epic we are planning to complete for Sprint 5 is "Where Is". In this epic, we will provide a tab in the search modal that the user can click on. Inside 
this tab, we will provide the user with two input bars where they can enter their desired lattitude and longitude in either decimal or degrees. The user can then choose to see 
their coordinates on the map by clicking on the "show" button. They will then be provided the choice to add their point to the trip via an add button that will become visible 
in the My Trip header.


## Metrics
We were able to complete 4 epics last sprint with very few impediments, so are optimistic we can accomplish 5 epics for this sprint. We completed 57 story points last sprint and we have bumped this sprint's story points to 75. Last sprint we accomplished 42 task that included task for some tests. However, for this sprint we plan to write test that accompanies code for a single task. Due to the additional code required for one task, we've aloted an extra story point for task we beleive will also require a test. 

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 5 | 3 |
| Tasks | 36| 62 | 
| Story Points |  75 | 72 | 


## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| 11/16/21 | #883,#839,#919,#904,#884,#903,#900,#902,#901 | #876,877,837,611,878,889,835| None | 
| 11/17/21 | #835,837,877,878,879,880,938 | #838,611,610,840,943 | None |
| 11/18/21 | #918,948,946,611,840,954 | #838,610,943| None |
| 11/19/21| #610,960 | #943,838,905,836 | None |
| 11/29/21| #838,836,921,899,917,975 | #905,888,913,981,915,842,979,914,916,842 | ssh config log issues |
| 11/30/21| #915,913,914,978,973,977 | #979,957,916,905,888,981,842 | VS code & npm issues |
| 12/1/21| #979,916,981,995,842,980,1006,1005,1004,1020,972,1024 | #1019,1017,1015,957,892,905,888| None |
| 12/2/21| ##1917,1009 | #888,905,892,957,1015,1019,891| react-stortable for drag and drop trip list |
| 12/3/21| ##1019,1003,907,1022,1002,888,1015 | #101,1016,1007,957,905,1014| None |
| 12/6/21| #1011,905,1014,1013 | #1016,1007,957,1012,1038| None |
| 12/7/21| #1007,1038,1039 | #889,1016,957,1012,891| None |
| 12/8/21| #1012,124,891, | #1055,1056,1016,1058,892,957,1057,1063,1061,1060| None |
| 12/9/21| #1016,1063,1060,1066,1057,1058,1056,1055,1082,957 | | None |


## Review

### Epics completed  
Our team was able to complete two epics, Highlight Place and User Experience. Though we had planned to complete more, we decided that it was important
to focus on making our project as user-friendly as possible for our final release. Through good communication and teamwork, we were able to complete these
two epics.

### Epics not completed 
Our team could not complete two epics, Where Is and Modify Trip. As a team, we noticed we received great 
feedback that helped improve our project to be user-friendly. Taking into account our successes and our uncompleted work, 
we believe we can use this skill for the future.

## Retrospective

### Things that went well
The main thing that went well was the scrum process. As a team, we have grown to really work well together to get tasks done and support each other. Our communication has been great, and we have done well helping each other solve errors in our implementation. Also, we have shifted to being design conscious. At the beginning of the semester, we were really focused on getting functionality to work, and now we are doing a great job of making that functionality intuitive and user friendly.

### Things we need to improve
A continuously improving aspect that we will need to continue to develop is writing tests before and alongside the central code. We also need to improve how we estimate major changes and how we break them down, though that has been improving and will continue to improve with more experience.

### One thing we will change next time
For the future, we should improve the quantity of Product Backlog items we select. We realized half way through Sprint 5 we had agreed to take on more than we could accomplish. As a group, we could make a better estimation of the quantiy of Backlog items by looking at our past story points and predict future responsibilites such as inspections that will reduce our time availability.
