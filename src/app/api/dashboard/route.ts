import { NextResponse } from 'next/server'
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function GET() {
  try {
    const response = await fetch(`${apiUrl}/dashboard`)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 })
  }
}