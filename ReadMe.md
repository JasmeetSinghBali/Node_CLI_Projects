> # Collection of Node.js based CLI tool

- [x] Vercel-config(for generating vercel.json configuration file for deployment on vercel)
- [x] capit(crypto currency api tracker)

****Status: Developing project 1****

timestamp-35
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
  - [x] automatic check wheather vercel.json already exists.
    - [x] yes , then ask if they want to overwrite the existing vercel.json
  - [x] Name of the project?
    - [x] default to current directory name
  - [x] What type of project?
    * node-express (ask them where the app.listen i.e server.js path is)
    * next.js (no need of vercel.json it is automatically handled by vercel)
    * static (ask them the name of the directory they are trying to deploy)
    * react (default options)
    * vue (default options)
    * static-build (what directory to build to)
    * lambda (entry point)
  - [ ] Ask project Specific questions mentioned above in brackets.
  - [ ] which file is the entry point?
  - [ ] Would you like to specify an alias
    - [ ] Alias one or more
  - [ ] Would you like to add vercel-build to package.json?
    - [ ] only prompt if react,vue,static,next builds
  - [ ] Would you like to deploy?

> ### Core dependencies

- [x] inquirer
- [x] fs
- [x] path
