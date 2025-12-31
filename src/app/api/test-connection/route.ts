import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Test the connection by attempting to count quiz submissions
    const { count, error } = await supabase
      .from('quiz_submissions')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Supabase connection test failed:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          details: {
            code: error.code,
            hint: error.hint,
            details: error.details
          }
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully connected to Supabase',
      count: count
    });

  } catch (error) {
    console.error('Error testing Supabase connection:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}
