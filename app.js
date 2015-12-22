// problem : we need a simple way to gwt all the badge earned by a user
// we will use node.js to connect to the treehoue api and get a user profile info to print out.

var https=require("https");
var username='kevinobrien2';
// Connect to the api url 

var printError=function(error){
		console.error(error.message);
	
}
var request=https.get('https://teamtreehouse.com/'+username+'.json',function(response){
	console.log(response.statusCode);
	var body=''
	response.on('data',function(chunk){
		
		body+=chunk;
	});
	response.on('end',function(){
		if(response.statusCode === 200){
				try{
					var profile=JSON.parse(body);
					printMessage(profile.profile_name,profile.badges.length,profile.points.JavaScript);
				}catch(error){
					//parse error
					printError(error); 
				}
				
		}else{
			printError({message:"There was a problem with your request for the "+username+" profile."}); // send a custom error message
		}
	});
})


request.on('error',printError);

var printMessage=function(userName,badgeCount,Points){
	var message=userName+' has '+badgeCount+'  badge(s) and '+Points+' points in Javascript!';
	console.log(message);
// Read the data 
// Parse the data 
// Print the data
}
