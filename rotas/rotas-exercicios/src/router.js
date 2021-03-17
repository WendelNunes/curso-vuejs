import Vue from "vue"
import Router from "vue-router"
import Inicio from "@/components/Inicio"
import Menu from "@/components/template/Menu"
import MenuAut from "@/components/template/MenuAut"
import Usuario from "@/components/Usuario"
import UsuarioLista from "@/components/UsuarioLista"
import UsuarioDetalhe from "@/components/UsuarioDetalhe"
import UsuarioEditar from "@/components/UsuarioEditar"

Vue.use(Router);

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else if (to.hash) {
            return {
                selector: to.hash,
            };
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        {
            name: "inicio",
            path: "/",
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu,
            }
        },
        {
            path: "/usuario",
            // component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAut,
                menuInferior: MenuAut,
            },
            props: true,
            children: [
                {
                    path: "",
                    component: UsuarioLista
                },
                {
                    path: ":id",
                    component: UsuarioDetalhe,
                    props: true
                },
                {
                    path: ":id/editar",
                    component: UsuarioEditar,
                    props: true,
                    name: "editarUsuario"
                },
            ]
        }, {
            path: "/redirecionar",
            redirect: "/usuario",
        }, {
            path: "*",
            redirect: "/",
        }
    ]
});