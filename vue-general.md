# Vue

## Component and Props Casing

Vue components should prefer PascalCase over kebab-case.
Vue props should prefer camelCase over kebab-case.

> Justification:
>
> The Vue 2 styleguide suggests that kebab case is best for passing props but that props should be invoked in camelCase.  The argument is that in html kebab case makes more sense / aligns with html attribute tags like `aria-*` / aligns with Vue tags like `v-if`, `v-model`, etc.  Rather than cause a disconnect in casing it would be preferrable to choose one.  Camel casing makes more sense here since it should be used in javascript as such.  Also, since these props are passed in Vue-specific component tags, it makes it a bit more clear at a glance what they are for in html.
>
> It is generally recommend to use PascalCase for components in single .vue files.  In Blade files or other DOM templates, kebab case is preferred.
>
> [Source](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended)

:white_check_mark: Accepted:

```
<WelcomeMessage greetingText="hi" />
```

:x: Denied:

```
<my-component greeting-text="hi" />
```

## Vue 2 File Structure

Vue 2 files (ending with extension .vue) should follow a consistent ordered tag structure of template tag, then script tag, then style tag. Each tag should have a return line between them.

:white_check_mark: Accepted:

```
<template></template>

<script></script>

<style></style>
```

:x: Denied:

```
<template></template>
<style></style>
<script></script>
```


## Vue 3 File Structure

Vue 3 files (ending with extension .vue) should follow a consistent ordered tag structure of script tag, then template tag, then style tag. Each tag should have a return line between them.

:white_check_mark: Accepted:

```
<script></script>

<template></template>

<style></style>
```

:x: Denied:

```
<template></template>
<style></style>
<script></script>
```
