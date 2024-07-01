
export async function GET() {
    
    console.log('passando pelo backend')
    return Response.json({ dateString : new Date().toString() },{
    headers: { 'Cache-Control': 's-maxage=10, stale-while-revalidate' }})

}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));