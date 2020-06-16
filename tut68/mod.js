console.log("This is mod");

function avg(arr){
    let sum = 0; 
    arr.forEach(element => {
        sum += element;        
    });
    return sum/arr.length;
}
module.exports={
    av: avg,
    name: "eshan",
    repo: "github/eshanvohra"

}