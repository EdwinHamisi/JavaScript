const rate = 118.40;
   const rate1 = 120.39;
     var userInput = prompt("1:Convertion Rate");
     var num = userInput
     switch (num){
     case '1':
      var convert = prompt("Enter KSH to convert to USD");
      var con = convert * 1 / rate;
      con = con.toFixed(2);
      alert(""+ con);
      var convert = prompt("Enter USD to convert to KSH");
      var con = convert * 118.40 /1;
      con = con.toFixed(2);
      alert(""+ con);
      var convert = prompt("Enter KSH to convert to EURO");
      var con = convert * 1 / rate1;
      con = con.toFixed(2);
      alert(""+ con);
      var convert = prompt("Enter EURO to convert to KSH");
      var con = convert * 120.39 /1;
      con = con.toFixed(2);
      alert("" + con);
      break;  
     default:
      alert("welcome again")
      break;
      }