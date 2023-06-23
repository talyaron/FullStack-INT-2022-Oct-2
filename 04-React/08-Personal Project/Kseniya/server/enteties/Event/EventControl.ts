import EventModel from "./EventModel";

export const createEvent = async (req: any, res: any) => {
  try {
    const event = req.body;
    const eventDB = await EventModel.create({
      label: event.label,
      eventType: event.eventType,
      date: event.date,
      img: event.img,
      price: event.price,
    });
    res.send(eventDB);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getAllEvents = async (req: any, res: any) => {
  try {
    const events = await EventModel.find({});
    if (!events) throw new Error("no events found");
    res.send(events);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
