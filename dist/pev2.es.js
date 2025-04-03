var $O = Object.defineProperty;
var HO = (t, e, n) => e in t ? $O(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Kt = (t, e, n) => HO(t, typeof e != "symbol" ? e + "" : e, n);
import { h as di, createElementBlock as D, openBlock as N, normalizeStyle as Ke, renderSlot as Hs, getCurrentInstance as FO, ref as jt, shallowRef as WO, onMounted as _s, onUnmounted as VO, isRef as Ni, isReactive as Yh, watch as Ln, isVNode as XO, createApp as Pl, defineComponent as $e, nextTick as Ko, unref as d, reactive as Kn, computed as St, createElementVNode as S, createTextVNode as m, withDirectives as ve, normalizeClass as It, createVNode as Rt, createCommentVNode as Q, Fragment as Ht, renderList as Pe, toDisplayString as st, onBeforeMount as Ts, inject as Ce, withModifiers as Be, createBlock as Ue, provide as Sr, createStaticVNode as GO, withCtx as Ye, onBeforeUnmount as zO } from "vue";
var ul = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ko = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var YO = ko.exports, Kh;
function KO() {
  return Kh || (Kh = 1, function(t, e) {
    (function() {
      var n, i = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", f = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", g = 500, p = "__lodash_placeholder__", _ = 1, R = 2, x = 4, P = 1, O = 2, W = 1, b = 2, w = 4, Z = 8, v = 16, G = 32, L = 64, B = 128, U = 256, y = 512, tt = 30, F = "...", ht = 800, M = 16, Y = 1, lt = 2, V = 3, $ = 1 / 0, ct = 9007199254740991, yt = 17976931348623157e292, mt = NaN, at = 4294967295, dt = at - 1, ut = at >>> 1, Tt = [
        ["ary", B],
        ["bind", W],
        ["bindKey", b],
        ["curry", Z],
        ["curryRight", v],
        ["flip", y],
        ["partial", G],
        ["partialRight", L],
        ["rearg", U]
      ], q = "[object Arguments]", T = "[object Array]", Et = "[object AsyncFunction]", bt = "[object Boolean]", Bt = "[object Date]", Ft = "[object DOMException]", xt = "[object Error]", ue = "[object Function]", He = "[object GeneratorFunction]", Wt = "[object Map]", Mt = "[object Number]", fe = "[object Null]", ne = "[object Object]", nt = "[object Promise]", Dt = "[object Proxy]", ee = "[object RegExp]", oe = "[object Set]", we = "[object String]", Ne = "[object Symbol]", Qe = "[object Undefined]", ln = "[object WeakMap]", un = "[object WeakSet]", nn = "[object ArrayBuffer]", sn = "[object DataView]", Jr = "[object Float32Array]", Qr = "[object Float64Array]", Zr = "[object Int8Array]", ti = "[object Int16Array]", ei = "[object Int32Array]", k = "[object Uint8Array]", rt = "[object Uint8ClampedArray]", vt = "[object Uint16Array]", kt = "[object Uint32Array]", Nt = /\b__p \+= '';/g, _e = /\b(__p \+=) '' \+/g, Ie = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fn = /&(?:amp|lt|gt|quot|#39);/g, pr = /[&<>"']/g, Xe = RegExp(fn.source), X = RegExp(pr.source), it = /<%-([\s\S]+?)%>/g, At = /<%([\s\S]+?)%>/g, qt = /<%=([\s\S]+?)%>/g, Re = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Se = /^\w*$/, $t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wt = /[\\^$.*+?()[\]{}|]/g, re = RegExp(wt.source), je = /^\s+/, qe = /\s/, $i = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fo = /\{\n\/\* \[wrapped with (.+)\] \*/, co = /,? & /, mu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, po = /[()=,{}\[\]\/\s]/, _u = /\\(\\)?/g, Tu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ea = /\w*$/, ga = /^[-+]0x[0-9a-f]+$/i, Ss = /^0b[01]+$/i, Au = /^\[object .+?Constructor\]$/, Su = /^0o[0-7]+$/i, yu = /^(?:0|[1-9]\d*)$/, xr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Hi = /($^)/, va = /['\n\r\u2028\u2029\\]/g, ys = "\\ud800-\\udfff", Ou = "\\u0300-\\u036f", Ru = "\\ufe20-\\ufe2f", Os = "\\u20d0-\\u20ff", ma = Ou + Ru + Os, Ot = "\\u2700-\\u27bf", zt = "a-z\\xdf-\\xf6\\xf8-\\xff", Ee = "\\xac\\xb1\\xd7\\xf7", Me = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ze = "\\u2000-\\u206f", Hn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hr = "A-Z\\xc0-\\xd6\\xd8-\\xde", Fi = "\\ufe0e\\ufe0f", _n = Ee + Me + Ze + Hn, Cn = "['’]", _a = "[" + ys + "]", ho = "[" + _n + "]", Wi = "[" + ma + "]", Ta = "\\d+", bu = "[" + Ot + "]", Aa = "[" + zt + "]", Sa = "[^" + ys + _n + Ta + Ot + zt + hr + "]", Ti = "\\ud83c[\\udffb-\\udfff]", ya = "(?:" + Wi + "|" + Ti + ")", Fn = "[^" + ys + "]", Eo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qt = "[" + hr + "]", go = "\\u200d", rn = "(?:" + Aa + "|" + Sa + ")", De = "(?:" + Qt + "|" + Sa + ")", Xi = "(?:" + Cn + "(?:d|ll|m|re|s|t|ve))?", wr = "(?:" + Cn + "(?:D|LL|M|RE|S|T|VE))?", Rs = ya + "?", bs = "[" + Fi + "]?", Lt = "(?:" + go + "(?:" + [Fn, Eo, Vi].join("|") + ")" + bs + Rs + ")*", Xt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ce = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ye = bs + Rs + Lt, cn = "(?:" + [bu, Eo, Vi].join("|") + ")" + ye, Er = "(?:" + [Fn + Wi + "?", Wi, Eo, Vi, _a].join("|") + ")", Iu = RegExp(Cn, "g"), Lu = RegExp(Wi, "g"), Cu = RegExp(Ti + "(?=" + Ti + ")|" + Er + ye, "g"), q0 = RegExp([
        Qt + "?" + Aa + "+" + Xi + "(?=" + [ho, Qt, "$"].join("|") + ")",
        De + "+" + wr + "(?=" + [ho, Qt + rn, "$"].join("|") + ")",
        Qt + "?" + rn + "+" + Xi,
        Qt + "+" + wr,
        ce,
        Xt,
        Ta,
        cn
      ].join("|"), "g"), J0 = RegExp("[" + go + ys + ma + Fi + "]"), Q0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Z0 = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], t1 = -1, We = {};
      We[Jr] = We[Qr] = We[Zr] = We[ti] = We[ei] = We[k] = We[rt] = We[vt] = We[kt] = !0, We[q] = We[T] = We[nn] = We[bt] = We[sn] = We[Bt] = We[xt] = We[ue] = We[Wt] = We[Mt] = We[ne] = We[ee] = We[oe] = We[we] = We[ln] = !1;
      var Fe = {};
      Fe[q] = Fe[T] = Fe[nn] = Fe[sn] = Fe[bt] = Fe[Bt] = Fe[Jr] = Fe[Qr] = Fe[Zr] = Fe[ti] = Fe[ei] = Fe[Wt] = Fe[Mt] = Fe[ne] = Fe[ee] = Fe[oe] = Fe[we] = Fe[Ne] = Fe[k] = Fe[rt] = Fe[vt] = Fe[kt] = !0, Fe[xt] = Fe[ue] = Fe[ln] = !1;
      var e1 = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, n1 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, r1 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, i1 = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, s1 = parseFloat, o1 = parseInt, Hd = typeof ul == "object" && ul && ul.Object === Object && ul, a1 = typeof self == "object" && self && self.Object === Object && self, En = Hd || a1 || Function("return this")(), Nu = e && !e.nodeType && e, Gi = Nu && !0 && t && !t.nodeType && t, Fd = Gi && Gi.exports === Nu, xu = Fd && Hd.process, Qn = function() {
        try {
          var j = Gi && Gi.require && Gi.require("util").types;
          return j || xu && xu.binding && xu.binding("util");
        } catch {
        }
      }(), Wd = Qn && Qn.isArrayBuffer, Vd = Qn && Qn.isDate, Xd = Qn && Qn.isMap, Gd = Qn && Qn.isRegExp, zd = Qn && Qn.isSet, Yd = Qn && Qn.isTypedArray;
      function Wn(j, ot, et) {
        switch (et.length) {
          case 0:
            return j.call(ot);
          case 1:
            return j.call(ot, et[0]);
          case 2:
            return j.call(ot, et[0], et[1]);
          case 3:
            return j.call(ot, et[0], et[1], et[2]);
        }
        return j.apply(ot, et);
      }
      function l1(j, ot, et, Pt) {
        for (var ae = -1, be = j == null ? 0 : j.length; ++ae < be; ) {
          var on = j[ae];
          ot(Pt, on, et(on), j);
        }
        return Pt;
      }
      function Zn(j, ot) {
        for (var et = -1, Pt = j == null ? 0 : j.length; ++et < Pt && ot(j[et], et, j) !== !1; )
          ;
        return j;
      }
      function u1(j, ot) {
        for (var et = j == null ? 0 : j.length; et-- && ot(j[et], et, j) !== !1; )
          ;
        return j;
      }
      function Kd(j, ot) {
        for (var et = -1, Pt = j == null ? 0 : j.length; ++et < Pt; )
          if (!ot(j[et], et, j))
            return !1;
        return !0;
      }
      function Ai(j, ot) {
        for (var et = -1, Pt = j == null ? 0 : j.length, ae = 0, be = []; ++et < Pt; ) {
          var on = j[et];
          ot(on, et, j) && (be[ae++] = on);
        }
        return be;
      }
      function Oa(j, ot) {
        var et = j == null ? 0 : j.length;
        return !!et && Is(j, ot, 0) > -1;
      }
      function wu(j, ot, et) {
        for (var Pt = -1, ae = j == null ? 0 : j.length; ++Pt < ae; )
          if (et(ot, j[Pt]))
            return !0;
        return !1;
      }
      function Ge(j, ot) {
        for (var et = -1, Pt = j == null ? 0 : j.length, ae = Array(Pt); ++et < Pt; )
          ae[et] = ot(j[et], et, j);
        return ae;
      }
      function Si(j, ot) {
        for (var et = -1, Pt = ot.length, ae = j.length; ++et < Pt; )
          j[ae + et] = ot[et];
        return j;
      }
      function Mu(j, ot, et, Pt) {
        var ae = -1, be = j == null ? 0 : j.length;
        for (Pt && be && (et = j[++ae]); ++ae < be; )
          et = ot(et, j[ae], ae, j);
        return et;
      }
      function f1(j, ot, et, Pt) {
        var ae = j == null ? 0 : j.length;
        for (Pt && ae && (et = j[--ae]); ae--; )
          et = ot(et, j[ae], ae, j);
        return et;
      }
      function Du(j, ot) {
        for (var et = -1, Pt = j == null ? 0 : j.length; ++et < Pt; )
          if (ot(j[et], et, j))
            return !0;
        return !1;
      }
      var c1 = Pu("length");
      function d1(j) {
        return j.split("");
      }
      function p1(j) {
        return j.match(mu) || [];
      }
      function jd(j, ot, et) {
        var Pt;
        return et(j, function(ae, be, on) {
          if (ot(ae, be, on))
            return Pt = be, !1;
        }), Pt;
      }
      function Ra(j, ot, et, Pt) {
        for (var ae = j.length, be = et + (Pt ? 1 : -1); Pt ? be-- : ++be < ae; )
          if (ot(j[be], be, j))
            return be;
        return -1;
      }
      function Is(j, ot, et) {
        return ot === ot ? R1(j, ot, et) : Ra(j, qd, et);
      }
      function h1(j, ot, et, Pt) {
        for (var ae = et - 1, be = j.length; ++ae < be; )
          if (Pt(j[ae], ot))
            return ae;
        return -1;
      }
      function qd(j) {
        return j !== j;
      }
      function Jd(j, ot) {
        var et = j == null ? 0 : j.length;
        return et ? ku(j, ot) / et : mt;
      }
      function Pu(j) {
        return function(ot) {
          return ot == null ? n : ot[j];
        };
      }
      function Uu(j) {
        return function(ot) {
          return j == null ? n : j[ot];
        };
      }
      function Qd(j, ot, et, Pt, ae) {
        return ae(j, function(be, on, ke) {
          et = Pt ? (Pt = !1, be) : ot(et, be, on, ke);
        }), et;
      }
      function E1(j, ot) {
        var et = j.length;
        for (j.sort(ot); et--; )
          j[et] = j[et].value;
        return j;
      }
      function ku(j, ot) {
        for (var et, Pt = -1, ae = j.length; ++Pt < ae; ) {
          var be = ot(j[Pt]);
          be !== n && (et = et === n ? be : et + be);
        }
        return et;
      }
      function Bu(j, ot) {
        for (var et = -1, Pt = Array(j); ++et < j; )
          Pt[et] = ot(et);
        return Pt;
      }
      function g1(j, ot) {
        return Ge(ot, function(et) {
          return [et, j[et]];
        });
      }
      function Zd(j) {
        return j && j.slice(0, rp(j) + 1).replace(je, "");
      }
      function Vn(j) {
        return function(ot) {
          return j(ot);
        };
      }
      function $u(j, ot) {
        return Ge(ot, function(et) {
          return j[et];
        });
      }
      function vo(j, ot) {
        return j.has(ot);
      }
      function tp(j, ot) {
        for (var et = -1, Pt = j.length; ++et < Pt && Is(ot, j[et], 0) > -1; )
          ;
        return et;
      }
      function ep(j, ot) {
        for (var et = j.length; et-- && Is(ot, j[et], 0) > -1; )
          ;
        return et;
      }
      function v1(j, ot) {
        for (var et = j.length, Pt = 0; et--; )
          j[et] === ot && ++Pt;
        return Pt;
      }
      var m1 = Uu(e1), _1 = Uu(n1);
      function T1(j) {
        return "\\" + i1[j];
      }
      function A1(j, ot) {
        return j == null ? n : j[ot];
      }
      function Ls(j) {
        return J0.test(j);
      }
      function S1(j) {
        return Q0.test(j);
      }
      function y1(j) {
        for (var ot, et = []; !(ot = j.next()).done; )
          et.push(ot.value);
        return et;
      }
      function Hu(j) {
        var ot = -1, et = Array(j.size);
        return j.forEach(function(Pt, ae) {
          et[++ot] = [ae, Pt];
        }), et;
      }
      function np(j, ot) {
        return function(et) {
          return j(ot(et));
        };
      }
      function yi(j, ot) {
        for (var et = -1, Pt = j.length, ae = 0, be = []; ++et < Pt; ) {
          var on = j[et];
          (on === ot || on === p) && (j[et] = p, be[ae++] = et);
        }
        return be;
      }
      function ba(j) {
        var ot = -1, et = Array(j.size);
        return j.forEach(function(Pt) {
          et[++ot] = Pt;
        }), et;
      }
      function O1(j) {
        var ot = -1, et = Array(j.size);
        return j.forEach(function(Pt) {
          et[++ot] = [Pt, Pt];
        }), et;
      }
      function R1(j, ot, et) {
        for (var Pt = et - 1, ae = j.length; ++Pt < ae; )
          if (j[Pt] === ot)
            return Pt;
        return -1;
      }
      function b1(j, ot, et) {
        for (var Pt = et + 1; Pt--; )
          if (j[Pt] === ot)
            return Pt;
        return Pt;
      }
      function Cs(j) {
        return Ls(j) ? L1(j) : c1(j);
      }
      function gr(j) {
        return Ls(j) ? C1(j) : d1(j);
      }
      function rp(j) {
        for (var ot = j.length; ot-- && qe.test(j.charAt(ot)); )
          ;
        return ot;
      }
      var I1 = Uu(r1);
      function L1(j) {
        for (var ot = Cu.lastIndex = 0; Cu.test(j); )
          ++ot;
        return ot;
      }
      function C1(j) {
        return j.match(Cu) || [];
      }
      function N1(j) {
        return j.match(q0) || [];
      }
      var x1 = function j(ot) {
        ot = ot == null ? En : Ns.defaults(En.Object(), ot, Ns.pick(En, Z0));
        var et = ot.Array, Pt = ot.Date, ae = ot.Error, be = ot.Function, on = ot.Math, ke = ot.Object, Fu = ot.RegExp, w1 = ot.String, tr = ot.TypeError, Ia = et.prototype, M1 = be.prototype, xs = ke.prototype, La = ot["__core-js_shared__"], Ca = M1.toString, xe = xs.hasOwnProperty, D1 = 0, ip = function() {
          var r = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
          return r ? "Symbol(src)_1." + r : "";
        }(), Na = xs.toString, P1 = Ca.call(ke), U1 = En._, k1 = Fu(
          "^" + Ca.call(xe).replace(wt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), xa = Fd ? ot.Buffer : n, Oi = ot.Symbol, wa = ot.Uint8Array, sp = xa ? xa.allocUnsafe : n, Ma = np(ke.getPrototypeOf, ke), op = ke.create, ap = xs.propertyIsEnumerable, Da = Ia.splice, lp = Oi ? Oi.isConcatSpreadable : n, mo = Oi ? Oi.iterator : n, zi = Oi ? Oi.toStringTag : n, Pa = function() {
          try {
            var r = Ji(ke, "defineProperty");
            return r({}, "", {}), r;
          } catch {
          }
        }(), B1 = ot.clearTimeout !== En.clearTimeout && ot.clearTimeout, $1 = Pt && Pt.now !== En.Date.now && Pt.now, H1 = ot.setTimeout !== En.setTimeout && ot.setTimeout, Ua = on.ceil, ka = on.floor, Wu = ke.getOwnPropertySymbols, F1 = xa ? xa.isBuffer : n, up = ot.isFinite, W1 = Ia.join, V1 = np(ke.keys, ke), an = on.max, Tn = on.min, X1 = Pt.now, G1 = ot.parseInt, fp = on.random, z1 = Ia.reverse, Vu = Ji(ot, "DataView"), _o = Ji(ot, "Map"), Xu = Ji(ot, "Promise"), ws = Ji(ot, "Set"), To = Ji(ot, "WeakMap"), Ao = Ji(ke, "create"), Ba = To && new To(), Ms = {}, Y1 = Qi(Vu), K1 = Qi(_o), j1 = Qi(Xu), q1 = Qi(ws), J1 = Qi(To), $a = Oi ? Oi.prototype : n, So = $a ? $a.valueOf : n, cp = $a ? $a.toString : n;
        function I(r) {
          if (Je(r) && !le(r) && !(r instanceof Te)) {
            if (r instanceof er)
              return r;
            if (xe.call(r, "__wrapped__"))
              return dh(r);
          }
          return new er(r);
        }
        var Ds = /* @__PURE__ */ function() {
          function r() {
          }
          return function(s) {
            if (!ze(s))
              return {};
            if (op)
              return op(s);
            r.prototype = s;
            var u = new r();
            return r.prototype = n, u;
          };
        }();
        function Ha() {
        }
        function er(r, s) {
          this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
        }
        I.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: it,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: At,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: qt,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: I
          }
        }, I.prototype = Ha.prototype, I.prototype.constructor = I, er.prototype = Ds(Ha.prototype), er.prototype.constructor = er;
        function Te(r) {
          this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = at, this.__views__ = [];
        }
        function Q1() {
          var r = new Te(this.__wrapped__);
          return r.__actions__ = Nn(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Nn(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Nn(this.__views__), r;
        }
        function Z1() {
          if (this.__filtered__) {
            var r = new Te(this);
            r.__dir__ = -1, r.__filtered__ = !0;
          } else
            r = this.clone(), r.__dir__ *= -1;
          return r;
        }
        function t_() {
          var r = this.__wrapped__.value(), s = this.__dir__, u = le(r), E = s < 0, A = u ? r.length : 0, C = dT(0, A, this.__views__), H = C.start, z = C.end, J = z - H, ft = E ? z : H - 1, pt = this.__iteratees__, gt = pt.length, Ct = 0, Vt = Tn(J, this.__takeCount__);
          if (!u || !E && A == J && Vt == J)
            return Pp(r, this.__actions__);
          var Zt = [];
          t:
            for (; J-- && Ct < Vt; ) {
              ft += s;
              for (var pe = -1, te = r[ft]; ++pe < gt; ) {
                var ge = pt[pe], Ae = ge.iteratee, zn = ge.type, In = Ae(te);
                if (zn == lt)
                  te = In;
                else if (!In) {
                  if (zn == Y)
                    continue t;
                  break t;
                }
              }
              Zt[Ct++] = te;
            }
          return Zt;
        }
        Te.prototype = Ds(Ha.prototype), Te.prototype.constructor = Te;
        function Yi(r) {
          var s = -1, u = r == null ? 0 : r.length;
          for (this.clear(); ++s < u; ) {
            var E = r[s];
            this.set(E[0], E[1]);
          }
        }
        function e_() {
          this.__data__ = Ao ? Ao(null) : {}, this.size = 0;
        }
        function n_(r) {
          var s = this.has(r) && delete this.__data__[r];
          return this.size -= s ? 1 : 0, s;
        }
        function r_(r) {
          var s = this.__data__;
          if (Ao) {
            var u = s[r];
            return u === c ? n : u;
          }
          return xe.call(s, r) ? s[r] : n;
        }
        function i_(r) {
          var s = this.__data__;
          return Ao ? s[r] !== n : xe.call(s, r);
        }
        function s_(r, s) {
          var u = this.__data__;
          return this.size += this.has(r) ? 0 : 1, u[r] = Ao && s === n ? c : s, this;
        }
        Yi.prototype.clear = e_, Yi.prototype.delete = n_, Yi.prototype.get = r_, Yi.prototype.has = i_, Yi.prototype.set = s_;
        function ni(r) {
          var s = -1, u = r == null ? 0 : r.length;
          for (this.clear(); ++s < u; ) {
            var E = r[s];
            this.set(E[0], E[1]);
          }
        }
        function o_() {
          this.__data__ = [], this.size = 0;
        }
        function a_(r) {
          var s = this.__data__, u = Fa(s, r);
          if (u < 0)
            return !1;
          var E = s.length - 1;
          return u == E ? s.pop() : Da.call(s, u, 1), --this.size, !0;
        }
        function l_(r) {
          var s = this.__data__, u = Fa(s, r);
          return u < 0 ? n : s[u][1];
        }
        function u_(r) {
          return Fa(this.__data__, r) > -1;
        }
        function f_(r, s) {
          var u = this.__data__, E = Fa(u, r);
          return E < 0 ? (++this.size, u.push([r, s])) : u[E][1] = s, this;
        }
        ni.prototype.clear = o_, ni.prototype.delete = a_, ni.prototype.get = l_, ni.prototype.has = u_, ni.prototype.set = f_;
        function ri(r) {
          var s = -1, u = r == null ? 0 : r.length;
          for (this.clear(); ++s < u; ) {
            var E = r[s];
            this.set(E[0], E[1]);
          }
        }
        function c_() {
          this.size = 0, this.__data__ = {
            hash: new Yi(),
            map: new (_o || ni)(),
            string: new Yi()
          };
        }
        function d_(r) {
          var s = Za(this, r).delete(r);
          return this.size -= s ? 1 : 0, s;
        }
        function p_(r) {
          return Za(this, r).get(r);
        }
        function h_(r) {
          return Za(this, r).has(r);
        }
        function E_(r, s) {
          var u = Za(this, r), E = u.size;
          return u.set(r, s), this.size += u.size == E ? 0 : 1, this;
        }
        ri.prototype.clear = c_, ri.prototype.delete = d_, ri.prototype.get = p_, ri.prototype.has = h_, ri.prototype.set = E_;
        function Ki(r) {
          var s = -1, u = r == null ? 0 : r.length;
          for (this.__data__ = new ri(); ++s < u; )
            this.add(r[s]);
        }
        function g_(r) {
          return this.__data__.set(r, c), this;
        }
        function v_(r) {
          return this.__data__.has(r);
        }
        Ki.prototype.add = Ki.prototype.push = g_, Ki.prototype.has = v_;
        function vr(r) {
          var s = this.__data__ = new ni(r);
          this.size = s.size;
        }
        function m_() {
          this.__data__ = new ni(), this.size = 0;
        }
        function __(r) {
          var s = this.__data__, u = s.delete(r);
          return this.size = s.size, u;
        }
        function T_(r) {
          return this.__data__.get(r);
        }
        function A_(r) {
          return this.__data__.has(r);
        }
        function S_(r, s) {
          var u = this.__data__;
          if (u instanceof ni) {
            var E = u.__data__;
            if (!_o || E.length < o - 1)
              return E.push([r, s]), this.size = ++u.size, this;
            u = this.__data__ = new ri(E);
          }
          return u.set(r, s), this.size = u.size, this;
        }
        vr.prototype.clear = m_, vr.prototype.delete = __, vr.prototype.get = T_, vr.prototype.has = A_, vr.prototype.set = S_;
        function dp(r, s) {
          var u = le(r), E = !u && Zi(r), A = !u && !E && Ci(r), C = !u && !E && !A && Bs(r), H = u || E || A || C, z = H ? Bu(r.length, w1) : [], J = z.length;
          for (var ft in r)
            (s || xe.call(r, ft)) && !(H && // Safari 9 has enumerable `arguments.length` in strict mode.
            (ft == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            A && (ft == "offset" || ft == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            C && (ft == "buffer" || ft == "byteLength" || ft == "byteOffset") || // Skip index properties.
            ai(ft, J))) && z.push(ft);
          return z;
        }
        function pp(r) {
          var s = r.length;
          return s ? r[ef(0, s - 1)] : n;
        }
        function y_(r, s) {
          return tl(Nn(r), ji(s, 0, r.length));
        }
        function O_(r) {
          return tl(Nn(r));
        }
        function Gu(r, s, u) {
          (u !== n && !mr(r[s], u) || u === n && !(s in r)) && ii(r, s, u);
        }
        function yo(r, s, u) {
          var E = r[s];
          (!(xe.call(r, s) && mr(E, u)) || u === n && !(s in r)) && ii(r, s, u);
        }
        function Fa(r, s) {
          for (var u = r.length; u--; )
            if (mr(r[u][0], s))
              return u;
          return -1;
        }
        function R_(r, s, u, E) {
          return Ri(r, function(A, C, H) {
            s(E, A, u(A), H);
          }), E;
        }
        function hp(r, s) {
          return r && Dr(s, dn(s), r);
        }
        function b_(r, s) {
          return r && Dr(s, wn(s), r);
        }
        function ii(r, s, u) {
          s == "__proto__" && Pa ? Pa(r, s, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          }) : r[s] = u;
        }
        function zu(r, s) {
          for (var u = -1, E = s.length, A = et(E), C = r == null; ++u < E; )
            A[u] = C ? n : If(r, s[u]);
          return A;
        }
        function ji(r, s, u) {
          return r === r && (u !== n && (r = r <= u ? r : u), s !== n && (r = r >= s ? r : s)), r;
        }
        function nr(r, s, u, E, A, C) {
          var H, z = s & _, J = s & R, ft = s & x;
          if (u && (H = A ? u(r, E, A, C) : u(r)), H !== n)
            return H;
          if (!ze(r))
            return r;
          var pt = le(r);
          if (pt) {
            if (H = hT(r), !z)
              return Nn(r, H);
          } else {
            var gt = An(r), Ct = gt == ue || gt == He;
            if (Ci(r))
              return Bp(r, z);
            if (gt == ne || gt == q || Ct && !A) {
              if (H = J || Ct ? {} : rh(r), !z)
                return J ? rT(r, b_(H, r)) : nT(r, hp(H, r));
            } else {
              if (!Fe[gt])
                return A ? r : {};
              H = ET(r, gt, z);
            }
          }
          C || (C = new vr());
          var Vt = C.get(r);
          if (Vt)
            return Vt;
          C.set(r, H), wh(r) ? r.forEach(function(te) {
            H.add(nr(te, s, u, te, r, C));
          }) : Nh(r) && r.forEach(function(te, ge) {
            H.set(ge, nr(te, s, u, ge, r, C));
          });
          var Zt = ft ? J ? pf : df : J ? wn : dn, pe = pt ? n : Zt(r);
          return Zn(pe || r, function(te, ge) {
            pe && (ge = te, te = r[ge]), yo(H, ge, nr(te, s, u, ge, r, C));
          }), H;
        }
        function I_(r) {
          var s = dn(r);
          return function(u) {
            return Ep(u, r, s);
          };
        }
        function Ep(r, s, u) {
          var E = u.length;
          if (r == null)
            return !E;
          for (r = ke(r); E--; ) {
            var A = u[E], C = s[A], H = r[A];
            if (H === n && !(A in r) || !C(H))
              return !1;
          }
          return !0;
        }
        function gp(r, s, u) {
          if (typeof r != "function")
            throw new tr(l);
          return No(function() {
            r.apply(n, u);
          }, s);
        }
        function Oo(r, s, u, E) {
          var A = -1, C = Oa, H = !0, z = r.length, J = [], ft = s.length;
          if (!z)
            return J;
          u && (s = Ge(s, Vn(u))), E ? (C = wu, H = !1) : s.length >= o && (C = vo, H = !1, s = new Ki(s));
          t:
            for (; ++A < z; ) {
              var pt = r[A], gt = u == null ? pt : u(pt);
              if (pt = E || pt !== 0 ? pt : 0, H && gt === gt) {
                for (var Ct = ft; Ct--; )
                  if (s[Ct] === gt)
                    continue t;
                J.push(pt);
              } else C(s, gt, E) || J.push(pt);
            }
          return J;
        }
        var Ri = Vp(Mr), vp = Vp(Ku, !0);
        function L_(r, s) {
          var u = !0;
          return Ri(r, function(E, A, C) {
            return u = !!s(E, A, C), u;
          }), u;
        }
        function Wa(r, s, u) {
          for (var E = -1, A = r.length; ++E < A; ) {
            var C = r[E], H = s(C);
            if (H != null && (z === n ? H === H && !Gn(H) : u(H, z)))
              var z = H, J = C;
          }
          return J;
        }
        function C_(r, s, u, E) {
          var A = r.length;
          for (u = de(u), u < 0 && (u = -u > A ? 0 : A + u), E = E === n || E > A ? A : de(E), E < 0 && (E += A), E = u > E ? 0 : Dh(E); u < E; )
            r[u++] = s;
          return r;
        }
        function mp(r, s) {
          var u = [];
          return Ri(r, function(E, A, C) {
            s(E, A, C) && u.push(E);
          }), u;
        }
        function gn(r, s, u, E, A) {
          var C = -1, H = r.length;
          for (u || (u = vT), A || (A = []); ++C < H; ) {
            var z = r[C];
            s > 0 && u(z) ? s > 1 ? gn(z, s - 1, u, E, A) : Si(A, z) : E || (A[A.length] = z);
          }
          return A;
        }
        var Yu = Xp(), _p = Xp(!0);
        function Mr(r, s) {
          return r && Yu(r, s, dn);
        }
        function Ku(r, s) {
          return r && _p(r, s, dn);
        }
        function Va(r, s) {
          return Ai(s, function(u) {
            return li(r[u]);
          });
        }
        function qi(r, s) {
          s = Ii(s, r);
          for (var u = 0, E = s.length; r != null && u < E; )
            r = r[Pr(s[u++])];
          return u && u == E ? r : n;
        }
        function Tp(r, s, u) {
          var E = s(r);
          return le(r) ? E : Si(E, u(r));
        }
        function Rn(r) {
          return r == null ? r === n ? Qe : fe : zi && zi in ke(r) ? cT(r) : OT(r);
        }
        function ju(r, s) {
          return r > s;
        }
        function N_(r, s) {
          return r != null && xe.call(r, s);
        }
        function x_(r, s) {
          return r != null && s in ke(r);
        }
        function w_(r, s, u) {
          return r >= Tn(s, u) && r < an(s, u);
        }
        function qu(r, s, u) {
          for (var E = u ? wu : Oa, A = r[0].length, C = r.length, H = C, z = et(C), J = 1 / 0, ft = []; H--; ) {
            var pt = r[H];
            H && s && (pt = Ge(pt, Vn(s))), J = Tn(pt.length, J), z[H] = !u && (s || A >= 120 && pt.length >= 120) ? new Ki(H && pt) : n;
          }
          pt = r[0];
          var gt = -1, Ct = z[0];
          t:
            for (; ++gt < A && ft.length < J; ) {
              var Vt = pt[gt], Zt = s ? s(Vt) : Vt;
              if (Vt = u || Vt !== 0 ? Vt : 0, !(Ct ? vo(Ct, Zt) : E(ft, Zt, u))) {
                for (H = C; --H; ) {
                  var pe = z[H];
                  if (!(pe ? vo(pe, Zt) : E(r[H], Zt, u)))
                    continue t;
                }
                Ct && Ct.push(Zt), ft.push(Vt);
              }
            }
          return ft;
        }
        function M_(r, s, u, E) {
          return Mr(r, function(A, C, H) {
            s(E, u(A), C, H);
          }), E;
        }
        function Ro(r, s, u) {
          s = Ii(s, r), r = ah(r, s);
          var E = r == null ? r : r[Pr(ir(s))];
          return E == null ? n : Wn(E, r, u);
        }
        function Ap(r) {
          return Je(r) && Rn(r) == q;
        }
        function D_(r) {
          return Je(r) && Rn(r) == nn;
        }
        function P_(r) {
          return Je(r) && Rn(r) == Bt;
        }
        function bo(r, s, u, E, A) {
          return r === s ? !0 : r == null || s == null || !Je(r) && !Je(s) ? r !== r && s !== s : U_(r, s, u, E, bo, A);
        }
        function U_(r, s, u, E, A, C) {
          var H = le(r), z = le(s), J = H ? T : An(r), ft = z ? T : An(s);
          J = J == q ? ne : J, ft = ft == q ? ne : ft;
          var pt = J == ne, gt = ft == ne, Ct = J == ft;
          if (Ct && Ci(r)) {
            if (!Ci(s))
              return !1;
            H = !0, pt = !1;
          }
          if (Ct && !pt)
            return C || (C = new vr()), H || Bs(r) ? th(r, s, u, E, A, C) : uT(r, s, J, u, E, A, C);
          if (!(u & P)) {
            var Vt = pt && xe.call(r, "__wrapped__"), Zt = gt && xe.call(s, "__wrapped__");
            if (Vt || Zt) {
              var pe = Vt ? r.value() : r, te = Zt ? s.value() : s;
              return C || (C = new vr()), A(pe, te, u, E, C);
            }
          }
          return Ct ? (C || (C = new vr()), fT(r, s, u, E, A, C)) : !1;
        }
        function k_(r) {
          return Je(r) && An(r) == Wt;
        }
        function Ju(r, s, u, E) {
          var A = u.length, C = A, H = !E;
          if (r == null)
            return !C;
          for (r = ke(r); A--; ) {
            var z = u[A];
            if (H && z[2] ? z[1] !== r[z[0]] : !(z[0] in r))
              return !1;
          }
          for (; ++A < C; ) {
            z = u[A];
            var J = z[0], ft = r[J], pt = z[1];
            if (H && z[2]) {
              if (ft === n && !(J in r))
                return !1;
            } else {
              var gt = new vr();
              if (E)
                var Ct = E(ft, pt, J, r, s, gt);
              if (!(Ct === n ? bo(pt, ft, P | O, E, gt) : Ct))
                return !1;
            }
          }
          return !0;
        }
        function Sp(r) {
          if (!ze(r) || _T(r))
            return !1;
          var s = li(r) ? k1 : Au;
          return s.test(Qi(r));
        }
        function B_(r) {
          return Je(r) && Rn(r) == ee;
        }
        function $_(r) {
          return Je(r) && An(r) == oe;
        }
        function H_(r) {
          return Je(r) && ol(r.length) && !!We[Rn(r)];
        }
        function yp(r) {
          return typeof r == "function" ? r : r == null ? Mn : typeof r == "object" ? le(r) ? bp(r[0], r[1]) : Rp(r) : Gh(r);
        }
        function Qu(r) {
          if (!Co(r))
            return V1(r);
          var s = [];
          for (var u in ke(r))
            xe.call(r, u) && u != "constructor" && s.push(u);
          return s;
        }
        function F_(r) {
          if (!ze(r))
            return yT(r);
          var s = Co(r), u = [];
          for (var E in r)
            E == "constructor" && (s || !xe.call(r, E)) || u.push(E);
          return u;
        }
        function Zu(r, s) {
          return r < s;
        }
        function Op(r, s) {
          var u = -1, E = xn(r) ? et(r.length) : [];
          return Ri(r, function(A, C, H) {
            E[++u] = s(A, C, H);
          }), E;
        }
        function Rp(r) {
          var s = Ef(r);
          return s.length == 1 && s[0][2] ? sh(s[0][0], s[0][1]) : function(u) {
            return u === r || Ju(u, r, s);
          };
        }
        function bp(r, s) {
          return vf(r) && ih(s) ? sh(Pr(r), s) : function(u) {
            var E = If(u, r);
            return E === n && E === s ? Lf(u, r) : bo(s, E, P | O);
          };
        }
        function Xa(r, s, u, E, A) {
          r !== s && Yu(s, function(C, H) {
            if (A || (A = new vr()), ze(C))
              W_(r, s, H, u, Xa, E, A);
            else {
              var z = E ? E(_f(r, H), C, H + "", r, s, A) : n;
              z === n && (z = C), Gu(r, H, z);
            }
          }, wn);
        }
        function W_(r, s, u, E, A, C, H) {
          var z = _f(r, u), J = _f(s, u), ft = H.get(J);
          if (ft) {
            Gu(r, u, ft);
            return;
          }
          var pt = C ? C(z, J, u + "", r, s, H) : n, gt = pt === n;
          if (gt) {
            var Ct = le(J), Vt = !Ct && Ci(J), Zt = !Ct && !Vt && Bs(J);
            pt = J, Ct || Vt || Zt ? le(z) ? pt = z : tn(z) ? pt = Nn(z) : Vt ? (gt = !1, pt = Bp(J, !0)) : Zt ? (gt = !1, pt = $p(J, !0)) : pt = [] : xo(J) || Zi(J) ? (pt = z, Zi(z) ? pt = Ph(z) : (!ze(z) || li(z)) && (pt = rh(J))) : gt = !1;
          }
          gt && (H.set(J, pt), A(pt, J, E, C, H), H.delete(J)), Gu(r, u, pt);
        }
        function Ip(r, s) {
          var u = r.length;
          if (u)
            return s += s < 0 ? u : 0, ai(s, u) ? r[s] : n;
        }
        function Lp(r, s, u) {
          s.length ? s = Ge(s, function(C) {
            return le(C) ? function(H) {
              return qi(H, C.length === 1 ? C[0] : C);
            } : C;
          }) : s = [Mn];
          var E = -1;
          s = Ge(s, Vn(Jt()));
          var A = Op(r, function(C, H, z) {
            var J = Ge(s, function(ft) {
              return ft(C);
            });
            return { criteria: J, index: ++E, value: C };
          });
          return E1(A, function(C, H) {
            return eT(C, H, u);
          });
        }
        function V_(r, s) {
          return Cp(r, s, function(u, E) {
            return Lf(r, E);
          });
        }
        function Cp(r, s, u) {
          for (var E = -1, A = s.length, C = {}; ++E < A; ) {
            var H = s[E], z = qi(r, H);
            u(z, H) && Io(C, Ii(H, r), z);
          }
          return C;
        }
        function X_(r) {
          return function(s) {
            return qi(s, r);
          };
        }
        function tf(r, s, u, E) {
          var A = E ? h1 : Is, C = -1, H = s.length, z = r;
          for (r === s && (s = Nn(s)), u && (z = Ge(r, Vn(u))); ++C < H; )
            for (var J = 0, ft = s[C], pt = u ? u(ft) : ft; (J = A(z, pt, J, E)) > -1; )
              z !== r && Da.call(z, J, 1), Da.call(r, J, 1);
          return r;
        }
        function Np(r, s) {
          for (var u = r ? s.length : 0, E = u - 1; u--; ) {
            var A = s[u];
            if (u == E || A !== C) {
              var C = A;
              ai(A) ? Da.call(r, A, 1) : sf(r, A);
            }
          }
          return r;
        }
        function ef(r, s) {
          return r + ka(fp() * (s - r + 1));
        }
        function G_(r, s, u, E) {
          for (var A = -1, C = an(Ua((s - r) / (u || 1)), 0), H = et(C); C--; )
            H[E ? C : ++A] = r, r += u;
          return H;
        }
        function nf(r, s) {
          var u = "";
          if (!r || s < 1 || s > ct)
            return u;
          do
            s % 2 && (u += r), s = ka(s / 2), s && (r += r);
          while (s);
          return u;
        }
        function he(r, s) {
          return Tf(oh(r, s, Mn), r + "");
        }
        function z_(r) {
          return pp($s(r));
        }
        function Y_(r, s) {
          var u = $s(r);
          return tl(u, ji(s, 0, u.length));
        }
        function Io(r, s, u, E) {
          if (!ze(r))
            return r;
          s = Ii(s, r);
          for (var A = -1, C = s.length, H = C - 1, z = r; z != null && ++A < C; ) {
            var J = Pr(s[A]), ft = u;
            if (J === "__proto__" || J === "constructor" || J === "prototype")
              return r;
            if (A != H) {
              var pt = z[J];
              ft = E ? E(pt, J, z) : n, ft === n && (ft = ze(pt) ? pt : ai(s[A + 1]) ? [] : {});
            }
            yo(z, J, ft), z = z[J];
          }
          return r;
        }
        var xp = Ba ? function(r, s) {
          return Ba.set(r, s), r;
        } : Mn, K_ = Pa ? function(r, s) {
          return Pa(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Nf(s),
            writable: !0
          });
        } : Mn;
        function j_(r) {
          return tl($s(r));
        }
        function rr(r, s, u) {
          var E = -1, A = r.length;
          s < 0 && (s = -s > A ? 0 : A + s), u = u > A ? A : u, u < 0 && (u += A), A = s > u ? 0 : u - s >>> 0, s >>>= 0;
          for (var C = et(A); ++E < A; )
            C[E] = r[E + s];
          return C;
        }
        function q_(r, s) {
          var u;
          return Ri(r, function(E, A, C) {
            return u = s(E, A, C), !u;
          }), !!u;
        }
        function Ga(r, s, u) {
          var E = 0, A = r == null ? E : r.length;
          if (typeof s == "number" && s === s && A <= ut) {
            for (; E < A; ) {
              var C = E + A >>> 1, H = r[C];
              H !== null && !Gn(H) && (u ? H <= s : H < s) ? E = C + 1 : A = C;
            }
            return A;
          }
          return rf(r, s, Mn, u);
        }
        function rf(r, s, u, E) {
          var A = 0, C = r == null ? 0 : r.length;
          if (C === 0)
            return 0;
          s = u(s);
          for (var H = s !== s, z = s === null, J = Gn(s), ft = s === n; A < C; ) {
            var pt = ka((A + C) / 2), gt = u(r[pt]), Ct = gt !== n, Vt = gt === null, Zt = gt === gt, pe = Gn(gt);
            if (H)
              var te = E || Zt;
            else ft ? te = Zt && (E || Ct) : z ? te = Zt && Ct && (E || !Vt) : J ? te = Zt && Ct && !Vt && (E || !pe) : Vt || pe ? te = !1 : te = E ? gt <= s : gt < s;
            te ? A = pt + 1 : C = pt;
          }
          return Tn(C, dt);
        }
        function wp(r, s) {
          for (var u = -1, E = r.length, A = 0, C = []; ++u < E; ) {
            var H = r[u], z = s ? s(H) : H;
            if (!u || !mr(z, J)) {
              var J = z;
              C[A++] = H === 0 ? 0 : H;
            }
          }
          return C;
        }
        function Mp(r) {
          return typeof r == "number" ? r : Gn(r) ? mt : +r;
        }
        function Xn(r) {
          if (typeof r == "string")
            return r;
          if (le(r))
            return Ge(r, Xn) + "";
          if (Gn(r))
            return cp ? cp.call(r) : "";
          var s = r + "";
          return s == "0" && 1 / r == -1 / 0 ? "-0" : s;
        }
        function bi(r, s, u) {
          var E = -1, A = Oa, C = r.length, H = !0, z = [], J = z;
          if (u)
            H = !1, A = wu;
          else if (C >= o) {
            var ft = s ? null : aT(r);
            if (ft)
              return ba(ft);
            H = !1, A = vo, J = new Ki();
          } else
            J = s ? [] : z;
          t:
            for (; ++E < C; ) {
              var pt = r[E], gt = s ? s(pt) : pt;
              if (pt = u || pt !== 0 ? pt : 0, H && gt === gt) {
                for (var Ct = J.length; Ct--; )
                  if (J[Ct] === gt)
                    continue t;
                s && J.push(gt), z.push(pt);
              } else A(J, gt, u) || (J !== z && J.push(gt), z.push(pt));
            }
          return z;
        }
        function sf(r, s) {
          return s = Ii(s, r), r = ah(r, s), r == null || delete r[Pr(ir(s))];
        }
        function Dp(r, s, u, E) {
          return Io(r, s, u(qi(r, s)), E);
        }
        function za(r, s, u, E) {
          for (var A = r.length, C = E ? A : -1; (E ? C-- : ++C < A) && s(r[C], C, r); )
            ;
          return u ? rr(r, E ? 0 : C, E ? C + 1 : A) : rr(r, E ? C + 1 : 0, E ? A : C);
        }
        function Pp(r, s) {
          var u = r;
          return u instanceof Te && (u = u.value()), Mu(s, function(E, A) {
            return A.func.apply(A.thisArg, Si([E], A.args));
          }, u);
        }
        function of(r, s, u) {
          var E = r.length;
          if (E < 2)
            return E ? bi(r[0]) : [];
          for (var A = -1, C = et(E); ++A < E; )
            for (var H = r[A], z = -1; ++z < E; )
              z != A && (C[A] = Oo(C[A] || H, r[z], s, u));
          return bi(gn(C, 1), s, u);
        }
        function Up(r, s, u) {
          for (var E = -1, A = r.length, C = s.length, H = {}; ++E < A; ) {
            var z = E < C ? s[E] : n;
            u(H, r[E], z);
          }
          return H;
        }
        function af(r) {
          return tn(r) ? r : [];
        }
        function lf(r) {
          return typeof r == "function" ? r : Mn;
        }
        function Ii(r, s) {
          return le(r) ? r : vf(r, s) ? [r] : ch(Le(r));
        }
        var J_ = he;
        function Li(r, s, u) {
          var E = r.length;
          return u = u === n ? E : u, !s && u >= E ? r : rr(r, s, u);
        }
        var kp = B1 || function(r) {
          return En.clearTimeout(r);
        };
        function Bp(r, s) {
          if (s)
            return r.slice();
          var u = r.length, E = sp ? sp(u) : new r.constructor(u);
          return r.copy(E), E;
        }
        function uf(r) {
          var s = new r.constructor(r.byteLength);
          return new wa(s).set(new wa(r)), s;
        }
        function Q_(r, s) {
          var u = s ? uf(r.buffer) : r.buffer;
          return new r.constructor(u, r.byteOffset, r.byteLength);
        }
        function Z_(r) {
          var s = new r.constructor(r.source, Ea.exec(r));
          return s.lastIndex = r.lastIndex, s;
        }
        function tT(r) {
          return So ? ke(So.call(r)) : {};
        }
        function $p(r, s) {
          var u = s ? uf(r.buffer) : r.buffer;
          return new r.constructor(u, r.byteOffset, r.length);
        }
        function Hp(r, s) {
          if (r !== s) {
            var u = r !== n, E = r === null, A = r === r, C = Gn(r), H = s !== n, z = s === null, J = s === s, ft = Gn(s);
            if (!z && !ft && !C && r > s || C && H && J && !z && !ft || E && H && J || !u && J || !A)
              return 1;
            if (!E && !C && !ft && r < s || ft && u && A && !E && !C || z && u && A || !H && A || !J)
              return -1;
          }
          return 0;
        }
        function eT(r, s, u) {
          for (var E = -1, A = r.criteria, C = s.criteria, H = A.length, z = u.length; ++E < H; ) {
            var J = Hp(A[E], C[E]);
            if (J) {
              if (E >= z)
                return J;
              var ft = u[E];
              return J * (ft == "desc" ? -1 : 1);
            }
          }
          return r.index - s.index;
        }
        function Fp(r, s, u, E) {
          for (var A = -1, C = r.length, H = u.length, z = -1, J = s.length, ft = an(C - H, 0), pt = et(J + ft), gt = !E; ++z < J; )
            pt[z] = s[z];
          for (; ++A < H; )
            (gt || A < C) && (pt[u[A]] = r[A]);
          for (; ft--; )
            pt[z++] = r[A++];
          return pt;
        }
        function Wp(r, s, u, E) {
          for (var A = -1, C = r.length, H = -1, z = u.length, J = -1, ft = s.length, pt = an(C - z, 0), gt = et(pt + ft), Ct = !E; ++A < pt; )
            gt[A] = r[A];
          for (var Vt = A; ++J < ft; )
            gt[Vt + J] = s[J];
          for (; ++H < z; )
            (Ct || A < C) && (gt[Vt + u[H]] = r[A++]);
          return gt;
        }
        function Nn(r, s) {
          var u = -1, E = r.length;
          for (s || (s = et(E)); ++u < E; )
            s[u] = r[u];
          return s;
        }
        function Dr(r, s, u, E) {
          var A = !u;
          u || (u = {});
          for (var C = -1, H = s.length; ++C < H; ) {
            var z = s[C], J = E ? E(u[z], r[z], z, u, r) : n;
            J === n && (J = r[z]), A ? ii(u, z, J) : yo(u, z, J);
          }
          return u;
        }
        function nT(r, s) {
          return Dr(r, gf(r), s);
        }
        function rT(r, s) {
          return Dr(r, eh(r), s);
        }
        function Ya(r, s) {
          return function(u, E) {
            var A = le(u) ? l1 : R_, C = s ? s() : {};
            return A(u, r, Jt(E, 2), C);
          };
        }
        function Ps(r) {
          return he(function(s, u) {
            var E = -1, A = u.length, C = A > 1 ? u[A - 1] : n, H = A > 2 ? u[2] : n;
            for (C = r.length > 3 && typeof C == "function" ? (A--, C) : n, H && bn(u[0], u[1], H) && (C = A < 3 ? n : C, A = 1), s = ke(s); ++E < A; ) {
              var z = u[E];
              z && r(s, z, E, C);
            }
            return s;
          });
        }
        function Vp(r, s) {
          return function(u, E) {
            if (u == null)
              return u;
            if (!xn(u))
              return r(u, E);
            for (var A = u.length, C = s ? A : -1, H = ke(u); (s ? C-- : ++C < A) && E(H[C], C, H) !== !1; )
              ;
            return u;
          };
        }
        function Xp(r) {
          return function(s, u, E) {
            for (var A = -1, C = ke(s), H = E(s), z = H.length; z--; ) {
              var J = H[r ? z : ++A];
              if (u(C[J], J, C) === !1)
                break;
            }
            return s;
          };
        }
        function iT(r, s, u) {
          var E = s & W, A = Lo(r);
          function C() {
            var H = this && this !== En && this instanceof C ? A : r;
            return H.apply(E ? u : this, arguments);
          }
          return C;
        }
        function Gp(r) {
          return function(s) {
            s = Le(s);
            var u = Ls(s) ? gr(s) : n, E = u ? u[0] : s.charAt(0), A = u ? Li(u, 1).join("") : s.slice(1);
            return E[r]() + A;
          };
        }
        function Us(r) {
          return function(s) {
            return Mu(Vh(Wh(s).replace(Iu, "")), r, "");
          };
        }
        function Lo(r) {
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return new r();
              case 1:
                return new r(s[0]);
              case 2:
                return new r(s[0], s[1]);
              case 3:
                return new r(s[0], s[1], s[2]);
              case 4:
                return new r(s[0], s[1], s[2], s[3]);
              case 5:
                return new r(s[0], s[1], s[2], s[3], s[4]);
              case 6:
                return new r(s[0], s[1], s[2], s[3], s[4], s[5]);
              case 7:
                return new r(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
            }
            var u = Ds(r.prototype), E = r.apply(u, s);
            return ze(E) ? E : u;
          };
        }
        function sT(r, s, u) {
          var E = Lo(r);
          function A() {
            for (var C = arguments.length, H = et(C), z = C, J = ks(A); z--; )
              H[z] = arguments[z];
            var ft = C < 3 && H[0] !== J && H[C - 1] !== J ? [] : yi(H, J);
            if (C -= ft.length, C < u)
              return qp(
                r,
                s,
                Ka,
                A.placeholder,
                n,
                H,
                ft,
                n,
                n,
                u - C
              );
            var pt = this && this !== En && this instanceof A ? E : r;
            return Wn(pt, this, H);
          }
          return A;
        }
        function zp(r) {
          return function(s, u, E) {
            var A = ke(s);
            if (!xn(s)) {
              var C = Jt(u, 3);
              s = dn(s), u = function(z) {
                return C(A[z], z, A);
              };
            }
            var H = r(s, u, E);
            return H > -1 ? A[C ? s[H] : H] : n;
          };
        }
        function Yp(r) {
          return oi(function(s) {
            var u = s.length, E = u, A = er.prototype.thru;
            for (r && s.reverse(); E--; ) {
              var C = s[E];
              if (typeof C != "function")
                throw new tr(l);
              if (A && !H && Qa(C) == "wrapper")
                var H = new er([], !0);
            }
            for (E = H ? E : u; ++E < u; ) {
              C = s[E];
              var z = Qa(C), J = z == "wrapper" ? hf(C) : n;
              J && mf(J[0]) && J[1] == (B | Z | G | U) && !J[4].length && J[9] == 1 ? H = H[Qa(J[0])].apply(H, J[3]) : H = C.length == 1 && mf(C) ? H[z]() : H.thru(C);
            }
            return function() {
              var ft = arguments, pt = ft[0];
              if (H && ft.length == 1 && le(pt))
                return H.plant(pt).value();
              for (var gt = 0, Ct = u ? s[gt].apply(this, ft) : pt; ++gt < u; )
                Ct = s[gt].call(this, Ct);
              return Ct;
            };
          });
        }
        function Ka(r, s, u, E, A, C, H, z, J, ft) {
          var pt = s & B, gt = s & W, Ct = s & b, Vt = s & (Z | v), Zt = s & y, pe = Ct ? n : Lo(r);
          function te() {
            for (var ge = arguments.length, Ae = et(ge), zn = ge; zn--; )
              Ae[zn] = arguments[zn];
            if (Vt)
              var In = ks(te), Yn = v1(Ae, In);
            if (E && (Ae = Fp(Ae, E, A, Vt)), C && (Ae = Wp(Ae, C, H, Vt)), ge -= Yn, Vt && ge < ft) {
              var en = yi(Ae, In);
              return qp(
                r,
                s,
                Ka,
                te.placeholder,
                u,
                Ae,
                en,
                z,
                J,
                ft - ge
              );
            }
            var _r = gt ? u : this, fi = Ct ? _r[r] : r;
            return ge = Ae.length, z ? Ae = RT(Ae, z) : Zt && ge > 1 && Ae.reverse(), pt && J < ge && (Ae.length = J), this && this !== En && this instanceof te && (fi = pe || Lo(fi)), fi.apply(_r, Ae);
          }
          return te;
        }
        function Kp(r, s) {
          return function(u, E) {
            return M_(u, r, s(E), {});
          };
        }
        function ja(r, s) {
          return function(u, E) {
            var A;
            if (u === n && E === n)
              return s;
            if (u !== n && (A = u), E !== n) {
              if (A === n)
                return E;
              typeof u == "string" || typeof E == "string" ? (u = Xn(u), E = Xn(E)) : (u = Mp(u), E = Mp(E)), A = r(u, E);
            }
            return A;
          };
        }
        function ff(r) {
          return oi(function(s) {
            return s = Ge(s, Vn(Jt())), he(function(u) {
              var E = this;
              return r(s, function(A) {
                return Wn(A, E, u);
              });
            });
          });
        }
        function qa(r, s) {
          s = s === n ? " " : Xn(s);
          var u = s.length;
          if (u < 2)
            return u ? nf(s, r) : s;
          var E = nf(s, Ua(r / Cs(s)));
          return Ls(s) ? Li(gr(E), 0, r).join("") : E.slice(0, r);
        }
        function oT(r, s, u, E) {
          var A = s & W, C = Lo(r);
          function H() {
            for (var z = -1, J = arguments.length, ft = -1, pt = E.length, gt = et(pt + J), Ct = this && this !== En && this instanceof H ? C : r; ++ft < pt; )
              gt[ft] = E[ft];
            for (; J--; )
              gt[ft++] = arguments[++z];
            return Wn(Ct, A ? u : this, gt);
          }
          return H;
        }
        function jp(r) {
          return function(s, u, E) {
            return E && typeof E != "number" && bn(s, u, E) && (u = E = n), s = ui(s), u === n ? (u = s, s = 0) : u = ui(u), E = E === n ? s < u ? 1 : -1 : ui(E), G_(s, u, E, r);
          };
        }
        function Ja(r) {
          return function(s, u) {
            return typeof s == "string" && typeof u == "string" || (s = sr(s), u = sr(u)), r(s, u);
          };
        }
        function qp(r, s, u, E, A, C, H, z, J, ft) {
          var pt = s & Z, gt = pt ? H : n, Ct = pt ? n : H, Vt = pt ? C : n, Zt = pt ? n : C;
          s |= pt ? G : L, s &= ~(pt ? L : G), s & w || (s &= -4);
          var pe = [
            r,
            s,
            A,
            Vt,
            gt,
            Zt,
            Ct,
            z,
            J,
            ft
          ], te = u.apply(n, pe);
          return mf(r) && lh(te, pe), te.placeholder = E, uh(te, r, s);
        }
        function cf(r) {
          var s = on[r];
          return function(u, E) {
            if (u = sr(u), E = E == null ? 0 : Tn(de(E), 292), E && up(u)) {
              var A = (Le(u) + "e").split("e"), C = s(A[0] + "e" + (+A[1] + E));
              return A = (Le(C) + "e").split("e"), +(A[0] + "e" + (+A[1] - E));
            }
            return s(u);
          };
        }
        var aT = ws && 1 / ba(new ws([, -0]))[1] == $ ? function(r) {
          return new ws(r);
        } : Mf;
        function Jp(r) {
          return function(s) {
            var u = An(s);
            return u == Wt ? Hu(s) : u == oe ? O1(s) : g1(s, r(s));
          };
        }
        function si(r, s, u, E, A, C, H, z) {
          var J = s & b;
          if (!J && typeof r != "function")
            throw new tr(l);
          var ft = E ? E.length : 0;
          if (ft || (s &= -97, E = A = n), H = H === n ? H : an(de(H), 0), z = z === n ? z : de(z), ft -= A ? A.length : 0, s & L) {
            var pt = E, gt = A;
            E = A = n;
          }
          var Ct = J ? n : hf(r), Vt = [
            r,
            s,
            u,
            E,
            A,
            pt,
            gt,
            C,
            H,
            z
          ];
          if (Ct && ST(Vt, Ct), r = Vt[0], s = Vt[1], u = Vt[2], E = Vt[3], A = Vt[4], z = Vt[9] = Vt[9] === n ? J ? 0 : r.length : an(Vt[9] - ft, 0), !z && s & (Z | v) && (s &= -25), !s || s == W)
            var Zt = iT(r, s, u);
          else s == Z || s == v ? Zt = sT(r, s, z) : (s == G || s == (W | G)) && !A.length ? Zt = oT(r, s, u, E) : Zt = Ka.apply(n, Vt);
          var pe = Ct ? xp : lh;
          return uh(pe(Zt, Vt), r, s);
        }
        function Qp(r, s, u, E) {
          return r === n || mr(r, xs[u]) && !xe.call(E, u) ? s : r;
        }
        function Zp(r, s, u, E, A, C) {
          return ze(r) && ze(s) && (C.set(s, r), Xa(r, s, n, Zp, C), C.delete(s)), r;
        }
        function lT(r) {
          return xo(r) ? n : r;
        }
        function th(r, s, u, E, A, C) {
          var H = u & P, z = r.length, J = s.length;
          if (z != J && !(H && J > z))
            return !1;
          var ft = C.get(r), pt = C.get(s);
          if (ft && pt)
            return ft == s && pt == r;
          var gt = -1, Ct = !0, Vt = u & O ? new Ki() : n;
          for (C.set(r, s), C.set(s, r); ++gt < z; ) {
            var Zt = r[gt], pe = s[gt];
            if (E)
              var te = H ? E(pe, Zt, gt, s, r, C) : E(Zt, pe, gt, r, s, C);
            if (te !== n) {
              if (te)
                continue;
              Ct = !1;
              break;
            }
            if (Vt) {
              if (!Du(s, function(ge, Ae) {
                if (!vo(Vt, Ae) && (Zt === ge || A(Zt, ge, u, E, C)))
                  return Vt.push(Ae);
              })) {
                Ct = !1;
                break;
              }
            } else if (!(Zt === pe || A(Zt, pe, u, E, C))) {
              Ct = !1;
              break;
            }
          }
          return C.delete(r), C.delete(s), Ct;
        }
        function uT(r, s, u, E, A, C, H) {
          switch (u) {
            case sn:
              if (r.byteLength != s.byteLength || r.byteOffset != s.byteOffset)
                return !1;
              r = r.buffer, s = s.buffer;
            case nn:
              return !(r.byteLength != s.byteLength || !C(new wa(r), new wa(s)));
            case bt:
            case Bt:
            case Mt:
              return mr(+r, +s);
            case xt:
              return r.name == s.name && r.message == s.message;
            case ee:
            case we:
              return r == s + "";
            case Wt:
              var z = Hu;
            case oe:
              var J = E & P;
              if (z || (z = ba), r.size != s.size && !J)
                return !1;
              var ft = H.get(r);
              if (ft)
                return ft == s;
              E |= O, H.set(r, s);
              var pt = th(z(r), z(s), E, A, C, H);
              return H.delete(r), pt;
            case Ne:
              if (So)
                return So.call(r) == So.call(s);
          }
          return !1;
        }
        function fT(r, s, u, E, A, C) {
          var H = u & P, z = df(r), J = z.length, ft = df(s), pt = ft.length;
          if (J != pt && !H)
            return !1;
          for (var gt = J; gt--; ) {
            var Ct = z[gt];
            if (!(H ? Ct in s : xe.call(s, Ct)))
              return !1;
          }
          var Vt = C.get(r), Zt = C.get(s);
          if (Vt && Zt)
            return Vt == s && Zt == r;
          var pe = !0;
          C.set(r, s), C.set(s, r);
          for (var te = H; ++gt < J; ) {
            Ct = z[gt];
            var ge = r[Ct], Ae = s[Ct];
            if (E)
              var zn = H ? E(Ae, ge, Ct, s, r, C) : E(ge, Ae, Ct, r, s, C);
            if (!(zn === n ? ge === Ae || A(ge, Ae, u, E, C) : zn)) {
              pe = !1;
              break;
            }
            te || (te = Ct == "constructor");
          }
          if (pe && !te) {
            var In = r.constructor, Yn = s.constructor;
            In != Yn && "constructor" in r && "constructor" in s && !(typeof In == "function" && In instanceof In && typeof Yn == "function" && Yn instanceof Yn) && (pe = !1);
          }
          return C.delete(r), C.delete(s), pe;
        }
        function oi(r) {
          return Tf(oh(r, n, Eh), r + "");
        }
        function df(r) {
          return Tp(r, dn, gf);
        }
        function pf(r) {
          return Tp(r, wn, eh);
        }
        var hf = Ba ? function(r) {
          return Ba.get(r);
        } : Mf;
        function Qa(r) {
          for (var s = r.name + "", u = Ms[s], E = xe.call(Ms, s) ? u.length : 0; E--; ) {
            var A = u[E], C = A.func;
            if (C == null || C == r)
              return A.name;
          }
          return s;
        }
        function ks(r) {
          var s = xe.call(I, "placeholder") ? I : r;
          return s.placeholder;
        }
        function Jt() {
          var r = I.iteratee || xf;
          return r = r === xf ? yp : r, arguments.length ? r(arguments[0], arguments[1]) : r;
        }
        function Za(r, s) {
          var u = r.__data__;
          return mT(s) ? u[typeof s == "string" ? "string" : "hash"] : u.map;
        }
        function Ef(r) {
          for (var s = dn(r), u = s.length; u--; ) {
            var E = s[u], A = r[E];
            s[u] = [E, A, ih(A)];
          }
          return s;
        }
        function Ji(r, s) {
          var u = A1(r, s);
          return Sp(u) ? u : n;
        }
        function cT(r) {
          var s = xe.call(r, zi), u = r[zi];
          try {
            r[zi] = n;
            var E = !0;
          } catch {
          }
          var A = Na.call(r);
          return E && (s ? r[zi] = u : delete r[zi]), A;
        }
        var gf = Wu ? function(r) {
          return r == null ? [] : (r = ke(r), Ai(Wu(r), function(s) {
            return ap.call(r, s);
          }));
        } : Df, eh = Wu ? function(r) {
          for (var s = []; r; )
            Si(s, gf(r)), r = Ma(r);
          return s;
        } : Df, An = Rn;
        (Vu && An(new Vu(new ArrayBuffer(1))) != sn || _o && An(new _o()) != Wt || Xu && An(Xu.resolve()) != nt || ws && An(new ws()) != oe || To && An(new To()) != ln) && (An = function(r) {
          var s = Rn(r), u = s == ne ? r.constructor : n, E = u ? Qi(u) : "";
          if (E)
            switch (E) {
              case Y1:
                return sn;
              case K1:
                return Wt;
              case j1:
                return nt;
              case q1:
                return oe;
              case J1:
                return ln;
            }
          return s;
        });
        function dT(r, s, u) {
          for (var E = -1, A = u.length; ++E < A; ) {
            var C = u[E], H = C.size;
            switch (C.type) {
              case "drop":
                r += H;
                break;
              case "dropRight":
                s -= H;
                break;
              case "take":
                s = Tn(s, r + H);
                break;
              case "takeRight":
                r = an(r, s - H);
                break;
            }
          }
          return { start: r, end: s };
        }
        function pT(r) {
          var s = r.match(fo);
          return s ? s[1].split(co) : [];
        }
        function nh(r, s, u) {
          s = Ii(s, r);
          for (var E = -1, A = s.length, C = !1; ++E < A; ) {
            var H = Pr(s[E]);
            if (!(C = r != null && u(r, H)))
              break;
            r = r[H];
          }
          return C || ++E != A ? C : (A = r == null ? 0 : r.length, !!A && ol(A) && ai(H, A) && (le(r) || Zi(r)));
        }
        function hT(r) {
          var s = r.length, u = new r.constructor(s);
          return s && typeof r[0] == "string" && xe.call(r, "index") && (u.index = r.index, u.input = r.input), u;
        }
        function rh(r) {
          return typeof r.constructor == "function" && !Co(r) ? Ds(Ma(r)) : {};
        }
        function ET(r, s, u) {
          var E = r.constructor;
          switch (s) {
            case nn:
              return uf(r);
            case bt:
            case Bt:
              return new E(+r);
            case sn:
              return Q_(r, u);
            case Jr:
            case Qr:
            case Zr:
            case ti:
            case ei:
            case k:
            case rt:
            case vt:
            case kt:
              return $p(r, u);
            case Wt:
              return new E();
            case Mt:
            case we:
              return new E(r);
            case ee:
              return Z_(r);
            case oe:
              return new E();
            case Ne:
              return tT(r);
          }
        }
        function gT(r, s) {
          var u = s.length;
          if (!u)
            return r;
          var E = u - 1;
          return s[E] = (u > 1 ? "& " : "") + s[E], s = s.join(u > 2 ? ", " : " "), r.replace($i, `{
/* [wrapped with ` + s + `] */
`);
        }
        function vT(r) {
          return le(r) || Zi(r) || !!(lp && r && r[lp]);
        }
        function ai(r, s) {
          var u = typeof r;
          return s = s ?? ct, !!s && (u == "number" || u != "symbol" && yu.test(r)) && r > -1 && r % 1 == 0 && r < s;
        }
        function bn(r, s, u) {
          if (!ze(u))
            return !1;
          var E = typeof s;
          return (E == "number" ? xn(u) && ai(s, u.length) : E == "string" && s in u) ? mr(u[s], r) : !1;
        }
        function vf(r, s) {
          if (le(r))
            return !1;
          var u = typeof r;
          return u == "number" || u == "symbol" || u == "boolean" || r == null || Gn(r) ? !0 : Se.test(r) || !Re.test(r) || s != null && r in ke(s);
        }
        function mT(r) {
          var s = typeof r;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? r !== "__proto__" : r === null;
        }
        function mf(r) {
          var s = Qa(r), u = I[s];
          if (typeof u != "function" || !(s in Te.prototype))
            return !1;
          if (r === u)
            return !0;
          var E = hf(u);
          return !!E && r === E[0];
        }
        function _T(r) {
          return !!ip && ip in r;
        }
        var TT = La ? li : Pf;
        function Co(r) {
          var s = r && r.constructor, u = typeof s == "function" && s.prototype || xs;
          return r === u;
        }
        function ih(r) {
          return r === r && !ze(r);
        }
        function sh(r, s) {
          return function(u) {
            return u == null ? !1 : u[r] === s && (s !== n || r in ke(u));
          };
        }
        function AT(r) {
          var s = il(r, function(E) {
            return u.size === g && u.clear(), E;
          }), u = s.cache;
          return s;
        }
        function ST(r, s) {
          var u = r[1], E = s[1], A = u | E, C = A < (W | b | B), H = E == B && u == Z || E == B && u == U && r[7].length <= s[8] || E == (B | U) && s[7].length <= s[8] && u == Z;
          if (!(C || H))
            return r;
          E & W && (r[2] = s[2], A |= u & W ? 0 : w);
          var z = s[3];
          if (z) {
            var J = r[3];
            r[3] = J ? Fp(J, z, s[4]) : z, r[4] = J ? yi(r[3], p) : s[4];
          }
          return z = s[5], z && (J = r[5], r[5] = J ? Wp(J, z, s[6]) : z, r[6] = J ? yi(r[5], p) : s[6]), z = s[7], z && (r[7] = z), E & B && (r[8] = r[8] == null ? s[8] : Tn(r[8], s[8])), r[9] == null && (r[9] = s[9]), r[0] = s[0], r[1] = A, r;
        }
        function yT(r) {
          var s = [];
          if (r != null)
            for (var u in ke(r))
              s.push(u);
          return s;
        }
        function OT(r) {
          return Na.call(r);
        }
        function oh(r, s, u) {
          return s = an(s === n ? r.length - 1 : s, 0), function() {
            for (var E = arguments, A = -1, C = an(E.length - s, 0), H = et(C); ++A < C; )
              H[A] = E[s + A];
            A = -1;
            for (var z = et(s + 1); ++A < s; )
              z[A] = E[A];
            return z[s] = u(H), Wn(r, this, z);
          };
        }
        function ah(r, s) {
          return s.length < 2 ? r : qi(r, rr(s, 0, -1));
        }
        function RT(r, s) {
          for (var u = r.length, E = Tn(s.length, u), A = Nn(r); E--; ) {
            var C = s[E];
            r[E] = ai(C, u) ? A[C] : n;
          }
          return r;
        }
        function _f(r, s) {
          if (!(s === "constructor" && typeof r[s] == "function") && s != "__proto__")
            return r[s];
        }
        var lh = fh(xp), No = H1 || function(r, s) {
          return En.setTimeout(r, s);
        }, Tf = fh(K_);
        function uh(r, s, u) {
          var E = s + "";
          return Tf(r, gT(E, bT(pT(E), u)));
        }
        function fh(r) {
          var s = 0, u = 0;
          return function() {
            var E = X1(), A = M - (E - u);
            if (u = E, A > 0) {
              if (++s >= ht)
                return arguments[0];
            } else
              s = 0;
            return r.apply(n, arguments);
          };
        }
        function tl(r, s) {
          var u = -1, E = r.length, A = E - 1;
          for (s = s === n ? E : s; ++u < s; ) {
            var C = ef(u, A), H = r[C];
            r[C] = r[u], r[u] = H;
          }
          return r.length = s, r;
        }
        var ch = AT(function(r) {
          var s = [];
          return r.charCodeAt(0) === 46 && s.push(""), r.replace($t, function(u, E, A, C) {
            s.push(A ? C.replace(_u, "$1") : E || u);
          }), s;
        });
        function Pr(r) {
          if (typeof r == "string" || Gn(r))
            return r;
          var s = r + "";
          return s == "0" && 1 / r == -1 / 0 ? "-0" : s;
        }
        function Qi(r) {
          if (r != null) {
            try {
              return Ca.call(r);
            } catch {
            }
            try {
              return r + "";
            } catch {
            }
          }
          return "";
        }
        function bT(r, s) {
          return Zn(Tt, function(u) {
            var E = "_." + u[0];
            s & u[1] && !Oa(r, E) && r.push(E);
          }), r.sort();
        }
        function dh(r) {
          if (r instanceof Te)
            return r.clone();
          var s = new er(r.__wrapped__, r.__chain__);
          return s.__actions__ = Nn(r.__actions__), s.__index__ = r.__index__, s.__values__ = r.__values__, s;
        }
        function IT(r, s, u) {
          (u ? bn(r, s, u) : s === n) ? s = 1 : s = an(de(s), 0);
          var E = r == null ? 0 : r.length;
          if (!E || s < 1)
            return [];
          for (var A = 0, C = 0, H = et(Ua(E / s)); A < E; )
            H[C++] = rr(r, A, A += s);
          return H;
        }
        function LT(r) {
          for (var s = -1, u = r == null ? 0 : r.length, E = 0, A = []; ++s < u; ) {
            var C = r[s];
            C && (A[E++] = C);
          }
          return A;
        }
        function CT() {
          var r = arguments.length;
          if (!r)
            return [];
          for (var s = et(r - 1), u = arguments[0], E = r; E--; )
            s[E - 1] = arguments[E];
          return Si(le(u) ? Nn(u) : [u], gn(s, 1));
        }
        var NT = he(function(r, s) {
          return tn(r) ? Oo(r, gn(s, 1, tn, !0)) : [];
        }), xT = he(function(r, s) {
          var u = ir(s);
          return tn(u) && (u = n), tn(r) ? Oo(r, gn(s, 1, tn, !0), Jt(u, 2)) : [];
        }), wT = he(function(r, s) {
          var u = ir(s);
          return tn(u) && (u = n), tn(r) ? Oo(r, gn(s, 1, tn, !0), n, u) : [];
        });
        function MT(r, s, u) {
          var E = r == null ? 0 : r.length;
          return E ? (s = u || s === n ? 1 : de(s), rr(r, s < 0 ? 0 : s, E)) : [];
        }
        function DT(r, s, u) {
          var E = r == null ? 0 : r.length;
          return E ? (s = u || s === n ? 1 : de(s), s = E - s, rr(r, 0, s < 0 ? 0 : s)) : [];
        }
        function PT(r, s) {
          return r && r.length ? za(r, Jt(s, 3), !0, !0) : [];
        }
        function UT(r, s) {
          return r && r.length ? za(r, Jt(s, 3), !0) : [];
        }
        function kT(r, s, u, E) {
          var A = r == null ? 0 : r.length;
          return A ? (u && typeof u != "number" && bn(r, s, u) && (u = 0, E = A), C_(r, s, u, E)) : [];
        }
        function ph(r, s, u) {
          var E = r == null ? 0 : r.length;
          if (!E)
            return -1;
          var A = u == null ? 0 : de(u);
          return A < 0 && (A = an(E + A, 0)), Ra(r, Jt(s, 3), A);
        }
        function hh(r, s, u) {
          var E = r == null ? 0 : r.length;
          if (!E)
            return -1;
          var A = E - 1;
          return u !== n && (A = de(u), A = u < 0 ? an(E + A, 0) : Tn(A, E - 1)), Ra(r, Jt(s, 3), A, !0);
        }
        function Eh(r) {
          var s = r == null ? 0 : r.length;
          return s ? gn(r, 1) : [];
        }
        function BT(r) {
          var s = r == null ? 0 : r.length;
          return s ? gn(r, $) : [];
        }
        function $T(r, s) {
          var u = r == null ? 0 : r.length;
          return u ? (s = s === n ? 1 : de(s), gn(r, s)) : [];
        }
        function HT(r) {
          for (var s = -1, u = r == null ? 0 : r.length, E = {}; ++s < u; ) {
            var A = r[s];
            E[A[0]] = A[1];
          }
          return E;
        }
        function gh(r) {
          return r && r.length ? r[0] : n;
        }
        function FT(r, s, u) {
          var E = r == null ? 0 : r.length;
          if (!E)
            return -1;
          var A = u == null ? 0 : de(u);
          return A < 0 && (A = an(E + A, 0)), Is(r, s, A);
        }
        function WT(r) {
          var s = r == null ? 0 : r.length;
          return s ? rr(r, 0, -1) : [];
        }
        var VT = he(function(r) {
          var s = Ge(r, af);
          return s.length && s[0] === r[0] ? qu(s) : [];
        }), XT = he(function(r) {
          var s = ir(r), u = Ge(r, af);
          return s === ir(u) ? s = n : u.pop(), u.length && u[0] === r[0] ? qu(u, Jt(s, 2)) : [];
        }), GT = he(function(r) {
          var s = ir(r), u = Ge(r, af);
          return s = typeof s == "function" ? s : n, s && u.pop(), u.length && u[0] === r[0] ? qu(u, n, s) : [];
        });
        function zT(r, s) {
          return r == null ? "" : W1.call(r, s);
        }
        function ir(r) {
          var s = r == null ? 0 : r.length;
          return s ? r[s - 1] : n;
        }
        function YT(r, s, u) {
          var E = r == null ? 0 : r.length;
          if (!E)
            return -1;
          var A = E;
          return u !== n && (A = de(u), A = A < 0 ? an(E + A, 0) : Tn(A, E - 1)), s === s ? b1(r, s, A) : Ra(r, qd, A, !0);
        }
        function KT(r, s) {
          return r && r.length ? Ip(r, de(s)) : n;
        }
        var jT = he(vh);
        function vh(r, s) {
          return r && r.length && s && s.length ? tf(r, s) : r;
        }
        function qT(r, s, u) {
          return r && r.length && s && s.length ? tf(r, s, Jt(u, 2)) : r;
        }
        function JT(r, s, u) {
          return r && r.length && s && s.length ? tf(r, s, n, u) : r;
        }
        var QT = oi(function(r, s) {
          var u = r == null ? 0 : r.length, E = zu(r, s);
          return Np(r, Ge(s, function(A) {
            return ai(A, u) ? +A : A;
          }).sort(Hp)), E;
        });
        function ZT(r, s) {
          var u = [];
          if (!(r && r.length))
            return u;
          var E = -1, A = [], C = r.length;
          for (s = Jt(s, 3); ++E < C; ) {
            var H = r[E];
            s(H, E, r) && (u.push(H), A.push(E));
          }
          return Np(r, A), u;
        }
        function Af(r) {
          return r == null ? r : z1.call(r);
        }
        function tA(r, s, u) {
          var E = r == null ? 0 : r.length;
          return E ? (u && typeof u != "number" && bn(r, s, u) ? (s = 0, u = E) : (s = s == null ? 0 : de(s), u = u === n ? E : de(u)), rr(r, s, u)) : [];
        }
        function eA(r, s) {
          return Ga(r, s);
        }
        function nA(r, s, u) {
          return rf(r, s, Jt(u, 2));
        }
        function rA(r, s) {
          var u = r == null ? 0 : r.length;
          if (u) {
            var E = Ga(r, s);
            if (E < u && mr(r[E], s))
              return E;
          }
          return -1;
        }
        function iA(r, s) {
          return Ga(r, s, !0);
        }
        function sA(r, s, u) {
          return rf(r, s, Jt(u, 2), !0);
        }
        function oA(r, s) {
          var u = r == null ? 0 : r.length;
          if (u) {
            var E = Ga(r, s, !0) - 1;
            if (mr(r[E], s))
              return E;
          }
          return -1;
        }
        function aA(r) {
          return r && r.length ? wp(r) : [];
        }
        function lA(r, s) {
          return r && r.length ? wp(r, Jt(s, 2)) : [];
        }
        function uA(r) {
          var s = r == null ? 0 : r.length;
          return s ? rr(r, 1, s) : [];
        }
        function fA(r, s, u) {
          return r && r.length ? (s = u || s === n ? 1 : de(s), rr(r, 0, s < 0 ? 0 : s)) : [];
        }
        function cA(r, s, u) {
          var E = r == null ? 0 : r.length;
          return E ? (s = u || s === n ? 1 : de(s), s = E - s, rr(r, s < 0 ? 0 : s, E)) : [];
        }
        function dA(r, s) {
          return r && r.length ? za(r, Jt(s, 3), !1, !0) : [];
        }
        function pA(r, s) {
          return r && r.length ? za(r, Jt(s, 3)) : [];
        }
        var hA = he(function(r) {
          return bi(gn(r, 1, tn, !0));
        }), EA = he(function(r) {
          var s = ir(r);
          return tn(s) && (s = n), bi(gn(r, 1, tn, !0), Jt(s, 2));
        }), gA = he(function(r) {
          var s = ir(r);
          return s = typeof s == "function" ? s : n, bi(gn(r, 1, tn, !0), n, s);
        });
        function vA(r) {
          return r && r.length ? bi(r) : [];
        }
        function mA(r, s) {
          return r && r.length ? bi(r, Jt(s, 2)) : [];
        }
        function _A(r, s) {
          return s = typeof s == "function" ? s : n, r && r.length ? bi(r, n, s) : [];
        }
        function Sf(r) {
          if (!(r && r.length))
            return [];
          var s = 0;
          return r = Ai(r, function(u) {
            if (tn(u))
              return s = an(u.length, s), !0;
          }), Bu(s, function(u) {
            return Ge(r, Pu(u));
          });
        }
        function mh(r, s) {
          if (!(r && r.length))
            return [];
          var u = Sf(r);
          return s == null ? u : Ge(u, function(E) {
            return Wn(s, n, E);
          });
        }
        var TA = he(function(r, s) {
          return tn(r) ? Oo(r, s) : [];
        }), AA = he(function(r) {
          return of(Ai(r, tn));
        }), SA = he(function(r) {
          var s = ir(r);
          return tn(s) && (s = n), of(Ai(r, tn), Jt(s, 2));
        }), yA = he(function(r) {
          var s = ir(r);
          return s = typeof s == "function" ? s : n, of(Ai(r, tn), n, s);
        }), OA = he(Sf);
        function RA(r, s) {
          return Up(r || [], s || [], yo);
        }
        function bA(r, s) {
          return Up(r || [], s || [], Io);
        }
        var IA = he(function(r) {
          var s = r.length, u = s > 1 ? r[s - 1] : n;
          return u = typeof u == "function" ? (r.pop(), u) : n, mh(r, u);
        });
        function _h(r) {
          var s = I(r);
          return s.__chain__ = !0, s;
        }
        function LA(r, s) {
          return s(r), r;
        }
        function el(r, s) {
          return s(r);
        }
        var CA = oi(function(r) {
          var s = r.length, u = s ? r[0] : 0, E = this.__wrapped__, A = function(C) {
            return zu(C, r);
          };
          return s > 1 || this.__actions__.length || !(E instanceof Te) || !ai(u) ? this.thru(A) : (E = E.slice(u, +u + (s ? 1 : 0)), E.__actions__.push({
            func: el,
            args: [A],
            thisArg: n
          }), new er(E, this.__chain__).thru(function(C) {
            return s && !C.length && C.push(n), C;
          }));
        });
        function NA() {
          return _h(this);
        }
        function xA() {
          return new er(this.value(), this.__chain__);
        }
        function wA() {
          this.__values__ === n && (this.__values__ = Mh(this.value()));
          var r = this.__index__ >= this.__values__.length, s = r ? n : this.__values__[this.__index__++];
          return { done: r, value: s };
        }
        function MA() {
          return this;
        }
        function DA(r) {
          for (var s, u = this; u instanceof Ha; ) {
            var E = dh(u);
            E.__index__ = 0, E.__values__ = n, s ? A.__wrapped__ = E : s = E;
            var A = E;
            u = u.__wrapped__;
          }
          return A.__wrapped__ = r, s;
        }
        function PA() {
          var r = this.__wrapped__;
          if (r instanceof Te) {
            var s = r;
            return this.__actions__.length && (s = new Te(this)), s = s.reverse(), s.__actions__.push({
              func: el,
              args: [Af],
              thisArg: n
            }), new er(s, this.__chain__);
          }
          return this.thru(Af);
        }
        function UA() {
          return Pp(this.__wrapped__, this.__actions__);
        }
        var kA = Ya(function(r, s, u) {
          xe.call(r, u) ? ++r[u] : ii(r, u, 1);
        });
        function BA(r, s, u) {
          var E = le(r) ? Kd : L_;
          return u && bn(r, s, u) && (s = n), E(r, Jt(s, 3));
        }
        function $A(r, s) {
          var u = le(r) ? Ai : mp;
          return u(r, Jt(s, 3));
        }
        var HA = zp(ph), FA = zp(hh);
        function WA(r, s) {
          return gn(nl(r, s), 1);
        }
        function VA(r, s) {
          return gn(nl(r, s), $);
        }
        function XA(r, s, u) {
          return u = u === n ? 1 : de(u), gn(nl(r, s), u);
        }
        function Th(r, s) {
          var u = le(r) ? Zn : Ri;
          return u(r, Jt(s, 3));
        }
        function Ah(r, s) {
          var u = le(r) ? u1 : vp;
          return u(r, Jt(s, 3));
        }
        var GA = Ya(function(r, s, u) {
          xe.call(r, u) ? r[u].push(s) : ii(r, u, [s]);
        });
        function zA(r, s, u, E) {
          r = xn(r) ? r : $s(r), u = u && !E ? de(u) : 0;
          var A = r.length;
          return u < 0 && (u = an(A + u, 0)), al(r) ? u <= A && r.indexOf(s, u) > -1 : !!A && Is(r, s, u) > -1;
        }
        var YA = he(function(r, s, u) {
          var E = -1, A = typeof s == "function", C = xn(r) ? et(r.length) : [];
          return Ri(r, function(H) {
            C[++E] = A ? Wn(s, H, u) : Ro(H, s, u);
          }), C;
        }), KA = Ya(function(r, s, u) {
          ii(r, u, s);
        });
        function nl(r, s) {
          var u = le(r) ? Ge : Op;
          return u(r, Jt(s, 3));
        }
        function jA(r, s, u, E) {
          return r == null ? [] : (le(s) || (s = s == null ? [] : [s]), u = E ? n : u, le(u) || (u = u == null ? [] : [u]), Lp(r, s, u));
        }
        var qA = Ya(function(r, s, u) {
          r[u ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function JA(r, s, u) {
          var E = le(r) ? Mu : Qd, A = arguments.length < 3;
          return E(r, Jt(s, 4), u, A, Ri);
        }
        function QA(r, s, u) {
          var E = le(r) ? f1 : Qd, A = arguments.length < 3;
          return E(r, Jt(s, 4), u, A, vp);
        }
        function ZA(r, s) {
          var u = le(r) ? Ai : mp;
          return u(r, sl(Jt(s, 3)));
        }
        function tS(r) {
          var s = le(r) ? pp : z_;
          return s(r);
        }
        function eS(r, s, u) {
          (u ? bn(r, s, u) : s === n) ? s = 1 : s = de(s);
          var E = le(r) ? y_ : Y_;
          return E(r, s);
        }
        function nS(r) {
          var s = le(r) ? O_ : j_;
          return s(r);
        }
        function rS(r) {
          if (r == null)
            return 0;
          if (xn(r))
            return al(r) ? Cs(r) : r.length;
          var s = An(r);
          return s == Wt || s == oe ? r.size : Qu(r).length;
        }
        function iS(r, s, u) {
          var E = le(r) ? Du : q_;
          return u && bn(r, s, u) && (s = n), E(r, Jt(s, 3));
        }
        var sS = he(function(r, s) {
          if (r == null)
            return [];
          var u = s.length;
          return u > 1 && bn(r, s[0], s[1]) ? s = [] : u > 2 && bn(s[0], s[1], s[2]) && (s = [s[0]]), Lp(r, gn(s, 1), []);
        }), rl = $1 || function() {
          return En.Date.now();
        };
        function oS(r, s) {
          if (typeof s != "function")
            throw new tr(l);
          return r = de(r), function() {
            if (--r < 1)
              return s.apply(this, arguments);
          };
        }
        function Sh(r, s, u) {
          return s = u ? n : s, s = r && s == null ? r.length : s, si(r, B, n, n, n, n, s);
        }
        function yh(r, s) {
          var u;
          if (typeof s != "function")
            throw new tr(l);
          return r = de(r), function() {
            return --r > 0 && (u = s.apply(this, arguments)), r <= 1 && (s = n), u;
          };
        }
        var yf = he(function(r, s, u) {
          var E = W;
          if (u.length) {
            var A = yi(u, ks(yf));
            E |= G;
          }
          return si(r, E, s, u, A);
        }), Oh = he(function(r, s, u) {
          var E = W | b;
          if (u.length) {
            var A = yi(u, ks(Oh));
            E |= G;
          }
          return si(s, E, r, u, A);
        });
        function Rh(r, s, u) {
          s = u ? n : s;
          var E = si(r, Z, n, n, n, n, n, s);
          return E.placeholder = Rh.placeholder, E;
        }
        function bh(r, s, u) {
          s = u ? n : s;
          var E = si(r, v, n, n, n, n, n, s);
          return E.placeholder = bh.placeholder, E;
        }
        function Ih(r, s, u) {
          var E, A, C, H, z, J, ft = 0, pt = !1, gt = !1, Ct = !0;
          if (typeof r != "function")
            throw new tr(l);
          s = sr(s) || 0, ze(u) && (pt = !!u.leading, gt = "maxWait" in u, C = gt ? an(sr(u.maxWait) || 0, s) : C, Ct = "trailing" in u ? !!u.trailing : Ct);
          function Vt(en) {
            var _r = E, fi = A;
            return E = A = n, ft = en, H = r.apply(fi, _r), H;
          }
          function Zt(en) {
            return ft = en, z = No(ge, s), pt ? Vt(en) : H;
          }
          function pe(en) {
            var _r = en - J, fi = en - ft, zh = s - _r;
            return gt ? Tn(zh, C - fi) : zh;
          }
          function te(en) {
            var _r = en - J, fi = en - ft;
            return J === n || _r >= s || _r < 0 || gt && fi >= C;
          }
          function ge() {
            var en = rl();
            if (te(en))
              return Ae(en);
            z = No(ge, pe(en));
          }
          function Ae(en) {
            return z = n, Ct && E ? Vt(en) : (E = A = n, H);
          }
          function zn() {
            z !== n && kp(z), ft = 0, E = J = A = z = n;
          }
          function In() {
            return z === n ? H : Ae(rl());
          }
          function Yn() {
            var en = rl(), _r = te(en);
            if (E = arguments, A = this, J = en, _r) {
              if (z === n)
                return Zt(J);
              if (gt)
                return kp(z), z = No(ge, s), Vt(J);
            }
            return z === n && (z = No(ge, s)), H;
          }
          return Yn.cancel = zn, Yn.flush = In, Yn;
        }
        var aS = he(function(r, s) {
          return gp(r, 1, s);
        }), lS = he(function(r, s, u) {
          return gp(r, sr(s) || 0, u);
        });
        function uS(r) {
          return si(r, y);
        }
        function il(r, s) {
          if (typeof r != "function" || s != null && typeof s != "function")
            throw new tr(l);
          var u = function() {
            var E = arguments, A = s ? s.apply(this, E) : E[0], C = u.cache;
            if (C.has(A))
              return C.get(A);
            var H = r.apply(this, E);
            return u.cache = C.set(A, H) || C, H;
          };
          return u.cache = new (il.Cache || ri)(), u;
        }
        il.Cache = ri;
        function sl(r) {
          if (typeof r != "function")
            throw new tr(l);
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, s[0]);
              case 2:
                return !r.call(this, s[0], s[1]);
              case 3:
                return !r.call(this, s[0], s[1], s[2]);
            }
            return !r.apply(this, s);
          };
        }
        function fS(r) {
          return yh(2, r);
        }
        var cS = J_(function(r, s) {
          s = s.length == 1 && le(s[0]) ? Ge(s[0], Vn(Jt())) : Ge(gn(s, 1), Vn(Jt()));
          var u = s.length;
          return he(function(E) {
            for (var A = -1, C = Tn(E.length, u); ++A < C; )
              E[A] = s[A].call(this, E[A]);
            return Wn(r, this, E);
          });
        }), Of = he(function(r, s) {
          var u = yi(s, ks(Of));
          return si(r, G, n, s, u);
        }), Lh = he(function(r, s) {
          var u = yi(s, ks(Lh));
          return si(r, L, n, s, u);
        }), dS = oi(function(r, s) {
          return si(r, U, n, n, n, s);
        });
        function pS(r, s) {
          if (typeof r != "function")
            throw new tr(l);
          return s = s === n ? s : de(s), he(r, s);
        }
        function hS(r, s) {
          if (typeof r != "function")
            throw new tr(l);
          return s = s == null ? 0 : an(de(s), 0), he(function(u) {
            var E = u[s], A = Li(u, 0, s);
            return E && Si(A, E), Wn(r, this, A);
          });
        }
        function ES(r, s, u) {
          var E = !0, A = !0;
          if (typeof r != "function")
            throw new tr(l);
          return ze(u) && (E = "leading" in u ? !!u.leading : E, A = "trailing" in u ? !!u.trailing : A), Ih(r, s, {
            leading: E,
            maxWait: s,
            trailing: A
          });
        }
        function gS(r) {
          return Sh(r, 1);
        }
        function vS(r, s) {
          return Of(lf(s), r);
        }
        function mS() {
          if (!arguments.length)
            return [];
          var r = arguments[0];
          return le(r) ? r : [r];
        }
        function _S(r) {
          return nr(r, x);
        }
        function TS(r, s) {
          return s = typeof s == "function" ? s : n, nr(r, x, s);
        }
        function AS(r) {
          return nr(r, _ | x);
        }
        function SS(r, s) {
          return s = typeof s == "function" ? s : n, nr(r, _ | x, s);
        }
        function yS(r, s) {
          return s == null || Ep(r, s, dn(s));
        }
        function mr(r, s) {
          return r === s || r !== r && s !== s;
        }
        var OS = Ja(ju), RS = Ja(function(r, s) {
          return r >= s;
        }), Zi = Ap(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ap : function(r) {
          return Je(r) && xe.call(r, "callee") && !ap.call(r, "callee");
        }, le = et.isArray, bS = Wd ? Vn(Wd) : D_;
        function xn(r) {
          return r != null && ol(r.length) && !li(r);
        }
        function tn(r) {
          return Je(r) && xn(r);
        }
        function IS(r) {
          return r === !0 || r === !1 || Je(r) && Rn(r) == bt;
        }
        var Ci = F1 || Pf, LS = Vd ? Vn(Vd) : P_;
        function CS(r) {
          return Je(r) && r.nodeType === 1 && !xo(r);
        }
        function NS(r) {
          if (r == null)
            return !0;
          if (xn(r) && (le(r) || typeof r == "string" || typeof r.splice == "function" || Ci(r) || Bs(r) || Zi(r)))
            return !r.length;
          var s = An(r);
          if (s == Wt || s == oe)
            return !r.size;
          if (Co(r))
            return !Qu(r).length;
          for (var u in r)
            if (xe.call(r, u))
              return !1;
          return !0;
        }
        function xS(r, s) {
          return bo(r, s);
        }
        function wS(r, s, u) {
          u = typeof u == "function" ? u : n;
          var E = u ? u(r, s) : n;
          return E === n ? bo(r, s, n, u) : !!E;
        }
        function Rf(r) {
          if (!Je(r))
            return !1;
          var s = Rn(r);
          return s == xt || s == Ft || typeof r.message == "string" && typeof r.name == "string" && !xo(r);
        }
        function MS(r) {
          return typeof r == "number" && up(r);
        }
        function li(r) {
          if (!ze(r))
            return !1;
          var s = Rn(r);
          return s == ue || s == He || s == Et || s == Dt;
        }
        function Ch(r) {
          return typeof r == "number" && r == de(r);
        }
        function ol(r) {
          return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ct;
        }
        function ze(r) {
          var s = typeof r;
          return r != null && (s == "object" || s == "function");
        }
        function Je(r) {
          return r != null && typeof r == "object";
        }
        var Nh = Xd ? Vn(Xd) : k_;
        function DS(r, s) {
          return r === s || Ju(r, s, Ef(s));
        }
        function PS(r, s, u) {
          return u = typeof u == "function" ? u : n, Ju(r, s, Ef(s), u);
        }
        function US(r) {
          return xh(r) && r != +r;
        }
        function kS(r) {
          if (TT(r))
            throw new ae(a);
          return Sp(r);
        }
        function BS(r) {
          return r === null;
        }
        function $S(r) {
          return r == null;
        }
        function xh(r) {
          return typeof r == "number" || Je(r) && Rn(r) == Mt;
        }
        function xo(r) {
          if (!Je(r) || Rn(r) != ne)
            return !1;
          var s = Ma(r);
          if (s === null)
            return !0;
          var u = xe.call(s, "constructor") && s.constructor;
          return typeof u == "function" && u instanceof u && Ca.call(u) == P1;
        }
        var bf = Gd ? Vn(Gd) : B_;
        function HS(r) {
          return Ch(r) && r >= -9007199254740991 && r <= ct;
        }
        var wh = zd ? Vn(zd) : $_;
        function al(r) {
          return typeof r == "string" || !le(r) && Je(r) && Rn(r) == we;
        }
        function Gn(r) {
          return typeof r == "symbol" || Je(r) && Rn(r) == Ne;
        }
        var Bs = Yd ? Vn(Yd) : H_;
        function FS(r) {
          return r === n;
        }
        function WS(r) {
          return Je(r) && An(r) == ln;
        }
        function VS(r) {
          return Je(r) && Rn(r) == un;
        }
        var XS = Ja(Zu), GS = Ja(function(r, s) {
          return r <= s;
        });
        function Mh(r) {
          if (!r)
            return [];
          if (xn(r))
            return al(r) ? gr(r) : Nn(r);
          if (mo && r[mo])
            return y1(r[mo]());
          var s = An(r), u = s == Wt ? Hu : s == oe ? ba : $s;
          return u(r);
        }
        function ui(r) {
          if (!r)
            return r === 0 ? r : 0;
          if (r = sr(r), r === $ || r === -1 / 0) {
            var s = r < 0 ? -1 : 1;
            return s * yt;
          }
          return r === r ? r : 0;
        }
        function de(r) {
          var s = ui(r), u = s % 1;
          return s === s ? u ? s - u : s : 0;
        }
        function Dh(r) {
          return r ? ji(de(r), 0, at) : 0;
        }
        function sr(r) {
          if (typeof r == "number")
            return r;
          if (Gn(r))
            return mt;
          if (ze(r)) {
            var s = typeof r.valueOf == "function" ? r.valueOf() : r;
            r = ze(s) ? s + "" : s;
          }
          if (typeof r != "string")
            return r === 0 ? r : +r;
          r = Zd(r);
          var u = Ss.test(r);
          return u || Su.test(r) ? o1(r.slice(2), u ? 2 : 8) : ga.test(r) ? mt : +r;
        }
        function Ph(r) {
          return Dr(r, wn(r));
        }
        function zS(r) {
          return r ? ji(de(r), -9007199254740991, ct) : r === 0 ? r : 0;
        }
        function Le(r) {
          return r == null ? "" : Xn(r);
        }
        var YS = Ps(function(r, s) {
          if (Co(s) || xn(s)) {
            Dr(s, dn(s), r);
            return;
          }
          for (var u in s)
            xe.call(s, u) && yo(r, u, s[u]);
        }), Uh = Ps(function(r, s) {
          Dr(s, wn(s), r);
        }), ll = Ps(function(r, s, u, E) {
          Dr(s, wn(s), r, E);
        }), KS = Ps(function(r, s, u, E) {
          Dr(s, dn(s), r, E);
        }), jS = oi(zu);
        function qS(r, s) {
          var u = Ds(r);
          return s == null ? u : hp(u, s);
        }
        var JS = he(function(r, s) {
          r = ke(r);
          var u = -1, E = s.length, A = E > 2 ? s[2] : n;
          for (A && bn(s[0], s[1], A) && (E = 1); ++u < E; )
            for (var C = s[u], H = wn(C), z = -1, J = H.length; ++z < J; ) {
              var ft = H[z], pt = r[ft];
              (pt === n || mr(pt, xs[ft]) && !xe.call(r, ft)) && (r[ft] = C[ft]);
            }
          return r;
        }), QS = he(function(r) {
          return r.push(n, Zp), Wn(kh, n, r);
        });
        function ZS(r, s) {
          return jd(r, Jt(s, 3), Mr);
        }
        function ty(r, s) {
          return jd(r, Jt(s, 3), Ku);
        }
        function ey(r, s) {
          return r == null ? r : Yu(r, Jt(s, 3), wn);
        }
        function ny(r, s) {
          return r == null ? r : _p(r, Jt(s, 3), wn);
        }
        function ry(r, s) {
          return r && Mr(r, Jt(s, 3));
        }
        function iy(r, s) {
          return r && Ku(r, Jt(s, 3));
        }
        function sy(r) {
          return r == null ? [] : Va(r, dn(r));
        }
        function oy(r) {
          return r == null ? [] : Va(r, wn(r));
        }
        function If(r, s, u) {
          var E = r == null ? n : qi(r, s);
          return E === n ? u : E;
        }
        function ay(r, s) {
          return r != null && nh(r, s, N_);
        }
        function Lf(r, s) {
          return r != null && nh(r, s, x_);
        }
        var ly = Kp(function(r, s, u) {
          s != null && typeof s.toString != "function" && (s = Na.call(s)), r[s] = u;
        }, Nf(Mn)), uy = Kp(function(r, s, u) {
          s != null && typeof s.toString != "function" && (s = Na.call(s)), xe.call(r, s) ? r[s].push(u) : r[s] = [u];
        }, Jt), fy = he(Ro);
        function dn(r) {
          return xn(r) ? dp(r) : Qu(r);
        }
        function wn(r) {
          return xn(r) ? dp(r, !0) : F_(r);
        }
        function cy(r, s) {
          var u = {};
          return s = Jt(s, 3), Mr(r, function(E, A, C) {
            ii(u, s(E, A, C), E);
          }), u;
        }
        function dy(r, s) {
          var u = {};
          return s = Jt(s, 3), Mr(r, function(E, A, C) {
            ii(u, A, s(E, A, C));
          }), u;
        }
        var py = Ps(function(r, s, u) {
          Xa(r, s, u);
        }), kh = Ps(function(r, s, u, E) {
          Xa(r, s, u, E);
        }), hy = oi(function(r, s) {
          var u = {};
          if (r == null)
            return u;
          var E = !1;
          s = Ge(s, function(C) {
            return C = Ii(C, r), E || (E = C.length > 1), C;
          }), Dr(r, pf(r), u), E && (u = nr(u, _ | R | x, lT));
          for (var A = s.length; A--; )
            sf(u, s[A]);
          return u;
        });
        function Ey(r, s) {
          return Bh(r, sl(Jt(s)));
        }
        var gy = oi(function(r, s) {
          return r == null ? {} : V_(r, s);
        });
        function Bh(r, s) {
          if (r == null)
            return {};
          var u = Ge(pf(r), function(E) {
            return [E];
          });
          return s = Jt(s), Cp(r, u, function(E, A) {
            return s(E, A[0]);
          });
        }
        function vy(r, s, u) {
          s = Ii(s, r);
          var E = -1, A = s.length;
          for (A || (A = 1, r = n); ++E < A; ) {
            var C = r == null ? n : r[Pr(s[E])];
            C === n && (E = A, C = u), r = li(C) ? C.call(r) : C;
          }
          return r;
        }
        function my(r, s, u) {
          return r == null ? r : Io(r, s, u);
        }
        function _y(r, s, u, E) {
          return E = typeof E == "function" ? E : n, r == null ? r : Io(r, s, u, E);
        }
        var $h = Jp(dn), Hh = Jp(wn);
        function Ty(r, s, u) {
          var E = le(r), A = E || Ci(r) || Bs(r);
          if (s = Jt(s, 4), u == null) {
            var C = r && r.constructor;
            A ? u = E ? new C() : [] : ze(r) ? u = li(C) ? Ds(Ma(r)) : {} : u = {};
          }
          return (A ? Zn : Mr)(r, function(H, z, J) {
            return s(u, H, z, J);
          }), u;
        }
        function Ay(r, s) {
          return r == null ? !0 : sf(r, s);
        }
        function Sy(r, s, u) {
          return r == null ? r : Dp(r, s, lf(u));
        }
        function yy(r, s, u, E) {
          return E = typeof E == "function" ? E : n, r == null ? r : Dp(r, s, lf(u), E);
        }
        function $s(r) {
          return r == null ? [] : $u(r, dn(r));
        }
        function Oy(r) {
          return r == null ? [] : $u(r, wn(r));
        }
        function Ry(r, s, u) {
          return u === n && (u = s, s = n), u !== n && (u = sr(u), u = u === u ? u : 0), s !== n && (s = sr(s), s = s === s ? s : 0), ji(sr(r), s, u);
        }
        function by(r, s, u) {
          return s = ui(s), u === n ? (u = s, s = 0) : u = ui(u), r = sr(r), w_(r, s, u);
        }
        function Iy(r, s, u) {
          if (u && typeof u != "boolean" && bn(r, s, u) && (s = u = n), u === n && (typeof s == "boolean" ? (u = s, s = n) : typeof r == "boolean" && (u = r, r = n)), r === n && s === n ? (r = 0, s = 1) : (r = ui(r), s === n ? (s = r, r = 0) : s = ui(s)), r > s) {
            var E = r;
            r = s, s = E;
          }
          if (u || r % 1 || s % 1) {
            var A = fp();
            return Tn(r + A * (s - r + s1("1e-" + ((A + "").length - 1))), s);
          }
          return ef(r, s);
        }
        var Ly = Us(function(r, s, u) {
          return s = s.toLowerCase(), r + (u ? Fh(s) : s);
        });
        function Fh(r) {
          return Cf(Le(r).toLowerCase());
        }
        function Wh(r) {
          return r = Le(r), r && r.replace(xr, m1).replace(Lu, "");
        }
        function Cy(r, s, u) {
          r = Le(r), s = Xn(s);
          var E = r.length;
          u = u === n ? E : ji(de(u), 0, E);
          var A = u;
          return u -= s.length, u >= 0 && r.slice(u, A) == s;
        }
        function Ny(r) {
          return r = Le(r), r && X.test(r) ? r.replace(pr, _1) : r;
        }
        function xy(r) {
          return r = Le(r), r && re.test(r) ? r.replace(wt, "\\$&") : r;
        }
        var wy = Us(function(r, s, u) {
          return r + (u ? "-" : "") + s.toLowerCase();
        }), My = Us(function(r, s, u) {
          return r + (u ? " " : "") + s.toLowerCase();
        }), Dy = Gp("toLowerCase");
        function Py(r, s, u) {
          r = Le(r), s = de(s);
          var E = s ? Cs(r) : 0;
          if (!s || E >= s)
            return r;
          var A = (s - E) / 2;
          return qa(ka(A), u) + r + qa(Ua(A), u);
        }
        function Uy(r, s, u) {
          r = Le(r), s = de(s);
          var E = s ? Cs(r) : 0;
          return s && E < s ? r + qa(s - E, u) : r;
        }
        function ky(r, s, u) {
          r = Le(r), s = de(s);
          var E = s ? Cs(r) : 0;
          return s && E < s ? qa(s - E, u) + r : r;
        }
        function By(r, s, u) {
          return u || s == null ? s = 0 : s && (s = +s), G1(Le(r).replace(je, ""), s || 0);
        }
        function $y(r, s, u) {
          return (u ? bn(r, s, u) : s === n) ? s = 1 : s = de(s), nf(Le(r), s);
        }
        function Hy() {
          var r = arguments, s = Le(r[0]);
          return r.length < 3 ? s : s.replace(r[1], r[2]);
        }
        var Fy = Us(function(r, s, u) {
          return r + (u ? "_" : "") + s.toLowerCase();
        });
        function Wy(r, s, u) {
          return u && typeof u != "number" && bn(r, s, u) && (s = u = n), u = u === n ? at : u >>> 0, u ? (r = Le(r), r && (typeof s == "string" || s != null && !bf(s)) && (s = Xn(s), !s && Ls(r)) ? Li(gr(r), 0, u) : r.split(s, u)) : [];
        }
        var Vy = Us(function(r, s, u) {
          return r + (u ? " " : "") + Cf(s);
        });
        function Xy(r, s, u) {
          return r = Le(r), u = u == null ? 0 : ji(de(u), 0, r.length), s = Xn(s), r.slice(u, u + s.length) == s;
        }
        function Gy(r, s, u) {
          var E = I.templateSettings;
          u && bn(r, s, u) && (s = n), r = Le(r), s = ll({}, s, E, Qp);
          var A = ll({}, s.imports, E.imports, Qp), C = dn(A), H = $u(A, C), z, J, ft = 0, pt = s.interpolate || Hi, gt = "__p += '", Ct = Fu(
            (s.escape || Hi).source + "|" + pt.source + "|" + (pt === qt ? Tu : Hi).source + "|" + (s.evaluate || Hi).source + "|$",
            "g"
          ), Vt = "//# sourceURL=" + (xe.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++t1 + "]") + `
`;
          r.replace(Ct, function(te, ge, Ae, zn, In, Yn) {
            return Ae || (Ae = zn), gt += r.slice(ft, Yn).replace(va, T1), ge && (z = !0, gt += `' +
__e(` + ge + `) +
'`), In && (J = !0, gt += `';
` + In + `;
__p += '`), Ae && (gt += `' +
((__t = (` + Ae + `)) == null ? '' : __t) +
'`), ft = Yn + te.length, te;
          }), gt += `';
`;
          var Zt = xe.call(s, "variable") && s.variable;
          if (!Zt)
            gt = `with (obj) {
` + gt + `
}
`;
          else if (po.test(Zt))
            throw new ae(f);
          gt = (J ? gt.replace(Nt, "") : gt).replace(_e, "$1").replace(Ie, "$1;"), gt = "function(" + (Zt || "obj") + `) {
` + (Zt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (z ? ", __e = _.escape" : "") + (J ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + gt + `return __p
}`;
          var pe = Xh(function() {
            return be(C, Vt + "return " + gt).apply(n, H);
          });
          if (pe.source = gt, Rf(pe))
            throw pe;
          return pe;
        }
        function zy(r) {
          return Le(r).toLowerCase();
        }
        function Yy(r) {
          return Le(r).toUpperCase();
        }
        function Ky(r, s, u) {
          if (r = Le(r), r && (u || s === n))
            return Zd(r);
          if (!r || !(s = Xn(s)))
            return r;
          var E = gr(r), A = gr(s), C = tp(E, A), H = ep(E, A) + 1;
          return Li(E, C, H).join("");
        }
        function jy(r, s, u) {
          if (r = Le(r), r && (u || s === n))
            return r.slice(0, rp(r) + 1);
          if (!r || !(s = Xn(s)))
            return r;
          var E = gr(r), A = ep(E, gr(s)) + 1;
          return Li(E, 0, A).join("");
        }
        function qy(r, s, u) {
          if (r = Le(r), r && (u || s === n))
            return r.replace(je, "");
          if (!r || !(s = Xn(s)))
            return r;
          var E = gr(r), A = tp(E, gr(s));
          return Li(E, A).join("");
        }
        function Jy(r, s) {
          var u = tt, E = F;
          if (ze(s)) {
            var A = "separator" in s ? s.separator : A;
            u = "length" in s ? de(s.length) : u, E = "omission" in s ? Xn(s.omission) : E;
          }
          r = Le(r);
          var C = r.length;
          if (Ls(r)) {
            var H = gr(r);
            C = H.length;
          }
          if (u >= C)
            return r;
          var z = u - Cs(E);
          if (z < 1)
            return E;
          var J = H ? Li(H, 0, z).join("") : r.slice(0, z);
          if (A === n)
            return J + E;
          if (H && (z += J.length - z), bf(A)) {
            if (r.slice(z).search(A)) {
              var ft, pt = J;
              for (A.global || (A = Fu(A.source, Le(Ea.exec(A)) + "g")), A.lastIndex = 0; ft = A.exec(pt); )
                var gt = ft.index;
              J = J.slice(0, gt === n ? z : gt);
            }
          } else if (r.indexOf(Xn(A), z) != z) {
            var Ct = J.lastIndexOf(A);
            Ct > -1 && (J = J.slice(0, Ct));
          }
          return J + E;
        }
        function Qy(r) {
          return r = Le(r), r && Xe.test(r) ? r.replace(fn, I1) : r;
        }
        var Zy = Us(function(r, s, u) {
          return r + (u ? " " : "") + s.toUpperCase();
        }), Cf = Gp("toUpperCase");
        function Vh(r, s, u) {
          return r = Le(r), s = u ? n : s, s === n ? S1(r) ? N1(r) : p1(r) : r.match(s) || [];
        }
        var Xh = he(function(r, s) {
          try {
            return Wn(r, n, s);
          } catch (u) {
            return Rf(u) ? u : new ae(u);
          }
        }), tO = oi(function(r, s) {
          return Zn(s, function(u) {
            u = Pr(u), ii(r, u, yf(r[u], r));
          }), r;
        });
        function eO(r) {
          var s = r == null ? 0 : r.length, u = Jt();
          return r = s ? Ge(r, function(E) {
            if (typeof E[1] != "function")
              throw new tr(l);
            return [u(E[0]), E[1]];
          }) : [], he(function(E) {
            for (var A = -1; ++A < s; ) {
              var C = r[A];
              if (Wn(C[0], this, E))
                return Wn(C[1], this, E);
            }
          });
        }
        function nO(r) {
          return I_(nr(r, _));
        }
        function Nf(r) {
          return function() {
            return r;
          };
        }
        function rO(r, s) {
          return r == null || r !== r ? s : r;
        }
        var iO = Yp(), sO = Yp(!0);
        function Mn(r) {
          return r;
        }
        function xf(r) {
          return yp(typeof r == "function" ? r : nr(r, _));
        }
        function oO(r) {
          return Rp(nr(r, _));
        }
        function aO(r, s) {
          return bp(r, nr(s, _));
        }
        var lO = he(function(r, s) {
          return function(u) {
            return Ro(u, r, s);
          };
        }), uO = he(function(r, s) {
          return function(u) {
            return Ro(r, u, s);
          };
        });
        function wf(r, s, u) {
          var E = dn(s), A = Va(s, E);
          u == null && !(ze(s) && (A.length || !E.length)) && (u = s, s = r, r = this, A = Va(s, dn(s)));
          var C = !(ze(u) && "chain" in u) || !!u.chain, H = li(r);
          return Zn(A, function(z) {
            var J = s[z];
            r[z] = J, H && (r.prototype[z] = function() {
              var ft = this.__chain__;
              if (C || ft) {
                var pt = r(this.__wrapped__), gt = pt.__actions__ = Nn(this.__actions__);
                return gt.push({ func: J, args: arguments, thisArg: r }), pt.__chain__ = ft, pt;
              }
              return J.apply(r, Si([this.value()], arguments));
            });
          }), r;
        }
        function fO() {
          return En._ === this && (En._ = U1), this;
        }
        function Mf() {
        }
        function cO(r) {
          return r = de(r), he(function(s) {
            return Ip(s, r);
          });
        }
        var dO = ff(Ge), pO = ff(Kd), hO = ff(Du);
        function Gh(r) {
          return vf(r) ? Pu(Pr(r)) : X_(r);
        }
        function EO(r) {
          return function(s) {
            return r == null ? n : qi(r, s);
          };
        }
        var gO = jp(), vO = jp(!0);
        function Df() {
          return [];
        }
        function Pf() {
          return !1;
        }
        function mO() {
          return {};
        }
        function _O() {
          return "";
        }
        function TO() {
          return !0;
        }
        function AO(r, s) {
          if (r = de(r), r < 1 || r > ct)
            return [];
          var u = at, E = Tn(r, at);
          s = Jt(s), r -= at;
          for (var A = Bu(E, s); ++u < r; )
            s(u);
          return A;
        }
        function SO(r) {
          return le(r) ? Ge(r, Pr) : Gn(r) ? [r] : Nn(ch(Le(r)));
        }
        function yO(r) {
          var s = ++D1;
          return Le(r) + s;
        }
        var OO = ja(function(r, s) {
          return r + s;
        }, 0), RO = cf("ceil"), bO = ja(function(r, s) {
          return r / s;
        }, 1), IO = cf("floor");
        function LO(r) {
          return r && r.length ? Wa(r, Mn, ju) : n;
        }
        function CO(r, s) {
          return r && r.length ? Wa(r, Jt(s, 2), ju) : n;
        }
        function NO(r) {
          return Jd(r, Mn);
        }
        function xO(r, s) {
          return Jd(r, Jt(s, 2));
        }
        function wO(r) {
          return r && r.length ? Wa(r, Mn, Zu) : n;
        }
        function MO(r, s) {
          return r && r.length ? Wa(r, Jt(s, 2), Zu) : n;
        }
        var DO = ja(function(r, s) {
          return r * s;
        }, 1), PO = cf("round"), UO = ja(function(r, s) {
          return r - s;
        }, 0);
        function kO(r) {
          return r && r.length ? ku(r, Mn) : 0;
        }
        function BO(r, s) {
          return r && r.length ? ku(r, Jt(s, 2)) : 0;
        }
        return I.after = oS, I.ary = Sh, I.assign = YS, I.assignIn = Uh, I.assignInWith = ll, I.assignWith = KS, I.at = jS, I.before = yh, I.bind = yf, I.bindAll = tO, I.bindKey = Oh, I.castArray = mS, I.chain = _h, I.chunk = IT, I.compact = LT, I.concat = CT, I.cond = eO, I.conforms = nO, I.constant = Nf, I.countBy = kA, I.create = qS, I.curry = Rh, I.curryRight = bh, I.debounce = Ih, I.defaults = JS, I.defaultsDeep = QS, I.defer = aS, I.delay = lS, I.difference = NT, I.differenceBy = xT, I.differenceWith = wT, I.drop = MT, I.dropRight = DT, I.dropRightWhile = PT, I.dropWhile = UT, I.fill = kT, I.filter = $A, I.flatMap = WA, I.flatMapDeep = VA, I.flatMapDepth = XA, I.flatten = Eh, I.flattenDeep = BT, I.flattenDepth = $T, I.flip = uS, I.flow = iO, I.flowRight = sO, I.fromPairs = HT, I.functions = sy, I.functionsIn = oy, I.groupBy = GA, I.initial = WT, I.intersection = VT, I.intersectionBy = XT, I.intersectionWith = GT, I.invert = ly, I.invertBy = uy, I.invokeMap = YA, I.iteratee = xf, I.keyBy = KA, I.keys = dn, I.keysIn = wn, I.map = nl, I.mapKeys = cy, I.mapValues = dy, I.matches = oO, I.matchesProperty = aO, I.memoize = il, I.merge = py, I.mergeWith = kh, I.method = lO, I.methodOf = uO, I.mixin = wf, I.negate = sl, I.nthArg = cO, I.omit = hy, I.omitBy = Ey, I.once = fS, I.orderBy = jA, I.over = dO, I.overArgs = cS, I.overEvery = pO, I.overSome = hO, I.partial = Of, I.partialRight = Lh, I.partition = qA, I.pick = gy, I.pickBy = Bh, I.property = Gh, I.propertyOf = EO, I.pull = jT, I.pullAll = vh, I.pullAllBy = qT, I.pullAllWith = JT, I.pullAt = QT, I.range = gO, I.rangeRight = vO, I.rearg = dS, I.reject = ZA, I.remove = ZT, I.rest = pS, I.reverse = Af, I.sampleSize = eS, I.set = my, I.setWith = _y, I.shuffle = nS, I.slice = tA, I.sortBy = sS, I.sortedUniq = aA, I.sortedUniqBy = lA, I.split = Wy, I.spread = hS, I.tail = uA, I.take = fA, I.takeRight = cA, I.takeRightWhile = dA, I.takeWhile = pA, I.tap = LA, I.throttle = ES, I.thru = el, I.toArray = Mh, I.toPairs = $h, I.toPairsIn = Hh, I.toPath = SO, I.toPlainObject = Ph, I.transform = Ty, I.unary = gS, I.union = hA, I.unionBy = EA, I.unionWith = gA, I.uniq = vA, I.uniqBy = mA, I.uniqWith = _A, I.unset = Ay, I.unzip = Sf, I.unzipWith = mh, I.update = Sy, I.updateWith = yy, I.values = $s, I.valuesIn = Oy, I.without = TA, I.words = Vh, I.wrap = vS, I.xor = AA, I.xorBy = SA, I.xorWith = yA, I.zip = OA, I.zipObject = RA, I.zipObjectDeep = bA, I.zipWith = IA, I.entries = $h, I.entriesIn = Hh, I.extend = Uh, I.extendWith = ll, wf(I, I), I.add = OO, I.attempt = Xh, I.camelCase = Ly, I.capitalize = Fh, I.ceil = RO, I.clamp = Ry, I.clone = _S, I.cloneDeep = AS, I.cloneDeepWith = SS, I.cloneWith = TS, I.conformsTo = yS, I.deburr = Wh, I.defaultTo = rO, I.divide = bO, I.endsWith = Cy, I.eq = mr, I.escape = Ny, I.escapeRegExp = xy, I.every = BA, I.find = HA, I.findIndex = ph, I.findKey = ZS, I.findLast = FA, I.findLastIndex = hh, I.findLastKey = ty, I.floor = IO, I.forEach = Th, I.forEachRight = Ah, I.forIn = ey, I.forInRight = ny, I.forOwn = ry, I.forOwnRight = iy, I.get = If, I.gt = OS, I.gte = RS, I.has = ay, I.hasIn = Lf, I.head = gh, I.identity = Mn, I.includes = zA, I.indexOf = FT, I.inRange = by, I.invoke = fy, I.isArguments = Zi, I.isArray = le, I.isArrayBuffer = bS, I.isArrayLike = xn, I.isArrayLikeObject = tn, I.isBoolean = IS, I.isBuffer = Ci, I.isDate = LS, I.isElement = CS, I.isEmpty = NS, I.isEqual = xS, I.isEqualWith = wS, I.isError = Rf, I.isFinite = MS, I.isFunction = li, I.isInteger = Ch, I.isLength = ol, I.isMap = Nh, I.isMatch = DS, I.isMatchWith = PS, I.isNaN = US, I.isNative = kS, I.isNil = $S, I.isNull = BS, I.isNumber = xh, I.isObject = ze, I.isObjectLike = Je, I.isPlainObject = xo, I.isRegExp = bf, I.isSafeInteger = HS, I.isSet = wh, I.isString = al, I.isSymbol = Gn, I.isTypedArray = Bs, I.isUndefined = FS, I.isWeakMap = WS, I.isWeakSet = VS, I.join = zT, I.kebabCase = wy, I.last = ir, I.lastIndexOf = YT, I.lowerCase = My, I.lowerFirst = Dy, I.lt = XS, I.lte = GS, I.max = LO, I.maxBy = CO, I.mean = NO, I.meanBy = xO, I.min = wO, I.minBy = MO, I.stubArray = Df, I.stubFalse = Pf, I.stubObject = mO, I.stubString = _O, I.stubTrue = TO, I.multiply = DO, I.nth = KT, I.noConflict = fO, I.noop = Mf, I.now = rl, I.pad = Py, I.padEnd = Uy, I.padStart = ky, I.parseInt = By, I.random = Iy, I.reduce = JA, I.reduceRight = QA, I.repeat = $y, I.replace = Hy, I.result = vy, I.round = PO, I.runInContext = j, I.sample = tS, I.size = rS, I.snakeCase = Fy, I.some = iS, I.sortedIndex = eA, I.sortedIndexBy = nA, I.sortedIndexOf = rA, I.sortedLastIndex = iA, I.sortedLastIndexBy = sA, I.sortedLastIndexOf = oA, I.startCase = Vy, I.startsWith = Xy, I.subtract = UO, I.sum = kO, I.sumBy = BO, I.template = Gy, I.times = AO, I.toFinite = ui, I.toInteger = de, I.toLength = Dh, I.toLower = zy, I.toNumber = sr, I.toSafeInteger = zS, I.toString = Le, I.toUpper = Yy, I.trim = Ky, I.trimEnd = jy, I.trimStart = qy, I.truncate = Jy, I.unescape = Qy, I.uniqueId = yO, I.upperCase = Zy, I.upperFirst = Cf, I.each = Th, I.eachRight = Ah, I.first = gh, wf(I, function() {
          var r = {};
          return Mr(I, function(s, u) {
            xe.call(I.prototype, u) || (r[u] = s);
          }), r;
        }(), { chain: !1 }), I.VERSION = i, Zn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
          I[r].placeholder = I;
        }), Zn(["drop", "take"], function(r, s) {
          Te.prototype[r] = function(u) {
            u = u === n ? 1 : an(de(u), 0);
            var E = this.__filtered__ && !s ? new Te(this) : this.clone();
            return E.__filtered__ ? E.__takeCount__ = Tn(u, E.__takeCount__) : E.__views__.push({
              size: Tn(u, at),
              type: r + (E.__dir__ < 0 ? "Right" : "")
            }), E;
          }, Te.prototype[r + "Right"] = function(u) {
            return this.reverse()[r](u).reverse();
          };
        }), Zn(["filter", "map", "takeWhile"], function(r, s) {
          var u = s + 1, E = u == Y || u == V;
          Te.prototype[r] = function(A) {
            var C = this.clone();
            return C.__iteratees__.push({
              iteratee: Jt(A, 3),
              type: u
            }), C.__filtered__ = C.__filtered__ || E, C;
          };
        }), Zn(["head", "last"], function(r, s) {
          var u = "take" + (s ? "Right" : "");
          Te.prototype[r] = function() {
            return this[u](1).value()[0];
          };
        }), Zn(["initial", "tail"], function(r, s) {
          var u = "drop" + (s ? "" : "Right");
          Te.prototype[r] = function() {
            return this.__filtered__ ? new Te(this) : this[u](1);
          };
        }), Te.prototype.compact = function() {
          return this.filter(Mn);
        }, Te.prototype.find = function(r) {
          return this.filter(r).head();
        }, Te.prototype.findLast = function(r) {
          return this.reverse().find(r);
        }, Te.prototype.invokeMap = he(function(r, s) {
          return typeof r == "function" ? new Te(this) : this.map(function(u) {
            return Ro(u, r, s);
          });
        }), Te.prototype.reject = function(r) {
          return this.filter(sl(Jt(r)));
        }, Te.prototype.slice = function(r, s) {
          r = de(r);
          var u = this;
          return u.__filtered__ && (r > 0 || s < 0) ? new Te(u) : (r < 0 ? u = u.takeRight(-r) : r && (u = u.drop(r)), s !== n && (s = de(s), u = s < 0 ? u.dropRight(-s) : u.take(s - r)), u);
        }, Te.prototype.takeRightWhile = function(r) {
          return this.reverse().takeWhile(r).reverse();
        }, Te.prototype.toArray = function() {
          return this.take(at);
        }, Mr(Te.prototype, function(r, s) {
          var u = /^(?:filter|find|map|reject)|While$/.test(s), E = /^(?:head|last)$/.test(s), A = I[E ? "take" + (s == "last" ? "Right" : "") : s], C = E || /^find/.test(s);
          A && (I.prototype[s] = function() {
            var H = this.__wrapped__, z = E ? [1] : arguments, J = H instanceof Te, ft = z[0], pt = J || le(H), gt = function(ge) {
              var Ae = A.apply(I, Si([ge], z));
              return E && Ct ? Ae[0] : Ae;
            };
            pt && u && typeof ft == "function" && ft.length != 1 && (J = pt = !1);
            var Ct = this.__chain__, Vt = !!this.__actions__.length, Zt = C && !Ct, pe = J && !Vt;
            if (!C && pt) {
              H = pe ? H : new Te(this);
              var te = r.apply(H, z);
              return te.__actions__.push({ func: el, args: [gt], thisArg: n }), new er(te, Ct);
            }
            return Zt && pe ? r.apply(this, z) : (te = this.thru(gt), Zt ? E ? te.value()[0] : te.value() : te);
          });
        }), Zn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
          var s = Ia[r], u = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", E = /^(?:pop|shift)$/.test(r);
          I.prototype[r] = function() {
            var A = arguments;
            if (E && !this.__chain__) {
              var C = this.value();
              return s.apply(le(C) ? C : [], A);
            }
            return this[u](function(H) {
              return s.apply(le(H) ? H : [], A);
            });
          };
        }), Mr(Te.prototype, function(r, s) {
          var u = I[s];
          if (u) {
            var E = u.name + "";
            xe.call(Ms, E) || (Ms[E] = []), Ms[E].push({ name: s, func: u });
          }
        }), Ms[Ka(n, b).name] = [{
          name: "wrapper",
          func: n
        }], Te.prototype.clone = Q1, Te.prototype.reverse = Z1, Te.prototype.value = t_, I.prototype.at = CA, I.prototype.chain = NA, I.prototype.commit = xA, I.prototype.next = wA, I.prototype.plant = DA, I.prototype.reverse = PA, I.prototype.toJSON = I.prototype.valueOf = I.prototype.value = UA, I.prototype.first = I.prototype.head, mo && (I.prototype[mo] = MA), I;
      }, Ns = x1();
      Gi ? ((Gi.exports = Ns)._ = Ns, Nu._ = Ns) : En._ = Ns;
    }).call(YO);
  }(ko, ko.exports)), ko.exports;
}
var jO = KO();
const K = /* @__PURE__ */ nu(jO), qO = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "splitpanes",
  emits: ["ready", "resize", "resized", "pane-click", "pane-maximize", "pane-add", "pane-remove", "splitter-click"],
  props: {
    horizontal: { type: Boolean },
    pushOtherPanes: { type: Boolean, default: !0 },
    dblClickSplitter: { type: Boolean, default: !0 },
    rtl: { type: Boolean, default: !1 },
    // Right to left direction.
    firstSplitter: { type: Boolean }
  },
  provide() {
    return {
      requestUpdate: this.requestUpdate,
      onPaneAdd: this.onPaneAdd,
      onPaneRemove: this.onPaneRemove,
      onPaneClick: this.onPaneClick
    };
  },
  data: () => ({
    container: null,
    ready: !1,
    panes: [],
    touch: {
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null
    },
    splitterTaps: {
      // Used to detect double click on touch devices.
      splitter: null,
      timeoutId: null
    }
  }),
  computed: {
    panesCount() {
      return this.panes.length;
    },
    // Indexed panes by `uid` of Pane components for fast lookup.
    // Every time a pane is destroyed this index is recomputed.
    indexedPanes() {
      return this.panes.reduce((t, e) => (t[e.id] = e) && t, {});
    }
  },
  methods: {
    updatePaneComponents() {
      this.panes.forEach((t) => {
        t.update && t.update({
          // Panes are indexed by Pane component uid, as they might be inserted at different index.
          [this.horizontal ? "height" : "width"]: `${this.indexedPanes[t.id].size}%`
        });
      });
    },
    bindEvents() {
      document.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), document.addEventListener("mouseup", this.onMouseUp), "ontouchstart" in window && (document.addEventListener("touchmove", this.onMouseMove, { passive: !1 }), document.addEventListener("touchend", this.onMouseUp));
    },
    unbindEvents() {
      document.removeEventListener("mousemove", this.onMouseMove, { passive: !1 }), document.removeEventListener("mouseup", this.onMouseUp), "ontouchstart" in window && (document.removeEventListener("touchmove", this.onMouseMove, { passive: !1 }), document.removeEventListener("touchend", this.onMouseUp));
    },
    onMouseDown(t, e) {
      this.bindEvents(), this.touch.mouseDown = !0, this.touch.activeSplitter = e;
    },
    onMouseMove(t) {
      this.touch.mouseDown && (t.preventDefault(), this.touch.dragging = !0, this.calculatePanesSize(this.getCurrentMouseDrag(t)), this.$emit("resize", this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size }))));
    },
    onMouseUp() {
      this.touch.dragging && this.$emit("resized", this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size }))), this.touch.mouseDown = !1, setTimeout(() => {
        this.touch.dragging = !1, this.unbindEvents();
      }, 100);
    },
    // If touch device, detect double tap manually (2 taps separated by less than 500ms).
    onSplitterClick(t, e) {
      "ontouchstart" in window && (t.preventDefault(), this.dblClickSplitter && (this.splitterTaps.splitter === e ? (clearTimeout(this.splitterTaps.timeoutId), this.splitterTaps.timeoutId = null, this.onSplitterDblClick(t, e), this.splitterTaps.splitter = null) : (this.splitterTaps.splitter = e, this.splitterTaps.timeoutId = setTimeout(() => {
        this.splitterTaps.splitter = null;
      }, 500)))), this.touch.dragging || this.$emit("splitter-click", this.panes[e]);
    },
    // On splitter dbl click or dbl tap maximize this pane.
    onSplitterDblClick(t, e) {
      let n = 0;
      this.panes = this.panes.map((i, o) => (i.size = o === e ? i.max : i.min, o !== e && (n += i.min), i)), this.panes[e].size -= n, this.$emit("pane-maximize", this.panes[e]), this.$emit("resized", this.panes.map((i) => ({ min: i.min, max: i.max, size: i.size })));
    },
    onPaneClick(t, e) {
      this.$emit("pane-click", this.indexedPanes[e]);
    },
    // Get the cursor position relative to the splitpane container.
    getCurrentMouseDrag(t) {
      const e = this.container.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && t.touches ? t.touches[0] : t;
      return {
        x: n - e.left,
        y: i - e.top
      };
    },
    // Returns the drag percentage of the splitter relative to the container (ranging from 0 to 100%).
    getCurrentDragPercentage(t) {
      t = t[this.horizontal ? "y" : "x"];
      const e = this.container[this.horizontal ? "clientHeight" : "clientWidth"];
      return this.rtl && !this.horizontal && (t = e - t), t * 100 / e;
    },
    calculatePanesSize(t) {
      const e = this.touch.activeSplitter;
      let n = {
        prevPanesSize: this.sumPrevPanesSize(e),
        nextPanesSize: this.sumNextPanesSize(e),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      };
      const i = 0 + (this.pushOtherPanes ? 0 : n.prevPanesSize), o = 100 - (this.pushOtherPanes ? 0 : n.nextPanesSize), a = Math.max(Math.min(this.getCurrentDragPercentage(t), o), i);
      let l = [e, e + 1], f = this.panes[l[0]] || null, c = this.panes[l[1]] || null;
      const g = f.max < 100 && a >= f.max + n.prevPanesSize, p = c.max < 100 && a <= 100 - (c.max + this.sumNextPanesSize(e + 1));
      if (g || p) {
        g ? (f.size = f.max, c.size = Math.max(100 - f.max - n.prevPanesSize - n.nextPanesSize, 0)) : (f.size = Math.max(100 - c.max - n.prevPanesSize - this.sumNextPanesSize(e + 1), 0), c.size = c.max);
        return;
      }
      if (this.pushOtherPanes) {
        const _ = this.doPushOtherPanes(n, a);
        if (!_) return;
        ({ sums: n, panesToResize: l } = _), f = this.panes[l[0]] || null, c = this.panes[l[1]] || null;
      }
      f !== null && (f.size = Math.min(Math.max(a - n.prevPanesSize - n.prevReachedMinPanes, f.min), f.max)), c !== null && (c.size = Math.min(Math.max(100 - a - n.nextPanesSize - n.nextReachedMinPanes, c.min), c.max));
    },
    doPushOtherPanes(t, e) {
      const n = this.touch.activeSplitter, i = [n, n + 1];
      return e < t.prevPanesSize + this.panes[i[0]].min && (i[0] = this.findPrevExpandedPane(n).index, t.prevReachedMinPanes = 0, i[0] < n && this.panes.forEach((o, a) => {
        a > i[0] && a <= n && (o.size = o.min, t.prevReachedMinPanes += o.min);
      }), t.prevPanesSize = this.sumPrevPanesSize(i[0]), i[0] === void 0) ? (t.prevReachedMinPanes = 0, this.panes[0].size = this.panes[0].min, this.panes.forEach((o, a) => {
        a > 0 && a <= n && (o.size = o.min, t.prevReachedMinPanes += o.min);
      }), this.panes[i[1]].size = 100 - t.prevReachedMinPanes - this.panes[0].min - t.prevPanesSize - t.nextPanesSize, null) : e > 100 - t.nextPanesSize - this.panes[i[1]].min && (i[1] = this.findNextExpandedPane(n).index, t.nextReachedMinPanes = 0, i[1] > n + 1 && this.panes.forEach((o, a) => {
        a > n && a < i[1] && (o.size = o.min, t.nextReachedMinPanes += o.min);
      }), t.nextPanesSize = this.sumNextPanesSize(i[1] - 1), i[1] === void 0) ? (t.nextReachedMinPanes = 0, this.panes[this.panesCount - 1].size = this.panes[this.panesCount - 1].min, this.panes.forEach((o, a) => {
        a < this.panesCount - 1 && a >= n + 1 && (o.size = o.min, t.nextReachedMinPanes += o.min);
      }), this.panes[i[0]].size = 100 - t.prevPanesSize - t.nextReachedMinPanes - this.panes[this.panesCount - 1].min - t.nextPanesSize, null) : { sums: t, panesToResize: i };
    },
    sumPrevPanesSize(t) {
      return this.panes.reduce((e, n, i) => e + (i < t ? n.size : 0), 0);
    },
    sumNextPanesSize(t) {
      return this.panes.reduce((e, n, i) => e + (i > t + 1 ? n.size : 0), 0);
    },
    // Return the previous pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findPrevExpandedPane(t) {
      return [...this.panes].reverse().find((e) => e.index < t && e.size > e.min) || {};
    },
    // Return the next pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findNextExpandedPane(t) {
      return this.panes.find((e) => e.index > t + 1 && e.size > e.min) || {};
    },
    checkSplitpanesNodes() {
      Array.from(this.container.children).forEach((t) => {
        const e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
        !e && !n && (t.parentNode.removeChild(t), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      });
    },
    addSplitter(t, e, n = !1) {
      const i = t - 1, o = document.createElement("div");
      o.classList.add("splitpanes__splitter"), n || (o.onmousedown = (a) => this.onMouseDown(a, i), typeof window < "u" && "ontouchstart" in window && (o.ontouchstart = (a) => this.onMouseDown(a, i)), o.onclick = (a) => this.onSplitterClick(a, i + 1)), this.dblClickSplitter && (o.ondblclick = (a) => this.onSplitterDblClick(a, i + 1)), e.parentNode.insertBefore(o, e);
    },
    removeSplitter(t) {
      t.onmousedown = void 0, t.onclick = void 0, t.ondblclick = void 0, t.parentNode.removeChild(t);
    },
    redoSplitters() {
      const t = Array.from(this.container.children);
      t.forEach((n) => {
        n.className.includes("splitpanes__splitter") && this.removeSplitter(n);
      });
      let e = 0;
      t.forEach((n) => {
        n.className.includes("splitpanes__pane") && (!e && this.firstSplitter ? this.addSplitter(e, n, !0) : e && this.addSplitter(e, n), e++);
      });
    },
    // Called by Pane component on programmatic resize.
    requestUpdate({ target: t, ...e }) {
      const n = this.indexedPanes[t._.uid];
      Object.entries(e).forEach(([i, o]) => n[i] = o);
    },
    onPaneAdd(t) {
      let e = -1;
      Array.from(t.$el.parentNode.children).some((o) => (o.className.includes("splitpanes__pane") && e++, o === t.$el));
      const n = parseFloat(t.minSize), i = parseFloat(t.maxSize);
      this.panes.splice(e, 0, {
        id: t._.uid,
        index: e,
        min: isNaN(n) ? 0 : n,
        max: isNaN(i) ? 100 : i,
        size: t.size === null ? null : parseFloat(t.size),
        givenSize: t.size,
        update: t.update
      }), this.panes.forEach((o, a) => o.index = a), this.ready && this.$nextTick(() => {
        this.redoSplitters(), this.resetPaneSizes({ addedPane: this.panes[e] }), this.$emit("pane-add", { index: e, panes: this.panes.map((o) => ({ min: o.min, max: o.max, size: o.size })) });
      });
    },
    onPaneRemove(t) {
      const e = this.panes.findIndex((i) => i.id === t._.uid), n = this.panes.splice(e, 1)[0];
      this.panes.forEach((i, o) => i.index = o), this.$nextTick(() => {
        this.redoSplitters(), this.resetPaneSizes({ removedPane: { ...n, index: e } }), this.$emit("pane-remove", { removed: n, panes: this.panes.map((i) => ({ min: i.min, max: i.max, size: i.size })) });
      });
    },
    resetPaneSizes(t = {}) {
      !t.addedPane && !t.removedPane ? this.initialPanesSizing() : this.panes.some((e) => e.givenSize !== null || e.min || e.max < 100) ? this.equalizeAfterAddOrRemove(t) : this.equalize(), this.ready && this.$emit("resized", this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size })));
    },
    equalize() {
      const t = 100 / this.panesCount;
      let e = 0;
      const n = [], i = [];
      this.panes.forEach((o) => {
        o.size = Math.max(Math.min(t, o.max), o.min), e -= o.size, o.size >= o.max && n.push(o.id), o.size <= o.min && i.push(o.id);
      }), e > 0.1 && this.readjustSizes(e, n, i);
    },
    initialPanesSizing() {
      let t = 100;
      const e = [], n = [];
      let i = 0;
      this.panes.forEach((a) => {
        t -= a.size, a.size !== null && i++, a.size >= a.max && e.push(a.id), a.size <= a.min && n.push(a.id);
      });
      let o = 100;
      t > 0.1 && (this.panes.forEach((a) => {
        a.size === null && (a.size = Math.max(Math.min(t / (this.panesCount - i), a.max), a.min)), o -= a.size;
      }), o > 0.1 && this.readjustSizes(t, e, n));
    },
    equalizeAfterAddOrRemove({ addedPane: t, removedPane: e } = {}) {
      let n = 100 / this.panesCount, i = 0;
      const o = [], a = [];
      t && t.givenSize !== null && (n = (100 - t.givenSize) / (this.panesCount - 1)), this.panes.forEach((l) => {
        i -= l.size, l.size >= l.max && o.push(l.id), l.size <= l.min && a.push(l.id);
      }), !(Math.abs(i) < 0.1) && (this.panes.forEach((l) => {
        t && t.givenSize !== null && t.id === l.id || (l.size = Math.max(Math.min(n, l.max), l.min)), i -= l.size, l.size >= l.max && o.push(l.id), l.size <= l.min && a.push(l.id);
      }), i > 0.1 && this.readjustSizes(i, o, a));
    },
    /* recalculatePaneSizes ({ addedPane, removedPane } = {}) {
          let leftToAllocate = 100
          let equalSpaceToAllocate = leftToAllocate / this.panesCount
          let ungrowable = []
          let unshrinkable = []
    
          // When adding a pane with no size, apply min-size if defined otherwise divide another pane
          // (next or prev) in 2.
          // if (addedPane && addedPane.size === null) {
          //   if (addedPane.min) addedPane.size = addedPane.min
          //   else {
          //     const paneToDivide = this.panes[addedPane.index + 1] || this.panes[addedPane.index - 1]
          //     if (paneToDivide) {
          //       // @todo: Dividing that pane in 2 could be incorrect if becoming lower than its min size.
          //       addedPane.size = paneToDivide.size / 2
          //       paneToDivide.size /= 2
          //     }
          //   }
          // }
    
          this.panes.forEach((pane, i) => {
            // Added pane - reduce the size of the next pane.
            if (addedPane && addedPane.index + 1 === i) {
              pane.size = Math.max(Math.min(100 - this.sumPrevPanesSize(i) - this.sumNextPanesSize(i + 1), pane.max), pane.min)
              // @todo: if could not allocate correctly, try to allocate in the next pane straight away,
              // then still do the second loop if not correct.
            }
    
            // Removed pane - increase the size of the next pane.
            else if (removedPane && removedPane.index === i) {
              pane.size = Math.max(Math.min(100 - this.sumPrevPanesSize(i) - this.sumNextPanesSize(i + 1), pane.max), pane.min)
              // @todo: if could not allocate correctly, try to allocate in the next pane straight away,
              // then still do the second loop if not correct.
            }
    
            // Initial load and on demand recalculation.
            else if (!addedPane && !removedPane && pane.size === null) {
              pane.size = Math.max(Math.min(equalSpaceToAllocate, pane.max), pane.min)
            }
    
            leftToAllocate -= pane.size
    
            if (pane.size >= pane.max) ungrowable.push(pane.id)
            if (pane.size <= pane.min) unshrinkable.push(pane.id)
          })
    
          // Do one more loop to adjust sizes if still wrong.
          // > 0.1: Prevent maths rounding issues due to bytes.
          if (Math.abs(leftToAllocate) > 0.1) this.readjustSizes(leftToAllocate, ungrowable, unshrinkable)
        }, */
    // Second loop to adjust sizes now that we know more about the panes constraints.
    readjustSizes(t, e, n) {
      let i;
      t > 0 ? i = t / (this.panesCount - e.length) : i = t / (this.panesCount - n.length), this.panes.forEach((o, a) => {
        if (t > 0 && !e.includes(o.id)) {
          const l = Math.max(Math.min(o.size + i, o.max), o.min), f = l - o.size;
          t -= f, o.size = l;
        } else if (!n.includes(o.id)) {
          const l = Math.max(Math.min(o.size + i, o.max), o.min), f = l - o.size;
          t -= f, o.size = l;
        }
        o.update({
          [this.horizontal ? "height" : "width"]: `${this.indexedPanes[o.id].size}%`
        });
      }), Math.abs(t) > 0.1 && this.$nextTick(() => {
        this.ready && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
      });
    }
    /* distributeEmptySpace () {
          let growablePanes = []
          let collapsedPanesCount = 0
          let growableAmount = 0 // Total of how much the current panes can grow to fill blank space.
          let spaceToDistribute = 100 - this.panes.reduce((sum, pane) => (sum += pane.size) && sum, 0)
          // Do a first loop to determine if we can distribute the new blank space between all the
          // expandedPanes, without expanding the collapsed ones.
          this.panes.forEach(pane => {
            if (pane.size < pane.max) growablePanes.push(pane)
    
            if (!pane.size) collapsedPanesCount++
            else growableAmount += pane.max - pane.size
          })
    
          // If the blank space to distribute is too great for the expanded panes, also expand collapsed ones.
          let expandCollapsedPanes = growableAmount < spaceToDistribute
    
          // New space to distribute equally.
          let growablePanesCount = (growablePanes.length - (expandCollapsedPanes ? 0 : collapsedPanesCount))
          let equalSpaceToDistribute = spaceToDistribute / growablePanesCount
          // if (growablePanesCount === 1) equalSpace = 100 / this.panesCount
          let spaceLeftToDistribute = spaceToDistribute
    
          // Now add the equalSpaceToDistribute to each pane size accordingly.
          growablePanes.forEach(pane => {
            if (pane.size < pane.max && (pane.size || (!pane.size && expandCollapsedPanes))) {
              const newSize = Math.min(pane.size + equalSpaceToDistribute, pane.max)
              let allocatedSpace = (newSize - pane.size)
              spaceLeftToDistribute -= allocatedSpace
              pane.size = newSize
              // If the equalSpaceToDistribute is not fully added to the current pane, distribute the remainder
              // to the next panes.
              // Also fix decimal issue due to bites - E.g. calculating 8.33 and getting 8.3299999999999
              if (equalSpaceToDistribute - allocatedSpace > 0.1) equalSpaceToDistribute = spaceLeftToDistribute / (--growablePanesCount)
            }
          })
    
          /* Disabled otherwise will show up on hot reload.
          // if there is still space to allocate show warning message.
          if (this.panesCount && ~~spaceLeftToDistribute) {
            // eslint-disable-next-line no-console
            console.warn('Splitpanes: Could not distribute all the empty space between panes due to their constraints.')
          } *\/
    
          this.$emit('resized', this.panes.map(pane => ({ min: pane.min, max: pane.max, size: pane.size })))
        } */
  },
  watch: {
    panes: {
      // Every time a pane is updated, update the panes accordingly.
      deep: !0,
      immediate: !1,
      handler() {
        this.updatePaneComponents();
      }
    },
    horizontal() {
      this.updatePaneComponents();
    },
    firstSplitter() {
      this.redoSplitters();
    },
    dblClickSplitter(t) {
      [...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e, n) => {
        e.ondblclick = t ? (i) => this.onSplitterDblClick(i, n) : void 0;
      });
    }
  },
  beforeUnmount() {
    this.ready = !1;
  },
  mounted() {
    this.container = this.$refs.container, this.checkSplitpanesNodes(), this.redoSplitters(), this.resetPaneSizes(), this.$emit("ready"), this.ready = !0;
  },
  render() {
    return di(
      "div",
      {
        ref: "container",
        class: [
          "splitpanes",
          `splitpanes--${this.horizontal ? "horizontal" : "vertical"}`,
          {
            "splitpanes--dragging": this.touch.dragging
          }
        ]
      },
      this.$slots.default()
    );
  }
}, JO = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, o] of e)
    n[i] = o;
  return n;
}, QO = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "pane",
  inject: ["requestUpdate", "onPaneAdd", "onPaneRemove", "onPaneClick"],
  props: {
    size: { type: [Number, String], default: null },
    minSize: { type: [Number, String], default: 0 },
    maxSize: { type: [Number, String], default: 100 }
  },
  data: () => ({
    style: {}
  }),
  mounted() {
    this.onPaneAdd(this);
  },
  beforeUnmount() {
    this.onPaneRemove(this);
  },
  methods: {
    // Called from the splitpanes component.
    update(t) {
      this.style = t;
    }
  },
  computed: {
    sizeNumber() {
      return this.size || this.size === 0 ? parseFloat(this.size) : null;
    },
    minSizeNumber() {
      return parseFloat(this.minSize);
    },
    maxSizeNumber() {
      return parseFloat(this.maxSize);
    }
  },
  watch: {
    sizeNumber(t) {
      this.requestUpdate({ target: this, size: t });
    },
    minSizeNumber(t) {
      this.requestUpdate({ target: this, min: t });
    },
    maxSizeNumber(t) {
      this.requestUpdate({ target: this, max: t });
    }
  }
};
function ZO(t, e, n, i, o, a) {
  return N(), D("div", {
    class: "splitpanes__pane",
    onClick: e[0] || (e[0] = (l) => a.onPaneClick(l, t._.uid)),
    style: Ke(t.style)
  }, [
    Hs(t.$slots, "default")
  ], 4);
}
const jh = /* @__PURE__ */ JO(QO, [["render", ZO]]), Ul = Symbol("selectedNodeId"), ru = Symbol("highlightedNodeId"), ps = Symbol("selectNode"), As = Symbol("viewOptions"), Lr = Symbol("plan");
var Ol = { exports: {} };
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var tR = Ol.exports, qh;
function eR() {
  return qh || (qh = 1, function(t, e) {
    (function(i, o) {
      t.exports = o();
    })(tR, function() {
      return (
        /******/
        function() {
          var n = {
            /***/
            686: (
              /***/
              function(a, l, f) {
                f.d(l, {
                  default: function() {
                    return (
                      /* binding */
                      mt
                    );
                  }
                });
                var c = f(279), g = /* @__PURE__ */ f.n(c), p = f(370), _ = /* @__PURE__ */ f.n(p), R = f(817), x = /* @__PURE__ */ f.n(R);
                function P(at) {
                  try {
                    return document.execCommand(at);
                  } catch {
                    return !1;
                  }
                }
                var O = function(dt) {
                  var ut = x()(dt);
                  return P("cut"), ut;
                }, W = O;
                function b(at) {
                  var dt = document.documentElement.getAttribute("dir") === "rtl", ut = document.createElement("textarea");
                  ut.style.fontSize = "12pt", ut.style.border = "0", ut.style.padding = "0", ut.style.margin = "0", ut.style.position = "absolute", ut.style[dt ? "right" : "left"] = "-9999px";
                  var Tt = window.pageYOffset || document.documentElement.scrollTop;
                  return ut.style.top = "".concat(Tt, "px"), ut.setAttribute("readonly", ""), ut.value = at, ut;
                }
                var w = function(dt) {
                  var ut = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  }, Tt = "";
                  if (typeof dt == "string") {
                    var q = b(dt);
                    ut.container.appendChild(q), Tt = x()(q), P("copy"), q.remove();
                  } else
                    Tt = x()(dt), P("copy");
                  return Tt;
                }, Z = w;
                function v(at) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? v = function(ut) {
                    return typeof ut;
                  } : v = function(ut) {
                    return ut && typeof Symbol == "function" && ut.constructor === Symbol && ut !== Symbol.prototype ? "symbol" : typeof ut;
                  }, v(at);
                }
                var G = function() {
                  var dt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ut = dt.action, Tt = ut === void 0 ? "copy" : ut, q = dt.container, T = dt.target, Et = dt.text;
                  if (Tt !== "copy" && Tt !== "cut")
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  if (T !== void 0)
                    if (T && v(T) === "object" && T.nodeType === 1) {
                      if (Tt === "copy" && T.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      if (Tt === "cut" && (T.hasAttribute("readonly") || T.hasAttribute("disabled")))
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                    } else
                      throw new Error('Invalid "target" value, use a valid Element');
                  if (Et)
                    return Z(Et, {
                      container: q
                    });
                  if (T)
                    return Tt === "cut" ? W(T) : Z(T, {
                      container: q
                    });
                }, L = G;
                function B(at) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(ut) {
                    return typeof ut;
                  } : B = function(ut) {
                    return ut && typeof Symbol == "function" && ut.constructor === Symbol && ut !== Symbol.prototype ? "symbol" : typeof ut;
                  }, B(at);
                }
                function U(at, dt) {
                  if (!(at instanceof dt))
                    throw new TypeError("Cannot call a class as a function");
                }
                function y(at, dt) {
                  for (var ut = 0; ut < dt.length; ut++) {
                    var Tt = dt[ut];
                    Tt.enumerable = Tt.enumerable || !1, Tt.configurable = !0, "value" in Tt && (Tt.writable = !0), Object.defineProperty(at, Tt.key, Tt);
                  }
                }
                function tt(at, dt, ut) {
                  return dt && y(at.prototype, dt), ut && y(at, ut), at;
                }
                function F(at, dt) {
                  if (typeof dt != "function" && dt !== null)
                    throw new TypeError("Super expression must either be null or a function");
                  at.prototype = Object.create(dt && dt.prototype, { constructor: { value: at, writable: !0, configurable: !0 } }), dt && ht(at, dt);
                }
                function ht(at, dt) {
                  return ht = Object.setPrototypeOf || function(Tt, q) {
                    return Tt.__proto__ = q, Tt;
                  }, ht(at, dt);
                }
                function M(at) {
                  var dt = V();
                  return function() {
                    var Tt = $(at), q;
                    if (dt) {
                      var T = $(this).constructor;
                      q = Reflect.construct(Tt, arguments, T);
                    } else
                      q = Tt.apply(this, arguments);
                    return Y(this, q);
                  };
                }
                function Y(at, dt) {
                  return dt && (B(dt) === "object" || typeof dt == "function") ? dt : lt(at);
                }
                function lt(at) {
                  if (at === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return at;
                }
                function V() {
                  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                  } catch {
                    return !1;
                  }
                }
                function $(at) {
                  return $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(ut) {
                    return ut.__proto__ || Object.getPrototypeOf(ut);
                  }, $(at);
                }
                function ct(at, dt) {
                  var ut = "data-clipboard-".concat(at);
                  if (dt.hasAttribute(ut))
                    return dt.getAttribute(ut);
                }
                var yt = /* @__PURE__ */ function(at) {
                  F(ut, at);
                  var dt = M(ut);
                  function ut(Tt, q) {
                    var T;
                    return U(this, ut), T = dt.call(this), T.resolveOptions(q), T.listenClick(Tt), T;
                  }
                  return tt(ut, [{
                    key: "resolveOptions",
                    value: function() {
                      var q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof q.action == "function" ? q.action : this.defaultAction, this.target = typeof q.target == "function" ? q.target : this.defaultTarget, this.text = typeof q.text == "function" ? q.text : this.defaultText, this.container = B(q.container) === "object" ? q.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function(q) {
                      var T = this;
                      this.listener = _()(q, "click", function(Et) {
                        return T.onClick(Et);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function(q) {
                      var T = q.delegateTarget || q.currentTarget, Et = this.action(T) || "copy", bt = L({
                        action: Et,
                        container: this.container,
                        target: this.target(T),
                        text: this.text(T)
                      });
                      this.emit(bt ? "success" : "error", {
                        action: Et,
                        text: bt,
                        trigger: T,
                        clearSelection: function() {
                          T && T.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function(q) {
                      return ct("action", q);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function(q) {
                      var T = ct("target", q);
                      if (T)
                        return document.querySelector(T);
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function(q) {
                      return ct("text", q);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function(q) {
                      var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return Z(q, T);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function(q) {
                      return W(q);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function() {
                      var q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], T = typeof q == "string" ? [q] : q, Et = !!document.queryCommandSupported;
                      return T.forEach(function(bt) {
                        Et = Et && !!document.queryCommandSupported(bt);
                      }), Et;
                    }
                  }]), ut;
                }(g()), mt = yt;
              }
            ),
            /***/
            828: (
              /***/
              function(a) {
                var l = 9;
                if (typeof Element < "u" && !Element.prototype.matches) {
                  var f = Element.prototype;
                  f.matches = f.matchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector || f.webkitMatchesSelector;
                }
                function c(g, p) {
                  for (; g && g.nodeType !== l; ) {
                    if (typeof g.matches == "function" && g.matches(p))
                      return g;
                    g = g.parentNode;
                  }
                }
                a.exports = c;
              }
            ),
            /***/
            438: (
              /***/
              function(a, l, f) {
                var c = f(828);
                function g(R, x, P, O, W) {
                  var b = _.apply(this, arguments);
                  return R.addEventListener(P, b, W), {
                    destroy: function() {
                      R.removeEventListener(P, b, W);
                    }
                  };
                }
                function p(R, x, P, O, W) {
                  return typeof R.addEventListener == "function" ? g.apply(null, arguments) : typeof P == "function" ? g.bind(null, document).apply(null, arguments) : (typeof R == "string" && (R = document.querySelectorAll(R)), Array.prototype.map.call(R, function(b) {
                    return g(b, x, P, O, W);
                  }));
                }
                function _(R, x, P, O) {
                  return function(W) {
                    W.delegateTarget = c(W.target, x), W.delegateTarget && O.call(R, W);
                  };
                }
                a.exports = p;
              }
            ),
            /***/
            879: (
              /***/
              function(a, l) {
                l.node = function(f) {
                  return f !== void 0 && f instanceof HTMLElement && f.nodeType === 1;
                }, l.nodeList = function(f) {
                  var c = Object.prototype.toString.call(f);
                  return f !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in f && (f.length === 0 || l.node(f[0]));
                }, l.string = function(f) {
                  return typeof f == "string" || f instanceof String;
                }, l.fn = function(f) {
                  var c = Object.prototype.toString.call(f);
                  return c === "[object Function]";
                };
              }
            ),
            /***/
            370: (
              /***/
              function(a, l, f) {
                var c = f(879), g = f(438);
                function p(P, O, W) {
                  if (!P && !O && !W)
                    throw new Error("Missing required arguments");
                  if (!c.string(O))
                    throw new TypeError("Second argument must be a String");
                  if (!c.fn(W))
                    throw new TypeError("Third argument must be a Function");
                  if (c.node(P))
                    return _(P, O, W);
                  if (c.nodeList(P))
                    return R(P, O, W);
                  if (c.string(P))
                    return x(P, O, W);
                  throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
                function _(P, O, W) {
                  return P.addEventListener(O, W), {
                    destroy: function() {
                      P.removeEventListener(O, W);
                    }
                  };
                }
                function R(P, O, W) {
                  return Array.prototype.forEach.call(P, function(b) {
                    b.addEventListener(O, W);
                  }), {
                    destroy: function() {
                      Array.prototype.forEach.call(P, function(b) {
                        b.removeEventListener(O, W);
                      });
                    }
                  };
                }
                function x(P, O, W) {
                  return g(document.body, P, O, W);
                }
                a.exports = p;
              }
            ),
            /***/
            817: (
              /***/
              function(a) {
                function l(f) {
                  var c;
                  if (f.nodeName === "SELECT")
                    f.focus(), c = f.value;
                  else if (f.nodeName === "INPUT" || f.nodeName === "TEXTAREA") {
                    var g = f.hasAttribute("readonly");
                    g || f.setAttribute("readonly", ""), f.select(), f.setSelectionRange(0, f.value.length), g || f.removeAttribute("readonly"), c = f.value;
                  } else {
                    f.hasAttribute("contenteditable") && f.focus();
                    var p = window.getSelection(), _ = document.createRange();
                    _.selectNodeContents(f), p.removeAllRanges(), p.addRange(_), c = p.toString();
                  }
                  return c;
                }
                a.exports = l;
              }
            ),
            /***/
            279: (
              /***/
              function(a) {
                function l() {
                }
                l.prototype = {
                  on: function(f, c, g) {
                    var p = this.e || (this.e = {});
                    return (p[f] || (p[f] = [])).push({
                      fn: c,
                      ctx: g
                    }), this;
                  },
                  once: function(f, c, g) {
                    var p = this;
                    function _() {
                      p.off(f, _), c.apply(g, arguments);
                    }
                    return _._ = c, this.on(f, _, g);
                  },
                  emit: function(f) {
                    var c = [].slice.call(arguments, 1), g = ((this.e || (this.e = {}))[f] || []).slice(), p = 0, _ = g.length;
                    for (p; p < _; p++)
                      g[p].fn.apply(g[p].ctx, c);
                    return this;
                  },
                  off: function(f, c) {
                    var g = this.e || (this.e = {}), p = g[f], _ = [];
                    if (p && c)
                      for (var R = 0, x = p.length; R < x; R++)
                        p[R].fn !== c && p[R].fn._ !== c && _.push(p[R]);
                    return _.length ? g[f] = _ : delete g[f], this;
                  }
                }, a.exports = l, a.exports.TinyEmitter = l;
              }
            )
            /******/
          }, i = {};
          function o(a) {
            if (i[a])
              return i[a].exports;
            var l = i[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return n[a](l, l.exports, o), l.exports;
          }
          return function() {
            o.n = function(a) {
              var l = a && a.__esModule ? (
                /******/
                function() {
                  return a.default;
                }
              ) : (
                /******/
                function() {
                  return a;
                }
              );
              return o.d(l, { a: l }), l;
            };
          }(), function() {
            o.d = function(a, l) {
              for (var f in l)
                o.o(l, f) && !o.o(a, f) && Object.defineProperty(a, f, { enumerable: !0, get: l[f] });
            };
          }(), function() {
            o.o = function(a, l) {
              return Object.prototype.hasOwnProperty.call(a, l);
            };
          }(), o(686);
        }().default
      );
    });
  }(Ol)), Ol.exports;
}
var nR = eR();
const rR = /* @__PURE__ */ nu(nR), iR = (t) => ({
  toClipboard(e, n) {
    return new Promise((i, o) => {
      const a = document.createElement("button"), l = new rR(a, {
        text: () => e,
        action: () => "copy",
        container: n !== void 0 ? n : document.body
      });
      l.on("success", (f) => {
        l.destroy(), i(f);
      }), l.on("error", (f) => {
        l.destroy(), o(f);
      }), document.body.appendChild(a), a.click(), document.body.removeChild(a);
    });
  }
});
/*!
  * vue-tippy v6.6.0
  * (c) 2024 
  * @license MIT
  */
var Un = "top", ur = "bottom", fr = "right", kn = "left", Jc = "auto", oa = [Un, ur, fr, kn], zs = "start", jo = "end", sR = "clippingParents", Nv = "viewport", wo = "popper", oR = "reference", Jh = /* @__PURE__ */ oa.reduce(function(t, e) {
  return t.concat([e + "-" + zs, e + "-" + jo]);
}, []), xv = /* @__PURE__ */ [].concat(oa, [Jc]).reduce(function(t, e) {
  return t.concat([e, e + "-" + zs, e + "-" + jo]);
}, []), aR = "beforeRead", lR = "read", uR = "afterRead", fR = "beforeMain", cR = "main", dR = "afterMain", pR = "beforeWrite", hR = "write", ER = "afterWrite", gR = [aR, lR, uR, fR, cR, dR, pR, hR, ER];
function Yr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Cr(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Ys(t) {
  var e = Cr(t).Element;
  return t instanceof e || t instanceof Element;
}
function ar(t) {
  var e = Cr(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function wv(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Cr(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function vR(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var i = e.styles[n] || {}, o = e.attributes[n] || {}, a = e.elements[n];
    !ar(a) || !Yr(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
      var f = o[l];
      f === !1 ? a.removeAttribute(l) : a.setAttribute(l, f === !0 ? "" : f);
    }));
  });
}
function mR(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var o = e.elements[i], a = e.attributes[i] || {}, l = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]), f = l.reduce(function(c, g) {
        return c[g] = "", c;
      }, {});
      !ar(o) || !Yr(o) || (Object.assign(o.style, f), Object.keys(a).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
var Mv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vR,
  effect: mR,
  requires: ["computeStyles"]
};
function Xr(t) {
  return t.split("-")[0];
}
var us = Math.max, kl = Math.min, Ks = Math.round;
function js(t, e) {
  e === void 0 && (e = !1);
  var n = t.getBoundingClientRect(), i = 1, o = 1;
  if (ar(t) && e) {
    var a = t.offsetHeight, l = t.offsetWidth;
    l > 0 && (i = Ks(n.width) / l || 1), a > 0 && (o = Ks(n.height) / a || 1);
  }
  return {
    width: n.width / i,
    height: n.height / o,
    top: n.top / o,
    right: n.right / i,
    bottom: n.bottom / o,
    left: n.left / i,
    x: n.left / i,
    y: n.top / o
  };
}
function Qc(t) {
  var e = js(t), n = t.offsetWidth, i = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: i
  };
}
function Dv(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && wv(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Kr(t) {
  return Cr(t).getComputedStyle(t);
}
function _R(t) {
  return ["table", "td", "th"].indexOf(Yr(t)) >= 0;
}
function ki(t) {
  return ((Ys(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function iu(t) {
  return Yr(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (wv(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ki(t)
  );
}
function Qh(t) {
  return !ar(t) || // https://github.com/popperjs/popper-core/issues/837
  Kr(t).position === "fixed" ? null : t.offsetParent;
}
function TR(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ar(t)) {
    var i = Kr(t);
    if (i.position === "fixed")
      return null;
  }
  for (var o = iu(t); ar(o) && ["html", "body"].indexOf(Yr(o)) < 0; ) {
    var a = Kr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function aa(t) {
  for (var e = Cr(t), n = Qh(t); n && _R(n) && Kr(n).position === "static"; )
    n = Qh(n);
  return n && (Yr(n) === "html" || Yr(n) === "body" && Kr(n).position === "static") ? e : n || TR(t) || e;
}
function Zc(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Fo(t, e, n) {
  return us(t, kl(e, n));
}
function AR(t, e, n) {
  var i = Fo(t, e, n);
  return i > n ? n : i;
}
function Pv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Uv(t) {
  return Object.assign({}, Pv(), t);
}
function kv(t, e) {
  return e.reduce(function(n, i) {
    return n[i] = t, n;
  }, {});
}
var SR = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Uv(typeof e != "number" ? e : kv(e, oa));
};
function yR(t) {
  var e, n = t.state, i = t.name, o = t.options, a = n.elements.arrow, l = n.modifiersData.popperOffsets, f = Xr(n.placement), c = Zc(f), g = [kn, fr].indexOf(f) >= 0, p = g ? "height" : "width";
  if (!(!a || !l)) {
    var _ = SR(o.padding, n), R = Qc(a), x = c === "y" ? Un : kn, P = c === "y" ? ur : fr, O = n.rects.reference[p] + n.rects.reference[c] - l[c] - n.rects.popper[p], W = l[c] - n.rects.reference[c], b = aa(a), w = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, Z = O / 2 - W / 2, v = _[x], G = w - R[p] - _[P], L = w / 2 - R[p] / 2 + Z, B = Fo(v, L, G), U = c;
    n.modifiersData[i] = (e = {}, e[U] = B, e.centerOffset = B - L, e);
  }
}
function OR(t) {
  var e = t.state, n = t.options, i = n.element, o = i === void 0 ? "[data-popper-arrow]" : i;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || Dv(e.elements.popper, o) && (e.elements.arrow = o));
}
var RR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: yR,
  effect: OR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function qs(t) {
  return t.split("-")[1];
}
var bR = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function IR(t) {
  var e = t.x, n = t.y, i = window, o = i.devicePixelRatio || 1;
  return {
    x: Ks(e * o) / o || 0,
    y: Ks(n * o) / o || 0
  };
}
function Zh(t) {
  var e, n = t.popper, i = t.popperRect, o = t.placement, a = t.variation, l = t.offsets, f = t.position, c = t.gpuAcceleration, g = t.adaptive, p = t.roundOffsets, _ = t.isFixed, R = p === !0 ? IR(l) : typeof p == "function" ? p(l) : l, x = R.x, P = x === void 0 ? 0 : x, O = R.y, W = O === void 0 ? 0 : O, b = l.hasOwnProperty("x"), w = l.hasOwnProperty("y"), Z = kn, v = Un, G = window;
  if (g) {
    var L = aa(n), B = "clientHeight", U = "clientWidth";
    if (L === Cr(n) && (L = ki(n), Kr(L).position !== "static" && f === "absolute" && (B = "scrollHeight", U = "scrollWidth")), L = L, o === Un || (o === kn || o === fr) && a === jo) {
      v = ur;
      var y = _ && G.visualViewport ? G.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        L[B]
      );
      W -= y - i.height, W *= c ? 1 : -1;
    }
    if (o === kn || (o === Un || o === ur) && a === jo) {
      Z = fr;
      var tt = _ && G.visualViewport ? G.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        L[U]
      );
      P -= tt - i.width, P *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: f
  }, g && bR);
  if (c) {
    var ht;
    return Object.assign({}, F, (ht = {}, ht[v] = w ? "0" : "", ht[Z] = b ? "0" : "", ht.transform = (G.devicePixelRatio || 1) <= 1 ? "translate(" + P + "px, " + W + "px)" : "translate3d(" + P + "px, " + W + "px, 0)", ht));
  }
  return Object.assign({}, F, (e = {}, e[v] = w ? W + "px" : "", e[Z] = b ? P + "px" : "", e.transform = "", e));
}
function LR(t) {
  var e = t.state, n = t.options, i = n.gpuAcceleration, o = i === void 0 ? !0 : i, a = n.adaptive, l = a === void 0 ? !0 : a, f = n.roundOffsets, c = f === void 0 ? !0 : f, g = {
    placement: Xr(e.placement),
    variation: qs(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Zh(Object.assign({}, g, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Zh(Object.assign({}, g, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
var CR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: LR,
  data: {}
}, fl = {
  passive: !0
};
function NR(t) {
  var e = t.state, n = t.instance, i = t.options, o = i.scroll, a = o === void 0 ? !0 : o, l = i.resize, f = l === void 0 ? !0 : l, c = Cr(e.elements.popper), g = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return a && g.forEach(function(p) {
    p.addEventListener("scroll", n.update, fl);
  }), f && c.addEventListener("resize", n.update, fl), function() {
    a && g.forEach(function(p) {
      p.removeEventListener("scroll", n.update, fl);
    }), f && c.removeEventListener("resize", n.update, fl);
  };
}
var xR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: NR,
  data: {}
}, wR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rl(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return wR[e];
  });
}
var MR = {
  start: "end",
  end: "start"
};
function tE(t) {
  return t.replace(/start|end/g, function(e) {
    return MR[e];
  });
}
function td(t) {
  var e = Cr(t), n = e.pageXOffset, i = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: i
  };
}
function ed(t) {
  return js(ki(t)).left + td(t).scrollLeft;
}
function DR(t) {
  var e = Cr(t), n = ki(t), i = e.visualViewport, o = n.clientWidth, a = n.clientHeight, l = 0, f = 0;
  return i && (o = i.width, a = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = i.offsetLeft, f = i.offsetTop)), {
    width: o,
    height: a,
    x: l + ed(t),
    y: f
  };
}
function PR(t) {
  var e, n = ki(t), i = td(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = us(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = us(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), f = -i.scrollLeft + ed(t), c = -i.scrollTop;
  return Kr(o || n).direction === "rtl" && (f += us(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: f,
    y: c
  };
}
function nd(t) {
  var e = Kr(t), n = e.overflow, i = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + i);
}
function Bv(t) {
  return ["html", "body", "#document"].indexOf(Yr(t)) >= 0 ? t.ownerDocument.body : ar(t) && nd(t) ? t : Bv(iu(t));
}
function Wo(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = Bv(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), a = Cr(i), l = o ? [a].concat(a.visualViewport || [], nd(i) ? i : []) : i, f = e.concat(l);
  return o ? f : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    f.concat(Wo(iu(l)))
  );
}
function sc(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function UR(t) {
  var e = js(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}
function eE(t, e) {
  return e === Nv ? sc(DR(t)) : Ys(e) ? UR(e) : sc(PR(ki(t)));
}
function kR(t) {
  var e = Wo(iu(t)), n = ["absolute", "fixed"].indexOf(Kr(t).position) >= 0, i = n && ar(t) ? aa(t) : t;
  return Ys(i) ? e.filter(function(o) {
    return Ys(o) && Dv(o, i) && Yr(o) !== "body" && (n ? Kr(o).position !== "static" : !0);
  }) : [];
}
function BR(t, e, n) {
  var i = e === "clippingParents" ? kR(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(f, c) {
    var g = eE(t, c);
    return f.top = us(g.top, f.top), f.right = kl(g.right, f.right), f.bottom = kl(g.bottom, f.bottom), f.left = us(g.left, f.left), f;
  }, eE(t, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function $v(t) {
  var e = t.reference, n = t.element, i = t.placement, o = i ? Xr(i) : null, a = i ? qs(i) : null, l = e.x + e.width / 2 - n.width / 2, f = e.y + e.height / 2 - n.height / 2, c;
  switch (o) {
    case Un:
      c = {
        x: l,
        y: e.y - n.height
      };
      break;
    case ur:
      c = {
        x: l,
        y: e.y + e.height
      };
      break;
    case fr:
      c = {
        x: e.x + e.width,
        y: f
      };
      break;
    case kn:
      c = {
        x: e.x - n.width,
        y: f
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var g = o ? Zc(o) : null;
  if (g != null) {
    var p = g === "y" ? "height" : "width";
    switch (a) {
      case zs:
        c[g] = c[g] - (e[p] / 2 - n[p] / 2);
        break;
      case jo:
        c[g] = c[g] + (e[p] / 2 - n[p] / 2);
        break;
    }
  }
  return c;
}
function qo(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, o = i === void 0 ? t.placement : i, a = n.boundary, l = a === void 0 ? sR : a, f = n.rootBoundary, c = f === void 0 ? Nv : f, g = n.elementContext, p = g === void 0 ? wo : g, _ = n.altBoundary, R = _ === void 0 ? !1 : _, x = n.padding, P = x === void 0 ? 0 : x, O = Uv(typeof P != "number" ? P : kv(P, oa)), W = p === wo ? oR : wo, b = t.rects.popper, w = t.elements[R ? W : p], Z = BR(Ys(w) ? w : w.contextElement || ki(t.elements.popper), l, c), v = js(t.elements.reference), G = $v({
    reference: v,
    element: b,
    placement: o
  }), L = sc(Object.assign({}, b, G)), B = p === wo ? L : v, U = {
    top: Z.top - B.top + O.top,
    bottom: B.bottom - Z.bottom + O.bottom,
    left: Z.left - B.left + O.left,
    right: B.right - Z.right + O.right
  }, y = t.modifiersData.offset;
  if (p === wo && y) {
    var tt = y[o];
    Object.keys(U).forEach(function(F) {
      var ht = [fr, ur].indexOf(F) >= 0 ? 1 : -1, M = [Un, ur].indexOf(F) >= 0 ? "y" : "x";
      U[F] += tt[M] * ht;
    });
  }
  return U;
}
function $R(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, o = n.boundary, a = n.rootBoundary, l = n.padding, f = n.flipVariations, c = n.allowedAutoPlacements, g = c === void 0 ? xv : c, p = qs(i), _ = p ? f ? Jh : Jh.filter(function(P) {
    return qs(P) === p;
  }) : oa, R = _.filter(function(P) {
    return g.indexOf(P) >= 0;
  });
  R.length === 0 && (R = _);
  var x = R.reduce(function(P, O) {
    return P[O] = qo(t, {
      placement: O,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[Xr(O)], P;
  }, {});
  return Object.keys(x).sort(function(P, O) {
    return x[P] - x[O];
  });
}
function HR(t) {
  if (Xr(t) === Jc)
    return [];
  var e = Rl(t);
  return [tE(t), e, tE(e)];
}
function FR(t) {
  var e = t.state, n = t.options, i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, l = n.altAxis, f = l === void 0 ? !0 : l, c = n.fallbackPlacements, g = n.padding, p = n.boundary, _ = n.rootBoundary, R = n.altBoundary, x = n.flipVariations, P = x === void 0 ? !0 : x, O = n.allowedAutoPlacements, W = e.options.placement, b = Xr(W), w = b === W, Z = c || (w || !P ? [Rl(W)] : HR(W)), v = [W].concat(Z).reduce(function(Tt, q) {
      return Tt.concat(Xr(q) === Jc ? $R(e, {
        placement: q,
        boundary: p,
        rootBoundary: _,
        padding: g,
        flipVariations: P,
        allowedAutoPlacements: O
      }) : q);
    }, []), G = e.rects.reference, L = e.rects.popper, B = /* @__PURE__ */ new Map(), U = !0, y = v[0], tt = 0; tt < v.length; tt++) {
      var F = v[tt], ht = Xr(F), M = qs(F) === zs, Y = [Un, ur].indexOf(ht) >= 0, lt = Y ? "width" : "height", V = qo(e, {
        placement: F,
        boundary: p,
        rootBoundary: _,
        altBoundary: R,
        padding: g
      }), $ = Y ? M ? fr : kn : M ? ur : Un;
      G[lt] > L[lt] && ($ = Rl($));
      var ct = Rl($), yt = [];
      if (a && yt.push(V[ht] <= 0), f && yt.push(V[$] <= 0, V[ct] <= 0), yt.every(function(Tt) {
        return Tt;
      })) {
        y = F, U = !1;
        break;
      }
      B.set(F, yt);
    }
    if (U)
      for (var mt = P ? 3 : 1, at = function(q) {
        var T = v.find(function(Et) {
          var bt = B.get(Et);
          if (bt)
            return bt.slice(0, q).every(function(Bt) {
              return Bt;
            });
        });
        if (T)
          return y = T, "break";
      }, dt = mt; dt > 0; dt--) {
        var ut = at(dt);
        if (ut === "break") break;
      }
    e.placement !== y && (e.modifiersData[i]._skip = !0, e.placement = y, e.reset = !0);
  }
}
var WR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: FR,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function nE(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function rE(t) {
  return [Un, fr, ur, kn].some(function(e) {
    return t[e] >= 0;
  });
}
function VR(t) {
  var e = t.state, n = t.name, i = e.rects.reference, o = e.rects.popper, a = e.modifiersData.preventOverflow, l = qo(e, {
    elementContext: "reference"
  }), f = qo(e, {
    altBoundary: !0
  }), c = nE(l, i), g = nE(f, o, a), p = rE(c), _ = rE(g);
  e.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: g,
    isReferenceHidden: p,
    hasPopperEscaped: _
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": _
  });
}
var XR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: VR
};
function GR(t, e, n) {
  var i = Xr(t), o = [kn, Un].indexOf(i) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, l = a[0], f = a[1];
  return l = l || 0, f = (f || 0) * o, [kn, fr].indexOf(i) >= 0 ? {
    x: f,
    y: l
  } : {
    x: l,
    y: f
  };
}
function zR(t) {
  var e = t.state, n = t.options, i = t.name, o = n.offset, a = o === void 0 ? [0, 0] : o, l = xv.reduce(function(p, _) {
    return p[_] = GR(_, e.rects, a), p;
  }, {}), f = l[e.placement], c = f.x, g = f.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += g), e.modifiersData[i] = l;
}
var YR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: zR
};
function KR(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = $v({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
var jR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: KR,
  data: {}
};
function qR(t) {
  return t === "x" ? "y" : "x";
}
function JR(t) {
  var e = t.state, n = t.options, i = t.name, o = n.mainAxis, a = o === void 0 ? !0 : o, l = n.altAxis, f = l === void 0 ? !1 : l, c = n.boundary, g = n.rootBoundary, p = n.altBoundary, _ = n.padding, R = n.tether, x = R === void 0 ? !0 : R, P = n.tetherOffset, O = P === void 0 ? 0 : P, W = qo(e, {
    boundary: c,
    rootBoundary: g,
    padding: _,
    altBoundary: p
  }), b = Xr(e.placement), w = qs(e.placement), Z = !w, v = Zc(b), G = qR(v), L = e.modifiersData.popperOffsets, B = e.rects.reference, U = e.rects.popper, y = typeof O == "function" ? O(Object.assign({}, e.rects, {
    placement: e.placement
  })) : O, tt = typeof y == "number" ? {
    mainAxis: y,
    altAxis: y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, y), F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ht = {
    x: 0,
    y: 0
  };
  if (L) {
    if (a) {
      var M, Y = v === "y" ? Un : kn, lt = v === "y" ? ur : fr, V = v === "y" ? "height" : "width", $ = L[v], ct = $ + W[Y], yt = $ - W[lt], mt = x ? -U[V] / 2 : 0, at = w === zs ? B[V] : U[V], dt = w === zs ? -U[V] : -B[V], ut = e.elements.arrow, Tt = x && ut ? Qc(ut) : {
        width: 0,
        height: 0
      }, q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Pv(), T = q[Y], Et = q[lt], bt = Fo(0, B[V], Tt[V]), Bt = Z ? B[V] / 2 - mt - bt - T - tt.mainAxis : at - bt - T - tt.mainAxis, Ft = Z ? -B[V] / 2 + mt + bt + Et + tt.mainAxis : dt + bt + Et + tt.mainAxis, xt = e.elements.arrow && aa(e.elements.arrow), ue = xt ? v === "y" ? xt.clientTop || 0 : xt.clientLeft || 0 : 0, He = (M = F == null ? void 0 : F[v]) != null ? M : 0, Wt = $ + Bt - He - ue, Mt = $ + Ft - He, fe = Fo(x ? kl(ct, Wt) : ct, $, x ? us(yt, Mt) : yt);
      L[v] = fe, ht[v] = fe - $;
    }
    if (f) {
      var ne, nt = v === "x" ? Un : kn, Dt = v === "x" ? ur : fr, ee = L[G], oe = G === "y" ? "height" : "width", we = ee + W[nt], Ne = ee - W[Dt], Qe = [Un, kn].indexOf(b) !== -1, ln = (ne = F == null ? void 0 : F[G]) != null ? ne : 0, un = Qe ? we : ee - B[oe] - U[oe] - ln + tt.altAxis, nn = Qe ? ee + B[oe] + U[oe] - ln - tt.altAxis : Ne, sn = x && Qe ? AR(un, ee, nn) : Fo(x ? un : we, ee, x ? nn : Ne);
      L[G] = sn, ht[G] = sn - ee;
    }
    e.modifiersData[i] = ht;
  }
}
var QR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: JR,
  requiresIfExists: ["offset"]
};
function ZR(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function tb(t) {
  return t === Cr(t) || !ar(t) ? td(t) : ZR(t);
}
function eb(t) {
  var e = t.getBoundingClientRect(), n = Ks(e.width) / t.offsetWidth || 1, i = Ks(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function nb(t, e, n) {
  n === void 0 && (n = !1);
  var i = ar(e), o = ar(e) && eb(e), a = ki(e), l = js(t, o), f = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (i || !i && !n) && ((Yr(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nd(a)) && (f = tb(e)), ar(e) ? (c = js(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : a && (c.x = ed(a))), {
    x: l.left + f.scrollLeft - c.x,
    y: l.top + f.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function rb(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  t.forEach(function(a) {
    e.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(f) {
      if (!n.has(f)) {
        var c = e.get(f);
        c && o(c);
      }
    }), i.push(a);
  }
  return t.forEach(function(a) {
    n.has(a.name) || o(a);
  }), i;
}
function ib(t) {
  var e = rb(t);
  return gR.reduce(function(n, i) {
    return n.concat(e.filter(function(o) {
      return o.phase === i;
    }));
  }, []);
}
function sb(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function ob(t) {
  var e = t.reduce(function(n, i) {
    var o = n[i.name];
    return n[i.name] = o ? Object.assign({}, o, i, {
      options: Object.assign({}, o.options, i.options),
      data: Object.assign({}, o.data, i.data)
    }) : i, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var iE = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sE() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function ab(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, i = n === void 0 ? [] : n, o = e.defaultOptions, a = o === void 0 ? iE : o;
  return function(f, c, g) {
    g === void 0 && (g = a);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, iE, a),
      modifiersData: {},
      elements: {
        reference: f,
        popper: c
      },
      attributes: {},
      styles: {}
    }, _ = [], R = !1, x = {
      state: p,
      setOptions: function(b) {
        var w = typeof b == "function" ? b(p.options) : b;
        O(), p.options = Object.assign({}, a, p.options, w), p.scrollParents = {
          reference: Ys(f) ? Wo(f) : f.contextElement ? Wo(f.contextElement) : [],
          popper: Wo(c)
        };
        var Z = ib(ob([].concat(i, p.options.modifiers)));
        return p.orderedModifiers = Z.filter(function(v) {
          return v.enabled;
        }), P(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!R) {
          var b = p.elements, w = b.reference, Z = b.popper;
          if (sE(w, Z)) {
            p.rects = {
              reference: nb(w, aa(Z), p.options.strategy === "fixed"),
              popper: Qc(Z)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(tt) {
              return p.modifiersData[tt.name] = Object.assign({}, tt.data);
            });
            for (var v = 0; v < p.orderedModifiers.length; v++) {
              if (p.reset === !0) {
                p.reset = !1, v = -1;
                continue;
              }
              var G = p.orderedModifiers[v], L = G.fn, B = G.options, U = B === void 0 ? {} : B, y = G.name;
              typeof L == "function" && (p = L({
                state: p,
                options: U,
                name: y,
                instance: x
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sb(function() {
        return new Promise(function(W) {
          x.forceUpdate(), W(p);
        });
      }),
      destroy: function() {
        O(), R = !0;
      }
    };
    if (!sE(f, c))
      return x;
    x.setOptions(g).then(function(W) {
      !R && g.onFirstUpdate && g.onFirstUpdate(W);
    });
    function P() {
      p.orderedModifiers.forEach(function(W) {
        var b = W.name, w = W.options, Z = w === void 0 ? {} : w, v = W.effect;
        if (typeof v == "function") {
          var G = v({
            state: p,
            name: b,
            instance: x,
            options: Z
          }), L = function() {
          };
          _.push(G || L);
        }
      });
    }
    function O() {
      _.forEach(function(W) {
        return W();
      }), _ = [];
    }
    return x;
  };
}
var lb = [xR, jR, CR, Mv, YR, WR, QR, RR, XR], ub = /* @__PURE__ */ ab({
  defaultModifiers: lb
}), fb = "tippy-box", Hv = "tippy-content", Fv = "tippy-backdrop", Wv = "tippy-arrow", Vv = "tippy-svg-arrow", es = {
  passive: !0,
  capture: !0
}, Xv = function() {
  return document.body;
};
function Uf(t, e, n) {
  if (Array.isArray(t)) {
    var i = t[e];
    return i ?? (Array.isArray(n) ? n[e] : n);
  }
  return t;
}
function rd(t, e) {
  var n = {}.toString.call(t);
  return n.indexOf("[object") === 0 && n.indexOf(e + "]") > -1;
}
function Gv(t, e) {
  return typeof t == "function" ? t.apply(void 0, e) : t;
}
function oE(t, e) {
  if (e === 0)
    return t;
  var n;
  return function(i) {
    clearTimeout(n), n = setTimeout(function() {
      t(i);
    }, e);
  };
}
function cb(t, e) {
  var n = Object.assign({}, t);
  return e.forEach(function(i) {
    delete n[i];
  }), n;
}
function db(t) {
  return t.split(/\s+/).filter(Boolean);
}
function ss(t) {
  return [].concat(t);
}
function aE(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function pb(t) {
  return t.filter(function(e, n) {
    return t.indexOf(e) === n;
  });
}
function zv(t) {
  return t.split("-")[0];
}
function Js(t) {
  return [].slice.call(t);
}
function lE(t) {
  return Object.keys(t).reduce(function(e, n) {
    return t[n] !== void 0 && (e[n] = t[n]), e;
  }, {});
}
function fs() {
  return document.createElement("div");
}
function su(t) {
  return ["Element", "Fragment"].some(function(e) {
    return rd(t, e);
  });
}
function hb(t) {
  return rd(t, "NodeList");
}
function id(t) {
  return rd(t, "MouseEvent");
}
function Eb(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
function gb(t) {
  return su(t) ? [t] : hb(t) ? Js(t) : Array.isArray(t) ? t : Js(document.querySelectorAll(t));
}
function kf(t, e) {
  t.forEach(function(n) {
    n && (n.style.transitionDuration = e + "ms");
  });
}
function Jo(t, e) {
  t.forEach(function(n) {
    n && n.setAttribute("data-state", e);
  });
}
function Yv(t) {
  var e, n = ss(t), i = n[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
function vb(t, e) {
  var n = e.clientX, i = e.clientY;
  return t.every(function(o) {
    var a = o.popperRect, l = o.popperState, f = o.props, c = f.interactiveBorder, g = zv(l.placement), p = l.modifiersData.offset;
    if (!p)
      return !0;
    var _ = g === "bottom" ? p.top.y : 0, R = g === "top" ? p.bottom.y : 0, x = g === "right" ? p.left.x : 0, P = g === "left" ? p.right.x : 0, O = a.top - i + _ > c, W = i - a.bottom - R > c, b = a.left - n + x > c, w = n - a.right - P > c;
    return O || W || b || w;
  });
}
function Bf(t, e, n) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    t[i](o, n);
  });
}
function uE(t, e) {
  for (var n = e; n; ) {
    var i;
    if (t.contains(n))
      return !0;
    n = n.getRootNode == null || (i = n.getRootNode()) == null ? void 0 : i.host;
  }
  return !1;
}
var kr = {
  isTouch: !1
}, fE = 0;
function mb() {
  kr.isTouch || (kr.isTouch = !0, window.performance && document.addEventListener("mousemove", Kv));
}
function Kv() {
  var t = performance.now();
  t - fE < 20 && (kr.isTouch = !1, document.removeEventListener("mousemove", Kv)), fE = t;
}
function _b() {
  var t = document.activeElement;
  if (Eb(t)) {
    var e = t._tippy;
    t.blur && !e.state.isVisible && t.blur();
  }
}
function Tb() {
  document.addEventListener("touchstart", mb, es), window.addEventListener("blur", _b);
}
var Ab = typeof window < "u" && typeof document < "u", Sb = Ab ? (
  // @ts-ignore
  !!window.msCrypto
) : !1, yb = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Ob = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, br = Object.assign({
  appendTo: Xv,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, yb, Ob), Rb = Object.keys(br), bb = function(e) {
  var n = Object.keys(e);
  n.forEach(function(i) {
    br[i] = e[i];
  });
};
function jv(t) {
  var e = t.plugins || [], n = e.reduce(function(i, o) {
    var a = o.name, l = o.defaultValue;
    if (a) {
      var f;
      i[a] = t[a] !== void 0 ? t[a] : (f = br[a]) != null ? f : l;
    }
    return i;
  }, {});
  return Object.assign({}, t, n);
}
function Ib(t, e) {
  var n = e ? Object.keys(jv(Object.assign({}, br, {
    plugins: e
  }))) : Rb, i = n.reduce(function(o, a) {
    var l = (t.getAttribute("data-tippy-" + a) || "").trim();
    if (!l)
      return o;
    if (a === "content")
      o[a] = l;
    else
      try {
        o[a] = JSON.parse(l);
      } catch {
        o[a] = l;
      }
    return o;
  }, {});
  return i;
}
function cE(t, e) {
  var n = Object.assign({}, e, {
    content: Gv(e.content, [t])
  }, e.ignoreAttributes ? {} : Ib(t, e.plugins));
  return n.aria = Object.assign({}, br.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? e.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? e.interactive ? null : "describedby" : n.aria.content
  }, n;
}
var Lb = function() {
  return "innerHTML";
};
function oc(t, e) {
  t[Lb()] = e;
}
function dE(t) {
  var e = fs();
  return t === !0 ? e.className = Wv : (e.className = Vv, su(t) ? e.appendChild(t) : oc(e, t)), e;
}
function pE(t, e) {
  su(e.content) ? (oc(t, ""), t.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? oc(t, e.content) : t.textContent = e.content);
}
function Bl(t) {
  var e = t.firstElementChild, n = Js(e.children);
  return {
    box: e,
    content: n.find(function(i) {
      return i.classList.contains(Hv);
    }),
    arrow: n.find(function(i) {
      return i.classList.contains(Wv) || i.classList.contains(Vv);
    }),
    backdrop: n.find(function(i) {
      return i.classList.contains(Fv);
    })
  };
}
function qv(t) {
  var e = fs(), n = fs();
  n.className = fb, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var i = fs();
  i.className = Hv, i.setAttribute("data-state", "hidden"), pE(i, t.props), e.appendChild(n), n.appendChild(i), o(t.props, t.props);
  function o(a, l) {
    var f = Bl(e), c = f.box, g = f.content, p = f.arrow;
    l.theme ? c.setAttribute("data-theme", l.theme) : c.removeAttribute("data-theme"), typeof l.animation == "string" ? c.setAttribute("data-animation", l.animation) : c.removeAttribute("data-animation"), l.inertia ? c.setAttribute("data-inertia", "") : c.removeAttribute("data-inertia"), c.style.maxWidth = typeof l.maxWidth == "number" ? l.maxWidth + "px" : l.maxWidth, l.role ? c.setAttribute("role", l.role) : c.removeAttribute("role"), (a.content !== l.content || a.allowHTML !== l.allowHTML) && pE(g, t.props), l.arrow ? p ? a.arrow !== l.arrow && (c.removeChild(p), c.appendChild(dE(l.arrow))) : c.appendChild(dE(l.arrow)) : p && c.removeChild(p);
  }
  return {
    popper: e,
    onUpdate: o
  };
}
qv.$$tippy = !0;
var Cb = 1, cl = [], $f = [];
function Nb(t, e) {
  var n = cE(t, Object.assign({}, br, jv(lE(e)))), i, o, a, l = !1, f = !1, c = !1, g = !1, p, _, R, x = [], P = oE(Wt, n.interactiveDebounce), O, W = Cb++, b = null, w = pb(n.plugins), Z = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, v = {
    // properties
    id: W,
    reference: t,
    popper: fs(),
    popperInstance: b,
    props: n,
    state: Z,
    plugins: w,
    // methods
    clearDelayTimeouts: un,
    setProps: nn,
    setContent: sn,
    show: Jr,
    hide: Qr,
    hideWithInteractivity: Zr,
    enable: Qe,
    disable: ln,
    unmount: ti,
    destroy: ei
  };
  if (!n.render)
    return v;
  var G = n.render(v), L = G.popper, B = G.onUpdate;
  L.setAttribute("data-tippy-root", ""), L.id = "tippy-" + v.id, v.popper = L, t._tippy = v, L._tippy = v;
  var U = w.map(function(k) {
    return k.fn(v);
  }), y = t.hasAttribute("aria-expanded");
  return xt(), mt(), $(), ct("onCreate", [v]), n.showOnCreate && we(), L.addEventListener("mouseenter", function() {
    v.props.interactive && v.state.isVisible && v.clearDelayTimeouts();
  }), L.addEventListener("mouseleave", function() {
    v.props.interactive && v.props.trigger.indexOf("mouseenter") >= 0 && Y().addEventListener("mousemove", P);
  }), v;
  function tt() {
    var k = v.props.touch;
    return Array.isArray(k) ? k : [k, 0];
  }
  function F() {
    return tt()[0] === "hold";
  }
  function ht() {
    var k;
    return !!((k = v.props.render) != null && k.$$tippy);
  }
  function M() {
    return O || t;
  }
  function Y() {
    var k = M().parentNode;
    return k ? Yv(k) : document;
  }
  function lt() {
    return Bl(L);
  }
  function V(k) {
    return v.state.isMounted && !v.state.isVisible || kr.isTouch || p && p.type === "focus" ? 0 : Uf(v.props.delay, k ? 0 : 1, br.delay);
  }
  function $(k) {
    k === void 0 && (k = !1), L.style.pointerEvents = v.props.interactive && !k ? "" : "none", L.style.zIndex = "" + v.props.zIndex;
  }
  function ct(k, rt, vt) {
    if (vt === void 0 && (vt = !0), U.forEach(function(Nt) {
      Nt[k] && Nt[k].apply(Nt, rt);
    }), vt) {
      var kt;
      (kt = v.props)[k].apply(kt, rt);
    }
  }
  function yt() {
    var k = v.props.aria;
    if (k.content) {
      var rt = "aria-" + k.content, vt = L.id, kt = ss(v.props.triggerTarget || t);
      kt.forEach(function(Nt) {
        var _e = Nt.getAttribute(rt);
        if (v.state.isVisible)
          Nt.setAttribute(rt, _e ? _e + " " + vt : vt);
        else {
          var Ie = _e && _e.replace(vt, "").trim();
          Ie ? Nt.setAttribute(rt, Ie) : Nt.removeAttribute(rt);
        }
      });
    }
  }
  function mt() {
    if (!(y || !v.props.aria.expanded)) {
      var k = ss(v.props.triggerTarget || t);
      k.forEach(function(rt) {
        v.props.interactive ? rt.setAttribute("aria-expanded", v.state.isVisible && rt === M() ? "true" : "false") : rt.removeAttribute("aria-expanded");
      });
    }
  }
  function at() {
    Y().removeEventListener("mousemove", P), cl = cl.filter(function(k) {
      return k !== P;
    });
  }
  function dt(k) {
    if (!(kr.isTouch && (c || k.type === "mousedown"))) {
      var rt = k.composedPath && k.composedPath()[0] || k.target;
      if (!(v.props.interactive && uE(L, rt))) {
        if (ss(v.props.triggerTarget || t).some(function(vt) {
          return uE(vt, rt);
        })) {
          if (kr.isTouch || v.state.isVisible && v.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ct("onClickOutside", [v, k]);
        v.props.hideOnClick === !0 && (v.clearDelayTimeouts(), v.hide(), f = !0, setTimeout(function() {
          f = !1;
        }), v.state.isMounted || T());
      }
    }
  }
  function ut() {
    c = !0;
  }
  function Tt() {
    c = !1;
  }
  function q() {
    var k = Y();
    k.addEventListener("mousedown", dt, !0), k.addEventListener("touchend", dt, es), k.addEventListener("touchstart", Tt, es), k.addEventListener("touchmove", ut, es);
  }
  function T() {
    var k = Y();
    k.removeEventListener("mousedown", dt, !0), k.removeEventListener("touchend", dt, es), k.removeEventListener("touchstart", Tt, es), k.removeEventListener("touchmove", ut, es);
  }
  function Et(k, rt) {
    Bt(k, function() {
      !v.state.isVisible && L.parentNode && L.parentNode.contains(L) && rt();
    });
  }
  function bt(k, rt) {
    Bt(k, rt);
  }
  function Bt(k, rt) {
    var vt = lt().box;
    function kt(Nt) {
      Nt.target === vt && (Bf(vt, "remove", kt), rt());
    }
    if (k === 0)
      return rt();
    Bf(vt, "remove", _), Bf(vt, "add", kt), _ = kt;
  }
  function Ft(k, rt, vt) {
    vt === void 0 && (vt = !1);
    var kt = ss(v.props.triggerTarget || t);
    kt.forEach(function(Nt) {
      Nt.addEventListener(k, rt, vt), x.push({
        node: Nt,
        eventType: k,
        handler: rt,
        options: vt
      });
    });
  }
  function xt() {
    F() && (Ft("touchstart", He, {
      passive: !0
    }), Ft("touchend", Mt, {
      passive: !0
    })), db(v.props.trigger).forEach(function(k) {
      if (k !== "manual")
        switch (Ft(k, He), k) {
          case "mouseenter":
            Ft("mouseleave", Mt);
            break;
          case "focus":
            Ft(Sb ? "focusout" : "blur", fe);
            break;
          case "focusin":
            Ft("focusout", fe);
            break;
        }
    });
  }
  function ue() {
    x.forEach(function(k) {
      var rt = k.node, vt = k.eventType, kt = k.handler, Nt = k.options;
      rt.removeEventListener(vt, kt, Nt);
    }), x = [];
  }
  function He(k) {
    var rt, vt = !1;
    if (!(!v.state.isEnabled || ne(k) || f)) {
      var kt = ((rt = p) == null ? void 0 : rt.type) === "focus";
      p = k, O = k.currentTarget, mt(), !v.state.isVisible && id(k) && cl.forEach(function(Nt) {
        return Nt(k);
      }), k.type === "click" && (v.props.trigger.indexOf("mouseenter") < 0 || l) && v.props.hideOnClick !== !1 && v.state.isVisible ? vt = !0 : we(k), k.type === "click" && (l = !vt), vt && !kt && Ne(k);
    }
  }
  function Wt(k) {
    var rt = k.target, vt = M().contains(rt) || L.contains(rt);
    if (!(k.type === "mousemove" && vt)) {
      var kt = oe().concat(L).map(function(Nt) {
        var _e, Ie = Nt._tippy, fn = (_e = Ie.popperInstance) == null ? void 0 : _e.state;
        return fn ? {
          popperRect: Nt.getBoundingClientRect(),
          popperState: fn,
          props: n
        } : null;
      }).filter(Boolean);
      vb(kt, k) && (at(), Ne(k));
    }
  }
  function Mt(k) {
    var rt = ne(k) || v.props.trigger.indexOf("click") >= 0 && l;
    if (!rt) {
      if (v.props.interactive) {
        v.hideWithInteractivity(k);
        return;
      }
      Ne(k);
    }
  }
  function fe(k) {
    v.props.trigger.indexOf("focusin") < 0 && k.target !== M() || v.props.interactive && k.relatedTarget && L.contains(k.relatedTarget) || Ne(k);
  }
  function ne(k) {
    return kr.isTouch ? F() !== k.type.indexOf("touch") >= 0 : !1;
  }
  function nt() {
    Dt();
    var k = v.props, rt = k.popperOptions, vt = k.placement, kt = k.offset, Nt = k.getReferenceClientRect, _e = k.moveTransition, Ie = ht() ? Bl(L).arrow : null, fn = Nt ? {
      getBoundingClientRect: Nt,
      contextElement: Nt.contextElement || M()
    } : t, pr = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(it) {
        var At = it.state;
        if (ht()) {
          var qt = lt(), Re = qt.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Se) {
            Se === "placement" ? Re.setAttribute("data-placement", At.placement) : At.attributes.popper["data-popper-" + Se] ? Re.setAttribute("data-" + Se, "") : Re.removeAttribute("data-" + Se);
          }), At.attributes.popper = {};
        }
      }
    }, Xe = [{
      name: "offset",
      options: {
        offset: kt
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !_e
      }
    }, pr];
    ht() && Ie && Xe.push({
      name: "arrow",
      options: {
        element: Ie,
        padding: 3
      }
    }), Xe.push.apply(Xe, (rt == null ? void 0 : rt.modifiers) || []), v.popperInstance = ub(fn, L, Object.assign({}, rt, {
      placement: vt,
      onFirstUpdate: R,
      modifiers: Xe
    }));
  }
  function Dt() {
    v.popperInstance && (v.popperInstance.destroy(), v.popperInstance = null);
  }
  function ee() {
    var k = v.props.appendTo, rt, vt = M();
    v.props.interactive && k === Xv || k === "parent" ? rt = vt.parentNode : rt = Gv(k, [vt]), rt.contains(L) || rt.appendChild(L), v.state.isMounted = !0, nt();
  }
  function oe() {
    return Js(L.querySelectorAll("[data-tippy-root]"));
  }
  function we(k) {
    v.clearDelayTimeouts(), k && ct("onTrigger", [v, k]), q();
    var rt = V(!0), vt = tt(), kt = vt[0], Nt = vt[1];
    kr.isTouch && kt === "hold" && Nt && (rt = Nt), rt ? i = setTimeout(function() {
      v.show();
    }, rt) : v.show();
  }
  function Ne(k) {
    if (v.clearDelayTimeouts(), ct("onUntrigger", [v, k]), !v.state.isVisible) {
      T();
      return;
    }
    if (!(v.props.trigger.indexOf("mouseenter") >= 0 && v.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(k.type) >= 0 && l)) {
      var rt = V(!1);
      rt ? o = setTimeout(function() {
        v.state.isVisible && v.hide();
      }, rt) : a = requestAnimationFrame(function() {
        v.hide();
      });
    }
  }
  function Qe() {
    v.state.isEnabled = !0;
  }
  function ln() {
    v.hide(), v.state.isEnabled = !1;
  }
  function un() {
    clearTimeout(i), clearTimeout(o), cancelAnimationFrame(a);
  }
  function nn(k) {
    if (!v.state.isDestroyed) {
      ct("onBeforeUpdate", [v, k]), ue();
      var rt = v.props, vt = cE(t, Object.assign({}, rt, lE(k), {
        ignoreAttributes: !0
      }));
      v.props = vt, xt(), rt.interactiveDebounce !== vt.interactiveDebounce && (at(), P = oE(Wt, vt.interactiveDebounce)), rt.triggerTarget && !vt.triggerTarget ? ss(rt.triggerTarget).forEach(function(kt) {
        kt.removeAttribute("aria-expanded");
      }) : vt.triggerTarget && t.removeAttribute("aria-expanded"), mt(), $(), B && B(rt, vt), v.popperInstance && (nt(), oe().forEach(function(kt) {
        requestAnimationFrame(kt._tippy.popperInstance.forceUpdate);
      })), ct("onAfterUpdate", [v, k]);
    }
  }
  function sn(k) {
    v.setProps({
      content: k
    });
  }
  function Jr() {
    var k = v.state.isVisible, rt = v.state.isDestroyed, vt = !v.state.isEnabled, kt = kr.isTouch && !v.props.touch, Nt = Uf(v.props.duration, 0, br.duration);
    if (!(k || rt || vt || kt) && !M().hasAttribute("disabled") && (ct("onShow", [v], !1), v.props.onShow(v) !== !1)) {
      if (v.state.isVisible = !0, ht() && (L.style.visibility = "visible"), $(), q(), v.state.isMounted || (L.style.transition = "none"), ht()) {
        var _e = lt(), Ie = _e.box, fn = _e.content;
        kf([Ie, fn], 0);
      }
      R = function() {
        var Xe;
        if (!(!v.state.isVisible || g)) {
          if (g = !0, L.offsetHeight, L.style.transition = v.props.moveTransition, ht() && v.props.animation) {
            var X = lt(), it = X.box, At = X.content;
            kf([it, At], Nt), Jo([it, At], "visible");
          }
          yt(), mt(), aE($f, v), (Xe = v.popperInstance) == null || Xe.forceUpdate(), ct("onMount", [v]), v.props.animation && ht() && bt(Nt, function() {
            v.state.isShown = !0, ct("onShown", [v]);
          });
        }
      }, ee();
    }
  }
  function Qr() {
    var k = !v.state.isVisible, rt = v.state.isDestroyed, vt = !v.state.isEnabled, kt = Uf(v.props.duration, 1, br.duration);
    if (!(k || rt || vt) && (ct("onHide", [v], !1), v.props.onHide(v) !== !1)) {
      if (v.state.isVisible = !1, v.state.isShown = !1, g = !1, l = !1, ht() && (L.style.visibility = "hidden"), at(), T(), $(!0), ht()) {
        var Nt = lt(), _e = Nt.box, Ie = Nt.content;
        v.props.animation && (kf([_e, Ie], kt), Jo([_e, Ie], "hidden"));
      }
      yt(), mt(), v.props.animation ? ht() && Et(kt, v.unmount) : v.unmount();
    }
  }
  function Zr(k) {
    Y().addEventListener("mousemove", P), aE(cl, P), P(k);
  }
  function ti() {
    v.state.isVisible && v.hide(), v.state.isMounted && (Dt(), oe().forEach(function(k) {
      k._tippy.unmount();
    }), L.parentNode && L.parentNode.removeChild(L), $f = $f.filter(function(k) {
      return k !== v;
    }), v.state.isMounted = !1, ct("onHidden", [v]));
  }
  function ei() {
    v.state.isDestroyed || (v.clearDelayTimeouts(), v.unmount(), ue(), delete t._tippy, v.state.isDestroyed = !0, ct("onDestroy", [v]));
  }
}
function Yt(t, e) {
  e === void 0 && (e = {});
  var n = br.plugins.concat(e.plugins || []);
  Tb();
  var i = Object.assign({}, e, {
    plugins: n
  }), o = gb(t), a = o.reduce(function(l, f) {
    var c = f && Nb(f, i);
    return c && l.push(c), l;
  }, []);
  return su(t) ? a[0] : a;
}
Yt.defaultProps = br;
Yt.setDefaultProps = bb;
Yt.currentInput = kr;
var xb = Object.assign({}, Mv, {
  effect: function(e) {
    var n = e.state, i = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(n.elements.popper.style, i.popper), n.styles = i, n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow);
  }
}), wb = function(e, n) {
  var i;
  n === void 0 && (n = {});
  var o = e, a = [], l = [], f, c = n.overrides, g = [], p = !1;
  function _() {
    l = o.map(function(v) {
      return ss(v.props.triggerTarget || v.reference);
    }).reduce(function(v, G) {
      return v.concat(G);
    }, []);
  }
  function R() {
    a = o.map(function(v) {
      return v.reference;
    });
  }
  function x(v) {
    o.forEach(function(G) {
      v ? G.enable() : G.disable();
    });
  }
  function P(v) {
    return o.map(function(G) {
      var L = G.setProps;
      return G.setProps = function(B) {
        L(B), G.reference === f && v.setProps(B);
      }, function() {
        G.setProps = L;
      };
    });
  }
  function O(v, G) {
    var L = l.indexOf(G);
    if (G !== f) {
      f = G;
      var B = (c || []).concat("content").reduce(function(U, y) {
        return U[y] = o[L].props[y], U;
      }, {});
      v.setProps(Object.assign({}, B, {
        getReferenceClientRect: typeof B.getReferenceClientRect == "function" ? B.getReferenceClientRect : function() {
          var U;
          return (U = a[L]) == null ? void 0 : U.getBoundingClientRect();
        }
      }));
    }
  }
  x(!1), R(), _();
  var W = {
    fn: function() {
      return {
        onDestroy: function() {
          x(!0);
        },
        onHidden: function() {
          f = null;
        },
        onClickOutside: function(L) {
          L.props.showOnCreate && !p && (p = !0, f = null);
        },
        onShow: function(L) {
          L.props.showOnCreate && !p && (p = !0, O(L, a[0]));
        },
        onTrigger: function(L, B) {
          O(L, B.currentTarget);
        }
      };
    }
  }, b = Yt(fs(), Object.assign({}, cb(n, ["overrides"]), {
    plugins: [W].concat(n.plugins || []),
    triggerTarget: l,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((i = n.popperOptions) == null ? void 0 : i.modifiers) || [], [xb])
    })
  })), w = b.show;
  b.show = function(v) {
    if (w(), !f && v == null)
      return O(b, a[0]);
    if (!(f && v == null)) {
      if (typeof v == "number")
        return a[v] && O(b, a[v]);
      if (o.indexOf(v) >= 0) {
        var G = v.reference;
        return O(b, G);
      }
      if (a.indexOf(v) >= 0)
        return O(b, v);
    }
  }, b.showNext = function() {
    var v = a[0];
    if (!f)
      return b.show(0);
    var G = a.indexOf(f);
    b.show(a[G + 1] || v);
  }, b.showPrevious = function() {
    var v = a[a.length - 1];
    if (!f)
      return b.show(v);
    var G = a.indexOf(f), L = a[G - 1] || v;
    b.show(L);
  };
  var Z = b.setProps;
  return b.setProps = function(v) {
    c = v.overrides || c, Z(v);
  }, b.setInstances = function(v) {
    x(!0), g.forEach(function(G) {
      return G();
    }), o = v, x(!1), R(), _(), g = P(b), b.setProps({
      triggerTarget: l
    });
  }, g = P(b), b;
}, Mb = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(e) {
    var n;
    if (!((n = e.props.render) != null && n.$$tippy))
      return {};
    var i = Bl(e.popper), o = i.box, a = i.content, l = e.props.animateFill ? Db() : null;
    return {
      onCreate: function() {
        l && (o.insertBefore(l, o.firstElementChild), o.setAttribute("data-animatefill", ""), o.style.overflow = "hidden", e.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (l) {
          var c = o.style.transitionDuration, g = Number(c.replace("ms", ""));
          a.style.transitionDelay = Math.round(g / 10) + "ms", l.style.transitionDuration = c, Jo([l], "visible");
        }
      },
      onShow: function() {
        l && (l.style.transitionDuration = "0ms");
      },
      onHide: function() {
        l && Jo([l], "hidden");
      }
    };
  }
};
function Db() {
  var t = fs();
  return t.className = Fv, Jo([t], "hidden"), t;
}
var ac = {
  clientX: 0,
  clientY: 0
}, dl = [];
function Jv(t) {
  var e = t.clientX, n = t.clientY;
  ac = {
    clientX: e,
    clientY: n
  };
}
function Pb(t) {
  t.addEventListener("mousemove", Jv);
}
function Ub(t) {
  t.removeEventListener("mousemove", Jv);
}
var kb = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(e) {
    var n = e.reference, i = Yv(e.props.triggerTarget || n), o = !1, a = !1, l = !0, f = e.props;
    function c() {
      return e.props.followCursor === "initial" && e.state.isVisible;
    }
    function g() {
      i.addEventListener("mousemove", R);
    }
    function p() {
      i.removeEventListener("mousemove", R);
    }
    function _() {
      o = !0, e.setProps({
        getReferenceClientRect: null
      }), o = !1;
    }
    function R(O) {
      var W = O.target ? n.contains(O.target) : !0, b = e.props.followCursor, w = O.clientX, Z = O.clientY, v = n.getBoundingClientRect(), G = w - v.left, L = Z - v.top;
      (W || !e.props.interactive) && e.setProps({
        // @ts-ignore - unneeded DOMRect properties
        getReferenceClientRect: function() {
          var U = n.getBoundingClientRect(), y = w, tt = Z;
          b === "initial" && (y = U.left + G, tt = U.top + L);
          var F = b === "horizontal" ? U.top : tt, ht = b === "vertical" ? U.right : y, M = b === "horizontal" ? U.bottom : tt, Y = b === "vertical" ? U.left : y;
          return {
            width: ht - Y,
            height: M - F,
            top: F,
            right: ht,
            bottom: M,
            left: Y
          };
        }
      });
    }
    function x() {
      e.props.followCursor && (dl.push({
        instance: e,
        doc: i
      }), Pb(i));
    }
    function P() {
      dl = dl.filter(function(O) {
        return O.instance !== e;
      }), dl.filter(function(O) {
        return O.doc === i;
      }).length === 0 && Ub(i);
    }
    return {
      onCreate: x,
      onDestroy: P,
      onBeforeUpdate: function() {
        f = e.props;
      },
      onAfterUpdate: function(W, b) {
        var w = b.followCursor;
        o || w !== void 0 && f.followCursor !== w && (P(), w ? (x(), e.state.isMounted && !a && !c() && g()) : (p(), _()));
      },
      onMount: function() {
        e.props.followCursor && !a && (l && (R(ac), l = !1), c() || g());
      },
      onTrigger: function(W, b) {
        id(b) && (ac = {
          clientX: b.clientX,
          clientY: b.clientY
        }), a = b.type === "focus";
      },
      onHidden: function() {
        e.props.followCursor && (_(), p(), l = !0);
      }
    };
  }
};
function Bb(t, e) {
  var n;
  return {
    popperOptions: Object.assign({}, t.popperOptions, {
      modifiers: [].concat((((n = t.popperOptions) == null ? void 0 : n.modifiers) || []).filter(function(i) {
        var o = i.name;
        return o !== e.name;
      }), [e])
    })
  };
}
var $b = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(e) {
    var n = e.reference;
    function i() {
      return !!e.props.inlinePositioning;
    }
    var o, a = -1, l = !1, f = [], c = {
      name: "tippyInlinePositioning",
      enabled: !0,
      phase: "afterWrite",
      fn: function(x) {
        var P = x.state;
        i() && (f.indexOf(P.placement) !== -1 && (f = []), o !== P.placement && f.indexOf(P.placement) === -1 && (f.push(P.placement), e.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function() {
            return g(P.placement);
          }
        })), o = P.placement);
      }
    };
    function g(R) {
      return Hb(zv(R), n.getBoundingClientRect(), Js(n.getClientRects()), a);
    }
    function p(R) {
      l = !0, e.setProps(R), l = !1;
    }
    function _() {
      l || p(Bb(e.props, c));
    }
    return {
      onCreate: _,
      onAfterUpdate: _,
      onTrigger: function(x, P) {
        if (id(P)) {
          var O = Js(e.reference.getClientRects()), W = O.find(function(w) {
            return w.left - 2 <= P.clientX && w.right + 2 >= P.clientX && w.top - 2 <= P.clientY && w.bottom + 2 >= P.clientY;
          }), b = O.indexOf(W);
          a = b > -1 ? b : a;
        }
      },
      onHidden: function() {
        a = -1;
      }
    };
  }
};
function Hb(t, e, n, i) {
  if (n.length < 2 || t === null)
    return e;
  if (n.length === 2 && i >= 0 && n[0].left > n[1].right)
    return n[i] || e;
  switch (t) {
    case "top":
    case "bottom": {
      var o = n[0], a = n[n.length - 1], l = t === "top", f = o.top, c = a.bottom, g = l ? o.left : a.left, p = l ? o.right : a.right, _ = p - g, R = c - f;
      return {
        top: f,
        bottom: c,
        left: g,
        right: p,
        width: _,
        height: R
      };
    }
    case "left":
    case "right": {
      var x = Math.min.apply(Math, n.map(function(L) {
        return L.left;
      })), P = Math.max.apply(Math, n.map(function(L) {
        return L.right;
      })), O = n.filter(function(L) {
        return t === "left" ? L.left === x : L.right === P;
      }), W = O[0].top, b = O[O.length - 1].bottom, w = x, Z = P, v = Z - w, G = b - W;
      return {
        top: W,
        bottom: b,
        left: w,
        right: Z,
        width: v,
        height: G
      };
    }
    default:
      return e;
  }
}
var Fb = {
  name: "sticky",
  defaultValue: !1,
  fn: function(e) {
    var n = e.reference, i = e.popper;
    function o() {
      return e.popperInstance ? e.popperInstance.state.elements.reference : n;
    }
    function a(g) {
      return e.props.sticky === !0 || e.props.sticky === g;
    }
    var l = null, f = null;
    function c() {
      var g = a("reference") ? o().getBoundingClientRect() : null, p = a("popper") ? i.getBoundingClientRect() : null;
      (g && hE(l, g) || p && hE(f, p)) && e.popperInstance && e.popperInstance.update(), l = g, f = p, e.state.isMounted && requestAnimationFrame(c);
    }
    return {
      onMount: function() {
        e.props.sticky && c();
      }
    };
  }
};
function hE(t, e) {
  return t && e ? t.top !== e.top || t.right !== e.right || t.bottom !== e.bottom || t.left !== e.left : !0;
}
Yt.setDefaultProps({
  render: qv
});
Yt.setDefaultProps({
  //@ts-ignore
  onShow: (t) => {
    if (!t.props.content)
      return !1;
  }
});
function Qv(t, e = {}, n = { mount: !0, appName: "Tippy" }) {
  n = Object.assign({ mount: !0, appName: "Tippy" }, n);
  const i = FO(), o = jt(), a = jt({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), l = WO();
  let f = null;
  const c = () => f || (f = document.createDocumentFragment(), f), g = (B) => {
    let U, y = Ni(B) ? B.value : B;
    return XO(y) ? (l.value || (l.value = Pl({
      name: n.appName,
      setup: () => () => Ni(B) ? B.value : B
    }), i && Object.assign(l.value._context, i.appContext), l.value.mount(c())), U = () => c()) : typeof y == "object" ? (l.value || (l.value = Pl({
      name: n.appName,
      setup: () => () => di(Ni(B) ? B.value : B)
    }), i && Object.assign(l.value._context, i.appContext), l.value.mount(c())), U = () => c()) : U = y, U;
  }, p = (B) => {
    let U = {};
    return Ni(B) ? U = B.value || {} : Yh(B) ? U = { ...B } : U = { ...B }, U.content && (U.content = g(U.content)), U.triggerTarget && (U.triggerTarget = Ni(U.triggerTarget) ? U.triggerTarget.value : U.triggerTarget), (!U.plugins || !Array.isArray(U.plugins)) && (U.plugins = []), U.plugins = U.plugins.filter((y) => y.name !== "vueTippyReactiveState"), U.plugins.push({
      name: "vueTippyReactiveState",
      fn: () => ({
        onCreate() {
          a.value.isEnabled = !0;
        },
        onMount() {
          a.value.isMounted = !0;
        },
        onShow() {
          a.value.isMounted = !0, a.value.isVisible = !0;
        },
        onShown() {
          a.value.isShown = !0;
        },
        onHide() {
          a.value.isMounted = !1, a.value.isVisible = !1;
        },
        onHidden() {
          a.value.isShown = !1;
        },
        onUnmounted() {
          a.value.isMounted = !1;
        },
        onDestroy() {
          a.value.isDestroyed = !0;
        }
      })
    }), U;
  }, _ = () => {
    o.value && o.value.setProps(p(e));
  }, R = () => {
    !o.value || !e.content || o.value.setContent(g(e.content));
  }, x = (B) => {
    var U;
    (U = o.value) === null || U === void 0 || U.setContent(g(B));
  }, P = (B) => {
    var U;
    (U = o.value) === null || U === void 0 || U.setProps(p(B));
  }, O = () => {
    var B;
    o.value && (o.value.destroy(), o.value = void 0), f = null, (B = l.value) === null || B === void 0 || B.unmount(), l.value = void 0;
  }, W = () => {
    var B;
    (B = o.value) === null || B === void 0 || B.show();
  }, b = () => {
    var B;
    (B = o.value) === null || B === void 0 || B.hide();
  }, w = () => {
    var B;
    (B = o.value) === null || B === void 0 || B.disable(), a.value.isEnabled = !1;
  }, Z = () => {
    var B;
    (B = o.value) === null || B === void 0 || B.enable(), a.value.isEnabled = !0;
  }, v = () => {
    var B;
    (B = o.value) === null || B === void 0 || B.unmount();
  }, G = () => {
    if (!t)
      return;
    let B = Ni(t) ? t.value : t;
    typeof B == "function" && (B = B()), B && (o.value = Yt(B, p(e)), B.$tippy = L);
  }, L = {
    tippy: o,
    refresh: _,
    refreshContent: R,
    setContent: x,
    setProps: P,
    destroy: O,
    hide: b,
    show: W,
    disable: w,
    enable: Z,
    unmount: v,
    mount: G,
    state: a
  };
  return n.mount && (i ? i.isMounted ? G() : _s(G) : G()), i && VO(() => {
    O();
  }), Ni(e) || Yh(e) ? Ln(e, _, { immediate: !1 }) : Ni(e.content) && Ln(e.content, R, { immediate: !1 }), L;
}
function Wb(t, e) {
  const n = jt();
  return _s(() => {
    const o = (Array.isArray(t) ? t.map((a) => a.value) : typeof t == "function" ? t() : t.value).map((a) => a instanceof Element ? a._tippy : a).filter(Boolean);
    n.value = wb(o, e ? { allowHTML: !0, ...e } : { allowHTML: !0 });
  }), {
    singleton: n
  };
}
function Vb(t) {
  return typeof t == "function" ? t() : d(t);
}
function Xb(t) {
  var e, n;
  const i = Vb(t);
  return (n = (e = i) === null || e === void 0 ? void 0 : e.$el) !== null && n !== void 0 ? n : i;
}
$e({
  props: {
    to: {
      type: [String, Function]
    },
    tag: {
      type: [String, Object],
      default: "span"
    },
    contentTag: {
      type: [String, Object],
      default: "span"
    },
    contentClass: {
      type: String,
      default: null
    },
    appendTo: { default: () => Yt.defaultProps.appendTo },
    aria: { default: () => Yt.defaultProps.aria },
    delay: { default: () => Yt.defaultProps.delay },
    duration: { default: () => Yt.defaultProps.duration },
    getReferenceClientRect: { default: () => Yt.defaultProps.getReferenceClientRect },
    hideOnClick: { type: [Boolean, String], default: () => Yt.defaultProps.hideOnClick },
    ignoreAttributes: { type: Boolean, default: () => Yt.defaultProps.ignoreAttributes },
    interactive: { type: Boolean, default: () => Yt.defaultProps.interactive },
    interactiveBorder: { default: () => Yt.defaultProps.interactiveBorder },
    interactiveDebounce: { default: () => Yt.defaultProps.interactiveDebounce },
    moveTransition: { default: () => Yt.defaultProps.moveTransition },
    offset: { default: () => Yt.defaultProps.offset },
    onAfterUpdate: { default: () => Yt.defaultProps.onAfterUpdate },
    onBeforeUpdate: { default: () => Yt.defaultProps.onBeforeUpdate },
    onCreate: { default: () => Yt.defaultProps.onCreate },
    onDestroy: { default: () => Yt.defaultProps.onDestroy },
    onHidden: { default: () => Yt.defaultProps.onHidden },
    onHide: { default: () => Yt.defaultProps.onHide },
    onMount: { default: () => Yt.defaultProps.onMount },
    onShow: { default: () => Yt.defaultProps.onShow },
    onShown: { default: () => Yt.defaultProps.onShown },
    onTrigger: { default: () => Yt.defaultProps.onTrigger },
    onUntrigger: { default: () => Yt.defaultProps.onUntrigger },
    onClickOutside: { default: () => Yt.defaultProps.onClickOutside },
    placement: { default: () => Yt.defaultProps.placement },
    plugins: { default: () => Yt.defaultProps.plugins },
    popperOptions: { default: () => Yt.defaultProps.popperOptions },
    render: { default: () => Yt.defaultProps.render },
    showOnCreate: { type: Boolean, default: () => Yt.defaultProps.showOnCreate },
    touch: { type: [Boolean, String, Array], default: () => Yt.defaultProps.touch },
    trigger: { default: () => Yt.defaultProps.trigger },
    triggerTarget: { default: () => Yt.defaultProps.triggerTarget },
    animateFill: { type: Boolean, default: () => Yt.defaultProps.animateFill },
    followCursor: { type: [Boolean, String], default: () => Yt.defaultProps.followCursor },
    inlinePositioning: { type: Boolean, default: () => Yt.defaultProps.inlinePositioning },
    sticky: { type: [Boolean, String], default: () => Yt.defaultProps.sticky },
    allowHTML: { type: Boolean, default: () => Yt.defaultProps.allowHTML },
    animation: { default: () => Yt.defaultProps.animation },
    arrow: { default: () => Yt.defaultProps.arrow },
    content: { default: () => Yt.defaultProps.content },
    inertia: { default: () => Yt.defaultProps.inertia },
    maxWidth: { default: () => Yt.defaultProps.maxWidth },
    role: { default: () => Yt.defaultProps.role },
    theme: { default: () => Yt.defaultProps.theme },
    zIndex: { default: () => Yt.defaultProps.zIndex }
  },
  emits: ["state"],
  setup(t, { slots: e, emit: n, expose: i }) {
    const o = jt(), a = jt(), l = jt(), f = jt(!1), c = () => {
      let x = { ...t };
      for (const P of ["to", "tag", "contentTag", "contentClass"])
        x.hasOwnProperty(P) && delete x[P];
      return x;
    };
    let g = () => Xb(o);
    t.to && (typeof Element < "u" && t.to instanceof Element ? g = () => t.to : t.to === "parent" ? g = () => {
      let x = o.value;
      return x || (x = o.value = a.value.parentElement), x;
    } : (typeof t.to == "string" || t.to instanceof String) && (g = () => document.querySelector(t.to)));
    const p = Qv(g, c());
    let _ = e.content;
    !_ && t.to === "parent" && (_ = e.default), _s(() => {
      f.value = !0, Ko(() => {
        _ && p.setContent(() => l.value);
      });
    }), Ln(p.state, () => {
      n("state", d(p.state));
    }, { immediate: !0, deep: !0 }), Ln(() => t, () => {
      p.setProps(c()), _ && p.setContent(() => l.value);
    }, { deep: !0 });
    let R = Kn({
      elem: o,
      contentElem: l,
      mounted: f,
      ...p
    });
    return i(R), () => {
      const x = (typeof t.contentTag == "string", t.contentTag), P = _ ? di(x, {
        ref: l,
        style: { display: f.value ? "inherit" : "none" },
        class: t.contentClass
      }, _(R)) : null;
      if (t.to === "parent") {
        const b = [];
        if (!o.value) {
          const w = di("span", {
            ref: a,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          b.push(w);
        }
        return P && b.push(P), b;
      }
      const O = e.default ? e.default(R) : [];
      if (!t.tag) {
        const b = di(O[0], {
          ref: o,
          "data-v-tippy": ""
        });
        return P ? [b, P] : b;
      }
      const W = (typeof t.tag == "string", t.tag);
      return di(W, { ref: o, "data-v-tippy": "" }, P ? [O, P] : O);
    };
  }
});
const Gb = [
  "a11y",
  "allowHTML",
  "arrow",
  "flip",
  "flipOnUpdate",
  "hideOnClick",
  "ignoreAttributes",
  "inertia",
  "interactive",
  "lazy",
  "multiple",
  "showOnInit",
  "touch",
  "touchHold"
];
let lc = {};
Object.keys(Yt.defaultProps).forEach((t) => {
  Gb.includes(t) ? lc[t] = {
    type: Boolean,
    default: function() {
      return Yt.defaultProps[t];
    }
  } : lc[t] = {
    default: function() {
      return Yt.defaultProps[t];
    }
  };
});
$e({
  props: lc,
  setup(t) {
    const e = jt([]), { singleton: n } = Wb(e, t);
    return { instances: e, singleton: n };
  },
  mounted() {
    var t;
    const n = this.$el.parentElement.querySelectorAll("[data-v-tippy]");
    this.instances = Array.from(n).map((i) => i._tippy).filter(Boolean), (t = this.singleton) === null || t === void 0 || t.setInstances(this.instances);
  },
  render() {
    let t = this.$slots.default ? this.$slots.default() : [];
    return di(() => t);
  }
});
const me = {
  mounted(t, e, n) {
    const i = typeof e.value == "string" ? { content: e.value } : e.value || {}, o = Object.keys(e.modifiers || {}), a = o.find((f) => f !== "arrow"), l = o.findIndex((f) => f === "arrow") !== -1;
    a && (i.placement = i.placement || a), l && (i.arrow = i.arrow !== void 0 ? i.arrow : !0), n.props && n.props.onTippyShow && (i.onShow = function(...f) {
      var c;
      return (c = n.props) === null || c === void 0 ? void 0 : c.onTippyShow(...f);
    }), n.props && n.props.onTippyShown && (i.onShown = function(...f) {
      var c;
      return (c = n.props) === null || c === void 0 ? void 0 : c.onTippyShown(...f);
    }), n.props && n.props.onTippyHidden && (i.onHidden = function(...f) {
      var c;
      return (c = n.props) === null || c === void 0 ? void 0 : c.onTippyHidden(...f);
    }), n.props && n.props.onTippyHide && (i.onHide = function(...f) {
      var c;
      return (c = n.props) === null || c === void 0 ? void 0 : c.onTippyHide(...f);
    }), n.props && n.props.onTippyMount && (i.onMount = function(...f) {
      var c;
      return (c = n.props) === null || c === void 0 ? void 0 : c.onTippyMount(...f);
    }), t.getAttribute("title") && !i.content && (i.content = t.getAttribute("title"), t.removeAttribute("title")), t.getAttribute("content") && !i.content && (i.content = t.getAttribute("content")), Qv(t, i);
  },
  unmounted(t) {
    t.$tippy ? t.$tippy.destroy() : t._tippy && t._tippy.destroy();
  },
  updated(t, e) {
    const n = typeof e.value == "string" ? { content: e.value } : e.value || {};
    t.getAttribute("title") && !n.content && (n.content = t.getAttribute("title"), t.removeAttribute("title")), t.getAttribute("content") && !n.content && (n.content = t.getAttribute("content")), t.$tippy ? t.$tippy.setProps(n || {}) : t._tippy && t._tippy.setProps(n || {});
  }
}, zb = Yt.setDefaultProps;
zb({
  ignoreAttributes: !0,
  plugins: [Fb, $b, kb, Mb]
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Yb(t, e, n) {
  return (e = jb(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function EE(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function _t(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? EE(Object(n), !0).forEach(function(i) {
      Yb(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : EE(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function Kb(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function jb(t) {
  var e = Kb(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
const gE = () => {
};
let sd = {}, Zv = {}, tm = null, em = {
  mark: gE,
  measure: gE
};
try {
  typeof window < "u" && (sd = window), typeof document < "u" && (Zv = document), typeof MutationObserver < "u" && (tm = MutationObserver), typeof performance < "u" && (em = performance);
} catch {
}
const {
  userAgent: vE = ""
} = sd.navigator || {}, Di = sd, Ve = Zv, mE = tm, pl = em;
Di.document;
const _i = !!Ve.documentElement && !!Ve.head && typeof Ve.addEventListener == "function" && typeof Ve.createElement == "function", nm = ~vE.indexOf("MSIE") || ~vE.indexOf("Trident/");
var qb = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Jb = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, rm = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, Qb = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, im = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], On = "classic", ou = "duotone", Zb = "sharp", tI = "sharp-duotone", sm = [On, ou, Zb, tI], eI = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, nI = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, rI = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), iI = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, sI = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], _E = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, oI = ["kit"], aI = {
  kit: {
    "fa-kit": "fak"
  }
}, lI = ["fak", "fakd"], uI = {
  kit: {
    fak: "fa-kit"
  }
}, TE = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, hl = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, fI = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], cI = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], dI = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, pI = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, hI = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, uc = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, EI = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], fc = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...fI, ...EI], gI = ["solid", "regular", "light", "thin", "duotone", "brands"], om = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vI = om.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), mI = [...Object.keys(hI), ...gI, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", hl.GROUP, hl.SWAP_OPACITY, hl.PRIMARY, hl.SECONDARY].concat(om.map((t) => "".concat(t, "x"))).concat(vI.map((t) => "w-".concat(t))), _I = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Ei = "___FONT_AWESOME___", cc = 16, am = "fa", lm = "svg-inline--fa", hs = "data-fa-i2svg", dc = "data-fa-pseudo-element", TI = "data-fa-pseudo-element-pending", od = "data-prefix", ad = "data-icon", AE = "fontawesome-i2svg", AI = "async", SI = ["HTML", "HEAD", "STYLE", "SCRIPT"], um = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function la(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[On];
    }
  });
}
const fm = _t({}, rm);
fm[On] = _t(_t(_t(_t({}, {
  "fa-duotone": "duotone"
}), rm[On]), _E.kit), _E["kit-duotone"]);
const yI = la(fm), pc = _t({}, iI);
pc[On] = _t(_t(_t(_t({}, {
  duotone: "fad"
}), pc[On]), TE.kit), TE["kit-duotone"]);
const SE = la(pc), hc = _t({}, uc);
hc[On] = _t(_t({}, hc[On]), uI.kit);
const ld = la(hc), Ec = _t({}, pI);
Ec[On] = _t(_t({}, Ec[On]), aI.kit);
la(Ec);
const OI = qb, cm = "fa-layers-text", RI = Jb, bI = _t({}, eI);
la(bI);
const II = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Hf = Qb, LI = [...oI, ...mI], Vo = Di.FontAwesomeConfig || {};
function CI(t) {
  var e = Ve.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function NI(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
Ve && typeof Ve.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, i] = e;
  const o = NI(CI(n));
  o != null && (Vo[i] = o);
});
const dm = {
  styleDefault: "solid",
  familyDefault: On,
  cssPrefix: am,
  replacementClass: lm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Vo.familyPrefix && (Vo.cssPrefix = Vo.familyPrefix);
const Qs = _t(_t({}, dm), Vo);
Qs.autoReplaceSvg || (Qs.observeMutations = !1);
const Gt = {};
Object.keys(dm).forEach((t) => {
  Object.defineProperty(Gt, t, {
    enumerable: !0,
    set: function(e) {
      Qs[t] = e, Xo.forEach((n) => n(Gt));
    },
    get: function() {
      return Qs[t];
    }
  });
});
Object.defineProperty(Gt, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    Qs.cssPrefix = t, Xo.forEach((e) => e(Gt));
  },
  get: function() {
    return Qs.cssPrefix;
  }
});
Di.FontAwesomeConfig = Gt;
const Xo = [];
function xI(t) {
  return Xo.push(t), () => {
    Xo.splice(Xo.indexOf(t), 1);
  };
}
const xi = cc, Fr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function wI(t) {
  if (!t || !_i)
    return;
  const e = Ve.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const n = Ve.head.childNodes;
  let i = null;
  for (let o = n.length - 1; o > -1; o--) {
    const a = n[o], l = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(l) > -1 && (i = a);
  }
  return Ve.head.insertBefore(e, i), t;
}
const MI = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Qo() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += MI[Math.random() * 62 | 0];
  return e;
}
function oo(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function ud(t) {
  return t.classList ? oo(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function pm(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function DI(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(pm(t[n]), '" '), "").trim();
}
function au(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function fd(t) {
  return t.size !== Fr.size || t.x !== Fr.x || t.y !== Fr.y || t.rotate !== Fr.rotate || t.flipX || t.flipY;
}
function PI(t) {
  let {
    transform: e,
    containerWidth: n,
    iconWidth: i
  } = t;
  const o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), l = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), f = "rotate(".concat(e.rotate, " 0 0)"), c = {
    transform: "".concat(a, " ").concat(l, " ").concat(f)
  }, g = {
    transform: "translate(".concat(i / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: c,
    path: g
  };
}
function UI(t) {
  let {
    transform: e,
    width: n = cc,
    height: i = cc,
    startCentered: o = !1
  } = t, a = "";
  return o && nm ? a += "translate(".concat(e.x / xi - n / 2, "em, ").concat(e.y / xi - i / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(e.x / xi, "em), calc(-50% + ").concat(e.y / xi, "em)) ") : a += "translate(".concat(e.x / xi, "em, ").concat(e.y / xi, "em) "), a += "scale(".concat(e.size / xi * (e.flipX ? -1 : 1), ", ").concat(e.size / xi * (e.flipY ? -1 : 1), ") "), a += "rotate(".concat(e.rotate, "deg) "), a;
}
var kI = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function hm() {
  const t = am, e = lm, n = Gt.cssPrefix, i = Gt.replacementClass;
  let o = kI;
  if (n !== t || i !== e) {
    const a = new RegExp("\\.".concat(t, "\\-"), "g"), l = new RegExp("\\--".concat(t, "\\-"), "g"), f = new RegExp("\\.".concat(e), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(l, "--".concat(n, "-")).replace(f, ".".concat(i));
  }
  return o;
}
let yE = !1;
function Ff() {
  Gt.autoAddCss && !yE && (wI(hm()), yE = !0);
}
var BI = {
  mixout() {
    return {
      dom: {
        css: hm,
        insertCss: Ff
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ff();
      },
      beforeI2svg() {
        Ff();
      }
    };
  }
};
const gi = Di || {};
gi[Ei] || (gi[Ei] = {});
gi[Ei].styles || (gi[Ei].styles = {});
gi[Ei].hooks || (gi[Ei].hooks = {});
gi[Ei].shims || (gi[Ei].shims = []);
var Wr = gi[Ei];
const Em = [], gm = function() {
  Ve.removeEventListener("DOMContentLoaded", gm), $l = 1, Em.map((t) => t());
};
let $l = !1;
_i && ($l = (Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState), $l || Ve.addEventListener("DOMContentLoaded", gm));
function $I(t) {
  _i && ($l ? setTimeout(t, 0) : Em.push(t));
}
function ua(t) {
  const {
    tag: e,
    attributes: n = {},
    children: i = []
  } = t;
  return typeof t == "string" ? pm(t) : "<".concat(e, " ").concat(DI(n), ">").concat(i.map(ua).join(""), "</").concat(e, ">");
}
function OE(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var Wf = function(e, n, i, o) {
  var a = Object.keys(e), l = a.length, f = n, c, g, p;
  for (i === void 0 ? (c = 1, p = e[a[0]]) : (c = 0, p = i); c < l; c++)
    g = a[c], p = f(p, e[g], g, e);
  return p;
};
function HI(t) {
  const e = [];
  let n = 0;
  const i = t.length;
  for (; n < i; ) {
    const o = t.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < i) {
      const a = t.charCodeAt(n++);
      (a & 64512) == 56320 ? e.push(((o & 1023) << 10) + (a & 1023) + 65536) : (e.push(o), n--);
    } else
      e.push(o);
  }
  return e;
}
function gc(t) {
  const e = HI(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function FI(t, e) {
  const n = t.length;
  let i = t.charCodeAt(e), o;
  return i >= 55296 && i <= 56319 && n > e + 1 && (o = t.charCodeAt(e + 1), o >= 56320 && o <= 57343) ? (i - 55296) * 1024 + o - 56320 + 65536 : i;
}
function RE(t) {
  return Object.keys(t).reduce((e, n) => {
    const i = t[n];
    return !!i.icon ? e[i.iconName] = i.icon : e[n] = i, e;
  }, {});
}
function vc(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: i = !1
  } = n, o = RE(e);
  typeof Wr.hooks.addPack == "function" && !i ? Wr.hooks.addPack(t, RE(e)) : Wr.styles[t] = _t(_t({}, Wr.styles[t] || {}), o), t === "fas" && vc("fa", e);
}
const {
  styles: Zo,
  shims: WI
} = Wr, vm = Object.keys(ld), VI = vm.reduce((t, e) => (t[e] = Object.keys(ld[e]), t), {});
let cd = null, mm = {}, _m = {}, Tm = {}, Am = {}, Sm = {};
function XI(t) {
  return ~LI.indexOf(t);
}
function GI(t, e) {
  const n = e.split("-"), i = n[0], o = n.slice(1).join("-");
  return i === t && o !== "" && !XI(o) ? o : null;
}
const ym = () => {
  const t = (i) => Wf(Zo, (o, a, l) => (o[l] = Wf(a, i, {}), o), {});
  mm = t((i, o, a) => (o[3] && (i[o[3]] = a), o[2] && o[2].filter((f) => typeof f == "number").forEach((f) => {
    i[f.toString(16)] = a;
  }), i)), _m = t((i, o, a) => (i[a] = a, o[2] && o[2].filter((f) => typeof f == "string").forEach((f) => {
    i[f] = a;
  }), i)), Sm = t((i, o, a) => {
    const l = o[2];
    return i[a] = a, l.forEach((f) => {
      i[f] = a;
    }), i;
  });
  const e = "far" in Zo || Gt.autoFetchSvg, n = Wf(WI, (i, o) => {
    const a = o[0];
    let l = o[1];
    const f = o[2];
    return l === "far" && !e && (l = "fas"), typeof a == "string" && (i.names[a] = {
      prefix: l,
      iconName: f
    }), typeof a == "number" && (i.unicodes[a.toString(16)] = {
      prefix: l,
      iconName: f
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  Tm = n.names, Am = n.unicodes, cd = lu(Gt.styleDefault, {
    family: Gt.familyDefault
  });
};
xI((t) => {
  cd = lu(t.styleDefault, {
    family: Gt.familyDefault
  });
});
ym();
function dd(t, e) {
  return (mm[t] || {})[e];
}
function zI(t, e) {
  return (_m[t] || {})[e];
}
function as(t, e) {
  return (Sm[t] || {})[e];
}
function Om(t) {
  return Tm[t] || {
    prefix: null,
    iconName: null
  };
}
function YI(t) {
  const e = Am[t], n = dd("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Pi() {
  return cd;
}
const Rm = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function KI(t) {
  let e = On;
  const n = vm.reduce((i, o) => (i[o] = "".concat(Gt.cssPrefix, "-").concat(o), i), {});
  return sm.forEach((i) => {
    (t.includes(n[i]) || t.some((o) => VI[i].includes(o))) && (e = i);
  }), e;
}
function lu(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = On
  } = e, i = yI[n][t];
  if (n === ou && !t)
    return "fad";
  const o = SE[n][t] || SE[n][i], a = t in Wr.styles ? t : null;
  return o || a || null;
}
function jI(t) {
  let e = [], n = null;
  return t.forEach((i) => {
    const o = GI(Gt.cssPrefix, i);
    o ? n = o : i && e.push(i);
  }), {
    iconName: n,
    rest: e
  };
}
function bE(t) {
  return t.sort().filter((e, n, i) => i.indexOf(e) === n);
}
function uu(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e;
  let i = null;
  const o = fc.concat(cI), a = bE(t.filter((_) => o.includes(_))), l = bE(t.filter((_) => !fc.includes(_))), f = a.filter((_) => (i = _, !im.includes(_))), [c = null] = f, g = KI(a), p = _t(_t({}, jI(l)), {}, {
    prefix: lu(c, {
      family: g
    })
  });
  return _t(_t(_t({}, p), ZI({
    values: t,
    family: g,
    styles: Zo,
    config: Gt,
    canonical: p,
    givenPrefix: i
  })), qI(n, i, p));
}
function qI(t, e, n) {
  let {
    prefix: i,
    iconName: o
  } = n;
  if (t || !i || !o)
    return {
      prefix: i,
      iconName: o
    };
  const a = e === "fa" ? Om(o) : {}, l = as(i, o);
  return o = a.iconName || l || o, i = a.prefix || i, i === "far" && !Zo.far && Zo.fas && !Gt.autoFetchSvg && (i = "fas"), {
    prefix: i,
    iconName: o
  };
}
const JI = sm.filter((t) => t !== On || t !== ou), QI = Object.keys(uc).filter((t) => t !== On).map((t) => Object.keys(uc[t])).flat();
function ZI(t) {
  const {
    values: e,
    family: n,
    canonical: i,
    givenPrefix: o = "",
    styles: a = {},
    config: l = {}
  } = t, f = n === ou, c = e.includes("fa-duotone") || e.includes("fad"), g = l.familyDefault === "duotone", p = i.prefix === "fad" || i.prefix === "fa-duotone";
  if (!f && (c || g || p) && (i.prefix = "fad"), (e.includes("fa-brands") || e.includes("fab")) && (i.prefix = "fab"), !i.prefix && JI.includes(n) && (Object.keys(a).find((R) => QI.includes(R)) || l.autoFetchSvg)) {
    const R = rI.get(n).defaultShortPrefixId;
    i.prefix = R, i.iconName = as(i.prefix, i.iconName) || i.iconName;
  }
  return (i.prefix === "fa" || o === "fa") && (i.prefix = Pi() || "fas"), i;
}
class tL {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = _t(_t({}, this.definitions[a] || {}), o[a]), vc(a, o[a]);
      const l = ld[On][a];
      l && vc(l, o[a]), ym();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(e, n) {
    const i = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(i).map((o) => {
      const {
        prefix: a,
        iconName: l,
        icon: f
      } = i[o], c = f[2];
      e[a] || (e[a] = {}), c.length > 0 && c.forEach((g) => {
        typeof g == "string" && (e[a][g] = f);
      }), e[a][l] = f;
    }), e;
  }
}
let IE = [], Fs = {};
const Vs = {}, eL = Object.keys(Vs);
function nL(t, e) {
  let {
    mixoutsTo: n
  } = e;
  return IE = t, Fs = {}, Object.keys(Vs).forEach((i) => {
    eL.indexOf(i) === -1 && delete Vs[i];
  }), IE.forEach((i) => {
    const o = i.mixout ? i.mixout() : {};
    if (Object.keys(o).forEach((a) => {
      typeof o[a] == "function" && (n[a] = o[a]), typeof o[a] == "object" && Object.keys(o[a]).forEach((l) => {
        n[a] || (n[a] = {}), n[a][l] = o[a][l];
      });
    }), i.hooks) {
      const a = i.hooks();
      Object.keys(a).forEach((l) => {
        Fs[l] || (Fs[l] = []), Fs[l].push(a[l]);
      });
    }
    i.provides && i.provides(Vs);
  }), n;
}
function mc(t, e) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  return (Fs[t] || []).forEach((l) => {
    e = l.apply(null, [e, ...i]);
  }), e;
}
function Es(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  (Fs[t] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Ui() {
  const t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Vs[t] ? Vs[t].apply(null, e) : void 0;
}
function _c(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const n = t.prefix || Pi();
  if (e)
    return e = as(n, e) || e, OE(bm.definitions, n, e) || OE(Wr.styles, n, e);
}
const bm = new tL(), rL = () => {
  Gt.autoReplaceSvg = !1, Gt.observeMutations = !1, Es("noAuto");
}, iL = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return _i ? (Es("beforeI2svg", t), Ui("pseudoElements2svg", t), Ui("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    Gt.autoReplaceSvg === !1 && (Gt.autoReplaceSvg = !0), Gt.observeMutations = !0, $I(() => {
      oL({
        autoReplaceSvgRoot: e
      }), Es("watch", t);
    });
  }
}, sL = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: as(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = lu(t[0]);
      return {
        prefix: n,
        iconName: as(n, e) || e
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(Gt.cssPrefix, "-")) > -1 || t.match(OI))) {
      const e = uu(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || Pi(),
        iconName: as(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = Pi();
      return {
        prefix: e,
        iconName: as(e, t) || t
      };
    }
  }
}, Jn = {
  noAuto: rL,
  config: Gt,
  dom: iL,
  parse: sL,
  library: bm,
  findIconDefinition: _c,
  toHtml: ua
}, oL = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = Ve
  } = t;
  (Object.keys(Wr.styles).length > 0 || Gt.autoFetchSvg) && _i && Gt.autoReplaceSvg && Jn.dom.i2svg({
    node: e
  });
};
function fu(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => ua(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!_i) return;
      const n = Ve.createElement("div");
      return n.innerHTML = t.html, n.children;
    }
  }), t;
}
function aL(t) {
  let {
    children: e,
    main: n,
    mask: i,
    attributes: o,
    styles: a,
    transform: l
  } = t;
  if (fd(l) && n.found && !i.found) {
    const {
      width: f,
      height: c
    } = n, g = {
      x: f / c / 2,
      y: 0.5
    };
    o.style = au(_t(_t({}, a), {}, {
      "transform-origin": "".concat(g.x + l.x / 16, "em ").concat(g.y + l.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: e
  }];
}
function lL(t) {
  let {
    prefix: e,
    iconName: n,
    children: i,
    attributes: o,
    symbol: a
  } = t;
  const l = a === !0 ? "".concat(e, "-").concat(Gt.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _t(_t({}, o), {}, {
        id: l
      }),
      children: i
    }]
  }];
}
function pd(t) {
  const {
    icons: {
      main: e,
      mask: n
    },
    prefix: i,
    iconName: o,
    transform: a,
    symbol: l,
    title: f,
    maskId: c,
    titleId: g,
    extra: p,
    watchable: _ = !1
  } = t, {
    width: R,
    height: x
  } = n.found ? n : e, P = lI.includes(i), O = [Gt.replacementClass, o ? "".concat(Gt.cssPrefix, "-").concat(o) : ""].filter((G) => p.classes.indexOf(G) === -1).filter((G) => G !== "" || !!G).concat(p.classes).join(" ");
  let W = {
    children: [],
    attributes: _t(_t({}, p.attributes), {}, {
      "data-prefix": i,
      "data-icon": o,
      class: O,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(R, " ").concat(x)
    })
  };
  const b = P && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(R / x * 16 * 0.0625, "em")
  } : {};
  _ && (W.attributes[hs] = ""), f && (W.children.push({
    tag: "title",
    attributes: {
      id: W.attributes["aria-labelledby"] || "title-".concat(g || Qo())
    },
    children: [f]
  }), delete W.attributes.title);
  const w = _t(_t({}, W), {}, {
    prefix: i,
    iconName: o,
    main: e,
    mask: n,
    maskId: c,
    transform: a,
    symbol: l,
    styles: _t(_t({}, b), p.styles)
  }), {
    children: Z,
    attributes: v
  } = n.found && e.found ? Ui("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Ui("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = Z, w.attributes = v, l ? lL(w) : aL(w);
}
function LE(t) {
  const {
    content: e,
    width: n,
    height: i,
    transform: o,
    title: a,
    extra: l,
    watchable: f = !1
  } = t, c = _t(_t(_t({}, l.attributes), a ? {
    title: a
  } : {}), {}, {
    class: l.classes.join(" ")
  });
  f && (c[hs] = "");
  const g = _t({}, l.styles);
  fd(o) && (g.transform = UI({
    transform: o,
    startCentered: !0,
    width: n,
    height: i
  }), g["-webkit-transform"] = g.transform);
  const p = au(g);
  p.length > 0 && (c.style = p);
  const _ = [];
  return _.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), a && _.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), _;
}
function uL(t) {
  const {
    content: e,
    title: n,
    extra: i
  } = t, o = _t(_t(_t({}, i.attributes), n ? {
    title: n
  } : {}), {}, {
    class: i.classes.join(" ")
  }), a = au(i.styles);
  a.length > 0 && (o.style = a);
  const l = [];
  return l.push({
    tag: "span",
    attributes: o,
    children: [e]
  }), n && l.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), l;
}
const {
  styles: Vf
} = Wr;
function Tc(t) {
  const e = t[0], n = t[1], [i] = t.slice(4);
  let o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Gt.cssPrefix, "-").concat(Hf.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Gt.cssPrefix, "-").concat(Hf.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Gt.cssPrefix, "-").concat(Hf.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: o
  };
}
const fL = {
  found: !1,
  width: 512,
  height: 512
};
function cL(t, e) {
  !um && !Gt.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Ac(t, e) {
  let n = e;
  return e === "fa" && Gt.styleDefault !== null && (e = Pi()), new Promise((i, o) => {
    if (n === "fa") {
      const a = Om(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Vf[e] && Vf[e][t]) {
      const a = Vf[e][t];
      return i(Tc(a));
    }
    cL(t, e), i(_t(_t({}, fL), {}, {
      icon: Gt.showMissingIcons && t ? Ui("missingIconAbstract") || {} : {}
    }));
  });
}
const CE = () => {
}, Sc = Gt.measurePerformance && pl && pl.mark && pl.measure ? pl : {
  mark: CE,
  measure: CE
}, Bo = 'FA "6.7.2"', dL = (t) => (Sc.mark("".concat(Bo, " ").concat(t, " begins")), () => Im(t)), Im = (t) => {
  Sc.mark("".concat(Bo, " ").concat(t, " ends")), Sc.measure("".concat(Bo, " ").concat(t), "".concat(Bo, " ").concat(t, " begins"), "".concat(Bo, " ").concat(t, " ends"));
};
var hd = {
  begin: dL,
  end: Im
};
const bl = () => {
};
function NE(t) {
  return typeof (t.getAttribute ? t.getAttribute(hs) : null) == "string";
}
function pL(t) {
  const e = t.getAttribute ? t.getAttribute(od) : null, n = t.getAttribute ? t.getAttribute(ad) : null;
  return e && n;
}
function hL(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(Gt.replacementClass);
}
function EL() {
  return Gt.autoReplaceSvg === !0 ? Il.replace : Il[Gt.autoReplaceSvg] || Il.replace;
}
function gL(t) {
  return Ve.createElementNS("http://www.w3.org/2000/svg", t);
}
function vL(t) {
  return Ve.createElement(t);
}
function Lm(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? gL : vL
  } = e;
  if (typeof t == "string")
    return Ve.createTextNode(t);
  const i = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(a) {
    i.setAttribute(a, t.attributes[a]);
  }), (t.children || []).forEach(function(a) {
    i.appendChild(Lm(a, {
      ceFn: n
    }));
  }), i;
}
function mL(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const Il = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(Lm(n), e);
      }), e.getAttribute(hs) === null && Gt.keepOriginalSource) {
        let n = Ve.createComment(mL(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~ud(e).indexOf(Gt.replacementClass))
      return Il.replace(t);
    const i = new RegExp("".concat(Gt.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((l, f) => (f === Gt.replacementClass || f.match(i) ? l.toSvg.push(f) : l.toNode.push(f), l), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", a.toNode.join(" "));
    }
    const o = n.map((a) => ua(a)).join(`
`);
    e.setAttribute(hs, ""), e.innerHTML = o;
  }
};
function xE(t) {
  t();
}
function Cm(t, e) {
  const n = typeof e == "function" ? e : bl;
  if (t.length === 0)
    n();
  else {
    let i = xE;
    Gt.mutateApproach === AI && (i = Di.requestAnimationFrame || xE), i(() => {
      const o = EL(), a = hd.begin("mutate");
      t.map(o), a(), n();
    });
  }
}
let Ed = !1;
function Nm() {
  Ed = !0;
}
function yc() {
  Ed = !1;
}
let Hl = null;
function wE(t) {
  if (!mE || !Gt.observeMutations)
    return;
  const {
    treeCallback: e = bl,
    nodeCallback: n = bl,
    pseudoElementsCallback: i = bl,
    observeMutationsRoot: o = Ve
  } = t;
  Hl = new mE((a) => {
    if (Ed) return;
    const l = Pi();
    oo(a).forEach((f) => {
      if (f.type === "childList" && f.addedNodes.length > 0 && !NE(f.addedNodes[0]) && (Gt.searchPseudoElements && i(f.target), e(f.target)), f.type === "attributes" && f.target.parentNode && Gt.searchPseudoElements && i(f.target.parentNode), f.type === "attributes" && NE(f.target) && ~II.indexOf(f.attributeName))
        if (f.attributeName === "class" && pL(f.target)) {
          const {
            prefix: c,
            iconName: g
          } = uu(ud(f.target));
          f.target.setAttribute(od, c || l), g && f.target.setAttribute(ad, g);
        } else hL(f.target) && n(f.target);
    });
  }), _i && Hl.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function _L() {
  Hl && Hl.disconnect();
}
function TL(t) {
  const e = t.getAttribute("style");
  let n = [];
  return e && (n = e.split(";").reduce((i, o) => {
    const a = o.split(":"), l = a[0], f = a.slice(1);
    return l && f.length > 0 && (i[l] = f.join(":").trim()), i;
  }, {})), n;
}
function AL(t) {
  const e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), i = t.innerText !== void 0 ? t.innerText.trim() : "";
  let o = uu(ud(t));
  return o.prefix || (o.prefix = Pi()), e && n && (o.prefix = e, o.iconName = n), o.iconName && o.prefix || (o.prefix && i.length > 0 && (o.iconName = zI(o.prefix, t.innerText) || dd(o.prefix, gc(t.innerText))), !o.iconName && Gt.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = t.firstChild.data)), o;
}
function SL(t) {
  const e = oo(t.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = t.getAttribute("title"), i = t.getAttribute("data-fa-title-id");
  return Gt.autoA11y && (n ? e["aria-labelledby"] = "".concat(Gt.replacementClass, "-title-").concat(i || Qo()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function yL() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Fr,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function ME(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: i,
    rest: o
  } = AL(t), a = SL(t), l = mc("parseNodeAttributes", {}, t);
  let f = e.styleParser ? TL(t) : [];
  return _t({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: Fr,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: f,
      attributes: a
    }
  }, l);
}
const {
  styles: OL
} = Wr;
function xm(t) {
  const e = Gt.autoReplaceSvg === "nest" ? ME(t, {
    styleParser: !1
  }) : ME(t);
  return ~e.extra.classes.indexOf(cm) ? Ui("generateLayersText", t, e) : Ui("generateSvgReplacementMutation", t, e);
}
function RL() {
  return [...sI, ...fc];
}
function DE(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!_i) return Promise.resolve();
  const n = Ve.documentElement.classList, i = (p) => n.add("".concat(AE, "-").concat(p)), o = (p) => n.remove("".concat(AE, "-").concat(p)), a = Gt.autoFetchSvg ? RL() : im.concat(Object.keys(OL));
  a.includes("fa") || a.push("fa");
  const l = [".".concat(cm, ":not([").concat(hs, "])")].concat(a.map((p) => ".".concat(p, ":not([").concat(hs, "])"))).join(", ");
  if (l.length === 0)
    return Promise.resolve();
  let f = [];
  try {
    f = oo(t.querySelectorAll(l));
  } catch {
  }
  if (f.length > 0)
    i("pending"), o("complete");
  else
    return Promise.resolve();
  const c = hd.begin("onTree"), g = f.reduce((p, _) => {
    try {
      const R = xm(_);
      R && p.push(R);
    } catch (R) {
      um || R.name === "MissingIcon" && console.error(R);
    }
    return p;
  }, []);
  return new Promise((p, _) => {
    Promise.all(g).then((R) => {
      Cm(R, () => {
        i("active"), i("complete"), o("pending"), typeof e == "function" && e(), c(), p();
      });
    }).catch((R) => {
      c(), _(R);
    });
  });
}
function bL(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  xm(t).then((n) => {
    n && Cm([n], e);
  });
}
function IL(t) {
  return function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = (e || {}).icon ? e : _c(e || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : _c(o || {})), t(i, _t(_t({}, n), {}, {
      mask: o
    }));
  };
}
const LL = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Fr,
    symbol: i = !1,
    mask: o = null,
    maskId: a = null,
    title: l = null,
    titleId: f = null,
    classes: c = [],
    attributes: g = {},
    styles: p = {}
  } = e;
  if (!t) return;
  const {
    prefix: _,
    iconName: R,
    icon: x
  } = t;
  return fu(_t({
    type: "icon"
  }, t), () => (Es("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), Gt.autoA11y && (l ? g["aria-labelledby"] = "".concat(Gt.replacementClass, "-title-").concat(f || Qo()) : (g["aria-hidden"] = "true", g.focusable = "false")), pd({
    icons: {
      main: Tc(x),
      mask: o ? Tc(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: _,
    iconName: R,
    transform: _t(_t({}, Fr), n),
    symbol: i,
    title: l,
    maskId: a,
    titleId: f,
    extra: {
      attributes: g,
      styles: p,
      classes: c
    }
  })));
};
var CL = {
  mixout() {
    return {
      icon: IL(LL)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = DE, t.nodeCallback = bL, t;
      }
    };
  },
  provides(t) {
    t.i2svg = function(e) {
      const {
        node: n = Ve,
        callback: i = () => {
        }
      } = e;
      return DE(n, i);
    }, t.generateSvgReplacementMutation = function(e, n) {
      const {
        iconName: i,
        title: o,
        titleId: a,
        prefix: l,
        transform: f,
        symbol: c,
        mask: g,
        maskId: p,
        extra: _
      } = n;
      return new Promise((R, x) => {
        Promise.all([Ac(i, l), g.iconName ? Ac(g.iconName, g.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((P) => {
          let [O, W] = P;
          R([e, pd({
            icons: {
              main: O,
              mask: W
            },
            prefix: l,
            iconName: i,
            transform: f,
            symbol: c,
            maskId: p,
            title: o,
            titleId: a,
            extra: _,
            watchable: !0
          })]);
        }).catch(x);
      });
    }, t.generateAbstractIcon = function(e) {
      let {
        children: n,
        attributes: i,
        main: o,
        transform: a,
        styles: l
      } = e;
      const f = au(l);
      f.length > 0 && (i.style = f);
      let c;
      return fd(a) && (c = Ui("generateAbstractTransformGrouping", {
        main: o,
        transform: a,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(c || o.icon), {
        children: n,
        attributes: i
      };
    };
  }
}, NL = {
  mixout() {
    return {
      layer(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = e;
        return fu({
          type: "layer"
        }, () => {
          Es("beforeDOMElementCreation", {
            assembler: t,
            params: e
          });
          let i = [];
          return t((o) => {
            Array.isArray(o) ? o.map((a) => {
              i = i.concat(a.abstract);
            }) : i = i.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Gt.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, xL = {
  mixout() {
    return {
      counter(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: i = [],
          attributes: o = {},
          styles: a = {}
        } = e;
        return fu({
          type: "counter",
          content: t
        }, () => (Es("beforeDOMElementCreation", {
          content: t,
          params: e
        }), uL({
          content: t.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(Gt.cssPrefix, "-layers-counter"), ...i]
          }
        })));
      }
    };
  }
}, wL = {
  mixout() {
    return {
      text(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = Fr,
          title: i = null,
          classes: o = [],
          attributes: a = {},
          styles: l = {}
        } = e;
        return fu({
          type: "text",
          content: t
        }, () => (Es("beforeDOMElementCreation", {
          content: t,
          params: e
        }), LE({
          content: t,
          transform: _t(_t({}, Fr), n),
          title: i,
          extra: {
            attributes: a,
            styles: l,
            classes: ["".concat(Gt.cssPrefix, "-layers-text"), ...o]
          }
        })));
      }
    };
  },
  provides(t) {
    t.generateLayersText = function(e, n) {
      const {
        title: i,
        transform: o,
        extra: a
      } = n;
      let l = null, f = null;
      if (nm) {
        const c = parseInt(getComputedStyle(e).fontSize, 10), g = e.getBoundingClientRect();
        l = g.width / c, f = g.height / c;
      }
      return Gt.autoA11y && !i && (a.attributes["aria-hidden"] = "true"), Promise.resolve([e, LE({
        content: e.innerHTML,
        width: l,
        height: f,
        transform: o,
        title: i,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const ML = new RegExp('"', "ug"), PE = [1105920, 1112319], UE = _t(_t(_t(_t({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), nI), _I), dI), Oc = Object.keys(UE).reduce((t, e) => (t[e.toLowerCase()] = UE[e], t), {}), DL = Object.keys(Oc).reduce((t, e) => {
  const n = Oc[e];
  return t[e] = n[900] || [...Object.entries(n)][0][1], t;
}, {});
function PL(t) {
  const e = t.replace(ML, ""), n = FI(e, 0), i = n >= PE[0] && n <= PE[1], o = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: gc(o ? e[0] : e),
    isSecondary: i || o
  };
}
function UL(t, e) {
  const n = t.replace(/^['"]|['"]$/g, "").toLowerCase(), i = parseInt(e), o = isNaN(i) ? "normal" : i;
  return (Oc[n] || {})[o] || DL[n];
}
function kE(t, e) {
  const n = "".concat(TI).concat(e.replace(":", "-"));
  return new Promise((i, o) => {
    if (t.getAttribute(n) !== null)
      return i();
    const l = oo(t.children).filter((R) => R.getAttribute(dc) === e)[0], f = Di.getComputedStyle(t, e), c = f.getPropertyValue("font-family"), g = c.match(RI), p = f.getPropertyValue("font-weight"), _ = f.getPropertyValue("content");
    if (l && !g)
      return t.removeChild(l), i();
    if (g && _ !== "none" && _ !== "") {
      const R = f.getPropertyValue("content");
      let x = UL(c, p);
      const {
        value: P,
        isSecondary: O
      } = PL(R), W = g[0].startsWith("FontAwesome");
      let b = dd(x, P), w = b;
      if (W) {
        const Z = YI(P);
        Z.iconName && Z.prefix && (b = Z.iconName, x = Z.prefix);
      }
      if (b && !O && (!l || l.getAttribute(od) !== x || l.getAttribute(ad) !== w)) {
        t.setAttribute(n, w), l && t.removeChild(l);
        const Z = yL(), {
          extra: v
        } = Z;
        v.attributes[dc] = e, Ac(b, x).then((G) => {
          const L = pd(_t(_t({}, Z), {}, {
            icons: {
              main: G,
              mask: Rm()
            },
            prefix: x,
            iconName: w,
            extra: v,
            watchable: !0
          })), B = Ve.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(B, t.firstChild) : t.appendChild(B), B.outerHTML = L.map((U) => ua(U)).join(`
`), t.removeAttribute(n), i();
        }).catch(o);
      } else
        i();
    } else
      i();
  });
}
function kL(t) {
  return Promise.all([kE(t, "::before"), kE(t, "::after")]);
}
function BL(t) {
  return t.parentNode !== document.head && !~SI.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(dc) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function BE(t) {
  if (_i)
    return new Promise((e, n) => {
      const i = oo(t.querySelectorAll("*")).filter(BL).map(kL), o = hd.begin("searchPseudoElements");
      Nm(), Promise.all(i).then(() => {
        o(), yc(), e();
      }).catch(() => {
        o(), yc(), n();
      });
    });
}
var $L = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = BE, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = Ve
      } = e;
      Gt.searchPseudoElements && BE(n);
    };
  }
};
let $E = !1;
var HL = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Nm(), $E = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        wE(mc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        _L();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        $E ? yc() : wE(mc("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const HE = (t) => {
  let e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce((n, i) => {
    const o = i.toLowerCase().split("-"), a = o[0];
    let l = o.slice(1).join("-");
    if (a && l === "h")
      return n.flipX = !0, n;
    if (a && l === "v")
      return n.flipY = !0, n;
    if (l = parseFloat(l), isNaN(l))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + l;
        break;
      case "shrink":
        n.size = n.size - l;
        break;
      case "left":
        n.x = n.x - l;
        break;
      case "right":
        n.x = n.x + l;
        break;
      case "up":
        n.y = n.y - l;
        break;
      case "down":
        n.y = n.y + l;
        break;
      case "rotate":
        n.rotate = n.rotate + l;
        break;
    }
    return n;
  }, e);
};
var FL = {
  mixout() {
    return {
      parse: {
        transform: (t) => HE(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-transform");
        return n && (t.transform = HE(n)), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractTransformGrouping = function(e) {
      let {
        main: n,
        transform: i,
        containerWidth: o,
        iconWidth: a
      } = e;
      const l = {
        transform: "translate(".concat(o / 2, " 256)")
      }, f = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), c = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), g = "rotate(".concat(i.rotate, " 0 0)"), p = {
        transform: "".concat(f, " ").concat(c, " ").concat(g)
      }, _ = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, R = {
        outer: l,
        inner: p,
        path: _
      };
      return {
        tag: "g",
        attributes: _t({}, R.outer),
        children: [{
          tag: "g",
          attributes: _t({}, R.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: _t(_t({}, n.icon.attributes), R.path)
          }]
        }]
      };
    };
  }
};
const Xf = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function FE(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function WL(t) {
  return t.tag === "g" ? t.children : [t];
}
var VL = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-mask"), i = n ? uu(n.split(" ").map((o) => o.trim())) : Rm();
        return i.prefix || (i.prefix = Pi()), t.mask = i, t.maskId = e.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractMask = function(e) {
      let {
        children: n,
        attributes: i,
        main: o,
        mask: a,
        maskId: l,
        transform: f
      } = e;
      const {
        width: c,
        icon: g
      } = o, {
        width: p,
        icon: _
      } = a, R = PI({
        transform: f,
        containerWidth: p,
        iconWidth: c
      }), x = {
        tag: "rect",
        attributes: _t(_t({}, Xf), {}, {
          fill: "white"
        })
      }, P = g.children ? {
        children: g.children.map(FE)
      } : {}, O = {
        tag: "g",
        attributes: _t({}, R.inner),
        children: [FE(_t({
          tag: g.tag,
          attributes: _t(_t({}, g.attributes), R.path)
        }, P))]
      }, W = {
        tag: "g",
        attributes: _t({}, R.outer),
        children: [O]
      }, b = "mask-".concat(l || Qo()), w = "clip-".concat(l || Qo()), Z = {
        tag: "mask",
        attributes: _t(_t({}, Xf), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, W]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: WL(_)
        }, Z]
      };
      return n.push(v, {
        tag: "rect",
        attributes: _t({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(b, ")")
        }, Xf)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, XL = {
  provides(t) {
    let e = !1;
    Di.matchMedia && (e = Di.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      const n = [], i = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: _t(_t({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = _t(_t({}, o), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: _t(_t({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return e || l.children.push({
        tag: "animate",
        attributes: _t(_t({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: _t(_t({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(l), n.push({
        tag: "path",
        attributes: _t(_t({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: e ? [] : [{
          tag: "animate",
          attributes: _t(_t({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), e || n.push({
        tag: "path",
        attributes: _t(_t({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: _t(_t({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, GL = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = i, t;
      }
    };
  }
}, zL = [BI, CL, NL, xL, wL, $L, HL, FL, VL, XL, GL];
nL(zL, {
  mixoutsTo: Jn
});
Jn.noAuto;
const wm = Jn.config;
Jn.library;
Jn.dom;
const Fl = Jn.parse;
Jn.findIconDefinition;
Jn.toHtml;
const YL = Jn.icon;
Jn.layer;
const KL = Jn.text;
Jn.counter;
function WE(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Or(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? WE(Object(n), !0).forEach(function(i) {
      Dn(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : WE(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function jL(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function qL(t) {
  var e = jL(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Wl(t) {
  "@babel/helpers - typeof";
  return Wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Wl(t);
}
function Dn(t, e, n) {
  return e = qL(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function JL(t, e) {
  if (t == null) return {};
  var n = {};
  for (var i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      if (e.indexOf(i) >= 0) continue;
      n[i] = t[i];
    }
  return n;
}
function QL(t, e) {
  if (t == null) return {};
  var n = JL(t, e), i, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (o = 0; o < a.length; o++)
      i = a[o], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
  }
  return n;
}
function Rc(t) {
  return ZL(t) || tC(t) || eC(t) || nC();
}
function ZL(t) {
  if (Array.isArray(t)) return bc(t);
}
function tC(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function eC(t, e) {
  if (t) {
    if (typeof t == "string") return bc(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bc(t, e);
  }
}
function bc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function nC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var rC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mm = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(b, w, Z) {
      if (!g(w) || _(w) || R(w) || x(w) || c(w))
        return w;
      var v, G = 0, L = 0;
      if (p(w))
        for (v = [], L = w.length; G < L; G++)
          v.push(n(b, w[G], Z));
      else {
        v = {};
        for (var B in w)
          Object.prototype.hasOwnProperty.call(w, B) && (v[b(B, Z)] = n(b, w[B], Z));
      }
      return v;
    }, i = function(b, w) {
      w = w || {};
      var Z = w.separator || "_", v = w.split || /(?=[A-Z])/;
      return b.split(v).join(Z);
    }, o = function(b) {
      return P(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function(w, Z) {
        return Z ? Z.toUpperCase() : "";
      }), b.substr(0, 1).toLowerCase() + b.substr(1));
    }, a = function(b) {
      var w = o(b);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, l = function(b, w) {
      return i(b, w).toLowerCase();
    }, f = Object.prototype.toString, c = function(b) {
      return typeof b == "function";
    }, g = function(b) {
      return b === Object(b);
    }, p = function(b) {
      return f.call(b) == "[object Array]";
    }, _ = function(b) {
      return f.call(b) == "[object Date]";
    }, R = function(b) {
      return f.call(b) == "[object RegExp]";
    }, x = function(b) {
      return f.call(b) == "[object Boolean]";
    }, P = function(b) {
      return b = b - 0, b === b;
    }, O = function(b, w) {
      var Z = w && "process" in w ? w.process : w;
      return typeof Z != "function" ? b : function(v, G) {
        return Z(v, b, G);
      };
    }, W = {
      camelize: o,
      decamelize: l,
      pascalize: a,
      depascalize: l,
      camelizeKeys: function(b, w) {
        return n(O(o, w), b);
      },
      decamelizeKeys: function(b, w) {
        return n(O(l, w), b, w);
      },
      pascalizeKeys: function(b, w) {
        return n(O(a, w), b);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = W : e.humps = W;
  })(rC);
})(Mm);
var iC = Mm.exports, sC = ["class", "style"];
function oC(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var i = n.indexOf(":"), o = iC.camelize(n.slice(0, i)), a = n.slice(i + 1).trim();
    return e[o] = a, e;
  }, {});
}
function aC(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function gd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var i = (t.children || []).map(function(c) {
    return gd(c);
  }), o = Object.keys(t.attributes || {}).reduce(function(c, g) {
    var p = t.attributes[g];
    switch (g) {
      case "class":
        c.class = aC(p);
        break;
      case "style":
        c.style = oC(p);
        break;
      default:
        c.attrs[g] = p;
    }
    return c;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, l = a === void 0 ? {} : a, f = QL(n, sC);
  return di(t.tag, Or(Or(Or({}, e), {}, {
    class: o.class,
    style: Or(Or({}, o.style), l)
  }, o.attrs), f), i);
}
var Dm = !1;
try {
  Dm = !0;
} catch {
}
function lC() {
  if (!Dm && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Go(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Dn({}, t, e) : {};
}
function uC(t) {
  var e, n = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, Dn(Dn(Dn(Dn(Dn(Dn(Dn(Dn(Dn(Dn(e, "fa-".concat(t.size), t.size !== null), "fa-rotate-".concat(t.rotation), t.rotation !== null), "fa-pull-".concat(t.pull), t.pull !== null), "fa-swap-opacity", t.swapOpacity), "fa-bounce", t.bounce), "fa-shake", t.shake), "fa-beat", t.beat), "fa-fade", t.fade), "fa-beat-fade", t.beatFade), "fa-flash", t.flash), Dn(Dn(e, "fa-spin-pulse", t.spinPulse), "fa-spin-reverse", t.spinReverse));
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function VE(t) {
  if (t && Wl(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (Fl.icon)
    return Fl.icon(t);
  if (t === null)
    return null;
  if (Wl(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var se = $e({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var i = n.attrs, o = St(function() {
      return VE(e.icon);
    }), a = St(function() {
      return Go("classes", uC(e));
    }), l = St(function() {
      return Go("transform", typeof e.transform == "string" ? Fl.transform(e.transform) : e.transform);
    }), f = St(function() {
      return Go("mask", VE(e.mask));
    }), c = St(function() {
      return YL(o.value, Or(Or(Or(Or({}, a.value), l.value), f.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Ln(c, function(p) {
      if (!p)
        return lC("Could not find one or more icon(s)", o.value, f.value);
    }, {
      immediate: !0
    });
    var g = St(function() {
      return c.value ? gd(c.value.abstract[0], {}, i) : null;
    });
    return function() {
      return g.value;
    };
  }
});
$e({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var i = n.slots, o = wm.familyPrefix, a = St(function() {
      return ["".concat(o, "-layers")].concat(Rc(e.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return di("div", {
        class: a.value
      }, i.default ? i.default() : []);
    };
  }
});
$e({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(e) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
      }
    }
  },
  setup: function(e, n) {
    var i = n.attrs, o = wm.familyPrefix, a = St(function() {
      return Go("classes", [].concat(Rc(e.counter ? ["".concat(o, "-layers-counter")] : []), Rc(e.position ? ["".concat(o, "-layers-").concat(e.position)] : [])));
    }), l = St(function() {
      return Go("transform", typeof e.transform == "string" ? Fl.transform(e.transform) : e.transform);
    }), f = St(function() {
      var g = KL(e.value.toString(), Or(Or({}, l.value), a.value)), p = g.abstract;
      return e.counter && (p[0].attributes.class = p[0].attributes.class.replace("fa-layers-text", "")), p[0];
    }), c = St(function() {
      return gd(f.value, {}, i);
    });
    return function() {
      return c.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const fC = {
  prefix: "fas",
  iconName: "hourglass-half",
  icon: [384, 512, ["hourglass-2"], "f252", "M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"]
}, Pm = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, cC = {
  prefix: "fas",
  iconName: "align-justify",
  icon: [448, 512, [], "f039", "M448 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z"]
}, Um = {
  prefix: "fas",
  iconName: "pizza-slice",
  icon: [512, 512, [], "f818", "M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, dC = {
  prefix: "fas",
  iconName: "clipboard",
  icon: [384, 512, [128203], "f328", "M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
}, pC = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Ic = {
  prefix: "fas",
  iconName: "filter",
  icon: [512, 512, [], "f0b0", "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]
}, hC = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, wi = hC, EC = {
  prefix: "fas",
  iconName: "arrow-rotate-left",
  icon: [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]
}, gC = EC, km = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Gf = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, vC = {
  prefix: "fas",
  iconName: "arrow-down-short-wide",
  icon: [576, 512, ["sort-amount-desc", "sort-amount-down-alt"], "f884", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
}, mC = {
  prefix: "fas",
  iconName: "thumbs-down",
  icon: [512, 512, [128078, 61576], "f165", "M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"]
}, Bm = {
  prefix: "fas",
  iconName: "arrow-down",
  icon: [384, 512, [8595], "f063", "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
}, _C = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, TC = _C, vd = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, $m = {
  prefix: "fas",
  iconName: "arrow-up",
  icon: [384, 512, [8593], "f062", "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]
}, AC = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Hm = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, SC = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, yC = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, XE = yC, OC = {
  prefix: "fas",
  iconName: "right-left",
  icon: [512, 512, ["exchange-alt"], "f362", "M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"]
}, Fm = OC, Wm = {
  prefix: "fas",
  iconName: "dollar-sign",
  icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"]
}, RC = {
  class: "copy position-absolute",
  style: { top: "0", right: "0" }
}, zf = /* @__PURE__ */ $e({
  __name: "Copy",
  props: {
    content: {}
  },
  setup(t) {
    const e = t, n = jt(!1);
    function i() {
      const { toClipboard: o } = iR();
      o(e.content), n.value = !0, window.setTimeout(() => {
        n.value = !1;
      }, 2e3);
    }
    return (o, a) => (N(), D("div", RC, [
      S("button", {
        name: "copyRawButton",
        class: It(["btn btn-outline-secondary bg-light btn-sm m-2", n.value ? "d-none" : "d-block"]),
        onClick: i
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(dC)
        }, null, 8, ["icon"])
      ], 2),
      a[0] || (a[0] = m()),
      ve((N(), D("button", {
        class: It(["btn btn-outline-secondary bg-light btn-sm m-2", n.value ? "d-block" : "d-none"]),
        onClick: i
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(SC),
          class: "text-success"
        }, null, 8, ["icon"])
      ], 2)), [
        [d(me), { placement: "left", arrow: !0, content: "copied" }]
      ])
    ]));
  }
});
var Oe = /* @__PURE__ */ ((t) => (t[t.time = 0] = "time", t[t.rows = 1] = "rows", t[t.cost = 2] = "cost", t[t.buffers = 3] = "buffers", t[t.estimate_factor = 4] = "estimate_factor", t[t.io = 5] = "io", t))(Oe || {}), ie = /* @__PURE__ */ ((t) => (t.shared = "Shared", t.temp = "Temp", t.local = "Local", t))(ie || {});
class pn {
}
Kt(pn, "NONE", "none"), Kt(pn, "DURATION", "duration"), Kt(pn, "ROWS", "rows"), Kt(pn, "COST", "cost");
var Vr = /* @__PURE__ */ ((t) => (t.asc = "asc", t.desc = "desc", t))(Vr || {}), hn = /* @__PURE__ */ ((t) => (t[t.over = 1] = "over", t[t.under = 2] = "under", t[t.none = 3] = "none", t))(hn || {}), h = /* @__PURE__ */ ((t) => (t.NODE_TYPE = "Node Type", t.ACTUAL_ROWS = "Actual Rows", t.PLAN_ROWS = "Plan Rows", t.PLAN_WIDTH = "Plan Width", t.ROWS_REMOVED_BY_FILTER = "Rows Removed by Filter", t.ROWS_REMOVED_BY_JOIN_FILTER = "Rows Removed by Join Filter", t.ACTUAL_STARTUP_TIME = "Actual Startup Time", t.ACTUAL_TOTAL_TIME = "Actual Total Time", t.ACTUAL_LOOPS = "Actual Loops", t.STARTUP_COST = "Startup Cost", t.TOTAL_COST = "Total Cost", t.DATA_SLICE_COUNT = "Data Slice Count", t.NODE_COUNT = "Node Count", t.SLICE_ID = "Slice Id", t.SEGMENTS_COUNT = "Segments Count", t.DYNAMIC_SCAN_ID = "Dynamic Scan Id", t.PLANS = "Plans", t.RELATION_NAME = "Relation Name", t.SCHEMA = "Schema", t.ALIAS = "Alias", t.GROUP_KEY = "Group Key", t.SORT_KEY = "Sort Key", t.SORT_METHOD = "Sort Method", t.SORT_SPACE_TYPE = "Sort Space Type", t.SORT_SPACE_USED = "Sort Space Used", t.JOIN_TYPE = "Join Type", t.INDEX_NAME = "Index Name", t.HASH_CONDITION = "Hash Cond", t.PARENT_RELATIONSHIP = "Parent Relationship", t.SUBPLAN_NAME = "Subplan Name", t.PARALLEL_AWARE = "Parallel Aware", t.WORKERS = "Workers", t.WORKERS_PLANNED = "Workers Planned", t.WORKERS_LAUNCHED = "Workers Launched", t.SHARED_HIT_BLOCKS = "Shared Hit Blocks", t.SHARED_READ_BLOCKS = "Shared Read Blocks", t.SHARED_DIRTIED_BLOCKS = "Shared Dirtied Blocks", t.SHARED_WRITTEN_BLOCKS = "Shared Written Blocks", t.TEMP_READ_BLOCKS = "Temp Read Blocks", t.TEMP_WRITTEN_BLOCKS = "Temp Written Blocks", t.LOCAL_HIT_BLOCKS = "Local Hit Blocks", t.LOCAL_READ_BLOCKS = "Local Read Blocks", t.LOCAL_DIRTIED_BLOCKS = "Local Dirtied Blocks", t.LOCAL_WRITTEN_BLOCKS = "Local Written Blocks", t.IO_READ_TIME = "I/O Read Time", t.IO_WRITE_TIME = "I/O Write Time", t.OUTPUT = "Output", t.HEAP_FETCHES = "Heap Fetches", t.WAL_RECORDS = "WAL Records", t.WAL_BYTES = "WAL Bytes", t.WAL_FPI = "WAL FPI", t.FULL_SORT_GROUPS = "Full-sort Groups", t.PRE_SORTED_GROUPS = "Pre-sorted Groups", t.PRESORTED_KEY = "Presorted Key", t.FILTER = "Filter", t.STRATEGY = "Strategy", t.NODE_ID = "nodeId", t.EXCLUSIVE_DURATION = "*Duration (exclusive)", t.EXCLUSIVE_COST = "*Cost (exclusive)", t.ACTUAL_ROWS_REVISED = "*Actual Rows Revised", t.ACTUAL_ROWS_FRACTIONAL = "*Actual Rows Is Fractional", t.PLAN_ROWS_REVISED = "*Plan Rows Revised", t.ROWS_REMOVED_BY_FILTER_REVISED = "*Rows Removed by Filter", t.ROWS_REMOVED_BY_JOIN_FILTER_REVISED = "*Rows Removed by Join Filter", t.PLANNER_ESTIMATE_FACTOR = "*Planner Row Estimate Factor", t.PLANNER_ESTIMATE_DIRECTION = "*Planner Row Estimate Direction", t.EXCLUSIVE_SHARED_HIT_BLOCKS = "*Shared Hit Blocks (exclusive)", t.EXCLUSIVE_SHARED_READ_BLOCKS = "*Shared Read Blocks (exclusive)", t.EXCLUSIVE_SHARED_DIRTIED_BLOCKS = "*Shared Dirtied Blocks (exclusive)", t.EXCLUSIVE_SHARED_WRITTEN_BLOCKS = "*Shared Written Blocks (exclusive)", t.EXCLUSIVE_TEMP_READ_BLOCKS = "*Temp Read Blocks (exclusive)", t.EXCLUSIVE_TEMP_WRITTEN_BLOCKS = "*Temp Written Blocks (exclusive)", t.EXCLUSIVE_LOCAL_HIT_BLOCKS = "*Local Hit Blocks (exclusive)", t.EXCLUSIVE_LOCAL_READ_BLOCKS = "*Local Read Blocks (exclusive)", t.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS = "*Local Dirtied Blocks (exclusive)", t.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS = "*Local Written Blocks (exclusive)", t.EXCLUSIVE_IO_READ_TIME = "*I/O Read Time (exclusive)", t.EXCLUSIVE_IO_WRITE_TIME = "*I/O Write Time (exclusive)", t.AVERAGE_IO_READ_SPEED = "*I/O Read Speed (exclusive)", t.AVERAGE_IO_WRITE_SPEED = "*I/O Write Speed (exclusive)", t.WORKERS_PLANNED_BY_GATHER = "*Workers Planned By Gather", t.WORKERS_LAUNCHED_BY_GATHER = "*Workers Launched By Gather", t.CTE_SCAN = "CTE Scan", t.CTE_NAME = "CTE Name", t.FUNCTION_NAME = "Function Name", t.ARRAY_INDEX_KEY = "arrayIndex", t.PEV_PLAN_TAG = "plan_", t.JIT = "JIT", t))(h || {}), Ar = /* @__PURE__ */ ((t) => (t.SLICE_NUM = "Slice Num", t.EXECUTOR_MEMORY = "ExecutorMemory", t.WORK_MEMORY = "WorkMemory", t))(Ar || {}), Br = /* @__PURE__ */ ((t) => (t.AVERAGE_MEMORY = "Average memory", t.NUMBER_OF_WORKER_THREADS = "Number of worker threads", t.MAXIMUM_MEMORY = "Maximum memory", t))(Br || {}), mn = /* @__PURE__ */ ((t) => (t[t.blocks = 0] = "blocks", t[t.boolean = 1] = "boolean", t[t.bytes = 2] = "bytes", t[t.cost = 3] = "cost", t[t.duration = 4] = "duration", t[t.estimateDirection = 5] = "estimateDirection", t[t.factor = 6] = "factor", t[t.increment = 7] = "increment", t[t.json = 8] = "json", t[t.kilobytes = 9] = "kilobytes", t[t.list = 10] = "list", t[t.loops = 11] = "loops", t[t.rows = 12] = "rows", t[t.sortGroups = 13] = "sortGroups", t[t.transferRate = 14] = "transferRate", t[t.jit = 15] = "jit", t))(mn || {});
const Ut = {};
Ut[
  "Actual Rows"
  /* ACTUAL_ROWS */
] = 12;
Ut[
  "Actual Loops"
  /* ACTUAL_LOOPS */
] = 11;
Ut[
  "Plan Rows"
  /* PLAN_ROWS */
] = 12;
Ut[
  "Plan Width"
  /* PLAN_WIDTH */
] = 2;
Ut[
  "*Actual Rows Revised"
  /* ACTUAL_ROWS_REVISED */
] = 12;
Ut[
  "*Actual Rows Is Fractional"
  /* ACTUAL_ROWS_FRACTIONAL */
] = 1;
Ut[
  "*Plan Rows Revised"
  /* PLAN_ROWS_REVISED */
] = 12;
Ut[
  "Actual Total Time"
  /* ACTUAL_TOTAL_TIME */
] = 4;
Ut[
  "Actual Startup Time"
  /* ACTUAL_STARTUP_TIME */
] = 4;
Ut[
  "Startup Cost"
  /* STARTUP_COST */
] = 3;
Ut[
  "Total Cost"
  /* TOTAL_COST */
] = 3;
Ut[
  "Parallel Aware"
  /* PARALLEL_AWARE */
] = 1;
Ut.Workers = 8;
Ut[
  "Sort Space Used"
  /* SORT_SPACE_USED */
] = 9;
Ut[
  "Rows Removed by Filter"
  /* ROWS_REMOVED_BY_FILTER */
] = 12;
Ut[
  "Rows Removed by Join Filter"
  /* ROWS_REMOVED_BY_JOIN_FILTER */
] = 12;
Ut[
  "*Rows Removed by Filter"
  /* ROWS_REMOVED_BY_FILTER_REVISED */
] = 12;
Ut[
  "*Rows Removed by Join Filter"
  /* ROWS_REMOVED_BY_JOIN_FILTER_REVISED */
] = 12;
Ut[
  "Heap Fetches"
  /* HEAP_FETCHES */
] = 12;
Ut.Output = 10;
Ut[
  "Sort Key"
  /* SORT_KEY */
] = 10;
Ut[
  "Presorted Key"
  /* PRESORTED_KEY */
] = 10;
Ut[
  "WAL Records"
  /* WAL_RECORDS */
] = 12;
Ut[
  "WAL Bytes"
  /* WAL_BYTES */
] = 2;
Ut[
  "WAL FPI"
  /* WAL_FPI */
] = 12;
Ut[
  "*Duration (exclusive)"
  /* EXCLUSIVE_DURATION */
] = 4;
Ut[
  "*Cost (exclusive)"
  /* EXCLUSIVE_COST */
] = 3;
Ut[
  "*Planner Row Estimate Factor"
  /* PLANNER_ESTIMATE_FACTOR */
] = 6;
Ut[
  "*Planner Row Estimate Direction"
  /* PLANNER_ESTIMATE_DIRECTION */
] = 5;
Ut[
  "I/O Read Time"
  /* IO_READ_TIME */
] = 4;
Ut[
  "I/O Write Time"
  /* IO_WRITE_TIME */
] = 4;
Ut[
  "*I/O Read Time (exclusive)"
  /* EXCLUSIVE_IO_READ_TIME */
] = 4;
Ut[
  "*I/O Write Time (exclusive)"
  /* EXCLUSIVE_IO_WRITE_TIME */
] = 4;
Ut[
  "*I/O Read Speed (exclusive)"
  /* AVERAGE_IO_READ_SPEED */
] = 14;
Ut[
  "*I/O Write Speed (exclusive)"
  /* AVERAGE_IO_WRITE_SPEED */
] = 14;
Ut[
  "*Shared Hit Blocks (exclusive)"
  /* EXCLUSIVE_SHARED_HIT_BLOCKS */
] = 0;
Ut[
  "*Shared Read Blocks (exclusive)"
  /* EXCLUSIVE_SHARED_READ_BLOCKS */
] = 0;
Ut[
  "*Shared Dirtied Blocks (exclusive)"
  /* EXCLUSIVE_SHARED_DIRTIED_BLOCKS */
] = 0;
Ut[
  "*Shared Written Blocks (exclusive)"
  /* EXCLUSIVE_SHARED_WRITTEN_BLOCKS */
] = 0;
Ut[
  "*Temp Read Blocks (exclusive)"
  /* EXCLUSIVE_TEMP_READ_BLOCKS */
] = 0;
Ut[
  "*Temp Written Blocks (exclusive)"
  /* EXCLUSIVE_TEMP_WRITTEN_BLOCKS */
] = 0;
Ut[
  "*Local Hit Blocks (exclusive)"
  /* EXCLUSIVE_LOCAL_HIT_BLOCKS */
] = 0;
Ut[
  "*Local Read Blocks (exclusive)"
  /* EXCLUSIVE_LOCAL_READ_BLOCKS */
] = 0;
Ut[
  "*Local Dirtied Blocks (exclusive)"
  /* EXCLUSIVE_LOCAL_DIRTIED_BLOCKS */
] = 0;
Ut[
  "*Local Written Blocks (exclusive)"
  /* EXCLUSIVE_LOCAL_WRITTEN_BLOCKS */
] = 0;
Ut[
  "Full-sort Groups"
  /* FULL_SORT_GROUPS */
] = 13;
Ut[
  "Pre-sorted Groups"
  /* PRE_SORTED_GROUPS */
] = 13;
Ut.JIT = 15;
class fa {
}
// plan property keys
Kt(fa, "WORKER_NUMBER", "Worker Number");
Ut[fa.WORKER_NUMBER] = 7;
var Ll = /* @__PURE__ */ ((t) => (t.GROUP_COUNT = "Group Count", t.SORT_METHODS_USED = "Sort Methods Used", t.SORT_SPACE_MEMORY = "Sort Space Memory", t))(Ll || {}), Lc = /* @__PURE__ */ ((t) => (t.AVERAGE_SORT_SPACE_USED = "Average Sort Space Used", t.PEAK_SORT_SPACE_USED = "Peak Sort Space Used", t))(Lc || {});
class ao {
  constructor() {
    Kt(this, "nodeId", 0);
  }
  getNodeTypeDescription(e) {
    return bC[e.toUpperCase()];
  }
  getHelpMessage(e) {
    return IC[e.toUpperCase()];
  }
}
const bC = {
  LIMIT: "returns a specified number of rows from a record set.",
  SORT: "sorts a record set based on the specified sort key.",
  "NESTED LOOP": `merges two record sets by looping through every record in the first set and
   trying to find a match in the second set. All matching records are returned.`,
  "MERGE JOIN": "merges two record sets by first sorting them on a <strong>join key</strong>.",
  HASH: `generates a hash table from the records in the input recordset. Hash is used by
   <strong>Hash Join</strong>.`,
  "HASH JOIN": "joins two record sets by hashing one of them (using a <strong>Hash Scan</strong>).",
  AGGREGATE: "groups records together based on a GROUP BY or aggregate function (like <code>sum()</code>).",
  HASHAGGREGATE: `groups records together based on a GROUP BY or aggregate function (like sum()). Hash Aggregate uses
   a hash to first organize the records by a key.`,
  "SEQ SCAN": `finds relevant records by sequentially scanning the input record set. When reading from a table,
   Seq Scans (unlike Index Scans) perform a single read operation (only the table is read).`,
  "INDEX SCAN": `finds relevant records based on an <strong>Index</strong>.
    Index Scans perform 2 read operations: one to
    read the index and another to read the actual value from the table.`,
  "INDEX ONLY SCAN": `finds relevant records based on an <strong>Index</strong>.
    Index Only Scans perform a single read operation
    from the index and do not read from the corresponding table.`,
  "BITMAP HEAP SCAN": `searches through the pages returned by the <strong>Bitmap Index Scan</strong>
    for relevant rows.`,
  "BITMAP INDEX SCAN": `uses a <strong>Bitmap Index</strong> (index which uses 1 bit per page)
    to find all relevant pages.
    Results of this node are fed to the <strong>Bitmap Heap Scan</strong>.`,
  "CTE SCAN": `performs a sequential scan of <strong>Common Table Expression (CTE) query</strong> results. Note that
    results of a CTE are materialized (calculated and temporarily stored).`,
  MEMOIZE: "is used to cache the results of the inner side of a nested loop. It avoids executing underlying nodes when the results for the current parameters are already in the cache.",
  GATHER: "reads the results of the parallel workers, in an undefined order.",
  "GATHER MERGE": "reads the results of the parallel workers, preserving any ordering."
}, IC = {
  "MISSING EXECUTION TIME": `Execution time (or Total runtime) not available for this plan. Make sure you
    use EXPLAIN ANALYZE.`,
  "MISSING PLANNING TIME": "Planning time not available for this plan.",
  "WORKERS PLANNED NOT LAUNCHED": `Less workers than planned were launched.
Consider modifying max_parallel_workers or max_parallel_workers_per_gather.`,
  "WORKERS DETAILED INFO MISSING": "Consider using EXPLAIN (ANALYZE, VERBOSE)",
  "FUZZY NEEDS VERBOSE": "Information may not be accurate. Use EXPLAIN VERBOSE mode.",
  "HINT TRACK_IO_TIMING": "HINT: activate <em><b>track_io_timing</b></em> to have details on time spent outside the PG cache.",
  "IO TIMINGS PARALLEL": "Distributed among parallel workers"
};
function LC(t, e, n, i) {
  if (!e)
    return;
  const o = t.getBoundingClientRect(), a = e.getBoundingClientRect();
  let l = t.scrollLeft;
  const f = a.left >= o.left && a.left <= o.right && a.right <= o.right;
  let c = t.scrollTop;
  const g = a.top >= o.top && a.top <= o.bottom && a.bottom <= o.bottom;
  (!f || !g) && (l = a.left + t.scrollLeft - o.left - o.width / 2 + a.width / 2, c = a.top + t.scrollTop - o.top - o.height / 2 + a.height / 2, CC({
    element: t,
    to: { scrollTop: c, scrollLeft: l },
    duration: 400,
    done: i
  }));
}
const GE = ({
  currentTime: t,
  start: e,
  change: n,
  duration: i
}) => {
  let o = t;
  return o /= i / 2, o < 1 ? n / 2 * o * o + e : (o -= 1, -n / 2 * (o * (o - 2) - 1) + e);
};
function CC({
  duration: t,
  element: e,
  to: n,
  done: i
}) {
  const o = e.scrollTop, a = e.scrollLeft, l = n.scrollTop - o, f = n.scrollLeft - a, c = (/* @__PURE__ */ new Date()).getTime(), g = () => {
    const _ = (/* @__PURE__ */ new Date()).getTime() - c;
    e.scrollTop = GE({
      currentTime: _,
      start: o,
      change: l,
      duration: t
    }), e.scrollLeft = GE({
      currentTime: _,
      start: a,
      change: f,
      duration: t
    }), _ < t ? requestAnimationFrame(g) : (e.scrollTop = n.scrollTop, e.scrollLeft = n.scrollLeft);
  };
  g();
}
function zE(t, e) {
  const n = "([\\s\\S]*?)(e)?(?:(o)|(c)|(t)|(sp)|$)".replace("sp", e).replace("o", "[\\(\\{\\[]").replace("c", "[\\)\\}\\]]").replace("t", `['"]`).replace("e", "[\\\\]"), i = new RegExp(n, "gi"), o = [];
  let a = [];
  const l = [];
  return t.replace(i, (f, c, g, p, _, R, x) => {
    if (g)
      return a.push(c, x || p || _ || R), "";
    if (p)
      o.push(p);
    else if (_)
      o.pop();
    else if (R)
      o[o.length - 1] !== R ? o.push(R) : o.pop();
    else if (x ? !o.length : !c)
      return a.push(c), l.push(a.join("")), a = [], "";
    return a.push(f), "";
  }), l;
}
function NC(t, e) {
  let n;
  const i = t.content.Plan;
  return i.nodeId == e ? i : (i && i.Plans && (i.Plans.some(function o(a) {
    return a.nodeId === e ? (n = a, !0) : a.Plans && a.Plans.some(o);
  }), !n && t.ctes && K.each(t.ctes, (o) => {
    if (o.nodeId == e)
      return n = o, !1;
    if (o.Plans && (o.Plans.some(function a(l) {
      return l.nodeId === e ? (n = l, !0) : l.Plans && l.Plans.some(a);
    }), n))
      return !1;
  })), n);
}
function xC(t, e) {
  let n;
  return t.ctes && K.each(t.ctes, (i) => {
    if (i[h.SUBPLAN_NAME] == "CTE " + e)
      return n = i, !1;
  }), n;
}
const wC = [
  h.NODE_TYPE,
  h.CTE_NAME,
  h.EXCLUSIVE_DURATION,
  h.EXCLUSIVE_COST,
  h.TOTAL_COST,
  h.PLAN_ROWS,
  h.ACTUAL_ROWS,
  h.ACTUAL_LOOPS,
  h.OUTPUT,
  h.WORKERS,
  h.WORKERS_PLANNED,
  h.WORKERS_LAUNCHED,
  h.EXCLUSIVE_SHARED_HIT_BLOCKS,
  h.EXCLUSIVE_SHARED_READ_BLOCKS,
  h.EXCLUSIVE_SHARED_DIRTIED_BLOCKS,
  h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS,
  h.EXCLUSIVE_TEMP_READ_BLOCKS,
  h.EXCLUSIVE_TEMP_WRITTEN_BLOCKS,
  h.EXCLUSIVE_LOCAL_HIT_BLOCKS,
  h.EXCLUSIVE_LOCAL_READ_BLOCKS,
  h.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS,
  h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS,
  h.SHARED_HIT_BLOCKS,
  h.SHARED_READ_BLOCKS,
  h.SHARED_DIRTIED_BLOCKS,
  h.SHARED_WRITTEN_BLOCKS,
  h.TEMP_READ_BLOCKS,
  h.TEMP_WRITTEN_BLOCKS,
  h.LOCAL_HIT_BLOCKS,
  h.LOCAL_READ_BLOCKS,
  h.LOCAL_DIRTIED_BLOCKS,
  h.LOCAL_WRITTEN_BLOCKS,
  h.PLANNER_ESTIMATE_FACTOR,
  h.PLANNER_ESTIMATE_DIRECTION,
  h.SUBPLAN_NAME,
  h.GROUP_KEY,
  h.HASH_CONDITION,
  h.JOIN_TYPE,
  h.INDEX_NAME,
  h.HASH_CONDITION,
  h.EXCLUSIVE_IO_READ_TIME,
  h.EXCLUSIVE_IO_WRITE_TIME,
  h.AVERAGE_IO_READ_SPEED,
  h.AVERAGE_IO_WRITE_SPEED,
  h.IO_READ_TIME,
  // Exclusive value already shown in IO tab
  h.IO_WRITE_TIME,
  // Exclusive value already shown in IO tab
  h.HEAP_FETCHES,
  h.WAL_RECORDS,
  h.WAL_BYTES,
  h.WAL_FPI,
  h.NODE_ID,
  h.ROWS_REMOVED_BY_FILTER,
  h.ROWS_REMOVED_BY_JOIN_FILTER,
  h.ACTUAL_ROWS_REVISED,
  h.PLAN_ROWS_REVISED,
  h.ROWS_REMOVED_BY_FILTER_REVISED,
  h.ROWS_REMOVED_BY_JOIN_FILTER_REVISED,
  "size",
  // Manually added to use FlexTree
  h.RELATION_NAME,
  h.ALIAS,
  h.FUNCTION_NAME,
  h.STRATEGY
];
function Vm(t, e) {
  return (!!e || Ut[t] === mn.increment || t === h.ACTUAL_ROWS) && wC.indexOf(t) === -1;
}
const MC = { class: "tree-lines" }, md = /* @__PURE__ */ $e({
  __name: "LevelDivider",
  props: {
    level: {},
    isSubplan: { type: Boolean },
    isNode: { type: Boolean },
    isLastChild: { type: Boolean },
    branches: {},
    index: {},
    dense: { type: Boolean, default: !1 }
  },
  setup(t) {
    const n = t.dense ? "" : " ";
    return (i, o) => (N(), D("span", MC, [
      (N(!0), D(Ht, null, Pe(d(K).range(i.level), (a) => (N(), D(Ht, null, [
        d(K).indexOf(i.branches, a) != -1 ? (N(), D(Ht, { key: 0 }, [
          m(st(d(n)) + "│", 1)
        ], 64)) : a !== 0 ? (N(), D(Ht, { key: 1 }, [
          m(st(d(n)) + " ", 1)
        ], 64)) : Q("", !0)
      ], 64))), 256)),
      i.index !== 0 ? (N(), D(Ht, { key: 0 }, [
        i.isSubplan && i.isNode ? (N(), D(Ht, { key: 1 }, [
          i.isLastChild ? (N(), D(Ht, { key: 1 }, [
            m(st(d(n)) + " ", 1)
          ], 64)) : (N(), D(Ht, { key: 0 }, [
            m(st(d(n)) + "│", 1)
          ], 64))
        ], 64)) : (N(), D(Ht, { key: 0 }, [
          m(st(d(n)) + st(i.isLastChild ? "└" : "├"), 1)
        ], 64))
      ], 64)) : Q("", !0)
    ]));
  }
}), DC = { class: "table-borderless" }, PC = { class: "text-nowrap p-0" }, UC = { class: "p-0 ps-1" }, kC = { class: "table-borderless" }, BC = { class: "p-0 ps-1" }, $C = /* @__PURE__ */ $e({
  __name: "SortGroup",
  props: {
    sortGroup: {}
  },
  setup(t) {
    return (e, n) => (N(), D("div", null, [
      m(`
    Count: ` + st(e.sortGroup["Group Count"]) + " ", 1),
      n[6] || (n[6] = S("br", null, null, -1)),
      n[7] || (n[7] = m()),
      S("table", DC, [
        S("tbody", null, [
          S("tr", null, [
            S("td", PC, [
              n[0] || (n[0] = m(`
            Sort Method`)),
              e.sortGroup["Sort Methods Used"].length > 1 ? (N(), D(Ht, { key: 0 }, [
                m("s")
              ], 64)) : Q("", !0),
              n[1] || (n[1] = m(`:
          `))
            ]),
            n[2] || (n[2] = m()),
            S("td", UC, st(d(pi)(e.sortGroup["Sort Methods Used"])), 1)
          ])
        ])
      ]),
      n[8] || (n[8] = m()),
      S("table", kC, [
        S("tbody", null, [
          S("tr", null, [
            n[4] || (n[4] = S("td", { class: "p-0" }, "Memory:", -1)),
            n[5] || (n[5] = m()),
            S("td", BC, [
              m(`
            Average:
            ` + st(d(Cc)(
                e.sortGroup["Sort Space Memory"]["Average Sort Space Used"]
              )) + " ", 1),
              n[3] || (n[3] = S("br", null, null, -1)),
              m(`
            Peak:
            ` + st(d(Cc)(e.sortGroup["Sort Space Memory"]["Peak Sort Space Used"])), 1)
            ])
          ])
        ])
      ])
    ]));
  }
}), HC = { class: "table table-sm table-borderless" }, FC = { class: "text-end" }, WC = { class: "text-end" }, VC = { class: "text-end" }, Xm = /* @__PURE__ */ $e({
  __name: "JitDetails",
  props: {
    jit: {}
  },
  setup(t) {
    const e = t;
    return (n, i) => (N(), D("table", HC, [
      S("tbody", null, [
        S("tr", null, [
          i[0] || (i[0] = S("th", null, "Functions", -1)),
          i[1] || (i[1] = m()),
          S("td", FC, st(e.jit.Functions), 1)
        ]),
        i[4] || (i[4] = m()),
        i[5] || (i[5] = S("tr", null, [
          S("th", { colspan: "2" }, "Options")
        ], -1)),
        i[6] || (i[6] = m()),
        (N(!0), D(Ht, null, Pe(e.jit.Options, (o, a) => (N(), D("tr", { key: a }, [
          S("td", null, "  " + st(a), 1),
          i[2] || (i[2] = m()),
          S("td", WC, [
            m(st(o ? "✓" : "✗") + " ", 1),
            S("small", null, "(" + st(o) + ")", 1)
          ])
        ]))), 128)),
        i[7] || (i[7] = m()),
        i[8] || (i[8] = S("tr", null, [
          S("th", { colspan: "2" }, "Timing")
        ], -1)),
        i[9] || (i[9] = m()),
        (N(!0), D(Ht, null, Pe(e.jit.Timing, (o, a) => (N(), D("tr", { key: a }, [
          S("td", null, "  " + st(a), 1),
          i[3] || (i[3] = m()),
          S("td", VC, st(o) + " ms", 1)
        ]))), 128))
      ])
    ]));
  }
});
var Yf, YE;
function XC() {
  if (YE) return Yf;
  YE = 1;
  function t(X) {
    return X instanceof Map ? X.clear = X.delete = X.set = function() {
      throw new Error("map is read-only");
    } : X instanceof Set && (X.add = X.clear = X.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(X), Object.getOwnPropertyNames(X).forEach((it) => {
      const At = X[it], qt = typeof At;
      (qt === "object" || qt === "function") && !Object.isFrozen(At) && t(At);
    }), X;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(it) {
      it.data === void 0 && (it.data = {}), this.data = it.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(X) {
    return X.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function i(X, ...it) {
    const At = /* @__PURE__ */ Object.create(null);
    for (const qt in X)
      At[qt] = X[qt];
    return it.forEach(function(qt) {
      for (const Re in qt)
        At[Re] = qt[Re];
    }), /** @type {T} */
    At;
  }
  const o = "</span>", a = (X) => !!X.scope, l = (X, { prefix: it }) => {
    if (X.startsWith("language:"))
      return X.replace("language:", "language-");
    if (X.includes(".")) {
      const At = X.split(".");
      return [
        `${it}${At.shift()}`,
        ...At.map((qt, Re) => `${qt}${"_".repeat(Re + 1)}`)
      ].join(" ");
    }
    return `${it}${X}`;
  };
  class f {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(it, At) {
      this.buffer = "", this.classPrefix = At.classPrefix, it.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(it) {
      this.buffer += n(it);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(it) {
      if (!a(it)) return;
      const At = l(
        it.scope,
        { prefix: this.classPrefix }
      );
      this.span(At);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(it) {
      a(it) && (this.buffer += o);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(it) {
      this.buffer += `<span class="${it}">`;
    }
  }
  const c = (X = {}) => {
    const it = { children: [] };
    return Object.assign(it, X), it;
  };
  class g {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(it) {
      this.top.children.push(it);
    }
    /** @param {string} scope */
    openNode(it) {
      const At = c({ scope: it });
      this.add(At), this.stack.push(At);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(it) {
      return this.constructor._walk(it, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(it, At) {
      return typeof At == "string" ? it.addText(At) : At.children && (it.openNode(At), At.children.forEach((qt) => this._walk(it, qt)), it.closeNode(At)), it;
    }
    /**
     * @param {Node} node
     */
    static _collapse(it) {
      typeof it != "string" && it.children && (it.children.every((At) => typeof At == "string") ? it.children = [it.children.join("")] : it.children.forEach((At) => {
        g._collapse(At);
      }));
    }
  }
  class p extends g {
    /**
     * @param {*} options
     */
    constructor(it) {
      super(), this.options = it;
    }
    /**
     * @param {string} text
     */
    addText(it) {
      it !== "" && this.add(it);
    }
    /** @param {string} scope */
    startScope(it) {
      this.openNode(it);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(it, At) {
      const qt = it.root;
      At && (qt.scope = `language:${At}`), this.add(qt);
    }
    toHTML() {
      return new f(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function _(X) {
    return X ? typeof X == "string" ? X : X.source : null;
  }
  function R(X) {
    return O("(?=", X, ")");
  }
  function x(X) {
    return O("(?:", X, ")*");
  }
  function P(X) {
    return O("(?:", X, ")?");
  }
  function O(...X) {
    return X.map((At) => _(At)).join("");
  }
  function W(X) {
    const it = X[X.length - 1];
    return typeof it == "object" && it.constructor === Object ? (X.splice(X.length - 1, 1), it) : {};
  }
  function b(...X) {
    return "(" + (W(X).capture ? "" : "?:") + X.map((qt) => _(qt)).join("|") + ")";
  }
  function w(X) {
    return new RegExp(X.toString() + "|").exec("").length - 1;
  }
  function Z(X, it) {
    const At = X && X.exec(it);
    return At && At.index === 0;
  }
  const v = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function G(X, { joinWith: it }) {
    let At = 0;
    return X.map((qt) => {
      At += 1;
      const Re = At;
      let Se = _(qt), $t = "";
      for (; Se.length > 0; ) {
        const wt = v.exec(Se);
        if (!wt) {
          $t += Se;
          break;
        }
        $t += Se.substring(0, wt.index), Se = Se.substring(wt.index + wt[0].length), wt[0][0] === "\\" && wt[1] ? $t += "\\" + String(Number(wt[1]) + Re) : ($t += wt[0], wt[0] === "(" && At++);
      }
      return $t;
    }).map((qt) => `(${qt})`).join(it);
  }
  const L = /\b\B/, B = "[a-zA-Z]\\w*", U = "[a-zA-Z_]\\w*", y = "\\b\\d+(\\.\\d+)?", tt = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", F = "\\b(0b[01]+)", ht = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", M = (X = {}) => {
    const it = /^#![ ]*\//;
    return X.binary && (X.begin = O(
      it,
      /.*\b/,
      X.binary,
      /\b.*/
    )), i({
      scope: "meta",
      begin: it,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (At, qt) => {
        At.index !== 0 && qt.ignoreMatch();
      }
    }, X);
  }, Y = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, lt = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [Y]
  }, V = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [Y]
  }, $ = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, ct = function(X, it, At = {}) {
    const qt = i(
      {
        scope: "comment",
        begin: X,
        end: it,
        contains: []
      },
      At
    );
    qt.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Re = b(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return qt.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: O(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          Re,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), qt;
  }, yt = ct("//", "$"), mt = ct("/\\*", "\\*/"), at = ct("#", "$"), dt = {
    scope: "number",
    begin: y,
    relevance: 0
  }, ut = {
    scope: "number",
    begin: tt,
    relevance: 0
  }, Tt = {
    scope: "number",
    begin: F,
    relevance: 0
  }, q = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      Y,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [Y]
      }
    ]
  }, T = {
    scope: "title",
    begin: B,
    relevance: 0
  }, Et = {
    scope: "title",
    begin: U,
    relevance: 0
  }, bt = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + U,
    relevance: 0
  };
  var Ft = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: lt,
    BACKSLASH_ESCAPE: Y,
    BINARY_NUMBER_MODE: Tt,
    BINARY_NUMBER_RE: F,
    COMMENT: ct,
    C_BLOCK_COMMENT_MODE: mt,
    C_LINE_COMMENT_MODE: yt,
    C_NUMBER_MODE: ut,
    C_NUMBER_RE: tt,
    END_SAME_AS_BEGIN: function(X) {
      return Object.assign(
        X,
        {
          /** @type {ModeCallback} */
          "on:begin": (it, At) => {
            At.data._beginMatch = it[1];
          },
          /** @type {ModeCallback} */
          "on:end": (it, At) => {
            At.data._beginMatch !== it[1] && At.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: at,
    IDENT_RE: B,
    MATCH_NOTHING_RE: L,
    METHOD_GUARD: bt,
    NUMBER_MODE: dt,
    NUMBER_RE: y,
    PHRASAL_WORDS_MODE: $,
    QUOTE_STRING_MODE: V,
    REGEXP_MODE: q,
    RE_STARTERS_RE: ht,
    SHEBANG: M,
    TITLE_MODE: T,
    UNDERSCORE_IDENT_RE: U,
    UNDERSCORE_TITLE_MODE: Et
  });
  function xt(X, it) {
    X.input[X.index - 1] === "." && it.ignoreMatch();
  }
  function ue(X, it) {
    X.className !== void 0 && (X.scope = X.className, delete X.className);
  }
  function He(X, it) {
    it && X.beginKeywords && (X.begin = "\\b(" + X.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", X.__beforeBegin = xt, X.keywords = X.keywords || X.beginKeywords, delete X.beginKeywords, X.relevance === void 0 && (X.relevance = 0));
  }
  function Wt(X, it) {
    Array.isArray(X.illegal) && (X.illegal = b(...X.illegal));
  }
  function Mt(X, it) {
    if (X.match) {
      if (X.begin || X.end) throw new Error("begin & end are not supported with match");
      X.begin = X.match, delete X.match;
    }
  }
  function fe(X, it) {
    X.relevance === void 0 && (X.relevance = 1);
  }
  const ne = (X, it) => {
    if (!X.beforeMatch) return;
    if (X.starts) throw new Error("beforeMatch cannot be used with starts");
    const At = Object.assign({}, X);
    Object.keys(X).forEach((qt) => {
      delete X[qt];
    }), X.keywords = At.keywords, X.begin = O(At.beforeMatch, R(At.begin)), X.starts = {
      relevance: 0,
      contains: [
        Object.assign(At, { endsParent: !0 })
      ]
    }, X.relevance = 0, delete At.beforeMatch;
  }, nt = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Dt = "keyword";
  function ee(X, it, At = Dt) {
    const qt = /* @__PURE__ */ Object.create(null);
    return typeof X == "string" ? Re(At, X.split(" ")) : Array.isArray(X) ? Re(At, X) : Object.keys(X).forEach(function(Se) {
      Object.assign(
        qt,
        ee(X[Se], it, Se)
      );
    }), qt;
    function Re(Se, $t) {
      it && ($t = $t.map((wt) => wt.toLowerCase())), $t.forEach(function(wt) {
        const re = wt.split("|");
        qt[re[0]] = [Se, oe(re[0], re[1])];
      });
    }
  }
  function oe(X, it) {
    return it ? Number(it) : we(X) ? 0 : 1;
  }
  function we(X) {
    return nt.includes(X.toLowerCase());
  }
  const Ne = {}, Qe = (X) => {
    console.error(X);
  }, ln = (X, ...it) => {
    console.log(`WARN: ${X}`, ...it);
  }, un = (X, it) => {
    Ne[`${X}/${it}`] || (console.log(`Deprecated as of ${X}. ${it}`), Ne[`${X}/${it}`] = !0);
  }, nn = new Error();
  function sn(X, it, { key: At }) {
    let qt = 0;
    const Re = X[At], Se = {}, $t = {};
    for (let wt = 1; wt <= it.length; wt++)
      $t[wt + qt] = Re[wt], Se[wt + qt] = !0, qt += w(it[wt - 1]);
    X[At] = $t, X[At]._emit = Se, X[At]._multi = !0;
  }
  function Jr(X) {
    if (Array.isArray(X.begin)) {
      if (X.skip || X.excludeBegin || X.returnBegin)
        throw Qe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), nn;
      if (typeof X.beginScope != "object" || X.beginScope === null)
        throw Qe("beginScope must be object"), nn;
      sn(X, X.begin, { key: "beginScope" }), X.begin = G(X.begin, { joinWith: "" });
    }
  }
  function Qr(X) {
    if (Array.isArray(X.end)) {
      if (X.skip || X.excludeEnd || X.returnEnd)
        throw Qe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), nn;
      if (typeof X.endScope != "object" || X.endScope === null)
        throw Qe("endScope must be object"), nn;
      sn(X, X.end, { key: "endScope" }), X.end = G(X.end, { joinWith: "" });
    }
  }
  function Zr(X) {
    X.scope && typeof X.scope == "object" && X.scope !== null && (X.beginScope = X.scope, delete X.scope);
  }
  function ti(X) {
    Zr(X), typeof X.beginScope == "string" && (X.beginScope = { _wrap: X.beginScope }), typeof X.endScope == "string" && (X.endScope = { _wrap: X.endScope }), Jr(X), Qr(X);
  }
  function ei(X) {
    function it($t, wt) {
      return new RegExp(
        _($t),
        "m" + (X.case_insensitive ? "i" : "") + (X.unicodeRegex ? "u" : "") + (wt ? "g" : "")
      );
    }
    class At {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(wt, re) {
        re.position = this.position++, this.matchIndexes[this.matchAt] = re, this.regexes.push([re, wt]), this.matchAt += w(wt) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const wt = this.regexes.map((re) => re[1]);
        this.matcherRe = it(G(wt, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(wt) {
        this.matcherRe.lastIndex = this.lastIndex;
        const re = this.matcherRe.exec(wt);
        if (!re)
          return null;
        const je = re.findIndex(($i, fo) => fo > 0 && $i !== void 0), qe = this.matchIndexes[je];
        return re.splice(0, je), Object.assign(re, qe);
      }
    }
    class qt {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(wt) {
        if (this.multiRegexes[wt]) return this.multiRegexes[wt];
        const re = new At();
        return this.rules.slice(wt).forEach(([je, qe]) => re.addRule(je, qe)), re.compile(), this.multiRegexes[wt] = re, re;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(wt, re) {
        this.rules.push([wt, re]), re.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(wt) {
        const re = this.getMatcher(this.regexIndex);
        re.lastIndex = this.lastIndex;
        let je = re.exec(wt);
        if (this.resumingScanAtSamePosition() && !(je && je.index === this.lastIndex)) {
          const qe = this.getMatcher(0);
          qe.lastIndex = this.lastIndex + 1, je = qe.exec(wt);
        }
        return je && (this.regexIndex += je.position + 1, this.regexIndex === this.count && this.considerAll()), je;
      }
    }
    function Re($t) {
      const wt = new qt();
      return $t.contains.forEach((re) => wt.addRule(re.begin, { rule: re, type: "begin" })), $t.terminatorEnd && wt.addRule($t.terminatorEnd, { type: "end" }), $t.illegal && wt.addRule($t.illegal, { type: "illegal" }), wt;
    }
    function Se($t, wt) {
      const re = (
        /** @type CompiledMode */
        $t
      );
      if ($t.isCompiled) return re;
      [
        ue,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Mt,
        ti,
        ne
      ].forEach((qe) => qe($t, wt)), X.compilerExtensions.forEach((qe) => qe($t, wt)), $t.__beforeBegin = null, [
        He,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Wt,
        // default to 1 relevance if not specified
        fe
      ].forEach((qe) => qe($t, wt)), $t.isCompiled = !0;
      let je = null;
      return typeof $t.keywords == "object" && $t.keywords.$pattern && ($t.keywords = Object.assign({}, $t.keywords), je = $t.keywords.$pattern, delete $t.keywords.$pattern), je = je || /\w+/, $t.keywords && ($t.keywords = ee($t.keywords, X.case_insensitive)), re.keywordPatternRe = it(je, !0), wt && ($t.begin || ($t.begin = /\B|\b/), re.beginRe = it(re.begin), !$t.end && !$t.endsWithParent && ($t.end = /\B|\b/), $t.end && (re.endRe = it(re.end)), re.terminatorEnd = _(re.end) || "", $t.endsWithParent && wt.terminatorEnd && (re.terminatorEnd += ($t.end ? "|" : "") + wt.terminatorEnd)), $t.illegal && (re.illegalRe = it(
        /** @type {RegExp | string} */
        $t.illegal
      )), $t.contains || ($t.contains = []), $t.contains = [].concat(...$t.contains.map(function(qe) {
        return rt(qe === "self" ? $t : qe);
      })), $t.contains.forEach(function(qe) {
        Se(
          /** @type Mode */
          qe,
          re
        );
      }), $t.starts && Se($t.starts, wt), re.matcher = Re(re), re;
    }
    if (X.compilerExtensions || (X.compilerExtensions = []), X.contains && X.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return X.classNameAliases = i(X.classNameAliases || {}), Se(
      /** @type Mode */
      X
    );
  }
  function k(X) {
    return X ? X.endsWithParent || k(X.starts) : !1;
  }
  function rt(X) {
    return X.variants && !X.cachedVariants && (X.cachedVariants = X.variants.map(function(it) {
      return i(X, { variants: null }, it);
    })), X.cachedVariants ? X.cachedVariants : k(X) ? i(X, { starts: X.starts ? i(X.starts) : null }) : Object.isFrozen(X) ? i(X) : X;
  }
  var vt = "11.11.1";
  class kt extends Error {
    constructor(it, At) {
      super(it), this.name = "HTMLInjectionError", this.html = At;
    }
  }
  const Nt = n, _e = i, Ie = Symbol("nomatch"), fn = 7, pr = function(X) {
    const it = /* @__PURE__ */ Object.create(null), At = /* @__PURE__ */ Object.create(null), qt = [];
    let Re = !0;
    const Se = "Could not find the language '{}', did you forget to load/include a language module?", $t = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let wt = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: p
    };
    function re(Ot) {
      return wt.noHighlightRe.test(Ot);
    }
    function je(Ot) {
      let zt = Ot.className + " ";
      zt += Ot.parentNode ? Ot.parentNode.className : "";
      const Ee = wt.languageDetectRe.exec(zt);
      if (Ee) {
        const Me = xr(Ee[1]);
        return Me || (ln(Se.replace("{}", Ee[1])), ln("Falling back to no-highlight mode for this block.", Ot)), Me ? Ee[1] : "no-highlight";
      }
      return zt.split(/\s+/).find((Me) => re(Me) || xr(Me));
    }
    function qe(Ot, zt, Ee) {
      let Me = "", Ze = "";
      typeof zt == "object" ? (Me = Ot, Ee = zt.ignoreIllegals, Ze = zt.language) : (un("10.7.0", "highlight(lang, code, ...args) has been deprecated."), un("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Ze = Ot, Me = zt), Ee === void 0 && (Ee = !0);
      const Hn = {
        code: Me,
        language: Ze
      };
      Os("before:highlight", Hn);
      const hr = Hn.result ? Hn.result : $i(Hn.language, Hn.code, Ee);
      return hr.code = Hn.code, Os("after:highlight", hr), hr;
    }
    function $i(Ot, zt, Ee, Me) {
      const Ze = /* @__PURE__ */ Object.create(null);
      function Hn(Lt, Xt) {
        return Lt.keywords[Xt];
      }
      function hr() {
        if (!Qt.keywords) {
          rn.addText(De);
          return;
        }
        let Lt = 0;
        Qt.keywordPatternRe.lastIndex = 0;
        let Xt = Qt.keywordPatternRe.exec(De), ce = "";
        for (; Xt; ) {
          ce += De.substring(Lt, Xt.index);
          const ye = Fn.case_insensitive ? Xt[0].toLowerCase() : Xt[0], cn = Hn(Qt, ye);
          if (cn) {
            const [Er, Iu] = cn;
            if (rn.addText(ce), ce = "", Ze[ye] = (Ze[ye] || 0) + 1, Ze[ye] <= fn && (Xi += Iu), Er.startsWith("_"))
              ce += Xt[0];
            else {
              const Lu = Fn.classNameAliases[Er] || Er;
              Cn(Xt[0], Lu);
            }
          } else
            ce += Xt[0];
          Lt = Qt.keywordPatternRe.lastIndex, Xt = Qt.keywordPatternRe.exec(De);
        }
        ce += De.substring(Lt), rn.addText(ce);
      }
      function Fi() {
        if (De === "") return;
        let Lt = null;
        if (typeof Qt.subLanguage == "string") {
          if (!it[Qt.subLanguage]) {
            rn.addText(De);
            return;
          }
          Lt = $i(Qt.subLanguage, De, !0, go[Qt.subLanguage]), go[Qt.subLanguage] = /** @type {CompiledMode} */
          Lt._top;
        } else
          Lt = co(De, Qt.subLanguage.length ? Qt.subLanguage : null);
        Qt.relevance > 0 && (Xi += Lt.relevance), rn.__addSublanguage(Lt._emitter, Lt.language);
      }
      function _n() {
        Qt.subLanguage != null ? Fi() : hr(), De = "";
      }
      function Cn(Lt, Xt) {
        Lt !== "" && (rn.startScope(Xt), rn.addText(Lt), rn.endScope());
      }
      function _a(Lt, Xt) {
        let ce = 1;
        const ye = Xt.length - 1;
        for (; ce <= ye; ) {
          if (!Lt._emit[ce]) {
            ce++;
            continue;
          }
          const cn = Fn.classNameAliases[Lt[ce]] || Lt[ce], Er = Xt[ce];
          cn ? Cn(Er, cn) : (De = Er, hr(), De = ""), ce++;
        }
      }
      function ho(Lt, Xt) {
        return Lt.scope && typeof Lt.scope == "string" && rn.openNode(Fn.classNameAliases[Lt.scope] || Lt.scope), Lt.beginScope && (Lt.beginScope._wrap ? (Cn(De, Fn.classNameAliases[Lt.beginScope._wrap] || Lt.beginScope._wrap), De = "") : Lt.beginScope._multi && (_a(Lt.beginScope, Xt), De = "")), Qt = Object.create(Lt, { parent: { value: Qt } }), Qt;
      }
      function Wi(Lt, Xt, ce) {
        let ye = Z(Lt.endRe, ce);
        if (ye) {
          if (Lt["on:end"]) {
            const cn = new e(Lt);
            Lt["on:end"](Xt, cn), cn.isMatchIgnored && (ye = !1);
          }
          if (ye) {
            for (; Lt.endsParent && Lt.parent; )
              Lt = Lt.parent;
            return Lt;
          }
        }
        if (Lt.endsWithParent)
          return Wi(Lt.parent, Xt, ce);
      }
      function Ta(Lt) {
        return Qt.matcher.regexIndex === 0 ? (De += Lt[0], 1) : (bs = !0, 0);
      }
      function bu(Lt) {
        const Xt = Lt[0], ce = Lt.rule, ye = new e(ce), cn = [ce.__beforeBegin, ce["on:begin"]];
        for (const Er of cn)
          if (Er && (Er(Lt, ye), ye.isMatchIgnored))
            return Ta(Xt);
        return ce.skip ? De += Xt : (ce.excludeBegin && (De += Xt), _n(), !ce.returnBegin && !ce.excludeBegin && (De = Xt)), ho(ce, Lt), ce.returnBegin ? 0 : Xt.length;
      }
      function Aa(Lt) {
        const Xt = Lt[0], ce = zt.substring(Lt.index), ye = Wi(Qt, Lt, ce);
        if (!ye)
          return Ie;
        const cn = Qt;
        Qt.endScope && Qt.endScope._wrap ? (_n(), Cn(Xt, Qt.endScope._wrap)) : Qt.endScope && Qt.endScope._multi ? (_n(), _a(Qt.endScope, Lt)) : cn.skip ? De += Xt : (cn.returnEnd || cn.excludeEnd || (De += Xt), _n(), cn.excludeEnd && (De = Xt));
        do
          Qt.scope && rn.closeNode(), !Qt.skip && !Qt.subLanguage && (Xi += Qt.relevance), Qt = Qt.parent;
        while (Qt !== ye.parent);
        return ye.starts && ho(ye.starts, Lt), cn.returnEnd ? 0 : Xt.length;
      }
      function Sa() {
        const Lt = [];
        for (let Xt = Qt; Xt !== Fn; Xt = Xt.parent)
          Xt.scope && Lt.unshift(Xt.scope);
        Lt.forEach((Xt) => rn.openNode(Xt));
      }
      let Ti = {};
      function ya(Lt, Xt) {
        const ce = Xt && Xt[0];
        if (De += Lt, ce == null)
          return _n(), 0;
        if (Ti.type === "begin" && Xt.type === "end" && Ti.index === Xt.index && ce === "") {
          if (De += zt.slice(Xt.index, Xt.index + 1), !Re) {
            const ye = new Error(`0 width match regex (${Ot})`);
            throw ye.languageName = Ot, ye.badRule = Ti.rule, ye;
          }
          return 1;
        }
        if (Ti = Xt, Xt.type === "begin")
          return bu(Xt);
        if (Xt.type === "illegal" && !Ee) {
          const ye = new Error('Illegal lexeme "' + ce + '" for mode "' + (Qt.scope || "<unnamed>") + '"');
          throw ye.mode = Qt, ye;
        } else if (Xt.type === "end") {
          const ye = Aa(Xt);
          if (ye !== Ie)
            return ye;
        }
        if (Xt.type === "illegal" && ce === "")
          return De += `
`, 1;
        if (Rs > 1e5 && Rs > Xt.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return De += ce, ce.length;
      }
      const Fn = xr(Ot);
      if (!Fn)
        throw Qe(Se.replace("{}", Ot)), new Error('Unknown language: "' + Ot + '"');
      const Eo = ei(Fn);
      let Vi = "", Qt = Me || Eo;
      const go = {}, rn = new wt.__emitter(wt);
      Sa();
      let De = "", Xi = 0, wr = 0, Rs = 0, bs = !1;
      try {
        if (Fn.__emitTokens)
          Fn.__emitTokens(zt, rn);
        else {
          for (Qt.matcher.considerAll(); ; ) {
            Rs++, bs ? bs = !1 : Qt.matcher.considerAll(), Qt.matcher.lastIndex = wr;
            const Lt = Qt.matcher.exec(zt);
            if (!Lt) break;
            const Xt = zt.substring(wr, Lt.index), ce = ya(Xt, Lt);
            wr = Lt.index + ce;
          }
          ya(zt.substring(wr));
        }
        return rn.finalize(), Vi = rn.toHTML(), {
          language: Ot,
          value: Vi,
          relevance: Xi,
          illegal: !1,
          _emitter: rn,
          _top: Qt
        };
      } catch (Lt) {
        if (Lt.message && Lt.message.includes("Illegal"))
          return {
            language: Ot,
            value: Nt(zt),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: Lt.message,
              index: wr,
              context: zt.slice(wr - 100, wr + 100),
              mode: Lt.mode,
              resultSoFar: Vi
            },
            _emitter: rn
          };
        if (Re)
          return {
            language: Ot,
            value: Nt(zt),
            illegal: !1,
            relevance: 0,
            errorRaised: Lt,
            _emitter: rn,
            _top: Qt
          };
        throw Lt;
      }
    }
    function fo(Ot) {
      const zt = {
        value: Nt(Ot),
        illegal: !1,
        relevance: 0,
        _top: $t,
        _emitter: new wt.__emitter(wt)
      };
      return zt._emitter.addText(Ot), zt;
    }
    function co(Ot, zt) {
      zt = zt || wt.languages || Object.keys(it);
      const Ee = fo(Ot), Me = zt.filter(xr).filter(va).map(
        (_n) => $i(_n, Ot, !1)
      );
      Me.unshift(Ee);
      const Ze = Me.sort((_n, Cn) => {
        if (_n.relevance !== Cn.relevance) return Cn.relevance - _n.relevance;
        if (_n.language && Cn.language) {
          if (xr(_n.language).supersetOf === Cn.language)
            return 1;
          if (xr(Cn.language).supersetOf === _n.language)
            return -1;
        }
        return 0;
      }), [Hn, hr] = Ze, Fi = Hn;
      return Fi.secondBest = hr, Fi;
    }
    function mu(Ot, zt, Ee) {
      const Me = zt && At[zt] || Ee;
      Ot.classList.add("hljs"), Ot.classList.add(`language-${Me}`);
    }
    function po(Ot) {
      let zt = null;
      const Ee = je(Ot);
      if (re(Ee)) return;
      if (Os(
        "before:highlightElement",
        { el: Ot, language: Ee }
      ), Ot.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", Ot);
        return;
      }
      if (Ot.children.length > 0 && (wt.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(Ot)), wt.throwUnescapedHTML))
        throw new kt(
          "One of your code blocks includes unescaped HTML.",
          Ot.innerHTML
        );
      zt = Ot;
      const Me = zt.textContent, Ze = Ee ? qe(Me, { language: Ee, ignoreIllegals: !0 }) : co(Me);
      Ot.innerHTML = Ze.value, Ot.dataset.highlighted = "yes", mu(Ot, Ee, Ze.language), Ot.result = {
        language: Ze.language,
        // TODO: remove with version 11.0
        re: Ze.relevance,
        relevance: Ze.relevance
      }, Ze.secondBest && (Ot.secondBest = {
        language: Ze.secondBest.language,
        relevance: Ze.secondBest.relevance
      }), Os("after:highlightElement", { el: Ot, result: Ze, text: Me });
    }
    function _u(Ot) {
      wt = _e(wt, Ot);
    }
    const Tu = () => {
      Ss(), un("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ea() {
      Ss(), un("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let ga = !1;
    function Ss() {
      function Ot() {
        Ss();
      }
      if (document.readyState === "loading") {
        ga || window.addEventListener("DOMContentLoaded", Ot, !1), ga = !0;
        return;
      }
      document.querySelectorAll(wt.cssSelector).forEach(po);
    }
    function Au(Ot, zt) {
      let Ee = null;
      try {
        Ee = zt(X);
      } catch (Me) {
        if (Qe("Language definition for '{}' could not be registered.".replace("{}", Ot)), Re)
          Qe(Me);
        else
          throw Me;
        Ee = $t;
      }
      Ee.name || (Ee.name = Ot), it[Ot] = Ee, Ee.rawDefinition = zt.bind(null, X), Ee.aliases && Hi(Ee.aliases, { languageName: Ot });
    }
    function Su(Ot) {
      delete it[Ot];
      for (const zt of Object.keys(At))
        At[zt] === Ot && delete At[zt];
    }
    function yu() {
      return Object.keys(it);
    }
    function xr(Ot) {
      return Ot = (Ot || "").toLowerCase(), it[Ot] || it[At[Ot]];
    }
    function Hi(Ot, { languageName: zt }) {
      typeof Ot == "string" && (Ot = [Ot]), Ot.forEach((Ee) => {
        At[Ee.toLowerCase()] = zt;
      });
    }
    function va(Ot) {
      const zt = xr(Ot);
      return zt && !zt.disableAutodetect;
    }
    function ys(Ot) {
      Ot["before:highlightBlock"] && !Ot["before:highlightElement"] && (Ot["before:highlightElement"] = (zt) => {
        Ot["before:highlightBlock"](
          Object.assign({ block: zt.el }, zt)
        );
      }), Ot["after:highlightBlock"] && !Ot["after:highlightElement"] && (Ot["after:highlightElement"] = (zt) => {
        Ot["after:highlightBlock"](
          Object.assign({ block: zt.el }, zt)
        );
      });
    }
    function Ou(Ot) {
      ys(Ot), qt.push(Ot);
    }
    function Ru(Ot) {
      const zt = qt.indexOf(Ot);
      zt !== -1 && qt.splice(zt, 1);
    }
    function Os(Ot, zt) {
      const Ee = Ot;
      qt.forEach(function(Me) {
        Me[Ee] && Me[Ee](zt);
      });
    }
    function ma(Ot) {
      return un("10.7.0", "highlightBlock will be removed entirely in v12.0"), un("10.7.0", "Please use highlightElement now."), po(Ot);
    }
    Object.assign(X, {
      highlight: qe,
      highlightAuto: co,
      highlightAll: Ss,
      highlightElement: po,
      // TODO: Remove with v12 API
      highlightBlock: ma,
      configure: _u,
      initHighlighting: Tu,
      initHighlightingOnLoad: Ea,
      registerLanguage: Au,
      unregisterLanguage: Su,
      listLanguages: yu,
      getLanguage: xr,
      registerAliases: Hi,
      autoDetection: va,
      inherit: _e,
      addPlugin: Ou,
      removePlugin: Ru
    }), X.debugMode = function() {
      Re = !1;
    }, X.safeMode = function() {
      Re = !0;
    }, X.versionString = vt, X.regex = {
      concat: O,
      lookahead: R,
      either: b,
      optional: P,
      anyNumberOfTimes: x
    };
    for (const Ot in Ft)
      typeof Ft[Ot] == "object" && t(Ft[Ot]);
    return Object.assign(X, Ft), X;
  }, Xe = pr({});
  return Xe.newInstance = () => pr({}), Yf = Xe, Xe.HighlightJS = Xe, Xe.default = Xe, Yf;
}
var GC = /* @__PURE__ */ XC();
const cu = /* @__PURE__ */ nu(GC);
function zC(t) {
  const e = t.COMMENT("--", "$"), n = "[a-zA-Z_][a-zA-Z_0-9$]*", i = "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$", o = "<<\\s*" + n + "\\s*>>", a = (
    // https://www.postgresql.org/docs/11/static/sql-keywords-appendix.html
    // https://www.postgresql.org/docs/11/static/sql-commands.html
    // SQL commands (starting words)
    "ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY "
  ), l = (
    // only those not in keywrods already
    "SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS "
  ), f = "ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN ", c = (
    // https://www.postgresql.org/docs/11/static/datatype.html
    "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 "
  ), g = c.trim().split(" ").map(function(O) {
    return O.split("|")[0];
  }).join("|"), p = "CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC ", _ = "FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 ", R = (
    // exceptions https://www.postgresql.org/docs/current/static/errcodes-appendix.html
    "SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED "
  ), P = /* https://www.postgresql.org/docs/11/static/functions-aggregate.html */ "ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST ".trim().split(" ").map(function(O) {
    return O.split("|")[0];
  }).join("|");
  return {
    name: "PostgreSQL",
    aliases: [
      "postgres",
      "postgresql"
    ],
    supersetOf: "sql",
    case_insensitive: !0,
    keywords: {
      keyword: a + f + l,
      built_in: p + _ + R
    },
    // Forbid some cunstructs from other languages to improve autodetect. In fact
    // "[a-z]:" is legal (as part of array slice), but improbabal.
    illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
    contains: [
      // special handling of some words, which are reserved only in some contexts
      {
        className: "keyword",
        variants: [
          { begin: /\bTEXT\s*SEARCH\b/ },
          { begin: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/ },
          { begin: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/ },
          { begin: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/ },
          { begin: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/ },
          { begin: /\bNULLS\s+(FIRST|LAST)\b/ },
          { begin: /\bEVENT\s+TRIGGER\b/ },
          { begin: /\b(MAPPING|OR)\s+REPLACE\b/ },
          { begin: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/ },
          { begin: /\b(SHARE|EXCLUSIVE)\s+MODE\b/ },
          { begin: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/ },
          { begin: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/ },
          { begin: /\bPRESERVE\s+ROWS\b/ },
          { begin: /\bDISCARD\s+PLANS\b/ },
          { begin: /\bREFERENCING\s+(OLD|NEW)\b/ },
          { begin: /\bSKIP\s+LOCKED\b/ },
          { begin: /\bGROUPING\s+SETS\b/ },
          { begin: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/ },
          { begin: /\b(WITH|WITHOUT)\s+HOLD\b/ },
          { begin: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/ },
          { begin: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/ },
          { begin: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/ },
          { begin: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/ },
          { begin: /\bIS\s+(NOT\s+)?UNKNOWN\b/ },
          { begin: /\bSECURITY\s+LABEL\b/ },
          { begin: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/ },
          { begin: /\bWITH\s+(NO\s+)?DATA\b/ },
          { begin: /\b(FOREIGN|SET)\s+DATA\b/ },
          { begin: /\bSET\s+(CATALOG|CONSTRAINTS)\b/ },
          { begin: /\b(WITH|FOR)\s+ORDINALITY\b/ },
          { begin: /\bIS\s+(NOT\s+)?DOCUMENT\b/ },
          { begin: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/ },
          { begin: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/ },
          { begin: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/ },
          { begin: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/ },
          { begin: /\bAT\s+TIME\s+ZONE\b/ },
          { begin: /\bGRANTED\s+BY\b/ },
          { begin: /\bRETURN\s+(QUERY|NEXT)\b/ },
          { begin: /\b(ATTACH|DETACH)\s+PARTITION\b/ },
          { begin: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/ },
          { begin: /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/ },
          { begin: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/ }
        ]
      },
      // functions named as keywords, followed by '('
      {
        begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/
        // keywords: { built_in: 'FORMAT FAMILY VERSION' }
      },
      // INCLUDE ( ... ) in index_parameters in CREATE TABLE
      {
        begin: /\bINCLUDE\s*\(/,
        keywords: "INCLUDE"
      },
      // not highlight RANGE if not in frame_clause (not 100% correct, but seems satisfactory)
      { begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ },
      // disable highlighting in commands CREATE AGGREGATE/COLLATION/DATABASE/OPERTOR/TEXT SEARCH .../TYPE
      // and in PL/pgSQL RAISE ... USING
      { begin: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/ },
      // PG_smth; HAS_some_PRIVILEGE
      {
        // className: 'built_in',
        begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/,
        relevance: 10
      },
      // extract
      {
        begin: /\bEXTRACT\s*\(/,
        end: /\bFROM\b/,
        returnEnd: !0,
        keywords: {
          // built_in: 'EXTRACT',
          type: "CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR"
        }
      },
      // xmlelement, xmlpi - special NAME
      {
        begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/,
        keywords: {
          // built_in: 'XMLELEMENT XMLPI',
          keyword: "NAME"
        }
      },
      // xmlparse, xmlserialize
      {
        begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
        keywords: {
          // built_in: 'XMLPARSE XMLSERIALIZE',
          keyword: "DOCUMENT CONTENT"
        }
      },
      // Sequences. We actually skip everything between CACHE|INCREMENT|MAXVALUE|MINVALUE and
      // nearest following numeric constant. Without with trick we find a lot of "keywords"
      // in 'avrasm' autodetection test...
      {
        beginKeywords: "CACHE INCREMENT MAXVALUE MINVALUE",
        end: t.C_NUMBER_RE,
        returnEnd: !0,
        keywords: "BY CACHE INCREMENT MAXVALUE MINVALUE"
      },
      // WITH|WITHOUT TIME ZONE as part of datatype
      {
        className: "type",
        begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/
      },
      // INTERVAL optional fields
      {
        className: "type",
        begin: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/
      },
      // Pseudo-types which allowed only as return type
      {
        begin: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
        keywords: {
          keyword: "RETURNS",
          type: "LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER"
        }
      },
      // Known functions - only when followed by '('
      {
        begin: "\\b(" + P + ")\\s*\\("
        // keywords: { built_in: FUNCTIONS }
      },
      // Types
      {
        begin: "\\.(" + g + ")\\b"
        // prevent highlight as type, say, 'oid' in 'pgclass.oid'
      },
      {
        begin: "\\b(" + g + ")\\s+PATH\\b",
        // in XMLTABLE
        keywords: {
          keyword: "PATH",
          // hopefully no one would use PATH type in XMLTABLE...
          type: c.replace("PATH ", "")
        }
      },
      {
        className: "type",
        begin: "\\b(" + g + ")\\b"
      },
      // Strings, see https://www.postgresql.org/docs/11/static/sql-syntax-lexical.html#SQL-SYNTAX-CONSTANTS
      {
        className: "string",
        begin: "'",
        end: "'",
        contains: [{ begin: "''" }]
      },
      {
        className: "string",
        begin: "(e|E|u&|U&)'",
        end: "'",
        contains: [{ begin: "\\\\." }],
        relevance: 10
      },
      t.END_SAME_AS_BEGIN({
        begin: i,
        end: i,
        contains: [
          {
            // actually we want them all except SQL; listed are those with known implementations
            // and XML + JSON just in case
            subLanguage: [
              "pgsql",
              "perl",
              "python",
              "tcl",
              "r",
              "lua",
              "java",
              "php",
              "ruby",
              "bash",
              "scheme",
              "xml",
              "json"
            ],
            endsWithParent: !0
          }
        ]
      }),
      // identifiers in quotes
      {
        begin: '"',
        end: '"',
        contains: [{ begin: '""' }]
      },
      // numbers
      t.C_NUMBER_MODE,
      // comments
      t.C_BLOCK_COMMENT_MODE,
      e,
      // PL/pgSQL staff
      // %ROWTYPE, %TYPE, $n
      {
        className: "meta",
        variants: [
          {
            // %TYPE, %ROWTYPE
            begin: "%(ROW)?TYPE",
            relevance: 10
          },
          {
            // $n
            begin: "\\$\\d+"
          },
          {
            // #compiler option
            begin: "^#\\w",
            end: "$"
          }
        ]
      },
      // <<labeles>>
      {
        className: "symbol",
        begin: o,
        relevance: 10
      }
    ]
  };
}
function YC(t) {
  const e = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, i = [
    "true",
    "false",
    "null"
  ], o = {
    scope: "literal",
    beginKeywords: i.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: i
    },
    contains: [
      e,
      n,
      t.QUOTE_STRING_MODE,
      o,
      t.C_NUMBER_MODE,
      t.C_LINE_COMMENT_MODE,
      t.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
cu.registerLanguage("pgsql", zC);
cu.registerLanguage("json", YC);
function yn(t) {
  if (t === void 0)
    return "N/A";
  const e = [];
  let n = 1e3 * 60 * 60 * 24;
  const i = Math.floor(t / n);
  i && e.push(i + "d");
  let o = t % n;
  n /= 24;
  const a = Math.floor(o / n);
  a && e.push(a + "h"), o = o % n, n /= 60;
  const l = Math.floor(o / n);
  l && e.push(l + "m"), o = o % n, n /= 60;
  const f = Math.floor(o / n);
  f && e.push(f + "s"), o = o % n;
  const c = parseFloat(o.toPrecision(3));
  return e.push(c.toLocaleString() + "ms"), e.slice(0, 2).join(" ");
}
function KC(t) {
  const e = ["B", "KB", "MB", "GB", "TB"];
  let n = 1, i = t;
  for (; i >= 1024 && n < e.length - 1; )
    i /= 1024, n++;
  return `${i.toFixed(2)} ${e[n]}`;
}
function _d(t) {
  return t === void 0 ? "N/A" : (t = parseFloat(t.toPrecision(3)), t.toLocaleString());
}
function ns(t) {
  return t === void 0 ? "N/A" : t.toLocaleString();
}
function jC(t) {
  return t === void 0 ? "N/A" : t.toLocaleString();
}
function Td(t) {
  const e = parseFloat(t.toPrecision(2)).toLocaleString();
  return K.template("${f}&nbsp;&times;")({ f: e });
}
function pi(t) {
  return t instanceof Array || (t = [t]), t = K.map(t, (e) => K.escape(e.replace(/(^\(|\)$)/g, ""))), t.join(", ");
}
function Gm(t, e) {
  return K.map(t, (n) => {
    let i = K.escape(n);
    return e && (i += e.indexOf(n) !== -1 ? '&nbsp;<span class="text-secondary">(presort)</span>' : ""), i;
  }).join(", ");
}
function Cc(t) {
  return du(t * 1024);
}
function qC(t) {
  return du(t);
}
function du(t, e = 2) {
  const i = e < 0 ? 0 : e, o = ["Bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(t) / Math.log(1024)), l = K.template("${value} ${unit}"), f = parseFloat(
    (t / Math.pow(1024, a)).toPrecision(i)
  ).toLocaleString();
  return l({ value: f, unit: o[a] });
}
function Tr(t) {
  return t ? du(t * 8 * 1024) : "";
}
function Sn(t, e = !1) {
  if (e = !!e, !t)
    return "";
  let n = t.toLocaleString();
  return e && (n += `<br><small>${Tr(t)}</small>`), n;
}
function KE(t) {
  return isNaN(t) ? "-" : K.round(t * 100) + "%";
}
function JC(t) {
  return typeof t == "string" && (t = t.split(/\s*,\s*/)), '<ul class="list-unstyled mb-0">' + K.template(
    "<% _.forEach(lines, function(line) { %><li><%= line %></li><% }); %>"
  )({ lines: t }) + "</ul>";
}
function QC(t) {
  return Pl($C, { sortGroup: t }).mount(
    document.createElement("div")
  ).$el.outerHTML;
}
function ta(t) {
  return t ? du(t * 8 * 1024) + "/s" : "";
}
function ZC(t) {
  return Pl(Xm, { jit: t }).mount(
    document.createElement("div")
  ).$el.outerHTML;
}
function Mi(t, e) {
  if (K.has(Ut, t)) {
    if (Ut[t] === mn.duration)
      return yn(e);
    if (Ut[t] === mn.boolean)
      return e ? "yes" : "no";
    if (Ut[t] === mn.cost)
      return _d(e);
    if (Ut[t] === mn.rows)
      return ns(e);
    if (Ut[t] === mn.loops)
      return jC(e);
    if (Ut[t] === mn.factor)
      return Td(e);
    if (Ut[t] === mn.estimateDirection)
      switch (e) {
        case hn.over:
          return '<i class="fa fa-arrow-up"></i> over';
        case hn.under:
          return '<i class="fa fa-arrow-down"></i> under';
        default:
          return "-";
      }
    else {
      if (Ut[t] === mn.json)
        return JSON.stringify(e, null, 2);
      if (Ut[t] === mn.bytes)
        return qC(e);
      if (Ut[t] === mn.kilobytes)
        return Cc(e);
      if (Ut[t] === mn.blocks)
        return Sn(e, !0);
      if (Ut[t] === mn.list)
        return JC(e);
      if (Ut[t] === mn.sortGroups)
        return QC(e);
      if (Ut[t] === mn.transferRate)
        return ta(e);
      if (Ut[t] === mn.jit)
        return ZC(e);
    }
  }
  return K.escape(e);
}
function Nc(t) {
  let e;
  return t > 90 ? e = 4 : t > 40 ? e = 3 : t > 10 && (e = 2), e ? "c-" + e : "";
}
function tN(t) {
  return cu.highlight(t, { language: "pgsql" }).value;
}
function eN(t) {
  return cu.highlight(t, { language: "json" }).value;
}
function nN(t, e, n) {
  let i, o, a;
  {
    const l = n * (1 + e), f = 2 * n - l;
    i = Kf(f, l, t + 1 / 3), o = Kf(f, l, t), a = Kf(f, l, t - 1 / 3);
  }
  return [Math.floor(i * 255), Math.floor(o * 255), Math.floor(a * 255)];
}
function rN(t) {
  const e = (100 - t) * 1.2 / 360, n = nN(e, 0.9, 0.4);
  return "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")";
}
function Kf(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function lo(t, e, n) {
  const i = jt(NaN), o = jt(NaN), a = jt(0), l = jt(null), f = jt(), c = jt(), g = jt(NaN), p = jt(NaN), _ = jt();
  Ts(() => {
    R(), O(), W(), w(), c.value = e[h.PLANNER_ESTIMATE_DIRECTION], f.value = e[h.PLANNER_ESTIMATE_FACTOR];
  }), Ln(() => n.highlightType, R);
  function R() {
    let nt;
    switch (n.highlightType) {
      case pn.DURATION:
        if (nt = e[h.EXCLUSIVE_DURATION], nt === void 0) {
          l.value = null;
          break;
        }
        a.value = Math.round(
          nt / t.value.planStats.maxDuration * 100
        ), l.value = yn(nt);
        break;
      case pn.ROWS:
        if (nt = e[h.ACTUAL_ROWS_REVISED], nt === void 0) {
          l.value = null;
          break;
        }
        a.value = Math.round(
          nt / t.value.planStats.maxRows * 100
        ) || 0, l.value = ns(nt);
        break;
      case pn.COST:
        if (nt = e[h.EXCLUSIVE_COST], nt === void 0) {
          l.value = null;
          break;
        }
        a.value = Math.round(
          nt / t.value.planStats.maxCost * 100
        ), l.value = _d(nt);
        break;
    }
  }
  const x = St(() => rN(a.value)), P = St(() => {
    let nt = F.value ? "Parallel " : "";
    return nt += e[h.NODE_TYPE], nt;
  });
  function O() {
    var ee, oe;
    const nt = t.value.planStats.executionTime || ((oe = (ee = t.value.content) == null ? void 0 : ee.Plan) == null ? void 0 : oe[h.ACTUAL_TOTAL_TIME]), Dt = e[h.EXCLUSIVE_DURATION];
    i.value = K.round(Dt / nt * 100);
  }
  function W() {
    const nt = t.value.content.maxTotalCost, Dt = e[h.EXCLUSIVE_COST];
    o.value = K.round(Dt / nt * 100);
  }
  const b = St(() => {
    const nt = Object.keys(e).find(
      (Dt) => Dt === h.ROWS_REMOVED_BY_FILTER_REVISED || Dt === h.ROWS_REMOVED_BY_JOIN_FILTER_REVISED
    );
    return Object.keys(h).find(
      (Dt) => h[Dt] === nt
    );
  });
  function w() {
    if (b.value) {
      const nt = e[h[b.value]];
      g.value = nt;
      const Dt = e[h.ACTUAL_ROWS_REVISED];
      p.value = K.floor(nt / (nt + Dt) * 100), p.value === 100 ? _.value = ">99" : p.value === 0 ? _.value = "<1" : _.value = p.value.toString();
    }
  }
  const Z = St(() => {
    let nt;
    const Dt = i.value;
    return Dt > 90 ? nt = 4 : Dt > 40 ? nt = 3 : Dt > 10 && (nt = 2), nt ? "c-" + nt : !1;
  }), v = St(() => {
    let nt;
    const Dt = e[h.PLANNER_ESTIMATE_FACTOR];
    return Dt > 1e3 ? nt = 4 : Dt > 100 ? nt = 3 : Dt > 10 && (nt = 2), nt ? "c-" + nt : !1;
  }), G = St(() => {
    let nt;
    const Dt = o.value;
    return Dt > 90 ? nt = 4 : Dt > 40 ? nt = 3 : Dt > 10 && (nt = 2), nt ? "c-" + nt : !1;
  }), L = St(() => {
    let nt;
    const Dt = p.value * i.value;
    return Dt > 2e3 ? nt = 4 : Dt > 500 && (nt = 3), nt ? "c-" + nt : !1;
  }), B = St(() => {
    let nt;
    const Dt = e[h.HEAP_FETCHES] / (e[h.ACTUAL_ROWS] + (e[h.ROWS_REMOVED_BY_FILTER] || 0) + (e[h.ROWS_REMOVED_BY_JOIN_FILTER] || 0)) * 100;
    return Dt > 90 ? nt = 4 : Dt > 40 ? nt = 3 : Dt > 0 && (nt = 2), nt ? "c-" + nt : !1;
  }), U = St(() => _.value + "% of rows removed by filter"), y = St(() => `Filter used:<br><pre class="mb-0" style="white-space: pre-wrap;"><code>${e[h.FILTER]}</code></pre>`), tt = St(() => !!t.value.planStats.executionTime && !e[h.ACTUAL_LOOPS]), F = St(() => e[h.PARALLEL_AWARE]), ht = St(() => {
    if (console.warn("Make sure it works for workers that are not array"), e[h.WORKERS_LAUNCHED])
      return e[h.WORKERS_LAUNCHED];
    if (e[h.WORKERS_LAUNCHED_BY_GATHER])
      return e[h.WORKERS_LAUNCHED_BY_GATHER];
    const nt = e[h.WORKERS];
    return nt ? nt.length : NaN;
  }), M = St(() => e[h.WORKERS_LAUNCHED] || e[h.WORKERS_PLANNED_BY_GATHER]), Y = St(() => {
    const nt = e[h.WORKERS_PLANNED_BY_GATHER];
    return [...Array(nt).keys()].slice().reverse();
  }), lt = St(() => {
    switch (e[h.PLANNER_ESTIMATE_FACTOR]) {
      case 1 / 0:
        return 100;
      case 1:
        return 0;
      default:
        return (e[h.PLANNER_ESTIMATE_FACTOR] || 0) / t.value.planStats.maxEstimateFactor * 100;
    }
  }), V = St(() => {
    var nt;
    return e[h.EXCLUSIVE_SHARED_HIT_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.shared]) * 100;
  }), $ = St(() => {
    var nt;
    return e[h.EXCLUSIVE_SHARED_READ_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.shared]) * 100;
  }), ct = St(() => {
    var nt;
    return e[h.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.shared]) * 100;
  }), yt = St(() => {
    var nt;
    return e[h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.shared]) * 100;
  }), mt = St(() => {
    var nt;
    return e[h.EXCLUSIVE_TEMP_READ_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.temp]) * 100;
  }), at = St(() => {
    var nt;
    return e[h.EXCLUSIVE_TEMP_WRITTEN_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.temp]) * 100;
  }), dt = St(() => {
    var nt;
    return e[h.EXCLUSIVE_LOCAL_HIT_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.local]) * 100;
  }), ut = St(() => {
    var nt;
    return e[h.EXCLUSIVE_LOCAL_READ_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.local]) * 100;
  }), Tt = St(() => {
    var nt;
    return e[h.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.local]) * 100;
  }), q = St(() => {
    var nt;
    return e[h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] / ((nt = t.value.planStats.maxBlocks) == null ? void 0 : nt[ie.local]) * 100;
  }), T = St(() => [
    "Duration: <br>Exclusive: ",
    yn(e[h.EXCLUSIVE_DURATION]),
    ", Total: ",
    yn(e[h.ACTUAL_TOTAL_TIME])
  ].join("")), Et = St(() => ["Rows: ", ns(e[h.ACTUAL_ROWS_REVISED])].join(
    ""
  )), bt = St(() => {
    const nt = e[h.PLANNER_ESTIMATE_FACTOR], Dt = e[h.PLANNER_ESTIMATE_DIRECTION];
    let ee = "";
    if (nt === void 0 || Dt === void 0)
      return "N/A";
    switch (Dt) {
      case hn.over:
        ee += "Over";
        break;
      case hn.under:
        ee += "Under";
        break;
      default:
        ee += "Correctly";
    }
    return ee += " estimated", ee += nt !== 1 ? " by <b>" + Td(nt) + "</b>" : "", ee += "<br>", ee += `Rows: ${ns(e[h.ACTUAL_ROWS_REVISED])} `, ee += `(${ns(e[h.PLAN_ROWS_REVISED])} planned)`, ee;
  }), Bt = St(() => ["Cost: ", ns(e[h.EXCLUSIVE_COST])].join("")), Ft = St(() => [
    "Rows removed by filter: ",
    He.value,
    ns(g.value)
  ].join("")), xt = St(() => !!e[h.ACTUAL_ROWS_FRACTIONAL]), ue = St(() => e[h.ACTUAL_LOOPS] > 1), He = St(() => !xt.value && ue.value ? "~" : ""), Wt = St(
    () => (nt) => {
      let Dt = "", ee, oe, we, Ne;
      switch (nt) {
        case ie.shared:
          ee = e[h.EXCLUSIVE_SHARED_HIT_BLOCKS], oe = e[h.EXCLUSIVE_SHARED_READ_BLOCKS], Ne = e[h.EXCLUSIVE_SHARED_DIRTIED_BLOCKS], we = e[h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS];
          break;
        case ie.temp:
          oe = e[h.EXCLUSIVE_TEMP_READ_BLOCKS], we = e[h.EXCLUSIVE_TEMP_WRITTEN_BLOCKS];
          break;
        case ie.local:
          ee = e[h.EXCLUSIVE_LOCAL_HIT_BLOCKS], oe = e[h.EXCLUSIVE_LOCAL_READ_BLOCKS], Ne = e[h.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS], we = e[h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS];
          break;
      }
      switch (Dt += '<table class="table table-dark table-sm table-borderless mb-0">', Dt += ee ? '<tr><td>Hit:</td><td class="text-end">' + Sn(ee, !0) + "</td></tr>" : "", Dt += oe ? '<tr><td>Read:</td><td class="text-end">' + Sn(oe, !0) + "</td></tr>" : "", Dt += Ne ? '<tr><td>Dirtied:</td><td class="text-end">' + Sn(Ne, !0) + "</td></tr>" : "", Dt += we ? '<tr><td>Written:</td><td class="text-end">' + Sn(we, !0) + "</td></tr>" : "", Dt += "</table>", !ee && !oe && !Ne && !we && (Dt = " N/A"), nt) {
        case ie.shared:
          Dt = "Shared Blocks:" + Dt;
          break;
        case ie.temp:
          Dt = "Temp Blocks:" + Dt;
          break;
        case ie.local:
          Dt = "Local Blocks:" + Dt;
          break;
      }
      return Dt;
    }
  ), Mt = St(() => (nt) => {
    let Dt = '<table class="table table-dark table-sm table-borderless mb-0">';
    return Dt += `<tr><td>${nt}:</td><td class="text-end">`, e[nt] && (Dt += `${Sn(e[nt], !0)}</td></tr>`), Dt;
  }), fe = St(() => {
    let nt = "";
    const Dt = e[h.EXCLUSIVE_IO_READ_TIME], ee = e[h.AVERAGE_IO_READ_SPEED], oe = e[h.EXCLUSIVE_IO_WRITE_TIME], we = e[h.AVERAGE_IO_WRITE_SPEED];
    return nt += '<table class="table table-dark table-sm table-borderless mb-0">', nt += Dt ? '<tr><td>Read:</td><td class="text-end">' + yn(Dt) + "<br><small>~" + ta(ee) + "</small></td></tr>" : "", nt += oe ? '<tr><td>Write:</td><td class="text-end">' + yn(oe) + "<br><small>~" + ta(we) + "</small></td></tr>" : "", "IO " + nt;
  }), ne = St(() => {
    var nt;
    return `Heap Fetches: ${(nt = e[h.HEAP_FETCHES]) == null ? void 0 : nt.toLocaleString()}`;
  });
  return {
    barColor: x,
    barWidth: a,
    buffersByLocationTooltip: Wt,
    buffersByMetricTooltip: Mt,
    costClass: G,
    costTooltip: Bt,
    durationClass: Z,
    estimateFactorPercent: lt,
    estimateFactorTooltip: bt,
    estimationClass: v,
    executionTimePercent: i,
    filterTooltip: U,
    filterDetailTooltip: y,
    heapFetchesClass: B,
    heapFetchesTooltip: ne,
    highlightValue: l,
    ioTooltip: fe,
    isNeverExecuted: tt,
    isParallelAware: F,
    localDirtiedPercent: Tt,
    localHitPercent: dt,
    localReadPercent: ut,
    localWrittenPercent: q,
    nodeName: P,
    plannerRowEstimateDirection: c,
    plannerRowEstimateValue: f,
    rowsRemoved: g,
    rowsRemovedClass: L,
    rowsRemovedPercent: p,
    rowsRemovedPercentString: _,
    rowsRemovedProp: b,
    rowsRemovedTooltip: Ft,
    rowsTooltip: Et,
    sharedDirtiedPercent: ct,
    sharedHitPercent: V,
    sharedReadPercent: $,
    sharedWrittenPercent: yt,
    tempReadPercent: mt,
    tempWrittenPercent: at,
    tilde: He,
    timeTooltip: T,
    workersLaunchedCount: ht,
    workersPlannedCount: M,
    workersPlannedCountReversed: Y
  };
}
const iN = ["data-tippy-content"], sN = { class: "node-index" }, oN = { class: "fw-normal small" }, aN = { class: "node-type pe-2" }, lN = {
  key: 0,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, uN = {
  key: 1,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, fN = {
  key: 2,
  class: "progress rounded-0 align-items-center bg-transparent justify-content-center",
  style: { height: "10px" }
}, cN = { class: "text-secondary small" }, dN = {
  key: 1,
  class: "fa fa-fw d-inline-block"
}, pN = { class: "text-secondary small" }, hN = {
  key: 1,
  class: "fa fa-fw d-inline-block"
}, EN = {
  key: 3,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, gN = {
  key: 4,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, vN = {
  key: 5,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, mN = {
  key: 6,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, _N = {
  key: 7,
  class: "progress rounded-0 align-items-center bg-transparent",
  style: { height: "5px" }
}, TN = /* @__PURE__ */ $e({
  __name: "DiagramRow",
  props: {
    node: {},
    level: {},
    isSubplan: { type: Boolean },
    isLastChild: { type: Boolean },
    branches: {},
    index: {},
    viewOptions: {}
  },
  setup(t) {
    const e = t, n = Kn(e.node), i = Kn(e.viewOptions), o = jt(null), a = Ce(Lr), l = Ce(Ul), f = Ce(ps);
    if (!f)
      throw new Error(`Could not resolve ${ps.description}`);
    const c = Ce(ru), p = new ao().getHelpMessage, _ = Ce(As), {
      buffersByLocationTooltip: R,
      costTooltip: x,
      estimateFactorPercent: P,
      estimateFactorTooltip: O,
      ioTooltip: W,
      nodeName: b,
      rowsTooltip: w,
      timeTooltip: Z
    } = lo(a, n, _);
    function v(L) {
      let B = "";
      switch (i.metric) {
        case Oe.time:
          B += Z.value;
          break;
        case Oe.rows:
          B += w.value;
          break;
        case Oe.estimate_factor:
          B += O.value;
          break;
        case Oe.cost:
          B += x.value;
          break;
        case Oe.buffers:
          B += R.value(
            i.buffersMetric
          );
          break;
        case Oe.io:
          B += W.value, (L[h.WORKERS_PLANNED] || L[h.WORKERS_PLANNED_BY_GATHER]) && (B += `<br><small>${p("io timings parallel")}</small>`);
          break;
      }
      return L[h.CTE_NAME] && (B += "<br><em>CTE " + L[h.CTE_NAME] + "</em>"), B;
    }
    const G = Ce("scrollTo");
    return Ln(
      () => l == null ? void 0 : l.value,
      (L) => {
        L == n.nodeId && o.value && (G == null || G(o.value));
      }
    ), (L, B) => {
      var U, y, tt, F, ht, M, Y, lt, V, $, ct, yt, mt, at, dt, ut;
      return N(), D("tr", {
        class: It(["no-focus-outline node", {
          selected: n.nodeId === d(l),
          highlight: n.nodeId === d(c)
        }]),
        "data-tippy-content": v(n),
        onMouseenter: B[0] || (B[0] = (Tt) => c.value = n.nodeId),
        onMouseleave: B[1] || (B[1] = (Tt) => c.value = void 0),
        onClick: B[2] || (B[2] = Be((Tt) => d(f)(n.nodeId, !0), ["prevent"])),
        ref_key: "rootEl",
        ref: o
      }, [
        S("td", sN, [
          S("span", oN, "#" + st(n.nodeId), 1)
        ]),
        B[17] || (B[17] = m()),
        S("td", aN, [
          Rt(md, {
            isSubplan: !!n[d(h).SUBPLAN_NAME],
            isLastChild: !!L.isLastChild,
            level: L.level,
            branches: L.branches,
            index: L.index,
            dense: ""
          }, null, 8, ["isSubplan", "isLastChild", "level", "branches", "index"]),
          m(" " + st(d(b)), 1)
        ]),
        B[18] || (B[18] = m()),
        S("td", null, [
          i.metric == d(Oe).time ? (N(), D("div", lN, [
            S("div", {
              class: It(["progress-bar border-secondary bg-secondary", {
                "border-start": n[d(h).EXCLUSIVE_DURATION] > 0
              }]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: n[d(h).EXCLUSIVE_DURATION] / (d(a).planStats.executionTime || d(a).content.Plan[d(h).ACTUAL_TOTAL_TIME]) * 100 + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6),
            B[3] || (B[3] = m()),
            S("div", {
              class: "progress-bar bg-secondary-light",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (n[d(h).ACTUAL_TOTAL_TIME] - n[d(h).EXCLUSIVE_DURATION]) / (d(a).planStats.executionTime || d(a).content.Plan[d(h).ACTUAL_TOTAL_TIME]) * 100 + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4)
          ])) : i.metric == d(Oe).rows ? (N(), D("div", uN, [
            S("div", {
              class: "bg-secondary",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: Math.round(
                  n[d(h).ACTUAL_ROWS_REVISED] / d(a).planStats.maxRows * 100
                ) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4)
          ])) : i.metric == d(Oe).estimate_factor ? (N(), D("div", fN, [
            S("span", cN, [
              n[d(h).PLANNER_ESTIMATE_DIRECTION] === d(hn).under ? (N(), Ue(d(se), {
                key: 0,
                "fixed-width": "",
                icon: d(Bm)
              }, null, 8, ["icon"])) : (N(), D("i", dN))
            ]),
            B[4] || (B[4] = m()),
            S("div", {
              class: It(["progress-bar", [
                n[d(h).PLANNER_ESTIMATE_DIRECTION] === d(hn).under ? "bg-secondary" : "bg-transparent"
              ]]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, { width: d(P) + "%" }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6),
            B[5] || (B[5] = m()),
            B[6] || (B[6] = S("div", {
              class: "progress-bar border-start bg-secondary",
              role: "progressbar",
              style: { width: "1px", height: "5px" },
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, -1)),
            B[7] || (B[7] = m()),
            S("div", {
              class: It(["progress-bar", [
                n[d(h).PLANNER_ESTIMATE_DIRECTION] === d(hn).over ? "bg-secondary" : "bg-transparent"
              ]]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, { width: d(P) + "%" }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6),
            B[8] || (B[8] = m()),
            S("span", pN, [
              n[d(h).PLANNER_ESTIMATE_DIRECTION] === d(hn).over ? (N(), Ue(d(se), {
                key: 0,
                "fixed-width": "",
                icon: d($m)
              }, null, 8, ["icon"])) : (N(), D("i", hN))
            ])
          ])) : i.metric == d(Oe).cost ? (N(), D("div", EN, [
            S("div", {
              class: It(["bg-secondary", {
                "border-secondary border-start": n[d(h).EXCLUSIVE_COST] > 0
              }]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: Math.round(
                  n[d(h).EXCLUSIVE_COST] / d(a).planStats.maxCost * 100
                ) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6)
          ])) : i.metric == d(Oe).buffers && i.buffersMetric == d(ie).shared && ((U = d(a).planStats.maxBlocks) != null && U[d(ie).shared]) ? (N(), D("div", gN, [
            S("div", {
              class: It(["bg-hit", {
                "border-start border-hit": n[d(h).EXCLUSIVE_SHARED_HIT_BLOCKS] > 0
              }]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_SHARED_HIT_BLOCKS] / ((y = d(a).planStats.maxBlocks) == null ? void 0 : y[d(ie).shared]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6),
            B[9] || (B[9] = m()),
            S("div", {
              class: It(["bg-read", {
                "border-start border-read": n[d(h).EXCLUSIVE_SHARED_READ_BLOCKS] > 0
              }]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_SHARED_READ_BLOCKS] / ((tt = d(a).planStats.maxBlocks) == null ? void 0 : tt[d(ie).shared]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6),
            B[10] || (B[10] = m()),
            S("div", {
              class: It(["bg-dirtied", {
                "border-start border-dirtied": n[d(h).EXCLUSIVE_SHARED_DIRTIED_BLOCKS] > 0
              }]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_SHARED_DIRTIED_BLOCKS] / ((F = d(a).planStats.maxBlocks) == null ? void 0 : F[d(ie).shared]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6),
            B[11] || (B[11] = m()),
            S("div", {
              class: It(["bg-written", {
                "border-start border-written": n[d(h).EXCLUSIVE_SHARED_WRITTEN_BLOCKS] > 0
              }]),
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_SHARED_WRITTEN_BLOCKS] / ((ht = d(a).planStats.maxBlocks) == null ? void 0 : ht[d(ie).shared]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 6)
          ])) : i.metric == d(Oe).buffers && i.buffersMetric == d(ie).temp && ((M = d(a).planStats.maxBlocks) != null && M[d(ie).temp]) ? (N(), D("div", vN, [
            S("div", {
              class: "bg-read",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_TEMP_READ_BLOCKS] / ((Y = d(a).planStats.maxBlocks) == null ? void 0 : Y[d(ie).temp]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4),
            B[12] || (B[12] = m()),
            S("div", {
              class: "bg-written",
              role: "progressbar",
              style: Ke([{
                width: (Math.round(
                  n[d(h).EXCLUSIVE_TEMP_WRITTEN_BLOCKS] / ((lt = d(a).planStats.maxBlocks) == null ? void 0 : lt[d(ie).temp]) * 100
                ) || 0) + "%"
              }, { height: "5px" }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4)
          ])) : i.metric == d(Oe).buffers && i.buffersMetric == d(ie).local && ((V = d(a).planStats.maxBlocks) != null && V[d(ie).local]) ? (N(), D("div", mN, [
            S("div", {
              class: "bg-hit",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_LOCAL_HIT_BLOCKS] / (($ = d(a).planStats.maxBlocks) == null ? void 0 : $[d(ie).local]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4),
            B[13] || (B[13] = m()),
            S("div", {
              class: "bg-read",
              role: "progressbar",
              style: Ke([{
                width: (Math.round(
                  n[d(h).EXCLUSIVE_LOCAL_READ_BLOCKS] / ((ct = d(a).planStats.maxBlocks) == null ? void 0 : ct[d(ie).local]) * 100
                ) || 0) + "%"
              }, { height: "5px" }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4),
            B[14] || (B[14] = m()),
            S("div", {
              class: "bg-dirtied",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] / ((yt = d(a).planStats.maxBlocks) == null ? void 0 : yt[d(ie).local]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4),
            B[15] || (B[15] = m()),
            S("div", {
              class: "bg-written",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] / ((at = (mt = d(a).planStats) == null ? void 0 : mt.maxBlocks) == null ? void 0 : at[d(ie).local]) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4)
          ])) : i.metric == d(Oe).io && (d(a).content.Plan[d(h).IO_READ_TIME] || d(a).content.Plan[d(h).IO_WRITE_TIME]) ? (N(), D("div", _N, [
            S("div", {
              class: "bg-read",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_IO_READ_TIME] / ((dt = d(a).planStats) == null ? void 0 : dt.maxIo) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4),
            B[16] || (B[16] = m()),
            S("div", {
              class: "bg-written",
              role: "progressbar",
              style: Ke([{ height: "5px" }, {
                width: (Math.round(
                  n[d(h).EXCLUSIVE_IO_WRITE_TIME] / ((ut = d(a).planStats) == null ? void 0 : ut.maxIo) * 100
                ) || 0) + "%"
              }]),
              "aria-valuenow": "15",
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, null, 4)
          ])) : Q("", !0)
        ])
      ], 42, iN);
    };
  }
});
var Bn = "top", cr = "bottom", dr = "right", $n = "left", Ad = "auto", ca = [Bn, cr, dr, $n], Zs = "start", ea = "end", AN = "clippingParents", zm = "viewport", Mo = "popper", SN = "reference", jE = /* @__PURE__ */ ca.reduce(function(t, e) {
  return t.concat([e + "-" + Zs, e + "-" + ea]);
}, []), Ym = /* @__PURE__ */ [].concat(ca, [Ad]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Zs, e + "-" + ea]);
}, []), yN = "beforeRead", ON = "read", RN = "afterRead", bN = "beforeMain", IN = "main", LN = "afterMain", CN = "beforeWrite", NN = "write", xN = "afterWrite", wN = [yN, ON, RN, bN, IN, LN, CN, NN, xN];
function jr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function jn(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function gs(t) {
  var e = jn(t).Element;
  return t instanceof e || t instanceof Element;
}
function lr(t) {
  var e = jn(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Sd(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = jn(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function MN(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var i = e.styles[n] || {}, o = e.attributes[n] || {}, a = e.elements[n];
    !lr(a) || !jr(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
      var f = o[l];
      f === !1 ? a.removeAttribute(l) : a.setAttribute(l, f === !0 ? "" : f);
    }));
  });
}
function DN(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var o = e.elements[i], a = e.attributes[i] || {}, l = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]), f = l.reduce(function(c, g) {
        return c[g] = "", c;
      }, {});
      !lr(o) || !jr(o) || (Object.assign(o.style, f), Object.keys(a).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Km = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: MN,
  effect: DN,
  requires: ["computeStyles"]
};
function Gr(t) {
  return t.split("-")[0];
}
var cs = Math.max, Vl = Math.min, to = Math.round;
function xc() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function jm() {
  return !/^((?!chrome|android).)*safari/i.test(xc());
}
function eo(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var i = t.getBoundingClientRect(), o = 1, a = 1;
  e && lr(t) && (o = t.offsetWidth > 0 && to(i.width) / t.offsetWidth || 1, a = t.offsetHeight > 0 && to(i.height) / t.offsetHeight || 1);
  var l = gs(t) ? jn(t) : window, f = l.visualViewport, c = !jm() && n, g = (i.left + (c && f ? f.offsetLeft : 0)) / o, p = (i.top + (c && f ? f.offsetTop : 0)) / a, _ = i.width / o, R = i.height / a;
  return {
    width: _,
    height: R,
    top: p,
    right: g + _,
    bottom: p + R,
    left: g,
    x: g,
    y: p
  };
}
function yd(t) {
  var e = eo(t), n = t.offsetWidth, i = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: i
  };
}
function qm(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Sd(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function vi(t) {
  return jn(t).getComputedStyle(t);
}
function PN(t) {
  return ["table", "td", "th"].indexOf(jr(t)) >= 0;
}
function Bi(t) {
  return ((gs(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function pu(t) {
  return jr(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Sd(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Bi(t)
  );
}
function qE(t) {
  return !lr(t) || // https://github.com/popperjs/popper-core/issues/837
  vi(t).position === "fixed" ? null : t.offsetParent;
}
function UN(t) {
  var e = /firefox/i.test(xc()), n = /Trident/i.test(xc());
  if (n && lr(t)) {
    var i = vi(t);
    if (i.position === "fixed")
      return null;
  }
  var o = pu(t);
  for (Sd(o) && (o = o.host); lr(o) && ["html", "body"].indexOf(jr(o)) < 0; ) {
    var a = vi(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function da(t) {
  for (var e = jn(t), n = qE(t); n && PN(n) && vi(n).position === "static"; )
    n = qE(n);
  return n && (jr(n) === "html" || jr(n) === "body" && vi(n).position === "static") ? e : n || UN(t) || e;
}
function Od(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function zo(t, e, n) {
  return cs(t, Vl(e, n));
}
function kN(t, e, n) {
  var i = zo(t, e, n);
  return i > n ? n : i;
}
function Jm() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qm(t) {
  return Object.assign({}, Jm(), t);
}
function Zm(t, e) {
  return e.reduce(function(n, i) {
    return n[i] = t, n;
  }, {});
}
var BN = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Qm(typeof e != "number" ? e : Zm(e, ca));
};
function $N(t) {
  var e, n = t.state, i = t.name, o = t.options, a = n.elements.arrow, l = n.modifiersData.popperOffsets, f = Gr(n.placement), c = Od(f), g = [$n, dr].indexOf(f) >= 0, p = g ? "height" : "width";
  if (!(!a || !l)) {
    var _ = BN(o.padding, n), R = yd(a), x = c === "y" ? Bn : $n, P = c === "y" ? cr : dr, O = n.rects.reference[p] + n.rects.reference[c] - l[c] - n.rects.popper[p], W = l[c] - n.rects.reference[c], b = da(a), w = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, Z = O / 2 - W / 2, v = _[x], G = w - R[p] - _[P], L = w / 2 - R[p] / 2 + Z, B = zo(v, L, G), U = c;
    n.modifiersData[i] = (e = {}, e[U] = B, e.centerOffset = B - L, e);
  }
}
function HN(t) {
  var e = t.state, n = t.options, i = n.element, o = i === void 0 ? "[data-popper-arrow]" : i;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || qm(e.elements.popper, o) && (e.elements.arrow = o));
}
const FN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $N,
  effect: HN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function no(t) {
  return t.split("-")[1];
}
var WN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function VN(t, e) {
  var n = t.x, i = t.y, o = e.devicePixelRatio || 1;
  return {
    x: to(n * o) / o || 0,
    y: to(i * o) / o || 0
  };
}
function JE(t) {
  var e, n = t.popper, i = t.popperRect, o = t.placement, a = t.variation, l = t.offsets, f = t.position, c = t.gpuAcceleration, g = t.adaptive, p = t.roundOffsets, _ = t.isFixed, R = l.x, x = R === void 0 ? 0 : R, P = l.y, O = P === void 0 ? 0 : P, W = typeof p == "function" ? p({
    x,
    y: O
  }) : {
    x,
    y: O
  };
  x = W.x, O = W.y;
  var b = l.hasOwnProperty("x"), w = l.hasOwnProperty("y"), Z = $n, v = Bn, G = window;
  if (g) {
    var L = da(n), B = "clientHeight", U = "clientWidth";
    if (L === jn(n) && (L = Bi(n), vi(L).position !== "static" && f === "absolute" && (B = "scrollHeight", U = "scrollWidth")), L = L, o === Bn || (o === $n || o === dr) && a === ea) {
      v = cr;
      var y = _ && L === G && G.visualViewport ? G.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        L[B]
      );
      O -= y - i.height, O *= c ? 1 : -1;
    }
    if (o === $n || (o === Bn || o === cr) && a === ea) {
      Z = dr;
      var tt = _ && L === G && G.visualViewport ? G.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        L[U]
      );
      x -= tt - i.width, x *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: f
  }, g && WN), ht = p === !0 ? VN({
    x,
    y: O
  }, jn(n)) : {
    x,
    y: O
  };
  if (x = ht.x, O = ht.y, c) {
    var M;
    return Object.assign({}, F, (M = {}, M[v] = w ? "0" : "", M[Z] = b ? "0" : "", M.transform = (G.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + O + "px)" : "translate3d(" + x + "px, " + O + "px, 0)", M));
  }
  return Object.assign({}, F, (e = {}, e[v] = w ? O + "px" : "", e[Z] = b ? x + "px" : "", e.transform = "", e));
}
function XN(t) {
  var e = t.state, n = t.options, i = n.gpuAcceleration, o = i === void 0 ? !0 : i, a = n.adaptive, l = a === void 0 ? !0 : a, f = n.roundOffsets, c = f === void 0 ? !0 : f, g = {
    placement: Gr(e.placement),
    variation: no(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, JE(Object.assign({}, g, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, JE(Object.assign({}, g, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const GN = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: XN,
  data: {}
};
var El = {
  passive: !0
};
function zN(t) {
  var e = t.state, n = t.instance, i = t.options, o = i.scroll, a = o === void 0 ? !0 : o, l = i.resize, f = l === void 0 ? !0 : l, c = jn(e.elements.popper), g = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return a && g.forEach(function(p) {
    p.addEventListener("scroll", n.update, El);
  }), f && c.addEventListener("resize", n.update, El), function() {
    a && g.forEach(function(p) {
      p.removeEventListener("scroll", n.update, El);
    }), f && c.removeEventListener("resize", n.update, El);
  };
}
const YN = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: zN,
  data: {}
};
var KN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cl(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return KN[e];
  });
}
var jN = {
  start: "end",
  end: "start"
};
function QE(t) {
  return t.replace(/start|end/g, function(e) {
    return jN[e];
  });
}
function Rd(t) {
  var e = jn(t), n = e.pageXOffset, i = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: i
  };
}
function bd(t) {
  return eo(Bi(t)).left + Rd(t).scrollLeft;
}
function qN(t, e) {
  var n = jn(t), i = Bi(t), o = n.visualViewport, a = i.clientWidth, l = i.clientHeight, f = 0, c = 0;
  if (o) {
    a = o.width, l = o.height;
    var g = jm();
    (g || !g && e === "fixed") && (f = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: f + bd(t),
    y: c
  };
}
function JN(t) {
  var e, n = Bi(t), i = Rd(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = cs(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = cs(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), f = -i.scrollLeft + bd(t), c = -i.scrollTop;
  return vi(o || n).direction === "rtl" && (f += cs(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: f,
    y: c
  };
}
function Id(t) {
  var e = vi(t), n = e.overflow, i = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + i);
}
function t0(t) {
  return ["html", "body", "#document"].indexOf(jr(t)) >= 0 ? t.ownerDocument.body : lr(t) && Id(t) ? t : t0(pu(t));
}
function Yo(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = t0(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), a = jn(i), l = o ? [a].concat(a.visualViewport || [], Id(i) ? i : []) : i, f = e.concat(l);
  return o ? f : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    f.concat(Yo(pu(l)))
  );
}
function wc(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function QN(t, e) {
  var n = eo(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ZE(t, e, n) {
  return e === zm ? wc(qN(t, n)) : gs(e) ? QN(e, n) : wc(JN(Bi(t)));
}
function ZN(t) {
  var e = Yo(pu(t)), n = ["absolute", "fixed"].indexOf(vi(t).position) >= 0, i = n && lr(t) ? da(t) : t;
  return gs(i) ? e.filter(function(o) {
    return gs(o) && qm(o, i) && jr(o) !== "body";
  }) : [];
}
function tx(t, e, n, i) {
  var o = e === "clippingParents" ? ZN(t) : [].concat(e), a = [].concat(o, [n]), l = a[0], f = a.reduce(function(c, g) {
    var p = ZE(t, g, i);
    return c.top = cs(p.top, c.top), c.right = Vl(p.right, c.right), c.bottom = Vl(p.bottom, c.bottom), c.left = cs(p.left, c.left), c;
  }, ZE(t, l, i));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
function e0(t) {
  var e = t.reference, n = t.element, i = t.placement, o = i ? Gr(i) : null, a = i ? no(i) : null, l = e.x + e.width / 2 - n.width / 2, f = e.y + e.height / 2 - n.height / 2, c;
  switch (o) {
    case Bn:
      c = {
        x: l,
        y: e.y - n.height
      };
      break;
    case cr:
      c = {
        x: l,
        y: e.y + e.height
      };
      break;
    case dr:
      c = {
        x: e.x + e.width,
        y: f
      };
      break;
    case $n:
      c = {
        x: e.x - n.width,
        y: f
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var g = o ? Od(o) : null;
  if (g != null) {
    var p = g === "y" ? "height" : "width";
    switch (a) {
      case Zs:
        c[g] = c[g] - (e[p] / 2 - n[p] / 2);
        break;
      case ea:
        c[g] = c[g] + (e[p] / 2 - n[p] / 2);
        break;
    }
  }
  return c;
}
function na(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, o = i === void 0 ? t.placement : i, a = n.strategy, l = a === void 0 ? t.strategy : a, f = n.boundary, c = f === void 0 ? AN : f, g = n.rootBoundary, p = g === void 0 ? zm : g, _ = n.elementContext, R = _ === void 0 ? Mo : _, x = n.altBoundary, P = x === void 0 ? !1 : x, O = n.padding, W = O === void 0 ? 0 : O, b = Qm(typeof W != "number" ? W : Zm(W, ca)), w = R === Mo ? SN : Mo, Z = t.rects.popper, v = t.elements[P ? w : R], G = tx(gs(v) ? v : v.contextElement || Bi(t.elements.popper), c, p, l), L = eo(t.elements.reference), B = e0({
    reference: L,
    element: Z,
    placement: o
  }), U = wc(Object.assign({}, Z, B)), y = R === Mo ? U : L, tt = {
    top: G.top - y.top + b.top,
    bottom: y.bottom - G.bottom + b.bottom,
    left: G.left - y.left + b.left,
    right: y.right - G.right + b.right
  }, F = t.modifiersData.offset;
  if (R === Mo && F) {
    var ht = F[o];
    Object.keys(tt).forEach(function(M) {
      var Y = [dr, cr].indexOf(M) >= 0 ? 1 : -1, lt = [Bn, cr].indexOf(M) >= 0 ? "y" : "x";
      tt[M] += ht[lt] * Y;
    });
  }
  return tt;
}
function ex(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, o = n.boundary, a = n.rootBoundary, l = n.padding, f = n.flipVariations, c = n.allowedAutoPlacements, g = c === void 0 ? Ym : c, p = no(i), _ = p ? f ? jE : jE.filter(function(P) {
    return no(P) === p;
  }) : ca, R = _.filter(function(P) {
    return g.indexOf(P) >= 0;
  });
  R.length === 0 && (R = _);
  var x = R.reduce(function(P, O) {
    return P[O] = na(t, {
      placement: O,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[Gr(O)], P;
  }, {});
  return Object.keys(x).sort(function(P, O) {
    return x[P] - x[O];
  });
}
function nx(t) {
  if (Gr(t) === Ad)
    return [];
  var e = Cl(t);
  return [QE(t), e, QE(e)];
}
function rx(t) {
  var e = t.state, n = t.options, i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, l = n.altAxis, f = l === void 0 ? !0 : l, c = n.fallbackPlacements, g = n.padding, p = n.boundary, _ = n.rootBoundary, R = n.altBoundary, x = n.flipVariations, P = x === void 0 ? !0 : x, O = n.allowedAutoPlacements, W = e.options.placement, b = Gr(W), w = b === W, Z = c || (w || !P ? [Cl(W)] : nx(W)), v = [W].concat(Z).reduce(function(Tt, q) {
      return Tt.concat(Gr(q) === Ad ? ex(e, {
        placement: q,
        boundary: p,
        rootBoundary: _,
        padding: g,
        flipVariations: P,
        allowedAutoPlacements: O
      }) : q);
    }, []), G = e.rects.reference, L = e.rects.popper, B = /* @__PURE__ */ new Map(), U = !0, y = v[0], tt = 0; tt < v.length; tt++) {
      var F = v[tt], ht = Gr(F), M = no(F) === Zs, Y = [Bn, cr].indexOf(ht) >= 0, lt = Y ? "width" : "height", V = na(e, {
        placement: F,
        boundary: p,
        rootBoundary: _,
        altBoundary: R,
        padding: g
      }), $ = Y ? M ? dr : $n : M ? cr : Bn;
      G[lt] > L[lt] && ($ = Cl($));
      var ct = Cl($), yt = [];
      if (a && yt.push(V[ht] <= 0), f && yt.push(V[$] <= 0, V[ct] <= 0), yt.every(function(Tt) {
        return Tt;
      })) {
        y = F, U = !1;
        break;
      }
      B.set(F, yt);
    }
    if (U)
      for (var mt = P ? 3 : 1, at = function(q) {
        var T = v.find(function(Et) {
          var bt = B.get(Et);
          if (bt)
            return bt.slice(0, q).every(function(Bt) {
              return Bt;
            });
        });
        if (T)
          return y = T, "break";
      }, dt = mt; dt > 0; dt--) {
        var ut = at(dt);
        if (ut === "break") break;
      }
    e.placement !== y && (e.modifiersData[i]._skip = !0, e.placement = y, e.reset = !0);
  }
}
const ix = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: rx,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function tg(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function eg(t) {
  return [Bn, dr, cr, $n].some(function(e) {
    return t[e] >= 0;
  });
}
function sx(t) {
  var e = t.state, n = t.name, i = e.rects.reference, o = e.rects.popper, a = e.modifiersData.preventOverflow, l = na(e, {
    elementContext: "reference"
  }), f = na(e, {
    altBoundary: !0
  }), c = tg(l, i), g = tg(f, o, a), p = eg(c), _ = eg(g);
  e.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: g,
    isReferenceHidden: p,
    hasPopperEscaped: _
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": _
  });
}
const ox = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sx
};
function ax(t, e, n) {
  var i = Gr(t), o = [$n, Bn].indexOf(i) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, l = a[0], f = a[1];
  return l = l || 0, f = (f || 0) * o, [$n, dr].indexOf(i) >= 0 ? {
    x: f,
    y: l
  } : {
    x: l,
    y: f
  };
}
function lx(t) {
  var e = t.state, n = t.options, i = t.name, o = n.offset, a = o === void 0 ? [0, 0] : o, l = Ym.reduce(function(p, _) {
    return p[_] = ax(_, e.rects, a), p;
  }, {}), f = l[e.placement], c = f.x, g = f.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += g), e.modifiersData[i] = l;
}
const ux = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: lx
};
function fx(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = e0({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
const cx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fx,
  data: {}
};
function dx(t) {
  return t === "x" ? "y" : "x";
}
function px(t) {
  var e = t.state, n = t.options, i = t.name, o = n.mainAxis, a = o === void 0 ? !0 : o, l = n.altAxis, f = l === void 0 ? !1 : l, c = n.boundary, g = n.rootBoundary, p = n.altBoundary, _ = n.padding, R = n.tether, x = R === void 0 ? !0 : R, P = n.tetherOffset, O = P === void 0 ? 0 : P, W = na(e, {
    boundary: c,
    rootBoundary: g,
    padding: _,
    altBoundary: p
  }), b = Gr(e.placement), w = no(e.placement), Z = !w, v = Od(b), G = dx(v), L = e.modifiersData.popperOffsets, B = e.rects.reference, U = e.rects.popper, y = typeof O == "function" ? O(Object.assign({}, e.rects, {
    placement: e.placement
  })) : O, tt = typeof y == "number" ? {
    mainAxis: y,
    altAxis: y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, y), F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ht = {
    x: 0,
    y: 0
  };
  if (L) {
    if (a) {
      var M, Y = v === "y" ? Bn : $n, lt = v === "y" ? cr : dr, V = v === "y" ? "height" : "width", $ = L[v], ct = $ + W[Y], yt = $ - W[lt], mt = x ? -U[V] / 2 : 0, at = w === Zs ? B[V] : U[V], dt = w === Zs ? -U[V] : -B[V], ut = e.elements.arrow, Tt = x && ut ? yd(ut) : {
        width: 0,
        height: 0
      }, q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Jm(), T = q[Y], Et = q[lt], bt = zo(0, B[V], Tt[V]), Bt = Z ? B[V] / 2 - mt - bt - T - tt.mainAxis : at - bt - T - tt.mainAxis, Ft = Z ? -B[V] / 2 + mt + bt + Et + tt.mainAxis : dt + bt + Et + tt.mainAxis, xt = e.elements.arrow && da(e.elements.arrow), ue = xt ? v === "y" ? xt.clientTop || 0 : xt.clientLeft || 0 : 0, He = (M = F == null ? void 0 : F[v]) != null ? M : 0, Wt = $ + Bt - He - ue, Mt = $ + Ft - He, fe = zo(x ? Vl(ct, Wt) : ct, $, x ? cs(yt, Mt) : yt);
      L[v] = fe, ht[v] = fe - $;
    }
    if (f) {
      var ne, nt = v === "x" ? Bn : $n, Dt = v === "x" ? cr : dr, ee = L[G], oe = G === "y" ? "height" : "width", we = ee + W[nt], Ne = ee - W[Dt], Qe = [Bn, $n].indexOf(b) !== -1, ln = (ne = F == null ? void 0 : F[G]) != null ? ne : 0, un = Qe ? we : ee - B[oe] - U[oe] - ln + tt.altAxis, nn = Qe ? ee + B[oe] + U[oe] - ln - tt.altAxis : Ne, sn = x && Qe ? kN(un, ee, nn) : zo(x ? un : we, ee, x ? nn : Ne);
      L[G] = sn, ht[G] = sn - ee;
    }
    e.modifiersData[i] = ht;
  }
}
const hx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: px,
  requiresIfExists: ["offset"]
};
function Ex(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function gx(t) {
  return t === jn(t) || !lr(t) ? Rd(t) : Ex(t);
}
function vx(t) {
  var e = t.getBoundingClientRect(), n = to(e.width) / t.offsetWidth || 1, i = to(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function mx(t, e, n) {
  n === void 0 && (n = !1);
  var i = lr(e), o = lr(e) && vx(e), a = Bi(e), l = eo(t, o, n), f = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (i || !i && !n) && ((jr(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Id(a)) && (f = gx(e)), lr(e) ? (c = eo(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : a && (c.x = bd(a))), {
    x: l.left + f.scrollLeft - c.x,
    y: l.top + f.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function _x(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  t.forEach(function(a) {
    e.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(f) {
      if (!n.has(f)) {
        var c = e.get(f);
        c && o(c);
      }
    }), i.push(a);
  }
  return t.forEach(function(a) {
    n.has(a.name) || o(a);
  }), i;
}
function Tx(t) {
  var e = _x(t);
  return wN.reduce(function(n, i) {
    return n.concat(e.filter(function(o) {
      return o.phase === i;
    }));
  }, []);
}
function Ax(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function Sx(t) {
  var e = t.reduce(function(n, i) {
    var o = n[i.name];
    return n[i.name] = o ? Object.assign({}, o, i, {
      options: Object.assign({}, o.options, i.options),
      data: Object.assign({}, o.data, i.data)
    }) : i, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var ng = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function rg() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function yx(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, i = n === void 0 ? [] : n, o = e.defaultOptions, a = o === void 0 ? ng : o;
  return function(f, c, g) {
    g === void 0 && (g = a);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ng, a),
      modifiersData: {},
      elements: {
        reference: f,
        popper: c
      },
      attributes: {},
      styles: {}
    }, _ = [], R = !1, x = {
      state: p,
      setOptions: function(b) {
        var w = typeof b == "function" ? b(p.options) : b;
        O(), p.options = Object.assign({}, a, p.options, w), p.scrollParents = {
          reference: gs(f) ? Yo(f) : f.contextElement ? Yo(f.contextElement) : [],
          popper: Yo(c)
        };
        var Z = Tx(Sx([].concat(i, p.options.modifiers)));
        return p.orderedModifiers = Z.filter(function(v) {
          return v.enabled;
        }), P(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!R) {
          var b = p.elements, w = b.reference, Z = b.popper;
          if (rg(w, Z)) {
            p.rects = {
              reference: mx(w, da(Z), p.options.strategy === "fixed"),
              popper: yd(Z)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(tt) {
              return p.modifiersData[tt.name] = Object.assign({}, tt.data);
            });
            for (var v = 0; v < p.orderedModifiers.length; v++) {
              if (p.reset === !0) {
                p.reset = !1, v = -1;
                continue;
              }
              var G = p.orderedModifiers[v], L = G.fn, B = G.options, U = B === void 0 ? {} : B, y = G.name;
              typeof L == "function" && (p = L({
                state: p,
                options: U,
                name: y,
                instance: x
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ax(function() {
        return new Promise(function(W) {
          x.forceUpdate(), W(p);
        });
      }),
      destroy: function() {
        O(), R = !0;
      }
    };
    if (!rg(f, c))
      return x;
    x.setOptions(g).then(function(W) {
      !R && g.onFirstUpdate && g.onFirstUpdate(W);
    });
    function P() {
      p.orderedModifiers.forEach(function(W) {
        var b = W.name, w = W.options, Z = w === void 0 ? {} : w, v = W.effect;
        if (typeof v == "function") {
          var G = v({
            state: p,
            name: b,
            instance: x,
            options: Z
          }), L = function() {
          };
          _.push(G || L);
        }
      });
    }
    function O() {
      _.forEach(function(W) {
        return W();
      }), _ = [];
    }
    return x;
  };
}
var Ox = [YN, cx, GN, Km, ux, ix, hx, FN, ox], Rx = /* @__PURE__ */ yx({
  defaultModifiers: Ox
}), bx = "tippy-box", n0 = "tippy-content", Ix = "tippy-backdrop", r0 = "tippy-arrow", i0 = "tippy-svg-arrow", rs = {
  passive: !0,
  capture: !0
}, s0 = function() {
  return document.body;
};
function jf(t, e, n) {
  if (Array.isArray(t)) {
    var i = t[e];
    return i ?? (Array.isArray(n) ? n[e] : n);
  }
  return t;
}
function Ld(t, e) {
  var n = {}.toString.call(t);
  return n.indexOf("[object") === 0 && n.indexOf(e + "]") > -1;
}
function o0(t, e) {
  return typeof t == "function" ? t.apply(void 0, e) : t;
}
function ig(t, e) {
  if (e === 0)
    return t;
  var n;
  return function(i) {
    clearTimeout(n), n = setTimeout(function() {
      t(i);
    }, e);
  };
}
function Lx(t, e) {
  var n = Object.assign({}, t);
  return e.forEach(function(i) {
    delete n[i];
  }), n;
}
function Cx(t) {
  return t.split(/\s+/).filter(Boolean);
}
function os(t) {
  return [].concat(t);
}
function sg(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Nx(t) {
  return t.filter(function(e, n) {
    return t.indexOf(e) === n;
  });
}
function xx(t) {
  return t.split("-")[0];
}
function Xl(t) {
  return [].slice.call(t);
}
function og(t) {
  return Object.keys(t).reduce(function(e, n) {
    return t[n] !== void 0 && (e[n] = t[n]), e;
  }, {});
}
function Xs() {
  return document.createElement("div");
}
function hu(t) {
  return ["Element", "Fragment"].some(function(e) {
    return Ld(t, e);
  });
}
function wx(t) {
  return Ld(t, "NodeList");
}
function Mx(t) {
  return Ld(t, "MouseEvent");
}
function Dx(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
function Px(t) {
  return hu(t) ? [t] : wx(t) ? Xl(t) : Array.isArray(t) ? t : Xl(document.querySelectorAll(t));
}
function qf(t, e) {
  t.forEach(function(n) {
    n && (n.style.transitionDuration = e + "ms");
  });
}
function ag(t, e) {
  t.forEach(function(n) {
    n && n.setAttribute("data-state", e);
  });
}
function Ux(t) {
  var e, n = os(t), i = n[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
function kx(t, e) {
  var n = e.clientX, i = e.clientY;
  return t.every(function(o) {
    var a = o.popperRect, l = o.popperState, f = o.props, c = f.interactiveBorder, g = xx(l.placement), p = l.modifiersData.offset;
    if (!p)
      return !0;
    var _ = g === "bottom" ? p.top.y : 0, R = g === "top" ? p.bottom.y : 0, x = g === "right" ? p.left.x : 0, P = g === "left" ? p.right.x : 0, O = a.top - i + _ > c, W = i - a.bottom - R > c, b = a.left - n + x > c, w = n - a.right - P > c;
    return O || W || b || w;
  });
}
function Jf(t, e, n) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    t[i](o, n);
  });
}
function lg(t, e) {
  for (var n = e; n; ) {
    var i;
    if (t.contains(n))
      return !0;
    n = n.getRootNode == null || (i = n.getRootNode()) == null ? void 0 : i.host;
  }
  return !1;
}
var $r = {
  isTouch: !1
}, ug = 0;
function Bx() {
  $r.isTouch || ($r.isTouch = !0, window.performance && document.addEventListener("mousemove", a0));
}
function a0() {
  var t = performance.now();
  t - ug < 20 && ($r.isTouch = !1, document.removeEventListener("mousemove", a0)), ug = t;
}
function $x() {
  var t = document.activeElement;
  if (Dx(t)) {
    var e = t._tippy;
    t.blur && !e.state.isVisible && t.blur();
  }
}
function Hx() {
  document.addEventListener("touchstart", Bx, rs), window.addEventListener("blur", $x);
}
var Fx = typeof window < "u" && typeof document < "u", Wx = Fx ? (
  // @ts-ignore
  !!window.msCrypto
) : !1, Vx = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Xx = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Ir = Object.assign({
  appendTo: s0,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Vx, Xx), Gx = Object.keys(Ir), zx = function(e) {
  var n = Object.keys(e);
  n.forEach(function(i) {
    Ir[i] = e[i];
  });
};
function l0(t) {
  var e = t.plugins || [], n = e.reduce(function(i, o) {
    var a = o.name, l = o.defaultValue;
    if (a) {
      var f;
      i[a] = t[a] !== void 0 ? t[a] : (f = Ir[a]) != null ? f : l;
    }
    return i;
  }, {});
  return Object.assign({}, t, n);
}
function Yx(t, e) {
  var n = e ? Object.keys(l0(Object.assign({}, Ir, {
    plugins: e
  }))) : Gx, i = n.reduce(function(o, a) {
    var l = (t.getAttribute("data-tippy-" + a) || "").trim();
    if (!l)
      return o;
    if (a === "content")
      o[a] = l;
    else
      try {
        o[a] = JSON.parse(l);
      } catch {
        o[a] = l;
      }
    return o;
  }, {});
  return i;
}
function fg(t, e) {
  var n = Object.assign({}, e, {
    content: o0(e.content, [t])
  }, e.ignoreAttributes ? {} : Yx(t, e.plugins));
  return n.aria = Object.assign({}, Ir.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? e.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? e.interactive ? null : "describedby" : n.aria.content
  }, n;
}
var Kx = function() {
  return "innerHTML";
};
function Mc(t, e) {
  t[Kx()] = e;
}
function cg(t) {
  var e = Xs();
  return t === !0 ? e.className = r0 : (e.className = i0, hu(t) ? e.appendChild(t) : Mc(e, t)), e;
}
function dg(t, e) {
  hu(e.content) ? (Mc(t, ""), t.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Mc(t, e.content) : t.textContent = e.content);
}
function Dc(t) {
  var e = t.firstElementChild, n = Xl(e.children);
  return {
    box: e,
    content: n.find(function(i) {
      return i.classList.contains(n0);
    }),
    arrow: n.find(function(i) {
      return i.classList.contains(r0) || i.classList.contains(i0);
    }),
    backdrop: n.find(function(i) {
      return i.classList.contains(Ix);
    })
  };
}
function u0(t) {
  var e = Xs(), n = Xs();
  n.className = bx, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var i = Xs();
  i.className = n0, i.setAttribute("data-state", "hidden"), dg(i, t.props), e.appendChild(n), n.appendChild(i), o(t.props, t.props);
  function o(a, l) {
    var f = Dc(e), c = f.box, g = f.content, p = f.arrow;
    l.theme ? c.setAttribute("data-theme", l.theme) : c.removeAttribute("data-theme"), typeof l.animation == "string" ? c.setAttribute("data-animation", l.animation) : c.removeAttribute("data-animation"), l.inertia ? c.setAttribute("data-inertia", "") : c.removeAttribute("data-inertia"), c.style.maxWidth = typeof l.maxWidth == "number" ? l.maxWidth + "px" : l.maxWidth, l.role ? c.setAttribute("role", l.role) : c.removeAttribute("role"), (a.content !== l.content || a.allowHTML !== l.allowHTML) && dg(g, t.props), l.arrow ? p ? a.arrow !== l.arrow && (c.removeChild(p), c.appendChild(cg(l.arrow))) : c.appendChild(cg(l.arrow)) : p && c.removeChild(p);
  }
  return {
    popper: e,
    onUpdate: o
  };
}
u0.$$tippy = !0;
var jx = 1, gl = [], Qf = [];
function qx(t, e) {
  var n = fg(t, Object.assign({}, Ir, l0(og(e)))), i, o, a, l = !1, f = !1, c = !1, g = !1, p, _, R, x = [], P = ig(Wt, n.interactiveDebounce), O, W = jx++, b = null, w = Nx(n.plugins), Z = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, v = {
    // properties
    id: W,
    reference: t,
    popper: Xs(),
    popperInstance: b,
    props: n,
    state: Z,
    plugins: w,
    // methods
    clearDelayTimeouts: un,
    setProps: nn,
    setContent: sn,
    show: Jr,
    hide: Qr,
    hideWithInteractivity: Zr,
    enable: Qe,
    disable: ln,
    unmount: ti,
    destroy: ei
  };
  if (!n.render)
    return v;
  var G = n.render(v), L = G.popper, B = G.onUpdate;
  L.setAttribute("data-tippy-root", ""), L.id = "tippy-" + v.id, v.popper = L, t._tippy = v, L._tippy = v;
  var U = w.map(function(k) {
    return k.fn(v);
  }), y = t.hasAttribute("aria-expanded");
  return xt(), mt(), $(), ct("onCreate", [v]), n.showOnCreate && we(), L.addEventListener("mouseenter", function() {
    v.props.interactive && v.state.isVisible && v.clearDelayTimeouts();
  }), L.addEventListener("mouseleave", function() {
    v.props.interactive && v.props.trigger.indexOf("mouseenter") >= 0 && Y().addEventListener("mousemove", P);
  }), v;
  function tt() {
    var k = v.props.touch;
    return Array.isArray(k) ? k : [k, 0];
  }
  function F() {
    return tt()[0] === "hold";
  }
  function ht() {
    var k;
    return !!((k = v.props.render) != null && k.$$tippy);
  }
  function M() {
    return O || t;
  }
  function Y() {
    var k = M().parentNode;
    return k ? Ux(k) : document;
  }
  function lt() {
    return Dc(L);
  }
  function V(k) {
    return v.state.isMounted && !v.state.isVisible || $r.isTouch || p && p.type === "focus" ? 0 : jf(v.props.delay, k ? 0 : 1, Ir.delay);
  }
  function $(k) {
    k === void 0 && (k = !1), L.style.pointerEvents = v.props.interactive && !k ? "" : "none", L.style.zIndex = "" + v.props.zIndex;
  }
  function ct(k, rt, vt) {
    if (vt === void 0 && (vt = !0), U.forEach(function(Nt) {
      Nt[k] && Nt[k].apply(Nt, rt);
    }), vt) {
      var kt;
      (kt = v.props)[k].apply(kt, rt);
    }
  }
  function yt() {
    var k = v.props.aria;
    if (k.content) {
      var rt = "aria-" + k.content, vt = L.id, kt = os(v.props.triggerTarget || t);
      kt.forEach(function(Nt) {
        var _e = Nt.getAttribute(rt);
        if (v.state.isVisible)
          Nt.setAttribute(rt, _e ? _e + " " + vt : vt);
        else {
          var Ie = _e && _e.replace(vt, "").trim();
          Ie ? Nt.setAttribute(rt, Ie) : Nt.removeAttribute(rt);
        }
      });
    }
  }
  function mt() {
    if (!(y || !v.props.aria.expanded)) {
      var k = os(v.props.triggerTarget || t);
      k.forEach(function(rt) {
        v.props.interactive ? rt.setAttribute("aria-expanded", v.state.isVisible && rt === M() ? "true" : "false") : rt.removeAttribute("aria-expanded");
      });
    }
  }
  function at() {
    Y().removeEventListener("mousemove", P), gl = gl.filter(function(k) {
      return k !== P;
    });
  }
  function dt(k) {
    if (!($r.isTouch && (c || k.type === "mousedown"))) {
      var rt = k.composedPath && k.composedPath()[0] || k.target;
      if (!(v.props.interactive && lg(L, rt))) {
        if (os(v.props.triggerTarget || t).some(function(vt) {
          return lg(vt, rt);
        })) {
          if ($r.isTouch || v.state.isVisible && v.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ct("onClickOutside", [v, k]);
        v.props.hideOnClick === !0 && (v.clearDelayTimeouts(), v.hide(), f = !0, setTimeout(function() {
          f = !1;
        }), v.state.isMounted || T());
      }
    }
  }
  function ut() {
    c = !0;
  }
  function Tt() {
    c = !1;
  }
  function q() {
    var k = Y();
    k.addEventListener("mousedown", dt, !0), k.addEventListener("touchend", dt, rs), k.addEventListener("touchstart", Tt, rs), k.addEventListener("touchmove", ut, rs);
  }
  function T() {
    var k = Y();
    k.removeEventListener("mousedown", dt, !0), k.removeEventListener("touchend", dt, rs), k.removeEventListener("touchstart", Tt, rs), k.removeEventListener("touchmove", ut, rs);
  }
  function Et(k, rt) {
    Bt(k, function() {
      !v.state.isVisible && L.parentNode && L.parentNode.contains(L) && rt();
    });
  }
  function bt(k, rt) {
    Bt(k, rt);
  }
  function Bt(k, rt) {
    var vt = lt().box;
    function kt(Nt) {
      Nt.target === vt && (Jf(vt, "remove", kt), rt());
    }
    if (k === 0)
      return rt();
    Jf(vt, "remove", _), Jf(vt, "add", kt), _ = kt;
  }
  function Ft(k, rt, vt) {
    vt === void 0 && (vt = !1);
    var kt = os(v.props.triggerTarget || t);
    kt.forEach(function(Nt) {
      Nt.addEventListener(k, rt, vt), x.push({
        node: Nt,
        eventType: k,
        handler: rt,
        options: vt
      });
    });
  }
  function xt() {
    F() && (Ft("touchstart", He, {
      passive: !0
    }), Ft("touchend", Mt, {
      passive: !0
    })), Cx(v.props.trigger).forEach(function(k) {
      if (k !== "manual")
        switch (Ft(k, He), k) {
          case "mouseenter":
            Ft("mouseleave", Mt);
            break;
          case "focus":
            Ft(Wx ? "focusout" : "blur", fe);
            break;
          case "focusin":
            Ft("focusout", fe);
            break;
        }
    });
  }
  function ue() {
    x.forEach(function(k) {
      var rt = k.node, vt = k.eventType, kt = k.handler, Nt = k.options;
      rt.removeEventListener(vt, kt, Nt);
    }), x = [];
  }
  function He(k) {
    var rt, vt = !1;
    if (!(!v.state.isEnabled || ne(k) || f)) {
      var kt = ((rt = p) == null ? void 0 : rt.type) === "focus";
      p = k, O = k.currentTarget, mt(), !v.state.isVisible && Mx(k) && gl.forEach(function(Nt) {
        return Nt(k);
      }), k.type === "click" && (v.props.trigger.indexOf("mouseenter") < 0 || l) && v.props.hideOnClick !== !1 && v.state.isVisible ? vt = !0 : we(k), k.type === "click" && (l = !vt), vt && !kt && Ne(k);
    }
  }
  function Wt(k) {
    var rt = k.target, vt = M().contains(rt) || L.contains(rt);
    if (!(k.type === "mousemove" && vt)) {
      var kt = oe().concat(L).map(function(Nt) {
        var _e, Ie = Nt._tippy, fn = (_e = Ie.popperInstance) == null ? void 0 : _e.state;
        return fn ? {
          popperRect: Nt.getBoundingClientRect(),
          popperState: fn,
          props: n
        } : null;
      }).filter(Boolean);
      kx(kt, k) && (at(), Ne(k));
    }
  }
  function Mt(k) {
    var rt = ne(k) || v.props.trigger.indexOf("click") >= 0 && l;
    if (!rt) {
      if (v.props.interactive) {
        v.hideWithInteractivity(k);
        return;
      }
      Ne(k);
    }
  }
  function fe(k) {
    v.props.trigger.indexOf("focusin") < 0 && k.target !== M() || v.props.interactive && k.relatedTarget && L.contains(k.relatedTarget) || Ne(k);
  }
  function ne(k) {
    return $r.isTouch ? F() !== k.type.indexOf("touch") >= 0 : !1;
  }
  function nt() {
    Dt();
    var k = v.props, rt = k.popperOptions, vt = k.placement, kt = k.offset, Nt = k.getReferenceClientRect, _e = k.moveTransition, Ie = ht() ? Dc(L).arrow : null, fn = Nt ? {
      getBoundingClientRect: Nt,
      contextElement: Nt.contextElement || M()
    } : t, pr = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(it) {
        var At = it.state;
        if (ht()) {
          var qt = lt(), Re = qt.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Se) {
            Se === "placement" ? Re.setAttribute("data-placement", At.placement) : At.attributes.popper["data-popper-" + Se] ? Re.setAttribute("data-" + Se, "") : Re.removeAttribute("data-" + Se);
          }), At.attributes.popper = {};
        }
      }
    }, Xe = [{
      name: "offset",
      options: {
        offset: kt
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !_e
      }
    }, pr];
    ht() && Ie && Xe.push({
      name: "arrow",
      options: {
        element: Ie,
        padding: 3
      }
    }), Xe.push.apply(Xe, (rt == null ? void 0 : rt.modifiers) || []), v.popperInstance = Rx(fn, L, Object.assign({}, rt, {
      placement: vt,
      onFirstUpdate: R,
      modifiers: Xe
    }));
  }
  function Dt() {
    v.popperInstance && (v.popperInstance.destroy(), v.popperInstance = null);
  }
  function ee() {
    var k = v.props.appendTo, rt, vt = M();
    v.props.interactive && k === s0 || k === "parent" ? rt = vt.parentNode : rt = o0(k, [vt]), rt.contains(L) || rt.appendChild(L), v.state.isMounted = !0, nt();
  }
  function oe() {
    return Xl(L.querySelectorAll("[data-tippy-root]"));
  }
  function we(k) {
    v.clearDelayTimeouts(), k && ct("onTrigger", [v, k]), q();
    var rt = V(!0), vt = tt(), kt = vt[0], Nt = vt[1];
    $r.isTouch && kt === "hold" && Nt && (rt = Nt), rt ? i = setTimeout(function() {
      v.show();
    }, rt) : v.show();
  }
  function Ne(k) {
    if (v.clearDelayTimeouts(), ct("onUntrigger", [v, k]), !v.state.isVisible) {
      T();
      return;
    }
    if (!(v.props.trigger.indexOf("mouseenter") >= 0 && v.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(k.type) >= 0 && l)) {
      var rt = V(!1);
      rt ? o = setTimeout(function() {
        v.state.isVisible && v.hide();
      }, rt) : a = requestAnimationFrame(function() {
        v.hide();
      });
    }
  }
  function Qe() {
    v.state.isEnabled = !0;
  }
  function ln() {
    v.hide(), v.state.isEnabled = !1;
  }
  function un() {
    clearTimeout(i), clearTimeout(o), cancelAnimationFrame(a);
  }
  function nn(k) {
    if (!v.state.isDestroyed) {
      ct("onBeforeUpdate", [v, k]), ue();
      var rt = v.props, vt = fg(t, Object.assign({}, rt, og(k), {
        ignoreAttributes: !0
      }));
      v.props = vt, xt(), rt.interactiveDebounce !== vt.interactiveDebounce && (at(), P = ig(Wt, vt.interactiveDebounce)), rt.triggerTarget && !vt.triggerTarget ? os(rt.triggerTarget).forEach(function(kt) {
        kt.removeAttribute("aria-expanded");
      }) : vt.triggerTarget && t.removeAttribute("aria-expanded"), mt(), $(), B && B(rt, vt), v.popperInstance && (nt(), oe().forEach(function(kt) {
        requestAnimationFrame(kt._tippy.popperInstance.forceUpdate);
      })), ct("onAfterUpdate", [v, k]);
    }
  }
  function sn(k) {
    v.setProps({
      content: k
    });
  }
  function Jr() {
    var k = v.state.isVisible, rt = v.state.isDestroyed, vt = !v.state.isEnabled, kt = $r.isTouch && !v.props.touch, Nt = jf(v.props.duration, 0, Ir.duration);
    if (!(k || rt || vt || kt) && !M().hasAttribute("disabled") && (ct("onShow", [v], !1), v.props.onShow(v) !== !1)) {
      if (v.state.isVisible = !0, ht() && (L.style.visibility = "visible"), $(), q(), v.state.isMounted || (L.style.transition = "none"), ht()) {
        var _e = lt(), Ie = _e.box, fn = _e.content;
        qf([Ie, fn], 0);
      }
      R = function() {
        var Xe;
        if (!(!v.state.isVisible || g)) {
          if (g = !0, L.offsetHeight, L.style.transition = v.props.moveTransition, ht() && v.props.animation) {
            var X = lt(), it = X.box, At = X.content;
            qf([it, At], Nt), ag([it, At], "visible");
          }
          yt(), mt(), sg(Qf, v), (Xe = v.popperInstance) == null || Xe.forceUpdate(), ct("onMount", [v]), v.props.animation && ht() && bt(Nt, function() {
            v.state.isShown = !0, ct("onShown", [v]);
          });
        }
      }, ee();
    }
  }
  function Qr() {
    var k = !v.state.isVisible, rt = v.state.isDestroyed, vt = !v.state.isEnabled, kt = jf(v.props.duration, 1, Ir.duration);
    if (!(k || rt || vt) && (ct("onHide", [v], !1), v.props.onHide(v) !== !1)) {
      if (v.state.isVisible = !1, v.state.isShown = !1, g = !1, l = !1, ht() && (L.style.visibility = "hidden"), at(), T(), $(!0), ht()) {
        var Nt = lt(), _e = Nt.box, Ie = Nt.content;
        v.props.animation && (qf([_e, Ie], kt), ag([_e, Ie], "hidden"));
      }
      yt(), mt(), v.props.animation ? ht() && Et(kt, v.unmount) : v.unmount();
    }
  }
  function Zr(k) {
    Y().addEventListener("mousemove", P), sg(gl, P), P(k);
  }
  function ti() {
    v.state.isVisible && v.hide(), v.state.isMounted && (Dt(), oe().forEach(function(k) {
      k._tippy.unmount();
    }), L.parentNode && L.parentNode.removeChild(L), Qf = Qf.filter(function(k) {
      return k !== v;
    }), v.state.isMounted = !1, ct("onHidden", [v]));
  }
  function ei() {
    v.state.isDestroyed || (v.clearDelayTimeouts(), v.unmount(), ue(), delete t._tippy, v.state.isDestroyed = !0, ct("onDestroy", [v]));
  }
}
function uo(t, e) {
  e === void 0 && (e = {});
  var n = Ir.plugins.concat(e.plugins || []);
  Hx();
  var i = Object.assign({}, e, {
    plugins: n
  }), o = Px(t), a = o.reduce(function(l, f) {
    var c = f && qx(f, i);
    return c && l.push(c), l;
  }, []);
  return hu(t) ? a[0] : a;
}
uo.defaultProps = Ir;
uo.setDefaultProps = zx;
uo.currentInput = $r;
var Jx = Object.assign({}, Km, {
  effect: function(e) {
    var n = e.state, i = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(n.elements.popper.style, i.popper), n.styles = i, n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow);
  }
}), Qx = function(e, n) {
  var i;
  n === void 0 && (n = {});
  var o = e, a = [], l = [], f, c = n.overrides, g = [], p = !1;
  function _() {
    l = o.map(function(v) {
      return os(v.props.triggerTarget || v.reference);
    }).reduce(function(v, G) {
      return v.concat(G);
    }, []);
  }
  function R() {
    a = o.map(function(v) {
      return v.reference;
    });
  }
  function x(v) {
    o.forEach(function(G) {
      v ? G.enable() : G.disable();
    });
  }
  function P(v) {
    return o.map(function(G) {
      var L = G.setProps;
      return G.setProps = function(B) {
        L(B), G.reference === f && v.setProps(B);
      }, function() {
        G.setProps = L;
      };
    });
  }
  function O(v, G) {
    var L = l.indexOf(G);
    if (G !== f) {
      f = G;
      var B = (c || []).concat("content").reduce(function(U, y) {
        return U[y] = o[L].props[y], U;
      }, {});
      v.setProps(Object.assign({}, B, {
        getReferenceClientRect: typeof B.getReferenceClientRect == "function" ? B.getReferenceClientRect : function() {
          var U;
          return (U = a[L]) == null ? void 0 : U.getBoundingClientRect();
        }
      }));
    }
  }
  x(!1), R(), _();
  var W = {
    fn: function() {
      return {
        onDestroy: function() {
          x(!0);
        },
        onHidden: function() {
          f = null;
        },
        onClickOutside: function(L) {
          L.props.showOnCreate && !p && (p = !0, f = null);
        },
        onShow: function(L) {
          L.props.showOnCreate && !p && (p = !0, O(L, a[0]));
        },
        onTrigger: function(L, B) {
          O(L, B.currentTarget);
        }
      };
    }
  }, b = uo(Xs(), Object.assign({}, Lx(n, ["overrides"]), {
    plugins: [W].concat(n.plugins || []),
    triggerTarget: l,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((i = n.popperOptions) == null ? void 0 : i.modifiers) || [], [Jx])
    })
  })), w = b.show;
  b.show = function(v) {
    if (w(), !f && v == null)
      return O(b, a[0]);
    if (!(f && v == null)) {
      if (typeof v == "number")
        return a[v] && O(b, a[v]);
      if (o.indexOf(v) >= 0) {
        var G = v.reference;
        return O(b, G);
      }
      if (a.indexOf(v) >= 0)
        return O(b, v);
    }
  }, b.showNext = function() {
    var v = a[0];
    if (!f)
      return b.show(0);
    var G = a.indexOf(f);
    b.show(a[G + 1] || v);
  }, b.showPrevious = function() {
    var v = a[a.length - 1];
    if (!f)
      return b.show(v);
    var G = a.indexOf(f), L = a[G - 1] || v;
    b.show(L);
  };
  var Z = b.setProps;
  return b.setProps = function(v) {
    c = v.overrides || c, Z(v);
  }, b.setInstances = function(v) {
    x(!0), g.forEach(function(G) {
      return G();
    }), o = v, x(!1), R(), _(), g = P(b), b.setProps({
      triggerTarget: l
    });
  }, g = P(b), b;
};
uo.setDefaultProps({
  render: u0
});
const Zx = { class: "diagram" }, t2 = { class: "flex-shrink-0" }, e2 = { class: "text-center my-1" }, n2 = { class: "btn-group btn-group-xs" }, r2 = {
  key: 0,
  class: "text-center my-1"
}, i2 = { class: "btn-group btn-group-xs" }, s2 = ["disabled"], o2 = ["disabled"], a2 = ["disabled"], l2 = { class: "legend text-center" }, u2 = {
  key: 0,
  class: "list-unstyled list-inline mb-0"
}, f2 = {
  key: 0,
  class: "list-inline-item"
}, c2 = {
  key: 1,
  class: "list-inline-item"
}, d2 = { key: 0 }, p2 = { key: 0 }, h2 = ["colspan"], E2 = { class: "tree-lines" }, g2 = ["onClick"], v2 = {
  key: 1,
  class: "p-2 text-center text-secondary"
}, m2 = /* @__PURE__ */ $e({
  __name: "Diagram",
  setup(t) {
    const n = new ao().getHelpMessage, i = Ce(Lr), o = jt(null), a = Ce(ps);
    if (!a)
      throw new Error(`Could not resolve ${ps.description}`);
    const l = Ce(ru), f = [[]];
    let c = [], g;
    const p = Kn({
      metric: Oe.time,
      buffersMetric: ie.shared
    });
    Ts(() => {
      const b = localStorage.getItem("diagramViewOptions");
      b && K.assignIn(p, JSON.parse(b)), x(f[0], 0, i.value.content.Plan, !0, []), K.each(i.value.ctes, (Z) => {
        const v = [];
        x(v, 0, Z, !0, []), f.push(v);
      });
      const w = K.keys(i.value.planStats.maxBlocks);
      K.indexOf(w, p.buffersMetric) === -1 && (p.buffersMetric = K.min(w));
    }), _s(() => {
      R();
    }), Ln(p, _);
    function _() {
      localStorage.setItem("diagramViewOptions", JSON.stringify(p)), Ko(R);
    }
    function R() {
      g && g.destroy(), K.each(c, (b) => {
        b.destroy();
      }), c = uo(".diagram tr.node"), g = Qx(c, {
        delay: 100,
        allowHTML: !0
      });
    }
    function x(b, w, Z, v, G) {
      b.push([w, Z, v, K.concat([], G)]), v || G.push(w), K.each(Z.Plans, (L) => {
        x(
          b,
          w + 1,
          L,
          L === K.last(Z.Plans),
          G
        );
      }), v || G.pop();
    }
    const P = St(() => p.metric === Oe.buffers ? !!p.buffersMetric : !0);
    function O(b) {
      return K.startsWith(b[h.SUBPLAN_NAME], "CTE");
    }
    function W(b) {
      o.value && LC(o.value, b);
    }
    return Sr("scrollTo", W), (b, w) => {
      var Z, v, G;
      return N(), D("div", Zx, [
        S("div", t2, [
          S("div", e2, [
            S("div", n2, [
              S("button", {
                class: It(["btn btn-outline-secondary", { active: p.metric === d(Oe).time }]),
                onClick: w[0] || (w[0] = (L) => p.metric = d(Oe).time)
              }, `
            time
          `, 2),
              w[9] || (w[9] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", { active: p.metric === d(Oe).rows }]),
                onClick: w[1] || (w[1] = (L) => p.metric = d(Oe).rows)
              }, `
            rows
          `, 2),
              w[10] || (w[10] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", { active: p.metric === d(Oe).estimate_factor }]),
                onClick: w[2] || (w[2] = (L) => p.metric = d(Oe).estimate_factor)
              }, `
            estimation
          `, 2),
              w[11] || (w[11] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", { active: p.metric === d(Oe).cost }]),
                onClick: w[3] || (w[3] = (L) => p.metric = d(Oe).cost)
              }, `
            cost
          `, 2),
              w[12] || (w[12] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", { active: p.metric === d(Oe).buffers }]),
                onClick: w[4] || (w[4] = (L) => p.metric = d(Oe).buffers)
              }, `
            buffers
          `, 2),
              w[13] || (w[13] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", { active: p.metric === d(Oe).io }]),
                onClick: w[5] || (w[5] = (L) => p.metric = d(Oe).io)
              }, `
            IO
          `, 2)
            ])
          ]),
          w[25] || (w[25] = m()),
          p.metric == d(Oe).buffers ? (N(), D("div", r2, [
            S("div", i2, [
              S("button", {
                class: It(["btn btn-outline-secondary", {
                  active: p.buffersMetric === d(ie).shared
                }]),
                onClick: w[6] || (w[6] = (L) => p.buffersMetric = d(ie).shared),
                disabled: !((Z = d(i).planStats.maxBlocks) != null && Z[d(ie).shared])
              }, `
            shared
          `, 10, s2),
              w[14] || (w[14] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", {
                  active: p.buffersMetric === d(ie).temp
                }]),
                onClick: w[7] || (w[7] = (L) => p.buffersMetric = d(ie).temp),
                disabled: !((v = d(i).planStats.maxBlocks) != null && v[d(ie).temp])
              }, `
            temp
          `, 10, o2),
              w[15] || (w[15] = m()),
              S("button", {
                class: It(["btn btn-outline-secondary", {
                  active: p.buffersMetric === d(ie).local
                }]),
                onClick: w[8] || (w[8] = (L) => p.buffersMetric = d(ie).local),
                disabled: !((G = d(i).planStats.maxBlocks) != null && G[d(ie).local])
              }, `
            local
          `, 10, a2)
            ])
          ])) : Q("", !0),
          w[26] || (w[26] = m()),
          S("div", l2, [
            p.metric == d(Oe).buffers ? (N(), D("ul", u2, [
              p.buffersMetric != d(ie).temp ? (N(), D("li", f2, w[16] || (w[16] = [
                S("span", { class: "bg-hit rounded" }, null, -1),
                m(`
            Hit
          `)
              ]))) : Q("", !0),
              w[18] || (w[18] = m()),
              w[19] || (w[19] = S("li", { class: "list-inline-item" }, [
                S("span", { class: "bg-read" }),
                m(`
            Read
          `)
              ], -1)),
              w[20] || (w[20] = m()),
              p.buffersMetric != d(ie).temp ? (N(), D("li", c2, w[17] || (w[17] = [
                S("span", { class: "bg-dirtied" }, null, -1),
                m(`
            Dirtied
          `)
              ]))) : Q("", !0),
              w[21] || (w[21] = m()),
              w[22] || (w[22] = S("li", { class: "list-inline-item" }, [
                S("span", { class: "bg-written" }),
                m(`
            Written
          `)
              ], -1))
            ])) : Q("", !0),
            w[24] || (w[24] = m()),
            p.metric == d(Oe).io ? (N(), D(Ht, { key: 1 }, [
              w[23] || (w[23] = GO(`<ul class="list-unstyled list-inline mb-0 d-inline-block"><li class="list-inline-item"><span class="bg-read"></span>
              Read
            </li> <li class="list-inline-item"><span class="bg-written"></span>
              Write
            </li></ul> `, 2)),
              ve(Rt(d(se), {
                icon: d(wi),
                class: "cursor-help d-inline-block text-secondary"
              }, null, 8, ["icon"]), [
                [d(me), {
                  content: d(n)("hint track_io_timing"),
                  allowHTML: !0
                }]
              ])
            ], 64)) : Q("", !0)
          ])
        ]),
        w[34] || (w[34] = m()),
        S("div", {
          class: "overflow-auto flex-grow-1",
          ref_key: "container",
          ref: o
        }, [
          P.value ? (N(), D("table", {
            key: 0,
            class: It(["m-1", { highlight: !!d(l) }])
          }, [
            (N(), D(Ht, null, Pe(f, (L, B) => S("tbody", { key: B }, [
              B === 0 && f.length > 1 ? (N(), D("tr", d2, w[27] || (w[27] = [
                S("th", {
                  colspan: "3",
                  class: "subplan"
                }, "Main Query Plan", -1)
              ]))) : Q("", !0),
              w[32] || (w[32] = m()),
              (N(!0), D(Ht, null, Pe(L, (U, y) => (N(), D(Ht, { key: y }, [
                U[1][d(h).SUBPLAN_NAME] ? (N(), D("tr", p2, [
                  w[29] || (w[29] = S("td", null, null, -1)),
                  w[30] || (w[30] = m()),
                  S("td", {
                    class: It(["subplan pe-2", { "fw-bold": O(U[1]) }]),
                    colspan: O(U[1]) ? 3 : 2
                  }, [
                    S("span", E2, [
                      (N(!0), D(Ht, null, Pe(d(K).range(U[0]), (tt) => (N(), D(Ht, null, [
                        d(K).indexOf(U[3], tt) != -1 ? (N(), D(Ht, { key: 0 }, [
                          m("│")
                        ], 64)) : tt !== 0 ? (N(), D(Ht, { key: 1 }, [
                          m(" ")
                        ], 64)) : Q("", !0)
                      ], 64))), 256)),
                      y !== 0 ? (N(), D(Ht, { key: 0 }, [
                        m(st(U[2] ? "└" : "├"), 1)
                      ], 64)) : Q("", !0)
                    ]),
                    w[28] || (w[28] = m()),
                    S("a", {
                      class: "fst-italic text-reset",
                      href: "",
                      onClick: Be((tt) => d(a)(U[1].nodeId, !0), ["prevent"])
                    }, st(U[1][d(h).SUBPLAN_NAME]), 9, g2)
                  ], 10, h2)
                ])) : Q("", !0),
                w[31] || (w[31] = m()),
                Rt(TN, {
                  node: U[1],
                  isSubplan: !!U[1][d(h).SUBPLAN_NAME],
                  isLastChild: !!U[2],
                  level: U[0],
                  branches: U[3],
                  index: y,
                  viewOptions: p
                }, null, 8, ["node", "isSubplan", "isLastChild", "level", "branches", "index", "viewOptions"])
              ], 64))), 128))
            ])), 64))
          ], 2)) : (N(), D("div", v2, w[33] || (w[33] = [
            S("em", null, " No data available ", -1)
          ])))
        ], 512)
      ]);
    };
  }
}), _2 = { class: "grid-progress progress rounded-0 bg-transparent" }, vn = /* @__PURE__ */ $e({
  __name: "GridProgressBar",
  props: {
    percentage: {},
    percentage2: {}
  },
  setup(t) {
    return (e, n) => (N(), D("div", _2, [
      S("div", {
        class: It(["bg-secondary border-secondary opacity-50", {
          "border-start": e.percentage > 0
        }]),
        style: Ke({
          width: e.percentage + "%"
        })
      }, null, 6),
      n[0] || (n[0] = m()),
      e.percentage2 ? (N(), D("div", {
        key: 0,
        class: It(["bg-secondary border-secondary opacity-20", {
          "border-start": e.percentage2 > 0
        }]),
        style: Ke({
          width: e.percentage2 + "%"
        })
      }, null, 6)) : Q("", !0)
    ]));
  }
}), T2 = { class: "px-1" }, A2 = {
  key: 0,
  class: "text-warning"
}, S2 = { class: "px-1" }, y2 = {
  key: 0,
  class: "text-warning"
}, O2 = { class: "card-header" }, R2 = { class: "list-group list-group-flush" }, b2 = {
  key: 0,
  class: "list-group-item d-flex flex-row"
}, I2 = { class: "col-6" }, L2 = ["innerHTML"], f0 = /* @__PURE__ */ $e({
  __name: "WorkersDetail",
  props: {
    node: {}
  },
  setup(t) {
    const n = Kn(t.node), i = Ce(Lr), o = Ce(As), l = new ao().getHelpMessage, { workersLaunchedCount: f, workersPlannedCount: c } = lo(
      i,
      n,
      o
    );
    return (g, p) => (N(), D(Ht, null, [
      S("div", null, [
        p[1] || (p[1] = S("b", null, "Workers planned: ", -1)),
        p[2] || (p[2] = m()),
        S("span", T2, st(d(c)), 1),
        p[3] || (p[3] = m()),
        !n[d(h).WORKERS_PLANNED] && !n[d(h).WORKERS] && (!d(i).isVerbose || !d(i).isAnalyze) ? (N(), D("em", A2, [
          ve(Rt(d(se), {
            icon: d(XE),
            class: "cursor-help"
          }, null, 8, ["icon"]), [
            [d(me), d(l)("fuzzy needs verbose")]
          ])
        ])) : Q("", !0)
      ]),
      p[9] || (p[9] = m()),
      S("div", null, [
        p[4] || (p[4] = S("b", null, "Workers launched: ", -1)),
        p[5] || (p[5] = m()),
        S("span", S2, st(d(f)), 1),
        p[6] || (p[6] = m()),
        !n[d(h).WORKERS_LAUNCHED] && !n[d(h).WORKERS] && (!d(i).isVerbose || !d(i).isAnalyze) ? (N(), D("em", y2, [
          ve(Rt(d(se), {
            icon: d(XE),
            class: "cursor-help"
          }, null, 8, ["icon"]), [
            [d(me), d(l)("fuzzy needs verbose")]
          ])
        ])) : Q("", !0)
      ]),
      p[10] || (p[10] = m()),
      d(K).isArray(n[d(h).WORKERS]) ? (N(), D("div", {
        key: 0,
        class: "overflow-auto",
        style: { "max-height": "300px" },
        onWheel: p[0] || (p[0] = Be(() => {
        }, ["stop"]))
      }, [
        (N(!0), D(Ht, null, Pe(n[d(h).WORKERS], (_, R) => (N(), D("div", {
          key: R,
          class: "card mt-2"
        }, [
          S("div", O2, [
            S("b", null, "Worker " + st(_[d(fa).WORKER_NUMBER]), 1)
          ]),
          p[8] || (p[8] = m()),
          S("ul", R2, [
            (N(!0), D(Ht, null, Pe(_, (x, P) => (N(), D(Ht, { key: P }, [
              d(Vm)(P, x) ? (N(), D("li", b2, [
                S("div", I2, st(P), 1),
                p[7] || (p[7] = m()),
                S("div", {
                  class: "col-6",
                  innerHTML: d(Mi)(P, x)
                }, null, 8, L2)
              ])) : Q("", !0)
            ], 64))), 128))
          ])
        ]))), 128))
      ], 32)) : Q("", !0)
    ], 64));
  }
}), C2 = { class: "table table-sm prop-list mb-0" }, N2 = { key: 0 }, x2 = { width: "40%" }, w2 = ["innerHTML"], c0 = /* @__PURE__ */ $e({
  __name: "MiscDetail",
  props: {
    node: {}
  },
  setup(t) {
    const e = jt(), i = Kn(t.node);
    Ts(() => {
      o();
    });
    function o() {
      e.value = K.chain(i).omit(h.PLANS).omit(h.WORKERS).map((a, l) => ({ key: l, value: a })).value();
    }
    return (a, l) => (N(), D(Ht, null, [
      S("table", C2, [
        (N(!0), D(Ht, null, Pe(e.value, (f, c) => (N(), D(Ht, { key: c }, [
          d(Vm)(f.key, f.value) ? (N(), D("tr", N2, [
            S("td", x2, st(f.key), 1),
            l[0] || (l[0] = m()),
            S("td", {
              innerHTML: d(Mi)(f.key, f.value)
            }, null, 8, w2)
          ])) : Q("", !0)
        ], 64))), 128))
      ]),
      l[1] || (l[1] = m()),
      l[2] || (l[2] = S("div", { class: "text-secondary text-end" }, [
        S("em", null, "* Calculated value")
      ], -1))
    ], 64));
  }
}), M2 = {
  height: "1em",
  width: "1em",
  viewBox: "0 0 20 20",
  class: "me-1",
  style: { "margin-left": "-8px" }
}, Do = /* @__PURE__ */ $e({
  __name: "SeverityBullet",
  props: ["severity"],
  setup(t) {
    return (e, n) => (N(), D("svg", M2, [
      S("circle", {
        r: "7",
        cx: "10",
        cy: "10",
        class: It(t.severity),
        stroke: "white",
        "stroke-width": "1"
      }, null, 2)
    ]));
  }
}), D2 = { class: "node-index text-secondary" }, P2 = ["href"], U2 = { class: "font-weight-normal small" }, k2 = {
  key: 0,
  class: "text-end grid-progress-cell text-nowrap"
}, B2 = { class: "position-relative d-flex" }, $2 = { class: "flex-grow-1" }, H2 = {
  key: 0,
  class: "small text-body-secondary"
}, F2 = {
  key: 1,
  class: "text-end grid-progress-cell text-nowrap"
}, W2 = {
  key: 0,
  class: "small text-body-secondary"
}, V2 = {
  key: 2,
  class: "text-end grid-progress-cell text-nowrap"
}, X2 = {
  key: 0,
  class: "small text-body-secondary"
}, G2 = {
  key: 3,
  class: "text-end grid-progress-cell text-nowrap"
}, z2 = { class: "position-relative" }, Y2 = {
  key: 4,
  class: "text-end grid-progress-cell text-nowrap"
}, K2 = { key: 0 }, j2 = {
  key: 0,
  class: "position-relative d-flex"
}, q2 = { class: "flex-grow-1" }, J2 = ["innerHTML"], Q2 = { key: 0 }, Z2 = { key: 1 }, tw = {
  key: 1,
  class: "small text-body-secondary"
}, ew = {
  key: 5,
  class: "text-end grid-progress-cell text-nowrap"
}, nw = { class: "position-relative d-flex" }, rw = { class: "flex-grow-1" }, iw = {
  key: 6,
  class: "text-end text-nowrap"
}, sw = { key: 0 }, ow = {
  key: 7,
  class: "text-end grid-progress-cell text-nowrap"
}, aw = { class: "position-relative d-flex" }, lw = { class: "flex-grow-1" }, uw = {
  key: 0,
  class: "small text-body-secondary"
}, fw = {
  key: 8,
  class: "text-end grid-progress-cell text-nowrap"
}, cw = { class: "position-relative d-flex" }, dw = { class: "flex-grow-1" }, pw = { class: "d-inline" }, hw = {
  class: "border border-secondary px-1 bg-light",
  style: { "--bs-border-opacity": "0.5" }
}, Ew = { class: "text-body-secondary" }, gw = { key: 0 }, vw = { key: 1 }, mw = ["innerHTML"], _w = ["innerHTML"], Tw = ["innerHTML"], Aw = ["innerHTML"], Sw = ["innerHTML"], yw = {
  key: 7,
  class: "text-reset"
}, Ow = { class: "text-wrap" }, Rw = {
  key: 0,
  class: "node-description mt-1"
}, bw = { class: "node-type" }, Iw = ["innerHTML"], Lw = { class: "nav nav-tabs mt-1" }, Cw = { class: "nav-item" }, Nw = { class: "nav-item" }, xw = { class: "nav-item" }, ww = { class: "tab-content bg-white" }, Mw = ["innerHTML"], Dw = {
  key: 9,
  class: "text-end text-nowrap grid-progress-cell"
}, Pw = { class: "position-relative" }, Uw = {
  key: 0,
  class: "small text-body-secondary"
}, kw = {
  key: 10,
  class: "text-end text-nowrap grid-progress-cell"
}, Bw = { class: "position-relative" }, $w = {
  key: 0,
  class: "small text-body-secondary"
}, Hw = {
  key: 11,
  class: "text-end text-nowrap grid-progress-cell"
}, Fw = { class: "position-relative" }, Ww = {
  key: 0,
  class: "small text-body-secondary"
}, Vw = {
  key: 12,
  class: "text-end text-nowrap grid-progress-cell"
}, Xw = { class: "position-relative" }, Gw = {
  key: 0,
  class: "small text-body-secondary"
}, zw = {
  key: 13,
  class: "text-end text-nowrap grid-progress-cell"
}, Yw = { class: "position-relative" }, Kw = {
  key: 0,
  class: "small text-body-secondary"
}, jw = {
  key: 14,
  class: "text-end text-nowrap grid-progress-cell"
}, qw = { class: "position-relative" }, Jw = {
  key: 0,
  class: "small text-body-secondary"
}, Qw = {
  key: 15,
  class: "text-end text-nowrap grid-progress-cell"
}, Zw = { class: "position-relative" }, tM = {
  key: 0,
  class: "small text-body-secondary"
}, eM = {
  key: 16,
  class: "text-end text-nowrap grid-progress-cell"
}, nM = { class: "position-relative" }, rM = {
  key: 0,
  class: "small text-body-secondary"
}, iM = {
  key: 17,
  class: "text-end text-nowrap grid-progress-cell"
}, sM = { class: "position-relative" }, oM = {
  key: 0,
  class: "small text-body-secondary"
}, aM = {
  key: 18,
  class: "text-end text-nowrap grid-progress-cell"
}, lM = { class: "position-relative" }, uM = {
  key: 0,
  class: "small text-body-secondary"
}, fM = /* @__PURE__ */ $e({
  __name: "GridRow",
  props: {
    node: {},
    level: {},
    isSubplan: { type: Boolean },
    isLastChild: { type: Boolean },
    branches: {},
    index: {},
    columns: {}
  },
  setup(t) {
    const n = new ao().getNodeTypeDescription, o = Kn(t.node), a = Ce(Lr), l = Ce(As), f = jt("misc"), {
      buffersByMetricTooltip: c,
      costClass: g,
      costTooltip: p,
      durationClass: _,
      estimationClass: R,
      estimateFactorPercent: x,
      estimateFactorTooltip: P,
      executionTimePercent: O,
      heapFetchesClass: W,
      heapFetchesTooltip: b,
      ioTooltip: w,
      localDirtiedPercent: Z,
      localHitPercent: v,
      localReadPercent: G,
      localWrittenPercent: L,
      nodeName: B,
      rowsRemoved: U,
      rowsRemovedClass: y,
      rowsRemovedPercent: tt,
      rowsRemovedPercentString: F,
      rowsRemovedProp: ht,
      rowsRemovedTooltip: M,
      rowsTooltip: Y,
      sharedDirtiedPercent: lt,
      sharedHitPercent: V,
      sharedReadPercent: $,
      sharedWrittenPercent: ct,
      tempReadPercent: yt,
      tempWrittenPercent: mt,
      timeTooltip: at,
      tilde: dt
    } = lo(a, o, l), ut = jt(!1);
    function Tt(q) {
      const T = h[q], Et = o[T];
      return Mi(T, Et);
    }
    return (q, T) => {
      var Et, bt, Bt;
      return N(), D("tr", {
        onClick: T[6] || (T[6] = (Ft) => ut.value = !ut.value),
        class: "node"
      }, [
        S("td", D2, [
          S("a", {
            href: `#plan/node/${o.nodeId}`,
            onClick: T[0] || (T[0] = Be(() => {
            }, ["stop"]))
          }, [
            S("span", U2, "#" + st(o.nodeId), 1)
          ], 8, P2)
        ]),
        T[81] || (T[81] = m()),
        q.columns.includes("time") ? (N(), D("td", k2, [
          Rt(vn, {
            percentage: o[d(h).EXCLUSIVE_DURATION] / (d(a).planStats.executionTime || d(a).content.Plan[d(h).ACTUAL_TOTAL_TIME]) * 100,
            percentage2: (o[d(h).ACTUAL_TOTAL_TIME] - o[d(h).EXCLUSIVE_DURATION]) / (d(a).planStats.executionTime || d(a).content.Plan[d(h).ACTUAL_TOTAL_TIME]) * 100
          }, null, 8, ["percentage", "percentage2"]),
          T[10] || (T[10] = m()),
          ve((N(), D("div", B2, [
            d(_) ? (N(), Ue(Do, {
              key: 0,
              severity: d(_)
            }, null, 8, ["severity"])) : Q("", !0),
            T[7] || (T[7] = m()),
            S("span", $2, st(Math.round(o[d(h).EXCLUSIVE_DURATION]).toLocaleString()), 1)
          ])), [
            [d(me), { content: d(at), allowHTML: !0 }]
          ]),
          T[11] || (T[11] = m()),
          ut.value ? (N(), D("div", H2, [
            m(st(d(yn)(o[d(h).EXCLUSIVE_DURATION])) + " ", 1),
            T[8] || (T[8] = S("br", null, null, -1)),
            T[9] || (T[9] = m()),
            d(O) !== 1 / 0 ? (N(), D(Ht, { key: 0 }, [
              m(st(d(O)) + `%
        `, 1)
            ], 64)) : Q("", !0)
          ])) : Q("", !0)
        ])) : Q("", !0),
        T[82] || (T[82] = m()),
        o[d(h).IO_READ_TIME] ? ve((N(), D("td", F2, [
          Rt(vn, {
            percentage: o[d(h).EXCLUSIVE_IO_READ_TIME] / (d(a).content.Plan[d(h).IO_READ_TIME] + d(a).content.Plan[d(h).IO_WRITE_TIME]) * 100
          }, null, 8, ["percentage"]),
          m(" " + st(Math.round(o[d(h).EXCLUSIVE_IO_READ_TIME]).toLocaleString()) + " ", 1),
          ut.value ? (N(), D("div", W2, [
            m(st(d(yn)(o[d(h).EXCLUSIVE_IO_READ_TIME])) + " ", 1),
            T[12] || (T[12] = S("br", null, null, -1)),
            m(" " + st(d(ta)(o[d(h).AVERAGE_IO_READ_SPEED])), 1)
          ])) : Q("", !0)
        ])), [
          [d(me), { content: d(w), allowHTML: !0 }]
        ]) : Q("", !0),
        T[83] || (T[83] = m()),
        o[d(h).IO_WRITE_TIME] ? ve((N(), D("td", V2, [
          Rt(vn, {
            percentage: o[d(h).EXCLUSIVE_IO_WRITE_TIME] / (d(a).content.Plan[d(h).IO_READ_TIME] + d(a).content.Plan[d(h).IO_WRITE_TIME]) * 100
          }, null, 8, ["percentage"]),
          m(" " + st(Math.round(o[d(h).EXCLUSIVE_IO_WRITE_TIME]).toLocaleString()) + " ", 1),
          ut.value ? (N(), D("div", X2, [
            m(st(d(yn)(o[d(h).EXCLUSIVE_IO_WRITE_TIME])) + " ", 1),
            T[13] || (T[13] = S("br", null, null, -1)),
            m(" " + st(d(ta)(o[d(h).AVERAGE_IO_WRITE_SPEED])), 1)
          ])) : Q("", !0)
        ])), [
          [d(me), { content: d(w), allowHTML: !0 }]
        ]) : Q("", !0),
        T[84] || (T[84] = m()),
        q.columns.includes("rows") ? (N(), D("td", G2, [
          Rt(vn, {
            percentage: o[d(h).ACTUAL_ROWS_REVISED] / d(a).planStats.maxRows * 100
          }, null, 8, ["percentage"]),
          T[14] || (T[14] = m()),
          ve((N(), D("div", z2, [
            m(st(d(dt) + ((Et = o[d(h).ACTUAL_ROWS_REVISED]) == null ? void 0 : Et.toLocaleString())), 1)
          ])), [
            [d(me), { content: d(Y), allowHTML: !0 }]
          ])
        ])) : Q("", !0),
        T[85] || (T[85] = m()),
        q.columns.includes("estimation") ? (N(), D("td", Y2, [
          Rt(vn, { percentage: d(x) }, null, 8, ["percentage"]),
          T[21] || (T[21] = m()),
          o[d(h).PLANNER_ESTIMATE_FACTOR] != null ? ve((N(), D("div", K2, [
            o[d(h).PLANNER_ESTIMATE_FACTOR] != 1 ? (N(), D("div", j2, [
              d(R) ? (N(), Ue(Do, {
                key: 0,
                severity: d(R)
              }, null, 8, ["severity"])) : Q("", !0),
              T[17] || (T[17] = m()),
              S("span", q2, [
                S("span", {
                  innerHTML: d(Td)(o[d(h).PLANNER_ESTIMATE_FACTOR] || 0)
                }, null, 8, J2),
                T[15] || (T[15] = m()),
                o[d(h).PLANNER_ESTIMATE_DIRECTION] === d(hn).under ? (N(), D("span", Q2, `
              ▾
            `)) : Q("", !0),
                T[16] || (T[16] = m()),
                o[d(h).PLANNER_ESTIMATE_DIRECTION] === d(hn).over ? (N(), D("span", Z2, `
              ▴
            `)) : Q("", !0)
              ])
            ])) : Q("", !0),
            T[20] || (T[20] = m()),
            ut.value && o[d(h).PLANNER_ESTIMATE_FACTOR] != 1 ? (N(), D("div", tw, [
              T[18] || (T[18] = m(`
          Planned:`)),
              T[19] || (T[19] = S("br", null, null, -1)),
              m(" " + st((bt = o[d(h).PLAN_ROWS_REVISED]) == null ? void 0 : bt.toLocaleString()), 1)
            ])) : Q("", !0)
          ])), [
            [d(me), { content: d(P), allowHTML: !0 }]
          ]) : Q("", !0)
        ])) : Q("", !0),
        T[86] || (T[86] = m()),
        q.columns.includes("cost") ? (N(), D("td", ew, [
          Rt(vn, {
            percentage: Math.round(
              o[d(h).EXCLUSIVE_COST] / d(a).planStats.maxCost * 100
            )
          }, null, 8, ["percentage"]),
          T[23] || (T[23] = m()),
          ve((N(), D("div", nw, [
            d(g) ? (N(), Ue(Do, {
              key: 0,
              severity: d(g)
            }, null, 8, ["severity"])) : Q("", !0),
            T[22] || (T[22] = m()),
            S("span", rw, st(d(_d)(o[d(h).EXCLUSIVE_COST])), 1)
          ])), [
            [d(me), { content: d(p), allowHTML: !0 }]
          ])
        ])) : Q("", !0),
        T[87] || (T[87] = m()),
        q.columns.includes("loops") ? (N(), D("td", iw, [
          o[d(h).ACTUAL_LOOPS] != 1 ? (N(), D("span", sw, st(o[d(h).ACTUAL_LOOPS].toLocaleString()), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[88] || (T[88] = m()),
        q.columns.includes("filter") ? (N(), D("td", ow, [
          d(U) ? (N(), D(Ht, { key: 0 }, [
            Rt(vn, { percentage: d(tt) }, null, 8, ["percentage"]),
            T[25] || (T[25] = m()),
            ve((N(), D("div", aw, [
              d(y) ? (N(), Ue(Do, {
                key: 0,
                severity: d(y)
              }, null, 8, ["severity"])) : Q("", !0),
              T[24] || (T[24] = m()),
              S("span", lw, st(d(F)) + "% ", 1)
            ])), [
              [d(me), { content: d(M), allowHTML: !0 }]
            ]),
            T[26] || (T[26] = m()),
            ut.value ? (N(), D("div", uw, st(d(dt) + Tt(d(ht))), 1)) : Q("", !0)
          ], 64)) : Q("", !0)
        ])) : Q("", !0),
        T[89] || (T[89] = m()),
        q.columns.includes("heapfetches") ? (N(), D("td", fw, [
          ve((N(), D("div", cw, [
            d(W) ? (N(), Ue(Do, {
              key: 0,
              severity: d(W)
            }, null, 8, ["severity"])) : Q("", !0),
            T[27] || (T[27] = m()),
            S("span", dw, st((Bt = o[d(h).HEAP_FETCHES]) == null ? void 0 : Bt.toLocaleString()), 1)
          ])), [
            [d(me), { content: d(b), allowHTML: !0 }]
          ])
        ])) : Q("", !0),
        T[90] || (T[90] = m()),
        S("td", {
          class: It(["node-type", ut.value ? "" : "text-nowrap text-truncate overflow-hidden"]),
          style: { "max-width": "0" }
        }, [
          Rt(md, {
            isSubplan: q.isSubplan,
            isNode: "",
            isLastChild: q.isLastChild,
            level: q.level,
            branches: q.branches,
            index: q.index
          }, null, 8, ["isSubplan", "isLastChild", "level", "branches", "index"]),
          T[57] || (T[57] = m()),
          S("div", pw, [
            S("b", hw, st(d(B)), 1),
            T[49] || (T[49] = m()),
            S("span", Ew, [
              o[d(h).RELATION_NAME] || o[d(h).FUNCTION_NAME] ? (N(), D(Ht, { key: 0 }, [
                T[29] || (T[29] = S("span", { class: "text-secondary" }, "on", -1)),
                T[30] || (T[30] = m()),
                o[d(h).SCHEMA] ? (N(), D("span", gw, st(o[d(h).SCHEMA]) + ".", 1)) : Q("", !0),
                m(st(o[d(h).RELATION_NAME]) + st(o[d(h).FUNCTION_NAME]) + " ", 1),
                o[d(h).ALIAS] ? (N(), D("span", vw, [
                  T[28] || (T[28] = S("span", { class: "text-secondary" }, "as", -1)),
                  m(" " + st(o[d(h).ALIAS]), 1)
                ])) : Q("", !0)
              ], 64)) : o[d(h).ALIAS] ? (N(), D(Ht, { key: 1 }, [
                T[31] || (T[31] = S("span", { class: "text-secondary" }, "on", -1)),
                T[32] || (T[32] = m()),
                S("span", {
                  innerHTML: d(pi)(o[d(h).ALIAS])
                }, null, 8, mw)
              ], 64)) : Q("", !0),
              T[43] || (T[43] = m()),
              o[d(h).GROUP_KEY] ? (N(), D(Ht, { key: 2 }, [
                T[33] || (T[33] = S("span", { class: "text-secondary" }, "by", -1)),
                T[34] || (T[34] = m()),
                S("span", {
                  innerHTML: d(pi)(o[d(h).GROUP_KEY])
                }, null, 8, _w)
              ], 64)) : Q("", !0),
              T[44] || (T[44] = m()),
              o[d(h).SORT_KEY] ? (N(), D(Ht, { key: 3 }, [
                T[35] || (T[35] = S("span", { class: "text-secondary" }, "by", -1)),
                T[36] || (T[36] = m()),
                S("span", {
                  innerHTML: d(Gm)(
                    o[d(h).SORT_KEY],
                    o[d(h).PRESORTED_KEY]
                  )
                }, null, 8, Tw)
              ], 64)) : Q("", !0),
              T[45] || (T[45] = m()),
              o[d(h).JOIN_TYPE] ? (N(), D(Ht, { key: 4 }, [
                m(st(o[d(h).JOIN_TYPE]) + " ", 1),
                T[37] || (T[37] = S("span", { class: "text-secondary" }, "join", -1))
              ], 64)) : Q("", !0),
              T[46] || (T[46] = m()),
              o[d(h).INDEX_NAME] ? (N(), D(Ht, { key: 5 }, [
                T[38] || (T[38] = S("span", { class: "text-secondary" }, "using", -1)),
                T[39] || (T[39] = m()),
                S("span", {
                  innerHTML: d(pi)(o[d(h).INDEX_NAME])
                }, null, 8, Aw)
              ], 64)) : Q("", !0),
              T[47] || (T[47] = m()),
              o[d(h).HASH_CONDITION] ? (N(), D(Ht, { key: 6 }, [
                T[40] || (T[40] = S("span", { class: "text-secondary" }, "on", -1)),
                T[41] || (T[41] = m()),
                S("span", {
                  innerHTML: d(pi)(o[d(h).HASH_CONDITION])
                }, null, 8, Sw)
              ], 64)) : Q("", !0),
              T[48] || (T[48] = m()),
              o[d(h).CTE_NAME] ? (N(), D("span", yw, [
                T[42] || (T[42] = S("span", { class: "text-secondary" }, "CTE", -1)),
                m(" " + st(o[d(h).CTE_NAME]), 1)
              ])) : Q("", !0)
            ])
          ]),
          T[58] || (T[58] = m()),
          T[59] || (T[59] = S("br", null, null, -1)),
          T[60] || (T[60] = m()),
          ut.value ? (N(), D("div", {
            key: 0,
            class: "plan-node position-relative detailed",
            style: { width: "100%" },
            onClick: T[5] || (T[5] = Be(() => {
            }, ["stop"]))
          }, [
            S("div", Ow, [
              d(n)(o[d(h).NODE_TYPE]) ? (N(), D("div", Rw, [
                S("span", bw, st(o[d(h).NODE_TYPE]) + " Node", 1),
                T[50] || (T[50] = m()),
                S("span", {
                  innerHTML: d(n)(o[d(h).NODE_TYPE])
                }, null, 8, Iw)
              ])) : Q("", !0),
              T[55] || (T[55] = m()),
              S("ul", Lw, [
                S("li", Cw, [
                  S("a", {
                    class: It(["nav-link px-2 py-1", { active: f.value === "misc" }]),
                    onClick: T[1] || (T[1] = Be((Ft) => f.value = "misc", ["prevent", "stop"])),
                    href: ""
                  }, "Misc", 2)
                ]),
                T[51] || (T[51] = m()),
                S("li", Nw, [
                  S("a", {
                    class: It(["nav-link px-2 py-1", {
                      active: f.value === "output",
                      disabled: !o[d(h).OUTPUT]
                    }]),
                    onClick: T[2] || (T[2] = Be((Ft) => f.value = "output", ["prevent", "stop"])),
                    href: ""
                  }, "Output", 2)
                ]),
                T[52] || (T[52] = m()),
                S("li", xw, [
                  S("a", {
                    class: It(["nav-link px-2 py-1", {
                      active: f.value === "workers",
                      disabled: !(o[d(h).WORKERS_PLANNED] || o[d(h).WORKERS_PLANNED_BY_GATHER])
                    }]),
                    onClick: T[3] || (T[3] = Be((Ft) => f.value = "workers", ["prevent", "stop"])),
                    href: ""
                  }, "Workers", 2)
                ])
              ]),
              T[56] || (T[56] = m()),
              S("div", ww, [
                S("div", {
                  class: It(["tab-pane p-1 border border-top-0", { "show active": f.value === "misc" }])
                }, [
                  Rt(c0, { node: o }, null, 8, ["node"])
                ], 2),
                T[53] || (T[53] = m()),
                S("div", {
                  class: It(["tab-pane p-1 border border-top-0 overflow-auto font-monospace", { "show active": f.value === "output" }]),
                  innerHTML: Tt("OUTPUT"),
                  style: { "max-height": "200px" },
                  onMousewheel: T[4] || (T[4] = Be(() => {
                  }, ["stop"]))
                }, null, 42, Mw),
                T[54] || (T[54] = m()),
                S("div", {
                  class: It(["tab-pane p-1 border border-top-0 rounded rounded-top-start-0", { "show active": f.value === "workers" }])
                }, [
                  Rt(f0, { node: o }, null, 8, ["node"])
                ], 2)
              ])
            ])
          ])) : Q("", !0)
        ], 2),
        T[91] || (T[91] = m()),
        q.columns.includes("shared.hit") ? (N(), D("td", Dw, [
          Rt(vn, { percentage: d(V) }, null, 8, ["percentage"]),
          T[61] || (T[61] = m()),
          ve((N(), D("div", Pw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_SHARED_HIT_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(d(h).EXCLUSIVE_SHARED_HIT_BLOCKS),
              allowHTML: !0
            }]
          ]),
          T[62] || (T[62] = m()),
          ut.value ? (N(), D("div", Uw, st(d(Tr)(o[d(h).EXCLUSIVE_SHARED_HIT_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[92] || (T[92] = m()),
        q.columns.includes("shared.read") ? (N(), D("td", kw, [
          Rt(vn, { percentage: d($) }, null, 8, ["percentage"]),
          T[63] || (T[63] = m()),
          ve((N(), D("div", Bw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_SHARED_READ_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(
                d(h).EXCLUSIVE_SHARED_READ_BLOCKS
              ),
              allowHTML: !0
            }]
          ]),
          T[64] || (T[64] = m()),
          ut.value ? (N(), D("div", $w, st(d(Tr)(o[d(h).EXCLUSIVE_SHARED_READ_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[93] || (T[93] = m()),
        q.columns.includes("shared.dirtied") ? (N(), D("td", Hw, [
          Rt(vn, { percentage: d(lt) }, null, 8, ["percentage"]),
          T[65] || (T[65] = m()),
          ve((N(), D("div", Fw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_SHARED_DIRTIED_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(
                d(h).EXCLUSIVE_SHARED_DIRTIED_BLOCKS
              ),
              allowHTML: !0
            }]
          ]),
          T[66] || (T[66] = m()),
          ut.value ? (N(), D("div", Ww, st(d(Tr)(o[d(h).EXCLUSIVE_SHARED_DIRTIED_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[94] || (T[94] = m()),
        q.columns.includes("shared.written") ? (N(), D("td", Vw, [
          Rt(vn, { percentage: d(ct) }, null, 8, ["percentage"]),
          T[67] || (T[67] = m()),
          ve((N(), D("div", Xw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_SHARED_WRITTEN_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(
                d(h).EXCLUSIVE_SHARED_WRITTEN_BLOCKS
              ),
              allowHTML: !0
            }]
          ]),
          T[68] || (T[68] = m()),
          ut.value ? (N(), D("div", Gw, st(d(Tr)(o[d(h).EXCLUSIVE_SHARED_WRITTEN_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[95] || (T[95] = m()),
        q.columns.includes("temp.read") ? (N(), D("td", zw, [
          Rt(vn, { percentage: d(yt) }, null, 8, ["percentage"]),
          T[69] || (T[69] = m()),
          ve((N(), D("div", Yw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_TEMP_READ_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(d(h).EXCLUSIVE_TEMP_READ_BLOCKS),
              allowHTML: !0
            }]
          ]),
          T[70] || (T[70] = m()),
          ut.value ? (N(), D("div", Kw, st(d(Tr)(o[d(h).EXCLUSIVE_TEMP_READ_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[96] || (T[96] = m()),
        q.columns.includes("temp.written") ? (N(), D("td", jw, [
          Rt(vn, { percentage: d(mt) }, null, 8, ["percentage"]),
          T[71] || (T[71] = m()),
          ve((N(), D("div", qw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_TEMP_WRITTEN_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(
                d(h).EXCLUSIVE_TEMP_WRITTEN_BLOCKS
              ),
              allowHTML: !0
            }]
          ]),
          T[72] || (T[72] = m()),
          ut.value ? (N(), D("div", Jw, st(d(Tr)(o[d(h).EXCLUSIVE_TEMP_WRITTEN_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[97] || (T[97] = m()),
        q.columns.includes("local.hit") ? (N(), D("td", Qw, [
          Rt(vn, { percentage: d(v) }, null, 8, ["percentage"]),
          T[73] || (T[73] = m()),
          ve((N(), D("div", Zw, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_LOCAL_HIT_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(d(h).EXCLUSIVE_LOCAL_HIT_BLOCKS),
              allowHTML: !0
            }]
          ]),
          T[74] || (T[74] = m()),
          ut.value ? (N(), D("div", tM, st(d(Tr)(o[d(h).EXCLUSIVE_LOCAL_HIT_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[98] || (T[98] = m()),
        q.columns.includes("local.read") ? (N(), D("td", eM, [
          Rt(vn, { percentage: d(G) }, null, 8, ["percentage"]),
          T[75] || (T[75] = m()),
          ve((N(), D("div", nM, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_LOCAL_READ_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(d(h).EXCLUSIVE_LOCAL_READ_BLOCKS),
              allowHTML: !0
            }]
          ]),
          T[76] || (T[76] = m()),
          ut.value ? (N(), D("div", rM, st(d(Tr)(o[d(h).EXCLUSIVE_LOCAL_READ_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[99] || (T[99] = m()),
        q.columns.includes("local.dirtied") ? (N(), D("td", iM, [
          Rt(vn, { percentage: d(Z) }, null, 8, ["percentage"]),
          T[77] || (T[77] = m()),
          ve((N(), D("div", sM, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(
                d(h).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS
              ),
              allowHTML: !0
            }]
          ]),
          T[78] || (T[78] = m()),
          ut.value ? (N(), D("div", oM, st(d(Tr)(o[d(h).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0),
        T[100] || (T[100] = m()),
        q.columns.includes("local.written") ? (N(), D("td", aM, [
          Rt(vn, { percentage: d(L) }, null, 8, ["percentage"]),
          T[79] || (T[79] = m()),
          ve((N(), D("div", lM, [
            m(st(d(Sn)(o[d(h).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS])), 1)
          ])), [
            [d(me), {
              content: d(c)(
                d(h).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS
              ),
              allowHTML: !0
            }]
          ]),
          T[80] || (T[80] = m()),
          ut.value ? (N(), D("div", uM, st(d(Tr)(o[d(h).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS])), 1)) : Q("", !0)
        ])) : Q("", !0)
      ]);
    };
  }
}), cM = { class: "table table-sm table-hover" }, dM = {
  class: "table-secondary sticky-top",
  style: { "z-index": "2" }
}, pM = {
  key: 0,
  class: "table-group"
}, hM = ["colspan"], EM = ["colspan"], gM = ["colspan"], vM = ["colspan"], mM = ["colspan"], _M = {
  key: 0,
  class: "text-center"
}, TM = {
  key: 1,
  class: "text-center"
}, AM = {
  key: 2,
  class: "text-center"
}, SM = {
  key: 3,
  class: "text-center"
}, yM = {
  key: 4,
  class: "text-center"
}, OM = {
  key: 5,
  class: "text-center"
}, RM = {
  key: 6,
  class: "text-center"
}, bM = {
  key: 7,
  class: "text-center"
}, IM = {
  key: 8,
  class: "text-center"
}, LM = {
  key: 9,
  class: "text-center"
}, CM = {
  key: 10,
  class: "text-center"
}, NM = {
  key: 11,
  class: "text-center"
}, xM = {
  key: 12,
  class: "text-center"
}, wM = {
  key: 13,
  class: "text-center"
}, MM = {
  key: 14,
  class: "text-center"
}, DM = {
  key: 15,
  class: "text-center"
}, PM = {
  key: 16,
  class: "text-center"
}, UM = {
  key: 17,
  class: "text-center"
}, kM = {
  key: 18,
  class: "text-center"
}, BM = { key: 0 }, $M = ["colspan"], HM = ["colspan"], FM = { class: "fst-italic text-reset" }, WM = /* @__PURE__ */ $e({
  __name: "Grid",
  setup(t) {
    const e = Ce(Lr), n = [[]];
    Ts(() => {
      i(n[0], 0, e.value.content.Plan, !0, []), K.each(e.value.ctes, (V) => {
        const $ = [];
        i($, 0, V, !0, []), n.push($);
      });
    }), _s(() => {
      localStorage.setItem("gridIsNotNew", "true");
    });
    function i(V, $, ct, yt, mt) {
      V.push([$, ct, yt, K.concat([], mt)]), yt || mt.push($), K.each(ct.Plans, (at) => {
        i(
          V,
          $ + 1,
          at,
          at === K.last(ct.Plans),
          mt
        );
      }), yt || mt.pop();
    }
    function o(V) {
      return K.startsWith(V[h.SUBPLAN_NAME], "CTE");
    }
    const a = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_DURATION] || !1))), l = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.IO_READ_TIME] || !1))), f = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.IO_WRITE_TIME] || !1))), c = St(() => l.value || f.value), g = St(() => K.filter([l.value, f.value], (V) => V).length), p = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.ACTUAL_ROWS_REVISED] || !1))), _ = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.PLANNER_ESTIMATE_FACTOR] || !1))), R = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.ACTUAL_LOOPS] > 1))), x = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_COST] > 1))), P = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.ROWS_REMOVED_BY_FILTER]))), O = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.HEAP_FETCHES]))), W = St(() => K.filter(
      [
        b.value,
        w.value,
        Z.value,
        v.value
      ],
      (V) => V
    ).length), b = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_SHARED_HIT_BLOCKS]))), w = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_SHARED_READ_BLOCKS]))), Z = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_SHARED_DIRTIED_BLOCKS]))), v = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS]))), G = St(() => K.filter([L.value, B.value], (V) => V).length), L = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_TEMP_READ_BLOCKS]))), B = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_TEMP_WRITTEN_BLOCKS]))), U = St(() => K.filter(
      [
        y.value,
        tt.value,
        F.value,
        ht.value
      ],
      (V) => V
    ).length), y = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_LOCAL_HIT_BLOCKS]))), tt = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_LOCAL_READ_BLOCKS]))), F = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS]))), ht = St(() => K.some(n, (V) => K.some(V, ($) => $[1][h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS]))), M = St(() => {
      const V = [];
      return a.value && V.push("time"), p.value && V.push("rows"), _.value && V.push("estimation"), x.value && V.push("cost"), R.value && V.push("loops"), P.value && V.push("filter"), O.value && V.push("heapfetches"), V;
    }), Y = St(() => {
      const V = [];
      return b.value && V.push("shared.hit"), w.value && V.push("shared.read"), Z.value && V.push("shared.dirtied"), v.value && V.push("shared.written"), L.value && V.push("temp.read"), B.value && V.push("temp.written"), y.value && V.push("local.hit"), tt.value && V.push("local.read"), F.value && V.push("local.dirtied"), ht.value && V.push("local.written"), V;
    }), lt = St(() => [].concat(M.value, Y.value));
    return (V, $) => (N(), D("div", null, [
      S("table", cM, [
        S("thead", dM, [
          c.value || Y.value.length > 0 ? (N(), D("tr", pM, [
            $[0] || ($[0] = S("th", { colspan: "2" }, null, -1)),
            $[1] || ($[1] = m()),
            c.value ? (N(), D("th", {
              key: 0,
              class: "text-center",
              colspan: g.value
            }, "io", 8, hM)) : Q("", !0),
            $[2] || ($[2] = m()),
            S("th", {
              colspan: M.value.length
            }, null, 8, EM),
            $[3] || ($[3] = m()),
            W.value > 0 ? (N(), D("th", {
              key: 1,
              class: "text-center",
              colspan: W.value
            }, `
            shared
          `, 8, gM)) : Q("", !0),
            $[4] || ($[4] = m()),
            G.value > 0 ? (N(), D("th", {
              key: 2,
              class: "text-center",
              colspan: G.value
            }, `
            temp
          `, 8, vM)) : Q("", !0),
            $[5] || ($[5] = m()),
            U.value > 0 ? (N(), D("th", {
              key: 3,
              class: "text-center",
              colspan: U.value
            }, `
            local
          `, 8, mM)) : Q("", !0)
          ])) : Q("", !0),
          $[28] || ($[28] = m()),
          S("tr", null, [
            $[6] || ($[6] = S("th", { class: "text-center" }, null, -1)),
            $[7] || ($[7] = m()),
            a.value ? (N(), D("th", _M, "time")) : Q("", !0),
            $[8] || ($[8] = m()),
            l.value ? (N(), D("th", TM, "read")) : Q("", !0),
            $[9] || ($[9] = m()),
            f.value ? (N(), D("th", AM, "write")) : Q("", !0),
            $[10] || ($[10] = m()),
            p.value ? (N(), D("th", SM, "rows")) : Q("", !0),
            $[11] || ($[11] = m()),
            _.value ? (N(), D("th", yM, "estim")) : Q("", !0),
            $[12] || ($[12] = m()),
            x.value ? (N(), D("th", OM, "cost")) : Q("", !0),
            $[13] || ($[13] = m()),
            R.value ? (N(), D("th", RM, "loops")) : Q("", !0),
            $[14] || ($[14] = m()),
            P.value ? (N(), D("th", bM, "filter")) : Q("", !0),
            $[15] || ($[15] = m()),
            O.value ? (N(), D("th", IM, "heap")) : Q("", !0),
            $[16] || ($[16] = m()),
            $[17] || ($[17] = S("th", { style: { width: "100%" } }, null, -1)),
            $[18] || ($[18] = m()),
            b.value ? (N(), D("th", LM, "hit")) : Q("", !0),
            $[19] || ($[19] = m()),
            w.value ? (N(), D("th", CM, "read")) : Q("", !0),
            $[20] || ($[20] = m()),
            Z.value ? (N(), D("th", NM, "dirt")) : Q("", !0),
            $[21] || ($[21] = m()),
            v.value ? (N(), D("th", xM, "writ")) : Q("", !0),
            $[22] || ($[22] = m()),
            L.value ? (N(), D("th", wM, "read")) : Q("", !0),
            $[23] || ($[23] = m()),
            B.value ? (N(), D("th", MM, "writ")) : Q("", !0),
            $[24] || ($[24] = m()),
            y.value ? (N(), D("th", DM, "hit")) : Q("", !0),
            $[25] || ($[25] = m()),
            tt.value ? (N(), D("th", PM, "read")) : Q("", !0),
            $[26] || ($[26] = m()),
            F.value ? (N(), D("th", UM, "dirt")) : Q("", !0),
            $[27] || ($[27] = m()),
            ht.value ? (N(), D("th", kM, "writ")) : Q("", !0)
          ])
        ]),
        $[32] || ($[32] = m()),
        (N(), D(Ht, null, Pe(n, (ct, yt) => S("tbody", { key: yt }, [
          (N(!0), D(Ht, null, Pe(ct, (mt, at) => (N(), D(Ht, { key: at }, [
            mt[1][d(h).SUBPLAN_NAME] ? (N(), D("tr", BM, [
              S("td", {
                class: "bg-light",
                colspan: 1 + M.value.length
              }, null, 8, $M),
              $[30] || ($[30] = m()),
              S("td", {
                class: It(["plan pr-2 bg-light", { "font-weight-bold": o(mt[1]) }]),
                colspan: lt.value.length + Y.value.length
              }, [
                Rt(md, {
                  isSubplan: !!mt[1][d(h).SUBPLAN_NAME],
                  isLastChild: !!mt[2],
                  level: mt[0],
                  branches: mt[3],
                  index: at
                }, null, 8, ["isSubplan", "isLastChild", "level", "branches", "index"]),
                $[29] || ($[29] = m()),
                S("b", FM, st(mt[1][d(h).SUBPLAN_NAME]), 1)
              ], 10, HM)
            ])) : Q("", !0),
            $[31] || ($[31] = m()),
            Rt(fM, {
              node: mt[1],
              isSubplan: !!mt[1][d(h).SUBPLAN_NAME],
              isLastChild: !!mt[2],
              level: mt[0],
              branches: mt[3],
              index: at,
              columns: lt.value
            }, null, 8, ["node", "isSubplan", "isLastChild", "level", "branches", "index", "columns"])
          ], 64))), 128))
        ])), 64))
      ])
    ]));
  }
}), d0 = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, o] of e)
    n[i] = o;
  return n;
}, VM = /* @__PURE__ */ d0(WM, [["__scopeId", "data-v-442d0651"]]), XM = {}, GM = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAC1QAAAtUBwMJvJQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAf5SURBVGiB7Zp7UFT3Fcc/v3vv8kaQgA8CEmtE8ZEYiVETjS+UkUcm09FM0rE2iRPttOOjY60WbLwNQoI6I9HONNo2rbZpxmo7RkBH8Z34qJpEx2cdoxHREZ8gu+yyu9xf/4BddoFdFlzTOu33r7vnd37nnO+9v9c5vxUEGfp4PcwWpb1pSDFTQBqAhPNCig3h9fYN+n7dFkx/IpjGFucsz0WKEuB7PlSqEOQXl+X9GYQMhs+gEPhFdkGaQFkNZAbkVHJAKur84rIlpx7W90MR+FmmHhdqClkmpfwpoLrkIWEhjJs2iuEThgLw1b7THNhyFLvN7tndEEJ+oihiUdG2/OquxtAlArPT15niet15S0IhEO82JmDIS2lkz5pEbEI3rz5198xU/PVzju88iZReo6dGwAcWI7pk7Y55DY+cwJLsggwDZbWAIZ7ypP69yZ09mZS0JL/9r1+6ybb1u7h6rqp100VDioUrt+eVdSaegAksyinor0i1EOR0T3m3uCgyfjCWEZnDECIwc1LCmUPn2f7xXu7fqm0d0m4U54Li0nfPBmKrQ4/6dD3KZjX9XEqWAKEuuaqpjMoazpQfjiM0PCSgwFvD0eDgwN+PcmDLERx2p1eTEOK3Ns2+rGSrXtMlArquK9YTphlIVgA9PdvSXuhP7uzJxPWK7VLgrVF7p46dG/fz9b7TeE8P7iF473J4/99s3vxaY3t92yWwKLtorIJcAwzzlPdIjifnnQxSh/ta5h8Ol89UUra+ghuX2yxKJw3EvJXleZ+3bmhDYHF20bsglwGKSxYRHc6kN8YwOud5FMX/qLOabVRfvY3R6lUqQtAzJYHwqDC//aWUfL3vLNs/3oO5xuLZZEjQV5TnF/gksDiraA5CfuT6rWoK6RnPkjlzHJHdIvw6djnf8cd91NdZ222PiA5n6lsTAprsVouN/ZuPcOizYzgdLaNHwJwPyvPXtyGg5+oRVsNUBXQHSElLYtr8bBKSnujQmQt2m51t6yr86rwyZzIhYYFP+ttVd9lcUkblhesuUU2jIyRp1a5FFvAYJjap5bqCj03oxqyC1zsV/KNCQtITzCp4g5h498YYq5kaslw/3ASkVAa4ngePHtCpt/SoERoewuDRqe7fBmKg61lpUTOiXU9hEaH8tyE8smXyC6T7cyjtaj9GCCoB1aShqL5NKqqCatKC6ZKgWlNVhRFTnuXquSoMQ3Lr2h2gaQNUFEHKoCRUPwS7guC+DiA5NZHk1EQMQ/KPtdsBGPPqCx1ugF3FYz8HuvwFzLX1OBocPtul0XKUqLlVi/DzBUJCTUTGdLzTt4cuEThRcYpv2yYkPrF306EOdfoOTiY945lOx9JpAubaer49V4WiKv4PZhIsD+oBms5RfqaA1WzjytlrDBzxdKe/RKcJOJoT86jYSKbMeNmnnuckzvzReL+TeNdfDvLgbh12m73TBP53JrGUEqvZhtXcVFgzGg0stfVoIVqblNJqseG0txyBm/RUr+MAwP1bNVhqrdQ/sNJgtXPz6m1sVjs9+8SjKIG924AIOB1O9m46zIO7dW6ZucbCjj/tA2DQqFQGjewPwOHSE20yqp0b9wPwZL9ejM5JB+DTFVs5dfCcl97pL84DEBkTwcKPfkxEtP/kBwIcQvdv1XoF3xquEomjwdleOujG9W9uupP3iycu+9Sz1NZz8ctLgYQWGAHPNb3d9ub0UUojAFtNOkYHuk5nuzl8Gzz2k/j/BP7TaCEgFXeNr3VVoaMlzbVJBbL0uXT85Q0Amua9QJpr6z2t3Hc/uR6EYrhrkacPXfAi0b1XLPGJcT6D7zfsqSanIRpPDU5ut2wihKDv4GS0kKbAnhk7yOcBL65nDGnNyzI0HUnOHvlXi4JsidVtYe7UNaERqrkSKXsA9OgTz7R52fQZ+KS7n9PubFOw0jS1zdtsdDbS2Oi9yqiqgqqpXjK7zYHV4n3jpGmq13Gi8sJ1tnxY7k6OgOrwCEcffbNu9yIAsCR7+XSJ+JubXXO9P+vtiXTvEcN3iQf3zOxue58gpRCvrSjL2+KOsXXH5urch3hUok2hJl7MfZ5Jr7/0yMstDruTw9uOs3fTIRqsXjc6DQgxt7gs73eewnYHYV524ZBGKAEmecpj4qPJnDmB5yYMIcCrgE7h/LFLlK7bxb3qNhX1PSosKCrPP9O6wW8YzbeOq4F+nvLkAYm8MnsKyQMSHzpogBuXqyldX8GVM5Vecim5JhSWFpflb/TVt8P3ODt9nal77zs/QfIe4C4oCSF4bsIQst6eSFRsZJcCr6+zsufTLzhSdgLD+7hiEYJVYWbHBx3dKwc8EPIyC3s7NXQBs2h1I/ny90cyfvqLaCbVj4UWNDoNjm7/kopPDmKzeN3rSRBbNM1YWPjZ0muB2OrCJd/76RKjBBjjKY9PjCNz5jiGjknz2//SySuUrt9NdeVt7wbJcUUR898vyzvSmXi6PBUX5yzPFVKslZDiKX96WF9y38mgZ0qCl/6d6/co/8Nuzh9rc0y+IeDXYSMcv9d1vePjbCs81Fqi5+oRNsM0V8JSIMolVzWFkVOHM3zi0OYblzP8c8dXNDq94rNKWIOqFa7Ytth3stEBgvNXg6nFSYrqKJJSzAjEphCyzCnkvFWlv7rysL6Dupr/MqtopKHIEiSjfKicNBSxYGVp3oFg+Qz6dqTrulJ/PORVIeWbCAYBIDknkBu+iUzd6uu6tKv4N+243iwIA9v6AAAAAElFTkSuQmCC",
  alt: "PEV2",
  style: { width: "20px", height: "20px" }
};
function zM(t, e) {
  return N(), D("img", GM);
}
const pg = /* @__PURE__ */ d0(XM, [["render", zM]]), YM = { class: "card-header border-top" }, KM = {
  key: 0,
  class: "node-description"
}, jM = { class: "node-type" }, qM = ["innerHTML"], JM = { class: "nav nav-tabs card-header-tabs" }, QM = { class: "nav-item" }, ZM = { class: "nav-item" }, tD = { class: "nav-item" }, eD = { class: "nav-item" }, nD = { class: "nav-item" }, rD = { class: "card-body tab-content" }, iD = { key: 0 }, sD = ["innerHTML"], oD = { class: "px-1" }, aD = {
  key: 0,
  class: "text-secondary"
}, lD = { key: 1 }, uD = { key: 0 }, fD = { key: 1 }, cD = { key: 2 }, dD = ["innerHTML"], pD = { key: 1 }, hD = { class: "px-1" }, ED = { key: 2 }, gD = ["innerHTML"], vD = { key: 3 }, mD = { class: "text-secondary" }, _D = { key: 4 }, TD = { class: "px-1" }, AD = {
  key: 0,
  class: "mb-2 list-inline"
}, SD = { class: "list-inline-item" }, yD = {
  key: 0,
  class: "ms-2"
}, OD = {
  key: 1,
  class: "ms-2"
}, RD = { class: "table table-sm" }, bD = ["innerHTML"], ID = ["innerHTML"], LD = ["innerHTML"], CD = ["innerHTML"], ND = ["innerHTML"], xD = ["innerHTML"], wD = ["innerHTML"], MD = ["innerHTML"], DD = ["innerHTML"], PD = ["innerHTML"], UD = {
  key: 1,
  class: "mb-2"
}, kD = { class: "more-info" }, BD = { key: 0 }, $D = { class: "more-info" }, HD = ["innerHTML"], FD = /* @__PURE__ */ $e({
  __name: "PlanNodeDetail",
  props: {
    node: {}
  },
  setup(t) {
    const e = Ce(As), n = t, i = Ce("updateSize"), o = Kn(n.node), a = Ce(Lr), l = jt(), f = jt("general"), c = new ao(), g = c.getNodeTypeDescription, p = c.getHelpMessage, {
      costClass: _,
      durationClass: R,
      estimationClass: x,
      executionTimePercent: P,
      filterDetailTooltip: O,
      heapFetchesClass: W,
      plannerRowEstimateDirection: b,
      plannerRowEstimateValue: w,
      rowsRemoved: Z,
      rowsRemovedClass: v,
      rowsRemovedPercentString: G,
      rowsRemovedProp: L,
      tilde: B
    } = lo(a, o, e);
    Ts(() => {
      y();
    });
    const U = St(() => x.value && b.value !== hn.none && w.value);
    function y() {
      l.value = K.chain(o).omit(h.PLANS).omit(h.WORKERS).map((ht, M) => ({ key: M, value: ht })).value();
    }
    const tt = St(() => {
      const ht = [
        "EXCLUSIVE_SHARED_HIT_BLOCKS",
        "EXCLUSIVE_SHARED_READ_BLOCKS",
        "EXCLUSIVE_SHARED_DIRTIED_BLOCKS",
        "EXCLUSIVE_SHARED_WRITTEN_BLOCKS",
        "EXCLUSIVE_TEMP_READ_BLOCKS",
        "EXCLUSIVE_TEMP_WRITTEN_BLOCKS",
        "EXCLUSIVE_LOCAL_HIT_BLOCKS",
        "EXCLUSIVE_LOCAL_READ_BLOCKS",
        "EXCLUSIVE_LOCAL_DIRTIED_BLOCKS",
        "EXCLUSIVE_LOCAL_WRITTEN_BLOCKS",
        "EXCLUSIVE_IO_READ_TIME",
        "EXCLUSIVE_IO_WRITE_TIME"
      ], M = K.map(ht, (lt) => {
        const V = o[h[lt]];
        return K.isNaN(V) ? 0 : V;
      });
      return K.sum(M) > 0;
    });
    function F(ht) {
      const M = h[ht], Y = o[M];
      return Mi(M, Y);
    }
    return Ln(f, () => {
      window.setTimeout(() => i && i(o), 1);
    }), (ht, M) => (N(), D(Ht, null, [
      S("div", YM, [
        d(g)(o[d(h).NODE_TYPE]) ? (N(), D("div", KM, [
          S("span", jM, st(o[d(h).NODE_TYPE]) + " Node", 1),
          M[6] || (M[6] = m()),
          S("span", {
            innerHTML: d(g)(o[d(h).NODE_TYPE])
          }, null, 8, qM)
        ])) : Q("", !0),
        M[11] || (M[11] = m()),
        S("ul", JM, [
          S("li", QM, [
            S("a", {
              class: It(["nav-link", { active: f.value === "general" }]),
              onClick: M[0] || (M[0] = Be((Y) => f.value = "general", ["prevent", "stop"])),
              href: ""
            }, "General", 2)
          ]),
          M[7] || (M[7] = m()),
          S("li", ZM, [
            S("a", {
              class: It(["nav-link text-nowrap", {
                active: f.value === "iobuffer",
                disabled: !tt.value
              }]),
              onClick: M[1] || (M[1] = Be((Y) => f.value = "iobuffer", ["prevent", "stop"])),
              href: ""
            }, "IO & Buffers", 2)
          ]),
          M[8] || (M[8] = m()),
          S("li", tD, [
            S("a", {
              class: It(["nav-link", {
                active: f.value === "output",
                disabled: !o[d(h).OUTPUT]
              }]),
              onClick: M[2] || (M[2] = Be((Y) => f.value = "output", ["prevent", "stop"])),
              href: ""
            }, "Output", 2)
          ]),
          M[9] || (M[9] = m()),
          S("li", eD, [
            S("a", {
              class: It(["nav-link", {
                active: f.value === "workers",
                disabled: !(o[d(h).WORKERS_PLANNED] || o[d(h).WORKERS_PLANNED_BY_GATHER])
              }]),
              onClick: M[3] || (M[3] = Be((Y) => f.value = "workers", ["prevent", "stop"])),
              href: ""
            }, "Workers", 2)
          ]),
          M[10] || (M[10] = m()),
          S("li", nD, [
            S("a", {
              class: It(["nav-link", { active: f.value === "misc" }]),
              onClick: M[4] || (M[4] = Be((Y) => f.value = "misc", ["prevent", "stop"])),
              href: ""
            }, "Misc", 2)
          ])
        ])
      ]),
      M[91] || (M[91] = m()),
      S("div", rD, [
        S("div", {
          class: It(["tab-pane", { "show active": f.value === "general" }])
        }, [
          d(a).isAnalyze ? (N(), D("div", iD, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(km),
              class: "text-secondary"
            }, null, 8, ["icon"]),
            M[14] || (M[14] = m()),
            M[15] || (M[15] = S("b", null, "Timing:", -1)),
            M[16] || (M[16] = m()),
            S("span", {
              class: It(["p-0 px-1 rounded alert", d(R)]),
              innerHTML: F("EXCLUSIVE_DURATION")
            }, null, 10, sD),
            M[17] || (M[17] = m()),
            d(P) !== 1 / 0 ? (N(), D(Ht, { key: 0 }, [
              M[12] || (M[12] = m(`
          |
          `)),
              S("strong", null, st(d(P)), 1),
              M[13] || (M[13] = S("span", { class: "text-secondary" }, "%", -1))
            ], 64)) : Q("", !0)
          ])) : Q("", !0),
          M[44] || (M[44] = m()),
          S("div", null, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(cC),
              class: "text-secondary"
            }, null, 8, ["icon"]),
            M[24] || (M[24] = m()),
            M[25] || (M[25] = S("b", null, "Rows:", -1)),
            M[26] || (M[26] = m()),
            S("span", oD, st(d(B) + F("ACTUAL_ROWS_REVISED")), 1),
            M[27] || (M[27] = m()),
            o[d(h).PLAN_ROWS] ? (N(), D("span", aD, "(Planned: " + st(d(B) + F("PLAN_ROWS_REVISED")) + ")", 1)) : Q("", !0),
            M[28] || (M[28] = m()),
            d(b) !== d(hn).none && U.value ? (N(), D("span", lD, [
              M[21] || (M[21] = m(`
          |
          `)),
              d(b) === d(hn).over ? (N(), D("span", uD, [
                Rt(d(se), { icon: d($m) }, null, 8, ["icon"]),
                M[18] || (M[18] = m(" over"))
              ])) : Q("", !0),
              M[22] || (M[22] = m()),
              d(b) === d(hn).under ? (N(), D("span", fD, [
                Rt(d(se), { icon: d(Bm) }, null, 8, ["icon"]),
                M[19] || (M[19] = m(" under"))
              ])) : Q("", !0),
              M[23] || (M[23] = m(`
          estimated
          `)),
              d(w) != 1 / 0 ? (N(), D("span", cD, [
                M[20] || (M[20] = m(`
            by
            `)),
                S("span", {
                  class: It(["p-0 px-1 alert", d(x)]),
                  innerHTML: F("PLANNER_ESTIMATE_FACTOR")
                }, null, 10, dD)
              ])) : Q("", !0)
            ])) : Q("", !0)
          ]),
          M[45] || (M[45] = m()),
          d(Z) ? (N(), D("div", pD, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(Ic),
              class: "text-secondary"
            }, null, 8, ["icon"]),
            M[30] || (M[30] = m()),
            S("b", null, st(d(h)[d(L)]) + ": ", 1),
            M[31] || (M[31] = m()),
            S("span", null, [
              S("span", hD, st(d(B) + F(d(L))), 1),
              M[29] || (M[29] = m(`|
          `)),
              S("span", {
                class: It(["p-0 px-1 alert", d(v)])
              }, st(d(G)) + "%", 3)
            ]),
            M[32] || (M[32] = m()),
            ve(Rt(d(se), {
              "fixed-width": "",
              icon: d(wi),
              class: "text-muted"
            }, null, 8, ["icon"]), [
              [d(me), { allowHTML: !0, content: d(O) }]
            ])
          ])) : Q("", !0),
          M[46] || (M[46] = m()),
          o[d(h).HEAP_FETCHES] ? (N(), D("div", ED, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(Fm),
              class: "text-secondary"
            }, null, 8, ["icon"]),
            M[33] || (M[33] = m()),
            M[34] || (M[34] = S("b", null, "Heap Fetches:", -1)),
            M[35] || (M[35] = m()),
            S("span", {
              class: It(["p-0 px-1 rounded alert", d(W)]),
              innerHTML: F("HEAP_FETCHES")
            }, null, 10, gD),
            M[36] || (M[36] = m()),
            d(W) ? ve((N(), Ue(d(se), {
              key: 0,
              icon: d(wi),
              "fixed-width": "",
              class: "text-secondary"
            }, null, 8, ["icon"])), [
              [d(me), {
                arrow: !0,
                content: "Visibility map may be out-of-date. Consider using VACUUM or change autovacuum settings."
              }]
            ]) : Q("", !0)
          ])) : Q("", !0),
          M[47] || (M[47] = m()),
          d(K).isUndefined(o[d(h).EXCLUSIVE_COST]) ? Q("", !0) : (N(), D("div", vD, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(Wm),
              class: "text-secondary"
            }, null, 8, ["icon"]),
            M[37] || (M[37] = m()),
            M[38] || (M[38] = S("b", null, "Cost:", -1)),
            M[39] || (M[39] = m()),
            S("span", {
              class: It(["p-0 px-1 me-1 alert", d(_)])
            }, st(F("EXCLUSIVE_COST")), 3),
            M[40] || (M[40] = m()),
            S("span", mD, "(Total: " + st(F("TOTAL_COST")) + ")", 1)
          ])),
          M[48] || (M[48] = m()),
          o[d(h).ACTUAL_LOOPS] > 1 ? (N(), D("div", _D, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(gC),
              class: "text-secondary"
            }, null, 8, ["icon"]),
            M[41] || (M[41] = m()),
            M[42] || (M[42] = S("b", null, "Loops:", -1)),
            M[43] || (M[43] = m()),
            S("span", TD, st(F("ACTUAL_LOOPS")), 1)
          ])) : Q("", !0)
        ], 2),
        M[87] || (M[87] = m()),
        S("div", {
          class: It(["tab-pane", { "show active": f.value === "iobuffer" }])
        }, [
          o[d(h).EXCLUSIVE_IO_READ_TIME] || o[d(h).EXCLUSIVE_IO_WRITE_TIME] ? (N(), D("dl", AD, [
            M[55] || (M[55] = S("dt", { class: "list-inline-item align-top" }, [
              S("b", null, " I/O Timings: ")
            ], -1)),
            M[56] || (M[56] = m()),
            S("dd", SD, [
              o[d(h).EXCLUSIVE_IO_READ_TIME] ? (N(), D("span", yD, [
                M[49] || (M[49] = S("b", null, "Read: ", -1)),
                m(" " + st(F("EXCLUSIVE_IO_READ_TIME")) + " ", 1),
                S("small", null, "~" + st(F("AVERAGE_IO_READ_SPEED")), 1),
                M[50] || (M[50] = m()),
                o[d(h).WORKERS_PLANNED] || o[d(h).WORKERS_PLANNED_BY_GATHER] ? ve((N(), Ue(d(se), {
                  key: 0,
                  icon: d(wi),
                  class: "cursor-help d-inline-block text-secondary"
                }, null, 8, ["icon"])), [
                  [d(me), {
                    content: d(p)("io timings parallel")
                  }]
                ]) : Q("", !0)
              ])) : Q("", !0),
              M[52] || (M[52] = m()),
              M[53] || (M[53] = S("br", null, null, -1)),
              M[54] || (M[54] = m()),
              o[d(h).EXCLUSIVE_IO_WRITE_TIME] ? (N(), D("span", OD, [
                M[51] || (M[51] = S("b", null, "Write: ", -1)),
                m(" " + st(F("EXCLUSIVE_IO_WRITE_TIME")) + " ", 1),
                S("small", null, "~" + st(F("AVERAGE_IO_WRITE_SPEED")), 1)
              ])) : Q("", !0)
            ])
          ])) : Q("", !0),
          M[83] || (M[83] = m()),
          M[84] || (M[84] = S("b", null, " Blocks: ", -1)),
          M[85] || (M[85] = m()),
          S("table", RD, [
            S("tbody", null, [
              M[74] || (M[74] = S("tr", null, [
                S("td"),
                m(),
                S("th", {
                  class: "text-end",
                  width: "25%"
                }, "Hit"),
                m(),
                S("th", {
                  class: "text-end",
                  width: "25%"
                }, "Read"),
                m(),
                S("th", {
                  class: "text-end",
                  width: "25%"
                }, "Dirtied"),
                m(),
                S("th", {
                  class: "text-end",
                  width: "25%"
                }, "Written")
              ], -1)),
              M[75] || (M[75] = m()),
              S("tr", null, [
                M[57] || (M[57] = S("th", null, "Shared", -1)),
                M[58] || (M[58] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_SHARED_HIT_BLOCKS") || "-"
                }, null, 8, bD),
                M[59] || (M[59] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_SHARED_READ_BLOCKS") || "-"
                }, null, 8, ID),
                M[60] || (M[60] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_SHARED_DIRTIED_BLOCKS") || "-"
                }, null, 8, LD),
                M[61] || (M[61] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_SHARED_WRITTEN_BLOCKS") || "-"
                }, null, 8, CD)
              ]),
              M[76] || (M[76] = m()),
              S("tr", null, [
                M[62] || (M[62] = S("th", null, "Temp", -1)),
                M[63] || (M[63] = m()),
                M[64] || (M[64] = S("td", { class: "text-end bg-hatched" }, null, -1)),
                M[65] || (M[65] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_TEMP_READ_BLOCKS") || "-"
                }, null, 8, ND),
                M[66] || (M[66] = m()),
                M[67] || (M[67] = S("td", { class: "text-end bg-hatched" }, null, -1)),
                M[68] || (M[68] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_TEMP_WRITTEN_BLOCKS") || "-"
                }, null, 8, xD)
              ]),
              M[77] || (M[77] = m()),
              S("tr", null, [
                M[69] || (M[69] = S("th", null, "Local", -1)),
                M[70] || (M[70] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_LOCAL_HIT_BLOCKS") || "-"
                }, null, 8, wD),
                M[71] || (M[71] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_LOCAL_READ_BLOCKS") || "-"
                }, null, 8, MD),
                M[72] || (M[72] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_LOCAL_DIRTIED_BLOCKS") || "-"
                }, null, 8, DD),
                M[73] || (M[73] = m()),
                S("td", {
                  class: "text-end",
                  innerHTML: F("EXCLUSIVE_LOCAL_WRITTEN_BLOCKS") || "-"
                }, null, 8, PD)
              ])
            ])
          ]),
          M[86] || (M[86] = m()),
          o[d(h).WAL_RECORDS] || o[d(h).WAL_BYTES] ? (N(), D("div", UD, [
            S("b", null, [
              ve((N(), D("span", kD, M[78] || (M[78] = [
                m("WAL")
              ]))), [
                [d(me), "Write-Ahead Logging"]
              ]),
              M[79] || (M[79] = m(`:
        `))
            ]),
            m(" " + st(F("WAL_RECORDS")) + ` records
        `, 1),
            S("small", null, "(" + st(F("WAL_BYTES")) + ")", 1),
            M[82] || (M[82] = m()),
            o[d(h).WAL_FPI] ? (N(), D("span", BD, [
              M[81] || (M[81] = m(`
          -
          `)),
              ve((N(), D("span", $D, M[80] || (M[80] = [
                m("FPI")
              ]))), [
                [d(me), "WAL Full Page Images"]
              ]),
              m(`:
          ` + st(F("WAL_FPI")), 1)
            ])) : Q("", !0)
          ])) : Q("", !0)
        ], 2),
        M[88] || (M[88] = m()),
        S("div", {
          class: It(["tab-pane overflow-auto font-monospace", { "show active": f.value === "output" }]),
          innerHTML: F("OUTPUT"),
          style: { "max-height": "200px" },
          onMousewheel: M[5] || (M[5] = Be(() => {
          }, ["stop"]))
        }, null, 42, HD),
        M[89] || (M[89] = m()),
        o[d(h).WORKERS_PLANNED] || o[d(h).WORKERS_PLANNED_BY_GATHER] ? (N(), D("div", {
          key: 0,
          class: It(["tab-pane", { "show active": f.value === "workers" }])
        }, [
          Rt(f0, { node: o }, null, 8, ["node"])
        ], 2)) : Q("", !0),
        M[90] || (M[90] = m()),
        S("div", {
          class: It(["tab-pane", { "show active": f.value === "misc" }])
        }, [
          Rt(c0, { node: o }, null, 8, ["node"])
        ], 2)
      ])
    ], 64));
  }
}), WD = {
  key: 5,
  class: "p-0 d-inline-block mb-0 ms-1 text-nowrap"
}, VD = /* @__PURE__ */ $e({
  __name: "NodeBadges",
  props: {
    node: {}
  },
  setup(t) {
    const n = Kn(t.node), i = Ce(Lr), o = Ce(As), {
      rowsRemoved: a,
      costClass: l,
      durationClass: f,
      estimationClass: c,
      rowsRemovedClass: g,
      heapFetchesClass: p,
      filterTooltip: _
    } = lo(i, n, o);
    return (R, x) => (N(), D(Ht, null, [
      d(f) ? ve((N(), D("span", {
        key: 0,
        class: It("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + d(f))
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(km)
        }, null, 8, ["icon"])
      ], 2)), [
        [d(me), "Slow"]
      ]) : Q("", !0),
      x[0] || (x[0] = m()),
      d(l) ? ve((N(), D("span", {
        key: 1,
        class: It("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + d(l))
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(Wm)
        }, null, 8, ["icon"])
      ], 2)), [
        [d(me), "Cost is high"]
      ]) : Q("", !0),
      x[1] || (x[1] = m()),
      d(c) ? ve((N(), D("span", {
        key: 2,
        class: It(
          "p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + d(c)
        )
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(mC)
        }, null, 8, ["icon"])
      ], 2)), [
        [d(me), "Bad estimation for number of rows"]
      ]) : Q("", !0),
      x[2] || (x[2] = m()),
      d(g) ? ve((N(), D("span", {
        key: 3,
        class: It(
          "p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + d(g)
        )
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(Ic)
        }, null, 8, ["icon"])
      ], 2)), [
        [d(me), d(_)]
      ]) : Q("", !0),
      x[3] || (x[3] = m()),
      d(p) ? ve((N(), D("span", {
        key: 4,
        class: It(
          "p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + d(p)
        )
      }, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(Fm)
        }, null, 8, ["icon"])
      ], 2)), [
        [d(me), {
          arrow: !0,
          content: "Heap Fetches number is high"
        }]
      ]) : Q("", !0),
      x[4] || (x[4] = m()),
      d(a) && !d(g) ? ve((N(), D("span", WD, [
        Rt(d(se), {
          "fixed-width": "",
          icon: d(Ic),
          class: "text-secondary"
        }, null, 8, ["icon"])
      ])), [
        [d(me), d(_)]
      ]) : Q("", !0)
    ], 64));
  }
}), XD = {
  key: 0,
  class: "fixed-bottom text-center"
}, GD = { class: "subplan-name fst-italic px-1" }, zD = {
  key: 1,
  class: "workers text-secondary py-0 px-1"
}, YD = { class: "card-body header no-focus-outline" }, KD = { class: "mb-0 d-flex justify-content-between" }, jD = { class: "text-secondary" }, qD = { class: "text-nowrap" }, JD = { key: 0 }, QD = { class: "text-start font-monospace" }, ZD = { key: 0 }, t3 = { key: 1 }, e3 = ["innerHTML"], n3 = ["innerHTML"], r3 = ["innerHTML"], i3 = { key: 4 }, s3 = ["innerHTML"], o3 = ["innerHTML"], a3 = { key: 7 }, l3 = { key: 1 }, u3 = {
  class: "progress node-bar-container",
  style: { height: "5px" }
}, f3 = { class: "node-bar-label" }, c3 = { class: "text-secondary" }, d3 = ["innerHTML"], hg = /* @__PURE__ */ $e({
  __name: "PlanNode",
  props: {
    node: {}
  },
  setup(t) {
    const e = jt(null), n = Ce(Ul);
    if (!n)
      throw new Error(`Could not resolve ${Ul.description}`);
    const i = Ce(ru), o = Ce(ps);
    if (!o)
      throw new Error(`Could not resolve ${ps.description}`);
    const a = Ce(As), l = t, f = jt(!1), c = Kn(l.node), g = Ce(Lr), p = Ce("updateNodeSize"), {
      nodeName: _,
      barWidth: R,
      barColor: x,
      highlightValue: P,
      isNeverExecuted: O,
      workersLaunchedCount: W,
      workersPlannedCount: b,
      workersPlannedCountReversed: w
    } = lo(g, c, a);
    _s(async () => {
      Z(c);
    });
    function Z(G) {
      var B;
      const L = (B = e.value) == null ? void 0 : B.getBoundingClientRect();
      L && (p == null || p(G, [L.width, L.height]));
    }
    Sr("updateSize", Z), Ln(f, () => {
      window.setTimeout(() => Z(c), 1);
    }), Ln(a, () => {
      Ko(() => {
        Z(c);
      });
    }), Ln(n, () => {
      n.value == c.nodeId && (f.value = !0);
    });
    function v() {
      const G = xC(
        g.value,
        c[h.CTE_NAME]
      );
      G && (o == null || o(G.nodeId, !0));
    }
    return (G, L) => (N(), D("div", {
      ref_key: "outerEl",
      ref: e,
      onMousedown: L[4] || (L[4] = Be(() => {
      }, ["stop"]))
    }, [
      S("div", {
        class: It([
          "text-start plan-node",
          {
            detailed: f.value,
            "never-executed": d(O),
            parallel: d(b),
            selected: d(n) == c.nodeId,
            highlight: d(i) == c.nodeId
          }
        ])
      }, [
        c[d(h).SUBPLAN_NAME] ? (N(), D("div", XD, [
          S("b", GD, st(c[d(h).SUBPLAN_NAME]), 1)
        ])) : Q("", !0),
        L[42] || (L[42] = m()),
        d(b) ? (N(), D("div", zD, [
          (N(!0), D(Ht, null, Pe(d(w), (B) => (N(), D("div", {
            key: B,
            style: Ke({
              top: 1 + B * 2 + "px",
              left: 1 + (B + 1) * 3 + "px"
            }),
            class: It({ "border-dashed": B >= d(W) })
          }, st(B), 7))), 128))
        ])) : Q("", !0),
        L[43] || (L[43] = m()),
        S("div", {
          class: "plan-node-body card",
          onMouseenter: L[2] || (L[2] = (B) => i.value = c.nodeId),
          onMouseleave: L[3] || (L[3] = (B) => i.value = void 0)
        }, [
          S("div", YD, [
            S("header", KD, [
              S("h4", {
                class: "text-body overflow-hidden btn btn-light text-start py-0 px-1",
                onClick: L[0] || (L[0] = Be((B) => f.value = !f.value, ["prevent", "stop"]))
              }, [
                S("span", jD, [
                  f.value ? (N(), Ue(d(se), {
                    key: 0,
                    "fixed-width": "",
                    icon: d(Pm)
                  }, null, 8, ["icon"])) : (N(), Ue(d(se), {
                    key: 1,
                    "fixed-width": "",
                    icon: d(vd)
                  }, null, 8, ["icon"]))
                ]),
                m(" " + st(d(_)), 1)
              ]),
              L[6] || (L[6] = m()),
              S("div", qD, [
                Rt(VD, { node: c }, null, 8, ["node"]),
                L[5] || (L[5] = m()),
                S("a", {
                  class: "fw-normal small ms-1",
                  href: "",
                  onClick: L[1] || (L[1] = Be((B) => d(o)(c.nodeId, !0), ["prevent", "stop"]))
                }, `
                #` + st(c.nodeId), 1)
              ])
            ]),
            L[36] || (L[36] = m()),
            /(Motion)$/.test(c[d(h).NODE_TYPE]) && d(a).highlightType !== d(pn).NONE && d(P) !== null ? (N(), D("div", JD, [
              L[7] || (L[7] = S("br", null, null, -1)),
              L[8] || (L[8] = m()),
              Rt(d(se), {
                "fixed-width": "",
                icon: d(Um),
                class: "text-secondary"
              }, null, 8, ["icon"]),
              m(" " + st(c[d(h).SLICE_ID]) + " ", 1),
              L[9] || (L[9] = S("br", null, null, -1)),
              L[10] || (L[10] = m()),
              Rt(d(se), {
                "fixed-width": "",
                icon: d(fC),
                class: "text-secondary"
              }, null, 8, ["icon"]),
              m(" " + st("The Slowest: " + c[d(h).ACTUAL_TOTAL_TIME]) + " ", 1),
              L[11] || (L[11] = S("br", null, null, -1))
            ])) : Q("", !0),
            L[37] || (L[37] = m()),
            L[38] || (L[38] = S("hr", null, null, -1)),
            L[39] || (L[39] = m()),
            S("div", QD, [
              c[d(h).RELATION_NAME] || c[d(h).FUNCTION_NAME] ? (N(), D("div", {
                key: 0,
                class: It({ "line-clamp-2": !f.value })
              }, [
                L[13] || (L[13] = S("span", { class: "text-secondary" }, "on", -1)),
                L[14] || (L[14] = m()),
                c[d(h).SCHEMA] ? (N(), D("span", ZD, st(c[d(h).SCHEMA]) + ".", 1)) : Q("", !0),
                m(st(c[d(h).RELATION_NAME]) + " " + st(c[d(h).FUNCTION_NAME]) + " ", 1),
                c[d(h).ALIAS] ? (N(), D("span", t3, [
                  L[12] || (L[12] = S("span", { class: "text-secondary" }, "as", -1)),
                  m(" " + st(c[d(h).ALIAS]), 1)
                ])) : Q("", !0)
              ], 2)) : c[d(h).ALIAS] ? (N(), D("div", {
                key: 1,
                class: It({ "line-clamp-2": !f.value })
              }, [
                L[15] || (L[15] = S("span", { class: "text-secondary" }, "on", -1)),
                L[16] || (L[16] = m()),
                S("span", {
                  innerHTML: d(pi)(c[d(h).ALIAS])
                }, null, 8, e3)
              ], 2)) : Q("", !0),
              L[28] || (L[28] = m()),
              c[d(h).GROUP_KEY] ? (N(), D("div", {
                key: 2,
                class: It({ "line-clamp-2": !f.value })
              }, [
                L[17] || (L[17] = S("span", { class: "text-secondary" }, "by", -1)),
                L[18] || (L[18] = m()),
                S("span", {
                  innerHTML: d(pi)(c[d(h).GROUP_KEY])
                }, null, 8, n3)
              ], 2)) : Q("", !0),
              L[29] || (L[29] = m()),
              c[d(h).SORT_KEY] ? (N(), D("div", {
                key: 3,
                class: It({ "line-clamp-2": !f.value })
              }, [
                L[19] || (L[19] = S("span", { class: "text-secondary" }, "by", -1)),
                L[20] || (L[20] = m()),
                S("span", {
                  innerHTML: d(Gm)(
                    c[d(h).SORT_KEY],
                    c[d(h).PRESORTED_KEY]
                  )
                }, null, 8, r3)
              ], 2)) : Q("", !0),
              L[30] || (L[30] = m()),
              c[d(h).JOIN_TYPE] ? (N(), D("div", i3, [
                m(st(c[d(h).JOIN_TYPE]) + " ", 1),
                L[21] || (L[21] = S("span", { class: "text-secondary" }, "join", -1))
              ])) : Q("", !0),
              L[31] || (L[31] = m()),
              c[d(h).INDEX_NAME] ? (N(), D("div", {
                key: 5,
                class: It({ "line-clamp-2": !f.value })
              }, [
                L[22] || (L[22] = S("span", { class: "text-secondary" }, "using", -1)),
                L[23] || (L[23] = m()),
                S("span", {
                  innerHTML: d(pi)(c[d(h).INDEX_NAME])
                }, null, 8, s3)
              ], 2)) : Q("", !0),
              L[32] || (L[32] = m()),
              c[d(h).HASH_CONDITION] ? (N(), D("div", {
                key: 6,
                class: It({ "line-clamp-2": !f.value })
              }, [
                L[24] || (L[24] = S("span", { class: "text-secondary" }, "on", -1)),
                L[25] || (L[25] = m()),
                S("span", {
                  innerHTML: d(pi)(c[d(h).HASH_CONDITION])
                }, null, 8, o3)
              ], 2)) : Q("", !0),
              L[33] || (L[33] = m()),
              c[d(h).CTE_NAME] ? (N(), D("div", a3, [
                S("a", {
                  class: "text-reset",
                  href: "",
                  onClick: Be(v, ["prevent", "stop"])
                }, [
                  Rt(d(se), {
                    icon: d(TC),
                    class: "text-secondary"
                  }, null, 8, ["icon"]),
                  L[26] || (L[26] = m()),
                  L[27] || (L[27] = S("span", { class: "text-secondary" }, "CTE", -1)),
                  m(" " + st(c[d(h).CTE_NAME]), 1)
                ])
              ])) : Q("", !0)
            ]),
            L[40] || (L[40] = m()),
            d(a).highlightType !== d(pn).NONE && d(P) !== null ? (N(), D("div", l3, [
              S("div", u3, [
                S("div", {
                  class: "progress-bar",
                  role: "progressbar",
                  style: Ke({
                    width: d(R) + "%",
                    "background-color": d(x)
                  }),
                  "aria-valuenow": "0",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }, null, 4)
              ]),
              L[35] || (L[35] = m()),
              S("span", f3, [
                S("span", c3, st(d(a).highlightType) + ":", 1),
                L[34] || (L[34] = m()),
                S("span", { innerHTML: d(P) }, null, 8, d3)
              ])
            ])) : Q("", !0)
          ]),
          L[41] || (L[41] = m()),
          f.value ? (N(), Ue(FD, {
            key: 0,
            node: c
          }, null, 8, ["node"])) : Q("", !0)
        ], 32)
      ], 2)
    ], 544));
  }
}), p3 = {
  key: 0,
  class: "plan-stats flex-shrink-0 d-flex border-bottom border-top align-items-center"
}, h3 = { class: "d-inline-block px-2" }, E3 = {
  key: 0,
  class: "text-secondary"
}, g3 = ["innerHTML"], v3 = { class: "d-inline-block border-start px-2" }, m3 = {
  key: 0,
  class: "text-secondary"
}, _3 = {
  key: 1,
  class: "stat-value"
}, T3 = ["innerHTML"], A3 = { class: "d-inline-block border-start px-2" }, S3 = {
  key: 0,
  class: "text-secondary"
}, y3 = {
  key: 1,
  class: "stat-value"
}, O3 = ["innerHTML"], R3 = { class: "d-inline-block border-start px-2" }, b3 = {
  key: 0,
  class: "text-secondary"
}, I3 = {
  key: 1,
  class: "stat-value"
}, L3 = ["innerHTML"], C3 = {
  key: 0,
  class: "d-inline-block border-start px-2 position-relative"
}, N3 = { class: "stat-value" }, x3 = ["innerHTML"], w3 = {
  key: 0,
  class: "stat-dropdown-container text-start"
}, M3 = { class: "d-inline-block border-start px-2 position-relative" }, D3 = { class: "stat-value" }, P3 = ["innerHTML"], U3 = {
  key: 0,
  class: "stat-dropdown-container text-start"
}, k3 = { class: "float-end" }, B3 = ["innerHTML"], $3 = {
  key: 0,
  class: "text-secondary"
}, H3 = {
  key: 1,
  class: "my-2"
}, F3 = {
  key: 1,
  class: "text-secondary"
}, W3 = {
  key: 1,
  class: "d-inline-block border-start px-2 position-relative"
}, V3 = { class: "stat-label" }, X3 = { class: "badge bg-secondary" }, G3 = {
  key: 0,
  class: "stat-dropdown-container text-start"
}, z3 = { class: "table table-sm table-striped mb-0" }, Y3 = {
  key: 2,
  class: "d-inline-block border-start px-2 position-relative"
}, K3 = ["innerHTML"], Eg = /* @__PURE__ */ $e({
  __name: "PlanStats",
  setup(t) {
    const n = new ao().getHelpMessage, i = Ce(Lr), o = jt(!1), a = jt(!1), l = jt(!1), f = St(() => i.value && i.value.content.Plan), c = (P) => {
      let O = NaN;
      return P > 90 ? O = 4 : P > 40 ? O = 3 : P > 10 && (O = 2), O ? "c-" + O : !1;
    }, g = St(() => {
      const P = i.value.planStats.executionTime || 0, O = _.value || 0;
      return K.round(O / P * 100);
    });
    function p(P) {
      const O = i.value.planStats.executionTime || 0, W = P.Time;
      return K.round(W / O * 100);
    }
    const _ = St(() => K.sumBy(i.value.planStats.triggers, (P) => P.Time));
    function R(P) {
      const O = P[h.IO_READ_TIME], W = P[h.AVERAGE_IO_READ_SPEED], b = P[h.IO_WRITE_TIME], w = P[h.AVERAGE_IO_WRITE_SPEED], Z = [];
      return O && Z.push(
        `read=${Mi(
          h.IO_READ_TIME,
          O
        )} <small class="text-body-secondary">~${Mi(
          h.AVERAGE_IO_READ_SPEED,
          W
        )}</small>`
      ), b && Z.push(
        `write=${Mi(
          h.IO_WRITE_TIME,
          b
        )} <small class="text-body-secondary">~${Mi(
          h.AVERAGE_IO_WRITE_SPEED,
          w
        )}</small>`
      ), Z.join(", ");
    }
    function x(P) {
      return P.Plans.some(function O(W) {
        return W[h.WORKERS_PLANNED] || W[h.WORKERS_PLANNED_BY_GATHER] ? !0 : Array.isArray(W.Plans) && W.Plans.some(O);
      });
    }
    return (P, O) => d(i) ? (N(), D("div", p3, [
      S("div", h3, [
        O[6] || (O[6] = m(`
      Execution time:
      `)),
        d(i).planStats.executionTime ? (N(), D("span", {
          key: 1,
          class: "stat-value",
          innerHTML: d(yn)(d(i).planStats.executionTime)
        }, null, 8, g3)) : (N(), D("span", E3, [
          O[5] || (O[5] = m(`
          N/A
          `)),
          ve(Rt(d(se), {
            icon: d(wi),
            class: "cursor-help"
          }, null, 8, ["icon"]), [
            [d(me), d(n)("missing execution time")]
          ])
        ]))
      ]),
      O[43] || (O[43] = m()),
      S("div", v3, [
        O[8] || (O[8] = m(`
      Planning time:
      `)),
        d(i).planStats.planningTime ? (N(), D("span", _3, [
          S("span", {
            class: It(
              "mb-0 p-0 px-1 alert " + c(
                d(i).planStats.planningTime / d(i).planStats.executionTime * 100
              )
            ),
            innerHTML: d(yn)(d(i).planStats.planningTime)
          }, null, 10, T3)
        ])) : (N(), D("span", m3, [
          O[7] || (O[7] = m(`
          N/A
          `)),
          ve(Rt(d(se), {
            icon: d(wi),
            class: "cursor-help"
          }, null, 8, ["icon"]), [
            [d(me), d(n)("missing planning time")]
          ])
        ]))
      ]),
      O[44] || (O[44] = m()),
      S("div", A3, [
        O[9] || (O[9] = m(`
      Memory used:
      `)),
        d(i).planStats.memoryUsed ? (N(), D("span", y3, [
          S("span", {
            innerHTML: d(KC)(d(i).planStats.memoryUsed)
          }, null, 8, O3)
        ])) : (N(), D("span", S3, " N/A "))
      ]),
      O[45] || (O[45] = m()),
      S("div", R3, [
        O[10] || (O[10] = m(`
      Optimizer:
      `)),
        d(i).planStats.optimizer ? (N(), D("span", I3, [
          S("span", {
            innerHTML: d(i).planStats.optimizer
          }, null, 8, L3)
        ])) : (N(), D("span", b3, [
          ve(Rt(d(se), {
            icon: d(wi),
            class: "cursor-help"
          }, null, 8, ["icon"]), [
            [d(me), d(n)("missing planning time")]
          ])
        ]))
      ]),
      O[46] || (O[46] = m()),
      d(i).planStats.jitTime && d(i).planStats.executionTime ? (N(), D("div", C3, [
        O[13] || (O[13] = m(`
      JIT:
      `)),
        S("span", N3, [
          S("span", {
            class: It(
              "mb-0 p-0 px-1 alert " + c(
                d(i).planStats.jitTime / d(i).planStats.executionTime * 100
              )
            ),
            innerHTML: d(yn)(d(i).planStats.jitTime)
          }, null, 10, x3),
          O[11] || (O[11] = m()),
          S("button", {
            onClick: O[0] || (O[0] = Be((W) => l.value = !l.value, ["prevent"])),
            class: "bg-transparent border-0 p-0 m-0 ps-1"
          }, [
            Rt(d(se), {
              icon: d(Gf),
              class: "text-secondary"
            }, null, 8, ["icon"])
          ]),
          O[12] || (O[12] = m()),
          l.value ? (N(), D("div", w3, [
            S("div", null, [
              d(i).content.JIT ? (N(), Ue(Xm, {
                key: 0,
                jit: d(i).content.JIT
              }, null, 8, ["jit"])) : Q("", !0)
            ])
          ])) : Q("", !0)
        ])
      ])) : Q("", !0),
      O[47] || (O[47] = m()),
      S("div", M3, [
        O[30] || (O[30] = S("span", { class: "stat-label" }, "Triggers: ", -1)),
        O[31] || (O[31] = m()),
        d(i).planStats.triggers && d(i).planStats.triggers.length ? (N(), D(Ht, { key: 0 }, [
          S("span", D3, [
            S("span", {
              class: It(
                "mb-0 p-0 px-1 alert " + d(Nc)(g.value)
              ),
              innerHTML: d(yn)(_.value)
            }, null, 10, P3)
          ]),
          O[28] || (O[28] = m()),
          S("button", {
            onClick: O[1] || (O[1] = Be((W) => a.value = !a.value, ["prevent"])),
            class: "bg-transparent border-0 p-0 m-0 ps-1"
          }, [
            Rt(d(se), {
              icon: d(Gf),
              class: "text-secondary"
            }, null, 8, ["icon"])
          ]),
          O[29] || (O[29] = m()),
          a.value ? (N(), D("div", U3, [
            S("button", {
              class: "btn btn-xs btn-close float-end",
              onClick: O[2] || (O[2] = (W) => a.value = !1)
            }),
            O[25] || (O[25] = m()),
            O[26] || (O[26] = S("h3", null, "Triggers", -1)),
            O[27] || (O[27] = m()),
            (N(!0), D(Ht, null, Pe(d(i).planStats.triggers, (W, b) => (N(), D("div", { key: b }, [
              m(st(W["Trigger Name"]) + " ", 1),
              O[15] || (O[15] = S("br", null, null, -1)),
              O[16] || (O[16] = m()),
              O[17] || (O[17] = S("span", { class: "text-secondary" }, "Called", -1)),
              m(" " + st(W.Calls), 1),
              O[18] || (O[18] = S("span", { class: "text-secondary" }, "×", -1)),
              O[19] || (O[19] = m()),
              S("span", k3, [
                S("span", {
                  class: It(
                    "p-0 px-1 alert " + d(Nc)(p(W))
                  ),
                  innerHTML: d(yn)(W.Time)
                }, null, 10, B3),
                m(`
              | ` + st(p(W)), 1),
                O[14] || (O[14] = S("span", { class: "text-secondary" }, "%", -1))
              ]),
              O[20] || (O[20] = m()),
              O[21] || (O[21] = S("br", null, null, -1)),
              O[22] || (O[22] = m()),
              W.Relation ? (N(), D("span", $3, "on")) : Q("", !0),
              m(" " + st(W.Relation) + " ", 1),
              O[23] || (O[23] = S("div", { class: "clearfix" }, null, -1)),
              O[24] || (O[24] = m()),
              d(i).planStats.triggers && b != d(i).planStats.triggers.length - 1 ? (N(), D("hr", H3)) : Q("", !0)
            ]))), 128))
          ])) : Q("", !0)
        ], 64)) : (N(), D("span", F3, " N/A "))
      ]),
      O[48] || (O[48] = m()),
      d(i).planStats.settings ? (N(), D("div", W3, [
        S("span", V3, [
          O[32] || (O[32] = m(`Settings:
        `)),
          S("span", X3, st(d(K).keys(d(i).planStats.settings).length), 1)
        ]),
        O[39] || (O[39] = m()),
        S("button", {
          onClick: O[3] || (O[3] = Be((W) => o.value = !o.value, ["prevent"])),
          class: "bg-transparent border-0 p-0 m-0 ps-1"
        }, [
          Rt(d(se), {
            icon: d(Gf),
            class: "text-secondary"
          }, null, 8, ["icon"])
        ]),
        O[40] || (O[40] = m()),
        o.value ? (N(), D("div", G3, [
          S("button", {
            class: "btn btn-xs btn-close float-end",
            onClick: O[4] || (O[4] = (W) => o.value = !1)
          }),
          O[34] || (O[34] = m()),
          O[35] || (O[35] = S("h3", null, "PG Settings", -1)),
          O[36] || (O[36] = m()),
          O[37] || (O[37] = S("em", { class: "text-secondary d-block pb-2" }, `
          Configuration parameters affecting query planning with value different
          from the built-in default value.
        `, -1)),
          O[38] || (O[38] = m()),
          S("table", z3, [
            S("tbody", null, [
              (N(!0), D(Ht, null, Pe(d(i).planStats.settings, (W, b) => (N(), D("tr", { key: b }, [
                S("td", null, st(b), 1),
                O[33] || (O[33] = m()),
                S("td", null, st(W), 1)
              ]))), 128))
            ])
          ])
        ])) : Q("", !0)
      ])) : Q("", !0),
      O[49] || (O[49] = m()),
      f.value && (f.value[d(h).AVERAGE_IO_READ_SPEED] || f.value[d(h).AVERAGE_IO_WRITE_SPEED]) ? (N(), D("div", Y3, [
        O[41] || (O[41] = m(`
      IO: `)),
        S("span", {
          innerHTML: R(f.value)
        }, null, 8, K3),
        O[42] || (O[42] = m()),
        x(f.value) ? ve((N(), Ue(d(se), {
          key: 0,
          icon: d(wi),
          class: "cursor-help d-inline-block text-secondary"
        }, null, 8, ["icon"])), [
          [d(me), {
            content: d(n)("io timings parallel")
          }]
        ]) : Q("", !0)
      ])) : Q("", !0)
    ])) : Q("", !0);
  }
}), j3 = { class: "table" }, vl = /* @__PURE__ */ $e({
  __name: "SortedTable",
  props: {
    values: {},
    sort: {},
    dir: {}
  },
  setup(t) {
    const e = t, n = jt(e.sort), i = jt(e.dir);
    Sr("sort", n), Sr("dir", i), Sr("sortBy", a);
    const o = St(() => K.orderBy(e.values, n.value, i.value));
    function a(l) {
      l === n.value && (i.value = i.value === Vr.asc ? Vr.desc : Vr.asc), n.value = l;
    }
    return (l, f) => (N(), D("table", j3, [
      Hs(l.$slots, "default"),
      f[0] || (f[0] = m()),
      Hs(l.$slots, "head"),
      f[1] || (f[1] = m()),
      Hs(l.$slots, "body", { values: o.value }),
      f[2] || (f[2] = m()),
      Hs(l.$slots, "foot")
    ]));
  }
}), or = /* @__PURE__ */ $e({
  __name: "SortLink",
  props: {
    name: {}
  },
  setup(t) {
    const e = Ce("dir"), n = Ce("sort"), i = Ce("sortBy");
    return (o, a) => (N(), D("a", {
      href: "#",
      onClick: a[0] || (a[0] = Be((l) => d(i) && d(i)(o.name), ["prevent"]))
    }, [
      Hs(o.$slots, "default", {}, () => [
        m(st(o.name), 1)
      ]),
      a[1] || (a[1] = m()),
      d(n) == o.name && d(e) == d(Vr).asc ? (N(), Ue(d(se), {
        key: 0,
        "fixed-width": "",
        icon: d(vC)
      }, null, 8, ["icon"])) : d(n) == o.name && d(e) == d(Vr).desc ? (N(), Ue(d(se), {
        key: 1,
        "fixed-width": "",
        icon: d(pC)
      }, null, 8, ["icon"])) : Q("", !0)
    ]));
  }
}), q3 = { class: "thead-light" }, J3 = { class: "text-end" }, Q3 = { class: "text-end" }, Z3 = { class: "text-end" }, tP = { class: "ps-3" }, eP = ["href"], nP = { class: "text-end" }, rP = { class: "px-1" }, iP = { class: "text-end" }, ml = /* @__PURE__ */ $e({
  __name: "StatsTableItem",
  props: {
    value: {},
    executionTime: {}
  },
  setup(t) {
    const e = t, n = jt(!1);
    function i(o) {
      return o[h.EXCLUSIVE_DURATION] / e.executionTime;
    }
    return (o, a) => (N(), D(Ht, null, [
      S("thead", q3, [
        S("tr", {
          onClick: a[0] || (a[0] = Be((l) => n.value = !n.value, ["prevent"])),
          role: "button"
        }, [
          S("th", null, [
            n.value ? (N(), Ue(d(se), {
              key: 0,
              "fixed-width": "",
              icon: d(vd)
            }, null, 8, ["icon"])) : (N(), Ue(d(se), {
              key: 1,
              "fixed-width": "",
              icon: d(Hm)
            }, null, 8, ["icon"])),
            m(" " + st(e.value.name), 1)
          ]),
          a[1] || (a[1] = m()),
          S("th", J3, st(e.value.count), 1),
          a[2] || (a[2] = m()),
          S("th", Q3, [
            S("span", {
              class: It(["alert p-0 px-1", d(Nc)(e.value.timePercent * 100)])
            }, st(d(yn)(e.value.time)), 3)
          ]),
          a[3] || (a[3] = m()),
          S("th", Z3, st(d(KE)(e.value.timePercent)), 1)
        ])
      ]),
      a[8] || (a[8] = m()),
      S("tbody", {
        class: It(n.value ? "" : "d-none")
      }, [
        (N(!0), D(Ht, null, Pe(d(K).reverse(
          d(K).sortBy(e.value.nodes, d(h).EXCLUSIVE_DURATION)
        ), (l) => (N(), D("tr", {
          key: l.nodeId,
          style: { "font-size": "smaller" }
        }, [
          S("td", tP, [
            S("a", {
              href: `#plan/node/${l.nodeId}`,
              class: "me-1"
            }, "#" + st(l.nodeId), 9, eP),
            m(" " + st(l[d(h).NODE_TYPE]), 1)
          ]),
          a[4] || (a[4] = m()),
          a[5] || (a[5] = S("td", { class: "text-end" }, null, -1)),
          a[6] || (a[6] = m()),
          S("td", nP, [
            S("span", rP, st(d(yn)(l[d(h).EXCLUSIVE_DURATION])), 1)
          ]),
          a[7] || (a[7] = m()),
          S("td", iP, st(d(KE)(i(l))), 1)
        ]))), 128))
      ], 2)
    ], 64));
  }
}), sP = { class: "small stats container-fluid mt-2" }, oP = { class: "row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4" }, aP = { class: "col" }, lP = { class: "card" }, uP = { class: "card-body" }, fP = { class: "table-secondary" }, cP = { scope: "col" }, dP = {
  scope: "col",
  class: "text-end"
}, pP = {
  scope: "col",
  colspan: "2",
  class: "text-end"
}, hP = { key: 0 }, EP = { class: "col" }, gP = { class: "card" }, vP = { class: "card-body" }, mP = { class: "table-secondary" }, _P = { scope: "col" }, TP = {
  scope: "col",
  class: "text-end"
}, AP = {
  scope: "col",
  colspan: "2",
  class: "text-end"
}, SP = { key: 0 }, yP = { class: "col" }, OP = { class: "card" }, RP = { class: "card-body" }, bP = { class: "table-secondary" }, IP = { scope: "col" }, LP = {
  scope: "col",
  class: "text-end"
}, CP = {
  scope: "col",
  colspan: "2",
  class: "text-end"
}, NP = { class: "col" }, xP = { class: "card" }, wP = { class: "card-body" }, MP = { class: "table-secondary" }, DP = { scope: "col" }, PP = {
  scope: "col",
  class: "text-end"
}, UP = {
  scope: "col",
  colspan: "2",
  class: "text-end"
}, kP = { key: 0 }, BP = /* @__PURE__ */ $e({
  __name: "Stats",
  setup(t) {
    const e = [], n = jt(0), i = Ce(Lr);
    Ts(() => {
      var p;
      n.value = i.value.planStats.executionTime || ((p = i.value.content.Plan) == null ? void 0 : p[h.ACTUAL_TOTAL_TIME]), i.value.content.Plan && (o(e, i.value.content.Plan), K.each(i.value.ctes, (_) => {
        o(e, _);
      }));
    });
    function o(p, _) {
      p.push(_), K.each(_.Plans, (R) => {
        o(p, R);
      });
    }
    function a(p) {
      return K.sumBy(p, h.EXCLUSIVE_DURATION) / n.value;
    }
    const l = St(() => {
      const p = K.groupBy(
        K.filter(e, (R) => R[h.RELATION_NAME] !== void 0),
        h.RELATION_NAME
      ), _ = [];
      return K.each(p, (R, x) => {
        _.push({
          name: x,
          count: R.length,
          time: K.sumBy(R, h.EXCLUSIVE_DURATION),
          timePercent: a(R),
          nodes: R
        });
      }), _;
    }), f = St(() => {
      const p = K.groupBy(
        K.filter(e, (R) => R[h.FUNCTION_NAME] !== void 0),
        h.FUNCTION_NAME
      ), _ = [];
      return K.each(p, (R, x) => {
        _.push({
          name: x,
          count: R.length,
          time: K.sumBy(R, h.EXCLUSIVE_DURATION),
          timePercent: a(R),
          nodes: R
        });
      }), _;
    }), c = St(() => {
      const p = K.groupBy(
        e,
        h.NODE_TYPE
      ), _ = [];
      return K.each(p, (R, x) => {
        _.push({
          name: x,
          count: R.length,
          time: K.sumBy(R, h.EXCLUSIVE_DURATION),
          timePercent: a(R),
          nodes: R
        });
      }), _;
    }), g = St(() => {
      const p = K.groupBy(
        K.filter(e, (R) => R[h.INDEX_NAME] !== void 0),
        h.INDEX_NAME
      ), _ = [];
      return K.each(p, (R, x) => {
        _.push({
          name: x,
          count: R.length,
          time: K.sumBy(R, h.EXCLUSIVE_DURATION),
          timePercent: a(R),
          nodes: R
        });
      }), _;
    });
    return (p, _) => (N(), D("div", sP, [
      S("div", oP, [
        S("div", aP, [
          S("div", lP, [
            S("div", uP, [
              Rt(vl, {
                class: "table table-sm mb-0",
                values: l.value,
                sort: "time",
                dir: d(Vr).desc
              }, {
                body: Ye((R) => [
                  (N(!0), D(Ht, null, Pe(R.values, (x) => (N(), Ue(ml, {
                    key: x,
                    value: x,
                    executionTime: n.value
                  }, null, 8, ["value", "executionTime"]))), 128))
                ]),
                default: Ye(() => [
                  S("thead", fP, [
                    S("tr", null, [
                      S("th", cP, [
                        Rt(or, { name: "name" }, {
                          default: Ye(() => _[0] || (_[0] = [
                            m("Table")
                          ])),
                          _: 1
                        })
                      ]),
                      _[3] || (_[3] = m()),
                      S("th", dP, [
                        Rt(or, { name: "count" }, {
                          default: Ye(() => _[1] || (_[1] = [
                            m("Count")
                          ])),
                          _: 1
                        })
                      ]),
                      _[4] || (_[4] = m()),
                      S("th", pP, [
                        Rt(or, { name: "time" }, {
                          default: Ye(() => _[2] || (_[2] = [
                            m("Time")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _[6] || (_[6] = m()),
                  _[7] || (_[7] = m()),
                  l.value.length ? Q("", !0) : (N(), D("tbody", hP, _[5] || (_[5] = [
                    S("tr", null, [
                      S("td", {
                        colspan: "3",
                        class: "text-center fst-italic"
                      }, `
                    No tables used
                  `)
                    ], -1)
                  ])))
                ]),
                _: 1
              }, 8, ["values", "dir"])
            ])
          ])
        ]),
        _[30] || (_[30] = m()),
        S("div", EP, [
          S("div", gP, [
            S("div", vP, [
              Rt(vl, {
                class: "table table-sm mb-0",
                values: f.value,
                sort: "time",
                dir: d(Vr).desc
              }, {
                body: Ye((R) => [
                  (N(!0), D(Ht, null, Pe(R.values, (x) => (N(), Ue(ml, {
                    key: x,
                    value: x,
                    executionTime: n.value
                  }, null, 8, ["value", "executionTime"]))), 128))
                ]),
                default: Ye(() => [
                  S("thead", mP, [
                    S("tr", null, [
                      S("th", _P, [
                        Rt(or, { name: "name" }, {
                          default: Ye(() => _[8] || (_[8] = [
                            m("Function")
                          ])),
                          _: 1
                        })
                      ]),
                      _[11] || (_[11] = m()),
                      S("th", TP, [
                        Rt(or, { name: "count" }, {
                          default: Ye(() => _[9] || (_[9] = [
                            m("Count")
                          ])),
                          _: 1
                        })
                      ]),
                      _[12] || (_[12] = m()),
                      S("th", AP, [
                        Rt(or, { name: "time" }, {
                          default: Ye(() => _[10] || (_[10] = [
                            m("Time")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _[14] || (_[14] = m()),
                  _[15] || (_[15] = m()),
                  f.value.length ? Q("", !0) : (N(), D("tbody", SP, _[13] || (_[13] = [
                    S("tr", null, [
                      S("td", {
                        colspan: "3",
                        class: "text-center fst-italic"
                      }, `
                    No function used
                  `)
                    ], -1)
                  ])))
                ]),
                _: 1
              }, 8, ["values", "dir"])
            ])
          ])
        ]),
        _[31] || (_[31] = m()),
        S("div", yP, [
          S("div", OP, [
            S("div", RP, [
              Rt(vl, {
                class: "table table-sm mb-0",
                values: c.value,
                sort: "time",
                dir: d(Vr).desc
              }, {
                body: Ye((R) => [
                  (N(!0), D(Ht, null, Pe(R.values, (x) => (N(), Ue(ml, {
                    key: x,
                    value: x,
                    executionTime: n.value
                  }, null, 8, ["value", "executionTime"]))), 128))
                ]),
                default: Ye(() => [
                  S("thead", bP, [
                    S("tr", null, [
                      S("th", IP, [
                        Rt(or, { name: "name" }, {
                          default: Ye(() => _[16] || (_[16] = [
                            m("Node Type")
                          ])),
                          _: 1
                        })
                      ]),
                      _[19] || (_[19] = m()),
                      S("th", LP, [
                        Rt(or, { name: "count" }, {
                          default: Ye(() => _[17] || (_[17] = [
                            m("Count")
                          ])),
                          _: 1
                        })
                      ]),
                      _[20] || (_[20] = m()),
                      S("th", CP, [
                        Rt(or, { name: "time" }, {
                          default: Ye(() => _[18] || (_[18] = [
                            m("Time")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _[21] || (_[21] = m())
                ]),
                _: 1
              }, 8, ["values", "dir"])
            ])
          ])
        ]),
        _[32] || (_[32] = m()),
        S("div", NP, [
          S("div", xP, [
            S("div", wP, [
              Rt(vl, {
                class: "table table-sm mb-0",
                values: g.value,
                sort: "time",
                dir: d(Vr).desc
              }, {
                body: Ye((R) => [
                  (N(!0), D(Ht, null, Pe(R.values, (x) => (N(), Ue(ml, {
                    key: x,
                    value: x,
                    executionTime: n.value
                  }, null, 8, ["value", "executionTime"]))), 128))
                ]),
                default: Ye(() => [
                  S("thead", MP, [
                    S("tr", null, [
                      S("th", DP, [
                        Rt(or, { name: "name" }, {
                          default: Ye(() => _[22] || (_[22] = [
                            m("Index")
                          ])),
                          _: 1
                        })
                      ]),
                      _[25] || (_[25] = m()),
                      S("th", PP, [
                        Rt(or, { name: "count" }, {
                          default: Ye(() => _[23] || (_[23] = [
                            m("Count")
                          ])),
                          _: 1
                        })
                      ]),
                      _[26] || (_[26] = m()),
                      S("th", UP, [
                        Rt(or, { name: "time" }, {
                          default: Ye(() => _[24] || (_[24] = [
                            m("Time")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _[28] || (_[28] = m()),
                  _[29] || (_[29] = m()),
                  g.value.length ? Q("", !0) : (N(), D("tbody", kP, _[27] || (_[27] = [
                    S("tr", null, [
                      S("td", {
                        colspan: "3",
                        class: "text-center fst-italic"
                      }, `
                    No index used
                  `)
                    ], -1)
                  ])))
                ]),
                _: 1
              }, 8, ["values", "dir"])
            ])
          ])
        ])
      ])
    ]));
  }
});
var Xg, Gg, zg, Yg, Kg, jg, qg, Jg, Qg, Zg, tv, ev, nv, rv, iv, sv, ov, av, lv, uv, fv, cv, dv, pv, hv, Ev, gv, vv, mv, _v, Tv, Av, Sv, yv, Ov, Rv, bv, Iv, Lv, Cv;
let $P = (Cv = h.ACTUAL_LOOPS, Lv = h.ACTUAL_ROWS, Iv = h.ACTUAL_ROWS_REVISED, bv = h.ACTUAL_STARTUP_TIME, Rv = h.ACTUAL_TOTAL_TIME, Ov = h.EXCLUSIVE_COST, yv = h.EXCLUSIVE_DURATION, Sv = h.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS, Av = h.EXCLUSIVE_LOCAL_HIT_BLOCKS, Tv = h.EXCLUSIVE_LOCAL_READ_BLOCKS, _v = h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS, mv = h.EXCLUSIVE_SHARED_DIRTIED_BLOCKS, vv = h.EXCLUSIVE_SHARED_HIT_BLOCKS, gv = h.EXCLUSIVE_SHARED_READ_BLOCKS, Ev = h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS, hv = h.EXCLUSIVE_TEMP_READ_BLOCKS, pv = h.EXCLUSIVE_TEMP_WRITTEN_BLOCKS, dv = h.FILTER, cv = h.PLANNER_ESTIMATE_DIRECTION, fv = h.PLANNER_ESTIMATE_FACTOR, uv = h.INDEX_NAME, lv = h.NODE_TYPE, av = h.PARALLEL_AWARE, ov = h.PLANS, sv = h.PLAN_ROWS, iv = h.PLAN_ROWS_REVISED, rv = h.ROWS_REMOVED_BY_FILTER_REVISED, nv = h.ROWS_REMOVED_BY_JOIN_FILTER_REVISED, ev = h.SUBPLAN_NAME, tv = h.TOTAL_COST, Zg = h.WORKERS, Qg = h.WORKERS_LAUNCHED, Jg = h.WORKERS_PLANNED, qg = h.WORKERS_PLANNED_BY_GATHER, jg = h.EXCLUSIVE_IO_READ_TIME, Kg = h.EXCLUSIVE_IO_WRITE_TIME, Yg = h.AVERAGE_IO_READ_SPEED, zg = h.AVERAGE_IO_WRITE_SPEED, Gg = h.IO_READ_TIME, Xg = h.IO_WRITE_TIME, class {
  constructor(e) {
    Kt(this, "nodeId");
    Kt(this, "size");
    Kt(this, "Options");
    Kt(this, "Timing");
    Kt(this, "Settings");
    Kt(this, Cv);
    Kt(this, Lv);
    Kt(this, Iv);
    Kt(this, bv);
    Kt(this, Rv);
    Kt(this, Ov);
    Kt(this, yv);
    Kt(this, Sv);
    Kt(this, Av);
    Kt(this, Tv);
    Kt(this, _v);
    Kt(this, mv);
    Kt(this, vv);
    Kt(this, gv);
    Kt(this, Ev);
    Kt(this, hv);
    Kt(this, pv);
    Kt(this, dv);
    Kt(this, cv);
    Kt(this, fv);
    Kt(this, uv);
    Kt(this, lv);
    Kt(this, av);
    Kt(this, ov);
    Kt(this, sv);
    Kt(this, iv);
    Kt(this, rv);
    Kt(this, nv);
    Kt(this, ev);
    Kt(this, tv);
    Kt(this, Zg);
    Kt(this, Qg);
    Kt(this, Jg);
    Kt(this, qg);
    Kt(this, jg);
    Kt(this, Kg);
    Kt(this, Yg);
    Kt(this, zg);
    Kt(this, Gg);
    Kt(this, Xg);
    if (!e)
      return;
    this[h.NODE_TYPE] = e;
    const n = /^((?:Parallel\s+)?(?:Seq\sScan|Tid.*Scan|Bitmap\s+Heap\s+Scan|(?:Async\s+)?Foreign\s+Scan|Update|Insert|Delete))\son\s(\S+)(?:\s+(\S+))?$/.exec(
      e
    ), i = /^(Bitmap\s+Index\s+Scan)\son\s(\S+)$/.exec(e), o = /^((?:Parallel\s+)?Index(?:\sOnly)?\sScan(?:\sBackward)?)\susing\s(\S+)\son\s(\S+)(?:\s+(\S+))?$/.exec(
      e
    ), a = /^(CTE\sScan)\son\s(\S+)(?:\s+(\S+))?$/.exec(e), l = /^(Function\sScan)\son\s(\S+)(?:\s+(\S+))?$/.exec(
      e
    ), f = /^(Subquery\sScan)\son\s(.+)$/.exec(e);
    n ? (this[h.NODE_TYPE] = n[1], this[h.RELATION_NAME] = n[2], n[3] && (this[h.ALIAS] = n[3])) : i ? (this[h.NODE_TYPE] = i[1], this[h.INDEX_NAME] = i[2]) : o ? (this[h.NODE_TYPE] = o[1], this[h.INDEX_NAME] = o[2], this[h.RELATION_NAME] = o[3], o[4] && (this[h.ALIAS] = o[4])) : a ? (this[h.NODE_TYPE] = a[1], this[h.CTE_NAME] = a[2], a[3] && (this[h.ALIAS] = a[3])) : l ? (this[h.NODE_TYPE] = l[1], this[h.FUNCTION_NAME] = l[2], l[3] && (this[h.ALIAS] = l[3])) : f && (this[h.NODE_TYPE] = f[1], this[h.ALIAS] = f[2]);
    const c = /^(Parallel\s+)(.*)/.exec(
      this[h.NODE_TYPE]
    );
    c && (this[h.NODE_TYPE] = c[2], this[h.PARALLEL_AWARE] = !0);
    const g = /(.*)\sJoin$/.exec(this[h.NODE_TYPE]), p = /(.*)\s+(Full|Left|Right|Anti)/.exec(
      this[h.NODE_TYPE]
    );
    g && (this[h.NODE_TYPE] = g[1], p && (this[h.NODE_TYPE] = p[1], this[h.JOIN_TYPE] = p[2]), this[h.NODE_TYPE] += " Join");
  }
});
class HP {
  constructor(e) {
    this[fa.WORKER_NUMBER] = e;
  }
}
var Zf = {}, tc = { exports: {} }, gg;
function FP() {
  return gg || (gg = 1, function(t) {
    function e(i) {
      if (i)
        return n(i);
      this._callbacks = /* @__PURE__ */ new Map();
    }
    function n(i) {
      return Object.assign(i, e.prototype), i._callbacks = /* @__PURE__ */ new Map(), i;
    }
    e.prototype.on = function(i, o) {
      const a = this._callbacks.get(i) ?? [];
      return a.push(o), this._callbacks.set(i, a), this;
    }, e.prototype.once = function(i, o) {
      const a = (...l) => {
        this.off(i, a), o.apply(this, l);
      };
      return a.fn = o, this.on(i, a), this;
    }, e.prototype.off = function(i, o) {
      if (i === void 0 && o === void 0)
        return this._callbacks.clear(), this;
      if (o === void 0)
        return this._callbacks.delete(i), this;
      const a = this._callbacks.get(i);
      if (a) {
        for (const [l, f] of a.entries())
          if (f === o || f.fn === o) {
            a.splice(l, 1);
            break;
          }
        a.length === 0 ? this._callbacks.delete(i) : this._callbacks.set(i, a);
      }
      return this;
    }, e.prototype.emit = function(i, ...o) {
      const a = this._callbacks.get(i);
      if (a) {
        const l = [...a];
        for (const f of l)
          f.apply(this, o);
      }
      return this;
    }, e.prototype.listeners = function(i) {
      return this._callbacks.get(i) ?? [];
    }, e.prototype.listenerCount = function(i) {
      if (i)
        return this.listeners(i).length;
      let o = 0;
      for (const a of this._callbacks.values())
        o += a.length;
      return o;
    }, e.prototype.hasListeners = function(i) {
      return this.listenerCount(i) > 0;
    }, e.prototype.addEventListener = e.prototype.on, e.prototype.removeListener = e.prototype.off, e.prototype.removeEventListener = e.prototype.off, e.prototype.removeAllListeners = e.prototype.off, t.exports = e;
  }(tc)), tc.exports;
}
var ec, vg;
function WP() {
  if (vg) return ec;
  vg = 1;
  var t = /* @__PURE__ */ FP();
  function e() {
    t.call(this);
  }
  return e.prototype = new t(), ec = e, e.Stream = e, e.prototype.pipe = function(n, i) {
    var o = this;
    function a(R) {
      n.writable && n.write(R) === !1 && o.pause && o.pause();
    }
    o.on("data", a);
    function l() {
      o.readable && o.resume && o.resume();
    }
    n.on("drain", l), !n._isStdio && (!i || i.end !== !1) && (o.on("end", c), o.on("close", g));
    var f = !1;
    function c() {
      f || (f = !0, n.end());
    }
    function g() {
      f || (f = !0, typeof n.destroy == "function" && n.destroy());
    }
    function p(R) {
      if (_(), !this.hasListeners("error"))
        throw R;
    }
    o.on("error", p), n.on("error", p);
    function _() {
      o.off("data", a), n.off("drain", l), o.off("end", c), o.off("close", g), o.off("error", p), n.off("error", p), o.off("end", _), o.off("close", _), n.off("end", _), n.off("close", _);
    }
    return o.on("end", _), o.on("close", _), n.on("end", _), n.on("close", _), n.emit("pipe", o), n;
  }, ec;
}
var mg;
function VP() {
  return mg || (mg = 1, function(t) {
    (function(e) {
      var n = typeof process == "object" && process.env ? process.env : self;
      e.parser = function(U) {
        return new R(U);
      }, e.CParser = R, e.CStream = P, e.createStream = x, e.MAX_BUFFER_LENGTH = 64 * 1024, e.DEBUG = n.CDEBUG === "debug", e.INFO = n.CDEBUG === "debug" || n.CDEBUG === "info", e.EVENTS = [
        "value",
        "string",
        "key",
        "openobject",
        "closeobject",
        "openarray",
        "closearray",
        "error",
        "end",
        "ready"
      ];
      var i = {
        textNode: void 0,
        numberNode: ""
      }, o = e.EVENTS.filter(function(U) {
        return U !== "error" && U !== "end";
      }), a = 0, l;
      e.STATE = {
        BEGIN: a++,
        VALUE: a++,
        OPEN_OBJECT: a++,
        CLOSE_OBJECT: a++,
        OPEN_ARRAY: a++,
        CLOSE_ARRAY: a++,
        TEXT_ESCAPE: a++,
        STRING: a++,
        BACKSLASH: a++,
        END: a++,
        OPEN_KEY: a++,
        CLOSE_KEY: a++,
        TRUE: a++,
        TRUE2: a++,
        TRUE3: a++,
        FALSE: a++,
        FALSE2: a++,
        FALSE3: a++,
        FALSE4: a++,
        NULL: a++,
        NULL2: a++,
        NULL3: a++,
        NUMBER_DECIMAL_POINT: a++,
        NUMBER_DIGIT: a++
        // [0-9]
      };
      for (var f in e.STATE) e.STATE[e.STATE[f]] = f;
      a = e.STATE;
      const c = {
        tab: 9,
        // \t
        lineFeed: 10,
        // \n
        carriageReturn: 13,
        // \r
        space: 32,
        // " "
        doubleQuote: 34,
        // "
        plus: 43,
        // +
        comma: 44,
        // ,
        minus: 45,
        // -
        period: 46,
        // .
        _0: 48,
        // 0
        _9: 57,
        // 9
        colon: 58,
        // :
        E: 69,
        // E
        openBracket: 91,
        // [
        backslash: 92,
        // \
        closeBracket: 93,
        // ]
        a: 97,
        // a
        b: 98,
        // b
        e: 101,
        // e 
        f: 102,
        // f
        l: 108,
        // l
        n: 110,
        // n
        r: 114,
        // r
        s: 115,
        // s
        t: 116,
        // t
        u: 117,
        // u
        openBrace: 123,
        // {
        closeBrace: 125
        // }
      };
      Object.create || (Object.create = function(U) {
        function y() {
          this.__proto__ = U;
        }
        return y.prototype = U, new y();
      }), Object.getPrototypeOf || (Object.getPrototypeOf = function(U) {
        return U.__proto__;
      }), Object.keys || (Object.keys = function(U) {
        var y = [];
        for (var tt in U) U.hasOwnProperty(tt) && y.push(tt);
        return y;
      });
      function g(U) {
        var y = Math.max(e.MAX_BUFFER_LENGTH, 10), tt = 0;
        for (var F in i) {
          var ht = U[F] === void 0 ? 0 : U[F].length;
          if (ht > y)
            switch (F) {
              case "text":
                closeText(U);
                break;
              default:
                v(U, "Max buffer length exceeded: " + F);
            }
          tt = Math.max(tt, ht);
        }
        U.bufferCheckPosition = e.MAX_BUFFER_LENGTH - tt + U.position;
      }
      function p(U) {
        for (var y in i)
          U[y] = i[y];
      }
      var _ = /[\\"\n]/g;
      function R(U) {
        if (!(this instanceof R)) return new R(U);
        var y = this;
        p(y), y.bufferCheckPosition = e.MAX_BUFFER_LENGTH, y.q = y.c = y.p = "", y.opt = U || {}, y.closed = y.closedRoot = y.sawRoot = !1, y.tag = y.error = null, y.state = a.BEGIN, y.stack = new Array(), y.position = y.column = 0, y.line = 1, y.slashed = !1, y.unicodeI = 0, y.unicodeS = null, y.depth = 0, O(y, "onready");
      }
      R.prototype = {
        end: function() {
          G(this);
        },
        write: B,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        }
      };
      try {
        l = WP().Stream;
      } catch {
        l = function() {
        };
      }
      function x(U) {
        return new P(U);
      }
      function P(U) {
        if (!(this instanceof P)) return new P(U);
        this._parser = new R(U), this.writable = !0, this.readable = !0, this.bytes_remaining = 0, this.bytes_in_sequence = 0, this.temp_buffs = { 2: new Buffer(2), 3: new Buffer(3), 4: new Buffer(4) }, this.string = "";
        var y = this;
        l.apply(y), this._parser.onend = function() {
          y.emit("end");
        }, this._parser.onerror = function(tt) {
          y.emit("error", tt), y._parser.error = null;
        }, o.forEach(function(tt) {
          Object.defineProperty(
            y,
            "on" + tt,
            {
              get: function() {
                return y._parser["on" + tt];
              },
              set: function(F) {
                if (!F)
                  return y.removeAllListeners(tt), y._parser["on" + tt] = F, F;
                y.on(tt, F);
              },
              enumerable: !0,
              configurable: !1
            }
          );
        });
      }
      P.prototype = Object.create(
        l.prototype,
        { constructor: { value: P } }
      ), P.prototype.write = function(U) {
        U = new Buffer(U);
        for (var y = 0; y < U.length; y++) {
          var tt = U[y];
          if (this.bytes_remaining > 0) {
            for (var F = 0; F < this.bytes_remaining; F++)
              this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + F] = U[F];
            this.string = this.temp_buffs[this.bytes_in_sequence].toString(), this.bytes_in_sequence = this.bytes_remaining = 0, y = y + F - 1, this._parser.write(this.string), this.emit("data", this.string);
            continue;
          }
          if (this.bytes_remaining === 0 && tt >= 128)
            if (tt >= 194 && tt <= 223 && (this.bytes_in_sequence = 2), tt >= 224 && tt <= 239 && (this.bytes_in_sequence = 3), tt >= 240 && tt <= 244 && (this.bytes_in_sequence = 4), this.bytes_in_sequence + y > U.length) {
              for (var ht = 0; ht <= U.length - 1 - y; ht++)
                this.temp_buffs[this.bytes_in_sequence][ht] = U[y + ht];
              return this.bytes_remaining = y + this.bytes_in_sequence - U.length, !0;
            } else {
              this.string = U.slice(y, y + this.bytes_in_sequence).toString(), y = y + this.bytes_in_sequence - 1, this._parser.write(this.string), this.emit("data", this.string);
              continue;
            }
          for (var M = y; M < U.length && !(U[M] >= 128); M++)
            ;
          this.string = U.slice(y, M).toString(), this._parser.write(this.string), this.emit("data", this.string), y = M - 1;
        }
      }, P.prototype.end = function(U) {
        return U && U.length && this._parser.write(U.toString()), this._parser.end(), !0;
      }, P.prototype.on = function(U, y) {
        var tt = this;
        return !tt._parser["on" + U] && o.indexOf(U) !== -1 && (tt._parser["on" + U] = function() {
          var F = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          F.splice(0, 0, U), tt.emit.apply(tt, F);
        }), l.prototype.on.call(tt, U, y);
      }, P.prototype.destroy = function() {
        p(this._parser), this.emit("close");
      };
      function O(U, y, tt) {
        e.INFO && console.log("-- emit", y, tt), U[y] && U[y](tt);
      }
      function W(U, y, tt) {
        b(U), O(U, y, tt);
      }
      function b(U, y) {
        U.textNode = Z(U.opt, U.textNode), U.textNode !== void 0 && O(U, y || "onvalue", U.textNode), U.textNode = void 0;
      }
      function w(U) {
        U.numberNode && O(U, "onvalue", parseFloat(U.numberNode)), U.numberNode = "";
      }
      function Z(U, y) {
        return y === void 0 || (U.trim && (y = y.trim()), U.normalize && (y = y.replace(/\s+/g, " "))), y;
      }
      function v(U, y) {
        return b(U), y += `
Line: ` + U.line + `
Column: ` + U.column + `
Char: ` + U.c, y = new Error(y), U.error = y, O(U, "onerror", y), U;
      }
      function G(U) {
        return (U.state !== a.VALUE || U.depth !== 0) && v(U, "Unexpected end"), b(U), U.c = "", U.closed = !0, O(U, "onend"), R.call(U, U.opt), U;
      }
      function L(U) {
        return U === c.carriageReturn || U === c.lineFeed || U === c.space || U === c.tab;
      }
      function B(U) {
        var y = this;
        if (this.error) throw this.error;
        if (y.closed) return v(
          y,
          "Cannot write after close. Assign an onready handler."
        );
        if (U === null) return G(y);
        var tt = 0, F = U.charCodeAt(0), ht = y.p, M = !1;
        for (e.DEBUG && console.log("write -> [" + U + "]"); F && (ht = F, y.c = F = U.charCodeAt(tt++), ht !== F ? y.p = ht : ht = y.p, !!F); )
          switch (e.DEBUG && console.log(tt, F, e.STATE[y.state]), M ? M = !1 : (y.position++, F === c.lineFeed ? (y.line++, y.column = 0) : y.column++), y.state) {
            case a.BEGIN:
              F === c.openBrace ? y.state = a.OPEN_OBJECT : F === c.openBracket ? y.state = a.OPEN_ARRAY : L(F) || v(y, "Non-whitespace before {[.");
              continue;
            case a.OPEN_KEY:
            case a.OPEN_OBJECT:
              if (L(F)) continue;
              if (y.state === a.OPEN_KEY) y.stack.push(a.CLOSE_KEY);
              else if (F === c.closeBrace) {
                O(y, "onopenobject"), this.depth++, O(y, "oncloseobject"), this.depth--, y.state = y.stack.pop() || a.VALUE;
                continue;
              } else y.stack.push(a.CLOSE_OBJECT);
              F === c.doubleQuote ? y.state = a.STRING : v(y, 'Malformed object key should start with "');
              continue;
            case a.CLOSE_KEY:
            case a.CLOSE_OBJECT:
              if (L(F)) continue;
              y.state, a.CLOSE_KEY, F === c.colon ? (y.state === a.CLOSE_OBJECT ? (y.stack.push(a.CLOSE_OBJECT), b(y, "onopenobject"), this.depth++) : b(y, "onkey"), y.state = a.VALUE) : F === c.closeBrace ? (W(y, "oncloseobject"), this.depth--, y.state = y.stack.pop() || a.VALUE) : F === c.comma ? (y.state === a.CLOSE_OBJECT && y.stack.push(a.CLOSE_OBJECT), b(y), y.state = a.OPEN_KEY) : v(y, "Bad object");
              continue;
            case a.OPEN_ARRAY:
            // after an array there always a value
            case a.VALUE:
              if (L(F)) continue;
              if (y.state === a.OPEN_ARRAY)
                if (O(y, "onopenarray"), this.depth++, y.state = a.VALUE, F === c.closeBracket) {
                  O(y, "onclosearray"), this.depth--, y.state = y.stack.pop() || a.VALUE;
                  continue;
                } else
                  y.stack.push(a.CLOSE_ARRAY);
              F === c.doubleQuote ? y.state = a.STRING : F === c.openBrace ? y.state = a.OPEN_OBJECT : F === c.openBracket ? y.state = a.OPEN_ARRAY : F === c.t ? y.state = a.TRUE : F === c.f ? y.state = a.FALSE : F === c.n ? y.state = a.NULL : F === c.minus ? y.numberNode += "-" : c._0 <= F && F <= c._9 ? (y.numberNode += String.fromCharCode(F), y.state = a.NUMBER_DIGIT) : v(y, "Bad value");
              continue;
            case a.CLOSE_ARRAY:
              if (F === c.comma)
                y.stack.push(a.CLOSE_ARRAY), b(y, "onvalue"), y.state = a.VALUE;
              else if (F === c.closeBracket)
                W(y, "onclosearray"), this.depth--, y.state = y.stack.pop() || a.VALUE;
              else {
                if (L(F))
                  continue;
                v(y, "Bad array");
              }
              continue;
            case a.STRING:
              y.textNode === void 0 && (y.textNode = "");
              var Y = tt - 1, lt = y.slashed, V = y.unicodeI;
              t: for (; ; ) {
                for (e.DEBUG && console.log(
                  tt,
                  F,
                  e.STATE[y.state],
                  lt
                ); V > 0; )
                  if (y.unicodeS += String.fromCharCode(F), F = U.charCodeAt(tt++), y.position++, V === 4 ? (y.textNode += String.fromCharCode(parseInt(y.unicodeS, 16)), V = 0, Y = tt - 1) : V++, !F) break t;
                if (F === c.doubleQuote && !lt) {
                  y.state = y.stack.pop() || a.VALUE, y.textNode += U.substring(Y, tt - 1), y.position += tt - 1 - Y;
                  break;
                }
                if (F === c.backslash && !lt && (lt = !0, y.textNode += U.substring(Y, tt - 1), y.position += tt - 1 - Y, F = U.charCodeAt(tt++), y.position++, !F))
                  break;
                if (lt) {
                  if (lt = !1, F === c.n ? y.textNode += `
` : F === c.r ? y.textNode += "\r" : F === c.t ? y.textNode += "	" : F === c.f ? y.textNode += "\f" : F === c.b ? y.textNode += "\b" : F === c.u ? (V = 1, y.unicodeS = "") : y.textNode += String.fromCharCode(F), F = U.charCodeAt(tt++), y.position++, Y = tt - 1, F) continue;
                  break;
                }
                _.lastIndex = tt;
                var $ = _.exec(U);
                if ($ === null) {
                  tt = U.length + 1, y.textNode += U.substring(Y, tt - 1), y.position += tt - 1 - Y;
                  break;
                }
                if (tt = $.index + 1, F = U.charCodeAt($.index), !F) {
                  y.textNode += U.substring(Y, tt - 1), y.position += tt - 1 - Y;
                  break;
                }
              }
              y.slashed = lt, y.unicodeI = V;
              continue;
            case a.TRUE:
              F === c.r ? y.state = a.TRUE2 : v(y, "Invalid true started with t" + F);
              continue;
            case a.TRUE2:
              F === c.u ? y.state = a.TRUE3 : v(y, "Invalid true started with tr" + F);
              continue;
            case a.TRUE3:
              F === c.e ? (O(y, "onvalue", !0), y.state = y.stack.pop() || a.VALUE) : v(y, "Invalid true started with tru" + F);
              continue;
            case a.FALSE:
              F === c.a ? y.state = a.FALSE2 : v(y, "Invalid false started with f" + F);
              continue;
            case a.FALSE2:
              F === c.l ? y.state = a.FALSE3 : v(y, "Invalid false started with fa" + F);
              continue;
            case a.FALSE3:
              F === c.s ? y.state = a.FALSE4 : v(y, "Invalid false started with fal" + F);
              continue;
            case a.FALSE4:
              F === c.e ? (O(y, "onvalue", !1), y.state = y.stack.pop() || a.VALUE) : v(y, "Invalid false started with fals" + F);
              continue;
            case a.NULL:
              F === c.u ? y.state = a.NULL2 : v(y, "Invalid null started with n" + F);
              continue;
            case a.NULL2:
              F === c.l ? y.state = a.NULL3 : v(y, "Invalid null started with nu" + F);
              continue;
            case a.NULL3:
              F === c.l ? (O(y, "onvalue", null), y.state = y.stack.pop() || a.VALUE) : v(y, "Invalid null started with nul" + F);
              continue;
            case a.NUMBER_DECIMAL_POINT:
              F === c.period ? (y.numberNode += ".", y.state = a.NUMBER_DIGIT) : v(y, "Leading zero not followed by .");
              continue;
            case a.NUMBER_DIGIT:
              c._0 <= F && F <= c._9 ? y.numberNode += String.fromCharCode(F) : F === c.period ? (y.numberNode.indexOf(".") !== -1 && v(y, "Invalid number has two dots"), y.numberNode += ".") : F === c.e || F === c.E ? ((y.numberNode.indexOf("e") !== -1 || y.numberNode.indexOf("E") !== -1) && v(y, "Invalid number has two exponential"), y.numberNode += "e") : F === c.plus || F === c.minus ? (ht === c.e || ht === c.E || v(y, "Invalid symbol in number"), y.numberNode += String.fromCharCode(F)) : (w(y), tt--, M = !0, y.state = y.stack.pop() || a.VALUE);
              continue;
            default:
              v(y, "Unknown state: " + y.state);
          }
        return y.position >= y.bufferCheckPosition && g(y), y;
      }
    })(t);
  }(Zf)), Zf;
}
var XP = VP();
const GP = /* @__PURE__ */ nu(XP);
class p0 {
  constructor() {
    Kt(this, "nodeId", 0);
  }
  createPlan(e, n, i) {
    if (i = i.replace(/(\S)(?!$)(\s{2,})/gm, "$1 "), !n.Plan)
      throw new Error("Invalid plan");
    const o = {
      id: h.PEV_PLAN_TAG + (/* @__PURE__ */ new Date()).getTime().toString(),
      name: e || "plan created on " + (/* @__PURE__ */ new Date()).toDateString(),
      createdOn: /* @__PURE__ */ new Date(),
      content: n,
      query: i,
      planStats: {},
      ctes: [],
      isAnalyze: K.has(n.Plan, h.ACTUAL_ROWS),
      isVerbose: this.findOutputProperty(n.Plan)
    };
    return this.nodeId = 1, this.processNode(n.Plan, o), this.calculateMaximums(o), o;
  }
  isCTE(e) {
    return e[h.PARENT_RELATIONSHIP] === "InitPlan" && K.startsWith(e[h.SUBPLAN_NAME], "CTE");
  }
  // recursively walk down the plan to compute various metrics
  processNode(e, n) {
    e.nodeId = this.nodeId++, this.calculatePlannerEstimate(e), K.each(e[h.PLANS], (i) => {
      !this.isCTE(i) && i[h.PARENT_RELATIONSHIP] !== "InitPlan" && i[h.PARENT_RELATIONSHIP] !== "SubPlan" && (i[h.WORKERS_PLANNED_BY_GATHER] = e[h.WORKERS_PLANNED] || e[h.WORKERS_PLANNED_BY_GATHER], i[h.WORKERS_LAUNCHED_BY_GATHER] = e[h.WORKERS_LAUNCHED] || e[h.WORKERS_LAUNCHED_BY_GATHER]), this.isCTE(i) && n.ctes.push(i), this.processNode(i, n);
    }), K.remove(e[h.PLANS], (i) => this.isCTE(i)), this.calculateActuals(e), this.calculateExclusives(e), this.calculateIoTimingsAverage(e), this.convertNodeType(e);
  }
  calculateMaximums(e) {
    function n(b) {
      return K.map(b, (w) => [w, n(w[h.PLANS])]);
    }
    let i = [];
    i = i.concat(K.flattenDeep(n([e.content.Plan]))), K.each(e.ctes, (b) => {
      i = i.concat(K.flattenDeep(n([b])));
    });
    const o = K.maxBy(i, h.ACTUAL_ROWS_REVISED);
    o && (e.content.maxRows = o[h.ACTUAL_ROWS_REVISED]);
    const a = K.maxBy(i, h.EXCLUSIVE_COST);
    a && (e.content.maxCost = a[h.EXCLUSIVE_COST]);
    const l = K.maxBy(i, h.TOTAL_COST);
    l && (e.content.maxTotalCost = l[h.TOTAL_COST]);
    const f = K.maxBy(i, h.EXCLUSIVE_DURATION);
    f && (e.content.maxDuration = f[h.EXCLUSIVE_DURATION]), e.content.maxBlocks || (e.content.maxBlocks = {});
    function c(b) {
      return b[h.EXCLUSIVE_SHARED_HIT_BLOCKS] + b[h.EXCLUSIVE_SHARED_READ_BLOCKS] + b[h.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] + b[h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS];
    }
    const g = K.maxBy(i, (b) => c(b));
    g && c(g) && (e.content.maxBlocks[ie.shared] = c(g));
    function p(b) {
      return b[h.EXCLUSIVE_TEMP_READ_BLOCKS] + b[h.EXCLUSIVE_TEMP_WRITTEN_BLOCKS];
    }
    const _ = K.maxBy(i, (b) => p(b));
    _ && p(_) && (e.content.maxBlocks[ie.temp] = p(_));
    function R(b) {
      return b[h.EXCLUSIVE_LOCAL_HIT_BLOCKS] + b[h.EXCLUSIVE_LOCAL_READ_BLOCKS] + b[h.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] + b[h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS];
    }
    const x = K.maxBy(i, (b) => R(b));
    x && R(x) && (e.content.maxBlocks[ie.local] = R(x)), e.content.maxIo || (e.content.maxIo = 0);
    function P(b) {
      return b[h.EXCLUSIVE_IO_READ_TIME] + b[h.EXCLUSIVE_IO_WRITE_TIME];
    }
    const O = K.maxBy(i, (b) => P(b));
    O && P(O) && (e.content.maxIo = P(O));
    const W = K.max(
      K.map(i, (b) => {
        const w = b[h.PLANNER_ESTIMATE_FACTOR];
        if (w !== 1 / 0)
          return w;
      })
    );
    e.content.maxEstimateFactor = W * 2 || 1;
  }
  // actual duration and actual cost are calculated by subtracting child values from the total
  calculateActuals(e) {
    if (!K.isUndefined(e[h.ACTUAL_TOTAL_TIME])) {
      const n = (e[h.WORKERS_PLANNED_BY_GATHER] || 0) + 1;
      e[h.ACTUAL_TOTAL_TIME] = e[h.ACTUAL_TOTAL_TIME] * e[h.ACTUAL_LOOPS] / n, e[h.ACTUAL_STARTUP_TIME] = e[h.ACTUAL_STARTUP_TIME] * e[h.ACTUAL_LOOPS] / n, e[h.EXCLUSIVE_DURATION] = e[h.ACTUAL_TOTAL_TIME];
      const i = e[h.EXCLUSIVE_DURATION] - this.childrenDuration(e, 0);
      e[h.EXCLUSIVE_DURATION] = i > 0 ? i : 0;
    }
    K.isUndefined(e[h.TOTAL_COST]) || (e[h.EXCLUSIVE_COST] = e[h.TOTAL_COST]), K.each(e[h.PLANS], (n) => {
      n[h.PARENT_RELATIONSHIP] !== "InitPlan" && n[h.TOTAL_COST] && (e[h.EXCLUSIVE_COST] = e[h.EXCLUSIVE_COST] - n[h.TOTAL_COST]);
    }), e[h.EXCLUSIVE_COST] < 0 && (e[h.EXCLUSIVE_COST] = 0), K.each(
      [
        "ACTUAL_ROWS",
        "PLAN_ROWS",
        "ROWS_REMOVED_BY_FILTER",
        "ROWS_REMOVED_BY_JOIN_FILTER"
      ],
      (n) => {
        if (!K.isUndefined(e[h[n]])) {
          const i = n + "_REVISED", o = e[h.ACTUAL_LOOPS] || 1, a = e[h[n]] * o;
          e[h[i]] = a;
        }
      }
    );
  }
  // recursive function to get the sum of actual durations of a a node children
  childrenDuration(e, n) {
    return K.each(e[h.PLANS], (i) => {
      i[h.PARENT_RELATIONSHIP] !== "InitPlan" && (n += i[h.EXCLUSIVE_DURATION] || 0, n = this.childrenDuration(i, n));
    }), n;
  }
  // figure out order of magnitude by which the planner mis-estimated how many rows would be
  // invloved in this node
  calculatePlannerEstimate(e) {
    e[h.ACTUAL_ROWS] !== void 0 && e[h.PLAN_ROWS] !== void 0 && (e[h.PLANNER_ESTIMATE_FACTOR] = e[h.ACTUAL_ROWS] / e[h.PLAN_ROWS], e[h.PLANNER_ESTIMATE_DIRECTION] = hn.none, e[h.ACTUAL_ROWS] > e[h.PLAN_ROWS] && (e[h.PLANNER_ESTIMATE_DIRECTION] = hn.under), e[h.ACTUAL_ROWS] < e[h.PLAN_ROWS] && (e[h.PLANNER_ESTIMATE_DIRECTION] = hn.over, e[h.PLANNER_ESTIMATE_FACTOR] = e[h.PLAN_ROWS] / e[h.ACTUAL_ROWS]));
  }
  cleanupSource(e) {
    return e = e.replace(/^(\||║|│)(.*)\1\r?\n/gm, `$2
`), e = e.replace(/(.*)(\||║|│)$\r?\n/gm, `$1
`), e = e.replace(/^\+-+\+\r?\n/gm, ""), e = e.replace(/^(-|─|═)\1+\r?\n/gm, ""), e = e.replace(/^(├|╟|╠|╞)(─|═)\2*(┤|╢|╣|╡)\r?\n/gm, ""), e = e.replace(/^\+-+\+\r?\n/gm, ""), e = e.replace(/^└(─)+┘\r?\n/gm, ""), e = e.replace(/^╚(═)+╝\r?\n/gm, ""), e = e.replace(/^┌(─)+┐\r?\n/gm, ""), e = e.replace(/^╔(═)+╗\r?\n/gm, ""), e = e.replace(/^(["'])(.*)\1\r?/gm, "$2"), e = e.replace(/\s*\+\r?\n/g, `
`), e = e.replace(/↵\r?/gm, `
`), e = e.replace(/^\s*QUERY PLAN\s*\r?\n/m, ""), e = e.replace(/^\(\d+\s+[a-z]*s?\)(\r?\n|$)/gm, `
`), e;
  }
  fromSource(e) {
    e = this.cleanupSource(e);
    let n = !1;
    try {
      n = JSON.parse(e);
    } catch {
    }
    return n ? this.parseJson(e) : /^(\s*)(\[|\{)\s*\n.*?\1(\]|\})\s*/gms.exec(e) ? this.fromJson(e) : this.fromText(e);
  }
  fromJson(e) {
    const n = e.split(/[\r\n]+/);
    let i = "", o = 0;
    K.each(n, (f, c) => {
      const g = /^(\s*)(\[|\{)\s*$/.exec(f);
      if (g)
        return i = g[1], o = c, !1;
    });
    let a = 0;
    K.each(n, (f, c) => {
      if (new RegExp("^" + i + "(]|})s*$").exec(f))
        return a = c, !1;
    });
    const l = n.slice(o, a + 1).join(`
`).replace(/""/gm, '"');
    return this.parseJson(l);
  }
  // Stream parse JSON as it can contain duplicate keys (workers)
  parseJson(e) {
    const n = GP.parser(), i = [];
    let o = null, a = null;
    return n.onvalue = (l) => {
      const f = i[i.length - 1];
      if (K.isArray(f))
        f.push(l);
      else {
        const c = Object.keys(f), g = c[c.length - 1];
        f[g] = l;
      }
    }, n.onopenobject = (l) => {
      const f = {};
      f[l] = null, i.push(f);
    }, n.onkey = (l) => {
      const f = i[i.length - 1];
      Object.keys(f).indexOf(l) !== -1 ? a = [i.length - 1, f[l]] : f[l] = null;
    }, n.onopenarray = () => {
      i.push([]);
    }, n.oncloseobject = n.onclosearray = () => {
      const l = i.pop();
      if (!i.length)
        o = l;
      else {
        const f = i[i.length - 1];
        if (a && a[0] === i.length - 1)
          K.merge(a[1], l), a = null;
        else if (K.isArray(f))
          f.push(l);
        else {
          const c = Object.keys(f), g = c[c.length - 1];
          f[g] = l;
        }
      }
    }, n.write(e).close(), Array.isArray(o) && (o = o[0]), o;
  }
  splitIntoLines(e) {
    const n = [], i = e.split(/\r?\n/), o = (f, c) => (f.match(c) || []).length, a = (f) => {
      const c = f.indexOf(")"), g = f.indexOf("(");
      return c != -1 && c < g;
    }, l = (f, c) => f.search(/\S/) == c.search(/\S/);
    return K.each(i, (f) => {
      o(f, /\)/g) > o(f, /\(/g) ? n[n.length - 1] += f : f.match(
        /^(?:Total\s+runtime|Planning\s+time|Memory\s+used|\s+\(slice\d+\)|Optimizer|Execution\s+time|Time|Filter|Output|JIT)/i
      ) ? n.push(f) : f.match(/^\S/) || // doesn't start with a blank space (allowed only for the first node)
      f.match(/^\s*\(/) || // first non-blank character is an opening parenthesis
      a(f) ? 0 < n.length ? n[n.length - 1] += f : n.push(f) : 0 < n.length && n[n.length - 1].match(/^\s*Output/i) && !l(n[n.length - 1], f) && !f.match(/^\s*->/i) ? n[n.length - 1] += f : n.push(f);
    }), n;
  }
  fromText(e) {
    const n = this.splitIntoLines(e), i = {}, o = [];
    if (K.each(n, (a) => {
      var Tt, q, T, Et, bt, Bt, Ft, xt, ue, He;
      a = a.replace(/"\s*$/, ""), a = a.replace(/^\s*"/, ""), a = a.replace(/\t/gm, "    ");
      const l = /^\s*/, f = a.match(l), c = f ? f[0].length : 0;
      a = a.replace(l, "");
      const g = "^s*$", p = "^\\s*(QUERY|---|#).*$", _ = "^(\\s*->\\s*|\\s*)", R = "([^\\r\\n\\t\\f\\v\\:\\(]*?)", x = "\\(cost=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+)\\s+rows=(\\d+)\\s+width=(\\d+)\\)", P = "(?:", O = ")", W = "\\(", b = "\\)", w = "(?:actual\\stime=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+)\\srows=(\\d+(?:\\.\\d+)?)\\sloops=(\\d+)|actual\\srows=(\\d+(?:\\.\\d+)?)\\sloops=(\\d+)|(never\\s+executed))", Z = "?", v = new RegExp(g).exec(a), G = new RegExp(p).exec(a), L = "(?:(\\d+)+:(\\d+)+\\s+\\((slice\\d+);\\s*segments:\\s*(\\d+)+\\))?", B = "(\\(dynamic scan id:\\s*(\\d+)\\))?", y = new RegExp(
        _ + R + "\\s*" + B + "\\s*" + L + "\\s*" + P + (P + x + "\\s+" + W + w + b + O) + "|" + P + x + O + "|" + P + W + w + b + O + O + "\\s*$",
        "gm"
      ).exec(a), F = /^(\s*)((?:Sub|Init)Plan)\s*(?:\d+\s*)?\s*(?:\(returns.*\)\s*)?$/gm.exec(a), M = /^(\s*)CTE\s+(\S+)\s*$/g.exec(a), lt = /^(\s*)Trigger\s+(.*):\s+time=(\d+\.\d+)\s+calls=(\d+)\s*$/g.exec(a), $ = new RegExp(
        /^(\s*)Worker\s+(\d+):\s+/.source + P + w + O + Z + "(.*)\\s*$",
        "g"
      ).exec(a), yt = /^(\s*)JIT:\s*$/g.exec(a), at = /^(\s*)(\S.*\S)\s*$/g.exec(a), ut = /\(slice(\d+)\)\s+(?:Executor\s+memory:\s*)?(?:(\d+?K\s+bytes))?(?:\s+avg\s+x\s+(\d+)?\s+workers)?(?:,\s*(\d+?K\s+bytes)\s+max\s+\(seg\d+\))?(?:\.\s+Work_mem:\s*(\d+?K\s+bytes)\s+max\.)?/.exec(a);
      if (!(v || G)) {
        if (y && !M && !F) {
          const Wt = y[19], Mt = new $P(y[2]);
          if (y[4] && (Mt[h.DYNAMIC_SCAN_ID] = parseInt(y[4])), y[5] && y[6] && y[7] && y[8] && (Mt[h.DATA_SLICE_COUNT] = parseInt(y[5]), Mt[h.NODE_COUNT] = parseInt(y[6]), Mt[h.SLICE_ID] = y[7], Mt[h.SEGMENTS_COUNT] = parseInt(y[8])), (y[9] && y[10] || y[20] && y[21]) && (Mt[h.STARTUP_COST] = parseFloat(
            y[9] || y[20]
          ), Mt[h.TOTAL_COST] = parseFloat(
            y[10] || y[21]
          ), Mt[h.PLAN_ROWS] = parseInt(
            y[11] || y[22],
            0
          ), Mt[h.PLAN_WIDTH] = parseInt(
            y[12] || y[23],
            0
          )), (y[13] && y[14] || y[24] && y[25]) && (Mt[h.ACTUAL_STARTUP_TIME] = parseFloat(
            y[13] || y[24]
          ), Mt[h.ACTUAL_TOTAL_TIME] = parseFloat(
            y[14] || y[25]
          )), y[15] && y[16] || y[17] && y[18] || y[26] && y[27]) {
            const nt = y[15] || y[17] || y[26];
            nt.indexOf(".") != -1 && (Mt[h.ACTUAL_ROWS_FRACTIONAL] = !0), Mt[h.ACTUAL_ROWS] = parseFloat(nt), Mt[h.ACTUAL_LOOPS] = parseInt(
              y[16] || y[18] || y[27],
              0
            );
          }
          Wt && (Mt[h.ACTUAL_LOOPS] = 0, Mt[h.ACTUAL_ROWS] = 0, Mt[h.ACTUAL_TOTAL_TIME] = 0);
          const fe = {
            node: Mt,
            subelementType: "subnode"
          };
          if (o.length === 0) {
            o.push([c, fe]), i.Plan = Mt;
            return;
          }
          K.remove(o, (nt) => nt[0] >= c);
          const ne = (Tt = K.last(o)) == null ? void 0 : Tt[1];
          if (!ne)
            return;
          o.push([c, fe]), ne.node[h.PLANS] || (ne.node[h.PLANS] = []), ne.subelementType === "initplan" ? (Mt[h.PARENT_RELATIONSHIP] = "InitPlan", Mt[h.SUBPLAN_NAME] = ne.name) : ne.subelementType === "subplan" && (Mt[h.PARENT_RELATIONSHIP] = "SubPlan", Mt[h.SUBPLAN_NAME] = ne.name), (q = ne.node.Plans) == null || q.push(Mt);
        } else if (F) {
          const Wt = F[2];
          K.remove(o, (ne) => ne[0] >= c);
          const Mt = (T = K.last(o)) == null ? void 0 : T[1], fe = {
            node: Mt == null ? void 0 : Mt.node,
            subelementType: Wt.toLowerCase(),
            name: F[0]
          };
          o.push([c, fe]);
        } else if (M) {
          const Wt = M[2];
          K.remove(o, (ne) => ne[0] >= c);
          const Mt = (Et = K.last(o)) == null ? void 0 : Et[1], fe = {
            node: Mt == null ? void 0 : Mt.node,
            subelementType: "initplan",
            name: "CTE " + Wt
          };
          o.push([c, fe]);
        } else if ($) {
          const Wt = parseInt($[2], 0), Mt = (bt = K.last(o)) == null ? void 0 : bt[1];
          if (!Mt)
            return;
          Mt.node[h.WORKERS] || (Mt.node[h.WORKERS] = []);
          let fe = this.getWorker(Mt.node, Wt);
          if (fe || (fe = new HP(Wt), (Bt = Mt.node[h.WORKERS]) == null || Bt.push(fe)), $[3] && $[4] && (fe[h.ACTUAL_STARTUP_TIME] = parseFloat($[3]), fe[h.ACTUAL_TOTAL_TIME] = parseFloat($[4]), fe[h.ACTUAL_ROWS] = parseInt($[5], 0), fe[h.ACTUAL_LOOPS] = parseInt($[6], 0)), this.parseSort($[10], fe))
            return;
          const ne = $[10].split(/: (.+)/).filter((nt) => nt);
          if ($[10]) {
            if (!ne[1])
              return;
            const nt = K.startCase(ne[0]);
            fe[nt] = ne[1];
          }
        } else if (lt)
          K.remove(o, (Wt) => Wt[0] >= c), i.Triggers = i.Triggers || [], i.Triggers.push({
            "Trigger Name": lt[2],
            Time: this.parseTime(lt[3]),
            Calls: lt[4]
          });
        else if (yt) {
          let Wt;
          if (o.length === 0)
            i.JIT = {}, Wt = {
              node: i.JIT
            }, o.push([1, Wt]);
          else {
            const Mt = (Ft = K.last(o)) == null ? void 0 : Ft[1];
            if (!Mt)
              return;
            if (K.last((xt = Mt.node) == null ? void 0 : xt[h.WORKERS])) {
              const fe = K.last(
                (ue = Mt.node) == null ? void 0 : ue[h.WORKERS]
              );
              fe.JIT = {}, Wt = {
                node: fe.JIT
              }, o.push([c, Wt]);
            }
          }
        } else if (ut) {
          K.remove(o, (Mt) => Mt[0] >= c || c == 1), i.Slice = i.Slice || [];
          const Wt = {
            [Ar.SLICE_NUM]: ut[1],
            ExecutorMemory: {
              [Br.AVERAGE_MEMORY]: ut[2],
              [Br.NUMBER_OF_WORKER_THREADS]: ut[3],
              [Br.MAXIMUM_MEMORY]: ut[4]
            },
            WorkMemory: ut[5]
          };
          i.Slice.push(Wt);
        } else if (at && !ut) {
          K.remove(o, (nt) => nt[0] >= c || c == 1);
          let Wt;
          if (o.length === 0 ? Wt = i : Wt = (He = K.last(o)) == null ? void 0 : He[1].node, !Wt.Plan && Wt["Query Text"]) {
            Wt["Query Text"] += `
` + a;
            return;
          }
          const Mt = at[2].split(/: (.+)/).filter((nt) => nt);
          if (!Mt[1] || !Wt || this.parseSort(at[2], Wt) || this.parseBuffers(at[2], Wt) || this.parseWAL(at[2], Wt) || this.parseIOTimings(at[2], Wt) || this.parseOptions(at[2], Wt) || this.parseTiming(at[2], Wt) || this.parseSettings(at[2], Wt) || this.parseSortGroups(at[2], Wt) || this.parseSortKey(at[2], Wt))
            return;
          let fe = Mt[1].replace(/(\s*ms)$/, "");
          parseFloat(fe) && (fe = parseFloat(fe));
          let ne = Mt[0];
          (ne.indexOf(" runtime") !== -1 || ne.indexOf(" time") !== -1) && (ne = K.startCase(ne)), Wt[ne] = fe;
        }
      }
    }), i == null || !i.Plan)
      throw new Error("Unable to parse plan");
    return i;
  }
  parseSortKey(e, n) {
    const o = /^\s*((?:Sort|Presorted) Key):\s+(.*)/g.exec(e);
    return o ? (n[o[1]] = K.map(zE(o[2], ","), K.trim), !0) : !1;
  }
  parseSort(e, n) {
    const o = /^(\s*)Sort Method:\s+(.*)\s+(Memory|Disk):\s+(?:(\S*)kB)\s*$/g.exec(e);
    return o ? (n[h.SORT_METHOD] = o[2].trim(), n[h.SORT_SPACE_USED] = o[4], n[h.SORT_SPACE_TYPE] = o[3], !0) : !1;
  }
  parseBuffers(e, n) {
    const o = /Buffers:\s+(.*)\s*$/g.exec(e);
    return o ? (K.each(o[1].split(/,\s+/), (a) => {
      const f = /(shared|temp|local)\s+(.*)$/g.exec(a);
      if (f) {
        const c = f[1];
        K.each(["hit", "read", "written", "dirtied"], (g) => {
          n[K.map([c, g, "blocks"], K.capitalize).join(" ")] = 0;
        }), K.each(f[2].split(/\s+/), (g) => {
          this.parseBuffer(g, c, n);
        });
      }
    }), !0) : !1;
  }
  parseBuffer(e, n, i) {
    const o = e.split(/=/), a = o[0], l = parseInt(o[1], 0);
    i[K.map([n, a, "blocks"], K.capitalize).join(" ")] = l;
  }
  getWorker(e, n) {
    return K.find(e[h.WORKERS], (i) => i[fa.WORKER_NUMBER] === n);
  }
  parseWAL(e, n) {
    const o = /WAL:\s+(.*)\s*$/g.exec(e);
    return o ? (K.each(["Records", "Bytes", "FPI"], (a) => {
      n["WAL " + a] = 0;
    }), K.each(o[1].split(/\s+/), (a) => {
      const l = a.split(/=/), f = l[0], c = parseInt(l[1], 0);
      let g;
      switch (f) {
        case "fpi":
          g = "FPI";
          break;
        default:
          g = K.capitalize(f);
      }
      n["WAL " + g] = c;
    }), !0) : !1;
  }
  parseIOTimings(e, n) {
    const o = /I\/O Timings:\s+(.*)\s*$/g.exec(e);
    return o ? (n[h.IO_READ_TIME] = 0, n[h.IO_WRITE_TIME] = 0, K.each(o[1].split(/\s+/), (a) => {
      const l = a.split(/=/), f = l[0], c = parseFloat(l[1]), g = "IO_" + K.upperCase(f) + "_TIME", p = h[g];
      n[p] = c;
    }), !0) : !1;
  }
  parseOptions(e, n) {
    const o = /^(\s*)Options:\s+(.*)$/g.exec(e);
    if (o) {
      n.Options = {};
      const a = o[2].split(/\s*,\s*/);
      let l;
      return K.each(a, (f) => {
        l = /^(\S*)\s+(.*)$/g.exec(f), l && n.Options && (n.Options[l[1]] = JSON.parse(l[2]));
      }), !0;
    }
    return !1;
  }
  parseTiming(e, n) {
    const o = /^(\s*)Timing:\s+(.*)$/g.exec(e);
    if (o) {
      n.Timing = {};
      const a = o[2].split(/\s*,\s*/);
      let l;
      return K.each(a, (f) => {
        l = /^(\S*)\s+(.*)$/g.exec(f), l && n.Timing && (n.Timing[l[1]] = this.parseTime(l[2]));
      }), !0;
    }
    return !1;
  }
  parseTime(e) {
    return parseFloat(e.replace(/(\s*ms)$/, ""));
  }
  parseSettings(e, n) {
    const o = /^(\s*)Settings:\s*(.*)$/g.exec(e);
    if (o) {
      n.Settings = {};
      const a = zE(o[2], ",");
      let l;
      return K.each(a, (f) => {
        l = /^(\S*)\s+=\s+(.*)$/g.exec(K.trim(f)), l && n.Settings && (n.Settings[l[1]] = l[2].replace(/'/g, ""));
      }), !0;
    }
    return !1;
  }
  parseSortGroups(e, n) {
    const o = /^\s*(Full-sort|Pre-sorted) Groups:\s+([0-9]*)\s+Sort Method[s]*:\s+(.*)\s+Average Memory:\s+(\S*)kB\s+Peak Memory:\s+(\S*)kB.*$/g.exec(e);
    if (o) {
      const a = {
        [Ll.GROUP_COUNT]: parseInt(o[2], 0),
        [Ll.SORT_METHODS_USED]: K.map(
          o[3].split(","),
          K.trim
        ),
        [Ll.SORT_SPACE_MEMORY]: {
          [Lc.AVERAGE_SORT_SPACE_USED]: parseInt(
            o[4],
            0
          ),
          [Lc.PEAK_SORT_SPACE_USED]: parseInt(o[5], 0)
        }
      };
      if (o[1] === "Full-sort")
        n[h.FULL_SORT_GROUPS] = a;
      else if (o[1] === "Pre-sorted")
        n[h.PRE_SORTED_GROUPS] = a;
      else
        throw new Error("Unsupported sort groups method");
      return !0;
    }
    return !1;
  }
  calculateExclusives(e) {
    const n = [
      "SHARED_HIT_BLOCKS",
      "SHARED_READ_BLOCKS",
      "SHARED_DIRTIED_BLOCKS",
      "SHARED_WRITTEN_BLOCKS",
      "TEMP_READ_BLOCKS",
      "TEMP_WRITTEN_BLOCKS",
      "LOCAL_HIT_BLOCKS",
      "LOCAL_READ_BLOCKS",
      "LOCAL_DIRTIED_BLOCKS",
      "LOCAL_WRITTEN_BLOCKS",
      "IO_READ_TIME",
      "IO_WRITE_TIME"
    ];
    K.each(n, (i) => {
      const o = K.sumBy(e[h.PLANS], (f) => f[h[i]] || 0), a = "EXCLUSIVE_" + i, l = h[a];
      e[l] = e[h[i]] - o;
    });
  }
  calculateIoTimingsAverage(e) {
    const n = e[h.EXCLUSIVE_IO_READ_TIME] || 0;
    if (n) {
      const o = e[h.EXCLUSIVE_SHARED_READ_BLOCKS] || 0, a = e[h.EXCLUSIVE_LOCAL_READ_BLOCKS] || 0;
      e[h.AVERAGE_IO_READ_SPEED] = (o + a) / (n / 1e3);
    }
    const i = e[h.EXCLUSIVE_IO_WRITE_TIME] || 0;
    if (i) {
      const o = e[h.EXCLUSIVE_SHARED_WRITTEN_BLOCKS] || 0, a = e[h.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] || 0;
      e[h.AVERAGE_IO_WRITE_SPEED] = (o + a) / (i / 1e3);
    }
  }
  findOutputProperty(e) {
    const n = e.Plans;
    return n ? K.some(n, (i) => K.has(i, h.OUTPUT) || this.findOutputProperty(i)) : !1;
  }
  convertNodeType(e) {
    if (e[h.NODE_TYPE] == "Aggregate" && e[h.STRATEGY]) {
      let n = "";
      switch (e[h.STRATEGY]) {
        case "Sorted":
          n = "Group";
          break;
        case "Hashed":
          n = "Hash";
          break;
        case "Plain":
          n = "";
          break;
        default:
          console.error("Unsupported Aggregate Strategy");
      }
      e[h.NODE_TYPE] = n + "Aggregate";
    }
  }
}
Kt(p0, "instance");
function Nl(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function zP(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function h0(t) {
  let e, n, i;
  t.length !== 2 ? (e = Nl, n = (f, c) => Nl(t(f), c), i = (f, c) => t(f) - c) : (e = t === Nl || t === zP ? t : YP, n = t, i = t);
  function o(f, c, g = 0, p = f.length) {
    if (g < p) {
      if (e(c, c) !== 0) return p;
      do {
        const _ = g + p >>> 1;
        n(f[_], c) < 0 ? g = _ + 1 : p = _;
      } while (g < p);
    }
    return g;
  }
  function a(f, c, g = 0, p = f.length) {
    if (g < p) {
      if (e(c, c) !== 0) return p;
      do {
        const _ = g + p >>> 1;
        n(f[_], c) <= 0 ? g = _ + 1 : p = _;
      } while (g < p);
    }
    return g;
  }
  function l(f, c, g = 0, p = f.length) {
    const _ = o(f, c, g, p - 1);
    return _ > g && i(f[_ - 1], c) > -i(f[_], c) ? _ - 1 : _;
  }
  return { left: o, center: l, right: a };
}
function YP() {
  return 0;
}
function KP(t) {
  return t === null ? NaN : +t;
}
const jP = h0(Nl), qP = jP.right;
h0(KP).center;
var Pc = Math.sqrt(50), Uc = Math.sqrt(10), kc = Math.sqrt(2);
function JP(t, e, n) {
  var i, o = -1, a, l, f;
  if (e = +e, t = +t, n = +n, t === e && n > 0) return [t];
  if ((i = e < t) && (a = t, t = e, e = a), (f = E0(t, e, n)) === 0 || !isFinite(f)) return [];
  if (f > 0) {
    let c = Math.round(t / f), g = Math.round(e / f);
    for (c * f < t && ++c, g * f > e && --g, l = new Array(a = g - c + 1); ++o < a; ) l[o] = (c + o) * f;
  } else {
    f = -f;
    let c = Math.round(t * f), g = Math.round(e * f);
    for (c / f < t && ++c, g / f > e && --g, l = new Array(a = g - c + 1); ++o < a; ) l[o] = (c + o) / f;
  }
  return i && l.reverse(), l;
}
function E0(t, e, n) {
  var i = (e - t) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), a = i / Math.pow(10, o);
  return o >= 0 ? (a >= Pc ? 10 : a >= Uc ? 5 : a >= kc ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= Pc ? 10 : a >= Uc ? 5 : a >= kc ? 2 : 1);
}
function QP(t, e, n) {
  var i = Math.abs(e - t) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), a = i / o;
  return a >= Pc ? o *= 10 : a >= Uc ? o *= 5 : a >= kc && (o *= 2), e < t ? -o : o;
}
var ZP = { value: () => {
} };
function Cd() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new xl(n);
}
function xl(t) {
  this._ = t;
}
function tU(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
xl.prototype = Cd.prototype = {
  constructor: xl,
  on: function(t, e) {
    var n = this._, i = tU(t + "", n), o, a = -1, l = i.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((o = (t = i[a]).type) && (o = eU(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < l; )
      if (o = (t = i[a]).type) n[o] = _g(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = _g(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new xl(t);
  },
  call: function(t, e) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), i = 0, o, a; i < o; ++i) n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], i = 0, o = a.length; i < o; ++i) a[i].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var i = this._[t], o = 0, a = i.length; o < a; ++o) i[o].value.apply(e, n);
  }
};
function eU(t, e) {
  for (var n = 0, i = t.length, o; n < i; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function _g(t, e, n) {
  for (var i = 0, o = t.length; i < o; ++i)
    if (t[i].name === e) {
      t[i] = ZP, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Bc = "http://www.w3.org/1999/xhtml";
const Tg = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bc,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Eu(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Tg.hasOwnProperty(e) ? { space: Tg[e], local: t } : t;
}
function nU(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Bc && e.documentElement.namespaceURI === Bc ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function rU(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function g0(t) {
  var e = Eu(t);
  return (e.local ? rU : nU)(e);
}
function iU() {
}
function Nd(t) {
  return t == null ? iU : function() {
    return this.querySelector(t);
  };
}
function sU(t) {
  typeof t != "function" && (t = Nd(t));
  for (var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)
    for (var a = e[o], l = a.length, f = i[o] = new Array(l), c, g, p = 0; p < l; ++p)
      (c = a[p]) && (g = t.call(c, c.__data__, p, a)) && ("__data__" in c && (g.__data__ = c.__data__), f[p] = g);
  return new qn(i, this._parents);
}
function oU(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function aU() {
  return [];
}
function v0(t) {
  return t == null ? aU : function() {
    return this.querySelectorAll(t);
  };
}
function lU(t) {
  return function() {
    return oU(t.apply(this, arguments));
  };
}
function uU(t) {
  typeof t == "function" ? t = lU(t) : t = v0(t);
  for (var e = this._groups, n = e.length, i = [], o = [], a = 0; a < n; ++a)
    for (var l = e[a], f = l.length, c, g = 0; g < f; ++g)
      (c = l[g]) && (i.push(t.call(c, c.__data__, g, l)), o.push(c));
  return new qn(i, o);
}
function m0(t) {
  return function() {
    return this.matches(t);
  };
}
function _0(t) {
  return function(e) {
    return e.matches(t);
  };
}
var fU = Array.prototype.find;
function cU(t) {
  return function() {
    return fU.call(this.children, t);
  };
}
function dU() {
  return this.firstElementChild;
}
function pU(t) {
  return this.select(t == null ? dU : cU(typeof t == "function" ? t : _0(t)));
}
var hU = Array.prototype.filter;
function EU() {
  return Array.from(this.children);
}
function gU(t) {
  return function() {
    return hU.call(this.children, t);
  };
}
function vU(t) {
  return this.selectAll(t == null ? EU : gU(typeof t == "function" ? t : _0(t)));
}
function mU(t) {
  typeof t != "function" && (t = m0(t));
  for (var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)
    for (var a = e[o], l = a.length, f = i[o] = [], c, g = 0; g < l; ++g)
      (c = a[g]) && t.call(c, c.__data__, g, a) && f.push(c);
  return new qn(i, this._parents);
}
function T0(t) {
  return new Array(t.length);
}
function _U() {
  return new qn(this._enter || this._groups.map(T0), this._parents);
}
function Gl(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Gl.prototype = {
  constructor: Gl,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function TU(t) {
  return function() {
    return t;
  };
}
function AU(t, e, n, i, o, a) {
  for (var l = 0, f, c = e.length, g = a.length; l < g; ++l)
    (f = e[l]) ? (f.__data__ = a[l], i[l] = f) : n[l] = new Gl(t, a[l]);
  for (; l < c; ++l)
    (f = e[l]) && (o[l] = f);
}
function SU(t, e, n, i, o, a, l) {
  var f, c, g = /* @__PURE__ */ new Map(), p = e.length, _ = a.length, R = new Array(p), x;
  for (f = 0; f < p; ++f)
    (c = e[f]) && (R[f] = x = l.call(c, c.__data__, f, e) + "", g.has(x) ? o[f] = c : g.set(x, c));
  for (f = 0; f < _; ++f)
    x = l.call(t, a[f], f, a) + "", (c = g.get(x)) ? (i[f] = c, c.__data__ = a[f], g.delete(x)) : n[f] = new Gl(t, a[f]);
  for (f = 0; f < p; ++f)
    (c = e[f]) && g.get(R[f]) === c && (o[f] = c);
}
function yU(t) {
  return t.__data__;
}
function OU(t, e) {
  if (!arguments.length) return Array.from(this, yU);
  var n = e ? SU : AU, i = this._parents, o = this._groups;
  typeof t != "function" && (t = TU(t));
  for (var a = o.length, l = new Array(a), f = new Array(a), c = new Array(a), g = 0; g < a; ++g) {
    var p = i[g], _ = o[g], R = _.length, x = RU(t.call(p, p && p.__data__, g, i)), P = x.length, O = f[g] = new Array(P), W = l[g] = new Array(P), b = c[g] = new Array(R);
    n(p, _, O, W, b, x, e);
    for (var w = 0, Z = 0, v, G; w < P; ++w)
      if (v = O[w]) {
        for (w >= Z && (Z = w + 1); !(G = W[Z]) && ++Z < P; ) ;
        v._next = G || null;
      }
  }
  return l = new qn(l, i), l._enter = f, l._exit = c, l;
}
function RU(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function bU() {
  return new qn(this._exit || this._groups.map(T0), this._parents);
}
function IU(t, e, n) {
  var i = this.enter(), o = this, a = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? a.remove() : n(a), i && o ? i.merge(o).order() : o;
}
function LU(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, o = n.length, a = i.length, l = Math.min(o, a), f = new Array(o), c = 0; c < l; ++c)
    for (var g = n[c], p = i[c], _ = g.length, R = f[c] = new Array(_), x, P = 0; P < _; ++P)
      (x = g[P] || p[P]) && (R[P] = x);
  for (; c < o; ++c)
    f[c] = n[c];
  return new qn(f, this._parents);
}
function CU() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], o = i.length - 1, a = i[o], l; --o >= 0; )
      (l = i[o]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function NU(t) {
  t || (t = xU);
  function e(_, R) {
    return _ && R ? t(_.__data__, R.__data__) : !_ - !R;
  }
  for (var n = this._groups, i = n.length, o = new Array(i), a = 0; a < i; ++a) {
    for (var l = n[a], f = l.length, c = o[a] = new Array(f), g, p = 0; p < f; ++p)
      (g = l[p]) && (c[p] = g);
    c.sort(e);
  }
  return new qn(o, this._parents).order();
}
function xU(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function wU() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function MU() {
  return Array.from(this);
}
function DU() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], o = 0, a = i.length; o < a; ++o) {
      var l = i[o];
      if (l) return l;
    }
  return null;
}
function PU() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function UU() {
  return !this.node();
}
function kU(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var o = e[n], a = 0, l = o.length, f; a < l; ++a)
      (f = o[a]) && t.call(f, f.__data__, a, o);
  return this;
}
function BU(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $U(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function HU(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function FU(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function WU(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function VU(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function XU(t, e) {
  var n = Eu(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? $U : BU : typeof e == "function" ? n.local ? VU : WU : n.local ? FU : HU)(n, e));
}
function A0(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function GU(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function zU(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function YU(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function KU(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? GU : typeof e == "function" ? YU : zU)(t, e, n ?? "")) : ro(this.node(), t);
}
function ro(t, e) {
  return t.style.getPropertyValue(e) || A0(t).getComputedStyle(t, null).getPropertyValue(e);
}
function jU(t) {
  return function() {
    delete this[t];
  };
}
function qU(t, e) {
  return function() {
    this[t] = e;
  };
}
function JU(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function QU(t, e) {
  return arguments.length > 1 ? this.each((e == null ? jU : typeof e == "function" ? JU : qU)(t, e)) : this.node()[t];
}
function S0(t) {
  return t.trim().split(/^|\s+/);
}
function xd(t) {
  return t.classList || new y0(t);
}
function y0(t) {
  this._node = t, this._names = S0(t.getAttribute("class") || "");
}
y0.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function O0(t, e) {
  for (var n = xd(t), i = -1, o = e.length; ++i < o; ) n.add(e[i]);
}
function R0(t, e) {
  for (var n = xd(t), i = -1, o = e.length; ++i < o; ) n.remove(e[i]);
}
function ZU(t) {
  return function() {
    O0(this, t);
  };
}
function t4(t) {
  return function() {
    R0(this, t);
  };
}
function e4(t, e) {
  return function() {
    (e.apply(this, arguments) ? O0 : R0)(this, t);
  };
}
function n4(t, e) {
  var n = S0(t + "");
  if (arguments.length < 2) {
    for (var i = xd(this.node()), o = -1, a = n.length; ++o < a; ) if (!i.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? e4 : e ? ZU : t4)(n, e));
}
function r4() {
  this.textContent = "";
}
function i4(t) {
  return function() {
    this.textContent = t;
  };
}
function s4(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function o4(t) {
  return arguments.length ? this.each(t == null ? r4 : (typeof t == "function" ? s4 : i4)(t)) : this.node().textContent;
}
function a4() {
  this.innerHTML = "";
}
function l4(t) {
  return function() {
    this.innerHTML = t;
  };
}
function u4(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function f4(t) {
  return arguments.length ? this.each(t == null ? a4 : (typeof t == "function" ? u4 : l4)(t)) : this.node().innerHTML;
}
function c4() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function d4() {
  return this.each(c4);
}
function p4() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function h4() {
  return this.each(p4);
}
function E4(t) {
  var e = typeof t == "function" ? t : g0(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function g4() {
  return null;
}
function v4(t, e) {
  var n = typeof t == "function" ? t : g0(t), i = e == null ? g4 : typeof e == "function" ? e : Nd(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function m4() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function _4() {
  return this.each(m4);
}
function T4() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function A4() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function S4(t) {
  return this.select(t ? A4 : T4);
}
function y4(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function O4(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function R4(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function b4(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, o = e.length, a; n < o; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++i] = a;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function I4(t, e, n) {
  return function() {
    var i = this.__on, o, a = O4(e);
    if (i) {
      for (var l = 0, f = i.length; l < f; ++l)
        if ((o = i[l]).type === t.type && o.name === t.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), o = { type: t.type, name: t.name, value: e, listener: a, options: n }, i ? i.push(o) : this.__on = [o];
  };
}
function L4(t, e, n) {
  var i = R4(t + ""), o, a = i.length, l;
  if (arguments.length < 2) {
    var f = this.node().__on;
    if (f) {
      for (var c = 0, g = f.length, p; c < g; ++c)
        for (o = 0, p = f[c]; o < a; ++o)
          if ((l = i[o]).type === p.type && l.name === p.name)
            return p.value;
    }
    return;
  }
  for (f = e ? I4 : b4, o = 0; o < a; ++o) this.each(f(i[o], e, n));
  return this;
}
function b0(t, e, n) {
  var i = A0(t), o = i.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function C4(t, e) {
  return function() {
    return b0(this, t, e);
  };
}
function N4(t, e) {
  return function() {
    return b0(this, t, e.apply(this, arguments));
  };
}
function x4(t, e) {
  return this.each((typeof e == "function" ? N4 : C4)(t, e));
}
function* w4() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], o = 0, a = i.length, l; o < a; ++o)
      (l = i[o]) && (yield l);
}
var I0 = [null];
function qn(t, e) {
  this._groups = t, this._parents = e;
}
function pa() {
  return new qn([[document.documentElement]], I0);
}
function M4() {
  return this;
}
qn.prototype = pa.prototype = {
  constructor: qn,
  select: sU,
  selectAll: uU,
  selectChild: pU,
  selectChildren: vU,
  filter: mU,
  data: OU,
  enter: _U,
  exit: bU,
  join: IU,
  merge: LU,
  selection: M4,
  order: CU,
  sort: NU,
  call: wU,
  nodes: MU,
  node: DU,
  size: PU,
  empty: UU,
  each: kU,
  attr: XU,
  style: KU,
  property: QU,
  classed: n4,
  text: o4,
  html: f4,
  raise: d4,
  lower: h4,
  append: E4,
  insert: v4,
  remove: _4,
  clone: S4,
  datum: y4,
  on: L4,
  dispatch: x4,
  [Symbol.iterator]: w4
};
function Hr(t) {
  return typeof t == "string" ? new qn([[document.querySelector(t)]], [document.documentElement]) : new qn([[t]], I0);
}
function D4(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function ts(t, e) {
  if (t = D4(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var i = n.createSVGPoint();
      return i.x = t.clientX, i.y = t.clientY, i = i.matrixTransform(e.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect();
      return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const $c = { capture: !0, passive: !1 };
function Hc(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function P4(t) {
  var e = t.document.documentElement, n = Hr(t).on("dragstart.drag", Hc, $c);
  "onselectstart" in e ? n.on("selectstart.drag", Hc, $c) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function U4(t, e) {
  var n = t.document.documentElement, i = Hr(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Hc, $c), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function wd(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function L0(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e) n[i] = e[i];
  return n;
}
function ha() {
}
var ra = 0.7, zl = 1 / ra, Gs = "\\s*([+-]?\\d+)\\s*", ia = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", zr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", k4 = /^#([0-9a-f]{3,8})$/, B4 = new RegExp(`^rgb\\(${Gs},${Gs},${Gs}\\)$`), $4 = new RegExp(`^rgb\\(${zr},${zr},${zr}\\)$`), H4 = new RegExp(`^rgba\\(${Gs},${Gs},${Gs},${ia}\\)$`), F4 = new RegExp(`^rgba\\(${zr},${zr},${zr},${ia}\\)$`), W4 = new RegExp(`^hsl\\(${ia},${zr},${zr}\\)$`), V4 = new RegExp(`^hsla\\(${ia},${zr},${zr},${ia}\\)$`), Ag = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
wd(ha, vs, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Sg,
  // Deprecated! Use color.formatHex.
  formatHex: Sg,
  formatHex8: X4,
  formatHsl: G4,
  formatRgb: yg,
  toString: yg
});
function Sg() {
  return this.rgb().formatHex();
}
function X4() {
  return this.rgb().formatHex8();
}
function G4() {
  return C0(this).formatHsl();
}
function yg() {
  return this.rgb().formatRgb();
}
function vs(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = k4.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Og(e) : n === 3 ? new Pn(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? _l(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? _l(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = B4.exec(t)) ? new Pn(e[1], e[2], e[3], 1) : (e = $4.exec(t)) ? new Pn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = H4.exec(t)) ? _l(e[1], e[2], e[3], e[4]) : (e = F4.exec(t)) ? _l(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = W4.exec(t)) ? Ig(e[1], e[2] / 100, e[3] / 100, 1) : (e = V4.exec(t)) ? Ig(e[1], e[2] / 100, e[3] / 100, e[4]) : Ag.hasOwnProperty(t) ? Og(Ag[t]) : t === "transparent" ? new Pn(NaN, NaN, NaN, 0) : null;
}
function Og(t) {
  return new Pn(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function _l(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Pn(t, e, n, i);
}
function z4(t) {
  return t instanceof ha || (t = vs(t)), t ? (t = t.rgb(), new Pn(t.r, t.g, t.b, t.opacity)) : new Pn();
}
function Fc(t, e, n, i) {
  return arguments.length === 1 ? z4(t) : new Pn(t, e, n, i ?? 1);
}
function Pn(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
wd(Pn, Fc, L0(ha, {
  brighter(t) {
    return t = t == null ? zl : Math.pow(zl, t), new Pn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ra : Math.pow(ra, t), new Pn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pn(ds(this.r), ds(this.g), ds(this.b), Yl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Rg,
  // Deprecated! Use color.formatHex.
  formatHex: Rg,
  formatHex8: Y4,
  formatRgb: bg,
  toString: bg
}));
function Rg() {
  return `#${ls(this.r)}${ls(this.g)}${ls(this.b)}`;
}
function Y4() {
  return `#${ls(this.r)}${ls(this.g)}${ls(this.b)}${ls((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bg() {
  const t = Yl(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ds(this.r)}, ${ds(this.g)}, ${ds(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Yl(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ds(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ls(t) {
  return t = ds(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ig(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Rr(t, e, n, i);
}
function C0(t) {
  if (t instanceof Rr) return new Rr(t.h, t.s, t.l, t.opacity);
  if (t instanceof ha || (t = vs(t)), !t) return new Rr();
  if (t instanceof Rr) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, o = Math.min(e, n, i), a = Math.max(e, n, i), l = NaN, f = a - o, c = (a + o) / 2;
  return f ? (e === a ? l = (n - i) / f + (n < i) * 6 : n === a ? l = (i - e) / f + 2 : l = (e - n) / f + 4, f /= c < 0.5 ? a + o : 2 - a - o, l *= 60) : f = c > 0 && c < 1 ? 0 : l, new Rr(l, f, c, t.opacity);
}
function K4(t, e, n, i) {
  return arguments.length === 1 ? C0(t) : new Rr(t, e, n, i ?? 1);
}
function Rr(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
wd(Rr, K4, L0(ha, {
  brighter(t) {
    return t = t == null ? zl : Math.pow(zl, t), new Rr(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ra : Math.pow(ra, t), new Rr(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - i;
    return new Pn(
      nc(t >= 240 ? t - 240 : t + 120, o, i),
      nc(t, o, i),
      nc(t < 120 ? t + 240 : t - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new Rr(Lg(this.h), Tl(this.s), Tl(this.l), Yl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Yl(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Lg(this.h)}, ${Tl(this.s) * 100}%, ${Tl(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Lg(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Tl(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function nc(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Md = (t) => () => t;
function j4(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function q4(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function J4(t) {
  return (t = +t) == 1 ? N0 : function(e, n) {
    return n - e ? q4(e, n, t) : Md(isNaN(e) ? n : e);
  };
}
function N0(t, e) {
  var n = e - t;
  return n ? j4(t, n) : Md(isNaN(t) ? e : t);
}
const Kl = function t(e) {
  var n = J4(e);
  function i(o, a) {
    var l = n((o = Fc(o)).r, (a = Fc(a)).r), f = n(o.g, a.g), c = n(o.b, a.b), g = N0(o.opacity, a.opacity);
    return function(p) {
      return o.r = l(p), o.g = f(p), o.b = c(p), o.opacity = g(p), o + "";
    };
  }
  return i.gamma = t, i;
}(1);
function Q4(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), o;
  return function(a) {
    for (o = 0; o < n; ++o) i[o] = t[o] * (1 - a) + e[o] * a;
    return i;
  };
}
function Z4(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function tk(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, o = new Array(i), a = new Array(n), l;
  for (l = 0; l < i; ++l) o[l] = Dd(t[l], e[l]);
  for (; l < n; ++l) a[l] = e[l];
  return function(f) {
    for (l = 0; l < i; ++l) a[l] = o[l](f);
    return a;
  };
}
function ek(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function yr(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function nk(t, e) {
  var n = {}, i = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Dd(t[o], e[o]) : i[o] = e[o];
  return function(a) {
    for (o in n) i[o] = n[o](a);
    return i;
  };
}
var Wc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rc = new RegExp(Wc.source, "g");
function rk(t) {
  return function() {
    return t;
  };
}
function ik(t) {
  return function(e) {
    return t(e) + "";
  };
}
function x0(t, e) {
  var n = Wc.lastIndex = rc.lastIndex = 0, i, o, a, l = -1, f = [], c = [];
  for (t = t + "", e = e + ""; (i = Wc.exec(t)) && (o = rc.exec(e)); )
    (a = o.index) > n && (a = e.slice(n, a), f[l] ? f[l] += a : f[++l] = a), (i = i[0]) === (o = o[0]) ? f[l] ? f[l] += o : f[++l] = o : (f[++l] = null, c.push({ i: l, x: yr(i, o) })), n = rc.lastIndex;
  return n < e.length && (a = e.slice(n), f[l] ? f[l] += a : f[++l] = a), f.length < 2 ? c[0] ? ik(c[0].x) : rk(e) : (e = c.length, function(g) {
    for (var p = 0, _; p < e; ++p) f[(_ = c[p]).i] = _.x(g);
    return f.join("");
  });
}
function Dd(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? Md(e) : (n === "number" ? yr : n === "string" ? (i = vs(e)) ? (e = i, Kl) : x0 : e instanceof vs ? Kl : e instanceof Date ? ek : Z4(e) ? Q4 : Array.isArray(e) ? tk : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? nk : yr)(t, e);
}
function sk(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Cg = 180 / Math.PI, Vc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function w0(t, e, n, i, o, a) {
  var l, f, c;
  return (l = Math.sqrt(t * t + e * e)) && (t /= l, e /= l), (c = t * n + e * i) && (n -= t * c, i -= e * c), (f = Math.sqrt(n * n + i * i)) && (n /= f, i /= f, c /= f), t * i < e * n && (t = -t, e = -e, c = -c, l = -l), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(e, t) * Cg,
    skewX: Math.atan(c) * Cg,
    scaleX: l,
    scaleY: f
  };
}
var Al;
function ok(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Vc : w0(e.a, e.b, e.c, e.d, e.e, e.f);
}
function ak(t) {
  return t == null || (Al || (Al = document.createElementNS("http://www.w3.org/2000/svg", "g")), Al.setAttribute("transform", t), !(t = Al.transform.baseVal.consolidate())) ? Vc : (t = t.matrix, w0(t.a, t.b, t.c, t.d, t.e, t.f));
}
function M0(t, e, n, i) {
  function o(g) {
    return g.length ? g.pop() + " " : "";
  }
  function a(g, p, _, R, x, P) {
    if (g !== _ || p !== R) {
      var O = x.push("translate(", null, e, null, n);
      P.push({ i: O - 4, x: yr(g, _) }, { i: O - 2, x: yr(p, R) });
    } else (_ || R) && x.push("translate(" + _ + e + R + n);
  }
  function l(g, p, _, R) {
    g !== p ? (g - p > 180 ? p += 360 : p - g > 180 && (g += 360), R.push({ i: _.push(o(_) + "rotate(", null, i) - 2, x: yr(g, p) })) : p && _.push(o(_) + "rotate(" + p + i);
  }
  function f(g, p, _, R) {
    g !== p ? R.push({ i: _.push(o(_) + "skewX(", null, i) - 2, x: yr(g, p) }) : p && _.push(o(_) + "skewX(" + p + i);
  }
  function c(g, p, _, R, x, P) {
    if (g !== _ || p !== R) {
      var O = x.push(o(x) + "scale(", null, ",", null, ")");
      P.push({ i: O - 4, x: yr(g, _) }, { i: O - 2, x: yr(p, R) });
    } else (_ !== 1 || R !== 1) && x.push(o(x) + "scale(" + _ + "," + R + ")");
  }
  return function(g, p) {
    var _ = [], R = [];
    return g = t(g), p = t(p), a(g.translateX, g.translateY, p.translateX, p.translateY, _, R), l(g.rotate, p.rotate, _, R), f(g.skewX, p.skewX, _, R), c(g.scaleX, g.scaleY, p.scaleX, p.scaleY, _, R), g = p = null, function(x) {
      for (var P = -1, O = R.length, W; ++P < O; ) _[(W = R[P]).i] = W.x(x);
      return _.join("");
    };
  };
}
var lk = M0(ok, "px, ", "px)", "deg)"), uk = M0(ak, ", ", ")", ")"), fk = 1e-12;
function Ng(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function ck(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function dk(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const pk = function t(e, n, i) {
  function o(a, l) {
    var f = a[0], c = a[1], g = a[2], p = l[0], _ = l[1], R = l[2], x = p - f, P = _ - c, O = x * x + P * P, W, b;
    if (O < fk)
      b = Math.log(R / g) / e, W = function(B) {
        return [
          f + B * x,
          c + B * P,
          g * Math.exp(e * B * b)
        ];
      };
    else {
      var w = Math.sqrt(O), Z = (R * R - g * g + i * O) / (2 * g * n * w), v = (R * R - g * g - i * O) / (2 * R * n * w), G = Math.log(Math.sqrt(Z * Z + 1) - Z), L = Math.log(Math.sqrt(v * v + 1) - v);
      b = (L - G) / e, W = function(B) {
        var U = B * b, y = Ng(G), tt = g / (n * w) * (y * dk(e * U + G) - ck(G));
        return [
          f + tt * x,
          c + tt * P,
          g * y / Ng(e * U + G)
        ];
      };
    }
    return W.duration = b * 1e3 * e / Math.SQRT2, W;
  }
  return o.rho = function(a) {
    var l = Math.max(1e-3, +a), f = l * l, c = f * f;
    return t(l, f, c);
  }, o;
}(Math.SQRT2, 2, 4);
var io = 0, $o = 0, Po = 0, D0 = 1e3, jl, Ho, ql = 0, ms = 0, gu = 0, sa = typeof performance == "object" && performance.now ? performance : Date, P0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pd() {
  return ms || (P0(hk), ms = sa.now() + gu);
}
function hk() {
  ms = 0;
}
function Jl() {
  this._call = this._time = this._next = null;
}
Jl.prototype = U0.prototype = {
  constructor: Jl,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Pd() : +n) + (e == null ? 0 : +e), !this._next && Ho !== this && (Ho ? Ho._next = this : jl = this, Ho = this), this._call = t, this._time = n, Xc();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xc());
  }
};
function U0(t, e, n) {
  var i = new Jl();
  return i.restart(t, e, n), i;
}
function Ek() {
  Pd(), ++io;
  for (var t = jl, e; t; )
    (e = ms - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --io;
}
function xg() {
  ms = (ql = sa.now()) + gu, io = $o = 0;
  try {
    Ek();
  } finally {
    io = 0, vk(), ms = 0;
  }
}
function gk() {
  var t = sa.now(), e = t - ql;
  e > D0 && (gu -= e, ql = t);
}
function vk() {
  for (var t, e = jl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : jl = n);
  Ho = t, Xc(i);
}
function Xc(t) {
  if (!io) {
    $o && ($o = clearTimeout($o));
    var e = t - ms;
    e > 24 ? (t < 1 / 0 && ($o = setTimeout(xg, t - sa.now() - gu)), Po && (Po = clearInterval(Po))) : (Po || (ql = sa.now(), Po = setInterval(gk, D0)), io = 1, P0(xg));
  }
}
function wg(t, e, n) {
  var i = new Jl();
  return e = e == null ? 0 : +e, i.restart((o) => {
    i.stop(), t(o + e);
  }, e, n), i;
}
var mk = Cd("start", "end", "cancel", "interrupt"), _k = [], k0 = 0, Mg = 1, Gc = 2, wl = 3, Dg = 4, zc = 5, Ml = 6;
function vu(t, e, n, i, o, a) {
  var l = t.__transition;
  if (!l) t.__transition = {};
  else if (n in l) return;
  Tk(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: o,
    // For context during callback.
    on: mk,
    tween: _k,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: k0
  });
}
function Ud(t, e) {
  var n = Nr(t, e);
  if (n.state > k0) throw new Error("too late; already scheduled");
  return n;
}
function qr(t, e) {
  var n = Nr(t, e);
  if (n.state > wl) throw new Error("too late; already running");
  return n;
}
function Nr(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Tk(t, e, n) {
  var i = t.__transition, o;
  i[e] = n, n.timer = U0(a, 0, n.time);
  function a(g) {
    n.state = Mg, n.timer.restart(l, n.delay, n.time), n.delay <= g && l(g - n.delay);
  }
  function l(g) {
    var p, _, R, x;
    if (n.state !== Mg) return c();
    for (p in i)
      if (x = i[p], x.name === n.name) {
        if (x.state === wl) return wg(l);
        x.state === Dg ? (x.state = Ml, x.timer.stop(), x.on.call("interrupt", t, t.__data__, x.index, x.group), delete i[p]) : +p < e && (x.state = Ml, x.timer.stop(), x.on.call("cancel", t, t.__data__, x.index, x.group), delete i[p]);
      }
    if (wg(function() {
      n.state === wl && (n.state = Dg, n.timer.restart(f, n.delay, n.time), f(g));
    }), n.state = Gc, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Gc) {
      for (n.state = wl, o = new Array(R = n.tween.length), p = 0, _ = -1; p < R; ++p)
        (x = n.tween[p].value.call(t, t.__data__, n.index, n.group)) && (o[++_] = x);
      o.length = _ + 1;
    }
  }
  function f(g) {
    for (var p = g < n.duration ? n.ease.call(null, g / n.duration) : (n.timer.restart(c), n.state = zc, 1), _ = -1, R = o.length; ++_ < R; )
      o[_].call(t, p);
    n.state === zc && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Ml, n.timer.stop(), delete i[e];
    for (var g in i) return;
    delete t.__transition;
  }
}
function Dl(t, e) {
  var n = t.__transition, i, o, a = !0, l;
  if (n) {
    e = e == null ? null : e + "";
    for (l in n) {
      if ((i = n[l]).name !== e) {
        a = !1;
        continue;
      }
      o = i.state > Gc && i.state < zc, i.state = Ml, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[l];
    }
    a && delete t.__transition;
  }
}
function Ak(t) {
  return this.each(function() {
    Dl(this, t);
  });
}
function Sk(t, e) {
  var n, i;
  return function() {
    var o = qr(this, t), a = o.tween;
    if (a !== n) {
      i = n = a;
      for (var l = 0, f = i.length; l < f; ++l)
        if (i[l].name === e) {
          i = i.slice(), i.splice(l, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function yk(t, e, n) {
  var i, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = qr(this, t), l = a.tween;
    if (l !== i) {
      o = (i = l).slice();
      for (var f = { name: e, value: n }, c = 0, g = o.length; c < g; ++c)
        if (o[c].name === e) {
          o[c] = f;
          break;
        }
      c === g && o.push(f);
    }
    a.tween = o;
  };
}
function Ok(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = Nr(this.node(), n).tween, o = 0, a = i.length, l; o < a; ++o)
      if ((l = i[o]).name === t)
        return l.value;
    return null;
  }
  return this.each((e == null ? Sk : yk)(n, t, e));
}
function kd(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var o = qr(this, i);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return Nr(o, i).value[e];
  };
}
function B0(t, e) {
  var n;
  return (typeof e == "number" ? yr : e instanceof vs ? Kl : (n = vs(e)) ? (e = n, Kl) : x0)(t, e);
}
function Rk(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bk(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ik(t, e, n) {
  var i, o = n + "", a;
  return function() {
    var l = this.getAttribute(t);
    return l === o ? null : l === i ? a : a = e(i = l, n);
  };
}
function Lk(t, e, n) {
  var i, o = n + "", a;
  return function() {
    var l = this.getAttributeNS(t.space, t.local);
    return l === o ? null : l === i ? a : a = e(i = l, n);
  };
}
function Ck(t, e, n) {
  var i, o, a;
  return function() {
    var l, f = n(this), c;
    return f == null ? void this.removeAttribute(t) : (l = this.getAttribute(t), c = f + "", l === c ? null : l === i && c === o ? a : (o = c, a = e(i = l, f)));
  };
}
function Nk(t, e, n) {
  var i, o, a;
  return function() {
    var l, f = n(this), c;
    return f == null ? void this.removeAttributeNS(t.space, t.local) : (l = this.getAttributeNS(t.space, t.local), c = f + "", l === c ? null : l === i && c === o ? a : (o = c, a = e(i = l, f)));
  };
}
function xk(t, e) {
  var n = Eu(t), i = n === "transform" ? uk : B0;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Nk : Ck)(n, i, kd(this, "attr." + t, e)) : e == null ? (n.local ? bk : Rk)(n) : (n.local ? Lk : Ik)(n, i, e));
}
function wk(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Mk(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Dk(t, e) {
  var n, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (n = (i = a) && Mk(t, a)), n;
  }
  return o._value = e, o;
}
function Pk(t, e) {
  var n, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (n = (i = a) && wk(t, a)), n;
  }
  return o._value = e, o;
}
function Uk(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var i = Eu(t);
  return this.tween(n, (i.local ? Dk : Pk)(i, e));
}
function kk(t, e) {
  return function() {
    Ud(this, t).delay = +e.apply(this, arguments);
  };
}
function Bk(t, e) {
  return e = +e, function() {
    Ud(this, t).delay = e;
  };
}
function $k(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? kk : Bk)(e, t)) : Nr(this.node(), e).delay;
}
function Hk(t, e) {
  return function() {
    qr(this, t).duration = +e.apply(this, arguments);
  };
}
function Fk(t, e) {
  return e = +e, function() {
    qr(this, t).duration = e;
  };
}
function Wk(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Hk : Fk)(e, t)) : Nr(this.node(), e).duration;
}
function Vk(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    qr(this, t).ease = e;
  };
}
function Xk(t) {
  var e = this._id;
  return arguments.length ? this.each(Vk(e, t)) : Nr(this.node(), e).ease;
}
function Gk(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    qr(this, t).ease = n;
  };
}
function zk(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Gk(this._id, t));
}
function Yk(t) {
  typeof t != "function" && (t = m0(t));
  for (var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)
    for (var a = e[o], l = a.length, f = i[o] = [], c, g = 0; g < l; ++g)
      (c = a[g]) && t.call(c, c.__data__, g, a) && f.push(c);
  return new mi(i, this._parents, this._name, this._id);
}
function Kk(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, o = n.length, a = Math.min(i, o), l = new Array(i), f = 0; f < a; ++f)
    for (var c = e[f], g = n[f], p = c.length, _ = l[f] = new Array(p), R, x = 0; x < p; ++x)
      (R = c[x] || g[x]) && (_[x] = R);
  for (; f < i; ++f)
    l[f] = e[f];
  return new mi(l, this._parents, this._name, this._id);
}
function jk(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function qk(t, e, n) {
  var i, o, a = jk(e) ? Ud : qr;
  return function() {
    var l = a(this, t), f = l.on;
    f !== i && (o = (i = f).copy()).on(e, n), l.on = o;
  };
}
function Jk(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Nr(this.node(), n).on.on(t) : this.each(qk(n, t, e));
}
function Qk(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Zk() {
  return this.on("end.remove", Qk(this._id));
}
function t5(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Nd(t));
  for (var i = this._groups, o = i.length, a = new Array(o), l = 0; l < o; ++l)
    for (var f = i[l], c = f.length, g = a[l] = new Array(c), p, _, R = 0; R < c; ++R)
      (p = f[R]) && (_ = t.call(p, p.__data__, R, f)) && ("__data__" in p && (_.__data__ = p.__data__), g[R] = _, vu(g[R], e, n, R, g, Nr(p, n)));
  return new mi(a, this._parents, e, n);
}
function e5(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = v0(t));
  for (var i = this._groups, o = i.length, a = [], l = [], f = 0; f < o; ++f)
    for (var c = i[f], g = c.length, p, _ = 0; _ < g; ++_)
      if (p = c[_]) {
        for (var R = t.call(p, p.__data__, _, c), x, P = Nr(p, n), O = 0, W = R.length; O < W; ++O)
          (x = R[O]) && vu(x, e, n, O, R, P);
        a.push(R), l.push(p);
      }
  return new mi(a, l, e, n);
}
var n5 = pa.prototype.constructor;
function r5() {
  return new n5(this._groups, this._parents);
}
function i5(t, e) {
  var n, i, o;
  return function() {
    var a = ro(this, t), l = (this.style.removeProperty(t), ro(this, t));
    return a === l ? null : a === n && l === i ? o : o = e(n = a, i = l);
  };
}
function $0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function s5(t, e, n) {
  var i, o = n + "", a;
  return function() {
    var l = ro(this, t);
    return l === o ? null : l === i ? a : a = e(i = l, n);
  };
}
function o5(t, e, n) {
  var i, o, a;
  return function() {
    var l = ro(this, t), f = n(this), c = f + "";
    return f == null && (c = f = (this.style.removeProperty(t), ro(this, t))), l === c ? null : l === i && c === o ? a : (o = c, a = e(i = l, f));
  };
}
function a5(t, e) {
  var n, i, o, a = "style." + e, l = "end." + a, f;
  return function() {
    var c = qr(this, t), g = c.on, p = c.value[a] == null ? f || (f = $0(e)) : void 0;
    (g !== n || o !== p) && (i = (n = g).copy()).on(l, o = p), c.on = i;
  };
}
function l5(t, e, n) {
  var i = (t += "") == "transform" ? lk : B0;
  return e == null ? this.styleTween(t, i5(t, i)).on("end.style." + t, $0(t)) : typeof e == "function" ? this.styleTween(t, o5(t, i, kd(this, "style." + t, e))).each(a5(this._id, t)) : this.styleTween(t, s5(t, i, e), n).on("end.style." + t, null);
}
function u5(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function f5(t, e, n) {
  var i, o;
  function a() {
    var l = e.apply(this, arguments);
    return l !== o && (i = (o = l) && u5(t, l, n)), i;
  }
  return a._value = e, a;
}
function c5(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (e == null) return this.tween(i, null);
  if (typeof e != "function") throw new Error();
  return this.tween(i, f5(t, e, n ?? ""));
}
function d5(t) {
  return function() {
    this.textContent = t;
  };
}
function p5(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function h5(t) {
  return this.tween("text", typeof t == "function" ? p5(kd(this, "text", t)) : d5(t == null ? "" : t + ""));
}
function E5(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function g5(t) {
  var e, n;
  function i() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && E5(o)), e;
  }
  return i._value = t, i;
}
function v5(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, g5(t));
}
function m5() {
  for (var t = this._name, e = this._id, n = H0(), i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var l = i[a], f = l.length, c, g = 0; g < f; ++g)
      if (c = l[g]) {
        var p = Nr(c, e);
        vu(c, t, n, g, l, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new mi(i, this._parents, t, n);
}
function _5() {
  var t, e, n = this, i = n._id, o = n.size();
  return new Promise(function(a, l) {
    var f = { value: l }, c = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var g = qr(this, i), p = g.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(f), e._.interrupt.push(f), e._.end.push(c)), g.on = e;
    }), o === 0 && a();
  });
}
var T5 = 0;
function mi(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function H0() {
  return ++T5;
}
var ci = pa.prototype;
mi.prototype = {
  constructor: mi,
  select: t5,
  selectAll: e5,
  selectChild: ci.selectChild,
  selectChildren: ci.selectChildren,
  filter: Yk,
  merge: Kk,
  selection: r5,
  transition: m5,
  call: ci.call,
  nodes: ci.nodes,
  node: ci.node,
  size: ci.size,
  empty: ci.empty,
  each: ci.each,
  on: Jk,
  attr: xk,
  attrTween: Uk,
  style: l5,
  styleTween: c5,
  text: h5,
  textTween: v5,
  remove: Zk,
  tween: Ok,
  delay: $k,
  duration: Wk,
  ease: Xk,
  easeVarying: zk,
  end: _5,
  [Symbol.iterator]: ci[Symbol.iterator]
};
function A5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var S5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: A5
};
function y5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function O5(t) {
  var e, n;
  t instanceof mi ? (e = t._id, t = t._name) : (e = H0(), (n = S5).time = Pd(), t = t == null ? null : t + "");
  for (var i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var l = i[a], f = l.length, c, g = 0; g < f; ++g)
      (c = l[g]) && vu(c, t, e, g, l, n || y5(c, e));
  return new mi(i, this._parents, t, e);
}
pa.prototype.interrupt = Ak;
pa.prototype.transition = O5;
const Yc = Math.PI, Kc = 2 * Yc, is = 1e-6, R5 = Kc - is;
function jc() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function F0() {
  return new jc();
}
jc.prototype = F0.prototype = {
  constructor: jc,
  moveTo: function(t, e) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(t, e) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
  },
  quadraticCurveTo: function(t, e, n, i) {
    this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i);
  },
  bezierCurveTo: function(t, e, n, i, o, a) {
    this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +o) + "," + (this._y1 = +a);
  },
  arcTo: function(t, e, n, i, o) {
    t = +t, e = +e, n = +n, i = +i, o = +o;
    var a = this._x1, l = this._y1, f = n - t, c = i - e, g = a - t, p = l - e, _ = g * g + p * p;
    if (o < 0) throw new Error("negative radius: " + o);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
    else if (_ > is) if (!(Math.abs(p * f - c * g) > is) || !o)
      this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
    else {
      var R = n - a, x = i - l, P = f * f + c * c, O = R * R + x * x, W = Math.sqrt(P), b = Math.sqrt(_), w = o * Math.tan((Yc - Math.acos((P + _ - O) / (2 * W * b))) / 2), Z = w / b, v = w / W;
      Math.abs(Z - 1) > is && (this._ += "L" + (t + Z * g) + "," + (e + Z * p)), this._ += "A" + o + "," + o + ",0,0," + +(p * R > g * x) + "," + (this._x1 = t + v * f) + "," + (this._y1 = e + v * c);
    }
  },
  arc: function(t, e, n, i, o, a) {
    t = +t, e = +e, n = +n, a = !!a;
    var l = n * Math.cos(i), f = n * Math.sin(i), c = t + l, g = e + f, p = 1 ^ a, _ = a ? i - o : o - i;
    if (n < 0) throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + g : (Math.abs(this._x1 - c) > is || Math.abs(this._y1 - g) > is) && (this._ += "L" + c + "," + g), n && (_ < 0 && (_ = _ % Kc + Kc), _ > R5 ? this._ += "A" + n + "," + n + ",0,1," + p + "," + (t - l) + "," + (e - f) + "A" + n + "," + n + ",0,1," + p + "," + (this._x1 = c) + "," + (this._y1 = g) : _ > is && (this._ += "A" + n + "," + n + ",0," + +(_ >= Yc) + "," + p + "," + (this._x1 = t + n * Math.cos(o)) + "," + (this._y1 = e + n * Math.sin(o))));
  },
  rect: function(t, e, n, i) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function b5(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ql(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function so(t) {
  return t = Ql(Math.abs(t)), t ? t[1] : NaN;
}
function I5(t, e) {
  return function(n, i) {
    for (var o = n.length, a = [], l = 0, f = t[0], c = 0; o > 0 && f > 0 && (c + f + 1 > i && (f = Math.max(1, i - c)), a.push(n.substring(o -= f, o + f)), !((c += f + 1) > i)); )
      f = t[l = (l + 1) % t.length];
    return a.reverse().join(e);
  };
}
function L5(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var C5 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Zl(t) {
  if (!(e = C5.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Bd({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Zl.prototype = Bd.prototype;
function Bd(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Bd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function N5(t) {
  t: for (var e = t.length, n = 1, i = -1, o; n < e; ++n)
    switch (t[n]) {
      case ".":
        i = o = n;
        break;
      case "0":
        i === 0 && (i = n), o = n;
        break;
      default:
        if (!+t[n]) break t;
        i > 0 && (i = 0);
        break;
    }
  return i > 0 ? t.slice(0, i) + t.slice(o + 1) : t;
}
var W0;
function x5(t, e) {
  var n = Ql(t, e);
  if (!n) return t + "";
  var i = n[0], o = n[1], a = o - (W0 = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, l = i.length;
  return a === l ? i : a > l ? i + new Array(a - l + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Ql(t, Math.max(0, e + a - 1))[0];
}
function Pg(t, e) {
  var n = Ql(t, e);
  if (!n) return t + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Ug = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: b5,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Pg(t * 100, e),
  r: Pg,
  s: x5,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function kg(t) {
  return t;
}
var Bg = Array.prototype.map, $g = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function w5(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? kg : I5(Bg.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? kg : L5(Bg.call(t.numerals, String)), l = t.percent === void 0 ? "%" : t.percent + "", f = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function g(_) {
    _ = Zl(_);
    var R = _.fill, x = _.align, P = _.sign, O = _.symbol, W = _.zero, b = _.width, w = _.comma, Z = _.precision, v = _.trim, G = _.type;
    G === "n" ? (w = !0, G = "g") : Ug[G] || (Z === void 0 && (Z = 12), v = !0, G = "g"), (W || R === "0" && x === "=") && (W = !0, R = "0", x = "=");
    var L = O === "$" ? n : O === "#" && /[boxX]/.test(G) ? "0" + G.toLowerCase() : "", B = O === "$" ? i : /[%p]/.test(G) ? l : "", U = Ug[G], y = /[defgprs%]/.test(G);
    Z = Z === void 0 ? 6 : /[gprs]/.test(G) ? Math.max(1, Math.min(21, Z)) : Math.max(0, Math.min(20, Z));
    function tt(F) {
      var ht = L, M = B, Y, lt, V;
      if (G === "c")
        M = U(F) + M, F = "";
      else {
        F = +F;
        var $ = F < 0 || 1 / F < 0;
        if (F = isNaN(F) ? c : U(Math.abs(F), Z), v && (F = N5(F)), $ && +F == 0 && P !== "+" && ($ = !1), ht = ($ ? P === "(" ? P : f : P === "-" || P === "(" ? "" : P) + ht, M = (G === "s" ? $g[8 + W0 / 3] : "") + M + ($ && P === "(" ? ")" : ""), y) {
          for (Y = -1, lt = F.length; ++Y < lt; )
            if (V = F.charCodeAt(Y), 48 > V || V > 57) {
              M = (V === 46 ? o + F.slice(Y + 1) : F.slice(Y)) + M, F = F.slice(0, Y);
              break;
            }
        }
      }
      w && !W && (F = e(F, 1 / 0));
      var ct = ht.length + F.length + M.length, yt = ct < b ? new Array(b - ct + 1).join(R) : "";
      switch (w && W && (F = e(yt + F, yt.length ? b - M.length : 1 / 0), yt = ""), x) {
        case "<":
          F = ht + F + M + yt;
          break;
        case "=":
          F = ht + yt + F + M;
          break;
        case "^":
          F = yt.slice(0, ct = yt.length >> 1) + ht + F + M + yt.slice(ct);
          break;
        default:
          F = yt + ht + F + M;
          break;
      }
      return a(F);
    }
    return tt.toString = function() {
      return _ + "";
    }, tt;
  }
  function p(_, R) {
    var x = g((_ = Zl(_), _.type = "f", _)), P = Math.max(-8, Math.min(8, Math.floor(so(R) / 3))) * 3, O = Math.pow(10, -P), W = $g[8 + P / 3];
    return function(b) {
      return x(O * b) + W;
    };
  }
  return {
    format: g,
    formatPrefix: p
  };
}
var Sl, V0, X0;
M5({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function M5(t) {
  return Sl = w5(t), V0 = Sl.format, X0 = Sl.formatPrefix, Sl;
}
function D5(t) {
  return Math.max(0, -so(Math.abs(t)));
}
function P5(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(so(e) / 3))) * 3 - so(Math.abs(t)));
}
function U5(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, so(e) - so(t)) + 1;
}
function k5(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function B5(t) {
  return function() {
    return t;
  };
}
function $5(t) {
  return +t;
}
var Hg = [0, 1];
function Ws(t) {
  return t;
}
function qc(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : B5(isNaN(e) ? NaN : 0.5);
}
function H5(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function F5(t, e, n) {
  var i = t[0], o = t[1], a = e[0], l = e[1];
  return o < i ? (i = qc(o, i), a = n(l, a)) : (i = qc(i, o), a = n(a, l)), function(f) {
    return a(i(f));
  };
}
function W5(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, o = new Array(i), a = new Array(i), l = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++l < i; )
    o[l] = qc(t[l], t[l + 1]), a[l] = n(e[l], e[l + 1]);
  return function(f) {
    var c = qP(t, f, 1, i) - 1;
    return a[c](o[c](f));
  };
}
function V5(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function X5() {
  var t = Hg, e = Hg, n = Dd, i, o, a, l = Ws, f, c, g;
  function p() {
    var R = Math.min(t.length, e.length);
    return l !== Ws && (l = H5(t[0], t[R - 1])), f = R > 2 ? W5 : F5, c = g = null, _;
  }
  function _(R) {
    return R == null || isNaN(R = +R) ? a : (c || (c = f(t.map(i), e, n)))(i(l(R)));
  }
  return _.invert = function(R) {
    return l(o((g || (g = f(e, t.map(i), yr)))(R)));
  }, _.domain = function(R) {
    return arguments.length ? (t = Array.from(R, $5), p()) : t.slice();
  }, _.range = function(R) {
    return arguments.length ? (e = Array.from(R), p()) : e.slice();
  }, _.rangeRound = function(R) {
    return e = Array.from(R), n = sk, p();
  }, _.clamp = function(R) {
    return arguments.length ? (l = R ? !0 : Ws, p()) : l !== Ws;
  }, _.interpolate = function(R) {
    return arguments.length ? (n = R, p()) : n;
  }, _.unknown = function(R) {
    return arguments.length ? (a = R, _) : a;
  }, function(R, x) {
    return i = R, o = x, p();
  };
}
function G5() {
  return X5()(Ws, Ws);
}
function z5(t, e, n, i) {
  var o = QP(t, e, n), a;
  switch (i = Zl(i ?? ",f"), i.type) {
    case "s": {
      var l = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(a = P5(o, l)) && (i.precision = a), X0(i, l);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(a = U5(o, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = a - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(a = D5(o)) && (i.precision = a - (i.type === "%") * 2);
      break;
    }
  }
  return V0(i);
}
function Y5(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return JP(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var o = e();
    return z5(o[0], o[o.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), o = 0, a = i.length - 1, l = i[o], f = i[a], c, g, p = 10;
    for (f < l && (g = l, l = f, f = g, g = o, o = a, a = g); p-- > 0; ) {
      if (g = E0(l, f, n), g === c)
        return i[o] = l, i[a] = f, e(i);
      if (g > 0)
        l = Math.floor(l / g) * g, f = Math.ceil(f / g) * g;
      else if (g < 0)
        l = Math.ceil(l * g) / g, f = Math.floor(f * g) / g;
      else
        break;
      c = g;
    }
    return t;
  }, t;
}
function G0() {
  var t = G5();
  return t.copy = function() {
    return V5(t, G0());
  }, k5.apply(t, arguments), Y5(t);
}
const yl = (t) => () => t;
function K5(t, {
  sourceEvent: e,
  target: n,
  transform: i,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function hi(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
hi.prototype = {
  constructor: hi,
  scale: function(t) {
    return t === 1 ? this : new hi(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new hi(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var tu = new hi(1, 0, 0);
hi.prototype;
function ic(t) {
  t.stopImmediatePropagation();
}
function Uo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function j5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function q5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Fg() {
  return this.__zoom || tu;
}
function J5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Q5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Z5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], a = t.invertY(e[0][1]) - n[0][1], l = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function tB() {
  var t = j5, e = q5, n = Z5, i = J5, o = Q5, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], f = 250, c = pk, g = Cd("start", "zoom", "end"), p, _, R, x = 500, P = 150, O = 0, W = 10;
  function b(Y) {
    Y.property("__zoom", Fg).on("wheel.zoom", U, { passive: !1 }).on("mousedown.zoom", y).on("dblclick.zoom", tt).filter(o).on("touchstart.zoom", F).on("touchmove.zoom", ht).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(Y, lt, V, $) {
    var ct = Y.selection ? Y.selection() : Y;
    ct.property("__zoom", Fg), Y !== ct ? G(Y, lt, V, $) : ct.interrupt().each(function() {
      L(this, arguments).event($).start().zoom(null, typeof lt == "function" ? lt.apply(this, arguments) : lt).end();
    });
  }, b.scaleBy = function(Y, lt, V, $) {
    b.scaleTo(Y, function() {
      var ct = this.__zoom.k, yt = typeof lt == "function" ? lt.apply(this, arguments) : lt;
      return ct * yt;
    }, V, $);
  }, b.scaleTo = function(Y, lt, V, $) {
    b.transform(Y, function() {
      var ct = e.apply(this, arguments), yt = this.__zoom, mt = V == null ? v(ct) : typeof V == "function" ? V.apply(this, arguments) : V, at = yt.invert(mt), dt = typeof lt == "function" ? lt.apply(this, arguments) : lt;
      return n(Z(w(yt, dt), mt, at), ct, l);
    }, V, $);
  }, b.translateBy = function(Y, lt, V, $) {
    b.transform(Y, function() {
      return n(this.__zoom.translate(
        typeof lt == "function" ? lt.apply(this, arguments) : lt,
        typeof V == "function" ? V.apply(this, arguments) : V
      ), e.apply(this, arguments), l);
    }, null, $);
  }, b.translateTo = function(Y, lt, V, $, ct) {
    b.transform(Y, function() {
      var yt = e.apply(this, arguments), mt = this.__zoom, at = $ == null ? v(yt) : typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(tu.translate(at[0], at[1]).scale(mt.k).translate(
        typeof lt == "function" ? -lt.apply(this, arguments) : -lt,
        typeof V == "function" ? -V.apply(this, arguments) : -V
      ), yt, l);
    }, $, ct);
  };
  function w(Y, lt) {
    return lt = Math.max(a[0], Math.min(a[1], lt)), lt === Y.k ? Y : new hi(lt, Y.x, Y.y);
  }
  function Z(Y, lt, V) {
    var $ = lt[0] - V[0] * Y.k, ct = lt[1] - V[1] * Y.k;
    return $ === Y.x && ct === Y.y ? Y : new hi(Y.k, $, ct);
  }
  function v(Y) {
    return [(+Y[0][0] + +Y[1][0]) / 2, (+Y[0][1] + +Y[1][1]) / 2];
  }
  function G(Y, lt, V, $) {
    Y.on("start.zoom", function() {
      L(this, arguments).event($).start();
    }).on("interrupt.zoom end.zoom", function() {
      L(this, arguments).event($).end();
    }).tween("zoom", function() {
      var ct = this, yt = arguments, mt = L(ct, yt).event($), at = e.apply(ct, yt), dt = V == null ? v(at) : typeof V == "function" ? V.apply(ct, yt) : V, ut = Math.max(at[1][0] - at[0][0], at[1][1] - at[0][1]), Tt = ct.__zoom, q = typeof lt == "function" ? lt.apply(ct, yt) : lt, T = c(Tt.invert(dt).concat(ut / Tt.k), q.invert(dt).concat(ut / q.k));
      return function(Et) {
        if (Et === 1) Et = q;
        else {
          var bt = T(Et), Bt = ut / bt[2];
          Et = new hi(Bt, dt[0] - bt[0] * Bt, dt[1] - bt[1] * Bt);
        }
        mt.zoom(null, Et);
      };
    });
  }
  function L(Y, lt, V) {
    return !V && Y.__zooming || new B(Y, lt);
  }
  function B(Y, lt) {
    this.that = Y, this.args = lt, this.active = 0, this.sourceEvent = null, this.extent = e.apply(Y, lt), this.taps = 0;
  }
  B.prototype = {
    event: function(Y) {
      return Y && (this.sourceEvent = Y), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(Y, lt) {
      return this.mouse && Y !== "mouse" && (this.mouse[1] = lt.invert(this.mouse[0])), this.touch0 && Y !== "touch" && (this.touch0[1] = lt.invert(this.touch0[0])), this.touch1 && Y !== "touch" && (this.touch1[1] = lt.invert(this.touch1[0])), this.that.__zoom = lt, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(Y) {
      var lt = Hr(this.that).datum();
      g.call(
        Y,
        this.that,
        new K5(Y, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: g
        }),
        lt
      );
    }
  };
  function U(Y, ...lt) {
    if (!t.apply(this, arguments)) return;
    var V = L(this, lt).event(Y), $ = this.__zoom, ct = Math.max(a[0], Math.min(a[1], $.k * Math.pow(2, i.apply(this, arguments)))), yt = ts(Y);
    if (V.wheel)
      (V.mouse[0][0] !== yt[0] || V.mouse[0][1] !== yt[1]) && (V.mouse[1] = $.invert(V.mouse[0] = yt)), clearTimeout(V.wheel);
    else {
      if ($.k === ct) return;
      V.mouse = [yt, $.invert(yt)], Dl(this), V.start();
    }
    Uo(Y), V.wheel = setTimeout(mt, P), V.zoom("mouse", n(Z(w($, ct), V.mouse[0], V.mouse[1]), V.extent, l));
    function mt() {
      V.wheel = null, V.end();
    }
  }
  function y(Y, ...lt) {
    if (R || !t.apply(this, arguments)) return;
    var V = Y.currentTarget, $ = L(this, lt, !0).event(Y), ct = Hr(Y.view).on("mousemove.zoom", dt, !0).on("mouseup.zoom", ut, !0), yt = ts(Y, V), mt = Y.clientX, at = Y.clientY;
    P4(Y.view), ic(Y), $.mouse = [yt, this.__zoom.invert(yt)], Dl(this), $.start();
    function dt(Tt) {
      if (Uo(Tt), !$.moved) {
        var q = Tt.clientX - mt, T = Tt.clientY - at;
        $.moved = q * q + T * T > O;
      }
      $.event(Tt).zoom("mouse", n(Z($.that.__zoom, $.mouse[0] = ts(Tt, V), $.mouse[1]), $.extent, l));
    }
    function ut(Tt) {
      ct.on("mousemove.zoom mouseup.zoom", null), U4(Tt.view, $.moved), Uo(Tt), $.event(Tt).end();
    }
  }
  function tt(Y, ...lt) {
    if (t.apply(this, arguments)) {
      var V = this.__zoom, $ = ts(Y.changedTouches ? Y.changedTouches[0] : Y, this), ct = V.invert($), yt = V.k * (Y.shiftKey ? 0.5 : 2), mt = n(Z(w(V, yt), $, ct), e.apply(this, lt), l);
      Uo(Y), f > 0 ? Hr(this).transition().duration(f).call(G, mt, $, Y) : Hr(this).call(b.transform, mt, $, Y);
    }
  }
  function F(Y, ...lt) {
    if (t.apply(this, arguments)) {
      var V = Y.touches, $ = V.length, ct = L(this, lt, Y.changedTouches.length === $).event(Y), yt, mt, at, dt;
      for (ic(Y), mt = 0; mt < $; ++mt)
        at = V[mt], dt = ts(at, this), dt = [dt, this.__zoom.invert(dt), at.identifier], ct.touch0 ? !ct.touch1 && ct.touch0[2] !== dt[2] && (ct.touch1 = dt, ct.taps = 0) : (ct.touch0 = dt, yt = !0, ct.taps = 1 + !!p);
      p && (p = clearTimeout(p)), yt && (ct.taps < 2 && (_ = dt[0], p = setTimeout(function() {
        p = null;
      }, x)), Dl(this), ct.start());
    }
  }
  function ht(Y, ...lt) {
    if (this.__zooming) {
      var V = L(this, lt).event(Y), $ = Y.changedTouches, ct = $.length, yt, mt, at, dt;
      for (Uo(Y), yt = 0; yt < ct; ++yt)
        mt = $[yt], at = ts(mt, this), V.touch0 && V.touch0[2] === mt.identifier ? V.touch0[0] = at : V.touch1 && V.touch1[2] === mt.identifier && (V.touch1[0] = at);
      if (mt = V.that.__zoom, V.touch1) {
        var ut = V.touch0[0], Tt = V.touch0[1], q = V.touch1[0], T = V.touch1[1], Et = (Et = q[0] - ut[0]) * Et + (Et = q[1] - ut[1]) * Et, bt = (bt = T[0] - Tt[0]) * bt + (bt = T[1] - Tt[1]) * bt;
        mt = w(mt, Math.sqrt(Et / bt)), at = [(ut[0] + q[0]) / 2, (ut[1] + q[1]) / 2], dt = [(Tt[0] + T[0]) / 2, (Tt[1] + T[1]) / 2];
      } else if (V.touch0) at = V.touch0[0], dt = V.touch0[1];
      else return;
      V.zoom("touch", n(Z(mt, at, dt), V.extent, l));
    }
  }
  function M(Y, ...lt) {
    if (this.__zooming) {
      var V = L(this, lt).event(Y), $ = Y.changedTouches, ct = $.length, yt, mt;
      for (ic(Y), R && clearTimeout(R), R = setTimeout(function() {
        R = null;
      }, x), yt = 0; yt < ct; ++yt)
        mt = $[yt], V.touch0 && V.touch0[2] === mt.identifier ? delete V.touch0 : V.touch1 && V.touch1[2] === mt.identifier && delete V.touch1;
      if (V.touch1 && !V.touch0 && (V.touch0 = V.touch1, delete V.touch1), V.touch0) V.touch0[1] = this.__zoom.invert(V.touch0[0]);
      else if (V.end(), V.taps === 2 && (mt = ts(mt, this), Math.hypot(_[0] - mt[0], _[1] - mt[1]) < W)) {
        var at = Hr(this).on("dblclick.zoom");
        at && at.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(Y) {
    return arguments.length ? (i = typeof Y == "function" ? Y : yl(+Y), b) : i;
  }, b.filter = function(Y) {
    return arguments.length ? (t = typeof Y == "function" ? Y : yl(!!Y), b) : t;
  }, b.touchable = function(Y) {
    return arguments.length ? (o = typeof Y == "function" ? Y : yl(!!Y), b) : o;
  }, b.extent = function(Y) {
    return arguments.length ? (e = typeof Y == "function" ? Y : yl([[+Y[0][0], +Y[0][1]], [+Y[1][0], +Y[1][1]]]), b) : e;
  }, b.scaleExtent = function(Y) {
    return arguments.length ? (a[0] = +Y[0], a[1] = +Y[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(Y) {
    return arguments.length ? (l[0][0] = +Y[0][0], l[1][0] = +Y[1][0], l[0][1] = +Y[0][1], l[1][1] = +Y[1][1], b) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, b.constrain = function(Y) {
    return arguments.length ? (n = Y, b) : n;
  }, b.duration = function(Y) {
    return arguments.length ? (f = +Y, b) : f;
  }, b.interpolate = function(Y) {
    return arguments.length ? (c = Y, b) : c;
  }, b.on = function() {
    var Y = g.on.apply(g, arguments);
    return Y === g ? b : Y;
  }, b.clickDistance = function(Y) {
    return arguments.length ? (O = (Y = +Y) * Y, b) : Math.sqrt(O);
  }, b.tapDistance = function(Y) {
    return arguments.length ? (W = +Y, b) : W;
  }, b;
}
function eB(t) {
  var e = 0, n = t.children, i = n && n.length;
  if (!i) e = 1;
  else for (; --i >= 0; ) e += n[i].value;
  t.value = e;
}
function nB() {
  return this.eachAfter(eB);
}
function rB(t) {
  var e = this, n, i = [e], o, a, l;
  do
    for (n = i.reverse(), i = []; e = n.pop(); )
      if (t(e), o = e.children, o) for (a = 0, l = o.length; a < l; ++a)
        i.push(o[a]);
  while (i.length);
  return this;
}
function iB(t) {
  for (var e = this, n = [e], i, o; e = n.pop(); )
    if (t(e), i = e.children, i) for (o = i.length - 1; o >= 0; --o)
      n.push(i[o]);
  return this;
}
function sB(t) {
  for (var e = this, n = [e], i = [], o, a, l; e = n.pop(); )
    if (i.push(e), o = e.children, o) for (a = 0, l = o.length; a < l; ++a)
      n.push(o[a]);
  for (; e = i.pop(); )
    t(e);
  return this;
}
function oB(t) {
  return this.eachAfter(function(e) {
    for (var n = +t(e.data) || 0, i = e.children, o = i && i.length; --o >= 0; ) n += i[o].value;
    e.value = n;
  });
}
function aB(t) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(t);
  });
}
function lB(t) {
  for (var e = this, n = uB(e, t), i = [e]; e !== n; )
    e = e.parent, i.push(e);
  for (var o = i.length; t !== n; )
    i.splice(o, 0, t), t = t.parent;
  return i;
}
function uB(t, e) {
  if (t === e) return t;
  var n = t.ancestors(), i = e.ancestors(), o = null;
  for (t = n.pop(), e = i.pop(); t === e; )
    o = t, t = n.pop(), e = i.pop();
  return o;
}
function fB() {
  for (var t = this, e = [t]; t = t.parent; )
    e.push(t);
  return e;
}
function cB() {
  var t = [];
  return this.each(function(e) {
    t.push(e);
  }), t;
}
function dB() {
  var t = [];
  return this.eachBefore(function(e) {
    e.children || t.push(e);
  }), t;
}
function pB() {
  var t = this, e = [];
  return t.each(function(n) {
    n !== t && e.push({ source: n.parent, target: n });
  }), e;
}
function $d(t, e) {
  var n = new eu(t), i = +t.value && (n.value = t.value), o, a = [n], l, f, c, g;
  for (e == null && (e = EB); o = a.pop(); )
    if (i && (o.value = +o.data.value), (f = e(o.data)) && (g = f.length))
      for (o.children = new Array(g), c = g - 1; c >= 0; --c)
        a.push(l = o.children[c] = new eu(f[c])), l.parent = o, l.depth = o.depth + 1;
  return n.eachBefore(vB);
}
function hB() {
  return $d(this).eachBefore(gB);
}
function EB(t) {
  return t.children;
}
function gB(t) {
  t.data = t.data.data;
}
function vB(t) {
  var e = 0;
  do
    t.height = e;
  while ((t = t.parent) && t.height < ++e);
}
function eu(t) {
  this.data = t, this.depth = this.height = 0, this.parent = null;
}
eu.prototype = $d.prototype = {
  constructor: eu,
  count: nB,
  each: rB,
  eachAfter: sB,
  eachBefore: iB,
  sum: oB,
  sort: aB,
  path: lB,
  ancestors: fB,
  descendants: cB,
  leaves: dB,
  links: pB,
  copy: hB
};
const mB = "2.1.2", _B = {
  version: mB
}, { version: TB } = _B, AB = Object.freeze({
  children: (t) => t.children,
  nodeSize: (t) => t.data.size,
  spacing: 0
});
function Y0(t) {
  const e = Object.assign({}, AB, t);
  function n(f) {
    const c = e[f];
    return typeof c == "function" ? c : () => c;
  }
  function i(f) {
    const c = l(a(), f, (g) => g.children);
    return c.update(), c.data;
  }
  function o() {
    const f = n("nodeSize"), c = n("spacing");
    return class z0 extends $d.prototype.constructor {
      constructor(p) {
        super(p);
      }
      copy() {
        const p = l(this.constructor, this, (_) => _.children);
        return p.each((_) => _.data = _.data.data), p;
      }
      get size() {
        return f(this);
      }
      spacing(p) {
        return c(this, p);
      }
      get nodes() {
        return this.descendants();
      }
      get xSize() {
        return this.size[0];
      }
      get ySize() {
        return this.size[1];
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.ySize;
      }
      get left() {
        return this.x - this.xSize / 2;
      }
      get right() {
        return this.x + this.xSize / 2;
      }
      get root() {
        const p = this.ancestors();
        return p[p.length - 1];
      }
      get numChildren() {
        return this.hasChildren ? this.children.length : 0;
      }
      get hasChildren() {
        return !this.noChildren;
      }
      get noChildren() {
        return this.children === null;
      }
      get firstChild() {
        return this.hasChildren ? this.children[0] : null;
      }
      get lastChild() {
        return this.hasChildren ? this.children[this.numChildren - 1] : null;
      }
      get extents() {
        return (this.children || []).reduce(
          (p, _) => z0.maxExtents(p, _.extents),
          this.nodeExtents
        );
      }
      get nodeExtents() {
        return {
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right
        };
      }
      static maxExtents(p, _) {
        return {
          top: Math.min(p.top, _.top),
          bottom: Math.max(p.bottom, _.bottom),
          left: Math.min(p.left, _.left),
          right: Math.max(p.right, _.right)
        };
      }
    };
  }
  function a() {
    const f = o(), c = n("nodeSize"), g = n("spacing");
    return class extends f {
      constructor(p) {
        super(p), Object.assign(this, {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: this,
          lExtRelX: 0,
          lThr: null,
          rExt: this,
          rExtRelX: 0,
          rThr: null
        });
      }
      get size() {
        return c(this.data);
      }
      spacing(p) {
        return g(this.data, p.data);
      }
      get x() {
        return this.data.x;
      }
      set x(p) {
        this.data.x = p;
      }
      get y() {
        return this.data.y;
      }
      set y(p) {
        this.data.y = p;
      }
      update() {
        return K0(this), j0(this), this;
      }
    };
  }
  function l(f, c, g) {
    const p = (_, R) => {
      const x = new f(_);
      Object.assign(x, {
        parent: R,
        depth: R === null ? 0 : R.depth + 1,
        height: 0,
        length: 1
      });
      const P = g(_) || [];
      return x.children = P.length === 0 ? null : P.map((O) => p(O, x)), x.children && Object.assign(x, x.children.reduce(
        (O, W) => ({
          height: Math.max(O.height, W.height + 1),
          length: O.length + W.length
        }),
        x
      )), x;
    };
    return p(c, null);
  }
  return Object.assign(i, {
    nodeSize(f) {
      return arguments.length ? (e.nodeSize = f, i) : e.nodeSize;
    },
    spacing(f) {
      return arguments.length ? (e.spacing = f, i) : e.spacing;
    },
    children(f) {
      return arguments.length ? (e.children = f, i) : e.children;
    },
    hierarchy(f, c) {
      const g = typeof c > "u" ? e.children : c;
      return l(o(), f, g);
    },
    dump(f) {
      const c = n("nodeSize"), g = (p) => (_) => {
        const R = p + "  ", x = p + "    ", { x: P, y: O } = _, W = c(_), b = _.children || [], w = b.length === 0 ? " " : `,${R}children: [${x}${b.map(g(x)).join(x)}${R}],${p}`;
        return `{ size: [${W.join(", ")}],${R}x: ${P}, y: ${O}${w}},`;
      };
      return g(`
`)(f);
    }
  }), i;
}
Y0.version = TB;
const K0 = (t, e = 0) => (t.y = e, (t.children || []).reduce((n, i) => {
  const [o, a] = n;
  K0(i, t.y + t.ySize);
  const l = (o === 0 ? i.lExt : i.rExt).bottom;
  o !== 0 && yB(t, o, a);
  const f = xB(l, o, a);
  return [o + 1, f];
}, [0, null]), SB(t), NB(t), t), j0 = (t, e, n) => {
  typeof e > "u" && (e = -t.relX - t.prelim, n = 0);
  const i = e + t.relX;
  return t.relX = i + t.prelim - n, t.prelim = 0, t.x = n + t.relX, (t.children || []).forEach((o) => j0(o, i, t.x)), t;
}, SB = (t) => {
  (t.children || []).reduce((e, n) => {
    const [i, o] = e, a = i + n.shift, l = o + a + n.change;
    return n.relX += l, [a, l];
  }, [0, 0]);
}, yB = (t, e, n) => {
  const i = t.children[e - 1], o = t.children[e];
  let a = i, l = i.relX, f = o, c = o.relX, g = !0;
  for (; a && f; ) {
    a.bottom > n.lowY && (n = n.next);
    const p = l + a.prelim - (c + f.prelim) + a.xSize / 2 + f.xSize / 2 + a.spacing(f);
    (p > 0 || p < 0 && g) && (c += p, OB(o, p), RB(t, e, n.index, p)), g = !1;
    const _ = a.bottom, R = f.bottom;
    _ <= R && (a = IB(a), a && (l += a.relX)), _ >= R && (f = bB(f), f && (c += f.relX));
  }
  !a && f ? LB(t, e, f, c) : a && !f && CB(t, e, a, l);
}, OB = (t, e) => {
  t.relX += e, t.lExtRelX += e, t.rExtRelX += e;
}, RB = (t, e, n, i) => {
  const o = t.children[e], a = e - n;
  if (a > 1) {
    const l = i / a;
    t.children[n + 1].shift += l, o.shift -= l, o.change -= i - l;
  }
}, bB = (t) => t.hasChildren ? t.firstChild : t.lThr, IB = (t) => t.hasChildren ? t.lastChild : t.rThr, LB = (t, e, n, i) => {
  const o = t.firstChild, a = o.lExt, l = t.children[e];
  a.lThr = n;
  const f = i - n.relX - o.lExtRelX;
  a.relX += f, a.prelim -= f, o.lExt = l.lExt, o.lExtRelX = l.lExtRelX;
}, CB = (t, e, n, i) => {
  const o = t.children[e], a = o.rExt, l = t.children[e - 1];
  a.rThr = n;
  const f = i - n.relX - o.rExtRelX;
  a.relX += f, a.prelim -= f, o.rExt = l.rExt, o.rExtRelX = l.rExtRelX;
}, NB = (t) => {
  if (t.hasChildren) {
    const e = t.firstChild, n = t.lastChild, i = (e.prelim + e.relX - e.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
    Object.assign(t, {
      prelim: i,
      lExt: e.lExt,
      lExtRelX: e.lExtRelX,
      rExt: n.rExt,
      rExtRelX: n.rExtRelX
    });
  }
}, xB = (t, e, n) => {
  for (; n !== null && t >= n.lowY; )
    n = n.next;
  return {
    lowY: t,
    index: e,
    next: n
  };
}, wB = { class: "execution-memory-node" }, MB = { class: "d-flex" }, DB = { class: "text-body px-1" }, PB = { class: "d-flex justify-content-between" }, UB = { class: "text-secondary" }, kB = {
  key: 0,
  class: "d-flex flex-column justify-content-around px-3"
}, BB = {
  key: 0,
  class: "text-secondary"
}, $B = {
  key: 1,
  class: "text-secondary"
}, HB = {
  key: 2,
  class: "text-secondary"
}, FB = {
  key: 1,
  class: "text-secondary mt-3 px-3"
}, WB = /* @__PURE__ */ $e({
  __name: "SliceDetail",
  props: {
    memoryDetails: {}
  },
  setup(t) {
    const n = Kn(t.memoryDetails), i = jt(!1), o = jt(null);
    return (a, l) => {
      var f, c, g, p, _, R;
      return N(), D("div", {
        ref_key: "outerEl",
        ref: o,
        onDblclick: l[1] || (l[1] = Be(() => {
        }, ["stop"]))
      }, [
        S("div", wB, [
          S("header", MB, [
            Rt(d(se), {
              "fixed-width": "",
              icon: d(Um),
              class: "text-secondary py-1"
            }, null, 8, ["icon"]),
            l[2] || (l[2] = m()),
            S("span", DB, `
            Slice : ` + st(n[d(Ar).SLICE_NUM]), 1)
          ]),
          l[8] || (l[8] = m()),
          S("header", PB, [
            S("h4", {
              class: "btn py-0 px-0 d-flex",
              onClick: l[0] || (l[0] = Be((x) => i.value = !i.value, ["prevent", "stop"]))
            }, [
              S("span", UB, [
                i.value ? (N(), Ue(d(se), {
                  key: 0,
                  "fixed-width": "",
                  icon: d(Pm)
                }, null, 8, ["icon"])) : (N(), Ue(d(se), {
                  key: 1,
                  "fixed-width": "",
                  icon: d(vd)
                }, null, 8, ["icon"]))
              ]),
              l[3] || (l[3] = m()),
              l[4] || (l[4] = S("span", null, null, -1)),
              l[5] || (l[5] = m(`
            ExecutorMemory
          `))
            ])
          ]),
          l[9] || (l[9] = m()),
          i.value ? (N(), D("div", kB, [
            (f = n[d(Ar).EXECUTOR_MEMORY]) != null && f[d(Br).AVERAGE_MEMORY] ? (N(), D("span", BB, `
            Average memory :
            ` + st((c = n[d(Ar).EXECUTOR_MEMORY]) == null ? void 0 : c[d(Br).AVERAGE_MEMORY]), 1)) : Q("", !0),
            l[6] || (l[6] = m()),
            (g = n[d(Ar).EXECUTOR_MEMORY]) != null && g[d(Br).NUMBER_OF_WORKER_THREADS] ? (N(), D("span", $B, `
            Number of worker threads :
            ` + st((p = n[d(Ar).EXECUTOR_MEMORY]) == null ? void 0 : p[d(Br).NUMBER_OF_WORKER_THREADS]), 1)) : Q("", !0),
            l[7] || (l[7] = m()),
            (_ = n[d(Ar).EXECUTOR_MEMORY]) != null && _[d(Br).MAXIMUM_MEMORY] ? (N(), D("span", HB, `
            Maximum memory :
  
            ` + st((R = n[d(Ar).EXECUTOR_MEMORY]) == null ? void 0 : R[d(Br).MAXIMUM_MEMORY]), 1)) : Q("", !0)
          ])) : Q("", !0),
          l[10] || (l[10] = m()),
          n[d(Ar).WORK_MEMORY] ? (N(), D("span", FB, `
          WorkMemory : ` + st(n[d(Ar).WORK_MEMORY]), 1)) : Q("", !0)
        ])
      ], 544);
    };
  }
}), VB = {
  key: 0,
  class: "flex-grow-1 d-flex justify-content-center"
}, XB = { class: "card align-self-center border-danger w-50" }, GB = { class: "card-body" }, zB = { class: "overflow-hidden d-flex w-100 h-100 position-relative mb-3" }, YB = { class: "overflow-auto flex-grow-1" }, KB = {
  class: "small p-2 mb-0",
  style: { "max-height": "200px" }
}, jB = ["innerHTML"], qB = { class: "d-flex align-items-center" }, JB = { class: "text-secondary" }, QB = { class: "d-flex align-items-center" }, ZB = { class: "nav nav-pills" }, t6 = { class: "nav-item p-1" }, e6 = { class: "nav-item p-1" }, n6 = {
  key: 0,
  class: "badge bg-info",
  style: { "font-size": "0.6em" }
}, r6 = { class: "nav-item p-1" }, i6 = { class: "nav-item p-1" }, s6 = { class: "nav-item p-1" }, o6 = { class: "ms-auto me-2 small" }, a6 = {
  href: "https://github.com/dalibo/pev2",
  target: "_blank"
}, l6 = { class: "tab-content flex-grow-1 d-flex overflow-hidden" }, u6 = { class: "d-flex flex-column flex-grow-1 overflow-hidden" }, f6 = { class: "flex-grow-1 d-flex overflow-hidden" }, c6 = { class: "flex-grow-1 overflow-hidden" }, d6 = {
  key: 0,
  class: "position-absolute m-1 p-1 bottom-0 end-0 rounded bg-white d-flex"
}, p6 = { class: "btn-group btn-group-xs" }, h6 = ["disabled"], E6 = ["disabled"], g6 = {
  key: 1,
  class: "position-absolute top-0 end-0 d-flex align-items-center"
}, v6 = {
  key: 0,
  class: "plan-node"
}, m6 = {
  width: "100%",
  height: "100%"
}, _6 = ["transform"], T6 = ["d", "stroke-width"], A6 = ["d", "stroke-width"], S6 = { key: 0 }, y6 = ["x", "y"], O6 = ["x", "y"], R6 = ["x", "y", "width"], b6 = ["x", "y", "width", "height"], I6 = ["d", "stroke-width"], L6 = ["x", "y", "width"], C6 = { class: "overflow-hidden d-flex w-100 h-100 flex-column" }, N6 = { class: "overflow-hidden d-flex w-100 h-100" }, x6 = { class: "overflow-auto flex-grow-1" }, w6 = { class: "small p-2 mb-0" }, M6 = ["innerHTML"], D6 = { class: "overflow-hidden d-flex w-100 h-100" }, P6 = { class: "overflow-auto flex-grow-1" }, U6 = { class: "small p-2 mb-0" }, k6 = ["innerHTML"], Ur = 40, Wg = 20, B6 = 10, $6 = 35, Vg = 0.2, V6 = /* @__PURE__ */ $e({
  __name: "Plan",
  props: {
    planSource: {},
    planQuery: {}
  },
  setup(t) {
    const e = t, n = "1.14.0", i = jt(null), o = jt(""), a = jt(""), l = jt(!1), f = jt(), c = jt(), g = Kn({}), p = St(() => f.value && f.value.content.Plan), _ = St(() => f.value && f.value.content.Slice), R = jt(!0), x = St(() => {
      if (!p.value || !p.value.Plans)
        return !1;
      const q = p.value.Plans;
      for (let T = 0; T < q.length; T++)
        if (q[T]["Data Slice Count"] !== void 0)
          return !0;
      return !1;
    }), P = jt(NaN), O = jt(void 0), W = jt(NaN), b = localStorage.getItem("gridIsNotNew"), w = Kn({
      showHighlightBar: !1,
      showPlanStats: !0,
      highlightType: pn.NONE,
      diagramWidth: 20
    }), Z = new p0(), v = jt(""), G = jt(1), L = St(() => G0().domain([0, g.maxRows]).range([1, Ur / 1.5])), B = tB().scaleExtent([Vg, 3]).on("zoom", function(q) {
      v.value = q.transform, G.value = q.transform.k;
    }), U = jt(null), y = jt([]), tt = jt([]), F = Y0({
      nodeSize: (q) => q.data.size ? [q.data.size[0], q.data.size[1] + Ur] : [0, 0],
      spacing: (q, T) => Math.pow(q.path(T).length, 1.5)
    }), ht = jt(F.hierarchy({}));
    Ts(() => {
      var bt;
      const q = localStorage.getItem("viewOptions");
      q && K.assignIn(w, JSON.parse(q));
      let T;
      try {
        T = Z.fromSource(e.planSource), l.value = !0, at("plan");
      } catch {
        l.value = !1, f.value = void 0;
        return;
      }
      a.value = T["Query Text"] || e.planQuery, f.value = Z.createPlan("", T, a.value);
      const Et = f.value.content;
      g.executionTime = Et["Execution Time"] || Et["Total Runtime"] || NaN, g.planningTime = Et["Planning Time"] || NaN, g.maxRows = Et.maxRows || NaN, g.maxCost = Et.maxCost || NaN, g.memoryUsed = Et["Memory used"] || NaN, g.optimizer = Et.Optimizer || "", g.maxDuration = Et.maxDuration || NaN, g.maxBlocks = Et.maxBlocks || {}, g.maxIo = Et.maxIo || NaN, g.maxEstimateFactor = Et.maxEstimateFactor || NaN, g.triggers = Et.Triggers || [], g.jitTime = Et.JIT && Et.JIT.Timing && Et.JIT.Timing.Total || NaN, g.settings = Et.Settings, f.value.planStats = g, Ko(() => {
        $();
      }), window.addEventListener("hashchange", $), p.value && (ht.value = F.hierarchy(p.value, (Bt) => Bt.Plans)), y.value = [], K.each((bt = f.value) == null ? void 0 : bt.ctes, (Bt) => {
        const Ft = F.hierarchy(Bt, (xt) => xt.Plans);
        y.value.push(Ft);
      }), M();
    });
    function M() {
      U.value = F(ht.value);
      const q = dt(U.value), T = [
        q[0],
        q[3] + Ur
      ];
      K.each(y.value, (Et) => {
        const bt = F(Et), Bt = dt(bt), Ft = Bt[1] - Bt[0];
        bt.each((xt) => {
          xt.x += T[0] - Bt[0], xt.y += T[1];
        }), T[0] += Ft + Ur * 2;
      }), tt.value = [], K.each(U.value.descendants(), (Et) => {
        if (K.has(Et.data, h.CTE_NAME)) {
          const bt = K.find(y.value, (Bt) => Bt.data[h.SUBPLAN_NAME] == "CTE " + Et.data[h.CTE_NAME]);
          bt && tt.value.push({
            source: Et,
            target: bt
          });
        }
      }), K.each(y.value, (Et) => {
        K.each(Et.descendants(), (bt) => {
          if (K.has(bt.data, h.CTE_NAME)) {
            const Bt = K.find(y.value, (Ft) => Ft.data[h.SUBPLAN_NAME] == "CTE " + bt.data[h.CTE_NAME]);
            Bt && tt.value.push({
              source: bt,
              target: Bt
            });
          }
        });
      });
    }
    _s(() => {
      c.value && (Hr(c.value.$el).call(B), Ko(() => {
        if (U.value) {
          const q = dt(U.value), T = q[0], Et = q[2], bt = q[1], Bt = q[3], Ft = c.value.$el.getBoundingClientRect();
          Hr(c.value.$el).transition().call(
            B.transform,
            tu.translate(Ft.width / 2, 10).scale(
              Math.min(
                1,
                Math.max(
                  Vg,
                  0.8 / Math.max((bt - T) / Ft.width, (Bt - Et) / Ft.height)
                )
              )
            ).translate(-(T + bt) / 2, 10)
          );
        }
      }));
    }), zO(() => {
      window.removeEventListener("hashchange", $);
    }), Ln(w, Y);
    function Y() {
      localStorage.setItem("viewOptions", JSON.stringify(w));
    }
    Ln(P, lt);
    function lt(q) {
      window.location.hash = q ? "plan/node/" + q : "", f.value && q && (O.value = NC(f.value, q));
    }
    const V = St(() => function(q) {
      const T = q.source, Et = q.target, bt = Math.abs(Et.y - (T.y + T.ySize) - Ur), Bt = F0();
      return Bt.moveTo(T.x, T.y), Bt.lineTo(T.x, T.y + T.ySize - Ur), Bt.bezierCurveTo(
        T.x,
        T.y + T.ySize - Ur + bt / 2,
        Et.x,
        Et.y - bt / 2,
        Et.x,
        Et.y
      ), Bt.toString();
    });
    function $() {
      const T = /#([a-zA-Z]*)(\/node\/([0-9]*))*/.exec(window.location.hash);
      if (T) {
        const Et = T[1] || "plan";
        at(Et);
        const bt = parseInt(T[3], 0);
        Et == "plan" && bt !== void 0 && bt != P.value && setTimeout(() => {
          ct(bt, !0);
        }, 1);
      }
    }
    Sr(Ul, P), Sr(ru, W), Sr("updateNodeSize", Tt);
    function ct(q, T) {
      T = !!T, P.value = q, T && yt(q);
    }
    Sr(ps, ct), Sr(As, w), Sr(Lr, f);
    function yt(q) {
      const T = c.value.$el.getBoundingClientRect(), Et = mt(q);
      if (!Et)
        return;
      let bt = -Et.x, Bt = -Et.y;
      const Ft = G.value;
      bt = bt * Ft + T.width / 2, Bt = Bt * Ft + T.height / 2, Hr(c.value.$el).transition().duration(500).call(B.transform, tu.translate(bt, Bt).scale(Ft));
    }
    function mt(q) {
      const T = [U.value].concat(y.value);
      let Et;
      return K.each(T, (bt) => (Et = K.find(bt == null ? void 0 : bt.descendants(), (Bt) => Bt.data.nodeId == q), !Et)), Et;
    }
    const at = (q) => {
      o.value = q;
    };
    function dt(q) {
      const T = K.min(
        K.map(q.descendants(), (Ft) => Ft.x - Ft.xSize / 2)
      ) || 0, Et = K.max(
        K.map(q.descendants(), (Ft) => Ft.x + Ft.xSize / 2)
      ) || 0, bt = K.min(
        K.map(q.descendants(), (Ft) => Ft.y)
      ) || 0, Bt = K.max(
        K.map(q.descendants(), (Ft) => Ft.y + Ft.ySize)
      ) || 0;
      return [T, Et, bt, Bt];
    }
    function ut(q) {
      return !!g.executionTime && !q[h.ACTUAL_LOOPS];
    }
    Ln(
      () => {
        const q = [];
        return q.concat(
          ht.value.descendants().map((T) => T.data.size)
        ), K.each(y.value, (T) => {
          q.concat(
            T.descendants().map((Et) => Et.data.size)
          );
        }), q;
      },
      () => {
        M();
      }
    );
    function Tt(q, T) {
      q.size = [T[0] / G.value, T[1] / G.value];
    }
    return (q, T) => l.value ? (N(), D("div", {
      key: 1,
      class: "plan-container d-flex flex-column overflow-hidden flex-grow-1 bg-light",
      ref_key: "rootEl",
      ref: i
    }, [
      S("div", QB, [
        S("ul", ZB, [
          S("li", t6, [
            S("a", {
              class: It(["nav-link px-2 py-0", { active: o.value === "plan" }]),
              href: "#plan"
            }, "Plan", 2)
          ]),
          T[18] || (T[18] = m()),
          S("li", e6, [
            S("a", {
              class: It(["nav-link px-2 py-0 position-relative", { active: o.value === "grid" }]),
              href: "#grid"
            }, [
              T[17] || (T[17] = m(`Grid
            `)),
              d(b) ? Q("", !0) : (N(), D("span", n6, `
              new
            `))
            ], 2)
          ]),
          T[19] || (T[19] = m()),
          S("li", r6, [
            S("a", {
              class: It(["nav-link px-2 py-0", { active: o.value === "raw" }]),
              href: "#raw"
            }, "Raw", 2)
          ]),
          T[20] || (T[20] = m()),
          S("li", i6, [
            S("a", {
              class: It(["nav-link px-2 py-0", { active: o.value === "query", disabled: !a.value }]),
              href: "#query"
            }, "Query", 2)
          ]),
          T[21] || (T[21] = m()),
          S("li", s6, [
            S("a", {
              class: It(["nav-link px-2 py-0", { active: o.value === "stats" }]),
              href: "#stats"
            }, "Stats", 2)
          ])
        ]),
        T[22] || (T[22] = m()),
        S("div", o6, [
          S("a", a6, [
            Rt(pg),
            m(" " + st(d(n)), 1)
          ])
        ])
      ]),
      T[45] || (T[45] = m()),
      S("div", l6, [
        S("div", {
          class: It(["tab-pane flex-grow-1 overflow-hidden", { "show active d-flex": o.value === "plan" }])
        }, [
          S("div", u6, [
            Rt(Eg),
            T[37] || (T[37] = m()),
            S("div", f6, [
              S("div", c6, [
                Rt(d(qO), {
                  class: "default-theme",
                  onResize: T[5] || (T[5] = (Et) => w.diagramWidth = Et[0].size)
                }, {
                  default: Ye(() => [
                    f.value ? (N(), Ue(d(jh), {
                      key: 0,
                      size: w.diagramWidth,
                      class: "d-flex flex-column"
                    }, {
                      default: Ye(() => [
                        Rt(m2, {
                          ref: "diagram",
                          class: "d-flex flex-column flex-grow-1 overflow-hidden plan-diagram"
                        }, null, 512)
                      ]),
                      _: 1
                    }, 8, ["size"])) : Q("", !0),
                    T[36] || (T[36] = m()),
                    Rt(d(jh), {
                      ref_key: "planEl",
                      ref: c,
                      class: "plan grab-bing position-relative"
                    }, {
                      default: Ye(() => {
                        var Et, bt, Bt, Ft;
                        return [
                          f.value ? (N(), D("div", d6, [
                            S("div", p6, [
                              S("button", {
                                class: It(["btn btn-outline-secondary", {
                                  active: w.highlightType === d(pn).NONE
                                }]),
                                onClick: T[0] || (T[0] = (xt) => w.highlightType = d(pn).NONE)
                              }, `
                        none
                      `, 2),
                              T[23] || (T[23] = m()),
                              S("button", {
                                class: It(["btn btn-outline-secondary", {
                                  active: w.highlightType === d(pn).DURATION
                                }]),
                                onClick: T[1] || (T[1] = (xt) => w.highlightType = d(pn).DURATION),
                                disabled: !f.value.isAnalyze
                              }, `
                        duration
                      `, 10, h6),
                              T[24] || (T[24] = m()),
                              S("button", {
                                class: It(["btn btn-outline-secondary", {
                                  active: w.highlightType === d(pn).ROWS
                                }]),
                                onClick: T[2] || (T[2] = (xt) => w.highlightType = d(pn).ROWS),
                                disabled: !p.value || p.value[d(h).ACTUAL_ROWS] === void 0
                              }, `
                        rows
                      `, 10, E6),
                              T[25] || (T[25] = m()),
                              S("button", {
                                class: It(["btn btn-outline-secondary", {
                                  active: w.highlightType === d(pn).COST
                                }]),
                                onClick: T[3] || (T[3] = (xt) => w.highlightType = d(pn).COST)
                              }, `
                        cost
                      `, 2)
                            ])
                          ])) : Q("", !0),
                          T[34] || (T[34] = m()),
                          _.value ? (N(), D("div", g6, [
                            S("span", {
                              class: "text-secondary",
                              onClick: T[4] || (T[4] = Be((xt) => R.value = !R.value, ["prevent", "stop"]))
                            }, [
                              R.value ? (N(), Ue(d(se), {
                                key: 0,
                                "fixed-width": "",
                                icon: d(Hm)
                              }, null, 8, ["icon"])) : (N(), Ue(d(se), {
                                key: 1,
                                "fixed-width": "",
                                icon: d(AC)
                              }, null, 8, ["icon"]))
                            ]),
                            T[26] || (T[26] = m()),
                            R.value ? (N(), D("div", v6, [
                              (N(!0), D(Ht, null, Pe(_.value, (xt, ue) => (N(), D("div", { key: ue }, [
                                Rt(WB, { "memory-details": xt }, null, 8, ["memory-details"])
                              ]))), 128))
                            ])) : Q("", !0)
                          ])) : Q("", !0),
                          T[35] || (T[35] = m()),
                          (N(), D("svg", m6, [
                            S("g", { transform: v.value }, [
                              (N(!0), D(Ht, null, Pe(tt.value, (xt, ue) => (N(), D("path", {
                                key: `linkcte${ue}`,
                                d: V.value(xt),
                                stroke: "#B3D7D7",
                                "stroke-width": L.value(
                                  xt.target.data[d(h).ACTUAL_ROWS_REVISED]
                                ),
                                fill: "none"
                              }, null, 8, T6))), 128)),
                              T[30] || (T[30] = m()),
                              (N(!0), D(Ht, null, Pe((Et = U.value) == null ? void 0 : Et.links(), (xt, ue) => (N(), D("path", {
                                key: `link${ue}`,
                                d: V.value(xt),
                                class: It({
                                  "never-executed": ut(xt.target.data)
                                }),
                                stroke: "grey",
                                "stroke-width": L.value(
                                  xt.target.data[d(h).ACTUAL_ROWS_REVISED]
                                ),
                                "stroke-linecap": "square",
                                fill: "none"
                              }, null, 10, A6))), 128)),
                              T[31] || (T[31] = m()),
                              x.value ? (N(), D("g", S6, [
                                (N(!0), D(Ht, null, Pe((bt = U.value) == null ? void 0 : bt.descendants(), (xt, ue) => (N(), D("text", {
                                  key: `text${ue}`,
                                  x: xt.x + Wg,
                                  y: xt.y - B6,
                                  "font-size": "12",
                                  fill: "black",
                                  "text-anchor": "middle",
                                  "dominant-baseline": "central"
                                }, st(xt.data[d(h).NODE_COUNT]), 9, y6))), 128)),
                                T[27] || (T[27] = m()),
                                (N(!0), D(Ht, null, Pe((Bt = U.value) == null ? void 0 : Bt.descendants(), (xt, ue) => (N(), D("text", {
                                  key: `text${ue}`,
                                  x: xt.x + Wg,
                                  y: xt.y + xt.ySize - $6,
                                  "font-size": "12",
                                  fill: "black",
                                  "text-anchor": "middle",
                                  "dominant-baseline": "central"
                                }, st(xt.data[d(h).DATA_SLICE_COUNT]), 9, O6))), 128))
                              ])) : Q("", !0),
                              T[32] || (T[32] = m()),
                              (N(!0), D(Ht, null, Pe((Ft = U.value) == null ? void 0 : Ft.descendants(), (xt, ue) => (N(), D("foreignObject", {
                                key: ue,
                                x: xt.x - xt.xSize / 2,
                                y: xt.y,
                                width: xt.xSize,
                                height: "1",
                                ref_for: !0,
                                ref: "root"
                              }, [
                                Rt(hg, {
                                  node: xt.data,
                                  class: "d-flex justify-content-center position-fixed"
                                }, null, 8, ["node"])
                              ], 8, R6))), 128)),
                              T[33] || (T[33] = m()),
                              (N(!0), D(Ht, null, Pe(y.value, (xt) => (N(), D("g", {
                                key: xt.data.nodeId
                              }, [
                                S("rect", {
                                  x: dt(xt)[0] - Ur / 4,
                                  y: dt(xt)[2] - Ur / 2,
                                  width: dt(xt)[1] - dt(xt)[0] + Ur / 2,
                                  height: dt(xt)[3] - dt(xt)[2],
                                  stroke: "#cfcfcf",
                                  "stroke-width": "2",
                                  fill: "#cfcfcf",
                                  "fill-opacity": "10%",
                                  rx: "5",
                                  ry: "5"
                                }, null, 8, b6),
                                T[28] || (T[28] = m()),
                                (N(!0), D(Ht, null, Pe(xt.links(), (ue, He) => (N(), D("path", {
                                  key: `link${He}`,
                                  d: V.value(ue),
                                  stroke: "grey",
                                  "stroke-width": L.value(
                                    ue.target.data[d(h).ACTUAL_ROWS_REVISED]
                                  ),
                                  "stroke-linecap": "square",
                                  fill: "none"
                                }, null, 8, I6))), 128)),
                                T[29] || (T[29] = m()),
                                (N(!0), D(Ht, null, Pe(xt.descendants(), (ue, He) => (N(), D("foreignObject", {
                                  key: He,
                                  x: ue.x - ue.xSize / 2,
                                  y: ue.y,
                                  width: ue.xSize,
                                  height: "1",
                                  ref_for: !0,
                                  ref: "root"
                                }, [
                                  Rt(hg, {
                                    node: ue.data,
                                    class: "d-flex justify-content-center position-fixed"
                                  }, null, 8, ["node"])
                                ], 8, L6))), 128))
                              ]))), 128))
                            ], 8, _6)
                          ]))
                        ];
                      }),
                      _: 1
                    }, 512)
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ], 2),
        T[41] || (T[41] = m()),
        o.value === "grid" ? (N(), D("div", {
          key: 0,
          class: It(["tab-pane flex-grow-1 overflow-hidden position-relative", { "show active": o.value === "grid" }])
        }, [
          S("div", C6, [
            Rt(Eg),
            T[38] || (T[38] = m()),
            Rt(VM, { class: "flex-grow-1 overflow-auto plan-grid" })
          ])
        ], 2)) : Q("", !0),
        T[42] || (T[42] = m()),
        S("div", {
          class: It(["tab-pane flex-grow-1 overflow-hidden position-relative", { "show active": o.value === "raw" }])
        }, [
          S("div", N6, [
            S("div", x6, [
              S("pre", w6, [
                S("code", {
                  innerHTML: d(eN)(q.planSource)
                }, null, 8, M6)
              ])
            ]),
            T[39] || (T[39] = m()),
            Rt(zf, { content: q.planSource }, null, 8, ["content"])
          ])
        ], 2),
        T[43] || (T[43] = m()),
        a.value ? (N(), D("div", {
          key: 1,
          class: It(["tab-pane flex-grow-1 overflow-hidden position-relative", { "show active": o.value === "query" }])
        }, [
          S("div", D6, [
            S("div", P6, [
              S("pre", U6, [
                S("code", {
                  innerHTML: d(tN)(a.value)
                }, null, 8, k6)
              ])
            ])
          ]),
          T[40] || (T[40] = m()),
          Rt(zf, { content: a.value }, null, 8, ["content"])
        ], 2)) : Q("", !0),
        T[44] || (T[44] = m()),
        S("div", {
          class: It(["tab-pane flex-grow-1 overflow-auto", { "show active": o.value === "stats" }])
        }, [
          f.value ? (N(), Ue(BP, { key: 0 })) : Q("", !0)
        ], 2)
      ])
    ], 512)) : (N(), D("div", VB, [
      S("div", XB, [
        S("div", GB, [
          T[10] || (T[10] = S("h5", { class: "card-title text-danger" }, "Couldn't parse plan", -1)),
          T[11] || (T[11] = m()),
          T[12] || (T[12] = S("h6", { class: "card-subtitle mb-2 text-body-secondary" }, `
          An error occured while parsing the plan
        `, -1)),
          T[13] || (T[13] = m()),
          S("div", zB, [
            S("div", YB, [
              S("pre", KB, [
                S("code", { innerHTML: q.planSource }, null, 8, jB)
              ])
            ]),
            T[6] || (T[6] = m()),
            Rt(zf, { content: q.planSource }, null, 8, ["content"])
          ]),
          T[14] || (T[14] = m()),
          T[15] || (T[15] = S("p", { class: "card-text text-body-dark" }, `
          The plan you submited couldn't be parsed. This may be a bug. You can
          help us fix it by opening a new issue.
        `, -1)),
          T[16] || (T[16] = m()),
          S("div", qB, [
            S("span", JB, [
              Rt(pg),
              T[7] || (T[7] = m(`
            PEV2 `)),
              S("i", null, "version " + st(d(n)), 1)
            ]),
            T[8] || (T[8] = m()),
            T[9] || (T[9] = S("a", {
              href: "https://github.com/dalibo/pev2/issues/new?template=parsing_error.md&labels=parsing&title=Failed+to+parse+plan",
              target: "_blank",
              class: "btn btn-primary ms-auto"
            }, "Open an issue on Github", -1))
          ])
        ])
      ])
    ]));
  }
});
export {
  V6 as Plan
};
