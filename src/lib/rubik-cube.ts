export type Vector = [number, number, number];
export type Axis = "x" | "y" | "z";
export type CubeMove = { axis: Axis; layer: number; direction: 1 | -1 };
export type Cubie = {
  id: string;
  position: Vector;
  basis: [Vector, Vector, Vector];
  colors: string[];
};

export const scrambleMoves: CubeMove[] = [
  { axis: "z", layer: 1, direction: 1 },
  { axis: "x", layer: 1, direction: 1 },
  { axis: "y", layer: -1, direction: 1 },
  { axis: "z", layer: -1, direction: -1 },
  { axis: "x", layer: -1, direction: 1 },
  { axis: "y", layer: 1, direction: -1 },
];
export const solveMoves: CubeMove[] = scrambleMoves
  .slice()
  .reverse()
  .map<CubeMove>((move) => ({
    ...move,
    direction: move.direction === 1 ? -1 : 1,
  }));
export const axisIndex = { x: 0, y: 1, z: 2 } as const;

export function createCube(): Cubie[] {
  const cube: Cubie[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (!x && !y && !z) continue;
        cube.push({
          id: `${x},${y},${z}`,
          position: [x, y, z],
          basis: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          colors: [
            z === 1 ? "blue" : "shell",
            z === -1 ? "coral" : "shell",
            x === 1 ? "white" : "shell",
            x === -1 ? "green" : "shell",
            y === -1 ? "gold" : "shell",
            y === 1 ? "violet" : "shell",
          ],
        });
      }
    }
  }
  return cube;
}

function rotate(vector: Vector, move: CubeMove): Vector {
  let [x, y, z] = vector;
  for (let i = 0; i < (move.direction === 1 ? 1 : 3); i++) {
    if (move.axis === "x") [y, z] = [-z, y];
    if (move.axis === "y") [x, z] = [z, -x];
    if (move.axis === "z") [x, y] = [-y, x];
  }
  return [x || 0, y || 0, z || 0];
}

export function turnCube(cube: Cubie[], move: CubeMove): Cubie[] {
  return cube.map((cubie) =>
    cubie.position[axisIndex[move.axis]] === move.layer
      ? {
          ...cubie,
          position: rotate(cubie.position, move),
          basis: cubie.basis.map((vector) =>
            rotate(vector, move)
          ) as Cubie["basis"],
        }
      : cubie
  );
}

export function cubieTransform(cubie: Cubie): string {
  const [x, y, z] = cubie.position.map((value) => value * 30);
  const matrix = [
    ...cubie.basis.flatMap((vector) => [...vector, 0]),
    0,
    0,
    0,
    1,
  ];
  return `translate3d(${x}px, ${y}px, ${z}px) matrix3d(${matrix.join(",")})`;
}
