# Sprint 2 - t02 - Git Good

## Goal
### *Find places to go.*

## Sprint Leader: 
### Rachel Masters

## Definition of Done

* The Increment release for `v2.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate maintainability of A.
* Minimize code smells and duplication.

### Test Driven Development
* Write the tests before the code.
* Unit tests are fully automated.

### Processes
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

The first epic that we are planning to take on in Sprint 2 is "Find Places".

Within this epic, we will give users the ability to search to find places and
add them to their trip. In this epic we currently have four issues planned. This will 
require the implementation of a new protocol "find". We would also like to provide 
the user with the ability to select more than one destination when planning their trip.

The second epic that we are planning to take on in Sprint 2 is "Interoperability".

In this epic, we plan to allow users to access other servers in the network where 
they can explore features we haven't implemented yet and let them know if we offer similar 
features. This will give the user more freedom in planning their trip.

The third epic that we are planning to take on in Sprint 2 is "Where Am I?"

In this epic, we will give users the ability to add their current location to the trip.
We currently have one task planned for this epic. This will allow users to accurately
include their current location rather than the location of the CSU Oval.

The fourth epic that we are planning to take on in Sprint 2 is "Highlight place".

In this epic, we allow users to select one of the places in the trip list and have it
be highlighted with a marker on the map screen. We currently have one task planned for
this epic. This will help the user to see where the place is located within their trip
on the map.


## Metrics
Our forecast about our ability to complete the planned tasks based on our previous 
sprint results is cautiously optimistic. Although we were successful in accomplishing all 
task for the last print, we suspect we'll have more impediments than last sprint. For 
example, we may be slowed down by the need to learn JavaScript and testing, learn our way 
around the base code, and how to work simultaneously on the same code. Conservatively, we
believe we can take on two more epics than last sprint for a total of four epics. While 
last sprint only required four simple task, we estimate we'll need at leas 8 intricate 
tasks that may be further broken down into smaller task once we grasp the full scope of 
each larger task.

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 4 | 1 |
| Tasks |  8   | 75 | 
| Story Points |  13  | 78 | 


## Scrums
*sum*
| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| 9/13/2021 | 1 | 0 | In sprint planning phase | 
| 9/14/2021 | 2 | 0 | Finishing sprint planning | 
| 9/15/2021 | 3 | 0 | Finishing the client and server diagrams |
| 9/16/2021 | 4 | 5 | Lack of knowledge on subject, large learning curve | 
| 9/17/2021 | 5 | 5 | Learning how the code works, need to reevaluate task difficulties | 
| 9/20/2021 | 7 | 5 | Knowing more about the code, we need to seriously break stuff down better | 
| 9/21/2021 | 15 | 3 | Learning how to set up postman and figuring out next task steps so we can open more tasks | 
| 9/22/2021 | 22 | 5 | Fixing the server database communication | 
| 9/23/2021 | 31 | 5 | SQL Hangups | 
| 9/27/2021 | 35 | 5 | Trying to wrap our heads around the client side, lack of knowledge |
| 9/28/2021 | 43 | 6 | We are kind of stumped on figuring out the client side, talking to a TA one more time tomorrow|
| 9/29/2021 | 49 | 6 | Lack of javascript and react knowledge along with the fact we have to restructure the client|
| 9/30/2021 | 75 | 0 | Lack of javascript and react knowledge and bad practice|

## Review

### Epics completed  
Our team was able to complete Epic 3 - "Where am I?". Through good communication and teamwork, we were to complete this epic.

### Epics not completed
Our team was unable to reach Epic 2 - Interoperability and Epic 4 - Highlight Place. Our team was also unable to completely finish Epic 1 - Find Places. 
We were able to create a search bar, make a Find request with the string entered into it, and display the results, but we were unable to add the option
to add one or more of these places to the Itinerary. Taking into account our impediments during this sprint, we believe we will be able to successfully 
finish these uncompleted Epics as well as accomplish one to two additional Epics for our next sprint.

## Retrospective

### Things that went well
Our team used the same communication skills from sprint one and implemented them in sprint two. We were able to break down the tasks, which are reasonable 
to work on to continue the next epic. Impressively, we did a great job helping each other troubleshooting. Also, we improved on having our daily scrums every day in the meeting.

### Things we need to improve
The main thing that we need to improve is breaking down issues completely before we begin to write code. Our team also 
needs to adapt more to test driven development. We all need to improve on our knowledge of javascript and React to speed
up our task turnover rate as well. The last improvement we need to make is making sure everyone understands the code.

### One thing we will change next time
One thing we plan to change in the next sprint is to break down Epics into smaller tasks. To do this effectively, we plan 
to spend more time walking through the code together to brainstorm what task will need to be made to reach our goals. 
