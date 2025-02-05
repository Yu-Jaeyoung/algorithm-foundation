class AppInit {
  public static async main() {
    let n : number = 5;

    console.info(`fib(${n}) is ${await this.fib(n)}`);
  }

  static async fib(
    n : number,
  ) : Promise<number> {

    if (n <= 1) {
      return n;
    } else {
      return await this.fib(n - 1) + await this.fib(n - 2);
    }
  }
}

AppInit.main()
       .catch(console.error);