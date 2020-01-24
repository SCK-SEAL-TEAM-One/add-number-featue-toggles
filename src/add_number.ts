export function addArabicNumber(numbers:string[]):number{
    var sum :number = 0;
    for(let n of numbers){
        sum += parseInt(n)
    }
    return sum
}

export default function addNumberRoman(numbers: number[]) : number {
    var sum = 0
    const mapNumber = {
        "I":1,
        "II":2,
        "III":3,
        "IV":4,
        "V":5,
        "VI":6,
        "VII":7,
        "VIII":8,
        "IX":9,
        "X":10
    }
    numbers.forEach(number => console.log(number))
    return 4
}
