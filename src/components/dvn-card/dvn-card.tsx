import { Component, h } from "@stencil/core";

@Component({
  tag: "dvn-card",
  styleUrl: "dvn-card.scss",
  shadow: true
})
export class DvnCard {
  el!: HTMLDvnButtonElement;
  render() {
    return (
      <div>
        <dvn-button
          fill="outline"
          size="small"
          ref={el => (this.el = el as HTMLDvnButtonElement)}
        >
          <span slot="start">I</span> OUTLINE
          <span slot="end">O</span>
        </dvn-button>

        <p
          onClick={() => {
            this.el.toggleLoading();
          }}
        >
          click here
        </p>
      </div>
    );
  }
}
