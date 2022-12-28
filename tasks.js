
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

  else if(text==="remove\n"){
    remove();
      
  }
 else if(text==="remove 1\n"){
  remove1();
 }
 else if(text==="remove 2\n"){
  remove2();
 }
  else{
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
  const help = ["hello", "quit", "exit"];
  help.forEach(element => {
    if (element === "quit") {
      console.log("- To quit the app : ");
      console.log(element);
    }
    else if (element === "hello") {
      console.log("- Says hello name!: ");
      console.log(element + " name");
    }
    else if (element === "exit") {
      console.log("- To exit the app:");
      console.log(element);
    }

  
  });
}


//list
const tasks = [
  "Go to the university",
  "Finish assignments",
  "Sleep"
]

//List function
function list(){
  for(let i=0; i<tasks.length; i++)
    console.log((i+1)+"- "+tasks[i]);
}

//Add function 
function add(task) {
  if (task != "")
    tasks.push(task);
  else {
    console.log("error");
  }
} 

// remove function
function remove(task){
  tasks.pop(task);
} 

function remove1(task){
  tasks.shift(task);
}

function remove2(task){
  tasks.splice(1,1);
}


// The following line starts the application
startApp("Maya Atiah")
