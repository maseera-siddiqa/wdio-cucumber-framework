class DropdownPage {
  get dropdown() {
    return $("#dropdown");
  }
    get selectedOption() {
        return $("#dropdown option:checked");
    }
  async open() {
    await browser.url("/dropdown");
  }

  async selectOption(option) {
    await this.dropdown.selectByVisibleText(option);
  }

  async getSelectedText() {
    return await this.selectedOption.getText();
  }
}

module.exports = new DropdownPage();
