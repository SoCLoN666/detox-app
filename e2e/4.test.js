describe("test", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });

  it("test", async () => {
    // 1
    await element(by.text("Explore")).tap();

    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();

    // 2
    await element(by.text("Home")).tap();

    await expect(element(by.text("Welcome!"))).toBeVisible();

    // 3

    await element(by.text("Explore")).tap();
    await expect(element(by.text("Welcome!"))).not.toBeVisible();

    // 4
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("File-based routing")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).toBeVisible();
    await element(by.text("Android, iOS, and web support")).tap();
    await expect(element(by.id("Android, iOS, and web support option text"))).not.toBeVisible();

    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).toBeVisible();
    await element(by.text("Images")).tap();
    await expect(element(by.id("image"))).not.toBeVisible();

    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Custom fonts")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).toBeVisible();
    await element(by.text("Light and dark mode components")).tap();
    await expect(element(by.text("Learn more"))).not.toBeVisible();

    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).toBeVisible();
    await element(by.text("Animations")).tap();
    await expect(element(by.id("animations text"))).not.toBeVisible();
  });
});
