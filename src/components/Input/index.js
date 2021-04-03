import styles from './styles.module.scss'

export function Input({ name, type, label, placeholder, error, ControlledInput, register }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      {ControlledInput ? (
        <ControlledInput />
      ) : (
        <input 
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  )
}