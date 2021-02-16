/*
    Component for managing a shape (i.e. box drawn on the player) for an annotation
*/

const PlayerUIComponent = require('./../lib/player_ui_component');

module.exports = class Shape extends PlayerUIComponent {
  constructor(player, shape = null) {
    super(player);
    this.shape = shape;
    this.$parent = this.$player;
  }

  // Draw the shape element on the $parent
  render() {
    this.$el = $('<div/>').addClass('vac-shape');
    this.$parent.append(this.$el);
    this.setDimsFromShape();
  }

  show() {
    if (!this.shape) return;
    if (!this.$el) { 
      this.render();
    }
    this.$el.show();
  }

  hide() {
    if (!this.shape || !this.$el) return;
    this.$el.hide();
  }

  // Set/update the dimensions of the shape based  on this.shape
  setDimsFromShape(recalc = false) {
    if (!this.shape.a || recalc) {
      this.buildAbsoluteDims()
    } 
    const zoom = this.getCurrentZoomLevel();
    const scaled = {
      x1: this.shape.a.x1 / zoom + this.plugin.videoGap.x,
      x2: this.shape.a.x2 / zoom + this.plugin.videoGap.x,
      y1: this.shape.a.y1 / zoom + this.plugin.videoGap.y,
      y2: this.shape.a.y2 / zoom + this.plugin.videoGap.y
    };
    this.$el.css({
      left: `${scaled.x1}px`,
      top: `${scaled.y1}px`,
      width: `${scaled.x2 - scaled.x1}px`,
      height: `${scaled.y2 - scaled.y1}px`
    });
  }

  getCurrentZoomLevel() {
    const videoFrameSize = {
      x: this.plugin.videoBounds.right - this.plugin.videoBounds.left,
      y: this.plugin.videoBounds.bottom - this.plugin.videoBounds.top,
    };
    this.zoomLevel = this.plugin.videoSize.x / videoFrameSize.x;
    return this.zoomLevel;
  }

  buildAbsoluteDims() {
    const zoom = this.getCurrentZoomLevel();
    const containerSize = {
      x: this.$parent.width(),
      y: this.$parent.height()
    };
    const shapePixels = {
      x1: this.shape.x1 * containerSize.x / 100,
      x2: this.shape.x2 * containerSize.x / 100,
      y1: this.shape.y1 * containerSize.y / 100,
      y2: this.shape.y2 * containerSize.y / 100,
    }    
    this.shape.a = {
      x1: Math.round((shapePixels.x1 - this.plugin.videoGap.x) * zoom),
      x2: Math.round((shapePixels.x2 - this.plugin.videoGap.x) * zoom),
      y1: Math.round((shapePixels.y1 - this.plugin.videoGap.y) * zoom),
      y2: Math.round((shapePixels.y2 - this.plugin.videoGap.y) * zoom)
    };
  }
};
