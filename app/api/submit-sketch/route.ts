import { NextResponse } from 'next/server';

const GOOGLE_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbweU86HVLfvmhprL_WPKjcGcOLYsxWupxASZkU8pXkMWyHUglvI3rbzeYgplPXslczBRA/exec';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Send form data to Google Sheets Web App
    const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit data to Google Sheets');
    }

    const fakeCount = Math.floor(Math.random() * 40) + 60;

    return NextResponse.json({ success: true, message: 'Form submitted', fakeCount });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
