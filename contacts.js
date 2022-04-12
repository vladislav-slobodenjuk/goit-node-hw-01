const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log("contactsPath:", contactsPath);

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
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact ? contact : null;
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { id: randomUUID(), name, email, phone };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
  return newContact;
}

module.exports = { listContacts, getContactById, addContact };
