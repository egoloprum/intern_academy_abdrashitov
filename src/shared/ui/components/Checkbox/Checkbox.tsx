import { FC } from 'react'

interface CheckboxProps {
  size?: 'large' | 'medium' | 'small' | 'xSmall'
  mode?: 'checked' | 'unchecked' | 'indeterminate' | 'definite'
  disabled?: boolean
}

const Checkbox: FC<CheckboxProps> = ({
  // size='medium',
  // mode='unchecked',
  // disabled=false
}) => {
  return (
    <input type="checkbox" name="" id="" />
  )
}

export default Checkbox
