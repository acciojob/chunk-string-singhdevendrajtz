function stringChop(str, size) {
  // your code here
let  n=size;
let n_cuur=n;
let init=0;
let strf="[";
while(true)
{
    if(n_cuur>str.length)
    {
        strf+='"'
        strf+=(str.substring(init));
        strf+='"]'
        break;
    }
    else{
 strf+='"'
strf+=(str.substring(init,n_cuur));
strf+='", '
		str=(str.substring(init,n_cuur);

    }
}
str=strf;
return(str);
	
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size."); 
alert(stringChop(str, size));
