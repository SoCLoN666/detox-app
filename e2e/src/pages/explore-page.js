import { BasePage, BasePageLocatorActions } from "./base-page";

class ExploreLocators extends BasePageLocatorActions {
    exploreBtn = this._getByText('Explore')
    imagesDropdown = this._getByText('Images')
    supportOptionText = this._getById('Android, iOS, and web support option text')
    learnMore = this._getByText('Learn more')
    fileBasedRouting = this._getByText('File-based routing')
    supportDropdown = this._getByText('Android, iOS, and web support')
    imagesDropdown = this._getByText('Images')
    image = this._getById('image')
    customFont = this._getByText('Custom fonts')
    lightAndDarkComponent = this._getByText('Light and dark mode components')
    animationsComponent = this._getByText('Animations')
    animationsText = this._getById('animations text')
}

export class ExplorePage extends BasePage {
    locators = new ExploreLocators()

    async open() {
        await this.locators.exploreBtn.tap()
    }

    async toggleFileBasedRouting() {
        await this.locators.fileBasedRouting.tap()
        await this.waitFor(this.locators.learnMore)
    }

    async toggleSuport() {
        await this.locators.supportDropdown.tap()
    } 

    async toggleImage() {
        await this.locators.imagesDropdown.tap()
    }

    async toggleCustomFonts() {
        await this.locators.customFont.tap()
    }

    async toggleLightAndDarkComponent() {
        await this.locators.lightAndDarkComponent.tap()
    }

    async toggleAnimationsComponent() {
        await this.locators.animationsComponent.tap()
    }
}