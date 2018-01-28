
function route(handle, pathname, response, request){
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response, request);
    }else{
        return "404 FUCK U!!";
    }
}

exports.route = route;