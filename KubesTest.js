
function KubesTestFunction()
{
    alert('writing');
    const fs = require('fs');
    fs.writeFile("NewFile", "Derp", function (err) { console.log(err); });
}

window.onload = KubesTestFunction;