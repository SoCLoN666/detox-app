describe("my app tests", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("expand file-based routing option in explore tab", async () => {
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();

    await expect(element(by.text("Learn more"))).toBeVisible();
  });
});
