const path = require('path');
const fs=require('fs');
const inquirer = require('inquirer');

const baseConfig = {
  builds: [
    {
       src: 'package.json',
       use: '@vercel/static-build',
       config:{"distDir": "build"}
     }
   ],
  rewrites:[
    {
      handle:"filesystem"
    },
    {
      source: "/.*",
      destination: "index.html"
    }
  ]
};

async function fef(config,defaultBuild='dist') {
  const answers = await inquirer.prompt([
    {
      type: 'text',
      name: 'directory',
      message: 'What is the build directory?',
      default: defaultBuild,
    },
    {
      type: 'confirm',
      name: 'addBuildScript',
      message: 'Do you want to add/update a "vercel-build" script in your package.json?',
      default: true,
    }
  ]);

  if(answers.addBuildScript){
    try {
      const packageJSONPath=path.join(process.cwd(), 'package.json');
      // eslint-disable-next-line
      const packageJSON = require(packageJSONPath);
      const buildScript = (packageJSON.scripts || {})['vercel-build'] || 'npm run build';
      const buildAnswers = await inquirer.prompt([
        {
          type: 'text',
          name: 'buildScript',
          message: 'What is the build command?',
          default: buildScript,
        }
      ]);
      packageJSON.scripts = packageJSON.scripts || {};
      packageJSON.scripts['vercel-build']=buildAnswers.buildScript;
      fs.writeFileSync(packageJSONPath,JSON.stringify(packageJSON,null,2),'utf8');
    } catch (error) {
      console.error('package.json Does not exist!');
      process.exit(1);
    }
  }

  baseConfig.builds[0].config.distDir = answers.directory;
  //console.log(baseConfig.builds[0].config.distDir);

  return {
    ...config,
    ...baseConfig,
  };
}

module.exports = fef;
