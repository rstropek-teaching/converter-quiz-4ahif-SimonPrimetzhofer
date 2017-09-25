var converter=require('convert-units');
if(process.argv.length!=6||isNaN(process.argv[2])||process.argv.indexOf('to')==-1||converter().possibilities().indexOf(`${process.argv[3]}`)==-1||converter().possibilities().indexOf(`${process.argv[5]}`)==-1||converter().from(`${process.argv[3]}`).possibilities().indexOf(`${process.argv[5]}`)==-1)
    console.log("Invalid parameters");
else console.log(`${process.argv[2]} ${process.argv[3]} are `+converter(`${process.argv[2]}`).from(`${process.argv[3]}`).to(`${process.argv[5]}`)+` ${process.argv[5]}`);