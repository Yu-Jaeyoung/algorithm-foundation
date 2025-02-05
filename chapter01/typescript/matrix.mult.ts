class AppInit {
  public static async main() {
    const n = 3;
    const A = [
      [0, 0, 0, 0],
      [0, 1, 2, 3],
      [0, 4, 5, 6],
      [0, 7, 8, 9]
    ];
    const B = [
      [0, 0, 0, 0],
      [0, 9, 8, 7],
      [0, 6, 5, 4],
      [0, 3, 2, 1]
    ];

    await this.matrixMult(n, A, B);
  }

  static async matrixMult(
    n: number,
    A: number[][],
    B: number[][]
  ): Promise<void> {

    let C: number[][] = Array(n + 1).fill(0).map(() =>
      Array(n + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        C[i][j] = 0;
        for (let k = 1; k <= n; k++) {
          C[i][j] = C[i][j] + A[i][k] * B[k][j];
        }
      }
    }

    console.info('result Matrix :');
    for (let i = 1; i <= n; i++) {
      console.info(C[i].slice(1));
    }
  }
}

AppInit.main()
       .catch(console.error);