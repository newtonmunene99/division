import { Component, Prop, State, h } from "@stencil/core";
@Component({
  tag: "dvn-gallery",
  styleUrl: "dvn-gallery.scss",
  shadow: true
})
export class DvnGallery {
  @Prop()
  color: string = "inherit";
  @Prop()
  src: Array<any>;
  @State()
  preview: Boolean;
  @State()
  images: Array<any>;
  @State()
  CurrentImageUrl: string;
  currentIndex: number;

  handleImageOpen(event, index) {
    this.CurrentImageUrl = event.target.src;
    this.preview = true;
    this.currentIndex = index;
    document.querySelector("body").setAttribute("style", "overflow: hidden;");
  }

  handlePreviewImage(event, index) {
    this.CurrentImageUrl = event.target.src;
    this.currentIndex = index;
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
    if (this.src) {
      this.CurrentImageUrl = this.images[this.currentIndex];
    } else {
      this.CurrentImageUrl = this.images[this.currentIndex].src;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }

    if (this.src) {
      this.CurrentImageUrl = this.images[this.currentIndex];
    } else {
      this.CurrentImageUrl = this.images[this.currentIndex].src;
    }
  }

  handleImageClose() {
    this.CurrentImageUrl = null;
    this.preview = false;
    document.querySelector("body").setAttribute("style", "overflow: auto;");
  }

  componentWillLoad() {
    if (this.src) {
      this.images = this.src;
    } else {
      let myImageGallery = document.querySelector("dvn-gallery");
      this.images = [].slice.call(myImageGallery.getElementsByTagName("img"));
    }
  }

  render() {
    return [
      <div>
        {!this.src && !this.images ? (
          <div />
        ) : (
          <div
            id="photos"
            style={{ "background-color": this.color, overflow: "auto" }}
          >
            {this.src
              ? this.images.map((image, index) => (
                  <dvn-image
                    src={image}
                    alt="Image"
                    onClick={event => {
                      this.handleImageOpen(event, index);
                    }}
                  />
                ))
              : this.images.map((image, index) => (
                  <dvn-image
                    src={image.src}
                    alt="Image"
                    onClick={event => {
                      this.handleImageOpen(event, index);
                    }}
                  />
                ))}
          </div>
        )}
      </div>,
      <div>
        {this.preview ? (
          <div id="galleryPreview">
            <div class="body">
              <div
                class="close"
                onClick={() => {
                  this.handleImageClose();
                }}
              >
                X
              </div>
              <div
                class="previous"
                onClick={() => {
                  this.previous();
                }}
              />
              <div
                class="next"
                onClick={() => {
                  this.next();
                }}
              />

              <dvn-image src={this.CurrentImageUrl} alt="Image" />
            </div>
            <div class="footer">
              {this.src
                ? this.images.map((image, index) => (
                    <dvn-image
                      src={image}
                      alt="Image"
                      onClick={event => {
                        this.handleImageOpen(event, index);
                      }}
                    />
                  ))
                : this.images.map((image, index) => (
                    <dvn-image
                      src={image.src}
                      alt="Image"
                      onClick={event => {
                        this.handleImageOpen(event, index);
                      }}
                    />
                  ))}
            </div>
          </div>
        ) : null}
      </div>
    ];
  }
}
