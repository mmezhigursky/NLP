import { urlChecker } from "../validator.js";

async function textAnalysator(url){
  
  const validation = urlChecker(url);

  if (validation===true){
    console.log('work', url);
    return Promise.resolve('preventative medicine');
    

  } 
  else{
    return Promise.resolve('error');
  }

}

exports.textAnalysator= textAnalysator ;
