class AppInit {
  static async main() {
    const n = 5;
    const W : number[][] = [
      [0, 1, Infinity, 1, 5],
      [9, 0, 3, 2, Infinity],
      [Infinity, Infinity, 0, 4, Infinity],
      [Infinity, Infinity, 2, 0, 3],
      [3, Infinity, Infinity, Infinity, 0],
    ];

    // const W : number[][] = [
    //   [0, 1, 5],
    //   [Infinity, 0, 3],
    //   [3, Infinity, 0],
    // ];

    const D : number[][] = W.map(row => [...row]);

    this.floyd(n, W, D);

    console.log("Shortest distances matrix D:");
    for (let i = 0; i < n; i++) {
      console.log(D[i].map(val => val === Infinity ? "∞" : val)
                      .join("\t"));
    }
  }

  static floyd(
    n : number,
    W : number[][],
    D : number[][],
  ) {
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
        }
      }

      // k가 의미하는 바가 무엇인가 ?
      // k는 이번에 업데이트할 때, 지나는 vertax를 의미한다.
      // 그래서 1번째 업데이트 k = 0인 경우, 이전 W랑 비교했을 때 W[0][] 부분의 값에 변화가 없다..
      // 이어지는 업데이트 에서 k = 1인 경우, 이전 W랑 비교했을 때 W[1][] 부분의 값에 변화가 없음

      console.log(`${k} 번째 동작 : `);
      console.info(D);
    }
  }

}

AppInit.main()
       .catch(console.error);