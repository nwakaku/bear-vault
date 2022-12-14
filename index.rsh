'reach 0.1';

// const COUNTDOWN = 20;

const Shared = {
  showTime : Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Shared,
    inherit: UInt,
    getChoice: Fun([], Bool),
    deadline: UInt, // time delta (blocks/rounds)

  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Shared,
    acceptTerms: Fun([UInt], Bool),
  });
  init();


  // The first one to publish deploys the contract
  A.only(() => {
    const value = declassify(interact.inherit);
    const deadline = declassify(interact.deadline);
  })
  A.publish(value, deadline)
    .pay(value);
  commit();



  B.only(() => {
    const terms = declassify(interact.acceptTerms(value));
  })
  B.publish(terms);
  commit();



  A.publish();

  var [COUNTDOWN, CHOICE ]   = [20 + lastConsensusTime(), true] ;
//   { const end = lastConsensusTime() + COUNTDOWN; }
  invariant(balance() == value);
  while ( CHOICE ){
    // assert(end >= 1 );

    const showTime =  () => {
    each([A, B], () => {
    interact.showTime(COUNTDOWN)
  });
  }

    if (COUNTDOWN == lastConsensusTime() ) {
        transfer(value).to(A)
        // each([A, B], () => {
        //     interact.showTime(COUNTDOWN)
        // })
        commit()
        exit()
    }else{
    commit();

  A.only(() => {
    const stillHere = declassify(interact.getChoice());
  })
  A.publish(stillHere)
    .timeout(relativeTime(deadline), () => closeTo(B, showTime));
    [COUNTDOWN, CHOICE] = [COUNTDOWN - 1, stillHere];
    //   showTime();

    continue;
    }


  // assert( value > 1);
//   if(stillHere){
//     transfer(value).to(A);
//   } else {
//     transfer(value).to(B);
//   }


  }
    transfer(value).to(B)

  
  // The second one to publish always attaches
  // write your program here
  commit()
  exit();
});
