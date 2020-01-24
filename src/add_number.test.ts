import {addArabicNumber} from "./add_number";

describe('Add number arabic', () => {
    it('Input 1+1+2 should be 4',()=>{
        const expected = 4
        const number = ["1","1","2"]

        const actual = addArabicNumber(number)

        expect(actual).toEqual(expected)
    })

    it('Input 5+8 should be 13',()=>{
        const expected = 13
        const number = ["5","8"]

        const actual = addArabicNumber(number)

        expect(actual).toEqual(expected)
    })
});
