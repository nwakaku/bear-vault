// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
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
      2: [ctc0, ctc1, ctc0, ctc1]
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
  
  
  const v105 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v106 = stdlib.protect(ctc0, interact.inherit, 'for Alice\'s interact field inherit');
  
  const txn1 = await (ctc.sendrecv({
    args: [v106, v105],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v106, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v110, v111], secs: v113, time: v112, didSend: v31, from: v109 } = txn1;
      
      sim_r.txns.push({
        amt: v110,
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
  const {data: [v110, v111], secs: v113, time: v112, didSend: v31, from: v109 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v122], secs: v124, time: v123, didSend: v42, from: v121 } = txn2;
  ;
  const v131 = stdlib.add(v123, v111);
  const v135 = stdlib.protect(ctc1, await interact.getChoice(), {
    at: './index.rsh:50:52:application',
    fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:13:function exp)'],
    msg: 'getChoice',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v109, v110, v121, v131, v135],
    evt_cnt: 1,
    funcNum: 2,
    lct: v123,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v137], secs: v139, time: v138, didSend: v52, from: v136 } = txn3;
      
      ;
      if (v137) {
        sim_r.txns.push({
          kind: 'from',
          to: v109,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v121,
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
    timeoutAt: ['time', v131],
    tys: [ctc3, ctc0, ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v109, v110, v121, v131],
      evt_cnt: 0,
      funcNum: 3,
      lct: v123,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v155, time: v154, didSend: v82, from: v153 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v121,
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
      tys: [ctc3, ctc0, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v155, time: v154, didSend: v82, from: v153 } = txn4;
    ;
    const v156 = stdlib.addressEq(v109, v153);
    const v157 = stdlib.addressEq(v121, v153);
    const v158 = v156 ? true : v157;
    stdlib.assert(v158, {
      at: 'reach standard library:200:11:dot',
      fs: ['at ./index.rsh:53:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '20')), {
      at: './index.rsh:44:22:application',
      fs: ['at ./index.rsh:43:7:application call to [unknown function] (defined at: ./index.rsh:43:19:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:42:23:function exp)', 'at ./index.rsh:53:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'showTime',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v137], secs: v139, time: v138, didSend: v52, from: v136 } = txn3;
    ;
    const v140 = stdlib.addressEq(v109, v136);
    stdlib.assert(v140, {
      at: './index.rsh:52:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    if (v137) {
      ;
      return;
      }
    else {
      ;
      return;
      }}
  
  
  
  
  
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
  const {data: [v110, v111], secs: v113, time: v112, didSend: v31, from: v109 } = txn1;
  ;
  const v120 = stdlib.protect(ctc1, await interact.acceptTerms(v110), {
    at: './index.rsh:37:50:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v109, v110, v111, v120],
    evt_cnt: 1,
    funcNum: 1,
    lct: v112,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v122], secs: v124, time: v123, didSend: v42, from: v121 } = txn2;
      
      ;
      const v131 = stdlib.add(v123, v111);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v122], secs: v124, time: v123, didSend: v42, from: v121 } = txn2;
  ;
  const v131 = stdlib.add(v123, v111);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: ['time', v131],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v109, v110, v121, v131],
      evt_cnt: 0,
      funcNum: 3,
      lct: v123,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v155, time: v154, didSend: v82, from: v153 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v121,
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
      tys: [ctc3, ctc0, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v155, time: v154, didSend: v82, from: v153 } = txn4;
    ;
    const v156 = stdlib.addressEq(v109, v153);
    const v157 = stdlib.addressEq(v121, v153);
    const v158 = v156 ? true : v157;
    stdlib.assert(v158, {
      at: 'reach standard library:200:11:dot',
      fs: ['at ./index.rsh:53:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '20')), {
      at: './index.rsh:44:22:application',
      fs: ['at ./index.rsh:43:7:application call to [unknown function] (defined at: ./index.rsh:43:19:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:42:23:function exp)', 'at ./index.rsh:53:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'showTime',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v137], secs: v139, time: v138, didSend: v52, from: v136 } = txn3;
    ;
    const v140 = stdlib.addressEq(v109, v136);
    stdlib.assert(v140, {
      at: './index.rsh:52:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    if (v137) {
      ;
      return;
      }
    else {
      ;
      return;
      }}
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAECIAgDSCYCAQAAIjUAMRhBAgApZEkiWzUBIQRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQADKSSEFDEAAUiEFEkQkNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AEp2XEtLAyBjQDIQZbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCASlIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BRc1/YAEahE6CDT9FlEHCFCwMgY0AyEGWwxENP8xABJENP1BABOxIrIBNP6yCCOyEDT/sgezQgDOsSKyATT+sggjshA0A1coILIHs0IAuEkjDEAAXUgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+STUFFzX9gAQPv8Y0NP0WUQcIULAyBjQDgShbCDX8NP80/hZQMQBQNPwWUChLAVcAUGdIJDUBMgY1AkIAcUiBoI0GiAC6IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQRbNf6ABKzRH8M0/xZQNP4WULA0/4gAiTEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
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
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v111",
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
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v111",
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
                "name": "v122",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v137",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v122",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v137",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d4c38038062000d4c833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b610a6a80620002e26000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633e59bac41461008357806373b4522c1461009657806383230757146100a95780639a3e3912146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046107b6565b6100f4565b61005d6100a43660046107b6565b6102df565b3480156100b557600080fd5b50600154610070565b61005d6100cc3660046107b6565b610439565b3480156100dd57600080fd5b506100e6610606565b60405161007a9291906107d9565b610104600260005414600d6106a3565b61011e8135158061011757506001548235145b600e6106a3565b60008080556002805461013090610836565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610836565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610887565b90506101d481606001514310600f6106a3565b7fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd3383604051610205929190610932565b60405180910390a16102193415600b6106a3565b8051610231906001600160a01b03163314600c6106a3565b610241604083016020840161094f565b1561029e57805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610283573d6000803e3d6000fd5b506000808055600181905561029a906002906106c8565b5050565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610283573d6000803e3d6000fd5b6102ef60026000541460126106a3565b6103098135158061030257506001548235145b60136106a3565b60008080556002805461031b90610836565b80601f016020809104026020016040519081016040528092919081815260200182805461034790610836565b80156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b50505050508060200190518101906103ac9190610887565b90506103c0816060015143101560146106a3565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516103f192919061096a565b60405180910390a1610405341560106106a3565b805161029e906001600160a01b0316331461042f5760408201516001600160a01b03163314610432565b60015b60116106a3565b61044960016000541460096106a3565b6104638135158061045c57506001548235145b600a6106a3565b60008080556002805461047590610836565b80601f01602080910402602001604051908101604052809291908181526020018280546104a190610836565b80156104ee5780601f106104c3576101008083540402835291602001916104ee565b820191906000526020600020905b8154815290600101906020018083116104d157829003601f168201915b5050505050806020019051810190610506919061099f565b905061051e6040518060200160405280600081525090565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338460405161054f929190610932565b60405180910390a1610563341560086106a3565b60408201516105729043610a0e565b815260408051608080820183526000808352602080840182815284860183815260608087018581528a516001600160a01b03908116808a528c87015186523385528b518352600297889055436001558a51808801919091529451858b015292519092169083015251818501528551808203909401845260a001909452815192936105ff9391920190610705565b5050505050565b60006060600054600280805461061b90610836565b80601f016020809104026020016040519081016040528092919081815260200182805461064790610836565b80156106945780601f1061066957610100808354040283529160200191610694565b820191906000526020600020905b81548152906001019060200180831161067757829003601f168201915b50505050509050915091509091565b8161029a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546106d490610836565b6000825580601f106106e4575050565b601f0160209004906000526020600020908101906107029190610789565b50565b82805461071190610836565b90600052602060002090601f0160209004810192826107335760008555610779565b82601f1061074c57805160ff1916838001178555610779565b82800160010185558215610779579182015b8281111561077957825182559160200191906001019061075e565b50610785929150610789565b5090565b5b80821115610785576000815560010161078a565b6000604082840312156107b057600080fd5b50919050565b6000604082840312156107c857600080fd5b6107d2838361079e565b9392505050565b82815260006020604081840152835180604085015260005b8181101561080d578581018301518582016060015282016107f1565b8181111561081f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061084a57607f821691505b602082108114156107b057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461088257600080fd5b919050565b60006080828403121561089957600080fd5b6040516080810181811067ffffffffffffffff821117156108ca57634e487b7160e01b600052604160045260246000fd5b6040526108d68361086b565b8152602083015160208201526108ee6040840161086b565b6040820152606083015160608201528091505092915050565b8035801515811461088257600080fd5b8035825261092760208201610907565b151560208301525050565b6001600160a01b0383168152606081016107d26020830184610917565b60006020828403121561096157600080fd5b6107d282610907565b6001600160a01b038316815281356020808301919091526060820190610991908401610907565b151560408301529392505050565b6000606082840312156109b157600080fd5b6040516060810181811067ffffffffffffffff821117156109e257634e487b7160e01b600052604160045260246000fd5b6040526109ee8361086b565b815260208301516020820152604083015160408201528091505092915050565b60008219821115610a2f57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220daa924862a834166e405ee3a7642c84d6b38bbbeaf4834d94a5f0624071090d864736f6c634300080c0033`,
  BytecodeLen: 3404,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:53:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:63:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:63:3:after expr stmt',
    fs: [],
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
