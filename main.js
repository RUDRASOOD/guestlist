
var sn=[];
function submit()
    {
var ds=[];

for (var j =1; j <=4; j++)
{
    var student= document.getElementById("name1").value;
    sn.push(student);
}


console.log(sn);
var len = sn.length;
console.log(len);
document.getElementById("displayname").innerHTML=sn.toString();
    }
   