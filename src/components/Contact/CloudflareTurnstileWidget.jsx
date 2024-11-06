import { useState } from "react"
import Turnstile from "react-turnstile"

export default function TurnstileWidget({ onVerify, disabled = false }) {
  const [verified, setVerified] = useState(false)

  const handleVerify = (token) => {
    setVerified(true)
    onVerify(token)
  }

  return (
    <div className="my-4">
      <Turnstile
        sitekey="0x4AAAAAAAzXJ4yF3diJKVSD"
        onVerify={handleVerify}
        onError={() => setVerified(false)}
        onExpire={() => setVerified(false)}
        disabled={disabled}
      />
      {!verified && (
        <p className="text-orange-600 text-xs mt-1">Please complete the verification</p>
      )}
    </div>
  )
}