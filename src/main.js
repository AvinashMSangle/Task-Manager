import "./index.css"
import { titleCase } from "./utils";

const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]")

const tasks =[];

formEl.addEventListener("submit",(e) =>{
    e.preventDefault();
    if(!inputEl.value)return; 
    
   
const newTask ={
    text:titleCase(inputEl.value),
    isCompleted: false,
    id:tasks.length,
    }
    tasks.unshift(newTask);
    
    console.log(tasks);
    inputEl.value="";
   });

const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();
