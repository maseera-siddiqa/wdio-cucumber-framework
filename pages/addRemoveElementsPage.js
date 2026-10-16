class AddRemoveElementPage {

        get addButton() {
            return $('button[onclick="addElement()"]');
        }
        
        get deleteButton() {
            return $$('#elements .added-manually');
        }

        async open() {
            await browser.url('/add_remove_elements/');
        }

        async clickAdd() {
            await this.addButton.click();
        }

        async getDeleteButtonCount() {
            const buttons = await this.deleteButton;
            return buttons.length;
        }
}

module.exports = new AddRemoveElementPage();