function route(handle, pathname){

    if(typeof handle[pathname] === "function"){
        return handle[pathname]();
    }else{
        console.log("NO FUNCTION!!!!!!!!!!!!!!!!  X!");
        return "404 Not found";
    }
}

exports.route = route;