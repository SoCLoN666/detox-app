export class BasePageLocatorActions {
    _getByText(text) {
        return element(by.text(text))
    }

    _getById(id) {
        return element(by.id(id))
    }

    _getByLabel(label) {
        return element(by.label(label))
    }
    
    _getByType(type) {
        return element(by.type(type))
    }
}

export class BasePage {
    async launchApp() {
        await device.launchApp();
    }

    async reloadApp() {
        await device.reloadReactNative();
    }

    async waitFor(element) {
        await waitFor(element).toBeVisible().withTimeout(5000)
    }
}