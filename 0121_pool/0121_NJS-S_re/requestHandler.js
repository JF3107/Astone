/** 
 * 具体处理函数（对应router），全在这里[这里就是处理区]
 */
function start(){
    function sleep(ms){
        var slee_start = new Date().getTime();
        while(new Date().getTime() < slee_start + ms);
    }
    sleep(10000);
    return "now shift to SSSSTART!!"
}

function upload(){
    return "OK, this is uuuuuPLOADDD!!"
}

exports.start = start;
exports.upload = upload;