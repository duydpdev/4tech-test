import classNames from 'classnames'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export default function TextField({
  placeholder = '',
  ...rest
}: TextFieldProps) {
  return (
    <input
      {...rest}
      type='text'
      className={classNames(
        'w-full rounded-lg border border-white bg-white px-[14px] py-[18.5px] text-base font-medium text-black',
        rest.className
      )}
      placeholder={placeholder}
    />
  )
}
