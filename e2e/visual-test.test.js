it.skip("Terms and conditions screen should match snapshot", async () => {
  await device.launchApp();
  await device.reloadReactNative(); // Optional: reload the app
  await jestExpect("Terms and conditions").toMatchImageSnapshot();
});
