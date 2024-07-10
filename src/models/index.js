// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CreateNotesForm, Notes } = initSchema(schema);

export {
  CreateNotesForm,
  Notes
};