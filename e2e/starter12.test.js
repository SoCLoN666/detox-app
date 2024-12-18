describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to open Explore tab", async () => {
    await element(by.text("Explore")).tap();

    await expect(
      element(by.text("This app includes example code to help you get started."))
    ).toBeVisible();
  });

  it("should show hello screen after tap", async () => {
    await element(by.text("Home")).tap();
    await expect(element(by.text("Welcome!"))).toBeVisible();
  });
});
