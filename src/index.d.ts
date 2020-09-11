export declare class Vector {
  public constructor(x: number, y: number, z: number);
  public add(vector: Vector): Vector;
  public divide(scalar: number): Vector;
  public multiply(scalar: number): Vector;
  public subtract(vector: Vector): Vector;
  public to2D(): number[];
  public to3D(): number[];
  public get x(): number;
  public get y(): number;
  public get z(): number;
}
