import { useState } from "react"

export const usePhoneInput = () => {
  const [phone, setPhone] = useState("")

  const formatPhoneNumber = (value: string) => {
    let digits = value.replace(/\D/g, "")
    if (digits.startsWith("7")) digits = digits.slice(1)

    let formatted = "+7 ("
    formatted += digits.slice(0, 3)
    if (digits.length > 3) formatted += ") " + digits.slice(3, 6)
    if (digits.length > 6) formatted += "-" + digits.slice(6, 8)
    if (digits.length > 8) formatted += "-" + digits.slice(8, 10)

    return formatted
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value
    const formattedValue = formatPhoneNumber(rawValue)
    setPhone(formattedValue)
  }

  return { phone, handleChange }
}
