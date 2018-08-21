
//function myFunction() {
//    var x = document.getElementById("goalName").elements[0].value;
//    document.getElementById("demo").innerHTML = x;
//}
var keys = ["Goal","First Goal","First Time","Second Goal","Second Time","Third Goal","Third Time","Fourth Goal","Fourth Time"];

var obj = [{}];

function myFunction() {
    var x = document.getElementById("myform");
    //var text = "";
    //var templist = {};
    var i;
    for (i = 0; i < x.length; i++) {
        var tempKey = keys[i];
        var tempValue = x.elements[i].value;
        obj.push({tempKey: tempValue});
        console.log(keys[i]);
        console.log(x.elements[i].value);
    }
    document.getElementById("demo").innerHTML = obj;
    //obj.push(templist);
    var formEntry = JSON.stringify(obj);

    var fs = require('fs');
    fs.readFile('formentry.json', formEntry, (err) => {
        if (err) throw err;
        console.log('file has been saved!');
    });
    console.log(formentry);
    console.log('end of function');

};


//for i in range(len(list_of_answers)):
  //  json.dump(list_of_answers[i] ,file )
  //  file.write('\n')
//file.close()
