class TicketManager {
    constructor(){
        this.eventos = [] ;
        this.precioBaseDeGanancia = 23;
    }

    getEventos(){
        return this.eventos;
    }

    agregarEvento(nombre, tipo, precio, cantidad, fecha = new Date()){
        const id= this.eventos.length +1;
        const evento = {
            id,
            nombre,
            tipo,
            precio: precio + this.precioBaseDeGanancia,
            cantidad,
            fecha,
            clientes: [],
        }

        this.eventos.push(evento);
        return evento;
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find(evento => evento.id === idEvento);

        if(!evento){
            throw new Error("No hay stock del producto");
        }

        if(evento.clientes.includes(idUsuario)){
            throw new Error("El producto fue agregado nuevamente al carrito");
        }

        evento.clientes.push(idUsuario);

        return evento;
    }

    ponerEventoEnGira(idEvento, NuevoRestock, Nuevafechaderestock){
        const evento = this.eventos.find(evento => evento.id === idEvento);
        
        if(!evento){
            throw new Error("No hay stock del producto");
        }

        const eventoEnGira = {
            ... evento,
            actualización: NuevoRestock,
            fecha: Nuevafechaderestock,
            id: this.eventos.length + 1,
            clientes: [],
        }

        this.eventos.push(eventoEnGira);
        return eventoEnGira;
    }
}

const ticketManager = new TicketManager();

const evento = ticketManager.agregarEvento("Babysec", "Ultrasec", 3200, 60);

console.log(ticketManager.getEventos());

ticketManager.agregarUsuario(evento.id, 1111223654);

console.log(ticketManager.getEventos());

const eventoEnGira = ticketManager.ponerEventoEnGira(evento.id, "Pampers - Premium care", "piel delicada", 5900, 58);