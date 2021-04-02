function doGet(e) { 

var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1p5fTWsw4DIEP-7kGJzHJWlfx7SILuygQAWLaHPy480w/edit#gid=0");
var sheet = ss.getSheetByName("Feuille 1");


  
  addUser(e,sheet);
}

function doPost(e) { 
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1p5fTWsw4DIEP-7kGJzHJWlfx7SILuygQAWLaHPy480w/edit#gid=0");
  var sheet = ss.getSheetByName("Feuille 1"); 
  
  addUser(e,sheet);
}


function addUser(e,sheet) {
  var nom = e.parameter.nom ; 
  var message = e.parameter.message ;
  var numeros = e.parameter.numeros ;

  sheet.appendRow([nom,message,numeros]);
}
