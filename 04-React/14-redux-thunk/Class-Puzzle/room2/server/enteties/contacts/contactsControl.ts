import ContactModel from "./contactsModel";

export const getContacts = async (req: any, res: any) => {
  try {
    const contacts = await ContactModel.find({});
    if (!contacts) throw new Error("no contacts found");
    res.send(contacts);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
