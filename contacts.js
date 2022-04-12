const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);
// console.log(path.join(__dirname, "db", "contacts.json"));

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log("contactsPath", contactsPath);

const readContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf8");
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts;
};

async function listContacts() {
  return await readContacts();
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  // ...твой код
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts };
