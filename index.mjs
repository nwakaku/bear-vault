import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);

const who = isAlice ? 'Alice' : 'Bob';
console.log(`Hello, Alice and Bob! starting vault as ${who}`);

let acc = null;
let accBob = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(5000));
  accBob = await stdlib.newTestAccount(stdlib.parseCurrency(100));
} else {
  const secret = await ask.ask(
    `What is your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  })
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = accBob.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const getBalanceBob = async () => fmt(await stdlib.balanceOf(accBob));

if(isAlice){
  const before = await getBalance();
console.log(`Your balance is ${before}`);
}else{
  const before = await getBalanceBob();
console.log(`Your balance is ${before}`);
}


const interact = { ...stdlib.hasRandom };

interact.showTime = (t) => {
  console.log(parseInt(t));
  process.exit(1);
};

const choiceArray = ["I'm still here", "I'm not here" ];


if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to put into the vault contract?`,
    stdlib.parseCurrency
  );
  interact.inherit = amt;
  interact.deadline = { ETH: 10, ALGO: 10, CFX: 100 }[stdlib.connector];
  interact.getChoice = async () => {
      const choice = await ask.ask(
        `Are you still here?`,
        ask.yesno
      );
      // const choice = Math.floor(Math.random() * 2);
      console.log(`Alice's choice is ${choice ? choiceArray[0] : choiceArray[1]}`);
      return (choice ? true : false);
    }
} else {
  interact.acceptTerms = async (num) => {
    const accepted = await ask.ask(
      `do you accepts the terms of The Vault for ${stdlib.formatCurrency(num)}?`,
      ask.yesno
    );
    return (accepted ? true : false);
    if (!accepted) {
      process.exit(0);
    }
    }
}

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

if(isAlice){
  const after = await getBalance();
console.log(`Your balance is ${after}`);
}else{
  const after = await getBalanceBob();
console.log(`Your balance is ${after}`);
}

// const after = await getBalance();
// console.log(`Your balance is now ${after}`)

ask.done();

// const startingBalance = stdlib.parseCurrency(100);

// const  accBob  = await stdlib.newTestAccount(startingBalance);

// const  accAlice  = await stdlib.newTestAccount(stdlib.parseCurrency(6000));


// console.log('Launching...');
// const ctcAlice = accAlice.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// const choiceArray = ["I'm not here", "I'm still here"];

// const getBalance = async (who) => stdlib.formatCurrency((await stdlib.balanceOf(who)));

// console.log(`Alice's balance before is: ${await getBalance(accAlice)}`);
// console.log(`Bob's account balance before is: ${await getBalance(accBob)}`);

// const Shared = () => ({
//   showTime: (t) => {
//     // parseInt
//     console.log(t);
//   },
// });

// console.log('Starting backends...');
// await Promise.all([
//   backend.Alice(ctcAlice, {
//     ...stdlib.hasRandom,
//     ...Shared(),
//     inherit: stdlib.parseCurrency(5000),
    // getChoice: () => {
    //   const choice = Math.floor(Math.random() * 2);
    //   console.log(`Alice's choice is ${choiceArray[choice]}`);
    //   return (choice == 0 ? false : true);
    // },
//     // implement Alice's interact object here
//   }),
//   backend.Bob(ctcBob, {
//     ...stdlib.hasRandom,
//     ...Shared(),
    // acceptTerms: (num) => {
    //   console.log(`bobs accepts the terms of The Vault for ${stdlib.formatCurrency(num)}`);
    //   return true;
    // },
//     // implement Bob's interact object here
//   }),
// ]);

// console.log(`Alice's balance after is: ${await getBalance(accAlice)}`);
// console.log(`Bob's account balance after is: ${await getBalance(accBob)}`);

// console.log('Goodbye, Alice and Bob!');
