import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCreateNotesForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateNotesForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly Notes?: Notes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly createNotesFormNotesId?: string | null;
}

type LazyCreateNotesForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateNotesForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly Notes: AsyncItem<Notes | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly createNotesFormNotesId?: string | null;
}

export declare type CreateNotesForm = LazyLoading extends LazyLoadingDisabled ? EagerCreateNotesForm : LazyCreateNotesForm

export declare const CreateNotesForm: (new (init: ModelInit<CreateNotesForm>) => CreateNotesForm) & {
  copyOf(source: CreateNotesForm, mutator: (draft: MutableModel<CreateNotesForm>) => MutableModel<CreateNotesForm> | void): CreateNotesForm;
}

type EagerNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes>) => MutableModel<Notes> | void): Notes;
}