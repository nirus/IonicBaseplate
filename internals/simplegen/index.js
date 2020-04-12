/**
 * Simple No-fuzz generator code for the Baseplate
 * Author: Niranjan Kumar
 */

const fs = require('fs');
const fsEx = require('fs-extra');
const compExist = require('./utils');
const path = require('path');
const hbs = require('handlebars');

const pascalcase = function (str) {
    let _str = str.slice();
    return _str[0].toUpperCase() + _str.slice(1);
}

hbs.registerHelper('pascalcase', pascalcase);
hbs.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
});

const [cType, comp] = process.argv.slice(2);
const ext = ['ts', 'tsx', 'scss', 'css'];

const compileTemplates = function () {
    const jsFiles = fs.readdirSync(path.join(__dirname, `template/${cType}`)).filter((f) => ext.some((extn) => f.endsWith(extn)));
    console.log("\n\t\t******** Processed Files from Baseplate template **********\n\n");
    jsFiles.forEach((file) => {
        fs.readFile(path.join(__dirname, `template/${cType}/${file}`), "utf8", function (err, buff) {
            const template = hbs.compile(buff);
            const out = template({ compName: comp });
            console.log(path.join(__dirname, `../../src/${cType}/${comp}/${file}`)); 
            fs.writeFileSync(path.join(__dirname, `../../src/${cType}/${comp}/${file}`), out);
        })
    });
}

if (compExist(comp)) {
    console.error(`\n\n \tError -- Sorry! ${comp} already exists inside ${cType} directory !\n\n\n\n`);
    process.exit();
} else {
    fsEx.copySync(path.join(__dirname, cType), path.join(__dirname, `../../src/${cType}/${pascalcase(comp)}`));
    compileTemplates();
}