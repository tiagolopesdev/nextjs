import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>   

            <ul>
                <li>
                    <Link href="/blog">
                        Ir para o blog
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Ir para o products
                    </Link>
                </li>
                
            </ul>   
          
        </div>
        
    )
}

