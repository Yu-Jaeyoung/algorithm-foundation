class AppInit {

  public static async main() {

    let n = 6;
    let S = [ 0, 5, 7, 8, 10, 11, 13 ];
    let x = 10;

    console.info(`${x} location is ${await this.binarySearch(n, S, x)}`);
  }

  static async binarySearch(
    n: number,
    S: number[],
    x: number
  ): Promise<number> {
    let low = 1;
    let high = n;
    let location = 0;

    while (low <= high && location === 0) {
      let mid = Math.floor((low + high) / 2);

      if (x === S[mid]) {
        location = mid;
      } else if (x < S[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return location;
  }
}

AppInit.main()
       .catch(console.error);
