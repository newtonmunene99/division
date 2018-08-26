import { TestWindow } from '@stencil/core/testing';
import { DvnCard } from './dvn-card';

describe('dvn-card', () => {
  it('should build', () => {
    expect(new DvnCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDvnCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DvnCard],
        html: '<dvn-card></dvn-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
