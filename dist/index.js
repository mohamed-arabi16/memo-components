import { Fragment as Pe, jsx as m, jsxs as L } from "react/jsx-runtime";
import * as h from "react";
import vt, { forwardRef as Fa, createElement as Ur, useLayoutEffect as kd, useState as ve, useEffect as wt, useRef as Ed, useCallback as za } from "react";
import * as Yn from "react-dom";
import Nd from "react-dom";
function Ad(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Pd = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Rd = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Td = {};
function hi(e, t) {
  return (Td.jsx ? Rd : Pd).test(e);
}
const Id = /[ \t\n\f\r]/g;
function Md(e) {
  return typeof e == "object" ? e.type === "text" ? mi(e.value) : !1 : mi(e);
}
function mi(e) {
  return e.replace(Id, "") === "";
}
class hn {
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
hn.prototype.normal = {};
hn.prototype.property = {};
hn.prototype.space = void 0;
function Ba(e, t) {
  const n = {}, r = {};
  for (const o of e)
    Object.assign(n, o.property), Object.assign(r, o.normal);
  return new hn(n, r, t);
}
function jr(e) {
  return e.toLowerCase();
}
class ke {
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
ke.prototype.attribute = "";
ke.prototype.booleanish = !1;
ke.prototype.boolean = !1;
ke.prototype.commaOrSpaceSeparated = !1;
ke.prototype.commaSeparated = !1;
ke.prototype.defined = !1;
ke.prototype.mustUseProperty = !1;
ke.prototype.number = !1;
ke.prototype.overloadedBoolean = !1;
ke.prototype.property = "";
ke.prototype.spaceSeparated = !1;
ke.prototype.space = void 0;
let _d = 0;
const Z = At(), ge = At(), Wr = At(), M = At(), pe = At(), Ot = At(), Ne = At();
function At() {
  return 2 ** ++_d;
}
const Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Z,
  booleanish: ge,
  commaOrSpaceSeparated: Ne,
  commaSeparated: Ot,
  number: M,
  overloadedBoolean: Wr,
  spaceSeparated: pe
}, Symbol.toStringTag, { value: "Module" })), wr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Gr)
);
class wo extends ke {
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
    if (super(t, n), gi(this, "space", o), typeof r == "number")
      for (; ++i < wr.length; ) {
        const a = wr[i];
        gi(this, wr[i], (r & Gr[a]) === Gr[a]);
      }
  }
}
wo.prototype.defined = !0;
function gi(e, t, n) {
  n && (e[t] = n);
}
function Ut(e) {
  const t = {}, n = {};
  for (const [r, o] of Object.entries(e.properties)) {
    const i = new wo(
      r,
      e.transform(e.attributes || {}, r),
      o,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[jr(r)] = r, n[jr(i.attribute)] = r;
  }
  return new hn(t, n, e.space);
}
const $a = Ut({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ge,
    ariaAutoComplete: null,
    ariaBusy: ge,
    ariaChecked: ge,
    ariaColCount: M,
    ariaColIndex: M,
    ariaColSpan: M,
    ariaControls: pe,
    ariaCurrent: null,
    ariaDescribedBy: pe,
    ariaDetails: null,
    ariaDisabled: ge,
    ariaDropEffect: pe,
    ariaErrorMessage: null,
    ariaExpanded: ge,
    ariaFlowTo: pe,
    ariaGrabbed: ge,
    ariaHasPopup: null,
    ariaHidden: ge,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: pe,
    ariaLevel: M,
    ariaLive: null,
    ariaModal: ge,
    ariaMultiLine: ge,
    ariaMultiSelectable: ge,
    ariaOrientation: null,
    ariaOwns: pe,
    ariaPlaceholder: null,
    ariaPosInSet: M,
    ariaPressed: ge,
    ariaReadOnly: ge,
    ariaRelevant: null,
    ariaRequired: ge,
    ariaRoleDescription: pe,
    ariaRowCount: M,
    ariaRowIndex: M,
    ariaRowSpan: M,
    ariaSelected: ge,
    ariaSetSize: M,
    ariaSort: null,
    ariaValueMax: M,
    ariaValueMin: M,
    ariaValueNow: M,
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
function Va(e, t) {
  return Ha(e, t.toLowerCase());
}
const Dd = Ut({
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
    acceptCharset: pe,
    accessKey: pe,
    action: null,
    allow: null,
    allowFullScreen: Z,
    allowPaymentRequest: Z,
    allowUserMedia: Z,
    alt: null,
    as: null,
    async: Z,
    autoCapitalize: null,
    autoComplete: pe,
    autoFocus: Z,
    autoPlay: Z,
    blocking: pe,
    capture: null,
    charSet: null,
    checked: Z,
    cite: null,
    className: pe,
    cols: M,
    colSpan: null,
    content: null,
    contentEditable: ge,
    controls: Z,
    controlsList: pe,
    coords: M | Ot,
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
    headers: pe,
    height: M,
    hidden: Wr,
    high: M,
    href: null,
    hrefLang: null,
    htmlFor: pe,
    httpEquiv: pe,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Z,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Z,
    itemId: null,
    itemProp: pe,
    itemRef: pe,
    itemScope: Z,
    itemType: pe,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Z,
    low: M,
    manifest: null,
    max: null,
    maxLength: M,
    media: null,
    method: null,
    min: null,
    minLength: M,
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
    optimum: M,
    pattern: null,
    ping: pe,
    placeholder: null,
    playsInline: Z,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Z,
    referrerPolicy: null,
    rel: pe,
    required: Z,
    reversed: Z,
    rows: M,
    rowSpan: M,
    sandbox: pe,
    scope: null,
    scoped: Z,
    seamless: Z,
    selected: Z,
    shadowRootClonable: Z,
    shadowRootDelegatesFocus: Z,
    shadowRootMode: null,
    shape: null,
    size: M,
    sizes: null,
    slot: null,
    span: M,
    spellCheck: ge,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: M,
    step: null,
    style: null,
    tabIndex: M,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Z,
    useMap: null,
    value: ge,
    width: M,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: pe,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: M,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: M,
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
    hSpace: M,
    // `<img>` and `<object>`
    leftMargin: M,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: M,
    // `<body>`
    marginWidth: M,
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
    rightMargin: M,
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
    topMargin: M,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: M,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Z,
    disableRemotePlayback: Z,
    prefix: null,
    property: null,
    results: M,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Va
}), Od = Ut({
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
    about: Ne,
    accentHeight: M,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: M,
    amplitude: M,
    arabicForm: null,
    ascent: M,
    attributeName: null,
    attributeType: null,
    azimuth: M,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: M,
    by: null,
    calcMode: null,
    capHeight: M,
    className: pe,
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
    descent: M,
    diffuseConstant: M,
    direction: null,
    display: null,
    dur: null,
    divisor: M,
    dominantBaseline: null,
    download: Z,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: M,
    enableBackground: null,
    end: null,
    event: null,
    exponent: M,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: M,
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
    hanging: M,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: M,
    horizOriginX: M,
    horizOriginY: M,
    id: null,
    ideographic: M,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: M,
    k: M,
    k1: M,
    k2: M,
    k3: M,
    k4: M,
    kernelMatrix: Ne,
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
    limitingConeAngle: M,
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
    mediaSize: M,
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
    overlinePosition: M,
    overlineThickness: M,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: M,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: pe,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: M,
    pointsAtY: M,
    pointsAtZ: M,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ne,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ne,
    rev: Ne,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ne,
    requiredFeatures: Ne,
    requiredFonts: Ne,
    requiredFormats: Ne,
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
    specularConstant: M,
    specularExponent: M,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: M,
    strikethroughThickness: M,
    string: null,
    stroke: null,
    strokeDashArray: Ne,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: M,
    strokeOpacity: M,
    strokeWidth: null,
    style: null,
    surfaceScale: M,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ne,
    tabIndex: M,
    tableValues: null,
    target: null,
    targetX: M,
    targetY: M,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ne,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: M,
    underlineThickness: M,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: M,
    values: null,
    vAlphabetic: M,
    vMathematical: M,
    vectorEffect: null,
    vHanging: M,
    vIdeographic: M,
    version: null,
    vertAdvY: M,
    vertOriginX: M,
    vertOriginY: M,
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
    xHeight: M,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ha
}), Ua = Ut({
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
}), ja = Ut({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Va
}), Wa = Ut({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Ld = {
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
}, Fd = /[A-Z]/g, yi = /-[a-z]/g, zd = /^data[-\w.:]+$/i;
function Bd(e, t) {
  const n = jr(t);
  let r = t, o = ke;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && zd.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(yi, Hd);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!yi.test(i)) {
        let a = i.replace(Fd, $d);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    o = wo;
  }
  return new o(r, t);
}
function $d(e) {
  return "-" + e.toLowerCase();
}
function Hd(e) {
  return e.charAt(1).toUpperCase();
}
const Vd = Ba([$a, Dd, Ua, ja, Wa], "html"), bo = Ba([$a, Od, Ua, ja, Wa], "svg");
function Ud(e) {
  return e.join(" ").trim();
}
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ga(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var So = {}, vi = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, jd = /\n/g, Wd = /^\s*/, Gd = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, qd = /^:\s*/, Kd = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Yd = /^[;\s]*/, Xd = /^\s+|\s+$/g, Qd = `
`, xi = "/", wi = "*", xt = "", Zd = "comment", Jd = "declaration";
function ef(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(y) {
    var g = y.match(jd);
    g && (n += g.length);
    var x = y.lastIndexOf(Qd);
    r = ~x ? y.length - x : r + y.length;
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
      var x = g[0];
      return o(x), e = e.slice(x.length), g;
    }
  }
  function c() {
    s(Wd);
  }
  function u(y) {
    var g;
    for (y = y || []; g = d(); )
      g !== !1 && y.push(g);
    return y;
  }
  function d() {
    var y = i();
    if (!(xi != e.charAt(0) || wi != e.charAt(1))) {
      for (var g = 2; xt != e.charAt(g) && (wi != e.charAt(g) || xi != e.charAt(g + 1)); )
        ++g;
      if (g += 2, xt === e.charAt(g - 1))
        return l("End of comment missing");
      var x = e.slice(2, g - 2);
      return r += 2, o(x), e = e.slice(g), r += 2, y({
        type: Zd,
        comment: x
      });
    }
  }
  function p() {
    var y = i(), g = s(Gd);
    if (g) {
      if (d(), !s(qd)) return l("property missing ':'");
      var x = s(Kd), v = y({
        type: Jd,
        property: bi(g[0].replace(vi, xt)),
        value: x ? bi(x[0].replace(vi, xt)) : xt
      });
      return s(Yd), v;
    }
  }
  function f() {
    var y = [];
    u(y);
    for (var g; g = p(); )
      g !== !1 && (y.push(g), u(y));
    return y;
  }
  return c(), f();
}
function bi(e) {
  return e ? e.replace(Xd, xt) : xt;
}
var tf = ef, nf = zn && zn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(So, "__esModule", { value: !0 });
So.default = of;
const rf = nf(tf);
function of(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, rf.default)(e), o = typeof t == "function";
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
var af = /^--[a-zA-Z0-9_-]+$/, lf = /-([a-z])/g, sf = /^[^-]+$/, cf = /^-(webkit|moz|ms|o|khtml)-/, uf = /^-(ms)-/, df = function(e) {
  return !e || sf.test(e) || af.test(e);
}, ff = function(e, t) {
  return t.toUpperCase();
}, Si = function(e, t) {
  return "".concat(t, "-");
}, pf = function(e, t) {
  return t === void 0 && (t = {}), df(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(uf, Si) : e = e.replace(cf, Si), e.replace(lf, ff));
};
Xn.camelCase = pf;
var hf = zn && zn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, mf = hf(So), gf = Xn;
function qr(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, mf.default)(e, function(r, o) {
    r && o && (n[(0, gf.camelCase)(r, t)] = o);
  }), n;
}
qr.default = qr;
var yf = qr;
const vf = /* @__PURE__ */ Ga(yf), qa = Ka("end"), Co = Ka("start");
function Ka(e) {
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
function xf(e) {
  const t = Co(e), n = qa(e);
  if (t && n)
    return { start: t, end: n };
}
function on(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ci(e.position) : "start" in e || "end" in e ? Ci(e) : "line" in e || "column" in e ? Kr(e) : "";
}
function Kr(e) {
  return ki(e && e.line) + ":" + ki(e && e.column);
}
function Ci(e) {
  return Kr(e && e.start) + "-" + Kr(e && e.end);
}
function ki(e) {
  return e && typeof e == "number" ? e : 1;
}
class we extends Error {
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
we.prototype.file = "";
we.prototype.name = "";
we.prototype.reason = "";
we.prototype.message = "";
we.prototype.stack = "";
we.prototype.column = void 0;
we.prototype.line = void 0;
we.prototype.ancestors = void 0;
we.prototype.cause = void 0;
we.prototype.fatal = void 0;
we.prototype.place = void 0;
we.prototype.ruleId = void 0;
we.prototype.source = void 0;
const ko = {}.hasOwnProperty, wf = /* @__PURE__ */ new Map(), bf = /[A-Z]/g, Sf = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Cf = /* @__PURE__ */ new Set(["td", "th"]), Ya = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function kf(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Mf(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = If(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? bo : Vd,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, i = Xa(o, e, void 0);
  return i && typeof i != "string" ? i : o.create(
    e,
    o.Fragment,
    { children: i || void 0 },
    void 0
  );
}
function Xa(e, t, n) {
  if (t.type === "element")
    return Ef(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Nf(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Pf(e, t, n);
  if (t.type === "mdxjsEsm")
    return Af(e, t);
  if (t.type === "root")
    return Rf(e, t, n);
  if (t.type === "text")
    return Tf(e, t);
}
function Ef(e, t, n) {
  const r = e.schema;
  let o = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (o = bo, e.schema = o), e.ancestors.push(t);
  const i = Za(e, t.tagName, !1), a = _f(e, t);
  let l = No(e, t);
  return Sf.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !Md(s) : !0;
  })), Qa(e, a, i, t), Eo(a, l), e.ancestors.pop(), e.schema = r, e.create(t, i, a, n);
}
function Nf(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  sn(e, t.position);
}
function Af(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  sn(e, t.position);
}
function Pf(e, t, n) {
  const r = e.schema;
  let o = r;
  t.name === "svg" && r.space === "html" && (o = bo, e.schema = o), e.ancestors.push(t);
  const i = t.name === null ? e.Fragment : Za(e, t.name, !0), a = Df(e, t), l = No(e, t);
  return Qa(e, a, i, t), Eo(a, l), e.ancestors.pop(), e.schema = r, e.create(t, i, a, n);
}
function Rf(e, t, n) {
  const r = {};
  return Eo(r, No(e, t)), e.create(t, e.Fragment, r, n);
}
function Tf(e, t) {
  return t.value;
}
function Qa(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Eo(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function If(e, t, n) {
  return r;
  function r(o, i, a, l) {
    const c = Array.isArray(a.children) ? n : t;
    return l ? c(i, a, l) : c(i, a);
  }
}
function Mf(e, t) {
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
function _f(e, t) {
  const n = {};
  let r, o;
  for (o in t.properties)
    if (o !== "children" && ko.call(t.properties, o)) {
      const i = Of(e, o, t.properties[o]);
      if (i) {
        const [a, l] = i;
        e.tableCellAlignToStyle && a === "align" && typeof l == "string" && Cf.has(t.tagName) ? r = l : n[a] = l;
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
function Df(e, t) {
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
  const o = e.passKeys ? /* @__PURE__ */ new Map() : wf;
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
    const l = Xa(e, i, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function Of(e, t, n) {
  const r = Bd(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Ad(n) : Ud(n)), r.property === "style") {
      let o = typeof n == "object" ? n : Lf(e, String(n));
      return e.stylePropertyNameCase === "css" && (o = Ff(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Ld[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Lf(e, t) {
  try {
    return vf(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), o = new we("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw o.file = e.filePath || void 0, o.url = Ya + "#cannot-parse-style-attribute", o;
  }
}
function Za(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let i = -1, a;
    for (; ++i < o.length; ) {
      const l = hi(o[i]) ? { type: "Identifier", name: o[i] } : { type: "Literal", value: o[i] };
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
    r = hi(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
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
  const n = new we(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ya + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ff(e) {
  const t = {};
  let n;
  for (n in e)
    ko.call(e, n) && (t[zf(n)] = e[n]);
  return t;
}
function zf(e) {
  let t = e.replace(bf, Bf);
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
}, $f = {};
function Hf(e, t) {
  const n = $f, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ja(e, r, o);
}
function Ja(e, t, n) {
  if (Vf(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ei(e.children, t, n);
  }
  return Array.isArray(e) ? Ei(e, t, n) : "";
}
function Ei(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = Ja(e[o], t, n);
  return r.join("");
}
function Vf(e) {
  return !!(e && typeof e == "object");
}
const Ni = document.createElement("i");
function Ao(e) {
  const t = "&" + e + ";";
  Ni.innerHTML = t;
  const n = Ni.textContent;
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
const Ai = {}.hasOwnProperty;
function Uf(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    jf(t, e[n]);
  return t;
}
function jf(e, t) {
  let n;
  for (n in t) {
    const o = (Ai.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let a;
    if (i)
      for (a in i) {
        Ai.call(o, a) || (o[a] = []);
        const l = i[a];
        Wf(
          // @ts-expect-error Looks like a list.
          o[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Wf(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ge(e, 0, 0, r);
}
function el(e, t) {
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
const He = pt(/[A-Za-z]/), Re = pt(/[\dA-Za-z]/), Gf = pt(/[#-'*+\--9=?A-Z^-~]/);
function Yr(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Xr = pt(/\d/), qf = pt(/[\dA-Fa-f]/), Kf = pt(/[!-/:-@[-`{-~]/);
function q(e) {
  return e !== null && e < -2;
}
function Ce(e) {
  return e !== null && (e < 0 || e === 32);
}
function ce(e) {
  return e === -2 || e === -1 || e === 32;
}
const Yf = pt(new RegExp("\\p{P}|\\p{S}", "u")), Xf = pt(/\s/);
function pt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function jt(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let a = "";
    if (i === 37 && Re(e.charCodeAt(n + 1)) && Re(e.charCodeAt(n + 2)))
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
function he(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return a;
  function a(s) {
    return ce(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return ce(s) && i++ < o ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const Qf = {
  tokenize: Zf
};
function Zf(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, o);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), he(e, t, "linePrefix");
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
const Jf = {
  tokenize: ep
}, Pi = {
  tokenize: tp
};
function ep(e) {
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
      let N = E, k;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          k = t.events[N][1].end;
          break;
        }
      v(r);
      let A = E;
      for (; A < t.events.length; )
        t.events[A][1].end = {
          ...k
        }, A++;
      return Ge(t.events, N + 1, 0, t.events.slice(E)), t.events.length = A, c(w);
    }
    return l(w);
  }
  function c(w) {
    if (r === n.length) {
      if (!o)
        return p(w);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return y(w);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Pi, u, d)(w);
  }
  function u(w) {
    return o && C(), v(r), p(w);
  }
  function d(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, y(w);
  }
  function p(w) {
    return t.containerState = {}, e.attempt(Pi, f, y)(w);
  }
  function f(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(w);
  }
  function y(w) {
    if (w === null) {
      o && C(), v(0), e.consume(w);
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
      x(e.exit("chunkFlow"), !0), v(0), e.consume(w);
      return;
    }
    return q(w) ? (e.consume(w), x(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(w), g);
  }
  function x(w, E) {
    const N = t.sliceStream(w);
    if (E && N.push(null), w.previous = i, i && (i.next = w), i = w, o.defineSkip(w.start), o.write(N), t.parser.lazy[w.start.line]) {
      let k = o.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          o.events[k][1].start.offset < a && // …and either is not ended yet…
          (!o.events[k][1].end || // …or ends after it.
          o.events[k][1].end.offset > a)
        )
          return;
      const A = t.events.length;
      let _ = A, F, z;
      for (; _--; )
        if (t.events[_][0] === "exit" && t.events[_][1].type === "chunkFlow") {
          if (F) {
            z = t.events[_][1].end;
            break;
          }
          F = !0;
        }
      for (v(r), k = A; k < t.events.length; )
        t.events[k][1].end = {
          ...z
        }, k++;
      Ge(t.events, _ + 1, 0, t.events.slice(A)), t.events.length = k;
    }
  }
  function v(w) {
    let E = n.length;
    for (; E-- > w; ) {
      const N = n[E];
      t.containerState = N[1], N[0].exit.call(t, e);
    }
    n.length = w;
  }
  function C() {
    o.write([null]), i = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function tp(e, t, n) {
  return he(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Ri(e) {
  if (e === null || Ce(e) || Xf(e))
    return 1;
  if (Yf(e))
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
  resolveAll: np,
  tokenize: rp
};
function np(e, t) {
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
          }, p = {
            ...e[n][1].start
          };
          Ti(d, -s), Ti(p, s), a = {
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
            end: p
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
function rp(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Ri(r);
  let i;
  return a;
  function a(s) {
    return i = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === i)
      return e.consume(s), l;
    const c = e.exit("attentionSequence"), u = Ri(s), d = !u || u === 2 && o || n.includes(s), p = !o || o === 2 && u || n.includes(r);
    return c._open = !!(i === 42 ? d : d && (o || !p)), c._close = !!(i === 42 ? p : p && (u || !d)), t(s);
  }
}
function Ti(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const op = {
  name: "autolink",
  tokenize: ip
};
function ip(e, t, n) {
  let r = 0;
  return o;
  function o(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(f) {
    return He(f) ? (e.consume(f), a) : f === 64 ? n(f) : c(f);
  }
  function a(f) {
    return f === 43 || f === 45 || f === 46 || Re(f) ? (r = 1, l(f)) : c(f);
  }
  function l(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || Re(f)) && r++ < 32 ? (e.consume(f), l) : (r = 0, c(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Yr(f) ? n(f) : (e.consume(f), s);
  }
  function c(f) {
    return f === 64 ? (e.consume(f), u) : Gf(f) ? (e.consume(f), c) : n(f);
  }
  function u(f) {
    return Re(f) ? d(f) : n(f);
  }
  function d(f) {
    return f === 46 ? (e.consume(f), r = 0, u) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(f);
  }
  function p(f) {
    if ((f === 45 || Re(f)) && r++ < 63) {
      const y = f === 45 ? p : d;
      return e.consume(f), y;
    }
    return n(f);
  }
}
const Qn = {
  partial: !0,
  tokenize: ap
};
function ap(e, t, n) {
  return r;
  function r(i) {
    return ce(i) ? he(e, o, "linePrefix")(i) : o(i);
  }
  function o(i) {
    return i === null || q(i) ? t(i) : n(i);
  }
}
const tl = {
  continuation: {
    tokenize: sp
  },
  exit: cp,
  name: "blockQuote",
  tokenize: lp
};
function lp(e, t, n) {
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
    return ce(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function sp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return ce(a) ? he(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : i(a);
  }
  function i(a) {
    return e.attempt(tl, t, n)(a);
  }
}
function cp(e) {
  e.exit("blockQuote");
}
const nl = {
  name: "characterEscape",
  tokenize: up
};
function up(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return Kf(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const rl = {
  name: "characterReference",
  tokenize: dp
};
function dp(e, t, n) {
  const r = this;
  let o = 0, i, a;
  return l;
  function l(d) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), s;
  }
  function s(d) {
    return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), i = 31, a = Re, u(d));
  }
  function c(d) {
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, a = qf, u) : (e.enter("characterReferenceValue"), i = 7, a = Xr, u(d));
  }
  function u(d) {
    if (d === 59 && o) {
      const p = e.exit("characterReferenceValue");
      return a === Re && !Ao(r.sliceSerialize(p)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(d) && o++ < i ? (e.consume(d), u) : n(d);
  }
}
const Ii = {
  partial: !0,
  tokenize: pp
}, Mi = {
  concrete: !0,
  name: "codeFenced",
  tokenize: fp
};
function fp(e, t, n) {
  const r = this, o = {
    partial: !0,
    tokenize: N
  };
  let i = 0, a = 0, l;
  return s;
  function s(k) {
    return c(k);
  }
  function c(k) {
    const A = r.events[r.events.length - 1];
    return i = A && A[1].type === "linePrefix" ? A[2].sliceSerialize(A[1], !0).length : 0, l = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(k);
  }
  function u(k) {
    return k === l ? (a++, e.consume(k), u) : a < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), ce(k) ? he(e, d, "whitespace")(k) : d(k));
  }
  function d(k) {
    return k === null || q(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(Ii, g, E)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === null || q(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(k)) : ce(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), he(e, f, "whitespace")(k)) : k === 96 && k === l ? n(k) : (e.consume(k), p);
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
    return e.attempt(o, E, x)(k);
  }
  function x(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), v;
  }
  function v(k) {
    return i > 0 && ce(k) ? he(e, C, "linePrefix", i + 1)(k) : C(k);
  }
  function C(k) {
    return k === null || q(k) ? e.check(Ii, g, E)(k) : (e.enter("codeFlowValue"), w(k));
  }
  function w(k) {
    return k === null || q(k) ? (e.exit("codeFlowValue"), C(k)) : (e.consume(k), w);
  }
  function E(k) {
    return e.exit("codeFenced"), t(k);
  }
  function N(k, A, _) {
    let F = 0;
    return z;
    function z(B) {
      return k.enter("lineEnding"), k.consume(B), k.exit("lineEnding"), T;
    }
    function T(B) {
      return k.enter("codeFencedFence"), ce(B) ? he(k, R, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(B) : R(B);
    }
    function R(B) {
      return B === l ? (k.enter("codeFencedFenceSequence"), U(B)) : _(B);
    }
    function U(B) {
      return B === l ? (F++, k.consume(B), U) : F >= a ? (k.exit("codeFencedFenceSequence"), ce(B) ? he(k, H, "whitespace")(B) : H(B)) : _(B);
    }
    function H(B) {
      return B === null || q(B) ? (k.exit("codeFencedFence"), A(B)) : _(B);
    }
  }
}
function pp(e, t, n) {
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
  tokenize: mp
}, hp = {
  partial: !0,
  tokenize: gp
};
function mp(e, t, n) {
  const r = this;
  return o;
  function o(c) {
    return e.enter("codeIndented"), he(e, i, "linePrefix", 5)(c);
  }
  function i(c) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? a(c) : n(c);
  }
  function a(c) {
    return c === null ? s(c) : q(c) ? e.attempt(hp, a, s)(c) : (e.enter("codeFlowValue"), l(c));
  }
  function l(c) {
    return c === null || q(c) ? (e.exit("codeFlowValue"), a(c)) : (e.consume(c), l);
  }
  function s(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function gp(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : q(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : he(e, i, "linePrefix", 5)(a);
  }
  function i(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : q(a) ? o(a) : n(a);
  }
}
const yp = {
  name: "codeText",
  previous: xp,
  resolve: vp,
  tokenize: wp
};
function vp(e) {
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
function xp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function wp(e, t, n) {
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
class bp {
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
function ol(e) {
  const t = {};
  let n = -1, r, o, i, a, l, s, c;
  const u = new bp(e);
  for (; ++n < u.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Sp(u, n)), n = t[n], c = !0);
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
function Sp(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let o = t - 1;
  const i = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const l = a.events, s = [], c = {};
  let u, d, p = -1, f = n, y = 0, g = 0;
  const x = [g];
  for (; f; ) {
    for (; e.get(++o)[1] !== f; )
      ;
    i.push(o), f._tokenizer || (u = r.sliceStream(f), f.next || u.push(null), d && a.defineSkip(f.start), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(u), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next;
  }
  for (f = n; ++p < l.length; )
    // Find a void token that includes a break.
    l[p][0] === "exit" && l[p - 1][0] === "enter" && l[p][1].type === l[p - 1][1].type && l[p][1].start.line !== l[p][1].end.line && (g = p + 1, x.push(g), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (a.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : x.pop(), p = x.length; p--; ) {
    const v = l.slice(x[p], x[p + 1]), C = i.pop();
    s.push([C, C + v.length - 1]), e.splice(C, 2, v);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    c[y + s[p][0]] = y + s[p][1], y += s[p][1] - s[p][0] - 1;
  return c;
}
const Cp = {
  resolve: Ep,
  tokenize: Np
}, kp = {
  partial: !0,
  tokenize: Ap
};
function Ep(e) {
  return ol(e), e;
}
function Np(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(l);
  }
  function o(l) {
    return l === null ? i(l) : q(l) ? e.check(kp, a, i)(l) : (e.consume(l), o);
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
function Ap(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), he(e, i, "linePrefix");
  }
  function i(a) {
    if (a === null || q(a))
      return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function il(e, t, n, r, o, i, a, l, s) {
  const c = s || Number.POSITIVE_INFINITY;
  let u = 0;
  return d;
  function d(v) {
    return v === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(v), e.exit(i), p) : v === null || v === 32 || v === 41 || Yr(v) ? n(v) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), g(v));
  }
  function p(v) {
    return v === 62 ? (e.enter(i), e.consume(v), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), f(v));
  }
  function f(v) {
    return v === 62 ? (e.exit("chunkString"), e.exit(l), p(v)) : v === null || v === 60 || q(v) ? n(v) : (e.consume(v), v === 92 ? y : f);
  }
  function y(v) {
    return v === 60 || v === 62 || v === 92 ? (e.consume(v), f) : f(v);
  }
  function g(v) {
    return !u && (v === null || v === 41 || Ce(v)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(v)) : u < c && v === 40 ? (e.consume(v), u++, g) : v === 41 ? (e.consume(v), u--, g) : v === null || v === 32 || v === 40 || Yr(v) ? n(v) : (e.consume(v), v === 92 ? x : g);
  }
  function x(v) {
    return v === 40 || v === 41 || v === 92 ? (e.consume(v), g) : g(v);
  }
}
function al(e, t, n, r, o, i) {
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
    return f === null || f === 91 || f === 93 || q(f) || l++ > 999 ? (e.exit("chunkString"), u(f)) : (e.consume(f), s || (s = !ce(f)), f === 92 ? p : d);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), l++, d) : d(f);
  }
}
function ll(e, t, n, r, o, i) {
  let a;
  return l;
  function l(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(o), e.consume(p), e.exit(o), a = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === a ? (e.enter(o), e.consume(p), e.exit(o), e.exit(r), t) : (e.enter(i), c(p));
  }
  function c(p) {
    return p === a ? (e.exit(i), s(a)) : p === null ? n(p) : q(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), he(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), u(p));
  }
  function u(p) {
    return p === a || p === null || q(p) ? (e.exit("chunkString"), c(p)) : (e.consume(p), p === 92 ? d : u);
  }
  function d(p) {
    return p === a || p === 92 ? (e.consume(p), u) : u(p);
  }
}
function an(e, t) {
  let n;
  return r;
  function r(o) {
    return q(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : ce(o) ? he(e, r, n ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const Pp = {
  name: "definition",
  tokenize: Tp
}, Rp = {
  partial: !0,
  tokenize: Ip
};
function Tp(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(f) {
    return e.enter("definition"), a(f);
  }
  function a(f) {
    return al.call(
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
    return Ce(f) ? an(e, c)(f) : c(f);
  }
  function c(f) {
    return il(
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
    return e.attempt(Rp, d, d)(f);
  }
  function d(f) {
    return ce(f) ? he(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || q(f) ? (e.exit("definition"), r.parser.defined.push(o), t(f)) : n(f);
  }
}
function Ip(e, t, n) {
  return r;
  function r(l) {
    return Ce(l) ? an(e, o)(l) : n(l);
  }
  function o(l) {
    return ll(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function i(l) {
    return ce(l) ? he(e, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || q(l) ? t(l) : n(l);
  }
}
const Mp = {
  name: "hardBreakEscape",
  tokenize: _p
};
function _p(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.consume(i), o;
  }
  function o(i) {
    return q(i) ? (e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const Dp = {
  name: "headingAtx",
  resolve: Op,
  tokenize: Lp
};
function Op(e, t) {
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
function Lp(e, t, n) {
  let r = 0;
  return o;
  function o(u) {
    return e.enter("atxHeading"), i(u);
  }
  function i(u) {
    return e.enter("atxHeadingSequence"), a(u);
  }
  function a(u) {
    return u === 35 && r++ < 6 ? (e.consume(u), a) : u === null || Ce(u) ? (e.exit("atxHeadingSequence"), l(u)) : n(u);
  }
  function l(u) {
    return u === 35 ? (e.enter("atxHeadingSequence"), s(u)) : u === null || q(u) ? (e.exit("atxHeading"), t(u)) : ce(u) ? he(e, l, "whitespace")(u) : (e.enter("atxHeadingText"), c(u));
  }
  function s(u) {
    return u === 35 ? (e.consume(u), s) : (e.exit("atxHeadingSequence"), l(u));
  }
  function c(u) {
    return u === null || u === 35 || Ce(u) ? (e.exit("atxHeadingText"), l(u)) : (e.consume(u), c);
  }
}
const Fp = [
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
], _i = ["pre", "script", "style", "textarea"], zp = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Hp,
  tokenize: Vp
}, Bp = {
  partial: !0,
  tokenize: jp
}, $p = {
  partial: !0,
  tokenize: Up
};
function Hp(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Vp(e, t, n) {
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
    return S === 33 ? (e.consume(S), p) : S === 47 ? (e.consume(S), i = !0, g) : S === 63 ? (e.consume(S), o = 3, r.interrupt ? t : b) : He(S) ? (e.consume(S), a = String.fromCharCode(S), x) : n(S);
  }
  function p(S) {
    return S === 45 ? (e.consume(S), o = 2, f) : S === 91 ? (e.consume(S), o = 5, l = 0, y) : He(S) ? (e.consume(S), o = 4, r.interrupt ? t : b) : n(S);
  }
  function f(S) {
    return S === 45 ? (e.consume(S), r.interrupt ? t : b) : n(S);
  }
  function y(S) {
    const W = "CDATA[";
    return S === W.charCodeAt(l++) ? (e.consume(S), l === W.length ? r.interrupt ? t : R : y) : n(S);
  }
  function g(S) {
    return He(S) ? (e.consume(S), a = String.fromCharCode(S), x) : n(S);
  }
  function x(S) {
    if (S === null || S === 47 || S === 62 || Ce(S)) {
      const W = S === 47, de = a.toLowerCase();
      return !W && !i && _i.includes(de) ? (o = 1, r.interrupt ? t(S) : R(S)) : Fp.includes(a.toLowerCase()) ? (o = 6, W ? (e.consume(S), v) : r.interrupt ? t(S) : R(S)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(S) : i ? C(S) : w(S));
    }
    return S === 45 || Re(S) ? (e.consume(S), a += String.fromCharCode(S), x) : n(S);
  }
  function v(S) {
    return S === 62 ? (e.consume(S), r.interrupt ? t : R) : n(S);
  }
  function C(S) {
    return ce(S) ? (e.consume(S), C) : z(S);
  }
  function w(S) {
    return S === 47 ? (e.consume(S), z) : S === 58 || S === 95 || He(S) ? (e.consume(S), E) : ce(S) ? (e.consume(S), w) : z(S);
  }
  function E(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Re(S) ? (e.consume(S), E) : N(S);
  }
  function N(S) {
    return S === 61 ? (e.consume(S), k) : ce(S) ? (e.consume(S), N) : w(S);
  }
  function k(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? n(S) : S === 34 || S === 39 ? (e.consume(S), s = S, A) : ce(S) ? (e.consume(S), k) : _(S);
  }
  function A(S) {
    return S === s ? (e.consume(S), s = null, F) : S === null || q(S) ? n(S) : (e.consume(S), A);
  }
  function _(S) {
    return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || Ce(S) ? N(S) : (e.consume(S), _);
  }
  function F(S) {
    return S === 47 || S === 62 || ce(S) ? w(S) : n(S);
  }
  function z(S) {
    return S === 62 ? (e.consume(S), T) : n(S);
  }
  function T(S) {
    return S === null || q(S) ? R(S) : ce(S) ? (e.consume(S), T) : n(S);
  }
  function R(S) {
    return S === 45 && o === 2 ? (e.consume(S), I) : S === 60 && o === 1 ? (e.consume(S), G) : S === 62 && o === 4 ? (e.consume(S), K) : S === 63 && o === 3 ? (e.consume(S), b) : S === 93 && o === 5 ? (e.consume(S), D) : q(S) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(Bp, ue, U)(S)) : S === null || q(S) ? (e.exit("htmlFlowData"), U(S)) : (e.consume(S), R);
  }
  function U(S) {
    return e.check($p, H, ue)(S);
  }
  function H(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), B;
  }
  function B(S) {
    return S === null || q(S) ? U(S) : (e.enter("htmlFlowData"), R(S));
  }
  function I(S) {
    return S === 45 ? (e.consume(S), b) : R(S);
  }
  function G(S) {
    return S === 47 ? (e.consume(S), a = "", $) : R(S);
  }
  function $(S) {
    if (S === 62) {
      const W = a.toLowerCase();
      return _i.includes(W) ? (e.consume(S), K) : R(S);
    }
    return He(S) && a.length < 8 ? (e.consume(S), a += String.fromCharCode(S), $) : R(S);
  }
  function D(S) {
    return S === 93 ? (e.consume(S), b) : R(S);
  }
  function b(S) {
    return S === 62 ? (e.consume(S), K) : S === 45 && o === 2 ? (e.consume(S), b) : R(S);
  }
  function K(S) {
    return S === null || q(S) ? (e.exit("htmlFlowData"), ue(S)) : (e.consume(S), K);
  }
  function ue(S) {
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
function jp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Qn, t, n);
  }
}
const Wp = {
  name: "htmlText",
  tokenize: Gp
};
function Gp(e, t, n) {
  const r = this;
  let o, i, a;
  return l;
  function l(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), s;
  }
  function s(b) {
    return b === 33 ? (e.consume(b), c) : b === 47 ? (e.consume(b), N) : b === 63 ? (e.consume(b), w) : He(b) ? (e.consume(b), _) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), u) : b === 91 ? (e.consume(b), i = 0, y) : He(b) ? (e.consume(b), C) : n(b);
  }
  function u(b) {
    return b === 45 ? (e.consume(b), f) : n(b);
  }
  function d(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), p) : q(b) ? (a = d, G(b)) : (e.consume(b), d);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), f) : d(b);
  }
  function f(b) {
    return b === 62 ? I(b) : b === 45 ? p(b) : d(b);
  }
  function y(b) {
    const K = "CDATA[";
    return b === K.charCodeAt(i++) ? (e.consume(b), i === K.length ? g : y) : n(b);
  }
  function g(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), x) : q(b) ? (a = g, G(b)) : (e.consume(b), g);
  }
  function x(b) {
    return b === 93 ? (e.consume(b), v) : g(b);
  }
  function v(b) {
    return b === 62 ? I(b) : b === 93 ? (e.consume(b), v) : g(b);
  }
  function C(b) {
    return b === null || b === 62 ? I(b) : q(b) ? (a = C, G(b)) : (e.consume(b), C);
  }
  function w(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), E) : q(b) ? (a = w, G(b)) : (e.consume(b), w);
  }
  function E(b) {
    return b === 62 ? I(b) : w(b);
  }
  function N(b) {
    return He(b) ? (e.consume(b), k) : n(b);
  }
  function k(b) {
    return b === 45 || Re(b) ? (e.consume(b), k) : A(b);
  }
  function A(b) {
    return q(b) ? (a = A, G(b)) : ce(b) ? (e.consume(b), A) : I(b);
  }
  function _(b) {
    return b === 45 || Re(b) ? (e.consume(b), _) : b === 47 || b === 62 || Ce(b) ? F(b) : n(b);
  }
  function F(b) {
    return b === 47 ? (e.consume(b), I) : b === 58 || b === 95 || He(b) ? (e.consume(b), z) : q(b) ? (a = F, G(b)) : ce(b) ? (e.consume(b), F) : I(b);
  }
  function z(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Re(b) ? (e.consume(b), z) : T(b);
  }
  function T(b) {
    return b === 61 ? (e.consume(b), R) : q(b) ? (a = T, G(b)) : ce(b) ? (e.consume(b), T) : F(b);
  }
  function R(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), o = b, U) : q(b) ? (a = R, G(b)) : ce(b) ? (e.consume(b), R) : (e.consume(b), H);
  }
  function U(b) {
    return b === o ? (e.consume(b), o = void 0, B) : b === null ? n(b) : q(b) ? (a = U, G(b)) : (e.consume(b), U);
  }
  function H(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || Ce(b) ? F(b) : (e.consume(b), H);
  }
  function B(b) {
    return b === 47 || b === 62 || Ce(b) ? F(b) : n(b);
  }
  function I(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function G(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), $;
  }
  function $(b) {
    return ce(b) ? he(e, D, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : D(b);
  }
  function D(b) {
    return e.enter("htmlTextData"), a(b);
  }
}
const Ro = {
  name: "labelEnd",
  resolveAll: Xp,
  resolveTo: Qp,
  tokenize: Zp
}, qp = {
  tokenize: Jp
}, Kp = {
  tokenize: eh
}, Yp = {
  tokenize: th
};
function Xp(e) {
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
function Qp(e, t) {
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
function Zp(e, t, n) {
  const r = this;
  let o = r.events.length, i, a;
  for (; o--; )
    if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1]._balanced) {
      i = r.events[o][1];
      break;
    }
  return l;
  function l(p) {
    return i ? i._inactive ? d(p) : (a = r.parser.defined.includes(Lt(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(qp, u, a ? u : d)(p) : p === 91 ? e.attempt(Kp, u, a ? c : d)(p) : a ? u(p) : d(p);
  }
  function c(p) {
    return e.attempt(Yp, u, d)(p);
  }
  function u(p) {
    return t(p);
  }
  function d(p) {
    return i._balanced = !0, n(p);
  }
}
function Jp(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), o;
  }
  function o(d) {
    return Ce(d) ? an(e, i)(d) : i(d);
  }
  function i(d) {
    return d === 41 ? u(d) : il(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function a(d) {
    return Ce(d) ? an(e, s)(d) : u(d);
  }
  function l(d) {
    return n(d);
  }
  function s(d) {
    return d === 34 || d === 39 || d === 40 ? ll(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : u(d);
  }
  function c(d) {
    return Ce(d) ? an(e, u)(d) : u(d);
  }
  function u(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function eh(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return al.call(r, e, i, a, "reference", "referenceMarker", "referenceString")(l);
  }
  function i(l) {
    return r.parser.defined.includes(Lt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function th(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const nh = {
  name: "labelStartImage",
  resolveAll: Ro.resolveAll,
  tokenize: rh
};
function rh(e, t, n) {
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
const oh = {
  name: "labelStartLink",
  resolveAll: Ro.resolveAll,
  tokenize: ih
};
function ih(e, t, n) {
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
  tokenize: ah
};
function ah(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), he(e, t, "linePrefix");
  }
}
const Tn = {
  name: "thematicBreak",
  tokenize: lh
};
function lh(e, t, n) {
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
    return c === o ? (e.consume(c), r++, s) : (e.exit("thematicBreakSequence"), ce(c) ? he(e, l, "whitespace")(c) : l(c));
  }
}
const Se = {
  continuation: {
    tokenize: dh
  },
  exit: ph,
  name: "list",
  tokenize: uh
}, sh = {
  partial: !0,
  tokenize: hh
}, ch = {
  partial: !0,
  tokenize: fh
};
function uh(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, a = 0;
  return l;
  function l(f) {
    const y = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Xr(f)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Tn, n, c)(f) : c(f);
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
      e.attempt(sh, p, d)
    );
  }
  function u(f) {
    return r.containerState.initialBlankLine = !0, i++, p(f);
  }
  function d(f) {
    return ce(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function dh(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Qn, o, i);
  function o(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, he(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function i(l) {
    return r.containerState.furtherBlankLines || !ce(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ch, t, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, he(e, e.attempt(Se, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function fh(e, t, n) {
  const r = this;
  return he(e, o, "listItemIndent", r.containerState.size + 1);
  function o(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(i) : n(i);
  }
}
function ph(e) {
  e.exit(this.containerState.type);
}
function hh(e, t, n) {
  const r = this;
  return he(e, o, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(i) {
    const a = r.events[r.events.length - 1];
    return !ce(i) && a && a[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const Di = {
  name: "setextUnderline",
  resolveTo: mh,
  tokenize: gh
};
function mh(e, t) {
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
function gh(e, t, n) {
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
    return c === o ? (e.consume(c), l) : (e.exit("setextHeadingLineSequence"), ce(c) ? he(e, s, "lineSuffix")(c) : s(c));
  }
  function s(c) {
    return c === null || q(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const yh = {
  tokenize: vh
};
function vh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Qn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, he(e, e.attempt(this.parser.constructs.flow, o, e.attempt(Cp, o)), "linePrefix"))
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
const xh = {
  resolveAll: cl()
}, wh = sl("string"), bh = sl("text");
function sl(e) {
  return {
    resolveAll: cl(e === "text" ? Sh : void 0),
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
      let p = -1;
      if (d)
        for (; ++p < d.length; ) {
          const f = d[p];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function cl(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function Sh(e, t) {
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
const Ch = {
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
  62: tl
}, kh = {
  91: Pp
}, Eh = {
  [-2]: Sr,
  [-1]: Sr,
  32: Sr
}, Nh = {
  35: Dp,
  42: Tn,
  45: [Di, Tn],
  60: zp,
  61: Di,
  95: Tn,
  96: Mi,
  126: Mi
}, Ah = {
  38: rl,
  92: nl
}, Ph = {
  [-5]: Cr,
  [-4]: Cr,
  [-3]: Cr,
  33: nh,
  38: rl,
  42: Qr,
  60: [op, Wp],
  91: oh,
  92: [Mp, nl],
  93: Ro,
  95: Qr,
  96: yp
}, Rh = {
  null: [Qr, xh]
}, Th = {
  null: [42, 95]
}, Ih = {
  null: []
}, Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Th,
  contentInitial: kh,
  disable: Ih,
  document: Ch,
  flow: Nh,
  flowInitial: Eh,
  insideSpan: Rh,
  string: Ah,
  text: Ph
}, Symbol.toStringTag, { value: "Module" }));
function _h(e, t, n) {
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
    attempt: A(N),
    check: A(k),
    consume: C,
    enter: w,
    exit: E,
    interrupt: A(k, {
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
    sliceSerialize: p,
    sliceStream: f,
    write: d
  };
  let u = t.tokenize.call(c, s);
  return t.resolveAll && i.push(t), c;
  function d(T) {
    return a = Me(a, T), x(), a[a.length - 1] !== null ? [] : (_(t, 0), c.events = Po(i, c.events, c), c.events);
  }
  function p(T, R) {
    return Oh(f(T), R);
  }
  function f(T) {
    return Dh(a, T);
  }
  function y() {
    const {
      _bufferIndex: T,
      _index: R,
      line: U,
      column: H,
      offset: B
    } = r;
    return {
      _bufferIndex: T,
      _index: R,
      line: U,
      column: H,
      offset: B
    };
  }
  function g(T) {
    o[T.line] = T.column, z();
  }
  function x() {
    let T;
    for (; r._index < a.length; ) {
      const R = a[r._index];
      if (typeof R == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < R.length; )
          v(R.charCodeAt(r._bufferIndex));
      else
        v(R);
    }
  }
  function v(T) {
    u = u(T);
  }
  function C(T) {
    q(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, z()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = T;
  }
  function w(T, R) {
    const U = R || {};
    return U.type = T, U.start = y(), c.events.push(["enter", U, c]), l.push(U), U;
  }
  function E(T) {
    const R = l.pop();
    return R.end = y(), c.events.push(["exit", R, c]), R;
  }
  function N(T, R) {
    _(T, R.from);
  }
  function k(T, R) {
    R.restore();
  }
  function A(T, R) {
    return U;
    function U(H, B, I) {
      let G, $, D, b;
      return Array.isArray(H) ? (
        /* c8 ignore next 1 */
        ue(H)
      ) : "tokenize" in H ? (
        // Looks like a construct.
        ue([
          /** @type {Construct} */
          H
        ])
      ) : K(H);
      function K(ie) {
        return j;
        function j(Y) {
          const ne = Y !== null && ie[Y], J = Y !== null && ie.null, re = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ne) ? ne : ne ? [ne] : [],
            ...Array.isArray(J) ? J : J ? [J] : []
          ];
          return ue(re)(Y);
        }
      }
      function ue(ie) {
        return G = ie, $ = 0, ie.length === 0 ? I : S(ie[$]);
      }
      function S(ie) {
        return j;
        function j(Y) {
          return b = F(), D = ie, ie.partial || (c.currentConstruct = ie), ie.name && c.parser.constructs.disable.null.includes(ie.name) ? de() : ie.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            R ? Object.assign(Object.create(c), R) : c,
            s,
            W,
            de
          )(Y);
        }
      }
      function W(ie) {
        return T(D, b), B;
      }
      function de(ie) {
        return b.restore(), ++$ < G.length ? S(G[$]) : I;
      }
    }
  }
  function _(T, R) {
    T.resolveAll && !i.includes(T) && i.push(T), T.resolve && Ge(c.events, R, c.events.length - R, T.resolve(c.events.slice(R), c)), T.resolveTo && (c.events = T.resolveTo(c.events, c));
  }
  function F() {
    const T = y(), R = c.previous, U = c.currentConstruct, H = c.events.length, B = Array.from(l);
    return {
      from: H,
      restore: I
    };
    function I() {
      r = T, c.previous = R, c.currentConstruct = U, c.events.length = H, l = B, z();
    }
  }
  function z() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function Dh(e, t) {
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
function Oh(e, t) {
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
function Lh(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Uf([Mh, ...(e || {}).extensions || []])
    ),
    content: o(Qf),
    defined: [],
    document: o(Jf),
    flow: o(yh),
    lazy: {},
    string: o(wh),
    text: o(bh)
  };
  return r;
  function o(i) {
    return a;
    function a(l) {
      return _h(r, i, l);
    }
  }
}
function Fh(e) {
  for (; !ol(e); )
    ;
  return e;
}
const Oi = /[\0\t\n\r]/g;
function zh() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, a, l) {
    const s = [];
    let c, u, d, p, f;
    for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), d = 0, t = "", n && (i.charCodeAt(0) === 65279 && d++, n = void 0); d < i.length; ) {
      if (Oi.lastIndex = d, c = Oi.exec(i), p = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(p), !c) {
        t = i.slice(d);
        break;
      }
      if (f === 10 && d === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), d < p && (s.push(i.slice(d, p)), e += p - d), f) {
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
      d = p + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Bh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $h(e) {
  return e.replace(Bh, Hh);
}
function Hh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return el(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return Ao(n) || e;
}
const ul = {}.hasOwnProperty;
function Vh(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Uh(n)(Fh(Lh(n).document().write(zh()(e, t, !0))));
}
function Uh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: i(gt),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: i(ot),
      blockQuote: i(J),
      characterEscape: F,
      characterReference: F,
      codeFenced: i(re),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: i(re, a),
      codeText: i(se, a),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: i(ye),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: i(Ie),
      hardBreakEscape: i(it),
      hardBreakTrailing: i(it),
      htmlFlow: i(at, a),
      htmlFlowData: F,
      htmlText: i(at, a),
      htmlTextData: F,
      image: i(xr),
      label: a,
      link: i(gt),
      listItem: i(xd),
      listItemValue: p,
      listOrdered: i(pi, d),
      listUnordered: i(pi),
      paragraph: i(wd),
      reference: S,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: i(ot),
      strong: i(bd),
      thematicBreak: i(Cd)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: N,
      autolink: s(),
      autolinkEmail: ne,
      autolinkProtocol: Y,
      blockQuote: s(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: de,
      characterReferenceMarkerNumeric: de,
      characterReferenceValue: ie,
      characterReference: j,
      codeFenced: s(x),
      codeFencedFence: g,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: y,
      codeFlowValue: z,
      codeIndented: s(v),
      codeText: s(B),
      codeTextData: z,
      data: z,
      definition: s(),
      definitionDestinationString: E,
      definitionLabelString: C,
      definitionTitleString: w,
      emphasis: s(),
      hardBreakEscape: s(R),
      hardBreakTrailing: s(R),
      htmlFlow: s(U),
      htmlFlowData: z,
      htmlText: s(H),
      htmlTextData: z,
      image: s(G),
      label: D,
      labelText: $,
      lineEnding: T,
      link: s(I),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: W,
      resourceDestinationString: b,
      resourceTitleString: K,
      resource: ue,
      setextHeading: s(_),
      setextHeadingLineSequence: A,
      setextHeadingText: k,
      strong: s(),
      thematicBreak: s()
    }
  };
  dl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(P) {
    let O = {
      type: "root",
      children: []
    };
    const X = {
      stack: [O],
      tokenStack: [],
      config: t,
      enter: l,
      exit: c,
      buffer: a,
      resume: u,
      data: n
    }, oe = [];
    let fe = -1;
    for (; ++fe < P.length; )
      if (P[fe][1].type === "listOrdered" || P[fe][1].type === "listUnordered")
        if (P[fe][0] === "enter")
          oe.push(fe);
        else {
          const Oe = oe.pop();
          fe = o(P, Oe, fe);
        }
    for (fe = -1; ++fe < P.length; ) {
      const Oe = t[P[fe][0]];
      ul.call(Oe, P[fe][1].type) && Oe[P[fe][1].type].call(Object.assign({
        sliceSerialize: P[fe][2].sliceSerialize
      }, X), P[fe][1]);
    }
    if (X.tokenStack.length > 0) {
      const Oe = X.tokenStack[X.tokenStack.length - 1];
      (Oe[1] || Li).call(X, void 0, Oe[0]);
    }
    for (O.position = {
      start: lt(P.length > 0 ? P[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: lt(P.length > 0 ? P[P.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, fe = -1; ++fe < t.transforms.length; )
      O = t.transforms[fe](O) || O;
    return O;
  }
  function o(P, O, X) {
    let oe = O - 1, fe = -1, Oe = !1, yt, Qe, Xt, Qt;
    for (; ++oe <= X; ) {
      const Ee = P[oe];
      switch (Ee[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ee[0] === "enter" ? fe++ : fe--, Qt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ee[0] === "enter" && (yt && !Qt && !fe && !Xt && (Xt = oe), Qt = void 0);
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
      if (!fe && Ee[0] === "enter" && Ee[1].type === "listItemPrefix" || fe === -1 && Ee[0] === "exit" && (Ee[1].type === "listUnordered" || Ee[1].type === "listOrdered")) {
        if (yt) {
          let Tt = oe;
          for (Qe = void 0; Tt--; ) {
            const Ze = P[Tt];
            if (Ze[1].type === "lineEnding" || Ze[1].type === "lineEndingBlank") {
              if (Ze[0] === "exit") continue;
              Qe && (P[Qe][1].type = "lineEndingBlank", Oe = !0), Ze[1].type = "lineEnding", Qe = Tt;
            } else if (!(Ze[1].type === "linePrefix" || Ze[1].type === "blockQuotePrefix" || Ze[1].type === "blockQuotePrefixWhitespace" || Ze[1].type === "blockQuoteMarker" || Ze[1].type === "listItemIndent")) break;
          }
          Xt && (!Qe || Xt < Qe) && (yt._spread = !0), yt.end = Object.assign({}, Qe ? P[Qe][1].start : Ee[1].end), P.splice(Qe || oe, 0, ["exit", yt, Ee[2]]), oe++, X++;
        }
        if (Ee[1].type === "listItemPrefix") {
          const Tt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ee[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          yt = Tt, P.splice(oe, 0, ["enter", Tt, Ee[2]]), oe++, X++, Xt = void 0, Qt = !0;
        }
      }
    }
    return P[O][1]._spread = Oe, X;
  }
  function i(P, O) {
    return X;
    function X(oe) {
      l.call(this, P(oe), oe), O && O.call(this, oe);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(P, O, X) {
    this.stack[this.stack.length - 1].children.push(P), this.stack.push(P), this.tokenStack.push([O, X || void 0]), P.position = {
      start: lt(O.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(P) {
    return O;
    function O(X) {
      P && P.call(this, X), c.call(this, X);
    }
  }
  function c(P, O) {
    const X = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== P.type && (O ? O.call(this, P, oe[0]) : (oe[1] || Li).call(this, P, oe[0]));
    else throw new Error("Cannot close `" + P.type + "` (" + on({
      start: P.start,
      end: P.end
    }) + "): it’s not open");
    X.position.end = lt(P.end);
  }
  function u() {
    return Hf(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(P) {
    if (this.data.expectingFirstListItemValue) {
      const O = this.stack[this.stack.length - 2];
      O.start = Number.parseInt(this.sliceSerialize(P), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.lang = P;
  }
  function y() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.meta = P;
  }
  function g() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function x() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function v() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = P.replace(/(\r?\n|\r)$/g, "");
  }
  function C(P) {
    const O = this.resume(), X = this.stack[this.stack.length - 1];
    X.label = O, X.identifier = Lt(this.sliceSerialize(P)).toLowerCase();
  }
  function w() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.title = P;
  }
  function E() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.url = P;
  }
  function N(P) {
    const O = this.stack[this.stack.length - 1];
    if (!O.depth) {
      const X = this.sliceSerialize(P).length;
      O.depth = X;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function A(P) {
    const O = this.stack[this.stack.length - 1];
    O.depth = this.sliceSerialize(P).codePointAt(0) === 61 ? 1 : 2;
  }
  function _() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(P) {
    const X = this.stack[this.stack.length - 1].children;
    let oe = X[X.length - 1];
    (!oe || oe.type !== "text") && (oe = Sd(), oe.position = {
      start: lt(P.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, X.push(oe)), this.stack.push(oe);
  }
  function z(P) {
    const O = this.stack.pop();
    O.value += this.sliceSerialize(P), O.position.end = lt(P.end);
  }
  function T(P) {
    const O = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const X = O.children[O.children.length - 1];
      X.position.end = lt(P.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(O.type) && (F.call(this, P), z.call(this, P));
  }
  function R() {
    this.data.atHardBreak = !0;
  }
  function U() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = P;
  }
  function H() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = P;
  }
  function B() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = P;
  }
  function I() {
    const P = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const O = this.data.referenceType || "shortcut";
      P.type += "Reference", P.referenceType = O, delete P.url, delete P.title;
    } else
      delete P.identifier, delete P.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const P = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const O = this.data.referenceType || "shortcut";
      P.type += "Reference", P.referenceType = O, delete P.url, delete P.title;
    } else
      delete P.identifier, delete P.label;
    this.data.referenceType = void 0;
  }
  function $(P) {
    const O = this.sliceSerialize(P), X = this.stack[this.stack.length - 2];
    X.label = $h(O), X.identifier = Lt(O).toLowerCase();
  }
  function D() {
    const P = this.stack[this.stack.length - 1], O = this.resume(), X = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, X.type === "link") {
      const oe = P.children;
      X.children = oe;
    } else
      X.alt = O;
  }
  function b() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.url = P;
  }
  function K() {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.title = P;
  }
  function ue() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = "collapsed";
  }
  function W(P) {
    const O = this.resume(), X = this.stack[this.stack.length - 1];
    X.label = O, X.identifier = Lt(this.sliceSerialize(P)).toLowerCase(), this.data.referenceType = "full";
  }
  function de(P) {
    this.data.characterReferenceType = P.type;
  }
  function ie(P) {
    const O = this.sliceSerialize(P), X = this.data.characterReferenceType;
    let oe;
    X ? (oe = el(O, X === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = Ao(O);
    const fe = this.stack[this.stack.length - 1];
    fe.value += oe;
  }
  function j(P) {
    const O = this.stack.pop();
    O.position.end = lt(P.end);
  }
  function Y(P) {
    z.call(this, P);
    const O = this.stack[this.stack.length - 1];
    O.url = this.sliceSerialize(P);
  }
  function ne(P) {
    z.call(this, P);
    const O = this.stack[this.stack.length - 1];
    O.url = "mailto:" + this.sliceSerialize(P);
  }
  function J() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function re() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function se() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ye() {
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
  function ot() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function it() {
    return {
      type: "break"
    };
  }
  function at() {
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
  function gt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function pi(P) {
    return {
      type: "list",
      ordered: P.type === "listOrdered",
      start: null,
      spread: P._spread,
      children: []
    };
  }
  function xd(P) {
    return {
      type: "listItem",
      spread: P._spread,
      checked: null,
      children: []
    };
  }
  function wd() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function bd() {
    return {
      type: "strong",
      children: []
    };
  }
  function Sd() {
    return {
      type: "text",
      value: ""
    };
  }
  function Cd() {
    return {
      type: "thematicBreak"
    };
  }
}
function lt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function dl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? dl(e, r) : jh(e, r);
  }
}
function jh(e, t) {
  let n;
  for (n in t)
    if (ul.call(t, n))
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
function Li(e, t) {
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
function Wh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Vh(r, {
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
function Gh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function qh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Kh(e, t) {
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
function Yh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Xh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Qh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), o = jt(r.toLowerCase()), i = e.footnoteOrder.indexOf(r);
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
function Zh(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Jh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function fl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const a = o[o.length - 1];
  return a && a.type === "text" ? a.value += r : o.push({ type: "text", value: r }), o;
}
function em(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return fl(e, t);
  const o = { src: jt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const i = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function tm(e, t) {
  const n = { src: jt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function nm(e, t) {
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
function rm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return fl(e, t);
  const o = { href: jt(r.url || "") };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function om(e, t) {
  const n = { href: jt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function im(e, t, n) {
  const r = e.all(t), o = n ? am(n) : pl(t), i = {}, a = [];
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
function am(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = pl(n[r]);
  }
  return t;
}
function pl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function lm(e, t) {
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
function sm(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function cm(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function um(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function dm(e, t) {
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
    }, l = Co(t.children[1]), s = qa(t.children[t.children.length - 1]);
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
function fm(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, l = a ? a.length : t.children.length;
  let s = -1;
  const c = [];
  for (; ++s < l; ) {
    const d = t.children[s], p = {}, f = a ? a[s] : void 0;
    f && (p.align = f);
    let y = { type: "element", tagName: i, properties: p, children: [] };
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
function pm(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Fi = 9, zi = 32;
function hm(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      Bi(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(Bi(t.slice(o), o > 0, !1)), i.join("");
}
function Bi(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === Fi || i === zi; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === Fi || i === zi; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function mm(e, t) {
  const n = { type: "text", value: hm(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function gm(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ym = {
  blockquote: Gh,
  break: qh,
  code: Kh,
  delete: Yh,
  emphasis: Xh,
  footnoteReference: Qh,
  heading: Zh,
  html: Jh,
  imageReference: em,
  image: tm,
  inlineCode: nm,
  linkReference: rm,
  link: om,
  listItem: im,
  list: lm,
  paragraph: sm,
  // @ts-expect-error: root is different, but hard to type.
  root: cm,
  strong: um,
  table: dm,
  tableCell: pm,
  tableRow: fm,
  text: mm,
  thematicBreak: gm,
  toml: bn,
  yaml: bn,
  definition: bn,
  footnoteDefinition: bn
};
function bn() {
}
const hl = -1, Zn = 0, ln = 1, Bn = 2, To = 3, Io = 4, Mo = 5, _o = 6, ml = 7, gl = 8, $i = typeof self == "object" ? self : globalThis, vm = (e, t) => {
  const n = (o, i) => (e.set(i, o), o), r = (o) => {
    if (e.has(o))
      return e.get(o);
    const [i, a] = t[o];
    switch (i) {
      case Zn:
      case hl:
        return n(a, o);
      case ln: {
        const l = n([], o);
        for (const s of a)
          l.push(r(s));
        return l;
      }
      case Bn: {
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
      case ml: {
        const { name: l, message: s } = a;
        return n(new $i[l](s), o);
      }
      case gl:
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
}, Hi = (e) => vm(/* @__PURE__ */ new Map(), e)(0), It = "", { toString: xm } = {}, { keys: wm } = Object, Jt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Zn, t];
  const n = xm.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [ln, It];
    case "Object":
      return [Bn, It];
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
  return n.includes("Array") ? [ln, n] : n.includes("Error") ? [ml, n] : [Bn, n];
}, Sn = ([e, t]) => e === Zn && (t === "function" || t === "symbol"), bm = (e, t, n, r) => {
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
            l = gl, u = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            u = null;
            break;
          case "undefined":
            return o([hl], a);
        }
        return o([l, u], a);
      }
      case ln: {
        if (s) {
          let p = a;
          return s === "DataView" ? p = new Uint8Array(a.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(a)), o([s, [...p]], a);
        }
        const u = [], d = o([l, u], a);
        for (const p of a)
          u.push(i(p));
        return d;
      }
      case Bn: {
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
        for (const p of wm(a))
          (e || !Sn(Jt(a[p]))) && u.push([i(p), i(a[p])]);
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
        for (const [p, f] of a)
          (e || !(Sn(Jt(p)) || Sn(Jt(f)))) && u.push([i(p), i(f)]);
        return d;
      }
      case _o: {
        const u = [], d = o([l, u], a);
        for (const p of a)
          (e || !Sn(Jt(p))) && u.push(i(p));
        return d;
      }
    }
    const { message: c } = a;
    return o([l, { name: s, message: c }], a);
  };
  return i;
}, Vi = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return bm(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, $n = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Hi(Vi(e, t)) : structuredClone(e)
) : (e, t) => Hi(Vi(e, t));
function Sm(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Cm(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function km(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Sm, r = e.options.footnoteBackLabel || Cm, o = e.options.footnoteLabel || "Footnotes", i = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!c)
      continue;
    const u = e.all(c), d = String(c.identifier).toUpperCase(), p = jt(d.toLowerCase());
    let f = 0;
    const y = [], g = e.footnoteCounts.get(d);
    for (; g !== void 0 && ++f <= g; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let C = typeof n == "string" ? n : n(s, f);
      typeof C == "string" && (C = { type: "text", value: C }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(C) ? C : [C]
      });
    }
    const x = u[u.length - 1];
    if (x && x.type === "element" && x.tagName === "p") {
      const C = x.children[x.children.length - 1];
      C && C.type === "text" ? C.value += " " : x.children.push({ type: "text", value: " " }), x.children.push(...y);
    } else
      u.push(...y);
    const v = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(u, !0)
    };
    e.patch(c, v), l.push(v);
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
const yl = (
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
      return Pm;
    if (typeof e == "function")
      return Jn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Em(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Nm(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Am(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Em(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = yl(e[n]);
  return Jn(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].apply(this, o)) return !0;
    return !1;
  }
}
function Nm(e) {
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
function Am(e) {
  return Jn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Jn(e) {
  return t;
  function t(n, r, o) {
    return !!(Rm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      o || void 0
    ));
  }
}
function Pm() {
  return !0;
}
function Rm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const vl = [], Tm = !0, Ui = !1, Im = "skip";
function Mm(e, t, n, r) {
  let o;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : o = t;
  const i = yl(o), a = r ? -1 : 1;
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
      Object.defineProperty(p, "name", {
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let f = vl, y, g, x;
      if ((!t || i(s, c, u[u.length - 1] || void 0)) && (f = _m(n(s, u)), f[0] === Ui))
        return f;
      if ("children" in s && s.children) {
        const v = (
          /** @type {UnistParent} */
          s
        );
        if (v.children && f[0] !== Im)
          for (g = (r ? v.children.length : -1) + a, x = u.concat(v); g > -1 && g < v.children.length; ) {
            const C = v.children[g];
            if (y = l(C, g, x)(), y[0] === Ui)
              return y;
            g = typeof y[1] == "number" ? y[1] : g + a;
          }
      }
      return f;
    }
  }
}
function _m(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Tm, e] : e == null ? vl : [e];
}
function xl(e, t, n, r) {
  let o, i, a;
  typeof t == "function" && typeof n != "function" ? (i = void 0, a = t, o = n) : (i = t, a = n, o = r), Mm(e, i, l, o);
  function l(s, c) {
    const u = c[c.length - 1], d = u ? u.children.indexOf(s) : void 0;
    return a(s, d, u);
  }
}
const Zr = {}.hasOwnProperty, Dm = {};
function Om(e, t) {
  const n = t || Dm, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = { ...ym, ...n.handlers }, l = {
    all: c,
    applyData: Fm,
    definitionById: r,
    footnoteById: o,
    footnoteCounts: i,
    footnoteOrder: [],
    handlers: a,
    one: s,
    options: n,
    patch: Lm,
    wrap: Bm
  };
  return xl(e, function(u) {
    if (u.type === "definition" || u.type === "footnoteDefinition") {
      const d = u.type === "definition" ? r : o, p = String(u.identifier).toUpperCase();
      d.has(p) || d.set(p, u);
    }
  }), l;
  function s(u, d) {
    const p = u.type, f = l.handlers[p];
    if (Zr.call(l.handlers, p) && f)
      return f(l, u, d);
    if (l.options.passThrough && l.options.passThrough.includes(p)) {
      if ("children" in u) {
        const { children: g, ...x } = u, v = $n(x);
        return v.children = l.all(u), v;
      }
      return $n(u);
    }
    return (l.options.unknownHandler || zm)(l, u, d);
  }
  function c(u) {
    const d = [];
    if ("children" in u) {
      const p = u.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const y = l.one(p[f], u);
        if (y) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = ji(y.value)), !Array.isArray(y) && y.type === "element")) {
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
function Lm(e, t) {
  e.position && (t.position = xf(e));
}
function Fm(e, t) {
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
function zm(e, t) {
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
function Wi(e, t) {
  const n = Om(e, t), r = n.one(e, void 0), o = km(n), i = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return o && i.children.push({ type: "text", value: `
` }, o), i;
}
function $m(e, t) {
  return e && "run" in e ? async function(n, r) {
    const o = (
      /** @type {HastRoot} */
      Wi(n, { file: r, ...t })
    );
    await e.run(o, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Wi(n, { file: r, ...e || t })
    );
  };
}
function Gi(e) {
  if (e)
    throw e;
}
var In = Object.prototype.hasOwnProperty, wl = Object.prototype.toString, qi = Object.defineProperty, Ki = Object.getOwnPropertyDescriptor, Yi = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : wl.call(t) === "[object Array]";
}, Xi = function(t) {
  if (!t || wl.call(t) !== "[object Object]")
    return !1;
  var n = In.call(t, "constructor"), r = t.constructor && t.constructor.prototype && In.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || In.call(t, o);
}, Qi = function(t, n) {
  qi && n.name === "__proto__" ? qi(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Zi = function(t, n) {
  if (n === "__proto__")
    if (In.call(t, n)) {
      if (Ki)
        return Ki(t, n).value;
    } else return;
  return t[n];
}, Hm = function e() {
  var t, n, r, o, i, a, l = arguments[0], s = 1, c = arguments.length, u = !1;
  for (typeof l == "boolean" && (u = l, l = arguments[1] || {}, s = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); s < c; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Zi(l, n), o = Zi(t, n), l !== o && (u && o && (Xi(o) || (i = Yi(o))) ? (i ? (i = !1, a = r && Yi(r) ? r : []) : a = r && Xi(r) ? r : {}, Qi(l, { name: n, newValue: e(u, a, o) })) : typeof o < "u" && Qi(l, { name: n, newValue: o }));
  return l;
};
const kr = /* @__PURE__ */ Ga(Hm);
function Jr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Vm() {
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
const $e = { basename: jm, dirname: Wm, extname: Gm, join: qm, sep: "/" };
function jm(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  mn(e);
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
function Wm(e) {
  if (mn(e), e.length === 0)
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
function Gm(e) {
  mn(e);
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
function qm(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    mn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Km(n);
}
function Km(e) {
  mn(e);
  const t = e.codePointAt(0) === 47;
  let n = Ym(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Ym(e, t) {
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
function mn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Xm = { cwd: Qm };
function Qm() {
  return "/";
}
function eo(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Zm(e) {
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
  return Jm(e);
}
function Jm(e) {
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
class bl {
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
    t ? eo(t) ? n = { path: t } : typeof t == "string" || eg(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Xm.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
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
    return typeof this.path == "string" ? $e.basename(this.path) : void 0;
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
    Ar(t, "basename"), Nr(t, "basename"), this.path = $e.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? $e.dirname(this.path) : void 0;
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
    Ji(this.basename, "dirname"), this.path = $e.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? $e.extname(this.path) : void 0;
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
    if (Nr(t, "extname"), Ji(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = $e.join(this.dirname, this.stem + (t || ""));
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
    eo(t) && (t = Zm(t)), Ar(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? $e.basename(this.path, this.extname) : void 0;
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
    Ar(t, "stem"), Nr(t, "stem"), this.path = $e.join(this.dirname || "", t + (this.extname || ""));
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
    const o = new we(
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
  if (e && e.includes($e.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + $e.sep + "`"
    );
}
function Ar(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ji(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function eg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const tg = (
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
), ng = {}.hasOwnProperty;
class Do extends tg {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Vm();
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
    return typeof t == "string" ? arguments.length === 2 ? (Tr("data", this.frozen), this.namespace[t] = n, this) : ng.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Tr("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Cn(t), r = this.parser || this.Parser;
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
    return this.freeze(), Pr("process", this.parser || this.Parser), Rr("process", this.compiler || this.Compiler), n ? o(void 0, n) : new Promise(o);
    function o(i, a) {
      const l = Cn(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(u, d, p) {
        if (u || !d || !p)
          return c(u);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          d
        ), y = r.stringify(f, p);
        ig(y) ? p.value = y : p.result = y, c(
          u,
          /** @type {VFileWithOutput<CompileResult>} */
          p
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
    return this.freeze(), Pr("processSync", this.parser || this.Parser), Rr("processSync", this.compiler || this.Compiler), this.process(t, o), ta("processSync", "process", n), r;
    function o(i, a) {
      n = !0, Gi(i), r = a;
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
    ea(t), this.freeze();
    const o = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? i(void 0, r) : new Promise(i);
    function i(a, l) {
      const s = Cn(n);
      o.run(t, s, c);
      function c(u, d, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          d || t
        );
        u ? l(u) : a ? a(f) : r(void 0, f, p);
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
    return this.run(t, n, i), ta("runSync", "run", r), o;
    function i(a, l) {
      Gi(a), o = l, r = !0;
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
    const r = Cn(n), o = this.compiler || this.Compiler;
    return Rr("stringify", o), ea(t), o(t, r);
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
      let d = -1, p = -1;
      for (; ++d < r.length; )
        if (r[d][0] === c) {
          p = d;
          break;
        }
      if (p === -1)
        r.push([c, ...u]);
      else if (u.length > 0) {
        let [f, ...y] = u;
        const g = r[p][1];
        Jr(g) && Jr(f) && (f = kr(!0, g, f)), r[p] = [c, f, ...y];
      }
    }
  }
}
const rg = new Do().freeze();
function Pr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Rr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Tr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ea(e) {
  if (!Jr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ta(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Cn(e) {
  return og(e) ? e : new bl(e);
}
function og(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ig(e) {
  return typeof e == "string" || ag(e);
}
function ag(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const lg = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", na = [], ra = { allowDangerousHtml: !0 }, sg = /^(https?|ircs?|mailto|xmpp)$/i, cg = [
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
function ug(e) {
  const t = dg(e), n = fg(e);
  return pg(t.runSync(t.parse(n), n), e);
}
function dg(e) {
  const t = e.rehypePlugins || na, n = e.remarkPlugins || na, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ra } : ra;
  return rg().use(Wh).use(n).use($m, r).use(t);
}
function fg(e) {
  const t = e.children || "", n = new bl();
  return typeof t == "string" && (n.value = t), n;
}
function pg(e, t) {
  const n = t.allowedElements, r = t.allowElement, o = t.components, i = t.disallowedElements, a = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || hg;
  for (const u of cg)
    Object.hasOwn(t, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + lg + u.id, void 0);
  return xl(e, c), kf(e, {
    Fragment: Pe,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: m,
    jsxs: L,
    passKeys: !0,
    passNode: !0
  });
  function c(u, d, p) {
    if (u.type === "raw" && p && typeof d == "number")
      return a ? p.children.splice(d, 1) : p.children[d] = { type: "text", value: u.value }, d;
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
      if (!f && r && typeof d == "number" && (f = !r(u, d, p)), f && p && typeof d == "number")
        return l && u.children ? p.children.splice(d, 1, ...u.children) : p.children.splice(d, 1), d;
    }
  }
}
function hg(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    sg.test(e.slice(0, t)) ? e : ""
  );
}
function mg({ content: e }) {
  return /* @__PURE__ */ m("div", { className: "prose prose-stone dark:prose-invert max-w-none font-serif", children: /* @__PURE__ */ m(
    ug,
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
const gg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yg = {
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
const vg = Fa(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...l
  }, s) => Ur(
    "svg",
    {
      ref: s,
      ...yg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Sl("lucide", o),
      ...l
    },
    [
      ...a.map(([c, u]) => Ur(c, u)),
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
  const n = Fa(
    ({ className: r, ...o }, i) => Ur(vg, {
      ref: i,
      iconNode: t,
      className: Sl(`lucide-${gg(e)}`, r),
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
const xg = ae("Bold", [
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
const Cl = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = ae("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = ae("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = ae("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = ae("Download", [
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
const Ng = ae("ExternalLink", [
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
const oa = ae("Eye", [
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
const Ag = ae("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = ae("Globe", [
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
const Pg = ae("Heading1", [
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
const Rg = ae("Heading2", [
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
const Tg = ae("Heading3", [
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
const Ig = ae("Image", [
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
const Mg = ae("Italic", [
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
const _g = ae("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = ae("ListOrdered", [
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
const Og = ae("List", [
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
const Nl = ae("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = ae("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = ae("PenLine", [
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
const zg = ae("Quote", [
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
const $g = ae("Share2", [
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
const Vg = ae("Trash2", [
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
const ia = ae("Upload", [
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
const Pl = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function aa(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function er(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = aa(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : aa(e[o], null);
        }
      };
  };
}
function le(...e) {
  return h.useCallback(er(...e), e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  const t = /* @__PURE__ */ jg(e), n = h.forwardRef((r, o) => {
    const { children: i, ...a } = r, l = h.Children.toArray(i), s = l.find(Wg);
    if (s) {
      const c = s.props.children, u = l.map((d) => d === s ? h.Children.count(c) > 1 ? h.Children.only(null) : h.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ m(t, { ...a, ref: o, children: h.isValidElement(c) ? h.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ug = /* @__PURE__ */ bt("Slot");
// @__NO_SIDE_EFFECTS__
function jg(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const a = qg(o), l = Gg(i, o.props);
      return o.type !== h.Fragment && (l.ref = r ? er(r, a) : a), h.cloneElement(o, l);
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Rl = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Tl(e) {
  const t = ({ children: n }) => /* @__PURE__ */ m(Pe, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Rl, t;
}
function Wg(e) {
  return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Rl;
}
function Gg(e, t) {
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
function qg(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Il(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Il(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ml() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Il(e)) && (r && (r += " "), r += t);
  return r;
}
const la = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, sa = Ml, _l = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return sa(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], d = i == null ? void 0 : i[c];
    if (u === null) return null;
    const p = la(u) || la(d);
    return o[c][p];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [d, p] = u;
    return p === void 0 || (c[d] = p), c;
  }, {}), s = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: d, className: p, ...f } = u;
    return Object.entries(f).every((y) => {
      let [g, x] = y;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...l
      }[g]) : {
        ...i,
        ...l
      }[g] === x;
    }) ? [
      ...c,
      d,
      p
    ] : c;
  }, []);
  return sa(e, a, s, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Lo = "-", Kg = (e) => {
  const t = Xg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Lo);
      return l[0] === "" && l.length !== 1 && l.shift(), Dl(l, t) || Yg(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const s = n[a] || [];
      return l && r[a] ? [...s, ...r[a]] : s;
    }
  };
}, Dl = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Dl(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Lo);
  return (a = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : a.classGroupId;
}, ca = /^\[(.+)\]$/, Yg = (e) => {
  if (ca.test(e)) {
    const t = ca.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Xg = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Zg(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    no(a, r, i, t);
  }), r;
}, no = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : ua(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Qg(o)) {
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
      no(a, ua(t, i), n, r);
    });
  });
}, ua = (e, t) => {
  let n = e;
  return t.split(Lo).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Qg = (e) => e.isThemeGetter, Zg = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, l]) => [t + a, l])) : i);
  return [n, o];
}) : e, Jg = (e) => {
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
}, Ol = "!", ey = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, a = (l) => {
    const s = [];
    let c = 0, u = 0, d;
    for (let x = 0; x < l.length; x++) {
      let v = l[x];
      if (c === 0) {
        if (v === o && (r || l.slice(x, x + i) === t)) {
          s.push(l.slice(u, x)), u = x + i;
          continue;
        }
        if (v === "/") {
          d = x;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const p = s.length === 0 ? l : l.substring(u), f = p.startsWith(Ol), y = f ? p.substring(1) : p, g = d && d > u ? d - u : void 0;
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
}, ty = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, ny = (e) => ({
  cache: Jg(e.cacheSize),
  parseClassName: ey(e),
  ...Kg(e)
}), ry = /\s+/, oy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(ry);
  let l = "";
  for (let s = a.length - 1; s >= 0; s -= 1) {
    const c = a[s], {
      modifiers: u,
      hasImportantModifier: d,
      baseClassName: p,
      maybePostfixModifierPosition: f
    } = n(c);
    let y = !!f, g = r(y ? p.substring(0, f) : p);
    if (!g) {
      if (!y) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = r(p), !g) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const x = ty(u).join(":"), v = d ? x + Ol : x, C = v + g;
    if (i.includes(C))
      continue;
    i.push(C);
    const w = o(g, y);
    for (let E = 0; E < w.length; ++E) {
      const N = w[E];
      i.push(v + N);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function iy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ll(t)) && (r && (r += " "), r += n);
  return r;
}
const Ll = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ll(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ay(e, ...t) {
  let n, r, o, i = a;
  function a(s) {
    const c = t.reduce((u, d) => d(u), e());
    return n = ny(c), r = n.cache.get, o = n.cache.set, i = l, l(s);
  }
  function l(s) {
    const c = r(s);
    if (c)
      return c;
    const u = oy(s, n);
    return o(s, u), u;
  }
  return function() {
    return i(iy.apply(null, arguments));
  };
}
const me = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Fl = /^\[(?:([a-z-]+):)?(.+)\]$/i, ly = /^\d+\/\d+$/, sy = /* @__PURE__ */ new Set(["px", "full", "screen"]), cy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, fy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, py = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Ft(e) || sy.has(e) || ly.test(e), st = (e) => Wt(e, "length", by), Ft = (e) => !!e && !Number.isNaN(Number(e)), Ir = (e) => Wt(e, "number", Ft), en = (e) => !!e && Number.isInteger(Number(e)), hy = (e) => e.endsWith("%") && Ft(e.slice(0, -1)), Q = (e) => Fl.test(e), ct = (e) => cy.test(e), my = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gy = (e) => Wt(e, my, zl), yy = (e) => Wt(e, "position", zl), vy = /* @__PURE__ */ new Set(["image", "url"]), xy = (e) => Wt(e, vy, Cy), wy = (e) => Wt(e, "", Sy), tn = () => !0, Wt = (e, t, n) => {
  const r = Fl.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, by = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uy.test(e) && !dy.test(e)
), zl = () => !1, Sy = (e) => fy.test(e), Cy = (e) => py.test(e), ky = () => {
  const e = me("colors"), t = me("spacing"), n = me("blur"), r = me("brightness"), o = me("borderColor"), i = me("borderRadius"), a = me("borderSpacing"), l = me("borderWidth"), s = me("contrast"), c = me("grayscale"), u = me("hueRotate"), d = me("invert"), p = me("gap"), f = me("gradientColorStops"), y = me("gradientColorStopPositions"), g = me("inset"), x = me("margin"), v = me("opacity"), C = me("padding"), w = me("saturate"), E = me("scale"), N = me("sepia"), k = me("skew"), A = me("space"), _ = me("translate"), F = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", Q, t], R = () => [Q, t], U = () => ["", Je, st], H = () => ["auto", Ft, Q], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], D = () => ["", "0", Q], b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], K = () => [Ft, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tn],
      spacing: [Je, st],
      blur: ["none", "", ct, Q],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ct, Q],
      borderSpacing: R(),
      borderWidth: U(),
      contrast: K(),
      grayscale: D(),
      hueRotate: K(),
      invert: D(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hy, st],
      inset: T(),
      margin: T(),
      opacity: K(),
      padding: R(),
      saturate: K(),
      scale: K(),
      sepia: D(),
      skew: K(),
      space: R(),
      translate: R()
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
        columns: [ct]
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
        object: [...B(), Q]
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
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
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
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
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
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
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
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
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
        "space-y": [A]
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
          screen: [ct]
        }, ct]
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
        text: ["base", ct, st]
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
        "placeholder-opacity": [v]
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
        "text-opacity": [v]
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
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Je, st]
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
        indent: R()
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
        "bg-opacity": [v]
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
        bg: [...B(), yy]
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
        bg: ["auto", "cover", "contain", gy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xy]
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
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden"]
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
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
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
        outline: ["", ...I()]
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
        outline: [Je, st]
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
        ring: U()
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
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Je, st]
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
        shadow: ["", "inner", "none", ct, wy]
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
        opacity: [v]
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
        "drop-shadow": ["", "none", ct, Q]
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
        sepia: [N]
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
        "backdrop-opacity": [v]
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
        "backdrop-sepia": [N]
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
        "translate-x": [_]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [_]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        stroke: [Je, st, Ir]
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
}, Ey = /* @__PURE__ */ ay(ky);
function te(...e) {
  return Ey(Ml(e));
}
const Fo = _l(
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
), _e = h.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ m(r ? Ug : "button", { className: te(Fo({ variant: t, size: n, className: e })), ref: i, ...o })
);
_e.displayName = "Button";
function V(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ny(e, t) {
  const n = h.createContext(t), r = (i) => {
    const { children: a, ...l } = i, s = h.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ m(n.Provider, { value: s, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = h.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Ye(e, t = []) {
  let n = [];
  function r(i, a) {
    const l = h.createContext(a), s = n.length;
    n = [...n, a];
    const c = (d) => {
      var v;
      const { scope: p, children: f, ...y } = d, g = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[s]) || l, x = h.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ m(g.Provider, { value: x, children: f });
    };
    c.displayName = i + "Provider";
    function u(d, p) {
      var g;
      const f = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[s]) || l, y = h.useContext(f);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = n.map((a) => h.createContext(a));
    return function(l) {
      const s = (l == null ? void 0 : l[e]) || i;
      return h.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: s } }),
        [l, s]
      );
    };
  };
  return o.scopeName = e, [r, Ay(o, ...t)];
}
function Ay(...e) {
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
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Py = [
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
], ee = Py.reduce((e, t) => {
  const n = /* @__PURE__ */ bt(`Primitive.${t}`), r = h.forwardRef((o, i) => {
    const { asChild: a, ...l } = o, s = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(s, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Bl(e, t) {
  e && Yn.flushSync(() => e.dispatchEvent(t));
}
function qe(e) {
  const t = h.useRef(e);
  return h.useEffect(() => {
    t.current = e;
  }), h.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ry(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e);
  h.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ty = "DismissableLayer", ro = "dismissableLayer.update", Iy = "dismissableLayer.pointerDownOutside", My = "dismissableLayer.focusOutside", da, $l = h.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gn = h.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: l,
      ...s
    } = e, c = h.useContext($l), [u, d] = h.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = h.useState({}), y = le(t, (A) => d(A)), g = Array.from(c.layers), [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(x), C = u ? g.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= v, N = Oy((A) => {
      const _ = A.target, F = [...c.branches].some((z) => z.contains(_));
      !E || F || (o == null || o(A), a == null || a(A), A.defaultPrevented || l == null || l());
    }, p), k = Ly((A) => {
      const _ = A.target;
      [...c.branches].some((z) => z.contains(_)) || (i == null || i(A), a == null || a(A), A.defaultPrevented || l == null || l());
    }, p);
    return Ry((A) => {
      C === c.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && l && (A.preventDefault(), l()));
    }, p), h.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (da = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), fa(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = da);
        };
    }, [u, p, n, c]), h.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), fa());
    }, [u, c]), h.useEffect(() => {
      const A = () => f({});
      return document.addEventListener(ro, A), () => document.removeEventListener(ro, A);
    }, []), /* @__PURE__ */ m(
      ee.div,
      {
        ...s,
        ref: y,
        style: {
          pointerEvents: w ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: V(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: V(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: V(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
gn.displayName = Ty;
var _y = "DismissableLayerBranch", Dy = h.forwardRef((e, t) => {
  const n = h.useContext($l), r = h.useRef(null), o = le(t, r);
  return h.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ m(ee.div, { ...e, ref: o });
});
Dy.displayName = _y;
function Oy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = h.useRef(!1), o = h.useRef(() => {
  });
  return h.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let s = function() {
          Hl(
            Iy,
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
function Ly(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = h.useRef(!1);
  return h.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Hl(My, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function fa() {
  const e = new CustomEvent(ro);
  document.dispatchEvent(e);
}
function Hl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Bl(o, i) : o.dispatchEvent(i);
}
var xe = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {
}, Fy = h[" useId ".trim().toString()] || (() => {
}), zy = 0;
function je(e) {
  const [t, n] = h.useState(Fy());
  return xe(() => {
    n((r) => r ?? String(zy++));
  }, [e]), t ? `radix-${t}` : "";
}
const By = ["top", "right", "bottom", "left"], dt = Math.min, Ae = Math.max, Hn = Math.round, kn = Math.floor, We = (e) => ({
  x: e,
  y: e
}), $y = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hy = {
  start: "end",
  end: "start"
};
function oo(e, t, n) {
  return Ae(e, dt(t, n));
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
function Bo(e) {
  return e === "y" ? "height" : "width";
}
const Vy = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ue(e) {
  return Vy.has(tt(e)) ? "y" : "x";
}
function $o(e) {
  return zo(Ue(e));
}
function Uy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), o = $o(e), i = Bo(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Vn(a)), [a, Vn(a)];
}
function jy(e) {
  const t = Vn(e);
  return [io(e), t, io(t)];
}
function io(e) {
  return e.replace(/start|end/g, (t) => Hy[t]);
}
const pa = ["left", "right"], ha = ["right", "left"], Wy = ["top", "bottom"], Gy = ["bottom", "top"];
function qy(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ha : pa : t ? pa : ha;
    case "left":
    case "right":
      return t ? Wy : Gy;
    default:
      return [];
  }
}
function Ky(e, t, n, r) {
  const o = Gt(e);
  let i = qy(tt(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(io)))), i;
}
function Vn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $y[t]);
}
function Yy(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vl(e) {
  return typeof e != "number" ? Yy(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Un(e) {
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
function ma(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ue(t), a = $o(t), l = Bo(a), s = tt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
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
      f[a] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      f[a] += p * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const Xy = async (e, t, n) => {
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
  } = ma(c, r, s), p = r, f = {}, y = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: x,
      fn: v
    } = l[g], {
      x: C,
      y: w,
      data: E,
      reset: N
    } = await v({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: f,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = C ?? u, d = w ?? d, f = {
      ...f,
      [x]: {
        ...f[x],
        ...E
      }
    }, N && y <= 50 && (y++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (c = N.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: u,
      y: d
    } = ma(c, p, s)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: f
  };
};
async function cn(e, t) {
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
    altBoundary: p = !1,
    padding: f = 0
  } = et(t, e), y = Vl(f), x = l[p ? d === "floating" ? "reference" : "floating" : d], v = Un(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
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
  }, N = Un(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: C,
    offsetParent: w,
    strategy: s
  }) : C);
  return {
    top: (v.top - N.top + y.top) / E.y,
    bottom: (N.bottom - v.bottom + y.bottom) / E.y,
    left: (v.left - N.left + y.left) / E.x,
    right: (N.right - v.right + y.right) / E.x
  };
}
const Qy = (e) => ({
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
    const d = Vl(u), p = {
      x: n,
      y: r
    }, f = $o(o), y = Bo(f), g = await a.getDimensions(c), x = f === "y", v = x ? "top" : "left", C = x ? "bottom" : "right", w = x ? "clientHeight" : "clientWidth", E = i.reference[y] + i.reference[f] - p[f] - i.floating[y], N = p[f] - i.reference[f], k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let A = k ? k[w] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(k))) && (A = l.floating[w] || i.floating[y]);
    const _ = E / 2 - N / 2, F = A / 2 - g[y] / 2 - 1, z = dt(d[v], F), T = dt(d[C], F), R = z, U = A - g[y] - T, H = A / 2 - g[y] / 2 + _, B = oo(R, H, U), I = !s.arrow && Gt(o) != null && H !== B && i.reference[y] / 2 - (H < R ? z : T) - g[y] / 2 < 0, G = I ? H < R ? H - R : H - U : 0;
    return {
      [f]: p[f] + G,
      data: {
        [f]: B,
        centerOffset: H - B - G,
        ...I && {
          alignmentOffset: G
        }
      },
      reset: I
    };
  }
}), Zy = function(e) {
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
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: g = !0,
        ...x
      } = et(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = tt(o), C = Ue(l), w = tt(l) === l, E = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), N = p || (w || !g ? [Vn(l)] : jy(l)), k = y !== "none";
      !p && k && N.push(...Ky(l, g, y, E));
      const A = [l, ...N], _ = await cn(t, x), F = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && F.push(_[v]), d) {
        const H = Uy(o, a, E);
        F.push(_[H[0]], _[H[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: F
      }], !F.every((H) => H <= 0)) {
        var T, R;
        const H = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, B = A[H];
        if (B && (!(d === "alignment" ? C !== Ue(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every(($) => $.overflows[0] > 0 && Ue($.placement) === C)))
          return {
            data: {
              index: H,
              overflows: z
            },
            reset: {
              placement: B
            }
          };
        let I = (R = z.filter((G) => G.overflows[0] <= 0).sort((G, $) => G.overflows[1] - $.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!I)
          switch (f) {
            case "bestFit": {
              var U;
              const G = (U = z.filter(($) => {
                if (k) {
                  const D = Ue($.placement);
                  return D === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((D) => D > 0).reduce((D, b) => D + b, 0)]).sort(($, D) => $[1] - D[1])[0]) == null ? void 0 : U[0];
              G && (I = G);
              break;
            }
            case "initialPlacement":
              I = l;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function ga(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ya(e) {
  return By.some((t) => e[t] >= 0);
}
const Jy = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = et(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await cn(t, {
            ...o,
            elementContext: "reference"
          }), a = ga(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ya(a)
            }
          };
        }
        case "escaped": {
          const i = await cn(t, {
            ...o,
            altBoundary: !0
          }), a = ga(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ya(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ul = /* @__PURE__ */ new Set(["left", "top"]);
async function ev(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = tt(n), l = Gt(n), s = Ue(n) === "y", c = Ul.has(a) ? -1 : 1, u = i && s ? -1 : 1, d = et(t, e);
  let {
    mainAxis: p,
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
    y: p * c
  } : {
    x: p * c,
    y: f * u
  };
}
const tv = function(e) {
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
      } = t, s = await ev(t, e);
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
}, nv = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: v,
              y: C
            } = x;
            return {
              x: v,
              y: C
            };
          }
        },
        ...s
      } = et(e, t), c = {
        x: n,
        y: r
      }, u = await cn(t, s), d = Ue(tt(o)), p = zo(d);
      let f = c[p], y = c[d];
      if (i) {
        const x = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", C = f + u[x], w = f - u[v];
        f = oo(C, f, w);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", C = y + u[x], w = y - u[v];
        y = oo(C, y, w);
      }
      const g = l.fn({
        ...t,
        [p]: f,
        [d]: y
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [p]: i,
            [d]: a
          }
        }
      };
    }
  };
}, rv = function(e) {
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
      }, d = Ue(o), p = zo(d);
      let f = u[p], y = u[d];
      const g = et(l, t), x = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (s) {
        const w = p === "y" ? "height" : "width", E = i.reference[p] - i.floating[w] + x.mainAxis, N = i.reference[p] + i.reference[w] - x.mainAxis;
        f < E ? f = E : f > N && (f = N);
      }
      if (c) {
        var v, C;
        const w = p === "y" ? "width" : "height", E = Ul.has(tt(o)), N = i.reference[d] - i.floating[w] + (E && ((v = a.offset) == null ? void 0 : v[d]) || 0) + (E ? 0 : x.crossAxis), k = i.reference[d] + i.reference[w] + (E ? 0 : ((C = a.offset) == null ? void 0 : C[d]) || 0) - (E ? x.crossAxis : 0);
        y < N ? y = N : y > k && (y = k);
      }
      return {
        [p]: f,
        [d]: y
      };
    }
  };
}, ov = function(e) {
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
      } = et(e, t), u = await cn(t, c), d = tt(o), p = Gt(o), f = Ue(o) === "y", {
        width: y,
        height: g
      } = i.floating;
      let x, v;
      d === "top" || d === "bottom" ? (x = d, v = p === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (v = d, x = p === "end" ? "top" : "bottom");
      const C = g - u.top - u.bottom, w = y - u.left - u.right, E = dt(g - u[x], C), N = dt(y - u[v], w), k = !t.middlewareData.shift;
      let A = E, _ = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = w), (r = t.middlewareData.shift) != null && r.enabled.y && (A = C), k && !p) {
        const z = Ae(u.left, 0), T = Ae(u.right, 0), R = Ae(u.top, 0), U = Ae(u.bottom, 0);
        f ? _ = y - 2 * (z !== 0 || T !== 0 ? z + T : Ae(u.left, u.right)) : A = g - 2 * (R !== 0 || U !== 0 ? R + U : Ae(u.top, u.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: A
      });
      const F = await a.getDimensions(l.floating);
      return y !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function tr() {
  return typeof window < "u";
}
function qt(e) {
  return jl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xe(e) {
  var t;
  return (t = (jl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jl(e) {
  return tr() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function Fe(e) {
  return tr() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function Ke(e) {
  return tr() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function va(e) {
  return !tr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
const iv = /* @__PURE__ */ new Set(["inline", "contents"]);
function yn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !iv.has(o);
}
const av = /* @__PURE__ */ new Set(["table", "td", "th"]);
function lv(e) {
  return av.has(qt(e));
}
const sv = [":popover-open", ":modal"];
function nr(e) {
  return sv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const cv = ["transform", "translate", "scale", "rotate", "perspective"], uv = ["transform", "translate", "scale", "rotate", "perspective", "filter"], dv = ["paint", "layout", "strict", "content"];
function Ho(e) {
  const t = Vo(), n = Fe(e) ? ze(e) : e;
  return cv.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || uv.some((r) => (n.willChange || "").includes(r)) || dv.some((r) => (n.contain || "").includes(r));
}
function fv(e) {
  let t = ft(e);
  for (; Ke(t) && !Ht(t); ) {
    if (Ho(t))
      return t;
    if (nr(t))
      return null;
    t = ft(t);
  }
  return null;
}
function Vo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const pv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ht(e) {
  return pv.has(qt(e));
}
function ze(e) {
  return Te(e).getComputedStyle(e);
}
function rr(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    va(e) && e.host || // Fallback.
    Xe(e)
  );
  return va(t) ? t.host : t;
}
function Wl(e) {
  const t = ft(e);
  return Ht(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(t) && yn(t) ? t : Wl(t);
}
function un(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Wl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Te(o);
  if (i) {
    const l = ao(a);
    return t.concat(a, a.visualViewport || [], yn(o) ? o : [], l && n ? un(l) : []);
  }
  return t.concat(o, un(o, [], n));
}
function ao(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gl(e) {
  const t = ze(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ke(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, l = Hn(n) !== i || Hn(r) !== a;
  return l && (n = i, r = a), {
    width: n,
    height: r,
    $: l
  };
}
function Uo(e) {
  return Fe(e) ? e : e.contextElement;
}
function zt(e) {
  const t = Uo(e);
  if (!Ke(t))
    return We(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Gl(t);
  let a = (i ? Hn(n.width) : n.width) / r, l = (i ? Hn(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const hv = /* @__PURE__ */ We(0);
function ql(e) {
  const t = Te(e);
  return !Vo() || !t.visualViewport ? hv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Te(e) ? !1 : t;
}
function St(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Uo(e);
  let a = We(1);
  t && (r ? Fe(r) && (a = zt(r)) : a = zt(e));
  const l = mv(i, n, r) ? ql(i) : We(0);
  let s = (o.left + l.x) / a.x, c = (o.top + l.y) / a.y, u = o.width / a.x, d = o.height / a.y;
  if (i) {
    const p = Te(i), f = r && Fe(r) ? Te(r) : r;
    let y = p, g = ao(y);
    for (; g && r && f !== y; ) {
      const x = zt(g), v = g.getBoundingClientRect(), C = ze(g), w = v.left + (g.clientLeft + parseFloat(C.paddingLeft)) * x.x, E = v.top + (g.clientTop + parseFloat(C.paddingTop)) * x.y;
      s *= x.x, c *= x.y, u *= x.x, d *= x.y, s += w, c += E, y = Te(g), g = ao(y);
    }
  }
  return Un({
    width: u,
    height: d,
    x: s,
    y: c
  });
}
function jo(e, t) {
  const n = rr(e).scrollLeft;
  return t ? t.left + n : St(Xe(e)).left + n;
}
function Kl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    jo(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function gv(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Xe(r), l = t ? nr(t.floating) : !1;
  if (r === a || l && i)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = We(1);
  const u = We(0), d = Ke(r);
  if ((d || !d && !i) && ((qt(r) !== "body" || yn(a)) && (s = rr(r)), Ke(r))) {
    const f = St(r);
    c = zt(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const p = a && !d && !i ? Kl(a, s, !0) : We(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - s.scrollLeft * c.x + u.x + p.x,
    y: n.y * c.y - s.scrollTop * c.y + u.y + p.y
  };
}
function yv(e) {
  return Array.from(e.getClientRects());
}
function vv(e) {
  const t = Xe(e), n = rr(e), r = e.ownerDocument.body, o = Ae(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + jo(e);
  const l = -n.scrollTop;
  return ze(r).direction === "rtl" && (a += Ae(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: l
  };
}
function xv(e, t) {
  const n = Te(e), r = Xe(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, l = 0, s = 0;
  if (o) {
    i = o.width, a = o.height;
    const c = Vo();
    (!c || c && t === "fixed") && (l = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l,
    y: s
  };
}
const wv = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function bv(e, t) {
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
    r = xv(e, n);
  else if (t === "document")
    r = vv(Xe(e));
  else if (Fe(t))
    r = bv(t, n);
  else {
    const o = ql(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Un(r);
}
function Yl(e, t) {
  const n = ft(e);
  return n === t || !Fe(n) || Ht(n) ? !1 : ze(n).position === "fixed" || Yl(n, t);
}
function Sv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = un(e, [], !1).filter((l) => Fe(l) && qt(l) !== "body"), o = null;
  const i = ze(e).position === "fixed";
  let a = i ? ft(e) : e;
  for (; Fe(a) && !Ht(a); ) {
    const l = ze(a), s = Ho(a);
    !s && l.position === "fixed" && (o = null), (i ? !s && !o : !s && l.position === "static" && !!o && wv.has(o.position) || yn(a) && !s && Yl(e, a)) ? r = r.filter((u) => u !== a) : o = l, a = ft(a);
  }
  return t.set(e, r), r;
}
function Cv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? nr(t) ? [] : Sv(t, this._c) : [].concat(n), r], l = a[0], s = a.reduce((c, u) => {
    const d = xa(t, u, o);
    return c.top = Ae(d.top, c.top), c.right = dt(d.right, c.right), c.bottom = dt(d.bottom, c.bottom), c.left = Ae(d.left, c.left), c;
  }, xa(t, l, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function kv(e) {
  const {
    width: t,
    height: n
  } = Gl(e);
  return {
    width: t,
    height: n
  };
}
function Ev(e, t, n) {
  const r = Ke(t), o = Xe(t), i = n === "fixed", a = St(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = We(0);
  function c() {
    s.x = jo(o);
  }
  if (r || !r && !i)
    if ((qt(t) !== "body" || yn(o)) && (l = rr(t)), r) {
      const f = St(t, !0, i, t);
      s.x = f.x + t.clientLeft, s.y = f.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Kl(o, l) : We(0), d = a.left + l.scrollLeft - s.x - u.x, p = a.top + l.scrollTop - s.y - u.y;
  return {
    x: d,
    y: p,
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
function Xl(e, t) {
  const n = Te(e);
  if (nr(e))
    return n;
  if (!Ke(e)) {
    let o = ft(e);
    for (; o && !Ht(o); ) {
      if (Fe(o) && !Mr(o))
        return o;
      o = ft(o);
    }
    return n;
  }
  let r = wa(e, t);
  for (; r && lv(r) && Mr(r); )
    r = wa(r, t);
  return r && Ht(r) && Mr(r) && !Ho(r) ? n : r || fv(e) || n;
}
const Nv = async function(e) {
  const t = this.getOffsetParent || Xl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ev(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Av(e) {
  return ze(e).direction === "rtl";
}
const Pv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gv,
  getDocumentElement: Xe,
  getClippingRect: Cv,
  getOffsetParent: Xl,
  getElementRects: Nv,
  getClientRects: yv,
  getDimensions: kv,
  getScale: zt,
  isElement: Fe,
  isRTL: Av
};
function Ql(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Rv(e, t) {
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
      width: p,
      height: f
    } = c;
    if (l || t(), !p || !f)
      return;
    const y = kn(d), g = kn(o.clientWidth - (u + p)), x = kn(o.clientHeight - (d + f)), v = kn(u), w = {
      rootMargin: -y + "px " + -g + "px " + -x + "px " + -v + "px",
      threshold: Ae(0, dt(1, s)) || 1
    };
    let E = !0;
    function N(k) {
      const A = k[0].intersectionRatio;
      if (A !== s) {
        if (!E)
          return a();
        A ? a(!1, A) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Ql(c, e.getBoundingClientRect()) && a(), E = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, w);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Tv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, c = Uo(e), u = o || i ? [...c ? un(c) : [], ...un(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = c && l ? Rv(c, n) : null;
  let p = -1, f = null;
  a && (f = new ResizeObserver((v) => {
    let [C] = v;
    C && C.target === c && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), n();
  }), c && !s && f.observe(c), f.observe(t));
  let y, g = s ? St(e) : null;
  s && x();
  function x() {
    const v = St(e);
    g && !Ql(g, v) && n(), g = v, y = requestAnimationFrame(x);
  }
  return n(), () => {
    var v;
    u.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), d == null || d(), (v = f) == null || v.disconnect(), f = null, s && cancelAnimationFrame(y);
  };
}
const Iv = tv, Mv = nv, _v = Zy, Dv = ov, Ov = Jy, ba = Qy, Lv = rv, Fv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Pv,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Xy(e, t, {
    ...o,
    platform: i
  });
};
var zv = typeof document < "u", Bv = function() {
}, Mn = zv ? kd : Bv;
function jn(e, t) {
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
        if (!jn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !jn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Zl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sa(e, t) {
  const n = Zl(e);
  return Math.round(t * n) / n;
}
function _r(e) {
  const t = h.useRef(e);
  return Mn(() => {
    t.current = e;
  }), t;
}
function $v(e) {
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
  } = e, [u, d] = h.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = h.useState(r);
  jn(p, r) || f(r);
  const [y, g] = h.useState(null), [x, v] = h.useState(null), C = h.useCallback(($) => {
    $ !== k.current && (k.current = $, g($));
  }, []), w = h.useCallback(($) => {
    $ !== A.current && (A.current = $, v($));
  }, []), E = i || y, N = a || x, k = h.useRef(null), A = h.useRef(null), _ = h.useRef(u), F = s != null, z = _r(s), T = _r(o), R = _r(c), U = h.useCallback(() => {
    if (!k.current || !A.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    T.current && ($.platform = T.current), Fv(k.current, A.current, $).then((D) => {
      const b = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      H.current && !jn(_.current, b) && (_.current = b, Yn.flushSync(() => {
        d(b);
      }));
    });
  }, [p, t, n, T, R]);
  Mn(() => {
    c === !1 && _.current.isPositioned && (_.current.isPositioned = !1, d(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [c]);
  const H = h.useRef(!1);
  Mn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Mn(() => {
    if (E && (k.current = E), N && (A.current = N), E && N) {
      if (z.current)
        return z.current(E, N, U);
      U();
    }
  }, [E, N, U, z, F]);
  const B = h.useMemo(() => ({
    reference: k,
    floating: A,
    setReference: C,
    setFloating: w
  }), [C, w]), I = h.useMemo(() => ({
    reference: E,
    floating: N
  }), [E, N]), G = h.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return $;
    const D = Sa(I.floating, u.x), b = Sa(I.floating, u.y);
    return l ? {
      ...$,
      transform: "translate(" + D + "px, " + b + "px)",
      ...Zl(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: b
    };
  }, [n, l, I.floating, u.x, u.y]);
  return h.useMemo(() => ({
    ...u,
    update: U,
    refs: B,
    elements: I,
    floatingStyles: G
  }), [u, U, B, I, G]);
}
const Hv = (e) => {
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
}, Vv = (e, t) => ({
  ...Iv(e),
  options: [e, t]
}), Uv = (e, t) => ({
  ...Mv(e),
  options: [e, t]
}), jv = (e, t) => ({
  ...Lv(e),
  options: [e, t]
}), Wv = (e, t) => ({
  ..._v(e),
  options: [e, t]
}), Gv = (e, t) => ({
  ...Dv(e),
  options: [e, t]
}), qv = (e, t) => ({
  ...Ov(e),
  options: [e, t]
}), Kv = (e, t) => ({
  ...Hv(e),
  options: [e, t]
});
var Yv = "Arrow", Jl = h.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ m(
    ee.svg,
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
Jl.displayName = Yv;
var Xv = Jl;
function es(e) {
  const [t, n] = h.useState(void 0);
  return xe(() => {
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
var Wo = "Popper", [ts, Kt] = Ye(Wo), [Qv, ns] = ts(Wo), rs = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = h.useState(null);
  return /* @__PURE__ */ m(Qv, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
rs.displayName = Wo;
var os = "PopperAnchor", is = h.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = ns(os, n), a = h.useRef(null), l = le(t, a);
    return h.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ m(ee.div, { ...o, ref: l });
  }
);
is.displayName = os;
var Go = "PopperContent", [Zv, Jv] = ts(Go), as = h.forwardRef(
  (e, t) => {
    var j, Y, ne, J, re, se;
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
      hideWhenDetached: p = !1,
      updatePositionStrategy: f = "optimized",
      onPlaced: y,
      ...g
    } = e, x = ns(Go, n), [v, C] = h.useState(null), w = le(t, (ye) => C(ye)), [E, N] = h.useState(null), k = es(E), A = (k == null ? void 0 : k.width) ?? 0, _ = (k == null ? void 0 : k.height) ?? 0, F = r + (i !== "center" ? "-" + i : ""), z = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, T = Array.isArray(c) ? c : [c], R = T.length > 0, U = {
      padding: z,
      boundary: T.filter(tx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: H, floatingStyles: B, placement: I, isPositioned: G, middlewareData: $ } = $v({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...ye) => Tv(...ye, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Vv({ mainAxis: o + _, alignmentAxis: a }),
        s && Uv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? jv() : void 0,
          ...U
        }),
        s && Wv({ ...U }),
        Gv({
          ...U,
          apply: ({ elements: ye, rects: Ie, availableWidth: ot, availableHeight: it }) => {
            const { width: at, height: xr } = Ie.reference, gt = ye.floating.style;
            gt.setProperty("--radix-popper-available-width", `${ot}px`), gt.setProperty("--radix-popper-available-height", `${it}px`), gt.setProperty("--radix-popper-anchor-width", `${at}px`), gt.setProperty("--radix-popper-anchor-height", `${xr}px`);
          }
        }),
        E && Kv({ element: E, padding: l }),
        nx({ arrowWidth: A, arrowHeight: _ }),
        p && qv({ strategy: "referenceHidden", ...U })
      ]
    }), [D, b] = cs(I), K = qe(y);
    xe(() => {
      G && (K == null || K());
    }, [G, K]);
    const ue = (j = $.arrow) == null ? void 0 : j.x, S = (Y = $.arrow) == null ? void 0 : Y.y, W = ((ne = $.arrow) == null ? void 0 : ne.centerOffset) !== 0, [de, ie] = h.useState();
    return xe(() => {
      v && ie(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ m(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: G ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            (J = $.transformOrigin) == null ? void 0 : J.x,
            (re = $.transformOrigin) == null ? void 0 : re.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((se = $.hide) == null ? void 0 : se.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          Zv,
          {
            scope: n,
            placedSide: D,
            onArrowChange: N,
            arrowX: ue,
            arrowY: S,
            shouldHideArrow: W,
            children: /* @__PURE__ */ m(
              ee.div,
              {
                "data-side": D,
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
as.displayName = Go;
var ls = "PopperArrow", ex = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ss = h.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Jv(ls, r), a = ex[i.placedSide];
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
          Xv,
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
ss.displayName = ls;
function tx(e) {
  return e !== null;
}
var nx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, v, C;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, l = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, u] = cs(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + l / 2, f = (((C = o.arrow) == null ? void 0 : C.y) ?? 0) + s / 2;
    let y = "", g = "";
    return c === "bottom" ? (y = a ? d : `${p}px`, g = `${-s}px`) : c === "top" ? (y = a ? d : `${p}px`, g = `${r.floating.height + s}px`) : c === "right" ? (y = `${-s}px`, g = a ? d : `${f}px`) : c === "left" && (y = `${r.floating.width + s}px`, g = a ? d : `${f}px`), { data: { x: y, y: g } };
  }
});
function cs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qo = rs, Ko = is, Yo = as, Xo = ss, rx = "Portal", or = h.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = h.useState(!1);
  xe(() => i(!0), []);
  const a = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return a ? Nd.createPortal(/* @__PURE__ */ m(ee.div, { ...r, ref: t }), a) : null;
});
or.displayName = rx;
function ox(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var nt = (e) => {
  const { present: t, children: n } = e, r = ix(t), o = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), i = le(r.ref, ax(o));
  return typeof n == "function" || r.isPresent ? h.cloneElement(o, { ref: i }) : null;
};
nt.displayName = "Presence";
function ix(e) {
  const [t, n] = h.useState(), r = h.useRef(null), o = h.useRef(e), i = h.useRef("none"), a = e ? "mounted" : "unmounted", [l, s] = ox(a, {
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
  return h.useEffect(() => {
    const c = En(r.current);
    i.current = l === "mounted" ? c : "none";
  }, [l]), xe(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const p = i.current, f = En(c);
      e ? s("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? s("UNMOUNT") : s(u && p !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), xe(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, d = (f) => {
        const g = En(r.current).includes(f.animationName);
        if (f.target === t && g && (s("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, p = (f) => {
        f.target === t && (i.current = En(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: h.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function En(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ax(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var lx = h[" useInsertionEffect ".trim().toString()] || xe;
function Ct({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, a] = sx({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, s = l ? e : o;
  {
    const u = h.useRef(e !== void 0);
    h.useEffect(() => {
      const d = u.current;
      d !== l && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, r]);
  }
  const c = h.useCallback(
    (u) => {
      var d;
      if (l) {
        const p = cx(u) ? u(e) : u;
        p !== e && ((d = a.current) == null || d.call(a, p));
      } else
        i(u);
    },
    [l, e, i, a]
  );
  return [s, c];
}
function sx({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = h.useState(e), o = h.useRef(n), i = h.useRef(t);
  return lx(() => {
    i.current = t;
  }, [t]), h.useEffect(() => {
    var a;
    o.current !== n && ((a = i.current) == null || a.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function cx(e) {
  return typeof e == "function";
}
var us = Object.freeze({
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
}), ux = "VisuallyHidden", ds = h.forwardRef(
  (e, t) => /* @__PURE__ */ m(
    ee.span,
    {
      ...e,
      ref: t,
      style: { ...us, ...e.style }
    }
  )
);
ds.displayName = ux;
var dx = ds, [ir, PS] = Ye("Tooltip", [
  Kt
]), ar = Kt(), fs = "TooltipProvider", fx = 700, lo = "tooltip.open", [px, Qo] = ir(fs), ps = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = fx,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = h.useRef(!0), l = h.useRef(!1), s = h.useRef(0);
  return h.useEffect(() => {
    const c = s.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ m(
    px,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: h.useCallback(() => {
        window.clearTimeout(s.current), a.current = !1;
      }, []),
      onClose: h.useCallback(() => {
        window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: h.useCallback((c) => {
        l.current = c;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
ps.displayName = fs;
var dn = "Tooltip", [hx, lr] = ir(dn), hs = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: l
  } = e, s = Qo(dn, e.__scopeTooltip), c = ar(t), [u, d] = h.useState(null), p = je(), f = h.useRef(0), y = a ?? s.disableHoverableContent, g = l ?? s.delayDuration, x = h.useRef(!1), [v, C] = Ct({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (s.onOpen(), document.dispatchEvent(new CustomEvent(lo))) : s.onClose(), i == null || i(A);
    },
    caller: dn
  }), w = h.useMemo(() => v ? x.current ? "delayed-open" : "instant-open" : "closed", [v]), E = h.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, x.current = !1, C(!0);
  }, [C]), N = h.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, C(!1);
  }, [C]), k = h.useCallback(() => {
    window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      x.current = !0, C(!0), f.current = 0;
    }, g);
  }, [g, C]);
  return h.useEffect(() => () => {
    f.current && (window.clearTimeout(f.current), f.current = 0);
  }, []), /* @__PURE__ */ m(qo, { ...c, children: /* @__PURE__ */ m(
    hx,
    {
      scope: t,
      contentId: p,
      open: v,
      stateAttribute: w,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: h.useCallback(() => {
        s.isOpenDelayedRef.current ? k() : E();
      }, [s.isOpenDelayedRef, k, E]),
      onTriggerLeave: h.useCallback(() => {
        y ? N() : (window.clearTimeout(f.current), f.current = 0);
      }, [N, y]),
      onOpen: E,
      onClose: N,
      disableHoverableContent: y,
      children: n
    }
  ) });
};
hs.displayName = dn;
var so = "TooltipTrigger", ms = h.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = lr(so, n), i = Qo(so, n), a = ar(n), l = h.useRef(null), s = le(t, l, o.onTriggerChange), c = h.useRef(!1), u = h.useRef(!1), d = h.useCallback(() => c.current = !1, []);
    return h.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ m(Ko, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      ee.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: s,
        onPointerMove: V(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: V(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: V(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: V(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: V(e.onBlur, o.onClose),
        onClick: V(e.onClick, o.onClose)
      }
    ) });
  }
);
ms.displayName = so;
var mx = "TooltipPortal", [RS, gx] = ir(mx, {
  forceMount: void 0
}), Vt = "TooltipContent", gs = h.forwardRef(
  (e, t) => {
    const n = gx(Vt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, a = lr(Vt, e.__scopeTooltip);
    return /* @__PURE__ */ m(nt, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ m(ys, { side: o, ...i, ref: t }) : /* @__PURE__ */ m(yx, { side: o, ...i, ref: t }) });
  }
), yx = h.forwardRef((e, t) => {
  const n = lr(Vt, e.__scopeTooltip), r = Qo(Vt, e.__scopeTooltip), o = h.useRef(null), i = le(t, o), [a, l] = h.useState(null), { trigger: s, onClose: c } = n, u = o.current, { onPointerInTransitChange: d } = r, p = h.useCallback(() => {
    l(null), d(!1);
  }, [d]), f = h.useCallback(
    (y, g) => {
      const x = y.currentTarget, v = { x: y.clientX, y: y.clientY }, C = Sx(v, x.getBoundingClientRect()), w = Cx(v, C), E = kx(g.getBoundingClientRect()), N = Nx([...w, ...E]);
      l(N), d(!0);
    },
    [d]
  );
  return h.useEffect(() => () => p(), [p]), h.useEffect(() => {
    if (s && u) {
      const y = (x) => f(x, u), g = (x) => f(x, s);
      return s.addEventListener("pointerleave", y), u.addEventListener("pointerleave", g), () => {
        s.removeEventListener("pointerleave", y), u.removeEventListener("pointerleave", g);
      };
    }
  }, [s, u, f, p]), h.useEffect(() => {
    if (a) {
      const y = (g) => {
        const x = g.target, v = { x: g.clientX, y: g.clientY }, C = (s == null ? void 0 : s.contains(x)) || (u == null ? void 0 : u.contains(x)), w = !Ex(v, a);
        C ? p() : w && (p(), c());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [s, u, a, c, p]), /* @__PURE__ */ m(ys, { ...e, ref: i });
}), [vx, xx] = ir(dn, { isInside: !1 }), wx = /* @__PURE__ */ Tl("TooltipContent"), ys = h.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...l
    } = e, s = lr(Vt, n), c = ar(n), { onClose: u } = s;
    return h.useEffect(() => (document.addEventListener(lo, u), () => document.removeEventListener(lo, u)), [u]), h.useEffect(() => {
      if (s.trigger) {
        const d = (p) => {
          const f = p.target;
          f != null && f.contains(s.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [s.trigger, u]), /* @__PURE__ */ m(
      gn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ L(
          Yo,
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
              /* @__PURE__ */ m(wx, { children: r }),
              /* @__PURE__ */ m(vx, { scope: n, isInside: !0, children: /* @__PURE__ */ m(dx, { id: s.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
gs.displayName = Vt;
var vs = "TooltipArrow", bx = h.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ar(n);
    return xx(
      vs,
      n
    ).isInside ? null : /* @__PURE__ */ m(Xo, { ...o, ...r, ref: t });
  }
);
bx.displayName = vs;
function Sx(e, t) {
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
function Cx(e, t, n = 5) {
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
function kx(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Ex(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i], s = t[a], c = l.x, u = l.y, d = s.x, p = s.y;
    u > r != p > r && n < (d - c) * (r - u) / (p - u) + c && (o = !o);
  }
  return o;
}
function Nx(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Ax(t);
}
function Ax(e) {
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
var Px = ps, Rx = hs, Tx = ms, xs = gs;
const Ix = Px, Mx = Rx, _x = Tx, ws = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(
  xs,
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
ws.displayName = xs.displayName;
const Dx = [
  { icon: xg, key: "bold", before: "**", after: "**", placeholder: "bold text" },
  { icon: Mg, key: "italic", before: "*", after: "*", placeholder: "italic text" },
  { icon: Pg, key: "heading1", before: "# ", after: "", placeholder: "Heading" },
  { icon: Rg, key: "heading2", before: "## ", after: "", placeholder: "Heading" },
  { icon: Tg, key: "heading3", before: "### ", after: "", placeholder: "Heading" },
  { icon: Og, key: "list", before: "- ", after: "", placeholder: "List item" },
  { icon: Dg, key: "orderedList", before: "1. ", after: "", placeholder: "List item" },
  { icon: Cg, key: "code", before: "`", after: "`", placeholder: "code" },
  { icon: zg, key: "quote", before: "> ", after: "", placeholder: "Quote" },
  { icon: _g, key: "link", before: "[", after: "](url)", placeholder: "link text" },
  { icon: Lg, key: "divider", before: `
---
`, after: "", placeholder: "" }
];
function Ox({ onInsert: e, labels: t = {} }) {
  const n = (r) => t[r] || r.charAt(0).toUpperCase() + r.slice(1);
  return /* @__PURE__ */ m(Ix, { delayDuration: 300, children: /* @__PURE__ */ m("div", { className: "flex items-center gap-0.5 p-1 border-b border-border bg-muted/30 rounded-t-xl flex-wrap", children: Dx.map((r, o) => /* @__PURE__ */ L(Mx, { children: [
    /* @__PURE__ */ m(_x, { asChild: !0, children: /* @__PURE__ */ m(
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
    /* @__PURE__ */ m(ws, { side: "bottom", className: "text-xs", children: n(r.key) })
  ] }, `${r.key}-${o}`)) }) });
}
function bs(e) {
  const t = h.useRef({ value: e, previous: e });
  return h.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var sr = "Switch", [Lx, TS] = Ye(sr), [Fx, zx] = Lx(sr), Ss = h.forwardRef(
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
    } = e, [p, f] = h.useState(null), y = le(t, (w) => f(w)), g = h.useRef(!1), x = p ? u || !!p.closest("form") : !0, [v, C] = Ct({
      prop: o,
      defaultProp: i ?? !1,
      onChange: c,
      caller: sr
    });
    return /* @__PURE__ */ L(Fx, { scope: n, checked: v, disabled: l, children: [
      /* @__PURE__ */ m(
        ee.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": v,
          "aria-required": a,
          "data-state": Ns(v),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: s,
          ...d,
          ref: y,
          onClick: V(e.onClick, (w) => {
            C((E) => !E), x && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ m(
        Es,
        {
          control: p,
          bubbles: !g.current,
          name: r,
          value: s,
          checked: v,
          required: a,
          disabled: l,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ss.displayName = sr;
var Cs = "SwitchThumb", ks = h.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = zx(Cs, n);
    return /* @__PURE__ */ m(
      ee.span,
      {
        "data-state": Ns(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ks.displayName = Cs;
var Bx = "SwitchBubbleInput", Es = h.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, i) => {
    const a = h.useRef(null), l = le(a, i), s = bs(n), c = es(t);
    return h.useEffect(() => {
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
Es.displayName = Bx;
function Ns(e) {
  return e ? "checked" : "unchecked";
}
var As = Ss, $x = ks;
const Ps = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  As,
  {
    className: te(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ m(
      $x,
      {
        className: te(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Ps.displayName = As.displayName;
var Hx = "Label", Rs = h.forwardRef((e, t) => /* @__PURE__ */ m(
  ee.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Rs.displayName = Hx;
var Ts = Rs;
const Vx = _l("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), _n = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(Ts, { ref: n, className: te(Vx(), e), ...t }));
_n.displayName = Ts.displayName;
function Ca(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Zo(e) {
  const t = e + "CollectionProvider", [n, r] = Ye(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (g) => {
    const { scope: x, children: v } = g, C = vt.useRef(null), w = vt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(o, { scope: x, itemMap: w, collectionRef: C, children: v });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", s = /* @__PURE__ */ bt(l), c = vt.forwardRef(
    (g, x) => {
      const { scope: v, children: C } = g, w = i(l, v), E = le(x, w.collectionRef);
      return /* @__PURE__ */ m(s, { ref: E, children: C });
    }
  );
  c.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ bt(u), f = vt.forwardRef(
    (g, x) => {
      const { scope: v, children: C, ...w } = g, E = vt.useRef(null), N = le(x, E), k = i(u, v);
      return vt.useEffect(() => (k.itemMap.set(E, { ref: E, ...w }), () => void k.itemMap.delete(E))), /* @__PURE__ */ m(p, { [d]: "", ref: N, children: C });
    }
  );
  f.displayName = u;
  function y(g) {
    const x = i(e + "CollectionConsumer", g);
    return vt.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const w = Array.from(C.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (k, A) => w.indexOf(k.ref.current) - w.indexOf(A.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: f },
    y,
    r
  ];
}
var Ux = h.createContext(void 0);
function Jo(e) {
  const t = h.useContext(Ux);
  return e || t || "ltr";
}
var Dr = 0;
function ei() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ka()), document.body.insertAdjacentElement("beforeend", e[1] ?? ka()), Dr++, () => {
      Dr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Dr--;
    };
  }, []);
}
function ka() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Or = "focusScope.autoFocusOnMount", Lr = "focusScope.autoFocusOnUnmount", Ea = { bubbles: !1, cancelable: !0 }, jx = "FocusScope", cr = h.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [l, s] = h.useState(null), c = qe(o), u = qe(i), d = h.useRef(null), p = le(t, (g) => s(g)), f = h.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.useEffect(() => {
    if (r) {
      let g = function(w) {
        if (f.paused || !l) return;
        const E = w.target;
        l.contains(E) ? d.current = E : ut(d.current, { select: !0 });
      }, x = function(w) {
        if (f.paused || !l) return;
        const E = w.relatedTarget;
        E !== null && (l.contains(E) || ut(d.current, { select: !0 }));
      }, v = function(w) {
        if (document.activeElement === document.body)
          for (const N of w)
            N.removedNodes.length > 0 && ut(l);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const C = new MutationObserver(v);
      return l && C.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [r, l, f.paused]), h.useEffect(() => {
    if (l) {
      Aa.add(f);
      const g = document.activeElement;
      if (!l.contains(g)) {
        const v = new CustomEvent(Or, Ea);
        l.addEventListener(Or, c), l.dispatchEvent(v), v.defaultPrevented || (Wx(Xx(Is(l)), { select: !0 }), document.activeElement === g && ut(l));
      }
      return () => {
        l.removeEventListener(Or, c), setTimeout(() => {
          const v = new CustomEvent(Lr, Ea);
          l.addEventListener(Lr, u), l.dispatchEvent(v), v.defaultPrevented || ut(g ?? document.body, { select: !0 }), l.removeEventListener(Lr, u), Aa.remove(f);
        }, 0);
      };
    }
  }, [l, c, u, f]);
  const y = h.useCallback(
    (g) => {
      if (!n && !r || f.paused) return;
      const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, v = document.activeElement;
      if (x && v) {
        const C = g.currentTarget, [w, E] = Gx(C);
        w && E ? !g.shiftKey && v === E ? (g.preventDefault(), n && ut(w, { select: !0 })) : g.shiftKey && v === w && (g.preventDefault(), n && ut(E, { select: !0 })) : v === C && g.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ m(ee.div, { tabIndex: -1, ...a, ref: p, onKeyDown: y });
});
cr.displayName = jx;
function Wx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ut(r, { select: t }), document.activeElement !== n) return;
}
function Gx(e) {
  const t = Is(e), n = Na(t, e), r = Na(t.reverse(), e);
  return [n, r];
}
function Is(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Na(e, t) {
  for (const n of e)
    if (!qx(n, { upTo: t })) return n;
}
function qx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Kx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Kx(e) && t && e.select();
  }
}
var Aa = Yx();
function Yx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Pa(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Pa(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Pa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Xx(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Qx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mt = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), An = {}, Fr = 0, Ms = function(e) {
  return e && (e.host || Ms(e.parentNode));
}, Zx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ms(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Jx = function(e, t, n, r) {
  var o = Zx(t, Array.isArray(e) ? e : [e]);
  An[n] || (An[n] = /* @__PURE__ */ new WeakMap());
  var i = An[n], a = [], l = /* @__PURE__ */ new Set(), s = new Set(o), c = function(d) {
    !d || l.has(d) || (l.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var f = p.getAttribute(r), y = f !== null && f !== "false", g = (Mt.get(p) || 0) + 1, x = (i.get(p) || 0) + 1;
          Mt.set(p, g), i.set(p, x), a.push(p), g === 1 && y && Nn.set(p, !0), x === 1 && p.setAttribute(n, "true"), y || p.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", p, v);
        }
    });
  };
  return u(t), l.clear(), Fr++, function() {
    a.forEach(function(d) {
      var p = Mt.get(d) - 1, f = i.get(d) - 1;
      Mt.set(d, p), i.set(d, f), p || (Nn.has(d) || d.removeAttribute(r), Nn.delete(d)), f || d.removeAttribute(n);
    }), Fr--, Fr || (Mt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), An = {});
  };
}, ti = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Qx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Jx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ve = function() {
  return Ve = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ve.apply(this, arguments);
};
function _s(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ew(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Dn = "right-scroll-bar-position", On = "width-before-scroll-bar", tw = "with-scroll-bars-hidden", nw = "--removed-body-scroll-bar-size";
function zr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rw(e, t) {
  var n = ve(function() {
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
var ow = typeof window < "u" ? h.useLayoutEffect : h.useEffect, Ra = /* @__PURE__ */ new WeakMap();
function iw(e, t) {
  var n = rw(null, function(r) {
    return e.forEach(function(o) {
      return zr(o, r);
    });
  });
  return ow(function() {
    var r = Ra.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(l) {
        i.has(l) || zr(l, null);
      }), i.forEach(function(l) {
        o.has(l) || zr(l, a);
      });
    }
    Ra.set(n, e);
  }, [e]), n;
}
function aw(e) {
  return e;
}
function lw(e, t) {
  t === void 0 && (t = aw);
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
function sw(e) {
  e === void 0 && (e = {});
  var t = lw(null);
  return t.options = Ve({ async: !0, ssr: !1 }, e), t;
}
var Ds = function(e) {
  var t = e.sideCar, n = _s(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return h.createElement(r, Ve({}, n));
};
Ds.isSideCarExport = !0;
function cw(e, t) {
  return e.useMedium(t), Ds;
}
var Os = sw(), Br = function() {
}, ur = h.forwardRef(function(e, t) {
  var n = h.useRef(null), r = h.useState({
    onScrollCapture: Br,
    onWheelCapture: Br,
    onTouchMoveCapture: Br
  }), o = r[0], i = r[1], a = e.forwardProps, l = e.children, s = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, f = e.noRelative, y = e.noIsolation, g = e.inert, x = e.allowPinchZoom, v = e.as, C = v === void 0 ? "div" : v, w = e.gapMode, E = _s(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = p, k = iw([n, t]), A = Ve(Ve({}, E), o);
  return h.createElement(
    h.Fragment,
    null,
    u && h.createElement(N, { sideCar: Os, removeScrollBar: c, shards: d, noRelative: f, noIsolation: y, inert: g, setCallbacks: i, allowPinchZoom: !!x, lockRef: n, gapMode: w }),
    a ? h.cloneElement(h.Children.only(l), Ve(Ve({}, A), { ref: k })) : h.createElement(C, Ve({}, A, { className: s, ref: k }), l)
  );
});
ur.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ur.classNames = {
  fullWidth: On,
  zeroRight: Dn
};
var uw = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function dw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = uw();
  return t && e.setAttribute("nonce", t), e;
}
function fw(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function pw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var hw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = dw()) && (fw(t, n), pw(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mw = function() {
  var e = hw();
  return function(t, n) {
    h.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ls = function() {
  var e = mw(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, gw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $r = function(e) {
  return parseInt(e || "", 10) || 0;
}, yw = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$r(n), $r(r), $r(o)];
}, vw = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return gw;
  var t = yw(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, xw = Ls(), Bt = "data-scroll-locked", ww = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(tw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Bt, `] {
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
  
  .`).concat(Dn, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(On, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Dn, " .").concat(Dn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(On, " .").concat(On, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Bt, `] {
    `).concat(nw, ": ").concat(l, `px;
  }
`);
}, Ta = function() {
  var e = parseInt(document.body.getAttribute(Bt) || "0", 10);
  return isFinite(e) ? e : 0;
}, bw = function() {
  h.useEffect(function() {
    return document.body.setAttribute(Bt, (Ta() + 1).toString()), function() {
      var e = Ta() - 1;
      e <= 0 ? document.body.removeAttribute(Bt) : document.body.setAttribute(Bt, e.toString());
    };
  }, []);
}, Sw = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  bw();
  var i = h.useMemo(function() {
    return vw(o);
  }, [o]);
  return h.createElement(xw, { styles: ww(i, !t, o, n ? "" : "!important") });
}, co = !1;
if (typeof window < "u")
  try {
    var Pn = Object.defineProperty({}, "passive", {
      get: function() {
        return co = !0, !0;
      }
    });
    window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
  } catch {
    co = !1;
  }
var _t = co ? { passive: !1 } : !1, Cw = function(e) {
  return e.tagName === "TEXTAREA";
}, Fs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Cw(e) && n[t] === "visible")
  );
}, kw = function(e) {
  return Fs(e, "overflowY");
}, Ew = function(e) {
  return Fs(e, "overflowX");
}, Ia = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = zs(e, r);
    if (o) {
      var i = Bs(e, r), a = i[1], l = i[2];
      if (a > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Nw = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Aw = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, zs = function(e, t) {
  return e === "v" ? kw(t) : Ew(t);
}, Bs = function(e, t) {
  return e === "v" ? Nw(t) : Aw(t);
}, Pw = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Rw = function(e, t, n, r, o) {
  var i = Pw(e, window.getComputedStyle(t).direction), a = i * r, l = n.target, s = t.contains(l), c = !1, u = a > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var f = Bs(e, l), y = f[0], g = f[1], x = f[2], v = g - x - i * y;
    (y || v) && zs(e, l) && (d += v, p += y);
    var C = l.parentNode;
    l = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !s && l !== document.body || // self content
    s && (t.contains(l) || t === l)
  );
  return (u && (Math.abs(d) < 1 || !o) || !u && (Math.abs(p) < 1 || !o)) && (c = !0), c;
}, Rn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ma = function(e) {
  return [e.deltaX, e.deltaY];
}, _a = function(e) {
  return e && "current" in e ? e.current : e;
}, Tw = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Iw = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mw = 0, Dt = [];
function _w(e) {
  var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), o = h.useState(Mw++)[0], i = h.useState(Ls)[0], a = h.useRef(e);
  h.useEffect(function() {
    a.current = e;
  }, [e]), h.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = ew([e.lockRef.current], (e.shards || []).map(_a), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = h.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !a.current.allowPinchZoom;
    var v = Rn(g), C = n.current, w = "deltaX" in g ? g.deltaX : C[0] - v[0], E = "deltaY" in g ? g.deltaY : C[1] - v[1], N, k = g.target, A = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in g && A === "h" && k.type === "range")
      return !1;
    var _ = Ia(A, k);
    if (!_)
      return !0;
    if (_ ? N = A : (N = A === "v" ? "h" : "v", _ = Ia(A, k)), !_)
      return !1;
    if (!r.current && "changedTouches" in g && (w || E) && (r.current = N), !N)
      return !0;
    var F = r.current || N;
    return Rw(F, x, g, F === "h" ? w : E, !0);
  }, []), s = h.useCallback(function(g) {
    var x = g;
    if (!(!Dt.length || Dt[Dt.length - 1] !== i)) {
      var v = "deltaY" in x ? Ma(x) : Rn(x), C = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && Tw(N.delta, v);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var w = (a.current.shards || []).map(_a).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), E = w.length > 0 ? l(x, w[0]) : !a.current.noIsolation;
        E && x.cancelable && x.preventDefault();
      }
    }
  }, []), c = h.useCallback(function(g, x, v, C) {
    var w = { name: g, delta: x, target: v, should: C, shadowParent: Dw(v) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), u = h.useCallback(function(g) {
    n.current = Rn(g), r.current = void 0;
  }, []), d = h.useCallback(function(g) {
    c(g.type, Ma(g), g.target, l(g, e.lockRef.current));
  }, []), p = h.useCallback(function(g) {
    c(g.type, Rn(g), g.target, l(g, e.lockRef.current));
  }, []);
  h.useEffect(function() {
    return Dt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", s, _t), document.addEventListener("touchmove", s, _t), document.addEventListener("touchstart", u, _t), function() {
      Dt = Dt.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", s, _t), document.removeEventListener("touchmove", s, _t), document.removeEventListener("touchstart", u, _t);
    };
  }, []);
  var f = e.removeScrollBar, y = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    y ? h.createElement(i, { styles: Iw(o) }) : null,
    f ? h.createElement(Sw, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Dw(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ow = cw(Os, _w);
var dr = h.forwardRef(function(e, t) {
  return h.createElement(ur, Ve({}, e, { ref: t, sideCar: Ow }));
});
dr.classNames = ur.classNames;
var Lw = [" ", "Enter", "ArrowUp", "ArrowDown"], Fw = [" ", "Enter"], kt = "Select", [fr, pr, zw] = Zo(kt), [Yt, IS] = Ye(kt, [
  zw,
  Kt
]), hr = Kt(), [Bw, ht] = Yt(kt), [$w, Hw] = Yt(kt), $s = (e) => {
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
    disabled: p,
    required: f,
    form: y
  } = e, g = hr(t), [x, v] = h.useState(null), [C, w] = h.useState(null), [E, N] = h.useState(!1), k = Jo(c), [A, _] = Ct({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: kt
  }), [F, z] = Ct({
    prop: a,
    defaultProp: l,
    onChange: s,
    caller: kt
  }), T = h.useRef(null), R = x ? y || !!x.closest("form") : !0, [U, H] = h.useState(/* @__PURE__ */ new Set()), B = Array.from(U).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ m(qo, { ...g, children: /* @__PURE__ */ L(
    Bw,
    {
      required: f,
      scope: t,
      trigger: x,
      onTriggerChange: v,
      valueNode: C,
      onValueNodeChange: w,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: N,
      contentId: je(),
      value: F,
      onValueChange: z,
      open: A,
      onOpenChange: _,
      dir: k,
      triggerPointerDownPosRef: T,
      disabled: p,
      children: [
        /* @__PURE__ */ m(fr.Provider, { scope: t, children: /* @__PURE__ */ m(
          $w,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: h.useCallback((I) => {
              H((G) => new Set(G).add(I));
            }, []),
            onNativeOptionRemove: h.useCallback((I) => {
              H((G) => {
                const $ = new Set(G);
                return $.delete(I), $;
              });
            }, []),
            children: n
          }
        ) }),
        R ? /* @__PURE__ */ L(
          uc,
          {
            "aria-hidden": !0,
            required: f,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: F,
            onChange: (I) => z(I.target.value),
            disabled: p,
            form: y,
            children: [
              F === void 0 ? /* @__PURE__ */ m("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
$s.displayName = kt;
var Hs = "SelectTrigger", Vs = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = hr(n), a = ht(Hs, n), l = a.disabled || r, s = le(t, a.onTriggerChange), c = pr(n), u = h.useRef("touch"), [d, p, f] = fc((g) => {
      const x = c().filter((w) => !w.disabled), v = x.find((w) => w.value === a.value), C = pc(x, g, v);
      C !== void 0 && a.onValueChange(C.value);
    }), y = (g) => {
      l || (a.onOpenChange(!0), f()), g && (a.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ m(Ko, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      ee.button,
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
        "data-placeholder": dc(a.value) ? "" : void 0,
        ...o,
        ref: s,
        onClick: V(o.onClick, (g) => {
          g.currentTarget.focus(), u.current !== "mouse" && y(g);
        }),
        onPointerDown: V(o.onPointerDown, (g) => {
          u.current = g.pointerType;
          const x = g.target;
          x.hasPointerCapture(g.pointerId) && x.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (y(g), g.preventDefault());
        }),
        onKeyDown: V(o.onKeyDown, (g) => {
          const x = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && p(g.key), !(x && g.key === " ") && Lw.includes(g.key) && (y(), g.preventDefault());
        })
      }
    ) });
  }
);
Vs.displayName = Hs;
var Us = "SelectValue", js = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...l } = e, s = ht(Us, n), { onValueNodeHasChildrenChange: c } = s, u = i !== void 0, d = le(t, s.onValueNodeChange);
    return xe(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ m(
      ee.span,
      {
        ...l,
        ref: d,
        style: { pointerEvents: "none" },
        children: dc(s.value) ? /* @__PURE__ */ m(Pe, { children: a }) : i
      }
    );
  }
);
js.displayName = Us;
var Vw = "SelectIcon", Ws = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ m(ee.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Ws.displayName = Vw;
var Uw = "SelectPortal", Gs = (e) => /* @__PURE__ */ m(or, { asChild: !0, ...e });
Gs.displayName = Uw;
var Et = "SelectContent", qs = h.forwardRef(
  (e, t) => {
    const n = ht(Et, e.__scopeSelect), [r, o] = h.useState();
    if (xe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Yn.createPortal(
        /* @__PURE__ */ m(Ks, { scope: e.__scopeSelect, children: /* @__PURE__ */ m(fr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ m(Ys, { ...e, ref: t });
  }
);
qs.displayName = Et;
var Le = 10, [Ks, mt] = Yt(Et), jw = "SelectContentImpl", Ww = /* @__PURE__ */ bt("SelectContent.RemoveScroll"), Ys = h.forwardRef(
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
      collisionBoundary: p,
      collisionPadding: f,
      sticky: y,
      hideWhenDetached: g,
      avoidCollisions: x,
      //
      ...v
    } = e, C = ht(Et, n), [w, E] = h.useState(null), [N, k] = h.useState(null), A = le(t, (j) => E(j)), [_, F] = h.useState(null), [z, T] = h.useState(
      null
    ), R = pr(n), [U, H] = h.useState(!1), B = h.useRef(!1);
    h.useEffect(() => {
      if (w) return ti(w);
    }, [w]), ei();
    const I = h.useCallback(
      (j) => {
        const [Y, ...ne] = R().map((se) => se.ref.current), [J] = ne.slice(-1), re = document.activeElement;
        for (const se of j)
          if (se === re || (se == null || se.scrollIntoView({ block: "nearest" }), se === Y && N && (N.scrollTop = 0), se === J && N && (N.scrollTop = N.scrollHeight), se == null || se.focus(), document.activeElement !== re)) return;
      },
      [R, N]
    ), G = h.useCallback(
      () => I([_, w]),
      [I, _, w]
    );
    h.useEffect(() => {
      U && G();
    }, [U, G]);
    const { onOpenChange: $, triggerPointerDownPosRef: D } = C;
    h.useEffect(() => {
      if (w) {
        let j = { x: 0, y: 0 };
        const Y = (J) => {
          var re, se;
          j = {
            x: Math.abs(Math.round(J.pageX) - (((re = D.current) == null ? void 0 : re.x) ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (((se = D.current) == null ? void 0 : se.y) ?? 0))
          };
        }, ne = (J) => {
          j.x <= 10 && j.y <= 10 ? J.preventDefault() : w.contains(J.target) || $(!1), document.removeEventListener("pointermove", Y), D.current = null;
        };
        return D.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", ne, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", ne, { capture: !0 });
        };
      }
    }, [w, $, D]), h.useEffect(() => {
      const j = () => $(!1);
      return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
        window.removeEventListener("blur", j), window.removeEventListener("resize", j);
      };
    }, [$]);
    const [b, K] = fc((j) => {
      const Y = R().filter((re) => !re.disabled), ne = Y.find((re) => re.ref.current === document.activeElement), J = pc(Y, j, ne);
      J && setTimeout(() => J.ref.current.focus());
    }), ue = h.useCallback(
      (j, Y, ne) => {
        const J = !B.current && !ne;
        (C.value !== void 0 && C.value === Y || J) && (F(j), J && (B.current = !0));
      },
      [C.value]
    ), S = h.useCallback(() => w == null ? void 0 : w.focus(), [w]), W = h.useCallback(
      (j, Y, ne) => {
        const J = !B.current && !ne;
        (C.value !== void 0 && C.value === Y || J) && T(j);
      },
      [C.value]
    ), de = r === "popper" ? uo : Xs, ie = de === uo ? {
      side: l,
      sideOffset: s,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: f,
      sticky: y,
      hideWhenDetached: g,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ m(
      Ks,
      {
        scope: n,
        content: w,
        viewport: N,
        onViewportChange: k,
        itemRefCallback: ue,
        selectedItem: _,
        onItemLeave: S,
        itemTextRefCallback: W,
        focusSelectedItem: G,
        selectedItemText: z,
        position: r,
        isPositioned: U,
        searchRef: b,
        children: /* @__PURE__ */ m(dr, { as: Ww, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          cr,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (j) => {
              j.preventDefault();
            },
            onUnmountAutoFocus: V(o, (j) => {
              var Y;
              (Y = C.trigger) == null || Y.focus({ preventScroll: !0 }), j.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              gn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (j) => j.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  de,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (j) => j.preventDefault(),
                    ...v,
                    ...ie,
                    onPlaced: () => H(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: V(v.onKeyDown, (j) => {
                      const Y = j.ctrlKey || j.altKey || j.metaKey;
                      if (j.key === "Tab" && j.preventDefault(), !Y && j.key.length === 1 && K(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                        let J = R().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(j.key) && (J = J.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                          const re = j.target, se = J.indexOf(re);
                          J = J.slice(se + 1);
                        }
                        setTimeout(() => I(J)), j.preventDefault();
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
Ys.displayName = jw;
var Gw = "SelectItemAlignedPosition", Xs = h.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = ht(Et, n), a = mt(Et, n), [l, s] = h.useState(null), [c, u] = h.useState(null), d = le(t, (A) => u(A)), p = pr(n), f = h.useRef(!1), y = h.useRef(!0), { viewport: g, selectedItem: x, selectedItemText: v, focusSelectedItem: C } = a, w = h.useCallback(() => {
    if (i.trigger && i.valueNode && l && c && g && x && v) {
      const A = i.trigger.getBoundingClientRect(), _ = c.getBoundingClientRect(), F = i.valueNode.getBoundingClientRect(), z = v.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = z.left - _.left, se = F.left - re, ye = A.left - se, Ie = A.width + ye, ot = Math.max(Ie, _.width), it = window.innerWidth - Le, at = Ca(se, [
          Le,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Le, it - ot)
        ]);
        l.style.minWidth = Ie + "px", l.style.left = at + "px";
      } else {
        const re = _.right - z.right, se = window.innerWidth - F.right - re, ye = window.innerWidth - A.right - se, Ie = A.width + ye, ot = Math.max(Ie, _.width), it = window.innerWidth - Le, at = Ca(se, [
          Le,
          Math.max(Le, it - ot)
        ]);
        l.style.minWidth = Ie + "px", l.style.right = at + "px";
      }
      const T = p(), R = window.innerHeight - Le * 2, U = g.scrollHeight, H = window.getComputedStyle(c), B = parseInt(H.borderTopWidth, 10), I = parseInt(H.paddingTop, 10), G = parseInt(H.borderBottomWidth, 10), $ = parseInt(H.paddingBottom, 10), D = B + I + U + $ + G, b = Math.min(x.offsetHeight * 5, D), K = window.getComputedStyle(g), ue = parseInt(K.paddingTop, 10), S = parseInt(K.paddingBottom, 10), W = A.top + A.height / 2 - Le, de = R - W, ie = x.offsetHeight / 2, j = x.offsetTop + ie, Y = B + I + j, ne = D - Y;
      if (Y <= W) {
        const re = T.length > 0 && x === T[T.length - 1].ref.current;
        l.style.bottom = "0px";
        const se = c.clientHeight - g.offsetTop - g.offsetHeight, ye = Math.max(
          de,
          ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? S : 0) + se + G
        ), Ie = Y + ye;
        l.style.height = Ie + "px";
      } else {
        const re = T.length > 0 && x === T[0].ref.current;
        l.style.top = "0px";
        const ye = Math.max(
          W,
          B + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? ue : 0) + ie
        ) + ne;
        l.style.height = ye + "px", g.scrollTop = Y - W + g.offsetTop;
      }
      l.style.margin = `${Le}px 0`, l.style.minHeight = b + "px", l.style.maxHeight = R + "px", r == null || r(), requestAnimationFrame(() => f.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    l,
    c,
    g,
    x,
    v,
    i.dir,
    r
  ]);
  xe(() => w(), [w]);
  const [E, N] = h.useState();
  xe(() => {
    c && N(window.getComputedStyle(c).zIndex);
  }, [c]);
  const k = h.useCallback(
    (A) => {
      A && y.current === !0 && (w(), C == null || C(), y.current = !1);
    },
    [w, C]
  );
  return /* @__PURE__ */ m(
    Kw,
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
            ee.div,
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
Xs.displayName = Gw;
var qw = "SelectPopperPosition", uo = h.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Le,
    ...i
  } = e, a = hr(n);
  return /* @__PURE__ */ m(
    Yo,
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
uo.displayName = qw;
var [Kw, ni] = Yt(Et, {}), fo = "SelectViewport", Qs = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = mt(fo, n), a = ni(fo, n), l = le(t, i.onViewportChange), s = h.useRef(0);
    return /* @__PURE__ */ L(Pe, { children: [
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
        ee.div,
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
          onScroll: V(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = a;
            if (p != null && p.current && d) {
              const f = Math.abs(s.current - u.scrollTop);
              if (f > 0) {
                const y = window.innerHeight - Le * 2, g = parseFloat(d.style.minHeight), x = parseFloat(d.style.height), v = Math.max(g, x);
                if (v < y) {
                  const C = v + f, w = Math.min(y, C), E = C - w;
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
Qs.displayName = fo;
var Zs = "SelectGroup", [Yw, Xw] = Yt(Zs), Qw = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = je();
    return /* @__PURE__ */ m(Yw, { scope: n, id: o, children: /* @__PURE__ */ m(ee.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Qw.displayName = Zs;
var Js = "SelectLabel", ec = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Xw(Js, n);
    return /* @__PURE__ */ m(ee.div, { id: o.id, ...r, ref: t });
  }
);
ec.displayName = Js;
var Wn = "SelectItem", [Zw, tc] = Yt(Wn), nc = h.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, l = ht(Wn, n), s = mt(Wn, n), c = l.value === r, [u, d] = h.useState(i ?? ""), [p, f] = h.useState(!1), y = le(
      t,
      (C) => {
        var w;
        return (w = s.itemRefCallback) == null ? void 0 : w.call(s, C, r, o);
      }
    ), g = je(), x = h.useRef("touch"), v = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m(
      Zw,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: h.useCallback((C) => {
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
              ee.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: y,
                onFocus: V(a.onFocus, () => f(!0)),
                onBlur: V(a.onBlur, () => f(!1)),
                onClick: V(a.onClick, () => {
                  x.current !== "mouse" && v();
                }),
                onPointerUp: V(a.onPointerUp, () => {
                  x.current === "mouse" && v();
                }),
                onPointerDown: V(a.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: V(a.onPointerMove, (C) => {
                  var w;
                  x.current = C.pointerType, o ? (w = s.onItemLeave) == null || w.call(s) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: V(a.onPointerLeave, (C) => {
                  var w;
                  C.currentTarget === document.activeElement && ((w = s.onItemLeave) == null || w.call(s));
                }),
                onKeyDown: V(a.onKeyDown, (C) => {
                  var E;
                  ((E = s.searchRef) == null ? void 0 : E.current) !== "" && C.key === " " || (Fw.includes(C.key) && v(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
nc.displayName = Wn;
var nn = "SelectItemText", rc = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, a = ht(nn, n), l = mt(nn, n), s = tc(nn, n), c = Hw(nn, n), [u, d] = h.useState(null), p = le(
      t,
      (v) => d(v),
      s.onItemTextChange,
      (v) => {
        var C;
        return (C = l.itemTextRefCallback) == null ? void 0 : C.call(l, v, s.value, s.disabled);
      }
    ), f = u == null ? void 0 : u.textContent, y = h.useMemo(
      () => /* @__PURE__ */ m("option", { value: s.value, disabled: s.disabled, children: f }, s.value),
      [s.disabled, s.value, f]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: x } = c;
    return xe(() => (g(y), () => x(y)), [g, x, y]), /* @__PURE__ */ L(Pe, { children: [
      /* @__PURE__ */ m(ee.span, { id: s.textId, ...i, ref: p }),
      s.isSelected && a.valueNode && !a.valueNodeHasChildren ? Yn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
rc.displayName = nn;
var oc = "SelectItemIndicator", ic = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return tc(oc, n).isSelected ? /* @__PURE__ */ m(ee.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ic.displayName = oc;
var po = "SelectScrollUpButton", ac = h.forwardRef((e, t) => {
  const n = mt(po, e.__scopeSelect), r = ni(po, e.__scopeSelect), [o, i] = h.useState(!1), a = le(t, r.onScrollButtonChange);
  return xe(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = s.scrollTop > 0;
        i(c);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    sc,
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
ac.displayName = po;
var ho = "SelectScrollDownButton", lc = h.forwardRef((e, t) => {
  const n = mt(ho, e.__scopeSelect), r = ni(ho, e.__scopeSelect), [o, i] = h.useState(!1), a = le(t, r.onScrollButtonChange);
  return xe(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = s.scrollHeight - s.clientHeight, u = Math.ceil(s.scrollTop) < c;
        i(u);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    sc,
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
lc.displayName = ho;
var sc = h.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = mt("SelectScrollButton", n), a = h.useRef(null), l = pr(n), s = h.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return h.useEffect(() => () => s(), [s]), xe(() => {
    var u;
    const c = l().find((d) => d.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ m(
    ee.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: V(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: V(o.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: V(o.onPointerLeave, () => {
        s();
      })
    }
  );
}), Jw = "SelectSeparator", cc = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ m(ee.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
cc.displayName = Jw;
var mo = "SelectArrow", eb = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hr(n), i = ht(mo, n), a = mt(mo, n);
    return i.open && a.position === "popper" ? /* @__PURE__ */ m(Xo, { ...o, ...r, ref: t }) : null;
  }
);
eb.displayName = mo;
var tb = "SelectBubbleInput", uc = h.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = h.useRef(null), i = le(r, o), a = bs(t);
    return h.useEffect(() => {
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
      ee.select,
      {
        ...n,
        style: { ...us, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
uc.displayName = tb;
function dc(e) {
  return e === "" || e === void 0;
}
function fc(e) {
  const t = qe(e), n = h.useRef(""), r = h.useRef(0), o = h.useCallback(
    (a) => {
      const l = n.current + a;
      t(l), function s(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => s(""), 1e3));
      }(l);
    },
    [t]
  ), i = h.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function pc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = nb(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const s = a.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function nb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var rb = $s, hc = Vs, ob = js, ib = Ws, ab = Gs, mc = qs, lb = Qs, gc = ec, yc = nc, sb = rc, cb = ic, vc = ac, xc = lc, wc = cc;
const Da = rb, Oa = ob, go = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ L(
  hc,
  {
    ref: r,
    className: te(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(ib, { asChild: !0, children: /* @__PURE__ */ m(Cl, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
go.displayName = hc.displayName;
const bc = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  vc,
  {
    ref: n,
    className: te("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(bg, { className: "h-4 w-4" })
  }
));
bc.displayName = vc.displayName;
const Sc = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  xc,
  {
    ref: n,
    className: te("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(Cl, { className: "h-4 w-4" })
  }
));
Sc.displayName = xc.displayName;
const yo = h.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ m(ab, { children: /* @__PURE__ */ L(
  mc,
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
      /* @__PURE__ */ m(bc, {}),
      /* @__PURE__ */ m(
        lb,
        {
          className: te(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m(Sc, {})
    ]
  }
) }));
yo.displayName = mc.displayName;
const ub = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(gc, { ref: n, className: te("py-1.5 pl-8 pr-2 text-sm font-semibold", e), ...t }));
ub.displayName = gc.displayName;
const Ln = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ L(
  yc,
  {
    ref: r,
    className: te(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(cb, { children: /* @__PURE__ */ m(Oo, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ m(sb, { children: t })
    ]
  }
));
Ln.displayName = yc.displayName;
const db = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(wc, { ref: n, className: te("-mx-1 my-1 h-px bg-muted", e), ...t }));
db.displayName = wc.displayName;
function fb({
  noteId: e,
  readOnly: t = !1,
  supabaseClient: n,
  labels: r = {},
  onError: o = console.error,
  onSuccess: i = console.log
}) {
  const [a, l] = ve([]), [s, c] = ve(!1), [u, d] = ve(!0), p = (w, E) => r[w] || E;
  wt(() => {
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
    const E = w.target.files[0], N = 10 * 1024 * 1024;
    if (E.size > N) {
      o(p("uploadFailedSize", "File size must be less than 10MB"));
      return;
    }
    c(!0);
    try {
      const { data: { user: k } } = await n.auth.getUser();
      if (!k) throw new Error("Not authenticated");
      const A = E.name.split(".").pop(), _ = `${e}/${Date.now()}-${Math.random().toString(36).substring(7)}.${A}`, { error: F } = await n.storage.from("note-attachments").upload(_, E);
      if (F) throw F;
      const { error: z } = await n.from("note_attachments").insert({
        note_id: e,
        user_id: k.id,
        file_name: E.name,
        file_size: E.size,
        file_type: E.type,
        storage_path: _
      });
      if (z) throw z;
      i(p("attachmentUploaded", "Attachment uploaded successfully")), await f();
    } catch (k) {
      o(k instanceof Error ? k.message : "Unknown error");
    } finally {
      c(!1), w.target.value = "";
    }
  }, g = async (w) => {
    try {
      const { error: E } = await n.storage.from("note-attachments").remove([w.storage_path]);
      if (E) throw E;
      const { error: N } = await n.from("note_attachments").delete().eq("id", w.id);
      if (N) throw N;
      i(p("attachmentDeleted", "Attachment deleted")), await f();
    } catch (E) {
      o(E instanceof Error ? E.message : "Unknown error");
    }
  }, x = async (w) => {
    try {
      const { data: E, error: N } = await n.storage.from("note-attachments").download(w.storage_path);
      if (N) throw N;
      const k = URL.createObjectURL(E), A = document.createElement("a");
      A.href = k, A.download = w.file_name, document.body.appendChild(A), A.click(), document.body.removeChild(A), URL.revokeObjectURL(k);
    } catch {
      o(p("downloadFailed", "Failed to download file"));
    }
  }, v = (w) => w.startsWith("image/") ? /* @__PURE__ */ m(Ig, { className: "w-4 h-4" }) : /* @__PURE__ */ m(Ag, { className: "w-4 h-4" }), C = (w) => w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : `${(w / (1024 * 1024)).toFixed(1)} MB`;
  return e ? /* @__PURE__ */ L("div", { className: "mt-6 pt-6 border-t", children: [
    /* @__PURE__ */ L("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ L("h3", { className: "text-sm font-medium text-muted-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ m(ia, { className: "w-4 h-4" }),
        p("attachments", "Attachments")
      ] }),
      !t && /* @__PURE__ */ L("div", { children: [
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
        /* @__PURE__ */ L(
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
              /* @__PURE__ */ m(ia, { className: "w-4 h-4" }),
              s ? p("saving", "Saving...") : p("addAttachment", "Add Attachment")
            ]
          }
        )
      ] })
    ] }),
    u ? /* @__PURE__ */ m("p", { className: "text-sm text-muted-foreground", children: p("loading", "Loading...") }) : a.length === 0 ? /* @__PURE__ */ m("p", { className: "text-sm text-muted-foreground italic", children: p("noAttachments", "No attachments") }) : /* @__PURE__ */ m("div", { className: "grid grid-cols-1 gap-2", children: a.map((w) => /* @__PURE__ */ L(
      "div",
      {
        className: "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors",
        children: [
          /* @__PURE__ */ L("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
            /* @__PURE__ */ m("div", { className: "text-muted-foreground shrink-0", children: v(w.file_type) }),
            /* @__PURE__ */ L("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ m("p", { className: "text-sm font-medium truncate", children: w.file_name }),
              /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground", children: C(w.file_size) })
            ] })
          ] }),
          /* @__PURE__ */ L("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => x(w),
                children: /* @__PURE__ */ m(Eg, { className: "w-4 h-4" })
              }
            ),
            !t && /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
                onClick: () => g(w),
                children: /* @__PURE__ */ m(Pl, { className: "w-4 h-4" })
              }
            )
          ] })
        ]
      },
      w.id
    )) })
  ] }) : null;
}
function MS({
  note: e,
  initialContent: t = "",
  initialTitle: n = "",
  initialIsPrivate: r = !1,
  initialExpiresAt: o = null,
  initialSharingPermission: i = "view",
  shortId: a,
  noteId: l,
  saving: s = !1,
  onSave: c,
  readOnly: u = !1,
  isVisitor: d = !1,
  user: p,
  labels: f = {},
  supabaseClient: y,
  onToast: g = (v, C) => console.log(v, C),
  dir: x = "ltr"
}) {
  const [v, C] = ve(t), [w, E] = ve(n), [N, k] = ve(r), [A, _] = ve(i), [F, z] = ve("never"), [T, R] = ve(d), [U, H] = ve(!1), B = Ed(null), I = (W, de) => f[W] || de, G = [
    { value: "never", label: I("never", "Never") },
    { value: "1h", label: I("1hour", "1 Hour") },
    { value: "1d", label: I("1day", "1 Day") },
    { value: "1w", label: I("1week", "1 Week") },
    { value: "1m", label: I("1month", "1 Month") }
  ];
  function $(W) {
    if (W === "never") return null;
    const de = /* @__PURE__ */ new Date();
    switch (W) {
      case "1h":
        return new Date(de.getTime() + 60 * 60 * 1e3).toISOString();
      case "1d":
        return new Date(de.getTime() + 24 * 60 * 60 * 1e3).toISOString();
      case "1w":
        return new Date(de.getTime() + 7 * 24 * 60 * 60 * 1e3).toISOString();
      case "1m":
        return new Date(de.getTime() + 30 * 24 * 60 * 60 * 1e3).toISOString();
      default:
        return null;
    }
  }
  wt(() => {
    C(t), E(n), k(r), _(i);
  }, [t, n, r, i]), wt(() => {
    const W = B.current;
    W && !T && (W.style.height = "auto", W.style.height = `${Math.max(W.scrollHeight, 300)}px`);
  }, [v, T]), wt(() => {
    !u && !T && B.current && B.current.focus();
  }, [u, T]);
  const D = () => {
    if (c) {
      const W = $(F);
      c(v, w, N, W, A);
    }
  }, b = async () => {
    if (!a) return;
    const W = `${window.location.origin}/n/${a}`;
    await navigator.clipboard.writeText(W), H(!0), g(
      I("linkCopied", "Link Copied"),
      W
    ), setTimeout(() => H(!1), 2e3);
  }, K = v.trim().length > 0, ue = !!p, S = za((W, de = "", ie = "") => {
    const j = B.current;
    if (!j) return;
    const Y = j.selectionStart, ne = j.selectionEnd, J = v.substring(Y, ne), re = J || ie, se = v.substring(0, Y) + W + re + de + v.substring(ne);
    C(se), setTimeout(() => {
      j.focus();
      const ye = Y + W.length + re.length + de.length;
      j.setSelectionRange(
        J ? ye : Y + W.length,
        J ? ye : Y + W.length + ie.length
      );
    }, 0);
  }, [v]);
  return /* @__PURE__ */ L("div", { className: `w-full max-w-3xl mx-auto animate-fade-in ${x === "rtl" ? "rtl" : "ltr"}`, dir: x, children: [
    /* @__PURE__ */ L("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-4", children: [
      /* @__PURE__ */ L("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
        /* @__PURE__ */ m("div", { className: "p-2 rounded-lg bg-primary/10 shrink-0", children: /* @__PURE__ */ m(to, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ m(
          "input",
          {
            type: "text",
            value: w,
            onChange: (W) => E(W.target.value),
            placeholder: I("untitled", "Untitled"),
            disabled: u,
            dir: "auto",
            className: "text-xl font-medium bg-transparent border-none outline-none placeholder:text-muted-foreground/50 focus:ring-0 min-w-0 flex-1"
          }
        )
      ] }),
      /* @__PURE__ */ L("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ m(
          _e,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => R(!T),
            className: "gap-2 text-muted-foreground hover:text-foreground",
            children: T ? /* @__PURE__ */ L(Pe, { children: [
              /* @__PURE__ */ m(to, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { className: "hidden sm:inline", children: I("seeOriginal", "See Original") })
            ] }) : /* @__PURE__ */ L(Pe, { children: [
              /* @__PURE__ */ m(oa, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { className: "hidden sm:inline", children: I("preview", "Preview") })
            ] })
          }
        ),
        a && /* @__PURE__ */ L(
          _e,
          {
            variant: "outline",
            size: "sm",
            onClick: b,
            className: "gap-2 glow-hover",
            children: [
              U ? /* @__PURE__ */ m(Oo, { className: "w-4 h-4 text-primary" }) : /* @__PURE__ */ m(kg, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { className: "hidden sm:inline", children: I("copyLink", "Copy Link") })
            ]
          }
        ),
        !u && /* @__PURE__ */ m(
          _e,
          {
            onClick: D,
            disabled: s || !K,
            className: "gap-2",
            children: s ? /* @__PURE__ */ m("span", { className: "animate-pulse", children: I("saving", "Saving...") }) : a ? I("update", "Update") : /* @__PURE__ */ L(Pe, { children: [
              /* @__PURE__ */ m(Ng, { className: "w-4 h-4" }),
              /* @__PURE__ */ m("span", { children: I("share", "Share") })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ L("div", { className: "flex items-center gap-6 mb-4 flex-wrap text-sm", children: [
      /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
        N ? /* @__PURE__ */ m(Nl, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ m(El, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ m(_n, { htmlFor: "private-toggle", className: "text-muted-foreground cursor-pointer", children: N ? I("private", "Private") : I("public", "Public") }),
        /* @__PURE__ */ m(
          Ps,
          {
            id: "private-toggle",
            checked: N,
            onCheckedChange: k,
            disabled: !ue || d
          }
        ),
        !ue && !d && /* @__PURE__ */ m("span", { className: "text-xs text-muted-foreground", children: I("signInToEnable", "Sign in to make private") })
      ] }),
      a && !N && !d && /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ m($g, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ m(_n, { className: "text-muted-foreground", children: I("sharingPermission", "Sharing Rules") }),
        /* @__PURE__ */ L(Da, { value: A, onValueChange: (W) => _(W), children: [
          /* @__PURE__ */ m(go, { className: "w-32 h-8", children: /* @__PURE__ */ m(Oa, {}) }),
          /* @__PURE__ */ L(yo, { children: [
            /* @__PURE__ */ m(Ln, { value: "view", children: I("viewOnly", "View Only") }),
            /* @__PURE__ */ m(Ln, { value: "edit", children: I("allowEditing", "Allow Edits") })
          ] })
        ] })
      ] }),
      !a && !d && /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ m(kl, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ m(_n, { className: "text-muted-foreground", children: I("expires", "Expires") }),
        /* @__PURE__ */ L(Da, { value: F, onValueChange: z, children: [
          /* @__PURE__ */ m(go, { className: "w-28 h-8", children: /* @__PURE__ */ m(Oa, {}) }),
          /* @__PURE__ */ m(yo, { children: G.map((W) => /* @__PURE__ */ m(Ln, { value: W.value, children: W.label }, W.value)) })
        ] })
      ] }),
      u && /* @__PURE__ */ L("div", { className: "flex items-center gap-2 px-3 py-1 bg-muted rounded-full", children: [
        /* @__PURE__ */ m(oa, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ m("span", { className: "text-xs font-medium text-muted-foreground", children: I("viewOnly", "View Only") })
      ] }),
      d && !u && T && /* @__PURE__ */ L(
        _e,
        {
          size: "sm",
          variant: "outline",
          onClick: () => R(!1),
          className: "h-8 gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary",
          children: [
            /* @__PURE__ */ m(Al, { className: "w-3 h-3" }),
            I("editNote", "Edit Note")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "paper glow-hover min-h-[300px] overflow-hidden", children: T ? /* @__PURE__ */ m("div", { className: "p-6 sm:p-8", children: /* @__PURE__ */ m(mg, { content: v || I("previewPlaceholder", "Nothing to preview") }) }) : /* @__PURE__ */ L(Pe, { children: [
      !u && /* @__PURE__ */ m(Ox, { onInsert: S, labels: f }),
      /* @__PURE__ */ m(
        "textarea",
        {
          ref: B,
          value: v,
          onChange: (W) => C(W.target.value),
          placeholder: I("placeholder", "Start typing..."),
          disabled: u,
          dir: "auto",
          className: "w-full min-h-[300px] bg-transparent border-none outline-none resize-none font-serif text-lg leading-relaxed placeholder:text-muted-foreground/40 focus:ring-0 p-6 sm:p-8"
        }
      )
    ] }) }),
    !T && !u && /* @__PURE__ */ m("p", { className: "mt-2 text-xs text-muted-foreground text-center", children: I("markdownHint", "Supports Markdown styling.") }),
    y && /* @__PURE__ */ m(
      fb,
      {
        noteId: l,
        readOnly: u,
        supabaseClient: y,
        labels: f,
        onSuccess: (W) => g(W, ""),
        onError: (W) => g(I("error", "Error"), W, "destructive")
      }
    ),
    a && /* @__PURE__ */ m("div", { className: "mt-4 text-center", children: /* @__PURE__ */ L("p", { className: "text-sm text-muted-foreground", children: [
      I("shareNote", "Share to via"),
      /* @__PURE__ */ L("code", { className: "ml-2 px-2 py-1 bg-secondary rounded text-foreground font-mono text-xs", children: [
        "/n/",
        a
      ] })
    ] }) })
  ] });
}
function pb(e, t, n = 10) {
  const [r, o] = ve([]), [i, a] = ve(!0), [l, s] = ve(""), c = za(async () => {
    if (!t) {
      o([]), a(!1);
      return;
    }
    try {
      const { data: p, error: f } = await e.from("notes").select("*").eq("user_id", t.id).order("updated_at", { ascending: !1 }).limit(n);
      if (f) throw f;
      o(p || []);
    } catch (p) {
      console.error("Error fetching recent notes:", p);
    } finally {
      a(!1);
    }
  }, [t, n, e]), u = async (p) => {
    try {
      const { error: f } = await e.from("notes").delete().eq("id", p);
      if (f) throw f;
      return o((y) => y.filter((g) => g.id !== p)), !0;
    } catch (f) {
      return console.error("Error deleting note:", f), !1;
    }
  }, d = r.filter((p) => {
    var x;
    if (!l.trim()) return !0;
    const f = l.toLowerCase(), y = ((x = p.title) == null ? void 0 : x.toLowerCase().includes(f)) || !1, g = p.content.toLowerCase().includes(f) || !1;
    return y || g;
  });
  return wt(() => {
    c();
  }, [c]), wt(() => {
    if (!t) return;
    const p = e.channel("notes-realtime").on(
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
      e.removeChannel(p);
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
const Cc = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
Cc.displayName = "Card";
const kc = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("flex flex-col space-y-1.5 p-6", e), ...t })
);
kc.displayName = "CardHeader";
const Ec = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("h3", { ref: n, className: te("text-2xl font-semibold leading-none tracking-tight", e), ...t })
);
Ec.displayName = "CardTitle";
const hb = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("p", { ref: n, className: te("text-sm text-muted-foreground", e), ...t })
);
hb.displayName = "CardDescription";
const Nc = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("p-6 pt-0", e), ...t })
);
Nc.displayName = "CardContent";
const mb = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: te("flex items-center p-6 pt-0", e), ...t })
);
mb.displayName = "CardFooter";
function gb({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: te("animate-pulse rounded-md bg-muted", e), ...t });
}
const Ac = h.forwardRef(
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
Ac.displayName = "Input";
function yb({ value: e, onChange: t, labels: n = {}, dir: r = "ltr" }) {
  const o = n.searchPlaceholder || "Search notes...";
  return /* @__PURE__ */ L("div", { className: "relative", children: [
    /* @__PURE__ */ m(Bg, { className: `absolute ${r === "rtl" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground` }),
    /* @__PURE__ */ m(
      Ac,
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
        children: /* @__PURE__ */ m(Pl, { className: "h-4 w-4" })
      }
    )
  ] });
}
var mr = "Dialog", [Pc, Rc] = Ye(mr), [vb, Be] = Pc(mr), Tc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, l = h.useRef(null), s = h.useRef(null), [c, u] = Ct({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: mr
  });
  return /* @__PURE__ */ m(
    vb,
    {
      scope: t,
      triggerRef: l,
      contentRef: s,
      contentId: je(),
      titleId: je(),
      descriptionId: je(),
      open: c,
      onOpenChange: u,
      onOpenToggle: h.useCallback(() => u((d) => !d), [u]),
      modal: a,
      children: n
    }
  );
};
Tc.displayName = mr;
var Ic = "DialogTrigger", Mc = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(Ic, n), i = le(t, o.triggerRef);
    return /* @__PURE__ */ m(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ii(o.open),
        ...r,
        ref: i,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Mc.displayName = Ic;
var ri = "DialogPortal", [xb, _c] = Pc(ri, {
  forceMount: void 0
}), Dc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Be(ri, t);
  return /* @__PURE__ */ m(xb, { scope: t, forceMount: n, children: h.Children.map(r, (a) => /* @__PURE__ */ m(nt, { present: n || i.open, children: /* @__PURE__ */ m(or, { asChild: !0, container: o, children: a }) })) });
};
Dc.displayName = ri;
var Gn = "DialogOverlay", Oc = h.forwardRef(
  (e, t) => {
    const n = _c(Gn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Be(Gn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ m(nt, { present: r || i.open, children: /* @__PURE__ */ m(bb, { ...o, ref: t }) }) : null;
  }
);
Oc.displayName = Gn;
var wb = /* @__PURE__ */ bt("DialogOverlay.RemoveScroll"), bb = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(Gn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(dr, { as: wb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m(
        ee.div,
        {
          "data-state": ii(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Nt = "DialogContent", Lc = h.forwardRef(
  (e, t) => {
    const n = _c(Nt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Be(Nt, e.__scopeDialog);
    return /* @__PURE__ */ m(nt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ m(Sb, { ...o, ref: t }) : /* @__PURE__ */ m(Cb, { ...o, ref: t }) });
  }
);
Lc.displayName = Nt;
var Sb = h.forwardRef(
  (e, t) => {
    const n = Be(Nt, e.__scopeDialog), r = h.useRef(null), o = le(t, n.contentRef, r);
    return h.useEffect(() => {
      const i = r.current;
      if (i) return ti(i);
    }, []), /* @__PURE__ */ m(
      Fc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: V(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: V(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Cb = h.forwardRef(
  (e, t) => {
    const n = Be(Nt, e.__scopeDialog), r = h.useRef(!1), o = h.useRef(!1);
    return /* @__PURE__ */ m(
      Fc,
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
), Fc = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, l = Be(Nt, n), s = h.useRef(null), c = le(t, s);
    return ei(), /* @__PURE__ */ L(Pe, { children: [
      /* @__PURE__ */ m(
        cr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ m(
            gn,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": ii(l.open),
              ...a,
              ref: c,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ L(Pe, { children: [
        /* @__PURE__ */ m(Eb, { titleId: l.titleId }),
        /* @__PURE__ */ m(Ab, { contentRef: s, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), oi = "DialogTitle", zc = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(oi, n);
    return /* @__PURE__ */ m(ee.h2, { id: o.titleId, ...r, ref: t });
  }
);
zc.displayName = oi;
var Bc = "DialogDescription", $c = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(Bc, n);
    return /* @__PURE__ */ m(ee.p, { id: o.descriptionId, ...r, ref: t });
  }
);
$c.displayName = Bc;
var Hc = "DialogClose", Vc = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(Hc, n);
    return /* @__PURE__ */ m(
      ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: V(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Vc.displayName = Hc;
function ii(e) {
  return e ? "open" : "closed";
}
var Uc = "DialogTitleWarning", [kb, jc] = Ny(Uc, {
  contentName: Nt,
  titleName: oi,
  docsSlug: "dialog"
}), Eb = ({ titleId: e }) => {
  const t = jc(Uc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return h.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Nb = "DialogDescriptionWarning", Ab = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${jc(Nb).contentName}}.`;
  return h.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Pb = Tc, Rb = Mc, Tb = Dc, Ib = Oc, Mb = Lc, _b = zc, Db = $c, Wc = Vc, Gc = "AlertDialog", [Ob, _S] = Ye(Gc, [
  Rc
]), rt = Rc(), qc = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = rt(t);
  return /* @__PURE__ */ m(Pb, { ...r, ...n, modal: !0 });
};
qc.displayName = Gc;
var Lb = "AlertDialogTrigger", Kc = h.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ m(Rb, { ...o, ...r, ref: t });
  }
);
Kc.displayName = Lb;
var Fb = "AlertDialogPortal", Yc = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = rt(t);
  return /* @__PURE__ */ m(Tb, { ...r, ...n });
};
Yc.displayName = Fb;
var zb = "AlertDialogOverlay", Xc = h.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ m(Ib, { ...o, ...r, ref: t });
  }
);
Xc.displayName = zb;
var $t = "AlertDialogContent", [Bb, $b] = Ob($t), Hb = /* @__PURE__ */ Tl("AlertDialogContent"), Qc = h.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, i = rt(n), a = h.useRef(null), l = le(t, a), s = h.useRef(null);
    return /* @__PURE__ */ m(
      kb,
      {
        contentName: $t,
        titleName: Zc,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ m(Bb, { scope: n, cancelRef: s, children: /* @__PURE__ */ L(
          Mb,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: l,
            onOpenAutoFocus: V(o.onOpenAutoFocus, (c) => {
              var u;
              c.preventDefault(), (u = s.current) == null || u.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ m(Hb, { children: r }),
              /* @__PURE__ */ m(Ub, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Qc.displayName = $t;
var Zc = "AlertDialogTitle", Jc = h.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ m(_b, { ...o, ...r, ref: t });
  }
);
Jc.displayName = Zc;
var eu = "AlertDialogDescription", tu = h.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = rt(n);
  return /* @__PURE__ */ m(Db, { ...o, ...r, ref: t });
});
tu.displayName = eu;
var Vb = "AlertDialogAction", nu = h.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ m(Wc, { ...o, ...r, ref: t });
  }
);
nu.displayName = Vb;
var ru = "AlertDialogCancel", ou = h.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = $b(ru, n), i = rt(n), a = le(t, o);
    return /* @__PURE__ */ m(Wc, { ...i, ...r, ref: a });
  }
);
ou.displayName = ru;
var Ub = ({ contentRef: e }) => {
  const t = `\`${$t}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${$t}\` by passing a \`${eu}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${$t}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return h.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, jb = qc, Wb = Kc, Gb = Yc, iu = Xc, au = Qc, lu = nu, su = ou, cu = Jc, uu = tu;
const qb = jb, Kb = Wb, Yb = Gb, du = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  iu,
  {
    className: te(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
du.displayName = iu.displayName;
const fu = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L(Yb, { children: [
  /* @__PURE__ */ m(du, {}),
  /* @__PURE__ */ m(
    au,
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
fu.displayName = au.displayName;
const pu = ({ className: e, ...t }) => /* @__PURE__ */ m("div", { className: te("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
pu.displayName = "AlertDialogHeader";
const hu = ({ className: e, ...t }) => /* @__PURE__ */ m("div", { className: te("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
hu.displayName = "AlertDialogFooter";
const mu = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(cu, { ref: n, className: te("text-lg font-semibold", e), ...t }));
mu.displayName = cu.displayName;
const gu = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(uu, { ref: n, className: te("text-sm text-muted-foreground", e), ...t }));
gu.displayName = uu.displayName;
const yu = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(lu, { ref: n, className: te(Fo(), e), ...t }));
yu.displayName = lu.displayName;
const vu = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  su,
  {
    ref: n,
    className: te(Fo({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t
  }
));
vu.displayName = su.displayName;
function DS({
  supabaseClient: e,
  user: t,
  labels: n = {},
  onNavigate: r,
  dir: o = "ltr",
  onToast: i = (a, l) => console.log(a, l)
}) {
  const { notes: a, loading: l, deleteNote: s, searchQuery: c, setSearchQuery: u } = pb(e, t, 10), d = (y, g) => n[y] || g, p = async (y, g) => {
    await s(y) ? i(
      d("noteDeleted", "Note Deleted"),
      `"${g || d("untitled", "Untitled")}" ${d("noteDeletedMessage", "was successfully deleted.")}`
    ) : i(
      d("error", "Error"),
      d("deleteFailed", "Failed to delete note"),
      "destructive"
    );
  }, f = (y) => {
    const g = new Date(y), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), C = Math.floor(v / (1e3 * 60 * 60 * 24));
    return C === 0 ? d("today", "today") : C === 1 ? d("yesterday", "yesterday") : `${C} ${d("daysAgo", "days ago")}`;
  };
  return l ? /* @__PURE__ */ m("div", { className: "space-y-3", children: [...Array(3)].map((y, g) => /* @__PURE__ */ m(gb, { className: "h-20 w-full" }, g)) }) : /* @__PURE__ */ L(Cc, { className: "shadow-none relative isolate z-0 bg-transparent sm:bg-card/50", children: [
    /* @__PURE__ */ L(kc, { className: "pb-3", children: [
      /* @__PURE__ */ L(Ec, { className: "text-lg font-medium flex items-center gap-2", children: [
        /* @__PURE__ */ m(kl, { className: "w-4 h-4 text-muted-foreground" }),
        d("title", "Recent Notes")
      ] }),
      /* @__PURE__ */ m("div", { className: "pt-2", children: /* @__PURE__ */ m(
        yb,
        {
          value: c,
          onChange: u,
          labels: { searchPlaceholder: d("searchPlaceholder", "Search notes...") },
          dir: o
        }
      ) })
    ] }),
    /* @__PURE__ */ m(Nc, { className: "space-y-2", children: a.length === 0 ? /* @__PURE__ */ m("p", { className: "text-sm text-muted-foreground text-center py-6", children: c ? d("noResults", "No results found") : d("noNotes", "No notes yet") }) : a.map((y) => /* @__PURE__ */ L(
      "div",
      {
        className: "group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors",
        children: [
          /* @__PURE__ */ L(
            "div",
            {
              onClick: () => r && r(y.short_id),
              className: `flex-1 min-w-0 flex items-center gap-3 ${r ? "cursor-pointer" : ""}`,
              role: r ? "button" : void 0,
              tabIndex: r ? 0 : void 0,
              children: [
                /* @__PURE__ */ m("div", { className: "p-1.5 rounded bg-primary/10", children: /* @__PURE__ */ m(to, { className: "w-4 h-4 text-primary" }) }),
                /* @__PURE__ */ L("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ m("h4", { className: "font-medium truncate", children: y.title || d("untitled", "Untitled") }),
                  /* @__PURE__ */ L("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                    y.is_private ? /* @__PURE__ */ L("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ m(Nl, { className: "w-3 h-3" }),
                      d("private", "Private")
                    ] }) : /* @__PURE__ */ L("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ m(El, { className: "w-3 h-3" }),
                      d("public", "Public")
                    ] }),
                    /* @__PURE__ */ m("span", { children: "•" }),
                    /* @__PURE__ */ m("span", { children: f(y.updated_at) }),
                    y.expires_at && /* @__PURE__ */ L(Pe, { children: [
                      /* @__PURE__ */ m("span", { children: "•" }),
                      /* @__PURE__ */ L("span", { className: "text-amber-600 dark:text-amber-400", children: [
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
          /* @__PURE__ */ L(qb, { children: [
            /* @__PURE__ */ m(Kb, { asChild: !0, children: /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "icon",
                className: "opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive shrink-0",
                children: /* @__PURE__ */ m(Vg, { className: "w-4 h-4" })
              }
            ) }),
            /* @__PURE__ */ L(fu, { children: [
              /* @__PURE__ */ L(pu, { children: [
                /* @__PURE__ */ m(mu, { children: d("deleteConfirm", "Delete Note") }),
                /* @__PURE__ */ L(gu, { children: [
                  d("deleteMessage", "Are you sure you want to delete"),
                  ' "',
                  y.title || d("untitled", "Untitled"),
                  '"?'
                ] })
              ] }),
              /* @__PURE__ */ L(hu, { children: [
                /* @__PURE__ */ m(vu, { children: d("cancel", "Cancel") }),
                /* @__PURE__ */ m(
                  yu,
                  {
                    onClick: () => p(y.id, y.title || ""),
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
var Hr = "rovingFocusGroup.onEntryFocus", Xb = { bubbles: !1, cancelable: !0 }, vn = "RovingFocusGroup", [vo, xu, Qb] = Zo(vn), [Zb, wu] = Ye(
  vn,
  [Qb]
), [Jb, e1] = Zb(vn), bu = h.forwardRef(
  (e, t) => /* @__PURE__ */ m(vo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(vo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(t1, { ...e, ref: t }) }) })
);
bu.displayName = vn;
var t1 = h.forwardRef((e, t) => {
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
  } = e, p = h.useRef(null), f = le(t, p), y = Jo(i), [g, x] = Ct({
    prop: a,
    defaultProp: l ?? null,
    onChange: s,
    caller: vn
  }), [v, C] = h.useState(!1), w = qe(c), E = xu(n), N = h.useRef(!1), [k, A] = h.useState(0);
  return h.useEffect(() => {
    const _ = p.current;
    if (_)
      return _.addEventListener(Hr, w), () => _.removeEventListener(Hr, w);
  }, [w]), /* @__PURE__ */ m(
    Jb,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: o,
      currentTabStopId: g,
      onItemFocus: h.useCallback(
        (_) => x(_),
        [x]
      ),
      onItemShiftTab: h.useCallback(() => C(!0), []),
      onFocusableItemAdd: h.useCallback(
        () => A((_) => _ + 1),
        []
      ),
      onFocusableItemRemove: h.useCallback(
        () => A((_) => _ - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        ee.div,
        {
          tabIndex: v || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: f,
          style: { outline: "none", ...e.style },
          onMouseDown: V(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: V(e.onFocus, (_) => {
            const F = !N.current;
            if (_.target === _.currentTarget && F && !v) {
              const z = new CustomEvent(Hr, Xb);
              if (_.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const T = E().filter((I) => I.focusable), R = T.find((I) => I.active), U = T.find((I) => I.id === g), B = [R, U, ...T].filter(
                  Boolean
                ).map((I) => I.ref.current);
                ku(B, u);
              }
            }
            N.current = !1;
          }),
          onBlur: V(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Su = "RovingFocusGroupItem", Cu = h.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...l
    } = e, s = je(), c = i || s, u = e1(Su, n), d = u.currentTabStopId === c, p = xu(n), { onFocusableItemAdd: f, onFocusableItemRemove: y, currentTabStopId: g } = u;
    return h.useEffect(() => {
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
          ee.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...l,
            ref: t,
            onMouseDown: V(e.onMouseDown, (x) => {
              r ? u.onItemFocus(c) : x.preventDefault();
            }),
            onFocus: V(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: V(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const v = o1(x, u.orientation, u.dir);
              if (v !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let w = p().filter((E) => E.focusable).map((E) => E.ref.current);
                if (v === "last") w.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && w.reverse();
                  const E = w.indexOf(x.currentTarget);
                  w = u.loop ? i1(w, E + 1) : w.slice(E + 1);
                }
                setTimeout(() => ku(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: g != null }) : a
          }
        )
      }
    );
  }
);
Cu.displayName = Su;
var n1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function r1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function o1(e, t, n) {
  const r = r1(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return n1[r];
}
function ku(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function i1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var a1 = bu, l1 = Cu, xo = ["Enter", " "], s1 = ["ArrowDown", "PageUp", "Home"], Eu = ["ArrowUp", "PageDown", "End"], c1 = [...s1, ...Eu], u1 = {
  ltr: [...xo, "ArrowRight"],
  rtl: [...xo, "ArrowLeft"]
}, d1 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, xn = "Menu", [fn, f1, p1] = Zo(xn), [Pt, Nu] = Ye(xn, [
  p1,
  Kt,
  wu
]), gr = Kt(), Au = wu(), [h1, Rt] = Pt(xn), [m1, wn] = Pt(xn), Pu = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, l = gr(t), [s, c] = h.useState(null), u = h.useRef(!1), d = qe(i), p = Jo(o);
  return h.useEffect(() => {
    const f = () => {
      u.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => u.current = !1;
    return document.addEventListener("keydown", f, { capture: !0 }), () => {
      document.removeEventListener("keydown", f, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ m(qo, { ...l, children: /* @__PURE__ */ m(
    h1,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: s,
      onContentChange: c,
      children: /* @__PURE__ */ m(
        m1,
        {
          scope: t,
          onClose: h.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Pu.displayName = xn;
var g1 = "MenuAnchor", ai = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = gr(n);
    return /* @__PURE__ */ m(Ko, { ...o, ...r, ref: t });
  }
);
ai.displayName = g1;
var li = "MenuPortal", [y1, Ru] = Pt(li, {
  forceMount: void 0
}), Tu = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Rt(li, t);
  return /* @__PURE__ */ m(y1, { scope: t, forceMount: n, children: /* @__PURE__ */ m(nt, { present: n || i.open, children: /* @__PURE__ */ m(or, { asChild: !0, container: o, children: r }) }) });
};
Tu.displayName = li;
var De = "MenuContent", [v1, si] = Pt(De), Iu = h.forwardRef(
  (e, t) => {
    const n = Ru(De, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Rt(De, e.__scopeMenu), a = wn(De, e.__scopeMenu);
    return /* @__PURE__ */ m(fn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(nt, { present: r || i.open, children: /* @__PURE__ */ m(fn.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ m(x1, { ...o, ref: t }) : /* @__PURE__ */ m(w1, { ...o, ref: t }) }) }) });
  }
), x1 = h.forwardRef(
  (e, t) => {
    const n = Rt(De, e.__scopeMenu), r = h.useRef(null), o = le(t, r);
    return h.useEffect(() => {
      const i = r.current;
      if (i) return ti(i);
    }, []), /* @__PURE__ */ m(
      ci,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: V(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), w1 = h.forwardRef((e, t) => {
  const n = Rt(De, e.__scopeMenu);
  return /* @__PURE__ */ m(
    ci,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), b1 = /* @__PURE__ */ bt("MenuContent.ScrollLock"), ci = h.forwardRef(
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
      onInteractOutside: p,
      onDismiss: f,
      disableOutsideScroll: y,
      ...g
    } = e, x = Rt(De, n), v = wn(De, n), C = gr(n), w = Au(n), E = f1(n), [N, k] = h.useState(null), A = h.useRef(null), _ = le(t, A, x.onContentChange), F = h.useRef(0), z = h.useRef(""), T = h.useRef(0), R = h.useRef(null), U = h.useRef("right"), H = h.useRef(0), B = y ? dr : h.Fragment, I = y ? { as: b1, allowPinchZoom: !0 } : void 0, G = (D) => {
      var j, Y;
      const b = z.current + D, K = E().filter((ne) => !ne.disabled), ue = document.activeElement, S = (j = K.find((ne) => ne.ref.current === ue)) == null ? void 0 : j.textValue, W = K.map((ne) => ne.textValue), de = _1(W, b, S), ie = (Y = K.find((ne) => ne.textValue === de)) == null ? void 0 : Y.ref.current;
      (function ne(J) {
        z.current = J, window.clearTimeout(F.current), J !== "" && (F.current = window.setTimeout(() => ne(""), 1e3));
      })(b), ie && setTimeout(() => ie.focus());
    };
    h.useEffect(() => () => window.clearTimeout(F.current), []), ei();
    const $ = h.useCallback((D) => {
      var K, ue;
      return U.current === ((K = R.current) == null ? void 0 : K.side) && O1(D, (ue = R.current) == null ? void 0 : ue.area);
    }, []);
    return /* @__PURE__ */ m(
      v1,
      {
        scope: n,
        searchRef: z,
        onItemEnter: h.useCallback(
          (D) => {
            $(D) && D.preventDefault();
          },
          [$]
        ),
        onItemLeave: h.useCallback(
          (D) => {
            var b;
            $(D) || ((b = A.current) == null || b.focus(), k(null));
          },
          [$]
        ),
        onTriggerLeave: h.useCallback(
          (D) => {
            $(D) && D.preventDefault();
          },
          [$]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: h.useCallback((D) => {
          R.current = D;
        }, []),
        children: /* @__PURE__ */ m(B, { ...I, children: /* @__PURE__ */ m(
          cr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: V(i, (D) => {
              var b;
              D.preventDefault(), (b = A.current) == null || b.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ m(
              gn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: c,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: f,
                children: /* @__PURE__ */ m(
                  a1,
                  {
                    asChild: !0,
                    ...w,
                    dir: v.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: V(s, (D) => {
                      v.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Yo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": qu(x.open),
                        "data-radix-menu-content": "",
                        dir: v.dir,
                        ...C,
                        ...g,
                        ref: _,
                        style: { outline: "none", ...g.style },
                        onKeyDown: V(g.onKeyDown, (D) => {
                          const K = D.target.closest("[data-radix-menu-content]") === D.currentTarget, ue = D.ctrlKey || D.altKey || D.metaKey, S = D.key.length === 1;
                          K && (D.key === "Tab" && D.preventDefault(), !ue && S && G(D.key));
                          const W = A.current;
                          if (D.target !== W || !c1.includes(D.key)) return;
                          D.preventDefault();
                          const ie = E().filter((j) => !j.disabled).map((j) => j.ref.current);
                          Eu.includes(D.key) && ie.reverse(), I1(ie);
                        }),
                        onBlur: V(e.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(F.current), z.current = "");
                        }),
                        onPointerMove: V(
                          e.onPointerMove,
                          pn((D) => {
                            const b = D.target, K = H.current !== D.clientX;
                            if (D.currentTarget.contains(b) && K) {
                              const ue = D.clientX > H.current ? "right" : "left";
                              U.current = ue, H.current = D.clientX;
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
Iu.displayName = De;
var S1 = "MenuGroup", ui = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(ee.div, { role: "group", ...r, ref: t });
  }
);
ui.displayName = S1;
var C1 = "MenuLabel", Mu = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(ee.div, { ...r, ref: t });
  }
);
Mu.displayName = C1;
var qn = "MenuItem", La = "menu.itemSelect", yr = h.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = h.useRef(null), a = wn(qn, e.__scopeMenu), l = si(qn, e.__scopeMenu), s = le(t, i), c = h.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(La, { bubbles: !0, cancelable: !0 });
        d.addEventListener(La, (f) => r == null ? void 0 : r(f), { once: !0 }), Bl(d, p), p.defaultPrevented ? c.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ m(
      _u,
      {
        ...o,
        ref: s,
        disabled: n,
        onClick: V(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), c.current = !0;
        },
        onPointerUp: V(e.onPointerUp, (d) => {
          var p;
          c.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: V(e.onKeyDown, (d) => {
          const p = l.searchRef.current !== "";
          n || p && d.key === " " || xo.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
yr.displayName = qn;
var _u = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = si(qn, n), l = Au(n), s = h.useRef(null), c = le(t, s), [u, d] = h.useState(!1), [p, f] = h.useState("");
    return h.useEffect(() => {
      const y = s.current;
      y && f((y.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ m(
      fn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ m(l1, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ m(
          ee.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: V(
              e.onPointerMove,
              pn((y) => {
                r ? a.onItemLeave(y) : (a.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: V(
              e.onPointerLeave,
              pn((y) => a.onItemLeave(y))
            ),
            onFocus: V(e.onFocus, () => d(!0)),
            onBlur: V(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), k1 = "MenuCheckboxItem", Du = h.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ m(Bu, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ m(
      yr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Kn(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": fi(n),
        onSelect: V(
          o.onSelect,
          () => r == null ? void 0 : r(Kn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Du.displayName = k1;
var Ou = "MenuRadioGroup", [E1, N1] = Pt(
  Ou,
  { value: void 0, onValueChange: () => {
  } }
), Lu = h.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = qe(r);
    return /* @__PURE__ */ m(E1, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ m(ui, { ...o, ref: t }) });
  }
);
Lu.displayName = Ou;
var Fu = "MenuRadioItem", zu = h.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = N1(Fu, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ m(Bu, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ m(
      yr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": fi(i),
        onSelect: V(
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
zu.displayName = Fu;
var di = "MenuItemIndicator", [Bu, A1] = Pt(
  di,
  { checked: !1 }
), $u = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = A1(di, n);
    return /* @__PURE__ */ m(
      nt,
      {
        present: r || Kn(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ m(
          ee.span,
          {
            ...o,
            ref: t,
            "data-state": fi(i.checked)
          }
        )
      }
    );
  }
);
$u.displayName = di;
var P1 = "MenuSeparator", Hu = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(
      ee.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Hu.displayName = P1;
var R1 = "MenuArrow", Vu = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = gr(n);
    return /* @__PURE__ */ m(Xo, { ...o, ...r, ref: t });
  }
);
Vu.displayName = R1;
var T1 = "MenuSub", [OS, Uu] = Pt(T1), rn = "MenuSubTrigger", ju = h.forwardRef(
  (e, t) => {
    const n = Rt(rn, e.__scopeMenu), r = wn(rn, e.__scopeMenu), o = Uu(rn, e.__scopeMenu), i = si(rn, e.__scopeMenu), a = h.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: s } = i, c = { __scopeMenu: e.__scopeMenu }, u = h.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return h.useEffect(() => u, [u]), h.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), s(null);
      };
    }, [l, s]), /* @__PURE__ */ m(ai, { asChild: !0, ...c, children: /* @__PURE__ */ m(
      _u,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": qu(n.open),
        ...e,
        ref: er(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: V(
          e.onPointerMove,
          pn((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: V(
          e.onPointerLeave,
          pn((d) => {
            var f, y;
            u();
            const p = (f = n.content) == null ? void 0 : f.getBoundingClientRect();
            if (p) {
              const g = (y = n.content) == null ? void 0 : y.dataset.side, x = g === "right", v = x ? -5 : 5, C = p[x ? "left" : "right"], w = p[x ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + v, y: d.clientY },
                  { x: C, y: p.top },
                  { x: w, y: p.top },
                  { x: w, y: p.bottom },
                  { x: C, y: p.bottom }
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
        onKeyDown: V(e.onKeyDown, (d) => {
          var f;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || u1[r.dir].includes(d.key) && (n.onOpenChange(!0), (f = n.content) == null || f.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
ju.displayName = rn;
var Wu = "MenuSubContent", Gu = h.forwardRef(
  (e, t) => {
    const n = Ru(De, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Rt(De, e.__scopeMenu), a = wn(De, e.__scopeMenu), l = Uu(Wu, e.__scopeMenu), s = h.useRef(null), c = le(t, s);
    return /* @__PURE__ */ m(fn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(nt, { present: r || i.open, children: /* @__PURE__ */ m(fn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(
      ci,
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
        onFocusOutside: V(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: V(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: V(e.onKeyDown, (u) => {
          var f;
          const d = u.currentTarget.contains(u.target), p = d1[a.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (f = l.trigger) == null || f.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Gu.displayName = Wu;
function qu(e) {
  return e ? "open" : "closed";
}
function Kn(e) {
  return e === "indeterminate";
}
function fi(e) {
  return Kn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function I1(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function M1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function _1(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = M1(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const s = a.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function D1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i], s = t[a], c = l.x, u = l.y, d = s.x, p = s.y;
    u > r != p > r && n < (d - c) * (r - u) / (p - u) + c && (o = !o);
  }
  return o;
}
function O1(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return D1(n, t);
}
function pn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var L1 = Pu, F1 = ai, z1 = Tu, B1 = Iu, $1 = ui, H1 = Mu, V1 = yr, U1 = Du, j1 = Lu, W1 = zu, G1 = $u, q1 = Hu, K1 = Vu, Y1 = ju, X1 = Gu, vr = "DropdownMenu", [Q1, LS] = Ye(
  vr,
  [Nu]
), be = Nu(), [Z1, Ku] = Q1(vr), Yu = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, s = be(t), c = h.useRef(null), [u, d] = Ct({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: vr
  });
  return /* @__PURE__ */ m(
    Z1,
    {
      scope: t,
      triggerId: je(),
      triggerRef: c,
      contentId: je(),
      open: u,
      onOpenChange: d,
      onOpenToggle: h.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ m(L1, { ...s, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
Yu.displayName = vr;
var Xu = "DropdownMenuTrigger", Qu = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Ku(Xu, n), a = be(n);
    return /* @__PURE__ */ m(F1, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      ee.button,
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
        ref: er(t, i.triggerRef),
        onPointerDown: V(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: V(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Qu.displayName = Xu;
var J1 = "DropdownMenuPortal", Zu = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = be(t);
  return /* @__PURE__ */ m(z1, { ...r, ...n });
};
Zu.displayName = J1;
var Ju = "DropdownMenuContent", ed = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ku(Ju, n), i = be(n), a = h.useRef(!1);
    return /* @__PURE__ */ m(
      B1,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (l) => {
          var s;
          a.current || (s = o.triggerRef.current) == null || s.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: V(e.onInteractOutside, (l) => {
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
ed.displayName = Ju;
var eS = "DropdownMenuGroup", tS = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m($1, { ...o, ...r, ref: t });
  }
);
tS.displayName = eS;
var nS = "DropdownMenuLabel", td = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(H1, { ...o, ...r, ref: t });
  }
);
td.displayName = nS;
var rS = "DropdownMenuItem", nd = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(V1, { ...o, ...r, ref: t });
  }
);
nd.displayName = rS;
var oS = "DropdownMenuCheckboxItem", rd = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(U1, { ...o, ...r, ref: t });
});
rd.displayName = oS;
var iS = "DropdownMenuRadioGroup", aS = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(j1, { ...o, ...r, ref: t });
});
aS.displayName = iS;
var lS = "DropdownMenuRadioItem", od = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(W1, { ...o, ...r, ref: t });
});
od.displayName = lS;
var sS = "DropdownMenuItemIndicator", id = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(G1, { ...o, ...r, ref: t });
});
id.displayName = sS;
var cS = "DropdownMenuSeparator", ad = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(q1, { ...o, ...r, ref: t });
});
ad.displayName = cS;
var uS = "DropdownMenuArrow", dS = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
    return /* @__PURE__ */ m(K1, { ...o, ...r, ref: t });
  }
);
dS.displayName = uS;
var fS = "DropdownMenuSubTrigger", ld = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(Y1, { ...o, ...r, ref: t });
});
ld.displayName = fS;
var pS = "DropdownMenuSubContent", sd = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = be(n);
  return /* @__PURE__ */ m(
    X1,
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
sd.displayName = pS;
var hS = Yu, mS = Qu, gS = Zu, cd = ed, ud = td, dd = nd, fd = rd, pd = od, hd = id, md = ad, gd = ld, yd = sd;
const yS = hS, vS = mS, xS = h.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ L(
  gd,
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
      /* @__PURE__ */ m(wg, { className: "ml-auto h-4 w-4" })
    ]
  }
));
xS.displayName = gd.displayName;
const wS = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  yd,
  {
    ref: n,
    className: te(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
wS.displayName = yd.displayName;
const vd = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(gS, { children: /* @__PURE__ */ m(
  cd,
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
vd.displayName = cd.displayName;
const Fn = h.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  dd,
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
Fn.displayName = dd.displayName;
const bS = h.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ L(
  fd,
  {
    ref: o,
    className: te(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(hd, { children: /* @__PURE__ */ m(Oo, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
bS.displayName = fd.displayName;
const SS = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ L(
  pd,
  {
    ref: r,
    className: te(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(hd, { children: /* @__PURE__ */ m(Sg, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
SS.displayName = pd.displayName;
const CS = h.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  ud,
  {
    ref: r,
    className: te("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
  }
));
CS.displayName = ud.displayName;
const kS = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(md, { ref: n, className: te("-mx-1 my-1 h-px bg-muted", e), ...t }));
kS.displayName = md.displayName;
function FS({ theme: e = "system", onThemeChange: t, labels: n = {} }) {
  const r = (o, i) => n[o] || i;
  return /* @__PURE__ */ L(yS, { children: [
    /* @__PURE__ */ m(vS, { asChild: !0, children: /* @__PURE__ */ L(_e, { variant: "outline", size: "icon", className: "h-9 w-9", children: [
      /* @__PURE__ */ m(Hg, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ m(Fg, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ m("span", { className: "sr-only", children: r("toggleTheme", "Toggle theme") })
    ] }) }),
    /* @__PURE__ */ L(vd, { align: "end", children: [
      /* @__PURE__ */ m(Fn, { onClick: () => t && t("light"), children: r("light", "Light") }),
      /* @__PURE__ */ m(Fn, { onClick: () => t && t("dark"), children: r("dark", "Dark") }),
      /* @__PURE__ */ m(Fn, { onClick: () => t && t("system"), children: r("system", "System") })
    ] })
  ] });
}
function zS({
  children: e,
  labels: t = {},
  onComplete: n,
  storageKey: r = "qobouli-seen-splash",
  simulateLoadingTime: o = 2e3
}) {
  const [i, a] = ve(!0), [l, s] = ve(!1), [c, u] = ve(!0), [d, p] = ve(!1), f = (g, x) => t[g] || x;
  wt(() => {
    if (localStorage.getItem(r) === "true") {
      u(!1), n && n();
      return;
    }
    const x = setTimeout(() => {
      a(!1), s(!0);
    }, o);
    return () => clearTimeout(x);
  }, [r, o, n]);
  const y = () => {
    p(!0), localStorage.setItem(r, "true"), setTimeout(() => {
      u(!1), n && n();
    }, 600);
  };
  return c ? /* @__PURE__ */ L(
    "div",
    {
      className: `fixed inset-0 z-50 bg-background transition-opacity duration-500 flex flex-col items-center justify-center px-4 cursor-pointer ${d ? "opacity-0" : "opacity-100"}`,
      onClick: l ? y : void 0,
      children: [
        /* @__PURE__ */ L("div", { className: "fixed inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ m("div", { className: "absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent" }),
          /* @__PURE__ */ m("div", { className: "absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ L("div", { className: "relative z-10 w-full flex flex-col items-center", children: [
          /* @__PURE__ */ m("div", { className: "mb-8 animate-in zoom-in duration-500", children: /* @__PURE__ */ m("div", { className: "p-6 rounded-2xl bg-primary text-primary-foreground shadow-2xl", children: /* @__PURE__ */ m(Al, { className: "w-16 h-16" }) }) }),
          /* @__PURE__ */ m("h1", { className: "text-4xl sm:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards opacity-0", children: f("appName", "App Name") }),
          /* @__PURE__ */ m("p", { className: "text-xl text-muted-foreground mb-12 text-center max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-forwards opacity-0", children: f("welcomeMessage", "Welcome to the platform.") }),
          /* @__PURE__ */ L("div", { className: "space-y-4 mb-12 self-center text-muted-foreground", children: [
            /* @__PURE__ */ L("div", { className: "flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-forwards opacity-0", children: [
              /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-primary" }),
              /* @__PURE__ */ m("span", { className: "text-lg", children: f("feature1", "Feature 1") })
            ] }),
            /* @__PURE__ */ L("div", { className: "flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-forwards opacity-0", children: [
              /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-primary" }),
              /* @__PURE__ */ m("span", { className: "text-lg", children: f("feature2", "Feature 2") })
            ] }),
            /* @__PURE__ */ L("div", { className: "flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-forwards opacity-0", children: [
              /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-primary" }),
              /* @__PURE__ */ m("span", { className: "text-lg", children: f("feature3", "Feature 3") })
            ] })
          ] }),
          /* @__PURE__ */ m("div", { className: "h-16 flex items-center justify-center", children: i ? /* @__PURE__ */ L("div", { className: "flex flex-col items-center gap-3 animate-in fade-in duration-700 delay-1000 fill-mode-forwards opacity-0", children: [
            /* @__PURE__ */ m("div", { className: "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" }),
            /* @__PURE__ */ m("span", { className: "text-sm text-muted-foreground", children: f("loadingMsg", "Loading...") })
          ] }) : /* @__PURE__ */ m("div", { className: "animate-in fade-in duration-700 delay-1000 fill-mode-forwards opacity-0 flex flex-col items-center gap-2", children: /* @__PURE__ */ m("span", { className: "text-xl font-medium text-primary animate-pulse", children: f("tapToEnter", "Tap Anywhere to Enter") }) }) })
        ] })
      ]
    }
  ) : /* @__PURE__ */ m(Pe, { children: e });
}
const Vr = 768;
function BS() {
  const [e, t] = h.useState(void 0);
  return h.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Vr - 1}px)`), r = () => {
      t(window.innerWidth < Vr);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Vr), () => n.removeEventListener("change", r);
  }, []), !!e;
}
export {
  _e as Button,
  _n as Label,
  mg as MarkdownPreview,
  Ox as MarkdownToolbar,
  fb as NoteAttachments,
  MS as NoteEditor,
  DS as RecentNotes,
  zS as SplashScreen,
  Ps as Switch,
  FS as ThemeToggle,
  Mx as Tooltip,
  BS as useIsMobile
};
