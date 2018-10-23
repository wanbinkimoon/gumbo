export default data => {
  let scrapList = {};
  for (let [key, value] of Object.entries(data)) {
    scrapList = {
      ...scrapList,
      [value.title.replace(' ', '-')]: {
        ...value,
        uid: key,
      },
    };
  }
  return scrapList;
};
