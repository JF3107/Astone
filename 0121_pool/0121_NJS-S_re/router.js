/** router是分发，分发给requestHandler去处理。
 * route的作用就是配对pathname<==>handler
 * request>>提取pathname>>router>>requestHandler(对应函数)
 */
function route(handle, pathname){
    if(typeof handle[pathname] === "function"){
        return handle[pathname]();
    }else{
        return "404 not found[pathname not >> a fucntion!!]";
    }
}
exports.route = route;