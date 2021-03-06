/*!
 * CoreUI Pro  v3.0.0-rc.0 (https://coreui.io)
 * Copyright 2020 Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).coreui = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function e(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function n(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(r), !0).forEach((function(e) {
                n(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }
    var o, s, a, l = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        c = function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null
            }
            return e
        },
        u = function(t) {
            var e = c(t);
            return e && document.querySelector(e) ? e : null
        },
        f = function(t) {
            var e = c(t);
            return e ? document.querySelector(e) : null
        },
        h = function(t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        d = function(t) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent("transitionend", !0, !0), t.dispatchEvent(e)
        },
        p = function(t) {
            return (t[0] || t).nodeType
        },
        g = function(t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function() {
                n || d(t)
            }), i)
        },
        m = function(t, e, n) {
            Object.keys(n).forEach((function(i) {
                var r, o = n[i],
                    s = e[i],
                    a = s && p(s) ? "element" : (r = s, {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
            }))
        },
        v = function(t) {
            return t ? [].slice.call(t) : []
        },
        _ = function(t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        },
        b = function() {
            return function() {}
        },
        y = function(t) {
            return t.offsetHeight
        },
        E = function() {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-no-jquery") ? t : null
        },
        w = (o = {}, s = 1, {
            set: function(t, e, n) {
                "undefined" == typeof t.key && (t.key = {
                    key: e,
                    id: s
                }, s++), o[t.key.id] = n
            },
            get: function(t, e) {
                if (!t || "undefined" == typeof t.key) return null;
                var n = t.key;
                return n.key === e ? o[n.id] : null
            },
            delete: function(t, e) {
                if ("undefined" != typeof t.key) {
                    var n = t.key;
                    n.key === e && (delete o[n.id], delete t.key)
                }
            }
        }),
        A = function(t, e, n) {
            w.set(t, e, n)
        },
        L = function(t, e) {
            return w.get(t, e)
        },
        S = function(t, e) {
            w.delete(t, e)
        },
        T = Element.prototype,
        D = T.matches,
        I = T.closest,
        O = Element.prototype.querySelectorAll,
        C = Element.prototype.querySelector,
        N = function(t, e) {
            return new CustomEvent(t, e)
        };
    if ("function" != typeof window.CustomEvent && (N = function(t, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: null
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
    }), !((a = document.createEvent("CustomEvent")).initEvent("Bootstrap", !0, !0), a.preventDefault(), a.defaultPrevented)) {
        var k = Event.prototype.preventDefault;
        Event.prototype.preventDefault = function() {
            this.cancelable && (k.call(this), Object.defineProperty(this, "defaultPrevented", {
                get: function() {
                    return !0
                },
                configurable: !0
            }))
        }
    }
    var P = function() {
        var t = N("Bootstrap", {
                cancelable: !0
            }),
            e = document.createElement("div");
        return e.addEventListener("Bootstrap", (function() {
            return null
        })), t.preventDefault(), e.dispatchEvent(t), t.defaultPrevented
    }();
    D || (D = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), I || (I = function(t) {
        var e = this;
        do {
            if (D.call(e, t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    });
    var H = /:scope\b/;
    (function() {
        var t = document.createElement("div");
        try {
            t.querySelectorAll(":scope *")
        } catch (t) {
            return !1
        }
        return !0
    })() || (O = function(t) {
        if (!H.test(t)) return this.querySelectorAll(t);
        var e = Boolean(this.id);
        e || (this.id = l("scope"));
        var n = null;
        try {
            t = t.replace(H, "#" + this.id), n = this.querySelectorAll(t)
        } finally {
            e || this.removeAttribute("id")
        }
        return n
    }, C = function(t) {
        if (!H.test(t)) return this.querySelector(t);
        var e = O.call(this, t);
        return "undefined" != typeof e[0] ? e[0] : null
    });
    var R = E(),
        W = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        M = /^key/,
        Y = /::\d+$/,
        j = {},
        X = 1,
        B = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        U = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

    function K(t, e) {
        return e && e + "::" + X++ || t.uidEvent || X++
    }

    function F(t) {
        var e = K(t);
        return t.uidEvent = e, j[e] = j[e] || {}, j[e]
    }

    function V(t, e) {
        null === t.which && M.test(t.type) && (t.which = null === t.charCode ? t.keyCode : t.charCode), t.delegateTarget = e
    }

    function Q(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), r = 0, o = i.length; r < o; r++) {
            var s = t[i[r]];
            if (s.originalHandler === e && s.delegationSelector === n) return s
        }
        return null
    }

    function q(t, e, n) {
        var i = "string" == typeof e,
            r = i ? n : e,
            o = t.replace(x, ""),
            s = B[o];
        return s && (o = s), U.indexOf(o) > -1 || (o = t), [i, r, o]
    }

    function G(t, e, n, i, r) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var o = q(e, n, i),
                s = o[0],
                a = o[1],
                l = o[2],
                c = F(t),
                u = c[l] || (c[l] = {}),
                f = Q(u, a, s ? n : null);
            if (f) f.oneOff = f.oneOff && r;
            else {
                var h = K(a, e.replace(W, "")),
                    d = s ? function(t, e, n) {
                        return function i(r) {
                            for (var o = t.querySelectorAll(e), s = r.target; s && s !== this; s = s.parentNode)
                                for (var a = o.length; a--;)
                                    if (o[a] === s) return V(r, s), i.oneOff && Z.off(t, r.type, n), n.apply(s, [r]);
                            return null
                        }
                    }(t, n, i) : function(t, e) {
                        return function n(i) {
                            return V(i, t), n.oneOff && Z.off(t, i.type, e), e.apply(t, [i])
                        }
                    }(t, n);
                d.delegationSelector = s ? n : null, d.originalHandler = a, d.oneOff = r, d.uidEvent = h, u[h] = d, t.addEventListener(l, d, s)
            }
        }
    }

    function z(t, e, n, i, r) {
        var o = Q(e[n], i, r);
        o && (t.removeEventListener(n, o, Boolean(r)), delete e[n][o.uidEvent])
    }
    var Z = {
            on: function(t, e, n, i) {
                G(t, e, n, i, !1)
            },
            one: function(t, e, n, i) {
                G(t, e, n, i, !0)
            },
            off: function(t, e, n, i) {
                if ("string" == typeof e && t) {
                    var r = q(e, n, i),
                        o = r[0],
                        s = r[1],
                        a = r[2],
                        l = a !== e,
                        c = F(t),
                        u = "." === e.charAt(0);
                    if ("undefined" == typeof s) {
                        u && Object.keys(c).forEach((function(n) {
                            ! function(t, e, n, i) {
                                var r = e[n] || {};
                                Object.keys(r).forEach((function(o) {
                                    if (o.indexOf(i) > -1) {
                                        var s = r[o];
                                        z(t, e, n, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, c, n, e.slice(1))
                        }));
                        var f = c[a] || {};
                        Object.keys(f).forEach((function(n) {
                            var i = n.replace(Y, "");
                            if (!l || e.indexOf(i) > -1) {
                                var r = f[n];
                                z(t, c, a, r.originalHandler, r.delegationSelector)
                            }
                        }))
                    } else {
                        if (!c || !c[a]) return;
                        z(t, c, a, s, o ? n : null)
                    }
                }
            },
            trigger: function(t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i, r = e.replace(x, ""),
                    o = e !== r,
                    s = U.indexOf(r) > -1,
                    a = !0,
                    l = !0,
                    c = !1,
                    u = null;
                return o && R && (i = R.Event(e, n), R(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(r, a, !0) : u = N(e, {
                    bubbles: a,
                    cancelable: !0
                }), "undefined" != typeof n && Object.keys(n).forEach((function(t) {
                    Object.defineProperty(u, t, {
                        get: function() {
                            return n[t]
                        }
                    })
                })), c && (u.preventDefault(), P || Object.defineProperty(u, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                })), l && t.dispatchEvent(u), u.defaultPrevented && "undefined" != typeof i && i.preventDefault(), u
            }
        },
        $ = "asyncLoad",
        J = {
            ACTIVE: "c-active",
            NAV_DROPDOWN_TOGGLE: "c-sidebar-nav-dropdown-toggle",
            SHOW: "c-show",
            VIEW_SCRIPT: "view-script"
        },
        tt = {
            CLICK_DATA_API: "click.coreui.asyncLoad.data-api",
            XHR_STATUS: "xhr"
        },
        et = ".c-sidebar-nav-dropdown",
        nt = ".c-xhr-link, .c-sidebar-nav-link",
        it = ".c-sidebar-nav-item",
        rt = ".view-script",
        ot = {
            defaultPage: "main.html",
            errorPage: "404.html",
            subpagesDirectory: "views/"
        },
        st = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t;
                var n = location.hash.replace(/^#/, "");
                "" !== n ? this._setUpUrl(n) : this._setUpUrl(this._config.defaultPage), this._addEventListeners()
            }
            var n = t.prototype;
            return n._getConfig = function(t) {
                return t = r({}, ot, {}, t)
            }, n._loadPage = function(t) {
                var e = this,
                    n = this._element,
                    i = this._config,
                    r = new XMLHttpRequest;
                r.open("GET", i.subpagesDirectory + t);
                var o = new CustomEvent(tt.XHR_STATUS, {
                    detail: {
                        url: t,
                        status: r.status
                    }
                });
                n.dispatchEvent(o), r.onload = function(s) {
                    if (200 === r.status) {
                        o = new CustomEvent(tt.XHR_STATUS, {
                            detail: {
                                url: t,
                                status: r.status
                            }
                        }), n.dispatchEvent(o);
                        var a = document.createElement("div");
                        a.innerHTML = s.target.response;
                        var l = Array.from(a.querySelectorAll("script")).map((function(t) {
                            return t.attributes.getNamedItem("src").nodeValue
                        }));
                        a.querySelectorAll("script").forEach((function(t) {
                            return t.remove(t)
                        })), window.scrollTo(0, 0), n.innerHTML = "", n.appendChild(a), (c = document.querySelectorAll(rt)).length && c.forEach((function(t) {
                            t.remove()
                        })), l.length && function t(n, i) {
                            void 0 === i && (i = 0);
                            var r = document.createElement("script");
                            r.type = "text/javascript", r.src = n[i], r.className = J.VIEW_SCRIPT, r.onload = r.onreadystatechange = function() {
                                e.readyState && "complete" !== e.readyState || n.length > i + 1 && t(n, i + 1)
                            }, document.getElementsByTagName("body")[0].appendChild(r)
                        }(l), window.location.hash = t
                    } else window.location.href = i.errorPage;
                    var c
                }, r.send()
            }, n._setUpUrl = function(t) {
                t = t.replace(/^\//, "").split("?")[0], Array.from(document.querySelectorAll(nt)).forEach((function(t) {
                    t.classList.remove(J.ACTIVE)
                })), Array.from(document.querySelectorAll(nt)).forEach((function(t) {
                    t.classList.remove(J.ACTIVE)
                })), Array.from(document.querySelectorAll(et)).forEach((function(t) {
                    t.classList.remove(J.SHOW)
                })), Array.from(document.querySelectorAll(et)).forEach((function(e) {
                    Array.from(e.querySelectorAll('a[href*="' + t + '"]')).length > 0 && e.classList.add(J.SHOW)
                })), Array.from(document.querySelectorAll(it + ' a[href*="' + t + '"]')).forEach((function(t) {
                    t.classList.add(J.ACTIVE)
                })), this._loadPage(t)
            }, n._loadBlank = function(t) {
                window.open(t)
            }, n._loadTop = function(t) {
                window.location = t
            }, n._update = function(t) {
                "#" !== t.href && ("undefined" != typeof t.dataset.toggle && "null" !== t.dataset.toggle || ("_top" === t.target ? this._loadTop(t.href) : "_blank" === t.target ? this._loadBlank(t.href) : this._setUpUrl(t.getAttribute("href"))))
            }, n._addEventListeners = function() {
                var t = this;
                Z.on(document, tt.CLICK_DATA_API, nt, (function(e) {
                    e.preventDefault();
                    var n = e.target;
                    n.classList.contains(J.NAV_LINK) || (n = n.closest(nt)), n.classList.contains(J.NAV_DROPDOWN_TOGGLE) || "#" === n.getAttribute("href") || t._update(n)
                }))
            }, t._asyncLoadInterface = function(e, n) {
                var i = L(e, "coreui.asyncLoad");
                if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t._asyncLoadInterface(this, e)
                }))
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ot
                }
            }]), t
        }(),
        at = E();
    if (at) {
        var lt = at.fn[$];
        at.fn[$] = st.jQueryInterface, at.fn[$].Constructor = st, at.fn[$].noConflict = function() {
            return at.fn[$] = lt, st.jQueryInterface
        }
    }
    var ct = {
            matches: function(t, e) {
                return D.call(t, e)
            },
            find: function(t, e) {
                return void 0 === e && (e = document.documentElement), O.call(e, t)
            },
            findOne: function(t, e) {
                return void 0 === e && (e = document.documentElement), C.call(e, t)
            },
            children: function(t, e) {
                var n = this,
                    i = v(t.children);
                return i.filter((function(t) {
                    return n.matches(t, e)
                }))
            },
            parents: function(t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            },
            closest: function(t, e) {
                return I.call(t, e)
            },
            prev: function(t, e) {
                for (var n = [], i = t.previousSibling; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.previousSibling;
                return n
            }
        },
        ut = {
            CLOSE: "close.coreui.alert",
            CLOSED: "closed.coreui.alert",
            CLICK_DATA_API: "click.coreui.alert.data-api"
        },
        ft = "alert",
        ht = "fade",
        dt = "show",
        pt = function() {
            function t(t) {
                this._element = t, this._element && A(t, "coreui.alert", this)
            }
            var n = t.prototype;
            return n.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t));
                var n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e)
            }, n.dispose = function() {
                S(this._element, "coreui.alert"), this._element = null
            }, n._getRootElement = function(t) {
                var e = f(t);
                return e || (e = ct.closest(t, "." + ft)), e
            }, n._triggerCloseEvent = function(t) {
                return Z.trigger(t, ut.CLOSE)
            }, n._removeElement = function(t) {
                var e = this;
                if (t.classList.remove(dt), t.classList.contains(ht)) {
                    var n = h(t);
                    Z.one(t, "transitionend", (function() {
                        return e._destroyElement(t)
                    })), g(t, n)
                } else this._destroyElement(t)
            }, n._destroyElement = function(t) {
                t.parentNode && t.parentNode.removeChild(t), Z.trigger(t, ut.CLOSED)
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = L(this, "coreui.alert");
                    n || (n = new t(this)), "close" === e && n[e](this)
                }))
            }, t.handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, t.getInstance = function(t) {
                return L(t, "coreui.alert")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }]), t
        }();
    Z.on(document, ut.CLICK_DATA_API, '[data-dismiss="alert"]', pt.handleDismiss(new pt));
    var gt = E();
    if (gt) {
        var mt = gt.fn.alert;
        gt.fn.alert = pt.jQueryInterface, gt.fn.alert.Constructor = pt, gt.fn.alert.noConflict = function() {
            return gt.fn.alert = mt, pt.jQueryInterface
        }
    }
    var vt = "coreui.button",
        _t = "active",
        bt = "btn",
        yt = "focus",
        Et = '[data-toggle^="button"]',
        wt = '[data-toggle="buttons"]',
        At = 'input:not([type="hidden"])',
        Lt = ".active",
        St = ".btn",
        Tt = {
            CLICK_DATA_API: "click.coreui.button.data-api",
            FOCUS_DATA_API: "focus.coreui.button.data-api",
            BLUR_DATA_API: "blur.coreui.button.data-api"
        },
        Dt = function() {
            function t(t) {
                this._element = t, A(t, vt, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = !0,
                    e = !0,
                    n = ct.closest(this._element, wt);
                if (n) {
                    var i = ct.findOne(At, this._element);
                    if (i && "radio" === i.type) {
                        if (i.checked && this._element.classList.contains(_t)) t = !1;
                        else {
                            var r = ct.findOne(Lt, n);
                            r && r.classList.remove(_t)
                        }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(_t), Z.trigger(i, "change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_t)), t && this._element.classList.toggle(_t)
            }, n.dispose = function() {
                S(this._element, vt), this._element = null
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = L(this, vt);
                    n || (n = new t(this)), "toggle" === e && n[e]()
                }))
            }, t.getInstance = function(t) {
                return L(t, vt)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }]), t
        }();
    Z.on(document, Tt.CLICK_DATA_API, Et, (function(t) {
        t.preventDefault();
        var e = t.target;
        e.classList.contains(bt) || (e = ct.closest(e, St));
        var n = L(e, vt);
        n || (n = new Dt(e)), n.toggle()
    })), Z.on(document, Tt.FOCUS_DATA_API, Et, (function(t) {
        var e = ct.closest(t.target, St);
        e && e.classList.add(yt)
    })), Z.on(document, Tt.BLUR_DATA_API, Et, (function(t) {
        var e = ct.closest(t.target, St);
        e && e.classList.remove(yt)
    }));
    var It = E();
    if (It) {
        var Ot = It.fn.button;
        It.fn.button = Dt.jQueryInterface, It.fn.button.Constructor = Dt, It.fn.button.noConflict = function() {
            return It.fn.button = Ot, Dt.jQueryInterface
        }
    }

    function Ct(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function Nt(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }))
    }
    var kt = {
            setDataAttribute: function(t, e, n) {
                t.setAttribute("data-" + Nt(e), n)
            },
            removeDataAttribute: function(t, e) {
                t.removeAttribute("data-" + Nt(e))
            },
            getDataAttributes: function(t) {
                if (!t) return {};
                var e = r({}, t.dataset);
                return Object.keys(e).forEach((function(t) {
                    e[t] = Ct(e[t])
                })), e
            },
            getDataAttribute: function(t, e) {
                return Ct(t.getAttribute("data-" + Nt(e)))
            },
            offset: function(t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: function(t) {
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft
                }
            },
            toggleClass: function(t, e) {
                t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e))
            }
        },
        Pt = "carousel",
        Ht = "coreui.carousel",
        Rt = "." + Ht,
        Wt = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        xt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        Mt = "next",
        Yt = "prev",
        jt = "left",
        Xt = "right",
        Bt = {
            SLIDE: "slide" + Rt,
            SLID: "slid" + Rt,
            KEYDOWN: "keydown" + Rt,
            MOUSEENTER: "mouseenter" + Rt,
            MOUSELEAVE: "mouseleave" + Rt,
            TOUCHSTART: "touchstart" + Rt,
            TOUCHMOVE: "touchmove" + Rt,
            TOUCHEND: "touchend" + Rt,
            POINTERDOWN: "pointerdown" + Rt,
            POINTERUP: "pointerup" + Rt,
            DRAG_START: "dragstart" + Rt,
            LOAD_DATA_API: "load" + Rt + ".data-api",
            CLICK_DATA_API: "click" + Rt + ".data-api"
        },
        Ut = "carousel",
        Kt = "active",
        Ft = "slide",
        Vt = "carousel-item-right",
        Qt = "carousel-item-left",
        qt = "carousel-item-next",
        Gt = "carousel-item-prev",
        zt = "pointer-event",
        Zt = ".active",
        $t = ".active.carousel-item",
        Jt = ".carousel-item",
        te = ".carousel-item img",
        ee = ".carousel-item-next, .carousel-item-prev",
        ne = ".carousel-indicators",
        ie = "[data-slide], [data-slide-to]",
        re = '[data-ride="carousel"]',
        oe = {
            TOUCH: "touch",
            PEN: "pen"
        },
        se = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = ct.findOne(ne, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(), A(t, Ht, this)
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide(Mt)
            }, n.nextWhenVisible = function() {
                !document.hidden && _(this._element) && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(Yt)
            }, n.pause = function(t) {
                t || (this._isPaused = !0), ct.findOne(ee, this._element) && (d(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(t) {
                var e = this;
                this._activeElement = ct.findOne($t, this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) Z.one(this._element, Bt.SLID, (function() {
                        return e.to(t)
                    }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? Mt : Yt;
                        this._slide(i, this._items[t])
                    }
            }, n.dispose = function() {
                Z.off(this._element, Rt), S(this._element, Ht), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(t) {
                return t = r({}, Wt, {}, t), m(Pt, t, xt), t
            }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var t = this;
                this._config.keyboard && Z.on(this._element, Bt.KEYDOWN, (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && (Z.on(this._element, Bt.MOUSEENTER, (function(e) {
                    return t.pause(e)
                })), Z.on(this._element, Bt.MOUSELEAVE, (function(e) {
                    return t.cycle(e)
                }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var t = this,
                    e = function(e) {
                        t._pointerEvent && oe[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                    },
                    n = function(e) {
                        t._pointerEvent && oe[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                            return t.cycle(e)
                        }), 500 + t._config.interval))
                    };
                v(ct.find(te, this._element)).forEach((function(t) {
                    Z.on(t, Bt.DRAG_START, (function(t) {
                        return t.preventDefault()
                    }))
                })), this._pointerEvent ? (Z.on(this._element, Bt.POINTERDOWN, (function(t) {
                    return e(t)
                })), Z.on(this._element, Bt.POINTERUP, (function(t) {
                    return n(t)
                })), this._element.classList.add(zt)) : (Z.on(this._element, Bt.TOUCHSTART, (function(t) {
                    return e(t)
                })), Z.on(this._element, Bt.TOUCHMOVE, (function(e) {
                    return function(e) {
                        e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                    }(e)
                })), Z.on(this._element, Bt.TOUCHEND, (function(t) {
                    return n(t)
                })))
            }, n._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? v(ct.find(Jt, t.parentNode)) : [], this._items.indexOf(t)
            }, n._getItemByDirection = function(t, e) {
                var n = t === Mt,
                    i = t === Yt,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                var s = (r + (t === Yt ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(ct.findOne($t, this._element));
                return Z.trigger(this._element, Bt.SLIDE, {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                })
            }, n._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    for (var e = ct.find(Zt, this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove(Kt);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add(Kt)
                }
            }, n._slide = function(t, e) {
                var n, i, r, o = this,
                    s = ct.findOne($t, this._element),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (t === Mt ? (n = Qt, i = qt, r = jt) : (n = Vt, i = Gt, r = Xt), l && l.classList.contains(Kt)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).defaultPrevented && s && l) {
                    if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains(Ft)) {
                        l.classList.add(i), y(l), s.classList.add(n), l.classList.add(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = h(s);
                        Z.one(s, "transitionend", (function() {
                            l.classList.remove(n), l.classList.remove(i), l.classList.add(Kt), s.classList.remove(Kt), s.classList.remove(i), s.classList.remove(n), o._isSliding = !1, setTimeout((function() {
                                Z.trigger(o._element, Bt.SLID, {
                                    relatedTarget: l,
                                    direction: r,
                                    from: a,
                                    to: c
                                })
                            }), 0)
                        })), g(s, d)
                    } else s.classList.remove(Kt), l.classList.add(Kt), this._isSliding = !1, Z.trigger(this._element, Bt.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: c
                    });
                    u && this.cycle()
                }
            }, t.carouselInterface = function(e, n) {
                var i = L(e, Ht),
                    o = r({}, Wt, {}, kt.getDataAttributes(e));
                "object" == typeof n && (o = r({}, o, {}, n));
                var s = "string" == typeof n ? n : o.slide;
                if (i || (i = new t(e, o)), "number" == typeof n) i.to(n);
                else if ("string" == typeof s) {
                    if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else o.interval && o.ride && (i.pause(), i.cycle())
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t.carouselInterface(this, e)
                }))
            }, t.dataApiClickHandler = function(e) {
                var n = f(this);
                if (n && n.classList.contains(Ut)) {
                    var i = r({}, kt.getDataAttributes(n), {}, kt.getDataAttributes(this)),
                        o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), t.carouselInterface(n, i), o && L(n, Ht).to(o), e.preventDefault()
                }
            }, t.getInstance = function(t) {
                return L(t, Ht)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Wt
                }
            }]), t
        }();
    Z.on(document, Bt.CLICK_DATA_API, ie, se.dataApiClickHandler), Z.on(window, Bt.LOAD_DATA_API, (function() {
        for (var t = v(ct.find(re)), e = 0, n = t.length; e < n; e++) se.carouselInterface(t[e], L(t[e], Ht))
    }));
    var ae = E();
    if (ae) {
        var le = ae.fn[Pt];
        ae.fn[Pt] = se.jQueryInterface, ae.fn[Pt].Constructor = se, ae.fn[Pt].noConflict = function() {
            return ae.fn[Pt] = le, se.jQueryInterface
        }
    }
    var ce = "class-toggler",
        ue = "-sm,-md,-lg,-xl",
        fe = "-show",
        he = !1,
        de = "body",
        pe = "c-class-toggler",
        ge = {
            CLASS_TOGGLE: "classtoggle",
            CLICK_DATA_API: "click.coreui.class-toggler.data-api"
        },
        me = ".c-class-toggler",
        ve = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = this;
                this._getElementDataAttributes(this._element).forEach((function(e) {
                    var n, i = e.target,
                        r = e.toggle;
                    n = "_parent" === i || "parent" === i ? t._element.parentNode : document.querySelector(i), r.forEach((function(e) {
                        var r = e.className,
                            o = e.responsive,
                            s = e.postfix,
                            a = "undefined" == typeof e.breakpoints || null === e.breakpoints ? null : t._arrayFromString(e.breakpoints);
                        if (o) {
                            var l;
                            a.forEach((function(t) {
                                r.includes(t) && (l = t)
                            }));
                            var c = [];
                            "undefined" == typeof l ? c.push(r) : (c.push(r.replace("" + l + s, s)), a.splice(0, a.indexOf(l) + 1).forEach((function(t) {
                                c.push(r.replace("" + l + s, "" + t + s))
                            })));
                            var u = !1;
                            if (c.forEach((function(t) {
                                n.classList.contains(t) && (u = !0)
                            })), u) c.forEach((function(t) {
                                n.classList.remove(t);
                                var e = new CustomEvent(ge.CLASS_TOGGLE, {
                                    detail: {
                                        target: i,
                                        className: t
                                    }
                                });
                                n.dispatchEvent(e)
                            }));
                            else {
                                n.classList.add(r);
                                var f = new CustomEvent(ge.CLASS_TOGGLE, {
                                    detail: {
                                        target: i,
                                        className: r
                                    }
                                });
                                n.dispatchEvent(f)
                            }
                        } else {
                            n.classList.toggle(r);
                            var h = new CustomEvent(ge.CLASS_TOGGLE, {
                                detail: {
                                    target: i,
                                    className: r
                                }
                            });
                            n.dispatchEvent(h)
                        }
                    }))
                }))
            }, n._arrayFromString = function(t) {
                return t.replace(/ /g, "").split(",")
            }, n._isArray = function(t) {
                try {
                    return JSON.parse(t.replace(/'/g, '"')), !0
                } catch (t) {
                    return !1
                }
            }, n._convertToArray = function(t) {
                return JSON.parse(t.replace(/'/g, '"'))
            }, n._getDataAttributes = function(t, e) {
                var n = t[e];
                return this._isArray(n) ? this._convertToArray(n) : n
            }, n._getToggleDetails = function(t, e, n, i) {
                var r = function(t, e, n, i) {
                        void 0 === e && (e = he), this.className = t, this.responsive = e, this.breakpoints = n, this.postfix = i
                    },
                    o = [];
                return Array.isArray(t) ? t.forEach((function(t, s) {
                    e = Array.isArray(e) ? e[s] : e, n = e ? Array.isArray(n) ? n[s] : n : null, i = e ? Array.isArray(i) ? i[s] : i : null, o.push(new r(t, e, n, i))
                })) : (n = e ? n : null, i = e ? i : null, o.push(new r(t, e, n, i))), o
            }, n._ifArray = function(t, e) {
                return Array.isArray(t) ? t[e] : t
            }, n._getElementDataAttributes = function(t) {
                var e = this,
                    n = t.dataset,
                    i = "undefined" == typeof n.target ? de : this._getDataAttributes(n, "target"),
                    r = "undefined" == typeof n.class ? "undefined" : this._getDataAttributes(n, "class"),
                    o = "undefined" == typeof n.responsive ? he : this._getDataAttributes(n, "responsive"),
                    s = "undefined" == typeof n.breakpoints ? ue : this._getDataAttributes(n, "breakpoints"),
                    a = "undefined" == typeof n.postfix ? fe : this._getDataAttributes(n, "postfix"),
                    l = [],
                    c = function(t, e) {
                        this.target = t, this.toggle = e
                    };
                return Array.isArray(i) ? i.forEach((function(t, n) {
                    l.push(new c(t, e._getToggleDetails(e._ifArray(r, n), e._ifArray(o, n), e._ifArray(s, n), e._ifArray(a, n))))
                })) : l.push(new c(i, this._getToggleDetails(r, o, s, a))), l
            }, t._classTogglerInterface = function(e, n) {
                var i = L(e, "coreui.class-toggler");
                if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t._classTogglerInterface(this, e)
                }))
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }]), t
        }();
    Z.on(document, ge.CLICK_DATA_API, me, (function(t) {
        t.preventDefault();
        var e = t.target;
        e.classList.contains(pe) || (e = e.closest(me)), ve._classTogglerInterface(e, "toggle")
    }));
    var _e = E();
    if (_e) {
        var be = _e.fn[ce];
        _e.fn[ce] = ve.jQueryInterface, _e.fn[ce].Constructor = ve, _e.fn[ce].noConflict = function() {
            return _e.fn[ce] = be, ve.jQueryInterface
        }
    }
    var ye = "collapse",
        Ee = "coreui.collapse",
        we = "." + Ee,
        Ae = {
            toggle: !0,
            parent: ""
        },
        Le = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Se = {
            SHOW: "show" + we,
            SHOWN: "shown" + we,
            HIDE: "hide" + we,
            HIDDEN: "hidden" + we,
            CLICK_DATA_API: "click" + we + ".data-api"
        },
        Te = "show",
        De = "collapse",
        Ie = "collapsing",
        Oe = "collapsed",
        Ce = "width",
        Ne = "height",
        ke = ".show, .collapsing",
        Pe = '[data-toggle="collapse"]',
        He = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = v(ct.find('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = v(ct.find(Pe)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = u(o),
                        a = v(ct.find(s)).filter((function(e) {
                            return e === t
                        }));
                    null !== s && a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), A(t, Ee, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                this._element.classList.contains(Te) ? this.hide() : this.show()
            }, n.show = function() {
                var e = this;
                if (!this._isTransitioning && !this._element.classList.contains(Te)) {
                    var n, i;
                    this._parent && 0 === (n = v(ct.find(ke, this._parent)).filter((function(t) {
                        return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains(De)
                    }))).length && (n = null);
                    var r = ct.findOne(this._selector);
                    if (n) {
                        var o = n.filter((function(t) {
                            return r !== t
                        }));
                        if ((i = o[0] ? L(o[0], Ee) : null) && i._isTransitioning) return
                    }
                    if (!Z.trigger(this._element, Se.SHOW).defaultPrevented) {
                        n && n.forEach((function(e) {
                            r !== e && t.collapseInterface(e, "hide"), i || A(e, Ee, null)
                        }));
                        var s = this._getDimension();
                        this._element.classList.remove(De), this._element.classList.add(Ie), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function(t) {
                            t.classList.remove(Oe), t.setAttribute("aria-expanded", !0)
                        })), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = h(this._element);
                        Z.one(this._element, "transitionend", (function() {
                            e._element.classList.remove(Ie), e._element.classList.add(De), e._element.classList.add(Te), e._element.style[s] = "", e.setTransitioning(!1), Z.trigger(e._element, Se.SHOWN)
                        })), g(this._element, l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, n.hide = function() {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains(Te) && !Z.trigger(this._element, Se.HIDE).defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", y(this._element), this._element.classList.add(Ie), this._element.classList.remove(De), this._element.classList.remove(Te);
                    var n = this._triggerArray.length;
                    if (n > 0)
                        for (var i = 0; i < n; i++) {
                            var r = this._triggerArray[i],
                                o = f(r);
                            o && !o.classList.contains(Te) && (r.classList.add(Oe), r.setAttribute("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[e] = "";
                    var s = h(this._element);
                    Z.one(this._element, "transitionend", (function() {
                        t.setTransitioning(!1), t._element.classList.remove(Ie), t._element.classList.add(De), Z.trigger(t._element, Se.HIDDEN)
                    })), g(this._element, s)
                }
            }, n.setTransitioning = function(t) {
                this._isTransitioning = t
            }, n.dispose = function() {
                S(this._element, Ee), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(t) {
                return (t = r({}, Ae, {}, t)).toggle = Boolean(t.toggle), m(ye, t, Le), t
            }, n._getDimension = function() {
                return this._element.classList.contains(Ce) ? Ce : Ne
            }, n._getParent = function() {
                var t = this,
                    e = this._config.parent;
                p(e) ? "undefined" == typeof e.jquery && "undefined" == typeof e[0] || (e = e[0]) : e = ct.findOne(e);
                var n = '[data-toggle="collapse"][data-parent="' + e + '"]';
                return v(ct.find(n, e)).forEach((function(e) {
                    var n = f(e);
                    t._addAriaAndCollapsedClass(n, [e])
                })), e
            }, n._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = t.classList.contains(Te);
                    e.length && e.forEach((function(t) {
                        n ? t.classList.remove(Oe) : t.classList.add(Oe), t.setAttribute("aria-expanded", n)
                    }))
                }
            }, t.collapseInterface = function(e, n) {
                var i = L(e, Ee),
                    o = r({}, Ae, {}, kt.getDataAttributes(e), {}, "object" == typeof n && n ? n : {});
                if (!i && o.toggle && /show|hide/.test(n) && (o.toggle = !1), i || (i = new t(e, o)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t.collapseInterface(this, e)
                }))
            }, t.getInstance = function(t) {
                return L(t, Ee)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ae
                }
            }]), t
        }();
    Z.on(document, Se.CLICK_DATA_API, Pe, (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = kt.getDataAttributes(this),
            n = u(this);
        v(ct.find(n)).forEach((function(t) {
            var n, i = L(t, Ee);
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, He.collapseInterface(t, n)
        }))
    }));
    var Re = E();
    if (Re) {
        var We = Re.fn[ye];
        Re.fn[ye] = He.jQueryInterface, Re.fn[ye].Constructor = He, Re.fn[ye].noConflict = function() {
            return Re.fn[ye] = We, He.jQueryInterface
        }
    }
    var xe = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        Me = function() {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (xe && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0
        }();
    var Ye = xe && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0, window.Promise.resolve().then((function() {
                e = !1, t()
            })))
        }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout((function() {
                e = !1, t()
            }), Me))
        }
    };

    function je(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function Xe(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function Be(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function Ue(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Xe(t),
            n = e.overflow,
            i = e.overflowX,
            r = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? t : Ue(Be(t))
    }

    function Ke(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }
    var Fe = xe && !(!window.MSInputMethodContext || !document.documentMode),
        Ve = xe && /MSIE 10/.test(navigator.userAgent);

    function Qe(t) {
        return 11 === t ? Fe : 10 === t ? Ve : Fe || Ve
    }

    function qe(t) {
        if (!t) return document.documentElement;
        for (var e = Qe(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Xe(n, "position") ? qe(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Ge(t) {
        return null !== t.parentNode ? Ge(t.parentNode) : t
    }

    function ze(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && qe(s.firstElementChild) !== s ? qe(l) : l;
        var c = Ge(t);
        return c.host ? ze(c.host, e) : ze(t, Ge(e).host)
    }

    function Ze(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var r = t.ownerDocument.documentElement,
                o = t.ownerDocument.scrollingElement || r;
            return o[n]
        }
        return t[n]
    }

    function $e(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = Ze(e, "top"),
            r = Ze(e, "left"),
            o = n ? -1 : 1;
        return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
    }

    function Je(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
    }

    function tn(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Qe(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function en(t) {
        var e = t.body,
            n = t.documentElement,
            i = Qe(10) && getComputedStyle(n);
        return {
            height: tn("Height", e, n, i),
            width: tn("Width", e, n, i)
        }
    }
    var nn = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        rn = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        on = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        sn = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function an(t) {
        return sn({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function ln(t) {
        var e = {};
        try {
            if (Qe(10)) {
                e = t.getBoundingClientRect();
                var n = Ze(t, "top"),
                    i = Ze(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var r = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            o = "HTML" === t.nodeName ? en(t.ownerDocument) : {},
            s = o.width || t.clientWidth || r.width,
            a = o.height || t.clientHeight || r.height,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var u = Xe(t);
            l -= Je(u, "x"), c -= Je(u, "y"), r.width -= l, r.height -= c
        }
        return an(r)
    }

    function cn(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = Qe(10),
            r = "HTML" === e.nodeName,
            o = ln(t),
            s = ln(e),
            a = Ue(t),
            l = Xe(e),
            c = parseFloat(l.borderTopWidth),
            u = parseFloat(l.borderLeftWidth);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = an({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop),
                d = parseFloat(l.marginLeft);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (f = $e(f, e)), f
    }

    function un(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = cn(t, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            s = e ? 0 : Ze(n),
            a = e ? 0 : Ze(n, "left"),
            l = {
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            };
        return an(l)
    }

    function fn(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === Xe(t, "position")) return !0;
        var n = Be(t);
        return !!n && fn(n)
    }

    function hn(t) {
        if (!t || !t.parentElement || Qe()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === Xe(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function dn(t, e, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? hn(t) : ze(t, Ke(e));
        if ("viewport" === i) o = un(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Ue(Be(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = cn(a, s, r);
            if ("HTML" !== a.nodeName || fn(s)) o = l;
            else {
                var c = en(t.ownerDocument),
                    u = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        var h = "number" == typeof(n = n || 0);
        return o.left += h ? n : n.left || 0, o.top += h ? n : n.top || 0, o.right -= h ? n : n.right || 0, o.bottom -= h ? n : n.bottom || 0, o
    }

    function pn(t) {
        return t.width * t.height
    }

    function gn(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = dn(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map((function(t) {
                return sn({
                    key: t
                }, a[t], {
                    area: pn(a[t])
                })
            })).sort((function(t, e) {
                return e.area - t.area
            })),
            c = l.filter((function(t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            })),
            u = c.length > 0 ? c[0].key : l[0].key,
            f = t.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function mn(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = i ? hn(e) : ze(e, Ke(n));
        return cn(n, r, i)
    }

    function vn(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function _n(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return e[t]
        }))
    }

    function bn(t, e, n) {
        n = n.split("-")[0];
        var i = vn(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[_n(a)], r
    }

    function yn(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function En(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex((function(t) {
                return t[e] === n
            }));
            var i = yn(t, (function(t) {
                return t[e] === n
            }));
            return t.indexOf(i)
        }(t, "name", n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && je(n) && (e.offsets.popper = an(e.offsets.popper), e.offsets.reference = an(e.offsets.reference), e = n(e, t))
        })), e
    }

    function wn() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = mn(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = gn(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = bn(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = En(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function An(t, e) {
        return t.some((function(t) {
            var n = t.name;
            return t.enabled && n === e
        }))
    }

    function Ln(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if ("undefined" != typeof document.body.style[o]) return o
        }
        return null
    }

    function Sn() {
        return this.state.isDestroyed = !0, An(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Ln("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function Tn(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function Dn(t, e, n, i) {
        n.updateBound = i, Tn(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = Ue(t);
        return function t(e, n, i, r) {
            var o = "BODY" === e.nodeName,
                s = o ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }), o || t(Ue(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function In() {
        this.state.eventsEnabled || (this.state = Dn(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function On() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, Tn(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) {
            t.removeEventListener("scroll", e.updateBound)
        })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function Cn(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function Nn(t, e) {
        Object.keys(e).forEach((function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Cn(e[n]) && (i = "px"), t.style[n] = e[n] + i
        }))
    }
    var kn = xe && /Firefox/i.test(navigator.userAgent);

    function Pn(t, e, n) {
        var i = yn(t, (function(t) {
                return t.name === e
            })),
            r = !!i && t.some((function(t) {
                return t.name === n && t.enabled && t.order < i.order
            }));
        if (!r) {
            var o = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var Hn = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Rn = Hn.slice(3);

    function Wn(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Rn.indexOf(t),
            i = Rn.slice(n + 1).concat(Rn.slice(0, n));
        return e ? i.reverse() : i
    }
    var xn = "flip",
        Mn = "clockwise",
        Yn = "counterclockwise";

    function jn(t, e, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map((function(t) {
                return t.trim()
            })),
            a = s.indexOf(yn(s, (function(t) {
                return -1 !== t.search(/,|\s/)
            })));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map((function(t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
            return t.reduce((function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }), []).map((function(t) {
                return function(t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return an(a)[e] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) {
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                    }
                    return o
                }(t, r, e, n)
            }))
        }))).forEach((function(t, e) {
            t.forEach((function(n, i) {
                Cn(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
            }))
        })), r
    }
    var Xn = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: on({}, l, o[l]),
                                    end: on({}, l, o[l] + o[c] - s[c])
                                };
                            t.offsets.popper = sn({}, s, u[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = Cn(+n) ? [+n, 0] : jn(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || qe(t.instance.popper);
                        t.instance.reference === n && (n = qe(n));
                        var i = Ln("transform"),
                            r = t.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var l = dn(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        r.top = o, r.left = s, r[i] = a, e.boundaries = l;
                        var c = e.priority,
                            u = t.offsets.popper,
                            f = {
                                primary: function(t) {
                                    var n = u[t];
                                    return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), on({}, t, n)
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = u[n];
                                    return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), on({}, n, i)
                                }
                            };
                        return c.forEach((function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = sn({}, u, f[e](t))
                        })), t.offsets.popper = u, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!Pn(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = vn(i)[c];
                        a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]), t.offsets.popper = an(t.offsets.popper);
                        var g = a[f] + a[c] / 2 - p / 2,
                            m = Xe(t.instance.popper),
                            v = parseFloat(m["margin" + u]),
                            _ = parseFloat(m["border" + u + "Width"]),
                            b = g - t.offsets.popper[f] - v - _;
                        return b = Math.max(Math.min(s[c] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (on(n = {}, f, Math.round(b)), on(n, h, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (An(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = dn(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            r = _n(i),
                            o = t.placement.split("-")[1] || "",
                            s = [];
                        switch (e.behavior) {
                            case xn:
                                s = [i, r];
                                break;
                            case Mn:
                                s = Wn(i);
                                break;
                            case Yn:
                                s = Wn(i, !0);
                                break;
                            default:
                                s = e.behavior
                        }
                        return s.forEach((function(a, l) {
                            if (i !== a || s.length === l + 1) return t;
                            i = t.placement.split("-")[0], r = _n(i);
                            var c = t.offsets.popper,
                                u = t.offsets.reference,
                                f = Math.floor,
                                h = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                                d = f(c.left) < f(n.left),
                                p = f(c.right) > f(n.right),
                                g = f(c.top) < f(n.top),
                                m = f(c.bottom) > f(n.bottom),
                                v = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                _ = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!e.flipVariations && (_ && "start" === o && d || _ && "end" === o && p || !_ && "start" === o && g || !_ && "end" === o && m),
                                y = !!e.flipVariationsByContent && (_ && "start" === o && p || _ && "end" === o && d || !_ && "start" === o && m || !_ && "end" === o && g),
                                E = b || y;
                            (h || v || E) && (t.flipped = !0, (h || v) && (i = s[l + 1]), E && (o = function(t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = sn({}, t.offsets.popper, bn(t.instance.popper, t.offsets.reference, t.placement)), t = En(t.instance.modifiers, t, "flip"))
                        })), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = _n(e), t.offsets.popper = an(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!Pn(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = yn(t.instance.modifiers, (function(t) {
                                return "preventOverflow" === t.name
                            })).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = yn(t.instance.modifiers, (function(t) {
                                return "applyStyle" === t.name
                            })).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : e.gpuAcceleration,
                            a = qe(t.instance.popper),
                            l = ln(a),
                            c = {
                                position: r.position
                            },
                            u = function(t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    r = n.reference,
                                    o = Math.round,
                                    s = Math.floor,
                                    a = function(t) {
                                        return t
                                    },
                                    l = o(r.width),
                                    c = o(i.width),
                                    u = -1 !== ["left", "right"].indexOf(t.placement),
                                    f = -1 !== t.placement.indexOf("-"),
                                    h = e ? u || f || l % 2 == c % 2 ? o : s : a,
                                    d = e ? o : a;
                                return {
                                    left: h(l % 2 == 1 && c % 2 == 1 && !f && e ? i.left - 1 : i.left),
                                    top: d(i.top),
                                    bottom: d(i.bottom),
                                    right: h(i.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !kn),
                            f = "bottom" === n ? "top" : "bottom",
                            h = "right" === i ? "left" : "right",
                            d = Ln("transform"),
                            p = void 0,
                            g = void 0;
                        if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, p = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && d) c[d] = "translate3d(" + p + "px, " + g + "px, 0)", c[f] = 0, c[h] = 0, c.willChange = "transform";
                        else {
                            var m = "bottom" === f ? -1 : 1,
                                v = "right" === h ? -1 : 1;
                            c[f] = g * m, c[h] = p * v, c.willChange = f + ", " + h
                        }
                        var _ = {
                            "x-placement": t.placement
                        };
                        return t.attributes = sn({}, _, t.attributes), t.styles = sn({}, c, t.styles), t.arrowStyles = sn({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return Nn(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        })), t.arrowElement && Object.keys(t.arrowStyles).length && Nn(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, r) {
                        var o = mn(r, e, t, n.positionFixed),
                            s = gn(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), Nn(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Bn = function() {
            function t(e, n) {
                var i = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                nn(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = Ye(this.update.bind(this)), this.options = sn({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(sn({}, t.Defaults.modifiers, r.modifiers)).forEach((function(e) {
                    i.options.modifiers[e] = sn({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                    return sn({
                        name: t
                    }, i.options.modifiers[t])
                })).sort((function(t, e) {
                    return t.order - e.order
                })), this.modifiers.forEach((function(t) {
                    t.enabled && je(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                })), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return rn(t, [{
                key: "update",
                value: function() {
                    return wn.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return Sn.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return In.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return On.call(this)
                }
            }]), t
        }();
    Bn.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Bn.placements = Hn, Bn.Defaults = Xn;
    var Un = "dropdown",
        Kn = "coreui.dropdown",
        Fn = "." + Kn,
        Vn = new RegExp("38|40|27"),
        Qn = {
            HIDE: "hide" + Fn,
            HIDDEN: "hidden" + Fn,
            SHOW: "show" + Fn,
            SHOWN: "shown" + Fn,
            CLICK: "click" + Fn,
            CLICK_DATA_API: "click" + Fn + ".data-api",
            KEYDOWN_DATA_API: "keydown" + Fn + ".data-api",
            KEYUP_DATA_API: "keyup" + Fn + ".data-api"
        },
        qn = "disabled",
        Gn = "show",
        zn = "dropup",
        Zn = "dropright",
        $n = "dropleft",
        Jn = "dropdown-menu-right",
        ti = "position-static",
        ei = '/*[data-toggle="dropdown"]*/',
        ni = ".dropdown form",
        ii = ".dropdown-menu",
        ri = ".navbar-nav",
        oi = ".c-header-nav",
        si = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        ai = "top-start",
        li = "top-end",
        ci = "bottom-start",
        ui = "bottom-end",
        fi = "right-start",
        hi = "left-start",
        di = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        pi = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        gi = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._addEventListeners(), A(t, Kn, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !this._element.classList.contains(qn)) {
                    var e = this._menu.classList.contains(Gn);
                    t.clearMenus(), e || this.show()
                }
            }, n.show = function() {
                if (!(this._element.disabled || this._element.classList.contains(qn) || this._menu.classList.contains(Gn))) {
                    var e = t.getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    if (!Z.trigger(e, Qn.SHOW, n).defaultPrevented) {
                        if (!this._inNavbar && !this._inHeader) {
                            if ("undefined" == typeof Bn) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");
                            var i = this._element;
                            "parent" === this._config.reference ? i = e : p(this._config.reference) && (i = this._config.reference, "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])), "scrollParent" !== this._config.boundary && e.classList.add(ti), this._popper = new Bn(i, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && !v(ct.closest(e, ri)).length && v(document.body.children).forEach((function(t) {
                            return Z.on(t, "mouseover", null, (function() {}))
                        })), "ontouchstart" in document.documentElement && !v(ct.closest(e, oi)).length && v(document.body.children).forEach((function(t) {
                            return Z.on(t, "mouseover", null, (function() {}))
                        })), this._element.focus(), this._element.setAttribute("aria-expanded", !0), kt.toggleClass(this._menu, Gn), kt.toggleClass(e, Gn), Z.trigger(e, Qn.SHOWN, n)
                    }
                }
            }, n.hide = function() {
                if (!this._element.disabled && !this._element.classList.contains(qn) && this._menu.classList.contains(Gn)) {
                    var e = t.getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    Z.trigger(e, Qn.HIDE, n).defaultPrevented || (this._popper && this._popper.destroy(), kt.toggleClass(this._menu, Gn), kt.toggleClass(e, Gn), Z.trigger(e, Qn.HIDDEN, n))
                }
            }, n.dispose = function() {
                S(this._element, Kn), Z.off(this._element, Fn), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var t = this;
                Z.on(this._element, Qn.CLICK, (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, n._getConfig = function(t) {
                return t = r({}, this.constructor.Default, {}, kt.getDataAttributes(this._element), {}, t), m(Un, t, this.constructor.DefaultType), t
            }, n._getMenuElement = function() {
                var e = t.getParentFromElement(this._element);
                return ct.findOne(ii, e)
            }, n._getPlacement = function() {
                var t = this._element.parentNode,
                    e = ci;
                return t.classList.contains(zn) ? (e = ai, this._menu.classList.contains(Jn) && (e = li)) : t.classList.contains(Zn) ? e = fi : t.classList.contains($n) ? e = hi : this._menu.classList.contains(Jn) && (e = ui), e
            }, n._detectNavbar = function() {
                return Boolean(ct.closest(this._element, ".navbar"))
            }, n._detectHeader = function() {
                return Boolean(ct.closest(this._element, ".c-header"))
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, n._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), r({}, t, {}, this._config.popperConfig)
            }, t.dropdownInterface = function(e, n) {
                var i = L(e, Kn);
                if (i || (i = new t(e, "object" == typeof n ? n : null)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t.dropdownInterface(this, e)
                }))
            }, t.clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = v(ct.find(ei)), i = 0, r = n.length; i < r; i++) {
                        var o = t.getParentFromElement(n[i]),
                            s = L(n[i], Kn),
                            a = {
                                relatedTarget: n[i]
                            };
                        if (e && "click" === e.type && (a.clickEvent = e), s) {
                            var l = s._menu;
                            if (o.classList.contains(Gn))
                                if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o.contains(e.target))) Z.trigger(o, Qn.HIDE, a).defaultPrevented || ("ontouchstart" in document.documentElement && v(document.body.children).forEach((function(t) {
                                    return Z.off(t, "mouseover", null, (function() {}))
                                })), n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove(Gn), o.classList.remove(Gn), Z.trigger(o, Qn.HIDDEN, a))
                        }
                    }
            }, t.getParentFromElement = function(t) {
                return f(t) || t.parentNode
            }, t.dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || ct.closest(e.target, ii))) : Vn.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains(qn))) {
                    var n = t.getParentFromElement(this),
                        i = n.classList.contains(Gn);
                    if (!i || i && (27 === e.which || 32 === e.which)) return 27 === e.which && ct.findOne(ei, n).focus(), void t.clearMenus();
                    var r = v(ct.find(si, n)).filter(_);
                    if (r.length) {
                        var o = r.indexOf(e.target);
                        38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                    }
                }
            }, t.getInstance = function(t) {
                return L(t, Kn)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return di
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return pi
                }
            }]), t
        }();
    Z.on(document, Qn.KEYDOWN_DATA_API, ei, gi.dataApiKeydownHandler), Z.on(document, Qn.KEYDOWN_DATA_API, ii, gi.dataApiKeydownHandler), Z.on(document, Qn.CLICK_DATA_API, gi.clearMenus), Z.on(document, Qn.KEYUP_DATA_API, gi.clearMenus), Z.on(document, Qn.CLICK_DATA_API, ei, (function(t) {
        t.preventDefault(), t.stopPropagation(), gi.dropdownInterface(this, "toggle")
    })), Z.on(document, Qn.CLICK_DATA_API, ni, (function(t) {
        return t.stopPropagation()
    }));
    var mi = E();
    if (mi) {
        var vi = mi.fn[Un];
        mi.fn[Un] = gi.jQueryInterface, mi.fn[Un].Constructor = gi, mi.fn[Un].noConflict = function() {
            return mi.fn[Un] = vi, gi.jQueryInterface
        }
    }
    var _i = ".coreui.modal",
        bi = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        yi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Ei = {
            HIDE: "hide" + _i,
            HIDE_PREVENTED: "hidePrevented" + _i,
            HIDDEN: "hidden" + _i,
            SHOW: "show" + _i,
            SHOWN: "shown" + _i,
            FOCUSIN: "focusin" + _i,
            RESIZE: "resize" + _i,
            CLICK_DISMISS: "click.dismiss" + _i,
            KEYDOWN_DISMISS: "keydown.dismiss" + _i,
            MOUSEUP_DISMISS: "mouseup.dismiss" + _i,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + _i,
            CLICK_DATA_API: "click.coreui.modal.data-api"
        },
        wi = "modal-dialog-scrollable",
        Ai = "modal-scrollbar-measure",
        Li = "modal-backdrop",
        Si = "modal-open",
        Ti = "fade",
        Di = "show",
        Ii = "modal-static",
        Oi = ".modal-dialog",
        Ci = ".modal-body",
        Ni = '[data-toggle="modal"]',
        ki = '[data-dismiss="modal"]',
        Pi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Hi = ".sticky-top",
        Ri = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = ct.findOne(Oi, t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, A(t, "coreui.modal", this)
            }
            var n = t.prototype;
            return n.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, n.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains(Ti) && (this._isTransitioning = !0);
                    var n = Z.trigger(this._element, Ei.SHOW, {
                        relatedTarget: t
                    });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), Z.on(this._element, Ei.CLICK_DISMISS, ki, (function(t) {
                        return e.hide(t)
                    })), Z.on(this._dialog, Ei.MOUSEDOWN_DISMISS, (function() {
                        Z.one(e._element, Ei.MOUSEUP_DISMISS, (function(t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return e._showElement(t)
                    })))
                }
            }, n.hide = function(t) {
                var e = this;
                if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !Z.trigger(this._element, Ei.HIDE).defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains(Ti);
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Z.off(document, Ei.FOCUSIN), this._element.classList.remove(Di), Z.off(this._element, Ei.CLICK_DISMISS), Z.off(this._dialog, Ei.MOUSEDOWN_DISMISS), n) {
                        var i = h(this._element);
                        Z.one(this._element, "transitionend", (function(t) {
                            return e._hideModal(t)
                        })), g(this._element, i)
                    } else this._hideModal()
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return Z.off(t, _i)
                })), Z.off(document, Ei.FOCUSIN), S(this._element, "coreui.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(t) {
                return t = r({}, bi, {}, t), m("modal", t, yi), t
            }, n._showElement = function(t) {
                var e = this,
                    n = this._element.classList.contains(Ti),
                    i = ct.findOne(Ci, this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._dialog.classList.contains(wi) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && y(this._element), this._element.classList.add(Di), this._config.focus && this._enforceFocus();
                var r = function() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, Z.trigger(e._element, Ei.SHOWN, {
                        relatedTarget: t
                    })
                };
                if (n) {
                    var o = h(this._dialog);
                    Z.one(this._dialog, "transitionend", r), g(this._dialog, o)
                } else r()
            }, n._enforceFocus = function() {
                var t = this;
                Z.off(document, Ei.FOCUSIN), Z.on(document, Ei.FOCUSIN, (function(e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, n._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? Z.on(this._element, Ei.KEYDOWN_DISMISS, (function(e) {
                    27 === e.which && t._triggerBackdropTransition()
                })) : Z.off(this._element, Ei.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var t = this;
                this._isShown ? Z.on(window, Ei.RESIZE, (function() {
                    return t._adjustDialog()
                })) : Z.off(window, Ei.RESIZE)
            }, n._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
                    document.body.classList.remove(Si), t._resetAdjustments(), t._resetScrollbar(), Z.trigger(t._element, Ei.HIDDEN)
                }))
            }, n._removeBackdrop = function() {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, n._showBackdrop = function(t) {
                var e = this,
                    n = this._element.classList.contains(Ti) ? Ti : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = Li, n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), Z.on(this._element, Ei.CLICK_DISMISS, (function(t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                    })), n && y(this._backdrop), this._backdrop.classList.add(Di), !n) return void t();
                    var i = h(this._backdrop);
                    Z.one(this._backdrop, "transitionend", t), g(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove(Di);
                    var r = function() {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains(Ti)) {
                        var o = h(this._backdrop);
                        Z.one(this._backdrop, "transitionend", r), g(this._backdrop, o)
                    } else r()
                } else t()
            }, n._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    if (Z.trigger(this._element, Ei.HIDE_PREVENTED).defaultPrevented) return;
                    this._element.classList.add(Ii);
                    var e = h(this._element);
                    Z.one(this._element, "transitionend", (function() {
                        t._element.classList.remove(Ii)
                    })), g(this._element, e), this._element.focus()
                } else this.hide()
            }, n._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    v(ct.find(Pi)).forEach((function(e) {
                        var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        kt.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px"
                    })), v(ct.find(Hi)).forEach((function(e) {
                        var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        kt.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px"
                    }));
                    var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    kt.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add(Si)
            }, n._resetScrollbar = function() {
                v(ct.find(Pi)).forEach((function(t) {
                    var e = kt.getDataAttribute(t, "padding-right");
                    "undefined" != typeof e && (kt.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                })), v(ct.find("" + Hi)).forEach((function(t) {
                    var e = kt.getDataAttribute(t, "margin-right");
                    "undefined" != typeof e && (kt.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                }));
                var t = kt.getDataAttribute(document.body, "padding-right");
                "undefined" == typeof t ? document.body.style.paddingRight = "" : (kt.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, n._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = Ai, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t.jQueryInterface = function(e, n) {
                return this.each((function() {
                    var i = L(this, "coreui.modal"),
                        o = r({}, bi, {}, kt.getDataAttributes(this), {}, "object" == typeof e && e ? e : {});
                    if (i || (i = new t(this, o)), "string" == typeof e) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e](n)
                    } else o.show && i.show(n)
                }))
            }, t.getInstance = function(t) {
                return L(t, "coreui.modal")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return bi
                }
            }]), t
        }();
    Z.on(document, Ei.CLICK_DATA_API, Ni, (function(t) {
        var e = this,
            n = f(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), Z.one(n, Ei.SHOW, (function(t) {
            t.defaultPrevented || Z.one(n, Ei.HIDDEN, (function() {
                _(e) && e.focus()
            }))
        }));
        var i = L(n, "coreui.modal");
        if (!i) {
            var o = r({}, kt.getDataAttributes(n), {}, kt.getDataAttributes(this));
            i = new Ri(n, o)
        }
        i.show(this)
    }));
    var Wi = E();
    if (Wi) {
        var xi = Wi.fn.modal;
        Wi.fn.modal = Ri.jQueryInterface, Wi.fn.modal.Constructor = Ri, Wi.fn.modal.noConflict = function() {
            return Wi.fn.modal = xi, Ri.jQueryInterface
        }
    }
    var Mi = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Yi = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        ji = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        Xi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Bi(t, e, n) {
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), o = v(i.body.querySelectorAll("*")), s = function(t, n) {
            var i = o[t],
                s = i.nodeName.toLowerCase();
            if (-1 === r.indexOf(s)) return i.parentNode.removeChild(i), "continue";
            var a = v(i.attributes),
                l = [].concat(e["*"] || [], e[s] || []);
            a.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n)) return -1 === Mi.indexOf(n) || Boolean(t.nodeValue.match(Yi) || t.nodeValue.match(ji));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    })), r = 0, o = i.length; r < o; r++)
                        if (n.match(i[r])) return !0;
                    return !1
                })(t, l) || i.removeAttribute(t.nodeName)
            }))
        }, a = 0, l = o.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Ui = "tooltip",
        Ki = ".coreui.tooltip",
        Fi = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Vi = ["sanitize", "whiteList", "sanitizeFn"],
        Qi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        qi = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Gi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Xi,
            popperConfig: null
        },
        zi = "show",
        Zi = "out",
        $i = {
            HIDE: "hide" + Ki,
            HIDDEN: "hidden" + Ki,
            SHOW: "show" + Ki,
            SHOWN: "shown" + Ki,
            INSERTED: "inserted" + Ki,
            CLICK: "click" + Ki,
            FOCUSIN: "focusin" + Ki,
            FOCUSOUT: "focusout" + Ki,
            MOUSEENTER: "mouseenter" + Ki,
            MOUSELEAVE: "mouseleave" + Ki
        },
        Ji = "fade",
        tr = "show",
        er = ".tooltip-inner",
        nr = "hover",
        ir = "focus",
        rr = "click",
        or = "manual",
        sr = function() {
            function t(t, e) {
                if ("undefined" == typeof Bn) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), A(t, this.constructor.DATA_KEY, this)
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = L(t.delegateTarget, e);
                        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (this.getTipElement().classList.contains(tr)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), S(this.element, this.constructor.DATA_KEY), Z.off(this.element, this.constructor.EVENT_KEY), Z.off(ct.closest(this.element, ".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var t = this;
                if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = Z.trigger(this.element, this.constructor.Event.SHOW),
                        n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this.element),
                        i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                    if (e.defaultPrevented || !i) return;
                    var r = this.getTipElement(),
                        o = l(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && r.classList.add(Ji);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this._addAttachmentClass(a);
                    var c = this._getContainer();
                    A(r, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(r), Z.trigger(this.element, this.constructor.Event.INSERTED), this._popper = new Bn(this.element, r, this._getPopperConfig(a)), r.classList.add(tr), "ontouchstart" in document.documentElement && v(document.body.children).forEach((function(t) {
                        Z.on(t, "mouseover", (function() {}))
                    }));
                    var u = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, Z.trigger(t.element, t.constructor.Event.SHOWN), e === Zi && t._leave(null, t)
                    };
                    if (this.tip.classList.contains(Ji)) {
                        var f = h(this.tip);
                        Z.one(this.tip, "transitionend", u), g(this.tip, f)
                    } else u()
                }
            }, n.hide = function() {
                var t = this,
                    e = this.getTipElement(),
                    n = function() {
                        t._hoverState !== zi && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), Z.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy()
                    };
                if (!Z.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                    if (e.classList.remove(tr), "ontouchstart" in document.documentElement && v(document.body.children).forEach((function(t) {
                        return Z.off(t, "mouseover", b)
                    })), this._activeTrigger[rr] = !1, this._activeTrigger[ir] = !1, this._activeTrigger[nr] = !1, this.tip.classList.contains(Ji)) {
                        var i = h(e);
                        Z.one(e, "transitionend", n), g(e, i)
                    } else n();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.getTipElement = function() {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, n.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(ct.findOne(er, t), this.getTitle()), t.classList.remove(Ji), t.classList.remove(tr)
            }, n.setElementContent = function(t, e) {
                if (null !== t) return "object" == typeof e && p(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.innerText = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Bi(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.innerText = e)
            }, n.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, n._getPopperConfig = function(t) {
                var e = this;
                return r({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: "." + this.constructor.NAME + "-arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }, {}, this.config.popperConfig)
            }, n._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-tooltip-" + t)
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : p(this.config.container) ? this.config.container : ct.findOne(this.config.container)
            }, n._getAttachment = function(t) {
                return qi[t.toUpperCase()]
            }, n._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) Z.on(t.element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if (e !== or) {
                        var n = e === nr ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = e === nr ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        Z.on(t.element, n, t.config.selector, (function(e) {
                            return t._enter(e)
                        })), Z.on(t.element, i, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t.element && t.hide()
                }, Z.on(ct.closest(this.element, ".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || L(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? ir : nr] = !0), e.getTipElement().classList.contains(tr) || e._hoverState === zi ? e._hoverState = zi : (clearTimeout(e._timeout), e._hoverState = zi, e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                    e._hoverState === zi && e.show()
                }), e.config.delay.show) : e.show())
            }, n._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || L(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? ir : nr] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Zi, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                    e._hoverState === Zi && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, n._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, n._getConfig = function(t) {
                var e = kt.getDataAttributes(this.element);
                return Object.keys(e).forEach((function(t) {
                    -1 !== Vi.indexOf(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = r({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m(Ui, t, this.constructor.DefaultType), t.sanitize && (t.template = Bi(t.template, t.whiteList, t.sanitizeFn)), t
            }, n._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, n._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Fi);
                null !== e && e.length && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, n._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement))
            }, n._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (t.classList.remove(Ji), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = L(this, "coreui.tooltip"),
                        i = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function(t) {
                return L(t, "coreui.tooltip")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Gi
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ui
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "coreui.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return $i
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Ki
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Qi
                }
            }]), t
        }(),
        ar = E();
    if (ar) {
        var lr = ar.fn.tooltip;
        ar.fn.tooltip = sr.jQueryInterface, ar.fn.tooltip.Constructor = sr, ar.fn.tooltip.noConflict = function() {
            return ar.fn.tooltip = lr, sr.jQueryInterface
        }
    }
    var cr = "popover",
        ur = "coreui.popover",
        fr = "." + ur,
        hr = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        dr = r({}, sr.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        pr = r({}, sr.DefaultType, {
            content: "(string|element|function)"
        }),
        gr = "fade",
        mr = "show",
        vr = ".popover-header",
        _r = ".popover-body",
        br = {
            HIDE: "hide" + fr,
            HIDDEN: "hidden" + fr,
            SHOW: "show" + fr,
            SHOWN: "shown" + fr,
            INSERTED: "inserted" + fr,
            CLICK: "click" + fr,
            FOCUSIN: "focusin" + fr,
            FOCUSOUT: "focusout" + fr,
            MOUSEENTER: "mouseenter" + fr,
            MOUSELEAVE: "mouseleave" + fr
        },
        yr = function(t) {
            var n, i;

            function r() {
                return t.apply(this, arguments) || this
            }
            i = t, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var o = r.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(ct.findOne(vr, t), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(ct.findOne(_r, t), e), t.classList.remove(gr), t.classList.remove(mr)
            }, o._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-popover-" + t)
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(hr);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, r.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = L(this, ur),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new r(this, n), A(this, ur, e)), "string" == typeof t)) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, r.getInstance = function(t) {
                return L(t, ur)
            }, e(r, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return dr
                }
            }, {
                key: "NAME",
                get: function() {
                    return cr
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return ur
                }
            }, {
                key: "Event",
                get: function() {
                    return br
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return fr
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return pr
                }
            }]), r
        }(sr),
        Er = E();
    if (Er) {
        var wr = Er.fn.popover;
        Er.fn.popover = yr.jQueryInterface, Er.fn.popover.Constructor = yr, Er.fn.popover.noConflict = function() {
            return Er.fn.popover = wr, yr.jQueryInterface
        }
    }
    var Ar = "scrollspy",
        Lr = "coreui.scrollspy",
        Sr = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Tr = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Dr = {
            ACTIVATE: "activate.coreui.scrollspy",
            SCROLL: "scroll.coreui.scrollspy",
            LOAD_DATA_API: "load.coreui.scrollspy.data-api"
        },
        Ir = "dropdown-item",
        Or = "active",
        Cr = '[data-spy="scroll"]',
        Nr = ".nav, .list-group",
        kr = ".nav-link",
        Pr = ".nav-item",
        Hr = ".list-group-item",
        Rr = ".dropdown",
        Wr = ".dropdown-toggle",
        xr = "offset",
        Mr = "position",
        Yr = function() {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + kr + "," + this._config.target + " " + Hr + "," + this._config.target + " ." + Ir, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Z.on(this._scrollElement, Dr.SCROLL, (function(t) {
                    return n._process(t)
                })), this.refresh(), this._process(), A(t, Lr, this)
            }
            var n = t.prototype;
            return n.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? xr : Mr,
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = n === Mr ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), v(ct.find(this._selector)).map((function(t) {
                    var e, r = u(t);
                    if (r && (e = ct.findOne(r)), e) {
                        var o = e.getBoundingClientRect();
                        if (o.width || o.height) return [kt[n](e).top + i, r]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, n.dispose = function() {
                S(this._element, Lr), Z.off(this._scrollElement, ".coreui.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(t) {
                if ("string" != typeof(t = r({}, Sr, {}, "object" == typeof t && t ? t : {})).target) {
                    var e = t.target.id;
                    e || (e = l(Ar), t.target.id = e), t.target = "#" + e
                }
                return m(Ar, t, Tr), t
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, n._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    n = ct.findOne(e.join(","));
                n.classList.contains(Ir) ? (ct.findOne(Wr, ct.closest(n, Rr)).classList.add(Or), n.classList.add(Or)) : (n.classList.add(Or), ct.parents(n, Nr).forEach((function(t) {
                    ct.prev(t, kr + ", " + Hr).forEach((function(t) {
                        return t.classList.add(Or)
                    })), ct.prev(t, Pr).forEach((function(t) {
                        ct.children(t, kr).forEach((function(t) {
                            return t.classList.add(Or)
                        }))
                    }))
                }))), Z.trigger(this._scrollElement, Dr.ACTIVATE, {
                    relatedTarget: t
                })
            }, n._clear = function() {
                v(ct.find(this._selector)).filter((function(t) {
                    return t.classList.contains(Or)
                })).forEach((function(t) {
                    return t.classList.remove(Or)
                }))
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = L(this, Lr);
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function(t) {
                return L(t, Lr)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Sr
                }
            }]), t
        }();
    Z.on(window, Dr.LOAD_DATA_API, (function() {
        v(ct.find(Cr)).forEach((function(t) {
            return new Yr(t, kt.getDataAttributes(t))
        }))
    }));
    var jr = E();
    if (jr) {
        var Xr = jr.fn[Ar];
        jr.fn[Ar] = Yr.jQueryInterface, jr.fn[Ar].Constructor = Yr, jr.fn[Ar].noConflict = function() {
            return jr.fn[Ar] = Xr, Yr.jQueryInterface
        }
    }
    /*!
     * perfect-scrollbar v1.5.0
     * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
     * Licensed under MIT
     */
    function Br(t) {
        return getComputedStyle(t)
    }

    function Ur(t, e) {
        for (var n in e) {
            var i = e[n];
            "number" == typeof i && (i += "px"), t.style[n] = i
        }
        return t
    }

    function Kr(t) {
        var e = document.createElement("div");
        return e.className = t, e
    }
    var Fr = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

    function Vr(t, e) {
        if (!Fr) throw new Error("No element matching method supported");
        return Fr.call(t, e)
    }

    function Qr(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }

    function qr(t, e) {
        return Array.prototype.filter.call(t.children, (function(t) {
            return Vr(t, e)
        }))
    }
    var Gr = "ps",
        zr = "ps__rtl",
        Zr = {
            thumb: function(t) {
                return "ps__thumb-" + t
            },
            rail: function(t) {
                return "ps__rail-" + t
            },
            consuming: "ps__child--consume"
        },
        $r = {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(t) {
                return "ps--active-" + t
            },
            scrolling: function(t) {
                return "ps--scrolling-" + t
            }
        },
        Jr = {
            x: null,
            y: null
        };

    function to(t, e) {
        var n = t.element.classList,
            i = $r.scrolling(e);
        n.contains(i) ? clearTimeout(Jr[e]) : n.add(i)
    }

    function eo(t, e) {
        Jr[e] = setTimeout((function() {
            return t.isAlive && t.element.classList.remove($r.scrolling(e))
        }), t.settings.scrollingThreshold)
    }
    var no = function(t) {
            this.element = t, this.handlers = {}
        },
        io = {
            isEmpty: {
                configurable: !0
            }
        };
    no.prototype.bind = function(t, e) {
        "undefined" == typeof this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
    }, no.prototype.unbind = function(t, e) {
        var n = this;
        this.handlers[t] = this.handlers[t].filter((function(i) {
            return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1)
        }))
    }, no.prototype.unbindAll = function() {
        for (var t in this.handlers) this.unbind(t)
    }, io.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every((function(e) {
            return 0 === t.handlers[e].length
        }))
    }, Object.defineProperties(no.prototype, io);
    var ro = function() {
        this.eventElements = []
    };

    function oo(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e
    }

    function so(t, e, n, i, r) {
        var o;
        if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === e) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== e) throw new Error("A proper axis should be provided");
            o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }! function(t, e, n, i, r) {
            var o = n[0],
                s = n[1],
                a = n[2],
                l = n[3],
                c = n[4],
                u = n[5];
            void 0 === i && (i = !0);
            void 0 === r && (r = !1);
            var f = t.element;
            t.reach[l] = null, f[a] < 1 && (t.reach[l] = "start");
            f[a] > t[o] - t[s] - 1 && (t.reach[l] = "end");
            e && (f.dispatchEvent(oo("ps-scroll-" + l)), e < 0 ? f.dispatchEvent(oo("ps-scroll-" + c)) : e > 0 && f.dispatchEvent(oo("ps-scroll-" + u)), i && function(t, e) {
                to(t, e), eo(t, e)
            }(t, l));
            t.reach[l] && (e || r) && f.dispatchEvent(oo("ps-" + l + "-reach-" + t.reach[l]))
        }(t, n, o, i, r)
    }

    function ao(t) {
        return parseInt(t, 10) || 0
    }
    ro.prototype.eventElement = function(t) {
        var e = this.eventElements.filter((function(e) {
            return e.element === t
        }))[0];
        return e || (e = new no(t), this.eventElements.push(e)), e
    }, ro.prototype.bind = function(t, e, n) {
        this.eventElement(t).bind(e, n)
    }, ro.prototype.unbind = function(t, e, n) {
        var i = this.eventElement(t);
        i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, ro.prototype.unbindAll = function() {
        this.eventElements.forEach((function(t) {
            return t.unbindAll()
        })), this.eventElements = []
    }, ro.prototype.once = function(t, e, n) {
        var i = this.eventElement(t),
            r = function(t) {
                i.unbind(e, r), n(t)
            };
        i.bind(e, r)
    };
    var lo = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    };

    function co(t) {
        var e = t.element,
            n = Math.floor(e.scrollTop),
            i = e.getBoundingClientRect();
        t.containerWidth = Math.ceil(i.width), t.containerHeight = Math.ceil(i.height), t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (qr(e, Zr.rail("x")).forEach((function(t) {
            return Qr(t)
        })), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (qr(e, Zr.rail("y")).forEach((function(t) {
            return Qr(t)
        })), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = uo(t, ao(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = ao((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = uo(t, ao(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = ao(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            function(t, e) {
                var n = {
                        width: e.railXWidth
                    },
                    i = Math.floor(t.scrollTop);
                e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft;
                e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - i : n.top = e.scrollbarXTop + i;
                Ur(e.scrollbarXRail, n);
                var r = {
                    top: i,
                    height: e.railYHeight
                };
                e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9 : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft;
                Ur(e.scrollbarYRail, r), Ur(e.scrollbarX, {
                    left: e.scrollbarXLeft,
                    width: e.scrollbarXWidth - e.railBorderXWidth
                }), Ur(e.scrollbarY, {
                    top: e.scrollbarYTop,
                    height: e.scrollbarYHeight - e.railBorderYWidth
                })
            }(e, t), t.scrollbarXActive ? e.classList.add($r.active("x")) : (e.classList.remove($r.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? e.classList.add($r.active("y")) : (e.classList.remove($r.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0)
    }

    function uo(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function fo(t, e) {
        var n = e[0],
            i = e[1],
            r = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            u = e[8],
            f = t.element,
            h = null,
            d = null,
            p = null;

        function g(e) {
            e.touches && e.touches[0] && (e[r] = e.touches[0].pageY), f[l] = h + p * (e[r] - d), to(t, c), co(t), e.stopPropagation(), e.preventDefault()
        }

        function m() {
            eo(t, c), t[u].classList.remove($r.clicking), t.event.unbind(t.ownerDocument, "mousemove", g)
        }

        function v(e, s) {
            h = f[l], s && e.touches && (e[r] = e.touches[0].pageY), d = e[r], p = (t[i] - t[n]) / (t[o] - t[a]), s ? t.event.bind(t.ownerDocument, "touchmove", g) : (t.event.bind(t.ownerDocument, "mousemove", g), t.event.once(t.ownerDocument, "mouseup", m), e.preventDefault()), t[u].classList.add($r.clicking), e.stopPropagation()
        }
        t.event.bind(t[s], "mousedown", (function(t) {
            v(t)
        })), t.event.bind(t[s], "touchstart", (function(t) {
            v(t, !0)
        }))
    }
    var ho = {
            "click-rail": function(t) {
                t.element, t.event.bind(t.scrollbarY, "mousedown", (function(t) {
                    return t.stopPropagation()
                })), t.event.bind(t.scrollbarYRail, "mousedown", (function(e) {
                    var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                    t.element.scrollTop += n * t.containerHeight, co(t), e.stopPropagation()
                })), t.event.bind(t.scrollbarX, "mousedown", (function(t) {
                    return t.stopPropagation()
                })), t.event.bind(t.scrollbarXRail, "mousedown", (function(e) {
                    var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                    t.element.scrollLeft += n * t.containerWidth, co(t), e.stopPropagation()
                }))
            },
            "drag-thumb": function(t) {
                fo(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), fo(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function(t) {
                var e = t.element;
                t.event.bind(t.ownerDocument, "keydown", (function(n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (Vr(e, ":hover") || Vr(t.scrollbarX, ":focus") || Vr(t.scrollbarY, ":focus"))) {
                        var i, r = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (r) {
                            if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                            else
                                for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
                            if (Vr(i = r, "input,[contenteditable]") || Vr(i, "select,[contenteditable]") || Vr(i, "textarea,[contenteditable]") || Vr(i, "button,[contenteditable]")) return
                        }
                        var o = 0,
                            s = 0;
                        switch (n.which) {
                            case 37:
                                o = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                s = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                o = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                s = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                break;
                            case 32:
                                s = n.shiftKey ? t.containerHeight : -t.containerHeight;
                                break;
                            case 33:
                                s = t.containerHeight;
                                break;
                            case 34:
                                s = -t.containerHeight;
                                break;
                            case 36:
                                s = t.contentHeight;
                                break;
                            case 35:
                                s = -t.contentHeight;
                                break;
                            default:
                                return
                        }
                        t.settings.suppressScrollX && 0 !== o || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += o, co(t), function(n, i) {
                            var r = Math.floor(e.scrollTop);
                            if (0 === n) {
                                if (!t.scrollbarYActive) return !1;
                                if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                            }
                            var o = e.scrollLeft;
                            if (0 === i) {
                                if (!t.scrollbarXActive) return !1;
                                if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                            }
                            return !0
                        }(o, s) && n.preventDefault())
                    }
                }))
            },
            wheel: function(t) {
                var e = t.element;

                function n(n) {
                    var i = function(t) {
                            var e = t.deltaX,
                                n = -1 * t.deltaY;
                            return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e != e && n != n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
                        }(n),
                        r = i[0],
                        o = i[1];
                    if (! function(t, n, i) {
                        if (!lo.isWebKit && e.querySelector("select:focus")) return !0;
                        if (!e.contains(t)) return !1;
                        for (var r = t; r && r !== e;) {
                            if (r.classList.contains(Zr.consuming)) return !0;
                            var o = Br(r);
                            if (i && o.overflowY.match(/(scroll|auto)/)) {
                                var s = r.scrollHeight - r.clientHeight;
                                if (s > 0 && (r.scrollTop > 0 && i < 0 || r.scrollTop < s && i > 0)) return !0
                            }
                            if (n && o.overflowX.match(/(scroll|auto)/)) {
                                var a = r.scrollWidth - r.clientWidth;
                                if (a > 0 && (r.scrollLeft > 0 && n < 0 || r.scrollLeft < a && n > 0)) return !0
                            }
                            r = r.parentNode
                        }
                        return !1
                    }(n.target, r, o)) {
                        var s = !1;
                        t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (o ? e.scrollTop -= o * t.settings.wheelSpeed : e.scrollTop += r * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (r ? e.scrollLeft += r * t.settings.wheelSpeed : e.scrollLeft -= o * t.settings.wheelSpeed, s = !0) : (e.scrollTop -= o * t.settings.wheelSpeed, e.scrollLeft += r * t.settings.wheelSpeed), co(t), (s = s || function(n, i) {
                            var r = Math.floor(e.scrollTop),
                                o = 0 === e.scrollTop,
                                s = r + e.offsetHeight === e.scrollHeight,
                                a = 0 === e.scrollLeft,
                                l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                            return !(Math.abs(i) > Math.abs(n) ? o || s : a || l) || !t.settings.wheelPropagation
                        }(r, o)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault())
                    }
                }
                "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", n) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", n)
            },
            touch: function(t) {
                if (lo.supportsTouch || lo.supportsIePointer) {
                    var e = t.element,
                        n = {},
                        i = 0,
                        r = {},
                        o = null;
                    lo.supportsTouch ? (t.event.bind(e, "touchstart", c), t.event.bind(e, "touchmove", u), t.event.bind(e, "touchend", f)) : lo.supportsIePointer && (window.PointerEvent ? (t.event.bind(e, "pointerdown", c), t.event.bind(e, "pointermove", u), t.event.bind(e, "pointerup", f)) : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", c), t.event.bind(e, "MSPointerMove", u), t.event.bind(e, "MSPointerUp", f)))
                }

                function s(n, i) {
                    e.scrollTop -= i, e.scrollLeft -= n, co(t)
                }

                function a(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function l(t) {
                    return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                }

                function c(t) {
                    if (l(t)) {
                        var e = a(t);
                        n.pageX = e.pageX, n.pageY = e.pageY, i = (new Date).getTime(), null !== o && clearInterval(o)
                    }
                }

                function u(o) {
                    if (l(o)) {
                        var c = a(o),
                            u = {
                                pageX: c.pageX,
                                pageY: c.pageY
                            },
                            f = u.pageX - n.pageX,
                            h = u.pageY - n.pageY;
                        if (function(t, n, i) {
                            if (!e.contains(t)) return !1;
                            for (var r = t; r && r !== e;) {
                                if (r.classList.contains(Zr.consuming)) return !0;
                                var o = Br(r);
                                if (i && o.overflowY.match(/(scroll|auto)/)) {
                                    var s = r.scrollHeight - r.clientHeight;
                                    if (s > 0 && (r.scrollTop > 0 && i < 0 || r.scrollTop < s && i > 0)) return !0
                                }
                                if (n && o.overflowX.match(/(scroll|auto)/)) {
                                    var a = r.scrollWidth - r.clientWidth;
                                    if (a > 0 && (r.scrollLeft > 0 && n < 0 || r.scrollLeft < a && n > 0)) return !0
                                }
                                r = r.parentNode
                            }
                            return !1
                        }(o.target, f, h)) return;
                        s(f, h), n = u;
                        var d = (new Date).getTime(),
                            p = d - i;
                        p > 0 && (r.x = f / p, r.y = h / p, i = d),
                        function(n, i) {
                            var r = Math.floor(e.scrollTop),
                                o = e.scrollLeft,
                                s = Math.abs(n),
                                a = Math.abs(i);
                            if (a > s) {
                                if (i < 0 && r === t.contentHeight - t.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && lo.isChrome
                            } else if (s > a && (n < 0 && o === t.contentWidth - t.containerWidth || n > 0 && 0 === o)) return !0;
                            return !0
                        }(f, h) && o.preventDefault()
                    }
                }

                function f() {
                    t.settings.swipeEasing && (clearInterval(o), o = setInterval((function() {
                        t.isInitialized ? clearInterval(o) : r.x || r.y ? Math.abs(r.x) < .01 && Math.abs(r.y) < .01 ? clearInterval(o) : (s(30 * r.x, 30 * r.y), r.x *= .8, r.y *= .8) : clearInterval(o)
                    }), 10))
                }
            }
        },
        po = function(t, e) {
            var n = this;
            if (void 0 === e && (e = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var i in this.element = t, t.classList.add(Gr), this.settings = {
                handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollingThreshold: 1e3,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !0,
                wheelSpeed: 1
            }, e) this.settings[i] = e[i];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var r, o, s = function() {
                    return t.classList.add($r.focus)
                },
                a = function() {
                    return t.classList.remove($r.focus)
                };
            this.isRtl = "rtl" === Br(t).direction, !0 === this.isRtl && t.classList.add(zr), this.isNegativeScroll = (o = t.scrollLeft, t.scrollLeft = -1, r = t.scrollLeft < 0, t.scrollLeft = o, r), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new ro, this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Kr(Zr.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Kr(Zr.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var l = Br(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(l.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = ao(l.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = ao(l.borderLeftWidth) + ao(l.borderRightWidth), Ur(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = ao(l.marginLeft) + ao(l.marginRight), Ur(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Kr(Zr.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Kr(Zr.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var c = Br(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(c.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = ao(c.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                var e = Br(t);
                return ao(e.width) + ao(e.paddingLeft) + ao(e.paddingRight) + ao(e.borderLeftWidth) + ao(e.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = ao(c.borderTopWidth) + ao(c.borderBottomWidth), Ur(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = ao(c.marginTop) + ao(c.marginBottom), Ur(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach((function(t) {
                return ho[t](n)
            })), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", (function(t) {
                return n.onScroll(t)
            })), co(this)
        };
    po.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, Ur(this.scrollbarXRail, {
            display: "block"
        }), Ur(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = ao(Br(this.scrollbarXRail).marginLeft) + ao(Br(this.scrollbarXRail).marginRight), this.railYMarginHeight = ao(Br(this.scrollbarYRail).marginTop) + ao(Br(this.scrollbarYRail).marginBottom), Ur(this.scrollbarXRail, {
            display: "none"
        }), Ur(this.scrollbarYRail, {
            display: "none"
        }), co(this), so(this, "top", 0, !1, !0), so(this, "left", 0, !1, !0), Ur(this.scrollbarXRail, {
            display: ""
        }), Ur(this.scrollbarYRail, {
            display: ""
        }))
    }, po.prototype.onScroll = function(t) {
        this.isAlive && (co(this), so(this, "top", this.element.scrollTop - this.lastScrollTop), so(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, po.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), Qr(this.scrollbarX), Qr(this.scrollbarY), Qr(this.scrollbarXRail), Qr(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, po.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter((function(t) {
            return !t.match(/^ps([-_].+|)$/)
        })).join(" ")
    };
    var go = {
            dropdownAccordion: "boolean"
        },
        mo = 400,
        vo = {
            ACTIVE: "c-active",
            BACKDROP: "c-sidebar-backdrop",
            FADE: "c-fade",
            NAV_DROPDOWN: "c-sidebar-nav-dropdown",
            NAV_DROPDOWN_TOGGLE: "c-sidebar-nav-dropdown-toggle",
            SHOW: "c-show",
            SIDEBAR_MINIMIZED: "c-sidebar-minimized",
            SIDEBAR_OVERLAID: "c-sidebar-overlaid",
            SIDEBAR_SHOW: "c-sidebar-show"
        },
        _o = {
            CLASS_TOGGLE: "classtoggle",
            CLICK: "click",
            CLICK_DATA_API: "click.coreui.sidebar.data-api",
            DESTROY: "destroy",
            INIT: "init",
            LOAD_DATA_API: "load.coreui.sidebar.data-api",
            TOGGLE: "toggle",
            UPDATE: "update"
        },
        bo = ".c-sidebar-nav-dropdown-toggle",
        yo = ".c-sidebar-nav-dropdown",
        Eo = ".c-sidebar-nav-link",
        wo = ".c-sidebar-nav",
        Ao = ".c-sidebar",
        Lo = function() {
            function t(t) {
                this._element = t, this.mobile = this._isMobile.bind(this), this.ps = null, this._backdrop = null, this._perfectScrollbar(_o.INIT), this._setActiveLink(), this._toggleClickOut(), this._clickOutListener = this._clickOutListener.bind(this), this._addEventListeners()
            }
            var n = t.prototype;
            return n._getAllSiblings = function(t, e) {
                var n = [];
                t = t.parentNode.firstChild;
                do {
                    3 !== t.nodeType && (e && !e(t) || n.push(t))
                } while (t = t.nextSibling);
                return n
            }, n._toggleDropdown = function(t) {
                var e = t.target;
                e.classList.contains(vo.NAV_DROPDOWN_TOGGLE) || (e = e.closest(bo)), e.closest(wo).dataset.drodpownAccordion && this._getAllSiblings(e.parentElement).forEach((function(t) {
                    t !== e.parentNode && t.classList.contains(vo.NAV_DROPDOWN) && t.classList.remove(vo.SHOW)
                })), e.parentNode.classList.toggle(vo.SHOW), this._perfectScrollbar(_o.UPDATE)
            }, n._closeSidebar = function(t) {
                var e = t.target;
                e.classList.contains(vo.NAV_LINK) || (e = e.closest(Eo)), this.mobile && !e.classList.contains(vo.NAV_DROPDOWN_TOGGLE) && (this._removeClickOut(), this._element.classList.remove(vo.SIDEBAR_SHOW))
            }, n._perfectScrollbar = function(t) {
                var e = this;
                "undefined" != typeof po && (t !== _o.INIT || this._element.classList.contains(vo.SIDEBAR_MINIMIZED) || (this.ps = this._makeScrollbar()), t === _o.DESTROY && this._destroyScrollbar(), t === _o.TOGGLE && (this._element.classList.contains(vo.SIDEBAR_MINIMIZED) ? this._destroyScrollbar() : (this._destroyScrollbar(), this.ps = this._makeScrollbar())), t !== _o.UPDATE || this._element.classList.contains(vo.SIDEBAR_MINIMIZED) || setTimeout((function() {
                    e._destroyScrollbar(), e.ps = e._makeScrollbar()
                }), mo))
            }, n._makeScrollbar = function(t) {
                if (void 0 === t && (t = wo), this._element.querySelector(t)) return new po(this._element.querySelector(t), {
                    suppressScrollX: !0
                })
            }, n._destroyScrollbar = function() {
                this.ps && (this.ps.destroy(), this.ps = null)
            }, n._getParents = function(t, e) {
                for (var n = []; t && t !== document; t = t.parentNode) e ? t.matches(e) && n.push(t) : n.push(t);
                return n
            }, n._setActiveLink = function() {
                var t = this;
                Array.from(this._element.querySelectorAll(Eo)).forEach((function(e) {
                    var n;
                    "#" === (n = /\\?.*=/.test(String(window.location)) || /\\?./.test(String(window.location)) ? String(window.location).split("?")[0] : /#./.test(String(window.location)) ? String(window.location).split("#")[0] : String(window.location)).slice(n.length - 1) && (n = n.slice(0, -1)), e.href === n && (e.classList.add(vo.ACTIVE), Array.from(t._getParents(e, yo)).forEach((function(t) {
                        t.classList.add(vo.SHOW)
                    })))
                }))
            }, n._isMobile = function(t) {
                return Boolean(window.getComputedStyle(t.target, null).getPropertyValue("--is-mobile"))
            }, n._clickOutListener = function(t) {
                this._element.contains(t.target) || (t.preventDefault(), t.stopPropagation(), this._removeClickOut(), this._element.classList.remove(vo.SIDEBAR_SHOW))
            }, n._addClickOut = function() {
                document.addEventListener(_o.CLICK, this._clickOutListener, !0)
            }, n._removeClickOut = function() {
                document.removeEventListener(_o.CLICK, this._clickOutListener, !0), this._removeBackdrop()
            }, n._toggleClickOut = function() {
                this.mobile && this._element.classList.contains(vo.SIDEBAR_SHOW) ? (this._addClickOut(), this._showBackdrop()) : this._element.classList.contains(vo.SIDEBAR_OVERLAID) && this._element.classList.contains(vo.SIDEBAR_SHOW) ? this._addClickOut() : this._removeClickOut()
            }, n._removeBackdrop = function() {
                this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null)
            }, n._showBackdrop = function() {
                this._backdrop || (this._backdrop = document.createElement("div"), this._backdrop.className = vo.BACKDROP, this._backdrop.classList.add(vo.FADE), document.body.appendChild(this._backdrop), y(this._backdrop), this._backdrop.classList.add(vo.SHOW))
            }, n._addEventListeners = function() {
                var t = this;
                Z.on(this._element, _o.CLASS_TOGGLE, (function(e) {
                    e.detail.className === vo.SIDEBAR_MINIMIZED && t._perfectScrollbar(_o.TOGGLE), e.detail.className === vo.SIDEBAR_SHOW && t._toggleClickOut()
                })), Z.on(this._element, _o.CLICK_DATA_API, bo, (function(e) {
                    e.preventDefault(), t._toggleDropdown(e)
                })), Z.on(this._element, _o.CLICK_DATA_API, Eo, (function(e) {
                    t._closeSidebar(e)
                }))
            }, t._sidebarInterface = function(e, n) {
                var i = L(e, "coreui.sidebar");
                if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t._sidebarInterface(this, e)
                }))
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return go
                }
            }]), t
        }();
    Z.on(window, _o.LOAD_DATA_API, (function() {
        Array.from(document.querySelectorAll(Ao)).forEach((function(t) {
            Lo._sidebarInterface(t)
        }))
    }));
    var So = E();
    if (So) {
        var To = So.fn.sidebar;
        So.fn.sidebar = Lo.jQueryInterface, So.fn.sidebar.Constructor = Lo, So.fn.sidebar.noConflict = function() {
            return So.fn.sidebar = To, Lo.jQueryInterface
        }
    }
    var Do = {
            HIDE: "hide.coreui.tab",
            HIDDEN: "hidden.coreui.tab",
            SHOW: "show.coreui.tab",
            SHOWN: "shown.coreui.tab",
            CLICK_DATA_API: "click.coreui.tab.data-api"
        },
        Io = "dropdown-menu",
        Oo = "active",
        Co = "disabled",
        No = "fade",
        ko = "show",
        Po = ".dropdown",
        Ho = ".nav, .list-group",
        Ro = ".active",
        Wo = ":scope > li > .active",
        xo = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Mo = ".dropdown-toggle",
        Yo = ":scope > .dropdown-menu .active",
        jo = function() {
            function t(t) {
                this._element = t, A(this._element, "coreui.tab", this)
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Oo) || this._element.classList.contains(Co))) {
                    var e, n = f(this._element),
                        i = ct.closest(this._element, Ho);
                    if (i) {
                        var r = "UL" === i.nodeName || "OL" === i.nodeName ? Wo : Ro;
                        e = (e = v(ct.find(r, i)))[e.length - 1]
                    }
                    var o = null;
                    if (e && (o = Z.trigger(e, Do.HIDE, {
                        relatedTarget: this._element
                    })), !(Z.trigger(this._element, Do.SHOW, {
                        relatedTarget: e
                    }).defaultPrevented || null !== o && o.defaultPrevented)) {
                        this._activate(this._element, i);
                        var s = function() {
                            Z.trigger(e, Do.HIDDEN, {
                                relatedTarget: t._element
                            }), Z.trigger(t._element, Do.SHOWN, {
                                relatedTarget: e
                            })
                        };
                        n ? this._activate(n, n.parentNode, s) : s()
                    }
                }
            }, n.dispose = function() {
                S(this._element, "coreui.tab"), this._element = null
            }, n._activate = function(t, e, n) {
                var i = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? ct.children(e, Ro) : ct.find(Wo, e))[0],
                    o = n && r && r.classList.contains(No),
                    s = function() {
                        return i._transitionComplete(t, r, n)
                    };
                if (r && o) {
                    var a = h(r);
                    r.classList.remove(ko), Z.one(r, "transitionend", s), g(r, a)
                } else s()
            }, n._transitionComplete = function(t, e, n) {
                if (e) {
                    e.classList.remove(Oo);
                    var i = ct.findOne(Yo, e.parentNode);
                    i && i.classList.remove(Oo), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }(t.classList.add(Oo), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), y(t), t.classList.contains(No) && t.classList.add(ko), t.parentNode && t.parentNode.classList.contains(Io)) && (ct.closest(t, Po) && v(ct.find(Mo)).forEach((function(t) {
                    return t.classList.add(Oo)
                })), t.setAttribute("aria-expanded", !0));
                n && n()
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = L(this, "coreui.tab") || new t(this);
                    if ("string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function(t) {
                return L(t, "coreui.tab")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }]), t
        }();
    Z.on(document, Do.CLICK_DATA_API, xo, (function(t) {
        t.preventDefault(), (L(this, "coreui.tab") || new jo(this)).show()
    }));
    var Xo = E();
    if (Xo) {
        var Bo = Xo.fn.tab;
        Xo.fn.tab = jo.jQueryInterface, Xo.fn.tab.Constructor = jo, Xo.fn.tab.noConflict = function() {
            return Xo.fn.tab = Bo, jo.jQueryInterface
        }
    }
    var Uo, Ko, Fo, Vo, Qo = {
            CLICK_DISMISS: "click.dismiss.coreui.toast",
            HIDE: "hide.coreui.toast",
            HIDDEN: "hidden.coreui.toast",
            SHOW: "show.coreui.toast",
            SHOWN: "shown.coreui.toast"
        },
        qo = "fade",
        Go = "hide",
        zo = "show",
        Zo = "showing",
        $o = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Jo = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ts = '[data-dismiss="toast"]',
        es = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), A(t, "coreui.toast", this)
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                if (!Z.trigger(this._element, Qo.SHOW).defaultPrevented) {
                    this._config.animation && this._element.classList.add(qo);
                    var e = function() {
                        t._element.classList.remove(Zo), t._element.classList.add(zo), Z.trigger(t._element, Qo.SHOWN), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove(Go), y(this._element), this._element.classList.add(Zo), this._config.animation) {
                        var n = h(this._element);
                        Z.one(this._element, "transitionend", e), g(this._element, n)
                    } else e()
                }
            }, n.hide = function() {
                var t = this;
                if (this._element.classList.contains(zo) && !Z.trigger(this._element, Qo.HIDE).defaultPrevented) {
                    var e = function() {
                        t._element.classList.add(Go), Z.trigger(t._element, Qo.HIDDEN)
                    };
                    if (this._element.classList.remove(zo), this._config.animation) {
                        var n = h(this._element);
                        Z.one(this._element, "transitionend", e), g(this._element, n)
                    } else e()
                }
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zo) && this._element.classList.remove(zo), Z.off(this._element, Qo.CLICK_DISMISS), S(this._element, "coreui.toast"), this._element = null, this._config = null
            }, n._getConfig = function(t) {
                return t = r({}, Jo, {}, kt.getDataAttributes(this._element), {}, "object" == typeof t && t ? t : {}), m("toast", t, this.constructor.DefaultType), t
            }, n._setListeners = function() {
                var t = this;
                Z.on(this._element, Qo.CLICK_DISMISS, ts, (function() {
                    return t.hide()
                }))
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = L(this, "coreui.toast");
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e](this)
                    }
                }))
            }, t.getInstance = function(t) {
                return L(t, "coreui.toast")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.0.0-rc.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return $o
                }
            }, {
                key: "Default",
                get: function() {
                    return Jo
                }
            }]), t
        }(),
        ns = E();
    if (ns) {
        var is = ns.fn.toast;
        ns.fn.toast = es.jQueryInterface, ns.fn.toast.Constructor = es, ns.fn.toast.noConflict = function() {
            return ns.fn.toast = is, es.jQueryInterface
        }
    }
    return Array.from || (Array.from = (Uo = Object.prototype.toString, Ko = function(t) {
        return "function" == typeof t || "[object Function]" === Uo.call(t)
    }, Fo = Math.pow(2, 53) - 1, Vo = function(t) {
        var e = function(t) {
            var e = Number(t);
            return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
        }(t);
        return Math.min(Math.max(e, 0), Fo)
    }, function(t) {
        var e = this,
            n = Object(t);
        if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var i, r = arguments.length > 1 ? arguments[1] : void 0;
        if ("undefined" != typeof r) {
            if (!Ko(r)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (i = arguments[2])
        }
        for (var o, s = Vo(n.length), a = Ko(e) ? Object(new e(s)) : new Array(s), l = 0; l < s;) o = n[l], a[l] = r ? "undefined" == typeof i ? r(o, l) : r.call(i, o, l) : o, l += 1;
        return a.length = s, a
    })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var e = this;
        do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    }),
        function() {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: null
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }
        }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
        for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
        return n > -1
    }), {
        AsyncLoad: st,
        Alert: pt,
        Button: Dt,
        Carousel: se,
        ClassToggler: ve,
        Collapse: He,
        Dropdown: gi,
        Modal: Ri,
        Popover: yr,
        Scrollspy: Yr,
        Sidebar: Lo,
        Tab: jo,
        Toast: es,
        Tooltip: sr
    }
}));
//# sourceMappingURL=coreui.bundle.min.js.map