const i2c=require('i2c-bus');

const TC74_ADDR=0x48;
const TEMP_REG=0x00;

i2c.openPromisified(1).
then(i2c1=>i2c1.readByte(TC74_ADDR,TEMP_REG).
then(rawData=>console.log(rawData)).
then(_=>i2c1.close())
).catch(console.log);
