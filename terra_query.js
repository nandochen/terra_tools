const { LCDClient } =  require('@terra-money/terra.js');
// connect to mainnet
const lcd = new LCDClient({
    URL: "https://lcd.terra.dev",
    chainID: "columbus-3"
  });
// set tx <- replace tx found from 
// https://atomscan.com/terra/accounts/terra1alpf6snw2d76kkwjv3dp4l7pcl6cn9uytq89zk 
// or
// https://atomscan.com/terra/
const tx = '1ABCA8C888B1E3DFB0645F847D8599B6CA9218CF653D5873C3EB21471829A9FF';
// call 
lcd.tx.txInfo(tx)
.then((d) => {
    const r = d.raw_log;
    const buff = Buffer.from(d.raw_log, 'utf8');
    console.log('/*raw_log*/');
    console.log(r);
    // console.log(buff);
    var str = '';
    for (var ii = 0; ii < buff.length; ii++) {
        str += buff[ii].toString(16) + ' ' ;
    };
    console.log('/*bytes*/');
    console.log(str);
});