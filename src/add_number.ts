import {Map} from "typescript";

export function addArabicNumber(numbers:string[]):number{
    var sum :number = 0;
    for(let n of numbers){
        sum += parseInt(n)
    }
    return sum
}

export function addNumberRoman(numbers: string[]) : number {
    let sum = 0;
    const mapNumber = new Map()
    mapNumber.set("I",1)
    mapNumber.set("II",2)
    mapNumber.set("III",3)
    mapNumber.set("IV",4)
    mapNumber.set("V",5)
    mapNumber.set("VI",6)
    mapNumber.set("VII",7)
    mapNumber.set("VIII",8)
    mapNumber.set("IX",9)
    mapNumber.set("X",10)
    numbers.forEach(number => sum += mapNumber.get(number))
    return sum
}
