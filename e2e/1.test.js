import { Assert } from "./src/helpers/asserts";
import { AllPages } from "./src/pages/all-pages";

describe("test", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("test", async () => {
    // 1
    const Page = new AllPages()
    await Page.Explore.open()

    await Page.Explore.toggleFileBasedRouting() // open

    await Assert.toBeVisible(Page.Explore.locators.learnMore)

    await expect(Page.Explore.locators.learnMore).toBeVisible()
    await Page.Explore.toggleFileBasedRouting() // close

    await expect(Page.Explore.locators.learnMore).not.toBeVisible()
    await Page.Explore.toggleSuport() // open

    await expect(Page.Explore.locators.supportOptionText).toBeVisible()
    await Page.Explore.toggleSuport() // close

    await expect(Page.Explore.locators.supportOptionText).not.toBeVisible()
    await Page.Explore.toggleImage() // on

    await expect(Page.Explore.locators.toggleImage).toBeVisible()
    await Page.Explore.toggleImage() // off

    await expect(Page.Explore.locators.toggleImage).not.toBeVisible()
    await Page.Explore.toggleCustomFonts() // on

    await expect(Page.Explore.locators.learnMore).toBeVisible()
    await Page.Explore.toggleCustomFonts() // off

    await expect(Page.Explore.locators.learnMore).not.toBeVisible()
    await Page.Explore.toggleLightAndDarkComponent() // on

    await expect(Page.Explore.locators.learnMore).toBeVisible()
    await Page.Explore.toggleLightAndDarkComponent() // off

    await expect(Page.Explore.locators.learnMore).not.toBeVisible()
    await Page.Explore.toggleAnimationsComponent() // on

    await expect(Page.Explore.locators.animationsText).toBeVisible()
    await Page.Explore.toggleAnimationsComponent() // off

    await expect(Page.Explore.locators.animationsText).not.toBeVisible()

    // 2

    await Page.Home.open()
    await expect(Page.Home.locators.welcomeText).toBeVisible()
    await Page.Explore.open()

    await expect(Page.Home.locators.welcomeText).not.toBeVisible()

    // 4

    await Page.Explore.toggleFileBasedRouting() // open
    await expect(Page.Explore.locators.learnMore).toBeVisible()

    await Page.Explore.toggleFileBasedRouting() // close

    await expect(Page.Explore.locators.learnMore).not.toBeVisible()
    await Page.Explore.toggleSuport() // open

    await expect(Page.Explore.locators.supportOptionText).toBeVisible()
    await Page.Explore.toggleSuport() // close

    await expect(Page.Explore.locators.supportOptionText).not.toBeVisible()
    await Page.Explore.toggleImage() // on

    await expect(Page.Explore.locators.toggleImage).toBeVisible() 
    await Page.Explore.toggleImage() // off

    await expect(Page.Explore.locators.toggleImage).not.toBeVisible()
    await Page.Explore.toggleCustomFonts() // on

    await expect(Page.Explore.locators.learnMore).toBeVisible()
    await Page.Explore.toggleCustomFonts() // off

    await expect(Page.Explore.locators.learnMore).not.toBeVisible()
    await Page.Explore.toggleLightAndDarkComponent() // on

    await expect(Page.Explore.locators.learnMore).toBeVisible()
    await Page.Explore.toggleLightAndDarkComponent() // off

    await expect(Page.Explore.locators.learnMore).not.toBeVisible()
    await Page.Explore.toggleAnimationsComponent() // on

    await expect(Page.Explore.locators.animationsText).toBeVisible()
    await Page.Explore.toggleAnimationsComponent() // off

    await expect(Page.Explore.locators.animationsText).not.toBeVisible()

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
