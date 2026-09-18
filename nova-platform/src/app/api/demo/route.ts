import { NextResponse } from "next/server";

// In-memory mock database for development
const mockDatabase: any[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Basic validation
    const requiredFields = ["firstName", "lastName", "email", "company", "role", "companySize"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Mock DB insertion
    const record = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      ...body
    };
    
    mockDatabase.push(record);

    console.log("[API /demo] New demo request received:", record);

    return NextResponse.json({ success: true, id: record.id });
    
  } catch (error) {
    console.error("[API /demo] Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
