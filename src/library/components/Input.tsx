import { Controller, FieldError } from "react-hook-form";
import LibEditor from "../editor/Editor";
import { InputTypes } from "../enums";
import { InputOption } from "../types";

type props = {
  name: string;
  label: string;
  control?: any;
  rules?: any;
  placeholder?: string;
  error?: FieldError | undefined;
  type?: InputTypes;
  options?: InputOption[];
  value?: string;
  onChange?: (...event: any[]) => void;
  isInline?: boolean;
  rows?: number;
  autofocus?: boolean;
};

type inputProps = {
  type?: InputTypes;
  name: string;
  className: string;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur?: () => void;
  placeholder?: string;
  options?: InputOption[];
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
  if (type === InputTypes.Editor) {
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

  if (type === InputTypes.Multiline) {
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

  if (type === InputTypes.Select) {
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

  if (type === InputTypes.Checkbox) {
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
  type = InputTypes.Text,
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

  if (type !== InputTypes.Select) {
    inputClasses += " pr-3";
  }

  return (
    <div className={fieldClasses}>
      <label className="block text-sm sm:text-base md:mb-1" htmlFor={name}>
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
