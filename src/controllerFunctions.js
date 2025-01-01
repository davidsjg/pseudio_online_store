export default function filterArray(array1, filter){

    let tempArr = [];
    array1.forEach((element)=>{
        if(element.category === filter){
            tempArr.push(element);
        }
    })
    return tempArr;
}