class AppInit {
  public static async main() {
    let n : number = 5;

    console.info(`fib(${n}) is ${await this.advancedFib(n)}`);
  }

  static async advancedFib(
    n : number,
  ) : Promise<number> {
    let f : number[] = Array(n + 1)
      .fill(0);

    if (n > 0) {
      f[1] = 1;
      for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
      }
    }

    return f[n];

  }
}

AppInit.main()
       .catch(console.error);