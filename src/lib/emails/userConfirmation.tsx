import { QuizState } from '@/types/quiz';

const goalLabels = {
  'lifestyle': 'Lifestyle & Health',
  'aesthetic': 'Aesthetic Goals',
  'weight-loss': 'Weight Loss',
  'strength': 'Strength Training',
};

export function generateUserEmailHtml(quizData: QuizState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to DeeKamara Fitness</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(to right, #ec4899, #f43f5e); padding: 2px; border-radius: 16px;">
            <div style="background-color: white; padding: 32px; border-radius: 15px;">
              <h1 style="color: #111827; font-size: 24px; margin-bottom: 24px; text-align: center;">
                Welcome to DeeKamara Fitness!
              </h1>
              
              <p style="color: #4b5563; margin-bottom: 24px;">
                Hi ${quizData.contact?.name},
              </p>

              <p style="color: #4b5563; margin-bottom: 24px;">
                Thank you for taking the first step towards your fitness journey! I'm excited to help you achieve your goals.
              </p>

              <div style="background-color: #fdf2f8; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px;">
                  Your Fitness Profile
                </h2>
                <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">
                    <strong>Goal:</strong> ${goalLabels[quizData.goal as keyof typeof goalLabels]}
                  </li>
                  <li style="margin-bottom: 8px;">
                    <strong>Age Range:</strong> ${quizData.age?.replace('-', ' to ')}
                  </li>
                </ul>
              </div>

              <div style="margin-bottom: 24px;">
                <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px;">
                  Next Steps
                </h2>
                <ol style="color: #4b5563; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">
                    I'll review your submission within 24 hours
                  </li>
                  <li style="margin-bottom: 8px;">
                    You'll receive an email to schedule your consultation
                  </li>
                  <li style="margin-bottom: 8px;">
                    We'll discuss your goals and create a personalized plan
                  </li>
                </ol>
              </div>

              <p style="color: #4b5563; margin-bottom: 24px;">
                If you have any questions in the meantime, feel free to reply to this email.
              </p>

              <p style="color: #4b5563; margin-bottom: 8px;">
                Best regards,
              </p>
              <p style="color: #111827; font-weight: 600; margin-top: 0;">
                DeeKamara
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
