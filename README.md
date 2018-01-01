# react-basic-starter-project-template

we have created a public folder.public folder is going to contain all of the assets that we actually want to serve up



presets are just group of plugins 
what we have to do is include the react presets locally when we use babel that is going to take our JSX and compile(convert,transpile)
 it to ES5 that browser actually understands

 learn more on babeljs.io/docs/plugins/
 
 
 Run the following command to compile the code from JSX to ES5
 
 babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
 
