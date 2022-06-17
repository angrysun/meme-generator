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


const getReferrers = (list) => {
  const user_list = JSON.parse(JSON.stringify(list))
  const user_list2 = []

  user_list.map(user => (
    user.referrer = user_list.find((object) => {
      if (object.id === user.referrerId) {
        return true;
      }
    })
    , user.referrer = user.referrer && user.referrer.name || null
    , user_list2.push(user)
  ))
  return user_list2
}

let lips = [
  { id: 1, referrerId: 2, name: "Joe" },
  { id: 2, referrerId: null, name: "Jane" },
]

const buy = getReferrers(lips)

getReferrers(lips)

const getReferrers = (user_list) => {
  user_list = JSON.parse(JSON.stringify(user_list))
  user_list2 = [];
  for (i = 0; i < user_list.length; i++) {
    user_list[i].referrer = user_list.find(function (x) {
      if (x.id == user_list[i]["referrerId"]) {
        return true;
      }
    })
    user_list[i].referrer = user_list[i].referrer && user_list[i].referrer.name || null;
    user_list2.push(user_list[i])
  }
  return user_list2
}
