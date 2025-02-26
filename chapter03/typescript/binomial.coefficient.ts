class AppInit {
  static async main() {
    const n = 5;
    const k = 2;
    let result = AppInit.binomialCoefficient(n, k);
    console.log(`이항 계수 C(${n}, ${k}) = ${result}`);

    result = AppInit.binomialCoefficientOptimized(n, k);
    console.log(`이항 계수 C(${n}, ${k}) = ${result}`);
  }

  static binomialCoefficient(
    n : number,
    k : number,
  ) : number {
    const B : number[][] = Array.from({length : n + 1}, () => Array(k + 1)
      .fill(0));

    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= Math.min(i, k); j++) {
        B[i][j] = (j === 0 || j === i) ? 1 : B[i - 1][j - 1] + B[i - 1][j];
      }
    }

    return B[n][k];
  }

  static binomialCoefficientOptimized(
    n : number,
    k : number,
  ) : number {
    const B : number[] = Array(k + 1)
      .fill(0);
    B[0] = 1;

    for (let i = 1; i <= n; i++) {
      for (let j = Math.min(i, k); j > 0; j--) {
        B[j] = B[j] + B[j - 1];
      }
    }

    return B[k];
  }
}

AppInit.main()
       .catch(console.error);