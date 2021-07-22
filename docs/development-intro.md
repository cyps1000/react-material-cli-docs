---
id: development-intro
title: Intro
---

What **react-material-cli** can do:

## Create custom, pre-defined components

```sh
rmc create Button
```

_This will create a custom component that you can immediately use throughout your application_

And will look like this:

```sh
  Component_Name/
      Component_Name.stories.js
      Component_Name.styles.js
      Component_Name.test.js
      Component_Name.js
      Component_Name.md
      index.js
```

## Create boilerplate components

```sh
rmc create Component_Name -b
```

_This will create a boilerplate component that you can customize based on what you need_

Alternatively, you can use this:

```sh
rmc create Component_Name --boilerplate
```

## Create custom hooks #to-add

## TypeScript support

**rmc** components can also be generated in TypeScript. For instance:

```sh title="Custom component with TypeScript"
rmc create Component_Name -ts
```

```sh title="Boilerplate component with TypeScript"
rmc create Component_Name -b -ts
```

:::tip

You can use either `-ts` or `--ts`

:::
