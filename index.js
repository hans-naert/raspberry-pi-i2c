const i2c = require('i2c-bus');

const TC74_ADDR = 0x48;
const TEMP_REG = 0x00;
(async () => {
    try {
        let i2c1 = await i2c.openPromisified(1);
        let i2c1_byte = await i2c1.readByte(TC74_ADDR, TEMP_REG);
        let rawData = await i2c1_byte;
        console.log(rawData);
        i2c1.close()
    }
    catch (error) { console.log(error) }
})();
