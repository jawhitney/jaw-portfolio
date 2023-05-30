/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Experience } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExperienceUpdateFormInputValues = {
    name?: string;
    company?: string;
    location?: string;
    description?: string;
    dateBegin?: string;
    dateEnd?: string;
};
export declare type ExperienceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    dateBegin?: ValidationFunction<string>;
    dateEnd?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceUpdateFormOverridesProps = {
    ExperienceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    dateBegin?: PrimitiveOverrideProps<TextFieldProps>;
    dateEnd?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExperienceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExperienceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    experience?: Experience;
    onSubmit?: (fields: ExperienceUpdateFormInputValues) => ExperienceUpdateFormInputValues;
    onSuccess?: (fields: ExperienceUpdateFormInputValues) => void;
    onError?: (fields: ExperienceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExperienceUpdateFormInputValues) => ExperienceUpdateFormInputValues;
    onValidate?: ExperienceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExperienceUpdateForm(props: ExperienceUpdateFormProps): React.ReactElement;
