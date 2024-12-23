(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        50546: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(79307)
            }])
        },
        79307: function (e, t, n) {
            "use strict";
            let r, i, o, a, s, d, l;
            n.r(t), n.d(t, {
                default: function () {
                    return rj
                }
            });
            var c, u, p = n(31549);
            let g = {
                type: "logger",
                log(e) {
                    this.output("log", e)
                },
                warn(e) {
                    this.output("warn", e)
                },
                error(e) {
                    this.output("error", e)
                },
                output(e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            };
            class h {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(e, t)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:", this.logger = e || g, this.options = t, this.debug = t.debug
                }
                log() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
                warn() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
                error() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
                deprecate() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(e, t, n, r) {
                    return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
                }
                create(e) {
                    return new h(this.logger, {
                        prefix: `${this.prefix}:${e}:`,
                        ...this.options
                    })
                }
                clone(e) {
                    return (e = e || this.options).prefix = e.prefix || this.prefix, new h(this.logger, e)
                }
            }
            var m = new h;
            class f {
                constructor() {
                    this.observers = {}
                }
                on(e, t) {
                    return e.split(" ").forEach(e => {
                        this.observers[e] || (this.observers[e] = new Map);
                        let n = this.observers[e].get(t) || 0;
                        this.observers[e].set(t, n + 1)
                    }), this
                }
                off(e, t) {
                    if (this.observers[e]) {
                        if (!t) {
                            delete this.observers[e];
                            return
                        }
                        this.observers[e].delete(t)
                    }
                }
                emit(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    this.observers[e] && Array.from(this.observers[e].entries()).forEach(e => {
                        let [t, r] = e;
                        for (let e = 0; e < r; e++) t(...n)
                    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(t => {
                        let [r, i] = t;
                        for (let t = 0; t < i; t++) r.apply(r, [e, ...n])
                    })
                }
            }
            let y = () => {
                    let e, t;
                    let n = new Promise((n, r) => {
                        e = n, t = r
                    });
                    return n.resolve = e, n.reject = t, n
                },
                b = e => null == e ? "" : "" + e,
                v = (e, t, n) => {
                    e.forEach(e => {
                        t[e] && (n[e] = t[e])
                    })
                },
                k = /###/g,
                w = e => e && e.indexOf("###") > -1 ? e.replace(k, ".") : e,
                _ = e => !e || "string" == typeof e,
                S = (e, t, n) => {
                    let r = "string" != typeof t ? t : t.split("."),
                        i = 0;
                    for (; i < r.length - 1;) {
                        if (_(e)) return {};
                        let t = w(r[i]);
                        !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++i
                    }
                    return _(e) ? {} : {
                        obj: e,
                        k: w(r[i])
                    }
                },
                A = (e, t, n) => {
                    let {
                        obj: r,
                        k: i
                    } = S(e, t, Object);
                    if (void 0 !== r || 1 === t.length) {
                        r[i] = n;
                        return
                    }
                    let o = t[t.length - 1],
                        a = t.slice(0, t.length - 1),
                        s = S(e, a, Object);
                    for (; void 0 === s.obj && a.length;) o = `${a[a.length-1]}.${o}`, (s = S(e, a = a.slice(0, a.length - 1), Object)) && s.obj && void 0 !== s.obj[`${s.k}.${o}`] && (s.obj = void 0);
                    s.obj[`${s.k}.${o}`] = n
                },
                T = (e, t, n, r) => {
                    let {
                        obj: i,
                        k: o
                    } = S(e, t, Object);
                    i[o] = i[o] || [], i[o].push(n)
                },
                x = (e, t) => {
                    let {
                        obj: n,
                        k: r
                    } = S(e, t);
                    if (n) return n[r]
                },
                z = (e, t, n) => {
                    let r = x(e, n);
                    return void 0 !== r ? r : x(t, n)
                },
                C = (e, t, n) => {
                    for (let r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : C(e[r], t[r], n) : e[r] = t[r]);
                    return e
                },
                P = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var L = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            let O = e => "string" == typeof e ? e.replace(/[&<>"'\/]/g, e => L[e]) : e;
            class D {
                constructor(e) {
                    this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
                }
                getRegExp(e) {
                    let t = this.regExpMap.get(e);
                    if (void 0 !== t) return t;
                    let n = new RegExp(e);
                    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
                }
            }
            let E = [" ", ",", "?", "!", ";"],
                M = new D(20),
                R = (e, t, n) => {
                    t = t || "", n = n || "";
                    let r = E.filter(e => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                    if (0 === r.length) return !0;
                    let i = M.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`),
                        o = !i.test(e);
                    if (!o) {
                        let t = e.indexOf(n);
                        t > 0 && !i.test(e.substring(0, t)) && (o = !0)
                    }
                    return o
                },
                F = function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (!e) return;
                    if (e[t]) return e[t];
                    let r = t.split(n),
                        i = e;
                    for (let e = 0; e < r.length;) {
                        let t;
                        if (!i || "object" != typeof i) return;
                        let o = "";
                        for (let a = e; a < r.length; ++a)
                            if (a !== e && (o += n), o += r[a], void 0 !== (t = i[o])) {
                                if (["string", "number", "boolean"].indexOf(typeof t) > -1 && a < r.length - 1) continue;
                                e += a - e + 1;
                                break
                            } i = t
                    }
                    return i
                },
                B = e => e && e.replace("_", "-");
            class N extends f {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(e) {
                    0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                }
                removeNamespaces(e) {
                    let t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
                getResource(e, t, n) {
                    let r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                        a = void 0 !== i.ignoreJSONStructure ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    e.indexOf(".") > -1 ? r = e.split(".") : (r = [e, t], n && (Array.isArray(n) ? r.push(...n) : "string" == typeof n && o ? r.push(...n.split(o)) : r.push(n)));
                    let s = x(this.data, r);
                    return (!s && !t && !n && e.indexOf(".") > -1 && (e = r[0], t = r[1], n = r.slice(2).join(".")), s || !a || "string" != typeof n) ? s : F(this.data && this.data[e] && this.data[e][t], n, o)
                }
                addResource(e, t, n, r) {
                    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        },
                        o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                        a = [e, t];
                    n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), A(this.data, a, r), i.silent || this.emit("added", e, t, n, r)
                }
                addResources(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (let r in n)("string" == typeof n[r] || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
                        silent: !0
                    });
                    r.silent || this.emit("added", e, t, n)
                }
                addResourceBundle(e, t, n, r, i) {
                    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1,
                            skipCopy: !1
                        },
                        a = [e, t];
                    e.indexOf(".") > -1 && (a = e.split("."), r = n, n = t, t = a[1]), this.addNamespaces(t);
                    let s = x(this.data, a) || {};
                    o.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? C(s, n, i) : s = {
                        ...s,
                        ...n
                    }, A(this.data, a, s), o.silent || this.emit("added", e, t, n)
                }
                removeResourceBundle(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }
                hasResourceBundle(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
                getResourceBundle(e, t) {
                    return (t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI) ? {
                        ...this.getResource(e, t)
                    } : this.getResource(e, t)
                }
                getDataByLanguage(e) {
                    return this.data[e]
                }
                hasLanguageSomeTranslations(e) {
                    let t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
                }
                toJSON() {
                    return this.data
                }
            }
            var j = {
                processors: {},
                addPostProcessor(e) {
                    this.processors[e.name] = e
                },
                handle(e, t, n, r, i) {
                    return e.forEach(e => {
                        this.processors[e] && (t = this.processors[e].process(t, n, r, i))
                    }), t
                }
            };
            let I = {};
            class $ extends f {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(), v(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = m.create("translator")
                }
                changeLanguage(e) {
                    e && (this.language = e)
                }
                exists(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == e) return !1;
                    let n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
                extractFromKey(e, t) {
                    let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    let r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        i = t.ns || this.options.defaultNS || [],
                        o = n && e.indexOf(n) > -1,
                        a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !R(e, n, r);
                    if (o && !a) {
                        let t = e.match(this.interpolator.nestingRegexp);
                        if (t && t.length > 0) return {
                            key: e,
                            namespaces: i
                        };
                        let o = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (i = o.shift()), e = o.join(r)
                    }
                    return "string" == typeof i && (i = [i]), {
                        key: e,
                        namespaces: i
                    }
                }
                translate(e, t, n) {
                    if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t && (t = {
                            ...t
                        }), t || (t = {}), null == e) return "";
                    Array.isArray(e) || (e = [String(e)]);
                    let r = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                        i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        {
                            key: o,
                            namespaces: a
                        } = this.extractFromKey(e[e.length - 1], t),
                        s = a[a.length - 1],
                        d = t.lng || this.language,
                        l = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (d && "cimode" === d.toLowerCase()) {
                        if (l) {
                            let e = t.nsSeparator || this.options.nsSeparator;
                            return r ? {
                                res: `${s}${e}${o}`,
                                usedKey: o,
                                exactUsedKey: o,
                                usedLng: d,
                                usedNS: s,
                                usedParams: this.getUsedParamsDetails(t)
                            } : `${s}${e}${o}`
                        }
                        return r ? {
                            res: o,
                            usedKey: o,
                            exactUsedKey: o,
                            usedLng: d,
                            usedNS: s,
                            usedParams: this.getUsedParamsDetails(t)
                        } : o
                    }
                    let c = this.resolve(e, t),
                        u = c && c.res,
                        p = c && c.usedKey || o,
                        g = c && c.exactUsedKey || o,
                        h = Object.prototype.toString.apply(u),
                        m = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                        f = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        y = "string" != typeof u && "boolean" != typeof u && "number" != typeof u;
                    if (f && u && y && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) && !("string" == typeof m && Array.isArray(u))) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, u, {
                                ...t,
                                ns: a
                            }) : `key '${o} (${this.language})' returned an object instead of string.`;
                            return r ? (c.res = e, c.usedParams = this.getUsedParamsDetails(t), c) : e
                        }
                        if (i) {
                            let e = Array.isArray(u),
                                n = e ? [] : {},
                                r = e ? g : p;
                            for (let e in u)
                                if (Object.prototype.hasOwnProperty.call(u, e)) {
                                    let o = `${r}${i}${e}`;
                                    n[e] = this.translate(o, {
                                        ...t,
                                        joinArrays: !1,
                                        ns: a
                                    }), n[e] === o && (n[e] = u[e])
                                } u = n
                        }
                    } else if (f && "string" == typeof m && Array.isArray(u))(u = u.join(m)) && (u = this.extendTranslation(u, e, t, n));
                    else {
                        let r = !1,
                            a = !1,
                            l = void 0 !== t.count && "string" != typeof t.count,
                            p = $.hasDefaultValue(t),
                            g = l ? this.pluralResolver.getSuffix(d, t.count, t) : "",
                            h = t.ordinal && l ? this.pluralResolver.getSuffix(d, t.count, {
                                ordinal: !1
                            }) : "",
                            m = l && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
                            f = m && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${g}`] || t[`defaultValue${h}`] || t.defaultValue;
                        !this.isValidLookup(u) && p && (r = !0, u = f), this.isValidLookup(u) || (a = !0, u = o);
                        let y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : u,
                            b = p && f !== u && this.options.updateMissing;
                        if (a || r || b) {
                            if (this.logger.log(b ? "updateKey" : "missingKey", d, s, o, b ? f : u), i) {
                                let e = this.resolve(o, {
                                    ...t,
                                    keySeparator: !1
                                });
                                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let e = [],
                                n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && n && n[0])
                                for (let t = 0; t < n.length; t++) e.push(n[t]);
                            else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                            let r = (e, n, r) => {
                                let i = p && r !== u ? r : y;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, s, n, i, b, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, s, n, i, b, t), this.emit("missingKey", e, s, n, u)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && l ? e.forEach(e => {
                                let n = this.pluralResolver.getSuffixes(e, t);
                                m && t[`defaultValue${this.options.pluralSeparator}zero`] && 0 > n.indexOf(`${this.options.pluralSeparator}zero`) && n.push(`${this.options.pluralSeparator}zero`), n.forEach(n => {
                                    r([e], o + n, t[`defaultValue${n}`] || f)
                                })
                            }) : r(e, o, f))
                        }
                        u = this.extendTranslation(u, e, t, c, n), a && u === o && this.options.appendNamespaceToMissingKey && (u = `${s}:${o}`), (a || r) && this.options.parseMissingKeyHandler && (u = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}:${o}` : o, r ? u : void 0) : this.options.parseMissingKeyHandler(u))
                    }
                    return r ? (c.res = u, c.usedParams = this.getUsedParamsDetails(t), c) : u
                }
                extendTranslation(e, t, n, r, i) {
                    var o = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    });
                    else if (!n.skipInterpolation) {
                        let a;
                        n.interpolation && this.interpolator.init({
                            ...n,
                            interpolation: {
                                ...this.options.interpolation,
                                ...n.interpolation
                            }
                        });
                        let s = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (s) {
                            let t = e.match(this.interpolator.nestingRegexp);
                            a = t && t.length
                        }
                        let d = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (d = {
                                ...this.options.interpolation.defaultVariables,
                                ...d
                            }), e = this.interpolator.interpolate(e, d, n.lng || this.language || r.usedLng, n), s) {
                            let t = e.match(this.interpolator.nestingRegexp);
                            a < (t && t.length) && (n.nest = !1)
                        }!n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = this.language || r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, function () {
                            for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                            return i && i[0] === r[0] && !n.context ? (o.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`), null) : o.translate(...r, t)
                        }, n)), n.interpolation && this.interpolator.reset()
                    }
                    let a = n.postProcess || this.options.postProcess,
                        s = "string" == typeof a ? [a] : a;
                    return null != e && s && s.length && !1 !== n.applyPostProcessor && (e = j.handle(s, e, t, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: {
                            ...r,
                            usedParams: this.getUsedParamsDetails(n)
                        },
                        ...n
                    } : n, this)), e
                }
                resolve(e) {
                    let t, n, r, i, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]), e.forEach(e => {
                        if (this.isValidLookup(t)) return;
                        let s = this.extractFromKey(e, a),
                            d = s.key;
                        n = d;
                        let l = s.namespaces;
                        this.options.fallbackNS && (l = l.concat(this.options.fallbackNS));
                        let c = void 0 !== a.count && "string" != typeof a.count,
                            u = c && !a.ordinal && 0 === a.count && this.pluralResolver.shouldUseIntlApi(),
                            p = void 0 !== a.context && ("string" == typeof a.context || "number" == typeof a.context) && "" !== a.context,
                            g = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
                        l.forEach(e => {
                            this.isValidLookup(t) || (o = e, !I[`${g[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (I[`${g[0]}-${e}`] = !0, this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach(n => {
                                let o;
                                if (this.isValidLookup(t)) return;
                                i = n;
                                let s = [d];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(s, d, n, e, a);
                                else {
                                    let e;
                                    c && (e = this.pluralResolver.getSuffix(n, a.count, a));
                                    let t = `${this.options.pluralSeparator}zero`,
                                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (c && (s.push(d + e), a.ordinal && 0 === e.indexOf(r) && s.push(d + e.replace(r, this.options.pluralSeparator)), u && s.push(d + t)), p) {
                                        let n = `${d}${this.options.contextSeparator}${a.context}`;
                                        s.push(n), c && (s.push(n + e), a.ordinal && 0 === e.indexOf(r) && s.push(n + e.replace(r, this.options.pluralSeparator)), u && s.push(n + t))
                                    }
                                }
                                for (; o = s.pop();) this.isValidLookup(t) || (r = o, t = this.getResource(n, e, o, a))
                            }))
                        })
                    }), {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: i,
                        usedNS: o
                    }
                }
                isValidLookup(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
                getResource(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
                getUsedParamsDetails() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.replace && "string" != typeof e.replace,
                        n = t ? e.replace : e;
                    if (t && void 0 !== e.count && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
                            ...this.options.interpolation.defaultVariables,
                            ...n
                        }), !t)
                        for (let e of (n = {
                                ...n
                            }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete n[e];
                    return n
                }
                static hasDefaultValue(e) {
                    let t = "defaultValue";
                    for (let n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                    return !1
                }
            }
            let H = e => e.charAt(0).toUpperCase() + e.slice(1);
            class W {
                constructor(e) {
                    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = m.create("languageUtils")
                }
                getScriptPartFromCode(e) {
                    if (!(e = B(e)) || 0 > e.indexOf("-")) return null;
                    let t = e.split("-");
                    return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
                }
                getLanguagePartFromCode(e) {
                    if (!(e = B(e)) || 0 > e.indexOf("-")) return e;
                    let t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
                formatLanguageCode(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        if ("undefined" != typeof Intl && void 0 !== Intl.getCanonicalLocales) try {
                            let t = Intl.getCanonicalLocales(e)[0];
                            if (t && this.options.lowerCaseLng && (t = t.toLowerCase()), t) return t
                        } catch (e) {}
                        let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map(e => e.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = H(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = H(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = H(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
                isSupportedCode(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
                getBestMatchFromCodes(e) {
                    let t;
                    return e ? (e.forEach(e => {
                        if (t) return;
                        let n = this.formatLanguageCode(e);
                        (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n)
                    }), !t && this.options.supportedLngs && e.forEach(e => {
                        if (t) return;
                        let n = this.getLanguagePartFromCode(e);
                        if (this.isSupportedCode(n)) return t = n;
                        t = this.options.supportedLngs.find(e => {
                            if (e === n || !(0 > e.indexOf("-") && 0 > n.indexOf("-")) && (e.indexOf("-") > 0 && 0 > n.indexOf("-") && e.substring(0, e.indexOf("-")) === n || 0 === e.indexOf(n) && n.length > 1)) return e
                        })
                    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                }
                getFallbackCodes(e, t) {
                    if (!e) return [];
                    if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), Array.isArray(e)) return e;
                    if (!t) return e.default || [];
                    let n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                }
                toResolveHierarchy(e, t) {
                    let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                        r = [],
                        i = e => {
                            e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                        };
                    return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), n.forEach(e => {
                        0 > r.indexOf(e) && i(this.formatLanguageCode(e))
                    }), r
                }
            }
            let G = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                U = {
                    1: e => Number(e > 1),
                    2: e => Number(1 != e),
                    3: e => 0,
                    4: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    5: e => Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5),
                    6: e => Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
                    7: e => Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    8: e => Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3),
                    9: e => Number(e >= 2),
                    10: e => Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
                    11: e => Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3),
                    12: e => Number(e % 10 != 1 || e % 100 == 11),
                    13: e => Number(0 !== e),
                    14: e => Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3),
                    15: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    16: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2),
                    17: e => Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1),
                    18: e => Number(0 == e ? 0 : 1 == e ? 1 : 2),
                    19: e => Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3),
                    20: e => Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2),
                    21: e => Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0),
                    22: e => Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                },
                q = ["v1", "v2", "v3"],
                V = ["v4"],
                K = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                },
                J = () => {
                    let e = {};
                    return G.forEach(t => {
                        t.lngs.forEach(n => {
                            e[n] = {
                                numbers: t.nr,
                                plurals: U[t.fc]
                            }
                        })
                    }), e
                };
            class Y {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = e, this.options = t, this.logger = m.create("pluralResolver"), (!this.options.compatibilityJSON || V.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = J(), this.pluralRulesCache = {}
                }
                addRule(e, t) {
                    this.rules[e] = t
                }
                clearCache() {
                    this.pluralRulesCache = {}
                }
                getRule(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi()) try {
                        let n = B("dev" === e ? "en" : e),
                            r = t.ordinal ? "ordinal" : "cardinal",
                            i = JSON.stringify({
                                cleanedCode: n,
                                type: r
                            });
                        if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
                        let o = new Intl.PluralRules(n, {
                            type: r
                        });
                        return this.pluralRulesCache[i] = o, o
                    } catch (e) {
                        return
                    }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
                needsPlural(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
                getPluralFormsOfKey(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map(e => `${t}${e}`)
                }
                getSuffixes(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.getRule(e, t);
                    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((e, t) => K[e] - K[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : n.numbers.map(n => this.getSuffix(e, n, t)) : []
                }
                getSuffix(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : this.getSuffixRetroCompatible(r, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
                }
                getSuffixRetroCompatible(e, t) {
                    let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                        r = e.numbers[n];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                    let i = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? `_plural_${r.toString()}` : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                }
                shouldUseIntlApi() {
                    return !q.includes(this.options.compatibilityJSON)
                }
            }
            let Q = function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        o = z(e, t, n);
                    return !o && i && "string" == typeof n && void 0 === (o = F(e, n, r)) && (o = F(t, n, r)), o
                },
                Z = e => e.replace(/\$/g, "$$$$");
            class X {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = m.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
                }
                init() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    let {
                        escape: t,
                        escapeValue: n,
                        useRawValueToEscape: r,
                        prefix: i,
                        prefixEscaped: o,
                        suffix: a,
                        suffixEscaped: s,
                        formatSeparator: d,
                        unescapeSuffix: l,
                        unescapePrefix: c,
                        nestingPrefix: u,
                        nestingPrefixEscaped: p,
                        nestingSuffix: g,
                        nestingSuffixEscaped: h,
                        nestingOptionsSeparator: m,
                        maxReplaces: f,
                        alwaysFormat: y
                    } = e.interpolation;
                    this.escape = void 0 !== t ? t : O, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== r && r, this.prefix = i ? P(i) : o || "{{", this.suffix = a ? P(a) : s || "}}", this.formatSeparator = d || ",", this.unescapePrefix = l ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = u ? P(u) : p || P("$t("), this.nestingSuffix = g ? P(g) : h || P(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = f || 1e3, this.alwaysFormat = void 0 !== y && y, this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    let e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
                    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
                }
                interpolate(e, t, n, r) {
                    let i, o, a;
                    let s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                        d = e => {
                            if (0 > e.indexOf(this.formatSeparator)) {
                                let i = Q(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                                return this.alwaysFormat ? this.format(i, void 0, n, {
                                    ...r,
                                    ...t,
                                    interpolationkey: e
                                }) : i
                            }
                            let i = e.split(this.formatSeparator),
                                o = i.shift().trim(),
                                a = i.join(this.formatSeparator).trim();
                            return this.format(Q(t, s, o, this.options.keySeparator, this.options.ignoreJSONStructure), a, n, {
                                ...r,
                                ...t,
                                interpolationkey: o
                            })
                        };
                    this.resetRegExp();
                    let l = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        c = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: e => Z(e)
                    }, {
                        regex: this.regexp,
                        safeValue: e => this.escapeValue ? Z(this.escape(e)) : Z(e)
                    }].forEach(t => {
                        for (a = 0; i = t.regex.exec(e);) {
                            let n = i[1].trim();
                            if (void 0 === (o = d(n))) {
                                if ("function" == typeof l) {
                                    let t = l(e, i, r);
                                    o = "string" == typeof t ? t : ""
                                } else if (r && Object.prototype.hasOwnProperty.call(r, n)) o = "";
                                else if (c) {
                                    o = i[0];
                                    continue
                                } else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), o = ""
                            } else "string" == typeof o || this.useRawValueToEscape || (o = b(o));
                            let s = t.safeValue(o);
                            if (e = e.replace(i[0], s), c ? (t.regex.lastIndex += o.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, ++a >= this.maxReplaces) break
                        }
                    }), e
                }
                nest(e, t) {
                    let n, r, i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = (e, t) => {
                            let n = this.nestingOptionsSeparator;
                            if (0 > e.indexOf(n)) return e;
                            let r = e.split(RegExp(`${n}[ ]*{`)),
                                o = `{${r[1]}`;
                            e = r[0];
                            let a = (o = this.interpolate(o, i)).match(/'/g),
                                s = o.match(/"/g);
                            (a && a.length % 2 == 0 && !s || s.length % 2 != 0) && (o = o.replace(/'/g, '"'));
                            try {
                                i = JSON.parse(o), t && (i = {
                                    ...t,
                                    ...i
                                })
                            } catch (t) {
                                return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${o}`
                            }
                            return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, e
                        };
                    for (; n = this.nestingRegexp.exec(e);) {
                        let s = [];
                        (i = (i = {
                            ...o
                        }).replace && "string" != typeof i.replace ? i.replace : i).applyPostProcessor = !1, delete i.defaultValue;
                        let d = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            let e = n[1].split(this.formatSeparator).map(e => e.trim());
                            n[1] = e.shift(), s = e, d = !0
                        }
                        if ((r = t(a.call(this, n[1].trim(), i), i)) && n[0] === e && "string" != typeof r) return r;
                        "string" != typeof r && (r = b(r)), r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), r = ""), d && (r = s.reduce((e, t) => this.format(e, t, o.lng, {
                            ...o,
                            interpolationkey: n[1].trim()
                        }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                    }
                    return e
                }
            }
            let ee = e => {
                    let t = e.toLowerCase().trim(),
                        n = {};
                    if (e.indexOf("(") > -1) {
                        let r = e.split("(");
                        t = r[0].toLowerCase().trim();
                        let i = r[1].substring(0, r[1].length - 1);
                        "currency" === t && 0 > i.indexOf(":") ? n.currency || (n.currency = i.trim()) : "relativetime" === t && 0 > i.indexOf(":") ? n.range || (n.range = i.trim()) : i.split(";").forEach(e => {
                            if (e) {
                                let [t, ...r] = e.split(":"), i = r.join(":").trim().replace(/^'+|'+$/g, ""), o = t.trim();
                                n[o] || (n[o] = i), "false" === i && (n[o] = !1), "true" === i && (n[o] = !0), isNaN(i) || (n[o] = parseInt(i, 10))
                            }
                        })
                    }
                    return {
                        formatName: t,
                        formatOptions: n
                    }
                },
                et = e => {
                    let t = {};
                    return (n, r, i) => {
                        let o = i;
                        i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = {
                            ...o,
                            [i.interpolationkey]: void 0
                        });
                        let a = r + JSON.stringify(o),
                            s = t[a];
                        return s || (s = e(B(r), i), t[a] = s), s(n)
                    }
                };
            class en {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = m.create("formatter"), this.options = e, this.formats = {
                        number: et((e, t) => {
                            let n = new Intl.NumberFormat(e, {
                                ...t
                            });
                            return e => n.format(e)
                        }),
                        currency: et((e, t) => {
                            let n = new Intl.NumberFormat(e, {
                                ...t,
                                style: "currency"
                            });
                            return e => n.format(e)
                        }),
                        datetime: et((e, t) => {
                            let n = new Intl.DateTimeFormat(e, {
                                ...t
                            });
                            return e => n.format(e)
                        }),
                        relativetime: et((e, t) => {
                            let n = new Intl.RelativeTimeFormat(e, {
                                ...t
                            });
                            return e => n.format(e, t.range || "day")
                        }),
                        list: et((e, t) => {
                            let n = new Intl.ListFormat(e, {
                                ...t
                            });
                            return e => n.format(e)
                        })
                    }, this.init(e)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        },
                        n = t.interpolation;
                    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                }
                add(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
                addCached(e, t) {
                    this.formats[e.toLowerCase().trim()] = et(t)
                }
                format(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = t.split(this.formatSeparator);
                    if (i.length > 1 && i[0].indexOf("(") > 1 && 0 > i[0].indexOf(")") && i.find(e => e.indexOf(")") > -1)) {
                        let e = i.findIndex(e => e.indexOf(")") > -1);
                        i[0] = [i[0], ...i.splice(1, e)].join(this.formatSeparator)
                    }
                    return i.reduce((e, t) => {
                        let {
                            formatName: i,
                            formatOptions: o
                        } = ee(t);
                        if (this.formats[i]) {
                            let t = e;
                            try {
                                let a = r && r.formatParams && r.formatParams[r.interpolationkey] || {},
                                    s = a.locale || a.lng || r.locale || r.lng || n;
                                t = this.formats[i](e, s, {
                                    ...o,
                                    ...r,
                                    ...a
                                })
                            } catch (e) {
                                this.logger.warn(e)
                            }
                            return t
                        }
                        return this.logger.warn(`there was no format function for ${i}`), e
                    }, e)
                }
            }
            let er = (e, t) => {
                void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
            };
            class ei extends f {
                constructor(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = m.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, r.backend, r)
                }
                queueLoad(e, t, n, r) {
                    let i = {},
                        o = {},
                        a = {},
                        s = {};
                    return e.forEach(e => {
                        let r = !0;
                        t.forEach(t => {
                            let a = `${e}|${t}`;
                            !n.reload && this.store.hasResourceBundle(e, t) ? this.state[a] = 2 : this.state[a] < 0 || (1 === this.state[a] ? void 0 === o[a] && (o[a] = !0) : (this.state[a] = 1, r = !1, void 0 === o[a] && (o[a] = !0), void 0 === i[a] && (i[a] = !0), void 0 === s[t] && (s[t] = !0)))
                        }), r || (a[e] = !0)
                    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
                        pending: o,
                        pendingCount: Object.keys(o).length,
                        loaded: {},
                        errors: [],
                        callback: r
                    }), {
                        toLoad: Object.keys(i),
                        pending: Object.keys(o),
                        toLoadLanguages: Object.keys(a),
                        toLoadNamespaces: Object.keys(s)
                    }
                }
                loaded(e, t, n) {
                    let r = e.split("|"),
                        i = r[0],
                        o = r[1];
                    t && this.emit("failedLoading", i, o, t), !t && n && this.store.addResourceBundle(i, o, n, void 0, void 0, {
                        skipCopy: !0
                    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
                    let a = {};
                    this.queue.forEach(n => {
                        T(n.loaded, [i], o), er(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
                            a[e] || (a[e] = {});
                            let t = n.loaded[e];
                            t.length && t.forEach(t => {
                                void 0 === a[e][t] && (a[e][t] = !0)
                            })
                        }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    }), this.emit("loaded", a), this.queue = this.queue.filter(e => !e.done)
                }
                read(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                        o = arguments.length > 5 ? arguments[5] : void 0;
                    if (!e.length) return o(null, {});
                    if (this.readingCalls >= this.maxParallelReads) {
                        this.waitingReads.push({
                            lng: e,
                            ns: t,
                            fcName: n,
                            tried: r,
                            wait: i,
                            callback: o
                        });
                        return
                    }
                    this.readingCalls++;
                    let a = (a, s) => {
                            if (this.readingCalls--, this.waitingReads.length > 0) {
                                let e = this.waitingReads.shift();
                                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                            }
                            if (a && s && r < this.maxRetries) {
                                setTimeout(() => {
                                    this.read.call(this, e, t, n, r + 1, 2 * i, o)
                                }, i);
                                return
                            }
                            o(a, s)
                        },
                        s = this.backend[n].bind(this.backend);
                    if (2 === s.length) {
                        try {
                            let n = s(e, t);
                            n && "function" == typeof n.then ? n.then(e => a(null, e)).catch(a) : a(null, n)
                        } catch (e) {
                            a(e)
                        }
                        return
                    }
                    return s(e, t, a)
                }
                prepareLoading(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                    let i = this.queueLoad(e, t, n, r);
                    if (!i.toLoad.length) return i.pending.length || r(), null;
                    i.toLoad.forEach(e => {
                        this.loadOne(e)
                    })
                }
                load(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
                reload(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
                loadOne(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = e.split("|"),
                        r = n[0],
                        i = n[1];
                    this.read(r, i, "read", void 0, void 0, (n, o) => {
                        n && this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`, n), !n && o && this.logger.log(`${t}loaded namespace ${i} for language ${r}`, o), this.loaded(e, n, o)
                    })
                }
                saveMissing(e, t, n, r, i) {
                    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
                        this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                        return
                    }
                    if (null != n && "" !== n) {
                        if (this.backend && this.backend.create) {
                            let s = {
                                    ...o,
                                    isUpdate: i
                                },
                                d = this.backend.create.bind(this.backend);
                            if (d.length < 6) try {
                                let i;
                                (i = 5 === d.length ? d(e, t, n, r, s) : d(e, t, n, r)) && "function" == typeof i.then ? i.then(e => a(null, e)).catch(a) : a(null, i)
                            } catch (e) {
                                a(e)
                            } else d(e, t, n, r, a, s)
                        }
                        e && e[0] && this.store.addResource(e[0], t, n, r)
                    }
                }
            }
            let eo = () => ({
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !1,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: e => {
                        let t = {};
                        if ("object" == typeof e[1] && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                            let n = e[3] || e[2];
                            Object.keys(n).forEach(e => {
                                t[e] = n[e]
                            })
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: e => e,
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }),
                ea = e => ("string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && 0 > e.supportedLngs.indexOf("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e),
                es = () => {},
                ed = e => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    })
                };
            class el extends f {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (super(), this.options = ea(e), this.services = {}, this.logger = m, this.modules = {
                            external: []
                        }, ed(this), t && !this.isInitialized && !e.isClone) {
                        if (!this.options.initImmediate) return this.init(e, t), this;
                        setTimeout(() => {
                            this.init(e, t)
                        }, 0)
                    }
                }
                init() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    this.isInitializing = !0, "function" == typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
                    let r = eo();
                    this.options = {
                        ...r,
                        ...this.options,
                        ...ea(t)
                    }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                        ...r.interpolation,
                        ...this.options.interpolation
                    }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator);
                    let i = e => e ? "function" == typeof e ? new e : e : null;
                    if (!this.options.isClone) {
                        let t;
                        this.modules.logger ? m.init(i(this.modules.logger), this.options) : m.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = en);
                        let n = new W(this.options);
                        this.store = new N(this.options.resources, this.options);
                        let o = this.services;
                        o.logger = m, o.resourceStore = this.store, o.languageUtils = n, o.pluralResolver = new Y(n, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), t && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (o.formatter = i(t), o.formatter.init(o, this.options), this.options.interpolation.format = o.formatter.format.bind(o.formatter)), o.interpolator = new X(this.options), o.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, o.backendConnector = new ei(i(this.modules.backend), o.resourceStore, o, this.options), o.backendConnector.on("*", function (t) {
                            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            e.emit(t, ...r)
                        }), this.modules.languageDetector && (o.languageDetector = i(this.modules.languageDetector), o.languageDetector.init && o.languageDetector.init(o, this.options.detection, this.options)), this.modules.i18nFormat && (o.i18nFormat = i(this.modules.i18nFormat), o.i18nFormat.init && o.i18nFormat.init(this)), this.translator = new $(this.services, this.options), this.translator.on("*", function (t) {
                            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            e.emit(t, ...r)
                        }), this.modules.external.forEach(e => {
                            e.init && e.init(this)
                        })
                    }
                    if (this.format = this.options.interpolation.format, n || (n = es), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(t => {
                        this[t] = function () {
                            return e.store[t](...arguments)
                        }
                    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(t => {
                        this[t] = function () {
                            return e.store[t](...arguments), e
                        }
                    });
                    let o = y(),
                        a = () => {
                            let e = (e, t) => {
                                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(t), n(e, t)
                            };
                            if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
                            this.changeLanguage(this.options.lng, e)
                        };
                    return this.options.resources || !this.options.initImmediate ? a() : setTimeout(a, 0), o
                }
                loadResources(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es,
                        n = t,
                        r = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                        if (r && "cimode" === r.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return n();
                        let e = [],
                            t = t => {
                                t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                                    "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                                })
                            };
                        r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload && this.options.preload.forEach(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                            e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(e)
                        })
                    } else n(null)
                }
                reloadResources(e, t, n) {
                    let r = y();
                    return "function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = es), this.services.backendConnector.reload(e, t, e => {
                        r.resolve(), n(e)
                    }), r
                }
                use(e) {
                    if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && j.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
                setResolvedLanguage(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (let e = 0; e < this.languages.length; e++) {
                            let t = this.languages[e];
                            if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                                this.resolvedLanguage = t;
                                break
                            }
                        }
                }
                changeLanguage(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    let r = y();
                    this.emit("languageChanging", e);
                    let i = e => {
                            this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                        },
                        o = (e, o) => {
                            o ? (i(o), this.translator.changeLanguage(o), this.isLanguageChangingTo = void 0, this.emit("languageChanged", o), this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0, r.resolve(function () {
                                return n.t(...arguments)
                            }), t && t(e, function () {
                                return n.t(...arguments)
                            })
                        },
                        a = t => {
                            e || t || !this.services.languageDetector || (t = []);
                            let n = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                            n && (this.language || i(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, e => {
                                o(e, n)
                            })
                        };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e) : a(this.services.languageDetector.detect()), r
                }
                getFixedT(e, t, n) {
                    var r = this;
                    let i = function (e, t) {
                        let o, a;
                        if ("object" != typeof t) {
                            for (var s = arguments.length, d = Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) d[l - 2] = arguments[l];
                            o = r.options.overloadTranslationOptionHandler([e, t].concat(d))
                        } else o = {
                            ...t
                        };
                        o.lng = o.lng || i.lng, o.lngs = o.lngs || i.lngs, o.ns = o.ns || i.ns, "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || n || i.keyPrefix);
                        let c = r.options.keySeparator || ".";
                        return a = o.keyPrefix && Array.isArray(e) ? e.map(e => `${o.keyPrefix}${c}${e}`) : o.keyPrefix ? `${o.keyPrefix}${c}${e}` : e, r.t(a, o)
                    };
                    return "string" == typeof e ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(e) {
                    this.options.defaultNS = e
                }
                hasLoadedNamespace(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    let n = t.lng || this.resolvedLanguage || this.languages[0],
                        r = !!this.options && this.options.fallbackLng,
                        i = this.languages[this.languages.length - 1];
                    if ("cimode" === n.toLowerCase()) return !0;
                    let o = (e, t) => {
                        let n = this.services.backendConnector.state[`${e}|${t}`];
                        return -1 === n || 0 === n || 2 === n
                    };
                    if (t.precheck) {
                        let e = t.precheck(this, o);
                        if (void 0 !== e) return e
                    }
                    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(n, e) && (!r || o(i, e)))
                }
                loadNamespaces(e, t) {
                    let n = y();
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(e => {
                        0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                    }), this.loadResources(e => {
                        n.resolve(), t && t(e)
                    }), n) : (t && t(), Promise.resolve())
                }
                loadLanguages(e, t) {
                    let n = y();
                    "string" == typeof e && (e = [e]);
                    let r = this.options.preload || [],
                        i = e.filter(e => 0 > r.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
                    return i.length ? (this.options.preload = r.concat(i), this.loadResources(e => {
                        n.resolve(), t && t(e)
                    }), n) : (t && t(), Promise.resolve())
                }
                dir(e) {
                    return (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), e) ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf((this.services && this.services.languageUtils || new W(eo())).getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
                }
                static createInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return new el(e, t)
                }
                cloneInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es,
                        n = e.forkResourceStore;
                    n && delete e.forkResourceStore;
                    let r = {
                            ...this.options,
                            ...e,
                            isClone: !0
                        },
                        i = new el(r);
                    return (void 0 !== e.debug || void 0 !== e.prefix) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                        i[e] = this[e]
                    }), i.services = {
                        ...this.services
                    }, i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    }, n && (i.store = new N(this.store.data, r), i.services.resourceStore = i.store), i.translator = new $(i.services, r), i.translator.on("*", function (e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        i.emit(e, ...n)
                    }), i.init(r, t), i.translator.options = r, i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    }, i
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            let ec = el.createInstance();

            function eu(e) {
                return (eu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            ec.createInstance = el.createInstance, ec.createInstance, ec.dir, ec.init, ec.loadResources, ec.reloadResources, ec.use, ec.changeLanguage, ec.getFixedT, ec.t, ec.exists, ec.setDefaultNamespace, ec.hasLoadedNamespace, ec.loadNamespaces, ec.loadLanguages;
            var ep = [],
                eg = ep.forEach,
                eh = ep.slice,
                em = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                ef = function (e, t, n) {
                    var r = n || {};
                    r.path = r.path || "/";
                    var i = encodeURIComponent(t),
                        o = "".concat(e, "=").concat(i);
                    if (r.maxAge > 0) {
                        var a = r.maxAge - 0;
                        if (Number.isNaN(a)) throw Error("maxAge should be a Number");
                        o += "; Max-Age=".concat(Math.floor(a))
                    }
                    if (r.domain) {
                        if (!em.test(r.domain)) throw TypeError("option domain is invalid");
                        o += "; Domain=".concat(r.domain)
                    }
                    if (r.path) {
                        if (!em.test(r.path)) throw TypeError("option path is invalid");
                        o += "; Path=".concat(r.path)
                    }
                    if (r.expires) {
                        if ("function" != typeof r.expires.toUTCString) throw TypeError("option expires is invalid");
                        o += "; Expires=".concat(r.expires.toUTCString())
                    }
                    if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite) switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                        case !0:
                        case "strict":
                            o += "; SameSite=Strict";
                            break;
                        case "lax":
                            o += "; SameSite=Lax";
                            break;
                        case "none":
                            o += "; SameSite=None";
                            break;
                        default:
                            throw TypeError("option sameSite is invalid")
                    }
                    return o
                },
                ey = {
                    create: function (e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            path: "/",
                            sameSite: "strict"
                        };
                        n && (i.expires = new Date, i.expires.setTime(i.expires.getTime() + 6e4 * n)), r && (i.domain = r), document.cookie = ef(e, encodeURIComponent(t), i)
                    },
                    read: function (e) {
                        for (var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                            for (var i = n[r];
                                " " === i.charAt(0);) i = i.substring(1, i.length);
                            if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
                        }
                        return null
                    },
                    remove: function (e) {
                        this.create(e, "", -1)
                    }
                },
                eb = {
                    name: "cookie",
                    lookup: function (e) {
                        var t;
                        if (e.lookupCookie && "undefined" != typeof document) {
                            var n = ey.read(e.lookupCookie);
                            n && (t = n)
                        }
                        return t
                    },
                    cacheUserLanguage: function (e, t) {
                        t.lookupCookie && "undefined" != typeof document && ey.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                    }
                },
                ev = {
                    name: "querystring",
                    lookup: function (e) {
                        var t;
                        if ("undefined" != typeof window) {
                            var n = window.location.search;
                            !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
                            for (var r = n.substring(1).split("&"), i = 0; i < r.length; i++) {
                                var o = r[i].indexOf("=");
                                o > 0 && r[i].substring(0, o) === e.lookupQuerystring && (t = r[i].substring(o + 1))
                            }
                        }
                        return t
                    }
                },
                ek = null,
                ew = function () {
                    if (null !== ek) return ek;
                    try {
                        ek = "undefined" !== window && null !== window.localStorage;
                        var e = "i18next.translate.boo";
                        window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e)
                    } catch (e) {
                        ek = !1
                    }
                    return ek
                },
                e_ = {
                    name: "localStorage",
                    lookup: function (e) {
                        var t;
                        if (e.lookupLocalStorage && ew()) {
                            var n = window.localStorage.getItem(e.lookupLocalStorage);
                            n && (t = n)
                        }
                        return t
                    },
                    cacheUserLanguage: function (e, t) {
                        t.lookupLocalStorage && ew() && window.localStorage.setItem(t.lookupLocalStorage, e)
                    }
                },
                eS = null,
                eA = function () {
                    if (null !== eS) return eS;
                    try {
                        eS = "undefined" !== window && null !== window.sessionStorage;
                        var e = "i18next.translate.boo";
                        window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e)
                    } catch (e) {
                        eS = !1
                    }
                    return eS
                },
                eT = {
                    name: "sessionStorage",
                    lookup: function (e) {
                        var t;
                        if (e.lookupSessionStorage && eA()) {
                            var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                            n && (t = n)
                        }
                        return t
                    },
                    cacheUserLanguage: function (e, t) {
                        t.lookupSessionStorage && eA() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
                    }
                },
                ex = {
                    name: "navigator",
                    lookup: function (e) {
                        var t = [];
                        if ("undefined" != typeof navigator) {
                            if (navigator.languages)
                                for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                            navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                        }
                        return t.length > 0 ? t : void 0
                    }
                },
                ez = {
                    name: "htmlTag",
                    lookup: function (e) {
                        var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                        return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t
                    }
                },
                eC = {
                    name: "path",
                    lookup: function (e) {
                        var t;
                        if ("undefined" != typeof window) {
                            var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                            if (n instanceof Array) {
                                if ("number" == typeof e.lookupFromPathIndex) {
                                    if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                    t = n[e.lookupFromPathIndex].replace("/", "")
                                } else t = n[0].replace("/", "")
                            }
                        }
                        return t
                    }
                },
                eP = {
                    name: "subdomain",
                    lookup: function (e) {
                        var t = "number" == typeof e.lookupFromSubdomainIndex ? e.lookupFromSubdomainIndex + 1 : 1,
                            n = "undefined" != typeof window && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
                        if (n) return n[t]
                    }
                },
                eL = function () {
                    var e;

                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t), this.type = "languageDetector", this.detectors = {}, this.init(e, n)
                    }
                    return e = [{
                            key: "init",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.services = e || {
                                    languageUtils: {}
                                }, this.options = function (e) {
                                    return eg.call(eh.call(arguments, 1), function (t) {
                                        if (t)
                                            for (var n in t) void 0 === e[n] && (e[n] = t[n])
                                    }), e
                                }(t, this.options || {}, {
                                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                    lookupQuerystring: "lng",
                                    lookupCookie: "i18next",
                                    lookupLocalStorage: "i18nextLng",
                                    lookupSessionStorage: "i18nextLng",
                                    caches: ["localStorage"],
                                    excludeCacheFor: ["cimode"],
                                    convertDetectedLanguage: function (e) {
                                        return e
                                    }
                                }), "string" == typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function (e) {
                                    return e.replace("-", "_")
                                }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(eb), this.addDetector(ev), this.addDetector(e_), this.addDetector(eT), this.addDetector(ex), this.addDetector(ez), this.addDetector(eC), this.addDetector(eP)
                            }
                        }, {
                            key: "addDetector",
                            value: function (e) {
                                return this.detectors[e.name] = e, this
                            }
                        }, {
                            key: "detect",
                            value: function (e) {
                                var t = this;
                                e || (e = this.options.order);
                                var n = [];
                                return (e.forEach(function (e) {
                                    if (t.detectors[e]) {
                                        var r = t.detectors[e].lookup(t.options);
                                        r && "string" == typeof r && (r = [r]), r && (n = n.concat(r))
                                    }
                                }), n = n.map(function (e) {
                                    return t.options.convertDetectedLanguage(e)
                                }), this.services.languageUtils.getBestMatchFromCodes) ? n : n.length > 0 ? n[0] : null
                            }
                        }, {
                            key: "cacheUserLanguage",
                            value: function (e, t) {
                                var n = this;
                                t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach(function (t) {
                                    n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                                }))
                            }
                        }],
                        function (e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, function (e) {
                                    var t = function (e, t) {
                                        if ("object" !== eu(e) || null === e) return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var r = n.call(e, t || "default");
                                            if ("object" !== eu(r)) return r;
                                            throw TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return ("string" === t ? String : Number)(e)
                                    }(e, "string");
                                    return "symbol" === eu(t) ? t : String(t)
                                }(r.key), r)
                            }
                        }(t.prototype, e), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                }();
            eL.type = "languageDetector";
            var eO = n(69760),
                eD = JSON.parse('{"reviewBridge":"مراجعة الجسر","bridging":"جاري الجسر","connectWallet":"اتصل بالمحفظة","switchToApprove":"تبديل","approve":"موافقة","insufficientFunds":"الأموال غير كافية","insufficientGas":"{{symbol}} غير كافٍ للغاز","bridgeLimit":"الحد الأقصى {{amount}} {{symbol}}","bridgeMin":"الحد الأدنى {{amount}} {{symbol}}","enterAnAmount":"أدخل مبلغًا","loading":"جار التحميل","loadMore":"تحميل المزيد","error":"خطأ","noAccountConnected":"لم يتم توصيل أي حساب","save":"حفظ","toAddress":"إلى العنوان","on":"تشغيل","off":"إيقاف","receiveOnChain":"تلقي على {{chain}}","transferTime":"وقت التحويل","transferTimeSeconds_one":"~{{count}} ثانية","transferTimeSeconds_other":"~{{count}} ثواني","transferTimeMinutes_one":"~{{count}} دقيقة","transferTimeMinutes_other":"~{{count}} دقائق","transferTimeHours_one":"~{{count}} ساعة","transferTimeHours_other":"~{{count}} ساعات","transferTimeDays_one":"~{{count}} يوم","transferTimeDays_other":"~{{count}} أيام","availableBalance":"{{amount}} {{symbol}} متاح","sorryAnErrorOccurred":"عذرًا! حدث خطأ","about":"حول","docs":"الوثائق","from":"من","to":"إلى","manage":"إدارة","support":"الدعم","ok":"حسنًا","general":{"needHelp":"تحتاج مساعدة؟ عرض الأسئلة الشائعة"},"settings":{"settings":"الإعدادات","escapeHatchDescription":"إجبار السحب عبر معاملات مقاومة للرقابة على سلسلة التسوية.","currency":"العملة","language":"اللغة","explorer":"المستكشف","tokenLists":"قوائم التوكنات","enableTestnets":"تمكين شبكات الاختبار","darkMode":"الوضع الداكن"},"customTokenLists":{"add":"إضافة قائمة توكن مخصصة","name":"اسم قائمة التوكن","namePlaceholder":"اسم","url":"رابط قائمة التوكن","urlPlaceholder":"رابط","invalid":"رابط قائمة التوكن غير صالح","loadedTokens":"تم تحميل {{num}} توكنات","disclaimer":"يمكن لأي شخص إنشاء أي توكن، بما في ذلك الإصدارات المزيفة من التوكنات الموجودة. كن حذرًا. بعض التوكنات والمعايير الفنية قد لا تكون متوافقة مع خدمات {{app}}. من خلال استيراد هذه القائمة المخصصة، فإنك تقر وتقبل المخاطر.","learnMore":"تعرف على المزيد حول المخاطر.","save":"حفظ القائمة","delete":"حذف القائمة"},"activity":{"activity":"النشاط","actionNeeded":"الإجراء مطلوب","connectWallet":"يرجى توصيل محفظتك...","noTransactions":"لا توجد معاملات حتى الآن...","error":"عذرًا! لا يمكننا استرداد نشاطك.\\nيرجى المحاولة وتحديث الصفحة","withdrawn":"تم السحب","proving":"جاري الإثبات...","readyToProve":"جاهز للإثبات","proved":"تم الإثبات","waitingForStateRoot":"انتظار جذر الحالة...","waitingForDisputeGame":"انتظار لعبة النزاع...","stateRootPublished":"تم نشر جذر الحالة","challengePeriod":"فترة التحدي","finalizing":"جارٍ الانتهاء...","readyToFinalize":"جاهز للإتمام","finalized":"تم الانتهاء","deposited":"تم الإيداع","depositing":"جاري الإيداع","l2Confirmation":"تأكيد L2","waitingForL2":"انتظار L2...","bridged":"تم الجسر","bridging":"جاري الجسر","minted":"تم السك","minting":"جاري السك","readyToMint":"جاهز للسك","waitingForAttestation":"انتظار الشهادة...","remainingSeconds_one":"~{{count}} ثانية متبقية","remainingSeconds_other":"~{{count}} ثواني متبقية","remainingMinutes_one":"~{{count}} دقيقة متبقية","remainingMinutes_other":"~{{count}} دقائق متبقية","remainingHours_one":"~{{count}} ساعة متبقية","remainingHours_other":"~{{count}} ساعات متبقية","remainingDays_one":"~{{count}} يوم متبقي","remainingDays_other":"~{{count}} أيام متبقية"},"tokens":{"tokens":"التوكنات","selectToken":"اختر توكن","noneFound":"لم يتم العثور على نتائج","notBridgeable":"غير قابل للجسر","import":"استيراد","customImport":"استيراد مخصص","customImportFromList":"من {{name}}","customImportCheck":"تأكد من أنك قد تحققت من عنوان التوكن وأنه صحيح:","customL1Address":"عنوان L1","customL2Address":"عنوان L2","customL3Address":"عنوان L3"},"recipient":{"bridgeDestination":"وجهة الجسر","toAddress":"إلى العنوان","invalidAddress":"عنوان غير صالح","yourChainAddress":"هذا هو عنوان {{chain}} الخاص بك","usedBefore":"الحساب مستخدم من قبل","usedBeforeMultiple":"الحساب مستخدم {{count}} مرات من قبل","newAddress":"عنوان جديد - يرجى الحذر!","checkingAddress":"جارٍ التحقق من العنوان...","addRecipientAddress":"إضافة عنوان المستلم","pleaseNote":"يرجى الملاحظة","sameAddressRequirement":"الجسور إلى أو من {{chain}} يجب أن تكون بنفس عنوان المستلم.","checkRecipientAddress":"تحقق من عنوان المستلم"},"buttons":{"start":"ابدأ","finalize":"إنهاء","claim":"مطالبة","prove":"إثبات","redeem":"استرداد","switchChain":"تبديل السلسلة","mint":"سك","get":"احصل على","continue":"متابعة","approve":"موافقة","approved":"تمت الموافقة","approving":"جاري الموافقة","max":"أقصى","bridgingDisabled":"الجسر معطل","bridgingPaused":"الجسر متوقف مؤقتًا","reset":"إعادة تعيين"},"fees":{"fees":"رسوم الشبكة","networkGas":"غاز {{chain}}","easyModeFee":"رسوم وضع السهولة"},"poweredBy":"مدعوم من {{name}}","transaction":{"via":"عبر","transferTime":"وقت التحويل","steps":"الخطوات","bridgeInfo":"معلومات الجسر","fromChain":"من {{from}}","toChain":"إلى {{to}}","fromAddress":"من العنوان","toAddress":"إلى العنوان"},"confirmationModal":{"startBridgeOn":"ابدأ على {{from}}","bridgeFrom":"الجسر من {{from}}","proveOn":"إثبات على {{to}}","getOn":"احصل على {{to}}","getAmountOn":"احصل على {{formatted}} على {{to}}","waitSeconds_one":"انتظر ~{{count}} ثانية","waitSeconds_other":"انتظر ~{{count}} ثواني","waitMinutes_one":"انتظر ~{{count}} دقيقة","waitMinutes_other":"انتظر ~{{count}} دقائق","waitHours_one":"انتظر ~{{count}} ساعة","waitHours_other":"انتظر ~{{count}} ساعات","waitDays_one":"انتظر ~{{count}} يوم","waitDays_other":"انتظر ~{{count}} أيام","prove":"إثبات على {{base}}","finalize":"مطالبة على {{to}}","receiveAmountOnChain":"استلام {{receiveAmount}} {{receiveSymbol}} على {{to}}","receiveAmount":"استلام {{formatted}}","approve":"الموافقة على {{symbol}}","approveGasToken":"الموافقة على توكن الغاز"},"tos":{"welcome":"مرحبًا بك في {{name}}","poweredBy":"مدعوم من Superbridge","superbridge1":"هذه الواجهة هي مجرد طبقة فوق العقود الأصلية للجسر لسلسلة Superchain الرسمية.","superbridge2":"لا تحتفظ Superbridge بأي أموال في أي وقت.","superbridge3":"لمساعدة الجسر، يرجى زيارة <0>الدعم والأسئلة الشائعة</0>.","superbridge4":"باستخدام هذه الواجهة، فإنك توافق على <0>الشروط وسياسة الخصوصية</0> الخاصة بنا.","dedicated1":"هذه الواجهة هي مجرد طبقة فوق العقود الأصلية للجسر لـ <0>{{name}}</0>.","agreeAndContinue":"الموافقة والمتابعة","forceReadTerms":"يرجى قراءة الشروط والموافقة عليها","forceReadPrivacy":"يرجى قراءة سياسة الخصوصية والموافقة عليها"},"legal":{"footerButton":"الشروط والخصوصية","title":"الشروط والخصوصية","superbridgeTerms":"شروط خدمة Superbridge","superbridgePrivacy":"سياسة خصوصية Superbridge","dedicatedTerms":"شروط خدمة {{name}}","dedicatedPrivacy":"سياسة خصوصية {{name}}"},"noGasModal":{"youNeedGasOn":"أنت بحاجة إلى غاز على {{to}}","needHelp":"تحتاج مساعدة؟ عرض الأسئلة الشائعة","cctp":"يتطلب الجسر {{symbol}} معاملة إضافية على {{to}}. يرجى تعبئة {{gas}} على {{to}} لإكمال هذا الجسر.","opWithdrawing":"يتطلب السحب معاملة إضافية على {{to}}. يرجى تعبئة {{gas}} على {{to}} لإكمال هذا السحب.","arbWithdrawing":"يتطلب سحب {{token}} معاملة إضافية على {{to}}. يرجى تعبئة {{gas}} على {{to}} لإكمال هذا السحب.","depositing":"بدون غاز على {{to}} لن تتمكن من إجراء أي معاملات. يرجى تعبئة {{gas}} على {{to}} قبل محاولة هذا الجسر.","topup":"تعبئة غاز على {{to}}","goBack":"ارجع","proceedAnyway":"المتابعة على أي حال"},"expensiveGasModal":{"title":"رسوم الشبكة ستكون أعلى من قيمة التوكن","notBestOption":"قد لا يكون Superbridge هو الخيار الأفضل لهذا المبلغ من الجسر. يرجى النظر في <0>الجسور البديلة</0>.","bridgeAmount":"مبلغ الجسر","networkFees":"رسوم الشبكة","goBack":"ارجع","proceedAnyway":"المتابعة على أي حال"},"feeModal":{"providerFees":"رسوم {{provider}}","acrossFeeBreakdownDescription":"الرسوم المدفوعة إلى <0>Across</0> ومزودي السيولة والمرسلين الخاصين بهم","hyperlaneFeeBreakdownDescription":"الرسوم المدفوعة إلى <0>Hyperlane</0> للمرسلين لتسليم الرسائل"},"gasInfoModal":{"title":"رسوم الغاز","description":"مع البلوكتشين، تحتاج إلى دفع رسوم لتقديم المعاملات. تتطلب المعاملات المقدمة إلى {{from}} كمية صغيرة من {{symbol}} للتأكد من تأكيدها من قبل الشبكة.","opWithdrawal":"تتطلب عمليات السحب من OP Stack معاملة إضافية لإثبات وإنهاء السحب على سلسلة التسوية.","arbWithdrawal":"تتطلب عمليات السحب من Arbitrum معاملة إضافية لإنهاء السحب على سلسلة التسوية.","cctp":"تتطلب جسور USDC الأصلية عبر CCTP معاملة إضافية على سلسلة الوجهة."},"networkSelectorModal":{"title":"اختر شبكة"},"routeSelectorModal":{"title":"اختر مسارًا"},"across":{"transferTimeTitle":"وقت التحويل السريع جدًا","transferTimeDescription":"اعتمادًا على حجم الجسر، يمكن أن يختلف وقت التحويل السريع جدًا. الأوقات تقديرية فقط.","timeTo":"الوقت إلى {{to}}","feeBreakdownTitle":"رسوم Across","feeBreakdownDescription":"الرسوم المدفوعة إلى <0>Across</0> ومزودي السيولة والمرسلين الخاصين بهم","acrossFee":"رسوم Across"},"header":{"supportAndFaqs":"الدعم والأسئلة الشائعة","legal":"قانوني"}}'),
                eE = JSON.parse('{"reviewBridge":"Br\xfccke \xfcberpr\xfcfen","bridging":"Br\xfccke wird erstellt","connectWallet":"Wallet verbinden","switchToApprove":"Wechseln","approve":"Genehmigen","insufficientFunds":"Unzureichende Mittel","insufficientGas":"Nicht gen\xfcgend {{symbol}} f\xfcr Gas","bridgeLimit":"{{amount}} {{symbol}} Limit","bridgeMin":"Mindestbetrag {{amount}} {{symbol}}","enterAnAmount":"Betrag eingeben","loading":"Wird geladen","loadMore":"Mehr laden","error":"Fehler","noAccountConnected":"Kein Konto verbunden","save":"Speichern","toAddress":"An Adresse","on":"ein","off":"aus","receiveOnChain":"Auf {{chain}} empfangen","transferTime":"\xdcbertragungszeit","transferTimeSeconds_one":"~{{count}} Sekunde","transferTimeSeconds_other":"~{{count}} Sekunden","transferTimeMinutes_one":"~{{count}} Minute","transferTimeMinutes_other":"~{{count}} Minuten","transferTimeHours_one":"~{{count}} Stunde","transferTimeHours_other":"~{{count}} Stunden","transferTimeDays_one":"~{{count}} Tag","transferTimeDays_other":"~{{count}} Tage","availableBalance":"{{amount}} {{symbol}} verf\xfcgbar","sorryAnErrorOccurred":"Entschuldigung! Ein Fehler ist aufgetreten","about":"\xdcber","docs":"Dokumentation","from":"Von","to":"An","manage":"Verwalten","support":"Support","ok":"Ok","general":{"needHelp":"Brauchen Sie Hilfe? FAQs anzeigen"},"settings":{"settings":"Einstellungen","escapeHatchDescription":"Erzwingen Sie Abhebungen \xfcber zensurresistente Transaktionen auf der Abwicklungskette.","currency":"W\xe4hrung","language":"Sprache","explorer":"Explorer","tokenLists":"Token-Listen","enableTestnets":"Testnetze aktivieren","darkMode":"Dunkler Modus"},"customTokenLists":{"add":"Benutzerdefinierte Token-Liste hinzuf\xfcgen","name":"Name der Token-Liste","namePlaceholder":"Name","url":"URL der Token-Liste","urlPlaceholder":"URL","invalid":"Ung\xfcltige Token-Listen-URL","loadedTokens":"{{num}} Token geladen","disclaimer":"Jeder kann ein Token erstellen, einschlie\xdflich gef\xe4lschter Versionen bestehender Token. Seien Sie vorsichtig. Einige Token und ihre technischen Parameter sind m\xf6glicherweise nicht mit {{app}}-Diensten kompatibel. Durch das Importieren dieser benutzerdefinierten Token-Liste erkennen Sie die Risiken an und akzeptieren sie.","learnMore":"Mehr \xfcber die Risiken erfahren.","save":"Liste speichern","delete":"Liste l\xf6schen"},"activity":{"activity":"Aktivit\xe4t","actionNeeded":"Aktion erforderlich","connectWallet":"Bitte verbinden Sie Ihre Wallet...","noTransactions":"Noch keine Transaktionen...","error":"Entschuldigung! Wir k\xf6nnen Ihren Aktivit\xe4tsfeed nicht abrufen.\\n Bitte versuchen Sie, die Seite zu aktualisieren","withdrawn":"Abgehoben","proving":"Wird bewiesen...","readyToProve":"Bereit zum Beweisen","proved":"Bewiesen","waitingForStateRoot":"Warten auf den Status-Root...","waitingForDisputeGame":"Warten auf das Streitspiel...","stateRootPublished":"Status-Root ver\xf6ffentlicht","challengePeriod":"Herausforderungszeitraum","finalizing":"Wird abgeschlossen...","readyToFinalize":"Bereit zum Abschluss","finalized":"Abgeschlossen","deposited":"Eingezahlt","depositing":"Einzahlung wird durchgef\xfchrt","l2Confirmation":"L2 Best\xe4tigung","waitingForL2":"Warten auf L2...","bridged":"\xdcberbr\xfcckt","bridging":"Br\xfccke wird erstellt","minted":"Gepr\xe4gt","minting":"Pr\xe4gung wird durchgef\xfchrt","readyToMint":"Bereit zur Pr\xe4gung","waitingForAttestation":"Warten auf die Attestierung...","remainingSeconds_one":"~{{count}} Sekunde verbleibend","remainingSeconds_other":"~{{count}} Sekunden verbleibend","remainingMinutes_one":"~{{count}} Minute verbleibend","remainingMinutes_other":"~{{count}} Minuten verbleibend","remainingHours_one":"~{{count}} Stunde verbleibend","remainingHours_other":"~{{count}} Stunden verbleibend","remainingDays_one":"~{{count}} Tag verbleibend","remainingDays_other":"~{{count}} Tage verbleibend"},"tokens":{"tokens":"Token","selectToken":"Token ausw\xe4hlen","noneFound":"Keine Ergebnisse gefunden","notBridgeable":"Nicht \xfcberbr\xfcckbar","import":"Importieren","customImport":"Benutzerdefinierter Import","customImportFromList":"Von {{name}}","customImportCheck":"Stellen Sie sicher, dass Sie die Token-Adresse \xfcberpr\xfcft haben und sie korrekt ist:","customL1Address":"L1 Adresse","customL2Address":"L2 Adresse","customL3Address":"L3 Adresse"},"recipient":{"bridgeDestination":"Ziel der Br\xfccke","toAddress":"An Adresse","invalidAddress":"Ung\xfcltige Adresse","yourChainAddress":"Das ist Ihre {{chain}} Adresse","usedBefore":"Konto bereits verwendet","usedBeforeMultiple":"Konto bereits {{count}} Mal verwendet","newAddress":"Neue Adresse - bitte seien Sie vorsichtig!","checkingAddress":"Adresse wird \xfcberpr\xfcft...","addRecipientAddress":"Empf\xe4ngeradresse hinzuf\xfcgen","pleaseNote":"Bitte beachten","sameAddressRequirement":"Br\xfccken zu oder von {{chain}} m\xfcssen dieselbe Empf\xe4ngeradresse haben.","checkRecipientAddress":"Empf\xe4ngeradresse pr\xfcfen"},"buttons":{"start":"Starten","finalize":"Abschlie\xdfen","claim":"Anfordern","prove":"Beweisen","redeem":"Einl\xf6sen","switchChain":"Kette wechseln","mint":"Pr\xe4gen","get":"Holen","continue":"Fortfahren","approve":"Genehmigen","approved":"Genehmigt","approving":"Wird genehmigt","max":"Max","bridgingDisabled":"\xdcberbr\xfcckung deaktiviert","bridgingPaused":"\xdcberbr\xfcckung pausiert","reset":"Zur\xfccksetzen"},"fees":{"fees":"Netzwerkgeb\xfchren","networkGas":"{{chain}} Gas","easyModeFee":"Einfachmodus-Gas"},"poweredBy":"Bereitgestellt von {{name}}","transaction":{"via":"\xdcber","transferTime":"\xdcbertragungszeit","steps":"Schritte","bridgeInfo":"Br\xfcckeninformationen","fromChain":"Von {{from}}","toChain":"Zu {{to}}","fromAddress":"Von Adresse","toAddress":"Zu Adresse"},"confirmationModal":{"startBridgeOn":"Auf {{from}} starten","bridgeFrom":"Von {{from}} \xfcberbr\xfccken","proveOn":"Auf {{to}} beweisen","getOn":"Auf {{to}} erhalten","getAmountOn":"{{formatted}} auf {{to}} erhalten","waitSeconds_one":"Warten Sie ~{{count}} Sekunde","waitSeconds_other":"Warten Sie ~{{count}} Sekunden","waitMinutes_one":"Warten Sie ~{{count}} Minute","waitMinutes_other":"Warten Sie ~{{count}} Minuten","waitHours_one":"Warten Sie ~{{count}} Stunde","waitHours_other":"Warten Sie ~{{count}} Stunden","waitDays_one":"Warten Sie ~{{count}} Tag","waitDays_other":"Warten Sie ~{{count}} Tage","prove":"Auf {{base}} beweisen","finalize":"Auf {{to}} beanspruchen","receiveAmountOnChain":"{{receiveAmount}} {{receiveSymbol}} auf {{to}} erhalten","receiveAmount":"{{formatted}} erhalten","approve":"{{symbol}} genehmigen","approveGasToken":"Gas-Token genehmigen"},"tos":{"welcome":"Willkommen bei {{name}}","poweredBy":"Bereitgestellt von Superbridge","superbridge1":"Diese Oberfl\xe4che ist nur eine Schicht \xfcber den nativen Br\xfcckenvertr\xe4gen f\xfcr offizielle Superchain Rollups.","superbridge2":"Superbridge verwahrt zu keinem Zeitpunkt Gelder.","superbridge3":"F\xfcr Hilfe beim \xdcberbr\xfccken besuchen Sie bitte <0>Support & FAQs</0>.","superbridge4":"Durch die Nutzung dieser Oberfl\xe4che stimmen Sie unseren <0>Nutzungsbedingungen und Datenschutzrichtlinien</0> zu.","dedicated1":"Diese Oberfl\xe4che ist nur eine Schicht \xfcber den nativen Br\xfcckenvertr\xe4gen f\xfcr <0>{{name}}</0>.","agreeAndContinue":"Zustimmen & fortfahren","forceReadTerms":"Bitte lesen und akzeptieren Sie die Nutzungsbedingungen","forceReadPrivacy":"Bitte lesen und akzeptieren Sie die Datenschutzrichtlinie"},"legal":{"footerButton":"Nutzungsbedingungen & Datenschutz","title":"Nutzungsbedingungen & Datenschutz","superbridgeTerms":"Superbridge Nutzungsbedingungen","superbridgePrivacy":"Superbridge Datenschutzrichtlinie","dedicatedTerms":"{{name}} Nutzungsbedingungen","dedicatedPrivacy":"{{name}} Datenschutzrichtlinie"},"noGasModal":{"youNeedGasOn":"Sie ben\xf6tigen Gas auf {{to}}","needHelp":"Brauchen Sie Hilfe? FAQs anzeigen","cctp":"Das \xdcberbr\xfccken von {{symbol}} erfordert eine zus\xe4tzliche Transaktion auf {{to}}. Bitte f\xfcllen Sie {{gas}} auf {{to}} auf, um diese Br\xfccke abzuschlie\xdfen.","opWithdrawing":"Das Abheben erfordert 2 zus\xe4tzliche Transaktionen auf {{to}}. Bitte f\xfcllen Sie {{gas}} auf {{to}} auf, um diese Abhebung abzuschlie\xdfen.","arbWithdrawing":"Das Abheben von {{token}} erfordert eine zus\xe4tzliche Transaktion auf {{to}}. Bitte f\xfcllen Sie {{gas}} auf {{to}} auf, um diese Abhebung abzuschlie\xdfen.","depositing":"Ohne Gas auf {{to}} k\xf6nnen Sie keine Transaktionen durchf\xfchren. Bitte f\xfcllen Sie {{gas}} auf {{to}} auf, bevor Sie versuchen, diese Br\xfccke zu \xfcberqueren.","topup":"Gas auf {{to}} auff\xfcllen","goBack":"Zur\xfcck","proceedAnyway":"Trotzdem fortfahren"},"expensiveGasModal":{"title":"Netzwerkgeb\xfchren sind h\xf6her als der Token-Wert","notBestOption":"Superbridge ist m\xf6glicherweise nicht die beste Option f\xfcr diesen \xdcberbr\xfcckungsbetrag. Bitte \xfcberlegen Sie <0>diese alternativen Br\xfccken</0>.","bridgeAmount":"\xdcberbr\xfcckungsbetrag","networkFees":"Netzwerkgeb\xfchren","goBack":"Zur\xfcck","proceedAnyway":"Trotzdem fortfahren"},"feeModal":{"providerFees":"{{provider}} Geb\xfchren","acrossFeeBreakdownDescription":"Geb\xfchren, die an <0>Across</0> und ihre Liquidit\xe4tsanbieter und Relayer gezahlt werden","hyperlaneFeeBreakdownDescription":"Geb\xfchren, die an <0>Hyperlane</0> Relayer f\xfcr die Zustellung von Nachrichten gezahlt werden"},"gasInfoModal":{"title":"Gasgeb\xfchren","description":"Bei Blockchains m\xfcssen Sie eine Geb\xfchr zahlen, um Transaktionen durchzuf\xfchren. Transaktionen, die an {{from}} gesendet werden, erfordern eine kleine Menge an {{symbol}}, um sicherzustellen, dass sie vom Netzwerk best\xe4tigt werden.","opWithdrawal":"Abhebungen von OP Stack Rollups erfordern zwei zus\xe4tzliche Transaktionen, um die Abhebung auf der Abwicklungskette zu beweisen und abzuschlie\xdfen.","arbWithdrawal":"Abhebungen von Arbitrum Nitro Rollups erfordern eine zus\xe4tzliche Transaktion, um auf der Abwicklungskette abzuschlie\xdfen.","cctp":"Native USDC Br\xfccken \xfcber CCTP erfordern eine zus\xe4tzliche Transaktion auf der Zielkette."},"networkSelectorModal":{"title":"Netzwerk ausw\xe4hlen"},"routeSelectorModal":{"title":"Route ausw\xe4hlen"},"across":{"transferTimeTitle":"Super-schnelle \xdcbertragungszeit","transferTimeDescription":"Abh\xe4ngig von der Gr\xf6\xdfe der Br\xfccke kann die Super-schnelle \xdcbertragungszeit variieren. Zeiten sind nur Sch\xe4tzungen.","timeTo":"Zeit zu {{to}}","feeBreakdownTitle":"Across Geb\xfchren","feeBreakdownDescription":"Geb\xfchren, die an <0>Across</0> und ihre Liquidit\xe4tsanbieter und Relayer gezahlt werden","acrossFee":"Across Geb\xfchr"},"header":{"supportAndFaqs":"Support & FAQs","legal":"Rechtliches"}}'),
                eM = JSON.parse('{"reviewBridge":"Review bridge","bridging":"Bridging","connectWallet":"Connect wallet","switchToApprove":"Switch","approve":"Approve","insufficientFunds":"Insufficient funds","insufficientGas":"Insufficient {{symbol}} for gas","bridgeLimit":"{{amount}} {{symbol}} limit","bridgeMin":"Min. amount {{amount}} {{symbol}}","enterAnAmount":"Enter an amount","loading":"Loading","loadMore":"Load more","error":"Error","noAccountConnected":"No account connected","save":"Save","toAddress":"To address","on":"on","off":"off","receiveOnChain":"Receive on {{chain}}","transferTime":"Transfer time","transferTimeSeconds_one":"~{{count}} sec","transferTimeSeconds_other":"~{{count}} secs","transferTimeMinutes_one":"~{{count}} min","transferTimeMinutes_other":"~{{count}} mins","transferTimeHours_one":"~{{count}} hour","transferTimeHours_other":"~{{count}} hours","transferTimeDays_one":"~{{count}} day","transferTimeDays_other":"~{{count}} days","availableBalance":"{{amount}} {{symbol}} available","sorryAnErrorOccurred":"Sorry! An error occurred","about":"About","docs":"Docs","from":"From","to":"To","manage":"Manage","support":"Support","ok":"Ok","general":{"needHelp":"Need help? View FAQs"},"settings":{"settings":"Settings","escapeHatchDescription":"Force withdrawals via censorship resistant transactions on the settlement chain.","currency":"Currency","language":"Language","explorer":"Explorer","tokenLists":"Token lists","enableTestnets":"Enable testnets","darkMode":"Dark mode"},"customTokenLists":{"add":"Add custom token list","name":"Token list name","namePlaceholder":"Name","url":"Token list URL","urlPlaceholder":"URL","invalid":"Invalid token list URL","loadedTokens":"Loaded {{num}} tokens","disclaimer":"Anyone can create any token, including fake versions of existing tokens. Take due care. Some tokens and their technical parameters may be incompatible with {{app}} services. By importing this custom token list you acknowledge and accept the risks.","learnMore":"Learn more about the risks.","save":"Save list","delete":"Delete list"},"activity":{"activity":"Activity","actionNeeded":"Action needed","connectWallet":"Please connect your wallet…","noTransactions":"No transactions yet…","error":"Sorry! We\'re unable to pull your activity feed.\\n Please try and refresh the page","withdrawn":"Withdrawn","proving":"Proving…","readyToProve":"Ready to prove","proved":"Proved","waitingForStateRoot":"Waiting for state root…","waitingForDisputeGame":"Waiting for dispute game…","stateRootPublished":"State root published","challengePeriod":"Challenge period","finalizing":"Finalizing…","readyToFinalize":"Ready to finalize","finalized":"Finalized","deposited":"Deposited","depositing":"Depositing","l2Confirmation":"L2 confirmation","waitingForL2":"Waiting for L2…","bridged":"Bridged","bridging":"Bridging","minted":"Minted","minting":"Minting","readyToMint":"Ready to mint","waitingForAttestation":"Waiting for attestation…","remainingSeconds_one":"~{{count}} sec remaining","remainingSeconds_other":"~{{count}} secs remaining","remainingMinutes_one":"~{{count}} min remaining","remainingMinutes_other":"~{{count}} mins remaining","remainingHours_one":"~{{count}} hour remaining","remainingHours_other":"~{{count}} hours remaining","remainingDays_one":"~{{count}} day remaining","remainingDays_other":"~{{count}} days remaining"},"tokens":{"tokens":"Tokens","selectToken":"Select a token","noneFound":"No results found","notBridgeable":"Not bridgeable","import":"Import","customImport":"Custom import","customImportFromList":"From {{name}}","customImportCheck":"Make sure you have checked the token address and that it is correct:","customL1Address":"L1 address","customL2Address":"L2 address","customL3Address":"L3 address"},"recipient":{"bridgeDestination":"Bridge destination","toAddress":"To address","invalidAddress":"Not a valid address","yourChainAddress":"This is your {{chain}} address","usedBefore":"Account used before","usedBeforeMultiple":"Account used {{count}} times before","newAddress":"New address - please be careful!","checkingAddress":"Checking address…","addRecipientAddress":"Add recipient address","pleaseNote":"Please note","sameAddressRequirement":"Bridges to or from {{chain}} must have the same recipient address.","checkRecipientAddress":"Check recipient address"},"buttons":{"start":"Start","finalize":"Finalize","claim":"Claim","prove":"Prove","redeem":"Redeem","switchChain":"Switch chain","mint":"Mint","get":"Get","continue":"Continue","approve":"Approve","approved":"Approved","approving":"Approving","max":"Max","bridgingDisabled":"Bridging disabled","bridgingPaused":"Bridging paused","reset":"Reset"},"fees":{"fees":"Network fees","networkGas":"{{chain}} gas","easyModeFee":"Easy mode gas"},"poweredBy":"Powered by {{name}}","transaction":{"via":"Via","transferTime":"Transfer time","steps":"Steps","bridgeInfo":"Bridge info","fromChain":"From {{from}}","toChain":"To {{to}}","fromAddress":"From address","toAddress":"To address"},"confirmationModal":{"startBridgeOn":"Start on {{from}}","bridgeFrom":"Bridge from {{from}}","proveOn":"Prove on {{to}}","getOn":"Get on {{to}}","getAmountOn":"Get {{formatted}} on {{to}}","waitSeconds_one":"Wait ~{{count}} sec","waitSeconds_other":"Wait ~{{count}} secs","waitMinutes_one":"Wait ~{{count}} min","waitMinutes_other":"Wait ~{{count}} mins","waitHours_one":"Wait ~{{count}} hour","waitHours_other":"Wait ~{{count}} hours","waitDays_one":"Wait ~{{count}} day","waitDays_other":"Wait ~{{count}} days","prove":"Prove on {{base}}","finalize":"Claim on {{to}}","receiveAmountOnChain":"Receive {{receiveAmount}} {{receiveSymbol}} on {{to}}","receiveAmount":"Receive {{formatted}}","approve":"Approve {{symbol}}","approveGasToken":"Approve gas token","checkbox1Deposit":"I understand it will take ~{{mins}} mins until my funds are on {{rollup}}","checkbox1Cctp":"I understand it will take ~{{mins}} mins until my funds are claimable on {{to}}","checkbox1BridgeSeconds_one":"I understand it will take ~{{count}} sec until my funds are on {{to}}","checkbox1BridgeSeconds_other":"I understand it will take ~{{count}} secs until my funds are on {{to}}","checkbox1BridgeMinutes_one":"I understand it will take ~{{count}} min until my funds are on {{to}}","checkbox1BridgeMinutes_other":"I understand it will take ~{{count}} mins until my funds are on {{to}}","checkbox1BridgeHours_one":"I understand it will take ~{{count}} hour until my funds are on {{to}}","checkbox1BridgeHours_other":"I understand it will take ~{{count}} hours until my funds are on {{to}}","checkbox1BridgeDays_one":"I understand it will take ~{{count}} day until my funds are on {{to}}","checkbox1BridgeDays_other":"I understand it will take ~{{count}} days until my funds are on {{to}}","opCheckbox1WithdrawalMinutes_one":"I understand it will take ~{{count}} min until my funds are claimable on {{base}} after I prove my withdrawal","opCheckbox1WithdrawalMinutes_other":"I understand it will take ~{{count}} mins until my funds are claimable on {{base}} after I prove my withdrawal","opCheckbox1WithdrawalHours_one":"I understand it will take ~{{count}} hour until my funds are claimable on {{base}} after I prove my withdrawal","opCheckbox1WithdrawalHours_other":"I understand it will take ~{{count}} hours until my funds are claimable on {{base}} after I prove my withdrawal","opCheckbox1WithdrawalDays_one":"I understand it will take ~{{count}} day until my funds are claimable on {{base}} after I prove my withdrawal","opCheckbox1WithdrawalDays_other":"I understand it will take ~{{count}} days until my funds are claimable on {{base}} after I prove my withdrawal","arbCheckbox1WithdrawalMinutes_one":"I understand it will take ~{{count}} min until my funds are claimable on {{base}}","arbCheckbox1WithdrawalMinutes_other":"I understand it will take ~{{count}} mins until my funds are claimable on {{base}}","arbCheckbox1WithdrawalHours_one":"I understand it will take ~{{count}} hour until my funds are claimable on {{base}}","arbCheckbox1WithdrawalHours_other":"I understand it will take ~{{count}} hours until my funds are claimable on {{base}}","arbCheckbox1WithdrawalDays_one":"I understand it will take ~{{count}} day until my funds are claimable on {{base}}","arbCheckbox1WithdrawalDays_other":"I understand it will take ~{{count}} days until my funds are claimable on {{base}}","checkbox2":"I understand once a bridge is initiated it cannot be sped up or cancelled","checkbox3":"I understand network fees are approximate and will change","review":"Review","gasCosts":"Gas costs","fees":"Fees","acceptTerms":"Accept terms","agreeToTerms":"Please read and agree to the following terms before you continue"},"tos":{"welcome":"Welcome","poweredBy":"Powered by Superbridge","superbridge1":"This interface is only a layer over the native bridge contracts for official Superchain rollups.","superbridge2":"No funds are held in custody by Superbridge at any point.","superbridge3":"For bridging help please head over to support & FAQs.","superbridge4":"By using this interface you agree to our Terms and Privacy Policy.","dedicated1":"This interface is only a layer over the native bridge contracts for <0>{{name}}</0>.","agreeAndContinue":"Agree & continue","forceReadTerms":"Please read and agree to the Terms of Service","forceReadPrivacy":"Please read and agree to the Privacy Policy"},"legal":{"footerButton":"Terms & Privacy","title":"Terms & Privacy","superbridgeTerms":"Superbridge Terms of Service","superbridgePrivacy":"Superbridge Privacy Policy","dedicatedTerms":"{{name}} Terms of Service","dedicatedPrivacy":"{{name}} Privacy Policy"},"noGasModal":{"youNeedGasOn":"You need gas on {{to}}","needHelp":"Need help? View FAQs","cctp":"Bridging {{symbol}} requires an extra transaction on {{to}}. Please top up {{gas}} on {{to}} to complete this bridge.","opWithdrawing":"Withdrawing requires 2 extra transactions on {{to}}. Please top up {{gas}} on {{to}} to complete this withdrawal.","arbWithdrawing":"Withdrawing {{token}} requires an extra transaction on {{to}}. Please top up {{gas}} on {{to}} to complete this withdrawal.","depositing":"Without gas on {{to}} you won\'t be able to make any transactions. Please top up {{gas}} on {{to}} before attempting this bridge.","topup":"Topup gas on {{to}}","goBack":"Go back","proceedAnyway":"Proceed anyway"},"expensiveGasModal":{"title":"Network fees will be higher than the token value","notBestOption":"Superbridge may not be the best option for this bridge amount. Please consider <0>these alternative bridges</0>.","bridgeAmount":"Bridge amount","networkFees":"Network fees","goBack":"Go back","proceedAnyway":"Proceed anyway"},"feeModal":{"providerFees":"{{provider}} fees","acrossFeeBreakdownDescription":"Fees paid to <0>Across</0> and their liquidity providers and relayers","hyperlaneFeeBreakdownDescription":"Fees paid to <0>Hyperlane</0> relayers for message delivery"},"gasInfoModal":{"title":"Gas fees","description":"With blockchains you need to pay a fee to submit transactions. Transactions submitted to {{from}} require a small amount of {{symbol}} to ensure they\'re confirmed by the network.","opWithdrawal":"Withdrawals from OP Stack rollups require two extra transactions to prove & finalize the withdrawal on the settlement chain.","arbWithdrawal":"Withdrawals from Arbitrum Nitro rollups require an extra transaction to finalize on the settlement chain.","cctp":"Native USDC bridges via CCTP require an extra transaction on the destination chain."},"networkSelectorModal":{"title":"Select a network"},"routeSelectorModal":{"title":"Choose route"},"across":{"transferTimeTitle":"Superfast transfer time","transferTimeDescription":"Depending on the size of the bridge, Superfast transfer times can vary. Times are estimates only.","timeTo":"Time to {{to}}","feeBreakdownTitle":"Across fees","feeBreakdownDescription":"Fees paid to <0>Across</0> and their liquidity providers and relayers","acrossFee":"Across fee"},"header":{"supportAndFaqs":"Support & FAQs","legal":"Legal"}}'),
                eR = JSON.parse('{"reviewBridge":"Revisar puente","bridging":"Estableciendo puente","connectWallet":"Conectar billetera","switchToApprove":"Cambiar","approve":"Aprobar","insufficientFunds":"Fondos insuficientes","insufficientGas":"Gas insuficiente de {{symbol}}","bridgeLimit":"L\xedmite de {{amount}} {{symbol}}","bridgeMin":"Cantidad m\xednima {{amount}} {{symbol}}","enterAnAmount":"Ingresa un monto","loading":"Cargando","loadMore":"Cargar m\xe1s","error":"Error","noAccountConnected":"No hay cuenta conectada","save":"Guardar","toAddress":"A la direcci\xf3n","on":"encendido","off":"apagado","receiveOnChain":"Recibir en {{chain}}","transferTime":"Tiempo de transferencia","transferTimeSeconds_one":"~{{count}} segundo","transferTimeSeconds_other":"~{{count}} segundos","transferTimeMinutes_one":"~{{count}} minuto","transferTimeMinutes_other":"~{{count}} minutos","transferTimeHours_one":"~{{count}} hora","transferTimeHours_other":"~{{count}} horas","transferTimeDays_one":"~{{count}} d\xeda","transferTimeDays_other":"~{{count}} d\xedas","availableBalance":"{{amount}} {{symbol}} disponible","sorryAnErrorOccurred":"\xa1Lo siento! Ocurri\xf3 un error","about":"Acerca de","docs":"Documentos","from":"De","to":"A","manage":"Gestionar","support":"Soporte","ok":"Aceptar","general":{"needHelp":"\xbfNecesitas ayuda? Ver preguntas frecuentes"},"settings":{"settings":"Configuraciones","escapeHatchDescription":"Forzar retiros mediante transacciones resistentes a la censura en la cadena de liquidaci\xf3n.","currency":"Moneda","language":"Idioma","explorer":"Explorador","tokenLists":"Listas de tokens","enableTestnets":"Habilitar testnets","darkMode":"Modo oscuro"},"customTokenLists":{"add":"Agregar lista de tokens personalizada","name":"Nombre de la lista de tokens","namePlaceholder":"Nombre","url":"URL de la lista de tokens","urlPlaceholder":"URL","invalid":"URL de lista de tokens no v\xe1lida","loadedTokens":"{{num}} tokens cargados","disclaimer":"Cualquiera puede crear un token, incluidas versiones falsas de tokens existentes. Ten cuidado. Algunos tokens y sus par\xe1metros t\xe9cnicos pueden no ser compatibles con los servicios de {{app}}. Al importar esta lista personalizada, reconoces y aceptas los riesgos.","learnMore":"Conoce m\xe1s sobre los riesgos.","save":"Guardar lista","delete":"Eliminar lista"},"activity":{"activity":"Actividad","actionNeeded":"Acci\xf3n requerida","connectWallet":"Por favor conecta tu billetera...","noTransactions":"No hay transacciones a\xfan...","error":"\xa1Lo siento! No podemos cargar tu feed de actividad.\\n Por favor, intenta refrescar la p\xe1gina","withdrawn":"Retirado","proving":"Probando...","readyToProve":"Listo para probar","proved":"Probado","waitingForStateRoot":"Esperando la ra\xedz del estado...","waitingForDisputeGame":"Esperando juego de disputa...","stateRootPublished":"Ra\xedz del estado publicada","challengePeriod":"Per\xedodo de desaf\xedo","finalizing":"Finalizando...","readyToFinalize":"Listo para finalizar","finalized":"Finalizado","deposited":"Depositado","depositing":"Depositando","l2Confirmation":"Confirmaci\xf3n L2","waitingForL2":"Esperando L2...","bridged":"Puente establecido","bridging":"Estableciendo puente","minted":"Acu\xf1ado","minting":"Acu\xf1ando","readyToMint":"Listo para acu\xf1ar","waitingForAttestation":"Esperando la certificaci\xf3n...","remainingSeconds_one":"~{{count}} segundo restante","remainingSeconds_other":"~{{count}} segundos restantes","remainingMinutes_one":"~{{count}} minuto restante","remainingMinutes_other":"~{{count}} minutos restantes","remainingHours_one":"~{{count}} hora restante","remainingHours_other":"~{{count}} horas restantes","remainingDays_one":"~{{count}} d\xeda restante","remainingDays_other":"~{{count}} d\xedas restantes"},"tokens":{"tokens":"Tokens","selectToken":"Selecciona un token","noneFound":"No se encontraron resultados","notBridgeable":"No transferible por puente","import":"Importar","customImport":"Importaci\xf3n personalizada","customImportFromList":"Desde {{name}}","customImportCheck":"Aseg\xfarate de haber verificado la direcci\xf3n del token y que sea correcta:","customL1Address":"Direcci\xf3n L1","customL2Address":"Direcci\xf3n L2","customL3Address":"Direcci\xf3n L3"},"recipient":{"bridgeDestination":"Destino del puente","toAddress":"A la direcci\xf3n","invalidAddress":"Direcci\xf3n no v\xe1lida","yourChainAddress":"Esta es tu direcci\xf3n de {{chain}}","usedBefore":"Cuenta utilizada anteriormente","usedBeforeMultiple":"Cuenta utilizada {{count}} veces antes","newAddress":"Nueva direcci\xf3n - \xa1ten cuidado!","checkingAddress":"Verificando direcci\xf3n...","addRecipientAddress":"Agregar direcci\xf3n del destinatario","pleaseNote":"Por favor, tenga en cuenta","sameAddressRequirement":"Los puentes hacia o desde {{chain}} deben tener la misma direcci\xf3n de destinatario.","checkRecipientAddress":"Verificar direcci\xf3n del destinatario"},"buttons":{"start":"Iniciar","finalize":"Finalizar","claim":"Reclamar","prove":"Probar","redeem":"Redimir","switchChain":"Cambiar cadena","mint":"Acu\xf1ar","get":"Obtener","continue":"Continuar","approve":"Aprobar","approved":"Aprobado","approving":"Aprobando","max":"M\xe1x.","bridgingDisabled":"Puente deshabilitado","bridgingPaused":"Puente pausado","reset":"Reiniciar"},"fees":{"fees":"Comisiones de red","networkGas":"Gas de {{chain}}","easyModeFee":"Gas modo f\xe1cil"},"poweredBy":"Impulsado por {{name}}","transaction":{"via":"V\xeda","transferTime":"Tiempo de transferencia","steps":"Pasos","bridgeInfo":"Informaci\xf3n del puente","fromChain":"Desde {{from}}","toChain":"A {{to}}","fromAddress":"Desde direcci\xf3n","toAddress":"A direcci\xf3n"},"confirmationModal":{"startBridgeOn":"Iniciar en {{from}}","bridgeFrom":"Puente desde {{from}}","proveOn":"Probar en {{to}}","getOn":"Obtener en {{to}}","getAmountOn":"Obtener {{formatted}} en {{to}}","waitSeconds_one":"Espera ~{{count}} segundo","waitSeconds_other":"Espera ~{{count}} segundos","waitMinutes_one":"Espera ~{{count}} minuto","waitMinutes_other":"Espera ~{{count}} minutos","waitHours_one":"Espera ~{{count}} hora","waitHours_other":"Espera ~{{count}} horas","waitDays_one":"Espera ~{{count}} d\xeda","waitDays_other":"Espera ~{{count}} d\xedas","prove":"Probar en {{base}}","finalize":"Reclamar en {{to}}","receiveAmountOnChain":"Recibir {{receiveAmount}} {{receiveSymbol}} en {{to}}","receiveAmount":"Recibir {{formatted}}","approve":"Aprobar {{symbol}}","approveGasToken":"Aprobar token de gas"},"tos":{"welcome":"Bienvenido a {{name}}","poweredBy":"Impulsado por Superbridge","superbridge1":"Esta interfaz es solo una capa sobre los contratos de puente nativos para los rollups oficiales de Superchain.","superbridge2":"Superbridge no retiene fondos en ning\xfan momento.","superbridge3":"Para obtener ayuda con el puente, dir\xedgete a <0>soporte y preguntas frecuentes</0>.","superbridge4":"Al usar esta interfaz, aceptas nuestros <0>T\xe9rminos y Pol\xedtica de privacidad</0>.","dedicated1":"Esta interfaz es solo una capa sobre los contratos de puente nativos de <0>{{name}}</0>.","agreeAndContinue":"Aceptar y continuar","forceReadTerms":"Por favor, lee y acepta los T\xe9rminos de servicio","forceReadPrivacy":"Por favor, lee y acepta la Pol\xedtica de privacidad"},"legal":{"footerButton":"T\xe9rminos y privacidad","title":"T\xe9rminos y privacidad","superbridgeTerms":"T\xe9rminos de servicio de Superbridge","superbridgePrivacy":"Pol\xedtica de privacidad de Superbridge","dedicatedTerms":"T\xe9rminos de servicio de {{name}}","dedicatedPrivacy":"Pol\xedtica de privacidad de {{name}}"},"noGasModal":{"youNeedGasOn":"Necesitas gas en {{to}}","needHelp":"\xbfNecesitas ayuda? Ver preguntas frecuentes","cctp":"Establecer puente de {{symbol}} requiere una transacci\xf3n adicional en {{to}}. Por favor recarga {{gas}} en {{to}} para completar este puente.","opWithdrawing":"Retirar requiere 2 transacciones adicionales en {{to}}. Por favor recarga {{gas}} en {{to}} para completar este retiro.","arbWithdrawing":"Retirar {{token}} requiere una transacci\xf3n adicional en {{to}}. Por favor recarga {{gas}} en {{to}} para completar este retiro.","depositing":"Sin gas en {{to}} no podr\xe1s realizar transacciones. Por favor recarga {{gas}} en {{to}} antes de intentar este puente.","topup":"Recargar gas en {{to}}","goBack":"Regresar","proceedAnyway":"Proceder de todos modos"},"expensiveGasModal":{"title":"Las comisiones de la red ser\xe1n m\xe1s altas que el valor del token","notBestOption":"Superbridge puede no ser la mejor opci\xf3n para esta cantidad. Por favor, considera <0>estas alternativas</0>.","bridgeAmount":"Cantidad del puente","networkFees":"Comisiones de red","goBack":"Regresar","proceedAnyway":"Proceder de todos modos"},"feeModal":{"providerFees":"Comisiones de {{provider}}","acrossFeeBreakdownDescription":"Comisiones pagadas a <0>Across</0> y sus proveedores de liquidez y retransmisores","hyperlaneFeeBreakdownDescription":"Comisiones pagadas a los retransmisores de <0>Hyperlane</0> para la entrega de mensajes"},"gasInfoModal":{"title":"Comisiones de gas","description":"Con blockchain necesitas pagar una comisi\xf3n para enviar transacciones. Las transacciones enviadas a {{from}} requieren una peque\xf1a cantidad de {{symbol}} para asegurar su confirmaci\xf3n por la red.","opWithdrawal":"Los retiros desde rollups de OP Stack requieren dos transacciones adicionales para probar y finalizar el retiro en la cadena de liquidaci\xf3n.","arbWithdrawal":"Los retiros desde rollups de Arbitrum Nitro requieren una transacci\xf3n adicional para finalizar en la cadena de liquidaci\xf3n.","cctp":"Los puentes nativos de USDC v\xeda CCTP requieren una transacci\xf3n adicional en la cadena de destino."},"networkSelectorModal":{"title":"Selecciona una red"},"routeSelectorModal":{"title":"Elige ruta"},"across":{"transferTimeTitle":"Tiempo de transferencia s\xfaper r\xe1pido","transferTimeDescription":"Dependiendo del tama\xf1o del puente, los tiempos de transferencia s\xfaper r\xe1pidos pueden variar. Los tiempos son solo estimaciones.","timeTo":"Tiempo a {{to}}","feeBreakdownTitle":"Comisiones de Across","feeBreakdownDescription":"Comisiones pagadas a <0>Across</0> y sus proveedores de liquidez y retransmisores","acrossFee":"Comisi\xf3n de Across"},"header":{"supportAndFaqs":"Soporte y preguntas frecuentes","legal":"Legal"}}'),
                eF = JSON.parse('{"reviewBridge":"Examiner le pont","bridging":"Pont en cours","connectWallet":"Connecter le portefeuille","switchToApprove":"Changer","approve":"Approuver","insufficientFunds":"Fonds insuffisants","insufficientGas":"Pas assez de {{symbol}} pour le gaz","bridgeLimit":"Limite de {{amount}} {{symbol}}","bridgeMin":"Montant min. {{amount}} {{symbol}}","enterAnAmount":"Entrez un montant","loading":"Chargement","loadMore":"Charger plus","error":"Erreur","noAccountConnected":"Aucun compte connect\xe9","save":"Sauvegarder","toAddress":"\xc0 l\'adresse","on":"activ\xe9","off":"d\xe9sactiv\xe9","receiveOnChain":"Recevoir sur {{chain}}","transferTime":"Temps de transfert","transferTimeSeconds_one":"~{{count}} sec","transferTimeSeconds_other":"~{{count}} secs","transferTimeMinutes_one":"~{{count}} min","transferTimeMinutes_other":"~{{count}} mins","transferTimeHours_one":"~{{count}} heure","transferTimeHours_other":"~{{count}} heures","transferTimeDays_one":"~{{count}} jour","transferTimeDays_other":"~{{count}} jours","availableBalance":"{{amount}} {{symbol}} disponible","sorryAnErrorOccurred":"D\xe9sol\xe9! Une erreur est survenue","about":"\xc0 propos","docs":"Docs","from":"De","to":"\xc0","manage":"G\xe9rer","support":"Support","ok":"Ok","general":{"needHelp":"Besoin d\'aide? Voir les FAQs"},"settings":{"settings":"Param\xe8tres","escapeHatchDescription":"Forcer les retraits via des transactions r\xe9sistantes \xe0 la censure sur la cha\xeene de r\xe8glement.","currency":"Devise","language":"Langue","explorer":"Explorateur","tokenLists":"Listes de tokens","enableTestnets":"Activer les testnets","darkMode":"Mode sombre"},"customTokenLists":{"add":"Ajouter une liste de tokens personnalis\xe9e","name":"Nom de la liste de tokens","namePlaceholder":"Nom","url":"URL de la liste de tokens","urlPlaceholder":"URL","invalid":"URL de liste de tokens invalide","loadedTokens":"{{num}} tokens charg\xe9s","disclaimer":"N\'importe qui peut cr\xe9er un token, y compris des versions factices de tokens existants. Soyez vigilant. Certains tokens et leurs param\xe8tres techniques peuvent ne pas \xeatre compatibles avec les services de {{app}}. En important cette liste personnalis\xe9e, vous reconnaissez et acceptez les risques.","learnMore":"En savoir plus sur les risques.","save":"Sauvegarder la liste","delete":"Supprimer la liste"},"activity":{"activity":"Activit\xe9","actionNeeded":"Action requise","connectWallet":"Veuillez connecter votre portefeuille...","noTransactions":"Aucune transaction pour l\'instant...","error":"D\xe9sol\xe9! Nous ne pouvons pas charger votre flux d\'activit\xe9.\\n Veuillez r\xe9essayer et actualiser la page","withdrawn":"Retir\xe9","proving":"Preuve en cours...","readyToProve":"Pr\xeat \xe0 prouver","proved":"Prouv\xe9","waitingForStateRoot":"En attente de la racine d\'\xe9tat...","waitingForDisputeGame":"En attente du jeu de contestation...","stateRootPublished":"Racine d\'\xe9tat publi\xe9e","challengePeriod":"P\xe9riode de contestation","finalizing":"Finalisation en cours...","readyToFinalize":"Pr\xeat \xe0 finaliser","finalized":"Finalis\xe9","deposited":"D\xe9pos\xe9","depositing":"D\xe9p\xf4t en cours","l2Confirmation":"Confirmation L2","waitingForL2":"En attente de L2...","bridged":"Pont \xe9tabli","bridging":"Pont en cours","minted":"Frapp\xe9","minting":"Frappage en cours","readyToMint":"Pr\xeat \xe0 frapper","waitingForAttestation":"En attente d\'attestation...","remainingSeconds_one":"~{{count}} sec restant","remainingSeconds_other":"~{{count}} secs restants","remainingMinutes_one":"~{{count}} min restant","remainingMinutes_other":"~{{count}} mins restants","remainingHours_one":"~{{count}} heure restante","remainingHours_other":"~{{count}} heures restantes","remainingDays_one":"~{{count}} jour restant","remainingDays_other":"~{{count}} jours restants"},"tokens":{"tokens":"Tokens","selectToken":"S\xe9lectionner un token","noneFound":"Aucun r\xe9sultat trouv\xe9","notBridgeable":"Non transf\xe9rable via pont","import":"Importer","customImport":"Importation personnalis\xe9e","customImportFromList":"Depuis {{name}}","customImportCheck":"Assurez-vous d\'avoir v\xe9rifi\xe9 l\'adresse du token et qu\'elle est correcte:","customL1Address":"Adresse L1","customL2Address":"Adresse L2","customL3Address":"Adresse L3"},"recipient":{"bridgeDestination":"Destination du pont","toAddress":"\xc0 l\'adresse","invalidAddress":"Adresse non valide","yourChainAddress":"Ceci est votre adresse {{chain}}","usedBefore":"Compte utilis\xe9 auparavant","usedBeforeMultiple":"Compte utilis\xe9 {{count}} fois auparavant","newAddress":"Nouvelle adresse - faites attention!","checkingAddress":"V\xe9rification de l\'adresse...","addRecipientAddress":"Ajouter l\'adresse du destinataire","pleaseNote":"Veuillez noter","sameAddressRequirement":"Les ponts vers ou depuis {{chain}} doivent avoir la m\xeame adresse de destinataire.","checkRecipientAddress":"V\xe9rifiez l\'adresse du destinataire"},"buttons":{"start":"Commencer","finalize":"Finaliser","claim":"R\xe9clamer","prove":"Prouver","redeem":"\xc9changer","switchChain":"Changer de cha\xeene","mint":"Frappage","get":"Obtenir","continue":"Continuer","approve":"Approuver","approved":"Approuv\xe9","approving":"Approbation en cours","max":"Max","bridgingDisabled":"Pont d\xe9sactiv\xe9","bridgingPaused":"Pont en pause","reset":"R\xe9initialiser"},"fees":{"fees":"Frais de r\xe9seau","networkGas":"Gaz de {{chain}}","easyModeFee":"Gaz mode facile"},"poweredBy":"Propuls\xe9 par {{name}}","transaction":{"via":"Via","transferTime":"Temps de transfert","steps":"\xc9tapes","bridgeInfo":"Infos sur le pont","fromChain":"De {{from}}","toChain":"\xc0 {{to}}","fromAddress":"De l\'adresse","toAddress":"\xc0 l\'adresse"},"confirmationModal":{"startBridgeOn":"Commencer sur {{from}}","bridgeFrom":"Pont depuis {{from}}","proveOn":"Prouver sur {{to}}","getOn":"Obtenir sur {{to}}","getAmountOn":"Obtenir {{formatted}} sur {{to}}","waitSeconds_one":"Attendre ~{{count}} sec","waitSeconds_other":"Attendre ~{{count}} secs","waitMinutes_one":"Attendre ~{{count}} min","waitMinutes_other":"Attendre ~{{count}} mins","waitHours_one":"Attendre ~{{count}} heure","waitHours_other":"Attendre ~{{count}} heures","waitDays_one":"Attendre ~{{count}} jour","waitDays_other":"Attendre ~{{count}} jours","prove":"Prouver sur {{base}}","finalize":"R\xe9clamer sur {{to}}","receiveAmountOnChain":"Recevoir {{receiveAmount}} {{receiveSymbol}} sur {{to}}","receiveAmount":"Recevoir {{formatted}}","approve":"Approuver {{symbol}}","approveGasToken":"Approuver le token de gaz"},"tos":{"welcome":"Bienvenue sur {{name}}","poweredBy":"Propuls\xe9 par Superbridge","superbridge1":"Cette interface n\'est qu\'une couche au-dessus des contrats de pont natifs pour les rollups Superchain officiels.","superbridge2":"Superbridge ne d\xe9tient jamais de fonds en d\xe9p\xf4t.","superbridge3":"Pour obtenir de l\'aide sur le pont, rendez-vous sur <0>support & FAQs</0>.","superbridge4":"En utilisant cette interface, vous acceptez nos <0>Conditions et Politique de confidentialit\xe9</0>.","dedicated1":"Cette interface n\'est qu\'une couche au-dessus des contrats de pont natifs pour <0>{{name}}</0>.","agreeAndContinue":"Accepter et continuer","forceReadTerms":"Veuillez lire et accepter les Conditions d\'utilisation","forceReadPrivacy":"Veuillez lire et accepter la Politique de confidentialit\xe9"},"legal":{"footerButton":"Conditions & Confidentialit\xe9","title":"Conditions & Confidentialit\xe9","superbridgeTerms":"Conditions de service Superbridge","superbridgePrivacy":"Politique de confidentialit\xe9 Superbridge","dedicatedTerms":"Conditions de service {{name}}","dedicatedPrivacy":"Politique de confidentialit\xe9 {{name}}"},"noGasModal":{"youNeedGasOn":"Vous avez besoin de gaz sur {{to}}","needHelp":"Besoin d\'aide? Voir les FAQs","cctp":"Le pont de {{symbol}} n\xe9cessite une transaction suppl\xe9mentaire sur {{to}}. Veuillez recharger {{gas}} sur {{to}} pour compl\xe9ter ce pont.","opWithdrawing":"Le retrait n\xe9cessite 2 transactions suppl\xe9mentaires sur {{to}}. Veuillez recharger {{gas}} sur {{to}} pour compl\xe9ter ce retrait.","arbWithdrawing":"Le retrait de {{token}} n\xe9cessite une transaction suppl\xe9mentaire sur {{to}}. Veuillez recharger {{gas}} sur {{to}} pour compl\xe9ter ce retrait.","depositing":"Sans gaz sur {{to}}, vous ne pourrez effectuer aucune transaction. Veuillez recharger {{gas}} sur {{to}} avant de tenter ce pont.","topup":"Recharger le gaz sur {{to}}","goBack":"Retourner","proceedAnyway":"Poursuivre quand m\xeame"},"expensiveGasModal":{"title":"Les frais de r\xe9seau seront plus \xe9lev\xe9s que la valeur du token","notBestOption":"Superbridge n\'est peut-\xeatre pas la meilleure option pour ce montant. Veuillez consid\xe9rer <0>ces alternatives</0>.","bridgeAmount":"Montant du pont","networkFees":"Frais de r\xe9seau","goBack":"Retourner","proceedAnyway":"Poursuivre quand m\xeame"},"feeModal":{"providerFees":"Frais de {{provider}}","acrossFeeBreakdownDescription":"Frais pay\xe9s \xe0 <0>Across</0> et \xe0 leurs fournisseurs de liquidit\xe9 et relais","hyperlaneFeeBreakdownDescription":"Frais pay\xe9s aux relais <0>Hyperlane</0> pour la livraison des messages"},"gasInfoModal":{"title":"Frais de gaz","description":"Avec les blockchains, vous devez payer des frais pour soumettre des transactions. Les transactions soumises \xe0 {{from}} n\xe9cessitent une petite quantit\xe9 de {{symbol}} pour s\'assurer qu\'elles sont confirm\xe9es par le r\xe9seau.","opWithdrawal":"Les retraits depuis les rollups OP Stack n\xe9cessitent deux transactions suppl\xe9mentaires pour prouver et finaliser le retrait sur la cha\xeene de r\xe8glement.","arbWithdrawal":"Les retraits depuis les rollups Arbitrum Nitro n\xe9cessitent une transaction suppl\xe9mentaire pour finaliser sur la cha\xeene de r\xe8glement.","cctp":"Les ponts USDC natifs via CCTP n\xe9cessitent une transaction suppl\xe9mentaire sur la cha\xeene de destination."},"networkSelectorModal":{"title":"S\xe9lectionner un r\xe9seau"},"routeSelectorModal":{"title":"Choisir une route"},"across":{"transferTimeTitle":"Temps de transfert ultra-rapide","transferTimeDescription":"Selon la taille du pont, les temps de transfert ultra-rapides peuvent varier. Les temps ne sont que des estimations.","timeTo":"Temps pour {{to}}","feeBreakdownTitle":"Frais Across","feeBreakdownDescription":"Frais pay\xe9s \xe0 <0>Across</0> et \xe0 leurs fournisseurs de liquidit\xe9 et relais","acrossFee":"Frais Across"},"header":{"supportAndFaqs":"Support & FAQs","legal":"L\xe9gal"}}'),
                eB = JSON.parse('{"reviewBridge":"ब्रिज की समीक्षा करें","bridging":"ब्रिजिंग","connectWallet":"वॉलेट कनेक्ट करें","switchToApprove":"स्विच करें","approve":"अनुमोदित करें","insufficientFunds":"अपर्याप्त धनराशि","insufficientGas":"गैस के लिए अपर्याप्त {{symbol}}","bridgeLimit":"{{amount}} {{symbol}} की सीमा","bridgeMin":"न्यूनतम राशि {{amount}} {{symbol}}","enterAnAmount":"राशि दर्ज करें","loading":"लोड हो रहा है","loadMore":"और लोड करें","error":"त्रुटि","noAccountConnected":"कोई खाता कनेक्ट नहीं किया गया","save":"सहेजें","toAddress":"पते पर","on":"चालू","off":"बंद","receiveOnChain":"{{chain}} पर प्राप्त करें","transferTime":"स्थानांतरण समय","transferTimeSeconds_one":"~{{count}} सेकंड","transferTimeSeconds_other":"~{{count}} सेकंड","transferTimeMinutes_one":"~{{count}} मिनट","transferTimeMinutes_other":"~{{count}} मिनट","transferTimeHours_one":"~{{count}} घंटा","transferTimeHours_other":"~{{count}} घंटे","transferTimeDays_one":"~{{count}} दिन","transferTimeDays_other":"~{{count}} दिन","availableBalance":"{{amount}} {{symbol}} उपलब्ध","sorryAnErrorOccurred":"माफ़ करें! एक त्रुटि हुई है","about":"के बारे में","docs":"दस्तावेज़","from":"से","to":"को","manage":"प्रबंधित करें","support":"सहायता","ok":"ठीक है","general":{"needHelp":"मदद चाहिए? FAQs देखें"},"settings":{"settings":"सेटिंग्स","escapeHatchDescription":"निपटान श्रृंखला पर सेंसरशिप प्रतिरोधी लेन-देन के माध्यम से निकासी को मजबूर करें।","currency":"मुद्रा","language":"भाषा","explorer":"एक्सप्लोरर","tokenLists":"टोकन सूची","enableTestnets":"टेस्टनेट सक्षम करें","darkMode":"डार्क मोड"},"customTokenLists":{"add":"कस्टम टोकन सूची जोड़ें","name":"टोकन सूची नाम","namePlaceholder":"नाम","url":"टोकन सूची URL","urlPlaceholder":"URL","invalid":"अमान्य टोकन सूची URL","loadedTokens":"{{num}} टोकन लोड किए गए","disclaimer":"कोई भी टोकन बना सकता है, जिसमें नकली संस्करण शामिल हो सकते हैं। सावधानी बरतें। कुछ टोकन {{app}} सेवाओं के साथ असंगत हो सकते हैं। इस कस्टम टोकन सूची को आयात करके, आप जोखिमों को स्वीकार करते हैं।","learnMore":"जोखिमों के बारे में अधिक जानें।","save":"सूची सहेजें","delete":"सूची हटाएं"},"activity":{"activity":"गतिविधि","actionNeeded":"कार्रवाई की आवश्यकता","connectWallet":"कृपया अपना वॉलेट कनेक्ट करें...","noTransactions":"अभी तक कोई लेन-देन नहीं...","error":"माफ़ करें! हम आपकी गतिविधि नहीं देख पा रहे हैं।\\n कृपया पृष्ठ को रीफ़्रेश करें","withdrawn":"निकासी हो चुकी है","proving":"साबित किया जा रहा है...","readyToProve":"साबित करने के लिए तैयार","proved":"साबित हो चुका है","waitingForStateRoot":"स्टेट रूट का इंतजार हो रहा है...","waitingForDisputeGame":"विवाद खेल का इंतजार हो रहा है...","stateRootPublished":"स्टेट रूट प्रकाशित किया गया","challengePeriod":"चुनौती अवधि","finalizing":"अंतिम रूप दे रहा है...","readyToFinalize":"अंतिम रूप देने के लिए तैयार","finalized":"अंतिम रूप दिया गया","deposited":"जमा किया गया","depositing":"जमा हो रहा है","l2Confirmation":"L2 पुष्टि","waitingForL2":"L2 की प्रतीक्षा हो रही है...","bridged":"ब्रिज हो चुका है","bridging":"ब्रिजिंग हो रही है","minted":"मिंट किया गया","minting":"मिंट किया जा रहा है","readyToMint":"मिंट करने के लिए तैयार","waitingForAttestation":"पुष्टि का इंतजार हो रहा है...","remainingSeconds_one":"~{{count}} सेकंड शेष","remainingSeconds_other":"~{{count}} सेकंड शेष","remainingMinutes_one":"~{{count}} मिनट शेष","remainingMinutes_other":"~{{count}} मिनट शेष","remainingHours_one":"~{{count}} घंटा शेष","remainingHours_other":"~{{count}} घंटे शेष","remainingDays_one":"~{{count}} दिन शेष","remainingDays_other":"~{{count}} दिन शेष"},"tokens":{"tokens":"टोकन","selectToken":"टोकन चुनें","noneFound":"कोई परिणाम नहीं मिला","notBridgeable":"ब्रिज नहीं किया जा सकता","import":"आयात करें","customImport":"कस्टम आयात","customImportFromList":"{{name}} से","customImportCheck":"सुनिश्चित करें कि आपने टोकन पते की जांच की है और यह सही है:","customL1Address":"L1 पता","customL2Address":"L2 पता","customL3Address":"L3 पता"},"recipient":{"bridgeDestination":"ब्रिज गंतव्य","toAddress":"पते पर","invalidAddress":"अमान्य पता","yourChainAddress":"यह आपका {{chain}} पता है","usedBefore":"पहले इस्तेमाल किया गया खाता","usedBeforeMultiple":"{{count}} बार पहले इस्तेमाल किया गया","newAddress":"नया पता - कृपया सावधानी बरतें!","checkingAddress":"पता की जांच हो रही है...","addRecipientAddress":"प्राप्तकर्ता का पता जोड़ें","pleaseNote":"कृपया ध्यान दें","sameAddressRequirement":"{{chain}} से या {{chain}} पर जाने के लिए एक ही प्राप्तकर्ता पता होना चाहिए।","checkRecipientAddress":"प्राप्तकर्ता का पता जांचें"},"buttons":{"start":"प्रारंभ करें","finalize":"अंतिम रूप दें","claim":"दावा करें","prove":"साबित करें","redeem":"भुनाएं","switchChain":"चेन स्विच करें","mint":"मिंट करें","get":"प्राप्त करें","continue":"जारी रखें","approve":"अनुमोदन करें","approved":"अनुमोदित","approving":"अनुमोदन हो रहा है","max":"अधिकतम","bridgingDisabled":"ब्रिजिंग अक्षम","bridgingPaused":"ब्रिजिंग रोकी गई","reset":"रीसेट करें"},"fees":{"fees":"नेटवर्क शुल्क","networkGas":"{{chain}} गैस","easyModeFee":"आसान मोड गैस"},"poweredBy":"{{name}} द्वारा संचालित","transaction":{"via":"के माध्यम से","transferTime":"स्थानांतरण समय","steps":"चरण","bridgeInfo":"ब्रिज जानकारी","fromChain":"{{from}} से","toChain":"{{to}} तक","fromAddress":"पते से","toAddress":"पते तक"},"confirmationModal":{"startBridgeOn":"{{from}} पर प्रारंभ करें","bridgeFrom":"{{from}} से ब्रिज करें","proveOn":"{{to}} पर साबित करें","getOn":"{{to}} पर प्राप्त करें","getAmountOn":"{{to}} पर {{formatted}} प्राप्त करें","waitSeconds_one":"~{{count}} सेकंड प्रतीक्षा करें","waitSeconds_other":"~{{count}} सेकंड प्रतीक्षा करें","waitMinutes_one":"~{{count}} मिनट प्रतीक्षा करें","waitMinutes_other":"~{{count}} मिनट प्रतीक्षा करें","waitHours_one":"~{{count}} घंटा प्रतीक्षा करें","waitHours_other":"~{{count}} घंटे प्रतीक्षा करें","waitDays_one":"~{{count}} दिन प्रतीक्षा करें","waitDays_other":"~{{count}} दिन प्रतीक्षा करें","prove":"{{base}} पर साबित करें","finalize":"{{to}} पर दावा करें","receiveAmountOnChain":"{{to}} पर {{receiveAmount}} {{receiveSymbol}} प्राप्त करें","receiveAmount":"{{formatted}} प्राप्त करें","approve":"{{symbol}} अनुमोदित करें","approveGasToken":"गैस टोकन अनुमोदित करें"},"tos":{"welcome":"{{name}} में आपका स्वागत है","poweredBy":"Superbridge द्वारा संचालित","superbridge1":"यह इंटरफेस केवल आधिकारिक Superchain रोलअप के लिए देशी ब्रिज अनुबंधों की एक परत है।","superbridge2":"Superbridge किसी भी समय कोई धनराशि नहीं रखता है।","superbridge3":"ब्रिजिंग सहायता के लिए कृपया <0>सहायता और FAQs</0> देखें।","superbridge4":"इस इंटरफेस का उपयोग करके आप हमारी <0>शर्तों और गोपनीयता नीति</0> से सहमत होते हैं।","dedicated1":"यह इंटरफेस केवल <0>{{name}}</0> के लिए देशी ब्रिज अनुबंधों की एक परत है।","agreeAndContinue":"सहमत हूँ और जारी रखें","forceReadTerms":"कृपया सेवा की शर्तें पढ़ें और सहमत हों","forceReadPrivacy":"कृपया गोपनीयता नीति पढ़ें और सहमत हों"},"legal":{"footerButton":"शर्तें और गोपनीयता","title":"शर्तें और गोपनीयता","superbridgeTerms":"Superbridge सेवा की शर्तें","superbridgePrivacy":"Superbridge गोपनीयता नीति","dedicatedTerms":"{{name}} सेवा की शर्तें","dedicatedPrivacy":"{{name}} गोपनीयता नीति"},"noGasModal":{"youNeedGasOn":"{{to}} पर गैस की आवश्यकता है","needHelp":"मदद चाहिए? FAQs देखें","cctp":"{{symbol}} के ब्रिज के लिए {{to}} पर एक अतिरिक्त लेन-देन की आवश्यकता है। इस ब्रिज को पूरा करने के लिए कृपया {{to}} पर {{gas}} जोड़ें।","opWithdrawing":"{{to}} पर निकासी के लिए 2 अतिरिक्त लेन-देन की आवश्यकता होती है। कृपया इस निकासी को पूरा करने के लिए {{to}} पर {{gas}} जोड़ें।","arbWithdrawing":"{{token}} निकासी के लिए {{to}} पर एक अतिरिक्त लेन-देन की आवश्यकता होती है। कृपया {{to}} पर {{gas}} जोड़ें।","depositing":"{{to}} पर गैस के बिना आप कोई लेन-देन नहीं कर पाएंगे। कृपया इस ब्रिज का प्रयास करने से पहले {{to}} पर {{gas}} जोड़ें।","topup":"{{to}} पर गैस टॉप-अप करें","goBack":"वापस जाएं","proceedAnyway":"फिर भी जारी रखें"},"expensiveGasModal":{"title":"नेटवर्क शुल्क टोकन मूल्य से अधिक होगा","notBestOption":"Superbridge इस ब्रिज राशि के लिए सबसे अच्छा विकल्प नहीं हो सकता है। कृपया <0>इन वैकल्पिक ब्रिजों</0> पर विचार करें।","bridgeAmount":"ब्रिज राशि","networkFees":"नेटवर्क शुल्क","goBack":"वापस जाएं","proceedAnyway":"फिर भी जारी रखें"},"feeModal":{"providerFees":"{{provider}} शुल्क","acrossFeeBreakdownDescription":"<0>Across</0> और उनके तरलता प्रदाताओं और रिलेयर्स को भुगतान की गई फीस","hyperlaneFeeBreakdownDescription":"<0>Hyperlane</0> रिलेयर्स को संदेश वितरण के लिए भुगतान की गई फीस"},"gasInfoModal":{"title":"गैस शुल्क","description":"ब्लॉकचेन के साथ, आपको लेन-देन जमा करने के लिए शुल्क का भुगतान करना पड़ता है। {{from}} पर जमा किए गए लेन-देन को सुनिश्चित करने के लिए {{symbol}} की थोड़ी मात्रा की आवश्यकता होती है।","opWithdrawal":"OP Stack रोलअप से निकासी को साबित करने और निपटान श्रृंखला पर अंतिम रूप देने के लिए दो अतिरिक्त लेन-देन की आवश्यकता होती है।","arbWithdrawal":"Arbitrum Nitro रोलअप से निकासी को निपटान श्रृंखला पर अंतिम रूप देने के लिए एक अतिरिक्त लेन-देन की आवश्यकता होती है।","cctp":"CCTP के माध्यम से देशी USDC ब्रिज के लिए गंतव्य श्रृंखला पर एक अतिरिक्त लेन-देन की आवश्यकता होती है।"},"networkSelectorModal":{"title":"नेटवर्क चुनें"},"routeSelectorModal":{"title":"रूट चुनें"},"across":{"transferTimeTitle":"सुपरफास्ट स्थानांतरण समय","transferTimeDescription":"ब्रिज के आकार के आधार पर, सुपरफास्ट स्थानांतरण समय भिन्न हो सकता है। समय केवल अनुमान हैं।","timeTo":"{{to}} के लिए समय","feeBreakdownTitle":"Across शुल्क","feeBreakdownDescription":"<0>Across</0> और उनके तरलता प्रदाताओं और रिलेयर्स को भुगतान की गई फीस","acrossFee":"Across शुल्क"},"header":{"supportAndFaqs":"सहायता और FAQs","legal":"कानूनी"}}'),
                eN = JSON.parse('{"reviewBridge":"Tinjau jembatan","bridging":"Menjembatani","connectWallet":"Hubungkan dompet","switchToApprove":"Beralih","approve":"Setujui","insufficientFunds":"Dana tidak mencukupi","insufficientGas":"{{symbol}} tidak cukup untuk gas","bridgeLimit":"Batas {{amount}} {{symbol}}","bridgeMin":"Jumlah minimum {{amount}} {{symbol}}","enterAnAmount":"Masukkan jumlah","loading":"Memuat","loadMore":"Muat lebih banyak","error":"Kesalahan","noAccountConnected":"Tidak ada akun yang terhubung","save":"Simpan","toAddress":"Ke alamat","on":"aktif","off":"mati","receiveOnChain":"Terima di {{chain}}","transferTime":"Waktu transfer","transferTimeSeconds_one":"~{{count}} detik","transferTimeSeconds_other":"~{{count}} detik","transferTimeMinutes_one":"~{{count}} menit","transferTimeMinutes_other":"~{{count}} menit","transferTimeHours_one":"~{{count}} jam","transferTimeHours_other":"~{{count}} jam","transferTimeDays_one":"~{{count}} hari","transferTimeDays_other":"~{{count}} hari","availableBalance":"{{amount}} {{symbol}} tersedia","sorryAnErrorOccurred":"Maaf! Terjadi kesalahan","about":"Tentang","docs":"Dokumen","from":"Dari","to":"Ke","manage":"Kelola","support":"Dukungan","ok":"Oke","general":{"needHelp":"Butuh bantuan? Lihat FAQ"},"settings":{"settings":"Pengaturan","escapeHatchDescription":"Paksa penarikan melalui transaksi tahan sensor pada rantai penyelesaian.","currency":"Mata uang","language":"Bahasa","explorer":"Penjelajah","tokenLists":"Daftar token","enableTestnets":"Aktifkan testnet","darkMode":"Mode gelap"},"customTokenLists":{"add":"Tambah daftar token khusus","name":"Nama daftar token","namePlaceholder":"Nama","url":"URL daftar token","urlPlaceholder":"URL","invalid":"URL daftar token tidak valid","loadedTokens":"{{num}} token dimuat","disclaimer":"Siapa saja bisa membuat token, termasuk versi palsu dari token yang sudah ada. Harap berhati-hati. Beberapa token dan parameter teknisnya mungkin tidak kompatibel dengan layanan {{app}}. Dengan mengimpor daftar token khusus ini, Anda mengakui dan menerima risikonya.","learnMore":"Pelajari lebih lanjut tentang risikonya.","save":"Simpan daftar","delete":"Hapus daftar"},"activity":{"activity":"Aktivitas","actionNeeded":"Tindakan diperlukan","connectWallet":"Silakan hubungkan dompet Anda...","noTransactions":"Belum ada transaksi...","error":"Maaf! Kami tidak dapat mengambil aktivitas Anda.\\nSilakan coba segarkan halaman","withdrawn":"Telah ditarik","proving":"Membuktikan...","readyToProve":"Siap untuk dibuktikan","proved":"Telah terbukti","waitingForStateRoot":"Menunggu root status...","waitingForDisputeGame":"Menunggu permainan sengketa...","stateRootPublished":"Root status diterbitkan","challengePeriod":"Periode tantangan","finalizing":"Menyelesaikan...","readyToFinalize":"Siap untuk menyelesaikan","finalized":"Telah selesai","deposited":"Telah disetor","depositing":"Menyetor","l2Confirmation":"Konfirmasi L2","waitingForL2":"Menunggu L2...","bridged":"Telah dijembatani","bridging":"Menjembatani","minted":"Telah dicetak","minting":"Mencetak","readyToMint":"Siap untuk mencetak","waitingForAttestation":"Menunggu atestasi...","remainingSeconds_one":"~{{count}} detik tersisa","remainingSeconds_other":"~{{count}} detik tersisa","remainingMinutes_one":"~{{count}} menit tersisa","remainingMinutes_other":"~{{count}} menit tersisa","remainingHours_one":"~{{count}} jam tersisa","remainingHours_other":"~{{count}} jam tersisa","remainingDays_one":"~{{count}} hari tersisa","remainingDays_other":"~{{count}} hari tersisa"},"tokens":{"tokens":"Token","selectToken":"Pilih token","noneFound":"Tidak ada hasil","notBridgeable":"Tidak bisa dijembatani","import":"Impor","customImport":"Impor khusus","customImportFromList":"Dari {{name}}","customImportCheck":"Pastikan Anda telah memeriksa alamat token dan itu benar:","customL1Address":"Alamat L1","customL2Address":"Alamat L2","customL3Address":"Alamat L3"},"recipient":{"bridgeDestination":"Tujuan jembatan","toAddress":"Ke alamat","invalidAddress":"Alamat tidak valid","yourChainAddress":"Ini adalah alamat {{chain}} Anda","usedBefore":"Akun digunakan sebelumnya","usedBeforeMultiple":"Akun digunakan {{count}} kali sebelumnya","newAddress":"Alamat baru - harap hati-hati!","checkingAddress":"Memeriksa alamat...","addRecipientAddress":"Tambahkan alamat penerima","pleaseNote":"Harap diperhatikan","sameAddressRequirement":"Jembatan ke atau dari {{chain}} harus memiliki alamat penerima yang sama.","checkRecipientAddress":"Periksa alamat penerima"},"buttons":{"start":"Mulai","finalize":"Selesaikan","claim":"Klaim","prove":"Buktikan","redeem":"Tebus","switchChain":"Beralih rantai","mint":"Mencetak","get":"Dapatkan","continue":"Lanjutkan","approve":"Setujui","approved":"Disetujui","approving":"Menyetujui","max":"Maks","bridgingDisabled":"Jembatan dinonaktifkan","bridgingPaused":"Jembatan dijeda","reset":"Atur ulang"},"fees":{"fees":"Biaya jaringan","networkGas":"Gas {{chain}}","easyModeFee":"Gas mode mudah"},"poweredBy":"Ditenagai oleh {{name}}","transaction":{"via":"Melalui","transferTime":"Waktu transfer","steps":"Langkah","bridgeInfo":"Info jembatan","fromChain":"Dari {{from}}","toChain":"Ke {{to}}","fromAddress":"Dari alamat","toAddress":"Ke alamat"},"confirmationModal":{"startBridgeOn":"Mulai di {{from}}","bridgeFrom":"Jembatani dari {{from}}","proveOn":"Buktikan di {{to}}","getOn":"Dapatkan di {{to}}","getAmountOn":"Dapatkan {{formatted}} di {{to}}","waitSeconds_one":"Tunggu ~{{count}} detik","waitSeconds_other":"Tunggu ~{{count}} detik","waitMinutes_one":"Tunggu ~{{count}} menit","waitMinutes_other":"Tunggu ~{{count}} menit","waitHours_one":"Tunggu ~{{count}} jam","waitHours_other":"Tunggu ~{{count}} jam","waitDays_one":"Tunggu ~{{count}} hari","waitDays_other":"Tunggu ~{{count}} hari","prove":"Buktikan di {{base}}","finalize":"Klaim di {{to}}","receiveAmountOnChain":"Terima {{receiveAmount}} {{receiveSymbol}} di {{to}}","receiveAmount":"Terima {{formatted}}","approve":"Setujui {{symbol}}","approveGasToken":"Setujui token gas"},"tos":{"welcome":"Selamat datang di {{name}}","poweredBy":"Ditenagai oleh Superbridge","superbridge1":"Antarmuka ini hanyalah lapisan di atas kontrak jembatan asli untuk rollup Superchain resmi.","superbridge2":"Superbridge tidak pernah menahan dana apa pun.","superbridge3":"Untuk bantuan dengan jembatan, silakan kunjungi <0>dukungan & FAQ</0>.","superbridge4":"Dengan menggunakan antarmuka ini, Anda menyetujui <0>Syarat dan Kebijakan Privasi</0> kami.","dedicated1":"Antarmuka ini hanyalah lapisan di atas kontrak jembatan asli untuk <0>{{name}}</0>.","agreeAndContinue":"Setuju & lanjutkan","forceReadTerms":"Harap baca dan setujui Syarat Layanan","forceReadPrivacy":"Harap baca dan setujui Kebijakan Privasi"},"legal":{"footerButton":"Syarat & Privasi","title":"Syarat & Privasi","superbridgeTerms":"Syarat Layanan Superbridge","superbridgePrivacy":"Kebijakan Privasi Superbridge","dedicatedTerms":"Syarat Layanan {{name}}","dedicatedPrivacy":"Kebijakan Privasi {{name}}"},"noGasModal":{"youNeedGasOn":"Anda membutuhkan gas di {{to}}","needHelp":"Butuh bantuan? Lihat FAQ","cctp":"Menjembatani {{symbol}} memerlukan transaksi tambahan di {{to}}. Silakan isi {{gas}} di {{to}} untuk menyelesaikan jembatan ini.","opWithdrawing":"Penarikan memerlukan 2 transaksi tambahan di {{to}}. Silakan isi {{gas}} di {{to}} untuk menyelesaikan penarikan ini.","arbWithdrawing":"Penarikan {{token}} memerlukan transaksi tambahan di {{to}}. Silakan isi {{gas}} di {{to}} untuk menyelesaikan penarikan ini.","depositing":"Tanpa gas di {{to}}, Anda tidak akan dapat melakukan transaksi apa pun. Silakan isi {{gas}} di {{to}} sebelum mencoba menjembatani ini.","topup":"Isi gas di {{to}}","goBack":"Kembali","proceedAnyway":"Lanjutkan tetap"},"expensiveGasModal":{"title":"Biaya jaringan lebih tinggi daripada nilai token","notBestOption":"Superbridge mungkin bukan pilihan terbaik untuk jumlah ini. Pertimbangkan <0>jembatan alternatif ini</0>.","bridgeAmount":"Jumlah jembatan","networkFees":"Biaya jaringan","goBack":"Kembali","proceedAnyway":"Lanjutkan tetap"},"feeModal":{"providerFees":"Biaya {{provider}}","acrossFeeBreakdownDescription":"Biaya dibayarkan kepada <0>Across</0> dan penyedia likuiditas serta relay mereka","hyperlaneFeeBreakdownDescription":"Biaya dibayarkan kepada relay <0>Hyperlane</0> untuk pengiriman pesan"},"gasInfoModal":{"title":"Biaya gas","description":"Dengan blockchain, Anda perlu membayar biaya untuk mengirimkan transaksi. Transaksi yang dikirim ke {{from}} memerlukan sejumlah kecil {{symbol}} untuk memastikan transaksi tersebut dikonfirmasi oleh jaringan.","opWithdrawal":"Penarikan dari OP Stack rollup memerlukan dua transaksi tambahan untuk membuktikan dan menyelesaikan penarikan di rantai penyelesaian.","arbWithdrawal":"Penarikan dari Arbitrum Nitro rollup memerlukan transaksi tambahan untuk menyelesaikan penarikan di rantai penyelesaian.","cctp":"Jembatan USDC asli melalui CCTP memerlukan transaksi tambahan di rantai tujuan."},"networkSelectorModal":{"title":"Pilih jaringan"},"routeSelectorModal":{"title":"Pilih rute"},"across":{"transferTimeTitle":"Waktu transfer sangat cepat","transferTimeDescription":"Bergantung pada ukuran jembatan, waktu transfer sangat cepat bisa bervariasi. Waktu adalah perkiraan saja.","timeTo":"Waktu ke {{to}}","feeBreakdownTitle":"Biaya Across","feeBreakdownDescription":"Biaya dibayarkan kepada <0>Across</0> dan penyedia likuiditas serta relay mereka","acrossFee":"Biaya Across"},"header":{"supportAndFaqs":"Dukungan & FAQ","legal":"Legal"}}'),
                ej = JSON.parse('{"reviewBridge":"ブリッジの確認","bridging":"ブリッジ中","connectWallet":"ウォレットを接続","switchToApprove":"切り替え","approve":"承認","insufficientFunds":"残高不足","insufficientGas":"ガスの{{symbol}}が不足しています","bridgeLimit":"上限 {{amount}} {{symbol}}","bridgeMin":"最小額 {{amount}} {{symbol}}","enterAnAmount":"金額を入力","loading":"読み込み中","loadMore":"さらに読み込む","error":"エラー","noAccountConnected":"アカウントが接続されていません","save":"保存","toAddress":"宛先アドレス","on":"オン","off":"オフ","receiveOnChain":"{{chain}}で受け取る","transferTime":"転送時間","transferTimeSeconds_one":"約{{count}}秒","transferTimeSeconds_other":"約{{count}}秒","transferTimeMinutes_one":"約{{count}}分","transferTimeMinutes_other":"約{{count}}分","transferTimeHours_one":"約{{count}}時間","transferTimeHours_other":"約{{count}}時間","transferTimeDays_one":"約{{count}}日","transferTimeDays_other":"約{{count}}日","availableBalance":"{{amount}} {{symbol}} 利用可能","sorryAnErrorOccurred":"申し訳ありません！エラーが発生しました","about":"概要","docs":"ドキュメント","from":"送信元","to":"送信先","manage":"管理","support":"サポート","ok":"OK","general":{"needHelp":"助けが必要ですか？よくある質問を見る"},"settings":{"settings":"設定","escapeHatchDescription":"決済チェーン上で検閲耐性のあるトランザクションを通じて強制的に引き出します。","currency":"通貨","language":"言語","explorer":"エクスプローラー","tokenLists":"トークンリスト","enableTestnets":"テストネットを有効にする","darkMode":"ダークモード"},"customTokenLists":{"add":"カスタムトークンリストを追加","name":"トークンリスト名","namePlaceholder":"名前","url":"トークンリストURL","urlPlaceholder":"URL","invalid":"無効なトークンリストURL","loadedTokens":"{{num}}トークンが読み込まれました","disclaimer":"誰でもトークンを作成でき、既存のトークンの偽バージョンを含むことがあります。注意が必要です。一部のトークンおよびその技術的パラメータは、{{app}}サービスと互換性がない場合があります。このカスタムトークンリストをインポートすることにより、リスクを認識し、承諾することになります。","learnMore":"リスクについて詳しくはこちら。","save":"リストを保存","delete":"リストを削除"},"activity":{"activity":"アクティビティ","actionNeeded":"アクションが必要です","connectWallet":"ウォレットを接続してください...","noTransactions":"まだトランザクションがありません...","error":"申し訳ありません！アクティビティを取得できません。\\n ページを更新してもう一度お試しください","withdrawn":"出金済み","proving":"証明中...","readyToProve":"証明の準備ができました","proved":"証明済み","waitingForStateRoot":"状態ルートを待機中...","waitingForDisputeGame":"紛争ゲームを待機中...","stateRootPublished":"状態ルートが公開されました","challengePeriod":"チャレンジ期間","finalizing":"最終処理中...","readyToFinalize":"最終処理の準備ができました","finalized":"最終処理完了","deposited":"入金済み","depositing":"入金中","l2Confirmation":"L2確認","waitingForL2":"L2を待機中...","bridged":"ブリッジ完了","bridging":"ブリッジ中","minted":"ミント済み","minting":"ミント中","readyToMint":"ミントの準備ができました","waitingForAttestation":"証明を待機中...","remainingSeconds_one":"残り~{{count}}秒","remainingSeconds_other":"残り~{{count}}秒","remainingMinutes_one":"残り~{{count}}分","remainingMinutes_other":"残り~{{count}}分","remainingHours_one":"残り~{{count}}時間","remainingHours_other":"残り~{{count}}時間","remainingDays_one":"残り~{{count}}日","remainingDays_other":"残り~{{count}}日"},"tokens":{"tokens":"トークン","selectToken":"トークンを選択","noneFound":"結果が見つかりませんでした","notBridgeable":"ブリッジ不可","import":"インポート","customImport":"カスタムインポート","customImportFromList":"{{name}}から","customImportCheck":"トークンアドレスが正しいかどうかを確認してください:","customL1Address":"L1アドレス","customL2Address":"L2アドレス","customL3Address":"L3アドレス"},"recipient":{"bridgeDestination":"ブリッジの宛先","toAddress":"宛先アドレス","invalidAddress":"無効なアドレス","yourChainAddress":"これはあなたの{{chain}}アドレスです","usedBefore":"以前に使用されたアカウント","usedBeforeMultiple":"アカウントは以前に{{count}}回使用されました","newAddress":"新しいアドレスです - 注意してください！","checkingAddress":"アドレスを確認中...","addRecipientAddress":"受信者アドレスを追加","pleaseNote":"ご注意ください","sameAddressRequirement":"{{chain}} へのブリッジは同じ受取人アドレスである必要があります。","checkRecipientAddress":"受取人のアドレスを確認"},"buttons":{"start":"開始","finalize":"最終処理","claim":"請求","prove":"証明","redeem":"引き換え","switchChain":"チェーンを切り替え","mint":"ミント","get":"取得","continue":"続行","approve":"承認","approved":"承認済み","approving":"承認中","max":"最大","bridgingDisabled":"ブリッジ無効","bridgingPaused":"ブリッジ一時停止中","reset":"リセット"},"fees":{"fees":"ネットワーク料金","networkGas":"{{chain}}ガス","easyModeFee":"簡単モードガス"},"poweredBy":"{{name}}提供","transaction":{"via":"経由","transferTime":"転送時間","steps":"ステップ","bridgeInfo":"ブリッジ情報","fromChain":"{{from}}から","toChain":"{{to}}へ","fromAddress":"送信元アドレス","toAddress":"宛先アドレス"},"confirmationModal":{"startBridgeOn":"{{from}}で開始","bridgeFrom":"{{from}}からブリッジ","proveOn":"{{to}}で証明","getOn":"{{to}}で取得","getAmountOn":"{{formatted}}を{{to}}で取得","waitSeconds_one":"約{{count}}秒待機","waitSeconds_other":"約{{count}}秒待機","waitMinutes_one":"約{{count}}分待機","waitMinutes_other":"約{{count}}分待機","waitHours_one":"約{{count}}時間待機","waitHours_other":"約{{count}}時間待機","waitDays_one":"約{{count}}日待機","waitDays_other":"約{{count}}日待機","prove":"{{base}}で証明","finalize":"{{to}}で請求","receiveAmountOnChain":"{{to}}で{{receiveAmount}} {{receiveSymbol}}を受け取る","receiveAmount":"{{formatted}}を受け取る","approve":"{{symbol}}を承認","approveGasToken":"ガストークンを承認"},"tos":{"welcome":"{{name}}へようこそ","poweredBy":"Superbridge提供","superbridge1":"このインターフェースは、公式Superchainロールアップ用のネイティブブリッジ契約の上にあるレイヤーに過ぎません。","superbridge2":"Superbridgeは資金を保持しません。","superbridge3":"ブリッジのサポートについては、<0>サポート & FAQ</0>をご覧ください。","superbridge4":"このインターフェースを使用することで、<0>利用規約およびプライバシーポリシー</0>に同意したことになります。","dedicated1":"このインターフェースは、<0>{{name}}</0>用のネイティブブリッジ契約の上にあるレイヤーに過ぎません。","agreeAndContinue":"同意して続行","forceReadTerms":"利用規約を読み、同意してください","forceReadPrivacy":"プライバシーポリシーを読み、同意してください"},"legal":{"footerButton":"利用規約 & プライバシー","title":"利用規約 & プライバシー","superbridgeTerms":"Superbridge利用規約","superbridgePrivacy":"Superbridgeプライバシーポリシー","dedicatedTerms":"{{name}}利用規約","dedicatedPrivacy":"{{name}}プライバシーポリシー"},"noGasModal":{"youNeedGasOn":"{{to}}でガスが必要です","needHelp":"助けが必要ですか？FAQを見る","cctp":"{{symbol}}のブリッジには、{{to}}で追加のトランザクションが必要です。このブリッジを完了するには、{{to}}で{{gas}}を補充してください。","opWithdrawing":"引き出しには、{{to}}で2つの追加トランザクションが必要です。この引き出しを完了するには、{{to}}で{{gas}}を補充してください。","arbWithdrawing":"{{token}}の引き出しには、{{to}}で追加のトランザクションが必要です。この引き出しを完了するには、{{to}}で{{gas}}を補充してください。","depositing":"{{to}}でガスがないとトランザクションを行うことができません。このブリッジを試みる前に、{{to}}で{{gas}}を補充してください。","topup":"{{to}}でガスを補充","goBack":"戻る","proceedAnyway":"とにかく進める"},"expensiveGasModal":{"title":"ネットワーク料金がトークンの価値を超えます","notBestOption":"Superbridgeはこのブリッジ額に最適ではないかもしれません。<0>これらの代替ブリッジ</0>を検討してください。","bridgeAmount":"ブリッジ額","networkFees":"ネットワーク料金","goBack":"戻る","proceedAnyway":"とにかく進める"},"feeModal":{"providerFees":"{{provider}}料金","acrossFeeBreakdownDescription":"<0>Across</0>とその流動性プロバイダーおよびリレー担当者に支払われる料金","hyperlaneFeeBreakdownDescription":"<0>Hyperlane</0>リレー担当者に支払われるメッセージ配信の料金"},"gasInfoModal":{"title":"ガス料金","description":"ブロックチェーンでは、トランザクションを送信するために料金を支払う必要があります。{{from}}に送信されるトランザクションには、ネットワークによって確認されるために少量の{{symbol}}が必要です。","opWithdrawal":"OP Stackロールアップからの引き出しには、決済チェーン上で引き出しを証明し、最終処理するために2つの追加トランザクションが必要です。","arbWithdrawal":"Arbitrum Nitroロールアップからの引き出しには、決済チェーン上で最終処理するために追加のトランザクションが必要です。","cctp":"CCTP経由のネイティブUSDCブリッジには、宛先チェーンで追加のトランザクションが必要です。"},"networkSelectorModal":{"title":"ネットワークを選択"},"routeSelectorModal":{"title":"ルートを選択"},"across":{"transferTimeTitle":"超高速転送時間","transferTimeDescription":"ブリッジの規模に応じて、超高速転送時間は異なる場合があります。時間はあくまで目安です。","timeTo":"{{to}}までの時間","feeBreakdownTitle":"Across料金","feeBreakdownDescription":"<0>Across</0>とその流動性プロバイダーおよびリレー担当者に支払われる料金","acrossFee":"Across料金"},"header":{"supportAndFaqs":"サポート & FAQ","legal":"法的情報"}}'),
                eI = JSON.parse('{"reviewBridge":"브릿지 검토","bridging":"브릿징 중","connectWallet":"지갑 연결","switchToApprove":"전환","approve":"승인","insufficientFunds":"잔액 부족","insufficientGas":"{{symbol}}의 가스가 부족합니다","bridgeLimit":"{{amount}} {{symbol}} 한도","bridgeMin":"최소 금액 {{amount}} {{symbol}}","enterAnAmount":"금액 입력","loading":"로드 중","loadMore":"더 보기","error":"오류","noAccountConnected":"연결된 계정 없음","save":"저장","toAddress":"받는 주소","on":"켜짐","off":"꺼짐","receiveOnChain":"{{chain}}에서 받기","transferTime":"전송 시간","transferTimeSeconds_one":"약 {{count}}초","transferTimeSeconds_other":"약 {{count}}초","transferTimeMinutes_one":"약 {{count}}분","transferTimeMinutes_other":"약 {{count}}분","transferTimeHours_one":"약 {{count}}시간","transferTimeHours_other":"약 {{count}}시간","transferTimeDays_one":"약 {{count}}일","transferTimeDays_other":"약 {{count}}일","availableBalance":"사용 가능한 {{amount}} {{symbol}}","sorryAnErrorOccurred":"죄송합니다! 오류가 발생했습니다","about":"정보","docs":"문서","from":"발신","to":"수신","manage":"관리","support":"지원","ok":"확인","general":{"needHelp":"도움이 필요하신가요? FAQ를 확인하세요"},"settings":{"settings":"설정","escapeHatchDescription":"결제 체인에서 검열 저항 트랜잭션을 통해 강제 출금.","currency":"통화","language":"언어","explorer":"탐색기","tokenLists":"토큰 목록","enableTestnets":"테스트넷 활성화","darkMode":"다크 모드"},"customTokenLists":{"add":"맞춤 토큰 목록 추가","name":"토큰 목록 이름","namePlaceholder":"이름","url":"토큰 목록 URL","urlPlaceholder":"URL","invalid":"잘못된 토큰 목록 URL","loadedTokens":"{{num}}개의 토큰 로드됨","disclaimer":"누구나 토큰을 생성할 수 있으며, 기존 토큰의 가짜 버전도 포함될 수 있습니다. 주의하십시오. 일부 토큰 및 기술적 매개변수는 {{app}} 서비스와 호환되지 않을 수 있습니다. 이 맞춤 토큰 목록을 가져오면 리스크를 인지하고 수락하게 됩니다.","learnMore":"리스크에 대해 자세히 알아보세요.","save":"목록 저장","delete":"목록 삭제"},"activity":{"activity":"활동","actionNeeded":"조치 필요","connectWallet":"지갑을 연결해 주세요...","noTransactions":"아직 거래가 없습니다...","error":"죄송합니다! 활동 기록을 가져올 수 없습니다.\\n페이지를 새로고침해 주세요","withdrawn":"출금됨","proving":"증명 중...","readyToProve":"증명 준비 완료","proved":"증명됨","waitingForStateRoot":"상태 루트 대기 중...","waitingForDisputeGame":"분쟁 처리 대기 중...","stateRootPublished":"상태 루트가 게시되었습니다","challengePeriod":"도전 기간","finalizing":"최종 처리 중...","readyToFinalize":"최종 처리 준비 완료","finalized":"최종 처리됨","deposited":"입금됨","depositing":"입금 중","l2Confirmation":"L2 확인","waitingForL2":"L2 대기 중...","bridged":"브릿징 완료","bridging":"브릿징 중","minted":"발행됨","minting":"발행 중","readyToMint":"발행 준비 완료","waitingForAttestation":"증명 대기 중...","remainingSeconds_one":"약 {{count}}초 남음","remainingSeconds_other":"약 {{count}}초 남음","remainingMinutes_one":"약 {{count}}분 남음","remainingMinutes_other":"약 {{count}}분 남음","remainingHours_one":"약 {{count}}시간 남음","remainingHours_other":"약 {{count}}시간 남음","remainingDays_one":"약 {{count}}일 남음","remainingDays_other":"약 {{count}}일 남음"},"tokens":{"tokens":"토큰","selectToken":"토큰 선택","noneFound":"결과를 찾을 수 없음","notBridgeable":"브릿징 불가","import":"가져오기","customImport":"맞춤 가져오기","customImportFromList":"{{name}}에서 가져오기","customImportCheck":"토큰 주소를 확인하고 정확한지 확인하십시오:","customL1Address":"L1 주소","customL2Address":"L2 주소","customL3Address":"L3 주소"},"recipient":{"bridgeDestination":"브릿지 목적지","toAddress":"받는 주소","invalidAddress":"잘못된 주소","yourChainAddress":"이것은 당신의 {{chain}} 주소입니다","usedBefore":"이전에 사용한 계정","usedBeforeMultiple":"이전에 {{count}}번 사용된 계정","newAddress":"새로운 주소 - 주의하세요!","checkingAddress":"주소 확인 중...","addRecipientAddress":"받는 주소 추가","pleaseNote":"참고하십시오","sameAddressRequirement":"{{chain}}에서 보내거나 받는 경우 동일한 수신 주소여야 합니다.","checkRecipientAddress":"수신 주소 확인"},"buttons":{"start":"시작","finalize":"최종 처리","claim":"청구","prove":"증명","redeem":"상환","switchChain":"체인 전환","mint":"발행","get":"획득","continue":"계속","approve":"승인","approved":"승인 완료","approving":"승인 중","max":"최대","bridgingDisabled":"브릿징 비활성화","bridgingPaused":"브릿징 일시 중지","reset":"재설정"},"fees":{"fees":"네트워크 수수료","networkGas":"{{chain}} 가스","easyModeFee":"간편 모드 가스"},"poweredBy":"{{name}} 제공","transaction":{"via":"경유","transferTime":"전송 시간","steps":"단계","bridgeInfo":"브릿지 정보","fromChain":"{{from}}에서","toChain":"{{to}}으로","fromAddress":"발신 주소","toAddress":"수신 주소"},"confirmationModal":{"startBridgeOn":"{{from}}에서 시작","bridgeFrom":"{{from}}에서 브릿징","proveOn":"{{to}}에서 증명","getOn":"{{to}}에서 획득","getAmountOn":"{{to}}에서 {{formatted}} 획득","waitSeconds_one":"약 {{count}}초 기다리세요","waitSeconds_other":"약 {{count}}초 기다리세요","waitMinutes_one":"약 {{count}}분 기다리세요","waitMinutes_other":"약 {{count}}분 기다리세요","waitHours_one":"약 {{count}}시간 기다리세요","waitHours_other":"약 {{count}}시간 기다리세요","waitDays_one":"약 {{count}}일 기다리세요","waitDays_other":"약 {{count}}일 기다리세요","prove":"{{base}}에서 증명","finalize":"{{to}}에서 청구","receiveAmountOnChain":"{{to}}에서 {{receiveAmount}} {{receiveSymbol}} 수신","receiveAmount":"{{formatted}} 수신","approve":"{{symbol}} 승인","approveGasToken":"가스 토큰 승인"},"tos":{"welcome":"{{name}}에 오신 것을 환영합니다","poweredBy":"Superbridge 제공","superbridge1":"이 인터페이스는 공식 Superchain 롤업용 기본 브릿지 계약의 상단에 있는 레이어일 뿐입니다.","superbridge2":"Superbridge는 어떠한 시점에도 자금을 보유하지 않습니다.","superbridge3":"브릿징에 대한 도움이 필요하시면 <0>지원 및 FAQ</0>를 확인해 주세요.","superbridge4":"이 인터페이스를 사용함으로써, <0>이용 약관 및 개인정보 보호정책</0>에 동의하는 것으로 간주됩니다.","dedicated1":"이 인터페이스는 <0>{{name}}</0>용 기본 브릿지 계약의 상단에 있는 레이어일 뿐입니다.","agreeAndContinue":"동의하고 계속하기","forceReadTerms":"이용 약관을 읽고 동의해 주세요","forceReadPrivacy":"개인정보 보호정책을 읽고 동의해 주세요"},"legal":{"footerButton":"약관 및 개인정보 보호정책","title":"약관 및 개인정보 보호정책","superbridgeTerms":"Superbridge 이용 약관","superbridgePrivacy":"Superbridge 개인정보 보호정책","dedicatedTerms":"{{name}} 이용 약관","dedicatedPrivacy":"{{name}} 개인정보 보호정책"},"noGasModal":{"youNeedGasOn":"{{to}}에 가스가 필요합니다","needHelp":"도움이 필요하신가요? FAQ를 확인하세요","cctp":"{{symbol}}의 브릿징은 {{to}}에서 추가 트랜잭션이 필요합니다. 이 브릿지를 완료하려면 {{to}}에서 {{gas}}을 충전하세요.","opWithdrawing":"출금에는 {{to}}에서 추가로 2개의 트랜잭션이 필요합니다. 이 출금을 완료하려면 {{to}}에서 {{gas}}을 충전하세요.","arbWithdrawing":"{{token}} 출금에는 {{to}}에서 추가 트랜잭션이 필요합니다. 이 출금을 완료하려면 {{to}}에서 {{gas}}을 충전하세요.","depositing":"{{to}}에 가스가 없으면 트랜잭션을 수행할 수 없습니다. 이 브릿지를 시도하기 전에 {{to}}에서 {{gas}}을 충전하세요.","topup":"{{to}}에 가스 충전","goBack":"뒤로 가기","proceedAnyway":"어쨌든 진행"},"expensiveGasModal":{"title":"네트워크 수수료가 토큰 가치보다 높습니다","notBestOption":"Superbridge는 이 브릿지 금액에 적합하지 않을 수 있습니다. <0>이 대체 브릿지</0>를 고려해 주세요.","bridgeAmount":"브릿지 금액","networkFees":"네트워크 수수료","goBack":"뒤로 가기","proceedAnyway":"어쨌든 진행"},"feeModal":{"providerFees":"{{provider}} 수수료","acrossFeeBreakdownDescription":"<0>Across</0> 및 유동성 공급자 및 중계자에게 지불되는 수수료","hyperlaneFeeBreakdownDescription":"메시지 전달을 위해 <0>Hyperlane</0> 중계자에게 지불되는 수수료"},"gasInfoModal":{"title":"가스 수수료","description":"블록체인에서는 트랜잭션을 제출하기 위해 수수료를 지불해야 합니다. {{from}}로 제출된 트랜잭션은 네트워크가 확인하도록 {{symbol}}의 소량이 필요합니다.","opWithdrawal":"OP 스택 롤업에서의 출금은 결제 체인에서 증명 및 최종 처리하기 위해 두 개의 추가 트랜잭션이 필요합니다.","arbWithdrawal":"Arbitrum Nitro 롤업에서의 출금은 결제 체인에서 최종 처리하기 위한 추가 트랜잭션이 필요합니다.","cctp":"CCTP를 통한 네이티브 USDC 브릿징은 대상 체인에서 추가 트랜잭션이 필요합니다."},"networkSelectorModal":{"title":"네트워크 선택"},"routeSelectorModal":{"title":"경로 선택"},"across":{"transferTimeTitle":"초고속 전송 시간","transferTimeDescription":"브릿지 규모에 따라 초고속 전송 시간이 다를 수 있습니다. 시간은 추정치일 뿐입니다.","timeTo":"{{to}}까지의 시간","feeBreakdownTitle":"Across 수수료","feeBreakdownDescription":"<0>Across</0> 및 유동성 공급자 및 중계자에게 지불되는 수수료","acrossFee":"Across 수수료"},"header":{"supportAndFaqs":"지원 & FAQ","legal":"법적 정보"}}'),
                e$ = JSON.parse('{"reviewBridge":"Przegląd mostu","bridging":"Mostkowanie","connectWallet":"Podłącz portfel","switchToApprove":"Przełącz","approve":"Zatwierdź","insufficientFunds":"Niewystarczające środki","insufficientGas":"Niewystarczająca ilość {{symbol}} na gaz","bridgeLimit":"Limit {{amount}} {{symbol}}","bridgeMin":"Min. kwota {{amount}} {{symbol}}","enterAnAmount":"Wprowadź kwotę","loading":"Ładowanie","loadMore":"Załaduj więcej","error":"Błąd","noAccountConnected":"Brak podłączonego konta","save":"Zapisz","toAddress":"Do adresu","on":"włączone","off":"wyłączone","receiveOnChain":"Otrzymaj na {{chain}}","transferTime":"Czas transferu","transferTimeSeconds_one":"Około {{count}} sekundy","transferTimeSeconds_other":"Około {{count}} sekund","transferTimeMinutes_one":"Około {{count}} minuty","transferTimeMinutes_other":"Około {{count}} minut","transferTimeHours_one":"Około {{count}} godziny","transferTimeHours_other":"Około {{count}} godzin","transferTimeDays_one":"Około {{count}} dnia","transferTimeDays_other":"Około {{count}} dni","availableBalance":"{{amount}} {{symbol}} dostępne","sorryAnErrorOccurred":"Przepraszamy! Wystąpił błąd","about":"O nas","docs":"Dokumenty","from":"Od","to":"Do","manage":"Zarządzaj","support":"Wsparcie","ok":"OK","general":{"needHelp":"Potrzebujesz pomocy? Sprawdź FAQ"},"settings":{"settings":"Ustawienia","escapeHatchDescription":"Wymuszenie wypłaty poprzez odporną na cenzurę transakcję w łańcuchu rozliczeń.","currency":"Waluta","language":"Język","explorer":"Eksplorator","tokenLists":"Listy token\xf3w","enableTestnets":"Włącz testnety","darkMode":"Tryb ciemny"},"customTokenLists":{"add":"Dodaj własną listę token\xf3w","name":"Nazwa listy token\xf3w","namePlaceholder":"Nazwa","url":"URL listy token\xf3w","urlPlaceholder":"URL","invalid":"Nieprawidłowy URL listy token\xf3w","loadedTokens":"Załadowano {{num}} token\xf3w","disclaimer":"Każdy może stworzyć dowolny token, w tym fałszywe wersje istniejących token\xf3w. Zachowaj ostrożność. Niekt\xf3re tokeny i ich parametry techniczne mogą być niekompatybilne z usługami {{app}}. Importując tę własną listę token\xf3w, potwierdzasz i akceptujesz ryzyko.","learnMore":"Dowiedz się więcej o ryzykach.","save":"Zapisz listę","delete":"Usuń listę"},"activity":{"activity":"Aktywność","actionNeeded":"Wymagana akcja","connectWallet":"Proszę podłączyć portfel...","noTransactions":"Brak transakcji...","error":"Przepraszamy! Nie możemy pobrać Twojej aktywności.\\n Spr\xf3buj odświeżyć stronę","withdrawn":"Wypłacone","proving":"Potwierdzanie...","readyToProve":"Gotowy do potwierdzenia","proved":"Potwierdzone","waitingForStateRoot":"Oczekiwanie na korzeń stanu...","waitingForDisputeGame":"Oczekiwanie na sp\xf3r...","stateRootPublished":"Korzeń stanu opublikowany","challengePeriod":"Okres wyzwania","finalizing":"Finalizowanie...","readyToFinalize":"Gotowy do finalizacji","finalized":"Zfinalizowane","deposited":"Zdeponowane","depositing":"Depozytowanie","l2Confirmation":"Potwierdzenie L2","waitingForL2":"Oczekiwanie na L2...","bridged":"Mostek ukończony","bridging":"Mostkowanie","minted":"Wybito","minting":"Bicie monet","readyToMint":"Gotowy do bicia monet","waitingForAttestation":"Oczekiwanie na poświadczenie...","remainingSeconds_one":"Pozostało ~{{count}} sekunda","remainingSeconds_other":"Pozostało ~{{count}} sekund","remainingMinutes_one":"Pozostała ~{{count}} minuta","remainingMinutes_other":"Pozostało ~{{count}} minut","remainingHours_one":"Pozostała ~{{count}} godzina","remainingHours_other":"Pozostało ~{{count}} godzin","remainingDays_one":"Pozostał ~{{count}} dzień","remainingDays_other":"Pozostało ~{{count}} dni"},"tokens":{"tokens":"Tokeny","selectToken":"Wybierz token","noneFound":"Brak wynik\xf3w","notBridgeable":"Nie można mostkować","import":"Importuj","customImport":"Niestandardowy import","customImportFromList":"Z listy {{name}}","customImportCheck":"Upewnij się, że sprawdziłeś adres tokena i jest on poprawny:","customL1Address":"Adres L1","customL2Address":"Adres L2","customL3Address":"Adres L3"},"recipient":{"bridgeDestination":"Miejsce docelowe mostu","toAddress":"Do adresu","invalidAddress":"Nieprawidłowy adres","yourChainAddress":"To jest Tw\xf3j adres {{chain}}","usedBefore":"Konto używane wcześniej","usedBeforeMultiple":"Konto używane {{count}} razy wcześniej","newAddress":"Nowy adres - bądź ostrożny!","checkingAddress":"Sprawdzanie adresu...","addRecipientAddress":"Dodaj adres odbiorcy","pleaseNote":"Proszę zauważyć","sameAddressRequirement":"Mosty do lub z {{chain}} muszą mieć ten sam adres odbiorcy.","checkRecipientAddress":"Sprawdź adres odbiorcy"},"buttons":{"start":"Rozpocznij","finalize":"Zakończ","claim":"Zgłoś","prove":"Udowodnij","redeem":"Wykup","switchChain":"Przełącz łańcuch","mint":"Wybicie monet","get":"Uzyskaj","continue":"Kontynuuj","approve":"Zatwierdź","approved":"Zatwierdzono","approving":"Zatwierdzanie","max":"Maks","bridgingDisabled":"Mostkowanie wyłączone","bridgingPaused":"Mostkowanie wstrzymane","reset":"Resetuj"},"fees":{"fees":"Opłaty sieciowe","networkGas":"Gaz {{chain}}","easyModeFee":"Opłata za tryb łatwy"},"poweredBy":"Zasilane przez {{name}}","transaction":{"via":"Przez","transferTime":"Czas transferu","steps":"Kroki","bridgeInfo":"Informacje o moście","fromChain":"Z {{from}}","toChain":"Do {{to}}","fromAddress":"Od adresu","toAddress":"Do adresu"},"confirmationModal":{"startBridgeOn":"Rozpocznij na {{from}}","bridgeFrom":"Mostkowanie z {{from}}","proveOn":"Udowodnij na {{to}}","getOn":"Uzyskaj na {{to}}","getAmountOn":"Uzyskaj {{formatted}} na {{to}}","waitSeconds_one":"Oczekuj ~{{count}} sekundy","waitSeconds_other":"Oczekuj ~{{count}} sekund","waitMinutes_one":"Oczekuj ~{{count}} minuty","waitMinutes_other":"Oczekuj ~{{count}} minut","waitHours_one":"Oczekuj ~{{count}} godziny","waitHours_other":"Oczekuj ~{{count}} godzin","waitDays_one":"Oczekuj ~{{count}} dnia","waitDays_other":"Oczekuj ~{{count}} dni","prove":"Udowodnij na {{base}}","finalize":"Zgłoś na {{to}}","receiveAmountOnChain":"Otrzymaj {{receiveAmount}} {{receiveSymbol}} na {{to}}","receiveAmount":"Otrzymaj {{formatted}}","approve":"Zatwierdź {{symbol}}","approveGasToken":"Zatwierdź token gazu"},"tos":{"welcome":"Witamy w {{name}}","poweredBy":"Zasilane przez Superbridge","superbridge1":"Ten interfejs to tylko warstwa nad natywnymi kontraktami mostkowymi dla oficjalnych rollup\xf3w Superchain.","superbridge2":"Superbridge w żadnym momencie nie przechowuje środk\xf3w.","superbridge3":"Aby uzyskać pomoc dotyczącą mostkowania, odwiedź <0>wsparcie i FAQ</0>.","superbridge4":"Korzystając z tego interfejsu, zgadzasz się z naszymi <0>Warunkami i Polityką Prywatności</0>.","dedicated1":"Ten interfejs to tylko warstwa nad natywnymi kontraktami mostkowymi dla <0>{{name}}</0>.","agreeAndContinue":"Zgadzam się i kontynuuję","forceReadTerms":"Przeczytaj i zaakceptuj Warunki korzystania z usług","forceReadPrivacy":"Przeczytaj i zaakceptuj Politykę Prywatności"},"legal":{"footerButton":"Warunki i Prywatność","title":"Warunki i Prywatność","superbridgeTerms":"Warunki korzystania z usług Superbridge","superbridgePrivacy":"Polityka Prywatności Superbridge","dedicatedTerms":"Warunki korzystania z usług {{name}}","dedicatedPrivacy":"Polityka Prywatności {{name}}"},"noGasModal":{"youNeedGasOn":"Potrzebujesz gazu na {{to}}","needHelp":"Potrzebujesz pomocy? Sprawdź FAQ","cctp":"Mostkowanie {{symbol}} wymaga dodatkowej transakcji na {{to}}. Dopełnij {{gas}} na {{to}} aby zakończyć mostkowanie.","opWithdrawing":"Wypłata wymaga 2 dodatkowych transakcji na {{to}}. Dopełnij {{gas}} na {{to}} aby zakończyć wypłatę.","arbWithdrawing":"Wypłata {{token}} wymaga dodatkowej transakcji na {{to}}. Dopełnij {{gas}} na {{to}} aby zakończyć wypłatę.","depositing":"Bez gazu na {{to}} nie będziesz w stanie wykonać żadnych transakcji. Dopełnij {{gas}} na {{to}} przed pr\xf3bą mostkowania.","topup":"Dopełnij gaz na {{to}}","goBack":"Wr\xf3ć","proceedAnyway":"Kontynuuj mimo to"},"expensiveGasModal":{"title":"Opłaty sieciowe będą wyższe niż wartość tokena","notBestOption":"Superbridge może nie być najlepszą opcją dla tej kwoty mostkowania. Rozważ <0>te alternatywne mosty</0>.","bridgeAmount":"Kwota mostkowania","networkFees":"Opłaty sieciowe","goBack":"Wr\xf3ć","proceedAnyway":"Kontynuuj mimo to"},"feeModal":{"providerFees":"Opłaty {{provider}}","acrossFeeBreakdownDescription":"Opłaty płatne <0>Across</0> i ich dostawcom płynności oraz relayerom","hyperlaneFeeBreakdownDescription":"Opłaty płatne relayerom <0>Hyperlane</0> za dostarczenie wiadomości"},"gasInfoModal":{"title":"Opłaty za gaz","description":"Na blockchainie musisz zapłacić opłatę za przesłanie transakcji. Transakcje przesyłane do {{from}} wymagają niewielkiej ilości {{symbol}}, aby zostały potwierdzone przez sieć.","opWithdrawal":"Wypłaty z OP Stack rollup wymagają dw\xf3ch dodatkowych transakcji w celu potwierdzenia i finalizacji wypłaty w łańcuchu rozliczeń.","arbWithdrawal":"Wypłaty z Arbitrum Nitro rollup wymagają dodatkowej transakcji w celu finalizacji w łańcuchu rozliczeń.","cctp":"Natywne mostkowanie USDC przez CCTP wymaga dodatkowej transakcji na docelowym łańcuchu."},"networkSelectorModal":{"title":"Wybierz sieć"},"routeSelectorModal":{"title":"Wybierz trasę"},"across":{"transferTimeTitle":"Super szybki czas transferu","transferTimeDescription":"W zależności od wielkości mostu, super szybki czas transferu może się r\xf3żnić. Czas to tylko szacunkowa wartość.","timeTo":"Czas do {{to}}","feeBreakdownTitle":"Opłaty Across","feeBreakdownDescription":"Opłaty płatne <0>Across</0> i ich dostawcom płynności oraz relayerom","acrossFee":"Opłaty Across"},"header":{"supportAndFaqs":"Wsparcie & FAQ","legal":"Informacje prawne"}}'),
                eH = JSON.parse('{"reviewBridge":"Revisar ponte","bridging":"Fazendo ponte","connectWallet":"Conectar carteira","switchToApprove":"Trocar","approve":"Aprovar","insufficientFunds":"Fundos insuficientes","insufficientGas":"G\xe1s insuficiente em {{symbol}}","bridgeLimit":"Limite de {{amount}} {{symbol}}","bridgeMin":"M\xednimo de {{amount}} {{symbol}}","enterAnAmount":"Insira um valor","loading":"Carregando","loadMore":"Carregar mais","error":"Erro","noAccountConnected":"Nenhuma conta conectada","save":"Salvar","toAddress":"Para endere\xe7o","on":"ligado","off":"desligado","receiveOnChain":"Receber em {{chain}}","transferTime":"Tempo de transfer\xeancia","transferTimeSeconds_one":"~{{count}} segundo","transferTimeSeconds_other":"~{{count}} segundos","transferTimeMinutes_one":"~{{count}} minuto","transferTimeMinutes_other":"~{{count}} minutos","transferTimeHours_one":"~{{count}} hora","transferTimeHours_other":"~{{count}} horas","transferTimeDays_one":"~{{count}} dia","transferTimeDays_other":"~{{count}} dias","availableBalance":"{{amount}} {{symbol}} dispon\xedvel","sorryAnErrorOccurred":"Desculpe! Ocorreu um erro","about":"Sobre","docs":"Documentos","from":"De","to":"Para","manage":"Gerenciar","support":"Suporte","ok":"OK","general":{"needHelp":"Precisa de ajuda? Consulte as FAQs"},"settings":{"settings":"Configura\xe7\xf5es","escapeHatchDescription":"For\xe7ar retiradas via transa\xe7\xf5es resistentes \xe0 censura na cadeia de liquida\xe7\xe3o.","currency":"Moeda","language":"Idioma","explorer":"Explorador","tokenLists":"Listas de tokens","enableTestnets":"Ativar testnets","darkMode":"Modo escuro"},"customTokenLists":{"add":"Adicionar lista personalizada de tokens","name":"Nome da lista de tokens","namePlaceholder":"Nome","url":"URL da lista de tokens","urlPlaceholder":"URL","invalid":"URL da lista de tokens inv\xe1lido","loadedTokens":"{{num}} tokens carregados","disclaimer":"Qualquer pessoa pode criar qualquer token, incluindo vers\xf5es falsas de tokens existentes. Tenha cuidado. Alguns tokens e seus par\xe2metros t\xe9cnicos podem n\xe3o ser compat\xedveis com os servi\xe7os da {{app}}. Ao importar esta lista personalizada de tokens, voc\xea reconhece e aceita os riscos.","learnMore":"Saiba mais sobre os riscos.","save":"Salvar lista","delete":"Excluir lista"},"activity":{"activity":"Atividade","actionNeeded":"A\xe7\xe3o necess\xe1ria","connectWallet":"Por favor, conecte sua carteira...","noTransactions":"Nenhuma transa\xe7\xe3o at\xe9 o momento...","error":"Desculpe! N\xe3o foi poss\xedvel carregar o hist\xf3rico de atividades.\\nPor favor, tente atualizar a p\xe1gina","withdrawn":"Retirado","proving":"Provando...","readyToProve":"Pronto para provar","proved":"Provado","waitingForStateRoot":"Aguardando raiz de estado...","waitingForDisputeGame":"Aguardando disputa...","stateRootPublished":"Raiz de estado publicada","challengePeriod":"Per\xedodo de desafio","finalizing":"Finalizando...","readyToFinalize":"Pronto para finalizar","finalized":"Finalizado","deposited":"Depositado","depositing":"Depositando","l2Confirmation":"Confirma\xe7\xe3o L2","waitingForL2":"Aguardando L2...","bridged":"Ponte conclu\xedda","bridging":"Fazendo ponte","minted":"Cunhado","minting":"Cunhando","readyToMint":"Pronto para cunhar","waitingForAttestation":"Aguardando atestado...","remainingSeconds_one":"~{{count}} segundo restante","remainingSeconds_other":"~{{count}} segundos restantes","remainingMinutes_one":"~{{count}} minuto restante","remainingMinutes_other":"~{{count}} minutos restantes","remainingHours_one":"~{{count}} hora restante","remainingHours_other":"~{{count}} horas restantes","remainingDays_one":"~{{count}} dia restante","remainingDays_other":"~{{count}} dias restantes"},"tokens":{"tokens":"Tokens","selectToken":"Selecionar token","noneFound":"Nenhum resultado encontrado","notBridgeable":"N\xe3o pode ser transferido via ponte","import":"Importar","customImport":"Importa\xe7\xe3o personalizada","customImportFromList":"De {{name}}","customImportCheck":"Certifique-se de que verificou o endere\xe7o do token e que est\xe1 correto:","customL1Address":"Endere\xe7o L1","customL2Address":"Endere\xe7o L2","customL3Address":"Endere\xe7o L3"},"recipient":{"bridgeDestination":"Destino da ponte","toAddress":"Para endere\xe7o","invalidAddress":"Endere\xe7o inv\xe1lido","yourChainAddress":"Este \xe9 o seu endere\xe7o {{chain}}","usedBefore":"Conta usada anteriormente","usedBeforeMultiple":"Conta usada {{count}} vezes anteriormente","newAddress":"Novo endere\xe7o - tenha cuidado!","checkingAddress":"Verificando endere\xe7o...","addRecipientAddress":"Adicionar endere\xe7o do destinat\xe1rio","pleaseNote":"Por favor, note","sameAddressRequirement":"Pontes para ou de {{chain}} devem ter o mesmo endere\xe7o do destinat\xe1rio.","checkRecipientAddress":"Verifique o endere\xe7o do destinat\xe1rio"},"buttons":{"start":"Iniciar","finalize":"Finalizar","claim":"Reivindicar","prove":"Provar","redeem":"Resgatar","switchChain":"Trocar cadeia","mint":"Cunhar","get":"Obter","continue":"Continuar","approve":"Aprovar","approved":"Aprovado","approving":"Aprovando","max":"M\xe1x","bridgingDisabled":"Transfer\xeancia via ponte desativada","bridgingPaused":"Transfer\xeancia via ponte pausada","reset":"Redefinir"},"fees":{"fees":"Taxas de rede","networkGas":"G\xe1s {{chain}}","easyModeFee":"Taxa de modo f\xe1cil"},"poweredBy":"Fornecido por {{name}}","transaction":{"via":"Via","transferTime":"Tempo de transfer\xeancia","steps":"Etapas","bridgeInfo":"Informa\xe7\xf5es da ponte","fromChain":"De {{from}}","toChain":"Para {{to}}","fromAddress":"De endere\xe7o","toAddress":"Para endere\xe7o"},"confirmationModal":{"startBridgeOn":"Iniciar em {{from}}","bridgeFrom":"Transferir via ponte de {{from}}","proveOn":"Provar em {{to}}","getOn":"Obter em {{to}}","getAmountOn":"Obter {{formatted}} em {{to}}","waitSeconds_one":"Espere ~{{count}} segundo","waitSeconds_other":"Espere ~{{count}} segundos","waitMinutes_one":"Espere ~{{count}} minuto","waitMinutes_other":"Espere ~{{count}} minutos","waitHours_one":"Espere ~{{count}} hora","waitHours_other":"Espere ~{{count}} horas","waitDays_one":"Espere ~{{count}} dia","waitDays_other":"Espere ~{{count}} dias","prove":"Provar em {{base}}","finalize":"Reivindicar em {{to}}","receiveAmountOnChain":"Receber {{receiveAmount}} {{receiveSymbol}} em {{to}}","receiveAmount":"Receber {{formatted}}","approve":"Aprovar {{symbol}}","approveGasToken":"Aprovar token de g\xe1s"},"tos":{"welcome":"Bem-vindo ao {{name}}","poweredBy":"Fornecido por Superbridge","superbridge1":"Esta interface \xe9 apenas uma camada sobre os contratos de ponte nativos para rollups oficiais do Superchain.","superbridge2":"Em nenhum momento o Superbridge det\xe9m fundos.","superbridge3":"Para obter ajuda com a transfer\xeancia via ponte, v\xe1 para <0>suporte & FAQ</0>.","superbridge4":"Ao usar esta interface, voc\xea concorda com nossos <0>Termos e Pol\xedtica de Privacidade</0>.","dedicated1":"Esta interface \xe9 apenas uma camada sobre os contratos de ponte nativos para <0>{{name}}</0>.","agreeAndContinue":"Concordar e continuar","forceReadTerms":"Por favor, leia e concorde com os Termos de Servi\xe7o","forceReadPrivacy":"Por favor, leia e concorde com a Pol\xedtica de Privacidade"},"legal":{"footerButton":"Termos e Privacidade","title":"Termos e Privacidade","superbridgeTerms":"Termos de Servi\xe7o do Superbridge","superbridgePrivacy":"Pol\xedtica de Privacidade do Superbridge","dedicatedTerms":"Termos de Servi\xe7o do {{name}}","dedicatedPrivacy":"Pol\xedtica de Privacidade do {{name}}"},"noGasModal":{"youNeedGasOn":"Voc\xea precisa de g\xe1s em {{to}}","needHelp":"Precisa de ajuda? Consulte as FAQs","cctp":"A transfer\xeancia de {{symbol}} via ponte requer uma transa\xe7\xe3o extra em {{to}}. Recarregue {{gas}} em {{to}} para completar a ponte.","opWithdrawing":"A retirada requer 2 transa\xe7\xf5es extras em {{to}}. Recarregue {{gas}} em {{to}} para concluir a retirada.","arbWithdrawing":"A retirada de {{token}} requer uma transa\xe7\xe3o extra em {{to}}. Recarregue {{gas}} em {{to}} para concluir a retirada.","depositing":"Sem g\xe1s em {{to}} voc\xea n\xe3o poder\xe1 realizar nenhuma transa\xe7\xe3o. Recarregue {{gas}} em {{to}} antes de tentar transferir via ponte.","topup":"Recarregar g\xe1s em {{to}}","goBack":"Voltar","proceedAnyway":"Prosseguir assim mesmo"},"expensiveGasModal":{"title":"As taxas de rede ser\xe3o maiores que o valor do token","notBestOption":"O Superbridge pode n\xe3o ser a melhor op\xe7\xe3o para este valor de transfer\xeancia via ponte. Considere <0>estas pontes alternativas</0>.","bridgeAmount":"Valor da transfer\xeancia via ponte","networkFees":"Taxas de rede","goBack":"Voltar","proceedAnyway":"Prosseguir assim mesmo"},"feeModal":{"providerFees":"Taxas de {{provider}}","acrossFeeBreakdownDescription":"Taxas pagas a <0>Across</0> e seus provedores de liquidez e relayers","hyperlaneFeeBreakdownDescription":"Taxas pagas a relayers do <0>Hyperlane</0> pela entrega de mensagens"},"gasInfoModal":{"title":"Taxas de g\xe1s","description":"Nas blockchains, \xe9 necess\xe1rio pagar uma taxa para enviar transa\xe7\xf5es. As transa\xe7\xf5es enviadas para {{from}} exigem uma pequena quantidade de {{symbol}} para garantir que sejam confirmadas pela rede.","opWithdrawal":"As retiradas dos rollups OP Stack exigem duas transa\xe7\xf5es extras para provar e finalizar a retirada na cadeia de liquida\xe7\xe3o.","arbWithdrawal":"As retiradas dos rollups do Arbitrum Nitro exigem uma transa\xe7\xe3o extra para finalizar na cadeia de liquida\xe7\xe3o.","cctp":"As transfer\xeancias nativas de USDC via CCTP exigem uma transa\xe7\xe3o extra na cadeia de destino."},"networkSelectorModal":{"title":"Selecionar uma rede"},"routeSelectorModal":{"title":"Escolha a rota"},"across":{"transferTimeTitle":"Tempo de transfer\xeancia ultrarr\xe1pido","transferTimeDescription":"Dependendo do tamanho da ponte, os tempos de transfer\xeancia ultrarr\xe1pidos podem variar. Os tempos s\xe3o apenas estimativas.","timeTo":"Tempo para {{to}}","feeBreakdownTitle":"Taxas do Across","feeBreakdownDescription":"Taxas pagas a <0>Across</0> e seus provedores de liquidez e relayers","acrossFee":"Taxa do Across"},"header":{"supportAndFaqs":"Suporte & FAQs","legal":"Jur\xeddico"}}'),
                eW = JSON.parse('{"reviewBridge":"ตรวจสอบสะพาน","bridging":"กำลังเชื่อมโยง","connectWallet":"เชื่อมต่อกระเป๋าเงิน","switchToApprove":"เปลี่ยน","approve":"อนุมัติ","insufficientFunds":"ยอดเงินไม่เพียงพอ","insufficientGas":"ก๊าซไม่เพียงพอใน {{symbol}}","bridgeLimit":"จำกัด {{amount}} {{symbol}}","bridgeMin":"จำนวนขั้นต่ำ {{amount}} {{symbol}}","enterAnAmount":"กรอกจำนวนเงิน","loading":"กำลังโหลด","loadMore":"โหลดเพิ่มเติม","error":"ข้อผิดพลาด","noAccountConnected":"ไม่มีบัญชีที่เชื่อมต่อ","save":"บันทึก","toAddress":"ไปยังที่อยู่","on":"เปิด","off":"ปิด","receiveOnChain":"รับใน {{chain}}","transferTime":"เวลาการโอน","transferTimeSeconds_one":"~{{count}} วินาที","transferTimeSeconds_other":"~{{count}} วินาที","transferTimeMinutes_one":"~{{count}} นาที","transferTimeMinutes_other":"~{{count}} นาที","transferTimeHours_one":"~{{count}} ชั่วโมง","transferTimeHours_other":"~{{count}} ชั่วโมง","transferTimeDays_one":"~{{count}} วัน","transferTimeDays_other":"~{{count}} วัน","availableBalance":"{{amount}} {{symbol}} ที่ใช้ได้","sorryAnErrorOccurred":"ขออภัย! เกิดข้อผิดพลาด","about":"เกี่ยวกับ","docs":"เอกสาร","from":"จาก","to":"ถึง","manage":"จัดการ","support":"สนับสนุน","ok":"ตกลง","general":{"needHelp":"ต้องการความช่วยเหลือ? ดูคำถามที่พบบ่อย"},"settings":{"settings":"การตั้งค่า","escapeHatchDescription":"บังคับการถอนผ่านการทำธุรกรรมที่ต้านทานการเซ็นเซอร์บนเครือข่ายการชำระเงิน","currency":"สกุลเงิน","language":"ภาษา","explorer":"ตัวสำรวจ","tokenLists":"รายการโทเค็น","enableTestnets":"เปิดใช้งาน Testnets","darkMode":"โหมดมืด"},"customTokenLists":{"add":"เพิ่มรายการโทเค็นแบบกำหนดเอง","name":"ชื่อรายการโทเค็น","namePlaceholder":"ชื่อ","url":"URL ของรายการโทเค็น","urlPlaceholder":"URL","invalid":"URL ของรายการโทเค็นไม่ถูกต้อง","loadedTokens":"โหลด {{num}} โทเค็นแล้ว","disclaimer":"ใครๆ ก็สามารถสร้างโทเค็นใดๆ รวมถึงเวอร์ชันปลอมของโทเค็นที่มีอยู่ได้ โปรดใช้ความระมัดระวัง โทเค็นบางรายการและพารามิเตอร์ทางเทคนิคอาจไม่เข้ากันกับบริการของ {{app}} การนำเข้ารายการโทเค็นนี้คุณยอมรับความเสี่ยง","learnMore":"เรียนรู้เพิ่มเติมเกี่ยวกับความเสี่ยง","save":"บันทึกรายการ","delete":"ลบรายการ"},"activity":{"activity":"กิจกรรม","actionNeeded":"ต้องการดำเนินการ","connectWallet":"โปรดเชื่อมต่อกระเป๋าเงินของคุณ...","noTransactions":"ยังไม่มีธุรกรรม...","error":"ขออภัย! เราไม่สามารถดึงฟีดกิจกรรมของคุณได้\\n โปรดลองรีเฟรชหน้า","withdrawn":"ถอนเงินแล้ว","proving":"กำลังพิสูจน์...","readyToProve":"พร้อมที่จะพิสูจน์","proved":"พิสูจน์แล้ว","waitingForStateRoot":"กำลังรอ State Root...","waitingForDisputeGame":"กำลังรอเกม Dispute...","stateRootPublished":"State Root ถูกเผยแพร่แล้ว","challengePeriod":"ช่วงการท้าทาย","finalizing":"กำลังสรุป...","readyToFinalize":"พร้อมที่จะสรุป","finalized":"สรุปแล้ว","deposited":"ฝากแล้ว","depositing":"กำลังฝาก","l2Confirmation":"ยืนยัน L2","waitingForL2":"กำลังรอ L2...","bridged":"สะพานเสร็จสมบูรณ์","bridging":"กำลังเชื่อมโยง","minted":"มิ้นต์แล้ว","minting":"กำลังมิ้นต์","readyToMint":"พร้อมมิ้นต์","waitingForAttestation":"กำลังรอการยืนยัน...","remainingSeconds_one":"~{{count}} วินาทีที่เหลือ","remainingSeconds_other":"~{{count}} วินาทีที่เหลือ","remainingMinutes_one":"~{{count}} นาทีที่เหลือ","remainingMinutes_other":"~{{count}} นาทีที่เหลือ","remainingHours_one":"~{{count}} ชั่วโมงที่เหลือ","remainingHours_other":"~{{count}} ชั่วโมงที่เหลือ","remainingDays_one":"~{{count}} วันที่เหลือ","remainingDays_other":"~{{count}} วันที่เหลือ"},"tokens":{"tokens":"โทเค็น","selectToken":"เลือกโทเค็น","noneFound":"ไม่พบผลลัพธ์","notBridgeable":"ไม่สามารถเชื่อมต่อได้","import":"นำเข้า","customImport":"นำเข้าแบบกำหนดเอง","customImportFromList":"จาก {{name}}","customImportCheck":"โปรดตรวจสอบที่อยู่โทเค็นและตรวจสอบให้แน่ใจว่าถูกต้อง:","customL1Address":"ที่อยู่ L1","customL2Address":"ที่อยู่ L2","customL3Address":"ที่อยู่ L3"},"recipient":{"bridgeDestination":"ปลายทางสะพาน","toAddress":"ไปยังที่อยู่","invalidAddress":"ที่อยู่ไม่ถูกต้อง","yourChainAddress":"นี่คือที่อยู่ {{chain}} ของคุณ","usedBefore":"บัญชีที่เคยใช้ก่อนหน้านี้","usedBeforeMultiple":"บัญชีนี้เคยใช้ก่อนหน้านี้ {{count}} ครั้ง","newAddress":"ที่อยู่ใหม่ - โปรดระมัดระวัง!","checkingAddress":"กำลังตรวจสอบที่อยู่...","addRecipientAddress":"เพิ่มที่อยู่ผู้รับ","pleaseNote":"โปรดทราบ","sameAddressRequirement":"สะพานไปหรือมาจาก {{chain}} ต้องมีที่อยู่ผู้รับเดียวกัน","checkRecipientAddress":"ตรวจสอบที่อยู่ผู้รับ"},"buttons":{"start":"เริ่มต้น","finalize":"สรุป","claim":"เคลม","prove":"พิสูจน์","redeem":"แลก","switchChain":"สลับเชน","mint":"มิ้นต์","get":"รับ","continue":"ดำเนินการต่อ","approve":"อนุมัติ","approved":"อนุมัติแล้ว","approving":"กำลังอนุมัติ","max":"สูงสุด","bridgingDisabled":"การเชื่อมโยงถูกปิดใช้งาน","bridgingPaused":"การเชื่อมโยงถูกหยุดชั่วคราว","reset":"รีเซ็ต"},"fees":{"fees":"ค่าธรรมเนียมเครือข่าย","networkGas":"{{chain}} ก๊าซ","easyModeFee":"ค่าธรรมเนียมโหมดง่าย"},"poweredBy":"ขับเคลื่อนโดย {{name}}","transaction":{"via":"ผ่าน","transferTime":"เวลาการโอน","steps":"ขั้นตอน","bridgeInfo":"ข้อมูลสะพาน","fromChain":"จาก {{from}}","toChain":"ถึง {{to}}","fromAddress":"จากที่อยู่","toAddress":"ถึงที่อยู่"},"confirmationModal":{"startBridgeOn":"เริ่มต้นบน {{from}}","bridgeFrom":"เชื่อมโยงจาก {{from}}","proveOn":"พิสูจน์บน {{to}}","getOn":"รับบน {{to}}","getAmountOn":"รับ {{formatted}} บน {{to}}","waitSeconds_one":"รอ ~{{count}} วินาที","waitSeconds_other":"รอ ~{{count}} วินาที","waitMinutes_one":"รอ ~{{count}} นาที","waitMinutes_other":"รอ ~{{count}} นาที","waitHours_one":"รอ ~{{count}} ชั่วโมง","waitHours_other":"รอ ~{{count}} ชั่วโมง","waitDays_one":"รอ ~{{count}} วัน","waitDays_other":"รอ ~{{count}} วัน","prove":"พิสูจน์บน {{base}}","finalize":"เคลมบน {{to}}","receiveAmountOnChain":"รับ {{receiveAmount}} {{receiveSymbol}} บน {{to}}","receiveAmount":"รับ {{formatted}}","approve":"อนุมัติ {{symbol}}","approveGasToken":"อนุมัติโทเค็นก๊าซ"},"tos":{"welcome":"ยินดีต้อนรับสู่ {{name}}","poweredBy":"ขับเคลื่อนโดย Superbridge","superbridge1":"อินเทอร์เฟซนี้เป็นเพียงชั้นหนึ่งที่เชื่อมโยงกับสัญญาพื้นเมืองของ Superchain Rollups อย่างเป็นทางการ","superbridge2":"Superbridge ไม่ถือเงินของคุณในทุกกรณี","superbridge3":"สำหรับความช่วยเหลือเกี่ยวกับการเชื่อมโยง โปรดไปที่ <0>การสนับสนุน & FAQs</0>","superbridge4":"โดยการใช้หน้าอินเทอร์เฟซนี้ คุณยอมรับ <0>ข้อกำหนดการให้บริการและนโยบายความเป็นส่วนตัว</0>","dedicated1":"อินเทอร์เฟซนี้เป็นเพียงชั้นหนึ่งที่เชื่อมโยงกับสัญญาพื้นเมืองของ <0>{{name}}</0>","agreeAndContinue":"ยอมรับและดำเนินการต่อ","forceReadTerms":"โปรดอ่านและยอมรับข้อกำหนดการให้บริการ","forceReadPrivacy":"โปรดอ่านและยอมรับนโยบายความเป็นส่วนตัว"},"legal":{"footerButton":"ข้อกำหนด & ความเป็นส่วนตัว","title":"ข้อกำหนด & ความเป็นส่วนตัว","superbridgeTerms":"ข้อกำหนดการให้บริการของ Superbridge","superbridgePrivacy":"นโยบายความเป็นส่วนตัวของ Superbridge","dedicatedTerms":"ข้อกำหนดการให้บริการของ {{name}}","dedicatedPrivacy":"นโยบายความเป็นส่วนตัวของ {{name}}"},"noGasModal":{"youNeedGasOn":"คุณต้องการก๊าซบน {{to}}","needHelp":"ต้องการความช่วยเหลือ? ดู FAQs","cctp":"การเชื่อมโยง {{symbol}} ต้องการธุรกรรมเพิ่มเติมบน {{to}} กรุณาเติม {{gas}} บน {{to}} เพื่อทำการเชื่อมโยงให้สมบูรณ์","opWithdrawing":"การถอนต้องการธุรกรรมเพิ่มเติม 2 รายการบน {{to}} กรุณาเติม {{gas}} บน {{to}} เพื่อทำการถอนให้เสร็จสมบูรณ์","arbWithdrawing":"การถอน {{token}} ต้องการธุรกรรมเพิ่มเติมบน {{to}} กรุณาเติม {{gas}} บน {{to}} เพื่อทำการถอนให้เสร็จสมบูรณ์","depositing":"หากไม่มีแก๊สบน {{to}} คุณจะไม่สามารถทำธุรกรรมใดๆ ได้ กรุณาเติม {{gas}} บน {{to}} ก่อนพยายามเชื่อมโยง","topup":"เติมก๊าซบน {{to}}","goBack":"กลับไป","proceedAnyway":"ดำเนินการต่อ"},"expensiveGasModal":{"title":"ค่าธรรมเนียมเครือข่ายสูงกว่ามูลค่าโทเค็น","notBestOption":"Superbridge อาจไม่ใช่ตัวเลือกที่ดีที่สุดสำหรับจำนวนเงินนี้ โปรดพิจารณา <0>สะพานอื่นๆ เหล่านี้</0>","bridgeAmount":"จำนวนเงินการเชื่อมโยง","networkFees":"ค่าธรรมเนียมเครือข่าย","goBack":"กลับไป","proceedAnyway":"ดำเนินการต่อ"},"feeModal":{"providerFees":"ค่าธรรมเนียม {{provider}}","acrossFeeBreakdownDescription":"ค่าธรรมเนียมที่จ่ายให้กับ <0>Across</0> และผู้ให้บริการสภาพคล่องและ relayers ของพวกเขา","hyperlaneFeeBreakdownDescription":"ค่าธรรมเนียมที่จ่ายให้กับ relayers ของ <0>Hyperlane</0> สำหรับการส่งข้อความ"},"gasInfoModal":{"title":"ค่าธรรมเนียมก๊าซ","description":"การทำธุรกรรมบนบล็อกเชนต้องจ่ายค่าธรรมเนียม ธุรกรรมที่ส่งไปยัง {{from}} ต้องใช้ {{symbol}} จำนวนเล็กน้อยเพื่อให้แน่ใจว่าได้รับการยืนยันจากเครือข่าย","opWithdrawal":"การถอนจาก OP Stack Rollups ต้องใช้ธุรกรรมเพิ่มเติมสองรายการเพื่อพิสูจน์และสรุปการถอนในเครือข่ายการชำระเงิน","arbWithdrawal":"การถอนจาก Arbitrum Nitro Rollups ต้องใช้ธุรกรรมเพิ่มเติมเพื่อสรุปในเครือข่ายการชำระเงิน","cctp":"การเชื่อมโยง USDC แบบเนทีฟผ่าน CCTP ต้องใช้ธุรกรรมเพิ่มเติมบนเครือข่ายปลายทาง"},"networkSelectorModal":{"title":"เลือกเครือข่าย"},"routeSelectorModal":{"title":"เลือกเส้นทาง"},"across":{"transferTimeTitle":"เวลาการโอนที่รวดเร็วมาก","transferTimeDescription":"ขึ้นอยู่กับขนาดของการเชื่อมโยง เวลาการโอนที่รวดเร็วอาจแตกต่างกันไป เวลานี้เป็นเพียงค่าประมาณ","timeTo":"เวลาถึง {{to}}","feeBreakdownTitle":"ค่าธรรมเนียม Across","feeBreakdownDescription":"ค่าธรรมเนียมที่จ่ายให้กับ <0>Across</0> และผู้ให้บริการสภาพคล่องและ relayers ของพวกเขา","acrossFee":"ค่าธรรมเนียม Across"},"header":{"supportAndFaqs":"การสนับสนุน & คำถามที่พบบ่อย","legal":"กฎหมาย"}}'),
                eG = JSON.parse('{"reviewBridge":"K\xf6pr\xfcy\xfc İncele","bridging":"K\xf6pr\xfc kuruluyor","connectWallet":"C\xfczdanı bağla","switchToApprove":"Değiştir","approve":"Onayla","insufficientFunds":"Yetersiz bakiye","insufficientGas":"{{symbol}} gazı yetersiz","bridgeLimit":"{{amount}} {{symbol}} limiti","bridgeMin":"En az tutar {{amount}} {{symbol}}","enterAnAmount":"Bir tutar girin","loading":"Y\xfckleniyor","loadMore":"Daha fazla y\xfckle","error":"Hata","noAccountConnected":"Bağlı hesap yok","save":"Kaydet","toAddress":"Alıcı adresi","on":"a\xe7ık","off":"kapalı","receiveOnChain":"{{chain}} \xfczerinde al","transferTime":"Transfer s\xfcresi","transferTimeSeconds_one":"Yaklaşık {{count}} saniye","transferTimeSeconds_other":"Yaklaşık {{count}} saniye","transferTimeMinutes_one":"Yaklaşık {{count}} dakika","transferTimeMinutes_other":"Yaklaşık {{count}} dakika","transferTimeHours_one":"Yaklaşık {{count}} saat","transferTimeHours_other":"Yaklaşık {{count}} saat","transferTimeDays_one":"Yaklaşık {{count}} g\xfcn","transferTimeDays_other":"Yaklaşık {{count}} g\xfcn","availableBalance":"{{amount}} {{symbol}} kullanılabilir","sorryAnErrorOccurred":"\xdczg\xfcn\xfcz! Bir hata oluştu","about":"Hakkında","docs":"Belgeler","from":"G\xf6nderen","to":"Alıcı","manage":"Y\xf6net","support":"Destek","ok":"Tamam","general":{"needHelp":"Yardıma mı ihtiyacınız var? SSS\'ye g\xf6z atın"},"settings":{"settings":"Ayarlar","escapeHatchDescription":"\xc7\xf6z\xfcmleme zincirinde sans\xfcre diren\xe7li işlemler yoluyla \xe7ekimleri zorlayın.","currency":"Para birimi","language":"Dil","explorer":"Gezgin","tokenLists":"Token listeleri","enableTestnets":"Test ağlarını etkinleştir","darkMode":"Karanlık mod"},"customTokenLists":{"add":"\xd6zel token listesi ekle","name":"Token listesi adı","namePlaceholder":"Ad","url":"Token listesi URL\'si","urlPlaceholder":"URL","invalid":"Ge\xe7ersiz token listesi URL\'si","loadedTokens":"{{num}} token y\xfcklendi","disclaimer":"Herkes herhangi bir token oluşturabilir, mevcut tokenların sahte versiyonları dahil. Dikkatli olun. Bazı tokenlar ve teknik parametreleri {{app}} hizmetleriyle uyumlu olmayabilir. Bu \xf6zel token listesini i\xe7e aktararak riskleri kabul ettiğinizi onaylamış olursunuz.","learnMore":"Riskler hakkında daha fazla bilgi edinin.","save":"Listeyi kaydet","delete":"Listeyi sil"},"activity":{"activity":"Etkinlik","actionNeeded":"Eylem gerekli","connectWallet":"L\xfctfen c\xfczdanınızı bağlayın...","noTransactions":"Hen\xfcz işlem yok...","error":"\xdczg\xfcn\xfcz! Etkinlik akışınızı \xe7ekemedik.\\nL\xfctfen sayfayı yenileyin","withdrawn":"\xc7ekildi","proving":"Kanıtlanıyor...","readyToProve":"Kanıtlamaya hazır","proved":"Kanıtlandı","waitingForStateRoot":"Durum k\xf6k\xfc bekleniyor...","waitingForDisputeGame":"İtiraz oyunu bekleniyor...","stateRootPublished":"Durum k\xf6k\xfc yayınlandı","challengePeriod":"M\xfccadele d\xf6nemi","finalizing":"Sonlandırılıyor...","readyToFinalize":"Sonlandırmaya hazır","finalized":"Sonlandırıldı","deposited":"Yatırıldı","depositing":"Yatırılıyor","l2Confirmation":"L2 onayı","waitingForL2":"L2 bekleniyor...","bridged":"K\xf6pr\xfc kuruldu","bridging":"K\xf6pr\xfc kuruluyor","minted":"Basılmış","minting":"Basılıyor","readyToMint":"Basmaya hazır","waitingForAttestation":"Doğrulama bekleniyor...","remainingSeconds_one":"~{{count}} saniye kaldı","remainingSeconds_other":"~{{count}} saniye kaldı","remainingMinutes_one":"~{{count}} dakika kaldı","remainingMinutes_other":"~{{count}} dakika kaldı","remainingHours_one":"~{{count}} saat kaldı","remainingHours_other":"~{{count}} saat kaldı","remainingDays_one":"~{{count}} g\xfcn kaldı","remainingDays_other":"~{{count}} g\xfcn kaldı"},"tokens":{"tokens":"Tokenler","selectToken":"Token se\xe7","noneFound":"Sonu\xe7 bulunamadı","notBridgeable":"K\xf6pr\xfclenemez","import":"İ\xe7e aktar","customImport":"\xd6zel i\xe7e aktarma","customImportFromList":"{{name}} listesinden","customImportCheck":"Token adresini kontrol ettiğinizden ve doğru olduğundan emin olun:","customL1Address":"L1 adresi","customL2Address":"L2 adresi","customL3Address":"L3 adresi"},"recipient":{"bridgeDestination":"K\xf6pr\xfc hedefi","toAddress":"Alıcı adresi","invalidAddress":"Ge\xe7ersiz adres","yourChainAddress":"Bu sizin {{chain}} adresiniz","usedBefore":"Daha \xf6nce kullanılan hesap","usedBeforeMultiple":"Hesap daha \xf6nce {{count}} kez kullanıldı","newAddress":"Yeni adres - dikkatli olun!","checkingAddress":"Adres kontrol ediliyor...","addRecipientAddress":"Alıcı adresi ekle","pleaseNote":"L\xfctfen dikkat edin","sameAddressRequirement":"{{chain}} \xfczerinden giden veya gelen k\xf6pr\xfclerde aynı alıcı adresi olmalıdır.","checkRecipientAddress":"Alıcı adresini kontrol edin"},"buttons":{"start":"Başlat","finalize":"Sonlandır","claim":"Talep et","prove":"Kanıtla","redeem":"Geri al","switchChain":"Zinciri değiştir","mint":"Bas","get":"Al","continue":"Devam et","approve":"Onayla","approved":"Onaylandı","approving":"Onaylanıyor","max":"Maks","bridgingDisabled":"K\xf6pr\xfc devre dışı","bridgingPaused":"K\xf6pr\xfc duraklatıldı","reset":"Sıfırla"},"fees":{"fees":"Ağ \xfccretleri","networkGas":"{{chain}} gaz","easyModeFee":"Kolay mod gaz \xfccreti"},"poweredBy":"{{name}} tarafından desteklenmektedir","transaction":{"via":"\xdczerinden","transferTime":"Transfer s\xfcresi","steps":"Adımlar","bridgeInfo":"K\xf6pr\xfc bilgileri","fromChain":"{{from}} zincirinden","toChain":"{{to}} zincirine","fromAddress":"G\xf6nderen adresi","toAddress":"Alıcı adresi"},"confirmationModal":{"startBridgeOn":"{{from}} \xfczerinde başlat","bridgeFrom":"{{from}} \xfczerinden k\xf6pr\xfc kur","proveOn":"{{to}} \xfczerinde kanıtla","getOn":"{{to}} \xfczerinde al","getAmountOn":"{{to}} \xfczerinde {{formatted}} al","waitSeconds_one":"Yaklaşık {{count}} saniye bekleyin","waitSeconds_other":"Yaklaşık {{count}} saniye bekleyin","waitMinutes_one":"Yaklaşık {{count}} dakika bekleyin","waitMinutes_other":"Yaklaşık {{count}} dakika bekleyin","waitHours_one":"Yaklaşık {{count}} saat bekleyin","waitHours_other":"Yaklaşık {{count}} saat bekleyin","waitDays_one":"Yaklaşık {{count}} g\xfcn bekleyin","waitDays_other":"Yaklaşık {{count}} g\xfcn bekleyin","prove":"{{base}} \xfczerinde kanıtla","finalize":"{{to}} \xfczerinde talep et","receiveAmountOnChain":"{{to}} \xfczerinde {{receiveAmount}} {{receiveSymbol}} al","receiveAmount":"{{formatted}} al","approve":"{{symbol}} onayla","approveGasToken":"Gaz token onayla"},"tos":{"welcome":"{{name}}\'e hoş geldiniz","poweredBy":"Superbridge tarafından desteklenmektedir","superbridge1":"Bu aray\xfcz, resmi Superchain rolluplarının yerel k\xf6pr\xfc s\xf6zleşmeleri \xfczerine bir katman g\xf6revi g\xf6rmektedir.","superbridge2":"Superbridge hi\xe7bir zaman fonları elinde bulundurmaz.","superbridge3":"K\xf6pr\xfcleme yardımı i\xe7in l\xfctfen <0>destek & SSS</0> b\xf6l\xfcm\xfcne gidin.","superbridge4":"Bu aray\xfcz\xfc kullanarak <0>Hizmet Şartları ve Gizlilik Politikasını</0> kabul etmiş oluyorsunuz.","dedicated1":"Bu aray\xfcz sadece <0>{{name}}</0>\'in yerel k\xf6pr\xfc s\xf6zleşmeleri \xfczerine bir katmandır.","agreeAndContinue":"Kabul et ve devam et","forceReadTerms":"L\xfctfen Hizmet Şartlarını okuyun ve kabul edin","forceReadPrivacy":"L\xfctfen Gizlilik Politikasını okuyun ve kabul edin"},"legal":{"footerButton":"Şartlar ve Gizlilik","title":"Şartlar ve Gizlilik","superbridgeTerms":"Superbridge Hizmet Şartları","superbridgePrivacy":"Superbridge Gizlilik Politikası","dedicatedTerms":"{{name}} Hizmet Şartları","dedicatedPrivacy":"{{name}} Gizlilik Politikası"},"noGasModal":{"youNeedGasOn":"{{to}} \xfczerinde gaza ihtiyacınız var","needHelp":"Yardıma mı ihtiyacınız var? SSS\'ye g\xf6z atın","cctp":"{{symbol}} k\xf6pr\xfcs\xfc {{to}} \xfczerinde ek bir işlem gerektirir. Bu k\xf6pr\xfcy\xfc tamamlamak i\xe7in {{to}} \xfczerinde {{gas}} doldurun.","opWithdrawing":"\xc7ekim işlemi {{to}} \xfczerinde 2 ek işlem gerektirir. Bu \xe7ekimi tamamlamak i\xe7in {{to}} \xfczerinde {{gas}} doldurun.","arbWithdrawing":"{{token}} \xe7ekimi {{to}} \xfczerinde ek bir işlem gerektirir. Bu \xe7ekimi tamamlamak i\xe7in {{to}} \xfczerinde {{gas}} doldurun.","depositing":"{{to}} \xfczerinde gaz olmadan işlem yapamazsınız. Bu k\xf6pr\xfcy\xfc denemeden \xf6nce {{to}} \xfczerinde {{gas}} doldurun.","topup":"{{to}} \xfczerinde gaz doldur","goBack":"Geri d\xf6n","proceedAnyway":"Yine de devam et"},"expensiveGasModal":{"title":"Ağ \xfccretleri token değerinden y\xfcksek olacak","notBestOption":"Superbridge bu k\xf6pr\xfcleme miktarı i\xe7in en iyi se\xe7enek olmayabilir. L\xfctfen <0>bu alternatif k\xf6pr\xfcleri</0> değerlendirin.","bridgeAmount":"K\xf6pr\xfcleme miktarı","networkFees":"Ağ \xfccretleri","goBack":"Geri d\xf6n","proceedAnyway":"Yine de devam et"},"feeModal":{"providerFees":"{{provider}} \xfccretleri","acrossFeeBreakdownDescription":"<0>Across</0> ve likidite sağlayıcılarına ve y\xf6nlendirme yapanlara \xf6denen \xfccretler","hyperlaneFeeBreakdownDescription":"Mesaj iletimi i\xe7in <0>Hyperlane</0> y\xf6nlendirme yapanlarına \xf6denen \xfccretler"},"gasInfoModal":{"title":"Gaz \xfccretleri","description":"Blok zincirlerinde işlem g\xf6ndermek i\xe7in bir \xfccret \xf6demeniz gerekir. {{from}}\'a g\xf6nderilen işlemler ağ tarafından onaylanması i\xe7in bir miktar {{symbol}} gerektirir.","opWithdrawal":"OP Stack rollup\'larından \xe7ekimler, \xe7\xf6z\xfcmleme zincirinde \xe7ekimi kanıtlamak ve sonlandırmak i\xe7in iki ek işlem gerektirir.","arbWithdrawal":"Arbitrum Nitro rollup\'larından \xe7ekimler, \xe7\xf6z\xfcmleme zincirinde sonlandırma i\xe7in ek bir işlem gerektirir.","cctp":"CCTP aracılığıyla yerel USDC k\xf6pr\xfcleme, hedef zincirde ek bir işlem gerektirir."},"networkSelectorModal":{"title":"Ağ se\xe7"},"routeSelectorModal":{"title":"Rota se\xe7"},"across":{"transferTimeTitle":"S\xfcper hızlı transfer s\xfcresi","transferTimeDescription":"K\xf6pr\xfcleme boyutuna bağlı olarak s\xfcper hızlı transfer s\xfcreleri değişebilir. S\xfcreler yalnızca tahminidir.","timeTo":"{{to}}\'a s\xfcre","feeBreakdownTitle":"Across \xfccretleri","feeBreakdownDescription":"<0>Across</0> ve likidite sağlayıcılarına ve y\xf6nlendirme yapanlara \xf6denen \xfccretler","acrossFee":"Across \xfccreti"},"header":{"supportAndFaqs":"Destek & SSS","legal":"Yasal"}}'),
                eU = JSON.parse('{"reviewBridge":"Xem lại cầu nối","bridging":"Đang tạo cầu nối","connectWallet":"Kết nối v\xed","switchToApprove":"Chuyển đổi","approve":"Ph\xea duyệt","insufficientFunds":"Số dư kh\xf4ng đủ","insufficientGas":"{{symbol}} kh\xf4ng đủ cho ph\xed gas","bridgeLimit":"Giới hạn {{amount}} {{symbol}}","bridgeMin":"Số tiền tối thiểu {{amount}} {{symbol}}","enterAnAmount":"Nhập số tiền","loading":"Đang tải","loadMore":"Tải th\xeam","error":"Lỗi","noAccountConnected":"Kh\xf4ng c\xf3 t\xe0i khoản được kết nối","save":"Lưu","toAddress":"Đến địa chỉ","on":"bật","off":"tắt","receiveOnChain":"Nhận tr\xean {{chain}}","transferTime":"Thời gian chuyển","transferTimeSeconds_one":"~{{count}} gi\xe2y","transferTimeSeconds_other":"~{{count}} gi\xe2y","transferTimeMinutes_one":"~{{count}} ph\xfat","transferTimeMinutes_other":"~{{count}} ph\xfat","transferTimeHours_one":"~{{count}} giờ","transferTimeHours_other":"~{{count}} giờ","transferTimeDays_one":"~{{count}} ng\xe0y","transferTimeDays_other":"~{{count}} ng\xe0y","availableBalance":"{{amount}} {{symbol}} khả dụng","sorryAnErrorOccurred":"Xin lỗi! Đ\xe3 xảy ra lỗi","about":"Về","docs":"T\xe0i liệu","from":"Từ","to":"Đến","manage":"Quản l\xfd","support":"Hỗ trợ","ok":"Ok","general":{"needHelp":"Cần gi\xfap đỡ? Xem C\xe2u hỏi thường gặp"},"settings":{"settings":"C\xe0i đặt","escapeHatchDescription":"Buộc r\xfat tiền th\xf4ng qua c\xe1c giao dịch chống kiểm duyệt tr\xean chuỗi thanh to\xe1n.","currency":"Tiền tệ","language":"Ng\xf4n ngữ","explorer":"Kh\xe1m ph\xe1","tokenLists":"Danh s\xe1ch m\xe3 token","enableTestnets":"K\xedch hoạt testnet","darkMode":"Chế độ tối"},"customTokenLists":{"add":"Th\xeam danh s\xe1ch m\xe3 token t\xf9y chỉnh","name":"T\xean danh s\xe1ch m\xe3 token","namePlaceholder":"T\xean","url":"URL danh s\xe1ch m\xe3 token","urlPlaceholder":"URL","invalid":"URL danh s\xe1ch m\xe3 token kh\xf4ng hợp lệ","loadedTokens":"Đ\xe3 tải {{num}} m\xe3 token","disclaimer":"Bất kỳ ai cũng c\xf3 thể tạo m\xe3 token, bao gồm cả c\xe1c phi\xean bản giả của m\xe3 token hiện c\xf3. H\xe3y cẩn thận. Một số m\xe3 token v\xe0 th\xf4ng số kỹ thuật của ch\xfang c\xf3 thể kh\xf4ng tương th\xedch với dịch vụ của {{app}}. Khi nhập danh s\xe1ch m\xe3 token t\xf9y chỉnh n\xe0y, bạn đồng \xfd v\xe0 chấp nhận c\xe1c rủi ro.","learnMore":"T\xecm hiểu th\xeam về c\xe1c rủi ro.","save":"Lưu danh s\xe1ch","delete":"X\xf3a danh s\xe1ch"},"activity":{"activity":"Hoạt động","actionNeeded":"Cần h\xe0nh động","connectWallet":"Vui l\xf2ng kết nối v\xed của bạn...","noTransactions":"Chưa c\xf3 giao dịch...","error":"Xin lỗi! Ch\xfang t\xf4i kh\xf4ng thể tải lịch sử hoạt động của bạn.\\n Vui l\xf2ng thử l\xe0m mới trang","withdrawn":"Đ\xe3 r\xfat","proving":"Đang chứng minh...","readyToProve":"Sẵn s\xe0ng chứng minh","proved":"Đ\xe3 chứng minh","waitingForStateRoot":"Đang chờ gốc trạng th\xe1i...","waitingForDisputeGame":"Đang chờ tr\xf2 chơi tranh chấp...","stateRootPublished":"Đ\xe3 c\xf4ng bố gốc trạng th\xe1i","challengePeriod":"Thời gian thử th\xe1ch","finalizing":"Đang ho\xe0n tất...","readyToFinalize":"Sẵn s\xe0ng ho\xe0n tất","finalized":"Đ\xe3 ho\xe0n tất","deposited":"Đ\xe3 nạp","depositing":"Đang nạp","l2Confirmation":"X\xe1c nhận L2","waitingForL2":"Đang chờ L2...","bridged":"Đ\xe3 bắc cầu","bridging":"Đang bắc cầu","minted":"Đ\xe3 đ\xfac","minting":"Đang đ\xfac","readyToMint":"Sẵn s\xe0ng đ\xfac","waitingForAttestation":"Đang chờ x\xe1c nhận...","remainingSeconds_one":"C\xf2n ~{{count}} gi\xe2y","remainingSeconds_other":"C\xf2n ~{{count}} gi\xe2y","remainingMinutes_one":"C\xf2n ~{{count}} ph\xfat","remainingMinutes_other":"C\xf2n ~{{count}} ph\xfat","remainingHours_one":"C\xf2n ~{{count}} giờ","remainingHours_other":"C\xf2n ~{{count}} giờ","remainingDays_one":"C\xf2n ~{{count}} ng\xe0y","remainingDays_other":"C\xf2n ~{{count}} ng\xe0y"},"tokens":{"tokens":"M\xe3 token","selectToken":"Chọn m\xe3 token","noneFound":"Kh\xf4ng t\xecm thấy kết quả","notBridgeable":"Kh\xf4ng thể bắc cầu","import":"Nhập khẩu","customImport":"Nhập khẩu t\xf9y chỉnh","customImportFromList":"Từ {{name}}","customImportCheck":"H\xe3y chắc chắn rằng bạn đ\xe3 kiểm tra địa chỉ m\xe3 token v\xe0 n\xf3 ch\xednh x\xe1c:","customL1Address":"Địa chỉ L1","customL2Address":"Địa chỉ L2","customL3Address":"Địa chỉ L3"},"recipient":{"bridgeDestination":"Điểm đến cầu nối","toAddress":"Đến địa chỉ","invalidAddress":"Địa chỉ kh\xf4ng hợp lệ","yourChainAddress":"Đ\xe2y l\xe0 địa chỉ {{chain}} của bạn","usedBefore":"T\xe0i khoản đ\xe3 được sử dụng trước đ\xe2y","usedBeforeMultiple":"T\xe0i khoản đ\xe3 được sử dụng {{count}} lần trước đ\xe2y","newAddress":"Địa chỉ mới - h\xe3y cẩn thận!","checkingAddress":"Đang kiểm tra địa chỉ...","addRecipientAddress":"Th\xeam địa chỉ người nhận","pleaseNote":"Xin lưu \xfd","sameAddressRequirement":"Cầu nối đến hoặc từ {{chain}} phải c\xf3 c\xf9ng địa chỉ người nhận.","checkRecipientAddress":"Kiểm tra địa chỉ người nhận"},"buttons":{"start":"Bắt đầu","finalize":"Ho\xe0n tất","claim":"Y\xeau cầu","prove":"Chứng minh","redeem":"Đổi","switchChain":"Chuyển chuỗi","mint":"Đ\xfac","get":"Nhận","continue":"Tiếp tục","approve":"Ph\xea duyệt","approved":"Đ\xe3 ph\xea duyệt","approving":"Đang ph\xea duyệt","max":"Tối đa","bridgingDisabled":"T\xednh năng bắc cầu bị v\xf4 hiệu h\xf3a","bridgingPaused":"T\xednh năng bắc cầu tạm dừng","reset":"Đặt lại"},"fees":{"fees":"Ph\xed mạng","networkGas":"Gas {{chain}}","easyModeFee":"Gas chế độ dễ"},"poweredBy":"Được hỗ trợ bởi {{name}}","transaction":{"via":"Th\xf4ng qua","transferTime":"Thời gian chuyển","steps":"C\xe1c bước","bridgeInfo":"Th\xf4ng tin cầu nối","fromChain":"Từ {{from}}","toChain":"Đến {{to}}","fromAddress":"Từ địa chỉ","toAddress":"Đến địa chỉ"},"confirmationModal":{"startBridgeOn":"Bắt đầu tr\xean {{from}}","bridgeFrom":"Bắc cầu từ {{from}}","proveOn":"Chứng minh tr\xean {{to}}","getOn":"Nhận tr\xean {{to}}","getAmountOn":"Nhận {{formatted}} tr\xean {{to}}","waitSeconds_one":"Chờ ~{{count}} gi\xe2y","waitSeconds_other":"Chờ ~{{count}} gi\xe2y","waitMinutes_one":"Chờ ~{{count}} ph\xfat","waitMinutes_other":"Chờ ~{{count}} ph\xfat","waitHours_one":"Chờ ~{{count}} giờ","waitHours_other":"Chờ ~{{count}} giờ","waitDays_one":"Chờ ~{{count}} ng\xe0y","waitDays_other":"Chờ ~{{count}} ng\xe0y","prove":"Chứng minh tr\xean {{base}}","finalize":"Y\xeau cầu tr\xean {{to}}","receiveAmountOnChain":"Nhận {{receiveAmount}} {{receiveSymbol}} tr\xean {{to}}","receiveAmount":"Nhận {{formatted}}","approve":"Ph\xea duyệt {{symbol}}","approveGasToken":"Ph\xea duyệt m\xe3 gas"},"tos":{"welcome":"Ch\xe0o mừng đến với {{name}}","poweredBy":"Được hỗ trợ bởi Superbridge","superbridge1":"Giao diện n\xe0y chỉ l\xe0 một lớp tr\xean c\xe1c hợp đồng cầu nối gốc cho c\xe1c rollup Superchain ch\xednh thức.","superbridge2":"Superbridge kh\xf4ng giữ bất kỳ khoản tiền n\xe0o.","superbridge3":"Để được hỗ trợ về cầu nối, vui l\xf2ng truy cập <0>hỗ trợ & FAQ</0>.","superbridge4":"Bằng c\xe1ch sử dụng giao diện n\xe0y, bạn đồng \xfd với <0>Điều khoản v\xe0 Ch\xednh s\xe1ch quyền ri\xeang tư</0> của ch\xfang t\xf4i.","dedicated1":"Giao diện n\xe0y chỉ l\xe0 một lớp tr\xean c\xe1c hợp đồng cầu nối gốc cho <0>{{name}}</0>.","agreeAndContinue":"Đồng \xfd & tiếp tục","forceReadTerms":"Vui l\xf2ng đọc v\xe0 đồng \xfd với Điều khoản Dịch vụ","forceReadPrivacy":"Vui l\xf2ng đọc v\xe0 đồng \xfd với Ch\xednh s\xe1ch Quyền ri\xeang tư"},"legal":{"footerButton":"Điều khoản & Quyền ri\xeang tư","title":"Điều khoản & Quyền ri\xeang tư","superbridgeTerms":"Điều khoản Dịch vụ của Superbridge","superbridgePrivacy":"Ch\xednh s\xe1ch Quyền ri\xeang tư của Superbridge","dedicatedTerms":"Điều khoản Dịch vụ của {{name}}","dedicatedPrivacy":"Ch\xednh s\xe1ch Quyền ri\xeang tư của {{name}}"},"noGasModal":{"youNeedGasOn":"Bạn cần gas tr\xean {{to}}","needHelp":"Cần gi\xfap đỡ? Xem C\xe2u hỏi thường gặp","cctp":"Cầu nối {{symbol}} y\xeau cầu một giao dịch bổ sung tr\xean {{to}}. Vui l\xf2ng nạp th\xeam {{gas}} tr\xean {{to}} để ho\xe0n th\xe0nh cầu nối n\xe0y.","opWithdrawing":"R\xfat tiền y\xeau cầu 2 giao dịch bổ sung tr\xean {{to}}. Vui l\xf2ng nạp th\xeam {{gas}} tr\xean {{to}} để ho\xe0n th\xe0nh giao dịch r\xfat tiền n\xe0y.","arbWithdrawing":"R\xfat {{token}} y\xeau cầu một giao dịch bổ sung tr\xean {{to}}. Vui l\xf2ng nạp th\xeam {{gas}} tr\xean {{to}} để ho\xe0n th\xe0nh giao dịch r\xfat tiền n\xe0y.","depositing":"Kh\xf4ng c\xf3 gas tr\xean {{to}}, bạn sẽ kh\xf4ng thể thực hiện bất kỳ giao dịch n\xe0o. Vui l\xf2ng nạp th\xeam {{gas}} tr\xean {{to}} trước khi thử cầu nối n\xe0y.","topup":"Nạp gas tr\xean {{to}}","goBack":"Quay lại","proceedAnyway":"Tiếp tục d\xf9 sao đi nữa"},"expensiveGasModal":{"title":"Ph\xed mạng cao hơn gi\xe1 trị của m\xe3 token","notBestOption":"Superbridge c\xf3 thể kh\xf4ng phải l\xe0 lựa chọn tốt nhất cho số tiền cầu nối n\xe0y. Vui l\xf2ng xem x\xe9t <0>c\xe1c cầu nối thay thế n\xe0y</0>.","bridgeAmount":"Số tiền cầu nối","networkFees":"Ph\xed mạng","goBack":"Quay lại","proceedAnyway":"Tiếp tục d\xf9 sao đi nữa"},"feeModal":{"providerFees":"Ph\xed của {{provider}}","acrossFeeBreakdownDescription":"Ph\xed trả cho <0>Across</0> v\xe0 c\xe1c nh\xe0 cung cấp thanh khoản v\xe0 tiếp sức của họ","hyperlaneFeeBreakdownDescription":"Ph\xed trả cho tiếp sức <0>Hyperlane</0> để giao nhận tin nhắn"},"gasInfoModal":{"title":"Ph\xed gas","description":"Với blockchain, bạn cần trả một khoản ph\xed để gửi giao dịch. C\xe1c giao dịch gửi đến {{from}} y\xeau cầu một lượng nhỏ {{symbol}} để đảm bảo ch\xfang được mạng lưới x\xe1c nhận.","opWithdrawal":"R\xfat tiền từ c\xe1c rollup OP Stack y\xeau cầu hai giao dịch bổ sung để chứng minh v\xe0 ho\xe0n tất việc r\xfat tiền tr\xean chuỗi thanh to\xe1n.","arbWithdrawal":"R\xfat tiền từ c\xe1c rollup Arbitrum Nitro y\xeau cầu một giao dịch bổ sung để ho\xe0n tất tr\xean chuỗi thanh to\xe1n.","cctp":"Cầu nối USDC gốc th\xf4ng qua CCTP y\xeau cầu một giao dịch bổ sung tr\xean chuỗi đ\xedch."},"networkSelectorModal":{"title":"Chọn mạng"},"routeSelectorModal":{"title":"Chọn lộ tr\xecnh"},"across":{"transferTimeTitle":"Thời gian chuyển si\xeau nhanh","transferTimeDescription":"Thời gian chuyển si\xeau nhanh c\xf3 thể kh\xe1c nhau t\xf9y thuộc v\xe0o k\xedch thước cầu nối. Thời gian chỉ l\xe0 ước t\xednh.","timeTo":"Thời gian đến {{to}}","feeBreakdownTitle":"Ph\xed Across","feeBreakdownDescription":"Ph\xed trả cho <0>Across</0> v\xe0 c\xe1c nh\xe0 cung cấp thanh khoản v\xe0 tiếp sức của họ","acrossFee":"Ph\xed Across"},"header":{"supportAndFaqs":"Hỗ trợ & C\xe2u hỏi thường gặp","legal":"Ph\xe1p l\xfd"}}'),
                eq = JSON.parse('{"reviewBridge":"审核桥接","bridging":"正在桥接","connectWallet":"连接钱包","switchToApprove":"切换","approve":"批准","insufficientFunds":"资金不足","insufficientGas":"{{symbol}} 不足以支付手续费","bridgeLimit":"{{amount}} {{symbol}} 限额","bridgeMin":"最低金额 {{amount}} {{symbol}}","enterAnAmount":"输入金额","loading":"加载中","loadMore":"加载更多","error":"错误","noAccountConnected":"未连接账户","save":"保存","toAddress":"接收地址","on":"开启","off":"关闭","receiveOnChain":"在 {{chain}} 上接收","transferTime":"传输时间","transferTimeSeconds_one":"约{{count}}秒","transferTimeSeconds_other":"约{{count}}秒","transferTimeMinutes_one":"约{{count}}分钟","transferTimeMinutes_other":"约{{count}}分钟","transferTimeHours_one":"约{{count}}小时","transferTimeHours_other":"约{{count}}小时","transferTimeDays_one":"约{{count}}天","transferTimeDays_other":"约{{count}}天","availableBalance":"可用余额 {{amount}} {{symbol}}","sorryAnErrorOccurred":"对不起！发生了错误","about":"关于","docs":"文档","from":"从","to":"到","manage":"管理","support":"支持","ok":"确定","general":{"needHelp":"需要帮助？查看常见问题"},"settings":{"settings":"设置","escapeHatchDescription":"通过结算链上的抗审查交易强制取款。","currency":"货币","language":"语言","explorer":"区块浏览器","tokenLists":"代币列表","enableTestnets":"启用测试网","darkMode":"夜间模式"},"customTokenLists":{"add":"添加自定义代币列表","name":"代币列表名称","namePlaceholder":"名称","url":"代币列表 URL","urlPlaceholder":"URL","invalid":"无效的代币列表 URL","loadedTokens":"已加载 {{num}} 个代币","disclaimer":"任何人都可以创建代币，包括现有代币的虚假版本。请谨慎行事。一些代币及其技术参数可能与 {{app}} 服务不兼容。通过导入此自定义代币列表，您承认并接受这些风险。","learnMore":"了解更多风险信息。","save":"保存列表","delete":"删除列表"},"activity":{"activity":"活动","actionNeeded":"需要操作","connectWallet":"请连接您的钱包...","noTransactions":"暂时没有交易记录...","error":"对不起！我们无法获取您的活动记录。\\n请刷新页面重试","withdrawn":"已取款","proving":"正在证明...","readyToProve":"准备证明","proved":"已证明","waitingForStateRoot":"等待状态根...","waitingForDisputeGame":"等待争议处理...","stateRootPublished":"状态根已发布","challengePeriod":"挑战期","finalizing":"正在完成...","readyToFinalize":"准备完成","finalized":"已完成","deposited":"已存款","depositing":"正在存款","l2Confirmation":"L2 确认","waitingForL2":"正在等待 L2...","bridged":"桥接完成","bridging":"正在桥接","minted":"已铸造","minting":"铸造中","readyToMint":"准备铸造","waitingForAttestation":"等待认证...","remainingSeconds_one":"剩余 ~{{count}} 秒","remainingSeconds_other":"剩余 ~{{count}} 秒","remainingMinutes_one":"剩余 ~{{count}} 分钟","remainingMinutes_other":"剩余 ~{{count}} 分钟","remainingHours_one":"剩余 ~{{count}} 小时","remainingHours_other":"剩余 ~{{count}} 小时","remainingDays_one":"剩余 ~{{count}} 天","remainingDays_other":"剩余 ~{{count}} 天"},"tokens":{"tokens":"代币","selectToken":"选择代币","noneFound":"未找到结果","notBridgeable":"不可桥接","import":"导入","customImport":"自定义导入","customImportFromList":"来自 {{name}}","customImportCheck":"请确保您已检查代币地址，并且它是正确的：","customL1Address":"L1 地址","customL2Address":"L2 地址","customL3Address":"L3 地址"},"recipient":{"bridgeDestination":"桥接目的地","toAddress":"接收地址","invalidAddress":"无效的地址","yourChainAddress":"这是您的 {{chain}} 地址","usedBefore":"之前已使用的账户","usedBeforeMultiple":"账户之前已使用 {{count}} 次","newAddress":"新地址 - 请小心！","checkingAddress":"正在检查地址...","addRecipientAddress":"添加接收地址","pleaseNote":"请注意","sameAddressRequirement":"桥接到或来自 {{chain}} 必须具有相同的接收地址。","checkRecipientAddress":"检查接收地址"},"buttons":{"start":"开始","finalize":"完成","claim":"认领","prove":"证明","redeem":"赎回","switchChain":"切换链","mint":"铸造","get":"获取","continue":"继续","approve":"批准","approved":"已批准","approving":"正在批准","max":"最大","bridgingDisabled":"桥接已禁用","bridgingPaused":"桥接已暂停","reset":"重置"},"fees":{"fees":"网络费用","networkGas":"{{chain}} Gas 费用","easyModeFee":"简易模式 Gas 费用"},"poweredBy":"由 {{name}} 提供支持","transaction":{"via":"通过","transferTime":"传输时间","steps":"步骤","bridgeInfo":"桥接信息","fromChain":"从 {{from}}","toChain":"到 {{to}}","fromAddress":"发送地址","toAddress":"接收地址"},"confirmationModal":{"startBridgeOn":"在 {{from}} 上开始","bridgeFrom":"从 {{from}} 桥接","proveOn":"在 {{to}} 上证明","getOn":"在 {{to}} 上获取","getAmountOn":"在 {{to}} 上获取 {{formatted}}","waitSeconds_one":"等待约 {{count}} 秒","waitSeconds_other":"等待约 {{count}} 秒","waitMinutes_one":"等待约 {{count}} 分钟","waitMinutes_other":"等待约 {{count}} 分钟","waitHours_one":"等待约 {{count}} 小时","waitHours_other":"等待约 {{count}} 小时","waitDays_one":"等待约 {{count}} 天","waitDays_other":"等待约 {{count}} 天","prove":"在 {{base}} 上证明","finalize":"在 {{to}} 上认领","receiveAmountOnChain":"在 {{to}} 上接收 {{receiveAmount}} {{receiveSymbol}}","receiveAmount":"接收 {{formatted}}","approve":"批准 {{symbol}}","approveGasToken":"批准 Gas 代币"},"tos":{"welcome":"欢迎来到 {{name}}","poweredBy":"由 Superbridge 提供支持","superbridge1":"此界面只是官方 Superchain 汇总的原生桥接合约的一个层。","superbridge2":"Superbridge 在任何时候都不保管资金。","superbridge3":"如需桥接帮助，请访问 <0>支持与常见问题解答</0>。","superbridge4":"使用此界面即表示您同意我们的 <0>服务条款和隐私政策</0>。","dedicated1":"此界面只是 <0>{{name}}</0> 的原生桥接合约的一个层。","agreeAndContinue":"同意并继续","forceReadTerms":"请阅读并同意服务条款","forceReadPrivacy":"请阅读并同意隐私政策"},"legal":{"footerButton":"条款与隐私","title":"条款与隐私","superbridgeTerms":"Superbridge 服务条款","superbridgePrivacy":"Superbridge 隐私政策","dedicatedTerms":"{{name}} 服务条款","dedicatedPrivacy":"{{name}} 隐私政策"},"noGasModal":{"youNeedGasOn":"您需要在 {{to}} 上有足够的 Gas","needHelp":"需要帮助？查看常见问题","cctp":"桥接 {{symbol}} 需要在 {{to}} 上进行额外的交易。请在 {{to}} 上充值 {{gas}} 以完成此次桥接。","opWithdrawing":"取款需要在 {{to}} 上进行 2 次额外交易。请在 {{to}} 上充值 {{gas}} 以完成此次取款。","arbWithdrawing":"取款 {{token}} 需要在 {{to}} 上进行额外的交易。请在 {{to}} 上充值 {{gas}} 以完成此次取款。","depositing":"如果 {{to}} 上没有 Gas，您将无法进行任何交易。在尝试桥接之前，请在 {{to}} 上充值 {{gas}}。","topup":"在 {{to}} 上充值 Gas","goBack":"返回","proceedAnyway":"继续进行"},"expensiveGasModal":{"title":"网络费用将高于代币价值","notBestOption":"Superbridge 可能不是该桥接金额的最佳选择。请考虑 <0>这些替代桥接</0>。","bridgeAmount":"桥接金额","networkFees":"网络费用","goBack":"返回","proceedAnyway":"继续进行"},"feeModal":{"providerFees":"{{provider}} 费用","acrossFeeBreakdownDescription":"支付给 <0>Across</0> 及其流动性提供商和中继者的费用","hyperlaneFeeBreakdownDescription":"支付给 <0>Hyperlane</0> 中继者的消息传递费用"},"gasInfoModal":{"title":"Gas 费用","description":"在区块链上进行交易需要支付费用。发送至 {{from}} 的交易需要少量的 {{symbol}} 以确保网络确认它们。","opWithdrawal":"从 OP Stack 汇总取款需要两次额外交易以证明并在结算链上完成取款。","arbWithdrawal":"从 Arbitrum Nitro 汇总取款需要一次额外交易以在结算链上完成。","cctp":"通过 CCTP 桥接原生 USDC 需要在目标链上进行额外交易。"},"networkSelectorModal":{"title":"选择网络"},"routeSelectorModal":{"title":"选择路线"},"across":{"transferTimeTitle":"超快速传输时间","transferTimeDescription":"根据桥接规模，超快速传输时间可能会有所不同。时间仅为估计值。","timeTo":"到 {{to}} 的时间","feeBreakdownTitle":"Across 费用","feeBreakdownDescription":"支付给 <0>Across</0> 及其流动性提供商和中继者的费用","acrossFee":"Across 费用"},"header":{"supportAndFaqs":"支持与常见问题","legal":"法律"}}'),
                eV = JSON.parse('{"reviewBridge":"审核桥接","bridging":"正在桥接","connectWallet":"连接钱包","switchToApprove":"切换","approve":"批准","insufficientFunds":"资金不足","insufficientGas":"{{symbol}} 不足以支付手续费","bridgeLimit":"{{amount}} {{symbol}} 限额","bridgeMin":"最低金额 {{amount}} {{symbol}}","enterAnAmount":"输入金额","loading":"加载中","loadMore":"加载更多","error":"错误","noAccountConnected":"未连接账户","save":"保存","toAddress":"接收地址","on":"开启","off":"关闭","receiveOnChain":"在 {{chain}} 上接收","transferTime":"传输时间","transferTimeSeconds_one":"约{{count}}秒","transferTimeSeconds_other":"约{{count}}秒","transferTimeMinutes_one":"约{{count}}分钟","transferTimeMinutes_other":"约{{count}}分钟","transferTimeHours_one":"约{{count}}小时","transferTimeHours_other":"约{{count}}小时","transferTimeDays_one":"约{{count}}天","transferTimeDays_other":"约{{count}}天","availableBalance":"可用余额 {{amount}} {{symbol}}","sorryAnErrorOccurred":"对不起！发生了错误","about":"关于","docs":"文档","from":"从","to":"到","manage":"管理","support":"支持","ok":"确定","general":{"needHelp":"需要帮助？查看常见问题"},"settings":{"settings":"设置","escapeHatchDescription":"通过结算链上的抗审查交易强制取款。","currency":"货币","language":"语言","explorer":"区块浏览器","tokenLists":"代币列表","enableTestnets":"启用测试网","darkMode":"夜间模式"},"customTokenLists":{"add":"添加自定义代币列表","name":"代币列表名称","namePlaceholder":"名称","url":"代币列表 URL","urlPlaceholder":"URL","invalid":"无效的代币列表 URL","loadedTokens":"已加载 {{num}} 个代币","disclaimer":"任何人都可以创建代币，包括现有代币的虚假版本。请谨慎行事。一些代币及其技术参数可能与 {{app}} 服务不兼容。通过导入此自定义代币列表，您承认并接受这些风险。","learnMore":"了解更多风险信息。","save":"保存列表","delete":"删除列表"},"activity":{"activity":"活动","actionNeeded":"需要操作","connectWallet":"请连接您的钱包...","noTransactions":"暂时没有交易记录...","error":"对不起！我们无法获取您的活动记录。\\n请刷新页面重试","withdrawn":"已取款","proving":"正在证明...","readyToProve":"准备证明","proved":"已证明","waitingForStateRoot":"等待状态根...","waitingForDisputeGame":"等待争议处理...","stateRootPublished":"状态根已发布","challengePeriod":"挑战期","finalizing":"正在完成...","readyToFinalize":"准备完成","finalized":"已完成","deposited":"已存款","depositing":"正在存款","l2Confirmation":"L2 确认","waitingForL2":"正在等待 L2...","bridged":"桥接完成","bridging":"正在桥接","minted":"已铸造","minting":"铸造中","readyToMint":"准备铸造","waitingForAttestation":"等待认证...","remainingSeconds_one":"剩余 ~{{count}} 秒","remainingSeconds_other":"剩余 ~{{count}} 秒","remainingMinutes_one":"剩余 ~{{count}} 分钟","remainingMinutes_other":"剩余 ~{{count}} 分钟","remainingHours_one":"剩余 ~{{count}} 小时","remainingHours_other":"剩余 ~{{count}} 小时","remainingDays_one":"剩余 ~{{count}} 天","remainingDays_other":"剩余 ~{{count}} 天"},"tokens":{"tokens":"代币","selectToken":"选择代币","noneFound":"未找到结果","notBridgeable":"不可桥接","import":"导入","customImport":"自定义导入","customImportFromList":"来自 {{name}}","customImportCheck":"请确保您已检查代币地址，并且它是正确的：","customL1Address":"L1 地址","customL2Address":"L2 地址","customL3Address":"L3 地址"},"recipient":{"bridgeDestination":"桥接目的地","toAddress":"接收地址","invalidAddress":"无效的地址","yourChainAddress":"这是您的 {{chain}} 地址","usedBefore":"之前已使用的账户","usedBeforeMultiple":"账户之前已使用 {{count}} 次","newAddress":"新地址 - 请小心！","checkingAddress":"正在检查地址...","addRecipientAddress":"添加接收地址","pleaseNote":"請注意","sameAddressRequirement":"橋接至或從 {{chain}} 必須具有相同的接收地址。","checkRecipientAddress":"檢查接收地址"},"buttons":{"start":"开始","finalize":"完成","claim":"认领","prove":"证明","redeem":"赎回","switchChain":"切换链","mint":"铸造","get":"获取","continue":"继续","approve":"批准","approved":"已批准","approving":"正在批准","max":"最大","bridgingDisabled":"桥接已禁用","bridgingPaused":"桥接已暂停","reset":"重置"},"fees":{"fees":"网络费用","networkGas":"{{chain}} Gas 费用","easyModeFee":"简易模式 Gas 费用"},"poweredBy":"由 {{name}} 提供支持","transaction":{"via":"通过","transferTime":"传输时间","steps":"步骤","bridgeInfo":"桥接信息","fromChain":"从 {{from}}","toChain":"到 {{to}}","fromAddress":"发送地址","toAddress":"接收地址"},"confirmationModal":{"startBridgeOn":"在 {{from}} 上开始","bridgeFrom":"从 {{from}} 桥接","proveOn":"在 {{to}} 上证明","getOn":"在 {{to}} 上获取","getAmountOn":"在 {{to}} 上获取 {{formatted}}","waitSeconds_one":"等待约 {{count}} 秒","waitSeconds_other":"等待约 {{count}} 秒","waitMinutes_one":"等待约 {{count}} 分钟","waitMinutes_other":"等待约 {{count}} 分钟","waitHours_one":"等待约 {{count}} 小时","waitHours_other":"等待约 {{count}} 小时","waitDays_one":"等待约 {{count}} 天","waitDays_other":"等待约 {{count}} 天","prove":"在 {{base}} 上证明","finalize":"在 {{to}} 上认领","receiveAmountOnChain":"在 {{to}} 上接收 {{receiveAmount}} {{receiveSymbol}}","receiveAmount":"接收 {{formatted}}","approve":"批准 {{symbol}}","approveGasToken":"批准 Gas 代币"},"tos":{"welcome":"欢迎来到 {{name}}","poweredBy":"由 Superbridge 提供支持","superbridge1":"此界面只是官方 Superchain 汇总的原生桥接合约的一个层。","superbridge2":"Superbridge 在任何时候都不保管资金。","superbridge3":"如需桥接帮助，请访问 <0>支持与常见问题解答</0>。","superbridge4":"使用此界面即表示您同意我们的 <0>服务条款和隐私政策</0>。","dedicated1":"此界面只是 <0>{{name}}</0> 的原生桥接合约的一个层。","agreeAndContinue":"同意并继续","forceReadTerms":"请阅读并同意服务条款","forceReadPrivacy":"请阅读并同意隐私政策"},"legal":{"footerButton":"条款与隐私","title":"条款与隐私","superbridgeTerms":"Superbridge 服务条款","superbridgePrivacy":"Superbridge 隐私政策","dedicatedTerms":"{{name}} 服务条款","dedicatedPrivacy":"{{name}} 隐私政策"},"noGasModal":{"youNeedGasOn":"您需要在 {{to}} 上有足够的 Gas","needHelp":"需要帮助？查看常见问题","cctp":"桥接 {{symbol}} 需要在 {{to}} 上进行额外的交易。请在 {{to}} 上充值 {{gas}} 以完成此次桥接。","opWithdrawing":"取款需要在 {{to}} 上进行 2 次额外交易。请在 {{to}} 上充值 {{gas}} 以完成此次取款。","arbWithdrawing":"取款 {{token}} 需要在 {{to}} 上进行额外的交易。请在 {{to}} 上充值 {{gas}} 以完成此次取款。","depositing":"如果 {{to}} 上没有 Gas，您将无法进行任何交易。在尝试桥接之前，请在 {{to}} 上充值 {{gas}}。","topup":"在 {{to}} 上充值 Gas","goBack":"返回","proceedAnyway":"继续进行"},"expensiveGasModal":{"title":"网络费用将高于代币价值","notBestOption":"Superbridge 可能不是该桥接金额的最佳选择。请考虑 <0>这些替代桥接</0>。","bridgeAmount":"桥接金额","networkFees":"网络费用","goBack":"返回","proceedAnyway":"继续进行"},"feeModal":{"providerFees":"{{provider}} 费用","acrossFeeBreakdownDescription":"支付给 <0>Across</0> 及其流动性提供商和中继者的费用","hyperlaneFeeBreakdownDescription":"支付给 <0>Hyperlane</0> 中继者的消息传递费用"},"gasInfoModal":{"title":"Gas 费用","description":"在区块链上进行交易需要支付费用。发送至 {{from}} 的交易需要少量的 {{symbol}} 以确保网络确认它们。","opWithdrawal":"从 OP Stack 汇总取款需要两次额外交易以证明并在结算链上完成取款。","arbWithdrawal":"从 Arbitrum Nitro 汇总取款需要一次额外交易以在结算链上完成。","cctp":"通过 CCTP 桥接原生 USDC 需要在目标链上进行额外交易。"},"networkSelectorModal":{"title":"选择网络"},"routeSelectorModal":{"title":"选择路线"},"across":{"transferTimeTitle":"超快速传输时间","transferTimeDescription":"根据桥接规模，超快速传输时间可能会有所不同。时间仅为估计值。","timeTo":"到 {{to}} 的时间","feeBreakdownTitle":"Across 费用","feeBreakdownDescription":"支付给 <0>Across</0> 及其流动性提供商和中继者的费用","acrossFee":"Across 费用"},"header":{"supportAndFaqs":"支持与常见问题","legal":"法律"}}');
            ec.use(eL).use(eO.Db).init({
                fallbackLng: "en",
                debug: !1,
                resources: {
                    ar: {
                        translation: eD
                    },
                    de: {
                        translation: eE
                    },
                    en: {
                        translation: eM
                    },
                    es: {
                        translation: eR
                    },
                    fr: {
                        translation: eF
                    },
                    hi: {
                        translation: eB
                    },
                    id: {
                        translation: eN
                    },
                    ja: {
                        translation: ej
                    },
                    kr: {
                        translation: eI
                    },
                    pl: {
                        translation: e$
                    },
                    pt: {
                        translation: eH
                    },
                    th: {
                        translation: eW
                    },
                    tr: {
                        translation: eG
                    },
                    vi: {
                        translation: eU
                    },
                    "zh-CN": {
                        translation: eq
                    },
                    "zh-TW": {
                        translation: eV
                    }
                },
                interpolation: {
                    escapeValue: !1
                }
            });
            let eK = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function eJ(e) {
                return e && e.Math == Math ? e : void 0
            }
            let eY = "object" == typeof globalThis && eJ(globalThis) || "object" == typeof window && eJ(window) || "object" == typeof self && eJ(self) || "object" == typeof n.g && eJ(n.g) || function () {
                return this
            }() || {};

            function eQ(e, t, n) {
                let r = n || eY,
                    i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[e] || (i[e] = t())
            }
            let eZ = ["debug", "info", "warn", "error", "log", "assert", "trace"],
                eX = {};

            function e0(e) {
                if (!("console" in eY)) return e();
                let t = eY.console,
                    n = {},
                    r = Object.keys(eX);
                r.forEach(e => {
                    let r = eX[e];
                    n[e] = t[e], t[e] = r
                });
                try {
                    return e()
                } finally {
                    r.forEach(e => {
                        t[e] = n[e]
                    })
                }
            }
            let e1 = function () {
                    let e = !1,
                        t = {
                            enable: () => {
                                e = !0
                            },
                            disable: () => {
                                e = !1
                            },
                            isEnabled: () => e
                        };
                    return eK ? eZ.forEach(n => {
                        t[n] = (...t) => {
                            e && e0(() => {
                                eY.console[n](`Sentry Logger [${n}]:`, ...t)
                            })
                        }
                    }) : eZ.forEach(e => {
                        t[e] = () => void 0
                    }), t
                }(),
                e2 = Object.prototype.toString;

            function e3(e) {
                switch (e2.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return tr(e, Error)
                }
            }

            function e8(e, t) {
                return e2.call(e) === `[object ${t}]`
            }

            function e4(e) {
                return e8(e, "ErrorEvent")
            }

            function e5(e) {
                return e8(e, "DOMError")
            }

            function e6(e) {
                return e8(e, "String")
            }

            function e7(e) {
                return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
            }

            function e9(e) {
                return null === e || e7(e) || "object" != typeof e && "function" != typeof e
            }

            function te(e) {
                return e8(e, "Object")
            }

            function tt(e) {
                return "undefined" != typeof Event && tr(e, Event)
            }

            function tn(e) {
                return !!(e && e.then && "function" == typeof e.then)
            }

            function tr(e, t) {
                try {
                    return e instanceof t
                } catch (e) {
                    return !1
                }
            }

            function ti(e) {
                return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
            }

            function to(e, t = {}) {
                if (!e) return "<unknown>";
                try {
                    let n, r = e,
                        i = [],
                        o = 0,
                        a = 0,
                        s = Array.isArray(t) ? t : t.keyAttrs,
                        d = !Array.isArray(t) && t.maxStringLength || 80;
                    for (; r && o++ < 5 && (n = function (e, t) {
                            let n, r, i, o, a;
                            let s = [];
                            if (!e || !e.tagName) return "";
                            if (eY.HTMLElement && e instanceof HTMLElement && e.dataset && e.dataset.sentryComponent) return e.dataset.sentryComponent;
                            s.push(e.tagName.toLowerCase());
                            let d = t && t.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                            if (d && d.length) d.forEach(e => {
                                s.push(`[${e[0]}="${e[1]}"]`)
                            });
                            else if (e.id && s.push(`#${e.id}`), (n = e.className) && e6(n))
                                for (a = 0, r = n.split(/\s+/); a < r.length; a++) s.push(`.${r[a]}`);
                            let l = ["aria-label", "type", "name", "title", "alt"];
                            for (a = 0; a < l.length; a++) i = l[a], (o = e.getAttribute(i)) && s.push(`[${i}="${o}"]`);
                            return s.join("")
                        }(r, s), "html" !== n && (!(o > 1) || !(a + 3 * i.length + n.length >= d)));) i.push(n), a += n.length, r = r.parentNode;
                    return i.reverse().join(" > ")
                } catch (e) {
                    return "<unknown>"
                }
            }

            function ta(e, t = 0) {
                return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0,t)}...`
            }

            function ts(e, t) {
                if (!Array.isArray(e)) return "";
                let n = [];
                for (let t = 0; t < e.length; t++) {
                    let r = e[t];
                    try {
                        ti(r) ? n.push("[VueViewModel]") : n.push(String(r))
                    } catch (e) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(t)
            }

            function td(e, t = [], n = !1) {
                return t.some(t => (function (e, t, n = !1) {
                    return !!e6(e) && (e8(t, "RegExp") ? t.test(e) : !!e6(t) && (n ? e === t : e.includes(t)))
                })(e, t, n))
            }

            function tl(e, t, n) {
                if (!(t in e)) return;
                let r = e[t],
                    i = n(r);
                "function" == typeof i && tu(i, r), e[t] = i
            }

            function tc(e, t, n) {
                try {
                    Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                } catch (n) {
                    eK && e1.log(`Failed to add non-enumerable property "${t}" to object`, e)
                }
            }

            function tu(e, t) {
                try {
                    let n = t.prototype || {};
                    e.prototype = t.prototype = n, tc(e, "__sentry_original__", t)
                } catch (e) {}
            }

            function tp(e) {
                return e.__sentry_original__
            }

            function tg(e) {
                if (e3(e)) return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...tm(e)
                };
                if (!tt(e)) return e; {
                    let t = {
                        type: e.type,
                        target: th(e.target),
                        currentTarget: th(e.currentTarget),
                        ...tm(e)
                    };
                    return "undefined" != typeof CustomEvent && tr(e, CustomEvent) && (t.detail = e.detail), t
                }
            }

            function th(e) {
                try {
                    return "undefined" != typeof Element && tr(e, Element) ? to(e) : Object.prototype.toString.call(e)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function tm(e) {
                if ("object" != typeof e || null === e) return {}; {
                    let t = {};
                    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }
            }

            function tf(e) {
                return function e(t, n) {
                    if (function (e) {
                            if (!te(e)) return !1;
                            try {
                                let t = Object.getPrototypeOf(e).constructor.name;
                                return !t || "Object" === t
                            } catch (e) {
                                return !0
                            }
                        }(t)) {
                        let r = n.get(t);
                        if (void 0 !== r) return r;
                        let i = {};
                        for (let r of (n.set(t, i), Object.keys(t))) void 0 !== t[r] && (i[r] = e(t[r], n));
                        return i
                    }
                    if (Array.isArray(t)) {
                        let r = n.get(t);
                        if (void 0 !== r) return r;
                        let i = [];
                        return n.set(t, i), t.forEach(t => {
                            i.push(e(t, n))
                        }), i
                    }
                    return t
                }(e, new Map)
            }

            function ty() {
                let e = eY.crypto || eY.msCrypto,
                    t = () => 16 * Math.random();
                try {
                    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                    e && e.getRandomValues && (t = () => {
                        let t = new Uint8Array(1);
                        return e.getRandomValues(t), t[0]
                    })
                } catch (e) {}
                return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & t()) >> e / 4).toString(16))
            }

            function tb(e) {
                return e.exception && e.exception.values ? e.exception.values[0] : void 0
            }

            function tv(e) {
                let {
                    message: t,
                    event_id: n
                } = e;
                if (t) return t;
                let r = tb(e);
                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }

            function tk(e, t, n) {
                let r = e.exception = e.exception || {},
                    i = r.values = r.values || [],
                    o = i[0] = i[0] || {};
                o.value || (o.value = t || ""), o.type || (o.type = n || "Error")
            }

            function tw(e, t) {
                let n = tb(e);
                if (!n) return;
                let r = n.mechanism;
                if (n.mechanism = {
                        type: "generic",
                        handled: !0,
                        ...r,
                        ...t
                    }, t && "data" in t) {
                    let e = {
                        ...r && r.data,
                        ...t.data
                    };
                    n.mechanism.data = e
                }
            }

            function t_(e) {
                if (e && e.__sentry_captured__) return !0;
                try {
                    tc(e, "__sentry_captured__", !0)
                } catch (e) {}
                return !1
            }

            function tS(e) {
                return Array.isArray(e) ? e : [e]
            }
            let tA = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function tT(e) {
                return new tz(t => {
                    t(e)
                })
            }

            function tx(e) {
                return new tz((t, n) => {
                    n(e)
                })
            }(c = u || (u = {}))[c.PENDING = 0] = "PENDING", c[c.RESOLVED = 1] = "RESOLVED", c[c.REJECTED = 2] = "REJECTED";
            class tz {
                constructor(e) {
                    tz.prototype.__init.call(this), tz.prototype.__init2.call(this), tz.prototype.__init3.call(this), tz.prototype.__init4.call(this), this._state = u.PENDING, this._handlers = [];
                    try {
                        e(this._resolve, this._reject)
                    } catch (e) {
                        this._reject(e)
                    }
                }
                then(e, t) {
                    return new tz((n, r) => {
                        this._handlers.push([!1, t => {
                            if (e) try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            } else n(t)
                        }, e => {
                            if (t) try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            } else r(e)
                        }]), this._executeHandlers()
                    })
                } catch (e) {
                    return this.then(e => e, e)
                } finally(e) {
                    return new tz((t, n) => {
                        let r, i;
                        return this.then(t => {
                            i = !1, r = t, e && e()
                        }, t => {
                            i = !0, r = t, e && e()
                        }).then(() => {
                            if (i) {
                                n(r);
                                return
                            }
                            t(r)
                        })
                    })
                }
                __init() {
                    this._resolve = e => {
                        this._setResult(u.RESOLVED, e)
                    }
                }
                __init2() {
                    this._reject = e => {
                        this._setResult(u.REJECTED, e)
                    }
                }
                __init3() {
                    this._setResult = (e, t) => {
                        if (this._state === u.PENDING) {
                            if (tn(t)) {
                                t.then(this._resolve, this._reject);
                                return
                            }
                            this._state = e, this._value = t, this._executeHandlers()
                        }
                    }
                }
                __init4() {
                    this._executeHandlers = () => {
                        if (this._state === u.PENDING) return;
                        let e = this._handlers.slice();
                        this._handlers = [], e.forEach(e => {
                            e[0] || (this._state === u.RESOLVED && e[1](this._value), this._state === u.REJECTED && e[2](this._value), e[0] = !0)
                        })
                    }
                }
            }

            function tC() {
                return eQ("globalEventProcessors", () => [])
            }

            function tP(e) {
                tC().push(e)
            }

            function tL(e, t, n, r = 0) {
                return new tz((i, o) => {
                    let a = e[r];
                    if (null === t || "function" != typeof a) i(t);
                    else {
                        let s = a({
                            ...t
                        }, n);
                        tA && a.id && null === s && e1.log(`Event processor "${a.id}" dropped event`), tn(s) ? s.then(t => tL(e, t, n, r + 1).then(i)).then(null, o) : tL(e, s, n, r + 1).then(i).then(null, o)
                    }
                })
            }

            function tO() {
                return Date.now() / 1e3
            }
            let tD = function () {
                let {
                    performance: e
                } = eY;
                if (!e || !e.now) return tO;
                let t = Date.now() - e.now(),
                    n = void 0 == e.timeOrigin ? t : e.timeOrigin;
                return () => (n + e.now()) / 1e3
            }();
            (() => {
                let {
                    performance: e
                } = eY;
                if (!e || !e.now) return;
                let t = e.now(),
                    n = Date.now(),
                    r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
                    i = e.timing && e.timing.navigationStart,
                    o = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
                if (r < 36e5 || o < 36e5) return r <= o ? e.timeOrigin : void 0
            })();
            let tE = "production";

            function tM(e) {
                let t = tD(),
                    n = {
                        sid: ty(),
                        init: !0,
                        timestamp: t,
                        started: t,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => tf({
                            sid: `${n.sid}`,
                            init: n.init,
                            started: new Date(1e3 * n.started).toISOString(),
                            timestamp: new Date(1e3 * n.timestamp).toISOString(),
                            status: n.status,
                            errors: n.errors,
                            did: "number" == typeof n.did || "string" == typeof n.did ? `${n.did}` : void 0,
                            duration: n.duration,
                            abnormal_mechanism: n.abnormal_mechanism,
                            attrs: {
                                release: n.release,
                                environment: n.environment,
                                ip_address: n.ipAddress,
                                user_agent: n.userAgent
                            }
                        })
                    };
                return e && tR(n, e), n
            }

            function tR(e, t = {}) {
                if (!t.user || (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || tD(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : ty()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" == typeof t.duration) e.duration = t.duration;
                else {
                    let t = e.timestamp - e.started;
                    e.duration = t >= 0 ? t : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }

            function tF(e, t) {
                let n = {};
                t ? n = {
                    status: t
                } : "ok" === e.status && (n = {
                    status: "exited"
                }), tR(e, n)
            }
            let tB = /\(error: (.*)\)/,
                tN = /captureMessage|captureException/;

            function tj(...e) {
                let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
                return (e, n = 0) => {
                    let r = [],
                        i = e.split("\n");
                    for (let e = n; e < i.length; e++) {
                        let n = i[e];
                        if (n.length > 1024) continue;
                        let o = tB.test(n) ? n.replace(tB, "$1") : n;
                        if (!o.match(/\S*Error: /)) {
                            for (let e of t) {
                                let t = e(o);
                                if (t) {
                                    r.push(t);
                                    break
                                }
                            }
                            if (r.length >= 50) break
                        }
                    }
                    return function (e) {
                        if (!e.length) return [];
                        let t = Array.from(e);
                        return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(), t.reverse(), tN.test(t[t.length - 1].function || "") && (t.pop(), tN.test(t[t.length - 1].function || "") && t.pop()), t.slice(0, 50).map(e => ({
                            ...e,
                            filename: e.filename || t[t.length - 1].filename,
                            function: e.function || "?"
                        }))
                    }(r)
                }
            }
            let tI = "<anonymous>";

            function t$(e) {
                try {
                    if (!e || "function" != typeof e) return tI;
                    return e.name || tI
                } catch (e) {
                    return tI
                }
            }

            function tH(e, t = 100, r = Infinity) {
                try {
                    return function e(t, r, i = Infinity, o = Infinity, a = function () {
                        let e = "function" == typeof WeakSet,
                            t = e ? new WeakSet : [];
                        return [function (n) {
                            if (e) return !!t.has(n) || (t.add(n), !1);
                            for (let e = 0; e < t.length; e++)
                                if (t[e] === n) return !0;
                            return t.push(n), !1
                        }, function (n) {
                            if (e) t.delete(n);
                            else
                                for (let e = 0; e < t.length; e++)
                                    if (t[e] === n) {
                                        t.splice(e, 1);
                                        break
                                    }
                        }]
                    }()) {
                        let [s, d] = a;
                        if (null == r || ["number", "boolean", "string"].includes(typeof r) && !("number" == typeof r && r != r)) return r;
                        let l = function (e, t) {
                            try {
                                if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                                if ("domainEmitter" === e) return "[DomainEmitter]";
                                if (void 0 !== n.g && t === n.g) return "[Global]";
                                if ("undefined" != typeof window && t === window) return "[Window]";
                                if ("undefined" != typeof document && t === document) return "[Document]";
                                if (ti(t)) return "[VueViewModel]";
                                if (te(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t) return "[SyntheticEvent]";
                                if ("number" == typeof t && t != t) return "[NaN]";
                                if ("function" == typeof t) return `[Function: ${t$(t)}]`;
                                if ("symbol" == typeof t) return `[${String(t)}]`;
                                if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                                let r = function (e) {
                                    let t = Object.getPrototypeOf(e);
                                    return t ? t.constructor.name : "null prototype"
                                }(t);
                                if (/^HTML(\w*)Element$/.test(r)) return `[HTMLElement: ${r}]`;
                                return `[object ${r}]`
                            } catch (e) {
                                return `**non-serializable** (${e})`
                            }
                        }(t, r);
                        if (!l.startsWith("[object ")) return l;
                        if (r.__sentry_skip_normalization__) return r;
                        let c = "number" == typeof r.__sentry_override_normalization_depth__ ? r.__sentry_override_normalization_depth__ : i;
                        if (0 === c) return l.replace("object ", "");
                        if (s(r)) return "[Circular ~]";
                        if (r && "function" == typeof r.toJSON) try {
                            let t = r.toJSON();
                            return e("", t, c - 1, o, a)
                        } catch (e) {}
                        let u = Array.isArray(r) ? [] : {},
                            p = 0,
                            g = tg(r);
                        for (let t in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, t)) continue;
                            if (p >= o) {
                                u[t] = "[MaxProperties ~]";
                                break
                            }
                            let n = g[t];
                            u[t] = e(t, n, c - 1, o, a), p++
                        }
                        return d(r), u
                    }("", e, t, r)
                } catch (e) {
                    return {
                        ERROR: `**non-serializable** (${e})`
                    }
                }
            }

            function tW(e) {
                return "function" == typeof e.getSpanJSON ? e.getSpanJSON() : "function" == typeof e.toJSON ? e.toJSON() : {}
            }
            let tG = new WeakMap;

            function tU(e, t) {
                return nt().captureEvent(e, t)
            }

            function tq(e, t) {
                nt().addBreadcrumb(e, t)
            }

            function tV() {
                return nt().getClient()
            }

            function tK() {
                return nt().getScope()
            }

            function tJ(e) {
                let t = tV(),
                    n = nn(),
                    r = tK(),
                    {
                        release: i,
                        environment: o = tE
                    } = t && t.getOptions() || {},
                    {
                        userAgent: a
                    } = eY.navigator || {},
                    s = tM({
                        release: i,
                        environment: o,
                        user: r.getUser() || n.getUser(),
                        ...a && {
                            userAgent: a
                        },
                        ...e
                    }),
                    d = n.getSession();
                return d && "ok" === d.status && tR(d, {
                    status: "exited"
                }), tY(), n.setSession(s), r.setSession(s), s
            }

            function tY() {
                let e = nn(),
                    t = tK(),
                    n = t.getSession() || e.getSession();
                n && tF(n), tQ(), e.setSession(), t.setSession()
            }

            function tQ() {
                let e = nn(),
                    t = tK(),
                    n = tV(),
                    r = t.getSession() || e.getSession();
                r && n && n.captureSession && n.captureSession(r)
            }

            function tZ(e = !1) {
                if (e) {
                    tY();
                    return
                }
                tQ()
            }

            function tX(e) {
                return e.transaction
            }

            function t0(e, t, n) {
                let r = t.getOptions(),
                    {
                        publicKey: i
                    } = t.getDsn() || {},
                    {
                        segment: o
                    } = n && n.getUser() || {},
                    a = tf({
                        environment: r.environment || tE,
                        release: r.release,
                        user_segment: o,
                        public_key: i,
                        trace_id: e
                    });
                return t.emit && t.emit("createDsc", a), a
            }

            function t1(e, t) {
                let {
                    fingerprint: n,
                    span: r,
                    breadcrumbs: i,
                    sdkProcessingMetadata: o
                } = t;
                (function (e, t) {
                    let {
                        extra: n,
                        tags: r,
                        user: i,
                        contexts: o,
                        level: a,
                        transactionName: s
                    } = t, d = tf(n);
                    d && Object.keys(d).length && (e.extra = {
                        ...d,
                        ...e.extra
                    });
                    let l = tf(r);
                    l && Object.keys(l).length && (e.tags = {
                        ...l,
                        ...e.tags
                    });
                    let c = tf(i);
                    c && Object.keys(c).length && (e.user = {
                        ...c,
                        ...e.user
                    });
                    let u = tf(o);
                    u && Object.keys(u).length && (e.contexts = {
                        ...u,
                        ...e.contexts
                    }), a && (e.level = a), s && (e.transaction = s)
                })(e, t), r && function (e, t) {
                        e.contexts = {
                            trace: function (e) {
                                let {
                                    spanId: t,
                                    traceId: n
                                } = e.spanContext(), {
                                    data: r,
                                    op: i,
                                    parent_span_id: o,
                                    status: a,
                                    tags: s,
                                    origin: d
                                } = tW(e);
                                return tf({
                                    data: r,
                                    op: i,
                                    parent_span_id: o,
                                    span_id: t,
                                    status: a,
                                    tags: s,
                                    trace_id: n,
                                    origin: d
                                })
                            }(t),
                            ...e.contexts
                        };
                        let n = tX(t);
                        if (n) {
                            e.sdkProcessingMetadata = {
                                dynamicSamplingContext: function (e) {
                                    let t = tV();
                                    if (!t) return {};
                                    let n = t0(tW(e).trace_id || "", t, tK()),
                                        r = tX(e);
                                    if (!r) return n;
                                    let i = r && r._frozenDynamicSamplingContext;
                                    if (i) return i;
                                    let {
                                        sampleRate: o,
                                        source: a
                                    } = r.metadata;
                                    null != o && (n.sample_rate = `${o}`);
                                    let s = tW(r);
                                    return a && "url" !== a && (n.transaction = s.description), n.sampled = String(function (e) {
                                        let {
                                            traceFlags: t
                                        } = e.spanContext();
                                        return !!(1 & t)
                                    }(r)), t.emit && t.emit("createDsc", n), n
                                }(t),
                                ...e.sdkProcessingMetadata
                            };
                            let r = tW(n).description;
                            r && (e.tags = {
                                transaction: r,
                                ...e.tags
                            })
                        }
                    }(e, r), e.fingerprint = e.fingerprint ? tS(e.fingerprint) : [], n && (e.fingerprint = e.fingerprint.concat(n)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint,
                    function (e, t) {
                        let n = [...e.breadcrumbs || [], ...t];
                        e.breadcrumbs = n.length ? n : void 0
                    }(e, i), e.sdkProcessingMetadata = {
                        ...e.sdkProcessingMetadata,
                        ...o
                    }
            }

            function t2(e, t) {
                let {
                    extra: n,
                    tags: r,
                    user: i,
                    contexts: o,
                    level: a,
                    sdkProcessingMetadata: s,
                    breadcrumbs: d,
                    fingerprint: l,
                    eventProcessors: c,
                    attachments: u,
                    propagationContext: p,
                    transactionName: g,
                    span: h
                } = t;
                t3(e, "extra", n), t3(e, "tags", r), t3(e, "user", i), t3(e, "contexts", o), t3(e, "sdkProcessingMetadata", s), a && (e.level = a), g && (e.transactionName = g), h && (e.span = h), d.length && (e.breadcrumbs = [...e.breadcrumbs, ...d]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), c.length && (e.eventProcessors = [...e.eventProcessors, ...c]), u.length && (e.attachments = [...e.attachments, ...u]), e.propagationContext = {
                    ...e.propagationContext,
                    ...p
                }
            }

            function t3(e, t, n) {
                if (n && Object.keys(n).length)
                    for (let r in e[t] = {
                            ...e[t]
                        }, n) Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
            }
            class t8 {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = t4()
                }
                static clone(e) {
                    return e ? e.clone() : new t8
                }
                clone() {
                    let e = new t8;
                    return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
                        ...this._tags
                    }, e._extra = {
                        ...this._extra
                    }, e._contexts = {
                        ...this._contexts
                    }, e._user = this._user, e._level = this._level, e._span = this._span, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
                        ...this._sdkProcessingMetadata
                    }, e._propagationContext = {
                        ...this._propagationContext
                    }, e._client = this._client, e
                }
                setClient(e) {
                    this._client = e
                }
                getClient() {
                    return this._client
                }
                addScopeListener(e) {
                    this._scopeListeners.push(e)
                }
                addEventProcessor(e) {
                    return this._eventProcessors.push(e), this
                }
                setUser(e) {
                    return this._user = e || {
                        email: void 0,
                        id: void 0,
                        ip_address: void 0,
                        segment: void 0,
                        username: void 0
                    }, this._session && tR(this._session, {
                        user: e
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(e) {
                    return this._requestSession = e, this
                }
                setTags(e) {
                    return this._tags = {
                        ...this._tags,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setTag(e, t) {
                    return this._tags = {
                        ...this._tags,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setExtras(e) {
                    return this._extra = {
                        ...this._extra,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setExtra(e, t) {
                    return this._extra = {
                        ...this._extra,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(e) {
                    return this._fingerprint = e, this._notifyScopeListeners(), this
                }
                setLevel(e) {
                    return this._level = e, this._notifyScopeListeners(), this
                }
                setTransactionName(e) {
                    return this._transactionName = e, this._notifyScopeListeners(), this
                }
                setContext(e, t) {
                    return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
                }
                setSpan(e) {
                    return this._span = e, this._notifyScopeListeners(), this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    let e = this._span;
                    return e && e.transaction
                }
                setSession(e) {
                    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(e) {
                    if (!e) return this;
                    let t = "function" == typeof e ? e(this) : e;
                    if (t instanceof t8) {
                        let e = t.getScopeData();
                        this._tags = {
                            ...this._tags,
                            ...e.tags
                        }, this._extra = {
                            ...this._extra,
                            ...e.extra
                        }, this._contexts = {
                            ...this._contexts,
                            ...e.contexts
                        }, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint.length && (this._fingerprint = e.fingerprint), t.getRequestSession() && (this._requestSession = t.getRequestSession()), e.propagationContext && (this._propagationContext = e.propagationContext)
                    } else te(t) && (this._tags = {
                        ...this._tags,
                        ...e.tags
                    }, this._extra = {
                        ...this._extra,
                        ...e.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...e.contexts
                    }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext));
                    return this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = t4(), this
                }
                addBreadcrumb(e, t) {
                    let n = "number" == typeof t ? t : 100;
                    if (n <= 0) return this;
                    let r = {
                            timestamp: tO(),
                            ...e
                        },
                        i = this._breadcrumbs;
                    return i.push(r), this._breadcrumbs = i.length > n ? i.slice(-n) : i, this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(e) {
                    return this._attachments.push(e), this
                }
                getAttachments() {
                    return this.getScopeData().attachments
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                getScopeData() {
                    let {
                        _breadcrumbs: e,
                        _attachments: t,
                        _contexts: n,
                        _tags: r,
                        _extra: i,
                        _user: o,
                        _level: a,
                        _fingerprint: s,
                        _eventProcessors: d,
                        _propagationContext: l,
                        _sdkProcessingMetadata: c,
                        _transactionName: u,
                        _span: p
                    } = this;
                    return {
                        breadcrumbs: e,
                        attachments: t,
                        contexts: n,
                        tags: r,
                        extra: i,
                        user: o,
                        level: a,
                        fingerprint: s || [],
                        eventProcessors: d,
                        propagationContext: l,
                        sdkProcessingMetadata: c,
                        transactionName: u,
                        span: p
                    }
                }
                applyToEvent(e, t = {}, n = []) {
                    return t1(e, this.getScopeData()), tL([...n, ...tC(), ...this._eventProcessors], e, t)
                }
                setSDKProcessingMetadata(e) {
                    return this._sdkProcessingMetadata = {
                        ...this._sdkProcessingMetadata,
                        ...e
                    }, this
                }
                setPropagationContext(e) {
                    return this._propagationContext = e, this
                }
                getPropagationContext() {
                    return this._propagationContext
                }
                captureException(e, t) {
                    let n = t && t.event_id ? t.event_id : ty();
                    if (!this._client) return e1.warn("No client configured on scope - will not capture exception!"), n;
                    let r = Error("Sentry syntheticException");
                    return this._client.captureException(e, {
                        originalException: e,
                        syntheticException: r,
                        ...t,
                        event_id: n
                    }, this), n
                }
                captureMessage(e, t, n) {
                    let r = n && n.event_id ? n.event_id : ty();
                    if (!this._client) return e1.warn("No client configured on scope - will not capture message!"), r;
                    let i = Error(e);
                    return this._client.captureMessage(e, t, {
                        originalException: e,
                        syntheticException: i,
                        ...n,
                        event_id: r
                    }, this), r
                }
                captureEvent(e, t) {
                    let n = t && t.event_id ? t.event_id : ty();
                    return this._client ? this._client.captureEvent(e, {
                        ...t,
                        event_id: n
                    }, this) : e1.warn("No client configured on scope - will not capture event!"), n
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                        e(this)
                    }), this._notifyingListeners = !1)
                }
            }

            function t4() {
                return {
                    traceId: ty(),
                    spanId: ty().substring(16)
                }
            }
            let t5 = "7.119.2",
                t6 = parseFloat(t5);
            class t7 {
                constructor(e, t, n, r = t6) {
                    let i, o;
                    this._version = r, t ? i = t : (i = new t8).setClient(e), n ? o = n : (o = new t8).setClient(e), this._stack = [{
                        scope: i
                    }], e && this.bindClient(e), this._isolationScope = o
                }
                isOlderThan(e) {
                    return this._version < e
                }
                bindClient(e) {
                    let t = this.getStackTop();
                    t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations()
                }
                pushScope() {
                    let e = this.getScope().clone();
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(e) {
                    let t;
                    let n = this.pushScope();
                    try {
                        t = e(n)
                    } catch (e) {
                        throw this.popScope(), e
                    }
                    return tn(t) ? t.then(e => (this.popScope(), e), e => {
                        throw this.popScope(), e
                    }) : (this.popScope(), t)
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getIsolationScope() {
                    return this._isolationScope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(e, t) {
                    let n = this._lastEventId = t && t.event_id ? t.event_id : ty(),
                        r = Error("Sentry syntheticException");
                    return this.getScope().captureException(e, {
                        originalException: e,
                        syntheticException: r,
                        ...t,
                        event_id: n
                    }), n
                }
                captureMessage(e, t, n) {
                    let r = this._lastEventId = n && n.event_id ? n.event_id : ty(),
                        i = Error(e);
                    return this.getScope().captureMessage(e, t, {
                        originalException: e,
                        syntheticException: i,
                        ...n,
                        event_id: r
                    }), r
                }
                captureEvent(e, t) {
                    let n = t && t.event_id ? t.event_id : ty();
                    return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {
                        ...t,
                        event_id: n
                    }), n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(e, t) {
                    let {
                        scope: n,
                        client: r
                    } = this.getStackTop();
                    if (!r) return;
                    let {
                        beforeBreadcrumb: i = null,
                        maxBreadcrumbs: o = 100
                    } = r.getOptions && r.getOptions() || {};
                    if (o <= 0) return;
                    let a = {
                            timestamp: tO(),
                            ...e
                        },
                        s = i ? e0(() => i(a, t)) : a;
                    null !== s && (r.emit && r.emit("beforeAddBreadcrumb", s, t), n.addBreadcrumb(s, o))
                }
                setUser(e) {
                    this.getScope().setUser(e), this.getIsolationScope().setUser(e)
                }
                setTags(e) {
                    this.getScope().setTags(e), this.getIsolationScope().setTags(e)
                }
                setExtras(e) {
                    this.getScope().setExtras(e), this.getIsolationScope().setExtras(e)
                }
                setTag(e, t) {
                    this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t)
                }
                setExtra(e, t) {
                    this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t)
                }
                setContext(e, t) {
                    this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t)
                }
                configureScope(e) {
                    let {
                        scope: t,
                        client: n
                    } = this.getStackTop();
                    n && e(t)
                }
                run(e) {
                    let t = ne(this);
                    try {
                        e(this)
                    } finally {
                        ne(t)
                    }
                }
                getIntegration(e) {
                    let t = this.getClient();
                    if (!t) return null;
                    try {
                        return t.getIntegration(e)
                    } catch (t) {
                        return tA && e1.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
                    }
                }
                startTransaction(e, t) {
                    let n = this._callExtensionMethod("startTransaction", e, t);
                    return tA && !n && (this.getClient() ? e1.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`) : e1.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), n
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(e = !1) {
                    if (e) return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    let e = this.getStackTop().scope,
                        t = e.getSession();
                    t && tF(t), this._sendSessionUpdate(), e.setSession()
                }
                startSession(e) {
                    let {
                        scope: t,
                        client: n
                    } = this.getStackTop(), {
                        release: r,
                        environment: i = tE
                    } = n && n.getOptions() || {}, {
                        userAgent: o
                    } = eY.navigator || {}, a = tM({
                        release: r,
                        environment: i,
                        user: t.getUser(),
                        ...o && {
                            userAgent: o
                        },
                        ...e
                    }), s = t.getSession && t.getSession();
                    return s && "ok" === s.status && tR(s, {
                        status: "exited"
                    }), this.endSession(), t.setSession(a), a
                }
                shouldSendDefaultPii() {
                    let e = this.getClient(),
                        t = e && e.getOptions();
                    return !!(t && t.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    let {
                        scope: e,
                        client: t
                    } = this.getStackTop(), n = e.getSession();
                    n && t && t.captureSession && t.captureSession(n)
                }
                _callExtensionMethod(e, ...t) {
                    let n = t9().__SENTRY__;
                    if (n && n.extensions && "function" == typeof n.extensions[e]) return n.extensions[e].apply(this, t);
                    tA && e1.warn(`Extension method ${e} couldn't be found, doing nothing.`)
                }
            }

            function t9() {
                return eY.__SENTRY__ = eY.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, eY
            }

            function ne(e) {
                let t = t9(),
                    n = nr(t);
                return ni(t, e), n
            }

            function nt() {
                let e = t9();
                if (e.__SENTRY__ && e.__SENTRY__.acs) {
                    let t = e.__SENTRY__.acs.getCurrentHub();
                    if (t) return t
                }
                return function (e = t9()) {
                    return (!(e && e.__SENTRY__ && e.__SENTRY__.hub) || nr(e).isOlderThan(t6)) && ni(e, new t7), nr(e)
                }(e)
            }

            function nn() {
                return nt().getIsolationScope()
            }

            function nr(e) {
                return eQ("hub", () => new t7, e)
            }

            function ni(e, t) {
                return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
            }
            let no = [];

            function na(e, t) {
                for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e)
            }

            function ns(e, t, n) {
                if (n[t.name]) {
                    tA && e1.log(`Integration skipped because it was already installed: ${t.name}`);
                    return
                }
                if (n[t.name] = t, -1 === no.indexOf(t.name) && (t.setupOnce(tP, nt), no.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), e.on && "function" == typeof t.preprocessEvent) {
                    let n = t.preprocessEvent.bind(t);
                    e.on("preprocessEvent", (t, r) => n(t, r, e))
                }
                if (e.addEventProcessor && "function" == typeof t.processEvent) {
                    let n = t.processEvent.bind(t),
                        r = Object.assign((t, r) => n(t, r, e), {
                            id: t.name
                        });
                    e.addEventProcessor(r)
                }
                tA && e1.log(`Integration installed: ${t.name}`)
            }

            function nd(e, t) {
                return Object.assign(function (...e) {
                    return t(...e)
                }, {
                    id: e
                })
            }
            let nl = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
                nc = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
                nu = "InboundFilters",
                np = (e = {}) => ({
                    name: nu,
                    setupOnce() {},
                    processEvent: (t, n, r) => {
                        var i, o;
                        return ((i = function (e = {}, t = {}) {
                            return {
                                allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                                denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                                ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : nl],
                                ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : nc],
                                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                            }
                        }(e, r.getOptions())).ignoreInternal && function (e) {
                            try {
                                return "SentryError" === e.exception.values[0].type
                            } catch (e) {}
                            return !1
                        }(t) ? (tA && e1.warn(`Event dropped due to being internal Sentry Error.
Event: ${tv(t)}`), 0) : (o = i.ignoreErrors, !t.type && o && o.length && (function (e) {
                            let t;
                            let n = [];
                            e.message && n.push(e.message);
                            try {
                                t = e.exception.values[e.exception.values.length - 1]
                            } catch (e) {}
                            return t && t.value && (n.push(t.value), t.type && n.push(`${t.type}: ${t.value}`)), tA && 0 === n.length && e1.error(`Could not extract message for event ${tv(e)}`), n
                        })(t).some(e => td(e, o))) ? (tA && e1.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${tv(t)}`), 0) : ! function (e, t) {
                            if ("transaction" !== e.type || !t || !t.length) return !1;
                            let n = e.transaction;
                            return !!n && td(n, t)
                        }(t, i.ignoreTransactions) ? ! function (e, t) {
                            if (!t || !t.length) return !1;
                            let n = ng(e);
                            return !!n && td(n, t)
                        }(t, i.denyUrls) ? function (e, t) {
                            if (!t || !t.length) return !0;
                            let n = ng(e);
                            return !n || td(n, t)
                        }(t, i.allowUrls) || (tA && e1.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${tv(t)}.
Url: ${ng(t)}`), 0) : (tA && e1.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${tv(t)}.
Url: ${ng(t)}`), 0) : (tA && e1.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${tv(t)}`), 0)) ? t : null
                    }
                });

            function ng(e) {
                try {
                    let t;
                    try {
                        t = e.exception.values[0].stacktrace.frames
                    } catch (e) {}
                    return t ? function (e = []) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(t) : null
                } catch (t) {
                    return tA && e1.error(`Cannot extract url for event ${tv(e)}`), null
                }
            }
            nd(nu, np);
            let nh = "FunctionToString",
                nm = new WeakMap,
                nf = () => ({
                    name: nh,
                    setupOnce() {
                        i = Function.prototype.toString;
                        try {
                            Function.prototype.toString = function (...e) {
                                let t = tp(this),
                                    n = nm.has(tV()) && void 0 !== t ? t : this;
                                return i.apply(n, e)
                            }
                        } catch (e) {}
                    },
                    setup(e) {
                        nm.set(e, !0)
                    }
                });

            function ny() {
                if (!("fetch" in eY)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (e) {
                    return !1
                }
            }

            function nb(e) {
                return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
            }
            nd(nh, nf);
            let nv = {},
                nk = {};

            function nw(e, t) {
                nv[e] = nv[e] || [], nv[e].push(t)
            }

            function n_(e, t) {
                nk[e] || (t(), nk[e] = !0)
            }

            function nS(e, t) {
                let n = e && nv[e];
                if (n)
                    for (let r of n) try {
                        r(t)
                    } catch (t) {
                        eK && e1.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${t$(r)}
Error:`, t)
                    }
            }

            function nA(e) {
                let t = "history";
                nw(t, e), n_(t, nT)
            }

            function nT() {
                if (! function () {
                        let e = eY.chrome,
                            t = e && e.app && e.app.runtime,
                            n = "history" in eY && !!eY.history.pushState && !!eY.history.replaceState;
                        return !t && n
                    }()) return;
                let e = eY.onpopstate;

                function t(e) {
                    return function (...t) {
                        let n = t.length > 2 ? t[2] : void 0;
                        if (n) {
                            let e = o,
                                t = String(n);
                            o = t, nS("history", {
                                from: e,
                                to: t
                            })
                        }
                        return e.apply(this, t)
                    }
                }
                eY.onpopstate = function (...t) {
                    let n = eY.location.href,
                        r = o;
                    if (o = n, nS("history", {
                            from: r,
                            to: n
                        }), e) try {
                        return e.apply(this, t)
                    } catch (e) {}
                }, tl(eY.history, "pushState", t), tl(eY.history, "replaceState", t)
            }
            let nx = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function nz(e, t = !1) {
                let {
                    host: n,
                    path: r,
                    pass: i,
                    port: o,
                    projectId: a,
                    protocol: s,
                    publicKey: d
                } = e;
                return `${s}://${d}${t&&i?`:${i}`:""}@${n}${o?`:${o}`:""}/${r?`${r}/`:r}${a}`
            }

            function nC(e) {
                return {
                    protocol: e.protocol,
                    publicKey: e.publicKey || "",
                    pass: e.pass || "",
                    host: e.host,
                    port: e.port || "",
                    path: e.path || "",
                    projectId: e.projectId
                }
            }

            function nP(e, t = []) {
                return [e, t]
            }

            function nL(e, t) {
                for (let n of e[1]) {
                    let e = n[0].type;
                    if (t(n, e)) return !0
                }
                return !1
            }

            function nO(e, t) {
                return (t || new TextEncoder).encode(e)
            }
            let nD = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor",
                feedback: "feedback",
                span: "span",
                statsd: "metric_bucket"
            };

            function nE(e) {
                if (!e || !e.sdk) return;
                let {
                    name: t,
                    version: n
                } = e.sdk;
                return {
                    name: t,
                    version: n
                }
            }
            class nM extends Error {
                constructor(e, t = "warn") {
                    super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t
                }
            }
            let nR = "Not capturing exception because it's already been captured.";
            class nF {
                constructor(e) {
                    if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = function (e) {
                            let t = "string" == typeof e ? function (e) {
                                let t = nx.exec(e);
                                if (!t) {
                                    e0(() => {
                                        console.error(`Invalid Sentry Dsn: ${e}`)
                                    });
                                    return
                                }
                                let [n, r, i = "", o, a = "", s] = t.slice(1), d = "", l = s, c = l.split("/");
                                if (c.length > 1 && (d = c.slice(0, -1).join("/"), l = c.pop()), l) {
                                    let e = l.match(/^\d+/);
                                    e && (l = e[0])
                                }
                                return nC({
                                    host: o,
                                    pass: i,
                                    path: d,
                                    projectId: l,
                                    port: a,
                                    protocol: n,
                                    publicKey: r
                                })
                            }(e) : nC(e);
                            if (t && function (e) {
                                    if (!eK) return !0;
                                    let {
                                        port: t,
                                        projectId: n,
                                        protocol: r
                                    } = e;
                                    return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (e1.error(`Invalid Sentry Dsn: ${t} missing`), !0)) && (n.match(/^\d+$/) ? "http" === r || "https" === r ? !(t && isNaN(parseInt(t, 10))) || (e1.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (e1.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (e1.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
                                }(t)) return t
                        }(e.dsn) : tA && e1.warn("No DSN provided, client will not send events."), this._dsn) {
                        let t = function (e, t = {}) {
                            var n;
                            let r = "string" == typeof t ? t : t.tunnel,
                                i = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
                            return r || `${function(e){let t=e.protocol?`${e.protocol}:`:"",n=e.port?`:${e.port}`:"";return`${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`}(e)}${e.projectId}/envelope/?${Object.keys(n={sentry_key:e.publicKey,sentry_version:"7",...i&&{sentry_client:`${i.name}/${i.version}`}}).map(e=>`
                            $ {
                                encodeURIComponent(e)
                            } = $ {
                                encodeURIComponent(n[e])
                            }
                            `).join("&")}`
                        }(this._dsn, e);
                        this._transport = e.transport({
                            tunnel: this._options.tunnel,
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...e.transportOptions,
                            url: t
                        })
                    }
                }
                captureException(e, t, n) {
                    if (t_(e)) {
                        tA && e1.log(nR);
                        return
                    }
                    let r = t && t.event_id;
                    return this._process(this.eventFromException(e, t).then(e => this._captureEvent(e, t, n)).then(e => {
                        r = e
                    })), r
                }
                captureMessage(e, t, n, r) {
                    let i = n && n.event_id,
                        o = e7(e) ? e : String(e),
                        a = e9(e) ? this.eventFromMessage(o, t, n) : this.eventFromException(e, n);
                    return this._process(a.then(e => this._captureEvent(e, n, r)).then(e => {
                        i = e
                    })), i
                }
                captureEvent(e, t, n) {
                    if (t && t.originalException && t_(t.originalException)) {
                        tA && e1.log(nR);
                        return
                    }
                    let r = t && t.event_id,
                        i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                    return this._process(this._captureEvent(e, t, i || n).then(e => {
                        r = e
                    })), r
                }
                captureSession(e) {
                    "string" != typeof e.release ? tA && e1.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), tR(e, {
                        init: !1
                    }))
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(e) {
                    let t = this._transport;
                    return t ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : tT(!0)
                }
                close(e) {
                    return this.flush(e).then(e => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), e))
                }
                getEventProcessors() {
                    return this._eventProcessors
                }
                addEventProcessor(e) {
                    this._eventProcessors.push(e)
                }
                setupIntegrations(e) {
                    (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
                }
                init() {
                    this._isEnabled() && this._setupIntegrations()
                }
                getIntegrationById(e) {
                    return this.getIntegrationByName(e)
                }
                getIntegrationByName(e) {
                    return this._integrations[e]
                }
                getIntegration(e) {
                    try {
                        return this._integrations[e.id] || null
                    } catch (t) {
                        return tA && e1.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
                    }
                }
                addIntegration(e) {
                    let t = this._integrations[e.name];
                    ns(this, e, this._integrations), t || na(this, [e])
                }
                sendEvent(e, t = {}) {
                    this.emit("beforeSendEvent", e, t);
                    let n = function (e, t, n, r) {
                        var i;
                        let o = nE(n),
                            a = e.type && "replay_event" !== e.type ? e.type : "event";
                        (i = n && n.sdk) && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || i.name, e.sdk.version = e.sdk.version || i.version, e.sdk.integrations = [...e.sdk.integrations || [], ...i.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...i.packages || []]);
                        let s = function (e, t, n, r) {
                            let i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                            return {
                                event_id: e.event_id,
                                sent_at: new Date().toISOString(),
                                ...t && {
                                    sdk: t
                                },
                                ...!!n && r && {
                                    dsn: nz(r)
                                },
                                ...i && {
                                    trace: tf({
                                        ...i
                                    })
                                }
                            }
                        }(e, o, r, t);
                        return delete e.sdkProcessingMetadata, nP(s, [
                            [{
                                type: a
                            }, e]
                        ])
                    }(e, this._dsn, this._options._metadata, this._options.tunnel);
                    for (let e of t.attachments || []) n = function (e, t) {
                        let [n, r] = e;
                        return [n, [...r, t]]
                    }(n, function (e, t) {
                        let n = "string" == typeof e.data ? nO(e.data, t) : e.data;
                        return [tf({
                            type: "attachment",
                            length: n.length,
                            filename: e.filename,
                            content_type: e.contentType,
                            attachment_type: e.attachmentType
                        }), n]
                    }(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                    let r = this._sendEnvelope(n);
                    r && r.then(t => this.emit("afterSendEvent", e, t), null)
                }
                sendSession(e) {
                    let t = function (e, t, n, r) {
                        let i = nE(n);
                        return nP({
                            sent_at: new Date().toISOString(),
                            ...i && {
                                sdk: i
                            },
                            ...!!r && t && {
                                dsn: nz(t)
                            }
                        }, ["aggregates" in e ? [{
                            type: "sessions"
                        }, e] : [{
                            type: "session"
                        }, e.toJSON()]])
                    }(e, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(t)
                }
                recordDroppedEvent(e, t, n) {
                    if (this._options.sendClientReports) {
                        let r = "number" == typeof n ? n : 1,
                            i = `${e}:${t}`;
                        tA && e1.log(`Recording outcome: "${i}"${r>1?` (${r} times)`:""}`), this._outcomes[i] = (this._outcomes[i] || 0) + r
                    }
                }
                captureAggregateMetrics(e) {
                    tA && e1.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
                    let t = function (e, t, n, r) {
                        let i = {
                            sent_at: new Date().toISOString()
                        };
                        return n && n.sdk && (i.sdk = {
                            name: n.sdk.name,
                            version: n.sdk.version
                        }), r && t && (i.dsn = nz(t)), nP(i, [function (e) {
                            let t = function (e) {
                                let t = "";
                                for (let n of e) {
                                    let e = Object.entries(n.tags),
                                        r = e.length > 0 ? `|#${e.map(([e,t])=>`${e}:${t}`).join(",")}` : "";
                                    t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`
                                }
                                return t
                            }(e);
                            return [{
                                type: "statsd",
                                length: t.length
                            }, t]
                        }(e)])
                    }(e, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(t)
                }
                on(e, t) {
                    this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t)
                }
                emit(e, ...t) {
                    this._hooks[e] && this._hooks[e].forEach(e => e(...t))
                }
                _setupIntegrations() {
                    let {
                        integrations: e
                    } = this._options;
                    this._integrations = function (e, t) {
                        let n = {};
                        return t.forEach(t => {
                            t && ns(e, t, n)
                        }), n
                    }(this, e), na(this, e), this._integrationsInitialized = !0
                }
                _updateSessionFromEvent(e, t) {
                    let n = !1,
                        r = !1,
                        i = t.exception && t.exception.values;
                    if (i)
                        for (let e of (r = !0, i)) {
                            let t = e.mechanism;
                            if (t && !1 === t.handled) {
                                n = !0;
                                break
                            }
                        }
                    let o = "ok" === e.status;
                    (o && 0 === e.errors || o && n) && (tR(e, {
                        ...n && {
                            status: "crashed"
                        },
                        errors: e.errors || Number(r || n)
                    }), this.captureSession(e))
                }
                _isClientDoneProcessing(e) {
                    return new tz(t => {
                        let n = 0,
                            r = setInterval(() => {
                                0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
                            }, 1)
                    })
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._transport
                }
                _prepareEvent(e, t, n, i = nn()) {
                    let o = this.getOptions(),
                        a = Object.keys(this._integrations);
                    return !t.integrations && a.length > 0 && (t.integrations = a), this.emit("preprocessEvent", e, t), (function (e, t, n, i, o, a) {
                        let {
                            normalizeDepth: s = 3,
                            normalizeMaxBreadth: d = 1e3
                        } = e, l = {
                            ...t,
                            event_id: t.event_id || n.event_id || ty(),
                            timestamp: t.timestamp || tO()
                        }, c = n.integrations || e.integrations.map(e => e.name);
                        (function (e, t) {
                            let {
                                environment: n,
                                release: r,
                                dist: i,
                                maxValueLength: o = 250
                            } = t;
                            "environment" in e || (e.environment = "environment" in t ? n : tE), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = ta(e.message, o));
                            let a = e.exception && e.exception.values && e.exception.values[0];
                            a && a.value && (a.value = ta(a.value, o));
                            let s = e.request;
                            s && s.url && (s.url = ta(s.url, o))
                        })(l, e), c.length > 0 && (l.sdk = l.sdk || {}, l.sdk.integrations = [...l.sdk.integrations || [], ...c]), void 0 === t.type && function (e, t) {
                            let n;
                            let r = eY._sentryDebugIds;
                            if (!r) return;
                            let i = tG.get(t);
                            i ? n = i : (n = new Map, tG.set(t, n));
                            let o = Object.keys(r).reduce((e, i) => {
                                let o;
                                let a = n.get(i);
                                a ? o = a : (o = t(i), n.set(i, o));
                                for (let t = o.length - 1; t >= 0; t--) {
                                    let n = o[t];
                                    if (n.filename) {
                                        e[n.filename] = r[i];
                                        break
                                    }
                                }
                                return e
                            }, {});
                            try {
                                e.exception.values.forEach(e => {
                                    e.stacktrace.frames.forEach(e => {
                                        e.filename && (e.debug_id = o[e.filename])
                                    })
                                })
                            } catch (e) {}
                        }(l, e.stackParser);
                        let u = function (e, t) {
                            if (!t) return e;
                            let n = e ? e.clone() : new t8;
                            return n.update(t), n
                        }(i, n.captureContext);
                        n.mechanism && tw(l, n.mechanism);
                        let p = o && o.getEventProcessors ? o.getEventProcessors() : [],
                            g = (r || (r = new t8), r).getScopeData();
                        a && t2(g, a.getScopeData()), u && t2(g, u.getScopeData());
                        let h = [...n.attachments || [], ...g.attachments];
                        return h.length && (n.attachments = h), t1(l, g), tL([...p, ...tC(), ...g.eventProcessors], l, n).then(e => (e && function (e) {
                            let t = {};
                            try {
                                e.exception.values.forEach(e => {
                                    e.stacktrace.frames.forEach(e => {
                                        e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                                    })
                                })
                            } catch (e) {}
                            if (0 === Object.keys(t).length) return;
                            e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                            let n = e.debug_meta.images;
                            Object.keys(t).forEach(e => {
                                n.push({
                                    type: "sourcemap",
                                    code_file: e,
                                    debug_id: t[e]
                                })
                            })
                        }(e), "number" == typeof s && s > 0) ? function (e, t, n) {
                            if (!e) return null;
                            let r = {
                                ...e,
                                ...e.breadcrumbs && {
                                    breadcrumbs: e.breadcrumbs.map(e => ({
                                        ...e,
                                        ...e.data && {
                                            data: tH(e.data, t, n)
                                        }
                                    }))
                                },
                                ...e.user && {
                                    user: tH(e.user, t, n)
                                },
                                ...e.contexts && {
                                    contexts: tH(e.contexts, t, n)
                                },
                                ...e.extra && {
                                    extra: tH(e.extra, t, n)
                                }
                            };
                            return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = tH(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => {
                                let r = tW(e).data;
                                return r && (e.data = tH(r, t, n)), e
                            })), r
                        }(e, s, d) : e)
                    })(o, e, t, n, this, i).then(e => {
                        if (null === e) return e;
                        let t = {
                            ...i.getPropagationContext(),
                            ...n ? n.getPropagationContext() : void 0
                        };
                        if (!(e.contexts && e.contexts.trace) && t) {
                            let {
                                traceId: r,
                                spanId: i,
                                parentSpanId: o,
                                dsc: a
                            } = t;
                            e.contexts = {
                                trace: {
                                    trace_id: r,
                                    span_id: i,
                                    parent_span_id: o
                                },
                                ...e.contexts
                            };
                            let s = a || t0(r, this, n);
                            e.sdkProcessingMetadata = {
                                dynamicSamplingContext: s,
                                ...e.sdkProcessingMetadata
                            }
                        }
                        return e
                    })
                }
                _captureEvent(e, t = {}, n) {
                    return this._processEvent(e, t, n).then(e => e.event_id, e => {
                        tA && ("log" === e.logLevel ? e1.log(e.message) : e1.warn(e))
                    })
                }
                _processEvent(e, t, n) {
                    let r = this.getOptions(),
                        {
                            sampleRate: i
                        } = r,
                        o = nN(e),
                        a = nB(e),
                        s = e.type || "error",
                        d = `before send for type \`${s}\``;
                    if (a && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), tx(new nM(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
                    let l = "replay_event" === s ? "replay" : s,
                        c = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                    return this._prepareEvent(e, t, n, c).then(n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", l, e), new nM("An event processor returned `null`, will not send event.", "log");
                        return t.data && !0 === t.data.__sentry__ ? n : function (e, t) {
                            let n = `${t} must return \`null\` or a valid event.`;
                            if (tn(e)) return e.then(e => {
                                if (!te(e) && null !== e) throw new nM(n);
                                return e
                            }, e => {
                                throw new nM(`${t} rejected with ${e}`)
                            });
                            if (!te(e) && null !== e) throw new nM(n);
                            return e
                        }(function (e, t, n) {
                            let {
                                beforeSend: r,
                                beforeSendTransaction: i
                            } = e;
                            if (nB(t) && r) return r(t, n);
                            if (nN(t) && i) {
                                if (t.spans) {
                                    let e = t.spans.length;
                                    t.sdkProcessingMetadata = {
                                        ...t.sdkProcessingMetadata,
                                        spanCountBeforeProcessing: e
                                    }
                                }
                                return i(t, n)
                            }
                            return t
                        }(r, n, t), d)
                    }).then(r => {
                        if (null === r) {
                            if (this.recordDroppedEvent("before_send", l, e), o) {
                                let t = 1 + (e.spans || []).length;
                                this.recordDroppedEvent("before_send", "span", t)
                            }
                            throw new nM(`${d} returned \`null\`, will not send event.`, "log")
                        }
                        let i = n && n.getSession();
                        if (!o && i && this._updateSessionFromEvent(i, r), o) {
                            let e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                            e > 0 && this.recordDroppedEvent("before_send", "span", e)
                        }
                        let a = r.transaction_info;
                        return o && a && r.transaction !== e.transaction && (r.transaction_info = {
                            ...a,
                            source: "custom"
                        }), this.sendEvent(r, t), r
                    }).then(null, e => {
                        if (e instanceof nM) throw e;
                        throw this.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), new nM(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
                    })
                }
                _process(e) {
                    this._numProcessing++, e.then(e => (this._numProcessing--, e), e => (this._numProcessing--, e))
                }
                _sendEnvelope(e) {
                    if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) return this._transport.send(e).then(null, e => {
                        tA && e1.error("Error while sending event:", e)
                    });
                    tA && e1.error("Transport disabled")
                }
                _clearOutcomes() {
                    let e = this._outcomes;
                    return this._outcomes = {}, Object.keys(e).map(t => {
                        let [n, r] = t.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: e[t]
                        }
                    })
                }
            }

            function nB(e) {
                return void 0 === e.type
            }

            function nN(e) {
                return "transaction" === e.type
            }

            function nj(e, t, n = [t], r = "npm") {
                let i = e._metadata || {};
                i.sdk || (i.sdk = {
                    name: `sentry.javascript.${t}`,
                    packages: n.map(e => ({
                        name: `${r}:@sentry/${e}`,
                        version: t5
                    })),
                    version: t5
                }), e._metadata = i
            }
            let nI = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function n$(e, t) {
                let n = nW(e, t),
                    r = {
                        type: t && t.name,
                        value: function (e) {
                            let t = e && e.message;
                            return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
                        }(t)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function nH(e, t) {
                return {
                    exception: {
                        values: [n$(e, t)]
                    }
                }
            }

            function nW(e, t) {
                let n = t.stacktrace || t.stack || "",
                    r = function (e) {
                        if (e) {
                            if ("number" == typeof e.framesToPop) return e.framesToPop;
                            if (nG.test(e.message)) return 1
                        }
                        return 0
                    }(t);
                try {
                    return e(n, r)
                } catch (e) {}
                return []
            }
            let nG = /Minified React error #\d+;/i;

            function nU(e, t, n, r, i) {
                let o;
                if (e4(t) && t.error) return nH(e, t.error);
                if (e5(t) || e8(t, "DOMException")) {
                    if ("stack" in t) o = nH(e, t);
                    else {
                        let i = t.name || (e5(t) ? "DOMError" : "DOMException"),
                            a = t.message ? `${i}: ${t.message}` : i;
                        tk(o = nq(e, a, n, r), a)
                    }
                    return "code" in t && (o.tags = {
                        ...o.tags,
                        "DOMException.code": `${t.code}`
                    }), o
                }
                return e3(t) ? nH(e, t) : (te(t) || tt(t) ? tw(o = function (e, t, n, r) {
                    let i = tV(),
                        o = i && i.getOptions().normalizeDepth,
                        a = {
                            exception: {
                                values: [{
                                    type: tt(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                                    value: function (e, {
                                        isUnhandledRejection: t
                                    }) {
                                        let n = function (e, t = 40) {
                                                let n = Object.keys(tg(e));
                                                if (n.sort(), !n.length) return "[object has no keys]";
                                                if (n[0].length >= t) return ta(n[0], t);
                                                for (let e = n.length; e > 0; e--) {
                                                    let r = n.slice(0, e).join(", ");
                                                    if (!(r.length > t)) {
                                                        if (e === n.length) return r;
                                                        return ta(r, t)
                                                    }
                                                }
                                                return ""
                                            }(e),
                                            r = t ? "promise rejection" : "exception";
                                        if (e4(e)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                        if (tt(e)) {
                                            let t = function (e) {
                                                try {
                                                    let t = Object.getPrototypeOf(e);
                                                    return t ? t.constructor.name : void 0
                                                } catch (e) {}
                                            }(e);
                                            return `Event \`${t}\` (type=${e.type}) captured as ${r}`
                                        }
                                        return `Object captured as ${r} with keys: ${n}`
                                    }(t, {
                                        isUnhandledRejection: r
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: function e(t, n = 3, r = 102400) {
                                    let i = tH(t, n);
                                    return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                                }(t, o)
                            }
                        };
                    if (n) {
                        let t = nW(e, n);
                        t.length && (a.exception.values[0].stacktrace = {
                            frames: t
                        })
                    }
                    return a
                }(e, t, n, i), {
                    synthetic: !0
                }) : (tk(o = nq(e, t, n, r), `${t}`, void 0), tw(o, {
                    synthetic: !0
                })), o)
            }

            function nq(e, t, n, r) {
                let i = {};
                if (r && n) {
                    let r = nW(e, n);
                    r.length && (i.exception = {
                        values: [{
                            value: t,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    })
                }
                if (e7(t)) {
                    let {
                        __sentry_template_string__: e,
                        __sentry_template_values__: n
                    } = t;
                    return i.logentry = {
                        message: e,
                        params: n
                    }, i
                }
                return i.message = t, i
            }
            let nV = 0;

            function nK(e, t = {}, n) {
                if ("function" != typeof e) return e;
                try {
                    let t = e.__sentry_wrapped__;
                    if (t) {
                        if ("function" == typeof t) return t;
                        return e
                    }
                    if (tp(e)) return e
                } catch (t) {
                    return e
                }
                let r = function () {
                    let r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" == typeof n && n.apply(this, arguments);
                        let i = r.map(e => nK(e, t));
                        return e.apply(this, i)
                    } catch (e) {
                        throw nV++, setTimeout(() => {
                            nV--
                        }), ! function (...e) {
                            let t = nt();
                            if (2 === e.length) {
                                let [n, r] = e;
                                return n ? t.withScope(() => (t.getStackTop().scope = n, r(n))) : t.withScope(r)
                            }
                            t.withScope(e[0])
                        }(n => {
                            n.addEventProcessor(e => (t.mechanism && (tk(e, void 0, void 0), tw(e, t.mechanism)), e.extra = {
                                ...e.extra,
                                arguments: r
                            }, e)), nt().captureException(e, void 0)
                        }), e
                    }
                };
                try {
                    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
                } catch (e) {}
                tu(r, e), tc(e, "__sentry_wrapped__", r);
                try {
                    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                        get: () => e.name
                    })
                } catch (e) {}
                return r
            }
            class nJ extends nF {
                constructor(e) {
                    nj(e, "browser", ["browser"], eY.SENTRY_SDK_SOURCE || "npm"), super(e), e.sendClientReports && eY.document && eY.document.addEventListener("visibilitychange", () => {
                        "hidden" === eY.document.visibilityState && this._flushOutcomes()
                    })
                }
                eventFromException(e, t) {
                    return function (e, t, n, r) {
                        let i = nU(e, t, n && n.syntheticException || void 0, r);
                        return tw(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), tT(i)
                    }(this._options.stackParser, e, t, this._options.attachStacktrace)
                }
                eventFromMessage(e, t = "info", n) {
                    return function (e, t, n = "info", r, i) {
                        let o = nq(e, t, r && r.syntheticException || void 0, i);
                        return o.level = n, r && r.event_id && (o.event_id = r.event_id), tT(o)
                    }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
                }
                captureUserFeedback(e) {
                    if (!this._isEnabled()) {
                        nI && e1.warn("SDK not enabled, will not capture user feedback.");
                        return
                    }
                    let t = function (e, {
                        metadata: t,
                        tunnel: n,
                        dsn: r
                    }) {
                        return nP({
                            event_id: e.event_id,
                            sent_at: new Date().toISOString(),
                            ...t && t.sdk && {
                                sdk: {
                                    name: t.sdk.name,
                                    version: t.sdk.version
                                }
                            },
                            ...!!n && !!r && {
                                dsn: nz(r)
                            }
                        }, [
                            [{
                                type: "user_report"
                            }, e]
                        ])
                    }(e, {
                        metadata: this.getSdkMetadata(),
                        dsn: this.getDsn(),
                        tunnel: this.getOptions().tunnel
                    });
                    this._sendEnvelope(t)
                }
                _prepareEvent(e, t, n) {
                    return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n)
                }
                _flushOutcomes() {
                    var e;
                    let t = this._clearOutcomes();
                    if (0 === t.length) {
                        nI && e1.log("No outcomes to send");
                        return
                    }
                    if (!this._dsn) {
                        nI && e1.log("No dsn provided, will not send outcomes");
                        return
                    }
                    nI && e1.log("Sending outcomes:", t);
                    let n = nP((e = this._options.tunnel && nz(this._dsn)) ? {
                        dsn: e
                    } : {}, [
                        [{
                            type: "client_report"
                        }, {
                            timestamp: tO(),
                            discarded_events: t
                        }]
                    ]);
                    this._sendEnvelope(n)
                }
            }

            function nY() {
                "console" in eY && eZ.forEach(function (e) {
                    e in eY.console && tl(eY.console, e, function (t) {
                        return eX[e] = t,
                            function (...t) {
                                nS("console", {
                                    args: t,
                                    level: e
                                });
                                let n = eX[e];
                                n && n.apply(eY.console, t)
                            }
                    })
                })
            }

            function nQ() {
                if (!eY.document) return;
                let e = nS.bind(null, "dom"),
                    t = nZ(e, !0);
                eY.document.addEventListener("click", t, !1), eY.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
                    let n = eY[t] && eY[t].prototype;
                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (tl(n, "addEventListener", function (t) {
                        return function (n, r, i) {
                            if ("click" === n || "keypress" == n) try {
                                let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                    o = r[n] = r[n] || {
                                        refCount: 0
                                    };
                                if (!o.handler) {
                                    let r = nZ(e);
                                    o.handler = r, t.call(this, n, r, i)
                                }
                                o.refCount++
                            } catch (e) {}
                            return t.call(this, n, r, i)
                        }
                    }), tl(n, "removeEventListener", function (e) {
                        return function (t, n, r) {
                            if ("click" === t || "keypress" == t) try {
                                let n = this.__sentry_instrumentation_handlers__ || {},
                                    i = n[t];
                                i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                            } catch (e) {}
                            return e.call(this, t, n, r)
                        }
                    }))
                })
            }

            function nZ(e, t = !1) {
                return n => {
                    if (!n || n._sentryCaptured) return;
                    let r = function (e) {
                        try {
                            return e.target
                        } catch (e) {
                            return null
                        }
                    }(n);
                    if ("keypress" === n.type && (!r || !r.tagName || "INPUT" !== r.tagName && "TEXTAREA" !== r.tagName && !r.isContentEditable)) return;
                    tc(n, "_sentryCaptured", !0), r && !r._sentryId && tc(r, "_sentryId", ty());
                    let i = "keypress" === n.type ? "input" : n.type;
                    ! function (e) {
                        if (e.type !== s) return !1;
                        try {
                            if (!e.target || e.target._sentryId !== d) return !1
                        } catch (e) {}
                        return !0
                    }(n) && (e({
                        event: n,
                        name: i,
                        global: t
                    }), s = n.type, d = r ? r._sentryId : void 0), clearTimeout(a), a = eY.setTimeout(() => {
                        d = void 0, s = void 0
                    }, 1e3)
                }
            }
            let nX = "__sentry_xhr_v3__";

            function n0() {
                if (!eY.XMLHttpRequest) return;
                let e = XMLHttpRequest.prototype;
                tl(e, "open", function (e) {
                    return function (...t) {
                        let n = Date.now(),
                            r = e6(t[0]) ? t[0].toUpperCase() : void 0,
                            i = function (e) {
                                if (e6(e)) return e;
                                try {
                                    return e.toString()
                                } catch (e) {}
                            }(t[1]);
                        if (!r || !i) return e.apply(this, t);
                        this[nX] = {
                            method: r,
                            url: i,
                            request_headers: {}
                        }, "POST" === r && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                        let o = () => {
                            let e = this[nX];
                            if (e && 4 === this.readyState) {
                                try {
                                    e.status_code = this.status
                                } catch (e) {}
                                nS("xhr", {
                                    args: [r, i],
                                    endTimestamp: Date.now(),
                                    startTimestamp: n,
                                    xhr: this
                                })
                            }
                        };
                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? tl(this, "onreadystatechange", function (e) {
                            return function (...t) {
                                return o(), e.apply(this, t)
                            }
                        }) : this.addEventListener("readystatechange", o), tl(this, "setRequestHeader", function (e) {
                            return function (...t) {
                                let [n, r] = t, i = this[nX];
                                return i && e6(n) && e6(r) && (i.request_headers[n.toLowerCase()] = r), e.apply(this, t)
                            }
                        }), e.apply(this, t)
                    }
                }), tl(e, "send", function (e) {
                    return function (...t) {
                        let n = this[nX];
                        return n && (void 0 !== t[0] && (n.body = t[0]), nS("xhr", {
                            args: [n.method, n.url],
                            startTimestamp: Date.now(),
                            xhr: this
                        })), e.apply(this, t)
                    }
                })
            }

            function n1() {
                (function () {
                    if ("string" == typeof EdgeRuntime) return !0;
                    if (!ny()) return !1;
                    if (nb(eY.fetch)) return !0;
                    let e = !1,
                        t = eY.document;
                    if (t && "function" == typeof t.createElement) try {
                        let n = t.createElement("iframe");
                        n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = nb(n.contentWindow.fetch)), t.head.removeChild(n)
                    } catch (e) {
                        eK && e1.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                    }
                    return e
                })() && tl(eY, "fetch", function (e) {
                    return function (...t) {
                        let {
                            method: n,
                            url: r
                        } = function (e) {
                            if (0 === e.length) return {
                                method: "GET",
                                url: ""
                            };
                            if (2 === e.length) {
                                let [t, n] = e;
                                return {
                                    url: n3(t),
                                    method: n2(n, "method") ? String(n.method).toUpperCase() : "GET"
                                }
                            }
                            let t = e[0];
                            return {
                                url: n3(t),
                                method: n2(t, "method") ? String(t.method).toUpperCase() : "GET"
                            }
                        }(t), i = {
                            args: t,
                            fetchData: {
                                method: n,
                                url: r
                            },
                            startTimestamp: Date.now()
                        };
                        return nS("fetch", {
                            ...i
                        }), e.apply(eY, t).then(e => (nS("fetch", {
                            ...i,
                            endTimestamp: Date.now(),
                            response: e
                        }), e), e => {
                            throw nS("fetch", {
                                ...i,
                                endTimestamp: Date.now(),
                                error: e
                            }), e
                        })
                    }
                })
            }

            function n2(e, t) {
                return !!e && "object" == typeof e && !!e[t]
            }

            function n3(e) {
                return "string" == typeof e ? e : e ? n2(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
            }
            let n8 = ["fatal", "error", "warning", "log", "info", "debug"];

            function n4(e) {
                if (!e) return {};
                let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                let n = t[6] || "",
                    r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    search: n,
                    hash: r,
                    relative: t[5] + n + r
                }
            }
            let n5 = "Breadcrumbs",
                n6 = (e = {}) => {
                    let t = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...e
                    };
                    return {
                        name: n5,
                        setupOnce() {},
                        setup(e) {
                            var n;
                            t.console && function (e) {
                                let t = "console";
                                nw(t, e), n_(t, nY)
                            }(function (t) {
                                var n;
                                if (tV() !== e) return;
                                let r = {
                                    category: "console",
                                    data: {
                                        arguments: t.args,
                                        logger: "console"
                                    },
                                    level: "warn" === (n = t.level) ? "warning" : n8.includes(n) ? n : "log",
                                    message: ts(t.args, " ")
                                };
                                if ("assert" === t.level) {
                                    if (!1 !== t.args[0]) return;
                                    r.message = `Assertion failed: ${ts(t.args.slice(1)," ")||"console.assert"}`, r.data.arguments = t.args.slice(1)
                                }
                                tq(r, {
                                    input: t.args,
                                    level: t.level
                                })
                            }), t.dom && (nw("dom", (n = t.dom, function (t) {
                                let r, i;
                                if (tV() !== e) return;
                                let o = "object" == typeof n ? n.serializeAttribute : void 0,
                                    a = "object" == typeof n && "number" == typeof n.maxStringLength ? n.maxStringLength : void 0;
                                a && a > 1024 && (nI && e1.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024), "string" == typeof o && (o = [o]);
                                try {
                                    let e = t.event,
                                        n = e && e.target ? e.target : e;
                                    r = to(n, {
                                        keyAttrs: o,
                                        maxStringLength: a
                                    }), i = function (e) {
                                        if (!eY.HTMLElement) return null;
                                        let t = e;
                                        for (let e = 0; e < 5 && t; e++) {
                                            if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
                                            t = t.parentNode
                                        }
                                        return null
                                    }(n)
                                } catch (e) {
                                    r = "<unknown>"
                                }
                                if (0 === r.length) return;
                                let s = {
                                    category: `ui.${t.name}`,
                                    message: r
                                };
                                i && (s.data = {
                                    "ui.component_name": i
                                }), tq(s, {
                                    event: t.event,
                                    name: t.name,
                                    global: t.global
                                })
                            })), n_("dom", nQ)), t.xhr && (nw("xhr", function (t) {
                                if (tV() !== e) return;
                                let {
                                    startTimestamp: n,
                                    endTimestamp: r
                                } = t, i = t.xhr[nX];
                                if (!n || !r || !i) return;
                                let {
                                    method: o,
                                    url: a,
                                    status_code: s,
                                    body: d
                                } = i;
                                tq({
                                    category: "xhr",
                                    data: {
                                        method: o,
                                        url: a,
                                        status_code: s
                                    },
                                    type: "http"
                                }, {
                                    xhr: t.xhr,
                                    input: d,
                                    startTimestamp: n,
                                    endTimestamp: r
                                })
                            }), n_("xhr", n0)), t.fetch && function (e) {
                                let t = "fetch";
                                nw(t, e), n_(t, n1)
                            }(function (t) {
                                if (tV() !== e) return;
                                let {
                                    startTimestamp: n,
                                    endTimestamp: r
                                } = t;
                                if (!(!r || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method)) {
                                    if (t.error) tq({
                                        category: "fetch",
                                        data: t.fetchData,
                                        level: "error",
                                        type: "http"
                                    }, {
                                        data: t.error,
                                        input: t.args,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    });
                                    else {
                                        let e = t.response;
                                        tq({
                                            category: "fetch",
                                            data: {
                                                ...t.fetchData,
                                                status_code: e && e.status
                                            },
                                            type: "http"
                                        }, {
                                            input: t.args,
                                            response: e,
                                            startTimestamp: n,
                                            endTimestamp: r
                                        })
                                    }
                                }
                            }), t.history && nA(function (t) {
                                if (tV() !== e) return;
                                let n = t.from,
                                    r = t.to,
                                    i = n4(eY.location.href),
                                    o = n ? n4(n) : void 0,
                                    a = n4(r);
                                o && o.path || (o = i), i.protocol === a.protocol && i.host === a.host && (r = a.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), tq({
                                    category: "navigation",
                                    data: {
                                        from: n,
                                        to: r
                                    }
                                })
                            }), t.sentry && e.on && e.on("beforeSendEvent", function (t) {
                                tV() === e && tq({
                                    category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
                                    event_id: t.event_id,
                                    level: t.level,
                                    message: tv(t)
                                }, {
                                    event: t
                                })
                            })
                        }
                    }
                };
            nd(n5, n6);
            let n7 = "Dedupe",
                n9 = () => {
                    let e;
                    return {
                        name: n7,
                        setupOnce() {},
                        processEvent(t) {
                            if (t.type) return t;
                            try {
                                var n;
                                if ((n = e) && (function (e, t) {
                                        let n = e.message,
                                            r = t.message;
                                        return !!((n || r) && (!n || r) && (n || !r) && n === r && rt(e, t) && re(e, t))
                                    }(t, n) || function (e, t) {
                                        let n = rn(t),
                                            r = rn(e);
                                        return !!(n && r && n.type === r.type && n.value === r.value && rt(e, t) && re(e, t))
                                    }(t, n))) return nI && e1.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (e) {}
                            return e = t
                        }
                    }
                };

            function re(e, t) {
                let n = rr(e),
                    r = rr(t);
                if (!n && !r) return !0;
                if (n && !r || !n && r || r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                    let t = r[e],
                        i = n[e];
                    if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
                }
                return !0
            }

            function rt(e, t) {
                let n = e.fingerprint,
                    r = t.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (e) {
                    return !1
                }
            }

            function rn(e) {
                return e.exception && e.exception.values && e.exception.values[0]
            }

            function rr(e) {
                let t = e.exception;
                if (t) try {
                    return t.values[0].stacktrace.frames
                } catch (e) {}
            }
            nd(n7, n9);
            let ri = null;

            function ro() {
                ri = eY.onerror, eY.onerror = function (e, t, n, r, i) {
                    return nS("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: e,
                        url: t
                    }), !!ri && !ri.__SENTRY_LOADER__ && ri.apply(this, arguments)
                }, eY.onerror.__SENTRY_INSTRUMENTED__ = !0
            }
            let ra = null;

            function rs() {
                ra = eY.onunhandledrejection, eY.onunhandledrejection = function (e) {
                    return nS("unhandledrejection", e), !ra || !!ra.__SENTRY_LOADER__ || ra.apply(this, arguments)
                }, eY.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
            }
            let rd = "GlobalHandlers",
                rl = (e = {}) => {
                    let t = {
                        onerror: !0,
                        onunhandledrejection: !0,
                        ...e
                    };
                    return {
                        name: rd,
                        setupOnce() {
                            Error.stackTraceLimit = 50
                        },
                        setup(e) {
                            t.onerror && (function (e) {
                                let t = "error";
                                nw(t, e), n_(t, ro)
                            }(t => {
                                let {
                                    stackParser: n,
                                    attachStacktrace: r
                                } = rp();
                                if (tV() !== e || nV > 0) return;
                                let {
                                    msg: i,
                                    url: o,
                                    line: a,
                                    column: s,
                                    error: d
                                } = t, l = void 0 === d && e6(i) ? function (e, t, n, r) {
                                    let i = e4(e) ? e.message : e,
                                        o = "Error",
                                        a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                                    return a && (o = a[1], i = a[2]), rc({
                                        exception: {
                                            values: [{
                                                type: o,
                                                value: i
                                            }]
                                        }
                                    }, t, n, r)
                                }(i, o, a, s) : rc(nU(n, d || i, void 0, r, !1), o, a, s);
                                l.level = "error", tU(l, {
                                    originalException: d,
                                    mechanism: {
                                        handled: !1,
                                        type: "onerror"
                                    }
                                })
                            }), ru("onerror")), t.onunhandledrejection && (function (e) {
                                let t = "unhandledrejection";
                                nw(t, e), n_(t, rs)
                            }(t => {
                                let {
                                    stackParser: n,
                                    attachStacktrace: r
                                } = rp();
                                if (tV() !== e || nV > 0) return;
                                let i = function (e) {
                                        if (e9(e)) return e;
                                        try {
                                            if ("reason" in e) return e.reason;
                                            if ("detail" in e && "reason" in e.detail) return e.detail.reason
                                        } catch (e) {}
                                        return e
                                    }(t),
                                    o = e9(i) ? {
                                        exception: {
                                            values: [{
                                                type: "UnhandledRejection",
                                                value: `Non-Error promise rejection captured with value: ${String(i)}`
                                            }]
                                        }
                                    } : nU(n, i, void 0, r, !0);
                                o.level = "error", tU(o, {
                                    originalException: i,
                                    mechanism: {
                                        handled: !1,
                                        type: "onunhandledrejection"
                                    }
                                })
                            }), ru("onunhandledrejection"))
                        }
                    }
                };

            function rc(e, t, n, r) {
                let i = e.exception = e.exception || {},
                    o = i.values = i.values || [],
                    a = o[0] = o[0] || {},
                    s = a.stacktrace = a.stacktrace || {},
                    d = s.frames = s.frames || [],
                    l = isNaN(parseInt(r, 10)) ? void 0 : r,
                    c = isNaN(parseInt(n, 10)) ? void 0 : n,
                    u = e6(t) && t.length > 0 ? t : function () {
                        try {
                            return eY.document.location.href
                        } catch (e) {
                            return ""
                        }
                    }();
                return 0 === d.length && d.push({
                    colno: l,
                    filename: u,
                    function: "?",
                    in_app: !0,
                    lineno: c
                }), e
            }

            function ru(e) {
                nI && e1.log(`Global Handler attached: ${e}`)
            }

            function rp() {
                let e = tV();
                return e && e.getOptions() || {
                    stackParser: () => [],
                    attachStacktrace: !1
                }
            }
            nd(rd, rl);
            let rg = "HttpContext",
                rh = () => ({
                    name: rg,
                    setupOnce() {},
                    preprocessEvent(e) {
                        if (!eY.navigator && !eY.location && !eY.document) return;
                        let t = e.request && e.request.url || eY.location && eY.location.href,
                            {
                                referrer: n
                            } = eY.document || {},
                            {
                                userAgent: r
                            } = eY.navigator || {},
                            i = {
                                ...e.request && e.request.headers,
                                ...n && {
                                    Referer: n
                                },
                                ...r && {
                                    "User-Agent": r
                                }
                            },
                            o = {
                                ...e.request,
                                ...t && {
                                    url: t
                                },
                                headers: i
                            };
                        e.request = o
                    }
                });

            function rm(e, t) {
                e.mechanism = e.mechanism || {
                    type: "generic",
                    handled: !0
                }, e.mechanism = {
                    ...e.mechanism,
                    ..."AggregateError" === e.type && {
                        is_exception_group: !0
                    },
                    exception_id: t
                }
            }

            function rf(e, t, n, r) {
                e.mechanism = e.mechanism || {
                    type: "generic",
                    handled: !0
                }, e.mechanism = {
                    ...e.mechanism,
                    type: "chained",
                    source: t,
                    exception_id: n,
                    parent_id: r
                }
            }
            nd(rg, rh);
            let ry = "LinkedErrors",
                rb = (e = {}) => {
                    let t = e.limit || 5,
                        n = e.key || "cause";
                    return {
                        name: ry,
                        setupOnce() {},
                        preprocessEvent(e, r, i) {
                            let o = i.getOptions();
                            ! function (e, t, n = 250, r, i, o, a) {
                                if (!o.exception || !o.exception.values || !a || !tr(a.originalException, Error)) return;
                                let s = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
                                s && (o.exception.values = (function e(t, n, r, i, o, a, s, d) {
                                    if (a.length >= r + 1) return a;
                                    let l = [...a];
                                    if (tr(i[o], Error)) {
                                        rm(s, d);
                                        let a = t(n, i[o]),
                                            c = l.length;
                                        rf(a, o, c, d), l = e(t, n, r, i[o], o, [a, ...l], a, c)
                                    }
                                    return Array.isArray(i.errors) && i.errors.forEach((i, a) => {
                                        if (tr(i, Error)) {
                                            rm(s, d);
                                            let c = t(n, i),
                                                u = l.length;
                                            rf(c, `errors[${a}]`, u, d), l = e(t, n, r, i, o, [c, ...l], c, u)
                                        }
                                    }), l
                                })(e, t, i, a.originalException, r, o.exception.values, s, 0).map(e => (e.value && (e.value = ta(e.value, n)), e)))
                            }(n$, o.stackParser, o.maxValueLength, n, t, e, r)
                        }
                    }
                };
            nd(ry, rb);
            let rv = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                rk = "TryCatch",
                rw = (e = {}) => {
                    let t = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        ...e
                    };
                    return {
                        name: rk,
                        setupOnce() {
                            t.setTimeout && tl(eY, "setTimeout", r_), t.setInterval && tl(eY, "setInterval", r_), t.requestAnimationFrame && tl(eY, "requestAnimationFrame", rS), t.XMLHttpRequest && "XMLHttpRequest" in eY && tl(XMLHttpRequest.prototype, "send", rA);
                            let e = t.eventTarget;
                            e && (Array.isArray(e) ? e : rv).forEach(rT)
                        }
                    }
                };

            function r_(e) {
                return function (...t) {
                    let n = t[0];
                    return t[0] = nK(n, {
                        mechanism: {
                            data: {
                                function: t$(e)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), e.apply(this, t)
                }
            }

            function rS(e) {
                return function (t) {
                    return e.apply(this, [nK(t, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: t$(e)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    })])
                }
            }

            function rA(e) {
                return function (...t) {
                    let n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                        e in n && "function" == typeof n[e] && tl(n, e, function (t) {
                            let n = {
                                    mechanism: {
                                        data: {
                                            function: e,
                                            handler: t$(t)
                                        },
                                        handled: !1,
                                        type: "instrument"
                                    }
                                },
                                r = tp(t);
                            return r && (n.mechanism.data.handler = t$(r)), nK(t, n)
                        })
                    }), e.apply(this, t)
                }
            }

            function rT(e) {
                let t = eY[e] && eY[e].prototype;
                t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (tl(t, "addEventListener", function (t) {
                    return function (n, r, i) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = nK(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: t$(r),
                                        target: e
                                    },
                                    handled: !1,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) {}
                        return t.apply(this, [n, nK(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: t$(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }), i])
                    }
                }), tl(t, "removeEventListener", function (e) {
                    return function (t, n, r) {
                        try {
                            let i = n && n.__sentry_wrapped__;
                            i && e.call(this, t, i, r)
                        } catch (e) {}
                        return e.call(this, t, n, r)
                    }
                }))
            }

            function rx(e, t, n, r) {
                let i = {
                    filename: e,
                    function: t,
                    in_app: !0
                };
                return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
            }
            nd(rk, rw);
            let rz = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                rC = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                rP = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                rL = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                rO = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                rD = tj([30, e => {
                    let t = rz.exec(e);
                    if (t) {
                        if (t[2] && 0 === t[2].indexOf("eval")) {
                            let e = rC.exec(t[2]);
                            e && (t[2] = e[1], t[3] = e[2], t[4] = e[3])
                        }
                        let [e, n] = rE(t[1] || "?", t[2]);
                        return rx(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                    }
                }], [50, e => {
                    let t = rP.exec(e);
                    if (t) {
                        if (t[3] && t[3].indexOf(" > eval") > -1) {
                            let e = rL.exec(t[3]);
                            e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                        }
                        let e = t[3],
                            n = t[1] || "?";
                        return [n, e] = rE(n, e), rx(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                    }
                }], [40, e => {
                    let t = rO.exec(e);
                    return t ? rx(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0
                }]),
                rE = (e, t) => {
                    let n = -1 !== e.indexOf("safari-extension"),
                        r = -1 !== e.indexOf("safari-web-extension");
                    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
                };

            function rM(e, t, n = function (e) {
                let t = [];

                function n(e) {
                    return t.splice(t.indexOf(e), 1)[0]
                }
                return {
                    $: t,
                    add: function (r) {
                        if (!(void 0 === e || t.length < e)) return tx(new nM("Not adding Promise because buffer limit was reached."));
                        let i = r();
                        return -1 === t.indexOf(i) && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {})), i
                    },
                    drain: function (e) {
                        return new tz((n, r) => {
                            let i = t.length;
                            if (!i) return n(!0);
                            let o = setTimeout(() => {
                                e && e > 0 && n(!1)
                            }, e);
                            t.forEach(e => {
                                tT(e).then(() => {
                                    --i || (clearTimeout(o), n(!0))
                                }, r)
                            })
                        })
                    }
                }
            }(e.bufferSize || 30)) {
                let r = {};

                function i(i) {
                    let o = [];
                    if (nL(i, (t, n) => {
                            let i = nD[n];
                            if (function (e, t, n = Date.now()) {
                                    return (e[t] || e.all || 0) > n
                                }(r, i)) {
                                let r = rR(t, n);
                                e.recordDroppedEvent("ratelimit_backoff", i, r)
                            } else o.push(t)
                        }), 0 === o.length) return tT();
                    let a = nP(i[0], o),
                        s = t => {
                            nL(a, (n, r) => {
                                let i = rR(n, r);
                                e.recordDroppedEvent(t, nD[r], i)
                            })
                        };
                    return n.add(() => t({
                        body: function (e, t) {
                            let [n, r] = e, i = JSON.stringify(n);

                            function o(e) {
                                "string" == typeof i ? i = "string" == typeof e ? i + e : [nO(i, t), e] : i.push("string" == typeof e ? nO(e, t) : e)
                            }
                            for (let e of r) {
                                let [t, n] = e;
                                if (o(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) o(n);
                                else {
                                    let e;
                                    try {
                                        e = JSON.stringify(n)
                                    } catch (t) {
                                        e = JSON.stringify(tH(n))
                                    }
                                    o(e)
                                }
                            }
                            return "string" == typeof i ? i : function (e) {
                                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                                    n = 0;
                                for (let r of e) t.set(r, n), n += r.length;
                                return t
                            }(i)
                        }(a, e.textEncoder)
                    }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && tA && e1.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = function (e, {
                        statusCode: t,
                        headers: n
                    }, r = Date.now()) {
                        let i = {
                                ...e
                            },
                            o = n && n["x-sentry-rate-limits"],
                            a = n && n["retry-after"];
                        if (o)
                            for (let e of o.trim().split(",")) {
                                let [t, n, , , o] = e.split(":", 5), a = parseInt(t, 10), s = (isNaN(a) ? 60 : a) * 1e3;
                                if (n)
                                    for (let e of n.split(";")) "metric_bucket" === e ? (!o || o.split(";").includes("custom")) && (i[e] = r + s) : i[e] = r + s;
                                else i.all = r + s
                            } else a ? i.all = r + function (e, t = Date.now()) {
                                let n = parseInt(`${e}`, 10);
                                if (!isNaN(n)) return 1e3 * n;
                                let r = Date.parse(`${e}`);
                                return isNaN(r) ? 6e4 : r - t
                            }(a, r) : 429 === t && (i.all = r + 6e4);
                        return i
                    }(r, e), e), e => {
                        throw s("network_error"), e
                    })).then(e => e, e => {
                        if (e instanceof nM) return tA && e1.error("Skipped sending event because buffer is full."), s("queue_overflow"), tT();
                        throw e
                    })
                }
                return i.__sentry__baseTransport__ = !0, {
                    send: i,
                    flush: e => n.drain(e)
                }
            }

            function rR(e, t) {
                if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0
            }

            function rF(e, t = function () {
                if (l) return l;
                if (nb(eY.fetch)) return l = eY.fetch.bind(eY);
                let e = eY.document,
                    t = eY.fetch;
                if (e && "function" == typeof e.createElement) try {
                    let n = e.createElement("iframe");
                    n.hidden = !0, e.head.appendChild(n);
                    let r = n.contentWindow;
                    r && r.fetch && (t = r.fetch), e.head.removeChild(n)
                } catch (e) {
                    nI && e1.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
                return l = t.bind(eY)
            }()) {
                let n = 0,
                    r = 0;
                return rM(e, function (i) {
                    let o = i.body.length;
                    n += o, r++;
                    let a = {
                        body: i.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: e.headers,
                        keepalive: n <= 6e4 && r < 15,
                        ...e.fetchOptions
                    };
                    try {
                        return t(e.url, a).then(e => (n -= o, r--, {
                            statusCode: e.status,
                            headers: {
                                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": e.headers.get("Retry-After")
                            }
                        }))
                    } catch (e) {
                        return l = void 0, n -= o, r--, tx(e)
                    }
                })
            }

            function rB(e) {
                return rM(e, function (t) {
                    return new tz((n, r) => {
                        let i = new XMLHttpRequest;
                        for (let t in i.onerror = r, i.onreadystatechange = () => {
                                4 === i.readyState && n({
                                    statusCode: i.status,
                                    headers: {
                                        "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": i.getResponseHeader("Retry-After")
                                    }
                                })
                            }, i.open("POST", e.url), e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && i.setRequestHeader(t, e.headers[t]);
                        i.send(t.body)
                    })
                })
            }
            let rN = [np(), nf(), rw(), n6(), rl(), rb(), n9(), rh()];

            function rj(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                return (0, p.jsx)(t, {
                    ...n
                })
            }! function (e) {
                let t = {
                    ...e
                };
                nj(t, "react"),
                    function (e = {}) {
                        var t;
                        void 0 === e.defaultIntegrations && (e.defaultIntegrations = [...rN]), void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), eY.SENTRY_RELEASE && eY.SENTRY_RELEASE.id && (e.release = eY.SENTRY_RELEASE.id)), void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0),
                            function (e, t) {
                                !0 === t.debug && (tA ? e1.enable() : e0(() => {
                                    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                                })), tK().update(t.initialScope);
                                let n = new e(t);
                                (function (e) {
                                    let t = nt().getStackTop();
                                    t.client = e, t.scope.setClient(e)
                                })(n), n.init ? n.init() : n.setupIntegrations && n.setupIntegrations()
                            }(nJ, {
                                ...e,
                                stackParser: Array.isArray(t = e.stackParser || rD) ? tj(...t) : t,
                                integrations: function (e) {
                                    let t = e.defaultIntegrations || [],
                                        n = e.integrations;
                                    t.forEach(e => {
                                        e.isDefaultInstance = !0
                                    });
                                    let r = function (e) {
                                            let t = {};
                                            return e.forEach(e => {
                                                let {
                                                    name: n
                                                } = e, r = t[n];
                                                r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                                            }), Object.keys(t).map(e => t[e])
                                        }(Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? tS(n(t)) : t),
                                        i = function (e, t) {
                                            for (let n = 0; n < e.length; n++)
                                                if (!0 === t(e[n])) return n;
                                            return -1
                                        }(r, e => "Debug" === e.name);
                                    if (-1 !== i) {
                                        let [e] = r.splice(i, 1);
                                        r.push(e)
                                    }
                                    return r
                                }(e),
                                transport: e.transport || (ny() ? rF : rB)
                            }), e.autoSessionTracking && function () {
                                if (void 0 === eY.document) {
                                    nI && e1.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                                    return
                                }
                                tJ({
                                    ignoreDuration: !0
                                }), tZ(), nA(({
                                    from: e,
                                    to: t
                                }) => {
                                    void 0 !== e && e !== t && (tJ({
                                        ignoreDuration: !0
                                    }), tZ())
                                })
                            }()
                    }(t)
            }({
                dsn: "https://8043f7fe20f3cef5769adf09f8d57ac7@o4506948346642432.ingest.us.sentry.io/4506948347822080",
                integrations: []
            }), n(80587), BigInt.prototype.toJSON = function () {
                return this.toString()
            }
        },
        80587: function () {},
        63229: function (e) {
            e.exports = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
        },
        69760: function (e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                cC: function () {
                    return L
                },
                Db: function () {
                    return z
                },
                $G: function () {
                    return D
                }
            });
            var i = n(44194);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = n(63229),
                s = n.n(a),
                d = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

            function l(e) {
                var t = {
                        type: "tag",
                        name: "",
                        voidElement: !1,
                        attrs: {},
                        children: []
                    },
                    n = e.match(/<\/?([^\s]+?)[/\s>]/);
                if (n && (t.name = n[1], (s()[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0), t.name.startsWith("!--"))) {
                    var r = e.indexOf("-->");
                    return {
                        type: "comment",
                        comment: -1 !== r ? e.slice(4, r) : ""
                    }
                }
                for (var i = new RegExp(d), o = null; null !== (o = i.exec(e));)
                    if (o[0].trim()) {
                        if (o[1]) {
                            var a = o[1].trim(),
                                l = [a, ""];
                            a.indexOf("=") > -1 && (l = a.split("=")), t.attrs[l[0]] = l[1], i.lastIndex--
                        } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1))
                    } return t
            }
            var c = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
                u = /^\s*$/,
                p = Object.create(null),
                g = {
                    parse: function (e, t) {
                        t || (t = {}), t.components || (t.components = p);
                        var n, r = [],
                            i = [],
                            o = -1,
                            a = !1;
                        if (0 !== e.indexOf("<")) {
                            var s = e.indexOf("<");
                            r.push({
                                type: "text",
                                content: -1 === s ? e : e.substring(0, s)
                            })
                        }
                        return e.replace(c, function (s, d) {
                            if (a) {
                                if (s !== "</" + n.name + ">") return;
                                a = !1
                            }
                            var c, p = "/" !== s.charAt(1),
                                g = s.startsWith("<!--"),
                                h = d + s.length,
                                m = e.charAt(h);
                            if (g) {
                                var f = l(s);
                                return o < 0 ? r.push(f) : (c = i[o]).children.push(f), r
                            }
                            if (p && (o++, "tag" === (n = l(s)).type && t.components[n.name] && (n.type = "component", a = !0), n.voidElement || a || !m || "<" === m || n.children.push({
                                    type: "text",
                                    content: e.slice(h, e.indexOf("<", h))
                                }), 0 === o && r.push(n), (c = i[o - 1]) && c.children.push(n), i[o] = n), (!p || n.voidElement) && (o > -1 && (n.voidElement || n.name === s.slice(2, -1)) && (n = -1 == --o ? r : i[o]), !a && "<" !== m && m)) {
                                c = -1 === o ? r : i[o].children;
                                var y = e.indexOf("<", h),
                                    b = e.slice(h, -1 === y ? void 0 : y);
                                u.test(b) && (b = " "), (y > -1 && o + c.length >= 0 || " " !== b) && c.push({
                                    type: "text",
                                    content: b
                                })
                            }
                        }), r
                    }
                };

            function h() {
                if (console && console.warn) {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t)
                }
            }
            let m = {};

            function f() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                "string" == typeof t[0] && m[t[0]] || ("string" == typeof t[0] && (m[t[0]] = new Date), h(...t))
            }
            let y = (e, t) => () => {
                if (e.isInitialized) t();
                else {
                    let n = () => {
                        setTimeout(() => {
                            e.off("initialized", n)
                        }, 0), t()
                    };
                    e.on("initialized", n)
                }
            };

            function b(e, t, n) {
                e.loadNamespaces(t, y(e, n))
            }

            function v(e, t, n, r) {
                "string" == typeof n && (n = [n]), n.forEach(t => {
                    0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
                }), e.loadLanguages(t, y(e, r))
            }
            let k = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                w = {
                    "&amp;": "&",
                    "&#38;": "&",
                    "&lt;": "<",
                    "&#60;": "<",
                    "&gt;": ">",
                    "&#62;": ">",
                    "&apos;": "'",
                    "&#39;": "'",
                    "&quot;": '"',
                    "&#34;": '"',
                    "&nbsp;": " ",
                    "&#160;": " ",
                    "&copy;": "\xa9",
                    "&#169;": "\xa9",
                    "&reg;": "\xae",
                    "&#174;": "\xae",
                    "&hellip;": "…",
                    "&#8230;": "…",
                    "&#x2F;": "/",
                    "&#47;": "/"
                },
                _ = e => w[e],
                S = {
                    bindI18n: "languageChanged",
                    bindI18nStore: "",
                    transEmptyNodeValue: "",
                    transSupportBasicHtmlNodes: !0,
                    transWrapTextNodes: "",
                    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                    useSuspense: !0,
                    unescape: e => e.replace(k, _)
                };

            function A(e, t) {
                if (!e) return !1;
                let n = e.props ? e.props.children : e.children;
                return t ? n.length > 0 : !!n
            }

            function T(e) {
                if (!e) return [];
                let t = e.props ? e.props.children : e.children;
                return e.props && e.props.i18nIsDynamicList ? x(t) : t
            }

            function x(e) {
                return Array.isArray(e) ? e : [e]
            }
            let z = {
                    type: "3rdParty",
                    init(e) {
                        ! function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            S = {
                                ...S,
                                ...e
                            }
                        }(e.options.react), r = e
                    }
                },
                C = (0, i.createContext)();
            class P {
                constructor() {
                    this.usedNamespaces = {}
                }
                addUsedNamespaces(e) {
                    e.forEach(e => {
                        this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
                    })
                }
                getUsedNamespaces() {
                    return Object.keys(this.usedNamespaces)
                }
            }

            function L(e) {
                let {
                    children: t,
                    count: n,
                    parent: a,
                    i18nKey: s,
                    context: d,
                    tOptions: l = {},
                    values: c,
                    defaults: u,
                    components: p,
                    ns: m,
                    i18n: y,
                    t: b,
                    shouldUnescape: v,
                    ...k
                } = e, {
                    i18n: w,
                    defaultNS: _
                } = (0, i.useContext)(C) || {}, z = y || w || r, P = b || z && z.t.bind(z);
                return function (e) {
                    let {
                        children: t,
                        count: n,
                        parent: a,
                        i18nKey: s,
                        context: d,
                        tOptions: l = {},
                        values: c,
                        defaults: u,
                        components: p,
                        ns: m,
                        i18n: y,
                        t: b,
                        shouldUnescape: v,
                        ...k
                    } = e, w = y || r;
                    if (!w) return f("You will need to pass in an i18next instance by using i18nextReactModule"), t;
                    let _ = b || w.t.bind(w) || (e => e);
                    d && (l.context = d);
                    let z = {
                            ...S,
                            ...w.options && w.options.react
                        },
                        C = m || _.ns || w.options && w.options.defaultNS;
                    C = "string" == typeof C ? [C] : C || ["translation"];
                    let P = function e(t, n) {
                            if (!t) return "";
                            let r = "",
                                o = x(t),
                                a = n.transSupportBasicHtmlNodes && n.transKeepBasicHtmlNodesFor ? n.transKeepBasicHtmlNodesFor : [];
                            return o.forEach((t, o) => {
                                if ("string" == typeof t) r += `${t}`;
                                else if ((0, i.isValidElement)(t)) {
                                    let i = Object.keys(t.props).length,
                                        s = a.indexOf(t.type) > -1,
                                        d = t.props.children;
                                    if (!d && s && 0 === i) r += `<${t.type}/>`;
                                    else if (d || s && 0 === i) {
                                        if (t.props.i18nIsDynamicList) r += `<${o}></${o}>`;
                                        else if (s && 1 === i && "string" == typeof d) r += `<${t.type}>${d}</${t.type}>`;
                                        else {
                                            let t = e(d, n);
                                            r += `<${o}>${t}</${o}>`
                                        }
                                    } else r += `<${o}></${o}>`
                                } else if (null === t) h("Trans: the passed in value is invalid - seems you passed in a null child.");
                                else if ("object" == typeof t) {
                                    let {
                                        format: e,
                                        ...n
                                    } = t, i = Object.keys(n);
                                    if (1 === i.length) {
                                        let t = e ? `${i[0]}, ${e}` : i[0];
                                        r += `{{${t}}}`
                                    } else h("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", t)
                                } else h("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", t)
                            }), r
                        }(t, z),
                        L = u || P || z.transEmptyNodeValue || s,
                        {
                            hashTransKey: O
                        } = z,
                        D = s || (O ? O(P || L) : P || L);
                    w.options && w.options.interpolation && w.options.interpolation.defaultVariables && (c = c && Object.keys(c).length > 0 ? {
                        ...c,
                        ...w.options.interpolation.defaultVariables
                    } : {
                        ...w.options.interpolation.defaultVariables
                    });
                    let E = c ? l.interpolation : {
                            interpolation: {
                                ...l.interpolation,
                                prefix: "#$?",
                                suffix: "?$#"
                            }
                        },
                        M = {
                            ...l,
                            count: n,
                            ...c,
                            ...E,
                            defaultValue: L,
                            ns: C
                        },
                        R = D ? _(D, M) : L;
                    p && Object.keys(p).forEach(e => {
                        let t = p[e];
                        "function" == typeof t.type || !t.props || !t.props.children || 0 > R.indexOf(`${e}/>`) && 0 > R.indexOf(`${e} />`) || (p[e] = i.createElement(function () {
                            return i.createElement(i.Fragment, null, t)
                        }, null))
                    });
                    let F = function (e, t, n, r, a, s) {
                            if ("" === t) return [];
                            let d = r.transKeepBasicHtmlNodesFor || [],
                                l = t && new RegExp(d.map(e => `<${e}`).join("|")).test(t);
                            if (!e && !l && !s) return [t];
                            let c = {};
                            ! function e(t) {
                                x(t).forEach(t => {
                                    "string" == typeof t || (A(t) ? e(T(t)) : "object" != typeof t || (0, i.isValidElement)(t) || Object.assign(c, t))
                                })
                            }(e);
                            let u = g.parse(`<0>${t}</0>`),
                                p = {
                                    ...c,
                                    ...a
                                };

                            function h(e, t, n) {
                                let r = T(e),
                                    o = f(r, t.children, n);
                                return "[object Array]" === Object.prototype.toString.call(r) && r.every(e => (0, i.isValidElement)(e)) && 0 === o.length || e.props && e.props.i18nIsDynamicList ? r : o
                            }

                            function m(e, t, n, r, a) {
                                e.dummy ? (e.children = t, n.push((0, i.cloneElement)(e, {
                                    key: r
                                }, a ? void 0 : t))) : n.push(...i.Children.map([e], e => {
                                    let n = {
                                        ...e.props
                                    };
                                    return delete n.i18nIsDynamicList, i.createElement(e.type, o({}, n, {
                                        key: r,
                                        ref: e.ref
                                    }, a ? {} : {
                                        children: t
                                    }))
                                }))
                            }

                            function f(t, o, a) {
                                let c = x(t);
                                return x(o).reduce((t, o, u) => {
                                    let g = o.children && o.children[0] && o.children[0].content && n.services.interpolator.interpolate(o.children[0].content, p, n.language);
                                    if ("tag" === o.type) {
                                        let s = c[parseInt(o.name, 10)];
                                        1 !== a.length || s || (s = a[0][o.name]), s || (s = {});
                                        let y = 0 !== Object.keys(o.attrs).length ? function (e, t) {
                                                let n = {
                                                    ...t
                                                };
                                                return n.props = Object.assign(e.props, t.props), n
                                            }({
                                                props: o.attrs
                                            }, s) : s,
                                            b = (0, i.isValidElement)(y),
                                            v = b && A(o, !0) && !o.voidElement,
                                            k = l && "object" == typeof y && y.dummy && !b,
                                            w = "object" == typeof e && null !== e && Object.hasOwnProperty.call(e, o.name);
                                        if ("string" == typeof y) {
                                            let e = n.services.interpolator.interpolate(y, p, n.language);
                                            t.push(e)
                                        } else if (A(y) || v) {
                                            let e = h(y, o, a);
                                            m(y, e, t, u)
                                        } else if (k) m(y, f(c, o.children, a), t, u);
                                        else if (Number.isNaN(parseFloat(o.name))) {
                                            if (w) {
                                                let e = h(y, o, a);
                                                m(y, e, t, u, o.voidElement)
                                            } else if (r.transSupportBasicHtmlNodes && d.indexOf(o.name) > -1) {
                                                if (o.voidElement) t.push((0, i.createElement)(o.name, {
                                                    key: `${o.name}-${u}`
                                                }));
                                                else {
                                                    let e = f(c, o.children, a);
                                                    t.push((0, i.createElement)(o.name, {
                                                        key: `${o.name}-${u}`
                                                    }, e))
                                                }
                                            } else if (o.voidElement) t.push(`<${o.name} />`);
                                            else {
                                                let e = f(c, o.children, a);
                                                t.push(`<${o.name}>${e}</${o.name}>`)
                                            }
                                        } else if ("object" != typeof y || b) m(y, g, t, u, 1 !== o.children.length || !g);
                                        else {
                                            let e = o.children[0] ? g : null;
                                            e && t.push(e)
                                        }
                                    } else if ("text" === o.type) {
                                        let e = r.transWrapTextNodes,
                                            a = s ? r.unescape(n.services.interpolator.interpolate(o.content, p, n.language)) : n.services.interpolator.interpolate(o.content, p, n.language);
                                        e ? t.push((0, i.createElement)(e, {
                                            key: `${o.name}-${u}`
                                        }, a)) : t.push(a)
                                    }
                                    return t
                                }, [])
                            }
                            return T(f([{
                                dummy: !0,
                                children: e || []
                            }], u, x(e || []))[0])
                        }(p || t, R, w, z, M, v),
                        B = void 0 !== a ? a : z.defaultTransParent;
                    return B ? (0, i.createElement)(B, k, F) : F
                }({
                    children: t,
                    count: n,
                    parent: a,
                    i18nKey: s,
                    context: d,
                    tOptions: l,
                    values: c,
                    defaults: u,
                    components: p,
                    ns: m || P && P.ns || _ || z && z.options && z.options.defaultNS,
                    i18n: z,
                    t: b,
                    shouldUnescape: v,
                    ...k
                })
            }
            let O = (e, t) => {
                let n = (0, i.useRef)();
                return (0, i.useEffect)(() => {
                    n.current = t ? n.current : e
                }, [e, t]), n.current
            };

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        i18n: n
                    } = t,
                    {
                        i18n: o,
                        defaultNS: a
                    } = (0, i.useContext)(C) || {},
                    s = n || o || r;
                if (s && !s.reportNamespaces && (s.reportNamespaces = new P), !s) {
                    f("You will need to pass in an i18next instance by using initReactI18next");
                    let e = (e, t) => "string" == typeof t ? t : t && "object" == typeof t && "string" == typeof t.defaultValue ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
                        t = [e, {}, !1];
                    return t.t = e, t.i18n = {}, t.ready = !1, t
                }
                s.options.react && void 0 !== s.options.react.wait && f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                let d = {
                        ...S,
                        ...s.options.react,
                        ...t
                    },
                    {
                        useSuspense: l,
                        keyPrefix: c
                    } = d,
                    u = e || a || s.options && s.options.defaultNS;
                u = "string" == typeof u ? [u] : u || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(u);
                let p = (s.isInitialized || s.initializedStoreOnce) && u.every(e => (function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return t.languages && t.languages.length ? void 0 !== t.options.ignoreJSONStructure ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1
                        }
                    }) : function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.languages[0],
                            i = !!t.options && t.options.fallbackLng,
                            o = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        let a = (e, n) => {
                            let r = t.services.backendConnector.state[`${e}|${n}`];
                            return -1 === r || 2 === r
                        };
                        return (!(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1) || !t.services.backendConnector.backend || !t.isLanguageChangingTo || !!a(t.isLanguageChangingTo, e)) && !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(r, e) && (!i || a(o, e)))
                    }(e, t, n) : (f("i18n.languages were undefined or empty", t.languages), !0)
                })(e, s, d));

                function g() {
                    return s.getFixedT(t.lng || null, "fallback" === d.nsMode ? u : u[0], c)
                }
                let [h, m] = (0, i.useState)(g), y = u.join();
                t.lng && (y = `${t.lng}${y}`);
                let k = O(y),
                    w = (0, i.useRef)(!0);
                (0, i.useEffect)(() => {
                    let {
                        bindI18n: e,
                        bindI18nStore: n
                    } = d;

                    function r() {
                        w.current && m(g)
                    }
                    return w.current = !0, p || l || (t.lng ? v(s, t.lng, u, () => {
                        w.current && m(g)
                    }) : b(s, u, () => {
                        w.current && m(g)
                    })), p && k && k !== y && w.current && m(g), e && s && s.on(e, r), n && s && s.store.on(n, r), () => {
                        w.current = !1, e && s && e.split(" ").forEach(e => s.off(e, r)), n && s && n.split(" ").forEach(e => s.store.off(e, r))
                    }
                }, [s, y]);
                let _ = (0, i.useRef)(!0);
                (0, i.useEffect)(() => {
                    w.current && !_.current && m(g), _.current = !1
                }, [s, c]);
                let A = [h, s, p];
                if (A.t = h, A.i18n = s, A.ready = p, p || !p && !l) return A;
                throw new Promise(e => {
                    t.lng ? v(s, t.lng, u, () => e()) : b(s, u, () => e())
                })
            }
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], function () {
            return t(50546), t(84677)
        }), _N_E = e.O()
    }
]);