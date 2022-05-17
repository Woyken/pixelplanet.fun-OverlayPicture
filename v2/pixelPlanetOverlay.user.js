
// ==UserScript==
// @name         pixelplanet.fun picture overlay
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture
// @version      1.1.0
// @description  Add your picture as overlay to pixelplanet.fun
// @author       Woyken
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://woyken.github.io/pixelplanet.fun-OverlayPicture/assets/pixelPlanetOverlay-loader.user.js
// ==/UserScript==
/**/

var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps2 = (a2, b2) => __defProps2(a2, __getOwnPropDescs2(b2));
function _mergeNamespaces(n2, m2) {
  m2.forEach(function(e2) {
    e2 && typeof e2 !== "string" && !Array.isArray(e2) && Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n2)) {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  });
  return Object.freeze(n2);
}
function n$7(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$5(n2) {
  return !!n2 && !!n2[Q$2];
}
function t$5(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!n2.constructor[L$1] || s(n2) || v$5(n2));
}
function i(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q$2];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v$5(n2) ? 3 : 0;
}
function u$5(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f$4(n2, r2, t2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c$3(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X$1 && n2 instanceof Map;
}
function v$5(n2) {
  return q$8 && n2 instanceof Set;
}
function p$8(n2) {
  return n2.o || n2.t;
}
function l$6(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$2];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d$3(n2, e2) {
  return e2 === void 0 && (e2 = false), y$3(n2) || r$5(n2) || !t$5(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$5), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d$3(r2, true);
  }, true), n2);
}
function h$5() {
  n$7(2);
}
function y$3(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b$3(r2) {
  var t2 = tn[r2];
  return t2 || n$7(18, r2), t2;
}
function m$6(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _$1() {
  return U$2;
}
function j(n2, r2) {
  r2 && (b$3("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O$1(n2) {
  g$3(n2), n2.p.forEach(S$2), n2.p = null;
}
function g$3(n2) {
  n2 === U$2 && (U$2 = n2.l);
}
function w$4(n2) {
  return U$2 = { p: [], l: U$2, h: n2, m: true, _: 0 };
}
function S$2(n2) {
  var r2 = n2[Q$2];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P$2(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b$3("ES5").S(e2, r2, o2), o2 ? (i2[Q$2].P && (O$1(e2), n$7(4)), t$5(r2) && (r2 = M$2(e2, r2), e2.l || x$3(e2, r2)), e2.u && b$3("Patches").M(i2[Q$2].t, r2, e2.u, e2.s)) : r2 = M$2(e2, i2, []), O$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$3 ? r2 : void 0;
}
function M$2(n2, r2, t2) {
  if (y$3(r2))
    return r2;
  var e2 = r2[Q$2];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A$4(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x$3(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l$6(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A$4(n2, e2, o2, r3, i2, t2);
    }), x$3(n2, o2, false), t2 && n2.u && b$3("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$4(e2, i2, o2, a2, c2, s2) {
  if (r$5(c2)) {
    var v2 = M$2(e2, c2, s2 && i2 && i2.i !== 3 && !u$5(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f$4(o2, a2, v2), !r$5(v2))
      return;
    e2.m = false;
  }
  if (t$5(c2) && !y$3(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M$2(e2, c2), i2 && i2.A.l || x$3(e2, c2);
  }
}
function x$3(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d$3(r2, t2);
}
function z$4(n2, r2) {
  var t2 = n2[Q$2];
  return (t2 ? p$8(t2) : n2)[r2];
}
function I$3(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k$5(n2) {
  n2.P || (n2.P = true, n2.l && k$5(n2.l));
}
function E$3(n2) {
  n2.o || (n2.o = l$6(n2.t));
}
function R$2(n2, r2, t2) {
  var e2 = s(r2) ? b$3("MapSet").N(r2, t2) : v$5(r2) ? b$3("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b$3("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function D$3(e2) {
  return r$5(e2) || n$7(22, e2), function n2(r2) {
    if (!t$5(r2))
      return r2;
    var e3, u2 = r2[Q$2], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$3("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F$3(r2, c2), u2.I = false;
    } else
      e3 = F$3(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f$4(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F$3(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$6(n2);
}
function N$2() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q$2];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q$2];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q$2];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k$5(t3);
            break;
          case 4:
            o2(t3) && k$5(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q$2) {
        var a3 = r2[o3];
        if (a3 === void 0 && !u$5(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q$2];
        if (s3 ? s3.t !== a3 : !c$3(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q$2];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m$6("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q$2];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _$1(), P: false, I: false, D: {}, l: r2, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q$2, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r$5(t3) && t3[Q$2].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && typeof r2 == "object") {
        var t4 = r2[Q$2];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.D, c2 = t4.i;
          if (c2 === 4)
            i(o4, function(r3) {
              r3 !== Q$2 && (e3[r3] !== void 0 || u$5(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k$5(t4)));
            }), i(e3, function(n4) {
              o4[n4] !== void 0 || u$5(o4, n4) || (f2[n4] = false, k$5(t4));
            });
          else if (c2 === 5) {
            if (a2(t4) && (k$5(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), f2[l2] === void 0 && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return n2.i === 4 ? o2(n2) : a2(n2);
  } });
}
var G$3, U$2, W$2 = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X$1 = typeof Map != "undefined", q$8 = typeof Set != "undefined", B$2 = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H$3 = W$2 ? Symbol.for("immer-nothing") : ((G$3 = {})["immer-nothing"] = true, G$3), L$1 = W$2 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$2 = W$2 ? Symbol.for("immer-state") : "__$immer_state", Z$1 = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$2)
    return n2;
  var e2 = p$8(n2);
  if (!u$5(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$3(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t$5(i2) ? i2 : i2 === z$4(n2.t, r2) ? (E$3(n2), n2.o[r2] = R$2(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$8(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$8(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$3(p$8(n2), r2);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$4(p$8(n2), r2), o2 = i2 == null ? void 0 : i2[Q$2];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c$3(t2, i2) && (t2 !== void 0 || u$5(n2.t, r2)))
      return true;
    E$3(n2), k$5(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z$4(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E$3(n2), k$5(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$8(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$7(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$7(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B$2, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n$7(6), o2 !== void 0 && typeof o2 != "function" && n$7(7), t$5(r3)) {
        var c2 = w$4(e3), s2 = R$2(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O$1(c2) : g$3(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P$2(n2, c2);
        }, function(n2) {
          throw O$1(c2), n2;
        }) : (j(c2, o2), P$2(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H$3 && (f2 = void 0), e3.F && d$3(f2, true), o2) {
          var p2 = [], l2 = [];
          b$3("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$7(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t$5(e3) || n$7(8), r$5(e3) && (e3 = D$3(e3));
    var i3 = w$4(this), o2 = R$2(this, e3, void 0);
    return o2[Q$2].C = true, g$3(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$2];
    var i3 = e3.A;
    return j(i3, t2), P$2(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B$2 && n$7(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b$3("Patches").$;
    return r$5(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var createNextState2 = fn;
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$2(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer2 = reducers[key];
    var initialState2 = reducer2(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer2(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer2 = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer2(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose$1() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store2 = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store2.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware2) {
        return middleware2(middlewareAPI);
      });
      _dispatch = compose$1.apply(void 0, chain)(store2.dispatch);
      return _objectSpread2(_objectSpread2({}, store2), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a2, b2) {
  return a2 === b2;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev2, next2) {
    if (prev2 === null || next2 === null || prev2.length !== next2.length) {
      return false;
    }
    var length2 = prev2.length;
    for (var i2 = 0; i2 < length2; i2++) {
      if (!equalityCheck(prev2[i2], next2[i2])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache2 = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache2.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache2.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache2.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache2.clear();
  };
  return memoized;
}
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize2) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize2.apply(void 0, [function() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize2(function() {
      var params = [];
      var length2 = dependencies.length;
      for (var i2 = 0; i2 < length2; i2++) {
        params.push(dependencies[i2].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);
function createThunkMiddleware(extraArgument) {
  var middleware2 = function middleware3(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next2) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next2(action);
      };
    };
  };
  return middleware2;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var thunkMiddleware = thunk;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator$1 = globalThis && globalThis.__generator || function(thisArg, body2) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body2.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to.length; i2 < il2; i2++, j2++)
    to[j2] = from2[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose$1;
  return compose$1.apply(null, arguments);
};
function isPlainObject$1(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
var MiddlewareArray = function(_super) {
  __extends(MiddlewareArray2, _super);
  function MiddlewareArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
    return _this;
  }
  Object.defineProperty(MiddlewareArray2, Symbol.species, {
    get: function() {
      return MiddlewareArray2;
    },
    enumerable: false,
    configurable: true
  });
  MiddlewareArray2.prototype.concat = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    return _super.prototype.concat.apply(this, arr);
  };
  MiddlewareArray2.prototype.prepend = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
    }
    return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
  };
  return MiddlewareArray2;
}(Array);
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer2 = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware2 = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer2 === "function") {
    rootReducer = reducer2;
  } else if (isPlainObject$1(reducer2)) {
    rootReducer = combineReducers(reducer2);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware2;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose$1;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer2) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer2;
      return builder;
    },
    addMatcher: function(matcher, reducer2) {
      actionMatchers.push({ matcher, reducer: reducer2 });
      return builder;
    },
    addDefaultCase: function(reducer2) {
      defaultCaseReducer = reducer2;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return createNextState2(initialState2(), function() {
      });
    };
  } else {
    var frozenInitialState_1 = createNextState2(initialState2, function() {
    });
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer2(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer22 = _c2.reducer;
      return reducer22;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r$5(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (typeof result === "undefined") {
            return previousState;
          }
          return result;
        } else if (!t$5(previousState)) {
          var result = caseReducer(previousState, action);
          if (typeof result === "undefined") {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return createNextState2(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer2.getInitialState = getInitialState;
  return reducer2;
}
function getType2(slice2, actionKey) {
  return slice2 + "/" + actionKey;
}
function createSlice(options) {
  var name2 = options.name;
  if (!name2) {
    throw new Error("`name` is a required option for createSlice");
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : createNextState2(options.initialState, function() {
  });
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name2, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, finalCaseReducers, actionMatchers, defaultCaseReducer);
  }
  var _reducer;
  return {
    name: name2,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id2 = "";
  var i2 = size;
  while (i2--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = function() {
  function RejectWithValue2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return RejectWithValue2;
}();
var FulfillWithMeta = function() {
  function FulfillWithMeta2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return FulfillWithMeta2;
}();
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
    return {
      payload,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "fulfilled"
      })
    };
  });
  var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
    return {
      payload: void 0,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "pending"
      })
    };
  });
  var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
    return {
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      })
    };
  });
  var AC = typeof AbortController !== "undefined" ? AbortController : function() {
    function class_1() {
      this.signal = {
        aborted: false,
        addEventListener: function() {
        },
        dispatchEvent: function() {
          return false;
        },
        onabort: function() {
        },
        removeEventListener: function() {
        }
      };
    }
    class_1.prototype.abort = function() {
    };
    return class_1;
  }();
  function actionCreator(arg) {
    return function(dispatch, getState, extra) {
      var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function(_2, reject) {
        return abortController.signal.addEventListener("abort", function() {
          return reject({ name: "AbortError", message: abortReason || "Aborted" });
        });
      });
      var started = false;
      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }
      var promise = function() {
        return __async(this, null, function() {
          var _a, _b, finalAction, conditionResult, err_1, skipDispatch;
          return __generator$1(this, function(_c) {
            switch (_c.label) {
              case 0:
                _c.trys.push([0, 4, , 5]);
                conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                if (!isThenable(conditionResult))
                  return [3, 2];
                return [4, conditionResult];
              case 1:
                conditionResult = _c.sent();
                _c.label = 2;
              case 2:
                if (conditionResult === false) {
                  throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                }
                started = true;
                dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                return [4, Promise.race([
                  abortedPromise,
                  Promise.resolve(payloadCreator(arg, {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    signal: abortController.signal,
                    rejectWithValue: function(value, meta) {
                      return new RejectWithValue(value, meta);
                    },
                    fulfillWithValue: function(value, meta) {
                      return new FulfillWithMeta(value, meta);
                    }
                  })).then(function(result) {
                    if (result instanceof RejectWithValue) {
                      throw result;
                    }
                    if (result instanceof FulfillWithMeta) {
                      return fulfilled(result.payload, requestId, arg, result.meta);
                    }
                    return fulfilled(result, requestId, arg);
                  })
                ])];
              case 3:
                finalAction = _c.sent();
                return [3, 5];
              case 4:
                err_1 = _c.sent();
                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                return [3, 5];
              case 5:
                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                if (!skipDispatch) {
                  dispatch(finalAction);
                }
                return [2, finalAction];
            }
          });
        });
      }();
      return Object.assign(promise, {
        abort,
        requestId,
        arg,
        unwrap: function() {
          return promise.then(unwrapResult);
        }
      });
    };
  }
  return Object.assign(actionCreator, {
    pending,
    rejected,
    fulfilled,
    typePrefix
  });
}
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
N$2();
const initialState$5 = {
  gameGui: {
    hoverPixel: {
      x: 0,
      y: 0
    },
    viewScale: 1,
    viewCenter: {
      x: 0,
      y: 0
    },
    waitDate: new Date()
  },
  canvas: {
    palette: [],
    reservedColorCount: 0,
    id: 0,
    canvasSize: 1,
    selectedColor: 0,
    maxTimeoutMs: 100,
    timeoutOnBaseMs: 100,
    timeoutOnPlacedMs: 100,
    latestPixelReturnCooldownMs: 0
  }
};
const gameSlice = createSlice({
  initialState: initialState$5,
  name: "game",
  reducers: {
    setHoverPixel: (state, action) => {
      state.gameGui.hoverPixel = action.payload;
    },
    setViewScale: (state, action) => {
      state.gameGui.viewScale = action.payload;
    },
    setViewCenter: (state, action) => {
      state.gameGui.viewCenter = action.payload;
    },
    setPalette: (state, action) => {
      state.canvas.palette = action.payload;
    },
    setReservedColorCount: (state, action) => {
      state.canvas.reservedColorCount = action.payload;
    },
    setCanvasId: (state, action) => {
      state.canvas.id = action.payload;
    },
    setCanvasSize: (state, action) => {
      state.canvas.canvasSize = action.payload;
    },
    setSelectedColor: (state, action) => {
      state.canvas.selectedColor = action.payload;
    },
    setWaitDate: (state, action) => {
      state.gameGui.waitDate = action.payload;
    },
    setMaxTimeoutMs: (state, action) => {
      state.canvas.maxTimeoutMs = action.payload;
    },
    setTimeoutOnBaseMs: (state, action) => {
      state.canvas.timeoutOnBaseMs = action.payload;
    },
    setTimeoutOnPlacedMs: (state, action) => {
      state.canvas.timeoutOnPlacedMs = action.payload;
    },
    setLatestPixelReturnCooldown: (state, action) => {
      state.canvas.latestPixelReturnCooldownMs = action.payload;
    }
  }
});
createSelector((state) => state.game.canvas.selectedColor, (currentSelectedColor) => currentSelectedColor);
const selectHoverPixel = createSelector((state) => state.game.gameGui.hoverPixel, (hoverPixel) => hoverPixel);
const selectCanvasReservedColorCount = createSelector((state) => state.game.canvas.reservedColorCount, (reservedColorCount) => reservedColorCount);
const selectCanvasPalette = createSelector((state) => state.game.canvas.palette, (palette2) => palette2);
const selectCanvasId = createSelector((state) => state.game.canvas.id, (id2) => id2);
const selectCanvasMaxTimeoutMs = createSelector((state) => state.game.canvas.maxTimeoutMs, (maxTimeoutMs) => maxTimeoutMs);
const selectCanvasTimeoutOnBaseMs = createSelector((state) => state.game.canvas.timeoutOnBaseMs, (timeoutOnBaseMs) => timeoutOnBaseMs);
const selectCanvasTimeoutOnPlacedMs = createSelector((state) => state.game.canvas.timeoutOnPlacedMs, (timeoutOnPlacedMs) => timeoutOnPlacedMs);
const selectCanvasLatestPixelReturnCooldownMs = createSelector((state) => state.game.canvas.latestPixelReturnCooldownMs, (latestPixelReturnCooldownMs) => latestPixelReturnCooldownMs);
const selectCanvasUserPalette = createSelector(selectCanvasReservedColorCount, selectCanvasPalette, (reservedColorCount, palette2) => {
  return palette2.slice(reservedColorCount);
});
const selectGameViewCenter = createSelector((state) => state.game.gameGui.viewCenter, (viewCenter) => viewCenter);
const selectGameViewScale = createSelector((state) => state.game.gameGui.viewScale, (viewScale) => viewScale);
const selectWaitDate = createSelector((state) => state.game.gameGui.waitDate, (waitDate) => waitDate);
const selectCanvasSize = createSelector((state) => state.game.canvas.canvasSize, (canvasSize) => canvasSize);
const colorConverter = {
  getClosestColorFromPalette(gamePalette, reservedOffset, r2, g2, b2) {
    const idx = this.convertActualColorFromPalette(gamePalette, reservedOffset, r2, g2, b2);
    return this.getActualColorFromPalette(gamePalette, idx);
  },
  convertActualColorFromPalette(gamePalette, reservedOffset, r2, g2, b2) {
    var _a;
    const resultColorIdx = (_a = gamePalette.map((color2, i2) => {
      if (i2 < reservedOffset)
        return void 0;
      const difference = Math.sqrt((r2 - color2[0]) ** 2 + (g2 - color2[1]) ** 2 + (b2 - color2[2]) ** 2);
      return {
        difference,
        color: color2,
        index: i2
      };
    }).filter((a2) => !!a2).map((a2) => a2).sort((aa2, bb2) => aa2.difference - bb2.difference)[0]) == null ? void 0 : _a.index;
    if (resultColorIdx === void 0)
      throw new Error(`Color not found ${r2}, ${g2}, ${b2} from ${JSON.stringify(gamePalette)}`);
    return resultColorIdx;
  },
  getActualColorFromPalette(gamePalette, color2) {
    const colorData = gamePalette[color2];
    if (!colorData)
      return null;
    return [colorData[0], colorData[1], colorData[2]];
  },
  areColorsEqual(gamePalette, c1, c2) {
    if (c1 === c2) {
      return true;
    }
    const color1 = gamePalette[c1];
    const color2 = gamePalette[c2];
    if (!color1 || !color2)
      return c1 === c2;
    let areEqual = true;
    areEqual = areEqual && color1[0] === color2[0];
    areEqual = areEqual && color1[1] === color2[1];
    areEqual = areEqual && color1[2] === color2[2];
    return areEqual;
  },
  parseColor(colorStr) {
    const r2 = parseInt(colorStr.substr(1, 2), 16);
    const g2 = parseInt(colorStr.substr(3, 2), 16);
    const b2 = parseInt(colorStr.substr(5, 2), 16);
    return [r2, g2, b2];
  }
};
const window$1 = typeof globalThis.window !== "undefined" ? globalThis.window : void 0;
class Logger {
  isLogLevelEnabled(level) {
    if (typeof window$1 === "undefined")
      return true;
    if (typeof window$1.logLevel === "number") {
      return window$1.logLevel >= level;
    }
    window$1.logLevel = 0;
    return level <= 0;
  }
  log(a2, ...args) {
    if (this.isLogLevelEnabled(2)) {
      console.log(a2, ...args);
    }
  }
  logWarn(a2, ...args) {
    if (this.isLogLevelEnabled(1)) {
      console.warn(a2, ...args);
    }
  }
  logError(a2, ...args) {
    if (this.isLogLevelEnabled(0)) {
      console.error(a2, ...args);
    }
  }
}
var logger = new Logger();
const worker = {
  applyModificationsToImageData: async () => {
    throw new Error("");
  }
};
const pictureConverterApi = worker;
async function tryReadingImageData(url, abortSignal) {
  try {
    return await loadImageDrawOnCanvasGetData(url, abortSignal);
  } catch (error) {
    logger.logError(`Error loading image: url: ${url} ${error}`);
    return void 0;
  }
}
async function loadImageDrawOnCanvasGetData(url, abortSignal) {
  const img = new Image();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx)
    throw new Error("Can't get context");
  const clearCallbacks = () => {
    img.onload = null;
    img.onerror = null;
    img.src = "";
    abortSignal.onabort = null;
  };
  const imageData = await new Promise((resolve, reject) => {
    img.onerror = () => {
      reject(new Error("Image load error"));
      clearCallbacks();
    };
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      try {
        resolve(ctx.getImageData(0, 0, img.width, img.height));
      } catch (error) {
        if (!window.location.protocol.startsWith("http"))
          reject(error);
        fetch(url, {
          signal: abortSignal
        }).then((response) => response.blob()).then((blob) => new File([blob], "image.png", {
          type: "image/png"
        })).then((file) => loadImageDrawOnCanvasGetData(URL.createObjectURL(file), abortSignal).finally(() => URL.revokeObjectURL(url))).then(resolve);
      }
    };
    abortSignal.onabort = () => {
      reject(new Error("Aborted"));
      clearCallbacks();
    };
    img.src = url;
  });
  clearCallbacks();
  return imageData;
}
function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
const setInputImageAction = createAsyncThunk("imageProcessing/setInputImage", async (input, {
  dispatch,
  getState
}) => {
  await dispatch(clearInputImageAction());
  const file = typeof input !== "string" ? input : void 0;
  const url = typeof input === "string" ? input : void 0;
  const fileId = typeof input === "number" ? input : void 0;
  delay(0).then(() => dispatch(startNewImageReadingProcess()));
  return {
    file,
    url,
    fileId
  };
});
const clearInputImageAction = createAsyncThunk("imageProcessing/clearInputImage", async (_2, {
  dispatch,
  getState
}) => {
  dispatch(clearOutputImageAction());
});
const clearOutputImageAction = createAsyncThunk("imageProcessing/clearOutputImage", async (_2, {
  getState
}) => {
  var _a;
  (_a = getState().overlay.overlayImage.outputImage.abortController) == null ? void 0 : _a.abort();
});
const startNewImageReadingProcess = createAsyncThunk("imageProcessing/startNewImageReadingProcess", async (_2, {
  dispatch,
  getState
}) => {
  const url = selectInputUrl(getState());
  const file = selectInputFile(getState());
  const abortController = new AbortController();
  if (url)
    return tryReadingImageData(url, abortController.signal);
  if (file != null) {
    const fileUrl = URL.createObjectURL(file);
    delay(0).then(() => URL.revokeObjectURL(fileUrl));
    return tryReadingImageData(fileUrl, abortController.signal);
  }
  return void 0;
});
const startProcessingOutputImage = createAsyncThunk("imageProcessing/startProcessingOutputImage", async (_2, {
  getState
}) => {
  const palette2 = selectCanvasUserPalette(getState());
  const modifierShouldConvertColors = selectModifierShouldConvertColors(getState());
  const modifierImageBrightness = selectModifierImageBrightness(getState());
  const modifierSmolPixels = selectModifierSmolPixels(getState());
  const inputImageData = selectInputImageData(getState());
  if (inputImageData == null)
    throw new Error("Can't process output image without input image data");
  const abortController = new AbortController();
  const outImageData = await new Promise((resolve, reject) => {
    abortController.signal.onabort = () => reject(new Error("aborted"));
    pictureConverterApi.applyModificationsToImageData(palette2, inputImageData, modifierShouldConvertColors, modifierImageBrightness, modifierSmolPixels).then((imageData) => {
      resolve(imageData);
    }).catch((error) => {
      reject(error);
    });
  });
  return {
    outImageData,
    abortController
  };
});
const loadSavedConfigurations = createAsyncThunk("imageProcessing/loadSavedConfigurations", async (_2, {
  dispatch,
  getState
}) => {
  return JSON.parse(localStorage.getItem("OverlaySavedConfigurationsv2") || "[]");
});
const saveCurrentConfigurationsToLocalStorage = createAsyncThunk("imageProcessing/saveCurrentConfigurationsToLocalStorage", async (_2, {
  getState
}) => {
  const savedConfigurations = selectSavedConfigurations(getState());
  localStorage.setItem("OverlaySavedConfigurationsv2", JSON.stringify(savedConfigurations));
});
const saveConfiguration = createAsyncThunk("imageProcessing/saveConfiguration", async (configuration, {
  dispatch
}) => {
  delay(0).then(() => dispatch(saveCurrentConfigurationsToLocalStorage()));
  return configuration;
});
const initialState$4 = {
  savedConfigs: [],
  overlayEnabled: true,
  overlayImage: {
    inputImage: {
      loadedImage: {
        status: "none"
      }
    },
    outputImage: {
      isProcessing: false
    }
  },
  placementConfiguration: {
    yOffset: 0,
    xOffset: 0,
    transparency: 92,
    isFollowMouseActive: false,
    autoSelectColor: false
  },
  modifications: {
    imageBrightness: 0,
    shouldConvertColors: false,
    smolPixels: false
  },
  isBotModalVisible: false,
  browserWindow: {
    innerWidth: 100,
    innerHeight: 100
  }
};
const overlaySlice = createSlice({
  initialState: initialState$4,
  name: "overlay",
  reducers: {
    setPlacementXOffset: (state, action) => {
      state.placementConfiguration.xOffset = action.payload;
    },
    setPlacementYOffset: (state, action) => {
      state.placementConfiguration.yOffset = action.payload;
    },
    setPlacementTransparency: (state, action) => {
      state.placementConfiguration.transparency = action.payload;
    },
    togglePlacementFollowMouse: (state) => {
      state.placementConfiguration.isFollowMouseActive = !state.placementConfiguration.isFollowMouseActive;
    },
    setPlacementIsFollowMouseActive: (state, action) => {
      state.placementConfiguration.isFollowMouseActive = action.payload;
    },
    setPlacementAutoSelectColor: (state, action) => {
      state.placementConfiguration.autoSelectColor = action.payload;
    },
    setModifierImageBrightness: (state, action) => {
      state.modifications.imageBrightness = action.payload;
    },
    setModifierShouldConvertColors: (state, action) => {
      state.modifications.shouldConvertColors = action.payload;
    },
    setModifierSmolPixels: (state, action) => {
      state.modifications.smolPixels = action.payload;
    },
    setOverlayEnabled: (state, action) => {
      state.overlayEnabled = action.payload;
    },
    setWindowSize: (state, action) => {
      state.browserWindow = action.payload;
    },
    removeSavedConfig: (state, action) => {
      const savedConfigurations = state.savedConfigs;
      const existingConfiguration = savedConfigurations.find((c2) => c2.imageUrl === action.payload);
      if (existingConfiguration) {
        savedConfigurations.splice(savedConfigurations.indexOf(existingConfiguration), 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setInputImageAction.fulfilled, (state, action) => {
      state.overlayImage.inputImage.fileId = action.payload.fileId;
      state.overlayImage.inputImage.url = action.payload.url;
      state.overlayImage.inputImage.file = action.payload.file;
    });
    builder.addCase(startNewImageReadingProcess.pending, (state) => {
      state.overlayImage.inputImage.loadedImage.status = "loading";
      state.overlayImage.inputImage.loadedImage.error = void 0;
    });
    builder.addCase(startNewImageReadingProcess.fulfilled, (state, action) => {
      state.overlayImage.inputImage.loadedImage.status = "loaded";
      state.overlayImage.inputImage.loadedImage.imageData = action.payload;
    });
    builder.addCase(startNewImageReadingProcess.rejected, (state, action) => {
      state.overlayImage.inputImage.loadedImage.status = "error";
      state.overlayImage.inputImage.loadedImage.error = action.error.message;
    });
    builder.addCase(clearInputImageAction.fulfilled, (state) => {
      state.overlayImage.inputImage.file = void 0;
      state.overlayImage.inputImage.url = void 0;
      state.overlayImage.inputImage.fileId = void 0;
      state.overlayImage.inputImage.loadedImage.status = "none";
      state.overlayImage.inputImage.loadedImage.error = void 0;
      state.overlayImage.inputImage.loadedImage.imageData = void 0;
    });
    builder.addCase(startProcessingOutputImage.pending, (state) => {
      state.overlayImage.outputImage.isProcessing = true;
    });
    builder.addCase(startProcessingOutputImage.fulfilled, (state, action) => {
      state.overlayImage.outputImage.isProcessing = false;
      state.overlayImage.outputImage.imageData = action.payload.outImageData;
      state.overlayImage.outputImage.abortController = action.payload.abortController;
    });
    builder.addCase(clearOutputImageAction.fulfilled, (state) => {
      state.overlayImage.outputImage.imageData = void 0;
      state.overlayImage.outputImage.abortController = void 0;
      state.overlayImage.outputImage.isProcessing = false;
    });
    builder.addCase(loadSavedConfigurations.fulfilled, (state, action) => {
      state.savedConfigs = action.payload;
    });
    builder.addCase(saveConfiguration.fulfilled, (state, action) => {
      const savedConfigurations = state.savedConfigs;
      const existingConfiguration = savedConfigurations.find((c2) => c2.imageUrl === action.payload.imageUrl);
      if (existingConfiguration != null) {
        existingConfiguration.modifiers = action.payload.modifiers;
        existingConfiguration.placementConfiguration = action.payload.placementConfiguration;
      } else {
        savedConfigurations.push(action.payload);
      }
    });
  }
});
const selectInputUrl = createSelector((state) => state.overlay.overlayImage.inputImage.url, (url) => url);
const selectInputImageData = createSelector((state) => state.overlay.overlayImage.inputImage.loadedImage.imageData, (imageData) => imageData);
const selectIsModificationsAvailable = createSelector(selectInputImageData, (inputImageData) => {
  return !!inputImageData;
});
const selectInputFile = createSelector((state) => state.overlay.overlayImage.inputImage.file, (file) => file);
const selectFileName = createSelector(selectInputFile, selectInputUrl, (file, url) => {
  var _a;
  const fileName = (_a = file == null ? void 0 : file.name) != null ? _a : url == null ? void 0 : url.split("/").pop();
  if (fileName) {
    return {
      fileName,
      fileExtension: fileName.split(".").pop(),
      fileNameWithoutExtension: fileName.split(".").slice(0, -1).join(".")
    };
  }
  return void 0;
});
const selectShouldShowPlacementConfiguration = createSelector(selectInputFile, selectInputUrl, (file, url) => file || url);
const selectPlacementXOffset = createSelector((state) => state.overlay.placementConfiguration.xOffset, (xOffset) => xOffset);
const selectPlacementYOffset = createSelector((state) => state.overlay.placementConfiguration.yOffset, (yOffset) => yOffset);
const selectPlacementTransparency = createSelector((state) => state.overlay.placementConfiguration.transparency, (transparency) => transparency);
const selectPlacementIsFollowMouseActive = createSelector((state) => state.overlay.placementConfiguration.isFollowMouseActive, (isFollowMouseActive) => isFollowMouseActive);
const selectPlacementAutoSelectColor = createSelector((state) => state.overlay.placementConfiguration.autoSelectColor, (autoSelectColor) => autoSelectColor);
const selectModifierImageBrightness = createSelector((state) => state.overlay.modifications.imageBrightness, (imageBrightness) => imageBrightness);
const selectModifierShouldConvertColors = createSelector((state) => state.overlay.modifications.shouldConvertColors, (shouldConvertColors) => shouldConvertColors);
const selectModifierSmolPixels = createSelector((state) => state.overlay.modifications.smolPixels, (smolPixels) => smolPixels);
const selectIsOverlayEnabled = createSelector((state) => state.overlay.overlayEnabled, (overlayEnabled) => overlayEnabled);
const selectInputImageLoadingStatus = createSelector((state) => state.overlay.overlayImage.inputImage.loadedImage.status, (status) => status);
const selectIsOutputImageProcessing = createSelector((state) => state.overlay.overlayImage.outputImage.isProcessing, (isProcessing) => isProcessing);
const selectOutputImageData = createSelector((state) => state.overlay.overlayImage.outputImage.isProcessing, (state) => state.overlay.overlayImage.outputImage.imageData, (state) => state.overlay.overlayImage.outputImage.abortController, (isProcessing, imageData, abortController) => {
  if (!isProcessing && imageData) {
    return imageData;
  }
  return void 0;
});
const selectRenderImageData = createSelector(selectOutputImageData, selectInputImageData, (outputImageData, inputImageData) => {
  return outputImageData || inputImageData;
});
const selectShouldShowImageFromData = createSelector(selectRenderImageData, (imageData) => !!imageData);
const selectInputFileId = createSelector((state) => state.overlay.overlayImage.inputImage.fileId, (fileId) => fileId);
const selectShouldShowImageFromUrl = createSelector(selectShouldShowImageFromData, selectInputFile, selectInputFileId, selectInputUrl, (shouldShowImageFromData, file, fileId, url) => {
  if (shouldShowImageFromData)
    return false;
  if (file || fileId || url)
    return true;
  return false;
});
createSelector(selectInputUrl, selectOutputImageData, (url, imageData) => {
  return imageData || url;
});
const selectWindowSize = createSelector((state) => state.overlay.browserWindow.innerHeight, (state) => state.overlay.browserWindow.innerWidth, (innerHeight, innerWidth) => {
  return {
    innerHeight,
    innerWidth
  };
});
const selectOverlayOffsetCoordsOnScreen = createSelector(selectWindowSize, selectGameViewCenter, selectPlacementXOffset, selectPlacementYOffset, selectGameViewScale, (windowSize, gameViewCenter, xOffset, yOffset, viewScale) => {
  const leftOffset = windowSize.innerWidth / 2 - (gameViewCenter.x - xOffset) * viewScale;
  const topOffset = windowSize.innerHeight / 2 - (gameViewCenter.y - yOffset) * viewScale;
  return {
    leftOffset,
    topOffset
  };
});
const selectCurrentHoverPixelOnOutputImageColorIndexInPalette = createSelector(selectPlacementAutoSelectColor, selectModifierSmolPixels, selectHoverPixel, selectPlacementXOffset, selectPlacementYOffset, selectRenderImageData, selectCanvasPalette, selectCanvasReservedColorCount, (autoSelectColor, modifierSmolPixels, hoverPixel, placementXOffset, placementYOffset, renderImageData, palette2, reservedColorCount) => {
  if (!autoSelectColor)
    return void 0;
  if (!renderImageData)
    return void 0;
  const smolPixelsCanvasSizeModifier = modifierSmolPixels ? 3 : 1;
  const smolPixelsCanvasExtraOffsetToMiddle = Math.floor(smolPixelsCanvasSizeModifier / 2);
  const offsetXInImage = (hoverPixel.x - placementXOffset) * smolPixelsCanvasSizeModifier + smolPixelsCanvasExtraOffsetToMiddle;
  const offsetYInImage = (hoverPixel.y - placementYOffset) * smolPixelsCanvasSizeModifier + smolPixelsCanvasExtraOffsetToMiddle;
  if (offsetXInImage < 0 || offsetXInImage >= renderImageData.width || offsetYInImage < 0 || offsetYInImage >= renderImageData.height)
    return void 0;
  const idx = renderImageData.width * offsetYInImage + offsetXInImage << 2;
  const r2 = renderImageData.data[idx + 0];
  const g2 = renderImageData.data[idx + 1];
  const b2 = renderImageData.data[idx + 2];
  const a2 = renderImageData.data[idx + 3];
  if (r2 == null || g2 == null || b2 == null || a2 == null)
    return void 0;
  if (a2 < 30)
    return void 0;
  const colorIndex = colorConverter.convertActualColorFromPalette(palette2, reservedColorCount, r2, g2, b2);
  return colorIndex;
});
const selectSavedConfigurations = createSelector((state) => state.overlay.savedConfigs, (savedConfigurations) => savedConfigurations);
const selectCurrentStateAsConfiguration = createSelector(selectInputUrl, selectPlacementXOffset, selectPlacementYOffset, selectPlacementTransparency, selectPlacementAutoSelectColor, selectModifierImageBrightness, selectModifierShouldConvertColors, (inputUrl, xOffset, yOffset, transparency, autoSelectColor, imageBrightness, shouldConvertColors) => {
  if (!inputUrl)
    return void 0;
  return {
    imageUrl: inputUrl,
    modifiers: {
      autoSelectColor,
      imageBrightness,
      shouldConvertColors
    },
    placementConfiguration: {
      xOffset,
      yOffset,
      transparency
    }
  };
});
const initialState$3 = {
  chunks: []
};
const chunkDataSlice = createSlice({
  initialState: initialState$3,
  name: "chunkData",
  reducers: {
    addChunk: (state, action) => {
      state.chunks.push(action.payload);
    },
    setPixel: (state, action) => {
      const {
        chunkX,
        chunkY,
        pixels
      } = action.payload;
      const chunk = state.chunks.find((x2) => x2.chunkX === chunkX && x2.chunkY === chunkY);
      if (!chunk || chunk.fetching)
        return;
      pixels.forEach((p2) => {
        chunk.chunkData.set([p2.color], p2.offsetInChunk);
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChunkDataAction.pending, (state, action) => {
      const foundChunk = state.chunks.some((x2) => x2.chunkX === action.meta.arg.chunkX && x2.chunkY === action.meta.arg.chunkY);
      if (!foundChunk) {
        state.chunks.push({
          chunkX: action.meta.arg.chunkX,
          chunkY: action.meta.arg.chunkY,
          fetching: true
        });
        return;
      }
      state.chunks = state.chunks.map((c2) => {
        if (c2.chunkX === action.meta.arg.chunkX && c2.chunkY === action.meta.arg.chunkY) {
          return {
            chunkX: action.meta.arg.chunkX,
            chunkY: action.meta.arg.chunkY,
            fetching: true
          };
        }
        return c2;
      });
    });
    builder.addCase(fetchChunkDataAction.fulfilled, (state, action) => {
      const foundChunk = state.chunks.some((x2) => x2.chunkX === action.meta.arg.chunkX && x2.chunkY === action.meta.arg.chunkY);
      if (!foundChunk) {
        state.chunks.push({
          chunkX: action.meta.arg.chunkX,
          chunkY: action.meta.arg.chunkY,
          chunkData: action.payload,
          fetching: false
        });
        return;
      }
      state.chunks = state.chunks.map((chunk) => {
        if (chunk.chunkX === action.meta.arg.chunkX && chunk.chunkY === action.meta.arg.chunkY) {
          return {
            chunkX: action.meta.arg.chunkX,
            chunkY: action.meta.arg.chunkY,
            fetching: false,
            chunkData: action.payload
          };
        }
        return chunk;
      });
    });
    builder.addCase(fetchChunkDataAction.rejected, (state, action) => {
      state.chunks = state.chunks.filter((x2) => x2.chunkX !== action.meta.arg.chunkX && x2.chunkY !== action.meta.arg.chunkY);
    });
  }
});
const fetchChunkDataAction = createAsyncThunk("chunkData/fetchChunkData", async (chunkCoords, {
  getState
}) => {
  const canvasId = selectCanvasId(getState());
  const chunkData = await fetch(`/chunks/${canvasId}/${chunkCoords.chunkX}/${chunkCoords.chunkY}.bmp`).then((x2) => x2.arrayBuffer()).then((x2) => new Uint8Array(x2));
  return chunkData;
});
function isStringOrNumber(value) {
  return typeof value === "string" || typeof value === "number";
}
var FlatObjectCache = /* @__PURE__ */ function() {
  function FlatObjectCache2() {
    this._cache = {};
  }
  var _proto = FlatObjectCache2.prototype;
  _proto.set = function set(key, selectorFn) {
    this._cache[key] = selectorFn;
  };
  _proto.get = function get(key) {
    return this._cache[key];
  };
  _proto.remove = function remove(key) {
    delete this._cache[key];
  };
  _proto.clear = function clear() {
    this._cache = {};
  };
  _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
    return isStringOrNumber(cacheKey);
  };
  return FlatObjectCache2;
}();
var defaultCacheCreator = FlatObjectCache;
var defaultCacheKeyValidator = function defaultCacheKeyValidator2() {
  return true;
};
function createCachedSelector() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return function(polymorphicOptions, legacyOptions) {
    if (legacyOptions) {
      throw new Error('[re-reselect] "options" as second argument is not supported anymore. Please provide an option object as single argument.');
    }
    var options = typeof polymorphicOptions === "function" ? {
      keySelector: polymorphicOptions
    } : Object.assign({}, polymorphicOptions);
    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : [].concat(funcs);
    var resultFuncWithRecomputations = function resultFuncWithRecomputations2() {
      recomputations++;
      return resultFunc.apply(void 0, arguments);
    };
    funcs.push(resultFuncWithRecomputations);
    var cache2 = options.cacheObject || new defaultCacheCreator();
    var selectorCreator = options.selectorCreator || createSelector;
    var isValidCacheKey = cache2.isValidCacheKey || defaultCacheKeyValidator;
    if (options.keySelectorCreator) {
      options.keySelector = options.keySelectorCreator({
        keySelector: options.keySelector,
        inputSelectors: dependencies,
        resultFunc
      });
    }
    var selector = function selector2() {
      var cacheKey = options.keySelector.apply(options, arguments);
      if (isValidCacheKey(cacheKey)) {
        var cacheResponse = cache2.get(cacheKey);
        if (cacheResponse === void 0) {
          cacheResponse = selectorCreator.apply(void 0, funcs);
          cache2.set(cacheKey, cacheResponse);
        }
        return cacheResponse.apply(void 0, arguments);
      }
      console.warn('[re-reselect] Invalid cache key "' + cacheKey + '" has been returned by keySelector function.');
      return void 0;
    };
    selector.getMatchingSelector = function() {
      var cacheKey = options.keySelector.apply(options, arguments);
      return cache2.get(cacheKey);
    };
    selector.removeMatchingSelector = function() {
      var cacheKey = options.keySelector.apply(options, arguments);
      cache2.remove(cacheKey);
    };
    selector.clearCache = function() {
      cache2.clear();
    };
    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.cache = cache2;
    selector.recomputations = function() {
      return recomputations;
    };
    selector.resetRecomputations = function() {
      return recomputations = 0;
    };
    selector.keySelector = options.keySelector;
    return selector;
  };
}
function gameCoordsToScreen(gameCoords, windowSize, viewCenter, viewScale) {
  const gameCoordsOffsetX = gameCoords.x - viewCenter.x;
  const gameCoordsOffsetY = gameCoords.y - viewCenter.y;
  const screenCoordsX = windowSize.width / 2 + gameCoordsOffsetX * viewScale;
  const screenCoordsY = windowSize.height / 2 + gameCoordsOffsetY * viewScale;
  return {
    clientX: Math.floor(screenCoordsX),
    clientY: Math.floor(screenCoordsY)
  };
}
const CHUNK_SIZE = 256;
function gameCoordsToChunk(gameCoords, canvasSize) {
  const chunkX = Math.floor((canvasSize / 2 + gameCoords.x) / CHUNK_SIZE);
  const chunkY = Math.floor((canvasSize / 2 + gameCoords.y) / CHUNK_SIZE);
  const offsetInChunk = (canvasSize / 2 + gameCoords.x) % CHUNK_SIZE + (canvasSize / 2 + gameCoords.y) % CHUNK_SIZE * CHUNK_SIZE;
  return {
    chunkX,
    chunkY,
    offsetInChunk
  };
}
function chunkToGameCoords(chunkX, chunkY, offsetInChunk, canvasSize) {
  const gameCoordsX = chunkX * CHUNK_SIZE + offsetInChunk % CHUNK_SIZE - canvasSize / 2;
  const gameCoordsY = chunkY * CHUNK_SIZE + Math.floor(offsetInChunk / CHUNK_SIZE) - canvasSize / 2;
  return {
    x: gameCoordsX,
    y: gameCoordsY
  };
}
const initialState$2 = {
  pixelsToPlaceQueue: {},
  pixelPlaceQueueEnabled: false
};
const pixelPlacementSlice = createSlice({
  initialState: initialState$2,
  name: "pixelPlacement",
  reducers: {
    addPixelsToPlaceQueue: (state, action) => {
      action.payload.pixels.forEach(({
        coord,
        color: color2
      }) => {
        const pixelId = coord.x + action.payload.canvasSize / 2 + (coord.y + action.payload.canvasSize / 2) * action.payload.canvasSize;
        state.pixelsToPlaceQueue[pixelId] = {
          coord,
          color: color2
        };
      });
    },
    removePixelsFromPlaceQueue: (state, action) => {
      action.payload.pixels.forEach(({
        coord
      }) => {
        const pixelId = coord.x + action.payload.canvasSize / 2 + (coord.y + action.payload.canvasSize / 2) * action.payload.canvasSize;
        delete state.pixelsToPlaceQueue[pixelId];
      });
    },
    setPixelPlaceQueueEnabled: (state, action) => {
      state.pixelPlaceQueueEnabled = action.payload;
    }
  }
});
const selectPixelPlaceQueueEnabled = createSelector((state) => state.pixelPlacement.pixelPlaceQueueEnabled, (pixelPlaceQueueEnabled) => pixelPlaceQueueEnabled);
const selectPixelsToPlaceQueue = createSelector((state) => state.pixelPlacement.pixelsToPlaceQueue, (pixelsToPlaceQueue) => pixelsToPlaceQueue);
const selectPixelsToPlaceIds = createSelector((state) => state.pixelPlacement.pixelsToPlaceQueue, (pixelsToPlaceQueue) => Object.keys(pixelsToPlaceQueue).map((key) => parseInt(key, 10)));
const selectPixelsToPlaceQueueFirstPixel = createSelector(selectPixelsToPlaceIds, selectPixelsToPlaceQueue, (pixelsToPlaceIds, pixelsToPlaceQueue) => {
  const first = pixelsToPlaceIds[0];
  if (!first)
    return void 0;
  return pixelsToPlaceQueue[first];
});
const splitRenderCanvasSize$1 = 1024;
const selectRenderCanvasCoords = createCachedSelector(selectCanvasSize, (_2, renderCanvasId) => renderCanvasId, (canvasSize, renderCanvasId) => {
  const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize$1);
  const renderCanvasXCorner = Math.floor(renderCanvasId % splitCanvasesWidth) * splitRenderCanvasSize$1 - canvasSize / 2;
  const renderCanvasYCorner = Math.floor(renderCanvasId / splitCanvasesWidth) * splitRenderCanvasSize$1 - canvasSize / 2;
  return {
    renderCanvasXCorner,
    renderCanvasYCorner
  };
})((_2, renderCanvasId) => renderCanvasId);
const selectPixelIdsToPlaceByRenderCanvasId = createSelector(selectPixelsToPlaceIds, selectCanvasSize, (pixelsToPlaceIds, canvasSize) => {
  const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize$1);
  const dict = pixelsToPlaceIds.reduce((acc, pixelId) => {
    const x2 = pixelId % canvasSize;
    const y2 = Math.floor(pixelId / canvasSize);
    const splitRenderCanvasX = Math.floor(x2 / splitRenderCanvasSize$1);
    const splitRenderCanvasY = Math.floor(y2 / splitRenderCanvasSize$1);
    const splitRenderCanvasId = splitRenderCanvasX + splitRenderCanvasY * splitCanvasesWidth;
    const foundAccumulator = acc[splitRenderCanvasId];
    if (!foundAccumulator) {
      acc[splitRenderCanvasId] = [pixelId];
      return acc;
    }
    foundAccumulator.push(pixelId);
    return acc;
  }, {});
  return dict;
});
const selectMainCanvasTopLeftScreenCoords = createSelector(selectCanvasSize, selectWindowSize, selectGameViewCenter, selectGameViewScale, (canvasSize, windowSize, gameViewCenter, gameViewScale) => {
  return gameCoordsToScreen({
    x: -canvasSize / 2,
    y: -canvasSize / 2
  }, {
    height: windowSize.innerHeight,
    width: windowSize.innerWidth
  }, gameViewCenter, gameViewScale);
});
const selectPixelsToPlaceRenderCanvasIds = createSelector(selectPixelIdsToPlaceByRenderCanvasId, (pixelIdsToPlaceByRenderCanvasId) => Object.keys(pixelIdsToPlaceByRenderCanvasId).map((key) => parseInt(key, 10)));
const selectPixelsToPlaceBySplitRenderCanvasId = createCachedSelector(selectPixelIdsToPlaceByRenderCanvasId, selectPixelsToPlaceQueue, selectCanvasSize, (_2, renderCanvasId) => renderCanvasId, (pixelIdsToPlaceByRenderCanvasId, pixelsToPlaceQueue, canvasSize, renderCanvasId) => {
  const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize$1);
  const splitRenderCanvasX = Math.floor(renderCanvasId % splitCanvasesWidth);
  const splitRenderCanvasY = Math.floor(renderCanvasId / splitCanvasesWidth);
  const splitRenderCanvasId = splitRenderCanvasX + splitRenderCanvasY * splitCanvasesWidth;
  const pixelIdsToPlace = pixelIdsToPlaceByRenderCanvasId[splitRenderCanvasId];
  if (!pixelIdsToPlace)
    return [];
  return pixelIdsToPlace.map((pixelId) => pixelsToPlaceQueue[pixelId]).filter((pixel) => !!pixel).map((pixel) => pixel);
})((_2, renderCanvasId) => renderCanvasId);
function configureAppStore() {
  return configureStore({
    reducer: {
      overlay: overlaySlice.reducer,
      game: gameSlice.reducer,
      chunkData: chunkDataSlice.reducer,
      pixelPlacement: pixelPlacementSlice.reducer
    },
    devTools: false
  });
}
const store = configureAppStore();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a2 = Object.defineProperty({}, "__esModule", {
    value: true
  });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$5 = Symbol.for("react.element"), n$6 = Symbol.for("react.portal"), p$7 = Symbol.for("react.fragment"), q$7 = Symbol.for("react.strict_mode"), r$4 = Symbol.for("react.profiler"), t$4 = Symbol.for("react.provider"), u$4 = Symbol.for("react.context"), v$4 = Symbol.for("react.forward_ref"), w$3 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$2 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$3(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$2 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$1;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$2.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$1;
}
var H$2 = G$2.prototype = new F$2();
H$2.constructor = G$2;
C$1(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
function M$1(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J$1.call(b2, d2) && !L.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      c2[d2] === void 0 && (c2[d2] = g2[d2]);
  return { $$typeof: l$5, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$1(a2, b2) {
  return { $$typeof: l$5, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l$5;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$1 = /\/+/g;
function Q$1(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function R$1(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$5:
          case n$6:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q$1(h2, 0) : d2, I$2(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a3) {
      return a3;
    })) : c2 != null && (O(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = d2 === "" ? "." : d2 + ":";
  if (I$2(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$1(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$3(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if (k2 === "object")
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a2, b2, e2) {
  if (a2 == null)
    return a2;
  var d2 = [], c2 = 0;
  R$1(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b3;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b2);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a2, b2, e2) {
  S$1(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$1(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$1(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$7;
react_production_min.Profiler = r$4;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$7;
react_production_min.Suspense = w$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$1({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K$1.current);
    b2.key !== void 0 && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$5, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$4, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$4, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a2) {
  var b2 = M$1.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$4, render: a2 };
};
react_production_min.isValidElement = O;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$2, _payload: { _status: -1, _result: a2 }, _init: T };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$2, type: a2, compare: b2 === void 0 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$1.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$1.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$1.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$1.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$1.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$1.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$1.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$1.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$1.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$1.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$1.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$1.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.0.0-fc46dba67-20220329";
{
  react.exports = react_production_min;
}
var React$1 = react.exports;
var React$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": React$1
}, [react.exports]));
function isStoreFromRedux(store2) {
  if (typeof store2 !== "object")
    return false;
  if (!store2.dispatch)
    return false;
  if (!store2.getState)
    return false;
  if (!store2.subscribe)
    return false;
  return true;
}
function getStoreFromReactInternalEl(el2) {
  var _a, _b, _c;
  if (el2.tag !== 0 || !el2.child)
    return void 0;
  if (el2.child.tag !== 10)
    return void 0;
  if (!el2.child.memoizedProps)
    return void 0;
  const childStore = (_b = (_a = el2.child.memoizedProps) == null ? void 0 : _a.value) == null ? void 0 : _b.store;
  if (!isStoreFromRedux(childStore))
    return void 0;
  const parentStore = (_c = el2.memoizedProps) == null ? void 0 : _c.store;
  if (!isStoreFromRedux(parentStore))
    return void 0;
  if (childStore !== parentStore)
    return void 0;
  return parentStore;
}
function findReactRootContainerEl() {
  return Array.from(document.getElementsByTagName("div")).filter((el2) => el2.id !== "PictureOverlay_RootNode").find((el2) => {
    var _a, _b;
    return !!((_b = (_a = el2._reactRootContainer) == null ? void 0 : _a._internalRoot) == null ? void 0 : _b.current);
  });
}
function findStoreInRoot(el2) {
  const root = el2._reactRootContainer._internalRoot.current;
  let checkedReactInternalElement = root;
  while (checkedReactInternalElement.child) {
    const store2 = getStoreFromReactInternalEl(checkedReactInternalElement);
    if (store2)
      return store2;
    checkedReactInternalElement = checkedReactInternalElement.child;
  }
  return void 0;
}
function findPageReduxStore() {
  const reactRootEl = findReactRootContainerEl();
  if (!reactRootEl)
    throw new Error("Couldn't find React root container");
  const store2 = findStoreInRoot(reactRootEl);
  if (!store2)
    throw new Error("Couldn't find Redux store");
  return store2;
}
const usePageReduxStoreSelector = (selector) => {
  const store2 = usePageReduxStore();
  const [selectedResult, setSelectedResult] = react.exports.useState();
  react.exports.useEffect(() => {
    if (!store2)
      return void 0;
    setSelectedResult(selector(store2.getState()));
    const unsubscribe = store2.subscribe(() => {
      setSelectedResult(selector(store2.getState()));
    });
    return () => unsubscribe();
  }, [store2, selector]);
  return selectedResult;
};
const usePageReduxStoreDispatch = () => {
  const store2 = usePageReduxStore();
  if (!store2)
    return void 0;
  return store2.dispatch;
};
function pageReduxStoreSelectColorAction(colorIndex) {
  return {
    type: "SELECT_COLOR",
    color: colorIndex
  };
}
function setViewCoordinates(view) {
  return {
    type: "SET_VIEW_COORDINATES",
    view
  };
}
function usePageReduxStore() {
  const [pageReduxStore, setPageReduxStore] = react.exports.useState();
  react.exports.useEffect(() => {
    setPageReduxStore(findPageReduxStore());
  }, [setPageReduxStore]);
  return pageReduxStore;
}
const selectPageStatePixelWaitDate = createSelector((state) => state.user.wait, (pixelWaitDate) => pixelWaitDate);
const selectPageStateCurrentSelectedColor = createSelector((state) => state.canvas.selectedColor, (currentSelectedColor) => currentSelectedColor);
const selectPageStateHoverPixel = createSelector((state) => {
  var _a;
  return (_a = state.gui.hover) == null ? void 0 : _a[0];
}, (state) => {
  var _a;
  return (_a = state.gui.hover) == null ? void 0 : _a[1];
}, (hoverPixelX, hoverPixelY) => {
  if (hoverPixelX == null || hoverPixelY == null)
    return void 0;
  return {
    x: hoverPixelX,
    y: hoverPixelY
  };
});
const selectPageStateViewScale = createSelector((state) => state.canvas.viewscale, (viewScale) => viewScale);
const selectPageStateCanvasViewCenter = createSelector((state) => state.canvas.view[0], (state) => state.canvas.view[1], (viewX, viewY) => {
  if (viewX == null || viewY == null)
    return void 0;
  return {
    x: viewX,
    y: viewY
  };
});
const selectPageStateRoundedCanvasViewCenter = createSelector(selectPageStateCanvasViewCenter, (view) => view ? {
  x: Math.round(view.x),
  y: Math.round(view.y)
} : void 0);
const selectPageStateCanvasPalette = createSelector((state) => state.canvas.palette.abgr, (paletteAbgr) => {
  return Array.from(new Uint32Array(paletteAbgr)).map((abgr) => {
    const b2 = (abgr & 16711680) >>> 16;
    const g2 = (abgr & 65280) >>> 8;
    const r2 = abgr & 255;
    return [r2, g2, b2];
  });
});
const selectPageStateCanvasReservedColors = createSelector((state) => state.canvas.clrIgnore, (reservedColors) => reservedColors);
const selectPageStateCanvasId = createSelector((state) => state.canvas.canvasId, (canvasId) => canvasId);
const selectPageStateCanvasSize = createSelector((state) => state.canvas.canvasSize, (size) => size);
const selectPageStateCanvasMaxTimeoutMs = createSelector((state) => {
  var _a;
  return (_a = state.canvas.canvases[state.canvas.canvasId]) == null ? void 0 : _a.cds;
}, (canvasMaxTimeout) => canvasMaxTimeout);
const selectPageStateCanvasTimeoutOnBaseMs = createSelector((state) => {
  var _a;
  return (_a = state.canvas.canvases[state.canvas.canvasId]) == null ? void 0 : _a.bcd;
}, (canvasTimeoutOnBase) => canvasTimeoutOnBase);
const selectPaseStateCanvasTimeoutOnPlacedMs = createSelector((state) => {
  var _a;
  return (_a = state.canvas.canvases[state.canvas.canvasId]) == null ? void 0 : _a.pcd;
}, (canvasTimeoutOnPlaced) => canvasTimeoutOnPlaced);
function executeAllHooks() {
  hookForAutoSelectColor();
  hookForHoverPixel();
}
function hookForAutoSelectColor() {
  const pageStore = findPageReduxStore();
  const pageDispatch = pageStore.dispatch;
  let lastColorIndex;
  store.subscribe(() => {
    const colorIndex = selectCurrentHoverPixelOnOutputImageColorIndexInPalette(store.getState());
    if (colorIndex !== void 0 && colorIndex !== lastColorIndex) {
      lastColorIndex = colorIndex;
      pageDispatch(pageReduxStoreSelectColorAction(colorIndex));
    }
  });
}
function hookForHoverPixel() {
  const pageStore = findPageReduxStore();
  let lastHoverPixel;
  pageStore.subscribe(() => {
    let hoverPixel = selectPageStateHoverPixel(pageStore.getState());
    if (hoverPixel) {
      if (hoverPixel !== lastHoverPixel) {
        lastHoverPixel = hoverPixel;
        store.dispatch(gameSlice.actions.setHoverPixel(hoverPixel));
      }
      return;
    }
    hoverPixel = selectPageStateRoundedCanvasViewCenter(pageStore.getState());
    if (hoverPixel) {
      if (hoverPixel !== lastHoverPixel) {
        lastHoverPixel = hoverPixel;
        store.dispatch(gameSlice.actions.setHoverPixel(hoverPixel));
      }
    }
  });
}
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k2(a2) {
    if (a2.length === 0)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = typeof setTimeout === "function" ? setTimeout : null, E2 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); b2 !== null; ) {
      if (b2.callback === null)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (h2(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        b2 !== null && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); v2 !== null && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if (typeof d2 === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m2 = h2(t2);
        m2 !== null && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (O2 !== null) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), h2(r2) === null && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p$6(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ca = /* @__PURE__ */ new Set(), da = {};
function ea(a2, b2) {
  fa(a2, b2);
  fa(a2 + "Capture", b2);
}
function fa(a2, b2) {
  da[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ca.add(b2[a2]);
}
var ha = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ia = Object.prototype.hasOwnProperty, ja = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, la = {};
function ma(a2) {
  if (ia.call(la, a2))
    return true;
  if (ia.call(ka, a2))
    return false;
  if (ja.test(a2))
    return la[a2] = true;
  ka[a2] = true;
  return false;
}
function na(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function oa(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || na(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function q$6(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new q$6(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new q$6(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new q$6(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var pa = /[\-:]([a-z])/g;
function qa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(pa, qa);
  z$2[b2] = new q$6(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(pa, qa);
  z$2[b2] = new q$6(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(pa, qa);
  z$2[b2] = new q$6(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new q$6("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new q$6(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ra(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (e2 !== null ? e2.type !== 0 : d2 || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    oa(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? ma(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var sa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ta = Symbol.for("react.element"), ua = Symbol.for("react.portal"), va = Symbol.for("react.fragment"), wa = Symbol.for("react.strict_mode"), xa = Symbol.for("react.profiler"), ya = Symbol.for("react.provider"), Aa = Symbol.for("react.context"), Ba = Symbol.for("react.forward_ref"), Ca = Symbol.for("react.suspense"), Da = Symbol.for("react.suspense_list"), Ea = Symbol.for("react.memo"), Fa = Symbol.for("react.lazy");
var Ga = Symbol.for("react.offscreen");
var Ha = Symbol.iterator;
function Ia(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ha && a2[Ha] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A$2 = Object.assign, Ja;
function Ka(a2) {
  if (Ja === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ja = b2 && b2[1] || "";
    }
  return "\n" + Ja + a2;
}
var La = false;
function Ma(a2, b2) {
  if (!a2 || La)
    return "";
  La = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && typeof l2.stack === "string") {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    La = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ka(a2) : "";
}
function Na(a2) {
  switch (a2.tag) {
    case 5:
      return Ka(a2.type);
    case 16:
      return Ka("Lazy");
    case 13:
      return Ka("Suspense");
    case 19:
      return Ka("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Ma(a2.type, false), a2;
    case 11:
      return a2 = Ma(a2.type.render, false), a2;
    case 1:
      return a2 = Ma(a2.type, true), a2;
    default:
      return "";
  }
}
function Oa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case va:
      return "Fragment";
    case ua:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ca:
      return "Suspense";
    case Da:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Aa:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Ba:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ea:
        return b2 = a2.displayName || null, b2 !== null ? b2 : Oa(a2.type) || "Memo";
      case Fa:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Oa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Pa(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Oa(b2);
    case 8:
      return b2 === wa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Qa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ra(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Sa(a2) {
  var b2 = Ra(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Ta(a2) {
  a2._valueTracker || (a2._valueTracker = Sa(a2));
}
function Ua(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ra(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Va(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Wa(a2, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Xa(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Qa(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function Ya(a2, b2) {
  b2 = b2.checked;
  b2 != null && ra(a2, "checked", b2, false);
}
function Za(a2, b2) {
  Ya(a2, b2);
  var c2 = Qa(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? $a(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && $a(a2, b2.type, Qa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function ab(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function $a(a2, b2, c2) {
  if (b2 !== "number" || Va(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var bb = Array.isArray;
function cb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Qa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function db(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p$6(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function eb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p$6(92));
      if (bb(c2)) {
        if (1 < c2.length)
          throw Error(p$6(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Qa(c2) };
}
function fb(a2, b2) {
  var c2 = Qa(b2.value), d2 = Qa(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function gb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
function hb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ib(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? hb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var jb, kb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    jb = jb || document.createElement("div");
    jb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = jb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function lb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var mb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, nb = ["Webkit", "ms", "Moz", "O"];
Object.keys(mb).forEach(function(a2) {
  nb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    mb[b2] = mb[a2];
  });
});
function ob(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || mb.hasOwnProperty(a2) && mb[a2] ? ("" + b2).trim() : b2 + "px";
}
function pb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = ob(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var qb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function rb(a2, b2) {
  if (b2) {
    if (qb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$6(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$6(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$6(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$6(62));
  }
}
function sb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var tb = null;
function ub(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var vb = null, wb = null, xb = null;
function yb(a2) {
  if (a2 = zb(a2)) {
    if (typeof vb !== "function")
      throw Error(p$6(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Ab(b2), vb(a2.stateNode, a2.type, b2));
  }
}
function Bb(a2) {
  wb ? xb ? xb.push(a2) : xb = [a2] : wb = a2;
}
function Cb() {
  if (wb) {
    var a2 = wb, b2 = xb;
    xb = wb = null;
    yb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        yb(b2[a2]);
  }
}
function Db(a2, b2) {
  return a2(b2);
}
function Eb() {
}
var Fb = false;
function Gb(a2, b2, c2) {
  if (Fb)
    return a2(b2, c2);
  Fb = true;
  try {
    return Db(a2, b2, c2);
  } finally {
    if (Fb = false, wb !== null || xb !== null)
      Eb(), Cb();
  }
}
function Hb(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Ab(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
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
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(p$6(231, b2, typeof c2));
  return c2;
}
var Ib = false;
if (ha)
  try {
    var Jb = {};
    Object.defineProperty(Jb, "passive", { get: function() {
      Ib = true;
    } });
    window.addEventListener("test", Jb, Jb);
    window.removeEventListener("test", Jb, Jb);
  } catch (a2) {
    Ib = false;
  }
function Kb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Lb = false, Mb = null, Nb = false, Ob = null, Pb = { onError: function(a2) {
  Lb = true;
  Mb = a2;
} };
function Qb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Lb = false;
  Mb = null;
  Kb.apply(Pb, arguments);
}
function Rb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Qb.apply(this, arguments);
  if (Lb) {
    if (Lb) {
      var l2 = Mb;
      Lb = false;
      Mb = null;
    } else
      throw Error(p$6(198));
    Nb || (Nb = true, Ob = l2);
  }
}
function Sb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 4098) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function Tb(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Ub(a2) {
  if (Sb(a2) !== a2)
    throw Error(p$6(188));
}
function Vb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Sb(a2);
    if (b2 === null)
      throw Error(p$6(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Ub(e2), a2;
        if (f2 === d2)
          return Ub(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$6(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$6(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$6(190));
  }
  if (c2.tag !== 3)
    throw Error(p$6(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Wb(a2) {
  a2 = Vb(a2);
  return a2 !== null ? Xb(a2) : null;
}
function Xb(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b2 = Xb(a2);
    if (b2 !== null)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var Yb = ba.unstable_scheduleCallback, Zb = ba.unstable_cancelCallback, $b = ba.unstable_shouldYield, ac = ba.unstable_requestPaint, D$1 = ba.unstable_now, bc = ba.unstable_getCurrentPriorityLevel, cc = ba.unstable_ImmediatePriority, dc = ba.unstable_UserBlockingPriority, ec = ba.unstable_NormalPriority, fc = ba.unstable_LowPriority, gc = ba.unstable_IdlePriority, hc = null, ic = null;
function jc(a2) {
  if (ic && typeof ic.onCommitFiberRoot === "function")
    try {
      ic.onCommitFiberRoot(hc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var lc = Math.clz32 ? Math.clz32 : kc, mc = Math.log, nc = Math.LN2;
function kc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (mc(a2) / nc | 0) | 0;
}
var oc = 64, pc = 4194304;
function qc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function rc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (g2 !== 0) {
    var h2 = g2 & ~e2;
    h2 !== 0 ? d2 = qc(h2) : (f2 &= g2, f2 !== 0 && (d2 = qc(f2)));
  } else
    g2 = c2 & ~e2, g2 !== 0 ? d2 = qc(g2) : f2 !== 0 && (d2 = qc(f2));
  if (d2 === 0)
    return 0;
  if (b2 !== 0 && b2 !== d2 && (b2 & e2) === 0 && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || e2 === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d2 & 4) !== 0 && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - lc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function sc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
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
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - lc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (k2 === -1) {
      if ((h2 & c2) === 0 || (h2 & d2) !== 0)
        e2[g2] = sc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function uc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function vc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function wc(a2, b2, c2) {
  a2.pendingLanes |= b2;
  b2 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - lc(b2);
  a2[b2] = c2;
}
function xc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - lc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function yc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - lc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var E$1 = 0;
function zc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Ac, Bc, Cc, Dc, Ec, Fc = false, Gc = [], Hc = null, Ic = null, Jc = null, Kc = /* @__PURE__ */ new Map(), Lc = /* @__PURE__ */ new Map(), Mc = [], Nc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Oc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Hc = null;
      break;
    case "dragenter":
    case "dragleave":
      Ic = null;
      break;
    case "mouseover":
    case "mouseout":
      Jc = null;
      break;
    case "pointerover":
    case "pointerout":
      Kc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lc.delete(b2.pointerId);
  }
}
function Pc(a2, b2, c2, d2, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, b2 !== null && (b2 = zb(b2), b2 !== null && Bc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function Qc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Hc = Pc(Hc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Ic = Pc(Ic, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Jc = Pc(Jc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Kc.set(f2, Pc(Kc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Lc.set(f2, Pc(Lc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Rc(a2) {
  var b2 = Sc(a2.target);
  if (b2 !== null) {
    var c2 = Sb(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = Tb(c2), b2 !== null) {
          a2.blockedOn = b2;
          Ec(a2.priority, function() {
            Cc(c2);
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Tc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Uc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 === null) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      tb = d2;
      c2.target.dispatchEvent(d2);
      tb = null;
    } else
      return b2 = zb(c2), b2 !== null && Bc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Vc(a2, b2, c2) {
  Tc(a2) && c2.delete(b2);
}
function Wc() {
  Fc = false;
  Hc !== null && Tc(Hc) && (Hc = null);
  Ic !== null && Tc(Ic) && (Ic = null);
  Jc !== null && Tc(Jc) && (Jc = null);
  Kc.forEach(Vc);
  Lc.forEach(Vc);
}
function Xc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Fc || (Fc = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Wc)));
}
function Yc(a2) {
  function b2(b3) {
    return Xc(b3, a2);
  }
  if (0 < Gc.length) {
    Xc(Gc[0], a2);
    for (var c2 = 1; c2 < Gc.length; c2++) {
      var d2 = Gc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  Hc !== null && Xc(Hc, a2);
  Ic !== null && Xc(Ic, a2);
  Jc !== null && Xc(Jc, a2);
  Kc.forEach(b2);
  Lc.forEach(b2);
  for (c2 = 0; c2 < Mc.length; c2++)
    d2 = Mc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Mc.length && (c2 = Mc[0], c2.blockedOn === null); )
    Rc(c2), c2.blockedOn === null && Mc.shift();
}
var Zc = sa.ReactCurrentBatchConfig;
function $c(a2, b2, c2, d2) {
  var e2 = E$1, f2 = Zc.transition;
  Zc.transition = null;
  try {
    E$1 = 1, ad(a2, b2, c2, d2);
  } finally {
    E$1 = e2, Zc.transition = f2;
  }
}
function bd(a2, b2, c2, d2) {
  var e2 = E$1, f2 = Zc.transition;
  Zc.transition = null;
  try {
    E$1 = 4, ad(a2, b2, c2, d2);
  } finally {
    E$1 = e2, Zc.transition = f2;
  }
}
function ad(a2, b2, c2, d2) {
  var e2 = Uc(a2, b2, c2, d2);
  if (e2 === null)
    cd(a2, b2, d2, dd, c2), Oc(a2, d2);
  else if (Qc(e2, a2, b2, c2, d2))
    d2.stopPropagation();
  else if (Oc(a2, d2), b2 & 4 && -1 < Nc.indexOf(a2)) {
    for (; e2 !== null; ) {
      var f2 = zb(e2);
      f2 !== null && Ac(f2);
      f2 = Uc(a2, b2, c2, d2);
      f2 === null && cd(a2, b2, d2, dd, c2);
      if (f2 === e2)
        break;
      e2 = f2;
    }
    e2 !== null && d2.stopPropagation();
  } else
    cd(a2, b2, d2, null, c2);
}
var dd = null;
function Uc(a2, b2, c2, d2) {
  dd = null;
  a2 = ub(d2);
  a2 = Sc(a2);
  if (a2 !== null)
    if (b2 = Sb(a2), b2 === null)
      a2 = null;
    else if (c2 = b2.tag, c2 === 13) {
      a2 = Tb(b2);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c2 === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  dd = a2;
  return null;
}
function ed(a2) {
  switch (a2) {
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
      return 1;
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
      return 4;
    case "message":
      switch (bc()) {
        case cc:
          return 1;
        case dc:
          return 4;
        case ec:
        case fc:
          return 16;
        case gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fd = null, gd = null, hd = null;
function id() {
  if (hd)
    return hd;
  var a2, b2 = gd, c2 = b2.length, d2, e2 = "value" in fd ? fd.value : fd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return hd = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function jd(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function kd() {
  return true;
}
function ld() {
  return false;
}
function md(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? kd : ld;
    this.isPropagationStopped = ld;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = kd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = kd);
  }, persist: function() {
  }, isPersistent: kd });
  return b2;
}
var nd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, od = md(nd), pd = A$2({}, nd, { view: 0, detail: 0 }), qd = md(pd), rd, sd, td, vd = A$2({}, pd, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ud, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== td && (td && a2.type === "mousemove" ? (rd = a2.screenX - td.screenX, sd = a2.screenY - td.screenY) : sd = rd = 0, td = a2);
  return rd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : sd;
} }), wd = md(vd), xd = A$2({}, vd, { dataTransfer: 0 }), yd = md(xd), zd = A$2({}, pd, { relatedTarget: 0 }), Ad = md(zd), Bd = A$2({}, nd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cd = md(Bd), Dd = A$2({}, nd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Ed = md(Dd), Fd = A$2({}, nd, { data: 0 }), Gd = md(Fd), Hd = {
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
  MozPrintableKey: "Unidentified"
}, Id = {
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
  224: "Meta"
}, Jd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Kd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Jd[a2]) ? !!b2[a2] : false;
}
function ud() {
  return Kd;
}
var Ld = A$2({}, pd, { key: function(a2) {
  if (a2.key) {
    var b2 = Hd[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = jd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Id[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ud, charCode: function(a2) {
  return a2.type === "keypress" ? jd(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? jd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Md = md(Ld), Nd = A$2({}, vd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Od = md(Nd), Pd = A$2({}, pd, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ud }), Qd = md(Pd), Rd = A$2({}, nd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sd = md(Rd), Td = A$2({}, vd, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ud = md(Td), Vd = [9, 13, 27, 32], Wd = ha && "CompositionEvent" in window, Xd = null;
ha && "documentMode" in document && (Xd = document.documentMode);
var Yd = ha && "TextEvent" in window && !Xd, Zd = ha && (!Wd || Xd && 8 < Xd && 11 >= Xd), $d = String.fromCharCode(32), ae = false;
function be(a2, b2) {
  switch (a2) {
    case "keyup":
      return Vd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ce(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var de = false;
function ee(a2, b2) {
  switch (a2) {
    case "compositionend":
      return ce(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ae = true;
      return $d;
    case "textInput":
      return a2 = b2.data, a2 === $d && ae ? null : a2;
    default:
      return null;
  }
}
function fe(a2, b2) {
  if (de)
    return a2 === "compositionend" || !Wd && be(a2, b2) ? (a2 = id(), hd = gd = fd = null, de = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return Zd && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ge = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function he(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!ge[a2.type] : b2 === "textarea" ? true : false;
}
function ie(a2, b2, c2, d2) {
  Bb(d2);
  b2 = je(b2, "onChange");
  0 < b2.length && (c2 = new od("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var ke = null, le = null;
function me(a2) {
  ne(a2, 0);
}
function oe(a2) {
  var b2 = pe(a2);
  if (Ua(b2))
    return a2;
}
function qe(a2, b2) {
  if (a2 === "change")
    return b2;
}
var re = false;
if (ha) {
  var se;
  if (ha) {
    var te = "oninput" in document;
    if (!te) {
      var ue = document.createElement("div");
      ue.setAttribute("oninput", "return;");
      te = typeof ue.oninput === "function";
    }
    se = te;
  } else
    se = false;
  re = se && (!document.documentMode || 9 < document.documentMode);
}
function ve() {
  ke && (ke.detachEvent("onpropertychange", we), le = ke = null);
}
function we(a2) {
  if (a2.propertyName === "value" && oe(le)) {
    var b2 = [];
    ie(b2, le, a2, ub(a2));
    Gb(me, b2);
  }
}
function xe(a2, b2, c2) {
  a2 === "focusin" ? (ve(), ke = b2, le = c2, ke.attachEvent("onpropertychange", we)) : a2 === "focusout" && ve();
}
function ye(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return oe(le);
}
function ze(a2, b2) {
  if (a2 === "click")
    return oe(b2);
}
function Ae(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return oe(b2);
}
function Be(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var Ce = typeof Object.is === "function" ? Object.is : Be;
function De(a2, b2) {
  if (Ce(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ia.call(b2, e2) || !Ce(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Ee(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Fe(a2, b2) {
  var c2 = Ee(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ee(c2);
  }
}
function Ge(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ge(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function He() {
  for (var a2 = window, b2 = Va(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Va(a2.document);
  }
  return b2;
}
function Ie(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
function Je(a2) {
  var b2 = He(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Ge(c2.ownerDocument.documentElement, c2)) {
    if (d2 !== null && Ie(c2)) {
      if (b2 = d2.start, a2 = d2.end, a2 === void 0 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = d2.end === void 0 ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Fe(c2, f2);
        var g2 = Fe(c2, d2);
        e2 && g2 && (a2.rangeCount !== 1 || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      a2.nodeType === 1 && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    typeof c2.focus === "function" && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Ke = ha && "documentMode" in document && 11 >= document.documentMode, Le = null, Me = null, Ne = null, Oe = false;
function Pe(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Oe || Le == null || Le !== Va(d2) || (d2 = Le, "selectionStart" in d2 && Ie(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Ne && De(Ne, d2) || (Ne = d2, d2 = je(Me, "onSelect"), 0 < d2.length && (b2 = new od("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Le)));
}
function Qe(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Re = { animationend: Qe("Animation", "AnimationEnd"), animationiteration: Qe("Animation", "AnimationIteration"), animationstart: Qe("Animation", "AnimationStart"), transitionend: Qe("Transition", "TransitionEnd") }, Se = {}, Te = {};
ha && (Te = document.createElement("div").style, "AnimationEvent" in window || (delete Re.animationend.animation, delete Re.animationiteration.animation, delete Re.animationstart.animation), "TransitionEvent" in window || delete Re.transitionend.transition);
function Ue(a2) {
  if (Se[a2])
    return Se[a2];
  if (!Re[a2])
    return a2;
  var b2 = Re[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Te)
      return Se[a2] = b2[c2];
  return a2;
}
var Ve = Ue("animationend"), We = Ue("animationiteration"), Xe = Ue("animationstart"), Ye = Ue("transitionend"), Ze = /* @__PURE__ */ new Map(), $e = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function af(a2, b2) {
  Ze.set(a2, b2);
  ea(b2, [a2]);
}
for (var bf = 0; bf < $e.length; bf++) {
  var cf = $e[bf], df = cf.toLowerCase(), ef = cf[0].toUpperCase() + cf.slice(1);
  af(df, "on" + ef);
}
af(Ve, "onAnimationEnd");
af(We, "onAnimationIteration");
af(Xe, "onAnimationStart");
af("dblclick", "onDoubleClick");
af("focusin", "onFocus");
af("focusout", "onBlur");
af(Ye, "onTransitionEnd");
fa("onMouseEnter", ["mouseout", "mouseover"]);
fa("onMouseLeave", ["mouseout", "mouseover"]);
fa("onPointerEnter", ["pointerout", "pointerover"]);
fa("onPointerLeave", ["pointerout", "pointerover"]);
ea("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ea("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ea("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ea("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ea("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ff = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ff));
function hf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Rb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function ne(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          hf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          hf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Nb)
    throw a2 = Ob, Nb = false, Ob = null, a2;
}
function F$1(a2, b2) {
  var c2 = b2[jf];
  c2 === void 0 && (c2 = b2[jf] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (kf(b2, a2, 2, false), c2.add(d2));
}
function lf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  kf(c2, a2, d2, b2);
}
var mf = "_reactListening" + Math.random().toString(36).slice(2);
function nf(a2) {
  if (!a2[mf]) {
    a2[mf] = true;
    ca.forEach(function(b3) {
      b3 !== "selectionchange" && (gf.has(b3) || lf(b3, false, a2), lf(b3, true, a2));
    });
    var b2 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b2 === null || b2[mf] || (b2[mf] = true, lf("selectionchange", false, b2));
  }
}
function kf(a2, b2, c2, d2) {
  switch (ed(b2)) {
    case 1:
      var e2 = $c;
      break;
    case 4:
      e2 = bd;
      break;
    default:
      e2 = ad;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Ib || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function cd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = Sc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Gb(function() {
    var d3 = f2, e3 = ub(c2), g3 = [];
    a: {
      var h3 = Ze.get(a2);
      if (h3 !== void 0) {
        var k3 = od, n2 = a2;
        switch (a2) {
          case "keypress":
            if (jd(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Md;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Ad;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Ad;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ad;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = wd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Qd;
            break;
          case Ve:
          case We:
          case Xe:
            k3 = Cd;
            break;
          case Ye:
            k3 = Sd;
            break;
          case "scroll":
            k3 = qd;
            break;
          case "wheel":
            k3 = Ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Ed;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Od;
        }
        var v2 = (b2 & 4) !== 0, C2 = !v2 && a2 === "scroll", t2 = v2 ? h3 !== null ? h3 + "Capture" : null : h3;
        v2 = [];
        for (var r2 = d3, x2; r2 !== null; ) {
          x2 = r2;
          var B2 = x2.stateNode;
          x2.tag === 5 && B2 !== null && (x2 = B2, t2 !== null && (B2 = Hb(r2, t2), B2 != null && v2.push(of(r2, B2, x2))));
          if (C2)
            break;
          r2 = r2.return;
        }
        0 < v2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: v2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && c2 !== tb && (n2 = c2.relatedTarget || c2.fromElement) && (Sc(n2) || n2[pf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Sc(n2) : null, n2 !== null && (C2 = Sb(n2), n2 !== C2 || n2.tag !== 5 && n2.tag !== 6))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            v2 = wd;
            B2 = "onMouseLeave";
            t2 = "onMouseEnter";
            r2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              v2 = Od, B2 = "onPointerLeave", t2 = "onPointerEnter", r2 = "pointer";
            C2 = k3 == null ? h3 : pe(k3);
            x2 = n2 == null ? h3 : pe(n2);
            h3 = new v2(B2, r2 + "leave", k3, c2, e3);
            h3.target = C2;
            h3.relatedTarget = x2;
            B2 = null;
            Sc(e3) === d3 && (v2 = new v2(t2, r2 + "enter", n2, c2, e3), v2.target = x2, v2.relatedTarget = C2, B2 = v2);
            C2 = B2;
            if (k3 && n2)
              b: {
                v2 = k3;
                t2 = n2;
                r2 = 0;
                for (x2 = v2; x2; x2 = qf(x2))
                  r2++;
                x2 = 0;
                for (B2 = t2; B2; B2 = qf(B2))
                  x2++;
                for (; 0 < r2 - x2; )
                  v2 = qf(v2), r2--;
                for (; 0 < x2 - r2; )
                  t2 = qf(t2), x2--;
                for (; r2--; ) {
                  if (v2 === t2 || t2 !== null && v2 === t2.alternate)
                    break b;
                  v2 = qf(v2);
                  t2 = qf(t2);
                }
                v2 = null;
              }
            else
              v2 = null;
            k3 !== null && rf(g3, h3, k3, v2, false);
            n2 !== null && C2 !== null && rf(g3, C2, n2, v2, true);
          }
        }
      }
      a: {
        h3 = d3 ? pe(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var O2 = qe;
        else if (he(h3))
          if (re)
            O2 = Ae;
          else {
            O2 = ye;
            var T2 = xe;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (O2 = ze);
        if (O2 && (O2 = O2(a2, d3))) {
          ie(g3, O2, c2, e3);
          break a;
        }
        T2 && T2(a2, h3, d3);
        a2 === "focusout" && (T2 = h3._wrapperState) && T2.controlled && h3.type === "number" && $a(h3, "number", h3.value);
      }
      T2 = d3 ? pe(d3) : window;
      switch (a2) {
        case "focusin":
          if (he(T2) || T2.contentEditable === "true")
            Le = T2, Me = d3, Ne = null;
          break;
        case "focusout":
          Ne = Me = Le = null;
          break;
        case "mousedown":
          Oe = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oe = false;
          Pe(g3, c2, e3);
          break;
        case "selectionchange":
          if (Ke)
            break;
        case "keydown":
        case "keyup":
          Pe(g3, c2, e3);
      }
      var za;
      if (Wd)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        de ? be(a2, c2) && (L2 = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (Zd && c2.locale !== "ko" && (de || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && de && (za = id()) : (fd = e3, gd = "value" in fd ? fd.value : fd.textContent, de = true)), T2 = je(d3, L2), 0 < T2.length && (L2 = new Gd(L2, a2, null, c2, e3), g3.push({ event: L2, listeners: T2 }), za ? L2.data = za : (za = ce(c2), za !== null && (L2.data = za))));
      if (za = Yd ? ee(a2, c2) : fe(a2, c2))
        d3 = je(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Gd("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = za);
    }
    ne(g3, b2);
  });
}
function of(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function je(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Hb(a2, c2), f2 != null && d2.unshift(of(a2, f2, e2)), f2 = Hb(a2, b2), f2 != null && d2.push(of(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function qf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function rf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Hb(c2, f2), k2 != null && g2.unshift(of(c2, k2, h2))) : e2 || (k2 = Hb(c2, f2), k2 != null && g2.push(of(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
var sf = /\r\n?/g, tf = /\u0000|\uFFFD/g;
function uf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(sf, "\n").replace(tf, "");
}
function vf(a2, b2, c2) {
  b2 = uf(b2);
  if (uf(a2) !== b2 && c2)
    throw Error(p$6(425));
}
function wf() {
}
var xf = null;
function yf(a2, b2) {
  return a2 === "textarea" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var zf = typeof setTimeout === "function" ? setTimeout : void 0, Af = typeof clearTimeout === "function" ? clearTimeout : void 0, Bf = typeof Promise === "function" ? Promise : void 0, Df = typeof queueMicrotask === "function" ? queueMicrotask : typeof Bf !== "undefined" ? function(a2) {
  return Bf.resolve(null).then(a2).catch(Cf);
} : zf;
function Cf(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Ef(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && e2.nodeType === 8)
      if (c2 = e2.data, c2 === "/$") {
        if (d2 === 0) {
          a2.removeChild(e2);
          Yc(b2);
          return;
        }
        d2--;
      } else
        c2 !== "$" && c2 !== "$?" && c2 !== "$!" || d2++;
    c2 = e2;
  } while (c2);
  Yc(b2);
}
function Ff(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a2.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a2;
}
function Gf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Hf = Math.random().toString(36).slice(2), If = "__reactFiber$" + Hf, Jf = "__reactProps$" + Hf, pf = "__reactContainer$" + Hf, jf = "__reactEvents$" + Hf, Kf = "__reactListeners$" + Hf, Lf = "__reactHandles$" + Hf;
function Sc(a2) {
  var b2 = a2[If];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[pf] || c2[If]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = Gf(a2); a2 !== null; ) {
          if (c2 = a2[If])
            return c2;
          a2 = Gf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function zb(a2) {
  a2 = a2[If] || a2[pf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function pe(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p$6(33));
}
function Ab(a2) {
  return a2[Jf] || null;
}
var Mf = [], Nf = -1;
function Of(a2) {
  return { current: a2 };
}
function G$1(a2) {
  0 > Nf || (a2.current = Mf[Nf], Mf[Nf] = null, Nf--);
}
function H$1(a2, b2) {
  Nf++;
  Mf[Nf] = a2.current;
  a2.current = b2;
}
var Pf = {}, I$1 = Of(Pf), Qf = Of(false), Rf = Pf;
function Sf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Pf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Tf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Uf() {
  G$1(Qf);
  G$1(I$1);
}
function Vf(a2, b2, c2) {
  if (I$1.current !== Pf)
    throw Error(p$6(168));
  H$1(I$1, b2);
  H$1(Qf, c2);
}
function Wf(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$6(108, Pa(a2) || "Unknown", e2));
  return A$2({}, c2, d2);
}
function Xf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Pf;
  Rf = I$1.current;
  H$1(I$1, a2);
  H$1(Qf, Qf.current);
  return true;
}
function Yf(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$6(169));
  c2 ? (a2 = Wf(a2, b2, Rf), d2.__reactInternalMemoizedMergedChildContext = a2, G$1(Qf), G$1(I$1), H$1(I$1, a2)) : G$1(Qf);
  H$1(Qf, c2);
}
var Zf = null, $f = false, ag = false;
function bg(a2) {
  Zf === null ? Zf = [a2] : Zf.push(a2);
}
function cg(a2) {
  $f = true;
  bg(a2);
}
function dg() {
  if (!ag && Zf !== null) {
    ag = true;
    var a2 = 0, b2 = E$1;
    try {
      var c2 = Zf;
      for (E$1 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (d2 !== null);
      }
      Zf = null;
      $f = false;
    } catch (e2) {
      throw Zf !== null && (Zf = Zf.slice(a2 + 1)), Yb(cc, dg), e2;
    } finally {
      E$1 = b2, ag = false;
    }
  }
  return null;
}
var eg = sa.ReactCurrentBatchConfig;
function fg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$2({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var gg = Of(null), hg = null, ig = null, jg = null;
function kg() {
  jg = ig = hg = null;
}
function lg(a2) {
  var b2 = gg.current;
  G$1(gg);
  a2._currentValue = b2;
}
function mg(a2, b2, c2) {
  for (; a2 !== null; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, d2 !== null && (d2.childLanes |= b2)) : d2 !== null && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function ng(a2, b2) {
  hg = a2;
  jg = ig = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (og = true), a2.firstContext = null);
}
function pg(a2) {
  var b2 = a2._currentValue;
  if (jg !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, ig === null) {
      if (hg === null)
        throw Error(p$6(308));
      ig = a2;
      hg.dependencies = { lanes: 0, firstContext: a2 };
    } else
      ig = ig.next = a2;
  return b2;
}
var qg = null, rg = false;
function sg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function ug(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function vg(a2, b2) {
  var c2 = a2.updateQueue;
  c2 !== null && (c2 = c2.shared, J !== null && (a2.mode & 1) !== 0 && (K & 2) === 0 ? (a2 = c2.interleaved, a2 === null ? (b2.next = b2, qg === null ? qg = [c2] : qg.push(c2)) : (b2.next = a2.next, a2.next = b2), c2.interleaved = b2) : (a2 = c2.pending, a2 === null ? b2.next = b2 : (b2.next = a2.next, a2.next = b2), c2.pending = b2));
}
function wg(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c2 & 4194240) !== 0)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    yc(a2, c2);
  }
}
function xg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function yg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  rg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    m2 !== null && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (h2 === null ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var w2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var u2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & u2) === u2) {
        m2 !== null && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, v2 = h2;
          u2 = b2;
          y2 = c2;
          switch (v2.tag) {
            case 1:
              n2 = v2.payload;
              if (typeof n2 === "function") {
                w2 = n2.call(y2, w2, u2);
                break a;
              }
              w2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = v2.payload;
              u2 = typeof n2 === "function" ? n2.call(y2, w2, u2) : n2;
              if (u2 === null || u2 === void 0)
                break a;
              w2 = A$2({}, w2, u2);
              break a;
            case 2:
              rg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, u2 = e2.effects, u2 === null ? e2.effects = [h2] : u2.push(h2));
      } else
        y2 = { eventTime: y2, lane: u2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, m2 === null ? (l2 = m2 = y2, k2 = w2) : m2 = m2.next = y2, g2 |= u2;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          u2 = h2, h2 = u2.next, u2.next = null, e2.lastBaseUpdate = u2, e2.shared.pending = null;
    } while (1);
    m2 === null && (k2 = w2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (b2 !== null) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      f2 === null && (e2.shared.lanes = 0);
    zg |= g2;
    a2.lanes = g2;
    a2.memoizedState = w2;
  }
}
function Ag(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(p$6(191, e2));
        e2.call(d2);
      }
    }
}
var Bg = new aa.Component().refs;
function Cg(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A$2({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Fg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Sb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = M(), e2 = Dg(a2), f2 = ug(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  vg(a2, f2);
  b2 = Eg(a2, e2, d2);
  b2 !== null && wg(b2, a2, e2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = M(), e2 = Dg(a2), f2 = ug(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  vg(a2, f2);
  b2 = Eg(a2, e2, d2);
  b2 !== null && wg(b2, a2, e2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = M(), d2 = Dg(a2), e2 = ug(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  vg(a2, e2);
  b2 = Eg(a2, d2, c2);
  b2 !== null && wg(b2, a2, d2);
} };
function Gg(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !De(c2, d2) || !De(e2, f2) : true;
}
function Hg(a2, b2, c2) {
  var d2 = false, e2 = Pf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = pg(f2) : (e2 = Tf(b2) ? Rf : I$1.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Sf(a2, e2) : Pf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Fg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ig(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Fg.enqueueReplaceState(b2, b2.state, null);
}
function Jg(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Bg;
  sg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = pg(f2) : (f2 = Tf(b2) ? Rf : I$1.current, e2.context = Sf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Cg(a2, b2, f2, c2), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Fg.enqueueReplaceState(e2, e2.state, null), yg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4194308);
}
var Kg = [], Lg = 0, Mg = null, Ng = 0, Og = [], Pg = 0, Qg = null, Rg = 1, Sg = "";
function Tg(a2, b2) {
  Kg[Lg++] = Ng;
  Kg[Lg++] = Mg;
  Mg = a2;
  Ng = b2;
}
function Ug(a2, b2, c2) {
  Og[Pg++] = Rg;
  Og[Pg++] = Sg;
  Og[Pg++] = Qg;
  Qg = a2;
  var d2 = Rg;
  a2 = Sg;
  var e2 = 32 - lc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - lc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    Rg = 1 << 32 - lc(b2) + e2 | c2 << e2 | d2;
    Sg = f2 + a2;
  } else
    Rg = 1 << f2 | c2 << e2 | d2, Sg = a2;
}
function Vg(a2) {
  a2.return !== null && (Tg(a2, 1), Ug(a2, 1, 0));
}
function Wg(a2) {
  for (; a2 === Mg; )
    Mg = Kg[--Lg], Kg[Lg] = null, Ng = Kg[--Lg], Kg[Lg] = null;
  for (; a2 === Qg; )
    Qg = Og[--Pg], Og[Pg] = null, Sg = Og[--Pg], Og[Pg] = null, Rg = Og[--Pg], Og[Pg] = null;
}
var Xg = null, Yg = null, N = false, Zg = null;
function $g(a2, b2) {
  var c2 = ah(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  b2 === null ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function bh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, Xg = a2, Yg = Ff(b2.firstChild), true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, Xg = a2, Yg = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c2 = Qg !== null ? { id: Rg, overflow: Sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = ah(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, Xg = a2, Yg = null, true) : false;
    default:
      return false;
  }
}
function ch(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function dh(a2) {
  if (N) {
    var b2 = Yg;
    if (b2) {
      var c2 = b2;
      if (!bh(a2, b2)) {
        if (ch(a2))
          throw Error(p$6(418));
        b2 = Ff(c2.nextSibling);
        var d2 = Xg;
        b2 && bh(a2, b2) ? $g(d2, c2) : (a2.flags = a2.flags & -4097 | 2, N = false, Xg = a2);
      }
    } else {
      if (ch(a2))
        throw Error(p$6(418));
      a2.flags = a2.flags & -4097 | 2;
      N = false;
      Xg = a2;
    }
  }
}
function eh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  Xg = a2;
}
function fh(a2) {
  if (a2 !== Xg)
    return false;
  if (!N)
    return eh(a2), N = true, false;
  var b2;
  (b2 = a2.tag !== 3) && !(b2 = a2.tag !== 5) && (b2 = a2.type, b2 = b2 !== "head" && b2 !== "body" && !yf(a2.type, a2.memoizedProps));
  if (b2 && (b2 = Yg)) {
    if (ch(a2)) {
      for (a2 = Yg; a2; )
        a2 = Ff(a2.nextSibling);
      throw Error(p$6(418));
    }
    for (; b2; )
      $g(a2, b2), b2 = Ff(b2.nextSibling);
  }
  eh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$6(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              Yg = Ff(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      Yg = null;
    }
  } else
    Yg = Xg ? Ff(a2.stateNode.nextSibling) : null;
  return true;
}
function gh() {
  Yg = Xg = null;
  N = false;
}
function hh(a2) {
  Zg === null ? Zg = [a2] : Zg.push(a2);
}
function ih(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(p$6(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$6(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === Bg && (b3 = e2.refs = {});
        a3 === null ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(p$6(284));
    if (!c2._owner)
      throw Error(p$6(290, a2));
  }
  return a2;
}
function jh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$6(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function kh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function lh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      d3 === null ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = mh(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = nh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === va)
      return m2(a3, b3, c3.props.children, d3, c3.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Fa && kh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = ih(a3, b3, c3), d3.return = a3, d3;
    d3 = oh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = ih(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = ph(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = qh(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function w2(a3, b3, c3) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = nh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ta:
          return c3 = oh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = ih(a3, null, b3), c3.return = a3, c3;
        case ua:
          return b3 = ph(b3, a3.mode, c3), b3.return = a3, b3;
        case Fa:
          var d3 = b3._init;
          return w2(a3, d3(b3._payload), c3);
      }
      if (bb(b3) || Ia(b3))
        return b3 = qh(b3, a3.mode, c3, null), b3.return = a3, b3;
      jh(a3, b3);
    }
    return null;
  }
  function u2(a3, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" && c3 !== "" || typeof c3 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case ta:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case ua:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Fa:
          return e3 = c3._init, u2(a3, b3, e3(c3._payload), d3);
      }
      if (bb(c3) || Ia(c3))
        return e3 !== null ? null : m2(a3, b3, c3, d3, null);
      jh(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if (typeof d3 === "string" && d3 !== "" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case ta:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case ua:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Fa:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (bb(d3) || Ia(d3))
        return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      jh(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, n3 = null, m3 = g3, r2 = g3 = 0, x2 = null; m3 !== null && r2 < h3.length; r2++) {
      m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t2 = u2(e3, m3, h3[r2], k3);
      if (t2 === null) {
        m3 === null && (m3 = x2);
        break;
      }
      a2 && m3 && t2.alternate === null && b2(e3, m3);
      g3 = f2(t2, g3, r2);
      n3 === null ? l3 = t2 : n3.sibling = t2;
      n3 = t2;
      m3 = x2;
    }
    if (r2 === h3.length)
      return c2(e3, m3), N && Tg(e3, r2), l3;
    if (m3 === null) {
      for (; r2 < h3.length; r2++)
        m3 = w2(e3, h3[r2], k3), m3 !== null && (g3 = f2(m3, g3, r2), n3 === null ? l3 = m3 : n3.sibling = m3, n3 = m3);
      N && Tg(e3, r2);
      return l3;
    }
    for (m3 = d2(e3, m3); r2 < h3.length; r2++)
      x2 = y2(m3, e3, r2, h3[r2], k3), x2 !== null && (a2 && x2.alternate !== null && m3.delete(x2.key === null ? r2 : x2.key), g3 = f2(x2, g3, r2), n3 === null ? l3 = x2 : n3.sibling = x2, n3 = x2);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    N && Tg(e3, r2);
    return l3;
  }
  function v2(e3, g3, h3, k3) {
    var l3 = Ia(h3);
    if (typeof l3 !== "function")
      throw Error(p$6(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$6(151));
    for (var m3 = l3 = null, n3 = g3, r2 = g3 = 0, x2 = null, t2 = h3.next(); n3 !== null && !t2.done; r2++, t2 = h3.next()) {
      n3.index > r2 ? (x2 = n3, n3 = null) : x2 = n3.sibling;
      var v3 = u2(e3, n3, t2.value, k3);
      if (v3 === null) {
        n3 === null && (n3 = x2);
        break;
      }
      a2 && n3 && v3.alternate === null && b2(e3, n3);
      g3 = f2(v3, g3, r2);
      m3 === null ? l3 = v3 : m3.sibling = v3;
      m3 = v3;
      n3 = x2;
    }
    if (t2.done)
      return c2(e3, n3), N && Tg(e3, r2), l3;
    if (n3 === null) {
      for (; !t2.done; r2++, t2 = h3.next())
        t2 = w2(e3, t2.value, k3), t2 !== null && (g3 = f2(t2, g3, r2), m3 === null ? l3 = t2 : m3.sibling = t2, m3 = t2);
      N && Tg(e3, r2);
      return l3;
    }
    for (n3 = d2(e3, n3); !t2.done; r2++, t2 = h3.next())
      t2 = y2(n3, e3, r2, t2.value, k3), t2 !== null && (a2 && t2.alternate !== null && n3.delete(t2.key === null ? r2 : t2.key), g3 = f2(t2, g3, r2), m3 === null ? l3 = t2 : m3.sibling = t2, m3 = t2);
    a2 && n3.forEach(function(a3) {
      return b2(e3, a3);
    });
    N && Tg(e3, r2);
    return l3;
  }
  function C2(a3, d3, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === va && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ta:
          a: {
            for (var k3 = f3.key, l3 = d3; l3 !== null; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === va) {
                  if (l3.tag === 7) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Fa && kh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = ih(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === va ? (d3 = qh(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = oh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = ih(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case ua:
          a: {
            for (l3 = f3.key; d3 !== null; ) {
              if (d3.key === l3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = ph(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Fa:
          return l3 = f3._init, C2(a3, d3, l3(f3._payload), h3);
      }
      if (bb(f3))
        return n2(a3, d3, f3, h3);
      if (Ia(f3))
        return v2(a3, d3, f3, h3);
      jh(a3, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = nh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return C2;
}
var rh = lh(true), sh = lh(false), th = {}, uh = Of(th), vh = Of(th), wh = Of(th);
function xh(a2) {
  if (a2 === th)
    throw Error(p$6(174));
  return a2;
}
function yh(a2, b2) {
  H$1(wh, b2);
  H$1(vh, a2);
  H$1(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : ib(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = ib(b2, a2);
  }
  G$1(uh);
  H$1(uh, b2);
}
function zh() {
  G$1(uh);
  G$1(vh);
  G$1(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = ib(b2, a2.type);
  b2 !== c2 && (H$1(vh, a2), H$1(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (G$1(uh), G$1(vh));
}
var P = Of(0);
function Ch(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++)
    Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = sa.ReactCurrentDispatcher, Gh = sa.ReactCurrentBatchConfig, Hh = 0, Q = null, R = null, S = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function U() {
  throw Error(p$6(321));
}
function Mh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!Ce(a2[c2], b2[c2]))
      return false;
  return true;
}
function Nh(a2, b2, c2, d2, e2, f2) {
  Hh = f2;
  Q = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = a2 === null || a2.memoizedState === null ? Oh : Ph;
  a2 = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2)
        throw Error(p$6(301));
      f2 += 1;
      S = R = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a2 = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = R !== null && R.next !== null;
  Hh = 0;
  S = R = Q = null;
  Ih = false;
  if (b2)
    throw Error(p$6(300));
  return a2;
}
function Sh() {
  var a2 = Kh !== 0;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  S === null ? Q.memoizedState = S = a2 : S = S.next = a2;
  return S;
}
function Uh() {
  if (R === null) {
    var a2 = Q.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = R.next;
  var b2 = S === null ? Q.memoizedState : S.next;
  if (b2 !== null)
    S = b2, R = a2;
  else {
    if (a2 === null)
      throw Error(p$6(310));
    R = a2;
    a2 = { memoizedState: R.memoizedState, baseState: R.baseState, baseQueue: R.baseQueue, queue: R.queue, next: null };
    S === null ? Q.memoizedState = S = a2 : S = S.next = a2;
  }
  return S;
}
function Vh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Wh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d2 = R, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2)
        k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var w2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = w2, g2 = d2) : k2 = k2.next = w2;
        Q.lanes |= m2;
        zg |= m2;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f2);
    k2 === null ? g2 = d2 : k2.next = h2;
    Ce(d2, b2.memoizedState) || (og = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (a2 !== null) {
    e2 = a2;
    do
      f2 = e2.lane, Q.lanes |= f2, zg |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    e2 === null && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    Ce(f2, b2.memoizedState) || (og = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a2, b2) {
  var c2 = Q, d2 = Uh(), e2 = b2(), f2 = !Ce(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, og = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || S !== null && S.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
    if (J === null)
      throw Error(p$6(349));
    (Hh & 30) !== 0 || di(c2, b2, e2);
  }
  return e2;
}
function di(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = Q.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, Q.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, c2 === null ? b2.stores = [a2] : c2.push(a2));
}
function ci(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && Eg(a2, 1, -1);
}
function ai(a2, b2, c2) {
  return c2(function() {
    ei(b2) && Eg(a2, 1, -1);
  });
}
function ei(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !Ce(a2, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a2) {
  var b2 = Th();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = gi.bind(null, Q, a2);
  return [b2.memoizedState, a2];
}
function bi(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = Q.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, Q.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function hi() {
  return Uh().memoizedState;
}
function ii(a2, b2, c2, d2) {
  var e2 = Th();
  Q.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function ji(a2, b2, c2, d2) {
  var e2 = Uh();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (R !== null) {
    var g2 = R.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Mh(d2, g2.deps)) {
      e2.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  Q.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, f2, d2);
}
function ki(a2, b2) {
  return ii(8390656, 8, a2, b2);
}
function $h(a2, b2) {
  return ji(2048, 8, a2, b2);
}
function li(a2, b2) {
  return ji(4, 2, a2, b2);
}
function mi(a2, b2) {
  return ji(4, 4, a2, b2);
}
function ni(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function oi(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return ji(4, 4, ni.bind(null, b2, a2), c2);
}
function pi() {
}
function qi(a2, b2) {
  var c2 = Uh();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Mh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ri(a2, b2) {
  var c2 = Uh();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Mh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function si(a2, b2) {
  var c2 = E$1;
  E$1 = c2 !== 0 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    E$1 = c2, Gh.transition = d2;
  }
}
function ti() {
  return Uh().memoizedState;
}
function ui(a2, b2, c2) {
  var d2 = Dg(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  vi(a2) ? wi(b2, c2) : (xi(a2, b2, c2), c2 = M(), a2 = Eg(a2, d2, c2), a2 !== null && yi(a2, b2, d2));
}
function gi(a2, b2, c2) {
  var d2 = Dg(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (vi(a2))
    wi(b2, e2);
  else {
    xi(a2, b2, e2);
    var f2 = a2.alternate;
    if (a2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (Ce(h2, g2))
          return;
      } catch (k2) {
      } finally {
      }
    c2 = M();
    a2 = Eg(a2, d2, c2);
    a2 !== null && yi(a2, b2, d2);
  }
}
function vi(a2) {
  var b2 = a2.alternate;
  return a2 === Q || b2 !== null && b2 === Q;
}
function wi(a2, b2) {
  Jh = Ih = true;
  var c2 = a2.pending;
  c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function xi(a2, b2, c2) {
  J !== null && (a2.mode & 1) !== 0 && (K & 2) === 0 ? (a2 = b2.interleaved, a2 === null ? (c2.next = c2, qg === null ? qg = [b2] : qg.push(b2)) : (c2.next = a2.next, a2.next = c2), b2.interleaved = c2) : (a2 = b2.pending, a2 === null ? c2.next = c2 : (c2.next = a2.next, a2.next = c2), b2.pending = c2);
}
function yi(a2, b2, c2) {
  if ((c2 & 4194240) !== 0) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    yc(a2, c2);
  }
}
var Rh = { readContext: pg, useCallback: U, useContext: U, useEffect: U, useImperativeHandle: U, useInsertionEffect: U, useLayoutEffect: U, useMemo: U, useReducer: U, useRef: U, useState: U, useDebugValue: U, useDeferredValue: U, useTransition: U, useMutableSource: U, useSyncExternalStore: U, useId: U, unstable_isNewReconciler: false }, Oh = { readContext: pg, useCallback: function(a2, b2) {
  Th().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: pg, useEffect: ki, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return ii(4194308, 4, ni.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return ii(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ii(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Th();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Th();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = ui.bind(null, Q, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = Th();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: fi, useDebugValue: pi, useDeferredValue: function(a2) {
  var b2 = fi(a2), c2 = b2[0], d2 = b2[1];
  ki(function() {
    var b3 = Gh.transition;
    Gh.transition = {};
    try {
      d2(a2);
    } finally {
      Gh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = fi(false), b2 = a2[0];
  a2 = si.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = Q, e2 = Th();
  if (N) {
    if (c2 === void 0)
      throw Error(p$6(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (J === null)
      throw Error(p$6(349));
    (Hh & 30) !== 0 || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  ki(ai.bind(null, d2, f2, a2), [a2]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = Th(), b2 = J.identifierPrefix;
  if (N) {
    var c2 = Sg;
    var d2 = Rg;
    c2 = (d2 & ~(1 << 32 - lc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: pg,
  useCallback: qi,
  useContext: pg,
  useEffect: $h,
  useImperativeHandle: oi,
  useInsertionEffect: li,
  useLayoutEffect: mi,
  useMemo: ri,
  useReducer: Wh,
  useRef: hi,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: pi,
  useDeferredValue: function(a2) {
    var b2 = Wh(Vh), c2 = b2[0], d2 = b2[1];
    $h(function() {
      var b3 = Gh.transition;
      Gh.transition = {};
      try {
        d2(a2);
      } finally {
        Gh.transition = b3;
      }
    }, [a2]);
    return c2;
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: ti,
  unstable_isNewReconciler: false
}, Qh = {
  readContext: pg,
  useCallback: qi,
  useContext: pg,
  useEffect: $h,
  useImperativeHandle: oi,
  useInsertionEffect: li,
  useLayoutEffect: mi,
  useMemo: ri,
  useReducer: Xh,
  useRef: hi,
  useState: function() {
    return Xh(Vh);
  },
  useDebugValue: pi,
  useDeferredValue: function(a2) {
    var b2 = Xh(Vh), c2 = b2[0], d2 = b2[1];
    $h(function() {
      var b3 = Gh.transition;
      Gh.transition = {};
      try {
        d2(a2);
      } finally {
        Gh.transition = b3;
      }
    }, [a2]);
    return c2;
  },
  useTransition: function() {
    var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: ti,
  unstable_isNewReconciler: false
};
function zi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Na(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ai(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Bi = typeof WeakMap === "function" ? WeakMap : Map;
function Ci(a2, b2, c2) {
  c2 = ug(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Di || (Di = true, Ei = d2);
    Ai(a2, b2);
  };
  return c2;
}
function Fi(a2, b2, c2) {
  c2 = ug(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Ai(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    Ai(a2, b2);
    typeof d2 !== "function" && (Gi === null ? Gi = /* @__PURE__ */ new Set([this]) : Gi.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
function Hi(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (d2 === null) {
    d2 = a2.pingCache = new Bi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), e2 === void 0 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ii.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ji(a2) {
  do {
    var b2;
    if (b2 = a2.tag === 13)
      b2 = a2.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Ki(a2, b2, c2, d2, e2) {
  if ((a2.mode & 1) === 0)
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, c2.tag === 1 && (c2.alternate === null ? c2.tag = 17 : (b2 = ug(-1, 1), b2.tag = 2, vg(c2, b2))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Li, Mi, Ni, Oi;
Li = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Mi = function() {
};
Ni = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Wa(a2, e2);
        d2 = Wa(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = db(a2, e2);
        d2 = db(a2, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = wf);
    }
    rb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (da.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (da.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && F$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Oi = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Pi(a2, b2) {
  if (!N)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function V(a2) {
  var b2 = a2.alternate !== null && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Qi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  Wg(b2);
  switch (b2.tag) {
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
      return V(b2), null;
    case 1:
      return Tf(b2.type) && Uf(), V(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      G$1(Qf);
      G$1(I$1);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        fh(b2) ? b2.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, Zg !== null && (Ri(Zg), Zg = null));
      Mi(a2, b2);
      V(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Ni(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(p$6(166));
          V(b2);
          return null;
        }
        a2 = xh(uh.current);
        if (fh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[If] = b2;
          d2[Jf] = f2;
          a2 = (b2.mode & 1) !== 0;
          switch (c2) {
            case "dialog":
              F$1("cancel", d2);
              F$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              F$1("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < ff.length; e2++)
                F$1(ff[e2], d2);
              break;
            case "source":
              F$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              F$1("error", d2);
              F$1("load", d2);
              break;
            case "details":
              F$1("toggle", d2);
              break;
            case "input":
              Xa(d2, f2);
              F$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              F$1("invalid", d2);
              break;
            case "textarea":
              eb(d2, f2), F$1("invalid", d2);
          }
          rb(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (vf(d2.textContent, h2, a2), e2 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (vf(d2.textContent, h2, a2), e2 = ["children", "" + h2]) : da.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && F$1("scroll", d2);
            }
          switch (c2) {
            case "input":
              Ta(d2);
              ab(d2, f2, true);
              break;
            case "textarea":
              Ta(d2);
              gb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = wf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = hb(c2));
          a2 === "http://www.w3.org/1999/xhtml" ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[If] = b2;
          a2[Jf] = d2;
          Li(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = sb(c2, d2);
            switch (c2) {
              case "dialog":
                F$1("cancel", a2);
                F$1("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                F$1("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < ff.length; e2++)
                  F$1(ff[e2], a2);
                e2 = d2;
                break;
              case "source":
                F$1("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                F$1("error", a2);
                F$1("load", a2);
                e2 = d2;
                break;
              case "details":
                F$1("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Xa(a2, d2);
                e2 = Wa(a2, d2);
                F$1("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$2({}, d2, { value: void 0 });
                F$1("invalid", a2);
                break;
              case "textarea":
                eb(a2, d2);
                e2 = db(a2, d2);
                F$1("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            rb(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? pb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && kb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && lb(a2, k2) : typeof k2 === "number" && lb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (da.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && F$1("scroll", a2) : k2 != null && ra(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Ta(a2);
                ab(a2, d2, false);
                break;
              case "textarea":
                Ta(a2);
                gb(a2);
                break;
              case "option":
                d2.value != null && a2.setAttribute("value", "" + Qa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                f2 != null ? cb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && cb(a2, !!d2.multiple, d2.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a2.onclick = wf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      V(b2);
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Oi(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(p$6(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (fh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[If] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = Xg, a2 !== null)
              switch (g2 = (a2.mode & 1) !== 0, a2.tag) {
                case 3:
                  vf(d2.nodeValue, c2, g2);
                  break;
                case 5:
                  a2.memoizedProps[void 0] !== true && vf(d2.nodeValue, c2, g2);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[If] = b2, b2.stateNode = d2;
      }
      V(b2);
      return null;
    case 13:
      G$1(P);
      d2 = b2.memoizedState;
      if (N && Yg !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d2 = Yg; d2; )
          d2 = Ff(d2.nextSibling);
        gh();
        b2.flags |= 98560;
        return b2;
      }
      if (d2 !== null && d2.dehydrated !== null) {
        d2 = fh(b2);
        if (a2 === null) {
          if (!d2)
            throw Error(p$6(318));
          d2 = b2.memoizedState;
          d2 = d2 !== null ? d2.dehydrated : null;
          if (!d2)
            throw Error(p$6(317));
          d2[If] = b2;
        } else
          gh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        V(b2);
        return null;
      }
      Zg !== null && (Ri(Zg), Zg = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? fh(b2) : c2 = a2.memoizedState !== null;
      d2 && !c2 && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a2 === null || (P.current & 1) !== 0 ? W === 0 && (W = 3) : Si()));
      b2.updateQueue !== null && (b2.flags |= 4);
      V(b2);
      return null;
    case 4:
      return zh(), Mi(a2, b2), a2 === null && nf(b2.stateNode.containerInfo), V(b2), null;
    case 10:
      return lg(b2.type._context), V(b2), null;
    case 17:
      return Tf(b2.type) && Uf(), V(b2), null;
    case 19:
      G$1(P);
      f2 = b2.memoizedState;
      if (f2 === null)
        return V(b2), null;
      d2 = (b2.flags & 128) !== 0;
      g2 = f2.rendering;
      if (g2 === null)
        if (d2)
          Pi(f2, false);
        else {
          if (W !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = Ch(a2);
              if (g2 !== null) {
                b2.flags |= 128;
                Pi(f2, false);
                d2 = g2.updateQueue;
                d2 !== null && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                H$1(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && D$1() > Ti && (b2.flags |= 128, d2 = true, Pi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Ch(g2), a2 !== null) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Pi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !N)
              return V(b2), null;
          } else
            2 * D$1() - f2.renderingStartTime > Ti && c2 !== 1073741824 && (b2.flags |= 128, d2 = true, Pi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = D$1(), b2.sibling = null, c2 = P.current, H$1(P, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      V(b2);
      return null;
    case 22:
    case 23:
      return Ui(), d2 = b2.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d2 && (b2.flags |= 8192), d2 && (b2.mode & 1) !== 0 ? (Vi & 1073741824) !== 0 && (V(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : V(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$6(156, b2.tag));
}
var Wi = sa.ReactCurrentOwner, og = false;
function Xi(a2, b2, c2, d2) {
  b2.child = a2 === null ? sh(b2, null, c2, d2) : rh(b2, a2.child, c2, d2);
}
function Yi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ng(b2, e2);
  d2 = Nh(a2, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (a2 !== null && !og)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  N && c2 && Vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, d2, e2);
  return b2.child;
}
function $i(a2, b2, c2, d2, e2) {
  if (a2 === null) {
    var f2 = c2.type;
    if (typeof f2 === "function" && !aj(f2) && f2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
    a2 = oh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if ((a2.lanes & e2) === 0) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = c2 !== null ? c2 : De;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return Zi(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = mh(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function bj(a2, b2, c2, d2, e2) {
  if (a2 !== null && De(a2.memoizedProps, d2) && a2.ref === b2.ref)
    if (og = false, (a2.lanes & e2) !== 0)
      (a2.flags & 131072) !== 0 && (og = true);
    else
      return b2.lanes = a2.lanes, Zi(a2, b2, e2);
  return cj(a2, b2, c2, d2, e2);
}
function dj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null }, H$1(ej, Vi), Vi |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null }, d2 = f2 !== null ? f2.baseLanes : c2, H$1(ej, Vi), Vi |= d2;
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null }, b2.updateQueue = null, H$1(ej, Vi), Vi |= a2, null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, H$1(ej, Vi), Vi |= d2;
  Xi(a2, b2, e2, c2);
  return b2.child;
}
function fj(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d2, e2) {
  var f2 = Tf(c2) ? Rf : I$1.current;
  f2 = Sf(b2, f2);
  ng(b2, e2);
  c2 = Nh(a2, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (a2 !== null && !og)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  N && d2 && Vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, c2, e2);
  return b2.child;
}
function gj(a2, b2, c2, d2, e2) {
  if (Tf(c2)) {
    var f2 = true;
    Xf(b2);
  } else
    f2 = false;
  ng(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Hg(b2, c2, d2), Jg(b2, c2, d2, e2), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = pg(l2) : (l2 = Tf(c2) ? Rf : I$1.current, l2 = Sf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, w2 = typeof m2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    w2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ig(b2, g2, d2, l2);
    rg = false;
    var u2 = b2.memoizedState;
    g2.state = u2;
    yg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || u2 !== k2 || Qf.current || rg ? (typeof m2 === "function" && (Cg(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = rg || Gg(b2, c2, h2, d2, u2, k2, l2)) ? (w2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    tg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : fg(b2.type, h2);
    g2.props = l2;
    w2 = b2.pendingProps;
    u2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = pg(k2) : (k2 = Tf(c2) ? Rf : I$1.current, k2 = Sf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== w2 || u2 !== k2) && Ig(b2, g2, d2, k2);
    rg = false;
    u2 = b2.memoizedState;
    g2.state = u2;
    yg(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== w2 || u2 !== n2 || Qf.current || rg ? (typeof y2 === "function" && (Cg(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = rg || Gg(b2, c2, l2, d2, u2, n2, k2) || false) ? (m2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, n2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && u2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && u2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && u2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && u2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return hj(a2, b2, c2, d2, f2, e2);
}
function hj(a2, b2, c2, d2, e2, f2) {
  fj(a2, b2);
  var g2 = (b2.flags & 128) !== 0;
  if (!d2 && !g2)
    return e2 && Yf(b2, c2, false), Zi(a2, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = rh(b2, a2.child, null, f2), b2.child = rh(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Yf(b2, c2, true);
  return b2.child;
}
function ij(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Vf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Vf(a2, b2.context, false);
  yh(a2, b2.containerInfo);
}
function jj(a2, b2, c2, d2, e2) {
  gh();
  hh(e2);
  b2.flags |= 256;
  Xi(a2, b2, c2, d2);
  return b2.child;
}
var kj = { dehydrated: null, treeContext: null, retryLane: 0 };
function lj(a2) {
  return { baseLanes: a2, cachePool: null };
}
function mj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2 = (b2.flags & 128) !== 0, h2;
  (h2 = g2) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e2 |= 1;
  H$1(P, e2 & 1);
  if (a2 === null) {
    dh(b2);
    a2 = b2.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a2.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, e2 = { mode: "hidden", children: e2 }, (d2 & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e2) : f2 = nj(e2, d2, 0, null), a2 = qh(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = lj(c2), b2.memoizedState = kj, a2) : oj(b2, e2);
  }
  e2 = a2.memoizedState;
  if (e2 !== null) {
    h2 = e2.dehydrated;
    if (h2 !== null) {
      if (g2) {
        if (b2.flags & 256)
          return b2.flags &= -257, pj(a2, b2, c2, Error(p$6(422)));
        if (b2.memoizedState !== null)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = nj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = qh(f2, e2, c2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        (b2.mode & 1) !== 0 && rh(b2, a2.child, null, c2);
        b2.child.memoizedState = lj(c2);
        b2.memoizedState = kj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = pj(a2, b2, c2, null);
      else if (h2.data === "$!")
        b2 = pj(a2, b2, c2, Error(p$6(419)));
      else if (d2 = (c2 & a2.childLanes) !== 0, og || d2) {
        d2 = J;
        if (d2 !== null) {
          switch (c2 & -c2) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
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
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d2 = (f2 & (d2.suspendedLanes | c2)) !== 0 ? 0 : f2;
          d2 !== 0 && d2 !== e2.retryLane && (e2.retryLane = d2, Eg(a2, d2, -1));
        }
        Si();
        b2 = pj(a2, b2, c2, Error(p$6(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a2.child, b2 = qj.bind(null, a2), h2._reactRetry = b2, b2 = null) : (c2 = e2.treeContext, Yg = Ff(h2.nextSibling), Xg = b2, N = true, Zg = null, c2 !== null && (Og[Pg++] = Rg, Og[Pg++] = Sg, Og[Pg++] = Qg, Rg = c2.id, Sg = c2.overflow, Qg = b2), b2 = oj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d2 = rj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? lj(c2) : { baseLanes: e2.baseLanes | c2, cachePool: null }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = kj, d2;
    c2 = sj(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = rj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? lj(c2) : { baseLanes: e2.baseLanes | c2, cachePool: null }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = kj, d2;
  c2 = sj(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function oj(a2, b2) {
  b2 = nj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function sj(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = mh(e2, { mode: "visible", children: c2 });
  (b2.mode & 1) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (d2 = b2.deletions, d2 === null ? (b2.deletions = [a2], b2.flags |= 16) : d2.push(a2));
  return b2.child = c2;
}
function rj(a2, b2, c2, d2, e2) {
  var f2 = b2.mode;
  a2 = a2.child;
  var g2 = a2.sibling, h2 = { mode: "hidden", children: c2 };
  (f2 & 1) === 0 && b2.child !== a2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, b2.deletions = null) : (c2 = mh(a2, h2), c2.subtreeFlags = a2.subtreeFlags & 14680064);
  g2 !== null ? d2 = mh(g2, d2) : (d2 = qh(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function pj(a2, b2, c2, d2) {
  d2 !== null && hh(d2);
  rh(b2, a2.child, null, c2);
  a2 = oj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function tj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  d2 !== null && (d2.lanes |= b2);
  mg(a2.return, b2, c2);
}
function uj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  f2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function vj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a2, b2, d2.children, c2);
  d2 = P.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && tj(a2, c2, b2);
          else if (a2.tag === 19)
            tj(a2, c2, b2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  H$1(P, d2);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && Ch(a2) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        uj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && Ch(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        uj(b2, true, c2, null, f2);
        break;
      case "together":
        uj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function Zi(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  zg |= b2.lanes;
  if ((c2 & b2.childLanes) === 0)
    return null;
  if (a2 !== null && b2.child !== a2.child)
    throw Error(p$6(153));
  if (b2.child !== null) {
    a2 = b2.child;
    c2 = mh(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; a2.sibling !== null; )
      a2 = a2.sibling, c2 = c2.sibling = mh(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function wj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      ij(b2);
      gh();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Tf(b2.type) && Xf(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      H$1(gg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (d2 !== null) {
        if (d2.dehydrated !== null)
          return H$1(P, P.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return mj(a2, b2, c2);
        H$1(P, P.current & 1);
        a2 = Zi(a2, b2, c2);
        return a2 !== null ? a2.sibling : null;
      }
      H$1(P, P.current & 1);
      break;
    case 19:
      d2 = (c2 & b2.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d2)
          return vj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      H$1(P, P.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a2, b2, c2);
  }
  return Zi(a2, b2, c2);
}
function xj(a2, b2) {
  Wg(b2);
  switch (b2.tag) {
    case 1:
      return Tf(b2.type) && Uf(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return zh(), G$1(Qf), G$1(I$1), Eh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      G$1(P);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$6(340));
        gh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return G$1(P), null;
    case 4:
      return zh(), null;
    case 10:
      return lg(b2.type._context), null;
    case 22:
    case 23:
      return Ui(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yj = false, zj = false, Aj = typeof WeakSet === "function" ? WeakSet : Set, X = null;
function Bj(a2, b2) {
  var c2 = a2.ref;
  if (c2 !== null)
    if (typeof c2 === "function")
      try {
        c2(null);
      } catch (d2) {
        Cj(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Dj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    Cj(a2, b2, d2);
  }
}
var Ej = false;
function Fj(a2, b2) {
  a2 = He();
  if (Ie(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && d2.rangeCount !== 0) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (O2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, w2 = a2, u2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                w2 !== c2 || e2 !== 0 && w2.nodeType !== 3 || (h2 = g2 + e2);
                w2 !== f2 || d2 !== 0 && w2.nodeType !== 3 || (k2 = g2 + d2);
                w2.nodeType === 3 && (g2 += w2.nodeValue.length);
                if ((y2 = w2.firstChild) === null)
                  break;
                u2 = w2;
                w2 = y2;
              }
              for (; ; ) {
                if (w2 === a2)
                  break b;
                u2 === c2 && ++l2 === e2 && (h2 = g2);
                u2 === f2 && ++m2 === d2 && (k2 = g2);
                if ((y2 = w2.nextSibling) !== null)
                  break;
                w2 = u2;
                u2 = w2.parentNode;
              }
              w2 = y2;
            }
          c2 = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  xf = { focusedElem: a2, selectionRange: c2 };
  for (X = b2; X !== null; )
    if (b2 = X, a2 = b2.child, (b2.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b2, X = a2;
    else
      for (; X !== null; ) {
        b2 = X;
        try {
          var n2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (n2 !== null) {
                  var v2 = n2.memoizedProps, C2 = n2.memoizedState, t2 = b2.stateNode, r2 = t2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? v2 : fg(b2.type, v2), C2);
                  t2.__reactInternalSnapshotBeforeUpdate = r2;
                }
                break;
              case 3:
                var x2 = b2.stateNode.containerInfo;
                if (x2.nodeType === 1)
                  x2.textContent = "";
                else if (x2.nodeType === 9) {
                  var B2 = x2.body;
                  B2 != null && (B2.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$6(163));
            }
        } catch (O2) {
          Cj(b2, b2.return, O2);
        }
        a2 = b2.sibling;
        if (a2 !== null) {
          a2.return = b2.return;
          X = a2;
          break;
        }
        X = b2.return;
      }
  n2 = Ej;
  Ej = false;
  return n2;
}
function Gj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = d2 !== null ? d2.lastEffect : null;
  if (d2 !== null) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        f2 !== void 0 && Dj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Hj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Ij(a2) {
  var b2 = a2.ref;
  if (b2 !== null) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    typeof b2 === "function" ? b2(a2) : b2.current = a2;
  }
}
function Jj(a2, b2, c2) {
  if (ic && typeof ic.onCommitFiberUnmount === "function")
    try {
      ic.onCommitFiberUnmount(hc, b2);
    } catch (g2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var d2 = a2 = a2.next;
        do {
          var e2 = d2, f2 = e2.destroy;
          e2 = e2.tag;
          f2 !== void 0 && ((e2 & 2) !== 0 ? Dj(b2, c2, f2) : (e2 & 4) !== 0 && Dj(b2, c2, f2));
          d2 = d2.next;
        } while (d2 !== a2);
      }
      break;
    case 1:
      Bj(b2, c2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (g2) {
          Cj(b2, c2, g2);
        }
      break;
    case 5:
      Bj(b2, c2);
      break;
    case 4:
      Kj(a2, b2, c2);
  }
}
function Lj(a2) {
  var b2 = a2.alternate;
  b2 !== null && (a2.alternate = null, Lj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b2 = a2.stateNode, b2 !== null && (delete b2[If], delete b2[Jf], delete b2[jf], delete b2[Kf], delete b2[Lf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Mj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Nj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Mj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Oj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (Mj(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(p$6(160));
  }
  var c2 = b2;
  switch (c2.tag) {
    case 5:
      b2 = c2.stateNode;
      c2.flags & 32 && (lb(b2, ""), c2.flags &= -33);
      c2 = Nj(a2);
      Pj(a2, c2, b2);
      break;
    case 3:
    case 4:
      b2 = c2.stateNode.containerInfo;
      c2 = Nj(a2);
      Qj(a2, c2, b2);
      break;
    default:
      throw Error(p$6(161));
  }
}
function Qj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = wf));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Qj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Qj(a2, b2, c2), a2 = a2.sibling;
}
function Pj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Pj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Pj(a2, b2, c2), a2 = a2.sibling;
}
function Kj(a2, b2, c2) {
  for (var d2 = b2, e2 = false, f2, g2; ; ) {
    if (!e2) {
      e2 = d2.return;
      a:
        for (; ; ) {
          if (e2 === null)
            throw Error(p$6(160));
          f2 = e2.stateNode;
          switch (e2.tag) {
            case 5:
              g2 = false;
              break a;
            case 3:
              f2 = f2.containerInfo;
              g2 = true;
              break a;
            case 4:
              f2 = f2.containerInfo;
              g2 = true;
              break a;
          }
          e2 = e2.return;
        }
      e2 = true;
    }
    if (d2.tag === 5 || d2.tag === 6) {
      a:
        for (var h2 = a2, k2 = d2, l2 = c2, m2 = k2; ; )
          if (Jj(h2, m2, l2), m2.child !== null && m2.tag !== 4)
            m2.child.return = m2, m2 = m2.child;
          else {
            if (m2 === k2)
              break a;
            for (; m2.sibling === null; ) {
              if (m2.return === null || m2.return === k2)
                break a;
              m2 = m2.return;
            }
            m2.sibling.return = m2.return;
            m2 = m2.sibling;
          }
      g2 ? (h2 = f2, k2 = d2.stateNode, h2.nodeType === 8 ? h2.parentNode.removeChild(k2) : h2.removeChild(k2)) : f2.removeChild(d2.stateNode);
    } else if (d2.tag === 18)
      g2 ? (h2 = f2, k2 = d2.stateNode, h2.nodeType === 8 ? Ef(h2.parentNode, k2) : h2.nodeType === 1 && Ef(h2, k2), Yc(h2)) : Ef(f2, d2.stateNode);
    else if (d2.tag === 4) {
      if (d2.child !== null) {
        f2 = d2.stateNode.containerInfo;
        g2 = true;
        d2.child.return = d2;
        d2 = d2.child;
        continue;
      }
    } else if (Jj(a2, d2, c2), d2.child !== null) {
      d2.child.return = d2;
      d2 = d2.child;
      continue;
    }
    if (d2 === b2)
      break;
    for (; d2.sibling === null; ) {
      if (d2.return === null || d2.return === b2)
        return;
      d2 = d2.return;
      d2.tag === 4 && (e2 = false);
    }
    d2.sibling.return = d2.return;
    d2 = d2.sibling;
  }
}
function Rj(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Gj(3, b2, b2.return);
      Hj(3, b2);
      Gj(5, b2, b2.return);
      return;
    case 1:
      return;
    case 5:
      var c2 = b2.stateNode;
      if (c2 != null) {
        var d2 = b2.memoizedProps, e2 = a2 !== null ? a2.memoizedProps : d2;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          a2 === "input" && d2.type === "radio" && d2.name != null && Ya(c2, d2);
          sb(a2, e2);
          b2 = sb(a2, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            g2 === "style" ? pb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? kb(c2, h2) : g2 === "children" ? lb(c2, h2) : ra(c2, g2, h2, b2);
          }
          switch (a2) {
            case "input":
              Za(c2, d2);
              break;
            case "textarea":
              fb(c2, d2);
              break;
            case "select":
              a2 = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, f2 != null ? cb(c2, !!d2.multiple, f2, false) : a2 !== !!d2.multiple && (d2.defaultValue != null ? cb(c2, !!d2.multiple, d2.defaultValue, true) : cb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
          c2[Jf] = d2;
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(p$6(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      a2 !== null && a2.memoizedState.isDehydrated && Yc(b2.stateNode.containerInfo);
      return;
    case 12:
      return;
    case 13:
      Sj(b2);
      return;
    case 19:
      Sj(b2);
      return;
    case 17:
      return;
  }
  throw Error(p$6(163));
}
function Sj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Aj());
    b2.forEach(function(b3) {
      var d2 = Tj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function Uj(a2, b2) {
  for (X = b2; X !== null; ) {
    b2 = X;
    var c2 = b2.deletions;
    if (c2 !== null)
      for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        try {
          Kj(a2, e2, b2);
          var f2 = e2.alternate;
          f2 !== null && (f2.return = null);
          e2.return = null;
        } catch (L2) {
          Cj(e2, b2, L2);
        }
      }
    c2 = b2.child;
    if ((b2.subtreeFlags & 12854) !== 0 && c2 !== null)
      c2.return = b2, X = c2;
    else
      for (; X !== null; ) {
        b2 = X;
        try {
          var g2 = b2.flags;
          g2 & 32 && lb(b2.stateNode, "");
          if (g2 & 512) {
            var h2 = b2.alternate;
            if (h2 !== null) {
              var k2 = h2.ref;
              k2 !== null && (typeof k2 === "function" ? k2(null) : k2.current = null);
            }
          }
          if (g2 & 8192)
            switch (b2.tag) {
              case 13:
                if (b2.memoizedState !== null) {
                  var l2 = b2.alternate;
                  if (l2 === null || l2.memoizedState === null)
                    Vj = D$1();
                }
                break;
              case 22:
                var m2 = b2.memoizedState !== null, w2 = b2.alternate, u2 = w2 !== null && w2.memoizedState !== null;
                c2 = b2;
                a: {
                  d2 = c2;
                  e2 = m2;
                  for (var y2 = null, n2 = d2; ; ) {
                    if (n2.tag === 5) {
                      if (y2 === null) {
                        y2 = n2;
                        var v2 = n2.stateNode;
                        if (e2) {
                          var C2 = v2.style;
                          typeof C2.setProperty === "function" ? C2.setProperty("display", "none", "important") : C2.display = "none";
                        } else {
                          var t2 = n2.stateNode, r2 = n2.memoizedProps.style, x2 = r2 !== void 0 && r2 !== null && r2.hasOwnProperty("display") ? r2.display : null;
                          t2.style.display = ob("display", x2);
                        }
                      }
                    } else if (n2.tag === 6)
                      y2 === null && (n2.stateNode.nodeValue = e2 ? "" : n2.memoizedProps);
                    else if ((n2.tag !== 22 && n2.tag !== 23 || n2.memoizedState === null || n2 === d2) && n2.child !== null) {
                      n2.child.return = n2;
                      n2 = n2.child;
                      continue;
                    }
                    if (n2 === d2)
                      break;
                    for (; n2.sibling === null; ) {
                      if (n2.return === null || n2.return === d2)
                        break a;
                      y2 === n2 && (y2 = null);
                      n2 = n2.return;
                    }
                    y2 === n2 && (y2 = null);
                    n2.sibling.return = n2.return;
                    n2 = n2.sibling;
                  }
                }
                if (m2 && !u2 && (c2.mode & 1) !== 0) {
                  X = c2;
                  for (var B2 = c2.child; B2 !== null; ) {
                    for (c2 = X = B2; X !== null; ) {
                      d2 = X;
                      var O2 = d2.child;
                      switch (d2.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          Gj(4, d2, d2.return);
                          break;
                        case 1:
                          Bj(d2, d2.return);
                          var T2 = d2.stateNode;
                          if (typeof T2.componentWillUnmount === "function") {
                            var za = d2.return;
                            try {
                              T2.props = d2.memoizedProps, T2.state = d2.memoizedState, T2.componentWillUnmount();
                            } catch (L2) {
                              Cj(d2, za, L2);
                            }
                          }
                          break;
                        case 5:
                          Bj(d2, d2.return);
                          break;
                        case 22:
                          if (d2.memoizedState !== null) {
                            Wj(c2);
                            continue;
                          }
                      }
                      O2 !== null ? (O2.return = d2, X = O2) : Wj(c2);
                    }
                    B2 = B2.sibling;
                  }
                }
            }
          switch (g2 & 4102) {
            case 2:
              Oj(b2);
              b2.flags &= -3;
              break;
            case 6:
              Oj(b2);
              b2.flags &= -3;
              Rj(b2.alternate, b2);
              break;
            case 4096:
              b2.flags &= -4097;
              break;
            case 4100:
              b2.flags &= -4097;
              Rj(b2.alternate, b2);
              break;
            case 4:
              Rj(b2.alternate, b2);
          }
        } catch (L2) {
          Cj(b2, b2.return, L2);
        }
        c2 = b2.sibling;
        if (c2 !== null) {
          c2.return = b2.return;
          X = c2;
          break;
        }
        X = b2.return;
      }
  }
}
function Xj(a2, b2, c2) {
  X = a2;
  Yj(a2);
}
function Yj(a2, b2, c2) {
  for (var d2 = (a2.mode & 1) !== 0; X !== null; ) {
    var e2 = X, f2 = e2.child;
    if (e2.tag === 22 && d2) {
      var g2 = e2.memoizedState !== null || yj;
      if (!g2) {
        var h2 = e2.alternate, k2 = h2 !== null && h2.memoizedState !== null || zj;
        h2 = yj;
        var l2 = zj;
        yj = g2;
        if ((zj = k2) && !l2)
          for (X = e2; X !== null; )
            g2 = X, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? Zj(e2) : k2 !== null ? (k2.return = g2, X = k2) : Zj(e2);
        for (; f2 !== null; )
          X = f2, Yj(f2), f2 = f2.sibling;
        X = e2;
        yj = h2;
        zj = l2;
      }
      ak(a2);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e2, X = f2) : ak(a2);
  }
}
function ak(a2) {
  for (; X !== null; ) {
    var b2 = X;
    if ((b2.flags & 8772) !== 0) {
      var c2 = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              zj || Hj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !zj)
                if (c2 === null)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : fg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Ag(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (g2 !== null) {
                c2 = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                Ag(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c2 === null && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l2 = b2.alternate;
                if (l2 !== null) {
                  var m2 = l2.memoizedState;
                  if (m2 !== null) {
                    var w2 = m2.dehydrated;
                    w2 !== null && Yc(w2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p$6(163));
          }
        zj || b2.flags & 512 && Ij(b2);
      } catch (u2) {
        Cj(b2, b2.return, u2);
      }
    }
    if (b2 === a2) {
      X = null;
      break;
    }
    c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      X = c2;
      break;
    }
    X = b2.return;
  }
}
function Wj(a2) {
  for (; X !== null; ) {
    var b2 = X;
    if (b2 === a2) {
      X = null;
      break;
    }
    var c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      X = c2;
      break;
    }
    X = b2.return;
  }
}
function Zj(a2) {
  for (; X !== null; ) {
    var b2 = X;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Hj(4, b2);
          } catch (k2) {
            Cj(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if (typeof d2.componentDidMount === "function") {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              Cj(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Ij(b2);
          } catch (k2) {
            Cj(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Ij(b2);
          } catch (k2) {
            Cj(b2, g2, k2);
          }
      }
    } catch (k2) {
      Cj(b2, b2.return, k2);
    }
    if (b2 === a2) {
      X = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      X = h2;
      break;
    }
    X = b2.return;
  }
}
var bk = Math.ceil, ck = sa.ReactCurrentDispatcher, dk = sa.ReactCurrentOwner, ek = sa.ReactCurrentBatchConfig, K = 0, J = null, Y = null, Z = 0, Vi = 0, ej = Of(0), W = 0, fk = null, zg = 0, gk = 0, hk = 0, ik = null, jk = null, Vj = 0, Ti = Infinity, Di = false, Ei = null, Gi = null, kk = false, lk = null, mk = 0, nk = 0, ok = null, pk = -1, qk = 0;
function M() {
  return (K & 6) !== 0 ? D$1() : pk !== -1 ? pk : pk = D$1();
}
function Dg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((K & 2) !== 0 && Z !== 0)
    return Z & -Z;
  if (eg.transition !== null)
    return qk === 0 && (a2 = oc, oc <<= 1, (oc & 4194240) === 0 && (oc = 64), qk = a2), qk;
  a2 = E$1;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : ed(a2.type);
  return a2;
}
function Eg(a2, b2, c2) {
  if (50 < nk)
    throw nk = 0, ok = null, Error(p$6(185));
  var d2 = rk(a2, b2);
  if (d2 === null)
    return null;
  wc(d2, b2, c2);
  if ((K & 2) === 0 || d2 !== J)
    d2 === J && ((K & 2) === 0 && (gk |= b2), W === 4 && sk(d2, Z)), tk(d2, c2), b2 === 1 && K === 0 && (a2.mode & 1) === 0 && (Ti = D$1() + 500, $f && dg());
  return d2;
}
function rk(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function tk(a2, b2) {
  var c2 = a2.callbackNode;
  tc(a2, b2);
  var d2 = rc(a2, a2 === J ? Z : 0);
  if (d2 === 0)
    c2 !== null && Zb(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    c2 != null && Zb(c2);
    if (b2 === 1)
      a2.tag === 0 ? cg(uk.bind(null, a2)) : bg(uk.bind(null, a2)), Df(function() {
        K === 0 && dg();
      }), c2 = null;
    else {
      switch (zc(d2)) {
        case 1:
          c2 = cc;
          break;
        case 4:
          c2 = dc;
          break;
        case 16:
          c2 = ec;
          break;
        case 536870912:
          c2 = gc;
          break;
        default:
          c2 = ec;
      }
      c2 = vk(c2, wk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function wk(a2, b2) {
  pk = -1;
  qk = 0;
  if ((K & 6) !== 0)
    throw Error(p$6(327));
  var c2 = a2.callbackNode;
  if (xk() && a2.callbackNode !== c2)
    return null;
  var d2 = rc(a2, a2 === J ? Z : 0);
  if (d2 === 0)
    return null;
  if ((d2 & 30) !== 0 || (d2 & a2.expiredLanes) !== 0 || b2)
    b2 = yk(a2, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = zk();
    if (J !== a2 || Z !== b2)
      Ti = D$1() + 500, Ak(a2, b2);
    do
      try {
        Bk();
        break;
      } catch (h2) {
        Ck(a2, h2);
      }
    while (1);
    kg();
    ck.current = f2;
    K = e2;
    Y !== null ? b2 = 0 : (J = null, Z = 0, b2 = W);
  }
  if (b2 !== 0) {
    b2 === 2 && (e2 = uc(a2), e2 !== 0 && (d2 = e2, b2 = Dk(a2, e2)));
    if (b2 === 1)
      throw c2 = fk, Ak(a2, 0), sk(a2, d2), tk(a2, D$1()), c2;
    if (b2 === 6)
      sk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if ((d2 & 30) === 0 && !Ek(e2) && (b2 = yk(a2, d2), b2 === 2 && (f2 = uc(a2), f2 !== 0 && (d2 = f2, b2 = Dk(a2, f2))), b2 === 1))
        throw c2 = fk, Ak(a2, 0), sk(a2, d2), tk(a2, D$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$6(345));
        case 2:
          Fk(a2, jk);
          break;
        case 3:
          sk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = Vj + 500 - D$1(), 10 < b2)) {
            if (rc(a2, 0) !== 0)
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              M();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = zf(Fk.bind(null, a2, jk), b2);
            break;
          }
          Fk(a2, jk);
          break;
        case 4:
          sk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - lc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = D$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * bk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = zf(Fk.bind(null, a2, jk), d2);
            break;
          }
          Fk(a2, jk);
          break;
        case 5:
          Fk(a2, jk);
          break;
        default:
          throw Error(p$6(329));
      }
    }
  }
  tk(a2, D$1());
  return a2.callbackNode === c2 ? wk.bind(null, a2) : null;
}
function Dk(a2, b2) {
  var c2 = ik;
  a2.current.memoizedState.isDehydrated && (Ak(a2, b2).flags |= 256);
  a2 = yk(a2, b2);
  a2 !== 2 && (b2 = jk, jk = c2, b2 !== null && Ri(b2));
  return a2;
}
function Ri(a2) {
  jk === null ? jk = a2 : jk.push.apply(jk, a2);
}
function Ek(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (c2 !== null && (c2 = c2.stores, c2 !== null))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!Ce(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && c2 !== null)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function sk(a2, b2) {
  b2 &= ~hk;
  b2 &= ~gk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - lc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function uk(a2) {
  if ((K & 6) !== 0)
    throw Error(p$6(327));
  xk();
  var b2 = rc(a2, 0);
  if ((b2 & 1) === 0)
    return tk(a2, D$1()), null;
  var c2 = yk(a2, b2);
  if (a2.tag !== 0 && c2 === 2) {
    var d2 = uc(a2);
    d2 !== 0 && (b2 = d2, c2 = Dk(a2, d2));
  }
  if (c2 === 1)
    throw c2 = fk, Ak(a2, 0), sk(a2, b2), tk(a2, D$1()), c2;
  if (c2 === 6)
    throw Error(p$6(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Fk(a2, jk);
  tk(a2, D$1());
  return null;
}
function Gk(a2, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a2(b2);
  } finally {
    K = c2, K === 0 && (Ti = D$1() + 500, $f && dg());
  }
}
function Hk(a2) {
  lk !== null && lk.tag === 0 && (K & 6) === 0 && xk();
  var b2 = K;
  K |= 1;
  var c2 = ek.transition, d2 = E$1;
  try {
    if (ek.transition = null, E$1 = 1, a2)
      return a2();
  } finally {
    E$1 = d2, ek.transition = c2, K = b2, (K & 6) === 0 && dg();
  }
}
function Ui() {
  Vi = ej.current;
  G$1(ej);
}
function Ak(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, Af(c2));
  if (Y !== null)
    for (c2 = Y.return; c2 !== null; ) {
      var d2 = c2;
      Wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Uf();
          break;
        case 3:
          zh();
          G$1(Qf);
          G$1(I$1);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          G$1(P);
          break;
        case 19:
          G$1(P);
          break;
        case 10:
          lg(d2.type._context);
          break;
        case 22:
        case 23:
          Ui();
      }
      c2 = c2.return;
    }
  J = a2;
  Y = a2 = mh(a2.current, null);
  Z = Vi = b2;
  W = 0;
  fk = null;
  hk = gk = zg = 0;
  jk = ik = null;
  if (qg !== null) {
    for (b2 = 0; b2 < qg.length; b2++)
      if (c2 = qg[b2], d2 = c2.interleaved, d2 !== null) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (f2 !== null) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    qg = null;
  }
  return a2;
}
function Ck(a2, b2) {
  do {
    var c2 = Y;
    try {
      kg();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = Q.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      S = R = Q = null;
      Jh = false;
      Kh = 0;
      dk.current = null;
      if (c2 === null || c2.return === null) {
        W = 1;
        fk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2, m2 = h2, w2 = m2.tag;
          if ((m2.mode & 1) === 0 && (w2 === 0 || w2 === 11 || w2 === 15)) {
            var u2 = m2.alternate;
            u2 ? (m2.updateQueue = u2.updateQueue, m2.memoizedState = u2.memoizedState, m2.lanes = u2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ji(g2);
          if (y2 !== null) {
            y2.flags &= -257;
            Ki(y2, g2, h2, f2, b2);
            y2.mode & 1 && Hi(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (n2 === null) {
              var v2 = /* @__PURE__ */ new Set();
              v2.add(k2);
              b2.updateQueue = v2;
            } else
              n2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Hi(f2, l2, b2);
              Si();
              break a;
            }
            k2 = Error(p$6(426));
          }
        } else if (N && h2.mode & 1) {
          var C2 = Ji(g2);
          if (C2 !== null) {
            (C2.flags & 65536) === 0 && (C2.flags |= 256);
            Ki(C2, g2, h2, f2, b2);
            hh(k2);
            break a;
          }
        }
        f2 = k2;
        W !== 4 && (W = 2);
        ik === null ? ik = [f2] : ik.push(f2);
        k2 = zi(k2, h2);
        h2 = g2;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var t2 = Ci(h2, k2, b2);
              xg(h2, t2);
              break a;
            case 1:
              f2 = k2;
              var r2 = h2.type, x2 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof r2.getDerivedStateFromError === "function" || x2 !== null && typeof x2.componentDidCatch === "function" && (Gi === null || !Gi.has(x2)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var B2 = Fi(h2, f2, b2);
                xg(h2, B2);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Ik(c2);
    } catch (O2) {
      b2 = O2;
      Y === c2 && c2 !== null && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function zk() {
  var a2 = ck.current;
  ck.current = Rh;
  return a2 === null ? Rh : a2;
}
function Si() {
  if (W === 0 || W === 3 || W === 2)
    W = 4;
  J === null || (zg & 268435455) === 0 && (gk & 268435455) === 0 || sk(J, Z);
}
function yk(a2, b2) {
  var c2 = K;
  K |= 2;
  var d2 = zk();
  J === a2 && Z === b2 || Ak(a2, b2);
  do
    try {
      Jk();
      break;
    } catch (e2) {
      Ck(a2, e2);
    }
  while (1);
  kg();
  K = c2;
  ck.current = d2;
  if (Y !== null)
    throw Error(p$6(261));
  J = null;
  Z = 0;
  return W;
}
function Jk() {
  for (; Y !== null; )
    Kk(Y);
}
function Bk() {
  for (; Y !== null && !$b(); )
    Kk(Y);
}
function Kk(a2) {
  var b2 = Lk(a2.alternate, a2, Vi);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Ik(a2) : Y = b2;
  dk.current = null;
}
function Ik(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c2 = Qi(c2, b2, Vi), c2 !== null) {
        Y = c2;
        return;
      }
    } else {
      c2 = xj(c2, b2);
      if (c2 !== null) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        W = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (b2 !== null);
  W === 0 && (W = 5);
}
function Fk(a2, b2) {
  var c2 = E$1, d2 = ek.transition;
  try {
    ek.transition = null, E$1 = 1, Mk(a2, b2, c2);
  } finally {
    ek.transition = d2, E$1 = c2;
  }
  return null;
}
function Mk(a2, b2, c2) {
  do
    xk();
  while (lk !== null);
  if ((K & 6) !== 0)
    throw Error(p$6(327));
  var d2 = a2.finishedWork, e2 = a2.finishedLanes;
  if (d2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (d2 === a2.current)
    throw Error(p$6(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = d2.lanes | d2.childLanes;
  xc(a2, f2);
  a2 === J && (Y = J = null, Z = 0);
  (d2.subtreeFlags & 2064) === 0 && (d2.flags & 2064) === 0 || kk || (kk = true, vk(ec, function() {
    xk();
    return null;
  }));
  f2 = (d2.flags & 15990) !== 0;
  if ((d2.subtreeFlags & 15990) !== 0 || f2) {
    f2 = ek.transition;
    ek.transition = null;
    var g2 = E$1;
    E$1 = 1;
    var h2 = K;
    K |= 4;
    dk.current = null;
    Fj(a2, d2);
    Uj(a2, d2);
    Je(xf);
    xf = null;
    a2.current = d2;
    Xj(d2);
    ac();
    K = h2;
    E$1 = g2;
    ek.transition = f2;
  } else
    a2.current = d2;
  kk && (kk = false, lk = a2, mk = e2);
  f2 = a2.pendingLanes;
  f2 === 0 && (Gi = null);
  jc(d2.stateNode);
  tk(a2, D$1());
  if (b2 !== null)
    for (c2 = a2.onRecoverableError, d2 = 0; d2 < b2.length; d2++)
      c2(b2[d2]);
  if (Di)
    throw Di = false, a2 = Ei, Ei = null, a2;
  (mk & 1) !== 0 && a2.tag !== 0 && xk();
  f2 = a2.pendingLanes;
  (f2 & 1) !== 0 ? a2 === ok ? nk++ : (nk = 0, ok = a2) : nk = 0;
  dg();
  return null;
}
function xk() {
  if (lk !== null) {
    var a2 = zc(mk), b2 = ek.transition, c2 = E$1;
    try {
      ek.transition = null;
      E$1 = 16 > a2 ? 16 : a2;
      if (lk === null)
        var d2 = false;
      else {
        a2 = lk;
        lk = null;
        mk = 0;
        if ((K & 6) !== 0)
          throw Error(p$6(331));
        var e2 = K;
        K |= 4;
        for (X = a2.current; X !== null; ) {
          var f2 = X, g2 = f2.child;
          if ((X.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (X = l2; X !== null; ) {
                  var m2 = X;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gj(8, m2, f2);
                  }
                  var w2 = m2.child;
                  if (w2 !== null)
                    w2.return = m2, X = w2;
                  else
                    for (; X !== null; ) {
                      m2 = X;
                      var u2 = m2.sibling, y2 = m2.return;
                      Lj(m2);
                      if (m2 === l2) {
                        X = null;
                        break;
                      }
                      if (u2 !== null) {
                        u2.return = y2;
                        X = u2;
                        break;
                      }
                      X = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (n2 !== null) {
                var v2 = n2.child;
                if (v2 !== null) {
                  n2.child = null;
                  do {
                    var C2 = v2.sibling;
                    v2.sibling = null;
                    v2 = C2;
                  } while (v2 !== null);
                }
              }
              X = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
            g2.return = f2, X = g2;
          else
            b:
              for (; X !== null; ) {
                f2 = X;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gj(9, f2, f2.return);
                  }
                var t2 = f2.sibling;
                if (t2 !== null) {
                  t2.return = f2.return;
                  X = t2;
                  break b;
                }
                X = f2.return;
              }
        }
        var r2 = a2.current;
        for (X = r2; X !== null; ) {
          g2 = X;
          var x2 = g2.child;
          if ((g2.subtreeFlags & 2064) !== 0 && x2 !== null)
            x2.return = g2, X = x2;
          else
            b:
              for (g2 = r2; X !== null; ) {
                h2 = X;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hj(9, h2);
                    }
                  } catch (O2) {
                    Cj(h2, h2.return, O2);
                  }
                if (h2 === g2) {
                  X = null;
                  break b;
                }
                var B2 = h2.sibling;
                if (B2 !== null) {
                  B2.return = h2.return;
                  X = B2;
                  break b;
                }
                X = h2.return;
              }
        }
        K = e2;
        dg();
        if (ic && typeof ic.onPostCommitFiberRoot === "function")
          try {
            ic.onPostCommitFiberRoot(hc, a2);
          } catch (O2) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      E$1 = c2, ek.transition = b2;
    }
  }
  return false;
}
function Nk(a2, b2, c2) {
  b2 = zi(c2, b2);
  b2 = Ci(a2, b2, 1);
  vg(a2, b2);
  b2 = M();
  a2 = rk(a2, 1);
  a2 !== null && (wc(a2, 1, b2), tk(a2, b2));
}
function Cj(a2, b2, c2) {
  if (a2.tag === 3)
    Nk(a2, a2, c2);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Nk(b2, a2, c2);
        break;
      } else if (b2.tag === 1) {
        var d2 = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Gi === null || !Gi.has(d2))) {
          a2 = zi(c2, a2);
          a2 = Fi(b2, a2, 1);
          vg(b2, a2);
          a2 = M();
          b2 = rk(b2, 1);
          b2 !== null && (wc(b2, 1, a2), tk(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ii(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = M();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  J === a2 && (Z & c2) === c2 && (W === 4 || W === 3 && (Z & 130023424) === Z && 500 > D$1() - Vj ? Ak(a2, 0) : hk |= c2);
  tk(a2, b2);
}
function Ok(a2, b2) {
  b2 === 0 && ((a2.mode & 1) === 0 ? b2 = 1 : (b2 = pc, pc <<= 1, (pc & 130023424) === 0 && (pc = 4194304)));
  var c2 = M();
  a2 = rk(a2, b2);
  a2 !== null && (wc(a2, b2, c2), tk(a2, c2));
}
function qj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  b2 !== null && (c2 = b2.retryLane);
  Ok(a2, c2);
}
function Tj(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      e2 !== null && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$6(314));
  }
  d2 !== null && d2.delete(b2);
  Ok(a2, c2);
}
var Lk;
Lk = function(a2, b2, c2) {
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || Qf.current)
      og = true;
    else {
      if ((a2.lanes & c2) === 0 && (b2.flags & 128) === 0)
        return og = false, wj(a2, b2, c2);
      og = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    og = false, N && (b2.flags & 1048576) !== 0 && Ug(b2, Ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      var e2 = Sf(b2, I$1.current);
      ng(b2, c2);
      e2 = Nh(null, b2, d2, a2, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Tf(d2) ? (f2 = true, Xf(b2)) : f2 = false, b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, sg(b2), e2.updater = Fg, b2.stateNode = e2, e2._reactInternals = b2, Jg(b2, d2, a2, c2), b2 = hj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, N && f2 && Vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Pk(d2);
        a2 = fg(d2, a2);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = gj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, fg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$6(306, d2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : fg(d2, e2), cj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : fg(d2, e2), gj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        ij(b2);
        if (a2 === null)
          throw Error(p$6(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        tg(a2, b2);
        yg(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d2,
            isDehydrated: false,
            cache: g2.cache,
            transitions: g2.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Error(p$6(423));
            b2 = jj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Error(p$6(424));
            b2 = jj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (Yg = Ff(b2.stateNode.containerInfo.firstChild), Xg = b2, N = true, Zg = null, c2 = sh(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          gh();
          if (d2 === e2) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
          Xi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), a2 === null && dh(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, yf(d2, e2) ? g2 = null : f2 !== null && yf(d2, f2) && (b2.flags |= 32), fj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && dh(b2), null;
    case 13:
      return mj(a2, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = rh(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : fg(d2, e2), Yi(a2, b2, d2, e2, c2);
    case 7:
      return Xi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        H$1(gg, d2._currentValue);
        d2._currentValue = g2;
        if (f2 !== null)
          if (Ce(f2.value, g2)) {
            if (f2.children === e2.children && !Qf.current) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d2) {
                    if (f2.tag === 1) {
                      k2 = ug(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        m2 === null ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c2);
                    mg(f2.return, c2, b2);
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g2 = f2.return;
                if (g2 === null)
                  throw Error(p$6(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                h2 !== null && (h2.lanes |= c2);
                mg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (g2 !== null)
                g2.return = f2;
              else
                for (g2 = f2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (f2 !== null) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Xi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ng(b2, c2), e2 = pg(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = fg(d2, b2.pendingProps), e2 = fg(d2.type, e2), $i(a2, b2, d2, e2, c2);
    case 15:
      return bj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : fg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Tf(d2) ? (a2 = true, Xf(b2)) : a2 = false, ng(b2, c2), Hg(b2, d2, e2), Jg(b2, d2, e2, c2), hj(null, b2, d2, true, a2, c2);
    case 19:
      return vj(a2, b2, c2);
    case 22:
      return dj(a2, b2, c2);
  }
  throw Error(p$6(156, b2.tag));
};
function vk(a2, b2) {
  return Yb(a2, b2);
}
function Qk(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function ah(a2, b2, c2, d2) {
  return new Qk(a2, b2, c2, d2);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Pk(a2) {
  if (typeof a2 === "function")
    return aj(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Ba)
      return 11;
    if (a2 === Ea)
      return 14;
  }
  return 2;
}
function mh(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = ah(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function oh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    aj(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case va:
          return qh(c2.children, e2, f2, b2);
        case wa:
          g2 = 8;
          e2 |= 8;
          break;
        case xa:
          return a2 = ah(12, c2, b2, e2 | 2), a2.elementType = xa, a2.lanes = f2, a2;
        case Ca:
          return a2 = ah(13, c2, b2, e2), a2.elementType = Ca, a2.lanes = f2, a2;
        case Da:
          return a2 = ah(19, c2, b2, e2), a2.elementType = Da, a2.lanes = f2, a2;
        case Ga:
          return nj(c2, e2, f2, b2);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case Aa:
                g2 = 9;
                break a;
              case Ba:
                g2 = 11;
                break a;
              case Ea:
                g2 = 14;
                break a;
              case Fa:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$6(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = ah(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function qh(a2, b2, c2, d2) {
  a2 = ah(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function nj(a2, b2, c2, d2) {
  a2 = ah(22, a2, d2, b2);
  a2.elementType = Ga;
  a2.lanes = c2;
  a2.stateNode = {};
  return a2;
}
function nh(a2, b2, c2) {
  a2 = ah(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function ph(a2, b2, c2) {
  b2 = ah(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function Rk(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = vc(0);
  this.expirationTimes = vc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = vc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function Sk(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new Rk(a2, b2, c2, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = ah(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null };
  sg(f2);
  return a2;
}
function Tk(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ua, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function Uk(a2) {
  if (!a2)
    return Pf;
  a2 = a2._reactInternals;
  a: {
    if (Sb(a2) !== a2 || a2.tag !== 1)
      throw Error(p$6(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Tf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p$6(171));
  }
  if (a2.tag === 1) {
    var c2 = a2.type;
    if (Tf(c2))
      return Wf(a2, c2, b2);
  }
  return b2;
}
function Vk(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = Sk(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = Uk(null);
  c2 = a2.current;
  d2 = M();
  e2 = Dg(c2);
  f2 = ug(d2, e2);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  vg(c2, f2);
  a2.current.lanes = e2;
  wc(a2, e2, d2);
  tk(a2, d2);
  return a2;
}
function Wk(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = M(), g2 = Dg(e2);
  c2 = Uk(c2);
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ug(f2, g2);
  b2.payload = { element: a2 };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  vg(e2, b2);
  a2 = Eg(e2, g2, f2);
  a2 !== null && wg(a2, e2, g2);
  return g2;
}
function Xk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function Yk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function Zk(a2, b2) {
  Yk(a2, b2);
  (a2 = a2.alternate) && Yk(a2, b2);
}
function $k() {
  return null;
}
var al = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function bl(a2) {
  this._internalRoot = a2;
}
cl.prototype.render = bl.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p$6(409));
  Wk(a2, b2, null, null);
};
cl.prototype.unmount = bl.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Hk(function() {
      Wk(null, a2, null, null);
    });
    b2[pf] = null;
  }
};
function cl(a2) {
  this._internalRoot = a2;
}
cl.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Dc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Mc.length && b2 !== 0 && b2 < Mc[c2].priority; c2++)
      ;
    Mc.splice(c2, 0, a2);
    c2 === 0 && Rc(a2);
  }
};
function dl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function el(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function fl() {
}
function gl(a2, b2, c2, d2, e2) {
  if (e2) {
    if (typeof d2 === "function") {
      var f2 = d2;
      d2 = function() {
        var a3 = Xk(g2);
        f2.call(a3);
      };
    }
    var g2 = Vk(b2, d2, a2, 0, null, false, false, "", fl);
    a2._reactRootContainer = g2;
    a2[pf] = g2.current;
    nf(a2.nodeType === 8 ? a2.parentNode : a2);
    Hk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if (typeof d2 === "function") {
    var h2 = d2;
    d2 = function() {
      var a3 = Xk(k2);
      h2.call(a3);
    };
  }
  var k2 = Sk(a2, 0, false, null, null, false, false, "", fl);
  a2._reactRootContainer = k2;
  a2[pf] = k2.current;
  nf(a2.nodeType === 8 ? a2.parentNode : a2);
  Hk(function() {
    Wk(b2, k2, c2, d2);
  });
  return k2;
}
function hl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = Xk(g2);
        h2.call(a3);
      };
    }
    Wk(b2, g2, a2, e2);
  } else
    g2 = gl(c2, b2, a2, e2, d2);
  return Xk(g2);
}
Ac = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = qc(b2.pendingLanes);
        c2 !== 0 && (yc(b2, c2 | 1), tk(b2, D$1()), (K & 6) === 0 && (Ti = D$1() + 500, dg()));
      }
      break;
    case 13:
      var d2 = M();
      Hk(function() {
        return Eg(a2, 1, d2);
      });
      Zk(a2, 1);
  }
};
Bc = function(a2) {
  if (a2.tag === 13) {
    var b2 = M();
    Eg(a2, 134217728, b2);
    Zk(a2, 134217728);
  }
};
Cc = function(a2) {
  if (a2.tag === 13) {
    var b2 = M(), c2 = Dg(a2);
    Eg(a2, c2, b2);
    Zk(a2, c2);
  }
};
Dc = function() {
  return E$1;
};
Ec = function(a2, b2) {
  var c2 = E$1;
  try {
    return E$1 = a2, b2();
  } finally {
    E$1 = c2;
  }
};
vb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      Za(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Ab(d2);
            if (!e2)
              throw Error(p$6(90));
            Ua(d2);
            Za(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      fb(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && cb(a2, !!c2.multiple, b2, false);
  }
};
Db = Gk;
Eb = Hk;
var il = { usingClientEntryPoint: false, Events: [zb, pe, Ab, Bb, Cb, Gk] }, jl = { findFiberByHostInstance: Sc, bundleType: 0, version: "18.0.0-fc46dba67-20220329", rendererPackageName: "react-dom" };
var kl = { bundleType: jl.bundleType, version: jl.version, rendererPackageName: jl.rendererPackageName, rendererConfig: jl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: sa.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Wb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: jl.findFiberByHostInstance || $k, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ll.isDisabled && ll.supportsFiber)
    try {
      hc = ll.inject(kl), ic = ll;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = il;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dl(b2))
    throw Error(p$6(200));
  return Tk(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!dl(a2))
    throw Error(p$6(299));
  var c2 = false, d2 = "", e2 = al;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c2 = true), b2.identifierPrefix !== void 0 && (d2 = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e2 = b2.onRecoverableError));
  b2 = Sk(a2, 1, false, null, null, c2, false, d2, e2);
  a2[pf] = b2.current;
  nf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new bl(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p$6(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$6(268, a2));
  }
  a2 = Wb(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Hk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!el(b2))
    throw Error(p$6(200));
  return hl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!dl(a2))
    throw Error(p$6(405));
  var d2 = c2 != null && c2.hydratedSources || null, e2 = false, f2 = "", g2 = al;
  c2 !== null && c2 !== void 0 && (c2.unstable_strictMode === true && (e2 = true), c2.identifierPrefix !== void 0 && (f2 = c2.identifierPrefix), c2.onRecoverableError !== void 0 && (g2 = c2.onRecoverableError));
  b2 = Vk(b2, null, a2, 1, c2 != null ? c2 : null, e2, false, f2, g2);
  a2[pf] = b2.current;
  nf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(c2, e2);
  return new cl(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!el(b2))
    throw Error(p$6(200));
  return hl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!el(a2))
    throw Error(p$6(40));
  return a2._reactRootContainer ? (Hk(function() {
    hl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[pf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Gk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!el(c2))
    throw Error(p$6(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p$6(38));
  return hl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.0.0-fc46dba67-20220329";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
var createRoot;
var m$5 = reactDom.exports;
{
  createRoot = m$5.createRoot;
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var changedArray = function changedArray2(a2, b2) {
  if (a2 === void 0) {
    a2 = [];
  }
  if (b2 === void 0) {
    b2 = [];
  }
  return a2.length !== b2.length || a2.some(function(item, index) {
    return !Object.is(item, b2[index]);
  });
};
var initialState$1 = {
  error: null
};
var ErrorBoundary = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(ErrorBoundary2, _React$Component);
  function ErrorBoundary2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = initialState$1;
    _this.resetErrorBoundary = function() {
      var _this$props;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);
      _this.reset();
    };
    return _this;
  }
  ErrorBoundary2.getDerivedStateFromError = function getDerivedStateFromError(error) {
    return {
      error
    };
  };
  var _proto = ErrorBoundary2.prototype;
  _proto.reset = function reset() {
    this.setState(initialState$1);
  };
  _proto.componentDidCatch = function componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var error = this.state.error;
    var resetKeys = this.props.resetKeys;
    if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      var _this$props$onResetKe, _this$props3;
      (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
      this.reset();
    }
  };
  _proto.render = function render() {
    var error = this.state.error;
    var _this$props4 = this.props, fallbackRender = _this$props4.fallbackRender, FallbackComponent = _this$props4.FallbackComponent, fallback = _this$props4.fallback;
    if (error !== null) {
      var _props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ react.exports.isValidElement(fallback)) {
        return fallback;
      } else if (typeof fallbackRender === "function") {
        return fallbackRender(_props);
      } else if (FallbackComponent) {
        return /* @__PURE__ */ react.exports.createElement(FallbackComponent, _props);
      } else {
        throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
    }
    return this.props.children;
  };
  return ErrorBoundary2;
}(react.exports.Component);
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$3 = react.exports;
function h$4(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$4 = typeof Object.is === "function" ? Object.is : h$4, l$4 = e$3.useState, m$4 = e$3.useEffect, n$5 = e$3.useLayoutEffect, p$5 = e$3.useDebugValue;
function q$5(a2, b2) {
  var d2 = b2(), f2 = l$4({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$5(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$3(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$4(function() {
    r$3(c2) && g2({ inst: c2 });
    return a2(function() {
      r$3(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$5(d2);
  return d2;
}
function r$3(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$4(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$3(a2, b2) {
  return b2();
}
var u$3 = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? t$3 : q$5;
useSyncExternalStoreShim_production_min.useSyncExternalStore = e$3.useSyncExternalStore !== void 0 ? e$3.useSyncExternalStore : u$3;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$3 = react.exports, n$4 = shim.exports;
function p$4(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$4 = typeof Object.is === "function" ? Object.is : p$4, r$2 = n$4.useSyncExternalStore, t$2 = h$3.useRef, u$2 = h$3.useEffect, v$3 = h$3.useMemo, w$2 = h$3.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$2(null);
  if (c2.current === null) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$3(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (g2 !== void 0 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$4(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (g2 !== void 0 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = e2 === void 0 ? null : e2;
    return [function() {
      return a3(b2());
    }, m2 === null ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r$2(a2, c2[0], c2[1]);
  u$2(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$2(d2);
  return d2;
};
{
  withSelector.exports = withSelector_production_min;
}
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ReactReduxContext = /* @__PURE__ */ React$1.createContext(null);
function useReduxContext() {
  const contextValue = react.exports.useContext(ReactReduxContext);
  return contextValue;
}
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn3) => {
  useSyncExternalStoreWithSelector = fn3;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
  return function useSelector2(selector, equalityFn = refEquality) {
    const {
      store: store2,
      subscription,
      getServerState
    } = useReduxContext$1();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store2.getState, getServerState || store2.getState, selector, equalityFn);
    react.exports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs$1 = { exports: {} };
var reactIs_production_min$2 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = typeof Symbol === "function" && Symbol.for, c$2 = b$2 ? Symbol.for("react.element") : 60103, d$2 = b$2 ? Symbol.for("react.portal") : 60106, e$2 = b$2 ? Symbol.for("react.fragment") : 60107, f$3 = b$2 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$2 ? Symbol.for("react.profiler") : 60114, h$2 = b$2 ? Symbol.for("react.provider") : 60109, k$3 = b$2 ? Symbol.for("react.context") : 60110, l$3 = b$2 ? Symbol.for("react.async_mode") : 60111, m$3 = b$2 ? Symbol.for("react.concurrent_mode") : 60111, n$3 = b$2 ? Symbol.for("react.forward_ref") : 60112, p$3 = b$2 ? Symbol.for("react.suspense") : 60113, q$3 = b$2 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$2 ? Symbol.for("react.memo") : 60115, t$1 = b$2 ? Symbol.for("react.lazy") : 60116, v$2 = b$2 ? Symbol.for("react.block") : 60121, w$1 = b$2 ? Symbol.for("react.fundamental") : 60117, x$1 = b$2 ? Symbol.for("react.responder") : 60118, y$1 = b$2 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$3:
          case m$3:
          case e$2:
          case g$2:
          case f$3:
          case p$3:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$3:
              case n$3:
              case t$1:
              case r$1:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$2:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$3;
}
reactIs_production_min$2.AsyncMode = l$3;
reactIs_production_min$2.ConcurrentMode = m$3;
reactIs_production_min$2.ContextConsumer = k$3;
reactIs_production_min$2.ContextProvider = h$2;
reactIs_production_min$2.Element = c$2;
reactIs_production_min$2.ForwardRef = n$3;
reactIs_production_min$2.Fragment = e$2;
reactIs_production_min$2.Lazy = t$1;
reactIs_production_min$2.Memo = r$1;
reactIs_production_min$2.Portal = d$2;
reactIs_production_min$2.Profiler = g$2;
reactIs_production_min$2.StrictMode = f$3;
reactIs_production_min$2.Suspense = p$3;
reactIs_production_min$2.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$3;
};
reactIs_production_min$2.isConcurrentMode = A$1;
reactIs_production_min$2.isContextConsumer = function(a2) {
  return z$1(a2) === k$3;
};
reactIs_production_min$2.isContextProvider = function(a2) {
  return z$1(a2) === h$2;
};
reactIs_production_min$2.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c$2;
};
reactIs_production_min$2.isForwardRef = function(a2) {
  return z$1(a2) === n$3;
};
reactIs_production_min$2.isFragment = function(a2) {
  return z$1(a2) === e$2;
};
reactIs_production_min$2.isLazy = function(a2) {
  return z$1(a2) === t$1;
};
reactIs_production_min$2.isMemo = function(a2) {
  return z$1(a2) === r$1;
};
reactIs_production_min$2.isPortal = function(a2) {
  return z$1(a2) === d$2;
};
reactIs_production_min$2.isProfiler = function(a2) {
  return z$1(a2) === g$2;
};
reactIs_production_min$2.isStrictMode = function(a2) {
  return z$1(a2) === f$3;
};
reactIs_production_min$2.isSuspense = function(a2) {
  return z$1(a2) === p$3;
};
reactIs_production_min$2.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e$2 || a2 === m$3 || a2 === g$2 || a2 === f$3 || a2 === p$3 || a2 === q$3 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t$1 || a2.$$typeof === r$1 || a2.$$typeof === h$2 || a2.$$typeof === k$3 || a2.$$typeof === n$3 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y$1 || a2.$$typeof === v$2);
};
reactIs_production_min$2.typeOf = z$1;
{
  reactIs$1.exports = reactIs_production_min$2;
}
var reactIs = reactIs$1.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics$2(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics$2(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i2 = 0; i2 < keys.length; ++i2) {
      var key = keys[i2];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics$2;
var reactIs_production_min$1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e$1 = Symbol.for("react.strict_mode"), f$2 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$1 = Symbol.for("react.context"), k$2 = Symbol.for("react.server_context"), l$2 = Symbol.for("react.forward_ref"), m$2 = Symbol.for("react.suspense"), n$2 = Symbol.for("react.suspense_list"), p$2 = Symbol.for("react.memo"), q$2 = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u$1 = Symbol.for("react.module.reference");
function v$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$2:
          case e$1:
          case m$2:
          case n$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case h$1:
              case l$2:
              case q$2:
              case p$2:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min$1.ContextConsumer = h$1;
reactIs_production_min$1.ContextProvider = g$1;
reactIs_production_min$1.Element = b$1;
reactIs_production_min$1.ForwardRef = l$2;
reactIs_production_min$1.Fragment = d$1;
reactIs_production_min$1.Lazy = q$2;
reactIs_production_min$1.Memo = p$2;
reactIs_production_min$1.Portal = c$1;
reactIs_production_min$1.Profiler = f$2;
reactIs_production_min$1.StrictMode = e$1;
reactIs_production_min$1.Suspense = m$2;
reactIs_production_min$1.SuspenseList = n$2;
reactIs_production_min$1.isAsyncMode = function() {
  return false;
};
reactIs_production_min$1.isConcurrentMode = function() {
  return false;
};
reactIs_production_min$1.isContextConsumer = function(a2) {
  return v$1(a2) === h$1;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return v$1(a2) === g$1;
};
reactIs_production_min$1.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === b$1;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return v$1(a2) === l$2;
};
reactIs_production_min$1.isFragment = function(a2) {
  return v$1(a2) === d$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return v$1(a2) === q$2;
};
reactIs_production_min$1.isMemo = function(a2) {
  return v$1(a2) === p$2;
};
reactIs_production_min$1.isPortal = function(a2) {
  return v$1(a2) === c$1;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return v$1(a2) === f$2;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return v$1(a2) === e$1;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return v$1(a2) === m$2;
};
reactIs_production_min$1.isSuspenseList = function(a2) {
  return v$1(a2) === n$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === d$1 || a2 === f$2 || a2 === e$1 || a2 === m$2 || a2 === n$2 || a2 === t || typeof a2 === "object" && a2 !== null && (a2.$$typeof === q$2 || a2.$$typeof === p$2 || a2.$$typeof === g$1 || a2.$$typeof === h$1 || a2.$$typeof === l$2 || a2.$$typeof === u$1 || a2.getModuleId !== void 0) ? true : false;
};
reactIs_production_min$1.typeOf = v$1;
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect = canUseDOM ? react.exports.useLayoutEffect : react.exports.useEffect;
var jsxRuntime$1 = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = react.exports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  g2 !== void 0 && (e2 = "" + g2);
  a2.key !== void 0 && (e2 = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m$1.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      d2[b2] === void 0 && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime$1.exports = reactJsxRuntime_production_min;
}
const jsx$1 = jsxRuntime$1.exports.jsx;
const jsxs = jsxRuntime$1.exports.jsxs;
const Fragment = jsxRuntime$1.exports.Fragment;
var jsxRuntime = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  jsx: jsx$1,
  jsxs,
  Fragment
});
function Provider({
  store: store2,
  context,
  children,
  serverState
}) {
  const contextValue = react.exports.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
  }, [store2, serverState]);
  const previousState = react.exports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ jsx$1(Context.Provider, {
    value: contextValue,
    children
  });
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
  return function useStore2() {
    const {
      store: store2
    } = useReduxContext$1();
    return store2;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    const store2 = useStore$1();
    return store2.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelector.exports.useSyncExternalStoreWithSelector);
setBatch(reactDom.exports.unstable_batchedUpdates);
var tssReact = {};
var cssAndCx = {};
var classnames$1 = {};
var assert$1 = {};
Object.defineProperty(assert$1, "__esModule", { value: true });
assert$1.assert = void 0;
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}
assert$1.assert = assert;
var typeGuard$1 = {};
Object.defineProperty(typeGuard$1, "__esModule", { value: true });
typeGuard$1.typeGuard = void 0;
function typeGuard(_value, isMatched) {
  return isMatched;
}
typeGuard$1.typeGuard = typeGuard;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.classnames = void 0;
  const assert_12 = assert$1;
  const typeGuard_12 = typeGuard$1;
  const classnames3 = (args) => {
    const len = args.length;
    let i2 = 0;
    let cls = "";
    for (; i2 < len; i2++) {
      const arg = args[i2];
      if (arg == null)
        continue;
      let toAdd;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = (0, exports.classnames)(arg);
          } else {
            (0, assert_12.assert)(!(0, typeGuard_12.typeGuard)(arg, false));
            toAdd = "";
            for (const k2 in arg) {
              if (arg[k2] && k2) {
                toAdd && (toAdd += " ");
                toAdd += k2;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  exports.classnames = classnames3;
})(classnames$1);
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize$1(fn3) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0)
      cache2[arg] = fn3(arg);
    return cache2[arg];
  };
}
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles2 += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name2 = murmur2(styles2) + identifierName;
  return {
    name: name2,
    styles: styles2,
    next: cursor
  };
};
var emotionSerialize_browser_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  serializeStyles
});
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(emotionSerialize_browser_esm);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache2, serialized, isStringTag) {
  var className = cache2.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache2.registered[className] === void 0) {
    cache2.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache2, serialized, isStringTag) {
  registerStyles(cache2, serialized, isStringTag);
  var className = cache2.key + "-" + serialized.name;
  if (cache2.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache2.insert(serialized === current ? "." + className : "", current, cache2.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
var emotionUtils_browser_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getRegisteredStyles,
  insertStyles,
  registerStyles
});
var require$$2$2 = /* @__PURE__ */ getAugmentedNamespace(emotionUtils_browser_esm);
var useGuaranteedMemo$1 = {};
Object.defineProperty(useGuaranteedMemo$1, "__esModule", { value: true });
useGuaranteedMemo$1.useGuaranteedMemo = void 0;
const react_1$4 = react.exports;
function useGuaranteedMemo(fn3, deps) {
  const ref = (0, react_1$4.useRef)();
  if (!ref.current || deps.length !== ref.current.prevDeps.length || ref.current.prevDeps.map((v2, i2) => v2 === deps[i2]).indexOf(false) >= 0) {
    ref.current = {
      "v": fn3(),
      "prevDeps": [...deps]
    };
  }
  return ref.current.v;
}
useGuaranteedMemo$1.useGuaranteedMemo = useGuaranteedMemo;
var cache = {};
var require$$2$1 = /* @__PURE__ */ getAugmentedNamespace(jsxRuntime);
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash$2(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end2) {
  return value.slice(begin, end2);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position$1 = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position$1 > 0 ? charat(characters, --position$1) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position$1 < length ? charat(characters, position$1++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position$1);
}
function caret() {
  return position$1;
}
function slice$1(begin, end2) {
  return substr(characters, begin, end2);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position$1 = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice$1(position$1 - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice$1(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position$1;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position$1;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice$1(index, position$1 - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice$1(index, position$1);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference2 = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference2 = ruleset(characters2, root, parent, index, offset2, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference2, reference2, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference2, reference2, rule && append(ruleset(value, reference2, reference2, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference2, reference2, reference2, [""], children, 0, points, children);
                }
        }
        index = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset2, rules, points, type, props, children, length2) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function prefix(value, length2) {
  switch (hash$2(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}
var weakMemoize = function weakMemoize2(func) {
  var cache2 = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache2.has(arg)) {
      return cache2.get(arg);
    }
    var ret = func(arg);
    cache2.set(arg, ret);
    return ret;
  };
};
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice$1(begin, position$1);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position$1 - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};
var emotionCache_browser_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": createCache
});
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(emotionCache_browser_esm);
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(cache, "__esModule", { value: true });
cache.TssCacheProvider = cache.useTssEmotionCache = cache.getTssDefaultEmotionCache = cache.getDoExistsTssDefaultEmotionCacheMemoizedValue = void 0;
const jsx_runtime_1$2 = require$$2$1;
const react_1$3 = react.exports;
const cache_1$1 = __importDefault(require$$2);
const { getDoExistsTssDefaultEmotionCacheMemoizedValue, getTssDefaultEmotionCache, reactContext } = (() => {
  const propertyKey = "__tss-react_context";
  const peerDepObj = react_1$3.createContext;
  let sharedContext = peerDepObj["__tss-react_context"];
  if (sharedContext === void 0) {
    const { getTssDefaultEmotionCache: getTssDefaultEmotionCache2, getDoExistsTssDefaultEmotionCacheMemoizedValue: getDoExistsTssDefaultEmotionCacheMemoizedValue2 } = (() => {
      let cache2 = void 0;
      function getTssDefaultEmotionCache3(params) {
        const { doReset = false } = params !== null && params !== void 0 ? params : {};
        if (doReset) {
          cache2 = void 0;
        }
        if (cache2 === void 0) {
          cache2 = (0, cache_1$1.default)({ "key": "tss" });
        }
        return cache2;
      }
      return {
        getTssDefaultEmotionCache: getTssDefaultEmotionCache3,
        "getDoExistsTssDefaultEmotionCacheMemoizedValue": () => cache2 !== void 0
      };
    })();
    sharedContext = {
      getTssDefaultEmotionCache: getTssDefaultEmotionCache2,
      getDoExistsTssDefaultEmotionCacheMemoizedValue: getDoExistsTssDefaultEmotionCacheMemoizedValue2,
      "reactContext": (0, react_1$3.createContext)(void 0)
    };
    Object.defineProperty(peerDepObj, propertyKey, {
      "configurable": false,
      "enumerable": false,
      "writable": false,
      "value": sharedContext
    });
  }
  return sharedContext;
})();
cache.getDoExistsTssDefaultEmotionCacheMemoizedValue = getDoExistsTssDefaultEmotionCacheMemoizedValue;
cache.getTssDefaultEmotionCache = getTssDefaultEmotionCache;
function useTssEmotionCache() {
  const cacheExplicitlyProvidedForTss = (0, react_1$3.useContext)(reactContext);
  return cacheExplicitlyProvidedForTss !== null && cacheExplicitlyProvidedForTss !== void 0 ? cacheExplicitlyProvidedForTss : getTssDefaultEmotionCache();
}
cache.useTssEmotionCache = useTssEmotionCache;
function TssCacheProvider(props) {
  const { children, value } = props;
  return (0, jsx_runtime_1$2.jsx)(reactContext.Provider, Object.assign({ value }, { children }));
}
cache.TssCacheProvider = TssCacheProvider;
var types = {};
Object.defineProperty(types, "__esModule", { value: true });
types.matchCSSObject = void 0;
function matchCSSObject(arg) {
  return arg instanceof Object && !("styles" in arg) && !("length" in arg) && !("__emotion_styles" in arg);
}
types.matchCSSObject = matchCSSObject;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.useCssAndCx = exports.createCssAndCx = void 0;
  const classnames_1 = classnames$1;
  const serialize_1 = require$$1;
  const utils_1 = require$$2$2;
  const useGuaranteedMemo_1 = useGuaranteedMemo$1;
  const cache_12 = cache;
  const types_1 = types;
  exports.createCssAndCx = (() => {
    function merge2(registered, css2, className) {
      const registeredStyles = [];
      const rawClassName = (0, utils_1.getRegisteredStyles)(registered, registeredStyles, className);
      if (registeredStyles.length < 2) {
        return className;
      }
      return rawClassName + css2(registeredStyles);
    }
    function createCssAndCx(params) {
      const { cache: cache2 } = params;
      const css2 = (...args) => {
        const serialized = (0, serialize_1.serializeStyles)(args, cache2.registered);
        (0, utils_1.insertStyles)(cache2, serialized, false);
        const className = `${cache2.key}-${serialized.name}`;
        scope: {
          const arg = args[0];
          if (!(0, types_1.matchCSSObject)(arg)) {
            break scope;
          }
          increaseSpecificityToTakePrecedenceOverMediaQuerries.saveClassNameCSSObjectMapping(cache2, className, arg);
        }
        return className;
      };
      const cx = (...args) => {
        const className = (0, classnames_1.classnames)(args);
        const feat27FixedClassnames = increaseSpecificityToTakePrecedenceOverMediaQuerries.fixClassName(cache2, className, css2);
        return merge2(cache2.registered, css2, feat27FixedClassnames);
      };
      return { css: css2, cx };
    }
    return { createCssAndCx };
  })().createCssAndCx;
  function useCssAndCx() {
    const cache2 = (0, cache_12.useTssEmotionCache)();
    const { css: css2, cx } = (0, useGuaranteedMemo_1.useGuaranteedMemo)(() => (0, exports.createCssAndCx)({ cache: cache2 }), [cache2]);
    return { css: css2, cx };
  }
  exports.useCssAndCx = useCssAndCx;
  const increaseSpecificityToTakePrecedenceOverMediaQuerries = (() => {
    const cssObjectMapByCache = /* @__PURE__ */ new WeakMap();
    return {
      "saveClassNameCSSObjectMapping": (cache2, className, cssObject) => {
        let cssObjectMap = cssObjectMapByCache.get(cache2);
        if (cssObjectMap === void 0) {
          cssObjectMap = /* @__PURE__ */ new Map();
          cssObjectMapByCache.set(cache2, cssObjectMap);
        }
        cssObjectMap.set(className, cssObject);
      },
      "fixClassName": (() => {
        function fix(classNameCSSObjects) {
          let isThereAnyMediaQueriesInPreviousClasses = false;
          return classNameCSSObjects.map(([className, cssObject]) => {
            if (cssObject === void 0) {
              return className;
            }
            let out;
            if (!isThereAnyMediaQueriesInPreviousClasses) {
              out = className;
              for (const key in cssObject) {
                if (key.startsWith("@media")) {
                  isThereAnyMediaQueriesInPreviousClasses = true;
                  break;
                }
              }
            } else {
              out = {
                "&&": cssObject
              };
            }
            return out;
          });
        }
        return (cache2, className, css2) => {
          const cssObjectMap = cssObjectMapByCache.get(cache2);
          return (0, classnames_1.classnames)(fix(className.split(" ").map((className2) => [
            className2,
            cssObjectMap === null || cssObjectMap === void 0 ? void 0 : cssObjectMap.get(className2)
          ])).map((classNameOrCSSObject) => typeof classNameOrCSSObject === "string" ? classNameOrCSSObject : css2(classNameOrCSSObject)));
        };
      })()
    };
  })();
})(cssAndCx);
var mergeClasses$1 = {};
var objectKeys$1 = {};
Object.defineProperty(objectKeys$1, "__esModule", { value: true });
objectKeys$1.objectKeys = void 0;
function objectKeys(o2) {
  return Object.keys(o2);
}
objectKeys$1.objectKeys = objectKeys;
var getDependencyArrayRef$1 = {};
Object.defineProperty(getDependencyArrayRef$1, "__esModule", { value: true });
getDependencyArrayRef$1.getDependencyArrayRef = void 0;
function getDependencyArrayRef(obj) {
  if (!(obj instanceof Object) || typeof obj === "function") {
    return obj;
  }
  const arr = [];
  for (const key in obj) {
    const value = obj[key];
    const typeofValue = typeof value;
    if (!(typeofValue === "string" || typeofValue === "number" && !isNaN(value) || typeofValue === "boolean" || value === void 0 || value === null)) {
      return obj;
    }
    arr.push(`${key}:${typeofValue}_${value}`);
  }
  return "xSqLiJdLMd9s" + arr.join("|");
}
getDependencyArrayRef$1.getDependencyArrayRef = getDependencyArrayRef;
Object.defineProperty(mergeClasses$1, "__esModule", { value: true });
mergeClasses$1.useMergedClasses = mergeClasses$1.mergeClasses = void 0;
const objectKeys_1$1 = objectKeys$1;
const getDependencyArrayRef_1$1 = getDependencyArrayRef$1;
const cssAndCx_1$1 = cssAndCx;
const react_1$2 = react.exports;
function mergeClasses(classesFromUseStyles, classesFromProps, cx) {
  if (!(classesFromProps instanceof Object)) {
    return classesFromUseStyles;
  }
  const out = {};
  (0, objectKeys_1$1.objectKeys)(classesFromUseStyles).forEach((ruleName) => out[ruleName] = cx(classesFromUseStyles[ruleName], classesFromProps[ruleName]));
  (0, objectKeys_1$1.objectKeys)(classesFromProps).forEach((ruleName) => {
    if (ruleName in classesFromUseStyles) {
      return;
    }
    const className = classesFromProps[ruleName];
    if (typeof className !== "string") {
      return;
    }
    out[ruleName] = className;
  });
  return out;
}
mergeClasses$1.mergeClasses = mergeClasses;
function useMergedClasses(classes, classesOv) {
  const { cx } = (0, cssAndCx_1$1.useCssAndCx)();
  return (0, react_1$2.useMemo)(() => mergeClasses(classes, classesOv, cx), [classes, (0, getDependencyArrayRef_1$1.getDependencyArrayRef)(classesOv), cx]);
}
mergeClasses$1.useMergedClasses = useMergedClasses;
var makeStyles$2 = {};
var Object_fromEntries = {};
Object.defineProperty(Object_fromEntries, "__esModule", { value: true });
Object_fromEntries.objectFromEntries = void 0;
Object_fromEntries.objectFromEntries = !Object.fromEntries ? (entries) => {
  if (!entries || !entries[Symbol.iterator]) {
    throw new Error("Object.fromEntries() requires a single iterable argument");
  }
  const o2 = {};
  Object.keys(entries).forEach((key) => {
    const [k2, v2] = entries[key];
    o2[k2] = v2;
  });
  return o2;
} : Object.fromEntries;
Object.defineProperty(makeStyles$2, "__esModule", { value: true });
makeStyles$2.createMakeStyles = void 0;
const react_1$1 = react.exports;
const Object_fromEntries_1 = Object_fromEntries;
const objectKeys_1 = objectKeys$1;
const cssAndCx_1 = cssAndCx;
const getDependencyArrayRef_1 = getDependencyArrayRef$1;
const typeGuard_1 = typeGuard$1;
const cache_1 = cache;
const assert_1 = assert$1;
const mergeClasses_1 = mergeClasses$1;
const getCounter = (() => {
  let counter = 0;
  return () => counter++;
})();
function createMakeStyles(params) {
  const { useTheme: useTheme3 } = params;
  function makeStyles2(params2) {
    const { name: nameOrWrappedName } = params2 !== null && params2 !== void 0 ? params2 : {};
    const name2 = typeof nameOrWrappedName !== "object" ? nameOrWrappedName : Object.keys(nameOrWrappedName)[0];
    return function(cssObjectByRuleNameOrGetCssObjectByRuleName) {
      const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function" ? cssObjectByRuleNameOrGetCssObjectByRuleName : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
      const outerCounter = getCounter();
      return function useStyles3(params3, styleOverrides) {
        var _a, _b;
        const theme = useTheme3();
        const { css: css2, cx } = (0, cssAndCx_1.useCssAndCx)();
        const cache2 = (0, cache_1.useTssEmotionCache)();
        let classes = (0, react_1$1.useMemo)(() => {
          const refClassesCache = {};
          const refClasses = typeof Proxy !== "undefined" && new Proxy({}, {
            "get": (_target, propertyKey) => {
              if (typeof propertyKey === "symbol") {
                (0, assert_1.assert)(false);
              }
              return refClassesCache[propertyKey] = `${cache2.key}-${outerCounter}${name2 !== void 0 ? `-${name2}` : ""}-${propertyKey}-ref`;
            }
          });
          const cssObjectByRuleName = getCssObjectByRuleName(theme, params3, refClasses || {});
          const classes2 = (0, Object_fromEntries_1.objectFromEntries)((0, objectKeys_1.objectKeys)(cssObjectByRuleName).map((ruleName) => {
            const cssObject = cssObjectByRuleName[ruleName];
            if (!cssObject.label) {
              cssObject.label = `${name2 !== void 0 ? `${name2}-` : ""}${ruleName}`;
            }
            return [
              ruleName,
              `${css2(cssObject)}${(0, typeGuard_1.typeGuard)(ruleName, ruleName in refClassesCache) ? ` ${refClassesCache[ruleName]}` : ""}`
            ];
          }));
          (0, objectKeys_1.objectKeys)(refClassesCache).forEach((ruleName) => {
            if (ruleName in classes2) {
              return;
            }
            classes2[ruleName] = refClassesCache[ruleName];
          });
          return classes2;
        }, [cache2, css2, cx, theme, (0, getDependencyArrayRef_1.getDependencyArrayRef)(params3)]);
        const propsClasses = styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.props.classes;
        {
          classes = (0, react_1$1.useMemo)(() => (0, mergeClasses_1.mergeClasses)(classes, propsClasses, cx), [classes, (0, getDependencyArrayRef_1.getDependencyArrayRef)(propsClasses), cx]);
        }
        {
          let cssObjectByRuleNameOrGetCssObjectByRuleName2 = void 0;
          try {
            cssObjectByRuleNameOrGetCssObjectByRuleName2 = name2 !== void 0 ? (_b = (_a = theme.components) === null || _a === void 0 ? void 0 : _a[name2]) === null || _b === void 0 ? void 0 : _b.styleOverrides : void 0;
          } catch (_c) {
          }
          const themeClasses = (0, react_1$1.useMemo)(() => {
            if (!cssObjectByRuleNameOrGetCssObjectByRuleName2) {
              return void 0;
            }
            const themeClasses2 = {};
            for (const ruleName in cssObjectByRuleNameOrGetCssObjectByRuleName2) {
              const cssObjectOrGetCssObject = cssObjectByRuleNameOrGetCssObjectByRuleName2[ruleName];
              if (!(cssObjectOrGetCssObject instanceof Object)) {
                continue;
              }
              themeClasses2[ruleName] = css2(typeof cssObjectOrGetCssObject === "function" ? cssObjectOrGetCssObject(Object.assign({ theme, "ownerState": styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.ownerState }, styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.props)) : cssObjectOrGetCssObject);
            }
            return themeClasses2;
          }, [
            cssObjectByRuleNameOrGetCssObjectByRuleName2 === void 0 ? void 0 : JSON.stringify(cssObjectByRuleNameOrGetCssObjectByRuleName2),
            (0, getDependencyArrayRef_1.getDependencyArrayRef)(styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.props),
            (0, getDependencyArrayRef_1.getDependencyArrayRef)(styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.ownerState),
            css2
          ]);
          classes = (0, react_1$1.useMemo)(() => (0, mergeClasses_1.mergeClasses)(classes, themeClasses, cx), [classes, themeClasses, cx]);
        }
        return {
          classes,
          theme,
          css: css2,
          cx
        };
      };
    };
  }
  function useStyles2() {
    const theme = useTheme3();
    const { css: css2, cx } = (0, cssAndCx_1.useCssAndCx)();
    return { theme, css: css2, cx };
  }
  return { makeStyles: makeStyles2, useStyles: useStyles2 };
}
makeStyles$2.createMakeStyles = createMakeStyles;
var withStyles$1 = {};
var capitalize$2 = {};
Object.defineProperty(capitalize$2, "__esModule", { value: true });
capitalize$2.capitalize = void 0;
function capitalize$1(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
capitalize$2.capitalize = capitalize$1;
var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
Object.defineProperty(withStyles$1, "__esModule", {
  value: true
});
withStyles$1.createWithStyles = void 0;
const jsx_runtime_1$1 = require$$2$1;
const react_1 = react.exports;
const makeStyles_1 = makeStyles$2;
const capitalize_1 = capitalize$2;
function createWithStyles(params) {
  const {
    useTheme: useTheme3
  } = params;
  const {
    makeStyles: makeStyles2
  } = (0, makeStyles_1.createMakeStyles)({
    useTheme: useTheme3
  });
  function withStyles2(Component, cssObjectByRuleNameOrGetCssObjectByRuleName, params2) {
    const Component_ = typeof Component === "string" ? (() => {
      const tag = Component;
      const Out2 = function(_a) {
        var {
          children
        } = _a, props = __rest(_a, ["children"]);
        return (0, React.createElement)(tag, props, children);
      };
      Object.defineProperty(Out2, "name", {
        "value": (0, capitalize_1.capitalize)(tag)
      });
      return Out2;
    })() : Component;
    const name2 = (() => {
      const {
        name: name3
      } = Component_;
      return typeof name3 === "string" ? name3 : void 0;
    })();
    const useStyles2 = makeStyles2((params2 === null || params2 === void 0 ? void 0 : params2.name) !== void 0 ? params2 : {
      name: name2
    })(typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function" ? (theme, props, classes) => incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName(theme, props, classes)) : incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName));
    const Out = (0, react_1.forwardRef)(function(props, ref) {
      const {
        className,
        classes: _classes
      } = props, rest = __rest(props, ["className", "classes"]);
      const {
        classes,
        cx
      } = useStyles2(props, {
        props
      });
      return (0, jsx_runtime_1$1.jsx)(Component_, Object.assign({
        ref,
        className: cx(classes.root, className)
      }, typeof Component === "string" ? {} : {
        classes
      }, rest));
    });
    if (name2 !== void 0) {
      Object.defineProperty(Out, "name", {
        "value": `${name2}WithStyles`
      });
    }
    return Out;
  }
  return {
    withStyles: withStyles2
  };
}
withStyles$1.createWithStyles = createWithStyles;
function incorporateMediaQueries(cssObjectByRuleNameWithMediaQueries) {
  const cssObjectByRuleName = {};
  const cssObjectByRuleNameWithMediaQueriesByMediaQuery = {};
  Object.keys(cssObjectByRuleNameWithMediaQueries).forEach((ruleNameOrMediaQuery) => (ruleNameOrMediaQuery.startsWith("@media") ? cssObjectByRuleNameWithMediaQueriesByMediaQuery : cssObjectByRuleName)[ruleNameOrMediaQuery] = cssObjectByRuleNameWithMediaQueries[ruleNameOrMediaQuery]);
  Object.keys(cssObjectByRuleNameWithMediaQueriesByMediaQuery).forEach((mediaQuery) => {
    const cssObjectByRuleNameBis = cssObjectByRuleNameWithMediaQueriesByMediaQuery[mediaQuery];
    Object.keys(cssObjectByRuleNameBis).forEach((ruleName) => {
      var _a;
      return cssObjectByRuleName[ruleName] = Object.assign(Object.assign({}, (_a = cssObjectByRuleName[ruleName]) !== null && _a !== void 0 ? _a : {}), {
        [mediaQuery]: cssObjectByRuleNameBis[ruleName]
      });
    });
  });
  return cssObjectByRuleName;
}
var hoistNonReactStatics = function(targetComponent, sourceComponent) {
  return hoistNonReactStatics_cjs(targetComponent, sourceComponent);
};
var hoistNonReactStatics$1 = hoistNonReactStatics;
var hasOwnProperty$1 = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ react.exports.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return react.exports.useContext(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
    var cache2 = react.exports.useContext(EmotionCacheContext);
    return func(props, cache2, ref);
  });
};
var ThemeContext$2 = /* @__PURE__ */ react.exports.createContext({});
var useTheme$4 = function useTheme2() {
  return react.exports.useContext(ThemeContext$2);
};
var getTheme = function getTheme2(outerTheme, theme) {
  if (typeof theme === "function") {
    var mergedTheme = theme(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider$2 = function ThemeProvider2(props) {
  var theme = react.exports.useContext(ThemeContext$2);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /* @__PURE__ */ react.exports.createElement(ThemeContext$2.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || "Component";
  var render = function render2(props, ref) {
    var theme = react.exports.useContext(ThemeContext$2);
    return /* @__PURE__ */ react.exports.createElement(Component, _extends({
      theme,
      ref
    }, props));
  };
  var WithTheme = /* @__PURE__ */ react.exports.forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics$1(WithTheme, Component);
}
var useInsertionEffect$2 = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : function useInsertionEffect2(create) {
  create();
};
function useInsertionEffectMaybe$1(create) {
  useInsertionEffect$2(create);
}
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty$1.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion$2 = function Insertion2(_ref) {
  var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  useInsertionEffectMaybe$1(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache2, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache2.registered[cssProp] !== void 0) {
    cssProp = cache2.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache2.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, react.exports.useContext(ThemeContext$2));
  className += cache2.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty$1.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion$2, {
    cache: cache2,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ react.exports.createElement(WrappedComponent, newProps));
});
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty$1.call(props, "css")) {
    return react.exports.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i2 = 2; i2 < argsLength; i2++) {
    createElementArgArray[i2] = args[i2];
  }
  return react.exports.createElement.apply(null, createElementArgArray);
};
var useInsertionEffect$1 = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : react.exports.useLayoutEffect;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache2) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, react.exports.useContext(ThemeContext$2));
  var sheetRef = react.exports.useRef();
  useInsertionEffect$1(function() {
    var key = cache2.key + "-global";
    var sheet = new cache2.sheet.constructor({
      key,
      nonce: cache2.sheet.nonce,
      container: cache2.sheet.container,
      speedy: cache2.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache2.sheet.tags.length) {
      sheet.before = cache2.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache2]);
  useInsertionEffect$1(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache2, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache2.insert("", serialized, sheet, false);
  }, [cache2, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name2 = "animation-" + insertable.name;
  return {
    name: name2,
    styles: "@keyframes " + name2 + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i2 = 0;
  var cls = "";
  for (; i2 < len; i2++) {
    var arg = args[i2];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k2 in arg) {
            if (arg[k2] && k2) {
              toAdd && (toAdd += " ");
              toAdd += k2;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge$1(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var Insertion$1 = function Insertion3(_ref) {
  var cache2 = _ref.cache, serializedArr = _ref.serializedArr;
  useInsertionEffectMaybe$1(function() {
    for (var i2 = 0; i2 < serializedArr.length; i2++) {
      insertStyles(cache2, serializedArr[i2], false);
    }
  });
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache2) {
  var hasRendered = false;
  var serializedArr = [];
  var css2 = function css3() {
    if (hasRendered && false) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache2.registered);
    serializedArr.push(serialized);
    registerStyles(cache2, serialized, false);
    return cache2.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && false) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge$1(cache2.registered, css2, classnames(args));
  };
  var content = {
    css: css2,
    cx,
    theme: react.exports.useContext(ThemeContext$2)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion$1, {
    cache: cache2,
    serializedArr
  }), ele);
});
var emotionReact_browser_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  ClassNames,
  Global,
  createElement: jsx,
  css,
  jsx,
  keyframes,
  CacheProvider,
  ThemeContext: ThemeContext$2,
  ThemeProvider: ThemeProvider$2,
  __unsafe_useEmotionCache,
  useTheme: useTheme$4,
  withEmotionCache,
  withTheme
});
var require$$4 = /* @__PURE__ */ getAugmentedNamespace(emotionReact_browser_esm);
var GlobalStyles$3 = {};
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  var desc = Object.getOwnPropertyDescriptor(m2, k2);
  if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m2[k2];
    } };
  }
  Object.defineProperty(o2, k22, desc);
} : function(o2, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o2[k22] = m2[k2];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o2, v2) {
  Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
} : function(o2, v2) {
  o2["default"] = v2;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(GlobalStyles$3, "__esModule", { value: true });
GlobalStyles$3.GlobalStyles = void 0;
const jsx_runtime_1 = require$$2$1;
const reactEmotion = __importStar(require$$4);
function GlobalStyles$2(props) {
  const { styles: styles2 } = props;
  return (0, jsx_runtime_1.jsx)(reactEmotion.Global, { styles: reactEmotion.css(styles2) });
}
GlobalStyles$3.GlobalStyles = GlobalStyles$2;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createMakeAndWithStyles = exports.TssCacheProvider = exports.getTssDefaultEmotionCache = exports.GlobalStyles = exports.keyframes = exports.createWithStyles = exports.createMakeStyles = exports.useMergedClasses = exports.useCssAndCx = void 0;
  var cssAndCx_12 = cssAndCx;
  Object.defineProperty(exports, "useCssAndCx", { enumerable: true, get: function() {
    return cssAndCx_12.useCssAndCx;
  } });
  var mergeClasses_12 = mergeClasses$1;
  Object.defineProperty(exports, "useMergedClasses", { enumerable: true, get: function() {
    return mergeClasses_12.useMergedClasses;
  } });
  const makeStyles_12 = makeStyles$2;
  Object.defineProperty(exports, "createMakeStyles", { enumerable: true, get: function() {
    return makeStyles_12.createMakeStyles;
  } });
  const withStyles_1 = withStyles$1;
  Object.defineProperty(exports, "createWithStyles", { enumerable: true, get: function() {
    return withStyles_1.createWithStyles;
  } });
  var react_12 = require$$4;
  Object.defineProperty(exports, "keyframes", { enumerable: true, get: function() {
    return react_12.keyframes;
  } });
  var GlobalStyles_1 = GlobalStyles$3;
  Object.defineProperty(exports, "GlobalStyles", { enumerable: true, get: function() {
    return GlobalStyles_1.GlobalStyles;
  } });
  var cache_12 = cache;
  Object.defineProperty(exports, "getTssDefaultEmotionCache", { enumerable: true, get: function() {
    return cache_12.getTssDefaultEmotionCache;
  } });
  Object.defineProperty(exports, "TssCacheProvider", { enumerable: true, get: function() {
    return cache_12.TssCacheProvider;
  } });
  function createMakeAndWithStyles(params) {
    return Object.assign(Object.assign({}, (0, makeStyles_12.createMakeStyles)(params)), (0, withStyles_1.createWithStyles)(params));
  }
  exports.createMakeAndWithStyles = createMakeAndWithStyles;
})(tssReact);
const common = {
  black: "#000",
  white: "#fff"
};
var common$1 = common;
const red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var red$1 = red;
const purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
var purple$1 = purple;
const blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var blue$1 = blue;
const lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
var lightBlue$1 = lightBlue;
const green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var green$1 = green;
const orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var orange$1 = orange;
const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
var grey$1 = grey;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var useInsertionEffect = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : function useInsertionEffect3(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect(create);
}
var Insertion = function Insertion4(_ref) {
  var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  useInsertionEffectMaybe(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var createStyled$1 = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        styles2.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache2, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = react.exports.useContext(ThemeContext$2);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache2.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache2.registered, mergedProps);
      className += cache2.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion, {
        cache: cache2,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ react.exports.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled$1.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emStyled = newStyled;
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim2(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim2.isRequired = shim2;
  function getShim() {
    return shim2;
  }
  var ReactPropTypes = {
    array: shim2,
    bigint: shim2,
    bool: shim2,
    func: shim2,
    number: shim2,
    object: shim2,
    string: shim2,
    symbol: shim2,
    any: shim2,
    arrayOf: getShim,
    element: shim2,
    elementType: shim2,
    instanceOf: getShim,
    node: shim2,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function isEmpty$3(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$1(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme2 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty$3(themeInput) ? defaultTheme2 : themeInput) : styles2;
  return /* @__PURE__ */ jsx$1(Global, {
    styles: globalStyles
  });
}
/** @license MUI v5.5.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$2(tag, options) {
  const stylesFactory = emStyled(tag, options);
  return stylesFactory;
}
function isPlainObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
function formatMuiErrorMessage(code) {
  let url = "https://mui.com/production-error/?code=" + code;
  for (let i2 = 1; i2 < arguments.length; i2 += 1) {
    url += "&args[]=" + encodeURIComponent(arguments[i2]);
  }
  return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
}
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n = 60115, p = 60116, q = 60121, r = 60122, u = 60117, v = 60129, w = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var t2 = a2.$$typeof;
    switch (t2) {
      case b:
        switch (a2 = a2.type, a2) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a2;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B = k, C = d, D = p, E = n, F = c, G = f, H = e, I = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return y(a2) === h;
};
reactIs_production_min.isContextProvider = function(a2) {
  return y(a2) === g;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a2) {
  return y(a2) === k;
};
reactIs_production_min.isFragment = function(a2) {
  return y(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return y(a2) === p;
};
reactIs_production_min.isMemo = function(a2) {
  return y(a2) === n;
};
reactIs_production_min.isPortal = function(a2) {
  return y(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return y(a2) === f;
};
reactIs_production_min.isStrictMode = function(a2) {
  return y(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return y(a2) === l;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === d || a2 === f || a2 === v || a2 === e || a2 === l || a2 === m || a2 === w || typeof a2 === "object" && a2 !== null && (a2.$$typeof === p || a2.$$typeof === n || a2.$$typeof === g || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === u || a2.$$typeof === q || a2[0] === r) ? true : false;
};
reactIs_production_min.typeOf = y;
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
function debounce$1(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
function deprecatedPropType(validator, reason) {
  {
    return () => null;
  }
}
function isMuiElement(element, muiNames) {
  return /* @__PURE__ */ react.exports.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}
function ownerWindow(node2) {
  const doc = ownerDocument(node2);
  return doc.defaultView || window;
}
function requirePropFactory(componentNameInError, Component) {
  {
    return () => null;
  }
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
const useEnhancedEffect = typeof window !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
var useEnhancedEffect$1 = useEnhancedEffect;
let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react.exports.useState(idOverride);
  const id2 = idOverride || defaultId;
  react.exports.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id2;
}
const maybeReactUseId = React$2["useId"];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
function unsupportedProp(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}
function useControlled({
  controlled,
  default: defaultProp,
  name: name2,
  state = "value"
}) {
  const {
    current: isControlled
  } = react.exports.useRef(controlled !== void 0);
  const [valueState, setValue] = react.exports.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = react.exports.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function useEventCallback(fn3) {
  const ref = react.exports.useRef(fn3);
  useEnhancedEffect$1(() => {
    ref.current = fn3;
  });
  return react.exports.useCallback((...args) => (0, ref.current)(...args), []);
}
function useForkRef(refA, refB) {
  return react.exports.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node2) {
  const {
    type,
    tagName
  } = node2;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = react.exports.useCallback((node2) => {
    if (node2 != null) {
      prepare(node2.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react.exports.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
const visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
var visuallyHidden$1 = visuallyHidden;
function resolveProps(defaultProps2, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps2).forEach((propName) => {
    if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  });
  return output;
}
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
  });
}
const values$1 = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};
const defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values$1[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style2) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style2);
}
function getPath(obj, path) {
  if (!path || typeof path !== "string") {
    return null;
  }
  return path.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}
function getValue$1(themeMapping, transform2, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform2) {
    value = transform2(value);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform: transform2
  } = options;
  const fn3 = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getValue$1(themeMapping, transform2, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getValue$1(themeMapping, transform2, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn3.propTypes = {};
  fn3.filterProps = [prop];
  return fn3;
}
function compose(...styles2) {
  const handlers = styles2.reduce((acc, style2) => {
    style2.filterProps.forEach((prop) => {
      acc[prop] = style2;
    });
    return acc;
  }, {});
  const fn3 = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn3.propTypes = {};
  fn3.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
  return fn3;
}
function memoize(fn3) {
  const cache2 = {};
  return (arg) => {
    if (cache2[arg] === void 0) {
      cache2[arg] = fn3(arg);
    }
    return cache2[arg];
  };
}
const properties = {
  m: "margin",
  p: "padding"
};
const directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
const aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
const getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a2, b2] = prop.split("");
  const property = properties[a2];
  const direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing * abs2;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing[abs2];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8);
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs2 = Math.abs(propValue);
  const transformed = transformer(abs2);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function spacing(props) {
  return style(props, spacingKeys);
}
spacing.propTypes = {};
spacing.filterProps = spacingKeys;
function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
const border = style$1({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
});
const borderTop = style$1({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
});
const borderRight = style$1({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
});
const borderBottom = style$1({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
});
const borderLeft = style$1({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
});
const borderColor = style$1({
  prop: "borderColor",
  themeKey: "palette"
});
const borderTopColor = style$1({
  prop: "borderTopColor",
  themeKey: "palette"
});
const borderRightColor = style$1({
  prop: "borderRightColor",
  themeKey: "palette"
});
const borderBottomColor = style$1({
  prop: "borderBottomColor",
  themeKey: "palette"
});
const borderLeftColor = style$1({
  prop: "borderLeftColor",
  themeKey: "palette"
});
const borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ["borderRadius"];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
var borders$1 = borders;
const displayPrint = style$1({
  prop: "displayPrint",
  cssProperty: false,
  transform: (value) => ({
    "@media print": {
      display: value
    }
  })
});
const displayRaw = style$1({
  prop: "display"
});
const overflow = style$1({
  prop: "overflow"
});
const textOverflow = style$1({
  prop: "textOverflow"
});
const visibility = style$1({
  prop: "visibility"
});
const whiteSpace = style$1({
  prop: "whiteSpace"
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);
const flexBasis = style$1({
  prop: "flexBasis"
});
const flexDirection = style$1({
  prop: "flexDirection"
});
const flexWrap = style$1({
  prop: "flexWrap"
});
const justifyContent = style$1({
  prop: "justifyContent"
});
const alignItems = style$1({
  prop: "alignItems"
});
const alignContent = style$1({
  prop: "alignContent"
});
const order$1 = style$1({
  prop: "order"
});
const flex = style$1({
  prop: "flex"
});
const flexGrow = style$1({
  prop: "flexGrow"
});
const flexShrink = style$1({
  prop: "flexShrink"
});
const alignSelf = style$1({
  prop: "alignSelf"
});
const justifyItems = style$1({
  prop: "justifyItems"
});
const justifySelf = style$1({
  prop: "justifySelf"
});
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order$1, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox$1 = flexbox;
const gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = {};
gap.filterProps = ["gap"];
const columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ["columnGap"];
const rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ["rowGap"];
const gridColumn = style$1({
  prop: "gridColumn"
});
const gridRow = style$1({
  prop: "gridRow"
});
const gridAutoFlow = style$1({
  prop: "gridAutoFlow"
});
const gridAutoColumns = style$1({
  prop: "gridAutoColumns"
});
const gridAutoRows = style$1({
  prop: "gridAutoRows"
});
const gridTemplateColumns = style$1({
  prop: "gridTemplateColumns"
});
const gridTemplateRows = style$1({
  prop: "gridTemplateRows"
});
const gridTemplateAreas = style$1({
  prop: "gridTemplateAreas"
});
const gridArea = style$1({
  prop: "gridArea"
});
const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var grid$1 = grid;
const color = style$1({
  prop: "color",
  themeKey: "palette"
});
const bgcolor = style$1({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
});
const backgroundColor = style$1({
  prop: "backgroundColor",
  themeKey: "palette"
});
const palette = compose(color, bgcolor, backgroundColor);
var palette$1 = palette;
const position = style$1({
  prop: "position"
});
const zIndex$2 = style$1({
  prop: "zIndex",
  themeKey: "zIndex"
});
const top$1 = style$1({
  prop: "top"
});
const right$1 = style$1({
  prop: "right"
});
const bottom$1 = style$1({
  prop: "bottom"
});
const left$1 = style$1({
  prop: "left"
});
var positions = compose(position, zIndex$2, top$1, right$1, bottom$1, left$1);
const boxShadow = style$1({
  prop: "boxShadow",
  themeKey: "shadows"
});
var shadows$2 = boxShadow;
function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: "width",
  transform
});
const maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
const minWidth = style$1({
  prop: "minWidth",
  transform
});
const height = style$1({
  prop: "height",
  transform
});
const maxHeight = style$1({
  prop: "maxHeight",
  transform
});
const minHeight = style$1({
  prop: "minHeight",
  transform
});
style$1({
  prop: "size",
  cssProperty: "width",
  transform
});
style$1({
  prop: "size",
  cssProperty: "height",
  transform
});
const boxSizing = style$1({
  prop: "boxSizing"
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing$1 = sizing;
const fontFamily = style$1({
  prop: "fontFamily",
  themeKey: "typography"
});
const fontSize = style$1({
  prop: "fontSize",
  themeKey: "typography"
});
const fontStyle = style$1({
  prop: "fontStyle",
  themeKey: "typography"
});
const fontWeight = style$1({
  prop: "fontWeight",
  themeKey: "typography"
});
const letterSpacing = style$1({
  prop: "letterSpacing"
});
const textTransform = style$1({
  prop: "textTransform"
});
const lineHeight = style$1({
  prop: "lineHeight"
});
const textAlign = style$1({
  prop: "textAlign"
});
const typographyVariant = style$1({
  prop: "typography",
  cssProperty: false,
  themeKey: "typography"
});
const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
var typography$1 = typography;
const filterPropsMapping = {
  borders: borders$1.filterProps,
  display: display.filterProps,
  flexbox: flexbox$1.filterProps,
  grid: grid$1.filterProps,
  positions: positions.filterProps,
  palette: palette$1.filterProps,
  shadows: shadows$2.filterProps,
  sizing: sizing$1.filterProps,
  spacing: spacing.filterProps,
  typography: typography$1.filterProps
};
const styleFunctionMapping = {
  borders: borders$1,
  display,
  flexbox: flexbox$1,
  grid: grid$1,
  positions,
  palette: palette$1,
  shadows: shadows$2,
  sizing: sizing$1,
  spacing,
  typography: typography$1
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach((propName) => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx(styleFunctionMapping$1 = styleFunctionMapping) {
  const propToStyleFunction2 = Object.keys(styleFunctionMapping$1).reduce((acc, styleFnName) => {
    styleFunctionMapping$1[styleFnName].filterProps.forEach((propName) => {
      acc[propName] = styleFunctionMapping$1[styleFnName];
    });
    return acc;
  }, {});
  function getThemeValue(prop, value, theme) {
    const inputProps = {
      [prop]: value,
      theme
    };
    const styleFunction = propToStyleFunction2[prop];
    return styleFunction ? styleFunction(inputProps) : {
      [prop]: value
    };
  }
  function styleFunctionSx2(props) {
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null;
    }
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (propToStyleFunction2[styleKey]) {
              css2 = merge(css2, getThemeValue(styleKey, value, theme));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x2) => ({
                [styleKey]: x2
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme
                });
              } else {
                css2 = merge(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge(css2, getThemeValue(styleKey, value, theme));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var defaultStyleFunctionSx = styleFunctionSx;
const _excluded$Q = ["sx"];
const splitProps = (props) => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach((prop) => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$Q);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}
function toVal(mix) {
  var k2, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k2 = 0; k2 < mix.length; k2++) {
        if (mix[k2]) {
          if (y2 = toVal(mix[k2])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k2 in mix) {
        if (mix[k2]) {
          str && (str += " ");
          str += k2;
        }
      }
    }
  }
  return str;
}
function clsx() {
  var i2 = 0, tmp, x2, str = "";
  while (i2 < arguments.length) {
    if (tmp = arguments[i2++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}
const _excluded$P = ["values", "unit", "step"];
const sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    values: values2 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$P);
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start2, end2) {
    const endIndex = keys.indexOf(end2);
    return `@media (min-width:${typeof values2[start2] === "number" ? values2[start2] : start2}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end2) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}
const shape = {
  borderRadius: 4
};
var shape$1 = shape;
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform2 = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing2 = (...argsInput) => {
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform2(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing2.mui = true;
  return spacing2;
}
const _excluded$O = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose$1(options, _excluded$O);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape$1, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}
const ThemeContext = /* @__PURE__ */ react.exports.createContext(null);
var ThemeContext$1 = ThemeContext;
function useTheme$3() {
  const theme = react.exports.useContext(ThemeContext$1);
  return theme;
}
const hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme$3();
  const theme = react.exports.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ jsx$1(ThemeContext$1.Provider, {
    value: theme,
    children
  });
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme2 = null) {
  const contextTheme = useTheme$3();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
const systemDefaultTheme$1 = createTheme$1();
function useTheme$1(defaultTheme2 = systemDefaultTheme$1) {
  return useTheme$2(defaultTheme2);
}
const _excluded$N = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme: defaultTheme2,
    defaultClassName = "MuiBox-root",
    generateClassName,
    styleFunctionSx: styleFunctionSx2 = defaultStyleFunctionSx
  } = options;
  const BoxRoot = styled$2("div")(styleFunctionSx2);
  const Box2 = /* @__PURE__ */ react.exports.forwardRef(function Box3(inProps, ref) {
    const theme = useTheme$1(defaultTheme2);
    const _extendSxProp = extendSxProp(inProps), {
      className,
      component = "div"
    } = _extendSxProp, other = _objectWithoutPropertiesLoose$1(_extendSxProp, _excluded$N);
    return /* @__PURE__ */ jsx$1(BoxRoot, _extends({
      as: component,
      ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme
    }, other));
  });
  return Box2;
}
const _excluded$M = ["variant"];
function isEmpty$2(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$M);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty$2(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$2(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}
const _excluded$L = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], _excluded2$4 = ["theme"], _excluded3$1 = ["theme"];
function isEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}
const getStyleOverrides = (name2, theme) => {
  if (theme.components && theme.components[name2] && theme.components[name2].styleOverrides) {
    return theme.components[name2].styleOverrides;
  }
  return null;
};
const getVariantStyles = (name2, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name2] && theme.components[name2].variants) {
    variants = theme.components[name2].variants;
  }
  const variantsStyles = {};
  variants.forEach((definition) => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};
const variantsResolver = (props, styles2, theme, name2) => {
  var _theme$components, _theme$components$nam;
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name2]) == null ? void 0 : _theme$components$nam.variants;
  if (themeVariants) {
    themeVariants.forEach((themeVariant) => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach((key) => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });
      if (isMatch) {
        variantsStyles.push(styles2[propsToClassKey(themeVariant.props)]);
      }
    });
  }
  return variantsStyles;
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const systemDefaultTheme = createTheme$1();
function createStyled(input = {}) {
  const {
    defaultTheme: defaultTheme2 = systemDefaultTheme,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp,
    styleFunctionSx: styleFunctionSx2 = defaultStyleFunctionSx
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver: overridesResolver2
    } = inputOptions, options = _objectWithoutPropertiesLoose$1(inputOptions, _excluded$L);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || false;
    const skipSx = inputSkipSx || false;
    let label;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    }
    const defaultStyledResolver = styled$2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        return typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg ? (_ref) => {
          let {
            theme: themeInput
          } = _ref, other = _objectWithoutPropertiesLoose$1(_ref, _excluded2$4);
          return stylesArg(_extends({
            theme: isEmpty$1(themeInput) ? defaultTheme2 : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (componentName && overridesResolver2) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme2 : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(props) : slotStyle;
            });
            return overridesResolver2(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme2 : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme2 : props.theme;
          return styleFunctionSx2(_extends({}, props, {
            theme
          }));
        });
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === "function" && styleArg.__emotion_real !== styleArg) {
        transformedStyleArg = (_ref2) => {
          let {
            theme: themeInput
          } = _ref2, other = _objectWithoutPropertiesLoose$1(_ref2, _excluded3$1);
          return styleArg(_extends({
            theme: isEmpty$1(themeInput) ? defaultTheme2 : themeInput
          }, other));
        };
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
function getThemeProps(params) {
  const {
    theme,
    name: name2,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name2] || !theme.components[name2].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name2].defaultProps, props);
}
function useThemeProps$1({
  props,
  name: name2,
  defaultTheme: defaultTheme2
}) {
  const theme = useTheme$1(defaultTheme2);
  const mergedProps = getThemeProps({
    theme,
    name: name2,
    props
  });
  return mergedProps;
}
function clamp$2(value, min2 = 0, max2 = 1) {
  return Math.min(Math.max(min2, value), max2);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re2 = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values2
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n2, i2) => i2 < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values2 = `${colorSpace} ${values2.join(" ")}`;
  } else {
    values2 = `${values2.join(", ")}`;
  }
  return `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values2
  } = color2;
  const h2 = values2[0];
  const s2 = values2[1] / 100;
  const l2 = values2[2] / 100;
  const a2 = s2 * Math.min(l2, 1 - l2);
  const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp$2(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp$2(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp$2(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (255 - color2.values[i2]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (1 - color2.values[i2]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
function InnerThemeProvider(props) {
  const theme = useTheme$1();
  return /* @__PURE__ */ jsx$1(ThemeContext$2.Provider, {
    value: typeof theme === "object" ? theme : {},
    children: props.children
  });
}
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  return /* @__PURE__ */ jsx$1(ThemeProvider$1, {
    theme: localTheme,
    children: /* @__PURE__ */ jsx$1(InnerThemeProvider, {
      children
    })
  });
}
function isHostComponent(element) {
  return typeof element === "string";
}
function appendOwnerState(elementType, existingProps = {}, ownerState) {
  if (isHostComponent(elementType)) {
    return existingProps;
  }
  return _extends({}, existingProps, {
    ownerState: _extends({}, existingProps.ownerState, ownerState)
  });
}
function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach((slot) => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
        acc.push(getUtilityClass(key));
      }
      return acc;
    }, []).join(" ");
  });
  return output;
}
const defaultGenerator = (componentName) => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator$1 = ClassNameGenerator;
const globalStateClassesMapping = {
  active: "Mui-active",
  checked: "Mui-checked",
  completed: "Mui-completed",
  disabled: "Mui-disabled",
  error: "Mui-error",
  expanded: "Mui-expanded",
  focused: "Mui-focused",
  focusVisible: "Mui-focusVisible",
  required: "Mui-required",
  selected: "Mui-selected"
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
}
function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node2) {
  if (node2 == null) {
    return window;
  }
  if (node2.toString() !== "[object Window]") {
    var ownerDocument2 = node2.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node2;
}
function isElement(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name2) {
    var style2 = state.styles[name2] || {};
    var attributes = state.attributes[name2] || {};
    var element = state.elements[name2];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style2);
    Object.keys(attributes).forEach(function(name3) {
      var value = attributes[name3];
      if (value === false) {
        element.removeAttribute(name3);
      } else {
        element.setAttribute(name3, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name2) {
      var element = state.elements[name2];
      var attributes = state.attributes[name2] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name2) ? state.styles[name2] : initialStyles[name2]);
      var style2 = styleProperties.reduce(function(style3, property) {
        style3[property] = "";
        return style3;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round$2 = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round$2(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round$2(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width2 = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width2) <= 1) {
    width2 = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width2,
    height: height2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next2 = child;
    do {
      if (next2 && parent.isSameNode(next2)) {
        return true;
      }
      next2 = next2.parentNode || next2.host;
    } while (next2);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css2 = getComputedStyle(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name2 = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name2] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round$2(x2 * dpr) / dpr || 0,
    y: round$2(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn2() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node2) {
  var win = getWindow(node2);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html2 = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width2 = html2.clientWidth;
  var height2 = html2.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width2 = visualViewport.width;
    height2 = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width: width2,
    height: height2,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html2 = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body2 = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width2 = max(html2.scrollWidth, html2.clientWidth, body2 ? body2.scrollWidth : 0, body2 ? body2.clientWidth : 0);
  var height2 = max(html2.scrollHeight, html2.clientHeight, body2 ? body2.scrollHeight : 0, body2 ? body2.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body2 || html2).direction === "rtl") {
    x2 += max(html2.clientWidth, body2 ? body2.clientWidth : 0) - width2;
  }
  return {
    width: width2,
    height: height2,
    x: x2,
    y: y2
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow2 = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow2 + overflowY + overflowX);
}
function getScrollParent(node2) {
  if (["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0) {
    return node2.ownerDocument.body;
  }
  if (isHTMLElement(node2) && isScrollParent(node2)) {
    return node2;
  }
  return getScrollParent(getParentNode(node2));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name2 = _ref.name;
  if (state.modifiersData[name2]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow2 = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow2[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow2[mainVariationSide] <= 0, overflow2[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name2]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow2, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow2.top - rect.height - preventedOffsets.y,
    right: overflow2.right - rect.width + preventedOffsets.x,
    bottom: overflow2.bottom - rect.height + preventedOffsets.y,
    left: overflow2.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow2) {
  return [top, right, bottom, left].some(function(side) {
    return overflow2[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name2 = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name2] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name2 = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name2] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name2 = _ref.name;
  state.modifiersData[name2] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name2 = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow2 = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow2[mainSide];
    var max$1 = offset2 - overflow2[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow2[_mainSide];
    var _max = _offset - overflow2[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name2] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node2) {
  if (node2 === getWindow(node2) || !isHTMLElement(node2)) {
    return getWindowScroll(node2);
  } else {
    return getHTMLElementScroll(node2);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round$2(rect.width) / element.offsetWidth || 1;
  var scaleY = round$2(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name2 = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name: name2,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name2 = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name: name2,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function getContainer$1(container) {
  return typeof container === "function" ? container() : container;
}
const Portal = /* @__PURE__ */ react.exports.forwardRef(function Portal2(props, ref) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = react.exports.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ react.exports.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect$1(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect$1(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ react.exports.isValidElement(children)) {
      return /* @__PURE__ */ react.exports.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ reactDom.exports.createPortal(children, mountNode) : mountNode;
});
var Portal$1 = Portal;
const _excluded$K = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "TransitionProps"], _excluded2$3 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"];
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl$1(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const defaultPopperOptions = {};
const PopperTooltip = /* @__PURE__ */ react.exports.forwardRef(function PopperTooltip2(props, ref) {
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$K);
  const tooltipRef = react.exports.useRef(null);
  const ownRef = useForkRef(tooltipRef, ref);
  const popperRef = react.exports.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = react.exports.useRef(handlePopperRef);
  useEnhancedEffect$1(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react.exports.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = react.exports.useState(rtlPlacement);
  react.exports.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  useEnhancedEffect$1(() => {
    if (!anchorEl || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    resolveAnchorEl$1(anchorEl);
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper2 = createPopper(resolveAnchorEl$1(anchorEl), tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper2);
    return () => {
      popper2.destroy();
      handlePopperRefRef.current(null);
    };
  }, [anchorEl, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  return /* @__PURE__ */ jsx$1("div", _extends({
    ref: ownRef,
    role: "tooltip"
  }, other, {
    children: typeof children === "function" ? children(childProps) : children
  }));
});
const PopperUnstyled = /* @__PURE__ */ react.exports.forwardRef(function PopperUnstyled2(props, ref) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style: style2,
    transition = false
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded2$3);
  const [exited, setExited] = react.exports.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl$1(anchorEl)).body : void 0);
  return /* @__PURE__ */ jsx$1(Portal$1, {
    disablePortal,
    container,
    children: /* @__PURE__ */ jsx$1(PopperTooltip, _extends({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef
    }, other, {
      style: _extends({
        position: "fixed",
        top: 0,
        left: 0,
        display: !open && keepMounted && (!transition || exited) ? "none" : null
      }, style2),
      TransitionProps: transition ? {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
      } : null,
      children
    }))
  });
});
var PopperUnstyled$1 = PopperUnstyled;
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  const blacklistTagNames = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(container.children, (element) => {
    if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements2 = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements2, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    const parent = container.parentElement;
    const containerWindow = ownerWindow(container);
    const scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el: el2,
      property
    }) => {
      if (value) {
        el2.style.setProperty(property, value);
      } else {
        el2.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, true);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node2) {
  const tabindexAttr = parseInt(node2.getAttribute("tabindex"), 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node2.contentEditable === "true" || (node2.nodeName === "AUDIO" || node2.nodeName === "VIDEO" || node2.nodeName === "DETAILS") && node2.getAttribute("tabindex") === null) {
    return 0;
  }
  return node2.tabIndex;
}
function isNonTabbableRadio(node2) {
  if (node2.tagName !== "INPUT" || node2.type !== "radio") {
    return false;
  }
  if (!node2.name) {
    return false;
  }
  const getRadio = (selector) => node2.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node2.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node2.name}"]`);
  }
  return roving !== node2;
}
function isNodeMatchingSelectorFocusable(node2) {
  if (node2.disabled || node2.tagName === "INPUT" && node2.type === "hidden" || isNonTabbableRadio(node2)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node2, i2) => {
    const nodeTabIndex = getTabIndex(node2);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node2)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node2);
    } else {
      orderedTabNodes.push({
        documentOrder: i2,
        tabIndex: nodeTabIndex,
        node: node2
      });
    }
  });
  return orderedTabNodes.sort((a2, b2) => a2.tabIndex === b2.tabIndex ? a2.documentOrder - b2.documentOrder : a2.tabIndex - b2.tabIndex).map((a2) => a2.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react.exports.useRef();
  const sentinelStart = react.exports.useRef(null);
  const sentinelEnd = react.exports.useRef(null);
  const nodeToRestore = react.exports.useRef(null);
  const reactFocusEventTarget = react.exports.useRef(null);
  const activated = react.exports.useRef(false);
  const rootRef = react.exports.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react.exports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", -1);
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  react.exports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const contain = (nativeEvent) => {
      const {
        current: rootElement
      } = rootRef;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsx$1("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /* @__PURE__ */ react.exports.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsx$1("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", ["root", "hidden"]);
const _excluded$J = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];
const useUtilityClasses$w = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty("in") : false;
}
const defaultManager = new ModalManager();
const ModalUnstyled = /* @__PURE__ */ react.exports.forwardRef(function ModalUnstyled2(props, ref) {
  const {
    BackdropComponent,
    BackdropProps,
    children,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = "div",
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,
    theme,
    onTransitionEnter,
    onTransitionExited
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$J);
  const [exited, setExited] = react.exports.useState(true);
  const modal = react.exports.useRef({});
  const mountNodeRef = react.exports.useRef(null);
  const modalRef = react.exports.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const hasTransition = getHasTransition(props);
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    modalRef.current.scrollTop = 0;
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.exports.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node2) => {
    mountNodeRef.current = node2;
    if (!node2) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  const handleClose = react.exports.useCallback(() => {
    manager.remove(getModal());
  }, [manager]);
  react.exports.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.exports.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = _extends({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses$w(ownerState);
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const handleKeyDown2 = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /* @__PURE__ */ jsx$1(Portal$1, {
    ref: handlePortalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ jsxs(Root, _extends({
      role: "presentation"
    }, rootProps, !isHostComponent(Root) && {
      as: component,
      ownerState: _extends({}, ownerState, rootProps.ownerState),
      theme
    }, other, {
      ref: handleRef,
      onKeyDown: handleKeyDown2,
      className: clsx(classes.root, rootProps.className, className),
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsx$1(BackdropComponent, _extends({
        "aria-hidden": true,
        open,
        onClick: handleBackdropClick
      }, BackdropProps)) : null, /* @__PURE__ */ jsx$1(TrapFocus, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ react.exports.cloneElement(children, childProps)
      })]
    }))
  });
});
var ModalUnstyled$1 = ModalUnstyled;
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
const sliderUnstyledClasses = generateUtilityClasses("MuiSlider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel"]);
var sliderUnstyledClasses$1 = sliderUnstyledClasses;
const useValueLabelClasses = (props) => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: clsx(open && sliderUnstyledClasses$1.valueLabelOpen),
    circle: sliderUnstyledClasses$1.valueLabelCircle,
    label: sliderUnstyledClasses$1.valueLabelLabel
  };
  return utilityClasses;
};
function SliderValueLabelUnstyled(props) {
  const {
    children,
    className,
    value,
    theme
  } = props;
  const classes = useValueLabelClasses(props);
  return /* @__PURE__ */ react.exports.cloneElement(children, {
    className: clsx(children.props.className)
  }, /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [children.props.children, /* @__PURE__ */ jsx$1("span", {
      className: clsx(classes.offset, className),
      theme,
      "aria-hidden": true,
      children: /* @__PURE__ */ jsx$1("span", {
        className: classes.circle,
        children: /* @__PURE__ */ jsx$1("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a2, b2) {
  return a2 - b2;
}
function clamp$1(value, min2, max2) {
  if (value == null) {
    return min2;
  }
  return Math.min(Math.max(min2, value), max2);
}
function findClosest(values2, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values2.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i2 = 0; i2 < touchEvent.changedTouches.length; i2 += 1) {
      const touch = touchEvent.changedTouches[i2];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min2) {
  const nearest = Math.round((value - min2) / step) * step + min2;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values: values2,
  newValue,
  index
}) {
  const output = values2.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
const axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
const Identity$1 = (x2) => x2;
let cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(props) {
  const {
    ref,
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disableSwap = false,
    disabled = false,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name: name2,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    scale = Identity$1,
    step = 1,
    tabIndex,
    value: valueProp,
    isRtl = false
  } = props;
  const touchId = react.exports.useRef();
  const [active, setActive] = react.exports.useState(-1);
  const [open, setOpen] = react.exports.useState(-1);
  const [dragging, setDragging] = react.exports.useState(false);
  const moveCount = react.exports.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min2,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name: name2
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values2 = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values2 = values2.map((value) => clamp$1(value, min2, max2));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max2 - min2) / step) + 1)].map((_2, index) => ({
    value: min2 + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.exports.useState(-1);
  const sliderRef = react.exports.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(index);
    }
    setOpen(index);
    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(-1);
    }
    setOpen(-1);
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  useEnhancedEffect$1(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusVisible !== -1) {
    setFocusVisible(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values2[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }
    newValue = clamp$1(newValue, min2, max2);
    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values2[index]);
      newValue = newValue < values2[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }
    if (range) {
      if (disableSwap) {
        newValue = clamp$1(newValue, values2[index - 1] || -Infinity, values2[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusVisible(index);
    if (handleChange) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = react.exports.useRef();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false,
    values: values22
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width: width2,
      height: height2,
      bottom: bottom2,
      left: left2
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom2 - finger.y) / height2;
    } else {
      percent = (finger.x - left2) / width2;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min2, max2);
    if (step) {
      newValue = roundValueToStep(newValue, step, min2);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp$1(newValue, min2, max2);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values22, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp$1(newValue, values22[activeIndex - 1] || -Infinity, values22[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values22,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true,
      values: values2
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      values: values2
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values: values2
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  const stopListening = react.exports.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  react.exports.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  react.exports.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values: values2
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values2[0] : min2, min2, max2);
  const trackLeap = valueToPercent(values2[values2.length - 1], min2, max2) - trackOffset;
  const getRootProps = (otherHandlers) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (otherHandlers) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({}, mergedEventHandlers);
  };
  const getHiddenInputProps = (otherHandlers) => {
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max2),
      "aria-valuemin": scale(min2),
      name: name2,
      type: "range",
      min: props.min,
      max: props.max,
      step: props.step,
      disabled
    }, mergedEventHandlers, {
      style: _extends({}, visuallyHidden$1, {
        direction: isRtl ? "rtl" : "ltr",
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    axis,
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    dragging,
    marks,
    values: values2,
    active,
    focusVisible,
    open,
    range,
    trackOffset,
    trackLeap
  };
}
const _excluded$I = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];
const Identity = (x2) => x2;
const useUtilityClasses$v = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};
const Forward = ({
  children
}) => children;
const SliderUnstyled = /* @__PURE__ */ react.exports.forwardRef(function SliderUnstyled2(props, ref) {
  var _ref, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    className,
    component,
    classes: classesProp,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    onMouseDown,
    orientation = "horizontal",
    scale = Identity,
    step = 1,
    track = "normal",
    valueLabelDisplay = "off",
    valueLabelFormat = Identity,
    isRtl = false,
    components = {},
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$I);
  const ownerState = _extends({}, props, {
    mark: marksProp,
    classes: classesProp,
    disabled,
    isRtl,
    max: max2,
    min: min2,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    range,
    focusVisible,
    dragging,
    marks,
    values: values2,
    trackOffset,
    trackLeap
  } = useSlider(_extends({}, ownerState, {
    ref
  }));
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "span";
  const rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  const Rail = (_components$Rail = components.Rail) != null ? _components$Rail : "span";
  const railProps = appendOwnerState(Rail, componentsProps.rail, ownerState);
  const Track = (_components$Track = components.Track) != null ? _components$Track : "span";
  const trackProps = appendOwnerState(Track, componentsProps.track, ownerState);
  const trackStyle = _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap));
  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : "span";
  const thumbProps = appendOwnerState(Thumb, componentsProps.thumb, ownerState);
  const ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : SliderValueLabelUnstyled;
  const valueLabelProps = appendOwnerState(ValueLabel, componentsProps.valueLabel, ownerState);
  const Mark = (_components$Mark = components.Mark) != null ? _components$Mark : "span";
  const markProps = appendOwnerState(Mark, componentsProps.mark, ownerState);
  const MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : "span";
  const markLabelProps = appendOwnerState(MarkLabel, componentsProps.markLabel, ownerState);
  const Input3 = components.Input || "input";
  const inputProps = appendOwnerState(Input3, componentsProps.input, ownerState);
  const hiddenInputProps = getHiddenInputProps();
  const classes = useUtilityClasses$v(ownerState);
  return /* @__PURE__ */ jsxs(Root, _extends({}, rootProps, getRootProps({
    onMouseDown
  }), {
    className: clsx(classes.root, rootProps.className, className),
    children: [/* @__PURE__ */ jsx$1(Rail, _extends({}, railProps, {
      className: clsx(classes.rail, railProps.className)
    })), /* @__PURE__ */ jsx$1(Track, _extends({}, trackProps, {
      className: clsx(classes.track, trackProps.className),
      style: _extends({}, trackStyle, trackProps.style)
    })), marks.map((mark, index) => {
      const percent = valueToPercent(mark.value, min2, max2);
      const style2 = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values2.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values2[0] && mark.value <= values2[values2.length - 1] : mark.value <= values2[0]) || track === "inverted" && (range ? mark.value <= values2[0] || mark.value >= values2[values2.length - 1] : mark.value >= values2[0]);
      }
      return /* @__PURE__ */ jsxs(react.exports.Fragment, {
        children: [/* @__PURE__ */ jsx$1(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(Mark) && {
          markActive
        }, {
          style: _extends({}, style2, markProps.style),
          className: clsx(classes.mark, markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /* @__PURE__ */ jsx$1(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style2, markLabelProps.style),
          className: clsx(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values2.map((value, index) => {
      const percent = valueToPercent(value, min2, max2);
      const style2 = axisProps2[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === "off" ? Forward : ValueLabel;
      return /* @__PURE__ */ jsx$1(react.exports.Fragment, {
        children: /* @__PURE__ */ jsx$1(ValueLabelComponent, _extends({}, !isHostComponent(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open === index || active === index || valueLabelDisplay === "on",
          disabled
        }, valueLabelProps, {
          className: clsx(classes.valueLabel, valueLabelProps.className),
          children: /* @__PURE__ */ jsx$1(Thumb, _extends({
            "data-index": index
          }, thumbProps, getThumbProps(), {
            className: clsx(classes.thumb, thumbProps.className, active === index && classes.active, focusVisible === index && classes.focusVisible)
          }, !isHostComponent(Thumb) && {
            ownerState: _extends({}, ownerState, thumbProps.ownerState)
          }, {
            style: _extends({}, style2, {
              pointerEvents: disableSwap && active !== index ? "none" : void 0
            }, thumbProps.style),
            children: /* @__PURE__ */ jsx$1(Input3, _extends({}, hiddenInputProps, {
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values2[index]
            }, !isHostComponent(Input3) && {
              ownerState: _extends({}, ownerState, inputProps.ownerState)
            }, inputProps, {
              style: _extends({}, hiddenInputProps.style, inputProps.style)
            }))
          }))
        }))
      }, index);
    })]
  }));
});
var SliderUnstyled$1 = SliderUnstyled;
const _excluded$H = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}
const styles$3 = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)"
  }
};
const TextareaAutosize = /* @__PURE__ */ react.exports.forwardRef(function TextareaAutosize2(props, ref) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style: style2,
    value
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$H);
  const {
    current: isControlled
  } = react.exports.useRef(value != null);
  const inputRef = react.exports.useRef(null);
  const handleRef = useForkRef(ref, inputRef);
  const shadowRef = react.exports.useRef(null);
  const renders = react.exports.useRef(0);
  const [state, setState] = react.exports.useState({});
  const syncHeight = react.exports.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return;
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing2 = computedStyle["box-sizing"];
    const padding = getStyleValue(computedStyle, "padding-bottom") + getStyleValue(computedStyle, "padding-top");
    const border2 = getStyleValue(computedStyle, "border-bottom-width") + getStyleValue(computedStyle, "border-top-width");
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding + border2 : 0);
    const overflow2 = Math.abs(outerHeight - innerHeight) <= 1;
    setState((prevState) => {
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow2)) {
        renders.current += 1;
        return {
          overflow: overflow2,
          outerHeightStyle
        };
      }
      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  react.exports.useEffect(() => {
    const handleResize = debounce$1(() => {
      renders.current = 0;
      syncHeight();
    });
    const containerWindow = ownerWindow(inputRef.current);
    containerWindow.addEventListener("resize", handleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(inputRef.current);
    }
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [syncHeight]);
  useEnhancedEffect$1(() => {
    syncHeight();
  });
  react.exports.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsx$1("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        overflow: state.overflow ? "hidden" : null
      }, style2)
    }, other)), /* @__PURE__ */ jsx$1("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles$3.shadow, style2, {
        padding: 0
      })
    })]
  });
});
var TextareaAutosize$1 = TextareaAutosize;
function createMixins(breakpoints, spacing2, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}
const _excluded$G = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common$1.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common$1.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }
  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }
  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }
  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }
  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }
  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: "#ed6c02",
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette2) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette2, other = _objectWithoutPropertiesLoose$1(palette2, _excluded$G);
  const primary = palette2.primary || getDefaultPrimary(mode);
  const secondary = palette2.secondary || getDefaultSecondary(mode);
  const error = palette2.error || getDefaultError(mode);
  const info = palette2.info || getDefaultInfo(mode);
  const success = palette2.success || getDefaultSuccess(mode);
  const warning = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name: name2,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(formatMuiErrorMessage(11, name2 ? ` (${name2})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(formatMuiErrorMessage(12, name2 ? ` (${name2})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  const paletteOutput = deepmerge(_extends({
    common: common$1,
    mode,
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: augmentColor({
      color: error,
      name: "error"
    }),
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    info: augmentColor({
      color: info,
      name: "info"
    }),
    success: augmentColor({
      color: success,
      name: "success"
    }),
    grey: grey$1,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
const _excluded$F = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round$1(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: "uppercase"
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography2) {
  const _ref = typeof typography2 === "function" ? typography2(palette2) : typography2, {
    fontFamily: fontFamily2 = defaultFontFamily,
    fontSize: fontSize2 = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose$1(_ref, _excluded$F);
  const coef = fontSize2 / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    lineHeight: lineHeight2
  }, fontFamily2 === defaultFontFamily ? {
    letterSpacing: `${round$1(letterSpacing2 / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
  });
}
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows$1 = shadows;
const _excluded$E = ["duration", "easing", "delay"];
const easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay: delay2 = 0
    } = options;
    _objectWithoutPropertiesLoose$1(options, _excluded$E);
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay2 === "string" ? delay2 : formatMs(delay2)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
const zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex$1 = zIndex;
const _excluded$D = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose$1(options, _excluded$D);
  const palette2 = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
    palette: palette2,
    shadows: shadows$1.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}
const defaultTheme$1 = createTheme();
var defaultTheme$2 = defaultTheme$1;
function useTheme() {
  const theme = useTheme$1(defaultTheme$2);
  return theme;
}
function useThemeProps({
  props,
  name: name2
}) {
  return useThemeProps$1({
    props,
    name: name2,
    defaultTheme: defaultTheme$2
  });
}
const rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled({
  defaultTheme: defaultTheme$2,
  rootShouldForwardProp
});
var styled$1 = styled;
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _excluded$C = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses$u = (ownerState) => {
  const {
    color: color2,
    fontSize: fontSize2,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize(color2)}`, `fontSize${capitalize(fontSize2)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled$1("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _theme$palette$ownerS, _theme$palette, _theme$palette$ownerS2, _theme$palette2, _theme$palette2$actio, _theme$palette3, _theme$palette3$actio;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875"
    }[ownerState.fontSize],
    color: (_theme$palette$ownerS = (_theme$palette = theme.palette) == null ? void 0 : (_theme$palette$ownerS2 = _theme$palette[ownerState.color]) == null ? void 0 : _theme$palette$ownerS2.main) != null ? _theme$palette$ownerS : {
      action: (_theme$palette2 = theme.palette) == null ? void 0 : (_theme$palette2$actio = _theme$palette2.action) == null ? void 0 : _theme$palette2$actio.active,
      disabled: (_theme$palette3 = theme.palette) == null ? void 0 : (_theme$palette3$actio = _theme$palette3.action) == null ? void 0 : _theme$palette3$actio.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
const SvgIcon = /* @__PURE__ */ react.exports.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize: fontSize2 = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$C);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize: fontSize2,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$u(ownerState);
  return /* @__PURE__ */ jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    ownerState,
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, {
    children: [children, titleAccess ? /* @__PURE__ */ jsx$1("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = "SvgIcon";
var SvgIcon$1 = SvgIcon;
function createSvgIcon$1(path, displayName) {
  const Component = (props, ref) => /* @__PURE__ */ jsx$1(SvgIcon$1, _extends({
    "data-testid": `${displayName}Icon`,
    ref
  }, props, {
    children: path
  }));
  Component.muiName = SvgIcon$1.muiName;
  return /* @__PURE__ */ react.exports.memo(/* @__PURE__ */ react.exports.forwardRef(Component));
}
const unstable_ClassNameGenerator = {
  configure: (generator) => {
    console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
    ClassNameGenerator$1.configure(generator);
  }
};
var utils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  unstable_ClassNameGenerator,
  capitalize,
  createChainedFunction,
  createSvgIcon: createSvgIcon$1,
  debounce: debounce$1,
  deprecatedPropType,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  setRef,
  unstable_useEnhancedEffect: useEnhancedEffect$1,
  unstable_useId: useId,
  unsupportedProp,
  useControlled,
  useEventCallback,
  useForkRef,
  useIsFocusVisible
});
var config = {
  disabled: false
};
var TransitionGroupContext = React$1.createContext(null);
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;
    if (timeout != null && typeof timeout !== "number") {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== void 0 ? timeout.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps));
  };
  return Transition2;
}(React$1.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop$1() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && react.exports.isValidElement(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    react.exports.Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i2;
  var childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey]) {
      for (i2 = 0; i2 < nextKeysPending[nextKey].length; i2++) {
        var pendingNextKey = nextKeysPending[nextKey][i2];
        childMapping[nextKeysPending[nextKey][i2]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i2 = 0; i2 < pendingKeys.length; i2++) {
    childMapping[pendingKeys[i2]] = getValueForKey(pendingKeys[i2]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return react.exports.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!react.exports.isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = react.exports.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = react.exports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = react.exports.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.exports.isValidElement(prevChild)) {
      children[key] = react.exports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps$1 = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node2);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React$1.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React$1.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps$1;
var TransitionGroup$1 = TransitionGroup;
const reflow = (node2) => node2.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing: easing2,
    style: style2 = {}
  } = props;
  return {
    duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing2 === "object" ? easing2[options.mode] : easing2,
    delay: style2.transitionDelay
  };
}
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const _excluded$B = ["className", "component", "elevation", "square", "variant"];
const getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
const useUtilityClasses$t = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled$1("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create("box-shadow")
}, !ownerState.square && {
  borderRadius: theme.shape.borderRadius
}, ownerState.variant === "outlined" && {
  border: `1px solid ${theme.palette.divider}`
}, ownerState.variant === "elevation" && _extends({
  boxShadow: theme.shadows[ownerState.elevation]
}, theme.palette.mode === "dark" && {
  backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
})));
const Paper = /* @__PURE__ */ react.exports.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$B);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses$t(ownerState);
  return /* @__PURE__ */ jsx$1(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other));
});
var Paper$1 = Paper;
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = react.exports.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  react.exports.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsx$1("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsx$1("span", {
      className: childClassName
    })
  });
}
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses$1 = touchRippleClasses;
const _excluded$A = ["center", "classes", "className"];
let _ = (t2) => t2, _t, _t2, _t3, _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled$1("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled$1(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
const TouchRipple = /* @__PURE__ */ react.exports.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$A);
  const [ripples, setRipples] = react.exports.useState([]);
  const nextKey = react.exports.useRef(0);
  const rippleCallback = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = react.exports.useRef(false);
  const startTimer = react.exports.useRef(null);
  const startTimerCommit = react.exports.useRef(null);
  const container = react.exports.useRef(null);
  react.exports.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = react.exports.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb: cb2
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsx$1(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses$1.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb2;
  }, [classes]);
  const start2 = react.exports.useCallback((event = {}, options = {}, cb2) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
    } = options;
    if (event.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb: cb2
          });
        };
        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb: cb2
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = react.exports.useCallback(() => {
    start2({}, {
      pulsate: true
    });
  }, [start2]);
  const stop = react.exports.useCallback((event, cb2) => {
    clearTimeout(startTimer.current);
    if (event.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb2);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb2;
  }, []);
  react.exports.useImperativeHandle(ref, () => ({
    pulsate,
    start: start2,
    stop
  }), [pulsate, start2, stop]);
  return /* @__PURE__ */ jsx$1(TouchRippleRoot, _extends({
    className: clsx(classes.root, touchRippleClasses$1.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ jsx$1(TransitionGroup$1, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
var TouchRipple$1 = TouchRipple;
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses$1 = buttonBaseClasses;
const _excluded$z = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$s = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled$1("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  WebkitAppearance: "none",
  textDecoration: "none",
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
  },
  [`&.${buttonBaseClasses$1.disabled}`]: {
    pointerEvents: "none",
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ react.exports.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$z);
  const buttonRef = react.exports.useRef(null);
  const rippleRef = react.exports.useRef(null);
  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.exports.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  react.exports.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = react.exports.useState(false);
  react.exports.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  react.exports.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const keydownRef = react.exports.useRef(false);
  const handleKeyDown2 = useEventCallback((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses$s(ownerState);
  return /* @__PURE__ */ jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? /* @__PURE__ */ jsx$1(TouchRipple$1, _extends({
      ref: handleRippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
var ButtonBase$1 = ButtonBase;
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
var iconButtonClasses$1 = iconButtonClasses;
const _excluded$y = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
const useUtilityClasses$r = (ownerState) => {
  const {
    classes,
    disabled,
    color: color2,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color2 !== "default" && `color${capitalize(color2)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled$1(ButtonBase$1, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  color: theme.palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.color === "inherit" && {
  color: "inherit"
}, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
  color: theme.palette[ownerState.color].main
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}), ownerState.size === "small" && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === "large" && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${iconButtonClasses$1.disabled}`]: {
    backgroundColor: "transparent",
    color: theme.palette.action.disabled
  }
}));
const IconButton = /* @__PURE__ */ react.exports.forwardRef(function IconButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color: color2 = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$y);
  const ownerState = _extends({}, props, {
    edge,
    color: color2,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses$r(ownerState);
  return /* @__PURE__ */ jsx$1(IconButtonRoot, _extends({
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref,
    ownerState
  }, other, {
    children
  }));
});
var IconButton$1 = IconButton;
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const _excluded$x = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$q = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled$1("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color2) => {
  return colorTransformations[color2] || color2;
};
const Typography = /* @__PURE__ */ react.exports.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color2 = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color: color2
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$x);
  const ownerState = _extends({}, props, {
    align,
    color: color2,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$q(ownerState);
  return /* @__PURE__ */ jsx$1(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, other));
});
var Typography$1 = Typography;
const PopperRoot = styled$1(PopperUnstyled$1, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const Popper = /* @__PURE__ */ react.exports.forwardRef(function Popper2(inProps, ref) {
  const theme = useTheme$2();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopper"
  });
  return /* @__PURE__ */ jsx$1(PopperRoot, _extends({
    direction: theme == null ? void 0 : theme.direction
  }, props, {
    ref
  }));
});
var Popper$1 = Popper;
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
const FormControlContext = /* @__PURE__ */ react.exports.createContext();
var FormControlContext$1 = FormControlContext;
function useFormControl() {
  return react.exports.useContext(FormControlContext$1);
}
function GlobalStyles(props) {
  return /* @__PURE__ */ jsx$1(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$2
  }));
}
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var inputBaseClasses$1 = inputBaseClasses;
const _excluded$w = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "startAdornment", "type", "value"];
const rootOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
};
const inputOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
};
const useUtilityClasses$p = (ownerState) => {
  const {
    classes,
    color: color2,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size === "small" && "sizeSmall", multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled$1("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: theme.palette.text.primary,
  lineHeight: "1.4375em",
  boxSizing: "border-box",
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses$1.disabled}`]: {
    color: theme.palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
const InputBaseComponent = styled$1("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  const placeholder = {
    color: "currentColor",
    opacity: light2 ? 0.42 : 0.5,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = {
    opacity: light2 ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    margin: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    minWidth: 0,
    width: "100%",
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    "&:-ms-input-placeholder": placeholder,
    "&::-ms-input-placeholder": placeholder,
    "&:focus": {
      outline: 0
    },
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      WebkitAppearance: "none"
    },
    [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      "&:-ms-input-placeholder": placeholderHidden,
      "&::-ms-input-placeholder": placeholderHidden,
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      "&:focus:-ms-input-placeholder": placeholderVisible,
      "&:focus::-ms-input-placeholder": placeholderVisible
    },
    [`&.${inputBaseClasses$1.disabled}`]: {
      opacity: 1,
      WebkitTextFillColor: theme.palette.text.disabled
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    MozAppearance: "textfield"
  });
});
const inputGlobalStyles = /* @__PURE__ */ jsx$1(GlobalStyles, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
const InputBase = /* @__PURE__ */ react.exports.forwardRef(function InputBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id: id2,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name: name2,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$w);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = react.exports.useRef(value != null);
  const inputRef = react.exports.useRef();
  const handleInputRefWarning = react.exports.useCallback((instance) => {
  }, []);
  const handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
  const handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
  const handleInputRef = useForkRef(inputRef, handleInputRefProp);
  const [focused, setFocused] = react.exports.useState(false);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  react.exports.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = react.exports.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect$1(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  react.exports.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize$1;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  react.exports.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses$p(ownerState);
  const Root = components.Root || InputBaseRoot;
  const rootProps = componentsProps.root || {};
  const Input3 = components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, componentsProps.input);
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx(classes.root, rootProps.className, className),
      children: [startAdornment, /* @__PURE__ */ jsx$1(FormControlContext$1.Provider, {
        value: null,
        children: /* @__PURE__ */ jsx$1(Input3, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id: id2,
          onAnimationStart: handleAutoFill,
          name: name2,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input3) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
var InputBase$1 = InputBase;
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
const inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
var inputClasses$1 = inputClasses;
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
const outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
var outlinedInputClasses$1 = outlinedInputClasses;
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
const filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
var filledInputClasses$1 = filledInputClasses;
var ArrowDropDownIcon = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const _excluded$v = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles$2 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ react.exports.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = defaultTimeout,
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$v);
  const nodeRef = react.exports.useRef(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsx$1(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ react.exports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$2[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
var Fade$1 = Fade;
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
const _excluded$u = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];
const useUtilityClasses$o = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled$1("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.invisible && styles2.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
const Backdrop = /* @__PURE__ */ react.exports.forwardRef(function Backdrop2(inProps, ref) {
  var _components$Root, _componentsProps$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    component = "div",
    components = {},
    componentsProps = {},
    className,
    invisible = false,
    open,
    transitionDuration,
    TransitionComponent = Fade$1
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$u);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$o(ownerState);
  return /* @__PURE__ */ jsx$1(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ jsx$1(BackdropRoot, {
      "aria-hidden": true,
      as: (_components$Root = components.Root) != null ? _components$Root : component,
      className: clsx(classes.root, className),
      ownerState: _extends({}, ownerState, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState),
      classes,
      ref,
      children
    })
  }));
});
var Backdrop$1 = Backdrop;
const shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent(Slot);
};
var shouldSpreadAdditionalProps$1 = shouldSpreadAdditionalProps;
const defaultTheme = createTheme();
const Box = createBox({
  defaultTheme,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator$1.generate
});
var Box$1 = Box;
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "contained", "containedInherit", "containedPrimary", "containedSecondary", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses$1 = buttonClasses;
const ButtonGroupContext = /* @__PURE__ */ react.exports.createContext({});
var ButtonGroupContext$1 = ButtonGroupContext;
const _excluded$t = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
const useUtilityClasses$n = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize(color2)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color2 === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
const ButtonRoot = styled$1(ButtonBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color)}`], styles2[`size${capitalize(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.button, {
  minWidth: 64,
  padding: "6px 16px",
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
    duration: theme.transitions.duration.short
  }),
  "&:hover": _extends({
    textDecoration: "none",
    backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    border: `1px solid ${theme.palette[ownerState.color].main}`,
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }, ownerState.variant === "contained" && {
    backgroundColor: theme.palette.grey.A100,
    boxShadow: theme.shadows[4],
    "@media (hover: none)": {
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[300]
    }
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    backgroundColor: theme.palette[ownerState.color].dark,
    "@media (hover: none)": {
      backgroundColor: theme.palette[ownerState.color].main
    }
  }),
  "&:active": _extends({}, ownerState.variant === "contained" && {
    boxShadow: theme.shadows[8]
  }),
  [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
    boxShadow: theme.shadows[6]
  }),
  [`&.${buttonClasses$1.disabled}`]: _extends({
    color: theme.palette.action.disabled
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${theme.palette.action.disabledBackground}`
  }, ownerState.variant === "outlined" && ownerState.color === "secondary" && {
    border: `1px solid ${theme.palette.action.disabled}`
  }, ownerState.variant === "contained" && {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground
  })
}, ownerState.variant === "text" && {
  padding: "6px 8px"
}, ownerState.variant === "text" && ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].main
}, ownerState.variant === "outlined" && {
  padding: "5px 15px",
  border: `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`
}, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].main,
  border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
}, ownerState.variant === "contained" && {
  color: theme.palette.getContrastText(theme.palette.grey[300]),
  backgroundColor: theme.palette.grey[300],
  boxShadow: theme.shadows[2]
}, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].contrastText,
  backgroundColor: theme.palette[ownerState.color].main
}, ownerState.color === "inherit" && {
  color: "inherit",
  borderColor: "currentColor"
}, ownerState.size === "small" && ownerState.variant === "text" && {
  padding: "4px 5px",
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === "large" && ownerState.variant === "text" && {
  padding: "8px 11px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === "small" && ownerState.variant === "outlined" && {
  padding: "3px 9px",
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === "large" && ownerState.variant === "outlined" && {
  padding: "7px 21px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === "small" && ownerState.variant === "contained" && {
  padding: "4px 10px",
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === "large" && ownerState.variant === "contained" && {
  padding: "8px 22px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.fullWidth && {
  width: "100%"
}), ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.disabled}`]: {
    boxShadow: "none"
  }
});
const ButtonStartIcon = styled$1("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = styled$1("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /* @__PURE__ */ react.exports.forwardRef(function Button2(inProps, ref) {
  const contextProps = react.exports.useContext(ButtonGroupContext$1);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color: color2 = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$t);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses$n(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ jsx$1(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ jsx$1(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  return /* @__PURE__ */ jsxs(ButtonRoot, _extends({
    ownerState,
    className: clsx(className, contextProps.className),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
var Button$1 = Button;
function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass("PrivateSwitchBase", slot);
}
generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const _excluded$s = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
const useUtilityClasses$m = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled$1(ButtonBase$1)(({
  ownerState
}) => _extends({
  padding: 9,
  borderRadius: "50%"
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}));
const SwitchBaseInput = styled$1("input")({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
const SwitchBase = /* @__PURE__ */ react.exports.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id: id2,
    inputProps,
    inputRef,
    name: name2,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    tabIndex,
    type,
    value
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$s);
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses$m(ownerState);
  return /* @__PURE__ */ jsxs(SwitchBaseRoot, _extends({
    component: "span",
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ jsx$1(SwitchBaseInput, _extends({
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      className: classes.input,
      disabled,
      id: hasLabelFor && id2,
      name: name2,
      onChange: handleInputChange,
      readOnly,
      ref: inputRef,
      required,
      ownerState,
      tabIndex,
      type
    }, type === "checkbox" && value === void 0 ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});
var SwitchBase$1 = SwitchBase;
var CheckBoxOutlineBlankIcon = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank");
var CheckBoxIcon = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox");
var IndeterminateCheckBoxIcon = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass("MuiCheckbox", slot);
}
const checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]);
var checkboxClasses$1 = checkboxClasses;
const _excluded$r = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"];
const useUtilityClasses$l = (ownerState) => {
  const {
    classes,
    indeterminate,
    color: color2
  } = ownerState;
  const slots = {
    root: ["root", indeterminate && "indeterminate", `color${capitalize(color2)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const CheckboxRoot = styled$1(SwitchBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.indeterminate && styles2.indeterminate, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: theme.palette.text.secondary
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: alpha(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.color !== "default" && {
  [`&.${checkboxClasses$1.checked}, &.${checkboxClasses$1.indeterminate}`]: {
    color: theme.palette[ownerState.color].main
  },
  [`&.${checkboxClasses$1.disabled}`]: {
    color: theme.palette.action.disabled
  }
}));
const defaultCheckedIcon = /* @__PURE__ */ jsx$1(CheckBoxIcon, {});
const defaultIcon = /* @__PURE__ */ jsx$1(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /* @__PURE__ */ jsx$1(IndeterminateCheckBoxIcon, {});
const Checkbox = /* @__PURE__ */ react.exports.forwardRef(function Checkbox2(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;
  const props = useThemeProps({
    props: inProps,
    name: "MuiCheckbox"
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color: color2 = "primary",
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$r);
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = _extends({}, props, {
    color: color2,
    indeterminate,
    size
  });
  const classes = useUtilityClasses$l(ownerState);
  return /* @__PURE__ */ jsx$1(CheckboxRoot, _extends({
    type: "checkbox",
    inputProps: _extends({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: /* @__PURE__ */ react.exports.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /* @__PURE__ */ react.exports.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState,
    ref
  }, other, {
    classes
  }));
});
var Checkbox$1 = Checkbox;
const html = (theme, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  boxSizing: "border-box",
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && {
  colorScheme: theme.palette.mode
});
const body = (theme) => _extends({
  color: theme.palette.text.primary
}, theme.typography.body1, {
  backgroundColor: theme.palette.background.default,
  "@media print": {
    backgroundColor: theme.palette.common.white
  }
});
const styles$1 = (theme, enableColorScheme = false) => {
  var _theme$components, _theme$components$Mui;
  let defaultStyles = {
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme), {
      "&::backdrop": {
        backgroundColor: theme.palette.background.default
      }
    })
  };
  const themeOverrides = (_theme$components = theme.components) == null ? void 0 : (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsx$1(GlobalStyles, {
      styles: (theme) => styles$1(theme, enableColorScheme)
    }), children]
  });
}
const _excluded$q = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];
const extendUtilityClasses$1 = (ownerState) => {
  return ownerState.classes;
};
const ModalRoot = styled$1("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
const ModalBackdrop = styled$1(Backdrop$1, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles2) => {
    return styles2.backdrop;
  }
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ react.exports.forwardRef(function Modal2(inProps, ref) {
  var _componentsProps$root;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    closeAfterTransition = false,
    children,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$q);
  const [exited, setExited] = react.exports.useState(true);
  const commonProps = {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const ownerState = _extends({}, props, commonProps, {
    exited
  });
  const classes = extendUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsx$1(ModalUnstyled$1, _extends({
    components: _extends({
      Root: ModalRoot
    }, components),
    componentsProps: {
      root: _extends({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
        ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
      })
    },
    BackdropComponent,
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref
  }, other, {
    classes
  }, commonProps, {
    children
  }));
});
var Modal$1 = Modal;
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
const dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
var dialogClasses$1 = dialogClasses;
const DialogContext = /* @__PURE__ */ react.exports.createContext({});
var DialogContext$1 = DialogContext;
const _excluded$p = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
const DialogBackdrop = styled$1(Backdrop$1, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles2) => styles2.backdrop
})({
  zIndex: -1
});
const useUtilityClasses$k = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth: maxWidth2,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize(scroll)}`],
    paper: ["paper", `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth2))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
const DialogRoot = styled$1(Modal$1, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  "@media print": {
    position: "absolute !important"
  }
});
const DialogContainer = styled$1("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.container, styles2[`scroll${capitalize(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => _extends({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  outline: 0
}, ownerState.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, ownerState.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&:after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
}));
const DialogPaper = styled$1(Paper$1, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.paper, styles2[`scrollPaper${capitalize(ownerState.scroll)}`], styles2[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles2.paperFullWidth, ownerState.fullScreen && styles2.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, ownerState.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, ownerState.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
}, !ownerState.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, ownerState.maxWidth === "xs" && {
  maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,
  [`&.${dialogClasses$1.paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.maxWidth !== "xs" && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${dialogClasses$1.paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.fullWidth && {
  width: "calc(100% - 64px)"
}, ownerState.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${dialogClasses$1.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
}));
const Dialog = /* @__PURE__ */ react.exports.forwardRef(function Dialog2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth: maxWidth2 = "sm",
    onBackdropClick,
    onClose,
    open,
    PaperComponent = Paper$1,
    PaperProps = {},
    scroll = "paper",
    TransitionComponent = Fade$1,
    transitionDuration = defaultTransitionDuration,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$p);
  const ownerState = _extends({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth: maxWidth2,
    scroll
  });
  const classes = useUtilityClasses$k(ownerState);
  const backdropClick = react.exports.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = react.exports.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return /* @__PURE__ */ jsx$1(DialogRoot, _extends({
    className: clsx(classes.root, className),
    BackdropProps: _extends({
      transitionDuration,
      as: BackdropComponent
    }, BackdropProps),
    closeAfterTransition: true,
    BackdropComponent: DialogBackdrop,
    disableEscapeKeyDown,
    onClose,
    open,
    ref,
    onClick: handleBackdropClick,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx$1(TransitionComponent, _extends({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /* @__PURE__ */ jsx$1(DialogContainer, {
        className: clsx(classes.container),
        onMouseDown: handleMouseDown,
        ownerState,
        children: /* @__PURE__ */ jsx$1(DialogPaper, _extends({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: clsx(classes.paper, PaperProps.className),
          ownerState,
          children: /* @__PURE__ */ jsx$1(DialogContext$1.Provider, {
            value: dialogContextValue,
            children
          })
        }))
      })
    }))
  }));
});
var Dialog$1 = Dialog;
function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass("MuiDialogActions", slot);
}
generateUtilityClasses("MuiDialogActions", ["root", "spacing"]);
const _excluded$o = ["className", "disableSpacing"];
const useUtilityClasses$j = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = styled$1("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disableSpacing && styles2.spacing];
  }
})(({
  ownerState
}) => _extends({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !ownerState.disableSpacing && {
  "& > :not(:first-of-type)": {
    marginLeft: 8
  }
}));
const DialogActions = /* @__PURE__ */ react.exports.forwardRef(function DialogActions2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogActions"
  });
  const {
    className,
    disableSpacing = false
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$o);
  const ownerState = _extends({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsx$1(DialogActionsRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other));
});
var DialogActions$1 = DialogActions;
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass("MuiDialogTitle", slot);
}
const dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", ["root"]);
var dialogTitleClasses$1 = dialogTitleClasses;
const _excluded$n = ["className", "dividers"];
const useUtilityClasses$i = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
const DialogContentRoot = styled$1("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.dividers && styles2.dividers];
  }
})(({
  theme,
  ownerState
}) => _extends({
  flex: "1 1 auto",
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, ownerState.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`
} : {
  [`.${dialogTitleClasses$1.root} + &`]: {
    paddingTop: 0
  }
}));
const DialogContent = /* @__PURE__ */ react.exports.forwardRef(function DialogContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$n);
  const ownerState = _extends({}, props, {
    dividers
  });
  const classes = useUtilityClasses$i(ownerState);
  return /* @__PURE__ */ jsx$1(DialogContentRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other));
});
var DialogContent$1 = DialogContent;
const _excluded$m = ["className", "id"];
const useUtilityClasses$h = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = styled$1(Typography$1, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
const DialogTitle = /* @__PURE__ */ react.exports.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$m);
  const ownerState = props;
  const classes = useUtilityClasses$h(ownerState);
  const {
    titleId: id2 = idProp
  } = react.exports.useContext(DialogContext$1);
  return /* @__PURE__ */ jsx$1(DialogTitleRoot, _extends({
    component: "h2",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: id2
  }, other));
});
var DialogTitle$1 = DialogTitle;
const dividerClasses = generateUtilityClasses("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
var dividerClasses$1 = dividerClasses;
const _excluded$l = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "type"];
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const FilledInputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor2 = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  return _extends({
    position: "relative",
    backgroundColor: backgroundColor2,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      "@media (hover: none)": {
        backgroundColor: backgroundColor2
      }
    },
    [`&.${filledInputClasses$1.focused}`]: {
      backgroundColor: backgroundColor2
    },
    [`&.${filledInputClasses$1.disabled}`]: {
      backgroundColor: light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${theme.palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
    },
    [`&.${filledInputClasses$1.focused}:after`]: {
      transform: "scaleX(1)"
    },
    [`&.${filledInputClasses$1.error}:after`]: {
      borderBottomColor: theme.palette.error.main,
      transform: "scaleX(1)"
    },
    "&:before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
    },
    [`&:hover:not(.${filledInputClasses$1.disabled}):before`]: {
      borderBottom: `1px solid ${theme.palette.text.primary}`
    },
    [`&.${filledInputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
});
const FilledInputInput = styled$1(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}));
const FilledInput = /* @__PURE__ */ react.exports.forwardRef(function FilledInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$l);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses$g(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = componentsPropsProp ? deepmerge(componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
  return /* @__PURE__ */ jsx$1(InputBase$1, _extends({
    components: _extends({
      Root: FilledInputRoot,
      Input: FilledInputInput
    }, components),
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
FilledInput.muiName = "Input";
var FilledInput$1 = FilledInput;
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _excluded$k = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && `margin${capitalize(margin)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled$1("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, styles2[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles2.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
const FormControl = /* @__PURE__ */ react.exports.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color: color2 = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$k);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  });
  const classes = useUtilityClasses$f(ownerState);
  const [adornedStart, setAdornedStart] = react.exports.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      react.exports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = react.exports.useState(() => {
    let initialFilled = false;
    if (children) {
      react.exports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = react.exports.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const onFilled = react.exports.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = react.exports.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = {
    adornedStart,
    setAdornedStart,
    color: color2,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    size,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return /* @__PURE__ */ jsx$1(FormControlContext$1.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsx$1(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
var FormControl$1 = FormControl;
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]);
var formControlLabelClasses$1 = formControlLabelClasses;
const _excluded$j = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "value"];
const useUtilityClasses$e = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error"],
    label: ["label", disabled && "disabled"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = styled$1("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses$1.label}`]: styles2.label
    }, styles2.root, styles2[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  [`&.${formControlLabelClasses$1.disabled}`]: {
    cursor: "default"
  }
}, ownerState.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  marginRight: -11
}, ownerState.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, ownerState.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${formControlLabelClasses$1.label}`]: {
    [`&.${formControlLabelClasses$1.disabled}`]: {
      color: theme.palette.text.disabled
    }
  }
}));
const FormControlLabel = /* @__PURE__ */ react.exports.forwardRef(function FormControlLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label: labelProp,
    labelPlacement = "end"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$j);
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  const controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    disabled,
    labelPlacement,
    error: fcs.error
  });
  const classes = useUtilityClasses$e(ownerState);
  let label = labelProp;
  if (label != null && label.type !== Typography$1 && !disableTypography) {
    label = /* @__PURE__ */ jsx$1(Typography$1, _extends({
      component: "span",
      className: classes.label
    }, componentsProps.typography, {
      children: label
    }));
  }
  return /* @__PURE__ */ jsxs(FormControlLabelRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ react.exports.cloneElement(control, controlProps), label]
  }));
});
var FormControlLabel$1 = FormControlLabel;
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var formHelperTextClasses$1 = formHelperTextClasses;
var _span$2;
const _excluded$i = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = styled$1("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.size && styles2[`size${capitalize(ownerState.size)}`], ownerState.contained && styles2.contained, ownerState.filled && styles2.filled];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: theme.palette.text.secondary
}, theme.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses$1.disabled}`]: {
    color: theme.palette.text.disabled
  },
  [`&.${formHelperTextClasses$1.error}`]: {
    color: theme.palette.error.main
  }
}, ownerState.size === "small" && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
const FormHelperText = /* @__PURE__ */ react.exports.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$i);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = _extends({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$d(ownerState);
  return /* @__PURE__ */ jsx$1(FormHelperTextRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: children === " " ? _span$2 || (_span$2 = /* @__PURE__ */ jsx$1("span", {
      className: "notranslate",
      children: "\u200B"
    })) : children
  }));
});
var FormHelperText$1 = FormHelperText;
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
const formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var formLabelClasses$1 = formLabelClasses;
const _excluded$h = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
const useUtilityClasses$c = (ownerState) => {
  const {
    classes,
    color: color2,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = styled$1("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, ownerState.color === "secondary" && styles2.colorSecondary, ownerState.filled && styles2.filled);
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: theme.palette.text.secondary
}, theme.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses$1.focused}`]: {
    color: theme.palette[ownerState.color].main
  },
  [`&.${formLabelClasses$1.disabled}`]: {
    color: theme.palette.text.disabled
  },
  [`&.${formLabelClasses$1.error}`]: {
    color: theme.palette.error.main
  }
}));
const AsteriskComponent = styled$1("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles2) => styles2.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses$1.error}`]: {
    color: theme.palette.error.main
  }
}));
const FormLabel = /* @__PURE__ */ react.exports.forwardRef(function FormLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$h);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$c(ownerState);
  return /* @__PURE__ */ jsxs(FormLabelRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ jsxs(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: ["\u2009", "*"]
    })]
  }));
});
var FormLabel$1 = FormLabel;
const _excluded$g = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isSafari154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /version\/15\.[4-9]/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ react.exports.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = "auto",
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$g);
  const timer = react.exports.useRef();
  const autoTimeout = react.exports.useRef();
  const theme = useTheme();
  const nodeRef = react.exports.useRef(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const {
      duration: transitionDuration,
      delay: delay2,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay: delay2
    }), theme.transitions.create("transform", {
      duration: isSafari154 ? duration2 : duration2 * 0.666,
      delay: delay2,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const {
      duration: transitionDuration,
      delay: delay2,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay: delay2
    }), theme.transitions.create("transform", {
      duration: isSafari154 ? duration2 : duration2 * 0.666,
      delay: isSafari154 ? delay2 : delay2 || duration2 * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node2.style.opacity = 0;
    node2.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (timeout === "auto") {
      timer.current = setTimeout(next2, autoTimeout.current || 0);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  react.exports.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ jsx$1(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ react.exports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
Grow.muiSupportAuto = true;
var Grow$1 = Grow;
function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
  const [match2, setMatch] = react.exports.useState(() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }
    return defaultMatches;
  });
  useEnhancedEffect$1(() => {
    let active = true;
    if (!supportMatchMedia) {
      return void 0;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);
  return match2;
}
const maybeReactUseSyncExternalStore = React$2["useSyncExternalStore"];
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia) {
  const getDefaultSnapshot = react.exports.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = react.exports.useMemo(() => {
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia]);
  const [getSnapshot, subscribe] = react.exports.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {
      }];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, (notify) => {
      mediaQueryList.addListener(notify);
      return () => {
        mediaQueryList.removeListener(notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match2 = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match2;
}
function useMediaQuery(queryInput, options = {}) {
  const theme = useTheme$2();
  const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    ssrMatchMedia = null,
    noSsr
  } = getThemeProps({
    name: "MuiUseMediaQuery",
    props: options,
    theme
  });
  let query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, "");
  const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== void 0 ? useMediaQueryNew : useMediaQueryOld;
  const match2 = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
  return match2;
}
const _excluded$f = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "type"];
const useUtilityClasses$b = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const InputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${theme.palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
    },
    [`&.${inputClasses$1.focused}:after`]: {
      transform: "scaleX(1)"
    },
    [`&.${inputClasses$1.error}:after`]: {
      borderBottomColor: theme.palette.error.main,
      transform: "scaleX(1)"
    },
    "&:before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
    },
    [`&:hover:not(.${inputClasses$1.disabled}):before`]: {
      borderBottom: `2px solid ${theme.palette.text.primary}`,
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
});
const InputInput = styled$1(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ react.exports.forwardRef(function Input2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$f);
  const classes = useUtilityClasses$b(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = componentsPropsProp ? deepmerge(componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  return /* @__PURE__ */ jsx$1(InputBase$1, _extends({
    components: _extends({
      Root: InputRoot,
      Input: InputInput
    }, components),
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
Input.muiName = "Input";
var Input$1 = Input;
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const _excluded$e = ["disableAnimation", "margin", "shrink", "variant"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size === "small" && "sizeSmall", variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends({}, classes, composedClasses);
};
const InputLabelRoot = styled$1(FormLabel$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses$1.asterisk}`]: styles2.asterisk
    }, styles2.root, ownerState.formControl && styles2.formControl, ownerState.size === "small" && styles2.sizeSmall, ownerState.shrink && styles2.shrink, !ownerState.disableAnimation && styles2.animated, styles2[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, ownerState.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  transform: "translate(0, 20px) scale(1)"
}, ownerState.size === "small" && {
  transform: "translate(0, 17px) scale(1)"
}, ownerState.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(["color", "transform", "max-width"], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === "filled" && _extends({
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, ownerState.shrink && _extends({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends({
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, ownerState.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  maxWidth: "calc(133% - 24px)",
  transform: "translate(14px, -9px) scale(0.75)"
})));
const InputLabel = /* @__PURE__ */ react.exports.forwardRef(function InputLabel2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    shrink: shrinkProp
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$e);
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required"]
  });
  const ownerState = _extends({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required
  });
  const classes = useUtilityClasses$a(ownerState);
  return /* @__PURE__ */ jsx$1(InputLabelRoot, _extends({
    "data-shrink": shrink,
    ownerState,
    ref
  }, other, {
    classes
  }));
});
var InputLabel$1 = InputLabel;
const ListContext = /* @__PURE__ */ react.exports.createContext({});
var ListContext$1 = ListContext;
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
const _excluded$d = ["children", "className", "component", "dense", "disablePadding", "subheader"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled$1("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /* @__PURE__ */ react.exports.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$d);
  const context = react.exports.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsx$1(ListContext$1.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxs(ListRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
var List$1 = List;
const listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
var listItemIconClasses$1 = listItemIconClasses;
const listItemTextClasses = generateUtilityClasses("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
var listItemTextClasses$1 = listItemTextClasses;
const _excluded$c = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ react.exports.forwardRef(function MenuList2(props, ref) {
  const {
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$c);
  const listRef = react.exports.useRef(null);
  const textCriteriaRef = react.exports.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react.exports.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
        listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown2 = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  react.exports.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const items = react.exports.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ react.exports.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsx$1(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
var MenuList$1 = MenuList;
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
generateUtilityClasses("MuiPopover", ["root", "paper"]);
const _excluded$b = ["onEntering"], _excluded2$2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function getOffsetTop(rect, vertical) {
  let offset2 = 0;
  if (typeof vertical === "number") {
    offset2 = vertical;
  } else if (vertical === "center") {
    offset2 = rect.height / 2;
  } else if (vertical === "bottom") {
    offset2 = rect.height;
  }
  return offset2;
}
function getOffsetLeft(rect, horizontal) {
  let offset2 = 0;
  if (typeof horizontal === "number") {
    offset2 = horizontal;
  } else if (horizontal === "center") {
    offset2 = rect.width / 2;
  } else if (horizontal === "right") {
    offset2 = rect.width;
  }
  return offset2;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n2) => typeof n2 === "number" ? `${n2}px` : n2).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled$1(Modal$1, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const PopoverPaper = styled$1(Paper$1, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  outline: 0
});
const Popover = /* @__PURE__ */ react.exports.forwardRef(function Popover2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps = {},
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow$1,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose$1(props.TransitionProps, _excluded$b), other = _objectWithoutPropertiesLoose$1(props, _excluded2$2);
  const paperRef = react.exports.useRef();
  const handlePaperRef = useForkRef(paperRef, PaperProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    PaperProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses$8(ownerState);
  const getAnchorOffset = react.exports.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = react.exports.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = react.exports.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top2 = anchorOffset.top - elemTransformOrigin.vertical;
    let left2 = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom2 = top2 + elemRect.height;
    const right2 = left2 + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (top2 < marginThreshold) {
      const diff = top2 - marginThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom2 > heightThreshold) {
      const diff = bottom2 - heightThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (left2 < marginThreshold) {
      const diff = left2 - marginThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right2 > widthThreshold) {
      const diff = right2 - widthThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top2)}px`,
      left: `${Math.round(left2)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const setPositioningStyles = react.exports.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  react.exports.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  react.exports.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  react.exports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce$1(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  return /* @__PURE__ */ jsx$1(PopoverRoot, _extends({
    BackdropProps: {
      invisible: true
    },
    className: clsx(classes.root, className),
    container,
    open,
    ref,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx$1(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ jsx$1(PopoverPaper, _extends({
        elevation
      }, PaperProps, {
        ref: handlePaperRef,
        className: clsx(classes.paper, PaperProps.className),
        children
      }))
    }))
  }));
});
var Popover$1 = Popover;
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
const _excluded$a = ["onEntering"], _excluded2$1 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled$1(Popover$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const MenuPaper = styled$1(Paper$1, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  maxHeight: "calc(100% - 96px)",
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled$1(MenuList$1, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles2) => styles2.list
})({
  outline: 0
});
const Menu = /* @__PURE__ */ react.exports.forwardRef(function Menu2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu"
  } = props, TransitionProps = _objectWithoutPropertiesLoose$1(props.TransitionProps, _excluded$a), other = _objectWithoutPropertiesLoose$1(props, _excluded2$1);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses$7(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = react.exports.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  react.exports.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  return /* @__PURE__ */ jsx$1(MenuRoot, _extends({
    classes: PopoverClasses,
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({
      component: MenuPaper
    }, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    className: classes.root,
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx$1(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className),
      children
    }))
  }));
});
var Menu$1 = Menu;
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
const menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
var menuItemClasses$1 = menuItemClasses;
const _excluded$9 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"];
const overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.dense && styles2.dense, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters];
};
const useUtilityClasses$6 = (ownerState) => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const MenuItemRoot = styled$1(ButtonBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: theme.palette.action.hover,
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${menuItemClasses$1.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${menuItemClasses$1.focusVisible}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${menuItemClasses$1.selected}:hover`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${menuItemClasses$1.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus
  },
  [`&.${menuItemClasses$1.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity
  },
  [`& + .${dividerClasses$1.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses$1.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses$1.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses$1.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses$1.root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, ownerState.dense && _extends({
  minHeight: 32,
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  [`& .${listItemIconClasses$1.root} svg`]: {
    fontSize: "1.25rem"
  }
})));
const MenuItem = /* @__PURE__ */ react.exports.forwardRef(function MenuItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenuItem"
  });
  const {
    autoFocus = false,
    component = "li",
    dense = false,
    divider = false,
    disableGutters = false,
    focusVisibleClassName,
    role = "menuitem",
    tabIndex: tabIndexProp
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$9);
  const context = react.exports.useContext(ListContext$1);
  const childContext = {
    dense: dense || context.dense || false,
    disableGutters
  };
  const menuItemRef = react.exports.useRef(null);
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  const ownerState = _extends({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });
  const classes = useUtilityClasses$6(props);
  const handleRef = useForkRef(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return /* @__PURE__ */ jsx$1(ListContext$1.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsx$1(MenuItemRoot, _extends({
      ref: handleRef,
      role,
      tabIndex,
      component,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName)
    }, other, {
      ownerState,
      classes
    }))
  });
});
var MenuItem$1 = MenuItem;
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
var nativeSelectClasses$1 = nativeSelectClasses;
const _excluded$8 = ["className", "disabled", "IconComponent", "inputRef", "variant"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: "none",
  WebkitAppearance: "none",
  userSelect: "none",
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
    borderRadius: 0
  },
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses$1.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: theme.palette.background.paper
  },
  "&&&": {
    paddingRight: 24,
    minWidth: 16
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: theme.shape.borderRadius,
  "&:focus": {
    borderRadius: theme.shape.borderRadius
  },
  "&&&": {
    paddingRight: 32
  }
});
const NativeSelectSelect = styled$1("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.select, styles2[ownerState.variant], {
      [`&.${nativeSelectClasses$1.multiple}`]: styles2.multiple
    }];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  pointerEvents: "none",
  color: theme.palette.action.active,
  [`&.${nativeSelectClasses$1.disabled}`]: {
    color: theme.palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
const NativeSelectIcon = styled$1("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const NativeSelectInput = /* @__PURE__ */ react.exports.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$8);
  const ownerState = _extends({}, props, {
    disabled,
    variant
  });
  const classes = useUtilityClasses$5(ownerState);
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsx$1(NativeSelectSelect, _extends({
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ jsx$1(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
var NativeSelectInput$1 = NativeSelectInput;
var _span$1;
const _excluded$7 = ["children", "classes", "className", "label", "notched"];
const NotchedOutlineRoot$1 = styled$1("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled$1("legend")(({
  ownerState,
  theme
}) => _extends({
  float: "unset",
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  width: "auto",
  padding: 0,
  height: 11,
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$7);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ jsx$1(NotchedOutlineRoot$1, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx$1(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsx$1("span", {
        children: label
      }) : _span$1 || (_span$1 = /* @__PURE__ */ jsx$1("span", {
        className: "notranslate",
        children: "\u200B"
      }))
    })
  }));
}
const _excluded$6 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "type"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const OutlinedInputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette.text.primary
    },
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: borderColor2
      }
    },
    [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette.error.main
    },
    [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
const NotchedOutlineRoot = styled$1(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles2) => styles2.notchedOutline
})(({
  theme
}) => ({
  borderColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"
}));
const OutlinedInputInput = styled$1(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: "16.5px 14px",
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /* @__PURE__ */ react.exports.forwardRef(function OutlinedInput2(inProps, ref) {
  var _React$Fragment;
  const props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$6);
  const classes = useUtilityClasses$4(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["required"]
  });
  return /* @__PURE__ */ jsx$1(InputBase$1, _extends({
    components: _extends({
      Root: OutlinedInputRoot,
      Input: OutlinedInputInput
    }, components),
    renderSuffix: (state) => /* @__PURE__ */ jsx$1(NotchedOutlineRoot, {
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ jsxs(react.exports.Fragment, {
        children: [label, "\xA0", "*"]
      })) : label,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.muiName = "Input";
var OutlinedInput$1 = OutlinedInput;
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
const selectClasses = generateUtilityClasses("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
var selectClasses$1 = selectClasses;
var _span;
const _excluded$5 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
const SelectSelect = styled$1("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [
      {
        [`&.${selectClasses$1.select}`]: styles2.select
      },
      {
        [`&.${selectClasses$1.select}`]: styles2[ownerState.variant]
      },
      {
        [`&.${selectClasses$1.multiple}`]: styles2.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  [`&.${selectClasses$1.select}`]: {
    height: "auto",
    minHeight: "1.4375em",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled$1("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = styled$1("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles2) => styles2.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a2, b2) {
  if (typeof b2 === "object" && b2 !== null) {
    return a2 === b2;
  }
  return String(a2) === String(b2);
}
function isEmpty(display2) {
  return display2 == null || typeof display2 === "string" && !display2.trim();
}
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ react.exports.forwardRef(function SelectInput2(props, ref) {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name: name2,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$5);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = react.exports.useRef(null);
  const displayRef = react.exports.useRef(null);
  const [displayNode, setDisplayNode] = react.exports.useState(null);
  const {
    current: isOpenControlled
  } = react.exports.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = react.exports.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = react.exports.useCallback((node2) => {
    displayRef.current = node2;
    if (node2) {
      setDisplayNode(node2);
    }
  }, []);
  react.exports.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  react.exports.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  react.exports.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  react.exports.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = react.exports.Children.toArray(children);
  const handleChange = (event) => {
    const index = childrenArray.map((child2) => child2.props.value).indexOf(event.target.value);
    if (index === -1) {
      return;
    }
    const child = childrenArray[index];
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name: name2
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown2 = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name: name2
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display2;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display2 = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(child)) {
      return null;
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some((v2) => areEqualValues(v2, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    return /* @__PURE__ */ react.exports.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      "data-value": child.props.value
    });
  });
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display2 = null;
      } else {
        display2 = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display2 = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name2 ? `mui-component-select-${name2}` : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open
  });
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsx$1(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "button",
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown2,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx(classes.select, className, SelectDisplayProps.className),
      id: buttonId,
      children: isEmpty(display2) ? _span || (_span = /* @__PURE__ */ jsx$1("span", {
        className: "notranslate",
        children: "\u200B"
      })) : display2
    })), /* @__PURE__ */ jsx$1(SelectNativeInput, _extends({
      value: Array.isArray(value) ? value.join(",") : value,
      name: name2,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), /* @__PURE__ */ jsx$1(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsx$1(Menu$1, _extends({
      id: `menu-${name2 || ""}`,
      anchorEl: displayNode,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        disableListWrap: true
      }, MenuProps.MenuListProps),
      PaperProps: _extends({}, MenuProps.PaperProps, {
        style: _extends({
          minWidth: menuMinWidth
        }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
      }),
      children: items
    }))]
  });
});
var SelectInput$1 = SelectInput;
var _StyledInput, _StyledFilledInput;
const _excluded$4 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
const styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles2) => styles2.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
const StyledInput = styled$1(Input$1, styledRootConfig)("");
const StyledOutlinedInput = styled$1(OutlinedInput$1, styledRootConfig)("");
const StyledFilledInput = styled$1(FilledInput$1, styledRootConfig)("");
const Select = /* @__PURE__ */ react.exports.forwardRef(function Select2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id: id2,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$4);
  const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  const variant = fcs.variant || variantProp;
  const InputComponent = input || {
    standard: _StyledInput || (_StyledInput = /* @__PURE__ */ jsx$1(StyledInput, {})),
    outlined: /* @__PURE__ */ jsx$1(StyledOutlinedInput, {
      label
    }),
    filled: _StyledFilledInput || (_StyledFilledInput = /* @__PURE__ */ jsx$1(StyledFilledInput, {}))
  }[variant];
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses$2(ownerState);
  const inputComponentRef = useForkRef(ref, InputComponent.ref);
  return /* @__PURE__ */ react.exports.cloneElement(InputComponent, _extends({
    inputComponent,
    inputProps: _extends({
      children,
      IconComponent,
      variant,
      type: void 0,
      multiple
    }, native ? {
      id: id2
    } : {
      autoWidth,
      defaultOpen,
      displayEmpty,
      labelId,
      MenuProps,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps: _extends({
        id: id2
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? deepmerge(classes, inputProps.classes) : classes
    }, input ? input.props.inputProps : {})
  }, multiple && native && variant === "outlined" ? {
    notched: true
  } : {}, {
    ref: inputComponentRef,
    className: clsx(InputComponent.props.className, className),
    variant
  }, other));
});
Select.muiName = "Select";
var Select$1 = Select;
const _excluded$3 = ["component", "components", "componentsProps", "color", "size"];
const sliderClasses = _extends({}, sliderUnstyledClasses$1, generateUtilityClasses("MuiSlider", ["colorPrimary", "colorSecondary", "thumbColorPrimary", "thumbColorSecondary", "sizeSmall", "thumbSizeSmall"]));
const SliderRoot = styled$1("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const marks = ownerState.marksProp === true && ownerState.step !== null ? [...Array(Math.floor((ownerState.max - ownerState.min) / ownerState.step) + 1)].map((_2, index) => ({
      value: ownerState.min + ownerState.step * index
    })) : ownerState.marksProp || [];
    const marked = marks.length > 0 && marks.some((mark) => mark.label);
    return [styles2.root, styles2[`color${capitalize(ownerState.color)}`], ownerState.size !== "medium" && styles2[`size${capitalize(ownerState.size)}`], marked && styles2.marked, ownerState.orientation === "vertical" && styles2.vertical, ownerState.track === "inverted" && styles2.trackInverted, ownerState.track === false && styles2.trackFalse];
  }
})(({
  theme,
  ownerState
}) => _extends({
  borderRadius: 12,
  boxSizing: "content-box",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  touchAction: "none",
  color: theme.palette[ownerState.color].main,
  WebkitTapHighlightColor: "transparent"
}, ownerState.orientation === "horizontal" && _extends({
  height: 4,
  width: "100%",
  padding: "13px 0",
  "@media (pointer: coarse)": {
    padding: "20px 0"
  }
}, ownerState.size === "small" && {
  height: 2
}, ownerState.marked && {
  marginBottom: 20
}), ownerState.orientation === "vertical" && _extends({
  height: "100%",
  width: 4,
  padding: "0 13px",
  "@media (pointer: coarse)": {
    padding: "0 20px"
  }
}, ownerState.size === "small" && {
  width: 2
}, ownerState.marked && {
  marginRight: 44
}), {
  "@media print": {
    colorAdjust: "exact"
  },
  [`&.${sliderClasses.disabled}`]: {
    pointerEvents: "none",
    cursor: "default",
    color: theme.palette.grey[400]
  },
  [`&.${sliderClasses.dragging}`]: {
    [`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]: {
      transition: "none"
    }
  }
}));
const SliderRail = styled$1("span", {
  name: "MuiSlider",
  slot: "Rail",
  overridesResolver: (props, styles2) => styles2.rail
})(({
  ownerState
}) => _extends({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38
}, ownerState.orientation === "horizontal" && {
  width: "100%",
  height: "inherit",
  top: "50%",
  transform: "translateY(-50%)"
}, ownerState.orientation === "vertical" && {
  height: "100%",
  width: "inherit",
  left: "50%",
  transform: "translateX(-50%)"
}, ownerState.track === "inverted" && {
  opacity: 1
}));
const SliderTrack = styled$1("span", {
  name: "MuiSlider",
  slot: "Track",
  overridesResolver: (props, styles2) => styles2.track
})(({
  theme,
  ownerState
}) => {
  const color2 = theme.palette.mode === "light" ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.5);
  return _extends({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(["left", "width", "bottom", "height"], {
      duration: theme.transitions.duration.shortest
    })
  }, ownerState.size === "small" && {
    border: "none"
  }, ownerState.orientation === "horizontal" && {
    height: "inherit",
    top: "50%",
    transform: "translateY(-50%)"
  }, ownerState.orientation === "vertical" && {
    width: "inherit",
    left: "50%",
    transform: "translateX(-50%)"
  }, ownerState.track === false && {
    display: "none"
  }, ownerState.track === "inverted" && {
    backgroundColor: color2,
    borderColor: color2
  });
});
const SliderThumb = styled$1("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.thumb, styles2[`thumbColor${capitalize(ownerState.color)}`], ownerState.size !== "medium" && styles2[`thumbSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "absolute",
  width: 20,
  height: 20,
  boxSizing: "border-box",
  borderRadius: "50%",
  outline: 0,
  backgroundColor: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["box-shadow", "left", "bottom"], {
    duration: theme.transitions.duration.shortest
  })
}, ownerState.size === "small" && {
  width: 12,
  height: 12
}, ownerState.orientation === "horizontal" && {
  top: "50%",
  transform: "translate(-50%, -50%)"
}, ownerState.orientation === "vertical" && {
  left: "50%",
  transform: "translate(-50%, 50%)"
}, {
  "&:before": _extends({
    position: "absolute",
    content: '""',
    borderRadius: "inherit",
    width: "100%",
    height: "100%",
    boxShadow: theme.shadows[2]
  }, ownerState.size === "small" && {
    boxShadow: "none"
  }),
  "&::after": {
    position: "absolute",
    content: '""',
    borderRadius: "50%",
    width: 42,
    height: 42,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  [`&:hover, &.${sliderClasses.focusVisible}`]: {
    boxShadow: `0px 0px 0px 8px ${alpha(theme.palette[ownerState.color].main, 0.16)}`,
    "@media (hover: none)": {
      boxShadow: "none"
    }
  },
  [`&.${sliderClasses.active}`]: {
    boxShadow: `0px 0px 0px 14px ${alpha(theme.palette[ownerState.color].main, 0.16)}`
  },
  [`&.${sliderClasses.disabled}`]: {
    "&:hover": {
      boxShadow: "none"
    }
  }
}));
const SliderValueLabel = styled$1(SliderValueLabelUnstyled, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (props, styles2) => styles2.valueLabel
})(({
  theme,
  ownerState
}) => _extends({
  [`&.${sliderClasses.valueLabelOpen}`]: {
    transform: "translateY(-100%) scale(1)"
  },
  zIndex: 1,
  whiteSpace: "nowrap"
}, theme.typography.body2, {
  fontWeight: 500,
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest
  }),
  top: -10,
  transformOrigin: "bottom center",
  transform: "translateY(-100%) scale(0)",
  position: "absolute",
  backgroundColor: theme.palette.grey[600],
  borderRadius: 2,
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem"
}, ownerState.size === "small" && {
  fontSize: theme.typography.pxToRem(12),
  padding: "0.25rem 0.5rem"
}, {
  "&:before": {
    position: "absolute",
    content: '""',
    width: 8,
    height: 8,
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%) rotate(45deg)",
    backgroundColor: "inherit"
  }
}));
const SliderMark = styled$1("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "markActive",
  overridesResolver: (props, styles2) => styles2.mark
})(({
  theme,
  ownerState,
  markActive
}) => _extends({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor"
}, ownerState.orientation === "horizontal" && {
  top: "50%",
  transform: "translate(-1px, -50%)"
}, ownerState.orientation === "vertical" && {
  left: "50%",
  transform: "translate(-50%, 1px)"
}, markActive && {
  backgroundColor: theme.palette.background.paper,
  opacity: 0.8
}));
const SliderMarkLabel = styled$1("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "markLabelActive",
  overridesResolver: (props, styles2) => styles2.markLabel
})(({
  theme,
  ownerState,
  markLabelActive
}) => _extends({}, theme.typography.body2, {
  color: theme.palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap"
}, ownerState.orientation === "horizontal" && {
  top: 30,
  transform: "translateX(-50%)",
  "@media (pointer: coarse)": {
    top: 40
  }
}, ownerState.orientation === "vertical" && {
  left: 36,
  transform: "translateY(50%)",
  "@media (pointer: coarse)": {
    left: 44
  }
}, markLabelActive && {
  color: theme.palette.text.primary
}));
const extendUtilityClasses = (ownerState) => {
  const {
    color: color2,
    size,
    classes = {}
  } = ownerState;
  return _extends({}, classes, {
    root: clsx(classes.root, getSliderUtilityClass(`color${capitalize(color2)}`), classes[`color${capitalize(color2)}`], size && [getSliderUtilityClass(`size${capitalize(size)}`), classes[`size${capitalize(size)}`]]),
    thumb: clsx(classes.thumb, getSliderUtilityClass(`thumbColor${capitalize(color2)}`), classes[`thumbColor${capitalize(color2)}`], size && [getSliderUtilityClass(`thumbSize${capitalize(size)}`), classes[`thumbSize${capitalize(size)}`]])
  });
};
const Slider = /* @__PURE__ */ react.exports.forwardRef(function Slider2(inputProps, ref) {
  var _componentsProps$root, _componentsProps$thum, _componentsProps$trac, _componentsProps$valu;
  const props = useThemeProps({
    props: inputProps,
    name: "MuiSlider"
  });
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const {
    component = "span",
    components = {},
    componentsProps = {},
    color: color2 = "primary",
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$3);
  const ownerState = _extends({}, props, {
    color: color2,
    size
  });
  const classes = extendUtilityClasses(ownerState);
  return /* @__PURE__ */ jsx$1(SliderUnstyled$1, _extends({}, other, {
    isRtl,
    components: _extends({
      Root: SliderRoot,
      Rail: SliderRail,
      Track: SliderTrack,
      Thumb: SliderThumb,
      ValueLabel: SliderValueLabel,
      Mark: SliderMark,
      MarkLabel: SliderMarkLabel
    }, components),
    componentsProps: _extends({}, componentsProps, {
      root: _extends({}, componentsProps.root, shouldSpreadAdditionalProps$1(components.Root) && {
        as: component,
        ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState, {
          color: color2,
          size
        })
      }),
      thumb: _extends({}, componentsProps.thumb, shouldSpreadAdditionalProps$1(components.Thumb) && {
        ownerState: _extends({}, (_componentsProps$thum = componentsProps.thumb) == null ? void 0 : _componentsProps$thum.ownerState, {
          color: color2,
          size
        })
      }),
      track: _extends({}, componentsProps.track, shouldSpreadAdditionalProps$1(components.Track) && {
        ownerState: _extends({}, (_componentsProps$trac = componentsProps.track) == null ? void 0 : _componentsProps$trac.ownerState, {
          color: color2,
          size
        })
      }),
      valueLabel: _extends({}, componentsProps.valueLabel, shouldSpreadAdditionalProps$1(components.ValueLabel) && {
        ownerState: _extends({}, (_componentsProps$valu = componentsProps.valueLabel) == null ? void 0 : _componentsProps$valu.ownerState, {
          color: color2,
          size
        })
      })
    }),
    classes,
    ref
  }));
});
var Slider$1 = Slider;
function getTooltipUtilityClass(slot) {
  return generateUtilityClass("MuiTooltip", slot);
}
const tooltipClasses = generateUtilityClasses("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
var tooltipClasses$1 = tooltipClasses;
const _excluded$2 = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    disableInteractive,
    arrow: arrow2,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ["popper", !disableInteractive && "popperInteractive", arrow2 && "popperArrow"],
    tooltip: ["tooltip", arrow2 && "tooltipArrow", touch && "touch", `tooltipPlacement${capitalize(placement.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return composeClasses(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = styled$1(Popper$1, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.popper, !ownerState.disableInteractive && styles2.popperInteractive, ownerState.arrow && styles2.popperArrow, !ownerState.open && styles2.popperClose];
  }
})(({
  theme,
  ownerState,
  open
}) => _extends({
  zIndex: theme.zIndex.tooltip,
  pointerEvents: "none"
}, !ownerState.disableInteractive && {
  pointerEvents: "auto"
}, !open && {
  pointerEvents: "none"
}, ownerState.arrow && {
  [`&[data-popper-placement*="bottom"] .${tooltipClasses$1.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses$1.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses$1.arrow}`]: _extends({}, !ownerState.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${tooltipClasses$1.arrow}`]: _extends({}, !ownerState.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
}));
const TooltipTooltip = styled$1("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.tooltip, ownerState.touch && styles2.touch, ownerState.arrow && styles2.tooltipArrow, styles2[`tooltipPlacement${capitalize(ownerState.placement.split("-")[0])}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  backgroundColor: alpha(theme.palette.grey[700], 0.92),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: "4px 8px",
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.arrow && {
  position: "relative",
  margin: 0
}, ownerState.touch && {
  padding: "8px 16px",
  fontSize: theme.typography.pxToRem(14),
  lineHeight: `${round(16 / 14)}em`,
  fontWeight: theme.typography.fontWeightRegular
}, {
  [`.${tooltipClasses$1.popper}[data-popper-placement*="left"] &`]: _extends({
    transformOrigin: "right center"
  }, !ownerState.isRtl ? _extends({
    marginRight: "14px"
  }, ownerState.touch && {
    marginRight: "24px"
  }) : _extends({
    marginLeft: "14px"
  }, ownerState.touch && {
    marginLeft: "24px"
  })),
  [`.${tooltipClasses$1.popper}[data-popper-placement*="right"] &`]: _extends({
    transformOrigin: "left center"
  }, !ownerState.isRtl ? _extends({
    marginLeft: "14px"
  }, ownerState.touch && {
    marginLeft: "24px"
  }) : _extends({
    marginRight: "14px"
  }, ownerState.touch && {
    marginRight: "24px"
  })),
  [`.${tooltipClasses$1.popper}[data-popper-placement*="top"] &`]: _extends({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, ownerState.touch && {
    marginBottom: "24px"
  }),
  [`.${tooltipClasses$1.popper}[data-popper-placement*="bottom"] &`]: _extends({
    transformOrigin: "center top",
    marginTop: "14px"
  }, ownerState.touch && {
    marginTop: "24px"
  })
}));
const TooltipArrow = styled$1("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (props, styles2) => styles2.arrow
})(({
  theme
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: alpha(theme.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
}));
let hystersisOpen = false;
let hystersisTimer = null;
function composeEventHandler(handler, eventHandler) {
  return (event) => {
    if (eventHandler) {
      eventHandler(event);
    }
    handler(event);
  };
}
const Tooltip = /* @__PURE__ */ react.exports.forwardRef(function Tooltip2(inProps, ref) {
  var _components$Popper, _ref, _components$Transitio, _components$Tooltip, _components$Arrow, _componentsProps$popp;
  const props = useThemeProps({
    props: inProps,
    name: "MuiTooltip"
  });
  const {
    arrow: arrow2 = false,
    children,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = "bottom",
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    title,
    TransitionComponent: TransitionComponentProp = Grow$1,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$2);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const [childNode, setChildNode] = react.exports.useState();
  const [arrowRef, setArrowRef] = react.exports.useState(null);
  const ignoreNonTouchEvents = react.exports.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = react.exports.useRef();
  const enterTimer = react.exports.useRef();
  const leaveTimer = react.exports.useRef();
  const touchTimer = react.exports.useRef();
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  });
  let open = openState;
  const id2 = useId(idProp);
  const prevUserSelect = react.exports.useRef();
  const stopTouchInteraction = react.exports.useCallback(() => {
    if (prevUserSelect.current !== void 0) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = void 0;
    }
    clearTimeout(touchTimer.current);
  }, []);
  react.exports.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);
  const handleOpen = (event) => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = useEventCallback((event) => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);
    if (onClose && open) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  });
  const handleEnter = (event) => {
    if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
      return;
    }
    if (childNode) {
      childNode.removeAttribute("title");
    }
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };
  const handleLeave = (event) => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [, setChildIsFocusVisible] = react.exports.useState(false);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleLeave(event);
    }
  };
  const handleFocus = (event) => {
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
  };
  const detectTouchStart = (event) => {
    ignoreNonTouchEvents.current = true;
    const childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  const handleMouseOver = handleEnter;
  const handleMouseLeave = handleLeave;
  const handleTouchStart = (event) => {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    document.body.style.WebkitUserSelect = "none";
    touchTimer.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleEnter(event);
    }, enterTouchDelay);
  };
  const handleTouchEnd = (event) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };
  react.exports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown2(nativeEvent) {
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [handleClose, open]);
  const handleUseRef = useForkRef(setChildNode, ref);
  const handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  const handleRef = useForkRef(children.ref, handleFocusRef);
  if (title === "") {
    open = false;
  }
  const positionRef = react.exports.useRef({
    x: 0,
    y: 0
  });
  const popperRef = react.exports.useRef();
  const handleMouseMove = (event) => {
    const childrenProps2 = children.props;
    if (childrenProps2.onMouseMove) {
      childrenProps2.onMouseMove(event);
    }
    positionRef.current = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === "string";
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps["aria-describedby"] = open ? id2 : null;
  } else {
    nameOrDescProps["aria-label"] = titleIsString ? title : null;
    nameOrDescProps["aria-labelledby"] = open && !titleIsString ? id2 : null;
  }
  const childrenProps = _extends({}, nameOrDescProps, other, children.props, {
    className: clsx(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  const popperOptions = react.exports.useMemo(() => {
    var _PopperProps$popperOp;
    let tooltipModifiers = [{
      name: "arrow",
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    if ((_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }
    return _extends({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]);
  const ownerState = _extends({}, props, {
    isRtl,
    arrow: arrow2,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  });
  const classes = useUtilityClasses$1(ownerState);
  const PopperComponent = (_components$Popper = components.Popper) != null ? _components$Popper : TooltipPopper;
  const TransitionComponent = (_ref = (_components$Transitio = components.Transition) != null ? _components$Transitio : TransitionComponentProp) != null ? _ref : Grow$1;
  const TooltipComponent = (_components$Tooltip = components.Tooltip) != null ? _components$Tooltip : TooltipTooltip;
  const ArrowComponent = (_components$Arrow = components.Arrow) != null ? _components$Arrow : TooltipArrow;
  const popperProps = appendOwnerState(PopperComponent, _extends({}, PopperProps, componentsProps.popper), ownerState);
  const transitionProps = appendOwnerState(TransitionComponent, _extends({}, TransitionProps, componentsProps.transition), ownerState);
  const tooltipProps = appendOwnerState(TooltipComponent, _extends({}, componentsProps.tooltip), ownerState);
  const tooltipArrowProps = appendOwnerState(ArrowComponent, _extends({}, componentsProps.arrow), ownerState);
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ react.exports.cloneElement(children, childrenProps), /* @__PURE__ */ jsx$1(PopperComponent, _extends({
      as: PopperComponentProp != null ? PopperComponentProp : Popper$1,
      placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: positionRef.current.y,
          left: positionRef.current.x,
          right: positionRef.current.x,
          bottom: positionRef.current.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef,
      open: childNode ? open : false,
      id: id2,
      transition: true
    }, interactiveWrapperListeners, popperProps, {
      className: clsx(classes.popper, PopperProps == null ? void 0 : PopperProps.className, (_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className),
      popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => {
        var _componentsProps$tool, _componentsProps$arro;
        return /* @__PURE__ */ jsx$1(TransitionComponent, _extends({
          timeout: theme.transitions.duration.shorter
        }, TransitionPropsInner, transitionProps, {
          children: /* @__PURE__ */ jsxs(TooltipComponent, _extends({}, tooltipProps, {
            className: clsx(classes.tooltip, (_componentsProps$tool = componentsProps.tooltip) == null ? void 0 : _componentsProps$tool.className),
            children: [title, arrow2 ? /* @__PURE__ */ jsx$1(ArrowComponent, _extends({}, tooltipArrowProps, {
              className: clsx(classes.arrow, (_componentsProps$arro = componentsProps.arrow) == null ? void 0 : _componentsProps$arro.className),
              ref: setArrowRef
            })) : null]
          }))
        }));
      }
    }))]
  });
});
var Tooltip$1 = Tooltip;
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
generateUtilityClasses("MuiTextField", ["root"]);
const _excluded$1 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
const variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = styled$1(FormControl$1, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const TextField = /* @__PURE__ */ react.exports.forwardRef(function TextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color: color2 = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name: name2,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$1);
  const ownerState = _extends({}, props, {
    autoFocus,
    color: color2,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  const id2 = useId(idOverride);
  const helperTextId = helperText && id2 ? `${id2}-helper-text` : void 0;
  const inputLabelId = label && id2 ? `${id2}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const InputElement = /* @__PURE__ */ jsx$1(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name: name2,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id: id2,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return /* @__PURE__ */ jsxs(TextFieldRoot, _extends({
    className: clsx(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color: color2,
    variant,
    ownerState
  }, other, {
    children: [label != null && label !== "" && /* @__PURE__ */ jsx$1(InputLabel$1, _extends({
      htmlFor: id2,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /* @__PURE__ */ jsx$1(Select$1, _extends({
      "aria-describedby": helperTextId,
      id: id2,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children
    })) : InputElement, helperText && /* @__PURE__ */ jsx$1(FormHelperText$1, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
var TextField$1 = TextField;
const lightThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#885200",
      contrastText: "#ffffff",
      light: "#ffddb8",
      dark: "#2c1700"
    },
    secondary: {
      main: "#715a41",
      contrastText: "#ffffff",
      light: "#fdddbd",
      dark: "#281805"
    },
    error: {
      main: "#ba1b1b",
      contrastText: "#ffffff",
      light: "#ffdad4",
      dark: "#410001"
    },
    divider: "#837568"
  }
};
const darkThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ffb85f",
      contrastText: "#482900",
      light: "#673d00",
      dark: "#ffddb8"
    },
    secondary: {
      main: "#dfc1a2",
      contrastText: "#3f2d17",
      light: "#58432b",
      dark: "#fdddbd"
    },
    error: {
      main: "#ffb4a9",
      contrastText: "#680003",
      light: "#930006",
      dark: "#ffdad4"
    },
    divider: "#9d8e81"
  }
};
const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);
const useAppTheme = () => {
  const isDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return theme;
};
const {
  makeStyles: makeStyles$1,
  withStyles
} = tssReact.createMakeAndWithStyles({
  useTheme: useAppTheme
});
let createNanoEvents = () => ({
  events: {},
  emit(event, ...args) {
    (this.events[event] || []).forEach((i2) => i2(...args));
  },
  on(event, cb2) {
    (this.events[event] = this.events[event] || []).push(cb2);
    return () => this.events[event] = (this.events[event] || []).filter((i2) => i2 !== cb2);
  }
});
const viewPortEvents = createNanoEvents();
class Viewport {
  constructor() {
    this.onMutationEvent = (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== "childList") {
          return;
        }
        mutation.removedNodes.forEach((node2) => {
          if (node2 === this.currentActiveViewport) {
            logger.log("Active viewport was removed");
            this.removeHooks();
            this.currentActiveViewport = void 0;
          }
        });
        mutation.addedNodes.forEach((node2) => {
          if (node2.nodeName.toUpperCase() !== "CANVAS") {
            return;
          }
          const canvasNode = node2;
          if (Viewport.isViewportElement(canvasNode)) {
            logger.log("Active viewport was added");
            this.resetViewport(canvasNode);
          }
        });
      });
    };
    this.onTouchStartHookPassive = (e2) => {
      if (!this.currentActiveViewport)
        return;
      viewPortEvents.emit("touchStartPassive", e2, this.currentActiveViewport);
    };
    this.onMouseMoveHookPassive = (e2) => {
      if (!this.currentActiveViewport) {
        return;
      }
      viewPortEvents.emit("mouseMovePassive", e2, this.currentActiveViewport);
    };
    this.onMouseDownHookPassive = (e2) => {
      if (!this.currentActiveViewport) {
        return;
      }
      viewPortEvents.emit("mouseDownPassive", e2, this.currentActiveViewport);
    };
    this.onMouseUpHookPassive = (e2) => {
      if (!this.currentActiveViewport) {
        return;
      }
      viewPortEvents.emit("mouseUpPassive", e2, this.currentActiveViewport);
    };
    this.onWheelHookPassive = (e2) => {
      if (!this.currentActiveViewport) {
        return;
      }
      viewPortEvents.emit("wheelPassive", e2, this.currentActiveViewport);
    };
    this.onMouseDownDocumentCaptureHook = (e2) => {
      if (e2.target !== this.currentActiveViewport)
        return;
      viewPortEvents.emit("mouseDownCaptured", e2, this.currentActiveViewport);
    };
    logger.log("Trying to find viewport...");
    const canvases = document.getElementsByTagName("canvas");
    const viewport2 = Array.from(canvases).find((c2) => Viewport.isViewportElement(c2) && this.currentActiveViewport !== c2);
    if (viewport2) {
      logger.log("Viewport found.");
      this.resetViewport(viewport2);
    }
    if (!this.currentActiveViewport) {
      logger.log("Viewport not found...");
    }
    const mutationObserver = new MutationObserver(this.onMutationEvent);
    mutationObserver.observe(document.body, {
      childList: true
    });
    document.addEventListener("mousedown", this.onMouseDownDocumentCaptureHook, true);
  }
  static isViewportElement(element) {
    if (element.tagName.toUpperCase() !== "CANVAS")
      return false;
    if (!element.className.includes("viewport"))
      return false;
    return true;
  }
  resetViewport(canvas) {
    this.removeHooks();
    this.currentActiveViewport = canvas;
    this.initHooks();
  }
  initHooks() {
    if (!this.currentActiveViewport)
      return;
    this.currentActiveViewport.addEventListener("touchstart", this.onTouchStartHookPassive, {
      passive: true
    });
    this.currentActiveViewport.addEventListener("mousemove", this.onMouseMoveHookPassive, {
      passive: true
    });
    this.currentActiveViewport.addEventListener("mousedown", this.onMouseDownHookPassive, {
      passive: true
    });
    this.currentActiveViewport.addEventListener("mouseup", this.onMouseUpHookPassive, {
      passive: true
    });
    this.currentActiveViewport.addEventListener("wheel", this.onWheelHookPassive, {
      passive: true
    });
    if (this.currentActiveViewport.onmousedown) {
      const originalMouseDown = this.currentActiveViewport.onmousedown;
      this.currentActiveViewport.onmousedown = null;
      this.currentActiveViewport.addEventListener("mousedown", originalMouseDown);
    }
  }
  removeHooks() {
    var _a, _b, _c, _d, _e;
    (_a = this.currentActiveViewport) == null ? void 0 : _a.removeEventListener("touchstart", this.onTouchStartHookPassive);
    (_b = this.currentActiveViewport) == null ? void 0 : _b.removeEventListener("mousemove", this.onMouseMoveHookPassive);
    (_c = this.currentActiveViewport) == null ? void 0 : _c.removeEventListener("mousedown", this.onMouseDownHookPassive);
    (_d = this.currentActiveViewport) == null ? void 0 : _d.removeEventListener("mouseup", this.onMouseUpHookPassive);
    (_e = this.currentActiveViewport) == null ? void 0 : _e.removeEventListener("wheel", this.onWheelHookPassive);
  }
}
new Viewport();
var PixelUpdateReturnCode = /* @__PURE__ */ ((PixelUpdateReturnCode2) => {
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["success"] = 0] = "success";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["canvasDoesntExist"] = 1] = "canvasDoesntExist";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["xOutOfBounds"] = 2] = "xOutOfBounds";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["yOutOfBounds"] = 3] = "yOutOfBounds";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["zOutOfBounds"] = 4] = "zOutOfBounds";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["colorOutOfBounds"] = 5] = "colorOutOfBounds";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["notLoggedIn"] = 6] = "notLoggedIn";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["notEnoughPixelsPlaced"] = 7] = "notEnoughPixelsPlaced";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["protectedPixel"] = 8] = "protectedPixel";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["cooldownLimitReached"] = 9] = "cooldownLimitReached";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["catchaNeeded"] = 10] = "catchaNeeded";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["proxyDetected"] = 11] = "proxyDetected";
  PixelUpdateReturnCode2[PixelUpdateReturnCode2["needToBeInTop10"] = 12] = "needToBeInTop10";
  return PixelUpdateReturnCode2;
})(PixelUpdateReturnCode || {});
const pixelReturnPacket = {
  OP_CODE: 195,
  hydrate(data) {
    const retCode = data.getUint8(1);
    const waitMs = data.getUint32(2);
    const coolDownSeconds = data.getInt16(6);
    const pixelIndex = data.getUint8(8);
    return {
      retCode,
      waitMs,
      coolDownSeconds,
      pixelIndex
    };
  },
  dehydrate(retCode, wait, coolDown, pxlCnt) {
    const buffer = new ArrayBuffer(1 + 1 + 4 + 2 + 1);
    const bufferView = new DataView(buffer);
    bufferView.setUint8(0, pixelReturnPacket.OP_CODE);
    bufferView.setUint8(1, retCode);
    bufferView.setUint32(2, wait);
    const coolDownSeconds = Math.round(coolDown / 1e3);
    bufferView.setInt16(6, coolDownSeconds);
    bufferView.setUint8(8, pxlCnt);
    return buffer;
  }
};
const pixelUpdatePacket = {
  OP_CODE: 193,
  hydrate(data) {
    const chunkX = data.getUint8(1);
    const chunkY = data.getUint8(2);
    const pixels = [];
    let off = data.byteLength;
    while (off > 3) {
      const color2 = data.getUint8(off -= 1);
      const offsetL = data.getUint16(off -= 2);
      const offsetH = data.getUint8(off -= 1) << 16;
      pixels.push({
        offsetInChunk: offsetH | offsetL,
        color: color2
      });
    }
    return {
      chunkX,
      chunkY,
      pixels
    };
  },
  dehydrate(chunkX, chunkY, pixels) {
    const buffer = new ArrayBuffer(1 + 1 + 1 + pixels.length * 4);
    const view = new DataView(buffer);
    view.setUint8(0, pixelUpdatePacket.OP_CODE);
    view.setUint8(1, chunkX);
    view.setUint8(2, chunkY);
    let cnt = 2;
    pixels.forEach(({
      offsetInChunk,
      color: color2
    }) => {
      view.setUint8(cnt += 1, offsetInChunk >>> 16);
      view.setUint16(cnt += 1, offsetInChunk & 65535);
      view.setUint8(cnt += 2, color2);
    });
    return buffer;
  }
};
const webSocketSenderEvents = createNanoEvents();
const originalSend = WebSocket.prototype.send;
WebSocket.prototype.send = function newSend(data) {
  webSocketWrapper.resetWs(this);
  if (data instanceof ArrayBuffer) {
    const dataView = new DataView(data);
    const opCode = dataView.getUint8(0);
    switch (opCode) {
      case pixelUpdatePacket.OP_CODE: {
        const updateData = pixelUpdatePacket.hydrate(dataView);
        webSocketSenderEvents.emit("pixelUpdate", updateData);
        const isToggledPlacementQueue = selectPixelPlaceQueueEnabled(store.getState());
        if (!webSocketWrapper.isLocalEvent && isToggledPlacementQueue) {
          Promise.resolve().then(() => {
            const fakeReturnPacketData = pixelReturnPacket.dehydrate(PixelUpdateReturnCode.protectedPixel, 0, 0, 0);
            const messageEvent = new MessageEvent("message", {
              data: fakeReturnPacketData
            });
            this.dispatchEvent(messageEvent);
          });
          webSocketSenderEvents.emit("pixelPlacementIntercepted", updateData);
          return;
        }
        break;
      }
    }
  }
  originalSend.apply(this, [data]);
};
class WebSocketWrapper {
  constructor() {
    this.listeners = [];
    this.isLocalEvent = false;
  }
  resetWs(ws) {
    if (this.ws === ws)
      return;
    this.listeners.forEach((x2) => {
      var _a;
      return (_a = this.ws) == null ? void 0 : _a.removeEventListener(x2.type, x2.listener);
    });
    this.ws = ws;
    this.listeners.forEach((x2) => {
      var _a;
      return (_a = this.ws) == null ? void 0 : _a.addEventListener(x2.type, x2.listener);
    });
  }
  send(data) {
    var _a;
    this.isLocalEvent = true;
    (_a = this.ws) == null ? void 0 : _a.send(data);
    this.isLocalEvent = false;
  }
  subscribe(type, listener) {
    var _a;
    this.listeners.push({
      type,
      listener
    });
    (_a = this.ws) == null ? void 0 : _a.addEventListener(type, listener);
    return () => {
      var _a2;
      (_a2 = this.ws) == null ? void 0 : _a2.removeEventListener(type, listener);
      const index = this.listeners.findIndex((x2) => x2.type === type && x2.listener === listener);
      if (index === -1)
        return;
      this.listeners.splice(index, 1);
    };
  }
}
const webSocketWrapper = new WebSocketWrapper();
const webSocketEventsEmitter = createNanoEvents();
const webSocketEvents = webSocketEventsEmitter;
webSocketWrapper.subscribe("message", (ev) => {
  const {
    data
  } = ev;
  if (typeof data === "string") {
    return;
  }
  if (data instanceof ArrayBuffer) {
    if (data.byteLength === 0)
      return;
    const dataView = new DataView(data);
    const opCode = dataView.getUint8(0);
    switch (opCode) {
      case pixelReturnPacket.OP_CODE: {
        const retData = pixelReturnPacket.hydrate(dataView);
        webSocketEventsEmitter.emit("pixelReturn", retData);
        break;
      }
      case pixelUpdatePacket.OP_CODE: {
        const updateData = pixelUpdatePacket.hydrate(dataView);
        webSocketEventsEmitter.emit("pixelUpdate", updateData);
        break;
      }
      default:
        logger.log(`Unknown opCode: ${opCode}`);
        break;
    }
  }
});
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;
const useStyles$7 = makeStyles$1()({
  overlayImage: {
    position: "absolute",
    left: 0,
    top: 0,
    pointerEvents: "none",
    transformOrigin: "top left",
    imageRendering: "pixelated"
  },
  overlayImageSplitChunk: {
    transform: `scale(${1 / 3})`,
    transformOrigin: "top left",
    position: "absolute",
    pointerEvents: "none"
  },
  overlayImageSplitChunkWrapper: {
    position: "fixed",
    pointerEvents: "none",
    transformOrigin: "top left",
    imageRendering: "pixelated"
  }
});
const splitRenderCanvasSize = 1024;
const PixelQueueSplitCanvas = (props) => {
  const {
    splitRenderCanvasId
  } = props;
  const {
    classes
  } = useStyles$7();
  const canvasRef = react.exports.useRef(null);
  const canvasPalette = useAppSelector(selectCanvasPalette);
  const pixelsToPlaceBySplitRenderCanvasId = useAppSelector((state) => selectPixelsToPlaceBySplitRenderCanvasId(state, splitRenderCanvasId));
  const {
    renderCanvasXCorner,
    renderCanvasYCorner
  } = useAppSelector((state) => selectRenderCanvasCoords(state, splitRenderCanvasId));
  const canvasSize = useAppSelector(selectCanvasSize);
  react.exports.useEffect(() => {
    react.exports.startTransition(() => {
      var _a;
      const canvas = canvasRef.current;
      if (!canvas)
        return;
      const imageDataWidth = splitRenderCanvasSize * 3;
      const imageData = new ImageData(imageDataWidth, imageDataWidth);
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      pixelsToPlaceBySplitRenderCanvasId.forEach((x2) => {
        const currentXOffsetFromCorner = x2.coord.x - renderCanvasXCorner;
        const currentYOffsetFromCorner = x2.coord.y - renderCanvasYCorner;
        const rgb = colorConverter.getActualColorFromPalette(canvasPalette, x2.color);
        if (!rgb)
          return;
        const idx = currentXOffsetFromCorner * 3 + 1 + (currentYOffsetFromCorner * 3 + 1) * imageDataWidth << 2;
        const [r2, g2, b2] = rgb;
        imageData.data[idx] = r2;
        imageData.data[idx + 1] = g2;
        imageData.data[idx + 2] = b2;
        imageData.data[idx + 3] = 255;
      });
      (_a = canvas.getContext("2d")) == null ? void 0 : _a.putImageData(imageData, 0, 0);
    });
  }, [canvasPalette, pixelsToPlaceBySplitRenderCanvasId, renderCanvasXCorner, renderCanvasYCorner]);
  return /* @__PURE__ */ jsx$1("canvas", {
    ref: canvasRef,
    className: classes.overlayImageSplitChunk,
    style: {
      left: renderCanvasXCorner + canvasSize / 2,
      top: renderCanvasYCorner + canvasSize / 2
    }
  }, splitRenderCanvasId);
};
const PlaceQueuePixels = () => {
  const {
    classes
  } = useStyles$7();
  const viewScale = useAppSelector(selectGameViewScale);
  const renderCanvasIds = useAppSelector(selectPixelsToPlaceRenderCanvasIds);
  const canvasTopLeftOnScreen = useAppSelector(selectMainCanvasTopLeftScreenCoords);
  return /* @__PURE__ */ jsx$1("div", {
    className: classes.overlayImageSplitChunkWrapper,
    style: {
      left: canvasTopLeftOnScreen.clientX,
      top: canvasTopLeftOnScreen.clientY,
      transform: `scale(${viewScale})`
    },
    children: renderCanvasIds.map((x2) => /* @__PURE__ */ jsx$1(PixelQueueSplitCanvas, {
      splitRenderCanvasId: x2
    }, x2))
  });
};
const OverlayImageCanvas = () => {
  const imageData = useAppSelector(selectRenderImageData);
  const {
    classes
  } = useStyles$7();
  const canvasRef = react.exports.useRef(null);
  const {
    leftOffset,
    topOffset
  } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
  const opacity = useAppSelector(selectPlacementTransparency) / 100;
  const viewScale = useAppSelector(selectGameViewScale);
  const modifierSmolPixels = useAppSelector(selectModifierSmolPixels);
  const canvasScaleModifier = modifierSmolPixels ? 1 / 3 : 1;
  react.exports.useEffect(() => {
    if (!imageData)
      return;
    const canvas = canvasRef.current;
    if (!canvas)
      return;
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext("2d");
    ctx == null ? void 0 : ctx.putImageData(imageData, 0, 0);
  }, [imageData]);
  if (!imageData)
    return /* @__PURE__ */ jsx$1("div", {
      children: "missing image data"
    });
  return /* @__PURE__ */ jsx$1("canvas", {
    ref: canvasRef,
    className: classes.overlayImage,
    style: {
      opacity,
      transform: `scale(${viewScale * canvasScaleModifier})`,
      left: leftOffset,
      top: topOffset
    }
  });
};
const useFileUrlFromFile = () => {
  const imageFile = useAppSelector(selectInputFile);
  const [fileUrl, setFileUrl] = React$1.useState();
  react.exports.useEffect(() => {
    if (!imageFile)
      return void 0;
    const newFileUrl = URL.createObjectURL(imageFile);
    setFileUrl(newFileUrl);
    return () => {
      URL.revokeObjectURL(newFileUrl);
    };
  }, [imageFile]);
  return fileUrl;
};
const useRenderImageUrl = () => {
  const imageUrl = useAppSelector(selectInputUrl);
  const fileUrl = useFileUrlFromFile();
  return fileUrl || imageUrl;
};
const OverlayImageImg = () => {
  const imageUrl = useRenderImageUrl();
  const {
    classes
  } = useStyles$7();
  const {
    leftOffset,
    topOffset
  } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
  const opacity = useAppSelector(selectPlacementTransparency) / 100;
  const viewScale = useAppSelector(selectGameViewScale);
  if (!imageUrl)
    return /* @__PURE__ */ jsx$1("div", {
      children: "missing image url"
    });
  return /* @__PURE__ */ jsx$1("img", {
    alt: "",
    className: classes.overlayImage,
    src: imageUrl,
    style: {
      opacity,
      transform: `scale(${viewScale})`,
      left: leftOffset,
      top: topOffset
    }
  });
};
const OverlayImage = () => {
  const shouldShowImageFromData = useAppSelector(selectShouldShowImageFromData);
  const shouldShowImageFromUrl = useAppSelector(selectShouldShowImageFromUrl);
  if (shouldShowImageFromData)
    return /* @__PURE__ */ jsx$1(OverlayImageCanvas, {});
  if (shouldShowImageFromUrl)
    return /* @__PURE__ */ jsx$1(OverlayImageImg, {});
  return /* @__PURE__ */ jsx$1(PlaceQueuePixels, {});
};
var colorString = { exports: {} };
var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
var simpleSwizzle = { exports: {} };
var isArrayish$1 = function isArrayish2(obj) {
  if (!obj || typeof obj === "string") {
    return false;
  }
  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
};
var isArrayish = isArrayish$1;
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle$1 = simpleSwizzle.exports = function swizzle2(args) {
  var results = [];
  for (var i2 = 0, len = args.length; i2 < len; i2++) {
    var arg = args[i2];
    if (isArrayish(arg)) {
      results = concat.call(results, slice.call(arg));
    } else {
      results.push(arg);
    }
  }
  return results;
};
swizzle$1.wrap = function(fn3) {
  return function() {
    return fn3(swizzle$1(arguments));
  };
};
var colorNames = colorName;
var swizzle = simpleSwizzle.exports;
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = {};
for (var name in colorNames) {
  if (hasOwnProperty.call(colorNames, name)) {
    reverseNames[colorNames[name]] = name;
  }
}
var cs = colorString.exports = {
  to: {},
  get: {}
};
cs.get = function(string) {
  var prefix2 = string.substring(0, 3).toLowerCase();
  var val;
  var model;
  switch (prefix2) {
    case "hsl":
      val = cs.get.hsl(string);
      model = "hsl";
      break;
    case "hwb":
      val = cs.get.hwb(string);
      model = "hwb";
      break;
    default:
      val = cs.get.rgb(string);
      model = "rgb";
      break;
  }
  if (!val) {
    return null;
  }
  return { model, value: val };
};
cs.get.rgb = function(string) {
  if (!string) {
    return null;
  }
  var abbr = /^#([a-f0-9]{3,4})$/i;
  var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
  var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
  var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
  var keyword = /^(\w+)$/;
  var rgb = [0, 0, 0, 1];
  var match2;
  var i2;
  var hexAlpha;
  if (match2 = string.match(hex)) {
    hexAlpha = match2[2];
    match2 = match2[1];
    for (i2 = 0; i2 < 3; i2++) {
      var i22 = i2 * 2;
      rgb[i2] = parseInt(match2.slice(i22, i22 + 2), 16);
    }
    if (hexAlpha) {
      rgb[3] = parseInt(hexAlpha, 16) / 255;
    }
  } else if (match2 = string.match(abbr)) {
    match2 = match2[1];
    hexAlpha = match2[3];
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] = parseInt(match2[i2] + match2[i2], 16);
    }
    if (hexAlpha) {
      rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
    }
  } else if (match2 = string.match(rgba)) {
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] = parseInt(match2[i2 + 1], 0);
    }
    if (match2[4]) {
      if (match2[5]) {
        rgb[3] = parseFloat(match2[4]) * 0.01;
      } else {
        rgb[3] = parseFloat(match2[4]);
      }
    }
  } else if (match2 = string.match(per)) {
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] = Math.round(parseFloat(match2[i2 + 1]) * 2.55);
    }
    if (match2[4]) {
      if (match2[5]) {
        rgb[3] = parseFloat(match2[4]) * 0.01;
      } else {
        rgb[3] = parseFloat(match2[4]);
      }
    }
  } else if (match2 = string.match(keyword)) {
    if (match2[1] === "transparent") {
      return [0, 0, 0, 0];
    }
    if (!hasOwnProperty.call(colorNames, match2[1])) {
      return null;
    }
    rgb = colorNames[match2[1]];
    rgb[3] = 1;
    return rgb;
  } else {
    return null;
  }
  for (i2 = 0; i2 < 3; i2++) {
    rgb[i2] = clamp(rgb[i2], 0, 255);
  }
  rgb[3] = clamp(rgb[3], 0, 1);
  return rgb;
};
cs.get.hsl = function(string) {
  if (!string) {
    return null;
  }
  var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
  var match2 = string.match(hsl);
  if (match2) {
    var alpha2 = parseFloat(match2[4]);
    var h2 = (parseFloat(match2[1]) % 360 + 360) % 360;
    var s2 = clamp(parseFloat(match2[2]), 0, 100);
    var l2 = clamp(parseFloat(match2[3]), 0, 100);
    var a2 = clamp(isNaN(alpha2) ? 1 : alpha2, 0, 1);
    return [h2, s2, l2, a2];
  }
  return null;
};
cs.get.hwb = function(string) {
  if (!string) {
    return null;
  }
  var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
  var match2 = string.match(hwb);
  if (match2) {
    var alpha2 = parseFloat(match2[4]);
    var h2 = (parseFloat(match2[1]) % 360 + 360) % 360;
    var w2 = clamp(parseFloat(match2[2]), 0, 100);
    var b2 = clamp(parseFloat(match2[3]), 0, 100);
    var a2 = clamp(isNaN(alpha2) ? 1 : alpha2, 0, 1);
    return [h2, w2, b2, a2];
  }
  return null;
};
cs.to.hex = function() {
  var rgba = swizzle(arguments);
  return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
};
cs.to.rgb = function() {
  var rgba = swizzle(arguments);
  return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
};
cs.to.rgb.percent = function() {
  var rgba = swizzle(arguments);
  var r2 = Math.round(rgba[0] / 255 * 100);
  var g2 = Math.round(rgba[1] / 255 * 100);
  var b2 = Math.round(rgba[2] / 255 * 100);
  return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r2 + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r2 + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
};
cs.to.hsl = function() {
  var hsla = swizzle(arguments);
  return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
};
cs.to.hwb = function() {
  var hwba = swizzle(arguments);
  var a2 = "";
  if (hwba.length >= 4 && hwba[3] !== 1) {
    a2 = ", " + hwba[3];
  }
  return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a2 + ")";
};
cs.to.keyword = function(rgb) {
  return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min2, max2) {
  return Math.min(Math.max(min2, num), max2);
}
function hexDouble(num) {
  var str = Math.round(num).toString(16).toUpperCase();
  return str.length < 2 ? "0" + str : str;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body2) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body2.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read(arguments[i2]));
  return ar;
}
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f2 = withMimeType(file);
  if (typeof f2.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f2, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f2;
}
function withMimeType(file) {
  var name2 = file.name;
  var hasExtension = name2 && name2.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name2.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}
var FILES_TO_IGNORE = [
  ".DS_Store",
  "Thumbs.db"
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v2) {
  return typeof v2 === "object" && v2 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h2) {
            return h2.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i2 = 0; i2 < items.length; i2++) {
    var file = items[i2];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch2) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch2.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch2.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}
var _default$2 = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    var fileName = file.name || "";
    var mimeType = (file.type || "").toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
};
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || _default$2(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn3) {
      if (!isPropagationStopped(event) && fn3) {
        fn3.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    accept: Array.isArray(accept) ? accept.filter(function(item) {
      return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
    }).reduce(function(a2, b2) {
      return _objectSpread$1(_objectSpread$1({}, a2), {}, _defineProperty$1({}, b2, []));
    }, {}) : {}
  }];
}
function isAbort(v2) {
  return v2 instanceof DOMException && (v2.name === "AbortError" || v2.code === v2.ABORT_ERR);
}
function isSecurityError(v2) {
  return v2 instanceof DOMException && (v2.name === "SecurityError" || v2.code === v2.SECURITY_ERR);
}
var _excluded = ["children"], _excluded2 = ["open"], _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ react.exports.forwardRef(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
  react.exports.useImperativeHandle(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ jsx$1(Fragment, {
    children: children(_objectSpread(_objectSpread({}, props), {}, {
      open
    }))
  });
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  children: PropTypes.func,
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  multiple: PropTypes.bool,
  preventDropOnDocument: PropTypes.bool,
  noClick: PropTypes.bool,
  noKeyboard: PropTypes.bool,
  noDrag: PropTypes.bool,
  noDragEventsBubbling: PropTypes.bool,
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  maxFiles: PropTypes.number,
  disabled: PropTypes.bool,
  getFilesFromEvent: PropTypes.func,
  onFileDialogCancel: PropTypes.func,
  onFileDialogOpen: PropTypes.func,
  useFsAccessApi: PropTypes.bool,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  validator: PropTypes.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread(_objectSpread({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = react.exports.useMemo(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = react.exports.useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = react.exports.useRef(null);
  var inputRef = react.exports.useRef(null);
  var _useReducer = react.exports.useReducer(reducer, initialState), _useReducer2 = _slicedToArray(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var fsAccessApiWorksRef = react.exports.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  react.exports.useEffect(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = react.exports.useRef([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  react.exports.useEffect(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = react.exports.useCallback(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e2) {
            return e2;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = react.exports.useCallback(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e2) {
        if (isAbort(e2)) {
          onFileDialogCancelCb(e2);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e2)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          }
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = react.exports.useCallback(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = react.exports.useCallback(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = react.exports.useCallback(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = react.exports.useCallback(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn3) {
    return disabled ? null : fn3;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn3) {
    return noKeyboard ? null : composeHandler(fn3);
  };
  var composeDragHandler = function composeDragHandler2(fn3) {
    return noDrag ? null : composeHandler(fn3);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = react.exports.useMemo(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = react.exports.useCallback(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = react.exports.useMemo(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: "off",
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread(_objectSpread({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread(_objectSpread({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread({}, initialState);
    default:
      return state;
  }
}
function noop() {
}
var AttachFile = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), "AttachFile");
var DeleteForever = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), "DeleteForever");
var ExpandLess = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");
var Palette = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z"
}), "Palette");
var Save = createSvgIcon$1(/* @__PURE__ */ jsx$1("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), "Save");
const useStyles$6 = makeStyles$1()({
  configDropDownElement: {
    height: "2em",
    "max-width": "24em",
    color: "black",
    "text-decoration": "none",
    display: "flex"
  },
  configDropDownElImg: {
    display: "inline-block",
    height: "100%",
    width: "15%"
  },
  configDropDownElImgImg: {
    "max-height": "100%",
    "max-width": "100%"
  },
  configDropDownElText: {
    height: "100%",
    width: "60%",
    "white-space": "nowrap",
    overflow: "hidden",
    "text-overflow": "ellipsis",
    display: "inline-block"
  },
  configDropDownElDelete: {
    height: "100%",
    width: "12%",
    position: "absolute",
    right: "0"
  }
});
const ConfigDropDownElement = (props) => {
  const {
    classes
  } = useStyles$6();
  const {
    config: config2,
    onDeleteCallback
  } = props;
  const onDeleteElementClicked = (event) => {
    event.stopPropagation();
    onDeleteCallback(config2);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: classes.configDropDownElement,
    children: [/* @__PURE__ */ jsx$1("div", {
      className: classes.configDropDownElImg,
      children: /* @__PURE__ */ jsx$1("img", {
        alt: "saved config preview",
        className: classes.configDropDownElImgImg,
        src: config2.imageUrl
      })
    }), /* @__PURE__ */ jsx$1("p", {
      className: classes.configDropDownElText,
      children: config2.imageUrl
    }), /* @__PURE__ */ jsx$1(IconButton$1, {
      className: classes.configDropDownElDelete,
      onClick: onDeleteElementClicked,
      children: /* @__PURE__ */ jsx$1(DeleteForever, {})
    })]
  });
};
const useStyles$5 = makeStyles$1()({
  configDropDownSelector: {
    "min-width": "10em",
    margin: "0.4em"
  },
  configDropDownSaveIcon: {
    "vertical-align": "bottom"
  },
  dropDownWrapper: {
    display: "flex"
  }
});
const usePageReduxStoreSetViewCoordsAction = () => {
  const dispatch = usePageReduxStoreDispatch();
  return (x2, y2) => {
    if (dispatch)
      dispatch(setViewCoordinates([x2, y2]));
  };
};
const ConfigDropDown = () => {
  const {
    classes
  } = useStyles$5();
  const dispatch = useAppDispatch();
  const savedConfigurations = useAppSelector(selectSavedConfigurations);
  const inputUrl = useAppSelector(selectInputUrl);
  const currentStateAsConfiguration = useAppSelector(selectCurrentStateAsConfiguration);
  const setViewCoords = usePageReduxStoreSetViewCoordsAction();
  const onApplyConfig = (config2) => {
    dispatch(setInputImageAction(config2.imageUrl));
    dispatch(overlaySlice.actions.setModifierImageBrightness(config2.modifiers.imageBrightness));
    dispatch(overlaySlice.actions.setModifierShouldConvertColors(config2.modifiers.shouldConvertColors));
    dispatch(overlaySlice.actions.setPlacementAutoSelectColor(config2.modifiers.autoSelectColor));
    dispatch(overlaySlice.actions.setPlacementXOffset(config2.placementConfiguration.xOffset));
    dispatch(overlaySlice.actions.setPlacementYOffset(config2.placementConfiguration.yOffset));
    dispatch(overlaySlice.actions.setPlacementTransparency(config2.placementConfiguration.transparency));
    setViewCoords(config2.placementConfiguration.xOffset, config2.placementConfiguration.yOffset);
  };
  const onLoadConfigByUrl = (url) => {
    const config2 = savedConfigurations.find((c2) => c2.imageUrl === url);
    if (config2)
      onApplyConfig(config2);
    else
      logger.logError("Tried to load config from url, but not found in saved");
  };
  const onSaveActiveConfiguration = () => {
    if (currentStateAsConfiguration)
      dispatch(saveConfiguration(currentStateAsConfiguration));
  };
  const onRemoveConfig = (config2) => {
    dispatch(overlaySlice.actions.removeSavedConfig(config2.imageUrl));
  };
  return /* @__PURE__ */ jsxs("div", {
    className: classes.dropDownWrapper,
    children: [/* @__PURE__ */ jsxs(FormControl$1, {
      children: [/* @__PURE__ */ jsx$1(InputLabel$1, {
        id: "saved-config-dropdown-label",
        children: "Load saved config"
      }), /* @__PURE__ */ jsx$1(Select$1, {
        className: classes.configDropDownSelector,
        labelId: "saved-config-dropdown-label",
        value: inputUrl != null ? inputUrl : "",
        onChange: (value) => {
          if (typeof value.target.value === "string")
            onLoadConfigByUrl(value.target.value);
        },
        children: savedConfigurations.map((config2) => /* @__PURE__ */ jsx$1(MenuItem$1, {
          value: config2.imageUrl,
          children: /* @__PURE__ */ jsx$1(ConfigDropDownElement, {
            config: config2,
            onDeleteCallback: onRemoveConfig
          }, config2.imageUrl)
        }, config2.imageUrl))
      })]
    }), inputUrl ? /* @__PURE__ */ jsx$1(Tooltip$1, {
      title: "Save current config",
      children: /* @__PURE__ */ jsx$1(IconButton$1, {
        onClick: onSaveActiveConfiguration,
        children: /* @__PURE__ */ jsx$1(Save, {})
      })
    }) : null]
  });
};
var Warning = {};
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireDefault);
var createSvgIcon = {};
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(utils);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
      return _utils.createSvgIcon;
    }
  });
  var _utils = require$$0;
})(createSvgIcon);
var _interopRequireDefault$1 = interopRequireDefault.exports;
Object.defineProperty(Warning, "__esModule", {
  value: true
});
var default_1$1 = Warning.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(createSvgIcon);
var _jsxRuntime$1 = require$$2$1;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), "Warning");
default_1$1 = Warning.default = _default$1;
const useClipboardPasteFile = (onPaste, mimeTypeRegex) => {
  react.exports.useEffect(() => {
    const handlePaste = (e2) => {
      const {
        clipboardData
      } = e2;
      if (!clipboardData)
        return;
      const {
        items
      } = clipboardData;
      if (!items)
        return;
      const files = Array.from(items).filter((i2) => i2.kind === "file" && i2.type.match(mimeTypeRegex)).map((i2) => i2.getAsFile());
      if (files.length === 0)
        return;
      const matchedFile = files[0];
      if (!matchedFile)
        return;
      onPaste(matchedFile);
    };
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [onPaste, mimeTypeRegex]);
};
function useDebounce(value, delay2) {
  const [debouncedValue, setDebouncedValue] = react.exports.useState(value);
  react.exports.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay2);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay2]);
  return debouncedValue;
}
const useIsFocused = () => {
  const [isFocused, setIsFocused] = react.exports.useState(false);
  const onFocus = react.exports.useCallback(() => setIsFocused(true), []);
  const onBlur = react.exports.useCallback(() => setIsFocused(false), []);
  return {
    isFocused,
    elementProps: {
      onFocus,
      onBlur
    }
  };
};
const useStyles$4 = makeStyles$1()({
  inputWithMargin: {
    margin: "0.4em"
  },
  invisibleFileInput: {
    display: "none"
  },
  inputWrapper: {
    display: "flex"
  }
});
const OverlayUrlInput = () => {
  const {
    isFocused,
    elementProps
  } = useIsFocused();
  const [inputUrl, setInputUrl] = React$1.useState("");
  const {
    classes
  } = useStyles$4();
  const inputImageDebouced = useDebounce(inputUrl, 500);
  const dispatch = useAppDispatch();
  const inputUrlState = useAppSelector(selectInputUrl);
  const handleUrlInputChange = (e2) => {
    setInputUrl(e2.target.value);
  };
  const isFirstRun = react.exports.useRef(true);
  react.exports.useEffect(() => {
    if (!isFocused)
      return;
    if (!isFirstRun.current)
      dispatch(setInputImageAction(inputImageDebouced));
    isFirstRun.current = false;
  }, [dispatch, inputImageDebouced, isFocused]);
  react.exports.useEffect(() => {
    setInputUrl(inputUrlState != null ? inputUrlState : "");
  }, [inputUrlState]);
  return /* @__PURE__ */ jsx$1("div", {
    className: classes.inputWrapper,
    children: /* @__PURE__ */ jsx$1(TextField$1, __spreadProps2(__spreadValues2({}, elementProps), {
      className: classes.inputWithMargin,
      label: "Url",
      type: "string",
      value: inputUrl != null ? inputUrl : "",
      onChange: handleUrlInputChange,
      helperText: "Http url to an image"
    }))
  });
};
const useStyles$3 = makeStyles$1()((theme) => ({
  dropzoneEl: {
    border: "1px dashed #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    height: "200px",
    margin: "20px auto",
    textAlign: "center",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  dropzoneText: {
    color: theme.palette.text.secondary
  }
}));
const InputImageModal = (props) => {
  const {
    isOpen,
    onClose
  } = props;
  const {
    classes
  } = useStyles$3();
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  const onReceiveFile = react.exports.useCallback((file) => {
    dispatch(setInputImageAction(file));
    onClose();
  }, [dispatch, onClose]);
  useClipboardPasteFile(onReceiveFile, "image.*");
  const onDrop = react.exports.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file)
      onReceiveFile(file);
  }, [onReceiveFile]);
  return /* @__PURE__ */ jsxs(Dialog$1, {
    open: isOpen,
    onClose,
    children: [/* @__PURE__ */ jsx$1(DialogTitle$1, {
      children: "Select overlay image"
    }), /* @__PURE__ */ jsxs(DialogContent$1, {
      children: [/* @__PURE__ */ jsx$1(OverlayUrlInput, {}), /* @__PURE__ */ jsx$1(Typography$1, {
        sx: {
          margin: "1em 0em 1em 0"
        },
        variant: "body1",
        children: "CTRL + V to paste image from clipboard"
      }), /* @__PURE__ */ jsx$1(Dropzone, {
        onDrop,
        accept: "image/*",
        children: ({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept
        }) => /* @__PURE__ */ jsxs("div", __spreadProps2(__spreadValues2({}, getRootProps({
          className: classes.dropzoneEl
        })), {
          style: {
            borderColor: isDragAccept ? theme.palette.success.main : void 0
          },
          children: [/* @__PURE__ */ jsx$1("input", __spreadProps2(__spreadValues2({}, getInputProps()), {
            hidden: true
          })), /* @__PURE__ */ jsx$1("span", {
            children: isDragActive ? "\u{1F4C2}" : "\u{1F4C1}"
          }), /* @__PURE__ */ jsx$1("p", {
            className: classes.dropzoneText,
            children: "Drag'n'drop images, or click to select files"
          })]
        }))
      })]
    }), /* @__PURE__ */ jsx$1(DialogActions$1, {
      children: /* @__PURE__ */ jsx$1(Button$1, {
        onClick: onClose,
        children: "Close"
      })
    })]
  });
};
var Share = {};
var _interopRequireDefault = interopRequireDefault.exports;
Object.defineProperty(Share, "__esModule", {
  value: true
});
var default_1 = Share.default = void 0;
var _createSvgIcon = _interopRequireDefault(createSvgIcon);
var _jsxRuntime = require$$2$1;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
}), "Share");
default_1 = Share.default = _default;
function getModalStyle() {
  const top2 = 50;
  const left2 = 50;
  return {
    top: `${top2}%`,
    left: `${left2}%`,
    transform: `translate(-${top2}%, -${left2}%)`
  };
}
const useStyles$2 = makeStyles$1()((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
const ShareOverlayModal = (props) => {
  const {
    isOpen,
    setIsOpen
  } = props;
  const {
    classes
  } = useStyles$2();
  const [modalStyle] = react.exports.useState(getModalStyle);
  const [sharedInput, setSharedInput] = react.exports.useState();
  const [sharedInputParsed, setSharedInputParsed] = react.exports.useState();
  const dispatch = useAppDispatch();
  const currentConfiguration = useAppSelector(selectCurrentStateAsConfiguration);
  const setViewCoords = usePageReduxStoreSetViewCoordsAction();
  react.exports.useEffect(() => {
    try {
      if (sharedInput)
        setSharedInputParsed(JSON.parse(sharedInput));
      else
        setSharedInputParsed(void 0);
    } catch (error) {
      setSharedInputParsed(void 0);
    }
  }, [sharedInput]);
  if (!isOpen)
    return null;
  const handleClose = () => {
    setIsOpen(false);
  };
  const onApplyConfig = (config2) => {
    dispatch(setInputImageAction(config2.imageUrl));
    dispatch(overlaySlice.actions.setModifierImageBrightness(config2.modifiers.imageBrightness));
    dispatch(overlaySlice.actions.setModifierShouldConvertColors(config2.modifiers.shouldConvertColors));
    dispatch(overlaySlice.actions.setPlacementAutoSelectColor(config2.modifiers.autoSelectColor));
    dispatch(overlaySlice.actions.setPlacementXOffset(config2.placementConfiguration.xOffset));
    dispatch(overlaySlice.actions.setPlacementYOffset(config2.placementConfiguration.yOffset));
    dispatch(overlaySlice.actions.setPlacementTransparency(config2.placementConfiguration.transparency));
    setViewCoords(config2.placementConfiguration.xOffset, config2.placementConfiguration.yOffset);
    handleClose();
  };
  const fillFromOverlay = () => {
    const fillStr = JSON.stringify(currentConfiguration);
    setSharedInput(fillStr);
    navigator.clipboard.writeText(fillStr);
  };
  const handleApplyConfig = () => {
    if (sharedInputParsed)
      onApplyConfig(sharedInputParsed);
  };
  return /* @__PURE__ */ jsx$1("div", {
    children: /* @__PURE__ */ jsx$1(Modal$1, {
      open: isOpen,
      onClose: handleClose,
      children: /* @__PURE__ */ jsxs("div", {
        style: modalStyle,
        className: classes.paper,
        children: [/* @__PURE__ */ jsx$1(DialogTitle$1, {
          children: "Share your overlay"
        }), /* @__PURE__ */ jsx$1(TextField$1, {
          label: "Shared overlay",
          type: "string",
          value: sharedInput,
          onChange: (e2) => {
            setSharedInput(e2.target.value);
          }
        }), sharedInput ? sharedInputParsed ? "ok" : "not ok" : null, /* @__PURE__ */ jsx$1(Button$1, {
          onClick: handleApplyConfig,
          disabled: sharedInputParsed == null,
          children: "Apply"
        }), /* @__PURE__ */ jsx$1("br", {}), /* @__PURE__ */ jsx$1(Button$1, {
          onClick: fillFromOverlay,
          disabled: currentConfiguration == null,
          children: "Fill from active overlay"
        })]
      })
    })
  });
};
const ShareOverlayButton = () => {
  const [isShareOverlayOpen, setIsShareOverlayOpen] = React$1.useState(false);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx$1(Tooltip$1, {
      title: "Share current overlay or import",
      children: /* @__PURE__ */ jsx$1(IconButton$1, {
        onClick: () => setIsShareOverlayOpen(!isShareOverlayOpen),
        children: /* @__PURE__ */ jsx$1(default_1, {})
      })
    }), isShareOverlayOpen && /* @__PURE__ */ jsx$1(ShareOverlayModal, {
      isOpen: isShareOverlayOpen,
      setIsOpen: (isOpen) => setIsShareOverlayOpen(isOpen)
    })]
  });
};
const waitingForPixelReturnList = [];
webSocketSenderEvents.on("pixelUpdate", () => {
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((resolve, reject) => {
    promiseResolve = resolve;
    promiseReject = reject;
  });
  const timeoutHandle = setTimeout(() => {
    promiseReject == null ? void 0 : promiseReject(new Error("Pixel update timeout"));
  }, 4e3);
  promise.finally(() => clearTimeout(timeoutHandle));
  waitingForPixelReturnList.push({
    promise,
    resolvePromise: (data) => promiseResolve == null ? void 0 : promiseResolve(data),
    rejectPromise: () => promiseReject == null ? void 0 : promiseReject(new Error("Pixel update rejected"))
  });
});
webSocketSenderEvents.on("pixelPlacementIntercepted", (data) => {
  const canvasSize = selectCanvasSize(store.getState());
  const pixels = data.pixels.map((x2) => ({
    coord: chunkToGameCoords(data.chunkX, data.chunkY, x2.offsetInChunk, canvasSize),
    color: x2.color
  }));
  store.dispatch(pixelPlacementSlice.actions.addPixelsToPlaceQueue({
    canvasSize,
    pixels
  }));
});
webSocketEvents.on("pixelReturn", (data) => {
  var _a;
  if (data.coolDownSeconds > 0)
    store.dispatch(gameSlice.actions.setLatestPixelReturnCooldown(data.coolDownSeconds * 1e3));
  (_a = waitingForPixelReturnList.shift()) == null ? void 0 : _a.resolvePromise(data);
});
async function placePixel(chunkX, chunkY, pixels) {
  webSocketWrapper.send(pixelUpdatePacket.dehydrate(chunkX, chunkY, pixels));
  const waitForResponse = waitingForPixelReturnList[0];
  if (!waitForResponse)
    throw new Error("Failed to register waiting list?");
  const response = await waitForResponse.promise;
  const successfulPixels = pixels.slice(0, response.pixelIndex);
  return {
    retCode: response.retCode,
    cooldownSeconds: response.coolDownSeconds,
    waitMs: response.waitMs,
    successfulPixels
  };
}
function useAsyncInterval(callback, delayMs) {
  const savedCallback = react.exports.useRef();
  react.exports.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  react.exports.useEffect(() => {
    if (delayMs === null)
      return void 0;
    let timeoutId = setTimeout(tick, delayMs);
    function tick() {
      var _a;
      (_a = savedCallback.current) == null ? void 0 : _a.call(savedCallback).catch(console.error).finally(() => {
        if (delayMs === null || timeoutId === -1)
          return;
        timeoutId = setTimeout(tick, delayMs);
      });
    }
    return () => {
      clearTimeout(timeoutId);
      timeoutId = -1;
    };
  }, [delayMs]);
}
const TogglePlacementQueue = () => {
  const isEnabled = useAppSelector(selectPixelPlaceQueueEnabled);
  const areAnyPixelsInQueue = useAppSelector(selectPixelsToPlaceQueueFirstPixel) !== void 0;
  const dispatch = useAppDispatch();
  const canvasSize = useAppSelector(selectCanvasSize);
  const waitDate = useAppSelector(selectWaitDate);
  const waitUntilMs = waitDate.getTime();
  const maxTimeoutMs = useAppSelector(selectCanvasMaxTimeoutMs);
  const timeoutOnBaseMs = useAppSelector(selectCanvasTimeoutOnBaseMs);
  const timeoutOnPlacedMs = useAppSelector(selectCanvasTimeoutOnPlacedMs);
  const latestPixelReturnCooldownMs = useAppSelector(selectCanvasLatestPixelReturnCooldownMs);
  const maxSinglePixelTimeoutMs = Math.max(timeoutOnBaseMs, timeoutOnPlacedMs, latestPixelReturnCooldownMs);
  const nowMs = Date.now();
  const untilPlacementAttemptMs = Math.max(waitUntilMs - nowMs - (maxTimeoutMs - maxSinglePixelTimeoutMs), 200);
  useAsyncInterval(async () => {
    const pixelToPlace = selectPixelsToPlaceQueueFirstPixel(store.getState());
    if (!pixelToPlace)
      return;
    const {
      coord,
      color: color2
    } = pixelToPlace;
    const {
      chunkX,
      chunkY,
      offsetInChunk
    } = gameCoordsToChunk(coord, canvasSize);
    const returnedPixels = await placePixel(chunkX, chunkY, [{
      color: color2,
      offsetInChunk
    }]);
    switch (returnedPixels.retCode) {
      case PixelUpdateReturnCode.success:
      case PixelUpdateReturnCode.protectedPixel:
      case PixelUpdateReturnCode.xOutOfBounds:
      case PixelUpdateReturnCode.yOutOfBounds:
      case PixelUpdateReturnCode.zOutOfBounds:
      case PixelUpdateReturnCode.colorOutOfBounds:
        dispatch(pixelPlacementSlice.actions.removePixelsFromPlaceQueue({
          canvasSize,
          pixels: [pixelToPlace]
        }));
        break;
      case PixelUpdateReturnCode.catchaNeeded:
      case PixelUpdateReturnCode.canvasDoesntExist:
      case PixelUpdateReturnCode.notLoggedIn:
      case PixelUpdateReturnCode.notEnoughPixelsPlaced:
      case PixelUpdateReturnCode.needToBeInTop10:
      case PixelUpdateReturnCode.proxyDetected:
        dispatch(pixelPlacementSlice.actions.setPixelPlaceQueueEnabled(false));
        break;
      case PixelUpdateReturnCode.cooldownLimitReached:
        break;
      default:
        logger.logError("unknown pixel return code", returnedPixels.retCode);
        dispatch(pixelPlacementSlice.actions.setPixelPlaceQueueEnabled(false));
        break;
    }
  }, isEnabled && areAnyPixelsInQueue ? untilPlacementAttemptMs : null);
  const handleToggle = react.exports.useCallback(() => {
    dispatch(pixelPlacementSlice.actions.setPixelPlaceQueueEnabled(!isEnabled));
  }, [dispatch, isEnabled]);
  return /* @__PURE__ */ jsx$1(FormControlLabel$1, {
    control: /* @__PURE__ */ jsx$1(Checkbox$1, {
      color: "primary",
      checked: isEnabled,
      onChange: handleToggle
    }),
    label: "Place Queue",
    labelPlacement: "end"
  });
};
const useStyles$1 = makeStyles$1()({
  inputWithMargin: {
    margin: "0.4em"
  },
  fileNameWithoutExtension: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
});
function useFollowMouseConfiguration() {
  const dispatch = useAppDispatch();
  const placementIsFollowMouseActive = useAppSelector(selectPlacementIsFollowMouseActive);
  const hoverPixel = useAppSelector(selectHoverPixel);
  react.exports.useEffect(() => {
    if (placementIsFollowMouseActive) {
      dispatch(overlaySlice.actions.setPlacementXOffset(hoverPixel.x));
      dispatch(overlaySlice.actions.setPlacementYOffset(hoverPixel.y));
    }
  }, [dispatch, placementIsFollowMouseActive, hoverPixel]);
  react.exports.useEffect(() => {
    return viewPortEvents.on("mouseUpPassive", (e2) => {
      if (e2.button !== 0)
        return;
      dispatch(overlaySlice.actions.setPlacementIsFollowMouseActive(false));
    });
  }, [dispatch]);
}
const OverlayConfig = () => {
  useFollowMouseConfiguration();
  const [isInputImageModalOpen, setIsInputImageModalOpen] = React$1.useState(false);
  const {
    classes
  } = useStyles$1();
  const dispatch = useAppDispatch();
  const isModificationsAvailable = useAppSelector(selectIsModificationsAvailable);
  const inputUrl = useAppSelector(selectInputUrl);
  const selectedFileName = useAppSelector(selectFileName);
  const shouldShowPlacementConfiguration = useAppSelector(selectShouldShowPlacementConfiguration);
  const placementXOffset = useAppSelector(selectPlacementXOffset);
  const placementYOffset = useAppSelector(selectPlacementYOffset);
  const placementTransparency = useAppSelector(selectPlacementTransparency);
  const placementIsFollowMouseActive = useAppSelector(selectPlacementIsFollowMouseActive);
  const placementAutoSelectColor = useAppSelector(selectPlacementAutoSelectColor);
  const modifierShouldConvertColors = useAppSelector(selectModifierShouldConvertColors);
  const isOutputImageProcessing = useAppSelector(selectIsOutputImageProcessing);
  const modifierImageBrightness = useAppSelector(selectModifierImageBrightness);
  const inputImageLoadingStatus = useAppSelector(selectInputImageLoadingStatus);
  const modifierSmolPixels = useAppSelector(selectModifierSmolPixels);
  const handleClearInput = () => {
    dispatch(clearInputImageAction());
  };
  const handleXOffsetChange = (e2) => {
    const numValue = parseInt(e2.target.value, 10);
    if (Number.isNaN(numValue))
      return;
    if (numValue !== placementXOffset)
      dispatch(overlaySlice.actions.setPlacementXOffset(numValue));
  };
  const handleYOffsetChange = (e2) => {
    const numValue = parseInt(e2.target.value, 10);
    if (Number.isNaN(numValue))
      return;
    if (numValue !== placementYOffset)
      dispatch(overlaySlice.actions.setPlacementYOffset(numValue));
  };
  const handleTransparencyChange = (e2, value) => {
    if (typeof value !== "number") {
      return;
    }
    dispatch(overlaySlice.actions.setPlacementTransparency(value));
  };
  const handleFollowMouseChange = () => {
    dispatch(overlaySlice.actions.setPlacementIsFollowMouseActive(!placementIsFollowMouseActive));
  };
  const handleShouldConvertColorsChange = (e2) => {
    dispatch(overlaySlice.actions.setModifierShouldConvertColors(e2.target.checked));
  };
  const handleAutoSelectColorChange = (e2) => {
    dispatch(overlaySlice.actions.setPlacementAutoSelectColor(e2.target.checked));
  };
  const handleImageBrightnessChange = (e2, value) => {
    if (typeof value !== "number" || isOutputImageProcessing) {
      return;
    }
    dispatch(overlaySlice.actions.setModifierImageBrightness(value));
  };
  const handleSmolPixelsChange = (e2) => {
    dispatch(overlaySlice.actions.setModifierSmolPixels(e2.target.checked));
  };
  return /* @__PURE__ */ jsxs(Box$1, {
    component: "form",
    children: [/* @__PURE__ */ jsx$1(TogglePlacementQueue, {}), /* @__PURE__ */ jsx$1(InputImageModal, {
      isOpen: isInputImageModalOpen,
      onClose: () => setIsInputImageModalOpen(false)
    }), selectedFileName && /* @__PURE__ */ jsxs("div", {
      style: {
        display: "flex"
      },
      children: [/* @__PURE__ */ jsxs(Typography$1, {
        className: classes.fileNameWithoutExtension,
        variant: "h6",
        children: [selectedFileName.fileNameWithoutExtension, "."]
      }), /* @__PURE__ */ jsx$1(Typography$1, {
        variant: "h6",
        children: selectedFileName.fileExtension
      })]
    }), /* @__PURE__ */ jsx$1(Tooltip$1, {
      title: "Select Overlay image",
      children: /* @__PURE__ */ jsx$1(IconButton$1, {
        onClick: () => setIsInputImageModalOpen(!isInputImageModalOpen),
        children: /* @__PURE__ */ jsx$1(AttachFile, {})
      })
    }), /* @__PURE__ */ jsx$1(ShareOverlayButton, {}), !isModificationsAvailable && inputUrl && inputImageLoadingStatus === "error" && /* @__PURE__ */ jsx$1(Tooltip$1, {
      title: "Some features will not work. Most likely that current url does not support CORS requests. Some example sites that work: https://postimages.org/, https://imgur.com/, https://dropbox.com/ (For dropbox modify the url before using, replace 'www.dropbox.' with 'dl.dropboxusercontent.' )",
      children: /* @__PURE__ */ jsx$1(default_1$1, {})
    }), shouldShowPlacementConfiguration && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx$1(Button$1, {
        onClick: handleClearInput,
        children: "Clear input"
      }), /* @__PURE__ */ jsx$1(TextField$1, {
        className: classes.inputWithMargin,
        label: "X",
        type: "number",
        value: placementXOffset,
        onInput: handleXOffsetChange
      }), /* @__PURE__ */ jsx$1(TextField$1, {
        className: classes.inputWithMargin,
        label: "Y",
        type: "number",
        value: placementYOffset,
        onInput: handleYOffsetChange
      }), /* @__PURE__ */ jsx$1(Button$1, {
        variant: placementIsFollowMouseActive ? "outlined" : void 0,
        onClick: handleFollowMouseChange,
        children: "Position with mouse"
      }), /* @__PURE__ */ jsx$1("br", {}), /* @__PURE__ */ jsx$1(Typography$1, {
        id: "transparency-slider",
        gutterBottom: true,
        children: "Transparency"
      }), /* @__PURE__ */ jsx$1(Slider$1, {
        defaultValue: 70,
        getAriaValueText: (v2) => {
          return v2.toString(10);
        },
        "aria-labelledby": "transparency-slider",
        valueLabelDisplay: "auto",
        step: 1,
        min: 0,
        max: 100,
        value: placementTransparency,
        onChange: handleTransparencyChange
      }), /* @__PURE__ */ jsx$1("br", {})]
    }), isModificationsAvailable && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx$1(Tooltip$1, {
        title: "Show only small colored boxes in the middle of pixels",
        children: /* @__PURE__ */ jsx$1(FormControlLabel$1, {
          control: /* @__PURE__ */ jsx$1(Checkbox$1, {
            color: "primary",
            checked: modifierSmolPixels,
            onChange: handleSmolPixelsChange
          }),
          label: "Smol pixels",
          labelPlacement: "end"
        })
      }), /* @__PURE__ */ jsx$1(FormControlLabel$1, {
        control: /* @__PURE__ */ jsx$1(Checkbox$1, {
          color: "primary",
          checked: modifierShouldConvertColors,
          onChange: handleShouldConvertColorsChange
        }),
        label: "Convert colors",
        labelPlacement: "end"
      }), /* @__PURE__ */ jsx$1("br", {}), /* @__PURE__ */ jsx$1(Tooltip$1, {
        title: "Will try to only place colors matching the image",
        children: /* @__PURE__ */ jsx$1(FormControlLabel$1, {
          control: /* @__PURE__ */ jsx$1(Checkbox$1, {
            color: "primary",
            checked: placementAutoSelectColor,
            onChange: handleAutoSelectColorChange
          }),
          label: "Auto color*",
          labelPlacement: "end"
        })
      }), /* @__PURE__ */ jsx$1("br", {}), /* @__PURE__ */ jsxs("div", {
        style: {
          display: modifierShouldConvertColors ? "" : "none"
        },
        children: [/* @__PURE__ */ jsx$1(Typography$1, {
          id: "brightness-slider",
          gutterBottom: true,
          children: "Image brightness"
        }), /* @__PURE__ */ jsx$1(Slider$1, {
          disabled: isOutputImageProcessing,
          defaultValue: 15,
          getAriaValueText: (v2) => {
            return v2.toString(10);
          },
          "aria-labelledby": "brightness-slider",
          valueLabelDisplay: "auto",
          step: 1,
          min: -20,
          max: 20,
          value: modifierImageBrightness,
          onChange: handleImageBrightnessChange
        })]
      }), /* @__PURE__ */ jsx$1("br", {})]
    })]
  });
};
const makeStyles = tssReact.createMakeStyles({
  useTheme
});
const useStyles = makeStyles.makeStyles()((theme, props) => {
  const {
    isMinimized
  } = props;
  const backgroundColor2 = colorString.exports.get.rgb(theme.palette.background.paper);
  backgroundColor2[3] = 0.9;
  return {
    modalRoot: {
      position: "absolute",
      right: "0.9em",
      top: "0.1em",
      width: isMinimized ? void 0 : "15em",
      border: "1px solid rgb(0, 0, 0)",
      backgroundColor: colorString.exports.to.rgb(backgroundColor2),
      padding: "5px",
      fontSize: "0.9em",
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "calc(100vh - 1.5em)"
    }
  };
});
const ConfigurationModal = () => {
  const [isModalMinimized, setIsModalMinimized] = React$1.useState(false);
  const {
    classes
  } = useStyles({
    isMinimized: isModalMinimized
  });
  const dispatch = useAppDispatch();
  const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);
  const onDrop = react.exports.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file)
      dispatch(setInputImageAction(file));
  }, [dispatch]);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: "image/*",
    noClick: true
  });
  const handleToggleOverlayOnOff = (e2) => {
    dispatch(overlaySlice.actions.setOverlayEnabled(e2.target.checked));
  };
  return /* @__PURE__ */ jsxs("div", __spreadProps2(__spreadValues2({}, getRootProps()), {
    className: classes.modalRoot,
    style: {
      border: isDragActive ? "3px dashed red" : void 0
    },
    children: [!isModalMinimized && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx$1("input", __spreadProps2(__spreadValues2({}, getInputProps()), {
        hidden: true
      })), /* @__PURE__ */ jsx$1(Tooltip$1, {
        title: "Toggle on/off Overlay. Shortcut: O",
        children: /* @__PURE__ */ jsx$1(FormControlLabel$1, {
          control: /* @__PURE__ */ jsx$1(Checkbox$1, {
            color: "primary",
            checked: isOverlayEnabled,
            onChange: handleToggleOverlayOnOff
          }),
          label: "Image Overlay",
          labelPlacement: "end"
        })
      }), /* @__PURE__ */ jsx$1("div", {
        style: {
          display: isOverlayEnabled ? "" : "none"
        },
        children: /* @__PURE__ */ jsxs("div", {
          style: {
            display: isModalMinimized ? "none" : ""
          },
          children: [/* @__PURE__ */ jsx$1("div", {
            children: /* @__PURE__ */ jsx$1(OverlayConfig, {})
          }), /* @__PURE__ */ jsx$1(ConfigDropDown, {})]
        })
      })]
    }), /* @__PURE__ */ jsx$1(IconButton$1, {
      onClick: () => setIsModalMinimized(!isModalMinimized),
      children: isModalMinimized ? /* @__PURE__ */ jsx$1(Palette, {}) : /* @__PURE__ */ jsx$1(ExpandLess, {})
    })]
  }));
};
function usePageStoreWaitDate() {
  const dispatch = useAppDispatch();
  const waitDate = usePageReduxStoreSelector(selectPageStatePixelWaitDate);
  react.exports.useEffect(() => {
    if (waitDate)
      dispatch(gameSlice.actions.setWaitDate(waitDate));
    else
      dispatch(gameSlice.actions.setWaitDate(new Date()));
  }, [dispatch, waitDate]);
}
function usePageStoreCurrentSelectedColor() {
  const dispatch = useAppDispatch();
  const currentSelectedColor = usePageReduxStoreSelector(selectPageStateCurrentSelectedColor);
  react.exports.useEffect(() => {
    if (currentSelectedColor)
      dispatch(gameSlice.actions.setSelectedColor(currentSelectedColor));
  }, [dispatch, currentSelectedColor]);
}
function usePageStoreViewScale() {
  const dispatch = useAppDispatch();
  const pageViewScale = usePageReduxStoreSelector(selectPageStateViewScale);
  react.exports.useEffect(() => {
    if (pageViewScale)
      dispatch(gameSlice.actions.setViewScale(pageViewScale));
  }, [dispatch, pageViewScale]);
}
function usePageStoreViewCenter() {
  const dispatch = useAppDispatch();
  const pageViewCenter = usePageReduxStoreSelector(selectPageStateCanvasViewCenter);
  react.exports.useEffect(() => {
    if (pageViewCenter)
      dispatch(gameSlice.actions.setViewCenter(pageViewCenter));
  }, [dispatch, pageViewCenter]);
}
function usePageStoreCanvasPalette() {
  const dispatch = useAppDispatch();
  const palette2 = usePageReduxStoreSelector(selectPageStateCanvasPalette);
  react.exports.useEffect(() => {
    if (palette2)
      dispatch(gameSlice.actions.setPalette(palette2));
  }, [dispatch, palette2]);
}
function usePageStoreCanvasReservedColors() {
  const dispatch = useAppDispatch();
  const reservedColors = usePageReduxStoreSelector(selectPageStateCanvasReservedColors);
  react.exports.useEffect(() => {
    if (reservedColors)
      dispatch(gameSlice.actions.setReservedColorCount(reservedColors != null ? reservedColors : 0));
  }, [dispatch, reservedColors]);
}
function usePageStoreCanvasId() {
  const dispatch = useAppDispatch();
  const canvasId = usePageReduxStoreSelector(selectPageStateCanvasId);
  const canvasSize = usePageReduxStoreSelector(selectPageStateCanvasSize);
  const maxTimeoutMs = usePageReduxStoreSelector(selectPageStateCanvasMaxTimeoutMs);
  const timeoutOnBaseMs = usePageReduxStoreSelector(selectPageStateCanvasTimeoutOnBaseMs);
  const timeoutOnPlacedMs = usePageReduxStoreSelector(selectPaseStateCanvasTimeoutOnPlacedMs);
  react.exports.useEffect(() => {
    if (canvasId)
      dispatch(gameSlice.actions.setCanvasId(canvasId));
  }, [dispatch, canvasId]);
  react.exports.useEffect(() => {
    if (canvasSize)
      dispatch(gameSlice.actions.setCanvasSize(canvasSize));
  }, [dispatch, canvasSize]);
  react.exports.useEffect(() => {
    if (maxTimeoutMs)
      dispatch(gameSlice.actions.setMaxTimeoutMs(maxTimeoutMs));
  }, [dispatch, maxTimeoutMs]);
  react.exports.useEffect(() => {
    if (timeoutOnBaseMs)
      dispatch(gameSlice.actions.setTimeoutOnBaseMs(timeoutOnBaseMs));
  }, [dispatch, timeoutOnBaseMs]);
  react.exports.useEffect(() => {
    if (timeoutOnPlacedMs)
      dispatch(gameSlice.actions.setTimeoutOnPlacedMs(timeoutOnPlacedMs));
  }, [dispatch, timeoutOnPlacedMs]);
}
function useWebSocketEvents() {
  const dispatch = useAppDispatch();
  react.exports.useEffect(() => webSocketEvents.on("pixelUpdate", (data) => dispatch(chunkDataSlice.actions.setPixel(data))), [dispatch]);
}
function useGlobalKeyShortcuts() {
  const dispatch = useAppDispatch();
  const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);
  const handleToggleOverlay = react.exports.useCallback(() => {
    dispatch(overlaySlice.actions.setOverlayEnabled(!isOverlayEnabled));
  }, [dispatch, isOverlayEnabled]);
  react.exports.useEffect(() => {
    const handleKeyDown2 = (event) => {
      const {
        target
      } = event;
      if (!target) {
        return;
      }
      const clickedNodeName = target.tagName || target.nodeName;
      if (clickedNodeName === "TEXTAREA") {
        return;
      }
      if (clickedNodeName === "INPUT") {
        const inputEl = target;
        if (inputEl.type === "text") {
          return;
        }
      }
      switch (event.key) {
        case "o": {
          event.stopImmediatePropagation();
          handleToggleOverlay();
          break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown2);
    return () => window.removeEventListener("keydown", handleKeyDown2);
  }, [handleToggleOverlay]);
}
function useLoadSavedConfigurations() {
  const dispatch = useAppDispatch();
  react.exports.useEffect(() => {
    dispatch(loadSavedConfigurations());
  }, [dispatch]);
}
function useReprocessOutputImage() {
  const dispatch = useAppDispatch();
  const url = useAppSelector(selectInputUrl);
  const palette2 = useAppSelector(selectCanvasUserPalette);
  const modifierShouldConvertColors = useAppSelector(selectModifierShouldConvertColors);
  const modifierImageBrightness = useAppSelector(selectModifierImageBrightness);
  const modifierSmolPixels = useAppSelector(selectModifierSmolPixels);
  react.exports.useEffect(() => {
    dispatch(startProcessingOutputImage());
  }, [dispatch, url, palette2, modifierShouldConvertColors, modifierImageBrightness, modifierSmolPixels]);
}
function useSubscribeToWindowResize() {
  const dispatch = useAppDispatch();
  react.exports.useEffect(() => {
    const handleResize = () => dispatch(overlaySlice.actions.setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    }));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);
}
function useAutoHandleTouchInputsToHoverState() {
  const dispatch = useAppDispatch();
  const windowSize = useAppSelector(selectWindowSize);
  const viewScale = useAppSelector(selectGameViewScale);
  const viewCenter = useAppSelector(selectGameViewCenter);
  react.exports.useEffect(() => {
    const handleTouchStart = (event) => {
      const touches = event.touches[0];
      if (!touches)
        return;
      const {
        innerHeight,
        innerWidth
      } = windowSize;
      const {
        clientX,
        clientY
      } = touches;
      const x2 = Math.floor((clientX - innerWidth / 2) / viewScale + viewCenter.x);
      const y2 = Math.floor((clientY - innerHeight / 2) / viewScale + viewCenter.y);
      dispatch(gameSlice.actions.setHoverPixel({
        x: x2,
        y: y2
      }));
    };
    return viewPortEvents.on("touchStartPassive", handleTouchStart);
  }, [dispatch, windowSize, viewScale, viewCenter]);
}
const ProviderPageStateMapper = ({
  children
}) => {
  useAutoHandleTouchInputsToHoverState();
  useSubscribeToWindowResize();
  useReprocessOutputImage();
  useGlobalKeyShortcuts();
  useLoadSavedConfigurations();
  usePageStoreWaitDate();
  usePageStoreCurrentSelectedColor();
  usePageStoreViewScale();
  usePageStoreViewCenter();
  usePageStoreCanvasPalette();
  usePageStoreCanvasReservedColors();
  usePageStoreCanvasId();
  useWebSocketEvents();
  return /* @__PURE__ */ jsx$1(Fragment, {
    children
  });
};
const App = () => {
  const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);
  return /* @__PURE__ */ jsx$1("div", {
    children: /* @__PURE__ */ jsx$1(ProviderPageStateMapper, {
      children: /* @__PURE__ */ jsxs(react.exports.Suspense, {
        fallback: /* @__PURE__ */ jsx$1("div", {
          children: "Loading..."
        }),
        children: [isOverlayEnabled && /* @__PURE__ */ jsx$1(OverlayImage, {}), /* @__PURE__ */ jsx$1(ConfigurationModal, {})]
      })
    })
  });
};
const ErrorBoundaryFallbackModal = (props) => {
  var _a;
  const {
    error,
    resetErrorBoundary
  } = props;
  const [isOpen, setIsOpen] = react.exports.useState(true);
  return /* @__PURE__ */ jsxs(Dialog$1, {
    open: isOpen,
    onClose: () => setIsOpen(!isOpen),
    children: [/* @__PURE__ */ jsx$1(DialogTitle$1, {
      children: "Overlay crashed \u{1F622}"
    }), /* @__PURE__ */ jsxs(DialogContent$1, {
      children: [/* @__PURE__ */ jsxs(Typography$1, {
        variant: "body1",
        children: [error.name, ": ", error.message]
      }), /* @__PURE__ */ jsx$1(Typography$1, {
        variant: "body2",
        children: (_a = error.stack) != null ? _a : ""
      })]
    }), /* @__PURE__ */ jsxs(DialogActions$1, {
      children: [/* @__PURE__ */ jsx$1(Button$1, {
        onClick: () => setIsOpen(!isOpen),
        children: "Close"
      }), /* @__PURE__ */ jsx$1(Button$1, {
        onClick: resetErrorBoundary,
        children: "Reset"
      })]
    })]
  });
};
const AppProvidersWrapper = () => {
  const [appStore, setAppStore] = React$1.useState(store);
  const theme = useAppTheme();
  return /* @__PURE__ */ jsx$1(React$1.StrictMode, {
    children: /* @__PURE__ */ jsxs(Provider, {
      store: appStore,
      children: [/* @__PURE__ */ jsx$1(tssReact.GlobalStyles, {
        styles: {
          body: {
            margin: 0,
            padding: 0
          }
        }
      }), /* @__PURE__ */ jsxs(ThemeProvider, {
        theme,
        children: [/* @__PURE__ */ jsx$1(CssBaseline, {}), /* @__PURE__ */ jsx$1(ErrorBoundary, {
          FallbackComponent: ErrorBoundaryFallbackModal,
          onReset: () => setAppStore(configureAppStore()),
          children: /* @__PURE__ */ jsx$1(App, {})
        })]
      })]
    })
  });
};
function init() {
  executeAllHooks();
  const rootNode = document.createElement("div");
  rootNode.id = "PictureOverlay_RootNode";
  document.body.prepend(rootNode);
  const root = createRoot(rootNode);
  root.render(/* @__PURE__ */ jsx$1(AppProvidersWrapper, {}));
}
if (document.readyState !== "complete") {
  document.addEventListener("readystatechange", function readyStateChange() {
    if (document.readyState === "complete") {
      document.removeEventListener("readystatechange", readyStateChange);
      init();
    }
  });
} else {
  init();
}
