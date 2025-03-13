import { useEffect, useState } from "react";

export default function CSRPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/heavyweight")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return <div>
        <div className="back-bar">
          <a href="/">Go To Back</a>
        </div>
        <h1>CSR - 1000 Registros Renderizados</h1>
        <ul>
            {data.map((item: any) => (
                <li key={item.id}>
                    <strong>{item.name}</strong>: {item.value}
                </li>
            ))}
        </ul>
    </div>;
}
