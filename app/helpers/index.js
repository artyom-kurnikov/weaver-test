export const changeFieldsForState = changes => state =>
  Object.keys(changes).reduce((acc, fieldName) => {
    acc[fieldName] = changes[fieldName];

    return acc;
  }, { ...state });
