
import Language from '../db/models/languages';


 


async function init(){
    const isDev = true;

    await Language.sync({alter:isDev})
   
    
}

const dbInit =() => {
    init();
}

export default dbInit;