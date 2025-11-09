const USER_COUNT = 50000;
let userA = [];
let userB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `user${id}` });

for (let i = 0; i < USER_COUNT; i++) {
    userA.push(createUser(i));
    userB.push(createUser(i + 25000));
}

const commonFriendsFast = (userA, userB) => {
    const startTIme = performance.now();


    const commonFriend = []
    const idListA = new Set(userA.map((user) => user.id));
    userB.forEach((userb) => {
        //o(1) constant time lookup
        if (idListA.has(userb.id)) {
            commonFriend.push(userb);
        }
    });
    const endTIme = performance.now();
    return { count: commonFriend.length, timetoFinish: endTIme - startTIme }

}
console.log(commonFriendsFast(userA, userB))











