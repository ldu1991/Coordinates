'use strict';

(function () {

  function Coordinates(element) {

    if (typeof (element) === 'undefined') {
      return
    }

    if (typeof (element) !== 'object' && typeof (element) === 'string') {
      element = document.querySelector(element)
    }

    if(element === null) {
      return
    }

    if(!(element instanceof HTMLElement)) {
      if(element.length !== 0) {
        element = element.get(0)
      } else {
        return
      }
    }

    function isVisible(element) {
      let style = window.getComputedStyle(element);
      return style.display !== 'none';
    }

    function getCoordinates(element, visible) {
      let rect = {}, box, v;
      box = element.getBoundingClientRect();
      v = visible || false;

      if (v) {
        if (element.hasAttribute('data-style-attribute-coordinates')) {
          element.style.cssText = element.dataset.styleAttributeCoordinates;
          element.removeAttribute('data-style-attribute-coordinates');
        } else {
          element.removeAttribute('style');
        }
      }

      rect.element = element;
      rect.top = box.top;
      rect.right = document.documentElement.clientWidth - box.right;
      rect.bottom = document.documentElement.clientHeight - box.bottom;
      rect.left = box.left;
      rect.width = box.width;
      rect.height = box.height;

      return rect;
    }

    if (!isVisible(element)) {

      if (element.hasAttribute('style')) {
        element.dataset.styleAttributeCoordinates = element.getAttribute('style');
        element.style.cssText = 'display: block; opacity: 0;' + element.getAttribute('style');
        return getCoordinates(element, true);
      } else {
        element.style.cssText = 'display: block; opacity: 0;';
        return getCoordinates(element, true);
      }

    } else {
      return getCoordinates(element);
    }

  }

  window.Coordinates = Coordinates;

})();