# PHPunit Tests Code Style Guide

## Test Method Names Should Be In snake_case

> Justification:
>
> Test method name should be verbose and snake casing makes longer text far easier to read and understand at a glance.

:white_check_mark: Accepted:

```php
public function some_test_case()
```

:x: Denied:

```php
public function someTestCase()
```

## Tests Method Names should be annotated with @test, not prefixed with test_

> Justification:
>
> Removes an extra word to allow more verbosity in the test method name.  Sets you up for using other annotations like groups.  This also makes it clear what is actually a test vs. a helper method in a test file.

:white_check_mark: Accepted:

```php
/** @test **/
public function the_thing_does_the_other_thing()
```

:x: Denied:

```php
public function test_the_thing_does_the_other_thing()
```
