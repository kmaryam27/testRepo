// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  
  app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'));});//'../public/html/todotable.html'

  // If no matching route is found default to home
  app.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'));});
};
