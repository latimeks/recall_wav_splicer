/*
  Make script to do scp easily
  Improve comments
  Improve logging
  Make documentation
  Add buffer to prevent file concat, it should give an option then give a full overwrite
  Prevent duplicate scp?? How does scp handle copying  to the same file
*/

const fs = require('fs');
const cliArgs = process.argv.slice(2);
const inputFile = 'input/' + cliArgs[0];
const newWavName = cliArgs[1];
const user = 'user'; // Note, after cloning update this to whatever user must appear in file

let newWavNameArr = newWavName.split('_');
newWavNameArr[2] += ".wav";
let outputFile = 'output/' + user + "-" + newWavNameArr[0] + "-wavs.txt";
let outputData = "";
let outputCount = 0;
console.log(`Splicing ${newWavName} into ${inputFile} for account #: ${newWavNameArr[0]}`);
console.log(`Processing...`);
var fileData = fs.readFileSync(inputFile, 'utf-8').split(/\r?\n/).forEach(function(line){
  console.log(`Line from text file: ${line}`);
  if(line!=''){
    line = line.replace(/_G/g,'_G.wav');
    line += ("," + newWavNameArr.join('_') + "\n");
    newWavNameArr[1]++;
    outputData += line;
    outputCount ++;
  }
});

fs.appendFile(outputFile, outputData, (err) => {
  if(err)
    throw err;
  console.log(`New file: ${outputFile}, containing ${outputCount} total lines`);
});
