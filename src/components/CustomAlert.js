import { Alert } from "@material-tailwind/react"

export function CustomAlert({ message, color }) {
  return (
    <div className="w-6/12 mx-auto pt-8">
      <Alert color={color}>{message.split("/")[1]}</Alert>
    </div>
  )
}
