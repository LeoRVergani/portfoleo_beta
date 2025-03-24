"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
    const caminho = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}>Início</MenuItem>
            <MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>
            <MenuItem href="https://www.google.com.br/" selecionado={false} novaAba={true}>Contato</MenuItem>
        </nav>
    )
}

function MenuItem(props: {
    href: string
    children: React.ReactNode
    selecionado: boolean
    novaAba?: boolean
}) {
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
            <span
                className={`
                    flex items-center gap-2 text-sm border-red-600 hover:text-white
                    ${props.selecionado ? "border-b text-white" : "text-zinc-600"}
                    `}
            >

                {props.children}    

            </span>
        </Link>
    )
}