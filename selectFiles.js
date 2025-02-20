const fs = require('fs');
const path = require('path');

// Define the directory path to select files from
const directoryPath = path.join(__dirname, 'your-directory-name');

// Function to get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  // Read the contents of the directory
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  // Iterate over each file/directory in the current directory
  files.forEach(function(file) {
    // If the current item is a directory, recursively get its files
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      // If the current item is a file, add it to the array of files
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// Get all files in the specified directory and log them to the console
const files = getAllFiles(directoryPath);
console.log(files);
