
<p align="center">
    <img src="https://github.com/nirus/Ionic-React-Baseplate/blob/master/baseplate-logo.png?raw=true">
</p>
<h1 align="center">Baseplate</h1>
<h3 align="center">[ a boilerplate code for ionic + react ]</h3>


# Documentation:

 Scaffold your project **using React + Redux (+ immer) + Saga + Re-select** fully written in [typescript](https://www.typescriptlang.org/)
  
  
**Enjoy building complex Ionic + React based apps.**

  
## Baseplate features


- Tightly coupled with [Typescript](https://www.typescriptlang.org/) system.

![enter image description here](https://github.com/nirus/Ionic-React-Baseplate/blob/master/props.gif?raw=true)

- Generator for page and component

![enter image description here](https://github.com/nirus/Ionic-React-Baseplate/blob/master/npm.gif?raw=true)

- Well suited for **PWA** or **Apache Cordova**. based applications.

## Usage: 

Clone the repository and run below commands

**For page:**  `npm run gen-page TestPage`
  
**For Component:**   `npm run gen-comp TestComponent`

## Implementation details:

 |  File \ Folder | Details  | 
|---|---|
| `src\pages\SimplePage` |  Reference implementation for a page that is followed throughout boiler plate code *(built on container concept)* |
| `src\pages\SimplePage\constants.ts` |  Contains both action names and constants used within a Page \ Container|
| `src\components` | Contains all the elements and components to be used in Page \ Container. |
| `src\basplate` | Contains all the project related wiring and also application level configurations.|
| `src\shared-base` | Refer [readme.md](https://github.com/nirus/Ionic-React-Baseplate/tree/master/src/shared-base) inside *shared-base* folder  |

## Options

| Options \ Object | Details |
|---|---|
| `eProps` | Emiter props *(differentiated from normal props)*, used to emit actions to the reducer or middleware from the container. |
| `action` | object that carries the data in a component |
| `reducer` | is implemented using [**immer.js**](https://github.com/immerjs/immer), a draft based state manipulation. |
| `SASS` | (***style.module.scss***) module based for the classname hashing & namespace collision prevention. |

### Action Object

| Options \ Object | Type | Description|
|---|---|---|
| type | String | Unique string for each page or container. It should be unique across the application.
| payLoad | String / Object | Data payload carrier for component to middleware and vice versa
| meta | Function / String / Object | Any data directly to be sent to middlewares and vice versa without putting to global store. ex: function callback |

## Repo inspired by

[ReactBoilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Suggestions 0r Comments

Please raise a PR or issue request for your valuable contributions and Suggestions
  

## Roadmaps

- Translation (i18n support) - *Tweaks needed*
- Boilerplate code without Redux and Saga 
- Adding more options to generator
- Support for React Native
