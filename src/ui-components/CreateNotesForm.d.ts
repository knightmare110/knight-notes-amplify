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
export declare type CreateNotesFormInputValues = {
    title?: string;
    text?: string;
};
export declare type CreateNotesFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNotesFormOverridesProps = {
    CreateNotesFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateNotesFormProps = React.PropsWithChildren<{
    overrides?: CreateNotesFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateNotesFormInputValues) => CreateNotesFormInputValues;
    onSuccess?: (fields: CreateNotesFormInputValues) => void;
    onError?: (fields: CreateNotesFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateNotesFormInputValues) => CreateNotesFormInputValues;
    onValidate?: CreateNotesFormValidationValues;
} & React.CSSProperties>;
export default function CreateNotesForm(props: CreateNotesFormProps): React.ReactElement;
