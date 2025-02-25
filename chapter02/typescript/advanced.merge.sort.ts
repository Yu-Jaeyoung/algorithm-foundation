class AppInit {

  static S : number[] = [123, 34, 189, 56, 150, 12, 9, 240];

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

      console.info(`as(${low},${mid})`);
      await this.advancedMergeSort(low, mid);

      console.info(`as(${mid+1},${high})`);
      await this.advancedMergeSort(mid + 1, high);

      console.info(`am(${low}, ${mid}, ${high})`);
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
    let resultArray2 : number[] = new Array(high - low + 1);

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

    for (const number of resultArray) {
      resultArray2.push(number)
    }
    console.info(resultArray2);
    
  }
}

AppInit.main()
       .catch(console.error);
