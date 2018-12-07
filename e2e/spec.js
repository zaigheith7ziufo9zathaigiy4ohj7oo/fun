function testAsync(specFunction) {
  return (done) => {
    specFunction().then(() => {
      done();
    }).catch((error) => {
      done.fail(error);
    });
  };
}

console.log('process.env.FUN_URL:', process.env.FUN_URL)

describe('Make fun', () => {
  async function vote() {
    const driver = browser.driver;
    driver.ignoreSynchronization = true;
    await driver.get(process.env.FUN_URL);
    await driver.sleep(200);
    await driver.findElement(by.id(process.env.FUN_ID)).click();
    await driver.sleep(200);
  }

  afterEach(() => {
    browser.restart();
  });
  
  it('Test vote', testAsync(async () => {
    await vote();
  }));

  for (var x = 0; x < Number(process.env.FUN_MULTIPLIER); x++) {
    it('Vote ' + x, testAsync(async () => {
      await vote();
    }));
  }
});
