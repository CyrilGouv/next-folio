export async function POST(request) {
    const { fullname, email, subject, budget, brief } = await request.json()
    
    if (fullname && email && subject && budget && brief) {
        return Response.json({ "message": "sent" })
    } else {
        return Response.json({ "message": "error" })
    }
}