
# Usage for *shared-base* folder

Goal of this folder is to create a common point for the sharable logics & api's that can be seamlessly used across the project. Please follow the below rules when you put your code or file inside **shared-base** folder.

  

### Rules to follow

  

1. Common filenames are prefixed with `x` at toplevel like ***xconstant.ts, xfetchapi.ts***

2. If you have multiple files to be shared across the app by design. Follow SOC - [Seperation Of Concern](https://en.wikipedia.org/wiki/Separation_of_concerns) using folder structure.

    - Create & use `xfectapi` folder to place all your AJAX composed files inside & exposing api's via `index.ts`- This is kindof *common service layer*. Although we encourage all pages should have its own network calls `fetchapi.ts`

    - Create & use `xconstants` folder to place all constants **( Stick with one file for *constants* as much as possible )**

    - Create & use `xcommon` folder to place all your common - data objects, common utilities, interfaces etc, and exposing api's via `index.ts`.

    - Naming conventions for the files that are placed inside these above said folders are developer's choice.

3. If you want to share common fetch api ( AJAX network calls ) that are already written inside **pages**, you can import those methods to `shared-base/x-fetchapi/index.ts` and **export** it for common use.
4. For tescase spec creation use `test` folder to place all your test cases.
5. If you have more than one file inside **xcommon** folder as a part of SOC creation explained in *2nd* point, create filename like `xcom.[YOUR_FILENAME].spec.ts` eg `xcom.payment.spec.ts`
6. Above *6th* point applies to `xfetchapi` folder too if created as a part of SOC explained in *2nd* point.
7. Please don't be bothered of creating bigger filenames. Stick with smaller and concise names as much as possible. Filenames chosen should be appropriate and understandable for other developers.

  
  

### Why prefix - `x` ?

  

`x` commonly mean cross sharing the resources.

  

#### * ***Please follow the above rules. This file will be updated periodically. Keep visiting.***
