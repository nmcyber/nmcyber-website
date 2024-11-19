import { useState, useEffect } from "react";
import Turnstile from "react-turnstile";

export default function TurnstileWidget({ onVerify, disabled = false }) {
  const [verified, setVerified] = useState(false);
  const [siteKey, setSiteKey] = useState('');

  useEffect(() => {
    const isDevelopment = import.meta.env.VITE_REACT_APP_DEVELOPMENT;
    const cloudflareSiteKey = isDevelopment 
      ? import.meta.env.VITE_REACT_APP_DEV_CLOUDFLARE_TURNSTILE_SITEKEY : import.meta.env.VITE_REACT_APP_CLOUDFLARE_TURNSTILE_SITEKEY;
    
      if (!cloudflareSiteKey) {
        console.error("Cloudflare Turnstile site key is missing.");
      }
  
      setSiteKey(cloudflareSiteKey);
  }, []);

  const handleVerify = (token) => {
    setVerified(true);
    onVerify(token);
  };
  
  if (!siteKey) {
    return <p className="text-red-500">Turnstile configuration error: Missing site key.</p>;
  }

  // console.log(siteKey);

  return (
    <div className="my-4">
      <Turnstile
        sitekey={siteKey}
        onVerify={handleVerify}
        onError={() => setVerified(false)}
        onExpire={() => setVerified(false)}
        disabled={disabled}
      />
      {!verified && (
        <p className="text-orange-600 text-xs mt-1">Please complete the verification</p>
      )}
    </div>
  );
}