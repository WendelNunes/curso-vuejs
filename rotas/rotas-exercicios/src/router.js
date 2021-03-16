import Vue from "vue"
import Router from "vue-router"
import Inicio from "@/components/Inicio"

import Usuario from "@/components/Usuario"
import UsuarioLista from "@/components/UsuarioLista"
import UsuarioDetalhe from "@/components/UsuarioDetalhe"
import UsuarioEditar from "@/components/UsuarioEditar"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Inicio,
        },
        {
            path: "/usuario",
            component: Usuario,
            props: true,
            children: [
                { path: "", component: UsuarioLista },
                { path: ":id", component: UsuarioDetalhe, props: true },
                { path: ":id/editar", component: UsuarioEditar, props: true },
            ]
        }
    ]
});