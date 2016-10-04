/**
 * core.js
 *
 * A bunch of utility methods for working with the DOM and JS objects
 */

const core = {

    /**
     * Convert a NodeList to an Array
     *
     * @param nodeList {NodeList}
     * @returns {Array}
     * @private
     */
    _nodeListToArray: function(nodeList) {
        const elArray = [];
        for (let i = nodeList.length; i--; elArray.unshift(nodeList[i]));
        return elArray;
    },

    /**
     * Replace any new line or multiple spaces with a single space
     *
     * @param string {string}
     * @return {string}
     */
    trimNewLines: function(string) {
        //   /(\r\n|\n|\r)\s{2,}/gm
        return string.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s{2,}/g, ' ');
    },

    /**
     * Combine multiple objects. Mutates the first object.
     *
     * @returns {Object}
     */
    extend: function() {
        for (let i = 1; i < arguments.length; i++)
            for (const key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    },

    /**
     * Combine two objects and any sub-properties recursively
     *
     * @param target
     * @param src
     *
     * @returns {boolean|Array|{}}
     */
    extendDeep: function(target, src) {

        if (!src) return target;

        const that = this;
        const array = Array.isArray(src);
        let dst = array && [] || {};

        if (array) {
            target = target || [];
            dst = dst.concat(target);
            src.forEach(function(e, i) {
                if (typeof dst[i] === 'undefined') {
                    dst[i] = e;
                } else if (typeof e === 'object') {
                    dst[i] = that.extendDeep(target[i], e);
                } else {
                    if (target.indexOf(e) === -1) {
                        dst.push(e);
                    }
                }
            });
        } else {
            if (target && typeof target === 'object') {
                Object.keys(target).forEach(function(key) {
                    dst[key] = target[key];
                });
            }
            Object.keys(src).forEach(function(key) {
                if (typeof src[key] !== 'object' || !src[key]) {
                    dst[key] = src[key];
                } else {
                    if (!target[key]) {
                        dst[key] = src[key];
                    } else {
                        dst[key] = that.extendDeep(target[key], src[key]);
                    }
                }
            });
        }

        return dst;
    },

    /**
     * Add an event to an element or an array of elements
     *
     * @param el        {Node|Array}       Element | Array of elements
     * @param eventType {String}           Event Type
     * @param cb        {Function}         Callback
     */
    on: function(el, eventType, cb) {
        const eventTypeList = eventType.split(' ');
        for (let i = 0; i < eventTypeList.length; i++) {
            if (Object.prototype.toString.call(el) === '[object Array]') {
                for (let j = 0; j < el.length; j++) {
                    el[j].addEventListener(eventTypeList[i], cb, false);
                }
            } else {
                el.addEventListener(eventTypeList[i], cb, false);
            }
        }
    },

    /**
     * Trigger an event on an element
     *
     * @param el
     * @param e
     */
    trigger: function(el, e) {
        if ('createEvent' in document) {
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent(e, false, true);
            el.dispatchEvent(evt);
        } else
            el.fireEvent('on' + e);
    },

    /**
     * Select a single DOM element
     *
     * @param selector  {String}
     * @param context   {Node}
     * @returns {Node}
     */
    select: function(selector, context) {
        context = context || document;
        return context.querySelector(selector);
    },

    /**
     * Select a list of DOM elements.
     *
     * @param selector {String}
     * @param context {Node}
     * @returns {Array}
     */
    selectAll: function(selector, context) {
        context = context || document;
        return this._nodeListToArray(context.querySelectorAll(selector));
    },

    /**
     * Return the text of an element.
     *
     * @param el {Node}
     * @returns {bool | string}
     */
    text: function(el) {
        return (typeof el === 'undefined' || el === null) ? false : el.innerText || el.textContent;
    },

    /**
     * Add a class to an element - browser compatible with old IE
     *
     * @param el
     * @param className
     * @returns {*}
     */
    addClass: function(el, className) {
        if (!el || !className) {
            return false;
        }

        if (el.classList) {
            return el.classList.add(className);
        }

        el.className = el.className + ' ' + className;
    },

    /**
     * Remove a class. Does not throw if class not present
     *
     * @param el
     * @param className
     * @returns {*}
     */
    removeClass: function(el, className) {
        if (!el || !className) {
            return false;
        }

        if (el.classList) {
            return el.classList.remove(className);
        }

        const regexp = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
        el.className = el.className.replace(regexp, '$2');
    },

    /**
     * Check if an element has a class
     *
     * @param el
     * @param className
     * @returns {boolean}
     */
    hasClass: function(el, className) {
        if (!el || !className) {
            return false;
        }

        if (el.classList) {
            return el.classList.contains(className);
        }

        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },

    /**
     * Toggle class name.
     * If `value` is not provided, the class will be toggled based on its presence.
     * If `value` is provided, the class will be added if `value` is true, and removed otherwise.
     *
     * @param el
     * @param className
     * @param value An optional value
     */
    toggleClass: function(el, className, value) {
        const add = typeof value === 'boolean' ?
            value :
            !this.hasClass(el, className);

        if (add) {
            this.addClass(el, className);
        } else {
            this.removeClass(el, className);
        }
    },

    /**
     * Validate an email address
     *
     * @param email
     * @returns {boolean}
     */
    validateEmail: function(email) {
        if (!email.match) {
            return false;
        }

        return !!email.match(new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?'));
    },

    /**
     * Return the selected child node by passing a class, id or node name / currently only supports one class name at a time
     *
     * @param containing element
     * @param element tag reference
     * @returns {element_node / Array}
     */
    children: function(parentNode, requestedChild) {
        const requestedChildNodes = parentNode.childNodes;
        const returnData = [];

        // Remove the extra identifiers
        requestedChild = requestedChild.replace('.', '').replace('#', '');

        for (let i = (requestedChildNodes.length - 1), end = 0; i >= end; --i) {
            // Only loop through elements, not text or comment blocks
            if (requestedChildNodes[i].nodeType === 1) {
                // Add any element_nodes to the list
                if (requestedChildNodes[i].nodeName.toLowerCase() === requestedChild ||
                    this.hasClass(requestedChildNodes[i], requestedChild) ||
                    requestedChildNodes[i].getAttribute('id') === requestedChild) {
                    // Create array of matching elements
                    returnData.unshift(requestedChildNodes[i]);
                }
            }
        }

        // If only one element_node found just return, otherwise return array
        return (returnData.length === 1) ? returnData[0] : returnData;
    },

    /**
     * Check if two strings are the same
     *
     * @param string1
     * @param string2
     * @returns {boolean}
     */
    matchStrings: function(string1, string2) {
        if (string1 === string2) {
            return true;
        }
        return false;
    },

    /**
     * Add classes to <html> to indicate if js is enabled
     */
    detectJs: function() {
        const html = document.getElementsByTagName('html');
        this.removeClass(html[0], 'no-js');
        this.addClass(html[0], 'js');
    },

    insertAfter: function(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    },

    containsNull: function(obj) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop) && obj[prop] === null) return true;
        }
        return false;
    },

    /**
     * Get the position of an element relative to the document
     *
     * @param elem
     * @returns {number}
     */
    getTruePositionFromTop: function(elem) {
        let offsetTop = 0;
        do {
            if (!isNaN(elem.offsetTop)) {
                offsetTop += elem.offsetTop;
            }
        } while (elem = elem.offsetParent);

        return offsetTop;
    }
};

module.exports = core;
