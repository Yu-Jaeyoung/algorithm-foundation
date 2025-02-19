class AppInit {

  public static async main() {
    let arr : number[] = [10, 12, 20, 27, 13, 15, 22, 25];
    console.info(`mergeSort result is ${await this.mergeSort(arr)}`);
  }

  static async mergeSort(S : number[]) : Promise<number[]> {
    const n = S.length;

    if (n > 1) {
      const h = Math.floor(n / 2);
      const m = n - h;

      const U : number[] = S.slice(0, h);
      const V : number[] = S.slice(h, n);

      const sortedU = await this.mergeSort(U);
      const sortedV = await this.mergeSort(V);

      await this.merge(h, m, sortedU, sortedV, S);
    }

    return S;
  }

  static async merge(
    arrayLength1 : number,
    arrayLength2 : number,
    sortedArray1 : number[],
    sortedArray2 : number[],
    resultArray : number[],
  ) : Promise<void> {
    let i = 0, j = 0, k = 0;

    while (i < arrayLength1 && j < arrayLength2) {
      if (sortedArray1[i] < sortedArray2[j]) {
        resultArray[k] = sortedArray1[i];
        i++;
      } else {
        resultArray[k] = sortedArray2[j];
        j++;
      }
      k++;
    }

    if (i < arrayLength1) {
      resultArray.splice(k, arrayLength1 - i, ...sortedArray1.slice(i));
    } else if (j < arrayLength2) {
      resultArray.splice(k, arrayLength2 - j, ...sortedArray2.slice(j));
    }

  }

}

AppInit.main()
       .catch(console.error);