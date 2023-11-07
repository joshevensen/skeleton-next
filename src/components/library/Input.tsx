import { Controller, FieldError } from "react-hook-form";
import LibEditor from "../editor/Editor";

export enum InputType {
  Hidden = "hidden",
  Editor = "editor",
  Text = "text",
  Multiline = "multiline",
  Select = "select",
  Checkbox = "checkbox",
  Number = "number",
  Email = "email",
  Phone = "phone",
}

export interface IOption {
  value: any;
  label: string;
}

type props = {
  name: string;
  label: string;
  control?: any;
  rules?: any;
  placeholder?: string;
  error?: FieldError | undefined;
  type?: InputType;
  options?: IOption[];
  value?: string;
  onChange?: (...event: any[]) => void;
  isInline?: boolean;
  rows?: number;
  autofocus?: boolean;
};

type inputProps = {
  type?: InputType;
  name: string;
  className: string;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur?: () => void;
  placeholder?: string;
  options?: IOption[];
  rows?: number;
  autofocus: boolean;
};

const Inputs: React.FC<inputProps> = ({
  type,
  name,
  className,
  value,
  placeholder,
  onChange,
  onBlur,
  options,
  rows,
  autofocus,
}) => {
  if (type === InputType.Editor) {
    return (
      <LibEditor
        className={className}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

  if (type === InputType.Multiline) {
    if (value === null) value = undefined;

    return (
      <textarea
        className={className}
        id={name}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autofocus}
      />
    );
  }

  if (type === InputType.Select) {
    return (
      <select
        className={className}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autofocus}
      >
        {options!.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (type === InputType.Checkbox) {
    <input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type="checkbox"
    />;
  }

  return (
    <input
      className={className}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      autoFocus={autofocus}
    />
  );
};

const LibInput: React.FC<props> = ({
  name,
  label,
  control,
  rules,
  placeholder,
  error,
  type = InputType.Text,
  options,
  value,
  onChange,
  isInline = false,
  rows = 4,
  autofocus = false,
}) => {
  let inputClasses =
    "block border-0 py-1.5 px-2 text-text placeholder:text-text-light ring-1 ring-border focus:ring-inset focus:ring-secondary";

  let fieldClasses = "";

  if (isInline) {
    fieldClasses = "flex items-center";
    inputClasses += " ml-2";
  } else {
    inputClasses += " w-full";
  }

  if (type !== InputType.Select) {
    inputClasses += " pr-3";
  }

  return (
    <div className={fieldClasses}>
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>

      {control && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputs
              type={type}
              name={name}
              className={inputClasses}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={options}
              rows={rows}
              autofocus={autofocus}
            />
          )}
        />
      )}

      {!control && (
        <Inputs
          type={type}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange!}
          options={options}
          rows={rows}
          autofocus={autofocus}
        />
      )}

      {error && <p className="px-1 text-red">{error.message}</p>}
    </div>
  );
};

export default LibInput;
