const removeFromArray = function(theArray, remove, rest) {
    if (arguments.length === 2){
        if  (theArray.indexOf(remove) === -1){
            return theArray;
        }else{//Finds the index where remove lies.
            let removeIndex = theArray.indexOf(remove);
            //Splices that one item out of the array.
            theArray.splice(removeIndex, 1);
            return theArray;
        }
    }
    else
    {   
        //Finds the index where remove lies.
        let removeIndex = theArray.indexOf(remove);
        //Splices that one item out of the array.
        theArray.splice(removeIndex, 1);
        for (let i = 0; (i+1) < arguments.length; i++){
            let newIndex = theArray.indexOf(rest[i]);
            theArray.splice(newIndex, 1);
        }
        return theArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
