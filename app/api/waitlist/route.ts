import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Don't initialize Resend at module level - do it conditionally
let resend: Resend | null = null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, userType, company, estimatedVolume } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !userType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create formatted email content
    const userTypeLabels: { [key: string]: string } = {
      'individual': 'Individual sending money to family/friends',
      'business': 'Business paying remote teams/suppliers',
      'nigerian-sme': 'Nigerian SME receiving payments',
      'other': 'Other'
    }

    const volumeLabels: { [key: string]: string } = {
      'under-1k': 'Under $1,000',
      '1k-5k': '$1,000 - $5,000',
      '5k-10k': '$5,000 - $10,000',
      '10k-50k': '$10,000 - $50,000',
      '50k-plus': '$50,000+'
    }

    // Admin notification email (to your team)
    const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
          🎉 New Waitlist Signup - Zendfi
        </h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
        </div>

        <div style="margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 15px;">User Details</h3>
          <p style="margin: 5px 0;"><strong>User Type:</strong> ${userTypeLabels[userType] || userType}</p>
          <p style="margin: 5px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Estimated Monthly Volume:</strong> ${volumeLabels[estimatedVolume] || estimatedVolume || 'Not provided'}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Submitted on: ${new Date().toLocaleString('en-US', { 
              timeZone: 'UTC',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} UTC
          </p>
        </div>
      </div>
    </div>
    `

    // User confirmation email (to the person who signed up)
    const userConfirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #6366f1; margin: 0; font-size: 28px;">🎉 Welcome to Zendfi!</h1>
          <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">You're on the waitlist for frictionless international transfers</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
          <h2 style="color: white; margin: 0 0 10px 0; font-size: 20px;">Thanks for joining, ${firstName}!</h2>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">You'll be among the first to experience lightning-fast US/UK to Nigeria transfers</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #374151; margin-bottom: 15px; font-size: 18px;">What happens next?</h3>
          <ul style="color: #6b7280; line-height: 1.6; padding-left: 20px;">
            <li style="margin-bottom: 8px;">We'll keep you updated on our launch progress</li>
            <li style="margin-bottom: 8px;">You'll get early access when we go live</li>
            <li style="margin-bottom: 8px;">Special launch offers exclusively for waitlist members</li>
          </ul>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
          <h4 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">✨ What makes Zendfi different?</h4>
          <div style="display: grid; gap: 10px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>⚡ Under 15 minutes:</strong> Lightning-fast transfers</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>💰 1.5% fees:</strong> Transparent, low-cost pricing</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>🔒 Bank-grade security:</strong> Your money is protected</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>🌍 US/UK to Nigeria:</strong> Seamless cross-border payments</p>
          </div>
        </div>

        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">Questions? We're here to help!</p>
          <p style="margin: 0;">
            <a href="mailto:hello@zendfi.tech" style="color: #6366f1; text-decoration: none; font-weight: 500;">hello@zendfi.tech</a>
          </p>
        </div>
      </div>
    </div>
    `

    const adminEmailText = `
New Waitlist Signup - Zendfi

Contact Information:
Name: ${firstName} ${lastName}
Email: ${email}

User Details:
User Type: ${userTypeLabels[userType] || userType}
Company: ${company || 'Not provided'}
Estimated Monthly Volume: ${volumeLabels[estimatedVolume] || estimatedVolume || 'Not provided'}

Submitted on: ${new Date().toISOString()}
    `

    const userConfirmationText = `
Welcome to Zendfi, ${firstName}!

Thanks for joining our waitlist! You're now on the list for early access to frictionless international transfers from the US/UK to Nigeria.

What happens next?
- We'll keep you updated on our launch progress
- You'll get early access when we go live  
- Special launch offers exclusively for waitlist members

What makes Zendfi different?
⚡ Under 15 minutes: Lightning-fast transfers
💰 1.5% fees: Transparent, low-cost pricing
🔒 Bank-grade security: Your money is protected
🌍 US/UK to Nigeria: Seamless cross-border payments

Questions? Email us at hello@zendfi.tech

Best regards,
The Zendfi Team
    `

    // Initialize Resend only when needed and if API key exists
    if (process.env.RESEND_API_KEY) {
      try {
        if (!resend) {
          resend = new Resend(process.env.RESEND_API_KEY)
        }
        
        // Send admin notification email
        await resend.emails.send({
          from: 'Zendfi Waitlist <waitlist@zendfi.tech>',
          to: [process.env.WAITLIST_EMAIL || 'hello@zendfi.tech'],
          subject: `🎉 New Waitlist Signup: ${firstName} ${lastName}`,
          html: adminEmailHtml,
          text: adminEmailText,
        })

        // Send user confirmation email
        await resend.emails.send({
          from: 'Zendfi <hello@zendfi.tech>',
          to: [email],
          subject: `Welcome to Zendfi, ${firstName}! 🎉`,
          html: userConfirmationHtml,
          text: userConfirmationText,
        })

        console.log(`Emails sent successfully to admin and user: ${email}`)
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Continue with the response even if email fails
      }
    } else {
      console.log('No RESEND_API_KEY found, logging submission instead:')
      console.log({
        firstName,
        lastName,
        email,
        userType,
        company,
        estimatedVolume,
        timestamp: new Date().toISOString()
      })
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist! Check your email for confirmation.',
        data: {
          name: `${firstName} ${lastName}`,
          email,
          userType
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing waitlist submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}