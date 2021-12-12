# Sprint 3 - *T02* - *Git Good*

## Goal
### *How far is it?*

## Sprint Leader: 
### *Rachel Wagner*

## Definition of Done

* The Increment release for `v3.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate technical debt ratio less than 3.
* Minimize code smells and duplication.

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
The first epic that we are planning to take on in Sprint 3 is "Find Places".

We began this epic last sprint, but we are finishing it this sprint. Find Places allows the user to search
for places and add them to the itinerary. This sprint, we are adding the button that allows users to add the 
places they searched for, and we are debugging a few logic errors we found in the search algorithm.

The second epic that we are planning to take on in Sprint 3 is "Interoperability".

In this epic, we plan to allow users to access other servers in the network where they can explore features we haven't 
implemented yet and let them know if we offer similar features. This will give the user more freedom in planning their trip.

The third epic that we are planning to take on in Sprint 3 is "Distances".

In this epic, we will provide distances between places in the user's trip and the cumulative trip distance at each place in 
the trip. We assume an airborne conveyance that can go directly to the destinations without roads or other inconveniences.

The fourth epic that we are planning to take on in Sprint 3 is "Load Trip".

In this epic, we will give the user the option to load an existing trip into our website. The user will be 
able to upload both JSON files and csv files to add their trip.

The fifth epic that we are planning to take on in Sprint 3 is "Save Trip".

In this epic, we plan to allow users the ability to save their trip. This will give the user the ability to save 
the trip that they are currently working on into a file that they can store on their personal device.

## Metrics
Our forecast about our ability to complete the planned tasks based on our previous 
sprint results are optimistic. We were successful in accomplishing one epic and almost 
one more and our largest impediment of learning the base code should no longer be a 
major barrier. Conservatively, we believe we can finish up 2 epics from the last sprint
and then complete 3 epics from sprint 3. We have broken down our epics to a total of 27 simple 
tasks. Although we don't have as many story points as last sprint we believe we will 
have more for small tasks we didn't plan for.

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 5 | 2 |
| Tasks |  27   | 38 | 
| Story Points |  35  | 58 | 

## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| 10-4-2021 | #118, #357, #368, #370, #374, #375, #382, #387, #388, #390, #391, #396, #397, #398, #399 | #117, #359, #361, #379, #395, #408 | Breaking down Epics into tasks | 
| 10-5-2021 | #417, #418, #419, #408, #395, #422, #423, #424, #433, #434 | #117, #359, #361, #379, #376 | Planning for Sprint 3 | 
| 10-6-2021 | #379, #433, #439 | #117, #361, #376, #393 | None | 
| 10-7-2021 | #354, #376, #447, #448 | #117, #355, #356, #406, #437 | None | 
| 10-8-2021 | #437 | #117, #355, #356, #406 | None |
| 10-11-2021 | #355, #356, #364, #460, #461, #464, #467, #472 | #363, #365, #406, #465 | None |
| 10-12-2021 | #363, #465 | #365, #366, #385, #406, #478 | None |
| 10-13-2021 | #366, #406, #478, #508, #511, #513 | #361, #365, #492, #500 | None |
| 10-14-2021 | None | #361, #365, #492, #500 | Preparing for Code Inspection |
| 10-15-2021 | None | #361, #365, #492, #500 | Preparing for Code Inspection |
| 10-18-2021 | #500, #506, #530, #531, #532 #539, #544, #562, #538 | #361, #492, #533, #534 | None |
| 10-19-2021 | #534, #573, #581 | #361, #492, #504, #533 | None |
| 10-20-2021 | #378, #492, #504, #533 | #361, #578, #590 | None |
| 10-21-2021 | #367, #578 | #361 | None |

## Review

### Epics completed  
Our team was able to complete 3 Epics, Find Places, Interoperability, and Distances. Equiped with
a better understanding of the code and consistent output of completed task, we were able to 
complete these Epics on time.

### Epics not completed 
Our team was unable to complete 2 Epics, Load Trip and Save Trip. We were able to provide the 
client with buttons and modals for each. However, for Load Trip we still have work to do to get 
the user's trip transferred into the App's itinerary. Also, Save Trip's modal is experiencing
buggy behavior and we still need be able to provide the user with a JSON of their complete trip.
Taking into account our successes and our uncompleted work, we beleive we will be able to 
successfully finish the uncompleted Epics as well as accomplish one to two additional Epics
for our next sprint.

## Retrospective

### Things that went well
After Sprint 2 demo, we went straight to tackle on unfinished epics from Sprint 2. Together, we were 
able to catch up from Sprint 2 and finish a couple of epics in Sprint 3. By this, we stayed with the
same communication tactic from Sprint 1 and used Slack to asks questions whenever we got stuck in a 
task. 

### Things we need to improve
One thing our team decided we need to improve is our overall communication. We need to discuss
our solutions to tasks as opposed to stating what we had completed in our scrum meetings. We need 
to work on adding the scope of issues and what all they entitle as comments to issues as well.

### One thing we will change next time
One thing we will change next time is improve our testing before adding/or editing  new code toward the project.
