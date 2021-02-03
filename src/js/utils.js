export const checkValid = (actorName, thisArg) => {
  const {actors} = thisArg;
  if (Object.entries(actors).length !== 0) {
    return Object.keys(actors).includes(actorName) ? `${actorName}Jr` : actorName;
  } else {
    return actorName;
  }
};
