var arg=process.argv;
var converter=require('convert-units');
if(arg.length!=6||isNaN(arg[2])||arg.indexOf('to')==-1||converter().possibilities().indexOf(`${arg[3]}`)==-1||converter().possibilities().indexOf(`${arg[5]}`)==-1||converter().from(`${arg[3]}`).possibilities().indexOf(`${arg[5]}`)==-1)
    failure();
console.log(`${arg[2]} ${arg[3]} are `+converter(`${arg[2]}`).from(`${arg[3]}`).to(`${arg[5]}`)+` ${arg[5]}`);
function failure(){
    console.log("Invalid parameters");
    process.exit(-1);
}