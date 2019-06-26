import { TestWindow } from "@stencil/core/testing";
import { DvnButton } from "./dvn-button";

describe("dvn-button", () => {
  it("should build", () => {
    expect(new DvnButton()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLDvnButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DvnButton],
        html: "<dvn-button></dvn-button>"
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {
      cursor;
    }
  });
});
