class AppInit {

  static S = [0, 5, 7, 8, 10, 11, 13];
  static search = 11;

  public static async main() {
    let low = 1;
    let high = 6;

    console.info(`${this.search} location is ${await this.advancedFib(low, high)}`);
  }

  static async advancedFib(
    low : number,
    high : number,
  ) : Promise<number> {
    let mid = 0;

    if (low > high) {
      return -1;
    } else {
      mid = Math.ceil((low + high) / 2);
      console.info(mid);

      if (this.search == this.S[mid]) {
        return mid;
      } else if (this.search < this.S[mid]) {
        return this.advancedFib(low, mid - 1);
      } else {
        return this.advancedFib(mid + 1, high);
      }

    }
  }
}

AppInit.main()
       .catch(console.error);