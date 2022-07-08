export const getTypes = (list) => {
    let types = [];

    for (let pokemon of list) {
        for (let type of pokemon.type) {
          if (!types.includes(type))
          type.push(type)
        }
    }
    return types;
  };
