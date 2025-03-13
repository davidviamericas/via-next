export async function getServerSideProps() {
    const res = await fetch("https://viamericas-next-f7eyaxc6gzanemf6.canadacentral-01.azurewebsites.net/api/heavyweight");
    const data = await res.json();

    return { props: { data } };
}

export default function SSRPage({ data }: any) {
    return (
        <div>
            <div className="back-bar">
                <a href="/">Go To Back</a>
            </div>
            <h1>SSR - 1000 Registros renderizados</h1>
            <ul>
                {data.map((item: any) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>: {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}