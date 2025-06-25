import { BasePage } from "./base-page";

class HomeLocators extends BasePageLocatorActions {
    welcomeText = this._getByText('Welcome!')
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

export class HomePage extends BasePage {
    locators = new HomeLocators()
    
    async open() {
        await this._getByText('Home').tap()
    }
}