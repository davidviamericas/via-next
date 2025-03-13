import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <div className="back-bar">
                <a href="/">Go To Back</a>
            </div>
            <h1>Optimización de imágenes en Next.js</h1>
            <Image
                src="https://images-test-via.s3.us-east-1.amazonaws.com/bulldozer-2195329.jpg"
                width={700}
                height={475}
                alt="Ejemplo de imagen optimizada"
                priority // Carga la imagen lo más rápido posible
            />
        </div>
    );
}
