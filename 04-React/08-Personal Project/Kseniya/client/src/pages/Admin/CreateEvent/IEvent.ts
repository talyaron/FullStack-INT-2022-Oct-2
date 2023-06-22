enum EVENT_TYPES {
  concert = "concert",
  festival = "festival",
}

type EVENT_TYPES_LITERALS = keyof typeof EVENT_TYPES;

export interface IEvent {
  eventType: EVENT_TYPES_LITERALS;
  title: string;
  date: string;
  price: number;
  img: string;
}

