import { jsxs as F, jsx as m, Fragment as Ce } from "react/jsx-runtime";
import * as p from "react";
import xt, { forwardRef as za, createElement as jr, useLayoutEffect as Ed, useState as ye, useEffect as bt, useRef as Nd, useCallback as $a } from "react";
import * as Yn from "react-dom";
import Rd from "react-dom";
function Pd(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Ad = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Td = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Id = {};
function pi(e, t) {
  return (Id.jsx ? Td : Ad).test(e);
}
const Md = /[ \t\n\f\r]/g;
function _d(e) {
  return typeof e == "object" ? e.type === "text" ? hi(e.value) : !1 : hi(e);
}
function hi(e) {
  return e.replace(Md, "") === "";
}
class pn {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
pn.prototype.normal = {};
pn.prototype.property = {};
pn.prototype.space = void 0;
function Ba(e, t) {
  const n = {}, r = {};
  for (const o of e)
    Object.assign(n, o.property), Object.assign(r, o.normal);
  return new pn(n, r, t);
}
function Ur(e) {
  return e.toLowerCase();
}
class Ee {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
Ee.prototype.attribute = "";
Ee.prototype.booleanish = !1;
Ee.prototype.boolean = !1;
Ee.prototype.commaOrSpaceSeparated = !1;
Ee.prototype.commaSeparated = !1;
Ee.prototype.defined = !1;
Ee.prototype.mustUseProperty = !1;
Ee.prototype.number = !1;
Ee.prototype.overloadedBoolean = !1;
Ee.prototype.property = "";
Ee.prototype.spaceSeparated = !1;
Ee.prototype.space = void 0;
let Dd = 0;
const Z = Rt(), ge = Rt(), Wr = Rt(), I = Rt(), fe = Rt(), Ot = Rt(), Re = Rt();
function Rt() {
  return 2 ** ++Dd;
}
const Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Z,
  booleanish: ge,
  commaOrSpaceSeparated: Re,
  commaSeparated: Ot,
  number: I,
  overloadedBoolean: Wr,
  spaceSeparated: fe
}, Symbol.toStringTag, { value: "Module" })), wr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Gr)
);
class wo extends Ee {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), mi(this, "space", o), typeof r == "number")
      for (; ++i < wr.length; ) {
        const a = wr[i];
        mi(this, wr[i], (r & Gr[a]) === Gr[a]);
      }
  }
}
wo.prototype.defined = !0;
function mi(e, t, n) {
  n && (e[t] = n);
}
function jt(e) {
  const t = {}, n = {};
  for (const [r, o] of Object.entries(e.properties)) {
    const i = new wo(
      r,
      e.transform(e.attributes || {}, r),
      o,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[Ur(r)] = r, n[Ur(i.attribute)] = r;
  }
  return new pn(t, n, e.space);
}
const Va = jt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ge,
    ariaAutoComplete: null,
    ariaBusy: ge,
    ariaChecked: ge,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: fe,
    ariaCurrent: null,
    ariaDescribedBy: fe,
    ariaDetails: null,
    ariaDisabled: ge,
    ariaDropEffect: fe,
    ariaErrorMessage: null,
    ariaExpanded: ge,
    ariaFlowTo: fe,
    ariaGrabbed: ge,
    ariaHasPopup: null,
    ariaHidden: ge,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: fe,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: ge,
    ariaMultiLine: ge,
    ariaMultiSelectable: ge,
    ariaOrientation: null,
    ariaOwns: fe,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: ge,
    ariaReadOnly: ge,
    ariaRelevant: null,
    ariaRequired: ge,
    ariaRoleDescription: fe,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: ge,
    ariaSetSize: I,
    ariaSort: null,
    ariaValueMax: I,
    ariaValueMin: I,
    ariaValueNow: I,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Ha(e, t) {
  return t in e ? e[t] : t;
}
function ja(e, t) {
  return Ha(e, t.toLowerCase());
}
const Od = jt({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ot,
    acceptCharset: fe,
    accessKey: fe,
    action: null,
    allow: null,
    allowFullScreen: Z,
    allowPaymentRequest: Z,
    allowUserMedia: Z,
    alt: null,
    as: null,
    async: Z,
    autoCapitalize: null,
    autoComplete: fe,
    autoFocus: Z,
    autoPlay: Z,
    blocking: fe,
    capture: null,
    charSet: null,
    checked: Z,
    cite: null,
    className: fe,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: ge,
    controls: Z,
    controlsList: fe,
    coords: I | Ot,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Z,
    defer: Z,
    dir: null,
    dirName: null,
    disabled: Z,
    download: Wr,
    draggable: ge,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Z,
    formTarget: null,
    headers: fe,
    height: I,
    hidden: Wr,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: fe,
    httpEquiv: fe,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Z,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Z,
    itemId: null,
    itemProp: fe,
    itemRef: fe,
    itemScope: Z,
    itemType: fe,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Z,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: Z,
    muted: Z,
    name: null,
    nonce: null,
    noModule: Z,
    noValidate: Z,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: Z,
    optimum: I,
    pattern: null,
    ping: fe,
    placeholder: null,
    playsInline: Z,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Z,
    referrerPolicy: null,
    rel: fe,
    required: Z,
    reversed: Z,
    rows: I,
    rowSpan: I,
    sandbox: fe,
    scope: null,
    scoped: Z,
    seamless: Z,
    selected: Z,
    shadowRootClonable: Z,
    shadowRootDelegatesFocus: Z,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: ge,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: I,
    step: null,
    style: null,
    tabIndex: I,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Z,
    useMap: null,
    value: ge,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: fe,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: I,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: I,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: Z,
    // Lists. Use CSS to reduce space between items instead
    declare: Z,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: I,
    // `<img>` and `<object>`
    leftMargin: I,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: I,
    // `<body>`
    marginWidth: I,
    // `<body>`
    noResize: Z,
    // `<frame>`
    noHref: Z,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Z,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Z,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: I,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ge,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: I,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: I,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Z,
    disableRemotePlayback: Z,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ja
}), Ld = jt({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Re,
    accentHeight: I,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: I,
    amplitude: I,
    arabicForm: null,
    ascent: I,
    attributeName: null,
    attributeType: null,
    azimuth: I,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: I,
    by: null,
    calcMode: null,
    capHeight: I,
    className: fe,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: I,
    diffuseConstant: I,
    direction: null,
    display: null,
    dur: null,
    divisor: I,
    dominantBaseline: null,
    download: Z,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: I,
    enableBackground: null,
    end: null,
    event: null,
    exponent: I,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: I,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ot,
    g2: Ot,
    glyphName: Ot,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: I,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: I,
    horizOriginX: I,
    horizOriginY: I,
    id: null,
    ideographic: I,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: I,
    k: I,
    k1: I,
    k2: I,
    k3: I,
    k4: I,
    kernelMatrix: Re,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: I,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: I,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: I,
    overlineThickness: I,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: I,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: fe,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: I,
    pointsAtY: I,
    pointsAtZ: I,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Re,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Re,
    rev: Re,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Re,
    requiredFeatures: Re,
    requiredFonts: Re,
    requiredFormats: Re,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: I,
    specularExponent: I,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: I,
    strikethroughThickness: I,
    string: null,
    stroke: null,
    strokeDashArray: Re,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: I,
    strokeOpacity: I,
    strokeWidth: null,
    style: null,
    surfaceScale: I,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Re,
    tabIndex: I,
    tableValues: null,
    target: null,
    targetX: I,
    targetY: I,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Re,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: I,
    underlineThickness: I,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: I,
    values: null,
    vAlphabetic: I,
    vMathematical: I,
    vectorEffect: null,
    vHanging: I,
    vIdeographic: I,
    version: null,
    vertAdvY: I,
    vertOriginX: I,
    vertOriginY: I,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: I,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ha
}), Ua = jt({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Wa = jt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ja
}), Ga = jt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Fd = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, zd = /[A-Z]/g, gi = /-[a-z]/g, $d = /^data[-\w.:]+$/i;
function Bd(e, t) {
  const n = Ur(t);
  let r = t, o = Ee;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && $d.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(gi, Hd);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!gi.test(i)) {
        let a = i.replace(zd, Vd);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    o = wo;
  }
  return new o(r, t);
}
function Vd(e) {
  return "-" + e.toLowerCase();
}
function Hd(e) {
  return e.charAt(1).toUpperCase();
}
const jd = Ba([Va, Od, Ua, Wa, Ga], "html"), bo = Ba([Va, Ld, Ua, Wa, Ga], "svg");
function Ud(e) {
  return e.join(" ").trim();
}
var Fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var So = {}, yi = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Wd = /\n/g, Gd = /^\s*/, qd = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Kd = /^:\s*/, Yd = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Xd = /^[;\s]*/, Qd = /^\s+|\s+$/g, Zd = `
`, vi = "/", xi = "*", wt = "", Jd = "comment", ef = "declaration";
function tf(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(y) {
    var g = y.match(Wd);
    g && (n += g.length);
    var v = y.lastIndexOf(Zd);
    r = ~v ? y.length - v : r + y.length;
  }
  function i() {
    var y = { line: n, column: r };
    return function(g) {
      return g.position = new a(y), c(), g;
    };
  }
  function a(y) {
    this.start = y, this.end = { line: n, column: r }, this.source = t.source;
  }
  a.prototype.content = e;
  function l(y) {
    var g = new Error(
      t.source + ":" + n + ":" + r + ": " + y
    );
    if (g.reason = y, g.filename = t.source, g.line = n, g.column = r, g.source = e, !t.silent) throw g;
  }
  function s(y) {
    var g = y.exec(e);
    if (g) {
      var v = g[0];
      return o(v), e = e.slice(v.length), g;
    }
  }
  function c() {
    s(Gd);
  }
  function u(y) {
    var g;
    for (y = y || []; g = d(); )
      g !== !1 && y.push(g);
    return y;
  }
  function d() {
    var y = i();
    if (!(vi != e.charAt(0) || xi != e.charAt(1))) {
      for (var g = 2; wt != e.charAt(g) && (xi != e.charAt(g) || vi != e.charAt(g + 1)); )
        ++g;
      if (g += 2, wt === e.charAt(g - 1))
        return l("End of comment missing");
      var v = e.slice(2, g - 2);
      return r += 2, o(v), e = e.slice(g), r += 2, y({
        type: Jd,
        comment: v
      });
    }
  }
  function h() {
    var y = i(), g = s(qd);
    if (g) {
      if (d(), !s(Kd)) return l("property missing ':'");
      var v = s(Yd), x = y({
        type: ef,
        property: wi(g[0].replace(yi, wt)),
        value: v ? wi(v[0].replace(yi, wt)) : wt
      });
      return s(Xd), x;
    }
  }
  function f() {
    var y = [];
    u(y);
    for (var g; g = h(); )
      g !== !1 && (y.push(g), u(y));
    return y;
  }
  return c(), f();
}
function wi(e) {
  return e ? e.replace(Qd, wt) : wt;
}
var nf = tf, rf = Fn && Fn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(So, "__esModule", { value: !0 });
So.default = af;
const of = rf(nf);
function af(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, of.default)(e), o = typeof t == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: a, value: l } = i;
    o ? t(a, l, i) : l && (n = n || {}, n[a] = l);
  }), n;
}
var Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.camelCase = void 0;
var lf = /^--[a-zA-Z0-9_-]+$/, sf = /-([a-z])/g, cf = /^[^-]+$/, uf = /^-(webkit|moz|ms|o|khtml)-/, df = /^-(ms)-/, ff = function(e) {
  return !e || cf.test(e) || lf.test(e);
}, pf = function(e, t) {
  return t.toUpperCase();
}, bi = function(e, t) {
  return "".concat(t, "-");
}, hf = function(e, t) {
  return t === void 0 && (t = {}), ff(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(df, bi) : e = e.replace(uf, bi), e.replace(sf, pf));
};
Xn.camelCase = hf;
var mf = Fn && Fn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, gf = mf(So), yf = Xn;
function qr(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, gf.default)(e, function(r, o) {
    r && o && (n[(0, yf.camelCase)(r, t)] = o);
  }), n;
}
qr.default = qr;
var vf = qr;
const xf = /* @__PURE__ */ qa(vf), Ka = Ya("end"), Co = Ya("start");
function Ya(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function wf(e) {
  const t = Co(e), n = Ka(e);
  if (t && n)
    return { start: t, end: n };
}
function on(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Si(e.position) : "start" in e || "end" in e ? Si(e) : "line" in e || "column" in e ? Kr(e) : "";
}
function Kr(e) {
  return Ci(e && e.line) + ":" + Ci(e && e.column);
}
function Si(e) {
  return Kr(e && e.start) + "-" + Kr(e && e.end);
}
function Ci(e) {
  return e && typeof e == "number" ? e : 1;
}
class xe extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let o = "", i = {}, a = !1;
    if (n && ("line" in n && "column" in n ? i = { place: n } : "start" in n && "end" in n ? i = { place: n } : "type" in n ? i = {
      ancestors: [n],
      place: n.position
    } : i = { ...n }), typeof t == "string" ? o = t : !i.cause && t && (a = !0, o = t.message, i.cause = t), !i.ruleId && !i.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? i.ruleId = r : (i.source = r.slice(0, s), i.ruleId = r.slice(s + 1));
    }
    if (!i.place && i.ancestors && i.ancestors) {
      const s = i.ancestors[i.ancestors.length - 1];
      s && (i.place = s.position);
    }
    const l = i.place && "start" in i.place ? i.place.start : i.place;
    this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = o, this.line = l ? l.line : void 0, this.name = on(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
xe.prototype.file = "";
xe.prototype.name = "";
xe.prototype.reason = "";
xe.prototype.message = "";
xe.prototype.stack = "";
xe.prototype.column = void 0;
xe.prototype.line = void 0;
xe.prototype.ancestors = void 0;
xe.prototype.cause = void 0;
xe.prototype.fatal = void 0;
xe.prototype.place = void 0;
xe.prototype.ruleId = void 0;
xe.prototype.source = void 0;
const ko = {}.hasOwnProperty, bf = /* @__PURE__ */ new Map(), Sf = /[A-Z]/g, Cf = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), kf = /* @__PURE__ */ new Set(["td", "th"]), Xa = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ef(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = _f(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Mf(n, t.jsx, t.jsxs);
  }
  const o = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? bo : jd,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, i = Qa(o, e, void 0);
  return i && typeof i != "string" ? i : o.create(
    e,
    o.Fragment,
    { children: i || void 0 },
    void 0
  );
}
function Qa(e, t, n) {
  if (t.type === "element")
    return Nf(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Rf(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Af(e, t, n);
  if (t.type === "mdxjsEsm")
    return Pf(e, t);
  if (t.type === "root")
    return Tf(e, t, n);
  if (t.type === "text")
    return If(e, t);
}
function Nf(e, t, n) {
  const r = e.schema;
  let o = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (o = bo, e.schema = o), e.ancestors.push(t);
  const i = Ja(e, t.tagName, !1), a = Df(e, t);
  let l = No(e, t);
  return Cf.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !_d(s) : !0;
  })), Za(e, a, i, t), Eo(a, l), e.ancestors.pop(), e.schema = r, e.create(t, i, a, n);
}
function Rf(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  sn(e, t.position);
}
function Pf(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  sn(e, t.position);
}
function Af(e, t, n) {
  const r = e.schema;
  let o = r;
  t.name === "svg" && r.space === "html" && (o = bo, e.schema = o), e.ancestors.push(t);
  const i = t.name === null ? e.Fragment : Ja(e, t.name, !0), a = Of(e, t), l = No(e, t);
  return Za(e, a, i, t), Eo(a, l), e.ancestors.pop(), e.schema = r, e.create(t, i, a, n);
}
function Tf(e, t, n) {
  const r = {};
  return Eo(r, No(e, t)), e.create(t, e.Fragment, r, n);
}
function If(e, t) {
  return t.value;
}
function Za(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Eo(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Mf(e, t, n) {
  return r;
  function r(o, i, a, l) {
    const c = Array.isArray(a.children) ? n : t;
    return l ? c(i, a, l) : c(i, a);
  }
}
function _f(e, t) {
  return n;
  function n(r, o, i, a) {
    const l = Array.isArray(i.children), s = Co(r);
    return t(
      o,
      i,
      a,
      l,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function Df(e, t) {
  const n = {};
  let r, o;
  for (o in t.properties)
    if (o !== "children" && ko.call(t.properties, o)) {
      const i = Lf(e, o, t.properties[o]);
      if (i) {
        const [a, l] = i;
        e.tableCellAlignToStyle && a === "align" && typeof l == "string" && kf.has(t.tagName) ? r = l : n[a] = l;
      }
    }
  if (r) {
    const i = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    i[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Of(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const i = r.data.estree.body[0];
        i.type;
        const a = i.expression;
        a.type;
        const l = a.properties[0];
        l.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(l.argument)
        );
      } else
        sn(e, t.position);
    else {
      const o = r.name;
      let i;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, i = e.evaluater.evaluateExpression(l.expression);
        } else
          sn(e, t.position);
      else
        i = r.value === null ? !0 : r.value;
      n[o] = /** @type {Props[keyof Props]} */
      i;
    }
  return n;
}
function No(e, t) {
  const n = [];
  let r = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : bf;
  for (; ++r < t.children.length; ) {
    const i = t.children[r];
    let a;
    if (e.passKeys) {
      const s = i.type === "element" ? i.tagName : i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement" ? i.name : void 0;
      if (s) {
        const c = o.get(s) || 0;
        a = s + "-" + c, o.set(s, c + 1);
      }
    }
    const l = Qa(e, i, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function Lf(e, t, n) {
  const r = Bd(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Pd(n) : Ud(n)), r.property === "style") {
      let o = typeof n == "object" ? n : Ff(e, String(n));
      return e.stylePropertyNameCase === "css" && (o = zf(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Fd[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Ff(e, t) {
  try {
    return xf(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), o = new xe("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw o.file = e.filePath || void 0, o.url = Xa + "#cannot-parse-style-attribute", o;
  }
}
function Ja(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let i = -1, a;
    for (; ++i < o.length; ) {
      const l = pi(o[i]) ? { type: "Identifier", name: o[i] } : { type: "Literal", value: o[i] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: l,
        computed: !!(i && l.type === "Literal"),
        optional: !1
      } : l;
    }
    r = a;
  } else
    r = pi(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const o = (
      /** @type {string | number} */
      r.value
    );
    return ko.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  sn(e);
}
function sn(e, t) {
  const n = new xe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Xa + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function zf(e) {
  const t = {};
  let n;
  for (n in e)
    ko.call(e, n) && (t[$f(n)] = e[n]);
  return t;
}
function $f(e) {
  let t = e.replace(Sf, Bf);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Bf(e) {
  return "-" + e.toLowerCase();
}
const br = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Vf = {};
function Hf(e, t) {
  const n = Vf, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return el(e, r, o);
}
function el(e, t, n) {
  if (jf(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ki(e.children, t, n);
  }
  return Array.isArray(e) ? ki(e, t, n) : "";
}
function ki(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = el(e[o], t, n);
  return r.join("");
}
function jf(e) {
  return !!(e && typeof e == "object");
}
const Ei = document.createElement("i");
function Ro(e) {
  const t = "&" + e + ";";
  Ei.innerHTML = t;
  const n = Ei.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ge(e, t, n, r) {
  const o = e.length;
  let i = 0, a;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); i < r.length; )
      a = r.slice(i, i + 1e4), a.unshift(t, 0), e.splice(...a), i += 1e4, t += 1e4;
}
function Me(e, t) {
  return e.length > 0 ? (Ge(e, e.length, 0, t), e) : t;
}
const Ni = {}.hasOwnProperty;
function Uf(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Wf(t, e[n]);
  return t;
}
function Wf(e, t) {
  let n;
  for (n in t) {
    const o = (Ni.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let a;
    if (i)
      for (a in i) {
        Ni.call(o, a) || (o[a] = []);
        const l = i[a];
        Gf(
          // @ts-expect-error Looks like a list.
          o[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Gf(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ge(e, 0, 0, r);
}
function tl(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Lt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ve = ht(/[A-Za-z]/), Ae = ht(/[\dA-Za-z]/), qf = ht(/[#-'*+\--9=?A-Z^-~]/);
function Yr(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Xr = ht(/\d/), Kf = ht(/[\dA-Fa-f]/), Yf = ht(/[!-/:-@[-`{-~]/);
function q(e) {
  return e !== null && e < -2;
}
function ke(e) {
  return e !== null && (e < 0 || e === 32);
}
function se(e) {
  return e === -2 || e === -1 || e === 32;
}
const Xf = ht(new RegExp("\\p{P}|\\p{S}", "u")), Qf = ht(/\s/);
function ht(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Ut(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let a = "";
    if (i === 37 && Ae(e.charCodeAt(n + 1)) && Ae(e.charCodeAt(n + 2)))
      o = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (a = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const l = e.charCodeAt(n + 1);
      i < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(i, l), o = 1) : a = "�";
    } else
      a = String.fromCharCode(i);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + o + 1, a = ""), o && (n += o, o = 0);
  }
  return t.join("") + e.slice(r);
}
function pe(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return a;
  function a(s) {
    return se(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return se(s) && i++ < o ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const Zf = {
  tokenize: Jf
};
function Jf(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, o);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), pe(e, t, "linePrefix");
  }
  function o(l) {
    return e.enter("paragraph"), i(l);
  }
  function i(l) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, a(l);
  }
  function a(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return q(l) ? (e.consume(l), e.exit("chunkText"), i) : (e.consume(l), a);
  }
}
const ep = {
  tokenize: tp
}, Ri = {
  tokenize: np
};
function tp(e) {
  const t = this, n = [];
  let r = 0, o, i, a;
  return l;
  function l(w) {
    if (r < n.length) {
      const E = n[r];
      return t.containerState = E[1], e.attempt(E[0].continuation, s, c)(w);
    }
    return c(w);
  }
  function s(w) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && C();
      const E = t.events.length;
      let R = E, k;
      for (; R--; )
        if (t.events[R][0] === "exit" && t.events[R][1].type === "chunkFlow") {
          k = t.events[R][1].end;
          break;
        }
      x(r);
      let N = E;
      for (; N < t.events.length; )
        t.events[N][1].end = {
          ...k
        }, N++;
      return Ge(t.events, R + 1, 0, t.events.slice(E)), t.events.length = N, c(w);
    }
    return l(w);
  }
  function c(w) {
    if (r === n.length) {
      if (!o)
        return h(w);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return y(w);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Ri, u, d)(w);
  }
  function u(w) {
    return o && C(), x(r), h(w);
  }
  function d(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, y(w);
  }
  function h(w) {
    return t.containerState = {}, e.attempt(Ri, f, y)(w);
  }
  function f(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(w);
  }
  function y(w) {
    if (w === null) {
      o && C(), x(0), e.consume(w);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: i
    }), g(w);
  }
  function g(w) {
    if (w === null) {
      v(e.exit("chunkFlow"), !0), x(0), e.consume(w);
      return;
    }
    return q(w) ? (e.consume(w), v(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(w), g);
  }
  function v(w, E) {
    const R = t.sliceStream(w);
    if (E && R.push(null), w.previous = i, i && (i.next = w), i = w, o.defineSkip(w.start), o.write(R), t.parser.lazy[w.start.line]) {
      let k = o.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          o.events[k][1].start.offset < a && // …and either is not ended yet…
          (!o.events[k][1].end || // …or ends after it.
          o.events[k][1].end.offset > a)
        )
          return;
      const N = t.events.length;
      let O = N, D, z;
      for (; O--; )
        if (t.events[O][0] === "exit" && t.events[O][1].type === "chunkFlow") {
          if (D) {
            z = t.events[O][1].end;
            break;
          }
          D = !0;
        }
      for (x(r), k = N; k < t.events.length; )
        t.events[k][1].end = {
          ...z
        }, k++;
      Ge(t.events, O + 1, 0, t.events.slice(N)), t.events.length = k;
    }
  }
  function x(w) {
    let E = n.length;
    for (; E-- > w; ) {
      const R = n[E];
      t.containerState = R[1], R[0].exit.call(t, e);
    }
    n.length = w;
  }
  function C() {
    o.write([null]), i = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function np(e, t, n) {
  return pe(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Pi(e) {
  if (e === null || ke(e) || Qf(e))
    return 1;
  if (Xf(e))
    return 2;
}
function Po(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const Qr = {
  name: "attention",
  resolveAll: rp,
  tokenize: op
};
function rp(e, t) {
  let n = -1, r, o, i, a, l, s, c, u;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const d = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          Ai(d, -s), Ai(h, s), a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: d,
            end: {
              ...e[r][1].end
            }
          }, l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, i = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, o = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...l.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[n][1].start = {
            ...l.end
          }, c = [], e[r][1].end.offset - e[r][1].start.offset && (c = Me(c, [["enter", e[r][1], t], ["exit", e[r][1], t]])), c = Me(c, [["enter", o, t], ["enter", a, t], ["exit", a, t], ["enter", i, t]]), c = Me(c, Po(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = Me(c, [["exit", i, t], ["enter", l, t], ["exit", l, t], ["exit", o, t]]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, c = Me(c, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : u = 0, Ge(e, r - 1, n - r + 3, c), n = r + c.length - u - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function op(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Pi(r);
  let i;
  return a;
  function a(s) {
    return i = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === i)
      return e.consume(s), l;
    const c = e.exit("attentionSequence"), u = Pi(s), d = !u || u === 2 && o || n.includes(s), h = !o || o === 2 && u || n.includes(r);
    return c._open = !!(i === 42 ? d : d && (o || !h)), c._close = !!(i === 42 ? h : h && (u || !d)), t(s);
  }
}
function Ai(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const ip = {
  name: "autolink",
  tokenize: ap
};
function ap(e, t, n) {
  let r = 0;
  return o;
  function o(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(f) {
    return Ve(f) ? (e.consume(f), a) : f === 64 ? n(f) : c(f);
  }
  function a(f) {
    return f === 43 || f === 45 || f === 46 || Ae(f) ? (r = 1, l(f)) : c(f);
  }
  function l(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || Ae(f)) && r++ < 32 ? (e.consume(f), l) : (r = 0, c(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Yr(f) ? n(f) : (e.consume(f), s);
  }
  function c(f) {
    return f === 64 ? (e.consume(f), u) : qf(f) ? (e.consume(f), c) : n(f);
  }
  function u(f) {
    return Ae(f) ? d(f) : n(f);
  }
  function d(f) {
    return f === 46 ? (e.consume(f), r = 0, u) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f);
  }
  function h(f) {
    if ((f === 45 || Ae(f)) && r++ < 63) {
      const y = f === 45 ? h : d;
      return e.consume(f), y;
    }
    return n(f);
  }
}
const Qn = {
  partial: !0,
  tokenize: lp
};
function lp(e, t, n) {
  return r;
  function r(i) {
    return se(i) ? pe(e, o, "linePrefix")(i) : o(i);
  }
  function o(i) {
    return i === null || q(i) ? t(i) : n(i);
  }
}
const nl = {
  continuation: {
    tokenize: cp
  },
  exit: up,
  name: "blockQuote",
  tokenize: sp
};
function sp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    if (a === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), i;
    }
    return n(a);
  }
  function i(a) {
    return se(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function cp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return se(a) ? pe(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : i(a);
  }
  function i(a) {
    return e.attempt(nl, t, n)(a);
  }
}
function up(e) {
  e.exit("blockQuote");
}
const rl = {
  name: "characterEscape",
  tokenize: dp
};
function dp(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return Yf(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const ol = {
  name: "characterReference",
  tokenize: fp
};
function fp(e, t, n) {
  const r = this;
  let o = 0, i, a;
  return l;
  function l(d) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), s;
  }
  function s(d) {
    return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), i = 31, a = Ae, u(d));
  }
  function c(d) {
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, a = Kf, u) : (e.enter("characterReferenceValue"), i = 7, a = Xr, u(d));
  }
  function u(d) {
    if (d === 59 && o) {
      const h = e.exit("characterReferenceValue");
      return a === Ae && !Ro(r.sliceSerialize(h)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(d) && o++ < i ? (e.consume(d), u) : n(d);
  }
}
const Ti = {
  partial: !0,
  tokenize: hp
}, Ii = {
  concrete: !0,
  name: "codeFenced",
  tokenize: pp
};
function pp(e, t, n) {
  const r = this, o = {
    partial: !0,
    tokenize: R
  };
  let i = 0, a = 0, l;
  return s;
  function s(k) {
    return c(k);
  }
  function c(k) {
    const N = r.events[r.events.length - 1];
    return i = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, l = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(k);
  }
  function u(k) {
    return k === l ? (a++, e.consume(k), u) : a < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), se(k) ? pe(e, d, "whitespace")(k) : d(k));
  }
  function d(k) {
    return k === null || q(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(Ti, g, E)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(k));
  }
  function h(k) {
    return k === null || q(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(k)) : se(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), pe(e, f, "whitespace")(k)) : k === 96 && k === l ? n(k) : (e.consume(k), h);
  }
  function f(k) {
    return k === null || q(k) ? d(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function y(k) {
    return k === null || q(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(k)) : k === 96 && k === l ? n(k) : (e.consume(k), y);
  }
  function g(k) {
    return e.attempt(o, E, v)(k);
  }
  function v(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), x;
  }
  function x(k) {
    return i > 0 && se(k) ? pe(e, C, "linePrefix", i + 1)(k) : C(k);
  }
  function C(k) {
    return k === null || q(k) ? e.check(Ti, g, E)(k) : (e.enter("codeFlowValue"), w(k));
  }
  function w(k) {
    return k === null || q(k) ? (e.exit("codeFlowValue"), C(k)) : (e.consume(k), w);
  }
  function E(k) {
    return e.exit("codeFenced"), t(k);
  }
  function R(k, N, O) {
    let D = 0;
    return z;
    function z(H) {
      return k.enter("lineEnding"), k.consume(H), k.exit("lineEnding"), T;
    }
    function T(H) {
      return k.enter("codeFencedFence"), se(H) ? pe(k, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(H) : A(H);
    }
    function A(H) {
      return H === l ? (k.enter("codeFencedFenceSequence"), V(H)) : O(H);
    }
    function V(H) {
      return H === l ? (D++, k.consume(H), V) : D >= a ? (k.exit("codeFencedFenceSequence"), se(H) ? pe(k, M, "whitespace")(H) : M(H)) : O(H);
    }
    function M(H) {
      return H === null || q(H) ? (k.exit("codeFencedFence"), N(H)) : O(H);
    }
  }
}
function hp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i);
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const Sr = {
  name: "codeIndented",
  tokenize: gp
}, mp = {
  partial: !0,
  tokenize: yp
};
function gp(e, t, n) {
  const r = this;
  return o;
  function o(c) {
    return e.enter("codeIndented"), pe(e, i, "linePrefix", 5)(c);
  }
  function i(c) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? a(c) : n(c);
  }
  function a(c) {
    return c === null ? s(c) : q(c) ? e.attempt(mp, a, s)(c) : (e.enter("codeFlowValue"), l(c));
  }
  function l(c) {
    return c === null || q(c) ? (e.exit("codeFlowValue"), a(c)) : (e.consume(c), l);
  }
  function s(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function yp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : q(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : pe(e, i, "linePrefix", 5)(a);
  }
  function i(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : q(a) ? o(a) : n(a);
  }
}
const vp = {
  name: "codeText",
  previous: wp,
  resolve: xp,
  tokenize: bp
};
function xp(e) {
  let t = e.length - 4, n = 3, r, o;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    o === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (o = r) : (r === t || e[r][1].type === "lineEnding") && (e[o][1].type = "codeTextData", r !== o + 2 && (e[o][1].end = e[r - 1][1].end, e.splice(o + 2, r - o - 2), t -= r - o - 2, r = o + 2), o = void 0);
  return e;
}
function wp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function bp(e, t, n) {
  let r = 0, o, i;
  return a;
  function a(d) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(d);
  }
  function l(d) {
    return d === 96 ? (e.consume(d), r++, l) : (e.exit("codeTextSequence"), s(d));
  }
  function s(d) {
    return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), s) : d === 96 ? (i = e.enter("codeTextSequence"), o = 0, u(d)) : q(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), s) : (e.enter("codeTextData"), c(d));
  }
  function c(d) {
    return d === null || d === 32 || d === 96 || q(d) ? (e.exit("codeTextData"), s(d)) : (e.consume(d), c);
  }
  function u(d) {
    return d === 96 ? (e.consume(d), o++, u) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (i.type = "codeTextData", c(d));
  }
}
class Sp {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const o = n || 0;
    this.setCursor(Math.trunc(t));
    const i = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return r && Zt(this.left, r), i.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Zt(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Zt(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Zt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Zt(this.left, n.reverse());
      }
  }
}
function Zt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function il(e) {
  const t = {};
  let n = -1, r, o, i, a, l, s, c;
  const u = new Sp(e);
  for (; ++n < u.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Cp(u, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i--; )
        if (a = u.get(i), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (o && (u.get(o)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", o = i);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      o && (r[1].end = {
        ...u.get(o)[1].start
      }, l = u.slice(o, n), l.unshift(r), u.splice(o, n - o + 1, l));
    }
  }
  return Ge(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !c;
}
function Cp(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let o = t - 1;
  const i = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const l = a.events, s = [], c = {};
  let u, d, h = -1, f = n, y = 0, g = 0;
  const v = [g];
  for (; f; ) {
    for (; e.get(++o)[1] !== f; )
      ;
    i.push(o), f._tokenizer || (u = r.sliceStream(f), f.next || u.push(null), d && a.defineSkip(f.start), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(u), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next;
  }
  for (f = n; ++h < l.length; )
    // Find a void token that includes a break.
    l[h][0] === "exit" && l[h - 1][0] === "enter" && l[h][1].type === l[h - 1][1].type && l[h][1].start.line !== l[h][1].end.line && (g = h + 1, v.push(g), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (a.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : v.pop(), h = v.length; h--; ) {
    const x = l.slice(v[h], v[h + 1]), C = i.pop();
    s.push([C, C + x.length - 1]), e.splice(C, 2, x);
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    c[y + s[h][0]] = y + s[h][1], y += s[h][1] - s[h][0] - 1;
  return c;
}
const kp = {
  resolve: Np,
  tokenize: Rp
}, Ep = {
  partial: !0,
  tokenize: Pp
};
function Np(e) {
  return il(e), e;
}
function Rp(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(l);
  }
  function o(l) {
    return l === null ? i(l) : q(l) ? e.check(Ep, a, i)(l) : (e.consume(l), o);
  }
  function i(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function a(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, o;
  }
}
function Pp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), pe(e, i, "linePrefix");
  }
  function i(a) {
    if (a === null || q(a))
      return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function al(e, t, n, r, o, i, a, l, s) {
  const c = s || Number.POSITIVE_INFINITY;
  let u = 0;
  return d;
  function d(x) {
    return x === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(x), e.exit(i), h) : x === null || x === 32 || x === 41 || Yr(x) ? n(x) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), g(x));
  }
  function h(x) {
    return x === 62 ? (e.enter(i), e.consume(x), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), f(x));
  }
  function f(x) {
    return x === 62 ? (e.exit("chunkString"), e.exit(l), h(x)) : x === null || x === 60 || q(x) ? n(x) : (e.consume(x), x === 92 ? y : f);
  }
  function y(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), f) : f(x);
  }
  function g(x) {
    return !u && (x === null || x === 41 || ke(x)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(x)) : u < c && x === 40 ? (e.consume(x), u++, g) : x === 41 ? (e.consume(x), u--, g) : x === null || x === 32 || x === 40 || Yr(x) ? n(x) : (e.consume(x), x === 92 ? v : g);
  }
  function v(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), g) : g(x);
  }
}
function ll(e, t, n, r, o, i) {
  const a = this;
  let l = 0, s;
  return c;
  function c(f) {
    return e.enter(r), e.enter(o), e.consume(f), e.exit(o), e.enter(i), u;
  }
  function u(f) {
    return l > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(f) : f === 93 ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), t) : q(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("chunkString", {
      contentType: "string"
    }), d(f));
  }
  function d(f) {
    return f === null || f === 91 || f === 93 || q(f) || l++ > 999 ? (e.exit("chunkString"), u(f)) : (e.consume(f), s || (s = !se(f)), f === 92 ? h : d);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), l++, d) : d(f);
  }
}
function sl(e, t, n, r, o, i) {
  let a;
  return l;
  function l(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(o), e.consume(h), e.exit(o), a = h === 40 ? 41 : h, s) : n(h);
  }
  function s(h) {
    return h === a ? (e.enter(o), e.consume(h), e.exit(o), e.exit(r), t) : (e.enter(i), c(h));
  }
  function c(h) {
    return h === a ? (e.exit(i), s(a)) : h === null ? n(h) : q(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), pe(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), u(h));
  }
  function u(h) {
    return h === a || h === null || q(h) ? (e.exit("chunkString"), c(h)) : (e.consume(h), h === 92 ? d : u);
  }
  function d(h) {
    return h === a || h === 92 ? (e.consume(h), u) : u(h);
  }
}
function an(e, t) {
  let n;
  return r;
  function r(o) {
    return q(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : se(o) ? pe(e, r, n ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const Ap = {
  name: "definition",
  tokenize: Ip
}, Tp = {
  partial: !0,
  tokenize: Mp
};
function Ip(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(f) {
    return e.enter("definition"), a(f);
  }
  function a(f) {
    return ll.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function l(f) {
    return o = Lt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return ke(f) ? an(e, c)(f) : c(f);
  }
  function c(f) {
    return al(
      e,
      u,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function u(f) {
    return e.attempt(Tp, d, d)(f);
  }
  function d(f) {
    return se(f) ? pe(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || q(f) ? (e.exit("definition"), r.parser.defined.push(o), t(f)) : n(f);
  }
}
function Mp(e, t, n) {
  return r;
  function r(l) {
    return ke(l) ? an(e, o)(l) : n(l);
  }
  function o(l) {
    return sl(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function i(l) {
    return se(l) ? pe(e, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || q(l) ? t(l) : n(l);
  }
}
const _p = {
  name: "hardBreakEscape",
  tokenize: Dp
};
function Dp(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.consume(i), o;
  }
  function o(i) {
    return q(i) ? (e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const Op = {
  name: "headingAtx",
  resolve: Lp,
  tokenize: Fp
};
function Lp(e, t) {
  let n = e.length - 2, r = 3, o, i;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (o = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, i = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Ge(e, r, n - r + 1, [["enter", o, t], ["enter", i, t], ["exit", i, t], ["exit", o, t]])), e;
}
function Fp(e, t, n) {
  let r = 0;
  return o;
  function o(u) {
    return e.enter("atxHeading"), i(u);
  }
  function i(u) {
    return e.enter("atxHeadingSequence"), a(u);
  }
  function a(u) {
    return u === 35 && r++ < 6 ? (e.consume(u), a) : u === null || ke(u) ? (e.exit("atxHeadingSequence"), l(u)) : n(u);
  }
  function l(u) {
    return u === 35 ? (e.enter("atxHeadingSequence"), s(u)) : u === null || q(u) ? (e.exit("atxHeading"), t(u)) : se(u) ? pe(e, l, "whitespace")(u) : (e.enter("atxHeadingText"), c(u));
  }
  function s(u) {
    return u === 35 ? (e.consume(u), s) : (e.exit("atxHeadingSequence"), l(u));
  }
  function c(u) {
    return u === null || u === 35 || ke(u) ? (e.exit("atxHeadingText"), l(u)) : (e.consume(u), c);
  }
}
const zp = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Mi = ["pre", "script", "style", "textarea"], $p = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Hp,
  tokenize: jp
}, Bp = {
  partial: !0,
  tokenize: Wp
}, Vp = {
  partial: !0,
  tokenize: Up
};
function Hp(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function jp(e, t, n) {
  const r = this;
  let o, i, a, l, s;
  return c;
  function c(S) {
    return u(S);
  }
  function u(S) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(S), d;
  }
  function d(S) {
    return S === 33 ? (e.consume(S), h) : S === 47 ? (e.consume(S), i = !0, g) : S === 63 ? (e.consume(S), o = 3, r.interrupt ? t : b) : Ve(S) ? (e.consume(S), a = String.fromCharCode(S), v) : n(S);
  }
  function h(S) {
    return S === 45 ? (e.consume(S), o = 2, f) : S === 91 ? (e.consume(S), o = 5, l = 0, y) : Ve(S) ? (e.consume(S), o = 4, r.interrupt ? t : b) : n(S);
  }
  function f(S) {
    return S === 45 ? (e.consume(S), r.interrupt ? t : b) : n(S);
  }
  function y(S) {
    const ue = "CDATA[";
    return S === ue.charCodeAt(l++) ? (e.consume(S), l === ue.length ? r.interrupt ? t : A : y) : n(S);
  }
  function g(S) {
    return Ve(S) ? (e.consume(S), a = String.fromCharCode(S), v) : n(S);
  }
  function v(S) {
    if (S === null || S === 47 || S === 62 || ke(S)) {
      const ue = S === 47, me = a.toLowerCase();
      return !ue && !i && Mi.includes(me) ? (o = 1, r.interrupt ? t(S) : A(S)) : zp.includes(a.toLowerCase()) ? (o = 6, ue ? (e.consume(S), x) : r.interrupt ? t(S) : A(S)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(S) : i ? C(S) : w(S));
    }
    return S === 45 || Ae(S) ? (e.consume(S), a += String.fromCharCode(S), v) : n(S);
  }
  function x(S) {
    return S === 62 ? (e.consume(S), r.interrupt ? t : A) : n(S);
  }
  function C(S) {
    return se(S) ? (e.consume(S), C) : z(S);
  }
  function w(S) {
    return S === 47 ? (e.consume(S), z) : S === 58 || S === 95 || Ve(S) ? (e.consume(S), E) : se(S) ? (e.consume(S), w) : z(S);
  }
  function E(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Ae(S) ? (e.consume(S), E) : R(S);
  }
  function R(S) {
    return S === 61 ? (e.consume(S), k) : se(S) ? (e.consume(S), R) : w(S);
  }
  function k(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? n(S) : S === 34 || S === 39 ? (e.consume(S), s = S, N) : se(S) ? (e.consume(S), k) : O(S);
  }
  function N(S) {
    return S === s ? (e.consume(S), s = null, D) : S === null || q(S) ? n(S) : (e.consume(S), N);
  }
  function O(S) {
    return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || ke(S) ? R(S) : (e.consume(S), O);
  }
  function D(S) {
    return S === 47 || S === 62 || se(S) ? w(S) : n(S);
  }
  function z(S) {
    return S === 62 ? (e.consume(S), T) : n(S);
  }
  function T(S) {
    return S === null || q(S) ? A(S) : se(S) ? (e.consume(S), T) : n(S);
  }
  function A(S) {
    return S === 45 && o === 2 ? (e.consume(S), B) : S === 60 && o === 1 ? (e.consume(S), G) : S === 62 && o === 4 ? (e.consume(S), K) : S === 63 && o === 3 ? (e.consume(S), b) : S === 93 && o === 5 ? (e.consume(S), _) : q(S) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(Bp, W, V)(S)) : S === null || q(S) ? (e.exit("htmlFlowData"), V(S)) : (e.consume(S), A);
  }
  function V(S) {
    return e.check(Vp, M, W)(S);
  }
  function M(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), H;
  }
  function H(S) {
    return S === null || q(S) ? V(S) : (e.enter("htmlFlowData"), A(S));
  }
  function B(S) {
    return S === 45 ? (e.consume(S), b) : A(S);
  }
  function G(S) {
    return S === 47 ? (e.consume(S), a = "", $) : A(S);
  }
  function $(S) {
    if (S === 62) {
      const ue = a.toLowerCase();
      return Mi.includes(ue) ? (e.consume(S), K) : A(S);
    }
    return Ve(S) && a.length < 8 ? (e.consume(S), a += String.fromCharCode(S), $) : A(S);
  }
  function _(S) {
    return S === 93 ? (e.consume(S), b) : A(S);
  }
  function b(S) {
    return S === 62 ? (e.consume(S), K) : S === 45 && o === 2 ? (e.consume(S), b) : A(S);
  }
  function K(S) {
    return S === null || q(S) ? (e.exit("htmlFlowData"), W(S)) : (e.consume(S), K);
  }
  function W(S) {
    return e.exit("htmlFlow"), t(S);
  }
}
function Up(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return q(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : n(a);
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Wp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Qn, t, n);
  }
}
const Gp = {
  name: "htmlText",
  tokenize: qp
};
function qp(e, t, n) {
  const r = this;
  let o, i, a;
  return l;
  function l(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), s;
  }
  function s(b) {
    return b === 33 ? (e.consume(b), c) : b === 47 ? (e.consume(b), R) : b === 63 ? (e.consume(b), w) : Ve(b) ? (e.consume(b), O) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), u) : b === 91 ? (e.consume(b), i = 0, y) : Ve(b) ? (e.consume(b), C) : n(b);
  }
  function u(b) {
    return b === 45 ? (e.consume(b), f) : n(b);
  }
  function d(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), h) : q(b) ? (a = d, G(b)) : (e.consume(b), d);
  }
  function h(b) {
    return b === 45 ? (e.consume(b), f) : d(b);
  }
  function f(b) {
    return b === 62 ? B(b) : b === 45 ? h(b) : d(b);
  }
  function y(b) {
    const K = "CDATA[";
    return b === K.charCodeAt(i++) ? (e.consume(b), i === K.length ? g : y) : n(b);
  }
  function g(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), v) : q(b) ? (a = g, G(b)) : (e.consume(b), g);
  }
  function v(b) {
    return b === 93 ? (e.consume(b), x) : g(b);
  }
  function x(b) {
    return b === 62 ? B(b) : b === 93 ? (e.consume(b), x) : g(b);
  }
  function C(b) {
    return b === null || b === 62 ? B(b) : q(b) ? (a = C, G(b)) : (e.consume(b), C);
  }
  function w(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), E) : q(b) ? (a = w, G(b)) : (e.consume(b), w);
  }
  function E(b) {
    return b === 62 ? B(b) : w(b);
  }
  function R(b) {
    return Ve(b) ? (e.consume(b), k) : n(b);
  }
  function k(b) {
    return b === 45 || Ae(b) ? (e.consume(b), k) : N(b);
  }
  function N(b) {
    return q(b) ? (a = N, G(b)) : se(b) ? (e.consume(b), N) : B(b);
  }
  function O(b) {
    return b === 45 || Ae(b) ? (e.consume(b), O) : b === 47 || b === 62 || ke(b) ? D(b) : n(b);
  }
  function D(b) {
    return b === 47 ? (e.consume(b), B) : b === 58 || b === 95 || Ve(b) ? (e.consume(b), z) : q(b) ? (a = D, G(b)) : se(b) ? (e.consume(b), D) : B(b);
  }
  function z(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Ae(b) ? (e.consume(b), z) : T(b);
  }
  function T(b) {
    return b === 61 ? (e.consume(b), A) : q(b) ? (a = T, G(b)) : se(b) ? (e.consume(b), T) : D(b);
  }
  function A(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), o = b, V) : q(b) ? (a = A, G(b)) : se(b) ? (e.consume(b), A) : (e.consume(b), M);
  }
  function V(b) {
    return b === o ? (e.consume(b), o = void 0, H) : b === null ? n(b) : q(b) ? (a = V, G(b)) : (e.consume(b), V);
  }
  function M(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || ke(b) ? D(b) : (e.consume(b), M);
  }
  function H(b) {
    return b === 47 || b === 62 || ke(b) ? D(b) : n(b);
  }
  function B(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function G(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), $;
  }
  function $(b) {
    return se(b) ? pe(e, _, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : _(b);
  }
  function _(b) {
    return e.enter("htmlTextData"), a(b);
  }
}
const Ao = {
  name: "labelEnd",
  resolveAll: Qp,
  resolveTo: Zp,
  tokenize: Jp
}, Kp = {
  tokenize: eh
}, Yp = {
  tokenize: th
}, Xp = {
  tokenize: nh
};
function Qp(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const o = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += o;
    }
  }
  return e.length !== n.length && Ge(e, 0, e.length, n), e;
}
function Zp(e, t) {
  let n = e.length, r = 0, o, i, a, l;
  for (; n--; )
    if (o = e[n][1], i) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[n][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (i = n, o.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else o.type === "labelEnd" && (a = n);
  const s = {
    type: e[i][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, c = {
    type: "label",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[a][1].end
    }
  }, u = {
    type: "labelText",
    start: {
      ...e[i + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return l = [["enter", s, t], ["enter", c, t]], l = Me(l, e.slice(i + 1, i + r + 3)), l = Me(l, [["enter", u, t]]), l = Me(l, Po(t.parser.constructs.insideSpan.null, e.slice(i + r + 4, a - 3), t)), l = Me(l, [["exit", u, t], e[a - 2], e[a - 1], ["exit", c, t]]), l = Me(l, e.slice(a + 1)), l = Me(l, [["exit", s, t]]), Ge(e, i, e.length, l), e;
}
function Jp(e, t, n) {
  const r = this;
  let o = r.events.length, i, a;
  for (; o--; )
    if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1]._balanced) {
      i = r.events[o][1];
      break;
    }
  return l;
  function l(h) {
    return i ? i._inactive ? d(h) : (a = r.parser.defined.includes(Lt(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(h);
  }
  function s(h) {
    return h === 40 ? e.attempt(Kp, u, a ? u : d)(h) : h === 91 ? e.attempt(Yp, u, a ? c : d)(h) : a ? u(h) : d(h);
  }
  function c(h) {
    return e.attempt(Xp, u, d)(h);
  }
  function u(h) {
    return t(h);
  }
  function d(h) {
    return i._balanced = !0, n(h);
  }
}
function eh(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), o;
  }
  function o(d) {
    return ke(d) ? an(e, i)(d) : i(d);
  }
  function i(d) {
    return d === 41 ? u(d) : al(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function a(d) {
    return ke(d) ? an(e, s)(d) : u(d);
  }
  function l(d) {
    return n(d);
  }
  function s(d) {
    return d === 34 || d === 39 || d === 40 ? sl(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : u(d);
  }
  function c(d) {
    return ke(d) ? an(e, u)(d) : u(d);
  }
  function u(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function th(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return ll.call(r, e, i, a, "reference", "referenceMarker", "referenceString")(l);
  }
  function i(l) {
    return r.parser.defined.includes(Lt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function nh(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const rh = {
  name: "labelStartImage",
  resolveAll: Ao.resolveAll,
  tokenize: oh
};
function oh(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), i;
  }
  function i(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), a) : n(l);
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const ih = {
  name: "labelStartLink",
  resolveAll: Ao.resolveAll,
  tokenize: ah
};
function ah(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Cr = {
  name: "lineEnding",
  tokenize: lh
};
function lh(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), pe(e, t, "linePrefix");
  }
}
const An = {
  name: "thematicBreak",
  tokenize: sh
};
function sh(e, t, n) {
  let r = 0, o;
  return i;
  function i(c) {
    return e.enter("thematicBreak"), a(c);
  }
  function a(c) {
    return o = c, l(c);
  }
  function l(c) {
    return c === o ? (e.enter("thematicBreakSequence"), s(c)) : r >= 3 && (c === null || q(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function s(c) {
    return c === o ? (e.consume(c), r++, s) : (e.exit("thematicBreakSequence"), se(c) ? pe(e, l, "whitespace")(c) : l(c));
  }
}
const Se = {
  continuation: {
    tokenize: fh
  },
  exit: hh,
  name: "list",
  tokenize: dh
}, ch = {
  partial: !0,
  tokenize: mh
}, uh = {
  partial: !0,
  tokenize: ph
};
function dh(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, a = 0;
  return l;
  function l(f) {
    const y = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Xr(f)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(An, n, c)(f) : c(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return Xr(f) && ++a < 10 ? (e.consume(f), s) : (!r.interrupt || a < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), c(f)) : n(f);
  }
  function c(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      Qn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : u,
      e.attempt(ch, h, d)
    );
  }
  function u(f) {
    return r.containerState.initialBlankLine = !0, i++, h(f);
  }
  function d(f) {
    return se(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), h) : n(f);
  }
  function h(f) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function fh(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Qn, o, i);
  function o(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, pe(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function i(l) {
    return r.containerState.furtherBlankLines || !se(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(uh, t, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, pe(e, e.attempt(Se, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function ph(e, t, n) {
  const r = this;
  return pe(e, o, "listItemIndent", r.containerState.size + 1);
  function o(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(i) : n(i);
  }
}
function hh(e) {
  e.exit(this.containerState.type);
}
function mh(e, t, n) {
  const r = this;
  return pe(e, o, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(i) {
    const a = r.events[r.events.length - 1];
    return !se(i) && a && a[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const _i = {
  name: "setextUnderline",
  resolveTo: gh,
  tokenize: yh
};
function gh(e, t) {
  let n = e.length, r, o, i;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (o = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !i && e[n][1].type === "definition" && (i = n);
  const a = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[o][1].type = "setextHeadingText", i ? (e.splice(o, 0, ["enter", a, t]), e.splice(i + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[i][1].end
  }) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function yh(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(c) {
    let u = r.events.length, d;
    for (; u--; )
      if (r.events[u][1].type !== "lineEnding" && r.events[u][1].type !== "linePrefix" && r.events[u][1].type !== "content") {
        d = r.events[u][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || d) ? (e.enter("setextHeadingLine"), o = c, a(c)) : n(c);
  }
  function a(c) {
    return e.enter("setextHeadingLineSequence"), l(c);
  }
  function l(c) {
    return c === o ? (e.consume(c), l) : (e.exit("setextHeadingLineSequence"), se(c) ? pe(e, s, "lineSuffix")(c) : s(c));
  }
  function s(c) {
    return c === null || q(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const vh = {
  tokenize: xh
};
function xh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Qn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, pe(e, e.attempt(this.parser.constructs.flow, o, e.attempt(kp, o)), "linePrefix"))
  );
  return n;
  function r(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function o(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const wh = {
  resolveAll: ul()
}, bh = cl("string"), Sh = cl("text");
function cl(e) {
  return {
    resolveAll: ul(e === "text" ? Ch : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, o = this.parser.constructs[e], i = n.attempt(o, a, l);
    return a;
    function a(u) {
      return c(u) ? i(u) : l(u);
    }
    function l(u) {
      if (u === null) {
        n.consume(u);
        return;
      }
      return n.enter("data"), n.consume(u), s;
    }
    function s(u) {
      return c(u) ? (n.exit("data"), i(u)) : (n.consume(u), s);
    }
    function c(u) {
      if (u === null)
        return !0;
      const d = o[u];
      let h = -1;
      if (d)
        for (; ++h < d.length; ) {
          const f = d[h];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ul(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function Ch(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], o = t.sliceStream(r);
      let i = o.length, a = -1, l = 0, s;
      for (; i--; ) {
        const c = o[i];
        if (typeof c == "string") {
          for (a = c.length; c.charCodeAt(a - 1) === 32; )
            l++, a--;
          if (a) break;
          a = -1;
        } else if (c === -2)
          s = !0, l++;
        else if (c !== -1) {
          i++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (l = 0), l) {
        const c = {
          type: n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: i ? a : r.start._bufferIndex + a,
            _index: r.start._index + i,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...c.start
        }, r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), n += 2);
      }
      n++;
    }
  return e;
}
const kh = {
  42: Se,
  43: Se,
  45: Se,
  48: Se,
  49: Se,
  50: Se,
  51: Se,
  52: Se,
  53: Se,
  54: Se,
  55: Se,
  56: Se,
  57: Se,
  62: nl
}, Eh = {
  91: Ap
}, Nh = {
  [-2]: Sr,
  [-1]: Sr,
  32: Sr
}, Rh = {
  35: Op,
  42: An,
  45: [_i, An],
  60: $p,
  61: _i,
  95: An,
  96: Ii,
  126: Ii
}, Ph = {
  38: ol,
  92: rl
}, Ah = {
  [-5]: Cr,
  [-4]: Cr,
  [-3]: Cr,
  33: rh,
  38: ol,
  42: Qr,
  60: [ip, Gp],
  91: ih,
  92: [_p, rl],
  93: Ao,
  95: Qr,
  96: vp
}, Th = {
  null: [Qr, wh]
}, Ih = {
  null: [42, 95]
}, Mh = {
  null: []
}, _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Ih,
  contentInitial: Eh,
  disable: Mh,
  document: kh,
  flow: Rh,
  flowInitial: Nh,
  insideSpan: Th,
  string: Ph,
  text: Ah
}, Symbol.toStringTag, { value: "Module" }));
function Dh(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const o = {}, i = [];
  let a = [], l = [];
  const s = {
    attempt: N(R),
    check: N(k),
    consume: C,
    enter: w,
    exit: E,
    interrupt: N(k, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: g,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: f,
    write: d
  };
  let u = t.tokenize.call(c, s);
  return t.resolveAll && i.push(t), c;
  function d(T) {
    return a = Me(a, T), v(), a[a.length - 1] !== null ? [] : (O(t, 0), c.events = Po(i, c.events, c), c.events);
  }
  function h(T, A) {
    return Lh(f(T), A);
  }
  function f(T) {
    return Oh(a, T);
  }
  function y() {
    const {
      _bufferIndex: T,
      _index: A,
      line: V,
      column: M,
      offset: H
    } = r;
    return {
      _bufferIndex: T,
      _index: A,
      line: V,
      column: M,
      offset: H
    };
  }
  function g(T) {
    o[T.line] = T.column, z();
  }
  function v() {
    let T;
    for (; r._index < a.length; ) {
      const A = a[r._index];
      if (typeof A == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < A.length; )
          x(A.charCodeAt(r._bufferIndex));
      else
        x(A);
    }
  }
  function x(T) {
    u = u(T);
  }
  function C(T) {
    q(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, z()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = T;
  }
  function w(T, A) {
    const V = A || {};
    return V.type = T, V.start = y(), c.events.push(["enter", V, c]), l.push(V), V;
  }
  function E(T) {
    const A = l.pop();
    return A.end = y(), c.events.push(["exit", A, c]), A;
  }
  function R(T, A) {
    O(T, A.from);
  }
  function k(T, A) {
    A.restore();
  }
  function N(T, A) {
    return V;
    function V(M, H, B) {
      let G, $, _, b;
      return Array.isArray(M) ? (
        /* c8 ignore next 1 */
        W(M)
      ) : "tokenize" in M ? (
        // Looks like a construct.
        W([
          /** @type {Construct} */
          M
        ])
      ) : K(M);
      function K(ee) {
        return U;
        function U(X) {
          const re = X !== null && ee[X], J = X !== null && ee.null, oe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(J) ? J : J ? [J] : []
          ];
          return W(oe)(X);
        }
      }
      function W(ee) {
        return G = ee, $ = 0, ee.length === 0 ? B : S(ee[$]);
      }
      function S(ee) {
        return U;
        function U(X) {
          return b = D(), _ = ee, ee.partial || (c.currentConstruct = ee), ee.name && c.parser.constructs.disable.null.includes(ee.name) ? me() : ee.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            A ? Object.assign(Object.create(c), A) : c,
            s,
            ue,
            me
          )(X);
        }
      }
      function ue(ee) {
        return T(_, b), H;
      }
      function me(ee) {
        return b.restore(), ++$ < G.length ? S(G[$]) : B;
      }
    }
  }
  function O(T, A) {
    T.resolveAll && !i.includes(T) && i.push(T), T.resolve && Ge(c.events, A, c.events.length - A, T.resolve(c.events.slice(A), c)), T.resolveTo && (c.events = T.resolveTo(c.events, c));
  }
  function D() {
    const T = y(), A = c.previous, V = c.currentConstruct, M = c.events.length, H = Array.from(l);
    return {
      from: M,
      restore: B
    };
    function B() {
      r = T, c.previous = A, c.currentConstruct = V, c.events.length = M, l = H, z();
    }
  }
  function z() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function Oh(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let a;
  if (n === o)
    a = [e[n].slice(r, i)];
  else {
    if (a = e.slice(n, o), r > -1) {
      const l = a[0];
      typeof l == "string" ? a[0] = l.slice(r) : a.shift();
    }
    i > 0 && a.push(e[o].slice(0, i));
  }
  return a;
}
function Lh(e, t) {
  let n = -1;
  const r = [];
  let o;
  for (; ++n < e.length; ) {
    const i = e[n];
    let a;
    if (typeof i == "string")
      a = i;
    else switch (i) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && o) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(i);
    }
    o = i === -2, r.push(a);
  }
  return r.join("");
}
function Fh(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Uf([_h, ...(e || {}).extensions || []])
    ),
    content: o(Zf),
    defined: [],
    document: o(ep),
    flow: o(vh),
    lazy: {},
    string: o(bh),
    text: o(Sh)
  };
  return r;
  function o(i) {
    return a;
    function a(l) {
      return Dh(r, i, l);
    }
  }
}
function zh(e) {
  for (; !il(e); )
    ;
  return e;
}
const Di = /[\0\t\n\r]/g;
function $h() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, a, l) {
    const s = [];
    let c, u, d, h, f;
    for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), d = 0, t = "", n && (i.charCodeAt(0) === 65279 && d++, n = void 0); d < i.length; ) {
      if (Di.lastIndex = d, c = Di.exec(i), h = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(h), !c) {
        t = i.slice(d);
        break;
      }
      if (f === 10 && d === h && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), d < h && (s.push(i.slice(d, h)), e += h - d), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (u = Math.ceil(e / 4) * 4, s.push(-2); e++ < u; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      d = h + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Bh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Vh(e) {
  return e.replace(Bh, Hh);
}
function Hh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return tl(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return Ro(n) || e;
}
const dl = {}.hasOwnProperty;
function jh(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Uh(n)(zh(Fh(n).document().write($h()(e, t, !0))));
}
function Uh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: i(yt),
      autolinkProtocol: D,
      autolinkEmail: D,
      atxHeading: i(it),
      blockQuote: i(J),
      characterEscape: D,
      characterReference: D,
      codeFenced: i(oe),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: i(oe, a),
      codeText: i(ce, a),
      codeTextData: D,
      data: D,
      codeFlowValue: D,
      definition: i(we),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: i(Ie),
      hardBreakEscape: i(at),
      hardBreakTrailing: i(at),
      htmlFlow: i(lt, a),
      htmlFlowData: D,
      htmlText: i(lt, a),
      htmlTextData: D,
      image: i(xr),
      label: a,
      link: i(yt),
      listItem: i(wd),
      listItemValue: h,
      listOrdered: i(fi, d),
      listUnordered: i(fi),
      paragraph: i(bd),
      reference: S,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: i(it),
      strong: i(Sd),
      thematicBreak: i(kd)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: R,
      autolink: s(),
      autolinkEmail: re,
      autolinkProtocol: X,
      blockQuote: s(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: me,
      characterReferenceMarkerNumeric: me,
      characterReferenceValue: ee,
      characterReference: U,
      codeFenced: s(v),
      codeFencedFence: g,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: y,
      codeFlowValue: z,
      codeIndented: s(x),
      codeText: s(H),
      codeTextData: z,
      data: z,
      definition: s(),
      definitionDestinationString: E,
      definitionLabelString: C,
      definitionTitleString: w,
      emphasis: s(),
      hardBreakEscape: s(A),
      hardBreakTrailing: s(A),
      htmlFlow: s(V),
      htmlFlowData: z,
      htmlText: s(M),
      htmlTextData: z,
      image: s(G),
      label: _,
      labelText: $,
      lineEnding: T,
      link: s(B),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ue,
      resourceDestinationString: b,
      resourceTitleString: K,
      resource: W,
      setextHeading: s(O),
      setextHeadingLineSequence: N,
      setextHeadingText: k,
      strong: s(),
      thematicBreak: s()
    }
  };
  fl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(P) {
    let L = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [L],
      tokenStack: [],
      config: t,
      enter: l,
      exit: c,
      buffer: a,
      resume: u,
      data: n
    }, ie = [];
    let de = -1;
    for (; ++de < P.length; )
      if (P[de][1].type === "listOrdered" || P[de][1].type === "listUnordered")
        if (P[de][0] === "enter")
          ie.push(de);
        else {
          const Oe = ie.pop();
          de = o(P, Oe, de);
        }
    for (de = -1; ++de < P.length; ) {
      const Oe = t[P[de][0]];
      dl.call(Oe, P[de][1].type) && Oe[P[de][1].type].call(Object.assign({
        sliceSerialize: P[de][2].sliceSerialize
      }, Y), P[de][1]);
    }
    if (Y.tokenStack.length > 0) {
      const Oe = Y.tokenStack[Y.tokenStack.length - 1];
      (Oe[1] || Oi).call(Y, void 0, Oe[0]);
    }
    for (L.position = {
      start: st(P.length > 0 ? P[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: st(P.length > 0 ? P[P.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, de = -1; ++de < t.transforms.length; )
      L = t.transforms[de](L) || L;
    return L;
  }
  function o(P, L, Y) {
    let ie = L - 1, de = -1, Oe = !1, vt, Qe, Xt, Qt;
    for (; ++ie <= Y; ) {
      const Ne = P[ie];
      switch (Ne[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ne[0] === "enter" ? de++ : de--, Qt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ne[0] === "enter" && (vt && !Qt && !de && !Xt && (Xt = ie), Qt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Qt = void 0;
      }
      if (!de && Ne[0] === "enter" && Ne[1].type === "listItemPrefix" || de === -1 && Ne[0] === "exit" && (Ne[1].type === "listUnordered" || Ne[1].type === "listOrdered")) {
        if (vt) {
          let Tt = ie;
          for (Qe = void 0; Tt--; ) {
            const Ze = P[Tt];
            if (Ze[1].type === "lineEnding" || Ze[1].type === "lineEndingBlank") {
              if (Ze[0] === "exit") continue;
              Qe && (P[Qe][1].type = "lineEndingBlank", Oe = !0), Ze[1].type = "lineEnding", Qe = Tt;
            } else if (!(Ze[1].type === "linePrefix" || Ze[1].type === "blockQuotePrefix" || Ze[1].type === "blockQuotePrefixWhitespace" || Ze[1].type === "blockQuoteMarker" || Ze[1].type === "listItemIndent")) break;
          }
          Xt && (!Qe || Xt < Qe) && (vt._spread = !0), vt.end = Object.assign({}, Qe ? P[Qe][1].start : Ne[1].end), P.splice(Qe || ie, 0, ["exit", vt, Ne[2]]), ie++, Y++;
        }
        if (Ne[1].type === "listItemPrefix") {
          const Tt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ne[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          vt = Tt, P.splice(ie, 0, ["enter", Tt, Ne[2]]), ie++, Y++, Xt = void 0, Qt = !0;
        }
      }
    }
    return P[L][1]._spread = Oe, Y;
  }
  function i(P, L) {
    return Y;
    function Y(ie) {
      l.call(this, P(ie), ie), L && L.call(this, ie);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(P, L, Y) {
    this.stack[this.stack.length - 1].children.push(P), this.stack.push(P), this.tokenStack.push([L, Y || void 0]), P.position = {
      start: st(L.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(P) {
    return L;
    function L(Y) {
      P && P.call(this, Y), c.call(this, Y);
    }
  }
  function c(P, L) {
    const Y = this.stack.pop(), ie = this.tokenStack.pop();
    if (ie)
      ie[0].type !== P.type && (L ? L.call(this, P, ie[0]) : (ie[1] || Oi).call(this, P, ie[0]));
    else throw new Error("Cannot close `" + P.type + "` (" + on({
      start: P.start,
      end: P.end
    }) + "): it’s not open");
    Y.position.end = st(P.end);
  }
  function u() {
    return Hf(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(P) {
    if (this.data.expectingFirstListItemValue) {
      const L = this.stack[this.stack.length - 2];
      L.start = Number.parseInt(this.sliceSerialize(P), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.lang = P;
  }
  function y() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.meta = P;
  }
  function g() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function v() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function x() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = P.replace(/(\r?\n|\r)$/g, "");
  }
  function C(P) {
    const L = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = L, Y.identifier = Lt(this.sliceSerialize(P)).toLowerCase();
  }
  function w() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.title = P;
  }
  function E() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.url = P;
  }
  function R(P) {
    const L = this.stack[this.stack.length - 1];
    if (!L.depth) {
      const Y = this.sliceSerialize(P).length;
      L.depth = Y;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function N(P) {
    const L = this.stack[this.stack.length - 1];
    L.depth = this.sliceSerialize(P).codePointAt(0) === 61 ? 1 : 2;
  }
  function O() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function D(P) {
    const Y = this.stack[this.stack.length - 1].children;
    let ie = Y[Y.length - 1];
    (!ie || ie.type !== "text") && (ie = Cd(), ie.position = {
      start: st(P.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Y.push(ie)), this.stack.push(ie);
  }
  function z(P) {
    const L = this.stack.pop();
    L.value += this.sliceSerialize(P), L.position.end = st(P.end);
  }
  function T(P) {
    const L = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Y = L.children[L.children.length - 1];
      Y.position.end = st(P.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(L.type) && (D.call(this, P), z.call(this, P));
  }
  function A() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = P;
  }
  function M() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = P;
  }
  function H() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = P;
  }
  function B() {
    const P = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const L = this.data.referenceType || "shortcut";
      P.type += "Reference", P.referenceType = L, delete P.url, delete P.title;
    } else
      delete P.identifier, delete P.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const P = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const L = this.data.referenceType || "shortcut";
      P.type += "Reference", P.referenceType = L, delete P.url, delete P.title;
    } else
      delete P.identifier, delete P.label;
    this.data.referenceType = void 0;
  }
  function $(P) {
    const L = this.sliceSerialize(P), Y = this.stack[this.stack.length - 2];
    Y.label = Vh(L), Y.identifier = Lt(L).toLowerCase();
  }
  function _() {
    const P = this.stack[this.stack.length - 1], L = this.resume(), Y = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Y.type === "link") {
      const ie = P.children;
      Y.children = ie;
    } else
      Y.alt = L;
  }
  function b() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.url = P;
  }
  function K() {
    const P = this.resume(), L = this.stack[this.stack.length - 1];
    L.title = P;
  }
  function W() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = "collapsed";
  }
  function ue(P) {
    const L = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = L, Y.identifier = Lt(this.sliceSerialize(P)).toLowerCase(), this.data.referenceType = "full";
  }
  function me(P) {
    this.data.characterReferenceType = P.type;
  }
  function ee(P) {
    const L = this.sliceSerialize(P), Y = this.data.characterReferenceType;
    let ie;
    Y ? (ie = tl(L, Y === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ie = Ro(L);
    const de = this.stack[this.stack.length - 1];
    de.value += ie;
  }
  function U(P) {
    const L = this.stack.pop();
    L.position.end = st(P.end);
  }
  function X(P) {
    z.call(this, P);
    const L = this.stack[this.stack.length - 1];
    L.url = this.sliceSerialize(P);
  }
  function re(P) {
    z.call(this, P);
    const L = this.stack[this.stack.length - 1];
    L.url = "mailto:" + this.sliceSerialize(P);
  }
  function J() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function oe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ce() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function we() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ie() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function it() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function at() {
    return {
      type: "break"
    };
  }
  function lt() {
    return {
      type: "html",
      value: ""
    };
  }
  function xr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function yt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function fi(P) {
    return {
      type: "list",
      ordered: P.type === "listOrdered",
      start: null,
      spread: P._spread,
      children: []
    };
  }
  function wd(P) {
    return {
      type: "listItem",
      spread: P._spread,
      checked: null,
      children: []
    };
  }
  function bd() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Sd() {
    return {
      type: "strong",
      children: []
    };
  }
  function Cd() {
    return {
      type: "text",
      value: ""
    };
  }
  function kd() {
    return {
      type: "thematicBreak"
    };
  }
}
function st(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function fl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? fl(e, r) : Wh(e, r);
  }
}
function Wh(e, t) {
  let n;
  for (n in t)
    if (dl.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Oi(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + on({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + on({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + on({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Gh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return jh(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function qh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Kh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Yh(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, o = t.lang ? t.lang.split(/\s+/) : [];
  o.length > 0 && (r.className = ["language-" + o[0]]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function Xh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Qh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Zh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), o = Ut(r.toLowerCase()), i = e.footnoteOrder.indexOf(r);
  let a, l = e.footnoteCounts.get(r);
  l === void 0 ? (l = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = i + 1, l += 1, e.footnoteCounts.set(r, l);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + o,
      id: n + "fnref-" + o + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(a) }]
  };
  e.patch(t, s);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Jh(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function em(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function pl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const a = o[o.length - 1];
  return a && a.type === "text" ? a.value += r : o.push({ type: "text", value: r }), o;
}
function tm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return pl(e, t);
  const o = { src: Ut(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const i = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function nm(e, t) {
  const n = { src: Ut(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function rm(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function om(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return pl(e, t);
  const o = { href: Ut(r.url || "") };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function im(e, t) {
  const n = { href: Ut(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function am(e, t, n) {
  const r = e.all(t), o = n ? lm(n) : hl(t), i = {}, a = [];
  if (typeof t.checked == "boolean") {
    const u = r[0];
    let d;
    u && u.type === "element" && u.tagName === "p" ? d = u : (d = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(d)), d.children.length > 0 && d.children.unshift({ type: "text", value: " " }), d.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), i.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const u = r[l];
    (o || l !== 0 || u.type !== "element" || u.tagName !== "p") && a.push({ type: "text", value: `
` }), u.type === "element" && u.tagName === "p" && !o ? a.push(...u.children) : a.push(u);
  }
  const s = r[r.length - 1];
  s && (o || s.type !== "element" || s.tagName !== "p") && a.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: i, children: a };
  return e.patch(t, c), e.applyData(t, c);
}
function lm(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = hl(n[r]);
  }
  return t;
}
function hl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function sm(e, t) {
  const n = {}, r = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < r.length; ) {
    const a = r[o];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const i = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function cm(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function um(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function dm(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function fm(e, t) {
  const n = e.all(t), r = n.shift(), o = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), o.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, l = Co(t.children[1]), s = Ka(t.children[t.children.length - 1]);
    l && s && (a.position = { start: l, end: s }), o.push(a);
  }
  const i = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function pm(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, l = a ? a.length : t.children.length;
  let s = -1;
  const c = [];
  for (; ++s < l; ) {
    const d = t.children[s], h = {}, f = a ? a[s] : void 0;
    f && (h.align = f);
    let y = { type: "element", tagName: i, properties: h, children: [] };
    d && (y.children = e.all(d), e.patch(d, y), y = e.applyData(d, y)), c.push(y);
  }
  const u = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function hm(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Li = 9, Fi = 32;
function mm(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      zi(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(zi(t.slice(o), o > 0, !1)), i.join("");
}
function zi(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === Li || i === Fi; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === Li || i === Fi; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function gm(e, t) {
  const n = { type: "text", value: mm(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function ym(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const vm = {
  blockquote: qh,
  break: Kh,
  code: Yh,
  delete: Xh,
  emphasis: Qh,
  footnoteReference: Zh,
  heading: Jh,
  html: em,
  imageReference: tm,
  image: nm,
  inlineCode: rm,
  linkReference: om,
  link: im,
  listItem: am,
  list: sm,
  paragraph: cm,
  // @ts-expect-error: root is different, but hard to type.
  root: um,
  strong: dm,
  table: fm,
  tableCell: hm,
  tableRow: pm,
  text: gm,
  thematicBreak: ym,
  toml: wn,
  yaml: wn,
  definition: wn,
  footnoteDefinition: wn
};
function wn() {
}
const ml = -1, Zn = 0, ln = 1, zn = 2, To = 3, Io = 4, Mo = 5, _o = 6, gl = 7, yl = 8, $i = typeof self == "object" ? self : globalThis, xm = (e, t) => {
  const n = (o, i) => (e.set(i, o), o), r = (o) => {
    if (e.has(o))
      return e.get(o);
    const [i, a] = t[o];
    switch (i) {
      case Zn:
      case ml:
        return n(a, o);
      case ln: {
        const l = n([], o);
        for (const s of a)
          l.push(r(s));
        return l;
      }
      case zn: {
        const l = n({}, o);
        for (const [s, c] of a)
          l[r(s)] = r(c);
        return l;
      }
      case To:
        return n(new Date(a), o);
      case Io: {
        const { source: l, flags: s } = a;
        return n(new RegExp(l, s), o);
      }
      case Mo: {
        const l = n(/* @__PURE__ */ new Map(), o);
        for (const [s, c] of a)
          l.set(r(s), r(c));
        return l;
      }
      case _o: {
        const l = n(/* @__PURE__ */ new Set(), o);
        for (const s of a)
          l.add(r(s));
        return l;
      }
      case gl: {
        const { name: l, message: s } = a;
        return n(new $i[l](s), o);
      }
      case yl:
        return n(BigInt(a), o);
      case "BigInt":
        return n(Object(BigInt(a)), o);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: l } = new Uint8Array(a);
        return n(new DataView(l), a);
      }
    }
    return n(new $i[i](a), o);
  };
  return r;
}, Bi = (e) => xm(/* @__PURE__ */ new Map(), e)(0), It = "", { toString: wm } = {}, { keys: bm } = Object, Jt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Zn, t];
  const n = wm.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [ln, It];
    case "Object":
      return [zn, It];
    case "Date":
      return [To, It];
    case "RegExp":
      return [Io, It];
    case "Map":
      return [Mo, It];
    case "Set":
      return [_o, It];
    case "DataView":
      return [ln, n];
  }
  return n.includes("Array") ? [ln, n] : n.includes("Error") ? [gl, n] : [zn, n];
}, bn = ([e, t]) => e === Zn && (t === "function" || t === "symbol"), Sm = (e, t, n, r) => {
  const o = (a, l) => {
    const s = r.push(a) - 1;
    return n.set(l, s), s;
  }, i = (a) => {
    if (n.has(a))
      return n.get(a);
    let [l, s] = Jt(a);
    switch (l) {
      case Zn: {
        let u = a;
        switch (s) {
          case "bigint":
            l = yl, u = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            u = null;
            break;
          case "undefined":
            return o([ml], a);
        }
        return o([l, u], a);
      }
      case ln: {
        if (s) {
          let h = a;
          return s === "DataView" ? h = new Uint8Array(a.buffer) : s === "ArrayBuffer" && (h = new Uint8Array(a)), o([s, [...h]], a);
        }
        const u = [], d = o([l, u], a);
        for (const h of a)
          u.push(i(h));
        return d;
      }
      case zn: {
        if (s)
          switch (s) {
            case "BigInt":
              return o([s, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return o([s, a.valueOf()], a);
          }
        if (t && "toJSON" in a)
          return i(a.toJSON());
        const u = [], d = o([l, u], a);
        for (const h of bm(a))
          (e || !bn(Jt(a[h]))) && u.push([i(h), i(a[h])]);
        return d;
      }
      case To:
        return o([l, a.toISOString()], a);
      case Io: {
        const { source: u, flags: d } = a;
        return o([l, { source: u, flags: d }], a);
      }
      case Mo: {
        const u = [], d = o([l, u], a);
        for (const [h, f] of a)
          (e || !(bn(Jt(h)) || bn(Jt(f)))) && u.push([i(h), i(f)]);
        return d;
      }
      case _o: {
        const u = [], d = o([l, u], a);
        for (const h of a)
          (e || !bn(Jt(h))) && u.push(i(h));
        return d;
      }
    }
    const { message: c } = a;
    return o([l, { name: s, message: c }], a);
  };
  return i;
}, Vi = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Sm(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, $n = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Bi(Vi(e, t)) : structuredClone(e)
) : (e, t) => Bi(Vi(e, t));
function Cm(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function km(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Em(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Cm, r = e.options.footnoteBackLabel || km, o = e.options.footnoteLabel || "Footnotes", i = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!c)
      continue;
    const u = e.all(c), d = String(c.identifier).toUpperCase(), h = Ut(d.toLowerCase());
    let f = 0;
    const y = [], g = e.footnoteCounts.get(d);
    for (; g !== void 0 && ++f <= g; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let C = typeof n == "string" ? n : n(s, f);
      typeof C == "string" && (C = { type: "text", value: C }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(C) ? C : [C]
      });
    }
    const v = u[u.length - 1];
    if (v && v.type === "element" && v.tagName === "p") {
      const C = v.children[v.children.length - 1];
      C && C.type === "text" ? C.value += " " : v.children.push({ type: "text", value: " " }), v.children.push(...y);
    } else
      u.push(...y);
    const x = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(u, !0)
    };
    e.patch(c, x), l.push(x);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: i,
          properties: {
            ...$n(a),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const vl = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Am;
    if (typeof e == "function")
      return Jn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Nm(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Rm(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Pm(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Nm(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = vl(e[n]);
  return Jn(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].apply(this, o)) return !0;
    return !1;
  }
}
function Rm(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Jn(n);
  function n(r) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let i;
    for (i in e)
      if (o[i] !== t[i]) return !1;
    return !0;
  }
}
function Pm(e) {
  return Jn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Jn(e) {
  return t;
  function t(n, r, o) {
    return !!(Tm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      o || void 0
    ));
  }
}
function Am() {
  return !0;
}
function Tm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const xl = [], Im = !0, Hi = !1, Mm = "skip";
function _m(e, t, n, r) {
  let o;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : o = t;
  const i = vl(o), a = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, c, u) {
    const d = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof d.type == "string") {
      const f = (
        // `hast`
        typeof d.tagName == "string" ? d.tagName : (
          // `xast`
          typeof d.name == "string" ? d.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let f = xl, y, g, v;
      if ((!t || i(s, c, u[u.length - 1] || void 0)) && (f = Dm(n(s, u)), f[0] === Hi))
        return f;
      if ("children" in s && s.children) {
        const x = (
          /** @type {UnistParent} */
          s
        );
        if (x.children && f[0] !== Mm)
          for (g = (r ? x.children.length : -1) + a, v = u.concat(x); g > -1 && g < x.children.length; ) {
            const C = x.children[g];
            if (y = l(C, g, v)(), y[0] === Hi)
              return y;
            g = typeof y[1] == "number" ? y[1] : g + a;
          }
      }
      return f;
    }
  }
}
function Dm(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Im, e] : e == null ? xl : [e];
}
function wl(e, t, n, r) {
  let o, i, a;
  typeof t == "function" && typeof n != "function" ? (i = void 0, a = t, o = n) : (i = t, a = n, o = r), _m(e, i, l, o);
  function l(s, c) {
    const u = c[c.length - 1], d = u ? u.children.indexOf(s) : void 0;
    return a(s, d, u);
  }
}
const Zr = {}.hasOwnProperty, Om = {};
function Lm(e, t) {
  const n = t || Om, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = { ...vm, ...n.handlers }, l = {
    all: c,
    applyData: zm,
    definitionById: r,
    footnoteById: o,
    footnoteCounts: i,
    footnoteOrder: [],
    handlers: a,
    one: s,
    options: n,
    patch: Fm,
    wrap: Bm
  };
  return wl(e, function(u) {
    if (u.type === "definition" || u.type === "footnoteDefinition") {
      const d = u.type === "definition" ? r : o, h = String(u.identifier).toUpperCase();
      d.has(h) || d.set(h, u);
    }
  }), l;
  function s(u, d) {
    const h = u.type, f = l.handlers[h];
    if (Zr.call(l.handlers, h) && f)
      return f(l, u, d);
    if (l.options.passThrough && l.options.passThrough.includes(h)) {
      if ("children" in u) {
        const { children: g, ...v } = u, x = $n(v);
        return x.children = l.all(u), x;
      }
      return $n(u);
    }
    return (l.options.unknownHandler || $m)(l, u, d);
  }
  function c(u) {
    const d = [];
    if ("children" in u) {
      const h = u.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const y = l.one(h[f], u);
        if (y) {
          if (f && h[f - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = ji(y.value)), !Array.isArray(y) && y.type === "element")) {
            const g = y.children[0];
            g && g.type === "text" && (g.value = ji(g.value));
          }
          Array.isArray(y) ? d.push(...y) : d.push(y);
        }
      }
    }
    return d;
  }
}
function Fm(e, t) {
  e.position && (t.position = wf(e));
}
function zm(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, o = e.data.hChildren, i = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" && i && Object.assign(n.properties, $n(i)), "children" in n && n.children && o !== null && o !== void 0 && (n.children = o);
  }
  return n;
}
function $m(e, t) {
  const n = t.data || {}, r = "value" in t && !(Zr.call(n, "hProperties") || Zr.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Bm(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function ji(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Ui(e, t) {
  const n = Lm(e, t), r = n.one(e, void 0), o = Em(n), i = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return o && i.children.push({ type: "text", value: `
` }, o), i;
}
function Vm(e, t) {
  return e && "run" in e ? async function(n, r) {
    const o = (
      /** @type {HastRoot} */
      Ui(n, { file: r, ...t })
    );
    await e.run(o, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Ui(n, { file: r, ...e || t })
    );
  };
}
function Wi(e) {
  if (e)
    throw e;
}
var Tn = Object.prototype.hasOwnProperty, bl = Object.prototype.toString, Gi = Object.defineProperty, qi = Object.getOwnPropertyDescriptor, Ki = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : bl.call(t) === "[object Array]";
}, Yi = function(t) {
  if (!t || bl.call(t) !== "[object Object]")
    return !1;
  var n = Tn.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Tn.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || Tn.call(t, o);
}, Xi = function(t, n) {
  Gi && n.name === "__proto__" ? Gi(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Qi = function(t, n) {
  if (n === "__proto__")
    if (Tn.call(t, n)) {
      if (qi)
        return qi(t, n).value;
    } else return;
  return t[n];
}, Hm = function e() {
  var t, n, r, o, i, a, l = arguments[0], s = 1, c = arguments.length, u = !1;
  for (typeof l == "boolean" && (u = l, l = arguments[1] || {}, s = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); s < c; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Qi(l, n), o = Qi(t, n), l !== o && (u && o && (Yi(o) || (i = Ki(o))) ? (i ? (i = !1, a = r && Ki(r) ? r : []) : a = r && Yi(r) ? r : {}, Xi(l, { name: n, newValue: e(u, a, o) })) : typeof o < "u" && Xi(l, { name: n, newValue: o }));
  return l;
};
const kr = /* @__PURE__ */ qa(Hm);
function Jr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function jm() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...o) {
    let i = -1;
    const a = o.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    l(null, ...o);
    function l(s, ...c) {
      const u = e[++i];
      let d = -1;
      if (s) {
        a(s);
        return;
      }
      for (; ++d < o.length; )
        (c[d] === null || c[d] === void 0) && (c[d] = o[d]);
      o = c, u ? Um(u, l)(...c) : a(null, ...c);
    }
  }
  function r(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return e.push(o), t;
  }
}
function Um(e, t) {
  let n;
  return r;
  function r(...a) {
    const l = e.length > a.length;
    let s;
    l && a.push(o);
    try {
      s = e.apply(this, a);
    } catch (c) {
      const u = (
        /** @type {Error} */
        c
      );
      if (l && n)
        throw u;
      return o(u);
    }
    l || (s && s.then && typeof s.then == "function" ? s.then(i, o) : s instanceof Error ? o(s) : i(s));
  }
  function o(a, ...l) {
    n || (n = !0, t(a, ...l));
  }
  function i(a) {
    o(null, a);
  }
}
const Be = { basename: Wm, dirname: Gm, extname: qm, join: Km, sep: "/" };
function Wm(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  hn(e);
  let n = 0, r = -1, o = e.length, i;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (i) {
          n = o + 1;
          break;
        }
      } else r < 0 && (i = !0, r = o + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, l = t.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (i) {
        n = o + 1;
        break;
      }
    } else
      a < 0 && (i = !0, a = o + 1), l > -1 && (e.codePointAt(o) === t.codePointAt(l--) ? l < 0 && (r = o) : (l = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function Gm(e) {
  if (hn(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function qm(e) {
  hn(e);
  let t = e.length, n = -1, r = 0, o = -1, i = 0, a;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), l === 46 ? o < 0 ? o = t : i !== 1 && (i = 1) : o > -1 && (i = -1);
  }
  return o < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  i === 0 || // The (right-most) trimmed path component is exactly `..`.
  i === 1 && o === n - 1 && o === r + 1 ? "" : e.slice(o, n);
}
function Km(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    hn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Ym(n);
}
function Ym(e) {
  hn(e);
  const t = e.codePointAt(0) === 47;
  let n = Xm(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Xm(e, t) {
  let n = "", r = 0, o = -1, i = 0, a = -1, l, s;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      l = e.codePointAt(a);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(o === a - 1 || i === 1)) if (o !== a - 1 && i === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), o = a, i = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, o = a, i = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(o + 1, a) : n = e.slice(o + 1, a), r = a - o - 1;
      o = a, i = 0;
    } else l === 46 && i > -1 ? i++ : i = -1;
  }
  return n;
}
function hn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Qm = { cwd: Zm };
function Zm() {
  return "/";
}
function eo(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Jm(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!eo(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return eg(e);
}
function eg(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(t);
}
const Er = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Sl {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? eo(t) ? n = { path: t } : typeof t == "string" || tg(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Qm.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Er.length; ) {
      const i = Er[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      Er.includes(o) || (this[o] = n[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Be.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Rr(t, "basename"), Nr(t, "basename"), this.path = Be.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Be.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Zi(this.basename, "dirname"), this.path = Be.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Be.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Nr(t, "extname"), Zi(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Be.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    eo(t) && (t = Jm(t)), Rr(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Be.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Rr(t, "stem"), Nr(t, "stem"), this.path = Be.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const o = this.message(t, n, r);
    throw o.fatal = !0, o;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const o = this.message(t, n, r);
    return o.fatal = void 0, o;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const o = new xe(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Nr(e, t) {
  if (e && e.includes(Be.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Be.sep + "`"
    );
}
function Rr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Zi(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function tg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const ng = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), o = r[e], i = function() {
      return o.apply(i, arguments);
    };
    return Object.setPrototypeOf(i, r), i;
  }
), rg = {}.hasOwnProperty;
class Do extends ng {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = jm();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Do()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(kr(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Tr("data", this.frozen), this.namespace[t] = n, this) : rg.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Tr("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const o = n.call(t, ...r);
      typeof o == "function" && this.transformers.use(o);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Sn(t), r = this.parser || this.Parser;
    return Pr("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Pr("process", this.parser || this.Parser), Ar("process", this.compiler || this.Compiler), n ? o(void 0, n) : new Promise(o);
    function o(i, a) {
      const l = Sn(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(u, d, h) {
        if (u || !d || !h)
          return c(u);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          d
        ), y = r.stringify(f, h);
        ag(y) ? h.value = y : h.result = y, c(
          u,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function c(u, d) {
        u || !d ? a(u) : i ? i(d) : n(void 0, d);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Pr("processSync", this.parser || this.Parser), Ar("processSync", this.compiler || this.Compiler), this.process(t, o), ea("processSync", "process", n), r;
    function o(i, a) {
      n = !0, Wi(i), r = a;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    Ji(t), this.freeze();
    const o = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? i(void 0, r) : new Promise(i);
    function i(a, l) {
      const s = Sn(n);
      o.run(t, s, c);
      function c(u, d, h) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          d || t
        );
        u ? l(u) : a ? a(f) : r(void 0, f, h);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, o;
    return this.run(t, n, i), ea("runSync", "run", r), o;
    function i(a, l) {
      Wi(a), o = l, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Sn(n), o = this.compiler || this.Compiler;
    return Ar("stringify", o), Ji(t), o(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, o = this.namespace;
    if (Tr("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : a(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function i(c) {
      if (typeof c == "function")
        s(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [u, ...d] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          s(u, d);
        } else
          a(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function a(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(c.plugins), c.settings && (o.settings = kr(!0, o.settings, c.settings));
    }
    function l(c) {
      let u = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++u < c.length; ) {
          const d = c[u];
          i(d);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function s(c, u) {
      let d = -1, h = -1;
      for (; ++d < r.length; )
        if (r[d][0] === c) {
          h = d;
          break;
        }
      if (h === -1)
        r.push([c, ...u]);
      else if (u.length > 0) {
        let [f, ...y] = u;
        const g = r[h][1];
        Jr(g) && Jr(f) && (f = kr(!0, g, f)), r[h] = [c, f, ...y];
      }
    }
  }
}
const og = new Do().freeze();
function Pr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ar(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Tr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ji(e) {
  if (!Jr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ea(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Sn(e) {
  return ig(e) ? e : new Sl(e);
}
function ig(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ag(e) {
  return typeof e == "string" || lg(e);
}
function lg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const sg = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ta = [], na = { allowDangerousHtml: !0 }, cg = /^(https?|ircs?|mailto|xmpp)$/i, ug = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function dg(e) {
  const t = fg(e), n = pg(e);
  return hg(t.runSync(t.parse(n), n), e);
}
function fg(e) {
  const t = e.rehypePlugins || ta, n = e.remarkPlugins || ta, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...na } : na;
  return og().use(Gh).use(n).use(Vm, r).use(t);
}
function pg(e) {
  const t = e.children || "", n = new Sl();
  return typeof t == "string" && (n.value = t), n;
}
function hg(e, t) {
  const n = t.allowedElements, r = t.allowElement, o = t.components, i = t.disallowedElements, a = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || mg;
  for (const u of ug)
    Object.hasOwn(t, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + sg + u.id, void 0);
  return wl(e, c), Ef(e, {
    Fragment: Ce,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: m,
    jsxs: F,
    passKeys: !0,
    passNode: !0
  });
  function c(u, d, h) {
    if (u.type === "raw" && h && typeof d == "number")
      return a ? h.children.splice(d, 1) : h.children[d] = { type: "text", value: u.value }, d;
    if (u.type === "element") {
      let f;
      for (f in br)
        if (Object.hasOwn(br, f) && Object.hasOwn(u.properties, f)) {
          const y = u.properties[f], g = br[f];
          (g === null || g.includes(u.tagName)) && (u.properties[f] = s(String(y || ""), f, u));
        }
    }
    if (u.type === "element") {
      let f = n ? !n.includes(u.tagName) : i ? i.includes(u.tagName) : !1;
      if (!f && r && typeof d == "number" && (f = !r(u, d, h)), f && h && typeof d == "number")
        return l && u.children ? h.children.splice(d, 1, ...u.children) : h.children.splice(d, 1), d;
    }
  }
}
function mg(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    cg.test(e.slice(0, t)) ? e : ""
  );
}
function gg({ content: e }) {
  return /* @__PURE__ */ m("div", { className: "prose prose-stone dark:prose-invert max-w-none font-serif", children: /* @__PURE__ */ m(
    dg,
    {
      components: {
        h1: ({ children: t }) => /* @__PURE__ */ m("h1", { dir: "auto", className: "text-3xl font-semibold mt-6 mb-4 first:mt-0", children: t }),
        h2: ({ children: t }) => /* @__PURE__ */ m("h2", { dir: "auto", className: "text-2xl font-semibold mt-5 mb-3", children: t }),
        h3: ({ children: t }) => /* @__PURE__ */ m("h3", { dir: "auto", className: "text-xl font-semibold mt-4 mb-2", children: t }),
        p: ({ children: t }) => /* @__PURE__ */ m("p", { dir: "auto", className: "mb-4 leading-relaxed", children: t }),
        ul: ({ children: t }) => /* @__PURE__ */ m("ul", { dir: "auto", className: "list-disc pl-6 mb-4 space-y-1", children: t }),
        ol: ({ children: t }) => /* @__PURE__ */ m("ol", { dir: "auto", className: "list-decimal pl-6 mb-4 space-y-1", children: t }),
        li: ({ children: t }) => /* @__PURE__ */ m("li", { dir: "auto", className: "leading-relaxed", children: t }),
        blockquote: ({ children: t }) => /* @__PURE__ */ m("blockquote", { dir: "auto", className: "border-l-4 border-primary/30 pl-4 my-4 italic text-muted-foreground", children: t }),
        code: ({ className: t, children: n }) => !t ? /* @__PURE__ */ m("code", { className: "bg-secondary px-1.5 py-0.5 rounded text-sm font-mono", children: n }) : /* @__PURE__ */ m("code", { className: "block bg-secondary p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4", children: n }),
        pre: ({ children: t }) => /* @__PURE__ */ m("pre", { className: "bg-secondary p-4 rounded-lg overflow-x-auto mb-4", children: t }),
        a: ({ href: t, children: n }) => /* @__PURE__ */ m(
          "a",
          {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-primary hover:underline",
            children: n
          }
        ),
        hr: () => /* @__PURE__ */ m("hr", { className: "my-6 border-border" }),
        strong: ({ children: t }) => /* @__PURE__ */ m("strong", { className: "font-semibold", children: t }),
        em: ({ children: t }) => /* @__PURE__ */ m("em", { className: "italic", children: t })
      },
      children: e
    }
  ) });
}
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Cl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = za(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...l
  }, s) => jr(
    "svg",
    {
      ref: s,
      ...vg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Cl("lucide", o),
      ...l
    },
    [
      ...a.map(([c, u]) => jr(c, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (e, t) => {
  const n = za(
    ({ className: r, ...o }, i) => jr(xg, {
      ref: i,
      iconNode: t,
      className: Cl(`lucide-${yg(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = ae("Bold", [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = ae("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = ae("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = ae("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = ae("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = ae("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = ae("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = ae("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = ae("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = ae("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = ae("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = ae("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = ae("Heading3", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = ae("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = ae("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = ae("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = ae("ListOrdered", [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = ae("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = ae("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = ae("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = ae("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = ae("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = ae("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = ae("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = ae("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = ae("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ia(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function nt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = ia(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : ia(e[o], null);
        }
      };
  };
}
function le(...e) {
  return p.useCallback(nt(...e), e);
}
var Ug = Symbol.for("react.lazy"), Bn = p[" use ".trim().toString()];
function Wg(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Tl(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Ug && "_payload" in e && Wg(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Il(e) {
  const t = /* @__PURE__ */ qg(e), n = p.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    Tl(i) && typeof Bn == "function" && (i = Bn(i._payload));
    const l = p.Children.toArray(i), s = l.find(Yg);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: p.isValidElement(c) ? p.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Gg = /* @__PURE__ */ Il("Slot");
// @__NO_SIDE_EFFECTS__
function qg(e) {
  const t = p.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (Tl(o) && typeof Bn == "function" && (o = Bn(o._payload)), p.isValidElement(o)) {
      const a = Qg(o), l = Xg(i, o.props);
      return o.type !== p.Fragment && (l.ref = r ? nt(r, a) : a), p.cloneElement(o, l);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Kg = Symbol("radix.slottable");
function Yg(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Kg;
}
function Xg(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const s = i(...l);
      return o(...l), s;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qg(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ml(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ml(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function _l() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ml(e)) && (r && (r += " "), r += t);
  return r;
}
const aa = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, la = _l, Dl = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return la(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], d = i == null ? void 0 : i[c];
    if (u === null) return null;
    const h = aa(u) || aa(d);
    return o[c][h];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [d, h] = u;
    return h === void 0 || (c[d] = h), c;
  }, {}), s = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: d, className: h, ...f } = u;
    return Object.entries(f).every((y) => {
      let [g, v] = y;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...l
      }[g]) : {
        ...i,
        ...l
      }[g] === v;
    }) ? [
      ...c,
      d,
      h
    ] : c;
  }, []);
  return la(e, a, s, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Lo = "-", Zg = (e) => {
  const t = ey(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Lo);
      return l[0] === "" && l.length !== 1 && l.shift(), Ol(l, t) || Jg(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const s = n[a] || [];
      return l && r[a] ? [...s, ...r[a]] : s;
    }
  };
}, Ol = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Ol(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Lo);
  return (a = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : a.classGroupId;
}, sa = /^\[(.+)\]$/, Jg = (e) => {
  if (sa.test(e)) {
    const t = sa.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ey = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ny(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    no(a, r, i, t);
  }), r;
}, no = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : ca(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ty(o)) {
        no(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      no(a, ca(t, i), n, r);
    });
  });
}, ca = (e, t) => {
  let n = e;
  return t.split(Lo).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ty = (e) => e.isThemeGetter, ny = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, l]) => [t + a, l])) : i);
  return [n, o];
}) : e, ry = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}, Ll = "!", oy = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, a = (l) => {
    const s = [];
    let c = 0, u = 0, d;
    for (let v = 0; v < l.length; v++) {
      let x = l[v];
      if (c === 0) {
        if (x === o && (r || l.slice(v, v + i) === t)) {
          s.push(l.slice(u, v)), u = v + i;
          continue;
        }
        if (x === "/") {
          d = v;
          continue;
        }
      }
      x === "[" ? c++ : x === "]" && c--;
    }
    const h = s.length === 0 ? l : l.substring(u), f = h.startsWith(Ll), y = f ? h.substring(1) : h, g = d && d > u ? d - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: y,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: a
  }) : a;
}, iy = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, ay = (e) => ({
  cache: ry(e.cacheSize),
  parseClassName: oy(e),
  ...Zg(e)
}), ly = /\s+/, sy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(ly);
  let l = "";
  for (let s = a.length - 1; s >= 0; s -= 1) {
    const c = a[s], {
      modifiers: u,
      hasImportantModifier: d,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = n(c);
    let y = !!f, g = r(y ? h.substring(0, f) : h);
    if (!g) {
      if (!y) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = r(h), !g) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const v = iy(u).join(":"), x = d ? v + Ll : v, C = x + g;
    if (i.includes(C))
      continue;
    i.push(C);
    const w = o(g, y);
    for (let E = 0; E < w.length; ++E) {
      const R = w[E];
      i.push(x + R);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function cy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Fl(t)) && (r && (r += " "), r += n);
  return r;
}
const Fl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Fl(e[r])) && (n && (n += " "), n += t);
  return n;
};
function uy(e, ...t) {
  let n, r, o, i = a;
  function a(s) {
    const c = t.reduce((u, d) => d(u), e());
    return n = ay(c), r = n.cache.get, o = n.cache.set, i = l, l(s);
  }
  function l(s) {
    const c = r(s);
    if (c)
      return c;
    const u = sy(s, n);
    return o(s, u), u;
  }
  return function() {
    return i(cy.apply(null, arguments));
  };
}
const he = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, zl = /^\[(?:([a-z-]+):)?(.+)\]$/i, dy = /^\d+\/\d+$/, fy = /* @__PURE__ */ new Set(["px", "full", "screen"]), py = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, my = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, gy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Ft(e) || fy.has(e) || dy.test(e), ct = (e) => Wt(e, "length", Ey), Ft = (e) => !!e && !Number.isNaN(Number(e)), Ir = (e) => Wt(e, "number", Ft), en = (e) => !!e && Number.isInteger(Number(e)), vy = (e) => e.endsWith("%") && Ft(e.slice(0, -1)), Q = (e) => zl.test(e), ut = (e) => py.test(e), xy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wy = (e) => Wt(e, xy, $l), by = (e) => Wt(e, "position", $l), Sy = /* @__PURE__ */ new Set(["image", "url"]), Cy = (e) => Wt(e, Sy, Ry), ky = (e) => Wt(e, "", Ny), tn = () => !0, Wt = (e, t, n) => {
  const r = zl.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ey = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hy.test(e) && !my.test(e)
), $l = () => !1, Ny = (e) => gy.test(e), Ry = (e) => yy.test(e), Py = () => {
  const e = he("colors"), t = he("spacing"), n = he("blur"), r = he("brightness"), o = he("borderColor"), i = he("borderRadius"), a = he("borderSpacing"), l = he("borderWidth"), s = he("contrast"), c = he("grayscale"), u = he("hueRotate"), d = he("invert"), h = he("gap"), f = he("gradientColorStops"), y = he("gradientColorStopPositions"), g = he("inset"), v = he("margin"), x = he("opacity"), C = he("padding"), w = he("saturate"), E = he("scale"), R = he("sepia"), k = he("skew"), N = he("space"), O = he("translate"), D = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", Q, t], A = () => [Q, t], V = () => ["", Je, ct], M = () => ["auto", Ft, Q], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _ = () => ["", "0", Q], b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], K = () => [Ft, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tn],
      spacing: [Je, ct],
      blur: ["none", "", ut, Q],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, Q],
      borderSpacing: A(),
      borderWidth: V(),
      contrast: K(),
      grayscale: _(),
      hueRotate: K(),
      invert: _(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vy, ct],
      inset: T(),
      margin: T(),
      opacity: K(),
      padding: A(),
      saturate: K(),
      scale: K(),
      sepia: _(),
      skew: K(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ut]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), Q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", en, Q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", en, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", en, Q]
        }, Q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [en, Q]
        }, Q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...$()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...$(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [N]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ut]
        }, ut]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ut, ct]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ir]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ft, Ir]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Je, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Je, ct]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Je, Q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), by]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", wy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Je, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Je, ct]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Je, ct]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ut, ky]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ut, Q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: K()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: K()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [en, Q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [O]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [O]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Je, ct, Ir]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Ay = /* @__PURE__ */ uy(Py);
function te(...e) {
  return Ay(_l(e));
}
const Fo = Dl(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), _e = p.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ m(r ? Gg : "button", { className: te(Fo({ variant: t, size: n, className: e })), ref: i, ...o })
);
_e.displayName = "Button";
function j(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ty(e, t) {
  const n = p.createContext(t), r = (i) => {
    const { children: a, ...l } = i, s = p.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ m(n.Provider, { value: s, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = p.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Ye(e, t = []) {
  let n = [];
  function r(i, a) {
    const l = p.createContext(a), s = n.length;
    n = [...n, a];
    const c = (d) => {
      var x;
      const { scope: h, children: f, ...y } = d, g = ((x = h == null ? void 0 : h[e]) == null ? void 0 : x[s]) || l, v = p.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ m(g.Provider, { value: v, children: f });
    };
    c.displayName = i + "Provider";
    function u(d, h) {
      var g;
      const f = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[s]) || l, y = p.useContext(f);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = n.map((a) => p.createContext(a));
    return function(l) {
      const s = (l == null ? void 0 : l[e]) || i;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: s } }),
        [l, s]
      );
    };
  };
  return o.scopeName = e, [r, Iy(o, ...t)];
}
function Iy(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((l, { useScope: s, scopeName: c }) => {
        const d = s(i)[`__scope${c}`];
        return { ...l, ...d };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  const t = /* @__PURE__ */ _y(e), n = p.forwardRef((r, o) => {
    const { children: i, ...a } = r, l = p.Children.toArray(i), s = l.find(Oy);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: p.isValidElement(c) ? p.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function _y(e) {
  const t = p.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (p.isValidElement(o)) {
      const a = Fy(o), l = Ly(i, o.props);
      return o.type !== p.Fragment && (l.ref = r ? nt(r, a) : a), p.cloneElement(o, l);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Dy = Symbol("radix.slottable");
function Oy(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Dy;
}
function Ly(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const s = i(...l);
      return o(...l), s;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Fy(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var zy = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ne = zy.reduce((e, t) => {
  const n = /* @__PURE__ */ My(`Primitive.${t}`), r = p.forwardRef((o, i) => {
    const { asChild: a, ...l } = o, s = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(s, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Bl(e, t) {
  e && Yn.flushSync(() => e.dispatchEvent(t));
}
function qe(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function $y(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var By = "DismissableLayer", ro = "dismissableLayer.update", Vy = "dismissableLayer.pointerDownOutside", Hy = "dismissableLayer.focusOutside", ua, Vl = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), mn = p.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: l,
      ...s
    } = e, c = p.useContext(Vl), [u, d] = p.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = p.useState({}), y = le(t, (N) => d(N)), g = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = g.indexOf(v), C = u ? g.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= x, R = Wy((N) => {
      const O = N.target, D = [...c.branches].some((z) => z.contains(O));
      !E || D || (o == null || o(N), a == null || a(N), N.defaultPrevented || l == null || l());
    }, h), k = Gy((N) => {
      const O = N.target;
      [...c.branches].some((z) => z.contains(O)) || (i == null || i(N), a == null || a(N), N.defaultPrevented || l == null || l());
    }, h);
    return $y((N) => {
      C === c.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
    }, h), p.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (ua = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), da(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ua);
        };
    }, [u, h, n, c]), p.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), da());
    }, [u, c]), p.useEffect(() => {
      const N = () => f({});
      return document.addEventListener(ro, N), () => document.removeEventListener(ro, N);
    }, []), /* @__PURE__ */ m(
      ne.div,
      {
        ...s,
        ref: y,
        style: {
          pointerEvents: w ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: j(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: j(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: j(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
mn.displayName = By;
var jy = "DismissableLayerBranch", Uy = p.forwardRef((e, t) => {
  const n = p.useContext(Vl), r = p.useRef(null), o = le(t, r);
  return p.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ m(ne.div, { ...e, ref: o });
});
Uy.displayName = jy;
function Wy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = p.useRef(!1), o = p.useRef(() => {
  });
  return p.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let s = function() {
          Hl(
            Vy,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = s, t.addEventListener("click", o.current, { once: !0 })) : s();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Gy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = p.useRef(!1);
  return p.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Hl(Hy, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function da() {
  const e = new CustomEvent(ro);
  document.dispatchEvent(e);
}
function Hl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Bl(o, i) : o.dispatchEvent(i);
}
var ve = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {
}, qy = p[" useId ".trim().toString()] || (() => {
}), Ky = 0;
function Ue(e) {
  const [t, n] = p.useState(qy());
  return ve(() => {
    n((r) => r ?? String(Ky++));
  }, [e]), t ? `radix-${t}` : "";
}
const Yy = ["top", "right", "bottom", "left"], ft = Math.min, Pe = Math.max, Vn = Math.round, Cn = Math.floor, We = (e) => ({
  x: e,
  y: e
}), Xy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Qy = {
  start: "end",
  end: "start"
};
function oo(e, t, n) {
  return Pe(e, ft(t, n));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tt(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function zo(e) {
  return e === "x" ? "y" : "x";
}
function $o(e) {
  return e === "y" ? "height" : "width";
}
const Zy = /* @__PURE__ */ new Set(["top", "bottom"]);
function je(e) {
  return Zy.has(tt(e)) ? "y" : "x";
}
function Bo(e) {
  return zo(je(e));
}
function Jy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), o = Bo(e), i = $o(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Hn(a)), [a, Hn(a)];
}
function ev(e) {
  const t = Hn(e);
  return [io(e), t, io(t)];
}
function io(e) {
  return e.replace(/start|end/g, (t) => Qy[t]);
}
const fa = ["left", "right"], pa = ["right", "left"], tv = ["top", "bottom"], nv = ["bottom", "top"];
function rv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? pa : fa : t ? fa : pa;
    case "left":
    case "right":
      return t ? tv : nv;
    default:
      return [];
  }
}
function ov(e, t, n, r) {
  const o = Gt(e);
  let i = rv(tt(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(io)))), i;
}
function Hn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xy[t]);
}
function iv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jl(e) {
  return typeof e != "number" ? iv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function jn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function ha(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = je(t), a = Bo(t), l = $o(a), s = tt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[l] / 2 - o[l] / 2;
  let f;
  switch (s) {
    case "top":
      f = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gt(t)) {
    case "start":
      f[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      f[a] += h * (n && c ? -1 : 1);
      break;
  }
  return f;
}
async function av(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: l,
    strategy: s
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: f = 0
  } = et(t, e), y = jl(f), v = l[h ? d === "floating" ? "reference" : "floating" : d], x = jn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: s
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), E = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = jn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: C,
    offsetParent: w,
    strategy: s
  }) : C);
  return {
    top: (x.top - R.top + y.top) / E.y,
    bottom: (R.bottom - x.bottom + y.bottom) / E.y,
    left: (x.left - R.left + y.left) / E.x,
    right: (R.right - x.right + y.right) / E.x
  };
}
const lv = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, l = i.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = ha(c, r, s), h = r, f = {}, y = 0;
  for (let v = 0; v < l.length; v++) {
    var g;
    const {
      name: x,
      fn: C
    } = l[v], {
      x: w,
      y: E,
      data: R,
      reset: k
    } = await C({
      x: u,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: f,
      rects: c,
      platform: {
        ...a,
        detectOverflow: (g = a.detectOverflow) != null ? g : av
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = E ?? d, f = {
      ...f,
      [x]: {
        ...f[x],
        ...R
      }
    }, k && y <= 50 && (y++, typeof k == "object" && (k.placement && (h = k.placement), k.rects && (c = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: d
    } = ha(c, h, s)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: f
  };
}, sv = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: l,
      middlewareData: s
    } = t, {
      element: c,
      padding: u = 0
    } = et(e, t) || {};
    if (c == null)
      return {};
    const d = jl(u), h = {
      x: n,
      y: r
    }, f = Bo(o), y = $o(f), g = await a.getDimensions(c), v = f === "y", x = v ? "top" : "left", C = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", E = i.reference[y] + i.reference[f] - h[f] - i.floating[y], R = h[f] - i.reference[f], k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let N = k ? k[w] : 0;
    (!N || !await (a.isElement == null ? void 0 : a.isElement(k))) && (N = l.floating[w] || i.floating[y]);
    const O = E / 2 - R / 2, D = N / 2 - g[y] / 2 - 1, z = ft(d[x], D), T = ft(d[C], D), A = z, V = N - g[y] - T, M = N / 2 - g[y] / 2 + O, H = oo(A, M, V), B = !s.arrow && Gt(o) != null && M !== H && i.reference[y] / 2 - (M < A ? z : T) - g[y] / 2 < 0, G = B ? M < A ? M - A : M - V : 0;
    return {
      [f]: h[f] + G,
      data: {
        [f]: H,
        centerOffset: M - H - G,
        ...B && {
          alignmentOffset: G
        }
      },
      reset: B
    };
  }
}), cv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: l,
        platform: s,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: g = !0,
        ...v
      } = et(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const x = tt(o), C = je(l), w = tt(l) === l, E = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), R = h || (w || !g ? [Hn(l)] : ev(l)), k = y !== "none";
      !h && k && R.push(...ov(l, g, y, E));
      const N = [l, ...R], O = await s.detectOverflow(t, v), D = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && D.push(O[x]), d) {
        const M = Jy(o, a, E);
        D.push(O[M[0]], O[M[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: D
      }], !D.every((M) => M <= 0)) {
        var T, A;
        const M = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, H = N[M];
        if (H && (!(d === "alignment" ? C !== je(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every(($) => je($.placement) === C ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: M,
              overflows: z
            },
            reset: {
              placement: H
            }
          };
        let B = (A = z.filter((G) => G.overflows[0] <= 0).sort((G, $) => G.overflows[1] - $.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!B)
          switch (f) {
            case "bestFit": {
              var V;
              const G = (V = z.filter(($) => {
                if (k) {
                  const _ = je($.placement);
                  return _ === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((_) => _ > 0).reduce((_, b) => _ + b, 0)]).sort(($, _) => $[1] - _[1])[0]) == null ? void 0 : V[0];
              G && (B = G);
              break;
            }
            case "initialPlacement":
              B = l;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function ma(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ga(e) {
  return Yy.some((t) => e[t] >= 0);
}
const uv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = et(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = ma(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ga(l)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = ma(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ga(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ul = /* @__PURE__ */ new Set(["left", "top"]);
async function dv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = tt(n), l = Gt(n), s = je(n) === "y", c = Ul.has(a) ? -1 : 1, u = i && s ? -1 : 1, d = et(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof y == "number" && (f = l === "end" ? y * -1 : y), s ? {
    x: f * u,
    y: h * c
  } : {
    x: h * c,
    y: f * u
  };
}
const fv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: l
      } = t, s = await dv(t, e);
      return a === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + s.x,
        y: i + s.y,
        data: {
          ...s,
          placement: a
        }
      };
    }
  };
}, pv = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (x) => {
            let {
              x: C,
              y: w
            } = x;
            return {
              x: C,
              y: w
            };
          }
        },
        ...c
      } = et(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, c), h = je(tt(o)), f = zo(h);
      let y = u[f], g = u[h];
      if (a) {
        const x = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", w = y + d[x], E = y - d[C];
        y = oo(w, y, E);
      }
      if (l) {
        const x = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", w = g + d[x], E = g - d[C];
        g = oo(w, g, E);
      }
      const v = s.fn({
        ...t,
        [f]: y,
        [h]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: a,
            [h]: l
          }
        }
      };
    }
  };
}, hv = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: s = !0,
        crossAxis: c = !0
      } = et(e, t), u = {
        x: n,
        y: r
      }, d = je(o), h = zo(d);
      let f = u[h], y = u[d];
      const g = et(l, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (s) {
        const w = h === "y" ? "height" : "width", E = i.reference[h] - i.floating[w] + v.mainAxis, R = i.reference[h] + i.reference[w] - v.mainAxis;
        f < E ? f = E : f > R && (f = R);
      }
      if (c) {
        var x, C;
        const w = h === "y" ? "width" : "height", E = Ul.has(tt(o)), R = i.reference[d] - i.floating[w] + (E && ((x = a.offset) == null ? void 0 : x[d]) || 0) + (E ? 0 : v.crossAxis), k = i.reference[d] + i.reference[w] + (E ? 0 : ((C = a.offset) == null ? void 0 : C[d]) || 0) - (E ? v.crossAxis : 0);
        y < R ? y = R : y > k && (y = k);
      }
      return {
        [h]: f,
        [d]: y
      };
    }
  };
}, mv = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: l
      } = t, {
        apply: s = () => {
        },
        ...c
      } = et(e, t), u = await a.detectOverflow(t, c), d = tt(o), h = Gt(o), f = je(o) === "y", {
        width: y,
        height: g
      } = i.floating;
      let v, x;
      d === "top" || d === "bottom" ? (v = d, x = h === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = d, v = h === "end" ? "top" : "bottom");
      const C = g - u.top - u.bottom, w = y - u.left - u.right, E = ft(g - u[v], C), R = ft(y - u[x], w), k = !t.middlewareData.shift;
      let N = E, O = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = w), (r = t.middlewareData.shift) != null && r.enabled.y && (N = C), k && !h) {
        const z = Pe(u.left, 0), T = Pe(u.right, 0), A = Pe(u.top, 0), V = Pe(u.bottom, 0);
        f ? O = y - 2 * (z !== 0 || T !== 0 ? z + T : Pe(u.left, u.right)) : N = g - 2 * (A !== 0 || V !== 0 ? A + V : Pe(u.top, u.bottom));
      }
      await s({
        ...t,
        availableWidth: O,
        availableHeight: N
      });
      const D = await a.getDimensions(l.floating);
      return y !== D.width || g !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function er() {
  return typeof window < "u";
}
function qt(e) {
  return Wl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xe(e) {
  var t;
  return (t = (Wl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wl(e) {
  return er() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function Fe(e) {
  return er() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function Ke(e) {
  return er() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function ya(e) {
  return !er() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
const gv = /* @__PURE__ */ new Set(["inline", "contents"]);
function gn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !gv.has(o);
}
const yv = /* @__PURE__ */ new Set(["table", "td", "th"]);
function vv(e) {
  return yv.has(qt(e));
}
const xv = [":popover-open", ":modal"];
function tr(e) {
  return xv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const wv = ["transform", "translate", "scale", "rotate", "perspective"], bv = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Sv = ["paint", "layout", "strict", "content"];
function Vo(e) {
  const t = Ho(), n = Fe(e) ? ze(e) : e;
  return wv.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || bv.some((r) => (n.willChange || "").includes(r)) || Sv.some((r) => (n.contain || "").includes(r));
}
function Cv(e) {
  let t = pt(e);
  for (; Ke(t) && !Vt(t); ) {
    if (Vo(t))
      return t;
    if (tr(t))
      return null;
    t = pt(t);
  }
  return null;
}
function Ho() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const kv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Vt(e) {
  return kv.has(qt(e));
}
function ze(e) {
  return Te(e).getComputedStyle(e);
}
function nr(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function pt(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ya(e) && e.host || // Fallback.
    Xe(e)
  );
  return ya(t) ? t.host : t;
}
function Gl(e) {
  const t = pt(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(t) && gn(t) ? t : Gl(t);
}
function cn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Gl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Te(o);
  if (i) {
    const l = ao(a);
    return t.concat(a, a.visualViewport || [], gn(o) ? o : [], l && n ? cn(l) : []);
  }
  return t.concat(o, cn(o, [], n));
}
function ao(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ql(e) {
  const t = ze(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ke(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, l = Vn(n) !== i || Vn(r) !== a;
  return l && (n = i, r = a), {
    width: n,
    height: r,
    $: l
  };
}
function jo(e) {
  return Fe(e) ? e : e.contextElement;
}
function zt(e) {
  const t = jo(e);
  if (!Ke(t))
    return We(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ql(t);
  let a = (i ? Vn(n.width) : n.width) / r, l = (i ? Vn(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const Ev = /* @__PURE__ */ We(0);
function Kl(e) {
  const t = Te(e);
  return !Ho() || !t.visualViewport ? Ev : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Te(e) ? !1 : t;
}
function St(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = jo(e);
  let a = We(1);
  t && (r ? Fe(r) && (a = zt(r)) : a = zt(e));
  const l = Nv(i, n, r) ? Kl(i) : We(0);
  let s = (o.left + l.x) / a.x, c = (o.top + l.y) / a.y, u = o.width / a.x, d = o.height / a.y;
  if (i) {
    const h = Te(i), f = r && Fe(r) ? Te(r) : r;
    let y = h, g = ao(y);
    for (; g && r && f !== y; ) {
      const v = zt(g), x = g.getBoundingClientRect(), C = ze(g), w = x.left + (g.clientLeft + parseFloat(C.paddingLeft)) * v.x, E = x.top + (g.clientTop + parseFloat(C.paddingTop)) * v.y;
      s *= v.x, c *= v.y, u *= v.x, d *= v.y, s += w, c += E, y = Te(g), g = ao(y);
    }
  }
  return jn({
    width: u,
    height: d,
    x: s,
    y: c
  });
}
function rr(e, t) {
  const n = nr(e).scrollLeft;
  return t ? t.left + n : St(Xe(e)).left + n;
}
function Yl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - rr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Rv(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Xe(r), l = t ? tr(t.floating) : !1;
  if (r === a || l && i)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = We(1);
  const u = We(0), d = Ke(r);
  if ((d || !d && !i) && ((qt(r) !== "body" || gn(a)) && (s = nr(r)), Ke(r))) {
    const f = St(r);
    c = zt(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const h = a && !d && !i ? Yl(a, s) : We(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - s.scrollLeft * c.x + u.x + h.x,
    y: n.y * c.y - s.scrollTop * c.y + u.y + h.y
  };
}
function Pv(e) {
  return Array.from(e.getClientRects());
}
function Av(e) {
  const t = Xe(e), n = nr(e), r = e.ownerDocument.body, o = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + rr(e);
  const l = -n.scrollTop;
  return ze(r).direction === "rtl" && (a += Pe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: l
  };
}
const va = 25;
function Tv(e, t) {
  const n = Te(e), r = Xe(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, l = 0, s = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Ho();
    (!u || u && t === "fixed") && (l = o.offsetLeft, s = o.offsetTop);
  }
  const c = rr(r);
  if (c <= 0) {
    const u = r.ownerDocument, d = u.body, h = getComputedStyle(d), f = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - d.clientWidth - f);
    y <= va && (i -= y);
  } else c <= va && (i += c);
  return {
    width: i,
    height: a,
    x: l,
    y: s
  };
}
const Iv = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Mv(e, t) {
  const n = St(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ke(e) ? zt(e) : We(1), a = e.clientWidth * i.x, l = e.clientHeight * i.y, s = o * i.x, c = r * i.y;
  return {
    width: a,
    height: l,
    x: s,
    y: c
  };
}
function xa(e, t, n) {
  let r;
  if (t === "viewport")
    r = Tv(e, n);
  else if (t === "document")
    r = Av(Xe(e));
  else if (Fe(t))
    r = Mv(t, n);
  else {
    const o = Kl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return jn(r);
}
function Xl(e, t) {
  const n = pt(e);
  return n === t || !Fe(n) || Vt(n) ? !1 : ze(n).position === "fixed" || Xl(n, t);
}
function _v(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = cn(e, [], !1).filter((l) => Fe(l) && qt(l) !== "body"), o = null;
  const i = ze(e).position === "fixed";
  let a = i ? pt(e) : e;
  for (; Fe(a) && !Vt(a); ) {
    const l = ze(a), s = Vo(a);
    !s && l.position === "fixed" && (o = null), (i ? !s && !o : !s && l.position === "static" && !!o && Iv.has(o.position) || gn(a) && !s && Xl(e, a)) ? r = r.filter((u) => u !== a) : o = l, a = pt(a);
  }
  return t.set(e, r), r;
}
function Dv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? tr(t) ? [] : _v(t, this._c) : [].concat(n), r], l = a[0], s = a.reduce((c, u) => {
    const d = xa(t, u, o);
    return c.top = Pe(d.top, c.top), c.right = ft(d.right, c.right), c.bottom = ft(d.bottom, c.bottom), c.left = Pe(d.left, c.left), c;
  }, xa(t, l, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Ov(e) {
  const {
    width: t,
    height: n
  } = ql(e);
  return {
    width: t,
    height: n
  };
}
function Lv(e, t, n) {
  const r = Ke(t), o = Xe(t), i = n === "fixed", a = St(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = We(0);
  function c() {
    s.x = rr(o);
  }
  if (r || !r && !i)
    if ((qt(t) !== "body" || gn(o)) && (l = nr(t)), r) {
      const f = St(t, !0, i, t);
      s.x = f.x + t.clientLeft, s.y = f.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Yl(o, l) : We(0), d = a.left + l.scrollLeft - s.x - u.x, h = a.top + l.scrollTop - s.y - u.y;
  return {
    x: d,
    y: h,
    width: a.width,
    height: a.height
  };
}
function Mr(e) {
  return ze(e).position === "static";
}
function wa(e, t) {
  if (!Ke(e) || ze(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Xe(e) === n && (n = n.ownerDocument.body), n;
}
function Ql(e, t) {
  const n = Te(e);
  if (tr(e))
    return n;
  if (!Ke(e)) {
    let o = pt(e);
    for (; o && !Vt(o); ) {
      if (Fe(o) && !Mr(o))
        return o;
      o = pt(o);
    }
    return n;
  }
  let r = wa(e, t);
  for (; r && vv(r) && Mr(r); )
    r = wa(r, t);
  return r && Vt(r) && Mr(r) && !Vo(r) ? n : r || Cv(e) || n;
}
const Fv = async function(e) {
  const t = this.getOffsetParent || Ql, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Lv(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function zv(e) {
  return ze(e).direction === "rtl";
}
const $v = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rv,
  getDocumentElement: Xe,
  getClippingRect: Dv,
  getOffsetParent: Ql,
  getElementRects: Fv,
  getClientRects: Pv,
  getDimensions: Ov,
  getScale: zt,
  isElement: Fe,
  isRTL: zv
};
function Zl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bv(e, t) {
  let n = null, r;
  const o = Xe(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function a(l, s) {
    l === void 0 && (l = !1), s === void 0 && (s = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: h,
      height: f
    } = c;
    if (l || t(), !h || !f)
      return;
    const y = Cn(d), g = Cn(o.clientWidth - (u + h)), v = Cn(o.clientHeight - (d + f)), x = Cn(u), w = {
      rootMargin: -y + "px " + -g + "px " + -v + "px " + -x + "px",
      threshold: Pe(0, ft(1, s)) || 1
    };
    let E = !0;
    function R(k) {
      const N = k[0].intersectionRatio;
      if (N !== s) {
        if (!E)
          return a();
        N ? a(!1, N) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !Zl(c, e.getBoundingClientRect()) && a(), E = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, w);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Vv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, c = jo(e), u = o || i ? [...c ? cn(c) : [], ...cn(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const d = c && l ? Bv(c, n) : null;
  let h = -1, f = null;
  a && (f = new ResizeObserver((x) => {
    let [C] = x;
    C && C.target === c && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), n();
  }), c && !s && f.observe(c), f.observe(t));
  let y, g = s ? St(e) : null;
  s && v();
  function v() {
    const x = St(e);
    g && !Zl(g, x) && n(), g = x, y = requestAnimationFrame(v);
  }
  return n(), () => {
    var x;
    u.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), d == null || d(), (x = f) == null || x.disconnect(), f = null, s && cancelAnimationFrame(y);
  };
}
const Hv = fv, jv = pv, Uv = cv, Wv = mv, Gv = uv, ba = sv, qv = hv, Kv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $v,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return lv(e, t, {
    ...o,
    platform: i
  });
};
var Yv = typeof document < "u", Xv = function() {
}, In = Yv ? Ed : Xv;
function Un(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Un(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Un(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sa(e, t) {
  const n = Jl(e);
  return Math.round(t * n) / n;
}
function _r(e) {
  const t = p.useRef(e);
  return In(() => {
    t.current = e;
  }), t;
}
function Qv(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: s,
    open: c
  } = e, [u, d] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, f] = p.useState(r);
  Un(h, r) || f(r);
  const [y, g] = p.useState(null), [v, x] = p.useState(null), C = p.useCallback(($) => {
    $ !== k.current && (k.current = $, g($));
  }, []), w = p.useCallback(($) => {
    $ !== N.current && (N.current = $, x($));
  }, []), E = i || y, R = a || v, k = p.useRef(null), N = p.useRef(null), O = p.useRef(u), D = s != null, z = _r(s), T = _r(o), A = _r(c), V = p.useCallback(() => {
    if (!k.current || !N.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: h
    };
    T.current && ($.platform = T.current), Kv(k.current, N.current, $).then((_) => {
      const b = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      M.current && !Un(O.current, b) && (O.current = b, Yn.flushSync(() => {
        d(b);
      }));
    });
  }, [h, t, n, T, A]);
  In(() => {
    c === !1 && O.current.isPositioned && (O.current.isPositioned = !1, d(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [c]);
  const M = p.useRef(!1);
  In(() => (M.current = !0, () => {
    M.current = !1;
  }), []), In(() => {
    if (E && (k.current = E), R && (N.current = R), E && R) {
      if (z.current)
        return z.current(E, R, V);
      V();
    }
  }, [E, R, V, z, D]);
  const H = p.useMemo(() => ({
    reference: k,
    floating: N,
    setReference: C,
    setFloating: w
  }), [C, w]), B = p.useMemo(() => ({
    reference: E,
    floating: R
  }), [E, R]), G = p.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return $;
    const _ = Sa(B.floating, u.x), b = Sa(B.floating, u.y);
    return l ? {
      ...$,
      transform: "translate(" + _ + "px, " + b + "px)",
      ...Jl(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: b
    };
  }, [n, l, B.floating, u.x, u.y]);
  return p.useMemo(() => ({
    ...u,
    update: V,
    refs: H,
    elements: B,
    floatingStyles: G
  }), [u, V, H, B, G]);
}
const Zv = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? ba({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ba({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Jv = (e, t) => ({
  ...Hv(e),
  options: [e, t]
}), ex = (e, t) => ({
  ...jv(e),
  options: [e, t]
}), tx = (e, t) => ({
  ...qv(e),
  options: [e, t]
}), nx = (e, t) => ({
  ...Uv(e),
  options: [e, t]
}), rx = (e, t) => ({
  ...Wv(e),
  options: [e, t]
}), ox = (e, t) => ({
  ...Gv(e),
  options: [e, t]
}), ix = (e, t) => ({
  ...Zv(e),
  options: [e, t]
});
var ax = "Arrow", es = p.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ m(
    ne.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
es.displayName = ax;
var lx = es;
function ts(e) {
  const [t, n] = p.useState(void 0);
  return ve(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, l;
        if ("borderBoxSize" in i) {
          const s = i.borderBoxSize, c = Array.isArray(s) ? s[0] : s;
          a = c.inlineSize, l = c.blockSize;
        } else
          a = e.offsetWidth, l = e.offsetHeight;
        n({ width: a, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Uo = "Popper", [ns, Kt] = Ye(Uo), [sx, rs] = ns(Uo), os = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = p.useState(null);
  return /* @__PURE__ */ m(sx, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
os.displayName = Uo;
var is = "PopperAnchor", as = p.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = rs(is, n), a = p.useRef(null), l = le(t, a), s = p.useRef(null);
    return p.useEffect(() => {
      const c = s.current;
      s.current = (r == null ? void 0 : r.current) || a.current, c !== s.current && i.onAnchorChange(s.current);
    }), r ? null : /* @__PURE__ */ m(ne.div, { ...o, ref: l });
  }
);
as.displayName = is;
var Wo = "PopperContent", [cx, ux] = ns(Wo), ls = p.forwardRef(
  (e, t) => {
    var U, X, re, J, oe, ce;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: s = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: f = "optimized",
      onPlaced: y,
      ...g
    } = e, v = rs(Wo, n), [x, C] = p.useState(null), w = le(t, (we) => C(we)), [E, R] = p.useState(null), k = ts(E), N = (k == null ? void 0 : k.width) ?? 0, O = (k == null ? void 0 : k.height) ?? 0, D = r + (i !== "center" ? "-" + i : ""), z = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, T = Array.isArray(c) ? c : [c], A = T.length > 0, V = {
      padding: z,
      boundary: T.filter(fx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: M, floatingStyles: H, placement: B, isPositioned: G, middlewareData: $ } = Qv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...we) => Vv(...we, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Jv({ mainAxis: o + O, alignmentAxis: a }),
        s && ex({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? tx() : void 0,
          ...V
        }),
        s && nx({ ...V }),
        rx({
          ...V,
          apply: ({ elements: we, rects: Ie, availableWidth: it, availableHeight: at }) => {
            const { width: lt, height: xr } = Ie.reference, yt = we.floating.style;
            yt.setProperty("--radix-popper-available-width", `${it}px`), yt.setProperty("--radix-popper-available-height", `${at}px`), yt.setProperty("--radix-popper-anchor-width", `${lt}px`), yt.setProperty("--radix-popper-anchor-height", `${xr}px`);
          }
        }),
        E && ix({ element: E, padding: l }),
        px({ arrowWidth: N, arrowHeight: O }),
        h && ox({ strategy: "referenceHidden", ...V })
      ]
    }), [_, b] = us(B), K = qe(y);
    ve(() => {
      G && (K == null || K());
    }, [G, K]);
    const W = (U = $.arrow) == null ? void 0 : U.x, S = (X = $.arrow) == null ? void 0 : X.y, ue = ((re = $.arrow) == null ? void 0 : re.centerOffset) !== 0, [me, ee] = p.useState();
    return ve(() => {
      x && ee(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ m(
      "div",
      {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: G ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (J = $.transformOrigin) == null ? void 0 : J.x,
            (oe = $.transformOrigin) == null ? void 0 : oe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ce = $.hide) == null ? void 0 : ce.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          cx,
          {
            scope: n,
            placedSide: _,
            onArrowChange: R,
            arrowX: W,
            arrowY: S,
            shouldHideArrow: ue,
            children: /* @__PURE__ */ m(
              ne.div,
              {
                "data-side": _,
                "data-align": b,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ls.displayName = Wo;
var ss = "PopperArrow", dx = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, cs = p.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = ux(ss, r), a = dx[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ m(
          lx,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
cs.displayName = ss;
function fx(e) {
  return e !== null;
}
var px = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, x, C;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, l = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, u] = us(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + l / 2, f = (((C = o.arrow) == null ? void 0 : C.y) ?? 0) + s / 2;
    let y = "", g = "";
    return c === "bottom" ? (y = a ? d : `${h}px`, g = `${-s}px`) : c === "top" ? (y = a ? d : `${h}px`, g = `${r.floating.height + s}px`) : c === "right" ? (y = `${-s}px`, g = a ? d : `${f}px`) : c === "left" && (y = `${r.floating.width + s}px`, g = a ? d : `${f}px`), { data: { x: y, y: g } };
  }
});
function us(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Go = os, qo = as, Ko = ls, Yo = cs, hx = "Portal", or = p.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = p.useState(!1);
  ve(() => i(!0), []);
  const a = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return a ? Rd.createPortal(/* @__PURE__ */ m(ne.div, { ...r, ref: t }), a) : null;
});
or.displayName = hx;
function mx(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var rt = (e) => {
  const { present: t, children: n } = e, r = gx(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), i = le(r.ref, yx(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: i }) : null;
};
rt.displayName = "Presence";
function gx(e) {
  const [t, n] = p.useState(), r = p.useRef(null), o = p.useRef(e), i = p.useRef("none"), a = e ? "mounted" : "unmounted", [l, s] = mx(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return p.useEffect(() => {
    const c = kn(r.current);
    i.current = l === "mounted" ? c : "none";
  }, [l]), ve(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const h = i.current, f = kn(c);
      e ? s("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? s("UNMOUNT") : s(u && h !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), ve(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, d = (f) => {
        const g = kn(r.current).includes(CSS.escape(f.animationName));
        if (f.target === t && g && (s("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (f) => {
        f.target === t && (i.current = kn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: p.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function kn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function yx(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var vx = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function xx(e) {
  const t = ({ children: n }) => /* @__PURE__ */ m(Ce, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = vx, t;
}
var wx = p[" useInsertionEffect ".trim().toString()] || ve;
function Ct({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, a] = bx({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, s = l ? e : o;
  {
    const u = p.useRef(e !== void 0);
    p.useEffect(() => {
      const d = u.current;
      d !== l && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, r]);
  }
  const c = p.useCallback(
    (u) => {
      var d;
      if (l) {
        const h = Sx(u) ? u(e) : u;
        h !== e && ((d = a.current) == null || d.call(a, h));
      } else
        i(u);
    },
    [l, e, i, a]
  );
  return [s, c];
}
function bx({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = p.useState(e), o = p.useRef(n), i = p.useRef(t);
  return wx(() => {
    i.current = t;
  }, [t]), p.useEffect(() => {
    var a;
    o.current !== n && ((a = i.current) == null || a.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Sx(e) {
  return typeof e == "function";
}
var ds = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Cx = "VisuallyHidden", fs = p.forwardRef(
  (e, t) => /* @__PURE__ */ m(
    ne.span,
    {
      ...e,
      ref: t,
      style: { ...ds, ...e.style }
    }
  )
);
fs.displayName = Cx;
var kx = fs, [ir] = Ye("Tooltip", [
  Kt
]), ar = Kt(), ps = "TooltipProvider", Ex = 700, lo = "tooltip.open", [Nx, Xo] = ir(ps), hs = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Ex,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = p.useRef(!0), l = p.useRef(!1), s = p.useRef(0);
  return p.useEffect(() => {
    const c = s.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ m(
    Nx,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: p.useCallback(() => {
        window.clearTimeout(s.current), a.current = !1;
      }, []),
      onClose: p.useCallback(() => {
        window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: p.useCallback((c) => {
        l.current = c;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
hs.displayName = ps;
var un = "Tooltip", [Rx, lr] = ir(un), ms = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: l
  } = e, s = Xo(un, e.__scopeTooltip), c = ar(t), [u, d] = p.useState(null), h = Ue(), f = p.useRef(0), y = a ?? s.disableHoverableContent, g = l ?? s.delayDuration, v = p.useRef(!1), [x, C] = Ct({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (N) => {
      N ? (s.onOpen(), document.dispatchEvent(new CustomEvent(lo))) : s.onClose(), i == null || i(N);
    },
    caller: un
  }), w = p.useMemo(() => x ? v.current ? "delayed-open" : "instant-open" : "closed", [x]), E = p.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, v.current = !1, C(!0);
  }, [C]), R = p.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, C(!1);
  }, [C]), k = p.useCallback(() => {
    window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      v.current = !0, C(!0), f.current = 0;
    }, g);
  }, [g, C]);
  return p.useEffect(() => () => {
    f.current && (window.clearTimeout(f.current), f.current = 0);
  }, []), /* @__PURE__ */ m(Go, { ...c, children: /* @__PURE__ */ m(
    Rx,
    {
      scope: t,
      contentId: h,
      open: x,
      stateAttribute: w,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: p.useCallback(() => {
        s.isOpenDelayedRef.current ? k() : E();
      }, [s.isOpenDelayedRef, k, E]),
      onTriggerLeave: p.useCallback(() => {
        y ? R() : (window.clearTimeout(f.current), f.current = 0);
      }, [R, y]),
      onOpen: E,
      onClose: R,
      disableHoverableContent: y,
      children: n
    }
  ) });
};
ms.displayName = un;
var so = "TooltipTrigger", gs = p.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = lr(so, n), i = Xo(so, n), a = ar(n), l = p.useRef(null), s = le(t, l, o.onTriggerChange), c = p.useRef(!1), u = p.useRef(!1), d = p.useCallback(() => c.current = !1, []);
    return p.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ m(qo, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      ne.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: s,
        onPointerMove: j(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: j(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: j(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: j(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: j(e.onBlur, o.onClose),
        onClick: j(e.onClick, o.onClose)
      }
    ) });
  }
);
gs.displayName = so;
var Px = "TooltipPortal", [hC, Ax] = ir(Px, {
  forceMount: void 0
}), Ht = "TooltipContent", ys = p.forwardRef(
  (e, t) => {
    const n = Ax(Ht, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, a = lr(Ht, e.__scopeTooltip);
    return /* @__PURE__ */ m(rt, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ m(vs, { side: o, ...i, ref: t }) : /* @__PURE__ */ m(Tx, { side: o, ...i, ref: t }) });
  }
), Tx = p.forwardRef((e, t) => {
  const n = lr(Ht, e.__scopeTooltip), r = Xo(Ht, e.__scopeTooltip), o = p.useRef(null), i = le(t, o), [a, l] = p.useState(null), { trigger: s, onClose: c } = n, u = o.current, { onPointerInTransitChange: d } = r, h = p.useCallback(() => {
    l(null), d(!1);
  }, [d]), f = p.useCallback(
    (y, g) => {
      const v = y.currentTarget, x = { x: y.clientX, y: y.clientY }, C = Ox(x, v.getBoundingClientRect()), w = Lx(x, C), E = Fx(g.getBoundingClientRect()), R = $x([...w, ...E]);
      l(R), d(!0);
    },
    [d]
  );
  return p.useEffect(() => () => h(), [h]), p.useEffect(() => {
    if (s && u) {
      const y = (v) => f(v, u), g = (v) => f(v, s);
      return s.addEventListener("pointerleave", y), u.addEventListener("pointerleave", g), () => {
        s.removeEventListener("pointerleave", y), u.removeEventListener("pointerleave", g);
      };
    }
  }, [s, u, f, h]), p.useEffect(() => {
    if (a) {
      const y = (g) => {
        const v = g.target, x = { x: g.clientX, y: g.clientY }, C = (s == null ? void 0 : s.contains(v)) || (u == null ? void 0 : u.contains(v)), w = !zx(x, a);
        C ? h() : w && (h(), c());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [s, u, a, c, h]), /* @__PURE__ */ m(vs, { ...e, ref: i });
}), [Ix, Mx] = ir(un, { isInside: !1 }), _x = /* @__PURE__ */ xx("TooltipContent"), vs = p.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...l
    } = e, s = lr(Ht, n), c = ar(n), { onClose: u } = s;
    return p.useEffect(() => (document.addEventListener(lo, u), () => document.removeEventListener(lo, u)), [u]), p.useEffect(() => {
      if (s.trigger) {
        const d = (h) => {
          const f = h.target;
          f != null && f.contains(s.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [s.trigger, u]), /* @__PURE__ */ m(
      mn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ F(
          Ko,
          {
            "data-state": s.stateAttribute,
            ...c,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ m(_x, { children: r }),
              /* @__PURE__ */ m(Ix, { scope: n, isInside: !0, children: /* @__PURE__ */ m(kx, { id: s.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
ys.displayName = Ht;
var xs = "TooltipArrow", Dx = p.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ar(n);
    return Mx(
      xs,
      n
    ).isInside ? null : /* @__PURE__ */ m(Yo, { ...o, ...r, ref: t });
  }
);
Dx.displayName = xs;
function Ox(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Lx(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function Fx(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function zx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i], s = t[a], c = l.x, u = l.y, d = s.x, h = s.y;
    u > r != h > r && n < (d - c) * (r - u) / (h - u) + c && (o = !o);
  }
  return o;
}
function $x(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Bx(t);
}
function Bx(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], a = n[n.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Vx = hs, Hx = ms, jx = gs, ws = ys;
const Ux = Vx, Wx = Hx, Gx = jx, bs = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(
  ws,
  {
    ref: r,
    sideOffset: t,
    className: te(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
bs.displayName = ws.displayName;
const qx = [
  { icon: wg, key: "bold", before: "**", after: "**", placeholder: "bold text" },
  { icon: _g, key: "italic", before: "*", after: "*", placeholder: "italic text" },
  { icon: Ag, key: "heading1", before: "# ", after: "", placeholder: "Heading" },
  { icon: Tg, key: "heading2", before: "## ", after: "", placeholder: "Heading" },
  { icon: Ig, key: "heading3", before: "### ", after: "", placeholder: "Heading" },
  { icon: Lg, key: "list", before: "- ", after: "", placeholder: "List item" },
  { icon: Og, key: "orderedList", before: "1. ", after: "", placeholder: "List item" },
  { icon: kg, key: "code", before: "`", after: "`", placeholder: "code" },
  { icon: $g, key: "quote", before: "> ", after: "", placeholder: "Quote" },
  { icon: Dg, key: "link", before: "[", after: "](url)", placeholder: "link text" },
  { icon: Fg, key: "divider", before: `
---
`, after: "", placeholder: "" }
];
function Kx({ onInsert: e, labels: t = {} }) {
  const n = (r) => t[r] || r.charAt(0).toUpperCase() + r.slice(1);
  return /* @__PURE__ */ m(Ux, { delayDuration: 300, children: /* @__PURE__ */ m("div", { className: "flex items-center gap-0.5 p-1 border-b border-border bg-muted/30 rounded-t-xl flex-wrap", children: qx.map((r, o) => /* @__PURE__ */ F(Wx, { children: [
    /* @__PURE__ */ m(Gx, { asChild: !0, children: /* @__PURE__ */ m(
      _e,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary",
        onClick: () => e(r.before, r.after, r.placeholder),
        children: /* @__PURE__ */ m(r.icon, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ m(bs, { side: "bottom", className: "text-xs", children: n(r.key) })
  ] }, `${r.key}-${o}`)) }) });
}
function Ss(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var sr = "Switch", [Yx] = Ye(sr), [Xx, Qx] = Yx(sr), Cs = p.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: l,
      value: s = "on",
      onCheckedChange: c,
      form: u,
      ...d
    } = e, [h, f] = p.useState(null), y = le(t, (w) => f(w)), g = p.useRef(!1), v = h ? u || !!h.closest("form") : !0, [x, C] = Ct({
      prop: o,
      defaultProp: i ?? !1,
      onChange: c,
      caller: sr
    });
    return /* @__PURE__ */ F(Xx, { scope: n, checked: x, disabled: l, children: [
      /* @__PURE__ */ m(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": a,
          "data-state": Rs(x),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: s,
          ...d,
          ref: y,
          onClick: j(e.onClick, (w) => {
            C((E) => !E), v && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ m(
        Ns,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: s,
          checked: x,
          required: a,
          disabled: l,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Cs.displayName = sr;
var ks = "SwitchThumb", Es = p.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Qx(ks, n);
    return /* @__PURE__ */ m(
      ne.span,
      {
        "data-state": Rs(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Es.displayName = ks;
var Zx = "SwitchBubbleInput", Ns = p.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, i) => {
    const a = p.useRef(null), l = le(a, i), s = Ss(n), c = ts(t);
    return p.useEffect(() => {
      const u = a.current;
      if (!u) return;
      const d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (s !== n && f) {
        const y = new Event("click", { bubbles: r });
        f.call(u, n), u.dispatchEvent(y);
      }
    }, [s, n, r]), /* @__PURE__ */ m(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: l,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ns.displayName = Zx;
function Rs(e) {
  return e ? "checked" : "unchecked";
}
var Ps = Cs, Jx = Es;
const As = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ps,
  {
    className: te(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ m(
      Jx,
      {
        className: te(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
As.displayName = Ps.displayName;
var ew = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], tw = ew.reduce((e, t) => {
  const n = /* @__PURE__ */ Il(`Primitive.${t}`), r = p.forwardRef((o, i) => {
    const { asChild: a, ...l } = o, s = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(s, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), nw = "Label", Ts = p.forwardRef((e, t) => /* @__PURE__ */ m(
  tw.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ts.displayName = nw;
var Is = Ts;
const rw = Dl("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Mn = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(Is, { ref: n, className: te(rw(), e), ...t }));
Mn.displayName = Is.displayName;
function Ca(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  const t = /* @__PURE__ */ ow(e), n = p.forwardRef((r, o) => {
    const { children: i, ...a } = r, l = p.Children.toArray(i), s = l.find(aw);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: p.isValidElement(c) ? p.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ow(e) {
  const t = p.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (p.isValidElement(o)) {
      const a = sw(o), l = lw(i, o.props);
      return o.type !== p.Fragment && (l.ref = r ? nt(r, a) : a), p.cloneElement(o, l);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var iw = Symbol("radix.slottable");
function aw(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === iw;
}
function lw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const s = i(...l);
      return o(...l), s;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function sw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Qo(e) {
  const t = e + "CollectionProvider", [n, r] = Ye(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (g) => {
    const { scope: v, children: x } = g, C = xt.useRef(null), w = xt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(o, { scope: v, itemMap: w, collectionRef: C, children: x });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", s = /* @__PURE__ */ ka(l), c = xt.forwardRef(
    (g, v) => {
      const { scope: x, children: C } = g, w = i(l, x), E = le(v, w.collectionRef);
      return /* @__PURE__ */ m(s, { ref: E, children: C });
    }
  );
  c.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", h = /* @__PURE__ */ ka(u), f = xt.forwardRef(
    (g, v) => {
      const { scope: x, children: C, ...w } = g, E = xt.useRef(null), R = le(v, E), k = i(u, x);
      return xt.useEffect(() => (k.itemMap.set(E, { ref: E, ...w }), () => void k.itemMap.delete(E))), /* @__PURE__ */ m(h, { [d]: "", ref: R, children: C });
    }
  );
  f.displayName = u;
  function y(g) {
    const v = i(e + "CollectionConsumer", g);
    return xt.useCallback(() => {
      const C = v.collectionRef.current;
      if (!C) return [];
      const w = Array.from(C.querySelectorAll(`[${d}]`));
      return Array.from(v.itemMap.values()).sort(
        (k, N) => w.indexOf(k.ref.current) - w.indexOf(N.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: f },
    y,
    r
  ];
}
var cw = p.createContext(void 0);
function Zo(e) {
  const t = p.useContext(cw);
  return e || t || "ltr";
}
var Dr = 0;
function Jo() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ea()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ea()), Dr++, () => {
      Dr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Dr--;
    };
  }, []);
}
function Ea() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Or = "focusScope.autoFocusOnMount", Lr = "focusScope.autoFocusOnUnmount", Na = { bubbles: !1, cancelable: !0 }, uw = "FocusScope", cr = p.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [l, s] = p.useState(null), c = qe(o), u = qe(i), d = p.useRef(null), h = le(t, (g) => s(g)), f = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (r) {
      let g = function(w) {
        if (f.paused || !l) return;
        const E = w.target;
        l.contains(E) ? d.current = E : dt(d.current, { select: !0 });
      }, v = function(w) {
        if (f.paused || !l) return;
        const E = w.relatedTarget;
        E !== null && (l.contains(E) || dt(d.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const R of w)
            R.removedNodes.length > 0 && dt(l);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", v);
      const C = new MutationObserver(x);
      return l && C.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", v), C.disconnect();
      };
    }
  }, [r, l, f.paused]), p.useEffect(() => {
    if (l) {
      Pa.add(f);
      const g = document.activeElement;
      if (!l.contains(g)) {
        const x = new CustomEvent(Or, Na);
        l.addEventListener(Or, c), l.dispatchEvent(x), x.defaultPrevented || (dw(gw(Ms(l)), { select: !0 }), document.activeElement === g && dt(l));
      }
      return () => {
        l.removeEventListener(Or, c), setTimeout(() => {
          const x = new CustomEvent(Lr, Na);
          l.addEventListener(Lr, u), l.dispatchEvent(x), x.defaultPrevented || dt(g ?? document.body, { select: !0 }), l.removeEventListener(Lr, u), Pa.remove(f);
        }, 0);
      };
    }
  }, [l, c, u, f]);
  const y = p.useCallback(
    (g) => {
      if (!n && !r || f.paused) return;
      const v = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, x = document.activeElement;
      if (v && x) {
        const C = g.currentTarget, [w, E] = fw(C);
        w && E ? !g.shiftKey && x === E ? (g.preventDefault(), n && dt(w, { select: !0 })) : g.shiftKey && x === w && (g.preventDefault(), n && dt(E, { select: !0 })) : x === C && g.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ m(ne.div, { tabIndex: -1, ...a, ref: h, onKeyDown: y });
});
cr.displayName = uw;
function dw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (dt(r, { select: t }), document.activeElement !== n) return;
}
function fw(e) {
  const t = Ms(e), n = Ra(t, e), r = Ra(t.reverse(), e);
  return [n, r];
}
function Ms(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ra(e, t) {
  for (const n of e)
    if (!pw(n, { upTo: t })) return n;
}
function pw(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function hw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && hw(e) && t && e.select();
  }
}
var Pa = mw();
function mw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Aa(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Aa(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Aa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function gw(e) {
  return e.filter((t) => t.tagName !== "A");
}
// @__NO_SIDE_EFFECTS__
function yw(e) {
  const t = /* @__PURE__ */ vw(e), n = p.forwardRef((r, o) => {
    const { children: i, ...a } = r, l = p.Children.toArray(i), s = l.find(ww);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: p.isValidElement(c) ? p.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function vw(e) {
  const t = p.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (p.isValidElement(o)) {
      const a = Sw(o), l = bw(i, o.props);
      return o.type !== p.Fragment && (l.ref = r ? nt(r, a) : a), p.cloneElement(o, l);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xw = Symbol("radix.slottable");
function ww(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xw;
}
function bw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const s = i(...l);
      return o(...l), s;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Sw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mt = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Nn = {}, Fr = 0, _s = function(e) {
  return e && (e.host || _s(e.parentNode));
}, kw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = _s(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ew = function(e, t, n, r) {
  var o = kw(t, Array.isArray(e) ? e : [e]);
  Nn[n] || (Nn[n] = /* @__PURE__ */ new WeakMap());
  var i = Nn[n], a = [], l = /* @__PURE__ */ new Set(), s = new Set(o), c = function(d) {
    !d || l.has(d) || (l.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (l.has(h))
        u(h);
      else
        try {
          var f = h.getAttribute(r), y = f !== null && f !== "false", g = (Mt.get(h) || 0) + 1, v = (i.get(h) || 0) + 1;
          Mt.set(h, g), i.set(h, v), a.push(h), g === 1 && y && En.set(h, !0), v === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return u(t), l.clear(), Fr++, function() {
    a.forEach(function(d) {
      var h = Mt.get(d) - 1, f = i.get(d) - 1;
      Mt.set(d, h), i.set(d, f), h || (En.has(d) || d.removeAttribute(r), En.delete(d)), f || d.removeAttribute(n);
    }), Fr--, Fr || (Mt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Nn = {});
  };
}, ei = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Cw(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ew(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, He = function() {
  return He = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, He.apply(this, arguments);
};
function Ds(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Nw(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var _n = "right-scroll-bar-position", Dn = "width-before-scroll-bar", Rw = "with-scroll-bars-hidden", Pw = "--removed-body-scroll-bar-size";
function zr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Aw(e, t) {
  var n = ye(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Tw = typeof window < "u" ? p.useLayoutEffect : p.useEffect, Ta = /* @__PURE__ */ new WeakMap();
function Iw(e, t) {
  var n = Aw(null, function(r) {
    return e.forEach(function(o) {
      return zr(o, r);
    });
  });
  return Tw(function() {
    var r = Ta.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(l) {
        i.has(l) || zr(l, null);
      }), i.forEach(function(l) {
        o.has(l) || zr(l, a);
      });
    }
    Ta.set(n, e);
  }, [e]), n;
}
function Mw(e) {
  return e;
}
function _w(e, t) {
  t === void 0 && (t = Mw);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(i), a = n;
      }
      var s = function() {
        var u = a;
        a = [], u.forEach(i);
      }, c = function() {
        return Promise.resolve().then(s);
      };
      c(), n = {
        push: function(u) {
          a.push(u), c();
        },
        filter: function(u) {
          return a = a.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Dw(e) {
  e === void 0 && (e = {});
  var t = _w(null);
  return t.options = He({ async: !0, ssr: !1 }, e), t;
}
var Os = function(e) {
  var t = e.sideCar, n = Ds(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, He({}, n));
};
Os.isSideCarExport = !0;
function Ow(e, t) {
  return e.useMedium(t), Os;
}
var Ls = Dw(), $r = function() {
}, ur = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: $r,
    onWheelCapture: $r,
    onTouchMoveCapture: $r
  }), o = r[0], i = r[1], a = e.forwardProps, l = e.children, s = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, f = e.noRelative, y = e.noIsolation, g = e.inert, v = e.allowPinchZoom, x = e.as, C = x === void 0 ? "div" : x, w = e.gapMode, E = Ds(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, k = Iw([n, t]), N = He(He({}, E), o);
  return p.createElement(
    p.Fragment,
    null,
    u && p.createElement(R, { sideCar: Ls, removeScrollBar: c, shards: d, noRelative: f, noIsolation: y, inert: g, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    a ? p.cloneElement(p.Children.only(l), He(He({}, N), { ref: k })) : p.createElement(C, He({}, N, { className: s, ref: k }), l)
  );
});
ur.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ur.classNames = {
  fullWidth: Dn,
  zeroRight: _n
};
var Lw = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Fw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Lw();
  return t && e.setAttribute("nonce", t), e;
}
function zw(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function $w(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Fw()) && (zw(t, n), $w(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Vw = function() {
  var e = Bw();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Fs = function() {
  var e = Vw(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Hw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Br = function(e) {
  return parseInt(e || "", 10) || 0;
}, jw = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Br(n), Br(r), Br(o)];
}, Uw = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Hw;
  var t = jw(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ww = Fs(), $t = "data-scroll-locked", Gw = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Rw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat($t, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(_n, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Dn, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(_n, " .").concat(_n, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Dn, " .").concat(Dn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat($t, `] {
    `).concat(Pw, ": ").concat(l, `px;
  }
`);
}, Ia = function() {
  var e = parseInt(document.body.getAttribute($t) || "0", 10);
  return isFinite(e) ? e : 0;
}, qw = function() {
  p.useEffect(function() {
    return document.body.setAttribute($t, (Ia() + 1).toString()), function() {
      var e = Ia() - 1;
      e <= 0 ? document.body.removeAttribute($t) : document.body.setAttribute($t, e.toString());
    };
  }, []);
}, Kw = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  qw();
  var i = p.useMemo(function() {
    return Uw(o);
  }, [o]);
  return p.createElement(Ww, { styles: Gw(i, !t, o, n ? "" : "!important") });
}, co = !1;
if (typeof window < "u")
  try {
    var Rn = Object.defineProperty({}, "passive", {
      get: function() {
        return co = !0, !0;
      }
    });
    window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
  } catch {
    co = !1;
  }
var _t = co ? { passive: !1 } : !1, Yw = function(e) {
  return e.tagName === "TEXTAREA";
}, zs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Yw(e) && n[t] === "visible")
  );
}, Xw = function(e) {
  return zs(e, "overflowY");
}, Qw = function(e) {
  return zs(e, "overflowX");
}, Ma = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = $s(e, r);
    if (o) {
      var i = Bs(e, r), a = i[1], l = i[2];
      if (a > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Zw = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Jw = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, $s = function(e, t) {
  return e === "v" ? Xw(t) : Qw(t);
}, Bs = function(e, t) {
  return e === "v" ? Zw(t) : Jw(t);
}, eb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, tb = function(e, t, n, r, o) {
  var i = eb(e, window.getComputedStyle(t).direction), a = i * r, l = n.target, s = t.contains(l), c = !1, u = a > 0, d = 0, h = 0;
  do {
    if (!l)
      break;
    var f = Bs(e, l), y = f[0], g = f[1], v = f[2], x = g - v - i * y;
    (y || x) && $s(e, l) && (d += x, h += y);
    var C = l.parentNode;
    l = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !s && l !== document.body || // self content
    s && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(h) < 1) && (c = !0), c;
}, Pn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _a = function(e) {
  return [e.deltaX, e.deltaY];
}, Da = function(e) {
  return e && "current" in e ? e.current : e;
}, nb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, rb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ob = 0, Dt = [];
function ib(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(ob++)[0], i = p.useState(Fs)[0], a = p.useRef(e);
  p.useEffect(function() {
    a.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Nw([e.lockRef.current], (e.shards || []).map(Da), !0).filter(Boolean);
      return g.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = p.useCallback(function(g, v) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !a.current.allowPinchZoom;
    var x = Pn(g), C = n.current, w = "deltaX" in g ? g.deltaX : C[0] - x[0], E = "deltaY" in g ? g.deltaY : C[1] - x[1], R, k = g.target, N = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in g && N === "h" && k.type === "range")
      return !1;
    var O = window.getSelection(), D = O && O.anchorNode, z = D ? D === k || D.contains(k) : !1;
    if (z)
      return !1;
    var T = Ma(N, k);
    if (!T)
      return !0;
    if (T ? R = N : (R = N === "v" ? "h" : "v", T = Ma(N, k)), !T)
      return !1;
    if (!r.current && "changedTouches" in g && (w || E) && (r.current = R), !R)
      return !0;
    var A = r.current || R;
    return tb(A, v, g, A === "h" ? w : E);
  }, []), s = p.useCallback(function(g) {
    var v = g;
    if (!(!Dt.length || Dt[Dt.length - 1] !== i)) {
      var x = "deltaY" in v ? _a(v) : Pn(v), C = t.current.filter(function(R) {
        return R.name === v.type && (R.target === v.target || v.target === R.shadowParent) && nb(R.delta, x);
      })[0];
      if (C && C.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!C) {
        var w = (a.current.shards || []).map(Da).filter(Boolean).filter(function(R) {
          return R.contains(v.target);
        }), E = w.length > 0 ? l(v, w[0]) : !a.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = p.useCallback(function(g, v, x, C) {
    var w = { name: g, delta: v, target: x, should: C, shadowParent: ab(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), u = p.useCallback(function(g) {
    n.current = Pn(g), r.current = void 0;
  }, []), d = p.useCallback(function(g) {
    c(g.type, _a(g), g.target, l(g, e.lockRef.current));
  }, []), h = p.useCallback(function(g) {
    c(g.type, Pn(g), g.target, l(g, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return Dt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", s, _t), document.addEventListener("touchmove", s, _t), document.addEventListener("touchstart", u, _t), function() {
      Dt = Dt.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", s, _t), document.removeEventListener("touchmove", s, _t), document.removeEventListener("touchstart", u, _t);
    };
  }, []);
  var f = e.removeScrollBar, y = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    y ? p.createElement(i, { styles: rb(o) }) : null,
    f ? p.createElement(Kw, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ab(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const lb = Ow(Ls, ib);
var dr = p.forwardRef(function(e, t) {
  return p.createElement(ur, He({}, e, { ref: t, sideCar: lb }));
});
dr.classNames = ur.classNames;
var sb = [" ", "Enter", "ArrowUp", "ArrowDown"], cb = [" ", "Enter"], kt = "Select", [fr, pr, ub] = Qo(kt), [Yt] = Ye(kt, [
  ub,
  Kt
]), hr = Kt(), [db, mt] = Yt(kt), [fb, pb] = Yt(kt), Vs = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: l,
    onValueChange: s,
    dir: c,
    name: u,
    autoComplete: d,
    disabled: h,
    required: f,
    form: y
  } = e, g = hr(t), [v, x] = p.useState(null), [C, w] = p.useState(null), [E, R] = p.useState(!1), k = Zo(c), [N, O] = Ct({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: kt
  }), [D, z] = Ct({
    prop: a,
    defaultProp: l,
    onChange: s,
    caller: kt
  }), T = p.useRef(null), A = v ? y || !!v.closest("form") : !0, [V, M] = p.useState(/* @__PURE__ */ new Set()), H = Array.from(V).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ m(Go, { ...g, children: /* @__PURE__ */ F(
    db,
    {
      required: f,
      scope: t,
      trigger: v,
      onTriggerChange: x,
      valueNode: C,
      onValueNodeChange: w,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: R,
      contentId: Ue(),
      value: D,
      onValueChange: z,
      open: N,
      onOpenChange: O,
      dir: k,
      triggerPointerDownPosRef: T,
      disabled: h,
      children: [
        /* @__PURE__ */ m(fr.Provider, { scope: t, children: /* @__PURE__ */ m(
          fb,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: p.useCallback((B) => {
              M((G) => new Set(G).add(B));
            }, []),
            onNativeOptionRemove: p.useCallback((B) => {
              M((G) => {
                const $ = new Set(G);
                return $.delete(B), $;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ F(
          dc,
          {
            "aria-hidden": !0,
            required: f,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: D,
            onChange: (B) => z(B.target.value),
            disabled: h,
            form: y,
            children: [
              D === void 0 ? /* @__PURE__ */ m("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Vs.displayName = kt;
var Hs = "SelectTrigger", js = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = hr(n), a = mt(Hs, n), l = a.disabled || r, s = le(t, a.onTriggerChange), c = pr(n), u = p.useRef("touch"), [d, h, f] = pc((g) => {
      const v = c().filter((w) => !w.disabled), x = v.find((w) => w.value === a.value), C = hc(v, g, x);
      C !== void 0 && a.onValueChange(C.value);
    }), y = (g) => {
      l || (a.onOpenChange(!0), f()), g && (a.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ m(qo, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      ne.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": fc(a.value) ? "" : void 0,
        ...o,
        ref: s,
        onClick: j(o.onClick, (g) => {
          g.currentTarget.focus(), u.current !== "mouse" && y(g);
        }),
        onPointerDown: j(o.onPointerDown, (g) => {
          u.current = g.pointerType;
          const v = g.target;
          v.hasPointerCapture(g.pointerId) && v.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (y(g), g.preventDefault());
        }),
        onKeyDown: j(o.onKeyDown, (g) => {
          const v = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && h(g.key), !(v && g.key === " ") && sb.includes(g.key) && (y(), g.preventDefault());
        })
      }
    ) });
  }
);
js.displayName = Hs;
var Us = "SelectValue", Ws = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...l } = e, s = mt(Us, n), { onValueNodeHasChildrenChange: c } = s, u = i !== void 0, d = le(t, s.onValueNodeChange);
    return ve(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ m(
      ne.span,
      {
        ...l,
        ref: d,
        style: { pointerEvents: "none" },
        children: fc(s.value) ? /* @__PURE__ */ m(Ce, { children: a }) : i
      }
    );
  }
);
Ws.displayName = Us;
var hb = "SelectIcon", Gs = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ m(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Gs.displayName = hb;
var mb = "SelectPortal", qs = (e) => /* @__PURE__ */ m(or, { asChild: !0, ...e });
qs.displayName = mb;
var Et = "SelectContent", Ks = p.forwardRef(
  (e, t) => {
    const n = mt(Et, e.__scopeSelect), [r, o] = p.useState();
    if (ve(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Yn.createPortal(
        /* @__PURE__ */ m(Ys, { scope: e.__scopeSelect, children: /* @__PURE__ */ m(fr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ m(Xs, { ...e, ref: t });
  }
);
Ks.displayName = Et;
var Le = 10, [Ys, gt] = Yt(Et), gb = "SelectContentImpl", yb = /* @__PURE__ */ yw("SelectContent.RemoveScroll"), Xs = p.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: l,
      sideOffset: s,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: f,
      sticky: y,
      hideWhenDetached: g,
      avoidCollisions: v,
      //
      ...x
    } = e, C = mt(Et, n), [w, E] = p.useState(null), [R, k] = p.useState(null), N = le(t, (U) => E(U)), [O, D] = p.useState(null), [z, T] = p.useState(
      null
    ), A = pr(n), [V, M] = p.useState(!1), H = p.useRef(!1);
    p.useEffect(() => {
      if (w) return ei(w);
    }, [w]), Jo();
    const B = p.useCallback(
      (U) => {
        const [X, ...re] = A().map((ce) => ce.ref.current), [J] = re.slice(-1), oe = document.activeElement;
        for (const ce of U)
          if (ce === oe || (ce == null || ce.scrollIntoView({ block: "nearest" }), ce === X && R && (R.scrollTop = 0), ce === J && R && (R.scrollTop = R.scrollHeight), ce == null || ce.focus(), document.activeElement !== oe)) return;
      },
      [A, R]
    ), G = p.useCallback(
      () => B([O, w]),
      [B, O, w]
    );
    p.useEffect(() => {
      V && G();
    }, [V, G]);
    const { onOpenChange: $, triggerPointerDownPosRef: _ } = C;
    p.useEffect(() => {
      if (w) {
        let U = { x: 0, y: 0 };
        const X = (J) => {
          var oe, ce;
          U = {
            x: Math.abs(Math.round(J.pageX) - (((oe = _.current) == null ? void 0 : oe.x) ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (((ce = _.current) == null ? void 0 : ce.y) ?? 0))
          };
        }, re = (J) => {
          U.x <= 10 && U.y <= 10 ? J.preventDefault() : w.contains(J.target) || $(!1), document.removeEventListener("pointermove", X), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [w, $, _]), p.useEffect(() => {
      const U = () => $(!1);
      return window.addEventListener("blur", U), window.addEventListener("resize", U), () => {
        window.removeEventListener("blur", U), window.removeEventListener("resize", U);
      };
    }, [$]);
    const [b, K] = pc((U) => {
      const X = A().filter((oe) => !oe.disabled), re = X.find((oe) => oe.ref.current === document.activeElement), J = hc(X, U, re);
      J && setTimeout(() => J.ref.current.focus());
    }), W = p.useCallback(
      (U, X, re) => {
        const J = !H.current && !re;
        (C.value !== void 0 && C.value === X || J) && (D(U), J && (H.current = !0));
      },
      [C.value]
    ), S = p.useCallback(() => w == null ? void 0 : w.focus(), [w]), ue = p.useCallback(
      (U, X, re) => {
        const J = !H.current && !re;
        (C.value !== void 0 && C.value === X || J) && T(U);
      },
      [C.value]
    ), me = r === "popper" ? uo : Qs, ee = me === uo ? {
      side: l,
      sideOffset: s,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: f,
      sticky: y,
      hideWhenDetached: g,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ m(
      Ys,
      {
        scope: n,
        content: w,
        viewport: R,
        onViewportChange: k,
        itemRefCallback: W,
        selectedItem: O,
        onItemLeave: S,
        itemTextRefCallback: ue,
        focusSelectedItem: G,
        selectedItemText: z,
        position: r,
        isPositioned: V,
        searchRef: b,
        children: /* @__PURE__ */ m(dr, { as: yb, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          cr,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (U) => {
              U.preventDefault();
            },
            onUnmountAutoFocus: j(o, (U) => {
              var X;
              (X = C.trigger) == null || X.focus({ preventScroll: !0 }), U.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              mn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (U) => U.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  me,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (U) => U.preventDefault(),
                    ...x,
                    ...ee,
                    onPlaced: () => M(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: j(x.onKeyDown, (U) => {
                      const X = U.ctrlKey || U.altKey || U.metaKey;
                      if (U.key === "Tab" && U.preventDefault(), !X && U.key.length === 1 && K(U.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key)) {
                        let J = A().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes(U.key) && (J = J.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(U.key)) {
                          const oe = U.target, ce = J.indexOf(oe);
                          J = J.slice(ce + 1);
                        }
                        setTimeout(() => B(J)), U.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Xs.displayName = gb;
var vb = "SelectItemAlignedPosition", Qs = p.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = mt(Et, n), a = gt(Et, n), [l, s] = p.useState(null), [c, u] = p.useState(null), d = le(t, (N) => u(N)), h = pr(n), f = p.useRef(!1), y = p.useRef(!0), { viewport: g, selectedItem: v, selectedItemText: x, focusSelectedItem: C } = a, w = p.useCallback(() => {
    if (i.trigger && i.valueNode && l && c && g && v && x) {
      const N = i.trigger.getBoundingClientRect(), O = c.getBoundingClientRect(), D = i.valueNode.getBoundingClientRect(), z = x.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const oe = z.left - O.left, ce = D.left - oe, we = N.left - ce, Ie = N.width + we, it = Math.max(Ie, O.width), at = window.innerWidth - Le, lt = Ca(ce, [
          Le,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Le, at - it)
        ]);
        l.style.minWidth = Ie + "px", l.style.left = lt + "px";
      } else {
        const oe = O.right - z.right, ce = window.innerWidth - D.right - oe, we = window.innerWidth - N.right - ce, Ie = N.width + we, it = Math.max(Ie, O.width), at = window.innerWidth - Le, lt = Ca(ce, [
          Le,
          Math.max(Le, at - it)
        ]);
        l.style.minWidth = Ie + "px", l.style.right = lt + "px";
      }
      const T = h(), A = window.innerHeight - Le * 2, V = g.scrollHeight, M = window.getComputedStyle(c), H = parseInt(M.borderTopWidth, 10), B = parseInt(M.paddingTop, 10), G = parseInt(M.borderBottomWidth, 10), $ = parseInt(M.paddingBottom, 10), _ = H + B + V + $ + G, b = Math.min(v.offsetHeight * 5, _), K = window.getComputedStyle(g), W = parseInt(K.paddingTop, 10), S = parseInt(K.paddingBottom, 10), ue = N.top + N.height / 2 - Le, me = A - ue, ee = v.offsetHeight / 2, U = v.offsetTop + ee, X = H + B + U, re = _ - X;
      if (X <= ue) {
        const oe = T.length > 0 && v === T[T.length - 1].ref.current;
        l.style.bottom = "0px";
        const ce = c.clientHeight - g.offsetTop - g.offsetHeight, we = Math.max(
          me,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? S : 0) + ce + G
        ), Ie = X + we;
        l.style.height = Ie + "px";
      } else {
        const oe = T.length > 0 && v === T[0].ref.current;
        l.style.top = "0px";
        const we = Math.max(
          ue,
          H + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? W : 0) + ee
        ) + re;
        l.style.height = we + "px", g.scrollTop = X - ue + g.offsetTop;
      }
      l.style.margin = `${Le}px 0`, l.style.minHeight = b + "px", l.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => f.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    l,
    c,
    g,
    v,
    x,
    i.dir,
    r
  ]);
  ve(() => w(), [w]);
  const [E, R] = p.useState();
  ve(() => {
    c && R(window.getComputedStyle(c).zIndex);
  }, [c]);
  const k = p.useCallback(
    (N) => {
      N && y.current === !0 && (w(), C == null || C(), y.current = !1);
    },
    [w, C]
  );
  return /* @__PURE__ */ m(
    wb,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: f,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: s,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ m(
            ne.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Qs.displayName = vb;
var xb = "SelectPopperPosition", uo = p.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Le,
    ...i
  } = e, a = hr(n);
  return /* @__PURE__ */ m(
    Ko,
    {
      ...a,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
uo.displayName = xb;
var [wb, ti] = Yt(Et, {}), fo = "SelectViewport", Zs = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = gt(fo, n), a = ti(fo, n), l = le(t, i.onViewportChange), s = p.useRef(0);
    return /* @__PURE__ */ F(Ce, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(fr.Slot, { scope: n, children: /* @__PURE__ */ m(
        ne.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: j(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && d) {
              const f = Math.abs(s.current - u.scrollTop);
              if (f > 0) {
                const y = window.innerHeight - Le * 2, g = parseFloat(d.style.minHeight), v = parseFloat(d.style.height), x = Math.max(g, v);
                if (x < y) {
                  const C = x + f, w = Math.min(y, C), E = C - w;
                  d.style.height = w + "px", d.style.bottom === "0px" && (u.scrollTop = E > 0 ? E : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            s.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Zs.displayName = fo;
var Js = "SelectGroup", [bb, Sb] = Yt(Js), Cb = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ue();
    return /* @__PURE__ */ m(bb, { scope: n, id: o, children: /* @__PURE__ */ m(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Cb.displayName = Js;
var ec = "SelectLabel", tc = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Sb(ec, n);
    return /* @__PURE__ */ m(ne.div, { id: o.id, ...r, ref: t });
  }
);
tc.displayName = ec;
var Wn = "SelectItem", [kb, nc] = Yt(Wn), rc = p.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, l = mt(Wn, n), s = gt(Wn, n), c = l.value === r, [u, d] = p.useState(i ?? ""), [h, f] = p.useState(!1), y = le(
      t,
      (C) => {
        var w;
        return (w = s.itemRefCallback) == null ? void 0 : w.call(s, C, r, o);
      }
    ), g = Ue(), v = p.useRef("touch"), x = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m(
      kb,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: p.useCallback((C) => {
          d((w) => w || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          fr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ m(
              ne.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: y,
                onFocus: j(a.onFocus, () => f(!0)),
                onBlur: j(a.onBlur, () => f(!1)),
                onClick: j(a.onClick, () => {
                  v.current !== "mouse" && x();
                }),
                onPointerUp: j(a.onPointerUp, () => {
                  v.current === "mouse" && x();
                }),
                onPointerDown: j(a.onPointerDown, (C) => {
                  v.current = C.pointerType;
                }),
                onPointerMove: j(a.onPointerMove, (C) => {
                  var w;
                  v.current = C.pointerType, o ? (w = s.onItemLeave) == null || w.call(s) : v.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: j(a.onPointerLeave, (C) => {
                  var w;
                  C.currentTarget === document.activeElement && ((w = s.onItemLeave) == null || w.call(s));
                }),
                onKeyDown: j(a.onKeyDown, (C) => {
                  var E;
                  ((E = s.searchRef) == null ? void 0 : E.current) !== "" && C.key === " " || (cb.includes(C.key) && x(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
rc.displayName = Wn;
var nn = "SelectItemText", oc = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, a = mt(nn, n), l = gt(nn, n), s = nc(nn, n), c = pb(nn, n), [u, d] = p.useState(null), h = le(
      t,
      (x) => d(x),
      s.onItemTextChange,
      (x) => {
        var C;
        return (C = l.itemTextRefCallback) == null ? void 0 : C.call(l, x, s.value, s.disabled);
      }
    ), f = u == null ? void 0 : u.textContent, y = p.useMemo(
      () => /* @__PURE__ */ m("option", { value: s.value, disabled: s.disabled, children: f }, s.value),
      [s.disabled, s.value, f]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: v } = c;
    return ve(() => (g(y), () => v(y)), [g, v, y]), /* @__PURE__ */ F(Ce, { children: [
      /* @__PURE__ */ m(ne.span, { id: s.textId, ...i, ref: h }),
      s.isSelected && a.valueNode && !a.valueNodeHasChildren ? Yn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
oc.displayName = nn;
var ic = "SelectItemIndicator", ac = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return nc(ic, n).isSelected ? /* @__PURE__ */ m(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ac.displayName = ic;
var po = "SelectScrollUpButton", lc = p.forwardRef((e, t) => {
  const n = gt(po, e.__scopeSelect), r = ti(po, e.__scopeSelect), [o, i] = p.useState(!1), a = le(t, r.onScrollButtonChange);
  return ve(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = s.scrollTop > 0;
        i(c);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    cc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: s } = n;
        l && s && (l.scrollTop = l.scrollTop - s.offsetHeight);
      }
    }
  ) : null;
});
lc.displayName = po;
var ho = "SelectScrollDownButton", sc = p.forwardRef((e, t) => {
  const n = gt(ho, e.__scopeSelect), r = ti(ho, e.__scopeSelect), [o, i] = p.useState(!1), a = le(t, r.onScrollButtonChange);
  return ve(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = s.scrollHeight - s.clientHeight, u = Math.ceil(s.scrollTop) < c;
        i(u);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    cc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: s } = n;
        l && s && (l.scrollTop = l.scrollTop + s.offsetHeight);
      }
    }
  ) : null;
});
sc.displayName = ho;
var cc = p.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = gt("SelectScrollButton", n), a = p.useRef(null), l = pr(n), s = p.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return p.useEffect(() => () => s(), [s]), ve(() => {
    var u;
    const c = l().find((d) => d.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ m(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: j(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: j(o.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: j(o.onPointerLeave, () => {
        s();
      })
    }
  );
}), Eb = "SelectSeparator", uc = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ m(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
uc.displayName = Eb;
var mo = "SelectArrow", Nb = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hr(n), i = mt(mo, n), a = gt(mo, n);
    return i.open && a.position === "popper" ? /* @__PURE__ */ m(Yo, { ...o, ...r, ref: t }) : null;
  }
);
Nb.displayName = mo;
var Rb = "SelectBubbleInput", dc = p.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = p.useRef(null), i = le(r, o), a = Ss(t);
    return p.useEffect(() => {
      const l = o.current;
      if (!l) return;
      const s = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        s,
        "value"
      ).set;
      if (a !== t && u) {
        const d = new Event("change", { bubbles: !0 });
        u.call(l, t), l.dispatchEvent(d);
      }
    }, [a, t]), /* @__PURE__ */ m(
      ne.select,
      {
        ...n,
        style: { ...ds, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
dc.displayName = Rb;
function fc(e) {
  return e === "" || e === void 0;
}
function pc(e) {
  const t = qe(e), n = p.useRef(""), r = p.useRef(0), o = p.useCallback(
    (a) => {
      const l = n.current + a;
      t(l), function s(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => s(""), 1e3));
      }(l);
    },
    [t]
  ), i = p.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function hc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = Pb(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const s = a.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function Pb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ab = Vs, mc = js, Tb = Ws, Ib = Gs, Mb = qs, gc = Ks, _b = Zs, yc = tc, vc = rc, Db = oc, Ob = ac, xc = lc, wc = sc, bc = uc;
const Oa = Ab, La = Tb, go = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
  mc,
  {
    ref: r,
    className: te(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(Ib, { asChild: !0, children: /* @__PURE__ */ m(kl, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
go.displayName = mc.displayName;
const Sc = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  xc,
  {
    ref: n,
    className: te("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(Sg, { className: "h-4 w-4" })
  }
));
Sc.displayName = xc.displayName;
const Cc = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  wc,
  {
    ref: n,
    className: te("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(kl, { className: "h-4 w-4" })
  }
));
Cc.displayName = wc.displayName;
const yo = p.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ m(Mb, { children: /* @__PURE__ */ F(
  gc,
  {
    ref: o,
    className: te(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ m(Sc, {}),
      /* @__PURE__ */ m(
        _b,
        {
          className: te(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m(Cc, {})
    ]
  }
) }));
yo.displayName = gc.displayName;
const Lb = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(yc, { ref: n, className: te("py-1.5 pl-8 pr-2 text-sm font-semibold", e), ...t }));
Lb.displayName = yc.displayName;
const On = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
  vc,
  {
    ref: r,
    className: te(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(Ob, { children: /* @__PURE__ */ m(Oo, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ m(Db, { children: t })
    ]
  }
));
On.displayName = vc.displayName;
const Fb = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(bc, { ref: n, className: te("-mx-1 my-1 h-px bg-muted", e), ...t }));
Fb.displayName = bc.displayName;
function zb({
  noteId: e,
  readOnly: t = !1,
  supabaseClient: n,
  labels: r = {},
  onError: o = console.error,
  onSuccess: i = console.log
}) {
  const [a, l] = ye([]), [s, c] = ye(!1), [u, d] = ye(!0), h = (w, E) => r[w] || E;
  bt(() => {
    e ? f() : d(!1);
  }, [e]);
  const f = async () => {
    if (e)
      try {
        const { data: w, error: E } = await n.from("note_attachments").select("*").eq("note_id", e).order("created_at", { ascending: !1 });
        if (E) throw E;
        l(w || []);
      } catch (w) {
        console.error("Error loading attachments:", w);
      } finally {
        d(!1);
      }
  }, y = async (w) => {
    if (!e || !w.target.files || w.target.files.length === 0) return;
    const E = w.target.files[0], R = 10 * 1024 * 1024;
    if (E.size > R) {
      o(h("uploadFailedSize", "File size must be less than 10MB"));
      return;
    }
    c(!0);
    try {
      const { data: { user: k } } = await n.auth.getUser();
      if (!k) throw new Error("Not authenticated");
      const N = E.name.split(".").pop(), O = `${e}/${Date.now()}-${Math.random().toString(36).substring(7)}.${N}`, { error: D } = await n.storage.from("note-attachments").upload(O, E);
      if (D) throw D;
      const { error: z } = await n.from("note_attachments").insert({
        note_id: e,
        user_id: k.id,
        file_name: E.name,
        file_size: E.size,
        file_type: E.type,
        storage_path: O
      });
      if (z) throw z;
      i(h("attachmentUploaded", "Attachment uploaded successfully")), await f();
    } catch (k) {
      o(k instanceof Error ? k.message : "Unknown error");
    } finally {
      c(!1), w.target.value = "";
    }
  }, g = async (w) => {
    try {
      const { error: E } = await n.storage.from("note-attachments").remove([w.storage_path]);
      if (E) throw E;
      const { error: R } = await n.from("note_attachments").delete().eq("id", w.id);
      if (R) throw R;
      i(h("attachmentDeleted", "Attachment deleted")), await f();
    } catch (E) {
      o(E instanceof Error ? E.message : "Unknown error");
    }
  }, v = async (w) => {
    try {
      const { data: E, error: R } = await n.storage.from("note-attachments").download(w.storage_path);
      if (R) throw R;
      const k = URL.createObjectURL(E), N = document.createElement("a");
      N.href = k, N.download = w.file_name, document.body.appendChild(N), N.click(), document.body.removeChild(N), URL.revokeObjectURL(k);
    } catch {
      o(h("downloadFailed", "Failed to download file"));
    }
  }, x = (w) => w.startsWith("image/") ? /* @__PURE__ */ m(Mg, { className: "w-4 h-4" }) : /* @__PURE__ */ m(Pg, { className: "w-4 h-4" }), C = (w) => w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : `${(w / (1024 * 1024)).toFixed(1)} MB`;
  return e ? /* @__PURE__ */ F("div", { className: "mt-6 pt-6 border-t", children: [
    /* @__PURE__ */ F("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ F("h3", { className: "text-sm font-medium text-muted-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ m(oa, { className: "w-4 h-4" }),
        h("attachments", "Attachments")
      ] }),
      !t && /* @__PURE__ */ F("div", { children: [
        /* @__PURE__ */ m(
          "input",
          {
            type: "file",
            id: "file-upload",
            className: "hidden",
            onChange: y,
            disabled: s,
            accept: "image/*,.pdf,.doc,.docx,.txt,.zip"
          }
        ),
        /* @__PURE__ */ F(
          _e,
          {
            variant: "outline",
            size: "sm",
            onClick: () => {
              var w;
              return (w = document.getElementById("file-upload")) == null ? void 0 : w.click();
            },
            disabled: s,
            className: "gap-2",
            children: [
              /* @__PURE__ */ m(oa, { className: "w-4 h-4" }),
              s ? h("saving", "Saving...") : h("addAttachment", "Add Attachment")
            ]
          }
        )
      ] })
    ] }),
    u ? /* @__PURE__ */ m("p", { className: "text-sm text-muted-foreground", children: h("loading", "Loading...") }) : a.length === 0 ? /* @__PURE__ */ m("p", { className: "text-sm text-muted-foreground italic", children: h("noAttachments", "No attachments") }) : /* @__PURE__ */ m("div", { className: "grid grid-cols-1 gap-2", children: a.map((w) => /* @__PURE__ */ F(
      "div",
      {
        className: "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors",
        children: [
          /* @__PURE__ */ F("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
            /* @__PURE__ */ m("div", { className: "text-muted-foreground shrink-0", children: x(w.file_type) }),
            /* @__PURE__ */ F("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ m("p", { className: "text-sm font-medium truncate", children: w.file_name }),
              /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground", children: C(w.file_size) })
            ] })
          ] }),
          /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => v(w),
                children: /* @__PURE__ */ m(Ng, { className: "w-4 h-4" })
              }
            ),
            !t && /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
                onClick: () => g(w),
                children: /* @__PURE__ */ m(Al, { className: "w-4 h-4" })
              }
            )
          ] })
        ]
      },
      w.id
    )) })
  ] }) : null;
}
function mC({
  initialContent: e = "",
  initialTitle: t = "",
  initialIsPrivate: n = !1,
  initialSharingPermission: r = "view",
  shortId: o,
  noteId: i,
  saving: a = !1,
  onSave: l,
  readOnly: s = !1,
  isVisitor: c = !1,
  user: u,
  labels: d = {},
  supabaseClient: h,
  onToast: f = (g, v) => console.log(g, v),
  dir: y = "ltr"
}) {
  const [g, v] = ye(e), [x, C] = ye(t), [w, E] = ye(n), [R, k] = ye(r), [N, O] = ye("never"), [D, z] = ye(c), [T, A] = ye(!1), V = Nd(null), M = (W, S) => d[W] || S, H = [
    { value: "never", label: M("never", "Never") },
    { value: "1h", label: M("1hour", "1 Hour") },
    { value: "1d", label: M("1day", "1 Day") },
    { value: "1w", label: M("1week", "1 Week") },
    { value: "1m", label: M("1month", "1 Month") }
  ];
  function B(W) {
    if (W === "never") return null;
    const S = /* @__PURE__ */ new Date();
    switch (W) {
      case "1h":
        return new Date(S.getTime() + 60 * 60 * 1e3).toISOString();
      case "1d":
        return new Date(S.getTime() + 24 * 60 * 60 * 1e3).toISOString();
      case "1w":
        return new Date(S.getTime() + 7 * 24 * 60 * 60 * 1e3).toISOString();
      case "1m":
        return new Date(S.getTime() + 30 * 24 * 60 * 60 * 1e3).toISOString();
      default:
        return null;
    }
  }
  bt(() => {
    v(e), C(t), E(n), k(r);
  }, [e, t, n, r]), bt(() => {
    const W = V.current;
    W && !D && (W.style.height = "auto", W.style.height = `${Math.max(W.scrollHeight, 300)}px`);
  }, [g, D]), bt(() => {
    !s && !D && V.current && V.current.focus();
  }, [s, D]);
  const G = () => {
    if (l) {
      const W = B(N);
      l(g, x, w, W, R);
    }
  }, $ = async () => {
    if (!o) return;
    const W = `${window.location.origin}/n/${o}`;
    await navigator.clipboard.writeText(W), A(!0), f(
      M("linkCopied", "Link Copied"),
      W
    ), setTimeout(() => A(!1), 2e3);
  }, _ = g.trim().length > 0, b = !!u, K = $a((W, S = "", ue = "") => {
    const me = V.current;
    if (!me) return;
    const ee = me.selectionStart, U = me.selectionEnd, X = g.substring(ee, U), re = X || ue, J = g.substring(0, ee) + W + re + S + g.substring(U);
    v(J), setTimeout(() => {
      me.focus();
      const oe = ee + W.length + re.length + S.length;
      me.setSelectionRange(
        X ? oe : ee + W.length,
        X ? oe : ee + W.length + ue.length
      );
    }, 0);
  }, [g]);
  return /* @__PURE__ */ F("div", { className: `w-full max-w-3xl mx-auto animate-fade-in ${y === "rtl" ? "rtl" : "ltr"}`, dir: y, children: [
    /* @__PURE__ */ F("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-4", children: [
      /* @__PURE__ */ F("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
        /* @__PURE__ */ m("div", { className: "p-2 rounded-lg bg-primary/10 shrink-0", children: /* @__PURE__ */ m(to, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ m(
          "input",
          {
            type: "text",
            value: x,
            onChange: (W) => C(W.target.value),
            placeholder: M("untitled", "Untitled"),
            disabled: s,
            dir: "auto",
            className: "text-xl font-medium bg-transparent border-none outline-none placeholder:text-muted-foreground/50 focus:ring-0 min-w-0 flex-1"
          }
        )
      ] }),
      /* @__PURE__ */ F("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ m(
          _e,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => z(!D),
            className: "gap-2 text-muted-foreground hover:text-foreground",
            children: D ? /* @__PURE__ */ F(Ce, { children: [
              /* @__PURE__ */ m(to, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { className: "hidden sm:inline", children: M("seeOriginal", "See Original") })
            ] }) : /* @__PURE__ */ F(Ce, { children: [
              /* @__PURE__ */ m(ra, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { className: "hidden sm:inline", children: M("preview", "Preview") })
            ] })
          }
        ),
        o && /* @__PURE__ */ F(
          _e,
          {
            variant: "outline",
            size: "sm",
            onClick: $,
            className: "gap-2 glow-hover",
            children: [
              T ? /* @__PURE__ */ m(Oo, { className: "w-4 h-4 text-primary" }) : /* @__PURE__ */ m(Eg, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { className: "hidden sm:inline", children: M("copyLink", "Copy Link") })
            ]
          }
        ),
        !s && /* @__PURE__ */ m(
          _e,
          {
            onClick: G,
            disabled: a || !_,
            className: "gap-2",
            children: a ? /* @__PURE__ */ m("span", { className: "animate-pulse", children: M("saving", "Saving...") }) : o ? M("update", "Update") : /* @__PURE__ */ F(Ce, { children: [
              /* @__PURE__ */ m(Rg, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { children: M("share", "Share") })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ F("div", { className: "flex items-center gap-6 mb-4 flex-wrap text-sm", children: [
      /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
        w ? /* @__PURE__ */ m(Rl, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ m(Nl, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ m(Mn, { htmlFor: "private-toggle", className: "text-muted-foreground cursor-pointer", children: w ? M("private", "Private") : M("public", "Public") }),
        /* @__PURE__ */ m(
          As,
          {
            id: "private-toggle",
            checked: w,
            onCheckedChange: E,
            disabled: !b || c
          }
        ),
        !b && !c && /* @__PURE__ */ m("span", { className: "text-xs text-muted-foreground", children: M("signInToEnable", "Sign in to make private") })
      ] }),
      o && !w && !c && /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ m(Vg, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ m(Mn, { className: "text-muted-foreground", children: M("sharingPermission", "Sharing Rules") }),
        /* @__PURE__ */ F(Oa, { value: R, onValueChange: (W) => k(W), children: [
          /* @__PURE__ */ m(go, { className: "w-32 h-8", children: /* @__PURE__ */ m(La, {}) }),
          /* @__PURE__ */ F(yo, { children: [
            /* @__PURE__ */ m(On, { value: "view", children: M("viewOnly", "View Only") }),
            /* @__PURE__ */ m(On, { value: "edit", children: M("allowEditing", "Allow Edits") })
          ] })
        ] })
      ] }),
      !o && !c && /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ m(El, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ m(Mn, { className: "text-muted-foreground", children: M("expires", "Expires") }),
        /* @__PURE__ */ F(Oa, { value: N, onValueChange: O, children: [
          /* @__PURE__ */ m(go, { className: "w-28 h-8", children: /* @__PURE__ */ m(La, {}) }),
          /* @__PURE__ */ m(yo, { children: H.map((W) => /* @__PURE__ */ m(On, { value: W.value, children: W.label }, W.value)) })
        ] })
      ] }),
      s && /* @__PURE__ */ F("div", { className: "flex items-center gap-2 px-3 py-1 bg-muted rounded-full", children: [
        /* @__PURE__ */ m(ra, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ m("span", { className: "text-xs font-medium text-muted-foreground", children: M("viewOnly", "View Only") })
      ] }),
      c && !s && D && /* @__PURE__ */ F(
        _e,
        {
          size: "sm",
          variant: "outline",
          onClick: () => z(!1),
          className: "h-8 gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary",
          children: [
            /* @__PURE__ */ m(Pl, { className: "w-3 h-3" }),
            M("editNote", "Edit Note")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "paper glow-hover min-h-[300px] overflow-hidden", children: D ? /* @__PURE__ */ m("div", { className: "p-6 sm:p-8", children: /* @__PURE__ */ m(gg, { content: g || M("previewPlaceholder", "Nothing to preview") }) }) : /* @__PURE__ */ F(Ce, { children: [
      !s && /* @__PURE__ */ m(Kx, { onInsert: K, labels: d }),
      /* @__PURE__ */ m(
        "textarea",
        {
          ref: V,
          value: g,
          onChange: (W) => v(W.target.value),
          placeholder: M("placeholder", "Start typing..."),
          disabled: s,
          dir: "auto",
          className: "w-full min-h-[300px] bg-transparent border-none outline-none resize-none font-serif text-lg leading-relaxed placeholder:text-muted-foreground/40 focus:ring-0 p-6 sm:p-8"
        }
      )
    ] }) }),
    !D && !s && /* @__PURE__ */ m("p", { className: "mt-2 text-xs text-muted-foreground text-center", children: M("markdownHint", "Supports Markdown styling.") }),
    h && /* @__PURE__ */ m(
      zb,
      {
        noteId: i,
        readOnly: s,
        supabaseClient: h,
        labels: d,
        onSuccess: (W) => f(W, ""),
        onError: (W) => f(M("error", "Error"), W, "destructive")
      }
    ),
    o && /* @__PURE__ */ m("div", { className: "mt-4 text-center", children: /* @__PURE__ */ F("p", { className: "text-sm text-muted-foreground", children: [
      M("shareNote", "Share to via"),
      /* @__PURE__ */ F("code", { className: "ml-2 px-2 py-1 bg-secondary rounded text-foreground font-mono text-xs", children: [
        "/n/",
        o
      ] })
    ] }) })
  ] });
}
function $b(e, t, n = 10) {
  const [r, o] = ye([]), [i, a] = ye(!0), [l, s] = ye(""), c = $a(async () => {
    if (!t) {
      o([]), a(!1);
      return;
    }
    try {
      const { data: h, error: f } = await e.from("notes").select("*").eq("user_id", t.id).order("updated_at", { ascending: !1 }).limit(n);
      if (f) throw f;
      o(h || []);
    } catch (h) {
      console.error("Error fetching recent notes:", h);
    } finally {
      a(!1);
    }
  }, [t, n, e]), u = async (h) => {
    try {
      const { error: f } = await e.from("notes").delete().eq("id", h);
      if (f) throw f;
      return o((y) => y.filter((g) => g.id !== h)), !0;
    } catch (f) {
      return console.error("Error deleting note:", f), !1;
    }
  }, d = r.filter((h) => {
    var v;
    if (!l.trim()) return !0;
    const f = l.toLowerCase(), y = ((v = h.title) == null ? void 0 : v.toLowerCase().includes(f)) || !1, g = h.content.toLowerCase().includes(f) || !1;
    return y || g;
  });
  return bt(() => {
    c();
  }, [c]), bt(() => {
    if (!t) return;
    const h = e.channel("notes-realtime").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "notes",
        filter: `user_id=eq.${t.id}`
      },
      (f) => {
        f.eventType === "INSERT" ? o((y) => [f.new, ...y].slice(0, n)) : f.eventType === "UPDATE" ? o(
          (y) => y.map(
            (g) => g.id === f.new.id ? f.new : g
          )
        ) : f.eventType === "DELETE" && o(
          (y) => y.filter((g) => g.id !== f.old.id)
        );
      }
    ).subscribe();
    return () => {
      e.removeChannel(h);
    };
  }, [t, n, e]), {
    notes: d,
    loading: i,
    refetch: c,
    deleteNote: u,
    searchQuery: l,
    setSearchQuery: s
  };
}
const kc = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
kc.displayName = "Card";
const Ec = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("flex flex-col space-y-1.5 p-6", e), ...t })
);
Ec.displayName = "CardHeader";
const Nc = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("h3", { ref: n, className: te("text-2xl font-semibold leading-none tracking-tight", e), ...t })
);
Nc.displayName = "CardTitle";
const Bb = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("p", { ref: n, className: te("text-sm text-muted-foreground", e), ...t })
);
Bb.displayName = "CardDescription";
const Rc = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("p-6 pt-0", e), ...t })
);
Rc.displayName = "CardContent";
const Vb = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("flex items-center p-6 pt-0", e), ...t })
);
Vb.displayName = "CardFooter";
function Hb({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: te("animate-pulse rounded-md bg-muted", e), ...t });
}
const Pc = p.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ m(
    "input",
    {
      type: t,
      className: te(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Pc.displayName = "Input";
function jb({ value: e, onChange: t, labels: n = {}, dir: r = "ltr" }) {
  const o = n.searchPlaceholder || "Search notes...";
  return /* @__PURE__ */ F("div", { className: "relative", children: [
    /* @__PURE__ */ m(Bg, { className: `absolute ${r === "rtl" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground` }),
    /* @__PURE__ */ m(
      Pc,
      {
        type: "text",
        placeholder: o,
        value: e,
        onChange: (i) => t(i.target.value),
        className: `${r === "rtl" ? "pr-9 pl-9" : "pl-9 pr-9"}`
      }
    ),
    e && /* @__PURE__ */ m(
      _e,
      {
        variant: "ghost",
        size: "icon",
        className: `absolute ${r === "rtl" ? "left-1" : "right-1"} top-1/2 -translate-y-1/2 h-7 w-7`,
        onClick: () => t(""),
        children: /* @__PURE__ */ m(Al, { className: "h-4 w-4" })
      }
    )
  ] });
}
// @__NO_SIDE_EFFECTS__
function Ub(e) {
  const t = /* @__PURE__ */ Wb(e), n = p.forwardRef((r, o) => {
    const { children: i, ...a } = r, l = p.Children.toArray(i), s = l.find(qb);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: p.isValidElement(c) ? p.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Wb(e) {
  const t = p.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (p.isValidElement(o)) {
      const a = Yb(o), l = Kb(i, o.props);
      return o.type !== p.Fragment && (l.ref = r ? nt(r, a) : a), p.cloneElement(o, l);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gb = Symbol("radix.slottable");
function qb(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gb;
}
function Kb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const s = i(...l);
      return o(...l), s;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Yb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var mr = "Dialog", [Ac, Tc] = Ye(mr), [Xb, $e] = Ac(mr), Ic = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, l = p.useRef(null), s = p.useRef(null), [c, u] = Ct({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: mr
  });
  return /* @__PURE__ */ m(
    Xb,
    {
      scope: t,
      triggerRef: l,
      contentRef: s,
      contentId: Ue(),
      titleId: Ue(),
      descriptionId: Ue(),
      open: c,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((d) => !d), [u]),
      modal: a,
      children: n
    }
  );
};
Ic.displayName = mr;
var Mc = "DialogTrigger", _c = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Mc, n), i = le(t, o.triggerRef);
    return /* @__PURE__ */ m(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": oi(o.open),
        ...r,
        ref: i,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
  }
);
_c.displayName = Mc;
var ni = "DialogPortal", [Qb, Dc] = Ac(ni, {
  forceMount: void 0
}), Oc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = $e(ni, t);
  return /* @__PURE__ */ m(Qb, { scope: t, forceMount: n, children: p.Children.map(r, (a) => /* @__PURE__ */ m(rt, { present: n || i.open, children: /* @__PURE__ */ m(or, { asChild: !0, container: o, children: a }) })) });
};
Oc.displayName = ni;
var Gn = "DialogOverlay", Lc = p.forwardRef(
  (e, t) => {
    const n = Dc(Gn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = $e(Gn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ m(rt, { present: r || i.open, children: /* @__PURE__ */ m(Jb, { ...o, ref: t }) }) : null;
  }
);
Lc.displayName = Gn;
var Zb = /* @__PURE__ */ Ub("DialogOverlay.RemoveScroll"), Jb = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Gn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(dr, { as: Zb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m(
        ne.div,
        {
          "data-state": oi(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Nt = "DialogContent", Fc = p.forwardRef(
  (e, t) => {
    const n = Dc(Nt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = $e(Nt, e.__scopeDialog);
    return /* @__PURE__ */ m(rt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ m(e1, { ...o, ref: t }) : /* @__PURE__ */ m(t1, { ...o, ref: t }) });
  }
);
Fc.displayName = Nt;
var e1 = p.forwardRef(
  (e, t) => {
    const n = $e(Nt, e.__scopeDialog), r = p.useRef(null), o = le(t, n.contentRef, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return ei(i);
    }, []), /* @__PURE__ */ m(
      zc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: j(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: j(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), t1 = p.forwardRef(
  (e, t) => {
    const n = $e(Nt, e.__scopeDialog), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ m(
      zc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, l;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var s, c;
          (s = e.onInteractOutside) == null || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), zc = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, l = $e(Nt, n), s = p.useRef(null), c = le(t, s);
    return Jo(), /* @__PURE__ */ F(Ce, { children: [
      /* @__PURE__ */ m(
        cr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ m(
            mn,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": oi(l.open),
              ...a,
              ref: c,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ F(Ce, { children: [
        /* @__PURE__ */ m(r1, { titleId: l.titleId }),
        /* @__PURE__ */ m(i1, { contentRef: s, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), ri = "DialogTitle", $c = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(ri, n);
    return /* @__PURE__ */ m(ne.h2, { id: o.titleId, ...r, ref: t });
  }
);
$c.displayName = ri;
var Bc = "DialogDescription", Vc = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Bc, n);
    return /* @__PURE__ */ m(ne.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Vc.displayName = Bc;
var Hc = "DialogClose", jc = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Hc, n);
    return /* @__PURE__ */ m(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
jc.displayName = Hc;
function oi(e) {
  return e ? "open" : "closed";
}
var Uc = "DialogTitleWarning", [n1, Wc] = Ty(Uc, {
  contentName: Nt,
  titleName: ri,
  docsSlug: "dialog"
}), r1 = ({ titleId: e }) => {
  const t = Wc(Uc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return p.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, o1 = "DialogDescriptionWarning", i1 = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Wc(o1).contentName}}.`;
  return p.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, a1 = Ic, l1 = _c, s1 = Oc, c1 = Lc, u1 = Fc, d1 = $c, f1 = Vc, Gc = jc, p1 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function h1(e) {
  const t = ({ children: n }) => /* @__PURE__ */ m(Ce, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = p1, t;
}
var qc = "AlertDialog", [m1] = Ye(qc, [
  Tc
]), ot = Tc(), Kc = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ot(t);
  return /* @__PURE__ */ m(a1, { ...r, ...n, modal: !0 });
};
Kc.displayName = qc;
var g1 = "AlertDialogTrigger", Yc = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ m(l1, { ...o, ...r, ref: t });
  }
);
Yc.displayName = g1;
var y1 = "AlertDialogPortal", Xc = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ot(t);
  return /* @__PURE__ */ m(s1, { ...r, ...n });
};
Xc.displayName = y1;
var v1 = "AlertDialogOverlay", Qc = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ m(c1, { ...o, ...r, ref: t });
  }
);
Qc.displayName = v1;
var Bt = "AlertDialogContent", [x1, w1] = m1(Bt), b1 = /* @__PURE__ */ h1("AlertDialogContent"), Zc = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, i = ot(n), a = p.useRef(null), l = le(t, a), s = p.useRef(null);
    return /* @__PURE__ */ m(
      n1,
      {
        contentName: Bt,
        titleName: Jc,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ m(x1, { scope: n, cancelRef: s, children: /* @__PURE__ */ F(
          u1,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: l,
            onOpenAutoFocus: j(o.onOpenAutoFocus, (c) => {
              var u;
              c.preventDefault(), (u = s.current) == null || u.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ m(b1, { children: r }),
              /* @__PURE__ */ m(C1, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Zc.displayName = Bt;
var Jc = "AlertDialogTitle", eu = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ m(d1, { ...o, ...r, ref: t });
  }
);
eu.displayName = Jc;
var tu = "AlertDialogDescription", nu = p.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ m(f1, { ...o, ...r, ref: t });
});
nu.displayName = tu;
var S1 = "AlertDialogAction", ru = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ m(Gc, { ...o, ...r, ref: t });
  }
);
ru.displayName = S1;
var ou = "AlertDialogCancel", iu = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = w1(ou, n), i = ot(n), a = le(t, o);
    return /* @__PURE__ */ m(Gc, { ...i, ...r, ref: a });
  }
);
iu.displayName = ou;
var C1 = ({ contentRef: e }) => {
  const t = `\`${Bt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Bt}\` by passing a \`${tu}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Bt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return p.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, k1 = Kc, E1 = Yc, N1 = Xc, au = Qc, lu = Zc, su = ru, cu = iu, uu = eu, du = nu;
const R1 = k1, P1 = E1, A1 = N1, fu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  au,
  {
    className: te(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
fu.displayName = au.displayName;
const pu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ F(A1, { children: [
  /* @__PURE__ */ m(fu, {}),
  /* @__PURE__ */ m(
    lu,
    {
      ref: n,
      className: te(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
pu.displayName = lu.displayName;
const hu = ({ className: e, ...t }) => /* @__PURE__ */ m("div", { className: te("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
hu.displayName = "AlertDialogHeader";
const mu = ({ className: e, ...t }) => /* @__PURE__ */ m("div", { className: te("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
mu.displayName = "AlertDialogFooter";
const gu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(uu, { ref: n, className: te("text-lg font-semibold", e), ...t }));
gu.displayName = uu.displayName;
const yu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(du, { ref: n, className: te("text-sm text-muted-foreground", e), ...t }));
yu.displayName = du.displayName;
const vu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(su, { ref: n, className: te(Fo(), e), ...t }));
vu.displayName = su.displayName;
const xu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  cu,
  {
    ref: n,
    className: te(Fo({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t
  }
));
xu.displayName = cu.displayName;
function gC({
  supabaseClient: e,
  user: t,
  labels: n = {},
  onNavigate: r,
  dir: o = "ltr",
  onToast: i = (a, l) => console.log(a, l)
}) {
  const { notes: a, loading: l, deleteNote: s, searchQuery: c, setSearchQuery: u } = $b(e, t, 10), d = (y, g) => n[y] || g, h = async (y, g) => {
    await s(y) ? i(
      d("noteDeleted", "Note Deleted"),
      `"${g || d("untitled", "Untitled")}" ${d("noteDeletedMessage", "was successfully deleted.")}`
    ) : i(
      d("error", "Error"),
      d("deleteFailed", "Failed to delete note"),
      "destructive"
    );
  }, f = (y) => {
    const g = new Date(y), x = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), C = Math.floor(x / (1e3 * 60 * 60 * 24));
    return C === 0 ? d("today", "today") : C === 1 ? d("yesterday", "yesterday") : `${C} ${d("daysAgo", "days ago")}`;
  };
  return l ? /* @__PURE__ */ m("div", { className: "space-y-3", children: [...Array(3)].map((y, g) => /* @__PURE__ */ m(Hb, { className: "h-20 w-full" }, g)) }) : /* @__PURE__ */ F(kc, { className: "shadow-none relative isolate z-0 bg-transparent sm:bg-card/50", children: [
    /* @__PURE__ */ F(Ec, { className: "pb-3", children: [
      /* @__PURE__ */ F(Nc, { className: "text-lg font-medium flex items-center gap-2", children: [
        /* @__PURE__ */ m(El, { className: "w-4 h-4 text-muted-foreground" }),
        d("title", "Recent Notes")
      ] }),
      /* @__PURE__ */ m("div", { className: "pt-2", children: /* @__PURE__ */ m(
        jb,
        {
          value: c,
          onChange: u,
          labels: { searchPlaceholder: d("searchPlaceholder", "Search notes...") },
          dir: o
        }
      ) })
    ] }),
    /* @__PURE__ */ m(Rc, { className: "space-y-2", children: a.length === 0 ? /* @__PURE__ */ m("p", { className: "text-sm text-muted-foreground text-center py-6", children: c ? d("noResults", "No results found") : d("noNotes", "No notes yet") }) : a.map((y) => /* @__PURE__ */ F(
      "div",
      {
        className: "group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors",
        children: [
          /* @__PURE__ */ F(
            "div",
            {
              onClick: () => r && r(y.short_id),
              className: `flex-1 min-w-0 flex items-center gap-3 ${r ? "cursor-pointer" : ""}`,
              role: r ? "button" : void 0,
              tabIndex: r ? 0 : void 0,
              children: [
                /* @__PURE__ */ m("div", { className: "p-1.5 rounded bg-primary/10", children: /* @__PURE__ */ m(to, { className: "w-4 h-4 text-primary" }) }),
                /* @__PURE__ */ F("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ m("h4", { className: "font-medium truncate", children: y.title || d("untitled", "Untitled") }),
                  /* @__PURE__ */ F("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                    y.is_private ? /* @__PURE__ */ F("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ m(Rl, { className: "w-3 h-3" }),
                      d("private", "Private")
                    ] }) : /* @__PURE__ */ F("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ m(Nl, { className: "w-3 h-3" }),
                      d("public", "Public")
                    ] }),
                    /* @__PURE__ */ m("span", { children: "•" }),
                    /* @__PURE__ */ m("span", { children: f(y.updated_at) }),
                    y.expires_at && /* @__PURE__ */ F(Ce, { children: [
                      /* @__PURE__ */ m("span", { children: "•" }),
                      /* @__PURE__ */ F("span", { className: "text-amber-600 dark:text-amber-400", children: [
                        d("expires", "Expires"),
                        " ",
                        f(y.expires_at)
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ F(R1, { children: [
            /* @__PURE__ */ m(P1, { asChild: !0, children: /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "icon",
                className: "opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive shrink-0",
                children: /* @__PURE__ */ m(jg, { className: "w-4 h-4" })
              }
            ) }),
            /* @__PURE__ */ F(pu, { children: [
              /* @__PURE__ */ F(hu, { children: [
                /* @__PURE__ */ m(gu, { children: d("deleteConfirm", "Delete Note") }),
                /* @__PURE__ */ F(yu, { children: [
                  d("deleteMessage", "Are you sure you want to delete"),
                  ' "',
                  y.title || d("untitled", "Untitled"),
                  '"?'
                ] })
              ] }),
              /* @__PURE__ */ F(mu, { children: [
                /* @__PURE__ */ m(xu, { children: d("cancel", "Cancel") }),
                /* @__PURE__ */ m(
                  vu,
                  {
                    onClick: () => h(y.id, y.title || ""),
                    className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    children: d("delete", "Delete")
                  }
                )
              ] })
            ] })
          ] })
        ]
      },
      y.id
    )) })
  ] });
}
var Vr = "rovingFocusGroup.onEntryFocus", T1 = { bubbles: !1, cancelable: !0 }, yn = "RovingFocusGroup", [vo, wu, I1] = Qo(yn), [M1, bu] = Ye(
  yn,
  [I1]
), [_1, D1] = M1(yn), Su = p.forwardRef(
  (e, t) => /* @__PURE__ */ m(vo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(vo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(O1, { ...e, ref: t }) }) })
);
Su.displayName = yn;
var O1 = p.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: s,
    onEntryFocus: c,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, h = p.useRef(null), f = le(t, h), y = Zo(i), [g, v] = Ct({
    prop: a,
    defaultProp: l ?? null,
    onChange: s,
    caller: yn
  }), [x, C] = p.useState(!1), w = qe(c), E = wu(n), R = p.useRef(!1), [k, N] = p.useState(0);
  return p.useEffect(() => {
    const O = h.current;
    if (O)
      return O.addEventListener(Vr, w), () => O.removeEventListener(Vr, w);
  }, [w]), /* @__PURE__ */ m(
    _1,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: o,
      currentTabStopId: g,
      onItemFocus: p.useCallback(
        (O) => v(O),
        [v]
      ),
      onItemShiftTab: p.useCallback(() => C(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => N((O) => O + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => N((O) => O - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        ne.div,
        {
          tabIndex: x || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: f,
          style: { outline: "none", ...e.style },
          onMouseDown: j(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: j(e.onFocus, (O) => {
            const D = !R.current;
            if (O.target === O.currentTarget && D && !x) {
              const z = new CustomEvent(Vr, T1);
              if (O.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const T = E().filter((B) => B.focusable), A = T.find((B) => B.active), V = T.find((B) => B.id === g), H = [A, V, ...T].filter(
                  Boolean
                ).map((B) => B.ref.current);
                Eu(H, u);
              }
            }
            R.current = !1;
          }),
          onBlur: j(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Cu = "RovingFocusGroupItem", ku = p.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...l
    } = e, s = Ue(), c = i || s, u = D1(Cu, n), d = u.currentTabStopId === c, h = wu(n), { onFocusableItemAdd: f, onFocusableItemRemove: y, currentTabStopId: g } = u;
    return p.useEffect(() => {
      if (r)
        return f(), () => y();
    }, [r, f, y]), /* @__PURE__ */ m(
      vo.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ m(
          ne.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...l,
            ref: t,
            onMouseDown: j(e.onMouseDown, (v) => {
              r ? u.onItemFocus(c) : v.preventDefault();
            }),
            onFocus: j(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: j(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const x = z1(v, u.orientation, u.dir);
              if (x !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = h().filter((E) => E.focusable).map((E) => E.ref.current);
                if (x === "last") w.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && w.reverse();
                  const E = w.indexOf(v.currentTarget);
                  w = u.loop ? $1(w, E + 1) : w.slice(E + 1);
                }
                setTimeout(() => Eu(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: g != null }) : a
          }
        )
      }
    );
  }
);
ku.displayName = Cu;
var L1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function F1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function z1(e, t, n) {
  const r = F1(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return L1[r];
}
function Eu(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function $1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var B1 = Su, V1 = ku;
// @__NO_SIDE_EFFECTS__
function H1(e) {
  const t = /* @__PURE__ */ j1(e), n = p.forwardRef((r, o) => {
    const { children: i, ...a } = r, l = p.Children.toArray(i), s = l.find(W1);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: p.isValidElement(c) ? p.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function j1(e) {
  const t = p.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (p.isValidElement(o)) {
      const a = q1(o), l = G1(i, o.props);
      return o.type !== p.Fragment && (l.ref = r ? nt(r, a) : a), p.cloneElement(o, l);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var U1 = Symbol("radix.slottable");
function W1(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === U1;
}
function G1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const s = i(...l);
      return o(...l), s;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function q1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var xo = ["Enter", " "], K1 = ["ArrowDown", "PageUp", "Home"], Nu = ["ArrowUp", "PageDown", "End"], Y1 = [...K1, ...Nu], X1 = {
  ltr: [...xo, "ArrowRight"],
  rtl: [...xo, "ArrowLeft"]
}, Q1 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, vn = "Menu", [dn, Z1, J1] = Qo(vn), [Pt, Ru] = Ye(vn, [
  J1,
  Kt,
  bu
]), gr = Kt(), Pu = bu(), [eS, At] = Pt(vn), [tS, xn] = Pt(vn), Au = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, l = gr(t), [s, c] = p.useState(null), u = p.useRef(!1), d = qe(i), h = Zo(o);
  return p.useEffect(() => {
    const f = () => {
      u.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => u.current = !1;
    return document.addEventListener("keydown", f, { capture: !0 }), () => {
      document.removeEventListener("keydown", f, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ m(Go, { ...l, children: /* @__PURE__ */ m(
    eS,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: s,
      onContentChange: c,
      children: /* @__PURE__ */ m(
        tS,
        {
          scope: t,
          onClose: p.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Au.displayName = vn;
var nS = "MenuAnchor", ii = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = gr(n);
    return /* @__PURE__ */ m(qo, { ...o, ...r, ref: t });
  }
);
ii.displayName = nS;
var ai = "MenuPortal", [rS, Tu] = Pt(ai, {
  forceMount: void 0
}), Iu = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = At(ai, t);
  return /* @__PURE__ */ m(rS, { scope: t, forceMount: n, children: /* @__PURE__ */ m(rt, { present: n || i.open, children: /* @__PURE__ */ m(or, { asChild: !0, container: o, children: r }) }) });
};
Iu.displayName = ai;
var De = "MenuContent", [oS, li] = Pt(De), Mu = p.forwardRef(
  (e, t) => {
    const n = Tu(De, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = At(De, e.__scopeMenu), a = xn(De, e.__scopeMenu);
    return /* @__PURE__ */ m(dn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(rt, { present: r || i.open, children: /* @__PURE__ */ m(dn.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ m(iS, { ...o, ref: t }) : /* @__PURE__ */ m(aS, { ...o, ref: t }) }) }) });
  }
), iS = p.forwardRef(
  (e, t) => {
    const n = At(De, e.__scopeMenu), r = p.useRef(null), o = le(t, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return ei(i);
    }, []), /* @__PURE__ */ m(
      si,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: j(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), aS = p.forwardRef((e, t) => {
  const n = At(De, e.__scopeMenu);
  return /* @__PURE__ */ m(
    si,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), lS = /* @__PURE__ */ H1("MenuContent.ScrollLock"), si = p.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: l,
      onEntryFocus: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: h,
      onDismiss: f,
      disableOutsideScroll: y,
      ...g
    } = e, v = At(De, n), x = xn(De, n), C = gr(n), w = Pu(n), E = Z1(n), [R, k] = p.useState(null), N = p.useRef(null), O = le(t, N, v.onContentChange), D = p.useRef(0), z = p.useRef(""), T = p.useRef(0), A = p.useRef(null), V = p.useRef("right"), M = p.useRef(0), H = y ? dr : p.Fragment, B = y ? { as: lS, allowPinchZoom: !0 } : void 0, G = (_) => {
      var U, X;
      const b = z.current + _, K = E().filter((re) => !re.disabled), W = document.activeElement, S = (U = K.find((re) => re.ref.current === W)) == null ? void 0 : U.textValue, ue = K.map((re) => re.textValue), me = xS(ue, b, S), ee = (X = K.find((re) => re.textValue === me)) == null ? void 0 : X.ref.current;
      (function re(J) {
        z.current = J, window.clearTimeout(D.current), J !== "" && (D.current = window.setTimeout(() => re(""), 1e3));
      })(b), ee && setTimeout(() => ee.focus());
    };
    p.useEffect(() => () => window.clearTimeout(D.current), []), Jo();
    const $ = p.useCallback((_) => {
      var K, W;
      return V.current === ((K = A.current) == null ? void 0 : K.side) && bS(_, (W = A.current) == null ? void 0 : W.area);
    }, []);
    return /* @__PURE__ */ m(
      oS,
      {
        scope: n,
        searchRef: z,
        onItemEnter: p.useCallback(
          (_) => {
            $(_) && _.preventDefault();
          },
          [$]
        ),
        onItemLeave: p.useCallback(
          (_) => {
            var b;
            $(_) || ((b = N.current) == null || b.focus(), k(null));
          },
          [$]
        ),
        onTriggerLeave: p.useCallback(
          (_) => {
            $(_) && _.preventDefault();
          },
          [$]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: p.useCallback((_) => {
          A.current = _;
        }, []),
        children: /* @__PURE__ */ m(H, { ...B, children: /* @__PURE__ */ m(
          cr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: j(i, (_) => {
              var b;
              _.preventDefault(), (b = N.current) == null || b.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ m(
              mn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: c,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: h,
                onDismiss: f,
                children: /* @__PURE__ */ m(
                  B1,
                  {
                    asChild: !0,
                    ...w,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: j(s, (_) => {
                      x.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Ko,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ku(v.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...C,
                        ...g,
                        ref: O,
                        style: { outline: "none", ...g.style },
                        onKeyDown: j(g.onKeyDown, (_) => {
                          const K = _.target.closest("[data-radix-menu-content]") === _.currentTarget, W = _.ctrlKey || _.altKey || _.metaKey, S = _.key.length === 1;
                          K && (_.key === "Tab" && _.preventDefault(), !W && S && G(_.key));
                          const ue = N.current;
                          if (_.target !== ue || !Y1.includes(_.key)) return;
                          _.preventDefault();
                          const ee = E().filter((U) => !U.disabled).map((U) => U.ref.current);
                          Nu.includes(_.key) && ee.reverse(), yS(ee);
                        }),
                        onBlur: j(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(D.current), z.current = "");
                        }),
                        onPointerMove: j(
                          e.onPointerMove,
                          fn((_) => {
                            const b = _.target, K = M.current !== _.clientX;
                            if (_.currentTarget.contains(b) && K) {
                              const W = _.clientX > M.current ? "right" : "left";
                              V.current = W, M.current = _.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Mu.displayName = De;
var sS = "MenuGroup", ci = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(ne.div, { role: "group", ...r, ref: t });
  }
);
ci.displayName = sS;
var cS = "MenuLabel", _u = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(ne.div, { ...r, ref: t });
  }
);
_u.displayName = cS;
var qn = "MenuItem", Fa = "menu.itemSelect", yr = p.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = p.useRef(null), a = xn(qn, e.__scopeMenu), l = li(qn, e.__scopeMenu), s = le(t, i), c = p.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const h = new CustomEvent(Fa, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Fa, (f) => r == null ? void 0 : r(f), { once: !0 }), Bl(d, h), h.defaultPrevented ? c.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ m(
      Du,
      {
        ...o,
        ref: s,
        disabled: n,
        onClick: j(e.onClick, u),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, d), c.current = !0;
        },
        onPointerUp: j(e.onPointerUp, (d) => {
          var h;
          c.current || (h = d.currentTarget) == null || h.click();
        }),
        onKeyDown: j(e.onKeyDown, (d) => {
          const h = l.searchRef.current !== "";
          n || h && d.key === " " || xo.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
yr.displayName = qn;
var Du = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = li(qn, n), l = Pu(n), s = p.useRef(null), c = le(t, s), [u, d] = p.useState(!1), [h, f] = p.useState("");
    return p.useEffect(() => {
      const y = s.current;
      y && f((y.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ m(
      dn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ m(V1, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ m(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: j(
              e.onPointerMove,
              fn((y) => {
                r ? a.onItemLeave(y) : (a.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: j(
              e.onPointerLeave,
              fn((y) => a.onItemLeave(y))
            ),
            onFocus: j(e.onFocus, () => d(!0)),
            onBlur: j(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), uS = "MenuCheckboxItem", Ou = p.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ m(Bu, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ m(
      yr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Kn(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": di(n),
        onSelect: j(
          o.onSelect,
          () => r == null ? void 0 : r(Kn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ou.displayName = uS;
var Lu = "MenuRadioGroup", [dS, fS] = Pt(
  Lu,
  { value: void 0, onValueChange: () => {
  } }
), Fu = p.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = qe(r);
    return /* @__PURE__ */ m(dS, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ m(ci, { ...o, ref: t }) });
  }
);
Fu.displayName = Lu;
var zu = "MenuRadioItem", $u = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = fS(zu, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ m(Bu, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ m(
      yr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": di(i),
        onSelect: j(
          r.onSelect,
          () => {
            var a;
            return (a = o.onValueChange) == null ? void 0 : a.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
$u.displayName = zu;
var ui = "MenuItemIndicator", [Bu, pS] = Pt(
  ui,
  { checked: !1 }
), Vu = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = pS(ui, n);
    return /* @__PURE__ */ m(
      rt,
      {
        present: r || Kn(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ m(
          ne.span,
          {
            ...o,
            ref: t,
            "data-state": di(i.checked)
          }
        )
      }
    );
  }
);
Vu.displayName = ui;
var hS = "MenuSeparator", Hu = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(
      ne.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Hu.displayName = hS;
var mS = "MenuArrow", ju = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = gr(n);
    return /* @__PURE__ */ m(Yo, { ...o, ...r, ref: t });
  }
);
ju.displayName = mS;
var gS = "MenuSub", [yC, Uu] = Pt(gS), rn = "MenuSubTrigger", Wu = p.forwardRef(
  (e, t) => {
    const n = At(rn, e.__scopeMenu), r = xn(rn, e.__scopeMenu), o = Uu(rn, e.__scopeMenu), i = li(rn, e.__scopeMenu), a = p.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: s } = i, c = { __scopeMenu: e.__scopeMenu }, u = p.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return p.useEffect(() => u, [u]), p.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), s(null);
      };
    }, [l, s]), /* @__PURE__ */ m(ii, { asChild: !0, ...c, children: /* @__PURE__ */ m(
      Du,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ku(n.open),
        ...e,
        ref: nt(t, o.onTriggerChange),
        onClick: (d) => {
          var h;
          (h = e.onClick) == null || h.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: j(
          e.onPointerMove,
          fn((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: j(
          e.onPointerLeave,
          fn((d) => {
            var f, y;
            u();
            const h = (f = n.content) == null ? void 0 : f.getBoundingClientRect();
            if (h) {
              const g = (y = n.content) == null ? void 0 : y.dataset.side, v = g === "right", x = v ? -5 : 5, C = h[v ? "left" : "right"], w = h[v ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + x, y: d.clientY },
                  { x: C, y: h.top },
                  { x: w, y: h.top },
                  { x: w, y: h.bottom },
                  { x: C, y: h.bottom }
                ],
                side: g
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: j(e.onKeyDown, (d) => {
          var f;
          const h = i.searchRef.current !== "";
          e.disabled || h && d.key === " " || X1[r.dir].includes(d.key) && (n.onOpenChange(!0), (f = n.content) == null || f.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Wu.displayName = rn;
var Gu = "MenuSubContent", qu = p.forwardRef(
  (e, t) => {
    const n = Tu(De, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = At(De, e.__scopeMenu), a = xn(De, e.__scopeMenu), l = Uu(Gu, e.__scopeMenu), s = p.useRef(null), c = le(t, s);
    return /* @__PURE__ */ m(dn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(rt, { present: r || i.open, children: /* @__PURE__ */ m(dn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(
      si,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          a.isUsingKeyboardRef.current && ((d = s.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: j(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: j(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: j(e.onKeyDown, (u) => {
          var f;
          const d = u.currentTarget.contains(u.target), h = Q1[a.dir].includes(u.key);
          d && h && (i.onOpenChange(!1), (f = l.trigger) == null || f.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
qu.displayName = Gu;
function Ku(e) {
  return e ? "open" : "closed";
}
function Kn(e) {
  return e === "indeterminate";
}
function di(e) {
  return Kn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function yS(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function vS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function xS(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = vS(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const s = a.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function wS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i], s = t[a], c = l.x, u = l.y, d = s.x, h = s.y;
    u > r != h > r && n < (d - c) * (r - u) / (h - u) + c && (o = !o);
  }
  return o;
}
function bS(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return wS(n, t);
}
function fn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var SS = Au, CS = ii, kS = Iu, ES = Mu, NS = ci, RS = _u, PS = yr, AS = Ou, TS = Fu, IS = $u, MS = Vu, _S = Hu, DS = ju, OS = Wu, LS = qu, vr = "DropdownMenu", [FS] = Ye(
  vr,
  [Ru]
), be = Ru(), [zS, Yu] = FS(vr), Xu = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, s = be(t), c = p.useRef(null), [u, d] = Ct({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: vr
  });
  return /* @__PURE__ */ m(
    zS,
    {
      scope: t,
      triggerId: Ue(),
      triggerRef: c,
      contentId: Ue(),
      open: u,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((h) => !h), [d]),
      modal: l,
      children: /* @__PURE__ */ m(SS, { ...s, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
Xu.displayName = vr;
var Qu = "DropdownMenuTrigger", Zu = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Yu(Qu, n), a = be(n);
    return /* @__PURE__ */ m(CS, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      ne.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: nt(t, i.triggerRef),
        onPointerDown: j(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: j(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Zu.displayName = Qu;
var $S = "DropdownMenuPortal", Ju = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = be(t);
  return /* @__PURE__ */ m(kS, { ...r, ...n });
};
Ju.displayName = $S;
var ed = "DropdownMenuContent", td = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Yu(ed, n), i = be(n), a = p.useRef(!1);
    return /* @__PURE__ */ m(
      ES,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (l) => {
          var s;
          a.current || (s = o.triggerRef.current) == null || s.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: j(e.onInteractOutside, (l) => {
          const s = l.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || c;
          (!o.modal || u) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
td.displayName = ed;
var BS = "DropdownMenuGroup", VS = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(NS, { ...o, ...r, ref: t });
  }
);
VS.displayName = BS;
var HS = "DropdownMenuLabel", nd = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(RS, { ...o, ...r, ref: t });
  }
);
nd.displayName = HS;
var jS = "DropdownMenuItem", rd = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(PS, { ...o, ...r, ref: t });
  }
);
rd.displayName = jS;
var US = "DropdownMenuCheckboxItem", od = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(AS, { ...o, ...r, ref: t });
});
od.displayName = US;
var WS = "DropdownMenuRadioGroup", GS = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(TS, { ...o, ...r, ref: t });
});
GS.displayName = WS;
var qS = "DropdownMenuRadioItem", id = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(IS, { ...o, ...r, ref: t });
});
id.displayName = qS;
var KS = "DropdownMenuItemIndicator", ad = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(MS, { ...o, ...r, ref: t });
});
ad.displayName = KS;
var YS = "DropdownMenuSeparator", ld = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(_S, { ...o, ...r, ref: t });
});
ld.displayName = YS;
var XS = "DropdownMenuArrow", QS = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(DS, { ...o, ...r, ref: t });
  }
);
QS.displayName = XS;
var ZS = "DropdownMenuSubTrigger", sd = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(OS, { ...o, ...r, ref: t });
});
sd.displayName = ZS;
var JS = "DropdownMenuSubContent", cd = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(
    LS,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
cd.displayName = JS;
var eC = Xu, tC = Zu, nC = Ju, ud = td, dd = nd, fd = rd, pd = od, hd = id, md = ad, gd = ld, yd = sd, vd = cd;
const rC = eC, oC = tC, iC = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ F(
  yd,
  {
    ref: o,
    className: te(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ m(bg, { className: "ml-auto h-4 w-4" })
    ]
  }
));
iC.displayName = yd.displayName;
const aC = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  vd,
  {
    ref: n,
    className: te(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
aC.displayName = vd.displayName;
const xd = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(nC, { children: /* @__PURE__ */ m(
  ud,
  {
    ref: r,
    sideOffset: t,
    className: te(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
xd.displayName = ud.displayName;
const Ln = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  fd,
  {
    ref: r,
    className: te(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ln.displayName = fd.displayName;
const lC = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ F(
  pd,
  {
    ref: o,
    className: te(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(md, { children: /* @__PURE__ */ m(Oo, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
lC.displayName = pd.displayName;
const sC = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
  hd,
  {
    ref: r,
    className: te(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(md, { children: /* @__PURE__ */ m(Cg, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
sC.displayName = hd.displayName;
const cC = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  dd,
  {
    ref: r,
    className: te("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
  }
));
cC.displayName = dd.displayName;
const uC = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(gd, { ref: n, className: te("-mx-1 my-1 h-px bg-muted", e), ...t }));
uC.displayName = gd.displayName;
function vC({ theme: e = "system", onThemeChange: t, labels: n = {} }) {
  const r = (o, i) => n[o] || i;
  return /* @__PURE__ */ F(rC, { children: [
    /* @__PURE__ */ m(oC, { asChild: !0, children: /* @__PURE__ */ F(_e, { variant: "outline", size: "icon", className: "h-9 w-9", children: [
      /* @__PURE__ */ m(Hg, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ m(zg, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ m("span", { className: "sr-only", children: r("toggleTheme", "Toggle theme") })
    ] }) }),
    /* @__PURE__ */ F(xd, { align: "end", children: [
      /* @__PURE__ */ F(Ln, { onClick: () => t && t("light"), children: [
        r("light", "Light"),
        " ",
        e === "light" && "✓"
      ] }),
      /* @__PURE__ */ F(Ln, { onClick: () => t && t("dark"), children: [
        r("dark", "Dark"),
        " ",
        e === "dark" && "✓"
      ] }),
      /* @__PURE__ */ F(Ln, { onClick: () => t && t("system"), children: [
        r("system", "System"),
        " ",
        e === "system" && "✓"
      ] })
    ] })
  ] });
}
function xC({
  children: e,
  labels: t = {},
  onComplete: n,
  storageKey: r = "qobouli-seen-splash",
  simulateLoadingTime: o = 2e3
}) {
  const [i, a] = ye(!0), [l, s] = ye(!1), [c, u] = ye(!0), [d, h] = ye(!1), f = (g, v) => t[g] || v;
  bt(() => {
    if (localStorage.getItem(r) === "true") {
      u(!1), n && n();
      return;
    }
    const v = setTimeout(() => {
      a(!1), s(!0);
    }, o);
    return () => clearTimeout(v);
  }, [r, o, n]);
  const y = () => {
    h(!0), localStorage.setItem(r, "true"), setTimeout(() => {
      u(!1), n && n();
    }, 600);
  };
  return c ? /* @__PURE__ */ F(
    "div",
    {
      className: `fixed inset-0 z-50 bg-background transition-opacity duration-500 flex flex-col items-center justify-center px-4 cursor-pointer ${d ? "opacity-0" : "opacity-100"}`,
      onClick: l ? y : void 0,
      children: [
        /* @__PURE__ */ F("div", { className: "fixed inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ m("div", { className: "absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent" }),
          /* @__PURE__ */ m("div", { className: "absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ F("div", { className: "relative z-10 w-full flex flex-col items-center", children: [
          /* @__PURE__ */ m("div", { className: "mb-8 animate-in zoom-in duration-500", children: /* @__PURE__ */ m("div", { className: "p-6 rounded-2xl bg-primary text-primary-foreground shadow-2xl", children: /* @__PURE__ */ m(Pl, { className: "w-16 h-16" }) }) }),
          /* @__PURE__ */ m("h1", { className: "text-4xl sm:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards opacity-0", children: f("appName", "App Name") }),
          /* @__PURE__ */ m("p", { className: "text-xl text-muted-foreground mb-12 text-center max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-forwards opacity-0", children: f("welcomeMessage", "Welcome to the platform.") }),
          /* @__PURE__ */ F("div", { className: "space-y-4 mb-12 self-center text-muted-foreground", children: [
            /* @__PURE__ */ F("div", { className: "flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-forwards opacity-0", children: [
              /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-primary" }),
              /* @__PURE__ */ m("span", { className: "text-lg", children: f("feature1", "Feature 1") })
            ] }),
            /* @__PURE__ */ F("div", { className: "flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-forwards opacity-0", children: [
              /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-primary" }),
              /* @__PURE__ */ m("span", { className: "text-lg", children: f("feature2", "Feature 2") })
            ] }),
            /* @__PURE__ */ F("div", { className: "flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-forwards opacity-0", children: [
              /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-primary" }),
              /* @__PURE__ */ m("span", { className: "text-lg", children: f("feature3", "Feature 3") })
            ] })
          ] }),
          /* @__PURE__ */ m("div", { className: "h-16 flex items-center justify-center", children: i ? /* @__PURE__ */ F("div", { className: "flex flex-col items-center gap-3 animate-in fade-in duration-700 delay-1000 fill-mode-forwards opacity-0", children: [
            /* @__PURE__ */ m("div", { className: "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" }),
            /* @__PURE__ */ m("span", { className: "text-sm text-muted-foreground", children: f("loadingMsg", "Loading...") })
          ] }) : /* @__PURE__ */ m("div", { className: "animate-in fade-in duration-700 delay-1000 fill-mode-forwards opacity-0 flex flex-col items-center gap-2", children: /* @__PURE__ */ m("span", { className: "text-xl font-medium text-primary animate-pulse", children: f("tapToEnter", "Tap Anywhere to Enter") }) }) })
        ] })
      ]
    }
  ) : /* @__PURE__ */ m(Ce, { children: e });
}
const Hr = 768;
function wC() {
  const [e, t] = p.useState(void 0);
  return p.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Hr - 1}px)`), r = () => {
      t(window.innerWidth < Hr);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Hr), () => n.removeEventListener("change", r);
  }, []), !!e;
}
export {
  _e as Button,
  Mn as Label,
  gg as MarkdownPreview,
  Kx as MarkdownToolbar,
  zb as NoteAttachments,
  mC as NoteEditor,
  gC as RecentNotes,
  xC as SplashScreen,
  As as Switch,
  vC as ThemeToggle,
  Wx as Tooltip,
  wC as useIsMobile
};
