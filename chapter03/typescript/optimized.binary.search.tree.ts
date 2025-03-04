class OptimalSearchTree {
  static constructOptimalSearchTree (
    p : number[],
  ) : { minAvg : number; R : number[][] } {
    const n = p.length - 1; // p[0]은 사용하지 않으므로 n은 p.length - 1
    const A : number[][] = Array.from ({ length : n + 2 }, () =>
      Array (n + 1)
        .fill (0),
    );
    const R : number[][] = Array.from ({ length : n + 2 }, () =>
      Array (n + 1)
        .fill (0),
    );

    for (let i = 1; i <= n; i++) {
      A[i][i - 1] = 0;
      A[i][i] = p[i];
      R[i][i] = i;
      R[i][i - 1] = 0;
    }
    A[n + 1][n] = 0;
    R[n + 1][n] = 0;

    for (let diagonal = 1; diagonal <= n - 1; diagonal++) {
      for (let i = 1; i <= n - diagonal; i++) {
        const j = i + diagonal;
        let minVal = Infinity;
        let minK = i;
        let sumP = 0;

        for (let m = i; m <= j; m++) {
          sumP += p[m];
        }

        for (let k = i; k <= j; k++) {
          const cost = A[i][k - 1] + A[k + 1][j] + sumP;
          if (cost < minVal) {
            minVal = cost;
            minK = k;
          }
        }
        A[i][j] = minVal;
        R[i][j] = minK;
      }
    }

    const minAvg = A[1][n];
    return { minAvg, R };
  }

  static main () : void {
    const p : number[] = [
      0,
      0.15,
      0.10,
      0.05,
      0.10,
      0.20,
    ];
    const { minAvg, R } = OptimalSearchTree.constructOptimalSearchTree (p);

    console.log (`Minimum average search cost: ${ minAvg }`);
    console.log ("Root table (R):");
    for (let i = 1; i < R.length; i++) {
      console.log (i, R[i]);
    }
  }
}

OptimalSearchTree.main ();