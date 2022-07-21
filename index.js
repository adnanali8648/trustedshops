var prompt = require("prompt-sync")({
  history: require("prompt-sync-history")(), //open history file
});

const name = prompt("whats your name?");

console.log(`Good Morning ${name}`);
prompt.history.save();
