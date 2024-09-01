# Tooling

## Intro

<iframe width="560" height="315" src="https://www.youtube.com/embed/MLeTM2IywUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Suggested Tools

- EditorConfig
- Prettier
- ES Lint
- PHP CS Fixer

## How To Configure Automatic PSR-2

### VS Code

- Install "PHP CS Fixer" by Junstyle
- Type: Command + P
- Type: settings.json
- Add the following...

```php
"[php]": {
    "editor.defaultFormatter": "junstyle.php-cs-fixer"
},
"php-cs-fixer.executablePath": "${extensionPath}/php-cs-fixer.phar",
"php-cs-fixer.onsave": true,
"php-cs-fixer.rules": "@PSR2",
"php-cs-fixer.allowRisky": false,
"php-cs-fixer.pathMode": "override",
"php-cs-fixer.exclude": [],
"php-cs-fixer.autoFixByBracket": false,
"php-cs-fixer.autoFixBySemicolon": false,
"php-cs-fixer.formatHtml": true,
"php-cs-fixer.documentFormattingProvider": true,
"php-cs-fixer.lastDownload": 1589342103708
```



### PHPStorm

- Go to: File > Preferences > Editor > Code Style > PHP
- Set from...
- PSR1/PSR2
- Install Save Actions:
[https://plugins.jetbrains.com/plugin/7642-save-actions](https://plugins.jetbrains.com/plugin/7642-save-actions)
- File > Preferences > Save Actions
- Check "Activate Save Actions On Save"
- Check "Reformat File"
- Click "Ok"
