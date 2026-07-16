import { Fragment as e, computed as t, createApp as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, getCurrentInstance as u, h as d, inject as f, isReactive as p, isRef as m, isVNode as h, nextTick as g, normalizeClass as _, normalizeStyle as v, onBeforeMount as y, onBeforeUnmount as b, onMounted as x, onUnmounted as S, openBlock as C, provide as w, reactive as T, ref as E, renderList as D, renderSlot as O, resolveDynamicComponent as ee, shallowRef as k, toDisplayString as A, unref as j, useSlots as te, watch as M, withCtx as N, withDirectives as P, withModifiers as F } from "vue";
//#region \0rolldown/runtime.js
var I = Object.create, ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, ie = Object.getOwnPropertyNames, ae = Object.getPrototypeOf, oe = Object.prototype.hasOwnProperty, se = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ce = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ie(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !oe.call(e, s) && s !== n && ne(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = re(t, s)) || r.enumerable
	});
	return e;
}, le = (e, t, n) => (n = e == null ? {} : I(ae(e)), ce(t || !e || !e.__esModule ? ne(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), L = /* @__PURE__ */ le((/* @__PURE__ */ se(((e, t) => {
	(function() {
		var n, r = "4.18.1", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", o = "Expected a function", s = "Invalid `variable` option passed into `_.template`", c = "Invalid `imports` option passed into `_.template`", l = "__lodash_hash_undefined__", u = 500, d = "__lodash_placeholder__", f = 1, p = 2, m = 4, h = 1, g = 2, _ = 1, v = 2, y = 4, b = 8, x = 16, S = 32, C = 64, w = 128, T = 256, E = 512, D = 30, O = "...", ee = 800, k = 16, A = 1, j = 2, te = 3, M = Infinity, N = 9007199254740991, P = 17976931348623157e292, F = NaN, I = 4294967295, ne = I - 1, re = I >>> 1, ie = [
			["ary", w],
			["bind", _],
			["bindKey", v],
			["curry", b],
			["curryRight", x],
			["flip", E],
			["partial", S],
			["partialRight", C],
			["rearg", T]
		], ae = "[object Arguments]", oe = "[object Array]", se = "[object AsyncFunction]", ce = "[object Boolean]", le = "[object Date]", L = "[object DOMException]", ue = "[object Error]", de = "[object Function]", fe = "[object GeneratorFunction]", pe = "[object Map]", me = "[object Number]", he = "[object Null]", ge = "[object Object]", _e = "[object Promise]", R = "[object Proxy]", ve = "[object RegExp]", ye = "[object Set]", be = "[object String]", xe = "[object Symbol]", Se = "[object Undefined]", Ce = "[object WeakMap]", we = "[object WeakSet]", Te = "[object ArrayBuffer]", Ee = "[object DataView]", De = "[object Float32Array]", Oe = "[object Float64Array]", ke = "[object Int8Array]", Ae = "[object Int16Array]", je = "[object Int32Array]", Me = "[object Uint8Array]", Ne = "[object Uint8ClampedArray]", Pe = "[object Uint16Array]", Fe = "[object Uint32Array]", Ie = /\b__p \+= '';/g, Le = /\b(__p \+=) '' \+/g, Re = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ze = /&(?:amp|lt|gt|quot|#39);/g, Be = /[&<>"']/g, Ve = RegExp(ze.source), He = RegExp(Be.source), Ue = /<%-([\s\S]+?)%>/g, We = /<%([\s\S]+?)%>/g, Ge = /<%=([\s\S]+?)%>/g, Ke = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qe = /^\w*$/, Je = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ye = /[\\^$.*+?()[\]{}|]/g, Xe = RegExp(Ye.source), Ze = /^\s+/, Qe = /\s/, $e = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, et = /\{\n\/\* \[wrapped with (.+)\] \*/, tt = /,? & /, nt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, rt = /[()=,{}\[\]\/\s]/, it = /\\(\\)?/g, at = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ot = /\w*$/, st = /^[-+]0x[0-9a-f]+$/i, ct = /^0b[01]+$/i, lt = /^\[object .+?Constructor\]$/, ut = /^0o[0-7]+$/i, dt = /^(?:0|[1-9]\d*)$/, ft = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, pt = /($^)/, mt = /['\n\r\u2028\u2029\\]/g, ht = "\\ud800-\\udfff", gt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", _t = "\\u2700-\\u27bf", vt = "a-z\\xdf-\\xf6\\xf8-\\xff", yt = "\\xac\\xb1\\xd7\\xf7", bt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", xt = "\\u2000-\\u206f", St = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ct = "A-Z\\xc0-\\xd6\\xd8-\\xde", wt = "\\ufe0e\\ufe0f", Tt = yt + bt + xt + St, Et = "['’]", Dt = "[" + ht + "]", Ot = "[" + Tt + "]", kt = "[" + gt + "]", At = "\\d+", jt = "[" + _t + "]", Mt = "[" + vt + "]", Nt = "[^" + ht + Tt + At + _t + vt + Ct + "]", Pt = "\\ud83c[\\udffb-\\udfff]", Ft = "(?:" + kt + "|" + Pt + ")", It = "[^" + ht + "]", Lt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rt = "[\\ud800-\\udbff][\\udc00-\\udfff]", zt = "[" + Ct + "]", Bt = "\\u200d", Vt = "(?:" + Mt + "|" + Nt + ")", Ht = "(?:" + zt + "|" + Nt + ")", Ut = "(?:" + Et + "(?:d|ll|m|re|s|t|ve))?", Wt = "(?:" + Et + "(?:D|LL|M|RE|S|T|VE))?", Gt = Ft + "?", Kt = "[" + wt + "]?", qt = "(?:" + Bt + "(?:" + [
			It,
			Lt,
			Rt
		].join("|") + ")" + Kt + Gt + ")*", Jt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Yt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xt = Kt + Gt + qt, Zt = "(?:" + [
			jt,
			Lt,
			Rt
		].join("|") + ")" + Xt, Qt = "(?:" + [
			It + kt + "?",
			kt,
			Lt,
			Rt,
			Dt
		].join("|") + ")", $t = RegExp(Et, "g"), en = RegExp(kt, "g"), tn = RegExp(Pt + "(?=" + Pt + ")|" + Qt + Xt, "g"), nn = RegExp([
			zt + "?" + Mt + "+" + Ut + "(?=" + [
				Ot,
				zt,
				"$"
			].join("|") + ")",
			Ht + "+" + Wt + "(?=" + [
				Ot,
				zt + Vt,
				"$"
			].join("|") + ")",
			zt + "?" + Vt + "+" + Ut,
			zt + "+" + Wt,
			Yt,
			Jt,
			At,
			Zt
		].join("|"), "g"), rn = RegExp("[" + Bt + ht + gt + wt + "]"), an = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, on = /* @__PURE__ */ "Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout".split("."), sn = -1, cn = {};
		cn[De] = cn[Oe] = cn[ke] = cn[Ae] = cn[je] = cn[Me] = cn[Ne] = cn[Pe] = cn[Fe] = !0, cn[ae] = cn[oe] = cn[Te] = cn[ce] = cn[Ee] = cn[le] = cn[ue] = cn[de] = cn[pe] = cn[me] = cn[ge] = cn[ve] = cn[ye] = cn[be] = cn[Ce] = !1;
		var ln = {};
		ln[ae] = ln[oe] = ln[Te] = ln[Ee] = ln[ce] = ln[le] = ln[De] = ln[Oe] = ln[ke] = ln[Ae] = ln[je] = ln[pe] = ln[me] = ln[ge] = ln[ve] = ln[ye] = ln[be] = ln[xe] = ln[Me] = ln[Ne] = ln[Pe] = ln[Fe] = !0, ln[ue] = ln[de] = ln[Ce] = !1;
		var un = {
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
		}, dn = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}, fn = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#39;": "'"
		}, pn = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		}, mn = parseFloat, hn = parseInt, gn = typeof global == "object" && global && global.Object === Object && global, _n = typeof self == "object" && self && self.Object === Object && self, vn = gn || _n || Function("return this")(), yn = typeof e == "object" && e && !e.nodeType && e, bn = yn && typeof t == "object" && t && !t.nodeType && t, xn = bn && bn.exports === yn, Sn = xn && gn.process, Cn = function() {
			try {
				return bn && bn.require && bn.require("util").types || Sn && Sn.binding && Sn.binding("util");
			} catch {}
		}(), wn = Cn && Cn.isArrayBuffer, Tn = Cn && Cn.isDate, En = Cn && Cn.isMap, Dn = Cn && Cn.isRegExp, On = Cn && Cn.isSet, kn = Cn && Cn.isTypedArray;
		function An(e, t, n) {
			switch (n.length) {
				case 0: return e.call(t);
				case 1: return e.call(t, n[0]);
				case 2: return e.call(t, n[0], n[1]);
				case 3: return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		}
		function jn(e, t, n, r) {
			for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
				var o = e[i];
				t(r, o, n(o), e);
			}
			return r;
		}
		function Mn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
			return e;
		}
		function Nn(e, t) {
			for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
			return e;
		}
		function Pn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
			return !0;
		}
		function Fn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				t(o, n, e) && (a[i++] = o);
			}
			return a;
		}
		function In(e, t) {
			return !!(e != null && e.length) && Jn(e, t, 0) > -1;
		}
		function Ln(e, t, n) {
			for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
			return !1;
		}
		function Rn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
			return i;
		}
		function zn(e, t) {
			for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
			return e;
		}
		function Bn(e, t, n, r) {
			var i = -1, a = e == null ? 0 : e.length;
			for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
			return n;
		}
		function Vn(e, t, n, r) {
			var i = e == null ? 0 : e.length;
			for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
			return n;
		}
		function Hn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
			return !1;
		}
		var Un = Qn("length");
		function Wn(e) {
			return e.split("");
		}
		function Gn(e) {
			return e.match(nt) || [];
		}
		function Kn(e, t, n) {
			var r;
			return n(e, function(e, n, i) {
				if (t(e, n, i)) return r = n, !1;
			}), r;
		}
		function qn(e, t, n, r) {
			for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
			return -1;
		}
		function Jn(e, t, n) {
			return t === t ? Cr(e, t, n) : qn(e, Xn, n);
		}
		function Yn(e, t, n, r) {
			for (var i = n - 1, a = e.length; ++i < a;) if (r(e[i], t)) return i;
			return -1;
		}
		function Xn(e) {
			return e !== e;
		}
		function Zn(e, t) {
			var n = e == null ? 0 : e.length;
			return n ? nr(e, t) / n : F;
		}
		function Qn(e) {
			return function(t) {
				return t == null ? n : t[e];
			};
		}
		function $n(e) {
			return function(t) {
				return e == null ? n : e[t];
			};
		}
		function er(e, t, n, r, i) {
			return i(e, function(e, i, a) {
				n = r ? (r = !1, e) : t(n, e, i, a);
			}), n;
		}
		function tr(e, t) {
			var n = e.length;
			for (e.sort(t); n--;) e[n] = e[n].value;
			return e;
		}
		function nr(e, t) {
			for (var r, i = -1, a = e.length; ++i < a;) {
				var o = t(e[i]);
				o !== n && (r = r === n ? o : r + o);
			}
			return r;
		}
		function rr(e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r;
		}
		function ir(e, t) {
			return Rn(t, function(t) {
				return [t, e[t]];
			});
		}
		function ar(e) {
			return e && e.slice(0, Dr(e) + 1).replace(Ze, "");
		}
		function or(e) {
			return function(t) {
				return e(t);
			};
		}
		function sr(e, t) {
			return Rn(t, function(t) {
				return e[t];
			});
		}
		function cr(e, t) {
			return e.has(t);
		}
		function lr(e, t) {
			for (var n = -1, r = e.length; ++n < r && Jn(t, e[n], 0) > -1;);
			return n;
		}
		function ur(e, t) {
			for (var n = e.length; n-- && Jn(t, e[n], 0) > -1;);
			return n;
		}
		function dr(e, t) {
			for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
			return r;
		}
		var z = $n(un), fr = $n(dn);
		function pr(e) {
			return "\\" + pn[e];
		}
		function mr(e, t) {
			return e == null ? n : e[t];
		}
		function hr(e) {
			return rn.test(e);
		}
		function gr(e) {
			return an.test(e);
		}
		function _r(e) {
			for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
			return n;
		}
		function vr(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e, r) {
				n[++t] = [r, e];
			}), n;
		}
		function yr(e, t) {
			return function(n) {
				return e(t(n));
			};
		}
		function br(e, t) {
			for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				(o === t || o === d) && (e[n] = d, a[i++] = n);
			}
			return a;
		}
		function xr(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = e;
			}), n;
		}
		function Sr(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = [e, e];
			}), n;
		}
		function Cr(e, t, n) {
			for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
			return -1;
		}
		function wr(e, t, n) {
			for (var r = n + 1; r--;) if (e[r] === t) return r;
			return r;
		}
		function Tr(e) {
			return hr(e) ? kr(e) : Un(e);
		}
		function Er(e) {
			return hr(e) ? Ar(e) : Wn(e);
		}
		function Dr(e) {
			for (var t = e.length; t-- && Qe.test(e.charAt(t)););
			return t;
		}
		var Or = $n(fn);
		function kr(e) {
			for (var t = tn.lastIndex = 0; tn.test(e);) ++t;
			return t;
		}
		function Ar(e) {
			return e.match(tn) || [];
		}
		function jr(e) {
			return e.match(nn) || [];
		}
		var Mr = (function e(t) {
			t = t == null ? vn : Mr.defaults(vn.Object(), t, Mr.pick(vn, on));
			var Qe = t.Array, nt = t.Date, ht = t.Error, gt = t.Function, _t = t.Math, vt = t.Object, yt = t.RegExp, bt = t.String, xt = t.TypeError, St = Qe.prototype, Ct = gt.prototype, wt = vt.prototype, Tt = t["__core-js_shared__"], Et = Ct.toString, Dt = wt.hasOwnProperty, Ot = 0, kt = function() {
				var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : "";
			}(), At = wt.toString, jt = Et.call(vt), Mt = vn._, Nt = yt("^" + Et.call(Dt).replace(Ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Pt = xn ? t.Buffer : n, Ft = t.Symbol, It = t.Uint8Array, Lt = Pt ? Pt.allocUnsafe : n, Rt = yr(vt.getPrototypeOf, vt), zt = vt.create, Bt = wt.propertyIsEnumerable, Vt = St.splice, Ht = Ft ? Ft.isConcatSpreadable : n, Ut = Ft ? Ft.iterator : n, Wt = Ft ? Ft.toStringTag : n, Gt = function() {
				try {
					var e = ns(vt, "defineProperty");
					return e({}, "", {}), e;
				} catch {}
			}(), Kt = t.clearTimeout !== vn.clearTimeout && t.clearTimeout, qt = nt && nt.now !== vn.Date.now && nt.now, Jt = t.setTimeout !== vn.setTimeout && t.setTimeout, Yt = _t.ceil, Xt = _t.floor, Zt = vt.getOwnPropertySymbols, Qt = Pt ? Pt.isBuffer : n, tn = t.isFinite, nn = St.join, rn = yr(vt.keys, vt), an = _t.max, un = _t.min, dn = nt.now, fn = t.parseInt, pn = _t.random, gn = St.reverse, _n = ns(t, "DataView"), yn = ns(t, "Map"), bn = ns(t, "Promise"), Sn = ns(t, "Set"), Cn = ns(t, "WeakMap"), Un = ns(vt, "create"), Wn = Cn && new Cn(), $n = {}, Cr = Vs(_n), kr = Vs(yn), Ar = Vs(bn), Nr = Vs(Sn), Pr = Vs(Cn), Fr = Ft ? Ft.prototype : n, Ir = Fr ? Fr.valueOf : n, Lr = Fr ? Fr.toString : n;
			function B(e) {
				if (Ou(e) && !Z(e) && !(e instanceof H)) {
					if (e instanceof zr) return e;
					if (Dt.call(e, "__wrapped__")) return Us(e);
				}
				return new zr(e);
			}
			var V = function() {
				function e() {}
				return function(t) {
					if (!Du(t)) return {};
					if (zt) return zt(t);
					e.prototype = t;
					var r = new e();
					return e.prototype = n, r;
				};
			}();
			function Rr() {}
			function zr(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = n;
			}
			B.templateSettings = {
				escape: Ue,
				evaluate: We,
				interpolate: Ge,
				variable: "",
				imports: { _: B }
			}, B.prototype = Rr.prototype, B.prototype.constructor = B, zr.prototype = V(Rr.prototype), zr.prototype.constructor = zr;
			function H(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = I, this.__views__ = [];
			}
			function Br() {
				var e = new H(this.__wrapped__);
				return e.__actions__ = mo(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = mo(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = mo(this.__views__), e;
			}
			function Vr() {
				if (this.__filtered__) {
					var e = new H(this);
					e.__dir__ = -1, e.__filtered__ = !0;
				} else e = this.clone(), e.__dir__ *= -1;
				return e;
			}
			function Hr() {
				var e = this.__wrapped__.value(), t = this.__dir__, n = Z(e), r = t < 0, i = n ? e.length : 0, a = ss(0, i, this.__views__), o = a.start, s = a.end, c = s - o, l = r ? s : o - 1, u = this.__iteratees__, d = u.length, f = 0, p = un(c, this.__takeCount__);
				if (!n || !r && i == c && p == c) return Ja(e, this.__actions__);
				var m = [];
				outer: for (; c-- && f < p;) {
					l += t;
					for (var h = -1, g = e[l]; ++h < d;) {
						var _ = u[h], v = _.iteratee, y = _.type, b = v(g);
						if (y == j) g = b;
						else if (!b) {
							if (y == A) continue outer;
							break outer;
						}
					}
					m[f++] = g;
				}
				return m;
			}
			H.prototype = V(Rr.prototype), H.prototype.constructor = H;
			function Ur(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Wr() {
				this.__data__ = Un ? Un(null) : {}, this.size = 0;
			}
			function Gr(e) {
				var t = this.has(e) && delete this.__data__[e];
				return this.size -= +!!t, t;
			}
			function Kr(e) {
				var t = this.__data__;
				if (Un) {
					var r = t[e];
					return r === l ? n : r;
				}
				return Dt.call(t, e) ? t[e] : n;
			}
			function qr(e) {
				var t = this.__data__;
				return Un ? t[e] !== n : Dt.call(t, e);
			}
			function Jr(e, t) {
				var r = this.__data__;
				return this.size += +!this.has(e), r[e] = Un && t === n ? l : t, this;
			}
			Ur.prototype.clear = Wr, Ur.prototype.delete = Gr, Ur.prototype.get = Kr, Ur.prototype.has = qr, Ur.prototype.set = Jr;
			function Yr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Xr() {
				this.__data__ = [], this.size = 0;
			}
			function Zr(e) {
				var t = this.__data__, n = Si(t, e);
				return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Vt.call(t, n, 1), --this.size, !0);
			}
			function Qr(e) {
				var t = this.__data__, r = Si(t, e);
				return r < 0 ? n : t[r][1];
			}
			function $r(e) {
				return Si(this.__data__, e) > -1;
			}
			function ei(e, t) {
				var n = this.__data__, r = Si(n, e);
				return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
			}
			Yr.prototype.clear = Xr, Yr.prototype.delete = Zr, Yr.prototype.get = Qr, Yr.prototype.has = $r, Yr.prototype.set = ei;
			function ti(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function ni() {
				this.size = 0, this.__data__ = {
					hash: new Ur(),
					map: new (yn || Yr)(),
					string: new Ur()
				};
			}
			function ri(e) {
				var t = es(this, e).delete(e);
				return this.size -= +!!t, t;
			}
			function ii(e) {
				return es(this, e).get(e);
			}
			function ai(e) {
				return es(this, e).has(e);
			}
			function oi(e, t) {
				var n = es(this, e), r = n.size;
				return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
			}
			ti.prototype.clear = ni, ti.prototype.delete = ri, ti.prototype.get = ii, ti.prototype.has = ai, ti.prototype.set = oi;
			function si(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.__data__ = new ti(); ++t < n;) this.add(e[t]);
			}
			function ci(e) {
				return this.__data__.set(e, l), this;
			}
			function li(e) {
				return this.__data__.has(e);
			}
			si.prototype.add = si.prototype.push = ci, si.prototype.has = li;
			function ui(e) {
				var t = this.__data__ = new Yr(e);
				this.size = t.size;
			}
			function di() {
				this.__data__ = new Yr(), this.size = 0;
			}
			function fi(e) {
				var t = this.__data__, n = t.delete(e);
				return this.size = t.size, n;
			}
			function pi(e) {
				return this.__data__.get(e);
			}
			function mi(e) {
				return this.__data__.has(e);
			}
			function hi(e, t) {
				var n = this.__data__;
				if (n instanceof Yr) {
					var r = n.__data__;
					if (!yn || r.length < i - 1) return r.push([e, t]), this.size = ++n.size, this;
					n = this.__data__ = new ti(r);
				}
				return n.set(e, t), this.size = n.size, this;
			}
			ui.prototype.clear = di, ui.prototype.delete = fi, ui.prototype.get = pi, ui.prototype.has = mi, ui.prototype.set = hi;
			function gi(e, t) {
				var n = Z(e), r = !n && du(e), i = !n && !r && gu(e), a = !n && !r && !i && Uu(e), o = n || r || i || a, s = o ? rr(e.length, bt) : [], c = s.length;
				for (var l in e) (t || Dt.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || hs(l, c))) && s.push(l);
				return s;
			}
			function _i(e) {
				var t = e.length;
				return t ? e[Oa(0, t - 1)] : n;
			}
			function vi(e, t) {
				return Rs(mo(e), Oi(t, 0, e.length));
			}
			function yi(e) {
				return Rs(mo(e));
			}
			function bi(e, t, r) {
				(r !== n && !cu(e[t], r) || r === n && !(t in e)) && Ei(e, t, r);
			}
			function xi(e, t, r) {
				var i = e[t];
				(!(Dt.call(e, t) && cu(i, r)) || r === n && !(t in e)) && Ei(e, t, r);
			}
			function Si(e, t) {
				for (var n = e.length; n--;) if (cu(e[n][0], t)) return n;
				return -1;
			}
			function Ci(e, t, n, r) {
				return Pi(e, function(e, i, a) {
					t(r, e, n(e), a);
				}), r;
			}
			function wi(e, t) {
				return e && ho(t, wd(t), e);
			}
			function Ti(e, t) {
				return e && ho(t, Td(t), e);
			}
			function Ei(e, t, n) {
				t == "__proto__" && Gt ? Gt(e, t, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : e[t] = n;
			}
			function Di(e, t) {
				for (var r = -1, i = t.length, a = Qe(i), o = e == null; ++r < i;) a[r] = o ? n : vd(e, t[r]);
				return a;
			}
			function Oi(e, t, r) {
				return e === e && (r !== n && (e = e <= r ? e : r), t !== n && (e = e >= t ? e : t)), e;
			}
			function ki(e, t, r, i, a, o) {
				var s, c = t & f, l = t & p, u = t & m;
				if (r && (s = a ? r(e, i, a, o) : r(e)), s !== n) return s;
				if (!Du(e)) return e;
				var d = Z(e);
				if (d) {
					if (s = us(e), !c) return mo(e, s);
				} else {
					var h = os(e), g = h == de || h == fe;
					if (gu(e)) return ro(e, c);
					if (h == ge || h == ae || g && !a) {
						if (s = l || g ? {} : ds(e), !c) return l ? _o(e, Ti(s, e)) : go(e, wi(s, e));
					} else {
						if (!ln[h]) return a ? e : {};
						s = fs(e, h, c);
					}
				}
				o ||= new ui();
				var _ = o.get(e);
				if (_) return _;
				o.set(e, s), Bu(e) ? e.forEach(function(n) {
					s.add(ki(n, t, r, n, e, o));
				}) : ku(e) && e.forEach(function(n, i) {
					s.set(i, ki(n, t, r, i, e, o));
				});
				var v = d ? n : (u ? l ? Xo : Yo : l ? Td : wd)(e);
				return Mn(v || e, function(n, i) {
					v && (i = n, n = e[i]), xi(s, i, ki(n, t, r, i, e, o));
				}), s;
			}
			function Ai(e) {
				var t = wd(e);
				return function(n) {
					return ji(n, e, t);
				};
			}
			function ji(e, t, r) {
				var i = r.length;
				if (e == null) return !i;
				for (e = vt(e); i--;) {
					var a = r[i], o = t[a], s = e[a];
					if (s === n && !(a in e) || !o(s)) return !1;
				}
				return !0;
			}
			function Mi(e, t, r) {
				if (typeof e != "function") throw new xt(o);
				return Ps(function() {
					e.apply(n, r);
				}, t);
			}
			function Ni(e, t, n, r) {
				var a = -1, o = In, s = !0, c = e.length, l = [], u = t.length;
				if (!c) return l;
				n && (t = Rn(t, or(n))), r ? (o = Ln, s = !1) : t.length >= i && (o = cr, s = !1, t = new si(t));
				outer: for (; ++a < c;) {
					var d = e[a], f = n == null ? d : n(d);
					if (d = r || d !== 0 ? d : 0, s && f === f) {
						for (var p = u; p--;) if (t[p] === f) continue outer;
						l.push(d);
					} else o(t, f, r) || l.push(d);
				}
				return l;
			}
			var Pi = bo(Ui), Fi = bo(Wi, !0);
			function Ii(e, t) {
				var n = !0;
				return Pi(e, function(e, r, i) {
					return n = !!t(e, r, i), n;
				}), n;
			}
			function Li(e, t, r) {
				for (var i = -1, a = e.length; ++i < a;) {
					var o = e[i], s = t(o);
					if (s != null && (c === n ? s === s && !Hu(s) : r(s, c))) var c = s, l = o;
				}
				return l;
			}
			function Ri(e, t, r, i) {
				var a = e.length;
				for (r = Q(r), r < 0 && (r = -r > a ? 0 : a + r), i = i === n || i > a ? a : Q(i), i < 0 && (i += a), i = r > i ? 0 : Zu(i); r < i;) e[r++] = t;
				return e;
			}
			function zi(e, t) {
				var n = [];
				return Pi(e, function(e, r, i) {
					t(e, r, i) && n.push(e);
				}), n;
			}
			function Bi(e, t, n, r, i) {
				var a = -1, o = e.length;
				for (n ||= ms, i ||= []; ++a < o;) {
					var s = e[a];
					t > 0 && n(s) ? t > 1 ? Bi(s, t - 1, n, r, i) : zn(i, s) : r || (i[i.length] = s);
				}
				return i;
			}
			var Vi = xo(), Hi = xo(!0);
			function Ui(e, t) {
				return e && Vi(e, t, wd);
			}
			function Wi(e, t) {
				return e && Hi(e, t, wd);
			}
			function Gi(e, t) {
				return Fn(t, function(t) {
					return wu(e[t]);
				});
			}
			function Ki(e, t) {
				t = $a(t, e);
				for (var r = 0, i = t.length; e != null && r < i;) e = e[Bs(t[r++])];
				return r && r == i ? e : n;
			}
			function qi(e, t, n) {
				var r = t(e);
				return Z(e) ? r : zn(r, n(e));
			}
			function Ji(e) {
				return e == null ? e === n ? Se : he : Wt && Wt in vt(e) ? rs(e) : Os(e);
			}
			function Yi(e, t) {
				return e > t;
			}
			function Xi(e, t) {
				return e != null && Dt.call(e, t);
			}
			function Zi(e, t) {
				return e != null && t in vt(e);
			}
			function Qi(e, t, n) {
				return e >= un(t, n) && e < an(t, n);
			}
			function $i(e, t, r) {
				for (var i = r ? Ln : In, a = e[0].length, o = e.length, s = o, c = Qe(o), l = Infinity, u = []; s--;) {
					var d = e[s];
					s && t && (d = Rn(d, or(t))), l = un(d.length, l), c[s] = !r && (t || a >= 120 && d.length >= 120) ? new si(s && d) : n;
				}
				d = e[0];
				var f = -1, p = c[0];
				outer: for (; ++f < a && u.length < l;) {
					var m = d[f], h = t ? t(m) : m;
					if (m = r || m !== 0 ? m : 0, !(p ? cr(p, h) : i(u, h, r))) {
						for (s = o; --s;) {
							var g = c[s];
							if (!(g ? cr(g, h) : i(e[s], h, r))) continue outer;
						}
						p && p.push(h), u.push(m);
					}
				}
				return u;
			}
			function ea(e, t, n, r) {
				return Ui(e, function(e, i, a) {
					t(r, n(e), i, a);
				}), r;
			}
			function ta(e, t, r) {
				t = $a(t, e), e = As(e, t);
				var i = e == null ? e : e[Bs(mc(t))];
				return i == null ? n : An(i, e, r);
			}
			function na(e) {
				return Ou(e) && Ji(e) == ae;
			}
			function ra(e) {
				return Ou(e) && Ji(e) == Te;
			}
			function ia(e) {
				return Ou(e) && Ji(e) == le;
			}
			function aa(e, t, n, r, i) {
				return e === t ? !0 : e == null || t == null || !Ou(e) && !Ou(t) ? e !== e && t !== t : oa(e, t, n, r, aa, i);
			}
			function oa(e, t, n, r, i, a) {
				var o = Z(e), s = Z(t), c = o ? oe : os(e), l = s ? oe : os(t);
				c = c == ae ? ge : c, l = l == ae ? ge : l;
				var u = c == ge, d = l == ge, f = c == l;
				if (f && gu(e)) {
					if (!gu(t)) return !1;
					o = !0, u = !1;
				}
				if (f && !u) return a ||= new ui(), o || Uu(e) ? Go(e, t, n, r, i, a) : Ko(e, t, c, n, r, i, a);
				if (!(n & h)) {
					var p = u && Dt.call(e, "__wrapped__"), m = d && Dt.call(t, "__wrapped__");
					if (p || m) {
						var g = p ? e.value() : e, _ = m ? t.value() : t;
						return a ||= new ui(), i(g, _, n, r, a);
					}
				}
				return f ? (a ||= new ui(), qo(e, t, n, r, i, a)) : !1;
			}
			function sa(e) {
				return Ou(e) && os(e) == pe;
			}
			function U(e, t, r, i) {
				var a = r.length, o = a, s = !i;
				if (e == null) return !o;
				for (e = vt(e); a--;) {
					var c = r[a];
					if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
				}
				for (; ++a < o;) {
					c = r[a];
					var l = c[0], u = e[l], d = c[1];
					if (s && c[2]) {
						if (u === n && !(l in e)) return !1;
					} else {
						var f = new ui();
						if (i) var p = i(u, d, l, e, t, f);
						if (!(p === n ? aa(d, u, h | g, i, f) : p)) return !1;
					}
				}
				return !0;
			}
			function ca(e) {
				return !Du(e) || bs(e) ? !1 : (wu(e) ? Nt : lt).test(Vs(e));
			}
			function la(e) {
				return Ou(e) && Ji(e) == ve;
			}
			function ua(e) {
				return Ou(e) && os(e) == ye;
			}
			function da(e) {
				return Ou(e) && Eu(e.length) && !!cn[Ji(e)];
			}
			function fa(e) {
				return typeof e == "function" ? e : e == null ? Nf : typeof e == "object" ? Z(e) ? va(e[0], e[1]) : _a(e) : Kf(e);
			}
			function pa(e) {
				if (!Ss(e)) return rn(e);
				var t = [];
				for (var n in vt(e)) Dt.call(e, n) && n != "constructor" && t.push(n);
				return t;
			}
			function ma(e) {
				if (!Du(e)) return Ds(e);
				var t = Ss(e), n = [];
				for (var r in e) r == "constructor" && (t || !Dt.call(e, r)) || n.push(r);
				return n;
			}
			function ha(e, t) {
				return e < t;
			}
			function ga(e, t) {
				var n = -1, r = pu(e) ? Qe(e.length) : [];
				return Pi(e, function(e, i, a) {
					r[++n] = t(e, i, a);
				}), r;
			}
			function _a(e) {
				var t = ts(e);
				return t.length == 1 && t[0][2] ? ws(t[0][0], t[0][1]) : function(n) {
					return n === e || U(n, e, t);
				};
			}
			function va(e, t) {
				return _s(e) && Cs(t) ? ws(Bs(e), t) : function(r) {
					var i = vd(r, e);
					return i === n && i === t ? bd(r, e) : aa(t, i, h | g);
				};
			}
			function ya(e, t, r, i, a) {
				e !== t && Vi(t, function(o, s) {
					if (a ||= new ui(), Du(o)) ba(e, t, s, r, ya, i, a);
					else {
						var c = i ? i(Ms(e, s), o, s + "", e, t, a) : n;
						c === n && (c = o), bi(e, s, c);
					}
				}, Td);
			}
			function ba(e, t, r, i, a, o, s) {
				var c = Ms(e, r), l = Ms(t, r), u = s.get(l);
				if (u) {
					bi(e, r, u);
					return;
				}
				var d = o ? o(c, l, r + "", e, t, s) : n, f = d === n;
				if (f) {
					var p = Z(l), m = !p && gu(l), h = !p && !m && Uu(l);
					d = l, p || m || h ? Z(c) ? d = c : mu(c) ? d = mo(c) : m ? (f = !1, d = ro(l, !0)) : h ? (f = !1, d = co(l, !0)) : d = [] : Lu(l) || du(l) ? (d = c, du(c) ? d = $u(c) : (!Du(c) || wu(c)) && (d = ds(l))) : f = !1;
				}
				f && (s.set(l, d), a(d, l, i, o, s), s.delete(l)), bi(e, r, d);
			}
			function xa(e, t) {
				var r = e.length;
				if (r) return t += t < 0 ? r : 0, hs(t, r) ? e[t] : n;
			}
			function Sa(e, t, n) {
				t = t.length ? Rn(t, function(e) {
					return Z(e) ? function(t) {
						return Ki(t, e.length === 1 ? e[0] : e);
					} : e;
				}) : [Nf];
				var r = -1;
				return t = Rn(t, or(G())), tr(ga(e, function(e, n, i) {
					return {
						criteria: Rn(t, function(t) {
							return t(e);
						}),
						index: ++r,
						value: e
					};
				}), function(e, t) {
					return uo(e, t, n);
				});
			}
			function Ca(e, t) {
				return wa(e, t, function(t, n) {
					return bd(e, n);
				});
			}
			function wa(e, t, n) {
				for (var r = -1, i = t.length, a = {}; ++r < i;) {
					var o = t[r], s = Ki(e, o);
					n(s, o) && Na(a, $a(o, e), s);
				}
				return a;
			}
			function Ta(e) {
				return function(t) {
					return Ki(t, e);
				};
			}
			function Ea(e, t, n, r) {
				var i = r ? Yn : Jn, a = -1, o = t.length, s = e;
				for (e === t && (t = mo(t)), n && (s = Rn(e, or(n))); ++a < o;) for (var c = 0, l = t[a], u = n ? n(l) : l; (c = i(s, u, c, r)) > -1;) s !== e && Vt.call(s, c, 1), Vt.call(e, c, 1);
				return e;
			}
			function Da(e, t) {
				for (var n = e ? t.length : 0, r = n - 1; n--;) {
					var i = t[n];
					if (n == r || i !== a) {
						var a = i;
						hs(i) ? Vt.call(e, i, 1) : Ga(e, i);
					}
				}
				return e;
			}
			function Oa(e, t) {
				return e + Xt(pn() * (t - e + 1));
			}
			function ka(e, t, n, r) {
				for (var i = -1, a = an(Yt((t - e) / (n || 1)), 0), o = Qe(a); a--;) o[r ? a : ++i] = e, e += n;
				return o;
			}
			function Aa(e, t) {
				var n = "";
				if (!e || t < 1 || t > N) return n;
				do
					t % 2 && (n += e), t = Xt(t / 2), t && (e += e);
				while (t);
				return n;
			}
			function W(e, t) {
				return Fs(ks(e, t, Nf), e + "");
			}
			function ja(e) {
				return _i(Ud(e));
			}
			function Ma(e, t) {
				var n = Ud(e);
				return Rs(n, Oi(t, 0, n.length));
			}
			function Na(e, t, r, i) {
				if (!Du(e)) return e;
				t = $a(t, e);
				for (var a = -1, o = t.length, s = o - 1, c = e; c != null && ++a < o;) {
					var l = Bs(t[a]), u = r;
					if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
					if (a != s) {
						var d = c[l];
						u = i ? i(d, l, c) : n, u === n && (u = Du(d) ? d : hs(t[a + 1]) ? [] : {});
					}
					xi(c, l, u), c = c[l];
				}
				return e;
			}
			var Pa = Wn ? function(e, t) {
				return Wn.set(e, t), e;
			} : Nf, Fa = Gt ? function(e, t) {
				return Gt(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: kf(t),
					writable: !0
				});
			} : Nf;
			function Ia(e) {
				return Rs(Ud(e));
			}
			function La(e, t, n) {
				var r = -1, i = e.length;
				t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
				for (var a = Qe(i); ++r < i;) a[r] = e[r + t];
				return a;
			}
			function Ra(e, t) {
				var n;
				return Pi(e, function(e, r, i) {
					return n = t(e, r, i), !n;
				}), !!n;
			}
			function za(e, t, n) {
				var r = 0, i = e == null ? r : e.length;
				if (typeof t == "number" && t === t && i <= re) {
					for (; r < i;) {
						var a = r + i >>> 1, o = e[a];
						o !== null && !Hu(o) && (n ? o <= t : o < t) ? r = a + 1 : i = a;
					}
					return i;
				}
				return Ba(e, t, Nf, n);
			}
			function Ba(e, t, r, i) {
				var a = 0, o = e == null ? 0 : e.length;
				if (o === 0) return 0;
				t = r(t);
				for (var s = t !== t, c = t === null, l = Hu(t), u = t === n; a < o;) {
					var d = Xt((a + o) / 2), f = r(e[d]), p = f !== n, m = f === null, h = f === f, g = Hu(f);
					if (s) var _ = i || h;
					else _ = u ? h && (i || p) : c ? h && p && (i || !m) : l ? h && p && !m && (i || !g) : m || g ? !1 : i ? f <= t : f < t;
					_ ? a = d + 1 : o = d;
				}
				return un(o, ne);
			}
			function Va(e, t) {
				for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
					var o = e[n], s = t ? t(o) : o;
					if (!n || !cu(s, c)) {
						var c = s;
						a[i++] = o === 0 ? 0 : o;
					}
				}
				return a;
			}
			function Ha(e) {
				return typeof e == "number" ? e : Hu(e) ? F : +e;
			}
			function Ua(e) {
				if (typeof e == "string") return e;
				if (Z(e)) return Rn(e, Ua) + "";
				if (Hu(e)) return Lr ? Lr.call(e) : "";
				var t = e + "";
				return t == "0" && 1 / e == -M ? "-0" : t;
			}
			function Wa(e, t, n) {
				var r = -1, a = In, o = e.length, s = !0, c = [], l = c;
				if (n) s = !1, a = Ln;
				else if (o >= i) {
					var u = t ? null : zo(e);
					if (u) return xr(u);
					s = !1, a = cr, l = new si();
				} else l = t ? [] : c;
				outer: for (; ++r < o;) {
					var d = e[r], f = t ? t(d) : d;
					if (d = n || d !== 0 ? d : 0, s && f === f) {
						for (var p = l.length; p--;) if (l[p] === f) continue outer;
						t && l.push(f), c.push(d);
					} else a(l, f, n) || (l !== c && l.push(f), c.push(d));
				}
				return c;
			}
			function Ga(e, t) {
				t = $a(t, e);
				var n = -1, r = t.length;
				if (!r) return !0;
				for (; ++n < r;) {
					var i = Bs(t[n]);
					if (i === "__proto__" && !Dt.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
				}
				var a = As(e, t);
				return a == null || delete a[Bs(mc(t))];
			}
			function Ka(e, t, n, r) {
				return Na(e, t, n(Ki(e, t)), r);
			}
			function qa(e, t, n, r) {
				for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e););
				return n ? La(e, r ? 0 : a, r ? a + 1 : i) : La(e, r ? a + 1 : 0, r ? i : a);
			}
			function Ja(e, t) {
				var n = e;
				return n instanceof H && (n = n.value()), Bn(t, function(e, t) {
					return t.func.apply(t.thisArg, zn([e], t.args));
				}, n);
			}
			function Ya(e, t, n) {
				var r = e.length;
				if (r < 2) return r ? Wa(e[0]) : [];
				for (var i = -1, a = Qe(r); ++i < r;) for (var o = e[i], s = -1; ++s < r;) s != i && (a[i] = Ni(a[i] || o, e[s], t, n));
				return Wa(Bi(a, 1), t, n);
			}
			function Xa(e, t, r) {
				for (var i = -1, a = e.length, o = t.length, s = {}; ++i < a;) {
					var c = i < o ? t[i] : n;
					r(s, e[i], c);
				}
				return s;
			}
			function Za(e) {
				return mu(e) ? e : [];
			}
			function Qa(e) {
				return typeof e == "function" ? e : Nf;
			}
			function $a(e, t) {
				return Z(e) ? e : _s(e, t) ? [e] : zs(td(e));
			}
			var eo = W;
			function to(e, t, r) {
				var i = e.length;
				return r = r === n ? i : r, !t && r >= i ? e : La(e, t, r);
			}
			var no = Kt || function(e) {
				return vn.clearTimeout(e);
			};
			function ro(e, t) {
				if (t) return e.slice();
				var n = e.length, r = Lt ? Lt(n) : new e.constructor(n);
				return e.copy(r), r;
			}
			function io(e) {
				var t = new e.constructor(e.byteLength);
				return new It(t).set(new It(e)), t;
			}
			function ao(e, t) {
				var n = t ? io(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.byteLength);
			}
			function oo(e) {
				var t = new e.constructor(e.source, ot.exec(e));
				return t.lastIndex = e.lastIndex, t;
			}
			function so(e) {
				return Ir ? vt(Ir.call(e)) : {};
			}
			function co(e, t) {
				var n = t ? io(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length);
			}
			function lo(e, t) {
				if (e !== t) {
					var r = e !== n, i = e === null, a = e === e, o = Hu(e), s = t !== n, c = t === null, l = t === t, u = Hu(t);
					if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !r && l || !a) return 1;
					if (!i && !o && !u && e < t || u && r && a && !i && !o || c && r && a || !s && a || !l) return -1;
				}
				return 0;
			}
			function uo(e, t, n) {
				for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
					var c = lo(i[r], a[r]);
					if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
				}
				return e.index - t.index;
			}
			function fo(e, t, n, r) {
				for (var i = -1, a = e.length, o = n.length, s = -1, c = t.length, l = an(a - o, 0), u = Qe(c + l), d = !r; ++s < c;) u[s] = t[s];
				for (; ++i < o;) (d || i < a) && (u[n[i]] = e[i]);
				for (; l--;) u[s++] = e[i++];
				return u;
			}
			function po(e, t, n, r) {
				for (var i = -1, a = e.length, o = -1, s = n.length, c = -1, l = t.length, u = an(a - s, 0), d = Qe(u + l), f = !r; ++i < u;) d[i] = e[i];
				for (var p = i; ++c < l;) d[p + c] = t[c];
				for (; ++o < s;) (f || i < a) && (d[p + n[o]] = e[i++]);
				return d;
			}
			function mo(e, t) {
				var n = -1, r = e.length;
				for (t ||= Qe(r); ++n < r;) t[n] = e[n];
				return t;
			}
			function ho(e, t, r, i) {
				var a = !r;
				r ||= {};
				for (var o = -1, s = t.length; ++o < s;) {
					var c = t[o], l = i ? i(r[c], e[c], c, r, e) : n;
					l === n && (l = e[c]), a ? Ei(r, c, l) : xi(r, c, l);
				}
				return r;
			}
			function go(e, t) {
				return ho(e, is(e), t);
			}
			function _o(e, t) {
				return ho(e, as(e), t);
			}
			function vo(e, t) {
				return function(n, r) {
					var i = Z(n) ? jn : Ci, a = t ? t() : {};
					return i(n, e, G(r, 2), a);
				};
			}
			function yo(e) {
				return W(function(t, r) {
					var i = -1, a = r.length, o = a > 1 ? r[a - 1] : n, s = a > 2 ? r[2] : n;
					for (o = e.length > 3 && typeof o == "function" ? (a--, o) : n, s && gs(r[0], r[1], s) && (o = a < 3 ? n : o, a = 1), t = vt(t); ++i < a;) {
						var c = r[i];
						c && e(t, c, i, o);
					}
					return t;
				});
			}
			function bo(e, t) {
				return function(n, r) {
					if (n == null) return n;
					if (!pu(n)) return e(n, r);
					for (var i = n.length, a = t ? i : -1, o = vt(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
					return n;
				};
			}
			function xo(e) {
				return function(t, n, r) {
					for (var i = -1, a = vt(t), o = r(t), s = o.length; s--;) {
						var c = o[e ? s : ++i];
						if (n(a[c], c, a) === !1) break;
					}
					return t;
				};
			}
			function So(e, t, n) {
				var r = t & _, i = To(e);
				function a() {
					return (this && this !== vn && this instanceof a ? i : e).apply(r ? n : this, arguments);
				}
				return a;
			}
			function Co(e) {
				return function(t) {
					t = td(t);
					var r = hr(t) ? Er(t) : n, i = r ? r[0] : t.charAt(0), a = r ? to(r, 1).join("") : t.slice(1);
					return i[e]() + a;
				};
			}
			function wo(e) {
				return function(t) {
					return Bn(wf(Xd(t).replace($t, "")), e, "");
				};
			}
			function To(e) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return new e();
						case 1: return new e(t[0]);
						case 2: return new e(t[0], t[1]);
						case 3: return new e(t[0], t[1], t[2]);
						case 4: return new e(t[0], t[1], t[2], t[3]);
						case 5: return new e(t[0], t[1], t[2], t[3], t[4]);
						case 6: return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7: return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
					}
					var n = V(e.prototype), r = e.apply(n, t);
					return Du(r) ? r : n;
				};
			}
			function Eo(e, t, r) {
				var i = To(e);
				function a() {
					for (var o = arguments.length, s = Qe(o), c = o, l = $o(a); c--;) s[c] = arguments[c];
					var u = o < 3 && s[0] !== l && s[o - 1] !== l ? [] : br(s, l);
					return o -= u.length, o < r ? Lo(e, t, ko, a.placeholder, n, s, u, n, n, r - o) : An(this && this !== vn && this instanceof a ? i : e, this, s);
				}
				return a;
			}
			function Do(e) {
				return function(t, r, i) {
					var a = vt(t);
					if (!pu(t)) {
						var o = G(r, 3);
						t = wd(t), r = function(e) {
							return o(a[e], e, a);
						};
					}
					var s = e(t, r, i);
					return s > -1 ? a[o ? t[s] : s] : n;
				};
			}
			function Oo(e) {
				return Jo(function(t) {
					var r = t.length, i = r, a = zr.prototype.thru;
					for (e && t.reverse(); i--;) {
						var s = t[i];
						if (typeof s != "function") throw new xt(o);
						if (a && !c && Qo(s) == "wrapper") var c = new zr([], !0);
					}
					for (i = c ? i : r; ++i < r;) {
						s = t[i];
						var l = Qo(s), u = l == "wrapper" ? Zo(s) : n;
						c = u && ys(u[0]) && u[1] == (w | b | S | T) && !u[4].length && u[9] == 1 ? c[Qo(u[0])].apply(c, u[3]) : s.length == 1 && ys(s) ? c[l]() : c.thru(s);
					}
					return function() {
						var e = arguments, n = e[0];
						if (c && e.length == 1 && Z(n)) return c.plant(n).value();
						for (var i = 0, a = r ? t[i].apply(this, e) : n; ++i < r;) a = t[i].call(this, a);
						return a;
					};
				});
			}
			function ko(e, t, r, i, a, o, s, c, l, u) {
				var d = t & w, f = t & _, p = t & v, m = t & (b | x), h = t & E, g = p ? n : To(e);
				function y() {
					for (var n = arguments.length, _ = Qe(n), v = n; v--;) _[v] = arguments[v];
					if (m) var b = $o(y), x = dr(_, b);
					if (i && (_ = fo(_, i, a, m)), o && (_ = po(_, o, s, m)), n -= x, m && n < u) {
						var S = br(_, b);
						return Lo(e, t, ko, y.placeholder, r, _, S, c, l, u - n);
					}
					var C = f ? r : this, w = p ? C[e] : e;
					return n = _.length, c ? _ = js(_, c) : h && n > 1 && _.reverse(), d && l < n && (_.length = l), this && this !== vn && this instanceof y && (w = g || To(w)), w.apply(C, _);
				}
				return y;
			}
			function Ao(e, t) {
				return function(n, r) {
					return ea(n, e, t(r), {});
				};
			}
			function jo(e, t) {
				return function(r, i) {
					var a;
					if (r === n && i === n) return t;
					if (r !== n && (a = r), i !== n) {
						if (a === n) return i;
						typeof r == "string" || typeof i == "string" ? (r = Ua(r), i = Ua(i)) : (r = Ha(r), i = Ha(i)), a = e(r, i);
					}
					return a;
				};
			}
			function Mo(e) {
				return Jo(function(t) {
					return t = Rn(t, or(G())), W(function(n) {
						var r = this;
						return e(t, function(e) {
							return An(e, r, n);
						});
					});
				});
			}
			function No(e, t) {
				t = t === n ? " " : Ua(t);
				var r = t.length;
				if (r < 2) return r ? Aa(t, e) : t;
				var i = Aa(t, Yt(e / Tr(t)));
				return hr(t) ? to(Er(i), 0, e).join("") : i.slice(0, e);
			}
			function Po(e, t, n, r) {
				var i = t & _, a = To(e);
				function o() {
					for (var t = -1, s = arguments.length, c = -1, l = r.length, u = Qe(l + s), d = this && this !== vn && this instanceof o ? a : e; ++c < l;) u[c] = r[c];
					for (; s--;) u[c++] = arguments[++t];
					return An(d, i ? n : this, u);
				}
				return o;
			}
			function Fo(e) {
				return function(t, r, i) {
					return i && typeof i != "number" && gs(t, r, i) && (r = i = n), t = Xu(t), r === n ? (r = t, t = 0) : r = Xu(r), i = i === n ? t < r ? 1 : -1 : Xu(i), ka(t, r, i, e);
				};
			}
			function Io(e) {
				return function(t, n) {
					return typeof t == "string" && typeof n == "string" || (t = Qu(t), n = Qu(n)), e(t, n);
				};
			}
			function Lo(e, t, r, i, a, o, s, c, l, u) {
				var d = t & b, f = d ? s : n, p = d ? n : s, m = d ? o : n, h = d ? n : o;
				t |= d ? S : C, t &= ~(d ? C : S), t & y || (t &= ~(_ | v));
				var g = [
					e,
					t,
					a,
					m,
					f,
					h,
					p,
					c,
					l,
					u
				], x = r.apply(n, g);
				return ys(e) && Ns(x, g), x.placeholder = i, Is(x, e, t);
			}
			function Ro(e) {
				var t = _t[e];
				return function(e, n) {
					if (e = Qu(e), n = n == null ? 0 : un(Q(n), 292), n && tn(e)) {
						var r = (td(e) + "e").split("e");
						return r = (td(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n));
					}
					return t(e);
				};
			}
			var zo = Sn && 1 / xr(new Sn([, -0]))[1] == M ? function(e) {
				return new Sn(e);
			} : Vf;
			function Bo(e) {
				return function(t) {
					var n = os(t);
					return n == pe ? vr(t) : n == ye ? Sr(t) : ir(t, e(t));
				};
			}
			function Vo(e, t, r, i, a, s, c, l) {
				var u = t & v;
				if (!u && typeof e != "function") throw new xt(o);
				var d = i ? i.length : 0;
				if (d || (t &= ~(S | C), i = a = n), c = c === n ? c : an(Q(c), 0), l = l === n ? l : Q(l), d -= a ? a.length : 0, t & C) {
					var f = i, p = a;
					i = a = n;
				}
				var m = u ? n : Zo(e), h = [
					e,
					t,
					r,
					i,
					a,
					f,
					p,
					s,
					c,
					l
				];
				if (m && Es(h, m), e = h[0], t = h[1], r = h[2], i = h[3], a = h[4], l = h[9] = h[9] === n ? u ? 0 : e.length : an(h[9] - d, 0), !l && t & (b | x) && (t &= ~(b | x)), !t || t == _) var g = So(e, t, r);
				else g = t == b || t == x ? Eo(e, t, l) : (t == S || t == (_ | S)) && !a.length ? Po(e, t, r, i) : ko.apply(n, h);
				return Is((m ? Pa : Ns)(g, h), e, t);
			}
			function Ho(e, t, r, i) {
				return e === n || cu(e, wt[r]) && !Dt.call(i, r) ? t : e;
			}
			function Uo(e, t, r, i, a, o) {
				return Du(e) && Du(t) && (o.set(t, e), ya(e, t, n, Uo, o), o.delete(t)), e;
			}
			function Wo(e) {
				return Lu(e) ? n : e;
			}
			function Go(e, t, r, i, a, o) {
				var s = r & h, c = e.length, l = t.length;
				if (c != l && !(s && l > c)) return !1;
				var u = o.get(e), d = o.get(t);
				if (u && d) return u == t && d == e;
				var f = -1, p = !0, m = r & g ? new si() : n;
				for (o.set(e, t), o.set(t, e); ++f < c;) {
					var _ = e[f], v = t[f];
					if (i) var y = s ? i(v, _, f, t, e, o) : i(_, v, f, e, t, o);
					if (y !== n) {
						if (y) continue;
						p = !1;
						break;
					}
					if (m) {
						if (!Hn(t, function(e, t) {
							if (!cr(m, t) && (_ === e || a(_, e, r, i, o))) return m.push(t);
						})) {
							p = !1;
							break;
						}
					} else if (!(_ === v || a(_, v, r, i, o))) {
						p = !1;
						break;
					}
				}
				return o.delete(e), o.delete(t), p;
			}
			function Ko(e, t, n, r, i, a, o) {
				switch (n) {
					case Ee:
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
						e = e.buffer, t = t.buffer;
					case Te: return !(e.byteLength != t.byteLength || !a(new It(e), new It(t)));
					case ce:
					case le:
					case me: return cu(+e, +t);
					case ue: return e.name == t.name && e.message == t.message;
					case ve:
					case be: return e == t + "";
					case pe: var s = vr;
					case ye:
						var c = r & h;
						if (s ||= xr, e.size != t.size && !c) return !1;
						var l = o.get(e);
						if (l) return l == t;
						r |= g, o.set(e, t);
						var u = Go(s(e), s(t), r, i, a, o);
						return o.delete(e), u;
					case xe: if (Ir) return Ir.call(e) == Ir.call(t);
				}
				return !1;
			}
			function qo(e, t, r, i, a, o) {
				var s = r & h, c = Yo(e), l = c.length;
				if (l != Yo(t).length && !s) return !1;
				for (var u = l; u--;) {
					var d = c[u];
					if (!(s ? d in t : Dt.call(t, d))) return !1;
				}
				var f = o.get(e), p = o.get(t);
				if (f && p) return f == t && p == e;
				var m = !0;
				o.set(e, t), o.set(t, e);
				for (var g = s; ++u < l;) {
					d = c[u];
					var _ = e[d], v = t[d];
					if (i) var y = s ? i(v, _, d, t, e, o) : i(_, v, d, e, t, o);
					if (!(y === n ? _ === v || a(_, v, r, i, o) : y)) {
						m = !1;
						break;
					}
					g ||= d == "constructor";
				}
				if (m && !g) {
					var b = e.constructor, x = t.constructor;
					b != x && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof x == "function" && x instanceof x) && (m = !1);
				}
				return o.delete(e), o.delete(t), m;
			}
			function Jo(e) {
				return Fs(ks(e, n, rc), e + "");
			}
			function Yo(e) {
				return qi(e, wd, is);
			}
			function Xo(e) {
				return qi(e, Td, as);
			}
			var Zo = Wn ? function(e) {
				return Wn.get(e);
			} : Vf;
			function Qo(e) {
				for (var t = e.name + "", n = $n[t], r = Dt.call($n, t) ? n.length : 0; r--;) {
					var i = n[r], a = i.func;
					if (a == null || a == e) return i.name;
				}
				return t;
			}
			function $o(e) {
				return (Dt.call(B, "placeholder") ? B : e).placeholder;
			}
			function G() {
				var e = B.iteratee || Pf;
				return e = e === Pf ? fa : e, arguments.length ? e(arguments[0], arguments[1]) : e;
			}
			function es(e, t) {
				var n = e.__data__;
				return vs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
			}
			function ts(e) {
				for (var t = wd(e), n = t.length; n--;) {
					var r = t[n], i = e[r];
					t[n] = [
						r,
						i,
						Cs(i)
					];
				}
				return t;
			}
			function ns(e, t) {
				var r = mr(e, t);
				return ca(r) ? r : n;
			}
			function rs(e) {
				var t = Dt.call(e, Wt), r = e[Wt];
				try {
					e[Wt] = n;
					var i = !0;
				} catch {}
				var a = At.call(e);
				return i && (t ? e[Wt] = r : delete e[Wt]), a;
			}
			var is = Zt ? function(e) {
				return e == null ? [] : (e = vt(e), Fn(Zt(e), function(t) {
					return Bt.call(e, t);
				}));
			} : Xf, as = Zt ? function(e) {
				for (var t = []; e;) zn(t, is(e)), e = Rt(e);
				return t;
			} : Xf, os = Ji;
			(_n && os(new _n(/* @__PURE__ */ new ArrayBuffer(1))) != Ee || yn && os(new yn()) != pe || bn && os(bn.resolve()) != _e || Sn && os(new Sn()) != ye || Cn && os(new Cn()) != Ce) && (os = function(e) {
				var t = Ji(e), r = t == ge ? e.constructor : n, i = r ? Vs(r) : "";
				if (i) switch (i) {
					case Cr: return Ee;
					case kr: return pe;
					case Ar: return _e;
					case Nr: return ye;
					case Pr: return Ce;
				}
				return t;
			});
			function ss(e, t, n) {
				for (var r = -1, i = n.length; ++r < i;) {
					var a = n[r], o = a.size;
					switch (a.type) {
						case "drop":
							e += o;
							break;
						case "dropRight":
							t -= o;
							break;
						case "take":
							t = un(t, e + o);
							break;
						case "takeRight":
							e = an(e, t - o);
							break;
					}
				}
				return {
					start: e,
					end: t
				};
			}
			function cs(e) {
				var t = e.match(et);
				return t ? t[1].split(tt) : [];
			}
			function ls(e, t, n) {
				t = $a(t, e);
				for (var r = -1, i = t.length, a = !1; ++r < i;) {
					var o = Bs(t[r]);
					if (!(a = e != null && n(e, o))) break;
					e = e[o];
				}
				return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && Eu(i) && hs(o, i) && (Z(e) || du(e)));
			}
			function us(e) {
				var t = e.length, n = new e.constructor(t);
				return t && typeof e[0] == "string" && Dt.call(e, "index") && (n.index = e.index, n.input = e.input), n;
			}
			function ds(e) {
				return typeof e.constructor == "function" && !Ss(e) ? V(Rt(e)) : {};
			}
			function fs(e, t, n) {
				var r = e.constructor;
				switch (t) {
					case Te: return io(e);
					case ce:
					case le: return new r(+e);
					case Ee: return ao(e, n);
					case De:
					case Oe:
					case ke:
					case Ae:
					case je:
					case Me:
					case Ne:
					case Pe:
					case Fe: return co(e, n);
					case pe: return new r();
					case me:
					case be: return new r(e);
					case ve: return oo(e);
					case ye: return new r();
					case xe: return so(e);
				}
			}
			function ps(e, t) {
				var n = t.length;
				if (!n) return e;
				var r = n - 1;
				return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace($e, "{\n/* [wrapped with " + t + "] */\n");
			}
			function ms(e) {
				return Z(e) || du(e) || !!(Ht && e && e[Ht]);
			}
			function hs(e, t) {
				var n = typeof e;
				return t ??= N, !!t && (n == "number" || n != "symbol" && dt.test(e)) && e > -1 && e % 1 == 0 && e < t;
			}
			function gs(e, t, n) {
				if (!Du(n)) return !1;
				var r = typeof t;
				return (r == "number" ? pu(n) && hs(t, n.length) : r == "string" && t in n) ? cu(n[t], e) : !1;
			}
			function _s(e, t) {
				if (Z(e)) return !1;
				var n = typeof e;
				return n == "number" || n == "symbol" || n == "boolean" || e == null || Hu(e) ? !0 : qe.test(e) || !Ke.test(e) || t != null && e in vt(t);
			}
			function vs(e) {
				var t = typeof e;
				return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
			}
			function ys(e) {
				var t = Qo(e), n = B[t];
				if (typeof n != "function" || !(t in H.prototype)) return !1;
				if (e === n) return !0;
				var r = Zo(n);
				return !!r && e === r[0];
			}
			function bs(e) {
				return !!kt && kt in e;
			}
			var xs = Tt ? wu : Zf;
			function Ss(e) {
				var t = e && e.constructor;
				return e === (typeof t == "function" && t.prototype || wt);
			}
			function Cs(e) {
				return e === e && !Du(e);
			}
			function ws(e, t) {
				return function(r) {
					return r == null ? !1 : r[e] === t && (t !== n || e in vt(r));
				};
			}
			function Ts(e) {
				var t = Wl(e, function(e) {
					return n.size === u && n.clear(), e;
				}), n = t.cache;
				return t;
			}
			function Es(e, t) {
				var n = e[1], r = t[1], i = n | r, a = i < (_ | v | w), o = r == w && n == b || r == w && n == T && e[7].length <= t[8] || r == (w | T) && t[7].length <= t[8] && n == b;
				if (!(a || o)) return e;
				r & _ && (e[2] = t[2], i |= n & _ ? 0 : y);
				var s = t[3];
				if (s) {
					var c = e[3];
					e[3] = c ? fo(c, s, t[4]) : s, e[4] = c ? br(e[3], d) : t[4];
				}
				return s = t[5], s && (c = e[5], e[5] = c ? po(c, s, t[6]) : s, e[6] = c ? br(e[5], d) : t[6]), s = t[7], s && (e[7] = s), r & w && (e[8] = e[8] == null ? t[8] : un(e[8], t[8])), e[9] ??= t[9], e[0] = t[0], e[1] = i, e;
			}
			function Ds(e) {
				var t = [];
				if (e != null) for (var n in vt(e)) t.push(n);
				return t;
			}
			function Os(e) {
				return At.call(e);
			}
			function ks(e, t, r) {
				return t = an(t === n ? e.length - 1 : t, 0), function() {
					for (var n = arguments, i = -1, a = an(n.length - t, 0), o = Qe(a); ++i < a;) o[i] = n[t + i];
					i = -1;
					for (var s = Qe(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(o), An(e, this, s);
				};
			}
			function As(e, t) {
				return t.length < 2 ? e : Ki(e, La(t, 0, -1));
			}
			function js(e, t) {
				for (var r = e.length, i = un(t.length, r), a = mo(e); i--;) {
					var o = t[i];
					e[i] = hs(o, r) ? a[o] : n;
				}
				return e;
			}
			function Ms(e, t) {
				if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
			}
			var Ns = Ls(Pa), Ps = Jt || function(e, t) {
				return vn.setTimeout(e, t);
			}, Fs = Ls(Fa);
			function Is(e, t, n) {
				var r = t + "";
				return Fs(e, ps(r, Hs(cs(r), n)));
			}
			function Ls(e) {
				var t = 0, r = 0;
				return function() {
					var i = dn(), a = k - (i - r);
					if (r = i, a > 0) {
						if (++t >= ee) return arguments[0];
					} else t = 0;
					return e.apply(n, arguments);
				};
			}
			function Rs(e, t) {
				var r = -1, i = e.length, a = i - 1;
				for (t = t === n ? i : t; ++r < t;) {
					var o = Oa(r, a), s = e[o];
					e[o] = e[r], e[r] = s;
				}
				return e.length = t, e;
			}
			var zs = Ts(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(Je, function(e, n, r, i) {
					t.push(r ? i.replace(it, "$1") : n || e);
				}), t;
			});
			function Bs(e) {
				if (typeof e == "string" || Hu(e)) return e;
				var t = e + "";
				return t == "0" && 1 / e == -M ? "-0" : t;
			}
			function Vs(e) {
				if (e != null) {
					try {
						return Et.call(e);
					} catch {}
					try {
						return e + "";
					} catch {}
				}
				return "";
			}
			function Hs(e, t) {
				return Mn(ie, function(n) {
					var r = "_." + n[0];
					t & n[1] && !In(e, r) && e.push(r);
				}), e.sort();
			}
			function Us(e) {
				if (e instanceof H) return e.clone();
				var t = new zr(e.__wrapped__, e.__chain__);
				return t.__actions__ = mo(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
			}
			function Ws(e, t, r) {
				t = (r ? gs(e, t, r) : t === n) ? 1 : an(Q(t), 0);
				var i = e == null ? 0 : e.length;
				if (!i || t < 1) return [];
				for (var a = 0, o = 0, s = Qe(Yt(i / t)); a < i;) s[o++] = La(e, a, a += t);
				return s;
			}
			function Gs(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
					var a = e[t];
					a && (i[r++] = a);
				}
				return i;
			}
			function Ks() {
				var e = arguments.length;
				if (!e) return [];
				for (var t = Qe(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
				return zn(Z(n) ? mo(n) : [n], Bi(t, 1));
			}
			var qs = W(function(e, t) {
				return mu(e) ? Ni(e, Bi(t, 1, mu, !0)) : [];
			}), Js = W(function(e, t) {
				var r = mc(t);
				return mu(r) && (r = n), mu(e) ? Ni(e, Bi(t, 1, mu, !0), G(r, 2)) : [];
			}), Ys = W(function(e, t) {
				var r = mc(t);
				return mu(r) && (r = n), mu(e) ? Ni(e, Bi(t, 1, mu, !0), n, r) : [];
			});
			function Xs(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : Q(t), La(e, t < 0 ? 0 : t, i)) : [];
			}
			function Zs(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : Q(t), t = i - t, La(e, 0, t < 0 ? 0 : t)) : [];
			}
			function Qs(e, t) {
				return e && e.length ? qa(e, G(t, 3), !0, !0) : [];
			}
			function $s(e, t) {
				return e && e.length ? qa(e, G(t, 3), !0) : [];
			}
			function ec(e, t, n, r) {
				var i = e == null ? 0 : e.length;
				return i ? (n && typeof n != "number" && gs(e, t, n) && (n = 0, r = i), Ri(e, t, n, r)) : [];
			}
			function tc(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : Q(n);
				return i < 0 && (i = an(r + i, 0)), qn(e, G(t, 3), i);
			}
			function nc(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i - 1;
				return r !== n && (a = Q(r), a = r < 0 ? an(i + a, 0) : un(a, i - 1)), qn(e, G(t, 3), a, !0);
			}
			function rc(e) {
				return e != null && e.length ? Bi(e, 1) : [];
			}
			function ic(e) {
				return e != null && e.length ? Bi(e, M) : [];
			}
			function ac(e, t) {
				return e != null && e.length ? (t = t === n ? 1 : Q(t), Bi(e, t)) : [];
			}
			function oc(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
					var i = e[t];
					Ei(r, i[0], i[1]);
				}
				return r;
			}
			function sc(e) {
				return e && e.length ? e[0] : n;
			}
			function cc(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : Q(n);
				return i < 0 && (i = an(r + i, 0)), Jn(e, t, i);
			}
			function lc(e) {
				return e != null && e.length ? La(e, 0, -1) : [];
			}
			var uc = W(function(e) {
				var t = Rn(e, Za);
				return t.length && t[0] === e[0] ? $i(t) : [];
			}), dc = W(function(e) {
				var t = mc(e), r = Rn(e, Za);
				return t === mc(r) ? t = n : r.pop(), r.length && r[0] === e[0] ? $i(r, G(t, 2)) : [];
			}), fc = W(function(e) {
				var t = mc(e), r = Rn(e, Za);
				return t = typeof t == "function" ? t : n, t && r.pop(), r.length && r[0] === e[0] ? $i(r, n, t) : [];
			});
			function pc(e, t) {
				return e == null ? "" : nn.call(e, t);
			}
			function mc(e) {
				var t = e == null ? 0 : e.length;
				return t ? e[t - 1] : n;
			}
			function hc(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i;
				return r !== n && (a = Q(r), a = a < 0 ? an(i + a, 0) : un(a, i - 1)), t === t ? wr(e, t, a) : qn(e, Xn, a, !0);
			}
			function gc(e, t) {
				return e && e.length ? xa(e, Q(t)) : n;
			}
			var _c = W(vc);
			function vc(e, t) {
				return e && e.length && t && t.length ? Ea(e, t) : e;
			}
			function yc(e, t, n) {
				return e && e.length && t && t.length ? Ea(e, t, G(n, 2)) : e;
			}
			function bc(e, t, r) {
				return e && e.length && t && t.length ? Ea(e, t, n, r) : e;
			}
			var xc = Jo(function(e, t) {
				var n = e == null ? 0 : e.length, r = Di(e, t);
				return Da(e, Rn(t, function(e) {
					return hs(e, n) ? +e : e;
				}).sort(lo)), r;
			});
			function K(e, t) {
				var n = [];
				if (!(e && e.length)) return n;
				var r = -1, i = [], a = e.length;
				for (t = G(t, 3); ++r < a;) {
					var o = e[r];
					t(o, r, e) && (n.push(o), i.push(r));
				}
				return Da(e, i), n;
			}
			function Sc(e) {
				return e == null ? e : gn.call(e);
			}
			function Cc(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (r && typeof r != "number" && gs(e, t, r) ? (t = 0, r = i) : (t = t == null ? 0 : Q(t), r = r === n ? i : Q(r)), La(e, t, r)) : [];
			}
			function wc(e, t) {
				return za(e, t);
			}
			function Tc(e, t, n) {
				return Ba(e, t, G(n, 2));
			}
			function Ec(e, t) {
				var n = e == null ? 0 : e.length;
				if (n) {
					var r = za(e, t);
					if (r < n && cu(e[r], t)) return r;
				}
				return -1;
			}
			function Dc(e, t) {
				return za(e, t, !0);
			}
			function Oc(e, t, n) {
				return Ba(e, t, G(n, 2), !0);
			}
			function kc(e, t) {
				if (e != null && e.length) {
					var n = za(e, t, !0) - 1;
					if (cu(e[n], t)) return n;
				}
				return -1;
			}
			function Ac(e) {
				return e && e.length ? Va(e) : [];
			}
			function jc(e, t) {
				return e && e.length ? Va(e, G(t, 2)) : [];
			}
			function Mc(e) {
				var t = e == null ? 0 : e.length;
				return t ? La(e, 1, t) : [];
			}
			function Nc(e, t, r) {
				return e && e.length ? (t = r || t === n ? 1 : Q(t), La(e, 0, t < 0 ? 0 : t)) : [];
			}
			function Pc(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : Q(t), t = i - t, La(e, t < 0 ? 0 : t, i)) : [];
			}
			function Fc(e, t) {
				return e && e.length ? qa(e, G(t, 3), !1, !0) : [];
			}
			function Ic(e, t) {
				return e && e.length ? qa(e, G(t, 3)) : [];
			}
			var Lc = W(function(e) {
				return Wa(Bi(e, 1, mu, !0));
			}), Rc = W(function(e) {
				var t = mc(e);
				return mu(t) && (t = n), Wa(Bi(e, 1, mu, !0), G(t, 2));
			}), zc = W(function(e) {
				var t = mc(e);
				return t = typeof t == "function" ? t : n, Wa(Bi(e, 1, mu, !0), n, t);
			});
			function Bc(e) {
				return e && e.length ? Wa(e) : [];
			}
			function Vc(e, t) {
				return e && e.length ? Wa(e, G(t, 2)) : [];
			}
			function Hc(e, t) {
				return t = typeof t == "function" ? t : n, e && e.length ? Wa(e, n, t) : [];
			}
			function Uc(e) {
				if (!(e && e.length)) return [];
				var t = 0;
				return e = Fn(e, function(e) {
					if (mu(e)) return t = an(e.length, t), !0;
				}), rr(t, function(t) {
					return Rn(e, Qn(t));
				});
			}
			function Wc(e, t) {
				if (!(e && e.length)) return [];
				var r = Uc(e);
				return t == null ? r : Rn(r, function(e) {
					return An(t, n, e);
				});
			}
			var Gc = W(function(e, t) {
				return mu(e) ? Ni(e, t) : [];
			}), Kc = W(function(e) {
				return Ya(Fn(e, mu));
			}), qc = W(function(e) {
				var t = mc(e);
				return mu(t) && (t = n), Ya(Fn(e, mu), G(t, 2));
			}), q = W(function(e) {
				var t = mc(e);
				return t = typeof t == "function" ? t : n, Ya(Fn(e, mu), n, t);
			}), Jc = W(Uc);
			function Yc(e, t) {
				return Xa(e || [], t || [], xi);
			}
			function Xc(e, t) {
				return Xa(e || [], t || [], Na);
			}
			var Zc = W(function(e) {
				var t = e.length, r = t > 1 ? e[t - 1] : n;
				return r = typeof r == "function" ? (e.pop(), r) : n, Wc(e, r);
			});
			function J(e) {
				var t = B(e);
				return t.__chain__ = !0, t;
			}
			function Qc(e, t) {
				return t(e), e;
			}
			function $c(e, t) {
				return t(e);
			}
			var el = Jo(function(e) {
				var t = e.length, r = t ? e[0] : 0, i = this.__wrapped__, a = function(t) {
					return Di(t, e);
				};
				return t > 1 || this.__actions__.length || !(i instanceof H) || !hs(r) ? this.thru(a) : (i = i.slice(r, +r + +!!t), i.__actions__.push({
					func: $c,
					args: [a],
					thisArg: n
				}), new zr(i, this.__chain__).thru(function(e) {
					return t && !e.length && e.push(n), e;
				}));
			});
			function tl() {
				return J(this);
			}
			function nl() {
				return new zr(this.value(), this.__chain__);
			}
			function rl() {
				this.__values__ === n && (this.__values__ = Yu(this.value()));
				var e = this.__index__ >= this.__values__.length;
				return {
					done: e,
					value: e ? n : this.__values__[this.__index__++]
				};
			}
			function il() {
				return this;
			}
			function al(e) {
				for (var t, r = this; r instanceof Rr;) {
					var i = Us(r);
					i.__index__ = 0, i.__values__ = n, t ? a.__wrapped__ = i : t = i;
					var a = i;
					r = r.__wrapped__;
				}
				return a.__wrapped__ = e, t;
			}
			function ol() {
				var e = this.__wrapped__;
				if (e instanceof H) {
					var t = e;
					return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({
						func: $c,
						args: [Sc],
						thisArg: n
					}), new zr(t, this.__chain__);
				}
				return this.thru(Sc);
			}
			function sl() {
				return Ja(this.__wrapped__, this.__actions__);
			}
			var cl = vo(function(e, t, n) {
				Dt.call(e, n) ? ++e[n] : Ei(e, n, 1);
			});
			function ll(e, t, r) {
				var i = Z(e) ? Pn : Ii;
				return r && gs(e, t, r) && (t = n), i(e, G(t, 3));
			}
			function ul(e, t) {
				return (Z(e) ? Fn : zi)(e, G(t, 3));
			}
			var dl = Do(tc), fl = Do(nc);
			function pl(e, t) {
				return Bi(xl(e, t), 1);
			}
			function ml(e, t) {
				return Bi(xl(e, t), M);
			}
			function hl(e, t, r) {
				return r = r === n ? 1 : Q(r), Bi(xl(e, t), r);
			}
			function gl(e, t) {
				return (Z(e) ? Mn : Pi)(e, G(t, 3));
			}
			function _l(e, t) {
				return (Z(e) ? Nn : Fi)(e, G(t, 3));
			}
			var vl = vo(function(e, t, n) {
				Dt.call(e, n) ? e[n].push(t) : Ei(e, n, [t]);
			});
			function yl(e, t, n, r) {
				e = pu(e) ? e : Ud(e), n = n && !r ? Q(n) : 0;
				var i = e.length;
				return n < 0 && (n = an(i + n, 0)), Vu(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Jn(e, t, n) > -1;
			}
			var Y = W(function(e, t, n) {
				var r = -1, i = typeof t == "function", a = pu(e) ? Qe(e.length) : [];
				return Pi(e, function(e) {
					a[++r] = i ? An(t, e, n) : ta(e, t, n);
				}), a;
			}), bl = vo(function(e, t, n) {
				Ei(e, n, t);
			});
			function xl(e, t) {
				return (Z(e) ? Rn : ga)(e, G(t, 3));
			}
			function Sl(e, t, r, i) {
				return e == null ? [] : (Z(t) || (t = t == null ? [] : [t]), r = i ? n : r, Z(r) || (r = r == null ? [] : [r]), Sa(e, t, r));
			}
			var Cl = vo(function(e, t, n) {
				e[+!n].push(t);
			}, function() {
				return [[], []];
			});
			function wl(e, t, n) {
				var r = Z(e) ? Bn : er, i = arguments.length < 3;
				return r(e, G(t, 4), n, i, Pi);
			}
			function Tl(e, t, n) {
				var r = Z(e) ? Vn : er, i = arguments.length < 3;
				return r(e, G(t, 4), n, i, Fi);
			}
			function El(e, t) {
				return (Z(e) ? Fn : zi)(e, Gl(G(t, 3)));
			}
			function Dl(e) {
				return (Z(e) ? _i : ja)(e);
			}
			function Ol(e, t, r) {
				return t = (r ? gs(e, t, r) : t === n) ? 1 : Q(t), (Z(e) ? vi : Ma)(e, t);
			}
			function kl(e) {
				return (Z(e) ? yi : Ia)(e);
			}
			function Al(e) {
				if (e == null) return 0;
				if (pu(e)) return Vu(e) ? Tr(e) : e.length;
				var t = os(e);
				return t == pe || t == ye ? e.size : pa(e).length;
			}
			function jl(e, t, r) {
				var i = Z(e) ? Hn : Ra;
				return r && gs(e, t, r) && (t = n), i(e, G(t, 3));
			}
			var Ml = W(function(e, t) {
				if (e == null) return [];
				var n = t.length;
				return n > 1 && gs(e, t[0], t[1]) ? t = [] : n > 2 && gs(t[0], t[1], t[2]) && (t = [t[0]]), Sa(e, Bi(t, 1), []);
			}), Nl = qt || function() {
				return vn.Date.now();
			};
			function Pl(e, t) {
				if (typeof t != "function") throw new xt(o);
				return e = Q(e), function() {
					if (--e < 1) return t.apply(this, arguments);
				};
			}
			function Fl(e, t, r) {
				return t = r ? n : t, t = e && t == null ? e.length : t, Vo(e, w, n, n, n, n, t);
			}
			function Il(e, t) {
				var r;
				if (typeof t != "function") throw new xt(o);
				return e = Q(e), function() {
					return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = n), r;
				};
			}
			var Ll = W(function(e, t, n) {
				var r = _;
				if (n.length) {
					var i = br(n, $o(Ll));
					r |= S;
				}
				return Vo(e, r, t, n, i);
			}), X = W(function(e, t, n) {
				var r = _ | v;
				if (n.length) {
					var i = br(n, $o(X));
					r |= S;
				}
				return Vo(t, r, e, n, i);
			});
			function Rl(e, t, r) {
				t = r ? n : t;
				var i = Vo(e, b, n, n, n, n, n, t);
				return i.placeholder = Rl.placeholder, i;
			}
			function zl(e, t, r) {
				t = r ? n : t;
				var i = Vo(e, x, n, n, n, n, n, t);
				return i.placeholder = zl.placeholder, i;
			}
			function Bl(e, t, r) {
				var i, a, s, c, l, u, d = 0, f = !1, p = !1, m = !0;
				if (typeof e != "function") throw new xt(o);
				t = Qu(t) || 0, Du(r) && (f = !!r.leading, p = "maxWait" in r, s = p ? an(Qu(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m);
				function h(t) {
					var r = i, o = a;
					return i = a = n, d = t, c = e.apply(o, r), c;
				}
				function g(e) {
					return d = e, l = Ps(y, t), f ? h(e) : c;
				}
				function _(e) {
					var n = e - u, r = e - d, i = t - n;
					return p ? un(i, s - r) : i;
				}
				function v(e) {
					var r = e - u, i = e - d;
					return u === n || r >= t || r < 0 || p && i >= s;
				}
				function y() {
					var e = Nl();
					if (v(e)) return b(e);
					l = Ps(y, _(e));
				}
				function b(e) {
					return l = n, m && i ? h(e) : (i = a = n, c);
				}
				function x() {
					l !== n && no(l), d = 0, i = u = a = l = n;
				}
				function S() {
					return l === n ? c : b(Nl());
				}
				function C() {
					var e = Nl(), r = v(e);
					if (i = arguments, a = this, u = e, r) {
						if (l === n) return g(u);
						if (p) return no(l), l = Ps(y, t), h(u);
					}
					return l === n && (l = Ps(y, t)), c;
				}
				return C.cancel = x, C.flush = S, C;
			}
			var Vl = W(function(e, t) {
				return Mi(e, 1, t);
			}), Hl = W(function(e, t, n) {
				return Mi(e, Qu(t) || 0, n);
			});
			function Ul(e) {
				return Vo(e, E);
			}
			function Wl(e, t) {
				if (typeof e != "function" || t != null && typeof t != "function") throw new xt(o);
				var n = function() {
					var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
					if (a.has(i)) return a.get(i);
					var o = e.apply(this, r);
					return n.cache = a.set(i, o) || a, o;
				};
				return n.cache = new (Wl.Cache || ti)(), n;
			}
			Wl.Cache = ti;
			function Gl(e) {
				if (typeof e != "function") throw new xt(o);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return !e.call(this);
						case 1: return !e.call(this, t[0]);
						case 2: return !e.call(this, t[0], t[1]);
						case 3: return !e.call(this, t[0], t[1], t[2]);
					}
					return !e.apply(this, t);
				};
			}
			function Kl(e) {
				return Il(2, e);
			}
			var ql = eo(function(e, t) {
				t = t.length == 1 && Z(t[0]) ? Rn(t[0], or(G())) : Rn(Bi(t, 1), or(G()));
				var n = t.length;
				return W(function(r) {
					for (var i = -1, a = un(r.length, n); ++i < a;) r[i] = t[i].call(this, r[i]);
					return An(e, this, r);
				});
			}), Jl = W(function(e, t) {
				return Vo(e, S, n, t, br(t, $o(Jl)));
			}), Yl = W(function(e, t) {
				return Vo(e, C, n, t, br(t, $o(Yl)));
			}), Xl = Jo(function(e, t) {
				return Vo(e, T, n, n, n, t);
			});
			function Zl(e, t) {
				if (typeof e != "function") throw new xt(o);
				return t = t === n ? t : Q(t), W(e, t);
			}
			function Ql(e, t) {
				if (typeof e != "function") throw new xt(o);
				return t = t == null ? 0 : an(Q(t), 0), W(function(n) {
					var r = n[t], i = to(n, 0, t);
					return r && zn(i, r), An(e, this, i);
				});
			}
			function $l(e, t, n) {
				var r = !0, i = !0;
				if (typeof e != "function") throw new xt(o);
				return Du(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Bl(e, t, {
					leading: r,
					maxWait: t,
					trailing: i
				});
			}
			function eu(e) {
				return Fl(e, 1);
			}
			function tu(e, t) {
				return Jl(Qa(t), e);
			}
			function nu() {
				if (!arguments.length) return [];
				var e = arguments[0];
				return Z(e) ? e : [e];
			}
			function ru(e) {
				return ki(e, m);
			}
			function iu(e, t) {
				return t = typeof t == "function" ? t : n, ki(e, m, t);
			}
			function au(e) {
				return ki(e, f | m);
			}
			function ou(e, t) {
				return t = typeof t == "function" ? t : n, ki(e, f | m, t);
			}
			function su(e, t) {
				return t == null || ji(e, t, wd(t));
			}
			function cu(e, t) {
				return e === t || e !== e && t !== t;
			}
			var lu = Io(Yi), uu = Io(function(e, t) {
				return e >= t;
			}), du = na(function() {
				return arguments;
			}()) ? na : function(e) {
				return Ou(e) && Dt.call(e, "callee") && !Bt.call(e, "callee");
			}, Z = Qe.isArray, fu = wn ? or(wn) : ra;
			function pu(e) {
				return e != null && Eu(e.length) && !wu(e);
			}
			function mu(e) {
				return Ou(e) && pu(e);
			}
			function hu(e) {
				return e === !0 || e === !1 || Ou(e) && Ji(e) == ce;
			}
			var gu = Qt || Zf, _u = Tn ? or(Tn) : ia;
			function vu(e) {
				return Ou(e) && e.nodeType === 1 && !Lu(e);
			}
			function yu(e) {
				if (e == null) return !0;
				if (pu(e) && (Z(e) || typeof e == "string" || typeof e.splice == "function" || gu(e) || Uu(e) || du(e))) return !e.length;
				var t = os(e);
				if (t == pe || t == ye) return !e.size;
				if (Ss(e)) return !pa(e).length;
				for (var n in e) if (Dt.call(e, n)) return !1;
				return !0;
			}
			function bu(e, t) {
				return aa(e, t);
			}
			function xu(e, t, r) {
				r = typeof r == "function" ? r : n;
				var i = r ? r(e, t) : n;
				return i === n ? aa(e, t, n, r) : !!i;
			}
			function Su(e) {
				if (!Ou(e)) return !1;
				var t = Ji(e);
				return t == ue || t == L || typeof e.message == "string" && typeof e.name == "string" && !Lu(e);
			}
			function Cu(e) {
				return typeof e == "number" && tn(e);
			}
			function wu(e) {
				if (!Du(e)) return !1;
				var t = Ji(e);
				return t == de || t == fe || t == se || t == R;
			}
			function Tu(e) {
				return typeof e == "number" && e == Q(e);
			}
			function Eu(e) {
				return typeof e == "number" && e > -1 && e % 1 == 0 && e <= N;
			}
			function Du(e) {
				var t = typeof e;
				return e != null && (t == "object" || t == "function");
			}
			function Ou(e) {
				return typeof e == "object" && !!e;
			}
			var ku = En ? or(En) : sa;
			function Au(e, t) {
				return e === t || U(e, t, ts(t));
			}
			function ju(e, t, r) {
				return r = typeof r == "function" ? r : n, U(e, t, ts(t), r);
			}
			function Mu(e) {
				return Iu(e) && e != +e;
			}
			function Nu(e) {
				if (xs(e)) throw new ht(a);
				return ca(e);
			}
			function Pu(e) {
				return e === null;
			}
			function Fu(e) {
				return e == null;
			}
			function Iu(e) {
				return typeof e == "number" || Ou(e) && Ji(e) == me;
			}
			function Lu(e) {
				if (!Ou(e) || Ji(e) != ge) return !1;
				var t = Rt(e);
				if (t === null) return !0;
				var n = Dt.call(t, "constructor") && t.constructor;
				return typeof n == "function" && n instanceof n && Et.call(n) == jt;
			}
			var Ru = Dn ? or(Dn) : la;
			function zu(e) {
				return Tu(e) && e >= -N && e <= N;
			}
			var Bu = On ? or(On) : ua;
			function Vu(e) {
				return typeof e == "string" || !Z(e) && Ou(e) && Ji(e) == be;
			}
			function Hu(e) {
				return typeof e == "symbol" || Ou(e) && Ji(e) == xe;
			}
			var Uu = kn ? or(kn) : da;
			function Wu(e) {
				return e === n;
			}
			function Gu(e) {
				return Ou(e) && os(e) == Ce;
			}
			function Ku(e) {
				return Ou(e) && Ji(e) == we;
			}
			var qu = Io(ha), Ju = Io(function(e, t) {
				return e <= t;
			});
			function Yu(e) {
				if (!e) return [];
				if (pu(e)) return Vu(e) ? Er(e) : mo(e);
				if (Ut && e[Ut]) return _r(e[Ut]());
				var t = os(e);
				return (t == pe ? vr : t == ye ? xr : Ud)(e);
			}
			function Xu(e) {
				return e ? (e = Qu(e), e === M || e === -M ? (e < 0 ? -1 : 1) * P : e === e ? e : 0) : e === 0 ? e : 0;
			}
			function Q(e) {
				var t = Xu(e), n = t % 1;
				return t === t ? n ? t - n : t : 0;
			}
			function Zu(e) {
				return e ? Oi(Q(e), 0, I) : 0;
			}
			function Qu(e) {
				if (typeof e == "number") return e;
				if (Hu(e)) return F;
				if (Du(e)) {
					var t = typeof e.valueOf == "function" ? e.valueOf() : e;
					e = Du(t) ? t + "" : t;
				}
				if (typeof e != "string") return e === 0 ? e : +e;
				e = ar(e);
				var n = ct.test(e);
				return n || ut.test(e) ? hn(e.slice(2), n ? 2 : 8) : st.test(e) ? F : +e;
			}
			function $u(e) {
				return ho(e, Td(e));
			}
			function ed(e) {
				return e ? Oi(Q(e), -N, N) : e === 0 ? e : 0;
			}
			function td(e) {
				return e == null ? "" : Ua(e);
			}
			var nd = yo(function(e, t) {
				if (Ss(t) || pu(t)) {
					ho(t, wd(t), e);
					return;
				}
				for (var n in t) Dt.call(t, n) && xi(e, n, t[n]);
			}), rd = yo(function(e, t) {
				ho(t, Td(t), e);
			}), id = yo(function(e, t, n, r) {
				ho(t, Td(t), e, r);
			}), ad = yo(function(e, t, n, r) {
				ho(t, wd(t), e, r);
			}), od = Jo(Di);
			function sd(e, t) {
				var n = V(e);
				return t == null ? n : wi(n, t);
			}
			var cd = W(function(e, t) {
				e = vt(e);
				var r = -1, i = t.length, a = i > 2 ? t[2] : n;
				for (a && gs(t[0], t[1], a) && (i = 1); ++r < i;) for (var o = t[r], s = Td(o), c = -1, l = s.length; ++c < l;) {
					var u = s[c], d = e[u];
					(d === n || cu(d, wt[u]) && !Dt.call(e, u)) && (e[u] = o[u]);
				}
				return e;
			}), ld = W(function(e) {
				return e.push(n, Uo), An(kd, n, e);
			});
			function ud(e, t) {
				return Kn(e, G(t, 3), Ui);
			}
			function dd(e, t) {
				return Kn(e, G(t, 3), Wi);
			}
			function fd(e, t) {
				return e == null ? e : Vi(e, G(t, 3), Td);
			}
			function pd(e, t) {
				return e == null ? e : Hi(e, G(t, 3), Td);
			}
			function md(e, t) {
				return e && Ui(e, G(t, 3));
			}
			function hd(e, t) {
				return e && Wi(e, G(t, 3));
			}
			function gd(e) {
				return e == null ? [] : Gi(e, wd(e));
			}
			function _d(e) {
				return e == null ? [] : Gi(e, Td(e));
			}
			function vd(e, t, r) {
				var i = e == null ? n : Ki(e, t);
				return i === n ? r : i;
			}
			function yd(e, t) {
				return e != null && ls(e, t, Xi);
			}
			function bd(e, t) {
				return e != null && ls(e, t, Zi);
			}
			var xd = Ao(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = At.call(t)), e[t] = n;
			}, kf(Nf)), Sd = Ao(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = At.call(t)), Dt.call(e, t) ? e[t].push(n) : e[t] = [n];
			}, G), Cd = W(ta);
			function wd(e) {
				return pu(e) ? gi(e) : pa(e);
			}
			function Td(e) {
				return pu(e) ? gi(e, !0) : ma(e);
			}
			function Ed(e, t) {
				var n = {};
				return t = G(t, 3), Ui(e, function(e, r, i) {
					Ei(n, t(e, r, i), e);
				}), n;
			}
			function Dd(e, t) {
				var n = {};
				return t = G(t, 3), Ui(e, function(e, r, i) {
					Ei(n, r, t(e, r, i));
				}), n;
			}
			var Od = yo(function(e, t, n) {
				ya(e, t, n);
			}), kd = yo(function(e, t, n, r) {
				ya(e, t, n, r);
			}), Ad = Jo(function(e, t) {
				var n = {};
				if (e == null) return n;
				var r = !1;
				t = Rn(t, function(t) {
					return t = $a(t, e), r ||= t.length > 1, t;
				}), ho(e, Xo(e), n), r && (n = ki(n, f | p | m, Wo));
				for (var i = t.length; i--;) Ga(n, t[i]);
				return n;
			});
			function jd(e, t) {
				return Nd(e, Gl(G(t)));
			}
			var Md = Jo(function(e, t) {
				return e == null ? {} : Ca(e, t);
			});
			function Nd(e, t) {
				if (e == null) return {};
				var n = Rn(Xo(e), function(e) {
					return [e];
				});
				return t = G(t), wa(e, n, function(e, n) {
					return t(e, n[0]);
				});
			}
			function Pd(e, t, r) {
				t = $a(t, e);
				var i = -1, a = t.length;
				for (a || (a = 1, e = n); ++i < a;) {
					var o = e == null ? n : e[Bs(t[i])];
					o === n && (i = a, o = r), e = wu(o) ? o.call(e) : o;
				}
				return e;
			}
			function Fd(e, t, n) {
				return e == null ? e : Na(e, t, n);
			}
			function Id(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : Na(e, t, r, i);
			}
			var Ld = Bo(wd), Rd = Bo(Td);
			function zd(e, t, n) {
				var r = Z(e), i = r || gu(e) || Uu(e);
				if (t = G(t, 4), n == null) {
					var a = e && e.constructor;
					n = i ? r ? new a() : [] : Du(e) && wu(a) ? V(Rt(e)) : {};
				}
				return (i ? Mn : Ui)(e, function(e, r, i) {
					return t(n, e, r, i);
				}), n;
			}
			function Bd(e, t) {
				return e == null ? !0 : Ga(e, t);
			}
			function Vd(e, t, n) {
				return e == null ? e : Ka(e, t, Qa(n));
			}
			function Hd(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : Ka(e, t, Qa(r), i);
			}
			function Ud(e) {
				return e == null ? [] : sr(e, wd(e));
			}
			function Wd(e) {
				return e == null ? [] : sr(e, Td(e));
			}
			function Gd(e, t, r) {
				return r === n && (r = t, t = n), r !== n && (r = Qu(r), r = r === r ? r : 0), t !== n && (t = Qu(t), t = t === t ? t : 0), Oi(Qu(e), t, r);
			}
			function Kd(e, t, r) {
				return t = Xu(t), r === n ? (r = t, t = 0) : r = Xu(r), e = Qu(e), Qi(e, t, r);
			}
			function qd(e, t, r) {
				if (r && typeof r != "boolean" && gs(e, t, r) && (t = r = n), r === n && (typeof t == "boolean" ? (r = t, t = n) : typeof e == "boolean" && (r = e, e = n)), e === n && t === n ? (e = 0, t = 1) : (e = Xu(e), t === n ? (t = e, e = 0) : t = Xu(t)), e > t) {
					var i = e;
					e = t, t = i;
				}
				if (r || e % 1 || t % 1) {
					var a = pn();
					return un(e + a * (t - e + mn("1e-" + ((a + "").length - 1))), t);
				}
				return Oa(e, t);
			}
			var Jd = wo(function(e, t, n) {
				return t = t.toLowerCase(), e + (n ? Yd(t) : t);
			});
			function Yd(e) {
				return Cf(td(e).toLowerCase());
			}
			function Xd(e) {
				return e = td(e), e && e.replace(ft, z).replace(en, "");
			}
			function Zd(e, t, r) {
				e = td(e), t = Ua(t);
				var i = e.length;
				r = r === n ? i : Oi(Q(r), 0, i);
				var a = r;
				return r -= t.length, r >= 0 && e.slice(r, a) == t;
			}
			function Qd(e) {
				return e = td(e), e && He.test(e) ? e.replace(Be, fr) : e;
			}
			function $d(e) {
				return e = td(e), e && Xe.test(e) ? e.replace(Ye, "\\$&") : e;
			}
			var ef = wo(function(e, t, n) {
				return e + (n ? "-" : "") + t.toLowerCase();
			}), tf = wo(function(e, t, n) {
				return e + (n ? " " : "") + t.toLowerCase();
			}), nf = Co("toLowerCase");
			function rf(e, t, n) {
				e = td(e), t = Q(t);
				var r = t ? Tr(e) : 0;
				if (!t || r >= t) return e;
				var i = (t - r) / 2;
				return No(Xt(i), n) + e + No(Yt(i), n);
			}
			function af(e, t, n) {
				e = td(e), t = Q(t);
				var r = t ? Tr(e) : 0;
				return t && r < t ? e + No(t - r, n) : e;
			}
			function of(e, t, n) {
				e = td(e), t = Q(t);
				var r = t ? Tr(e) : 0;
				return t && r < t ? No(t - r, n) + e : e;
			}
			function sf(e, t, n) {
				return n || t == null ? t = 0 : t &&= +t, fn(td(e).replace(Ze, ""), t || 0);
			}
			function cf(e, t, r) {
				return t = (r ? gs(e, t, r) : t === n) ? 1 : Q(t), Aa(td(e), t);
			}
			function lf() {
				var e = arguments, t = td(e[0]);
				return e.length < 3 ? t : t.replace(e[1], e[2]);
			}
			var uf = wo(function(e, t, n) {
				return e + (n ? "_" : "") + t.toLowerCase();
			});
			function df(e, t, r) {
				return r && typeof r != "number" && gs(e, t, r) && (t = r = n), r = r === n ? I : r >>> 0, r ? (e = td(e), e && (typeof t == "string" || t != null && !Ru(t)) && (t = Ua(t), !t && hr(e)) ? to(Er(e), 0, r) : e.split(t, r)) : [];
			}
			var ff = wo(function(e, t, n) {
				return e + (n ? " " : "") + Cf(t);
			});
			function pf(e, t, n) {
				return e = td(e), n = n == null ? 0 : Oi(Q(n), 0, e.length), t = Ua(t), e.slice(n, n + t.length) == t;
			}
			function mf(e, t, r) {
				var i = B.templateSettings;
				r && gs(e, t, r) && (t = n), e = td(e), t = ad({}, t, i, Ho);
				var a = ad({}, t.imports, i.imports, Ho), o = wd(a), l = sr(a, o);
				Mn(o, function(e) {
					if (rt.test(e)) throw new ht(c);
				});
				var u, d, f = 0, p = t.interpolate || pt, m = "__p += '", h = yt((t.escape || pt).source + "|" + p.source + "|" + (p === Ge ? at : pt).source + "|" + (t.evaluate || pt).source + "|$", "g"), g = "//# sourceURL=" + (Dt.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++sn + "]") + "\n";
				e.replace(h, function(t, n, r, i, a, o) {
					return r ||= i, m += e.slice(f, o).replace(mt, pr), n && (u = !0, m += "' +\n__e(" + n + ") +\n'"), a && (d = !0, m += "';\n" + a + ";\n__p += '"), r && (m += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = o + t.length, t;
				}), m += "';\n";
				var _ = Dt.call(t, "variable") && t.variable;
				if (!_) m = "with (obj) {\n" + m + "\n}\n";
				else if (rt.test(_)) throw new ht(s);
				m = (d ? m.replace(Ie, "") : m).replace(Le, "$1").replace(Re, "$1;"), m = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (d ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + m + "return __p\n}";
				var v = Tf(function() {
					return gt(o, g + "return " + m).apply(n, l);
				});
				if (v.source = m, Su(v)) throw v;
				return v;
			}
			function hf(e) {
				return td(e).toLowerCase();
			}
			function gf(e) {
				return td(e).toUpperCase();
			}
			function _f(e, t, r) {
				if (e = td(e), e && (r || t === n)) return ar(e);
				if (!e || !(t = Ua(t))) return e;
				var i = Er(e), a = Er(t);
				return to(i, lr(i, a), ur(i, a) + 1).join("");
			}
			function vf(e, t, r) {
				if (e = td(e), e && (r || t === n)) return e.slice(0, Dr(e) + 1);
				if (!e || !(t = Ua(t))) return e;
				var i = Er(e);
				return to(i, 0, ur(i, Er(t)) + 1).join("");
			}
			function yf(e, t, r) {
				if (e = td(e), e && (r || t === n)) return e.replace(Ze, "");
				if (!e || !(t = Ua(t))) return e;
				var i = Er(e);
				return to(i, lr(i, Er(t))).join("");
			}
			function bf(e, t) {
				var r = D, i = O;
				if (Du(t)) {
					var a = "separator" in t ? t.separator : a;
					r = "length" in t ? Q(t.length) : r, i = "omission" in t ? Ua(t.omission) : i;
				}
				e = td(e);
				var o = e.length;
				if (hr(e)) {
					var s = Er(e);
					o = s.length;
				}
				if (r >= o) return e;
				var c = r - Tr(i);
				if (c < 1) return i;
				var l = s ? to(s, 0, c).join("") : e.slice(0, c);
				if (a === n) return l + i;
				if (s && (c += l.length - c), Ru(a)) {
					if (e.slice(c).search(a)) {
						var u, d = l;
						for (a.global || (a = yt(a.source, td(ot.exec(a)) + "g")), a.lastIndex = 0; u = a.exec(d);) var f = u.index;
						l = l.slice(0, f === n ? c : f);
					}
				} else if (e.indexOf(Ua(a), c) != c) {
					var p = l.lastIndexOf(a);
					p > -1 && (l = l.slice(0, p));
				}
				return l + i;
			}
			function xf(e) {
				return e = td(e), e && Ve.test(e) ? e.replace(ze, Or) : e;
			}
			var Sf = wo(function(e, t, n) {
				return e + (n ? " " : "") + t.toUpperCase();
			}), Cf = Co("toUpperCase");
			function wf(e, t, r) {
				return e = td(e), t = r ? n : t, t === n ? gr(e) ? jr(e) : Gn(e) : e.match(t) || [];
			}
			var Tf = W(function(e, t) {
				try {
					return An(e, n, t);
				} catch (e) {
					return Su(e) ? e : new ht(e);
				}
			}), Ef = Jo(function(e, t) {
				return Mn(t, function(t) {
					t = Bs(t), Ei(e, t, Ll(e[t], e));
				}), e;
			});
			function Df(e) {
				var t = e == null ? 0 : e.length, n = G();
				return e = t ? Rn(e, function(e) {
					if (typeof e[1] != "function") throw new xt(o);
					return [n(e[0]), e[1]];
				}) : [], W(function(n) {
					for (var r = -1; ++r < t;) {
						var i = e[r];
						if (An(i[0], this, n)) return An(i[1], this, n);
					}
				});
			}
			function Of(e) {
				return Ai(ki(e, f));
			}
			function kf(e) {
				return function() {
					return e;
				};
			}
			function Af(e, t) {
				return e == null || e !== e ? t : e;
			}
			var jf = Oo(), Mf = Oo(!0);
			function Nf(e) {
				return e;
			}
			function Pf(e) {
				return fa(typeof e == "function" ? e : ki(e, f));
			}
			function Ff(e) {
				return _a(ki(e, f));
			}
			function If(e, t) {
				return va(e, ki(t, f));
			}
			var Lf = W(function(e, t) {
				return function(n) {
					return ta(n, e, t);
				};
			}), Rf = W(function(e, t) {
				return function(n) {
					return ta(e, n, t);
				};
			});
			function zf(e, t, n) {
				var r = wd(t), i = Gi(t, r);
				n == null && !(Du(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = Gi(t, wd(t)));
				var a = !(Du(n) && "chain" in n) || !!n.chain, o = wu(e);
				return Mn(i, function(n) {
					var r = t[n];
					e[n] = r, o && (e.prototype[n] = function() {
						var t = this.__chain__;
						if (a || t) {
							var n = e(this.__wrapped__);
							return (n.__actions__ = mo(this.__actions__)).push({
								func: r,
								args: arguments,
								thisArg: e
							}), n.__chain__ = t, n;
						}
						return r.apply(e, zn([this.value()], arguments));
					});
				}), e;
			}
			function Bf() {
				return vn._ === this && (vn._ = Mt), this;
			}
			function Vf() {}
			function Hf(e) {
				return e = Q(e), W(function(t) {
					return xa(t, e);
				});
			}
			var Uf = Mo(Rn), Wf = Mo(Pn), Gf = Mo(Hn);
			function Kf(e) {
				return _s(e) ? Qn(Bs(e)) : Ta(e);
			}
			function qf(e) {
				return function(t) {
					return e == null ? n : Ki(e, t);
				};
			}
			var Jf = Fo(), Yf = Fo(!0);
			function Xf() {
				return [];
			}
			function Zf() {
				return !1;
			}
			function Qf() {
				return {};
			}
			function $f() {
				return "";
			}
			function ep() {
				return !0;
			}
			function tp(e, t) {
				if (e = Q(e), e < 1 || e > N) return [];
				var n = I, r = un(e, I);
				t = G(t), e -= I;
				for (var i = rr(r, t); ++n < e;) t(n);
				return i;
			}
			function np(e) {
				return Z(e) ? Rn(e, Bs) : Hu(e) ? [e] : mo(zs(td(e)));
			}
			function rp(e) {
				var t = ++Ot;
				return td(e) + t;
			}
			var ip = jo(function(e, t) {
				return e + t;
			}, 0), ap = Ro("ceil"), op = jo(function(e, t) {
				return e / t;
			}, 1), sp = Ro("floor");
			function cp(e) {
				return e && e.length ? Li(e, Nf, Yi) : n;
			}
			function lp(e, t) {
				return e && e.length ? Li(e, G(t, 2), Yi) : n;
			}
			function up(e) {
				return Zn(e, Nf);
			}
			function dp(e, t) {
				return Zn(e, G(t, 2));
			}
			function fp(e) {
				return e && e.length ? Li(e, Nf, ha) : n;
			}
			function pp(e, t) {
				return e && e.length ? Li(e, G(t, 2), ha) : n;
			}
			var mp = jo(function(e, t) {
				return e * t;
			}, 1), hp = Ro("round"), gp = jo(function(e, t) {
				return e - t;
			}, 0);
			function _p(e) {
				return e && e.length ? nr(e, Nf) : 0;
			}
			function vp(e, t) {
				return e && e.length ? nr(e, G(t, 2)) : 0;
			}
			return B.after = Pl, B.ary = Fl, B.assign = nd, B.assignIn = rd, B.assignInWith = id, B.assignWith = ad, B.at = od, B.before = Il, B.bind = Ll, B.bindAll = Ef, B.bindKey = X, B.castArray = nu, B.chain = J, B.chunk = Ws, B.compact = Gs, B.concat = Ks, B.cond = Df, B.conforms = Of, B.constant = kf, B.countBy = cl, B.create = sd, B.curry = Rl, B.curryRight = zl, B.debounce = Bl, B.defaults = cd, B.defaultsDeep = ld, B.defer = Vl, B.delay = Hl, B.difference = qs, B.differenceBy = Js, B.differenceWith = Ys, B.drop = Xs, B.dropRight = Zs, B.dropRightWhile = Qs, B.dropWhile = $s, B.fill = ec, B.filter = ul, B.flatMap = pl, B.flatMapDeep = ml, B.flatMapDepth = hl, B.flatten = rc, B.flattenDeep = ic, B.flattenDepth = ac, B.flip = Ul, B.flow = jf, B.flowRight = Mf, B.fromPairs = oc, B.functions = gd, B.functionsIn = _d, B.groupBy = vl, B.initial = lc, B.intersection = uc, B.intersectionBy = dc, B.intersectionWith = fc, B.invert = xd, B.invertBy = Sd, B.invokeMap = Y, B.iteratee = Pf, B.keyBy = bl, B.keys = wd, B.keysIn = Td, B.map = xl, B.mapKeys = Ed, B.mapValues = Dd, B.matches = Ff, B.matchesProperty = If, B.memoize = Wl, B.merge = Od, B.mergeWith = kd, B.method = Lf, B.methodOf = Rf, B.mixin = zf, B.negate = Gl, B.nthArg = Hf, B.omit = Ad, B.omitBy = jd, B.once = Kl, B.orderBy = Sl, B.over = Uf, B.overArgs = ql, B.overEvery = Wf, B.overSome = Gf, B.partial = Jl, B.partialRight = Yl, B.partition = Cl, B.pick = Md, B.pickBy = Nd, B.property = Kf, B.propertyOf = qf, B.pull = _c, B.pullAll = vc, B.pullAllBy = yc, B.pullAllWith = bc, B.pullAt = xc, B.range = Jf, B.rangeRight = Yf, B.rearg = Xl, B.reject = El, B.remove = K, B.rest = Zl, B.reverse = Sc, B.sampleSize = Ol, B.set = Fd, B.setWith = Id, B.shuffle = kl, B.slice = Cc, B.sortBy = Ml, B.sortedUniq = Ac, B.sortedUniqBy = jc, B.split = df, B.spread = Ql, B.tail = Mc, B.take = Nc, B.takeRight = Pc, B.takeRightWhile = Fc, B.takeWhile = Ic, B.tap = Qc, B.throttle = $l, B.thru = $c, B.toArray = Yu, B.toPairs = Ld, B.toPairsIn = Rd, B.toPath = np, B.toPlainObject = $u, B.transform = zd, B.unary = eu, B.union = Lc, B.unionBy = Rc, B.unionWith = zc, B.uniq = Bc, B.uniqBy = Vc, B.uniqWith = Hc, B.unset = Bd, B.unzip = Uc, B.unzipWith = Wc, B.update = Vd, B.updateWith = Hd, B.values = Ud, B.valuesIn = Wd, B.without = Gc, B.words = wf, B.wrap = tu, B.xor = Kc, B.xorBy = qc, B.xorWith = q, B.zip = Jc, B.zipObject = Yc, B.zipObjectDeep = Xc, B.zipWith = Zc, B.entries = Ld, B.entriesIn = Rd, B.extend = rd, B.extendWith = id, zf(B, B), B.add = ip, B.attempt = Tf, B.camelCase = Jd, B.capitalize = Yd, B.ceil = ap, B.clamp = Gd, B.clone = ru, B.cloneDeep = au, B.cloneDeepWith = ou, B.cloneWith = iu, B.conformsTo = su, B.deburr = Xd, B.defaultTo = Af, B.divide = op, B.endsWith = Zd, B.eq = cu, B.escape = Qd, B.escapeRegExp = $d, B.every = ll, B.find = dl, B.findIndex = tc, B.findKey = ud, B.findLast = fl, B.findLastIndex = nc, B.findLastKey = dd, B.floor = sp, B.forEach = gl, B.forEachRight = _l, B.forIn = fd, B.forInRight = pd, B.forOwn = md, B.forOwnRight = hd, B.get = vd, B.gt = lu, B.gte = uu, B.has = yd, B.hasIn = bd, B.head = sc, B.identity = Nf, B.includes = yl, B.indexOf = cc, B.inRange = Kd, B.invoke = Cd, B.isArguments = du, B.isArray = Z, B.isArrayBuffer = fu, B.isArrayLike = pu, B.isArrayLikeObject = mu, B.isBoolean = hu, B.isBuffer = gu, B.isDate = _u, B.isElement = vu, B.isEmpty = yu, B.isEqual = bu, B.isEqualWith = xu, B.isError = Su, B.isFinite = Cu, B.isFunction = wu, B.isInteger = Tu, B.isLength = Eu, B.isMap = ku, B.isMatch = Au, B.isMatchWith = ju, B.isNaN = Mu, B.isNative = Nu, B.isNil = Fu, B.isNull = Pu, B.isNumber = Iu, B.isObject = Du, B.isObjectLike = Ou, B.isPlainObject = Lu, B.isRegExp = Ru, B.isSafeInteger = zu, B.isSet = Bu, B.isString = Vu, B.isSymbol = Hu, B.isTypedArray = Uu, B.isUndefined = Wu, B.isWeakMap = Gu, B.isWeakSet = Ku, B.join = pc, B.kebabCase = ef, B.last = mc, B.lastIndexOf = hc, B.lowerCase = tf, B.lowerFirst = nf, B.lt = qu, B.lte = Ju, B.max = cp, B.maxBy = lp, B.mean = up, B.meanBy = dp, B.min = fp, B.minBy = pp, B.stubArray = Xf, B.stubFalse = Zf, B.stubObject = Qf, B.stubString = $f, B.stubTrue = ep, B.multiply = mp, B.nth = gc, B.noConflict = Bf, B.noop = Vf, B.now = Nl, B.pad = rf, B.padEnd = af, B.padStart = of, B.parseInt = sf, B.random = qd, B.reduce = wl, B.reduceRight = Tl, B.repeat = cf, B.replace = lf, B.result = Pd, B.round = hp, B.runInContext = e, B.sample = Dl, B.size = Al, B.snakeCase = uf, B.some = jl, B.sortedIndex = wc, B.sortedIndexBy = Tc, B.sortedIndexOf = Ec, B.sortedLastIndex = Dc, B.sortedLastIndexBy = Oc, B.sortedLastIndexOf = kc, B.startCase = ff, B.startsWith = pf, B.subtract = gp, B.sum = _p, B.sumBy = vp, B.template = mf, B.times = tp, B.toFinite = Xu, B.toInteger = Q, B.toLength = Zu, B.toLower = hf, B.toNumber = Qu, B.toSafeInteger = ed, B.toString = td, B.toUpper = gf, B.trim = _f, B.trimEnd = vf, B.trimStart = yf, B.truncate = bf, B.unescape = xf, B.uniqueId = rp, B.upperCase = Sf, B.upperFirst = Cf, B.each = gl, B.eachRight = _l, B.first = sc, zf(B, function() {
				var e = {};
				return Ui(B, function(t, n) {
					Dt.call(B.prototype, n) || (e[n] = t);
				}), e;
			}(), { chain: !1 }), B.VERSION = r, Mn([
				"bind",
				"bindKey",
				"curry",
				"curryRight",
				"partial",
				"partialRight"
			], function(e) {
				B[e].placeholder = B;
			}), Mn(["drop", "take"], function(e, t) {
				H.prototype[e] = function(r) {
					r = r === n ? 1 : an(Q(r), 0);
					var i = this.__filtered__ && !t ? new H(this) : this.clone();
					return i.__filtered__ ? i.__takeCount__ = un(r, i.__takeCount__) : i.__views__.push({
						size: un(r, I),
						type: e + (i.__dir__ < 0 ? "Right" : "")
					}), i;
				}, H.prototype[e + "Right"] = function(t) {
					return this.reverse()[e](t).reverse();
				};
			}), Mn([
				"filter",
				"map",
				"takeWhile"
			], function(e, t) {
				var n = t + 1, r = n == A || n == te;
				H.prototype[e] = function(e) {
					var t = this.clone();
					return t.__iteratees__.push({
						iteratee: G(e, 3),
						type: n
					}), t.__filtered__ = t.__filtered__ || r, t;
				};
			}), Mn(["head", "last"], function(e, t) {
				var n = "take" + (t ? "Right" : "");
				H.prototype[e] = function() {
					return this[n](1).value()[0];
				};
			}), Mn(["initial", "tail"], function(e, t) {
				var n = "drop" + (t ? "" : "Right");
				H.prototype[e] = function() {
					return this.__filtered__ ? new H(this) : this[n](1);
				};
			}), H.prototype.compact = function() {
				return this.filter(Nf);
			}, H.prototype.find = function(e) {
				return this.filter(e).head();
			}, H.prototype.findLast = function(e) {
				return this.reverse().find(e);
			}, H.prototype.invokeMap = W(function(e, t) {
				return typeof e == "function" ? new H(this) : this.map(function(n) {
					return ta(n, e, t);
				});
			}), H.prototype.reject = function(e) {
				return this.filter(Gl(G(e)));
			}, H.prototype.slice = function(e, t) {
				e = Q(e);
				var r = this;
				return r.__filtered__ && (e > 0 || t < 0) ? new H(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== n && (t = Q(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
			}, H.prototype.takeRightWhile = function(e) {
				return this.reverse().takeWhile(e).reverse();
			}, H.prototype.toArray = function() {
				return this.take(I);
			}, Ui(H.prototype, function(e, t) {
				var r = /^(?:filter|find|map|reject)|While$/.test(t), i = /^(?:head|last)$/.test(t), a = B[i ? "take" + (t == "last" ? "Right" : "") : t], o = i || /^find/.test(t);
				a && (B.prototype[t] = function() {
					var t = this.__wrapped__, s = i ? [1] : arguments, c = t instanceof H, l = s[0], u = c || Z(t), d = function(e) {
						var t = a.apply(B, zn([e], s));
						return i && f ? t[0] : t;
					};
					u && r && typeof l == "function" && l.length != 1 && (c = u = !1);
					var f = this.__chain__, p = !!this.__actions__.length, m = o && !f, h = c && !p;
					if (!o && u) {
						t = h ? t : new H(this);
						var g = e.apply(t, s);
						return g.__actions__.push({
							func: $c,
							args: [d],
							thisArg: n
						}), new zr(g, f);
					}
					return m && h ? e.apply(this, s) : (g = this.thru(d), m ? i ? g.value()[0] : g.value() : g);
				});
			}), Mn([
				"pop",
				"push",
				"shift",
				"sort",
				"splice",
				"unshift"
			], function(e) {
				var t = St[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
				B.prototype[e] = function() {
					var e = arguments;
					if (r && !this.__chain__) {
						var i = this.value();
						return t.apply(Z(i) ? i : [], e);
					}
					return this[n](function(n) {
						return t.apply(Z(n) ? n : [], e);
					});
				};
			}), Ui(H.prototype, function(e, t) {
				var n = B[t];
				if (n) {
					var r = n.name + "";
					Dt.call($n, r) || ($n[r] = []), $n[r].push({
						name: t,
						func: n
					});
				}
			}), $n[ko(n, v).name] = [{
				name: "wrapper",
				func: n
			}], H.prototype.clone = Br, H.prototype.reverse = Vr, H.prototype.value = Hr, B.prototype.at = el, B.prototype.chain = tl, B.prototype.commit = nl, B.prototype.next = rl, B.prototype.plant = al, B.prototype.reverse = ol, B.prototype.toJSON = B.prototype.valueOf = B.prototype.value = sl, B.prototype.first = B.prototype.head, Ut && (B.prototype[Ut] = il), B;
		})();
		typeof define == "function" && typeof define.amd == "object" && define.amd ? (vn._ = Mr, define(function() {
			return Mr;
		})) : bn ? ((bn.exports = Mr)._ = Mr, yn._ = Mr) : vn._ = Mr;
	}).call(e);
})))(), 1), ue = {
	__name: "splitpanes",
	props: {
		horizontal: { type: Boolean },
		pushOtherPanes: {
			type: Boolean,
			default: !0
		},
		dblClickSplitter: {
			type: Boolean,
			default: !0
		},
		rtl: {
			type: Boolean,
			default: !1
		},
		firstSplitter: { type: Boolean }
	},
	emits: [
		"ready",
		"resize",
		"resized",
		"pane-click",
		"pane-maximize",
		"pane-add",
		"pane-remove",
		"splitter-click"
	],
	setup(e, { emit: n }) {
		let i = n, a = e, o = te(), s = E([]), c = t(() => s.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), l = t(() => s.value.length), u = E(null), f = E(!1), p = E({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), m = E({
			splitter: null,
			timeoutId: null
		}), h = t(() => ({
			[`splitpanes splitpanes--${a.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": p.value.dragging
		})), _ = () => {
			document.addEventListener("mousemove", S, { passive: !1 }), document.addEventListener("mouseup", T), "ontouchstart" in window && (document.addEventListener("touchmove", S, { passive: !1 }), document.addEventListener("touchend", T));
		}, v = () => {
			document.removeEventListener("mousemove", S, { passive: !1 }), document.removeEventListener("mouseup", T), "ontouchstart" in window && (document.removeEventListener("touchmove", S, { passive: !1 }), document.removeEventListener("touchend", T));
		}, y = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: r } = n.getBoundingClientRect(), { clientX: i, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				p.value.cursorOffset = a.horizontal ? o - r : i - t;
			}
			_(), p.value.mouseDown = !0, p.value.activeSplitter = t;
		}, S = (e) => {
			p.value.mouseDown && (e.preventDefault(), p.value.dragging = !0, requestAnimationFrame(() => {
				N(A(e)), i("resize", s.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				})));
			}));
		}, T = () => {
			p.value.dragging && i("resized", s.value.map((e) => ({
				min: e.min,
				max: e.max,
				size: e.size
			}))), p.value.mouseDown = !1, setTimeout(() => {
				p.value.dragging = !1, v();
			}, 100);
		}, D = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), a.dblClickSplitter && (m.value.splitter === t ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, O(e, t), m.value.splitter = null) : (m.value.splitter = t, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500)))), p.value.dragging || i("splitter-click", s.value[t]);
		}, O = (e, t) => {
			let n = 0;
			s.value = s.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), s.value[t].size -= n, i("pane-maximize", s.value[t]), i("resized", s.value.map((e) => ({
				min: e.min,
				max: e.max,
				size: e.size
			})));
		}, k = (e, t) => {
			i("pane-click", c.value[t]);
		}, A = (e) => {
			let t = u.value.getBoundingClientRect(), { clientX: n, clientY: r } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (a.horizontal ? 0 : p.value.cursorOffset) - t.left,
				y: r - (a.horizontal ? p.value.cursorOffset : 0) - t.top
			};
		}, j = (e) => {
			e = e[a.horizontal ? "y" : "x"];
			let t = u.value[a.horizontal ? "clientHeight" : "clientWidth"];
			return a.rtl && !a.horizontal && (e = t - e), e * 100 / t;
		}, N = (e) => {
			let t = p.value.activeSplitter, n = {
				prevPanesSize: F(t),
				nextPanesSize: I(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, r = 0 + (a.pushOtherPanes ? 0 : n.prevPanesSize), i = 100 - (a.pushOtherPanes ? 0 : n.nextPanesSize), o = Math.max(Math.min(j(e), i), r), c = [t, t + 1], l = s.value[c[0]] || null, u = s.value[c[1]] || null, d = l.max < 100 && o >= l.max + n.prevPanesSize, f = u.max < 100 && o <= 100 - (u.max + I(t + 1));
			if (d || f) {
				d ? (l.size = l.max, u.size = Math.max(100 - l.max - n.prevPanesSize - n.nextPanesSize, 0)) : (l.size = Math.max(100 - u.max - n.prevPanesSize - I(t + 1), 0), u.size = u.max);
				return;
			}
			if (a.pushOtherPanes) {
				let e = P(n, o);
				if (!e) return;
				({sums: n, panesToResize: c} = e), l = s.value[c[0]] || null, u = s.value[c[1]] || null;
			}
			l !== null && (l.size = Math.min(Math.max(o - n.prevPanesSize - n.prevReachedMinPanes, l.min), l.max)), u !== null && (u.size = Math.min(Math.max(100 - o - n.nextPanesSize - n.nextReachedMinPanes, u.min), u.max));
		}, P = (e, t) => {
			let n = p.value.activeSplitter, r = [n, n + 1];
			return t < e.prevPanesSize + s.value[r[0]].min && (r[0] = ne(n).index, e.prevReachedMinPanes = 0, r[0] < n && s.value.forEach((t, i) => {
				i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
			}), e.prevPanesSize = F(r[0]), r[0] === void 0) ? (e.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((t, r) => {
				r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
			}), s.value[r[1]].size = 100 - e.prevReachedMinPanes - s.value[0].min - e.prevPanesSize - e.nextPanesSize, null) : t > 100 - e.nextPanesSize - s.value[r[1]].min && (r[1] = re(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && s.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = I(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, s.value.forEach((t, r) => {
				r < l.value - 1 && r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), s.value[r[0]].size = 100 - e.prevPanesSize - I(r[0] - 1), null) : {
				sums: e,
				panesToResize: r
			};
		}, F = (e) => s.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), I = (e) => s.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), ne = (e) => [...s.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, re = (e) => s.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, ie = () => {
			Array.from(u.value?.children || []).forEach((e) => {
				let t = e.classList.contains("splitpanes__pane"), n = e.classList.contains("splitpanes__splitter");
				!t && !n && (e.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			});
		}, ae = (e, t, n = !1) => {
			let r = e - 1, i = document.createElement("div");
			i.classList.add("splitpanes__splitter"), n || (i.onmousedown = (e) => y(e, r), typeof window < "u" && "ontouchstart" in window && (i.ontouchstart = (e) => y(e, r)), i.onclick = (e) => D(e, r + 1)), a.dblClickSplitter && (i.ondblclick = (e) => O(e, r + 1)), t.parentNode.insertBefore(i, t);
		}, oe = (e) => {
			e.onmousedown = void 0, e.onclick = void 0, e.ondblclick = void 0, e.remove();
		}, se = () => {
			let e = Array.from(u.value?.children || []);
			e.forEach((e) => {
				e.className.includes("splitpanes__splitter") && oe(e);
			});
			let t = 0;
			e.forEach((e) => {
				e.className.includes("splitpanes__pane") && (!t && a.firstSplitter ? ae(t, e, !0) : t && ae(t, e), t++);
			});
		}, ce = ({ uid: e, ...t }) => {
			let n = c.value[e];
			Object.entries(t).forEach(([e, t]) => n[e] = t);
		}, le = (e) => {
			let t = -1;
			Array.from(u.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), s.value.splice(t, 0, {
				...e,
				index: t
			}), s.value.forEach((e, t) => e.index = t), f.value && g(() => {
				se(), ue({ addedPane: s.value[t] }), i("pane-add", {
					index: t,
					panes: s.value.map((e) => ({
						min: e.min,
						max: e.max,
						size: e.size
					}))
				});
			});
		}, L = (e) => {
			let t = s.value.findIndex((t) => t.id === e), n = s.value.splice(t, 1)[0];
			s.value.forEach((e, t) => e.index = t), g(() => {
				se(), ue({ removedPane: { ...n } }), i("pane-remove", {
					removed: n,
					panes: s.value.map((e) => ({
						min: e.min,
						max: e.max,
						size: e.size
					}))
				});
			});
		}, ue = (e = {}) => {
			!e.addedPane && !e.removedPane ? fe() : s.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? pe(e) : de(), f.value && i("resized", s.value.map((e) => ({
				min: e.min,
				max: e.max,
				size: e.size
			})));
		}, de = () => {
			let e = 100 / l.value, t = 0, n = [], r = [];
			s.value.forEach((i) => {
				i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			}), t > .1 && me(t, n, r);
		}, fe = () => {
			let e = 100, t = [], n = [], r = 0;
			s.value.forEach((i) => {
				e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			});
			let i = 100;
			e > .1 && (s.value.forEach((t) => {
				t.givenSize === null && (t.size = Math.max(Math.min(e / (l.value - r), t.max), t.min)), i -= t.size;
			}), i > .1 && me(i, t, n));
		}, pe = ({ addedPane: e, removedPane: t } = {}) => {
			let n = 100 / l.value, r = 0, i = [], a = [];
			(e?.givenSize ?? null) !== null && (n = (100 - e.givenSize) / (l.value - 1).value), s.value.forEach((e) => {
				r -= e.size, e.size >= e.max && i.push(e.id), e.size <= e.min && a.push(e.id);
			}), !(Math.abs(r) < .1) && (s.value.forEach((t) => {
				e?.givenSize !== null && e?.id === t.id || (t.size = Math.max(Math.min(n, t.max), t.min)), r -= t.size, t.size >= t.max && i.push(t.id), t.size <= t.min && a.push(t.id);
			}), r > .1 && me(r, i, a));
		}, me = (e, t, n) => {
			let r;
			r = e > 0 ? e / (l.value - t.length) : e / (l.value - n.length), s.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && g(() => {
				f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
			});
		};
		M(() => a.firstSplitter, () => se()), M(() => a.dblClickSplitter, (e) => {
			[...u.value.querySelectorAll(".splitpanes__splitter")].forEach((t, n) => {
				t.ondblclick = e ? (e) => O(e, n) : void 0;
			});
		}), b(() => f.value = !1), x(() => {
			ie(), se(), ue(), i("ready"), f.value = !0;
		});
		let he = () => d("div", {
			ref: u,
			class: h.value
		}, o.default?.call(o));
		return w("panes", s), w("indexedPanes", c), w("horizontal", t(() => a.horizontal)), w("requestUpdate", ce), w("onPaneAdd", le), w("onPaneRemove", L), w("onPaneClick", k), (e, t) => (C(), r(ee(he)));
	}
}, de = {
	__name: "pane",
	props: {
		size: { type: [Number, String] },
		minSize: {
			type: [Number, String],
			default: 0
		},
		maxSize: {
			type: [Number, String],
			default: 100
		}
	},
	setup(e) {
		let n = e, r = f("requestUpdate"), i = f("onPaneAdd"), o = f("horizontal"), s = f("onPaneRemove"), c = f("onPaneClick"), l = u()?.uid, d = f("indexedPanes"), p = t(() => d.value[l]), m = E(null), h = t(() => {
			let e = isNaN(n.size) || n.size === void 0 ? 0 : parseFloat(n.size);
			return Math.max(Math.min(e, _.value), g.value);
		}), g = t(() => {
			let e = parseFloat(n.minSize);
			return isNaN(e) ? 0 : e;
		}), _ = t(() => {
			let e = parseFloat(n.maxSize);
			return isNaN(e) ? 100 : e;
		}), y = t(() => `${o.value ? "height" : "width"}: ${p.value?.size}%`);
		return x(() => {
			i({
				id: l,
				el: m.value,
				min: g.value,
				max: _.value,
				givenSize: n.size === void 0 ? null : h.value,
				size: h.value
			});
		}), M(() => h.value, (e) => r({
			uid: l,
			size: e
		})), M(() => g.value, (e) => r({
			uid: l,
			min: e
		})), M(() => _.value, (e) => r({
			uid: l,
			max: e
		})), b(() => s(l)), (e, t) => (C(), a("div", {
			ref_key: "paneEl",
			ref: m,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => j(c)(t, e._.uid),
			style: v(y.value)
		}, [O(e.$slots, "default")], 4));
	}
}, fe = Symbol("selectedNodeId"), pe = Symbol("highlightedNodeId"), me = Symbol("selectNode"), he = Symbol("viewOptions"), ge = /* @__PURE__ */ le((/* @__PURE__ */ se(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof e == "object" ? e.ClipboardJS = r() : n.ClipboardJS = r();
	})(e, function() {
		return (function() {
			var e = {
				686: (function(e, t, n) {
					n.d(t, { default: function() {
						return D;
					} });
					var r = n(279), i = /*#__PURE__*/ n.n(r), a = n(370), o = /*#__PURE__*/ n.n(a), s = n(817), c = /*#__PURE__*/ n.n(s);
					function l(e) {
						try {
							return document.execCommand(e);
						} catch {
							return !1;
						}
					}
					var u = function(e) {
						var t = c()(e);
						return l("cut"), t;
					};
					function d(e) {
						var t = document.documentElement.getAttribute("dir") === "rtl", n = document.createElement("textarea");
						n.style.fontSize = "12pt", n.style.border = "0", n.style.padding = "0", n.style.margin = "0", n.style.position = "absolute", n.style[t ? "right" : "left"] = "-9999px";
						var r = window.pageYOffset || document.documentElement.scrollTop;
						return n.style.top = `${r}px`, n.setAttribute("readonly", ""), n.value = e, n;
					}
					var f = function(e) {
						var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body }, n = "";
						if (typeof e == "string") {
							var r = d(e);
							t.container.appendChild(r), n = c()(r), l("copy"), r.remove();
						} else n = c()(e), l("copy");
						return n;
					};
					function p(e) {
						"@babel/helpers - typeof";
						return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
							return typeof e;
						} : function(e) {
							return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
						}, p(e);
					}
					var m = function() {
						var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.action, n = t === void 0 ? "copy" : t, r = e.container, i = e.target, a = e.text;
						if (n !== "copy" && n !== "cut") throw Error("Invalid \"action\" value, use either \"copy\" or \"cut\"");
						if (i !== void 0) if (i && p(i) === "object" && i.nodeType === 1) {
							if (n === "copy" && i.hasAttribute("disabled")) throw Error("Invalid \"target\" attribute. Please use \"readonly\" instead of \"disabled\" attribute");
							if (n === "cut" && (i.hasAttribute("readonly") || i.hasAttribute("disabled"))) throw Error("Invalid \"target\" attribute. You can't cut text from elements with \"readonly\" or \"disabled\" attributes");
						} else throw Error("Invalid \"target\" value, use a valid Element");
						if (a) return f(a, { container: r });
						if (i) return n === "cut" ? u(i) : f(i, { container: r });
					};
					function h(e) {
						"@babel/helpers - typeof";
						return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
							return typeof e;
						} : function(e) {
							return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
						}, h(e);
					}
					function g(e, t) {
						if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
					}
					function _(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
						}
					}
					function v(e, t, n) {
						return t && _(e.prototype, t), n && _(e, n), e;
					}
					function y(e, t) {
						if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, { constructor: {
							value: e,
							writable: !0,
							configurable: !0
						} }), t && b(e, t);
					}
					function b(e, t) {
						return b = Object.setPrototypeOf || function(e, t) {
							return e.__proto__ = t, e;
						}, b(e, t);
					}
					function x(e) {
						var t = w();
						return function() {
							var n = T(e), r;
							if (t) {
								var i = T(this).constructor;
								r = Reflect.construct(n, arguments, i);
							} else r = n.apply(this, arguments);
							return S(this, r);
						};
					}
					function S(e, t) {
						return t && (h(t) === "object" || typeof t == "function") ? t : C(e);
					}
					function C(e) {
						if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					}
					function w() {
						if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
						if (typeof Proxy == "function") return !0;
						try {
							return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
						} catch {
							return !1;
						}
					}
					function T(e) {
						return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
							return e.__proto__ || Object.getPrototypeOf(e);
						}, T(e);
					}
					function E(e, t) {
						var n = `data-clipboard-${e}`;
						if (t.hasAttribute(n)) return t.getAttribute(n);
					}
					var D = /* @__PURE__ */ function(e) {
						y(n, e);
						var t = x(n);
						function n(e, r) {
							var i;
							return g(this, n), i = t.call(this), i.resolveOptions(r), i.listenClick(e), i;
						}
						return v(n, [
							{
								key: "resolveOptions",
								value: function() {
									var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
									this.action = typeof e.action == "function" ? e.action : this.defaultAction, this.target = typeof e.target == "function" ? e.target : this.defaultTarget, this.text = typeof e.text == "function" ? e.text : this.defaultText, this.container = h(e.container) === "object" ? e.container : document.body;
								}
							},
							{
								key: "listenClick",
								value: function(e) {
									var t = this;
									this.listener = o()(e, "click", function(e) {
										return t.onClick(e);
									});
								}
							},
							{
								key: "onClick",
								value: function(e) {
									var t = e.delegateTarget || e.currentTarget, n = this.action(t) || "copy", r = m({
										action: n,
										container: this.container,
										target: this.target(t),
										text: this.text(t)
									});
									this.emit(r ? "success" : "error", {
										action: n,
										text: r,
										trigger: t,
										clearSelection: function() {
											t && t.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
										}
									});
								}
							},
							{
								key: "defaultAction",
								value: function(e) {
									return E("action", e);
								}
							},
							{
								key: "defaultTarget",
								value: function(e) {
									var t = E("target", e);
									if (t) return document.querySelector(t);
								}
							},
							{
								key: "defaultText",
								value: function(e) {
									return E("text", e);
								}
							},
							{
								key: "destroy",
								value: function() {
									this.listener.destroy();
								}
							}
						], [
							{
								key: "copy",
								value: function(e) {
									return f(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body });
								}
							},
							{
								key: "cut",
								value: function(e) {
									return u(e);
								}
							},
							{
								key: "isSupported",
								value: function() {
									var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], t = typeof e == "string" ? [e] : e, n = !!document.queryCommandSupported;
									return t.forEach(function(e) {
										n &&= !!document.queryCommandSupported(e);
									}), n;
								}
							}
						]), n;
					}(i());
				}),
				828: (function(e) {
					var t = 9;
					if (typeof Element < "u" && !Element.prototype.matches) {
						var n = Element.prototype;
						n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
					}
					function r(e, n) {
						for (; e && e.nodeType !== t;) {
							if (typeof e.matches == "function" && e.matches(n)) return e;
							e = e.parentNode;
						}
					}
					e.exports = r;
				}),
				438: (function(e, t, n) {
					var r = n(828);
					function i(e, t, n, r, i) {
						var a = o.apply(this, arguments);
						return e.addEventListener(n, a, i), { destroy: function() {
							e.removeEventListener(n, a, i);
						} };
					}
					function a(e, t, n, r, a) {
						return typeof e.addEventListener == "function" ? i.apply(null, arguments) : typeof n == "function" ? i.bind(null, document).apply(null, arguments) : (typeof e == "string" && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
							return i(e, t, n, r, a);
						}));
					}
					function o(e, t, n, i) {
						return function(n) {
							n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n);
						};
					}
					e.exports = a;
				}),
				879: (function(e, t) {
					t.node = function(e) {
						return e !== void 0 && e instanceof HTMLElement && e.nodeType === 1;
					}, t.nodeList = function(e) {
						var n = Object.prototype.toString.call(e);
						return e !== void 0 && (n === "[object NodeList]" || n === "[object HTMLCollection]") && "length" in e && (e.length === 0 || t.node(e[0]));
					}, t.string = function(e) {
						return typeof e == "string" || e instanceof String;
					}, t.fn = function(e) {
						return Object.prototype.toString.call(e) === "[object Function]";
					};
				}),
				370: (function(e, t, n) {
					var r = n(879), i = n(438);
					function a(e, t, n) {
						if (!e && !t && !n) throw Error("Missing required arguments");
						if (!r.string(t)) throw TypeError("Second argument must be a String");
						if (!r.fn(n)) throw TypeError("Third argument must be a Function");
						if (r.node(e)) return o(e, t, n);
						if (r.nodeList(e)) return s(e, t, n);
						if (r.string(e)) return c(e, t, n);
						throw TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
					}
					function o(e, t, n) {
						return e.addEventListener(t, n), { destroy: function() {
							e.removeEventListener(t, n);
						} };
					}
					function s(e, t, n) {
						return Array.prototype.forEach.call(e, function(e) {
							e.addEventListener(t, n);
						}), { destroy: function() {
							Array.prototype.forEach.call(e, function(e) {
								e.removeEventListener(t, n);
							});
						} };
					}
					function c(e, t, n) {
						return i(document.body, e, t, n);
					}
					e.exports = a;
				}),
				817: (function(e) {
					function t(e) {
						var t;
						if (e.nodeName === "SELECT") e.focus(), t = e.value;
						else if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
							var n = e.hasAttribute("readonly");
							n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value;
						} else {
							e.hasAttribute("contenteditable") && e.focus();
							var r = window.getSelection(), i = document.createRange();
							i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString();
						}
						return t;
					}
					e.exports = t;
				}),
				279: (function(e) {
					function t() {}
					t.prototype = {
						on: function(e, t, n) {
							var r = this.e ||= {};
							return (r[e] || (r[e] = [])).push({
								fn: t,
								ctx: n
							}), this;
						},
						once: function(e, t, n) {
							var r = this;
							function i() {
								r.off(e, i), t.apply(n, arguments);
							}
							return i._ = t, this.on(e, i, n);
						},
						emit: function(e) {
							for (var t = [].slice.call(arguments, 1), n = ((this.e ||= {})[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
							return this;
						},
						off: function(e, t) {
							var n = this.e ||= {}, r = n[e], i = [];
							if (r && t) for (var a = 0, o = r.length; a < o; a++) r[a].fn !== t && r[a].fn._ !== t && i.push(r[a]);
							return i.length ? n[e] = i : delete n[e], this;
						}
					}, e.exports = t, e.exports.TinyEmitter = t;
				})
			}, t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = { exports: {} };
				return e[r](i, i.exports, n), i.exports;
			}
			return (function() {
				n.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default;
					} : function() {
						return e;
					};
					return n.d(t, { a: t }), t;
				};
			})(), (function() {
				n.d = function(e, t) {
					for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
						enumerable: !0,
						get: t[r]
					});
				};
			})(), (function() {
				n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				};
			})(), n(686);
		})().default;
	});
})))(), 1), _e = (e) => {
	let t = e?.appendToBody === void 0 ? !0 : e.appendToBody;
	return { toClipboard(e, n) {
		return new Promise((r, i) => {
			let a = document.createElement("button"), o = new ge.default(a, {
				text: () => e,
				action: () => "copy",
				container: n === void 0 ? document.body : n
			});
			o.on("success", (e) => {
				o.destroy(), r(e);
			}), o.on("error", (e) => {
				o.destroy(), i(e);
			}), t && document.body.appendChild(a), a.click(), t && document.body.removeChild(a);
		});
	} };
}, R = "top", ve = "bottom", ye = "right", be = "left", xe = "auto", Se = [
	R,
	ve,
	ye,
	be
], Ce = "start", we = "end", Te = "clippingParents", Ee = "viewport", De = "popper", Oe = "reference", ke = /*#__PURE__*/ Se.reduce(function(e, t) {
	return e.concat([t + "-" + Ce, t + "-" + we]);
}, []), Ae = /*#__PURE__*/ [].concat(Se, [xe]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Ce,
		t + "-" + we
	]);
}, []), je = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
function Me(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ne(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
function Pe(e) {
	return e instanceof Ne(e).Element || e instanceof Element;
}
function Fe(e) {
	return e instanceof Ne(e).HTMLElement || e instanceof HTMLElement;
}
function Ie(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Ne(e).ShadowRoot || e instanceof ShadowRoot;
}
function Le(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!Fe(i) || !Me(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function Re(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!Fe(r) || !Me(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var ze = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: Le,
	effect: Re,
	requires: ["computeStyles"]
};
function Be(e) {
	return e.split("-")[0];
}
var Ve = Math.max, He = Math.min, Ue = Math.round;
function We(e, t) {
	t === void 0 && (t = !1);
	var n = e.getBoundingClientRect(), r = 1, i = 1;
	if (Fe(e) && t) {
		var a = e.offsetHeight, o = e.offsetWidth;
		o > 0 && (r = Ue(n.width) / o || 1), a > 0 && (i = Ue(n.height) / a || 1);
	}
	return {
		width: n.width / r,
		height: n.height / i,
		top: n.top / i,
		right: n.right / r,
		bottom: n.bottom / i,
		left: n.left / r,
		x: n.left / r,
		y: n.top / i
	};
}
function Ge(e) {
	var t = We(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
function Ke(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ie(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
function qe(e) {
	return Ne(e).getComputedStyle(e);
}
function Je(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Me(e)) >= 0;
}
function Ye(e) {
	return ((Pe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Xe(e) {
	return Me(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ie(e) ? e.host : null) || Ye(e);
}
function Ze(e) {
	return !Fe(e) || qe(e).position === "fixed" ? null : e.offsetParent;
}
function Qe(e) {
	var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
	if (navigator.userAgent.indexOf("Trident") !== -1 && Fe(e) && qe(e).position === "fixed") return null;
	for (var n = Xe(e); Fe(n) && ["html", "body"].indexOf(Me(n)) < 0;) {
		var r = qe(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function $e(e) {
	for (var t = Ne(e), n = Ze(e); n && Je(n) && qe(n).position === "static";) n = Ze(n);
	return n && (Me(n) === "html" || Me(n) === "body" && qe(n).position === "static") ? t : n || Qe(e) || t;
}
function et(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function tt(e, t, n) {
	return Ve(e, He(t, n));
}
function nt(e, t, n) {
	var r = tt(e, t, n);
	return r > n ? n : r;
}
function rt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
function it(e) {
	return Object.assign({}, rt(), e);
}
function at(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
var ot = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, it(typeof e == "number" ? at(e, Se) : e);
};
function st(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Be(n.placement), c = et(s), l = [be, ye].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = ot(i.padding, n), d = Ge(a), f = c === "y" ? R : be, p = c === "y" ? ve : ye, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = $e(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = tt(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function ct(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ke(t.elements.popper, r) && (t.elements.arrow = r));
}
var lt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: st,
	effect: ct,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
function ut(e) {
	return e.split("-")[1];
}
var dt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function ft(e) {
	var t = e.x, n = e.y, r = window.devicePixelRatio || 1;
	return {
		x: Ue(t * r) / r || 0,
		y: Ue(n * r) / r || 0
	};
}
function pt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = u === !0 ? ft(o) : typeof u == "function" ? u(o) : o, p = f.x, m = p === void 0 ? 0 : p, h = f.y, g = h === void 0 ? 0 : h, _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = be, b = R, x = window;
	if (l) {
		var S = $e(n), C = "clientHeight", w = "clientWidth";
		if (S === Ne(n) && (S = Ye(n), qe(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === R || (i === be || i === ye) && a === we) {
			b = ve;
			var T = d && x.visualViewport ? x.visualViewport.height : S[C];
			g -= T - r.height, g *= c ? 1 : -1;
		}
		if (i === be || (i === R || i === ve) && a === we) {
			y = ye;
			var E = d && x.visualViewport ? x.visualViewport.width : S[w];
			m -= E - r.width, m *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && dt);
	if (c) {
		var O;
		return Object.assign({}, D, (O = {}, O[b] = v ? "0" : "", O[y] = _ ? "0" : "", O.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", O));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? g + "px" : "", t[y] = _ ? m + "px" : "", t.transform = "", t));
}
function mt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Be(t.placement),
		variation: ut(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ht = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: mt,
	data: {}
}, gt = { passive: !0 };
function _t(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = Ne(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, gt);
	}), s && c.addEventListener("resize", n.update, gt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, gt);
		}), s && c.removeEventListener("resize", n.update, gt);
	};
}
var vt = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: _t,
	data: {}
}, yt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function bt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return yt[e];
	});
}
var xt = {
	start: "end",
	end: "start"
};
function St(e) {
	return e.replace(/start|end/g, function(e) {
		return xt[e];
	});
}
function Ct(e) {
	var t = Ne(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
function wt(e) {
	return We(Ye(e)).left + Ct(e).scrollLeft;
}
function Tt(e) {
	var t = Ne(e), n = Ye(e), r = t.visualViewport, i = n.clientWidth, a = n.clientHeight, o = 0, s = 0;
	return r && (i = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = r.offsetLeft, s = r.offsetTop)), {
		width: i,
		height: a,
		x: o + wt(e),
		y: s
	};
}
function Et(e) {
	var t = Ye(e), n = Ct(e), r = e.ownerDocument?.body, i = Ve(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ve(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + wt(e), s = -n.scrollTop;
	return qe(r || t).direction === "rtl" && (o += Ve(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
function Dt(e) {
	var t = qe(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Ot(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Me(e)) >= 0 ? e.ownerDocument.body : Fe(e) && Dt(e) ? e : Ot(Xe(e));
}
function kt(e, t) {
	t === void 0 && (t = []);
	var n = Ot(e), r = n === e.ownerDocument?.body, i = Ne(n), a = r ? [i].concat(i.visualViewport || [], Dt(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(kt(Xe(a)));
}
function At(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
function jt(e) {
	var t = We(e);
	return t.top += e.clientTop, t.left += e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Mt(e, t) {
	return t === Ee ? At(Tt(e)) : Pe(t) ? jt(t) : At(Et(Ye(e)));
}
function Nt(e) {
	var t = kt(Xe(e)), n = ["absolute", "fixed"].indexOf(qe(e).position) >= 0, r = n && Fe(e) ? $e(e) : e;
	return Pe(r) ? t.filter(function(e) {
		return Pe(e) && Ke(e, r) && Me(e) !== "body" && (n ? qe(e).position !== "static" : !0);
	}) : [];
}
function Pt(e, t, n) {
	var r = t === "clippingParents" ? Nt(e) : [].concat(t), i = [].concat(r, [n]), a = i[0], o = i.reduce(function(t, n) {
		var r = Mt(e, n);
		return t.top = Ve(r.top, t.top), t.right = He(r.right, t.right), t.bottom = He(r.bottom, t.bottom), t.left = Ve(r.left, t.left), t;
	}, Mt(e, a));
	return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Ft(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Be(r) : null, a = r ? ut(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case R:
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case ve:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case ye:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case be:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? et(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Ce:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case we:
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return c;
}
function It(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.boundary, o = a === void 0 ? Te : a, s = n.rootBoundary, c = s === void 0 ? Ee : s, l = n.elementContext, u = l === void 0 ? De : l, d = n.altBoundary, f = d === void 0 ? !1 : d, p = n.padding, m = p === void 0 ? 0 : p, h = it(typeof m == "number" ? at(m, Se) : m), g = u === De ? Oe : De, _ = e.rects.popper, v = e.elements[f ? g : u], y = Pt(Pe(v) ? v : v.contextElement || Ye(e.elements.popper), o, c), b = We(e.elements.reference), x = Ft({
		reference: b,
		element: _,
		strategy: "absolute",
		placement: i
	}), S = At(Object.assign({}, _, x)), C = u === De ? S : b, w = {
		top: y.top - C.top + h.top,
		bottom: C.bottom - y.bottom + h.bottom,
		left: y.left - C.left + h.left,
		right: C.right - y.right + h.right
	}, T = e.modifiersData.offset;
	if (u === De && T) {
		var E = T[i];
		Object.keys(w).forEach(function(e) {
			var t = [ye, ve].indexOf(e) >= 0 ? 1 : -1, n = [R, ve].indexOf(e) >= 0 ? "y" : "x";
			w[e] += E[n] * t;
		});
	}
	return w;
}
function Lt(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Ae : c, u = ut(r), d = u ? s ? ke : ke.filter(function(e) {
		return ut(e) === u;
	}) : Se, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = It(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Be(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
function Rt(e) {
	if (Be(e) === xe) return [];
	var t = bt(e);
	return [
		St(e),
		t,
		St(t)
	];
}
function zt(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Be(g) === g, v = c || (_ || !m ? [bt(g)] : Rt(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Be(n) === xe ? Lt(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Be(E), O = ut(E) === Ce, ee = [R, ve].indexOf(D) >= 0, k = ee ? "width" : "height", A = It(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = ee ? O ? ye : be : O ? ve : R;
			b[k] > x[k] && (j = bt(j));
			var te = bt(j), M = [];
			if (a && M.push(A[D] <= 0), s && M.push(A[j] <= 0, A[te] <= 0), M.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, M);
		}
		if (C) for (var N = m ? 3 : 1, P = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, F = N; F > 0 && P(F) !== "break"; F--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Bt = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: zt,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
function Vt(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function Ht(e) {
	return [
		R,
		ye,
		ve,
		be
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Ut(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = It(t, { elementContext: "reference" }), s = It(t, { altBoundary: !0 }), c = Vt(o, r), l = Vt(s, i, a), u = Ht(c), d = Ht(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var Wt = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Ut
};
function Gt(e, t, n) {
	var r = Be(e), i = [be, R].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, [be, ye].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Kt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Ae.reduce(function(e, n) {
		return e[n] = Gt(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var qt = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Kt
};
function Jt(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Ft({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Yt = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Jt,
	data: {}
};
function Xt(e) {
	return e === "x" ? "y" : "x";
}
function Zt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = It(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Be(t.placement), v = ut(t.placement), y = !v, b = et(_), x = Xt(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var ee = b === "y" ? R : be, k = b === "y" ? ve : ye, A = b === "y" ? "height" : "width", j = S[b], te = j + g[ee], M = j - g[k], N = p ? -w[A] / 2 : 0, P = v === Ce ? C[A] : w[A], F = v === Ce ? -w[A] : -C[A], I = t.elements.arrow, ne = p && I ? Ge(I) : {
				width: 0,
				height: 0
			}, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : rt(), ie = re[ee], ae = re[k], oe = tt(0, C[A], ne[A]), se = y ? C[A] / 2 - N - oe - ie - E.mainAxis : P - oe - ie - E.mainAxis, ce = y ? -C[A] / 2 + N + oe + ae + E.mainAxis : F + oe + ae + E.mainAxis, le = t.elements.arrow && $e(t.elements.arrow), L = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, ue = D?.[b] ?? 0, de = j + se - ue - L, fe = j + ce - ue, pe = tt(p ? He(te, de) : te, j, p ? Ve(M, fe) : M);
			S[b] = pe, O[b] = pe - j;
		}
		if (s) {
			var me = b === "x" ? R : be, he = b === "x" ? ve : ye, ge = S[x], _e = x === "y" ? "height" : "width", xe = ge + g[me], Se = ge - g[he], we = [R, be].indexOf(_) !== -1, Te = D?.[x] ?? 0, Ee = we ? xe : ge - C[_e] - w[_e] - Te + E.altAxis, De = we ? ge + C[_e] + w[_e] - Te - E.altAxis : Se, Oe = p && we ? nt(Ee, ge, De) : tt(p ? Ee : xe, ge, p ? De : Se);
			S[x] = Oe, O[x] = Oe - ge;
		}
		t.modifiersData[r] = O;
	}
}
var Qt = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Zt,
	requiresIfExists: ["offset"]
};
function $t(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
function en(e) {
	return e === Ne(e) || !Fe(e) ? Ct(e) : $t(e);
}
function tn(e) {
	var t = e.getBoundingClientRect(), n = Ue(t.width) / e.offsetWidth || 1, r = Ue(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function nn(e, t, n) {
	n === void 0 && (n = !1);
	var r = Fe(t), i = Fe(t) && tn(t), a = Ye(t), o = We(e, i), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Me(t) !== "body" || Dt(a)) && (s = en(t)), Fe(t) ? (c = We(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = wt(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
function rn(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function an(e) {
	var t = rn(e);
	return je.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
function on(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
function sn(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
var cn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function ln() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function un(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? cn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, cn, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: Pe(e) ? kt(e) : e.contextElement ? kt(e.contextElement) : [],
					popper: kt(t)
				};
				var s = an(sn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (ln(t, n)) {
						i.rects = {
							reference: nn(t, $e(n), i.options.strategy === "fixed"),
							popper: Ge(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: on(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!ln(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
var dn = /*#__PURE__*/ un({ defaultModifiers: [
	vt,
	Yt,
	ht,
	ze,
	qt,
	Bt,
	Qt,
	lt,
	Wt
] }), fn = "tippy-box", pn = "tippy-content", mn = "tippy-backdrop", hn = "tippy-arrow", gn = "tippy-svg-arrow", _n = {
	passive: !0,
	capture: !0
}, vn = function() {
	return document.body;
};
function yn(e, t, n) {
	return Array.isArray(e) ? e[t] ?? (Array.isArray(n) ? n[t] : n) : e;
}
function bn(e, t) {
	var n = {}.toString.call(e);
	return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
}
function xn(e, t) {
	return typeof e == "function" ? e.apply(void 0, t) : e;
}
function Sn(e, t) {
	if (t === 0) return e;
	var n;
	return function(r) {
		clearTimeout(n), n = setTimeout(function() {
			e(r);
		}, t);
	};
}
function Cn(e, t) {
	var n = Object.assign({}, e);
	return t.forEach(function(e) {
		delete n[e];
	}), n;
}
function wn(e) {
	return e.split(/\s+/).filter(Boolean);
}
function Tn(e) {
	return [].concat(e);
}
function En(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Dn(e) {
	return e.filter(function(t, n) {
		return e.indexOf(t) === n;
	});
}
function On(e) {
	return e.split("-")[0];
}
function kn(e) {
	return [].slice.call(e);
}
function An(e) {
	return Object.keys(e).reduce(function(t, n) {
		return e[n] !== void 0 && (t[n] = e[n]), t;
	}, {});
}
function jn() {
	return document.createElement("div");
}
function Mn(e) {
	return ["Element", "Fragment"].some(function(t) {
		return bn(e, t);
	});
}
function Nn(e) {
	return bn(e, "NodeList");
}
function Pn(e) {
	return bn(e, "MouseEvent");
}
function Fn(e) {
	return !!(e && e._tippy && e._tippy.reference === e);
}
function In(e) {
	return Mn(e) ? [e] : Nn(e) ? kn(e) : Array.isArray(e) ? e : kn(document.querySelectorAll(e));
}
function Ln(e, t) {
	e.forEach(function(e) {
		e && (e.style.transitionDuration = t + "ms");
	});
}
function Rn(e, t) {
	e.forEach(function(e) {
		e && e.setAttribute("data-state", t);
	});
}
function zn(e) {
	var t, n = Tn(e)[0];
	return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function Bn(e, t) {
	var n = t.clientX, r = t.clientY;
	return e.every(function(e) {
		var t = e.popperRect, i = e.popperState, a = e.props.interactiveBorder, o = On(i.placement), s = i.modifiersData.offset;
		if (!s) return !0;
		var c = o === "bottom" ? s.top.y : 0, l = o === "top" ? s.bottom.y : 0, u = o === "right" ? s.left.x : 0, d = o === "left" ? s.right.x : 0, f = t.top - r + c > a, p = r - t.bottom - l > a, m = t.left - n + u > a, h = n - t.right - d > a;
		return f || p || m || h;
	});
}
function Vn(e, t, n) {
	var r = t + "EventListener";
	["transitionend", "webkitTransitionEnd"].forEach(function(t) {
		e[r](t, n);
	});
}
function Hn(e, t) {
	for (var n = t; n;) {
		if (e.contains(n)) return !0;
		n = n.getRootNode == null ? void 0 : n.getRootNode()?.host;
	}
	return !1;
}
var Un = { isTouch: !1 }, Wn = 0;
function Gn() {
	Un.isTouch || (Un.isTouch = !0, window.performance && document.addEventListener("mousemove", Kn));
}
function Kn() {
	var e = performance.now();
	e - Wn < 20 && (Un.isTouch = !1, document.removeEventListener("mousemove", Kn)), Wn = e;
}
function qn() {
	var e = document.activeElement;
	if (Fn(e)) {
		var t = e._tippy;
		e.blur && !t.state.isVisible && e.blur();
	}
}
function Jn() {
	document.addEventListener("touchstart", Gn, _n), window.addEventListener("blur", qn);
}
var Yn = typeof window < "u" && typeof document < "u" ? !!window.msCrypto : !1, Xn = Object.assign({
	appendTo: vn,
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
	onAfterUpdate: function() {},
	onBeforeUpdate: function() {},
	onCreate: function() {},
	onDestroy: function() {},
	onHidden: function() {},
	onHide: function() {},
	onMount: function() {},
	onShow: function() {},
	onShown: function() {},
	onTrigger: function() {},
	onUntrigger: function() {},
	onClickOutside: function() {},
	placement: "top",
	plugins: [],
	popperOptions: {},
	render: null,
	showOnCreate: !1,
	touch: !0,
	trigger: "mouseenter focus",
	triggerTarget: null
}, {
	animateFill: !1,
	followCursor: !1,
	inlinePositioning: !1,
	sticky: !1
}, {
	allowHTML: !1,
	animation: "fade",
	arrow: !0,
	content: "",
	inertia: !1,
	maxWidth: 350,
	role: "tooltip",
	theme: "",
	zIndex: 9999
}), Zn = Object.keys(Xn), Qn = function(e) {
	Object.keys(e).forEach(function(t) {
		Xn[t] = e[t];
	});
};
function $n(e) {
	var t = (e.plugins || []).reduce(function(t, n) {
		var r = n.name, i = n.defaultValue;
		return r && (t[r] = e[r] === void 0 ? Xn[r] ?? i : e[r]), t;
	}, {});
	return Object.assign({}, e, t);
}
function er(e, t) {
	return (t ? Object.keys($n(Object.assign({}, Xn, { plugins: t }))) : Zn).reduce(function(t, n) {
		var r = (e.getAttribute("data-tippy-" + n) || "").trim();
		if (!r) return t;
		if (n === "content") t[n] = r;
		else try {
			t[n] = JSON.parse(r);
		} catch {
			t[n] = r;
		}
		return t;
	}, {});
}
function tr(e, t) {
	var n = Object.assign({}, t, { content: xn(t.content, [e]) }, t.ignoreAttributes ? {} : er(e, t.plugins));
	return n.aria = Object.assign({}, Xn.aria, n.aria), n.aria = {
		expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
		content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
	}, n;
}
var nr = function() {
	return "innerHTML";
};
function rr(e, t) {
	e[nr()] = t;
}
function ir(e) {
	var t = jn();
	return e === !0 ? t.className = hn : (t.className = gn, Mn(e) ? t.appendChild(e) : rr(t, e)), t;
}
function ar(e, t) {
	Mn(t.content) ? (rr(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? rr(e, t.content) : e.textContent = t.content);
}
function or(e) {
	var t = e.firstElementChild, n = kn(t.children);
	return {
		box: t,
		content: n.find(function(e) {
			return e.classList.contains(pn);
		}),
		arrow: n.find(function(e) {
			return e.classList.contains(hn) || e.classList.contains(gn);
		}),
		backdrop: n.find(function(e) {
			return e.classList.contains(mn);
		})
	};
}
function sr(e) {
	var t = jn(), n = jn();
	n.className = fn, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
	var r = jn();
	r.className = pn, r.setAttribute("data-state", "hidden"), ar(r, e.props), t.appendChild(n), n.appendChild(r), i(e.props, e.props);
	function i(n, r) {
		var i = or(t), a = i.box, o = i.content, s = i.arrow;
		r.theme ? a.setAttribute("data-theme", r.theme) : a.removeAttribute("data-theme"), typeof r.animation == "string" ? a.setAttribute("data-animation", r.animation) : a.removeAttribute("data-animation"), r.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof r.maxWidth == "number" ? r.maxWidth + "px" : r.maxWidth, r.role ? a.setAttribute("role", r.role) : a.removeAttribute("role"), (n.content !== r.content || n.allowHTML !== r.allowHTML) && ar(o, e.props), r.arrow ? s ? n.arrow !== r.arrow && (a.removeChild(s), a.appendChild(ir(r.arrow))) : a.appendChild(ir(r.arrow)) : s && a.removeChild(s);
	}
	return {
		popper: t,
		onUpdate: i
	};
}
sr.$$tippy = !0;
var cr = 1, lr = [], ur = [];
function dr(e, t) {
	var n = tr(e, Object.assign({}, Xn, $n(An(t)))), r, i, a, o = !1, s = !1, c = !1, l = !1, u, d, f, p = [], m = Sn(de, n.interactiveDebounce), h, g = cr++, _ = null, v = Dn(n.plugins), y = {
		id: g,
		reference: e,
		popper: jn(),
		popperInstance: _,
		props: n,
		state: {
			isEnabled: !0,
			isVisible: !1,
			isDestroyed: !1,
			isMounted: !1,
			isShown: !1
		},
		plugins: v,
		clearDelayTimeouts: Se,
		setProps: Ce,
		setContent: we,
		show: Te,
		hide: Ee,
		hideWithInteractivity: De,
		enable: be,
		disable: xe,
		unmount: Oe,
		destroy: ke
	};
	/* istanbul ignore if */
	if (!n.render) return y;
	var b = n.render(y), x = b.popper, S = b.onUpdate;
	x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + y.id, y.popper = x, e._tippy = y, x._tippy = y;
	var C = v.map(function(e) {
		return e.fn(y);
	}), w = e.hasAttribute("aria-expanded");
	return le(), N(), j(), te("onCreate", [y]), n.showOnCreate && ve(), x.addEventListener("mouseenter", function() {
		y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
	}), x.addEventListener("mouseleave", function() {
		y.props.interactive && y.props.trigger.indexOf("mouseenter") >= 0 && ee().addEventListener("mousemove", m);
	}), y;
	function T() {
		var e = y.props.touch;
		return Array.isArray(e) ? e : [e, 0];
	}
	function E() {
		return T()[0] === "hold";
	}
	function D() {
		var e;
		return !!((e = y.props.render) != null && e.$$tippy);
	}
	function O() {
		return h || e;
	}
	function ee() {
		var e = O().parentNode;
		return e ? zn(e) : document;
	}
	function k() {
		return or(x);
	}
	function A(e) {
		return y.state.isMounted && !y.state.isVisible || Un.isTouch || u && u.type === "focus" ? 0 : yn(y.props.delay, +!e, Xn.delay);
	}
	function j(e) {
		e === void 0 && (e = !1), x.style.pointerEvents = y.props.interactive && !e ? "" : "none", x.style.zIndex = "" + y.props.zIndex;
	}
	function te(e, t, n) {
		if (n === void 0 && (n = !0), C.forEach(function(n) {
			n[e] && n[e].apply(n, t);
		}), n) {
			var r;
			(r = y.props)[e].apply(r, t);
		}
	}
	function M() {
		var t = y.props.aria;
		if (t.content) {
			var n = "aria-" + t.content, r = x.id;
			Tn(y.props.triggerTarget || e).forEach(function(e) {
				var t = e.getAttribute(n);
				if (y.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
				else {
					var i = t && t.replace(r, "").trim();
					i ? e.setAttribute(n, i) : e.removeAttribute(n);
				}
			});
		}
	}
	function N() {
		w || !y.props.aria.expanded || Tn(y.props.triggerTarget || e).forEach(function(e) {
			y.props.interactive ? e.setAttribute("aria-expanded", y.state.isVisible && e === O() ? "true" : "false") : e.removeAttribute("aria-expanded");
		});
	}
	function P() {
		ee().removeEventListener("mousemove", m), lr = lr.filter(function(e) {
			return e !== m;
		});
	}
	function F(t) {
		if (!(Un.isTouch && (c || t.type === "mousedown"))) {
			var n = t.composedPath && t.composedPath()[0] || t.target;
			if (!(y.props.interactive && Hn(x, n))) {
				if (Tn(y.props.triggerTarget || e).some(function(e) {
					return Hn(e, n);
				})) {
					if (Un.isTouch || y.state.isVisible && y.props.trigger.indexOf("click") >= 0) return;
				} else te("onClickOutside", [y, t]);
				y.props.hideOnClick === !0 && (y.clearDelayTimeouts(), y.hide(), s = !0, setTimeout(function() {
					s = !1;
				}), y.state.isMounted || ie());
			}
		}
	}
	function I() {
		c = !0;
	}
	function ne() {
		c = !1;
	}
	function re() {
		var e = ee();
		e.addEventListener("mousedown", F, !0), e.addEventListener("touchend", F, _n), e.addEventListener("touchstart", ne, _n), e.addEventListener("touchmove", I, _n);
	}
	function ie() {
		var e = ee();
		e.removeEventListener("mousedown", F, !0), e.removeEventListener("touchend", F, _n), e.removeEventListener("touchstart", ne, _n), e.removeEventListener("touchmove", I, _n);
	}
	function ae(e, t) {
		se(e, function() {
			!y.state.isVisible && x.parentNode && x.parentNode.contains(x) && t();
		});
	}
	function oe(e, t) {
		se(e, t);
	}
	function se(e, t) {
		var n = k().box;
		function r(e) {
			e.target === n && (Vn(n, "remove", r), t());
		}
		if (e === 0) return t();
		Vn(n, "remove", d), Vn(n, "add", r), d = r;
	}
	function ce(t, n, r) {
		r === void 0 && (r = !1), Tn(y.props.triggerTarget || e).forEach(function(e) {
			e.addEventListener(t, n, r), p.push({
				node: e,
				eventType: t,
				handler: n,
				options: r
			});
		});
	}
	function le() {
		E() && (ce("touchstart", ue, { passive: !0 }), ce("touchend", fe, { passive: !0 })), wn(y.props.trigger).forEach(function(e) {
			if (e !== "manual") switch (ce(e, ue), e) {
				case "mouseenter":
					ce("mouseleave", fe);
					break;
				case "focus":
					ce(Yn ? "focusout" : "blur", pe);
					break;
				case "focusin":
					ce("focusout", pe);
					break;
			}
		});
	}
	function L() {
		p.forEach(function(e) {
			var t = e.node, n = e.eventType, r = e.handler, i = e.options;
			t.removeEventListener(n, r, i);
		}), p = [];
	}
	function ue(e) {
		var t = !1;
		if (!(!y.state.isEnabled || me(e) || s)) {
			var n = u?.type === "focus";
			u = e, h = e.currentTarget, N(), !y.state.isVisible && Pn(e) && lr.forEach(function(t) {
				return t(e);
			}), e.type === "click" && (y.props.trigger.indexOf("mouseenter") < 0 || o) && y.props.hideOnClick !== !1 && y.state.isVisible ? t = !0 : ve(e), e.type === "click" && (o = !t), t && !n && ye(e);
		}
	}
	function de(e) {
		var t = e.target, r = O().contains(t) || x.contains(t);
		e.type === "mousemove" && r || Bn(R().concat(x).map(function(e) {
			var t = e._tippy.popperInstance?.state;
			return t ? {
				popperRect: e.getBoundingClientRect(),
				popperState: t,
				props: n
			} : null;
		}).filter(Boolean), e) && (P(), ye(e));
	}
	function fe(e) {
		if (!(me(e) || y.props.trigger.indexOf("click") >= 0 && o)) {
			if (y.props.interactive) {
				y.hideWithInteractivity(e);
				return;
			}
			ye(e);
		}
	}
	function pe(e) {
		y.props.trigger.indexOf("focusin") < 0 && e.target !== O() || y.props.interactive && e.relatedTarget && x.contains(e.relatedTarget) || ye(e);
	}
	function me(e) {
		return Un.isTouch ? E() !== e.type.indexOf("touch") >= 0 : !1;
	}
	function he() {
		ge();
		var t = y.props, n = t.popperOptions, r = t.placement, i = t.offset, a = t.getReferenceClientRect, o = t.moveTransition, s = D() ? or(x).arrow : null, c = a ? {
			getBoundingClientRect: a,
			contextElement: a.contextElement || O()
		} : e, l = [
			{
				name: "offset",
				options: { offset: i }
			},
			{
				name: "preventOverflow",
				options: { padding: {
					top: 2,
					bottom: 2,
					left: 5,
					right: 5
				} }
			},
			{
				name: "flip",
				options: { padding: 5 }
			},
			{
				name: "computeStyles",
				options: { adaptive: !o }
			},
			{
				name: "$$tippy",
				enabled: !0,
				phase: "beforeWrite",
				requires: ["computeStyles"],
				fn: function(e) {
					var t = e.state;
					if (D()) {
						var n = k().box;
						[
							"placement",
							"reference-hidden",
							"escaped"
						].forEach(function(e) {
							e === "placement" ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e);
						}), t.attributes.popper = {};
					}
				}
			}
		];
		D() && s && l.push({
			name: "arrow",
			options: {
				element: s,
				padding: 3
			}
		}), l.push.apply(l, n?.modifiers || []), y.popperInstance = dn(c, x, Object.assign({}, n, {
			placement: r,
			onFirstUpdate: f,
			modifiers: l
		}));
	}
	function ge() {
		y.popperInstance &&= (y.popperInstance.destroy(), null);
	}
	function _e() {
		var e = y.props.appendTo, t, n = O();
		t = y.props.interactive && e === vn || e === "parent" ? n.parentNode : xn(e, [n]), t.contains(x) || t.appendChild(x), y.state.isMounted = !0, he();
	}
	function R() {
		return kn(x.querySelectorAll("[data-tippy-root]"));
	}
	function ve(e) {
		y.clearDelayTimeouts(), e && te("onTrigger", [y, e]), re();
		var t = A(!0), n = T(), i = n[0], a = n[1];
		Un.isTouch && i === "hold" && a && (t = a), t ? r = setTimeout(function() {
			y.show();
		}, t) : y.show();
	}
	function ye(e) {
		if (y.clearDelayTimeouts(), te("onUntrigger", [y, e]), !y.state.isVisible) {
			ie();
			return;
		}
		if (!(y.props.trigger.indexOf("mouseenter") >= 0 && y.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && o)) {
			var t = A(!1);
			t ? i = setTimeout(function() {
				y.state.isVisible && y.hide();
			}, t) : a = requestAnimationFrame(function() {
				y.hide();
			});
		}
	}
	function be() {
		y.state.isEnabled = !0;
	}
	function xe() {
		y.hide(), y.state.isEnabled = !1;
	}
	function Se() {
		clearTimeout(r), clearTimeout(i), cancelAnimationFrame(a);
	}
	function Ce(t) {
		if (!y.state.isDestroyed) {
			te("onBeforeUpdate", [y, t]), L();
			var n = y.props, r = tr(e, Object.assign({}, n, An(t), { ignoreAttributes: !0 }));
			y.props = r, le(), n.interactiveDebounce !== r.interactiveDebounce && (P(), m = Sn(de, r.interactiveDebounce)), n.triggerTarget && !r.triggerTarget ? Tn(n.triggerTarget).forEach(function(e) {
				e.removeAttribute("aria-expanded");
			}) : r.triggerTarget && e.removeAttribute("aria-expanded"), N(), j(), S && S(n, r), y.popperInstance && (he(), R().forEach(function(e) {
				requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
			})), te("onAfterUpdate", [y, t]);
		}
	}
	function we(e) {
		y.setProps({ content: e });
	}
	function Te() {
		var e = y.state.isVisible, t = y.state.isDestroyed, n = !y.state.isEnabled, r = Un.isTouch && !y.props.touch, i = yn(y.props.duration, 0, Xn.duration);
		if (!(e || t || n || r) && !O().hasAttribute("disabled") && (te("onShow", [y], !1), y.props.onShow(y) !== !1)) {
			if (y.state.isVisible = !0, D() && (x.style.visibility = "visible"), j(), re(), y.state.isMounted || (x.style.transition = "none"), D()) {
				var a = k(), o = a.box, s = a.content;
				Ln([o, s], 0);
			}
			f = function() {
				var e;
				if (!(!y.state.isVisible || l)) {
					if (l = !0, x.offsetHeight, x.style.transition = y.props.moveTransition, D() && y.props.animation) {
						var t = k(), n = t.box, r = t.content;
						Ln([n, r], i), Rn([n, r], "visible");
					}
					M(), N(), En(ur, y), (e = y.popperInstance) == null || e.forceUpdate(), te("onMount", [y]), y.props.animation && D() && oe(i, function() {
						y.state.isShown = !0, te("onShown", [y]);
					});
				}
			}, _e();
		}
	}
	function Ee() {
		var e = !y.state.isVisible, t = y.state.isDestroyed, n = !y.state.isEnabled, r = yn(y.props.duration, 1, Xn.duration);
		if (!(e || t || n) && (te("onHide", [y], !1), y.props.onHide(y) !== !1)) {
			if (y.state.isVisible = !1, y.state.isShown = !1, l = !1, o = !1, D() && (x.style.visibility = "hidden"), P(), ie(), j(!0), D()) {
				var i = k(), a = i.box, s = i.content;
				y.props.animation && (Ln([a, s], r), Rn([a, s], "hidden"));
			}
			M(), N(), y.props.animation ? D() && ae(r, y.unmount) : y.unmount();
		}
	}
	function De(e) {
		ee().addEventListener("mousemove", m), En(lr, m), m(e);
	}
	function Oe() {
		y.state.isVisible && y.hide(), y.state.isMounted && (ge(), R().forEach(function(e) {
			e._tippy.unmount();
		}), x.parentNode && x.parentNode.removeChild(x), ur = ur.filter(function(e) {
			return e !== y;
		}), y.state.isMounted = !1, te("onHidden", [y]));
	}
	function ke() {
		y.state.isDestroyed || (y.clearDelayTimeouts(), y.unmount(), L(), delete e._tippy, y.state.isDestroyed = !0, te("onDestroy", [y]));
	}
}
function z(e, t) {
	t === void 0 && (t = {});
	var n = Xn.plugins.concat(t.plugins || []);
	Jn();
	var r = Object.assign({}, t, { plugins: n }), i = In(e).reduce(function(e, t) {
		var n = t && dr(t, r);
		return n && e.push(n), e;
	}, []);
	return Mn(e) ? i[0] : i;
}
z.defaultProps = Xn, z.setDefaultProps = Qn, z.currentInput = Un;
var fr = Object.assign({}, ze, { effect: function(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
} }), pr = function(e, t) {
	t === void 0 && (t = {});
	var n = e, r = [], i = [], a, o = t.overrides, s = [], c = !1;
	function l() {
		i = n.map(function(e) {
			return Tn(e.props.triggerTarget || e.reference);
		}).reduce(function(e, t) {
			return e.concat(t);
		}, []);
	}
	function u() {
		r = n.map(function(e) {
			return e.reference;
		});
	}
	function d(e) {
		n.forEach(function(t) {
			e ? t.enable() : t.disable();
		});
	}
	function f(e) {
		return n.map(function(t) {
			var n = t.setProps;
			return t.setProps = function(r) {
				n(r), t.reference === a && e.setProps(r);
			}, function() {
				t.setProps = n;
			};
		});
	}
	function p(e, t) {
		var s = i.indexOf(t);
		if (t !== a) {
			a = t;
			var c = (o || []).concat("content").reduce(function(e, t) {
				return e[t] = n[s].props[t], e;
			}, {});
			e.setProps(Object.assign({}, c, { getReferenceClientRect: typeof c.getReferenceClientRect == "function" ? c.getReferenceClientRect : function() {
				return r[s]?.getBoundingClientRect();
			} }));
		}
	}
	d(!1), u(), l();
	var m = z(jn(), Object.assign({}, Cn(t, ["overrides"]), {
		plugins: [{ fn: function() {
			return {
				onDestroy: function() {
					d(!0);
				},
				onHidden: function() {
					a = null;
				},
				onClickOutside: function(e) {
					e.props.showOnCreate && !c && (c = !0, a = null);
				},
				onShow: function(e) {
					e.props.showOnCreate && !c && (c = !0, p(e, r[0]));
				},
				onTrigger: function(e, t) {
					p(e, t.currentTarget);
				}
			};
		} }].concat(t.plugins || []),
		triggerTarget: i,
		popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(t.popperOptions?.modifiers || [], [fr]) })
	})), h = m.show;
	m.show = function(e) {
		if (h(), !a && e == null) return p(m, r[0]);
		if (!(a && e == null)) {
			if (typeof e == "number") return r[e] && p(m, r[e]);
			if (n.indexOf(e) >= 0) {
				var t = e.reference;
				return p(m, t);
			}
			if (r.indexOf(e) >= 0) return p(m, e);
		}
	}, m.showNext = function() {
		var e = r[0];
		if (!a) return m.show(0);
		var t = r.indexOf(a);
		m.show(r[t + 1] || e);
	}, m.showPrevious = function() {
		var e = r[r.length - 1];
		if (!a) return m.show(e);
		var t = r.indexOf(a), n = r[t - 1] || e;
		m.show(n);
	};
	var g = m.setProps;
	return m.setProps = function(e) {
		o = e.overrides || o, g(e);
	}, m.setInstances = function(e) {
		d(!0), s.forEach(function(e) {
			return e();
		}), n = e, d(!1), u(), l(), s = f(m), m.setProps({ triggerTarget: i });
	}, s = f(m), m;
}, mr = {
	name: "animateFill",
	defaultValue: !1,
	fn: function(e) {
		var t;
		if (!((t = e.props.render) != null && t.$$tippy)) return {};
		var n = or(e.popper), r = n.box, i = n.content, a = e.props.animateFill ? hr() : null;
		return {
			onCreate: function() {
				a && (r.insertBefore(a, r.firstElementChild), r.setAttribute("data-animatefill", ""), r.style.overflow = "hidden", e.setProps({
					arrow: !1,
					animation: "shift-away"
				}));
			},
			onMount: function() {
				if (a) {
					var e = r.style.transitionDuration, t = Number(e.replace("ms", ""));
					i.style.transitionDelay = Math.round(t / 10) + "ms", a.style.transitionDuration = e, Rn([a], "visible");
				}
			},
			onShow: function() {
				a && (a.style.transitionDuration = "0ms");
			},
			onHide: function() {
				a && Rn([a], "hidden");
			}
		};
	}
};
function hr() {
	var e = jn();
	return e.className = mn, Rn([e], "hidden"), e;
}
var gr = {
	clientX: 0,
	clientY: 0
}, _r = [];
function vr(e) {
	gr = {
		clientX: e.clientX,
		clientY: e.clientY
	};
}
function yr(e) {
	e.addEventListener("mousemove", vr);
}
function br(e) {
	e.removeEventListener("mousemove", vr);
}
var xr = {
	name: "followCursor",
	defaultValue: !1,
	fn: function(e) {
		var t = e.reference, n = zn(e.props.triggerTarget || t), r = !1, i = !1, a = !0, o = e.props;
		function s() {
			return e.props.followCursor === "initial" && e.state.isVisible;
		}
		function c() {
			n.addEventListener("mousemove", d);
		}
		function l() {
			n.removeEventListener("mousemove", d);
		}
		function u() {
			r = !0, e.setProps({ getReferenceClientRect: null }), r = !1;
		}
		function d(n) {
			var r = n.target ? t.contains(n.target) : !0, i = e.props.followCursor, a = n.clientX, o = n.clientY, s = t.getBoundingClientRect(), c = a - s.left, l = o - s.top;
			(r || !e.props.interactive) && e.setProps({ getReferenceClientRect: function() {
				var e = t.getBoundingClientRect(), n = a, r = o;
				i === "initial" && (n = e.left + c, r = e.top + l);
				var s = i === "horizontal" ? e.top : r, u = i === "vertical" ? e.right : n, d = i === "horizontal" ? e.bottom : r, f = i === "vertical" ? e.left : n;
				return {
					width: u - f,
					height: d - s,
					top: s,
					right: u,
					bottom: d,
					left: f
				};
			} });
		}
		function f() {
			e.props.followCursor && (_r.push({
				instance: e,
				doc: n
			}), yr(n));
		}
		function p() {
			_r = _r.filter(function(t) {
				return t.instance !== e;
			}), _r.filter(function(e) {
				return e.doc === n;
			}).length === 0 && br(n);
		}
		return {
			onCreate: f,
			onDestroy: p,
			onBeforeUpdate: function() {
				o = e.props;
			},
			onAfterUpdate: function(t, n) {
				var a = n.followCursor;
				r || a !== void 0 && o.followCursor !== a && (p(), a ? (f(), e.state.isMounted && !i && !s() && c()) : (l(), u()));
			},
			onMount: function() {
				e.props.followCursor && !i && (a &&= (d(gr), !1), s() || c());
			},
			onTrigger: function(e, t) {
				Pn(t) && (gr = {
					clientX: t.clientX,
					clientY: t.clientY
				}), i = t.type === "focus";
			},
			onHidden: function() {
				e.props.followCursor && (u(), l(), a = !0);
			}
		};
	}
};
function Sr(e, t) {
	return { popperOptions: Object.assign({}, e.popperOptions, { modifiers: [].concat((e.popperOptions?.modifiers || []).filter(function(e) {
		return e.name !== t.name;
	}), [t]) }) };
}
var Cr = {
	name: "inlinePositioning",
	defaultValue: !1,
	fn: function(e) {
		var t = e.reference;
		function n() {
			return !!e.props.inlinePositioning;
		}
		var r, i = -1, a = !1, o = [], s = {
			name: "tippyInlinePositioning",
			enabled: !0,
			phase: "afterWrite",
			fn: function(t) {
				var i = t.state;
				n() && (o.indexOf(i.placement) !== -1 && (o = []), r !== i.placement && o.indexOf(i.placement) === -1 && (o.push(i.placement), e.setProps({ getReferenceClientRect: function() {
					return c(i.placement);
				} })), r = i.placement);
			}
		};
		function c(e) {
			return wr(On(e), t.getBoundingClientRect(), kn(t.getClientRects()), i);
		}
		function l(t) {
			a = !0, e.setProps(t), a = !1;
		}
		function u() {
			a || l(Sr(e.props, s));
		}
		return {
			onCreate: u,
			onAfterUpdate: u,
			onTrigger: function(t, n) {
				if (Pn(n)) {
					var r = kn(e.reference.getClientRects()), a = r.find(function(e) {
						return e.left - 2 <= n.clientX && e.right + 2 >= n.clientX && e.top - 2 <= n.clientY && e.bottom + 2 >= n.clientY;
					}), o = r.indexOf(a);
					i = o > -1 ? o : i;
				}
			},
			onHidden: function() {
				i = -1;
			}
		};
	}
};
function wr(e, t, n, r) {
	if (n.length < 2 || e === null) return t;
	if (n.length === 2 && r >= 0 && n[0].left > n[1].right) return n[r] || t;
	switch (e) {
		case "top":
		case "bottom":
			var i = n[0], a = n[n.length - 1], o = e === "top", s = i.top, c = a.bottom, l = o ? i.left : a.left, u = o ? i.right : a.right;
			return {
				top: s,
				bottom: c,
				left: l,
				right: u,
				width: u - l,
				height: c - s
			};
		case "left":
		case "right":
			var d = Math.min.apply(Math, n.map(function(e) {
				return e.left;
			})), f = Math.max.apply(Math, n.map(function(e) {
				return e.right;
			})), p = n.filter(function(t) {
				return e === "left" ? t.left === d : t.right === f;
			}), m = p[0].top, h = p[p.length - 1].bottom, g = d, _ = f;
			return {
				top: m,
				bottom: h,
				left: g,
				right: _,
				width: _ - g,
				height: h - m
			};
		default: return t;
	}
}
var Tr = {
	name: "sticky",
	defaultValue: !1,
	fn: function(e) {
		var t = e.reference, n = e.popper;
		function r() {
			return e.popperInstance ? e.popperInstance.state.elements.reference : t;
		}
		function i(t) {
			return e.props.sticky === !0 || e.props.sticky === t;
		}
		var a = null, o = null;
		function s() {
			var t = i("reference") ? r().getBoundingClientRect() : null, c = i("popper") ? n.getBoundingClientRect() : null;
			(t && Er(a, t) || c && Er(o, c)) && e.popperInstance && e.popperInstance.update(), a = t, o = c, e.state.isMounted && requestAnimationFrame(s);
		}
		return { onMount: function() {
			e.props.sticky && s();
		} };
	}
};
function Er(e, t) {
	return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
}
z.setDefaultProps({ render: sr }), z.setDefaultProps({ onShow: (e) => {
	if (!e.props.content) return !1;
} });
var Dr = (e) => e instanceof Object && "$" in e && "$el" in e;
function Or(e, t = {}, r = {
	mount: !0,
	appName: "Tippy"
}) {
	r = Object.assign({
		mount: !0,
		appName: "Tippy"
	}, r);
	let i = u(), a = E(), o = E({
		isEnabled: !1,
		isVisible: !1,
		isDestroyed: !1,
		isMounted: !1,
		isShown: !1
	}), s = k(), c = null, l = () => c || (c = document.createDocumentFragment(), c), f = (e) => {
		let t, a = m(e) ? e.value : e;
		return h(a) ? (s.value || (s.value = n({
			name: r.appName,
			setup: () => () => m(e) ? e.value : e
		}), i && Object.assign(s.value._context, i.appContext), s.value.mount(l())), t = () => l()) : typeof a == "object" ? (s.value || (s.value = n({
			name: r.appName,
			setup: () => () => d(m(e) ? e.value : e)
		}), i && Object.assign(s.value._context, i.appContext), s.value.mount(l())), t = () => l()) : t = a, t;
	}, g = (e) => {
		let t = {};
		return t = m(e) ? e.value || {} : (p(e), { ...e }), t.content &&= f(t.content), t.triggerTarget &&= m(t.triggerTarget) ? t.triggerTarget.value : t.triggerTarget, (!t.plugins || !Array.isArray(t.plugins)) && (t.plugins = []), t.plugins = t.plugins.filter((e) => e.name !== "vueTippyReactiveState"), t.plugins.push({
			name: "vueTippyReactiveState",
			fn: () => ({
				onCreate() {
					o.value.isEnabled = !0;
				},
				onMount() {
					o.value.isMounted = !0;
				},
				onShow() {
					o.value.isMounted = !0, o.value.isVisible = !0;
				},
				onShown() {
					o.value.isShown = !0;
				},
				onHide() {
					o.value.isMounted = !1, o.value.isVisible = !1;
				},
				onHidden() {
					o.value.isShown = !1;
				},
				onUnmounted() {
					o.value.isMounted = !1;
				},
				onDestroy() {
					o.value.isDestroyed = !0;
				}
			})
		}), t;
	}, _ = () => {
		a.value && a.value.setProps(g(t));
	}, v = () => {
		!a.value || !t.content || a.value.setContent(f(t.content));
	}, y = (e) => {
		var t;
		(t = a.value) == null || t.setContent(f(e));
	}, b = (e) => {
		var t;
		(t = a.value) == null || t.setProps(g(e));
	}, C = () => {
		var e;
		a.value &&= (a.value.destroy(), void 0), c = null, (e = s.value) == null || e.unmount(), s.value = void 0;
	}, w = () => {
		var e;
		(e = a.value) == null || e.show();
	}, T = () => {
		var e;
		(e = a.value) == null || e.hide();
	}, D = () => {
		var e;
		(e = a.value) == null || e.disable(), o.value.isEnabled = !1;
	}, O = () => {
		var e;
		(e = a.value) == null || e.enable(), o.value.isEnabled = !0;
	}, ee = () => {
		var e;
		(e = a.value) == null || e.unmount();
	}, A = () => {
		if (!e) return;
		let n = m(e) ? e.value : e;
		typeof n == "function" && (n = n()), Dr(n) && (n = n.$el), n && (a.value = z(n, g(t)), n.$tippy = j);
	}, j = {
		tippy: a,
		refresh: _,
		refreshContent: v,
		setContent: y,
		setProps: b,
		destroy: C,
		hide: T,
		show: w,
		disable: D,
		enable: O,
		unmount: ee,
		mount: A,
		state: o
	};
	return r.mount && (i ? i.isMounted ? A() : x(A) : A()), i && S(() => {
		C();
	}), m(t) || p(t) ? M(t, _, { immediate: !1 }) : m(t.content) && M(t.content, v, { immediate: !1 }), j;
}
function kr(e, t) {
	let n = E();
	return x(() => {
		n.value = pr((Array.isArray(e) ? e.map((e) => e.value) : typeof e == "function" ? e() : e.value).map((e) => e instanceof Element ? e._tippy : e).filter(Boolean), t ? {
			allowHTML: !0,
			...t
		} : { allowHTML: !0 });
	}), { singleton: n };
}
function Ar(e) {
	return typeof e == "function" ? e() : j(e);
}
function jr(e) {
	let t = Ar(e);
	return t?.$el ?? t;
}
var Mr = l({
	props: {
		to: { type: [String, Function] },
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
		appendTo: { default: () => z.defaultProps.appendTo },
		aria: { default: () => z.defaultProps.aria },
		delay: { default: () => z.defaultProps.delay },
		duration: { default: () => z.defaultProps.duration },
		getReferenceClientRect: { default: () => z.defaultProps.getReferenceClientRect },
		hideOnClick: {
			type: [Boolean, String],
			default: () => z.defaultProps.hideOnClick
		},
		ignoreAttributes: {
			type: Boolean,
			default: () => z.defaultProps.ignoreAttributes
		},
		interactive: {
			type: Boolean,
			default: () => z.defaultProps.interactive
		},
		interactiveBorder: { default: () => z.defaultProps.interactiveBorder },
		interactiveDebounce: { default: () => z.defaultProps.interactiveDebounce },
		moveTransition: { default: () => z.defaultProps.moveTransition },
		offset: { default: () => z.defaultProps.offset },
		onAfterUpdate: { default: () => z.defaultProps.onAfterUpdate },
		onBeforeUpdate: { default: () => z.defaultProps.onBeforeUpdate },
		onCreate: { default: () => z.defaultProps.onCreate },
		onDestroy: { default: () => z.defaultProps.onDestroy },
		onHidden: { default: () => z.defaultProps.onHidden },
		onHide: { default: () => z.defaultProps.onHide },
		onMount: { default: () => z.defaultProps.onMount },
		onShow: { default: () => z.defaultProps.onShow },
		onShown: { default: () => z.defaultProps.onShown },
		onTrigger: { default: () => z.defaultProps.onTrigger },
		onUntrigger: { default: () => z.defaultProps.onUntrigger },
		onClickOutside: { default: () => z.defaultProps.onClickOutside },
		placement: { default: () => z.defaultProps.placement },
		plugins: { default: () => z.defaultProps.plugins },
		popperOptions: { default: () => z.defaultProps.popperOptions },
		render: { default: () => z.defaultProps.render },
		showOnCreate: {
			type: Boolean,
			default: () => z.defaultProps.showOnCreate
		},
		touch: {
			type: [
				Boolean,
				String,
				Array
			],
			default: () => z.defaultProps.touch
		},
		trigger: { default: () => z.defaultProps.trigger },
		triggerTarget: { default: () => z.defaultProps.triggerTarget },
		animateFill: {
			type: Boolean,
			default: () => z.defaultProps.animateFill
		},
		followCursor: {
			type: [Boolean, String],
			default: () => z.defaultProps.followCursor
		},
		inlinePositioning: {
			type: Boolean,
			default: () => z.defaultProps.inlinePositioning
		},
		sticky: {
			type: [Boolean, String],
			default: () => z.defaultProps.sticky
		},
		allowHTML: {
			type: Boolean,
			default: () => z.defaultProps.allowHTML
		},
		animation: { default: () => z.defaultProps.animation },
		arrow: { default: () => z.defaultProps.arrow },
		content: { default: () => z.defaultProps.content },
		inertia: { default: () => z.defaultProps.inertia },
		maxWidth: { default: () => z.defaultProps.maxWidth },
		role: { default: () => z.defaultProps.role },
		theme: { default: () => z.defaultProps.theme },
		zIndex: { default: () => z.defaultProps.zIndex }
	},
	emits: ["state"],
	setup(e, { slots: t, emit: n, expose: r }) {
		let i = E(), a = E(), o = E(), s = E(!1), c = () => {
			let t = { ...e };
			for (let e of [
				"to",
				"tag",
				"contentTag",
				"contentClass"
			]) t.hasOwnProperty(e) && delete t[e];
			return t;
		}, l = () => jr(i);
		e.to && (typeof Element < "u" && e.to instanceof Element ? l = () => e.to : e.to === "parent" ? l = () => {
			let e = i.value;
			return e ||= i.value = a.value.parentElement, e;
		} : (typeof e.to == "string" || e.to instanceof String) && (l = () => document.querySelector(e.to)));
		let u = Or(l, c()), f = t.content;
		!f && e.to === "parent" && (f = t.default), x(() => {
			s.value = !0, g(() => {
				f && u.setContent(() => o.value);
			});
		}), M(u.state, () => {
			n("state", j(u.state));
		}, {
			immediate: !0,
			deep: !0
		}), M(() => e, () => {
			u.setProps(c()), f && u.setContent(() => o.value);
		}, { deep: !0 });
		let p = T({
			elem: i,
			contentElem: o,
			mounted: s,
			...u
		});
		return r(p), () => {
			let n = (e.contentTag, e.contentTag), r = f ? d(n, {
				ref: o,
				style: { display: s.value ? "inherit" : "none" },
				class: e.contentClass
			}, f(p)) : null;
			if (e.to === "parent") {
				let e = [];
				if (!i.value) {
					let t = d("span", {
						ref: a,
						"data-v-tippy": "",
						style: { display: "none" }
					});
					e.push(t);
				}
				return r && e.push(r), e;
			}
			let c = t.default ? t.default(p) : [];
			if (!e.tag) {
				let e = d(c[0], {
					ref: i,
					"data-v-tippy": ""
				});
				return r ? [e, r] : e;
			}
			return d((e.tag, e.tag), {
				ref: i,
				"data-v-tippy": ""
			}, r ? [c, r] : c);
		};
	}
}), Nr = [
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
], Pr = {};
Object.keys(z.defaultProps).forEach((e) => {
	Nr.includes(e) ? Pr[e] = {
		type: Boolean,
		default: function() {
			return z.defaultProps[e];
		}
	} : Pr[e] = { default: function() {
		return z.defaultProps[e];
	} };
}), l({
	props: Pr,
	setup(e) {
		let t = E([]), { singleton: n } = kr(t, e);
		return {
			instances: t,
			singleton: n
		};
	},
	mounted() {
		var e;
		let t = this.$el.parentElement.querySelectorAll("[data-v-tippy]");
		this.instances = Array.from(t).map((e) => e._tippy).filter(Boolean), (e = this.singleton) == null || e.setInstances(this.instances);
	},
	render() {
		let e = this.$slots.default ? this.$slots.default() : [];
		return d(() => e);
	}
});
var Fr = {
	mounted(e, t, n) {
		let r = typeof t.value == "string" ? { content: t.value } : t.value || {}, i = Object.keys(t.modifiers || {}), a = i.find((e) => e !== "arrow"), o = i.findIndex((e) => e === "arrow") !== -1;
		a && (r.placement = r.placement || a), o && (r.arrow = r.arrow === void 0 ? !0 : r.arrow), n.props && n.props.onTippyShow && (r.onShow = function(...e) {
			return n.props?.onTippyShow(...e);
		}), n.props && n.props.onTippyShown && (r.onShown = function(...e) {
			return n.props?.onTippyShown(...e);
		}), n.props && n.props.onTippyHidden && (r.onHidden = function(...e) {
			return n.props?.onTippyHidden(...e);
		}), n.props && n.props.onTippyHide && (r.onHide = function(...e) {
			return n.props?.onTippyHide(...e);
		}), n.props && n.props.onTippyMount && (r.onMount = function(...e) {
			return n.props?.onTippyMount(...e);
		}), e.getAttribute("title") && !r.content && (r.content = e.getAttribute("title"), e.removeAttribute("title")), e.getAttribute("content") && !r.content && (r.content = e.getAttribute("content")), Or(e, r);
	},
	unmounted(e) {
		e.$tippy ? e.$tippy.destroy() : e._tippy && e._tippy.destroy();
	},
	updated(e, t) {
		let n = typeof t.value == "string" ? { content: t.value } : t.value || {};
		n.content ||= null, e.getAttribute("title") && !n.content && (n.content = e.getAttribute("title"), e.removeAttribute("title")), e.getAttribute("content") && !n.content && (n.content = e.getAttribute("content")), e.$tippy ? e.$tippy.setProps(n || {}) : e._tippy && e._tippy.setProps(n || {});
	}
}, Ir = z.setDefaultProps;
Ir({
	ignoreAttributes: !0,
	plugins: [
		Tr,
		Cr,
		xr,
		mr
	]
});
//#endregion
//#region node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function Lr(e, t, n) {
	return (t = zr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function B(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function V(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? B(Object(n), !0).forEach(function(t) {
			Lr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Rr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function zr(e) {
	var t = Rr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
var H = () => {}, Br = {}, Vr = {}, Hr = null, Ur = {
	mark: H,
	measure: H
};
try {
	typeof window < "u" && (Br = window), typeof document < "u" && (Vr = document), typeof MutationObserver < "u" && (Hr = MutationObserver), typeof performance < "u" && (Ur = performance);
} catch {}
var { userAgent: Wr = "" } = Br.navigator || {}, Gr = Br, Kr = Vr, qr = Hr, Jr = Ur;
Gr.document;
var Yr = !!Kr.documentElement && !!Kr.head && typeof Kr.addEventListener == "function" && typeof Kr.createElement == "function", Xr = ~Wr.indexOf("MSIE") || ~Wr.indexOf("Trident/"), Zr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Qr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, $r = {
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
}, ei = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, ti = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
], ni = "classic", ri = "duotone", ii = [
	ni,
	ri,
	"sharp",
	"sharp-duotone"
], ai = {
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
}, oi = {
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
}, si = new Map([
	["classic", {
		defaultShortPrefixId: "fas",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin",
			"brands"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp", {
		defaultShortPrefixId: "fass",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["duotone", {
		defaultShortPrefixId: "fad",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp-duotone", {
		defaultShortPrefixId: "fasds",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}]
]), ci = {
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
}, li = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], ui = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
}, di = ["kit"], fi = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
}, pi = ["fak", "fakd"], mi = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
}, hi = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
}, gi = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, _i = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
], vi = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], yi = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
}, bi = {
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
}, xi = {
	classic: [
		"fas",
		"far",
		"fal",
		"fat",
		"fad"
	],
	duotone: [
		"fadr",
		"fadl",
		"fadt"
	],
	sharp: [
		"fass",
		"fasr",
		"fasl",
		"fast"
	],
	"sharp-duotone": [
		"fasds",
		"fasdr",
		"fasdl",
		"fasdt"
	]
}, Si = {
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
}, Ci = [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands"
], wi = [
	"fa",
	"fas",
	"far",
	"fal",
	"fat",
	"fad",
	"fadr",
	"fadl",
	"fadt",
	"fab",
	"fass",
	"fasr",
	"fasl",
	"fast",
	"fasds",
	"fasdr",
	"fasdl",
	"fasdt",
	..._i,
	...Ci
], Ti = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands"
], Ei = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
], Di = Ei.concat([
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20
]), Oi = [
	...Object.keys(xi),
	...Ti,
	"2xs",
	"xs",
	"sm",
	"lg",
	"xl",
	"2xl",
	"beat",
	"border",
	"fade",
	"beat-fade",
	"bounce",
	"flip-both",
	"flip-horizontal",
	"flip-vertical",
	"flip",
	"fw",
	"inverse",
	"layers-counter",
	"layers-text",
	"layers",
	"li",
	"pull-left",
	"pull-right",
	"pulse",
	"rotate-180",
	"rotate-270",
	"rotate-90",
	"rotate-by",
	"shake",
	"spin-pulse",
	"spin-reverse",
	"spin",
	"stack-1x",
	"stack-2x",
	"stack",
	"ul",
	gi.GROUP,
	gi.SWAP_OPACITY,
	gi.PRIMARY,
	gi.SECONDARY
].concat(Ei.map((e) => `${e}x`), Di.map((e) => `w-${e}`)), ki = {
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
	"Font Awesome 5 Duotone": { 900: "fad" }
}, Ai = "___FONT_AWESOME___", ji = 16, Mi = "fa", Ni = "svg-inline--fa", Pi = "data-fa-i2svg", Fi = "data-fa-pseudo-element", Ii = "data-fa-pseudo-element-pending", Li = "data-prefix", Ri = "data-icon", zi = "fontawesome-i2svg", Bi = "async", Vi = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
], Hi = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})();
function Ui(e) {
	return new Proxy(e, { get(e, t) {
		return t in e ? e[t] : e[ni];
	} });
}
var Wi = V({}, $r);
Wi[ni] = V(V(V(V({}, { "fa-duotone": "duotone" }), $r[ni]), ui.kit), ui["kit-duotone"]);
var Gi = Ui(Wi), Ki = V({}, ci);
Ki[ni] = V(V(V(V({}, { duotone: "fad" }), Ki[ni]), hi.kit), hi["kit-duotone"]);
var qi = Ui(Ki), Ji = V({}, Si);
Ji[ni] = V(V({}, Ji[ni]), mi.kit);
var Yi = Ui(Ji), Xi = V({}, bi);
Xi[ni] = V(V({}, Xi[ni]), fi.kit), Ui(Xi);
var Zi = Zr, Qi = "fa-layers-text", $i = Qr;
Ui(V({}, ai));
var ea = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
], ta = ei, na = [...di, ...Oi], ra = Gr.FontAwesomeConfig || {};
function ia(e) {
	var t = Kr.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function aa(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Kr && typeof Kr.querySelector == "function" && [
	["data-family-prefix", "familyPrefix"],
	["data-css-prefix", "cssPrefix"],
	["data-family-default", "familyDefault"],
	["data-style-default", "styleDefault"],
	["data-replacement-class", "replacementClass"],
	["data-auto-replace-svg", "autoReplaceSvg"],
	["data-auto-add-css", "autoAddCss"],
	["data-auto-a11y", "autoA11y"],
	["data-search-pseudo-elements", "searchPseudoElements"],
	["data-observe-mutations", "observeMutations"],
	["data-mutate-approach", "mutateApproach"],
	["data-keep-original-source", "keepOriginalSource"],
	["data-measure-performance", "measurePerformance"],
	["data-show-missing-icons", "showMissingIcons"]
].forEach((e) => {
	let [t, n] = e, r = aa(ia(t));
	r != null && (ra[n] = r);
});
var oa = {
	styleDefault: "solid",
	familyDefault: ni,
	cssPrefix: Mi,
	replacementClass: Ni,
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
ra.familyPrefix && (ra.cssPrefix = ra.familyPrefix);
var sa = V(V({}, oa), ra);
sa.autoReplaceSvg || (sa.observeMutations = !1);
var U = {};
Object.keys(oa).forEach((e) => {
	Object.defineProperty(U, e, {
		enumerable: !0,
		set: function(t) {
			sa[e] = t, ca.forEach((e) => e(U));
		},
		get: function() {
			return sa[e];
		}
	});
}), Object.defineProperty(U, "familyPrefix", {
	enumerable: !0,
	set: function(e) {
		sa.cssPrefix = e, ca.forEach((e) => e(U));
	},
	get: function() {
		return sa.cssPrefix;
	}
}), Gr.FontAwesomeConfig = U;
var ca = [];
function la(e) {
	return ca.push(e), () => {
		ca.splice(ca.indexOf(e), 1);
	};
}
var ua = ji, da = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: !1,
	flipY: !1
};
function fa(e) {
	if (!e || !Yr) return;
	let t = Kr.createElement("style");
	t.setAttribute("type", "text/css"), t.innerHTML = e;
	let n = Kr.head.childNodes, r = null;
	for (let e = n.length - 1; e > -1; e--) {
		let t = n[e], i = (t.tagName || "").toUpperCase();
		["STYLE", "LINK"].indexOf(i) > -1 && (r = t);
	}
	return Kr.head.insertBefore(t, r), e;
}
var pa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ma() {
	let e = 12, t = "";
	for (; e-- > 0;) t += pa[Math.random() * 62 | 0];
	return t;
}
function ha(e) {
	let t = [];
	for (let n = (e || []).length >>> 0; n--;) t[n] = e[n];
	return t;
}
function ga(e) {
	return e.classList ? ha(e.classList) : (e.getAttribute("class") || "").split(" ").filter((e) => e);
}
function _a(e) {
	return `${e}`.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function va(e) {
	return Object.keys(e || {}).reduce((t, n) => t + `${n}="${_a(e[n])}" `, "").trim();
}
function ya(e) {
	return Object.keys(e || {}).reduce((t, n) => t + `${n}: ${e[n].trim()};`, "");
}
function ba(e) {
	return e.size !== da.size || e.x !== da.x || e.y !== da.y || e.rotate !== da.rotate || e.flipX || e.flipY;
}
function xa(e) {
	let { transform: t, containerWidth: n, iconWidth: r } = e;
	return {
		outer: { transform: `translate(${n / 2} 256)` },
		inner: { transform: `${`translate(${t.x * 32}, ${t.y * 32}) `} ${`scale(${t.size / 16 * (t.flipX ? -1 : 1)}, ${t.size / 16 * (t.flipY ? -1 : 1)}) `} ${`rotate(${t.rotate} 0 0)`}` },
		path: { transform: `translate(${r / 2 * -1} -256)` }
	};
}
function Sa(e) {
	let { transform: t, width: n = ji, height: r = ji, startCentered: i = !1 } = e, a = "";
	return i && Xr ? a += `translate(${t.x / ua - n / 2}em, ${t.y / ua - r / 2}em) ` : i ? a += `translate(calc(-50% + ${t.x / ua}em), calc(-50% + ${t.y / ua}em)) ` : a += `translate(${t.x / ua}em, ${t.y / ua}em) `, a += `scale(${t.size / ua * (t.flipX ? -1 : 1)}, ${t.size / ua * (t.flipY ? -1 : 1)}) `, a += `rotate(${t.rotate}deg) `, a;
}
var Ca = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";
function wa() {
	let e = Mi, t = Ni, n = U.cssPrefix, r = U.replacementClass, i = Ca;
	if (n !== e || r !== t) {
		let a = RegExp(`\\.${e}\\-`, "g"), o = RegExp(`\\--${e}\\-`, "g"), s = RegExp(`\\.${t}`, "g");
		i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`);
	}
	return i;
}
var Ta = !1;
function Ea() {
	U.autoAddCss && !Ta && (fa(wa()), Ta = !0);
}
var Da = {
	mixout() {
		return { dom: {
			css: wa,
			insertCss: Ea
		} };
	},
	hooks() {
		return {
			beforeDOMElementCreation() {
				Ea();
			},
			beforeI2svg() {
				Ea();
			}
		};
	}
}, Oa = Gr || {};
Oa[Ai] || (Oa[Ai] = {}), Oa[Ai].styles || (Oa[Ai].styles = {}), Oa[Ai].hooks || (Oa[Ai].hooks = {}), Oa[Ai].shims || (Oa[Ai].shims = []);
var ka = Oa[Ai], Aa = [], W = function() {
	Kr.removeEventListener("DOMContentLoaded", W), ja = 1, Aa.map((e) => e());
}, ja = !1;
Yr && (ja = (Kr.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Kr.readyState), ja || Kr.addEventListener("DOMContentLoaded", W));
function Ma(e) {
	Yr && (ja ? setTimeout(e, 0) : Aa.push(e));
}
function Na(e) {
	let { tag: t, attributes: n = {}, children: r = [] } = e;
	return typeof e == "string" ? _a(e) : `<${t} ${va(n)}>${r.map(Na).join("")}</${t}>`;
}
function Pa(e, t, n) {
	if (e && e[t] && e[t][n]) return {
		prefix: t,
		iconName: n,
		icon: e[t][n]
	};
}
var Fa = function(e, t) {
	return function(n, r, i, a) {
		return e.call(t, n, r, i, a);
	};
}, Ia = function(e, t, n, r) {
	var i = Object.keys(e), a = i.length, o = r === void 0 ? t : Fa(t, r), s, c, l;
	for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
	return l;
};
function La(e) {
	let t = [], n = 0, r = e.length;
	for (; n < r;) {
		let i = e.charCodeAt(n++);
		if (i >= 55296 && i <= 56319 && n < r) {
			let r = e.charCodeAt(n++);
			(r & 64512) == 56320 ? t.push(((i & 1023) << 10) + (r & 1023) + 65536) : (t.push(i), n--);
		} else t.push(i);
	}
	return t;
}
function Ra(e) {
	let t = La(e);
	return t.length === 1 ? t[0].toString(16) : null;
}
function za(e, t) {
	let n = e.length, r = e.charCodeAt(t), i;
	return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Ba(e) {
	return Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
	}, {});
}
function Va(e, t) {
	let { skipHooks: n = !1 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ba(t);
	typeof ka.hooks.addPack == "function" && !n ? ka.hooks.addPack(e, Ba(t)) : ka.styles[e] = V(V({}, ka.styles[e] || {}), r), e === "fas" && Va("fa", t);
}
var { styles: Ha, shims: Ua } = ka, Wa = Object.keys(Yi), Ga = Wa.reduce((e, t) => (e[t] = Object.keys(Yi[t]), e), {}), Ka = null, qa = {}, Ja = {}, Ya = {}, Xa = {}, Za = {};
function Qa(e) {
	return ~na.indexOf(e);
}
function $a(e, t) {
	let n = t.split("-"), r = n[0], i = n.slice(1).join("-");
	return r === e && i !== "" && !Qa(i) ? i : null;
}
var eo = () => {
	let e = (e) => Ia(Ha, (t, n, r) => (t[r] = Ia(n, e, {}), t), {});
	qa = e((e, t, n) => (t[3] && (e[t[3]] = n), t[2] && t[2].filter((e) => typeof e == "number").forEach((t) => {
		e[t.toString(16)] = n;
	}), e)), Ja = e((e, t, n) => (e[n] = n, t[2] && t[2].filter((e) => typeof e == "string").forEach((t) => {
		e[t] = n;
	}), e)), Za = e((e, t, n) => {
		let r = t[2];
		return e[n] = n, r.forEach((t) => {
			e[t] = n;
		}), e;
	});
	let t = "far" in Ha || U.autoFetchSvg, n = Ia(Ua, (e, n) => {
		let r = n[0], i = n[1], a = n[2];
		return i === "far" && !t && (i = "fas"), typeof r == "string" && (e.names[r] = {
			prefix: i,
			iconName: a
		}), typeof r == "number" && (e.unicodes[r.toString(16)] = {
			prefix: i,
			iconName: a
		}), e;
	}, {
		names: {},
		unicodes: {}
	});
	Ya = n.names, Xa = n.unicodes, Ka = lo(U.styleDefault, { family: U.familyDefault });
};
la((e) => {
	Ka = lo(e.styleDefault, { family: U.familyDefault });
}), eo();
function to(e, t) {
	return (qa[e] || {})[t];
}
function no(e, t) {
	return (Ja[e] || {})[t];
}
function ro(e, t) {
	return (Za[e] || {})[t];
}
function io(e) {
	return Ya[e] || {
		prefix: null,
		iconName: null
	};
}
function ao(e) {
	let t = Xa[e], n = to("fas", e);
	return t || (n ? {
		prefix: "fas",
		iconName: n
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function oo() {
	return Ka;
}
var so = () => ({
	prefix: null,
	iconName: null,
	rest: []
});
function co(e) {
	let t = ni, n = Wa.reduce((e, t) => (e[t] = `${U.cssPrefix}-${t}`, e), {});
	return ii.forEach((r) => {
		(e.includes(n[r]) || e.some((e) => Ga[r].includes(e))) && (t = r);
	}), t;
}
function lo(e) {
	let { family: t = ni } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Gi[t][e];
	if (t === ri && !e) return "fad";
	let r = qi[t][e] || qi[t][n], i = e in ka.styles ? e : null;
	return r || i || null;
}
function uo(e) {
	let t = [], n = null;
	return e.forEach((e) => {
		let r = $a(U.cssPrefix, e);
		r ? n = r : e && t.push(e);
	}), {
		iconName: n,
		rest: t
	};
}
function fo(e) {
	return e.sort().filter((e, t, n) => n.indexOf(e) === t);
}
function po(e) {
	let { skipLookups: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = null, r = wi.concat(vi), i = fo(e.filter((e) => r.includes(e))), a = fo(e.filter((e) => !wi.includes(e))), [o = null] = i.filter((e) => (n = e, !ti.includes(e))), s = co(i), c = V(V({}, uo(a)), {}, { prefix: lo(o, { family: s }) });
	return V(V(V({}, c), _o({
		values: e,
		family: s,
		styles: Ha,
		config: U,
		canonical: c,
		givenPrefix: n
	})), mo(t, n, c));
}
function mo(e, t, n) {
	let { prefix: r, iconName: i } = n;
	if (e || !r || !i) return {
		prefix: r,
		iconName: i
	};
	let a = t === "fa" ? io(i) : {}, o = ro(r, i);
	return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !Ha.far && Ha.fas && !U.autoFetchSvg && (r = "fas"), {
		prefix: r,
		iconName: i
	};
}
var ho = ii.filter((e) => e !== ni || e !== ri), go = Object.keys(Si).filter((e) => e !== ni).map((e) => Object.keys(Si[e])).flat();
function _o(e) {
	let { values: t, family: n, canonical: r, givenPrefix: i = "", styles: a = {}, config: o = {} } = e, s = n === ri, c = t.includes("fa-duotone") || t.includes("fad"), l = o.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
	return !s && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && ho.includes(n) && (Object.keys(a).find((e) => go.includes(e)) || o.autoFetchSvg) && (r.prefix = si.get(n).defaultShortPrefixId, r.iconName = ro(r.prefix, r.iconName) || r.iconName), (r.prefix === "fa" || i === "fa") && (r.prefix = oo() || "fas"), r;
}
var vo = class {
	constructor() {
		this.definitions = {};
	}
	add() {
		let e = [...arguments].reduce(this._pullDefinitions, {});
		Object.keys(e).forEach((t) => {
			this.definitions[t] = V(V({}, this.definitions[t] || {}), e[t]), Va(t, e[t]);
			let n = Yi[ni][t];
			n && Va(n, e[t]), eo();
		});
	}
	reset() {
		this.definitions = {};
	}
	_pullDefinitions(e, t) {
		let n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
		return Object.keys(n).map((t) => {
			let { prefix: r, iconName: i, icon: a } = n[t], o = a[2];
			e[r] || (e[r] = {}), o.length > 0 && o.forEach((t) => {
				typeof t == "string" && (e[r][t] = a);
			}), e[r][i] = a;
		}), e;
	}
}, yo = [], bo = {}, xo = {}, So = Object.keys(xo);
function Co(e, t) {
	let { mixoutsTo: n } = t;
	return yo = e, bo = {}, Object.keys(xo).forEach((e) => {
		So.indexOf(e) === -1 && delete xo[e];
	}), yo.forEach((e) => {
		let t = e.mixout ? e.mixout() : {};
		if (Object.keys(t).forEach((e) => {
			typeof t[e] == "function" && (n[e] = t[e]), typeof t[e] == "object" && Object.keys(t[e]).forEach((r) => {
				n[e] || (n[e] = {}), n[e][r] = t[e][r];
			});
		}), e.hooks) {
			let t = e.hooks();
			Object.keys(t).forEach((e) => {
				bo[e] || (bo[e] = []), bo[e].push(t[e]);
			});
		}
		e.provides && e.provides(xo);
	}), n;
}
function wo(e, t) {
	var n = [...arguments].slice(2);
	return (bo[e] || []).forEach((e) => {
		t = e.apply(null, [t, ...n]);
	}), t;
}
function To(e) {
	var t = [...arguments].slice(1);
	(bo[e] || []).forEach((e) => {
		e.apply(null, t);
	});
}
function Eo() {
	let e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
	return xo[e] ? xo[e].apply(null, t) : void 0;
}
function Do(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	let { iconName: t } = e, n = e.prefix || oo();
	if (t) return t = ro(n, t) || t, Pa(Oo.definitions, n, t) || Pa(ka.styles, n, t);
}
var Oo = new vo(), ko = {
	noAuto: () => {
		U.autoReplaceSvg = !1, U.observeMutations = !1, To("noAuto");
	},
	config: U,
	dom: {
		i2svg: function() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return Yr ? (To("beforeI2svg", e), Eo("pseudoElements2svg", e), Eo("i2svg", e)) : Promise.reject(/* @__PURE__ */ Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { autoReplaceSvgRoot: t } = e;
			U.autoReplaceSvg === !1 && (U.autoReplaceSvg = !0), U.observeMutations = !0, Ma(() => {
				Ao({ autoReplaceSvgRoot: t }), To("watch", e);
			});
		}
	},
	parse: { icon: (e) => {
		if (e === null) return null;
		if (typeof e == "object" && e.prefix && e.iconName) return {
			prefix: e.prefix,
			iconName: ro(e.prefix, e.iconName) || e.iconName
		};
		if (Array.isArray(e) && e.length === 2) {
			let t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = lo(e[0]);
			return {
				prefix: n,
				iconName: ro(n, t) || t
			};
		}
		if (typeof e == "string" && (e.indexOf(`${U.cssPrefix}-`) > -1 || e.match(Zi))) {
			let t = po(e.split(" "), { skipLookups: !0 });
			return {
				prefix: t.prefix || oo(),
				iconName: ro(t.prefix, t.iconName) || t.iconName
			};
		}
		if (typeof e == "string") {
			let t = oo();
			return {
				prefix: t,
				iconName: ro(t, e) || e
			};
		}
	} },
	library: Oo,
	findIconDefinition: Do,
	toHtml: Na
}, Ao = function() {
	let { autoReplaceSvgRoot: e = Kr } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	(Object.keys(ka.styles).length > 0 || U.autoFetchSvg) && Yr && U.autoReplaceSvg && ko.dom.i2svg({ node: e });
};
function jo(e, t) {
	return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function() {
		return e.abstract.map((e) => Na(e));
	} }), Object.defineProperty(e, "node", { get: function() {
		if (!Yr) return;
		let t = Kr.createElement("div");
		return t.innerHTML = e.html, t.children;
	} }), e;
}
function Mo(e) {
	let { children: t, main: n, mask: r, attributes: i, styles: a, transform: o } = e;
	if (ba(o) && n.found && !r.found) {
		let { width: e, height: t } = n, r = {
			x: e / t / 2,
			y: .5
		};
		i.style = ya(V(V({}, a), {}, { "transform-origin": `${r.x + o.x / 16}em ${r.y + o.y / 16}em` }));
	}
	return [{
		tag: "svg",
		attributes: i,
		children: t
	}];
}
function No(e) {
	let { prefix: t, iconName: n, children: r, attributes: i, symbol: a } = e, o = a === !0 ? `${t}-${U.cssPrefix}-${n}` : a;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: V(V({}, i), {}, { id: o }),
			children: r
		}]
	}];
}
function Po(e) {
	let { icons: { main: t, mask: n }, prefix: r, iconName: i, transform: a, symbol: o, title: s, maskId: c, titleId: l, extra: u, watchable: d = !1 } = e, { width: f, height: p } = n.found ? n : t, m = pi.includes(r), h = [U.replacementClass, i ? `${U.cssPrefix}-${i}` : ""].filter((e) => u.classes.indexOf(e) === -1).filter((e) => e !== "" || !!e).concat(u.classes).join(" "), g = {
		children: [],
		attributes: V(V({}, u.attributes), {}, {
			"data-prefix": r,
			"data-icon": i,
			class: h,
			role: u.attributes.role || "img",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${f} ${p}`
		})
	}, _ = m && !~u.classes.indexOf("fa-fw") ? { width: `${f / p * 16 * .0625}em` } : {};
	d && (g.attributes[Pi] = ""), s && (g.children.push({
		tag: "title",
		attributes: { id: g.attributes["aria-labelledby"] || `title-${l || ma()}` },
		children: [s]
	}), delete g.attributes.title);
	let v = V(V({}, g), {}, {
		prefix: r,
		iconName: i,
		main: t,
		mask: n,
		maskId: c,
		transform: a,
		symbol: o,
		styles: V(V({}, _), u.styles)
	}), { children: y, attributes: b } = n.found && t.found ? Eo("generateAbstractMask", v) || {
		children: [],
		attributes: {}
	} : Eo("generateAbstractIcon", v) || {
		children: [],
		attributes: {}
	};
	return v.children = y, v.attributes = b, o ? No(v) : Mo(v);
}
function Fo(e) {
	let { content: t, width: n, height: r, transform: i, title: a, extra: o, watchable: s = !1 } = e, c = V(V(V({}, o.attributes), a ? { title: a } : {}), {}, { class: o.classes.join(" ") });
	s && (c[Pi] = "");
	let l = V({}, o.styles);
	ba(i) && (l.transform = Sa({
		transform: i,
		startCentered: !0,
		width: n,
		height: r
	}), l["-webkit-transform"] = l.transform);
	let u = ya(l);
	u.length > 0 && (c.style = u);
	let d = [];
	return d.push({
		tag: "span",
		attributes: c,
		children: [t]
	}), a && d.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [a]
	}), d;
}
function Io(e) {
	let { content: t, title: n, extra: r } = e, i = V(V(V({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(" ") }), a = ya(r.styles);
	a.length > 0 && (i.style = a);
	let o = [];
	return o.push({
		tag: "span",
		attributes: i,
		children: [t]
	}), n && o.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [n]
	}), o;
}
var { styles: Lo } = ka;
function Ro(e) {
	let t = e[0], n = e[1], [r] = e.slice(4), i = null;
	return i = Array.isArray(r) ? {
		tag: "g",
		attributes: { class: `${U.cssPrefix}-${ta.GROUP}` },
		children: [{
			tag: "path",
			attributes: {
				class: `${U.cssPrefix}-${ta.SECONDARY}`,
				fill: "currentColor",
				d: r[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: `${U.cssPrefix}-${ta.PRIMARY}`,
				fill: "currentColor",
				d: r[1]
			}
		}]
	} : {
		tag: "path",
		attributes: {
			fill: "currentColor",
			d: r
		}
	}, {
		found: !0,
		width: t,
		height: n,
		icon: i
	};
}
var zo = {
	found: !1,
	width: 512,
	height: 512
};
function Bo(e, t) {
	!Hi && !U.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`);
}
function Vo(e, t) {
	let n = t;
	return t === "fa" && U.styleDefault !== null && (t = oo()), new Promise((r, i) => {
		if (n === "fa") {
			let n = io(e) || {};
			e = n.iconName || e, t = n.prefix || t;
		}
		if (e && t && Lo[t] && Lo[t][e]) {
			let n = Lo[t][e];
			return r(Ro(n));
		}
		Bo(e, t), r(V(V({}, zo), {}, { icon: U.showMissingIcons && e && Eo("missingIconAbstract") || {} }));
	});
}
var Ho = () => {}, Uo = U.measurePerformance && Jr && Jr.mark && Jr.measure ? Jr : {
	mark: Ho,
	measure: Ho
}, Wo = "FA \"6.7.2\"", Go = (e) => (Uo.mark(`${Wo} ${e} begins`), () => Ko(e)), Ko = (e) => {
	Uo.mark(`${Wo} ${e} ends`), Uo.measure(`${Wo} ${e}`, `${Wo} ${e} begins`, `${Wo} ${e} ends`);
}, qo = {
	begin: Go,
	end: Ko
}, Jo = () => {};
function Yo(e) {
	return typeof (e.getAttribute ? e.getAttribute(Pi) : null) == "string";
}
function Xo(e) {
	let t = e.getAttribute ? e.getAttribute(Li) : null, n = e.getAttribute ? e.getAttribute(Ri) : null;
	return t && n;
}
function Zo(e) {
	return e && e.classList && e.classList.contains && e.classList.contains(U.replacementClass);
}
function Qo() {
	return U.autoReplaceSvg === !0 ? ns.replace : ns[U.autoReplaceSvg] || ns.replace;
}
function $o(e) {
	return Kr.createElementNS("http://www.w3.org/2000/svg", e);
}
function G(e) {
	return Kr.createElement(e);
}
function es(e) {
	let { ceFn: t = e.tag === "svg" ? $o : G } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (typeof e == "string") return Kr.createTextNode(e);
	let n = t(e.tag);
	return Object.keys(e.attributes || []).forEach(function(t) {
		n.setAttribute(t, e.attributes[t]);
	}), (e.children || []).forEach(function(e) {
		n.appendChild(es(e, { ceFn: t }));
	}), n;
}
function ts(e) {
	let t = ` ${e.outerHTML} `;
	return t = `${t}Font Awesome fontawesome.com `, t;
}
var ns = {
	replace: function(e) {
		let t = e[0];
		if (t.parentNode) if (e[1].forEach((e) => {
			t.parentNode.insertBefore(es(e), t);
		}), t.getAttribute(Pi) === null && U.keepOriginalSource) {
			let e = Kr.createComment(ts(t));
			t.parentNode.replaceChild(e, t);
		} else t.remove();
	},
	nest: function(e) {
		let t = e[0], n = e[1];
		if (~ga(t).indexOf(U.replacementClass)) return ns.replace(e);
		let r = RegExp(`${U.cssPrefix}-.*`);
		if (delete n[0].attributes.id, n[0].attributes.class) {
			let e = n[0].attributes.class.split(" ").reduce((e, t) => (t === U.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e), {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = e.toSvg.join(" "), e.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", e.toNode.join(" "));
		}
		let i = n.map((e) => Na(e)).join("\n");
		t.setAttribute(Pi, ""), t.innerHTML = i;
	}
};
function rs(e) {
	e();
}
function is(e, t) {
	let n = typeof t == "function" ? t : Jo;
	if (e.length === 0) n();
	else {
		let t = rs;
		U.mutateApproach === Bi && (t = Gr.requestAnimationFrame || rs), t(() => {
			let t = Qo(), r = qo.begin("mutate");
			e.map(t), r(), n();
		});
	}
}
var as = !1;
function os() {
	as = !0;
}
function ss() {
	as = !1;
}
var cs = null;
function ls(e) {
	if (!qr || !U.observeMutations) return;
	let { treeCallback: t = Jo, nodeCallback: n = Jo, pseudoElementsCallback: r = Jo, observeMutationsRoot: i = Kr } = e;
	cs = new qr((e) => {
		if (as) return;
		let i = oo();
		ha(e).forEach((e) => {
			if (e.type === "childList" && e.addedNodes.length > 0 && !Yo(e.addedNodes[0]) && (U.searchPseudoElements && r(e.target), t(e.target)), e.type === "attributes" && e.target.parentNode && U.searchPseudoElements && r(e.target.parentNode), e.type === "attributes" && Yo(e.target) && ~ea.indexOf(e.attributeName)) if (e.attributeName === "class" && Xo(e.target)) {
				let { prefix: t, iconName: n } = po(ga(e.target));
				e.target.setAttribute(Li, t || i), n && e.target.setAttribute(Ri, n);
			} else Zo(e.target) && n(e.target);
		});
	}), Yr && cs.observe(i, {
		childList: !0,
		attributes: !0,
		characterData: !0,
		subtree: !0
	});
}
function us() {
	cs && cs.disconnect();
}
function ds(e) {
	let t = e.getAttribute("style"), n = [];
	return t && (n = t.split(";").reduce((e, t) => {
		let n = t.split(":"), r = n[0], i = n.slice(1);
		return r && i.length > 0 && (e[r] = i.join(":").trim()), e;
	}, {})), n;
}
function fs(e) {
	let t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText === void 0 ? "" : e.innerText.trim(), i = po(ga(e));
	return i.prefix ||= oo(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix ? i : (i.prefix && r.length > 0 && (i.iconName = no(i.prefix, e.innerText) || to(i.prefix, Ra(e.innerText))), !i.iconName && U.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data), i);
}
function ps(e) {
	let t = ha(e.attributes).reduce((e, t) => (e.name !== "class" && e.name !== "style" && (e[t.name] = t.value), e), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
	return U.autoA11y && (n ? t["aria-labelledby"] = `${U.replacementClass}-title-${r || ma()}` : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ms() {
	return {
		iconName: null,
		title: null,
		titleId: null,
		prefix: null,
		transform: da,
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
function hs(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, { iconName: n, prefix: r, rest: i } = fs(e), a = ps(e), o = wo("parseNodeAttributes", {}, e), s = t.styleParser ? ds(e) : [];
	return V({
		iconName: n,
		title: e.getAttribute("title"),
		titleId: e.getAttribute("data-fa-title-id"),
		prefix: r,
		transform: da,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: !1,
		extra: {
			classes: i,
			styles: s,
			attributes: a
		}
	}, o);
}
var { styles: gs } = ka;
function _s(e) {
	let t = U.autoReplaceSvg === "nest" ? hs(e, { styleParser: !1 }) : hs(e);
	return ~t.extra.classes.indexOf(Qi) ? Eo("generateLayersText", e, t) : Eo("generateSvgReplacementMutation", e, t);
}
function vs() {
	return [...li, ...wi];
}
function ys(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!Yr) return Promise.resolve();
	let n = Kr.documentElement.classList, r = (e) => n.add(`${zi}-${e}`), i = (e) => n.remove(`${zi}-${e}`), a = U.autoFetchSvg ? vs() : ti.concat(Object.keys(gs));
	a.includes("fa") || a.push("fa");
	let o = [`.${Qi}:not([${Pi}])`].concat(a.map((e) => `.${e}:not([${Pi}])`)).join(", ");
	if (o.length === 0) return Promise.resolve();
	let s = [];
	try {
		s = ha(e.querySelectorAll(o));
	} catch {}
	if (s.length > 0) r("pending"), i("complete");
	else return Promise.resolve();
	let c = qo.begin("onTree"), l = s.reduce((e, t) => {
		try {
			let n = _s(t);
			n && e.push(n);
		} catch (e) {
			Hi || e.name === "MissingIcon" && console.error(e);
		}
		return e;
	}, []);
	return new Promise((e, n) => {
		Promise.all(l).then((n) => {
			is(n, () => {
				r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), e();
			});
		}).catch((e) => {
			c(), n(e);
		});
	});
}
function bs(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	_s(e).then((e) => {
		e && is([e], t);
	});
}
function xs(e) {
	return function(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Do(t || {}), { mask: i } = n;
		return i &&= (i || {}).icon ? i : Do(i || {}), e(r, V(V({}, n), {}, { mask: i }));
	};
}
var Ss = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n = da, symbol: r = !1, mask: i = null, maskId: a = null, title: o = null, titleId: s = null, classes: c = [], attributes: l = {}, styles: u = {} } = t;
	if (!e) return;
	let { prefix: d, iconName: f, icon: p } = e;
	return jo(V({ type: "icon" }, e), () => (To("beforeDOMElementCreation", {
		iconDefinition: e,
		params: t
	}), U.autoA11y && (o ? l["aria-labelledby"] = `${U.replacementClass}-title-${s || ma()}` : (l["aria-hidden"] = "true", l.focusable = "false")), Po({
		icons: {
			main: Ro(p),
			mask: i ? Ro(i.icon) : {
				found: !1,
				width: null,
				height: null,
				icon: {}
			}
		},
		prefix: d,
		iconName: f,
		transform: V(V({}, da), n),
		symbol: r,
		title: o,
		maskId: a,
		titleId: s,
		extra: {
			attributes: l,
			styles: u,
			classes: c
		}
	})));
}, Cs = {
	mixout() {
		return { icon: xs(Ss) };
	},
	hooks() {
		return { mutationObserverCallbacks(e) {
			return e.treeCallback = ys, e.nodeCallback = bs, e;
		} };
	},
	provides(e) {
		e.i2svg = function(e) {
			let { node: t = Kr, callback: n = () => {} } = e;
			return ys(t, n);
		}, e.generateSvgReplacementMutation = function(e, t) {
			let { iconName: n, title: r, titleId: i, prefix: a, transform: o, symbol: s, mask: c, maskId: l, extra: u } = t;
			return new Promise((t, d) => {
				Promise.all([Vo(n, a), c.iconName ? Vo(c.iconName, c.prefix) : Promise.resolve({
					found: !1,
					width: 512,
					height: 512,
					icon: {}
				})]).then((c) => {
					let [d, f] = c;
					t([e, Po({
						icons: {
							main: d,
							mask: f
						},
						prefix: a,
						iconName: n,
						transform: o,
						symbol: s,
						maskId: l,
						title: r,
						titleId: i,
						extra: u,
						watchable: !0
					})]);
				}).catch(d);
			});
		}, e.generateAbstractIcon = function(e) {
			let { children: t, attributes: n, main: r, transform: i, styles: a } = e, o = ya(a);
			o.length > 0 && (n.style = o);
			let s;
			return ba(i) && (s = Eo("generateAbstractTransformGrouping", {
				main: r,
				transform: i,
				containerWidth: r.width,
				iconWidth: r.width
			})), t.push(s || r.icon), {
				children: t,
				attributes: n
			};
		};
	}
}, ws = { mixout() {
	return { layer(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { classes: n = [] } = t;
		return jo({ type: "layer" }, () => {
			To("beforeDOMElementCreation", {
				assembler: e,
				params: t
			});
			let r = [];
			return e((e) => {
				Array.isArray(e) ? e.map((e) => {
					r = r.concat(e.abstract);
				}) : r = r.concat(e.abstract);
			}), [{
				tag: "span",
				attributes: { class: [`${U.cssPrefix}-layers`, ...n].join(" ") },
				children: r
			}];
		});
	} };
} }, Ts = { mixout() {
	return { counter(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { title: n = null, classes: r = [], attributes: i = {}, styles: a = {} } = t;
		return jo({
			type: "counter",
			content: e
		}, () => (To("beforeDOMElementCreation", {
			content: e,
			params: t
		}), Io({
			content: e.toString(),
			title: n,
			extra: {
				attributes: i,
				styles: a,
				classes: [`${U.cssPrefix}-layers-counter`, ...r]
			}
		})));
	} };
} }, Es = {
	mixout() {
		return { text(e) {
			let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n = da, title: r = null, classes: i = [], attributes: a = {}, styles: o = {} } = t;
			return jo({
				type: "text",
				content: e
			}, () => (To("beforeDOMElementCreation", {
				content: e,
				params: t
			}), Fo({
				content: e,
				transform: V(V({}, da), n),
				title: r,
				extra: {
					attributes: a,
					styles: o,
					classes: [`${U.cssPrefix}-layers-text`, ...i]
				}
			})));
		} };
	},
	provides(e) {
		e.generateLayersText = function(e, t) {
			let { title: n, transform: r, extra: i } = t, a = null, o = null;
			if (Xr) {
				let t = parseInt(getComputedStyle(e).fontSize, 10), n = e.getBoundingClientRect();
				a = n.width / t, o = n.height / t;
			}
			return U.autoA11y && !n && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, Fo({
				content: e.innerHTML,
				width: a,
				height: o,
				transform: r,
				title: n,
				extra: i,
				watchable: !0
			})]);
		};
	}
}, Ds = /* @__PURE__ */ RegExp("\"", "ug"), Os = [1105920, 1112319], ks = V(V(V(V({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), oi), ki), yi), As = Object.keys(ks).reduce((e, t) => (e[t.toLowerCase()] = ks[t], e), {}), js = Object.keys(As).reduce((e, t) => {
	let n = As[t];
	return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Ms(e) {
	let t = e.replace(Ds, ""), n = za(t, 0), r = n >= Os[0] && n <= Os[1], i = t.length === 2 ? t[0] === t[1] : !1;
	return {
		value: Ra(i ? t[0] : t),
		isSecondary: r || i
	};
}
function Ns(e, t) {
	let n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
	return (As[n] || {})[i] || js[n];
}
function Ps(e, t) {
	let n = `${Ii}${t.replace(":", "-")}`;
	return new Promise((r, i) => {
		if (e.getAttribute(n) !== null) return r();
		let a = ha(e.children).filter((e) => e.getAttribute(Fi) === t)[0], o = Gr.getComputedStyle(e, t), s = o.getPropertyValue("font-family"), c = s.match($i), l = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
		if (a && !c) return e.removeChild(a), r();
		if (c && u !== "none" && u !== "") {
			let u = o.getPropertyValue("content"), d = Ns(s, l), { value: f, isSecondary: p } = Ms(u), m = c[0].startsWith("FontAwesome"), h = to(d, f), g = h;
			if (m) {
				let e = ao(f);
				e.iconName && e.prefix && (h = e.iconName, d = e.prefix);
			}
			if (h && !p && (!a || a.getAttribute(Li) !== d || a.getAttribute(Ri) !== g)) {
				e.setAttribute(n, g), a && e.removeChild(a);
				let o = ms(), { extra: s } = o;
				s.attributes[Fi] = t, Vo(h, d).then((i) => {
					let a = Po(V(V({}, o), {}, {
						icons: {
							main: i,
							mask: so()
						},
						prefix: d,
						iconName: g,
						extra: s,
						watchable: !0
					})), c = Kr.createElementNS("http://www.w3.org/2000/svg", "svg");
					t === "::before" ? e.insertBefore(c, e.firstChild) : e.appendChild(c), c.outerHTML = a.map((e) => Na(e)).join("\n"), e.removeAttribute(n), r();
				}).catch(i);
			} else r();
		} else r();
	});
}
function Fs(e) {
	return Promise.all([Ps(e, "::before"), Ps(e, "::after")]);
}
function Is(e) {
	return e.parentNode !== document.head && !~Vi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Fi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ls(e) {
	if (Yr) return new Promise((t, n) => {
		let r = ha(e.querySelectorAll("*")).filter(Is).map(Fs), i = qo.begin("searchPseudoElements");
		os(), Promise.all(r).then(() => {
			i(), ss(), t();
		}).catch(() => {
			i(), ss(), n();
		});
	});
}
var Rs = {
	hooks() {
		return { mutationObserverCallbacks(e) {
			return e.pseudoElementsCallback = Ls, e;
		} };
	},
	provides(e) {
		e.pseudoElements2svg = function(e) {
			let { node: t = Kr } = e;
			U.searchPseudoElements && Ls(t);
		};
	}
}, zs = !1, Bs = {
	mixout() {
		return { dom: { unwatch() {
			os(), zs = !0;
		} } };
	},
	hooks() {
		return {
			bootstrap() {
				ls(wo("mutationObserverCallbacks", {}));
			},
			noAuto() {
				us();
			},
			watch(e) {
				let { observeMutationsRoot: t } = e;
				zs ? ss() : ls(wo("mutationObserverCallbacks", { observeMutationsRoot: t }));
			}
		};
	}
}, Vs = (e) => e.toLowerCase().split(" ").reduce((e, t) => {
	let n = t.toLowerCase().split("-"), r = n[0], i = n.slice(1).join("-");
	if (r && i === "h") return e.flipX = !0, e;
	if (r && i === "v") return e.flipY = !0, e;
	if (i = parseFloat(i), isNaN(i)) return e;
	switch (r) {
		case "grow":
			e.size += i;
			break;
		case "shrink":
			e.size -= i;
			break;
		case "left":
			e.x -= i;
			break;
		case "right":
			e.x += i;
			break;
		case "up":
			e.y -= i;
			break;
		case "down":
			e.y += i;
			break;
		case "rotate":
			e.rotate += i;
			break;
	}
	return e;
}, {
	size: 16,
	x: 0,
	y: 0,
	flipX: !1,
	flipY: !1,
	rotate: 0
}), Hs = {
	mixout() {
		return { parse: { transform: (e) => Vs(e) } };
	},
	hooks() {
		return { parseNodeAttributes(e, t) {
			let n = t.getAttribute("data-fa-transform");
			return n && (e.transform = Vs(n)), e;
		} };
	},
	provides(e) {
		e.generateAbstractTransformGrouping = function(e) {
			let { main: t, transform: n, containerWidth: r, iconWidth: i } = e, a = {
				outer: { transform: `translate(${r / 2} 256)` },
				inner: { transform: `${`translate(${n.x * 32}, ${n.y * 32}) `} ${`scale(${n.size / 16 * (n.flipX ? -1 : 1)}, ${n.size / 16 * (n.flipY ? -1 : 1)}) `} ${`rotate(${n.rotate} 0 0)`}` },
				path: { transform: `translate(${i / 2 * -1} -256)` }
			};
			return {
				tag: "g",
				attributes: V({}, a.outer),
				children: [{
					tag: "g",
					attributes: V({}, a.inner),
					children: [{
						tag: t.icon.tag,
						children: t.icon.children,
						attributes: V(V({}, t.icon.attributes), a.path)
					}]
				}]
			};
		};
	}
}, Us = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function Ws(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Gs(e) {
	return e.tag === "g" ? e.children : [e];
}
Co([
	Da,
	Cs,
	ws,
	Ts,
	Es,
	Rs,
	Bs,
	Hs,
	{
		hooks() {
			return { parseNodeAttributes(e, t) {
				let n = t.getAttribute("data-fa-mask"), r = n ? po(n.split(" ").map((e) => e.trim())) : so();
				return r.prefix ||= oo(), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
			} };
		},
		provides(e) {
			e.generateAbstractMask = function(e) {
				let { children: t, attributes: n, main: r, mask: i, maskId: a, transform: o } = e, { width: s, icon: c } = r, { width: l, icon: u } = i, d = xa({
					transform: o,
					containerWidth: l,
					iconWidth: s
				}), f = {
					tag: "rect",
					attributes: V(V({}, Us), {}, { fill: "white" })
				}, p = c.children ? { children: c.children.map(Ws) } : {}, m = {
					tag: "g",
					attributes: V({}, d.inner),
					children: [Ws(V({
						tag: c.tag,
						attributes: V(V({}, c.attributes), d.path)
					}, p))]
				}, h = {
					tag: "g",
					attributes: V({}, d.outer),
					children: [m]
				}, g = `mask-${a || ma()}`, _ = `clip-${a || ma()}`, v = {
					tag: "mask",
					attributes: V(V({}, Us), {}, {
						id: g,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse"
					}),
					children: [f, h]
				}, y = {
					tag: "defs",
					children: [{
						tag: "clipPath",
						attributes: { id: _ },
						children: Gs(u)
					}, v]
				};
				return t.push(y, {
					tag: "rect",
					attributes: V({
						fill: "currentColor",
						"clip-path": `url(#${_})`,
						mask: `url(#${g})`
					}, Us)
				}), {
					children: t,
					attributes: n
				};
			};
		}
	},
	{ provides(e) {
		let t = !1;
		Gr.matchMedia && (t = Gr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
			let e = [], n = { fill: "currentColor" }, r = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			e.push({
				tag: "path",
				attributes: V(V({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			let i = V(V({}, r), {}, { attributeName: "opacity" }), a = {
				tag: "circle",
				attributes: V(V({}, n), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			return t || a.children.push({
				tag: "animate",
				attributes: V(V({}, r), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: V(V({}, i), {}, { values: "1;0;1;1;0;1;" })
			}), e.push(a), e.push({
				tag: "path",
				attributes: V(V({}, n), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: t ? [] : [{
					tag: "animate",
					attributes: V(V({}, i), {}, { values: "1;0;0;0;0;1;" })
				}]
			}), t || e.push({
				tag: "path",
				attributes: V(V({}, n), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: V(V({}, i), {}, { values: "0;0;1;1;0;0;" })
				}]
			}), {
				tag: "g",
				attributes: { class: "missing" },
				children: e
			};
		};
	} },
	{ hooks() {
		return { parseNodeAttributes(e, t) {
			let n = t.getAttribute("data-fa-symbol");
			return e.symbol = n === null ? !1 : n === "" ? !0 : n, e;
		} };
	} }
], { mixoutsTo: ko }), ko.noAuto;
var Ks = ko.config;
ko.library, ko.dom;
var qs = ko.parse;
ko.findIconDefinition, ko.toHtml;
var Js = ko.icon;
ko.layer;
var Ys = ko.text;
ko.counter;
//#endregion
//#region node_modules/@fortawesome/vue-fontawesome/index.es.js
function Xs(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Zs(e) {
	if (Array.isArray(e)) return Xs(e);
}
function Qs(e, t, n) {
	return (t = sc(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function $s(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ec() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function tc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function nc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? tc(Object(n), !0).forEach(function(t) {
			Qs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function rc(e, t) {
	if (e == null) return {};
	var n, r, i = ic(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ic(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function ac(e) {
	return Zs(e) || $s(e) || lc(e) || ec();
}
function oc(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function sc(e) {
	var t = oc(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function cc(e) {
	"@babel/helpers - typeof";
	return cc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, cc(e);
}
function lc(e, t) {
	if (e) {
		if (typeof e == "string") return Xs(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xs(e, t) : void 0;
	}
}
function uc(e, t) {
	return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Qs({}, e, t) : {};
}
function dc(e) {
	var t, n = (t = {
		"fa-spin": e.spin,
		"fa-pulse": e.pulse,
		"fa-fw": e.fixedWidth,
		"fa-border": e.border,
		"fa-li": e.listItem,
		"fa-inverse": e.inverse,
		"fa-flip": e.flip === !0,
		"fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
		"fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
	}, Qs(Qs(Qs(Qs(Qs(Qs(Qs(Qs(Qs(Qs(t, `fa-${e.size}`, e.size !== null), `fa-rotate-${e.rotation}`, e.rotation !== null), "fa-rotate-by", e.rotateBy), `fa-pull-${e.pull}`, e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), Qs(Qs(Qs(Qs(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
	return Object.keys(n).map(function(e) {
		return n[e] ? e : null;
	}).filter(function(e) {
		return e;
	});
}
var fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pc = { exports: {} };
(function(e) {
	(function(t) {
		var n = function(e, t, r) {
			if (!l(t) || d(t) || f(t) || p(t) || c(t)) return t;
			var i, a = 0, o = 0;
			if (u(t)) for (i = [], o = t.length; a < o; a++) i.push(n(e, t[a], r));
			else for (var s in i = {}, t) Object.prototype.hasOwnProperty.call(t, s) && (i[e(s, r)] = n(e, t[s], r));
			return i;
		}, r = function(e, t) {
			t ||= {};
			var n = t.separator || "_", r = t.split || /(?=[A-Z])/;
			return e.split(r).join(n);
		}, i = function(e) {
			return m(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
				return t ? t.toUpperCase() : "";
			}), e.substr(0, 1).toLowerCase() + e.substr(1));
		}, a = function(e) {
			var t = i(e);
			return t.substr(0, 1).toUpperCase() + t.substr(1);
		}, o = function(e, t) {
			return r(e, t).toLowerCase();
		}, s = Object.prototype.toString, c = function(e) {
			return typeof e == "function";
		}, l = function(e) {
			return e === Object(e);
		}, u = function(e) {
			return s.call(e) == "[object Array]";
		}, d = function(e) {
			return s.call(e) == "[object Date]";
		}, f = function(e) {
			return s.call(e) == "[object RegExp]";
		}, p = function(e) {
			return s.call(e) == "[object Boolean]";
		}, m = function(e) {
			return e -= 0, e === e;
		}, h = function(e, t) {
			var n = t && "process" in t ? t.process : t;
			return typeof n == "function" ? function(t, r) {
				return n(t, e, r);
			} : e;
		}, g = {
			camelize: i,
			decamelize: o,
			pascalize: a,
			depascalize: o,
			camelizeKeys: function(e, t) {
				return n(h(i, t), e);
			},
			decamelizeKeys: function(e, t) {
				return n(h(o, t), e, t);
			},
			pascalizeKeys: function(e, t) {
				return n(h(a, t), e);
			},
			depascalizeKeys: function() {
				return this.decamelizeKeys.apply(this, arguments);
			}
		};
		e.exports ? e.exports = g : t.humps = g;
	})(fc);
})(pc);
var mc = pc.exports, hc = ["class", "style"];
function gc(e) {
	return e.split(";").map(function(e) {
		return e.trim();
	}).filter(function(e) {
		return e;
	}).reduce(function(e, t) {
		var n = t.indexOf(":"), r = mc.camelize(t.slice(0, n));
		return e[r] = t.slice(n + 1).trim(), e;
	}, {});
}
function _c(e) {
	return e.split(/\s+/).reduce(function(e, t) {
		return e[t] = !0, e;
	}, {});
}
function vc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	if (typeof e == "string") return e;
	var r = (e.children || []).map(function(e) {
		return vc(e);
	}), i = Object.keys(e.attributes || {}).reduce(function(t, n) {
		var r = e.attributes[n];
		switch (n) {
			case "class":
				t.class = _c(r);
				break;
			case "style":
				t.style = gc(r);
				break;
			default: t.attrs[n] = r;
		}
		return t;
	}, {
		attrs: {},
		class: {},
		style: {}
	});
	n.class;
	var a = n.style, o = a === void 0 ? {} : a, s = rc(n, hc);
	return d(e.tag, nc(nc(nc({}, t), {}, {
		class: i.class,
		style: nc(nc({}, i.style), o)
	}, i.attrs), s), r);
}
var yc = !1;
try {
	yc = !0;
} catch {}
function bc() {
	if (!yc && console && typeof console.error == "function") {
		var e;
		(e = console).error.apply(e, arguments);
	}
}
function xc(e) {
	if (e && cc(e) === "object" && e.prefix && e.iconName && e.icon) return e;
	if (qs.icon) return qs.icon(e);
	if (e === null) return null;
	if (cc(e) === "object" && e.prefix && e.iconName) return e;
	if (Array.isArray(e) && e.length === 2) return {
		prefix: e[0],
		iconName: e[1]
	};
	if (typeof e == "string") return {
		prefix: "fas",
		iconName: e
	};
}
var K = l({
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
				return [
					!0,
					!1,
					"horizontal",
					"vertical",
					"both"
				].indexOf(e) > -1;
			}
		},
		icon: {
			type: [
				Object,
				Array,
				String
			],
			required: !0
		},
		mask: {
			type: [
				Object,
				Array,
				String
			],
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
				return [
					90,
					180,
					270
				].indexOf(Number.parseInt(e, 10)) > -1;
			}
		},
		rotateBy: {
			type: Boolean,
			default: !1
		},
		swapOpacity: {
			type: Boolean,
			default: !1
		},
		size: {
			type: String,
			default: null,
			validator: function(e) {
				return [
					"2xs",
					"xs",
					"sm",
					"lg",
					"xl",
					"2xl",
					"1x",
					"2x",
					"3x",
					"4x",
					"5x",
					"6x",
					"7x",
					"8x",
					"9x",
					"10x"
				].indexOf(e) > -1;
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
		},
		widthAuto: {
			type: Boolean,
			default: !1
		}
	},
	setup: function(e, n) {
		var r = n.attrs, i = t(function() {
			return xc(e.icon);
		}), a = t(function() {
			return uc("classes", dc(e));
		}), o = t(function() {
			return uc("transform", typeof e.transform == "string" ? qs.transform(e.transform) : e.transform);
		}), s = t(function() {
			return uc("mask", xc(e.mask));
		}), c = t(function() {
			var t = nc(nc(nc(nc({}, a.value), o.value), s.value), {}, {
				symbol: e.symbol,
				maskId: e.maskId
			});
			return t.title = e.title, t.titleId = e.titleId, Js(i.value, t);
		});
		M(c, function(e) {
			if (!e) return bc("Could not find one or more icon(s)", i.value, s.value);
		}, { immediate: !0 });
		var l = t(function() {
			return c.value ? vc(c.value.abstract[0], {}, r) : null;
		});
		return function() {
			return l.value;
		};
	}
});
l({
	name: "FontAwesomeLayers",
	props: { fixedWidth: {
		type: Boolean,
		default: !1
	} },
	setup: function(e, n) {
		var r = n.slots, i = Ks.familyPrefix, a = t(function() {
			return [`${i}-layers`].concat(ac(e.fixedWidth ? [`${i}-fw`] : []));
		});
		return function() {
			return d("div", { class: a.value }, r.default ? r.default() : []);
		};
	}
}), l({
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
				return [
					"bottom-left",
					"bottom-right",
					"top-left",
					"top-right"
				].indexOf(e) > -1;
			}
		}
	},
	setup: function(e, n) {
		var r = n.attrs, i = Ks.familyPrefix, a = t(function() {
			return uc("classes", [].concat(ac(e.counter ? [`${i}-layers-counter`] : []), ac(e.position ? [`${i}-layers-${e.position}`] : [])));
		}), o = t(function() {
			return uc("transform", typeof e.transform == "string" ? qs.transform(e.transform) : e.transform);
		}), s = t(function() {
			var t = Ys(e.value.toString(), nc(nc({}, o.value), a.value)).abstract;
			return e.counter && (t[0].attributes.class = t[0].attributes.class.replace("fa-layers-text", "")), t[0];
		}), c = t(function() {
			return vc(s.value, {}, r);
		});
		return function() {
			return c.value;
		};
	}
});
//#endregion
//#region node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var Sc = {
	prefix: "fas",
	iconName: "hourglass-half",
	icon: [
		384,
		512,
		["hourglass-2"],
		"f252",
		"M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"
	]
}, Cc = {
	prefix: "fas",
	iconName: "chevron-up",
	icon: [
		512,
		512,
		[],
		"f077",
		"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
	]
}, wc = {
	prefix: "fas",
	iconName: "align-justify",
	icon: [
		448,
		512,
		[],
		"f039",
		"M448 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z"
	]
}, Tc = {
	prefix: "fas",
	iconName: "pizza-slice",
	icon: [
		512,
		512,
		[],
		"f818",
		"M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
	]
}, Ec = {
	prefix: "fas",
	iconName: "clipboard",
	icon: [
		384,
		512,
		[128203],
		"f328",
		"M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
	]
}, Dc = {
	prefix: "fas",
	iconName: "arrow-down-wide-short",
	icon: [
		576,
		512,
		["sort-amount-asc", "sort-amount-down"],
		"f160",
		"M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"
	]
}, Oc = {
	prefix: "fas",
	iconName: "filter",
	icon: [
		512,
		512,
		[],
		"f0b0",
		"M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
	]
}, kc = {
	prefix: "fas",
	iconName: "circle-info",
	icon: [
		512,
		512,
		["info-circle"],
		"f05a",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
	]
}, Ac = {
	prefix: "fas",
	iconName: "arrow-rotate-left",
	icon: [
		512,
		512,
		[
			8634,
			"arrow-left-rotate",
			"arrow-rotate-back",
			"arrow-rotate-backward",
			"undo"
		],
		"f0e2",
		"M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
	]
}, jc = {
	prefix: "fas",
	iconName: "clock",
	icon: [
		512,
		512,
		[128339, "clock-four"],
		"f017",
		"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
	]
}, Mc = {
	prefix: "fas",
	iconName: "caret-down",
	icon: [
		320,
		512,
		[],
		"f0d7",
		"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
	]
}, Nc = {
	prefix: "fas",
	iconName: "arrow-down-short-wide",
	icon: [
		576,
		512,
		["sort-amount-desc", "sort-amount-down-alt"],
		"f884",
		"M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
	]
}, Pc = {
	prefix: "fas",
	iconName: "thumbs-down",
	icon: [
		512,
		512,
		[128078, 61576],
		"f165",
		"M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"
	]
}, Fc = {
	prefix: "fas",
	iconName: "arrow-down",
	icon: [
		384,
		512,
		[8595],
		"f063",
		"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
	]
}, Ic = {
	prefix: "fas",
	iconName: "magnifying-glass",
	icon: [
		512,
		512,
		[128269, "search"],
		"f002",
		"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
	]
}, Lc = {
	prefix: "fas",
	iconName: "chevron-down",
	icon: [
		512,
		512,
		[],
		"f078",
		"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
	]
}, Rc = {
	prefix: "fas",
	iconName: "arrow-up",
	icon: [
		384,
		512,
		[8593],
		"f062",
		"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
	]
}, zc = {
	prefix: "fas",
	iconName: "chevron-left",
	icon: [
		320,
		512,
		[9001],
		"f053",
		"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
	]
}, Bc = {
	prefix: "fas",
	iconName: "chevron-right",
	icon: [
		320,
		512,
		[9002],
		"f054",
		"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
	]
}, Vc = {
	prefix: "fas",
	iconName: "check",
	icon: [
		448,
		512,
		[10003, 10004],
		"f00c",
		"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
	]
}, Hc = {
	prefix: "fas",
	iconName: "triangle-exclamation",
	icon: [
		512,
		512,
		[
			9888,
			"exclamation-triangle",
			"warning"
		],
		"f071",
		"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
	]
}, Uc = {
	prefix: "fas",
	iconName: "right-left",
	icon: [
		512,
		512,
		["exchange-alt"],
		"f362",
		"M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"
	]
}, Wc = {
	prefix: "fas",
	iconName: "dollar-sign",
	icon: [
		320,
		512,
		[
			128178,
			61781,
			"dollar",
			"usd"
		],
		"24",
		"M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"
	]
}, Gc = {
	class: "copy position-absolute",
	style: {
		top: "0",
		right: "0"
	}
}, Kc = /* @__PURE__ */ l({
	__name: "Copy",
	props: { content: {} },
	setup(e) {
		let t = e, n = E(!1);
		function r() {
			let { toClipboard: e } = _e();
			e(t.content), n.value = !0, window.setTimeout(() => {
				n.value = !1;
			}, 2e3);
		}
		return (e, t) => (C(), a("div", Gc, [
			o("button", {
				name: "copyRawButton",
				class: _(["btn btn-outline-secondary btn-sm m-2", n.value ? "d-none" : "d-block"]),
				onClick: r
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(Ec)
			}, null, 8, ["icon"])], 2),
			t[0] ||= s(),
			P((C(), a("button", {
				class: _(["btn btn-outline-secondary btn-sm m-2", n.value ? "d-block" : "d-none"]),
				onClick: r
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(Vc)
			}, null, 8, ["icon"])], 2)), [[j(Fr), {
				placement: "left",
				arrow: !0,
				content: "copied"
			}]])
		]));
	}
}), qc = /* @__PURE__ */ function(e) {
	return e[e.time = 0] = "time", e[e.rows = 1] = "rows", e[e.cost = 2] = "cost", e[e.buffers = 3] = "buffers", e[e.estimate_factor = 4] = "estimate_factor", e[e.io = 5] = "io", e;
}({}), q = /* @__PURE__ */ function(e) {
	return e.shared = "Shared", e.temp = "Temp", e.local = "Local", e;
}({}), Jc = /* @__PURE__ */ function(e) {
	return e.NONE = "none", e.DURATION = "duration", e.ROWS = "rows", e.COST = "cost", e;
}({}), Yc = /* @__PURE__ */ function(e) {
	return e.asc = "asc", e.desc = "desc", e;
}({}), Xc = /* @__PURE__ */ function(e) {
	return e[e.over = 1] = "over", e[e.under = 2] = "under", e[e.none = 3] = "none", e;
}({}), Zc = /* @__PURE__ */ function(e) {
	return e.SHARED_HIT_BLOCKS = "Shared Hit Blocks", e.SHARED_READ_BLOCKS = "Shared Read Blocks", e.SHARED_DIRTIED_BLOCKS = "Shared Dirtied Blocks", e.SHARED_WRITTEN_BLOCKS = "Shared Written Blocks", e.TEMP_READ_BLOCKS = "Temp Read Blocks", e.TEMP_WRITTEN_BLOCKS = "Temp Written Blocks", e.LOCAL_HIT_BLOCKS = "Local Hit Blocks", e.LOCAL_READ_BLOCKS = "Local Read Blocks", e.LOCAL_DIRTIED_BLOCKS = "Local Dirtied Blocks", e.LOCAL_WRITTEN_BLOCKS = "Local Written Blocks", e;
}({}), J = {
	.../* @__PURE__ */ function(e) {
		return e.NODE_TYPE = "Node Type", e.ACTUAL_ROWS = "Actual Rows", e.PLAN_ROWS = "Plan Rows", e.PLAN_WIDTH = "Plan Width", e.ROWS_REMOVED_BY_FILTER = "Rows Removed by Filter", e.ROWS_REMOVED_BY_JOIN_FILTER = "Rows Removed by Join Filter", e.ROWS_REMOVED_BY_INDEX_RECHECK = "Rows Removed by Index Recheck", e.ACTUAL_STARTUP_TIME = "Actual Startup Time", e.ACTUAL_TOTAL_TIME = "Actual Total Time", e.ACTUAL_LOOPS = "Actual Loops", e.STARTUP_COST = "Startup Cost", e.TOTAL_COST = "Total Cost", e.DATA_SLICE_COUNT = "Data Slice Count", e.NODE_COUNT = "Node Count", e.SLICE_ID = "Slice Id", e.SEGMENTS_COUNT = "Segments Count", e.DYNAMIC_SCAN_ID = "Dynamic Scan Id", e.PLANS = "Plans", e.RELATION_NAME = "Relation Name", e.SCHEMA = "Schema", e.ALIAS = "Alias", e.GROUP_KEY = "Group Key", e.SORT_KEY = "Sort Key", e.SORT_METHOD = "Sort Method", e.SORT_SPACE_TYPE = "Sort Space Type", e.SORT_SPACE_USED = "Sort Space Used", e.JOIN_TYPE = "Join Type", e.INDEX_NAME = "Index Name", e.HASH_CONDITION = "Hash Cond", e.PARENT_RELATIONSHIP = "Parent Relationship", e.SUBPLAN_NAME = "Subplan Name", e.PARALLEL_AWARE = "Parallel Aware", e.WORKERS = "Workers", e.WORKERS_PLANNED = "Workers Planned", e.WORKERS_LAUNCHED = "Workers Launched", e.READ_BLOCKS = "*Read Blocks", e.WRITTEN_BLOCKS = "*Written Blocks", e.IO_READ_TIME = "I/O Read Time", e.IO_WRITE_TIME = "I/O Write Time", e.SHARED_IO_READ_TIME = "Shared I/O Read Time", e.SHARED_IO_WRITE_TIME = "Shared I/O Write Time", e.LOCAL_IO_READ_TIME = "Local I/O Read Time", e.LOCAL_IO_WRITE_TIME = "Local I/O Write Time", e.TEMP_IO_READ_TIME = "Temp I/O Read Time", e.TEMP_IO_WRITE_TIME = "Temp I/O Write Time", e.OUTPUT = "Output", e.HEAP_FETCHES = "Heap Fetches", e.WAL_RECORDS = "WAL Records", e.WAL_BYTES = "WAL Bytes", e.WAL_FPI = "WAL FPI", e.FULL_SORT_GROUPS = "Full-sort Groups", e.PRE_SORTED_GROUPS = "Pre-sorted Groups", e.PRESORTED_KEY = "Presorted Key", e.FILTER = "Filter", e.STRATEGY = "Strategy", e.PARTIAL_MODE = "Partial Mode", e.OPERATION = "Operation", e.RECHECK_COND = "Recheck Cond", e.SCAN_DIRECTION = "Scan Direction", e.NODE_ID = "nodeId", e.EXCLUSIVE_DURATION = "*Duration (exclusive)", e.EXCLUSIVE_COST = "*Cost (exclusive)", e.ACTUAL_ROWS_REVISED = "*Actual Rows Revised", e.ACTUAL_ROWS_FRACTIONAL = "*Actual Rows Is Fractional", e.PLAN_ROWS_REVISED = "*Plan Rows Revised", e.ROWS_REMOVED_BY_FILTER_REVISED = "*Rows Removed by Filter", e.ROWS_REMOVED_BY_JOIN_FILTER_REVISED = "*Rows Removed by Join Filter", e.ROWS_REMOVED_BY_INDEX_RECHECK_REVISED = "*Rows Removed by Index Recheck", e.PLANNER_ESTIMATE_FACTOR = "*Planner Row Estimate Factor", e.PLANNER_ESTIMATE_DIRECTION = "*Planner Row Estimate Direction", e.EXCLUSIVE_SHARED_HIT_BLOCKS = "*Shared Hit Blocks (exclusive)", e.EXCLUSIVE_SHARED_READ_BLOCKS = "*Shared Read Blocks (exclusive)", e.EXCLUSIVE_SHARED_DIRTIED_BLOCKS = "*Shared Dirtied Blocks (exclusive)", e.EXCLUSIVE_SHARED_WRITTEN_BLOCKS = "*Shared Written Blocks (exclusive)", e.EXCLUSIVE_TEMP_READ_BLOCKS = "*Temp Read Blocks (exclusive)", e.EXCLUSIVE_TEMP_WRITTEN_BLOCKS = "*Temp Written Blocks (exclusive)", e.EXCLUSIVE_LOCAL_HIT_BLOCKS = "*Local Hit Blocks (exclusive)", e.EXCLUSIVE_LOCAL_READ_BLOCKS = "*Local Read Blocks (exclusive)", e.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS = "*Local Dirtied Blocks (exclusive)", e.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS = "*Local Written Blocks (exclusive)", e.EXCLUSIVE_READ_BLOCKS = "*Read Blocks (exclusive)", e.EXCLUSIVE_WRITTEN_BLOCKS = "*Written Blocks (exclusive)", e.AVERAGE_IO_READ_SPEED = "*I/O Read Speed", e.AVERAGE_IO_WRITE_SPEED = "*I/O Write Speed", e.AVERAGE_SHARED_IO_READ_SPEED = "*Shared I/O Read Speed", e.AVERAGE_SHARED_IO_WRITE_SPEED = "*Shared I/O Write Speed", e.AVERAGE_LOCAL_IO_READ_SPEED = "*Local I/O Read Speed", e.AVERAGE_LOCAL_IO_WRITE_SPEED = "*Local I/O Write Speed", e.AVERAGE_TEMP_IO_READ_SPEED = "*Temp I/O Read Speed", e.AVERAGE_TEMP_IO_WRITE_SPEED = "*Temp I/O Write Speed", e.EXCLUSIVE_IO_READ_TIME = "*I/O Read Time (exclusive)", e.EXCLUSIVE_IO_WRITE_TIME = "*I/O Write Time (exclusive)", e.EXCLUSIVE_AVERAGE_IO_READ_SPEED = "*I/O Read Speed (exclusive)", e.EXCLUSIVE_AVERAGE_IO_WRITE_SPEED = "*I/O Write Speed (exclusive)", e.EXCLUSIVE_SHARED_IO_READ_TIME = "*Shared I/O Read Time (exclusive)", e.EXCLUSIVE_SHARED_IO_WRITE_TIME = "*Shared I/O Write Time (exclusive)", e.EXCLUSIVE_AVERAGE_SHARED_IO_READ_SPEED = "*Shared I/O Read Speed (exclusive)", e.EXCLUSIVE_AVERAGE_SHARED_IO_WRITE_SPEED = "*Shared I/O Write Speed (exclusive)", e.EXCLUSIVE_LOCAL_IO_READ_TIME = "*Local I/O Read Time (exclusive)", e.EXCLUSIVE_LOCAL_IO_WRITE_TIME = "*Local I/O Write Time (exclusive)", e.EXCLUSIVE_AVERAGE_LOCAL_IO_READ_SPEED = "*Local I/O Read Speed (exclusive)", e.EXCLUSIVE_AVERAGE_LOCAL_IO_WRITE_SPEED = "*Local I/O Write Speed (exclusive)", e.EXCLUSIVE_TEMP_IO_READ_TIME = "*Temp I/O Read Time (exclusive)", e.EXCLUSIVE_TEMP_IO_WRITE_TIME = "*Temp I/O Write Time (exclusive)", e.EXCLUSIVE_AVERAGE_TEMP_IO_READ_SPEED = "*Temp I/O Read Speed (exclusive)", e.EXCLUSIVE_AVERAGE_TEMP_IO_WRITE_SPEED = "*Temp I/O Write Speed (exclusive)", e.SUM_IO_READ_TIME = "*I/O Read Time (all scopes)", e.SUM_IO_WRITE_TIME = "*I/O Write Time (all scopes)", e.AVERAGE_SUM_IO_READ_SPEED = "*I/O Read Time speed (all scopes)", e.AVERAGE_SUM_IO_WRITE_SPEED = "*I/O Write Time speed (all scopes)", e.EXCLUSIVE_SUM_IO_READ_TIME = "*I/O Read Time (exclusive, all scopes)", e.EXCLUSIVE_SUM_IO_WRITE_TIME = "*I/O Write Time (exclusive, all scopes)", e.EXCLUSIVE_AVERAGE_SUM_IO_READ_SPEED = "*I/O Read Time speed (exclusive, all scopes)", e.EXCLUSIVE_AVERAGE_SUM_IO_WRITE_SPEED = "*I/O Write Time speed (exclusive, all scopes)", e.WORKERS_PLANNED_BY_GATHER = "*Workers Planned By Gather", e.WORKERS_LAUNCHED_BY_GATHER = "*Workers Launched By Gather", e.CTE_SCAN = "CTE Scan", e.CTE_NAME = "CTE Name", e.FUNCTION_NAME = "Function Name", e.ARRAY_INDEX_KEY = "arrayIndex", e.PEV_PLAN_TAG = "plan_", e.JIT = "JIT", e.SERIALIZATION = "Serialization", e;
	}({}),
	...Zc
}, Qc = /* @__PURE__ */ function(e) {
	return e.SLICE_NUM = "Slice Num", e.EXECUTOR_MEMORY = "ExecutorMemory", e.WORK_MEMORY = "WorkMemory", e;
}({}), $c = /* @__PURE__ */ function(e) {
	return e.AVERAGE_MEMORY = "Average memory", e.NUMBER_OF_WORKER_THREADS = "Number of worker threads", e.MAXIMUM_MEMORY = "Maximum memory", e;
}({}), el = /* @__PURE__ */ function(e) {
	return e.WORKER_NUMBER = "Worker Number", e;
}({}), tl = /* @__PURE__ */ function(e) {
	return e.GROUP_COUNT = "Group Count", e.SORT_METHODS_USED = "Sort Methods Used", e.SORT_SPACE_MEMORY = "Sort Space Memory", e;
}({}), nl = /* @__PURE__ */ function(e) {
	return e.AVERAGE_SORT_SPACE_USED = "Average Sort Space Used", e.PEAK_SORT_SPACE_USED = "Peak Sort Space Used", e;
}({}), rl = /* @__PURE__ */ function(e) {
	return e.SHARED = "shared", e.LOCAL = "local", e.TEMP = "temp", e;
}({});
//#endregion
//#region src/services/help-service.ts
function il(e) {
	return ol[e.toUpperCase()];
}
function al(e) {
	return sl[e.toUpperCase()];
}
var ol = {
	LIMIT: "returns a specified number of rows from a record set.",
	SORT: "sorts a record set based on the specified sort key.",
	"NESTED LOOP": "merges two record sets by looping through every record in the first set and\n   trying to find a match in the second set. All matching records are returned.",
	"MERGE JOIN": "merges two record sets by first sorting them on a <strong>join key</strong>.",
	HASH: "generates a hash table from the records in the input recordset. Hash is used by\n   <strong>Hash Join</strong>.",
	"HASH JOIN": "joins two record sets by hashing one of them (using a <strong>Hash Scan</strong>).",
	AGGREGATE: "groups records together based on a GROUP BY or aggregate function (like <code>sum()</code>).",
	HASHAGGREGATE: "groups records together based on a GROUP BY or aggregate function (like sum()). Hash Aggregate uses\n   a hash to first organize the records by a key.",
	"SEQ SCAN": "finds relevant records by sequentially scanning the input record set. When reading from a table,\n   Seq Scans (unlike Index Scans) perform a single read operation (only the table is read).",
	"INDEX SCAN": "finds relevant records based on an <strong>Index</strong>.\n    Index Scans perform 2 read operations: one to\n    read the index and another to read the actual value from the table.",
	"INDEX ONLY SCAN": "finds relevant records based on an <strong>Index</strong>.\n    Index Only Scans perform a single read operation\n    from the index and do not read from the corresponding table.",
	"BITMAP HEAP SCAN": "searches through the pages returned by the <strong>Bitmap Index Scan</strong>\n    for relevant rows.",
	"BITMAP INDEX SCAN": "uses a <strong>Bitmap Index</strong> (index which uses 1 bit per page)\n    to find all relevant pages.\n    Results of this node are fed to the <strong>Bitmap Heap Scan</strong>.",
	"CTE SCAN": "performs a sequential scan of <strong>Common Table Expression (CTE) query</strong> results. Note that\n    results of a CTE are materialized (calculated and temporarily stored).",
	MEMOIZE: "is used to cache the results of the inner side of a nested loop. It avoids executing underlying nodes when the results for the current parameters are already in the cache.",
	GATHER: "reads the results of the parallel workers, in an undefined order.",
	"GATHER MERGE": "reads the results of the parallel workers, preserving any ordering."
}, sl = {
	"MISSING EXECUTION TIME": "Execution time (or Total runtime) not available for this plan. Make sure you\n    use EXPLAIN ANALYZE.",
	"MISSING PLANNING TIME": "Planning time not available for this plan.",
	"WORKERS PLANNED NOT LAUNCHED": "Less workers than planned were launched.\nConsider modifying max_parallel_workers or max_parallel_workers_per_gather.",
	"WORKERS DETAILED INFO MISSING": "Consider using EXPLAIN (ANALYZE, VERBOSE)",
	"FUZZY NEEDS VERBOSE": "Information may not be accurate. Use EXPLAIN VERBOSE mode.",
	"HINT TRACK_IO_TIMING": "HINT: activate <em><b>track_io_timing</b></em> to have details on time spent outside the PG cache.",
	"IO TIMINGS PARALLEL": "Distributed among parallel workers"
};
function cl(e, t, n, r) {
	if (!t) return;
	let i = e.getBoundingClientRect(), a = t.getBoundingClientRect(), o = e.scrollLeft, s = a.left >= i.left && a.left <= i.right && a.right <= i.right, c = e.scrollTop, l = a.top >= i.top && a.top <= i.bottom && a.bottom <= i.bottom;
	n || !s || !l ? (o = a.left + e.scrollLeft - i.left - i.width / 2 + a.width / 2, c = a.top + e.scrollTop - i.top - i.height / 2 + a.height / 2, ul({
		element: e,
		to: {
			scrollTop: c,
			scrollLeft: o
		},
		duration: 400,
		done: r
	})) : r && r();
}
var ll = ({ currentTime: e, start: t, change: n, duration: r }) => {
	let i = e;
	return i /= r / 2, i < 1 ? n / 2 * i * i + t : (--i, -n / 2 * (i * (i - 2) - 1) + t);
};
function ul({ duration: e, element: t, to: n, done: r }) {
	let i = t.scrollTop, a = t.scrollLeft, o = n.scrollTop - i, s = n.scrollLeft - a, c = (/* @__PURE__ */ new Date()).getTime(), l = () => {
		let u = (/* @__PURE__ */ new Date()).getTime() - c;
		t.scrollTop = ll({
			currentTime: u,
			start: i,
			change: o,
			duration: e
		}), t.scrollLeft = ll({
			currentTime: u,
			start: a,
			change: s,
			duration: e
		}), u < e ? requestAnimationFrame(l) : (t.scrollTop = n.scrollTop, t.scrollLeft = n.scrollLeft, r && r());
	};
	l();
}
function dl(e, t) {
	let n = "([\\s\\S]*?)(e)?(?:(o)|(c)|(t)|(sp)|$)".replace("sp", t).replace("o", "[\\(\\{\\[]").replace("c", "[\\)\\}\\]]").replace("t", "['\"]").replace("e", "[\\\\]"), r = new RegExp(n, "gi"), i = [], a = [], o = [];
	return e.replace(r, (e, t, n, r, s, c, l) => {
		if (n) return a.push(t, l || r || s || c), "";
		if (r) i.push(r);
		else if (s) i.pop();
		else if (c) i[i.length - 1] === c ? i.pop() : i.push(c);
		else if (l ? !i.length : !t) return a.push(t), o.push(a.join("")), a = [], "";
		return a.push(e), "";
	}), o;
}
function fl(e, t) {
	let n, r = e.content.Plan;
	return r.nodeId == t ? r : (r && r.Plans && (r.Plans.some(function e(r) {
		return r.nodeId === t ? (n = r, !0) : r.Plans && r.Plans.some(e);
	}), !n && e.ctes && L.default.each(e.ctes, (e) => {
		if (e.nodeId == t) return n = e, !1;
		if (e.Plans && (e.Plans.some(function e(r) {
			return r.nodeId === t ? (n = r, !0) : r.Plans && r.Plans.some(e);
		}), n)) return !1;
	})), n);
}
function pl(e, t) {
	let n;
	return e.ctes && L.default.each(e.ctes, (e) => {
		if (e[J.SUBPLAN_NAME] == "CTE " + t) return n = e, !1;
	}), n;
}
var ml = [
	J.NODE_TYPE,
	J.CTE_NAME,
	J.EXCLUSIVE_DURATION,
	J.EXCLUSIVE_COST,
	J.TOTAL_COST,
	J.PLAN_ROWS,
	J.ACTUAL_ROWS,
	J.ACTUAL_LOOPS,
	J.OUTPUT,
	J.WORKERS,
	J.WORKERS_PLANNED,
	J.WORKERS_LAUNCHED,
	J.READ_BLOCKS,
	J.WRITTEN_BLOCKS,
	J.EXCLUSIVE_SHARED_HIT_BLOCKS,
	J.EXCLUSIVE_SHARED_READ_BLOCKS,
	J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS,
	J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS,
	J.EXCLUSIVE_TEMP_READ_BLOCKS,
	J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS,
	J.EXCLUSIVE_LOCAL_HIT_BLOCKS,
	J.EXCLUSIVE_LOCAL_READ_BLOCKS,
	J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS,
	J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS,
	J.EXCLUSIVE_READ_BLOCKS,
	J.EXCLUSIVE_WRITTEN_BLOCKS,
	J.SHARED_HIT_BLOCKS,
	J.SHARED_READ_BLOCKS,
	J.SHARED_DIRTIED_BLOCKS,
	J.SHARED_WRITTEN_BLOCKS,
	J.TEMP_READ_BLOCKS,
	J.TEMP_WRITTEN_BLOCKS,
	J.LOCAL_HIT_BLOCKS,
	J.LOCAL_READ_BLOCKS,
	J.LOCAL_DIRTIED_BLOCKS,
	J.LOCAL_WRITTEN_BLOCKS,
	J.PLANNER_ESTIMATE_FACTOR,
	J.PLANNER_ESTIMATE_DIRECTION,
	J.SUBPLAN_NAME,
	J.GROUP_KEY,
	J.HASH_CONDITION,
	J.JOIN_TYPE,
	J.INDEX_NAME,
	J.HASH_CONDITION,
	J.EXCLUSIVE_IO_READ_TIME,
	J.EXCLUSIVE_IO_WRITE_TIME,
	J.EXCLUSIVE_SHARED_IO_READ_TIME,
	J.EXCLUSIVE_SHARED_IO_WRITE_TIME,
	J.EXCLUSIVE_LOCAL_IO_READ_TIME,
	J.EXCLUSIVE_LOCAL_IO_WRITE_TIME,
	J.EXCLUSIVE_TEMP_IO_READ_TIME,
	J.EXCLUSIVE_TEMP_IO_WRITE_TIME,
	J.EXCLUSIVE_AVERAGE_IO_READ_SPEED,
	J.EXCLUSIVE_AVERAGE_IO_WRITE_SPEED,
	J.EXCLUSIVE_AVERAGE_SHARED_IO_READ_SPEED,
	J.EXCLUSIVE_AVERAGE_SHARED_IO_WRITE_SPEED,
	J.EXCLUSIVE_AVERAGE_LOCAL_IO_READ_SPEED,
	J.EXCLUSIVE_AVERAGE_LOCAL_IO_WRITE_SPEED,
	J.EXCLUSIVE_AVERAGE_TEMP_IO_READ_SPEED,
	J.EXCLUSIVE_AVERAGE_TEMP_IO_WRITE_SPEED,
	J.EXCLUSIVE_AVERAGE_IO_READ_SPEED,
	J.EXCLUSIVE_AVERAGE_IO_WRITE_SPEED,
	J.EXCLUSIVE_SUM_IO_READ_TIME,
	J.EXCLUSIVE_SUM_IO_WRITE_TIME,
	J.EXCLUSIVE_AVERAGE_SUM_IO_READ_SPEED,
	J.EXCLUSIVE_AVERAGE_SUM_IO_WRITE_SPEED,
	J.AVERAGE_IO_READ_SPEED,
	J.AVERAGE_IO_WRITE_SPEED,
	J.AVERAGE_SHARED_IO_READ_SPEED,
	J.AVERAGE_SHARED_IO_WRITE_SPEED,
	J.AVERAGE_LOCAL_IO_READ_SPEED,
	J.AVERAGE_LOCAL_IO_WRITE_SPEED,
	J.AVERAGE_TEMP_IO_READ_SPEED,
	J.AVERAGE_TEMP_IO_WRITE_SPEED,
	J.IO_READ_TIME,
	J.IO_WRITE_TIME,
	J.SHARED_IO_READ_TIME,
	J.SHARED_IO_WRITE_TIME,
	J.LOCAL_IO_READ_TIME,
	J.LOCAL_IO_WRITE_TIME,
	J.TEMP_IO_READ_TIME,
	J.TEMP_IO_WRITE_TIME,
	J.SUM_IO_READ_TIME,
	J.SUM_IO_WRITE_TIME,
	J.AVERAGE_SUM_IO_READ_SPEED,
	J.AVERAGE_SUM_IO_WRITE_SPEED,
	J.HEAP_FETCHES,
	J.WAL_RECORDS,
	J.WAL_BYTES,
	J.WAL_FPI,
	J.NODE_ID,
	J.ROWS_REMOVED_BY_FILTER,
	J.ROWS_REMOVED_BY_JOIN_FILTER,
	J.ROWS_REMOVED_BY_INDEX_RECHECK,
	J.ACTUAL_ROWS_REVISED,
	J.PLAN_ROWS_REVISED,
	J.ROWS_REMOVED_BY_FILTER_REVISED,
	J.ROWS_REMOVED_BY_JOIN_FILTER_REVISED,
	J.ROWS_REMOVED_BY_INDEX_RECHECK_REVISED,
	"size",
	J.RELATION_NAME,
	J.ALIAS,
	J.FUNCTION_NAME,
	J.STRATEGY,
	J.PARTIAL_MODE,
	J.SCAN_DIRECTION,
	J.ACTUAL_ROWS_FRACTIONAL
];
function hl(e, t) {
	return (!!t || e === el.WORKER_NUMBER || e === J.ACTUAL_ROWS) && ml.indexOf(e) === -1;
}
//#endregion
//#region src/interfaces.ts
var gl = class {
	nodeId;
	size;
	Options;
	Timing;
	Settings;
	[J.ACTUAL_LOOPS];
	[J.ACTUAL_ROWS];
	[J.ACTUAL_ROWS_REVISED];
	[J.ACTUAL_STARTUP_TIME];
	[J.ACTUAL_TOTAL_TIME];
	[J.EXCLUSIVE_COST];
	[J.EXCLUSIVE_DURATION];
	[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS];
	[J.EXCLUSIVE_LOCAL_HIT_BLOCKS];
	[J.EXCLUSIVE_LOCAL_READ_BLOCKS];
	[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS];
	[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS];
	[J.EXCLUSIVE_SHARED_HIT_BLOCKS];
	[J.EXCLUSIVE_SHARED_READ_BLOCKS];
	[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS];
	[J.EXCLUSIVE_READ_BLOCKS];
	[J.EXCLUSIVE_WRITTEN_BLOCKS];
	[J.EXCLUSIVE_TEMP_READ_BLOCKS];
	[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS];
	[J.FILTER];
	[J.PLANNER_ESTIMATE_DIRECTION];
	[J.PLANNER_ESTIMATE_FACTOR];
	[J.INDEX_NAME];
	[J.NODE_TYPE];
	[J.PARALLEL_AWARE] = !1;
	[J.PLANS];
	[J.PLAN_ROWS];
	[J.PLAN_ROWS_REVISED];
	[J.SUBPLAN_NAME];
	[J.TOTAL_COST];
	[J.WORKERS];
	[J.WORKERS_LAUNCHED];
	[J.WORKERS_PLANNED];
	[J.WORKERS_LAUNCHED_BY_GATHER];
	[J.WORKERS_PLANNED_BY_GATHER];
	[J.EXCLUSIVE_IO_READ_TIME];
	[J.EXCLUSIVE_IO_WRITE_TIME];
	[J.EXCLUSIVE_SHARED_IO_READ_TIME];
	[J.EXCLUSIVE_SHARED_IO_WRITE_TIME];
	[J.EXCLUSIVE_LOCAL_IO_READ_TIME];
	[J.EXCLUSIVE_LOCAL_IO_WRITE_TIME];
	[J.EXCLUSIVE_TEMP_IO_READ_TIME];
	[J.EXCLUSIVE_TEMP_IO_WRITE_TIME];
	[J.EXCLUSIVE_SUM_IO_READ_TIME];
	[J.EXCLUSIVE_SUM_IO_WRITE_TIME];
	[J.AVERAGE_IO_READ_SPEED];
	[J.AVERAGE_IO_WRITE_SPEED];
	[J.AVERAGE_SHARED_IO_READ_SPEED];
	[J.AVERAGE_SHARED_IO_WRITE_SPEED];
	[J.AVERAGE_LOCAL_IO_READ_SPEED];
	[J.AVERAGE_LOCAL_IO_WRITE_SPEED];
	[J.AVERAGE_TEMP_IO_READ_SPEED];
	[J.AVERAGE_TEMP_IO_WRITE_SPEED];
	[J.AVERAGE_SUM_IO_READ_SPEED];
	[J.AVERAGE_SUM_IO_WRITE_SPEED];
	[J.EXCLUSIVE_AVERAGE_SUM_IO_READ_SPEED];
	[J.EXCLUSIVE_AVERAGE_SUM_IO_WRITE_SPEED];
	[J.IO_READ_TIME];
	[J.IO_WRITE_TIME];
	[J.SHARED_IO_READ_TIME];
	[J.SHARED_IO_WRITE_TIME];
	[J.LOCAL_IO_READ_TIME];
	[J.LOCAL_IO_WRITE_TIME];
	[J.TEMP_IO_READ_TIME];
	[J.TEMP_IO_WRITE_TIME];
	[J.SUM_IO_READ_TIME];
	[J.SUM_IO_WRITE_TIME];
	[J.PARTIAL_MODE];
	[J.SCAN_DIRECTION];
	constructor(e) {
		if (!e) return;
		this[J.NODE_TYPE] = e;
		let t = /^((?:Parallel\s+)?(?:Seq|Tid.*|Bitmap\s+Heap|WorkTable|(?:Async\s+)?Foreign)\s+Scan|Update|Insert|Delete|Merge)\son\s(\S+)(?:\s+(\S+))?$/.exec(e), n = /^(Bitmap\s+Index\s+Scan)\son\s(\S+)$/.exec(e), r = /^((?:Parallel\s+)?Index(?:\sOnly)?\sScan)(\sBackward)?\susing\s(\S+)\son\s(\S+)(?:\s+(\S+))?$/.exec(e), i = /^(CTE\sScan)\son\s(\S+)(?:\s+(\S+))?$/.exec(e), a = /^(Function\sScan)\son\s(\S+)(?:\s+(\S+))?$/.exec(e), o = /^(Subquery\sScan)\son\s(.+)$/.exec(e);
		t ? (this[J.NODE_TYPE] = t[1], this[J.RELATION_NAME] = t[2], t[3] && (this[J.ALIAS] = t[3])) : n ? (this[J.NODE_TYPE] = n[1], this[J.INDEX_NAME] = n[2]) : r ? (this[J.NODE_TYPE] = r[1], this[J.INDEX_NAME] = r[3], this[J.SCAN_DIRECTION] = r[2] ? "Backward" : "Forward", this[J.RELATION_NAME] = r[4], r[5] && (this[J.ALIAS] = r[5])) : i ? (this[J.NODE_TYPE] = i[1], this[J.CTE_NAME] = i[2], i[3] && (this[J.ALIAS] = i[3])) : a ? (this[J.NODE_TYPE] = a[1], this[J.FUNCTION_NAME] = a[2], a[3] && (this[J.ALIAS] = a[3])) : o && (this[J.NODE_TYPE] = o[1], this[J.ALIAS] = o[2]);
		let s = /^(Parallel\s+)(.*)/.exec(this[J.NODE_TYPE]);
		s && (this[J.NODE_TYPE] = s[2], this[J.PARALLEL_AWARE] = !0);
		let c = /(.*)\sJoin$/.exec(this[J.NODE_TYPE]), l = /(.*)\s+(Full|Left|Right|Anti)/.exec(this[J.NODE_TYPE]);
		c && (this[J.NODE_TYPE] = c[1], l && (this[J.NODE_TYPE] = l[1], this[J.JOIN_TYPE] = l[2]), this[J.NODE_TYPE] += " Join");
	}
}, _l = new class {
	nodeId = 0;
	flat = [];
	recurse(e) {
		return L.default.map(e, (e) => [e, this.recurse(e[J.PLANS])]);
	}
	createPlan(e, t, n) {
		n = n.replace(/(\S)(?!$)(\s{2,})/gm, "$1 ");
		let r = {
			id: J.PEV_PLAN_TAG + (/* @__PURE__ */ new Date()).getTime().toString(),
			name: e || "plan created on " + (/* @__PURE__ */ new Date()).toDateString(),
			createdOn: /* @__PURE__ */ new Date(),
			content: t,
			query: n,
			planStats: {},
			ctes: [],
			isAnalyze: L.default.has(t.Plan, J.ACTUAL_ROWS),
			isVerbose: this.findOutputProperty(t.Plan)
		};
		return this.nodeId = 1, this.flat = [], this.processNode(t.Plan, r), this.flat = this.flat.concat(L.default.flattenDeep(this.recurse([r.content.Plan]))), L.default.each(r.ctes, (e) => {
			this.flat = this.flat.concat(L.default.flattenDeep(this.recurse([e])));
		}), this.fixCteScansDuration(r), this.fixInitPlanUsageDuration(r), this.calculateMaximums(r), r;
	}
	isCTE(e) {
		return e[J.PARENT_RELATIONSHIP] === "InitPlan" && L.default.startsWith(e[J.SUBPLAN_NAME], "CTE");
	}
	processNode(e, t) {
		e.nodeId = this.nodeId++, this.calculatePlannerEstimate(e), L.default.each(e[J.PLANS], (n) => {
			!this.isCTE(n) && n[J.PARENT_RELATIONSHIP] !== "InitPlan" && n[J.PARENT_RELATIONSHIP] !== "SubPlan" && (n[J.WORKERS_PLANNED_BY_GATHER] = e[J.WORKERS_PLANNED] || e[J.WORKERS_PLANNED_BY_GATHER], n[J.WORKERS_LAUNCHED_BY_GATHER] = e[J.WORKERS_LAUNCHED] || e[J.WORKERS_LAUNCHED_BY_GATHER]), this.isCTE(n) && t.ctes.push(n), this.processNode(n, t);
		}), L.default.remove(e[J.PLANS], (e) => this.isCTE(e)), this.calculateActuals(e), this.calculateExclusives(e), this.calculateIoTimingsAverage(e), this.convertNodeType(e);
	}
	calculateMaximums(e) {
		let t = L.default.maxBy(this.flat, J.ACTUAL_ROWS_REVISED);
		t && (e.content.maxRows = t[J.ACTUAL_ROWS_REVISED]);
		let n = L.default.maxBy(this.flat, J.EXCLUSIVE_COST);
		n && (e.content.maxCost = n[J.EXCLUSIVE_COST]);
		let r = L.default.maxBy(this.flat, J.TOTAL_COST);
		r && (e.content.maxTotalCost = r[J.TOTAL_COST]);
		let i = L.default.maxBy(this.flat, J.EXCLUSIVE_DURATION);
		i && (e.content.maxDuration = i[J.EXCLUSIVE_DURATION]), e.content.maxBlocks || (e.content.maxBlocks = {});
		function a(e) {
			return e[J.EXCLUSIVE_SHARED_HIT_BLOCKS] + e[J.EXCLUSIVE_SHARED_READ_BLOCKS] + e[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] + e[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS];
		}
		let o = L.default.maxBy(this.flat, (e) => a(e));
		o && a(o) && (e.content.maxBlocks[q.shared] = a(o));
		function s(e) {
			return e[J.EXCLUSIVE_TEMP_READ_BLOCKS] + e[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS];
		}
		let c = L.default.maxBy(this.flat, (e) => s(e));
		c && s(c) && (e.content.maxBlocks[q.temp] = s(c));
		function l(e) {
			return e[J.EXCLUSIVE_LOCAL_HIT_BLOCKS] + e[J.EXCLUSIVE_LOCAL_READ_BLOCKS] + e[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] + e[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS];
		}
		let u = L.default.maxBy(this.flat, (e) => l(e));
		u && l(u) && (e.content.maxBlocks[q.local] = l(u)), e.content.maxIo || (e.content.maxIo = 0);
		function d(e) {
			return e[J.EXCLUSIVE_SUM_IO_READ_TIME] + e[J.EXCLUSIVE_SUM_IO_WRITE_TIME];
		}
		let f = L.default.maxBy(this.flat, (e) => d(e));
		f && d(f) && (e.content.maxIo = d(f));
		let p = L.default.max(L.default.map(this.flat, (e) => {
			let t = e[J.PLANNER_ESTIMATE_FACTOR];
			if (t !== Infinity) return t;
		}));
		e.content.maxEstimateFactor = p * 2 || 1;
	}
	calculateActuals(e) {
		if (!L.default.isUndefined(e[J.ACTUAL_TOTAL_TIME])) {
			let t = (e[J.WORKERS_LAUNCHED_BY_GATHER] || 0) + 1;
			e[J.ACTUAL_TOTAL_TIME] = e[J.ACTUAL_TOTAL_TIME] * e[J.ACTUAL_LOOPS] / t, e[J.ACTUAL_STARTUP_TIME] = e[J.ACTUAL_STARTUP_TIME] * e[J.ACTUAL_LOOPS] / t, e[J.EXCLUSIVE_DURATION] = e[J.ACTUAL_TOTAL_TIME];
			let n = e[J.EXCLUSIVE_DURATION] - this.childrenDuration(e, 0);
			e[J.EXCLUSIVE_DURATION] = n > 0 ? n : 0;
		}
		L.default.isUndefined(e[J.TOTAL_COST]) || (e[J.EXCLUSIVE_COST] = e[J.TOTAL_COST]), L.default.each(e[J.PLANS], (t) => {
			t[J.TOTAL_COST] && (e[J.EXCLUSIVE_COST] = e[J.EXCLUSIVE_COST] - t[J.TOTAL_COST]);
		}), e[J.EXCLUSIVE_COST] < 0 && (e[J.EXCLUSIVE_COST] = 0), L.default.each([
			"ACTUAL_ROWS",
			"PLAN_ROWS",
			"ROWS_REMOVED_BY_FILTER",
			"ROWS_REMOVED_BY_JOIN_FILTER",
			"ROWS_REMOVED_BY_INDEX_RECHECK"
		], (t) => {
			if (!L.default.isUndefined(e[J[t]])) {
				let n = t + "_REVISED", r = e[J.ACTUAL_LOOPS] || 1, i = e[J[t]] * r;
				e[J[n]] = i;
			}
		});
	}
	fixCteScansDuration(e) {
		e.isAnalyze && L.default.each(e.ctes, (e) => {
			let t = e[J.ACTUAL_TOTAL_TIME] || 0, n = L.default.filter(this.flat, (t) => `CTE ${t[J.CTE_NAME]}` == e[J.SUBPLAN_NAME]), r = L.default.sumBy(n, (e) => e[J.EXCLUSIVE_DURATION]);
			L.default.each(n, (e) => {
				e[J.EXCLUSIVE_DURATION] = Math.max(0, e[J.EXCLUSIVE_DURATION] - t * (e[J.ACTUAL_TOTAL_TIME] || 0) / r);
			});
		});
	}
	fixInitPlanUsageDuration(e) {
		if (!e.isAnalyze) return;
		let t = L.default.filter(this.flat, (e) => e[J.PARENT_RELATIONSHIP] == "InitPlan");
		L.default.each(t, (e) => {
			if (!e[J.SUBPLAN_NAME]) return;
			let t = /(InitPlan\s+[1-9]+)(?:\s+\(returns (\$[0-9]+)\))*/m.exec(e[J.SUBPLAN_NAME]);
			if (!t) return;
			let n = t[2] || t[1];
			L.default.each(L.default.filter(this.flat, (e) => e[J.PARENT_RELATIONSHIP] != "InitPlan"), (t) => {
				L.default.each(t, (r) => {
					if (typeof r == "string" && RegExp(`.*${n.replace(/[^a-zA-Z0-9]/g, "\\$&")}[0-9]?`).exec(r)) return t[J.EXCLUSIVE_DURATION] -= e[J.ACTUAL_TOTAL_TIME] || 0, !1;
				});
			});
		});
	}
	childrenDuration(e, t) {
		return L.default.each(e[J.PLANS], (n) => {
			(n[J.PARENT_RELATIONSHIP] !== "InitPlan" || n[J.PARENT_RELATIONSHIP] == "InitPlan" && e[J.NODE_TYPE] == "Result") && (t += n[J.ACTUAL_TOTAL_TIME] || 0);
		}), t;
	}
	calculatePlannerEstimate(e) {
		e[J.ACTUAL_ROWS] !== void 0 && e[J.PLAN_ROWS] !== void 0 && (e[J.PLANNER_ESTIMATE_FACTOR] = e[J.ACTUAL_ROWS] / e[J.PLAN_ROWS], e[J.PLANNER_ESTIMATE_DIRECTION] = Xc.none, e[J.ACTUAL_ROWS] > e[J.PLAN_ROWS] && (e[J.PLANNER_ESTIMATE_DIRECTION] = Xc.under), e[J.ACTUAL_ROWS] < e[J.PLAN_ROWS] && (e[J.PLANNER_ESTIMATE_DIRECTION] = Xc.over, e[J.PLANNER_ESTIMATE_FACTOR] = e[J.PLAN_ROWS] / e[J.ACTUAL_ROWS]));
	}
	cleanupSource(e) {
		return e = e.replace(/^(\||║|│)(.*)\1\r?\n/gm, "$2\n"), e = e.replace(/^(.*)(\||║|│)$\r?\n/gm, "$1\n"), e = e.replace(/^\+-+\+\r?\n/gm, ""), e = e.replace(/^(-|─|═)\1+\r?\n/gm, ""), e = e.replace(/^(├|╟|╠|╞)(─|═)\2*(┤|╢|╣|╡)\r?\n/gm, ""), e = e.replace(/^\+-+\+\r?\n/gm, ""), e = e.replace(/^└(─)+┘\r?\n/gm, ""), e = e.replace(/^╚(═)+╝\r?\n/gm, ""), e = e.replace(/^┌(─)+┐\r?\n/gm, ""), e = e.replace(/^╔(═)+╗\r?\n/gm, ""), e = e.replace(/^(["'])(.*)\1\r?/gm, "$2"), e = e.replace(/\s*\+\r?\n/g, "\n"), e = e.replace(/↵\r?/gm, "\n"), e = e.replace(/^\s*QUERY PLAN\s*\r?\n/m, ""), e = e.replace(/^\(\d+\s+[a-z]*s?\)(\r?\n|$)/gm, "\n"), e;
	}
	fromSource(e) {
		e = this.cleanupSource(e);
		try {
			let t = JSON.parse(e);
			return this.getPlanContent(t);
		} catch {
			return /^(\s*)(\[|\{)\s*\n.*?\1(\]|\})\s*/gms.exec(e) ? this.fromJson(e) : this.fromText(e);
		}
	}
	fromJson(e) {
		let t = e.split(/[\r\n]+/), n = "", r = 0;
		L.default.each(t, (e, t) => {
			let i = /^(\s*)(\[|\{)\s*$/.exec(e);
			if (i) return n = i[1], r = t, !1;
		});
		let i = 0;
		L.default.each(t, (e, t) => {
			if (RegExp("^" + n + "(]|})s*$").exec(e)) return i = t, !1;
		});
		let a = t.slice(r, i + 1).join("\n").replace(/""/gm, "\""), o = JSON.parse(a);
		return this.getPlanContent(o);
	}
	getPlanContent(e) {
		if (Array.isArray(e) && (e = e[0]), !e.Plan) throw Error("Invalid plan");
		return e;
	}
	splitIntoLines(e) {
		let t = [], n = e.split(/\r?\n/), r = (e, t) => (e.match(t) || []).length, i = (e) => {
			let t = e.indexOf(")"), n = e.indexOf("(");
			return t != -1 && t < n;
		}, a = (e, t) => e.search(/\S/) == t.search(/\S/);
		return L.default.each(n, (e) => {
			let n = t[t.length - 1];
			n && r(n, /\)/g) != r(n, /\(/g) ? t[t.length - 1] += e : e.match(/^(?:Total\s+runtime|Planning(\s+time)?|Memory\s+used|\s+\(slice\d+\)|Optimizer|Execution\s+time|Time|Filter|Output|JIT|Trigger|Settings|Serialization)/i) ? t.push(e) : e.match(/^\S/) || e.match(/^\s*\(/) || i(e) ? 0 < t.length ? t[t.length - 1] += e : t.push(e) : 0 < t.length && n.match(/^.*,\s*$/) && !a(n, e) && !e.match(/^\s*->/i) ? t[t.length - 1] += e : t.push(e);
		}), t;
	}
	fromText(e) {
		let t = this.splitIntoLines(e), n = {}, r = [], i = /^\s*/, a = /^s*$/, o = /^\\s*(QUERY|---|#).*$/, s = /^(\s*)((?:Sub|Init)Plan)\s*(?:\d+\s*)?\s*(?:\(returns.*\)\s*)?$/gm, c = /^(\s*)CTE\s+(\S+)\s*$/g, l = /^(\s*)Trigger\s+(.*):\s+time=(\d+\.\d+)\s+calls=(\d+)\s*$/, u = /* @__PURE__ */ RegExp("^(\\s*)Worker\\s+(\\d+):\\s+(?:(?:actual(?:\\stime=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+))?\\srows=(\\d+(?:\\.\\d+)?)\\sloops=(\\d+)|(never\\s+executed)))?(.*)\\s*$"), d = /^(\s*)JIT:\s*$/, f = /^(\s*)Serialization:\s+time=(\d+\.\d+) ms.*output=(\d+).*$/, p = /^(\s*)(\S.*\S)\s*$/, m = /* @__PURE__ */ RegExp("^(\\s*->\\s*|\\s*)(Finalize|Simple|Partial)*\\s*([^\\r\\n\\t\\f\\v\\(]*?)\\s*(?:\\(dynamic scan id:\\s*(\\d+)\\))?\\s*(?:(\\d+)+:(\\d+)+\\s+\\((slice\\d+);\\s*segments:\\s*(\\d+)+\\))?\\s*(?:(?:\\(cost=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+)\\s+rows=(\\d+)\\s+width=(\\d+)\\)\\s+\\((?:actual(?:\\stime=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+))?\\srows=(\\d+(?:\\.\\d+)?)\\sloops=(\\d+)|(never\\s+executed))\\))|(?:\\(cost=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+)\\s+rows=(\\d+)\\s+width=(\\d+)\\))|(?:\\((?:actual(?:\\stime=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+))?\\srows=(\\d+(?:\\.\\d+)?)\\sloops=(\\d+)|(never\\s+executed))\\)))\\s*$", "m");
		if (L.default.each(t, (e) => {
			e = e.replace(/"\s*$/, ""), e = e.replace(/^\s*"/, ""), e = e.replace(/\t/gm, "    ");
			let t = e.match(i), h = t ? t[0].length : 0;
			e = e.replace(i, "");
			let g = a.exec(e), _ = o.exec(e), v = m.exec(e), y = s.exec(e), b = c.exec(e), x = l.exec(e), S = u.exec(e), C = d.exec(e), w = f.exec(e), T = p.exec(e), E = /\(slice(\d+)\)\s+(?:Executor\s+memory:\s*)?(?:(\d+?K\s+bytes))?(?:\s+avg\s+x\s+(\d+)?\s+workers)?(?:,\s*(\d+?K\s+bytes)\s+max\s+\(seg\d+\))?(?:\.\s+Work_mem:\s*(\d+?K\s+bytes)\s+max\.)?/.exec(e);
			if (!(g || _)) {
				if (v && !b && !y) {
					let e = v[17] || v[26], t = new gl(v[3]);
					if (v[4] && (t[J.DYNAMIC_SCAN_ID] = parseInt(v[4], 10)), v[5] && v[6] && v[7] && v[8] && (t[J.DATA_SLICE_COUNT] = parseInt(v[5], 10), t[J.NODE_COUNT] = parseInt(v[6], 10), t[J.SLICE_ID] = v[7], t[J.SEGMENTS_COUNT] = parseInt(v[8], 10)), (v[9] && v[10] || v[18] && v[19]) && (t[J.STARTUP_COST] = parseFloat(v[9] || v[18]), t[J.TOTAL_COST] = parseFloat(v[10] || v[19]), t[J.PLAN_ROWS] = parseInt(v[11] || v[20], 0), t[J.PLAN_WIDTH] = parseInt(v[12] || v[21], 0)), (v[13] && v[14] || v[22] && v[23]) && (t[J.ACTUAL_STARTUP_TIME] = parseFloat(v[13] || v[22]), t[J.ACTUAL_TOTAL_TIME] = parseFloat(v[14] || v[23])), v[15] && v[16] || v[24] && v[25]) {
						let e = v[15] || v[24];
						e.indexOf(".") != -1 && (t[J.ACTUAL_ROWS_FRACTIONAL] = !0), t[J.ACTUAL_ROWS] = parseFloat(e), t[J.ACTUAL_LOOPS] = parseInt(v[16] || v[25], 0);
					}
					v[2] && (t[J.PARTIAL_MODE] = v[2]), e && (t[J.ACTUAL_LOOPS] = 0, t[J.ACTUAL_ROWS] = 0, t[J.ACTUAL_TOTAL_TIME] = void 0);
					let i = {
						node: t,
						subelementType: "subnode"
					};
					if (r.length === 0) {
						r.push([h, i]), n.Plan = t;
						return;
					}
					L.default.remove(r, (e) => e[0] >= h);
					let a = L.default.last(r)?.[1];
					if (!a) return;
					r.push([h, i]), a.node[J.PLANS] || (a.node[J.PLANS] = []), a.subelementType === "initplan" ? (t[J.PARENT_RELATIONSHIP] = "InitPlan", t[J.SUBPLAN_NAME] = a.name) : a.subelementType === "subplan" && (t[J.PARENT_RELATIONSHIP] = "SubPlan", t[J.SUBPLAN_NAME] = a.name), a.node.Plans?.push(t);
				} else if (y) {
					let e = y[2];
					L.default.remove(r, (e) => e[0] >= h);
					let t = {
						node: L.default.last(r)?.[1]?.node,
						subelementType: e.toLowerCase(),
						name: y[0]
					};
					r.push([h, t]);
				} else if (b) {
					let e = b[2];
					L.default.remove(r, (e) => e[0] >= h);
					let t = {
						node: L.default.last(r)?.[1]?.node,
						subelementType: "initplan",
						name: "CTE " + e
					};
					r.push([h, t]);
				} else if (S) {
					let e = parseInt(S[2], 0), t = L.default.last(r)?.[1];
					if (!t) return;
					t.node[J.WORKERS] || (t.node[J.WORKERS] = []);
					let n = this.getWorker(t.node, e);
					if (n || (n = { [el.WORKER_NUMBER]: e }, t.node[J.WORKERS]?.push(n)), S[3] && S[4] && (n[J.ACTUAL_STARTUP_TIME] = parseFloat(S[3]), n[J.ACTUAL_TOTAL_TIME] = parseFloat(S[4]), n[J.ACTUAL_ROWS] = parseInt(S[5], 0), n[J.ACTUAL_LOOPS] = parseInt(S[6], 0)), this.parseSort(S[8], n)) return;
					let i = S[8].split(/: (.+)/).filter((e) => e);
					if (S[8]) {
						if (!i[1]) return;
						let e = L.default.startCase(i[0]);
						n[e] = i[1];
					}
				} else if (x) L.default.remove(r, (e) => e[0] >= h), n.Triggers = n.Triggers || [], n.Triggers.push({
					"Trigger Name": x[2],
					Time: this.parseTime(x[3]),
					Calls: x[4]
				});
				else if (C) {
					let e;
					if (r.length === 0) n.JIT = {}, e = { node: n.JIT }, r.push([1, e]);
					else {
						let t = L.default.last(r)?.[1];
						if (!t) return;
						if (L.default.last(t.node?.[J.WORKERS])) {
							let n = L.default.last(t.node?.[J.WORKERS]);
							n.JIT = {}, e = { node: n.JIT }, r.push([h, e]);
						}
					}
				} else if (w) {
					n.Serialization = {
						Time: parseFloat(w[2]),
						"Output Volume": parseInt(w[3])
					};
					let e = { node: n.Serialization };
					r.push([1, e]);
				} else if (E) {
					L.default.remove(r, (e) => e[0] >= h || h == 1), n.Slice = n.Slice || [];
					let e = {
						[Qc.SLICE_NUM]: E[1],
						ExecutorMemory: {
							[$c.AVERAGE_MEMORY]: E[2],
							[$c.NUMBER_OF_WORKER_THREADS]: E[3],
							[$c.MAXIMUM_MEMORY]: E[4]
						},
						WorkMemory: E[5]
					};
					n.Slice.push(e);
				} else if (T && !E) {
					L.default.remove(r, (e) => e[0] >= h || h == 1);
					let t;
					if (t = r.length === 0 ? n : L.default.last(r)?.[1].node, !t.Plan && t["Query Text"]) {
						t["Query Text"] += "\n" + e;
						return;
					}
					let i = T[2].split(/: (.+)/).filter((e) => e);
					if (!i[1] || !t || this.parseSort(T[2], t) || this.parseBuffers(T[2], t) || this.parseWAL(T[2], t) || this.parseIOTimings(T[2], t) || this.parseOptions(T[2], t) || this.parseTiming(T[2], t) || this.parseSettings(T[2], t) || this.parseSortGroups(T[2], t) || this.parseSortKey(T[2], t)) return;
					let a = i[1].replace(/(\s*ms)$/, "");
					parseFloat(a) && (a = parseFloat(a));
					let o = i[0];
					(o.indexOf(" runtime") !== -1 || o.indexOf(" time") !== -1) && (o = L.default.startCase(o)), t[o] = a;
				}
			}
		}), n == null || !n.Plan) throw Error("Unable to parse plan");
		return n;
	}
	parseSortKey(e, t) {
		let n = /^\s*((?:Sort|Presorted) Key):\s+(.*)/g.exec(e);
		return n ? (t[n[1]] = L.default.map(dl(n[2], ","), L.default.trim), !0) : !1;
	}
	parseSort(e, t) {
		let n = /^(\s*)Sort Method:\s+(.*)\s+(Memory|Disk):\s+(?:(\S*)kB)\s*$/g.exec(e);
		return n ? (t[J.SORT_METHOD] = n[2].trim(), t[J.SORT_SPACE_USED] = n[4], t[J.SORT_SPACE_TYPE] = n[3], !0) : !1;
	}
	parseBuffers(e, t) {
		let n = /Buffers:\s+(.*)\s*$/g.exec(e);
		return n ? (L.default.each(n[1].split(/,\s+/), (e) => {
			let n = /(shared|temp|local)\s+(.*)$/g.exec(e);
			if (n) {
				let e = n[1];
				L.default.each([
					"hit",
					"read",
					"written",
					"dirtied"
				], (n) => {
					t[L.default.map([
						e,
						n,
						"blocks"
					], L.default.capitalize).join(" ")] = 0;
				}), L.default.each(n[2].split(/\s+/), (n) => {
					this.parseBuffer(n, e, t);
				});
			}
		}), !0) : !1;
	}
	parseBuffer(e, t, n) {
		let r = e.split(/=/), i = r[0], a = parseInt(r[1], 0);
		n[L.default.map([
			t,
			i,
			"blocks"
		], L.default.capitalize).join(" ")] = a;
	}
	getWorker(e, t) {
		return L.default.find(e[J.WORKERS], (e) => e[el.WORKER_NUMBER] === t);
	}
	parseWAL(e, t) {
		let n = /WAL:\s+(.*)\s*$/g.exec(e);
		return n ? (L.default.each([
			"Records",
			"Bytes",
			"FPI"
		], (e) => {
			t["WAL " + e] = 0;
		}), L.default.each(n[1].split(/\s+/), (e) => {
			let n = e.split(/=/), r = n[0], i = parseInt(n[1], 0), a;
			switch (r) {
				case "fpi":
					a = "FPI";
					break;
				default: a = L.default.capitalize(r);
			}
			t["WAL " + a] = i;
		}), !0) : !1;
	}
	parseIOTimings(e, t) {
		if (!/I\/O Timings:\s+(.*)\s*$/g.exec(e)) return !1;
		let n = /\b(shared\/local|shared|local|temp)((?:\s+(?:read|write)=\d+(?:\.\d+)?)+)/g, r = /(read|write)=(\d+(?:\.\d+)?)/g, i = [], a, o;
		for (; (a = n.exec(e)) !== null;) {
			let e = a[1], t = a[2], n = {
				scope: e,
				read: 0,
				write: 0
			};
			for (; (o = r.exec(t)) !== null;) n[o[1]] = parseFloat(o[2]);
			i.push(n);
		}
		let s = e.replace(n, ""), c = {
			scope: void 0,
			read: 0,
			write: 0
		}, l = !1;
		for (; (o = r.exec(s)) !== null;) c[o[1]] = parseFloat(o[2]), l = !0;
		l && i.push(c);
		let u = L.default.some(i, (e) => e.scope == "shared" || e.scope == "local"), d = L.default.some(i, (e) => e.scope == "shared/local");
		return u ? (t[J.SHARED_IO_READ_TIME] = 0, t[J.SHARED_IO_WRITE_TIME] = 0, t[J.LOCAL_IO_READ_TIME] = 0, t[J.LOCAL_IO_WRITE_TIME] = 0) : (t[J.IO_READ_TIME] = 0, t[J.IO_WRITE_TIME] = 0), (d || u) && (t[J.TEMP_IO_READ_TIME] = 0, t[J.TEMP_IO_WRITE_TIME] = 0), i.forEach((e) => {
			["read", "write"].forEach((n) => {
				let r = `IO_${L.default.upperCase(n)}_TIME`;
				e.scope && e.scope != "shared/local" && (r = L.default.upperCase(e.scope) + "_" + r);
				let i = J[r];
				t[i] = e[n];
			});
		}), !0;
	}
	parseOptions(e, t) {
		let n = /^(\s*)Options:\s+(.*)$/g.exec(e);
		if (n) {
			t.Options = {};
			let e = n[2].split(/\s*,\s*/), r;
			return L.default.each(e, (e) => {
				r = /^(\S*)\s+(.*)$/g.exec(e), r && t.Options && (t.Options[r[1]] = JSON.parse(r[2]));
			}), !0;
		}
		return !1;
	}
	parseTiming(e, t) {
		let n = /^(\s*)Timing:\s+(.*)$/g.exec(e);
		if (n) {
			t.Timing = {};
			let e = n[2].split(/\s*,\s*/), r;
			return L.default.each(e, (e) => {
				r = /^(\S*)\s+(.*)$/g.exec(e), r && t.Timing && (t.Timing[r[1]] = this.parseTime(r[2]));
			}), !0;
		}
		return !1;
	}
	parseTime(e) {
		return parseFloat(e.replace(/(\s*ms)$/, ""));
	}
	parseSettings(e, t) {
		let n = /^(\s*)Settings:\s*(.*)$/g.exec(e);
		if (n) {
			t.Settings = {};
			let e = dl(n[2], ","), r;
			return L.default.each(e, (e) => {
				r = /^(\S*)\s+=\s+(.*)$/g.exec(L.default.trim(e)), r && t.Settings && (t.Settings[r[1]] = r[2].replace(/'/g, ""));
			}), !0;
		}
		return !1;
	}
	parseSortGroups(e, t) {
		let n = /^\s*(Full-sort|Pre-sorted) Groups:\s+([0-9]*)\s+Sort Method[s]*:\s+(.*)\s+Average Memory:\s+(\S*)kB\s+Peak Memory:\s+(\S*)kB.*$/g.exec(e);
		if (n) {
			let e = {
				[tl.GROUP_COUNT]: parseInt(n[2], 0),
				[tl.SORT_METHODS_USED]: L.default.map(n[3].split(","), L.default.trim),
				[tl.SORT_SPACE_MEMORY]: {
					[nl.AVERAGE_SORT_SPACE_USED]: parseInt(n[4], 0),
					[nl.PEAK_SORT_SPACE_USED]: parseInt(n[5], 0)
				}
			};
			if (n[1] === "Full-sort") t[J.FULL_SORT_GROUPS] = e;
			else if (n[1] === "Pre-sorted") t[J.PRE_SORTED_GROUPS] = e;
			else throw Error("Unsupported sort groups method");
			return !0;
		}
		return !1;
	}
	calculateExclusives(e) {
		L.default.each([
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
			"IO_WRITE_TIME",
			"SHARED_IO_READ_TIME",
			"SHARED_IO_WRITE_TIME",
			"LOCAL_IO_READ_TIME",
			"LOCAL_IO_WRITE_TIME",
			"TEMP_IO_READ_TIME",
			"TEMP_IO_WRITE_TIME"
		], (t) => {
			let n = Number(L.default.sumBy(L.default.filter(e[J.PLANS], (e) => !e[J.SUBPLAN_NAME]), (e) => e[J[t]] || 0).toFixed(3)), r = J["EXCLUSIVE_" + t];
			e[r] = Number((e[J[t]] - n).toFixed(3));
		});
	}
	calculateIoTimingsAverage(e) {
		let t;
		t = L.default.isUndefined(e[J.TEMP_IO_READ_TIME]) ? { "": [
			"shared",
			"local",
			"temp"
		] } : L.default.isUndefined(e[J.IO_READ_TIME]) ? {
			shared: ["shared"],
			local: ["local"],
			temp: ["temp"]
		} : {
			"": ["shared", "local"],
			temp: ["temp"]
		};
		let n = ["read", "write"], r = ["read", "written"];
		L.default.forEach(t, (t, i) => {
			n.forEach((n, a) => {
				["exclusive_", ""].forEach((o) => {
					let s = `${o}${i ? i + "_" : ""}io_${n}_time`.toUpperCase(), c = `${o}average_${i ? i + "_" : ""}io_${n}_speed`.toUpperCase(), l = e[J[s]] || 0, u = r[a], d = L.default.sumBy(t, (t) => e[J[`${o}${t}_${u}_blocks`.toUpperCase()]] || 0), f = `${o}${u}_blocks`.toUpperCase();
					e[J[f]] = d, l && (e[J[c]] = Number((d / (l / 1e3)).toFixed(3)));
				});
			});
		}), n.forEach((n, i) => {
			["exclusive_", ""].forEach((a) => {
				let o = `${a}sum_io_${n}_time`.toUpperCase(), s = `${a}average_sum_io_${n}_speed`.toUpperCase(), c = 0, l = 0;
				L.default.forEach(t, (t, o) => {
					let s = `${a}${o ? o + "_" : ""}io_${n}_time`.toUpperCase();
					c += e[J[s]] || 0;
					let u = r[i];
					l += L.default.sumBy(t, (t) => e[J[`${a}${t}_${u}_blocks`.toUpperCase()]] || 0);
				}), e[J[o]] = Number(c.toFixed(3)), c && (e[J[s]] = Number((l / (c / 1e3)).toFixed(3)));
			});
		});
	}
	findOutputProperty(e) {
		let t = e.Plans;
		return t ? L.default.some(t, (e) => L.default.has(e, J.OUTPUT) || this.findOutputProperty(e)) : !1;
	}
	convertNodeType(e) {
		if (e[J.NODE_TYPE] == "Aggregate" && e[J.STRATEGY]) {
			let t = "";
			switch (e[J.STRATEGY]) {
				case "Sorted":
					t = "Group";
					break;
				case "Hashed":
					t = "Hash";
					break;
				case "Plain":
					t = "";
					break;
				default: console.error("Unsupported Aggregate Strategy");
			}
			e[J.NODE_TYPE] = t + "Aggregate";
		}
		e[J.NODE_TYPE] == "ModifyTable" && (e[J.NODE_TYPE] = e[J.OPERATION]);
	}
}();
function vl(e, t) {
	let n = [], r = (e, i, a, o) => {
		let s = [...i, e.nodeId], c = {
			node: e,
			path: s,
			branches: a,
			level: o
		};
		n.push(c), t.set(e.nodeId, c);
		let l = e.Plans ?? [];
		l.forEach((e, t) => {
			let n = t === l.length - 1;
			r(e, s, [...a, !n], o + 1);
		});
	};
	return r(e, [], [], 0), n;
}
function yl() {
	return {
		executionTime: NaN,
		planningTime: NaN,
		memoryUsed: NaN,
		optimizer: "",
		maxRows: NaN,
		maxCost: NaN,
		maxDuration: NaN,
		maxBlocks: {},
		maxIo: NaN,
		maxEstimateFactor: NaN,
		triggers: [],
		jitTime: NaN,
		serialization: {},
		settings: {}
	};
}
var Y = T({
	flat: [],
	stats: yl(),
	nodeById: /* @__PURE__ */ new Map(),
	parse(e, t) {
		Y.stats = yl(), Y.flat = [];
		let n = /* @__PURE__ */ new Map(), r;
		try {
			r = _l.fromSource(e);
		} catch {
			Y.plan = void 0;
			return;
		}
		Y.query = r["Query Text"] || t, Y.plan = _l.createPlan("", r, Y.query);
		let i = Y.plan.content;
		Y.stats = {
			executionTime: i["Execution Time"] || i["Total Runtime"] || NaN,
			planningTime: i["Planning Time"] || NaN,
			memoryUsed: i["Memory used"] || NaN,
			optimizer: i.Optimizer || "",
			maxRows: i.maxRows || NaN,
			maxCost: i.maxCost || NaN,
			maxDuration: i.maxDuration || NaN,
			maxBlocks: i.maxBlocks || {},
			maxIo: i.maxIo || NaN,
			maxEstimateFactor: i.maxEstimateFactor || NaN,
			triggers: i.Triggers || [],
			jitTime: i.JIT && i.JIT.Timing && i.JIT.Timing.Total || NaN,
			serialization: i.Serialization,
			settings: i.Settings
		};
		let a = [];
		a.push(vl(Y.plan.content.Plan, n)), L.default.each(Y.plan.ctes, (e) => {
			a.push(vl(e, n));
		}), Y.flat = a, Y.nodeById = n;
	}
}), bl = {
	key: 0,
	class: "plan-tree"
}, xl = /*@__PURE__*/ l({
	__name: "LevelDivider",
	props: {
		row: {},
		isSubplan: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		}
	},
	setup(n) {
		let r = n, s = f(pe), c = r.dense ? "" : "\xA0", l = `${c}│`, u = `${c}├`, d = `${c}└`, p = r.row.branches, m = p[p.length - 1] === !1, h = r.isSubplan ? m ? `${c} ` : l : m ? d : u;
		function g(e) {
			return s?.value === null ? !1 : e == y.value;
		}
		let v = t(() => s?.value === null ? !1 : r.row.path.includes(s?.value)), y = t(() => {
			if (s?.value === null) return;
			let e = Y.nodeById?.get(s?.value);
			return e ? e.level : void 0;
		});
		return (t, r) => j(p).length ? (C(), a("span", bl, [(C(!0), a(e, null, D(n.row.branches.slice(0, -1), (e, t) => (C(), a("span", {
			key: t,
			class: _(e && v.value && g(t) ? "text-body-emphasis" : j(s) ? "text-body-tertiary" : "text-body-secondary")
		}, A(e ? l : ` ${j(c)}`), 3))), 128)), o("span", { class: _(v.value && (j(s) == n.row.node.nodeId || y.value == n.row.level - 1) ? "text-body-emphasis" : j(s) ? "text-body-tertiary" : "text-body-secondary") }, A(j(s) == n.row.node.nodeId ? `${j(c)}▶` : j(h)), 3)])) : i("", !0);
	}
}), Sl = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Cl = /*#__PURE__*/ Sl(xl, [["__scopeId", "data-v-83070b1c"]]), wl = { class: "table-borderless" }, Tl = { class: "text-nowrap p-0" }, El = { class: "p-0 ps-1" }, Dl = { class: "table-borderless" }, Ol = { class: "p-0 ps-1" }, kl = /* @__PURE__ */ l({
	__name: "SortGroup",
	props: { sortGroup: {} },
	setup(t) {
		return (n, r) => (C(), a("div", null, [
			s("\n    Count: " + A(t.sortGroup["Group Count"]) + " ", 1),
			r[6] ||= o("br", null, null, -1),
			r[7] ||= s(),
			o("table", wl, [o("tbody", null, [o("tr", null, [
				o("td", Tl, [
					r[0] ||= s("\n            Sort Method", -1),
					t.sortGroup["Sort Methods Used"].length > 1 ? (C(), a(e, { key: 0 }, [s("s")], 64)) : i("", !0),
					r[1] ||= s(":\n          ", -1)
				]),
				r[2] ||= s(),
				o("td", El, A(j(iu)(t.sortGroup["Sort Methods Used"])), 1)
			])])]),
			r[8] ||= s(),
			o("table", Dl, [o("tbody", null, [o("tr", null, [
				r[4] ||= o("td", { class: "p-0" }, "Memory:", -1),
				r[5] ||= s(),
				o("td", Ol, [
					s("\n            Average:\n            " + A(j(Hl)(t.sortGroup["Sort Space Memory"]["Average Sort Space Used"])) + " ", 1),
					r[3] ||= o("br", null, null, -1),
					s("\n            Peak:\n            " + A(j(Hl)(t.sortGroup["Sort Space Memory"]["Peak Sort Space Used"])), 1)
				])
			])])])
		]));
	}
}), Al = { class: "table table-sm table-borderless" }, jl = { class: "text-end" }, Ml = { class: "text-end" }, Nl = { class: "text-end" }, Pl = /* @__PURE__ */ l({
	__name: "JitDetails",
	props: { jit: {} },
	setup(t) {
		let n = t;
		return (t, r) => (C(), a("table", Al, [o("tbody", null, [
			o("tr", null, [
				r[0] ||= o("th", null, "Functions", -1),
				r[1] ||= s(),
				o("td", jl, A(n.jit.Functions), 1)
			]),
			r[4] ||= s(),
			r[5] ||= o("tr", null, [o("th", { colspan: "2" }, "Options")], -1),
			r[6] ||= s(),
			(C(!0), a(e, null, D(n.jit.Options, (e, t) => (C(), a("tr", { key: t }, [
				o("td", null, "\xA0\xA0" + A(t), 1),
				r[2] ||= s(),
				o("td", Ml, [s(A(e ? "✓" : "✗") + " ", 1), o("small", null, "(" + A(e) + ")", 1)])
			]))), 128)),
			r[7] ||= s(),
			r[8] ||= o("tr", null, [o("th", { colspan: "2" }, "Timing")], -1),
			r[9] ||= s(),
			(C(!0), a(e, null, D(n.jit.Timing, (e, t) => (C(), a("tr", { key: t }, [
				o("td", null, "\xA0\xA0" + A(t), 1),
				r[3] ||= s(),
				o("td", Nl, A(e) + " ms", 1)
			]))), 128))
		])]));
	}
}), Fl = (/* @__PURE__ */ le((/* @__PURE__ */ se(((e, t) => {
	function n(e) {
		return e instanceof Map ? e.clear = e.delete = e.set = function() {
			throw Error("map is read-only");
		} : e instanceof Set && (e.add = e.clear = e.delete = function() {
			throw Error("set is read-only");
		}), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
			let r = e[t], i = typeof r;
			(i === "object" || i === "function") && !Object.isFrozen(r) && n(r);
		}), e;
	}
	var r = class {
		constructor(e) {
			e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
		}
		ignoreMatch() {
			this.isMatchIgnored = !0;
		}
	};
	function i(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	}
	function a(e, ...t) {
		let n = Object.create(null);
		for (let t in e) n[t] = e[t];
		return t.forEach(function(e) {
			for (let t in e) n[t] = e[t];
		}), n;
	}
	var o = "</span>", s = (e) => !!e.scope, c = (e, { prefix: t }) => {
		if (e.startsWith("language:")) return e.replace("language:", "language-");
		if (e.includes(".")) {
			let n = e.split(".");
			return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
		}
		return `${t}${e}`;
	}, l = class {
		constructor(e, t) {
			this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
		}
		addText(e) {
			this.buffer += i(e);
		}
		openNode(e) {
			if (!s(e)) return;
			let t = c(e.scope, { prefix: this.classPrefix });
			this.span(t);
		}
		closeNode(e) {
			s(e) && (this.buffer += o);
		}
		value() {
			return this.buffer;
		}
		span(e) {
			this.buffer += `<span class="${e}">`;
		}
	}, u = (e = {}) => {
		let t = { children: [] };
		return Object.assign(t, e), t;
	}, d = class e {
		constructor() {
			this.rootNode = u(), this.stack = [this.rootNode];
		}
		get top() {
			return this.stack[this.stack.length - 1];
		}
		get root() {
			return this.rootNode;
		}
		add(e) {
			this.top.children.push(e);
		}
		openNode(e) {
			let t = u({ scope: e });
			this.add(t), this.stack.push(t);
		}
		closeNode() {
			if (this.stack.length > 1) return this.stack.pop();
		}
		closeAllNodes() {
			for (; this.closeNode(););
		}
		toJSON() {
			return JSON.stringify(this.rootNode, null, 4);
		}
		walk(e) {
			return this.constructor._walk(e, this.rootNode);
		}
		static _walk(e, t) {
			return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
		}
		static _collapse(t) {
			typeof t != "string" && t.children && (t.children.every((e) => typeof e == "string") ? t.children = [t.children.join("")] : t.children.forEach((t) => {
				e._collapse(t);
			}));
		}
	}, f = class extends d {
		constructor(e) {
			super(), this.options = e;
		}
		addText(e) {
			e !== "" && this.add(e);
		}
		startScope(e) {
			this.openNode(e);
		}
		endScope() {
			this.closeNode();
		}
		__addSublanguage(e, t) {
			let n = e.root;
			t && (n.scope = `language:${t}`), this.add(n);
		}
		toHTML() {
			return new l(this, this.options).value();
		}
		finalize() {
			return this.closeAllNodes(), !0;
		}
	};
	function p(e) {
		return e ? typeof e == "string" ? e : e.source : null;
	}
	function m(e) {
		return _("(?=", e, ")");
	}
	function h(e) {
		return _("(?:", e, ")*");
	}
	function g(e) {
		return _("(?:", e, ")?");
	}
	function _(...e) {
		return e.map((e) => p(e)).join("");
	}
	function v(e) {
		let t = e[e.length - 1];
		return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
	}
	function y(...e) {
		return "(" + (v(e).capture ? "" : "?:") + e.map((e) => p(e)).join("|") + ")";
	}
	function b(e) {
		return RegExp(e.toString() + "|").exec("").length - 1;
	}
	function x(e, t) {
		let n = e && e.exec(t);
		return n && n.index === 0;
	}
	var S = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
	function C(e, { joinWith: t }) {
		let n = 0;
		return e.map((e) => {
			n += 1;
			let t = n, r = p(e), i = "";
			for (; r.length > 0;) {
				let e = S.exec(r);
				if (!e) {
					i += r;
					break;
				}
				i += r.substring(0, e.index), r = r.substring(e.index + e[0].length), e[0][0] === "\\" && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], e[0] === "(" && n++);
			}
			return i;
		}).map((e) => `(${e})`).join(t);
	}
	var w = /\b\B/, T = "[a-zA-Z]\\w*", E = "[a-zA-Z_]\\w*", D = "\\b\\d+(\\.\\d+)?", O = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ee = "\\b(0b[01]+)", k = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", A = (e = {}) => {
		let t = /^#![ ]*\//;
		return e.binary && (e.begin = _(t, /.*\b/, e.binary, /\b.*/)), a({
			scope: "meta",
			begin: t,
			end: /$/,
			relevance: 0,
			"on:begin": (e, t) => {
				e.index !== 0 && t.ignoreMatch();
			}
		}, e);
	}, j = {
		begin: "\\\\[\\s\\S]",
		relevance: 0
	}, te = {
		scope: "string",
		begin: "'",
		end: "'",
		illegal: "\\n",
		contains: [j]
	}, M = {
		scope: "string",
		begin: "\"",
		end: "\"",
		illegal: "\\n",
		contains: [j]
	}, N = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, P = function(e, t, n = {}) {
		let r = a({
			scope: "comment",
			begin: e,
			end: t,
			contains: []
		}, n);
		r.contains.push({
			scope: "doctag",
			begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		let i = y("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
		return r.contains.push({ begin: _(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
	}, F = P("//", "$"), I = P("/\\*", "\\*/"), ne = P("#", "$"), re = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		APOS_STRING_MODE: te,
		BACKSLASH_ESCAPE: j,
		BINARY_NUMBER_MODE: {
			scope: "number",
			begin: ee,
			relevance: 0
		},
		BINARY_NUMBER_RE: ee,
		COMMENT: P,
		C_BLOCK_COMMENT_MODE: I,
		C_LINE_COMMENT_MODE: F,
		C_NUMBER_MODE: {
			scope: "number",
			begin: O,
			relevance: 0
		},
		C_NUMBER_RE: O,
		END_SAME_AS_BEGIN: function(e) {
			return Object.assign(e, {
				"on:begin": (e, t) => {
					t.data._beginMatch = e[1];
				},
				"on:end": (e, t) => {
					t.data._beginMatch !== e[1] && t.ignoreMatch();
				}
			});
		},
		HASH_COMMENT_MODE: ne,
		IDENT_RE: T,
		MATCH_NOTHING_RE: w,
		METHOD_GUARD: {
			begin: "\\.\\s*[a-zA-Z_]\\w*",
			relevance: 0
		},
		NUMBER_MODE: {
			scope: "number",
			begin: D,
			relevance: 0
		},
		NUMBER_RE: D,
		PHRASAL_WORDS_MODE: N,
		QUOTE_STRING_MODE: M,
		REGEXP_MODE: {
			scope: "regexp",
			begin: /\/(?=[^/\n]*\/)/,
			end: /\/[gimuy]*/,
			contains: [j, {
				begin: /\[/,
				end: /\]/,
				relevance: 0,
				contains: [j]
			}]
		},
		RE_STARTERS_RE: k,
		SHEBANG: A,
		TITLE_MODE: {
			scope: "title",
			begin: T,
			relevance: 0
		},
		UNDERSCORE_IDENT_RE: E,
		UNDERSCORE_TITLE_MODE: {
			scope: "title",
			begin: E,
			relevance: 0
		}
	});
	function ie(e, t) {
		e.input[e.index - 1] === "." && t.ignoreMatch();
	}
	function ae(e, t) {
		e.className !== void 0 && (e.scope = e.className, delete e.className);
	}
	function oe(e, t) {
		t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = ie, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
	}
	function se(e, t) {
		Array.isArray(e.illegal) && (e.illegal = y(...e.illegal));
	}
	function ce(e, t) {
		if (e.match) {
			if (e.begin || e.end) throw Error("begin & end are not supported with match");
			e.begin = e.match, delete e.match;
		}
	}
	function le(e, t) {
		e.relevance === void 0 && (e.relevance = 1);
	}
	var L = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw Error("beforeMatch cannot be used with starts");
		let n = Object.assign({}, e);
		Object.keys(e).forEach((t) => {
			delete e[t];
		}), e.keywords = n.keywords, e.begin = _(n.beforeMatch, m(n.begin)), e.starts = {
			relevance: 0,
			contains: [Object.assign(n, { endsParent: !0 })]
		}, e.relevance = 0, delete n.beforeMatch;
	}, ue = [
		"of",
		"and",
		"for",
		"in",
		"not",
		"or",
		"if",
		"then",
		"parent",
		"list",
		"value"
	], de = "keyword";
	function fe(e, t, n = de) {
		let r = Object.create(null);
		return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach(function(n) {
			Object.assign(r, fe(e[n], t, n));
		}), r;
		function i(e, n) {
			t && (n = n.map((e) => e.toLowerCase())), n.forEach(function(t) {
				let n = t.split("|");
				r[n[0]] = [e, pe(n[0], n[1])];
			});
		}
	}
	function pe(e, t) {
		return t ? Number(t) : +!me(e);
	}
	function me(e) {
		return ue.includes(e.toLowerCase());
	}
	var he = {}, ge = (e) => {
		console.error(e);
	}, _e = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	}, R = (e, t) => {
		he[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), he[`${e}/${t}`] = !0);
	}, ve = /* @__PURE__ */ Error();
	function ye(e, t, { key: n }) {
		let r = 0, i = e[n], a = {}, o = {};
		for (let e = 1; e <= t.length; e++) o[e + r] = i[e], a[e + r] = !0, r += b(t[e - 1]);
		e[n] = o, e[n]._emit = a, e[n]._multi = !0;
	}
	function be(e) {
		if (Array.isArray(e.begin)) {
			if (e.skip || e.excludeBegin || e.returnBegin) throw ge("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ve;
			if (typeof e.beginScope != "object" || e.beginScope === null) throw ge("beginScope must be object"), ve;
			ye(e, e.begin, { key: "beginScope" }), e.begin = C(e.begin, { joinWith: "" });
		}
	}
	function xe(e) {
		if (Array.isArray(e.end)) {
			if (e.skip || e.excludeEnd || e.returnEnd) throw ge("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ve;
			if (typeof e.endScope != "object" || e.endScope === null) throw ge("endScope must be object"), ve;
			ye(e, e.end, { key: "endScope" }), e.end = C(e.end, { joinWith: "" });
		}
	}
	function Se(e) {
		e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
	}
	function Ce(e) {
		Se(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), be(e), xe(e);
	}
	function we(e) {
		function t(t, n) {
			return new RegExp(p(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
		}
		class n {
			constructor() {
				this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
			}
			addRule(e, t) {
				t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += b(e) + 1;
			}
			compile() {
				this.regexes.length === 0 && (this.exec = () => null);
				let e = this.regexes.map((e) => e[1]);
				this.matcherRe = t(C(e, { joinWith: "|" }), !0), this.lastIndex = 0;
			}
			exec(e) {
				this.matcherRe.lastIndex = this.lastIndex;
				let t = this.matcherRe.exec(e);
				if (!t) return null;
				let n = t.findIndex((e, t) => t > 0 && e !== void 0), r = this.matchIndexes[n];
				return t.splice(0, n), Object.assign(t, r);
			}
		}
		class r {
			constructor() {
				this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
			}
			getMatcher(e) {
				if (this.multiRegexes[e]) return this.multiRegexes[e];
				let t = new n();
				return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t;
			}
			resumingScanAtSamePosition() {
				return this.regexIndex !== 0;
			}
			considerAll() {
				this.regexIndex = 0;
			}
			addRule(e, t) {
				this.rules.push([e, t]), t.type === "begin" && this.count++;
			}
			exec(e) {
				let t = this.getMatcher(this.regexIndex);
				t.lastIndex = this.lastIndex;
				let n = t.exec(e);
				if (this.resumingScanAtSamePosition() && !(n && n.index === this.lastIndex)) {
					let t = this.getMatcher(0);
					t.lastIndex = this.lastIndex + 1, n = t.exec(e);
				}
				return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
			}
		}
		function i(e) {
			let t = new r();
			return e.contains.forEach((e) => t.addRule(e.begin, {
				rule: e,
				type: "begin"
			})), e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }), e.illegal && t.addRule(e.illegal, { type: "illegal" }), t;
		}
		function o(n, r) {
			let a = n;
			if (n.isCompiled) return a;
			[
				ae,
				ce,
				Ce,
				L
			].forEach((e) => e(n, r)), e.compilerExtensions.forEach((e) => e(n, r)), n.__beforeBegin = null, [
				oe,
				se,
				le
			].forEach((e) => e(n, r)), n.isCompiled = !0;
			let s = null;
			return typeof n.keywords == "object" && n.keywords.$pattern && (n.keywords = Object.assign({}, n.keywords), s = n.keywords.$pattern, delete n.keywords.$pattern), s ||= /\w+/, n.keywords &&= fe(n.keywords, e.case_insensitive), a.keywordPatternRe = t(s, !0), r && (n.begin ||= /\B|\b/, a.beginRe = t(a.begin), !n.end && !n.endsWithParent && (n.end = /\B|\b/), n.end && (a.endRe = t(a.end)), a.terminatorEnd = p(a.end) || "", n.endsWithParent && r.terminatorEnd && (a.terminatorEnd += (n.end ? "|" : "") + r.terminatorEnd)), n.illegal && (a.illegalRe = t(n.illegal)), n.contains ||= [], n.contains = [].concat(...n.contains.map(function(e) {
				return Ee(e === "self" ? n : e);
			})), n.contains.forEach(function(e) {
				o(e, a);
			}), n.starts && o(n.starts, r), a.matcher = i(a), a;
		}
		if (e.compilerExtensions ||= [], e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
		return e.classNameAliases = a(e.classNameAliases || {}), o(e);
	}
	function Te(e) {
		return e ? e.endsWithParent || Te(e.starts) : !1;
	}
	function Ee(e) {
		return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
			return a(e, { variants: null }, t);
		})), e.cachedVariants ? e.cachedVariants : Te(e) ? a(e, { starts: e.starts ? a(e.starts) : null }) : Object.isFrozen(e) ? a(e) : e;
	}
	var De = "11.11.1", Oe = class extends Error {
		constructor(e, t) {
			super(e), this.name = "HTMLInjectionError", this.html = t;
		}
	}, ke = i, Ae = a, je = Symbol("nomatch"), Me = 7, Ne = function(e) {
		let t = Object.create(null), i = Object.create(null), a = [], o = !0, s = "Could not find the language '{}', did you forget to load/include a language module?", c = {
			disableAutodetect: !0,
			name: "Plain text",
			contains: []
		}, l = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: "hljs-",
			cssSelector: "pre code",
			languages: null,
			__emitter: f
		};
		function u(e) {
			return l.noHighlightRe.test(e);
		}
		function d(e) {
			let t = e.className + " ";
			t += e.parentNode ? e.parentNode.className : "";
			let n = l.languageDetectRe.exec(t);
			if (n) {
				let t = te(n[1]);
				return t || (_e(s.replace("{}", n[1])), _e("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight";
			}
			return t.split(/\s+/).find((e) => u(e) || te(e));
		}
		function p(e, t, n) {
			let r = "", i = "";
			typeof t == "object" ? (r = e, n = t.ignoreIllegals, i = t.language) : (R("10.7.0", "highlight(lang, code, ...args) has been deprecated."), R("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t), n === void 0 && (n = !0);
			let a = {
				code: r,
				language: i
			};
			ne("before:highlight", a);
			let o = a.result ? a.result : v(a.language, a.code, n);
			return o.code = a.code, ne("after:highlight", o), o;
		}
		function v(e, n, i, a) {
			let c = Object.create(null);
			function u(e, t) {
				return e.keywords[t];
			}
			function d() {
				if (!k.keywords) {
					j.addText(M);
					return;
				}
				let e = 0;
				k.keywordPatternRe.lastIndex = 0;
				let t = k.keywordPatternRe.exec(M), n = "";
				for (; t;) {
					n += M.substring(e, t.index);
					let r = D.case_insensitive ? t[0].toLowerCase() : t[0], i = u(k, r);
					if (i) {
						let [e, a] = i;
						if (j.addText(n), n = "", c[r] = (c[r] || 0) + 1, c[r] <= Me && (N += a), e.startsWith("_")) n += t[0];
						else {
							let n = D.classNameAliases[e] || e;
							m(t[0], n);
						}
					} else n += t[0];
					e = k.keywordPatternRe.lastIndex, t = k.keywordPatternRe.exec(M);
				}
				n += M.substring(e), j.addText(n);
			}
			function f() {
				if (M === "") return;
				let e = null;
				if (typeof k.subLanguage == "string") {
					if (!t[k.subLanguage]) {
						j.addText(M);
						return;
					}
					e = v(k.subLanguage, M, !0, A[k.subLanguage]), A[k.subLanguage] = e._top;
				} else e = S(M, k.subLanguage.length ? k.subLanguage : null);
				k.relevance > 0 && (N += e.relevance), j.__addSublanguage(e._emitter, e.language);
			}
			function p() {
				k.subLanguage == null ? d() : f(), M = "";
			}
			function m(e, t) {
				e !== "" && (j.startScope(t), j.addText(e), j.endScope());
			}
			function h(e, t) {
				let n = 1, r = t.length - 1;
				for (; n <= r;) {
					if (!e._emit[n]) {
						n++;
						continue;
					}
					let r = D.classNameAliases[e[n]] || e[n], i = t[n];
					r ? m(i, r) : (M = i, d(), M = ""), n++;
				}
			}
			function g(e, t) {
				return e.scope && typeof e.scope == "string" && j.openNode(D.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (m(M, D.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), M = "") : e.beginScope._multi && (h(e.beginScope, t), M = "")), k = Object.create(e, { parent: { value: k } }), k;
			}
			function _(e, t, n) {
				let i = x(e.endRe, n);
				if (i) {
					if (e["on:end"]) {
						let n = new r(e);
						e["on:end"](t, n), n.isMatchIgnored && (i = !1);
					}
					if (i) {
						for (; e.endsParent && e.parent;) e = e.parent;
						return e;
					}
				}
				if (e.endsWithParent) return _(e.parent, t, n);
			}
			function y(e) {
				return k.matcher.regexIndex === 0 ? (M += e[0], 1) : (I = !0, 0);
			}
			function b(e) {
				let t = e[0], n = e.rule, i = new r(n), a = [n.__beforeBegin, n["on:begin"]];
				for (let n of a) if (n && (n(e, i), i.isMatchIgnored)) return y(t);
				return n.skip ? M += t : (n.excludeBegin && (M += t), p(), !n.returnBegin && !n.excludeBegin && (M = t)), g(n, e), n.returnBegin ? 0 : t.length;
			}
			function C(e) {
				let t = e[0], r = n.substring(e.index), i = _(k, e, r);
				if (!i) return je;
				let a = k;
				k.endScope && k.endScope._wrap ? (p(), m(t, k.endScope._wrap)) : k.endScope && k.endScope._multi ? (p(), h(k.endScope, e)) : a.skip ? M += t : (a.returnEnd || a.excludeEnd || (M += t), p(), a.excludeEnd && (M = t));
				do
					k.scope && j.closeNode(), !k.skip && !k.subLanguage && (N += k.relevance), k = k.parent;
				while (k !== i.parent);
				return i.starts && g(i.starts, e), a.returnEnd ? 0 : t.length;
			}
			function w() {
				let e = [];
				for (let t = k; t !== D; t = t.parent) t.scope && e.unshift(t.scope);
				e.forEach((e) => j.openNode(e));
			}
			let T = {};
			function E(t, r) {
				let a = r && r[0];
				if (M += t, a == null) return p(), 0;
				if (T.type === "begin" && r.type === "end" && T.index === r.index && a === "") {
					if (M += n.slice(r.index, r.index + 1), !o) {
						let t = /* @__PURE__ */ Error(`0 width match regex (${e})`);
						throw t.languageName = e, t.badRule = T.rule, t;
					}
					return 1;
				}
				if (T = r, r.type === "begin") return b(r);
				if (r.type === "illegal" && !i) {
					let e = /* @__PURE__ */ Error("Illegal lexeme \"" + a + "\" for mode \"" + (k.scope || "<unnamed>") + "\"");
					throw e.mode = k, e;
				} else if (r.type === "end") {
					let e = C(r);
					if (e !== je) return e;
				}
				if (r.type === "illegal" && a === "") return M += "\n", 1;
				if (F > 1e5 && F > r.index * 3) throw /* @__PURE__ */ Error("potential infinite loop, way more iterations than matches");
				return M += a, a.length;
			}
			let D = te(e);
			if (!D) throw ge(s.replace("{}", e)), Error("Unknown language: \"" + e + "\"");
			let O = we(D), ee = "", k = a || O, A = {}, j = new l.__emitter(l);
			w();
			let M = "", N = 0, P = 0, F = 0, I = !1;
			try {
				if (D.__emitTokens) D.__emitTokens(n, j);
				else {
					for (k.matcher.considerAll();;) {
						F++, I ? I = !1 : k.matcher.considerAll(), k.matcher.lastIndex = P;
						let e = k.matcher.exec(n);
						if (!e) break;
						let t = E(n.substring(P, e.index), e);
						P = e.index + t;
					}
					E(n.substring(P));
				}
				return j.finalize(), ee = j.toHTML(), {
					language: e,
					value: ee,
					relevance: N,
					illegal: !1,
					_emitter: j,
					_top: k
				};
			} catch (t) {
				if (t.message && t.message.includes("Illegal")) return {
					language: e,
					value: ke(n),
					illegal: !0,
					relevance: 0,
					_illegalBy: {
						message: t.message,
						index: P,
						context: n.slice(P - 100, P + 100),
						mode: t.mode,
						resultSoFar: ee
					},
					_emitter: j
				};
				if (o) return {
					language: e,
					value: ke(n),
					illegal: !1,
					relevance: 0,
					errorRaised: t,
					_emitter: j,
					_top: k
				};
				throw t;
			}
		}
		function b(e) {
			let t = {
				value: ke(e),
				illegal: !1,
				relevance: 0,
				_top: c,
				_emitter: new l.__emitter(l)
			};
			return t._emitter.addText(e), t;
		}
		function S(e, n) {
			n = n || l.languages || Object.keys(t);
			let r = b(e), i = n.filter(te).filter(N).map((t) => v(t, e, !1));
			i.unshift(r);
			let [a, o] = i.sort((e, t) => {
				if (e.relevance !== t.relevance) return t.relevance - e.relevance;
				if (e.language && t.language) {
					if (te(e.language).supersetOf === t.language) return 1;
					if (te(t.language).supersetOf === e.language) return -1;
				}
				return 0;
			}), s = a;
			return s.secondBest = o, s;
		}
		function C(e, t, n) {
			let r = t && i[t] || n;
			e.classList.add("hljs"), e.classList.add(`language-${r}`);
		}
		function w(e) {
			let t = null, n = d(e);
			if (u(n)) return;
			if (ne("before:highlightElement", {
				el: e,
				language: n
			}), e.dataset.highlighted) {
				console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
				return;
			}
			if (e.children.length > 0 && (l.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), l.throwUnescapedHTML)) throw new Oe("One of your code blocks includes unescaped HTML.", e.innerHTML);
			t = e;
			let r = t.textContent, i = n ? p(r, {
				language: n,
				ignoreIllegals: !0
			}) : S(r);
			e.innerHTML = i.value, e.dataset.highlighted = "yes", C(e, n, i.language), e.result = {
				language: i.language,
				re: i.relevance,
				relevance: i.relevance
			}, i.secondBest && (e.secondBest = {
				language: i.secondBest.language,
				relevance: i.secondBest.relevance
			}), ne("after:highlightElement", {
				el: e,
				result: i,
				text: r
			});
		}
		function T(e) {
			l = Ae(l, e);
		}
		let E = () => {
			ee(), R("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
		};
		function D() {
			ee(), R("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
		}
		let O = !1;
		function ee() {
			function e() {
				ee();
			}
			if (document.readyState === "loading") {
				O || window.addEventListener("DOMContentLoaded", e, !1), O = !0;
				return;
			}
			document.querySelectorAll(l.cssSelector).forEach(w);
		}
		function k(n, r) {
			let i = null;
			try {
				i = r(e);
			} catch (e) {
				if (ge("Language definition for '{}' could not be registered.".replace("{}", n)), o) ge(e);
				else throw e;
				i = c;
			}
			i.name ||= n, t[n] = i, i.rawDefinition = r.bind(null, e), i.aliases && M(i.aliases, { languageName: n });
		}
		function A(e) {
			delete t[e];
			for (let t of Object.keys(i)) i[t] === e && delete i[t];
		}
		function j() {
			return Object.keys(t);
		}
		function te(e) {
			return e = (e || "").toLowerCase(), t[e] || t[i[e]];
		}
		function M(e, { languageName: t }) {
			typeof e == "string" && (e = [e]), e.forEach((e) => {
				i[e.toLowerCase()] = t;
			});
		}
		function N(e) {
			let t = te(e);
			return t && !t.disableAutodetect;
		}
		function P(e) {
			e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = (t) => {
				e["before:highlightBlock"](Object.assign({ block: t.el }, t));
			}), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = (t) => {
				e["after:highlightBlock"](Object.assign({ block: t.el }, t));
			});
		}
		function F(e) {
			P(e), a.push(e);
		}
		function I(e) {
			let t = a.indexOf(e);
			t !== -1 && a.splice(t, 1);
		}
		function ne(e, t) {
			let n = e;
			a.forEach(function(e) {
				e[n] && e[n](t);
			});
		}
		function ie(e) {
			return R("10.7.0", "highlightBlock will be removed entirely in v12.0"), R("10.7.0", "Please use highlightElement now."), w(e);
		}
		Object.assign(e, {
			highlight: p,
			highlightAuto: S,
			highlightAll: ee,
			highlightElement: w,
			highlightBlock: ie,
			configure: T,
			initHighlighting: E,
			initHighlightingOnLoad: D,
			registerLanguage: k,
			unregisterLanguage: A,
			listLanguages: j,
			getLanguage: te,
			registerAliases: M,
			autoDetection: N,
			inherit: Ae,
			addPlugin: F,
			removePlugin: I
		}), e.debugMode = function() {
			o = !1;
		}, e.safeMode = function() {
			o = !0;
		}, e.versionString = De, e.regex = {
			concat: _,
			lookahead: m,
			either: y,
			optional: g,
			anyNumberOfTimes: h
		};
		for (let e in re) typeof re[e] == "object" && n(re[e]);
		return Object.assign(e, re), e;
	}, Pe = Ne({});
	Pe.newInstance = () => Ne({}), t.exports = Pe, Pe.HighlightJS = Pe, Pe.default = Pe;
})))())).default;
//#endregion
//#region node_modules/highlight.js/es/languages/pgsql.js
function Il(e) {
	let t = e.COMMENT("--", "$"), n = "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$", r = "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10".split(" ").map(function(e) {
		return e.split("|")[0];
	}).join("|"), i = "ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST".split(" ").map(function(e) {
		return e.split("|")[0];
	}).join("|");
	return {
		name: "PostgreSQL",
		aliases: ["postgres", "postgresql"],
		supersetOf: "sql",
		case_insensitive: !0,
		keywords: {
			keyword: "ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS ",
			built_in: "CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED "
		},
		illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
		contains: [
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
			{ begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/ },
			{
				begin: /\bINCLUDE\s*\(/,
				keywords: "INCLUDE"
			},
			{ begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ },
			{ begin: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/ },
			{
				begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/,
				relevance: 10
			},
			{
				begin: /\bEXTRACT\s*\(/,
				end: /\bFROM\b/,
				returnEnd: !0,
				keywords: { type: "CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR" }
			},
			{
				begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/,
				keywords: { keyword: "NAME" }
			},
			{
				begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
				keywords: { keyword: "DOCUMENT CONTENT" }
			},
			{
				beginKeywords: "CACHE INCREMENT MAXVALUE MINVALUE",
				end: e.C_NUMBER_RE,
				returnEnd: !0,
				keywords: "BY CACHE INCREMENT MAXVALUE MINVALUE"
			},
			{
				className: "type",
				begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/
			},
			{
				className: "type",
				begin: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/
			},
			{
				begin: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
				keywords: {
					keyword: "RETURNS",
					type: "LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER"
				}
			},
			{ begin: "\\b(" + i + ")\\s*\\(" },
			{ begin: "\\.(" + r + ")\\b" },
			{
				begin: "\\b(" + r + ")\\s+PATH\\b",
				keywords: {
					keyword: "PATH",
					type: "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 "
				}
			},
			{
				className: "type",
				begin: "\\b(" + r + ")\\b"
			},
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
			e.END_SAME_AS_BEGIN({
				begin: n,
				end: n,
				contains: [{
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
				}]
			}),
			{
				begin: "\"",
				end: "\"",
				contains: [{ begin: "\"\"" }]
			},
			e.C_NUMBER_MODE,
			e.C_BLOCK_COMMENT_MODE,
			t,
			{
				className: "meta",
				variants: [
					{
						begin: "%(ROW)?TYPE",
						relevance: 10
					},
					{ begin: "\\$\\d+" },
					{
						begin: "^#\\w",
						end: "$"
					}
				]
			},
			{
				className: "symbol",
				begin: "<<\\s*[a-zA-Z_][a-zA-Z_0-9$]*\\s*>>",
				relevance: 10
			}
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/json.js
function Ll(e) {
	let t = {
		className: "attr",
		begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
		relevance: 1.01
	}, n = {
		match: /[{}[\],:]/,
		className: "punctuation",
		relevance: 0
	}, r = [
		"true",
		"false",
		"null"
	], i = {
		scope: "literal",
		beginKeywords: r.join(" ")
	};
	return {
		name: "JSON",
		aliases: ["jsonc"],
		keywords: { literal: r },
		contains: [
			t,
			n,
			e.QUOTE_STRING_MODE,
			i,
			e.C_NUMBER_MODE,
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE
		],
		illegal: "\\S"
	};
}
Fl.registerLanguage("pgsql", Il), Fl.registerLanguage("json", Ll);
function X(e) {
	if (e === void 0) return "-";
	if (typeof e != "number") throw Error(`Expected number, got ${typeof e}`);
	e < 0 && console.error("\n      Duration is negative. This is probably a bug.\n      Please report it at https://github.com/dalibo/pev2.\n    ");
	let t = [], n = 1e3 * 60 * 60 * 24, r = Math.floor(e / n);
	r && t.push(r + "d");
	let i = e % n;
	n /= 24;
	let a = Math.floor(i / n);
	a && t.push(a + "h"), i %= n, n /= 60;
	let o = Math.floor(i / n);
	o && t.push(o + "m"), i %= n, n /= 60;
	let s = Math.floor(i / n);
	s && t.push(s + "s"), i %= n;
	let c = parseFloat(i.toPrecision(3));
	return c && t.push(c.toLocaleString() + "ms"), t.length === 0 ? "0ms" : t.slice(0, 2).join(" ");
}
function Rl(e) {
	return e === void 0 ? "N/A" : e.toLocaleString(void 0, { minimumFractionDigits: 2 });
}
function zl(e) {
	return e === void 0 ? "N/A" : e.toLocaleString();
}
function Bl(e) {
	return e === void 0 ? "N/A" : e.toLocaleString();
}
function Vl(e) {
	return e === void 0 ? "N/A" : `${parseFloat(e.toPrecision(2)).toLocaleString()}&nbsp;&times;`;
}
function Hl(e) {
	return Wl(e * 1024);
}
function Ul(e) {
	return Wl(e);
}
function Wl(e) {
	if (e === 0) return "0 kB";
	let t = 1024, n = [
		"B",
		"kB",
		"MB",
		"GB",
		"TB",
		"PB",
		"EB",
		"ZB",
		"YB"
	], r = Math.floor(Math.log(e) / Math.log(t)), i = e / t ** r;
	return `${i % 1 == 0 ? i.toLocaleString() : parseFloat(i.toPrecision(2)).toLocaleString()} ${n[r]}`;
}
function Gl(e) {
	return e ? Wl(e * 8 * 1024) : "";
}
function Kl(e, t = !1) {
	if (t = !!t, !e) return "";
	let n = e.toLocaleString();
	return t && (n += `<br><small>${Gl(e)}</small>`), n;
}
function ql(e) {
	return Kl(e, !0);
}
function Jl(e) {
	return isNaN(e) ? "-" : L.default.round(e * 100) + "%";
}
function Yl(e) {
	if (e == null) return "";
	let t = typeof e == "string" ? e.split(/\s*,\s*/) : e;
	if (!Array.isArray(t)) throw Error(`Expected string or array of strings, got ${typeof e}`);
	return `<ul class="list-unstyled mb-0">${t.map((e) => `<li>${L.default.escape(e)}</li>`).join("")}</ul>`;
}
function Xl(e) {
	return n(kl, { sortGroup: e }).mount(document.createElement("div")).$el.outerHTML;
}
function Zl(e) {
	return e ? Gl(e) + "/s" : "";
}
function Ql(e) {
	return n(Pl, { jit: e }).mount(document.createElement("div")).$el.outerHTML;
}
function $l(e) {
	return e ? "yes" : "no";
}
function eu(e) {
	return JSON.stringify(e, null, 2);
}
function tu(e) {
	switch (e) {
		case Xc.over: return "<i class=\"fa fa-arrow-up\"></i> over";
		case Xc.under: return "<i class=\"fa fa-arrow-down\"></i> under";
		default: return "-";
	}
}
var nu = {
	[J.ACTUAL_ROWS]: zl,
	[J.ACTUAL_LOOPS]: Bl,
	[J.PLAN_ROWS]: zl,
	[J.PLAN_WIDTH]: Ul,
	[J.ACTUAL_ROWS_REVISED]: zl,
	[J.ACTUAL_ROWS_FRACTIONAL]: $l,
	[J.PLAN_ROWS_REVISED]: zl,
	[J.ACTUAL_TOTAL_TIME]: X,
	[J.ACTUAL_STARTUP_TIME]: X,
	[J.STARTUP_COST]: Rl,
	[J.TOTAL_COST]: Rl,
	[J.PARALLEL_AWARE]: $l,
	[J.WORKERS]: eu,
	[J.SORT_SPACE_USED]: Hl,
	[J.ROWS_REMOVED_BY_FILTER]: zl,
	[J.ROWS_REMOVED_BY_JOIN_FILTER]: zl,
	[J.ROWS_REMOVED_BY_FILTER_REVISED]: zl,
	[J.ROWS_REMOVED_BY_JOIN_FILTER_REVISED]: zl,
	[J.ROWS_REMOVED_BY_INDEX_RECHECK]: zl,
	[J.ROWS_REMOVED_BY_INDEX_RECHECK_REVISED]: zl,
	[J.HEAP_FETCHES]: zl,
	[J.OUTPUT]: Yl,
	[J.SORT_KEY]: Yl,
	[J.PRESORTED_KEY]: Yl,
	[J.WAL_RECORDS]: zl,
	[J.WAL_BYTES]: Ul,
	[J.WAL_FPI]: zl,
	[J.EXCLUSIVE_DURATION]: X,
	[J.EXCLUSIVE_COST]: Rl,
	[J.PLANNER_ESTIMATE_FACTOR]: Vl,
	[J.PLANNER_ESTIMATE_DIRECTION]: tu,
	[J.IO_READ_TIME]: X,
	[J.IO_WRITE_TIME]: X,
	[J.SUM_IO_READ_TIME]: X,
	[J.SUM_IO_WRITE_TIME]: X,
	[J.AVERAGE_SUM_IO_READ_SPEED]: Zl,
	[J.AVERAGE_SUM_IO_WRITE_SPEED]: Zl,
	[J.AVERAGE_IO_READ_SPEED]: Zl,
	[J.AVERAGE_IO_WRITE_SPEED]: Zl,
	[J.SHARED_IO_READ_TIME]: X,
	[J.SHARED_IO_WRITE_TIME]: X,
	[J.AVERAGE_SHARED_IO_READ_SPEED]: Zl,
	[J.AVERAGE_SHARED_IO_WRITE_SPEED]: Zl,
	[J.LOCAL_IO_READ_TIME]: X,
	[J.LOCAL_IO_WRITE_TIME]: X,
	[J.AVERAGE_LOCAL_IO_READ_SPEED]: Zl,
	[J.AVERAGE_LOCAL_IO_WRITE_SPEED]: Zl,
	[J.TEMP_IO_READ_TIME]: X,
	[J.TEMP_IO_WRITE_TIME]: X,
	[J.AVERAGE_TEMP_IO_READ_SPEED]: Zl,
	[J.AVERAGE_TEMP_IO_WRITE_SPEED]: Zl,
	[J.EXCLUSIVE_IO_READ_TIME]: X,
	[J.EXCLUSIVE_IO_WRITE_TIME]: X,
	[J.EXCLUSIVE_AVERAGE_IO_READ_SPEED]: Zl,
	[J.EXCLUSIVE_AVERAGE_IO_WRITE_SPEED]: Zl,
	[J.EXCLUSIVE_SHARED_IO_READ_TIME]: X,
	[J.EXCLUSIVE_SHARED_IO_WRITE_TIME]: X,
	[J.EXCLUSIVE_AVERAGE_SHARED_IO_READ_SPEED]: Zl,
	[J.EXCLUSIVE_AVERAGE_SHARED_IO_WRITE_SPEED]: Zl,
	[J.EXCLUSIVE_LOCAL_IO_READ_TIME]: X,
	[J.EXCLUSIVE_LOCAL_IO_WRITE_TIME]: X,
	[J.EXCLUSIVE_AVERAGE_LOCAL_IO_READ_SPEED]: Zl,
	[J.EXCLUSIVE_AVERAGE_LOCAL_IO_WRITE_SPEED]: Zl,
	[J.EXCLUSIVE_TEMP_IO_READ_TIME]: X,
	[J.EXCLUSIVE_TEMP_IO_WRITE_TIME]: X,
	[J.EXCLUSIVE_AVERAGE_TEMP_IO_READ_SPEED]: Zl,
	[J.EXCLUSIVE_AVERAGE_TEMP_IO_WRITE_SPEED]: Zl,
	[J.SHARED_HIT_BLOCKS]: ql,
	[J.SHARED_READ_BLOCKS]: ql,
	[J.SHARED_DIRTIED_BLOCKS]: ql,
	[J.SHARED_WRITTEN_BLOCKS]: ql,
	[J.TEMP_READ_BLOCKS]: ql,
	[J.TEMP_WRITTEN_BLOCKS]: ql,
	[J.LOCAL_HIT_BLOCKS]: ql,
	[J.LOCAL_READ_BLOCKS]: ql,
	[J.LOCAL_DIRTIED_BLOCKS]: ql,
	[J.LOCAL_WRITTEN_BLOCKS]: ql,
	[J.EXCLUSIVE_SHARED_HIT_BLOCKS]: ql,
	[J.EXCLUSIVE_SHARED_READ_BLOCKS]: ql,
	[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS]: ql,
	[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS]: ql,
	[J.EXCLUSIVE_TEMP_READ_BLOCKS]: ql,
	[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS]: ql,
	[J.EXCLUSIVE_LOCAL_HIT_BLOCKS]: ql,
	[J.EXCLUSIVE_LOCAL_READ_BLOCKS]: ql,
	[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS]: ql,
	[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS]: ql,
	[J.FULL_SORT_GROUPS]: Xl,
	[J.PRE_SORTED_GROUPS]: Xl,
	[J.JIT]: Ql
};
function ru(e, t) {
	let n = nu[e];
	return n ? n(t) : L.default.escape(t);
}
function iu(e) {
	return e instanceof Array || (e = [e]), e = L.default.map(e, (e) => L.default.escape(e.replace(/(^\(|\)$)/g, ""))), e.join(", ");
}
function au(e, t) {
	return L.default.map(e, (e) => {
		let n = L.default.escape(e);
		return t && (n += t.indexOf(e) === -1 ? "" : "&nbsp;<span class=\"text-body-tertiary\">(presort)</span>"), n;
	}).join(", ");
}
function ou(e) {
	let t;
	return e > 90 ? t = 4 : e > 40 ? t = 3 : e > 10 && (t = 2), t ? "c-" + t : "";
}
function su(e) {
	return Fl.highlight(e, { language: "pgsql" }).value;
}
function cu(e) {
	return Fl.highlight(e, { language: "json" }).value;
}
//#endregion
//#region src/components/tooltip/TimeTooltip.vue
var lu = /* @__PURE__ */ l({
	__name: "TimeTooltip",
	props: { node: {} },
	setup(t) {
		return (n, r) => (C(), a(e, null, [
			r[0] ||= s("\n  Duration:\n  ", -1),
			r[1] ||= o("br", null, null, -1),
			s("Exclusive: " + A(j(X)(t.node[j(J).EXCLUSIVE_DURATION])) + ",\n  Total:\n  " + A(j(X)(t.node[j(J).ACTUAL_TOTAL_TIME])), 1)
		], 64));
	}
});
//#endregion
//#region src/services/color-service.ts
function uu(e, t, n) {
	let r, i, a;
	if (t === 0) r = i = a = n;
	else {
		let o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = Z(s, o, e + 1 / 3), i = Z(s, o, e), a = Z(s, o, e - 1 / 3);
	}
	return [
		Math.floor(r * 255),
		Math.floor(i * 255),
		Math.floor(a * 255)
	];
}
function du(e) {
	let t = uu((100 - e) * 1.2 / 360, .9, .4);
	return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
}
function Z(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
//#endregion
//#region src/node.ts
function fu(e, n) {
	let r = E(NaN), i = E(NaN), a = E(0), o = E(null), s = E(), c = E(), l = E(NaN), u = E(NaN), d = E();
	y(() => {
		f(), h(), g(), b(), c.value = e[J.PLANNER_ESTIMATE_DIRECTION], s.value = e[J.PLANNER_ESTIMATE_FACTOR];
	}), M(() => n.highlightType, f);
	function f() {
		let t;
		switch (n.highlightType) {
			case Jc.DURATION:
				if (t = e[J.EXCLUSIVE_DURATION], t === void 0) {
					o.value = null;
					break;
				}
				a.value = Math.round(t / Y.stats.maxDuration * 100), o.value = X(t);
				break;
			case Jc.ROWS:
				if (t = e[J.ACTUAL_ROWS_REVISED], t === void 0) {
					o.value = null;
					break;
				}
				a.value = Math.round(t / Y.stats.maxRows * 100) || 0, o.value = zl(t);
				break;
			case Jc.COST:
				if (t = e[J.EXCLUSIVE_COST], t === void 0) {
					o.value = null;
					break;
				}
				a.value = Math.round(t / Y.stats.maxCost * 100), o.value = Rl(t);
				break;
		}
	}
	let p = t(() => du(a.value)), m = t(() => {
		let t = A.value ? "Parallel " : "";
		return t += e[J.PARTIAL_MODE] ? e[J.PARTIAL_MODE] + " " : "", t += e[J.NODE_TYPE], e[J.SCAN_DIRECTION] && e[J.SCAN_DIRECTION] !== "Forward" && (t += " " + e[J.SCAN_DIRECTION]), e[J.JOIN_TYPE] && (t = t.replace("Join", `${e[J.JOIN_TYPE]} Join`)), t;
	});
	function h() {
		let t = Y.stats.executionTime || Y.plan?.content?.Plan?.[J.ACTUAL_TOTAL_TIME], n = e[J.EXCLUSIVE_DURATION];
		r.value = L.default.round(n / t * 100);
	}
	function g() {
		let t = Y.plan?.content.maxTotalCost, n = e[J.EXCLUSIVE_COST];
		i.value = L.default.round(n / t * 100);
	}
	let _ = Object.keys(e).find((e) => e === J.ROWS_REMOVED_BY_FILTER_REVISED || e === J.ROWS_REMOVED_BY_JOIN_FILTER_REVISED || e === J.ROWS_REMOVED_BY_INDEX_RECHECK_REVISED), v = Object.keys(J).find((e) => J[e] === _);
	function b() {
		if (v) {
			let t = e[J[v]];
			l.value = t;
			let n = e[J.ACTUAL_ROWS_REVISED];
			u.value = L.default.floor(t / (t + n) * 100), u.value === 100 ? d.value = ">99" : u.value === 0 ? d.value = "<1" : d.value = u.value.toString();
		}
	}
	let x = t(() => {
		let e, t = r.value;
		return t > 90 ? e = 4 : t > 40 ? e = 3 : t > 10 && (e = 2), e ? "c-" + e : !1;
	}), S = t(() => {
		let t, n = e[J.PLANNER_ESTIMATE_FACTOR];
		return n > 1e3 ? t = 4 : n > 100 ? t = 3 : n > 10 && (t = 2), t ? "c-" + t : !1;
	}), C = t(() => {
		let e, t = i.value;
		return t > 90 ? e = 4 : t > 40 ? e = 3 : t > 10 && (e = 2), e ? "c-" + e : !1;
	}), w = t(() => {
		let e, t = u.value;
		return t > 90 ? e = 4 : t > 50 && (e = 3), e ? "c-" + e : !1;
	}), T = t(() => {
		let t, n = e[J.HEAP_FETCHES] / (e[J.ACTUAL_ROWS] + (e[J.ROWS_REMOVED_BY_FILTER] || 0) + (e[J.ROWS_REMOVED_BY_JOIN_FILTER] || 0)) * 100;
		return n > 90 ? t = 4 : n > 40 ? t = 3 : n > 0 && (t = 2), t ? "c-" + t : !1;
	}), D = t(() => d.value + "% of rows removed by filter"), O = t(() => `Filter used:<br><pre class="mb-0" style="white-space: pre-wrap;"><code>${e[J.FILTER]}</code></pre>`), ee = t(() => `Recheck condition:<br><pre class="mb-0" style="white-space: pre-wrap;"><code>${e[J.RECHECK_COND]}</code></pre>`), k = t(() => !!Y.stats.executionTime && !e[J.ACTUAL_LOOPS]), A = t(() => e[J.PARALLEL_AWARE]), j = t(() => {
		if (console.warn("Make sure it works for workers that are not array"), e[J.WORKERS_LAUNCHED]) return e[J.WORKERS_LAUNCHED];
		if (e[J.WORKERS_LAUNCHED_BY_GATHER]) return e[J.WORKERS_LAUNCHED_BY_GATHER];
		let t = e[J.WORKERS];
		return t ? t.length : NaN;
	}), te = t(() => e[J.WORKERS_LAUNCHED] || e[J.WORKERS_PLANNED_BY_GATHER]), N = t(() => {
		let t = e[J.WORKERS_PLANNED_BY_GATHER];
		return [...Array(t).keys()].slice().reverse();
	}), P = t(() => {
		switch (e[J.PLANNER_ESTIMATE_FACTOR]) {
			case Infinity: return 100;
			case 1: return 0;
			default: return (e[J.PLANNER_ESTIMATE_FACTOR] || 0) / Y.stats.maxEstimateFactor * 100;
		}
	}), F = t(() => e[J.EXCLUSIVE_SHARED_HIT_BLOCKS] / Y.stats.maxBlocks?.[q.shared] * 100), I = t(() => e[J.EXCLUSIVE_SHARED_READ_BLOCKS] / Y.stats.maxBlocks?.[q.shared] * 100), ne = t(() => e[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] / Y.stats.maxBlocks?.[q.shared] * 100), re = t(() => e[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS] / Y.stats.maxBlocks?.[q.shared] * 100), ie = t(() => e[J.EXCLUSIVE_TEMP_READ_BLOCKS] / Y.stats.maxBlocks?.[q.temp] * 100), ae = t(() => e[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS] / Y.stats.maxBlocks?.[q.temp] * 100), oe = t(() => e[J.EXCLUSIVE_LOCAL_HIT_BLOCKS] / Y.stats.maxBlocks?.[q.local] * 100), se = t(() => e[J.EXCLUSIVE_LOCAL_READ_BLOCKS] / Y.stats.maxBlocks?.[q.local] * 100), ce = t(() => e[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] / Y.stats.maxBlocks?.[q.local] * 100), le = t(() => e[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] / Y.stats.maxBlocks?.[q.local] * 100), ue = t(() => ["Rows: ", zl(e[J.ACTUAL_ROWS_REVISED])].join("")), de = t(() => {
		let t = e[J.PLANNER_ESTIMATE_FACTOR], n = e[J.PLANNER_ESTIMATE_DIRECTION], r = "";
		if (t === void 0 || n === void 0) return "N/A";
		switch (n) {
			case Xc.over:
				r += "Over";
				break;
			case Xc.under:
				r += "Under";
				break;
			default: r += "Correctly";
		}
		return r += " estimated", r += t === 1 ? "" : " by <b>" + Vl(t) + "</b>", r += "<br>", r += `Rows: ${zl(e[J.ACTUAL_ROWS_REVISED])} `, r += `(${zl(e[J.PLAN_ROWS_REVISED])} planned)`, r;
	}), fe = t(() => ["Cost: ", zl(e[J.EXCLUSIVE_COST])].join("")), pe = t(() => `${J[v]}: ${ge.value}${zl(l.value)}`), me = t(() => !!e[J.ACTUAL_ROWS_FRACTIONAL]), he = t(() => e[J.ACTUAL_LOOPS] > 1), ge = t(() => !me.value && he.value ? "~" : ""), _e = t(() => (t) => {
		let n = "", r, i, a, o;
		switch (t) {
			case q.shared:
				r = e[J.EXCLUSIVE_SHARED_HIT_BLOCKS], i = e[J.EXCLUSIVE_SHARED_READ_BLOCKS], o = e[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS], a = e[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS];
				break;
			case q.temp:
				i = e[J.EXCLUSIVE_TEMP_READ_BLOCKS], a = e[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS];
				break;
			case q.local:
				r = e[J.EXCLUSIVE_LOCAL_HIT_BLOCKS], i = e[J.EXCLUSIVE_LOCAL_READ_BLOCKS], o = e[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS], a = e[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS];
				break;
		}
		switch (n += "<table class=\"table table-sm table-borderless mb-0\">", n += r ? "<tr><td>Hit:</td><td class=\"text-end\">" + Kl(r, !0) + "</td></tr>" : "", n += i ? "<tr><td>Read:</td><td class=\"text-end\">" + Kl(i, !0) + "</td></tr>" : "", n += o ? "<tr><td>Dirtied:</td><td class=\"text-end\">" + Kl(o, !0) + "</td></tr>" : "", n += a ? "<tr><td>Written:</td><td class=\"text-end\">" + Kl(a, !0) + "</td></tr>" : "", n += "</table>", !r && !i && !o && !a && (n = " N/A"), t) {
			case q.shared:
				n = "Shared Blocks:" + n;
				break;
			case q.temp:
				n = "Temp Blocks:" + n;
				break;
			case q.local:
				n = "Local Blocks:" + n;
				break;
		}
		return n;
	}), R = t(() => (t) => {
		let n = "<table class=\"table table-sm table-borderless mb-0\">";
		return n += `<tr><td>${t}:</td><td class="text-end">`, e[t] && (n += `${Kl(e[t], !0)}</td></tr>`), n;
	}), ve = t(() => `Heap Fetches: ${e[J.HEAP_FETCHES]?.toLocaleString()}`);
	function ye(t) {
		let n = J[t], r = e[n];
		return ru(n, r);
	}
	return {
		barColor: p,
		barWidth: a,
		buffersByLocationTooltip: _e,
		buffersByMetricTooltip: R,
		costClass: C,
		costTooltip: fe,
		durationClass: x,
		estimateFactorPercent: P,
		estimateFactorTooltip: de,
		estimationClass: S,
		executionTimePercent: r,
		filterTooltip: D,
		filterDetailTooltip: O,
		formattedProp: ye,
		heapFetchesClass: T,
		heapFetchesTooltip: ve,
		highlightValue: o,
		indexRecheckTooltip: ee,
		isNeverExecuted: k,
		isParallelAware: A,
		localDirtiedPercent: ce,
		localHitPercent: oe,
		localReadPercent: se,
		localWrittenPercent: le,
		nodeName: m,
		plannerRowEstimateDirection: c,
		plannerRowEstimateValue: s,
		rowsRemoved: l,
		rowsRemovedClass: w,
		rowsRemovedPercent: u,
		rowsRemovedPercentString: d,
		rowsRemovedProp: v,
		rowsRemovedTooltip: pe,
		rowsTooltip: ue,
		sharedDirtiedPercent: ne,
		sharedHitPercent: F,
		sharedReadPercent: I,
		sharedWrittenPercent: re,
		tempReadPercent: ie,
		tempWrittenPercent: ae,
		tilde: ge,
		workersLaunchedCount: j,
		workersPlannedCount: te,
		workersPlannedCountReversed: N
	};
}
//#endregion
//#region src/components/IoTimingsRow.vue?vue&type=script&setup=true&lang.ts
var pu = {
	key: 0,
	class: "text-end"
}, mu = {
	key: 1,
	class: "text-end"
}, hu = {
	key: 2,
	class: "text-end"
}, gu = {
	key: 3,
	class: "text-end"
}, _u = /* @__PURE__ */ l({
	__name: "IoTimingsRow",
	props: {
		node: {},
		scope: {},
		exclusive: {
			type: Boolean,
			default: () => !1
		}
	},
	setup(e) {
		let t = e, n = t.exclusive ? "EXCLUSIVE_" : "", c = T(t.node), { formattedProp: l } = fu(c, f(he)), u = t.scope ? `${t.scope}_`.toUpperCase() : "", d = t.scope ? L.capitalize(t.scope) : "Shared/Local", p = n + u + "IO_READ_TIME", m = n + "AVERAGE_" + u + "IO_READ_SPEED", h = n + u + "READ_BLOCKS", g = n + u + "IO_WRITE_TIME", _ = n + "AVERAGE_" + u + "IO_WRITE_SPEED", v = n + u + "WRITTEN_BLOCKS";
		return (e, t) => (C(), a("tr", null, [
			o("td", null, A(j(d)), 1),
			t[11] ||= s(),
			c[j(J)[p]] ? (C(), a("td", pu, [
				s(A(j(l)(p)) + " ", 1),
				t[0] ||= o("br", null, null, -1),
				t[1] ||= s(),
				o("small", null, A(j(Gl)(c[j(J)[h]])), 1),
				t[2] ||= s(),
				t[3] ||= o("br", null, null, -1),
				t[4] ||= s(),
				o("small", null, "~" + A(j(l)(m)), 1),
				t[5] ||= s(),
				c[j(J).WORKERS_PLANNED] || c[j(J).WORKERS_PLANNED_BY_GATHER] ? P((C(), r(j(K), {
					key: 0,
					icon: j(kc),
					class: "cursor-help d-inline-block text-body-tertiary"
				}, null, 8, ["icon"])), [[j(Fr), { content: j(al)("io timings parallel") }]]) : i("", !0)
			])) : (C(), a("td", mu, "-")),
			t[12] ||= s(),
			c[j(J)[g]] ? (C(), a("td", hu, [
				s(A(j(l)(g)) + " ", 1),
				t[6] ||= o("br", null, null, -1),
				t[7] ||= s(),
				o("small", null, A(j(Gl)(c[j(J)[v]])), 1),
				t[8] ||= s(),
				t[9] ||= o("br", null, null, -1),
				t[10] ||= s(),
				o("small", null, "~" + A(j(l)(_)), 1)
			])) : (C(), a("td", gu, "-"))
		]));
	}
}), vu = {
	key: 0,
	class: "table table-sm"
}, yu = /* @__PURE__ */ l({
	__name: "IoTooltip",
	props: {
		node: {},
		exclusive: {
			type: Boolean,
			default: () => !1
		}
	},
	setup(e) {
		let n = e, c = t(() => n.exclusive ? "EXCLUSIVE_" : ""), l = T(n.node);
		return (t, n) => l[j(J)[c.value + "IO_READ_TIME"]] || l[j(J)[c.value + "IO_WRITE_TIME"]] || l[j(J)[c.value + "SHARED_IO_READ_TIME"]] || l[j(J)[c.value + "SHARED_IO_WRITE_TIME"]] || l[j(J)[c.value + "LOCAL_IO_READ_TIME"]] || l[j(J)[c.value + "LOCAL_IO_WRITE_TIME"]] || l[j(J)[c.value + "TEMP_IO_READ_TIME"]] || l[j(J)[c.value + "TEMP_IO_WRITE_TIME"]] ? (C(), a("table", vu, [
			n[3] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "text-nowrap" }, "I/O Timings"),
				s(),
				o("td", {
					class: "text-end",
					width: "50%"
				}, "Read"),
				s(),
				o("td", {
					class: "text-end",
					width: "50%"
				}, "Write")
			])], -1),
			n[4] ||= s(),
			o("tbody", null, [
				l[j(J)[c.value + "IO_READ_TIME"]] || l[j(J)[c.value + "IO_WRITE_TIME"]] ? (C(), r(_u, {
					key: 0,
					node: l,
					exclusive: e.exclusive
				}, null, 8, ["node", "exclusive"])) : i("", !0),
				n[0] ||= s(),
				l[j(J)[c.value + "SHARED_IO_READ_TIME"]] || l[j(J)[c.value + "SHARED_IO_WRITE_TIME"]] ? (C(), r(_u, {
					key: 1,
					node: l,
					scope: j(rl).SHARED,
					exclusive: e.exclusive
				}, null, 8, [
					"node",
					"scope",
					"exclusive"
				])) : i("", !0),
				n[1] ||= s(),
				l[j(J)[c.value + "LOCAL_IO_READ_TIME"]] || l[j(J)[c.value + "LOCAL_IO_WRITE_TIME"]] ? (C(), r(_u, {
					key: 2,
					node: l,
					scope: j(rl).LOCAL,
					exclusive: e.exclusive
				}, null, 8, [
					"node",
					"scope",
					"exclusive"
				])) : i("", !0),
				n[2] ||= s(),
				l[j(J)[c.value + "TEMP_IO_READ_TIME"]] || l[j(J)[c.value + "TEMP_IO_WRITE_TIME"]] ? (C(), r(_u, {
					key: 3,
					node: l,
					scope: j(rl).TEMP,
					exclusive: e.exclusive
				}, null, 8, [
					"node",
					"scope",
					"exclusive"
				])) : i("", !0)
			])
		])) : i("", !0);
	}
}), bu = { key: 0 }, xu = ["innerHTML"], Su = ["innerHTML"], Cu = ["innerHTML"], wu = ["innerHTML"], Tu = { class: "fw-normal small" }, Eu = {
	key: 0,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Du = {
	key: 1,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Ou = {
	key: 2,
	class: "progress rounded-0 align-items-center bg-transparent justify-content-center",
	style: { height: "10px" }
}, ku = { class: "text-body-tertiary small" }, Au = {
	key: 1,
	class: "fa fa-fw d-inline-block"
}, ju = { class: "text-body-tertiary small" }, Mu = {
	key: 1,
	class: "fa fa-fw d-inline-block"
}, Nu = {
	key: 3,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Pu = {
	key: 4,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Fu = {
	key: 5,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Iu = {
	key: 6,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Lu = {
	key: 7,
	class: "progress rounded-0 align-items-center bg-transparent",
	style: { height: "5px" }
}, Ru = /* @__PURE__ */ l({
	__name: "DiagramRow",
	props: {
		row: {},
		viewOptions: {}
	},
	setup(e) {
		let n = e, l = n.row.node, u = T(n.viewOptions), d = E(null), p = f(fe), m = f(me);
		if (!m) throw Error(`Could not resolve ${me.description}`);
		let h = f(pe), { buffersByLocationTooltip: g, costTooltip: y, estimateFactorPercent: b, estimateFactorTooltip: x, isNeverExecuted: S, nodeName: w, rowsTooltip: D } = fu(l, f(he)), O = f("scrollTo");
		M(() => p?.value, (e) => {
			e == l.nodeId && d.value && O?.(d.value);
		});
		let ee = t(() => h?.value && (h?.value == n.row.node.nodeId || n.row.path[n.row.path.length - 2] == h?.value));
		return (t, n) => (C(), r(j(Mr), {
			class: _(["no-focus-outline node", {
				selected: j(l).nodeId === j(p),
				"never-executed": j(S)
			}]),
			tag: "tr",
			onMouseenter: n[0] ||= (e) => h.value = j(l).nodeId,
			onMouseleave: n[1] ||= (e) => h.value = void 0,
			onClick: n[2] ||= F((e) => j(m)(j(l).nodeId, !0), ["prevent"])
		}, {
			content: N(() => [
				j(l)[j(J).CTE_NAME] ? (C(), a("div", bu, [o("em", null, "CTE " + A(j(l)[j(J).CTE_NAME]), 1)])) : i("", !0),
				n[3] ||= s(),
				u.metric == j(qc).time ? (C(), r(lu, {
					key: 1,
					node: j(l)
				}, null, 8, ["node"])) : u.metric == j(qc).io ? (C(), r(yu, {
					key: 2,
					node: j(l),
					exclusive: "",
					class: "mb-0"
				}, null, 8, ["node"])) : u.metric == j(qc).rows ? (C(), a("div", {
					key: 3,
					innerHTML: j(D)
				}, null, 8, xu)) : u.metric == j(qc).estimate_factor ? (C(), a("div", {
					key: 4,
					innerHTML: j(x)
				}, null, 8, Su)) : u.metric == j(qc).cost ? (C(), a("div", {
					key: 5,
					innerHTML: j(y)
				}, null, 8, Cu)) : u.metric == j(qc).buffers ? (C(), a("div", {
					key: 6,
					innerHTML: j(g)(u.buffersMetric)
				}, null, 8, wu)) : i("", !0)
			]),
			default: N(() => [
				n[19] ||= s(),
				o("td", {
					class: "text-body-secondary",
					ref_key: "rootEl",
					ref: d
				}, [o("span", Tu, "#" + A(j(l).nodeId), 1)], 512),
				n[20] ||= s(),
				o("td", null, [
					c(Cl, {
						row: e.row,
						isSubplan: !!j(l)[j(J).SUBPLAN_NAME],
						dense: ""
					}, null, 8, ["row", "isSubplan"]),
					n[4] ||= s(),
					o("span", { class: _([ee.value ? "text-body-emphasis" : j(h) ? "text-body-tertiary" : "text-body-secondary"]) }, [o("b", null, A(j(w)), 1)], 2)
				]),
				n[21] ||= s(),
				o("td", null, [u.metric == j(qc).time ? (C(), a("div", Eu, [
					o("div", {
						class: _(["progress-bar border-secondary bg-secondary", { "border-start": j(l)[j(J).EXCLUSIVE_DURATION] > 0 }]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: j(l)[j(J).EXCLUSIVE_DURATION] / (j(Y).stats.executionTime || j(Y).plan?.content.Plan[j(J).ACTUAL_TOTAL_TIME] || 0) * 100 + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6),
					n[5] ||= s(),
					o("div", {
						class: "progress-bar bg-secondary opacity-20",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: ((j(l)[j(J).ACTUAL_TOTAL_TIME] || 0) - j(l)[j(J).EXCLUSIVE_DURATION]) / (j(Y).stats.executionTime || j(Y).plan?.content.Plan[j(J).ACTUAL_TOTAL_TIME] || 0) * 100 + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4)
				])) : u.metric == j(qc).rows ? (C(), a("div", Du, [o("div", {
					class: "bg-secondary",
					role: "progressbar",
					style: v([{ height: "5px" }, { width: Math.round(j(l)[j(J).ACTUAL_ROWS_REVISED] / j(Y).stats.maxRows * 100) + "%" }]),
					"aria-valuenow": "15",
					"aria-valuemin": "0",
					"aria-valuemax": "100"
				}, null, 4)])) : u.metric == j(qc).estimate_factor ? (C(), a("div", Ou, [
					o("span", ku, [j(l)[j(J).PLANNER_ESTIMATE_DIRECTION] === j(Xc).under ? (C(), r(j(K), {
						key: 0,
						"fixed-width": "",
						icon: j(Fc)
					}, null, 8, ["icon"])) : (C(), a("i", Au))]),
					n[6] ||= s(),
					o("div", {
						class: _(["progress-bar", [j(l)[j(J).PLANNER_ESTIMATE_DIRECTION] === j(Xc).under ? "bg-secondary" : "bg-transparent"]]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: j(b) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6),
					n[7] ||= s(),
					n[8] ||= o("div", {
						class: "progress-bar border-start bg-secondary",
						role: "progressbar",
						style: {
							width: "1px",
							height: "5px"
						},
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, -1),
					n[9] ||= s(),
					o("div", {
						class: _(["progress-bar", [j(l)[j(J).PLANNER_ESTIMATE_DIRECTION] === j(Xc).over ? "bg-secondary" : "bg-transparent"]]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: j(b) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6),
					n[10] ||= s(),
					o("span", ju, [j(l)[j(J).PLANNER_ESTIMATE_DIRECTION] === j(Xc).over ? (C(), r(j(K), {
						key: 0,
						"fixed-width": "",
						icon: j(Rc)
					}, null, 8, ["icon"])) : (C(), a("i", Mu))])
				])) : u.metric == j(qc).cost ? (C(), a("div", Nu, [o("div", {
					class: _(["bg-secondary", { "border-secondary border-start": j(l)[j(J).EXCLUSIVE_COST] > 0 }]),
					role: "progressbar",
					style: v([{ height: "5px" }, { width: Math.round(j(l)[j(J).EXCLUSIVE_COST] / j(Y).stats.maxCost * 100) + "%" }]),
					"aria-valuenow": "15",
					"aria-valuemin": "0",
					"aria-valuemax": "100"
				}, null, 6)])) : u.metric == j(qc).buffers && u.buffersMetric == j(q).shared && j(Y).stats.maxBlocks?.[j(q).shared] ? (C(), a("div", Pu, [
					o("div", {
						class: _(["bg-hit", { "border-start border-hit": j(l)[j(J).EXCLUSIVE_SHARED_HIT_BLOCKS] > 0 }]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_SHARED_HIT_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).shared] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6),
					n[11] ||= s(),
					o("div", {
						class: _(["bg-read", { "border-start border-read": j(l)[j(J).EXCLUSIVE_SHARED_READ_BLOCKS] > 0 }]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_SHARED_READ_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).shared] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6),
					n[12] ||= s(),
					o("div", {
						class: _(["bg-dirtied", { "border-start border-dirtied": j(l)[j(J).EXCLUSIVE_SHARED_DIRTIED_BLOCKS] > 0 }]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_SHARED_DIRTIED_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).shared] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6),
					n[13] ||= s(),
					o("div", {
						class: _(["bg-written", { "border-start border-written": j(l)[j(J).EXCLUSIVE_SHARED_WRITTEN_BLOCKS] > 0 }]),
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_SHARED_WRITTEN_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).shared] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 6)
				])) : u.metric == j(qc).buffers && u.buffersMetric == j(q).temp && j(Y).stats.maxBlocks?.[j(q).temp] ? (C(), a("div", Fu, [
					o("div", {
						class: "bg-read",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_TEMP_READ_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).temp] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4),
					n[14] ||= s(),
					o("div", {
						class: "bg-written",
						role: "progressbar",
						style: v([{ width: (Math.round(j(l)[j(J).EXCLUSIVE_TEMP_WRITTEN_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).temp] * 100) || 0) + "%" }, { height: "5px" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4)
				])) : u.metric == j(qc).buffers && u.buffersMetric == j(q).local && j(Y).stats.maxBlocks?.[j(q).local] ? (C(), a("div", Iu, [
					o("div", {
						class: "bg-hit",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_LOCAL_HIT_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).local] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4),
					n[15] ||= s(),
					o("div", {
						class: "bg-read",
						role: "progressbar",
						style: v([{ width: (Math.round(j(l)[j(J).EXCLUSIVE_LOCAL_READ_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).local] * 100) || 0) + "%" }, { height: "5px" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4),
					n[16] ||= s(),
					o("div", {
						class: "bg-dirtied",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).local] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4),
					n[17] ||= s(),
					o("div", {
						class: "bg-written",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] / j(Y).stats.maxBlocks?.[j(q).local] * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4)
				])) : u.metric == j(qc).io && (j(Y).plan?.content.Plan[j(J).SUM_IO_READ_TIME] || j(Y).plan?.content.Plan[j(J).SUM_IO_WRITE_TIME]) ? (C(), a("div", Lu, [
					o("div", {
						class: "bg-read",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_SUM_IO_READ_TIME] / j(Y).stats.maxIo * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4),
					n[18] ||= s(),
					o("div", {
						class: "bg-written",
						role: "progressbar",
						style: v([{ height: "5px" }, { width: (Math.round(j(l)[j(J).EXCLUSIVE_SUM_IO_WRITE_TIME] / j(Y).stats.maxIo * 100) || 0) + "%" }]),
						"aria-valuenow": "15",
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, null, 4)
				])) : i("", !0)])
			]),
			_: 1
		}, 8, ["class"]));
	}
}), zu = { class: "diagram" }, Bu = { class: "flex-shrink-0" }, Vu = { class: "text-center my-1" }, Hu = { class: "btn-group btn-group-xs" }, Uu = ["disabled"], Wu = {
	key: 0,
	class: "text-center my-1"
}, Gu = { class: "btn-group btn-group-xs" }, Ku = ["disabled"], qu = ["disabled"], Ju = ["disabled"], Yu = { class: "legend text-center" }, Xu = {
	key: 0,
	class: "list-unstyled list-inline mb-0"
}, Q = {
	key: 0,
	class: "list-inline-item"
}, Zu = {
	key: 1,
	class: "list-inline-item"
}, Qu = {
	key: 1,
	class: "list-unstyled list-inline mb-0 d-inline-block"
}, $u = {
	key: 0,
	class: "m-1"
}, ed = { key: 0 }, td = { key: 0 }, nd = ["colspan"], rd = ["onClick"], id = {
	key: 1,
	class: "p-2 text-center text-body-tertiary"
}, ad = /*#__PURE__*/ Sl(/* @__PURE__ */ l({
	__name: "Diagram",
	setup(n) {
		let r = E(null), l = f(me);
		if (!l) throw Error(`Could not resolve ${me.description}`);
		let u = T({
			metric: qc.time,
			buffersMetric: q.shared
		});
		y(() => {
			let e = localStorage.getItem("diagramViewOptions");
			e && L.default.assignIn(u, JSON.parse(e));
			let t = L.default.keys(Y.stats.maxBlocks);
			L.default.indexOf(t, u.buffersMetric) === -1 && (u.buffersMetric = L.default.min(t));
		}), M(u, d);
		function d() {
			localStorage.setItem("diagramViewOptions", JSON.stringify(u));
		}
		let p = t(() => u.metric === qc.buffers ? !!u.buffersMetric : !0);
		function m(e) {
			return L.default.startsWith(e[J.SUBPLAN_NAME], "CTE");
		}
		function h(e) {
			r.value && cl(r.value, e, !1);
		}
		return w("scrollTo", h), (t, n) => (C(), a("div", zu, [
			o("div", Bu, [
				o("div", Vu, [o("div", Hu, [
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.metric === j(qc).time }]),
						onClick: n[0] ||= (e) => u.metric = j(qc).time
					}, "\n            time\n          ", 2),
					n[9] ||= s(),
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.metric === j(qc).rows }]),
						onClick: n[1] ||= (e) => u.metric = j(qc).rows
					}, "\n            rows\n          ", 2),
					n[10] ||= s(),
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.metric === j(qc).estimate_factor }]),
						onClick: n[2] ||= (e) => u.metric = j(qc).estimate_factor
					}, "\n            estimation\n          ", 2),
					n[11] ||= s(),
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.metric === j(qc).cost }]),
						onClick: n[3] ||= (e) => u.metric = j(qc).cost
					}, "\n            cost\n          ", 2),
					n[12] ||= s(),
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.metric === j(qc).buffers }]),
						onClick: n[4] ||= (e) => u.metric = j(qc).buffers
					}, "\n            buffers\n          ", 2),
					n[13] ||= s(),
					c(j(Mr), {
						content: j(Y).stats.maxIo ? void 0 : j(al)("hint track_io_timing"),
						allowHTML: !0,
						class: "btn-tooltip-wrapper"
					}, {
						default: N(() => [o("button", {
							class: _(["btn btn-outline-secondary", { active: u.metric === j(qc).io }]),
							onClick: n[5] ||= (e) => u.metric = j(qc).io,
							disabled: !j(Y).stats.maxIo
						}, "\n              IO\n            ", 10, Uu)]),
						_: 1
					}, 8, ["content"])
				])]),
				n[25] ||= s(),
				u.metric == j(qc).buffers ? (C(), a("div", Wu, [o("div", Gu, [
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.buffersMetric === j(q).shared }]),
						onClick: n[6] ||= (e) => u.buffersMetric = j(q).shared,
						disabled: !j(Y).stats.maxBlocks?.[j(q).shared]
					}, "\n            shared\n          ", 10, Ku),
					n[14] ||= s(),
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.buffersMetric === j(q).temp }]),
						onClick: n[7] ||= (e) => u.buffersMetric = j(q).temp,
						disabled: !j(Y).stats.maxBlocks?.[j(q).temp]
					}, "\n            temp\n          ", 10, qu),
					n[15] ||= s(),
					o("button", {
						class: _(["btn btn-outline-secondary", { active: u.buffersMetric === j(q).local }]),
						onClick: n[8] ||= (e) => u.buffersMetric = j(q).local,
						disabled: !j(Y).stats.maxBlocks?.[j(q).local]
					}, "\n            local\n          ", 10, Ju)
				])])) : i("", !0),
				n[26] ||= s(),
				o("div", Yu, [
					u.metric == j(qc).buffers ? (C(), a("ul", Xu, [
						u.buffersMetric == j(q).temp ? i("", !0) : (C(), a("li", Q, [...n[16] ||= [o("span", { class: "bg-hit rounded" }, null, -1), s("\n            Hit\n          ", -1)]])),
						n[18] ||= s(),
						n[19] ||= o("li", { class: "list-inline-item" }, [o("span", { class: "bg-read" }), s("\n            Read\n          ")], -1),
						n[20] ||= s(),
						u.buffersMetric == j(q).temp ? i("", !0) : (C(), a("li", Zu, [...n[17] ||= [o("span", { class: "bg-dirtied" }, null, -1), s("\n            Dirtied\n          ", -1)]])),
						n[21] ||= s(),
						n[22] ||= o("li", { class: "list-inline-item" }, [o("span", { class: "bg-written" }), s("\n            Written\n          ")], -1)
					])) : i("", !0),
					n[24] ||= s(),
					u.metric == j(qc).io ? (C(), a("ul", Qu, [...n[23] ||= [
						o("li", { class: "list-inline-item" }, [o("span", { class: "bg-read" }), s("\n              Read\n            ")], -1),
						s(),
						o("li", { class: "list-inline-item" }, [o("span", { class: "bg-written" }), s("\n              Write\n            ")], -1)
					]])) : i("", !0)
				])
			]),
			n[34] ||= s(),
			o("div", {
				class: "overflow-auto flex-grow-1",
				ref_key: "container",
				ref: r
			}, [p.value ? (C(), a("table", $u, [(C(!0), a(e, null, D(j(Y).flat, (t, r) => (C(), a("tbody", { key: r }, [
				r === 0 && j(Y).flat.length > 1 ? (C(), a("tr", ed, [...n[27] ||= [o("th", {
					colspan: "3",
					class: "subplan"
				}, "Main Query Plan", -1)]])) : i("", !0),
				n[32] ||= s(),
				(C(!0), a(e, null, D(t, (t) => (C(), a(e, { key: t }, [
					t.node[j(J).SUBPLAN_NAME] ? (C(), a("tr", td, [
						n[29] ||= o("td", null, null, -1),
						n[30] ||= s(),
						o("td", {
							class: _({ "fw-bold": m(t.node) }),
							colspan: m(t.node) ? 3 : 2
						}, [
							c(Cl, {
								row: t,
								dense: ""
							}, null, 8, ["row"]),
							n[28] ||= s(),
							o("a", {
								class: "fst-italic text-reset",
								href: "",
								onClick: F((e) => j(l)(t.node.nodeId, !0), ["prevent"])
							}, A(t.node[j(J).SUBPLAN_NAME]), 9, rd)
						], 10, nd)
					])) : i("", !0),
					n[31] ||= s(),
					c(Ru, {
						row: t,
						viewOptions: u
					}, null, 8, ["row", "viewOptions"])
				], 64))), 128))
			]))), 128))])) : (C(), a("div", id, [...n[33] ||= [o("em", null, " No data available ", -1)]]))], 512)
		]));
	}
}), [["__scopeId", "data-v-f5a78255"]]), od = { class: "grid-progress progress rounded-0 bg-transparent" }, sd = /* @__PURE__ */ l({
	__name: "GridProgressBar",
	props: {
		percentage: {},
		percentage2: {}
	},
	setup(e) {
		return (t, n) => (C(), a("div", od, [
			o("div", {
				class: _(["bg-secondary border-secondary opacity-50", { "border-start": e.percentage > 0 }]),
				style: v({ width: e.percentage + "%" })
			}, null, 6),
			n[0] ||= s(),
			e.percentage2 ? (C(), a("div", {
				key: 0,
				class: _(["bg-secondary border-secondary opacity-20", { "border-start": e.percentage2 > 0 }]),
				style: v({ width: e.percentage2 + "%" })
			}, null, 6)) : i("", !0)
		]));
	}
}), cd = { class: "px-1" }, ld = {
	key: 0,
	class: "text-warning"
}, ud = { class: "px-1" }, dd = {
	key: 0,
	class: "text-warning"
}, fd = { class: "card-header" }, pd = { class: "list-group list-group-flush" }, md = { class: "col-6" }, hd = ["innerHTML"], gd = /* @__PURE__ */ l({
	__name: "WorkersDetail",
	props: { node: {} },
	setup(t) {
		let n = T(t.node), { workersLaunchedCount: r, workersPlannedCount: l } = fu(n, f(he));
		return (t, u) => (C(), a(e, null, [
			o("div", null, [
				u[1] ||= o("b", null, "Workers planned: ", -1),
				u[2] ||= s(),
				o("span", cd, A(j(l)), 1),
				u[3] ||= s(),
				!n[j(J).WORKERS_PLANNED] && !n[j(J).WORKERS] && (!j(Y).plan?.isVerbose || !j(Y).plan?.isAnalyze) ? (C(), a("em", ld, [P(c(j(K), {
					icon: j(Hc),
					class: "cursor-help"
				}, null, 8, ["icon"]), [[j(Fr), j(al)("fuzzy needs verbose")]])])) : i("", !0)
			]),
			u[9] ||= s(),
			o("div", null, [
				u[4] ||= o("b", null, "Workers launched: ", -1),
				u[5] ||= s(),
				o("span", ud, A(j(r)), 1),
				u[6] ||= s(),
				!n[j(J).WORKERS_LAUNCHED] && !n[j(J).WORKERS] && (!j(Y).plan?.isVerbose || !j(Y).plan?.isAnalyze) ? (C(), a("em", dd, [P(c(j(K), {
					icon: j(Hc),
					class: "cursor-help"
				}, null, 8, ["icon"]), [[j(Fr), j(al)("fuzzy needs verbose")]])])) : i("", !0)
			]),
			u[10] ||= s(),
			j(L.default).isArray(n[j(J).WORKERS]) ? (C(), a("div", {
				key: 0,
				class: "overflow-auto",
				style: { "max-height": "300px" },
				onWheel: u[0] ||= F(() => {}, ["stop"])
			}, [(C(!0), a(e, null, D(n[j(J).WORKERS], (t, n) => (C(), a("div", {
				key: n,
				class: "card mt-2"
			}, [
				o("div", fd, [o("b", null, "Worker " + A(t[j(el).WORKER_NUMBER]), 1)]),
				u[8] ||= s(),
				o("ul", pd, [(C(!0), a(e, null, D(t, (e, t) => (C(), a("li", {
					key: t,
					class: "list-group-item d-flex flex-row"
				}, [
					o("div", md, A(t), 1),
					u[7] ||= s(),
					o("div", {
						class: "col-6",
						innerHTML: j(ru)(t, e)
					}, null, 8, hd)
				]))), 128))])
			]))), 128))], 32)) : i("", !0)
		], 64));
	}
}), _d = { class: "table table-sm prop-list mb-0" }, vd = { key: 0 }, yd = { width: "40%" }, bd = ["innerHTML"], xd = /* @__PURE__ */ l({
	__name: "MiscDetail",
	props: { node: {} },
	setup(t) {
		let n = E(), r = T(t.node);
		y(() => {
			c();
		});
		function c() {
			n.value = L.default.chain(r).omit(J.PLANS).omit(J.WORKERS).map((e, t) => ({
				key: t,
				value: e
			})).value();
		}
		return (t, r) => (C(), a(e, null, [
			o("table", _d, [(C(!0), a(e, null, D(n.value, (t, n) => (C(), a(e, { key: n }, [j(hl)(t.key, t.value) ? (C(), a("tr", vd, [
				o("td", yd, A(t.key), 1),
				r[0] ||= s(),
				o("td", { innerHTML: j(ru)(t.key, t.value) }, null, 8, bd)
			])) : i("", !0)], 64))), 128))]),
			r[1] ||= s(),
			r[2] ||= o("div", { class: "text-body-tertiary text-end" }, [o("em", null, "* Calculated value")], -1)
		], 64));
	}
}), Sd = {
	height: "1em",
	width: "1em",
	viewBox: "0 0 20 20",
	class: "me-1",
	style: { "margin-left": "-8px" }
}, Cd = /* @__PURE__ */ l({
	__name: "SeverityBullet",
	props: { severity: {} },
	setup(e) {
		return (t, n) => (C(), a("svg", Sd, [o("circle", {
			r: "7",
			cx: "10",
			cy: "10",
			class: _(e.severity),
			stroke: "white",
			"stroke-width": "1"
		}, null, 2)]));
	}
}), wd = { class: "node-index" }, Td = ["href"], Ed = { class: "font-weight-normal" }, Dd = { class: "position-relative d-flex" }, Od = { class: "flex-grow-1" }, kd = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Ad = {
	key: 0,
	class: "text-body-secondary mt-1"
}, jd = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Md = {
	key: 3,
	class: "text-end grid-progress-cell text-nowrap"
}, Nd = { class: "position-relative" }, Pd = {
	key: 4,
	class: "text-end grid-progress-cell text-nowrap"
}, Fd = { key: 0 }, Id = {
	key: 0,
	class: "position-relative d-flex"
}, Ld = { class: "flex-grow-1" }, Rd = ["innerHTML"], zd = { key: 0 }, Bd = { key: 1 }, Vd = {
	key: 1,
	class: "text-body-secondary mt-1"
}, Hd = {
	key: 5,
	class: "text-end grid-progress-cell text-nowrap"
}, Ud = { class: "position-relative d-flex" }, Wd = { class: "flex-grow-1" }, Gd = {
	key: 6,
	class: "text-end text-nowrap"
}, Kd = { key: 0 }, qd = {
	key: 7,
	class: "text-end grid-progress-cell text-nowrap"
}, Jd = { class: "position-relative d-flex" }, Yd = { class: "flex-grow-1" }, Xd = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Zd = {
	key: 8,
	class: "text-end grid-progress-cell text-nowrap"
}, Qd = { class: "position-relative d-flex" }, $d = { class: "flex-grow-1" }, ef = { class: "d-inline" }, tf = { class: "text-body-secondary" }, nf = { key: 0 }, rf = { key: 1 }, af = ["innerHTML"], of = ["innerHTML"], sf = ["innerHTML"], cf = ["innerHTML"], lf = ["innerHTML"], uf = {
	key: 6,
	class: "text-reset"
}, df = { class: "text-wrap" }, ff = {
	key: 0,
	class: "node-description mt-1"
}, pf = { class: "node-type" }, mf = ["innerHTML"], hf = { class: "nav nav-tabs mt-1" }, gf = { class: "nav-item" }, _f = { class: "nav-item" }, vf = { class: "nav-item" }, yf = { class: "tab-content bg-body" }, bf = ["innerHTML"], xf = {
	key: 9,
	class: "text-end text-nowrap grid-progress-cell"
}, Sf = { class: "position-relative" }, Cf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, wf = {
	key: 10,
	class: "text-end text-nowrap grid-progress-cell"
}, Tf = { class: "position-relative" }, Ef = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Df = {
	key: 11,
	class: "text-end text-nowrap grid-progress-cell"
}, Of = { class: "position-relative" }, kf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Af = {
	key: 12,
	class: "text-end text-nowrap grid-progress-cell"
}, jf = { class: "position-relative" }, Mf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Nf = {
	key: 13,
	class: "text-end text-nowrap grid-progress-cell"
}, Pf = { class: "position-relative" }, Ff = {
	key: 0,
	class: "text-body-secondary mt-1"
}, If = {
	key: 14,
	class: "text-end text-nowrap grid-progress-cell"
}, Lf = { class: "position-relative" }, Rf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, zf = {
	key: 15,
	class: "text-end text-nowrap grid-progress-cell"
}, Bf = { class: "position-relative" }, Vf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Hf = {
	key: 16,
	class: "text-end text-nowrap grid-progress-cell"
}, Uf = { class: "position-relative" }, Wf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Gf = {
	key: 17,
	class: "text-end text-nowrap grid-progress-cell"
}, Kf = { class: "position-relative" }, qf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Jf = {
	key: 18,
	class: "text-end text-nowrap grid-progress-cell"
}, Yf = { class: "position-relative" }, Xf = {
	key: 0,
	class: "text-body-secondary mt-1"
}, Zf = /* @__PURE__ */ l({
	__name: "GridRow",
	props: {
		row: {},
		columns: {}
	},
	setup(n) {
		let l = n, u = l.row.node, d = f(he), p = f(pe), m = E("misc"), { buffersByMetricTooltip: h, costClass: g, costTooltip: v, durationClass: y, estimationClass: b, estimateFactorPercent: x, estimateFactorTooltip: S, executionTimePercent: w, formattedProp: T, heapFetchesClass: D, heapFetchesTooltip: O, isNeverExecuted: ee, localDirtiedPercent: k, localHitPercent: te, localReadPercent: M, localWrittenPercent: I, nodeName: ne, rowsRemoved: re, rowsRemovedClass: ie, rowsRemovedPercent: ae, rowsRemovedPercentString: oe, rowsRemovedProp: se, rowsRemovedTooltip: ce, rowsTooltip: le, sharedDirtiedPercent: L, sharedHitPercent: ue, sharedReadPercent: de, sharedWrittenPercent: fe, tempReadPercent: me, tempWrittenPercent: ge, tilde: _e } = fu(u, d), R = E(!1), ve = t(() => p?.value && (p?.value == l.row.node.nodeId || l.row.path[l.row.path.length - 2] == p?.value));
		return (t, l) => (C(), a("tr", {
			onClick: l[8] ||= (e) => R.value = !R.value,
			class: _(["node", { "never-executed": j(ee) }])
		}, [
			o("td", wd, [o("a", {
				href: `#plan/node/${j(u).nodeId}`,
				onClick: l[0] ||= F(() => {}, ["stop"])
			}, [o("span", Ed, "#" + A(j(u).nodeId), 1)], 8, Td)]),
			l[84] ||= s(),
			n.columns.includes("time") ? (C(), r(j(Mr), {
				key: 0,
				class: "text-end grid-progress-cell text-nowrap",
				tag: "td"
			}, {
				content: N(() => [c(lu, { node: j(u) }, null, 8, ["node"])]),
				default: N(() => [
					l[12] ||= s(),
					c(sd, {
						percentage: j(u)[j(J).EXCLUSIVE_DURATION] / (j(Y).stats.executionTime || j(Y).plan?.content.Plan[j(J).ACTUAL_TOTAL_TIME] || 0) * 100,
						percentage2: ((j(u)[j(J).ACTUAL_TOTAL_TIME] || 0) - j(u)[j(J).EXCLUSIVE_DURATION]) / (j(Y).stats.executionTime || j(Y).plan?.content.Plan[j(J).ACTUAL_TOTAL_TIME] || 0) * 100
					}, null, 8, ["percentage", "percentage2"]),
					l[13] ||= s(),
					o("div", Dd, [
						j(y) ? (C(), r(Cd, {
							key: 0,
							severity: j(y)
						}, null, 8, ["severity"])) : i("", !0),
						l[9] ||= s(),
						o("span", Od, A(j(u)[j(J).EXCLUSIVE_DURATION]?.toLocaleString(void 0, { minimumFractionDigits: 3 }) || "-"), 1)
					]),
					l[14] ||= s(),
					R.value ? (C(), a("div", kd, [
						s(A(j(X)(j(u)[j(J).EXCLUSIVE_DURATION])) + " ", 1),
						l[10] ||= o("br", null, null, -1),
						l[11] ||= s(),
						j(w) === Infinity ? i("", !0) : (C(), a(e, { key: 0 }, [s(A(j(w)) + "%\n        ", 1)], 64))
					])) : i("", !0)
				]),
				_: 1
			})) : i("", !0),
			l[85] ||= s(),
			n.columns.includes("ioread") ? (C(), r(j(Mr), {
				key: 1,
				class: "text-end grid-progress-cell text-nowrap",
				tag: "td"
			}, {
				content: N(() => [c(yu, {
					node: j(u),
					class: "mb-0",
					exclusive: ""
				}, null, 8, ["node"])]),
				default: N(() => [l[16] ||= s(), j(u)[j(J).EXCLUSIVE_SUM_IO_READ_TIME] ? (C(), a(e, { key: 0 }, [
					c(sd, { percentage: j(u)[j(J).EXCLUSIVE_SUM_IO_READ_TIME] / ((j(Y).plan?.content.Plan[j(J).SUM_IO_READ_TIME] ?? 0) + (j(Y).plan?.content.Plan[j(J).SUM_IO_WRITE_TIME] ?? 0)) * 100 }, null, 8, ["percentage"]),
					s(" " + A(j(u)[j(J).EXCLUSIVE_SUM_IO_READ_TIME].toLocaleString(void 0, { minimumFractionDigits: 3 })) + " ", 1),
					R.value ? (C(), a("div", Ad, [
						s(A(j(X)(j(u)[j(J).EXCLUSIVE_SUM_IO_READ_TIME])) + " ", 1),
						l[15] ||= o("br", null, null, -1),
						s(" " + A(j(Zl)(j(u)[j(J).EXCLUSIVE_AVERAGE_SUM_IO_READ_SPEED])), 1)
					])) : i("", !0)
				], 64)) : i("", !0)]),
				_: 1
			})) : i("", !0),
			l[86] ||= s(),
			n.columns.includes("iowrite") ? (C(), r(j(Mr), {
				key: 2,
				class: "text-end grid-progress-cell text-nowrap",
				tag: "td"
			}, {
				content: N(() => [c(yu, {
					node: j(u),
					class: "mb-0",
					exclusive: ""
				}, null, 8, ["node"])]),
				default: N(() => [l[18] ||= s(), j(u)[j(J).EXCLUSIVE_SUM_IO_WRITE_TIME] ? (C(), a(e, { key: 0 }, [
					c(sd, { percentage: j(u)[j(J).EXCLUSIVE_SUM_IO_WRITE_TIME] / ((j(Y).plan?.content.Plan[j(J).SUM_IO_READ_TIME] ?? 0) + (j(Y).plan?.content.Plan[j(J).SUM_IO_WRITE_TIME] ?? 0)) * 100 }, null, 8, ["percentage"]),
					s(" " + A(j(u)[j(J).EXCLUSIVE_SUM_IO_WRITE_TIME].toLocaleString(void 0, { minimumFractionDigits: 3 })) + " ", 1),
					R.value ? (C(), a("div", jd, [
						s(A(j(X)(j(u)[j(J).EXCLUSIVE_SUM_IO_WRITE_TIME])) + " ", 1),
						l[17] ||= o("br", null, null, -1),
						s(" " + A(j(Zl)(j(u)[j(J).EXCLUSIVE_AVERAGE_SUM_IO_WRITE_SPEED])), 1)
					])) : i("", !0)
				], 64)) : i("", !0)]),
				_: 1
			})) : i("", !0),
			l[87] ||= s(),
			n.columns.includes("rows") ? (C(), a("td", Md, [
				c(sd, { percentage: j(u)[j(J).ACTUAL_ROWS_REVISED] / j(Y).stats.maxRows * 100 }, null, 8, ["percentage"]),
				l[19] ||= s(),
				P((C(), a("div", Nd, [s(A(j(_e) + j(u)[j(J).ACTUAL_ROWS_REVISED]?.toLocaleString()), 1)])), [[j(Fr), {
					content: j(le),
					allowHTML: !0
				}]])
			])) : i("", !0),
			l[88] ||= s(),
			n.columns.includes("estimation") ? (C(), a("td", Pd, [
				c(sd, { percentage: j(x) }, null, 8, ["percentage"]),
				l[26] ||= s(),
				j(u)[j(J).PLANNER_ESTIMATE_FACTOR] == null ? i("", !0) : P((C(), a("div", Fd, [
					j(u)[j(J).PLANNER_ESTIMATE_FACTOR] == 1 ? i("", !0) : (C(), a("div", Id, [
						j(b) ? (C(), r(Cd, {
							key: 0,
							severity: j(b)
						}, null, 8, ["severity"])) : i("", !0),
						l[22] ||= s(),
						o("span", Ld, [
							o("span", { innerHTML: j(Vl)(j(u)[j(J).PLANNER_ESTIMATE_FACTOR] || 0) }, null, 8, Rd),
							l[20] ||= s(),
							j(u)[j(J).PLANNER_ESTIMATE_DIRECTION] === j(Xc).under ? (C(), a("span", zd, "\n              ▾\n            ")) : i("", !0),
							l[21] ||= s(),
							j(u)[j(J).PLANNER_ESTIMATE_DIRECTION] === j(Xc).over ? (C(), a("span", Bd, "\n              ▴\n            ")) : i("", !0)
						])
					])),
					l[25] ||= s(),
					R.value && j(u)[j(J).PLANNER_ESTIMATE_FACTOR] != 1 ? (C(), a("div", Vd, [
						l[23] ||= s("\n          Planned:", -1),
						l[24] ||= o("br", null, null, -1),
						s(" " + A(j(u)[j(J).PLAN_ROWS_REVISED]?.toLocaleString()), 1)
					])) : i("", !0)
				])), [[j(Fr), {
					content: j(S),
					allowHTML: !0
				}]])
			])) : i("", !0),
			l[89] ||= s(),
			n.columns.includes("cost") ? (C(), a("td", Hd, [
				c(sd, { percentage: Math.round(j(u)[j(J).EXCLUSIVE_COST] / j(Y).stats.maxCost * 100) }, null, 8, ["percentage"]),
				l[28] ||= s(),
				P((C(), a("div", Ud, [
					j(g) ? (C(), r(Cd, {
						key: 0,
						severity: j(g)
					}, null, 8, ["severity"])) : i("", !0),
					l[27] ||= s(),
					o("span", Wd, A(j(Rl)(j(u)[j(J).EXCLUSIVE_COST])), 1)
				])), [[j(Fr), {
					content: j(v),
					allowHTML: !0
				}]])
			])) : i("", !0),
			l[90] ||= s(),
			n.columns.includes("loops") ? (C(), a("td", Gd, [j(u)[j(J).ACTUAL_LOOPS] == 1 ? i("", !0) : (C(), a("span", Kd, A(j(u)[j(J).ACTUAL_LOOPS].toLocaleString()), 1))])) : i("", !0),
			l[91] ||= s(),
			n.columns.includes("filter") ? (C(), a("td", qd, [j(re) ? (C(), a(e, { key: 0 }, [
				c(sd, { percentage: j(ae) }, null, 8, ["percentage"]),
				l[30] ||= s(),
				P((C(), a("div", Jd, [
					j(ie) ? (C(), r(Cd, {
						key: 0,
						severity: j(ie)
					}, null, 8, ["severity"])) : i("", !0),
					l[29] ||= s(),
					o("span", Yd, A(j(oe)) + "% ", 1)
				])), [[j(Fr), {
					content: j(ce),
					allowHTML: !0
				}]]),
				l[31] ||= s(),
				R.value ? (C(), a("div", Xd, A(j(_e) + j(T)(j(se))), 1)) : i("", !0)
			], 64)) : i("", !0)])) : i("", !0),
			l[92] ||= s(),
			n.columns.includes("heapfetches") ? (C(), a("td", Zd, [P((C(), a("div", Qd, [
				j(D) ? (C(), r(Cd, {
					key: 0,
					severity: j(D)
				}, null, 8, ["severity"])) : i("", !0),
				l[32] ||= s(),
				o("span", $d, A(j(u)[j(J).HEAP_FETCHES]?.toLocaleString()), 1)
			])), [[j(Fr), {
				content: j(O),
				allowHTML: !0
			}]])])) : i("", !0),
			l[93] ||= s(),
			o("td", {
				class: _(R.value ? "" : "text-nowrap text-truncate overflow-hidden"),
				style: { "max-width": "0" },
				onMouseenter: l[6] ||= (e) => p.value = j(u).nodeId,
				onMouseleave: l[7] ||= (e) => p.value = void 0
			}, [
				c(Cl, {
					row: n.row,
					isSubplan: !!j(u)[j(J).SUBPLAN_NAME]
				}, null, 8, ["row", "isSubplan"]),
				l[60] ||= s(),
				o("div", ef, [
					o("b", {
						class: _(["border px-1 bg-body-tertiary", [ve.value ? "text-body-emphasis" : j(p) ? "text-body-tertiary" : "text-body-secondary"]]),
						style: { "--bs-border-opacity": "0.5" }
					}, A(j(ne)), 3),
					l[52] ||= s(),
					o("span", tf, [
						j(u)[j(J).RELATION_NAME] || j(u)[j(J).FUNCTION_NAME] ? (C(), a(e, { key: 0 }, [
							l[34] ||= o("span", { class: "text-body-tertiary" }, "on", -1),
							l[35] ||= s(),
							j(u)[j(J).SCHEMA] ? (C(), a("span", nf, A(j(u)[j(J).SCHEMA]) + ".", 1)) : i("", !0),
							s(A(j(u)[j(J).RELATION_NAME]) + A(j(u)[j(J).FUNCTION_NAME]) + " ", 1),
							j(u)[j(J).ALIAS] ? (C(), a("span", rf, [l[33] ||= o("span", { class: "text-body-tertiary" }, "as", -1), s(" " + A(j(u)[j(J).ALIAS]), 1)])) : i("", !0)
						], 64)) : j(u)[j(J).ALIAS] ? (C(), a(e, { key: 1 }, [
							l[36] ||= o("span", { class: "text-body-tertiary" }, "on", -1),
							l[37] ||= s(),
							o("span", { innerHTML: j(iu)(j(u)[j(J).ALIAS]) }, null, 8, af)
						], 64)) : i("", !0),
						l[47] ||= s(),
						j(u)[j(J).GROUP_KEY] ? (C(), a(e, { key: 2 }, [
							l[38] ||= o("span", { class: "text-body-tertiary" }, "by", -1),
							l[39] ||= s(),
							o("span", { innerHTML: j(iu)(j(u)[j(J).GROUP_KEY]) }, null, 8, of)
						], 64)) : i("", !0),
						l[48] ||= s(),
						j(u)[j(J).SORT_KEY] ? (C(), a(e, { key: 3 }, [
							l[40] ||= o("span", { class: "text-body-tertiary" }, "by", -1),
							l[41] ||= s(),
							o("span", { innerHTML: j(au)(j(u)[j(J).SORT_KEY], j(u)[j(J).PRESORTED_KEY]) }, null, 8, sf)
						], 64)) : i("", !0),
						l[49] ||= s(),
						j(u)[j(J).INDEX_NAME] ? (C(), a(e, { key: 4 }, [
							l[42] ||= o("span", { class: "text-body-tertiary" }, "using", -1),
							l[43] ||= s(),
							o("span", { innerHTML: j(iu)(j(u)[j(J).INDEX_NAME]) }, null, 8, cf)
						], 64)) : i("", !0),
						l[50] ||= s(),
						j(u)[j(J).HASH_CONDITION] ? (C(), a(e, { key: 5 }, [
							l[44] ||= o("span", { class: "text-body-tertiary" }, "on", -1),
							l[45] ||= s(),
							o("span", { innerHTML: j(iu)(j(u)[j(J).HASH_CONDITION]) }, null, 8, lf)
						], 64)) : i("", !0),
						l[51] ||= s(),
						j(u)[j(J).CTE_NAME] ? (C(), a("span", uf, [l[46] ||= o("span", { class: "text-body-tertiary" }, "CTE", -1), s(" " + A(j(u)[j(J).CTE_NAME]), 1)])) : i("", !0)
					])
				]),
				l[61] ||= s(),
				l[62] ||= o("br", null, null, -1),
				l[63] ||= s(),
				R.value ? (C(), a("div", {
					key: 0,
					class: "plan-node position-relative detailed",
					style: { width: "100%" },
					onClick: l[5] ||= F(() => {}, ["stop"])
				}, [o("div", df, [
					j(il)(j(u)[j(J).NODE_TYPE]) ? (C(), a("div", ff, [
						o("span", pf, A(j(u)[j(J).NODE_TYPE]) + " Node", 1),
						l[53] ||= s(),
						o("span", { innerHTML: j(il)(j(u)[j(J).NODE_TYPE]) }, null, 8, mf)
					])) : i("", !0),
					l[58] ||= s(),
					o("ul", hf, [
						o("li", gf, [o("a", {
							class: _(["nav-link px-2 py-1", { active: m.value === "misc" }]),
							onClick: l[1] ||= F((e) => m.value = "misc", ["prevent", "stop"]),
							href: ""
						}, "Misc", 2)]),
						l[54] ||= s(),
						o("li", _f, [o("a", {
							class: _(["nav-link px-2 py-1", {
								active: m.value === "output",
								disabled: !j(u)[j(J).OUTPUT]
							}]),
							onClick: l[2] ||= F((e) => m.value = "output", ["prevent", "stop"]),
							href: ""
						}, "Output", 2)]),
						l[55] ||= s(),
						o("li", vf, [o("a", {
							class: _(["nav-link px-2 py-1", {
								active: m.value === "workers",
								disabled: !(j(u)[j(J).WORKERS_PLANNED] || j(u)[j(J).WORKERS_PLANNED_BY_GATHER])
							}]),
							onClick: l[3] ||= F((e) => m.value = "workers", ["prevent", "stop"]),
							href: ""
						}, "Workers", 2)])
					]),
					l[59] ||= s(),
					o("div", yf, [
						o("div", { class: _(["tab-pane p-1 border border-top-0", { "show active": m.value === "misc" }]) }, [c(xd, { node: j(u) }, null, 8, ["node"])], 2),
						l[56] ||= s(),
						o("div", {
							class: _(["tab-pane p-1 border border-top-0 overflow-auto font-monospace", { "show active": m.value === "output" }]),
							innerHTML: j(T)("OUTPUT"),
							style: { "max-height": "200px" },
							onMousewheel: l[4] ||= F(() => {}, ["stop"])
						}, null, 42, bf),
						l[57] ||= s(),
						o("div", { class: _(["tab-pane p-1 border border-top-0 rounded rounded-top-start-0", { "show active": m.value === "workers" }]) }, [c(gd, { node: j(u) }, null, 8, ["node"])], 2)
					])
				])])) : i("", !0)
			], 34),
			l[94] ||= s(),
			n.columns.includes("shared.hit") ? (C(), a("td", xf, [
				c(sd, { percentage: j(ue) }, null, 8, ["percentage"]),
				l[64] ||= s(),
				P((C(), a("div", Sf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_SHARED_HIT_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_SHARED_HIT_BLOCKS),
					allowHTML: !0
				}]]),
				l[65] ||= s(),
				R.value ? (C(), a("div", Cf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_SHARED_HIT_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[95] ||= s(),
			n.columns.includes("shared.read") ? (C(), a("td", wf, [
				c(sd, { percentage: j(de) }, null, 8, ["percentage"]),
				l[66] ||= s(),
				P((C(), a("div", Tf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_SHARED_READ_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_SHARED_READ_BLOCKS),
					allowHTML: !0
				}]]),
				l[67] ||= s(),
				R.value ? (C(), a("div", Ef, A(j(Gl)(j(u)[j(J).EXCLUSIVE_SHARED_READ_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[96] ||= s(),
			n.columns.includes("shared.dirtied") ? (C(), a("td", Df, [
				c(sd, { percentage: j(L) }, null, 8, ["percentage"]),
				l[68] ||= s(),
				P((C(), a("div", Of, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_SHARED_DIRTIED_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_SHARED_DIRTIED_BLOCKS),
					allowHTML: !0
				}]]),
				l[69] ||= s(),
				R.value ? (C(), a("div", kf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_SHARED_DIRTIED_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[97] ||= s(),
			n.columns.includes("shared.written") ? (C(), a("td", Af, [
				c(sd, { percentage: j(fe) }, null, 8, ["percentage"]),
				l[70] ||= s(),
				P((C(), a("div", jf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_SHARED_WRITTEN_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_SHARED_WRITTEN_BLOCKS),
					allowHTML: !0
				}]]),
				l[71] ||= s(),
				R.value ? (C(), a("div", Mf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_SHARED_WRITTEN_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[98] ||= s(),
			n.columns.includes("temp.read") ? (C(), a("td", Nf, [
				c(sd, { percentage: j(me) }, null, 8, ["percentage"]),
				l[72] ||= s(),
				P((C(), a("div", Pf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_TEMP_READ_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_TEMP_READ_BLOCKS),
					allowHTML: !0
				}]]),
				l[73] ||= s(),
				R.value ? (C(), a("div", Ff, A(j(Gl)(j(u)[j(J).EXCLUSIVE_TEMP_READ_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[99] ||= s(),
			n.columns.includes("temp.written") ? (C(), a("td", If, [
				c(sd, { percentage: j(ge) }, null, 8, ["percentage"]),
				l[74] ||= s(),
				P((C(), a("div", Lf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_TEMP_WRITTEN_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_TEMP_WRITTEN_BLOCKS),
					allowHTML: !0
				}]]),
				l[75] ||= s(),
				R.value ? (C(), a("div", Rf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_TEMP_WRITTEN_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[100] ||= s(),
			n.columns.includes("local.hit") ? (C(), a("td", zf, [
				c(sd, { percentage: j(te) }, null, 8, ["percentage"]),
				l[76] ||= s(),
				P((C(), a("div", Bf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_LOCAL_HIT_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_LOCAL_HIT_BLOCKS),
					allowHTML: !0
				}]]),
				l[77] ||= s(),
				R.value ? (C(), a("div", Vf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_LOCAL_HIT_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[101] ||= s(),
			n.columns.includes("local.read") ? (C(), a("td", Hf, [
				c(sd, { percentage: j(M) }, null, 8, ["percentage"]),
				l[78] ||= s(),
				P((C(), a("div", Uf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_LOCAL_READ_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_LOCAL_READ_BLOCKS),
					allowHTML: !0
				}]]),
				l[79] ||= s(),
				R.value ? (C(), a("div", Wf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_LOCAL_READ_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[102] ||= s(),
			n.columns.includes("local.dirtied") ? (C(), a("td", Gf, [
				c(sd, { percentage: j(k) }, null, 8, ["percentage"]),
				l[80] ||= s(),
				P((C(), a("div", Kf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS),
					allowHTML: !0
				}]]),
				l[81] ||= s(),
				R.value ? (C(), a("div", qf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0),
			l[103] ||= s(),
			n.columns.includes("local.written") ? (C(), a("td", Jf, [
				c(sd, { percentage: j(I) }, null, 8, ["percentage"]),
				l[82] ||= s(),
				P((C(), a("div", Yf, [s(A(j(Kl)(j(u)[j(J).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS])), 1)])), [[j(Fr), {
					content: j(h)(j(J).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS),
					allowHTML: !0
				}]]),
				l[83] ||= s(),
				R.value ? (C(), a("div", Xf, A(j(Gl)(j(u)[j(J).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS])), 1)) : i("", !0)
			])) : i("", !0)
		], 2));
	}
}), Qf = { class: "table table-sm table-hover" }, $f = {
	class: "sticky-top",
	style: { "z-index": "2" }
}, ep = {
	key: 0,
	class: "table-group"
}, tp = ["colspan"], np = ["colspan"], rp = ["colspan"], ip = ["colspan"], ap = ["colspan"], op = {
	key: 0,
	class: "text-center"
}, sp = {
	key: 1,
	class: "text-center"
}, cp = {
	key: 2,
	class: "text-center"
}, lp = {
	key: 3,
	class: "text-center"
}, up = {
	key: 4,
	class: "text-center"
}, dp = {
	key: 5,
	class: "text-center"
}, fp = {
	key: 6,
	class: "text-center"
}, pp = {
	key: 7,
	class: "text-center"
}, mp = {
	key: 8,
	class: "text-center"
}, hp = {
	key: 9,
	class: "text-center"
}, gp = {
	key: 10,
	class: "text-center"
}, _p = {
	key: 11,
	class: "text-center"
}, vp = {
	key: 12,
	class: "text-center"
}, yp = {
	key: 13,
	class: "text-center"
}, bp = {
	key: 14,
	class: "text-center"
}, xp = {
	key: 15,
	class: "text-center"
}, Sp = {
	key: 16,
	class: "text-center"
}, Cp = {
	key: 17,
	class: "text-center"
}, wp = {
	key: 18,
	class: "text-center"
}, Tp = { key: 0 }, Ep = ["colspan"], Dp = ["colspan"], Op = { class: "fst-italic text-reset" }, kp = /*#__PURE__*/ Sl(/* @__PURE__ */ l({
	__name: "Grid",
	setup(n) {
		x(() => {
			localStorage.setItem("gridIsNotNew", "true");
		});
		function r(e) {
			return L.default.startsWith(e[J.SUBPLAN_NAME], "CTE");
		}
		let l = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_DURATION] || !1))), u = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.IO_READ_TIME] || e.node[J.SHARED_IO_READ_TIME] || e.node[J.LOCAL_IO_READ_TIME] || e.node[J.TEMP_IO_READ_TIME]))), d = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.IO_WRITE_TIME] || e.node[J.SHARED_IO_WRITE_TIME] || e.node[J.LOCAL_IO_WRITE_TIME] || e.node[J.TEMP_IO_WRITE_TIME]))), f = t(() => u.value || d.value), p = t(() => L.default.filter([u.value, d.value], (e) => e).length), m = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.ACTUAL_ROWS_REVISED] || !1))), h = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.PLANNER_ESTIMATE_FACTOR] || !1))), g = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.ACTUAL_LOOPS] > 1))), v = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_COST] > 1))), y = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.ROWS_REMOVED_BY_FILTER] || e.node[J.ROWS_REMOVED_BY_JOIN_FILTER] || e.node[J.ROWS_REMOVED_BY_INDEX_RECHECK]))), b = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.HEAP_FETCHES]))), S = t(() => L.default.filter([
			w.value,
			T.value,
			E.value,
			O.value
		], (e) => e).length), w = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_SHARED_HIT_BLOCKS]))), T = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_SHARED_READ_BLOCKS]))), E = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS]))), O = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS]))), ee = t(() => L.default.filter([k.value, te.value], (e) => e).length), k = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_TEMP_READ_BLOCKS]))), te = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS]))), M = t(() => L.default.filter([
			N.value,
			P.value,
			F.value,
			I.value
		], (e) => e).length), N = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_LOCAL_HIT_BLOCKS]))), P = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_LOCAL_READ_BLOCKS]))), F = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS]))), I = t(() => L.default.some(Y.flat, (e) => L.default.some(e, (e) => e.node[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS]))), ne = t(() => {
			let e = [];
			return l.value && e.push("time"), u.value && e.push("ioread"), d.value && e.push("iowrite"), m.value && e.push("rows"), h.value && e.push("estimation"), v.value && e.push("cost"), g.value && e.push("loops"), y.value && e.push("filter"), b.value && e.push("heapfetches"), e;
		}), re = t(() => {
			let e = [];
			return w.value && e.push("shared.hit"), T.value && e.push("shared.read"), E.value && e.push("shared.dirtied"), O.value && e.push("shared.written"), k.value && e.push("temp.read"), te.value && e.push("temp.written"), N.value && e.push("local.hit"), P.value && e.push("local.read"), F.value && e.push("local.dirtied"), I.value && e.push("local.written"), e;
		}), ie = t(() => [].concat(ne.value, re.value));
		return (t, n) => (C(), a("div", null, [o("table", Qf, [
			o("thead", $f, [
				f.value || re.value.length > 0 ? (C(), a("tr", ep, [
					n[0] ||= o("th", { colspan: "2" }, null, -1),
					n[1] ||= s(),
					f.value ? (C(), a("th", {
						key: 0,
						class: "text-center",
						colspan: p.value
					}, "io", 8, tp)) : i("", !0),
					n[2] ||= s(),
					o("th", { colspan: ne.value.length - p.value }, null, 8, np),
					n[3] ||= s(),
					S.value > 0 ? (C(), a("th", {
						key: 1,
						class: "text-center",
						colspan: S.value
					}, "\n            shared\n          ", 8, rp)) : i("", !0),
					n[4] ||= s(),
					ee.value > 0 ? (C(), a("th", {
						key: 2,
						class: "text-center",
						colspan: ee.value
					}, "\n            temp\n          ", 8, ip)) : i("", !0),
					n[5] ||= s(),
					M.value > 0 ? (C(), a("th", {
						key: 3,
						class: "text-center",
						colspan: M.value
					}, "\n            local\n          ", 8, ap)) : i("", !0)
				])) : i("", !0),
				n[28] ||= s(),
				o("tr", null, [
					n[6] ||= o("th", { class: "text-center" }, null, -1),
					n[7] ||= s(),
					l.value ? (C(), a("th", op, "time")) : i("", !0),
					n[8] ||= s(),
					u.value ? (C(), a("th", sp, "read")) : i("", !0),
					n[9] ||= s(),
					d.value ? (C(), a("th", cp, "write")) : i("", !0),
					n[10] ||= s(),
					m.value ? (C(), a("th", lp, "rows")) : i("", !0),
					n[11] ||= s(),
					h.value ? (C(), a("th", up, "estim")) : i("", !0),
					n[12] ||= s(),
					v.value ? (C(), a("th", dp, "cost")) : i("", !0),
					n[13] ||= s(),
					g.value ? (C(), a("th", fp, "loops")) : i("", !0),
					n[14] ||= s(),
					y.value ? (C(), a("th", pp, "filter")) : i("", !0),
					n[15] ||= s(),
					b.value ? (C(), a("th", mp, "heap")) : i("", !0),
					n[16] ||= s(),
					n[17] ||= o("th", { style: { width: "100%" } }, null, -1),
					n[18] ||= s(),
					w.value ? (C(), a("th", hp, "hit")) : i("", !0),
					n[19] ||= s(),
					T.value ? (C(), a("th", gp, "read")) : i("", !0),
					n[20] ||= s(),
					E.value ? (C(), a("th", _p, "dirt")) : i("", !0),
					n[21] ||= s(),
					O.value ? (C(), a("th", vp, "writ")) : i("", !0),
					n[22] ||= s(),
					k.value ? (C(), a("th", yp, "read")) : i("", !0),
					n[23] ||= s(),
					te.value ? (C(), a("th", bp, "writ")) : i("", !0),
					n[24] ||= s(),
					N.value ? (C(), a("th", xp, "hit")) : i("", !0),
					n[25] ||= s(),
					P.value ? (C(), a("th", Sp, "read")) : i("", !0),
					n[26] ||= s(),
					F.value ? (C(), a("th", Cp, "dirt")) : i("", !0),
					n[27] ||= s(),
					I.value ? (C(), a("th", wp, "writ")) : i("", !0)
				])
			]),
			n[32] ||= s(),
			(C(!0), a(e, null, D(j(Y).flat, (t, l) => (C(), a("tbody", { key: l }, [(C(!0), a(e, null, D(t, (t) => (C(), a(e, { key: t }, [
				t.node[j(J).SUBPLAN_NAME] ? (C(), a("tr", Tp, [
					o("td", {
						class: "bg-body-tertiary",
						colspan: 1 + ne.value.length
					}, null, 8, Ep),
					n[30] ||= s(),
					o("td", {
						class: _(["plan pr-2 bg-body-tertiary", { "font-weight-bold": r(t.node) }]),
						colspan: ie.value.length + re.value.length
					}, [
						c(Cl, { row: t }, null, 8, ["row"]),
						n[29] ||= s(),
						o("b", Op, A(t.node[j(J).SUBPLAN_NAME]), 1)
					], 10, Dp)
				])) : i("", !0),
				n[31] ||= s(),
				c(Zf, {
					row: t,
					columns: ie.value
				}, null, 8, ["row", "columns"])
			], 64))), 128))]))), 128))
		])]));
	}
}), [["__scopeId", "data-v-881db010"]]), Ap = {}, jp = {
	src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAC1QAAAtUBwMJvJQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAf5SURBVGiB7Zp7UFT3Fcc/v3vv8kaQgA8CEmtE8ZEYiVETjS+UkUcm09FM0rE2iRPttOOjY60WbLwNQoI6I9HONNo2rbZpxmo7RkBH8Z34qJpEx2cdoxHREZ8gu+yyu9xf/4BddoFdFlzTOu33r7vnd37nnO+9v9c5vxUEGfp4PcwWpb1pSDFTQBqAhPNCig3h9fYN+n7dFkx/IpjGFucsz0WKEuB7PlSqEOQXl+X9GYQMhs+gEPhFdkGaQFkNZAbkVHJAKur84rIlpx7W90MR+FmmHhdqClkmpfwpoLrkIWEhjJs2iuEThgLw1b7THNhyFLvN7tndEEJ+oihiUdG2/OquxtAlArPT15niet15S0IhEO82JmDIS2lkz5pEbEI3rz5198xU/PVzju88iZReo6dGwAcWI7pk7Y55DY+cwJLsggwDZbWAIZ7ypP69yZ09mZS0JL/9r1+6ybb1u7h6rqp100VDioUrt+eVdSaegAksyinor0i1EOR0T3m3uCgyfjCWEZnDECIwc1LCmUPn2f7xXu7fqm0d0m4U54Li0nfPBmKrQ4/6dD3KZjX9XEqWAKEuuaqpjMoazpQfjiM0PCSgwFvD0eDgwN+PcmDLERx2p1eTEOK3Ns2+rGSrXtMlArquK9YTphlIVgA9PdvSXuhP7uzJxPWK7VLgrVF7p46dG/fz9b7TeE8P7iF473J4/99s3vxaY3t92yWwKLtorIJcAwzzlPdIjifnnQxSh/ta5h8Ol89UUra+ghuX2yxKJw3EvJXleZ+3bmhDYHF20bsglwGKSxYRHc6kN8YwOud5FMX/qLOabVRfvY3R6lUqQtAzJYHwqDC//aWUfL3vLNs/3oO5xuLZZEjQV5TnF/gksDiraA5CfuT6rWoK6RnPkjlzHJHdIvw6djnf8cd91NdZ222PiA5n6lsTAprsVouN/ZuPcOizYzgdLaNHwJwPyvPXtyGg5+oRVsNUBXQHSElLYtr8bBKSnujQmQt2m51t6yr86rwyZzIhYYFP+ttVd9lcUkblhesuUU2jIyRp1a5FFvAYJjap5bqCj03oxqyC1zsV/KNCQtITzCp4g5h498YYq5kaslw/3ASkVAa4ngePHtCpt/SoERoewuDRqe7fBmKg61lpUTOiXU9hEaH8tyE8smXyC6T7cyjtaj9GCCoB1aShqL5NKqqCatKC6ZKgWlNVhRFTnuXquSoMQ3Lr2h2gaQNUFEHKoCRUPwS7guC+DiA5NZHk1EQMQ/KPtdsBGPPqCx1ugF3FYz8HuvwFzLX1OBocPtul0XKUqLlVi/DzBUJCTUTGdLzTt4cuEThRcYpv2yYkPrF306EOdfoOTiY945lOx9JpAubaer49V4WiKv4PZhIsD+oBms5RfqaA1WzjytlrDBzxdKe/RKcJOJoT86jYSKbMeNmnnuckzvzReL+TeNdfDvLgbh12m73TBP53JrGUEqvZhtXcVFgzGg0stfVoIVqblNJqseG0txyBm/RUr+MAwP1bNVhqrdQ/sNJgtXPz6m1sVjs9+8SjKIG924AIOB1O9m46zIO7dW6ZucbCjj/tA2DQqFQGjewPwOHSE20yqp0b9wPwZL9ejM5JB+DTFVs5dfCcl97pL84DEBkTwcKPfkxEtP/kBwIcQvdv1XoF3xquEomjwdleOujG9W9uupP3iycu+9Sz1NZz8ctLgYQWGAHPNb3d9ub0UUojAFtNOkYHuk5nuzl8Gzz2k/j/BP7TaCEgFXeNr3VVoaMlzbVJBbL0uXT85Q0Amua9QJpr6z2t3Hc/uR6EYrhrkacPXfAi0b1XLPGJcT6D7zfsqSanIRpPDU5ut2wihKDv4GS0kKbAnhk7yOcBL65nDGnNyzI0HUnOHvlXi4JsidVtYe7UNaERqrkSKXsA9OgTz7R52fQZ+KS7n9PubFOw0jS1zdtsdDbS2Oi9yqiqgqqpXjK7zYHV4n3jpGmq13Gi8sJ1tnxY7k6OgOrwCEcffbNu9yIAsCR7+XSJ+JubXXO9P+vtiXTvEcN3iQf3zOxue58gpRCvrSjL2+KOsXXH5urch3hUok2hJl7MfZ5Jr7/0yMstDruTw9uOs3fTIRqsXjc6DQgxt7gs73eewnYHYV524ZBGKAEmecpj4qPJnDmB5yYMIcCrgE7h/LFLlK7bxb3qNhX1PSosKCrPP9O6wW8YzbeOq4F+nvLkAYm8MnsKyQMSHzpogBuXqyldX8GVM5Vecim5JhSWFpflb/TVt8P3ODt9nal77zs/QfIe4C4oCSF4bsIQst6eSFRsZJcCr6+zsufTLzhSdgLD+7hiEYJVYWbHBx3dKwc8EPIyC3s7NXQBs2h1I/ny90cyfvqLaCbVj4UWNDoNjm7/kopPDmKzeN3rSRBbNM1YWPjZ0muB2OrCJd/76RKjBBjjKY9PjCNz5jiGjknz2//SySuUrt9NdeVt7wbJcUUR898vyzvSmXi6PBUX5yzPFVKslZDiKX96WF9y38mgZ0qCl/6d6/co/8Nuzh9rc0y+IeDXYSMcv9d1vePjbCs81Fqi5+oRNsM0V8JSIMolVzWFkVOHM3zi0OYblzP8c8dXNDq94rNKWIOqFa7Ytth3stEBgvNXg6nFSYrqKJJSzAjEphCyzCnkvFWlv7rysL6Dupr/MqtopKHIEiSjfKicNBSxYGVp3oFg+Qz6dqTrulJ/PORVIeWbCAYBIDknkBu+iUzd6uu6tKv4N+243iwIA9v6AAAAAElFTkSuQmCC",
	alt: "PEV2",
	style: {
		width: "20px",
		height: "20px"
	}
};
function Mp(e, t) {
	return C(), a("img", jp);
}
var Np = /*#__PURE__*/ Sl(Ap, [["render", Mp]]), Pp = { class: "table table-sm" }, Fp = ["innerHTML"], Ip = ["innerHTML"], Lp = ["innerHTML"], Rp = ["innerHTML"], zp = ["innerHTML"], Bp = ["innerHTML"], Vp = ["innerHTML"], Hp = ["innerHTML"], Up = ["innerHTML"], Wp = ["innerHTML"], Gp = /* @__PURE__ */ l({
	__name: "BuffersDetail",
	props: { object: {} },
	setup(e) {
		let t = e, n = J.EXCLUSIVE_SHARED_HIT_BLOCKS in t.object ? t.object[J.EXCLUSIVE_SHARED_HIT_BLOCKS] : t.object[Zc.SHARED_HIT_BLOCKS], r = J.EXCLUSIVE_SHARED_READ_BLOCKS in t.object ? t.object[J.EXCLUSIVE_SHARED_READ_BLOCKS] : t.object[Zc.SHARED_READ_BLOCKS], i = J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS in t.object ? t.object[J.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] : t.object[Zc.SHARED_DIRTIED_BLOCKS], c = J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS in t.object ? t.object[J.EXCLUSIVE_SHARED_WRITTEN_BLOCKS] : t.object[Zc.SHARED_WRITTEN_BLOCKS], l = J.EXCLUSIVE_LOCAL_HIT_BLOCKS in t.object ? t.object[J.EXCLUSIVE_LOCAL_HIT_BLOCKS] : t.object[Zc.LOCAL_HIT_BLOCKS], u = J.EXCLUSIVE_LOCAL_READ_BLOCKS in t.object ? t.object[J.EXCLUSIVE_LOCAL_READ_BLOCKS] : t.object[Zc.LOCAL_READ_BLOCKS], d = J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS in t.object ? t.object[J.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] : t.object[Zc.LOCAL_DIRTIED_BLOCKS], f = J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS in t.object ? t.object[J.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] : t.object[Zc.LOCAL_WRITTEN_BLOCKS], p = J.EXCLUSIVE_TEMP_READ_BLOCKS in t.object ? t.object[J.EXCLUSIVE_TEMP_READ_BLOCKS] : t.object[Zc.TEMP_READ_BLOCKS], m = J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS in t.object ? t.object[J.EXCLUSIVE_TEMP_WRITTEN_BLOCKS] : t.object[Zc.TEMP_WRITTEN_BLOCKS];
		return (e, t) => (C(), a("table", Pp, [
			t[19] ||= o("thead", null, [o("tr", null, [
				o("th", null, "Blocks"),
				s(),
				o("td", {
					class: "text-end",
					width: "25%"
				}, "Hit"),
				s(),
				o("td", {
					class: "text-end",
					width: "25%"
				}, "Read"),
				s(),
				o("td", {
					class: "text-end",
					width: "25%"
				}, "Dirtied"),
				s(),
				o("td", {
					class: "text-end",
					width: "25%"
				}, "Written")
			])], -1),
			t[20] ||= s(),
			o("tbody", null, [
				o("tr", null, [
					t[0] ||= o("td", null, "Shared", -1),
					t[1] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(n), !0) || "-"
					}, null, 8, Fp),
					t[2] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(r), !0) || "-"
					}, null, 8, Ip),
					t[3] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(i), !0) || "-"
					}, null, 8, Lp),
					t[4] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(c), !0) || "-"
					}, null, 8, Rp)
				]),
				t[17] ||= s(),
				o("tr", null, [
					t[5] ||= o("td", null, "Temp", -1),
					t[6] ||= s(),
					t[7] ||= o("td", { class: "text-end bg-hatched" }, null, -1),
					t[8] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(p), !0) || "-"
					}, null, 8, zp),
					t[9] ||= s(),
					t[10] ||= o("td", { class: "text-end bg-hatched" }, null, -1),
					t[11] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(m), !0) || "-"
					}, null, 8, Bp)
				]),
				t[18] ||= s(),
				o("tr", null, [
					t[12] ||= o("td", null, "Local", -1),
					t[13] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(l), !0) || "-"
					}, null, 8, Vp),
					t[14] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(u), !0) || "-"
					}, null, 8, Hp),
					t[15] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(d), !0) || "-"
					}, null, 8, Up),
					t[16] ||= s(),
					o("td", {
						class: "text-end",
						innerHTML: j(Kl)(j(f), !0) || "-"
					}, null, 8, Wp)
				])
			])
		]));
	}
}), Kp = { class: "card-header border-top" }, qp = {
	key: 0,
	class: "node-description"
}, Jp = { class: "node-type" }, Yp = ["innerHTML"], Xp = { class: "nav nav-tabs card-header-tabs" }, Zp = { class: "nav-item" }, Qp = { class: "nav-item" }, $p = { class: "nav-item" }, em = { class: "nav-item" }, tm = { class: "nav-item" }, nm = { class: "card-body tab-content" }, rm = { key: 0 }, im = ["innerHTML"], am = { class: "px-1" }, om = {
	key: 0,
	class: "text-body-tertiary"
}, sm = { key: 1 }, cm = { key: 0 }, lm = { key: 1 }, um = { key: 2 }, dm = ["innerHTML"], fm = { key: 1 }, pm = { class: "px-1" }, mm = { key: 2 }, hm = ["innerHTML"], gm = { key: 3 }, _m = { class: "text-body-tertiary" }, vm = { key: 4 }, ym = { class: "px-1" }, bm = {
	key: 0,
	class: "mb-2"
}, xm = { class: "more-info" }, Sm = { key: 0 }, Cm = { class: "more-info" }, wm = ["innerHTML"], Tm = /* @__PURE__ */ l({
	__name: "PlanNodeDetail",
	props: { node: {} },
	setup(n) {
		let l = f(he), u = n, d = f("updateSize"), p = T(u.node), m = E(), h = E("general"), { costClass: g, durationClass: v, estimationClass: b, executionTimePercent: x, filterDetailTooltip: S, formattedProp: w, heapFetchesClass: D, indexRecheckTooltip: O, plannerRowEstimateDirection: ee, plannerRowEstimateValue: k, rowsRemoved: te, rowsRemovedClass: N, rowsRemovedPercentString: I, rowsRemovedProp: ne, tilde: re } = fu(p, l);
		y(() => {
			ae();
		});
		let ie = t(() => b.value && ee.value !== Xc.none && k.value);
		function ae() {
			m.value = L.default.chain(p).omit(J.PLANS).omit(J.WORKERS).map((e, t) => ({
				key: t,
				value: e
			})).value();
		}
		let oe = t(() => {
			let e = L.default.map([
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
			], (e) => {
				let t = p[J[e]];
				return L.default.isNaN(t) ? 0 : t;
			});
			return L.default.sum(e) > 0;
		});
		return M(h, () => {
			window.setTimeout(() => d && d(p), 1);
		}), (t, n) => (C(), a(e, null, [
			o("div", Kp, [
				j(il)(p[j(J).NODE_TYPE]) ? (C(), a("div", qp, [
					o("span", Jp, A(p[j(J).NODE_TYPE]) + " Node", 1),
					n[6] ||= s(),
					o("span", { innerHTML: j(il)(p[j(J).NODE_TYPE]) }, null, 8, Yp)
				])) : i("", !0),
				n[11] ||= s(),
				o("ul", Xp, [
					o("li", Zp, [o("a", {
						class: _(["nav-link", { active: h.value === "general" }]),
						onClick: n[0] ||= F((e) => h.value = "general", ["prevent", "stop"]),
						href: ""
					}, "General", 2)]),
					n[7] ||= s(),
					o("li", Qp, [o("a", {
						class: _(["nav-link text-nowrap", {
							active: h.value === "iobuffer",
							disabled: !oe.value
						}]),
						onClick: n[1] ||= F((e) => h.value = "iobuffer", ["prevent", "stop"]),
						href: ""
					}, "IO & Buffers", 2)]),
					n[8] ||= s(),
					o("li", $p, [o("a", {
						class: _(["nav-link", {
							active: h.value === "output",
							disabled: !p[j(J).OUTPUT]
						}]),
						onClick: n[2] ||= F((e) => h.value = "output", ["prevent", "stop"]),
						href: ""
					}, "Output", 2)]),
					n[9] ||= s(),
					o("li", em, [o("a", {
						class: _(["nav-link", {
							active: h.value === "workers",
							disabled: !(p[j(J).WORKERS_PLANNED] || p[j(J).WORKERS_PLANNED_BY_GATHER])
						}]),
						onClick: n[3] ||= F((e) => h.value = "workers", ["prevent", "stop"]),
						href: ""
					}, "Workers", 2)]),
					n[10] ||= s(),
					o("li", tm, [o("a", {
						class: _(["nav-link", { active: h.value === "misc" }]),
						onClick: n[4] ||= F((e) => h.value = "misc", ["prevent", "stop"]),
						href: ""
					}, "Misc", 2)])
				])
			]),
			n[60] ||= s(),
			o("div", nm, [
				o("div", { class: _(["tab-pane", { "show active": h.value === "general" }]) }, [
					j(Y).plan?.isAnalyze ? (C(), a("div", rm, [
						c(j(K), {
							"fixed-width": "",
							icon: j(jc),
							class: "text-body-tertiary"
						}, null, 8, ["icon"]),
						n[14] ||= s(),
						n[15] ||= o("b", null, "Timing:", -1),
						n[16] ||= s(),
						o("span", {
							class: _(["p-0 px-1 rounded alert", j(v)]),
							innerHTML: j(w)("EXCLUSIVE_DURATION")
						}, null, 10, im),
						n[17] ||= s(),
						j(x) && j(x) !== Infinity ? (C(), a(e, { key: 0 }, [
							n[12] ||= s("\n          |\n          ", -1),
							o("strong", null, A(j(x)), 1),
							n[13] ||= o("span", { class: "text-body-tertiary" }, "%", -1)
						], 64)) : i("", !0)
					])) : i("", !0),
					n[44] ||= s(),
					o("div", null, [
						c(j(K), {
							"fixed-width": "",
							icon: j(wc),
							class: "text-body-tertiary"
						}, null, 8, ["icon"]),
						n[24] ||= s(),
						n[25] ||= o("b", null, "Rows:", -1),
						n[26] ||= s(),
						o("span", am, A(j(re) + j(w)("ACTUAL_ROWS_REVISED")), 1),
						n[27] ||= s(),
						p[j(J).PLAN_ROWS] ? (C(), a("span", om, "(Planned: " + A(j(re) + j(w)("PLAN_ROWS_REVISED")) + ")", 1)) : i("", !0),
						n[28] ||= s(),
						j(ee) !== j(Xc).none && ie.value ? (C(), a("span", sm, [
							n[21] ||= s("\n          |\n          ", -1),
							j(ee) === j(Xc).over ? (C(), a("span", cm, [c(j(K), { icon: j(Rc) }, null, 8, ["icon"]), n[18] ||= s(" over", -1)])) : i("", !0),
							n[22] ||= s(),
							j(ee) === j(Xc).under ? (C(), a("span", lm, [c(j(K), { icon: j(Fc) }, null, 8, ["icon"]), n[19] ||= s(" under", -1)])) : i("", !0),
							n[23] ||= s("\n          estimated\n          ", -1),
							j(k) == Infinity ? i("", !0) : (C(), a("span", um, [n[20] ||= s("\n            by\n            ", -1), o("span", {
								class: _(["p-0 px-1 alert", j(b)]),
								innerHTML: j(w)("PLANNER_ESTIMATE_FACTOR")
							}, null, 10, dm)]))
						])) : i("", !0)
					]),
					n[45] ||= s(),
					j(te) ? (C(), a("div", fm, [
						c(j(K), {
							"fixed-width": "",
							icon: j(Oc),
							class: "text-body-tertiary"
						}, null, 8, ["icon"]),
						n[30] ||= s(),
						o("b", null, A(j(J)[j(ne)]) + ": ", 1),
						n[31] ||= s(),
						o("span", null, [
							o("span", pm, A(j(re) + j(w)(j(ne))), 1),
							n[29] ||= s("|\n          ", -1),
							o("span", { class: _(["p-0 px-1 alert", j(N)]) }, A(j(I)) + "%", 3)
						]),
						n[32] ||= s(),
						j(ne) == "ROWS_REMOVED_BY_INDEX_RECHECK_REVISED" ? P((C(), r(j(K), {
							key: 0,
							"fixed-width": "",
							icon: j(kc),
							class: "text-muted"
						}, null, 8, ["icon"])), [[j(Fr), {
							allowHTML: !0,
							content: j(O)
						}]]) : P((C(), r(j(K), {
							key: 1,
							"fixed-width": "",
							icon: j(kc),
							class: "text-muted"
						}, null, 8, ["icon"])), [[j(Fr), {
							allowHTML: !0,
							content: j(S)
						}]])
					])) : i("", !0),
					n[46] ||= s(),
					p[j(J).HEAP_FETCHES] ? (C(), a("div", mm, [
						c(j(K), {
							"fixed-width": "",
							icon: j(Uc),
							class: "text-body-tertiary"
						}, null, 8, ["icon"]),
						n[33] ||= s(),
						n[34] ||= o("b", null, "Heap Fetches:", -1),
						n[35] ||= s(),
						o("span", {
							class: _(["p-0 px-1 rounded alert", j(D)]),
							innerHTML: j(w)("HEAP_FETCHES")
						}, null, 10, hm),
						n[36] ||= s(),
						j(D) ? P((C(), r(j(K), {
							key: 0,
							icon: j(kc),
							"fixed-width": "",
							class: "text-body-tertiary"
						}, null, 8, ["icon"])), [[j(Fr), {
							arrow: !0,
							content: "Visibility map may be out-of-date. Consider using VACUUM or change autovacuum settings."
						}]]) : i("", !0)
					])) : i("", !0),
					n[47] ||= s(),
					j(L.default).isUndefined(p[j(J).EXCLUSIVE_COST]) ? i("", !0) : (C(), a("div", gm, [
						c(j(K), {
							"fixed-width": "",
							icon: j(Wc),
							class: "text-body-tertiary"
						}, null, 8, ["icon"]),
						n[37] ||= s(),
						n[38] ||= o("b", null, "Cost:", -1),
						n[39] ||= s(),
						o("span", { class: _(["p-0 px-1 me-1 alert", j(g)]) }, A(j(w)("EXCLUSIVE_COST")), 3),
						n[40] ||= s(),
						o("span", _m, "(Total: " + A(j(w)("TOTAL_COST")) + ")", 1)
					])),
					n[48] ||= s(),
					p[j(J).ACTUAL_LOOPS] > 1 ? (C(), a("div", vm, [
						c(j(K), {
							"fixed-width": "",
							icon: j(Ac),
							class: "text-body-tertiary"
						}, null, 8, ["icon"]),
						n[41] ||= s(),
						n[42] ||= o("b", null, "Loops:", -1),
						n[43] ||= s(),
						o("span", ym, A(j(w)("ACTUAL_LOOPS")), 1)
					])) : i("", !0)
				], 2),
				n[56] ||= s(),
				o("div", { class: _(["tab-pane", { "show active": h.value === "iobuffer" }]) }, [
					c(yu, {
						node: p,
						exclusive: ""
					}, null, 8, ["node"]),
					n[54] ||= s(),
					c(Gp, { object: p }, null, 8, ["object"]),
					n[55] ||= s(),
					p[j(J).WAL_RECORDS] || p[j(J).WAL_BYTES] ? (C(), a("div", bm, [
						o("b", null, [P((C(), a("span", xm, [...n[49] ||= [s("WAL", -1)]])), [[j(Fr), "Write-Ahead Logging"]]), n[50] ||= s(":\n        ", -1)]),
						s(" " + A(j(w)("WAL_RECORDS")) + " records\n        ", 1),
						o("small", null, "(" + A(j(w)("WAL_BYTES")) + ")", 1),
						n[53] ||= s(),
						p[j(J).WAL_FPI] ? (C(), a("span", Sm, [
							n[52] ||= s("\n          -\n          ", -1),
							P((C(), a("span", Cm, [...n[51] ||= [s("FPI", -1)]])), [[j(Fr), "WAL Full Page Images"]]),
							s(":\n          " + A(j(w)("WAL_FPI")), 1)
						])) : i("", !0)
					])) : i("", !0)
				], 2),
				n[57] ||= s(),
				o("div", {
					class: _(["tab-pane overflow-auto font-monospace", { "show active": h.value === "output" }]),
					innerHTML: j(w)("OUTPUT"),
					style: { "max-height": "200px" },
					onMousewheel: n[5] ||= F(() => {}, ["stop"])
				}, null, 42, wm),
				n[58] ||= s(),
				p[j(J).WORKERS_PLANNED] || p[j(J).WORKERS_PLANNED_BY_GATHER] ? (C(), a("div", {
					key: 0,
					class: _(["tab-pane", { "show active": h.value === "workers" }])
				}, [c(gd, { node: p }, null, 8, ["node"])], 2)) : i("", !0),
				n[59] ||= s(),
				o("div", { class: _(["tab-pane", { "show active": h.value === "misc" }]) }, [c(xd, { node: p }, null, 8, ["node"])], 2)
			])
		], 64));
	}
}), Em = {
	key: 5,
	class: "p-0 d-inline-block mb-0 ms-1 text-nowrap"
}, Dm = /* @__PURE__ */ l({
	__name: "NodeBadges",
	props: { node: {} },
	setup(t) {
		let { rowsRemoved: n, costClass: r, durationClass: o, estimationClass: l, rowsRemovedClass: u, heapFetchesClass: d, filterTooltip: p } = fu(T(t.node), f(he));
		return (t, f) => (C(), a(e, null, [
			j(o) ? P((C(), a("span", {
				key: 0,
				class: _("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + j(o))
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(jc)
			}, null, 8, ["icon"])], 2)), [[j(Fr), "Slow"]]) : i("", !0),
			f[0] ||= s(),
			j(r) ? P((C(), a("span", {
				key: 1,
				class: _("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + j(r))
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(Wc)
			}, null, 8, ["icon"])], 2)), [[j(Fr), "Cost is high"]]) : i("", !0),
			f[1] ||= s(),
			j(l) ? P((C(), a("span", {
				key: 2,
				class: _("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + j(l))
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(Pc)
			}, null, 8, ["icon"])], 2)), [[j(Fr), "Bad estimation for number of rows"]]) : i("", !0),
			f[2] ||= s(),
			j(u) ? P((C(), a("span", {
				key: 3,
				class: _("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + j(u))
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(Oc)
			}, null, 8, ["icon"])], 2)), [[j(Fr), j(p)]]) : i("", !0),
			f[3] ||= s(),
			j(d) ? P((C(), a("span", {
				key: 4,
				class: _("p-0  d-inline-block mb-0 ms-1 text-nowrap alert " + j(d))
			}, [c(j(K), {
				"fixed-width": "",
				icon: j(Uc)
			}, null, 8, ["icon"])], 2)), [[j(Fr), {
				arrow: !0,
				content: "Heap Fetches number is high"
			}]]) : i("", !0),
			f[4] ||= s(),
			j(n) && !j(u) ? P((C(), a("span", Em, [c(j(K), {
				"fixed-width": "",
				icon: j(Oc),
				class: "text-body-tertiary"
			}, null, 8, ["icon"])])), [[j(Fr), j(p)]]) : i("", !0)
		], 64));
	}
}), Om = {
	key: 0,
	class: "fixed-bottom text-center"
}, km = { class: "subplan-name fst-italic px-1" }, Am = {
	key: 1,
	class: "workers py-0 px-1 h-100 w-100 position-absolute",
	style: {
		left: "-1px",
		top: "1px"
	}
}, jm = { class: "card-body header no-focus-outline" }, Mm = { class: "mb-0 d-flex justify-content-between" }, Nm = { class: "text-body-tertiary" }, Pm = { class: "text-nowrap" }, Fm = { key: 0 }, Im = { class: "text-start font-monospace" }, Lm = { key: 0 }, Rm = { key: 1 }, zm = ["innerHTML"], Bm = ["innerHTML"], Vm = ["innerHTML"], Hm = ["innerHTML"], Um = ["innerHTML"], Wm = { key: 6 }, Gm = { key: 1 }, Km = {
	class: "progress mt-2 mb-1",
	style: { height: "5px" }
}, qm = { class: "node-bar-label" }, Jm = { class: "text-body-tertiary" }, Ym = ["innerHTML"], Xm = {
	key: 1,
	class: "text-end"
}, Zm = /* @__PURE__ */ l({
	__name: "PlanNode",
	props: { node: {} },
	setup(t) {
		let n = E(null), l = f(fe);
		if (!l) throw Error(`Could not resolve ${fe.description}`);
		let u = f(pe), d = f(me);
		if (!d) throw Error(`Could not resolve ${me.description}`);
		let p = f(he), m = t, h = E(!1), y = T(m.node), b = f("updateNodeSize"), { nodeName: S, barWidth: O, barColor: ee, highlightValue: k, isNeverExecuted: te, workersLaunchedCount: N, workersPlannedCount: P, workersPlannedCountReversed: I } = fu(y, p);
		x(async () => {
			ne(y);
		});
		function ne(e) {
			let t = n.value?.getBoundingClientRect();
			t && b?.(e, [t.width, t.height]);
		}
		w("updateSize", ne), M(h, () => {
			window.setTimeout(() => ne(y), 1);
		}), M(p, () => {
			g(() => {
				ne(y);
			});
		}), M(l, () => {
			l.value == y.nodeId && (h.value = !0);
		});
		function re() {
			let e = pl(Y.plan, y[J.CTE_NAME]);
			e && d?.(e.nodeId, !0);
		}
		return (t, f) => (C(), a("div", {
			ref_key: "outerEl",
			ref: n,
			onMousedown: f[4] ||= F(() => {}, ["stop"])
		}, [o("div", { class: _(["text-start plan-node", {
			detailed: h.value,
			parallel: j(P),
			selected: j(l) == y.nodeId,
			highlight: j(u) == y.nodeId
		}]) }, [
			y[j(J).SUBPLAN_NAME] ? (C(), a("div", Om, [o("b", km, A(y[j(J).SUBPLAN_NAME]), 1)])) : i("", !0),
			f[42] ||= s(),
			j(P) ? (C(), a("div", Am, [(C(!0), a(e, null, D(j(I), (e) => (C(), a("div", {
				key: e,
				style: v({
					top: 1 + e * 2 + "px",
					left: 1 + (e + 1) * 3 + "px"
				}),
				class: _(["border bg-body position-absolute w-100 h-100", { "border-dashed": e >= j(N) }])
			}, null, 6))), 128))])) : i("", !0),
			f[43] ||= s(),
			o("div", {
				class: _(["plan-node-body card border", { "never-executed": j(te) }]),
				onMouseenter: f[2] ||= (e) => u.value = y.nodeId,
				onMouseleave: f[3] ||= (e) => u.value = void 0
			}, [
				o("div", jm, [
					o("header", Mm, [
						o("h4", {
							class: "overflow-hidden rounded text-start py-0 px-1 node-detail-toggle",
							onClick: f[0] ||= F((e) => h.value = !h.value, ["prevent", "stop"])
						}, [o("span", Nm, [h.value ? (C(), r(j(K), {
							key: 0,
							"fixed-width": "",
							icon: j(Cc)
						}, null, 8, ["icon"])) : (C(), r(j(K), {
							key: 1,
							"fixed-width": "",
							icon: j(Lc)
						}, null, 8, ["icon"]))]), s(" " + A(j(S)), 1)]),
						f[6] ||= s(),
						o("div", Pm, [
							c(Dm, { node: y }, null, 8, ["node"]),
							f[5] ||= s(),
							o("a", {
								class: "fw-normal small ms-1",
								href: "",
								onClick: f[1] ||= F((e) => j(d)(y.nodeId, !0), ["prevent", "stop"])
							}, "\n                #" + A(y.nodeId), 1)
						])
					]),
					f[34] ||= s(),
					/(Motion)$/.test(y[j(J).NODE_TYPE]) && j(p).highlightType !== j(Jc).NONE && j(k) !== null ? (C(), a("div", Fm, [
						f[7] ||= o("br", null, null, -1),
						f[8] ||= s(),
						c(j(K), {
							"fixed-width": "",
							icon: j(Tc),
							class: "text-secondary"
						}, null, 8, ["icon"]),
						s(" " + A(y[j(J).SLICE_ID]) + " ", 1),
						f[9] ||= o("br", null, null, -1),
						f[10] ||= s(),
						c(j(K), {
							"fixed-width": "",
							icon: j(Sc),
							class: "text-secondary"
						}, null, 8, ["icon"]),
						s(" " + A("The Slowest: " + y[j(J).ACTUAL_TOTAL_TIME]) + " ", 1),
						f[11] ||= o("br", null, null, -1)
					])) : i("", !0),
					f[35] ||= s(),
					f[36] ||= o("hr", null, null, -1),
					f[37] ||= s(),
					o("div", Im, [
						y[j(J).RELATION_NAME] || y[j(J).FUNCTION_NAME] ? (C(), a("div", {
							key: 0,
							class: _({ "line-clamp-2": !h.value })
						}, [
							f[13] ||= o("span", { class: "text-body-tertiary" }, "on", -1),
							f[14] ||= s(),
							y[j(J).SCHEMA] ? (C(), a("span", Lm, A(y[j(J).SCHEMA]) + ".", 1)) : i("", !0),
							s(A(y[j(J).RELATION_NAME]) + " " + A(y[j(J).FUNCTION_NAME]) + " ", 1),
							y[j(J).ALIAS] ? (C(), a("span", Rm, [f[12] ||= o("span", { class: "text-body-tertiary" }, "as", -1), s(" " + A(y[j(J).ALIAS]), 1)])) : i("", !0)
						], 2)) : y[j(J).ALIAS] ? (C(), a("div", {
							key: 1,
							class: _({ "line-clamp-2": !h.value })
						}, [
							f[15] ||= o("span", { class: "text-body-tertiary" }, "on", -1),
							f[16] ||= s(),
							o("span", { innerHTML: j(iu)(y[j(J).ALIAS]) }, null, 8, zm)
						], 2)) : i("", !0),
						f[27] ||= s(),
						y[j(J).GROUP_KEY] ? (C(), a("div", {
							key: 2,
							class: _({ "line-clamp-2": !h.value })
						}, [
							f[17] ||= o("span", { class: "text-body-tertiary" }, "by", -1),
							f[18] ||= s(),
							o("span", { innerHTML: j(iu)(y[j(J).GROUP_KEY]) }, null, 8, Bm)
						], 2)) : i("", !0),
						f[28] ||= s(),
						y[j(J).SORT_KEY] ? (C(), a("div", {
							key: 3,
							class: _({ "line-clamp-2": !h.value })
						}, [
							f[19] ||= o("span", { class: "text-body-tertiary" }, "by", -1),
							f[20] ||= s(),
							o("span", { innerHTML: j(au)(y[j(J).SORT_KEY], y[j(J).PRESORTED_KEY]) }, null, 8, Vm)
						], 2)) : i("", !0),
						f[29] ||= s(),
						y[j(J).INDEX_NAME] ? (C(), a("div", {
							key: 4,
							class: _({ "line-clamp-2": !h.value })
						}, [
							f[21] ||= o("span", { class: "text-body-tertiary" }, "using", -1),
							f[22] ||= s(),
							o("span", { innerHTML: j(iu)(y[j(J).INDEX_NAME]) }, null, 8, Hm)
						], 2)) : i("", !0),
						f[30] ||= s(),
						y[j(J).HASH_CONDITION] ? (C(), a("div", {
							key: 5,
							class: _({ "line-clamp-2": !h.value })
						}, [
							f[23] ||= o("span", { class: "text-body-tertiary" }, "on", -1),
							f[24] ||= s(),
							o("span", { innerHTML: j(iu)(y[j(J).HASH_CONDITION]) }, null, 8, Um)
						], 2)) : i("", !0),
						f[31] ||= s(),
						y[j(J).CTE_NAME] ? (C(), a("div", Wm, [o("a", {
							class: "text-reset",
							href: "",
							onClick: F(re, ["prevent", "stop"])
						}, [
							c(j(K), {
								icon: j(Ic),
								class: "text-body-tertiary"
							}, null, 8, ["icon"]),
							f[25] ||= s(),
							f[26] ||= o("span", { class: "text-body-tertiary" }, "CTE", -1),
							s(" " + A(y[j(J).CTE_NAME]), 1)
						])])) : i("", !0)
					]),
					f[38] ||= s(),
					j(p).highlightType !== j(Jc).NONE && j(k) !== null ? (C(), a("div", Gm, [
						o("div", Km, [o("div", {
							class: "progress-bar",
							role: "progressbar",
							style: v({
								width: j(O) + "%",
								"background-color": j(ee)
							}),
							"aria-valuenow": "0",
							"aria-valuemin": "0",
							"aria-valuemax": "100"
						}, null, 4)]),
						f[33] ||= s(),
						o("span", qm, [
							o("span", Jm, A(j(p).highlightType) + ":", 1),
							f[32] ||= s(),
							o("span", { innerHTML: j(k) }, null, 8, Ym)
						])
					])) : i("", !0)
				]),
				f[40] ||= s(),
				h.value ? (C(), r(Tm, {
					key: 0,
					node: y
				}, null, 8, ["node"])) : i("", !0),
				f[41] ||= s(),
				j(te) ? (C(), a("div", Xm, [...f[39] ||= [o("span", { class: "text-body-tertiary bg-body px-1" }, " Never executed ", -1)]])) : i("", !0)
			], 34)
		], 2)], 544));
	}
}), Qm = {
	key: 0,
	class: "plan-stats flex-shrink-0 d-flex border-bottom border-top align-items-center"
}, $m = { class: "d-inline-block px-2" }, eh = {
	key: 0,
	class: "text-body-tertiary"
}, th = ["innerHTML"], nh = { class: "d-inline-block border-start px-2" }, rh = {
	key: 0,
	class: "text-body-tertiary"
}, ih = {
	key: 1,
	class: "stat-value"
}, ah = ["innerHTML"], oh = { class: "d-inline-block border-start px-2" }, sh = {
	key: 0,
	class: "text-body-tertiary"
}, ch = {
	key: 1,
	class: "stat-value"
}, lh = { class: "d-inline-block border-start px-2" }, uh = {
	key: 0,
	class: "text-body-tertiary"
}, dh = {
	key: 1,
	class: "stat-value"
}, fh = {
	key: 0,
	class: "d-inline-block border-start px-2 position-relative"
}, ph = { class: "stat-value" }, mh = ["innerHTML"], hh = {
	key: 0,
	class: "stat-dropdown-container text-start"
}, gh = { key: 0 }, _h = {
	key: 1,
	class: "d-inline-block border-start px-2 position-relative"
}, vh = { class: "stat-value" }, yh = ["innerHTML"], bh = {
	key: 0,
	class: "stat-dropdown-container text-start"
}, xh = {
	key: 2,
	class: "d-inline-block border-start px-2 position-relative"
}, Sh = { class: "stat-value" }, Ch = ["innerHTML"], wh = {
	key: 0,
	class: "stat-dropdown-container text-start"
}, Th = { class: "float-end" }, Eh = ["innerHTML"], Dh = {
	key: 0,
	class: "text-body-tertiary"
}, Oh = {
	key: 1,
	class: "my-2"
}, kh = {
	key: 3,
	class: "d-inline-block border-start px-2 position-relative"
}, Ah = { class: "stat-label" }, jh = { class: "badge bg-secondary" }, Mh = {
	key: 0,
	class: "stat-dropdown-container text-start"
}, Nh = { class: "table table-sm table-striped mb-0" }, Ph = {
	key: 4,
	class: "d-inline-block border-start px-2 position-relative"
}, Fh = { class: "stat-label" }, Ih = ["innerHTML"], Lh = {
	key: 1,
	class: "stat-dropdown-container text-start"
}, Rh = /* @__PURE__ */ l({
	__name: "PlanStats",
	setup(n) {
		let l = E(!1), u = E(!1), d = E(!1), f = E(!1), p = E(!1), m = (e) => {
			let t = NaN;
			return e > 90 ? t = 4 : e > 40 ? t = 3 : e > 10 && (t = 2), t ? "c-" + t : !1;
		}, h = t(() => {
			let e = Y.stats.executionTime || 0, t = v.value || 0;
			return L.default.round(t / e * 100);
		});
		function g(e) {
			let t = Y.stats.executionTime || 0, n = e.Time;
			return L.default.round(n / t * 100);
		}
		let v = t(() => L.default.sumBy(Y.stats.triggers, (e) => e.Time));
		function y(e) {
			let t = e[J.AVERAGE_SUM_IO_READ_SPEED], n = e[J.AVERAGE_SUM_IO_WRITE_SPEED], r = [];
			return t && r.push(`read=~${ru(J.AVERAGE_SUM_IO_READ_SPEED, t)}`), n && r.push(`write=~${ru(J.AVERAGE_SUM_IO_WRITE_SPEED, n)}`), r.join(", ");
		}
		function b(e) {
			return e.Plans?.some(function e(t) {
				return t[J.WORKERS_PLANNED] || t[J.WORKERS_PLANNED_BY_GATHER] ? !0 : Array.isArray(t.Plans) && t.Plans.some(e);
			});
		}
		let x = t(() => {
			if (!Y.stats.serialization) return !1;
			let e = L.default.map([
				"SHARED_HIT_BLOCKS",
				"SHARED_READ_BLOCKS",
				"SHARED_DIRTIED_BLOCKS",
				"SHARED_WRITTEN_BLOCKS",
				"TEMP_READ_BLOCKS",
				"TEMP_WRITTEN_BLOCKS",
				"LOCAL_HIT_BLOCKS",
				"LOCAL_READ_BLOCKS",
				"LOCAL_DIRTIED_BLOCKS",
				"LOCAL_WRITTEN_BLOCKS"
			], (e) => {
				let t = Y.stats.serialization?.[Zc[e]];
				return L.default.isNaN(t) ? 0 : t;
			});
			return L.default.sum(e) > 0;
		});
		return (t, n) => j(Y).stats ? (C(), a("div", Qm, [
			o("div", $m, [n[10] ||= s("\n      Execution time:\n      ", -1), j(Y).stats.executionTime ? (C(), a("span", {
				key: 1,
				class: "stat-value",
				innerHTML: j(X)(j(Y).stats.executionTime)
			}, null, 8, th)) : (C(), a("span", eh, [n[9] ||= s("\n          N/A\n          ", -1), P(c(j(K), {
				icon: j(kc),
				class: "cursor-help"
			}, null, 8, ["icon"]), [[j(Fr), j(al)("missing execution time")]])]))]),
			n[64] ||= s(),
			o("div", nh, [n[12] ||= s("\n      Planning time:\n      ", -1), j(Y).stats.planningTime ? (C(), a("span", ih, [o("span", {
				class: _("mb-0 p-0 px-1 alert " + m(j(Y).stats.planningTime / j(Y).stats.executionTime * 100)),
				innerHTML: j(X)(j(Y).stats.planningTime)
			}, null, 10, ah)])) : (C(), a("span", rh, [n[11] ||= s("\n          N/A\n          ", -1), P(c(j(K), {
				icon: j(kc),
				class: "cursor-help"
			}, null, 8, ["icon"]), [[j(Fr), j(al)("missing planning time")]])]))]),
			n[65] ||= s(),
			o("div", oh, [n[13] ||= s("\n      Memory used:\n\n      ", -1), j(Y).stats.memoryUsed ? (C(), a("span", ch, A(j(Hl)(j(Y).stats.memoryUsed)), 1)) : (C(), a("span", sh, "N/A"))]),
			n[66] ||= s(),
			o("div", lh, [n[14] ||= s("\n      Optimizer:\n\n      ", -1), j(Y).stats.optimizer ? (C(), a("span", dh, A(j(Y).stats.optimizer), 1)) : (C(), a("span", uh, "N/A"))]),
			n[67] ||= s(),
			j(Y).stats.serialization ? (C(), a("div", fh, [
				n[26] ||= s("\n      Serialization:\n      ", -1),
				o("span", ph, [o("span", {
					class: _("mb-0 p-0 px-1 alert " + m(j(Y).stats.serialization.Time / j(Y).stats.executionTime * 100)),
					innerHTML: j(X)(j(Y).stats.serialization.Time)
				}, null, 10, mh)]),
				n[27] ||= s(),
				o("button", {
					onClick: n[0] ||= F((e) => f.value = !f.value, ["prevent"]),
					class: "bg-transparent border-0 p-0 m-0 ps-1"
				}, [c(j(K), {
					icon: j(Mc),
					class: "text-body-tertiary"
				}, null, 8, ["icon"])]),
				n[28] ||= s(),
				f.value ? (C(), a("div", hh, [
					o("button", {
						class: "btn btn-xs btn-close float-end",
						onClick: n[1] ||= (e) => f.value = !1
					}),
					n[21] ||= s(),
					n[22] ||= o("h3", null, "Serialization", -1),
					n[23] ||= s(),
					o("div", null, [
						n[15] ||= o("b", null, "Time:", -1),
						n[16] ||= s(),
						o("span", null, A(j(X)(j(Y).stats.serialization.Time)), 1)
					]),
					n[24] ||= s(),
					o("div", null, [
						n[17] ||= o("b", null, "Output Volume: ", -1),
						n[18] ||= s(),
						o("span", null, A(j(Hl)(j(Y).stats.serialization["Output Volume"])), 1)
					]),
					n[25] ||= s(),
					x.value ? (C(), a("div", gh, [
						n[19] ||= o("b", null, "Buffers: ", -1),
						n[20] ||= s(),
						c(Gp, { object: j(Y).stats.serialization }, null, 8, ["object"])
					])) : i("", !0)
				])) : i("", !0)
			])) : i("", !0),
			n[68] ||= s(),
			j(Y).stats.jitTime && j(Y).stats.executionTime ? (C(), a("div", _h, [n[31] ||= s("\n      JIT:\n      ", -1), o("span", vh, [
				o("span", {
					class: _("mb-0 p-0 px-1 alert " + m(j(Y).stats.jitTime / j(Y).stats.executionTime * 100)),
					innerHTML: j(X)(j(Y).stats.jitTime)
				}, null, 10, yh),
				n[29] ||= s(),
				o("button", {
					onClick: n[2] ||= F((e) => d.value = !d.value, ["prevent"]),
					class: "bg-transparent border-0 p-0 m-0 ps-1"
				}, [c(j(K), {
					icon: j(Mc),
					class: "text-body-tertiary"
				}, null, 8, ["icon"])]),
				n[30] ||= s(),
				d.value ? (C(), a("div", bh, [o("div", null, [j(Y).plan?.content.JIT ? (C(), r(Pl, {
					key: 0,
					jit: j(Y).plan?.content.JIT
				}, null, 8, ["jit"])) : i("", !0)])])) : i("", !0)
			])])) : i("", !0),
			n[69] ||= s(),
			j(Y).stats.triggers && j(Y).stats.triggers.length ? (C(), a("div", xh, [
				n[46] ||= o("span", { class: "stat-label" }, "Triggers: ", -1),
				n[47] ||= s(),
				o("span", Sh, [o("span", {
					class: _("mb-0 p-0 px-1 alert " + j(ou)(h.value)),
					innerHTML: j(X)(v.value)
				}, null, 10, Ch)]),
				n[48] ||= s(),
				o("button", {
					onClick: n[3] ||= F((e) => u.value = !u.value, ["prevent"]),
					class: "bg-transparent border-0 p-0 m-0 ps-1"
				}, [c(j(K), {
					icon: j(Mc),
					class: "text-body-tertiary"
				}, null, 8, ["icon"])]),
				n[49] ||= s(),
				u.value ? (C(), a("div", wh, [
					o("button", {
						class: "btn btn-xs btn-close float-end",
						onClick: n[4] ||= (e) => u.value = !1
					}),
					n[43] ||= s(),
					n[44] ||= o("h3", null, "Triggers", -1),
					n[45] ||= s(),
					(C(!0), a(e, null, D(j(Y).stats.triggers, (e, t) => (C(), a("div", { key: t }, [
						s(A(e["Trigger Name"]) + " ", 1),
						n[33] ||= o("br", null, null, -1),
						n[34] ||= s(),
						n[35] ||= o("span", { class: "text-body-tertiary" }, "Called", -1),
						s(" " + A(e.Calls), 1),
						n[36] ||= o("span", { class: "text-body-tertiary" }, "×", -1),
						n[37] ||= s(),
						o("span", Th, [
							o("span", {
								class: _("p-0 px-1 alert " + j(ou)(g(e))),
								innerHTML: j(X)(e.Time)
							}, null, 10, Eh),
							s("\n            | " + A(g(e)), 1),
							n[32] ||= o("span", { class: "text-body-tertiary" }, "%", -1)
						]),
						n[38] ||= s(),
						n[39] ||= o("br", null, null, -1),
						n[40] ||= s(),
						e.Relation ? (C(), a("span", Dh, "on")) : i("", !0),
						s(" " + A(e.Relation) + " ", 1),
						n[41] ||= o("div", { class: "clearfix" }, null, -1),
						n[42] ||= s(),
						j(Y).stats.triggers && t != j(Y).stats.triggers.length - 1 ? (C(), a("hr", Oh)) : i("", !0)
					]))), 128))
				])) : i("", !0)
			])) : i("", !0),
			n[70] ||= s(),
			j(Y).stats.settings ? (C(), a("div", kh, [
				o("span", Ah, [n[50] ||= s("Settings:\n        ", -1), o("span", jh, A(j(L.default).keys(j(Y).stats.settings).length), 1)]),
				n[57] ||= s(),
				o("button", {
					onClick: n[5] ||= F((e) => l.value = !l.value, ["prevent"]),
					class: "bg-transparent border-0 p-0 m-0 ps-1"
				}, [c(j(K), {
					icon: j(Mc),
					class: "text-body-tertiary"
				}, null, 8, ["icon"])]),
				n[58] ||= s(),
				l.value ? (C(), a("div", Mh, [
					o("button", {
						class: "btn btn-xs btn-close float-end",
						onClick: n[6] ||= (e) => l.value = !1
					}),
					n[52] ||= s(),
					n[53] ||= o("h3", null, "PG Settings", -1),
					n[54] ||= s(),
					n[55] ||= o("em", { class: "text-body-tertiary d-block pb-2" }, "\n          Configuration parameters affecting query planning with value different\n          from the built-in default value.\n        ", -1),
					n[56] ||= s(),
					o("table", Nh, [o("tbody", null, [(C(!0), a(e, null, D(j(Y).stats.settings, (e, t) => (C(), a("tr", { key: t }, [
						o("td", null, A(t), 1),
						n[51] ||= s(),
						o("td", null, A(e), 1)
					]))), 128))])])
				])) : i("", !0)
			])) : i("", !0),
			n[71] ||= s(),
			j(Y).plan?.content.Plan && y(j(Y).plan?.content.Plan) ? (C(), a("div", Ph, [
				o("span", Fh, [n[59] ||= s("\n        IO: ", -1), o("span", { innerHTML: y(j(Y).plan?.content.Plan) }, null, 8, Ih)]),
				n[61] ||= s(),
				b(j(Y).plan?.content.Plan) ? P((C(), r(j(K), {
					key: 0,
					icon: j(kc),
					class: "cursor-help d-inline-block text-body-tertiary"
				}, null, 8, ["icon"])), [[j(Fr), { content: j(al)("io timings parallel") }]]) : i("", !0),
				n[62] ||= s(),
				o("button", {
					onClick: n[7] ||= F((e) => p.value = !p.value, ["prevent"]),
					class: "bg-transparent border-0 p-0 m-0 ps-1"
				}, [c(j(K), {
					icon: j(Mc),
					class: "text-body-tertiary"
				}, null, 8, ["icon"])]),
				n[63] ||= s(),
				p.value ? (C(), a("div", Lh, [
					o("button", {
						class: "btn btn-xs btn-close float-end",
						onClick: n[8] ||= (e) => p.value = !1
					}),
					n[60] ||= s(),
					c(yu, {
						node: j(Y).plan?.content.Plan,
						class: "mb-0"
					}, null, 8, ["node"])
				])) : i("", !0)
			])) : i("", !0)
		])) : i("", !0);
	}
}), zh = { class: "table" }, Bh = /* @__PURE__ */ l({
	__name: "SortedTable",
	props: {
		values: {},
		sort: {},
		dir: {}
	},
	setup(e) {
		let n = e, r = E(n.sort), i = E(n.dir);
		w("sort", r), w("dir", i), w("sortBy", c);
		let o = t(() => L.default.orderBy(n.values, r.value, i.value));
		function c(e) {
			e === r.value && (i.value = i.value === Yc.asc ? Yc.desc : Yc.asc), r.value = e;
		}
		return (e, t) => (C(), a("table", zh, [
			O(e.$slots, "default"),
			t[0] ||= s(),
			O(e.$slots, "head"),
			t[1] ||= s(),
			O(e.$slots, "body", { values: o.value }),
			t[2] ||= s(),
			O(e.$slots, "foot")
		]));
	}
}), Vh = /* @__PURE__ */ l({
	__name: "SortLink",
	props: { name: {} },
	setup(e) {
		let t = f("dir"), n = f("sort"), o = f("sortBy");
		return (c, l) => (C(), a("a", {
			href: "#",
			onClick: l[0] ||= F((t) => j(o) && j(o)(e.name), ["prevent"])
		}, [
			O(c.$slots, "default", {}, () => [s(A(e.name), 1)]),
			l[1] ||= s(),
			j(n) == e.name && j(t) == j(Yc).asc ? (C(), r(j(K), {
				key: 0,
				"fixed-width": "",
				icon: j(Nc)
			}, null, 8, ["icon"])) : j(n) == e.name && j(t) == j(Yc).desc ? (C(), r(j(K), {
				key: 1,
				"fixed-width": "",
				icon: j(Dc)
			}, null, 8, ["icon"])) : i("", !0)
		]));
	}
}), Hh = { class: "thead-light" }, Uh = { class: "text-end" }, Wh = { class: "text-end" }, Gh = { class: "text-end" }, Kh = { class: "ps-3" }, qh = ["href"], Jh = { class: "text-end" }, Yh = { class: "px-1" }, Xh = { class: "text-end" }, Zh = /* @__PURE__ */ l({
	__name: "StatsTableItem",
	props: {
		value: {},
		executionTime: {}
	},
	setup(t) {
		let n = t, i = E(!1);
		function c(e) {
			return e[J.EXCLUSIVE_DURATION] / n.executionTime;
		}
		return (t, l) => (C(), a(e, null, [
			o("thead", Hh, [o("tr", {
				onClick: l[0] ||= F((e) => i.value = !i.value, ["prevent"]),
				role: "button"
			}, [
				o("th", null, [i.value ? (C(), r(j(K), {
					key: 0,
					"fixed-width": "",
					icon: j(Lc)
				}, null, 8, ["icon"])) : (C(), r(j(K), {
					key: 1,
					"fixed-width": "",
					icon: j(Bc)
				}, null, 8, ["icon"])), s(" " + A(n.value.name), 1)]),
				l[1] ||= s(),
				o("th", Uh, A(n.value.count), 1),
				l[2] ||= s(),
				o("th", Wh, [o("span", { class: _(["alert p-0 px-1", j(ou)(n.value.timePercent * 100)]) }, A(j(X)(n.value.time)), 3)]),
				l[3] ||= s(),
				o("th", Gh, A(j(Jl)(n.value.timePercent)), 1)
			])]),
			l[8] ||= s(),
			o("tbody", { class: _(i.value ? "" : "d-none") }, [(C(!0), a(e, null, D(j(L.default).reverse(j(L.default).sortBy(n.value.nodes, j(J).EXCLUSIVE_DURATION)), (e) => (C(), a("tr", {
				key: e.nodeId,
				style: { "font-size": "smaller" }
			}, [
				o("td", Kh, [o("a", {
					href: `#plan/node/${e.nodeId}`,
					class: "me-1"
				}, "#" + A(e.nodeId), 9, qh), s(" " + A(e[j(J).NODE_TYPE]), 1)]),
				l[4] ||= s(),
				l[5] ||= o("td", { class: "text-end" }, null, -1),
				l[6] ||= s(),
				o("td", Jh, [o("span", Yh, A(j(X)(e[j(J).EXCLUSIVE_DURATION])), 1)]),
				l[7] ||= s(),
				o("td", Xh, A(j(Jl)(c(e))), 1)
			]))), 128))], 2)
		], 64));
	}
}), Qh = { class: "small stats container-fluid mt-2" }, $h = { class: "row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4" }, eg = { class: "col" }, tg = { class: "card" }, ng = { class: "card-body" }, rg = { scope: "col" }, ig = {
	scope: "col",
	class: "text-end"
}, ag = {
	scope: "col",
	colspan: "2",
	class: "text-end"
}, og = { key: 0 }, sg = { class: "col" }, cg = { class: "card" }, lg = { class: "card-body" }, ug = { scope: "col" }, dg = {
	scope: "col",
	class: "text-end"
}, fg = {
	scope: "col",
	colspan: "2",
	class: "text-end"
}, pg = { key: 0 }, mg = { class: "col" }, hg = { class: "card" }, gg = { class: "card-body" }, _g = { scope: "col" }, vg = {
	scope: "col",
	class: "text-end"
}, yg = {
	scope: "col",
	colspan: "2",
	class: "text-end"
}, bg = { class: "col" }, xg = { class: "card" }, Sg = { class: "card-body" }, Cg = { scope: "col" }, wg = {
	scope: "col",
	class: "text-end"
}, Tg = {
	scope: "col",
	colspan: "2",
	class: "text-end"
}, Eg = { key: 0 }, Dg = /* @__PURE__ */ l({
	__name: "Stats",
	setup(n) {
		let l = t(() => Y.stats.executionTime || Y.plan?.content.Plan?.[J.ACTUAL_TOTAL_TIME]), u = t(() => L.default.flatten(Y.flat).map((e) => e.node));
		function d(e) {
			return L.default.sumBy(e, J.EXCLUSIVE_DURATION) / l.value;
		}
		let f = t(() => {
			let e = L.default.groupBy(L.default.filter(u.value, (e) => e[J.RELATION_NAME] !== void 0), J.RELATION_NAME), t = [];
			return L.default.each(e, (e, n) => {
				t.push({
					name: n,
					count: e.length,
					time: L.default.sumBy(e, J.EXCLUSIVE_DURATION),
					timePercent: d(e),
					nodes: e
				});
			}), t;
		}), p = t(() => {
			let e = L.default.groupBy(L.default.filter(u.value, (e) => e[J.FUNCTION_NAME] !== void 0), J.FUNCTION_NAME), t = [];
			return L.default.each(e, (e, n) => {
				t.push({
					name: n,
					count: e.length,
					time: L.default.sumBy(e, J.EXCLUSIVE_DURATION),
					timePercent: d(e),
					nodes: e
				});
			}), t;
		}), m = t(() => {
			let e = L.default.groupBy(u.value, J.NODE_TYPE), t = [];
			return L.default.each(e, (e, n) => {
				t.push({
					name: n,
					count: e.length,
					time: L.default.sumBy(e, J.EXCLUSIVE_DURATION),
					timePercent: d(e),
					nodes: e
				});
			}), t;
		}), h = t(() => {
			let e = L.default.groupBy(L.default.filter(u.value, (e) => e[J.INDEX_NAME] !== void 0), J.INDEX_NAME), t = [];
			return L.default.each(e, (e, n) => {
				t.push({
					name: n,
					count: e.length,
					time: L.default.sumBy(e, J.EXCLUSIVE_DURATION),
					timePercent: d(e),
					nodes: e
				});
			}), t;
		});
		return (t, n) => (C(), a("div", Qh, [o("div", $h, [
			o("div", eg, [o("div", tg, [o("div", ng, [c(Bh, {
				class: "table table-sm mb-0",
				values: f.value,
				sort: "time",
				dir: j(Yc).desc
			}, {
				body: N((t) => [(C(!0), a(e, null, D(t.values, (e) => (C(), r(Zh, {
					key: e,
					value: e,
					executionTime: l.value
				}, null, 8, ["value", "executionTime"]))), 128))]),
				default: N(() => [
					o("thead", null, [o("tr", null, [
						o("th", rg, [c(Vh, { name: "name" }, {
							default: N(() => [...n[0] ||= [s("Table", -1)]]),
							_: 1
						})]),
						n[3] ||= s(),
						o("th", ig, [c(Vh, { name: "count" }, {
							default: N(() => [...n[1] ||= [s("Count", -1)]]),
							_: 1
						})]),
						n[4] ||= s(),
						o("th", ag, [c(Vh, { name: "time" }, {
							default: N(() => [...n[2] ||= [s("Time", -1)]]),
							_: 1
						})])
					])]),
					n[6] ||= s(),
					n[7] ||= s(),
					f.value.length ? i("", !0) : (C(), a("tbody", og, [...n[5] ||= [o("tr", null, [o("td", {
						colspan: "3",
						class: "text-center fst-italic"
					}, "\n                    No tables used\n                  ")], -1)]]))
				]),
				_: 1
			}, 8, ["values", "dir"])])])]),
			n[30] ||= s(),
			o("div", sg, [o("div", cg, [o("div", lg, [c(Bh, {
				class: "table table-sm mb-0",
				values: p.value,
				sort: "time",
				dir: j(Yc).desc
			}, {
				body: N((t) => [(C(!0), a(e, null, D(t.values, (e) => (C(), r(Zh, {
					key: e,
					value: e,
					executionTime: l.value
				}, null, 8, ["value", "executionTime"]))), 128))]),
				default: N(() => [
					o("thead", null, [o("tr", null, [
						o("th", ug, [c(Vh, { name: "name" }, {
							default: N(() => [...n[8] ||= [s("Function", -1)]]),
							_: 1
						})]),
						n[11] ||= s(),
						o("th", dg, [c(Vh, { name: "count" }, {
							default: N(() => [...n[9] ||= [s("Count", -1)]]),
							_: 1
						})]),
						n[12] ||= s(),
						o("th", fg, [c(Vh, { name: "time" }, {
							default: N(() => [...n[10] ||= [s("Time", -1)]]),
							_: 1
						})])
					])]),
					n[14] ||= s(),
					n[15] ||= s(),
					p.value.length ? i("", !0) : (C(), a("tbody", pg, [...n[13] ||= [o("tr", null, [o("td", {
						colspan: "3",
						class: "text-center fst-italic"
					}, "\n                    No function used\n                  ")], -1)]]))
				]),
				_: 1
			}, 8, ["values", "dir"])])])]),
			n[31] ||= s(),
			o("div", mg, [o("div", hg, [o("div", gg, [c(Bh, {
				class: "table table-sm mb-0",
				values: m.value,
				sort: "time",
				dir: j(Yc).desc
			}, {
				body: N((t) => [(C(!0), a(e, null, D(t.values, (e) => (C(), r(Zh, {
					key: e,
					value: e,
					executionTime: l.value
				}, null, 8, ["value", "executionTime"]))), 128))]),
				default: N(() => [o("thead", null, [o("tr", null, [
					o("th", _g, [c(Vh, { name: "name" }, {
						default: N(() => [...n[16] ||= [s("Node Type", -1)]]),
						_: 1
					})]),
					n[19] ||= s(),
					o("th", vg, [c(Vh, { name: "count" }, {
						default: N(() => [...n[17] ||= [s("Count", -1)]]),
						_: 1
					})]),
					n[20] ||= s(),
					o("th", yg, [c(Vh, { name: "time" }, {
						default: N(() => [...n[18] ||= [s("Time", -1)]]),
						_: 1
					})])
				])]), n[21] ||= s()]),
				_: 1
			}, 8, ["values", "dir"])])])]),
			n[32] ||= s(),
			o("div", bg, [o("div", xg, [o("div", Sg, [c(Bh, {
				class: "table table-sm mb-0",
				values: h.value,
				sort: "time",
				dir: j(Yc).desc
			}, {
				body: N((t) => [(C(!0), a(e, null, D(t.values, (e) => (C(), r(Zh, {
					key: e,
					value: e,
					executionTime: l.value
				}, null, 8, ["value", "executionTime"]))), 128))]),
				default: N(() => [
					o("thead", null, [o("tr", null, [
						o("th", Cg, [c(Vh, { name: "name" }, {
							default: N(() => [...n[22] ||= [s("Index", -1)]]),
							_: 1
						})]),
						n[25] ||= s(),
						o("th", wg, [c(Vh, { name: "count" }, {
							default: N(() => [...n[23] ||= [s("Count", -1)]]),
							_: 1
						})]),
						n[26] ||= s(),
						o("th", Tg, [c(Vh, { name: "time" }, {
							default: N(() => [...n[24] ||= [s("Time", -1)]]),
							_: 1
						})])
					])]),
					n[28] ||= s(),
					n[29] ||= s(),
					h.value.length ? i("", !0) : (C(), a("tbody", Eg, [...n[27] ||= [o("tr", null, [o("td", {
						colspan: "3",
						class: "text-center fst-italic"
					}, "\n                    No index used\n                  ")], -1)]]))
				]),
				_: 1
			}, 8, ["values", "dir"])])])])
		])]));
	}
});
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function Og(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function kg(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var Ag = (e, t, n) => n > t ? t : n < e ? e : n, jg = {}, Mg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/is-object.mjs
function Ng(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var Pg = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function Fg(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var Ig = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Lg = (e, t) => (n) => t(e(n)), Rg = (...e) => e.reduce(Lg), zg = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Bg = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Og(this.subscriptions, e), () => kg(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, Vg = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Hg = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/motion-utils/dist/es/velocity-per-second.mjs
function Ug(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/motion-utils/dist/es/wrap.mjs
var Wg = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, Gg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Kg = 1e-7, qg = 12;
function Jg(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Gg(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Kg && ++s < qg);
	return o;
}
function Yg(e, t, n, r) {
	if (e === t && n === r) return Ig;
	let i = (t) => Jg(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Gg(i(e), t, r);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Xg = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Zg = (e) => (t) => 1 - e(1 - t), Qg = /*@__PURE__*/ Yg(.33, 1.53, .69, .99), $g = /*@__PURE__*/ Zg(Qg), e_ = /*@__PURE__*/ Xg($g), t_ = (e) => (e *= 2) < 1 ? .5 * $g(e) : .5 * (2 - 2 ** (-10 * (e - 1))), n_ = (e) => 1 - Math.sin(Math.acos(e)), r_ = Zg(n_), i_ = Xg(n_), a_ = /*@__PURE__*/ Yg(.42, 0, 1, 1), o_ = /*@__PURE__*/ Yg(0, 0, .58, 1), s_ = /*@__PURE__*/ Yg(.42, 0, .58, 1), c_ = (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function l_(e, t) {
	return c_(e) ? e[Wg(0, e.length, t)] : e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var u_ = (e) => Array.isArray(e) && typeof e[0] == "number", d_ = {
	linear: Ig,
	easeIn: a_,
	easeInOut: s_,
	easeOut: o_,
	circIn: n_,
	circInOut: i_,
	circOut: r_,
	backIn: $g,
	backInOut: e_,
	backOut: Qg,
	anticipate: t_
}, f_ = (e) => typeof e == "string", p_ = (e) => {
	if (u_(e)) {
		e.length;
		let [t, n, r, i] = e;
		return Yg(t, n, r, i);
	} else if (f_(e)) return d_[e], `${e}`, d_[e];
	return e;
}, m_ = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], h_ = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function g_(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.has(e) || s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0, [n, r] = [r, n], n.forEach(l), t && h_.value && h_.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var __ = 40;
function v_(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = m_.reduce((e, n) => (e[n] = g_(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = jg.useManualTiming ? i.timestamp : performance.now();
		n = !1, jg.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, __), 1)), i.timestamp = a, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: m_.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < m_.length; t++) o[m_[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: y_, cancel: b_, state: x_, steps: S_ } = /* @__PURE__ */ v_(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ig, !0), C_;
function w_() {
	C_ = void 0;
}
var T_ = {
	now: () => (C_ === void 0 && T_.set(x_.isProcessing || jg.useManualTiming ? x_.timestamp : performance.now()), C_),
	set: (e) => {
		C_ = e, queueMicrotask(w_);
	}
}, E_ = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, D_ = (e) => (t) => typeof t == "string" && t.startsWith(e), O_ = /*@__PURE__*/ D_("--"), k_ = /*@__PURE__*/ D_("var(--"), A_ = (e) => k_(e) ? j_.test(e.split("/*")[0].trim()) : !1, j_ = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function M_(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var N_ = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, P_ = {
	...N_,
	transform: (e) => Ag(0, 1, e)
}, F_ = {
	...N_,
	default: 1
}, I_ = (e) => Math.round(e * 1e5) / 1e5, L_ = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function R_(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var z_ = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, B_ = (e, t) => (n) => !!(typeof n == "string" && z_.test(n) && n.startsWith(e) || t && !R_(n) && Object.prototype.hasOwnProperty.call(n, t)), V_ = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(L_);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, H_ = (e) => Ag(0, 255, e), U_ = {
	...N_,
	transform: (e) => Math.round(H_(e))
}, W_ = {
	test: /*@__PURE__*/ B_("rgb", "red"),
	parse: /*@__PURE__*/ V_("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + U_.transform(e) + ", " + U_.transform(t) + ", " + U_.transform(n) + ", " + I_(P_.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function G_(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var K_ = {
	test: /*@__PURE__*/ B_("#"),
	parse: G_,
	transform: W_.transform
}, q_ = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), J_ = /*@__PURE__*/ q_("deg"), Y_ = /*@__PURE__*/ q_("%"), $ = /*@__PURE__*/ q_("px"), X_ = /*@__PURE__*/ q_("vh"), Z_ = /*@__PURE__*/ q_("vw"), Q_ = {
	...Y_,
	parse: (e) => Y_.parse(e) / 100,
	transform: (e) => Y_.transform(e * 100)
}, $_ = {
	test: /*@__PURE__*/ B_("hsl", "hue"),
	parse: /*@__PURE__*/ V_("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Y_.transform(I_(t)) + ", " + Y_.transform(I_(n)) + ", " + I_(P_.transform(r)) + ")"
}, ev = {
	test: (e) => W_.test(e) || K_.test(e) || $_.test(e),
	parse: (e) => W_.test(e) ? W_.parse(e) : $_.test(e) ? $_.parse(e) : K_.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? W_.transform(e) : $_.transform(e),
	getAnimatableNone: (e) => {
		let t = ev.parse(e);
		return t.alpha = 0, ev.transform(t);
	}
}, tv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function nv(e) {
	return isNaN(e) && typeof e == "string" && (e.match(L_)?.length || 0) + (e.match(tv)?.length || 0) > 0;
}
var rv = "number", iv = "color", av = "var", ov = "var(", sv = "${}", cv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function lv(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(cv, (e) => (ev.test(e) ? (r.color.push(a), i.push(iv), n.push(ev.parse(e))) : e.startsWith(ov) ? (r.var.push(a), i.push(av), n.push(e)) : (r.number.push(a), i.push(rv), n.push(parseFloat(e))), ++a, sv)).split(sv),
		indexes: r,
		types: i
	};
}
function uv(e) {
	return lv(e).values;
}
function dv(e) {
	let { split: t, types: n } = lv(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			t === rv ? i += I_(e[a]) : t === iv ? i += ev.transform(e[a]) : i += e[a];
		}
		return i;
	};
}
var fv = (e) => typeof e == "number" ? 0 : ev.test(e) ? ev.getAnimatableNone(e) : e;
function pv(e) {
	let t = uv(e);
	return dv(e)(t.map(fv));
}
var mv = {
	test: nv,
	parse: uv,
	createTransformer: dv,
	getAnimatableNone: pv
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hv(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function gv({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = hv(s, r, e + 1 / 3), a = hv(s, r, e), o = hv(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function _v(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var vv = (e, t, n) => e + (t - e) * n, yv = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, bv = [
	K_,
	W_,
	$_
], xv = (e) => bv.find((t) => t.test(e));
function Sv(e) {
	let t = xv(e);
	if (`${e}`, !t) return !1;
	let n = t.parse(e);
	return t === $_ && (n = gv(n)), n;
}
var Cv = (e, t) => {
	let n = Sv(e), r = Sv(t);
	if (!n || !r) return _v(e, t);
	let i = { ...n };
	return (e) => (i.red = yv(n.red, r.red, e), i.green = yv(n.green, r.green, e), i.blue = yv(n.blue, r.blue, e), i.alpha = vv(n.alpha, r.alpha, e), W_.transform(i));
}, wv = new Set(["none", "hidden"]);
function Tv(e, t) {
	return wv.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function Ev(e, t) {
	return (n) => vv(e, t, n);
}
function Dv(e) {
	return typeof e == "number" ? Ev : typeof e == "string" ? A_(e) ? _v : ev.test(e) ? Cv : jv : Array.isArray(e) ? Ov : typeof e == "object" ? ev.test(e) ? Cv : kv : _v;
}
function Ov(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Dv(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function kv(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Dv(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Av(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var jv = (e, t) => {
	let n = mv.createTransformer(t), r = lv(e), i = lv(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? wv.has(e) && !i.values.length || wv.has(t) && !r.values.length ? Tv(e, t) : Rg(Ov(Av(r, i), i.values), n) : (`${e}${t}`, _v(e, t));
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function Mv(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? vv(e, t, n) : Dv(e)(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Nv = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => y_.update(t, e),
		stop: () => b_(t),
		now: () => x_.isProcessing ? x_.timestamp : T_.now()
	};
}, Pv = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Fv = 2e4;
function Iv(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Lv(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Iv(r), Fv);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ Hg(i)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Rv = 5;
function zv(e, t, n) {
	let r = Math.max(t - Rv, 0);
	return Ug(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs
var Bv = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
}, Vv = .001;
function Hv({ duration: e = Bv.duration, bounce: t = Bv.bounce, velocity: n = Bv.velocity, mass: r = Bv.mass }) {
	let i, a;
	Bv.maxDuration;
	let o = 1 - t;
	o = Ag(Bv.minDamping, Bv.maxDamping, o), e = Ag(Bv.minDuration, Bv.maxDuration, /* @__PURE__ */ Hg(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Gv(t, o), c = Math.exp(-i);
		return Vv - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Gv(t ** 2, o);
		return (-i(t) + Vv > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Wv(i, a, s);
	if (e = /* @__PURE__ */ Vg(e), isNaN(c)) return {
		stiffness: Bv.stiffness,
		damping: Bv.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Uv = 12;
function Wv(e, t, n) {
	let r = n;
	for (let n = 1; n < Uv; n++) r -= e(r) / t(r);
	return r;
}
function Gv(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs
var Kv = ["duration", "bounce"], qv = [
	"stiffness",
	"damping",
	"mass"
];
function Jv(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Yv(e) {
	let t = {
		velocity: Bv.velocity,
		stiffness: Bv.stiffness,
		damping: Bv.damping,
		mass: Bv.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Jv(e, qv) && Jv(e, Kv)) if (e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * Ag(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: Bv.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = Hv(e);
		t = {
			...t,
			...n,
			mass: Bv.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Xv(e = Bv.visualDuration, t = Bv.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Yv({
		...n,
		velocity: -/* @__PURE__ */ Hg(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ Hg(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? Bv.restSpeed.granular : Bv.restSpeed.default, i ||= v ? Bv.restDelta.granular : Bv.restDelta.default;
	let y;
	if (h < 1) {
		let e = Gv(_, h);
		y = (t) => o - Math.exp(-h * _ * t) * ((m + h * _ * g) / e * Math.sin(e * t) + g * Math.cos(e * t));
	} else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
	else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
	}
	let b = {
		calculatedDuration: p && d || null,
		next: (e) => {
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = e === 0 ? m : 0;
				h < 1 && (n = e === 0 ? /* @__PURE__ */ Vg(m) : zv(y, e, t));
				let a = Math.abs(n) <= r, c = Math.abs(o - t) <= i;
				s.done = a && c;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Iv(b), Fv), t = Pv((t) => b.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return b;
}
Xv.applyToOptions = (e) => {
	let t = Lv(e, 100, Xv);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ Vg(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Zv({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Xv({
			keyframes: [f.value, m(f.value)],
			velocity: zv(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Qv(e, t, n) {
	let r = [], i = n || jg.mix || Mv, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Rg(Array.isArray(t) ? t[n] || Ig : t, a)), r.push(a);
	}
	return r;
}
function $v(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (t.length, a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Qv(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ zg(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(Ag(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function ey(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ zg(0, t, r);
		e.push(vv(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function ty(e) {
	let t = [0];
	return ey(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function ny(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function ry(e, t) {
	return e.map(() => t || s_).splice(0, e.length - 1);
}
function iy({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = c_(r) ? r.map(p_) : p_(r), a = {
		done: !1,
		value: t[0]
	}, o = $v(ny(n && n.length === t.length ? n : ty(t), e), t, { ease: Array.isArray(i) ? i : ry(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var ay = (e) => e !== null;
function oy(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(ay), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var sy = {
	decay: Zv,
	inertia: Zv,
	tween: iy,
	keyframes: iy,
	spring: Xv
};
function cy(e) {
	typeof e.type == "string" && (e.type = sy[e.type]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var ly = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, uy = (e) => e / 100, dy = class extends ly {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== T_.now() && this.tick(T_.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, E_.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		cy(e);
		let { type: t = iy, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || iy;
		s !== iy && typeof o[0] != "number" && (this.mixKeyframes = Rg(uy, Mv(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Iv(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = Ag(0, 1, n) * o;
		}
		let b = _ ? {
			done: !1,
			value: l[0]
		} : y.next(v);
		i && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Zv && (b.value = oy(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ Hg(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ Hg(e);
	}
	get time() {
		return /* @__PURE__ */ Hg(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ Vg(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		this.updateTime(T_.now());
		let t = this.playbackSpeed !== e;
		this.playbackSpeed = e, t && (this.time = /* @__PURE__ */ Hg(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Nv, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(T_.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, E_.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fy(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var py = (e) => e * 180 / Math.PI, my = (e) => gy(py(Math.atan2(e[1], e[0]))), hy = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: my,
	rotateZ: my,
	skewX: (e) => py(Math.atan(e[1])),
	skewY: (e) => py(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, gy = (e) => (e %= 360, e < 0 && (e += 360), e), _y = my, vy = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), yy = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), by = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: vy,
	scaleY: yy,
	scale: (e) => (vy(e) + yy(e)) / 2,
	rotateX: (e) => gy(py(Math.atan2(e[6], e[5]))),
	rotateY: (e) => gy(py(Math.atan2(-e[2], e[0]))),
	rotateZ: _y,
	rotate: _y,
	skewX: (e) => py(Math.atan(e[4])),
	skewY: (e) => py(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function xy(e) {
	return +!!e.includes("scale");
}
function Sy(e, t) {
	if (!e || e === "none") return xy(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = by, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = hy, i = t;
	}
	if (!i) return xy(t);
	let a = r[t], o = i[1].split(",").map(wy);
	return typeof a == "function" ? a(o) : o[a];
}
var Cy = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return Sy(n, t);
};
function wy(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var Ty = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], Ey = /* @__PURE__ */ new Set(Ty), Dy = (e) => e === N_ || e === $, Oy = new Set([
	"x",
	"y",
	"z"
]), ky = Ty.filter((e) => !Oy.has(e));
function Ay(e) {
	let t = [];
	return ky.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var jy = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Sy(t, "x"),
	y: (e, { transform: t }) => Sy(t, "y")
};
jy.translateX = jy.x, jy.translateY = jy.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var My = /* @__PURE__ */ new Set(), Ny = !1, Py = !1, Fy = !1;
function Iy() {
	if (Py) {
		let e = Array.from(My).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Ay(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Py = !1, Ny = !1, My.forEach((e) => e.complete(Fy)), My.clear();
}
function Ly() {
	My.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Py = !0);
	});
}
function Ry() {
	Fy = !0, Ly(), Iy(), Fy = !1;
}
var zy = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (My.add(this), Ny || (Ny = !0, y_.read(Ly), y_.resolveKeyframes(Iy))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		fy(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), My.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (My.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, By = (e) => e.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Vy(e, t, n) {
	By(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Hy = /* @__PURE__ */ Fg(() => window.ScrollTimeline !== void 0), Uy = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Wy(e, t) {
	let n = /* @__PURE__ */ Fg(e);
	return () => Uy[t] ?? n();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var Gy = /*@__PURE__*/ Wy(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Ky = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, qy = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Ky([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Ky([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Ky([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Ky([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Jy(e, t) {
	if (e) return typeof e == "function" ? Gy() ? Pv(e, t) : "ease-out" : u_(e) ? Ky(e) : Array.isArray(e) ? e.map((e) => Jy(e, t) || qy.easeOut) : qy[e];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Yy(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Jy(s, i);
	Array.isArray(d) && (u.easing = d), h_.value && E_.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return h_.value && p.finished.finally(() => {
		E_.waapi--;
	}), p;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Xy(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Zy({ type: e, ...t }) {
	return Xy(e) && Gy() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Qy = class extends ly {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = Zy(e);
		this.animation = Yy(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = oy(r, this.options, o, this.speed);
				this.updateMotionValue ? this.updateMotionValue(e) : Vy(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ Hg(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ Hg(e);
	}
	get time() {
		return /* @__PURE__ */ Hg(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Vg(e);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, observe: t }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Hy() ? (this.animation.timeline = e, Ig) : t(this);
	}
}, $y = {
	anticipate: t_,
	backInOut: e_,
	circInOut: i_
};
function eb(e) {
	return e in $y;
}
function tb(e) {
	typeof e.ease == "string" && eb(e.ease) && (e.ease = $y[e.ease]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var nb = 10, rb = class extends Qy {
	constructor(e) {
		tb(e), cy(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new dy({
			...a,
			autoplay: !1
		}), s = Math.max(nb, T_.now() - this.startTime), c = Ag(0, nb, s - nb);
		t.setWithVelocity(o.sample(Math.max(0, s - c)).value, o.sample(s).value, c), o.stop();
	}
}, ib = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (mv.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function ab(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ob(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = ib(i, t), s = ib(a, t);
	return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : ab(e) || (n === "spring" || Xy(n)) && r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function sb(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var cb = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), lb = /*@__PURE__*/ Fg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ub(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
	return lb() && n && cb.has(n) && (n !== "transform" || !c) && !s && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var db = 40, fb = class extends ly {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = T_.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || zy;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = T_.now(), ob(e, i, a, o) || ((jg.instantAnimations || !s) && l?.(oy(e, n, t)), e[0] = e[e.length - 1], sb(n), n.repeat = 0);
		let u = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > db ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, d = !c && ub(u), f = u.motionValue?.owner?.current, p = d ? new rb({
			...u,
			element: f
		}) : new dy(u);
		p.finished.then(() => {
			this.notifyFinished();
		}).catch(Ig), this.pendingTimeline &&= (this.stopTimeline = p.attachTimeline(this.pendingTimeline), void 0), this._animation = p;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Ry()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, pb = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => e.finished));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, t) {
		for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
	}
	attachTimeline(e) {
		let t = this.animations.map((t) => t.attachTimeline(e));
		return () => {
			t.forEach((e, t) => {
				e && e(), this.animations[t].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		this.setAll("time", e);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		this.setAll("speed", e);
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return mb(this.animations, "duration");
	}
	get iterationDuration() {
		return mb(this.animations, "iterationDuration");
	}
	runAll(e) {
		this.animations.forEach((t) => t[e]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
};
function mb(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var hb = class extends pb {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
}, gb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function _b(e) {
	let t = gb.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function vb(e, t, n = 1) {
	`${e}`;
	let [r, i] = _b(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Mg(e) ? parseFloat(e) : e;
	}
	return A_(i) ? vb(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var yb = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, bb = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), xb = {
	type: "keyframes",
	duration: .8
}, Sb = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Cb = (e, { keyframes: t }) => t.length > 2 ? xb : Ey.has(e) ? e.startsWith("scale") ? bb(t[1]) : yb : Sb, wb = (e) => e !== null;
function Tb(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(wb), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Eb(e, t) {
	return e?.[t] ?? e?.default ?? e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
function Db({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: s, from: c, elapsed: l, ...u }) {
	return !!Object.keys(u).length;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Ob = (e, t, n, r = {}, i, a) => (o) => {
	let s = Eb(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ Vg(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Db(s) || Object.assign(u, Cb(e, u)), u.duration &&= /* @__PURE__ */ Vg(u.duration), u.repeatDelay &&= /* @__PURE__ */ Vg(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (sb(u), u.delay === 0 && (d = !0)), (jg.instantAnimations || jg.skipAnimations) && (d = !0, sb(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Tb(u.keyframes, s);
		if (e !== void 0) {
			y_.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new dy(u) : new fb(u);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function kb(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Ab(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = kb(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = kb(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function jb(e, t, n) {
	let r = e.getProps();
	return Ab(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Mb = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...Ty
]), Nb = 30, Pb = (e) => !isNaN(parseFloat(e)), Fb = { current: void 0 }, Ib = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = T_.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = T_.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Pb(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new Bg());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), y_.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Fb.current && Fb.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = T_.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Nb) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Nb);
		return Ug(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Lb(e, t) {
	return new Ib(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Rb = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
function zb(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Lb(n));
}
function Bb(e) {
	return Rb(e) ? e[e.length - 1] || 0 : e;
}
function Vb(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = jb(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) zb(e, t, Bb(i[t]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var Hb = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Ub(e) {
	return !!(Hb(e) && e.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Wb(e, t) {
	let n = e.getValue("willChange");
	if (Ub(n)) return n.add(t);
	if (!n && jg.WillChange) {
		let n = new jg.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Gb(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Kb = "data-" + Gb("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function qb(e) {
	return e.props[Kb];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Jb({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Yb(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t, c = a?.reduceMotion;
	r && (a = r);
	let l = [], u = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || u && Jb(u, t)) continue;
		let o = {
			delay: n,
			...Eb(a || {}, t)
		}, d = r.get();
		if (d !== void 0 && !r.isAnimating && !Array.isArray(i) && i === d && !o.velocity) continue;
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = qb(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, y_);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Wb(e, t);
		let p = c ?? e.shouldReduceMotion;
		r.start(Ob(t, r, i, p && Mb.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && l.push(m);
	}
	return o && Promise.all(l).then(() => {
		y_.update(() => {
			o && Vb(e, o);
		});
	}), l;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
var Xb = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Zb = (e) => (t) => t.test(e), Qb = [
	N_,
	$,
	Y_,
	J_,
	Z_,
	X_,
	Xb
], $b = (e) => Qb.find(Zb(e));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function ex(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || Pg(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var tx = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function nx(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(L_) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!tx.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var rx = /\b([a-z-]*)\(.*?\)/gu, ix = {
	...mv,
	getAnimatableNone: (e) => {
		let t = e.match(rx);
		return t ? t.map(nx).join(" ") : e;
	}
}, ax = {
	...N_,
	transform: Math.round
}, ox = {
	borderWidth: $,
	borderTopWidth: $,
	borderRightWidth: $,
	borderBottomWidth: $,
	borderLeftWidth: $,
	borderRadius: $,
	borderTopLeftRadius: $,
	borderTopRightRadius: $,
	borderBottomRightRadius: $,
	borderBottomLeftRadius: $,
	width: $,
	maxWidth: $,
	height: $,
	maxHeight: $,
	top: $,
	right: $,
	bottom: $,
	left: $,
	inset: $,
	insetBlock: $,
	insetBlockStart: $,
	insetBlockEnd: $,
	insetInline: $,
	insetInlineStart: $,
	insetInlineEnd: $,
	padding: $,
	paddingTop: $,
	paddingRight: $,
	paddingBottom: $,
	paddingLeft: $,
	paddingBlock: $,
	paddingBlockStart: $,
	paddingBlockEnd: $,
	paddingInline: $,
	paddingInlineStart: $,
	paddingInlineEnd: $,
	margin: $,
	marginTop: $,
	marginRight: $,
	marginBottom: $,
	marginLeft: $,
	marginBlock: $,
	marginBlockStart: $,
	marginBlockEnd: $,
	marginInline: $,
	marginInlineStart: $,
	marginInlineEnd: $,
	fontSize: $,
	backgroundPositionX: $,
	backgroundPositionY: $,
	rotate: J_,
	rotateX: J_,
	rotateY: J_,
	rotateZ: J_,
	scale: F_,
	scaleX: F_,
	scaleY: F_,
	scaleZ: F_,
	skew: J_,
	skewX: J_,
	skewY: J_,
	distance: $,
	translateX: $,
	translateY: $,
	translateZ: $,
	x: $,
	y: $,
	z: $,
	perspective: $,
	transformPerspective: $,
	opacity: P_,
	originX: Q_,
	originY: Q_,
	originZ: $,
	zIndex: ax,
	fillOpacity: P_,
	strokeOpacity: P_,
	numOctaves: ax
}, sx = {
	...ox,
	color: ev,
	backgroundColor: ev,
	outlineColor: ev,
	fill: ev,
	stroke: ev,
	borderColor: ev,
	borderTopColor: ev,
	borderRightColor: ev,
	borderBottomColor: ev,
	borderLeftColor: ev,
	filter: ix,
	WebkitFilter: ix
}, cx = (e) => sx[e];
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
function lx(e, t) {
	let n = cx(e);
	return n !== ix && (n = mv), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var ux = new Set([
	"auto",
	"none",
	"0"
]);
function dx(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !ux.has(t) && lv(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = lx(n, i);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var fx = class extends zy {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), A_(r))) {
				let i = vb(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Mb.has(n) || e.length !== 2) return;
		let [r, i] = e, a = $b(r), o = $b(i);
		if (M_(r) !== M_(i) && jy[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (Dy(a) && Dy(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else jy[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || ex(e[t])) && n.push(t);
		n.length && dx(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = jy[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = jy[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function px(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var mx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, { schedule: hx, cancel: gx } = /* @__PURE__ */ v_(queueMicrotask, !1);
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function _x(e) {
	return Ng(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function vx(e) {
	return _x(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var yx = [
	...Qb,
	ev,
	mv
], bx = (e) => yx.find(Zb(e)), xx = () => ({
	min: 0,
	max: 0
}), Sx = () => ({
	x: xx(),
	y: xx()
}), Cx = { current: null }, wx = { current: !1 }, Tx = typeof window < "u";
function Ex() {
	if (wx.current = !0, Tx) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Cx.current = e.matches;
		e.addEventListener("change", t), t();
	} else Cx.current = !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/store.mjs
var Dx = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function Ox(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function kx(e) {
	return typeof e == "string" || Array.isArray(e);
}
var Ax = [
	"initial",
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function jx(e) {
	return Ox(e.animate) || Ax.some((t) => kx(e[t]));
}
function Mx(e) {
	return !!(jx(e) || e.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Nx(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (Hb(i)) e.addValue(r, i);
		else if (Hb(a)) e.addValue(r, Lb(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Lb(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var Px = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Fx = {}, Ix = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: a }, o = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = zy, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = T_.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, y_.render(this.render, !1, !0));
		};
		let { latestValues: s, renderState: c } = a;
		this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = t.initial ? { ...s } : {}, this.renderState = c, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = jx(t), this.isVariantNode = Mx(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in u) {
			let t = u[e];
			s[e] !== void 0 && Hb(t) && t.set(s[e]);
		}
	}
	mount(e) {
		this.current = e, Dx.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (wx.current || Ex(), this.shouldReduceMotion = Cx.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		this.projection && this.projection.unmount(), b_(this.notifyUpdate), b_(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
		let n = Ey.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && y_.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Fx) {
			let t = Fx[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Sx();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Px.length; t++) {
			let n = Px[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Nx(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Lb(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Mg(n) || Pg(n)) ? n = parseFloat(n) : !bx(n) && mv.test(t) && (n = lx(e, t)), this.setBaseTarget(e, Hb(n) ? n.get() : n)), Hb(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Ab(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Hb(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new Bg()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		hx.render(this.render);
	}
}, Lx = class extends Ix {
	constructor() {
		super(...arguments), this.KeyframeResolver = fx;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		Hb(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Rx({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function zx(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Bx(e, t) {
	return Rx(zx(e.getBoundingClientRect(), t));
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var Vx = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Hx = Ty.length;
function Ux(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Hx; a++) {
		let o = Ty[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = mx(s, ox[o]);
			if (!c) {
				i = !1;
				let t = Vx[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Wx(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (Ey.has(e)) {
			o = !0;
			continue;
		} else if (O_(e)) {
			i[e] = n;
			continue;
		} else {
			let t = mx(n, ox[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Ux(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Gx(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Kx(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var qx = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if ($.test(e)) e = parseFloat(e);
	else return e;
	return `${Kx(e, t.target.x)}% ${Kx(e, t.target.y)}%`;
} }, Jx = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = mv.parse(e);
	if (i.length > 5) return r;
	let a = mv.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = vv(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, Yx = {
	borderRadius: {
		...qx,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: qx,
	borderTopRightRadius: qx,
	borderBottomLeftRadius: qx,
	borderBottomRightRadius: qx,
	boxShadow: Jx
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Xx(e, { layout: t, layoutId: n }) {
	return Ey.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Yx[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Zx(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (Hb(r[t]) || i && Hb(i[t]) || Xx(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function Qx(e) {
	return window.getComputedStyle(e);
}
var $x = class extends Lx {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Gx;
	}
	readValueFromInstance(e, t) {
		if (Ey.has(t)) return this.projection?.isProjecting ? xy(t) : Cy(e, t);
		{
			let n = Qx(e), r = (O_(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Bx(e, t);
	}
	build(e, t, n) {
		Wx(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Zx(e, t, n);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function eS(e, t) {
	return e in t;
}
var tS = class extends Ix {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (eS(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return Sx();
	}
	build(e, t) {
		Object.assign(e.output, t);
	}
	renderInstance(e, { output: t }) {
		Object.assign(e, t);
	}
	sortInstanceNodePosition() {
		return 0;
	}
}, nS = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, rS = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function iS(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? nS : rS;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var aS = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function oS(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Wx(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of aS) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && iS(d, i, a, o, !1);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var sS = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), cS = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function lS(e, t, n, r) {
	Gx(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(sS.has(n) ? n : Gb(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function uS(e, t, n) {
	let r = Zx(e, t, n);
	for (let n in e) if (Hb(e[n]) || Hb(t[n])) {
		let t = Ty.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var dS = class extends Lx {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Sx;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (Ey.has(t)) {
			let e = cx(t);
			return e && e.default || 0;
		}
		return t = sS.has(t) ? t : Gb(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return uS(e, t, n);
	}
	build(e, t, n) {
		oS(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		lS(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = cS(e.tagName), super.mount(e);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function fS(e, t, n) {
	let r = Hb(e) ? e : Lb(e);
	return r.start(Ob("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function pS(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function mS(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && pS(t) ? px(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function hS(e, t, n) {
	return e * (t + 1);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function gS(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function _S(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (kg(e, i), r--);
	}
}
function vS(e, t, n, r, i, a) {
	_S(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: vv(i, a, r[o]),
		easing: l_(n, o)
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function yS(e, t) {
	for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function bS(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var xS = "easeInOut";
function SS(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map(), u = 0, d = 0, f = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			l.set(o, d);
			continue;
		} else if (!Array.isArray(o)) {
			l.set(o.name, gS(d, o.at, u, l));
			continue;
		}
		let [p, m, h = {}] = o;
		h.at !== void 0 && (d = gS(d, h.at, u, l));
		let g = 0, _ = (e, n, r, o = 0, s = 0) => {
			let c = TS(e), { delay: l = 0, times: u = ty(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: y = t.ease || "easeOut", duration: b } = n, x = typeof l == "function" ? l(o, s) : l, S = c.length, C = Xy(p) ? p : i?.[p || "keyframes"];
			if (S <= 2 && C) {
				let e = 100;
				if (S === 2 && OS(c)) {
					let t = c[1] - c[0];
					e = Math.abs(t);
				}
				let n = {
					...t,
					...v
				};
				b !== void 0 && (n.duration = /* @__PURE__ */ Vg(b));
				let r = Lv(n, e, C);
				y = r.ease, b = r.duration;
			}
			b ??= a;
			let w = d + x;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let T = u.length - c.length;
			if (T > 0 && ey(u, T), c.length === 1 && c.unshift(null), m) {
				b = hS(b, m);
				let e = [...c], t = [...u];
				y = Array.isArray(y) ? [...y] : [y];
				let n = [...y];
				for (let r = 0; r < m; r++) {
					c.push(...e);
					for (let i = 0; i < e.length; i++) u.push(t[i] + (r + 1)), y.push(i === 0 ? "linear" : l_(n, i - 1));
				}
				yS(u, m);
			}
			let E = w + b;
			vS(r, c, y, u, w, E), g = Math.max(x + b, g), f = Math.max(E, f);
		};
		if (Hb(p)) {
			let e = CS(p, s);
			_(m, h, wS("default", e));
		} else {
			let e = mS(p, m, r, c), t = e.length;
			for (let n = 0; n < t; n++) {
				m = m, h = h;
				let r = e[n], i = CS(r, s);
				for (let e in m) _(m[e], ES(h, e), wS(e, i), n, t);
			}
		}
		u = d, d += g;
	}
	return s.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(bS);
			let s = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(/* @__PURE__ */ zg(0, f, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(xS)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
				keyframes: {},
				transition: {}
			});
			let u = o.get(r);
			u.keyframes[i] = s;
			let { type: d, ...p } = t;
			u.transition[i] = {
				...p,
				duration: f,
				ease: l,
				times: c,
				...n
			};
		}
	}), o;
}
function CS(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function wS(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function TS(e) {
	return Array.isArray(e) ? e : [e];
}
function ES(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var DS = (e) => typeof e == "number", OS = (e) => e.every(DS);
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function kS(e) {
	let t = {
		presenceContext: null,
		props: {},
		visualState: {
			renderState: {
				transform: {},
				transformOrigin: {},
				style: {},
				vars: {},
				attrs: {}
			},
			latestValues: {}
		}
	}, n = _x(e) && !vx(e) ? new dS(t) : new $x(t);
	n.mount(e), Dx.set(e, n);
}
function AS(e) {
	let t = new tS({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), Dx.set(e, t);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function jS(e, t) {
	return Hb(e) || typeof e == "number" || typeof e == "string" && !pS(t);
}
function MS(e, t, n, r) {
	let i = [];
	if (jS(e, t)) i.push(fS(e, pS(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = mS(e, t, r), o = a.length;
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? kS : AS;
			Dx.has(r) || s(r);
			let c = Dx.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Yb(c, {
				...t,
				transition: l
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function NS(e, t, n) {
	let r = [];
	return SS(e, t, n, { spring: Xv }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...MS(n, e, t));
	}), r;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/index.mjs
function PS(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function FS(e = {}) {
	let { scope: t, reduceMotion: n } = e;
	function r(e, r, i) {
		let a = [], o;
		if (PS(e)) a = NS(e, n === void 0 ? r : {
			reduceMotion: n,
			...r
		}, t);
		else {
			let { onComplete: s, ...c } = i || {};
			typeof s == "function" && (o = s), a = MS(e, r, n === void 0 ? c : {
				reduceMotion: n,
				...c
			}, t);
		}
		let s = new hb(a);
		return o && s.finished.then(o), t && (t.animations.push(s), s.finished.then(() => {
			kg(t.animations, s);
		})), s;
	}
	return r;
}
var IS = FS(), LS = [
	"d",
	"stroke",
	"stroke-width"
], RS = /*#__PURE__*/ Sl(/* @__PURE__ */ l({
	__name: "AnimatedEdge",
	props: {
		d: {},
		strokeColor: {},
		strokeWidth: {}
	},
	setup(e) {
		let t = e, n = E(null);
		return M(() => t.d, (e) => {
			n.value && IS(n.value, { d: e }, {
				duration: .2,
				ease: "easeInOut"
			});
		}), (t, r) => (C(), a("path", {
			ref_key: "path",
			ref: n,
			d: e.d,
			stroke: e.strokeColor,
			fill: "none",
			"stroke-width": e.strokeWidth
		}, null, 8, LS));
	}
}), [["__scopeId", "data-v-d27c671f"]]);
//#endregion
//#region node_modules/d3-array/src/ascending.js
function zS(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/descending.js
function BS(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function VS(e) {
	let t, n, r;
	e.length === 2 ? (t = e === zS || e === BS ? e : HS, n = e, r = e) : (t = zS, n = (t, n) => zS(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function HS() {
	return 0;
}
//#endregion
//#region node_modules/d3-array/src/number.js
function US(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var WS = VS(zS), GS = WS.right;
WS.left, VS(US).center;
//#endregion
//#region node_modules/d3-array/src/ticks.js
var KS = Math.sqrt(50), qS = Math.sqrt(10), JS = Math.sqrt(2);
function YS(e, t, n) {
	var r, i = -1, a, o, s;
	if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
	if ((r = t < e) && (a = e, e = t, t = a), (s = XS(e, t, n)) === 0 || !isFinite(s)) return [];
	if (s > 0) {
		let n = Math.round(e / s), r = Math.round(t / s);
		for (n * s < e && ++n, r * s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) * s;
	} else {
		s = -s;
		let n = Math.round(e * s), r = Math.round(t * s);
		for (n / s < e && ++n, r / s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) / s;
	}
	return r && o.reverse(), o;
}
function XS(e, t, n) {
	var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / 10 ** i;
	return i >= 0 ? (a >= KS ? 10 : a >= qS ? 5 : a >= JS ? 2 : 1) * 10 ** i : -(10 ** -i) / (a >= KS ? 10 : a >= qS ? 5 : a >= JS ? 2 : 1);
}
function ZS(e, t, n) {
	var r = Math.abs(t - e) / Math.max(0, n), i = 10 ** Math.floor(Math.log(r) / Math.LN10), a = r / i;
	return a >= KS ? i *= 10 : a >= qS ? i *= 5 : a >= JS && (i *= 2), t < e ? -i : i;
}
//#endregion
//#region node_modules/d3-dispatch/src/dispatch.js
var QS = { value: () => {} };
function $S() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new eC(n);
}
function eC(e) {
	this._ = e;
}
function tC(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
eC.prototype = $S.prototype = {
	constructor: eC,
	on: function(e, t) {
		var n = this._, r = tC(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = nC(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = rC(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = rC(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new eC(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function nC(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function rC(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = QS, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var iC = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function aC(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), iC.hasOwnProperty(t) ? {
		space: iC[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function oC(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function sC(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function cC(e) {
	var t = aC(e);
	return (t.local ? sC : oC)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function lC() {}
function uC(e) {
	return e == null ? lC : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function dC(e) {
	typeof e != "function" && (e = uC(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new $w(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function fC(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function pC() {
	return [];
}
function mC(e) {
	return e == null ? pC : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function hC(e) {
	return function() {
		return fC(e.apply(this, arguments));
	};
}
function gC(e) {
	e = typeof e == "function" ? hC(e) : mC(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new $w(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function _C(e) {
	return function() {
		return this.matches(e);
	};
}
function vC(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var yC = Array.prototype.find;
function bC(e) {
	return function() {
		return yC.call(this.children, e);
	};
}
function xC() {
	return this.firstElementChild;
}
function SC(e) {
	return this.select(e == null ? xC : bC(typeof e == "function" ? e : vC(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var CC = Array.prototype.filter;
function wC() {
	return Array.from(this.children);
}
function TC(e) {
	return function() {
		return CC.call(this.children, e);
	};
}
function EC(e) {
	return this.selectAll(e == null ? wC : TC(typeof e == "function" ? e : vC(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function DC(e) {
	typeof e != "function" && (e = _C(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new $w(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function OC(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function kC() {
	return new $w(this._enter || this._groups.map(OC), this._parents);
}
function AC(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
AC.prototype = {
	constructor: AC,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function jC(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function MC(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new AC(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function NC(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new AC(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function PC(e) {
	return e.__data__;
}
function FC(e, t) {
	if (!arguments.length) return Array.from(this, PC);
	var n = t ? NC : MC, r = this._parents, i = this._groups;
	typeof e != "function" && (e = jC(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = IC(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new $w(o, r), o._enter = s, o._exit = c, o;
}
function IC(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function LC() {
	return new $w(this._exit || this._groups.map(OC), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function RC(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function zC(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new $w(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function BC() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function VC(e) {
	e ||= HC;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new $w(i, this._parents).order();
}
function HC(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function UC() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function WC() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function GC() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function KC() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function qC() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function JC(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function YC(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function XC(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function ZC(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function QC(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function $C(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function ew(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function tw(e, t) {
	var n = aC(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? XC : YC : typeof t == "function" ? n.local ? ew : $C : n.local ? QC : ZC)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function nw(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function rw(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function iw(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function aw(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function ow(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? rw : typeof t == "function" ? aw : iw)(e, t, n ?? "")) : sw(this.node(), e);
}
function sw(e, t) {
	return e.style.getPropertyValue(t) || nw(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function cw(e) {
	return function() {
		delete this[e];
	};
}
function lw(e, t) {
	return function() {
		this[e] = t;
	};
}
function uw(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function dw(e, t) {
	return arguments.length > 1 ? this.each((t == null ? cw : typeof t == "function" ? uw : lw)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function fw(e) {
	return e.trim().split(/^|\s+/);
}
function pw(e) {
	return e.classList || new mw(e);
}
function mw(e) {
	this._node = e, this._names = fw(e.getAttribute("class") || "");
}
mw.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function hw(e, t) {
	for (var n = pw(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function gw(e, t) {
	for (var n = pw(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function _w(e) {
	return function() {
		hw(this, e);
	};
}
function vw(e) {
	return function() {
		gw(this, e);
	};
}
function yw(e, t) {
	return function() {
		(t.apply(this, arguments) ? hw : gw)(this, e);
	};
}
function bw(e, t) {
	var n = fw(e + "");
	if (arguments.length < 2) {
		for (var r = pw(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? yw : t ? _w : vw)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function xw() {
	this.textContent = "";
}
function Sw(e) {
	return function() {
		this.textContent = e;
	};
}
function Cw(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function ww(e) {
	return arguments.length ? this.each(e == null ? xw : (typeof e == "function" ? Cw : Sw)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function Tw() {
	this.innerHTML = "";
}
function Ew(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Dw(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Ow(e) {
	return arguments.length ? this.each(e == null ? Tw : (typeof e == "function" ? Dw : Ew)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function kw() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Aw() {
	return this.each(kw);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function jw() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mw() {
	return this.each(jw);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function Nw(e) {
	var t = typeof e == "function" ? e : cC(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Pw() {
	return null;
}
function Fw(e, t) {
	var n = typeof e == "function" ? e : cC(e), r = t == null ? Pw : typeof t == "function" ? t : uC(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Iw() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Lw() {
	return this.each(Iw);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function Rw() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zw() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bw(e) {
	return this.select(e ? zw : Rw);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Vw(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function Hw(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Uw(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ww(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Gw(e, t, n) {
	return function() {
		var r = this.__on, i, a = Hw(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Kw(e, t, n) {
	var r = Uw(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Gw : Ww, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function qw(e, t, n) {
	var r = nw(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Jw(e, t) {
	return function() {
		return qw(this, e, t);
	};
}
function Yw(e, t) {
	return function() {
		return qw(this, e, t.apply(this, arguments));
	};
}
function Xw(e, t) {
	return this.each((typeof t == "function" ? Yw : Jw)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* Zw() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var Qw = [null];
function $w(e, t) {
	this._groups = e, this._parents = t;
}
function eT() {
	return new $w([[document.documentElement]], Qw);
}
function tT() {
	return this;
}
$w.prototype = eT.prototype = {
	constructor: $w,
	select: dC,
	selectAll: gC,
	selectChild: SC,
	selectChildren: EC,
	filter: DC,
	data: FC,
	enter: kC,
	exit: LC,
	join: RC,
	merge: zC,
	selection: tT,
	order: BC,
	sort: VC,
	call: UC,
	nodes: WC,
	node: GC,
	size: KC,
	empty: qC,
	each: JC,
	attr: tw,
	style: ow,
	property: dw,
	classed: bw,
	text: ww,
	html: Ow,
	raise: Aw,
	lower: Mw,
	append: Nw,
	insert: Fw,
	remove: Lw,
	clone: Bw,
	datum: Vw,
	on: Kw,
	dispatch: Xw,
	[Symbol.iterator]: Zw
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function nT(e) {
	return typeof e == "string" ? new $w([[document.querySelector(e)]], [document.documentElement]) : new $w([[e]], Qw);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function rT(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function iT(e, t) {
	if (e = rT(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var aT = {
	capture: !0,
	passive: !1
};
function oT(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function sT(e) {
	var t = e.document.documentElement, n = nT(e).on("dragstart.drag", oT, aT);
	"onselectstart" in t ? n.on("selectstart.drag", oT, aT) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function cT(e, t) {
	var n = e.document.documentElement, r = nT(e).on("dragstart.drag", null);
	t && (r.on("click.drag", oT, aT), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-color/src/define.js
function lT(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function uT(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function dT() {}
var fT = .7, pT = 1 / fT, mT = "\\s*([+-]?\\d+)\\s*", hT = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", gT = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _T = /^#([0-9a-f]{3,8})$/, vT = RegExp(`^rgb\\(${mT},${mT},${mT}\\)$`), yT = RegExp(`^rgb\\(${gT},${gT},${gT}\\)$`), bT = RegExp(`^rgba\\(${mT},${mT},${mT},${hT}\\)$`), xT = RegExp(`^rgba\\(${gT},${gT},${gT},${hT}\\)$`), ST = RegExp(`^hsl\\(${hT},${gT},${gT}\\)$`), CT = RegExp(`^hsla\\(${hT},${gT},${gT},${hT}\\)$`), wT = {
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
lT(dT, kT, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: TT,
	formatHex: TT,
	formatHex8: ET,
	formatHsl: DT,
	formatRgb: OT,
	toString: OT
});
function TT() {
	return this.rgb().formatHex();
}
function ET() {
	return this.rgb().formatHex8();
}
function DT() {
	return HT(this).formatHsl();
}
function OT() {
	return this.rgb().formatRgb();
}
function kT(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = _T.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? AT(t) : n === 3 ? new PT(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? jT(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? jT(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = vT.exec(e)) ? new PT(t[1], t[2], t[3], 1) : (t = yT.exec(e)) ? new PT(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bT.exec(e)) ? jT(t[1], t[2], t[3], t[4]) : (t = xT.exec(e)) ? jT(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ST.exec(e)) ? VT(t[1], t[2] / 100, t[3] / 100, 1) : (t = CT.exec(e)) ? VT(t[1], t[2] / 100, t[3] / 100, t[4]) : wT.hasOwnProperty(e) ? AT(wT[e]) : e === "transparent" ? new PT(NaN, NaN, NaN, 0) : null;
}
function AT(e) {
	return new PT(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function jT(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new PT(e, t, n, r);
}
function MT(e) {
	return e instanceof dT || (e = kT(e)), e ? (e = e.rgb(), new PT(e.r, e.g, e.b, e.opacity)) : new PT();
}
function NT(e, t, n, r) {
	return arguments.length === 1 ? MT(e) : new PT(e, t, n, r ?? 1);
}
function PT(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
lT(PT, NT, uT(dT, {
	brighter(e) {
		return e = e == null ? pT : pT ** +e, new PT(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? fT : fT ** +e, new PT(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new PT(zT(this.r), zT(this.g), zT(this.b), RT(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: FT,
	formatHex: FT,
	formatHex8: IT,
	formatRgb: LT,
	toString: LT
}));
function FT() {
	return `#${BT(this.r)}${BT(this.g)}${BT(this.b)}`;
}
function IT() {
	return `#${BT(this.r)}${BT(this.g)}${BT(this.b)}${BT((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function LT() {
	let e = RT(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${zT(this.r)}, ${zT(this.g)}, ${zT(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function RT(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function zT(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function BT(e) {
	return e = zT(e), (e < 16 ? "0" : "") + e.toString(16);
}
function VT(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new WT(e, t, n, r);
}
function HT(e) {
	if (e instanceof WT) return new WT(e.h, e.s, e.l, e.opacity);
	if (e instanceof dT || (e = kT(e)), !e) return new WT();
	if (e instanceof WT) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new WT(o, s, c, e.opacity);
}
function UT(e, t, n, r) {
	return arguments.length === 1 ? HT(e) : new WT(e, t, n, r ?? 1);
}
function WT(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
lT(WT, UT, uT(dT, {
	brighter(e) {
		return e = e == null ? pT : pT ** +e, new WT(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? fT : fT ** +e, new WT(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new PT(qT(e >= 240 ? e - 240 : e + 120, i, r), qT(e, i, r), qT(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new WT(GT(this.h), KT(this.s), KT(this.l), RT(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = RT(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${GT(this.h)}, ${KT(this.s) * 100}%, ${KT(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function GT(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function KT(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function qT(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var JT = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function YT(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function XT(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function ZT(e) {
	return (e = +e) == 1 ? QT : function(t, n) {
		return n - t ? XT(t, n, e) : JT(isNaN(t) ? n : t);
	};
}
function QT(e, t) {
	var n = t - e;
	return n ? YT(e, n) : JT(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var $T = (function e(t) {
	var n = ZT(t);
	function r(e, t) {
		var r = n((e = NT(e)).r, (t = NT(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = QT(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function eE(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function tE(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function nE(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = dE(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function rE(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function iE(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function aE(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = dE(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var oE = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sE = new RegExp(oE.source, "g");
function cE(e) {
	return function() {
		return e;
	};
}
function lE(e) {
	return function(t) {
		return e(t) + "";
	};
}
function uE(e, t) {
	var n = oE.lastIndex = sE.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = oE.exec(e)) && (i = sE.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: iE(r, i)
	})), n = sE.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? lE(c[0].x) : cE(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function dE(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? JT(t) : (n === "number" ? iE : n === "string" ? (r = kT(t)) ? (t = r, $T) : uE : t instanceof kT ? $T : t instanceof Date ? rE : tE(t) ? eE : Array.isArray(t) ? nE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? aE : iE)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function fE(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var pE = 180 / Math.PI, mE = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function hE(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * pE,
		skewX: Math.atan(c) * pE,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var gE;
function _E(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? mE : hE(t.a, t.b, t.c, t.d, t.e, t.f);
}
function vE(e) {
	return e == null || (gE ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), gE.setAttribute("transform", e), !(e = gE.transform.baseVal.consolidate())) ? mE : (e = e.matrix, hE(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function yE(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: iE(e, i)
			}, {
				i: c - 2,
				x: iE(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: iE(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: iE(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: iE(e, n)
			}, {
				i: s - 2,
				x: iE(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var bE = yE(_E, "px, ", "px)", "deg)"), xE = yE(vE, ", ", ")", ")"), SE = 1e-12;
function CE(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wE(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function TE(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var EE = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < SE) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = CE(y), c = s / (n * g) * (i * TE(t * r + y) - wE(y));
				return [
					a + c * d,
					o + c * f,
					s * i / CE(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), DE = 0, OE = 0, kE = 0, AE = 1e3, jE, ME, NE = 0, PE = 0, FE = 0, IE = typeof performance == "object" && performance.now ? performance : Date, LE = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function RE() {
	return PE ||= (LE(zE), IE.now() + FE);
}
function zE() {
	PE = 0;
}
function BE() {
	this._call = this._time = this._next = null;
}
BE.prototype = VE.prototype = {
	constructor: BE,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? RE() : +n) + (t == null ? 0 : +t), !this._next && ME !== this && (ME ? ME._next = this : jE = this, ME = this), this._call = e, this._time = n, KE();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, KE());
	}
};
function VE(e, t, n) {
	var r = new BE();
	return r.restart(e, t, n), r;
}
function HE() {
	RE(), ++DE;
	for (var e = jE, t; e;) (t = PE - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--DE;
}
function UE() {
	PE = (NE = IE.now()) + FE, DE = OE = 0;
	try {
		HE();
	} finally {
		DE = 0, GE(), PE = 0;
	}
}
function WE() {
	var e = IE.now(), t = e - NE;
	t > AE && (FE -= t, NE = e);
}
function GE() {
	for (var e, t = jE, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : jE = n);
	ME = e, KE(r);
}
function KE(e) {
	DE || (OE &&= clearTimeout(OE), e - PE > 24 ? (e < Infinity && (OE = setTimeout(UE, e - IE.now() - FE)), kE &&= clearInterval(kE)) : (kE ||= (NE = IE.now(), setInterval(WE, AE)), DE = 1, LE(UE)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function qE(e, t, n) {
	var r = new BE();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var JE = $S("start", "end", "cancel", "interrupt"), YE = [];
function XE(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	eD(e, n, {
		name: t,
		index: r,
		group: i,
		on: JE,
		tween: YE,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function ZE(e, t) {
	var n = $E(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function QE(e, t) {
	var n = $E(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function $E(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function eD(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = VE(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return qE(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (qE(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/interrupt.js
function tD(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/selection/interrupt.js
function nD(e) {
	return this.each(function() {
		tD(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function rD(e, t) {
	var n, r;
	return function() {
		var i = QE(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function iD(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = QE(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function aD(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = $E(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? rD : iD)(n, e, t));
}
function oD(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = QE(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return $E(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function sD(e, t) {
	var n;
	return (typeof t == "number" ? iE : t instanceof kT ? $T : (n = kT(t)) ? (t = n, $T) : uE)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function cD(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function lD(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function uD(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function dD(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function fD(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function pD(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function mD(e, t) {
	var n = aC(e), r = n === "transform" ? xE : sD;
	return this.attrTween(e, typeof t == "function" ? (n.local ? pD : fD)(n, r, oD(this, "attr." + e, t)) : t == null ? (n.local ? lD : cD)(n) : (n.local ? dD : uD)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function hD(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function gD(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function _D(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && gD(e, i)), n;
	}
	return i._value = t, i;
}
function vD(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && hD(e, i)), n;
	}
	return i._value = t, i;
}
function yD(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = aC(e);
	return this.tween(n, (r.local ? _D : vD)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function bD(e, t) {
	return function() {
		ZE(this, e).delay = +t.apply(this, arguments);
	};
}
function xD(e, t) {
	return t = +t, function() {
		ZE(this, e).delay = t;
	};
}
function SD(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? bD : xD)(t, e)) : $E(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function CD(e, t) {
	return function() {
		QE(this, e).duration = +t.apply(this, arguments);
	};
}
function wD(e, t) {
	return t = +t, function() {
		QE(this, e).duration = t;
	};
}
function TD(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? CD : wD)(t, e)) : $E(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function ED(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		QE(this, e).ease = t;
	};
}
function DD(e) {
	var t = this._id;
	return arguments.length ? this.each(ED(t, e)) : $E(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function OD(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		QE(this, e).ease = n;
	};
}
function kD(e) {
	if (typeof e != "function") throw Error();
	return this.each(OD(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function AD(e) {
	typeof e != "function" && (e = _C(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new aO(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function jD(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new aO(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function MD(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function ND(e, t, n) {
	var r, i, a = MD(t) ? ZE : QE;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function PD(e, t) {
	var n = this._id;
	return arguments.length < 2 ? $E(this.node(), n).on.on(e) : this.each(ND(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function FD(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function ID() {
	return this.on("end.remove", FD(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function LD(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = uC(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, XE(l[f], t, n, f, l, $E(u, n)));
	return new aO(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function RD(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = mC(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = $E(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && XE(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new aO(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var zD = eT.prototype.constructor;
function BD() {
	return new zD(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function VD(e, t) {
	var n, r, i;
	return function() {
		var a = sw(this, e), o = (this.style.removeProperty(e), sw(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function HD(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function UD(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = sw(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function WD(e, t, n) {
	var r, i, a;
	return function() {
		var o = sw(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), sw(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function GD(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = QE(this, e), l = c.on, u = c.value[a] == null ? s ||= HD(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function KD(e, t, n) {
	var r = (e += "") == "transform" ? bE : sD;
	return t == null ? this.styleTween(e, VD(e, r)).on("end.style." + e, HD(e)) : typeof t == "function" ? this.styleTween(e, WD(e, r, oD(this, "style." + e, t))).each(GD(this._id, e)) : this.styleTween(e, UD(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function qD(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function JD(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && qD(e, a, n)), r;
	}
	return a._value = t, a;
}
function YD(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, JD(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function XD(e) {
	return function() {
		this.textContent = e;
	};
}
function ZD(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function QD(e) {
	return this.tween("text", typeof e == "function" ? ZD(oD(this, "text", e)) : XD(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function $D(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function eO(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && $D(r)), t;
	}
	return r._value = e, r;
}
function tO(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, eO(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function nO() {
	for (var e = this._name, t = this._id, n = sO(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = $E(c, t);
		XE(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new aO(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function rO() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = QE(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var iO = 0;
function aO(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function oO(e) {
	return eT().transition(e);
}
function sO() {
	return ++iO;
}
var cO = eT.prototype;
aO.prototype = oO.prototype = {
	constructor: aO,
	select: LD,
	selectAll: RD,
	selectChild: cO.selectChild,
	selectChildren: cO.selectChildren,
	filter: AD,
	merge: jD,
	selection: BD,
	transition: nO,
	call: cO.call,
	nodes: cO.nodes,
	node: cO.node,
	size: cO.size,
	empty: cO.empty,
	each: cO.each,
	on: PD,
	attr: mD,
	attrTween: yD,
	style: KD,
	styleTween: YD,
	text: QD,
	textTween: tO,
	remove: ID,
	tween: aD,
	delay: SD,
	duration: TD,
	ease: DD,
	easeVarying: kD,
	end: rO,
	[Symbol.iterator]: cO[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function lO(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var uO = {
	time: null,
	delay: 0,
	duration: 250,
	ease: lO
};
function dO(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function fO(e) {
	var t, n;
	e instanceof aO ? (t = e._id, e = e._name) : (t = sO(), (n = uO).time = RE(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && XE(c, e, t, l, o, n || dO(c, t));
	return new aO(r, this._parents, e, t);
}
eT.prototype.interrupt = nD, eT.prototype.transition = fO;
//#endregion
//#region node_modules/d3-brush/src/brush.js
var { abs: pO, max: mO, min: hO } = Math;
["w", "e"].map(gO), ["n", "s"].map(gO), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(gO);
function gO(e) {
	return { type: e };
}
//#endregion
//#region node_modules/d3-path/src/path.js
var _O = Math.PI, vO = 2 * _O, yO = 1e-6, bO = vO - yO;
function xO() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function SO() {
	return new xO();
}
xO.prototype = SO.prototype = {
	constructor: xO,
	moveTo: function(e, t) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
	},
	closePath: function() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	},
	lineTo: function(e, t) {
		this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
	},
	quadraticCurveTo: function(e, t, n, r) {
		this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
	},
	arcTo: function(e, t, n, r, i) {
		e = +e, t = +t, n = +n, r = +r, i = +i;
		var a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (i < 0) throw Error("negative radius: " + i);
		if (this._x1 === null) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
		else if (d > yO) if (!(Math.abs(u * s - c * l) > yO) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
		else {
			var f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((_O - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > yO && (this._ += "L" + (e + y * l) + "," + (t + y * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * f > l * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * c);
		}
	},
	arc: function(e, t, n, r, i, a) {
		e = +e, t = +t, n = +n, a = !!a;
		var o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		if (n < 0) throw Error("negative radius: " + n);
		this._x1 === null ? this._ += "M" + c + "," + l : (Math.abs(this._x1 - c) > yO || Math.abs(this._y1 - l) > yO) && (this._ += "L" + c + "," + l), n && (d < 0 && (d = d % vO + vO), d > bO ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = c) + "," + (this._y1 = l) : d > yO && (this._ += "A" + n + "," + n + ",0," + +(d >= _O) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
	},
	rect: function(e, t, n, r) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
	},
	toString: function() {
		return this._;
	}
};
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function CO(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function wO(e, t) {
	if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
	var n, r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function TO(e) {
	return e = wO(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function EO(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function DO(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var OO = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kO(e) {
	if (!(t = OO.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new AO({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
kO.prototype = AO.prototype;
function AO(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
AO.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function jO(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
			break;
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region node_modules/d3-format/src/formatPrefixAuto.js
var MO;
function NO(e, t) {
	var n = wO(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1], a = i - (MO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + wO(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function PO(e, t) {
	var n = wO(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var FO = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: CO,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => PO(e * 100, t),
	r: PO,
	s: NO,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function IO(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var LO = Array.prototype.map, RO = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function zO(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? IO : EO(LO.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? IO : DO(LO.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e) {
		e = kO(e);
		var l = e.fill, u = e.align, d = e.sign, f = e.symbol, p = e.zero, m = e.width, h = e.comma, g = e.precision, _ = e.trim, v = e.type;
		v === "n" ? (h = !0, v = "g") : FO[v] || (g === void 0 && (g = 12), _ = !0, v = "g"), (p || l === "0" && u === "=") && (p = !0, l = "0", u = "=");
		var y = f === "$" ? n : f === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", b = f === "$" ? r : /[%p]/.test(v) ? o : "", x = FO[v], S = /[defgprs%]/.test(v);
		g = g === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
		function C(e) {
			var n = y, r = b, o, f, C;
			if (v === "c") r = x(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : x(Math.abs(e), g), _ && (e = jO(e)), w && +e == 0 && d !== "+" && (w = !1), n = (w ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + n, r = (v === "s" ? RO[8 + MO / 3] : "") + r + (w && d === "(" ? ")" : ""), S) {
					for (o = -1, f = e.length; ++o < f;) if (C = e.charCodeAt(o), 48 > C || C > 57) {
						r = (C === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			h && !p && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < m ? Array(m - T + 1).join(l) : "";
			switch (h && p && (e = t(E + e, E.length ? m - r.length : Infinity), E = ""), u) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default:
					e = E + n + e + r;
					break;
			}
			return a(e);
		}
		return C.toString = function() {
			return e + "";
		}, C;
	}
	function u(e, t) {
		var n = l((e = kO(e), e.type = "f", e)), r = Math.max(-8, Math.min(8, Math.floor(TO(t) / 3))) * 3, i = 10 ** -r, a = RO[8 + r / 3];
		return function(e) {
			return n(i * e) + a;
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region node_modules/d3-format/src/defaultLocale.js
var BO, VO, HO;
UO({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function UO(e) {
	return BO = zO(e), VO = BO.format, HO = BO.formatPrefix, BO;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function WO(e) {
	return Math.max(0, -TO(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function GO(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(TO(t) / 3))) * 3 - TO(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function KO(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, TO(t) - TO(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/init.js
function qO(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default:
			this.range(t).domain(e);
			break;
	}
	return this;
}
//#endregion
//#region node_modules/d3-scale/src/constant.js
function JO(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function YO(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var XO = [0, 1];
function ZO(e) {
	return e;
}
function QO(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : JO(isNaN(t) ? NaN : .5);
}
function $O(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function ek(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = QO(i, r), a = n(o, a)) : (r = QO(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function tk(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = QO(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = GS(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function nk(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function rk() {
	var e = XO, t = XO, n = dE, r, i, a, o = ZO, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== ZO && (o = $O(e[0], e[n - 1])), s = n > 2 ? tk : ek, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), iE))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, YO), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = fE, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : ZO, u()) : o !== ZO;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function ik() {
	return rk()(ZO, ZO);
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function ak(e, t, n, r) {
	var i = ZS(e, t, n), a;
	switch (r = kO(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = GO(i, o)) && (r.precision = a), HO(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = KO(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(a = WO(i)) && (r.precision = a - (r.type === "%") * 2);
			break;
	}
	return VO(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function ok(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return YS(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return ak(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = XS(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function sk() {
	var e = ik();
	return e.copy = function() {
		return nk(e, sk());
	}, qO.apply(e, arguments), ok(e);
}
//#endregion
//#region node_modules/d3-zoom/src/constant.js
var ck = (e) => () => e;
//#endregion
//#region node_modules/d3-zoom/src/event.js
function lk(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		transform: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		_: { value: i }
	});
}
//#endregion
//#region node_modules/d3-zoom/src/transform.js
function uk(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
uk.prototype = {
	constructor: uk,
	scale: function(e) {
		return e === 1 ? this : new uk(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new uk(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var dk = new uk(1, 0, 0);
fk.prototype = uk.prototype;
function fk(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return dk;
	return e.__zoom;
}
//#endregion
//#region node_modules/d3-zoom/src/noevent.js
function pk(e) {
	e.stopImmediatePropagation();
}
function mk(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-zoom/src/zoom.js
function hk(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function gk() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function _k() {
	return this.__zoom || dk;
}
function vk(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function yk() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function bk(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function xk() {
	var e = hk, t = gk, n = bk, r = vk, i = yk, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = EE, l = $S("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", _k).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", ee).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", _k), e === i ? i.interrupt().each(function() {
			S(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : x(e, t, n, r);
	}, _.scaleBy = function(e, t, n, r) {
		_.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, _.scaleTo = function(e, r, i, a) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, s = i == null ? b(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(s), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(y(v(a, l), s, c), e, o);
		}, i, a);
	}, _.translateBy = function(e, r, i, a) {
		_.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), o);
		}, null, a);
	}, _.translateTo = function(e, r, i, a, s) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), s = this.__zoom, c = a == null ? b(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n(dk.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new uk(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new uk(e.k, r, i);
	}
	function b(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function x(e, n, r, i) {
		e.on("start.zoom", function() {
			S(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			S(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = S(e, a).event(i), s = t.apply(e, a), l = r == null ? b(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new uk(n, l[0] - t[0] * n, l[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function S(e, t, n) {
		return !n && e.__zooming || new C(e, t);
	}
	function C(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	C.prototype = {
		event: function(e) {
			return e && (this.sourceEvent = e), this;
		},
		start: function() {
			return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
		},
		zoom: function(e, t) {
			return this.mouse && e !== "mouse" && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== "touch" && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== "touch" && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this;
		},
		end: function() {
			return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
		},
		emit: function(e) {
			var t = nT(this.that).datum();
			l.call(e, this.that, new lk(e, {
				sourceEvent: this.sourceEvent,
				target: _,
				type: e,
				transform: this.that.__zoom,
				dispatch: l
			}), t);
		}
	};
	function w(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = iT(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], tD(this), s.start();
		mk(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = nT(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = iT(t, i), l = t.clientX, u = t.clientY;
		sT(t.view), pk(t), a.mouse = [c, this.__zoom.invert(c)], tD(this), a.start();
		function d(e) {
			if (mk(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = iT(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), cT(e.view, a.moved), mk(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = iT(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			mk(r), s > 0 ? nT(this).transition().duration(s).call(x, d, c, r) : nT(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (pk(t), s = 0; s < i; ++s) c = r[s], l = iT(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), tD(this), a.start());
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (mk(e), s = 0; s < a; ++s) c = i[s], l = iT(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function ee(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (pk(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = iT(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = nT(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : ck(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : ck(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : ck(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : ck([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
	}, _.scaleExtent = function(e) {
		return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]];
	}, _.translateExtent = function(e) {
		return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
	}, _.constrain = function(e) {
		return arguments.length ? (n = e, _) : n;
	}, _.duration = function(e) {
		return arguments.length ? (s = +e, _) : s;
	}, _.interpolate = function(e) {
		return arguments.length ? (c = e, _) : c;
	}, _.on = function() {
		var e = l.on.apply(l, arguments);
		return e === l ? _ : e;
	}, _.clickDistance = function(e) {
		return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h);
	}, _.tapDistance = function(e) {
		return arguments.length ? (g = +e, _) : g;
	}, _;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/count.js
function Sk(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function Ck() {
	return this.eachAfter(Sk);
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/each.js
function wk(e) {
	var t = this, n, r = [t], i, a, o;
	do
		for (n = r.reverse(), r = []; t = n.pop();) if (e(t), i = t.children, i) for (a = 0, o = i.length; a < o; ++a) r.push(i[a]);
	while (r.length);
	return this;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function Tk(e) {
	for (var t = this, n = [t], r, i; t = n.pop();) if (e(t), r = t.children, r) for (i = r.length - 1; i >= 0; --i) n.push(r[i]);
	return this;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function Ek(e) {
	for (var t = this, n = [t], r = [], i, a, o; t = n.pop();) if (r.push(t), i = t.children, i) for (a = 0, o = i.length; a < o; ++a) n.push(i[a]);
	for (; t = r.pop();) e(t);
	return this;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/sum.js
function Dk(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/sort.js
function Ok(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/path.js
function kk(e) {
	for (var t = this, n = Ak(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function Ak(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function jk() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/descendants.js
function Mk() {
	var e = [];
	return this.each(function(t) {
		e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/leaves.js
function Nk() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/links.js
function Pk() {
	var e = this, t = [];
	return e.each(function(n) {
		n !== e && t.push({
			source: n.parent,
			target: n
		});
	}), t;
}
//#endregion
//#region node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/index.js
function Fk(e, t) {
	var n = new Bk(e), r = +e.value && (n.value = e.value), i, a = [n], o, s, c, l;
	for (t ??= Lk; i = a.pop();) if (r && (i.value = +i.data.value), (s = t(i.data)) && (l = s.length)) for (i.children = Array(l), c = l - 1; c >= 0; --c) a.push(o = i.children[c] = new Bk(s[c])), o.parent = i, o.depth = i.depth + 1;
	return n.eachBefore(zk);
}
function Ik() {
	return Fk(this).eachBefore(Rk);
}
function Lk(e) {
	return e.children;
}
function Rk(e) {
	e.data = e.data.data;
}
function zk(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function Bk(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
Bk.prototype = Fk.prototype = {
	constructor: Bk,
	count: Ck,
	each: wk,
	eachAfter: Ek,
	eachBefore: Tk,
	sum: Dk,
	sort: Ok,
	path: kk,
	ancestors: jk,
	descendants: Mk,
	leaves: Nk,
	links: Pk,
	copy: Ik
};
//#endregion
//#region node_modules/d3-flextree/src/flextree.js
var { version: Vk } = {
	name: "d3-flextree",
	version: "2.1.2",
	main: "build/d3-flextree.js",
	module: "index",
	"jsnext:main": "index",
	author: {
		name: "Chris Maloney",
		url: "http://chrismaloney.org"
	},
	description: "Flexible tree layout algorithm that allows for variable node sizes.",
	keywords: [
		"d3",
		"d3-module",
		"layout",
		"tree",
		"hierarchy",
		"d3-hierarchy",
		"plugin",
		"d3-plugin",
		"infovis",
		"visualization",
		"2d"
	],
	homepage: "https://github.com/klortho/d3-flextree",
	license: "WTFPL",
	repository: {
		type: "git",
		url: "https://github.com/klortho/d3-flextree.git"
	},
	scripts: {
		clean: "rm -rf build demo test",
		"build:demo": "rollup -c --environment BUILD:demo",
		"build:dev": "rollup -c --environment BUILD:dev",
		"build:prod": "rollup -c --environment BUILD:prod",
		"build:test": "rollup -c --environment BUILD:test",
		build: "rollup -c",
		lint: "eslint index.js src",
		"test:main": "node test/bundle.js",
		"test:browser": "node test/browser-tests.js",
		test: "npm-run-all test:*",
		prepare: "npm-run-all clean build lint test"
	},
	dependencies: { "d3-hierarchy": "^1.1.5" },
	devDependencies: {
		"babel-plugin-external-helpers": "^6.22.0",
		"babel-preset-es2015-rollup": "^3.0.0",
		d3: "^4.13.0",
		"d3-selection-multi": "^1.0.1",
		eslint: "^4.19.1",
		jsdom: "^11.6.2",
		"npm-run-all": "^4.1.2",
		rollup: "^0.55.3",
		"rollup-plugin-babel": "^2.7.1",
		"rollup-plugin-commonjs": "^8.0.2",
		"rollup-plugin-copy": "^0.2.3",
		"rollup-plugin-json": "^2.3.0",
		"rollup-plugin-node-resolve": "^3.0.2",
		"rollup-plugin-uglify": "^3.0.0",
		"uglify-es": "^3.3.9"
	}
}, Hk = Object.freeze({
	children: (e) => e.children,
	nodeSize: (e) => e.data.size,
	spacing: 0
});
function Uk(e) {
	let t = Object.assign({}, Hk, e);
	function n(e) {
		let n = t[e];
		return typeof n == "function" ? n : () => n;
	}
	function r(e) {
		let t = o(a(), e, (e) => e.children);
		return t.update(), t.data;
	}
	function i() {
		let e = n("nodeSize"), t = n("spacing");
		return class n extends Fk.prototype.constructor {
			constructor(e) {
				super(e);
			}
			copy() {
				let e = o(this.constructor, this, (e) => e.children);
				return e.each((e) => e.data = e.data.data), e;
			}
			get size() {
				return e(this);
			}
			spacing(e) {
				return t(this, e);
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
				let e = this.ancestors();
				return e[e.length - 1];
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
				return (this.children || []).reduce((e, t) => n.maxExtents(e, t.extents), this.nodeExtents);
			}
			get nodeExtents() {
				return {
					top: this.top,
					bottom: this.bottom,
					left: this.left,
					right: this.right
				};
			}
			static maxExtents(e, t) {
				return {
					top: Math.min(e.top, t.top),
					bottom: Math.max(e.bottom, t.bottom),
					left: Math.min(e.left, t.left),
					right: Math.max(e.right, t.right)
				};
			}
		};
	}
	function a() {
		let e = i(), t = n("nodeSize"), r = n("spacing");
		return class extends e {
			constructor(e) {
				super(e), Object.assign(this, {
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
				return t(this.data);
			}
			spacing(e) {
				return r(this.data, e.data);
			}
			get x() {
				return this.data.x;
			}
			set x(e) {
				this.data.x = e;
			}
			get y() {
				return this.data.y;
			}
			set y(e) {
				this.data.y = e;
			}
			update() {
				return Wk(this), Gk(this), this;
			}
		};
	}
	function o(e, t, n) {
		let r = (t, i) => {
			let a = new e(t);
			Object.assign(a, {
				parent: i,
				depth: i === null ? 0 : i.depth + 1,
				height: 0,
				length: 1
			});
			let o = n(t) || [];
			return a.children = o.length === 0 ? null : o.map((e) => r(e, a)), a.children && Object.assign(a, a.children.reduce((e, t) => ({
				height: Math.max(e.height, t.height + 1),
				length: e.length + t.length
			}), a)), a;
		};
		return r(t, null);
	}
	return Object.assign(r, {
		nodeSize(e) {
			return arguments.length ? (t.nodeSize = e, r) : t.nodeSize;
		},
		spacing(e) {
			return arguments.length ? (t.spacing = e, r) : t.spacing;
		},
		children(e) {
			return arguments.length ? (t.children = e, r) : t.children;
		},
		hierarchy(e, n) {
			let r = n === void 0 ? t.children : n;
			return o(i(), e, r);
		},
		dump(e) {
			let t = n("nodeSize"), r = (e) => (n) => {
				let i = e + "  ", a = e + "    ", { x: o, y: s } = n, c = t(n), l = n.children || [], u = l.length === 0 ? " " : `,${i}children: [${a}${l.map(r(a)).join(a)}${i}],${e}`;
				return `{ size: [${c.join(", ")}],${i}x: ${o}, y: ${s}${u}},`;
			};
			return r("\n")(e);
		}
	}), r;
}
Uk.version = Vk;
var Wk = (e, t = 0) => (e.y = t, (e.children || []).reduce((t, n) => {
	let [r, i] = t;
	Wk(n, e.y + e.ySize);
	let a = (r === 0 ? n.lExt : n.rExt).bottom;
	r !== 0 && qk(e, r, i);
	let o = tA(a, r, i);
	return [r + 1, o];
}, [0, null]), Kk(e), eA(e), e), Gk = (e, t, n) => {
	t === void 0 && (t = -e.relX - e.prelim, n = 0);
	let r = t + e.relX;
	return e.relX = r + e.prelim - n, e.prelim = 0, e.x = n + e.relX, (e.children || []).forEach((t) => Gk(t, r, e.x)), e;
}, Kk = (e) => {
	(e.children || []).reduce((e, t) => {
		let [n, r] = e, i = n + t.shift, a = r + i + t.change;
		return t.relX += a, [i, a];
	}, [0, 0]);
}, qk = (e, t, n) => {
	let r = e.children[t - 1], i = e.children[t], a = r, o = r.relX, s = i, c = i.relX, l = !0;
	for (; a && s;) {
		a.bottom > n.lowY && (n = n.next);
		let r = o + a.prelim - (c + s.prelim) + a.xSize / 2 + s.xSize / 2 + a.spacing(s);
		(r > 0 || r < 0 && l) && (c += r, Jk(i, r), Yk(e, t, n.index, r)), l = !1;
		let u = a.bottom, d = s.bottom;
		u <= d && (a = Zk(a), a && (o += a.relX)), u >= d && (s = Xk(s), s && (c += s.relX));
	}
	!a && s ? Qk(e, t, s, c) : a && !s && $k(e, t, a, o);
}, Jk = (e, t) => {
	e.relX += t, e.lExtRelX += t, e.rExtRelX += t;
}, Yk = (e, t, n, r) => {
	let i = e.children[t], a = t - n;
	if (a > 1) {
		let t = r / a;
		e.children[n + 1].shift += t, i.shift -= t, i.change -= r - t;
	}
}, Xk = (e) => e.hasChildren ? e.firstChild : e.lThr, Zk = (e) => e.hasChildren ? e.lastChild : e.rThr, Qk = (e, t, n, r) => {
	let i = e.firstChild, a = i.lExt, o = e.children[t];
	a.lThr = n;
	let s = r - n.relX - i.lExtRelX;
	a.relX += s, a.prelim -= s, i.lExt = o.lExt, i.lExtRelX = o.lExtRelX;
}, $k = (e, t, n, r) => {
	let i = e.children[t], a = i.rExt, o = e.children[t - 1];
	a.rThr = n;
	let s = r - n.relX - i.rExtRelX;
	a.relX += s, a.prelim -= s, i.rExt = o.rExt, i.rExtRelX = o.rExtRelX;
}, eA = (e) => {
	if (e.hasChildren) {
		let t = e.firstChild, n = e.lastChild, r = (t.prelim + t.relX - t.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
		Object.assign(e, {
			prelim: r,
			lExt: t.lExt,
			lExtRelX: t.lExtRelX,
			rExt: n.rExt,
			rExtRelX: n.rExtRelX
		});
	}
}, tA = (e, t, n) => {
	for (; n !== null && e >= n.lowY;) n = n.next;
	return {
		lowY: e,
		index: t,
		next: n
	};
}, nA = { class: "execution-memory-node" }, rA = { class: "d-flex" }, iA = { class: "text-body px-1" }, aA = { class: "d-flex justify-content-between" }, oA = { class: "text-secondary" }, sA = {
	key: 0,
	class: "d-flex flex-column justify-content-around px-3"
}, cA = {
	key: 0,
	class: "text-secondary"
}, lA = {
	key: 1,
	class: "text-secondary"
}, uA = {
	key: 2,
	class: "text-secondary"
}, dA = {
	key: 1,
	class: "text-secondary mt-3 px-3"
}, fA = /* @__PURE__ */ l({
	__name: "SliceDetail",
	props: { memoryDetails: {} },
	setup(e) {
		let t = T(e.memoryDetails), n = E(!1), l = E(null);
		return (e, u) => (C(), a("div", {
			ref_key: "outerEl",
			ref: l,
			onDblclick: u[1] ||= F(() => {}, ["stop"])
		}, [o("div", nA, [
			o("header", rA, [
				c(j(K), {
					"fixed-width": "",
					icon: j(Tc),
					class: "text-secondary py-1"
				}, null, 8, ["icon"]),
				u[2] ||= s(),
				o("span", iA, "\n            Slice : " + A(t[j(Qc).SLICE_NUM]), 1)
			]),
			u[8] ||= s(),
			o("header", aA, [o("h4", {
				class: "btn py-0 px-0 d-flex",
				onClick: u[0] ||= F((e) => n.value = !n.value, ["prevent", "stop"])
			}, [
				o("span", oA, [n.value ? (C(), r(j(K), {
					key: 0,
					"fixed-width": "",
					icon: j(Cc)
				}, null, 8, ["icon"])) : (C(), r(j(K), {
					key: 1,
					"fixed-width": "",
					icon: j(Lc)
				}, null, 8, ["icon"]))]),
				u[3] ||= s(),
				u[4] ||= o("span", null, null, -1),
				u[5] ||= s("\n            ExecutorMemory\n          ", -1)
			])]),
			u[9] ||= s(),
			n.value ? (C(), a("div", sA, [
				t[j(Qc).EXECUTOR_MEMORY]?.[j($c).AVERAGE_MEMORY] ? (C(), a("span", cA, "\n            Average memory :\n            " + A(t[j(Qc).EXECUTOR_MEMORY]?.[j($c).AVERAGE_MEMORY]), 1)) : i("", !0),
				u[6] ||= s(),
				t[j(Qc).EXECUTOR_MEMORY]?.[j($c).NUMBER_OF_WORKER_THREADS] ? (C(), a("span", lA, "\n            Number of worker threads :\n            " + A(t[j(Qc).EXECUTOR_MEMORY]?.[j($c).NUMBER_OF_WORKER_THREADS]), 1)) : i("", !0),
				u[7] ||= s(),
				t[j(Qc).EXECUTOR_MEMORY]?.[j($c).MAXIMUM_MEMORY] ? (C(), a("span", uA, "\n            Maximum memory :\n  \n            " + A(t[j(Qc).EXECUTOR_MEMORY]?.[j($c).MAXIMUM_MEMORY]), 1)) : i("", !0)
			])) : i("", !0),
			u[10] ||= s(),
			t[j(Qc).WORK_MEMORY] ? (C(), a("span", dA, "\n          WorkMemory : " + A(t[j(Qc).WORK_MEMORY]), 1)) : i("", !0)
		])], 544));
	}
}), pA = {
	key: 0,
	class: "flex-grow-1 d-flex justify-content-center"
}, mA = { class: "card align-self-center border-danger w-50" }, hA = { class: "card-body" }, gA = { class: "overflow-hidden d-flex w-100 h-100 position-relative mb-3" }, _A = { class: "overflow-auto flex-grow-1" }, vA = {
	class: "small p-2 mb-0",
	style: { "max-height": "200px" }
}, yA = ["innerHTML"], bA = { class: "d-flex align-items-center" }, xA = { class: "text-body-tertiary" }, SA = { class: "d-flex align-items-center" }, CA = { class: "nav nav-pills" }, wA = { class: "nav-item p-1" }, TA = { class: "nav-item p-1" }, EA = {
	key: 0,
	class: "badge bg-info",
	style: { "font-size": "0.6em" }
}, DA = { class: "nav-item p-1" }, OA = { class: "nav-item p-1" }, kA = { class: "nav-item p-1" }, AA = { class: "ms-auto me-2 small" }, jA = {
	href: "https://github.com/dalibo/pev2",
	target: "_blank"
}, MA = { class: "tab-content flex-grow-1 d-flex overflow-hidden" }, NA = { class: "d-flex flex-column flex-grow-1 overflow-hidden" }, PA = { class: "flex-grow-1 d-flex overflow-hidden" }, FA = { class: "flex-grow-1 overflow-hidden" }, IA = {
	key: 0,
	class: "position-absolute m-1 p-1 bottom-0 end-0 rounded d-flex"
}, LA = { class: "btn-group btn-group-xs" }, RA = ["disabled"], zA = ["disabled"], BA = {
	key: 1,
	class: "position-absolute top-0 end-0 d-flex align-items-center"
}, VA = {
	key: 0,
	class: "plan-node"
}, HA = ["transform"], UA = { key: 0 }, WA = ["x", "y"], GA = ["x", "y"], KA = [
	"x",
	"y",
	"width"
], qA = [
	"x",
	"y",
	"width",
	"height"
], JA = [
	"x",
	"y",
	"width"
], YA = { class: "overflow-hidden d-flex w-100 h-100 flex-column" }, XA = { class: "overflow-hidden d-flex w-100 h-100" }, ZA = { class: "overflow-auto flex-grow-1" }, QA = { class: "small p-2 mb-0" }, $A = ["innerHTML"], ej = { class: "overflow-hidden d-flex w-100 h-100" }, tj = { class: "overflow-auto flex-grow-1" }, nj = { class: "small p-2 mb-0" }, rj = ["innerHTML"], ij = 40, aj = 20, oj = 10, sj = 35, cj = .2, lj = /* @__PURE__ */ l({
	__name: "Plan",
	props: {
		planSource: {},
		planQuery: {}
	},
	setup(n) {
		Ir({ theme: "bootstrap" });
		let l = n, u = "1.22.0", d = E(null), f = E(""), p = E(), m = t(() => Y.plan && Y.plan.content.Plan), h = t(() => Y.plan?.content.Slice), v = E(!0);
		function y(e) {
			return e ? e[J.DATA_SLICE_COUNT] === void 0 ? e.Plans?.some(y) ?? !1 : !0 : !1;
		}
		let S = t(() => y(m.value)), O = E(NaN), ee = E(void 0), k = E(NaN), te = localStorage.getItem("gridIsNotNew"), P = E(!1), I = T({
			showHighlightBar: !1,
			showPlanStats: !0,
			highlightType: Jc.NONE,
			diagramWidth: 20
		}), ne = E(""), re = E(1), ie = t(() => sk().domain([0, Y.stats.maxRows]).range([1, ij / 1.5])), ae = xk().scaleExtent([cj, 3]).on("zoom", function(e) {
			ne.value = e.transform, re.value = e.transform.k;
		}), oe = E(null), se = E([]), ce = E([]), le = Uk({
			nodeSize: (e) => e.data.size ? [e.data.size[0], e.data.size[1] + ij] : [0, 0],
			spacing: (e, t) => e.path(t).length ** 1.5
		}), ge = E(le.hierarchy({}));
		x(() => {
			M(() => [l.planSource, l.planQuery], _e, { immediate: !0 });
		});
		function _e() {
			P.value = !1, Y.parse(l.planSource, l.planQuery);
			let e = localStorage.getItem("viewOptions");
			e && L.default.assignIn(I, JSON.parse(e)), Ee("plan"), g(() => {
				Se();
			}), window.addEventListener("hashchange", Se), Y.plan?.content.Plan && (ge.value = le.hierarchy(Y.plan?.content.Plan, (e) => e.Plans)), se.value = [], L.default.each(Y.plan?.ctes, (e) => {
				let t = le.hierarchy(e, (e) => e.Plans);
				se.value.push(t);
			}), g(() => {
				ve(), P.value = !0;
			});
		}
		function R() {
			oe.value = le(ge.value);
			let e = De(oe.value), t = [e[0], e[3] + ij];
			L.default.each(se.value, (e) => {
				let n = le(e), r = De(n), i = r[1] - r[0];
				n.each((e) => {
					e.x += t[0] - r[0], e.y += t[1];
				}), t[0] += i + ij * 2;
			}), ce.value = [], L.default.each(oe.value.descendants(), (e) => {
				if (L.default.has(e.data, J.CTE_NAME)) {
					let t = L.default.find(se.value, (t) => t.data[J.SUBPLAN_NAME] == "CTE " + e.data[J.CTE_NAME]);
					t && ce.value.push({
						source: e,
						target: t
					});
				}
			}), L.default.each(se.value, (e) => {
				L.default.each(e.descendants(), (e) => {
					if (L.default.has(e.data, J.CTE_NAME)) {
						let t = L.default.find(se.value, (t) => t.data[J.SUBPLAN_NAME] == "CTE " + e.data[J.CTE_NAME]);
						t && ce.value.push({
							source: e,
							target: t
						});
					}
				});
			});
		}
		function ve() {
			p.value && (nT(p.value.$el).call(ae), g(() => {
				if (oe.value) {
					let e = De(oe.value), t = e[0], n = e[2], r = e[1], i = e[3], a = p.value.$el.getBoundingClientRect();
					nT(p.value.$el).call(ae.transform, dk.translate(a.width / 2, 10).scale(Math.min(1, Math.max(cj, .8 / Math.max((r - t) / a.width, (i - n) / a.height)))).translate(-(t + r) / 2, 10));
				}
			}));
		}
		b(() => {
			window.removeEventListener("hashchange", Se);
		}), M(I, ye);
		function ye() {
			localStorage.setItem("viewOptions", JSON.stringify(I));
		}
		M(O, be);
		function be(e) {
			window.location.hash = e ? "plan/node/" + e : "", Y.plan && e && (ee.value = fl(Y.plan, e));
		}
		function xe(e) {
			let t = e.source, n = e.target, r = Math.abs(n.y - (t.y + t.ySize) - ij), i = SO();
			return i.moveTo(t.x, t.y), i.lineTo(t.x, t.y + t.ySize - ij), i.bezierCurveTo(t.x, t.y + t.ySize - ij + r / 2, n.x, n.y - r / 2, n.x, n.y), i.toString();
		}
		function Se() {
			let e = /#([a-zA-Z]*)(\/node\/([0-9]*))*/.exec(window.location.hash);
			if (e) {
				let t = e[1] || "plan";
				Ee(t);
				let n = parseInt(e[3], 0);
				t == "plan" && n !== void 0 && n != O.value && setTimeout(() => {
					Ce(n, !0);
				}, 1);
			}
		}
		w(fe, O), w(pe, k), w("updateNodeSize", ke);
		function Ce(e, t) {
			t = !!t, O.value = e, t && we(e);
		}
		w(me, Ce), w(he, I);
		function we(e) {
			let t = p.value.$el.getBoundingClientRect(), n = Te(e);
			if (!n) return;
			let r = -n.x, i = -n.y, a = re.value;
			r = r * a + t.width / 2, i = i * a + t.height / 2, nT(p.value.$el).transition().duration(500).call(ae.transform, dk.translate(r, i).scale(a));
		}
		function Te(e) {
			let t = [oe.value].concat(se.value), n;
			return L.default.each(t, (t) => (n = L.default.find(t?.descendants(), (t) => t.data.nodeId == e), !n)), n;
		}
		let Ee = (e) => {
			f.value = e;
		};
		function De(e) {
			return [
				L.default.min(L.default.map(e.descendants(), (e) => e.x - e.xSize / 2)) || 0,
				L.default.max(L.default.map(e.descendants(), (e) => e.x + e.xSize / 2)) || 0,
				L.default.min(L.default.map(e.descendants(), (e) => e.y)) || 0,
				L.default.max(L.default.map(e.descendants(), (e) => e.y + e.ySize)) || 0
			];
		}
		function Oe(e) {
			return !!Y.stats.executionTime && !e[J.ACTUAL_LOOPS];
		}
		M(() => {
			let e = [];
			return e.concat(ge.value.descendants().map((e) => e.data.size)), L.default.each(se.value, (t) => {
				e.concat(t.descendants().map((e) => e.data.size));
			}), e;
		}, () => {
			R();
		});
		function ke(e, t) {
			e.size = [t[0] / re.value, t[1] / re.value];
		}
		return (t, l) => j(Y).plan ? (C(), a("div", {
			key: 1,
			class: "plan-container d-flex flex-column overflow-hidden flex-grow-1 bg-body-tertiary",
			ref_key: "rootEl",
			ref: d
		}, [
			o("div", SA, [
				o("ul", CA, [
					o("li", wA, [o("a", {
						class: _(["nav-link px-2 py-0", { active: f.value === "plan" }]),
						href: "#plan"
					}, "Plan", 2)]),
					l[18] ||= s(),
					o("li", TA, [o("a", {
						class: _(["nav-link px-2 py-0 position-relative", { active: f.value === "grid" }]),
						href: "#grid"
					}, [l[17] ||= s("Grid\n            ", -1), j(te) ? i("", !0) : (C(), a("span", EA, "\n              new\n            "))], 2)]),
					l[19] ||= s(),
					o("li", DA, [o("a", {
						class: _(["nav-link px-2 py-0", { active: f.value === "raw" }]),
						href: "#raw"
					}, "Raw", 2)]),
					l[20] ||= s(),
					o("li", OA, [o("a", {
						class: _(["nav-link px-2 py-0", {
							active: f.value === "query",
							disabled: !j(Y).query
						}]),
						href: "#query"
					}, "Query", 2)]),
					l[21] ||= s(),
					o("li", kA, [o("a", {
						class: _(["nav-link px-2 py-0", { active: f.value === "stats" }]),
						href: "#stats"
					}, "Stats", 2)])
				]),
				l[22] ||= s(),
				o("div", AA, [o("a", jA, [c(Np), s(" " + A(j(u)), 1)])])
			]),
			l[45] ||= s(),
			o("div", MA, [
				o("div", { class: _(["tab-pane flex-grow-1 overflow-hidden", { "show active d-flex": f.value === "plan" }]) }, [o("div", NA, [
					c(Rh),
					l[37] ||= s(),
					o("div", PA, [o("div", FA, [c(j(ue), {
						class: "default-theme",
						onResize: l[5] ||= (e) => I.diagramWidth = e[0].size
					}, {
						default: N(() => [
							j(Y).plan ? (C(), r(j(de), {
								key: 0,
								size: I.diagramWidth,
								class: "d-flex flex-column bg-body-tertiary"
							}, {
								default: N(() => [c(ad, {
									ref: "diagram",
									class: "d-flex flex-column flex-grow-1 overflow-hidden plan-diagram"
								}, null, 512)]),
								_: 1
							}, 8, ["size"])) : i("", !0),
							l[36] ||= s(),
							c(j(de), {
								ref_key: "planEl",
								ref: p,
								class: "plan grab-bing position-relative bg-body-tertiary"
							}, {
								default: N(() => [
									j(Y).plan ? (C(), a("div", IA, [o("div", LA, [
										o("button", {
											class: _(["btn btn-outline-secondary", { active: I.highlightType === j(Jc).NONE }]),
											onClick: l[0] ||= (e) => I.highlightType = j(Jc).NONE
										}, "\n                        none\n                      ", 2),
										l[23] ||= s(),
										o("button", {
											class: _(["btn btn-outline-secondary", { active: I.highlightType === j(Jc).DURATION }]),
											onClick: l[1] ||= (e) => I.highlightType = j(Jc).DURATION,
											disabled: !j(Y).plan?.isAnalyze
										}, "\n                        duration\n                      ", 10, RA),
										l[24] ||= s(),
										o("button", {
											class: _(["btn btn-outline-secondary", { active: I.highlightType === j(Jc).ROWS }]),
											onClick: l[2] ||= (e) => I.highlightType = j(Jc).ROWS,
											disabled: !m.value || m.value[j(J).ACTUAL_ROWS] === void 0
										}, "\n                        rows\n                      ", 10, zA),
										l[25] ||= s(),
										o("button", {
											class: _(["btn btn-outline-secondary", { active: I.highlightType === j(Jc).COST }]),
											onClick: l[3] ||= (e) => I.highlightType = j(Jc).COST
										}, "\n                        cost\n                      ", 2)
									])])) : i("", !0),
									l[34] ||= s(),
									h.value?.length ? (C(), a("div", BA, [
										o("span", {
											class: "text-secondary",
											onClick: l[4] ||= F((e) => v.value = !v.value, ["prevent", "stop"])
										}, [v.value ? (C(), r(j(K), {
											key: 0,
											"fixed-width": "",
											icon: j(Bc)
										}, null, 8, ["icon"])) : (C(), r(j(K), {
											key: 1,
											"fixed-width": "",
											icon: j(zc)
										}, null, 8, ["icon"]))]),
										l[26] ||= s(),
										v.value ? (C(), a("div", VA, [(C(!0), a(e, null, D(h.value, (e, t) => (C(), r(fA, {
											key: t,
											"memory-details": e
										}, null, 8, ["memory-details"]))), 128))])) : i("", !0)
									])) : i("", !0),
									l[35] ||= s(),
									(C(), a("svg", {
										width: "100%",
										height: "100%",
										class: _({ ready: P.value })
									}, [o("g", { transform: ne.value }, [
										(C(!0), a(e, null, D(ce.value, (e, t) => (C(), r(RS, {
											key: `${j(Y).plan?.id}_linkcte${t}`,
											d: xe(e),
											"stroke-color": "#B3D7D7",
											"stroke-width": ie.value(e.target.data[j(J).ACTUAL_ROWS_REVISED])
										}, null, 8, ["d", "stroke-width"]))), 128)),
										l[30] ||= s(),
										(C(!0), a(e, null, D(oe.value?.links(), (e, t) => (C(), r(RS, {
											key: `${j(Y).plan?.id}_link${t}`,
											d: xe(e),
											class: _({ "never-executed": Oe(e.target.data) }),
											"stroke-color": "grey",
											"stroke-width": ie.value(e.target.data[j(J).ACTUAL_ROWS_REVISED]),
											"stroke-linecap": "square",
											fill: "none"
										}, null, 8, [
											"d",
											"class",
											"stroke-width"
										]))), 128)),
										l[31] ||= s(),
										S.value ? (C(), a("g", UA, [
											(C(!0), a(e, null, D(oe.value?.descendants(), (e, t) => (C(), a("text", {
												key: `${j(Y).plan?.id}_node-count-${t}`,
												x: e.x + aj,
												y: e.y - oj,
												"font-size": "12",
												fill: "black",
												"text-anchor": "middle",
												"dominant-baseline": "central"
											}, A(e.data[j(J).NODE_COUNT]), 9, WA))), 128)),
											l[27] ||= s(),
											(C(!0), a(e, null, D(oe.value?.descendants(), (e, t) => (C(), a("text", {
												key: `${j(Y).plan?.id}_data-slice-count-${t}`,
												x: e.x + aj,
												y: e.y + e.ySize - sj,
												"font-size": "12",
												fill: "black",
												"text-anchor": "middle",
												"dominant-baseline": "central"
											}, A(e.data[j(J).DATA_SLICE_COUNT]), 9, GA))), 128))
										])) : i("", !0),
										l[32] ||= s(),
										(C(!0), a(e, null, D(oe.value?.descendants(), (e, t) => (C(), a("foreignObject", {
											key: `${j(Y).plan?.id}_${t}`,
											x: e.x - e.xSize / 2,
											y: e.y,
											width: e.xSize,
											height: "1",
											ref_for: !0,
											ref: "root"
										}, [c(Zm, {
											node: e.data,
											class: "d-flex justify-content-center position-fixed"
										}, null, 8, ["node"])], 8, KA))), 128)),
										l[33] ||= s(),
										(C(!0), a(e, null, D(se.value, (t) => (C(), a("g", { key: t.data.nodeId }, [
											o("rect", {
												x: De(t)[0] - ij / 4,
												y: De(t)[2] - ij / 2,
												width: De(t)[1] - De(t)[0] + ij / 2,
												height: De(t)[3] - De(t)[2],
												stroke: "#cfcfcf",
												"stroke-width": "2",
												fill: "#cfcfcf",
												"fill-opacity": "10%",
												rx: "5",
												ry: "5"
											}, null, 8, qA),
											l[28] ||= s(),
											(C(!0), a(e, null, D(t.links(), (e, t) => (C(), r(RS, {
												key: `${j(Y).plan?.id}_link${t}`,
												d: xe(e),
												"stroke-color": "grey",
												"stroke-width": ie.value(e.target.data[j(J).ACTUAL_ROWS_REVISED])
											}, null, 8, ["d", "stroke-width"]))), 128)),
											l[29] ||= s(),
											(C(!0), a(e, null, D(t.descendants(), (e, t) => (C(), a("foreignObject", {
												key: `${j(Y).plan?.id}_${t}`,
												x: e.x - e.xSize / 2,
												y: e.y,
												width: e.xSize,
												height: "1",
												ref_for: !0,
												ref: "root"
											}, [c(Zm, {
												node: e.data,
												class: "d-flex justify-content-center position-fixed"
											}, null, 8, ["node"])], 8, JA))), 128))
										]))), 128))
									], 8, HA)], 2))
								]),
								_: 1
							}, 512)
						]),
						_: 1
					})])])
				])], 2),
				l[41] ||= s(),
				f.value === "grid" ? (C(), a("div", {
					key: 0,
					class: _(["tab-pane flex-grow-1 overflow-hidden position-relative", { "show active": f.value === "grid" }])
				}, [o("div", YA, [
					c(Rh),
					l[38] ||= s(),
					c(kp, { class: "flex-grow-1 overflow-auto plan-grid" })
				])], 2)) : i("", !0),
				l[42] ||= s(),
				o("div", { class: _(["tab-pane flex-grow-1 overflow-hidden position-relative", { "show active": f.value === "raw" }]) }, [o("div", XA, [
					o("div", ZA, [o("pre", QA, [o("code", { innerHTML: j(cu)(n.planSource) }, null, 8, $A)])]),
					l[39] ||= s(),
					c(Kc, { content: n.planSource }, null, 8, ["content"])
				])], 2),
				l[43] ||= s(),
				j(Y).query ? (C(), a("div", {
					key: 1,
					class: _(["tab-pane flex-grow-1 overflow-hidden position-relative", { "show active": f.value === "query" }])
				}, [
					o("div", ej, [o("div", tj, [o("pre", nj, [o("code", { innerHTML: j(su)(j(Y).query) }, null, 8, rj)])])]),
					l[40] ||= s(),
					c(Kc, { content: j(Y).query }, null, 8, ["content"])
				], 2)) : i("", !0),
				l[44] ||= s(),
				o("div", { class: _(["tab-pane flex-grow-1 overflow-auto", { "show active": f.value === "stats" }]) }, [j(Y).plan ? (C(), r(Dg, { key: 0 })) : i("", !0)], 2)
			])
		], 512)) : (C(), a("div", pA, [o("div", mA, [o("div", hA, [
			l[10] ||= o("h5", { class: "card-title text-danger" }, "Couldn't parse plan", -1),
			l[11] ||= s(),
			l[12] ||= o("h6", { class: "card-subtitle mb-2 text-body-secondary" }, "\n          An error occured while parsing the plan\n        ", -1),
			l[13] ||= s(),
			o("div", gA, [
				o("div", _A, [o("pre", vA, [o("code", { innerHTML: n.planSource }, null, 8, yA)])]),
				l[6] ||= s(),
				c(Kc, { content: n.planSource }, null, 8, ["content"])
			]),
			l[14] ||= s(),
			l[15] ||= o("p", { class: "card-text text-body-dark" }, "\n          The plan you submited couldn't be parsed. This may be a bug. You can\n          help us fix it by opening a new issue.\n        ", -1),
			l[16] ||= s(),
			o("div", bA, [
				o("span", xA, [
					c(Np),
					l[7] ||= s("\n            PEV2 ", -1),
					o("i", null, "version " + A(j(u)), 1)
				]),
				l[8] ||= s(),
				l[9] ||= o("a", {
					href: "https://github.com/dalibo/pev2/issues/new?template=parsing_error.md&labels=parsing&title=Failed+to+parse+plan",
					target: "_blank",
					class: "btn btn-primary ms-auto"
				}, "Open an issue on Github", -1)
			])
		])])]));
	}
});
//#endregion
export { lj as Plan };
