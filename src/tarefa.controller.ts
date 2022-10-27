import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { Tarefa } from "./tarefa.entity";
import { TarefaService } from "./tarefa.service";


@Controller()
export class TarefaController {
    
    constructor(
        private tarefaService: TarefaService
    ) {}

    @Get("/tarefa")
    async listaTarefa(): Promise<Tarefa[]> {
        return await this.tarefaService.findAll();
    }

    @Put("/tarefa")
     async salvartarefa(@Body() tarefa) {
       await this.tarefaService.salvar(tarefa)
        return "ok";
    }

    @Get("/tarefa/:codigo")
    async buscarPorCodigo(@Param() parametro) {
        console.log(parametro.codigo);
        
        return await this.tarefaService.findById(parametro.codigo)
    }

    @Delete("/tarefa/:codigo")
    async excluirTarefa(@Param() parametro) {
       
        await this.tarefaService.excluir(parametro.codigo)

        return "ok";
    }

}0