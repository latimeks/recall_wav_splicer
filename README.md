# wav_splice_initlizer
File Parser for wav files requests

## Goal
Generate a simple Node App that will take two parameters:
- A text file
  - The text file containing the original wav strings to parse
- A string
  - The new wav file that will be concatenated

## Requirements
- Parse each line in text file:
  - Remove any commas, replace _G => _G.wav,
- Manipulate passed in string
  - concat, .wav to the string
  - Extract middle number (706389_numToExtract_REC.wav) and use it as incrementer
- Iterate file again and  add the passed in string to make a  full file
- Store it as, Desktop/Wav_spliced_files/user-wavs-theLocation.txt

## Stack
- Node JS
- Perhaps an Angular form?  
