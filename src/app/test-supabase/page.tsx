'use client';

import { useState } from 'react';

export default function TestSupabase() {
  const [connectionStatus, setConnectionStatus] = useState<string>('');
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const [errorDetails, setErrorDetails] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setConnectionStatus('Testing connection...');
    setErrorDetails('');
    
    try {
      const response = await fetch('/api/test-connection');
      const data = await response.json();
      
      setConnectionStatus(
        data.success 
          ? `✅ Connection successful! Current submissions: ${data.count}`
          : `❌ Connection failed: ${data.error}`
      );

      if (!data.success && data.details) {
        setErrorDetails(JSON.stringify(data.details, null, 2));
      }
    } catch (error) {
      setConnectionStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const submitTestEntry = async () => {
    setIsLoading(true);
    setSubmissionStatus('Submitting test entry...');
    setErrorDetails('');

    try {
      const testData = {
        goal: 'lifestyle',
        gender: 'female',
        age: '21-25',
        motivation: 'This is a test submission',
        contact: {
          name: 'Test User',
          email: 'test@example.com',
          country: 'Test Country'
        }
      };

      console.log('Sending test data:', testData); // Debug log

      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmissionStatus('✅ Test submission successful!');
        setErrorDetails(JSON.stringify(data.submission, null, 2));
      } else {
        setSubmissionStatus(`❌ Submission failed: ${data.error}`);
        if (data.details) {
          setErrorDetails(JSON.stringify(data.details, null, 2));
        }
      }
    } catch (error) {
      setSubmissionStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Supabase Connection Test
        </h1>

        <div className="space-y-8">
          {/* Connection Test */}
          <div>
            <button
              onClick={testConnection}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Test Connection
            </button>
            {connectionStatus && (
              <div className="mt-3 text-sm">
                {connectionStatus}
              </div>
            )}
          </div>

          {/* Test Submission */}
          <div>
            <button
              onClick={submitTestEntry}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Submit Test Entry
            </button>
            {submissionStatus && (
              <div className="mt-3 text-sm">
                {submissionStatus}
              </div>
            )}
          </div>

          {/* Error/Success Details */}
          {errorDetails && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold mb-2">Details:</h3>
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {errorDetails}
              </pre>
            </div>
          )}
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>This page is for testing purposes only.</p>
          <p className="mt-2">
            Check your Supabase dashboard to verify test submissions.
          </p>
        </div>
      </div>
    </div>
  );
}