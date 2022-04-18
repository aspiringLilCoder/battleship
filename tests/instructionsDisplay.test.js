const instructionDisplay = jest.fn((currentShip) => {
        const shipOrder = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
        return shipOrder[shipOrder.indexOf(currentShip) + 1];
    }
);

test('After Carrier would be Battleship', () => {
    expect(instructionDisplay('Carrier')).toBe('Battleship');
});

test('After Submarine would be Patrol Boat', () => {
    expect(instructionDisplay("Submarine")).toBe('Patrol Boat');
});