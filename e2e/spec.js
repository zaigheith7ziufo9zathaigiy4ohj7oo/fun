function testAsync(specFunction) {
  return (done) => {
    specFunction().then(() => {
      done();
    }).catch((error) => {
      done.fail(error);
    });
  };
}

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

  for (var x = 0; x < Number(process.env.FUN_MULTIPLIER); x++) {
    it('Vote ' + x, testAsync(async () => {
      await vote();
    }));
  }
});
