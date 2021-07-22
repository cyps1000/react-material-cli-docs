---
id: folder-structure
title: Folder Structure
---

# Folder Structure

## Components & Hooks

After creating a `component`, your src folder should look like this:

```json title="With JavaScript"
src/
  components/
    Component_Name/
      Component_Name.stories.js
      Component_Name.styles.js
      Component_Name.test.js
      Component_Name.js
      Component_Name.md
      index.js
```

```json title="With TypeScript"
src/
  Component_Name/
  components/
      Component_Name.stories.tsx
      Component_Name.styles.ts
      Component_Name.test.tsx
      Component_Name.types.ts
      Component_Name.tsx
      Component_Name.md
      index.ts
```

The folder structure after creating a `hook`:

```json title="With JavaScript"
src/
  hooks/
    Hook_Name/
      Hook_Name.js
      index.js
```

```json title="With TypeScript"
src/
  hooks/
    Hook_Name/
      Hook_Name.ts/.tsx depending on the hook
      index.ts
```

:::tip

If the `components` folder is non existent, `react-material-cli` will create it instead

:::

## RMC - new CRA boilerplate #to-do
