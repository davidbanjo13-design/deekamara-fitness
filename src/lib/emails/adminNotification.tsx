import { QuizState } from '@/types/quiz';

const goalLabels = {
  'lifestyle': 'Lifestyle & Health',
  'aesthetic': 'Aesthetic Goals',
  'weight-loss': 'Weight Loss',
  'strength': 'Strength Training',
};

export function generateAdminEmailHtml(quizData: QuizState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quiz Submission</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(to right, #ec4899, #f43f5e); padding: 2px; border-radius: 16px;">
            <div style="background-color: white; padding: 32px; border-radius: 15px;">
              <h1 style="color: #111827; font-size: 24px; margin-bottom: 24px; text-align: center;">
                New Quiz Submission
              </h1>

              <div style="background-color: #fdf2f8; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px;">
                  Contact Information
                </h2>
                <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">
                    <strong>Name:</strong> ${quizData.contact?.name}
                  </li>
                  <li style="margin-bottom: 8px;">
                    <strong>Email:</strong> ${quizData.contact?.email}
                  </li>
                  ${quizData.contact?.phone ? `
                  <li style="margin-bottom: 8px;">
                    <strong>Phone:</strong> ${quizData.contact.phone}
                  </li>
                  ` : ''}
                  ${quizData.contact?.country ? `
                  <li style="margin-bottom: 8px;">
                    <strong>Country:</strong> ${quizData.contact.country}
                  </li>
                  ` : ''}
                </ul>
              </div>

              <div style="background-color: #fdf2f8; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px;">
                  Quiz Responses
                </h2>
                <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">
                    <strong>Goal:</strong> ${goalLabels[quizData.goal as keyof typeof goalLabels]}
                  </li>
                  <li style="margin-bottom: 8px;">
                    <strong>Gender:</strong> ${quizData.gender}
                  </li>
                  <li style="margin-bottom: 8px;">
                    <strong>Age Range:</strong> ${quizData.age?.replace('-', ' to ')}
                  </li>
                </ul>
              </div>

              ${quizData.motivation ? `
              <div style="background-color: #fdf2f8; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px;">
                  Motivation
                </h2>
                <p style="color: #4b5563; margin: 0;">
                  "${quizData.motivation}"
                </p>
              </div>
              ` : ''}

              <div style="text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/submissions" 
                   style="display: inline-block; background: linear-gradient(to right, #ec4899, #f43f5e); color: white; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 600;">
                  View All Submissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
