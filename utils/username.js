const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomName() {
    const nameLength = Math.floor(Math.random() * 10) + 5;
    let randomName = "";
    for (let i = 0; i < nameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters[randomIndex];
    }
    return "NV_" + randomName;
}

function generateUsers(numberOfUsers) {
    const usernames = [];
    for (let i = 0; i < numberOfUsers; i++) {
        usernames.push(generateRandomName());
    }
    return usernames;
}

module.exports = {
    generateUsers,
};
