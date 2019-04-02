let call={
    caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
        method.call(object, nameArg, ageArg, tShirtSizeArg)
        },
      applier: function (object, method, argumentsArr) {
        method.apply(object, argumentsArr);
    }
}//fin call

module.exports=call;