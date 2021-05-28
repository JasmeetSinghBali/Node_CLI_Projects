> # Collection of Node.js based CLI tool

- [x] Vercel-config(for generating vercel.json configuration file for deployment on vercel)
- [x] capit(crypto currency api tracker)

****Status: Developing project 1****

timestamp-16
> ### Project -1 : vercel-config
 SRC : https://vercel.com/docs/configuration

> ## possible options for building the CLI tool

 - [x] Inquirer(question based cli and then genrate somthing useful)

- [x] Commander.js parsing arguments like the flags we give during an cli command. so instead of question all the params have to mentioned upfront via --flags.

- [x] Caporal A mixture of both interactive prompt(question/answers) and argument passing , has helper like we typed some wrong flag or cmd in CLI it will suggest did you mean this, has colors ,loggers

- [x] yargs interactive is combination of argument parser and inquirer i.e interative prompts+argument passing.

> #### Use Case
****For generating vercel.json which is a config file for deployment of frontend,static,dynamic,server at vercel****

> ### Blueprint
- [x] choose appropriate liberary for argument parsing and interaction.
  - [x] Inquirer(interative questions)
- [ ] ClI asks questions:
  - [ ] automatic check wheather vercel.json already exists.
    - [ ] yes , then ask if they want to overwrite the existing vercel.json
  - [ ] Name of the project?
    - [ ] default to current directory name
  - [ ] What type of project?
    * node-express
    * next.js
    * static
    * react
    * vue
    * static-build
    * lambda
  - [ ] which file is the entry point?
  - [ ] Would you like to specify an alias
    - [ ] Alias one or more
  - [ ] Would you like to add vercel-build to package.json?
    - [ ] only prompt if react,vue,static,next builds
  - [ ] Would you like to deploy?
