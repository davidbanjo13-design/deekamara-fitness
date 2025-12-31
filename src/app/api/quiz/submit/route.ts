import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
import { QuizState } from '@/types/quiz';
import { generateUserEmailHtml } from '@/lib/emails/userConfirmation';
import { generateAdminEmailHtml } from '@/lib/emails/adminNotification';

if (!process.env.ADMIN_EMAIL) {
  throw new Error('Missing ADMIN_EMAIL environment variable');
}

if (!process.env.EMAIL_FROM) {
  throw new Error('Missing EMAIL_FROM environment variable');
}

export async function POST(request: Request) {
  try {
    const quizData: QuizState = await request.json();
    
    // Validate required fields
    if (!quizData.contact?.email || !quizData.contact?.name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data: submission, error: dbError } = await supabase
      .from('quiz_submissions')
      .insert([
        {
          name: quizData.contact.name,
          email: quizData.contact.email,
          phone: quizData.contact.phone || null,
          country: quizData.contact.country || null,
          goal: quizData.goal,
          gender: quizData.gender,
          age: quizData.age,
          motivation: quizData.motivation,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        {
          error: 'Failed to submit quiz',
          details: dbError.message,
          code: dbError.code,
        },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: quizData.contact.email,
        subject: 'Welcome to DeeKamara Fitness!',
        html: generateUserEmailHtml(quizData),
      });
    } catch (emailError) {
      console.error('Error sending user email:', emailError);
      // Don't return error to client, continue with submission
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: process.env.ADMIN_EMAIL!,
        subject: `New Quiz Submission: ${quizData.contact.name}`,
        html: generateAdminEmailHtml(quizData),
      });
    } catch (emailError) {
      console.error('Error sending admin email:', emailError);
      // Don't return error to client, continue with submission
    }

    return NextResponse.json({ 
      message: 'Quiz submitted successfully',
      submission
    });

  } catch (error) {
    console.error('Error processing quiz submission:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}