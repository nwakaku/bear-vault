// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v130 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v131 = stdlib.protect(ctc0, interact.inherit, 'for Alice\'s interact field inherit');
  
  const txn1 = await (ctc.sendrecv({
    args: [v131, v130],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v131, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135, v136], secs: v138, time: v137, didSend: v31, from: v134 } = txn1;
      
      sim_r.txns.push({
        amt: v135,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v135, v136], secs: v138, time: v137, didSend: v31, from: v134 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v145], secs: v147, time: v146, didSend: v40, from: v144 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v134, v135, v136, v144, v146],
    evt_cnt: 0,
    funcNum: 2,
    lct: v146,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v150, time: v149, didSend: v45, from: v148 } = txn3;
      
      ;
      const v153 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '20'), v146);
      const v154 = true;
      const v155 = v153;
      const v156 = v149;
      const v157 = v146;
      const v163 = v135;
      
      if (await (async () => {
        
        return v154;})()) {
        const v167 = stdlib.eq(v155, v157);
        if (v167) {
          sim_r.txns.push({
            kind: 'from',
            to: v134,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v180 = stdlib.add(v156, v136);
          sim_r.isHalt = false;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v144,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v45, from: v148 } = txn3;
  ;
  const v151 = stdlib.addressEq(v134, v148);
  stdlib.assert(v151, {
    at: './index.rsh:45:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v153 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '20'), v146);
  let v154 = true;
  let v155 = v153;
  let v156 = v149;
  let v157 = v146;
  let v163 = v135;
  
  while (await (async () => {
    
    return v154;})()) {
    const v167 = stdlib.eq(v155, v157);
    if (v167) {
      ;
      return;
      }
    else {
      const v180 = stdlib.add(v156, v136);
      const v184 = stdlib.protect(ctc1, await interact.getChoice(), {
        at: './index.rsh:70:52:application',
        fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)'],
        msg: 'getChoice',
        who: 'Alice'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v134, v135, v136, v144, v155, v156, v163, v180, v184],
        evt_cnt: 1,
        funcNum: 4,
        lct: v156,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:72:5:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v186], secs: v188, time: v187, didSend: v71, from: v185 } = txn4;
          
          ;
          const v190 = stdlib.sub(v155, stdlib.checkedBigNumberify('./index.rsh:74:40:decimal', stdlib.UInt_max, '1'));
          const cv154 = v186;
          const cv155 = v190;
          const cv156 = v187;
          const cv157 = v156;
          const cv163 = v163;
          
          await (async () => {
            const v154 = cv154;
            const v155 = cv155;
            const v156 = cv156;
            const v157 = cv157;
            const v163 = cv163;
            
            if (await (async () => {
              
              return v154;})()) {
              const v167 = stdlib.eq(v155, v157);
              if (v167) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v134,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v180 = stdlib.add(v156, v136);
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v144,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v180],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v134, v135, v136, v144, v155, v156, v163, v180],
          evt_cnt: 0,
          funcNum: 5,
          lct: v156,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v193, time: v192, didSend: v92, from: v191 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v144,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v193, time: v192, didSend: v92, from: v191 } = txn5;
        ;
        const v194 = stdlib.addressEq(v134, v191);
        const v195 = stdlib.addressEq(v144, v191);
        const v196 = v194 ? true : v195;
        stdlib.assert(v196, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.showTime(v155), {
          at: './index.rsh:55:22:application',
          fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:26:function exp)', 'at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'showTime',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v186], secs: v188, time: v187, didSend: v71, from: v185 } = txn4;
        ;
        const v189 = stdlib.addressEq(v134, v185);
        stdlib.assert(v189, {
          at: './index.rsh:72:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v190 = stdlib.sub(v155, stdlib.checkedBigNumberify('./index.rsh:74:40:decimal', stdlib.UInt_max, '1'));
        const cv154 = v186;
        const cv155 = v190;
        const cv156 = v187;
        const cv157 = v156;
        const cv163 = v163;
        
        v154 = cv154;
        v155 = cv155;
        v156 = cv156;
        v157 = cv157;
        v163 = cv163;
        
        continue;}
      
      }}
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135, v136], secs: v138, time: v137, didSend: v31, from: v134 } = txn1;
  ;
  const v143 = stdlib.protect(ctc1, await interact.acceptTerms(v135), {
    at: './index.rsh:38:50:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v135, v136, v143],
    evt_cnt: 1,
    funcNum: 1,
    lct: v137,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v145], secs: v147, time: v146, didSend: v40, from: v144 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v145], secs: v147, time: v146, didSend: v40, from: v144 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v45, from: v148 } = txn3;
  ;
  const v151 = stdlib.addressEq(v134, v148);
  stdlib.assert(v151, {
    at: './index.rsh:45:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v153 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '20'), v146);
  let v154 = true;
  let v155 = v153;
  let v156 = v149;
  let v157 = v146;
  let v163 = v135;
  
  while (await (async () => {
    
    return v154;})()) {
    const v167 = stdlib.eq(v155, v157);
    if (v167) {
      ;
      return;
      }
    else {
      const v180 = stdlib.add(v156, v136);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc1],
        timeoutAt: ['time', v180],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v134, v135, v136, v144, v155, v156, v163, v180],
          evt_cnt: 0,
          funcNum: 5,
          lct: v156,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v193, time: v192, didSend: v92, from: v191 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v144,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v193, time: v192, didSend: v92, from: v191 } = txn5;
        ;
        const v194 = stdlib.addressEq(v134, v191);
        const v195 = stdlib.addressEq(v144, v191);
        const v196 = v194 ? true : v195;
        stdlib.assert(v196, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc2, await interact.showTime(v155), {
          at: './index.rsh:55:22:application',
          fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:26:function exp)', 'at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'showTime',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v186], secs: v188, time: v187, didSend: v71, from: v185 } = txn4;
        ;
        const v189 = stdlib.addressEq(v134, v185);
        stdlib.assert(v189, {
          at: './index.rsh:72:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v190 = stdlib.sub(v155, stdlib.checkedBigNumberify('./index.rsh:74:40:decimal', stdlib.UInt_max, '1'));
        const cv154 = v186;
        const cv155 = v190;
        const cv156 = v187;
        const cv157 = v156;
        const cv163 = v163;
        
        v154 = cv154;
        v155 = cv155;
        v156 = cv156;
        v157 = cv157;
        v163 = cv163;
        
        continue;}
      
      }}
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAECBQYgKAhoYFAmAgEAACI1ADEYQQLNKWRJIls1ASEHWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEABG0mBBAxAAMFJJQxAAFMlEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEIWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQlbsggjshA0/7IHs0IB8EghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQUXNf6ABO7n6CI0/hZRBwhQsDIGNAMhCFsMRDT/MQASRDT/NAMhBVs0AyEGWzQDVzAgNP40AyEKWyMJMgY0A4FYWzQDIQlbQgEMJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEFWzX+IQpbNf2ABEGxQE2wNP8xABJENP80/jQDIQZbNANXMCAjgRQ0/QgyBjT9NP5CALlJIwxAAF5IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEFWzX+IQZbNf1JNQUXNfyABA+/xjQ0/BZRBwhQsDT/NP4WUDT9FlAxAFAyBhZQKEsBVwBYZ0gkNQEyBjUCQgDsSIGgjQaIATUiNAESRDQESSISTDQCEhFESTUFSSJbNf8hB1s1/oAErNEfwzT/FlA0/hZQsDT/iAEEMQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAlzX/Nf41/TX8Nfs1+jX5Nfg19zT7QQBSNPw0/hJBABOxIrIBNPiyCCOyEDT3sgezQgBKNP00+Qg19jT3NPgWUDT5FlA0+lA0/BZQNP0WUDT/FlA09hZQKEsBVwBwZ0ghBDUBMgY1AkIALrEisgE0+LIII7IQNPqyB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v145",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v186",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v145",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v186",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012df380380620012df833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b610ffd80620002e26000396000f3fe60806040526004361061006e5760003560e01c80638e3147691161004b5780638e314769146100c35780639a3e3912146100d6578063a98bf223146100e9578063ab53f2c6146100fc57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610c74565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610c74565b6102da565b6100756100e4366004610c74565b610490565b6100756100f7366004610c74565b610694565b34801561010857600080fd5b5061011161086f565b604051610092929190610c97565b61012f600260005414600d61090c565b6101498135158061014257506001548235145b600e61090c565b60008080556002805461015b90610cf4565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610cf4565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610d45565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161021f929190610ddf565b60405180910390a16102333415600b61090c565b805161024b906001600160a01b03163314600c61090c565b610253610b1d565b815181516001600160a01b0391821690526020808401518351820152604080850151845190910152606080850151845193169201919091528101516001905260808201516102a2906014610e2a565b6020808301805182019290925281514360409091015260808085015183516060015290840151915101526102d581610931565b505050565b6102ea600660005414601661090c565b610304813515806102fd57506001548235145b601761090c565b60008080556002805461031690610cf4565b80601f016020809104026020016040519081016040528092919081815260200182805461034290610cf4565b801561038f5780601f106103645761010080835404028352916020019161038f565b820191906000526020600020905b81548152906001019060200180831161037257829003601f168201915b50505050508060200190518101906103a79190610e42565b90506103bb8160e00151431015601861090c565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516103ec929190610ddf565b60405180910390a16104003415601461090c565b8051610434906001600160a01b0316331461042a5760608201516001600160a01b0316331461042d565b60015b601561090c565b80606001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015610475573d6000803e3d6000fd5b506000808055600181905561048c90600290610b86565b5050565b6104a0600160005414600961090c565b6104ba813515806104b357506001548235145b600a61090c565b6000808055600280546104cc90610cf4565b80601f01602080910402602001604051908101604052809291908181526020018280546104f890610cf4565b80156105455780601f1061051a57610100808354040283529160200191610545565b820191906000526020600020905b81548152906001019060200180831161052857829003601f168201915b505050505080602001905181019061055d9190610eee565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153383604051610590929190610f78565b60405180910390a16105a43415600861090c565b6105e86040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152436080840181905260026000556001555161066a9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b6040516020818303038152906040526002908051906020019061068e929190610bc3565b50505050565b6106a4600660005414601161090c565b6106be813515806106b757506001548235145b601261090c565b6000808055600280546106d090610cf4565b80601f01602080910402602001604051908101604052809291908181526020018280546106fc90610cf4565b80156107495780601f1061071e57610100808354040283529160200191610749565b820191906000526020600020905b81548152906001019060200180831161072c57829003601f168201915b50505050508060200190518101906107619190610e42565b90506107748160e001514310601361090c565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433836040516107a5929190610f78565b60405180910390a16107b93415600f61090c565b80516107d1906001600160a01b03163314601061090c565b6107d9610b1d565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925261081e918501908501610f95565b60208201519015159052608082015161083990600190610fb0565b602080830180519091019190915280514360409091015260a083015181516060015260c08301519051608001526102d581610931565b60006060600054600280805461088490610cf4565b80601f01602080910402602001604051908101604052809291908181526020018280546108b090610cf4565b80156108fd5780601f106108d2576101008083540402835291602001916108fd565b820191906000526020600020905b8154815290600101906020018083116108e057829003601f168201915b50505050509050915091509091565b8161048c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515115610ada576020808301516060810151910151141561099f57815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610475573d6000803e3d6000fd5b8160000151604001518260200151604001516109bb9190610e2a565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151909316928401929092528085018051820151608080860191909152815184015160a08601529051015160c0840152835160e0840152600660005543600155905161066a9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610475573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610b816040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b905290565b508054610b9290610cf4565b6000825580601f10610ba2575050565b601f016020900490600052602060002090810190610bc09190610c47565b50565b828054610bcf90610cf4565b90600052602060002090601f016020900481019282610bf15760008555610c37565b82601f10610c0a57805160ff1916838001178555610c37565b82800160010185558215610c37579182015b82811115610c37578251825591602001919060010190610c1c565b50610c43929150610c47565b5090565b5b80821115610c435760008155600101610c48565b600060408284031215610c6e57600080fd5b50919050565b600060408284031215610c8657600080fd5b610c908383610c5c565b9392505050565b82815260006020604081840152835180604085015260005b81811015610ccb57858101830151858201606001528201610caf565b81811115610cdd576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610d0857607f821691505b60208210811415610c6e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d4057600080fd5b919050565b600060a08284031215610d5757600080fd5b60405160a0810181811067ffffffffffffffff82111715610d8857634e487b7160e01b600052604160045260246000fd5b604052610d9483610d29565b81526020830151602082015260408301516040820152610db660608401610d29565b6060820152608083015160808201528091505092915050565b80358015158114610d4057600080fd5b6001600160a01b038316815281356020808301919091526060820190610e06908401610dcf565b151560408301529392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e3d57610e3d610e14565b500190565b6000610100808385031215610e5657600080fd5b6040519081019067ffffffffffffffff82118183101715610e8757634e487b7160e01b600052604160045260246000fd5b81604052610e9484610d29565b81526020840151602082015260408401516040820152610eb660608501610d29565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060608284031215610f0057600080fd5b6040516060810181811067ffffffffffffffff82111715610f3157634e487b7160e01b600052604160045260246000fd5b604052610f3d83610d29565b815260208301516020820152604083015160408201528091505092915050565b80358252610f6d60208201610dcf565b151560208301525050565b6001600160a01b038316815260608101610c906020830184610f5d565b600060208284031215610fa757600080fd5b610c9082610dcf565b600082821015610fc257610fc2610e14565b50039056fea26469706673582212205b8a22f7bc44cfd44a8f6c9e4fdede264ef9f2c79846a78d571ee9989ac5093c64736f6c634300080c0033`,
  BytecodeLen: 4831,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:95:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:64:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
