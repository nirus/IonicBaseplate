
<p align="center">
    <img src="https://github.com/nirus/Ionic-React-Baseplate/blob/master/baseplate-logo.png?raw=true">
</p>
<h1 align="center">Baseplate</h1>
<h3 align="center">[ ionic + react + redux ]</h3>

<hr /> 


## Documentation:

Read the [reactboilerplate](https://github.com/react-boilerplate/react-boilerplate) (motivation) documentation to understand this GIT repo. Although its not mandatory!


This boiler plate contains **React + Redux (+ immer) + Saga + Re-select** fully written in [typescript](https://www.typescriptlang.org/)

  

**Use this code as base to build complex Ionic + React based apps.**

  
  

## Baseplate features

  

- Tightly coupled with [Typescript](https://www.typescriptlang.org/) system.

![enter image description here](https://github.com/nirus/Ionic-React-Baseplate/blob/master/props.gif?raw=true)
- Generator for page and component

![enter image description here](https://github.com/nirus/Ionic-React-Baseplate/blob/master/npm.gif?raw=true)

----

## Generator Usage: 

**For page:**  `npm run gen-page TestPage`
  
**For Component:**   `npm run gen-comp TestComponent`

## Page Implementation details:

  

-  `src\pages\SimplePage` : Reference implementation for a page that is followed throughout boiler plate code *(built on container concept)*

-  `eProps` : Emiter props *(differentiated from normal props)*, used to emit actions to the reducer or middleware from the container.

-  `src\pages\SimplePage\constants.ts` : Contains both action names and constants used within a Page/Container.

-  `reducer` : is implemented using **immer.js**, a draft based state manipulation.

-  `SASS\SCSS` : (***style.module.scss***) module based for the classname hashing & namespace collision prevention.

-  `src\components` : Contains all the elements and components to be used in pages / Container.

-  `src\basplate` : Contains all the project related wiring and also APP level configurations.

  
#### shared-base details - Refer [readme.md](https://github.com/nirus/Ionic-React-Baseplate/tree/master/src/shared-base) inside *shared-base* folder  

### Suggestions 0r Comments

  

Please raise a PR or issue request for your valuable contributions and Suggestions

  

### Goals based on community acceptance

  

- Translation (i18n support) - Tweaks needed
