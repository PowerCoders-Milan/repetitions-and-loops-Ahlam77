var array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count_string = 0;
var count_num = 0;
for( var i =0; i < array1.length; i++){
    if(typeof array1[i] === "string"){
        count_string++;
    }
    else if (typeof array1[i] === "number"){
        count_num++;
        

    }
    
}
console.log( " letter " + count_string + " numbers " +  count_num);
