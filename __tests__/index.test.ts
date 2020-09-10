import Vector from '../src';

describe('Given 2 vectors, a and b initialized without a z component', () => {
    const ax = 1, ay = 2, az = 3;
    const bx = 4, by = 5, bz = 6;
    const a = new Vector(ax, ay);
    const b = new Vector(bx, by);

    test('Then their z components should equal zero', () => {
        expect(a.z).toEqual(0);
        expect(b.z).toEqual(0);
    });

    describe('When 2 vectors are added together', () => {
        const c = a.add(b);

        test('Then the resulting vector should be a sum of corresponding elements', () => {
            expect(c.x).toEqual(a.x + b.x);
            expect(c.y).toEqual(a.y + b.y);
            expect(c.z).toEqual(a.z + b.z);
        });
        test('And vectors a and b should be unchanged', () => {
            expect(a.x).toEqual(ax);
            expect(a.y).toEqual(ay);
            expect(b.x).toEqual(bx);
            expect(b.y).toEqual(by);
        });
    });
});