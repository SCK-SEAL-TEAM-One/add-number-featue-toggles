export default function addArabicNumber(numbers:string[]):number{
    var sum :number = 0;
    for(let n of numbers){
        sum += parseInt(n)
    }
    return sum
}