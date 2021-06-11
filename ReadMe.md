> # Collection of Node.js based CLI tool

***

****Status: to Start Working On Project-3 express-rest-boilerplate generator tool node-cli****



- [x] Vercel-config(for generating vercel.json configuration file for deployment on vercel)
 published- https://www.npmjs.com/package/vercel-config

- [x] capit(crypto currency api tracker) published-

- [ ] npm package to generate express-rest-boilerplate (Express REST API Boilerplate)
   - [ ] First make a REST API generalize boilerplate
   in Snippets Collection.

***
***
> ## possible options for building the CLI tool

 - [x] Inquirer(question based cli and then genrate somthing useful)

- [x] Commander.js parsing arguments like the flags we give during an cli command. so instead of question all the params have to mentioned upfront via --flags.

- [x] Caporal A mixture of both interactive prompt(question/answers) and argument passing , has helper like we typed some wrong flag or cmd in CLI it will suggest did you mean this, has colors ,loggers

- [x] yargs interactive is combination of argument parser and inquirer i.e interative prompts+argument passing.

***

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

> ### Imp/fun Facts

- [x] for windows + . to open emojis

- [x] this CLI tool generates vercel.json configuration file for Project category that describes how the project should act  with Vercel.

- [x] the idea is that vercel creates serverless functions for us the only requirement for these is that we should place the serverless functions(backend) inside the 'api' directory and this 'api' directory must be placed in the root of the project.

        -project
         /api
          -/server.js

> ## Future Version Options

- [ ] functions(****Can Only be Used if the serverless function is inside a api directory i.e the project posses a api directory****) refer https://vercel.com/docs/configuration

   - ****memory****
   An integer defining the memory your Serverless Function should be provided with (between 128 and 3008, in intervals of 64).
   - ****maxduration****
   An integer defining how long your Serverless Function should be allowed to run on every request in seconds (between 1 and the maximum limit of your plan 10s(Hobby),60s(Pro), 900s(Enterprise)).

****in vercel.config (note for next.js only memory and maxDuration is allowed)****

        {
          "functions": {
            "api/test.js": {
              "memory": 3008,
              "maxDuration": 60
            }
          }
         }

***
***

> ## Project -2 CAPIT (crypto currency api tracker)

****DONE v1.0.0****

> ### Usage
> #### Node-CLI tool to fetch cryptocurrency rates via nomics api
>#### API :  https://nomics.com/  

> ### Commands capit [options] [command]
- capit apikey set (To add API key)
- capit apikey show (To See your API Key)
- capit apikey remove (To remove your API Key)
- capit track price (to track prices of different cryptocoins)
- capit apikey price --cur=YEN --coin=BTC,ETH (additional flags for custom data mentioning currency type and comma seperated coin symbols)


> ### Blueprint
- [x] Set up Basic Boilerplate
   - [x] set up bin in package.json
   - [x] make the entry point of the bin executable with #!/usr/bin/env
   - [x] create a link npm link(do not works for windows) can use node bin/project.js instead
- [x] Install dependencies
- [x] Set up commander & Inquirer
  - [x] apikey commands
    - [x] Set Up KeyManager class lib via configstore
       - [x] set
       - [x] show
       - [x] remove
    - [x] Set up apikey
       - [x] call KeyManager methods via object in cammands.
          - [x] set
          - [x] show
          - [x] remove
  - [x] track commands
    - [x] price
       - [x] --coin flag
       - [x] --cur flag
- [x] custom API error handler
- [x] Publish 1.0.0

> ### Core dependencies
- [x] API docs nomics-https://nomics.com/docs/#tag/Currencies
- [x] Commander.js
- [x] inquirer
- [x] configstore
- [x] axios
- [x] colors

> ### Future Developments
- [ ] generate a graph with the fetched data and show the graph in the console.
- [ ] work on other endpoints of the api
- [ ] make the error handler more robust by looking in to the docs of nomics.


> ### Some Imp/Fun facts I encountered during development

- [x] Issue of importing ES modules note that they cannot be required(common.js) they have to be imported
like in the case of configstore(6.0.0 version)
Solution : downgraded to version 5.0.1 when configstore used require.

- [x] process.argv contains the array of the passed flags/extra arguments while running a cli tool.

        // in terminal
        node src/bin/capit.js key someotherkey

        Hello from capit
        [  'C:\\dev\\node.exe',
           'C:\\Users\\devsu\\Desktop\\Node_CLI_projects\\capit_crypto_tracker\\bin\\capit.js',
           'key',
           'someotherkey'
         ]

- [x] mentioning version,parse via commander gives us default version and help flags as argument initially.

         // in terminal
         node src/bin/capit.js -h
         Usage: capit [options]

         Options:
          -V, --version  output the version number
          -h, --help     display help for command

- [x] Be sure to make the function async when using inquirer.prompt() as it returns a promise.
