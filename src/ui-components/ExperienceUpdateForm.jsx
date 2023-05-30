/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Experience } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ExperienceUpdateForm(props) {
  const {
    id: idProp,
    experience: experienceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    company: "",
    location: "",
    description: "",
    dateBegin: "",
    dateEnd: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [company, setCompany] = React.useState(initialValues.company);
  const [location, setLocation] = React.useState(initialValues.location);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [dateBegin, setDateBegin] = React.useState(initialValues.dateBegin);
  const [dateEnd, setDateEnd] = React.useState(initialValues.dateEnd);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = experienceRecord
      ? { ...initialValues, ...experienceRecord }
      : initialValues;
    setName(cleanValues.name);
    setCompany(cleanValues.company);
    setLocation(cleanValues.location);
    setDescription(cleanValues.description);
    setDateBegin(cleanValues.dateBegin);
    setDateEnd(cleanValues.dateEnd);
    setErrors({});
  };
  const [experienceRecord, setExperienceRecord] =
    React.useState(experienceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Experience, idProp)
        : experienceModelProp;
      setExperienceRecord(record);
    };
    queryData();
  }, [idProp, experienceModelProp]);
  React.useEffect(resetStateValues, [experienceRecord]);
  const validations = {
    name: [{ type: "Required" }],
    company: [{ type: "Required" }],
    location: [{ type: "Required" }],
    description: [{ type: "Required" }],
    dateBegin: [{ type: "Required" }],
    dateEnd: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          company,
          location,
          description,
          dateBegin,
          dateEnd,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Experience.copyOf(experienceRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExperienceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              company,
              location,
              description,
              dateBegin,
              dateEnd,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company: value,
              location,
              description,
              dateBegin,
              dateEnd,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              location: value,
              description,
              dateBegin,
              dateEnd,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              location,
              description: value,
              dateBegin,
              dateEnd,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Date begin"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateBegin && convertToLocal(new Date(dateBegin))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              company,
              location,
              description,
              dateBegin: value,
              dateEnd,
            };
            const result = onChange(modelFields);
            value = result?.dateBegin ?? value;
          }
          if (errors.dateBegin?.hasError) {
            runValidationTasks("dateBegin", value);
          }
          setDateBegin(value);
        }}
        onBlur={() => runValidationTasks("dateBegin", dateBegin)}
        errorMessage={errors.dateBegin?.errorMessage}
        hasError={errors.dateBegin?.hasError}
        {...getOverrideProps(overrides, "dateBegin")}
      ></TextField>
      <TextField
        label="Date end"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateEnd && convertToLocal(new Date(dateEnd))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              company,
              location,
              description,
              dateBegin,
              dateEnd: value,
            };
            const result = onChange(modelFields);
            value = result?.dateEnd ?? value;
          }
          if (errors.dateEnd?.hasError) {
            runValidationTasks("dateEnd", value);
          }
          setDateEnd(value);
        }}
        onBlur={() => runValidationTasks("dateEnd", dateEnd)}
        errorMessage={errors.dateEnd?.errorMessage}
        hasError={errors.dateEnd?.hasError}
        {...getOverrideProps(overrides, "dateEnd")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || experienceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || experienceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
