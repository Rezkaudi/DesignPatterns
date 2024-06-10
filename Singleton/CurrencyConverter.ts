const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//----------------------------------------------------------------------
// before singleton
//----------------------------------------------------------------------

// Currency Converter Without Singleton
// class CurrencyConverter {
//   private rate: Promise<number>;

//   constructor(rate: number) {
//     console.log("start");
//     this.rate = this.load(rate);
//   }

//   private async load(rate: number): Promise<number> {
//     await sleep(5000);
//     return rate;
//   }

//   public async convert(amount: number): Promise<number> { // Make convert method async
//     const result = await this.rate * amount; // Await the resolution of this.rate
//     return result;
//   }
// }

// // Usage remains the same
// (async () => {
//   const euroConverter = new CurrencyConverter(0.85);

//   console.log(await euroConverter.convert(100)); // 85

//   const dollarConverter = new CurrencyConverter(1.15);
//   console.log(await dollarConverter.convert(100)); // 115
// })();

//----------------------------------------------------------------------
// after singleton
//----------------------------------------------------------------------

// Currency Converter With Singleton

class CurrencyConverter {
  private static instance: CurrencyConverter | undefined;
  private rate: Promise<number>;

  private constructor(rate: number) {
    console.log("start")
    this.rate = this.load(rate);
  }

  private async load(rate: number): Promise<number> {
    await sleep(5000);
    return rate;
  }

  public static getInstance(rate: number): CurrencyConverter {
    if (!CurrencyConverter.instance) {
      CurrencyConverter.instance = new CurrencyConverter(rate);
    }
    return CurrencyConverter.instance;
  }

  public async convert(amount: number): Promise<number> {
    // Make convert method async
    const result = (await this.rate) * amount; // Await the resolution of this.rate
    return result;
  }
}

// Usage
(async () => {
  const euroConverter = CurrencyConverter.getInstance(0.85);
  console.log(await euroConverter.convert(100)); // 85

  const dollarConverter = CurrencyConverter.getInstance(1.15);
  console.log(await dollarConverter.convert(100)); // 115
})();
