export default class Vector {
  // Constructors
  public constructor(x: number = 0, y: number = 0, z: number = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  // Private fields
  private static _unitVectorX: Vector = new Vector(1, 0, 0);
  private static _unitVectorY: Vector = new Vector(0, 1, 0);
  private static _unitVectorZ: Vector = new Vector(0, 0, 1);
  private _x: number;
  private _y: number;
  private _z: number;

  // Public properties
  public static get unitVectorX(): Vector {
    return Vector._unitVectorX;
  }
  public static get unitVectorY(): Vector {
    return Vector._unitVectorY;
  }
  public static get unitVectorZ(): Vector {
    return Vector._unitVectorZ;
  }
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
