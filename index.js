

function takeANumber(line,name){
  
  // welcome message should include the new person's position in line, such as "Welcome, Ada. You are number 1 in line."
 
     
    line.push(name);
    
 return "Welcome, " + name +  ". You are number " + line.length + " in line.";
  
}


function nowServing(katzDeliLine){



  if  (katzDeliLine.length === 0){
   
     return "There is nobody waiting to be served!";
  
  }
 
  else {
    
    return "Currently serving " + katzDeliLine.shift() + ".";

  }  
   
}


function currentLine(katzDeliLine){

 var line = [] ;
 
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(` `+[i+1]+`. ` + katzDeliLine[i]);
   
    } 
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
   
    } 
    else 
    return (`The line is currently:` + line);
  
}



