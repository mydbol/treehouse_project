// problem : we need a simple way to gwt all the badge earned by a user
// we will use node.js to connect to the treehoue api and get a user profile info to print out.
var profile=require('./profile.js')
var username='kevinobrien2';
// Connect to the api url 
profile.get(username);