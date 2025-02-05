class AppInit {
  public static async main() {
    let n = 6;
    let S = [0, 10, 7, 11, 5, 13, 8];

    await this.exchange(n, S);
    console.info(S);
  }

  static async exchange(
    n : number,
    S : number[],
  ) : Promise<void> {

    for (let i = 1; i <= n - 1; i++) {
      for (let j = i + 1; j <= n; j++) {
        if (S[j] < S[i]) {
          let temp = S[j];
          S[j] = S[i];
          S[i] = temp;
        }
      }
    }

  }
}

AppInit.main()
       .catch(console.error);