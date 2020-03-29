# Ionic-react-baseplate

Read the [reactboilerplate](https://github.com/react-boilerplate/react-boilerplate) (motivation) documentation to understand this GIT repo. Although its not mandatory!

This boiler plate contains **React + Redux (+ immer) + Saga + Re-select** fully written in [typescript](https://www.typescriptlang.org/)

**Use this code as base to your Ionic + React based apps. (Generators are WIP - PR are welcomed)**

### Implemetation details (Please follow these)

- `src\pages\Tab1Page` : Reference implementation for a page that is followed througout boiler plate code (Also called Container)
- `eProps` : Emit props (differentiated from normal props), used to emit actions to the reducer or middleware
- `src\pages\Tap1Page\constants.ts` : Contains both action names and constants used within a page.
- `reducer` : is implemented using **immer.js**, a draft based state manipulation.
- `SASS\SCSS` : (***style.module.scss***) module based for the classname hashing / namespace collision prevention.
- `src\widgets` : Contains all the elements and compontents to be used in pages.
- `src\common` : Contains all the project related wiring and also APP level configurations.

### Advantages

Tightly coupled with typescript system and developer friendly boiler plate. Ease development lifecycle.

### Suggestions 0r Comments

Please raise a PR or issue request for your valuable contributions and Suggestions

### Goals based on community acceptance

- Generator
- Unit Testcase
