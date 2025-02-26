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

    this.floyd(n, W, D);

    console.log("Shortest distances matrix D:");
    for (let i = 0; i < n; i++) {
      console.log(D[i].map(val => val === Infinity ? "∞" : val)
                      .join("\t"));
    }
  }

  static floyd(
    n : number,
    W : number[][],
    D : number[][],
  ) {
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
        }
      }
    }
  }

}

AppInit.main()
       .catch(console.error);