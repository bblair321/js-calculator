const { addition, subtraction, multiplication, division, historyLog, result } = require('../calculator');

describe('Math functions tests', () => {
    beforeEach(() => {
        result.length = 0;
    });

    test('addition adds two numbers correctly', () => {
        addition(2, 3);
        expect(result).toEqual([5]);
    });

    test('subtraction subtracts two numbers correctly', () => {
        subtraction(5, 3);
        expect(result).toEqual([2]);
    });

    test('multiplication multiplies two numbers correctly', () => {
        multiplication(3, 4);
        expect(result).toEqual([12]);
    });

    test('division divides two numbers correctly', () => {
        division(8, 2);
        expect(result).toEqual([4]);
    });

    test('division by zero should push Infinity', () => {
        division(5, 0);
        expect(result).toEqual([Infinity]);
    });

    test('multiple operations work sequentially', () => {
        addition(2, 3);
        subtraction(5, 2);
        multiplication(3, 4);
        division(8, 2);

        expect(result).toEqual([5, 3, 12, 4]);
    });

    test('historyLog should log the history of results', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        addition(2, 3);
        subtraction(5, 3);

        historyLog();

        expect(consoleSpy).toHaveBeenCalledWith('History of results:', '5,2');

        consoleSpy.mockRestore();
    });
});
