import { IEvent } from "../../pages/Admin/AllEvents/IEvent";

export interface IGenericCard {
  cardInfo: IEvent;
  cardBtnTitle?: string;
  cardBtnFunc?: any;
  needBtn: boolean;
}
