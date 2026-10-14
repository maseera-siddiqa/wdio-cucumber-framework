// class Checkbox {

//     get checkboxes() {
//         return $$('input[type="checkbox"]');
//     }


//     async isCheckboxSelected(index) {
//         const boxes = await this.checkboxes;
//         return await boxes[index].isSelected();
//     }
// }

// module.exports = new Checkbox();

class Checkbox {

    get checkboxes() {
        return $$('input[type="checkbox"]');
    }

    async open() {
        await browser.url('/checkboxes');
        await browser.waitUntil(
            async () => (await this.checkboxes).length >= 2,
            { timeoutMsg: 'Checkboxes did not appear on the page' }
        );
    }

    async isCheckboxSelected(index) {
        const boxes = await this.checkboxes;
        return await boxes[index].isSelected();
    }

    async toggleCheckbox(index) {
        const boxes = await this.checkboxes;
        await boxes[index].click();
    }

    async check(index) {
        const selected = await this.isCheckboxSelected(index);
        if(!selected) {
            await this.toggleCheckbox(index);
        }
    }

    async uncheck(index) {
        const selected = await this.isCheckboxSelected(index);
        if(selected) {
            await this.toggleCheckbox(index);
        }
    }
}

module.exports = new Checkbox();