"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8037], {
        3677: function(e, l, t) {
            var n = t(67294);
            l.Z = function(e) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24
                }, e), n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "m15 19-7-7 7-7"
                }))
            }
        },
        41984: function(e, l, t) {
            var n = t(67294);
            l.Z = function(e) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24
                }, e), n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "m9 5 7 7-7 7"
                }))
            }
        },
        43751: function(e, l, t) {
            var n = t(67294);
            l.Z = function(e) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24
                }, e), n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M6 18 18 6M6 6l12 12"
                }))
            }
        },
        98037: function(e, l, t) {
            t.r(l), t.d(l, {
                default: function() {
                    return j
                }
            });
            var n = t(14251),
                r = t(85893),
                i = t(31996),
                o = t(67294),
                c = t(29260),
                a = t.n(c),
                s = t(33752),
                d = t.n(s),
                u = t(41984),
                v = t(3677),
                m = t(44080),
                g = t(22872),
                h = t(43751);

            function f(e) {
                var l = e.pictures,
                    t = e.selected,
                    n = e.aspectRatio,
                    c = e.cornerRadius,
                    s = e.open,
                    f = e.background,
                    j = e.setOpen,
                    x = (0, i.ac)("(min-width: 1920px)"),
                    p = (0, i.ac)("(min-width: 1440px)"),
                    b = (0, i.ac)("(min-width: 1280px)"),
                    w = (0, i.ac)("(min-width: 1024px)"),
                    y = (0, i.ac)("(min-width: 768px)");
                return (0, r.jsx)(m.u, {
                    appear: !0,
                    show: s,
                    as: o.Fragment,
                    children: (0, r.jsxs)(g.V, {
                        as: "div",
                        className: "relative z-[2000]",
                        onClose: function() {
                            return j(!1)
                        },
                        children: [(0, r.jsx)(m.u.Child, {
                            as: o.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, r.jsx)("div", {
                                className: (0, i.AK)("fixed inset-0 backdrop-blur-xl"),
                                children: (0, r.jsx)("div", {
                                    className: "fixed inset-0 bg-white opacity-50",
                                    style: {
                                        backgroundColor: f
                                    }
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, r.jsx)("div", {
                                className: "flex w-full h-screen items-center justify-center text-center",
                                children: (0, r.jsx)(m.u.Child, {
                                    as: o.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, r.jsxs)(g.V.Panel, {
                                        className: "w-full transform overflow-hidden transition-all gallery-carousel",
                                        children: [(0, r.jsx)("div", {
                                            className: "text-right p-6",
                                            children: (0, r.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                                                style: {
                                                    color: (0, i.$O)(f)
                                                },
                                                onClick: function() {
                                                    return j(!1)
                                                },
                                                children: (0, r.jsx)(h.Z, {
                                                    className: "h-6 w-6 lg:h-12 lg:w-12",
                                                    "aria-hidden": "true"
                                                })
                                            })
                                        }), (null === l || void 0 === l ? void 0 : l.length) > 0 && (0, r.jsx)(d(), {
                                            slideIndex: t,
                                            cellSpacing: w ? 40 : y ? 32 : 12,
                                            cellAlign: "center",
                                            slidesToShow: function(e) {
                                                return "1:1" === e ? x ? 3 : w ? 2.5 : 1.25 : "2:3" === e ? x ? 3.5 : p ? 3 : b ? 2.5 : 3 : b ? 1.5 : w ? 1.25 : 1.15
                                            }(n),
                                            wrapAround: !0,
                                            transitionMode: "scroll",
                                            defaultControlsConfig: {
                                                nextButtonClassName: y ? "" : "hidden",
                                                nextButtonStyle: {
                                                    background: "transparent"
                                                },
                                                nextButtonText: (0, r.jsx)(u.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                }),
                                                prevButtonClassName: y ? "" : "hidden",
                                                prevButtonStyle: {
                                                    background: "transparent"
                                                },
                                                prevButtonText: (0, r.jsx)(v.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                })
                                            },
                                            renderBottomCenterControls: function(e) {
                                                return (0, r.jsx)("ul", {
                                                    className: "flex items-center gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                                    children: l.map((function(l, t) {
                                                        return (0, r.jsx)("li", {
                                                            className: (0, i.AK)("flex items-center justify-center rounded-full transition-all duration-300", e.currentSlide === t ? "w-4 h-4" : "w-2.5 h-2.5"),
                                                            style: e.currentSlide === t ? {
                                                                backgroundColor: (0, i.mR)((0, i.$O)(f), 20)
                                                            } : {},
                                                            children: (0, r.jsx)("button", {
                                                                className: (0, i.AK)("w-2.5 h-2.5 rounded-full transition-all"),
                                                                style: {
                                                                    backgroundColor: (0, i.$O)(f),
                                                                    opacity: e.currentSlide !== t ? "35%" : "100%"
                                                                },
                                                                onClick: function() {
                                                                    return e.goToSlide(t)
                                                                }
                                                            })
                                                        }, t)
                                                    }))
                                                })
                                            },
                                            children: l.map((function(e) {
                                                return (0, r.jsx)("div", {
                                                    className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(n), c),
                                                    children: (0, r.jsx)(a(), {
                                                        src: e.url,
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        alt: e.alt,
                                                        className: (0, i.AK)("w-full h-full object-center object-cover")
                                                    })
                                                }, e._id)
                                            }))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function j(e) {
                var l = e.website,
                    t = e.block,
                    c = (0, o.useState)(!1),
                    s = c[0],
                    m = c[1],
                    g = (0, o.useState)(null),
                    h = g[0],
                    j = g[1],
                    x = (0, o.useState)(null),
                    p = x[0],
                    b = x[1],
                    w = (0, o.useState)(null),
                    y = w[0],
                    N = w[1],
                    A = (0, o.useState)([]),
                    K = A[0],
                    k = A[1],
                    C = (0, o.useState)(null),
                    F = C[0],
                    S = C[1],
                    W = (0, o.useState)(null),
                    B = W[0],
                    G = W[1],
                    T = (0, o.useState)("#FFFFFF"),
                    E = T[0],
                    O = T[1],
                    Z = (0, o.useState)("#111827"),
                    R = Z[0],
                    L = Z[1],
                    _ = (0, i.ac)("(min-width: 1920px)"),
                    M = (0, i.ac)("(min-width: 1280px)"),
                    $ = (0, i.ac)("(min-width: 1024px)"),
                    z = (0, i.ac)("(min-width: 768px)"),
                    H = function(e) {
                        (null === t || void 0 === t ? void 0 : t.allowFullscreen) && $ && (m(!0), j(e))
                    },
                    V = function() {
                        return (null === t || void 0 === t ? void 0 : t.allowFullscreen) && $ ? "hover:opacity-70 cursor-pointer transition-opacity" : ""
                    };
                return (0, o.useEffect)((function() {
                    t && (b(t.headline), N(t.align), k(t.pictures || []), S(t.aspectRatio), G(t.cornerRadius), O(t.background))
                }), [t]), (0, o.useEffect)((function() {
                    E && L((0, i.$O)(E))
                }), [E]), (0, r.jsxs)("section", {
                    className: "flex-shrink-0",
                    style: {
                        backgroundColor: E
                    },
                    children: [(0, r.jsxs)("div", {
                        className: (0, i.AK)(!(null === t || void 0 === t ? void 0 : t.fullHeight) && "py-12 lg:py-14 xl:py-20"),
                        children: [!(null === t || void 0 === t ? void 0 : t.fullHeight) && (0, r.jsx)("div", {
                            className: "container mx-auto",
                            children: p && (0, r.jsx)("h2", {
                                className: (0, i.AK)("heading-large mb-6", "text-".concat(y)),
                                style: (0, n.Z)({
                                    color: R
                                }, (0, i.j2)(l)),
                                children: p
                            })
                        }), (0, r.jsx)("div", {
                            className: (0, i.AK)("gallery-carousel", "carousel" !== (null === t || void 0 === t ? void 0 : t.style) && !(null === t || void 0 === t ? void 0 : t.fullWidth) && "container mx-auto"),
                            children: "carousel" === (null === t || void 0 === t ? void 0 : t.style) ? (0, r.jsx)(r.Fragment, {
                                children: (null === K || void 0 === K ? void 0 : K.length) > 0 && (0, r.jsx)(d(), {
                                    cellSpacing: $ ? 40 : z ? 32 : 12,
                                    cellAlign: "center",
                                    slidesToShow: function(e) {
                                        return "1:1" === e ? _ ? 3 : $ ? 2.5 : 1.25 : "2:3" === e ? _ ? 4 : M ? 3.5 : $ ? 3 : z ? 2.5 : 1.5 : "3:2" === e && _ ? 1.75 : M ? 1.5 : $ ? 1.25 : 1.15
                                    }(F),
                                    wrapAround: !0,
                                    transitionMode: "scroll",
                                    enableKeyboardControls: !0,
                                    keyCodeConfig: {
                                        previousSlide: [37],
                                        nextSlide: [39]
                                    },
                                    defaultControlsConfig: {
                                        nextButtonClassName: z ? "" : "hidden",
                                        nextButtonStyle: {
                                            background: "transparent"
                                        },
                                        nextButtonText: (0, r.jsx)(u.Z, {
                                            className: "w-6 lg:w-12 h-6 lg:h-12"
                                        }),
                                        prevButtonClassName: z ? "" : "hidden",
                                        prevButtonStyle: {
                                            background: "transparent"
                                        },
                                        prevButtonText: (0, r.jsx)(v.Z, {
                                            className: "w-6 lg:w-12 h-6 lg:h-12"
                                        })
                                    },
                                    renderBottomCenterControls: function(e) {
                                        return (0, r.jsx)("ul", {
                                            className: "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                            children: K.map((function(l, t) {
                                                return (0, r.jsx)("li", {
                                                    children: (0, r.jsx)("button", {
                                                        className: (0, i.AK)("w-2.5 h-2.5 rounded-full transition-all", e.currentSlide === t && "bg-gray-900 ring-4 ring-gray-200", e.currentSlide > t && ("#111827" === R ? "bg-gray-600" : "bg-gray-200"), e.currentSlide < t && ("#111827" === R ? "bg-gray-900" : "bg-gray-50")),
                                                        onClick: function() {
                                                            return e.goToSlide(t)
                                                        }
                                                    })
                                                }, t)
                                            }))
                                        })
                                    },
                                    children: K.map((function(e) {
                                        return (0, r.jsx)("div", {
                                            className: (0, i.AK)("relative overflow-hidden cursor-auto", (0, i.n3)(F), (0, i.yW)(B)),
                                            children: (0, r.jsx)(a(), {
                                                src: e.url,
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                loading: "lazy",
                                                className: (0, i.AK)("w-full h-full object-center object-cover")
                                            })
                                        }, e._id)
                                    }))
                                })
                            }) : (0, r.jsx)(r.Fragment, {
                                children: 1 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsx)("div", {
                                    className: (0, i.AK)(!(null === t || void 0 === t ? void 0 : t.fullWidth) && "max-w-3xl"),
                                    children: (0, r.jsx)("div", {
                                        className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                        onClick: function() {
                                            return H(0)
                                        },
                                        children: (0, r.jsx)(a(), {
                                            src: K[0].url,
                                            layout: "fill",
                                            objectFit: "cover",
                                            alt: K[0].alt,
                                            className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                        })
                                    })
                                }) || 2 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsx)("div", {
                                    className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                    children: K.map((function(e, l) {
                                        return (0, r.jsx)("div", {
                                            className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                            onClick: function() {
                                                return H(l)
                                            },
                                            children: (0, r.jsx)(a(), {
                                                src: e.url,
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                            })
                                        }, l)
                                    }))
                                }) || (3 === (null === K || void 0 === K ? void 0 : K.length) || 6 === (null === K || void 0 === K ? void 0 : K.length) || 9 === (null === K || void 0 === K ? void 0 : K.length) || 12 === (null === K || void 0 === K ? void 0 : K.length)) && (0, r.jsx)("div", {
                                    className: (0, i.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                    children: K.map((function(e, l) {
                                        return (0, r.jsx)("div", {
                                            className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                            onClick: function() {
                                                return H(l)
                                            },
                                            children: (0, r.jsx)(a(), {
                                                src: e.url,
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                            })
                                        }, l)
                                    }))
                                }) || 4 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsx)("div", {
                                    className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                    children: K.map((function(e, l) {
                                        return (0, r.jsx)("div", {
                                            className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                            onClick: function() {
                                                return H(l)
                                            },
                                            children: (0, r.jsx)(a(), {
                                                src: e.url,
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                            })
                                        }, l)
                                    }))
                                }) || 5 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: K.slice(0, 3).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                        children: K.slice(3, 5).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 7 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: K.slice(0, 3).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                        children: K.slice(3, 7).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 8 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: K.slice(0, 6).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                        children: K.slice(6, 8).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 10 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: K.slice(0, 6).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                        children: K.slice(6, 10).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 11 === (null === K || void 0 === K ? void 0 : K.length) && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: K.slice(0, 9).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.AK)("grid grid-cols-1 md:grid-cols-2", !(null === t || void 0 === t ? void 0 : t.noGutters) && "gap-6 md:gap-10"),
                                        children: K.slice(9, 11).map((function(e, l) {
                                            return (0, r.jsx)("div", {
                                                className: (0, i.AK)("relative overflow-hidden", (0, i.n3)(F), V()),
                                                onClick: function() {
                                                    return H(l)
                                                },
                                                children: (0, r.jsx)(a(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    className: (0, i.AK)("w-full h-full object-center object-cover", (0, i.yW)(B))
                                                })
                                            }, l)
                                        }))
                                    })]
                                })
                            })
                        })]
                    }), (null === t || void 0 === t ? void 0 : t.allowFullscreen) && (0, r.jsx)(f, {
                        website: l,
                        pictures: K,
                        selected: h,
                        aspectRatio: F,
                        cornerRadius: (0, i.yW)(B),
                        background: E,
                        open: s,
                        setOpen: m
                    })]
                })
            }
        }
    }
]);