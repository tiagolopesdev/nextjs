import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>      
            <Link href="/blog">
                <a>Ir para o blog</a>   
            </Link>
            
        </div>
        
    )
}

