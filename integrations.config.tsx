const integrations = {
  isSanityEnabled: false,  // Changed to false since Sanity is removed
  isStripeEnabled: true,
  isOpenAIEnabled: true,
  isMailchimpEnabled: true,
  isAuthEnabled: false,  // Changed to false since Auth is removed
};

const messages = {
  stripe: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Stripe is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  opanAi: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      OpenAI is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  mailchimp: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Mailchimp is not enabled. Follow the {""}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  auth: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Auth is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  // Add more messages here
};

export { integrations, messages };