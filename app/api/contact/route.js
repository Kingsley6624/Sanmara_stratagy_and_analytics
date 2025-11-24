export async function POST(req) {
  try {
    const data = await req.json();
    

    // Initial check for required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: "Please fill in all fields." }), { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is missing in .env");
      return new Response(JSON.stringify({ error: "Server misconfigured (Missing GOOGLE_SCRIPT_URL)" }), { status: 500 });
    }

    console.log("Using Google Script URL:", scriptUrl);

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // 💡 Check HTTP status code from Apps Script first
    if (response.status !== 200) {
        console.error("Apps Script returned non-200 status:", response.status);
        return new Response(JSON.stringify({ error: "External service error (Google Script non-200)" }), { status: 502 });
    }

    console.log("Apps Script response status:", response.status);

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
      console.log("Apps Script response JSON:", result);
    } catch (e) {
      console.error("Apps Script returned invalid JSON:", text);
      return new Response(JSON.stringify({ error: "Invalid response format from Google Script." }), { status: 502 });
    }

    // Check the custom success key from the Apps Script payload
    if (result.status === "success") {
      return new Response(JSON.stringify({ message: "Form submitted successfully!" }), { status: 200 });
    } else {
      // Failure state defined by the Apps Script (e.g., failed to write to sheet)
      return new Response(JSON.stringify({ error: result.message || "Failed to submit form to Google Sheet." }), { status: 500 });
    }

  } catch (err) {
    // Handle all other internal/network errors
    console.error("API POST error:", err);
    // Return a generic error to the client for security/simplicity
    return new Response(JSON.stringify({ error: "An unexpected server error occurred." }), { status: 500 });
  }
}