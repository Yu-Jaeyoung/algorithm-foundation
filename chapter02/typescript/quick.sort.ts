class AppInit {

  static S : number[] = [10, 12, 20, 27, 13, 15, 22, 25];

  static async main() {
    console.log("Before :", this.S);
    this.quickSort(0, this.S.length - 1);
    console.log("After :", this.S);
  }

  static quickSort(low: number, high: number): void {
    let pivotPoint: number;

    if (high > low) {
      pivotPoint = this.partition(low, high);
      this.quickSort(low, pivotPoint - 1);
      this.quickSort(pivotPoint + 1, high);
    }
  }

  static partition(low: number, high: number): number {
    let i: number;
    let j: number;
    let pivotItem: number;

    pivotItem = this.S[low];
    j = low;

    for (i = low + 1; i <= high; i++) {
      if (this.S[i] < pivotItem) {
        j++;
        this.exchange(i, j);
      }
    }

    let pivotPoint = j;
    this.exchange(low, pivotPoint);

    return pivotPoint;
  }

  static exchange(i: number, j: number): void {
    let temp = this.S[i];
    this.S[i] = this.S[j];
    this.S[j] = temp;
  }
}

AppInit.main()
       .catch(console.error);