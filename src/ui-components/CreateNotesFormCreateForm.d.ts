/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateNotesFormCreateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type CreateNotesFormCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNotesFormCreateFormOverridesProps = {
    CreateNotesFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateNotesFormCreateFormProps = React.PropsWithChildren<{
    overrides?: CreateNotesFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateNotesFormCreateFormInputValues) => CreateNotesFormCreateFormInputValues;
    onSuccess?: (fields: CreateNotesFormCreateFormInputValues) => void;
    onError?: (fields: CreateNotesFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateNotesFormCreateFormInputValues) => CreateNotesFormCreateFormInputValues;
    onValidate?: CreateNotesFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreateNotesFormCreateForm(props: CreateNotesFormCreateFormProps): React.ReactElement;
