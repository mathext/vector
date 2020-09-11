export default class Vector {
  // write test for class
  public constructor(x: number = 0, y: number = 0, z: number = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  // Private fields
  private _x: number;
  private _y: number;
  private _z: number;

  // Public properties
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }
  public get z(): number {
    return this._z;
  }

  // Public methods
  public add(vector: Vector): Vector {
    return new Vector(this._x + vector.x, this._y + vector.y, this._z + vector.z);
  }
  public divide(scalar: number): Vector {
    return new Vector(this._x / scalar, this._y / scalar, this._z / scalar);
  }
  public multiply(scalar: number): Vector {
    return new Vector(this._x * scalar, this._y * scalar, this._z * scalar);
  }
  public subtract(vector: Vector): Vector {
    return new Vector(this._x - vector.x, this._y - vector.y, this._z - vector.z);
  }
  public to2D(): number[] {
    return [this._x, this._y];
  }
  public to3D(): number[] {
    return [this._x, this._y, this._z];
  }
}
