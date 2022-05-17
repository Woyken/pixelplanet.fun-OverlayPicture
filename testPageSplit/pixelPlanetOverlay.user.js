
// ==UserScript==
// @name         pixelplanet.fun picture overlay /testPageSplit
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture/testPageSplit
// @version      1.1.2
// @description  Add your picture as overlay to pixelplanet.fun
// @author       Woyken
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://woyken.github.io/pixelplanet.fun-OverlayPicture/testPageSplit/pixelPlanetOverlay-loader.user.js
// ==/UserScript==
/**/

import { _ as __vitePreload } from "./index.js";
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
function n$6(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$4(n2) {
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
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!n2.constructor[L$1] || s(n2) || v$4(n2));
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
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v$4(n2) ? 3 : 0;
}
function u$4(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f$3(n2, r2, t2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c$2(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X$1 && n2 instanceof Map;
}
function v$4(n2) {
  return q$7 && n2 instanceof Set;
}
function p$7(n2) {
  return n2.o || n2.t;
}
function l$5(n2) {
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
function d$2(n2, e2) {
  return e2 === void 0 && (e2 = false), y$2(n2) || r$4(n2) || !t$5(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$4), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d$2(r2, true);
  }, true), n2);
}
function h$4() {
  n$6(2);
}
function y$2(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b$2(r2) {
  var t2 = tn[r2];
  return t2 || n$6(18, r2), t2;
}
function m$5(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _$1() {
  return U$2;
}
function j(n2, r2) {
  r2 && (b$2("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O$1(n2) {
  g$2(n2), n2.p.forEach(S$2), n2.p = null;
}
function g$2(n2) {
  n2 === U$2 && (U$2 = n2.l);
}
function w$3(n2) {
  return U$2 = { p: [], l: U$2, h: n2, m: true, _: 0 };
}
function S$2(n2) {
  var r2 = n2[Q$2];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P$2(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b$2("ES5").S(e2, r2, o2), o2 ? (i2[Q$2].P && (O$1(e2), n$6(4)), t$5(r2) && (r2 = M$2(e2, r2), e2.l || x$2(e2, r2)), e2.u && b$2("Patches").M(i2[Q$2].t, r2, e2.u, e2.s)) : r2 = M$2(e2, i2, []), O$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$2 ? r2 : void 0;
}
function M$2(n2, r2, t2) {
  if (y$2(r2))
    return r2;
  var e2 = r2[Q$2];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A$3(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x$2(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l$5(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A$3(n2, e2, o2, r3, i2, t2);
    }), x$2(n2, o2, false), t2 && n2.u && b$2("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$3(e2, i2, o2, a2, c2, s2) {
  if (r$4(c2)) {
    var v2 = M$2(e2, c2, s2 && i2 && i2.i !== 3 && !u$4(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f$3(o2, a2, v2), !r$4(v2))
      return;
    e2.m = false;
  }
  if (t$5(c2) && !y$2(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M$2(e2, c2), i2 && i2.A.l || x$2(e2, c2);
  }
}
function x$2(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d$2(r2, t2);
}
function z$3(n2, r2) {
  var t2 = n2[Q$2];
  return (t2 ? p$7(t2) : n2)[r2];
}
function I$2(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k$4(n2) {
  n2.P || (n2.P = true, n2.l && k$4(n2.l));
}
function E$2(n2) {
  n2.o || (n2.o = l$5(n2.t));
}
function R$2(n2, r2, t2) {
  var e2 = s(r2) ? b$2("MapSet").N(r2, t2) : v$4(r2) ? b$2("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b$2("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function D$2(e2) {
  return r$4(e2) || n$6(22, e2), function n2(r2) {
    if (!t$5(r2))
      return r2;
    var e3, u2 = r2[Q$2], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$2("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F$2(r2, c2), u2.I = false;
    } else
      e3 = F$2(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f$3(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F$2(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$5(n2);
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
            a2(t3) && k$4(t3);
            break;
          case 4:
            o2(t3) && k$4(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q$2) {
        var a3 = r2[o3];
        if (a3 === void 0 && !u$4(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q$2];
        if (s3 ? s3.t !== a3 : !c$2(f2, a3))
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
  m$5("ES5", { J: function(n2, r2) {
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
    o3 ? r$4(t3) && t3[Q$2].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && typeof r2 == "object") {
        var t4 = r2[Q$2];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.D, c2 = t4.i;
          if (c2 === 4)
            i(o4, function(r3) {
              r3 !== Q$2 && (e3[r3] !== void 0 || u$4(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k$4(t4)));
            }), i(e3, function(n4) {
              o4[n4] !== void 0 || u$4(o4, n4) || (f2[n4] = false, k$4(t4));
            });
          else if (c2 === 5) {
            if (a2(t4) && (k$4(t4), f2.length = true), o4.length < e3.length)
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
var G$2, U$2, W$2 = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X$1 = typeof Map != "undefined", q$7 = typeof Set != "undefined", B$1 = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H$2 = W$2 ? Symbol.for("immer-nothing") : ((G$2 = {})["immer-nothing"] = true, G$2), L$1 = W$2 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$2 = W$2 ? Symbol.for("immer-state") : "__$immer_state", Z$1 = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$2)
    return n2;
  var e2 = p$7(n2);
  if (!u$4(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$2(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t$5(i2) ? i2 : i2 === z$3(n2.t, r2) ? (E$2(n2), n2.o[r2] = R$2(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$7(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$7(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$2(p$7(n2), r2);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$3(p$7(n2), r2), o2 = i2 == null ? void 0 : i2[Q$2];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c$2(t2, i2) && (t2 !== void 0 || u$4(n2.t, r2)))
      return true;
    E$2(n2), k$4(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z$3(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E$2(n2), k$4(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$7(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$6(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$6(12);
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
    this.g = B$1, this.F = true, this.produce = function(r3, i3, o2) {
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
      if (typeof i3 != "function" && n$6(6), o2 !== void 0 && typeof o2 != "function" && n$6(7), t$5(r3)) {
        var c2 = w$3(e3), s2 = R$2(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O$1(c2) : g$2(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P$2(n2, c2);
        }, function(n2) {
          throw O$1(c2), n2;
        }) : (j(c2, o2), P$2(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H$2 && (f2 = void 0), e3.F && d$2(f2, true), o2) {
          var p2 = [], l2 = [];
          b$2("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$6(21, r3);
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
    t$5(e3) || n$6(8), r$4(e3) && (e3 = D$2(e3));
    var i3 = w$3(this), o2 = R$2(this, e3, void 0);
    return o2[Q$2].C = true, g$2(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$2];
    var i3 = e3.A;
    return j(i3, t2), P$2(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B$1 && n$6(20), this.g = r2;
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
    var o2 = b$2("Patches").$;
    return r$4(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
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
function _objectSpread2(target) {
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
function createStore(reducer, preloadedState, enhancer) {
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
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
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
    var reducer = reducers[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
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
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
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
var __generator = globalThis && globalThis.__generator || function(thisArg, body2) {
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
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware2 = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
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
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
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
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r$4(previousState)) {
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
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice2, actionKey) {
  return slice2 + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
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
    var type = getType2(name, reducerName);
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
    name,
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
          return __generator(this, function(_c) {
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
const initialState$4 = {
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
  initialState: initialState$4,
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
createSelector((state) => state.game.canvas.maxTimeoutMs, (maxTimeoutMs) => maxTimeoutMs);
createSelector((state) => state.game.canvas.timeoutOnBaseMs, (timeoutOnBaseMs) => timeoutOnBaseMs);
createSelector((state) => state.game.canvas.timeoutOnPlacedMs, (timeoutOnPlacedMs) => timeoutOnPlacedMs);
createSelector((state) => state.game.canvas.latestPixelReturnCooldownMs, (latestPixelReturnCooldownMs) => latestPixelReturnCooldownMs);
const selectCanvasUserPalette = createSelector(selectCanvasReservedColorCount, selectCanvasPalette, (reservedColorCount, palette2) => {
  return palette2.slice(reservedColorCount);
});
const selectGameViewCenter = createSelector((state) => state.game.gameGui.viewCenter, (viewCenter) => viewCenter);
const selectGameViewScale = createSelector((state) => state.game.gameGui.viewScale, (viewScale) => viewScale);
createSelector((state) => state.game.gameGui.waitDate, (waitDate) => waitDate);
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
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
const proxyTransferHandler = {
  canHandle: (val) => isObject(val) && val[proxyMarker],
  serialize(obj) {
    const { port1, port2 } = new MessageChannel();
    expose(obj, port1);
    return [port2, [port2]];
  },
  deserialize(port) {
    port.start();
    return wrap(port);
  }
};
const throwTransferHandler = {
  canHandle: (value) => isObject(value) && throwMarker in value,
  serialize({ value }) {
    let serialized;
    if (value instanceof Error) {
      serialized = {
        isError: true,
        value: {
          message: value.message,
          name: value.name,
          stack: value.stack
        }
      };
    } else {
      serialized = { isError: false, value };
    }
    return [serialized, []];
  },
  deserialize(serialized) {
    if (serialized.isError) {
      throw Object.assign(new Error(serialized.value.message), serialized.value);
    }
    throw serialized.value;
  }
};
const transferHandlers = /* @__PURE__ */ new Map([
  ["proxy", proxyTransferHandler],
  ["throw", throwTransferHandler]
]);
function expose(obj, ep = self) {
  ep.addEventListener("message", function callback(ev) {
    if (!ev || !ev.data) {
      return;
    }
    const { id: id2, type, path } = Object.assign({ path: [] }, ev.data);
    const argumentList = (ev.data.argumentList || []).map(fromWireValue);
    let returnValue;
    try {
      const parent = path.slice(0, -1).reduce((obj2, prop) => obj2[prop], obj);
      const rawValue = path.reduce((obj2, prop) => obj2[prop], obj);
      switch (type) {
        case "GET":
          {
            returnValue = rawValue;
          }
          break;
        case "SET":
          {
            parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
            returnValue = true;
          }
          break;
        case "APPLY":
          {
            returnValue = rawValue.apply(parent, argumentList);
          }
          break;
        case "CONSTRUCT":
          {
            const value = new rawValue(...argumentList);
            returnValue = proxy(value);
          }
          break;
        case "ENDPOINT":
          {
            const { port1, port2 } = new MessageChannel();
            expose(obj, port2);
            returnValue = transfer(port1, [port1]);
          }
          break;
        case "RELEASE":
          {
            returnValue = void 0;
          }
          break;
        default:
          return;
      }
    } catch (value) {
      returnValue = { value, [throwMarker]: 0 };
    }
    Promise.resolve(returnValue).catch((value) => {
      return { value, [throwMarker]: 0 };
    }).then((returnValue2) => {
      const [wireValue, transferables] = toWireValue(returnValue2);
      ep.postMessage(Object.assign(Object.assign({}, wireValue), { id: id2 }), transferables);
      if (type === "RELEASE") {
        ep.removeEventListener("message", callback);
        closeEndPoint(ep);
      }
    });
  });
  if (ep.start) {
    ep.start();
  }
}
function isMessagePort(endpoint) {
  return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
  if (isMessagePort(endpoint))
    endpoint.close();
}
function wrap(ep, target) {
  return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
  if (isReleased) {
    throw new Error("Proxy has been released and is not useable");
  }
}
function createProxy(ep, path = [], target = function() {
}) {
  let isProxyReleased = false;
  const proxy2 = new Proxy(target, {
    get(_target, prop) {
      throwIfProxyReleased(isProxyReleased);
      if (prop === releaseProxy) {
        return () => {
          return requestResponseMessage(ep, {
            type: "RELEASE",
            path: path.map((p2) => p2.toString())
          }).then(() => {
            closeEndPoint(ep);
            isProxyReleased = true;
          });
        };
      }
      if (prop === "then") {
        if (path.length === 0) {
          return { then: () => proxy2 };
        }
        const r2 = requestResponseMessage(ep, {
          type: "GET",
          path: path.map((p2) => p2.toString())
        }).then(fromWireValue);
        return r2.then.bind(r2);
      }
      return createProxy(ep, [...path, prop]);
    },
    set(_target, prop, rawValue) {
      throwIfProxyReleased(isProxyReleased);
      const [value, transferables] = toWireValue(rawValue);
      return requestResponseMessage(ep, {
        type: "SET",
        path: [...path, prop].map((p2) => p2.toString()),
        value
      }, transferables).then(fromWireValue);
    },
    apply(_target, _thisArg, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const last = path[path.length - 1];
      if (last === createEndpoint) {
        return requestResponseMessage(ep, {
          type: "ENDPOINT"
        }).then(fromWireValue);
      }
      if (last === "bind") {
        return createProxy(ep, path.slice(0, -1));
      }
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, {
        type: "APPLY",
        path: path.map((p2) => p2.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    },
    construct(_target, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, {
        type: "CONSTRUCT",
        path: path.map((p2) => p2.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    }
  });
  return proxy2;
}
function myFlat(arr) {
  return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
  const processed = argumentList.map(toWireValue);
  return [processed.map((v2) => v2[0]), myFlat(processed.map((v2) => v2[1]))];
}
const transferCache = /* @__PURE__ */ new WeakMap();
function transfer(obj, transfers) {
  transferCache.set(obj, transfers);
  return obj;
}
function proxy(obj) {
  return Object.assign(obj, { [proxyMarker]: true });
}
function toWireValue(value) {
  for (const [name, handler] of transferHandlers) {
    if (handler.canHandle(value)) {
      const [serializedValue, transferables] = handler.serialize(value);
      return [
        {
          type: "HANDLER",
          name,
          value: serializedValue
        },
        transferables
      ];
    }
  }
  return [
    {
      type: "RAW",
      value
    },
    transferCache.get(value) || []
  ];
}
function fromWireValue(value) {
  switch (value.type) {
    case "HANDLER":
      return transferHandlers.get(value.name).deserialize(value.value);
    case "RAW":
      return value.value;
  }
}
function requestResponseMessage(ep, msg, transfers) {
  return new Promise((resolve) => {
    const id2 = generateUUID();
    ep.addEventListener("message", function l2(ev) {
      if (!ev.data || !ev.data.id || ev.data.id !== id2) {
        return;
      }
      ep.removeEventListener("message", l2);
      resolve(ev.data);
    });
    if (ep.start) {
      ep.start();
    }
    ep.postMessage(Object.assign({ id: id2 }, msg), transfers);
  });
}
function generateUUID() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
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
const encodedJs = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICBjb25zdCBwcm94eU1hcmtlciA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpOwogIGNvbnN0IGNyZWF0ZUVuZHBvaW50ID0gU3ltYm9sKCJDb21saW5rLmVuZHBvaW50Iik7CiAgY29uc3QgcmVsZWFzZVByb3h5ID0gU3ltYm9sKCJDb21saW5rLnJlbGVhc2VQcm94eSIpOwogIGNvbnN0IHRocm93TWFya2VyID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpOwogIGNvbnN0IGlzT2JqZWN0ID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gIm9iamVjdCIgJiYgdmFsICE9PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICJmdW5jdGlvbiI7CiAgY29uc3QgcHJveHlUcmFuc2ZlckhhbmRsZXIgPSB7CiAgICBjYW5IYW5kbGU6ICh2YWwpID0+IGlzT2JqZWN0KHZhbCkgJiYgdmFsW3Byb3h5TWFya2VyXSwKICAgIHNlcmlhbGl6ZShvYmopIHsKICAgICAgY29uc3QgeyBwb3J0MSwgcG9ydDIgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgICBleHBvc2Uob2JqLCBwb3J0MSk7CiAgICAgIHJldHVybiBbcG9ydDIsIFtwb3J0Ml1dOwogICAgfSwKICAgIGRlc2VyaWFsaXplKHBvcnQpIHsKICAgICAgcG9ydC5zdGFydCgpOwogICAgICByZXR1cm4gd3JhcChwb3J0KTsKICAgIH0KICB9OwogIGNvbnN0IHRocm93VHJhbnNmZXJIYW5kbGVyID0gewogICAgY2FuSGFuZGxlOiAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSAmJiB0aHJvd01hcmtlciBpbiB2YWx1ZSwKICAgIHNlcmlhbGl6ZSh7IHZhbHVlIH0pIHsKICAgICAgbGV0IHNlcmlhbGl6ZWQ7CiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7CiAgICAgICAgc2VyaWFsaXplZCA9IHsKICAgICAgICAgIGlzRXJyb3I6IHRydWUsCiAgICAgICAgICB2YWx1ZTogewogICAgICAgICAgICBtZXNzYWdlOiB2YWx1ZS5tZXNzYWdlLAogICAgICAgICAgICBuYW1lOiB2YWx1ZS5uYW1lLAogICAgICAgICAgICBzdGFjazogdmFsdWUuc3RhY2sKICAgICAgICAgIH0KICAgICAgICB9OwogICAgICB9IGVsc2UgewogICAgICAgIHNlcmlhbGl6ZWQgPSB7IGlzRXJyb3I6IGZhbHNlLCB2YWx1ZSB9OwogICAgICB9CiAgICAgIHJldHVybiBbc2VyaWFsaXplZCwgW11dOwogICAgfSwKICAgIGRlc2VyaWFsaXplKHNlcmlhbGl6ZWQpIHsKICAgICAgaWYgKHNlcmlhbGl6ZWQuaXNFcnJvcikgewogICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKHNlcmlhbGl6ZWQudmFsdWUubWVzc2FnZSksIHNlcmlhbGl6ZWQudmFsdWUpOwogICAgICB9CiAgICAgIHRocm93IHNlcmlhbGl6ZWQudmFsdWU7CiAgICB9CiAgfTsKICBjb25zdCB0cmFuc2ZlckhhbmRsZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogICAgWyJwcm94eSIsIHByb3h5VHJhbnNmZXJIYW5kbGVyXSwKICAgIFsidGhyb3ciLCB0aHJvd1RyYW5zZmVySGFuZGxlcl0KICBdKTsKICBmdW5jdGlvbiBleHBvc2Uob2JqLCBlcCA9IHNlbGYpIHsKICAgIGVwLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBjYWxsYmFjayhldikgewogICAgICBpZiAoIWV2IHx8ICFldi5kYXRhKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICAgIGNvbnN0IHsgaWQsIHR5cGUsIHBhdGggfSA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBbXSB9LCBldi5kYXRhKTsKICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gKGV2LmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoZnJvbVdpcmVWYWx1ZSk7CiAgICAgIGxldCByZXR1cm5WYWx1ZTsKICAgICAgdHJ5IHsKICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXRoLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKG9iajIsIHByb3ApID0+IG9iajJbcHJvcF0sIG9iaik7CiAgICAgICAgY29uc3QgcmF3VmFsdWUgPSBwYXRoLnJlZHVjZSgob2JqMiwgcHJvcCkgPT4gb2JqMltwcm9wXSwgb2JqKTsKICAgICAgICBzd2l0Y2ggKHR5cGUpIHsKICAgICAgICAgIGNhc2UgIkdFVCI6CiAgICAgICAgICAgIHsKICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJhd1ZhbHVlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgICAgewogICAgICAgICAgICAgIHBhcmVudFtwYXRoLnNsaWNlKC0xKVswXV0gPSBmcm9tV2lyZVZhbHVlKGV2LmRhdGEudmFsdWUpOwogICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgICAgewogICAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmF3VmFsdWUuYXBwbHkocGFyZW50LCBhcmd1bWVudExpc3QpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgICAgewogICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IHJhd1ZhbHVlKC4uLmFyZ3VtZW50TGlzdCk7CiAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBwcm94eSh2YWx1ZSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICAgIHsKICAgICAgICAgICAgICBjb25zdCB7IHBvcnQxLCBwb3J0MiB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgICAgZXhwb3NlKG9iaiwgcG9ydDIpOwogICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdHJhbnNmZXIocG9ydDEsIFtwb3J0MV0pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICAgIHsKICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZvaWQgMDsKICAgICAgICAgICAgfQogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9CiAgICAgIH0gY2F0Y2ggKHZhbHVlKSB7CiAgICAgICAgcmV0dXJuVmFsdWUgPSB7IHZhbHVlLCBbdGhyb3dNYXJrZXJdOiAwIH07CiAgICAgIH0KICAgICAgUHJvbWlzZS5yZXNvbHZlKHJldHVyblZhbHVlKS5jYXRjaCgodmFsdWUpID0+IHsKICAgICAgICByZXR1cm4geyB2YWx1ZSwgW3Rocm93TWFya2VyXTogMCB9OwogICAgICB9KS50aGVuKChyZXR1cm5WYWx1ZTIpID0+IHsKICAgICAgICBjb25zdCBbd2lyZVZhbHVlLCB0cmFuc2ZlcmFibGVzXSA9IHRvV2lyZVZhbHVlKHJldHVyblZhbHVlMik7CiAgICAgICAgZXAucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3aXJlVmFsdWUpLCB7IGlkIH0pLCB0cmFuc2ZlcmFibGVzKTsKICAgICAgICBpZiAodHlwZSA9PT0gIlJFTEVBU0UiKSB7CiAgICAgICAgICBlcC5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgY2FsbGJhY2spOwogICAgICAgICAgY2xvc2VFbmRQb2ludChlcCk7CiAgICAgICAgfQogICAgICB9KTsKICAgIH0pOwogICAgaWYgKGVwLnN0YXJ0KSB7CiAgICAgIGVwLnN0YXJ0KCk7CiAgICB9CiAgfQogIGZ1bmN0aW9uIGlzTWVzc2FnZVBvcnQoZW5kcG9pbnQpIHsKICAgIHJldHVybiBlbmRwb2ludC5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwogIH0KICBmdW5jdGlvbiBjbG9zZUVuZFBvaW50KGVuZHBvaW50KSB7CiAgICBpZiAoaXNNZXNzYWdlUG9ydChlbmRwb2ludCkpCiAgICAgIGVuZHBvaW50LmNsb3NlKCk7CiAgfQogIGZ1bmN0aW9uIHdyYXAoZXAsIHRhcmdldCkgewogICAgcmV0dXJuIGNyZWF0ZVByb3h5KGVwLCBbXSwgdGFyZ2V0KTsKICB9CiAgZnVuY3Rpb24gdGhyb3dJZlByb3h5UmVsZWFzZWQoaXNSZWxlYXNlZCkgewogICAgaWYgKGlzUmVsZWFzZWQpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKICAgIH0KICB9CiAgZnVuY3Rpb24gY3JlYXRlUHJveHkoZXAsIHBhdGggPSBbXSwgdGFyZ2V0ID0gZnVuY3Rpb24oKSB7CiAgfSkgewogICAgbGV0IGlzUHJveHlSZWxlYXNlZCA9IGZhbHNlOwogICAgY29uc3QgcHJveHkyID0gbmV3IFByb3h5KHRhcmdldCwgewogICAgICBnZXQoX3RhcmdldCwgcHJvcCkgewogICAgICAgIHRocm93SWZQcm94eVJlbGVhc2VkKGlzUHJveHlSZWxlYXNlZCk7CiAgICAgICAgaWYgKHByb3AgPT09IHJlbGVhc2VQcm94eSkgewogICAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RSZXNwb25zZU1lc3NhZ2UoZXAsIHsKICAgICAgICAgICAgICB0eXBlOiAiUkVMRUFTRSIsCiAgICAgICAgICAgICAgcGF0aDogcGF0aC5tYXAoKHApID0+IHAudG9TdHJpbmcoKSkKICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7CiAgICAgICAgICAgICAgY2xvc2VFbmRQb2ludChlcCk7CiAgICAgICAgICAgICAgaXNQcm94eVJlbGVhc2VkID0gdHJ1ZTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9OwogICAgICAgIH0KICAgICAgICBpZiAocHJvcCA9PT0gInRoZW4iKSB7CiAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHsKICAgICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gcHJveHkyIH07CiAgICAgICAgICB9CiAgICAgICAgICBjb25zdCByID0gcmVxdWVzdFJlc3BvbnNlTWVzc2FnZShlcCwgewogICAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgICAgcGF0aDogcGF0aC5tYXAoKHApID0+IHAudG9TdHJpbmcoKSkKICAgICAgICAgIH0pLnRoZW4oZnJvbVdpcmVWYWx1ZSk7CiAgICAgICAgICByZXR1cm4gci50aGVuLmJpbmQocik7CiAgICAgICAgfQogICAgICAgIHJldHVybiBjcmVhdGVQcm94eShlcCwgWy4uLnBhdGgsIHByb3BdKTsKICAgICAgfSwKICAgICAgc2V0KF90YXJnZXQsIHByb3AsIHJhd1ZhbHVlKSB7CiAgICAgICAgdGhyb3dJZlByb3h5UmVsZWFzZWQoaXNQcm94eVJlbGVhc2VkKTsKICAgICAgICBjb25zdCBbdmFsdWUsIHRyYW5zZmVyYWJsZXNdID0gdG9XaXJlVmFsdWUocmF3VmFsdWUpOwogICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7CiAgICAgICAgICB0eXBlOiAiU0VUIiwKICAgICAgICAgIHBhdGg6IFsuLi5wYXRoLCBwcm9wXS5tYXAoKHApID0+IHAudG9TdHJpbmcoKSksCiAgICAgICAgICB2YWx1ZQogICAgICAgIH0sIHRyYW5zZmVyYWJsZXMpLnRoZW4oZnJvbVdpcmVWYWx1ZSk7CiAgICAgIH0sCiAgICAgIGFwcGx5KF90YXJnZXQsIF90aGlzQXJnLCByYXdBcmd1bWVudExpc3QpIHsKICAgICAgICB0aHJvd0lmUHJveHlSZWxlYXNlZChpc1Byb3h5UmVsZWFzZWQpOwogICAgICAgIGNvbnN0IGxhc3QgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07CiAgICAgICAgaWYgKGxhc3QgPT09IGNyZWF0ZUVuZHBvaW50KSB7CiAgICAgICAgICByZXR1cm4gcmVxdWVzdFJlc3BvbnNlTWVzc2FnZShlcCwgewogICAgICAgICAgICB0eXBlOiAiRU5EUE9JTlQiCiAgICAgICAgICB9KS50aGVuKGZyb21XaXJlVmFsdWUpOwogICAgICAgIH0KICAgICAgICBpZiAobGFzdCA9PT0gImJpbmQiKSB7CiAgICAgICAgICByZXR1cm4gY3JlYXRlUHJveHkoZXAsIHBhdGguc2xpY2UoMCwgLTEpKTsKICAgICAgICB9CiAgICAgICAgY29uc3QgW2FyZ3VtZW50TGlzdCwgdHJhbnNmZXJhYmxlc10gPSBwcm9jZXNzQXJndW1lbnRzKHJhd0FyZ3VtZW50TGlzdCk7CiAgICAgICAgcmV0dXJuIHJlcXVlc3RSZXNwb25zZU1lc3NhZ2UoZXAsIHsKICAgICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgICBwYXRoOiBwYXRoLm1hcCgocCkgPT4gcC50b1N0cmluZygpKSwKICAgICAgICAgIGFyZ3VtZW50TGlzdAogICAgICAgIH0sIHRyYW5zZmVyYWJsZXMpLnRoZW4oZnJvbVdpcmVWYWx1ZSk7CiAgICAgIH0sCiAgICAgIGNvbnN0cnVjdChfdGFyZ2V0LCByYXdBcmd1bWVudExpc3QpIHsKICAgICAgICB0aHJvd0lmUHJveHlSZWxlYXNlZChpc1Byb3h5UmVsZWFzZWQpOwogICAgICAgIGNvbnN0IFthcmd1bWVudExpc3QsIHRyYW5zZmVyYWJsZXNdID0gcHJvY2Vzc0FyZ3VtZW50cyhyYXdBcmd1bWVudExpc3QpOwogICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7CiAgICAgICAgICB0eXBlOiAiQ09OU1RSVUNUIiwKICAgICAgICAgIHBhdGg6IHBhdGgubWFwKChwKSA9PiBwLnRvU3RyaW5nKCkpLAogICAgICAgICAgYXJndW1lbnRMaXN0CiAgICAgICAgfSwgdHJhbnNmZXJhYmxlcykudGhlbihmcm9tV2lyZVZhbHVlKTsKICAgICAgfQogICAgfSk7CiAgICByZXR1cm4gcHJveHkyOwogIH0KICBmdW5jdGlvbiBteUZsYXQoYXJyKSB7CiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKTsKICB9CiAgZnVuY3Rpb24gcHJvY2Vzc0FyZ3VtZW50cyhhcmd1bWVudExpc3QpIHsKICAgIGNvbnN0IHByb2Nlc3NlZCA9IGFyZ3VtZW50TGlzdC5tYXAodG9XaXJlVmFsdWUpOwogICAgcmV0dXJuIFtwcm9jZXNzZWQubWFwKCh2KSA9PiB2WzBdKSwgbXlGbGF0KHByb2Nlc3NlZC5tYXAoKHYpID0+IHZbMV0pKV07CiAgfQogIGNvbnN0IHRyYW5zZmVyQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTsKICBmdW5jdGlvbiB0cmFuc2ZlcihvYmosIHRyYW5zZmVycykgewogICAgdHJhbnNmZXJDYWNoZS5zZXQob2JqLCB0cmFuc2ZlcnMpOwogICAgcmV0dXJuIG9iajsKICB9CiAgZnVuY3Rpb24gcHJveHkob2JqKSB7CiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3h5TWFya2VyXTogdHJ1ZSB9KTsKICB9CiAgZnVuY3Rpb24gdG9XaXJlVmFsdWUodmFsdWUpIHsKICAgIGZvciAoY29uc3QgW25hbWUsIGhhbmRsZXJdIG9mIHRyYW5zZmVySGFuZGxlcnMpIHsKICAgICAgaWYgKGhhbmRsZXIuY2FuSGFuZGxlKHZhbHVlKSkgewogICAgICAgIGNvbnN0IFtzZXJpYWxpemVkVmFsdWUsIHRyYW5zZmVyYWJsZXNdID0gaGFuZGxlci5zZXJpYWxpemUodmFsdWUpOwogICAgICAgIHJldHVybiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHR5cGU6ICJIQU5ETEVSIiwKICAgICAgICAgICAgbmFtZSwKICAgICAgICAgICAgdmFsdWU6IHNlcmlhbGl6ZWRWYWx1ZQogICAgICAgICAgfSwKICAgICAgICAgIHRyYW5zZmVyYWJsZXMKICAgICAgICBdOwogICAgICB9CiAgICB9CiAgICByZXR1cm4gWwogICAgICB7CiAgICAgICAgdHlwZTogIlJBVyIsCiAgICAgICAgdmFsdWUKICAgICAgfSwKICAgICAgdHJhbnNmZXJDYWNoZS5nZXQodmFsdWUpIHx8IFtdCiAgICBdOwogIH0KICBmdW5jdGlvbiBmcm9tV2lyZVZhbHVlKHZhbHVlKSB7CiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHsKICAgICAgY2FzZSAiSEFORExFUiI6CiAgICAgICAgcmV0dXJuIHRyYW5zZmVySGFuZGxlcnMuZ2V0KHZhbHVlLm5hbWUpLmRlc2VyaWFsaXplKHZhbHVlLnZhbHVlKTsKICAgICAgY2FzZSAiUkFXIjoKICAgICAgICByZXR1cm4gdmFsdWUudmFsdWU7CiAgICB9CiAgfQogIGZ1bmN0aW9uIHJlcXVlc3RSZXNwb25zZU1lc3NhZ2UoZXAsIG1zZywgdHJhbnNmZXJzKSB7CiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsKICAgICAgY29uc3QgaWQgPSBnZW5lcmF0ZVVVSUQoKTsKICAgICAgZXAuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIGwoZXYpIHsKICAgICAgICBpZiAoIWV2LmRhdGEgfHwgIWV2LmRhdGEuaWQgfHwgZXYuZGF0YS5pZCAhPT0gaWQpIHsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CiAgICAgICAgZXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGwpOwogICAgICAgIHJlc29sdmUoZXYuZGF0YSk7CiAgICAgIH0pOwogICAgICBpZiAoZXAuc3RhcnQpIHsKICAgICAgICBlcC5zdGFydCgpOwogICAgICB9CiAgICAgIGVwLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZCB9LCBtc2cpLCB0cmFuc2ZlcnMpOwogICAgfSk7CiAgfQogIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpIHsKICAgIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwogIH0KICBjb25zdCBjb2xvckNvbnZlcnRlciA9IHsKICAgIGdldENsb3Nlc3RDb2xvckZyb21QYWxldHRlKGdhbWVQYWxldHRlLCByZXNlcnZlZE9mZnNldCwgciwgZywgYikgewogICAgICBjb25zdCBpZHggPSB0aGlzLmNvbnZlcnRBY3R1YWxDb2xvckZyb21QYWxldHRlKGdhbWVQYWxldHRlLCByZXNlcnZlZE9mZnNldCwgciwgZywgYik7CiAgICAgIHJldHVybiB0aGlzLmdldEFjdHVhbENvbG9yRnJvbVBhbGV0dGUoZ2FtZVBhbGV0dGUsIGlkeCk7CiAgICB9LAogICAgY29udmVydEFjdHVhbENvbG9yRnJvbVBhbGV0dGUoZ2FtZVBhbGV0dGUsIHJlc2VydmVkT2Zmc2V0LCByLCBnLCBiKSB7CiAgICAgIHZhciBfYTsKICAgICAgY29uc3QgcmVzdWx0Q29sb3JJZHggPSAoX2EgPSBnYW1lUGFsZXR0ZS5tYXAoKGNvbG9yLCBpKSA9PiB7CiAgICAgICAgaWYgKGkgPCByZXNlcnZlZE9mZnNldCkKICAgICAgICAgIHJldHVybiB2b2lkIDA7CiAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguc3FydCgociAtIGNvbG9yWzBdKSAqKiAyICsgKGcgLSBjb2xvclsxXSkgKiogMiArIChiIC0gY29sb3JbMl0pICoqIDIpOwogICAgICAgIHJldHVybiB7CiAgICAgICAgICBkaWZmZXJlbmNlLAogICAgICAgICAgY29sb3IsCiAgICAgICAgICBpbmRleDogaQogICAgICAgIH07CiAgICAgIH0pLmZpbHRlcigoYSkgPT4gISFhKS5tYXAoKGEpID0+IGEpLnNvcnQoKGFhLCBiYikgPT4gYWEuZGlmZmVyZW5jZSAtIGJiLmRpZmZlcmVuY2UpWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX2EuaW5kZXg7CiAgICAgIGlmIChyZXN1bHRDb2xvcklkeCA9PT0gdm9pZCAwKQogICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29sb3Igbm90IGZvdW5kICR7cn0sICR7Z30sICR7Yn0gZnJvbSAke0pTT04uc3RyaW5naWZ5KGdhbWVQYWxldHRlKX1gKTsKICAgICAgcmV0dXJuIHJlc3VsdENvbG9ySWR4OwogICAgfSwKICAgIGdldEFjdHVhbENvbG9yRnJvbVBhbGV0dGUoZ2FtZVBhbGV0dGUsIGNvbG9yKSB7CiAgICAgIGNvbnN0IGNvbG9yRGF0YSA9IGdhbWVQYWxldHRlW2NvbG9yXTsKICAgICAgaWYgKCFjb2xvckRhdGEpCiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIHJldHVybiBbY29sb3JEYXRhWzBdLCBjb2xvckRhdGFbMV0sIGNvbG9yRGF0YVsyXV07CiAgICB9LAogICAgYXJlQ29sb3JzRXF1YWwoZ2FtZVBhbGV0dGUsIGMxLCBjMikgewogICAgICBpZiAoYzEgPT09IGMyKSB7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgY29sb3IxID0gZ2FtZVBhbGV0dGVbYzFdOwogICAgICBjb25zdCBjb2xvcjIgPSBnYW1lUGFsZXR0ZVtjMl07CiAgICAgIGlmICghY29sb3IxIHx8ICFjb2xvcjIpCiAgICAgICAgcmV0dXJuIGMxID09PSBjMjsKICAgICAgbGV0IGFyZUVxdWFsID0gdHJ1ZTsKICAgICAgYXJlRXF1YWwgPSBhcmVFcXVhbCAmJiBjb2xvcjFbMF0gPT09IGNvbG9yMlswXTsKICAgICAgYXJlRXF1YWwgPSBhcmVFcXVhbCAmJiBjb2xvcjFbMV0gPT09IGNvbG9yMlsxXTsKICAgICAgYXJlRXF1YWwgPSBhcmVFcXVhbCAmJiBjb2xvcjFbMl0gPT09IGNvbG9yMlsyXTsKICAgICAgcmV0dXJuIGFyZUVxdWFsOwogICAgfSwKICAgIHBhcnNlQ29sb3IoY29sb3JTdHIpIHsKICAgICAgY29uc3QgciA9IHBhcnNlSW50KGNvbG9yU3RyLnN1YnN0cigxLCAyKSwgMTYpOwogICAgICBjb25zdCBnID0gcGFyc2VJbnQoY29sb3JTdHIuc3Vic3RyKDMsIDIpLCAxNik7CiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChjb2xvclN0ci5zdWJzdHIoNSwgMiksIDE2KTsKICAgICAgcmV0dXJuIFtyLCBnLCBiXTsKICAgIH0KICB9OwogIGNvbnN0IHBpY3R1cmVDb252ZXJ0ZXIgPSB7CiAgICBhc3luYyBpc0ltYWdlVmFsaWRDb3JzKHVybCkgewogICAgICB0cnkgewogICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTsKICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KICAgICAgcmV0dXJuIHRydWU7CiAgICB9LAogICAgYXN5bmMgYXBwbHlNb2RpZmljYXRpb25zVG9JbWFnZURhdGEoY29sb3JQYWxldHRlLCBpbWFnZURhdGEsIG1vZGlmaWVyQ29udmVydENvbG9ycywgYnJpZ2h0ZW5CeSwgbW9kaWZpZXJTbW9sUGl4ZWxzKSB7CiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gewogICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2g7CiAgICAgICAgY29uc3Qgb3V0SW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShpbWFnZURhdGEud2lkdGgsIGltYWdlRGF0YS5oZWlnaHQpOwogICAgICAgIG91dEltYWdlRGF0YS5kYXRhLnNldChpbWFnZURhdGEuZGF0YSk7CiAgICAgICAgaWYgKG1vZGlmaWVyQ29udmVydENvbG9ycykgewogICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBvdXRJbWFnZURhdGEuaGVpZ2h0OyB5KyspIHsKICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBvdXRJbWFnZURhdGEud2lkdGg7IHgrKykgewogICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG91dEltYWdlRGF0YS53aWR0aCAqIHkgKyB4IDw8IDI7CiAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSID0gKF9hID0gaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMF0pICE9IG51bGwgPyBfYSA6IDA7CiAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxHID0gKF9iID0gaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMV0pICE9IG51bGwgPyBfYiA6IDA7CiAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxCID0gKF9jID0gaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0pICE9IG51bGwgPyBfYyA6IDA7CiAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxBID0gKF9kID0gaW1hZ2VEYXRhLmRhdGFbaWR4ICsgM10pICE9IG51bGwgPyBfZCA6IDA7CiAgICAgICAgICAgICAgY29uc3QgciA9IE1hdGgubWluKG9yaWdpbmFsUiArIGJyaWdodGVuQnksIDI1NSk7CiAgICAgICAgICAgICAgY29uc3QgZyA9IE1hdGgubWluKG9yaWdpbmFsRyArIGJyaWdodGVuQnksIDI1NSk7CiAgICAgICAgICAgICAgY29uc3QgYiA9IE1hdGgubWluKG9yaWdpbmFsQiArIGJyaWdodGVuQnksIDI1NSk7CiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0QXJyID0gY29sb3JDb252ZXJ0ZXIuZ2V0Q2xvc2VzdENvbG9yRnJvbVBhbGV0dGUoY29sb3JQYWxldHRlLCAwLCByLCBnLCBiKTsKICAgICAgICAgICAgICBpZiAoIXJlc3VsdEFycikKICAgICAgICAgICAgICAgIDsKICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgIGNvbnN0IFtjb252ZXJ0ZWRSLCBjb252ZXJ0ZWRHLCBjb252ZXJ0ZWRCXSA9IHJlc3VsdEFycjsKICAgICAgICAgICAgICAgIG91dEltYWdlRGF0YS5kYXRhW2lkeCArIDBdID0gY29udmVydGVkUjsKICAgICAgICAgICAgICAgIG91dEltYWdlRGF0YS5kYXRhW2lkeCArIDFdID0gY29udmVydGVkRzsKICAgICAgICAgICAgICAgIG91dEltYWdlRGF0YS5kYXRhW2lkeCArIDJdID0gY29udmVydGVkQjsKICAgICAgICAgICAgICAgIG91dEltYWdlRGF0YS5kYXRhW2lkeCArIDNdID0gb3JpZ2luYWxBID4gMzAgPyAyNTUgOiAwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpZiAobW9kaWZpZXJTbW9sUGl4ZWxzKSB7CiAgICAgICAgICBjb25zdCBzbW9sUGl4ZWxzTXVsdGlwbGllciA9IDM7CiAgICAgICAgICBjb25zdCBzbW9sUGl4ZWxzSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShvdXRJbWFnZURhdGEud2lkdGggKiBzbW9sUGl4ZWxzTXVsdGlwbGllciwgb3V0SW1hZ2VEYXRhLmhlaWdodCAqIHNtb2xQaXhlbHNNdWx0aXBsaWVyKTsKICAgICAgICAgIGZvciAobGV0IG91dFkgPSAwOyBvdXRZIDwgb3V0SW1hZ2VEYXRhLmhlaWdodDsgb3V0WSsrKSB7CiAgICAgICAgICAgIGZvciAobGV0IG91dFggPSAwOyBvdXRYIDwgb3V0SW1hZ2VEYXRhLndpZHRoOyBvdXRYKyspIHsKICAgICAgICAgICAgICBjb25zdCBvdXRJZHggPSBvdXRJbWFnZURhdGEud2lkdGggKiBvdXRZICsgb3V0WCA8PCAyOwogICAgICAgICAgICAgIGNvbnN0IG91dFIgPSAoX2UgPSBvdXRJbWFnZURhdGEuZGF0YVtvdXRJZHggKyAwXSkgIT0gbnVsbCA/IF9lIDogMDsKICAgICAgICAgICAgICBjb25zdCBvdXRHID0gKF9mID0gb3V0SW1hZ2VEYXRhLmRhdGFbb3V0SWR4ICsgMV0pICE9IG51bGwgPyBfZiA6IDA7CiAgICAgICAgICAgICAgY29uc3Qgb3V0QiA9IChfZyA9IG91dEltYWdlRGF0YS5kYXRhW291dElkeCArIDJdKSAhPSBudWxsID8gX2cgOiAwOwogICAgICAgICAgICAgIGNvbnN0IG91dEEgPSAoX2ggPSBvdXRJbWFnZURhdGEuZGF0YVtvdXRJZHggKyAzXSkgIT0gbnVsbCA/IF9oIDogMDsKICAgICAgICAgICAgICBjb25zdCBzbW9sWCA9IG91dFggKiBzbW9sUGl4ZWxzTXVsdGlwbGllciArIE1hdGguZmxvb3Ioc21vbFBpeGVsc011bHRpcGxpZXIgLyAyKTsKICAgICAgICAgICAgICBjb25zdCBzbW9sWSA9IG91dFkgKiBzbW9sUGl4ZWxzTXVsdGlwbGllciArIE1hdGguZmxvb3Ioc21vbFBpeGVsc011bHRpcGxpZXIgLyAyKTsKICAgICAgICAgICAgICBjb25zdCBzbW9sSWR4ID0gc21vbFkgKiBzbW9sUGl4ZWxzSW1hZ2VEYXRhLndpZHRoICsgc21vbFggPDwgMjsKICAgICAgICAgICAgICBzbW9sUGl4ZWxzSW1hZ2VEYXRhLmRhdGFbc21vbElkeCArIDBdID0gb3V0UjsKICAgICAgICAgICAgICBzbW9sUGl4ZWxzSW1hZ2VEYXRhLmRhdGFbc21vbElkeCArIDFdID0gb3V0RzsKICAgICAgICAgICAgICBzbW9sUGl4ZWxzSW1hZ2VEYXRhLmRhdGFbc21vbElkeCArIDJdID0gb3V0QjsKICAgICAgICAgICAgICBzbW9sUGl4ZWxzSW1hZ2VEYXRhLmRhdGFbc21vbElkeCArIDNdID0gb3V0QTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgICAgcmVzb2x2ZShzbW9sUGl4ZWxzSW1hZ2VEYXRhKTsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CiAgICAgICAgcmVzb2x2ZShvdXRJbWFnZURhdGEpOwogICAgICB9KTsKICAgIH0KICB9OwogIGV4cG9zZShwaWN0dXJlQ29udmVydGVyKTsKfSkoKTsK";
const blob = typeof window !== "undefined" && window.Blob && new Blob([atob(encodedJs)], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper() {
  const objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
  try {
    return objURL ? new Worker(objURL, {}) : new Worker("data:application/javascript;base64," + encodedJs, { type: "module" });
  } finally {
    objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
  }
}
const worker = new WorkerWrapper();
const pictureConverterApi = wrap(worker);
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
        }).then((response) => response.blob()).then((blob2) => new File([blob2], "image.png", {
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
const initialState$3 = {
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
  initialState: initialState$3,
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
const initialState$2 = {
  chunks: []
};
const chunkDataSlice = createSlice({
  initialState: initialState$2,
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
const initialState$1 = {
  pixelsToPlaceQueue: {},
  pixelPlaceQueueEnabled: false
};
const pixelPlacementSlice = createSlice({
  initialState: initialState$1,
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
createSelector(selectPixelsToPlaceIds, selectPixelsToPlaceQueue, (pixelsToPlaceIds, pixelsToPlaceQueue) => {
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
var l$4 = Symbol.for("react.element"), n$5 = Symbol.for("react.portal"), p$6 = Symbol.for("react.fragment"), q$6 = Symbol.for("react.strict_mode"), r$3 = Symbol.for("react.profiler"), t$4 = Symbol.for("react.provider"), u$3 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z$2 && a2[z$2] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C = Object.assign, D$1 = {};
function E$1(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$1.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$1.prototype;
function G$1(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B;
}
var H$1 = G$1.prototype = new F$1();
H$1.constructor = G$1;
C(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
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
  return { $$typeof: l$4, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$1(a2, b2) {
  return { $$typeof: l$4, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l$4;
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
          case l$4:
          case n$5:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a3) {
      return a3;
    })) : c2 != null && (O(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = d2 === "" ? "." : d2 + ":";
  if (I$1(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$1(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$2(a2), typeof f2 === "function")
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
react_production_min.Component = E$1;
react_production_min.Fragment = p$6;
react_production_min.Profiler = r$3;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$6;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
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
  return { $$typeof: l$4, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$3, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
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
  return { $$typeof: v$3, render: a2 };
};
react_production_min.isValidElement = O;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$1, type: a2, compare: b2 === void 0 ? null : b2 };
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
function p$5(a2) {
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
function q$5(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$1[a2] = new q$5(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$1[b2] = new q$5(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$1[a2] = new q$5(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var pa = /[\-:]([a-z])/g;
function qa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(pa, qa);
  z$1[b2] = new q$5(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(pa, qa);
  z$1[b2] = new q$5(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(pa, qa);
  z$1[b2] = new q$5(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new q$5("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$1[a2] = new q$5(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ra(a2, b2, c2, d2) {
  var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
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
var A$1 = Object.assign, Ja;
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
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
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
    throw Error(p$5(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function eb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p$5(92));
      if (bb(c2)) {
        if (1 < c2.length)
          throw Error(p$5(93));
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
var qb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function rb(a2, b2) {
  if (b2) {
    if (qb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$5(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$5(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$5(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$5(62));
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
      throw Error(p$5(280));
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
    throw Error(p$5(231, b2, typeof c2));
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
      throw Error(p$5(198));
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
    throw Error(p$5(188));
}
function Vb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Sb(a2);
    if (b2 === null)
      throw Error(p$5(188));
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
      throw Error(p$5(188));
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
          throw Error(p$5(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$5(190));
  }
  if (c2.tag !== 3)
    throw Error(p$5(188));
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
var Yb = ba.unstable_scheduleCallback, Zb = ba.unstable_cancelCallback, $b = ba.unstable_shouldYield, ac = ba.unstable_requestPaint, D = ba.unstable_now, bc = ba.unstable_getCurrentPriorityLevel, cc = ba.unstable_ImmediatePriority, dc = ba.unstable_UserBlockingPriority, ec = ba.unstable_NormalPriority, fc = ba.unstable_LowPriority, gc = ba.unstable_IdlePriority, hc = null, ic = null;
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
var E = 0;
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
  var e2 = E, f2 = Zc.transition;
  Zc.transition = null;
  try {
    E = 1, ad(a2, b2, c2, d2);
  } finally {
    E = e2, Zc.transition = f2;
  }
}
function bd(a2, b2, c2, d2) {
  var e2 = E, f2 = Zc.transition;
  Zc.transition = null;
  try {
    E = 4, ad(a2, b2, c2, d2);
  } finally {
    E = e2, Zc.transition = f2;
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
  A$1(b2.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, od = md(nd), pd = A$1({}, nd, { view: 0, detail: 0 }), qd = md(pd), rd, sd, td, vd = A$1({}, pd, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ud, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== td && (td && a2.type === "mousemove" ? (rd = a2.screenX - td.screenX, sd = a2.screenY - td.screenY) : sd = rd = 0, td = a2);
  return rd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : sd;
} }), wd = md(vd), xd = A$1({}, vd, { dataTransfer: 0 }), yd = md(xd), zd = A$1({}, pd, { relatedTarget: 0 }), Ad = md(zd), Bd = A$1({}, nd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cd = md(Bd), Dd = A$1({}, nd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Ed = md(Dd), Fd = A$1({}, nd, { data: 0 }), Gd = md(Fd), Hd = {
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
var Ld = A$1({}, pd, { key: function(a2) {
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
} }), Md = md(Ld), Nd = A$1({}, vd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Od = md(Nd), Pd = A$1({}, pd, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ud }), Qd = md(Pd), Rd = A$1({}, nd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sd = md(Rd), Td = A$1({}, vd, {
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
function F(a2, b2) {
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
    throw Error(p$5(425));
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
  throw Error(p$5(33));
}
function Ab(a2) {
  return a2[Jf] || null;
}
var Mf = [], Nf = -1;
function Of(a2) {
  return { current: a2 };
}
function G(a2) {
  0 > Nf || (a2.current = Mf[Nf], Mf[Nf] = null, Nf--);
}
function H(a2, b2) {
  Nf++;
  Mf[Nf] = a2.current;
  a2.current = b2;
}
var Pf = {}, I = Of(Pf), Qf = Of(false), Rf = Pf;
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
  G(Qf);
  G(I);
}
function Vf(a2, b2, c2) {
  if (I.current !== Pf)
    throw Error(p$5(168));
  H(I, b2);
  H(Qf, c2);
}
function Wf(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$5(108, Pa(a2) || "Unknown", e2));
  return A$1({}, c2, d2);
}
function Xf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Pf;
  Rf = I.current;
  H(I, a2);
  H(Qf, Qf.current);
  return true;
}
function Yf(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$5(169));
  c2 ? (a2 = Wf(a2, b2, Rf), d2.__reactInternalMemoizedMergedChildContext = a2, G(Qf), G(I), H(I, a2)) : G(Qf);
  H(Qf, c2);
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
    var a2 = 0, b2 = E;
    try {
      var c2 = Zf;
      for (E = 1; a2 < c2.length; a2++) {
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
      E = b2, ag = false;
    }
  }
  return null;
}
var eg = sa.ReactCurrentBatchConfig;
function fg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$1({}, b2);
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
  G(gg);
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
        throw Error(p$5(308));
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
              w2 = A$1({}, w2, u2);
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
          throw Error(p$5(191, e2));
        e2.call(d2);
      }
    }
}
var Bg = new aa.Component().refs;
function Cg(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A$1({}, b2, c2);
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
  typeof f2 === "object" && f2 !== null ? f2 = pg(f2) : (e2 = Tf(b2) ? Rf : I.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Sf(a2, e2) : Pf);
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
  typeof f2 === "object" && f2 !== null ? e2.context = pg(f2) : (f2 = Tf(b2) ? Rf : I.current, e2.context = Sf(a2, f2));
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
          throw Error(p$5(418));
        b2 = Ff(c2.nextSibling);
        var d2 = Xg;
        b2 && bh(a2, b2) ? $g(d2, c2) : (a2.flags = a2.flags & -4097 | 2, N = false, Xg = a2);
      }
    } else {
      if (ch(a2))
        throw Error(p$5(418));
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
      throw Error(p$5(418));
    }
    for (; b2; )
      $g(a2, b2), b2 = Ff(b2.nextSibling);
  }
  eh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$5(317));
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
          throw Error(p$5(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$5(147, a2));
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
      throw Error(p$5(284));
    if (!c2._owner)
      throw Error(p$5(290, a2));
  }
  return a2;
}
function jh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$5(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
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
      throw Error(p$5(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$5(151));
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
    throw Error(p$5(174));
  return a2;
}
function yh(a2, b2) {
  H(wh, b2);
  H(vh, a2);
  H(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : ib(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = ib(b2, a2);
  }
  G(uh);
  H(uh, b2);
}
function zh() {
  G(uh);
  G(vh);
  G(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = ib(b2, a2.type);
  b2 !== c2 && (H(vh, a2), H(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (G(uh), G(vh));
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
  throw Error(p$5(321));
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
        throw Error(p$5(301));
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
    throw Error(p$5(300));
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
      throw Error(p$5(310));
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
    throw Error(p$5(311));
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
    throw Error(p$5(311));
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
      throw Error(p$5(349));
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
  var c2 = E;
  E = c2 !== 0 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    E = c2, Gh.transition = d2;
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
      throw Error(p$5(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (J === null)
      throw Error(p$5(349));
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
        e2 = A$1({}, e2, { value: void 0 });
        d2 = A$1({}, d2, { value: void 0 });
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
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (da.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && F("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
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
      G(Qf);
      G(I);
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
            throw Error(p$5(166));
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
              F("cancel", d2);
              F("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < ff.length; e2++)
                F(ff[e2], d2);
              break;
            case "source":
              F("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              F("error", d2);
              F("load", d2);
              break;
            case "details":
              F("toggle", d2);
              break;
            case "input":
              Xa(d2, f2);
              F("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              F("invalid", d2);
              break;
            case "textarea":
              eb(d2, f2), F("invalid", d2);
          }
          rb(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (vf(d2.textContent, h2, a2), e2 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (vf(d2.textContent, h2, a2), e2 = ["children", "" + h2]) : da.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && F("scroll", d2);
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
                F("cancel", a2);
                F("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < ff.length; e2++)
                  F(ff[e2], a2);
                e2 = d2;
                break;
              case "source":
                F("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                F("error", a2);
                F("load", a2);
                e2 = d2;
                break;
              case "details":
                F("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Xa(a2, d2);
                e2 = Wa(a2, d2);
                F("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$1({}, d2, { value: void 0 });
                F("invalid", a2);
                break;
              case "textarea":
                eb(a2, d2);
                e2 = db(a2, d2);
                F("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            rb(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? pb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && kb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && lb(a2, k2) : typeof k2 === "number" && lb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (da.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && F("scroll", a2) : k2 != null && ra(a2, f2, k2, g2));
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
          throw Error(p$5(166));
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
      G(P);
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
            throw Error(p$5(318));
          d2 = b2.memoizedState;
          d2 = d2 !== null ? d2.dehydrated : null;
          if (!d2)
            throw Error(p$5(317));
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
      G(P);
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
                H(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && D() > Ti && (b2.flags |= 128, d2 = true, Pi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Ch(g2), a2 !== null) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Pi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !N)
              return V(b2), null;
          } else
            2 * D() - f2.renderingStartTime > Ti && c2 !== 1073741824 && (b2.flags |= 128, d2 = true, Pi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = D(), b2.sibling = null, c2 = P.current, H(P, d2 ? c2 & 1 | 2 : c2 & 1), b2;
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
  throw Error(p$5(156, b2.tag));
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
      b2.memoizedState = { baseLanes: 0, cachePool: null }, H(ej, Vi), Vi |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null }, d2 = f2 !== null ? f2.baseLanes : c2, H(ej, Vi), Vi |= d2;
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null }, b2.updateQueue = null, H(ej, Vi), Vi |= a2, null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, H(ej, Vi), Vi |= d2;
  Xi(a2, b2, e2, c2);
  return b2.child;
}
function fj(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d2, e2) {
  var f2 = Tf(c2) ? Rf : I.current;
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
    typeof l2 === "object" && l2 !== null ? l2 = pg(l2) : (l2 = Tf(c2) ? Rf : I.current, l2 = Sf(b2, l2));
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
    typeof k2 === "object" && k2 !== null ? k2 = pg(k2) : (k2 = Tf(c2) ? Rf : I.current, k2 = Sf(b2, k2));
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
  H(P, e2 & 1);
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
          return b2.flags &= -257, pj(a2, b2, c2, Error(p$5(422)));
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
        b2 = pj(a2, b2, c2, Error(p$5(419)));
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
        b2 = pj(a2, b2, c2, Error(p$5(421)));
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
  H(P, d2);
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
    throw Error(p$5(153));
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
      H(gg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (d2 !== null) {
        if (d2.dehydrated !== null)
          return H(P, P.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return mj(a2, b2, c2);
        H(P, P.current & 1);
        a2 = Zi(a2, b2, c2);
        return a2 !== null ? a2.sibling : null;
      }
      H(P, P.current & 1);
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
      H(P, P.current);
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
      return zh(), G(Qf), G(I), Eh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      G(P);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$5(340));
        gh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return G(P), null;
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
                throw Error(p$5(163));
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
    throw Error(p$5(160));
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
      throw Error(p$5(161));
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
            throw Error(p$5(160));
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
        throw Error(p$5(162));
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
  throw Error(p$5(163));
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
                    Vj = D();
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
              throw Error(p$5(163));
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
  return (K & 6) !== 0 ? D() : pk !== -1 ? pk : pk = D();
}
function Dg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((K & 2) !== 0 && Z !== 0)
    return Z & -Z;
  if (eg.transition !== null)
    return qk === 0 && (a2 = oc, oc <<= 1, (oc & 4194240) === 0 && (oc = 64), qk = a2), qk;
  a2 = E;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : ed(a2.type);
  return a2;
}
function Eg(a2, b2, c2) {
  if (50 < nk)
    throw nk = 0, ok = null, Error(p$5(185));
  var d2 = rk(a2, b2);
  if (d2 === null)
    return null;
  wc(d2, b2, c2);
  if ((K & 2) === 0 || d2 !== J)
    d2 === J && ((K & 2) === 0 && (gk |= b2), W === 4 && sk(d2, Z)), tk(d2, c2), b2 === 1 && K === 0 && (a2.mode & 1) === 0 && (Ti = D() + 500, $f && dg());
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
    throw Error(p$5(327));
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
      Ti = D() + 500, Ak(a2, b2);
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
      throw c2 = fk, Ak(a2, 0), sk(a2, d2), tk(a2, D()), c2;
    if (b2 === 6)
      sk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if ((d2 & 30) === 0 && !Ek(e2) && (b2 = yk(a2, d2), b2 === 2 && (f2 = uc(a2), f2 !== 0 && (d2 = f2, b2 = Dk(a2, f2))), b2 === 1))
        throw c2 = fk, Ak(a2, 0), sk(a2, d2), tk(a2, D()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$5(345));
        case 2:
          Fk(a2, jk);
          break;
        case 3:
          sk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = Vj + 500 - D(), 10 < b2)) {
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
          d2 = D() - d2;
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
          throw Error(p$5(329));
      }
    }
  }
  tk(a2, D());
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
    throw Error(p$5(327));
  xk();
  var b2 = rc(a2, 0);
  if ((b2 & 1) === 0)
    return tk(a2, D()), null;
  var c2 = yk(a2, b2);
  if (a2.tag !== 0 && c2 === 2) {
    var d2 = uc(a2);
    d2 !== 0 && (b2 = d2, c2 = Dk(a2, d2));
  }
  if (c2 === 1)
    throw c2 = fk, Ak(a2, 0), sk(a2, b2), tk(a2, D()), c2;
  if (c2 === 6)
    throw Error(p$5(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Fk(a2, jk);
  tk(a2, D());
  return null;
}
function Gk(a2, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a2(b2);
  } finally {
    K = c2, K === 0 && (Ti = D() + 500, $f && dg());
  }
}
function Hk(a2) {
  lk !== null && lk.tag === 0 && (K & 6) === 0 && xk();
  var b2 = K;
  K |= 1;
  var c2 = ek.transition, d2 = E;
  try {
    if (ek.transition = null, E = 1, a2)
      return a2();
  } finally {
    E = d2, ek.transition = c2, K = b2, (K & 6) === 0 && dg();
  }
}
function Ui() {
  Vi = ej.current;
  G(ej);
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
          G(Qf);
          G(I);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          G(P);
          break;
        case 19:
          G(P);
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
            k2 = Error(p$5(426));
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
    throw Error(p$5(261));
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
  var c2 = E, d2 = ek.transition;
  try {
    ek.transition = null, E = 1, Mk(a2, b2, c2);
  } finally {
    ek.transition = d2, E = c2;
  }
  return null;
}
function Mk(a2, b2, c2) {
  do
    xk();
  while (lk !== null);
  if ((K & 6) !== 0)
    throw Error(p$5(327));
  var d2 = a2.finishedWork, e2 = a2.finishedLanes;
  if (d2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (d2 === a2.current)
    throw Error(p$5(177));
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
    var g2 = E;
    E = 1;
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
    E = g2;
    ek.transition = f2;
  } else
    a2.current = d2;
  kk && (kk = false, lk = a2, mk = e2);
  f2 = a2.pendingLanes;
  f2 === 0 && (Gi = null);
  jc(d2.stateNode);
  tk(a2, D());
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
    var a2 = zc(mk), b2 = ek.transition, c2 = E;
    try {
      ek.transition = null;
      E = 16 > a2 ? 16 : a2;
      if (lk === null)
        var d2 = false;
      else {
        a2 = lk;
        lk = null;
        mk = 0;
        if ((K & 6) !== 0)
          throw Error(p$5(331));
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
      E = c2, ek.transition = b2;
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
  J === a2 && (Z & c2) === c2 && (W === 4 || W === 3 && (Z & 130023424) === Z && 500 > D() - Vj ? Ak(a2, 0) : hk |= c2);
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
      throw Error(p$5(314));
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
      var e2 = Sf(b2, I.current);
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
        throw Error(p$5(306, d2, ""));
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
          throw Error(p$5(387));
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
            e2 = Error(p$5(423));
            b2 = jj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Error(p$5(424));
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
        H(gg, d2._currentValue);
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
                  throw Error(p$5(341));
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
  throw Error(p$5(156, b2.tag));
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
          throw Error(p$5(130, a2 == null ? a2 : typeof a2, ""));
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
      throw Error(p$5(170));
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
    throw Error(p$5(171));
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
    throw Error(p$5(409));
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
        c2 !== 0 && (yc(b2, c2 | 1), tk(b2, D()), (K & 6) === 0 && (Ti = D() + 500, dg()));
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
  return E;
};
Ec = function(a2, b2) {
  var c2 = E;
  try {
    return E = a2, b2();
  } finally {
    E = c2;
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
              throw Error(p$5(90));
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
    throw Error(p$5(200));
  return Tk(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!dl(a2))
    throw Error(p$5(299));
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
      throw Error(p$5(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$5(268, a2));
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
    throw Error(p$5(200));
  return hl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!dl(a2))
    throw Error(p$5(405));
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
    throw Error(p$5(200));
  return hl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!el(a2))
    throw Error(p$5(40));
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
    throw Error(p$5(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p$5(38));
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
var m$4 = reactDom.exports;
{
  createRoot = m$4.createRoot;
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
var initialState = {
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
    _this.state = initialState;
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
    this.setState(initialState);
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
var e$2 = react.exports;
function h$3(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$3 = typeof Object.is === "function" ? Object.is : h$3, l$3 = e$2.useState, m$3 = e$2.useEffect, n$4 = e$2.useLayoutEffect, p$4 = e$2.useDebugValue;
function q$4(a2, b2) {
  var d2 = b2(), f2 = l$3({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$4(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$2(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$3(function() {
    r$2(c2) && g2({ inst: c2 });
    return a2(function() {
      r$2(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$4(d2);
  return d2;
}
function r$2(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$3(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$3(a2, b2) {
  return b2();
}
var u$2 = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? t$3 : q$4;
useSyncExternalStoreShim_production_min.useSyncExternalStore = e$2.useSyncExternalStore !== void 0 ? e$2.useSyncExternalStore : u$2;
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
var h$2 = react.exports, n$3 = shim.exports;
function p$3(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$3 = typeof Object.is === "function" ? Object.is : p$3, r$1 = n$3.useSyncExternalStore, t$2 = h$2.useRef, u$1 = h$2.useEffect, v$2 = h$2.useMemo, w$1 = h$2.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$2(null);
  if (c2.current === null) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$2(function() {
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
      if (q$3(d3, a4))
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
  var d2 = r$1(a2, c2[0], c2[1]);
  u$1(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$1(d2);
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
const initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
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
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = typeof Symbol === "function" && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$2 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$2 = b$1 ? Symbol.for("react.context") : 60110, l$2 = b$1 ? Symbol.for("react.async_mode") : 60111, m$2 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$2 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$1 ? Symbol.for("react.suspense") : 60113, q$2 = b$1 ? Symbol.for("react.suspense_list") : 60120, r = b$1 ? Symbol.for("react.memo") : 60115, t$1 = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w = b$1 ? Symbol.for("react.fundamental") : 60117, x = b$1 ? Symbol.for("react.responder") : 60118, y = b$1 ? Symbol.for("react.scope") : 60119;
function z(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$1:
        switch (a2 = a2.type, a2) {
          case l$2:
          case m$2:
          case e$1:
          case g$1:
          case f$2:
          case p$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case n$2:
              case t$1:
              case r:
              case h$1:
                return a2;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A(a2) {
  return z(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$2;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$2;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$1;
reactIs_production_min$1.Memo = r;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$2;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A(a2) || z(a2) === l$2;
};
reactIs_production_min$1.isConcurrentMode = A;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z(a2) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z(a2) === h$1;
};
reactIs_production_min$1.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z(a2) === n$2;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z(a2) === e$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z(a2) === t$1;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z(a2) === r;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z(a2) === d$1;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z(a2) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z(a2) === f$2;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z(a2) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e$1 || a2 === m$2 || a2 === g$1 || a2 === f$2 || a2 === p$2 || a2 === q$2 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t$1 || a2.$$typeof === r || a2.$$typeof === h$1 || a2.$$typeof === k$2 || a2.$$typeof === n$2 || a2.$$typeof === w || a2.$$typeof === x || a2.$$typeof === y || a2.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min$1;
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
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$1 = Symbol.for("react.suspense"), n$1 = Symbol.for("react.suspense_list"), p$1 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u = Symbol.for("react.module.reference");
function v(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b:
        switch (a2 = a2.type, a2) {
          case d:
          case f$1:
          case e:
          case m$1:
          case n$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case h:
              case l$1:
              case q$1:
              case p$1:
              case g:
                return a2;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l$1;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q$1;
reactIs_production_min.Memo = p$1;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f$1;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m$1;
reactIs_production_min.SuspenseList = n$1;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v(a2) === h;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v(a2) === g;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v(a2) === l$1;
};
reactIs_production_min.isFragment = function(a2) {
  return v(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return v(a2) === q$1;
};
reactIs_production_min.isMemo = function(a2) {
  return v(a2) === p$1;
};
reactIs_production_min.isPortal = function(a2) {
  return v(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return v(a2) === f$1;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v(a2) === m$1;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v(a2) === n$1;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === d || a2 === f$1 || a2 === e || a2 === m$1 || a2 === n$1 || a2 === t || typeof a2 === "object" && a2 !== null && (a2.$$typeof === q$1 || a2.$$typeof === p$1 || a2.$$typeof === g || a2.$$typeof === h || a2.$$typeof === l$1 || a2.$$typeof === u || a2.getModuleId !== void 0) ? true : false;
};
reactIs_production_min.typeOf = v;
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
var f = react.exports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  g2 !== void 0 && (e2 = "" + g2);
  a2.key !== void 0 && (e2 = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m.call(a2, b2) && !p.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      d2[b2] === void 0 && (d2[b2] = a2[b2]);
  return { $$typeof: k, type: c2, key: e2, ref: h2, props: d2, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
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
function memoize$1(fn2) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0)
      cache2[arg] = fn2(arg);
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
  var name = murmur2(styles2) + identifierName;
  return {
    name,
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
function useGuaranteedMemo(fn2, deps) {
  const ref = (0, react_1$4.useRef)();
  if (!ref.current || deps.length !== ref.current.prevDeps.length || ref.current.prevDeps.map((v2, i2) => v2 === deps[i2]).indexOf(false) >= 0) {
    ref.current = {
      "v": fn2(),
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
function hash(value, length2) {
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
function substr(value, begin, end) {
  return value.slice(begin, end);
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
function slice(begin, end) {
  return substr(characters, begin, end);
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
  return trim(slice(position$1 - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
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
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
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
  return "/*" + slice(index, position$1 - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position$1);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
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
  var reference = rule;
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
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
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
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function prefix(value, length2) {
  switch (hash(value, length2)) {
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
  return slice(begin, position$1);
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
var makeStyles$1 = {};
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
Object.defineProperty(makeStyles$1, "__esModule", { value: true });
makeStyles$1.createMakeStyles = void 0;
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
    const name = typeof nameOrWrappedName !== "object" ? nameOrWrappedName : Object.keys(nameOrWrappedName)[0];
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
              return refClassesCache[propertyKey] = `${cache2.key}-${outerCounter}${name !== void 0 ? `-${name}` : ""}-${propertyKey}-ref`;
            }
          });
          const cssObjectByRuleName = getCssObjectByRuleName(theme, params3, refClasses || {});
          const classes2 = (0, Object_fromEntries_1.objectFromEntries)((0, objectKeys_1.objectKeys)(cssObjectByRuleName).map((ruleName) => {
            const cssObject = cssObjectByRuleName[ruleName];
            if (!cssObject.label) {
              cssObject.label = `${name !== void 0 ? `${name}-` : ""}${ruleName}`;
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
            cssObjectByRuleNameOrGetCssObjectByRuleName2 = name !== void 0 ? (_b = (_a = theme.components) === null || _a === void 0 ? void 0 : _a[name]) === null || _b === void 0 ? void 0 : _b.styleOverrides : void 0;
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
makeStyles$1.createMakeStyles = createMakeStyles;
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
const makeStyles_1 = makeStyles$1;
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
    const name = (() => {
      const {
        name: name2
      } = Component_;
      return typeof name2 === "string" ? name2 : void 0;
    })();
    const useStyles2 = makeStyles2((params2 === null || params2 === void 0 ? void 0 : params2.name) !== void 0 ? params2 : {
      name
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
    if (name !== void 0) {
      Object.defineProperty(Out, "name", {
        "value": `${name}WithStyles`
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
var hasOwnProperty = {}.hasOwnProperty;
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
var useTheme$4 = function useTheme() {
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
var ThemeProvider$2 = function ThemeProvider(props) {
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
var useInsertionEffect$2 = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : function useInsertionEffect(create) {
  create();
};
function useInsertionEffectMaybe$1(create) {
  useInsertionEffect$2(create);
}
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion$2 = function Insertion(_ref) {
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
    if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && true) {
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
  if (props == null || !hasOwnProperty.call(props, "css")) {
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
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
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
var Insertion$1 = function Insertion2(_ref) {
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
  const makeStyles_12 = makeStyles$1;
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
var useInsertionEffect2 = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : function useInsertionEffect3(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect2(create);
}
var Insertion3 = function Insertion4(_ref) {
  var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  useInsertionEffectMaybe(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var createStyled$1 = function createStyled(tag, options) {
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
      return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion3, {
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
      return createStyled(nextTag, _extends({}, options, nextOptions, {
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
function isEmpty$2(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$1(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme2 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty$2(themeInput) ? defaultTheme2 : themeInput) : styles2;
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
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}
function ownerWindow(node2) {
  const doc = ownerDocument(node2);
  return doc.defaultView || window;
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
function useEventCallback(fn2) {
  const ref = react.exports.useRef(fn2);
  useEnhancedEffect$1(() => {
    ref.current = fn2;
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
  const fn2 = (props) => {
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
  fn2.propTypes = {};
  fn2.filterProps = [prop];
  return fn2;
}
function compose(...styles2) {
  const handlers = styles2.reduce((acc, style2) => {
    style2.filterProps.forEach((prop) => {
      acc[prop] = style2;
    });
    return acc;
  }, {});
  const fn2 = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn2.propTypes = {};
  fn2.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
  return fn2;
}
function memoize(fn2) {
  const cache2 = {};
  return (arg) => {
    if (cache2[arg] === void 0) {
      cache2[arg] = fn2(arg);
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
const order = style$1({
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
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
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
const top = style$1({
  prop: "top"
});
const right = style$1({
  prop: "right"
});
const bottom = style$1({
  prop: "bottom"
});
const left = style$1({
  prop: "left"
});
var positions = compose(position, zIndex$2, top, right, bottom, left);
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
const _excluded$l = ["sx"];
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
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
const _excluded$k = ["values", "unit", "step"];
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
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded$k);
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
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
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
const _excluded$j = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded$j);
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
const _excluded$i = ["variant"];
function isEmpty$1(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty$1(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$1(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}
const _excluded$h = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], _excluded2 = ["theme"], _excluded3 = ["theme"];
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return null;
};
const getVariantStyles = (name, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }
  const variantsStyles = {};
  variants.forEach((definition) => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};
const variantsResolver = (props, styles2, theme, name) => {
  var _theme$components, _theme$components$nam;
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
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
function createStyled2(input = {}) {
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
      overridesResolver
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded$h);
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
          } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded2);
          return stylesArg(_extends({
            theme: isEmpty(themeInput) ? defaultTheme2 : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty(props.theme) ? defaultTheme2 : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(props) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty(props.theme) ? defaultTheme2 : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty(props.theme) ? defaultTheme2 : props.theme;
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
          } = _ref2, other = _objectWithoutPropertiesLoose(_ref2, _excluded3);
          return styleArg(_extends({
            theme: isEmpty(themeInput) ? defaultTheme2 : themeInput
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
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}
function useThemeProps$1({
  props,
  name,
  defaultTheme: defaultTheme2
}) {
  const theme = useTheme$1(defaultTheme2);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(min, value), max);
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
  value = clamp(value);
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
  coefficient = clamp(coefficient);
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
  coefficient = clamp(coefficient);
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
function ThemeProvider2(props) {
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
const _excluded$g = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];
const useUtilityClasses$9 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
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
  const classes = useUtilityClasses$9(ownerState);
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
const _excluded$f = ["mode", "contrastThreshold", "tonalOffset"];
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
  } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded$f);
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
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
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
const _excluded$e = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
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
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  const coef = fontSize2 / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    lineHeight: lineHeight2
  }, fontFamily2 === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing2 / size)}em`
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
const _excluded$d = ["duration", "easing", "delay"];
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
    _objectWithoutPropertiesLoose(options, _excluded$d);
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
const _excluded$c = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded$c);
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
const defaultTheme = createTheme();
var defaultTheme$1 = defaultTheme;
function useTheme2() {
  const theme = useTheme$1(defaultTheme$1);
  return theme;
}
function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme$1
  });
}
const rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled2({
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});
var styled$1 = styled;
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
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps));
  };
  return Transition2;
}(React$1.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
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
var defaultProps = {
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
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
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
TransitionGroup.defaultProps = defaultProps;
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
const _excluded$b = ["className", "component", "elevation", "square", "variant"];
const getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
const useUtilityClasses$8 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses$8(ownerState);
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
const _excluded$a = ["center", "classes", "className"];
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
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
  const start = react.exports.useCallback((event = {}, options = {}, cb2) => {
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
    start({}, {
      pulsate: true
    });
  }, [start]);
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
    start,
    stop
  }), [pulsate, start, stop]);
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
const _excluded$9 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$7 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
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
  const classes = useUtilityClasses$7(ownerState);
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
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const _excluded$8 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$6 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
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
  const classes = useUtilityClasses$6(ownerState);
  return /* @__PURE__ */ jsx$1(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, other));
});
var Typography$1 = Typography;
function GlobalStyles(props) {
  return /* @__PURE__ */ jsx$1(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$1
  }));
}
const _excluded$7 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles$1 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ react.exports.forwardRef(function Fade2(props, ref) {
  const theme = useTheme2();
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
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
        }, styles$1[state], style2, children.props.style),
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
const _excluded$6 = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];
const useUtilityClasses$5 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$5(ownerState);
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
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "contained", "containedInherit", "containedPrimary", "containedSecondary", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses$1 = buttonClasses;
const ButtonGroupContext = /* @__PURE__ */ react.exports.createContext({});
var ButtonGroupContext$1 = ButtonGroupContext;
const _excluded$5 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
const useUtilityClasses$4 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
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
  const classes = useUtilityClasses$4(ownerState);
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
const styles = (theme, enableColorScheme = false) => {
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
      styles: (theme) => styles(theme, enableColorScheme)
    }), children]
  });
}
const _excluded$4 = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];
const extendUtilityClasses = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
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
  const classes = extendUtilityClasses(ownerState);
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
const _excluded$3 = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
const DialogBackdrop = styled$1(Backdrop$1, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles2) => styles2.backdrop
})({
  zIndex: -1
});
const useUtilityClasses$3 = (ownerState) => {
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
  const theme = useTheme2();
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const ownerState = _extends({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth: maxWidth2,
    scroll
  });
  const classes = useUtilityClasses$3(ownerState);
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
const _excluded$2 = ["className", "disableSpacing"];
const useUtilityClasses$2 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = _extends({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses$2(ownerState);
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
const _excluded$1 = ["className", "dividers"];
const useUtilityClasses$1 = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = _extends({}, props, {
    dividers
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsx$1(DialogContentRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other));
});
var DialogContent$1 = DialogContent;
const _excluded = ["className", "id"];
const useUtilityClasses = (ownerState) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
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
  makeStyles,
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
const useStyles = makeStyles()({
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
  } = useStyles();
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
  } = useStyles();
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
  } = useStyles();
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
  } = useStyles();
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
const ConfigurationModal = React$1.lazy(() => __vitePreload(() => import("./configurationModal.js"), true ? ["configurationModal.js","index.js"] : void 0));
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
      }), /* @__PURE__ */ jsxs(ThemeProvider2, {
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
var pixelPlanetOverlay_user = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
export { selectCurrentStateAsConfiguration as $, useTheme$2 as A, ButtonBase$1 as B, ClassNameGenerator$1 as C, formatMuiErrorMessage as D, createTheme as E, rootShouldForwardProp as F, GlobalStyles as G, deepmerge as H, useTheme2 as I, Transition$1 as J, reflow as K, getTransitionProps as L, getScrollbarSize as M, Modal$1 as N, Paper$1 as O, Portal$1 as P, slotShouldForwardProp as Q, lighten as R, darken as S, Typography$1 as T, Fragment as U, makeStyles as V, useAppDispatch as W, useAppSelector as X, selectSavedConfigurations as Y, selectInputUrl as Z, _objectWithoutPropertiesLoose as _, _extends as a, setViewCoordinates as a0, usePageReduxStoreDispatch as a1, logger as a2, saveConfiguration as a3, overlaySlice as a4, setInputImageAction as a5, getAugmentedNamespace as a6, require$$2$1 as a7, React$1 as a8, useAppTheme as a9, Dialog$1 as aa, DialogTitle$1 as ab, DialogContent$1 as ac, DialogActions$1 as ad, Button$1 as ae, selectIsModificationsAvailable as af, selectFileName as ag, selectShouldShowPlacementConfiguration as ah, selectPlacementXOffset as ai, selectPlacementYOffset as aj, selectPlacementTransparency as ak, selectPlacementIsFollowMouseActive as al, selectPlacementAutoSelectColor as am, selectModifierShouldConvertColors as an, selectIsOutputImageProcessing as ao, selectModifierImageBrightness as ap, selectInputImageLoadingStatus as aq, selectModifierSmolPixels as ar, selectHoverPixel as as, viewPortEvents as at, clearInputImageAction as au, tssReact as av, selectIsOverlayEnabled as aw, pixelPlanetOverlay_user as ax, useForkRef as b, clsx as c, defaultStyleFunctionSx as d, extendSxProp as e, useEnhancedEffect$1 as f, generateUtilityClass as g, generateUtilityClasses as h, isHostComponent as i, jsx$1 as j, jsxs as k, useIsFocusVisible as l, useEventCallback as m, composeClasses as n, ownerDocument as o, ownerWindow as p, styled$1 as q, react as r, styled$2 as s, capitalize as t, useTheme$1 as u, useThemeProps as v, createChainedFunction as w, setRef as x, useId as y, alpha as z };
