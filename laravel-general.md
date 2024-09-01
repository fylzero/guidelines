# Laravel General

## Use 4-Space Tabbing Throughout JavaScript/Vue Files

> Justification:
>
> AirBNB and Google's CSGs enforce 2-spaces tabbing of code for Javascript.  With the acknowledgement that 2-space is a standard we are choosing to use 4-spaces for tabbing in our Js and Vue files for readability.  This also makes our Js code spacing align with PHP/PSR-2 which can make working with auto-formatters a bit simpler as well.

## Use helpers over facades

> Justification:
>
> Saves from having to add an additional use statement.  Readability is (VERY) slightly better.  Just really for consistency sake of picking a way of doing it rather than mixing the two everywhere.

:white_check_mark: Accepted:

```php
$userId = auth()->user()->id;
info('A thing happened'); // Only works for info, not error, debug, etc.
```

:x: Denied:

```php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

$userId = Auth::user()->id;
Log::info('A thing happened');
```
