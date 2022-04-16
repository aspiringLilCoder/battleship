

const addEventListenerMock = jest.fn((axis) => {
    if (axis == 'horizontal') {
        return 'vertical';
    } else {
        return 'horizontal';
    }
});

test('horizontal will change to vertical', () => {
    expect(addEventListenerMock('horizontal')).toBe('vertical');
});

test('vertical will change to horizontal', () => {
    expect(addEventListenerMock('vertical')).toBe('horizontal');
});