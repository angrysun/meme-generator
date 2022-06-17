function orderByName(users) {
  users.sort((a, b) => {
    let first = a.name.toLowerCase(),
      second = b.name.toLowerCase();

    if (first < second) {
      return -1;
    } else if (first > second) {
      return 1;
    } else {
      return 0;
    }
  });
}

const toot = [{ name: "Zelda" }, { name: "Pompeii" }, { name: "demon" }]

orderByName(toot)
