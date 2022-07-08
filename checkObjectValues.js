function truthCheck(collection, pre) {
  let temp = collection.slice();
  let flag = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i][pre]) {
      flag++;
    }
  }

  if (flag == temp.length) {
    return true;
  } else {
    return false;
  }
}

truthCheck(
  [{
      name: "Quincy",
      role: "Founder",
      isBot: false
    },
    {
      name: "Naomi",
      role: "",
      isBot: false
    },
    {
      name: "Camperbot",
      role: "Bot",
      isBot: true
    }
  ], "isBot");
