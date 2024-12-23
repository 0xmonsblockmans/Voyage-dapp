(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4405], {
        80844: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...index]]", function () {
                return a(87987)
            }])
        },
        87987: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: function () {
                    return dl
                },
                default: function () {
                    return ds
                }
            });
            var l, s, i, n, d, r, o, c, u = a(31549),
                m = a(92476),
                h = a(17398),
                x = a(7829),
                p = a(45370),
                v = a(31505),
                f = a(44194),
                g = a(69760),
                j = a(65107),
                b = a(32309),
                w = a(91226),
                N = a(3112),
                y = a(71061);
            let C = () => {
                var e, t, a;
                let l = (0, w.m)();
                return null !== (a = null === (e = (0, y.we)(null !== (t = l.address) && void 0 !== t ? t : "").data) || void 0 === e ? void 0 : e.data.value) && void 0 !== a && a
            };
            var k = a(7358),
                I = a(15660),
                S = a(6875),
                L = a(80877);
            let F = () => {
                    let e = (0, I.SZ)(e => e.superbridgeTestnets),
                        t = (0, I.SZ)(e => e.acrossDomains),
                        a = (0, S.L4)(),
                        l = (0, L.b)();
                    return (0, f.useMemo)(() => a ? e ? t.filter(e => {
                        var t;
                        return null === (t = l.find(t => t.id === e.chainId)) || void 0 === t ? void 0 : t.testnet
                    }) : t.filter(e => {
                        var t;
                        return !(null === (t = l.find(t => t.id === e.chainId)) || void 0 === t ? void 0 : t.testnet)
                    }) : t, [e, t, l])
                },
                A = () => (0, I.SZ)(e => e.ccipDomains),
                T = () => {
                    let e = (0, I.SZ)(e => e.superbridgeTestnets),
                        t = (0, I.SZ)(e => e.cctpDomains),
                        a = (0, S.L4)(),
                        l = (0, L.b)();
                    return (0, f.useMemo)(() => a ? e ? t.filter(e => {
                        var t;
                        return null === (t = l.find(t => t.id === e.chainId)) || void 0 === t ? void 0 : t.testnet
                    }) : t.filter(e => {
                        var t;
                        return !(null === (t = l.find(t => t.id === e.chainId)) || void 0 === t ? void 0 : t.testnet)
                    }) : t, [e, t, l])
                };
            var D = a(71639);

            function M(e, t) {
                return e.bridges.includes(t.chainId)
            }
            var E = a(91646),
                z = a(22578),
                H = a(15168),
                R = a(69597),
                B = a(64870),
                P = a(70898),
                O = a(59932),
                _ = a(36970),
                Z = a(85155);
            let G = ["USDC.e", "USDzC", "USDbC"],
                W = {
                    [E.F.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
                    [z.O.id]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
                    [H.L.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
                    [R.R.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    [B.v.id]: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                    [P.u.id]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                    [O.y.id]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                    [_.p.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
                    [Z.y.id]: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"
                },
                Y = e => !!G.includes(e.symbol) || "USDC" === e.symbol && !W[e.chainId];
            var V = a(54059),
                $ = a(14192),
                U = a(51522);
            let q = (0, $.Ue)()((0, U.tJ)(e => ({
                    preferredExplorer: "etherscan",
                    setPreferredExplorer: t => e({
                        preferredExplorer: t
                    }),
                    currency: "USD",
                    setCurrency: t => e({
                        currency: t
                    }),
                    customTokenLists: [],
                    setCustomTokenLists: t => e({
                        customTokenLists: t
                    }),
                    hasViewedTos: !1,
                    dismissTos: () => e({
                        hasViewedTos: !0
                    }),
                    customTokens: [],
                    setCustomTokens: t => e({
                        customTokens: t
                    })
                }), {
                    name: "settings",
                    version: 3,
                    migrate: (e, t) => (1 === t && (e.preferredExplorer = "etherscan"), e.customTokens = e.customTokens.filter((t, a) => e.customTokens.findIndex(e => JSON.stringify(e) === JSON.stringify(t)) === a), e)
                })),
                K = (0, V.E)(q);
            var X = a(1794),
                Q = a(31621),
                J = a(82676),
                ee = a(55776),
                et = a(13350),
                ea = a(75579);
            let el = () => {
                let e = K.useCustomTokenLists(),
                    t = (0, S.L4)(),
                    a = e.filter(e => e.enabled).map(e => e.url);
                return (0, Q.a)({
                    queryKey: ["useCustomTokenLists", ...a],
                    enabled: t && a.length > 0,
                    queryFn: async () => {
                        let e = await Promise.all(a.map(async e => fetch(e).catch(() => null)));
                        return (await Promise.all(e.filter(e => (null == e ? void 0 : e.status) === 200).map(e => null == e ? void 0 : e.json().catch(() => null)))).filter(D.EN).map(e => {
                            let t = {};
                            for (let a of e.tokens) {
                                let e = t[a.extensions.opTokenId];
                                e || (e = t[a.extensions.opTokenId] = {});
                                let l = {
                                        optimismBridgeAddress: B.v.id,
                                        baseBridgeAddress: P.u.id,
                                        modeBridgeAddress: J.x.id,
                                        liskBridgeAddress: ee.m.id
                                    },
                                    s = {
                                        optimismBridgeAddress: z.O.id,
                                        baseBridgeAddress: H.L.id,
                                        modeBridgeAddress: et.J.id,
                                        liskBridgeAddress: ea.B.id
                                    },
                                    i = (e, t) => e === R.R.id ? l[t] : e === E.F.id ? s[t] : null,
                                    n = Object.keys(a.extensions).map(e => i(a.chainId, e)).filter(D.EN);
                                e[a.chainId] = {
                                    address: a.address,
                                    bridges: n,
                                    chainId: a.chainId,
                                    decimals: a.decimals,
                                    logoURI: a.logoURI,
                                    name: a.name,
                                    symbol: a.symbol
                                }
                            }
                            return Object.values(t)
                        }).flat()
                    }
                })
            };

            function es() {
                let e = function () {
                        let e = (0, h.useRouter)(),
                            t = (0, I.SZ)(e => e.host),
                            a = (0, y.NP)(t, {
                                hyperlaneWarpRoutes: e.query.hyperlaneWarpRoutes
                            });
                        return (0, f.useMemo)(() => {
                            var e;
                            return {
                                isFetching: a.isFetching,
                                data: null === (e = a.data) || void 0 === e ? void 0 : e.data
                            }
                        }, [a.data, a.isFetching])
                    }(),
                    t = el(),
                    a = K.useCustomTokens(),
                    l = (0, X.d)();
                return (0, f.useMemo)(() => {
                    var s, i, n;
                    return {
                        isFetching: e.isFetching || t.isFetching,
                        data: [...null !== (s = e.data) && void 0 !== s ? s : [], ...null !== (i = t.data) && void 0 !== i ? i : [], ...null !== (n = null == l ? void 0 : l.tokens) && void 0 !== n ? n : [], ...a]
                    }
                }, [e.isFetching, e.data, t.isFetching, t.data, null == l ? void 0 : l.tokens, a])
            }

            function ei() {
                let e = es(),
                    t = (0, I.SZ)(e => e.fromChainId),
                    a = (0, I.SZ)(e => e.toChainId),
                    l = (0, f.useMemo)(() => !!W[t] && !!W[a], [e, t, a]);
                return (0, f.useMemo)(() => e.isFetching ? {
                    isFetching: !0,
                    data: null
                } : {
                    isFetching: !1,
                    data: e.data.filter(e => {
                        let s = e[t],
                            i = e[a];
                        return !(!s || !i || 1 === t && l && (Y(s) || Y(i))) && M(s, i)
                    })
                }, [e.data, e.isFetching, t, a, l])
            }
            var en = a(94016);
            let ed = (0, $.Ue)()((e, t) => ({
                    fiatOnramp: !1,
                    setFiatOnramp: t => e({
                        fiatOnramp: t
                    }),
                    forceViaL1: !1,
                    toggleForceViaL1: () => e(e => ({
                        forceViaL1: !e.forceViaL1
                    })),
                    setForceViaL1: t => e({
                        forceViaL1: t
                    }),
                    easyMode: !1,
                    toggleEasyMode: () => e(e => ({
                        easyMode: !e.easyMode
                    })),
                    setEasyMode: t => e({
                        easyMode: t
                    }),
                    token: null,
                    setToken: t => e({
                        token: t
                    }),
                    rawAmount: "",
                    setRawAmount: t => e({
                        rawAmount: t
                    }),
                    recipientName: "",
                    recipientAddress: "",
                    setRecipientName: t => e({
                        recipientName: t
                    }),
                    setRecipientAddress: t => e({
                        recipientAddress: t
                    }),
                    displayTransactions: !1,
                    setDisplayTransactions: t => e({
                        displayTransactions: t
                    }),
                    submittingBridge: !1,
                    setSubmittingBridge: t => e({
                        submittingBridge: t
                    }),
                    submittedHash: null,
                    setSubmittedHash: t => e({
                        submittedHash: t
                    }),
                    displayConfirmationModal: !1,
                    setDisplayConfirmationModal: t => e({
                        displayConfirmationModal: t
                    }),
                    displayTokenNetworkSelector: !1,
                    setDisplayTokenNetworkSelector: t => e({
                        displayTokenNetworkSelector: t
                    }),
                    displayFiatNetworkSelector: !1,
                    setDisplayFiatNetworkSelector: t => e({
                        displayFiatNetworkSelector: t
                    }),
                    networkSelectorDirection: "from",
                    setNetworkSelectorDirection: t => e({
                        networkSelectorDirection: t
                    }),
                    routeId: null,
                    setRouteId: t => e({
                        routeId: t
                    })
                })),
                er = (0, V.E)(ed);
            var eo = a(37757);
            let ec = "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
                eu = e => !!e && ((0, en.E)(e.address, eo.DR) || (0, en.E)(e.address, ec)),
                em = e => {
                    if (!e) return !1;
                    for (let a in e) {
                        var t;
                        let l = null === (t = e[a]) || void 0 === t ? void 0 : t.address;
                        if (l && (0, en.E)(eo.DR, l) || l && (0, en.E)(ec, l)) return !0
                    }
                    return !1
                };
            var eh = a(60096),
                ex = a(5660);
            let ep = () => {
                    var e, t, a, l, s, i, n;
                    let d = ei(),
                        r = er.useToken(),
                        o = (0, eh.W)(),
                        c = (0, eh.kX)(),
                        u = (0, ex.q3)();
                    if (!r) {
                        if (u && u.fromChainId === (null == c ? void 0 : c.id) && u.toChainId === (null == o ? void 0 : o.id)) {
                            let e = null === (i = d.data) || void 0 === i ? void 0 : i.find(e => e[u.fromChainId] && e[u.toChainId] && (0, en.E)(e[u.fromChainId].address, u.tokenAddress));
                            if (e) return e
                        }
                        return (null === (l = d.data) || void 0 === l ? void 0 : l.find(e => {
                            var t, a, l, s;
                            return eu(null !== (a = e[null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : 0]) && void 0 !== a ? a : null) || eu(null !== (s = e[null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : 0]) && void 0 !== s ? s : null)
                        })) || (null === (s = d.data) || void 0 === s ? void 0 : s[0]) || null
                    }
                    let m = null === (e = d.data) || void 0 === e ? void 0 : e.find(e => {
                        var t, a, l, s, i, n, d, u;
                        let m = null === (t = e[null !== (i = null == c ? void 0 : c.id) && void 0 !== i ? i : 0]) || void 0 === t ? void 0 : t.address,
                            h = null === (a = e[null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : 0]) || void 0 === a ? void 0 : a.address,
                            x = null == r ? void 0 : null === (l = r[null !== (d = null == c ? void 0 : c.id) && void 0 !== d ? d : 0]) || void 0 === l ? void 0 : l.address,
                            p = null == r ? void 0 : null === (s = r[null !== (u = null == o ? void 0 : o.id) && void 0 !== u ? u : 0]) || void 0 === s ? void 0 : s.address;
                        if (x && p && m && h && (0, en.E)(m, x) && (0, en.E)(h, p)) return e
                    });
                    return m ? m : (null === (t = d.data) || void 0 === t ? void 0 : t.find(e => {
                        var t, a, l, s, i, n, d, u;
                        let m = null === (t = e[null !== (i = null == c ? void 0 : c.id) && void 0 !== i ? i : 0]) || void 0 === t ? void 0 : t.address,
                            h = null === (a = e[null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : 0]) || void 0 === a ? void 0 : a.address,
                            x = null == r ? void 0 : null === (l = r[null !== (d = null == c ? void 0 : c.id) && void 0 !== d ? d : 0]) || void 0 === l ? void 0 : l.address,
                            p = null == r ? void 0 : null === (s = r[null !== (u = null == o ? void 0 : o.id) && void 0 !== u ? u : 0]) || void 0 === s ? void 0 : s.address;
                        if (x && m && p && h && (0, en.E)(m, x)) return e
                    })) || (null !== (n = null === (a = d.data) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null)
                },
                ev = () => {
                    var e, t;
                    let a = ep(),
                        l = (0, eh.kX)();
                    return a && null !== (t = a[null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : 0]) && void 0 !== t ? t : null
                },
                ef = () => {
                    var e, t;
                    let a = ep(),
                        l = (0, eh.W)();
                    return null !== (t = null == a ? void 0 : a[null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : 0]) && void 0 !== t ? t : null
                };
            var eg = a(28525);
            let ej = () => {
                    let e = (0, eg.w)(),
                        t = es();
                    return (0, f.useMemo)(() => ({
                        mailboxIds: e.map(e => e.id),
                        routers: t.data.flatMap(e => Object.values(e).map(e => {
                            var t;
                            return null === (t = e.hyperlane) || void 0 === t ? void 0 : t.router
                        })).filter(D.EN)
                    }), [t, e])
                },
                eb = () => (0, I.SZ)(e => e.lzDomains),
                ew = () => {
                    let e = eb(),
                        t = es();
                    return (0, f.useMemo)(() => ({
                        domainIds: e.map(e => e.id),
                        adapters: t.data.flatMap(e => Object.values(e).map(e => {
                            var t;
                            return null === (t = e.lz) || void 0 === t ? void 0 : t.adapter
                        })).filter(D.EN)
                    }), [t, e])
                },
                eN = () => {
                    var e, t, a, l, s, i, n, d, r;
                    let o = (0, w.m)(),
                        c = (0, N.I)(),
                        u = ej(),
                        m = ew();
                    (0, I.SZ)(e => e.superbridgeTestnets);
                    let h = F(),
                        x = T(),
                        p = A(),
                        v = o.address,
                        {
                            data: g,
                            isLoading: j,
                            isFetchingNextPage: b,
                            isFetching: C,
                            isError: S,
                            fetchNextPage: L,
                            hasNextPage: D
                        } = (0, k.N)({
                            queryKey: ["activity", v, c.map(e => e.id), h.map(e => e.id), x.map(e => e.id), p.map(e => e.id), u.mailboxIds, u.routers, m.domainIds, m.adapters],
                            queryFn: async e => {
                                let {
                                    pageParam: t
                                } = e;
                                return v ? await (0, y.zq)({
                                    address: v,
                                    acrossDomains: h.map(e => e.id),
                                    cctpDomains: x.map(e => e.id),
                                    ccipDomains: p.map(e => e.id),
                                    deploymentIds: c.map(e => e.id),
                                    cursor: t || null,
                                    hyperlane: u,
                                    lz: m
                                }).then(e => e.data) : {
                                    actionRequiredCount: 0,
                                    inProgressCount: 0,
                                    total: 0,
                                    transactions: [],
                                    hasWithdrawalReadyToFinalize: null
                                }
                            },
                            initialPageParam: "",
                            getNextPageParam: e => {
                                var t, a;
                                return null == e ? void 0 : null === (a = e.transactions) || void 0 === a ? void 0 : null === (t = a[e.transactions.length - 1]) || void 0 === t ? void 0 : t.id
                            },
                            enabled: !!v,
                            refetchInterval: 1e4
                        });
                    return {
                        transactions: (0, f.useMemo)(() => {
                            var e;
                            return null !== (e = null == g ? void 0 : g.pages.flatMap(e => e.transactions)) && void 0 !== e ? e : []
                        }, [null == g ? void 0 : g.pages]),
                        isLoading: j,
                        isFetchingNextPage: b,
                        isFetching: C,
                        isError: S,
                        fetchNextPage: L,
                        total: null !== (i = null == g ? void 0 : null === (e = g.pages) || void 0 === e ? void 0 : e[0].total) && void 0 !== i ? i : 0,
                        actionRequiredCount: null !== (n = null == g ? void 0 : null === (t = g.pages) || void 0 === t ? void 0 : t[0].actionRequiredCount) && void 0 !== n ? n : 0,
                        inProgressCount: null !== (d = null == g ? void 0 : null === (a = g.pages) || void 0 === a ? void 0 : a[0].inProgressCount) && void 0 !== d ? d : 0,
                        hasWithdrawalReadyToFinalize: null !== (r = null == g ? void 0 : null === (s = g.pages) || void 0 === s ? void 0 : null === (l = s[0]) || void 0 === l ? void 0 : l.hasWithdrawalReadyToFinalize) && void 0 !== r ? r : null
                    }
                };
            var ey = a(28588);
            let eC = e => [ey.CY.deposit, ey.su["arbitrum-deposit-eth"], ey.su["arbitrum-deposit-retryable"]].includes(e.type),
                ek = e => [ey.CY.withdrawal, ey.su["arbitrum-withdrawal"]].includes(e.type),
                eI = e => [ey.CY["forced-withdrawal"], ey.su["arbitrum-forced-withdrawal"]].includes(e.type),
                eS = e => [ey.su["arbitrum-deposit-eth"], ey.su["arbitrum-deposit-retryable"]].includes(e.type),
                eL = e => e.type === ey.su["arbitrum-withdrawal"],
                eF = e => e.type === ey.su["arbitrum-forced-withdrawal"],
                eA = e => e.type === ey.CY.deposit,
                eT = e => e.type === ey.CY.withdrawal,
                eD = e => e.type === ey.CY["forced-withdrawal"],
                eM = e => e.type === ey.MS["cctp-bridge"],
                eE = e => e.type === ey.zT["across-bridge"],
                ez = e => e.type === ey.MI["hyperlane-bridge"],
                eH = e => e.type === ey.tK["lz-bridge"],
                eR = e => e.type === ey.m3["ccip-bridge"],
                eB = e => !!e.type,
                eP = e => eB(e) && "AmountTooLarge" === e.type,
                eO = e => eB(e) && "AmountTooSmall" === e.type,
                e_ = e => !!e && !!e.initiatingTransaction,
                eZ = e => e.type === ey.zm.Wait,
                eG = e => e.type === ey.zm.Receive,
                eW = e => e.type === ey.zm.ForcedWithdrawal,
                eY = e => [ey.zm.Initiate, ey.zm.Prove, ey.zm.Finalize].includes(e.type);

            function eV(e) {
                return eC(e) ? e.deposit.transactionHash : ek(e) ? e.withdrawal.transactionHash : eI(e) ? e.deposit.deposit.transactionHash : eM(e) ? e.bridge.transactionHash : eE(e) ? e.deposit.transactionHash : e.send.transactionHash
            }
            let e$ = (0, $.Ue)()(e => ({
                    logout: () => {
                        e({
                            transactions: [],
                            pendingFinalises: {},
                            pendingProves: {}
                        })
                    },
                    transactions: [],
                    addTransaction: t => {
                        e(e => ({
                            transactions: [t, ...e.transactions]
                        }))
                    },
                    removeTransactionByHash: t => {
                        e(e => ({
                            transactions: e.transactions.filter(e => eV(e) !== t)
                        }))
                    },
                    updateTransactionByHash: (t, a) => {
                        e(e => ({
                            transactions: e.transactions.map(e => eC(e) && e.deposit.transactionHash === t ? {
                                ...e,
                                deposit: {
                                    ...e.deposit,
                                    transactionHash: a
                                }
                            } : ek(e) && e.withdrawal.transactionHash === t ? {
                                ...e,
                                withdrawal: {
                                    ...e.withdrawal,
                                    transactionHash: a
                                }
                            } : eD(e) && e.deposit.deposit.transactionHash === t || eF(e) && e.deposit.deposit.transactionHash === t ? {
                                ...e,
                                deposit: {
                                    ...e.deposit,
                                    deposit: {
                                        ...e.deposit.deposit,
                                        transactionHash: a
                                    }
                                }
                            } : eE(e) && e.deposit.transactionHash === t ? {
                                ...e,
                                deposit: {
                                    ...e.deposit,
                                    transactionHash: a
                                }
                            } : e)
                        }))
                    },
                    pendingProves: {},
                    pendingFinalises: {},
                    setProving: (t, a) => e(e => ({
                        pendingProves: {
                            ...e.pendingProves,
                            [t]: a
                        }
                    })),
                    removeProving: t => e(e => ({
                        ...e.pendingProves,
                        [t]: void 0
                    })),
                    setFinalising: (t, a) => e(e => ({
                        pendingFinalises: {
                            ...e.pendingFinalises,
                            [t]: a
                        }
                    })),
                    removeFinalising: t => e(e => ({
                        ...e.pendingFinalises,
                        [t]: void 0
                    }))
                })),
                eU = (0, V.E)(e$),
                eq = () => {
                    let e = eU.useTransactions(),
                        {
                            inProgressCount: t
                        } = eN();
                    return C() ? 0 : t + e.length
                };
            var eK = a(8937);
            let eX = () => {
                let e = (0, ex.qD)().metadata.gId;
                return t => {
                    e && (0, eK.sendGAEvent)("event", t.event, t)
                }
            };
            var eQ = a(74857),
                eJ = a(63484),
                e0 = a(90216);
            let e1 = e => {
                    let {
                        className: t
                    } = e;
                    return (0, u.jsxs)(e0.bZ, {
                        variant: "horizontal",
                        className: (0, x.Z)("flex items-start gap-4", t),
                        children: [(0, u.jsx)("div", {
                            className: "animate-wiggle-waggle drop-shadow-lg",
                            children: (0, u.jsx)(eJ.az, {
                                className: "h-8 w-8 shrink-0"
                            })
                        }), (0, u.jsxs)("div", {
                            className: "prose",
                            children: [(0, u.jsx)("p", {
                                className: "text-xs text-foreground",
                                children: "Pending withdrawals from Base were reset on October 30 following activation of the fault proof upgrade. Recently proved withdrawals will need to be reproven."
                            }), (0, u.jsx)("p", {
                                className: "text-xs",
                                children: (0, u.jsx)("a", {
                                    href: eQ.R,
                                    target: "_blank",
                                    className: "cursor-pointer hover:underline text-muted-foreground",
                                    children: "More info"
                                })
                            })]
                        })]
                    })
                },
                e2 = e => {
                    let {
                        className: t
                    } = e;
                    return (0, u.jsxs)(e0.bZ, {
                        variant: "horizontal",
                        className: (0, x.Z)("flex items-start gap-4", t),
                        children: [(0, u.jsx)("div", {
                            className: "animate-wiggle-waggle drop-shadow-lg",
                            children: (0, u.jsx)(eJ.az, {
                                className: "h-8 w-8 shrink-0"
                            })
                        }), (0, u.jsxs)("div", {
                            className: "prose",
                            children: [(0, u.jsx)("p", {
                                className: "text-xs text-foreground",
                                children: "Pending withdrawals from Soneium Minato were reset on November 4th following activation of the fault proof upgrade. Recently proved withdrawals will need to be reproven."
                            }), (0, u.jsx)("p", {
                                className: "text-xs",
                                children: (0, u.jsx)("a", {
                                    href: eQ.R,
                                    target: "_blank",
                                    className: "cursor-pointer hover:underline text-muted-foreground",
                                    children: "More info"
                                })
                            })]
                        })]
                    })
                };
            var e3 = a(58595);
            (l = d || (d = {}))[l.UNCONFIRMED = 0] = "UNCONFIRMED", l[l.CONFIRMED = 1] = "CONFIRMED", l[l.EXECUTED = 2] = "EXECUTED";
            let e5 = e => !!e && eE(e) && !e.fill && e.deposit.timestamp < Date.now() - 54e5,
                e4 = e => {
                    var t;
                    return e ? eE(e) ? e.fill : eC(e) ? e.relay : ek(e) ? e.finalise : eI(e) ? null === (t = e.withdrawal) || void 0 === t ? void 0 : t.finalise : eM(e) ? e.relay : e.receive : null
                },
                e8 = e => e ? eE(e) ? e.deposit : eM(e) ? e.bridge : eC(e) ? e.deposit : ek(e) ? e.withdrawal : eI(e) ? e.deposit.deposit : e.send : null;
            var e7 = a(88844);
            let e6 = e => {
                if (null == e) return "";
                let t = 0;
                if (e > 1) t = 4;
                else {
                    let a = Math.floor(Math.abs(Math.log10(e)));
                    t = a === 1 / 0 ? 0 : a + 4
                }
                return t > 20 && (t = 10), isNaN(t) && (t = 2), e.toLocaleString("en-US", {
                    maximumFractionDigits: t
                })
            };

            function e9(e, t) {
                var a, l, s, i, n, d, r;
                let o, c, u;
                if (!e || !t) return null;
                if (eM(e)) o = e.amount, c = 6, u = null !== (a = null == t ? void 0 : t.symbol) && void 0 !== a ? a : "USDC";
                else if ("across-bridge" === e.type) o = e.metadata.data.inputAmount, c = null !== (l = null == t ? void 0 : t.decimals) && void 0 !== l ? l : 18, u = null !== (s = null == t ? void 0 : t.symbol) && void 0 !== s ? s : "ETH";
                else if (ez(e) || eH(e) || eR(e)) o = e.amount, c = null !== (i = null == t ? void 0 : t.decimals) && void 0 !== i ? i : 18, u = null !== (n = null == t ? void 0 : t.symbol) && void 0 !== n ? n : "ETH";
                else {
                    let a = eI(e) && e.withdrawal ? e.withdrawal.metadata : eI(e) ? e.deposit.metadata : e.metadata;
                    "eth-deposit" === a.type ? (o = a.data.amount, c = 18, u = null !== (d = null == t ? void 0 : t.symbol) && void 0 !== d ? d : "ETH") : (o = a.data.amount, c = null !== (r = null == t ? void 0 : t.decimals) && void 0 !== r ? r : 18, u = null == t ? void 0 : t.symbol)
                }
                let m = e6(parseFloat((0, e7.b)(BigInt(o), c)));
                return {
                    formatted: m,
                    raw: o,
                    text: "".concat(m, " ").concat(u)
                }
            }
            var te = a(51427);
            let tt = e => {
                    var t;
                    return null !== (t = (0, te.T)(!e || eE(e) || eM(e) || ez(e) || eH(e) || eR(e) ? "" : eI(e) ? e.deposit.deploymentId : e.deploymentId)) && void 0 !== t ? t : null
                },
                ta = e => {
                    var t, a;
                    let l = tt(e);
                    if (e) {
                        if (eC(e)) return null == l ? void 0 : l.depositDuration;
                        if (eT(e)) return (null !== (t = null == l ? void 0 : l.proveDuration) && void 0 !== t ? t : 0) + (null !== (a = null == l ? void 0 : l.finalizeDuration) && void 0 !== a ? a : 0);
                        if (eL(e)) return null == l ? void 0 : l.finalizeDuration;
                        if (eE(e) || ez(e) || eM(e) || eH(e) || eR(e)) return e.duration
                    }
                },
                tl = e => {
                    var t, a, l, s, i, n, d, r, o, c, u, m, h, x, p, v;
                    let f = (0, N.I)(),
                        g = (0, eg.w)(),
                        j = eb(),
                        b = A(),
                        w = 0,
                        y = 0;
                    if (e && eI(e)) {
                        let t = f.find(t => e.deposit.deploymentId === t.id);
                        w = t.l2ChainId, y = t.l1ChainId
                    }
                    if (e && eM(e) && (w = e.fromChainId, y = e.toChainId), e && eE(e) && (w = e.fromChainId, y = e.toChainId), e && ez(e) && (w = null !== (l = null === (t = g.find(t => t.domain === e.fromDomain)) || void 0 === t ? void 0 : t.chainId) && void 0 !== l ? l : 0, y = null !== (s = null === (a = g.find(t => t.domain === e.toDomain)) || void 0 === a ? void 0 : a.chainId) && void 0 !== s ? s : 0), e && eH(e) && (w = null !== (d = null === (i = j.find(t => t.eId === e.fromEid)) || void 0 === i ? void 0 : i.chainId) && void 0 !== d ? d : 0, y = null !== (r = null === (n = j.find(t => t.eId === e.toEid)) || void 0 === n ? void 0 : n.chainId) && void 0 !== r ? r : 0), e && eR(e) && (w = null !== (u = null === (o = b.find(t => t.selector === e.fromSelector)) || void 0 === o ? void 0 : o.chainId) && void 0 !== u ? u : 0, y = null !== (m = null === (c = b.find(t => t.selector === e.toSelector)) || void 0 === c ? void 0 : c.chainId) && void 0 !== m ? m : 0), e && eC(e)) {
                        let t = f.find(t => (null == e ? void 0 : e.deploymentId) === t.id);
                        w = null !== (h = null == t ? void 0 : t.l1ChainId) && void 0 !== h ? h : 0, y = null !== (x = null == t ? void 0 : t.l2ChainId) && void 0 !== x ? x : 0
                    }
                    if (e && ek(e)) {
                        let t = f.find(t => (null == e ? void 0 : e.deploymentId) === t.id);
                        w = null !== (p = null == t ? void 0 : t.l2ChainId) && void 0 !== p ? p : 0, y = null !== (v = null == t ? void 0 : t.l1ChainId) && void 0 !== v ? v : 0
                    }
                    let C = (0, eh.Ab)(w),
                        k = (0, eh.Ab)(y);
                    return C && k ? {
                        from: C,
                        to: k
                    } : null
                },
                ts = e => e ? eS(e) ? ey.nY.ArbitrumDeposit : eL(e) ? ey.nY.ArbitrumWithdrawal : eA(e) ? ey.nY.OptimismDeposit : eT(e) ? ey.nY.OptimismWithdrawal : eD(e) ? ey.nY.OptimismForcedWithdrawal : eE(e) ? ey.nY.Across : eM(e) ? ey.nY.Cctp : eH(e) ? ey.nY.Lz : eR(e) ? ey.nY.Ccip : ey.nY.Hyperlane : null,
                ti = e => eC(e) ? e.deposit.timestamp : ek(e) ? e.withdrawal.timestamp : eI(e) ? e.deposit.deposit.timestamp : eE(e) ? e.deposit.timestamp : eM(e) ? e.bridge.timestamp : e.send.timestamp,
                tn = (e, t, a) => {
                    let {
                        chainId: l,
                        tokenAddress: s
                    } = t, i = e.find(e => {
                        var t, i;
                        return a && (null === (t = e[l]) || void 0 === t ? void 0 : t.address) && (null === (i = e[a]) || void 0 === i ? void 0 : i.address) && (0, en.E)(e[l].address, s) && M(e[l], e[a])
                    }), n = e.find(e => {
                        var t;
                        return (null === (t = e[l]) || void 0 === t ? void 0 : t.address) && (0, en.E)(e[l].address, s)
                    });
                    return i || n
                },
                td = (e, t, a) => e.find(e => e[t] && e[a] && em(e) && M(e[t], e[a]));

            function tr(e) {
                let t = es(),
                    a = tl(e);
                if (!a || !e) return null;
                let {
                    from: l,
                    to: s
                } = a;
                if (eM(e) || eR(e)) return tn(t.data, {
                    chainId: a.from.id,
                    tokenAddress: e.token
                }, a.to.id);
                if (eE(e)) return e.metadata.data.isEth ? td(t.data, l.id, s.id) : tn(t.data, {
                    chainId: l.id,
                    tokenAddress: e.metadata.data.inputTokenAddress
                }, s.id);
                if (ez(e)) {
                    let a = t.data.find(t => {
                        var a;
                        let s = t[l.id];
                        return null != s && null !== (a = s.hyperlane) && void 0 !== a && !!a.router && ((0, en.E)(s.hyperlane.router, e.token) || (0, en.E)(s.address, e.token))
                    });
                    return null != a ? a : null
                }
                if (eH(e)) {
                    let a = t.data.find(t => {
                        var a;
                        let s = t[l.id];
                        return null != s && null !== (a = s.lz) && void 0 !== a && !!a.adapter && ((0, en.E)(s.lz.adapter, e.token) || (0, en.E)(s.address, e.token))
                    });
                    return null != a ? a : null
                }
                let i = eI(e) && e.withdrawal ? e.withdrawal.metadata : eI(e) ? e.deposit.metadata : e.metadata;
                return (0, b.EQ)(i).with({
                    type: "eth-deposit"
                }, () => td(t.data, l.id, s.id)).with({
                    type: "token-deposit"
                }, a => {
                    let i = eC(e) ? a.data.l1TokenAddress : a.data.l2TokenAddress;
                    return tn(t.data, {
                        chainId: l.id,
                        tokenAddress: i
                    }, s.id)
                }).otherwise(() => null)
            }

            function to(e) {
                var t;
                let a = tl(e),
                    l = tr(e);
                return a && null !== (t = null == l ? void 0 : l[a.from.id]) && void 0 !== t ? t : null
            }
            let tc = {
                    [ey.nY.Across]: "Across",
                    [ey.nY.Cctp]: "CCTP",
                    [ey.nY.ArbitrumDeposit]: "Native Bridge",
                    [ey.nY.ArbitrumWithdrawal]: "Native Bridge",
                    [ey.nY.OptimismDeposit]: "Native Bridge",
                    [ey.nY.OptimismWithdrawal]: "Native Bridge",
                    [ey.nY.OptimismForcedWithdrawal]: "Native Bridge",
                    [ey.nY.Hyperlane]: "Hyperlane",
                    [ey.nY.Lz]: "LayerZero",
                    [ey.nY.Ccip]: "CCIP"
                },
                tu = e => e ? tc[e] : "",
                tm = (0, $.Ue)()((e, t) => ({
                    alerts: [],
                    setAlerts: t => e({
                        alerts: t
                    }),
                    modals: {},
                    addModal: a => e({
                        modals: {
                            ...t().modals,
                            [a]: !0
                        }
                    }),
                    removeModal: a => {
                        e({
                            modals: {
                                ...t().modals,
                                [a]: !1
                            }
                        }), e({
                            activeIds: {
                                ...t().activeIds,
                                [a]: void 0
                            }
                        })
                    },
                    activeIds: {},
                    setActiveId: (a, l) => e({
                        activeIds: {
                            ...t().activeIds,
                            [a]: l
                        }
                    })
                })),
                th = (0, V.E)(tm),
                tx = e => {
                    let t = th.useAddModal(),
                        a = th.useRemoveModal(),
                        l = th.useModals(),
                        s = th.useSetActiveId(),
                        i = th.useActiveIds();
                    return {
                        isOpen: !!l[e],
                        data: i[e],
                        open: a => {
                            a && s(e, a), t(e)
                        },
                        close: () => {
                            a(e)
                        }
                    }
                };
            var tp = a(2504),
                tv = a(33572);
            (s = r || (r = {}))[s.UNCONFIRMED_L1_TO_L2_MESSAGE = 0] = "UNCONFIRMED_L1_TO_L2_MESSAGE", s[s.FAILED_L1_TO_L2_MESSAGE = 1] = "FAILED_L1_TO_L2_MESSAGE", s[s.STATE_ROOT_NOT_PUBLISHED = 2] = "STATE_ROOT_NOT_PUBLISHED", s[s.READY_TO_PROVE = 3] = "READY_TO_PROVE", s[s.IN_CHALLENGE_PERIOD = 4] = "IN_CHALLENGE_PERIOD", s[s.READY_FOR_RELAY = 5] = "READY_FOR_RELAY", s[s.RELAYED = 6] = "RELAYED";
            var tf = a(59700);
            let tg = e => {
                    let {
                        token: t,
                        className: a
                    } = e, [l, s] = (0, f.useState)(!1);
                    if ((0, f.useEffect)(() => {
                            s(!1)
                        }, [null == t ? void 0 : t.logoURI]), l || !(null == t ? void 0 : t.logoURI)) {
                        var i;
                        return (0, u.jsx)("div", {
                            className: (0, x.Z)(a, "flex rounded-full bg-zinc-400 dark:bg-zinc-800 overflow-hidden font-heading border p-1 text-xs items-center justify-center text-white"),
                            children: (null !== (i = null == t ? void 0 : t.symbol) && void 0 !== i ? i : "TOK").substring(0, 3)
                        })
                    }
                    return (0, u.jsx)("img", {
                        loading: "lazy",
                        src: null == t ? void 0 : t.logoURI,
                        className: (0, x.Z)(a, "rounded-full bg-zinc-50 overflow-hidden"),
                        onError: () => s(!0),
                        alt: "".concat(null == t ? void 0 : t.symbol, " image")
                    })
                },
                tj = e => {
                    var t, a, l, s, i;
                    let n = e8(e),
                        d = tt(e),
                        o = ta(e);
                    if (!n) return null;
                    if (!tk(n)) return {
                        description: "Submitting bridge"
                    };
                    if (eT(e) || eD(e)) {
                        if (eD(e) && !e.withdrawal) return {
                            description: "Waiting for rollup withdrawal",
                            timestamp: n.timestamp + (null !== (a = null == d ? void 0 : d.depositDuration) && void 0 !== a ? a : 0)
                        };
                        let i = eT(e) ? e : e.withdrawal,
                            o = eT(e) ? e.status : null === (t = e.withdrawal) || void 0 === t ? void 0 : t.status;
                        return i && o ? o === r.STATE_ROOT_NOT_PUBLISHED ? {
                            description: d && (0, tp.uH)(d) && (null == d ? void 0 : d.contractAddresses.disputeGameFactory) ? "Waiting for dispute game" : "Waiting for state root",
                            timestamp: i.withdrawal.timestamp + (null !== (l = null == d ? void 0 : d.proveDuration) && void 0 !== l ? l : 0)
                        } : i.prove && o === r.IN_CHALLENGE_PERIOD ? {
                            description: "Challenge period",
                            timestamp: i.prove.timestamp + (null !== (s = null == d ? void 0 : d.finalizeDuration) && void 0 !== s ? s : 0)
                        } : null : null
                    }
                    let c = "";
                    return eL(e) ? {
                        description: "In challenge period",
                        timestamp: n.timestamp + (null !== (i = null == d ? void 0 : d.finalizeDuration) && void 0 !== i ? i : 0)
                    } : (c = eM(e) ? "Waiting for Circle attestation" : "Waiting for confirmation", {
                        timestamp: n.timestamp + (null != o ? o : 0),
                        description: c
                    })
                },
                tb = e => !!(null == e ? void 0 : e.button),
                tw = e => !!(null == e ? void 0 : e.timestamp),
                tN = e => !!(null == e ? void 0 : e.description),
                ty = e => {
                    let t = tL(e),
                        a = tl(e),
                        l = tj(e);
                    return a ? "prove" === t ? {
                        description: "Ready to prove",
                        button: "Prove"
                    } : "finalize" === t ? {
                        description: "Ready to finalize",
                        button: "Get"
                    } : "mint" === t ? {
                        description: "Ready to mint",
                        button: "Get"
                    } : l : null
                },
                tC = e => {
                    let {
                        tx: t
                    } = e, a = ty(t), [l, s] = (0, f.useState)(null);
                    return ((0, f.useEffect)(() => {
                        let e = null;
                        if (a && tw(a)) {
                            let t = () => {
                                s((0, tv.cj)(a.timestamp))
                            };
                            t(), e = setInterval(t, 5e3)
                        }
                        return () => {
                            e && clearInterval(e)
                        }
                    }, [a]), a) ? (0, u.jsxs)("div", {
                        className: "w-full flex items-center justify-between gap-2",
                        children: [(0, u.jsxs)("div", {
                            className: "flex gap-2 items-center rounded-full border border-muted pl-2 pr-3 py-1.5",
                            children: [(0, u.jsx)(eJ.vM, {
                                className: "fill-muted-foreground text-muted-foreground w-4 h-4"
                            }), (0, u.jsx)("span", {
                                className: "text-xs lg:text-sm text-muted-foreground",
                                children: a.description
                            })]
                        }), tb(a) ? (0, u.jsxs)("div", {
                            className: "flex gap-1.5 items-center rounded-full bg-primary pr-2 pl-3 py-1.5",
                            children: [(0, u.jsx)("span", {
                                className: "text-xs lg:text-sm text-primary-foreground",
                                children: a.button
                            }), (0, u.jsx)(eJ.Ri, {
                                className: "fill-primary-foreground w-3 h-3"
                            })]
                        }) : tw(a) && a.timestamp > Date.now() ? (0, u.jsxs)("div", {
                            className: "flex gap-1.5 items-center rounded-full bg-muted pr-2 pl-3 py-1.5",
                            children: [(0, u.jsxs)("span", {
                                className: "text-xs lg:text-sm text-muted-foreground",
                                children: ["~", l, " to go"]
                            }), (0, u.jsx)(eJ.qS, {
                                className: "w-4 h-4 fill-muted-foreground animate-wiggle-waggle"
                            })]
                        }) : tN(a) && (0, u.jsx)(u.Fragment, {})]
                    }) : null
                },
                tk = e => !!e.timestamp,
                tI = e => {
                    let t = e4(e);
                    return (null == t ? void 0 : t.status) === ey.LN.confirmed
                },
                tS = e => {
                    let t = e5(e),
                        a = e4(e);
                    return !t && !a
                },
                tL = e => {
                    if (eE(e) || ez(e) || eC(e)) return null;
                    if (eT(e) || eD(e)) {
                        var t;
                        let a = eT(e) ? e.status : null === (t = e.withdrawal) || void 0 === t ? void 0 : t.status;
                        return a ? a === r.READY_TO_PROVE ? "prove" : a === r.READY_FOR_RELAY ? "finalize" : null : null
                    }
                    return eL(e) ? e.status === d.CONFIRMED ? "finalize" : null : eM(e) && e.bridge.timestamp + e.duration < Date.now() ? "mint" : null
                },
                tF = e => {
                    var t;
                    let a = e8(e),
                        l = e4(e),
                        s = eT(e) ? e.prove : eD(e) ? null === (t = e.withdrawal) || void 0 === t ? void 0 : t.prove : null,
                        i = eU.usePendingFinalises(),
                        n = [];
                    return (a && tk(a) ? n.push({
                        status: "done",
                        name: "initiating"
                    }) : n.push({
                        status: "in-progress",
                        name: "initiating"
                    }), eT(e) || eD(e)) ? (s ? n.push({
                        status: "done",
                        name: "prove"
                    }) : a && !tk(a) ? n.push({
                        status: "not-started",
                        name: "prove"
                    }) : n.push({
                        status: "in-progress",
                        name: "prove"
                    }), l ? n.push({
                        status: "done",
                        name: "finalise"
                    }) : s || i[e.id] ? n.push({
                        status: "in-progress",
                        name: "finalise"
                    }) : n.push({
                        status: "not-started",
                        name: "finalise"
                    })) : a && !tk(a) ? n.push({
                        status: "not-started",
                        name: "finalise"
                    }) : l ? n.push({
                        status: "done",
                        name: "finalise"
                    }) : n.push({
                        status: "in-progress",
                        name: "finalise"
                    }), n
                },
                tA = e => {
                    let {
                        tx: t
                    } = e, a = to(t), l = tl(t), s = tx("TransactionDetails"), i = ti(t), n = e9(t, a), d = tI(t), r = e5(t), o = tS(t), c = tF(t), m = ts(t), h = tu(m);
                    return (0, u.jsxs)("div", {
                        className: "bg-card w-full rounded-xl flex gap-2.5 lg:gap-3 p-6 pb-5 lg:p-8 lg:pb-7 relative",
                        role: "button",
                        tabIndex: 0,
                        onClick: e => {
                            e.stopPropagation(), s.open(eV(t))
                        },
                        children: [t.mock && (0, u.jsx)("div", {
                            className: "absolute left-4 bottom-4 text-purple-500 text-xs opacity-30",
                            children: "•"
                        }), (0, u.jsx)(tg, {
                            token: null != a ? a : null,
                            className: "h-10 w-10 lg:h-12 lg:w-12 shrink-0 lg:mt-1"
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col w-full gap-3",
                            children: [(0, u.jsxs)("div", {
                                className: "flex justify-between items-start",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-1 lg:gap-0",
                                    children: [(0, u.jsx)("span", {
                                        className: "text-xs lg:text-sm text-muted-foreground leading-none",
                                        children: i ? "".concat((0, e3.D)(i), " ago") : "Just now"
                                    }), (0, u.jsx)("span", {
                                        className: "text-2xl lg:text-3xl leading-none",
                                        children: null == n ? void 0 : n.text
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-center -mt-1 lg:mt-0.5 gap-2",
                                    children: [(0, u.jsxs)("span", {
                                        className: "text-xs text-right text-muted-foreground",
                                        children: [(0, u.jsx)("span", {
                                            className: "hidden md:inline",
                                            children: "Via"
                                        }), " ", h]
                                    }), "OptimismForcedWithdrawal" === m && (0, u.jsx)("div", {
                                        className: "bg-muted rounded-full px-1 flex items-center gap-1",
                                        children: (0, u.jsx)(eJ.qc, {
                                            className: "w-6 h-6 shrink-0"
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, u.jsx)(tf.d, {
                                            chain: null == l ? void 0 : l.from,
                                            className: "h-5 w-5 rounded-xs shadow-sm"
                                        }), (0, u.jsx)(tf.d, {
                                            chain: null == l ? void 0 : l.to,
                                            className: "h-5 w-5 rounded-xs -ml-0.5 s shadow-sm"
                                        })]
                                    })]
                                })]
                            }), o && (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)("div", {
                                    children: (0, u.jsx)("div", {
                                        className: "w-full flex items-center gap-1",
                                        children: c.map(e => (0, u.jsx)("div", {
                                            className: (0, x.Z)("w-full h-1.5 rounded-full", "done" === e.status && "bg-primary", "in-progress" === e.status && "bg-primary animate-pulse", "not-started" === e.status && "bg-muted")
                                        }, "".concat(t.id, "-").concat(e.name)))
                                    })
                                }), (0, u.jsx)(tC, {
                                    tx: t
                                })]
                            }), d && (0, u.jsx)("div", {
                                className: "flex justify-between items-center",
                                children: (0, u.jsxs)("div", {
                                    className: "flex gap-2 items-center rounded-full border pl-2 pr-3 py-1.5",
                                    children: [(0, u.jsx)(eJ.Bu, {
                                        className: "fill-primary w-4 h-4"
                                    }), (0, u.jsx)("span", {
                                        className: "text-xs lg:text-sm",
                                        children: "Bridge successful"
                                    })]
                                })
                            }), r && (0, u.jsx)("div", {
                                className: "flex justify-between items-center",
                                children: (0, u.jsxs)("div", {
                                    className: "flex gap-2 items-center rounded-full border pl-2 pr-3 py-1.5",
                                    children: [(0, u.jsx)(eJ.xm, {
                                        className: "fill-destructive w-4 h-4"
                                    }), (0, u.jsx)("span", {
                                        className: "text-xs lg:text-sm",
                                        children: "Bridge expired & returned"
                                    })]
                                })
                            })]
                        })]
                    }, t.id)
                },
                tT = {
                    hidden: {
                        y: "5vh",
                        opacity: 0,
                        transition: {
                            type: "easeIn",
                            duration: .15
                        }
                    },
                    show: {
                        opacity: 1,
                        y: "0vh",
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 16,
                            staggerChildren: .05,
                            delayChildren: .1
                        }
                    }
                },
                tD = {
                    hidden: {
                        opacity: 0,
                        y: 20,
                        scale: 1
                    },
                    show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 12
                        }
                    }
                },
                tM = e => {
                    let {} = e, {
                        ref: t,
                        inView: a
                    } = (0, j.YD)({
                        threshold: .9,
                        delay: 300
                    }), l = (0, w.m)(), s = er.useSetDisplayTransactions(), i = eU.useTransactions(), {
                        transactions: n,
                        isLoading: d,
                        isFetchingNextPage: r,
                        isError: o,
                        fetchNextPage: c,
                        total: m
                    } = eN(), {
                        t: h
                    } = (0, g.$G)(), v = C();
                    eq();
                    let y = eX(),
                        k = !!(0, N.I)().find(e => "base" === e.name),
                        I = !!(0, N.I)().find(e => "soneium-minato" === e.name);
                    return (0, f.useEffect)(() => {
                        o || r || d || 0 === m || m === n.length || !a || c()
                    }, [a, o, c, r, d, m, n]), (0, u.jsxs)("main", {
                        className: "flex items-start justify-center scroll-smooth overflow-y-scroll w-screen h-dvh fixed inset-0 px-2 md:px-0 py-16 md:py-20 z-[25]",
                        onClick: () => {
                            s(!1), y({
                                event: "close-activity"
                            })
                        },
                        children: [(0, u.jsx)(p.E.button, {
                            initial: {
                                opacity: 0,
                                scale: .1
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .1
                            },
                            whileHover: {
                                scale: 1.1
                            },
                            className: "flex items-center cursor-pointer w-10 h-10 shrink-0 flex items-center justify-center rounded-full shadow-sm bg-card fixed top-6 right-6 z-10",
                            children: (0, u.jsx)(eJ.bM, {
                                className: "fill-foreground w-3.5 h-3.5"
                            })
                        }, "close-activity-button"), (0, u.jsxs)(p.E.div, {
                            variants: tT,
                            initial: "hidden",
                            animate: "show",
                            exit: "hidden",
                            className: "flex flex-col items-center gap-10 w-full",
                            children: [(0, u.jsxs)("div", {
                                className: (0, x.Z)(l.address && "pl-6 pr-3.5", "flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-sm"),
                                children: [(0, u.jsx)("h1", {
                                    className: "text-2xl font-heading leading-none",
                                    children: h("activity.activity")
                                }), l.address && (0, u.jsxs)("span", {
                                    className: "bg-muted rounded-full text-xs text-muted-foreground px-3 py-1 h-6",
                                    children: [l.address.slice(0, 4), "…", l.address.slice(l.address.length - 4)]
                                })]
                            }), (0, b.EQ)({
                                statusCheck: v,
                                isError: o,
                                isLoading: d,
                                transactions: n,
                                account: l,
                                pendingTransactions: i
                            }).with({
                                account: {
                                    address: void 0
                                }
                            }, () => (0, u.jsx)("div", {
                                className: "flex px-6 py-3 shadow-sm rounded-full justify-center items-center h-full bg-card",
                                children: (0, u.jsx)("span", {
                                    className: "text-muted-foreground text-sm",
                                    children: h("activity.connectWallet")
                                })
                            })).with({
                                isLoading: !0
                            }, () => (0, u.jsx)("div", {
                                className: "flex px-6 py-3 shadow-sm rounded-full justify-center items-center h-full bg-card",
                                children: (0, u.jsx)("span", {
                                    className: "text-muted-foreground text-sm",
                                    children: (0, u.jsx)(eJ.vM, {
                                        className: "h-6 w-6"
                                    })
                                })
                            })).with({
                                isError: !0
                            }, () => (0, u.jsx)("div", {
                                className: "flex px-6 py-3 shadow-sm rounded-full justify-center items-center h-full bg-card",
                                children: (0, u.jsxs)("span", {
                                    className: "text-muted-foreground text-sm",
                                    children: [h("activity.error"), "…"]
                                })
                            })).with({
                                statusCheck: !0
                            }, () => (0, u.jsx)("div", {
                                className: "flex px-6 py-3 shadow-sm rounded-full justify-center items-center h-full bg-card",
                                children: (0, u.jsxs)("span", {
                                    className: "text-muted-foreground text-sm",
                                    children: [h("activity.error"), "."]
                                })
                            })).with({
                                transactions: b.P.any,
                                pendingTransactions: b.P.any
                            }, e => {
                                let {
                                    transactions: a,
                                    pendingTransactions: l
                                } = e;
                                return 0 === a.length && 0 === l.length ? (0, u.jsx)("div", {
                                    className: "flex px-6 py-3 shadow-sm rounded-full justify-center items-center h-full bg-card",
                                    children: (0, u.jsx)("span", {
                                        className: "text-muted-foreground text-sm",
                                        children: h("activity.noTransactions")
                                    })
                                }) : (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-3 lg:gap-4 w-full px-2 max-w-xl",
                                    children: [k && (0, u.jsx)(p.E.div, {
                                        variants: tD,
                                        className: "relative w-full h-full flex flex-col shrink-0 overflow-hidden rounded-3xl shadow-sm",
                                        children: (0, u.jsx)(e1, {}, "base-fault-proof-banner")
                                    }, "base-fault-proof-banner-container"), I && (0, u.jsx)(p.E.div, {
                                        variants: tD,
                                        className: "relative w-full h-full flex flex-col shrink-0 overflow-hidden rounded-3xl shadow-sm",
                                        children: (0, u.jsx)(e2, {}, "soneium-fault-proof-banner")
                                    }, "soneium-fault-proof-banner-container"), [...l, ...a].map(e => (0, u.jsx)(p.E.div, {
                                        variants: tD,
                                        whileHover: {
                                            opacity: 1,
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            opacity: 1,
                                            scale: .98
                                        },
                                        className: "relative w-full h-full flex flex-col shrink-0 overflow-hidden rounded-3xl shadow-sm cursor-pointer",
                                        children: (0, u.jsx)(tA, {
                                            tx: e
                                        }, e.id)
                                    }, "activity-".concat(eV(e)))), (0, u.jsx)("span", {
                                        ref: t
                                    }), a.length !== m && (0, u.jsx)("div", {
                                        className: "flex justify-center items-center p-3",
                                        children: (0, u.jsx)("div", {
                                            className: "bg-card px-5 py-3 flex gap-1 items-center rounded-full hover:scale-105 transition-all",
                                            children: r ? (0, u.jsxs)(u.Fragment, {
                                                children: [(0, u.jsx)(eJ.vM, {
                                                    className: "w-3 h-3 block text-foreground"
                                                }), (0, u.jsx)("span", {
                                                    className: "text-sm text-foreground leading-none font-heading",
                                                    children: h("loading")
                                                })]
                                            }) : (0, u.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), c()
                                                },
                                                className: "text-sm text-foreground leading-none font-heading",
                                                children: h("loadMore")
                                            })
                                        })
                                    })]
                                })
                            }).otherwise(() => null)]
                        })]
                    }, "bridgeMain")
                };
            var tE = a(91708),
                tz = a(31865);
            let tH = () => {
                let {
                    transactions: e
                } = eN(), t = eU.useRemoveFinalising(), a = eU.useRemoveProving(), l = eU.useRemoveTransactionByHash();
                (0, f.useEffect)(() => {
                    e.forEach(e => {
                        let s = eV(e);
                        if (s && l(s), ek(e) && (eT(e) && e.prove && a(e.id), e.finalise && t(e.id)), eI(e)) {
                            var i, n;
                            eD(e) && (null === (n = e.withdrawal) || void 0 === n ? void 0 : n.prove) && a(e.id), (null === (i = e.withdrawal) || void 0 === i ? void 0 : i.finalise) && t(e.id)
                        }
                    })
                }, [e, l, a, t])
            };
            var tR = a(13339);
            let tB = () => {
                let e = (0, eh.kX)(),
                    t = (0, w.m)(),
                    a = (0, tR.t)({
                        chainId: null == e ? void 0 : e.id
                    });
                return (0, Q.a)({
                    queryKey: ["useIsContractAccount", t.address, null == a ? void 0 : a.chain.id, null == e ? void 0 : e.id],
                    queryFn: () => {
                        if (!(null == e ? void 0 : e.id)) throw Error("From chain not initialised");
                        if (!t.address) throw Error("No account connected");
                        return null == a ? void 0 : a.getBytecode({
                            address: t.address
                        }).then(e => !!e)
                    },
                    enabled: !!t.address
                })
            };
            var tP = a(82775);
            let tO = () => {
                let e = (0, h.useRouter)(),
                    t = er.useSetToken(),
                    a = er.useSetRawAmount(),
                    l = (0, tz.C)(),
                    s = (0, eh.kX)(),
                    i = (0, eh.W)(),
                    n = ei();
                (0, f.useEffect)(() => {
                    var l;
                    let d;
                    if (!(null === (l = n.data) || void 0 === l ? void 0 : l.length) || !s || !i) return;
                    let r = e.query.amount;
                    r && parseFloat(r) && a(r);
                    let [o, c] = e.asPath.split(/[?\/]/).filter(Boolean);
                    if ((o || o) && !o.includes("&"))(d = n.data.find(e => {
                        let t = e[s.id],
                            a = e[i.id];
                        if (t && a) {
                            if (o) {
                                if ((0, tP.U)(o)) return (0, en.E)(o, t.address);
                                if (o.toLowerCase() === t.symbol.toLowerCase()) return !0
                            }
                            if (c) return (0, tP.U)(c) ? (0, en.E)(c, t.address) : c.toLowerCase() === t.symbol.toLowerCase()
                        }
                    })) && t(d);
                    else {
                        let a = e.query.tokenAddress;
                        a && (d = n.data.find(e => {
                            let t = e[s.id],
                                l = e[i.id];
                            return !!t && !!l && ((0, tP.U)(a) ? (0, en.E)(a, t.address) : void 0)
                        })), d && t(d)
                    }
                }, [e.asPath, l, n])
            };
            var t_ = a(69261),
                tZ = a(32350),
                tG = a(17316);
            let tW = ["https://eth.llamarpc.com", "https://cloudflare-eth.com"],
                tY = () => (0, t_.v)({
                    chain: R.R,
                    transport: (0, tZ.t)(tW.map(e => (0, tG.d)(e)))
                }),
                tV = async e => {
                    let t = tY(),
                        a = await Promise.all([t.getEnsAddress({
                            name: e
                        }), t.getEnsAvatar({
                            name: e
                        })]).catch(() => null);
                    if (null == a ? void 0 : a[0]) {
                        let [t, l] = a;
                        return {
                            name: e,
                            address: t,
                            avatar: l
                        }
                    }
                    return null
                }, t$ = async e => {
                    let t = tY(),
                        a = await t.getEnsName({
                            address: e
                        }).catch(() => null);
                    if (a) {
                        let l = await Promise.all([t.getEnsAddress({
                            name: a
                        }), t.getEnsAvatar({
                            name: a
                        })]).catch(() => null);
                        if (l) {
                            let [t, s] = l;
                            return t && !(0, en.E)(e, t) ? null : {
                                name: a,
                                address: e,
                                avatar: s
                            }
                        }
                    }
                    return null
                }, tU = () => {
                    let e = (0, h.useRouter)(),
                        t = (0, w.m)(),
                        a = tB(),
                        l = er.useSetRecipientName(),
                        s = er.useSetRecipientAddress();
                    (0, f.useEffect)(() => {
                        let i = e.query.recipient;
                        if (i) {
                            (0, tP.U)(i) ? (s(i), t$(i).then(e => {
                                (null == e ? void 0 : e.name) ? l(e.name): l("")
                            })) : i.endsWith(".eth") && (l(i), tV(i).then(e => {
                                (null == e ? void 0 : e.address) ? s(null == e ? void 0 : e.address): s("")
                            }));
                            return
                        }
                        if (!t.address) {
                            l(""), s("");
                            return
                        }!1 === a.data && t.address && (s(t.address), t$(t.address).then(e => {
                            (null == e ? void 0 : e.name) ? l(e.name): l("")
                        })), !0 === a.data && (s(""), l(""))
                    }, [a.data, t.address])
                }, tq = () => {
                    let e = tB(),
                        t = (0, tz.C)(),
                        a = er.useSetEasyMode(),
                        l = er.useSetForceViaL1(),
                        s = eU.useLogout();
                    tU(), tH(), tO(), (0, tE.E)({
                        onDisconnect: () => {
                            s()
                        }
                    }), (0, f.useEffect)(() => {
                        !0 === e.data && l(!1)
                    }, [e.data]), (0, f.useEffect)(() => {
                        if (!t) {
                            a(!1), l(!1);
                            return
                        }
                        if (!(0, tp.mC)(t)) {
                            a(!1);
                            return
                        }
                        if (!(0, tp.uH)(t)) {
                            l(!1);
                            return
                        }
                    }, [t])
                };
            var tK = a(19277),
                tX = a(20545),
                tQ = a(1883);

            function tJ() {
                let e = er.useSetToken(),
                    t = (0, N.I)(),
                    a = (0, I.SZ)(e => e.superbridgeConfig),
                    l = (0, I.SZ)(e => e.setFromChainId),
                    s = (0, I.SZ)(e => e.setToChainId),
                    i = eX(),
                    n = es(),
                    d = async () => {
                        let {
                            deploymentName: d,
                            symbol: r
                        } = a.banner, o = t.find(e => e.name === d);
                        o && (i({
                            event: "token-banner-click",
                            symbol: r
                        }), l(o.l1ChainId), s(o.l2ChainId), setTimeout(() => {
                            var t;
                            let a = null === (t = n.data) || void 0 === t ? void 0 : t.find(e => {
                                var t;
                                return (null === (t = e[1]) || void 0 === t ? void 0 : t.symbol) === r
                            });
                            if (a) {
                                let t = a[o.l1ChainId],
                                    l = a[o.l2ChainId];
                                t && l && e(a)
                            }
                        }, 500))
                    };
                return (null == a ? void 0 : a.banner) ? (0, u.jsx)("div", {
                    className: "absolute left-1/2 top-[72px] md:top-7 -translate-x-1/2 -translate-y-1.5 md:translate-y-0.5",
                    children: (0, u.jsxs)("button", {
                        className: "relative overflow-hidden backdrop-blur-sm flex items-center gap-1 rounded-full p-1 pr-3 drop-shadow transition-all hover:scale-105",
                        onClick: d,
                        children: [(0, u.jsx)("div", {
                            className: "bg-card opacity-50 dark:opacity-70 absolute inset-0 -z-10"
                        }), (0, u.jsx)("img", {
                            height: 0,
                            width: 0,
                            sizes: "100vw",
                            src: a.banner.image,
                            alt: "Bridge wstETH",
                            className: "rounded-full w-5 h-5 md:w-6 md:h-6"
                        }), (0, u.jsxs)("div", {
                            className: "flex gap-1.5 items-baseline",
                            children: [(0, u.jsxs)("span", {
                                className: "text-xs font-heading tracking-tight",
                                children: ["Bridge ", a.banner.symbol]
                            }), (0, u.jsx)("span", {
                                className: "text-[8px] font-heading tracking-tight opacity-40",
                                children: "Ad"
                            })]
                        })]
                    })
                }) : null
            }
            var t0 = a(95907),
                t1 = a.n(t0),
                t2 = a(69756),
                t3 = a(94690),
                t5 = a(54959),
                t4 = a(78081),
                t8 = a(99361);
            let t7 = t2.fC,
                t6 = t2.xz,
                t9 = t2.ZA;
            t2.Uv, t2.Tr, t2.Ee, f.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: l,
                    children: s,
                    ...i
                } = e;
                return (0, u.jsxs)(t2.fF, {
                    ref: t,
                    className: (0, t8.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-muted data-[state=open]:bg-muted", l && "pl-8", a),
                    ...i,
                    children: [s, (0, u.jsx)(t3.Z, {
                        className: "ml-auto h-4 w-4"
                    })]
                })
            }).displayName = t2.fF.displayName, f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(t2.tu, {
                    ref: t,
                    className: (0, t8.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                    ...l
                })
            }).displayName = t2.tu.displayName;
            let ae = f.forwardRef((e, t) => {
                let {
                    className: a,
                    sideOffset: l = 4,
                    ...s
                } = e;
                return (0, u.jsx)(t2.Uv, {
                    children: (0, u.jsx)(t2.VY, {
                        ref: t,
                        sideOffset: l,
                        className: (0, t8.cn)("z-50 min-w-[12rem] overflow-hidden rounded-[14px] bg-card backdrop-blur-lg p-2 text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                        ...s
                    })
                })
            });
            ae.displayName = t2.VY.displayName;
            let at = f.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: l,
                    ...s
                } = e;
                return (0, u.jsx)(t2.ck, {
                    ref: t,
                    className: (0, t8.cn)("relative flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", l && "pl-8", a),
                    ...s
                })
            });
            at.displayName = t2.ck.displayName, f.forwardRef((e, t) => {
                let {
                    className: a,
                    children: l,
                    checked: s,
                    ...i
                } = e;
                return (0, u.jsxs)(t2.oC, {
                    ref: t,
                    className: (0, t8.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    checked: s,
                    ...i,
                    children: [(0, u.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, u.jsx)(t2.wU, {
                            children: (0, u.jsx)(t5.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), l]
                })
            }).displayName = t2.oC.displayName, f.forwardRef((e, t) => {
                let {
                    className: a,
                    children: l,
                    ...s
                } = e;
                return (0, u.jsxs)(t2.Rk, {
                    ref: t,
                    className: (0, t8.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...s,
                    children: [(0, u.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, u.jsx)(t2.wU, {
                            children: (0, u.jsx)(t4.Z, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), l]
                })
            }).displayName = t2.Rk.displayName;
            let aa = f.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: l,
                    ...s
                } = e;
                return (0, u.jsx)(t2.__, {
                    ref: t,
                    className: (0, t8.cn)("px-2 py-1.5 text-sm font-heading", l && "pl-8", a),
                    ...s
                })
            });
            aa.displayName = t2.__.displayName;
            let al = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(t2.Z0, {
                    ref: t,
                    className: (0, t8.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...l
                })
            });
            al.displayName = t2.Z0.displayName;
            let as = () => {
                    let e = (0, ex.$)();
                    return "hyperlane.superbridge.app" === e || "hl.superbridge.app" === e
                },
                ai = () => {
                    let e = (0, ex.$)();
                    return "lz.superbridge.app" === e || "c196f5f7-6eea-4ec1-8b19-55e15eb0e46f.bridges.rollbridge.app" === e
                },
                an = () => "7f12d692-7c6a-46f9-8a4b-fe89f3ff5285" === (0, ex.Me)();

            function ad() {
                let {
                    t: e
                } = (0, g.$G)(), t = tx("Legal"), a = (0, ex.qD)(), l = (0, S.L4)(), s = ai(), i = as(), n = an(), d = [{
                    onClick: () => t.open(),
                    label: e("legal.footerButton")
                }];
                return (0, u.jsxs)(t7, {
                    children: [(0, u.jsx)(t6, {
                        className: "hidden focus-visible:ring-none focus-visible:outline-none",
                        children: (0, u.jsx)("div", {
                            className: "bg-card h-10 pl-2.5 pr-3 gap-1 inline-flex items-center rounded-full transition-all border-black/[0.0125] dark:border-white/[0.0125]",
                            children: (0, u.jsx)(eJ.dc, {
                                className: "w-6 h-6 fill-foreground"
                            })
                        })
                    }), (0, u.jsx)(ae, {
                        align: "end",
                        side: "bottom",
                        className: "border border-muted w-full max-w-[320px]",
                        children: l || s || i ? (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsxs)(t9, {
                                className: "my-2",
                                children: [(0, u.jsx)(aa, {
                                    className: "text-xs text-muted-foreground",
                                    children: "App"
                                }), [{
                                    url: "https://superbridge.app",
                                    label: "Superbridge"
                                }].map(e => (0, u.jsx)(at, {
                                    children: e.url ? (0, u.jsx)(t1(), {
                                        href: e.url,
                                        target: "_blank",
                                        className: "text-sm w-full",
                                        children: e.label
                                    }) : (0, u.jsx)("button", {
                                        onClick: e.onClick,
                                        className: "text-sm w-full text-left",
                                        children: e.label
                                    })
                                }, e.label))]
                            }), (0, u.jsx)(al, {}), (0, u.jsxs)(t9, {
                                className: "my-2",
                                children: [(0, u.jsx)(aa, {
                                    className: "text-xs text-muted-foreground",
                                    children: "Solutions"
                                }), [{
                                    url: "https://about.superbridge.app/rollies",
                                    label: "Rollups"
                                }, {
                                    url: "https://lz.superbridge.app",
                                    label: "Layer Zero"
                                }, {
                                    url: "https://hyperlane.superbridge.app",
                                    label: "Hyperlane"
                                }].map(e => (0, u.jsx)(at, {
                                    children: e.url ? (0, u.jsx)(t1(), {
                                        href: e.url,
                                        target: "_blank",
                                        className: "text-sm w-full",
                                        children: e.label
                                    }) : (0, u.jsx)("button", {
                                        onClick: e.onClick,
                                        className: "text-sm w-full text-left",
                                        children: e.label
                                    })
                                }, e.label))]
                            }), (0, u.jsx)(al, {}), (0, u.jsxs)(t9, {
                                className: "my-2",
                                children: [(0, u.jsx)(aa, {
                                    className: "text-xs text-muted-foreground",
                                    children: "Support"
                                }), [{
                                    url: "https://docs.superbridge.app/",
                                    label: "Docs"
                                }, {
                                    url: "https://help.superbridge.app",
                                    label: "Help center"
                                }].map(e => (0, u.jsx)(at, {
                                    children: e.url ? (0, u.jsx)(t1(), {
                                        href: e.url,
                                        target: "_blank",
                                        className: "text-sm w-full",
                                        children: e.label
                                    }) : (0, u.jsx)("button", {
                                        onClick: e.onClick,
                                        className: "text-sm w-full text-left",
                                        children: e.label
                                    })
                                }, e.label))]
                            }), (0, u.jsx)(al, {}), (0, u.jsxs)(t9, {
                                className: "my-2",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex gap-2 p-3",
                                    children: [(0, u.jsx)("a", {
                                        href: "https://x.com/",
                                        target: "_blank",
                                        children: (0, u.jsx)(eJ.kL, {
                                            className: "fill-muted-foreground w-6 h-auto hover:scale-105 transition-all"
                                        })
                                    }),  ]
                                }), d.map(e => (0, u.jsx)(at, {
                                    children: e.url ? (0, u.jsx)(t1(), {
                                        href: e.url,
                                        target: "_blank",
                                        className: "text-xs w-full",
                                        children: e.label
                                    }) : (0, u.jsx)("button", {
                                        onClick: e.onClick,
                                        className: "text-xs w-full text-left",
                                        children: e.label
                                    })
                                }, e.label))]
                            })]
                        }) : (0, u.jsxs)(u.Fragment, {
                            children: [0 !== a.links.length && (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(t9, {
                                    className: "my-2",
                                    children: a.links.map(e => (0, u.jsx)(at, {
                                        children: e.url ? (0, u.jsx)(t1(), {
                                            href: e.url,
                                            target: "_blank",
                                            className: "text-sm w-full",
                                            children: e.label
                                        }) : (0, u.jsx)("button", {
                                            onClick: e.onClick,
                                            className: "text-sm w-full text-left",
                                            children: e.label
                                        })
                                    }, e.label))
                                }), (0, u.jsx)(al, {})]
                            }), (0, u.jsxs)(t9, {
                                className: "my-2",
                                children: [(0, u.jsx)(at, {
                                    children: (0, u.jsxs)("a", {
                                        href: "https://help.superbridge.app",
                                        target: "_blank",
                                        className: "text-xs leading-none w-full flex gap-2 items-center",
                                        children: [(0, u.jsx)(eJ.cF, {
                                            className: "h-3 w-auto fill-muted-foreground"
                                        }), (0, u.jsx)("span", {
                                            children: "Support"
                                        })]
                                    })
                                }), (0, u.jsx)(at, {
                                    children: (0, u.jsxs)("button", {
                                        className: "text-xs leading-none w-full flex gap-2 items-center",
                                        onClick: () => t.open(),
                                        children: [(0, u.jsx)(eJ.cF, {
                                            className: "h-3 w-auto fill-muted-foreground"
                                        }), (0, u.jsx)("span", {
                                            children: e("header.legal")
                                        })]
                                    })
                                })]
                            }), !n && (0, u.jsx)(t9, {
                                className: "my-2",
                                children: (0, u.jsx)("div", {
                                    className: "px-2 pr-6",
                                    children: (0, u.jsxs)("a", {
                                        href: "https://superbridge.app",
                                        target: "_blank",
                                        className: " text-[10px] leading-none w-full flex gap-1.5 items-center",
                                        children: [(0, u.jsx)(eJ.BL, {
                                            className: "h-5 w-auto fill-foreground"
                                        }), (0, u.jsx)("span", {
                                            children: e("tos.poweredBy")
                                        })]
                                    })
                                })
                            })]
                        })
                    })]
                })
            }

            function ar() {
                var e;
                let t = (0, N.I)(),
                    a = (0, S.L4)(),
                    l = (0, tK.pF)();
                return (0, tQ.h)() ? null : (0, u.jsxs)("nav", {
                    className: "flex justify-between items-center p-3 md:p-6 fixed top-0 left-0 w-screen z-10",
                    children: [(0, u.jsx)("div", {
                        children: a ? (0, u.jsxs)("div", {
                            className: "flex gap-2 items-center",
                            children: [(0, u.jsx)(eJ.$f, {
                                className: "hidden md:inline-flex h-9 w-auto transform-gpu overflow-visible -ml-1"
                            }), (0, u.jsx)(eJ.Gv, {
                                className: "md:hidden h-9 w-auto -ml-0.5"
                            })]
                        }) : (0, u.jsx)("img", {
                            src: l,
                            width: "0",
                            height: "0",
                            sizes: "100vw",
                            alt: null === (e = t[0]) || void 0 === e ? void 0 : e.name,
                            draggable: !1,
                            className: "inline-flex w-auto max-w-40 h-8"
                        })
                    }), (0, u.jsx)(tJ, {}), (0, u.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0, u.jsx)(tX.NL, {
                            chainStatus: "icon",
                            label: "Connect",
                            showBalance: {
                                smallScreen: !1,
                                largeScreen: !1
                            },
                            accountStatus: {
                                smallScreen: "avatar",
                                largeScreen: "avatar"
                            }
                        }), (0, u.jsx)(ad, {})]
                    })]
                })
            }
            var ao = a(55619);
            let ac = () => (0, u.jsx)("div", {
                    className: "flex items-center justify-center w-6 h-5 bg-card rounded-full shrink-0",
                    children: (0, u.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "6",
                        height: "6",
                        viewBox: "0 0 6 6",
                        fill: "none",
                        className: "w-3 h-auto fill-foreground",
                        children: (0, u.jsx)("path", {
                            d: "M1.21165 1.21175C1.29446 1.12895 1.40318 1.07265 1.52917 1.06818L4.54474 0.881123C4.69278 0.872485 4.85392 0.894229 4.97992 1.02023C5.10592 1.14622 5.12766 1.30737 5.11902 1.4554L4.93196 4.47097C4.92779 4.59727 4.8709 4.70599 4.78839 4.7885C4.59687 4.98002 4.28352 4.98002 4.09199 4.7885C3.99191 4.68841 3.93948 4.55795 3.94842 4.41021L4.05714 2.63941L1.71653 4.98002C1.525 5.17155 1.21165 5.17155 1.02012 4.98002C0.828597 4.7885 0.828597 4.47514 1.02012 4.28362L3.36103 1.94271L1.59023 2.05143C1.4422 2.06007 1.31203 2.00794 1.21195 1.90786C1.02042 1.71633 1.02042 1.40298 1.21195 1.21145L1.21165 1.21175Z"
                        })
                    })
                }),
                au = () => {
                    var e, t;
                    let {
                        t: a
                    } = (0, g.$G)(), l = tx("Legal"), s = (0, tz.C)();
                    return (0, u.jsx)(ao.Vq, {
                        open: l.isOpen,
                        onOpenChange: l.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsx)(ao.fK, {
                                className: "pb-0",
                                children: (0, u.jsx)(ao.$N, {
                                    children: a("legal.title")
                                })
                            }), (0, u.jsx)("div", {
                                className: "flex flex-col gap-6 p-6 pt-8",
                                children: (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(null == s ? void 0 : null === (e = s.tos) || void 0 === e ? void 0 : e.customTermsOfService) && (0, u.jsx)("div", {
                                        children: (0, u.jsxs)(t1(), {
                                            href: "/client-terms",
                                            target: "_blank",
                                            prefetch: !1,
                                            className: "flex justify-between p-4 rounded-lg bg-muted font-heading text-sm hover:scale-105 transition-all",
                                            children: [a("legal.dedicatedTerms", {
                                                name: s.displayName
                                            }), (0, u.jsx)(ac, {})]
                                        })
                                    }), (null == s ? void 0 : null === (t = s.tos) || void 0 === t ? void 0 : t.customTermsOfService) && (0, u.jsx)("div", {
                                        children: (0, u.jsxs)(t1(), {
                                            href: "/client-privacy",
                                            target: "_blank",
                                            prefetch: !1,
                                            className: "flex justify-between p-4 rounded-lg bg-muted font-heading text-sm hover:scale-105 transition-all",
                                            children: [a("legal.dedicatedPrivacy", {
                                                name: s.displayName
                                            }), (0, u.jsx)(ac, {})]
                                        })
                                    }), (0, u.jsx)("div", {
                                        children: (0, u.jsxs)("a", {
                                            href: "https://superbridge.app/terms",
                                            target: "_blank",
                                            className: "flex justify-between p-4 rounded-lg bg-muted font-heading text-sm hover:scale-105 transition-all",
                                            children: [a("legal.superbridgeTerms"), (0, u.jsx)(ac, {})]
                                        })
                                    }), (0, u.jsx)("div", {
                                        children: (0, u.jsxs)("a", {
                                            href: "https://superbridge.app/privacy",
                                            target: "_blank",
                                            className: "flex justify-between p-4 rounded-lg bg-muted font-heading text-sm hover:scale-105 transition-all",
                                            children: [a("legal.superbridgePrivacy"), (0, u.jsx)(ac, {})]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                };
            var am = a(55898);
            let ah = f.forwardRef((e, t) => {
                let {
                    className: a,
                    type: l,
                    ...s
                } = e;
                return (0, u.jsx)("input", {
                    type: l,
                    className: (0, t8.cn)("text-sm  flex h-10 w-full rounded-lg bg-muted px-4 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file: placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border disabled:cursor-not-allowed disabled:opacity-50", a),
                    ref: t,
                    ...s
                })
            });
            ah.displayName = "Input";
            var ax = a(98252),
                ap = a(6539);

            function av(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, u.jsx)("div", {
                    className: (0, t8.cn)("animate-pulse rounded-md bg-muted", t),
                    ...a
                })
            }
            let af = () => {
                let {
                    t: e
                } = (0, g.$G)(), t = (0, ex.AQ)(), a = tx("CustomTokenListImport"), l = K.useCustomTokenLists(), s = K.useSetCustomTokenLists(), [i, n] = (0, f.useState)(""), [d, r] = (0, f.useState)(""), [o] = (0, am.Nr)(d, 400), [c, m] = (0, f.useState)(!1), h = (0, Q.a)({
                    queryKey: ["useTokensImported", o],
                    queryFn: async () => {
                        var e;
                        let t = await fetch(o);
                        if (200 !== t.status) throw Error("Invalid response");
                        let a = await t.json();
                        return null !== (e = null == a ? void 0 : a.tokens.length) && void 0 !== e ? e : 0
                    },
                    retry: !1,
                    enabled: !!o
                }), x = (0, f.useMemo)(() => l.find(e => e.id === a.data), [l, a.data]);
                return (0, f.useEffect)(() => {
                    x ? (n(x.name), r(x.url), m(!0)) : (n(""), r(""), m(!1))
                }, [x]), (0, u.jsx)(ao.Vq, {
                    open: a.isOpen,
                    onOpenChange: a.close,
                    children: (0, u.jsxs)(ao.cZ, {
                        children: [(0, u.jsx)(ao.fK, {
                            className: "p-6 pb-0",
                            children: (0, u.jsx)(ao.$N, {
                                children: "Custom token list"
                            })
                        }), (0, u.jsxs)("div", {
                            className: "p-6 pb-0 flex flex-col gap-4",
                            children: [(0, u.jsxs)("div", {
                                children: [(0, u.jsx)("label", {
                                    htmlFor: "tokenListName",
                                    className: "font-heading text-sm",
                                    children: e("customTokenLists.name")
                                }), (0, u.jsx)(ah, {
                                    id: "tokenListName",
                                    value: i,
                                    onChange: e => n(e.target.value),
                                    placeholder: e("customTokenLists.namePlaceholder")
                                })]
                            }), (0, u.jsxs)("div", {
                                children: [(0, u.jsx)("label", {
                                    htmlFor: "tokenListURL",
                                    className: "font-heading text-sm",
                                    children: e("customTokenLists.url")
                                }), (0, u.jsx)(ah, {
                                    id: "tokenListURL",
                                    value: d,
                                    onChange: e => r(e.target.value),
                                    placeholder: e("customTokenLists.urlPlaceholder")
                                }), h.isFetching ? (0, u.jsx)("div", {
                                    className: "py-2",
                                    children: (0, u.jsx)(av, {
                                        className: "h-4 w-[88px]"
                                    })
                                }) : o && h.isError ? h.isError && (0, u.jsx)("span", {
                                    className: "py-2 text-red-500 text-xs",
                                    children: e("customTokenLists.invalid")
                                }) : o ? (0, u.jsx)("span", {
                                    className: "py-2 text-green-500 text-xs",
                                    children: e("customTokenLists.loadedTokens", {
                                        num: h.data
                                    })
                                }) : (0, u.jsx)(u.Fragment, {})]
                            })]
                        }), (0, u.jsx)("div", {
                            className: "p-6 pb-0",
                            children: (0, u.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, u.jsx)(ap.X, {
                                    id: "tokenListAgree",
                                    checked: c,
                                    onCheckedChange: e => m(e)
                                }), (0, u.jsxs)("label", {
                                    htmlFor: "tokenListAgree",
                                    className: "text-[11px] text-muted-foreground ",
                                    children: [e("customTokenLists.disclaimer", {
                                        app: t.head.title
                                    }), " ", (0, u.jsx)("a", {
                                        target: "_blank",
                                        href: "https://docs.superbridge.app/custom-tokens",
                                        children: e("customTokenLists.learnMore")
                                    })]
                                })]
                            })
                        }), (0, u.jsxs)("div", {
                            className: "p-6 flex flex-col gap-2",
                            children: [(0, u.jsx)(ax.z, {
                                onClick: () => {
                                    x ? s(l.map(e => e.id === x.id ? {
                                        ...e,
                                        name: i,
                                        url: d
                                    } : e)) : s([...l, {
                                        id: Math.random().toString(),
                                        name: i,
                                        url: d,
                                        enabled: !0
                                    }]), a.close()
                                },
                                disabled: !i || !d || !c || "number" != typeof h.data,
                                children: e("customTokenLists.save")
                            }), !!x && (0, u.jsx)(ax.z, {
                                onClick: () => {
                                    x && (s(l.filter(e => e.id !== x.id)), a.close())
                                },
                                disabled: !i || !d || !c,
                                children: e("customTokenLists.delete")
                            })]
                        })]
                    })
                })
            };
            var ag = a(64848),
                aj = a(90808),
                ab = a(84194),
                aw = a(76773);
            let aN = aj.fC;
            aj.ZA;
            let ay = aj.B4,
                aC = f.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: l,
                        ...s
                    } = e;
                    return (0, u.jsxs)(aj.xz, {
                        ref: t,
                        className: (0, t8.cn)("flex h-10 w-full items-center justify-between rounded-[14px] border bg-card px-3 py-2 text-sm   placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", a),
                        ...s,
                        children: [l, (0, u.jsx)(aj.JO, {
                            asChild: !0,
                            children: (0, u.jsx)(ab.Z, {
                                className: "h-4 w-4"
                            })
                        })]
                    })
                });
            aC.displayName = aj.xz.displayName;
            let ak = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(aj.u_, {
                    ref: t,
                    className: (0, t8.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...l,
                    children: (0, u.jsx)(aw.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            ak.displayName = aj.u_.displayName;
            let aI = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(aj.$G, {
                    ref: t,
                    className: (0, t8.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...l,
                    children: (0, u.jsx)(ab.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            aI.displayName = aj.$G.displayName;
            let aS = f.forwardRef((e, t) => {
                let {
                    className: a,
                    children: l,
                    position: s = "popper",
                    ...i
                } = e;
                return (0, u.jsx)(aj.h_, {
                    children: (0, u.jsxs)(aj.VY, {
                        ref: t,
                        className: (0, t8.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[14px] border bg-card backdrop-blur-lg text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === s && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                        position: s,
                        ...i,
                        children: [(0, u.jsx)(ak, {}), (0, u.jsx)(aj.l_, {
                            className: (0, t8.cn)("p-1", "popper" === s && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: l
                        }), (0, u.jsx)(aI, {})]
                    })
                })
            });
            aS.displayName = aj.VY.displayName, f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(aj.__, {
                    ref: t,
                    className: (0, t8.cn)("py-1.5 pl-8 pr-2 text-sm font-heading", a),
                    ...l
                })
            }).displayName = aj.__.displayName;
            let aL = f.forwardRef((e, t) => {
                let {
                    className: a,
                    children: l,
                    ...s
                } = e;
                return (0, u.jsxs)(aj.ck, {
                    ref: t,
                    className: (0, t8.cn)(" relative flex w-full cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...s,
                    children: [(0, u.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, u.jsx)(aj.wU, {
                            children: (0, u.jsx)(t5.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, u.jsx)(aj.eT, {
                        children: l
                    })]
                })
            });
            aL.displayName = aj.ck.displayName, f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(aj.Z0, {
                    ref: t,
                    className: (0, t8.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...l
                })
            }).displayName = aj.Z0.displayName;
            let aF = {
                    AED: "د.إ",
                    AFN: "؋",
                    ALL: "L",
                    AMD: "֏",
                    ANG: "ƒ",
                    AOA: "Kz",
                    ARS: "$",
                    AUD: "$",
                    AWG: "ƒ",
                    AZN: "₼",
                    BAM: "KM",
                    BBD: "$",
                    BDT: "৳",
                    BGN: "лв",
                    BHD: ".د.ب",
                    BIF: "FBu",
                    BMD: "$",
                    BND: "$",
                    BOB: "$b",
                    BOV: "BOV",
                    BRL: "R$",
                    BSD: "$",
                    BTC: "₿",
                    BTN: "Nu.",
                    BWP: "P",
                    BYN: "Br",
                    BYR: "Br",
                    BZD: "BZ$",
                    CAD: "$",
                    CDF: "FC",
                    CHE: "CHE",
                    CHF: "CHF",
                    CHW: "CHW",
                    CLF: "CLF",
                    CLP: "$",
                    CNH: "\xa5",
                    CNY: "\xa5",
                    COP: "$",
                    COU: "COU",
                    CRC: "₡",
                    CUC: "$",
                    CUP: "₱",
                    CVE: "$",
                    CZK: "Kč",
                    DJF: "Fdj",
                    DKK: "kr",
                    DOP: "RD$",
                    DZD: "دج",
                    EEK: "kr",
                    EGP: "\xa3",
                    ERN: "Nfk",
                    ETB: "Br",
                    ETH: "Ξ",
                    EUR: "€",
                    FJD: "$",
                    FKP: "\xa3",
                    GBP: "\xa3",
                    GEL: "₾",
                    GGP: "\xa3",
                    GHC: "₵",
                    GHS: "GH₵",
                    GIP: "\xa3",
                    GMD: "D",
                    GNF: "FG",
                    GTQ: "Q",
                    GYD: "$",
                    HKD: "$",
                    HNL: "L",
                    HRK: "kn",
                    HTG: "G",
                    HUF: "Ft",
                    IDR: "Rp",
                    ILS: "₪",
                    IMP: "\xa3",
                    INR: "₹",
                    IQD: "ع.د",
                    IRR: "﷼",
                    ISK: "kr",
                    JEP: "\xa3",
                    JMD: "J$",
                    JOD: "JD",
                    JPY: "\xa5",
                    KES: "KSh",
                    KGS: "лв",
                    KHR: "៛",
                    KMF: "CF",
                    KPW: "₩",
                    KRW: "₩",
                    KWD: "KD",
                    KYD: "$",
                    KZT: "₸",
                    LAK: "₭",
                    LBP: "\xa3",
                    LKR: "₨",
                    LRD: "$",
                    LSL: "M",
                    LTC: "Ł",
                    LTL: "Lt",
                    LVL: "Ls",
                    LYD: "LD",
                    MAD: "MAD",
                    MDL: "lei",
                    MGA: "Ar",
                    MKD: "ден",
                    MMK: "K",
                    MNT: "₮",
                    MOP: "MOP$",
                    MRO: "UM",
                    MRU: "UM",
                    MUR: "₨",
                    MVR: "Rf",
                    MWK: "MK",
                    MXN: "$",
                    MXV: "MXV",
                    MYR: "RM",
                    MZN: "MT",
                    NAD: "$",
                    NGN: "₦",
                    NIO: "C$",
                    NOK: "kr",
                    NPR: "₨",
                    NZD: "$",
                    OMR: "﷼",
                    PAB: "B/.",
                    PEN: "S/.",
                    PGK: "K",
                    PHP: "₱",
                    PKR: "₨",
                    PLN: "zł",
                    PYG: "Gs",
                    QAR: "﷼",
                    RMB: "￥",
                    RON: "lei",
                    RSD: "Дин.",
                    RUB: "₽",
                    RWF: "R₣",
                    SAR: "﷼",
                    SBD: "$",
                    SCR: "₨",
                    SDG: "ج.س.",
                    SEK: "kr",
                    SGD: "S$",
                    SHP: "\xa3",
                    SLL: "Le",
                    SOS: "S",
                    SRD: "$",
                    SSP: "\xa3",
                    STD: "Db",
                    STN: "Db",
                    SVC: "$",
                    SYP: "\xa3",
                    SZL: "E",
                    THB: "฿",
                    TJS: "SM",
                    TMT: "T",
                    TND: "د.ت",
                    TOP: "T$",
                    TRL: "₤",
                    TRY: "₺",
                    TTD: "TT$",
                    TVD: "$",
                    TWD: "NT$",
                    TZS: "TSh",
                    UAH: "₴",
                    UGX: "USh",
                    USD: "$",
                    UYI: "UYI",
                    UYU: "$U",
                    UYW: "UYW",
                    UZS: "лв",
                    VEF: "Bs",
                    VES: "Bs.S",
                    VND: "₫",
                    VUV: "VT",
                    WST: "WS$",
                    XAF: "FCFA",
                    XBT: "Ƀ",
                    XCD: "$",
                    XOF: "CFA",
                    XPF: "₣",
                    XSU: "Sucre",
                    XUA: "XUA",
                    YER: "﷼",
                    ZAR: "R",
                    ZMW: "ZK",
                    ZWD: "Z$",
                    ZWL: "$"
                },
                aA = {
                    AUD: "\uD83C\uDDE6\uD83C\uDDFA",
                    BRL: "\uD83C\uDDE7\uD83C\uDDF7",
                    CAD: "\uD83C\uDDE8\uD83C\uDDE6",
                    CHF: "\uD83C\uDDE8\uD83C\uDDED",
                    EUR: "\uD83C\uDDEA\uD83C\uDDFA",
                    GBP: "\uD83C\uDDEC\uD83C\uDDE7",
                    HKD: "\uD83C\uDDED\uD83C\uDDF0",
                    JPY: "\uD83C\uDDEF\uD83C\uDDF5",
                    NZD: "\uD83C\uDDF3\uD83C\uDDFF",
                    USD: "\uD83C\uDDFA\uD83C\uDDF8"
                };
            var aT = a(59765);
            let aD = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(aT.fC, {
                    className: (0, t8.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted", a),
                    ...l,
                    ref: t,
                    children: (0, u.jsx)(aT.bU, {
                        className: (0, t8.cn)("pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0  data-[state=checked]:bg-primary-foreground data-[state=unchecked]:bg-muted-foreground")
                    })
                })
            });
            aD.displayName = aT.fC.displayName;
            let aM = () => {
                    let e = tx("CustomWarpRoutes");
                    return (0, u.jsx)("div", {
                        className: "flex flex-col p-4 gap-3",
                        children: (0, u.jsxs)("div", {
                            className: "flex items-center justify-between cursor-pointer",
                            children: [(0, u.jsxs)("div", {
                                className: "flex gap-2 items-center",
                                children: [(0, u.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "59",
                                    height: "54",
                                    viewBox: "0 0 59 54",
                                    fill: "none",
                                    className: "w-6 h-6 fill-primary",
                                    children: [(0, u.jsx)("path", {
                                        d: "M34.7367 0.5H45.5217C46.9931 0.5 48.3096 1.3544 48.8232 2.64275L58.2898 26.387C58.3628 26.5702 58.3637 26.7717 58.2922 26.9554L58.2392 27.0918L58.2387 27.0932L48.8119 51.3324C48.3059 52.6337 46.9824 53.5 45.5007 53.5H34.7172C34.1108 53.5 33.6858 52.9408 33.8856 52.4058L43.6058 26.387L33.9094 1.60557C33.6993 1.0686 34.1248 0.5 34.7367 0.5Z"
                                    }), (0, u.jsx)("path", {
                                        d: "M6.58337 0.5H17.3684C18.8398 0.5 20.1563 1.3544 20.6699 2.64275L30.1364 26.387C30.2095 26.5702 30.2103 26.7717 30.1389 26.9554L30.0858 27.0918L30.0853 27.0932L20.6586 51.3324C20.1526 52.6337 18.8291 53.5 17.3474 53.5H6.56391C5.9575 53.5 5.53249 52.9408 5.73234 52.4058L15.4525 26.387L5.75614 1.60557C5.54604 1.0686 5.97149 0.5 6.58337 0.5Z"
                                    }), (0, u.jsx)("path", {
                                        d: "M42.0551 21.3257H26.8302V32.8121H42.0551L44.5428 26.9048L42.0551 21.3257Z"
                                    }), (0, u.jsx)("path", {
                                        d: "M29.4766 0.5H40.2616C41.733 0.5 43.0495 1.3544 43.5631 2.64275L53.0297 26.387C53.1027 26.5702 53.1036 26.7717 53.0321 26.9554L52.9791 27.0918L52.9786 27.0932L43.5518 51.3324C43.0458 52.6337 41.7223 53.5 40.2405 53.5H29.4571C28.8507 53.5 28.4257 52.9408 28.6255 52.4058L38.3457 26.387L28.6493 1.60557C28.4392 1.0686 28.8647 0.5 29.4766 0.5Z"
                                    }), (0, u.jsx)("path", {
                                        d: "M1.32326 0.5H12.1083C13.5797 0.5 14.8962 1.3544 15.4098 2.64275L24.8763 26.387C24.9493 26.5702 24.9502 26.7717 24.8788 26.9554L24.8257 27.0918L24.8252 27.0932L15.3985 51.3324C14.8924 52.6337 13.569 53.5 12.0872 53.5H1.3038C0.697388 53.5 0.272377 52.9408 0.472231 52.4058L10.1924 26.387L0.496032 1.60557C0.285933 1.0686 0.711384 0.5 1.32326 0.5Z"
                                    }), (0, u.jsx)("path", {
                                        d: "M36.795 21.3257H21.5701V32.8121H36.795L39.2827 26.9048L36.795 21.3257Z"
                                    })]
                                }), (0, u.jsx)("h3", {
                                    className: "font-heading text-sm",
                                    children: "Warp routes"
                                })]
                            }), (0, u.jsx)(ax.z, {
                                onClick: () => e.open(),
                                size: "xs",
                                children: "Customize"
                            })]
                        })
                    })
                },
                aE = () => {
                    let [e, t] = (0, f.useState)(!1), a = K.useCustomTokenLists(), l = K.useSetCustomTokenLists(), s = tx("CustomTokenListImport"), {
                        t: i,
                        i18n: n
                    } = (0, g.$G)(), d = (e, t) => {
                        l(a.map(a => a.name === e.name ? {
                            ...a,
                            enabled: t
                        } : a))
                    };
                    return (0, u.jsxs)("div", {
                        className: "flex flex-col p-4 gap-3",
                        children: [(0, u.jsxs)("div", {
                            className: "flex items-center justify-between cursor-pointer",
                            onClick: () => t(e => !e),
                            children: [(0, u.jsxs)("div", {
                                className: "flex gap-2 items-center",
                                children: [(0, u.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 18",
                                    fill: "none",
                                    className: "w-6 h-6",
                                    children: [(0, u.jsxs)("g", {
                                        clipPath: "url(#clip0_1003_5967)",
                                        children: [(0, u.jsx)("path", {
                                            d: "M0 0.992399V16.7759C0 17.3487 0.41958 17.7683 0.992399 17.7683H18.6768C19.2496 17.7683 19.4831 17.3816 19.6254 17.0058L23.9343 5.19915C24.1897 4.54606 23.6351 3.97324 22.9857 3.97324H19.5379V2.53572C19.5379 1.96291 19.1183 1.54333 18.5455 1.54333H9.59927V0.992399C9.59927 0.41958 9.17969 0 8.60687 0H0.992399C0.41958 0 0 0.41958 0 0.992399Z",
                                            fill: "#CBCCBE"
                                        }), (0, u.jsx)("path", {
                                            d: "M1.62359 16.4476L5.68805 5.30134H22.4895L18.4251 16.4476H1.62359ZM0 16.7796C0 17.3524 0.41958 17.772 0.992399 17.772H18.6768C19.2496 17.772 19.4831 17.3853 19.6254 17.0095L23.9343 5.20283C24.1897 4.54975 23.6351 3.97693 22.9857 3.97693H19.5379V2.53941C19.5379 1.96659 19.1183 1.54701 18.5455 1.54701H9.59927V0.996085C9.59927 0.423266 9.17969 0.00368572 8.60687 0.00368572H0.992399C0.41958 3.71953e-05 0 0.419618 0 0.992436V16.776V16.7796ZM4.48404 4.73947L1.32441 13.3974V1.32445H8.27121V2.09794C8.27121 2.52847 8.61417 2.87143 9.04469 2.87143H18.2134V3.97693H5.43265C4.85984 3.97693 4.62633 4.36367 4.48404 4.73947Z",
                                            fill: "black"
                                        })]
                                    }), (0, u.jsx)("defs", {
                                        children: (0, u.jsx)("clipPath", {
                                            id: "clip0_1003_5967",
                                            children: (0, u.jsx)("rect", {
                                                width: "24",
                                                height: "17.772",
                                                fill: "white"
                                            })
                                        })
                                    })]
                                }), (0, u.jsx)("h3", {
                                    className: "font-heading text-sm",
                                    children: i("settings.tokenLists")
                                })]
                            }), (0, u.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "h-4 w-4 opacity-50 mr-3 ".concat(e ? "rotate-180" : "rotate-0"),
                                "aria-hidden": "true",
                                children: (0, u.jsx)("path", {
                                    d: "m6 9 6 6 6-6"
                                })
                            })]
                        }), e && (0, u.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [a.map(e => (0, u.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex gap-2 items-center",
                                    children: [(0, u.jsx)(ap.X, {
                                        id: e.name,
                                        checked: e.enabled,
                                        onCheckedChange: t => d(e, t)
                                    }), (0, u.jsx)("label", {
                                        htmlFor: e.name,
                                        className: "font-heading text-sm leading-4",
                                        children: e.name
                                    })]
                                }), (0, u.jsx)("button", {
                                    onClick: () => s.open(e.id),
                                    className: "text-xs  hover:opacity-50 text-muted-foreground",
                                    children: i("manage")
                                })]
                            }, e.id)), (0, u.jsx)("button", {
                                onClick: () => s.open(),
                                className: "mt-2 mr-auto text-xs   leading-3 rounded-full px-2 py-1 hover:scale-105 transition-all",
                                children: i("customTokenLists.add")
                            })]
                        })]
                    })
                },
                az = () => {
                    var e, t;
                    let {
                        t: a,
                        i18n: l
                    } = (0, g.$G)(), s = (0, S.L4)(), i = (0, S.U8)(), n = as(), d = eX(), r = tx("Settings"), o = (0, I.SZ)(e => e.superbridgeTestnets), c = (0, I.SZ)(e => e.setSuperbridgeTestnets), m = (0, I.SZ)(e => e.setFromChainId), h = (0, I.SZ)(e => e.setToChainId), x = (0, I.SZ)(e => e.deployments), p = K.useCurrency(), v = K.useSetCurrency(), f = K.usePreferredExplorer(), j = K.useSetPreferredExplorer(), b = er.useForceViaL1(), w = er.useToggleForceViaL1(), C = tB(), k = (0, tK.SP)(), L = (0, y.AW)(), F = (0, N.I)(), {
                        setTheme: A,
                        resolvedTheme: T
                    } = (0, ag.F)(), D = !!F.find(e => (0, tp.uH)(e));
                    return (0, u.jsx)(ao.Vq, {
                        open: r.isOpen,
                        onOpenChange: r.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsx)(ao.fK, {
                                className: "pt-8 pb-0",
                                children: (0, u.jsx)(ao.$N, {
                                    children: a("settings.settings")
                                })
                            }), (0, u.jsx)("div", {
                                className: "px-6 py-8",
                                children: (0, u.jsxs)("div", {
                                    className: "border rounded-[16px] divide-y divide-border",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex items-center justify-between p-4",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex gap-2 items-center",
                                            children: [(0, u.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "38",
                                                height: "38",
                                                fill: "none",
                                                viewBox: "0 0 38 38",
                                                className: "w-6 h-6",
                                                children: [(0, u.jsxs)("g", {
                                                    clipPath: "url(#clip0_841_5031)",
                                                    children: [(0, u.jsx)("path", {
                                                        fill: "#00BF3A",
                                                        d: "M22.568 15.884l-4.327-.957c-2.239-.491-2.86-.864-2.86-2.108 0-1.057.976-1.772 3.332-1.772 2.711 0 4.29 1.131 5.366 2.313.94 1.013 2.052 1.753 3.184 1.753 1.616 0 3.165-1.43 3.165-3.538 0-1.672-1.281-3.743-3.221-4.986-1.132-.715-2.506-1.393-4.272-1.791V3.554c0-1.846-1.467-3.22-3.333-3.22-1.865 0-3.332 1.355-3.332 3.22v1.057c-4.944.84-7.972 4.08-7.972 8.618 0 4.894 2.88 7.362 7.947 8.413l4.383.902c2.201.454 2.73.827 2.73 2.07 0 1.43-.976 2.108-3.687 2.108-3.11 0-4.95-1.013-5.833-2.543-.715-1.206-1.598-2.015-3.065-2.015-1.635 0-3.184 1.45-3.184 3.352 0 1.903 1.076 3.954 2.88 5.329 1.541 1.113 3.444 1.94 5.794 2.313v.77c0 2.146 1.374 3.483 3.333 3.483s3.333-1.337 3.333-3.482v-.902c4.614-1.057 7.455-4.253 7.455-8.773 0-4.95-2.99-7.306-7.81-8.376l-.006.006z"
                                                    }), (0, u.jsx)("path", {
                                                        fill: "#00AB34",
                                                        d: "M9.84 25.522c0-.584.336-1.094.92-1.094.417 0 .753.28 1.114.883 1.262 2.145 3.992 3.668 7.79 3.668 3.576 0 5.951-1.58 5.951-4.365 0-2.524-1.772-3.706-4.539-4.29l-4.384-.902c-4.346-.883-6.137-2.45-6.137-6.193 0-4.029 2.749-6.38 7.965-6.59V3.964c0-.79.318-1.374 1.076-1.374.759 0 1.076.584 1.076 1.374v2.73c2.387.26 3.973.938 5.329 1.809 1.374.883 2.22 2.033 2.22 3.165 0 .79-.38 1.187-.958 1.187-.436 0-.902-.379-1.524-1.038-1.262-1.393-3.519-3.028-7.02-3.028-3.258 0-5.59 1.654-5.59 4.029 0 2.599 1.903 3.706 4.633 4.328l4.328.957c4.178.92 6.043 2.413 6.043 6.156 0 4.029-2.561 6.38-7.455 6.852v2.58c0 .92-.298 1.468-1.076 1.468-.777 0-1.075-.529-1.075-1.468V31.15c-3.01-.168-5.006-.901-6.74-2.108-1.3-1.013-1.94-2.275-1.94-3.519H9.84zm12.722-9.638l-4.328-.957c-2.238-.491-2.86-.864-2.86-2.108 0-1.057.976-1.772 3.333-1.772 2.711 0 4.29 1.131 5.366 2.313.939 1.013 2.052 1.753 3.184 1.753 1.616 0 3.165-1.43 3.165-3.538 0-1.672-1.281-3.743-3.221-4.986-1.132-.715-2.506-1.393-4.272-1.791V3.554c0-1.846-1.467-3.22-3.333-3.22-1.865 0-3.333 1.355-3.333 3.22v1.057c-4.937.84-7.965 4.08-7.965 8.618 0 4.894 2.88 7.362 7.947 8.413l4.383.902c2.201.454 2.73.827 2.73 2.07 0 1.43-.976 2.108-3.687 2.108-3.11 0-4.95-1.013-5.833-2.543-.715-1.206-1.598-2.015-3.065-2.015-1.635 0-3.184 1.45-3.184 3.352 0 1.903 1.076 3.954 2.88 5.329 1.541 1.113 3.444 1.94 5.794 2.313v.77c0 2.146 1.374 3.483 3.333 3.483s3.333-1.337 3.333-3.482v-.902c4.614-1.057 7.455-4.253 7.455-8.773 0-4.95-2.99-7.306-7.81-8.376l-.012.006z"
                                                    })]
                                                }), (0, u.jsx)("defs", {
                                                    children: (0, u.jsx)("clipPath", {
                                                        id: "clip0_841_5031",
                                                        children: (0, u.jsx)("path", {
                                                            fill: "#fff",
                                                            d: "M0 0H22.832V37.083H0z",
                                                            transform: "translate(7.583 .333)"
                                                        })
                                                    })
                                                })]
                                            }), (0, u.jsx)("h3", {
                                                className: "font-heading text-sm",
                                                children: a("settings.currency")
                                            })]
                                        }), (0, u.jsxs)(aN, {
                                            onValueChange: e => {
                                                v(e), d({
                                                    event: "select-currency",
                                                    name: e
                                                })
                                            },
                                            value: p,
                                            children: [(0, u.jsx)(aC, {
                                                className: "max-w-[166px]",
                                                children: (0, u.jsx)(ay, {
                                                    placeholder: p
                                                })
                                            }), (0, u.jsx)(aS, {
                                                children: Object.keys(null !== (t = null === (e = L.data) || void 0 === e ? void 0 : e.data) && void 0 !== t ? t : {}).map(e => (0, u.jsxs)(aL, {
                                                    value: e,
                                                    children: [aA[e], " ", e]
                                                }, e))
                                            })]
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex items-center justify-between p-4",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex gap-2 items-center",
                                            children: [(0, u.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "38",
                                                height: "38",
                                                fill: "none",
                                                viewBox: "0 0 38 38",
                                                className: "w-6 h-6",
                                                children: [(0, u.jsxs)("g", {
                                                    fill: "#00C7FF",
                                                    clipPath: "url(#clip0_841_5032)",
                                                    children: [(0, u.jsx)("path", {
                                                        fillOpacity: "0.15",
                                                        d: "M18.708 36.496c9.502 0 17.205-7.702 17.205-17.204S28.21 2.087 18.708 2.087c-9.502 0-17.204 7.703-17.204 17.205 0 9.502 7.702 17.204 17.204 17.204z"
                                                    }), (0, u.jsx)("path", {
                                                        d: "M27.706 11.687h5.44a16.136 16.136 0 011.847 6.492H28.52c-.075-2.257-.336-4.458-.808-6.492h-.006zm0 15.21c.472-2.034.733-4.235.808-6.492h6.473a16.01 16.01 0 01-1.847 6.491H27.7h.006zM24.297 3.951a16.306 16.306 0 017.437 5.515h-4.651c-.36-1.075-.753-2.07-1.225-2.99-.454-.902-.976-1.772-1.56-2.525zm0 30.685a15.633 15.633 0 001.56-2.524c.473-.92.865-1.921 1.226-2.99h4.65a16.272 16.272 0 01-7.436 5.514zm-4.483-25.17v-6.33c1.691.585 3.146 2.413 4.067 4.31.317.64.603 1.318.864 2.014h-4.93v.006zm0 8.718v-6.492h5.59c.528 2.071.808 4.29.883 6.492h-6.473zm0 8.717v-6.491h6.473c-.075 2.182-.36 4.402-.883 6.491h-5.59zm0 8.544v-6.324h4.912a17.606 17.606 0 01-.845 2.015c-.92 1.846-2.35 3.724-4.067 4.309zM12.683 9.467c.243-.696.529-1.374.846-2.014.92-1.847 2.35-3.725 4.066-4.31v6.324h-4.912zm-.018 19.655h4.93v6.324c-1.691-.585-3.146-2.413-4.066-4.31a21.82 21.82 0 01-.864-2.014zm-1.542-10.937c.074-2.183.36-4.402.882-6.492h5.59v6.492h-6.472zm0 2.22h6.472v6.491h-5.59c-.528-2.07-.808-4.29-.883-6.491zM5.682 9.467a16.273 16.273 0 017.436-5.515 14.162 14.162 0 00-1.56 2.525c-.473.92-.864 1.921-1.225 2.99H5.682zm0 19.655h4.65c.361 1.076.753 2.07 1.226 2.99.454.902.976 1.773 1.56 2.525a16.305 16.305 0 01-7.436-5.515zM2.424 18.18a16.01 16.01 0 011.846-6.492h5.441c-.473 2.034-.734 4.235-.808 6.492h-6.48zm0 2.22h6.473c.074 2.256.335 4.458.808 6.49H4.27a16.136 16.136 0 01-1.846-6.49zm16.284 17.428c10.223 0 18.542-8.32 18.542-18.542C37.25 9.063 28.93.75 18.708.75 8.486.75.167 9.07.167 19.292c0 10.222 8.32 18.541 18.541 18.541v-.006z"
                                                    })]
                                                }), (0, u.jsx)("defs", {
                                                    children: (0, u.jsx)("clipPath", {
                                                        id: "clip0_841_5032",
                                                        children: (0, u.jsx)("path", {
                                                            fill: "#fff",
                                                            d: "M0 0H37.083V37.083H0z",
                                                            transform: "translate(.167 .75)"
                                                        })
                                                    })
                                                })]
                                            }), (0, u.jsx)("h3", {
                                                className: "font-heading text-sm",
                                                children: a("settings.language")
                                            })]
                                        }), (0, u.jsxs)(aN, {
                                            onValueChange: e => {
                                                l.changeLanguage(e), d({
                                                    event: "select-language",
                                                    name: e
                                                })
                                            },
                                            value: l.resolvedLanguage,
                                            children: [(0, u.jsx)(aC, {
                                                className: "max-w-[166px]",
                                                children: (0, u.jsx)(ay, {
                                                    placeholder: l.resolvedLanguage
                                                })
                                            }), (0, u.jsx)(aS, {
                                                children: [{
                                                    code: "en",
                                                    label: "English"
                                                }, {
                                                    code: "es",
                                                    label: "Espa\xf1ol"
                                                }, {
                                                    code: "de",
                                                    label: "Deutsch"
                                                }, {
                                                    code: "fr",
                                                    label: "Fran\xe7ais"
                                                }, {
                                                    code: "hi",
                                                    label: "हिन्दी"
                                                }, {
                                                    code: "vi",
                                                    label: "Tiếng Việt"
                                                }, {
                                                    code: "ja",
                                                    label: "日本語"
                                                }, {
                                                    code: "ar",
                                                    label: "العربية"
                                                }, {
                                                    code: "pl",
                                                    label: "Polski"
                                                }, {
                                                    code: "tr",
                                                    label: "T\xfcrk\xe7e"
                                                }, {
                                                    code: "kr",
                                                    label: "한국어"
                                                }, {
                                                    code: "pt",
                                                    label: "Portugu\xeas"
                                                }, {
                                                    code: "id",
                                                    label: "Bahasa Indonesia"
                                                }, {
                                                    code: "th",
                                                    label: "ไทย"
                                                }, {
                                                    code: "zh-CN",
                                                    label: "中文简体"
                                                }, {
                                                    code: "zh-TW",
                                                    label: "中文繁體"
                                                }].map(e => {
                                                    let {
                                                        code: t,
                                                        label: a
                                                    } = e;
                                                    return (0, u.jsx)(aL, {
                                                        value: t,
                                                        children: a
                                                    }, t)
                                                })
                                            })]
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex items-center justify-between p-4",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex gap-2 items-center",
                                            children: [(0, u.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "38",
                                                height: "38",
                                                fill: "none",
                                                viewBox: "0 0 38 38",
                                                className: "w-6 h-6",
                                                children: [(0, u.jsxs)("g", {
                                                    clipPath: "url(#clip0_841_5033)",
                                                    children: [(0, u.jsx)("path", {
                                                        fill: "#CBCCBE",
                                                        d: "M12.944 16.772v-.074l.018-.472a7.656 7.656 0 012.234-4.995l7.236-7.192c1.464-1.465 3.4-2.253 5.485-2.253 4.263 0 7.72 3.42 7.72 7.682 0 2.085-.788 4.021-2.253 5.486l-7.459 7.459a9.53 9.53 0 00.168-1.787l-.019-.472 6.069-6.069c1.166-1.185 1.843-2.761 1.843-4.43 0-3.457-2.799-6.218-6.255-6.218-1.67 0-3.252.676-4.412 1.843l-6.876 6.8c-1.185 1.168-1.824 2.78-1.824 4.432 0 3.437 2.724 6.199 6.162 6.255a4.573 4.573 0 01-.918 1.352l-.242.242a7.712 7.712 0 01-6.634-6.857c-.019-.279-.037-.49-.037-.732h-.006zM1.78 27.874c0-2.067.788-4.021 2.253-5.486l7.235-7.236a2.21 2.21 0 00.223-.204 9.285 9.285 0 00-.167 1.75v.316l.018.15-6.068 6.086a6.304 6.304 0 00-1.843 4.413c0 3.475 2.798 6.236 6.273 6.236a6.27 6.27 0 004.43-1.843l6.84-6.82c1.147-1.148 1.824-2.817 1.824-4.474 0-3.382-2.706-6.143-6.2-6.162.224-.527.547-.993.956-1.408l.186-.187.056-.037c3.798.51 6.67 3.773 6.67 7.645 0 2.085-.787 4.021-2.252 5.486L14.98 33.29a7.713 7.713 0 01-5.486 2.252c-4.263 0-7.72-3.419-7.72-7.682l.007.012z"
                                                    }), (0, u.jsx)("path", {
                                                        fill: "#AFAFAF",
                                                        d: "M19.143 11.628l5.3-5.225A4.576 4.576 0 0127.73 5.05c2.575 0 4.642 2.03 4.642 4.605 0 1.26-.49 2.382-1.353 3.27l-5.244 5.262a9.293 9.293 0 00-6.633-6.56zm-2.91 4.884v-.261c.186-.019.36-.019.49-.019 2.463 0 4.474 2.048 4.474 4.549 0 .13 0 .242-.019.378h-.298a4.627 4.627 0 01-4.641-4.641l-.007-.006zm-3.29.26v-.074c0-.15 0-.317.02-.472a7.656 7.656 0 012.233-4.995l7.236-7.192c1.464-1.465 3.4-2.253 5.485-2.253 4.263 0 7.72 3.42 7.72 7.682 0 2.085-.788 4.021-2.253 5.486l-7.236 7.235-.223.224a9.53 9.53 0 00.168-1.787c0-.15 0-.298-.019-.472l6.069-6.069c1.166-1.185 1.843-2.761 1.843-4.43 0-3.457-2.799-6.218-6.255-6.218-1.67 0-3.252.676-4.412 1.843l-6.876 6.8c-1.185 1.167-1.824 2.78-1.824 4.432 0 3.437 2.724 6.199 6.162 6.255a4.576 4.576 0 01-.918 1.352l-.242.242a7.712 7.712 0 01-6.634-6.857c-.019-.279-.037-.49-.037-.732h-.006zM5.057 27.67c0-1.241.472-2.427 1.353-3.29l5.244-5.224a9.371 9.371 0 006.577 6.578l-5.243 5.206a4.655 4.655 0 01-3.27 1.353c-2.576 0-4.66-2.048-4.66-4.623zm-3.27.204c0-2.066.788-4.02 2.253-5.485l7.235-7.236c.075-.055.15-.13.224-.204a9.285 9.285 0 00-.168 1.75v.316l.019.149-6.07 6.087a6.304 6.304 0 00-1.842 4.413c0 3.474 2.798 6.236 6.274 6.236a6.27 6.27 0 004.43-1.843l6.839-6.82c1.148-1.148 1.824-2.817 1.824-4.474 0-3.382-2.706-6.143-6.2-6.162.224-.527.547-.993.956-1.408l.187-.187.055-.037c3.798.509 6.671 3.773 6.671 7.645 0 2.085-.788 4.021-2.252 5.486l-7.236 7.192A7.714 7.714 0 019.5 35.543c-4.264 0-7.72-3.419-7.72-7.682l.006.012zm14.335 6.56l7.235-7.192a9.243 9.243 0 001.67-2.272 8.772 8.772 0 002.252-1.65l7.235-7.236a9.29 9.29 0 002.743-6.615c0-5.169-4.17-9.301-9.339-9.301a9.29 9.29 0 00-6.615 2.742l-7.235 7.192a9.189 9.189 0 00-1.632 2.197c-.863.509-1.632 1.073-2.29 1.731l-7.236 7.236A9.367 9.367 0 00.167 27.88c0 5.169 4.17 9.302 9.339 9.302 2.5 0 4.865-.993 6.615-2.743v-.006z"
                                                    })]
                                                }), (0, u.jsx)("defs", {
                                                    children: (0, u.jsx)("clipPath", {
                                                        id: "clip0_841_5033",
                                                        children: (0, u.jsx)("path", {
                                                            fill: "#fff",
                                                            d: "M0 0H37.083V37.009H0z",
                                                            transform: "translate(.167 .167)"
                                                        })
                                                    })
                                                })]
                                            }), (0, u.jsx)("h3", {
                                                className: "font-heading text-sm",
                                                children: a("settings.explorer")
                                            })]
                                        }), (0, u.jsxs)(aN, {
                                            onValueChange: e => {
                                                j(e), d({
                                                    event: "select-explorer",
                                                    name: e
                                                })
                                            },
                                            value: f,
                                            children: [(0, u.jsx)(aC, {
                                                className: "max-w-[166px] capitalize",
                                                children: (0, u.jsx)(ay, {
                                                    placeholder: f
                                                })
                                            }), (0, u.jsx)(aS, {
                                                children: [{
                                                    label: "Etherscan",
                                                    value: "etherscan"
                                                }, {
                                                    label: "Blockscout",
                                                    value: "blockscout"
                                                }, {
                                                    label: "Once Upon",
                                                    value: "onceupon"
                                                }].map(e => {
                                                    let {
                                                        label: t,
                                                        value: a
                                                    } = e;
                                                    return (0, u.jsx)(aL, {
                                                        value: a,
                                                        children: t
                                                    }, t)
                                                })
                                            })]
                                        })]
                                    }), i && (0, u.jsxs)("div", {
                                        className: "flex items-center justify-between p-4",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex gap-2 items-center",
                                            children: [(0, u.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "38",
                                                height: "38",
                                                fill: "none",
                                                viewBox: "0 0 38 38",
                                                className: "w-6 h-6",
                                                children: [(0, u.jsxs)("g", {
                                                    clipPath: "url(#clip0_1105_384)",
                                                    children: [(0, u.jsx)("path", {
                                                        fill: "#FF5",
                                                        d: "M21.466 14.043a2.972 2.972 0 012.969-2.97 2.972 2.972 0 012.97 2.97c0 1.637-1.333 2.988-2.97 2.988a2.976 2.976 0 01-2.97-2.988zm-1.714 13.654v-1.446a8.385 8.385 0 001-.153v1.6h-1zm-2.51 0v-1.6c.324.077.656.116 1 .154v1.446h-1zM10.57 14.043c0-1.638 1.351-2.97 2.989-2.97a2.972 2.972 0 012.969 2.97c0 1.637-1.332 2.988-2.97 2.988a2.993 2.993 0 01-2.988-2.988zM19 38c10.475 0 19-8.525 19-19S29.475 0 19 0 0 8.525 0 19s8.525 19 19 19z"
                                                    }), (0, u.jsx)("path", {
                                                        fill: "#fff",
                                                        d: "M19.943 14.043a4.483 4.483 0 004.492 4.492c2.485 0 4.492-1.95 4.492-4.492S26.9 9.551 24.435 9.551s-4.492 1.95-4.492 4.492zm-.191 13.654v-1.446a8.404 8.404 0 001-.153v1.6h-1zM9.067 14.043a4.483 4.483 0 004.492 4.492c2.485 0 4.492-1.95 4.492-4.492s-2.026-4.492-4.492-4.492-4.492 1.95-4.492 4.492zm8.174 13.654v-1.599c.325.076.657.115 1 .153v1.446h-1z"
                                                    }), (0, u.jsx)("path", {
                                                        fill: "#000",
                                                        d: "M23.033 14.043c0 .79.618 1.427 1.408 1.427.79 0 1.408-.637 1.408-1.427s-.637-1.408-1.408-1.408c-.77 0-1.408.637-1.408 1.408zm-1.567 0a2.972 2.972 0 012.969-2.97 2.972 2.972 0 012.97 2.97c0 1.637-1.333 2.988-2.97 2.988a2.976 2.976 0 01-2.97-2.988zm-1.21 21.644a2.93 2.93 0 00.961-.733l.867.485c-.6.114-1.217.19-1.835.248h.006zm-.504-7.99v-1.446a8.385 8.385 0 001-.153v1.6h-1zM17.84 15.432c.134-.427.21-.905.21-1.39 0-.521.427-.942.944-.942a.95.95 0 01.943.943c0 .484.076.962.21 1.389a2.898 2.898 0 00-1.16-.23c-.407 0-.809.077-1.16.23h.013zm-.599 12.265v-1.6c.325.077.657.116 1 .154v1.446h-1zm-1.076 7.793l.732-.427c.23.248.523.465.848.618a20.559 20.559 0 01-1.58-.191zM13.54 22.453c0 1.37.904 2.428 2.198 3.103v2.912a.75.75 0 00.752.752h5.014a.75.75 0 00.752-.752v-2.912c1.293-.637 2.198-1.695 2.198-3.084v-.019c0-.618-.503-1.14-1.121-1.14s-.982.542-1.14 1.14c-.192.733-1.409 1.561-3.206 1.561-1.37 0-3.007-.656-3.205-1.56-.133-.6-.503-1.141-1.14-1.141-.637 0-1.121.522-1.121 1.14h.019zm-1.39-8.41a1.409 1.409 0 102.816 0c0-.79-.636-1.408-1.407-1.408s-1.408.637-1.408 1.408zm-1.58 0c0-1.638 1.351-2.97 2.989-2.97a2.972 2.972 0 012.969 2.97c0 1.637-1.332 2.988-2.97 2.988a2.993 2.993 0 01-2.988-2.988zM3.995 11.59C6.735 6.078 12.425 2.275 19 2.275c6.576 0 12.265 3.797 15.005 9.315H28.2a4.495 4.495 0 00-3.759-2.045c-1.714 0-3.281 1-4.033 2.49-.408-.267-.886-.445-1.408-.445-.523 0-1.02.172-1.427.446a4.5 4.5 0 00-4.014-2.491c-1.542 0-2.95.79-3.76 2.045H3.995zM0 19c0 7.811 4.747 14.546 11.513 17.458v.408c0 .267.153.522.39.656a.68.68 0 00.757 0l.676-.389c1.796.561 3.682.867 5.67.867s4.034-.325 5.881-.924l.79.446c.115.077.23.096.37.096.14 0 .268-.02.389-.096a.762.762 0 00.37-.656v-.542C33.4 33.355 38.012 26.697 38.012 19c0-2.064-.325-4.052-.943-5.92a.754.754 0 00-.191-1.485h-.37C33.604 4.786 26.85.001 19 .001 11.15 0 4.396 4.785 1.504 11.59h-.37a.753.753 0 00-.191 1.484A18.817 18.817 0 000 18.994V19zm13.559-.465c.943 0 1.835-.287 2.567-.81-.019.115-.019.25-.019.37 0 .618.485 1.14 1.14 1.14.619 0 1.141-.522 1.141-1.14a.61.61 0 01.618-.618c.35 0 .637.268.637.618 0 .618.504 1.14 1.141 1.14s1.14-.522 1.14-1.14c0-.114 0-.23-.019-.344.714.503 1.6.79 2.55.79 2.427 0 4.491-1.95 4.491-4.492 0-.325-.038-.637-.096-.943h5.824a17.033 17.033 0 011.064 5.9c0 6.423-3.625 11.998-8.933 14.795v-4.728a.748.748 0 00-.37-.656.754.754 0 00-.751 0l-4.473 2.587a2.97 2.97 0 00-4.3-.115l-4.244-2.446a.754.754 0 00-.752 0 .78.78 0 00-.389.656v4.88c-5.48-2.758-9.239-8.41-9.239-14.966 0-2.084.39-4.072 1.064-5.9h5.824a5.088 5.088 0 00-.096.943 4.483 4.483 0 004.492 4.492l-.012-.013z"
                                                    })]
                                                }), (0, u.jsx)("defs", {
                                                    children: (0, u.jsx)("clipPath", {
                                                        id: "clip0_1105_384",
                                                        children: (0, u.jsx)("path", {
                                                            fill: "#fff",
                                                            d: "M0 0H38V38H0z"
                                                        })
                                                    })
                                                })]
                                            }), (0, u.jsx)("h3", {
                                                className: "font-heading text-sm",
                                                children: a("settings.enableTestnets")
                                            })]
                                        }), (0, u.jsx)(aD, {
                                            checked: o,
                                            onCheckedChange: e => {
                                                let t = x.sort((e, t) => new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime());
                                                if (e) {
                                                    c(!0);
                                                    let e = t.find(e => e.type === ey.mO.testnet);
                                                    e && (m(e.l1ChainId), h(e.l2ChainId))
                                                } else {
                                                    c(!1);
                                                    let e = t.find(e => e.type === ey.mO.mainnet);
                                                    e && (m(e.l1ChainId), h(e.l2ChainId))
                                                }
                                            }
                                        })]
                                    }), s && (0, u.jsx)(aE, {}), n && (0, u.jsx)(aM, {}), k && (0, u.jsxs)("div", {
                                        className: "flex items-center justify-between p-4",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex gap-2 items-center",
                                            children: [(0, u.jsx)(eJ.MO, {
                                                className: "w-6 h-6 fill-muted-foreground"
                                            }), (0, u.jsx)("h3", {
                                                className: "font-heading text-sm",
                                                children: a("settings.darkMode")
                                            })]
                                        }), (0, u.jsx)(aD, {
                                            checked: "light" !== T,
                                            onCheckedChange: () => A("light" == T ? "dark" : "light")
                                        })]
                                    }), D && (0, u.jsxs)("div", {
                                        className: "flex items-start p-4",
                                        children: [(0, u.jsx)(eJ.qc, {
                                            className: "w-6 h-6 mr-2 shrink-0"
                                        }), (0, u.jsxs)("div", {
                                            children: [(0, u.jsx)("h3", {
                                                className: "font-heading",
                                                children: "Escape hatch"
                                            }), (0, u.jsx)("p", {
                                                className: "text-muted-foreground text-xs",
                                                children: a("settings.escapeHatchDescription")
                                            })]
                                        }), (0, u.jsx)("div", {
                                            className: "pl-8",
                                            children: (0, u.jsx)(aD, {
                                                checked: b,
                                                onCheckedChange: w,
                                                disabled: !0 === C.data
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                };
            var aH = a(62995);
            let aR = (e, t, a, l) => {
                    var s, i, n, d, r, o, c, u, m, h, x, p, v;
                    let f = null == a ? void 0 : null === (i = a.blockExplorers) || void 0 === i ? void 0 : null === (s = i.etherscan) || void 0 === s ? void 0 : s.url,
                        g = null == a ? void 0 : null === (d = a.blockExplorers) || void 0 === d ? void 0 : null === (n = d.onceupon) || void 0 === n ? void 0 : n.url,
                        j = null !== (v = null == a ? void 0 : null === (o = a.blockExplorers) || void 0 === o ? void 0 : null === (r = o.blockScout) || void 0 === r ? void 0 : r.url) && void 0 !== v ? v : null == a ? void 0 : null === (u = a.blockExplorers) || void 0 === u ? void 0 : null === (c = u.blockscout) || void 0 === c ? void 0 : c.url;
                    if ("etherscan" === l && f) return {
                        name: "Etherscan",
                        link: "".concat(f, "/").concat(e, "/").concat(t)
                    };
                    if ("blockscout" === l && j) return {
                        name: "Blockscout",
                        link: "".concat(j, "/").concat(e, "/").concat(t)
                    };
                    if ("onceupon" === l && g) return {
                        name: "Once Upon",
                        link: "tx" === e ? "".concat(g, "/tx/").concat(t) : "".concat(g, "/").concat(t, ":").concat(a.id)
                    };
                    let b = null == a ? void 0 : null === (h = a.blockExplorers) || void 0 === h ? void 0 : null === (m = h.default) || void 0 === m ? void 0 : m.name,
                        w = null == a ? void 0 : null === (p = a.blockExplorers) || void 0 === p ? void 0 : null === (x = p.default) || void 0 === x ? void 0 : x.url;
                    return {
                        name: b,
                        link: "".concat(w, "/").concat(e, "/").concat(t)
                    }
                },
                aB = (e, t) => aR("tx", e, t, K.getState().preferredExplorer).link,
                aP = (e, t) => aR("address", e, t, K.getState().preferredExplorer);
            var aO = a(85594),
                a_ = a(81027),
                aZ = a(78607);
            let aG = [{
                    inputs: [],
                    name: "OTHER_BRIDGE",
                    outputs: [{
                        internalType: "contractStandardBridge",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_localToken",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_remoteToken",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, {
                        internalType: "uint32",
                        name: "_minGasLimit",
                        type: "uint32"
                    }, {
                        internalType: "bytes",
                        name: "_extraData",
                        type: "bytes"
                    }],
                    name: "bridgeERC20To",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_to",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "_minGasLimit",
                        type: "uint32"
                    }, {
                        internalType: "bytes",
                        name: "_extraData",
                        type: "bytes"
                    }],
                    name: "bridgeETHTo",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_l2Token",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, {
                        internalType: "uint32",
                        name: "_minGasLimit",
                        type: "uint32"
                    }, {
                        internalType: "bytes",
                        name: "_extraData",
                        type: "bytes"
                    }],
                    name: "withdrawTo",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                aW = [{
                    inputs: [],
                    name: "BRIDGE",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "REMOTE_TOKEN",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "l2Bridge",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "l1Token",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                aY = [{
                    inputs: [],
                    name: "counterpartGateway",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                aV = [{
                    inputs: [],
                    name: "l1Address",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "l2Gateway",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                a$ = e => {
                    var t, a, l, s, i, n, d, r, o, c, u, m, h, x;
                    let p = (0, tz.C)(),
                        v = (0, w.m)(),
                        f = (0, a_.N)({
                            allowFailure: !0,
                            contracts: [{
                                address: e,
                                abi: aO.Wo,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "name"
                            }, {
                                address: e,
                                abi: aO.Wo,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "symbol"
                            }, {
                                address: e,
                                abi: aO.Wo,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "decimals"
                            }, {
                                address: e,
                                abi: aO.Wo,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "balanceOf",
                                args: [null !== (m = null == v ? void 0 : v.address) && void 0 !== m ? m : "0x"]
                            }, {
                                address: e,
                                abi: aW,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "BRIDGE"
                            }, {
                                address: e,
                                abi: aW,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "l2Bridge"
                            }, {
                                address: e,
                                abi: aW,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "REMOTE_TOKEN"
                            }, {
                                address: e,
                                abi: aW,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "l1Token"
                            }, {
                                address: e,
                                abi: aV,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "l1Address"
                            }, {
                                address: e,
                                abi: aV,
                                chainId: null == p ? void 0 : p.l2ChainId,
                                functionName: "l2Gateway"
                            }, {
                                address: e,
                                abi: aO.Wo,
                                chainId: null == p ? void 0 : p.l1ChainId,
                                functionName: "name"
                            }]
                        }),
                        g = null === (t = f.data) || void 0 === t ? void 0 : t[0].result,
                        j = null === (a = f.data) || void 0 === a ? void 0 : a[1].result,
                        b = null === (l = f.data) || void 0 === l ? void 0 : l[2].result,
                        N = null === (s = f.data) || void 0 === s ? void 0 : s[3].result,
                        y = null !== (h = null === (i = f.data) || void 0 === i ? void 0 : i[4].result) && void 0 !== h ? h : null === (n = f.data) || void 0 === n ? void 0 : n[5].result,
                        C = null !== (x = null === (d = f.data) || void 0 === d ? void 0 : d[6].result) && void 0 !== x ? x : null === (r = f.data) || void 0 === r ? void 0 : r[7].result,
                        k = null === (o = f.data) || void 0 === o ? void 0 : o[8].result,
                        I = null === (c = f.data) || void 0 === c ? void 0 : c[9].result,
                        S = !!(null === (u = f.data) || void 0 === u ? void 0 : u[10].result),
                        L = (0, aZ.u)({
                            address: y,
                            abi: aG,
                            chainId: null == p ? void 0 : p.l2ChainId,
                            functionName: "OTHER_BRIDGE"
                        }),
                        F = (0, aZ.u)({
                            address: I,
                            abi: aY,
                            chainId: null == p ? void 0 : p.l2ChainId,
                            functionName: "counterpartGateway"
                        }),
                        A = L.data,
                        T = F.data,
                        D = !!y && !!A && !!C,
                        M = !!k && !!I && !!T;
                    return {
                        name: g,
                        symbol: j,
                        balance: N,
                        decimals: b,
                        OP_L1_BRIDGE: A,
                        OP_L2_BRIDGE: y,
                        OP_L1_TOKEN: C,
                        ARB_L1_TOKEN: k,
                        ARB_L2_GATEWAY: I,
                        ARB_L1_GATEWAY: T,
                        isValidToken: !!g && !!j && "number" == typeof b,
                        isOptimismToken: D,
                        isArbitrumToken: M,
                        isL1Token: S,
                        isLoading: f.isLoading || y && L.isLoading || I && F.isLoading,
                        isError: f.isError || L.isError || F.isError
                    }
                },
                aU = () => {
                    var e, t;
                    let a = (0, tz.C)(),
                        {
                            t: l
                        } = (0, g.$G)(),
                        s = (0, ex.AQ)(),
                        i = eX(),
                        n = (0, aH.p)(),
                        d = tx("CustomTokenImport"),
                        r = K.useCustomTokens(),
                        o = K.useSetCustomTokens(),
                        {
                            name: c,
                            symbol: m,
                            decimals: h,
                            OP_L1_BRIDGE: x,
                            OP_L1_TOKEN: p,
                            OP_L2_BRIDGE: v,
                            ARB_L1_TOKEN: j,
                            ARB_L2_GATEWAY: b,
                            ARB_L1_GATEWAY: w
                        } = a$(d.data),
                        [N, y] = (0, f.useState)(!1),
                        C = aP(null !== (e = null != p ? p : j) && void 0 !== e ? e : "0x", null == n ? void 0 : n.l1),
                        k = aP(d.data, null == n ? void 0 : n.l2),
                        I = !tf.f.includes(null !== (t = null == a ? void 0 : a.l1ChainId) && void 0 !== t ? t : 0);
                    return (0, u.jsx)(ao.Vq, {
                        open: d.isOpen,
                        onOpenChange: d.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsx)("div", {
                                className: "p-6 pb-0",
                                children: (0, u.jsx)("h2", {
                                    className: "font-heading",
                                    children: "Import token"
                                })
                            }), (0, u.jsx)("div", {
                                className: "p-6 pb-0",
                                children: (0, u.jsxs)("div", {
                                    className: "flex gap-2 items-center",
                                    children: [(0, u.jsx)("div", {
                                        className: "rounded-full bg-zinc-100 dark:bg-zinc-800 h-10 w-10 flex items-center justify-center",
                                        children: (0, u.jsx)("span", {
                                            className: "text-[10px]  font-heading text-muted-foreground leading-4 mt-0.5",
                                            children: null == m ? void 0 : m.substring(0, 3)
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-xl  font-heading leading-4",
                                            children: c
                                        }), (0, u.jsx)("p", {
                                            className: "text-sm  font-heading text-muted-foreground leading-4",
                                            children: m
                                        })]
                                    })]
                                })
                            }), (0, u.jsxs)("div", {
                                className: "p-6",
                                children: [(0, u.jsxs)("div", {
                                    className: "border  rounded-[16px]",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex gap-4 p-4 border-b",
                                        children: [(0, u.jsx)("p", {
                                            className: " text-sm",
                                            children: l("tokens.customImportCheck")
                                        }), (0, u.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            className: "h-8 w-8",
                                            children: [(0, u.jsxs)("g", {
                                                clipPath: "url(#clip0_995_5016)",
                                                children: [(0, u.jsx)("path", {
                                                    d: "M5.68325 4.28632C5.68325 4.02007 5.80325 3.87195 6.05263 3.87195C6.302 3.87195 6.42763 4.02007 6.42763 4.28632C6.42763 4.55257 6.15575 6.8982 6.09763 7.3407C6.092 7.39132 6.08075 7.44195 6.05263 7.44195C6.0245 7.44195 6.01325 7.40257 6.00763 7.3332C5.957 6.89632 5.68325 4.54132 5.68325 4.28445V4.28632ZM5.68325 9.40507C5.68325 9.20632 5.84825 9.04132 6.05263 9.04132C6.257 9.04132 6.41638 9.20632 6.41638 9.40507C6.41638 9.60382 6.25138 9.77445 6.05263 9.77445C5.85388 9.77445 5.68325 9.60945 5.68325 9.40507ZM1.2545 11.4038H10.8414C11.5801 11.4038 11.9364 10.8188 11.5914 10.1832L6.77263 1.28257C6.38638 0.573823 5.72825 0.573823 5.342 1.27695L0.506377 10.1776C0.165127 10.8132 0.517627 11.4038 1.25638 11.4038H1.2545Z",
                                                    fill: "#F97316"
                                                }), (0, u.jsx)("path", {
                                                    d: "M5.00074 4.28625C5.00074 4.58625 5.29512 6.94313 5.37012 7.4475C5.43199 7.87875 5.70012 8.1225 6.05074 8.1225C6.42574 8.1225 6.66387 7.845 6.72574 7.4475C6.85137 6.66375 7.10637 4.58625 7.10637 4.28625C7.10637 3.72375 6.67512 3.19125 6.05074 3.19125C5.42637 3.19125 5.00074 3.73125 5.00074 4.28625ZM6.05637 10.4606C6.63012 10.4606 7.10074 9.99 7.10074 9.39938C7.10074 8.80875 6.63012 8.355 6.05637 8.355C5.48262 8.355 4.99512 8.82563 4.99512 9.39938C4.99512 9.97313 5.46574 10.4606 6.05637 10.4606Z",
                                                    fill: "#FFEDD5"
                                                })]
                                            }), (0, u.jsx)("defs", {
                                                children: (0, u.jsx)("clipPath", {
                                                    id: "clip0_995_5016",
                                                    children: (0, u.jsx)("rect", {
                                                        width: "11.3494",
                                                        height: "10.6537",
                                                        fill: "white",
                                                        transform: "translate(0.375 0.75)"
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "p-4 border-b",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, u.jsx)("h4", {
                                                className: " text-sm",
                                                children: l(I ? "tokens.customL2Address" : "tokens.customL1Address")
                                            }), (0, u.jsxs)("a", {
                                                target: "_blank",
                                                href: C.link,
                                                className: "text-xs   leading-3 rounded-full px-2 py-1 hover:scale-105 transition-all ",
                                                children: [C.name, " →"]
                                            })]
                                        }), (0, u.jsx)("span", {
                                            className: " text-xs text-muted-foreground break-words leading-3",
                                            children: null != p ? p : j
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "p-4",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, u.jsx)("h4", {
                                                className: " text-sm",
                                                children: l(I ? "tokens.customL3Address" : "tokens.customL2Address")
                                            }), (0, u.jsxs)("a", {
                                                target: "_blank",
                                                href: k.link,
                                                className: "text-xs   leading-3 rounded-full px-2 py-1 hover:scale-105 transition-all ",
                                                children: [k.name, " →"]
                                            })]
                                        }), (0, u.jsx)("span", {
                                            className: " text-xs text-muted-foreground break-words leading-3",
                                            children: d.data
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex gap-2 py-4",
                                    children: [(0, u.jsx)(ap.X, {
                                        checked: N,
                                        onCheckedChange: e => y(e),
                                        id: "importAgree"
                                    }), (0, u.jsx)("label", {
                                        htmlFor: "importAgree",
                                        className: "text-[11px] text-muted-foreground ",
                                        children: l("customTokenLists.disclaimer", {
                                            app: s.head.title
                                        })
                                    })]
                                }), (0, u.jsx)(ax.z, {
                                    onClick: () => {
                                        let e, t;
                                        if (!a || !n) return;
                                        if (x && p && v) {
                                            let l = {
                                                    address: p,
                                                    chainId: a.l1ChainId,
                                                    decimals: h,
                                                    name: c,
                                                    symbol: m,
                                                    logoURI: "",
                                                    bridges: [a.l2ChainId]
                                                },
                                                s = {
                                                    address: d.data,
                                                    chainId: a.l2ChainId,
                                                    decimals: h,
                                                    name: c,
                                                    symbol: m,
                                                    logoURI: "",
                                                    bridges: [a.l1ChainId]
                                                };
                                            e = l, t = s
                                        }
                                        if (j && b && w) {
                                            let l = {
                                                    address: j,
                                                    chainId: a.l1ChainId,
                                                    decimals: h,
                                                    name: c,
                                                    symbol: m,
                                                    logoURI: "",
                                                    bridges: [a.l2ChainId]
                                                },
                                                s = {
                                                    address: d.data,
                                                    chainId: a.l2ChainId,
                                                    decimals: h,
                                                    name: c,
                                                    symbol: m,
                                                    logoURI: "",
                                                    bridges: [a.l1ChainId]
                                                };
                                            e = l, t = s
                                        }
                                        if (!e || !t || r.find(t => t[a.l1ChainId] && (0, en.E)(t[a.l1ChainId].address, e.address))) return;
                                        let l = {
                                            [a.l1ChainId]: e,
                                            [a.l2ChainId]: t
                                        };
                                        i({
                                            event: "import-custom-token",
                                            l1: n.l1.name,
                                            l2: n.l2.name,
                                            l1Address: e.address,
                                            l2Address: t.address,
                                            name: e.name
                                        }), o([...r, l]), d.close()
                                    },
                                    disabled: !N,
                                    children: l("tokens.import")
                                })]
                            })]
                        })
                    })
                },
                aq = () => {
                    let e = tx("CustomTokenImport");
                    return (0, u.jsx)(ao.Vq, {
                        open: e.isOpen,
                        onOpenChange: e.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsx)(aU, {})
                        })
                    })
                };
            var aK = a(53577),
                aX = a(74351);

            function aQ(e) {
                let {
                    amount: t,
                    decimals: a
                } = e;
                if (18 === a) return t;
                if (a < 18) {
                    let e = t / BigInt(10) ** BigInt(18 - a);
                    return e * BigInt(10) ** BigInt(18 - a) < t ? e + BigInt(1) : e
                }
                return t * BigInt(10) ** BigInt(a - 18)
            }
            let aJ = () => {
                let e = (0, w.m)(),
                    t = (0, eh.kX)();
                return (0, aX.K)({
                    chainId: null == t ? void 0 : t.id,
                    address: e.address
                })
            };

            function a0() {
                var e, t;
                let a = (0, eh.kX)(),
                    l = (0, w.m)(),
                    s = (0, eh.Ab)(null == a ? void 0 : a.id),
                    i = aJ(),
                    n = (0, y.Yv)(),
                    d = ei(),
                    r = (0, a_.N)({
                        allowFailure: !0,
                        contracts: null === (e = d.data) || void 0 === e ? void 0 : e.map(e => {
                            var t, s, i;
                            return {
                                abi: aO.Wo,
                                functionName: "balanceOf",
                                args: [null !== (s = l.address) && void 0 !== s ? s : "0x"],
                                chainId: null == a ? void 0 : a.id,
                                address: null === (t = e[null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : 0]) || void 0 === t ? void 0 : t.address
                            }
                        }),
                        query: {
                            enabled: !!l.address
                        }
                    }),
                    o = null === (t = d.data) || void 0 === t ? void 0 : t.map((e, t) => {
                        var l, d, o, c, u, m, h, x, p, v, f, g, j, b;
                        let w = BigInt(0);
                        (null == a ? void 0 : a.id) && e[null == a ? void 0 : a.id] && eu(e[null == a ? void 0 : a.id]) ? w = aQ({
                            amount: null !== (f = null === (v = i.data) || void 0 === v ? void 0 : v.value) && void 0 !== f ? f : BigInt(0),
                            decimals: null !== (g = null == s ? void 0 : s.nativeCurrency.decimals) && void 0 !== g ? g : 18
                        }) : (null === (l = r.data) || void 0 === l ? void 0 : l[t].result) && (w = BigInt(r.data[t].result));
                        let N = (null == a ? void 0 : a.id) && (null === (d = e[null == a ? void 0 : a.id]) || void 0 === d ? void 0 : d.coinGeckoId) ? "coingecko:".concat(null === (o = e[null == a ? void 0 : a.id]) || void 0 === o ? void 0 : o.coinGeckoId) : (null === (c = e[1]) || void 0 === c ? void 0 : c.coinGeckoId) ? "coingecko:".concat(e[1].coinGeckoId) : "ethereum:".concat(null === (u = e[1]) || void 0 === u ? void 0 : u.address),
                            y = null !== (j = null === (x = n.data) || void 0 === x ? void 0 : null === (h = x.data) || void 0 === h ? void 0 : null === (m = h[N]) || void 0 === m ? void 0 : m.price) && void 0 !== j ? j : 0,
                            C = parseFloat((0, e7.b)(w, null !== (b = null === (p = Object.values(e)[0]) || void 0 === p ? void 0 : p.decimals) && void 0 !== b ? b : 18)) * y;
                        return {
                            token: e,
                            balance: w,
                            usdValue: C
                        }
                    }).sort((e, t) => t.usdValue && e.usdValue ? t.usdValue - e.usdValue : parseFloat(t.balance.toString()) - parseFloat(e.balance.toString()));
                return {
                    isLoading: r.isFetching,
                    isError: r.isError,
                    data: o,
                    refetch: () => {
                        r.refetch(), i.refetch()
                    }
                }
            }

            function a1(e) {
                var t, a, l;
                let s = a0();
                return e ? s.isLoading ? {
                    isLoading: !0,
                    data: 0n
                } : {
                    isLoading: !1,
                    data: null !== (l = null === (a = s.data) || void 0 === a ? void 0 : null === (t = a.find(t => {
                        var a;
                        return (null === (a = t.token[e.chainId]) || void 0 === a ? void 0 : a.address) && (0, en.E)(t.token[e.chainId].address, e.address)
                    })) || void 0 === t ? void 0 : t.balance) && void 0 !== l ? l : 0n
                } : {
                    isLoading: !1,
                    data: 0n
                }
            }
            let a2 = e => {
                    let {
                        address: t
                    } = e, {
                        t: a
                    } = (0, g.$G)(), l = tx("CustomTokenImport"), s = (0, tz.C)(), i = (0, aH.p)(), {
                        balance: n,
                        isOptimismToken: d,
                        isArbitrumToken: r,
                        isValidToken: o,
                        name: c,
                        symbol: m,
                        decimals: h,
                        isL1Token: x,
                        isLoading: p,
                        isError: v
                    } = a$(t);
                    return p ? (0, u.jsx)("div", {
                        className: "pt-8 pb-12 text-center font-heading text-sm",
                        children: (0, u.jsx)("span", {
                            children: "Loading..."
                        })
                    }) : v ? (0, u.jsx)("div", {
                        className: "pt-8 pb-12 text-center font-heading text-sm",
                        children: (0, u.jsx)("span", {
                            children: "Error..."
                        })
                    }) : o ? (0, u.jsxs)("div", {
                        className: "flex justify-between hover:bg-black/[0.025] hover:dark:bg-white/[0.05] transition p-4 rounded-sm",
                        children: [(0, u.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [(0, u.jsx)("div", {
                                className: "rounded-full bg-zinc-100 dark:bg-zinc-800 h-8 w-8 flex items-center justify-center",
                                children: (0, u.jsx)("span", {
                                    className: "text-[10px]  font-heading text-muted-foreground leading-4 mt-0.5",
                                    children: null == m ? void 0 : m.substring(0, 3)
                                })
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, u.jsx)("div", {
                                    className: "flex items-center gap-1",
                                    children: (0, u.jsx)("span", {
                                        className: "text-sm font-heading",
                                        children: c
                                    })
                                }), (0, u.jsx)("span", {
                                    className: "text-xs  text-muted-foreground",
                                    children: m
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "ml-auto flex flex-col text-right gap-1",
                            children: [(0, u.jsx)("span", {
                                className: "text-sm  text-muted-foreground",
                                children: e6(parseFloat((0, e7.b)(BigInt(null != n ? n : "0"), null != h ? h : 0)))
                            }), !d && !r && (0, u.jsxs)("div", {
                                className: "flex gap-1 bg-orange-50 dark:bg-orange-900 items-center px-2 py-1 rounded-full",
                                children: [(0, u.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    children: [(0, u.jsxs)("g", {
                                        clipPath: "url(#clip0_995_5016)",
                                        children: [(0, u.jsx)("path", {
                                            d: "M5.68325 4.28632C5.68325 4.02007 5.80325 3.87195 6.05263 3.87195C6.302 3.87195 6.42763 4.02007 6.42763 4.28632C6.42763 4.55257 6.15575 6.8982 6.09763 7.3407C6.092 7.39132 6.08075 7.44195 6.05263 7.44195C6.0245 7.44195 6.01325 7.40257 6.00763 7.3332C5.957 6.89632 5.68325 4.54132 5.68325 4.28445V4.28632ZM5.68325 9.40507C5.68325 9.20632 5.84825 9.04132 6.05263 9.04132C6.257 9.04132 6.41638 9.20632 6.41638 9.40507C6.41638 9.60382 6.25138 9.77445 6.05263 9.77445C5.85388 9.77445 5.68325 9.60945 5.68325 9.40507ZM1.2545 11.4038H10.8414C11.5801 11.4038 11.9364 10.8188 11.5914 10.1832L6.77263 1.28257C6.38638 0.573823 5.72825 0.573823 5.342 1.27695L0.506377 10.1776C0.165127 10.8132 0.517627 11.4038 1.25638 11.4038H1.2545Z",
                                            fill: "#F97316"
                                        }), (0, u.jsx)("path", {
                                            d: "M5.00074 4.28625C5.00074 4.58625 5.29512 6.94313 5.37012 7.4475C5.43199 7.87875 5.70012 8.1225 6.05074 8.1225C6.42574 8.1225 6.66387 7.845 6.72574 7.4475C6.85137 6.66375 7.10637 4.58625 7.10637 4.28625C7.10637 3.72375 6.67512 3.19125 6.05074 3.19125C5.42637 3.19125 5.00074 3.73125 5.00074 4.28625ZM6.05637 10.4606C6.63012 10.4606 7.10074 9.99 7.10074 9.39938C7.10074 8.80875 6.63012 8.355 6.05637 8.355C5.48262 8.355 4.99512 8.82563 4.99512 9.39938C4.99512 9.97313 5.46574 10.4606 6.05637 10.4606Z",
                                            fill: "#FFEDD5"
                                        })]
                                    }), (0, u.jsx)("defs", {
                                        children: (0, u.jsx)("clipPath", {
                                            id: "clip0_995_5016",
                                            children: (0, u.jsx)("rect", {
                                                width: "11.3494",
                                                height: "10.6537",
                                                fill: "white",
                                                transform: "translate(0.375 0.75)"
                                            })
                                        })
                                    })]
                                }), (0, u.jsx)("span", {
                                    className: "text-[10px]  font-heading leading-4 text-orange-500 ",
                                    children: a("tokens.notBridgeable")
                                })]
                            })]
                        }), (d || r) && (0, u.jsx)("div", {
                            className: "ml-4",
                            children: (0, u.jsx)(ax.z, {
                                onClick: () => {
                                    (r || d) && s && o && l.open(t)
                                },
                                children: a("tokens.import")
                            })
                        })]
                    }) : x ? (0, u.jsxs)("div", {
                        className: "py-8 px-4 text-center font-heading text-xs space-y-2",
                        children: [(0, u.jsxs)("div", {
                            children: ["This looks like a token on ", null == i ? void 0 : i.l1.name, ". You need to enter the contract address for a token on ", null == i ? void 0 : i.l2.name, "."]
                        }), (0, u.jsxs)("div", {
                            children: ["See our", " ", (0, u.jsx)("a", {
                                target: "_blank",
                                href: "https://docs.superbridge.app/custom-tokens",
                                className: "underline",
                                children: "documentation"
                            }), " ", "for more info on bridging unsupported tokens."]
                        })]
                    }) : (0, u.jsx)("div", {
                        className: "pt-8 pb-12 text-center font-heading text-sm",
                        children: (0, u.jsx)("span", {
                            children: "Invalid token"
                        })
                    })
                },
                a3 = e => {
                    var t;
                    let a = el();
                    return !!e && !!(null === (t = a.data) || void 0 === t ? void 0 : t.find(t => {
                        var a, l;
                        return (null === (a = t[null !== (l = null == e ? void 0 : e.chainId) && void 0 !== l ? l : 0]) || void 0 === a ? void 0 : a.address.toLowerCase()) === e.address.toLowerCase()
                    }))
                },
                a5 = e => {
                    var t;
                    let a = el();
                    return !!e && !!(null === (t = a.data) || void 0 === t ? void 0 : t.find(t => {
                        var a, l;
                        return (null === (a = t[null !== (l = null == e ? void 0 : e.chainId) && void 0 !== l ? l : 0]) || void 0 === a ? void 0 : a.address.toLowerCase()) === (null == e ? void 0 : e.address.toLowerCase())
                    }))
                },
                a4 = e => {
                    var t, a, l, s, i;
                    let {
                        balance: n,
                        onClick: d,
                        token: r
                    } = e, o = ev(), c = ef(), {
                        t: m
                    } = (0, g.$G)(), h = (0, eh.kX)(), p = (0, eh.W)(), v = null !== (a = r[null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : 0]) && void 0 !== a ? a : null, f = null !== (s = r[null !== (l = null == p ? void 0 : p.id) && void 0 !== l ? l : 0]) && void 0 !== s ? s : null, j = a3(v), b = a5(v);
                    return (0, u.jsxs)("div", {
                        className: (0, x.Z)("flex justify-between hover:bg-muted transition cursor-pointer p-4 relative", o && c && v && f && (0, en.E)(o.address, v.address) && (0, en.E)(c.address, f.address) && "bg-muted"),
                        onClick: d,
                        children: [(0, u.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [(0, u.jsx)(tg, {
                                token: v,
                                className: "h-8 w-8"
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, u.jsx)("div", {
                                    className: "flex items-center gap-1",
                                    children: (0, u.jsx)("span", {
                                        className: "text-sm font-heading",
                                        children: null == v ? void 0 : v.name
                                    })
                                }), (0, u.jsx)("span", {
                                    className: "text-xs  text-muted-foreground",
                                    children: null == v ? void 0 : v.symbol
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "ml-auto flex flex-col text-right gap-1",
                            children: [(0, u.jsx)("span", {
                                className: "text-sm  text-muted-foreground",
                                children: e6(parseFloat((0, e7.b)(n, null !== (i = null == v ? void 0 : v.decimals) && void 0 !== i ? i : 18)))
                            }), (j || b) && (0, u.jsxs)("div", {
                                className: "flex gap-1 bg-orange-50 dark:bg-orange-900 items-center px-2 py-1 rounded-full",
                                children: [(0, u.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    children: [(0, u.jsxs)("g", {
                                        clipPath: "url(#clip0_995_5016)",
                                        children: [(0, u.jsx)("path", {
                                            d: "M5.68325 4.28632C5.68325 4.02007 5.80325 3.87195 6.05263 3.87195C6.302 3.87195 6.42763 4.02007 6.42763 4.28632C6.42763 4.55257 6.15575 6.8982 6.09763 7.3407C6.092 7.39132 6.08075 7.44195 6.05263 7.44195C6.0245 7.44195 6.01325 7.40257 6.00763 7.3332C5.957 6.89632 5.68325 4.54132 5.68325 4.28445V4.28632ZM5.68325 9.40507C5.68325 9.20632 5.84825 9.04132 6.05263 9.04132C6.257 9.04132 6.41638 9.20632 6.41638 9.40507C6.41638 9.60382 6.25138 9.77445 6.05263 9.77445C5.85388 9.77445 5.68325 9.60945 5.68325 9.40507ZM1.2545 11.4038H10.8414C11.5801 11.4038 11.9364 10.8188 11.5914 10.1832L6.77263 1.28257C6.38638 0.573823 5.72825 0.573823 5.342 1.27695L0.506377 10.1776C0.165127 10.8132 0.517627 11.4038 1.25638 11.4038H1.2545Z",
                                            fill: "#F97316"
                                        }), (0, u.jsx)("path", {
                                            d: "M5.00074 4.28625C5.00074 4.58625 5.29512 6.94313 5.37012 7.4475C5.43199 7.87875 5.70012 8.1225 6.05074 8.1225C6.42574 8.1225 6.66387 7.845 6.72574 7.4475C6.85137 6.66375 7.10637 4.58625 7.10637 4.28625C7.10637 3.72375 6.67512 3.19125 6.05074 3.19125C5.42637 3.19125 5.00074 3.73125 5.00074 4.28625ZM6.05637 10.4606C6.63012 10.4606 7.10074 9.99 7.10074 9.39938C7.10074 8.80875 6.63012 8.355 6.05637 8.355C5.48262 8.355 4.99512 8.82563 4.99512 9.39938C4.99512 9.97313 5.46574 10.4606 6.05637 10.4606Z",
                                            fill: "#FFEDD5"
                                        })]
                                    }), (0, u.jsx)("defs", {
                                        children: (0, u.jsx)("clipPath", {
                                            id: "clip0_995_5016",
                                            children: (0, u.jsx)("rect", {
                                                width: "11.3494",
                                                height: "10.6537",
                                                fill: "white",
                                                transform: "translate(0.375 0.75)"
                                            })
                                        })
                                    })]
                                }), (0, u.jsx)("span", {
                                    className: "text-[10px]  font-heading leading-4 text-orange-500 whitespace-nowrap",
                                    children: j ? m("tokens.customImport") : m("tokens.customImportFromList", {
                                        name: b
                                    })
                                })]
                            })]
                        })]
                    })
                },
                a8 = {
                    wstETH: "bg-gradient-to-r from-sky-400/20 to-indigo-400/20 border-indigo-400/40"
                },
                a7 = () => {
                    var e, t, a;
                    let [l, s] = (0, f.useState)(""), i = (0, eh.kX)(), n = (0, eh.W)(), d = (0, tz.C)(), r = er.useSetToken(), o = a0(), {
                        t: c
                    } = (0, g.$G)(), m = tx("TokenSelector"), h = null !== (a = null === (e = (0, I.SZ)(e => e.superbridgeConfig)) || void 0 === e ? void 0 : e.highlightedTokens) && void 0 !== a ? a : [], p = eX(), v = null === (t = o.data) || void 0 === t ? void 0 : t.filter(e => {
                        var t, a;
                        let {
                            token: s
                        } = e;
                        if (!l) return !0;
                        let d = s[null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : 0],
                            r = s[null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : 0];
                        return (null == d ? void 0 : d.name.toLowerCase().includes(l.toLowerCase())) || (null == d ? void 0 : d.symbol.toLowerCase().includes(l.toLowerCase())) || (null == d ? void 0 : d.address.toLowerCase().includes(l.toLowerCase())) || (null == r ? void 0 : r.name.toLowerCase().includes(l.toLowerCase())) || (null == r ? void 0 : r.symbol.toLowerCase().includes(l.toLowerCase())) || (null == r ? void 0 : r.address.toLowerCase().includes(l.toLowerCase()))
                    }), j = e => {
                        var t, a, l, s, o, c, u, x, v, f;
                        let g = e[null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : 0],
                            j = e[null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : 0];
                        g && j && (r(e), m.close(), h.find(t => {
                            var a;
                            return t.deploymentName === (null == d ? void 0 : d.name) && (null === (a = e[d.l1ChainId]) || void 0 === a ? void 0 : a.address.toLowerCase()) === t.address.toLowerCase()
                        }) ? p({
                            event: "highlighted-token-select",
                            symbol: null !== (o = null === (l = e[null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : 0]) || void 0 === l ? void 0 : l.symbol) && void 0 !== o ? o : "",
                            network: null !== (c = null == i ? void 0 : i.name) && void 0 !== c ? c : ""
                        }) : p({
                            event: "token-select",
                            symbol: null !== (v = null === (u = e[null !== (x = null == i ? void 0 : i.id) && void 0 !== x ? x : 0]) || void 0 === u ? void 0 : u.symbol) && void 0 !== v ? v : "",
                            network: null !== (f = null == i ? void 0 : i.name) && void 0 !== f ? f : ""
                        }))
                    };
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsxs)("div", {
                            className: "flex flex-col gap-2 p-4 border-b ",
                            children: [(0, u.jsx)(ah, {
                                value: l,
                                onChange: e => s(e.target.value),
                                type: "text",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                name: "token",
                                id: "token",
                                placeholder: "Search"
                            }), (0, u.jsx)("div", {
                                className: "flex flex-wrap items-center gap-1",
                                children: [...h.filter(e => e.deploymentName === (null == d ? void 0 : d.name)).map(e => e.address), "ETH", "USDC", "stETH", "USDT"].filter(Boolean).map(e => {
                                    var t, a, l;
                                    let s = null === (a = o.data) || void 0 === a ? void 0 : null === (t = a.find(t => {
                                            var a, l;
                                            let s = t.token[null !== (a = null == d ? void 0 : d.l1ChainId) && void 0 !== a ? a : 0],
                                                i = t.token[null !== (l = null == d ? void 0 : d.l2ChainId) && void 0 !== l ? l : 0];
                                            return (null == i ? void 0 : i.symbol) === e || !!(null == s ? void 0 : s.address) && (0, tP.U)(e) && (0, en.E)(s.address, e)
                                        })) || void 0 === t ? void 0 : t.token,
                                        n = null == s ? void 0 : s[null !== (l = null == i ? void 0 : i.id) && void 0 !== l ? l : 0];
                                    return s && n ? (0, u.jsxs)("div", {
                                        className: (0, x.Z)("border rounded-full flex items-center gap-1 pl-1.5 pr-3 py-1 cursor-pointer hover:bg-muted transition", a8[n.symbol]),
                                        onClick: () => j(s),
                                        children: [(0, u.jsx)(tg, {
                                            token: n,
                                            className: "h-5 w-5"
                                        }), (0, u.jsxs)("div", {
                                            className: "flex items-baseline gap-1",
                                            children: [(0, u.jsx)("span", {
                                                className: "text-sm inline-flex",
                                                children: n.symbol
                                            }), a8[n.symbol] && (0, u.jsx)("span", {
                                                className: "text-[9px] font-heading tracking-tighter text-black/30 dark:text-white/40",
                                                children: "Ad"
                                            })]
                                        })]
                                    }, n.address) : null
                                })
                            })]
                        }), (0, u.jsx)("div", {
                            className: "overflow-y-scroll flex flex-col basis-full",
                            children: (0, b.EQ)({
                                filteredTokens: v,
                                searchIsToken: (0, tP.U)(l),
                                supportsImports: !!d
                            }).with({
                                filteredTokens: b.P.when(e => (null == e ? void 0 : e.length) === 0),
                                searchIsToken: !0,
                                supportsImports: !0
                            }, () => (0, u.jsx)(a2, {
                                address: l
                            })).with({
                                filteredTokens: b.P.when(e => (null == e ? void 0 : e.length) === 0)
                            }, () => (0, u.jsx)("div", {
                                className: "pt-8 pb-12 text-center font-heading text-sm",
                                children: (0, u.jsx)("span", {
                                    children: c("tokens.noneFound")
                                })
                            })).with({
                                filteredTokens: b.P.when(e => (null == e ? void 0 : e.length) && e.length > 0)
                            }, () => null == v ? void 0 : v.map(e => {
                                var t, a, l, s;
                                let {
                                    token: d,
                                    balance: r
                                } = e;
                                return (0, u.jsx)(a4, {
                                    token: d,
                                    balance: r,
                                    onClick: () => j(d)
                                }, "".concat(null === (t = d[null !== (l = null == i ? void 0 : i.id) && void 0 !== l ? l : 0]) || void 0 === t ? void 0 : t.address, "-").concat(null === (a = d[null !== (s = null == n ? void 0 : n.id) && void 0 !== s ? s : 0]) || void 0 === a ? void 0 : a.address))
                            })).otherwise(() => null)
                        })]
                    })
                },
                a6 = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = tx("TokenSelector");
                    return (0, u.jsx)(ao.Vq, {
                        open: t.isOpen,
                        onOpenChange: t.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            onOpenAutoFocus: e => e.preventDefault(),
                            children: [(0, u.jsx)(ao.fK, {
                                className: "flex flex-col space-y-1.5 text-left px-6 py-6",
                                children: (0, u.jsx)(aK.$N, {
                                    className: "text-lg font-heading",
                                    children: e("tokens.selectToken")
                                })
                            }), (0, u.jsx)(a7, {})]
                        })
                    })
                };
            var a9 = a(86072),
                le = a(72911),
                lt = a(80100),
                la = a(79736);
            let ll = () => (0, u.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-6 min-w-6 h-6 min-h-6 fill-foreground",
                    children: [(0, u.jsxs)("g", {
                        clipPath: "url(#clip0_19172_3184)",
                        children: [(0, u.jsx)("path", {
                            d: "M1.43662 12C1.43662 6.16499 6.16499 1.43662 12 1.43662C17.835 1.43662 22.5634 6.16499 22.5634 12C22.5634 17.835 17.835 22.5634 12 22.5634C6.16499 22.5634 1.43662 17.835 1.43662 12ZM0 12C0 18.6157 5.38431 24 12 24C18.6157 24 24 18.6157 24 12C24 5.38431 18.6157 0 12 0C5.38431 0 0 5.38431 0 12Z"
                        }), (0, u.jsx)("path", {
                            d: "M11.0785 14.0402C10.8934 13.8632 10.8048 13.6177 10.8048 13.2958C10.8048 12.9175 10.9014 12.5312 11.0905 12.1368C11.2837 11.7424 11.5895 11.3682 12.0121 11.0181L12.3984 10.7123C12.6237 10.5432 12.7968 10.4024 12.9215 10.2897C13.0463 10.173 13.1469 10.0443 13.2274 9.89536C13.3079 9.75049 13.3481 9.5855 13.3481 9.40039C13.3481 9.03822 13.2153 8.75653 12.9537 8.55532C12.6922 8.35411 12.3421 8.25351 11.9074 8.25351C11.5091 8.25351 11.167 8.37423 10.8773 8.61568C10.5875 8.85713 10.3783 9.17906 10.2415 9.58148C10.1489 9.83902 9.99598 10.0362 9.79075 10.1771C9.58552 10.3179 9.332 10.3903 9.03823 10.3903C8.74447 10.3903 8.499 10.2777 8.31791 10.0563C8.13683 9.835 8.04829 9.56538 8.04829 9.2515C8.04829 9.00603 8.10463 8.73641 8.21731 8.44265C8.32998 8.14888 8.46278 7.90743 8.6157 7.7183C8.98592 7.24747 9.46479 6.88128 10.0443 6.61971C10.6278 6.35814 11.3119 6.22534 12.1046 6.22534C12.8169 6.22534 13.4527 6.35411 14.0121 6.60764C14.5714 6.86116 15.002 7.21126 15.3119 7.65391C15.6217 8.09657 15.7747 8.58751 15.7747 9.12675C15.7747 9.66599 15.674 10.1529 15.4688 10.5634C15.2636 10.9779 14.9537 11.3642 14.5433 11.7263L14.2052 12.0161C13.8229 12.342 13.5372 12.6076 13.3481 12.8209C13.159 13.0342 13.0423 13.2595 12.994 13.501C12.9215 13.7787 12.7847 13.9799 12.5795 14.1086C12.3783 14.2374 12.1328 14.3018 11.8431 14.3018C11.5131 14.3018 11.2555 14.2133 11.0745 14.0402H11.0785ZM10.5835 15.6177C10.7083 15.3883 10.8853 15.2113 11.1066 15.0825C11.328 14.9537 11.5775 14.8893 11.8592 14.8893C12.1408 14.8893 12.3903 14.9537 12.6157 15.0825C12.8411 15.2113 13.0181 15.3883 13.1429 15.6177C13.2676 15.8471 13.332 16.1006 13.332 16.3823C13.332 16.664 13.2716 16.9376 13.1469 17.163C13.0221 17.3883 12.8491 17.5694 12.6278 17.6942C12.4064 17.8189 12.1489 17.8833 11.8632 17.8833C11.5775 17.8833 11.328 17.8189 11.1066 17.6942C10.8853 17.5694 10.7123 17.3923 10.5875 17.163C10.4628 16.9336 10.4024 16.676 10.4024 16.3823C10.4024 16.0885 10.4668 15.843 10.5916 15.6177H10.5835Z"
                        })]
                    }), (0, u.jsx)("defs", {
                        children: (0, u.jsx)("clipPath", {
                            id: "clip0_19172_3184",
                            children: (0, u.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                }),
                ls = () => (0, u.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-6 min-w-6 h-6 min-h-6 fill-foreground",
                    children: [(0, u.jsxs)("g", {
                        clipPath: "url(#clip0_19172_3189)",
                        children: [(0, u.jsx)("path", {
                            d: "M1.43662 12C1.43662 6.16499 6.16499 1.43662 12 1.43662C17.835 1.43662 22.5634 6.16499 22.5634 12C22.5634 17.835 17.835 22.5634 12 22.5634C6.16499 22.5634 1.43662 17.835 1.43662 12ZM0 12C0 18.6157 5.38431 24 12 24C18.6157 24 24 18.6157 24 12C24 5.38431 18.6157 0 12 0C5.38431 0 0 5.38431 0 12Z"
                        }), (0, u.jsx)("path", {
                            d: "M10.8612 5.93562C10.9698 5.73844 11.1268 5.58552 11.3239 5.47285C11.5252 5.36017 11.7465 5.30383 12 5.30383C12.2535 5.30383 12.4829 5.36017 12.6801 5.47285C12.8773 5.58552 13.0302 5.73844 13.1388 5.93562C13.2475 6.13281 13.3038 6.35011 13.3038 6.59156C13.3038 6.83301 13.2475 7.05031 13.1388 7.24749C13.0302 7.44468 12.8773 7.5976 12.6801 7.71027C12.4829 7.82295 12.2576 7.87929 12 7.87929C11.7425 7.87929 11.5252 7.82295 11.3239 7.71027C11.1227 7.5976 10.9698 7.44468 10.8612 7.24749C10.7525 7.05031 10.6962 6.83301 10.6962 6.59156C10.6962 6.35011 10.7525 6.13281 10.8612 5.93562ZM11.1509 17.5413C10.9296 17.3119 10.8209 17.0181 10.8209 16.66V10.0885C10.8209 9.72637 10.9296 9.43261 11.1509 9.20323C11.3722 8.97385 11.6539 8.86118 12 8.86118C12.3461 8.86118 12.6197 8.97385 12.8411 9.20323C13.0624 9.43261 13.171 9.72637 13.171 10.0885V16.66C13.171 17.0221 13.0624 17.3159 12.8411 17.5453C12.6197 17.7747 12.3421 17.8873 12 17.8873C11.658 17.8873 11.3722 17.7706 11.1509 17.5413Z"
                        })]
                    }), (0, u.jsx)("defs", {
                        children: (0, u.jsx)("clipPath", {
                            id: "clip0_19172_3189",
                            children: (0, u.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                }),
                li = () => {
                    var e, t, a, l, s, i;
                    let {
                        t: n
                    } = (0, g.$G)(), d = K.useDismissTos(), r = K.useHasViewedTos(), o = tx("Legal"), c = (0, ex.AQ)(), m = (0, S.L4)(), h = an(), v = (0, tQ.h)(), [j, b] = (0, f.useState)(0), w = () => {
                        var e, t;
                        let a = 0;
                        (null == c ? void 0 : null === (e = c.tos) || void 0 === e ? void 0 : e.forceReadPrivacyPolicy) && a++, (null == c ? void 0 : null === (t = c.tos) || void 0 === t ? void 0 : t.forceReadTermsOfService) && a++, j === a ? d() : b(e => e + 1)
                    }, N = () => (0, u.jsx)("div", {
                        className: "absolute inset-0 -top-12 grow flex justify-center",
                        children: (0, u.jsx)("div", {
                            className: "flex items-center justify-center bg-muted w-8 h-8 rounded-full animate-bounce ",
                            children: (0, u.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                className: "w-3 h-auto fill-foreground",
                                children: (0, u.jsx)("path", {
                                    d: "M0.677124 7.00012C0.677124 7.29289 0.769797 7.5846 0.984631 7.81523L5.98478 13.4767C6.23121 13.7537 6.55451 14.0001 6.99998 14.0001C7.44544 14.0001 7.76874 13.7537 8.01517 13.4767L13.0153 7.81523C13.2312 7.5846 13.3228 7.29183 13.3228 7.00012C13.3228 6.32297 12.7689 5.76904 12.0917 5.76904C11.7379 5.76904 11.4146 5.907 11.1692 6.18396L8.23106 9.50652V1.2312C8.23106 0.554056 7.67712 0.00012207 6.99998 0.00012207C6.32283 0.00012207 5.76889 0.554056 5.76889 1.2312L5.76889 9.50757L2.83073 6.18502C2.5843 5.90805 2.26205 5.77009 1.90821 5.77009C1.23106 5.77009 0.677124 6.32403 0.677124 7.00118L0.677124 7.00012Z"
                                })
                            })
                        })
                    }), y = (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsxs)(ao.fK, {
                            className: "flex flex-col gap-2 pt-10 pb-0",
                            children: [(0, u.jsx)(ao.$N, {
                                className: "font-heading text-3xl text-center text-foreground",
                                children: n("tos.welcome", {
                                    name: c.head.title
                                })
                            }), !m && !h && (0, u.jsx)(ao.Be, {
                                className: "text-xs font-heading text-muted-foreground text-center",
                                children: n("tos.poweredBy")
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col gap-6 p-6",
                            children: [(0, u.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, u.jsx)(ll, {}), (0, u.jsx)("p", {
                                    className: "text-sm ",
                                    children: (0, u.jsx)(g.cC, {
                                        i18nKey: "tos.superbridge3",
                                        components: [(0, u.jsx)("a", {
                                            href: "https://help.superbridge.app",
                                            className: "underline"
                                        }, "name")],
                                        values: {
                                            name: c.head.title
                                        }
                                    })
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, u.jsx)(ls, {}), (0, u.jsx)("p", {
                                    className: "text-sm ",
                                    children: (0, u.jsx)(g.cC, {
                                        i18nKey: "tos.superbridge4",
                                        components: [(0, u.jsx)("button", {
                                            onClick: () => o.open(),
                                            className: "underline"
                                        }, "name")],
                                        values: {
                                            name: c.head.title
                                        }
                                    })
                                })]
                            }), (0, u.jsx)(ax.z, {
                                onClick: w,
                                children: n("tos.agreeAndContinue")
                            })]
                        })]
                    }), C = e => {
                        let {
                            title: t,
                            content: a
                        } = e, l = (0, f.useRef)(null), [s, i] = (0, f.useState)(!1), {
                            scrollYProgress: d
                        } = (0, a9.v)({
                            container: l
                        });
                        (0, le.W)(d, "change", e => {
                            e >= .8 && i(!0)
                        });
                        let r = (0, lt.q)(d, {
                            stiffness: 100,
                            damping: 30,
                            restDelta: .001
                        });
                        return (0, u.jsx)(u.Fragment, {
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, u.jsx)("div", {
                                    className: "flex items-start justify-start bg-muted h-1",
                                    children: (0, u.jsx)(p.E.div, {
                                        className: "w-full bg-muted-foreground h-1 origin-top-left",
                                        style: {
                                            scaleX: r
                                        }
                                    })
                                }), (0, u.jsxs)("div", {
                                    ref: l,
                                    className: "max-h-[320px] prose prose-sm prose-headings:font-heading prose-headings:text-foreground prose-a:text-foreground prose-p:text-foreground dark:prose-invert overflow-y-scroll p-6",
                                    children: [(0, u.jsx)(ao.fK, {
                                        className: "p-0",
                                        children: (0, u.jsx)(ao.$N, {
                                            className: "text-lg font-heading text-foreground m-0",
                                            children: t
                                        })
                                    }), (0, u.jsx)(la.U, {
                                        children: a
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "border-t border-muted p-6 relative",
                                    children: [!s && (0, u.jsx)(N, {}), (0, u.jsx)(ax.z, {
                                        disabled: !s,
                                        className: "w-full",
                                        onClick: w,
                                        children: n("tos.agreeAndContinue")
                                    })]
                                })]
                            })
                        })
                    }, k = [{
                        name: "tab1",
                        component: y
                    }];
                    return (null == c ? void 0 : null === (e = c.tos) || void 0 === e ? void 0 : e.forceReadTermsOfService) && k.push({
                        name: "terms",
                        component: (0, u.jsx)(C, {
                            title: n("tos.forceReadTerms"),
                            content: null !== (l = null == c ? void 0 : null === (a = c.tos) || void 0 === a ? void 0 : a.customTermsOfService) && void 0 !== l ? l : ""
                        })
                    }), (null == c ? void 0 : null === (t = c.tos) || void 0 === t ? void 0 : t.forceReadPrivacyPolicy) && k.push({
                        name: "privacy",
                        component: (0, u.jsx)(C, {
                            title: n("tos.forceReadPrivacy"),
                            content: null !== (i = null == c ? void 0 : null === (s = c.tos) || void 0 === s ? void 0 : s.customPrivacyPolicy) && void 0 !== i ? i : ""
                        })
                    }), (0, u.jsx)(ao.Vq, {
                        open: !v && !r,
                        onOpenChange: () => {},
                        children: (0, u.jsxs)(ao.cZ, {
                            className: "[&>button]:hidden",
                            onOpenAutoFocus: e => e.preventDefault(),
                            children: [k.length > 1 && (0, u.jsxs)("div", {
                                className: "flex justify-between items center p-4 border-b border-muted",
                                children: [(0, u.jsx)("div", {
                                    className: "w-10 h-10 shrink-0",
                                    children: 0 !== j && (0, u.jsx)("button", {
                                        onClick: () => b(e => e - 1),
                                        className: "w-10 h-10 shrink-0 flex items-center justify-center bg-muted rounded-full hover:scale-105 transition-all",
                                        children: (0, u.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            className: "w-3.5 h-3.5 fill-foreground",
                                            children: (0, u.jsx)("path", {
                                                d: "M7 0.677246C6.70724 0.677246 6.41553 0.769919 6.1849 0.984753L0.523395 5.9849C0.246428 6.23133 0 6.55463 0 7.0001C0 7.44556 0.246428 7.76887 0.523395 8.01529L6.1849 13.0154C6.41553 13.2313 6.70829 13.323 7 13.323C7.67715 13.323 8.23108 12.769 8.23108 12.0919C8.23108 11.738 8.09312 11.4147 7.81616 11.1693L4.49361 8.23118H12.7689C13.4461 8.23118 14 7.67725 14 7.0001C14 6.32295 13.4461 5.76902 12.7689 5.76902H4.49255L7.8151 2.83085C8.09207 2.58442 8.23003 2.26217 8.23003 1.90833C8.23003 1.23118 7.67609 0.677246 6.99895 0.677246L7 0.677246Z"
                                            })
                                        })
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "flex items-center gap-1 justify-center w-full",
                                    children: k.map((e, t) => (0, u.jsx)("div", {
                                        className: (0, x.Z)("w-10 h-1 rounded-full", t === j ? "bg-primary" : "bg-muted")
                                    }, e.name))
                                }), (0, u.jsx)("div", {
                                    className: "w-10 h-10 shrink-0"
                                })]
                            }), k[j].component]
                        })
                    })
                },
                ln = () => {
                    let e = er.useSetDisplayConfirmationModal(),
                        t = th.useSetAlerts();
                    return () => {
                        t([]), e(!1)
                    }
                };
            var ld = a(39703),
                lr = a(23960),
                lo = a(83011),
                lc = a(29340);
            let lu = () => {
                let e = (0, h.useRouter)(),
                    t = e.query.graffiti && "string" == typeof e.query.graffiti ? e.query.graffiti : null;
                return t ? "superbridge".concat(t) : "superbridge"
            };
            var lm = a(3242);
            let lh = () => {
                    let e = er.useRawAmount(),
                        t = ev();
                    if (!t) return BigInt(0);
                    let a = isNaN(parseFloat(e)) ? "0" : e;
                    try {
                        return (0, lm.v)(a, t.decimals)
                    } catch (e) {
                        return BigInt(0)
                    }
                },
                lx = () => {
                    var e, t, a, l, s, i, n, d, r, o;
                    let c = (0, eh.kX)(),
                        u = (0, eh.W)(),
                        m = (0, w.m)(),
                        x = (0, ex.$)(),
                        p = (0, h.useRouter)(),
                        v = ev(),
                        f = ef(),
                        g = er.useRecipientAddress(),
                        j = er.useForceViaL1(),
                        b = lc.n.useCustomRoutesId(),
                        N = null == v ? void 0 : v.address,
                        C = null == f ? void 0 : f.address,
                        k = lu(),
                        [I] = (0, am.Nr)(lh(), 300),
                        S = (0, Q.a)({
                            queryKey: ["useBridgeRoutes", I.toString(), null !== (n = null == c ? void 0 : c.id.toString()) && void 0 !== n ? n : "", null !== (d = null == u ? void 0 : u.id.toString()) && void 0 !== d ? d : "", null != N ? N : "", null != C ? C : "", g || ec, null !== (r = m.address) && void 0 !== r ? r : ec, k, j, x, b, p.query.hyperlaneWarpRoutes, null == v ? void 0 : null === (e = v.hyperlane) || void 0 === e ? void 0 : e.router, null == f ? void 0 : null === (t = f.hyperlane) || void 0 === t ? void 0 : t.router, null == v ? void 0 : null === (a = v.opBridgedUsdc) || void 0 === a ? void 0 : a.adapter, null == v ? void 0 : null === (l = v.lz) || void 0 === l ? void 0 : l.adapter, null == v ? void 0 : null === (s = v.sky) || void 0 === s ? void 0 : s.bridge],
                            queryFn: () => {
                                var e, t, a, l, s, i, n, d, r, o, h;
                                return (0, y.wS)({
                                    host: x,
                                    hyperlaneCustomRoutesId: b || p.query.hyperlaneWarpRoutes,
                                    amount: I.toString(),
                                    fromChainId: null !== (d = null == c ? void 0 : c.id.toString()) && void 0 !== d ? d : "",
                                    toChainId: null !== (r = null == u ? void 0 : u.id.toString()) && void 0 !== r ? r : "",
                                    fromTokenAddress: null != N ? N : "",
                                    toTokenAddress: null != C ? C : "",
                                    graffiti: k,
                                    recipient: g || ec,
                                    sender: null !== (o = m.address) && void 0 !== o ? o : ec,
                                    forceViaL1: j,
                                    hyperlaneFromTokenRouterAddress: null == v ? void 0 : null === (e = v.hyperlane) || void 0 === e ? void 0 : e.router,
                                    hyperlaneToTokenRouterAddress: null == f ? void 0 : null === (t = f.hyperlane) || void 0 === t ? void 0 : t.router,
                                    hyperlane: (null == v ? void 0 : v.hyperlane) && (null == f ? void 0 : f.hyperlane) ? {
                                        from: v.hyperlane,
                                        to: f.hyperlane
                                    } : void 0,
                                    opBridgedUsdcAdapter: null == v ? void 0 : null === (a = v.opBridgedUsdcV2) || void 0 === a ? void 0 : a[null !== (h = null == u ? void 0 : u.id) && void 0 !== h ? h : 0],
                                    lzAdapter: null == v ? void 0 : null === (l = v.lz) || void 0 === l ? void 0 : l.adapter,
                                    skyBridge: null == v ? void 0 : null === (s = v.sky) || void 0 === s ? void 0 : s.bridge,
                                    ccip: (null == v ? void 0 : v.ccip) && (null == f ? void 0 : f.ccip) ? {
                                        fromPool: v.ccip.pool,
                                        toPool: f.ccip.pool
                                    } : void 0,
                                    lz: (null == v ? void 0 : null === (i = v.lz) || void 0 === i ? void 0 : i.adapter) && (null == f ? void 0 : null === (n = f.lz) || void 0 === n ? void 0 : n.adapter) ? {
                                        fromAdapter: v.lz.adapter,
                                        toAdapter: f.lz.adapter
                                    } : void 0
                                })
                            },
                            enabled: !!I && !!c && !!u && !!N && !!C && (!g || (0, tP.U)(g))
                        });
                    return {
                        isLoading: S.isFetching,
                        data: null !== (o = null === (i = S.data) || void 0 === i ? void 0 : i.data) && void 0 !== o ? o : null,
                        refetch: S.refetch
                    }
                },
                lp = e => e === ey.nY.ArbitrumDeposit || e === ey.nY.ArbitrumWithdrawal ? [ey.nY.ArbitrumDeposit, ey.nY.ArbitrumWithdrawal] : e === ey.nY.OptimismDeposit || e === ey.nY.OptimismWithdrawal || e === ey.nY.OptimismForcedWithdrawal ? [ey.nY.OptimismDeposit, ey.nY.OptimismWithdrawal, ey.nY.OptimismForcedWithdrawal] : [e],
                lv = () => {
                    var e, t, a, l, s;
                    let i = lx(),
                        n = er.useRouteId(),
                        d = lp(n);
                    if (i.isLoading) return {
                        isLoading: !0,
                        data: null
                    };
                    if (!n) {
                        let e = null === (t = i.data) || void 0 === t ? void 0 : t.results.find(e => !eB(e.result));
                        return {
                            isLoading: !1,
                            data: null !== (l = null != e ? e : null === (a = i.data) || void 0 === a ? void 0 : a.results[0]) && void 0 !== l ? l : null
                        }
                    }
                    return {
                        isLoading: !1,
                        data: null !== (s = null === (e = i.data) || void 0 === e ? void 0 : e.results.find(e => d.includes(e.id))) && void 0 !== s ? s : null
                    }
                };

            function lf(e) {
                if (e && e_(e.result)) return e.result.tokenApprovalAddress
            }

            function lg() {
                var e;
                let t = ev(),
                    a = (0, w.m)(),
                    l = lf(lv().data);
                return (0, aZ.u)({
                    abi: aO.Wo,
                    functionName: "allowance",
                    args: [a.address, l],
                    address: null !== (e = null == t ? void 0 : t.address) && void 0 !== e ? e : "0x",
                    query: {
                        enabled: !!t && !!a.address && !eu(t) && !!l
                    },
                    chainId: null == t ? void 0 : t.chainId
                })
            }

            function lj(e) {
                return e.includes("publicnode.com") && e.lastIndexOf("/") > e.indexOf(".com") ? e.substring(0, e.lastIndexOf("/")) : e
            }
            let lb = () => {
                    let e = (0, lr.p)();
                    return async t => {
                        var a, l;
                        try {
                            await (null === (a = e.data) || void 0 === a ? void 0 : a.switchChain(t)), await new Promise(e => setTimeout(e, 500))
                        } catch (a) {
                            if (a.message.includes("Unrecognized chain ID")) {
                                let a = {
                                    ...t.nativeCurrency
                                };
                                1 === a.symbol.length && (a.symbol = "".concat(a.symbol, ".")), a.decimals = 18;
                                let s = {
                                    ...t,
                                    nativeCurrency: a
                                };
                                s.rpcUrls.default.http = s.rpcUrls.default.http.map(lj), await (null === (l = e.data) || void 0 === l ? void 0 : l.addChain({
                                    chain: s
                                })), await new Promise(e => setTimeout(e, 1e3))
                            }
                        }
                    }
                },
                lw = (e, t, a, l, s, i, n, o, c, u, m, h, x, p, v) => {
                    var f, g, j, b;
                    let {
                        from: w,
                        to: N
                    } = v;
                    if (!i || !n) return null;
                    if (m == ey.nY.Across) return {
                        id: Math.random().toString(),
                        deposit: {
                            transactionHash: c
                        },
                        fromChainId: w.id,
                        toChainId: N.id,
                        createdAt: new Date().toString(),
                        updatedAt: new Date().toString(),
                        metadata: {
                            type: "across-bridge",
                            from: t,
                            to: a,
                            data: {
                                isEth: eu(i),
                                inputAmount: l.toString(),
                                outputAmount: s.toString(),
                                inputTokenAddress: null !== (f = null == i ? void 0 : i.address) && void 0 !== f ? f : "",
                                outputTokenAddress: null !== (g = null == n ? void 0 : n.address) && void 0 !== g ? g : ""
                            }
                        },
                        duration: 12e4,
                        type: "across-bridge",
                        fill: void 0
                    };
                    if (m == ey.nY.Hyperlane) {
                        let e = h.find(e => e.chainId === w.id),
                            s = h.find(e => e.chainId === N.id);
                        return e && s ? {
                            id: Math.random().toString(),
                            send: {
                                transactionHash: c
                            },
                            createdAt: new Date().toString(),
                            updatedAt: new Date().toString(),
                            amount: l.toString(),
                            type: "hyperlane-bridge",
                            receive: void 0,
                            duration: 12e4,
                            fromDomain: e.domain,
                            toDomain: s.domain,
                            from: t,
                            to: a,
                            token: null !== (b = null === (j = i.hyperlane) || void 0 === j ? void 0 : j.router) && void 0 !== b ? b : ""
                        } : null
                    }
                    if (m == ey.nY.Lz) {
                        let e = p.find(e => e.chainId === w.id),
                            n = p.find(e => e.chainId === N.id);
                        return e && n ? {
                            id: Math.random().toString(),
                            send: {
                                transactionHash: c
                            },
                            createdAt: new Date().toString(),
                            updatedAt: new Date().toString(),
                            amount: l.toString(),
                            receiveAmount: s.toString(),
                            type: "lz-bridge",
                            receive: void 0,
                            duration: 12e4,
                            from: t,
                            fromEid: e.eId,
                            toEid: n.eId,
                            to: a,
                            token: i.address
                        } : null
                    }
                    if (m == ey.nY.Ccip) {
                        let e = x.find(e => e.chainId === w.id),
                            n = x.find(e => e.chainId === N.id);
                        return e && n ? {
                            id: Math.random().toString(),
                            send: {
                                transactionHash: c
                            },
                            createdAt: new Date().toString(),
                            updatedAt: new Date().toString(),
                            amount: l.toString(),
                            receiveAmount: s.toString(),
                            type: "ccip-bridge",
                            receive: void 0,
                            duration: 15e5,
                            from: t,
                            fromSelector: e.selector,
                            toSelector: n.selector,
                            to: a,
                            token: i.address
                        } : null
                    }
                    if (m === ey.nY.Cctp) return {
                        id: Math.random().toString(),
                        bridge: {
                            transactionHash: c
                        },
                        createdAt: new Date().toString(),
                        updatedAt: new Date().toString(),
                        amount: l.toString(),
                        from: w,
                        to: N,
                        fromChainId: w.id,
                        toChainId: N.id,
                        type: "cctp-bridge",
                        relay: void 0,
                        token: i.address,
                        recipient: a,
                        sender: t
                    };
                    if (!e) return null;
                    let y = eu(i) ? {
                        type: "eth-deposit",
                        from: t,
                        to: a,
                        data: {
                            amount: l.toString()
                        }
                    } : {
                        type: "token-deposit",
                        from: t,
                        to: a,
                        data: {
                            amount: l.toString(),
                            l1TokenAddress: o ? n.address : i.address,
                            l2TokenAddress: o ? i.address : n.address
                        }
                    };
                    return (0, tp.uH)(e) && o ? u ? {
                        type: "forced-withdrawal",
                        deposit: {
                            type: "deposit",
                            id: Math.random().toString(),
                            createdAt: new Date().toString(),
                            updatedAt: new Date().toString(),
                            l1ChainId: e.l1ChainId,
                            l2ChainId: e.l2ChainId,
                            metadata: y,
                            l2TransactionHash: "",
                            deposit: {
                                transactionHash: c
                            },
                            status: r.UNCONFIRMED_L1_TO_L2_MESSAGE,
                            deploymentId: e.id
                        }
                    } : {
                        type: "withdrawal",
                        id: Math.random().toString(),
                        createdAt: new Date().toString(),
                        updatedAt: new Date().toString(),
                        l1ChainId: e.l1ChainId,
                        l2ChainId: e.l2ChainId,
                        from: t,
                        to: t,
                        withdrawal: {
                            transactionHash: c
                        },
                        metadata: y,
                        status: r.STATE_ROOT_NOT_PUBLISHED,
                        deploymentId: e.id,
                        finalizeDuration: e.finalizeDuration,
                        proveDuration: e.proveDuration
                    } : (0, tp.uH)(e) && !o ? {
                        type: "deposit",
                        id: Math.random().toString(),
                        createdAt: new Date().toString(),
                        updatedAt: new Date().toString(),
                        deposit: {
                            transactionHash: c
                        },
                        metadata: y,
                        status: r.UNCONFIRMED_L1_TO_L2_MESSAGE,
                        deploymentId: e.id,
                        duration: e.depositDuration
                    } : (0, tp.ul)(e) && !o ? {
                        type: "arbitrum-deposit-retryable",
                        deposit: {
                            transactionHash: c
                        },
                        id: Math.random().toString(),
                        createdAt: new Date().toString(),
                        updatedAt: new Date().toString(),
                        l2TransactionHash: "0x",
                        metadata: y,
                        deploymentId: e.id,
                        duration: e.depositDuration
                    } : (0, tp.ul)(e) && o ? {
                        type: "arbitrum-withdrawal",
                        id: Math.random().toString(),
                        createdAt: new Date().toString(),
                        updatedAt: new Date().toString(),
                        withdrawal: {
                            transactionHash: c
                        },
                        metadata: y,
                        status: d.UNCONFIRMED,
                        deploymentId: e.id,
                        duration: e.finalizeDuration
                    } : void 0
                },
                lN = e => {
                    var t, a;
                    let l = (0, te.T)(e);
                    return null !== (a = null == l ? void 0 : null === (t = l.arbitrumNativeToken) || void 0 === t ? void 0 : t.address) && void 0 !== a ? a : null
                };

            function ly() {
                return lC(lv().data)
            }

            function lC(e) {
                if (e && e_(e.result)) return e.result.gasTokenApprovalAddress
            }

            function lk() {
                let e = (0, w.m)(),
                    t = (0, tz.C)(),
                    a = lN(null == t ? void 0 : t.id),
                    l = (0, eh.kX)(),
                    s = ly();
                return (0, aZ.u)({
                    abi: aO.Wo,
                    functionName: "allowance",
                    args: [e.address, s],
                    address: a,
                    chainId: null == l ? void 0 : l.id
                })
            }

            function lI(e) {
                var t;
                return null === (t = (0, eh.Ab)(e)) || void 0 === t ? void 0 : t.nativeCurrency
            }

            function lS() {
                let e = (0, eh.kX)();
                return lI(null == e ? void 0 : e.id)
            }

            function lL() {
                let e = (0, eh.W)();
                return lI(null == e ? void 0 : e.id)
            }
            let lF = () => {
                    var e;
                    let t = lv();
                    return (null === (e = t.data) || void 0 === e ? void 0 : e.result) && e_(t.data.result) && t.data.result.steps[0] && eY(t.data.result.steps[0]) ? parseInt(t.data.result.steps[0].chainId) : void 0
                },
                lA = () => {
                    let e = lF();
                    return (0, eh.Ab)(e)
                },
                lT = () => {
                    var e, t;
                    let a = (0, y.Yv)(),
                        l = (0, y.AW)(),
                        s = K.useCurrency();
                    return (0, f.useCallback)(e => {
                        var t, i, n, d, r, o, c, u, m, h, x, p, v, f, g, j, b;
                        let w = null !== (d = null === (i = l.data) || void 0 === i ? void 0 : null === (t = i.data) || void 0 === t ? void 0 : t[s]) && void 0 !== d ? d : null,
                            N = null;
                        return (N = (null == e ? void 0 : e.name) === "Ether" ? null !== (u = null === (c = a.data) || void 0 === c ? void 0 : null === (o = c.data) || void 0 === o ? void 0 : null === (r = o["coingecko:ethereum"]) || void 0 === r ? void 0 : r.price) && void 0 !== u ? u : null : (null == e ? void 0 : e.coinGeckoId) ? null !== (p = null === (x = a.data) || void 0 === x ? void 0 : null === (h = x.data) || void 0 === h ? void 0 : null === (m = h["coingecko:".concat(e.coinGeckoId)]) || void 0 === m ? void 0 : m.price) && void 0 !== p ? p : null : (null == e ? void 0 : null === (n = e.address) || void 0 === n ? void 0 : n.toLowerCase()) == eo.DR ? null : null !== (b = null === (j = a.data) || void 0 === j ? void 0 : null === (g = j.data) || void 0 === g ? void 0 : null === (v = g["ethereum:".concat(null == e ? void 0 : null === (f = e.address) || void 0 === f ? void 0 : f.toLowerCase())]) || void 0 === v ? void 0 : v.price) && void 0 !== b ? b : null, w && N) ? w * N : null
                    }, [null === (e = a.data) || void 0 === e ? void 0 : e.data, null === (t = l.data) || void 0 === t ? void 0 : t.data, s])
                },
                lD = e => lT()(e),
                lM = e => {
                    let t = K.useCurrency(),
                        a = lD(e);
                    return l => {
                        var s;
                        let i = parseFloat((0, e7.b)(BigInt(null != l ? l : "0"), null !== (s = null == e ? void 0 : e.decimals) && void 0 !== s ? s : 18)),
                            n = a ? i * a : null,
                            d = n ? "".concat(aF[t]).concat(n.toLocaleString("en")) : null;
                        return {
                            fiat: n ? {
                                formatted: d,
                                amount: n
                            } : null,
                            token: {
                                formatted: "".concat(e6(i), " ").concat(null == e ? void 0 : e.symbol),
                                amount: i,
                                raw: l
                            }
                        }
                    }
                },
                lE = () => {
                    let e = lv(),
                        t = ef(),
                        a = lM(t);
                    return e.isLoading ? {
                        data: null,
                        isFetching: !0
                    } : {
                        data: e.data && e_(e.data.result) && t ? a(e.data.result.receive) : null,
                        isFetching: !1
                    }
                },
                lz = () => {
                    let e = lH(),
                        t = lR();
                    return e || t
                },
                lH = () => {
                    var e;
                    let t = lv().data;
                    return [ey.nY.OptimismWithdrawal, ey.nY.OptimismForcedWithdrawal].includes(null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "")
                },
                lR = () => {
                    let e = lv().data;
                    return (null == e ? void 0 : e.id) === ey.nY.ArbitrumWithdrawal
                },
                lB = () => {
                    let e = lv().data;
                    return (null == e ? void 0 : e.id) === ey.nY.ArbitrumDeposit
                };
            var lP = a(4649),
                lO = a(63957),
                l_ = a(13296),
                lZ = a(87866);
            let lG = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        [a, l] = (0, f.useState)("eip1559"),
                        s = (0, lZ.G)({
                            chainId: e || void 0,
                            type: a,
                            query: {
                                enabled: t,
                                staleTime: 3e4
                            }
                        });
                    return (0, f.useEffect)(() => {
                        var e;
                        (null === (e = s.failureReason) || void 0 === e ? void 0 : e.message.includes("does not support")) && l("legacy")
                    }, [s.failureReason]), (0, f.useMemo)(() => {
                        if (!s.data) return s;
                        let t = {
                            ...s.data
                        };
                        return t.maxFeePerGas && (e === lO.A.id ? t.maxFeePerGas *= BigInt(10) : e === l_.a.id && (t.maxFeePerGas = t.maxFeePerGas < (0, lm.v)("0.2", 9) ? (0, lm.v)("0.2", 9) : t.maxFeePerGas, t.maxPriorityFeePerGas = t.maxPriorityFeePerGas < (0, lm.v)("0.2", 9) ? (0, lm.v)("0.2", 9) : t.maxPriorityFeePerGas)), {
                            ...s,
                            data: t
                        }
                    }, [s.data, s.error, s.isFetching])
                },
                lW = () => {
                    var e;
                    return (null === (e = lv().data) || void 0 === e ? void 0 : e.id) === ey.nY.Across
                };
            var lY = a(57247);
            let lV = [{
                type: "function",
                name: "approve",
                stateMutability: "nonpayable",
                inputs: [{
                    name: "spender",
                    type: "address"
                }, {
                    name: "amount",
                    type: "uint256"
                }],
                outputs: []
            }];

            function l$(e) {
                let t = lh(),
                    a = lf(e),
                    l = ev();
                return !a || !l || eu(l) ? null : {
                    to: l.address,
                    value: "0",
                    chainId: l.chainId,
                    data: (0, lY.R)({
                        abi: lV,
                        functionName: "approve",
                        args: [a, t]
                    })
                }
            }
            let lU = () => {
                    var e, t, a, l, s, i, n;
                    let d = lB(),
                        r = (0, eh.kX)(),
                        o = (0, eh.W)(),
                        c = (0, lZ.G)({
                            chainId: null == r ? void 0 : r.id,
                            query: {
                                enabled: d
                            }
                        }),
                        u = (0, lZ.G)({
                            chainId: null == o ? void 0 : o.id,
                            query: {
                                enabled: d
                            }
                        }),
                        m = BigInt(1e5),
                        h = BigInt(3e5),
                        x = (null !== (l = null === (e = c.data) || void 0 === e ? void 0 : e.maxFeePerGas) && void 0 !== l ? l : BigInt(0)) + (null !== (s = null === (t = c.data) || void 0 === t ? void 0 : t.maxFeePerGas) && void 0 !== s ? s : BigInt(0)) / BigInt(20),
                        p = (null !== (i = null === (a = u.data) || void 0 === a ? void 0 : a.maxFeePerGas) && void 0 !== i ? i : BigInt(0)) * BigInt(3),
                        v = x * m;
                    return {
                        l1GasLimit: m,
                        l2GasLimit: h,
                        l1GasCost: x,
                        l2GasCost: p,
                        maxSubmissionCost: v,
                        extraAmount: aQ({
                            amount: p * h + v,
                            decimals: null !== (n = null == o ? void 0 : o.nativeCurrency.decimals) && void 0 !== n ? n : 18
                        })
                    }
                },
                lq = () => {
                    let e = ev(),
                        t = lh(),
                        a = lU(),
                        l = (0, tz.C)(),
                        s = lN(null == l ? void 0 : l.id);
                    return lB() && s && e ? (0, en.E)(e.address, s) ? t + a.extraAmount : a.extraAmount : null
                };

            function lK(e) {
                let t = (0, tz.C)(),
                    a = lN(null == t ? void 0 : t.id),
                    l = (0, eh.kX)(),
                    s = lq(),
                    i = lC(e);
                return a && i && l && s ? {
                    data: (0, lY.R)({
                        abi: lV,
                        args: [i, s],
                        functionName: "approve"
                    }),
                    to: a,
                    chainId: l.id
                } : null
            }
            let lX = () => {
                    let e = a1(ev()),
                        t = lh();
                    return !e.isLoading && t > e.data
                },
                lQ = () => {
                    var e;
                    return (null === (e = lv().data) || void 0 === e ? void 0 : e.id) === ey.nY.Cctp
                },
                lJ = () => {
                    var e;
                    return (null === (e = lv().data) || void 0 === e ? void 0 : e.id) === ey.nY.Hyperlane
                },
                l0 = () => {
                    var e;
                    return (null === (e = lv().data) || void 0 === e ? void 0 : e.id) === ey.nY.Lz
                },
                l1 = () => {
                    var e, t, a;
                    let l = lG(null === (e = (0, eh.kX)()) || void 0 === e ? void 0 : e.id);
                    return (null === (t = l.data) || void 0 === t ? void 0 : t.gasPrice) ? {
                        gasPrice: l.data.gasPrice.toString()
                    } : (null === (a = l.data) || void 0 === a ? void 0 : a.maxFeePerGas) ? {
                        gasPrice: l.data.maxFeePerGas.toString()
                    } : {}
                },
                l2 = e => {
                    let t = (0, ex.$)(),
                        a = lK(e),
                        l = l$(e),
                        s = lW(),
                        i = lQ(),
                        n = lJ(),
                        d = l0(),
                        r = lX(),
                        o = (null == e ? void 0 : e.result) && e_(e.result) ? e.result.initiatingTransaction : null,
                        c = l1(),
                        u = (0, w.m)();
                    return (0, Q.a)({
                        queryKey: ["useRouteGasEstimate", null == a ? void 0 : a.chainId, null == a ? void 0 : a.to, null == a ? void 0 : a.data, null == a ? void 0 : a.value, null == l ? void 0 : l.chainId, null == l ? void 0 : l.to, null == l ? void 0 : l.data, null == l ? void 0 : l.value, null == o ? void 0 : o.chainId, null == o ? void 0 : o.to, null == o ? void 0 : o.data, null == o ? void 0 : o.value, c.gasPrice, r, u.address],
                        queryFn: async () => {
                            if (!o) return null;
                            let e = [a ? {
                                ...a,
                                gasPrice: c.gasPrice
                            } : null, l ? {
                                ...l,
                                gasPrice: c.gasPrice
                            } : null, {
                                ...o,
                                chainId: parseInt(o.chainId),
                                gasPrice: c.gasPrice
                            }].filter(D.EN);
                            return r || !u.address ? {
                                success: !1,
                                estimates: e.map((t, a) => ({
                                    limit: a === e.length - 1 ? s ? 1e5 : i ? 11e4 : n ? 3e5 : d ? 35e4 : 5e5 : 5e5,
                                    chainId: t.chainId
                                }))
                            } : (await (0, y.bR)({
                                from: u.address,
                                domain: t,
                                transactions: e
                            })).data
                        },
                        enabled: !!o
                    })
                },
                l3 = () => l4(lv().data),
                l5 = () => l8(lv().data),
                l4 = e => {
                    var t, a;
                    let l = l2(e);
                    return (0, Q.a)({
                        queryKey: ["bridge gas estimate", null == e ? void 0 : e.id, ...null !== (a = null == l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : t.estimates.map(e => e.limit)) && void 0 !== a ? a : []],
                        queryFn: () => l.data ? l.data.estimates[l.data.estimates.length - 1].limit : null
                    })
                },
                l8 = e => {
                    let t = l2(e);
                    return t.isFetching ? {
                        isFetching: !0,
                        data: void 0
                    } : {
                        isFetching: !1,
                        data: t.data ? t.data.success : void 0
                    }
                },
                l7 = () => {
                    var e, t;
                    let a = lv(),
                        {
                            sendTransactionAsync: l,
                            isPending: s
                        } = (0, lP.p)(),
                        i = lG(null === (e = (0, eh.kX)()) || void 0 === e ? void 0 : e.id),
                        n = e_(null == a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.result) ? a.data.result : void 0,
                        d = null == n ? void 0 : n.initiatingTransaction,
                        r = l4(a.data),
                        o = {
                            ...i.data
                        };
                    return d && (null == r ? void 0 : r.data) && (o.data = d.data, o.to = d.to, o.chainId = parseInt(d.chainId), o.value = BigInt(d.value), o.gas = BigInt(r.data)), {
                        write: o.gas ? () => l(o) : void 0,
                        isLoading: s,
                        valid: !!d && !!o.gas,
                        gas: r
                    }
                },
                l6 = () => {
                    let e = l7(),
                        t = (0, lr.p)(),
                        a = (0, w.m)(),
                        l = (0, eh.kX)(),
                        s = (0, eh.W)(),
                        i = lb(),
                        n = ev(),
                        d = eX(),
                        r = lh(),
                        o = (0, tz.C)(),
                        c = lz(),
                        u = ev(),
                        m = ef(),
                        h = er.useForceViaL1(),
                        x = er.useRawAmount(),
                        p = er.useRecipientAddress(),
                        v = er.useSetSubmittingBridge(),
                        f = er.useSetSubmittedHash(),
                        g = eU.useAddTransaction(),
                        j = eU.useUpdateTransactionByHash(),
                        b = C(),
                        N = (0, eg.w)(),
                        y = eb(),
                        k = A(),
                        I = a0(),
                        S = lE(),
                        L = lS(),
                        F = lF(),
                        T = (0, eh.Ab)(F),
                        D = (0, lo.Z)(),
                        M = lv(),
                        E = lg(),
                        z = lk();
                    return async () => {
                        var w, C, F, A, H, R, B;
                        if (a.address && t.data && e.valid && p && !b && T && e_(null === (w = M.data) || void 0 === w ? void 0 : w.result)) try {
                            v(!0), (T.id !== a.chainId || T.id !== t.data.chain.id) && await i(T);
                            let b = await e.write(),
                                w = M.data.id === ey.nY.Hyperlane ? "hyperlane" : M.data.id === ey.nY.Across ? "across" : M.data.id === ey.nY.Cctp ? "cctp" : c ? "withdraw" : "deposit";
                            d({
                                event: "bridge",
                                from: null !== (F = null == l ? void 0 : l.name) && void 0 !== F ? F : "",
                                to: null !== (A = null == s ? void 0 : s.name) && void 0 !== A ? A : "",
                                amount: parseFloat(x),
                                token: null !== (H = null == n ? void 0 : n.symbol) && void 0 !== H ? H : "",
                                type: w,
                                transactionHash: b
                            });
                            let I = (null == u ? void 0 : u.address) === eo.DR ? function (e) {
                                    let {
                                        amount: t,
                                        decimals: a
                                    } = e;
                                    return a < 18 ? t * BigInt(10) ** BigInt(18 - a) : a > 18 ? t / BigInt(10) ** BigInt(a - 18) : t
                                }({
                                    amount: r,
                                    decimals: null !== (R = null == L ? void 0 : L.decimals) && void 0 !== R ? R : 18
                                }) : r,
                                E = lw(o, a.address, p, I, BigInt(null !== (B = null === (C = S.data) || void 0 === C ? void 0 : C.token.raw) && void 0 !== B ? B : "0"), u, m, c, b, h, M.data.id, N, k, y, {
                                    from: l,
                                    to: s
                                });
                            E && g(E), f(b), await (0, ld.e)(D, {
                                hash: b,
                                chainId: T.id,
                                onReplaced: e => {
                                    let {
                                        replacedTransaction: t,
                                        transaction: a
                                    } = e;
                                    j(t.hash, a.hash), f(a.hash)
                                }
                            })
                        } catch (e) {
                            if (e.message.includes("rejected")) return
                        } finally {
                            E.refetch(), z.refetch(), I.refetch(), v(!1)
                        }
                    }
                },
                l9 = e => {
                    let t = th.useAlerts(),
                        a = th.useSetAlerts(),
                        l = l6();
                    return () => {
                        a(t.filter(t => t !== e)), 1 === t.length && l()
                    }
                },
                se = () => {
                    var e, t, a, l, s, i, n, d, r;
                    let o = (0, eh.kX)(),
                        c = (0, eh.W)(),
                        u = lG(null == o ? void 0 : o.id),
                        m = lG(null == c ? void 0 : c.id),
                        h = lS(),
                        x = lL(),
                        p = lv(),
                        v = l3(),
                        f = lD(null != h ? h : null),
                        g = lD(null != x ? x : null),
                        j = null !== (n = null !== (i = null === (e = u.data) || void 0 === e ? void 0 : e.gasPrice) && void 0 !== i ? i : null === (t = u.data) || void 0 === t ? void 0 : t.maxFeePerGas) && void 0 !== n ? n : BigInt(0),
                        b = null !== (r = null !== (d = null === (a = m.data) || void 0 === a ? void 0 : a.gasPrice) && void 0 !== d ? d : null === (l = m.data) || void 0 === l ? void 0 : l.maxFeePerGas) && void 0 !== r ? r : BigInt(0);
                    return p.isLoading ? {
                        isLoading: !0,
                        data: null
                    } : e_(null === (s = p.data) || void 0 === s ? void 0 : s.result) ? {
                        isLoading: !1,
                        data: p.data.result.steps.reduce((e, t, a) => {
                            if (eY(t)) {
                                var l, s, i, n;
                                let d = parseInt(t.chainId) === (null == o ? void 0 : o.id) ? {
                                    token: h,
                                    price: f,
                                    gasPrice: j
                                } : {
                                    token: x,
                                    price: g,
                                    gasPrice: b
                                };
                                if (!d.price) return e;
                                let r = aQ({
                                        amount: BigInt(0 === a && v.data || t.estimatedGasLimit) * d.gasPrice,
                                        decimals: null !== (i = null === (l = d.token) || void 0 === l ? void 0 : l.decimals) && void 0 !== i ? i : 18
                                    }),
                                    c = parseFloat((0, e7.b)(r, null !== (n = null === (s = d.token) || void 0 === s ? void 0 : s.decimals) && void 0 !== n ? n : 18));
                                return d.price * c + e
                            }
                            return e
                        }, 0)
                    } : {
                        isLoading: !1,
                        data: null
                    }
                },
                st = () => {
                    var e;
                    let t = l9("gas-expensive"),
                        a = ln(),
                        l = th.useAlerts().includes("gas-expensive"),
                        {
                            t: s
                        } = (0, g.$G)(),
                        i = ev(),
                        n = se(),
                        d = lD(i),
                        r = parseFloat(er.useRawAmount()) || 0,
                        o = K.useCurrency(),
                        c = d ? "".concat(aF[o]).concat(e6(r * d)) : void 0,
                        m = "".concat(aF[o]).concat(null === (e = n.data) || void 0 === e ? void 0 : e.toLocaleString("en"), " ");
                    return (0, u.jsx)(ao.Vq, {
                        open: l,
                        onOpenChange: a,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsxs)(ao.fK, {
                                className: "flex flex-col gap-2 items-center text-center pt-10 pb-0",
                                children: [(0, u.jsx)("div", {
                                    className: "animate-bounce",
                                    children: (0, u.jsx)(eJ.az, {})
                                }), (0, u.jsx)(ao.$N, {
                                    className: "font-heading text-2xl text-pretty",
                                    children: s("expensiveGasModal.title")
                                }), (0, u.jsx)(ao.Be, {
                                    className: "text-xs md:text-sm prose-sm text-pretty text-center text-muted-foreground",
                                    children: (0, u.jsx)(g.cC, {
                                        i18nKey: "expensiveGasModal.notBestOption",
                                        components: [(0, u.jsx)("a", {
                                            target: "_blank",
                                            className: "hover:underline text-foreground",
                                            href: "https://superbridge.app/alternative-bridges"
                                        }, "link")]
                                    })
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-8 p-6",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col rounded-lg border",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex items-center justify-between border-b px-3 py-2",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(tg, {
                                                token: i,
                                                className: "h-6 w-6"
                                            }), (0, u.jsx)("span", {
                                                className: "font-heading text-sm ",
                                                children: s("expensiveGasModal.bridgeAmount")
                                            })]
                                        }), (0, u.jsx)("div", {
                                            className: "flex items-center",
                                            children: (0, u.jsx)("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: c
                                            })
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex items-center justify-between px-3 py-2",
                                        children: [(0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(eJ.G2, {
                                                className: "h-6 w-6"
                                            }), (0, u.jsx)("span", {
                                                className: "font-heading text-sm ",
                                                children: s("expensiveGasModal.networkFees")
                                            })]
                                        }), (0, u.jsx)("div", {
                                            className: "flex items-center",
                                            children: (0, u.jsx)("span", {
                                                className: "text-sm text-red-500",
                                                children: m
                                            })
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, u.jsx)(ax.z, {
                                        onClick: a,
                                        children: s("expensiveGasModal.goBack")
                                    }), (0, u.jsxs)(ax.z, {
                                        variant: "secondary",
                                        onClick: t,
                                        children: [(0, u.jsx)("span", {
                                            children: s("expensiveGasModal.proceedAnyway")
                                        }), (0, u.jsx)(eJ.az, {
                                            className: "ml-2 w-4 h-4"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                sa = () => {
                    let e = l9("fault-proofs"),
                        t = ln(),
                        a = th.useAlerts().includes("fault-proofs"),
                        {
                            t: l
                        } = (0, g.$G)();
                    return (0, u.jsx)(ao.Vq, {
                        open: a,
                        onOpenChange: t,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col gap-8 p-6",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 pt-6",
                                    children: [(0, u.jsx)("div", {
                                        className: "animate-bounce mx-auto",
                                        children: (0, u.jsx)(eJ.az, {
                                            className: "w-16 h-16"
                                        })
                                    }), (0, u.jsx)("h1", {
                                        className: "font-heading text-xl  text-left",
                                        children: "Soneium Mainnet Fault Proof upgrade"
                                    }), (0, u.jsxs)("div", {
                                        className: "text-xs text-left md:text-sm prose-sm  leading-relaxed  text-muted-foreground text-pretty",
                                        children: [(0, u.jsx)("p", {
                                            children: "The Soneium Mainnet Fault Proof upgrade has been targeted for November 4th."
                                        }), (0, u.jsx)("p", {
                                            children: "Any withdrawals initiated now should be proved before the upgrade is complete, otherwise they will need to be reproven."
                                        }), (0, u.jsxs)("p", {
                                            children: ["Find out more at", " ", (0, u.jsx)("a", {
                                                href: eQ.R,
                                                target: "_blank",
                                                className: "text-foreground underline",
                                                children: "optimism.io"
                                            }), " ", "or check the", " ", (0, u.jsx)("a", {
                                                href: "https://help.superbridge.app/en/articles/9759328-fault-proof-upgrade",
                                                target: "_blank",
                                                className: "text-foreground underline",
                                                children: "FAQs"
                                            }), "."]
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, u.jsx)(ax.z, {
                                        onClick: t,
                                        children: l("noGasModal.goBack")
                                    }), (0, u.jsxs)(ax.z, {
                                        variant: "secondary",
                                        onClick: e,
                                        children: [(0, u.jsx)("span", {
                                            children: l("noGasModal.proceedAnyway")
                                        }), (0, u.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            className: "ml-2 w-4 h-4",
                                            children: [(0, u.jsxs)("g", {
                                                clipPath: "url(#clip0_19201_1331)",
                                                children: [(0, u.jsx)("path", {
                                                    d: "M7.48321 5.47569C7.48321 5.10034 7.65238 4.89152 8.00394 4.89152C8.35551 4.89152 8.53261 5.10034 8.53261 5.47569C8.53261 5.85104 8.14933 9.15783 8.06738 9.78166C8.05945 9.85303 8.04359 9.9244 8.00394 9.9244C7.96429 9.9244 7.94843 9.86889 7.9405 9.77108C7.86914 9.15519 7.48321 5.83518 7.48321 5.47305V5.47569ZM7.48321 12.6919C7.48321 12.4118 7.71582 12.1791 8.00394 12.1791C8.29207 12.1791 8.51675 12.4118 8.51675 12.6919C8.51675 12.9721 8.28414 13.2127 8.00394 13.2127C7.72375 13.2127 7.48321 12.9801 7.48321 12.6919ZM1.2397 15.5097H14.755C15.7964 15.5097 16.2987 14.685 15.8123 13.7889L9.01898 1.2411C8.47446 0.241923 7.54665 0.241923 7.00213 1.23317L0.185012 13.781C-0.296072 14.6771 0.200872 15.5097 1.24234 15.5097H1.2397Z",
                                                    fill: "#FFFF55"
                                                }), (0, u.jsx)("path", {
                                                    d: "M6.52111 5.47534C6.52111 5.89827 6.93611 9.22092 7.04185 9.93197C7.12908 10.5399 7.50707 10.8836 8.00137 10.8836C8.53004 10.8836 8.86574 10.4924 8.95297 9.93197C9.13007 8.82706 9.48956 5.89827 9.48956 5.47534C9.48956 4.68234 8.8816 3.93164 8.00137 3.93164C7.12115 3.93164 6.52111 4.69292 6.52111 5.47534ZM8.0093 14.1798C8.81816 14.1798 9.48163 13.5163 9.48163 12.6837C9.48163 11.851 8.81816 11.2113 8.0093 11.2113C7.20045 11.2113 6.51318 11.8748 6.51318 12.6837C6.51318 13.4925 7.17666 14.1798 8.0093 14.1798Z",
                                                    fill: "white"
                                                }), (0, u.jsx)("path", {
                                                    d: "M7.48321 5.47569C7.48321 5.10034 7.65238 4.89152 8.00394 4.89152C8.35551 4.89152 8.53261 5.10034 8.53261 5.47569C8.53261 5.85104 8.14933 9.15783 8.06738 9.78166C8.05945 9.85303 8.04359 9.9244 8.00394 9.9244C7.96429 9.9244 7.94843 9.86889 7.9405 9.77108C7.86914 9.15519 7.48321 5.83518 7.48321 5.47305V5.47569ZM7.48321 12.6919C7.48321 12.4118 7.71582 12.1791 8.00394 12.1791C8.29207 12.1791 8.51675 12.4118 8.51675 12.6919C8.51675 12.9721 8.28414 13.2127 8.00394 13.2127C7.72375 13.2127 7.48321 12.9801 7.48321 12.6919ZM6.52104 5.47569C6.52104 5.89862 6.93604 9.22127 7.04178 9.93233C7.12901 10.5403 7.507 10.8839 8.0013 10.8839C8.52996 10.8839 8.86567 10.4927 8.9529 9.93233C9.13 8.82742 9.48949 5.89862 9.48949 5.47569C9.48949 4.6827 8.88153 3.93199 8.0013 3.93199C7.12108 3.93199 6.52104 4.69327 6.52104 5.47569ZM6.51311 12.684C6.51311 13.5167 7.17659 14.1801 8.00923 14.1801C8.84188 14.1801 9.48156 13.5167 9.48156 12.684C9.48156 11.8514 8.81809 11.2117 8.00923 11.2117C7.20038 11.2117 6.51311 11.8752 6.51311 12.684ZM1.03352 14.2462L7.85063 1.69839C8.06738 1.29132 7.95372 1.29132 8.17047 1.69046L14.9638 14.2383C15.1488 14.574 15.1647 14.5502 14.755 14.5502H1.2397C0.832625 14.5502 0.848484 14.574 1.03087 14.2462H1.03352ZM1.2397 15.5097H14.755C15.7964 15.5097 16.2987 14.685 15.8123 13.7889L9.01898 1.2411C8.47446 0.241923 7.54665 0.241923 7.00213 1.23317L0.185012 13.781C-0.296072 14.6771 0.200872 15.5097 1.24234 15.5097H1.2397Z",
                                                    fill: "black"
                                                })]
                                            }), (0, u.jsx)("defs", {
                                                children: (0, u.jsx)("clipPath", {
                                                    id: "clip0_19201_1331",
                                                    children: (0, u.jsx)("rect", {
                                                        width: "16",
                                                        height: "15.0193",
                                                        fill: "white",
                                                        transform: "translate(0 0.490234)"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                sl = [R.R.id, B.v.id, P.u.id, O.y.id, J.x.id],
                ss = e => !!sl.includes(e.l1ChainId) && !!sl.includes(e.l2ChainId),
                si = () => {
                    let e = l9("no-gas"),
                        t = ln(),
                        a = th.useAlerts().includes("no-gas"),
                        l = (0, S.L4)(),
                        {
                            t: s
                        } = (0, g.$G)(),
                        i = lz(),
                        n = lQ(),
                        d = (0, eh.kX)(),
                        r = (0, eh.W)(),
                        o = ev(),
                        c = (0, tz.C)(),
                        m = lL(),
                        h = {
                            from: null == d ? void 0 : d.name,
                            to: null == r ? void 0 : r.name,
                            gas: null == m ? void 0 : m.symbol,
                            symbol: null == o ? void 0 : o.symbol,
                            token: null == o ? void 0 : o.name
                        },
                        x = (0, b.EQ)({
                            isCctp: n,
                            withdrawing: i,
                            family: null == c ? void 0 : c.family
                        }).with({
                            withdrawing: !1
                        }, () => s("noGasModal.depositing", h)).with({
                            isCctp: !0
                        }, () => s("noGasModal.cctp", h)).with({
                            withdrawing: !0,
                            family: ey.c3.optimism
                        }, () => s("noGasModal.opWithdrawing", h)).with({
                            withdrawing: !0,
                            family: ey.c3.arbitrum
                        }, () => s("noGasModal.arbWithdrawing", h)).otherwise(() => null),
                        p = (0, b.EQ)({
                            withdrawing: i,
                            supportsAcross: l && !!c && ss(c)
                        }).otherwise(() => ({
                            text: s("noGasModal.goBack", h),
                            onClick: t
                        }));
                    return (0, u.jsx)(ao.Vq, {
                        open: a,
                        onOpenChange: t,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsxs)(ao.fK, {
                                className: "flex flex-col gap-2 items-center text-center pt-10 pb-0",
                                children: [(0, u.jsx)("div", {
                                    className: "animate-bounce",
                                    children: (0, u.jsx)(eJ.In, {
                                        className: "w-16 h-auto"
                                    })
                                }), (0, u.jsx)(ao.$N, {
                                    className: "font-heading text-2xl  text-pretty",
                                    children: s("noGasModal.youNeedGasOn", h)
                                }), (0, u.jsx)(ao.Be, {
                                    className: "text-xs md:text-sm prose-sm font-heading text-pretty text-center text-muted-foreground",
                                    children: x
                                })]
                            }), (0, u.jsx)("div", {
                                className: "flex flex-col gap-8 p-6",
                                children: (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, u.jsx)("a", {
                                        href: "https://help.superbridge.app",
                                        target: "_blank",
                                        className: "text-xs text-center font-heading text-foreground hover:underline mb-2",
                                        children: s("noGasModal.needHelp")
                                    }), (0, u.jsx)(ax.z, {
                                        onClick: p.onClick,
                                        children: p.text
                                    }), (0, u.jsxs)(ax.z, {
                                        variant: "secondary",
                                        onClick: e,
                                        children: [(0, u.jsx)("span", {
                                            children: s("noGasModal.proceedAnyway")
                                        }), (0, u.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            className: "ml-2 w-4 h-4",
                                            children: [(0, u.jsxs)("g", {
                                                clipPath: "url(#clip0_19201_1331)",
                                                children: [(0, u.jsx)("path", {
                                                    d: "M7.48321 5.47569C7.48321 5.10034 7.65238 4.89152 8.00394 4.89152C8.35551 4.89152 8.53261 5.10034 8.53261 5.47569C8.53261 5.85104 8.14933 9.15783 8.06738 9.78166C8.05945 9.85303 8.04359 9.9244 8.00394 9.9244C7.96429 9.9244 7.94843 9.86889 7.9405 9.77108C7.86914 9.15519 7.48321 5.83518 7.48321 5.47305V5.47569ZM7.48321 12.6919C7.48321 12.4118 7.71582 12.1791 8.00394 12.1791C8.29207 12.1791 8.51675 12.4118 8.51675 12.6919C8.51675 12.9721 8.28414 13.2127 8.00394 13.2127C7.72375 13.2127 7.48321 12.9801 7.48321 12.6919ZM1.2397 15.5097H14.755C15.7964 15.5097 16.2987 14.685 15.8123 13.7889L9.01898 1.2411C8.47446 0.241923 7.54665 0.241923 7.00213 1.23317L0.185012 13.781C-0.296072 14.6771 0.200872 15.5097 1.24234 15.5097H1.2397Z",
                                                    fill: "#FFFF55"
                                                }), (0, u.jsx)("path", {
                                                    d: "M6.52111 5.47534C6.52111 5.89827 6.93611 9.22092 7.04185 9.93197C7.12908 10.5399 7.50707 10.8836 8.00137 10.8836C8.53004 10.8836 8.86574 10.4924 8.95297 9.93197C9.13007 8.82706 9.48956 5.89827 9.48956 5.47534C9.48956 4.68234 8.8816 3.93164 8.00137 3.93164C7.12115 3.93164 6.52111 4.69292 6.52111 5.47534ZM8.0093 14.1798C8.81816 14.1798 9.48163 13.5163 9.48163 12.6837C9.48163 11.851 8.81816 11.2113 8.0093 11.2113C7.20045 11.2113 6.51318 11.8748 6.51318 12.6837C6.51318 13.4925 7.17666 14.1798 8.0093 14.1798Z",
                                                    fill: "white"
                                                }), (0, u.jsx)("path", {
                                                    d: "M7.48321 5.47569C7.48321 5.10034 7.65238 4.89152 8.00394 4.89152C8.35551 4.89152 8.53261 5.10034 8.53261 5.47569C8.53261 5.85104 8.14933 9.15783 8.06738 9.78166C8.05945 9.85303 8.04359 9.9244 8.00394 9.9244C7.96429 9.9244 7.94843 9.86889 7.9405 9.77108C7.86914 9.15519 7.48321 5.83518 7.48321 5.47305V5.47569ZM7.48321 12.6919C7.48321 12.4118 7.71582 12.1791 8.00394 12.1791C8.29207 12.1791 8.51675 12.4118 8.51675 12.6919C8.51675 12.9721 8.28414 13.2127 8.00394 13.2127C7.72375 13.2127 7.48321 12.9801 7.48321 12.6919ZM6.52104 5.47569C6.52104 5.89862 6.93604 9.22127 7.04178 9.93233C7.12901 10.5403 7.507 10.8839 8.0013 10.8839C8.52996 10.8839 8.86567 10.4927 8.9529 9.93233C9.13 8.82742 9.48949 5.89862 9.48949 5.47569C9.48949 4.6827 8.88153 3.93199 8.0013 3.93199C7.12108 3.93199 6.52104 4.69327 6.52104 5.47569ZM6.51311 12.684C6.51311 13.5167 7.17659 14.1801 8.00923 14.1801C8.84188 14.1801 9.48156 13.5167 9.48156 12.684C9.48156 11.8514 8.81809 11.2117 8.00923 11.2117C7.20038 11.2117 6.51311 11.8752 6.51311 12.684ZM1.03352 14.2462L7.85063 1.69839C8.06738 1.29132 7.95372 1.29132 8.17047 1.69046L14.9638 14.2383C15.1488 14.574 15.1647 14.5502 14.755 14.5502H1.2397C0.832625 14.5502 0.848484 14.574 1.03087 14.2462H1.03352ZM1.2397 15.5097H14.755C15.7964 15.5097 16.2987 14.685 15.8123 13.7889L9.01898 1.2411C8.47446 0.241923 7.54665 0.241923 7.00213 1.23317L0.185012 13.781C-0.296072 14.6771 0.200872 15.5097 1.24234 15.5097H1.2397Z",
                                                    fill: "black"
                                                })]
                                            }), (0, u.jsx)("defs", {
                                                children: (0, u.jsx)("clipPath", {
                                                    id: "clip0_19201_1331",
                                                    children: (0, u.jsx)("rect", {
                                                        width: "16",
                                                        height: "15.0193",
                                                        fill: "white",
                                                        transform: "translate(0 0.490234)"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                };
            var sn = a(58609),
                sd = a(8283),
                sr = a.n(sd),
                so = a(33995);
            let sc = [ey.nY.ArbitrumDeposit, ey.nY.ArbitrumWithdrawal, ey.nY.OptimismDeposit, ey.nY.OptimismWithdrawal, ey.nY.OptimismForcedWithdrawal],
                su = [ey.nY.ArbitrumDeposit, ey.nY.OptimismDeposit],
                sm = [ey.nY.ArbitrumWithdrawal, ey.nY.OptimismWithdrawal, ey.nY.OptimismForcedWithdrawal],
                sh = [ey.nY.OptimismDeposit, ey.nY.OptimismWithdrawal, ey.nY.OptimismForcedWithdrawal],
                sx = {
                    [ey.nY.Across]: "/img/networks/across.svg",
                    [ey.nY.Cctp]: "/img/networks/cctp.svg",
                    [ey.nY.ArbitrumDeposit]: "/img/networks/arbitrum-one.svg",
                    [ey.nY.ArbitrumWithdrawal]: "/img/networks/arbitrum-one.svg",
                    [ey.nY.OptimismDeposit]: "/img/networks/optimism.svg",
                    [ey.nY.OptimismWithdrawal]: "/img/networks/optimism.svg",
                    [ey.nY.OptimismForcedWithdrawal]: "/img/networks/optimism.svg",
                    [ey.nY.Hyperlane]: "/img/networks/hyperlane.svg",
                    [ey.nY.Lz]: "/img/lz/icon.png",
                    [ey.nY.Ccip]: "/img/lz/icon.png"
                };
            ey.nY.Across, ey.zT["across-bridge"], ey.nY.Cctp, ey.MS["cctp-bridge"], ey.nY.ArbitrumDeposit, ey.su["arbitrum-deposit-eth"], ey.nY.ArbitrumWithdrawal, ey.su["arbitrum-withdrawal"], ey.nY.OptimismDeposit, ey.CY.deposit, ey.nY.OptimismWithdrawal, ey.CY.withdrawal, ey.nY.OptimismForcedWithdrawal, ey.CY["forced-withdrawal"], ey.nY.Hyperlane, ey.MI["hyperlane-bridge"], ey.nY.Lz, ey.tK["lz-bridge"], ey.nY.Ccip, ey.MS["cctp-bridge"];
            let sp = e => {
                    let {
                        provider: t
                    } = e, a = tu(t);
                    return (0, u.jsx)("span", {
                        children: a
                    })
                },
                sv = e => {
                    let {
                        provider: t,
                        className: a,
                        fromChainId: l,
                        toChainId: s
                    } = e, i = (0, eg.w)();
                    if (!t) return null;
                    let n = sx[t];
                    if (sc.includes(t)) {
                        let e = su.includes(t) ? s : l,
                            a = so.x[e];
                        360 === e && (a = i.length ? "/img/networks/molten.svg" : "/img/shape/icon.svg"), a && (n = a)
                    }
                    return (0, u.jsx)(sr(), {
                        alt: "".concat(t, " icon"),
                        src: n,
                        className: a,
                        height: 16,
                        width: 16
                    })
                },
                sf = e => {
                    var t;
                    let {
                        address: a
                    } = e;
                    return null !== (t = (0, sn.F)({
                        address: a
                    }).data) && void 0 !== t ? t : (null == a ? void 0 : a.slice(0, 6)) + "..." + (null == a ? void 0 : a.slice(a.length - 6))
                },
                sg = e => {
                    var t, a, l, s, i, n, d, r;
                    let {
                        from: o,
                        to: c,
                        provider: m,
                        transferTime: h,
                        recipient: x,
                        sender: p,
                        token: v,
                        sentAmount: f,
                        receivedAmount: j
                    } = e, {
                        t: b
                    } = (0, g.$G)();
                    return tx("FeeBreakdown"), tx("GasInfo"), (0, u.jsx)("div", {
                        children: (0, u.jsx)("div", {
                            className: "flex flex-col gap-2 px-6",
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col divide-y divide-border rounded-xl border py-0.5 text-xs",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(tf.d, {
                                                chain: o,
                                                className: "h-4 w-4 rounded-xs"
                                            }), (0, u.jsx)("span", {
                                                children: b("transaction.fromChain", {
                                                    from: null == o ? void 0 : o.name
                                                })
                                            })]
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex gap-1.5 items-center justify-between ",
                                        children: [f, " ", null == v ? void 0 : null === (t = v[null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : 0]) || void 0 === t ? void 0 : t.symbol, (0, u.jsx)(tg, {
                                            token: null == v ? void 0 : v[null !== (s = null == o ? void 0 : o.id) && void 0 !== s ? s : 0],
                                            className: "h-4 w-4 !text-[8px]"
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(tf.d, {
                                                chain: c,
                                                className: "h-4 w-4 rounded-xs"
                                            }), (0, u.jsx)("span", {
                                                children: b("transaction.toChain", {
                                                    to: null == c ? void 0 : c.name
                                                })
                                            })]
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex gap-1.5 items-center justify-between ",
                                        children: [j, " ", null == v ? void 0 : null === (a = v[null !== (i = null == c ? void 0 : c.id) && void 0 !== i ? i : 0]) || void 0 === a ? void 0 : a.symbol, (0, u.jsx)(tg, {
                                            token: null == v ? void 0 : v[null !== (n = null == c ? void 0 : c.id) && void 0 !== n ? n : 0],
                                            className: "h-4 w-4 !text-[8px]"
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(eJ.sK, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: b("transaction.via")
                                            })]
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex gap-1.5 items-center justify-between ",
                                        children: [(0, u.jsx)(sp, {
                                            provider: m
                                        }), (0, u.jsx)(sv, {
                                            provider: m,
                                            fromChainId: null !== (d = null == o ? void 0 : o.id) && void 0 !== d ? d : 0,
                                            toChainId: null !== (r = null == c ? void 0 : c.id) && void 0 !== r ? r : 0,
                                            className: "h-4 w-4 rounded-xs"
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(eJ.IX, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: b("transaction.fromAddress")
                                            })]
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: "flex gap-1.5 items-center justify-between ",
                                        children: (0, u.jsx)(sf, {
                                            address: p
                                        })
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(eJ.m7, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: b("transaction.toAddress")
                                            })]
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: "flex gap-1.5 items-center justify-between ",
                                        children: (0, u.jsx)(sf, {
                                            address: x
                                        })
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, u.jsx)(eJ.qS, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: b("transaction.transferTime")
                                            })]
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsx)("span", {
                                            children: h
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                sj = () => sb(lv()),
                sb = e => {
                    var t, a, l;
                    let s = ev();
                    ef();
                    let i = K.useCurrency(),
                        n = lT(),
                        d = (0, eh.kX)();
                    if (e.isLoading) return {
                        isLoading: !0,
                        data: null
                    };
                    let r = e_(null === (t = e.data) || void 0 === t ? void 0 : t.result) ? e.data.result.fees.map(e => {
                            var t, a, l;
                            if (!d) return null;
                            let r = (0, en.E)(e.tokenAddress, eo.DR) ? {
                                    ...d.nativeCurrency,
                                    logoURI: null !== (a = so.x[null !== (t = null == d ? void 0 : d.id) && void 0 !== t ? t : 0]) && void 0 !== a ? a : ""
                                } : s,
                                o = parseFloat((0, e7.b)(BigInt(e.amount), null !== (l = null == r ? void 0 : r.decimals) && void 0 !== l ? l : 18)),
                                c = n(r),
                                u = c ? o * c : null,
                                m = u ? "".concat(aF[i]).concat(u.toLocaleString("en")) : null,
                                h = "".concat(e6(o), " ").concat(null == r ? void 0 : r.symbol);
                            return {
                                name: e.name,
                                fiat: null !== u ? {
                                    formatted: m,
                                    amount: u
                                } : null,
                                token: {
                                    formatted: h,
                                    amount: o,
                                    token: r
                                }
                            }
                        }).filter(D.EN) : [],
                        o = r.reduce((e, t) => "number" == typeof e && t.fiat ? t.fiat.amount + e : null, 0),
                        c = null !== o ? "".concat(aF[i]).concat(o.toLocaleString("en")) : null,
                        u = r.reduce((e, t) => t.token.amount + e, 0),
                        m = "".concat(e6(u), " ").concat(null === (l = r[0]) || void 0 === l ? void 0 : null === (a = l.token.token) || void 0 === a ? void 0 : a.symbol);
                    return {
                        isLoading: !1,
                        data: {
                            fees: r,
                            totals: {
                                fiat: o,
                                fiatFormatted: c,
                                token: u,
                                tokenFormatted: m
                            }
                        }
                    }
                },
                sw = () => {
                    var e;
                    let t = lv(),
                        a = l4(t.data);
                    return sN(e_(null === (e = t.data) || void 0 === e ? void 0 : e.result) ? parseInt(t.data.result.steps[0].chainId) : void 0, a.data)
                },
                sN = (e, t) => {
                    var a, l;
                    let s = lI(e),
                        i = lM(s),
                        n = lG(e, !!t);
                    return n.isFetching ? {
                        isLoading: !0,
                        data: null
                    } : n.data && t ? {
                        isLoading: !1,
                        data: i(aQ({
                            amount: (n.data.maxFeePerGas ? n.data.maxFeePerGas : null !== (a = n.data.gasPrice) && void 0 !== a ? a : BigInt(0)) * BigInt(t),
                            decimals: null !== (l = null == s ? void 0 : s.decimals) && void 0 !== l ? l : 18
                        }).toString())
                    } : {
                        isLoading: !1,
                        data: null
                    }
                },
                sy = () => {
                    let {
                        t: e
                    } = (0, g.$G)();
                    return (t, a, l) => {
                        let s = (null == l ? void 0 : l.period) === "secs" ? e("".concat(t, "Seconds"), {
                            ...a,
                            count: l.value
                        }).toString() : (null == l ? void 0 : l.period) === "mins" ? e("".concat(t, "Minutes"), {
                            ...a,
                            count: l.value
                        }).toString() : (null == l ? void 0 : l.period) === "hours" ? e("".concat(t, "Hours"), {
                            ...a,
                            count: l.value
                        }).toString() : e("".concat(t, "Days"), {
                            ...a,
                            count: null == l ? void 0 : l.value
                        }).toString();
                        return null != s ? s : ""
                    }
                },
                sC = e => {
                    var t, a;
                    let l = null;
                    if ((null === (t = e.data) || void 0 === t ? void 0 : t.result) && e_(e.data.result)) {
                        let t = null === (a = e.data) || void 0 === a ? void 0 : a.result.steps.reduce((e, t) => eZ(t) ? t.duration + e : e, 0);
                        l = (0, tv.X8)(t / 1e3)
                    }
                    return {
                        isLoading: e.isLoading,
                        data: l
                    }
                },
                sk = () => sC(lv()),
                sI = e => {
                    let t = sC(e),
                        a = sy();
                    return t.isLoading ? {
                        data: null,
                        isLoading: t.isLoading
                    } : t.data ? {
                        data: a("transferTime", {}, t.data),
                        isLoading: !1
                    } : {
                        isLoading: !1,
                        data: null
                    }
                },
                sS = () => sI(lv()),
                sL = e => {
                    var t, a, l, s, i, n, d, r, o, c, m, h, p, v, f, j;
                    let {
                        onNext: b
                    } = e, N = (0, w.m)(), {
                        t: y
                    } = (0, g.$G)(), C = (0, eh.kX)(), k = (0, eh.W)(), I = ev(), S = ef(), L = er.useRawAmount(), F = tx("FeeBreakdown"), A = tx("GasInfo"), T = er.useRecipientAddress(), D = sw(), M = lv(), E = sb(M), z = lW(), H = lE(), R = sy()("transferTime", {}, sk().data);
                    return (0, u.jsxs)("div", {
                        children: [(0, u.jsx)(ao.fK, {
                            className: "items-center pt-2 pb-3",
                            children: (0, u.jsx)(ao.$N, {
                                className: "text-3xl",
                                children: y("confirmationModal.review")
                            })
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col gap-2 px-6",
                            children: [(0, u.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-1 p-4 rounded-xl justify-between bg-muted",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex items-center gap-1.5 shrink-0",
                                        children: [(0, u.jsx)(tf.d, {
                                            chain: C,
                                            className: "h-4 w-4 rounded-xs"
                                        }), (0, u.jsx)("span", {
                                            className: "text-xs font-heading leading-none",
                                            children: y("confirmationModal.bridgeFrom", {
                                                from: null == C ? void 0 : C.name
                                            })
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex items-center gap-1 leading-none",
                                        children: [(0, u.jsx)(tg, {
                                            token: I,
                                            className: "h-7 w-7 rounded-full !text-[8px]"
                                        }), (0, u.jsxs)("span", {
                                            className: "text-2xl leading-none",
                                            children: [L, " ", null == I ? void 0 : I.symbol]
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-1 p-4 rounded-xl justify-between bg-muted",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex items-center gap-1.5 shrink-0",
                                        children: [(0, u.jsx)(tf.d, {
                                            chain: k,
                                            className: "h-4 w-4 rounded-xs"
                                        }), (0, u.jsx)("span", {
                                            className: "text-xs font-heading leading-none",
                                            children: y("confirmationModal.getOn", {
                                                to: null == k ? void 0 : k.name
                                            })
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex items-center gap-1 leading-none",
                                        children: [(0, u.jsx)(tg, {
                                            token: S,
                                            className: "h-7 w-7 rounded-full !text-[8px]"
                                        }), (0, u.jsx)("span", {
                                            className: "text-2xl leading-none",
                                            children: H.data && z ? H.data.token.formatted : H.data ? "".concat(H.data.token.amount, " ").concat(null == S ? void 0 : S.symbol) : "…"
                                        })]
                                    })]
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col divide-y divide-border rounded-xl border py-0.5 text-xs",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, u.jsx)(eJ.sK, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: y("transaction.via")
                                            })]
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex gap-1.5 items-center justify-between ",
                                        children: [(0, u.jsx)(sp, {
                                            provider: null !== (p = null === (t = M.data) || void 0 === t ? void 0 : t.id) && void 0 !== p ? p : null
                                        }), (0, u.jsx)(sv, {
                                            provider: null !== (v = null === (a = M.data) || void 0 === a ? void 0 : a.id) && void 0 !== v ? v : null,
                                            fromChainId: null !== (f = null == C ? void 0 : C.id) && void 0 !== f ? f : 0,
                                            toChainId: null !== (j = null == k ? void 0 : k.id) && void 0 !== j ? j : 0,
                                            className: "h-4 w-4 rounded-2xs"
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, u.jsx)(eJ.qS, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: y("transaction.transferTime")
                                            })]
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsx)("span", {
                                            children: R
                                        })
                                    })]
                                }), N.address && T && !(0, en.E)(N.address, T) && (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, u.jsx)(eJ.nr, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: y("transaction.toAddress")
                                            })]
                                        })
                                    }), (0, u.jsx)(sf, {
                                        address: T
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, u.jsx)(eJ.y6, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: y("confirmationModal.gasCosts")
                                            })]
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (null === (l = D.data) || void 0 === l ? void 0 : l.token.formatted) ? (0, u.jsxs)("div", {
                                            className: "flex gap-1 items-center cursor-pointer",
                                            onClick: () => A.open(),
                                            children: [(null === (i = D.data) || void 0 === i ? void 0 : null === (s = i.fiat) || void 0 === s ? void 0 : s.formatted) && (0, u.jsx)("span", {
                                                className: "text-xs leading-none text-muted-foreground",
                                                children: D.data.fiat.formatted
                                            }), (0, u.jsx)("span", {
                                                className: "text-xs leading-none",
                                                children: null === (n = D.data) || void 0 === n ? void 0 : n.token.formatted
                                            }), (0, u.jsx)(eJ.T0, {
                                                className: "fill-muted-foreground h-4 w-auto"
                                            })]
                                        }) : (0, u.jsx)(av, {
                                            className: "h-3 w-[60px]"
                                        })
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-start gap-4 py-3 px-3.5 justify-between",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, u.jsx)(eJ.z9, {
                                                className: "w-4 h-auto fill-foreground"
                                            }), (0, u.jsx)("span", {
                                                children: y("confirmationModal.fees")
                                            })]
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: "flex items-center justify-between",
                                        children: (0, u.jsx)("div", {
                                            className: (0, x.Z)("flex gap-1 items-center", (null === (d = E.data) || void 0 === d ? void 0 : d.totals.token) !== 0 && "cursor-pointer"),
                                            onClick: () => {
                                                var e;
                                                return (null === (e = E.data) || void 0 === e ? void 0 : e.totals.token) !== 0 ? F.open() : null
                                            },
                                            children: (null === (r = E.data) || void 0 === r ? void 0 : r.totals.token) === 0 ? (0, u.jsx)("span", {
                                                className: "text-xs leading-none",
                                                children: "0 fees"
                                            }) : (0, u.jsxs)(u.Fragment, {
                                                children: [(null === (o = E.data) || void 0 === o ? void 0 : o.totals.fiatFormatted) && (0, u.jsxs)("span", {
                                                    className: "text-xs leading-none text-muted-foreground",
                                                    children: [null === (c = E.data) || void 0 === c ? void 0 : c.totals.fiatFormatted, " "]
                                                }), (0, u.jsxs)("span", {
                                                    className: "text-xs leading-none text-foreground",
                                                    children: [null === (m = E.data) || void 0 === m ? void 0 : m.totals.tokenFormatted, " "]
                                                }), (0, u.jsx)(eJ.T0, {
                                                    className: (0, x.Z)((null === (h = E.data) || void 0 === h ? void 0 : h.totals.token) === 0 ? "fill-primary-foreground" : "fill-muted-foreground", "h-4 w-auto")
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, u.jsx)(ao.cN, {
                            className: "pt-4",
                            children: (0, u.jsx)(ax.z, {
                                onClick: b,
                                className: "w-full",
                                children: y("buttons.continue")
                            })
                        })]
                    })
                },
                sF = e => {
                    var t, a, l, s, i, n;
                    let {
                        onNext: d,
                        commonTranslationProps: r
                    } = e, o = er.useDisplayConfirmationModal(), c = lv(), [m, h] = (0, f.useState)(!1), [x, p] = (0, f.useState)(!1), [v, j] = (0, f.useState)(!1), w = sk(), N = (0, eh.W)(), y = sy(), {
                        t: C
                    } = (0, g.$G)();
                    (0, f.useEffect)(() => {
                        o && (h(!1), p(!1), j(!1))
                    }, [o]);
                    let k = (0, b.EQ)({
                        isAcross: (null === (t = c.data) || void 0 === t ? void 0 : t.id) === ey.nY.Across,
                        isCctp: (null === (a = c.data) || void 0 === a ? void 0 : a.id) === ey.nY.Cctp,
                        isHyperlane: (null === (l = c.data) || void 0 === l ? void 0 : l.id) === ey.nY.Hyperlane,
                        isLz: (null === (s = c.data) || void 0 === s ? void 0 : s.id) === ey.nY.Lz,
                        withdrawing: (null === (i = c.data) || void 0 === i ? void 0 : i.id) && sm.includes(c.data.id),
                        family: (null === (n = c.data) || void 0 === n ? void 0 : n.id) && sh.includes(c.data.id) ? ey.c3.optimism : ey.c3.arbitrum
                    }).with({
                        isAcross: !0
                    }, {
                        isHyperlane: !0
                    }, {
                        isLz: !0
                    }, () => y("confirmationModal.checkbox1Bridge", r, w.data)).with({
                        isCctp: !0
                    }, () => {
                        var e;
                        return C("confirmationModal.checkbox1Cctp", {
                            mins: null === (e = w.data) || void 0 === e ? void 0 : e.value,
                            to: null == N ? void 0 : N.name
                        })
                    }).with({
                        withdrawing: !0,
                        family: "optimism"
                    }, () => y("confirmationModal.opCheckbox1Withdrawal", r, w.data)).with({
                        withdrawing: !0,
                        family: "arbitrum"
                    }, () => y("confirmationModal.arbCheckbox1Withdrawal", r, w.data)).with({
                        withdrawing: !1
                    }, () => {
                        var e;
                        return C("confirmationModal.checkbox1Deposit", {
                            ...r,
                            mins: null === (e = w.data) || void 0 === e ? void 0 : e.value
                        })
                    }).otherwise(() => null);
                    return (0, u.jsxs)("div", {
                        children: [(0, u.jsxs)(ao.fK, {
                            className: "items-center",
                            children: [(0, u.jsx)(ao.$N, {
                                className: "text-3xl",
                                children: C("confirmationModal.acceptTerms")
                            }), (0, u.jsx)(ao.Be, {
                                className: "text-center",
                                children: C("confirmationModal.agreeToTerms")
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col gap-4 px-8 py-2",
                            children: [(0, u.jsxs)("div", {
                                className: "flex gap-2 items-start",
                                children: [(0, u.jsx)(ap.X, {
                                    id: "timeframe",
                                    checked: m,
                                    onCheckedChange: e => h(e),
                                    className: "mt-0.5"
                                }), (0, u.jsx)("label", {
                                    htmlFor: "timeframe",
                                    className: "text-xs text-foreground ",
                                    children: k
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex gap-2  items-start",
                                children: [(0, u.jsx)(ap.X, {
                                    id: "speed",
                                    checked: x,
                                    onCheckedChange: e => p(e),
                                    className: "mt-0.5"
                                }), (0, u.jsx)("label", {
                                    htmlFor: "speed",
                                    className: "text-xs text-foreground ",
                                    children: C("confirmationModal.checkbox2")
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex gap-2 items-start",
                                children: [(0, u.jsx)(ap.X, {
                                    id: "fees",
                                    checked: v,
                                    onCheckedChange: e => j(e),
                                    className: "mt-0.5"
                                }), (0, u.jsx)("label", {
                                    htmlFor: "fees",
                                    className: "text-xs text-foreground ",
                                    children: C("confirmationModal.checkbox3")
                                })]
                            })]
                        }), (0, u.jsx)(ao.cN, {
                            children: (0, u.jsx)(ax.z, {
                                onClick: d,
                                className: "w-full",
                                disabled: !m || !x || !v,
                                children: C("buttons.continue")
                            })
                        })]
                    })
                };
            var sA = a(14223),
                sT = a(1855);
            let sD = [{
                inputs: [{
                    internalType: "bytes32",
                    name: "ticketId",
                    type: "bytes32"
                }],
                name: "redeem",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];

            function sM(e, t) {
                let a = (0, ex.$)(),
                    l = (0, w.m)(),
                    s = (0, lr.p)({
                        chainId: null == e ? void 0 : e.id
                    }),
                    i = (0, tR.t)({
                        chainId: null == e ? void 0 : e.id
                    }),
                    n = lb(),
                    d = lG(null == e ? void 0 : e.id),
                    [r, o] = (0, f.useState)(!1);
                return {
                    onSubmit: async () => {
                        if (l.address && s.data && i && e) {
                            (l.chainId !== e.id || s.data.chain.id !== e.id) && await n(e);
                            try {
                                var r, c, u, m, h;
                                o(!0);
                                let {
                                    data: i
                                } = await t(), n = i.to, x = i.data, p = await (0, y.bR)({
                                    domain: a,
                                    from: l.address,
                                    transactions: [i]
                                }).then(e => BigInt(e.data.estimates[0].limit));
                                return await s.data.sendTransaction({
                                    to: n,
                                    data: x,
                                    chain: e,
                                    gas: p,
                                    ...(null === (r = d.data) || void 0 === r ? void 0 : r.gasPrice) ? {
                                        gasPrice: null === (c = d.data) || void 0 === c ? void 0 : c.gasPrice
                                    } : {
                                        maxFeePerGas: null === (u = d.data) || void 0 === u ? void 0 : u.maxFeePerGas,
                                        maxPriorityFeePerGas: null === (m = d.data) || void 0 === m ? void 0 : m.maxPriorityFeePerGas
                                    },
                                    value: BigInt(null !== (h = i.value) && void 0 !== h ? h : "0")
                                })
                            } catch (e) {
                                e.message.includes("rejected the request") || e.message.includes("denied transaction signature") || console.log(e)
                            } finally {
                                o(!1)
                            }
                        }
                    },
                    loading: r
                }
            }
            var sE = a(74633);
            let sz = e => {
                    let {
                        t
                    } = (0, g.$G)();
                    return (0, u.jsx)(ax.z, {
                        onClick: e.onClick,
                        size: "sm",
                        disabled: e.disabled,
                        children: t("buttons.prove")
                    })
                },
                sH = e => {
                    let {
                        t
                    } = (0, g.$G)();
                    return (0, u.jsx)(ax.z, {
                        onClick: e.onClick,
                        size: "sm",
                        disabled: e.disabled,
                        children: t("buttons.get")
                    })
                },
                sR = e => {
                    let {
                        tx: t,
                        enabled: a
                    } = e, l = function (e) {
                        let t = (0, te.T)(null == e ? void 0 : e.deploymentId),
                            a = (0, aH.K)(null == e ? void 0 : e.deploymentId),
                            l = eU.useSetProving();
                        tx("BlockProving");
                        let s = (0, y.WF)();
                        (0, sE.G)(t);
                        let {
                            loading: i,
                            onSubmit: n
                        } = sM(null == a ? void 0 : a.l1, () => {
                            if (!e) throw Error();
                            return s.mutateAsync({
                                data: {
                                    id: e.id
                                }
                            })
                        }), d = eX();
                        return {
                            onProve: async () => {
                                if (!e) return;
                                let t = await n();
                                if (t) {
                                    var s, i;
                                    d({
                                        event: "prove-withdrawal",
                                        network: null !== (s = null == a ? void 0 : a.l1.name) && void 0 !== s ? s : "",
                                        originNetwork: null !== (i = null == a ? void 0 : a.l2.name) && void 0 !== i ? i : "",
                                        withdrawalTransactionHash: e.withdrawal.transactionHash
                                    }), l(e.id, t)
                                }
                            },
                            loading: i
                        }
                    }(ek(t) ? t : t.withdrawal);
                    return (0, u.jsx)(sz, {
                        onClick: l.onProve,
                        disabled: l.loading || !a
                    })
                },
                sB = e => {
                    let {
                        tx: t,
                        enabled: a
                    } = e, l = function (e) {
                        let t = (0, aH.K)(null == e ? void 0 : e.deploymentId),
                            a = eU.useSetFinalising(),
                            l = (0, y.NT)(),
                            s = eX(),
                            {
                                loading: i,
                                onSubmit: n
                            } = sM(null == t ? void 0 : t.l1, () => {
                                if (!e) throw Error("");
                                return l.mutateAsync({
                                    data: {
                                        id: e.id
                                    }
                                })
                            });
                        return {
                            onFinalise: async () => {
                                if (!e) return;
                                let l = await n();
                                if (l) {
                                    var i, d;
                                    s({
                                        event: "finalize-withdrawal",
                                        network: null !== (i = null == t ? void 0 : t.l1.name) && void 0 !== i ? i : "",
                                        originNetwork: null !== (d = null == t ? void 0 : t.l2.name) && void 0 !== d ? d : "",
                                        withdrawalTransactionHash: e.withdrawal.transactionHash
                                    }), a(e.id, l)
                                }
                            },
                            loading: i
                        }
                    }(ek(t) ? t : t.withdrawal);
                    return (0, u.jsx)(sH, {
                        onClick: l.onFinalise,
                        disabled: l.loading || !a
                    })
                },
                sP = e => {
                    let {
                        tx: t,
                        enabled: a
                    } = e, l = function (e) {
                        let {
                            id: t,
                            deploymentId: a
                        } = e, l = (0, w.m)(), s = (0, lr.p)(), i = eU.useSetFinalising(), n = eU.useRemoveFinalising(), d = (0, y.D5)(), r = lb(), o = (0, te.T)(a), c = (0, eh.Ab)(null == o ? void 0 : o.l1ChainId), [u, m] = (0, f.useState)(!1);
                        return {
                            onFinalise: async () => {
                                if (l.address && s.data && o && c) {
                                    l.chainId !== c.id && await r(c);
                                    try {
                                        m(!0);
                                        let e = await d.mutateAsync({
                                                data: {
                                                    id: t
                                                }
                                            }),
                                            a = await s.data.sendTransaction({
                                                to: e.data.to,
                                                data: e.data.data,
                                                chain: c
                                            });
                                        a && i(t, a)
                                    } catch (e) {
                                        e.message.includes("rejected the request") || e.message.includes("denied transaction signature") || console.log(e), n(t)
                                    } finally {
                                        m(!1)
                                    }
                                }
                            },
                            loading: u
                        }
                    }(eL(t) ? t : t.withdrawal), {
                        t: s
                    } = (0, g.$G)();
                    return (0, u.jsx)(ax.z, {
                        onClick: l.onFinalise,
                        size: "sm",
                        disabled: l.loading || !a,
                        children: s("buttons.get")
                    })
                },
                sO = e => {
                    let {
                        tx: t,
                        enabled: a
                    } = e, l = (0, sA.x)(), s = function (e) {
                        let t = (0, w.m)(),
                            a = (0, lr.p)(),
                            {
                                writeContract: l,
                                isPending: s
                            } = (0, sT.S)(),
                            i = (0, te.T)(eS(e) ? e.deploymentId : e.deposit.deploymentId),
                            n = eS(e) ? e.l2TransactionHash : e.deposit.l2TransactionHash;
                        return {
                            write: async () => {
                                t.address && a.data && l({
                                    abi: sD,
                                    functionName: "redeem",
                                    chainId: null == i ? void 0 : i.l2ChainId,
                                    address: "0x000000000000000000000000000000000000006e",
                                    args: [n]
                                })
                            },
                            isLoading: s
                        }
                    }(t), {
                        t: i
                    } = (0, g.$G)(), n = lb(), d = tt(t), r = (0, eh.Ab)(null == d ? void 0 : d.l2ChainId);
                    return d && r ? l === r.id ? (0, u.jsx)(ax.z, {
                        className: "rounded-full",
                        onClick: s.write,
                        size: "sm",
                        children: i("buttons.redeem")
                    }) : (0, u.jsx)(ax.z, {
                        onClick: () => n(r),
                        size: "sm",
                        disabled: !a,
                        children: i("buttons.switchChain")
                    }) : null
                },
                s_ = e => {
                    let {
                        tx: t,
                        enabled: a
                    } = e, l = function (e) {
                        let t = tl(e),
                            a = eU.useSetFinalising(),
                            l = (0, y.QV)(),
                            s = eX(),
                            {
                                loading: i,
                                onSubmit: n
                            } = sM(null == t ? void 0 : t.to, () => l.mutateAsync({
                                data: {
                                    id: e.id
                                }
                            }));
                        return {
                            write: async () => {
                                if (!t) return;
                                let l = await n();
                                l && (s({
                                    event: "cctp-mint",
                                    burnNetwork: t.from.name,
                                    network: t.to.name,
                                    burnTransactionHash: e.bridge.transactionHash
                                }), a(e.id, l))
                            },
                            loading: i
                        }
                    }(t), {
                        t: s
                    } = (0, g.$G)();
                    return (0, u.jsx)(ax.z, {
                        onClick: l.write,
                        size: "sm",
                        disabled: l.loading || !a,
                        children: s("buttons.mint")
                    })
                };
            (i = o || (o = {})).NotDone = "not-done", i.InProgress = "in-progress", i.Done = "done", i.Reverted = "reverted", (n = c || (c = {})).Prove = "prove", n.Finalise = "finalise", n.Redeem = "redeem", n.Mint = "mint";
            let sZ = e => "number" == typeof e.duration,
                sG = e => "number" == typeof e.startedAt,
                sW = e => !0 === e.done,
                sY = (e, t, a, l) => l ? {
                    duration: a,
                    done: !0
                } : e ? e && t || e + a < Date.now() ? {
                    duration: a,
                    done: !0
                } : {
                    duration: a,
                    startedAt: e
                } : {
                    duration: a
                };

            function sV(e) {
                let {
                    step: t,
                    tx: a
                } = e, [l, s] = (0, f.useState)((0, tv.LU)(Date.now(), Date.now() + t.duration));
                return (0, f.useEffect)(() => {
                    let e = null;
                    if (sG(t)) {
                        let a = () => {
                            s((0, tv.LU)(Date.now(), t.startedAt + t.duration))
                        };
                        a(), e = setInterval(a, 1e3)
                    }
                    return () => {
                        e && clearInterval(e)
                    }
                }, [t]), (0, u.jsx)("div", {
                    className: "flex gap-4 justify-start items-center w-full",
                    children: (0, u.jsxs)("div", {
                        className: "flex items-center gap-2 w-full",
                        children: [(0, u.jsx)("div", {
                            className: "w-6 h-6 rounded-full bg-card mx-1",
                            children: (0, u.jsx)(eJ.qS, {
                                className: "w-6 h-6 fill-foreground"
                            })
                        }), (0, u.jsx)("span", {
                            className: "text-sm font-heading leading-none",
                            children: (null == a ? void 0 : a.type) === "across-bridge" ? "Wait a short moment" : "Wait ".concat((0, tv.cj)(Date.now() + t.duration))
                        }), (0, u.jsx)("span", {
                            className: "ml-auto",
                            children: sW(t) ? (0, u.jsx)(eJ.Bu, {
                                className: "w-6 h-6 fill-primary"
                            }) : sG(t) && t.startedAt + t.duration > Date.now() ? (0, u.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, u.jsxs)("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: ["~", l, " to go"]
                                }), (0, u.jsx)(eJ.vM, {
                                    className: "h-6 w-6 p-0.5 text-foreground fill-foreground"
                                })]
                            }) : ""
                        })]
                    })
                })
            }

            function s$(e) {
                var t, a, l, s, i, n, d, r, o, m;
                let {
                    step: h,
                    tx: x
                } = e, p = sN(h.chain.id, h.gasLimit);
                return (0, u.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, u.jsxs)("div", {
                        className: "flex gap-1 justify-between items-center relative",
                        children: [(0, u.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [(0, u.jsx)(tf.d, {
                                chain: h.chain,
                                className: "w-8 h-8 rounded-[10px]"
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-1 justify-center",
                                children: [(0, u.jsx)("span", {
                                    className: "text-sm font-heading leading-none",
                                    children: h.label
                                }), h.hash && (0, u.jsxs)("a", {
                                    href: aB(h.hash, h.chain),
                                    target: "_blank",
                                    className: "text-muted-foreground flex gap-1 items-center text-xs group hover:text-foreground -mt-0.5",
                                    children: [(0, u.jsx)("span", {
                                        children: "View in explorer"
                                    }), (0, u.jsx)(eJ.cF, {
                                        className: "w-2 h-2 fill-muted-foreground group-hover:fill-foreground"
                                    })]
                                }), h.isAcrossExpiredAndReturned && (0, u.jsxs)("a", {
                                    href: "https://app.across.to/transactions",
                                    target: "_blank",
                                    className: "text-muted-foreground flex gap-1 items-center text-xs group hover:text-foreground -mt-0.5",
                                    children: [(0, u.jsx)("span", {
                                        children: "View on Across"
                                    }), (0, u.jsx)(eJ.cF, {
                                        className: "w-2 h-2 fill-muted-foreground group-hover:fill-foreground"
                                    })]
                                }), !!h.gasLimit && !h.pendingHash && !h.hash && (0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center",
                                    children: [(0, u.jsx)(eJ.y6, {
                                        className: "w-3 h-auto fill-muted-foreground"
                                    }), p.isLoading ? (0, u.jsx)(av, {
                                        className: "h-4 w-[88px]"
                                    }) : (0, u.jsxs)(u.Fragment, {
                                        children: [(0, u.jsx)("span", {
                                            className: "text-xs text-muted-foreground leading-none",
                                            children: null === (t = p.data) || void 0 === t ? void 0 : t.token.formatted
                                        }), (null === (l = p.data) || void 0 === l ? void 0 : null === (a = l.fiat) || void 0 === a ? void 0 : a.formatted) && (0, u.jsx)("span", {
                                            className: "text-xs text-muted-foreground leading-none  opacity-50",
                                            children: null === (i = p.data) || void 0 === i ? void 0 : null === (s = i.fiat) || void 0 === s ? void 0 : s.formatted
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, u.jsx)("div", {
                            className: "flex flex-col gap-1.5 items-end",
                            children: h.isAcrossExpiredAndReturned ? (0, u.jsx)(u.Fragment, {
                                children: (0, u.jsx)(eJ.xm, {
                                    className: "fill-destructive w-6 h-6"
                                })
                            }) : h.hash ? (0, u.jsx)("div", {
                                className: "flex gap-2 items-center group",
                                children: (0, u.jsx)(eJ.Bu, {
                                    className: "w-6 h-6 fill-primary"
                                })
                            }) : h.pendingHash ? (0, u.jsx)("a", {
                                href: aB(h.pendingHash, h.chain),
                                target: "_blank",
                                children: (0, u.jsx)(eJ.vM, {
                                    className: "h-6 w-6"
                                })
                            }) : (0, u.jsxs)(u.Fragment, {
                                children: [x && (null === (n = h.button) || void 0 === n ? void 0 : n.type) === c.Prove && (eT(x) || eD(x)) && (0, u.jsx)(sR, {
                                    tx: x,
                                    enabled: h.button.enabled
                                }), x && (null === (d = h.button) || void 0 === d ? void 0 : d.type) === c.Finalise && (eT(x) || eD(x)) && (0, u.jsx)(sB, {
                                    tx: x,
                                    enabled: h.button.enabled
                                }), x && (null === (r = h.button) || void 0 === r ? void 0 : r.type) === c.Finalise && eL(x) && (0, u.jsx)(sP, {
                                    tx: x,
                                    enabled: h.button.enabled
                                }), x && (null === (o = h.button) || void 0 === o ? void 0 : o.type) === c.Mint && eM(x) && (0, u.jsx)(s_, {
                                    tx: x,
                                    enabled: h.button.enabled
                                }), x && (null === (m = h.button) || void 0 === m ? void 0 : m.type) === c.Redeem && eS(x) && (0, u.jsx)(sO, {
                                    tx: x,
                                    enabled: h.button.enabled
                                }), h.buttonComponent]
                            })
                        })]
                    })
                })
            }

            function sU(e) {
                return (0, u.jsx)("div", {
                    className: "px-4 py-3.5 rounded-xl bg-muted",
                    children: sZ(e.step) ? (0, u.jsx)(sV, {
                        ...e,
                        step: e.step
                    }) : (0, u.jsx)(s$, {
                        ...e,
                        step: e.step
                    })
                })
            }
            var sq = a(38946);
            let sK = sq.fC,
                sX = f.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...l
                    } = e;
                    return (0, u.jsx)(sq.aV, {
                        ref: t,
                        className: (0, t8.cn)("inline-flex h-10 items-center justify-center rounded-full bg-muted p-1 text-muted-foreground", a),
                        ...l
                    })
                });
            sX.displayName = sq.aV.displayName;
            let sQ = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(sq.xz, {
                    ref: t,
                    className: (0, t8.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm  font-button ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm", a),
                    ...l
                })
            });
            sQ.displayName = sq.xz.displayName;
            let sJ = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)(sq.VY, {
                    ref: t,
                    className: (0, t8.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", a),
                    ...l
                })
            });
            sJ.displayName = sq.VY.displayName;
            let s0 = () => {
                var e, t;
                let {
                    transactions: a
                } = eN();
                return null !== (t = null !== (e = eU.useTransactions()[0]) && void 0 !== e ? e : a[0]) && void 0 !== t ? t : null
            };

            function s1() {
                let e = lv(),
                    t = lC(e.data),
                    a = l2(e.data);
                return a.data && 1 !== a.data.estimates.length ? 2 === a.data.estimates.length ? t ? null : a.data.estimates[0].limit : 3 === a.data.estimates.length ? a.data.estimates[1].limit : null : null
            }

            function s2() {
                let e = lv(),
                    t = lC(e.data),
                    a = l2(e.data);
                return a.data && 1 !== a.data.estimates.length ? 2 === a.data.estimates.length ? t ? a.data.estimates[0].limit : null : 3 === a.data.estimates.length ? a.data.estimates[0].limit : null : null
            }
            let s3 = () => {
                    let e = ev(),
                        t = lh();
                    return lM(e)(t.toString())
                },
                s5 = () => {
                    var e, t;
                    let a = (0, w.m)(),
                        l = (0, eh.W)(),
                        s = (0, tz.C)(),
                        i = l6(),
                        n = lz(),
                        d = ef();
                    (0, sE.G)(s);
                    let r = th.useSetAlerts(),
                        o = lQ(),
                        c = (0, aX.K)({
                            address: a.address,
                            chainId: null == l ? void 0 : l.id
                        }),
                        u = s3(),
                        m = null !== (t = null == u ? void 0 : null === (e = u.fiat) || void 0 === e ? void 0 : e.amount) && void 0 !== t ? t : null,
                        h = se();
                    return () => {
                        var e;
                        let t = [];
                        [n, o, !eu(d)].some(e => e) && (null === (e = c.data) || void 0 === e ? void 0 : e.value) === BigInt(0) && t.push("no-gas"), m && h.data && h.data > m && t.push("gas-expensive"), 0 === t.length ? i() : r(t)
                    }
                },
                s4 = e => e ? su.includes(e) ? "https://help.superbridge.app/en/articles/9747998-how-to-bridge-onto-a-rollup-from-the-settlement-chain-deposit" : sm.includes(e) ? "https://help.superbridge.app/en/articles/9748050-how-to-bridge-off-a-rollup-to-the-settlement-chain-withdraw" : e === ey.nY.Across ? "https://help.superbridge.app/en/articles/9751873-how-to-bridge-via-across" : e === ey.nY.Cctp ? "https://help.superbridge.app/en/articles/9751865-how-to-bridge-via-cctp" : e === ey.nY.Hyperlane ? "https://help.superbridge.app/en/articles/9751857-how-to-bridge-via-hyperlane" : null : null,
                s8 = (e, t) => {
                    var a, l, s;
                    let {
                        t: i
                    } = (0, g.$G)(), n = (0, eh.Ab)(null == t ? void 0 : t.l1ChainId), d = (0, eh.Ab)(null == t ? void 0 : t.l2ChainId), r = eU.usePendingFinalises(), o = tr(e), u = e9(e, null == o ? void 0 : o[null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : 0]), m = e9(e, null == o ? void 0 : o[null !== (s = null == d ? void 0 : d.id) && void 0 !== s ? s : 0]);
                    if (!e || !eS(e) || !t || !n || !d) return null;
                    let h = i("confirmationModal.getAmountOn", {
                            to: d.name,
                            formatted: null == m ? void 0 : m.text
                        }),
                        x = e.relay ? {
                            label: h,
                            button: void 0,
                            chain: d,
                            hash: e.relay.transactionHash,
                            pendingHash: void 0,
                            token: o,
                            amount: m
                        } : e.deposit.timestamp && e.deposit.timestamp < Date.now() - 36e5 ? {
                            label: h,
                            button: {
                                type: c.Redeem,
                                enabled: !0
                            },
                            chain: d,
                            hash: void 0,
                            pendingHash: r[e.id],
                            token: o,
                            amount: m
                        } : {
                            label: h,
                            button: void 0,
                            chain: d,
                            hash: void 0,
                            pendingHash: void 0,
                            token: o,
                            amount: m
                        };
                    return [{
                        label: i("confirmationModal.startBridgeOn", {
                            from: n.name
                        }),
                        hash: e.deposit.timestamp ? e.deposit.transactionHash : void 0,
                        pendingHash: e.deposit.timestamp ? void 0 : e.deposit.transactionHash,
                        button: void 0,
                        chain: n,
                        token: o,
                        amount: u
                    }, sY(e.deposit.timestamp, null === (a = e.relay) || void 0 === a ? void 0 : a.timestamp, t.depositDuration), x]
                },
                s7 = BigInt(5e5),
                s6 = BigInt(5e5),
                s9 = (e, t) => {
                    var a, l, s, i, n;
                    let {
                        t: r
                    } = (0, g.$G)(), o = eU.usePendingFinalises(), u = (0, eh.Ab)(null == t ? void 0 : t.l1ChainId), m = (0, eh.Ab)(null == t ? void 0 : t.l2ChainId), h = tr(e), x = e9(e, null == h ? void 0 : h[null !== (s = null == m ? void 0 : m.id) && void 0 !== s ? s : 0]), p = e9(e, null == h ? void 0 : h[null !== (i = null == u ? void 0 : u.id) && void 0 !== i ? i : 0]);
                    if (!e || !eL(e) || !t || !u || !m) return null;
                    let v = o[null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : ""],
                        f = {
                            label: r("confirmationModal.startBridgeOn", {
                                from: m.name
                            }),
                            hash: e.withdrawal.timestamp ? e.withdrawal.transactionHash : void 0,
                            pendingHash: e.withdrawal.timestamp ? void 0 : e.withdrawal.transactionHash,
                            chain: m,
                            button: void 0,
                            token: h,
                            amount: x
                        },
                        j = e.status === d.CONFIRMED,
                        b = {
                            label: r("confirmationModal.getAmountOn", {
                                to: u.name,
                                formatted: null == p ? void 0 : p.text
                            }),
                            pendingHash: v,
                            hash: null === (a = e.finalise) || void 0 === a ? void 0 : a.transactionHash,
                            chain: u,
                            button: {
                                type: c.Finalise,
                                enabled: j
                            },
                            token: h,
                            amount: p,
                            gasLimit: (null == e ? void 0 : e.finalise) ? void 0 : s6
                        };
                    return [f, sY(e.withdrawal.timestamp, null === (l = e.finalise) || void 0 === l ? void 0 : l.timestamp, t.finalizeDuration, j), b]
                },
                ie = e => {
                    let t = T();
                    if (!e || !eM(e)) return null;
                    let a = t.find(t => t.chainId === e.fromChainId),
                        l = t.find(t => t.chainId === e.toChainId);
                    return a && l ? {
                        from: a,
                        to: l
                    } : null
                },
                it = e => {
                    var t, a, l, s;
                    let {
                        t: i
                    } = (0, g.$G)(), n = eU.usePendingFinalises(), d = ie(e), r = tr(e), o = e9(e, null == r ? void 0 : r[null !== (l = null == d ? void 0 : d.from.chainId) && void 0 !== l ? l : 0]), u = tl(e);
                    if (!e || !eM(e) || !d || !u) return null;
                    let m = n[null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : ""],
                        h = {
                            label: i("confirmationModal.startBridgeOn", {
                                from: u.from.name
                            }),
                            hash: e.bridge.timestamp ? e.bridge.transactionHash : void 0,
                            pendingHash: e.bridge.timestamp ? void 0 : e.bridge.transactionHash,
                            chain: u.from,
                            button: void 0,
                            token: r,
                            amount: o
                        },
                        x = e.bridge.timestamp + d.from.duration < Date.now() && !e.relay ? {
                            label: i("confirmationModal.getAmountOn", {
                                to: null == u ? void 0 : u.to.name,
                                formatted: null == o ? void 0 : o.text
                            }),
                            button: {
                                type: c.Mint,
                                enabled: !0
                            },
                            pendingHash: m,
                            hash: void 0,
                            chain: u.to,
                            gasLimit: BigInt(3e5),
                            token: r,
                            amount: o
                        } : {
                            label: i("confirmationModal.getAmountOn", {
                                to: null == u ? void 0 : u.to.name,
                                formatted: null == o ? void 0 : o.text
                            }),
                            hash: null === (t = e.relay) || void 0 === t ? void 0 : t.transactionHash,
                            pendingHash: m,
                            chain: u.to,
                            button: {
                                type: c.Mint,
                                enabled: !1
                            },
                            gasLimit: e.relay ? void 0 : BigInt(3e5),
                            token: r,
                            amount: o
                        };
                    return [h, sY(e.bridge.timestamp, null === (a = e.relay) || void 0 === a ? void 0 : a.timestamp, d.from.duration), x]
                },
                ia = (e, t) => {
                    var a, l, s, i, n;
                    let {
                        t: d
                    } = (0, g.$G)(), r = (0, eh.Ab)(null == t ? void 0 : t.l1ChainId), o = (0, eh.Ab)(null == t ? void 0 : t.l2ChainId), c = tr(e), u = e9(e, null == c ? void 0 : c[null !== (i = null == r ? void 0 : r.id) && void 0 !== i ? i : 0]), m = e9(e, null == c ? void 0 : c[null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : 0]);
                    return e && eA(e) && t && r && o ? (u && m && 4321 === t.l2ChainId && (null == c ? void 0 : null === (a = c[t.l1ChainId]) || void 0 === a ? void 0 : a.address) && (0, en.E)(c[t.l1ChainId].address, "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913") && (m.raw = u.raw, m.formatted = u.formatted, m.text = u.text.replace("USDC", "wUSDC")), [{
                        label: d("confirmationModal.startBridgeOn", {
                            from: r.name
                        }),
                        chain: r,
                        hash: e.deposit.timestamp ? e.deposit.transactionHash : void 0,
                        pendingHash: e.deposit.timestamp ? void 0 : e.deposit.transactionHash,
                        button: void 0,
                        token: c,
                        amount: u
                    }, sY(e.deposit.timestamp, null === (l = e.relay) || void 0 === l ? void 0 : l.timestamp, t.depositDuration), {
                        label: d("confirmationModal.getAmountOn", {
                            to: o.name,
                            formatted: null == m ? void 0 : m.text
                        }),
                        hash: null === (s = e.relay) || void 0 === s ? void 0 : s.transactionHash,
                        chain: o,
                        button: void 0,
                        pendingHash: void 0,
                        token: c,
                        amount: m
                    }]) : null
                },
                il = (e, t) => {
                    var a, l, s, i, n, d, o, u, m, h;
                    let x = eU.usePendingFinalises(),
                        p = eU.usePendingProves(),
                        {
                            t: v
                        } = (0, g.$G)(),
                        f = (0, eh.Ab)(null == t ? void 0 : t.l1ChainId),
                        j = (0, eh.Ab)(null == t ? void 0 : t.l2ChainId),
                        b = tr(e),
                        w = e9(e, null == b ? void 0 : b[null !== (o = null == j ? void 0 : j.id) && void 0 !== o ? o : 0]),
                        N = e9(e, null == b ? void 0 : b[null !== (u = null == f ? void 0 : f.id) && void 0 !== u ? u : 0]);
                    if (!t || !f || !j) return null;
                    let y = p[null !== (m = null == e ? void 0 : e.id) && void 0 !== m ? m : ""],
                        C = x[null !== (h = null == e ? void 0 : e.id) && void 0 !== h ? h : ""],
                        k = {
                            label: v("confirmationModal.startBridgeOn", {
                                from: j.name
                            }),
                            hash: (null == e ? void 0 : e.withdrawal.timestamp) ? null == e ? void 0 : e.withdrawal.transactionHash : void 0,
                            pendingHash: (null == e ? void 0 : e.withdrawal.timestamp) ? void 0 : null == e ? void 0 : e.withdrawal.transactionHash,
                            chain: j,
                            button: void 0,
                            token: b,
                            amount: w
                        },
                        I = (null == e ? void 0 : e.status) === r.READY_TO_PROVE,
                        S = (null == e ? void 0 : e.status) === r.READY_FOR_RELAY,
                        L = {
                            label: v("confirmationModal.proveOn", {
                                to: f.name
                            }),
                            pendingHash: y,
                            hash: null == e ? void 0 : null === (a = e.prove) || void 0 === a ? void 0 : a.transactionHash,
                            chain: f,
                            button: {
                                type: c.Prove,
                                enabled: I
                            },
                            gasLimit: (null == e ? void 0 : e.prove) ? void 0 : s7
                        },
                        F = {
                            label: v("confirmationModal.getAmountOn", {
                                to: f.name,
                                formatted: null == N ? void 0 : N.text
                            }),
                            pendingHash: C,
                            hash: null == e ? void 0 : null === (l = e.finalise) || void 0 === l ? void 0 : l.transactionHash,
                            chain: f,
                            button: {
                                type: c.Finalise,
                                enabled: S
                            },
                            gasLimit: (null == e ? void 0 : e.finalise) ? void 0 : s6,
                            token: b,
                            amount: N
                        };
                    return [k, sY(null == e ? void 0 : null === (s = e.withdrawal) || void 0 === s ? void 0 : s.timestamp, null == e ? void 0 : null === (i = e.prove) || void 0 === i ? void 0 : i.timestamp, t.proveDuration, I), L, sY(null == e ? void 0 : null === (n = e.prove) || void 0 === n ? void 0 : n.timestamp, null == e ? void 0 : null === (d = e.finalise) || void 0 === d ? void 0 : d.timestamp, t.finalizeDuration, S), F]
                },
                is = (e, t) => {
                    var a;
                    let l = ia(e && eD(e) ? e.deposit : null, t) || [],
                        s = il(e && eD(e) && null !== (a = e.withdrawal) && void 0 !== a ? a : null, t) || [];
                    return e && t && eD(e) ? [l[0], l[1], {
                        ...s[0],
                        label: "Withdrawal initated",
                        gasLimit: void 0
                    }, ...s.slice(1)] : null
                };

            function ii(e, t) {
                var a, l, s, i;
                let n = e9(e, t);
                if (!e || !t) return null;
                if (eE(e)) {
                    let s = e6(parseFloat((0, e7.b)(BigInt(e.metadata.data.outputAmount), null !== (a = null == t ? void 0 : t.decimals) && void 0 !== a ? a : 18)));
                    return {
                        formatted: s,
                        raw: e.metadata.data.outputAmount,
                        text: "".concat(s, " ").concat(null !== (l = null == t ? void 0 : t.symbol) && void 0 !== l ? l : "ETH")
                    }
                }
                if (eH(e)) {
                    let a = e6(parseFloat((0, e7.b)(BigInt(e.receiveAmount), null !== (s = null == t ? void 0 : t.decimals) && void 0 !== s ? s : 18)));
                    return {
                        formatted: a,
                        raw: e.receiveAmount,
                        text: "".concat(a, " ").concat(null !== (i = null == t ? void 0 : t.symbol) && void 0 !== i ? i : "ETH")
                    }
                }
                return n
            }
            let id = e => {
                    var t, a, l, s;
                    let {
                        t: i
                    } = (0, g.$G)(), n = tr(e), d = tl(e), r = e9(e, null == n ? void 0 : n[null !== (l = null == d ? void 0 : d.from.id) && void 0 !== l ? l : 0]), o = ii(e, null == n ? void 0 : n[null !== (s = null == d ? void 0 : d.to.id) && void 0 !== s ? s : 0]), c = e5(e);
                    return e && eE(e) && d ? [{
                        label: i("confirmationModal.startBridgeOn", {
                            from: null == d ? void 0 : d.from.name
                        }),
                        hash: e.deposit.timestamp ? e.deposit.transactionHash : void 0,
                        pendingHash: e.deposit.timestamp ? void 0 : e.deposit.transactionHash,
                        chain: d.from,
                        button: void 0,
                        token: n,
                        amount: r
                    }, sY(e.deposit.timestamp, null === (t = e.fill) || void 0 === t ? void 0 : t.timestamp, 12e4), {
                        label: c ? "Returned ".concat(null == o ? void 0 : o.text) : i("confirmationModal.getAmountOn", {
                            to: null == d ? void 0 : d.to.name,
                            formatted: null == o ? void 0 : o.text
                        }),
                        hash: null === (a = e.fill) || void 0 === a ? void 0 : a.transactionHash,
                        pendingHash: void 0,
                        chain: d.to,
                        button: void 0,
                        token: n,
                        amount: o,
                        isAcrossExpiredAndReturned: c
                    }] : null
                },
                ir = e => {
                    var t, a, l, s;
                    let i = A(),
                        {
                            t: n
                        } = (0, g.$G)(),
                        d = e && eR(e) ? i.find(t => t.selector === e.fromSelector) : null,
                        r = e && eR(e) ? i.find(t => t.selector === e.toSelector) : null,
                        o = (0, eh.Ab)(null == d ? void 0 : d.chainId),
                        c = (0, eh.Ab)(null == r ? void 0 : r.chainId),
                        u = tr(e),
                        m = e9(e, null == u ? void 0 : u[null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : 0]),
                        h = ii(e, null == u ? void 0 : u[null !== (s = null == c ? void 0 : c.id) && void 0 !== s ? s : 0]);
                    return e && eR(e) && o && c ? [{
                        label: n("confirmationModal.startBridgeOn", {
                            from: o.name
                        }),
                        hash: e.send.timestamp ? e.send.transactionHash : void 0,
                        pendingHash: e.send.timestamp ? void 0 : e.send.transactionHash,
                        chain: o,
                        button: void 0,
                        token: u,
                        amount: m
                    }, sY(e.send.timestamp, null === (t = e.receive) || void 0 === t ? void 0 : t.timestamp, e.duration), {
                        label: n("confirmationModal.getAmountOn", {
                            to: c.name,
                            formatted: null == h ? void 0 : h.text
                        }),
                        hash: null === (a = e.receive) || void 0 === a ? void 0 : a.transactionHash,
                        pendingHash: void 0,
                        chain: c,
                        button: void 0,
                        token: u,
                        amount: h
                    }] : null
                },
                io = e => {
                    var t, a, l, s;
                    let {
                        t: i
                    } = (0, g.$G)(), n = tr(e), d = (0, eg.w)(), r = e && ez(e) ? d.find(t => t.domain === e.fromDomain) : null, o = e && ez(e) ? d.find(t => t.domain === e.toDomain) : null, c = e9(e, null == n ? void 0 : n[null !== (l = null == r ? void 0 : r.chainId) && void 0 !== l ? l : 0]), u = e9(e, null == n ? void 0 : n[null !== (s = null == o ? void 0 : o.chainId) && void 0 !== s ? s : 0]), m = (0, eh.Ab)(null == r ? void 0 : r.chainId), h = (0, eh.Ab)(null == o ? void 0 : o.chainId);
                    return e && ez(e) && m && h ? [{
                        label: i("confirmationModal.startBridgeOn", {
                            from: m.name
                        }),
                        hash: e.send.timestamp ? e.send.transactionHash : void 0,
                        pendingHash: e.send.timestamp ? void 0 : e.send.transactionHash,
                        chain: m,
                        button: void 0,
                        token: n,
                        amount: c
                    }, sY(e.send.timestamp, null === (t = e.receive) || void 0 === t ? void 0 : t.timestamp, e.duration), {
                        label: i("confirmationModal.getAmountOn", {
                            to: h.name,
                            formatted: null == u ? void 0 : u.text
                        }),
                        hash: null === (a = e.receive) || void 0 === a ? void 0 : a.transactionHash,
                        pendingHash: void 0,
                        chain: h,
                        button: void 0,
                        token: n,
                        amount: u
                    }] : null
                },
                ic = e => {
                    var t, a, l, s;
                    let i = eb(),
                        {
                            t: n
                        } = (0, g.$G)(),
                        d = e && eH(e) ? i.find(t => t.eId === e.fromEid) : null,
                        r = e && eH(e) ? i.find(t => t.eId === e.toEid) : null,
                        o = (0, eh.Ab)(null == d ? void 0 : d.chainId),
                        c = (0, eh.Ab)(null == r ? void 0 : r.chainId),
                        u = tr(e),
                        m = e9(e, null == u ? void 0 : u[null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : 0]),
                        h = ii(e, null == u ? void 0 : u[null !== (s = null == c ? void 0 : c.id) && void 0 !== s ? s : 0]);
                    return e && eH(e) && o && c ? [{
                        label: n("confirmationModal.startBridgeOn", {
                            from: o.name
                        }),
                        hash: e.send.timestamp ? e.send.transactionHash : void 0,
                        pendingHash: e.send.timestamp ? void 0 : e.send.transactionHash,
                        chain: o,
                        button: void 0,
                        token: u,
                        amount: m
                    }, sY(e.send.timestamp, null === (t = e.receive) || void 0 === t ? void 0 : t.timestamp, e.duration), {
                        label: n("confirmationModal.getAmountOn", {
                            to: c.name,
                            formatted: null == h ? void 0 : h.text
                        }),
                        hash: null === (a = e.receive) || void 0 === a ? void 0 : a.transactionHash,
                        pendingHash: void 0,
                        chain: c,
                        button: void 0,
                        token: u,
                        amount: h
                    }] : null
                },
                iu = e => {
                    let t = tt(e),
                        a = ia(e, t),
                        l = il(e && eT(e) ? e : null, t),
                        s = is(e, t),
                        i = s8(e, t),
                        n = s9(e, t),
                        d = it(e),
                        r = id(e),
                        o = io(e),
                        c = ic(e),
                        u = ir(e);
                    return i || n || s || a || l || d || r || o || c || u
                },
                im = () => {
                    var e, t, a, l;
                    let s = ev(),
                        i = ef(),
                        n = lB(),
                        d = (0, tz.C)();
                    return !(eu(s) || n && (null == d ? void 0 : d.arbitrumNativeToken) && eu(i)) && (null == s || !s.address || null === (e = s.lz) || void 0 === e || !e.adapter || (null == s ? void 0 : s.address) !== (null === (t = s.lz) || void 0 === t ? void 0 : t.adapter)) && (null == s || !s.address || null === (a = s.hyperlane) || void 0 === a || !a.router || (null == s ? void 0 : s.address) !== (null === (l = s.hyperlane) || void 0 === l ? void 0 : l.router))
                },
                ih = () => {
                    let e = lg(),
                        t = er.useSubmittedHash(),
                        a = lh();
                    return !!t || void 0 !== e.data && e.data >= a
                },
                ix = () => {
                    let e = er.useSubmittedHash(),
                        t = lk(),
                        a = lq();
                    return !!e || void 0 !== t.data && !!a && t.data >= a
                },
                ip = () => {
                    let e = lB(),
                        t = (0, tz.C)();
                    return e && !!(null == t ? void 0 : t.arbitrumNativeToken)
                },
                iv = () => {
                    var e;
                    let {
                        t
                    } = (0, g.$G)(), a = l3(), l = ev(), s = ep(), i = lz(), n = er.useSubmittingBridge(), d = lA(), r = (0, eh.kX)(), o = (0, eh.W)(), c = lh(), m = lE(), h = lv(), x = s5(), p = im(), v = ih(), f = ip(), j = ix(), w = (0, b.EQ)({
                        needsApprove: p,
                        approved: v,
                        needsGasTokenApprove: f,
                        approvedGasToken: j,
                        withdrawing: i,
                        submitting: n
                    }).with({
                        submitting: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: t("bridging"),
                        disabled: !0
                    })).with({
                        needsApprove: !0,
                        approved: !1
                    }, {
                        needsGasTokenApprove: !0,
                        approvedGasToken: !1
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: t("buttons.start"),
                        disabled: !0
                    })).otherwise(() => ({
                        onSubmit: x,
                        buttonText: t("buttons.start"),
                        disabled: !1
                    }));
                    return (null === (e = h.data) || void 0 === e ? void 0 : e.result) && e_(h.data.result) ? h.data.result.steps.map(e => {
                        var i, n, h, x, p, v, f, g, j, b;
                        let N = {
                            raw: null !== (x = null === (i = m.data) || void 0 === i ? void 0 : i.token.amount.toString()) && void 0 !== x ? x : "0",
                            formatted: null !== (p = null === (n = m.data) || void 0 === n ? void 0 : n.token.formatted) && void 0 !== p ? p : "",
                            text: null !== (v = null === (h = m.data) || void 0 === h ? void 0 : h.token.formatted) && void 0 !== v ? v : ""
                        };
                        if (eY(e)) {
                            let i = e.type === ey.zm.Initiate ? t("confirmationModal.startBridgeOn", {
                                    from: null == d ? void 0 : d.name
                                }) : e.type === ey.zm.Prove ? t("confirmationModal.proveOn", {
                                    to: null == o ? void 0 : o.name
                                }) : t("confirmationModal.getAmountOn", {
                                    to: null == o ? void 0 : o.name,
                                    formatted: null === (f = m.data) || void 0 === f ? void 0 : f.token.formatted
                                }),
                                n = e.type === ey.zm.Initiate ? {
                                    raw: c.toString(),
                                    formatted: (0, e7.b)(c, null !== (g = null == l ? void 0 : l.decimals) && void 0 !== g ? g : 18),
                                    text: "".concat((0, e7.b)(c, null !== (j = null == l ? void 0 : l.decimals) && void 0 !== j ? j : 18), " ").concat(null == l ? void 0 : l.symbol)
                                } : e.type === ey.zm.Prove ? void 0 : N,
                                h = e.type === ey.zm.Initiate ? a.data : 5e5,
                                x = e.type === ey.zm.Initiate ? (0, u.jsx)(ax.z, {
                                    onClick: w.onSubmit,
                                    disabled: w.disabled,
                                    size: "sm",
                                    children: w.buttonText
                                }) : e.type === ey.zm.Prove ? (0, u.jsx)(sz, {
                                    onClick: () => {},
                                    disabled: !0
                                }) : e.type === ey.zm.Finalize ? (0, u.jsx)(sH, {
                                    onClick: () => {},
                                    disabled: !0
                                }) : void 0;
                            return {
                                label: i,
                                gasLimit: h || 5e5,
                                chain: e.chainId === (null == r ? void 0 : r.id.toString()) ? r : o,
                                buttonComponent: x,
                                hash: void 0,
                                pendingHash: void 0,
                                token: e.type === ey.zm.Prove ? null : s,
                                amount: n
                            }
                        }
                        return eZ(e) ? {
                            duration: e.duration
                        } : eG(e) ? {
                            label: t("confirmationModal.getAmountOn", {
                                to: null == o ? void 0 : o.name,
                                formatted: null === (b = m.data) || void 0 === b ? void 0 : b.token.formatted
                            }),
                            chain: o,
                            hash: void 0,
                            pendingHash: void 0,
                            token: s,
                            amount: N
                        } : eW(e) ? {
                            label: "Withdrawal initiated",
                            chain: r,
                            hash: void 0,
                            pendingHash: void 0,
                            token: s,
                            amount: N
                        } : void 0
                    }).filter(D.EN) : []
                },
                ig = () => {
                    let e = l7(),
                        t = function () {
                            let e = lv(),
                                t = lg(),
                                a = a0(),
                                l = ev(),
                                s = (0, lo.Z)(),
                                [i, n] = (0, f.useState)(!1),
                                d = (0, lr.p)(),
                                r = (0, eh.kX)(),
                                o = lG(null == r ? void 0 : r.id),
                                c = s1(),
                                u = l$(e.data);
                            return {
                                write: async () => {
                                    if ((null == l ? void 0 : l.address) && u && r && d.data && c) {
                                        n(!0);
                                        try {
                                            var e, i, m, h;
                                            let t = await d.data.sendTransaction({
                                                data: u.data,
                                                to: u.to,
                                                chain: r,
                                                gas: BigInt(c),
                                                ...(null === (e = o.data) || void 0 === e ? void 0 : e.gasPrice) ? {
                                                    gasPrice: null === (i = o.data) || void 0 === i ? void 0 : i.gasPrice
                                                } : {
                                                    maxFeePerGas: null === (m = o.data) || void 0 === m ? void 0 : m.maxFeePerGas,
                                                    maxPriorityFeePerGas: null === (h = o.data) || void 0 === h ? void 0 : h.maxPriorityFeePerGas
                                                }
                                            });
                                            await (0, ld.e)(s, {
                                                hash: t,
                                                chainId: l.chainId,
                                                pollingInterval: 2e3,
                                                timeout: 6e4
                                            })
                                        } catch (e) {
                                            console.log(e)
                                        } finally {
                                            setTimeout(() => {
                                                t.refetch(), a.refetch()
                                            }, 200), n(!1)
                                        }
                                    }
                                },
                                isLoading: i
                            }
                        }(),
                        {
                            t: a
                        } = (0, g.$G)(),
                        l = s1(),
                        s = ev(),
                        i = lz(),
                        n = (0, eh.kX)(),
                        d = (0, w.m)(),
                        r = lb(),
                        o = ih();
                    if (!im() || !n) return null;
                    let {
                        onSubmit: c,
                        buttonText: m,
                        disabled: h
                    } = (0, b.EQ)({
                        approved: o,
                        approving: t.isLoading,
                        bridge: e,
                        withdrawing: i
                    }).with({
                        approving: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: a("buttons.approving"),
                        disabled: !0
                    })).with({
                        approved: !1
                    }, () => n && d.chainId !== (null == n ? void 0 : n.id) ? {
                        onSubmit: () => r(n),
                        buttonText: a("switchToApprove"),
                        disabled: !1
                    } : {
                        onSubmit: () => t.write(),
                        buttonText: a("buttons.approve"),
                        disabled: !1
                    }).with({
                        approved: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: a("buttons.approved"),
                        disabled: !0
                    })).exhaustive();
                    return (0, u.jsx)(sU, {
                        step: {
                            label: a("confirmationModal.approve", {
                                symbol: null == s ? void 0 : s.symbol
                            }),
                            chain: n,
                            gasLimit: o ? void 0 : l || void 0,
                            buttonComponent: o ? (0, u.jsx)(eJ.Bu, {
                                className: "w-6 h-6 fill-primary"
                            }) : (0, u.jsxs)(ax.z, {
                                onClick: c,
                                disabled: h,
                                size: "sm",
                                children: [m, o && (0, u.jsx)(eJ.NO, {
                                    className: "w-3 h-3 fill-primary-foreground"
                                })]
                            }),
                            pendingHash: void 0,
                            hash: void 0
                        }
                    })
                },
                ij = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = s2(), a = ev(), l = lz(), s = (0, eh.kX)(), i = (0, w.m)(), n = (0, tz.C)(), d = lN(null == n ? void 0 : n.id), r = function () {
                        let e = (0, lo.Z)(),
                            [t, a] = (0, f.useState)(!1),
                            l = (0, tz.C)(),
                            s = lN(null == l ? void 0 : l.id),
                            i = (0, eh.kX)(),
                            n = a0(),
                            d = lk(),
                            r = (0, lr.p)(),
                            o = lG(null == i ? void 0 : i.id),
                            c = lq(),
                            u = lK(lv().data),
                            m = ly(),
                            h = s2();
                        return {
                            write: async () => {
                                if (s && m && c && r.data && u && h) {
                                    a(!0);
                                    try {
                                        var t, l, x, p, v;
                                        let a = await r.data.sendTransaction({
                                            ...u,
                                            value: BigInt(null !== (v = u.value) && void 0 !== v ? v : "0"),
                                            gas: BigInt(h),
                                            ...(null === (t = o.data) || void 0 === t ? void 0 : t.gasPrice) ? {
                                                gasPrice: null === (l = o.data) || void 0 === l ? void 0 : l.gasPrice
                                            } : {
                                                maxFeePerGas: null === (x = o.data) || void 0 === x ? void 0 : x.maxFeePerGas,
                                                maxPriorityFeePerGas: null === (p = o.data) || void 0 === p ? void 0 : p.maxPriorityFeePerGas
                                            }
                                        });
                                        await (0, ld.e)(e, {
                                            hash: a,
                                            chainId: null == i ? void 0 : i.id,
                                            pollingInterval: 2e3,
                                            timeout: 6e4
                                        }), setTimeout(() => {
                                            d.refetch(), n.refetch()
                                        }, 200)
                                    } catch (e) {} finally {
                                        a(!1)
                                    }
                                }
                            },
                            isLoading: t
                        }
                    }(), o = lb(), c = ix(), m = ip();
                    if (!m || !s) return null;
                    let {
                        onSubmit: h,
                        buttonText: x,
                        disabled: p
                    } = (0, b.EQ)({
                        withdrawing: l,
                        customGasToken: d,
                        family: null == n ? void 0 : n.family,
                        approved: c,
                        approving: r.isLoading,
                        needsGasTokenApprove: m
                    }).with({
                        approving: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: e("buttons.approving"),
                        disabled: !0
                    })).with({
                        approved: !1
                    }, () => i.chainId !== (null == s ? void 0 : s.id) ? {
                        onSubmit: () => o(s),
                        buttonText: e("switchToApprove"),
                        disabled: !1
                    } : {
                        onSubmit: () => r.write(),
                        buttonText: e("buttons.approve"),
                        disabled: !1
                    }).with({
                        approved: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: e("buttons.approved"),
                        disabled: !0
                    })).exhaustive();
                    return (0, u.jsx)(sU, {
                        step: {
                            label: e("confirmationModal.approveGasToken", {
                                symbol: null == a ? void 0 : a.symbol
                            }),
                            chain: s,
                            gasLimit: c ? void 0 : t || void 0,
                            buttonComponent: c ? (0, u.jsx)(eJ.Bu, {
                                className: "w-6 h-6 fill-primary"
                            }) : (0, u.jsxs)(ax.z, {
                                onClick: h,
                                disabled: p,
                                size: "sm",
                                children: [x, c && (0, u.jsx)(eJ.NO, {
                                    className: "w-3 h-3 fill-primary-foreground"
                                })]
                            }),
                            pendingHash: void 0,
                            hash: void 0
                        }
                    })
                },
                ib = () => {
                    var e, t, a, l, s, i, n, d, r, o, c, m, h;
                    let {
                        t: x
                    } = (0, g.$G)(), p = er.useDisplayConfirmationModal(), v = ep(), j = er.useRawAmount(), b = er.useSubmittedHash(), N = er.useSetSubmittedHash(), y = sS(), C = (0, eh.kX)(), k = (0, eh.W)(), I = (0, w.m)(), S = lE(), L = lv(), F = er.useRecipientAddress();
                    (0, f.useEffect)(() => {
                        N(null)
                    }, [p]);
                    let A = s0(),
                        T = iu(A) || [],
                        M = iv(),
                        E = s4(null !== (i = null === (e = L.data) || void 0 === e ? void 0 : e.id) && void 0 !== i ? i : null);
                    return (0, u.jsxs)(sK, {
                        defaultValue: "steps",
                        className: "flex flex-col",
                        children: [(0, u.jsxs)(ao.fK, {
                            className: "items-center gap-3 pt-3 pb-4",
                            children: [(0, u.jsx)(tg, {
                                token: null == v ? void 0 : v[null !== (n = null == C ? void 0 : C.id) && void 0 !== n ? n : 0],
                                className: "h-12 w-12"
                            }), (0, u.jsxs)(ao.$N, {
                                className: "flex flex-col gap-1.5 text-3xl text-center leading-none",
                                children: ["Bridge ", j, " ", null == v ? void 0 : null === (t = v[null !== (d = null == C ? void 0 : C.id) && void 0 !== d ? d : 0]) || void 0 === t ? void 0 : t.symbol, " ", (0, u.jsx)("br", {}), (0, u.jsxs)("span", {
                                    className: "text-sm text-muted-foreground leading-none",
                                    children: ["Via ", (0, u.jsx)(sp, {
                                        provider: null !== (r = null === (a = L.data) || void 0 === a ? void 0 : a.id) && void 0 !== r ? r : null
                                    })]
                                })]
                            })]
                        }), (0, u.jsx)("div", {
                            className: "mx-auto",
                            children: (0, u.jsxs)(sX, {
                                children: [(0, u.jsx)(sQ, {
                                    className: "text-xs",
                                    value: "steps",
                                    children: x("transaction.steps")
                                }), (0, u.jsx)(sQ, {
                                    className: "text-xs",
                                    value: "info",
                                    children: x("transaction.bridgeInfo")
                                })]
                            })
                        }), (0, u.jsx)(sJ, {
                            value: "steps",
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col px-6 gap-1",
                                children: [(0, u.jsx)(ij, {}), (0, u.jsx)(ig, {}), (b ? T : M).filter(D.EN).map(e => (0, u.jsx)(sU, {
                                    step: e,
                                    tx: b ? A : void 0
                                }, sZ(e) ? e.duration.toString() : e.label))]
                            })
                        }), (0, u.jsx)(sJ, {
                            value: "info",
                            children: (0, u.jsx)(sg, {
                                from: C,
                                to: k,
                                sentAmount: j,
                                receivedAmount: null !== (o = null === (l = S.data) || void 0 === l ? void 0 : l.token.amount.toString()) && void 0 !== o ? o : null,
                                token: v,
                                provider: null !== (c = null === (s = L.data) || void 0 === s ? void 0 : s.id) && void 0 !== c ? c : null,
                                sender: null !== (m = I.address) && void 0 !== m ? m : "0x",
                                recipient: F,
                                transferTime: null !== (h = y.data) && void 0 !== h ? h : ""
                            })
                        }), (0, u.jsx)(ao.cN, {
                            className: "flex gap-2 items-center",
                            children: E && (0, u.jsx)(ax.z, {
                                asChild: !0,
                                size: "xs",
                                variant: "outline",
                                children: (0, u.jsxs)(t1(), {
                                    href: E,
                                    target: "_blank",
                                    children: [x("general.needHelp"), (0, u.jsx)(eJ.T0, {
                                        className: "w-2.5 h-2.5 ml-1.5 fill-foreground group-hover:fill-foreground"
                                    })]
                                })
                            })
                        })]
                    })
                },
                iw = () => {
                    let e = er.useDisplayConfirmationModal(),
                        t = ln(),
                        a = (0, eh.kX)(),
                        l = (0, eh.W)(),
                        s = ev(),
                        i = er.useSubmittingBridge(),
                        n = er.useSubmittedHash(),
                        d = (0, aH.p)(),
                        r = {
                            from: null == a ? void 0 : a.name,
                            to: null == l ? void 0 : l.name,
                            base: null == d ? void 0 : d.l1.name,
                            rollup: null == d ? void 0 : d.l2.name,
                            symbol: null == s ? void 0 : s.symbol
                        },
                        [o, c] = (0, f.useState)(0),
                        h = [{
                            name: "review",
                            component: (0, u.jsx)(sL, {
                                onNext: () => c(e => e + 1)
                            })
                        }, {
                            name: "terms",
                            component: (0, u.jsx)(sF, {
                                onNext: () => c(e => e + 1),
                                commonTranslationProps: r
                            })
                        }, {
                            name: "start",
                            component: (0, u.jsx)(ib, {})
                        }];
                    return (0, f.useEffect)(() => {
                        c(0)
                    }, [e]), (0, u.jsx)(ao.Vq, {
                        open: e,
                        onOpenChange: t,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsxs)("div", {
                                className: "flex justify-between items center p-4 pb-0",
                                children: [(0, u.jsx)("div", {
                                    className: "w-10 h-10 shrink-0",
                                    children: 0 === o || n || i ? null : (0, u.jsx)("button", {
                                        onClick: () => c(e => e - 1),
                                        className: "w-10 h-10 shrink-0 flex items-center justify-center bg-muted rounded-full hover:scale-105 transition-all",
                                        children: (0, u.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            className: "w-3.5 h-3.5 fill-foreground",
                                            children: (0, u.jsx)("path", {
                                                d: "M7 0.677246C6.70724 0.677246 6.41553 0.769919 6.1849 0.984753L0.523395 5.9849C0.246428 6.23133 0 6.55463 0 7.0001C0 7.44556 0.246428 7.76887 0.523395 8.01529L6.1849 13.0154C6.41553 13.2313 6.70829 13.323 7 13.323C7.67715 13.323 8.23108 12.769 8.23108 12.0919C8.23108 11.738 8.09312 11.4147 7.81616 11.1693L4.49361 8.23118H12.7689C13.4461 8.23118 14 7.67725 14 7.0001C14 6.32295 13.4461 5.76902 12.7689 5.76902H4.49255L7.8151 2.83085C8.09207 2.58442 8.23003 2.26217 8.23003 1.90833C8.23003 1.23118 7.67609 0.677246 6.99895 0.677246L7 0.677246Z"
                                            })
                                        })
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "flex items-center gap-1 justify-center w-full",
                                    children: h.map((e, t) => (0, u.jsx)("div", {
                                        className: (0, x.Z)("w-10 h-1 rounded-full", t === o ? "bg-primary" : "bg-muted")
                                    }, e.name))
                                }), (0, u.jsx)("div", {
                                    className: "w-10 h-10 shrink-0"
                                })]
                            }), (0, u.jsx)(m.M, {
                                mode: "wait",
                                children: (0, u.jsx)(p.E.div, {
                                    animate: "enter",
                                    exit: "exit",
                                    transition: {
                                        duration: .3
                                    },
                                    variants: {
                                        initial: {
                                            y: 10,
                                            opacity: 0
                                        },
                                        enter: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            y: -10,
                                            opacity: 0
                                        }
                                    },
                                    children: (0, u.jsx)("div", {
                                        children: h[o].component
                                    })
                                }, h[o].name)
                            })]
                        })
                    })
                };
            var iN = a(15773);
            let iy = (0, a(57291).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                iC = f.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...l
                    } = e;
                    return (0, u.jsx)(iN.f, {
                        ref: t,
                        className: (0, t8.cn)(iy(), a),
                        ...l
                    })
                });
            iC.displayName = iN.f.displayName;
            let ik = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, u.jsx)("textarea", {
                    className: (0, t8.cn)("flex min-h-[80px] w-full rounded-md border bg-muted px-3 py-2 text-sm ring-offset-card placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-border focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a),
                    ref: t,
                    ...l
                })
            });
            ik.displayName = "Textarea";
            let iI = () => {
                    let e = (0, h.useRouter)(),
                        t = tx("CustomWarpRoutes"),
                        a = (0, y.uP)(),
                        l = lc.n.useSetCustomRoutesId(),
                        [s, i] = (0, f.useState)(""),
                        [n, d] = (0, f.useState)("");
                    (0, f.useEffect)(() => {
                        i(""), d("")
                    }, [t.isOpen]);
                    let r = async () => {
                        if (s) try {
                            let i = await a.mutateAsync({
                                data: {
                                    file: s
                                }
                            });
                            l(i.data.id), e.push("/", {
                                pathname: "/",
                                query: {
                                    hyperlaneWarpRoutes: i.data.id
                                }
                            }, {
                                shallow: !0
                            }), t.close()
                        } catch (e) {
                            var i, n, r;
                            d(null !== (r = null === (n = e.response) || void 0 === n ? void 0 : null === (i = n.data) || void 0 === i ? void 0 : i.message) && void 0 !== r ? r : e.message)
                        }
                    };
                    return (0, u.jsx)(ao.Vq, {
                        open: t.isOpen,
                        onOpenChange: t.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsx)(ao.fK, {
                                children: (0, u.jsx)(aK.$N, {
                                    children: "Custom Warp Routes"
                                })
                            }), (0, u.jsx)("div", {
                                className: "flex flex-col px-6",
                                children: (0, u.jsxs)("div", {
                                    className: "grid w-full gap-2",
                                    children: [(0, u.jsx)(iC, {
                                        htmlFor: "warproutes",
                                        children: "Warp route YAML"
                                    }), (0, u.jsx)(ik, {
                                        id: "warproutes",
                                        value: s,
                                        className: "min-h-56 text-xs p-4",
                                        onChange: e => i(e.target.value),
                                        placeholder: "Paste in your warp route deployment YAML file"
                                    })]
                                })
                            }), n && (0, u.jsx)("div", {
                                className: "text-red-400 text-xs mx-auto px-6 pt-4 text-center",
                                children: n
                            }), (0, u.jsx)(ao.cN, {
                                children: (0, u.jsx)(ax.z, {
                                    disabled: a.isPending,
                                    onClick: r,
                                    children: "Save"
                                })
                            })]
                        })
                    })
                },
                iS = () => {
                    let e = tx("BlockProving");
                    return (0, u.jsx)(ao.Vq, {
                        open: e.isOpen,
                        onOpenChange: e.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col gap-8 p-6",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 pt-6",
                                    children: [(0, u.jsx)("div", {
                                        className: "animate-bounce mx-auto",
                                        children: (0, u.jsx)(eJ.az, {
                                            className: "w-16 h-16"
                                        })
                                    }), (0, u.jsx)("h1", {
                                        className: "font-heading text-xl  text-left",
                                        children: "Base Mainnet Fault Proof upgrade"
                                    }), (0, u.jsxs)("div", {
                                        className: "text-xs text-left md:text-sm prose-sm  leading-relaxed  text-muted-foreground text-pretty",
                                        children: [(0, u.jsx)("p", {
                                            children: "The Base Mainnet Fault Proof upgrade has been targeted for October 30th."
                                        }), (0, u.jsx)("p", {
                                            children: "Please come back after the upgrade is complete to prove your withdrawal."
                                        }), (0, u.jsxs)("p", {
                                            children: ["Find out more at", " ", (0, u.jsx)("a", {
                                                href: eQ.R,
                                                target: "_blank",
                                                className: "text-foreground underline",
                                                children: "optimism.io"
                                            }), " ", "or check the", " ", (0, u.jsx)("a", {
                                                href: "https://help.superbridge.app/en/articles/9759328-fault-proof-upgrade",
                                                target: "_blank",
                                                className: "text-foreground underline",
                                                children: "FAQs"
                                            }), "."]
                                        })]
                                    })]
                                }), (0, u.jsx)(ax.z, {
                                    onClick: e.close,
                                    children: "Ok"
                                })]
                            })
                        })
                    })
                },
                iL = () => {
                    var e;
                    let t = tx("FaultProofInfo"),
                        a = (0, aH.K)(null === (e = (0, N.I)().find(e => "soneium-minato" === e.name)) || void 0 === e ? void 0 : e.id);
                    return (0, u.jsx)(ao.Vq, {
                        open: t.isOpen,
                        onOpenChange: t.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsxs)(ao.fK, {
                                className: "flex flex-col gap-4 pt-12",
                                children: [(0, u.jsxs)("div", {
                                    className: "mx-auto relative drop-shadow-lg",
                                    children: [(0, u.jsx)(tf.d, {
                                        chain: null == a ? void 0 : a.l2,
                                        className: "h-20 w-20 rounded-xl"
                                    }), (0, u.jsx)(eJ.az, {
                                        className: "w-8 h-8 animate-wiggle-waggle origin-center absolute -bottom-0.5 -right-3.5"
                                    })]
                                }), (0, u.jsx)(aK.$N, {
                                    className: "font-heading text-2xl text-center tracking-tight",
                                    children: "Soneium Minato Fault Proof upgrade"
                                })]
                            }), (0, u.jsx)("div", {
                                className: "flex flex-col px-6",
                                children: (0, u.jsxs)("div", {
                                    className: "text-xs text-left md:text-sm prose-sm leading-relaxed text-muted-foreground text-pretty",
                                    children: [(0, u.jsx)("p", {
                                        children: "The Soneium Minato Fault Proof upgrade has been targeted for November 4th."
                                    }), (0, u.jsx)("p", {
                                        children: "Any withdrawals initiated now should be proved before the upgrade is complete, otherwise they will need to be reproven."
                                    }), (0, u.jsx)("p", {
                                        children: "If you have withdrawals that are ready to finalize, you should do it before the upgrade is complete or you will need to prove again then wait a further 7 days."
                                    }), (0, u.jsxs)("p", {
                                        children: ["Find out more at", " ", (0, u.jsx)("a", {
                                            href: eQ.R,
                                            target: "_blank",
                                            className: "text-foreground underline",
                                            children: "optimism.io"
                                        }), " ", "or check the", " ", (0, u.jsx)("a", {
                                            href: "https://help.superbridge.app/en/articles/9759328-fault-proof-upgrade",
                                            target: "_blank",
                                            className: "text-foreground underline",
                                            children: "FAQs"
                                        }), "."]
                                    })]
                                })
                            }), (0, u.jsx)(ao.cN, {
                                children: (0, u.jsx)(ax.z, {
                                    onClick: t.close,
                                    children: "Ok"
                                })
                            })]
                        })
                    })
                },
                iF = () => {
                    var e, t;
                    let {
                        t: a
                    } = (0, g.$G)(), l = tx("FeeBreakdown"), s = sj(), i = lv(), n = lW(), d = lJ(), r = tu(null !== (t = null === (e = i.data) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null);
                    return (0, u.jsx)(ao.Vq, {
                        open: l.isOpen,
                        onOpenChange: l.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col gap-8 p-6",
                                children: [(0, u.jsxs)(ao.fK, {
                                    className: "flex flex-col gap-2 items-center text-center pt-10 pb-0",
                                    children: [(0, u.jsx)(eJ.z9, {
                                        className: "w-16 h-auto mb-4 fill-primary drop-shadow"
                                    }), (0, u.jsx)(ao.$N, {
                                        className: "font-heading text-2xl text-pretty",
                                        children: a("feeModal.providerFees", {
                                            provider: r
                                        })
                                    }), (0, u.jsxs)(ao.Be, {
                                        className: "text-xs md:text-sm prose-sm text-pretty text-center text-muted-foreground",
                                        children: [n && (0, u.jsx)(g.cC, {
                                            i18nKey: "feeModal.acrossFeeBreakdownDescription",
                                            components: [(0, u.jsx)("a", {
                                                className: "underline",
                                                href: "https://across.to",
                                                target: "_blank"
                                            }, "name")]
                                        }), d && (0, u.jsx)(g.cC, {
                                            i18nKey: "feeModal.hyperlaneFeeBreakdownDescription",
                                            components: [(0, u.jsx)("a", {
                                                className: "underline",
                                                href: "https://hyperlane.xyz",
                                                target: "_blank"
                                            }, "name")]
                                        })]
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "flex flex-col rounded-lg border py-0.5 justify-center items-center divide-y",
                                    children: s.isLoading ? (0, u.jsx)("div", {
                                        className: "p-4",
                                        children: (0, u.jsx)(eJ.vM, {
                                            className: "text-muted-foreground w-6 h-6"
                                        })
                                    }) : (0, u.jsx)(u.Fragment, {
                                        children: s.data.fees.map(e => {
                                            var t;
                                            return (0, u.jsxs)("div", {
                                                className: "flex items-center justify-between gap-3 p-3 w-full",
                                                children: [(0, u.jsxs)("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [(0, u.jsx)(tg, {
                                                        token: e.token.token,
                                                        className: "h-5 w-5 !text-[8px]"
                                                    }), (0, u.jsx)("span", {
                                                        className: "capitalize text-xs",
                                                        children: a(e.name)
                                                    })]
                                                }), (0, u.jsxs)("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [(null === (t = e.fiat) || void 0 === t ? void 0 : t.formatted) && (0, u.jsx)("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: e.fiat.formatted
                                                    }), (0, u.jsx)("span", {
                                                        className: "text-xs text-foreground",
                                                        children: e.token.formatted
                                                    })]
                                                })]
                                            }, e.name)
                                        })
                                    })
                                }), (0, u.jsx)(ax.z, {
                                    onClick: l.close,
                                    children: a("ok")
                                })]
                            })
                        })
                    })
                },
                iA = (0, $.Ue)()((e, t) => ({
                    amount: "100",
                    setAmount: t => e({
                        amount: t
                    }),
                    fiatInput: !0,
                    setFiatInput: t => e({
                        fiatInput: t
                    }),
                    chainId: null,
                    setChainId: t => e({
                        chainId: t
                    }),
                    tokenAddress: null,
                    setTokenAddress: t => e({
                        tokenAddress: t
                    })
                })),
                iT = (0, V.E)(iA),
                iD = e => {
                    let t = new Map;
                    return e.forEach(e => {
                        t.has(e.id.toString()) || t.set(e.id.toString(), e)
                    }), Array.from(t.values())
                },
                iM = e => {
                    let t = new Map;
                    return e.forEach(e => {
                        let a = "".concat(e.chainId, "-").concat(e.address);
                        t.has(a) || t.set(a, e)
                    }), Array.from(t.values())
                },
                iE = () => {
                    var e;
                    let t = (0, y.t8)((0, ex.$)()),
                        a = es(),
                        l = (0, L.b)(),
                        s = iT.useChainId(),
                        i = iT.useTokenAddress();
                    return (0, f.useMemo)(() => {
                        var e, n, d, r;
                        let o = iD((null !== (d = null === (e = t.data) || void 0 === e ? void 0 : e.data.assets) && void 0 !== d ? d : []).map(e => l.find(t => t.id === e.chainId)).filter(D.EN)),
                            c = o.find(e => e.id === s) || o[0],
                            u = iM((null !== (r = null === (n = t.data) || void 0 === n ? void 0 : n.data.assets) && void 0 !== r ? r : []).map(e => {
                                if (!c) return null;
                                let t = a.data.find(t => {
                                    var a;
                                    return (null === (a = t[c.id]) || void 0 === a ? void 0 : a.address) && (0, en.E)(t[c.id].address, e.address)
                                });
                                return null == t ? void 0 : t[c.id]
                            }).filter(D.EN)),
                            m = u.find(e => e.address === i) || u[0];
                        return {
                            availableAssets: u,
                            availableChains: o,
                            chain: c,
                            asset: m,
                            assetAddress: i,
                            chainId: s
                        }
                    }, [l, a.data, null === (e = t.data) || void 0 === e ? void 0 : e.data, s, i])
                },
                iz = e => {
                    let {
                        onClick: t,
                        token: a
                    } = e, {
                        asset: l
                    } = iE();
                    return (0, u.jsx)("div", {
                        className: (0, x.Z)("flex justify-between hover:bg-muted transition cursor-pointer p-4 relative", (null == l ? void 0 : l.address) && (0, en.E)(l.address, a.address) && "bg-muted"),
                        onClick: t,
                        children: (0, u.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [(0, u.jsx)(tg, {
                                token: a,
                                className: "h-8 w-8"
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, u.jsx)("div", {
                                    className: "flex items-center gap-1",
                                    children: (0, u.jsx)("span", {
                                        className: "text-sm font-heading",
                                        children: a.name
                                    })
                                }), (0, u.jsx)("span", {
                                    className: "text-xs  text-muted-foreground",
                                    children: a.symbol
                                })]
                            })]
                        })
                    })
                },
                iH = () => {
                    let e = tx("FiatOnrampTokenSelector"),
                        t = eX(),
                        {
                            availableAssets: a,
                            chain: l
                        } = iE(),
                        s = iT.useSetTokenAddress(),
                        i = a => {
                            s(a.address), t({
                                event: "onramp-token-select",
                                symbol: a.symbol,
                                network: l.name
                            }), e.close()
                        };
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)("div", {
                            className: "overflow-y-scroll flex flex-col basis-full",
                            children: a.map(e => (0, u.jsx)(iz, {
                                token: e,
                                onClick: () => i(e)
                            }, "".concat(e.chainId, "-").concat(e.address)))
                        })
                    })
                },
                iR = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = tx("FiatOnrampTokenSelector");
                    return (0, u.jsx)(ao.Vq, {
                        open: t.isOpen,
                        onOpenChange: t.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            onOpenAutoFocus: e => e.preventDefault(),
                            children: [(0, u.jsx)(ao.fK, {
                                className: "flex flex-col space-y-1.5 text-left px-6 py-6",
                                children: (0, u.jsx)(aK.$N, {
                                    className: "text-lg font-heading",
                                    children: e("tokens.selectToken")
                                })
                            }), (0, u.jsx)(iH, {})]
                        })
                    })
                },
                iB = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = (0, eh.kX)(), a = tx("GasInfo"), l = lH(), s = lR(), i = lQ(), n = l ? e("gasInfoModal.opWithdrawal") : s ? e("gasInfoModal.arbWithdrawal") : i ? e("gasInfoModal.cctp") : null;
                    return (0, u.jsx)(ao.Vq, {
                        open: a.isOpen,
                        onOpenChange: a.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col gap-4 p-6",
                                children: [(0, u.jsxs)(ao.fK, {
                                    className: "flex flex-col gap-2 items-center text-center pt-10 pb-0",
                                    children: [(0, u.jsx)("div", {
                                        className: "animate-wiggle-waggle",
                                        children: (0, u.jsx)(eJ.In, {
                                            className: "w-16 h-auto mb-4"
                                        })
                                    }), (0, u.jsx)(ao.$N, {
                                        className: "font-heading text-2xl text-pretty",
                                        children: e("gasInfoModal.title")
                                    }), (0, u.jsx)(ao.Be, {
                                        className: "text-xs md:text-sm prose-sm text-pretty text-center text-muted-foreground",
                                        children: e("gasInfoModal.description", {
                                            from: null == t ? void 0 : t.name,
                                            symbol: null == t ? void 0 : t.nativeCurrency.symbol
                                        })
                                    })]
                                }), n && (0, u.jsx)("div", {
                                    className: "rounded-xl bg-muted p-3",
                                    children: (0, u.jsx)("p", {
                                        className: "text-xs md:text-sm prose-sm text-pretty text-center text-muted-foreground",
                                        children: n
                                    })
                                }), (0, u.jsx)(ax.z, {
                                    onClick: a.close,
                                    children: e("ok")
                                })]
                            })
                        })
                    })
                },
                iP = e => e ? ez(e) || eH(e) || eR(e) ? e.to : eM(e) ? e.recipient : eI(e) ? e.deposit.metadata.to : e.metadata.to : null,
                iO = e => null == e ? void 0 : e.name.toLowerCase().includes("soneium"),
                i_ = () => iO((0, eh.kX)()),
                iZ = () => iO((0, eh.W)()),
                iG = () => {
                    let e = i_(),
                        t = iZ();
                    return e || t
                },
                iW = () => {
                    let e = (0, eh.kX)(),
                        t = (0, eh.W)(),
                        a = i_(),
                        l = iZ();
                    return a ? e : l ? t : null
                },
                iY = e => {
                    var t, a;
                    let l = (0, eh.kX)(),
                        s = (0, eh.W)(),
                        i = (0, a_.N)({
                            contracts: [{
                                abi: aO.Wo,
                                functionName: "decimals",
                                chainId: null == l ? void 0 : l.id,
                                address: e
                            }, {
                                abi: aO.Wo,
                                functionName: "decimals",
                                chainId: null == s ? void 0 : s.id,
                                address: e
                            }]
                        });
                    return "number" == typeof (null === (t = i.data) || void 0 === t ? void 0 : t[0].result) || "number" == typeof (null === (a = i.data) || void 0 === a ? void 0 : a[1].result)
                },
                iV = e => {
                    let {
                        data: t,
                        showName: a
                    } = e;
                    return (null == t ? void 0 : t.address) && (!a || t.name) ? (0, u.jsxs)("div", {
                        className: (0, x.Z)("flex items-center space-x-1 px-2 py-1 bg-muted rounded-full", t.avatar && "pr-1"),
                        children: [(0, u.jsx)("div", {
                            className: "text-xs",
                            children: a ? t.name : t.address.slice(0, 5) + "..." + t.address.slice(t.address.length - 5)
                        }), t.avatar && (0, u.jsx)("img", {
                            src: t.avatar,
                            alt: "avatar",
                            className: "rounded-full h-4 w-4"
                        })]
                    }) : null
                },
                i$ = () => {
                    var e, t;
                    let a = (0, eh.W)(),
                        l = er.useRecipientName(),
                        s = er.useRecipientAddress(),
                        i = tB(),
                        n = (0, w.m)(),
                        d = tx("RecipientAddress"),
                        [r, o] = (0, f.useState)(""),
                        c = iG(),
                        m = iW(),
                        h = iY(r);
                    (0, f.useEffect)(() => {
                        o(l || s || "")
                    }, [l, s, d.isOpen]);
                    let [x] = (0, am.Nr)(r, 750), p = er.useSetRecipientName(), v = er.useSetRecipientAddress(), j = eN(), {
                        t: N
                    } = (0, g.$G)(), y = (0, Q.a)({
                        queryKey: ["profile-".concat(x)],
                        queryFn: async () => {
                            if (x.endsWith(".eth")) {
                                let e = await tV(x);
                                return e ? {
                                    name: x,
                                    address: e.address,
                                    avatar: e.avatar
                                } : null
                            }
                            return (0, tP.U)(x) ? await t$(x) || {
                                address: x,
                                name: null,
                                avatar: null
                            } : null
                        },
                        enabled: (0, tP.U)(x) || x.endsWith(".eth")
                    }), C = async () => {
                        y.isLoading || !y.data || h || (p(y.data.name || ""), v(y.data.address), d.close())
                    };
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)(ao.Vq, {
                            open: d.isOpen,
                            onOpenChange: d.close,
                            children: (0, u.jsxs)(ao.cZ, {
                                onOpenAutoFocus: e => e.preventDefault(),
                                children: [(0, u.jsx)(ao.fK, {
                                    children: (0, u.jsx)(ao.$N, {
                                        children: N("recipient.bridgeDestination")
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "p-6",
                                    children: (0, u.jsx)("div", {
                                        className: "flex flex-col gap-6",
                                        children: (0, u.jsxs)("div", {
                                            className: "flex flex-col gap-2",
                                            children: [(0, u.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "font-heading text-sm mb-2",
                                                    children: N("recipient.toAddress")
                                                }), (0, u.jsx)(iV, {
                                                    data: null !== (t = y.data) && void 0 !== t ? t : null,
                                                    showName: !x.endsWith(".eth")
                                                })]
                                            }), (0, u.jsx)(ah, {
                                                value: r,
                                                onChange: e => o(e.target.value)
                                            }), (0, u.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0, b.EQ)({
                                                    transactions: j,
                                                    debouncedInput: x,
                                                    profile: y.data,
                                                    isLoading: y.isLoading && "idle" !== y.fetchStatus,
                                                    isValidProfile: !!(null === (e = y.data) || void 0 === e ? void 0 : e.address) && (0, tP.U)(y.data.address),
                                                    isContractAccount: i.data,
                                                    account: n.address,
                                                    recipientIsERC20: h
                                                }).with({
                                                    isLoading: !0
                                                }, () => (0, u.jsxs)("div", {
                                                    className: "inline-flex items-center gap-1 pl-2 pr-3 py-2 rounded-full border",
                                                    children: [(0, u.jsx)(eJ.vM, {
                                                        className: "w-3.5 h-3.5 text-foreground"
                                                    }), (0, u.jsx)("span", {
                                                        className: "text-xs leading-none text-muted-foreground",
                                                        children: N("recipient.checkingAddress")
                                                    })]
                                                })).with({
                                                    recipientIsERC20: !0
                                                }, () => (0, u.jsxs)("div", {
                                                    className: "inline-flex items-center gap-1 pl-2 pr-3 py-2 rounded-full border border-red-500",
                                                    children: [(0, u.jsx)(eJ.lx, {
                                                        className: "w-3.5 h-3.5 fill-red-500"
                                                    }), (0, u.jsxs)("span", {
                                                        className: "text-xs leading-none text-red-500",
                                                        children: [N("recipient.invalidAddress"), " (token contract)"]
                                                    })]
                                                })).with({
                                                    debouncedInput: ""
                                                }, () => null).with({
                                                    isValidProfile: !1
                                                }, () => (0, u.jsxs)("div", {
                                                    className: "inline-flex items-center gap-1 pl-2 pr-3 py-2 rounded-full border border-red-500",
                                                    children: [(0, u.jsx)(eJ.lx, {
                                                        className: "w-3.5 h-3.5 fill-red-500"
                                                    }), (0, u.jsx)("span", {
                                                        className: "text-xs leading-none text-red-500",
                                                        children: N("recipient.invalidAddress")
                                                    })]
                                                })).with({
                                                    transactions: {
                                                        isLoading: !0
                                                    }
                                                }, () => null).when(e => {
                                                    var t;
                                                    return !1 === e.isContractAccount && !!(null === (t = e.profile) || void 0 === t ? void 0 : t.address) && !!e.account && (0, en.E)(e.account, e.profile.address)
                                                }, () => (0, u.jsxs)("div", {
                                                    className: "inline-flex items-center gap-1 pl-2 pr-3 py-2 rounded-full border",
                                                    children: [(0, u.jsx)(eJ.Bu, {
                                                        className: "w-3.5 h-3.5 fill-primary"
                                                    }), (0, u.jsx)("span", {
                                                        className: "text-xs leading-none text-foreground",
                                                        children: N("recipient.yourChainAddress", {
                                                            chain: null == a ? void 0 : a.name
                                                        })
                                                    })]
                                                })).with({
                                                    transactions: {
                                                        isLoading: !1,
                                                        isError: !1
                                                    }
                                                }, e => {
                                                    let {
                                                        transactions: t,
                                                        profile: a
                                                    } = e, l = t.transactions.reduce((e, t) => {
                                                        let l = iP(t);
                                                        return l && (0, tP.U)(l) && (null == a ? void 0 : a.address) && (0, en.E)(a.address, l) ? e + 1 : e
                                                    }, 0);
                                                    return 1 === l ? (0, u.jsxs)("div", {
                                                        className: "inline-flex items-center gap-1 px-2 py-1 rounded-full border",
                                                        children: [(0, u.jsx)(eJ.Bu, {
                                                            className: "w-3.5 h-3.5 fill-primary"
                                                        }), (0, u.jsx)("span", {
                                                            className: "text-xs leading-none text-foreground",
                                                            children: N("recipient.usedBefore")
                                                        })]
                                                    }) : l > 1 ? (0, u.jsxs)("div", {
                                                        className: "inline-flex items-center gap-1 pl-2 pr-3 py-2 rounded-full border",
                                                        children: [(0, u.jsx)(eJ.Bu, {
                                                            className: "w-3.5 h-3.5 fill-primary"
                                                        }), (0, u.jsx)("span", {
                                                            className: "text-xs leading-none text-foreground",
                                                            children: N("recipient.usedBeforeMultiple", {
                                                                count: l
                                                            })
                                                        })]
                                                    }) : (0, u.jsxs)("div", {
                                                        className: "inline-flex items-center gap-1 pl-2 pr-3 py-2 rounded-full border",
                                                        children: [(0, u.jsx)(eJ.az, {
                                                            className: "w-3.5 h-3.5"
                                                        }), (0, u.jsx)("span", {
                                                            className: "text-xs leading-none text-foreground",
                                                            children: N("recipient.newAddress")
                                                        })]
                                                    })
                                                }).otherwise(() => null), !i.data && !!n.address && (0, u.jsx)(ax.z, {
                                                    size: "xs",
                                                    variant: "outline",
                                                    onClick: () => o(n.address),
                                                    children: N("buttons.reset")
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, u.jsxs)(ao.cN, {
                                    className: "pt-0",
                                    children: [c && (0, u.jsxs)("div", {
                                        className: "items-center gap-1 py-3 px-4 rounded-xl bg-orange-500/5 border border-orange-500/10",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-foreground font-heading text-xs",
                                            children: N("recipient.pleaseNote")
                                        }), (0, u.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: N("recipient.sameAddressRequirement", {
                                                chain: null == m ? void 0 : m.name
                                            })
                                        })]
                                    }), (0, u.jsx)(ax.z, {
                                        disabled: y.isLoading,
                                        onClick: C,
                                        children: N("save")
                                    })]
                                })]
                            })
                        })
                    })
                },
                iU = e => {
                    var t, a, l, s, i, n, d, r, o, c, m, h, p;
                    let {
                        provider: v,
                        quote: f,
                        onRoutesClick: g,
                        allowDetailClicks: j
                    } = e, b = ev(), w = ef(), N = (0, eh.W)(), y = lM(w), C = tx("FeeBreakdown"), k = tx("GasInfo"), I = y(f.receive), S = l4({
                        id: v,
                        result: f
                    }), L = sN(parseInt(f.steps[0].chainId), S.data), F = {
                        isLoading: !1,
                        data: {
                            id: v,
                            result: f
                        }
                    }, A = sb(F), T = sI(F), D = f.steps.filter(e => eY(e)).length, M = j && (null === (t = A.data) || void 0 === t ? void 0 : t.totals.token) !== 0;
                    return (0, u.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, u.jsxs)("div", {
                            className: "flex justify-between items-center gap-1",
                            children: [(0, u.jsxs)("h3", {
                                className: "text-xs font-heading leading-none",
                                children: ["Get on ", null == N ? void 0 : N.name, " "]
                            }), j && g ? (0, u.jsxs)("button", {
                                className: "flex gap-1.5 items-center rounded-full bg-muted pl-1.5 pr-2.5 py-1.5 hover:scale-105 transition-all",
                                onClick: g,
                                children: [(0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center text-foreground text-xs font-body leading-none",
                                    children: [(0, u.jsx)(sv, {
                                        provider: F.data.id,
                                        fromChainId: null !== (o = null == b ? void 0 : b.chainId) && void 0 !== o ? o : 0,
                                        toChainId: null !== (c = null == w ? void 0 : w.chainId) && void 0 !== c ? c : 0,
                                        className: "rounded-full bg-muted"
                                    }), (0, u.jsx)("span", {
                                        children: (0, u.jsx)(sp, {
                                            provider: v
                                        })
                                    })]
                                }), (0, u.jsx)(eJ.KC, {
                                    className: "w-4 w-4 fill-foreground"
                                })]
                            }) : (0, u.jsx)("div", {
                                className: "flex gap-1.5 items-center rounded-full bg-muted pl-1.5 pr-2 py-1.5",
                                children: (0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center text-foreground text-xs font-body leading-none",
                                    children: [(0, u.jsx)(sv, {
                                        provider: F.data.id,
                                        fromChainId: null !== (m = null == b ? void 0 : b.chainId) && void 0 !== m ? m : 0,
                                        toChainId: null !== (h = null == w ? void 0 : w.chainId) && void 0 !== h ? h : 0,
                                        className: "rounded-full bg-muted"
                                    }), (0, u.jsx)("span", {
                                        children: (0, u.jsx)(sp, {
                                            provider: v
                                        })
                                    })]
                                })
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, u.jsxs)("div", {
                                className: "relative",
                                children: [(0, u.jsx)(tg, {
                                    token: w,
                                    className: "h-10 w-10"
                                }), (0, u.jsx)(tf.d, {
                                    chain: N,
                                    className: "w-4 w-4 rounded-2xs absolute bottom-0 -right-1"
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, u.jsx)("span", {
                                    className: "text-2xl leading-none",
                                    children: I.token.formatted
                                }), I.fiat && (0, u.jsx)("span", {
                                    className: "text-xs leading-none text-muted-foreground",
                                    children: I.fiat.formatted
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex gap-3 justify-start mt-4",
                            children: [(0, u.jsxs)("div", {
                                className: (0, x.Z)((null === (a = A.data) || void 0 === a ? void 0 : a.totals.token) === 0 ? "bg-primary rounded-full py-0.5 pl-0.5 pr-1.5" : "bg-transparent", "flex gap-1 items-center ", M && "cursor-pointer group"),
                                onClick: () => M ? C.open() : null,
                                children: [(0, u.jsx)(eJ.z9, {
                                    className: (0, x.Z)((null === (l = A.data) || void 0 === l ? void 0 : l.totals.token) === 0 ? "fill-primary-foreground" : "fill-muted-foreground group-hover:fill-foreground", "h-3.5 w-3.5")
                                }), (null === (s = A.data) || void 0 === s ? void 0 : s.totals.token) === 0 ? (0, u.jsx)("span", {
                                    className: "text-xs leading-none text-primary-foreground",
                                    children: "0 fees"
                                }) : (0, u.jsxs)("span", {
                                    className: "text-xs leading-none text-muted-foreground group-hover:text-foreground",
                                    children: [null !== (p = null === (i = A.data) || void 0 === i ? void 0 : i.totals.fiatFormatted) && void 0 !== p ? p : null === (n = A.data) || void 0 === n ? void 0 : n.totals.tokenFormatted, " ", "Fee"]
                                })]
                            }), (0, u.jsxs)("div", {
                                className: (0, x.Z)("flex gap-1 items-center", j && "cursor-pointer group"),
                                onClick: () => j ? k.open() : null,
                                children: [(0, u.jsx)(eJ.y6, {
                                    className: "h-3.5 w-3.5 fill-muted-foreground group-hover:fill-foreground"
                                }), " ", (null === (d = L.data) || void 0 === d ? void 0 : d.token.formatted) ? (0, u.jsx)("span", {
                                    className: "text-xs leading-none text-muted-foreground group-hover:text-foreground",
                                    children: null === (r = L.data) || void 0 === r ? void 0 : r.token.formatted
                                }) : (0, u.jsx)(av, {
                                    className: "h-3 w-[60px]"
                                }), D > 1 && (0, u.jsxs)("span", {
                                    className: "rounded-full text-[10px] leading-none bg-primary text-primary-foreground py-1 px-1.5",
                                    children: ["+", D - 1]
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex gap-1 items-center ml-auto",
                                children: [(0, u.jsx)("span", {
                                    className: "text-xs text-right leading-none text-muted-foreground",
                                    children: T.data
                                }), (0, u.jsx)(eJ.qS, {
                                    className: "h-3.5 w-3.5 fill-muted-foreground"
                                }), " "]
                            })]
                        })]
                    })
                },
                iq = () => {
                    var e;
                    let {
                        t
                    } = (0, g.$G)(), a = lx(), l = tx("RouteSelector"), s = er.useSetRouteId(), i = e => {
                        s(e), l.close()
                    };
                    return (0, u.jsx)(ao.Vq, {
                        open: l.isOpen,
                        onOpenChange: l.close,
                        children: (0, u.jsxs)(ao.cZ, {
                            children: [(0, u.jsx)(ao.fK, {
                                children: (0, u.jsx)(ao.$N, {
                                    children: t("routeSelectorModal.title")
                                })
                            }), (0, u.jsx)("div", {
                                className: "flex flex-col px-4 pb-6 gap-3",
                                children: null === (e = a.data) || void 0 === e ? void 0 : e.results.map(e => eB(e.result) ? null : (0, u.jsx)("div", {
                                    onClick: () => i(e.id),
                                    className: "p-4 border border-muted rounded-xl hover:scale-[1.015] transition-all cursor-pointer",
                                    children: (0, u.jsx)(iU, {
                                        provider: e.id,
                                        quote: e.result
                                    }, e.id)
                                }, e.id))
                            })]
                        })
                    })
                },
                iK = e => e && ez(e) ? "https://explorer.hyperlane.xyz/message/".concat(e.hyperlaneMessageId) : e && eH(e) ? "https://layerzeroscan.com/tx/".concat(e.send.transactionHash) : null,
                iX = e => e ? ez(e) || eH(e) || eR(e) ? e.from : eM(e) ? e.sender : eI(e) ? e.deposit.metadata.from : e.metadata.from : null,
                iQ = e => {
                    let {
                        transactions: t
                    } = eN(), a = eU.useTransactions();
                    return t.find(t => eV(t) === e) || a.find(t => eV(t) === e)
                },
                iJ = () => {
                    var e, t, a, l;
                    let {
                        t: s
                    } = (0, g.$G)(), i = iQ(tx("TransactionDetails").data), n = tr(i), d = to(i), r = e9(i, d), o = ii(i, d), c = ts(i), m = tl(i), h = iP(i), x = iX(i);
                    e4(i);
                    let p = ta(i),
                        v = sy()("transferTime", {}, (0, tv.X8)((null != p ? p : 1) / 1e3)),
                        f = iu(null != i ? i : null),
                        j = s4(c),
                        b = iK(i);
                    return (0, u.jsxs)(sK, {
                        defaultValue: "steps",
                        className: "flex flex-col",
                        children: [(0, u.jsxs)(ao.fK, {
                            className: "items-center gap-3 pt-10 pb-4",
                            children: [(0, u.jsx)(tg, {
                                token: d,
                                className: "h-12 w-12"
                            }), (0, u.jsxs)(ao.$N, {
                                className: "flex flex-col gap-1.5 text-3xl text-center leading-none",
                                children: ["Bridge ", null == r ? void 0 : r.formatted, " ", null == d ? void 0 : d.symbol, " ", (0, u.jsx)("br", {}), (0, u.jsxs)("div", {
                                    className: "flex gap-1 justify-center items-center",
                                    children: ["OptimismForcedWithdrawal" === c && (0, u.jsxs)("div", {
                                        className: "bg-muted rounded-full pl-2 pr-2.5 py-0 flex items-center gap-1",
                                        children: [(0, u.jsx)(eJ.qc, {
                                            className: "w-6 h-6 shrink-0"
                                        }), (0, u.jsx)("span", {
                                            className: "text-sm text-muted-foreground leading-none",
                                            children: "Escape hatch"
                                        })]
                                    }), (0, u.jsxs)("span", {
                                        className: "text-sm text-muted-foreground leading-none",
                                        children: ["Via ", (0, u.jsx)(sp, {
                                            provider: c
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, u.jsx)("div", {
                            className: "mx-auto",
                            children: (0, u.jsxs)(sX, {
                                children: [(0, u.jsx)(sQ, {
                                    className: "text-xs",
                                    value: "steps",
                                    children: s("transaction.steps")
                                }), (0, u.jsx)(sQ, {
                                    className: "text-xs",
                                    value: "info",
                                    children: s("transaction.bridgeInfo")
                                })]
                            })
                        }), (0, u.jsx)(sJ, {
                            value: "steps",
                            children: (0, u.jsx)("div", {
                                className: "flex flex-col px-6 gap-1",
                                children: null == f ? void 0 : f.map(e => (0, u.jsx)(sU, {
                                    step: e,
                                    tx: i
                                }, sZ(e) ? e.duration.toString() : e.label))
                            })
                        }), (0, u.jsx)(sJ, {
                            value: "info",
                            children: (0, u.jsx)(sg, {
                                recipient: h,
                                sender: x,
                                sentAmount: null !== (e = null == r ? void 0 : r.formatted) && void 0 !== e ? e : null,
                                receivedAmount: null !== (t = null == o ? void 0 : o.formatted) && void 0 !== t ? t : null,
                                from: null !== (a = null == m ? void 0 : m.from) && void 0 !== a ? a : null,
                                to: null !== (l = null == m ? void 0 : m.to) && void 0 !== l ? l : null,
                                provider: c,
                                token: null != n ? n : null,
                                transferTime: v
                            })
                        }), (0, u.jsxs)(ao.cN, {
                            className: "flex gap-2 items-center",
                            children: [b && (0, u.jsx)(ax.z, {
                                asChild: !0,
                                size: "xs",
                                variant: "outline",
                                children: (0, u.jsxs)(t1(), {
                                    href: b,
                                    target: "_blank",
                                    children: [(0, u.jsxs)("span", {
                                        children: ["View on ", c, " explorer"]
                                    }), (0, u.jsx)(eJ.cF, {
                                        className: "w-2.5 h-2.5 ml-1.5 fill-foreground group-hover:fill-foreground"
                                    })]
                                })
                            }), j && (0, u.jsx)(ax.z, {
                                asChild: !0,
                                size: "xs",
                                variant: "outline",
                                children: (0, u.jsxs)(t1(), {
                                    href: j,
                                    target: "_blank",
                                    children: [s("general.needHelp"), (0, u.jsx)(eJ.T0, {
                                        className: "w-2.5 h-2.5 ml-1.5 fill-foreground group-hover:fill-foreground"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                i0 = () => {
                    let e = tx("TransactionDetails");
                    return (0, u.jsx)(ao.Vq, {
                        open: e.isOpen,
                        onOpenChange: e.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsx)(iJ, {})
                        })
                    })
                },
                i1 = () => {
                    let e = lD(ev()),
                        t = parseFloat(er.useRawAmount()) || 0,
                        a = K.useCurrency(),
                        l = e ? "".concat(aF[a]).concat((t * e).toLocaleString("en")) : void 0;
                    return {
                        rawAmount: t,
                        fiatAmount: l
                    }
                },
                i2 = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = (0, eh.W)(), a = ev(), l = tx("TransferTime"), s = sS(), {
                        fiatAmount: i,
                        rawAmount: n
                    } = i1();
                    return (0, u.jsxs)("div", {
                        className: "flex flex-col gap-8 p-6",
                        children: [(0, u.jsxs)("div", {
                            className: "flex flex-col gap-2 items-center text-center pt-8",
                            children: [(0, u.jsx)("div", {
                                className: "animate-wiggle-waggle",
                                children: (0, u.jsx)(eJ.qS, {
                                    className: "w-16 h-auto mb-4"
                                })
                            }), (0, u.jsx)("h1", {
                                className: "font-heading text-2xl text-pretty",
                                children: e("across.transferTimeTitle")
                            }), (0, u.jsx)("p", {
                                className: "text-xs md:text-sm prose-sm text-muted-foreground text-pretty text-center",
                                children: e("across.transferTimeDescription")
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col rounded-lg border py-1",
                            children: [(0, u.jsxs)("div", {
                                className: "flex items-center justify-between border-b px-3 py-2",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, u.jsx)(tg, {
                                        token: a,
                                        className: "h-6 w-6"
                                    }), (0, u.jsx)("span", {
                                        className: "font-heading text-xs md:text-sm ",
                                        children: e("expensiveGasModal.bridgeAmount")
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [i && (0, u.jsx)("span", {
                                        className: "text-xs md:text-sm text-muted-foreground",
                                        children: i
                                    }), (0, u.jsxs)("span", {
                                        className: "text-xs md:text-sm text-foreground",
                                        children: [n, " ", null == a ? void 0 : a.symbol]
                                    })]
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex items-center justify-between px-3 py-2",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, u.jsx)(eJ.qS, {
                                        className: "h-6 w-6"
                                    }), (0, u.jsx)("span", {
                                        className: "font-heading text-xs md:text-sm",
                                        children: e("across.timeTo", {
                                            to: null == t ? void 0 : t.name
                                        })
                                    })]
                                }), (0, u.jsx)("span", {
                                    className: "text-xs md:text-sm",
                                    children: s.isLoading ? (0, u.jsx)(av, {
                                        className: "h-4 w-[88px]"
                                    }) : s.data ? (0, u.jsxs)(u.Fragment, {
                                        children: ["15 secs - ", s.data.slice(1)]
                                    }) : "…"
                                })]
                            })]
                        }), (0, u.jsx)(ax.z, {
                            onClick: l.close,
                            children: e("ok")
                        })]
                    })
                },
                i3 = () => {
                    let e = tx("TransferTime");
                    return (0, u.jsx)(ao.Vq, {
                        open: e.isOpen,
                        onOpenChange: e.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsx)(i2, {})
                        })
                    })
                },
                i5 = () => {
                    let e = tx("WithdrawalReadyToFinalize"),
                        t = er.useSetDisplayTransactions(),
                        a = (0, aH.p)();
                    return (0, u.jsx)(ao.Vq, {
                        open: e.isOpen,
                        onOpenChange: e.close,
                        children: (0, u.jsx)(ao.cZ, {
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col gap-8 p-6",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 pt-6",
                                    children: [(0, u.jsx)("div", {
                                        className: "animate-bounce mx-auto",
                                        children: (0, u.jsx)(eJ.az, {
                                            className: "w-16 h-16"
                                        })
                                    }), (0, u.jsxs)("h1", {
                                        className: "font-heading text-xl  text-left",
                                        children: ["Finalize your withdrawals before ", null == a ? void 0 : a.l2.name, " Fault Proof upgrade"]
                                    }), (0, u.jsxs)("div", {
                                        className: "text-xs text-left md:text-sm prose-sm  leading-relaxed  text-muted-foreground text-pretty",
                                        children: [(0, u.jsxs)("p", {
                                            children: ["The ", null == a ? void 0 : a.l2.name, " Fault Proof upgrade has been targeted for June 10."]
                                        }), (0, u.jsx)("p", {
                                            children: "We recommend you finalize your withdrawals before the upgrade is complete or you will need to prove again then wait a further 7 days."
                                        }), (0, u.jsxs)("p", {
                                            children: ["Find out more at", " ", (0, u.jsx)("a", {
                                                href: eQ.R,
                                                target: "_blank",
                                                className: "text-foreground underline",
                                                children: "optimism.io"
                                            }), " ", "or check the", " ", (0, u.jsx)("a", {
                                                href: "https://help.superbridge.app/en/articles/9759328-fault-proof-upgrade",
                                                target: "_blank",
                                                className: "text-foreground underline",
                                                children: "FAQs"
                                            }), "."]
                                        })]
                                    })]
                                }), (0, u.jsx)(ax.z, {
                                    onClick: () => {
                                        e.close(), t(!0)
                                    },
                                    children: "Ok"
                                })]
                            })
                        })
                    })
                },
                i4 = () => (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(i3, {}), (0, u.jsx)(iF, {}), (0, u.jsx)(i$, {}), (0, u.jsx)(iq, {}), (0, u.jsx)(iL, {}), (0, u.jsx)(i5, {}), (0, u.jsx)(aq, {}), (0, u.jsx)(a6, {}), (0, u.jsx)(iw, {}), (0, u.jsx)(i0, {}), (0, u.jsx)(iB, {}), (0, u.jsx)(iI, {}), (0, u.jsx)(si, {}), (0, u.jsx)(st, {}), (0, u.jsx)(sa, {}), (0, u.jsx)(li, {}), (0, u.jsx)(au, {}), (0, u.jsx)(aq, {}), (0, u.jsx)(af, {}), (0, u.jsx)(iS, {}), (0, u.jsx)(iR, {}), (0, u.jsx)(az, {})]
                });
            var i8 = a(67091);
            let i7 = {
                    hidden: {
                        y: "5vh",
                        opacity: 0,
                        transition: {
                            type: "easeIn",
                            duration: .15
                        }
                    },
                    show: {
                        opacity: 1,
                        y: "0vh",
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 16,
                            staggerChildren: .05,
                            delayChildren: .1
                        }
                    }
                },
                i6 = {
                    hidden: {
                        opacity: 0,
                        scale: .85
                    },
                    show: {
                        opacity: .2,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 12
                        }
                    }
                },
                i9 = e => {
                    let {
                        onSelect: t,
                        onClose: a,
                        networks: l,
                        comingSoonNetworks: s
                    } = e, {
                        t: i
                    } = (0, g.$G)();
                    return (0, u.jsxs)("main", {
                        className: "flex items-start justify-center scroll-smooth overflow-y-scroll w-screen h-dvh fixed inset-0 px-2 md:px-0 py-16 md:py-20 z-[25]",
                        onClick: a,
                        children: [(0, u.jsx)(p.E.button, {
                            initial: {
                                opacity: 0,
                                scale: .1
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .1
                            },
                            whileHover: {
                                scale: 1.1
                            },
                            className: "flex items-center cursor-pointer w-10 h-10 shrink-0 flex items-center justify-center rounded-full shadow-sm bg-card fixed top-6 right-6 z-10",
                            children: (0, u.jsx)(eJ.bM, {
                                className: "fill-foreground w-3.5 h-3.5"
                            })
                        }, "close-activity-button"), (0, u.jsxs)(p.E.div, {
                            variants: i7,
                            initial: "hidden",
                            animate: "show",
                            exit: "hidden",
                            className: "flex flex-col items-center gap-10 w-full",
                            children: [(0, u.jsx)("div", {
                                className: "flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-sm",
                                children: (0, u.jsx)("h1", {
                                    className: "text-2xl font-heading",
                                    children: i("networkSelectorModal.title")
                                })
                            }), (0, u.jsxs)("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 w-full px-4 max-w-3xl",
                                children: [l.map(e => (0, u.jsx)(i8.e, {
                                    chain: e,
                                    onSelect: a => {
                                        a.stopPropagation(), t(e)
                                    }
                                }, e.id)), s.map(e => (0, u.jsx)(i8.e, {
                                    chain: e,
                                    onSelect: e => e.stopPropagation(),
                                    comingSoon: !0
                                }, e.id)), s.length + l.length < 4 && [...Array(4 - (s.length + l.length))].map((e, t) => (0, u.jsx)(p.E.div, {
                                    variants: i6,
                                    className: "bg-card border relative w-full aspect-[3.25/4] rounded-2xl shadow-sm"
                                }, t))]
                            })]
                        })]
                    }, "bridgeMain")
                },
                ne = () => {
                    let {
                        availableChains: e
                    } = iE(), t = eX(), a = iT.useSetChainId(), l = er.useSetDisplayFiatNetworkSelector();
                    return (0, u.jsx)(i9, {
                        onClose: () => l(!1),
                        onSelect: e => {
                            a(e.id), t({
                                event: "onramp-chain-select",
                                name: e.name
                            }), l(!1)
                        },
                        comingSoonNetworks: [],
                        networks: e
                    })
                };
            var nt = a(46310),
                na = a(31017),
                nl = a(7989),
                ns = a(50338),
                ni = a(48362);
            let nn = [1, P.u.id, 10, J.x.id, nt.S.id, ee.m.id, na.q.id, nl.g.id, ns.l.id, ni.w.id],
                nd = e => (0, f.useMemo)(() => e.sort((e, t) => {
                    let a = nn.indexOf(e.id),
                        l = nn.indexOf(t.id);
                    return -1 === a && (a = 100), -1 === l && (l = 100), a < l ? -1 : 1
                }), [e]),
                nr = () => (0, L.C)(),
                no = () => {
                    let e = (0, L.C)(),
                        t = es();
                    return (0, f.useCallback)(a => {
                        if (!a) return [];
                        let l = {
                            [a.id]: a
                        };
                        for (let s of t.data) {
                            let t = s[a.id];
                            if (t)
                                for (let a of e) {
                                    if (l[a.id]) continue;
                                    let e = s[a.id];
                                    e && M(t, e) && (l[a.id] = a)
                                }
                        }
                        return Object.values(l)
                    }, [e, t])
                },
                nc = () => ((0, S.U8)(), (0, S.OI)(), (0, I.SZ)(e => e.superbridgeTestnets), []),
                nu = () => {
                    let e = (0, eh.W)(),
                        t = (0, eh.kX)(),
                        a = eX(),
                        l = er.useNetworkSelectorDirection(),
                        s = er.useSetDisplayTokenNetworkSelector(),
                        i = (0, I.SZ)(e => e.setFromChainId),
                        n = (0, I.SZ)(e => e.toChainId),
                        d = (0, I.SZ)(e => e.setToChainId),
                        r = nr(),
                        o = no(),
                        c = nd("from" === l ? r : o(t)),
                        m = nc();
                    return (0, u.jsx)(i9, {
                        onClose: () => s(!1),
                        onSelect: r => {
                            if ("from" === l) {
                                if (a({
                                        event: "from-chain-select",
                                        name: r.name
                                    }), i(r.id), r.id === (null == e ? void 0 : e.id)) {
                                    a({
                                        event: "to-chain-select",
                                        name: t.name
                                    }), d(t.id);
                                    return
                                }
                                let l = o(r);
                                if (!l.find(e => e.id === n)) {
                                    let e = l.find(e => e.id !== r.id);
                                    e && (a({
                                        event: "to-chain-select",
                                        name: e.name
                                    }), d(e.id))
                                }
                            }
                            "to" === l && (a({
                                event: "to-chain-select",
                                name: r.name
                            }), d(r.id), r.id === (null == t ? void 0 : t.id) && (a({
                                event: "from-chain-select",
                                name: e.name
                            }), i(e.id))), s(!1)
                        },
                        comingSoonNetworks: m,
                        networks: c
                    })
                };

            function nm(e) {
                let {
                    children: t
                } = e;
                tq();
                let a = er.useDisplayTransactions(),
                    l = er.useDisplayTokenNetworkSelector(),
                    s = er.useDisplayFiatNetworkSelector(),
                    i = (0, tK.ST)(),
                    n = (0, tK.Gs)(),
                    d = (0, tK.Kz)(),
                    r = (0, tK.DF)(),
                    o = (0, tK.J2)(),
                    c = (0, tK.ii)(),
                    h = (0, S.L4)();
                return (0, u.jsxs)("div", {
                    className: (0, x.Z)(h && "tracking-tight", "bg-background w-screen h-screen overflow-hidden z-40 relative transition-colors duration-1000  flex justify-center"),
                    children: [h && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(p.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "bg-gradient-to-t from-[rgba(168,130,253,0.27)] via-[rgba(168,130,253,0.05)] to-[rgba(168,130,253,0)] inset-0 z-0 fixed mix-blend-plus-lighter"
                        }), (0, u.jsx)("div", {
                            className: "dark:opacity-50",
                            children: (0, u.jsx)(v.Z, {
                                radius: [1, 2],
                                snowflakeCount: 80
                            })
                        })]
                    }), (0, u.jsx)("div", {
                        className: (0, x.Z)("inset-0 z-0 fixed transition-all bg-cover"),
                        style: {
                            backgroundImage: i ? "url(".concat(i, ")") : void 0,
                            opacity: c && "string" == typeof c ? parseInt(c) / 100 : void 0,
                            mixBlendMode: n,
                            backgroundSize: r,
                            backgroundRepeat: o,
                            backgroundPosition: d
                        }
                    }), (0, u.jsx)(ar, {}), t, (0, u.jsxs)(m.M, {
                        mode: "wait",
                        initial: !1,
                        children: [a && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)(tM, {}, "transactionItemsContainer"), (0, u.jsx)(p.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                className: "h-screen w-screen z-10 backdrop-blur-lg  bg-white/0"
                            })]
                        }), l && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)(nu, {}, "tokenNetworkSelector"), (0, u.jsx)(p.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                className: "h-screen w-screen z-10 backdrop-blur-lg  bg-white/0"
                            })]
                        }), s && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)(ne, {}, "fiatNetworkSelector"), (0, u.jsx)(p.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                className: "h-screen w-screen z-10 backdrop-blur-lg  bg-white/0"
                            })]
                        })]
                    }), (0, u.jsx)(i4, {})]
                })
            }

            function nh(e) {
                let {
                    children: t,
                    ...a
                } = e, l = (0, tQ.h)();
                return (0, u.jsx)("div", {
                    className: (0, x.Z)("flex items-start justify-center fixed inset-0 h-screen w-screen overflow-x-hidden", l ? "overflow-y-hidden" : "overflow-y-auto"),
                    ...a,
                    children: t
                })
            }
            var nx = a(87315);

            function np() {
                let e = (0, ex.qD)();
                return (0, u.jsx)(u.Fragment, {
                    children: e.metadata.gId && (0, u.jsx)(eK.GoogleAnalytics, {
                        gaId: e.metadata.gId
                    })
                })
            }
            let nv = () => "abc0aacd-a1d7-419e-b237-b8b02de66925" === (0, ex.Me)(),
                nf = () => nv() ? (0, u.jsxs)(e0.bZ, {
                    children: [(0, u.jsx)(e0.Cd, {
                        children: "Wrapping or unwrapping USDC?"
                    }), (0, u.jsxs)(e0.X, {
                        children: ["Please visit", " ", (0, u.jsx)("a", {
                            href: "https://bridge.echos.fun",
                            target: "_blank",
                            className: "underline",
                            children: "Echos Bridge."
                        })]
                    })]
                }) : null,
                ng = () => {
                    let {
                        hasWithdrawalReadyToFinalize: e
                    } = eN(), t = C(), a = (0, sE.G)((0, N.I)().find(e => "soneium-minato" === e.name));
                    return !t && !!a && !!e
                },
                nj = () => (tx("FaultProofInfo"), ng(), (0, N.I)().find(e => "soneium-minato" === e.name), (0, tQ.h)(), null),
                nb = () => {
                    let e = (0, tz.C)();
                    return (null == e ? void 0 : e.name) !== "gravity-mainnet" ? null : (0, u.jsxs)(e0.bZ, {
                        children: [(0, u.jsx)(e0.Cd, {
                            children: "Bridging USDC, USDT, or WETH?"
                        }), (0, u.jsxs)(e0.X, {
                            children: ["Please visit", " ", (0, u.jsx)("a", {
                                href: "https://stargate.finance/bridge",
                                target: "_blank",
                                className: "underline",
                                children: "Stargate"
                            }), " ", "or", " ", (0, u.jsx)("a", {
                                href: "https://app.symbiosis.finance/swap?chainIn=Ethereum&chainOut=Gravity&tokenIn=ETH&tokenOut=G",
                                target: "_blank",
                                className: "underline",
                                children: "Symbiosis"
                            }), "."]
                        })]
                    })
                },
                nw = () => an() ? (0, u.jsxs)(e0.bZ, {
                    children: [(0, u.jsx)(e0.Cd, {
                        children: "Important! Check your wallet before you bridge"
                    }), (0, u.jsxs)(e0.X, {
                        children: ["To make transactions, stake, or withdraw from Pepe Unchained Layer 2 your wallet needs support for custom networks. If your wallet does not have support for custom networks, then do not bridge until you have imported your wallet into one that does.", " ", (0, u.jsx)("a", {
                            href: "https://help.superbridge.app/en/articles/10293436-pepe-unchained-pepu-troubleshooting",
                            target: "_blank",
                            className: "underline text-foreground",
                            children: "Learn more…"
                        })]
                    })]
                }) : null,
                nN = () => {
                    var e, t, a;
                    let l = (0, ex.qD)(),
                        s = (0, ex.gf)(),
                        i = null !== (a = null === (e = l.links.find(e => ["discord", "twitter", "x.com"].find(t => e.url.toLowerCase().includes(t)))) || void 0 === e ? void 0 : e.url) && void 0 !== a ? a : null === (t = l.links[0]) || void 0 === t ? void 0 : t.url;
                    return (0, u.jsxs)("div", {
                        className: "flex relative items-start gap-3 w-full p-4 bg-red-500/80 bg-[url('/img/shutdown-grid.svg')] bg-repeat rounded-[18px] shadow-sm",
                        children: [(0, u.jsx)("div", {
                            className: "animate-wiggle-waggle drop-shadow-lg",
                            children: (0, u.jsx)(eJ.az, {
                                className: "h-8 w-8 shrink-0"
                            })
                        }), (0, u.jsxs)("div", {
                            className: "prose",
                            children: [(0, u.jsxs)("p", {
                                className: "text-white text-xs",
                                children: [l.head.title, " bridge will shut down on", " ", new Date(s || 0).toUTCString(), ". Please finalize any withdrawals before the shut down date."]
                            }), (0, u.jsx)("p", {
                                className: "text-white text-xs",
                                children: (0, u.jsxs)("a", {
                                    href: i,
                                    className: (0, x.Z)("text-white", i && "cursor-pointer hover:underline"),
                                    children: ["For support contact the ", l.head.title, " team."]
                                })
                            })]
                        })]
                    })
                },
                ny = () => {
                    let e = (0, ex.gf)();
                    return (0, u.jsxs)(u.Fragment, {
                        children: [e && e > Date.now() && (0, u.jsx)(nN, {}), (0, u.jsx)(nj, {}), (0, u.jsx)(nb, {}), (0, u.jsx)(nw, {}), (0, u.jsx)(nf, {})]
                    })
                },
                nC = () => {
                    let e = (0, L.C)(),
                        t = (0, eh.kX)(),
                        a = (0, eh.W)(),
                        l = (0, I.SZ)(e => e.setFromChainId),
                        s = (0, I.SZ)(e => e.setToChainId),
                        i = er.useSetDisplayTokenNetworkSelector(),
                        n = er.useSetNetworkSelectorDirection(),
                        {
                            t: d
                        } = (0, g.$G)(),
                        r = eX(),
                        o = e.length > 2,
                        c = () => {
                            t && a && (s(t.id), l(a.id), r({
                                event: "from-chain-select",
                                name: a.name
                            }), r({
                                event: "to-chain-select",
                                name: t.name
                            }))
                        },
                        m = e => () => {
                            o ? (n(e), i(!0)) : c()
                        };
                    return (0, u.jsxs)("div", {
                        className: "relative grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-1 select-none pt-0.5",
                        children: [(0, u.jsxs)("div", {
                            className: (0, x.Z)("flex gap-2 w-full items-start justify-start bg-muted p-4 rounded-xl transition-all md:origin-right grow-1", "cursor-pointer hover:scale-[1.02]"),
                            onClick: m("from"),
                            children: [(0, u.jsx)(tf.d, {
                                chain: t,
                                width: 32,
                                height: 32,
                                className: "pointer-events-none rounded-sm"
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [(0, u.jsx)("span", {
                                    className: "text-muted-foreground text-xs leading-none block mt-0.5",
                                    children: d("from")
                                }), (0, u.jsx)("span", {
                                    className: "leading-none font-button",
                                    children: null == t ? void 0 : t.name
                                })]
                            })]
                        }), (0, u.jsx)("button", {
                            onClick: c,
                            className: "flex justify-center items-center rounded-lg w-8 h-8 bg-muted border-[3px] border-card backdrop-blur-md absolute z-[999] left-1/2 top-1/2 -translate-x-[50%] -translate-y-2/4 z-10 transition-all scale-90 hover:scale-100 rotate-90 md:rotate-0",
                            children: (0, u.jsx)(eJ.Ri, {
                                className: "w-3 h-3 fill-muted-foreground"
                            })
                        }), (0, u.jsxs)("div", {
                            className: (0, x.Z)("flex gap-2 w-full items-start md:flex-row-reverse bg-muted p-4 rounded-xl transition-all md:origin-left", "cursor-pointer hover:scale-[1.02]"),
                            onClick: m("to"),
                            children: [(0, u.jsx)(tf.d, {
                                chain: a,
                                width: 32,
                                height: 32,
                                className: "pointer-events-none rounded-sm"
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-0.5 md:text-right",
                                children: [(0, u.jsx)("span", {
                                    className: "text-muted-foreground text-xs leading-none block mt-0.5",
                                    children: d("to")
                                }), (0, u.jsx)("span", {
                                    className: "leading-none  font-button",
                                    children: null == a ? void 0 : a.name
                                })]
                            })]
                        })]
                    })
                },
                nk = e => {
                    let {
                        children: t,
                        className: a
                    } = e, l = (0, f.useRef)(null), [s, i] = (0, f.useState)("auto");
                    return (0, f.useEffect)(() => {
                        if (l.current) {
                            let e = new ResizeObserver(e => {
                                i(e[0].contentRect.height)
                            });
                            return e.observe(l.current), () => {
                                e.disconnect()
                            }
                        }
                    }, []), (0, u.jsx)(p.E.div, {
                        className: (0, x.Z)(a, "overflow-hidden"),
                        style: {
                            height: s
                        },
                        animate: {
                            height: s
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                            delay: .1
                        },
                        layout: !0,
                        children: (0, u.jsx)("div", {
                            ref: l,
                            children: t
                        })
                    })
                },
                nI = () => !1,
                nS = () => {
                    var e;
                    let t = lv();
                    return (null === (e = t.data) || void 0 === e ? void 0 : e.result) && eP(t.data.result) ? BigInt(t.data.result.maximum) : null
                },
                nL = () => {
                    var e;
                    let t = lv();
                    return (null === (e = t.data) || void 0 === e ? void 0 : e.result) && eO(t.data.result) ? BigInt(t.data.result.minimum) : null
                },
                nF = () => {
                    let e = lv().data;
                    return !!(null == e ? void 0 : e.result) && eB(e.result) && "Paused" === e.result.type
                },
                nA = () => {
                    var e, t;
                    return null !== (t = null === (e = lx().data) || void 0 === e ? void 0 : e.request) && void 0 !== t ? t : null
                },
                nT = () => {
                    var e;
                    let {
                        openConnectModal: t
                    } = (0, tX.We)(), a = (0, w.m)(), l = (0, eh.kX)(), s = (0, eh.W)(), i = l7(), n = lh(), d = ev(), {
                        t: r
                    } = (0, g.$G)(), o = iG(), c = er.useSetDisplayConfirmationModal(), m = lz(), h = lB(), x = lW(), p = er.useRecipientAddress(), v = lS(), f = nS(), j = nL(), N = nF(), y = nI(), C = lv(), k = nA(), I = tx("RecipientAddress"), S = l5(), L = lA(), F = (0, aX.K)({
                        address: a.address,
                        chainId: (null == L ? void 0 : L.id) || (null == l ? void 0 : l.id)
                    }), A = function () {
                        var e;
                        let t = lB(),
                            a = (0, tz.C)(),
                            l = (0, w.m)();
                        return (0, aZ.u)({
                            abi: aO.Wo,
                            functionName: "balanceOf",
                            args: [l.address],
                            chainId: null == a ? void 0 : a.l1ChainId,
                            address: null == a ? void 0 : null === (e = a.arbitrumNativeToken) || void 0 === e ? void 0 : e.address,
                            query: {
                                enabled: t
                            }
                        })
                    }(), T = sw(), D = lX(), M = !!(T.data && F.data && e_(null === (e = C.data) || void 0 === e ? void 0 : e.result)) && F.data.value - BigInt(C.data.result.initiatingTransaction.value) < BigInt(T.data.token.raw), E = lq(), z = !!E && void 0 !== A.data && E > A.data, H = () => {
                        n !== BigInt(0) && c(!0)
                    }, R = (0, b.EQ)({
                        withdrawing: m,
                        isAcross: x,
                        paused: N,
                        isSubmitting: i.isLoading,
                        account: a.address,
                        hasInsufficientBalance: D,
                        hasInsufficientGas: M,
                        hasInsufficientBaseNativeTokenBalance: z,
                        recipient: p,
                        weiAmount: n,
                        bridgeMax: f,
                        bridgeMin: j,
                        disabled: y,
                        routeLoading: C.isLoading,
                        validRoute: C.data && e_(C.data.result),
                        zeroRouteAddress: !!(null == k ? void 0 : k.sender) && (0, en.E)(k.sender, ec) || !!(null == k ? void 0 : k.sender) && (0, en.E)(k.recipient, ec),
                        bridgingIsRestrictedToSameAddress: !!a.address && !!p && o && !(0, en.E)(a.address, p),
                        estimateSuccess: S,
                        isArbitrumDeposit: h
                    }).with({
                        bridgingIsRestrictedToSameAddress: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: r("recipient.checkRecipientAddress"),
                        disabled: !0
                    })).with({
                        disabled: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: r("buttons.bridgingDisabled"),
                        disabled: !0
                    })).with({
                        paused: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: r("buttons.bridgingPaused"),
                        disabled: !0
                    })).when(e => {
                        let {
                            bridgeMax: t,
                            weiAmount: a
                        } = e;
                        return null !== t && a > t
                    }, e => {
                        var t;
                        let {
                            bridgeMax: a
                        } = e;
                        return {
                            onSubmit: () => {},
                            buttonText: r("bridgeLimit", {
                                amount: e6(parseFloat((0, e7.b)(a, null !== (t = null == d ? void 0 : d.decimals) && void 0 !== t ? t : 18))),
                                symbol: null == d ? void 0 : d.symbol
                            }),
                            disabled: !0
                        }
                    }).with({
                        account: void 0
                    }, () => ({
                        onSubmit: () => null == t ? void 0 : t(),
                        buttonText: r("connectWallet"),
                        disabled: !1
                    })).with({
                        recipient: ""
                    }, () => ({
                        onSubmit: () => I.open(),
                        buttonText: r("recipient.addRecipientAddress"),
                        disabled: !1
                    })).with({
                        weiAmount: BigInt("0")
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: r("enterAnAmount"),
                        disabled: !0
                    })).when(e => {
                        let {
                            bridgeMin: t,
                            weiAmount: a
                        } = e;
                        return null !== t && a < t
                    }, e => {
                        let {} = e;
                        return {
                            onSubmit: () => {},
                            buttonText: r("bridgeMin", {
                                amount: e6(parseFloat((0, e7.b)(j, d.decimals))),
                                symbol: null == d ? void 0 : d.symbol
                            }),
                            disabled: !0
                        }
                    }).with({
                        hasInsufficientBalance: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: r("insufficientFunds"),
                        disabled: !0
                    })).with({
                        hasInsufficientGas: !0
                    }, e => ({
                        onSubmit: H,
                        buttonText: r("insufficientGas", {
                            symbol: null == v ? void 0 : v.symbol
                        }),
                        disabled: !0
                    })).with({
                        hasInsufficientBaseNativeTokenBalance: !0
                    }, e => ({
                        onSubmit: H,
                        buttonText: r("insufficientGas", {
                            symbol: null == s ? void 0 : s.nativeCurrency.symbol
                        }),
                        disabled: !0
                    })).with({
                        estimateSuccess: {
                            data: !1
                        },
                        isArbitrumDeposit: !1
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: "This bridge is likely to fail",
                        disabled: !0
                    })).with({
                        isSubmitting: !0
                    }, () => ({
                        onSubmit: () => {},
                        buttonText: r("bridging"),
                        disabled: !0
                    })).otherwise(e => ({
                        onSubmit: H,
                        buttonText: r("reviewBridge"),
                        disabled: e.routeLoading || e.zeroRouteAddress || !e.validRoute || e.estimateSuccess.isFetching
                    }));
                    return (0, u.jsx)(ax.z, {
                        disabled: R.disabled,
                        onClick: R.onSubmit,
                        className: "hover:scale-[1.02]",
                        children: R.buttonText
                    })
                },
                nD = () => {
                    var e, t, a;
                    let l = K.useCurrency(),
                        s = iT.useFiatInput(),
                        i = iT.useAmount(),
                        {
                            chain: n,
                            asset: d
                        } = iE(),
                        r = (0, y.Et)((0, ex.$)(), {
                            chainId: null !== (t = null == n ? void 0 : n.id.toString()) && void 0 !== t ? t : "",
                            fiatCurrency: l,
                            tokenAddress: null !== (a = null == d ? void 0 : d.address) && void 0 !== a ? a : "",
                            tokenAmount: s ? void 0 : i,
                            fiatAmount: s ? i : void 0
                        }, {
                            query: {
                                enabled: !!i && !!n && !!d && !!parseFloat(i)
                            }
                        }),
                        o = null === (e = r.data) || void 0 === e ? void 0 : e.data.results[0];
                    return {
                        isLoading: r.isFetching,
                        data: o
                    }
                },
                nM = e => !!e.fees,
                nE = e => e.type == ey.bR.GenericError,
                nz = e => e.type == ey.bR.AmountTooLarge,
                nH = {
                    [ey.E5.Moonpay]: "/img/fiat/moonpay.jpeg",
                    [ey.E5.Halliday]: "/img/networks/across.svg",
                    [ey.E5.Transak]: "/img/networks/across.svg",
                    [ey.E5.ramp]: "/img/networks/across.svg"
                },
                nR = e => {
                    let {
                        provider: t,
                        className: a
                    } = e, l = nH[t];
                    return (0, u.jsx)(sr(), {
                        alt: "".concat(t, " icon"),
                        src: l,
                        className: a,
                        height: 16,
                        width: 16
                    })
                },
                nB = e => {
                    let {
                        id: t,
                        result: a
                    } = e, {
                        chain: l,
                        asset: s
                    } = iE(), i = K.useCurrency(), n = lD(s);
                    return nM(a) ? (0, u.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, u.jsxs)("div", {
                            className: "flex justify-between items-center gap-1",
                            children: [(0, u.jsxs)("h3", {
                                className: "text-xs font-heading leading-none",
                                children: ["Get on ", null == l ? void 0 : l.name]
                            }), (0, u.jsx)("div", {
                                className: "flex gap-1.5 items-center rounded-full bg-muted pl-1.5 pr-2 py-1.5",
                                children: (0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center text-foreground text-xs font-body leading-none",
                                    children: [(0, u.jsx)(nR, {
                                        provider: t,
                                        className: "rounded-full h-4 w-4"
                                    }), (0, u.jsx)("span", {
                                        children: t
                                    })]
                                })
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, u.jsxs)("div", {
                                className: "relative",
                                children: [(0, u.jsx)(tg, {
                                    token: s,
                                    className: "h-10 w-10"
                                }), (0, u.jsx)(tf.d, {
                                    chain: l,
                                    className: "w-4 w-4 rounded-2xs absolute bottom-0 -right-1"
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, u.jsxs)("span", {
                                    className: "text-2xl leading-none",
                                    children: [e6(parseFloat(a.tokenAmount)), " ", s.symbol]
                                }), !!n && (0, u.jsxs)("span", {
                                    className: "text-xs leading-none text-muted-foreground",
                                    children: [aF[i], e6(parseFloat(a.tokenAmount) * n)]
                                })]
                            })]
                        }), (0, u.jsx)("div", {
                            className: "flex gap-3 justify-start mt-4",
                            children: (0, u.jsxs)("div", {
                                className: "bg-transparent rounded-full py-0.5 pl-0.5 pr-1.5 flex gap-1 items-center",
                                children: [(0, u.jsx)(eJ.z9, {
                                    className: "fill-muted-foreground group-hover:fill-foreground h-3.5 w-3.5"
                                }), (0, u.jsxs)("span", {
                                    className: "text-xs leading-none text-muted-foreground group-hover:text-foreground",
                                    children: [aF[i], e6(a.fees.reduce((e, t) => {
                                        var a;
                                        return e + parseFloat((null === (a = t.fiat) || void 0 === a ? void 0 : a.amount) || "0")
                                    }, 0)), " ", "Fee"]
                                })]
                            })
                        })]
                    }) : null
                },
                nP = () => {
                    let e = nD();
                    return (0, u.jsxs)(m.M, {
                        mode: "wait",
                        children: [e.isLoading && (0, u.jsxs)(p.E.div, {
                            exit: {
                                opacity: 0
                            },
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .2,
                                ease: "easeInOut"
                            },
                            className: "flex gap-2 justify-center w-full items-center py-4",
                            children: [(0, u.jsx)(eJ.vM, {
                                className: "text-muted-foreground w-4 h-4"
                            }), (0, u.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Loading"
                            })]
                        }, "loading route quote"), e.data && (0, u.jsx)(u.Fragment, {
                            children: nM(e.data.result) ? (0, u.jsx)(p.E.div, {
                                exit: {
                                    opacity: 0,
                                    scale: .98
                                },
                                initial: {
                                    opacity: 0,
                                    scale: .98
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        delay: .2
                                    }
                                },
                                transition: {
                                    duration: .2,
                                    ease: "easeInOut"
                                },
                                className: "flex flex-col gap-2 relative",
                                children: (0, u.jsx)("div", {
                                    className: "p-4 border rounded-xl",
                                    children: (0, u.jsx)(nB, {
                                        ...e.data
                                    })
                                })
                            }, "fiat onramp quote") : (0, u.jsx)(u.Fragment, {})
                        })]
                    })
                },
                nO = () => {
                    let e = (0, w.m)(),
                        t = (0, tX.We)(),
                        a = K.useCurrency(),
                        l = iT.useAmount(),
                        s = iT.useSetAmount(),
                        i = iT.useFiatInput(),
                        n = iT.useSetFiatInput(),
                        d = eX(),
                        r = tx("FiatOnrampTokenSelector"),
                        o = er.useSetDisplayFiatNetworkSelector(),
                        {
                            availableAssets: c,
                            asset: m,
                            chain: h
                        } = iE(),
                        p = lD(m),
                        v = nD(),
                        f = () => {
                            var l, s;
                            if (!e.address) {
                                null === (l = t.openConnectModal) || void 0 === l || l.call(t);
                                return
                            }
                            if (v.data && nM(v.data.result) && (d({
                                    event: "onramp-purchase",
                                    amount: v.data.result.tokenAmount.toString(),
                                    network: h.name,
                                    symbol: m.symbol,
                                    provider: v.data.id
                                }), v.data.id === ey.E5.Moonpay && v.data.result.moonPay)) {
                                let t = new URLSearchParams;
                                t.set("currencyCode", v.data.result.moonPay.currencyCode), t.set("baseCurrencyCode", a), t.set("walletAddress", null !== (s = e.address) && void 0 !== s ? s : ""), i ? t.set("baseCurrencyAmount", v.data.result.fiatAmount) : t.set("quoteCurrencyAmount", v.data.result.tokenAmount), window.open("https://buy.moonpay.com?apiKey=pk_live_aPFIe7Yed2t3C2AeYtOUShkT9bNUfB&".concat(t.toString()), "_blank")
                            }
                        },
                        g = (0, b.EQ)({
                            account: e.address,
                            quote: v.data,
                            isLoading: v.isLoading,
                            amount: l
                        }).with({
                            account: void 0
                        }, () => ({
                            label: "Connect",
                            onClick: () => {
                                var e;
                                return null === (e = t.openConnectModal) || void 0 === e ? void 0 : e.call(t)
                            },
                            disabled: !1
                        })).with({
                            isLoading: !0
                        }, {
                            amount: ""
                        }, () => ({
                            label: "Continue",
                            onClick: () => {},
                            disabled: !0
                        })).when(e => !parseFloat(e.amount), () => ({
                            label: "Continue",
                            onClick: () => {},
                            disabled: !0
                        })).with({
                            quote: void 0
                        }, () => ({
                            label: "No quotes found",
                            onClick: () => {},
                            disabled: !0
                        })).with({
                            quote: b.P.not(void 0)
                        }, e => {
                            let {
                                quote: t
                            } = e;
                            return nM(t.result) ? {
                                label: "Continue",
                                onClick: f,
                                disabled: !1
                            } : {
                                label: nE(t.result) ? t.result.error : nz(t.result) ? "Amount too large" : "Amount too small",
                                onClick: () => {},
                                disabled: !0
                            }
                        }).exhaustive(),
                        j = parseFloat(l);
                    return (0, u.jsxs)("div", {
                        className: "flex flex-col gap-3 px-4 py-4",
                        children: [(0, u.jsxs)("div", {
                            className: "flex flex-col gap-1.5",
                            children: [(0, u.jsxs)("div", {
                                className: (0, x.Z)("flex gap-2 w-full items-start md:items-end bg-muted p-4 rounded-xl transition-all", "cursor-pointer hover:scale-[1.02]"),
                                onClick: () => o(!0),
                                children: [(0, u.jsx)(tf.d, {
                                    chain: h,
                                    width: 32,
                                    height: 32,
                                    className: "pointer-events-none rounded-sm"
                                }), (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [(0, u.jsx)("span", {
                                        className: "text-muted-foreground text-xs leading-none block mt-0.5",
                                        children: "Buy on"
                                    }), (0, u.jsx)("span", {
                                        className: "leading-none  font-button",
                                        children: null == h ? void 0 : h.name
                                    })]
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-2.5 relative rounded-2xl px-4 py-5 border border-transparent focus-within:border-border transition-colors bg-muted ",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex gap-2 items-center",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [i ? (0, u.jsx)("span", {
                                            className: "text-4xl leading-none placeholder:text-muted-foreground text-foreground",
                                            children: aF[a]
                                        }) : null, (0, u.jsx)("input", {
                                            value: l,
                                            onChange: e => {
                                                s(e.target.value.replaceAll(",", "."))
                                            },
                                            type: "text",
                                            inputMode: "decimal",
                                            minLength: 1,
                                            maxLength: 79,
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            pattern: "^[0-9]*[.,]?[0-9]*$",
                                            name: "amount",
                                            id: "amount",
                                            className: "block w-full shadow-none bg-transparent focus:outline-none text-4xl leading-none placeholder:text-muted-foreground text-foreground",
                                            placeholder: "0"
                                        })]
                                    }), 1 === c.length ? (0, u.jsxs)("div", {
                                        className: "flex shrink-0 relative gap-1 rounded-full py-2 pl-3 pr-4 items-center font-button transition-all text-foreground bg-card",
                                        children: [(0, u.jsx)(tg, {
                                            token: m,
                                            className: "h-[20px] w-[20px] shrink-0 !text-[6px]"
                                        }), null == m ? void 0 : m.symbol]
                                    }) : (0, u.jsxs)("button", {
                                        onClick: () => r.open(),
                                        className: "flex shrink-0 relative gap-1 rounded-full py-2 pl-3 pr-3 items-center font-button transition-all hover:scale-105 text-foreground bg-card",
                                        children: [(0, u.jsx)(tg, {
                                            token: m,
                                            className: "h-[20px] w-[20px] shrink-0 !text-[6px]"
                                        }), null == m ? void 0 : m.symbol, (0, u.jsx)(eJ.KC, {
                                            className: "w-3.5 h-3.5 fill-foreground"
                                        })]
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "flex items-start justify-between",
                                    children: (0, u.jsx)("div", {
                                        className: "flex items-center",
                                        children: p && (0, u.jsx)("div", {
                                            onClick: () => {
                                                p && (i ? s(e6(j / p)) : s((j * p).toFixed(2)), n(!i))
                                            },
                                            className: "text-muted-foreground text-xs leading-none cursor-pointer",
                                            children: i ? (0, u.jsxs)(u.Fragment, {
                                                children: [j ? e6(j / p) : "0", " ", m.symbol]
                                            }) : (0, u.jsxs)(u.Fragment, {
                                                children: [aF[a], j ? e6(j * p) : 0]
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), (0, u.jsx)(nk, {
                            children: (0, u.jsx)(nP, {}, "route-preview")
                        }), (0, u.jsx)("div", {
                            className: "flex flex-col pb-0.5",
                            children: (0, u.jsx)(ax.z, {
                                disabled: g.disabled,
                                onClick: g.onClick,
                                className: "hover:scale-[1.02]",
                                children: g.label
                            })
                        })]
                    })
                },
                n_ = () => {
                    var e, t;
                    let a = lx(),
                        l = lv(),
                        s = tx("RouteSelector"),
                        i = null !== (t = null === (e = a.data) || void 0 === e ? void 0 : e.results.filter(e => e_(e.result)).length) && void 0 !== t ? t : 0,
                        n = (!l.data || eB(l.data.result)) && i >= 1;
                    return (0, u.jsxs)(m.M, {
                        mode: "wait",
                        children: [l.isLoading && (0, u.jsxs)(p.E.div, {
                            exit: {
                                opacity: 0
                            },
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .2,
                                ease: "easeInOut"
                            },
                            className: "flex gap-2 justify-center w-full items-center py-4",
                            children: [(0, u.jsx)(eJ.vM, {
                                className: "text-muted-foreground w-4 h-4"
                            }), (0, u.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Loading"
                            })]
                        }, "loading route quote"), !l.isLoading && !l.data && (0, u.jsx)(p.E.div, {
                            exit: {
                                opacity: 0
                            }
                        }, "empty route quote"), !l.isLoading && n && (0, u.jsx)("div", {
                            className: "bg-muted rounded-xl p-4 flex flex-col gap-3",
                            children: (0, u.jsxs)(ax.z, {
                                onClick: () => s.open(),
                                size: "xs",
                                variant: "secondary",
                                className: "mx-auto text-xs h-6 gap-1",
                                children: [(0, u.jsx)("span", {
                                    children: "See other routes"
                                }), (0, u.jsx)(eJ.Ri, {
                                    className: "w-3 w-3 fill-foreground"
                                })]
                            })
                        }), !l.isLoading && l.data && !eB(l.data.result) && (0, u.jsx)(p.E.div, {
                            exit: {
                                opacity: 0,
                                scale: .98
                            },
                            initial: {
                                opacity: 0,
                                scale: .98
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delay: .2
                                }
                            },
                            transition: {
                                duration: .2,
                                ease: "easeInOut"
                            },
                            className: "flex flex-col gap-2 relative",
                            children: (0, u.jsx)("div", {
                                className: "p-4 border rounded-xl",
                                children: (0, u.jsx)(iU, {
                                    provider: l.data.id,
                                    quote: l.data.result,
                                    allowDetailClicks: !0,
                                    onRoutesClick: i > 1 ? () => s.open() : void 0
                                })
                            })
                        }, "route quote")]
                    })
                },
                nZ = () => {
                    let e = er.useRecipientName(),
                        t = er.useRecipientAddress(),
                        a = (0, w.m)(),
                        l = tx("RecipientAddress");
                    return (0, u.jsx)("div", {
                        className: "flex items-center justify-between shrink-0",
                        onClick: a.address ? () => l.open() : () => {},
                        children: a.address ? (0, u.jsx)("div", {
                            className: (0, x.Z)("h-5 flex justify-center items-center gap-1 px-2 py-1 mr-0.5 rounded-full cursor-pointer hover:scale-105 transition-all bg-card", t && !(0, en.E)(a.address, t) && "bg-card text-foreground"),
                            children: t && !(0, en.E)(a.address, t) ? (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)("span", {
                                    className: "text-[10px] font-button leading-none",
                                    children: e || "".concat(t.slice(0, 4), "...").concat(t.slice(t.length - 4))
                                }), (0, u.jsx)(eJ.nr, {
                                    className: "w-3 h-3 fill-foreground"
                                })]
                            }) : (0, u.jsx)(eJ.nr, {
                                className: "w-3 h-3 fill-muted-foreground"
                            })
                        }) : (0, u.jsx)("span", {
                            className: "text-xs text-muted-foreground"
                        })
                    })
                },
                nG = () => {
                    var e, t, a, l;
                    let {
                        t: s
                    } = (0, g.$G)(), i = (0, w.m)(), n = ev(), d = ei(), r = s3(), o = tx("TokenSelector"), c = a1(n), m = a3(n), h = a5(n), x = lU(), p = lB(), v = lN(null === (e = (0, tz.C)()) || void 0 === e ? void 0 : e.id), [j, b] = (0, f.useState)(!1), N = er.useRawAmount(), y = er.useSetRawAmount(), C = (0, e7.b)(c.data, null !== (l = null == n ? void 0 : n.decimals) && void 0 !== l ? l : 18), k = (null === (t = (0, tz.C)()) || void 0 === t ? void 0 : t.family) === ey.c3.optimism;
                    return (0, f.useEffect)(() => {
                        j && p && (null == n ? void 0 : n.address) && v && (0, en.E)(null == n ? void 0 : n.address, v) && y((0, e7.b)(c.data - x.extraAmount, n.decimals))
                    }, [p, j, x.extraAmount, v, null == n ? void 0 : n.address, c.data]), (0, u.jsxs)("div", {
                        className: "flex flex-col gap-2.5 relative rounded-2xl px-4 py-5 border border-transparent focus-within:border-border transition-colors bg-muted ",
                        children: [(0, u.jsxs)("div", {
                            className: "flex gap-2 items-center",
                            children: [(0, u.jsx)("input", {
                                value: N,
                                onChange: e => {
                                    y(e.target.value.replaceAll(",", ".")), b(!1)
                                },
                                type: "text",
                                inputMode: "decimal",
                                minLength: 1,
                                maxLength: 79,
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                pattern: "^[0-9]*[.,]?[0-9]*$",
                                name: "amount",
                                id: "amount",
                                className: "block w-full shadow-none bg-transparent focus:outline-none text-4xl leading-none placeholder:text-muted-foreground text-foreground",
                                placeholder: "0"
                            }), d.isFetching || !n ? (0, u.jsxs)("div", {
                                className: "flex shrink-0 relative gap-1 rounded-full py-2 pl-3 pr-3 items-center font-button transition-all text-foreground bg-card",
                                children: [(0, u.jsx)(av, {
                                    className: "h-[25px] w-[25px] rounded-full"
                                }), (0, u.jsx)(av, {
                                    className: "h-[14px] w-[50px]"
                                })]
                            }) : (null === (a = d.data) || void 0 === a ? void 0 : a.length) !== 1 || k ? (0, u.jsxs)("button", {
                                onClick: () => o.open(),
                                className: "flex shrink-0 relative gap-1 rounded-full py-2 pl-3 pr-3 items-center font-button transition-all hover:scale-105 text-foreground bg-card",
                                children: [(0, u.jsx)(tg, {
                                    token: n,
                                    className: "h-[20px] w-[20px] shrink-0 !text-[6px]"
                                }), null == n ? void 0 : n.symbol, (0, u.jsx)(eJ.KC, {
                                    className: "w-3.5 h-3.5 fill-foreground"
                                }), (m || h) && (0, u.jsx)(eJ.az, {
                                    className: "absolute top-4 left-6 w-3 h-3"
                                })]
                            }) : (0, u.jsxs)("div", {
                                className: "flex shrink-0 relative gap-1 rounded-full py-2 pl-3 pr-4 items-center font-button transition-all text-foreground bg-card",
                                children: [(0, u.jsx)(tg, {
                                    token: n,
                                    className: "h-[20px] w-[20px] shrink-0 !text-[6px]"
                                }), null == n ? void 0 : n.symbol]
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, u.jsx)("div", {
                                className: "flex items-center",
                                children: r.fiat && (0, u.jsx)("span", {
                                    className: "text-muted-foreground text-xs leading-none",
                                    children: r.fiat.formatted
                                })
                            }), i.address && (0, u.jsxs)("div", {
                                className: "flex flex-wrap items-start justify-end gap-2",
                                children: [c.isLoading ? (0, u.jsx)(av, {
                                    className: "h-4 w-[88px] bg-muted-foreground"
                                }) : (0, u.jsxs)("div", {
                                    className: "flex items-start gap-2",
                                    children: [(0, u.jsx)("span", {
                                        className: "text-muted-foreground text-xs text-right leading-none",
                                        children: s("availableBalance", {
                                            amount: e6(parseFloat(C)),
                                            symbol: null == n ? void 0 : n.symbol
                                        })
                                    }), !eu(n) && (0, u.jsx)("button", {
                                        onClick: () => {
                                            b(!0), p && (null == n ? void 0 : n.address) && v && (0, en.E)(null == n ? void 0 : n.address, v) ? y((0, e7.b)(c.data - x.extraAmount, n.decimals)) : y(C)
                                        },
                                        className: "h-5 text-[10px] font-button bg-card rounded-full px-2 py-1 -mt-1 leading-none text-muted-foreground transition-all hover:scale-105",
                                        children: s("buttons.max")
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "-mt-1",
                                    children: (0, u.jsx)(nZ, {})
                                })]
                            })]
                        })]
                    })
                },
                nW = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = (0, tQ.h)();
                    return er.useFiatOnramp() ? (0, u.jsx)(nO, {}) : (0, u.jsxs)("div", {
                        className: "flex flex-col gap-3 px-4 py-4",
                        children: [(0, u.jsxs)("div", {
                            className: "flex flex-col gap-1.5",
                            children: [(0, u.jsx)(nC, {}), (0, u.jsx)(nG, {})]
                        }), (0, u.jsx)(nk, {
                            children: (0, u.jsx)(n_, {}, "route-preview")
                        }), (0, u.jsx)("div", {
                            className: "flex flex-col pb-0.5",
                            children: (0, u.jsx)(nT, {})
                        }), t && (0, u.jsx)("div", {
                            className: "flex items-center justify-center p-3 h-auto w-full absolute bottom-0 left-0",
                            children: (0, u.jsxs)("a", {
                                href: "https://superbridge.app/rollies",
                                target: "_blank",
                                className: "flex items-center justify-center gap-1 rounded-full bg-muted pl-1.5 pr-2.5 py-0.5 hover:scale-105 transition-all",
                                children: [(0, u.jsx)(eJ.ve, {
                                    className: "w-5 h-auto"
                                }), (0, u.jsx)("span", {
                                    className: "text-[10px] leading-none",
                                    children: e("poweredBy", {
                                        name: "Superbridge"
                                    })
                                })]
                            })
                        })]
                    })
                },
                nY = () => {
                    var e, t, a;
                    let l = (0, ex.qD)(),
                        s = null !== (a = null === (e = l.links.find(e => ["discord", "twitter", "x.com"].find(t => e.url.toLowerCase().includes(t)))) || void 0 === e ? void 0 : e.url) && void 0 !== a ? a : null == l ? void 0 : null === (t = l.links[0]) || void 0 === t ? void 0 : t.url;
                    return (0, u.jsxs)("div", {
                        className: "min-h-[480px] p-10 flex flex-col gap-2 items-center justify-center",
                        children: [(0, u.jsx)("div", {
                            className: "animate-wiggle-waggle  drop-shadow-lg mb-4",
                            children: (0, u.jsx)(eJ.az, {
                                className: "h-16 w-16 shrink-0"
                            })
                        }), (0, u.jsxs)("h1", {
                            className: "text-2xl font-heading text-center max-w-[320px]",
                            children: [l.head.title, " no longer available"]
                        }), (0, u.jsxs)("p", {
                            className: "text-center text-sm text-muted-foreground",
                            children: ["Please contact the", " ", (0, u.jsxs)("a", {
                                className: "underline",
                                href: s,
                                children: [l.head.title, " team"]
                            }), " ", "for support or more information."]
                        })]
                    })
                };
            var nV = a(99173);
            let n$ = () => (0, u.jsx)("span", {
                    className: "text-xs shadow-xs font-heading inline-flex items-center pointer-events-none leading-none tracking-tighter rounded-full px-4 h-8 bg-card text-foreground",
                    children: "Testnet"
                }),
                nU = () => {
                    let {
                        t: e
                    } = (0, g.$G)(), t = er.useSetDisplayTransactions(), a = er.useSetFiatOnramp(), l = tx("Settings"), s = tx("Legal"), {
                        inProgressCount: i,
                        actionRequiredCount: n
                    } = eN(), d = (0, I.SZ)(e => e.superbridgeTestnets), r = (0, S.L4)(), o = as(), c = er.useFiatOnramp(), m = !!(0, L.C)().find(e => e.testnet), h = (0, tQ.h)(), p = (0, w.m)(), v = (0, ex.sv)(), {
                        disconnect: f
                    } = (0, nV.q)();
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsxs)("div", {
                            className: (0, x.Z)("flex items-center justify-between gap-8 w-full", h ? "pt-4 -mb-2 px-4" : "px-0.5"),
                            children: [v ? (0, u.jsxs)("div", {
                                className: "flex gap-1 items-center",
                                children: [(0, u.jsx)("button", {
                                    onClick: () => a(!1),
                                    className: (0, x.Z)("text-sm font-button overflow-hidden relative after:absolute after:content-[''] after:bg-card after:inset-0 after:opacity-10 px-4 h-8 rounded-full hover:scale-105 origin-bottom transition-all after:transition-all", !c && "after:opacity-100 shadow-xs"),
                                    children: (0, u.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Bridge"
                                    })
                                }), (0, u.jsx)("button", {
                                    onClick: () => a(!0),
                                    className: (0, x.Z)("text-sm font-button overflow-hidden relative after:absolute after:content-[''] after:bg-card after:inset-0 after:opacity-10 px-4 h-8 rounded-full hover:scale-105 origin-bottom transition-all after:transition-all", c && "after:opacity-100 shadow-xs"),
                                    children: (0, u.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Buy"
                                    })
                                })]
                            }) : r && d || !o && m ? (0, u.jsx)("div", {
                                className: "pl-0.5 mr-auto",
                                children: (0, u.jsx)(n$, {})
                            }) : (0, u.jsx)("div", {}), (0, u.jsxs)("div", {
                                className: "flex gap-1.5 items-center",
                                children: [(0, u.jsxs)("button", {
                                    className: (0, x.Z)(i > 0 ? "bg-card pr-3 pl-2" : "bg-card", h ? "bg-muted" : "bg-card", "group hover:scale-105 transition-all flex items-center gap-1.5 text-foreground rounded-full transition-all rounded-full py-1.5 px-2 bg-card font-button"),
                                    onClick: () => t(!0),
                                    children: [(0, u.jsx)(eJ.zG, {
                                        className: (0, x.Z)(i > 0 ? "fill-foreground" : "fill-muted-foreground", "group-hover:fill-foreground group-hover:animate-wiggle-waggle transition-all h-5 w-5 shrink-0")
                                    }), i > 0 && (0, u.jsxs)("div", {
                                        className: "flex items-center gap-1.5 pr-1.5 pl-2.5 h-5 rounded-full bg-primary",
                                        children: [(0, u.jsx)("span", {
                                            className: "text-[11px] leading-none text-primary-foreground",
                                            children: n > 0 ? "Action needed" : i
                                        }), (0, u.jsx)(eJ.vM, {
                                            className: "w-2.5 h-2.5 text-primary-foreground"
                                        })]
                                    })]
                                }), (0, u.jsx)("button", {
                                    className: (0, x.Z)("group hover:scale-105 transition-all flex items-center justify-center py-1.5 px-2  rounded-full", h ? "bg-muted" : "bg-card"),
                                    onClick: () => l.open(),
                                    children: (0, u.jsx)(eJ.iC, {
                                        className: "fill-muted-foreground group-hover:fill-foreground transition-all group-hover:rotate-[15deg] group-hover:scale-105 h-5 w-5 shrink-0"
                                    })
                                }), h && (0, u.jsxs)(t7, {
                                    children: [(0, u.jsx)(t6, {
                                        className: "bg-muted group hover:scale-105 transition-all flex items-center justify-center py-1.5 px-2 rounded-full outline-none focus:outline-none focus-visible:ring-transparent focus:ring-transparent ring-transparent",
                                        children: (0, u.jsx)(eJ.a9, {
                                            className: "fill-muted-foreground group-hover:fill-foreground transition-all group-hover:scale-105 h-5 w-5 shrink-0"
                                        })
                                    }), (0, u.jsxs)(ae, {
                                        children: [p.address ? (0, u.jsxs)(at, {
                                            className: "flex justify-between items-center w-full",
                                            onClick: () => f(),
                                            children: [(0, u.jsx)("span", {
                                                className: "text-sm",
                                                children: "Disconnect"
                                            }), (0, u.jsxs)("span", {
                                                className: "bg-muted rounded-full text-xs text-muted-foreground px-2 py-1 h-6",
                                                children: [p.address.slice(0, 4), "…", p.address.slice(p.address.length - 4)]
                                            })]
                                        }) : (0, u.jsx)(at, {
                                            children: (0, u.jsx)(tX.NL, {})
                                        }), (0, u.jsxs)("div", {
                                            className: "bg-muted p-3 rounded-lg flex flex-col gap-3 mt-3 z-50",
                                            children: [(0, u.jsxs)("a", {
                                                href: "https://superbridge.app",
                                                className: " text-xs  leading-none w-full flex gap-2 items-center",
                                                children: [(0, u.jsx)(eJ.ve, {
                                                    className: "h-4 w-auto fill-foreground"
                                                }), (0, u.jsx)("span", {
                                                    children: e("poweredBy", {
                                                        name: "Superbridge"
                                                    })
                                                })]
                                            }), (0, u.jsxs)(t1(), {
                                                href: "https://help.superbridge.app",
                                                className: " text-xs  leading-none w-full flex gap-2 items-center",
                                                children: [(0, u.jsx)(eJ.cF, {
                                                    className: "mx-0.5 h-3 w-3 fill-muted-foreground"
                                                }), (0, u.jsx)("span", {
                                                    children: e("header.supportAndFaqs")
                                                })]
                                            }), (0, u.jsxs)("button", {
                                                className: " text-xs  leading-none w-full flex gap-2 items-center",
                                                onClick: () => s.open(),
                                                children: [(0, u.jsx)(eJ.cF, {
                                                    className: "mx-0.5 h-3 w-3 w-auto fill-muted-foreground"
                                                }), (0, u.jsx)("span", {
                                                    children: e("header.legal")
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                };
            var nq = a(9171);
            let nK = f.createContext(null);

            function nX() {
                let e = f.useContext(nK);
                if (!e) throw Error("useCarousel must be used within a <Carousel />");
                return e
            }
            let nQ = f.forwardRef((e, t) => {
                let {
                    orientation: a = "horizontal",
                    opts: l,
                    setApi: s,
                    plugins: i,
                    className: n,
                    children: d,
                    ...r
                } = e, [o, c] = (0, nq.Z)({
                    ...l,
                    axis: "horizontal" === a ? "x" : "y"
                }, i), [m, h] = f.useState(!1), [x, p] = f.useState(!1), v = f.useCallback(e => {
                    e && (h(e.canScrollPrev()), p(e.canScrollNext()))
                }, []), g = f.useCallback(() => {
                    null == c || c.scrollPrev()
                }, [c]), j = f.useCallback(() => {
                    null == c || c.scrollNext()
                }, [c]), b = f.useCallback(e => {
                    "ArrowLeft" === e.key ? (e.preventDefault(), g()) : "ArrowRight" === e.key && (e.preventDefault(), j())
                }, [g, j]);
                return f.useEffect(() => {
                    c && s && s(c)
                }, [c, s]), f.useEffect(() => {
                    if (c) return v(c), c.on("reInit", v), c.on("select", v), () => {
                        null == c || c.off("select", v)
                    }
                }, [c, v]), (0, u.jsx)(nK.Provider, {
                    value: {
                        carouselRef: o,
                        api: c,
                        opts: l,
                        orientation: a || ((null == l ? void 0 : l.axis) === "y" ? "vertical" : "horizontal"),
                        scrollPrev: g,
                        scrollNext: j,
                        canScrollPrev: m,
                        canScrollNext: x
                    },
                    children: (0, u.jsx)("div", {
                        ref: t,
                        onKeyDownCapture: b,
                        className: (0, t8.cn)("relative", n),
                        role: "region",
                        "aria-roledescription": "carousel",
                        ...r,
                        children: d
                    })
                })
            });
            nQ.displayName = "Carousel";
            let nJ = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e, {
                    carouselRef: s,
                    orientation: i
                } = nX();
                return (0, u.jsx)("div", {
                    ref: s,
                    className: "overflow-hidden",
                    children: (0, u.jsx)("div", {
                        ref: t,
                        className: (0, t8.cn)("flex", "horizontal" === i ? "-ml-4" : "-mt-4 flex-col", a),
                        ...l
                    })
                })
            });
            nJ.displayName = "CarouselContent";
            let n0 = f.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e, {
                    orientation: s
                } = nX();
                return (0, u.jsx)("div", {
                    ref: t,
                    role: "group",
                    "aria-roledescription": "slide",
                    className: (0, t8.cn)("min-w-0 shrink-0 grow-0 basis-full", "horizontal" === s ? "pl-4" : "pt-4", a),
                    ...l
                })
            });
            n0.displayName = "CarouselItem";
            let n1 = f.forwardRef((e, t) => {
                let {
                    className: a,
                    variant: l = "outline",
                    size: s = "icon",
                    ...i
                } = e, {
                    orientation: n,
                    scrollPrev: d,
                    canScrollPrev: r
                } = nX();
                return (0, u.jsxs)(ax.z, {
                    ref: t,
                    variant: l,
                    size: s,
                    className: (0, t8.cn)("absolute  h-8 w-8 rounded-lg bg-card border-none", "horizontal" === n ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", a),
                    disabled: !r,
                    onClick: d,
                    ...i,
                    children: [(0, u.jsx)(eJ.W3, {
                        className: "h-4 w-4 fill-foreground"
                    }), (0, u.jsx)("span", {
                        className: "sr-only",
                        children: "Previous slide"
                    })]
                })
            });
            n1.displayName = "CarouselPrevious";
            let n2 = f.forwardRef((e, t) => {
                let {
                    className: a,
                    variant: l = "outline",
                    size: s = "icon",
                    ...i
                } = e, {
                    orientation: n,
                    scrollNext: d,
                    canScrollNext: r
                } = nX();
                return (0, u.jsxs)(ax.z, {
                    ref: t,
                    variant: l,
                    size: s,
                    className: (0, t8.cn)("absolute h-8 w-8 rounded-lg bg-card border-none", "horizontal" === n ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", a),
                    disabled: !r,
                    onClick: d,
                    ...i,
                    children: [(0, u.jsx)(eJ.Ri, {
                        className: "h-4 w-4 fill-foreground"
                    }), (0, u.jsx)("span", {
                        className: "sr-only",
                        children: "Next slide"
                    })]
                })
            });

            function n3() {
                return (0, u.jsx)(u.Fragment, {
                    children: (0, u.jsxs)("div", {
                        className: "max-w-[1000px] mx-auto",
                        children: [(0, u.jsxs)("section", {
                            className: "mx-auto w-full max-w-[720px] mb-12 relative",
                            children: [(0, u.jsxs)("div", {
                                className: "flex justify-center items-center md:absolute md:inset-0",
                                children: [(0, u.jsx)("div", {
                                    className: "animate-float delay-0 mr-1 md:absolute top-0 left-0 ",
                                    children: (0, u.jsx)(eJ.S5, {
                                        className: "rotate-[-18deg] drop-shadow-sm h-10 md:h-12 w-auto hover:scale-125 transition-all"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "animate-float delay-300 -mx-1 md:absolute bottom-0 right-0 ",
                                    children: (0, u.jsx)(eJ.Wn, {
                                        className: "rotate-[20deg] drop-shadow-sm hover:scale-125 transition-all"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "animate-float delay-500 -mx-1 md:absolute top-0 right-0 ",
                                    children: (0, u.jsx)(eJ.BL, {
                                        className: "rotate-[18deg] drop-shadow-sm hover:scale-125 transition-all"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "animate-float delay-1000 -mx-1 md:absolute bottom-0 left-0 ",
                                    children: (0, u.jsx)(eJ.gn, {
                                        className: "rotate-[-24deg] drop-shadow-sm hover:scale-125 transition-all"
                                    })
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-3 md:gap-6 px-0 py-6 md:p-12 pb-0 md:pb-0",
                                children: [(0, u.jsx)("h2", {
                                    className: "text-3xl md:text-5xl text-center font-heading leading-tight md:leading-tight",
                                    children: "Superbridge for your Hyperlane Token"
                                }), (0, u.jsx)("p", {
                                    className: "md:text-lg font-body  text-center text-pretty",
                                    children: "Get the same smooth UX that users love, for your Hyperlane Warp Route enabled tokens. Fully white-labelled. From first timers to whales, people love Superbridge!"
                                }), (0, u.jsx)(ax.z, {
                                    size: "lg",
                                    className: "mx-auto px-6 mt-4 relative z-50 ",
                                    asChild: !0,
                                    children: (0, u.jsx)(t1(), {
                                        href: "https://dashboard.superbridge.app/register",
                                        children: "Get Superbridge"
                                    })
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, u.jsxs)("section", {
                                className: "flex flex-col gap-8 rounded-3xl bg-card p-6 md:p-10",
                                children: [(0, u.jsx)("h3", {
                                    className: "text-lg font-heading text-center leading-none",
                                    children: "Super teams use Superbridge"
                                }), (0, u.jsxs)("div", {
                                    className: "flex flex-wrap gap-6 md:gap-10 items-center justify-center opacity-80",
                                    children: [(0, u.jsx)(eJ.pA, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    }), (0, u.jsx)(eJ.Pc, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    }), (0, u.jsx)(eJ.Rc, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    }), (0, u.jsx)(eJ.cV, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    }), (0, u.jsx)(eJ.Uz, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    })]
                                })]
                            }), (0, u.jsxs)("section", {
                                className: "rounded-3xl backdrop-blur-md bg-card flex flex-col md:flex-row gap-6 md:gap-12",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 w-full p-6 md:p-10",
                                    children: [(0, u.jsx)("h3", {
                                        className: "text-2xl md:text-4xl font-heading leading-tight md:leading-tight",
                                        children: "Launch your own Superbridge in minutes"
                                    }), (0, u.jsx)("p", {
                                        className: "font-heading text-muted-foreground leading-snug",
                                        children: "Simply import Hyperlane Warp Routes and begin your expansion."
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "w-full pl-6 md:pt-10 md:pl-0",
                                    children: (0, u.jsx)(sr(), {
                                        src: "/img/hyperlane/routes.png",
                                        alt: "Hyperlane Warp Routes as shown in Superbridge Admin",
                                        width: 420,
                                        height: 288,
                                        sizes: "100vw",
                                        className: "w-full min-w-full h-auto max-w-[512px]"
                                    })
                                })]
                            }), (0, u.jsxs)("section", {
                                className: "rounded-3xl backdrop-blur-md bg-card pt-12 pb-0 overflow-hidden relative flex flex-col gap-4 items-center",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 px-6 md:px-10",
                                    children: [(0, u.jsx)("h3", {
                                        className: "text-2xl md:text-4xl font-heading leading-tight md:leading-tight text-center max-w-[640px]",
                                        children: "Customize your bridge with a super clean custom theme"
                                    }), (0, u.jsxs)("ul", {
                                        className: "flex flex-wrap gap-2 items-center justify-center px-8",
                                        children: [(0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.mp, {
                                                className: "h-4 w-auto"
                                            }), "Logo"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.oL, {
                                                className: "h-4 w-auto"
                                            }), "Fonts"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.EY, {
                                                className: "h-4 w-auto"
                                            }), "Colors"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.bn, {
                                                className: "h-4 w-auto"
                                            }), "Background"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.yu, {
                                                className: "h-4 w-auto"
                                            }), "Darkmode"]
                                        })]
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "bg-card h-12 absolute z-10 w-full left-0 -bottom-8 mix-blend-multiply blur-xl"
                                }), (0, u.jsxs)(nQ, {
                                    opts: {
                                        align: "center",
                                        loop: !0
                                    },
                                    className: "w-full -mb-0.5",
                                    children: [(0, u.jsxs)(nJ, {
                                        children: [(0, u.jsx)(n0, {
                                            className: "basis-10/12 md:basis-3/5 cursor-grab active:cursor-grabbing",
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(sr(), {
                                                    src: "/img/hyperlane/flow.png",
                                                    alt: "Fully White Labelled Flow CBBTC Hyperlane Bridge powered by Superbridge",
                                                    width: 958,
                                                    height: 706,
                                                    sizes: "100vw",
                                                    className: "w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl border-t border-l border-r border-muted"
                                                })
                                            })
                                        }, "csl2"), (0, u.jsx)(n0, {
                                            className: "basis-10/12 md:basis-3/5 cursor-grab active:cursor-grabbing",
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(sr(), {
                                                    src: "/img/hyperlane/renzo.png",
                                                    alt: "Fully White Labelled Renzo ezETH Hyperlane Bridge powered by Superbridge",
                                                    width: 958,
                                                    height: 706,
                                                    sizes: "100vw",
                                                    className: "w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl border-t border-l border-r border-muted"
                                                })
                                            })
                                        }, "csl1"), (0, u.jsx)(n0, {
                                            className: "basis-10/12 md:basis-3/5 cursor-grab active:cursor-grabbing",
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(sr(), {
                                                    src: "/img/hyperlane/molten.png",
                                                    alt: "Fully White Labelled Molten Hyperlane Bridge powered by Superbridge",
                                                    width: 958,
                                                    height: 706,
                                                    sizes: "100vw",
                                                    className: "w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl border-t border-l border-r border-muted"
                                                })
                                            })
                                        }, "csl3"), (0, u.jsx)(n0, {
                                            className: "basis-10/12 md:basis-3/5 cursor-grab active:cursor-grabbing",
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(sr(), {
                                                    src: "/img/hyperlane/elixir.png",
                                                    alt: "Fully White Labelled Elixir deUSD Hyperlane Bridge powered by Superbridge",
                                                    width: 958,
                                                    height: 706,
                                                    sizes: "100vw",
                                                    className: "w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl border-t border-l border-r border-muted"
                                                })
                                            })
                                        }, "csl4")]
                                    }), (0, u.jsx)(n1, {
                                        className: "left-4 bg-card"
                                    }), (0, u.jsx)(n2, {
                                        className: "right-4 bg-card"
                                    })]
                                })]
                            }), (0, u.jsxs)("section", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [(0, u.jsxs)("div", {
                                    className: "rounded-3xl backdrop-blur-md bg-card p-6 md:p-10 pb-0 md:pb-0 overflow-hidden flex flex-col gap-2 justify-between items-start",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-xl md:text-3xl font-heading leading-tight md:leading-tight text-pretty",
                                            children: "Embedable widget"
                                        }), (0, u.jsx)("p", {
                                            className: "font-heading  text-muted-foreground leading-snug text-pretty",
                                            children: "Drop Superbridge directly into your app."
                                        })]
                                    }), (0, u.jsx)(sr(), {
                                        src: "/img/hyperlane/widget.png",
                                        alt: "Embedable Superbridge Widget powered by Hyperlane",
                                        width: 428,
                                        height: 404,
                                        sizes: "100vw",
                                        className: "w-full h-auto mt-6 translate-y-[12%]"
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "rounded-3xl backdrop-blur-md p-8 relative overflow-hidden bg-[#F50FD6] flex flex-col gap-8 justify-between",
                                    children: [(0, u.jsxs)("div", {
                                        className: "relative z-10 h-full aspect-[4/3]",
                                        children: [(0, u.jsx)("div", {
                                            className: "animate-float delay-0 absolute w-1/4 h-auto left-1/2 top-1/2 ",
                                            children: (0, u.jsx)(eJ.VO, {
                                                className: "rotate-[15deg] drop-shadow-sm -translate-x-1/2 -translate-y-1/2"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-200 absolute w-1/5 h-auto left-3 top-2 ",
                                            children: (0, u.jsx)(eJ.FR, {
                                                className: "rotate-[-28deg] drop-shadow-sm"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-300 absolute w-1/5 h-auto right-3 top-4 ",
                                            children: (0, u.jsx)(eJ.d1, {
                                                className: "rotate-[28deg] drop-shadow-sm"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-500 absolute w-1/5 h-auto left-8 bottom-2 ",
                                            children: (0, u.jsx)(eJ.rE, {
                                                className: "drop-shadow-sm"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-700 absolute w-1/5 h-auto right-8 bottom-2",
                                            children: (0, u.jsx)(eJ.qf, {
                                                className: "rotate-[15deg] drop-shadow-sm"
                                            })
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "relative z-10 flex flex-col gap-2",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-xl md:text-3xl font-heading leading-tight md:leading-tight text-pretty",
                                            children: "More ways to make it yours"
                                        }), (0, u.jsx)("p", {
                                            className: "font-heading  leading-snug text-pretty",
                                            children: "Custom domains, legal, links, metadata & more…"
                                        })]
                                    }), (0, u.jsx)("div", {
                                        className: "absolute -inset-32 bg-[url('/img/hyperlane/grid.svg')] bg-[length:32px_32px] opacity-15 rotate-[15deg] animate-sb-grid"
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "rounded-3xl backdrop-blur-md bg-card p-8 bg-gradient-to-b from-[#A882FD] to-[#D098FF]",
                                    children: (0, u.jsxs)("ul", {
                                        children: [(0, u.jsx)("li", {
                                            className: "py-4 border-b border-b-2 border-foreground group relative",
                                            children: (0, u.jsxs)("a", {
                                                href: "https://dune.com/alexbh/superbridge",
                                                target: "_blank",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "text-4xl md:text-5xl font-heading leading-snug md:leading-snug ",
                                                    children: "$2.3 Billion+"
                                                }), (0, u.jsx)("p", {
                                                    className: "opacity-80",
                                                    children: "Total value bridged"
                                                }), (0, u.jsx)(eJ.cF, {
                                                    className: "w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all"
                                                })]
                                            })
                                        }), (0, u.jsx)("li", {
                                            className: "py-4 border-b border-b-2 border-foreground group relative",
                                            children: (0, u.jsxs)("a", {
                                                href: "https://dune.com/alexbh/superbridge",
                                                target: "_blank",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "text-4xl md:text-5xl font-heading leading-snug md:leading-snug ",
                                                    children: "170k+"
                                                }), (0, u.jsx)("p", {
                                                    className: "opacity-80",
                                                    children: "Bridge actions "
                                                }), (0, u.jsx)(eJ.cF, {
                                                    className: "w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all"
                                                })]
                                            })
                                        }), (0, u.jsx)("li", {
                                            className: "py-4 group relative",
                                            children: (0, u.jsxs)("a", {
                                                href: "https://dune.com/alexbh/superbridge",
                                                target: "_blank",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "text-4xl md:text-5xl font-heading leading-snug md:leading-snug ",
                                                    children: "150+"
                                                }), (0, u.jsx)("p", {
                                                    className: "opacity-80",
                                                    children: "Supported blockchains"
                                                }), (0, u.jsx)(eJ.cF, {
                                                    className: "w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, u.jsxs)("div", {
                                    className: "rounded-3xl backdrop-blur-md bg-card p-8 flex flex-col justify-between",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex flex-col gap-2 min-h-[220px]",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-3xl md:text-4xl font-heading leading-tight md:leading-tight text-pretty",
                                            children: "Get Superbridge for Hyperlane"
                                        }), (0, u.jsx)("p", {
                                            className: "text-muted-foreground leading-snug",
                                            children: "Starting from $500/month"
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-4",
                                        children: [(0, u.jsx)(ax.z, {
                                            size: "lg",
                                            asChild: !0,
                                            children: (0, u.jsx)(t1(), {
                                                href: "https://dashboard.superbridge.app/register",
                                                children: "Get Superbridge"
                                            })
                                        }), (0, u.jsx)(ax.z, {
                                            size: "lg",
                                            variant: "secondary",
                                            asChild: !0,
                                            children: (0, u.jsx)(t1(), {
                                                href: "https://dashboard.superbridge.app/login",
                                                children: "Login"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function n5() {
                return (0, u.jsx)(u.Fragment, {
                    children: (0, u.jsxs)("div", {
                        className: "max-w-[1000px] mx-auto",
                        children: [(0, u.jsxs)("section", {
                            className: "mx-auto w-full max-w-[720px] mb-12 relative",
                            children: [(0, u.jsxs)("div", {
                                className: "flex justify-center items-center md:absolute md:inset-0",
                                children: [(0, u.jsx)("div", {
                                    className: "animate-float delay-0 mr-1 md:absolute top-0 left-0 ",
                                    children: (0, u.jsx)(eJ.Rw, {
                                        className: "rotate-[-18deg] drop-shadow-sm h-10 md:h-12 w-auto hover:scale-125 transition-all"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "animate-float delay-300 -mx-1 md:absolute bottom-0 right-0 ",
                                    children: (0, u.jsx)(eJ.Wn, {
                                        className: "rotate-[20deg] drop-shadow-sm hover:scale-125 transition-all"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "animate-float delay-500 -mx-1 md:absolute top-0 right-0 ",
                                    children: (0, u.jsx)(eJ.BL, {
                                        className: "rotate-[18deg] drop-shadow-sm hover:scale-125 transition-all"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "animate-float delay-1000 -mx-1 md:absolute bottom-0 left-0 ",
                                    children: (0, u.jsx)(eJ.gn, {
                                        className: "rotate-[-24deg] drop-shadow-sm hover:scale-125 transition-all"
                                    })
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col gap-3 md:gap-6 px-0 py-6 md:p-12 pb-0 md:pb-0",
                                children: [(0, u.jsx)("h2", {
                                    className: "text-3xl md:text-5xl text-center font-heading  leading-tight md:leading-tight",
                                    children: "Superbridge for your Layer Zero OFT"
                                }), (0, u.jsx)("p", {
                                    className: "md:text-lg font-body  text-center text-pretty",
                                    children: "Get the same smooth UX that users love, for your Layer Zero OFT tokens. Fully white-labelled. From first timers to whales, people love Superbridge!"
                                }), (0, u.jsx)(ax.z, {
                                    size: "lg",
                                    className: "mx-auto px-6 mt-4 relative z-50 ",
                                    asChild: !0,
                                    children: (0, u.jsx)(t1(), {
                                        href: "https://dashboard.superbridge.app/register",
                                        children: "Get Superbridge"
                                    })
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, u.jsxs)("section", {
                                className: "flex flex-col gap-8 rounded-3xl bg-card p-6 md:p-10",
                                children: [(0, u.jsx)("h3", {
                                    className: "text-lg font-heading text-center leading-none",
                                    children: "Super teams use Superbridge"
                                }), (0, u.jsxs)("div", {
                                    className: "flex flex-wrap gap-6 md:gap-10 items-center justify-center opacity-80",
                                    children: [(0, u.jsx)(eJ.Tz, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    }), (0, u.jsx)(eJ.nJ, {
                                        className: "w-auto max-h-6 md:max-h-10"
                                    }), (0, u.jsx)(eJ.jt, {
                                        className: "w-auto max-h-7 md:max-h-11"
                                    })]
                                })]
                            }), (0, u.jsxs)("section", {
                                className: "rounded-3xl backdrop-blur-md bg-card flex flex-col md:flex-row gap-6 md:gap-12",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 w-full p-6 md:p-10",
                                    children: [(0, u.jsx)("h3", {
                                        className: "text-2xl md:text-4xl font-heading leading-tight md:leading-tight",
                                        children: "Launch your own Superbridge in minutes"
                                    }), (0, u.jsx)("p", {
                                        className: "font-heading text-muted-foreground leading-snug",
                                        children: "Simply import your Layer Zero OFT tokens to start Omnichain bridging."
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "w-full pl-6 md:pt-10 md:pl-0",
                                    children: (0, u.jsx)(sr(), {
                                        src: "/img/lz/routes.png",
                                        alt: "Layer Zero OFTs as shown in Superbridge Admin",
                                        width: 0,
                                        height: 0,
                                        sizes: "100vw",
                                        className: "w-full min-w-full h-auto"
                                    })
                                })]
                            }), (0, u.jsxs)("section", {
                                className: "rounded-3xl backdrop-blur-md bg-card pt-12 pb-0 overflow-hidden relative flex flex-col gap-4 items-center",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex flex-col gap-4 px-6 md:px-10",
                                    children: [(0, u.jsx)("h3", {
                                        className: "text-2xl md:text-4xl font-heading leading-tight md:leading-tight text-center max-w-[640px]",
                                        children: "Customize your bridge with a super clean custom theme"
                                    }), (0, u.jsxs)("ul", {
                                        className: "flex flex-wrap gap-2 items-center justify-center px-8",
                                        children: [(0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.mp, {
                                                className: "h-4 w-auto"
                                            }), "Logo"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.oL, {
                                                className: "h-4 w-auto"
                                            }), "Fonts"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.EY, {
                                                className: "h-4 w-auto"
                                            }), "Colors"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.bn, {
                                                className: "h-4 w-auto"
                                            }), "Background"]
                                        }), (0, u.jsxs)("li", {
                                            className: "flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm",
                                            children: [(0, u.jsx)(eJ.yu, {
                                                className: "h-4 w-auto"
                                            }), "Darkmode"]
                                        })]
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "bg-card h-12 absolute z-10 w-full left-0 -bottom-8 mix-blend-multiply blur-xl"
                                }), (0, u.jsxs)(nQ, {
                                    opts: {
                                        align: "center",
                                        loop: !0,
                                        containScroll: !1
                                    },
                                    className: "w-full -mb-0.5",
                                    children: [(0, u.jsxs)(nJ, {
                                        children: [(0, u.jsx)(n0, {
                                            className: "basis-10/12 md:basis-3/5 cursor-grab active:cursor-grabbing",
                                            children: (0, u.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, u.jsx)("div", {
                                                    className: "rotate-[32deg] absolute -right-2 top-2",
                                                    children: (0, u.jsx)("span", {
                                                        className: "animate-wiggle-waggle bg-gradient-to-l from-[#A882FD] to-[#D098FF] text-white font-heading text-[10px] md:text-xs shadow-sm px-3 py-1 inline-flex rounded-full font-bold",
                                                        children: "Widget"
                                                    })
                                                }), (0, u.jsx)(sr(), {
                                                    src: "/img/lz/ethena.png",
                                                    alt: "Ethena.fi app with white-labelled Layer Zero bridge powered by superbridge",
                                                    width: 958,
                                                    height: 706,
                                                    sizes: "100vw",
                                                    className: "w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl border-t border-l border-r border-muted"
                                                })]
                                            })
                                        }, "csl1"), (0, u.jsx)(n0, {
                                            className: "basis-10/12 md:basis-3/5 cursor-grab active:cursor-grabbing",
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(sr(), {
                                                    src: "/img/lz/wbtc.png",
                                                    alt: "Fully White Labelled WBTC Layer Zero Bridge powered by Superbridge",
                                                    width: 958,
                                                    height: 706,
                                                    sizes: "100vw",
                                                    className: "w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl border-t border-l border-r border-muted border-muted"
                                                })
                                            })
                                        }, "csl4")]
                                    }), (0, u.jsx)(n1, {
                                        className: "left-4 bg-card"
                                    }), (0, u.jsx)(n2, {
                                        className: "right-4 bg-card"
                                    })]
                                })]
                            }), (0, u.jsxs)("section", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [(0, u.jsxs)("div", {
                                    className: "rounded-3xl backdrop-blur-md bg-card p-6 md:p-10 pb-0 md:pb-0 overflow-hidden flex flex-col gap-2 justify-between items-start",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-xl md:text-3xl font-heading leading-tight md:leading-tight text-pretty",
                                            children: "Embedable widget"
                                        }), (0, u.jsx)("p", {
                                            className: "font-heading  text-muted-foreground leading-snug text-pretty",
                                            children: "Drop Superbridge directly into your app."
                                        })]
                                    }), (0, u.jsx)(sr(), {
                                        src: "/img/lz/widget.png",
                                        alt: "Embedable Superbridge Widget powered by Layer Zero",
                                        width: 428,
                                        height: 404,
                                        sizes: "100vw",
                                        className: "w-full h-auto mt-6 translate-y-[12%]"
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "rounded-3xl backdrop-blur-md p-8 relative overflow-hidden bg-[#F50FD6] flex flex-col gap-8 justify-between",
                                    children: [(0, u.jsxs)("div", {
                                        className: "relative z-10 h-full aspect-[4/3]",
                                        children: [(0, u.jsx)("div", {
                                            className: "animate-float delay-0 absolute w-1/4 h-auto left-1/2 top-1/2 ",
                                            children: (0, u.jsx)(eJ.VO, {
                                                className: "rotate-[15deg] drop-shadow-sm -translate-x-1/2 -translate-y-1/2"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-200 absolute w-1/5 h-auto left-3 top-2 ",
                                            children: (0, u.jsx)(eJ.FR, {
                                                className: "rotate-[-28deg] drop-shadow-sm"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-300 absolute w-1/5 h-auto right-3 top-4 ",
                                            children: (0, u.jsx)(eJ.d1, {
                                                className: "rotate-[28deg] drop-shadow-sm"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-500 absolute w-1/5 h-auto left-8 bottom-2 ",
                                            children: (0, u.jsx)(eJ.rE, {
                                                className: "drop-shadow-sm"
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "animate-float delay-700 absolute w-1/5 h-auto right-8 bottom-2",
                                            children: (0, u.jsx)(eJ.qf, {
                                                className: "rotate-[15deg] drop-shadow-sm"
                                            })
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "relative z-10 flex flex-col gap-2",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-xl md:text-3xl font-heading leading-tight md:leading-tight text-pretty",
                                            children: "More ways to make it yours"
                                        }), (0, u.jsx)("p", {
                                            className: "font-heading  leading-snug text-pretty",
                                            children: "Custom domains, legal, links, metadata & more…"
                                        })]
                                    }), (0, u.jsx)("div", {
                                        className: "absolute -inset-32 bg-[url('/img/lz/grid.svg')] bg-[length:32px_32px] opacity-15 rotate-[15deg] animate-sb-grid"
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "rounded-3xl backdrop-blur-md bg-card p-8 bg-gradient-to-b from-[#A882FD] to-[#D098FF]",
                                    children: (0, u.jsxs)("ul", {
                                        children: [(0, u.jsx)("li", {
                                            className: "py-4 border-b border-b-2 border-foreground group relative",
                                            children: (0, u.jsxs)("a", {
                                                href: "https://dune.com/alexbh/superbridge",
                                                target: "_blank",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "text-4xl md:text-5xl font-heading leading-snug md:leading-snug ",
                                                    children: "$2.3 Billion+"
                                                }), (0, u.jsx)("p", {
                                                    className: "opacity-80",
                                                    children: "Total value bridged"
                                                }), (0, u.jsx)(eJ.cF, {
                                                    className: "w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all"
                                                })]
                                            })
                                        }), (0, u.jsx)("li", {
                                            className: "py-4 border-b border-b-2 border-foreground group relative",
                                            children: (0, u.jsxs)("a", {
                                                href: "https://dune.com/alexbh/superbridge",
                                                target: "_blank",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "text-4xl md:text-5xl font-heading leading-snug md:leading-snug ",
                                                    children: "170k+"
                                                }), (0, u.jsx)("p", {
                                                    className: "opacity-80",
                                                    children: "Bridge actions "
                                                }), (0, u.jsx)(eJ.cF, {
                                                    className: "w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all"
                                                })]
                                            })
                                        }), (0, u.jsx)("li", {
                                            className: "py-4 group relative",
                                            children: (0, u.jsxs)("a", {
                                                href: "https://dune.com/alexbh/superbridge",
                                                target: "_blank",
                                                children: [(0, u.jsx)("h3", {
                                                    className: "text-4xl md:text-5xl font-heading leading-snug md:leading-snug ",
                                                    children: "150+"
                                                }), (0, u.jsx)("p", {
                                                    className: "opacity-80",
                                                    children: "Supported blockchains"
                                                }), (0, u.jsx)(eJ.cF, {
                                                    className: "w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, u.jsxs)("div", {
                                    className: "rounded-3xl backdrop-blur-md bg-card p-8 flex flex-col justify-between",
                                    children: [(0, u.jsxs)("div", {
                                        className: "flex flex-col gap-2 min-h-[220px]",
                                        children: [(0, u.jsx)("h3", {
                                            className: "text-3xl md:text-4xl font-heading leading-tight md:leading-tight text-pretty",
                                            children: "Get Superbridge for Layer Zero"
                                        }), (0, u.jsx)("p", {
                                            className: "text-muted-foreground leading-snug",
                                            children: "Starting from $1000/month"
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-4",
                                        children: [(0, u.jsx)(ax.z, {
                                            size: "lg",
                                            asChild: !0,
                                            children: (0, u.jsx)(t1(), {
                                                href: "https://dashboard.superbridge.app/register",
                                                children: "Get Superbridge"
                                            })
                                        }), (0, u.jsx)(ax.z, {
                                            size: "lg",
                                            variant: "secondary",
                                            asChild: !0,
                                            children: (0, u.jsx)(t1(), {
                                                href: "https://dashboard.superbridge.app/login",
                                                children: "Login"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function n4() {
                return (0, u.jsx)(u.Fragment, {
                    children: (0, u.jsxs)("footer", {
                        className: "grid grid-cols-2 md:grid-cols-8 gap-6 w-full py-12 max-w-[1000px] mx-auto text-xs leading-6 tracking-tight",
                        children: [(0, u.jsx)("div", {
                            className: "col-span-2 md:col-span-3",
                            children: (0, u.jsx)(eJ.ru, {
                                className: "w-full max-w-[180px] h-auto"
                            })
                        }), (0, u.jsxs)("div", {
                            children: [(0, u.jsx)("h4", {
                                className: "text-muted-foreground",
                                children: "App"
                            }), (0, u.jsx)("ul", {
                                children: (0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://superbridge.app",
                                        target: "_blank",
                                        children: "Superbridge"
                                    })
                                })
                            })]
                        }), (0, u.jsxs)("div", {
                            children: [(0, u.jsx)("h4", {
                                className: "text-muted-foreground",
                                children: "Solutions"
                            }), (0, u.jsxs)("ul", {
                                children: [(0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://about.superbridge.app/rollies",
                                        target: "_blank",
                                        children: "Rollups"
                                    })
                                }), (0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://lz.superbridge.app",
                                        target: "_blank",
                                        children: "Layer Zero"
                                    })
                                }), (0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://hyperlane.superbridge.app",
                                        target: "_blank",
                                        children: "Hyperlane"
                                    })
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            children: [(0, u.jsx)("h4", {
                                className: "text-muted-foreground",
                                children: "Resources"
                            }), (0, u.jsxs)("ul", {
                                children: [(0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://docs.superbridge.app",
                                        target: "_blank",
                                        children: "Docs"
                                    })
                                }), (0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://github.com/superbridgeapp",
                                        target: "_blank",
                                        children: "Github"
                                    })
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            children: [(0, u.jsx)("h4", {
                                className: "text-muted-foreground",
                                children: "Company"
                            }), (0, u.jsxs)("ul", {
                                children: [(0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://superbridge.app/terms",
                                        target: "_blank",
                                        children: "Terms"
                                    })
                                }), (0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://superbridge.app/privacy",
                                        target: "_blank",
                                        children: "Privacy"
                                    })
                                })]
                            })]
                        }), (0, u.jsxs)("div", {
                            children: [(0, u.jsx)("h4", {
                                className: "text-muted-foreground",
                                children: "Support"
                            }), (0, u.jsx)("ul", {
                                children: (0, u.jsx)("li", {
                                    children: (0, u.jsx)("a", {
                                        href: "https://help.superbridge.app",
                                        target: "_blank",
                                        children: "Help center"
                                    })
                                })
                            }), (0, u.jsxs)("div", {
                                className: "flex gap-2 mt-6",
                                children: [(0, u.jsx)("a", {
                                    href: "https://x.com/superbridgeapp",
                                    target: "_blank",
                                    children: (0, u.jsx)(eJ.kL, {
                                        className: "fill-foreground w-6 h-auto"
                                    })
                                }), (0, u.jsx)("a", {
                                    href: "https://warpcast.com/superbridge",
                                    target: "_blank",
                                    children: (0, u.jsx)(eJ.zS, {
                                        className: "fill-foreground w-6 h-auto"
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            n2.displayName = "CarouselNext";
            let n8 = () => {
                    let e = as(),
                        t = ai();
                    return (0, tQ.h)() ? null : e ? (0, u.jsxs)("div", {
                        className: "w-full px-3 md:px-8",
                        children: [(0, u.jsx)(n3, {}), (0, u.jsx)(n4, {})]
                    }) : t ? (0, u.jsxs)("div", {
                        className: "w-full px-3 md:px-8",
                        children: [(0, u.jsx)(n5, {}), (0, u.jsx)(n4, {})]
                    }) : null
                },
                n7 = () => {
                    let e = (0, ex.v$)(),
                        t = (0, tz.C)();
                    if (e) return null;
                    let a = (null == t ? void 0 : t.conduitId) ? "https://superbridge.app/rollies?referrer=conduit" : "https://superbridge.app/rollies";
                    return (0, u.jsxs)("div", {
                        className: "w-full flex items-center justify-between px-5 py-4 bg-[#A882FD] bg-[url('/img/upgrade-grid.svg')] bg-repeat rounded-[18px] shadow-lg",
                        children: [(0, u.jsxs)("div", {
                            className: "flex flex-col gap-1.5",
                            children: [(0, u.jsx)("h3", {
                                className: "text-base tracking-tight font-heading leading-none text-white",
                                children: "Level up your bridge"
                            }), (0, u.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center",
                                    children: [(0, u.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "16",
                                        viewBox: "0 0 15 16",
                                        fill: "none",
                                        className: "w-3 h-3",
                                        children: [(0, u.jsx)("g", {
                                            "clip-path": "url(#clip0_223_4)",
                                            children: (0, u.jsx)("path", {
                                                d: "M1.52649 12.4668C1.52649 12.33 1.59893 12.2146 1.71429 12.1583L3.07981 11.5412L3.72099 9.17773C3.76123 9.03286 3.90074 8.9336 4.04561 8.9336C4.20121 8.9336 4.33803 9.03018 4.37827 9.17773L5.01945 11.5412L6.38498 12.1583C6.49765 12.2146 6.57277 12.33 6.57277 12.4668C6.57277 12.5956 6.50034 12.719 6.38498 12.7673L5.01945 13.3924L4.37827 15.7559C4.33803 15.9007 4.19852 16 4.04561 16C3.90074 16 3.76123 15.9034 3.72099 15.7559L3.07981 13.3924L1.71429 12.7673C1.60161 12.719 1.52649 12.5956 1.52649 12.4668ZM0 3.84172C0 3.7049 0.0724346 3.58149 0.195842 3.5332L1.56137 2.91616L2.1945 0.552649C2.24279 0.40778 2.37425 0.300469 2.52716 0.300469C2.68008 0.300469 2.81154 0.405097 2.84373 0.552649L3.49296 2.91616L4.85044 3.5332C4.97116 3.58149 5.05433 3.7049 5.05433 3.84172C5.05433 3.97049 4.97384 4.0939 4.85044 4.15023L3.49296 4.76727L2.84373 7.13078C2.81154 7.26761 2.68008 7.37492 2.52716 7.37492C2.37425 7.37492 2.24279 7.27029 2.1945 7.13078L1.56137 4.76727L0.195842 4.15023C0.0751174 4.0939 0 3.97049 0 3.84172ZM9.59088 14.5459C9.43528 14.5459 9.29041 14.4252 9.25822 14.2777L8.14487 8.87726L4.59557 7.78806C4.4507 7.73977 4.35949 7.60832 4.35949 7.46345C4.35949 7.31858 4.44802 7.18712 4.59557 7.14688L8.14487 6.04963L9.25822 0.268276C9.29041 0.104628 9.42991 0 9.59088 0C9.75184 0 9.89135 0.104628 9.92354 0.268276L11.0449 6.04963L14.5942 7.14688C14.7311 7.18712 14.8303 7.31858 14.8303 7.46345C14.8303 7.60832 14.7337 7.73977 14.5942 7.78806L11.0369 8.87726L9.92354 14.2777C9.89135 14.4225 9.75184 14.5459 9.59088 14.5459Z",
                                                fill: "white"
                                            })
                                        }), (0, u.jsx)("defs", {
                                            children: (0, u.jsx)("clipPath", {
                                                id: "clip0_223_4",
                                                children: (0, u.jsx)("rect", {
                                                    width: "14.8303",
                                                    height: "16",
                                                    fill: "white"
                                                })
                                            })
                                        })]
                                    }), (0, u.jsx)("span", {
                                        className: "tracking-tight text-xs text-white",
                                        children: "Brand"
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center",
                                    children: [(0, u.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17",
                                        height: "17",
                                        viewBox: "0 0 17 17",
                                        fill: "none",
                                        className: "w-3 h-3",
                                        children: [(0, u.jsx)("g", {
                                            "clip-path": "url(#clip0_223_2)",
                                            children: (0, u.jsx)("path", {
                                                d: "M4.81196 15.7442C3.58594 15.0279 2.61478 14.054 1.8958 12.828C1.1795 11.602 0.820007 10.266 0.820007 8.81995C0.820007 7.37394 1.1795 6.03792 1.8958 4.8119C2.61209 3.58588 3.58594 2.61472 4.81196 1.89573C6.03798 1.17944 7.374 0.819946 8.82001 0.819946C10.266 0.819946 11.602 1.17944 12.8281 1.89573C14.0541 2.61203 15.0252 3.58588 15.7442 4.8119C16.4605 6.03792 16.82 7.37394 16.82 8.81995C16.82 10.266 16.4605 11.602 15.7442 12.828C15.0279 14.054 14.0541 15.0252 12.8281 15.7442C11.602 16.4605 10.266 16.8199 8.82001 16.8199C7.374 16.8199 6.03798 16.4605 4.81196 15.7442ZM4.58929 8.33973C4.62148 7.3337 4.73684 6.39741 4.93805 5.53893H2.59063C2.12383 6.42156 1.86092 7.35516 1.79385 8.33973H4.58661H4.58929ZM2.59063 12.101H4.93805C4.73684 11.2398 4.62148 10.3062 4.58929 9.30016H1.79385C1.85824 10.2847 2.12383 11.2183 2.59063 12.101ZM5.20633 4.58118C5.36997 4.08755 5.54435 3.65831 5.73483 3.29077C5.93067 2.89641 6.15334 2.53155 6.4082 2.20157C5.76434 2.43497 5.16877 2.75422 4.62417 3.15932C4.07956 3.56441 3.60472 4.03926 3.19962 4.58118H5.20633ZM4.62417 14.4806C5.16877 14.8857 5.76166 15.2049 6.4082 15.4383C6.16407 15.1244 5.93872 14.7623 5.73483 14.3491C5.54435 13.9816 5.36997 13.5497 5.20633 13.0587H3.19962C3.60472 13.6006 4.07956 14.0728 4.62417 14.4806ZM8.33979 8.33973V5.53893H5.92799C5.70532 6.41083 5.57923 7.34443 5.54704 8.33973H8.33979ZM5.92799 12.101H8.33979V9.30016H5.54704C5.57923 10.3008 5.708 11.2371 5.92799 12.101ZM6.58527 13.9279C6.80257 14.3733 7.0628 14.7623 7.36595 15.1003C7.6691 15.4383 7.99372 15.6664 8.33979 15.7871V13.0587H6.21236C6.33577 13.3941 6.46186 13.6838 6.58527 13.9279ZM8.33979 4.58118V1.85013C7.99372 1.96817 7.6691 2.19889 7.36863 2.53691C7.06816 2.87494 6.80794 3.26663 6.58527 3.70928C6.45113 3.98024 6.32772 4.26998 6.22041 4.5785H8.33979V4.58118ZM11.4277 4.58118C11.3042 4.24584 11.1782 3.9561 11.0547 3.71197C10.8374 3.26931 10.5772 2.87763 10.2741 2.5396C9.97091 2.20157 9.6463 1.97353 9.30022 1.85281V4.58118H11.4277ZM12.093 8.33973C12.0608 7.33906 11.932 6.40546 11.712 5.53893H9.30022V8.33973H12.093ZM11.712 12.101C11.9347 11.2291 12.0608 10.2955 12.093 9.30016H9.30022V12.101H11.712ZM10.2687 15.103C10.5692 14.765 10.8294 14.3733 11.0521 13.9306C11.1862 13.6597 11.3096 13.3699 11.4169 13.0614H9.29754V15.7898C9.64362 15.6717 9.96823 15.441 10.2687 15.103ZM11.9052 3.28809C12.0957 3.65563 12.27 4.08755 12.4337 4.5785H14.4404C14.0353 4.03658 13.5605 3.56441 13.0158 3.15663C12.4712 2.74885 11.8784 2.43229 11.2318 2.19889C11.4759 2.51277 11.7013 2.87494 11.9052 3.28809ZM13.0158 14.4806C13.5605 14.0755 14.0353 13.6006 14.4404 13.0587H12.4337C12.27 13.5523 12.0957 13.9816 11.9052 14.3491C11.7093 14.7381 11.4867 15.103 11.2318 15.4383C11.8757 15.2049 12.4712 14.8857 13.0158 14.4806ZM13.0507 8.33973H15.8435C15.7791 7.35516 15.5135 6.42156 15.0467 5.53893H12.6993C12.9005 6.40009 13.0158 7.3337 13.048 8.33973H13.0507ZM15.0494 12.101C15.5162 11.2183 15.7791 10.2847 15.8462 9.30016H13.0534C13.0212 10.3062 12.9032 11.2425 12.7046 12.101H15.0521H15.0494Z",
                                                fill: "white"
                                            })
                                        }), (0, u.jsx)("defs", {
                                            children: (0, u.jsx)("clipPath", {
                                                id: "clip0_223_2",
                                                children: (0, u.jsx)("rect", {
                                                    width: "16",
                                                    height: "16",
                                                    fill: "white",
                                                    transform: "translate(0.820007 0.819946)"
                                                })
                                            })
                                        })]
                                    }), (0, u.jsx)("span", {
                                        className: "tracking-tight text-xs text-white",
                                        children: "Domain"
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "flex gap-1 items-center",
                                    children: [(0, u.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        className: "w-3 h-3",
                                        children: [(0, u.jsx)("g", {
                                            "clip-path": "url(#clip0_223_8)",
                                            children: (0, u.jsx)("path", {
                                                d: "M7.51015 12.8327C7.79198 13.1146 8.24023 13.1146 8.52206 12.8327C8.65358 12.7012 8.73411 12.516 8.72874 12.3281L8.73411 9.20919C8.73411 9.08304 8.7851 8.96225 8.87905 8.87099C8.96494 8.7851 9.08572 8.73411 9.21188 8.73411L12.3308 8.72874C12.5268 8.72874 12.7039 8.65358 12.8354 8.52206C13.1173 8.24023 13.1173 7.78124 12.8408 7.50478C12.7093 7.37326 12.5294 7.2981 12.3362 7.2981H9.20919C9.07767 7.29274 8.95689 7.24174 8.87099 7.15316C8.7851 7.06459 8.73411 6.94649 8.73411 6.82033V3.69334C8.72874 3.50277 8.65895 3.32025 8.52206 3.18068C8.26439 2.923 7.80272 2.88811 7.50478 3.18604C7.37326 3.31756 7.2981 3.4974 7.2981 3.69066V6.81765C7.2981 6.9438 7.24711 7.06459 7.16122 7.15048C7.07532 7.23637 6.95454 7.28737 6.82302 7.29542H3.69602C3.50545 7.29005 3.32293 7.37058 3.19141 7.5021C2.90421 7.7893 2.90958 8.23218 3.19141 8.51401C3.32293 8.64553 3.49472 8.72605 3.69602 8.73142H6.82302C6.94917 8.73142 7.06996 8.78242 7.15585 8.86831C7.24711 8.95957 7.30079 9.08036 7.30079 9.20651V12.3335C7.30079 12.5294 7.38131 12.7012 7.51283 12.8327H7.51015ZM3.01694 12.9804C0.265728 10.2292 0.265728 5.76816 3.01694 3.01694C5.76816 0.265728 10.2292 0.265728 12.9804 3.01694C15.7316 5.76816 15.7316 10.2292 12.9804 12.9804C10.2292 15.7316 5.76816 15.7316 3.01694 12.9804ZM2.34055 13.6595C5.45949 16.7784 10.5405 16.7784 13.6595 13.6595C16.7784 10.5405 16.7784 5.45949 13.6595 2.34055C10.5405 -0.778392 5.45949 -0.778392 2.34055 2.34055C-0.778392 5.45949 -0.778392 10.5405 2.34055 13.6595Z",
                                                fill: "white"
                                            })
                                        }), (0, u.jsx)("defs", {
                                            children: (0, u.jsx)("clipPath", {
                                                id: "clip0_223_8",
                                                children: (0, u.jsx)("rect", {
                                                    width: "16",
                                                    height: "16",
                                                    fill: "white"
                                                })
                                            })
                                        })]
                                    }), (0, u.jsx)("span", {
                                        className: "tracking-tight text-xs text-white",
                                        children: "Much more!"
                                    })]
                                })]
                            })]
                        }), (0, u.jsx)(ax.z, {
                            size: "xs",
                            className: "bg-black text-white",
                            asChild: !0,
                            children: (0, u.jsx)("a", {
                                href: a,
                                target: "_blank",
                                children: "Learn more"
                            })
                        })]
                    })
                },
                n6 = () => {
                    let e = (0, ex.gf)(),
                        t = (0, tQ.h)();
                    return (0, u.jsxs)("main", {
                        className: "relative flex flex-col items-center justify-start w-screen h-screen fixed inset-0 overflow-y-auto overflow-x-hidden",
                        children: [(0, u.jsx)("div", {
                            className: (0, x.Z)("w-full", t ? "absolute inset-0 h-full" : "relative px-2 md:px-0  md:w-[468px] mb-24 mt-24 2xl:mt-32"),
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-col gap-2 items-center h-full",
                                children: [e && e < Date.now() ? (0, u.jsx)("div", {
                                    className: "w-full bg-card mx-auto rounded-[24px] md:rounded-[32px] shadow-sm shrink-0",
                                    children: (0, u.jsx)(nY, {})
                                }) : (0, u.jsxs)(u.Fragment, {
                                    children: [!t && (0, u.jsx)(nU, {}), (0, u.jsxs)("div", {
                                        className: (0, x.Z)("bg-card", !t && "rounded-t-[24px] rounded-b-[32px] shadow-sm w-full", t && "h-screen w-screen"),
                                        children: [t && (0, u.jsx)(nU, {}), (0, u.jsx)(nW, {}), t && (0, u.jsxs)("div", {
                                            className: "flex flex-col gap-2 w-full mt-2 px-4",
                                            children: [(0, u.jsx)(ny, {}), (0, u.jsx)(n7, {})]
                                        })]
                                    })]
                                }), !t && (0, u.jsxs)("div", {
                                    className: "flex flex-col gap-2 w-full mt-2",
                                    children: [(0, u.jsx)(ny, {}), (0, u.jsx)(n7, {})]
                                })]
                            })
                        }), (0, u.jsx)(n8, {})]
                    }, "bridgeMain")
                };
            var n9 = a(15558);

            function de() {
                let e = (0, ex.AQ)();
                return (0, u.jsx)(n9.o, {
                    title: e.head.title,
                    description: e.head.description,
                    og: e.head.og,
                    icon: e.head.favicon,
                    bodyFont: e.theme.fontBody,
                    buttonFont: e.theme.fontButton,
                    headingFont: e.theme.fontHeading
                })
            }
            let dt = e => {
                    var t, a, l;
                    let {
                        token: s
                    } = e, i = (0, aZ.u)({
                        abi: aO.Wo,
                        functionName: "balanceOf",
                        address: s.address,
                        args: [(null === (t = s.hyperlane) || void 0 === t ? void 0 : t.type) == "EvmHypXERC20Lockbox" ? null === (a = s.hyperlane) || void 0 === a ? void 0 : a.xERC20 : s.address],
                        chainId: s.chainId
                    }), n = (0, eh.Ab)(s.chainId);
                    return s.hyperlane ? (0, u.jsxs)("div", {
                        className: "",
                        children: [(0, u.jsx)("div", {
                            children: null == n ? void 0 : n.name
                        }), (0, u.jsx)("div", {
                            children: "EvmHypSynthetic" === s.hyperlane.type || "EvmHypXERC20" === s.hyperlane.type ? 1 / 0 : e6(parseFloat((0, e7.b)(null !== (l = i.data) && void 0 !== l ? l : BigInt(0), s.decimals)))
                        })]
                    }) : null
                },
                da = () => {
                    let e = es();
                    return (0, u.jsx)("div", {
                        className: "mt-20 p-8 flex flex-col gap-2 w-full",
                        children: e.data.map(e => {
                            let [t] = Object.values(e);
                            return t.hyperlane ? (0, u.jsxs)("div", {
                                children: [(0, u.jsx)("div", {
                                    className: "text-2xl",
                                    children: t.name
                                }), (0, u.jsx)("div", {
                                    className: "flex gap-4",
                                    children: Object.values(e).map(e => (0, u.jsx)(dt, {
                                        token: e
                                    }, e.address))
                                })]
                            }, t.address) : null
                        })
                    })
                };
            var dl = !0;

            function ds(e) {
                return (0, u.jsx)(I.Ex, {
                    initialValues: e,
                    children: (0, u.jsxs)(nx.C, {
                        children: [(0, u.jsx)(de, {}), (0, u.jsx)(nm, {
                            children: (0, u.jsx)(di, {})
                        }), (0, u.jsx)(np, {})]
                    })
                })
            }

            function di() {
                let e = (0, h.useRouter)();
                return (0, u.jsx)(nh, {
                    children: (0, u.jsx)(m.M, {
                        mode: "sync",
                        children: (0, u.jsx)(nh, {
                            children: "/hyperlane-liquidity" === e.asPath ? (0, u.jsx)(da, {}) : (0, u.jsx)(n6, {}, "bridge")
                        }, "bridge")
                    })
                }, "index")
            }
        }
    },
    function (e) {
        e.O(0, [9231, 8283, 5907, 6356, 8715, 2388, 5480, 2718, 6354, 3706, 3206, 1488, 2888, 9774, 179], function () {
            return e(e.s = 80844)
        }), _N_E = e.O()
    }
]);