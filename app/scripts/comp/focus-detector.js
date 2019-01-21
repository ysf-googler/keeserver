const FeatureDetector = require('../util/feature-detector');
const Launcher = require('../comp/launcher');

const FocusDetector = {
    init() {
        this.isFocused = true;
        this.detectsFocusWithEvents = !FeatureDetector.isDesktop && !FeatureDetector.isMobile;
        if (this.detectsFocusWithEvents) {
            window.onblur = () => { this.isFocused = false; };
            window.onfocus = () => { this.isFocused = true; };
        }
    },

    hasFocus() {
        if (this.detectsFocusWithEvents) {
            return this.isFocused;
        } else if (Launcher) {
            return Launcher.isAppFocused();
        } else {
            return true;
        }
    }
};

module.exports = FocusDetector;
