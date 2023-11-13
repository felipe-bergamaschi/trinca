import styles from './index.module.css';

interface TextFieldProps {
  type?: HTMLInputElement['type'];
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />

      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
      </label>
    </div>
  )
}