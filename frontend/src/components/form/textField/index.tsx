import styles from './index.module.css';

interface TextFieldProps {
  type?: HTMLInputElement['type'];
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({
  type = 'text',
  name,
  label,
  placeholder,
  onChange,
}: TextFieldProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
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