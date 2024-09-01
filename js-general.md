# Javascript Code Style Guide

## Follow AirBNB (With Tooling)

https://github.com/airbnb/javascript

Tooling: For VueCLI AirBNB styling is a setting you can select when initializing a new project.  Eslint can be configured in other projects.

> Justification:
>
> The AirBNB Javascript Code Style Guide goes beyond baseline and places some very solid guidelines about how Javascript code should be formed.

## Clean Console

> Justification:
>
> Removing any non-error console logging is good for everyone to only see the test output they need at the time.  It also keeps us from accidentally leaving information we shouldn't in console output.

## Max Line Length of 120 Characters

> Justification:
>
> AirBNB CSG calls for a 100 character line length limit for code.  Adding 20 more characters allows for creating WIP/deeper nested code that can be refactored later.  This is simply for flexibility.
