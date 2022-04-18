
const createHundredDivs = jest.fn(() => {
    let arr = [];
    let letters = 'ABCDEFGHIJ';
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < 10; j++) {
            arr.push(`${letters[i]}${j+1}`);
        }
    }
    return arr;
});

test('The third name would be A3', () => {
    expect(createHundredDivs()[2]).toBe('A3');
});

test('The 11th one would be B1', () => {
    expect(createHundredDivs()[10]).toBe('B1');
});