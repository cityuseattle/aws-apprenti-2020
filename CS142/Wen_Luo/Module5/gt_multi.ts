// Multiple Parameters Passing 
// only used argument type is V, the third argument will be returned 

function fun<T,U,V>(args1:T, args2:U, args3:V): V {
    return args3;
}

console.log(fun(1,2,3));
