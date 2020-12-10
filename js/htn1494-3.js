//  Hung Nguyen
//  1001721494
//  Oct/13/2020

// a little past 12 but any extra credit given would be greatly appreciated

//Hard code the inputtable from 1 to 10;
inputtable = Array(10).fill().map((_,i) => i + 1 );
console.log("QUESTION 1 inputtable");
console.log(inputtable);

// use map function to iterate through each element and times 5.
fiveTable = inputtable.map(x=>x*5);
console.log("QUESTION 2a fiveTable");
console.log(fiveTable);
// use map function to iterate through each element and times 13.
thirteenTable = inputtable.map(x=>x*13);
console.log("QUESTION 2b thirteenTable");
console.log(thirteenTable);
// use map function to iterate through each element and times itself.
squaresTable = inputtable.map(x=>x*x);
console.log("QUESTION 2c squaresTable");
console.log(squaresTable);
//Create an array of 100 without hard coding. map to iterate and the _ is the variable holder for each increment.
// i + 1 because i needed it to start the array from 1 not 0

random = Array(100).fill().map((_,i) => i + 1 );
//Make the function odd to return the number that is devisible by 5 whole but not 10
function odd(x)
{
  if(x%5 == 0 && !(x%10 == 0) ) return x;
}
// call the random array then filter it with the function odd to get the number we need
console.log("QUESTION 3 odd mult of 5");
result = random.filter(odd)
console.log(result);

// make the function even to filter all the even number
function even(x)
{
  if(x%7==0 && (x%2 == 0)) return x;
}
// iterate through the array filtered then * 7 then sum it up
sum = random.filter(even).reduce((_, value) => _ + value);
console.log("QUESTION 4 sum");
console.log(sum);
//break down the function with 2 parameter to just 1 each.
function cylinder_volumn(r)
{
  let volumn = 0.0;
  return function(h)
  {
    volumn = 3.14*r*r*h;
    return  volumn;
  }

}
console.log("QUESTION 5 currying");
cy1 = cylinder_volumn(5);
console.log(cy1(10));

makeTag = function(beginTag, endTag)
{
    return function(textcontent)
    {
	   return beginTag +textcontent +endTag;
   }
}

console.log("QUESTION 6 html");
// im going from the inner content out like th td first then tr and table last
// make the th tag
th_tag    = makeTag("\t\t<th>","</th>\n");
//  use the th tag to wrap around firstname <th> COURSE Name </th>
firstname = th_tag("Course Name");
// use the th tag to wrap around last name <th> COURSE NUMBER </th>
lastname  = th_tag("Course Number");
//use the tg tag to wrap around age     <th> YEAR </th>
age       = th_tag("Year");
// make the tag tr
tr_tag    = makeTag("\t<tr>\n","\t</tr>\n");
//wrap the last three firstname lastname and age with the tr tag
header    = tr_tag(firstname+lastname+age);
//make the first content on row 1 with tag td
td_tag    = makeTag("\t\t<td>","</td>\n");
//  use the th tag to wrap around HUNG <td>PROGRAMMING LANGUAGE</td>
f_name    = td_tag("Programming Language");
//  use the th tag to wrap around NGUYEN <td> 3302 </td>
l_name    = td_tag("3302");
//  use the th tag to wrap around NGUYEN <td> 2020 </td>
a_num     = td_tag("2020");
// wrap all the content1 with the tr tag that was previously declare
content1  = tr_tag(f_name + l_name + a_num);

// make the table tag
table_tag = makeTag("<table>\n","</table>\n");
//wrap the table tag with the tr and td tag inside
table     = table_tag(header+content1);
console.log(table);
