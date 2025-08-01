function stringChop(str, size) {
const result = []; 
	
  while(true)
  {
    if(size<str.length)
    {
      result.push(str.substring(0,size));
      str=str.substring(size);
    }
    else
    {
      result.push(str.substring(0));
      break;

    }
    
  }
//let pro=JSON.stringify(result);
return(result);
}

// Do not change the code below
 const str = prompt("Enter String.");
 const size = prompt("Enter Chunk Size.");
 alert(stringChop(str, size));


