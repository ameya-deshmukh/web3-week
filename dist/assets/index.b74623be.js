const nc = function () {
    const t = document.createElement("link").relList
    if (t && t.supports && t.supports("modulepreload")) return
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
    new MutationObserver((l) => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(l) {
        const i = {}
        return (
            l.integrity && (i.integrity = l.integrity),
            l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
            l.crossorigin === "use-credentials"
                ? (i.credentials = "include")
                : l.crossorigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        )
    }
    function r(l) {
        if (l.ep) return
        l.ep = !0
        const i = n(l)
        fetch(l.href, i)
    }
}
nc()
var el = { exports: {} },
    R = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yn = Symbol.for("react.element"),
    rc = Symbol.for("react.portal"),
    lc = Symbol.for("react.fragment"),
    ic = Symbol.for("react.strict_mode"),
    oc = Symbol.for("react.profiler"),
    uc = Symbol.for("react.provider"),
    sc = Symbol.for("react.context"),
    ac = Symbol.for("react.forward_ref"),
    cc = Symbol.for("react.suspense"),
    fc = Symbol.for("react.memo"),
    dc = Symbol.for("react.lazy"),
    jo = Symbol.iterator
function pc(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (jo && e[jo]) || e["@@iterator"]),
          typeof e == "function" ? e : null)
}
var Qu = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Ku = Object.assign,
    Yu = {}
function nn(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = Yu),
        (this.updater = n || Qu)
}
nn.prototype.isReactComponent = {}
nn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        )
    this.updater.enqueueSetState(this, e, t, "setState")
}
nn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function Xu() {}
Xu.prototype = nn.prototype
function Fi(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = Yu),
        (this.updater = n || Qu)
}
var Ui = (Fi.prototype = new Xu())
Ui.constructor = Fi
Ku(Ui, nn.prototype)
Ui.isPureReactComponent = !0
var Oo = Array.isArray,
    Gu = Object.prototype.hasOwnProperty,
    Ai = { current: null },
    Ju = { key: !0, ref: !0, __self: !0, __source: !0 }
function Zu(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            Gu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r])
    var u = arguments.length - 2
    if (u === 1) l.children = n
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r])
    return {
        $$typeof: Yn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Ai.current,
    }
}
function mc(e, t) {
    return {
        $$typeof: Yn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    }
}
function $i(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yn
}
function hc(e) {
    var t = { "=": "=0", ":": "=2" }
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n]
        })
    )
}
var Do = /\/+/g
function kl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? hc("" + e.key)
        : t.toString(36)
}
function yr(e, t, n, r, l) {
    var i = typeof e
    ;(i === "undefined" || i === "boolean") && (e = null)
    var o = !1
    if (e === null) o = !0
    else
        switch (i) {
            case "string":
            case "number":
                o = !0
                break
            case "object":
                switch (e.$$typeof) {
                    case Yn:
                    case rc:
                        o = !0
                }
        }
    if (o)
        return (
            (o = e),
            (l = l(o)),
            (e = r === "" ? "." + kl(o, 0) : r),
            Oo(l)
                ? ((n = ""),
                  e != null && (n = e.replace(Do, "$&/") + "/"),
                  yr(l, t, n, "", function (c) {
                      return c
                  }))
                : l != null &&
                  ($i(l) &&
                      (l = mc(
                          l,
                          n +
                              (!l.key || (o && o.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(Do, "$&/") + "/") +
                              e
                      )),
                  t.push(l)),
            1
        )
    if (((o = 0), (r = r === "" ? "." : r + ":"), Oo(e)))
        for (var u = 0; u < e.length; u++) {
            i = e[u]
            var s = r + kl(i, u)
            o += yr(i, t, n, s, l)
        }
    else if (((s = pc(e)), typeof s == "function"))
        for (e = s.call(e), u = 0; !(i = e.next()).done; )
            (i = i.value), (s = r + kl(i, u++)), (o += yr(i, t, n, s, l))
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        )
    return o
}
function er(e, t, n) {
    if (e == null) return e
    var r = [],
        l = 0
    return (
        yr(e, r, "", "", function (i) {
            return t.call(n, i, l++)
        }),
        r
    )
}
function vc(e) {
    if (e._status === -1) {
        var t = e._result
        ;(t = t()),
            t.then(
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n))
                },
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n))
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t))
    }
    if (e._status === 1) return e._result.default
    throw e._result
}
var se = { current: null },
    wr = { transition: null },
    gc = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: wr,
        ReactCurrentOwner: Ai,
    }
R.Children = {
    map: er,
    forEach: function (e, t, n) {
        er(
            e,
            function () {
                t.apply(this, arguments)
            },
            n
        )
    },
    count: function (e) {
        var t = 0
        return (
            er(e, function () {
                t++
            }),
            t
        )
    },
    toArray: function (e) {
        return (
            er(e, function (t) {
                return t
            }) || []
        )
    },
    only: function (e) {
        if (!$i(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            )
        return e
    },
}
R.Component = nn
R.Fragment = lc
R.Profiler = oc
R.PureComponent = Fi
R.StrictMode = ic
R.Suspense = cc
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gc
R.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        )
    var r = Ku({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (o = Ai.current)),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps
        for (s in t)
            Gu.call(t, s) &&
                !Ju.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2
    if (s === 1) r.children = n
    else if (1 < s) {
        u = Array(s)
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
        r.children = u
    }
    return { $$typeof: Yn, type: e.type, key: l, ref: i, props: r, _owner: o }
}
R.createContext = function (e) {
    return (
        (e = {
            $$typeof: sc,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: uc, _context: e }),
        (e.Consumer = e)
    )
}
R.createElement = Zu
R.createFactory = function (e) {
    var t = Zu.bind(null, e)
    return (t.type = e), t
}
R.createRef = function () {
    return { current: null }
}
R.forwardRef = function (e) {
    return { $$typeof: ac, render: e }
}
R.isValidElement = $i
R.lazy = function (e) {
    return { $$typeof: dc, _payload: { _status: -1, _result: e }, _init: vc }
}
R.memo = function (e, t) {
    return { $$typeof: fc, type: e, compare: t === void 0 ? null : t }
}
R.startTransition = function (e) {
    var t = wr.transition
    wr.transition = {}
    try {
        e()
    } finally {
        wr.transition = t
    }
}
R.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
}
R.useCallback = function (e, t) {
    return se.current.useCallback(e, t)
}
R.useContext = function (e) {
    return se.current.useContext(e)
}
R.useDebugValue = function () {}
R.useDeferredValue = function (e) {
    return se.current.useDeferredValue(e)
}
R.useEffect = function (e, t) {
    return se.current.useEffect(e, t)
}
R.useId = function () {
    return se.current.useId()
}
R.useImperativeHandle = function (e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
}
R.useInsertionEffect = function (e, t) {
    return se.current.useInsertionEffect(e, t)
}
R.useLayoutEffect = function (e, t) {
    return se.current.useLayoutEffect(e, t)
}
R.useMemo = function (e, t) {
    return se.current.useMemo(e, t)
}
R.useReducer = function (e, t, n) {
    return se.current.useReducer(e, t, n)
}
R.useRef = function (e) {
    return se.current.useRef(e)
}
R.useState = function (e) {
    return se.current.useState(e)
}
R.useSyncExternalStore = function (e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
}
R.useTransition = function () {
    return se.current.useTransition()
}
R.version = "18.1.0"
el.exports = R
var yc = el.exports,
    Ql = {},
    qu = { exports: {} },
    we = {},
    bu = { exports: {} },
    es = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
    function t(N, T) {
        var L = N.length
        N.push(T)
        e: for (; 0 < L; ) {
            var Q = (L - 1) >>> 1,
                Z = N[Q]
            if (0 < l(Z, T)) (N[Q] = T), (N[L] = Z), (L = Q)
            else break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0) return null
        var T = N[0],
            L = N.pop()
        if (L !== T) {
            N[0] = L
            e: for (var Q = 0, Z = N.length, qn = Z >>> 1; Q < qn; ) {
                var vt = 2 * (Q + 1) - 1,
                    wl = N[vt],
                    gt = vt + 1,
                    bn = N[gt]
                if (0 > l(wl, L))
                    gt < Z && 0 > l(bn, wl)
                        ? ((N[Q] = bn), (N[gt] = L), (Q = gt))
                        : ((N[Q] = wl), (N[vt] = L), (Q = vt))
                else if (gt < Z && 0 > l(bn, L))
                    (N[Q] = bn), (N[gt] = L), (Q = gt)
                else break e
            }
        }
        return T
    }
    function l(N, T) {
        var L = N.sortIndex - T.sortIndex
        return L !== 0 ? L : N.id - T.id
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var o = Date,
            u = o.now()
        e.unstable_now = function () {
            return o.now() - u
        }
    }
    var s = [],
        c = [],
        h = 1,
        y = null,
        m = 3,
        k = !1,
        w = !1,
        P = !1,
        U = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate != "undefined" ? setImmediate : null
    typeof navigator != "undefined" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function p(N) {
        for (var T = n(c); T !== null; ) {
            if (T.callback === null) r(c)
            else if (T.startTime <= N)
                r(c), (T.sortIndex = T.expirationTime), t(s, T)
            else break
            T = n(c)
        }
    }
    function v(N) {
        if (((P = !1), p(N), !w))
            if (n(s) !== null) (w = !0), gl(x)
            else {
                var T = n(c)
                T !== null && yl(v, T.startTime - N)
            }
    }
    function x(N, T) {
        ;(w = !1), P && ((P = !1), d(C), (C = -1)), (k = !0)
        var L = m
        try {
            for (
                p(T), y = n(s);
                y !== null && (!(y.expirationTime > T) || (N && !ze()));

            ) {
                var Q = y.callback
                if (typeof Q == "function") {
                    ;(y.callback = null), (m = y.priorityLevel)
                    var Z = Q(y.expirationTime <= T)
                    ;(T = e.unstable_now()),
                        typeof Z == "function"
                            ? (y.callback = Z)
                            : y === n(s) && r(s),
                        p(T)
                } else r(s)
                y = n(s)
            }
            if (y !== null) var qn = !0
            else {
                var vt = n(c)
                vt !== null && yl(v, vt.startTime - T), (qn = !1)
            }
            return qn
        } finally {
            ;(y = null), (m = L), (k = !1)
        }
    }
    var E = !1,
        _ = null,
        C = -1,
        H = 5,
        M = -1
    function ze() {
        return !(e.unstable_now() - M < H)
    }
    function on() {
        if (_ !== null) {
            var N = e.unstable_now()
            M = N
            var T = !0
            try {
                T = _(!0, N)
            } finally {
                T ? un() : ((E = !1), (_ = null))
            }
        } else E = !1
    }
    var un
    if (typeof a == "function")
        un = function () {
            a(on)
        }
    else if (typeof MessageChannel != "undefined") {
        var Mo = new MessageChannel(),
            tc = Mo.port2
        ;(Mo.port1.onmessage = on),
            (un = function () {
                tc.postMessage(null)
            })
    } else
        un = function () {
            U(on, 0)
        }
    function gl(N) {
        ;(_ = N), E || ((E = !0), un())
    }
    function yl(N, T) {
        C = U(function () {
            N(e.unstable_now())
        }, T)
    }
    ;(e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (N) {
            N.callback = null
        }),
        (e.unstable_continueExecution = function () {
            w || k || ((w = !0), gl(x))
        }),
        (e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (H = 0 < N ? Math.floor(1e3 / N) : 5)
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s)
        }),
        (e.unstable_next = function (N) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var T = 3
                    break
                default:
                    T = m
            }
            var L = m
            m = T
            try {
                return N()
            } finally {
                m = L
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (N, T) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break
                default:
                    N = 3
            }
            var L = m
            m = N
            try {
                return T()
            } finally {
                m = L
            }
        }),
        (e.unstable_scheduleCallback = function (N, T, L) {
            var Q = e.unstable_now()
            switch (
                (typeof L == "object" && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == "number" && 0 < L ? Q + L : Q))
                    : (L = Q),
                N)
            ) {
                case 1:
                    var Z = -1
                    break
                case 2:
                    Z = 250
                    break
                case 5:
                    Z = 1073741823
                    break
                case 4:
                    Z = 1e4
                    break
                default:
                    Z = 5e3
            }
            return (
                (Z = L + Z),
                (N = {
                    id: h++,
                    callback: T,
                    priorityLevel: N,
                    startTime: L,
                    expirationTime: Z,
                    sortIndex: -1,
                }),
                L > Q
                    ? ((N.sortIndex = L),
                      t(c, N),
                      n(s) === null &&
                          N === n(c) &&
                          (P ? (d(C), (C = -1)) : (P = !0), yl(v, L - Q)))
                    : ((N.sortIndex = Z), t(s, N), w || k || ((w = !0), gl(x))),
                N
            )
        }),
        (e.unstable_shouldYield = ze),
        (e.unstable_wrapCallback = function (N) {
            var T = m
            return function () {
                var L = m
                m = T
                try {
                    return N.apply(this, arguments)
                } finally {
                    m = L
                }
            }
        })
})(es)
bu.exports = es
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ts = el.exports,
    ye = bu.exports
function g(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n])
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    )
}
var ns = new Set(),
    Ln = {}
function Tt(e, t) {
    Jt(e, t), Jt(e + "Capture", t)
}
function Jt(e, t) {
    for (Ln[e] = t, e = 0; e < t.length; e++) ns.add(t[e])
}
var Ye = !(
        typeof window == "undefined" ||
        typeof window.document == "undefined" ||
        typeof window.document.createElement == "undefined"
    ),
    Kl = Object.prototype.hasOwnProperty,
    wc =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Io = {},
    Fo = {}
function kc(e) {
    return Kl.call(Fo, e)
        ? !0
        : Kl.call(Io, e)
        ? !1
        : wc.test(e)
        ? (Fo[e] = !0)
        : ((Io[e] = !0), !1)
}
function xc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-")
        default:
            return !1
    }
}
function Sc(e, t, n, r) {
    if (t === null || typeof t == "undefined" || xc(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t
            case 4:
                return t === !1
            case 5:
                return isNaN(t)
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function ae(e, t, n, r, l, i, o) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o)
}
var te = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        te[e] = new ae(e, 0, !1, e, null, !1, !1)
    })
;[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0]
    te[t] = new ae(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    te[e] = new ae(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
    te[e] = new ae(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
    te[e] = new ae(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
    te[e] = new ae(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
    te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Bi = /[\-:]([a-z])/g
function Vi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Bi, Vi)
        te[t] = new ae(t, 1, !1, e, null, !1, !1)
    })
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Bi, Vi)
        te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    })
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Bi, Vi)
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
    te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
te.xlinkHref = new ae(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
)
;["src", "href", "action", "formAction"].forEach(function (e) {
    te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Wi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null
    ;(l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Sc(t, n, l, r) && (n = null),
        r || l === null
            ? kc(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
            : ((t = l.attributeName),
              (r = l.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((l = l.type),
                    (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Je = ts.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tr = Symbol.for("react.element"),
    Mt = Symbol.for("react.portal"),
    jt = Symbol.for("react.fragment"),
    Hi = Symbol.for("react.strict_mode"),
    Yl = Symbol.for("react.profiler"),
    rs = Symbol.for("react.provider"),
    ls = Symbol.for("react.context"),
    Qi = Symbol.for("react.forward_ref"),
    Xl = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    Ki = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    is = Symbol.for("react.offscreen"),
    Uo = Symbol.iterator
function sn(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Uo && e[Uo]) || e["@@iterator"]),
          typeof e == "function" ? e : null)
}
var V = Object.assign,
    xl
function gn(e) {
    if (xl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/)
            xl = (t && t[1]) || ""
        }
    return (
        `
` +
        xl +
        e
    )
}
var Sl = !1
function Nl(e, t) {
    if (!e || Sl) return ""
    Sl = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error()
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var l = c.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = l.length - 1,
                    u = i.length - 1;
                1 <= o && 0 <= u && l[o] !== i[u];

            )
                u--
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if ((o--, u--, 0 > u || l[o] !== i[u])) {
                                var s =
                                    `
` + l[o].replace(" at new ", " at ")
                                return (
                                    e.displayName &&
                                        s.includes("<anonymous>") &&
                                        (s = s.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    s
                                )
                            }
                        while (1 <= o && 0 <= u)
                    break
                }
        }
    } finally {
        ;(Sl = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : "") ? gn(e) : ""
}
function Nc(e) {
    switch (e.tag) {
        case 5:
            return gn(e.type)
        case 16:
            return gn("Lazy")
        case 13:
            return gn("Suspense")
        case 19:
            return gn("SuspenseList")
        case 0:
        case 2:
        case 15:
            return (e = Nl(e.type, !1)), e
        case 11:
            return (e = Nl(e.type.render, !1)), e
        case 1:
            return (e = Nl(e.type, !0)), e
        default:
            return ""
    }
}
function Jl(e) {
    if (e == null) return null
    if (typeof e == "function") return e.displayName || e.name || null
    if (typeof e == "string") return e
    switch (e) {
        case jt:
            return "Fragment"
        case Mt:
            return "Portal"
        case Yl:
            return "Profiler"
        case Hi:
            return "StrictMode"
        case Xl:
            return "Suspense"
        case Gl:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case ls:
                return (e.displayName || "Context") + ".Consumer"
            case rs:
                return (e._context.displayName || "Context") + ".Provider"
            case Qi:
                var t = e.render
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                )
            case Ki:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Jl(e.type) || "Memo"
                )
            case qe:
                ;(t = e._payload), (e = e._init)
                try {
                    return Jl(e(t))
                } catch {}
        }
    return null
}
function Ec(e) {
    var t = e.type
    switch (e.tag) {
        case 24:
            return "Cache"
        case 9:
            return (t.displayName || "Context") + ".Consumer"
        case 10:
            return (t._context.displayName || "Context") + ".Provider"
        case 18:
            return "DehydratedFragment"
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            )
        case 7:
            return "Fragment"
        case 5:
            return t
        case 4:
            return "Portal"
        case 3:
            return "Root"
        case 6:
            return "Text"
        case 16:
            return Jl(t)
        case 8:
            return t === Hi ? "StrictMode" : "Mode"
        case 22:
            return "Offscreen"
        case 12:
            return "Profiler"
        case 21:
            return "Scope"
        case 13:
            return "Suspense"
        case 19:
            return "SuspenseList"
        case 25:
            return "TracingMarker"
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null
            if (typeof t == "string") return t
    }
    return null
}
function ct(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e
        case "object":
            return e
        default:
            return ""
    }
}
function os(e) {
    var t = e.type
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    )
}
function _c(e) {
    var t = os(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t]
    if (
        !e.hasOwnProperty(t) &&
        typeof n != "undefined" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            i = n.set
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this)
                },
                set: function (o) {
                    ;(r = "" + o), i.call(this, o)
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r
                },
                setValue: function (o) {
                    r = "" + o
                },
                stopTracking: function () {
                    ;(e._valueTracker = null), delete e[t]
                },
            }
        )
    }
}
function nr(e) {
    e._valueTracker || (e._valueTracker = _c(e))
}
function us(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
        r = ""
    return (
        e && (r = os(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    )
}
function Tr(e) {
    if (
        ((e = e || (typeof document != "undefined" ? document : void 0)),
        typeof e == "undefined")
    )
        return null
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Zl(e, t) {
    var n = t.checked
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked,
    })
}
function Ao(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = ct(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        })
}
function ss(e, t) {
    ;(t = t.checked), t != null && Wi(e, "checked", t, !1)
}
function ql(e, t) {
    ss(e, t)
    var n = ct(t.value),
        r = t.type
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n)
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value")
        return
    }
    t.hasOwnProperty("value")
        ? bl(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && bl(e, t.type, ct(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked)
}
function $o(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return
        ;(t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t)
    }
    ;(n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n)
}
function bl(e, t, n) {
    ;(t !== "number" || Tr(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var yn = Array.isArray
function Ht(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {}
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ct(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ei(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(g(91))
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    })
}
function Bo(e, t) {
    var n = t.value
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(g(92))
            if (yn(n)) {
                if (1 < n.length) throw Error(g(93))
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), (n = t)
    }
    e._wrapperState = { initialValue: ct(n) }
}
function as(e, t) {
    var n = ct(t.value),
        r = ct(t.defaultValue)
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Vo(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t)
}
function cs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg"
        case "math":
            return "http://www.w3.org/1998/Math/MathML"
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function ti(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? cs(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e
}
var rr,
    fs = (function (e) {
        return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l)
                  })
              }
            : e
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t
        else {
            for (
                rr = rr || document.createElement("div"),
                    rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = rr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
    })
function Rn(e, t) {
    if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t
            return
        }
    }
    e.textContent = t
}
var xn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Cc = ["Webkit", "ms", "Moz", "O"]
Object.keys(xn).forEach(function (e) {
    Cc.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xn[t] = xn[e])
    })
})
function ds(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (xn.hasOwnProperty(e) && xn[e])
        ? ("" + t).trim()
        : t + "px"
}
function ps(e, t) {
    e = e.style
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ds(n, t[n], r)
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l)
        }
}
var Pc = V(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
)
function ni(e, t) {
    if (t) {
        if (Pc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(g(137, e))
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(g(60))
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(g(62))
    }
}
function ri(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string"
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1
        default:
            return !0
    }
}
var li = null
function Yi(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    )
}
var ii = null,
    Qt = null,
    Kt = null
function Wo(e) {
    if ((e = Jn(e))) {
        if (typeof ii != "function") throw Error(g(280))
        var t = e.stateNode
        t && ((t = il(t)), ii(e.stateNode, e.type, t))
    }
}
function ms(e) {
    Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e)
}
function hs() {
    if (Qt) {
        var e = Qt,
            t = Kt
        if (((Kt = Qt = null), Wo(e), t))
            for (e = 0; e < t.length; e++) Wo(t[e])
    }
}
function vs(e, t) {
    return e(t)
}
function gs() {}
var El = !1
function ys(e, t, n) {
    if (El) return e(t, n)
    El = !0
    try {
        return vs(e, t, n)
    } finally {
        ;(El = !1), (Qt !== null || Kt !== null) && (gs(), hs())
    }
}
function Mn(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = il(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            ;(r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r)
            break e
        default:
            e = !1
    }
    if (e) return null
    if (n && typeof n != "function") throw Error(g(231, t, typeof n))
    return n
}
var oi = !1
if (Ye)
    try {
        var an = {}
        Object.defineProperty(an, "passive", {
            get: function () {
                oi = !0
            },
        }),
            window.addEventListener("test", an, an),
            window.removeEventListener("test", an, an)
    } catch {
        oi = !1
    }
function zc(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3)
    try {
        t.apply(n, c)
    } catch (h) {
        this.onError(h)
    }
}
var Sn = !1,
    Lr = null,
    Rr = !1,
    ui = null,
    Tc = {
        onError: function (e) {
            ;(Sn = !0), (Lr = e)
        },
    }
function Lc(e, t, n, r, l, i, o, u, s) {
    ;(Sn = !1), (Lr = null), zc.apply(Tc, arguments)
}
function Rc(e, t, n, r, l, i, o, u, s) {
    if ((Lc.apply(this, arguments), Sn)) {
        if (Sn) {
            var c = Lr
            ;(Sn = !1), (Lr = null)
        } else throw Error(g(198))
        Rr || ((Rr = !0), (ui = c))
    }
}
function Lt(e) {
    var t = e,
        n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
        e = t
        do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return)
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ws(e) {
    if (e.tag === 13) {
        var t = e.memoizedState
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated
    }
    return null
}
function Ho(e) {
    if (Lt(e) !== e) throw Error(g(188))
}
function Mc(e) {
    var t = e.alternate
    if (!t) {
        if (((t = Lt(e)), t === null)) throw Error(g(188))
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return
        if (l === null) break
        var i = l.alternate
        if (i === null) {
            if (((r = l.return), r !== null)) {
                n = r
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n) return Ho(l), e
                if (i === r) return Ho(l), t
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return) (n = l), (r = i)
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    ;(o = !0), (n = l), (r = i)
                    break
                }
                if (u === r) {
                    ;(o = !0), (r = l), (n = i)
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        ;(o = !0), (n = i), (r = l)
                        break
                    }
                    if (u === r) {
                        ;(o = !0), (r = i), (n = l)
                        break
                    }
                    u = u.sibling
                }
                if (!o) throw Error(g(189))
            }
        }
        if (n.alternate !== r) throw Error(g(190))
    }
    if (n.tag !== 3) throw Error(g(188))
    return n.stateNode.current === n ? e : t
}
function ks(e) {
    return (e = Mc(e)), e !== null ? xs(e) : null
}
function xs(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
        var t = xs(e)
        if (t !== null) return t
        e = e.sibling
    }
    return null
}
var Ss = ye.unstable_scheduleCallback,
    Qo = ye.unstable_cancelCallback,
    jc = ye.unstable_shouldYield,
    Oc = ye.unstable_requestPaint,
    K = ye.unstable_now,
    Dc = ye.unstable_getCurrentPriorityLevel,
    Xi = ye.unstable_ImmediatePriority,
    Ns = ye.unstable_UserBlockingPriority,
    Mr = ye.unstable_NormalPriority,
    Ic = ye.unstable_LowPriority,
    Es = ye.unstable_IdlePriority,
    tl = null,
    Ae = null
function Fc(e) {
    if (Ae && typeof Ae.onCommitFiberRoot == "function")
        try {
            Ae.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : $c,
    Uc = Math.log,
    Ac = Math.LN2
function $c(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Uc(e) / Ac) | 0)) | 0
}
var lr = 64,
    ir = 4194304
function wn(e) {
    switch (e & -e) {
        case 1:
            return 1
        case 2:
            return 2
        case 4:
            return 4
        case 8:
            return 8
        case 16:
            return 16
        case 32:
            return 32
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424
        case 134217728:
            return 134217728
        case 268435456:
            return 268435456
        case 536870912:
            return 536870912
        case 1073741824:
            return 1073741824
        default:
            return e
    }
}
function jr(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455
    if (o !== 0) {
        var u = o & ~l
        u !== 0 ? (r = wn(u)) : ((i &= o), i !== 0 && (r = wn(i)))
    } else (o = n & ~l), o !== 0 ? (r = wn(o)) : i !== 0 && (r = wn(i))
    if (r === 0) return 0
    if (
        t !== 0 &&
        t !== r &&
        (t & l) === 0 &&
        ((l = r & -r),
        (i = t & -t),
        l >= i || (l === 16 && (i & 4194240) !== 0))
    )
        return t
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
    return r
}
function Bc(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1
        default:
            return -1
    }
}
function Vc(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var o = 31 - Oe(i),
            u = 1 << o,
            s = l[o]
        s === -1
            ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = Bc(u, t))
            : s <= t && (e.expiredLanes |= u),
            (i &= ~u)
    }
}
function si(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
}
function _s() {
    var e = lr
    return (lr <<= 1), (lr & 4194240) === 0 && (lr = 64), e
}
function _l(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
}
function Xn(e, t, n) {
    ;(e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Oe(t)),
        (e[t] = n)
}
function Wc(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Oe(n),
            i = 1 << l
        ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i)
    }
}
function Gi(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
        var r = 31 - Oe(n),
            l = 1 << r
        ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
    }
}
var O = 0
function Cs(e) {
    return (
        (e &= -e),
        1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    )
}
var Ps,
    Ji,
    zs,
    Ts,
    Ls,
    ai = !1,
    or = [],
    lt = null,
    it = null,
    ot = null,
    jn = new Map(),
    On = new Map(),
    et = [],
    Hc =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        )
function Ko(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null
            break
        case "dragenter":
        case "dragleave":
            it = null
            break
        case "mouseover":
        case "mouseout":
            ot = null
            break
        case "pointerover":
        case "pointerout":
            jn.delete(t.pointerId)
            break
        case "gotpointercapture":
        case "lostpointercapture":
            On.delete(t.pointerId)
    }
}
function cn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [l],
          }),
          t !== null && ((t = Jn(t)), t !== null && Ji(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e)
}
function Qc(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (lt = cn(lt, e, t, n, r, l)), !0
        case "dragenter":
            return (it = cn(it, e, t, n, r, l)), !0
        case "mouseover":
            return (ot = cn(ot, e, t, n, r, l)), !0
        case "pointerover":
            var i = l.pointerId
            return jn.set(i, cn(jn.get(i) || null, e, t, n, r, l)), !0
        case "gotpointercapture":
            return (
                (i = l.pointerId),
                On.set(i, cn(On.get(i) || null, e, t, n, r, l)),
                !0
            )
    }
    return !1
}
function Rs(e) {
    var t = kt(e.target)
    if (t !== null) {
        var n = Lt(t)
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = ws(n)), t !== null)) {
                    ;(e.blockedOn = t),
                        Ls(e.priority, function () {
                            zs(n)
                        })
                    return
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
                return
            }
        }
    }
    e.blockedOn = null
}
function kr(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (n === null) {
            n = e.nativeEvent
            var r = new n.constructor(n.type, n)
            ;(li = r), n.target.dispatchEvent(r), (li = null)
        } else return (t = Jn(n)), t !== null && Ji(t), (e.blockedOn = n), !1
        t.shift()
    }
    return !0
}
function Yo(e, t, n) {
    kr(e) && n.delete(t)
}
function Kc() {
    ;(ai = !1),
        lt !== null && kr(lt) && (lt = null),
        it !== null && kr(it) && (it = null),
        ot !== null && kr(ot) && (ot = null),
        jn.forEach(Yo),
        On.forEach(Yo)
}
function fn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        ai ||
            ((ai = !0),
            ye.unstable_scheduleCallback(ye.unstable_NormalPriority, Kc)))
}
function Dn(e) {
    function t(l) {
        return fn(l, e)
    }
    if (0 < or.length) {
        fn(or[0], e)
        for (var n = 1; n < or.length; n++) {
            var r = or[n]
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (
        lt !== null && fn(lt, e),
            it !== null && fn(it, e),
            ot !== null && fn(ot, e),
            jn.forEach(t),
            On.forEach(t),
            n = 0;
        n < et.length;
        n++
    )
        (r = et[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
        Rs(n), n.blockedOn === null && et.shift()
}
var Yt = Je.ReactCurrentBatchConfig,
    Or = !0
function Yc(e, t, n, r) {
    var l = O,
        i = Yt.transition
    Yt.transition = null
    try {
        ;(O = 1), Zi(e, t, n, r)
    } finally {
        ;(O = l), (Yt.transition = i)
    }
}
function Xc(e, t, n, r) {
    var l = O,
        i = Yt.transition
    Yt.transition = null
    try {
        ;(O = 4), Zi(e, t, n, r)
    } finally {
        ;(O = l), (Yt.transition = i)
    }
}
function Zi(e, t, n, r) {
    if (Or) {
        var l = ci(e, t, n, r)
        if (l === null) Dl(e, t, r, Dr, n), Ko(e, r)
        else if (Qc(l, e, t, n, r)) r.stopPropagation()
        else if ((Ko(e, r), t & 4 && -1 < Hc.indexOf(e))) {
            for (; l !== null; ) {
                var i = Jn(l)
                if (
                    (i !== null && Ps(i),
                    (i = ci(e, t, n, r)),
                    i === null && Dl(e, t, r, Dr, n),
                    i === l)
                )
                    break
                l = i
            }
            l !== null && r.stopPropagation()
        } else Dl(e, t, r, null, n)
    }
}
var Dr = null
function ci(e, t, n, r) {
    if (((Dr = null), (e = Yi(r)), (e = kt(e)), e !== null))
        if (((t = Lt(e)), t === null)) e = null
        else if (((n = t.tag), n === 13)) {
            if (((e = ws(t)), e !== null)) return e
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
        } else t !== e && (e = null)
    return (Dr = e), null
}
function Ms(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4
        case "message":
            switch (Dc()) {
                case Xi:
                    return 1
                case Ns:
                    return 4
                case Mr:
                case Ic:
                    return 16
                case Es:
                    return 536870912
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    qi = null,
    xr = null
function js() {
    if (xr) return xr
    var e,
        t = qi,
        n = t.length,
        r,
        l = "value" in nt ? nt.value : nt.textContent,
        i = l.length
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (xr = l.slice(e, 1 < r ? 1 - r : void 0))
}
function Sr(e) {
    var t = e.keyCode
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    )
}
function ur() {
    return !0
}
function Xo() {
    return !1
}
function ke(e) {
    function t(n, r, l, i, o) {
        ;(this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null)
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? ur
                : Xo),
            (this.isPropagationStopped = Xo),
            this
        )
    }
    return (
        V(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0
                var n = this.nativeEvent
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = ur))
            },
            stopPropagation: function () {
                var n = this.nativeEvent
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = ur))
            },
            persist: function () {},
            isPersistent: ur,
        }),
        t
    )
}
var rn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    bi = ke(rn),
    Gn = V({}, rn, { view: 0, detail: 0 }),
    Gc = ke(Gn),
    Cl,
    Pl,
    dn,
    nl = V({}, Gn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: eo,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== dn &&
                      (dn && e.type === "mousemove"
                          ? ((Cl = e.screenX - dn.screenX),
                            (Pl = e.screenY - dn.screenY))
                          : (Pl = Cl = 0),
                      (dn = e)),
                  Cl)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Pl
        },
    }),
    Go = ke(nl),
    Jc = V({}, nl, { dataTransfer: 0 }),
    Zc = ke(Jc),
    qc = V({}, Gn, { relatedTarget: 0 }),
    zl = ke(qc),
    bc = V({}, rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ef = ke(bc),
    tf = V({}, rn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        },
    }),
    nf = ke(tf),
    rf = V({}, rn, { data: 0 }),
    Jo = ke(rf),
    lf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    of = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    uf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    }
function sf(e) {
    var t = this.nativeEvent
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = uf[e])
        ? !!t[e]
        : !1
}
function eo() {
    return sf
}
var af = V({}, Gn, {
        key: function (e) {
            if (e.key) {
                var t = lf[e.key] || e.key
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress"
                ? ((e = Sr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? of[e.keyCode] || "Unidentified"
                : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: eo,
        charCode: function (e) {
            return e.type === "keypress" ? Sr(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress"
                ? Sr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0
        },
    }),
    cf = ke(af),
    ff = V({}, nl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Zo = ke(ff),
    df = V({}, Gn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: eo,
    }),
    pf = ke(df),
    mf = V({}, rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hf = ke(mf),
    vf = V({}, nl, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    gf = ke(vf),
    yf = [9, 13, 27, 32],
    to = Ye && "CompositionEvent" in window,
    Nn = null
Ye && "documentMode" in document && (Nn = document.documentMode)
var wf = Ye && "TextEvent" in window && !Nn,
    Os = Ye && (!to || (Nn && 8 < Nn && 11 >= Nn)),
    qo = String.fromCharCode(32),
    bo = !1
function Ds(e, t) {
    switch (e) {
        case "keyup":
            return yf.indexOf(t.keyCode) !== -1
        case "keydown":
            return t.keyCode !== 229
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0
        default:
            return !1
    }
}
function Is(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var Ot = !1
function kf(e, t) {
    switch (e) {
        case "compositionend":
            return Is(t)
        case "keypress":
            return t.which !== 32 ? null : ((bo = !0), qo)
        case "textInput":
            return (e = t.data), e === qo && bo ? null : e
        default:
            return null
    }
}
function xf(e, t) {
    if (Ot)
        return e === "compositionend" || (!to && Ds(e, t))
            ? ((e = js()), (xr = qi = nt = null), (Ot = !1), e)
            : null
    switch (e) {
        case "paste":
            return null
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char
                if (t.which) return String.fromCharCode(t.which)
            }
            return null
        case "compositionend":
            return Os && t.locale !== "ko" ? null : t.data
        default:
            return null
    }
}
var Sf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
}
function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === "input" ? !!Sf[e.type] : t === "textarea"
}
function Fs(e, t, n, r) {
    ms(r),
        (t = Ir(t, "onChange")),
        0 < t.length &&
            ((n = new bi("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }))
}
var En = null,
    In = null
function Nf(e) {
    Xs(e, 0)
}
function rl(e) {
    var t = Ft(e)
    if (us(t)) return e
}
function Ef(e, t) {
    if (e === "change") return t
}
var Us = !1
if (Ye) {
    var Tl
    if (Ye) {
        var Ll = "oninput" in document
        if (!Ll) {
            var tu = document.createElement("div")
            tu.setAttribute("oninput", "return;"),
                (Ll = typeof tu.oninput == "function")
        }
        Tl = Ll
    } else Tl = !1
    Us = Tl && (!document.documentMode || 9 < document.documentMode)
}
function nu() {
    En && (En.detachEvent("onpropertychange", As), (In = En = null))
}
function As(e) {
    if (e.propertyName === "value" && rl(In)) {
        var t = []
        Fs(t, In, e, Yi(e)), ys(Nf, t)
    }
}
function _f(e, t, n) {
    e === "focusin"
        ? (nu(), (En = t), (In = n), En.attachEvent("onpropertychange", As))
        : e === "focusout" && nu()
}
function Cf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return rl(In)
}
function Pf(e, t) {
    if (e === "click") return rl(t)
}
function zf(e, t) {
    if (e === "input" || e === "change") return rl(t)
}
function Tf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var De = typeof Object.is == "function" ? Object.is : Tf
function Fn(e, t) {
    if (De(e, t)) return !0
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1
    var n = Object.keys(e),
        r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
        var l = n[r]
        if (!Kl.call(t, l) || !De(e[l], t[l])) return !1
    }
    return !0
}
function ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
}
function lu(e, t) {
    var n = ru(e)
    e = 0
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e }
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ru(n)
    }
}
function $s(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? $s(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1
}
function Bs() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = Tr(e.document)
    }
    return t
}
function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    )
}
function Lf(e) {
    var t = Bs(),
        n = e.focusedElem,
        r = e.selectionRange
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        $s(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && no(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length))
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection()
                var l = n.textContent.length,
                    i = Math.min(r.start, l)
                ;(r = r.end === void 0 ? i : Math.min(r.end, l)),
                    !e.extend && i > r && ((l = r), (r = i), (i = l)),
                    (l = lu(n, i))
                var o = lu(n, r)
                l &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
    }
}
var Rf = Ye && "documentMode" in document && 11 >= document.documentMode,
    Dt = null,
    fi = null,
    _n = null,
    di = !1
function iu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    di ||
        Dt == null ||
        Dt !== Tr(r) ||
        ((r = Dt),
        "selectionStart" in r && no(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (_n && Fn(_n, r)) ||
            ((_n = r),
            (r = Ir(fi, "onSelect")),
            0 < r.length &&
                ((t = new bi("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Dt))))
}
function sr(e, t) {
    var n = {}
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    )
}
var It = {
        animationend: sr("Animation", "AnimationEnd"),
        animationiteration: sr("Animation", "AnimationIteration"),
        animationstart: sr("Animation", "AnimationStart"),
        transitionend: sr("Transition", "TransitionEnd"),
    },
    Rl = {},
    Vs = {}
Ye &&
    ((Vs = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete It.animationend.animation,
        delete It.animationiteration.animation,
        delete It.animationstart.animation),
    "TransitionEvent" in window || delete It.transitionend.transition)
function ll(e) {
    if (Rl[e]) return Rl[e]
    if (!It[e]) return e
    var t = It[e],
        n
    for (n in t) if (t.hasOwnProperty(n) && n in Vs) return (Rl[e] = t[n])
    return e
}
var Ws = ll("animationend"),
    Hs = ll("animationiteration"),
    Qs = ll("animationstart"),
    Ks = ll("transitionend"),
    Ys = new Map(),
    ou =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        )
function pt(e, t) {
    Ys.set(e, t), Tt(t, [e])
}
for (var Ml = 0; Ml < ou.length; Ml++) {
    var jl = ou[Ml],
        Mf = jl.toLowerCase(),
        jf = jl[0].toUpperCase() + jl.slice(1)
    pt(Mf, "on" + jf)
}
pt(Ws, "onAnimationEnd")
pt(Hs, "onAnimationIteration")
pt(Qs, "onAnimationStart")
pt("dblclick", "onDoubleClick")
pt("focusin", "onFocus")
pt("focusout", "onBlur")
pt(Ks, "onTransitionEnd")
Jt("onMouseEnter", ["mouseout", "mouseover"])
Jt("onMouseLeave", ["mouseout", "mouseover"])
Jt("onPointerEnter", ["pointerout", "pointerover"])
Jt("onPointerLeave", ["pointerout", "pointerover"])
Tt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
)
Tt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
)
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
Tt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
)
Tt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
)
Tt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
)
var kn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Of = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(kn)
    )
function uu(e, t, n) {
    var r = e.type || "unknown-event"
    ;(e.currentTarget = n), Rc(r, t, void 0, e), (e.currentTarget = null)
}
function Xs(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event
        r = r.listeners
        e: {
            var i = void 0
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        s = u.instance,
                        c = u.currentTarget
                    if (((u = u.listener), s !== i && l.isPropagationStopped()))
                        break e
                    uu(l, u, c), (i = s)
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = r[o]),
                        (s = u.instance),
                        (c = u.currentTarget),
                        (u = u.listener),
                        s !== i && l.isPropagationStopped())
                    )
                        break e
                    uu(l, u, c), (i = s)
                }
        }
    }
    if (Rr) throw ((e = ui), (Rr = !1), (ui = null), e)
}
function I(e, t) {
    var n = t[gi]
    n === void 0 && (n = t[gi] = new Set())
    var r = e + "__bubble"
    n.has(r) || (Gs(t, e, 2, !1), n.add(r))
}
function Ol(e, t, n) {
    var r = 0
    t && (r |= 4), Gs(n, e, r, t)
}
var ar = "_reactListening" + Math.random().toString(36).slice(2)
function Un(e) {
    if (!e[ar]) {
        ;(e[ar] = !0),
            ns.forEach(function (n) {
                n !== "selectionchange" &&
                    (Of.has(n) || Ol(n, !1, e), Ol(n, !0, e))
            })
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[ar] || ((t[ar] = !0), Ol("selectionchange", !1, t))
    }
}
function Gs(e, t, n, r) {
    switch (Ms(t)) {
        case 1:
            var l = Yc
            break
        case 4:
            l = Xc
            break
        default:
            l = Zi
    }
    ;(n = l.bind(null, t, n, e)),
        (l = void 0),
        !oi ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
            ? e.addEventListener(t, n, { passive: l })
            : e.addEventListener(t, n, !1)
}
function Dl(e, t, n, r, l) {
    var i = r
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e: for (;;) {
            if (r === null) return
            var o = r.tag
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag
                        if (
                            (s === 3 || s === 4) &&
                            ((s = o.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (((o = kt(u)), o === null)) return
                    if (((s = o.tag), s === 5 || s === 6)) {
                        r = i = o
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    ys(function () {
        var c = i,
            h = Yi(n),
            y = []
        e: {
            var m = Ys.get(e)
            if (m !== void 0) {
                var k = bi,
                    w = e
                switch (e) {
                    case "keypress":
                        if (Sr(n) === 0) break e
                    case "keydown":
                    case "keyup":
                        k = cf
                        break
                    case "focusin":
                        ;(w = "focus"), (k = zl)
                        break
                    case "focusout":
                        ;(w = "blur"), (k = zl)
                        break
                    case "beforeblur":
                    case "afterblur":
                        k = zl
                        break
                    case "click":
                        if (n.button === 2) break e
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Go
                        break
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = Zc
                        break
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = pf
                        break
                    case Ws:
                    case Hs:
                    case Qs:
                        k = ef
                        break
                    case Ks:
                        k = hf
                        break
                    case "scroll":
                        k = Gc
                        break
                    case "wheel":
                        k = gf
                        break
                    case "copy":
                    case "cut":
                    case "paste":
                        k = nf
                        break
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Zo
                }
                var P = (t & 4) !== 0,
                    U = !P && e === "scroll",
                    d = P ? (m !== null ? m + "Capture" : null) : m
                P = []
                for (var a = c, p; a !== null; ) {
                    p = a
                    var v = p.stateNode
                    if (
                        (p.tag === 5 &&
                            v !== null &&
                            ((p = v),
                            d !== null &&
                                ((v = Mn(a, d)),
                                v != null && P.push(An(a, v, p)))),
                        U)
                    )
                        break
                    a = a.return
                }
                0 < P.length &&
                    ((m = new k(m, w, null, n, h)),
                    y.push({ event: m, listeners: P }))
            }
        }
        if ((t & 7) === 0) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (k = e === "mouseout" || e === "pointerout"),
                    m &&
                        n !== li &&
                        (w = n.relatedTarget || n.fromElement) &&
                        (kt(w) || w[Xe]))
                )
                    break e
                if (
                    (k || m) &&
                    ((m =
                        h.window === h
                            ? h
                            : (m = h.ownerDocument)
                            ? m.defaultView || m.parentWindow
                            : window),
                    k
                        ? ((w = n.relatedTarget || n.toElement),
                          (k = c),
                          (w = w ? kt(w) : null),
                          w !== null &&
                              ((U = Lt(w)),
                              w !== U || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((k = null), (w = c)),
                    k !== w)
                ) {
                    if (
                        ((P = Go),
                        (v = "onMouseLeave"),
                        (d = "onMouseEnter"),
                        (a = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((P = Zo),
                            (v = "onPointerLeave"),
                            (d = "onPointerEnter"),
                            (a = "pointer")),
                        (U = k == null ? m : Ft(k)),
                        (p = w == null ? m : Ft(w)),
                        (m = new P(v, a + "leave", k, n, h)),
                        (m.target = U),
                        (m.relatedTarget = p),
                        (v = null),
                        kt(h) === c &&
                            ((P = new P(d, a + "enter", w, n, h)),
                            (P.target = p),
                            (P.relatedTarget = U),
                            (v = P)),
                        (U = v),
                        k && w)
                    )
                        t: {
                            for (P = k, d = w, a = 0, p = P; p; p = Rt(p)) a++
                            for (p = 0, v = d; v; v = Rt(v)) p++
                            for (; 0 < a - p; ) (P = Rt(P)), a--
                            for (; 0 < p - a; ) (d = Rt(d)), p--
                            for (; a--; ) {
                                if (
                                    P === d ||
                                    (d !== null && P === d.alternate)
                                )
                                    break t
                                ;(P = Rt(P)), (d = Rt(d))
                            }
                            P = null
                        }
                    else P = null
                    k !== null && su(y, m, k, P, !1),
                        w !== null && U !== null && su(y, U, w, P, !0)
                }
            }
            e: {
                if (
                    ((m = c ? Ft(c) : window),
                    (k = m.nodeName && m.nodeName.toLowerCase()),
                    k === "select" || (k === "input" && m.type === "file"))
                )
                    var x = Ef
                else if (eu(m))
                    if (Us) x = zf
                    else {
                        x = Cf
                        var E = _f
                    }
                else
                    (k = m.nodeName) &&
                        k.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (x = Pf)
                if (x && (x = x(e, c))) {
                    Fs(y, x, n, h)
                    break e
                }
                E && E(e, m, c),
                    e === "focusout" &&
                        (E = m._wrapperState) &&
                        E.controlled &&
                        m.type === "number" &&
                        bl(m, "number", m.value)
            }
            switch (((E = c ? Ft(c) : window), e)) {
                case "focusin":
                    ;(eu(E) || E.contentEditable === "true") &&
                        ((Dt = E), (fi = c), (_n = null))
                    break
                case "focusout":
                    _n = fi = Dt = null
                    break
                case "mousedown":
                    di = !0
                    break
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ;(di = !1), iu(y, n, h)
                    break
                case "selectionchange":
                    if (Rf) break
                case "keydown":
                case "keyup":
                    iu(y, n, h)
            }
            var _
            if (to)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var C = "onCompositionStart"
                            break e
                        case "compositionend":
                            C = "onCompositionEnd"
                            break e
                        case "compositionupdate":
                            C = "onCompositionUpdate"
                            break e
                    }
                    C = void 0
                }
            else
                Ot
                    ? Ds(e, n) && (C = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (C = "onCompositionStart")
            C &&
                (Os &&
                    n.locale !== "ko" &&
                    (Ot || C !== "onCompositionStart"
                        ? C === "onCompositionEnd" && Ot && (_ = js())
                        : ((nt = h),
                          (qi = "value" in nt ? nt.value : nt.textContent),
                          (Ot = !0))),
                (E = Ir(c, C)),
                0 < E.length &&
                    ((C = new Jo(C, e, null, n, h)),
                    y.push({ event: C, listeners: E }),
                    _
                        ? (C.data = _)
                        : ((_ = Is(n)), _ !== null && (C.data = _)))),
                (_ = wf ? kf(e, n) : xf(e, n)) &&
                    ((c = Ir(c, "onBeforeInput")),
                    0 < c.length &&
                        ((h = new Jo(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            h
                        )),
                        y.push({ event: h, listeners: c }),
                        (h.data = _)))
        }
        Xs(y, t)
    })
}
function An(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
}
function Ir(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            i = l.stateNode
        l.tag === 5 &&
            i !== null &&
            ((l = i),
            (i = Mn(e, n)),
            i != null && r.unshift(An(e, i, l)),
            (i = Mn(e, t)),
            i != null && r.push(An(e, i, l))),
            (e = e.return)
    }
    return r
}
function Rt(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
}
function su(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            c = u.stateNode
        if (s !== null && s === r) break
        u.tag === 5 &&
            c !== null &&
            ((u = c),
            l
                ? ((s = Mn(n, i)), s != null && o.unshift(An(n, s, u)))
                : l || ((s = Mn(n, i)), s != null && o.push(An(n, s, u)))),
            (n = n.return)
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
}
var Df = /\r\n?/g,
    If = /\u0000|\uFFFD/g
function au(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Df,
            `
`
        )
        .replace(If, "")
}
function cr(e, t, n) {
    if (((t = au(t)), au(e) !== t && n)) throw Error(g(425))
}
function Fr() {}
var pi = null,
    mi = null
function hi(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    )
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
    Ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cu = typeof Promise == "function" ? Promise : void 0,
    Uf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof cu != "undefined"
            ? function (e) {
                  return cu.resolve(null).then(e).catch(Af)
              }
            : vi
function Af(e) {
    setTimeout(function () {
        throw e
    })
}
function Il(e, t) {
    var n = t,
        r = 0
    do {
        var l = n.nextSibling
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Dn(t)
                    return
                }
                r--
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++
        n = l
    } while (n)
    Dn(t)
}
function We(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
            if (t === "/$") return null
        }
    }
    return e
}
function fu(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ln = Math.random().toString(36).slice(2),
    Ue = "__reactFiber$" + ln,
    $n = "__reactProps$" + ln,
    Xe = "__reactContainer$" + ln,
    gi = "__reactEvents$" + ln,
    $f = "__reactListeners$" + ln,
    Bf = "__reactHandles$" + ln
function kt(e) {
    var t = e[Ue]
    if (t) return t
    for (var n = e.parentNode; n; ) {
        if ((t = n[Xe] || n[Ue])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = fu(e); e !== null; ) {
                    if ((n = e[Ue])) return n
                    e = fu(e)
                }
            return t
        }
        ;(e = n), (n = e.parentNode)
    }
    return null
}
function Jn(e) {
    return (
        (e = e[Ue] || e[Xe]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    )
}
function Ft(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(g(33))
}
function il(e) {
    return e[$n] || null
}
var yi = [],
    Ut = -1
function mt(e) {
    return { current: e }
}
function F(e) {
    0 > Ut || ((e.current = yi[Ut]), (yi[Ut] = null), Ut--)
}
function D(e, t) {
    Ut++, (yi[Ut] = e.current), (e.current = t)
}
var ft = {},
    ie = mt(ft),
    pe = mt(!1),
    Et = ft
function Zt(e, t) {
    var n = e.type.contextTypes
    if (!n) return ft
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext
    var l = {},
        i
    for (i in n) l[i] = t[i]
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    )
}
function me(e) {
    return (e = e.childContextTypes), e != null
}
function Ur() {
    F(pe), F(ie)
}
function du(e, t, n) {
    if (ie.current !== ft) throw Error(g(168))
    D(ie, t), D(pe, n)
}
function Js(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n
    r = r.getChildContext()
    for (var l in r) if (!(l in t)) throw Error(g(108, Ec(e) || "Unknown", l))
    return V({}, n, r)
}
function Ar(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            ft),
        (Et = ie.current),
        D(ie, e),
        D(pe, pe.current),
        !0
    )
}
function pu(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(g(169))
    n
        ? ((e = Js(e, t, Et)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          F(pe),
          F(ie),
          D(ie, e))
        : F(pe),
        D(pe, n)
}
var Ve = null,
    ol = !1,
    Fl = !1
function Zs(e) {
    Ve === null ? (Ve = [e]) : Ve.push(e)
}
function Vf(e) {
    ;(ol = !0), Zs(e)
}
function ht() {
    if (!Fl && Ve !== null) {
        Fl = !0
        var e = 0,
            t = O
        try {
            var n = Ve
            for (O = 1; e < n.length; e++) {
                var r = n[e]
                do r = r(!0)
                while (r !== null)
            }
            ;(Ve = null), (ol = !1)
        } catch (l) {
            throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ss(Xi, ht), l)
        } finally {
            ;(O = t), (Fl = !1)
        }
    }
    return null
}
var Wf = Je.ReactCurrentBatchConfig
function Le(e, t) {
    if (e && e.defaultProps) {
        ;(t = V({}, t)), (e = e.defaultProps)
        for (var n in e) t[n] === void 0 && (t[n] = e[n])
        return t
    }
    return t
}
var $r = mt(null),
    Br = null,
    At = null,
    ro = null
function lo() {
    ro = At = Br = null
}
function io(e) {
    var t = $r.current
    F($r), (e._currentValue = t)
}
function wi(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break
        e = e.return
    }
}
function Xt(e, t) {
    ;(Br = e),
        (ro = At = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            ((e.lanes & t) !== 0 && (de = !0), (e.firstContext = null))
}
function Ce(e) {
    var t = e._currentValue
    if (ro !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), At === null)) {
            if (Br === null) throw Error(g(308))
            ;(At = e), (Br.dependencies = { lanes: 0, firstContext: e })
        } else At = At.next = e
    return t
}
var je = null,
    be = !1
function oo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    }
}
function qs(e, t) {
    ;(e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            })
}
function Ke(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    }
}
function ut(e, t) {
    var n = e.updateQueue
    n !== null &&
        ((n = n.shared),
        Ba(e)
            ? ((e = n.interleaved),
              e === null
                  ? ((t.next = t), je === null ? (je = [n]) : je.push(n))
                  : ((t.next = e.next), (e.next = t)),
              (n.interleaved = t))
            : ((e = n.pending),
              e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
              (n.pending = t)))
}
function Nr(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n)
    }
}
function mu(e, t) {
    var n = e.updateQueue,
        r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            i = null
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                }
                i === null ? (l = i = o) : (i = i.next = o), (n = n.next)
            } while (n !== null)
            i === null ? (l = i = t) : (i = i.next = t)
        } else l = i = t
        ;(n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n)
        return
    }
    ;(e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t)
}
function Vr(e, t, n, r) {
    var l = e.updateQueue
    be = !1
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending
    if (u !== null) {
        l.shared.pending = null
        var s = u,
            c = s.next
        ;(s.next = null), o === null ? (i = c) : (o.next = c), (o = s)
        var h = e.alternate
        h !== null &&
            ((h = h.updateQueue),
            (u = h.lastBaseUpdate),
            u !== o &&
                (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
                (h.lastBaseUpdate = s)))
    }
    if (i !== null) {
        var y = l.baseState
        ;(o = 0), (h = c = s = null), (u = i)
        do {
            var m = u.lane,
                k = u.eventTime
            if ((r & m) === m) {
                h !== null &&
                    (h = h.next =
                        {
                            eventTime: k,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        })
                e: {
                    var w = e,
                        P = u
                    switch (((m = t), (k = n), P.tag)) {
                        case 1:
                            if (((w = P.payload), typeof w == "function")) {
                                y = w.call(k, y, m)
                                break e
                            }
                            y = w
                            break e
                        case 3:
                            w.flags = (w.flags & -65537) | 128
                        case 0:
                            if (
                                ((w = P.payload),
                                (m =
                                    typeof w == "function"
                                        ? w.call(k, y, m)
                                        : w),
                                m == null)
                            )
                                break e
                            y = V({}, y, m)
                            break e
                        case 2:
                            be = !0
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [u]) : m.push(u))
            } else
                (k = {
                    eventTime: k,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    h === null ? ((c = h = k), (s = y)) : (h = h.next = k),
                    (o |= m)
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break
                ;(m = u),
                    (u = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null)
            }
        } while (1)
        if (
            (h === null && (s = y),
            (l.baseState = s),
            (l.firstBaseUpdate = c),
            (l.lastBaseUpdate = h),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t
            do (o |= l.lane), (l = l.next)
            while (l !== t)
        } else i === null && (l.shared.lanes = 0)
        ;(Pt |= o), (e.lanes = o), (e.memoizedState = y)
    }
}
function hu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(g(191, l))
                l.call(r)
            }
        }
}
var bs = new ts.Component().refs
function ki(e, t, n, r) {
    ;(t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : V({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ul = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Lt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = ue(),
            l = at(e),
            i = Ke(r, l)
        ;(i.payload = t),
            n != null && (i.callback = n),
            ut(e, i),
            (t = _e(e, l, r)),
            t !== null && Nr(t, e, l)
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = ue(),
            l = at(e),
            i = Ke(r, l)
        ;(i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            ut(e, i),
            (t = _e(e, l, r)),
            t !== null && Nr(t, e, l)
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = ue(),
            r = at(e),
            l = Ke(n, r)
        ;(l.tag = 2),
            t != null && (l.callback = t),
            ut(e, l),
            (t = _e(e, r, n)),
            t !== null && Nr(t, e, r)
    },
}
function vu(e, t, n, r, l, i, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, o)
            : t.prototype && t.prototype.isPureReactComponent
            ? !Fn(n, r) || !Fn(l, i)
            : !0
    )
}
function ea(e, t, n) {
    var r = !1,
        l = ft,
        i = t.contextType
    return (
        typeof i == "object" && i !== null
            ? (i = Ce(i))
            : ((l = me(t) ? Et : ie.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Zt(e, l) : ft)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ul),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    )
}
function gu(e, t, n, r) {
    ;(e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ul.enqueueReplaceState(t, t.state, null)
}
function xi(e, t, n, r) {
    var l = e.stateNode
    ;(l.props = n), (l.state = e.memoizedState), (l.refs = bs), oo(e)
    var i = t.contextType
    typeof i == "object" && i !== null
        ? (l.context = Ce(i))
        : ((i = me(t) ? Et : ie.current), (l.context = Zt(e, i))),
        (l.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (ki(e, t, i, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && ul.enqueueReplaceState(l, l.state, null),
            Vr(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
var $t = [],
    Bt = 0,
    Wr = null,
    Hr = 0,
    xe = [],
    Se = 0,
    _t = null,
    He = 1,
    Qe = ""
function yt(e, t) {
    ;($t[Bt++] = Hr), ($t[Bt++] = Wr), (Wr = e), (Hr = t)
}
function ta(e, t, n) {
    ;(xe[Se++] = He), (xe[Se++] = Qe), (xe[Se++] = _t), (_t = e)
    var r = He
    e = Qe
    var l = 32 - Oe(r) - 1
    ;(r &= ~(1 << l)), (n += 1)
    var i = 32 - Oe(t) + l
    if (30 < i) {
        var o = l - (l % 5)
        ;(i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (l -= o),
            (He = (1 << (32 - Oe(t) + l)) | (n << l) | r),
            (Qe = i + e)
    } else (He = (1 << i) | (n << l) | r), (Qe = e)
}
function uo(e) {
    e.return !== null && (yt(e, 1), ta(e, 1, 0))
}
function so(e) {
    for (; e === Wr; )
        (Wr = $t[--Bt]), ($t[Bt] = null), (Hr = $t[--Bt]), ($t[Bt] = null)
    for (; e === _t; )
        (_t = xe[--Se]),
            (xe[Se] = null),
            (Qe = xe[--Se]),
            (xe[Se] = null),
            (He = xe[--Se]),
            (xe[Se] = null)
}
var ge = null,
    fe = null,
    A = !1,
    Me = null
function na(e, t) {
    var n = Ne(5, null, null, 0)
    ;(n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function yu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (ge = e), (fe = We(t.firstChild)), !0)
                    : !1
            )
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ge = e), (fe = null), !0) : !1
            )
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = _t !== null ? { id: He, overflow: Qe } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ne(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ge = e),
                      (fe = null),
                      !0)
                    : !1
            )
        default:
            return !1
    }
}
function Si(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ni(e) {
    if (A) {
        var t = fe
        if (t) {
            var n = t
            if (!yu(e, t)) {
                if (Si(e)) throw Error(g(418))
                t = We(n.nextSibling)
                var r = ge
                t && yu(e, t)
                    ? na(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e))
            }
        } else {
            if (Si(e)) throw Error(g(418))
            ;(e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e)
        }
    }
}
function wu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return
    ge = e
}
function pn(e) {
    if (e !== ge) return !1
    if (!A) return wu(e), (A = !0), !1
    var t
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps))),
        t && (t = fe))
    ) {
        if (Si(e)) {
            for (e = fe; e; ) e = We(e.nextSibling)
            throw Error(g(418))
        }
        for (; t; ) na(e, t), (t = We(t.nextSibling))
    }
    if ((wu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(g(317))
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data
                    if (n === "/$") {
                        if (t === 0) {
                            fe = We(e.nextSibling)
                            break e
                        }
                        t--
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++
                }
                e = e.nextSibling
            }
            fe = null
        }
    } else fe = ge ? We(e.stateNode.nextSibling) : null
    return !0
}
function qt() {
    ;(fe = ge = null), (A = !1)
}
function ao(e) {
    Me === null ? (Me = [e]) : Me.push(e)
}
function mn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(g(309))
                var r = n.stateNode
            }
            if (!r) throw Error(g(147, e))
            var l = r,
                i = "" + e
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var u = l.refs
                      u === bs && (u = l.refs = {}),
                          o === null ? delete u[i] : (u[i] = o)
                  }),
                  (t._stringRef = i),
                  t)
        }
        if (typeof e != "string") throw Error(g(284))
        if (!n._owner) throw Error(g(290, e))
    }
    return e
}
function fr(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            g(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    )
}
function ku(e) {
    var t = e._init
    return t(e._payload)
}
function ra(e) {
    function t(d, a) {
        if (e) {
            var p = d.deletions
            p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a)
        }
    }
    function n(d, a) {
        if (!e) return null
        for (; a !== null; ) t(d, a), (a = a.sibling)
        return null
    }
    function r(d, a) {
        for (d = new Map(); a !== null; )
            a.key !== null ? d.set(a.key, a) : d.set(a.index, a),
                (a = a.sibling)
        return d
    }
    function l(d, a) {
        return (d = dt(d, a)), (d.index = 0), (d.sibling = null), d
    }
    function i(d, a, p) {
        return (
            (d.index = p),
            e
                ? ((p = d.alternate),
                  p !== null
                      ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p)
                      : ((d.flags |= 2), a))
                : ((d.flags |= 1048576), a)
        )
    }
    function o(d) {
        return e && d.alternate === null && (d.flags |= 2), d
    }
    function u(d, a, p, v) {
        return a === null || a.tag !== 6
            ? ((a = Wl(p, d.mode, v)), (a.return = d), a)
            : ((a = l(a, p)), (a.return = d), a)
    }
    function s(d, a, p, v) {
        var x = p.type
        return x === jt
            ? h(d, a, p.props.children, v, p.key)
            : a !== null &&
              (a.elementType === x ||
                  (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === qe &&
                      ku(x) === a.type))
            ? ((v = l(a, p.props)), (v.ref = mn(d, a, p)), (v.return = d), v)
            : ((v = zr(p.type, p.key, p.props, null, d.mode, v)),
              (v.ref = mn(d, a, p)),
              (v.return = d),
              v)
    }
    function c(d, a, p, v) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== p.containerInfo ||
            a.stateNode.implementation !== p.implementation
            ? ((a = Hl(p, d.mode, v)), (a.return = d), a)
            : ((a = l(a, p.children || [])), (a.return = d), a)
    }
    function h(d, a, p, v, x) {
        return a === null || a.tag !== 7
            ? ((a = Nt(p, d.mode, v, x)), (a.return = d), a)
            : ((a = l(a, p)), (a.return = d), a)
    }
    function y(d, a, p) {
        if ((typeof a == "string" && a !== "") || typeof a == "number")
            return (a = Wl("" + a, d.mode, p)), (a.return = d), a
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case tr:
                    return (
                        (p = zr(a.type, a.key, a.props, null, d.mode, p)),
                        (p.ref = mn(d, null, a)),
                        (p.return = d),
                        p
                    )
                case Mt:
                    return (a = Hl(a, d.mode, p)), (a.return = d), a
                case qe:
                    var v = a._init
                    return y(d, v(a._payload), p)
            }
            if (yn(a) || sn(a))
                return (a = Nt(a, d.mode, p, null)), (a.return = d), a
            fr(d, a)
        }
        return null
    }
    function m(d, a, p, v) {
        var x = a !== null ? a.key : null
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return x !== null ? null : u(d, a, "" + p, v)
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case tr:
                    return p.key === x ? s(d, a, p, v) : null
                case Mt:
                    return p.key === x ? c(d, a, p, v) : null
                case qe:
                    return (x = p._init), m(d, a, x(p._payload), v)
            }
            if (yn(p) || sn(p)) return x !== null ? null : h(d, a, p, v, null)
            fr(d, p)
        }
        return null
    }
    function k(d, a, p, v, x) {
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return (d = d.get(p) || null), u(a, d, "" + v, x)
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case tr:
                    return (
                        (d = d.get(v.key === null ? p : v.key) || null),
                        s(a, d, v, x)
                    )
                case Mt:
                    return (
                        (d = d.get(v.key === null ? p : v.key) || null),
                        c(a, d, v, x)
                    )
                case qe:
                    var E = v._init
                    return k(d, a, p, E(v._payload), x)
            }
            if (yn(v) || sn(v))
                return (d = d.get(p) || null), h(a, d, v, x, null)
            fr(a, v)
        }
        return null
    }
    function w(d, a, p, v) {
        for (
            var x = null, E = null, _ = a, C = (a = 0), H = null;
            _ !== null && C < p.length;
            C++
        ) {
            _.index > C ? ((H = _), (_ = null)) : (H = _.sibling)
            var M = m(d, _, p[C], v)
            if (M === null) {
                _ === null && (_ = H)
                break
            }
            e && _ && M.alternate === null && t(d, _),
                (a = i(M, a, C)),
                E === null ? (x = M) : (E.sibling = M),
                (E = M),
                (_ = H)
        }
        if (C === p.length) return n(d, _), A && yt(d, C), x
        if (_ === null) {
            for (; C < p.length; C++)
                (_ = y(d, p[C], v)),
                    _ !== null &&
                        ((a = i(_, a, C)),
                        E === null ? (x = _) : (E.sibling = _),
                        (E = _))
            return A && yt(d, C), x
        }
        for (_ = r(d, _); C < p.length; C++)
            (H = k(_, d, C, p[C], v)),
                H !== null &&
                    (e &&
                        H.alternate !== null &&
                        _.delete(H.key === null ? C : H.key),
                    (a = i(H, a, C)),
                    E === null ? (x = H) : (E.sibling = H),
                    (E = H))
        return (
            e &&
                _.forEach(function (ze) {
                    return t(d, ze)
                }),
            A && yt(d, C),
            x
        )
    }
    function P(d, a, p, v) {
        var x = sn(p)
        if (typeof x != "function") throw Error(g(150))
        if (((p = x.call(p)), p == null)) throw Error(g(151))
        for (
            var E = (x = null), _ = a, C = (a = 0), H = null, M = p.next();
            _ !== null && !M.done;
            C++, M = p.next()
        ) {
            _.index > C ? ((H = _), (_ = null)) : (H = _.sibling)
            var ze = m(d, _, M.value, v)
            if (ze === null) {
                _ === null && (_ = H)
                break
            }
            e && _ && ze.alternate === null && t(d, _),
                (a = i(ze, a, C)),
                E === null ? (x = ze) : (E.sibling = ze),
                (E = ze),
                (_ = H)
        }
        if (M.done) return n(d, _), A && yt(d, C), x
        if (_ === null) {
            for (; !M.done; C++, M = p.next())
                (M = y(d, M.value, v)),
                    M !== null &&
                        ((a = i(M, a, C)),
                        E === null ? (x = M) : (E.sibling = M),
                        (E = M))
            return A && yt(d, C), x
        }
        for (_ = r(d, _); !M.done; C++, M = p.next())
            (M = k(_, d, C, M.value, v)),
                M !== null &&
                    (e &&
                        M.alternate !== null &&
                        _.delete(M.key === null ? C : M.key),
                    (a = i(M, a, C)),
                    E === null ? (x = M) : (E.sibling = M),
                    (E = M))
        return (
            e &&
                _.forEach(function (on) {
                    return t(d, on)
                }),
            A && yt(d, C),
            x
        )
    }
    function U(d, a, p, v) {
        if (
            (typeof p == "object" &&
                p !== null &&
                p.type === jt &&
                p.key === null &&
                (p = p.props.children),
            typeof p == "object" && p !== null)
        ) {
            switch (p.$$typeof) {
                case tr:
                    e: {
                        for (var x = p.key, E = a; E !== null; ) {
                            if (E.key === x) {
                                if (((x = p.type), x === jt)) {
                                    if (E.tag === 7) {
                                        n(d, E.sibling),
                                            (a = l(E, p.props.children)),
                                            (a.return = d),
                                            (d = a)
                                        break e
                                    }
                                } else if (
                                    E.elementType === x ||
                                    (typeof x == "object" &&
                                        x !== null &&
                                        x.$$typeof === qe &&
                                        ku(x) === E.type)
                                ) {
                                    n(d, E.sibling),
                                        (a = l(E, p.props)),
                                        (a.ref = mn(d, E, p)),
                                        (a.return = d),
                                        (d = a)
                                    break e
                                }
                                n(d, E)
                                break
                            } else t(d, E)
                            E = E.sibling
                        }
                        p.type === jt
                            ? ((a = Nt(p.props.children, d.mode, v, p.key)),
                              (a.return = d),
                              (d = a))
                            : ((v = zr(
                                  p.type,
                                  p.key,
                                  p.props,
                                  null,
                                  d.mode,
                                  v
                              )),
                              (v.ref = mn(d, a, p)),
                              (v.return = d),
                              (d = v))
                    }
                    return o(d)
                case Mt:
                    e: {
                        for (E = p.key; a !== null; ) {
                            if (a.key === E)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo ===
                                        p.containerInfo &&
                                    a.stateNode.implementation ===
                                        p.implementation
                                ) {
                                    n(d, a.sibling),
                                        (a = l(a, p.children || [])),
                                        (a.return = d),
                                        (d = a)
                                    break e
                                } else {
                                    n(d, a)
                                    break
                                }
                            else t(d, a)
                            a = a.sibling
                        }
                        ;(a = Hl(p, d.mode, v)), (a.return = d), (d = a)
                    }
                    return o(d)
                case qe:
                    return (E = p._init), U(d, a, E(p._payload), v)
            }
            if (yn(p)) return w(d, a, p, v)
            if (sn(p)) return P(d, a, p, v)
            fr(d, p)
        }
        return (typeof p == "string" && p !== "") || typeof p == "number"
            ? ((p = "" + p),
              a !== null && a.tag === 6
                  ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
                  : (n(d, a), (a = Wl(p, d.mode, v)), (a.return = d), (d = a)),
              o(d))
            : n(d, a)
    }
    return U
}
var bt = ra(!0),
    la = ra(!1),
    Zn = {},
    $e = mt(Zn),
    Bn = mt(Zn),
    Vn = mt(Zn)
function xt(e) {
    if (e === Zn) throw Error(g(174))
    return e
}
function co(e, t) {
    switch ((D(Vn, t), D(Bn, e), D($e, Zn), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ti(null, "")
            break
        default:
            ;(e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = ti(t, e))
    }
    F($e), D($e, t)
}
function en() {
    F($e), F(Bn), F(Vn)
}
function ia(e) {
    xt(Vn.current)
    var t = xt($e.current),
        n = ti(t, e.type)
    t !== n && (D(Bn, e), D($e, n))
}
function fo(e) {
    Bn.current === e && (F($e), F(Bn))
}
var $ = mt(0)
function Qr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t
        } else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null
            t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
}
var Ul = []
function po() {
    for (var e = 0; e < Ul.length; e++)
        Ul[e]._workInProgressVersionPrimary = null
    Ul.length = 0
}
var Er = Je.ReactCurrentDispatcher,
    Al = Je.ReactCurrentBatchConfig,
    Ct = 0,
    B = null,
    X = null,
    q = null,
    Kr = !1,
    Cn = !1,
    Wn = 0,
    Hf = 0
function ne() {
    throw Error(g(321))
}
function mo(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!De(e[n], t[n])) return !1
    return !0
}
function ho(e, t, n, r, l, i) {
    if (
        ((Ct = i),
        (B = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Er.current = e === null || e.memoizedState === null ? Xf : Gf),
        (e = n(r, l)),
        Cn)
    ) {
        i = 0
        do {
            if (((Cn = !1), (Wn = 0), 25 <= i)) throw Error(g(301))
            ;(i += 1),
                (q = X = null),
                (t.updateQueue = null),
                (Er.current = Jf),
                (e = n(r, l))
        } while (Cn)
    }
    if (
        ((Er.current = Yr),
        (t = X !== null && X.next !== null),
        (Ct = 0),
        (q = X = B = null),
        (Kr = !1),
        t)
    )
        throw Error(g(300))
    return e
}
function vo() {
    var e = Wn !== 0
    return (Wn = 0), e
}
function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    }
    return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q
}
function Pe() {
    if (X === null) {
        var e = B.alternate
        e = e !== null ? e.memoizedState : null
    } else e = X.next
    var t = q === null ? B.memoizedState : q.next
    if (t !== null) (q = t), (X = e)
    else {
        if (e === null) throw Error(g(310))
        ;(X = e),
            (e = {
                memoizedState: X.memoizedState,
                baseState: X.baseState,
                baseQueue: X.baseQueue,
                queue: X.queue,
                next: null,
            }),
            q === null ? (B.memoizedState = q = e) : (q = q.next = e)
    }
    return q
}
function Hn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function $l(e) {
    var t = Pe(),
        n = t.queue
    if (n === null) throw Error(g(311))
    n.lastRenderedReducer = e
    var r = X,
        l = r.baseQueue,
        i = n.pending
    if (i !== null) {
        if (l !== null) {
            var o = l.next
            ;(l.next = i.next), (i.next = o)
        }
        ;(r.baseQueue = l = i), (n.pending = null)
    }
    if (l !== null) {
        ;(i = l.next), (r = r.baseState)
        var u = (o = null),
            s = null,
            c = i
        do {
            var h = c.lane
            if ((Ct & h) === h)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action))
            else {
                var y = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                }
                s === null ? ((u = s = y), (o = r)) : (s = s.next = y),
                    (B.lanes |= h),
                    (Pt |= h)
            }
            c = c.next
        } while (c !== null && c !== i)
        s === null ? (o = r) : (s.next = u),
            De(r, t.memoizedState) || (de = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
        l = e
        do (i = l.lane), (B.lanes |= i), (Pt |= i), (l = l.next)
        while (l !== e)
    } else l === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
}
function Bl(e) {
    var t = Pe(),
        n = t.queue
    if (n === null) throw Error(g(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState
    if (l !== null) {
        n.pending = null
        var o = (l = l.next)
        do (i = e(i, o.action)), (o = o.next)
        while (o !== l)
        De(i, t.memoizedState) || (de = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i)
    }
    return [i, r]
}
function oa() {}
function ua(e, t) {
    var n = B,
        r = Pe(),
        l = t(),
        i = !De(r.memoizedState, l)
    if (
        (i && ((r.memoizedState = l), (de = !0)),
        (r = r.queue),
        go(ca.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Qn(9, aa.bind(null, n, r, l, t), void 0, null),
            J === null)
        )
            throw Error(g(349))
        ;(Ct & 30) !== 0 || sa(n, t, l)
    }
    return l
}
function sa(e, t, n) {
    ;(e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = B.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (B.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function aa(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), fa(t) && _e(e, 1, -1)
}
function ca(e, t, n) {
    return n(function () {
        fa(t) && _e(e, 1, -1)
    })
}
function fa(e) {
    var t = e.getSnapshot
    e = e.value
    try {
        var n = t()
        return !De(e, n)
    } catch {
        return !0
    }
}
function xu(e) {
    var t = Fe()
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Hn,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Yf.bind(null, B, e)),
        [t.memoizedState, e]
    )
}
function Qn(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = B.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (B.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    )
}
function da() {
    return Pe().memoizedState
}
function _r(e, t, n, r) {
    var l = Fe()
    ;(B.flags |= e),
        (l.memoizedState = Qn(1 | t, n, void 0, r === void 0 ? null : r))
}
function sl(e, t, n, r) {
    var l = Pe()
    r = r === void 0 ? null : r
    var i = void 0
    if (X !== null) {
        var o = X.memoizedState
        if (((i = o.destroy), r !== null && mo(r, o.deps))) {
            l.memoizedState = Qn(t, n, i, r)
            return
        }
    }
    ;(B.flags |= e), (l.memoizedState = Qn(1 | t, n, i, r))
}
function Su(e, t) {
    return _r(8390656, 8, e, t)
}
function go(e, t) {
    return sl(2048, 8, e, t)
}
function pa(e, t) {
    return sl(4, 2, e, t)
}
function ma(e, t) {
    return sl(4, 4, e, t)
}
function ha(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null)
            }
        )
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null
            }
        )
}
function va(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), sl(4, 4, ha.bind(null, t, e), n)
    )
}
function yo() {}
function ga(e, t) {
    var n = Pe()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && mo(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e)
}
function ya(e, t) {
    var n = Pe()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && mo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e)
}
function wa(e, t, n) {
    return (Ct & 21) === 0
        ? (e.baseState && ((e.baseState = !1), (de = !0)),
          (e.memoizedState = n))
        : (De(n, t) ||
              ((n = _s()), (B.lanes |= n), (Pt |= n), (e.baseState = !0)),
          t)
}
function Qf(e, t) {
    var n = O
    ;(O = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = Al.transition
    Al.transition = {}
    try {
        e(!1), t()
    } finally {
        ;(O = n), (Al.transition = r)
    }
}
function ka() {
    return Pe().memoizedState
}
function Kf(e, t, n) {
    var r = at(e)
    ;(n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
    }),
        xa(e)
            ? Sa(t, n)
            : (Na(e, t, n),
              (n = ue()),
              (e = _e(e, r, n)),
              e !== null && Ea(e, t, r))
}
function Yf(e, t, n) {
    var r = at(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }
    if (xa(e)) Sa(t, l)
    else {
        Na(e, t, l)
        var i = e.alternate
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var o = t.lastRenderedState,
                    u = i(o, n)
                if (((l.hasEagerState = !0), (l.eagerState = u), De(u, o)))
                    return
            } catch {
            } finally {
            }
        ;(n = ue()), (e = _e(e, r, n)), e !== null && Ea(e, t, r)
    }
}
function xa(e) {
    var t = e.alternate
    return e === B || (t !== null && t === B)
}
function Sa(e, t) {
    Cn = Kr = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t)
}
function Na(e, t, n) {
    Ba(e)
        ? ((e = t.interleaved),
          e === null
              ? ((n.next = n), je === null ? (je = [t]) : je.push(t))
              : ((n.next = e.next), (e.next = n)),
          (t.interleaved = n))
        : ((e = t.pending),
          e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
          (t.pending = n))
}
function Ea(e, t, n) {
    if ((n & 4194240) !== 0) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n)
    }
}
var Yr = {
        readContext: Ce,
        useCallback: ne,
        useContext: ne,
        useEffect: ne,
        useImperativeHandle: ne,
        useInsertionEffect: ne,
        useLayoutEffect: ne,
        useMemo: ne,
        useReducer: ne,
        useRef: ne,
        useState: ne,
        useDebugValue: ne,
        useDeferredValue: ne,
        useTransition: ne,
        useMutableSource: ne,
        useSyncExternalStore: ne,
        useId: ne,
        unstable_isNewReconciler: !1,
    },
    Xf = {
        readContext: Ce,
        useCallback: function (e, t) {
            return (Fe().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: Ce,
        useEffect: Su,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                _r(4194308, 4, ha.bind(null, t, e), n)
            )
        },
        useLayoutEffect: function (e, t) {
            return _r(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return _r(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Fe()
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            )
        },
        useReducer: function (e, t, n) {
            var r = Fe()
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Kf.bind(null, B, e)),
                [r.memoizedState, e]
            )
        },
        useRef: function (e) {
            var t = Fe()
            return (e = { current: e }), (t.memoizedState = e)
        },
        useState: xu,
        useDebugValue: yo,
        useDeferredValue: function (e) {
            return (Fe().memoizedState = e)
        },
        useTransition: function () {
            var e = xu(!1),
                t = e[0]
            return (e = Qf.bind(null, e[1])), (Fe().memoizedState = e), [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = B,
                l = Fe()
            if (A) {
                if (n === void 0) throw Error(g(407))
                n = n()
            } else {
                if (((n = t()), J === null)) throw Error(g(349))
                ;(Ct & 30) !== 0 || sa(r, t, n)
            }
            l.memoizedState = n
            var i = { value: n, getSnapshot: t }
            return (
                (l.queue = i),
                Su(ca.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Qn(9, aa.bind(null, r, i, n, t), void 0, null),
                n
            )
        },
        useId: function () {
            var e = Fe(),
                t = J.identifierPrefix
            if (A) {
                var n = Qe,
                    r = He
                ;(n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Wn++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":")
            } else (n = Hf++), (t = ":" + t + "r" + n.toString(32) + ":")
            return (e.memoizedState = t)
        },
        unstable_isNewReconciler: !1,
    },
    Gf = {
        readContext: Ce,
        useCallback: ga,
        useContext: Ce,
        useEffect: go,
        useImperativeHandle: va,
        useInsertionEffect: pa,
        useLayoutEffect: ma,
        useMemo: ya,
        useReducer: $l,
        useRef: da,
        useState: function () {
            return $l(Hn)
        },
        useDebugValue: yo,
        useDeferredValue: function (e) {
            var t = Pe()
            return wa(t, X.memoizedState, e)
        },
        useTransition: function () {
            var e = $l(Hn)[0],
                t = Pe().memoizedState
            return [e, t]
        },
        useMutableSource: oa,
        useSyncExternalStore: ua,
        useId: ka,
        unstable_isNewReconciler: !1,
    },
    Jf = {
        readContext: Ce,
        useCallback: ga,
        useContext: Ce,
        useEffect: go,
        useImperativeHandle: va,
        useInsertionEffect: pa,
        useLayoutEffect: ma,
        useMemo: ya,
        useReducer: Bl,
        useRef: da,
        useState: function () {
            return Bl(Hn)
        },
        useDebugValue: yo,
        useDeferredValue: function (e) {
            var t = Pe()
            return X === null
                ? (t.memoizedState = e)
                : wa(t, X.memoizedState, e)
        },
        useTransition: function () {
            var e = Bl(Hn)[0],
                t = Pe().memoizedState
            return [e, t]
        },
        useMutableSource: oa,
        useSyncExternalStore: ua,
        useId: ka,
        unstable_isNewReconciler: !1,
    }
function wo(e, t) {
    try {
        var n = "",
            r = t
        do (n += Nc(r)), (r = r.return)
        while (r)
        var l = n
    } catch (i) {
        l =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack
    }
    return { value: e, source: t, stack: l }
}
function Ei(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Zf = typeof WeakMap == "function" ? WeakMap : Map
function _a(e, t, n) {
    ;(n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
        (n.callback = function () {
            Gr || ((Gr = !0), (ji = r)), Ei(e, t)
        }),
        n
    )
}
function Ca(e, t, n) {
    ;(n = Ke(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == "function") {
        var l = t.value
        ;(n.payload = function () {
            return r(l)
        }),
            (n.callback = function () {
                Ei(e, t)
            })
    }
    var i = e.stateNode
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                Ei(e, t),
                    typeof r != "function" &&
                        (st === null ? (st = new Set([this])) : st.add(this))
                var o = t.stack
                this.componentDidCatch(t.value, {
                    componentStack: o !== null ? o : "",
                })
            }),
        n
    )
}
function Nu(e, t, n) {
    var r = e.pingCache
    if (r === null) {
        r = e.pingCache = new Zf()
        var l = new Set()
        r.set(t, l)
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
    l.has(n) || (l.add(n), (e = cd.bind(null, e, t, n)), t.then(e, e))
}
function Eu(e) {
    do {
        var t
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e
        e = e.return
    } while (e !== null)
    return null
}
function _u(e, t, n, r, l) {
    return (e.mode & 1) === 0
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Ke(-1, 1)), (t.tag = 2), ut(n, t))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = l), e)
}
var Pa, _i, za, Ta
Pa = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
        else if (n.tag !== 4 && n.child !== null) {
            ;(n.child.return = n), (n = n.child)
            continue
        }
        if (n === t) break
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return
            n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
    }
}
_i = function () {}
za = function (e, t, n, r) {
    var l = e.memoizedProps
    if (l !== r) {
        ;(e = t.stateNode), xt($e.current)
        var i = null
        switch (n) {
            case "input":
                ;(l = Zl(e, l)), (r = Zl(e, r)), (i = [])
                break
            case "select":
                ;(l = V({}, l, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (i = [])
                break
            case "textarea":
                ;(l = ei(e, l)), (r = ei(e, r)), (i = [])
                break
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Fr)
        }
        ni(n, r)
        var o
        n = null
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c]
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""))
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (Ln.hasOwnProperty(c)
                            ? i || (i = [])
                            : (i = i || []).push(c, null))
        for (c in r) {
            var s = r[c]
            if (
                ((u = l != null ? l[c] : void 0),
                r.hasOwnProperty(c) && s !== u && (s != null || u != null))
            )
                if (c === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) ||
                                (s && s.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""))
                        for (o in s)
                            s.hasOwnProperty(o) &&
                                u[o] !== s[o] &&
                                (n || (n = {}), (n[o] = s[o]))
                    } else n || (i || (i = []), i.push(c, n)), (n = s)
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (i = i || []).push(c, s))
                        : c === "children"
                        ? (typeof s != "string" && typeof s != "number") ||
                          (i = i || []).push(c, "" + s)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (Ln.hasOwnProperty(c)
                              ? (s != null &&
                                    c === "onScroll" &&
                                    I("scroll", e),
                                i || u === s || (i = []))
                              : (i = i || []).push(c, s))
        }
        n && (i = i || []).push("style", n)
        var c = i
        ;(t.updateQueue = c) && (t.flags |= 4)
    }
}
Ta = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
function hn(e, t) {
    if (!A)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling)
                n === null ? (e.tail = null) : (n.sibling = null)
                break
            case "collapsed":
                n = e.tail
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling)
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null)
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling)
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function qf(e, t, n) {
    var r = t.pendingProps
    switch ((so(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return re(t), null
        case 1:
            return me(t.type) && Ur(), re(t), null
        case 3:
            return (
                (r = t.stateNode),
                en(),
                F(pe),
                F(ie),
                po(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (pn(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated &&
                              (t.flags & 256) === 0) ||
                          ((t.flags |= 1024),
                          Me !== null && (Ii(Me), (Me = null)))),
                _i(e, t),
                re(t),
                null
            )
        case 5:
            fo(t)
            var l = xt(Vn.current)
            if (((n = t.type), e !== null && t.stateNode != null))
                za(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(g(166))
                    return re(t), null
                }
                if (((e = xt($e.current)), pn(t))) {
                    ;(r = t.stateNode), (n = t.type)
                    var i = t.memoizedProps
                    switch (
                        ((r[Ue] = t), (r[$n] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            I("cancel", r), I("close", r)
                            break
                        case "iframe":
                        case "object":
                        case "embed":
                            I("load", r)
                            break
                        case "video":
                        case "audio":
                            for (l = 0; l < kn.length; l++) I(kn[l], r)
                            break
                        case "source":
                            I("error", r)
                            break
                        case "img":
                        case "image":
                        case "link":
                            I("error", r), I("load", r)
                            break
                        case "details":
                            I("toggle", r)
                            break
                        case "input":
                            Ao(r, i), I("invalid", r)
                            break
                        case "select":
                            ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                                I("invalid", r)
                            break
                        case "textarea":
                            Bo(r, i), I("invalid", r)
                    }
                    ni(n, i), (l = null)
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o]
                            o === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          cr(r.textContent, u, e),
                                      (l = ["children", u]))
                                    : typeof u == "number" &&
                                      r.textContent !== "" + u &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          cr(r.textContent, u, e),
                                      (l = ["children", "" + u]))
                                : Ln.hasOwnProperty(o) &&
                                  u != null &&
                                  o === "onScroll" &&
                                  I("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            nr(r), $o(r, i, !0)
                            break
                        case "textarea":
                            nr(r), Vo(r)
                            break
                        case "select":
                        case "option":
                            break
                        default:
                            typeof i.onClick == "function" && (r.onclick = Fr)
                    }
                    ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
                } else {
                    ;(o = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = cs(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = o.createElement(n, { is: r.is }))
                                : ((e = o.createElement(n)),
                                  n === "select" &&
                                      ((o = e),
                                      r.multiple
                                          ? (o.multiple = !0)
                                          : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[Ue] = t),
                        (e[$n] = r),
                        Pa(e, t, !1, !1),
                        (t.stateNode = e)
                    e: {
                        switch (((o = ri(n, r)), n)) {
                            case "dialog":
                                I("cancel", e), I("close", e), (l = r)
                                break
                            case "iframe":
                            case "object":
                            case "embed":
                                I("load", e), (l = r)
                                break
                            case "video":
                            case "audio":
                                for (l = 0; l < kn.length; l++) I(kn[l], e)
                                l = r
                                break
                            case "source":
                                I("error", e), (l = r)
                                break
                            case "img":
                            case "image":
                            case "link":
                                I("error", e), I("load", e), (l = r)
                                break
                            case "details":
                                I("toggle", e), (l = r)
                                break
                            case "input":
                                Ao(e, r), (l = Zl(e, r)), I("invalid", e)
                                break
                            case "option":
                                l = r
                                break
                            case "select":
                                ;(e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = V({}, r, { value: void 0 })),
                                    I("invalid", e)
                                break
                            case "textarea":
                                Bo(e, r), (l = ei(e, r)), I("invalid", e)
                                break
                            default:
                                l = r
                        }
                        ni(n, l), (u = l)
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var s = u[i]
                                i === "style"
                                    ? ps(e, s)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && fs(e, s))
                                    : i === "children"
                                    ? typeof s == "string"
                                        ? (n !== "textarea" || s !== "") &&
                                          Rn(e, s)
                                        : typeof s == "number" && Rn(e, "" + s)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (Ln.hasOwnProperty(i)
                                          ? s != null &&
                                            i === "onScroll" &&
                                            I("scroll", e)
                                          : s != null && Wi(e, i, s, o))
                            }
                        switch (n) {
                            case "input":
                                nr(e), $o(e, r, !1)
                                break
                            case "textarea":
                                nr(e), Vo(e)
                                break
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + ct(r.value))
                                break
                            case "select":
                                ;(e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Ht(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Ht(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          )
                                break
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = Fr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus
                                break e
                            case "img":
                                r = !0
                                break e
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
            }
            return re(t), null
        case 6:
            if (e && t.stateNode != null) Ta(e, t, e.memoizedProps, r)
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(g(166))
                if (((n = xt(Vn.current)), xt($e.current), pn(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ue] = t),
                        (i = r.nodeValue !== n) && ((e = ge), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                cr(r.nodeValue, n, (e.mode & 1) !== 0)
                                break
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 && cr(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    i && (t.flags |= 4)
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Ue] = t),
                        (t.stateNode = r)
            }
            return re(t), null
        case 13:
            if (
                (F($),
                (r = t.memoizedState),
                A && fe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ) {
                for (r = fe; r; ) r = We(r.nextSibling)
                return qt(), (t.flags |= 98560), t
            }
            if (r !== null && r.dehydrated !== null) {
                if (((r = pn(t)), e === null)) {
                    if (!r) throw Error(g(318))
                    if (
                        ((r = t.memoizedState),
                        (r = r !== null ? r.dehydrated : null),
                        !r)
                    )
                        throw Error(g(317))
                    r[Ue] = t
                } else
                    qt(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        (t.flags |= 4)
                return re(t), null
            }
            return (
                Me !== null && (Ii(Me), (Me = null)),
                (t.flags & 128) !== 0
                    ? ((t.lanes = n), t)
                    : ((r = r !== null),
                      (n = !1),
                      e === null ? pn(t) : (n = e.memoizedState !== null),
                      r !== n &&
                          r &&
                          ((t.child.flags |= 8192),
                          (t.mode & 1) !== 0 &&
                              (e === null || ($.current & 1) !== 0
                                  ? G === 0 && (G = 3)
                                  : _o())),
                      t.updateQueue !== null && (t.flags |= 4),
                      re(t),
                      null)
            )
        case 4:
            return (
                en(),
                _i(e, t),
                e === null && Un(t.stateNode.containerInfo),
                re(t),
                null
            )
        case 10:
            return io(t.type._context), re(t), null
        case 17:
            return me(t.type) && Ur(), re(t), null
        case 19:
            if ((F($), (i = t.memoizedState), i === null)) return re(t), null
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) hn(i, !1)
                else {
                    if (G !== 0 || (e !== null && (e.flags & 128) !== 0))
                        for (e = t.child; e !== null; ) {
                            if (((o = Qr(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        hn(i, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  o.memoizedProps),
                                              (i.memoizedState =
                                                  o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling)
                                return D($, ($.current & 1) | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null &&
                        K() > tn &&
                        ((t.flags |= 128),
                        (r = !0),
                        hn(i, !1),
                        (t.lanes = 4194304))
                }
            else {
                if (!r)
                    if (((e = Qr(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            hn(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !o.alternate &&
                                !A)
                        )
                            return re(t), null
                    } else
                        2 * K() - i.renderingStartTime > tn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            hn(i, !1),
                            (t.lanes = 4194304))
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = i.last),
                      n !== null ? (n.sibling = o) : (t.child = o),
                      (i.last = o))
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = K()),
                  (t.sibling = null),
                  (n = $.current),
                  D($, r ? (n & 1) | 2 : n & 1),
                  t)
                : (re(t), null)
        case 22:
        case 23:
            return (
                Eo(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && (t.mode & 1) !== 0
                    ? (ve & 1073741824) !== 0 &&
                      (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : re(t),
                null
            )
        case 24:
            return null
        case 25:
            return null
    }
    throw Error(g(156, t.tag))
}
var bf = Je.ReactCurrentOwner,
    de = !1
function oe(e, t, n, r) {
    t.child = e === null ? la(t, null, n, r) : bt(t, e.child, n, r)
}
function Cu(e, t, n, r, l) {
    n = n.render
    var i = t.ref
    return (
        Xt(t, l),
        (r = ho(e, t, n, r, i, l)),
        (n = vo()),
        e !== null && !de
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Ge(e, t, l))
            : (A && n && uo(t), (t.flags |= 1), oe(e, t, r, l), t.child)
    )
}
function Pu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type
        return typeof i == "function" &&
            !Co(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), La(e, t, i, r, l))
            : ((e = zr(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e))
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
        var o = i.memoizedProps
        if (
            ((n = n.compare),
            (n = n !== null ? n : Fn),
            n(o, r) && e.ref === t.ref)
        )
            return Ge(e, t, l)
    }
    return (
        (t.flags |= 1),
        (e = dt(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    )
}
function La(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps
        if (Fn(i, r) && e.ref === t.ref)
            if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
                (e.flags & 131072) !== 0 && (de = !0)
            else return (t.lanes = e.lanes), Ge(e, t, l)
    }
    return Ci(e, t, n, r, l)
}
function Ra(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null
    if (r.mode === "hidden")
        if ((t.mode & 1) === 0)
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                D(Wt, ve),
                (ve |= n)
        else if ((n & 1073741824) !== 0)
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                D(Wt, ve),
                (ve |= r)
        else
            return (
                (e = i !== null ? i.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                }),
                (t.updateQueue = null),
                D(Wt, ve),
                (ve |= e),
                null
            )
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            D(Wt, ve),
            (ve |= r)
    return oe(e, t, l, n), t.child
}
function Ma(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152))
}
function Ci(e, t, n, r, l) {
    var i = me(n) ? Et : ie.current
    return (
        (i = Zt(t, i)),
        Xt(t, l),
        (n = ho(e, t, n, r, i, l)),
        (r = vo()),
        e !== null && !de
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Ge(e, t, l))
            : (A && r && uo(t), (t.flags |= 1), oe(e, t, n, l), t.child)
    )
}
function zu(e, t, n, r, l) {
    if (me(n)) {
        var i = !0
        Ar(t)
    } else i = !1
    if ((Xt(t, l), t.stateNode === null))
        e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            ea(t, n, r),
            xi(t, n, r, l),
            (r = !0)
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps
        o.props = u
        var s = o.context,
            c = n.contextType
        typeof c == "object" && c !== null
            ? (c = Ce(c))
            : ((c = me(n) ? Et : ie.current), (c = Zt(t, c)))
        var h = n.getDerivedStateFromProps,
            y =
                typeof h == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function"
        y ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== r || s !== c) && gu(t, o, r, c)),
            (be = !1)
        var m = t.memoizedState
        ;(o.state = m),
            Vr(t, r, o, l),
            (s = t.memoizedState),
            u !== r || m !== s || pe.current || be
                ? (typeof h == "function" &&
                      (ki(t, n, h, r), (s = t.memoizedState)),
                  (u = be || vu(t, n, u, r, m, s, c))
                      ? (y ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = c),
                  (r = u))
                : (typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1))
    } else {
        ;(o = t.stateNode),
            qs(e, t),
            (u = t.memoizedProps),
            (c = t.type === t.elementType ? u : Le(t.type, u)),
            (o.props = c),
            (y = t.pendingProps),
            (m = o.context),
            (s = n.contextType),
            typeof s == "object" && s !== null
                ? (s = Ce(s))
                : ((s = me(n) ? Et : ie.current), (s = Zt(t, s)))
        var k = n.getDerivedStateFromProps
        ;(h =
            typeof k == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== y || m !== s) && gu(t, o, r, s)),
            (be = !1),
            (m = t.memoizedState),
            (o.state = m),
            Vr(t, r, o, l)
        var w = t.memoizedState
        u !== y || m !== w || pe.current || be
            ? (typeof k == "function" &&
                  (ki(t, n, k, r), (w = t.memoizedState)),
              (c = be || vu(t, n, c, r, m, w, s) || !1)
                  ? (h ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(r, w, s),
                        typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (o.props = r),
              (o.state = w),
              (o.context = s),
              (r = c))
            : (typeof o.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1))
    }
    return Pi(e, t, n, r, i, l)
}
function Pi(e, t, n, r, l, i) {
    Ma(e, t)
    var o = (t.flags & 128) !== 0
    if (!r && !o) return l && pu(t, n, !1), Ge(e, t, i)
    ;(r = t.stateNode), (bf.current = t)
    var u =
        o && typeof n.getDerivedStateFromError != "function" ? null : r.render()
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = bt(t, e.child, null, i)),
              (t.child = bt(t, null, u, i)))
            : oe(e, t, u, i),
        (t.memoizedState = r.state),
        l && pu(t, n, !0),
        t.child
    )
}
function ja(e) {
    var t = e.stateNode
    t.pendingContext
        ? du(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && du(e, t.context, !1),
        co(e, t.containerInfo)
}
function Tu(e, t, n, r, l) {
    return qt(), ao(l), (t.flags |= 256), oe(e, t, n, r), t.child
}
var dr = { dehydrated: null, treeContext: null, retryLane: 0 }
function pr(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
}
function Lu(e, t) {
    return {
        baseLanes: e.baseLanes | t,
        cachePool: null,
        transitions: e.transitions,
    }
}
function Oa(e, t, n) {
    var r = t.pendingProps,
        l = $.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        u
    if (
        ((u = o) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        D($, l & 1),
        e === null)
    )
        return (
            Ni(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? ((t.mode & 1) === 0
                      ? (t.lanes = 1)
                      : e.data === "$!"
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((l = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (l = { mode: "hidden", children: l }),
                        (r & 1) === 0 && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = l))
                            : (i = qr(l, r, 0, null)),
                        (e = Nt(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = pr(n)),
                        (t.memoizedState = dr),
                        e)
                      : zi(t, l))
        )
    if (((l = e.memoizedState), l !== null)) {
        if (((u = l.dehydrated), u !== null)) {
            if (o)
                return t.flags & 256
                    ? ((t.flags &= -257), mr(e, t, n, Error(g(422))))
                    : t.memoizedState !== null
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (l = t.mode),
                      (r = qr(
                          { mode: "visible", children: r.children },
                          l,
                          0,
                          null
                      )),
                      (i = Nt(i, l, n, null)),
                      (i.flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      (t.mode & 1) !== 0 && bt(t, e.child, null, n),
                      (t.child.memoizedState = pr(n)),
                      (t.memoizedState = dr),
                      i)
            if ((t.mode & 1) === 0) t = mr(e, t, n, null)
            else if (u.data === "$!") t = mr(e, t, n, Error(g(419)))
            else if (((r = (n & e.childLanes) !== 0), de || r)) {
                if (((r = J), r !== null)) {
                    switch (n & -n) {
                        case 4:
                            i = 2
                            break
                        case 16:
                            i = 8
                            break
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            i = 32
                            break
                        case 536870912:
                            i = 268435456
                            break
                        default:
                            i = 0
                    }
                    ;(r = (i & (r.suspendedLanes | n)) !== 0 ? 0 : i),
                        r !== 0 &&
                            r !== l.retryLane &&
                            ((l.retryLane = r), _e(e, r, -1))
                }
                _o(), (t = mr(e, t, n, Error(g(421))))
            } else
                u.data === "$?"
                    ? ((t.flags |= 128),
                      (t.child = e.child),
                      (t = fd.bind(null, e)),
                      (u._reactRetry = t),
                      (t = null))
                    : ((n = l.treeContext),
                      (fe = We(u.nextSibling)),
                      (ge = t),
                      (A = !0),
                      (Me = null),
                      n !== null &&
                          ((xe[Se++] = He),
                          (xe[Se++] = Qe),
                          (xe[Se++] = _t),
                          (He = n.id),
                          (Qe = n.overflow),
                          (_t = t)),
                      (t = zi(t, t.pendingProps.children)),
                      (t.flags |= 4096))
            return t
        }
        return i
            ? ((r = Mu(e, t, r.children, r.fallback, n)),
              (i = t.child),
              (l = e.child.memoizedState),
              (i.memoizedState = l === null ? pr(n) : Lu(l, n)),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = dr),
              r)
            : ((n = Ru(e, t, r.children, n)), (t.memoizedState = null), n)
    }
    return i
        ? ((r = Mu(e, t, r.children, r.fallback, n)),
          (i = t.child),
          (l = e.child.memoizedState),
          (i.memoizedState = l === null ? pr(n) : Lu(l, n)),
          (i.childLanes = e.childLanes & ~n),
          (t.memoizedState = dr),
          r)
        : ((n = Ru(e, t, r.children, n)), (t.memoizedState = null), n)
}
function zi(e, t) {
    return (
        (t = qr({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    )
}
function Ru(e, t, n, r) {
    var l = e.child
    return (
        (e = l.sibling),
        (n = dt(l, { mode: "visible", children: n })),
        (t.mode & 1) === 0 && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
            ((r = t.deletions),
            r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = n)
    )
}
function Mu(e, t, n, r, l) {
    var i = t.mode
    e = e.child
    var o = e.sibling,
        u = { mode: "hidden", children: n }
    return (
        (i & 1) === 0 && t.child !== e
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = u),
              (t.deletions = null))
            : ((n = dt(e, u)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
        o !== null ? (r = dt(o, r)) : ((r = Nt(r, i, l, null)), (r.flags |= 2)),
        (r.return = t),
        (n.return = t),
        (n.sibling = r),
        (t.child = n),
        r
    )
}
function mr(e, t, n, r) {
    return (
        r !== null && ao(r),
        bt(t, e.child, null, n),
        (e = zi(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    )
}
function ju(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), wi(e.return, t, n)
}
function Vl(e, t, n, r, l) {
    var i = e.memoizedState
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = l))
}
function Da(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail
    if ((oe(e, t, r.children, n), (r = $.current), (r & 2) !== 0))
        (r = (r & 1) | 2), (t.flags |= 128)
    else {
        if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && ju(e, n, t)
                else if (e.tag === 19) ju(e, n, t)
                else if (e.child !== null) {
                    ;(e.child.return = e), (e = e.child)
                    continue
                }
                if (e === t) break e
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e
                    e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
            }
        r &= 1
    }
    if ((D($, r), (t.mode & 1) === 0)) t.memoizedState = null
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Qr(e) === null && (l = n),
                        (n = n.sibling)
                ;(n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    Vl(t, !1, l, n, i)
                break
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && Qr(e) === null)) {
                        t.child = l
                        break
                    }
                    ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
                }
                Vl(t, !0, n, null, i)
                break
            case "together":
                Vl(t, !1, null, null, void 0)
                break
            default:
                t.memoizedState = null
        }
    return t.child
}
function Ge(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Pt |= t.lanes),
        (n & t.childLanes) === 0)
    )
        return null
    if (e !== null && t.child !== e.child) throw Error(g(153))
    if (t.child !== null) {
        for (
            e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = dt(e, e.pendingProps)),
                (n.return = t)
        n.sibling = null
    }
    return t.child
}
function ed(e, t, n) {
    switch (t.tag) {
        case 3:
            ja(t), qt()
            break
        case 5:
            ia(t)
            break
        case 1:
            me(t.type) && Ar(t)
            break
        case 4:
            co(t, t.stateNode.containerInfo)
            break
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value
            D($r, r._currentValue), (r._currentValue = l)
            break
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (D($, $.current & 1), (t.flags |= 128), null)
                    : (n & t.child.childLanes) !== 0
                    ? Oa(e, t, n)
                    : (D($, $.current & 1),
                      (e = Ge(e, t, n)),
                      e !== null ? e.sibling : null)
            D($, $.current & 1)
            break
        case 19:
            if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
                if (r) return Da(e, t, n)
                t.flags |= 128
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                D($, $.current),
                r)
            )
                break
            return null
        case 22:
        case 23:
            return (t.lanes = 0), Ra(e, t, n)
    }
    return Ge(e, t, n)
}
function td(e, t) {
    switch ((so(t), t.tag)) {
        case 1:
            return (
                me(t.type) && Ur(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 3:
            return (
                en(),
                F(pe),
                F(ie),
                po(),
                (e = t.flags),
                (e & 65536) !== 0 && (e & 128) === 0
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            )
        case 5:
            return fo(t), null
        case 13:
            if (
                (F($),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(g(340))
                qt()
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 19:
            return F($), null
        case 4:
            return en(), null
        case 10:
            return io(t.type._context), null
        case 22:
        case 23:
            return Eo(), null
        case 24:
            return null
        default:
            return null
    }
}
var hr = !1,
    le = !1,
    nd = typeof WeakSet == "function" ? WeakSet : Set,
    S = null
function Vt(e, t) {
    var n = e.ref
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                W(e, t, r)
            }
        else n.current = null
}
function Ti(e, t, n) {
    try {
        n()
    } catch (r) {
        W(e, t, r)
    }
}
var Ou = !1
function rd(e, t) {
    if (((pi = Or), (e = Bs()), no(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd }
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window
                var r = n.getSelection && n.getSelection()
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode
                    var l = r.anchorOffset,
                        i = r.focusNode
                    r = r.focusOffset
                    try {
                        n.nodeType, i.nodeType
                    } catch {
                        n = null
                        break e
                    }
                    var o = 0,
                        u = -1,
                        s = -1,
                        c = 0,
                        h = 0,
                        y = e,
                        m = null
                    t: for (;;) {
                        for (
                            var k;
                            y !== n ||
                                (l !== 0 && y.nodeType !== 3) ||
                                (u = o + l),
                                y !== i ||
                                    (r !== 0 && y.nodeType !== 3) ||
                                    (s = o + r),
                                y.nodeType === 3 && (o += y.nodeValue.length),
                                (k = y.firstChild) !== null;

                        )
                            (m = y), (y = k)
                        for (;;) {
                            if (y === e) break t
                            if (
                                (m === n && ++c === l && (u = o),
                                m === i && ++h === r && (s = o),
                                (k = y.nextSibling) !== null)
                            )
                                break
                            ;(y = m), (m = y.parentNode)
                        }
                        y = k
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s }
                } else n = null
            }
        n = n || { start: 0, end: 0 }
    } else n = null
    for (
        mi = { focusedElem: e, selectionRange: n }, Or = !1, S = t;
        S !== null;

    )
        if (
            ((t = S),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (S = e)
        else
            for (; S !== null; ) {
                t = S
                try {
                    var w = t.alternate
                    if ((t.flags & 1024) !== 0)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break
                            case 1:
                                if (w !== null) {
                                    var P = w.memoizedProps,
                                        U = w.memoizedState,
                                        d = t.stateNode,
                                        a = d.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? P
                                                : Le(t.type, P),
                                            U
                                        )
                                    d.__reactInternalSnapshotBeforeUpdate = a
                                }
                                break
                            case 3:
                                var p = t.stateNode.containerInfo
                                if (p.nodeType === 1) p.textContent = ""
                                else if (p.nodeType === 9) {
                                    var v = p.body
                                    v != null && (v.textContent = "")
                                }
                                break
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break
                            default:
                                throw Error(g(163))
                        }
                } catch (x) {
                    W(t, t.return, x)
                }
                if (((e = t.sibling), e !== null)) {
                    ;(e.return = t.return), (S = e)
                    break
                }
                S = t.return
            }
    return (w = Ou), (Ou = !1), w
}
function Pn(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next)
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy
                ;(l.destroy = void 0), i !== void 0 && Ti(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function al(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next)
        do {
            if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Li(e) {
    var t = e.ref
    if (t !== null) {
        var n = e.stateNode
        switch (e.tag) {
            case 5:
                e = n
                break
            default:
                e = n
        }
        typeof t == "function" ? t(e) : (t.current = e)
    }
}
function Ia(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Ia(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Ue],
                delete t[$n],
                delete t[gi],
                delete t[$f],
                delete t[Bf])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null)
}
function Fa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Du(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Fa(e.return)) return null
            e = e.return
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e
            ;(e.child.return = e), (e = e.child)
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}
function Ri(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Fr))
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Ri(e, t, n), e = e.sibling; e !== null; )
            Ri(e, t, n), (e = e.sibling)
}
function Mi(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Mi(e, t, n), e = e.sibling; e !== null; )
            Mi(e, t, n), (e = e.sibling)
}
var b = null,
    Re = !1
function Ze(e, t, n) {
    for (n = n.child; n !== null; ) Ua(e, t, n), (n = n.sibling)
}
function Ua(e, t, n) {
    if (Ae && typeof Ae.onCommitFiberUnmount == "function")
        try {
            Ae.onCommitFiberUnmount(tl, n)
        } catch {}
    switch (n.tag) {
        case 5:
            le || Vt(n, t)
        case 6:
            var r = b,
                l = Re
            ;(b = null),
                Ze(e, t, n),
                (b = r),
                (Re = l),
                b !== null &&
                    (Re
                        ? ((e = b),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : b.removeChild(n.stateNode))
            break
        case 18:
            b !== null &&
                (Re
                    ? ((e = b),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Il(e.parentNode, n)
                          : e.nodeType === 1 && Il(e, n),
                      Dn(e))
                    : Il(b, n.stateNode))
            break
        case 4:
            ;(r = b),
                (l = Re),
                (b = n.stateNode.containerInfo),
                (Re = !0),
                Ze(e, t, n),
                (b = r),
                (Re = l)
            break
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !le &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next
                do {
                    var i = l,
                        o = i.destroy
                    ;(i = i.tag),
                        o !== void 0 &&
                            ((i & 2) !== 0 || (i & 4) !== 0) &&
                            Ti(n, t, o),
                        (l = l.next)
                } while (l !== r)
            }
            Ze(e, t, n)
            break
        case 1:
            if (
                !le &&
                (Vt(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    ;(r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount()
                } catch (u) {
                    W(n, t, u)
                }
            Ze(e, t, n)
            break
        case 21:
            Ze(e, t, n)
            break
        case 22:
            n.mode & 1
                ? ((le = (r = le) || n.memoizedState !== null),
                  Ze(e, t, n),
                  (le = r))
                : Ze(e, t, n)
            break
        default:
            Ze(e, t, n)
    }
}
function Iu(e) {
    var t = e.updateQueue
    if (t !== null) {
        e.updateQueue = null
        var n = e.stateNode
        n === null && (n = e.stateNode = new nd()),
            t.forEach(function (r) {
                var l = dd.bind(null, e, r)
                n.has(r) || (n.add(r), r.then(l, l))
            })
    }
}
function Te(e, t) {
    var n = t.deletions
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r]
            try {
                var i = e,
                    o = t,
                    u = o
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            ;(b = u.stateNode), (Re = !1)
                            break e
                        case 3:
                            ;(b = u.stateNode.containerInfo), (Re = !0)
                            break e
                        case 4:
                            ;(b = u.stateNode.containerInfo), (Re = !0)
                            break e
                    }
                    u = u.return
                }
                if (b === null) throw Error(g(160))
                Ua(i, o, l), (b = null), (Re = !1)
                var s = l.alternate
                s !== null && (s.return = null), (l.return = null)
            } catch (c) {
                W(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Aa(t, e), (t = t.sibling)
}
function Aa(e, t) {
    var n = e.alternate,
        r = e.flags
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Te(t, e), Ie(e), r & 4)) {
                try {
                    Pn(3, e, e.return), al(3, e)
                } catch (w) {
                    W(e, e.return, w)
                }
                try {
                    Pn(5, e, e.return)
                } catch (w) {
                    W(e, e.return, w)
                }
            }
            break
        case 1:
            Te(t, e), Ie(e), r & 512 && n !== null && Vt(n, n.return)
            break
        case 5:
            if (
                (Te(t, e),
                Ie(e),
                r & 512 && n !== null && Vt(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode
                try {
                    Rn(l, "")
                } catch (w) {
                    W(e, e.return, w)
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    u = e.type,
                    s = e.updateQueue
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            ss(l, i),
                            ri(u, o)
                        var c = ri(u, i)
                        for (o = 0; o < s.length; o += 2) {
                            var h = s[o],
                                y = s[o + 1]
                            h === "style"
                                ? ps(l, y)
                                : h === "dangerouslySetInnerHTML"
                                ? fs(l, y)
                                : h === "children"
                                ? Rn(l, y)
                                : Wi(l, h, y, c)
                        }
                        switch (u) {
                            case "input":
                                ql(l, i)
                                break
                            case "textarea":
                                as(l, i)
                                break
                            case "select":
                                var m = l._wrapperState.wasMultiple
                                l._wrapperState.wasMultiple = !!i.multiple
                                var k = i.value
                                k != null
                                    ? Ht(l, !!i.multiple, k, !1)
                                    : m !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Ht(
                                                l,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Ht(
                                                l,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ))
                        }
                        l[$n] = i
                    } catch (w) {
                        W(e, e.return, w)
                    }
            }
            break
        case 6:
            if ((Te(t, e), Ie(e), r & 4)) {
                if (e.stateNode === null) throw Error(g(162))
                ;(c = e.stateNode), (h = e.memoizedProps)
                try {
                    c.nodeValue = h
                } catch (w) {
                    W(e, e.return, w)
                }
            }
            break
        case 3:
            if (
                (Te(t, e),
                Ie(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Dn(t.containerInfo)
                } catch (w) {
                    W(e, e.return, w)
                }
            break
        case 4:
            Te(t, e), Ie(e)
            break
        case 13:
            Te(t, e),
                Ie(e),
                (c = e.child),
                c.flags & 8192 &&
                    c.memoizedState !== null &&
                    (c.alternate === null ||
                        c.alternate.memoizedState === null) &&
                    (So = K()),
                r & 4 && Iu(e)
            break
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((le = (h = le) || c), Te(t, e), (le = h))
                    : Te(t, e),
                Ie(e),
                r & 8192)
            ) {
                h = e.memoizedState !== null
                e: for (y = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (y === null) {
                            y = m
                            try {
                                ;(l = m.stateNode),
                                    h
                                        ? ((i = l.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((u = m.stateNode),
                                          (s = m.memoizedProps.style),
                                          (o =
                                              s != null &&
                                              s.hasOwnProperty("display")
                                                  ? s.display
                                                  : null),
                                          (u.style.display = ds("display", o)))
                            } catch (w) {
                                W(e, e.return, w)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (y === null)
                            try {
                                m.stateNode.nodeValue = h ? "" : m.memoizedProps
                            } catch (w) {
                                W(e, e.return, w)
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        ;(m.child.return = m), (m = m.child)
                        continue
                    }
                    if (m === e) break e
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e
                        y === m && (y = null), (m = m.return)
                    }
                    y === m && (y = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling)
                }
                if (h && !c && (e.mode & 1) !== 0)
                    for (S = e, e = e.child; e !== null; ) {
                        for (c = S = e; S !== null; ) {
                            switch (((h = S), (y = h.child), h.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Pn(4, h, h.return)
                                    break
                                case 1:
                                    if (
                                        (Vt(h, h.return),
                                        (i = h.stateNode),
                                        typeof i.componentWillUnmount ==
                                            "function")
                                    ) {
                                        ;(m = h), (k = h.return)
                                        try {
                                            ;(l = m),
                                                (i.props = l.memoizedProps),
                                                (i.state = l.memoizedState),
                                                i.componentWillUnmount()
                                        } catch (w) {
                                            W(m, k, w)
                                        }
                                    }
                                    break
                                case 5:
                                    Vt(h, h.return)
                                    break
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Uu(c)
                                        continue
                                    }
                            }
                            y !== null ? ((y.return = h), (S = y)) : Uu(c)
                        }
                        e = e.sibling
                    }
            }
            break
        case 19:
            Te(t, e), Ie(e), r & 4 && Iu(e)
            break
        case 21:
            break
        default:
            Te(t, e), Ie(e)
    }
}
function Ie(e) {
    var t = e.flags
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Fa(n)) {
                        var r = n
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode
                    r.flags & 32 && (Rn(l, ""), (r.flags &= -33))
                    var i = Du(e)
                    Mi(e, i, l)
                    break
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = Du(e)
                    Ri(e, u, o)
                    break
                default:
                    throw Error(g(161))
            }
        } catch (s) {
            W(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ld(e, t, n) {
    ;(S = e), $a(e)
}
function $a(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S,
            i = l.child
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || hr
            if (!o) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || le
                u = hr
                var c = le
                if (((hr = o), (le = s) && !c))
                    for (S = l; S !== null; )
                        (o = S),
                            (s = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? Au(l)
                                : s !== null
                                ? ((s.return = o), (S = s))
                                : Au(l)
                for (; i !== null; ) (S = i), $a(i), (i = i.sibling)
                ;(S = l), (hr = u), (le = c)
            }
            Fu(e)
        } else
            (l.subtreeFlags & 8772) !== 0 && i !== null
                ? ((i.return = l), (S = i))
                : Fu(e)
    }
}
function Fu(e) {
    for (; S !== null; ) {
        var t = S
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate
            try {
                if ((t.flags & 8772) !== 0)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            le || al(5, t)
                            break
                        case 1:
                            var r = t.stateNode
                            if (t.flags & 4 && !le)
                                if (n === null) r.componentDidMount()
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Le(t.type, n.memoizedProps)
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    )
                                }
                            var i = t.updateQueue
                            i !== null && hu(t, i, r)
                            break
                        case 3:
                            var o = t.updateQueue
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode
                                            break
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                hu(t, o, n)
                            }
                            break
                        case 5:
                            var u = t.stateNode
                            if (n === null && t.flags & 4) {
                                n = u
                                var s = t.memoizedProps
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus()
                                        break
                                    case "img":
                                        s.src && (n.src = s.src)
                                }
                            }
                            break
                        case 6:
                            break
                        case 4:
                            break
                        case 12:
                            break
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate
                                if (c !== null) {
                                    var h = c.memoizedState
                                    if (h !== null) {
                                        var y = h.dehydrated
                                        y !== null && Dn(y)
                                    }
                                }
                            }
                            break
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                            break
                        default:
                            throw Error(g(163))
                    }
                le || (t.flags & 512 && Li(t))
            } catch (m) {
                W(t, t.return, m)
            }
        }
        if (t === e) {
            S = null
            break
        }
        if (((n = t.sibling), n !== null)) {
            ;(n.return = t.return), (S = n)
            break
        }
        S = t.return
    }
}
function Uu(e) {
    for (; S !== null; ) {
        var t = S
        if (t === e) {
            S = null
            break
        }
        var n = t.sibling
        if (n !== null) {
            ;(n.return = t.return), (S = n)
            break
        }
        S = t.return
    }
}
function Au(e) {
    for (; S !== null; ) {
        var t = S
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return
                    try {
                        al(4, t)
                    } catch (s) {
                        W(t, n, s)
                    }
                    break
                case 1:
                    var r = t.stateNode
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            W(t, l, s)
                        }
                    }
                    var i = t.return
                    try {
                        Li(t)
                    } catch (s) {
                        W(t, i, s)
                    }
                    break
                case 5:
                    var o = t.return
                    try {
                        Li(t)
                    } catch (s) {
                        W(t, o, s)
                    }
            }
        } catch (s) {
            W(t, t.return, s)
        }
        if (t === e) {
            S = null
            break
        }
        var u = t.sibling
        if (u !== null) {
            ;(u.return = t.return), (S = u)
            break
        }
        S = t.return
    }
}
var id = Math.ceil,
    Xr = Je.ReactCurrentDispatcher,
    ko = Je.ReactCurrentOwner,
    Ee = Je.ReactCurrentBatchConfig,
    j = 0,
    J = null,
    Y = null,
    ee = 0,
    ve = 0,
    Wt = mt(0),
    G = 0,
    Kn = null,
    Pt = 0,
    cl = 0,
    xo = 0,
    zn = null,
    ce = null,
    So = 0,
    tn = 1 / 0,
    Be = null,
    Gr = !1,
    ji = null,
    st = null,
    vr = !1,
    rt = null,
    Jr = 0,
    Tn = 0,
    Oi = null,
    Cr = -1,
    Pr = 0
function ue() {
    return (j & 6) !== 0 ? K() : Cr !== -1 ? Cr : (Cr = K())
}
function at(e) {
    return (e.mode & 1) === 0
        ? 1
        : (j & 2) !== 0 && ee !== 0
        ? ee & -ee
        : Wf.transition !== null
        ? (Pr === 0 && (Pr = _s()), Pr)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ms(e.type))),
          e)
}
function _e(e, t, n) {
    if (50 < Tn) throw ((Tn = 0), (Oi = null), Error(g(185)))
    var r = fl(e, t)
    return r === null
        ? null
        : (Xn(r, t, n),
          ((j & 2) === 0 || r !== J) &&
              (r === J && ((j & 2) === 0 && (cl |= t), G === 4 && tt(r, ee)),
              he(r, n),
              t === 1 &&
                  j === 0 &&
                  (e.mode & 1) === 0 &&
                  ((tn = K() + 500), ol && ht())),
          r)
}
function fl(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return)
    return n.tag === 3 ? n.stateNode : null
}
function Ba(e) {
    return (J !== null || je !== null) && (e.mode & 1) !== 0 && (j & 2) === 0
}
function he(e, t) {
    var n = e.callbackNode
    Vc(e, t)
    var r = jr(e, e === J ? ee : 0)
    if (r === 0)
        n !== null && Qo(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Qo(n), t === 1))
            e.tag === 0 ? Vf($u.bind(null, e)) : Zs($u.bind(null, e)),
                Uf(function () {
                    j === 0 && ht()
                }),
                (n = null)
        else {
            switch (Cs(r)) {
                case 1:
                    n = Xi
                    break
                case 4:
                    n = Ns
                    break
                case 16:
                    n = Mr
                    break
                case 536870912:
                    n = Es
                    break
                default:
                    n = Mr
            }
            n = Ga(n, Va.bind(null, e))
        }
        ;(e.callbackPriority = t), (e.callbackNode = n)
    }
}
function Va(e, t) {
    if (((Cr = -1), (Pr = 0), (j & 6) !== 0)) throw Error(g(327))
    var n = e.callbackNode
    if (Gt() && e.callbackNode !== n) return null
    var r = jr(e, e === J ? ee : 0)
    if (r === 0) return null
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Zr(e, r)
    else {
        t = r
        var l = j
        j |= 2
        var i = Ha()
        ;(J !== e || ee !== t) && ((Be = null), (tn = K() + 500), St(e, t))
        do
            try {
                sd()
                break
            } catch (u) {
                Wa(e, u)
            }
        while (1)
        lo(),
            (Xr.current = i),
            (j = l),
            Y !== null ? (t = 0) : ((J = null), (ee = 0), (t = G))
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = si(e)), l !== 0 && ((r = l), (t = Di(e, l)))),
            t === 1)
        )
            throw ((n = Kn), St(e, 0), tt(e, r), he(e, K()), n)
        if (t === 6) tt(e, r)
        else {
            if (
                ((l = e.current.alternate),
                (r & 30) === 0 &&
                    !od(l) &&
                    ((t = Zr(e, r)),
                    t === 2 &&
                        ((i = si(e)), i !== 0 && ((r = i), (t = Di(e, i)))),
                    t === 1))
            )
                throw ((n = Kn), St(e, 0), tt(e, r), he(e, K()), n)
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(g(345))
                case 2:
                    wt(e, ce, Be)
                    break
                case 3:
                    if (
                        (tt(e, r),
                        (r & 130023424) === r && ((t = So + 500 - K()), 10 < t))
                    ) {
                        if (jr(e, 0) !== 0) break
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ue(), (e.pingedLanes |= e.suspendedLanes & l)
                            break
                        }
                        e.timeoutHandle = vi(wt.bind(null, e, ce, Be), t)
                        break
                    }
                    wt(e, ce, Be)
                    break
                case 4:
                    if ((tt(e, r), (r & 4194240) === r)) break
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var o = 31 - Oe(r)
                        ;(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i)
                    }
                    if (
                        ((r = l),
                        (r = K() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * id(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = vi(wt.bind(null, e, ce, Be), r)
                        break
                    }
                    wt(e, ce, Be)
                    break
                case 5:
                    wt(e, ce, Be)
                    break
                default:
                    throw Error(g(329))
            }
        }
    }
    return he(e, K()), e.callbackNode === n ? Va.bind(null, e) : null
}
function Di(e, t) {
    var n = zn
    return (
        e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
        (e = Zr(e, t)),
        e !== 2 && ((t = ce), (ce = n), t !== null && Ii(t)),
        e
    )
}
function Ii(e) {
    ce === null ? (ce = e) : ce.push.apply(ce, e)
}
function od(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot
                    l = l.value
                    try {
                        if (!De(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n)
        else {
            if (t === e) break
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
    }
    return !0
}
function tt(e, t) {
    for (
        t &= ~xo,
            t &= ~cl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Oe(t),
            r = 1 << n
        ;(e[n] = -1), (t &= ~r)
    }
}
function $u(e) {
    if ((j & 6) !== 0) throw Error(g(327))
    Gt()
    var t = jr(e, 0)
    if ((t & 1) === 0) return he(e, K()), null
    var n = Zr(e, t)
    if (e.tag !== 0 && n === 2) {
        var r = si(e)
        r !== 0 && ((t = r), (n = Di(e, r)))
    }
    if (n === 1) throw ((n = Kn), St(e, 0), tt(e, t), he(e, K()), n)
    if (n === 6) throw Error(g(345))
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        wt(e, ce, Be),
        he(e, K()),
        null
    )
}
function No(e, t) {
    var n = j
    j |= 1
    try {
        return e(t)
    } finally {
        ;(j = n), j === 0 && ((tn = K() + 500), ol && ht())
    }
}
function zt(e) {
    rt !== null && rt.tag === 0 && (j & 6) === 0 && Gt()
    var t = j
    j |= 1
    var n = Ee.transition,
        r = O
    try {
        if (((Ee.transition = null), (O = 1), e)) return e()
    } finally {
        ;(O = r), (Ee.transition = n), (j = t), (j & 6) === 0 && ht()
    }
}
function Eo() {
    ;(ve = Wt.current), F(Wt)
}
function St(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), Ff(n)), Y !== null))
        for (n = Y.return; n !== null; ) {
            var r = n
            switch ((so(r), r.tag)) {
                case 1:
                    ;(r = r.type.childContextTypes), r != null && Ur()
                    break
                case 3:
                    en(), F(pe), F(ie), po()
                    break
                case 5:
                    fo(r)
                    break
                case 4:
                    en()
                    break
                case 13:
                    F($)
                    break
                case 19:
                    F($)
                    break
                case 10:
                    io(r.type._context)
                    break
                case 22:
                case 23:
                    Eo()
            }
            n = n.return
        }
    if (
        ((J = e),
        (Y = e = dt(e.current, null)),
        (ee = ve = t),
        (G = 0),
        (Kn = null),
        (xo = cl = Pt = 0),
        (ce = zn = null),
        je !== null)
    ) {
        for (t = 0; t < je.length; t++)
            if (((n = je[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null
                var l = r.next,
                    i = n.pending
                if (i !== null) {
                    var o = i.next
                    ;(i.next = l), (r.next = o)
                }
                n.pending = r
            }
        je = null
    }
    return e
}
function Wa(e, t) {
    do {
        var n = Y
        try {
            if ((lo(), (Er.current = Yr), Kr)) {
                for (var r = B.memoizedState; r !== null; ) {
                    var l = r.queue
                    l !== null && (l.pending = null), (r = r.next)
                }
                Kr = !1
            }
            if (
                ((Ct = 0),
                (q = X = B = null),
                (Cn = !1),
                (Wn = 0),
                (ko.current = null),
                n === null || n.return === null)
            ) {
                ;(G = 1), (Kn = t), (Y = null)
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    u = n,
                    s = t
                if (
                    ((t = ee),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == "object" &&
                        typeof s.then == "function")
                ) {
                    var c = s,
                        h = u,
                        y = h.tag
                    if (
                        (h.mode & 1) === 0 &&
                        (y === 0 || y === 11 || y === 15)
                    ) {
                        var m = h.alternate
                        m
                            ? ((h.updateQueue = m.updateQueue),
                              (h.memoizedState = m.memoizedState),
                              (h.lanes = m.lanes))
                            : ((h.updateQueue = null), (h.memoizedState = null))
                    }
                    var k = Eu(o)
                    if (k !== null) {
                        ;(k.flags &= -257),
                            _u(k, o, u, i, t),
                            k.mode & 1 && Nu(i, c, t),
                            (t = k),
                            (s = c)
                        var w = t.updateQueue
                        if (w === null) {
                            var P = new Set()
                            P.add(s), (t.updateQueue = P)
                        } else w.add(s)
                        break e
                    } else {
                        if ((t & 1) === 0) {
                            Nu(i, c, t), _o()
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if (A && u.mode & 1) {
                    var U = Eu(o)
                    if (U !== null) {
                        ;(U.flags & 65536) === 0 && (U.flags |= 256),
                            _u(U, o, u, i, t),
                            ao(s)
                        break e
                    }
                }
                ;(i = s),
                    G !== 4 && (G = 2),
                    zn === null ? (zn = [i]) : zn.push(i),
                    (s = wo(s, u)),
                    (u = o)
                do {
                    switch (u.tag) {
                        case 3:
                            ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                            var d = _a(u, s, t)
                            mu(u, d)
                            break e
                        case 1:
                            i = s
                            var a = u.type,
                                p = u.stateNode
                            if (
                                (u.flags & 128) === 0 &&
                                (typeof a.getDerivedStateFromError ==
                                    "function" ||
                                    (p !== null &&
                                        typeof p.componentDidCatch ==
                                            "function" &&
                                        (st === null || !st.has(p))))
                            ) {
                                ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                                var v = Ca(u, i, t)
                                mu(u, v)
                                break e
                            }
                    }
                    u = u.return
                } while (u !== null)
            }
            Ka(n)
        } catch (x) {
            ;(t = x), Y === n && n !== null && (Y = n = n.return)
            continue
        }
        break
    } while (1)
}
function Ha() {
    var e = Xr.current
    return (Xr.current = Yr), e === null ? Yr : e
}
function _o() {
    ;(G === 0 || G === 3 || G === 2) && (G = 4),
        J === null ||
            ((Pt & 268435455) === 0 && (cl & 268435455) === 0) ||
            tt(J, ee)
}
function Zr(e, t) {
    var n = j
    j |= 2
    var r = Ha()
    ;(J !== e || ee !== t) && ((Be = null), St(e, t))
    do
        try {
            ud()
            break
        } catch (l) {
            Wa(e, l)
        }
    while (1)
    if ((lo(), (j = n), (Xr.current = r), Y !== null)) throw Error(g(261))
    return (J = null), (ee = 0), G
}
function ud() {
    for (; Y !== null; ) Qa(Y)
}
function sd() {
    for (; Y !== null && !jc(); ) Qa(Y)
}
function Qa(e) {
    var t = Xa(e.alternate, e, ve)
    ;(e.memoizedProps = e.pendingProps),
        t === null ? Ka(e) : (Y = t),
        (ko.current = null)
}
function Ka(e) {
    var t = e
    do {
        var n = t.alternate
        if (((e = t.return), (t.flags & 32768) === 0)) {
            if (((n = qf(n, t, ve)), n !== null)) {
                Y = n
                return
            }
        } else {
            if (((n = td(n, t)), n !== null)) {
                ;(n.flags &= 32767), (Y = n)
                return
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            else {
                ;(G = 6), (Y = null)
                return
            }
        }
        if (((t = t.sibling), t !== null)) {
            Y = t
            return
        }
        Y = t = e
    } while (t !== null)
    G === 0 && (G = 5)
}
function wt(e, t, n) {
    var r = O,
        l = Ee.transition
    try {
        ;(Ee.transition = null), (O = 1), ad(e, t, n, r)
    } finally {
        ;(Ee.transition = l), (O = r)
    }
    return null
}
function ad(e, t, n, r) {
    do Gt()
    while (rt !== null)
    if ((j & 6) !== 0) throw Error(g(327))
    n = e.finishedWork
    var l = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(g(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var i = n.lanes | n.childLanes
    if (
        (Wc(e, i),
        e === J && ((Y = J = null), (ee = 0)),
        ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
            vr ||
            ((vr = !0),
            Ga(Mr, function () {
                return Gt(), null
            })),
        (i = (n.flags & 15990) !== 0),
        (n.subtreeFlags & 15990) !== 0 || i)
    ) {
        ;(i = Ee.transition), (Ee.transition = null)
        var o = O
        O = 1
        var u = j
        ;(j |= 4),
            (ko.current = null),
            rd(e, n),
            Aa(n, e),
            Lf(mi),
            (Or = !!pi),
            (mi = pi = null),
            (e.current = n),
            ld(n),
            Oc(),
            (j = u),
            (O = o),
            (Ee.transition = i)
    } else e.current = n
    if (
        (vr && ((vr = !1), (rt = e), (Jr = l)),
        (i = e.pendingLanes),
        i === 0 && (st = null),
        Fc(n.stateNode),
        he(e, K()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n])
    if (Gr) throw ((Gr = !1), (e = ji), (ji = null), e)
    return (
        (Jr & 1) !== 0 && e.tag !== 0 && Gt(),
        (i = e.pendingLanes),
        (i & 1) !== 0 ? (e === Oi ? Tn++ : ((Tn = 0), (Oi = e))) : (Tn = 0),
        ht(),
        null
    )
}
function Gt() {
    if (rt !== null) {
        var e = Cs(Jr),
            t = Ee.transition,
            n = O
        try {
            if (((Ee.transition = null), (O = 16 > e ? 16 : e), rt === null))
                var r = !1
            else {
                if (((e = rt), (rt = null), (Jr = 0), (j & 6) !== 0))
                    throw Error(g(331))
                var l = j
                for (j |= 4, S = e.current; S !== null; ) {
                    var i = S,
                        o = i.child
                    if ((S.flags & 16) !== 0) {
                        var u = i.deletions
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s]
                                for (S = c; S !== null; ) {
                                    var h = S
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pn(8, h, i)
                                    }
                                    var y = h.child
                                    if (y !== null) (y.return = h), (S = y)
                                    else
                                        for (; S !== null; ) {
                                            h = S
                                            var m = h.sibling,
                                                k = h.return
                                            if ((Ia(h), h === c)) {
                                                S = null
                                                break
                                            }
                                            if (m !== null) {
                                                ;(m.return = k), (S = m)
                                                break
                                            }
                                            S = k
                                        }
                                }
                            }
                            var w = i.alternate
                            if (w !== null) {
                                var P = w.child
                                if (P !== null) {
                                    w.child = null
                                    do {
                                        var U = P.sibling
                                        ;(P.sibling = null), (P = U)
                                    } while (P !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if ((i.subtreeFlags & 2064) !== 0 && o !== null)
                        (o.return = i), (S = o)
                    else
                        e: for (; S !== null; ) {
                            if (((i = S), (i.flags & 2048) !== 0))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pn(9, i, i.return)
                                }
                            var d = i.sibling
                            if (d !== null) {
                                ;(d.return = i.return), (S = d)
                                break e
                            }
                            S = i.return
                        }
                }
                var a = e.current
                for (S = a; S !== null; ) {
                    o = S
                    var p = o.child
                    if ((o.subtreeFlags & 2064) !== 0 && p !== null)
                        (p.return = o), (S = p)
                    else
                        e: for (o = a; S !== null; ) {
                            if (((u = S), (u.flags & 2048) !== 0))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            al(9, u)
                                    }
                                } catch (x) {
                                    W(u, u.return, x)
                                }
                            if (u === o) {
                                S = null
                                break e
                            }
                            var v = u.sibling
                            if (v !== null) {
                                ;(v.return = u.return), (S = v)
                                break e
                            }
                            S = u.return
                        }
                }
                if (
                    ((j = l),
                    ht(),
                    Ae && typeof Ae.onPostCommitFiberRoot == "function")
                )
                    try {
                        Ae.onPostCommitFiberRoot(tl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ;(O = n), (Ee.transition = t)
        }
    }
    return !1
}
function Bu(e, t, n) {
    ;(t = wo(n, t)),
        (t = _a(e, t, 1)),
        ut(e, t),
        (t = ue()),
        (e = fl(e, 1)),
        e !== null && (Xn(e, 1, t), he(e, t))
}
function W(e, t, n) {
    if (e.tag === 3) Bu(e, e, n)
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Bu(t, e, n)
                break
            } else if (t.tag === 1) {
                var r = t.stateNode
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (st === null || !st.has(r)))
                ) {
                    ;(e = wo(n, e)),
                        (e = Ca(t, e, 1)),
                        ut(t, e),
                        (e = ue()),
                        (t = fl(t, 1)),
                        t !== null && (Xn(t, 1, e), he(t, e))
                    break
                }
            }
            t = t.return
        }
}
function cd(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t),
        (t = ue()),
        (e.pingedLanes |= e.suspendedLanes & n),
        J === e &&
            (ee & n) === n &&
            (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - So)
                ? St(e, 0)
                : (xo |= n)),
        he(e, t)
}
function Ya(e, t) {
    t === 0 &&
        ((e.mode & 1) === 0
            ? (t = 1)
            : ((t = ir), (ir <<= 1), (ir & 130023424) === 0 && (ir = 4194304)))
    var n = ue()
    ;(e = fl(e, t)), e !== null && (Xn(e, t, n), he(e, n))
}
function fd(e) {
    var t = e.memoizedState,
        n = 0
    t !== null && (n = t.retryLane), Ya(e, n)
}
function dd(e, t) {
    var n = 0
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState
            l !== null && (n = l.retryLane)
            break
        case 19:
            r = e.stateNode
            break
        default:
            throw Error(g(314))
    }
    r !== null && r.delete(t), Ya(e, n)
}
var Xa
Xa = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) de = !0
        else {
            if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                return (de = !1), ed(e, t, n)
            de = (e.flags & 131072) !== 0
        }
    else (de = !1), A && (t.flags & 1048576) !== 0 && ta(t, Hr, t.index)
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type
            e !== null &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps)
            var l = Zt(t, ie.current)
            Xt(t, n), (l = ho(null, t, r, e, l, n))
            var i = vo()
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      me(r) ? ((i = !0), Ar(t)) : (i = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      oo(t),
                      (l.updater = ul),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      xi(t, r, e, n),
                      (t = Pi(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      A && i && uo(t),
                      oe(null, t, l, n),
                      (t = t.child)),
                t
            )
        case 16:
            r = t.elementType
            e: {
                switch (
                    (e !== null &&
                        ((e.alternate = null),
                        (t.alternate = null),
                        (t.flags |= 2)),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = md(r)),
                    (e = Le(r, e)),
                    l)
                ) {
                    case 0:
                        t = Ci(null, t, r, e, n)
                        break e
                    case 1:
                        t = zu(null, t, r, e, n)
                        break e
                    case 11:
                        t = Cu(null, t, r, e, n)
                        break e
                    case 14:
                        t = Pu(null, t, r, Le(r.type, e), n)
                        break e
                }
                throw Error(g(306, r, ""))
            }
            return t
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                Ci(e, t, r, l, n)
            )
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                zu(e, t, r, l, n)
            )
        case 3:
            e: {
                if ((ja(t), e === null)) throw Error(g(387))
                ;(r = t.pendingProps),
                    (i = t.memoizedState),
                    (l = i.element),
                    qs(e, t),
                    Vr(t, r, null, n)
                var o = t.memoizedState
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        ;(l = Error(g(423))), (t = Tu(e, t, r, n, l))
                        break e
                    } else if (r !== l) {
                        ;(l = Error(g(424))), (t = Tu(e, t, r, n, l))
                        break e
                    } else
                        for (
                            fe = We(t.stateNode.containerInfo.firstChild),
                                ge = t,
                                A = !0,
                                Me = null,
                                n = la(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
                else {
                    if ((qt(), r === l)) {
                        t = Ge(e, t, n)
                        break e
                    }
                    oe(e, t, r, n)
                }
                t = t.child
            }
            return t
        case 5:
            return (
                ia(t),
                e === null && Ni(t),
                (r = t.type),
                (l = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (o = l.children),
                hi(r, l)
                    ? (o = null)
                    : i !== null && hi(r, i) && (t.flags |= 32),
                Ma(e, t),
                oe(e, t, o, n),
                t.child
            )
        case 6:
            return e === null && Ni(t), null
        case 13:
            return Oa(e, t, n)
        case 4:
            return (
                co(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = bt(t, null, r, n)) : oe(e, t, r, n),
                t.child
            )
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                Cu(e, t, r, l, n)
            )
        case 7:
            return oe(e, t, t.pendingProps, n), t.child
        case 8:
            return oe(e, t, t.pendingProps.children, n), t.child
        case 12:
            return oe(e, t, t.pendingProps.children, n), t.child
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = l.value),
                    D($r, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (De(i.value, o)) {
                        if (i.children === l.children && !pe.current) {
                            t = Ge(e, t, n)
                            break e
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var u = i.dependencies
                            if (u !== null) {
                                o = i.child
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            ;(s = Ke(-1, n & -n)), (s.tag = 2)
                                            var c = i.updateQueue
                                            if (c !== null) {
                                                c = c.shared
                                                var h = c.pending
                                                h === null
                                                    ? (s.next = s)
                                                    : ((s.next = h.next),
                                                      (h.next = s)),
                                                    (c.pending = s)
                                            }
                                        }
                                        ;(i.lanes |= n),
                                            (s = i.alternate),
                                            s !== null && (s.lanes |= n),
                                            wi(i.return, n, t),
                                            (u.lanes |= n)
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (i.tag === 10)
                                o = i.type === t.type ? null : i.child
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null))
                                    throw Error(g(341))
                                ;(o.lanes |= n),
                                    (u = o.alternate),
                                    u !== null && (u.lanes |= n),
                                    wi(o, n, t),
                                    (o = i.sibling)
                            } else o = i.child
                            if (o !== null) o.return = i
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null
                                        break
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        ;(i.return = o.return), (o = i)
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                oe(e, t, l.children, n), (t = t.child)
            }
            return t
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                Xt(t, n),
                (l = Ce(l)),
                (r = r(l)),
                (t.flags |= 1),
                oe(e, t, r, n),
                t.child
            )
        case 14:
            return (
                (r = t.type),
                (l = Le(r, t.pendingProps)),
                (l = Le(r.type, l)),
                Pu(e, t, r, l, n)
            )
        case 15:
            return La(e, t, t.type, t.pendingProps, n)
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                e !== null &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                (t.tag = 1),
                me(r) ? ((e = !0), Ar(t)) : (e = !1),
                Xt(t, n),
                ea(t, r, l),
                xi(t, r, l, n),
                Pi(null, t, r, !0, e, n)
            )
        case 19:
            return Da(e, t, n)
        case 22:
            return Ra(e, t, n)
    }
    throw Error(g(156, t.tag))
}
function Ga(e, t) {
    return Ss(e, t)
}
function pd(e, t, n, r) {
    ;(this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
}
function Ne(e, t, n, r) {
    return new pd(e, t, n, r)
}
function Co(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
}
function md(e) {
    if (typeof e == "function") return Co(e) ? 1 : 0
    if (e != null) {
        if (((e = e.$$typeof), e === Qi)) return 11
        if (e === Ki) return 14
    }
    return 2
}
function dt(e, t) {
    var n = e.alternate
    return (
        n === null
            ? ((n = Ne(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    )
}
function zr(e, t, n, r, l, i) {
    var o = 2
    if (((r = e), typeof e == "function")) Co(e) && (o = 1)
    else if (typeof e == "string") o = 5
    else
        e: switch (e) {
            case jt:
                return Nt(n.children, l, i, t)
            case Hi:
                ;(o = 8), (l |= 8)
                break
            case Yl:
                return (
                    (e = Ne(12, n, t, l | 2)),
                    (e.elementType = Yl),
                    (e.lanes = i),
                    e
                )
            case Xl:
                return (
                    (e = Ne(13, n, t, l)),
                    (e.elementType = Xl),
                    (e.lanes = i),
                    e
                )
            case Gl:
                return (
                    (e = Ne(19, n, t, l)),
                    (e.elementType = Gl),
                    (e.lanes = i),
                    e
                )
            case is:
                return qr(n, l, i, t)
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case rs:
                            o = 10
                            break e
                        case ls:
                            o = 9
                            break e
                        case Qi:
                            o = 11
                            break e
                        case Ki:
                            o = 14
                            break e
                        case qe:
                            ;(o = 16), (r = null)
                            break e
                    }
                throw Error(g(130, e == null ? e : typeof e, ""))
        }
    return (
        (t = Ne(o, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    )
}
function Nt(e, t, n, r) {
    return (e = Ne(7, e, r, t)), (e.lanes = n), e
}
function qr(e, t, n, r) {
    return (
        (e = Ne(22, e, r, t)),
        (e.elementType = is),
        (e.lanes = n),
        (e.stateNode = {}),
        e
    )
}
function Wl(e, t, n) {
    return (e = Ne(6, e, null, t)), (e.lanes = n), e
}
function Hl(e, t, n) {
    return (
        (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    )
}
function hd(e, t, n, r, l) {
    ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = _l(0)),
        (this.expirationTimes = _l(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = _l(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null)
}
function Po(e, t, n, r, l, i, o, u, s) {
    return (
        (e = new hd(e, t, n, u, s)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Ne(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        oo(i),
        e
    )
}
function vd(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
        $$typeof: Mt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    }
}
function Ja(e) {
    if (!e) return ft
    e = e._reactInternals
    e: {
        if (Lt(e) !== e || e.tag !== 1) throw Error(g(170))
        var t = e
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context
                    break e
                case 1:
                    if (me(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext
                        break e
                    }
            }
            t = t.return
        } while (t !== null)
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type
        if (me(n)) return Js(e, n, t)
    }
    return t
}
function Za(e, t, n, r, l, i, o, u, s) {
    return (
        (e = Po(n, r, !0, e, l, i, o, u, s)),
        (e.context = Ja(null)),
        (n = e.current),
        (r = ue()),
        (l = at(n)),
        (i = Ke(r, l)),
        (i.callback = t != null ? t : null),
        ut(n, i),
        (e.current.lanes = l),
        Xn(e, l, r),
        he(e, r),
        e
    )
}
function dl(e, t, n, r) {
    var l = t.current,
        i = ue(),
        o = at(l)
    return (
        (n = Ja(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Ke(i, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        ut(l, t),
        (e = _e(l, o, i)),
        e !== null && Nr(e, l, o),
        o
    )
}
function br(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode
        default:
            return e.child.stateNode
    }
}
function Vu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function zo(e, t) {
    Vu(e, t), (e = e.alternate) && Vu(e, t)
}
function gd() {
    return null
}
var qa =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e)
          }
function To(e) {
    this._internalRoot = e
}
pl.prototype.render = To.prototype.render = function (e) {
    var t = this._internalRoot
    if (t === null) throw Error(g(409))
    dl(e, t, null, null)
}
pl.prototype.unmount = To.prototype.unmount = function () {
    var e = this._internalRoot
    if (e !== null) {
        this._internalRoot = null
        var t = e.containerInfo
        zt(function () {
            dl(null, e, null, null)
        }),
            (t[Xe] = null)
    }
}
function pl(e) {
    this._internalRoot = e
}
pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ts()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Rs(e)
    }
}
function Lo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ml(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    )
}
function Wu() {}
function yd(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r
            r = function () {
                var c = br(o)
                i.call(c)
            }
        }
        var o = Za(t, r, e, 0, null, !1, !1, "", Wu)
        return (
            (e._reactRootContainer = o),
            (e[Xe] = o.current),
            Un(e.nodeType === 8 ? e.parentNode : e),
            zt(),
            o
        )
    }
    for (; (l = e.lastChild); ) e.removeChild(l)
    if (typeof r == "function") {
        var u = r
        r = function () {
            var c = br(s)
            u.call(c)
        }
    }
    var s = Po(e, 0, !1, null, null, !1, !1, "", Wu)
    return (
        (e._reactRootContainer = s),
        (e[Xe] = s.current),
        Un(e.nodeType === 8 ? e.parentNode : e),
        zt(function () {
            dl(t, s, n, r)
        }),
        s
    )
}
function hl(e, t, n, r, l) {
    var i = n._reactRootContainer
    if (i) {
        var o = i
        if (typeof l == "function") {
            var u = l
            l = function () {
                var s = br(o)
                u.call(s)
            }
        }
        dl(t, o, e, l)
    } else o = yd(n, t, e, l, r)
    return br(o)
}
Ps = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode
            if (t.current.memoizedState.isDehydrated) {
                var n = wn(t.pendingLanes)
                n !== 0 &&
                    (Gi(t, n | 1),
                    he(t, K()),
                    (j & 6) === 0 && ((tn = K() + 500), ht()))
            }
            break
        case 13:
            var r = ue()
            zt(function () {
                return _e(e, 1, r)
            }),
                zo(e, 1)
    }
}
Ji = function (e) {
    if (e.tag === 13) {
        var t = ue()
        _e(e, 134217728, t), zo(e, 134217728)
    }
}
zs = function (e) {
    if (e.tag === 13) {
        var t = ue(),
            n = at(e)
        _e(e, n, t), zo(e, n)
    }
}
Ts = function () {
    return O
}
Ls = function (e, t) {
    var n = O
    try {
        return (O = e), t()
    } finally {
        O = n
    }
}
ii = function (e, t, n) {
    switch (t) {
        case "input":
            if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                        var l = il(r)
                        if (!l) throw Error(g(90))
                        us(r), ql(r, l)
                    }
                }
            }
            break
        case "textarea":
            as(e, n)
            break
        case "select":
            ;(t = n.value), t != null && Ht(e, !!n.multiple, t, !1)
    }
}
vs = No
gs = zt
var wd = { usingClientEntryPoint: !1, Events: [Jn, Ft, il, ms, hs, No] },
    vn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "18.1.0",
        rendererPackageName: "react-dom",
    },
    kd = {
        bundleType: vn.bundleType,
        version: vn.version,
        rendererPackageName: vn.rendererPackageName,
        rendererConfig: vn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Je.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = ks(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: vn.findFiberByHostInstance || gd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
    }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            ;(tl = gr.inject(kd)), (Ae = gr)
        } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wd
we.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!Lo(t)) throw Error(g(200))
    return vd(e, t, null, n)
}
we.createRoot = function (e, t) {
    if (!Lo(e)) throw Error(g(299))
    var n = !1,
        r = "",
        l = qa
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Po(e, 1, !1, null, null, n, !1, r, l)),
        (e[Xe] = t.current),
        Un(e.nodeType === 8 ? e.parentNode : e),
        new To(t)
    )
}
we.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var t = e._reactInternals
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(g(188))
            : ((e = Object.keys(e).join(",")), Error(g(268, e)))
    return (e = ks(t)), (e = e === null ? null : e.stateNode), e
}
we.flushSync = function (e) {
    return zt(e)
}
we.hydrate = function (e, t, n) {
    if (!ml(t)) throw Error(g(200))
    return hl(null, e, t, !0, n)
}
we.hydrateRoot = function (e, t, n) {
    if (!Lo(e)) throw Error(g(405))
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = qa
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Za(t, null, e, 1, n != null ? n : null, l, !1, i, o)),
        (e[Xe] = t.current),
        Un(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l)
    return new pl(t)
}
we.render = function (e, t, n) {
    if (!ml(t)) throw Error(g(200))
    return hl(null, e, t, !1, n)
}
we.unmountComponentAtNode = function (e) {
    if (!ml(e)) throw Error(g(40))
    return e._reactRootContainer
        ? (zt(function () {
              hl(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[Xe] = null)
              })
          }),
          !0)
        : !1
}
we.unstable_batchedUpdates = No
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ml(n)) throw Error(g(200))
    if (e == null || e._reactInternals === void 0) throw Error(g(38))
    return hl(e, t, n, !1, r)
}
we.version = "18.1.0-next-22edb9f77-20220426"
function ba() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ba)
        } catch (e) {
            console.error(e)
        }
}
ba(), (qu.exports = we)
var Hu = qu.exports
;(Ql.createRoot = Hu.createRoot), (Ql.hydrateRoot = Hu.hydrateRoot)
var Ro = { exports: {} },
    vl = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd = el.exports,
    Sd = Symbol.for("react.element"),
    Nd = Symbol.for("react.fragment"),
    Ed = Object.prototype.hasOwnProperty,
    _d =
        xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Cd = { key: !0, ref: !0, __self: !0, __source: !0 }
function ec(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (o = t.ref)
    for (r in t) Ed.call(t, r) && !Cd.hasOwnProperty(r) && (l[r] = t[r])
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
    return {
        $$typeof: Sd,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: _d.current,
    }
}
vl.Fragment = Nd
vl.jsx = ec
vl.jsxs = ec
Ro.exports = vl
const f = Ro.exports.jsx,
    z = Ro.exports.jsxs,
    Pd = () =>
        f("div", {
            className: "timeline-left",
            children: z("div", {
                className: "outer-left",
                children: [
                    f("div", {
                        className: "card-left",
                        children: z("div", {
                            className: "info-left",
                            children: [
                                f("h3", {
                                    className: "title-left text-2xl",
                                    children: "June 4th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Introduction to web3 tech stack",
                                }),
                                f("p", {
                                    className: "text-red my-4",
                                    children:
                                        "An interactive workshop by Learnweb3DAO. NFT certificates for participants.",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-left",
                        children: f("div", { className: "info-left" }),
                    }),
                    f("div", {
                        className: "card-left",
                        children: z("div", {
                            className: "info-left",
                            children: [
                                f("h3", {
                                    className: "title-left text-2xl",
                                    children: "June 7th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "AMA with XYZ",
                                }),
                                f("p", {
                                    className: "my-4",
                                    children:
                                        "An AMA session with some of India's top minds in web3",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-left",
                        children: f("div", { className: "info-left" }),
                    }),
                    f("div", {
                        className: "card-left",
                        children: z("div", {
                            className: "info-left",
                            children: [
                                f("h3", {
                                    className: "title-left text-2xl",
                                    children: "June 12th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Future of Web3",
                                }),
                                f("p", {
                                    className: "my-4",
                                    children:
                                        "A panel about the future of Web3, involving big minds such as Pareen Lathia, Mayur, Harsh and XYZ.",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-left",
                        children: f("div", { className: "info-left" }),
                    }),
                    f("div", {
                        className: "card-left",
                        children: z("div", {
                            className: "info-left",
                            children: [
                                f("h3", {
                                    className: "title-left text-2xl",
                                    children: "June 14th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Pitch event - Demo day",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        })
const zd = () =>
    f("div", {
        className: "timeline-right",
        children: z("div", {
            className: "outer-right",
            children: [
                f("div", {
                    className: "card-right",
                    children: f("div", { className: "info-right" }),
                }),
                f("div", {
                    className: "card-right",
                    children: z("div", {
                        className: "info-right",
                        children: [
                            f("h3", {
                                className: "title-right text-2xl",
                                children: "June 6th",
                            }),
                            f("p", {
                                className: "text-xl font-semibold",
                                children:
                                    "Commencement of BITS Blockchain Hackathon",
                            }),
                        ],
                    }),
                }),
                f("div", {
                    className: "card-right",
                    children: f("div", { className: "info-right" }),
                }),
                f("div", {
                    className: "card-right",
                    children: z("div", {
                        className: "info-right",
                        children: [
                            f("h3", {
                                className: "title-right text-2xl",
                                children: "June 10th",
                            }),
                            z("div", {
                                className:
                                    "flex-col gap-8 text-white justify-between",
                                children: [
                                    f("p", {
                                        children: "Commencement of The Pitch",
                                    }),
                                    f("p", {
                                        className: "my-4",
                                        children: "Raising funds in web3",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                f("div", {
                    className: "card-right",
                    children: f("div", { className: "info-right" }),
                }),
                f("div", {
                    className: "card-right",
                    children: z("div", {
                        className: "info-right",
                        children: [
                            f("h3", {
                                className: "title-right text-2xl",
                                children: "June 13th",
                            }),
                            f("p", {
                                className: "text-xl font-semibold",
                                children: "Explain Like I'm Five",
                            }),
                            f("p", {
                                className: "my-4",
                                children:
                                    "An event where teams come to the stage to break-down jargons that float around in the web3 space",
                            }),
                        ],
                    }),
                }),
                f("div", {
                    className: "card-right",
                    children: f("div", { className: "info-right" }),
                }),
                f("div", {
                    className: "card-right",
                    children: f("div", { className: "info-right" }),
                }),
            ],
        }),
    })
const Td = () =>
    f("div", {
        className: "timeline",
        children: z("div", {
            className: "outer",
            children: [
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [
                            f("h3", { className: "title" }),
                            f("p", { className: "text-red" }),
                        ],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
                f("div", {
                    className: "card",
                    children: z("div", {
                        className: "info",
                        children: [f("h3", { className: "title" }), f("p", {})],
                    }),
                }),
            ],
        }),
    })
const Ld = () =>
        f("div", {
            className: "timeline-mobile",
            children: z("div", {
                className: "outer-mobile",
                children: [
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 4th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Introduction to web3 tech stack",
                                }),
                                f("p", {
                                    className: "text-red my-4",
                                    children:
                                        "An interactive workshop by Learnweb3DAO. NFT certificates for participants.",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 6th",
                                }),
                                f("p", {
                                    className:
                                        "text-xl font-semibold text-right text-red-600",
                                    children:
                                        "Commencement of BITS Blockchain Hackathon",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 7th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "AMA with XYZ",
                                }),
                                f("p", {
                                    className: "my-4",
                                    children:
                                        "An AMA session with some of India's top minds in web3",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 10th",
                                }),
                                z("div", {
                                    className:
                                        "flex-col gap-8 text-white justify-between",
                                    children: [
                                        f("p", {
                                            children:
                                                "Commencement of The Pitch",
                                        }),
                                        f("p", {
                                            className: "my-4",
                                            children: "Raising funds in web3",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 12th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Future of Web3",
                                }),
                                f("p", {
                                    className: "my-4",
                                    children:
                                        "A panel about the future of Web3, involving big minds such as Pareen Lathia, Mayur, Harsh and XYZ.",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 13th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Explain Like I'm Five",
                                }),
                                f("p", {
                                    className: "my-4",
                                    children:
                                        "An event where teams come to the stage to break-down jargons that float around in the web3 space",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 14th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Pitch event - Demo day",
                                }),
                            ],
                        }),
                    }),
                    f("div", {
                        className: "card-mobile",
                        children: z("div", {
                            className: "info-mobile text-white",
                            children: [
                                f("h3", {
                                    className:
                                        "title-mobile text-2xl font-semibold",
                                    children: "June 15th",
                                }),
                                f("p", {
                                    className: "text-xl font-semibold",
                                    children: "Kingpin",
                                }),
                                f("p", {
                                    className: "my-4",
                                    children:
                                        "An event where teams come to the stage to break-down jargons that float around in the web3 space",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    Rd = () =>
        f("div", {
            className: "w-full min-h-[40vh] z-30",
            children: z("div", {
                className:
                    "w-5/6 mx-auto h-full flex flex-row flex-wrap justify-between align-middle gap-8",
                children: [
                    z("div", {
                        className:
                            "w-64 flex-grow mx-auto h-72 grid place-items-center relative",
                        children: [
                            f("img", {
                                src: "/src/superblock.svg",
                                height: 100,
                                width: 100,
                            }),
                            f("img", {
                                src: "/src/title.svg",
                                className: "absolute top-1",
                            }),
                        ],
                    }),
                    z("div", {
                        className:
                            "w-64 flex-grow mx-auto h-72 grid place-items-center relative",
                        children: [
                            f("img", {
                                src: "/src/buidlers.svg",
                                height: 100,
                                width: 100,
                            }),
                            f("img", {
                                src: "/src/collab.svg",
                                className: "absolute top-1",
                            }),
                        ],
                    }),
                    z("div", {
                        className:
                            "w-64 flex-grow mx-auto h-72 grid place-items-center relative",
                        children: [
                            f("img", {
                                src: "/src/biconomy.svg",
                                height: 100,
                                width: 150,
                            }),
                            f("img", {
                                src: "/src/hackathon.svg",
                                className: "absolute top-1",
                            }),
                        ],
                    }),
                    z("div", {
                        className:
                            "w-64 flex-grow mx-auto h-72 grid place-items-center relative",
                        children: [
                            f("img", {
                                src: "/src/arcana.svg",
                                height: 100,
                                width: 100,
                            }),
                            f("img", {
                                src: "/src/hackathon.svg",
                                className: "absolute top-1",
                            }),
                        ],
                    }),
                    z("div", {
                        className:
                            "w-64 flex-grow mx-auto h-72 grid place-items-center relative",
                        children: [
                            f("img", {
                                src: "/src/celo.svg",
                                height: 75,
                                width: 75,
                            }),
                            f("img", {
                                src: "/src/hackathon.svg",
                                className: "absolute top-1",
                            }),
                        ],
                    }),
                ],
            }),
        }),
    Md = () =>
        z("div", {
            className:
                "flex flex-row w-full justify-between flex-wrap gap-8 flex-grow",
            children: [
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/mayurrelekar",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://pbs.twimg.com/profile_images/1107962046635606016/C4Lc2W72_400x400.png",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Mayur Relekar",
                        }),
                        f("p", {
                            className: " mx-auto",
                            children: "Founder, Arcana",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/simplykashif",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://pbs.twimg.com/profile_images/1505176564958257155/vIV2Wl0m_400x400.jpg",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Kashif Raza",
                        }),
                        f("p", {
                            className: " mx-auto",
                            children: "Founder, Bitinning",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/aniket_jindal08",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://media-exp1.licdn.com/dms/image/C4D03AQEyrqehw3aTcg/profile-displayphoto-shrink_400_400/0/1621058270638?e=1658966400&v=beta&t=QteUlU4jdIZoLAklCYCWhHXtTJvaCsX8Ogfvl76RBz0",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Aniket Jindal",
                        }),
                        f("p", {
                            className: " mx-auto",
                            children: "Cofounder, Biconomy",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/haardikkk",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://pbs.twimg.com/profile_images/1475010967935332354/WhP_SbeB_400x400.jpg",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Haardik H.",
                        }),
                        f("p", {
                            className: "mx-auto",
                            children: "Cofounder, LearnWeb3DAO",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/PareenL",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://pbs.twimg.com/profile_images/1521419149620256773/pv9oKTf5_400x400.jpg",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Pareen Lathia",
                        }),
                        f("p", {
                            className: " mx-auto",
                            children: "Cofounder, Buidlers Tribe",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/pythonhulk",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://pbs.twimg.com/profile_images/1239487528001875968/xMDwtVqk_400x400.jpg",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Raghu Mohan",
                        }),
                        f("p", {
                            className: " mx-auto",
                            children: "Cofounder, Buidlers Tribe",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/harshrajat",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://octaloop.com/wp-content/themes/octaloop/assets/images/trtm2/speakers/11.png",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Harsh Rajat",
                        }),
                        f("p", {
                            className: "mx-auto",
                            children: "Founder, E.P.N.S",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/rajkaria_",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://pbs.twimg.com/profile_images/1448339649445781508/S2u0Wyap_400x400.jpg",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Raj Karia",
                        }),
                        f("p", {
                            className: "mx-auto",
                            children: "Founder, MemeDAO",
                        }),
                    ],
                }),
                z("div", {
                    className:
                        "w-72 h-min flex flex-col justify-center align-middle text-white my-auto mx-auto",
                    children: [
                        f("a", {
                            href: "https://twitter.com/rajkaria_",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f("img", {
                                src: "https://media-exp1.licdn.com/dms/image/C5603AQEqdo7pvNEdQg/profile-displayphoto-shrink_400_400/0/1648323680179?e=1658966400&v=beta&t=pytB-60UCF1nLQI-5gBYlKSFcFdii3WYUttiTCwtxgU",
                                className: "rounded-lg mx-auto",
                                height: 200,
                                width: 200,
                            }),
                        }),
                        f("h3", {
                            className: "text-xl font-semibold mx-auto",
                            children: "Sidharth Bhatia",
                        }),
                        f("p", {
                            className: "mx-auto",
                            children: "Founder, Superblock",
                        }),
                    ],
                }),
            ],
        }),
    jd = () =>
        f("div", {
            className: "invisible w-full h-20",
            children: z("div", {
                className:
                    "w-5/6 mx-auto flex flex-row align-middle h-min my-auto",
                children: [
                    f("a", {
                        href: "#main",
                        children: f("img", {
                            src: "/src/image2vector.svg",
                            className: "my-2 mx-[-4px] h-8 text-white",
                        }),
                    }),
                    z("div", {
                        className:
                            "w-full mx-auto flex flex-row-reverse align-middle gap-8",
                        children: [
                            f("a", {
                                className: "my-auto font-semibold text-white",
                                href: "https://forms.gle/drbSiZVCyDcemBom7",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Whatsapp group",
                            }),
                            f("a", {
                                className: "my-auto font-semibold text-white",
                                href: "#speakers",
                                children: "Twitter",
                            }),
                        ],
                    }),
                ],
            }),
        }),
    Od = () =>
        z("div", {
            className: "w-full bg-[#121212] felx flex-col",
            children: [
                f("div", {
                    id: "sponsors",
                    className:
                        "w-5/6 h-[25vh] mx-auto flex flex-col justify-center py-16",
                    children: f("a", {
                        href: "#sponsors",
                        children: f("img", {
                            src: "/src/sponsors.svg",
                            class: "mb-4 mt-24 mx-auto h-12 text-white",
                        }),
                    }),
                }),
                f(Rd, {}),
                f("div", {
                    id: "speakers",
                    className:
                        "w-5/6 h-[25vh] mx-auto flex flex-col justify-center py-16",
                    children: f("a", {
                        href: "#main",
                        children: f("img", {
                            src: "/src/speakers.svg",
                            class: "mb-4 mt-24 mx-auto h-12 text-white",
                        }),
                    }),
                }),
                f("div", {
                    className: "w-5/6 flex flex-row justify-between mx-auto",
                    children: f(Md, {}),
                }),
                f("div", {
                    id: "timeline",
                    className:
                        "w-5/6 h-[25vh] mx-auto flex flex-col justify-center py-16",
                    children: f("a", {
                        href: "#main",
                        children: f("img", {
                            src: "/src/timeline.svg",
                            class: "mb-4 mt-24 mx-auto h-12 text-white",
                        }),
                    }),
                }),
                z("div", {
                    className:
                        "hidden w-full bg-[#121212] lg:flex lg:flex-row justify-center gap-4",
                    children: [f(Pd, {}), f(Td, {}), f(zd, {})],
                }),
                f("div", {
                    className:
                        "w-full bg-[#121212] flex flex-row justify-center gap-4 lg:hidden",
                    children: f(Ld, {}),
                }),
                f(jd, {}),
            ],
        })
Ql.createRoot(document.getElementById("root")).render(
    f(yc.StrictMode, { children: f(Od, {}) })
)
