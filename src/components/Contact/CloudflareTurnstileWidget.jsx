import Turnstile, { useTurnstile } from "react-turnstile";

// Account ID - 3e90eefc8b7059e6f993c5ccb00c5c2f


export default function TurnstileWidget() {
  const turnstile = useTurnstile();
  return (
    <Turnstile
      sitekey="0x4AAAAAAAzXJ4yF3diJKVSD"
      onVerify={(token) => {
        fetch("/login", {
          method: "POST",
          body: JSON.stringify({ token }),
        }).then((response) => {
          if (!response.ok) turnstile.reset();
        });
      }}
    />
  );
}