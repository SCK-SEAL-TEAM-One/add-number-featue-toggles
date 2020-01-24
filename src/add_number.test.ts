import {addArabicNumber, addNumberRoman} from "./add_number";

describe('Add number arabic', () => {
    it('Input 1+1+2 should be 4',()=>{
        const expected = 4
        const numbers = ["1","1","2"]

        const actual = addArabicNumber(numbers)

        expect(actual).toEqual(expected)
    })

    it('Input 5+8 should be 13',()=>{
        const expected = 13
        const numbers = ["5","8"]

        const actual = addArabicNumber(numbers)

        expect(actual).toEqual(expected)
    })
});

describe('Add number roman', () => {
    it('Input I+I+II should be 4',()=>{
        const expected = 4
        const numbers = ["I","I","II"]

        const actual = addNumberRoman(numbers)

        expect(actual).toEqual(expected)
    })

    it('Input V+VIII should be 13',()=>{
        const expected = 13
        const numbers = ["V","VIII"]

        const actual = addNumberRoman(numbers)

        expect(actual).toEqual(expected)
    })
});
