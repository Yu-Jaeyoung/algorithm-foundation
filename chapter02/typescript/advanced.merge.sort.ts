class AppInit {

  static S : number[] = [10, 12, 20, 27, 13, 15, 22, 25];

  static async main() {
    console.log("Before:", this.S);
    await this.advancedMergeSort(0, this.S.length - 1);
    console.log("After:", this.S);
  }

  static async advancedMergeSort(
    low : number,
    high : number,
  ) {
    let mid : number;

    if (low < high) {
      mid = Math.floor((high + low) / 2);
      await this.advancedMergeSort(low, mid);
      await this.advancedMergeSort(mid + 1, high);

      await this.advancedMerge(low, mid, high);
    }
  }

  static async advancedMerge(
    low : number,
    mid : number,
    high : number,
  ) {

    let i = low;
    let j = mid + 1;
    let k = low;

    let resultArray : number[] = new Array(high - low + 1);

    while (i <= mid && j <= high) {
      if (this.S[i] < this.S[j]) {
        resultArray[k - low] = this.S[i];
        i++;
      } else {
        resultArray[k - low] = this.S[j];
        j++;
      }
      k++;
    }

    while (i <= mid) {
      resultArray[k - low] = this.S[i];
      i++;
      k++;
    }

    while (j <= high) {
      resultArray[k - low] = this.S[j];
      j++;
      k++;
    }

    for (let l = low; l <= high; l++) {
      this.S[l] = resultArray[l - low];
    }
  }
}

AppInit.main()
       .catch(console.error);