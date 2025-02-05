class AppInit {
  public static async main() {
    let n = 6;
    let S = [0, 10, 7, 11, 5, 13, 8];

    console.info(`result of arraySum : ${await this.arraySum(n, S)}`);
  }

  static async arraySum(
    n : number,
    S : number[],
  ) : Promise<number> {

    // let i;
    let result = 0;

    // for (i = 1; i <= n; i++) {
    //   result += S[i];
    // }

    for (const number of S) {
      result += number;
    }

    return result;
  }
}

AppInit.main()
       .catch(console.error);