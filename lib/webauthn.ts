import { WebAuthnOptions, CredentialResponse } from '@/types/auth.types';

export class WebAuthnHelper {
  /**
   * Convert base64url string to ArrayBuffer
   */
  static base64urlToBuffer(base64url: string): ArrayBuffer {
    const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  /**
   * Convert ArrayBuffer to base64url string
   */
  static bufferToBase64url(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  /**
   * Start WebAuthn authentication
   */
  static async authenticate(options: WebAuthnOptions): Promise<CredentialResponse> {
    // Convert challenge and credential IDs from base64url to ArrayBuffer
    const publicKeyCredentialRequestOptions: PublicKeyCredentialRequestOptions = {
      challenge: this.base64urlToBuffer(options.publicKey.challenge),
      timeout: options.publicKey.timeout,
      rpId: options.publicKey.rpId,
      allowCredentials: options.publicKey.allowCredentials.map((cred) => ({
        type: cred.type as PublicKeyCredentialType,
        id: this.base64urlToBuffer(cred.id),
        transports: cred.transports as AuthenticatorTransport[],
      })),
      userVerification: options.publicKey.userVerification as UserVerificationRequirement,
    };

    // Request credential from browser
    const credential = (await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
    })) as PublicKeyCredential;

    if (!credential) {
      throw new Error('No credential received');
    }

    const response = credential.response as AuthenticatorAssertionResponse;

    // Convert response to format expected by backend
    return {
      id: credential.id,
      rawId: this.bufferToBase64url(credential.rawId),
      response: {
        clientDataJSON: this.bufferToBase64url(response.clientDataJSON),
        authenticatorData: this.bufferToBase64url(response.authenticatorData),
        signature: this.bufferToBase64url(response.signature),
        userHandle: response.userHandle
          ? this.bufferToBase64url(response.userHandle)
          : '',
      },
      type: credential.type,
    };
  }

  /**
   * Check if WebAuthn is supported
   */
  static isSupported(): boolean {
    return (
      window.PublicKeyCredential !== undefined &&
      navigator.credentials !== undefined
    );
  }
}
