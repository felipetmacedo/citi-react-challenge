type InsertableDatabase = {
  httpStatus: number;
  message: string;
};

type GetableDatabase<Type> = {
  values: [] | Type[];
  httpStatus: number;
};

type RemoveableDatabase = {
  httpStatus: number;
  messageFromDelete: String;
};

type FindableDatabaseValue<Type> = {
  value: Type | undefined;
  httpStatus: number;
};

type UpdatableDatabaseValue = {
  httpStatus: number;
  messageFromUpdate: String;
};

export {
  InsertableDatabase,
  GetableDatabase,
  RemoveableDatabase,
  FindableDatabaseValue,
  UpdatableDatabaseValue,
};
