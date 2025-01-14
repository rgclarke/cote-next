const ErrorMessage = ({ error }: { error?: string | null }) => {
  if (!error) {
    return null
  }

  return (
    <div className="pt-2 text-rose-500 text-chablis">
      <span>{error}</span>
    </div>
  )
}

export default ErrorMessage
