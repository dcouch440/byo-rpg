export const checkValid = (actorName, thisArg) => {
  let {actors, actorsArray} = thisArg;
  if (Object.entries(actors).length !== 0) {
    actorsArray = Object.keys(actors)
    return Object.keys(actors).includes(actorName) ? `${actorName}Jr` : actorName;
    
  } else {
    return actorName;
  }
};
