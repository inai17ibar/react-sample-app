export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    // TODO: do something with the queue...
    // queueは配列で数値かincrement(+1)がはいっている
    queue.forEach(element => {
        if (typeof element === 'function') {
            // TODO: apply the updater function
            finalState = element(finalState);
          } else {
            // TODO: replace the state
            finalState = element;
          }
    }); 

    // for (let update of queue) {
    //     if (typeof update === 'function') {
    //       // TODO: apply the updater function
    //       finalState = update(finalState);
    //     } else {
    //       // TODO: replace the state
    //       finalState = update;
    //     }
    //   }
  
    return finalState;
  }