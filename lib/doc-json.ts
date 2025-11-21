export const docData = [
    {
        "id": 1,
        "title": "Getting Started with ZendFi - Accept Crypto in Minutes!",
        "route": "/docs",
        "content": {
          "introduction": "Welcome to ZendFi! You're about to join the future of payments. This guide will get you accepting crypto payments in minutes - no blockchain experience needed.",
          "requirements": {
            "title": "What You'll Need",
            "list": [
              "A valid business email address",
              "Your business/organization name",
              "A webhook endpoint URL (optional but recommended for real-time notifications)",
              "Either a Solana wallet address or a modern browser for passkey setup"
            ]
          },
          "steps": [
            {
              "step": 1,
              "title": "Create Your Merchant Account",
              "endpoint": "POST /api/v1/merchants",
              "headers": { "Content-Type": "application/json" },
              "authentication": "No authentication required",
              "body_parameters": [
                { "name": "name", "type": "string", "required": true, "description": "Your business or organization name (2-100 characters)" },
                { "name": "email", "type": "string", "required": true, "description": "Your business email address" },
                { "name": "business_address", "type": "string", "required": true, "description": "Your business address (max 500 characters)" },
                { "name": "webhook_url", "type": "string", "required": false, "description": "HTTPS URL to receive payment notifications" },
                { "name": "wallet_address", "type": "string", "required": false, "description": "Your existing Solana wallet address" },
                { "name": "wallet_generation_method", "type": "string", "required": false, "description": "\"mpc_passkey\" (default), \"mnemonic\", \"simple\", or omit if providing wallet_address" },
                { "name": "settlement_preference", "type": "string", "required": false, "description": "\"auto_usdc\" (default) or \"direct_token\"" }
              ],
              "wallet_methods": [
                {
                  "name": "MPC Passkey Wallet",
                  "type": "Non-Custodial",
                  "description": "Secured by biometrics, no seed phrase, uses multi-party computation.",
                  "example": {
                    "name": "My Online Store",
                    "email": "payments@mystore.com",
                    "business_address": "123 Main Street, San Francisco, CA 94102",
                    "webhook_url": "https://mystore.com/webhooks/zendfi",
                    "wallet_generation_method": "mpc_passkey"
                  },
                  "response": {
                    "status": "200 OK",
                    "example": {
                      "merchant": {
                        "id": "550e8400-e29b-41d4-a716-446655440000",
                        "name": "My Online Store",
                        "wallet_address": "",
                        "wallet_type": "mpc",
                        "settlement_preference": "auto_usdc",
                        "wallet_generation_method": "mpc_passkey"
                      },
                      "api_key": "zendfi_live_abc123def456...",
                      "message": "Merchant created with non-custodial MPC wallet! Complete passkey setup to activate auto-settlements.",
                      "next_steps": {
                        "passkey_setup_url": "https://api.zendfi.tech/merchants/550e8400-e29b-41d4-a716-446655440000/setup-passkey",
                        "setup_required": true,
                        "estimated_time": "5 seconds with Face ID/Touch ID"
                      }
                    }
                  }
                },
                {
                  "name": "BIP39 Mnemonic Wallet",
                  "type": "Custodial",
                  "description": "Traditional wallet with recovery phrase. Custody held by ZendFi.",
                  "example": {
                    "name": "My Online Store",
                    "email": "payments@mystore.com",
                    "business_address": "123 Main Street, San Francisco, CA 94102",
                    "webhook_url": "https://mystore.com/webhooks/zendfi",
                    "wallet_generation_method": "mnemonic"
                  }
                },
                {
                  "name": "Simple Deterministic Wallet",
                  "type": "Custodial",
                  "description": "Fastest setup, ZendFi-managed enterprise security.",
                  "example": {
                    "name": "My Online Store",
                    "email": "payments@mystore.com",
                    "business_address": "123 Main Street, San Francisco, CA 94102",
                    "webhook_url": "https://mystore.com/webhooks/zendfi",
                    "wallet_generation_method": "simple"
                  }
                },
                {
                  "name": "Bring Your Own Wallet",
                  "type": "Non-Custodial",
                  "description": "Use existing Solana wallet (Phantom, Ledger, etc.)",
                  "example": {
                    "name": "My Online Store",
                    "email": "payments@mystore.com",
                    "business_address": "123 Main Street, San Francisco, CA 94102",
                    "webhook_url": "https://mystore.com/webhooks/zendfi",
                    "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
                  }
                }
              ],
              "webhook_setup": {
                "requirements": [
                  "Must use HTTPS",
                  "Respond within 30 seconds",
                  "Return 200 OK",
                  "Be publicly accessible"
                ],
                "events": [
                  "payment.confirmed",
                  "payment.failed",
                  "settlement.completed",
                  "settlement.failed"
                ],
                "reference_link": "./04-webhooks.md"
              },
              "error_responses": [
                { "code": 400, "error": "validation_error", "message": "Business address is required" },
                { "code": 400, "error": "validation_error", "message": "Invalid Solana wallet address format" },
                { "code": 400, "error": "invalid_webhook_url", "message": "Webhook URL must use HTTPS" },
                { "code": 500, "error": "internal_server_error", "message": "Failed to create merchant account" }
              ]
            },
            {
              "step": 2,
              "title": "Complete Passkey Setup (MPC Wallet Only)",
              "methods": {
                "browser": ["Open passkey_setup_url", "Click 'Setup Passkey'", "Authenticate with Face ID/Touch ID", "Done!"],
                "api": "See Passkey Setup Guide at ./05-wallet-management.md#passkey-setup"
              }
            },
            {
              "step": 3,
              "title": "Store Your API Key Securely",
              "recommendations": [
                "Store API key securely; only shown once",
                "Use environment variables (.env)",
                "Use secrets managers for production",
                "Never commit API keys"
              ]
            },
            {
              "step": 4,
              "title": "Test Your Integration",
              "example": {
                "request": {
                  "endpoint": "POST /api/v1/payments",
                  "headers": ["Content-Type: application/json", "Authorization: Bearer YOUR_API_KEY"],
                  "body": {
                    "amount": 1.00,
                    "currency": "USD",
                    "description": "Test Payment",
                    "token": "USDC"
                  }
                },
                "response": {
                  "id": "payment_abc123",
                  "amount": 1.00,
                  "currency": "USD",
                  "status": "Pending",
                  "payment_url": "https://api.zendfi.tech/pay/payment_abc123"
                }
              }
            },
            {
              "step": 5,
              "title": "Monitor Payment Status",
              "endpoint": "GET /api/v1/payments/:id/status",
              "statuses": ["Pending", "Confirmed", "Failed", "Expired"]
            },
            {
              "step": 6,
              "title": "Receive Webhook Notifications",
              "payload_example": {
                "event": "payment.confirmed",
                "payment": {
                  "id": "payment_abc123",
                  "amount": 1.00,
                  "currency": "USD",
                  "status": "Confirmed"
                }
              },
              "security": "Verify webhook signatures"
            }
          ],
          "settlement_preferences": {
            "auto_usdc": {
              "description": "Default, stable USDC settlements after auto conversion.",
              "fees": "1.5% + small network fee"
            },
            "direct_token": {
              "description": "Receive payments in the same crypto token.",
              "fees": "1.5% flat"
            }
          },
          "code_examples": {
            "nodejs": "Express example provided",
            "python": "Flask example provided"
          },
          "next_steps": [
            { "title": "Full Payment API Reference", "link": "./02-payments.md" },
            { "title": "Payment Links", "link": "./03-payment-links.md" },
            { "title": "Webhooks Deep Dive", "link": "./04-webhooks.md" },
            { "title": "Wallet Management", "link": "./05-wallet-management.md" },
            { "title": "Advanced Features", "link": "./06-advanced-features.md" }
          ],
          "support": {
            "email": "support@zendfi.tech",
            "discord": "https://discord.gg/zendfi",
            "tutorials": "https://zendfi.tech/tutorials"
          }
        }
      },
      {
        "id": 2,
        "route": "/docs/api",
        "title": "Payments API - Accept Crypto Like a Boss!",
        "description": "Accept one-time crypto payments with a simple API call for e-commerce checkouts, donations, and more.",
        "sections": [
          {
            "title": "Overview",
            "content": "The Payments API allows you to create one-time crypto payments easily. You’ll get a QR code and a payment URL for customers to pay using USDC, SOL, or USDT."
          },
          {
            "title": "Endpoints",
            "endpoints": [
              {
                "name": "Create a Payment",
                "method": "POST",
                "path": "/api/v1/payments",
                "auth": "Bearer YOUR_API_KEY",
                "description": "Creates a one-time payment request and returns a payment URL and QR code.",
                "parameters": {
                  "amount": "number (required) - USD amount between 0.01 and 10,000.00",
                  "currency": "string (required) - Only 'USD' supported",
                  "token": "string (optional) - 'USDC' (default), 'SOL', or 'USDT'",
                  "description": "string (optional) - Payment description (max 500 chars)",
                  "metadata": "object (optional) - Custom data for your reference",
                  "webhook_url": "string (optional) - Override default webhook URL",
                  "settlement_preference_override": "string (optional) - 'auto_usdc' or 'direct_token'",
                  "allow_custom_amount": "boolean (optional) - Enable pay-what-you-want",
                  "minimum_amount": "number (conditional) - Required if allow_custom_amount=true",
                  "maximum_amount": "number (optional)",
                  "suggested_amount": "number (optional)"
                },
                "examples": [
                  {
                    "title": "Simple USDC Payment",
                    "request": {
                      "amount": 99.99,
                      "currency": "USD",
                      "description": "Premium Plan - Annual Subscription",
                      "token": "USDC",
                      "metadata": {
                        "customer_id": "cus_12345",
                        "plan": "premium_annual",
                        "seats": 5
                      }
                    },
                    "response": {
                      "id": "550e8400-e29b-41d4-a716-446655440000",
                      "amount": 99.99,
                      "currency": "USD",
                      "status": "Pending",
                      "qr_code": "solana:6qWDyySDsrWbUqXCzwaxVYc47xTaZVUEdeC9apdo6Ewa?...",
                      "payment_url": "https://api.zendfi.tech/pay/550e8400-e29b-41d4-a716-446655440000",
                      "expires_at": "2025-10-26T12:30:00.000Z"
                    }
                  },
                  {
                    "title": "Pay-What-You-Want Payment",
                    "request": {
                      "amount": 10.0,
                      "currency": "USD",
                      "description": "Support our open-source project",
                      "allow_custom_amount": true,
                      "minimum_amount": 1.0,
                      "maximum_amount": 1000.0,
                      "suggested_amount": 10.0
                    }
                  },
                  {
                    "title": "SOL Payment",
                    "request": {
                      "amount": 50.0,
                      "currency": "USD",
                      "token": "SOL",
                      "description": "Coffee Subscription Box"
                    }
                  },
                  {
                    "title": "Payment with Custom Webhook",
                    "request": {
                      "amount": 29.99,
                      "currency": "USD",
                      "description": "Event Ticket - VIP Pass",
                      "webhook_url": "https://mytickets.com/webhooks/payment-confirmed"
                    }
                  }
                ]
              },
              {
                "name": "Get Payment Details",
                "method": "GET",
                "path": "/api/v1/payments/:id",
                "description": "Retrieves full details of a payment including metadata, settlement info, and transaction signatures."
              },
              {
                "name": "Get Payment Status",
                "method": "GET",
                "path": "/api/v1/payments/:id/status",
                "description": "Fetches only the payment status — useful for polling or checking confirmations."
              }
            ]
          },
          {
            "title": "Error Responses",
            "examples": [
              {
                "code": 400,
                "error": "Invalid payment amount: Amount must be between $0.01 and $10,000.00"
              },
              {
                "code": 401,
                "error": "Invalid or missing API key"
              },
              {
                "code": 404,
                "error": "Payment not found"
              },
              {
                "code": 429,
                "error": "Payment limits exceeded"
              },
              {
                "code": 500,
                "error": "Failed to create payment"
              }
            ]
          },
          {
            "title": "Pay-What-You-Want Payments",
            "description": "Flexible payment mode allowing users to set custom amounts between min and max values."
          },
          {
            "title": "Payment Splits",
            "description": "Split payments among multiple recipients automatically for commissions, affiliates, or revenue sharing.",
            "example": {
              "amount": 100.0,
              "currency": "USD",
              "split_recipients": [
                { "wallet_address": "7xKX...", "percentage": 80.0 },
                { "wallet_address": "9yJK...", "percentage": 15.0 },
                { "wallet_address": "4mNK...", "percentage": 5.0 }
              ]
            }
          },
          {
            "title": "Idempotency",
            "description": "Prevents duplicate payments by reusing the same Idempotency-Key for identical requests within 24 hours."
          },
          {
            "title": "Testing",
            "description": "Use Solana Devnet for testing payments with free SOL/USDC from faucet.solana.com. Includes sample wallets and test scenarios."
          }
        ]
      }, 
      {
        "id": 3,
        "route": "/docs/payment-links",
        "title": "Payment Links - Your Reusable Payment Superpower!",
        "description": "Reusable payment URLs in ZendFi that can be shared anywhere and used multiple times. Ideal for social media, e-commerce, invoicing, events, or donations.",
        "sections": [
          {
            "heading": "What Are Payment Links?",
            "content": "Payment links are reusable payment URLs you can share with customers. Unlike one-time payments, they can be used multiple times.",
            "features": [
              "Reusable (optional use limits)",
              "Hosted checkout pages included",
              "Automatic QR code generation",
              "Expiration dates supported",
              "Track usage counts",
              "Custom metadata support"
            ],
            "use_cases": [
              "E-commerce product pages",
              "Social media bio links",
              "Email campaigns",
              "Professional invoicing",
              "Event ticketing",
              "Donations"
            ]
          },
          {
            "heading": "Create a Payment Link",
            "endpoint": {
              "method": "POST",
              "path": "/api/v1/payment-links",
              "auth": "Bearer YOUR_API_KEY"
            },
            "request_params": [
              { "name": "amount", "type": "number", "required": true, "description": "Payment amount in USD (min: 0.01, max: 10,000)" },
              { "name": "currency", "type": "string", "required": true, "description": "Currency code (currently only 'USD' supported)" },
              { "name": "token", "type": "string", "required": false, "description": "Token to receive (USDC, SOL, USDT). Default: USDC" },
              { "name": "description", "type": "string", "required": false, "description": "Description shown on checkout page" },
              { "name": "max_uses", "type": "integer", "required": false, "description": "Maximum number of uses (unlimited if not set)" },
              { "name": "expires_at", "type": "datetime", "required": false, "description": "ISO 8601 expiration date (e.g., 2024-12-31T23:59:59Z)" },
              { "name": "metadata", "type": "object", "required": false, "description": "Custom data to attach (max 16KB JSON)" }
            ],
            "response_fields": [
              "id",
              "link_code",
              "payment_url",
              "hosted_page_url",
              "amount",
              "currency",
              "token",
              "max_uses",
              "uses_count",
              "expires_at",
              "is_active",
              "created_at"
            ],
            "examples": [
              {
                "title": "Example 1: Simple Product Payment Link (USDC)",
                "request": {
                  "amount": 49.99,
                  "currency": "USD",
                  "token": "USDC",
                  "description": "Premium Subscription - Annual Plan",
                  "metadata": {
                    "product_id": "premium_annual",
                    "plan": "yearly",
                    "tier": "premium"
                  }
                },
                "response": {
                  "id": "550e8400-e29b-41d4-a716-446655440000",
                  "link_code": "pyl_hk3n7x9m2q",
                  "payment_url": "https://zendfi.tech/pay/link/pyl_hk3n7x9m2q",
                  "hosted_page_url": "https://zendfi.tech/checkout/pyl_hk3n7x9m2q",
                  "amount": 49.99,
                  "currency": "USD",
                  "token": "USDC",
                  "max_uses": null,
                  "uses_count": 0,
                  "expires_at": null,
                  "is_active": true,
                  "created_at": "2024-01-15T10:30:00Z"
                }
              },
              {
                "title": "Example 2: Limited-Use Event Ticket Link",
                "request": {
                  "amount": 99.0,
                  "currency": "USD",
                  "token": "USDC",
                  "description": "Web3 Conference 2024 - General Admission",
                  "max_uses": 100,
                  "expires_at": "2024-03-01T00:00:00Z",
                  "metadata": {
                    "event_name": "Web3 Conference 2024",
                    "ticket_type": "general_admission",
                    "venue": "Convention Center"
                  }
                },
                "response": {
                  "id": "660e8400-e29b-41d4-a716-446655440001",
                  "link_code": "pyl_event_conf2024",
                  "payment_url": "https://zendfi.tech/pay/link/pyl_event_conf2024",
                  "hosted_page_url": "https://zendfi.tech/checkout/pyl_event_conf2024",
                  "amount": 99.0,
                  "currency": "USD",
                  "token": "USDC",
                  "max_uses": 100,
                  "uses_count": 0,
                  "expires_at": "2024-03-01T00:00:00Z",
                  "is_active": true,
                  "created_at": "2024-01-15T10:30:00Z"
                }
              },
              {
                "title": "Example 3: SOL Payment Link with Expiration",
                "request": {
                  "amount": 25.0,
                  "currency": "USD",
                  "token": "SOL",
                  "description": "Monthly Membership - January 2024",
                  "max_uses": 500,
                  "expires_at": "2024-01-31T23:59:59Z",
                  "metadata": {
                    "membership_month": "2024-01",
                    "type": "monthly"
                  }
                },
                "response": {
                  "id": "770e8400-e29b-41d4-a716-446655440002",
                  "link_code": "pyl_membership_jan2024",
                  "payment_url": "https://zendfi.tech/pay/link/pyl_membership_jan2024",
                  "hosted_page_url": "https://zendfi.tech/checkout/pyl_membership_jan2024",
                  "amount": 25.0,
                  "currency": "USD",
                  "token": "SOL",
                  "max_uses": 500,
                  "uses_count": 0,
                  "expires_at": "2024-01-31T23:59:59Z",
                  "is_active": true,
                  "created_at": "2024-01-15T10:30:00Z"
                }
              },
              {
                "title": "Example 4: Social Media Bio Link",
                "request": {
                  "amount": 5.0,
                  "currency": "USD",
                  "token": "USDC",
                  "description": "☕ Buy Me a Coffee - Thanks for your support!",
                  "metadata": {
                    "creator": "awesome_creator",
                    "platform": "instagram",
                    "link_location": "bio"
                  }
                },
                "response": {
                  "id": "880e8400-e29b-41d4-a716-446655440003",
                  "link_code": "pyl_coffee_tip",
                  "payment_url": "https://zendfi.tech/pay/link/pyl_coffee_tip",
                  "hosted_page_url": "https://zendfi.tech/checkout/pyl_coffee_tip",
                  "amount": 5.0,
                  "currency": "USD",
                  "token": "USDC",
                  "max_uses": null,
                  "uses_count": 0,
                  "expires_at": null,
                  "is_active": true,
                  "created_at": "2024-01-15T10:30:00Z"
                }
              }
            ]
          },
          {
            "heading": "Get Payment Link Details",
            "endpoint": {
              "method": "GET",
              "path": "/api/v1/payment-links/{link_code}",
              "auth": "None"
            },
            "example_response": {
              "id": "550e8400-e29b-41d4-a716-446655440000",
              "link_code": "pyl_hk3n7x9m2q",
              "payment_url": "https://zendfi.tech/pay/link/pyl_hk3n7x9m2q",
              "hosted_page_url": "https://zendfi.tech/checkout/pyl_hk3n7x9m2q",
              "amount": 49.99,
              "currency": "USD",
              "token": "USDC",
              "max_uses": null,
              "uses_count": 47,
              "expires_at": null,
              "is_active": true,
              "created_at": "2024-01-15T10:30:00Z"
            }
          },
          {
            "heading": "Create Payment from Link",
            "endpoint": {
              "method": "POST",
              "path": "/api/v1/payment-links/{link_code}/pay",
              "auth": "None"
            },
            "example_response": {
              "payment_id": "990e8400-e29b-41d4-a716-446655440004",
              "merchant_name": "Awesome Coffee Shop",
              "amount_usd": 49.99,
              "currency": "USD",
              "token": "USDC",
              "description": "Premium Subscription - Annual Plan",
              "qr_code": "solana:ABC123...XYZ789?amount=49.99",
              "payment_url": "solana:ABC123...XYZ789?amount=49.99",
              "wallet_address": "ABC123...XYZ789",
              "expires_at": "2024-01-15T10:45:00Z",
              "status": "pending",
              "solana_network": "mainnet-beta",
              "allow_custom_amount": false
            }
          },
          {
            "heading": "Error Responses",
            "errors": [
              { "code": 400, "error": "Invalid payment link parameters" },
              { "code": 404, "error": "Payment link not found" },
              { "code": 410, "error": "Payment link no longer available" },
              { "code": 500, "error": "Internal server error" }
            ]
          },
          {
            "heading": "Hosted Checkout Pages",
            "description": "Every payment link includes a mobile-optimized hosted checkout page with QR code and live payment updates.",
            "features": [
              "Mobile-optimized design",
              "Professional UI",
              "QR code display",
              "Live countdown timer",
              "Real-time status updates",
              "Mainnet + Devnet support"
            ]
          },
          {
            "heading": "Use Cases & Best Practices",
            "cases": [
              "E-commerce store product links",
              "Social media tips",
              "Event ticketing",
              "Professional invoicing",
              "Donations and fundraising"
            ]
          },
          {
            "heading": "Testing Payment Links",
            "steps": [
              "Create a test link on devnet",
              "Visit hosted page",
              "Create payment session",
              "Complete payment using wallet",
              "Monitor webhooks"
            ]
          },
          {
            "heading": "Code Example",
            "language": "javascript",
            "framework": "Node.js/Express",
            "description": "Example of creating and sharing payment links via Express backend."
          }
        ]
      }, 
      {
        "id": 4,
        "route": "/docs/wallet-management",
        "title": "Wallet Management - Your Crypto Treasury! 💰",
        "description": "Manage your merchant wallet, check balances, export keys, and withdraw funds to external addresses. Supports MPC and regular wallets.",
        "sections": [
          {
            "title": "Understanding Your Wallet",
            "wallet_types": [
              {
                "name": "MPC Passkey Wallet (Recommended)",
                "features": [
                  "Non-custodial: You control your funds via passkey",
                  "No seed phrases: Uses Face ID/Touch ID instead",
                  "Can export key: Full control when needed",
                  "Can withdraw: Transfer funds to any Solana address",
                  "Passkey protected: All sensitive operations require biometric auth"
                ]
              },
              {
                "name": "BIP39 Mnemonic Wallet",
                "features": [
                  "Custodial: ZendFi manages the key",
                  "HD wallet derived from mnemonic phrase",
                  "Cannot export key (server-managed)",
                  "Cannot withdraw via API (support required)"
                ]
              },
              {
                "name": "Simple Deterministic Wallet",
                "features": [
                  "Custodial: ZendFi manages the key",
                  "Fastest setup: generated instantly",
                  "Cannot export key (server-managed)",
                  "Cannot withdraw via API (support required)"
                ]
              },
              {
                "name": "Bring Your Own Wallet",
                "features": [
                  "Non-custodial: You manage your own wallet (Phantom, Solflare, Ledger)",
                  "No key management: use your existing wallet",
                  "Cannot export key (you already own it)",
                  "Can withdraw directly using your wallet"
                ]
              }
            ]
          },
          {
            "title": "Get Wallet Info & Balance",
            "endpoint": "GET /api/v1/merchants/me/wallet",
            "authentication": "Authorization: Bearer YOUR_API_KEY or session cookie",
            "response_fields": {
              "wallet_address": "string - Solana wallet address (base58)",
              "wallet_type": "string - Wallet type ('mpc', 'custodial', 'external', 'unknown')",
              "sol_balance": "number - Balance in SOL",
              "usdc_balance": "number - USDC balance",
              "usdc_token_account": "string - Token account address",
              "has_mpc_wallet": "boolean - Whether an active MPC wallet exists"
            },
            "examples": [
              {
                "title": "Check MPC Wallet Balance",
                "request": "curl https://api.zendfi.tech/api/v1/merchants/me/wallet -H 'Authorization: Bearer zfi_test_abc123...'",
                "response": {
                  "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
                  "wallet_type": "mpc",
                  "sol_balance": 0.5,
                  "usdc_balance": 1234.56,
                  "usdc_token_account": "8zKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsV",
                  "has_mpc_wallet": true
                },
                "notes": [
                  "MPC wallet with 0.5 SOL and 1234.56 USDC",
                  "Wallet ready for payments with active token account"
                ]
              },
              {
                "title": "Check Regular Wallet Balance",
                "request": "curl https://api.zendfi.tech/api/v1/merchants/me/wallet -H 'Authorization: Bearer zfi_live_xyz789...'",
                "response": {
                  "wallet_address": "9yKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsW",
                  "wallet_type": "custodial",
                  "sol_balance": 2.35,
                  "usdc_balance": 5678.90,
                  "usdc_token_account": "AzKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsX",
                  "has_mpc_wallet": false
                },
                "notes": [
                  "Custodial wallet managed by ZendFi",
                  "Contact support for withdrawals"
                ]
              },
              {
                "title": "Check External Wallet Balance",
                "request": "curl https://api.zendfi.tech/api/v1/merchants/me/wallet -H 'Authorization: Bearer zfi_live_def456...'",
                "response": {
                  "wallet_address": "BxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsY",
                  "wallet_type": "external",
                  "sol_balance": 10.5,
                  "usdc_balance": 0.0,
                  "usdc_token_account": "CzKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsZ",
                  "has_mpc_wallet": false
                },
                "notes": [
                  "External wallet (Phantom, Solflare, etc.)",
                  "Fully controlled by user"
                ]
              }
            ]
          },
          {
            "title": "Export Private Key (MPC Only)",
            "endpoint": "POST /api/v1/merchants/me/wallet/export",
            "authentication": "Bearer token or session cookie",
            "parameters": {
              "passkey_signature": {
                "credential_id": "string",
                "authenticator_data": "array",
                "signature": "array",
                "client_data_json": "array"
              }
            },
            "response_fields": {
              "wallet_address": "string",
              "private_key_base58": "string - sensitive",
              "public_key": "string",
              "warning": "string - key security warning",
              "export_timestamp": "datetime - ISO 8601"
            },
            "examples": [
              {
                "title": "Export Private Key (with Passkey)",
                "request": "curl -X POST https://api.zendfi.tech/api/v1/merchants/me/wallet/export ...",
                "response": {
                  "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
                  "private_key_base58": "5Kz8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJR4zHYQZ3...",
                  "public_key": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
                  "warning": "⚠️ CRITICAL: Store this private key securely.",
                  "export_timestamp": "2024-01-15T10:30:45Z"
                },
                "notes": [
                  "Store key securely (password manager, HSM)",
                  "Never commit or share",
                  "Audit logs track all key exports"
                ]
              }
            ],
            "errors": [
              {
                "code": 400,
                "error": "MPC wallet not found",
                "message": "This merchant doesn't have an MPC wallet. Only MPC wallets support key export."
              },
              {
                "code": 401,
                "error": "Invalid passkey signature",
                "message": "Ensure passkey authentication and credential ID are correct."
              },
              {
                "code": 500,
                "error": "Failed to combine shards",
                "message": "Internal MPC error. Contact support."
              }
            ]
          },
          {
            "title": "Withdraw Funds",
            "endpoint": "POST /api/v1/merchants/me/wallet/withdraw",
            "authentication": "Bearer token or session cookie",
            "parameters": {
              "to_address": "string - Destination wallet (base58)",
              "amount": "number - must be > 0",
              "token": "string - 'Sol' or 'Usdc'",
              "passkey_signature": {
                "credential_id": "string",
                "authenticator_data": "array",
                "signature": "array",
                "client_data_json": "array"
              }
            },
            "response_fields": {
              "success": "boolean",
              "transaction_signature": "string",
              "from_address": "string",
              "to_address": "string",
              "amount": "number",
              "token": "string",
              "explorer_url": "string - Solscan link"
            },
            "examples": [
              {
                "title": "Withdraw SOL to Phantom Wallet",
                "request": "curl -X POST https://api.zendfi.tech/api/v1/merchants/me/wallet/withdraw ...",
                "response": {
                  "success": true,
                  "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJ...",
                  "from_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
                  "to_address": "9yKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsW",
                  "amount": 0.5,
                  "token": "Sol",
                  "explorer_url": "https://solscan.io/tx/5KzZ8LWvZh7NYjJvPhHGYn..."
                },
                "notes": ["Successful SOL withdrawal to Phantom wallet"]
              },
              {
                "title": "Withdraw USDC to Exchange",
                "response": {
                  "success": true,
                  "transaction_signature": "6LzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJ...",
                  "amount": 1000.0,
                  "token": "Usdc"
                },
                "notes": ["USDC withdrawal to exchange deposit address"]
              },
              {
                "title": "Withdraw Small Amount (Test)",
                "response": {
                  "success": true,
                  "transaction_signature": "7LzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJ...",
                  "amount": 0.01,
                  "token": "Usdc",
                  "explorer_url": "https://solscan.io/?cluster=devnet/tx/7LzZ8LWv..."
                },
                "notes": ["Testing small withdrawal on devnet"]
              }
            ],
            "errors": [
              { "code": 400, "error": "Amount must be greater than 0" },
              { "code": 400, "error": "Invalid destination address" },
              { "code": 400, "error": "MPC wallet not found" },
              { "code": 401, "error": "Invalid passkey signature" },
              { "code": 500, "error": "Insufficient balance" }
            ]
          },
          {
            "title": "Passkey Setup (MPC Wallets)",
            "why_passkey": [
              "Secure (Face ID, Touch ID, Windows Hello)",
              "No passwords",
              "Fast and private",
              "Cross-device compatible"
            ],
            "setup_flow": [
              "Create merchant with wallet_generation_method: 'mpc_passkey'",
              "Receive passkey_setup_url",
              "Register Passkey (Face ID/Touch ID)",
              "Wallet auto-created after setup"
            ],
            "endpoints": [
              {
                "endpoint": "GET /merchants/{merchant_id}/setup-passkey",
                "authentication": "None",
                "purpose": "Displays setup UI and initializes passkey registration"
              },
              {
                "endpoint": "GET /api/merchants/{merchant_id}/passkey-status",
                "response": {
                  "has_passkey": true,
                  "has_mpc_wallet": true,
                  "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
                },
                "purpose": "Poll to check passkey and MPC wallet status"
              },
              {
                "endpoint": "POST /api/v1/webauthn/register/start",
                "request": {
                  "merchant_id": "550e8400-e29b-41d4-a716-446655440000",
                  "email": "merchant@example.com",
                  "display_name": "Awesome Coffee Shop"
                },
                "response": {
                  "challenge_id": "660e8400-e29b-41d4-a716-446655440001",
                  "options": {
                    "challenge": "abc123...",
                    "rp": { "name": "ZendFi", "id": "api.zendfi.tech" },
                    "user": {
                      "id": "550e8400-e29b-41d4-a716-446655440000",
                      "name": "merchant@example.com",
                      "displayName": "Awesome Coffee Shop"
                    }
                  }
                }
              },
              {
                "endpoint": "POST /api/v1/webauthn/register/finish",
                "description": "Completes WebAuthn registration after client-side attestation"
              }
            ]
          }
        ]
      },    
      {
        "id": 5,
        "route": "/docs/webhooks",
        "title": "Webhooks - Stay in Sync with Payment Events!",
        "description": "Webhooks are how ZendFi notifies your application when important payment events happen - like when a payment is confirmed, when settlement completes, or when something fails. Think of webhooks as your real-time notification system.",
        "sections": [
          {
            "title": "What Are Webhooks?",
            "content": {
              "overview": "Webhooks are HTTP POST requests that ZendFi sends to your server whenever something important happens with your payments. Instead of constantly polling our API, we'll notify you instantly!",
              "benefits": [
                "Real-time notifications: Know instantly when payments confirm",
                "Automatic delivery: No need to poll our API constantly",
                "Secure: HMAC-SHA256 signature verification",
                "Reliable: Automatic retry with exponential backoff",
                "Complete data: Full payment details in every webhook"
              ],
              "how_it_works": [
                "You configure a webhook URL when creating your merchant account",
                "Customer makes a payment",
                "ZendFi detects the payment on-chain",
                "ZendFi sends an HTTPS POST request to your webhook URL",
                "Your server processes the webhook and returns 200 OK",
                "If delivery fails, ZendFi automatically retries (up to 5 times)"
              ]
            }
          },
          {
            "title": "Webhook Events",
            "content": {
              "description": "ZendFi sends webhooks for all important payment lifecycle events.",
              "events": [
                {
                  "event_type": "PaymentCreated",
                  "description": "New payment was created",
                  "trigger": "Immediately after payment creation via API or payment link"
                },
                {
                  "event_type": "PaymentConfirmed",
                  "description": "Payment confirmed on-chain",
                  "trigger": "After Solana transaction is verified (usually 30-60 seconds)"
                },
                {
                  "event_type": "PaymentFailed",
                  "description": "Payment failed verification",
                  "trigger": "If transaction verification fails or times out"
                },
                {
                  "event_type": "PaymentExpired",
                  "description": "Payment expired without completion",
                  "trigger": "After 15-minute expiration window passes"
                },
                {
                  "event_type": "SettlementCompleted",
                  "description": "Funds settled to your wallet",
                  "trigger": "After auto-conversion or direct token settlement completes"
                }
              ]
            }
          },
          {
            "title": "Webhook Payload Structure",
            "content": {
              "example": {
                "event": "PaymentConfirmed",
                "payment": {
                  "id": "550e8400-e29b-41d4-a716-446655440000",
                  "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
                  "amount_usd": 99.99,
                  "amount_ngn": null,
                  "status": "Confirmed",
                  "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJR4zHYQZ...",
                  "customer_wallet": "ABC123...XYZ789",
                  "metadata": {
                    "order_id": "ORDER-12345",
                    "customer_email": "customer@example.com"
                  }
                },
                "timestamp": "2024-01-15T10:30:45Z",
                "signature": "t=1705318245,v1=a2f8c9d3e4b5a6c7d8e9f0a1b2c3d4e5..."
              },
              "fields": [
                { "name": "event", "type": "string", "description": "Event type (e.g., 'PaymentConfirmed')" },
                { "name": "payment", "type": "object", "description": "Complete payment details" },
                { "name": "timestamp", "type": "datetime", "description": "When the webhook was generated" },
                { "name": "signature", "type": "string", "description": "HMAC-SHA256 signature for verification" }
              ]
            }
          },
          {
            "title": "Webhook Event Examples",
            "content": {
              "examples": [
                {
                  "event": "PaymentCreated",
                  "purpose": "Sent immediately when a payment is created (via API or payment link)",
                  "actions": [
                    "Mark order as 'awaiting payment'",
                    "Show 'Payment pending' message",
                    "Set 15-minute expiration timer"
                  ]
                },
                {
                  "event": "PaymentConfirmed",
                  "purpose": "Sent when payment is verified on-chain",
                  "actions": [
                    "Mark order as paid",
                    "Deliver digital goods/services",
                    "Send confirmation email",
                    "Update inventory",
                    "Show 'Payment successful!' message"
                  ]
                },
                {
                  "event": "PaymentFailed",
                  "purpose": "Sent when payment verification fails",
                  "actions": [
                    "Mark order as failed",
                    "Notify customer of failure",
                    "Offer retry option"
                  ]
                },
                {
                  "event": "PaymentExpired",
                  "purpose": "Sent when the 15-minute payment window expires",
                  "actions": [
                    "Mark order as expired",
                    "Send 'Payment timeout' email",
                    "Offer 'Try again' button"
                  ]
                },
                {
                  "event": "SettlementCompleted",
                  "purpose": "Sent when funds are settled to your wallet",
                  "actions": [
                    "Update revenue tracking",
                    "Log for accounting",
                    "Update analytics"
                  ]
                }
              ]
            }
          },
          {
            "title": "Webhook Security",
            "content": {
              "signature_format": "t=timestamp,v1=hmac_sha256_signature",
              "fields": [
                { "name": "t", "description": "Unix timestamp when webhook was sent" },
                { "name": "v1", "description": "HMAC-SHA256 hex digest" }
              ],
              "verification_steps": [
                "Extract timestamp 't' from signature",
                "Construct signed payload '{timestamp}:{webhook_json}'",
                "Compute HMAC-SHA256 using webhook secret",
                "Compare computed signature with provided v1",
                "Verify timestamp is within 5 minutes"
              ],
              "best_practices": [
                "Keep webhook secret private",
                "Store in environment variables",
                "Always verify every webhook"
              ]
            }
          },
          {
            "title": "Verify Webhook Signature",
            "endpoint": {
              "method": "POST",
              "path": "/api/v1/webhooks/verify",
              "auth": "Bearer YOUR_API_KEY",
              "params": [
                { "name": "payload", "type": "string", "required": true, "description": "Raw JSON webhook payload" },
                { "name": "signature", "type": "string", "required": true, "description": "Signature from webhook" }
              ],
              "responses": [
                { "valid": true, "message": "Webhook signature is valid", "timestamp_age_seconds": 3 },
                { "valid": false, "message": "Webhook signature expired (420 seconds old, max 300)", "timestamp_age_seconds": 420 },
                { "valid": false, "message": "Webhook signature is invalid", "timestamp_age_seconds": 5 }
              ]
            }
          },
          {
            "title": "List Webhook Events",
            "endpoint": {
              "method": "GET",
              "path": "/api/v1/webhooks",
              "auth": "Bearer YOUR_API_KEY",
              "description": "Get a history of all webhook events sent to your endpoint",
              "status_values": [
                { "status": "Pending", "description": "Webhook queued for delivery" },
                { "status": "Delivered", "description": "Successfully delivered (HTTP 2xx response)" },
                { "status": "Failed", "description": "Temporary failure, will retry" },
                { "status": "Exhausted", "description": "All retry attempts failed, moved to DLQ" }
              ]
            }
          },
          {
            "title": "Retry Failed Webhooks",
            "content": {
              "retry_schedule": [
                { "attempt": 1, "delay": "1 minute" },
                { "attempt": 2, "delay": "5 minutes" },
                { "attempt": 3, "delay": "15 minutes" },
                { "attempt": 4, "delay": "1 hour" },
                { "attempt": 5, "delay": "24 hours" }
              ],
              "manual_retry": {
                "method": "POST",
                "path": "/api/v1/webhooks/{webhook_id}/retry",
                "params": [
                  { "name": "webhook_id", "type": "UUID", "description": "The webhook event ID" }
                ],
                "response": {
                  "message": "Webhook retry triggered",
                  "webhook_id": "660e8400-e29b-41d4-a716-446655440002"
                }
              }
            }
          },
          {
            "title": "Dead Letter Queue (DLQ)",
            "content": {
              "reason_examples": [
                "Server down",
                "Webhook URL unreachable",
                "Non-2xx response",
                "Timeout > 30s",
                "SSL issues"
              ],
              "list_endpoint": "GET /admin/webhooks/dlq",
              "resolve_endpoint": {
                "method": "POST",
                "path": "/admin/webhooks/dlq/{dlq_id}/resolve",
                "body": {
                  "resolution_status": "resolved",
                  "resolution_notes": "Fixed webhook URL and manually retried"
                },
                "response": {
                  "message": "DLQ entry resolved",
                  "status": "resolved"
                }
              }
            }
          },
          {
            "title": "Testing Webhooks",
            "steps": [
              "Use ngrok to expose local server: ngrok http 3000",
              "Update webhook URL with ngrok public URL",
              "Create test payment via /api/v1/payments",
              "Monitor for PaymentCreated and PaymentConfirmed webhooks",
              "Alternatively use webhook.site for testing"
            ]
          }
        ]
      }, 
      {
        "id": 6,
        "route": "/docs/advanced",
        "title": "Advanced Features - Level Up Your Payments!",
        "description": "Enterprise-grade payment features including splits, subscriptions, installments, escrow, and invoices",
        "sections": [
          {
            "name": "Payment Splits",
            "status": "Available Now",
            "description": "Automatically distribute a single payment among multiple recipients - perfect for marketplaces, affiliate programs, revenue sharing, and multi-vendor platforms",
            "use_cases": [
              "Marketplaces: Split between seller, platform fee, and payment processor",
              "Affiliates: Share revenue with referral partners",
              "Creators: Split royalties with collaborators",
              "Agencies: Distribute payments among team members",
              "Platforms: Revenue sharing (e.g., Spotify-style splits)"
            ],
            "endpoint": {
              "method": "POST",
              "path": "/api/v1/payments",
              "authentication": "Bearer YOUR_API_KEY"
            },
            "request_parameters": {
              "basic_fields": [
                {
                  "name": "amount",
                  "type": "number",
                  "required": true,
                  "description": "Total payment amount in USD"
                },
                {
                  "name": "currency",
                  "type": "string",
                  "required": true,
                  "description": "Currency code (USD only)"
                },
                {
                  "name": "token",
                  "type": "string",
                  "required": false,
                  "description": "Token to receive (USDC, SOL, USDT)"
                },
                {
                  "name": "description",
                  "type": "string",
                  "required": false,
                  "description": "Payment description"
                },
                {
                  "name": "metadata",
                  "type": "object",
                  "required": false,
                  "description": "Custom data (max 16KB JSON)"
                }
              ],
              "split_fields": [
                {
                  "name": "split_recipients",
                  "type": "array",
                  "required": false,
                  "description": "Array of split recipient objects"
                },
                {
                  "name": "split_recipients[].recipient_wallet",
                  "type": "string",
                  "required": true,
                  "description": "Solana wallet address (base58)"
                },
                {
                  "name": "split_recipients[].recipient_name",
                  "type": "string",
                  "required": false,
                  "description": "Recipient name for reference"
                },
                {
                  "name": "split_recipients[].percentage",
                  "type": "number",
                  "required": "conditional",
                  "description": "Percentage of payment (0-100)"
                },
                {
                  "name": "split_recipients[].fixed_amount_usd",
                  "type": "number",
                  "required": "conditional",
                  "description": "Fixed USD amount"
                },
                {
                  "name": "split_recipients[].split_order",
                  "type": "number",
                  "required": false,
                  "description": "Order of execution (default: 0)"
                }
              ]
            },
            "response_fields": [
              {
                "name": "id",
                "type": "UUID",
                "description": "Payment ID"
              },
              {
                "name": "amount",
                "type": "number",
                "description": "Payment amount in USD"
              },
              {
                "name": "currency",
                "type": "string",
                "description": "Currency code"
              },
              {
                "name": "status",
                "type": "string",
                "description": "Payment status"
              },
              {
                "name": "qr_code",
                "type": "string",
                "description": "Solana Pay URI"
              },
              {
                "name": "payment_url",
                "type": "string",
                "description": "Payment URL"
              },
              {
                "name": "expires_at",
                "type": "datetime",
                "description": "Expiration timestamp (15 minutes)"
              },
              {
                "name": "split_ids",
                "type": "array",
                "description": "Array of split IDs (if splits configured)"
              }
            ],
            "validation_rules": {
              "percentage_based": [
                "Total percentages must equal exactly 100%",
                "Each percentage: 0.01% to 99.99%",
                "At least 1 recipient required",
                "Maximum 10 recipients per payment"
              ],
              "fixed_amount": [
                "Total fixed amounts must be less than payment amount",
                "Remaining balance distributed via percentages",
                "Minimum $0.01 per recipient",
                "Each wallet address must be valid Solana address"
              ],
              "general": [
                "No duplicate wallet addresses",
                "Cannot split to the merchant's own wallet",
                "All wallet addresses must be base58 format",
                "split_order determines execution sequence",
                "Each split gets unique ID for tracking"
              ]
            },
            "split_statuses": [
              {
                "status": "pending",
                "description": "Payment confirmed, split queued for processing"
              },
              {
                "status": "processing",
                "description": "Split transaction being sent on-chain"
              },
              {
                "status": "completed",
                "description": "Split successfully sent to recipient"
              },
              {
                "status": "failed",
                "description": "Split failed (will retry automatically)"
              },
              {
                "status": "refunded",
                "description": "Split was refunded due to payment refund"
              }
            ],
            "automatic_retry": {
              "description": "If a split fails, ZendFi automatically retries",
              "schedule": [
                "1st retry: After 1 minute",
                "2nd retry: After 5 minutes",
                "3rd retry: After 15 minutes",
                "4th retry: After 1 hour",
                "5th retry: After 24 hours"
              ],
              "note": "After 5 failed attempts, the split is moved to manual review"
            },
            "webhooks": {
              "split_completed": {
                "event": "SplitCompleted",
                "fields": [
                  "id",
                  "payment_id",
                  "recipient_wallet",
                  "recipient_name",
                  "amount_usd",
                  "amount_crypto",
                  "currency",
                  "status",
                  "transaction_signature",
                  "settled_at"
                ]
              },
              "split_failed": {
                "event": "SplitFailed",
                "fields": [
                  "id",
                  "payment_id",
                  "recipient_wallet",
                  "failure_reason",
                  "retry_count",
                  "next_retry_at"
                ]
              }
            },
            "best_practices": {
              "do": [
                "Validate splits on your backend: Double-check percentages add to 100%",
                "Use recipient names: Helps with tracking and debugging",
                "Set split_order: Control execution sequence",
                "Store split_ids: Track each split independently",
                "Listen for split webhooks: Know when each recipient gets paid",
                "Test on devnet first: Verify split logic before production",
                "Keep metadata detailed: Include order/transaction context",
                "Handle split failures gracefully: Automatic retries handle most cases"
              ],
              "dont": [
                "Don't hardcode percentages: Make them configurable",
                "Don't ignore validation: ZendFi validates, but you should too",
                "Don't exceed 10 recipients: Keep it simple",
                "Don't mix percentage and fixed randomly: Be consistent in your model",
                "Don't forget transaction fees: Recipients need SOL for USDC",
                "Don't skip testing: Test all split scenarios",
                "Don't assume instant: Splits process after payment confirms (~30-60s)"
              ]
            }
          },
          {
            "name": "Subscriptions",
            "status": "LIVE NOW",
            "description": "Recurring payments made easy! Create subscription plans with flexible billing intervals - perfect for SaaS, memberships, and any recurring service",
            "features": [
              "Multiple billing intervals (daily, weekly, monthly, yearly)",
              "Trial periods (free trials before billing starts)",
              "Automatic billing cycle processing",
              "Subscription management (cancel immediately or at period end)",
              "Cycle limits (max number of billing cycles)",
              "Customer subscription tracking",
              "Webhook events for subscription lifecycle"
            ],
            "endpoints": [
              {
                "name": "Create Subscription Plan",
                "method": "POST",
                "path": "/api/v1/subscription-plans",
                "authentication": "Bearer YOUR_API_KEY",
                "parameters": [
                  {
                    "name": "name",
                    "type": "string",
                    "required": true,
                    "description": "Plan name (e.g., 'Premium Monthly')"
                  },
                  {
                    "name": "description",
                    "type": "string",
                    "required": false,
                    "description": "Plan description"
                  },
                  {
                    "name": "amount",
                    "type": "number",
                    "required": true,
                    "description": "Price per billing cycle in USD (must be > 0)"
                  },
                  {
                    "name": "currency",
                    "type": "string",
                    "required": true,
                    "description": "Currency code ('USD' only)"
                  },
                  {
                    "name": "billing_interval",
                    "type": "string",
                    "required": true,
                    "description": "daily, weekly, monthly, or yearly"
                  },
                  {
                    "name": "interval_count",
                    "type": "number",
                    "required": false,
                    "description": "Number of intervals between charges (default: 1)"
                  },
                  {
                    "name": "trial_days",
                    "type": "number",
                    "required": false,
                    "description": "Free trial days before first charge (default: 0)"
                  },
                  {
                    "name": "max_cycles",
                    "type": "number",
                    "required": false,
                    "description": "Maximum billing cycles (null = unlimited)"
                  },
                  {
                    "name": "metadata",
                    "type": "object",
                    "required": false,
                    "description": "Custom key-value pairs"
                  }
                ]
              },
              {
                "name": "List Subscription Plans",
                "method": "GET",
                "path": "/api/v1/subscription-plans",
                "authentication": "Bearer YOUR_API_KEY"
              },
              {
                "name": "Get Subscription Plan",
                "method": "GET",
                "path": "/api/v1/subscription-plans/:plan_id",
                "authentication": "None (public endpoint)"
              },
              {
                "name": "Subscribe Customer to Plan",
                "method": "POST",
                "path": "/api/v1/subscriptions",
                "parameters": [
                  {
                    "name": "plan_id",
                    "type": "UUID",
                    "required": true,
                    "description": "Subscription plan ID"
                  },
                  {
                    "name": "customer_wallet",
                    "type": "string",
                    "required": true,
                    "description": "Customer's Solana wallet address"
                  },
                  {
                    "name": "customer_email",
                    "type": "string",
                    "required": false,
                    "description": "Customer's email for notifications"
                  },
                  {
                    "name": "metadata",
                    "type": "object",
                    "required": false,
                    "description": "Custom key-value pairs"
                  }
                ]
              },
              {
                "name": "Get Subscription",
                "method": "GET",
                "path": "/api/v1/subscriptions/:id"
              },
              {
                "name": "Cancel Subscription",
                "method": "POST",
                "path": "/api/v1/subscriptions/:id/cancel",
                "parameters": [
                  {
                    "name": "cancel_at_period_end",
                    "type": "boolean",
                    "required": false,
                    "description": "If true, subscription continues until period ends (default: false)"
                  },
                  {
                    "name": "reason",
                    "type": "string",
                    "required": false,
                    "description": "Cancellation reason"
                  }
                ]
              }
            ],
            "statuses": [
              {
                "status": "trialing",
                "description": "In free trial period - no charges yet"
              },
              {
                "status": "active",
                "description": "Subscription is active and billing"
              },
              {
                "status": "past_due",
                "description": "Last payment failed - subscription still active but needs payment"
              },
              {
                "status": "paused",
                "description": "Subscription temporarily paused (future feature)"
              },
              {
                "status": "cancelled",
                "description": "Subscription cancelled"
              },
              {
                "status": "expired",
                "description": "Subscription reached max_cycles or ended"
              }
            ],
            "automatic_billing": {
              "description": "ZendFi automatically processes subscription billing! A background worker runs every hour to:",
              "steps": [
                "Check for subscriptions with next_payment_attempt due",
                "Create payment for the billing amount",
                "Send payment link to customer via webhook/email",
                "On successful payment: Advance billing cycle",
                "On failed payment: Mark subscription past_due and retry",
                "Send webhooks for all subscription events"
              ]
            }
          },
          {
            "name": "Installment Plans",
            "status": "LIVE NOW",
            "description": "Let customers pay over time! Split a single purchase into multiple scheduled payments - perfect for big-ticket items",
            "features": [
              "Flexible payment schedules (custom frequency in days)",
              "Automatic payment tracking",
              "Late payment detection with grace periods",
              "Late fees support",
              "Default tracking and notifications",
              "Plan cancellation",
              "Customer and merchant plan views"
            ],
            "endpoints": [
              {
                "name": "Create Installment Plan",
                "method": "POST",
                "path": "/api/v1/installment-plans",
                "authentication": "Bearer YOUR_API_KEY",
                "parameters": [
                  {
                    "name": "customer_wallet",
                    "type": "string",
                    "required": true,
                    "description": "Customer's Solana wallet address"
                  },
                  {
                    "name": "customer_email",
                    "type": "string",
                    "required": false,
                    "description": "Customer's email for reminders"
                  },
                  {
                    "name": "total_amount",
                    "type": "number",
                    "required": true,
                    "description": "Total purchase amount in USD (must be > 0)"
                  },
                  {
                    "name": "installment_count",
                    "type": "number",
                    "required": true,
                    "description": "Number of payments (must be > 0)"
                  },
                  {
                    "name": "first_payment_date",
                    "type": "datetime",
                    "required": false,
                    "description": "First payment due date (default: tomorrow)"
                  },
                  {
                    "name": "payment_frequency_days",
                    "type": "number",
                    "required": true,
                    "description": "Days between payments (e.g., 30 for monthly)"
                  },
                  {
                    "name": "description",
                    "type": "string",
                    "required": false,
                    "description": "Plan description"
                  },
                  {
                    "name": "late_fee_amount",
                    "type": "number",
                    "required": false,
                    "description": "Late fee in USD"
                  },
                  {
                    "name": "grace_period_days",
                    "type": "number",
                    "required": false,
                    "description": "Grace period after due date (default: 7)"
                  },
                  {
                    "name": "metadata",
                    "type": "object",
                    "required": false,
                    "description": "Custom key-value pairs"
                  }
                ]
              },
              {
                "name": "Get Installment Plan",
                "method": "GET",
                "path": "/api/v1/installment-plans/:plan_id",
                "authentication": "Bearer YOUR_API_KEY"
              },
              {
                "name": "List Merchant's Installment Plans",
                "method": "GET",
                "path": "/api/v1/installment-plans",
                "query_parameters": [
                  {
                    "name": "limit",
                    "type": "number",
                    "description": "Max results (default: 50, max: 100)"
                  },
                  {
                    "name": "offset",
                    "type": "number",
                    "description": "Pagination offset (default: 0)"
                  }
                ]
              },
              {
                "name": "List Customer's Installment Plans",
                "method": "GET",
                "path": "/api/v1/customers/:customer_wallet/installment-plans",
                "authentication": "None (public endpoint)"
              },
              {
                "name": "Cancel Installment Plan",
                "method": "POST",
                "path": "/api/v1/installment-plans/:plan_id/cancel",
                "authentication": "Bearer YOUR_API_KEY"
              }
            ],
            "statuses": [
              {
                "status": "active",
                "description": "Plan is active, customer making payments"
              },
              {
                "status": "completed",
                "description": "All installments paid successfully!"
              },
              {
                "status": "defaulted",
                "description": "Customer missed payment beyond grace period"
              },
              {
                "status": "cancelled",
                "description": "Plan cancelled by merchant"
              }
            ],
            "automatic_monitoring": {
              "description": "ZendFi automatically monitors installment plans! A background worker runs hourly to:",
              "steps": [
                "Check for overdue installments",
                "Send late payment reminders",
                "Apply late fees after grace period",
                "Mark plans as defaulted if payment missed too long",
                "Send email notifications to customers",
                "Trigger webhooks for payment events"
              ]
            }
          },
          // {
          //   "name": "Escrow Payments",
          //   "status": "LIVE NOW",
          //   "description": "Protect buyers and sellers! Hold funds in escrow until conditions are met - perfect for high-value transactions",
          //   "features": [
          //     "Funds held in secure escrow wallet",
          //     "Multiple release conditions (manual approval, time-based, confirmations, milestones)",
          //     "Approve release to seller",
          //     "Refund to buyer",
          //     "Dispute resolution workflow",
          //     "Automatic time-based releases",
          //     "Webhook events for escrow lifecycle"
          //   ],
          //   "endpoints": [
          //     {
          //       "name": "Create Escrow",
          //       "method": "POST",
          //       "path": "/api/v1/escrows",
          //       "authentication": "Bearer YOUR_API_KEY",
          //       "parameters": [
          //         {
          //           "name": "buyer_wallet",
          //           "type": "string",
          //           "required": true,
          //           "description": "Buyer's Solana wallet address"
          //         },
          //         {
          //           "name": "seller_wallet",
          //           "type": "string",
          //           "required": true,
          //           "description": "Seller's Solana wallet address"
          //         },
          //         {
          //           "name": "amount",
          //           "type": "number",
          //           "required": true,
          //           "description": "Escrow amount in USD (must be > 0)"
          //         },
          //         {
          //           "name": "currency",
          //           "type": "string",
          //           "required": true,
          //           "description": "Currency code ('USD' only)"
          //         },
          //         {
          //           "name": "token",
          //           "type": "string",
          //           "required": false,
          //           "description": "Token for payment ('USDC', 'SOL', 'USDT')"
          //         },
          //         {
          //           "name": "description",
          //           "type": "string",
          //           "required": false,
          //           "description": "Escrow description"
          //         },
          //         {
          //           "name": "release_conditions",
          //           "type": "object",
          //           "required": true,
          //           "description": "Conditions for releasing funds"
          //         },
          //         {
          //           "name": "metadata",
          //           "type": "object",
          //           "required": false,
          //           "description": "Custom key-value pairs"
          //         }
          //       ]
          //     },
          //     {
          //       "name": "Get Escrow",
          //       "method": "GET",
          //       "path": "/api/v1/escrows/:escrow_id",
          //       "authentication": "Bearer YOUR_API_KEY"
          //     },
          //     {
          //       "name": "List Escrows",
          //       "method": "GET",
          //       "path": "/api/v1/escrows",
          //       "query_parameters": [
          //         {
          //           "name": "limit",
          //           "type": "number",
          //           "description": "Max results (default: 50, max: 100)"
          //         },
          //         {
          //           "name": "offset",
          //           "type": "number",
          //           "description": "Pagination offset (default: 0)"
          //         }
          //       ]
          //     },
          //     {
          //       "name": "Approve Escrow Release",
          //       "method": "POST",
          //       "path": "/api/v1/escrows/:escrow_id/approve",
          //       "authentication": "Bearer YOUR_API_KEY",
          //       "parameters": [
          //         {
          //           "name": "approver_wallet",
          //           "type": "string",
          //           "required": true,
          //           "description": "Wallet address of approver"
          //         }
          //       ]
          //     },
          //     {
          //       "name": "Refund Escrow",
          //       "method": "POST",
          //       "path": "/api/v1/escrows/:escrow_id/refund",
          //       "authentication": "Bearer YOUR_API_KEY",
          //       "parameters": [
          //         {
          //           "name": "reason",
          //           "type": "string",
          //           "required": true,
          //           "description": "Refund reason"
          //         }
          //       ]
          //     },
          //     {
          //       "name": "Dispute Escrow",
          //       "method": "POST",
          //       "path": "/api/v1/escrows/:escrow_id/dispute",
          //       "authentication": "Bearer YOUR_API_KEY",
          //       "parameters": [
          //         {
          //           "name": "reason",
          //           "type": "string",
          //           "required": true,
          //           "description": "Dispute reason (detailed)"
          //         }
          //       ]
          //     }
          //   ],
          //   "release_condition_types": [
          //     {
          //       "type": "manual_approval",
          //       "fields": {
          //         "type": "manual_approval",
          //         "approver": "wallet_address",
          //         "approved": false
          //       }
          //     },
          //     {
          //       "type": "time_based",
          //       "description": "Auto-release after date",
          //       "fields": {
          //         "type": "time_based",
          //         "release_after": "2025-11-01T00:00:00Z"
          //       }
          //     },
          //     {
          //       "type": "confirmation_required",
          //       "description": "Multiple approvals",
          //       "fields": {
          //         "type": "confirmation_required",
          //         "confirmations_needed": 2,
          //         "confirmed_by": []
          //       }
          //     },
          //     {
          //       "type": "milestone",
          //       "fields": {
          //         "type": "milestone",
          //         "description": "Website delivered and approved",
          //         "approved": false,
          //         "approved_by": null
          //       }
          //     }
          //   ],
          //   "statuses": [
          //     {
          //       "status": "pending",
          //       "description": "Escrow created, waiting for buyer payment"
          //     },
          //     {
          //       "status": "funded",
          //       "description": "Payment received, funds held in escrow"
          //     },
          //     {
          //       "status": "released",
          //       "description": "Funds released to seller"
          //     },
          //     {
          //       "status": "refunded",
          //       "description": "Funds refunded to buyer"
          //     },
          //     {
          //       "status": "disputed",
          //       "description": "Dispute raised, under review"
          //     },
          //     {
          //       "status": "cancelled",
          //       "description": "Escrow cancelled"
          //     }
          //   ],
          //   "automatic_monitoring": {
          //     "description": "ZendFi automatically monitors escrow transactions! A background worker runs hourly to:",
          //     "steps": [
          //       "Check time-based release conditions",
          //       "Auto-release funds when time condition met",
          //       "Send email notifications to all parties",
          //       "Trigger webhooks for status changes",
          //       "Alert admins for disputed transactions"
          //     ]
          //   }
          // },
          {
            "name": "Invoices",
            "status": "LIVE NOW",
            "description": "Professional invoicing for your business! Generate and send invoices with payment tracking and email delivery",
            "features": [
              "Automatic invoice numbering (INV-2025-00001)",
              "Line items support",
              "Due dates",
              "Email delivery to customers",
              "Payment URL generation",
              "Status tracking (draft, sent, paid)",
              "List all invoices"
            ],
            "endpoints": [
              {
                "name": "Create Invoice",
                "method": "POST",
                "path": "/api/v1/invoices",
                "authentication": "Bearer YOUR_API_KEY",
                "parameters": [
                  {
                    "name": "customer_email",
                    "type": "string",
                    "required": true,
                    "description": "Customer's email address"
                  },
                  {
                    "name": "customer_name",
                    "type": "string",
                    "required": false,
                    "description": "Customer's name"
                  },
                  {
                    "name": "amount",
                    "type": "number",
                    "required": true,
                    "description": "Invoice amount in USD (must be > 0)"
                  },
                  {
                    "name": "token",
                    "type": "string",
                    "required": false,
                    "description": "Token for payment ('USDC', 'SOL', 'USDT')"
                  },
                  {
                    "name": "description",
                    "type": "string",
                    "required": true,
                    "description": "Invoice description"
                  },
                  {
                    "name": "line_items",
                    "type": "array",
                    "required": false,
                    "description": "Array of line item objects"
                  },
                  {
                    "name": "due_date",
                    "type": "datetime",
                    "required": false,
                    "description": "Payment due date"
                  },
                  {
                    "name": "metadata",
                    "type": "object",
                    "required": false,
                    "description": "Custom key-value pairs"
                  }
                ]
              },
              {
                "name": "Send Invoice",
                "method": "POST",
                "path": "/api/v1/invoices/:id/send",
                "authentication": "Bearer YOUR_API_KEY",
                "description": "Send an invoice to your customer via email with a payment link"
              },
              {
                "name": "Get Invoice",
                "method": "GET",
                "path": "/api/v1/invoices/:id",
                "authentication": "Bearer YOUR_API_KEY"
              },
              {
                "name": "List Invoices",
                "method": "GET",
                "path": "/api/v1/invoices",
                "authentication": "Bearer YOUR_API_KEY",
                "note": "List is ordered by creation date (newest first), limited to 100 results"
              }
            ],
            "line_item_object": [
              {
                "name": "description",
                "type": "string",
                "description": "Item description"
              },
              {
                "name": "quantity",
                "type": "number",
                "description": "Quantity"
              },
              {
                "name": "unit_price",
                "type": "number",
                "description": "Price per unit in USD"
              }
            ],
            "statuses": [
              {
                "status": "draft",
                "description": "Invoice created but not sent yet"
              },
              {
                "status": "sent",
                "description": "Invoice emailed to customer with payment link"
              },
              {
                "status": "paid",
                "description": "Invoice paid successfully!"
              }
            ]
          }
        ],
        "summary": {
          "title": "Summary & Next Steps",
          "message": "Congratulations! You now have access to ZendFi's complete suite of advanced features!",
          "live_features": [
            "Payment Splits: Automatically distribute payments among multiple recipients",
            "Subscriptions: Recurring billing with flexible intervals and trial periods",
            "Installment Plans: Let customers pay over time with flexible schedules",
            "Escrow Payments: Secure fund holding with multiple release conditions",
            "Invoices: Professional invoicing with email delivery"
          ],
          "capabilities": [
            "Accept recurring payments (SaaS, memberships, subscriptions)",
            "Offer payment plans (big-ticket items, courses)",
            "Protect high-value transactions (freelance, real estate)",
            "Send professional invoices with one-click payment"
          ],
          "next_steps": [
            "Review API Reference for complete endpoint documentation",
            "Check out Payment Links for reusable payment URLs",
            "Set up Webhooks to track payment events",
            "Manage funds with Wallet Management"
          ],
          "support": {
            "email": "support@zendfi.tech",
            "discord": "discord.gg/zendfi",
            "docs": "https://docs.zendfi.tech",
            "feature_requests": "features@zendfi.tech"
          }
        }
      }
         
]