import { NextResponse } from 'next/server';

import { main } from '../../../runtime';

export async function POST() {
  try {
    const result = await main();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Please use POST method' }, { status: 405 });
}
