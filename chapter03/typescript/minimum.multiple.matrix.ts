class AppInit {
  static async main() {
    const n = 6;
    const d : number[] = [5, 2, 3, 4, 6, 7, 8];

    const {M, P} = AppInit.minMult(n, d);

    console.log("Minimum number of scalar multiplications:", M[1][n]);
    console.log("Optimal Matrix Multiplication Order:");
    AppInit.order(1, n, P);
    console.log();
  }

  static minMult(
    n : number,
    d : number[],
  ) : { M : number[][]; P : number[][] } {
    const M : number[][] = Array(n + 1)
      .fill(null)
      .map(() => Array(n + 1)
        .fill(0));

    const P : number[][] = Array(n + 1)
      .fill(null)
      .map(() => Array(n + 1)
        .fill(0));

    for (let diagonal = 1; diagonal <= n - 1; diagonal++) {
      for (let i = 1; i <= n - diagonal; i++) {
        const j = i + diagonal;
        let minVal : number = Infinity;
        let minK : number = -1;

        for (let k = i; k <= j - 1; k++) {
          const currentVal : number = M[i][k] + M[k + 1][j] + d[i - 1] * d[k] * d[j];
          if (currentVal < minVal) {
            minVal = currentVal;
            minK = k;
          }
        }
        M[i][j] = minVal;
        P[i][j] = minK;
      }
    }

    return {M, P};
  }

  static order(
    i : number,
    j : number,
    P : number[][],
  ) : void {
    if (i === j) {
      console.log(`A${i}`);
    } else {
      const k : number = P[i][j];
      console.log("(");
      AppInit.order(i, k, P);
      AppInit.order(k + 1, j, P);
      console.log(")");
    }
  }
}

AppInit.main()
       .catch(console.error);