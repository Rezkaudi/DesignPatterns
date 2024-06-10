// class DelayedOperationSingleton {
//     private resultPromise: Promise<string>;

//      constructor() {
//         console.log("start")
//         this.resultPromise = this.performDelayedOperation();
//     }

//     private async performDelayedOperation(): Promise<string> {
//         await new Promise(resolve => setTimeout(() => resolve('Operation Result'), 5000));
//         return 'Operation Result';
//     }

//     public getResult(): Promise<string> {
//         return this.resultPromise;
//     }
// }

// (async () => {
//     const operationService1 =new DelayedOperationSingleton();
//     const result1 = await operationService1.getResult();
//     console.log(result1); // Operation Result
//     // More application logic...
//     const operationService2 =new DelayedOperationSingleton();
//     const result2 = await operationService2.getResult();
//     console.log(result2); // Operation Result
// })();
// ---------------------------------------------------------------
class DelayedOperationSingleton {
  private static instance: DelayedOperationSingleton;
  private resultPromise: Promise<string>;

  private constructor() {
    console.log("start");
    this.resultPromise = this.performDelayedOperation();
  }

  private async performDelayedOperation(): Promise<string> {
    await new Promise((resolve) =>
      setTimeout(() => resolve("Operation Result"), 5000)
    );
    return "Operation Result";
  }

  public getResult(): Promise<string> {
    return this.resultPromise;
  }

  public static getInstance(): DelayedOperationSingleton {
    if (!DelayedOperationSingleton.instance) {
      DelayedOperationSingleton.instance = new DelayedOperationSingleton();
    }
    return DelayedOperationSingleton.instance;
  }
}

(async () => {
  const operationService1 = DelayedOperationSingleton.getInstance();
  const result1 = await operationService1.getResult();
  console.log(result1); // Operation Result
  // More application logic...
  const operationService2 = DelayedOperationSingleton.getInstance();
  const result2 = await operationService2.getResult();
  console.log(result2); // Operation Result
})();
