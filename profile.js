var https=require("https");


	// Print the data

var printError=function(error){
		console.error(error.message);
	
}
// Read the data 
var printMessage=function(userName,badgeCount,Points){
	var message=userName+' has '+badgeCount+'  badge(s) and '+Points+' points in Javascript!';
	console.log(message);
}

function get(username){
	var request=https.get('https://teamtreehouse.com/'+username+'.json',function(response){
		console.log(response.statusCode);
		var body=''
		response.on('data',function(chunk){
			
			body+=chunk;
		});
		response.on('end',function(){
			if(response.statusCode === 200){
					try{
							// Parse the data 
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
}
module.exports.get = get;

	
	
