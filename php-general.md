# PHP Code Style Guide

## Follow PSR-2 (With Tooling)

https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md

Tooling: PHP CS Fixer on save with config file in place.  Suggesting this as it is something that Jeff Way uses and recommends on Laracasts / seems to be the Laravel standard way of doing this.

> Justification:
>
> Laravel currently is built using the PSR-2 standard and eventually will likely move to PSR-12.  I'd like to adopt this standard and enforce this with tooling.  It covers a good baseline of code formatting inconsistencies and creates a good frame for code to live in.
>
> PSR-2 already covers tabs vs. spaces, EOL and EOF whitespace, spacing precision, etc.

## Avoid "Else" Statements When Possible

> Justification:
>
> The use of else statments are sometimes a necessary evil but should be avoided when possible.  There are many articles that explain and support this...  the topic is covered well about 5m30s into [https://www.youtube.com/watch?v=fr5Lae8WUOE](https://www.youtube.com/watch?v=fr5Lae8WUOE)

:white_check_mark: Accepted:

```php
if ($var == true) {
	return 'Positive';
}

return 'Negative';
```

:x: Denied:

```php
if ($var == true) {
	return 'Positive';
} else {
	return 'Negative';
}
```

## Single Quotes Over Double Quotes

Use single and double quotes when appropriate. If you’re not evaluating anything in a string, use single quotes.

> Justification:
>
> Laravel adopts this practice throughout core code.  Single quotes are very slightly faster as they are not parsed.  Wordpress and the majority of other code guides that include this rule lean towards using single quotes as well.  Most JS styleguides also follow single quote enforcement over template literals as well.

https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/

## App folder/file naming conventions

Append the singular-form of the folder name after the name of the subject of the file.

Example folder/file names:

```
App/Console/Commands/ThingCommand
App/Controllers/ThingController
App/Exceptions/ThingException
App/Exports/ThingExport
```

> Justification:
>
> Just about every folder with the exception of Models and Libraries (there may be other exceptions) should follow this convention. It prevents potential PSR collisions, removes the need to "use X as Y" (to avoid conflicts in code) and generally makes it easier to tell what you're looking at.

## Avoid Referencing Laravel Aliases, Use Facades Directly

> Justification:
>
> Referencing aliases defined in `config/app.php` causes PHP linters to squawk.  Also Laravel 7 mostly references facades directly.

:white_check_mark: Accepted:

```php
use Illuminate\Support\Facades\Log;
```

:x: Denied:

```php
use Log;
```

## No Beggining Slashes in Route Files

> Justification:
>
> These do not need to exist.  Just for consistency.

:white_check_mark: Accepted:

```php
Route::('path', 'Controller@method');
```

:x: Denied:

```php
Route::('/path', 'Controller@method');
```

## Avoid Tab-Aligning Arrays

> Justification:
>
> I know this seems like a good practice at a glace but there are many articles that point out that this type of spacing actually slows down eye-line scanning as you look left-to-right instead of scanning the left-most text top-to-bottom, which is the descriptor of the array.  It also requires an extension or manual spacing to stay consistent with this approach.

:white_check_mark: Accepted:

```php
$array = [
	'someArrayItem' => 'value 1',
	'anotherArrayItem' => 'value 2',
	'yetAnotherArrayItem' => 'value 2',
];
```

:x: Denied:

```php
$array = [
	'someArrayItem' =>				'value 1',
	'anotherArrayItem' =>			'value 2',
	'yetAnotherArrayItem' =>		'value 2',
];
```

## Single-Tab Under Multi-Line Chained Methods

> Justification:
>
> This is a pattern found throughout the Laravel docs, namely in the Eloquent section.

:white_check_mark: Accepted:

```php
$model->method()
    ->anotherMethod()
    ->yetAnotherMethod();
```

:x: Denied:

```php
$model->method()
->anotherMethod()
->yetAnotherMethod();
```

## Use config() Over env()

> Justification:
>
> This is specified in Laravel docs.  The problem is that when using `php artisan config:cache` the direct references to `env()` will no longer work at all.  Also, making sure `env()` is only referenced in config allows to set a default value and serves as mild documentation for the `.env` file.

## Avoid Using Controllers To Only Display A View

> Justification:
>
> We can use Route::view() for simply displaying a view instead of adding controllers.

## Avoid Using Nested Ternary Operators

> Justification:
>
> Nested ternary operators are very difficult to understand at a glance.

:white_check_mark: Accepted:

```php
$value = ($condition == true) ? 'positive' : 'negative;
$othervalue = ($othercondition == true) ? $value : 'negative';
```

:x: Denied:

```php
$value = ($othercondition == true) ? ($condition == true) ? 'positive' : 'negative : 'negative';
```

## Use __invoke() For Single Action Controllers

> Justification:
>
> Single action controllers usually have redundant method names.  It is just clean and simple to use __invoke() for these things.

-

## Write expressive code over comments when possible

> Justification:
>
> Comments should be avoided as much as possible by writing expressive code.

## Space before single-line comments

> Justification:
>
> This pattern is followed throughout PSR docs as well as Laravel code and documentation.

:white_check_mark: Accepted:

```php
// This is my comment
```

:x: Denied:

```php
//This is my comment
```

## Multi-Line Comments Use /**

> Justification:
>
> It is more clear, at a glance, when multi-line comments are strung together in this way.  An exception to this would be if you are temporarily disabling a section of code.

:white_check_mark: Accepted:

```php
// Single Line Comment
```

```php
/**
 * Multi
 * Line
 * Comment
 */
```

:x: Denied:

```php
// Multi
// Line
// Comment
```

## Route Sections Should Be Commented Using # #

> Justification:
>
> Hashed comments here will create visual separation between what is a section title and what is simply a comment.

:white_check_mark: Accepted:

```php
# Registration
Route::('path', 'Controller@method');
// Route::('path', 'Controller@method');
```

:x: Denied:

```php
// Registration
Route::('path', 'Controller@method');
// Route::('path', 'Controller@method');
```
