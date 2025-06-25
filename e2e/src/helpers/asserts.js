class Assert {
    static async toBeVisible(element) {
        async () => await expect(element).toBeVisible()
    }
}

module.exports = { Assert };
