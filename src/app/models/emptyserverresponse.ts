import {TrashTypes} from "./trashtype";


export class EmptyServerResponse {
  constructor(
    public empties: {
      date: Date,
      dumpsterID: string,
      _id: string,
    }[]
  ) {
  }
}
