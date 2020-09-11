import Vector from '../src';

describe('Given 2 vectors, a and b, initialized without a z component', () => {
    const ax = 10, ay = 20, az = 30;
    const bx = 40, by = 50, bz = 60;
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

    describe('When a vector is divided by a scalar', () => {
        const scalar = 10;
        const c = a.divide(scalar);

        test('Then the resulting vector should be a division of corresponding elements by the scalar', () => {
            expect(c.x).toEqual(a.x / scalar);
            expect(c.y).toEqual(a.y / scalar);
            expect(c.z).toEqual(a.z / scalar);
        });
        test('And vector a should be unchanged', () => {
            expect(a.x).toEqual(ax);
            expect(a.y).toEqual(ay);
        });
    });

    describe('When a vector is multiplied by a scalar', () => {
        const scalar = 10;
        const c = a.multiply(scalar);

        test('Then the resulting vector should be a multiplication of corresponding elements by the scalar', () => {
            expect(c.x).toEqual(a.x * scalar);
            expect(c.y).toEqual(a.y * scalar);
            expect(c.z).toEqual(a.z * scalar);
        });
        test('And vector a should be unchanged', () => {
            expect(a.x).toEqual(ax);
            expect(a.y).toEqual(ay);
        });
    });

    describe('When a vector is subtracted from another vector', () => {
        const c = b.subtract(a);

        test('Then the resulting vector should be a difference of corresponding elements', () => {
            expect(c.x).toEqual(b.x - a.x);
            expect(c.y).toEqual(b.y - a.y);
            expect(c.z).toEqual(b.z - a.z);
        });
        test('And vectors a and b should be unchanged', () => {
            expect(a.x).toEqual(ax);
            expect(a.y).toEqual(ay);
            expect(b.x).toEqual(bx);
            expect(b.y).toEqual(by);
        });
    });

    describe('When the vectors are parsed to 2D', () => {
        const a2D = a.to2D();
        const b2D = b.to2D();

        test('Then the resulting array should be a 1x2 array', () => {
            expect(a2D.length).toEqual(2);
            expect(b2D.length).toEqual(2);

            expect(a2D).toEqual([a.x, a.y]);
            expect(b2D).toEqual([b.x, b.y]);
        });
    });

    describe('When the vectors are parsed to 3D', () => {
        const a3D = a.to3D();
        const b3D = b.to3D();

        test('Then the resulting array should be a 1x2 array', () => {
            expect(a3D.length).toEqual(3);
            expect(b3D.length).toEqual(3);

            expect(a3D).toEqual([a.x, a.y, a.z]);
            expect(b3D).toEqual([b.x, b.y, b.z]);
        });
    });
});