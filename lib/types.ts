import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
  } from 'kysely'

  export interface Database {
    person: PersonTable;
  }

  export interface PersonTable {
    id: Generated<number>;
    firstname: string;
    lastname: string;
    employed: string;
    date: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
export type Person = Selectable<PersonTable>
export type NewPerson = Insertable<PersonTable>
export type PersonUpdate = Updateable<PersonTable>