
var num=Math.ceil(Math.random()*100);  
console.log(num); 

function check()
{
    var guess=document.getElementById('guess_value').value;
    var message;
    if(guess==num)
    {
        message="YOU HAVE WON !!"
    }
    else if(guess<num+10&&guess>num)
    {
        message="just little low";
    }
    else if(guess>num-10&&guess<num)
    {
        message="just little high";
    }
    else if(guess<num+50&&guess>num)
    {
        message="nice guess but,go low";
    }
    else if(guess>num-50&&guess<num)
    {
        message="nice guess but, go high";
    }
    else{
        message="hmm,to far";
    }
    document.getElementById("message").innerText=message;
}
