import { } from '../css/style.scss';
import { Display } from "./function";

// const { Display } = require("./function");

let Str = new Display();
let msg = Str.message();
document.querySelector('.jscode').addEventListener('click',() => {
    document.querySelector('.message').textContent = msg;
})


