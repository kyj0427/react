//9_module.js

let base = 100;
const getBase = ()=> base;

const add = x => base + x;
const mutiply = x => base * x;

export {add,mutiply};
export default getBase;


/*
var base = 100;
function getBase(){
    return base;
}

function add(x){
    return base + x;
}


*/