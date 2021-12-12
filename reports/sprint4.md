# Sprint 4 - t02 - Git Good

## Goal
### *Shorter tours!*

## Sprint Leader: 
### Alex Wedel

## Definition of Done

* The Increment release for `v4.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
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

The first epic that we are planning to take on in Sprint 4 is "Trip Name". In this epic, we will add a input box that will
allow the user to change the trip name where 'My Trip' is currently.

The second epic that we are planning to take on in Sprint 4 is "Shorter Trip". In this epic, we will add a button that,
when pressed, will optimize the trip. This means that the order of places in the itinerary will be rearranged so that 
the total trip distance is minimized.

The third epic that we are planning to take on in Sprint 4 is "User Experience". For this epic, we will interview five users 
and identify potential issues or improvements that we can make to our user interface for a better user experience. We will 
then implement these features, which will allow the users to interact with the app in a way more friendly to them.

The fourth epic that we are planning to take on in Sprint 4 is "Save Trip".

In this epic, we plan to allow users the ability to save their trip. This will give the user 
the ability to save the trip that they are currently working on into a file that they can store on their personal device.

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 4 | 4 |
| Tasks |  23  | 42 | 
| Story Points |  34  | 57 | 


## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| 10-25-2021 | None | None | Sprint 4 planning |
| 10-26-2021 | #646, 652  | #617, 649, 648, 644, 623 | None |
| 10-27-2021 | #680, 678, 636, 648, 617, 618, 637, 649, 671, 673, 644 | #619, 676, 620, 623, 621, 683, 678 | Alex is unable to SSH |
| 10-28-2021 | #619 | #676, 620, 623, 621, 683 | Alex is unable to SSH |
| 10-29-2021 | #689, 621, 676, 620 | #405, 622, 623, 683 | Technical problems |
| 11-01-2021 | #711, 628, 633, 630, 719, 720, 723, 631, 623, 726 | #405, 683, 622, 714, 624 | Technical problems with Postman |
| 11-02-2021 | #733, 405, 629, 737, 632 | #728, 731, 736, 732, 730, 609, 683, 735, 622, 714, 624 | Postman trouble still |
| 11-03-2021 | #735, 732, 714, 751, 731, 738, 624 | #728, 730, 609, 683, 622 | None |
| 11-04-2021 | #774, 770, 771, 707, 772, 760, 788, 761, 763, 782, 728, 780, 624, 730 | #609, 683, 622, 775, 764, 805 | None |
| 11-05-2021 | #784, 766, 683 | #804, 609, 622, 775, 764, 805, 765 | None |
| 11-08-2021 | #805, 765, 814, 804, 802, 779 | #611, 609, 622, 777, 775, 764, 610 | None |
| 11-09-2021 | #777, 609, 822, 823 | #611, 610, 824, 776, 775, 622 | None |
| 11-10-2021 | #827, 824, 829 | #611, 610, 764, 776, 775, 622 | None |
| 11-11-2021 | #833, 776, 764, 775, 850, 856, 846, 834, 855 | #837, 611, 610, 622 | None |

## Review

### Epics completed  
Our team was able to complete 4 Epics, Trip Name, Shorter Trip, Save Trip, and User Experience. By folloing the Scrum
methodology we were able to quickly adress and assist each other with issues, making it possible to complete
these Epics on time.

### Epics not completed 
Our team was unable to complete one Epic, Highlight place. Our team was unable to complete the task , Hightlight marker selected 
from trip list. Taking into account our successes and our uncompleted work, we beleive we will be able to successfully finish the 
uncompleted Epics as well as accomplish one to two additional Epics for our next sprint.

## Retrospective

### Things that went well
Our team was able to improve on writing tests alongside the code and we also reduced the time spent during each scrum. By
streamlining our scrums, our team was able to communicate better and led to an improvement in our communication in Slack as well.

### Things we need to improve
We need to work on making a more conscious effort to do thorough testing as we are writing new code and keep in mind that we should
be increasing coverage as we work.

### One thing we will change next time
We should work on testing more thoroughly and intentionally.
