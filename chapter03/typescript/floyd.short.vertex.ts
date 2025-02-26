class AppInit {
  static async main() {
    const n = 5;
    const W : number[][] = [
      [0, 1, Infinity, 1, 5],
      [9, 0, 3, 2, Infinity],
      [Infinity, Infinity, 0, 4, Infinity],
      [Infinity, Infinity, 2, 0, 3],
      [3, Infinity, Infinity, Infinity, 0],
    ];

    const D : number[][] = W.map(row => [...row]);

    const P : number[][] = Array(n)
      .fill(null)
      .map(() => Array(n)
        .fill(0));

    this.floyd2(n, W, D, P);

    console.log("Shortest distances matrix D:");
    for (let i = 0; i < n; i++) {
      console.log(D[i].map(val => val === Infinity ? "∞" : val)
                      .join("\t"));
    }

    console.log("\nPredecessor matrix P:");
    for (let i = 0; i < n; i++) {
      console.log(P[i].join("\t"));
    }

    console.log("\nPath from 0 to 2:");
    const path = AppInit.getPath(0, 2, P);
    console.log(path.length > 0 ? `Path: ${path.join(" -> ")}` : "Direct route");
  }

  static floyd2(
    n : number,
    W : number[][],
    D : number[][],
    P : number[][],
  ) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        P[i][j] = 0;
      }
    }

    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (D[i][k] + D[k][j] < D[i][j]) {
            P[i][j] = k;
            D[i][j] = D[i][k] + D[k][j];
          }
        }
      }
    }
  }

  static getPath(
    start : number,
    end : number,
    P : number[][],
  ) : number[] {
    const path : number[] = [];

    if (P[start][end] === 0) {
      return path;
    }

    let current = start;
    while (current !== end) {
      const next = P[current][end];
      if (next === 0) {
        path.push(end);
        break;
      } else {
        path.push(next);
        current = next;
      }
    }

    return [start, ...path];
  }
}

AppInit.main()
       .catch(console.error);