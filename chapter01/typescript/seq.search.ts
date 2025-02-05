class AppInit {

  public static async main() {
    let S = [-1, 10, 7, 11, 5, 13, 8];
    let x = 13;
    let n = 6;

    await this.seqSearch(S, n, x);
  }

  static async seqSearch(
    S : number[],
    n : number,
    x : number,
  ) : Promise<void> {
    let location = 1;

    while (location <= n && S[location] != x) {

      location++;

      if (location > n) {
        location = 0;
      }

    }

    console.info(`location of ${x} is ${location}.`);
  }
}

AppInit.main()
       .catch(console.error);