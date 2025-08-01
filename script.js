function stringChop(str, size) {
const result = [];
	
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }
	
  let fnal=JSON.stringify(result);
	return(fnal)
}

// Do not change the code below
 const str = prompt("Enter String.");
 const size = prompt("Enter Chunk Size.");
 alert(stringChop(str, size));

