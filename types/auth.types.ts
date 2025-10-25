export interface LoginStartRequest {
    email: string;
  }
  
  export interface WebAuthnOptions {
    publicKey: {
      challenge: string;
      timeout: number;
      rpId: string;
      allowCredentials: Array<{
        type: string;
        id: string;
        transports: string[];
      }>;
      userVerification: string;
    };
  }
  
  export interface LoginStartResponse {
    session_id: string;
    challenge: string;
    webauthn_options: WebAuthnOptions;
  }
  
  export interface CredentialResponse {
    id: string;
    rawId: string;
    response: {
      clientDataJSON: string;
      authenticatorData: string;
      signature: string;
      userHandle: string;
    };
    type: string;
  }
  
  export interface LoginVerifyRequest {
    session_id: string;
    credential_response: CredentialResponse;
  }
  
  export interface LoginVerifyResponse {
    success: boolean;
    merchant: {
      id: string;
      name: string;
      email: string;
      wallet_address: string;
      wallet_type: string;
      created_at: string;
    };
    expires_at: number;
  }