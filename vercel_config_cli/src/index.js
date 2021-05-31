const fs=require('fs');
const path=require('path');
const inquirer=require('inquirer');


const existConfig=fs.existsSync('vercel.json');
const questions=[];

// current project directory
//console.log(process.cwd());

function buildConfig(){
  inquirer.prompt([
    {

      type:'text',
      name:'name',
      message:'What is the name of the project?',
      default:path.basename(process.cwd())
    },
    {
      type:'list',
      choices:['node-express','static','react','vue','static-build','lambda'],
      name:'type',
      message:'What type of project?',
    }
  ])
  .then(answers=>{
    console.log(answers);
  });
}

if(existConfig){
  inquirer.prompt({

      type:'confirm',
      name:'overwrite',
      message:'vercel.json already exists! Would you like to overwrite it?',
      default:false

  })
  .then(answers=>{

    if(answers.overwrite){
      buildConfig();
    }else{

      console.log(`Goodbye...`);
    }
  });
}else{
  buildConfig();
}
