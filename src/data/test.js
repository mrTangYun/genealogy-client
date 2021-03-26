function func(a, b) {
  const { path: aPath } = a;
  const { path: bPath } = b;
  console.log(aPath, bPath);
  let minI = Math.min(aPath.length, bPath.length);
  for (let i = 0; i < minI; i++) {
    if (aPath[i] !== bPath[i]) {
      console.log(aPath[i]);
      minI = i;
    }
  }
  console.log(minI);
  let renations = [];
  let aFirstUser;
  for (let i = aPath.length - 1; i > minI - 1; i--) {
    if (aPath[i] !== a.id) {
      const currentUser = flatData.filter(({ id }) => id === aPath[i])[0];
      renations.push(["", "爸爸", "妈妈"][currentUser.gender]);
      aFirstUser = currentUser;
    }
  }
  // const currentUser = flatData.filter(({id}) => id === aPath[minI-1])[0];
  // renations.push(['', '爸爸','妈妈'][currentUser.gender]);
  for (let i = minI; i < bPath.length; i++) {
    const currentUser = flatData.filter(({ id }) => id === aPath[i])[0];
    if (minI === i) {
      console.log("aaaa1");
      console.log({ ...currentUser });
      if (currentUser.gender === 1) {
        console.log("aaaa4");
        if (currentUser.index > me.index) {
          renations.push("哥哥");
        } else {
          renations.push("弟弟");
        }
      } else if (currentUser.gender === 2) {
        console.log("aaaa3");
        if (currentUser.index > me.index) {
          renations.push("姐姐");
        } else {
          renations.push("妹妹");
        }
      }
    } else {
      console.log("aaaa2");
      renations.push(["", "儿子", "女儿"][currentUser.gender]);
    }
  }
  console.log(renations.join("的"));
  console.log("aaaa9");
  return window.relationship({ text: renations.join("的"), sex: me.gender });
}
