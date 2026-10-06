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
    }

    async isCheckboxSelected(index) {
        const boxes = await this.checkboxes;
        return await boxes[index].isSelected();
    }

    async toggleCheckbox(index) {
        const boxes = await this.checkboxes;
        await boxes[index].click();
    }
}

module.exports = new Checkbox();