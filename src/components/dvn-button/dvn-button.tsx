import {
  Component,
  h,
  Prop,
  Watch,
  Event,
  EventEmitter,
  Element,
  State,
  Method
} from "@stencil/core";

@Component({
  tag: "dvn-button",
  styleUrl: "dvn-button.scss",
  shadow: true
})
export class DvnButton {
  @Element() el: HTMLElement;

  @State() isDisabled: boolean = false;
  @State() isLoading: boolean = false;

  /**
   * Determines if a button is disabled or not
   * @type {boolean}
   *
   */
  @Prop({ mutable: true }) disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(newValue: boolean) {
    this.isDisabled = newValue;
  }

  /**
   *
   * Determines if the button is disabled because something is loading
   * @type {boolean}
   *
   */
  @Prop({ mutable: true }) loading: boolean = false;
  @Watch("loading")
  watchLoadingHandler(newValue: boolean) {
    this.isLoading = newValue;
  }

  /**
   *
   * Determines the buttons fill type. Default is `filled`
   * @type {(`"clear"` | `"outline"` | `"filled"`)}
   * @memberof DvnButton
   */
  @Prop({ reflect: true }) fill: "clear" | "outline" | "filled" = "filled";

  /**
   *
   * Determines if it's a raised button or flat button. Default is `raised`
   * @type {(`"raised"` | `"flat"`)}
   * @memberof DvnButton
   */
  @Prop({ reflect: true }) position: "raised" | "flat" = "raised";

  /**
   * Determines if a button has rounded edges. Default is `default`
   *
   * @type {(`"round"` | `"default"`)}
   * @memberof DvnButton
   */
  @Prop({ reflect: true }) shape: "round" | "default" = "default";

  /**
   * Determines the size of the button. Default is `default`
   *
   * @type {(`"default"` | `"small"` | `"large"`)}
   * @memberof DvnButton
   */
  @Prop({ reflect: true }) size: "default" | "small" | "large" = "default";

  /**
   * Determines the button type. Default is `button`
   *
   * @type {("button" | "submit" | "reset")}
   * @memberof DvnButton
   */
  @Prop({ reflect: true }) type: "button" | "submit" | "reset" = "button";

  /**
   * Emits when the button is clicked. The event is only emmitted if the button type is set to `button`. Otherwise, it either resets or submits if used inside a form and type is set to either `submit` or  `reset`
   *
   * @type {EventEmitter<MouseEvent>}
   * @memberof DvnButton
   */
  @Event() divBtnClick: EventEmitter<MouseEvent>;

  /**
   * This toggles the loading state
   *
   * @memberof DvnButton
   */
  @Method()
  async toggleLoading() {
    this.loading = !this.loading;
  }

  /**
   * This toggles the disabled state
   *
   * @memberof DvnButton
   */
  @Method()
  async toggleDisabled() {
    this.disabled = !this.loading;
  }

  componentWillLoad() {
    this.isLoading = this.loading;
    this.isDisabled = this.disabled;
  }

  private handleClick(ev: MouseEvent) {
    console.log("clicked");
    if (this.type === "submit" || this.type === "reset") {
      let form = this.el.closest("form");
      if (form) {
        ev.preventDefault();
        this.type === "submit" ? form.submit() : form.reset();
      }
    } else {
      this.divBtnClick.emit(ev);
    }
  }

  render() {
    return (
      <div
        class={`button fill-${this.fill} shape-${this.shape} size-${
          this.size
        } position-${this.position} ${
          this.isLoading || this.isDisabled ? "disabled" : null
        }`}
        onClick={ev => {
          console.log(this.isDisabled, this.isLoading);
          if (!this.isLoading && !this.isDisabled) {
            this.handleClick(ev);
          }
        }}
      >
        {this.isLoading || this.isDisabled ? (
          <div class="overlay">
            {this.isLoading ? <div class="loading-spinner" /> : null}
          </div>
        ) : null}

        <div class="start">
          <slot name="start" />
        </div>

        <div class="label">
          <slot />
        </div>

        <div class="end">
          <slot name="end" />
        </div>
      </div>
    );
  }
}
