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
export declare type CreateNotesFormUpdateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type CreateNotesFormUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNotesFormUpdateFormOverridesProps = {
    CreateNotesFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateNotesFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreateNotesFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    createNotesForm?: any;
    onSubmit?: (fields: CreateNotesFormUpdateFormInputValues) => CreateNotesFormUpdateFormInputValues;
    onSuccess?: (fields: CreateNotesFormUpdateFormInputValues) => void;
    onError?: (fields: CreateNotesFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateNotesFormUpdateFormInputValues) => CreateNotesFormUpdateFormInputValues;
    onValidate?: CreateNotesFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreateNotesFormUpdateForm(props: CreateNotesFormUpdateFormProps): React.ReactElement;
