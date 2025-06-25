export class Assert {
    // static async element(element) {
    //     return {
    //         toBeVisible: async () => await expect(element).toBeVisible(),
    //         toBeHidden:  async () => await expect(element).not.toBeVisible()
    //     }
    // }

    static async toBeVisible(element) {
        async () => await expect(element).toBeVisible()
    }
}