console.log("start program");

const { Command } = require("commander");
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
console.log("argv:", argv);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      if (!contactById) {
        console.log("Id Not Found");
        return;
      }
      console.log(contactById);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log("added new contact:", newContact);
      break;

    case "remove":
      const deletedContact = await removeContact(id);
      if (!deletedContact) {
        console.log("Id Not Found");
        return;
      }
      console.log("removed contact:", deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

(async () => invokeAction(argv))();
