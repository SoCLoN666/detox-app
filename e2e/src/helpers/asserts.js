export class Assert {
    static async toBeVisible(element) {
        async () => await expect(element).toBeVisible()
    }
}

