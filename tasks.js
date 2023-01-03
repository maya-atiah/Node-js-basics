
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if (text === 'help\n') {
    help();

  }
  else if (text.slice(0, 5) === "hello") {
    hello(text.replace(/ /g, "").slice(5).trim());
  }

  else if (text === 'list\n') {
    list();
  }
  else if(text.split(" ")[0].replace("\n","") === "add"){
    add(text.replace("\n","").split(" ").slice(1));
  }
  else if (text.slice(0, 6) === "remove")
  remove(text.replace(/ /g, "").slice(6).trim());
//   else if(text==="remove\n"){
//     remove();
      
//   }
//  else if(text==="remove 1\n"){
//   remove1();
//  }
//  else if(text==="remove 2\n"){
//   remove2();
//  }
  else if (text.slice(0, 4) === "edit")  {
    edit(text.replace(/ /g, "").slice(4).trim());
  }
  else if(text.slice(0,5)==="check"){
    check(text.replace(/ /g,"").slice(5).trim());

  }
  else if (text.slice(0,7) === "uncheck"){
    uncheck(text.replace(/ /g,"").slice(7).trim());
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}

function hello(name) {
  var newname = "";
  if (name != "") {
    newname = " ";
    newname += name;
  }
  console.log("hello" + newname + "!");


}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help function
 */
function help() {
  console.log("Options:\n 1-hello name\t\t says hello name!\n 2-quit\t\t\t to exit\n 3-exit\t\t\t to exit\n 4-list\t\t\t lists all tasks\n 5-add x\t\t adds x to the list\n 6-remove\t\t removes last task in the list\n 7-remove 1\t\t removes list number 1 from the list\n 8-remove 2\t\t removes list number 2 from the list"
  )
}


//list with done property
const tasks = [
  {
    task: "Go to the university",
    done: true
  },
  {
    task: "Finish assignments",
    done: false
  },
  {
    task: "Sleep",
    done: true
  }
]

//List function
function list(){
  for(let i=0; i<tasks.length; i++)
    if(tasks[i].done===false){
      console.log((i+1)+"- "+tasks[i].task+"[ ]")
    }
    else{
      console.log((i+1)+"- "+tasks[i].task+"[✓]")
    }

}

//Add function 
function add(task) {
  if (task != "")
    tasks.push({
      task: task,
      done:false
    });
  else {
    console.log("error");
  }
} 

// remove function


// function remove(task){
//   tasks.pop(task);
// } 

// function remove1(task){
//   tasks.shift(task);
// }

// function remove2(task){
//   tasks.splice(1,1);
// }
function remove(task) {
  if (task == "") tasks.pop(task);
  else {
    if (!Number.isInteger(parseInt(task))) {
      console.log("remove 'x'  x is not a NUMBER!!!");
    } else {
      tasks.splice(parseInt(task) - 1, 1);
    }
  }
}


// Edit function
function edit(task) {

  if (task == "" || parseInt(task.split(" "))>tasks.length)
    console.log("ERROR!");
  else if (Number.isInteger(parseInt(task.split(" ")))) {
    tasks[parseInt(task.split(" ")) - 1].task= task.substring(task.split(" ").length).trim();
    tasks[parseInt(task.split(" ")) - 1].done=false;
  }
  else
    tasks[tasks.length - 1].task = task;
    tasks[tasks.length - 1].done = false;
}

//check function
function check(task){
  if(task==""){
    console.log("ERROR!");}
  else if (Number.isInteger(parseInt(task.split(" ")))){
   
    tasks[parseInt(task.split(" ")) - 1].done=true;
  }
    
  }

  //uncheck function 
  function uncheck(task){
    if(task=="")
    console.log("ERROR!");
    else if (Number.isInteger(parseInt(task.split(" ")))){
      tasks[parseInt(task.split(" ")) - 1].done=false;
    }
  }

// The following line starts the application
startApp("Maya Atiah")
