# Recall Wav Splicer
File Parser for simplification of wav splice requests

## Problem
We have some automation for this process but there are still several manual steps that L2 must take to prepare a fully accurate text file for the automated script.

## How it works
This node app adds automation on the missing parts by taking two parameters and doing the following with them:
- A text file
  - The text file containing the original wav strings to parse
  - Text file must have no spaces and be formatted in the same context as the usual request
  - File must be in the input folder at `input/input.txt` a blank file is provided here
- A string
  - The first string in the sequence of parse request

Script will:
- Parse each line in text file:
  - Replace `_G => _G.wav,`
  - Manipulate passed in string to extract file naming and iteration logic from it
  - concat, .wav to each named file in the pattern
  - Add the new result wav string to make a fully formatted file
  - Store it as, `output/user-accountID-wavs.txt`

## Stack
- Node JS
- Perhaps make an Angular Form as opposed to using CLI args?

## Steps to use
- Initalize/Update/Install NodeJS here: https://nodejs.org/en/ (*This was built on nodev10.16.2 & npm v.6.4.1*)
- Clone repo
- Open project in whatever text-editor your most comfortable (atom, vim, notepad++, etc.)
- Modify `input/input.txt`- a sample input file with records from request, ensure no unneeded spaces or empty lines are added
  - Note: Blank lines at end of file will be ignored.
- Adjust `package.json` transmit method's second argument with the new wav name from request
- Adjust `index.js` with your firstname, it'll be what the file is named as
- From terminal cd into `wav_splicer` directory and run `npm run transmit`, a new file should appear in the `/output` directory of the app
- Review it and be sure it's correct then update `package.json` transmit-clone with the folder path on ssh to scp to, this can be found in the official documentation, also update the filename for the new file you've generated
- Run `npm run transmit-clone` and authenticate your credentials to move the new file over
- SSH in and check it with cat or vi in bash, once verified, it's ready for the next steps covered in the documentation of the second script

## Warnings
- If a wav file already exists in `output/` the script will overwrite whatever is there
- SCP natively overwrites whatever is remote
