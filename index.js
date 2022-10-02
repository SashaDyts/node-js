// File System / fs
const fs = require('fs/promises');

const fileOperations = async ({ action, filepath, data }) => {
  switch (action) {
    case 'read':
      const text = await fs.readFile(filepath, 'utf-8');
      //   const result = await fs.readFile(filepath);
      //   const text = result.toString();
      console.log(text);
      break;

    case 'add':
      await fs.appendFile(filepath, data);
      break;
    case 'replace':
      fs.writeFile(filepath, data);
      break;

    default:
      console.log('Unknown action');
  }
};

fileOperations({
  action: 'replace',
  filepath: './files/file3.txt',
  data: 'Great southern trendkill',
});

// fileOperations({ action: 'read', filepath: './files/file.txt' });

// fileOperations({
//   action: 'add',
//   filepath: './files/file.txt',
//   data: '\nCowboys from hell',
// });

// fileOperations({
//   action: 'replace',
//   filepath: './files/file.txt',
//   data: 'lox',
// });

// -----

// fs.readFile('./files/file.txt')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// fs.readFile('./files/file.txt', (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// -------------------------------------------------------------

// const users = require('./users');

// console.log(users);
