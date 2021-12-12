# Inspection Checklist for t02

The goal of an Inspection is to file defects.
This checklist is our guide to help us look for defects.
The checklist will be updated as we identify new faults in our code that we wish to prevent in future inspections.


### Data faults
* Are all program variables initialized before their values are used?
* Have all constants been named?
* Should the upper bound of arrays be equal to the size of the array or size-1?
* If character strings are used, is a delimiter explicitly assigned?
* Is there any possibility of a buffer overflow?
* Do variable and function names make sense?
* Can a large function/file be broken down?
* Is there any duplicate code?
* Is the code left aligned and properly white spaced?
* Are there any hard-coded values besides the necessary constant values?
* Is the keyword let used sparingly, where const is preferred?
* Do all data points have/give expected values?
* Are there any unexpected NULL values?
* Are all unused imports removed?
* Are equations and logic returning expected results? 

### Control faults
* For each conditional statement, is the condition correct?
* Is each loop certain to terminate?
* Are compound statements correctly bracketed?
* In case statements, are all possible cases accounted for?
* If a break is required after each case in case statements, has it been included?
* Are there any use cases in which the code does not behave as intended?
* Are there any inputs or external events that could break the code? 
* Multiple if/else statements are avoided? 
* Are JavaScript variables initialized only with const or let keywords?

### Parameter faults
* Are all input variables used?
* Are values assigned to all output variables before they are output?
* Can unexpected inputs cause corruption?

### Interface faults
* Do all functions and methods have the correct number of parameters?
* Do formal and actual parameter types match?
* Are the parameters in the right order?
* Do all components use a consistent model for shared memory structure?

### Storage faults
* If a linked structure is modified, have all links been correctly diagnosed?
* If dynamic storage is used, has space been allocated correctly?
* Is space explicitly deallocated after it is no longer required?

### Exception faults
* Have all possible error conditions been considered?
* Does the code work?
* Is error handling done the correct way?
* Should any logging/debugging information be added or removed?
* Do error messages make sense?

### Documentation
* Is ther sufficient comments for the code?
* Has design.md been updated?

### Performance
* Does the server respond to requests within a reasonable amount of time?

### Testing and Testability
* Is the code testable?
* Does it have enough automated tests (unit/integration/system tests)?
* Do the existing tests reasonably cover the code change?
* Are there some test cases, input, or edge cases that should be tested in addition?
