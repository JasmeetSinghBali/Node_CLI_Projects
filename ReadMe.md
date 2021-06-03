> # Collection of Node.js based CLI tool

****Status: Developing project 1****

timestamp-103

- [x] Vercel-config(for generating vercel.json configuration file for deployment on vercel)
- [x] capit(crypto currency api tracker)

> ## possible options for building the CLI tool

 - [x] Inquirer(question based cli and then genrate somthing useful)

- [x] Commander.js parsing arguments like the flags we give during an cli command. so instead of question all the params have to mentioned upfront via --flags.

- [x] Caporal A mixture of both interactive prompt(question/answers) and argument passing , has helper like we typed some wrong flag or cmd in CLI it will suggest did you mean this, has colors ,loggers

- [x] yargs interactive is combination of argument parser and inquirer i.e interative prompts+argument passing.

> ### Project -1 : vercel-config
 SRC : https://vercel.com/docs/configuration


> #### Use Case
****For generating vercel.json which is a config file for deployment of frontend,static,dynamic,server at vercel****

> ### Blueprint
- [x] choose appropriate liberary for argument parsing and interaction.
  - [x] Inquirer(interative questions)
- [x] ClI asks questions:
  - [x] automatic check wheather vercel.json already exists.
    - [x] yes , then ask if they want to overwrite the existing vercel.json
  - [x] Name of the project?
    - [x] default to current directory name
  - [x] What type of project?
    * node-express (ask them where the app.listen i.e server.js path is)
    * static (ask them the name of the directory they are trying to deploy)
    * react (default options)
    * vue (default options)
    * static-build (what directory to build to)
  - [x] Ask project Specific questions mentioned above in brackets.
  - [x] which file is the entry point?
  - [x] Would you like to add vercel-build to package.json?
    - [x] only prompt if react,vue,static,next builds
  - [x] Add the bin command in package.json
  - [x] npm link to test it out.(for developer only)
  - [x] specify the interpreter in the index.js along with shebang #!
> ### Core dependencies

- [x] inquirer
- [x] fs
- [x] path
- [x] eslint (npm run lint , npm run lint -- --fix)

> ### Imp Facts

- [x] for windows + . to open emojis

- [x] this CLI tool generates vercel.json configuration file for Project category that describes how the project should act  with Vercel.

- [x] the idea is that vercel creates serverless functions for us the only requirement for these is that we should place the serverless functions(backend) inside the 'api' directory and this 'api' directory must be placed in the root of the project.

        -project
         /api
          -/server.js


- [x] functions(****Can Only be Used if the serverless function is inside a api directory i.e the project posses a api directory****)

   - ****memory****
   An integer defining the memory your Serverless Function should be provided with (between 128 and 3008, in intervals of 64).
   - ****maxduration****
   An integer defining how long your Serverless Function should be allowed to run on every request in seconds (between 1 and the maximum limit of your plan 10s(Hobby),60s(Pro), 900s(Enterprise)).

****in vercel.config (note for next.js only memeory and maxDuration is allowed)****

        {
          "functions": {
            "api/test.js": {
              "memory": 3008,
              "maxDuration": 60
            }
          }
         }
