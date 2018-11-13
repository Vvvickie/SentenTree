var fs = require("fs")
var data = fs.readFileSync('SentenTree/demo/data/kindle.tsv');


data = data.toString().split("\n")

for(var i = 0; i<data.length;i++){
    data[i] = i + " " + data[i]
}

data = data.join("\n")

fs.writeFile('SentenTree/demo/data/kindle2.tsv', data,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
});