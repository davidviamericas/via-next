"use client";
import { useState } from "react";
import Link from "next/link";

const projects = [
    { name: "Server Site Rendering", url: "/ssr" },
    { name: "Client Site Rendering", url: "/csr" },
    { name: "Weight image", url: "/weight-img" },
];

export default function CoverageViewer() {

    return (
        <>
            {/* Sidebar */}
            <div >
                <h2 >Pages</h2>
                <div style={{ display: "flex" }} >
                    {projects.map((project) => (
                        <div key={project.url} style={{ padding: "10px", margin: "5px", backgroundColor: "#d0f0f0", borderRadius: "5px", cursor: "pointer" }}>
                            <Link style={{ color: "#000", textDecoration: "none" }} href={project
                                .url}>{project.name}</Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>Apis</h2>
                <div>
                    <p><strong>Heavyweight</strong></p>
                    <label>/api/heavyweight</label>
                </div>
                <div>
                    <p><strong>Lightweight</strong></p>
                    <label>/api/lightweight</label>
                </div>
            </div>
        </>
    );
}
