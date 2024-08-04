import { Request, Response } from "express";
import {writeFile, readFile} from 'fs/promises'

class ContactController{
    static async createContact(req: Request, res:Response){
        let {nome} = req.body;

        console.log(nome);

        const fileContent = await readFile('./contatos.txt', {encoding:'utf-8'});

        let names = fileContent.split(', ');


        names.push(nome);

        let namesTxt = names.join(', ');

        await writeFile('./contatos.txt', namesTxt); 

         res.json({
            message: nome + " adicionado com sucesso"
         })

    }


    static async getContacts(req: Request, res:Response){
        const fileContent = await readFile('./contatos.txt', {encoding:'utf-8'});

        let names = fileContent.split(', ');

        res.json({
            contatos:names
        })
    }

    static async deleteContact(req:Request, res: Response){

        const {nome} = req.query;

        const fileContent = await readFile('./contatos.txt', {encoding:'utf-8'});

        let names = fileContent.split(', ');

        let novaLista = [];

        if(names.includes(nome as string)){
            novaLista = names.filter(item => item.trim() !== nome);

            const novaListaTxt = novaLista.join(', ');

            await writeFile('./contatos.txt', novaListaTxt);

            res.json({
                message: nome + " excluído com sucesso"
            });
        }else{
            res.json({
                message: nome + ' não foi encontrado'
            })
        }

    }

    static async searchContact(req: Request, res:Response){
        const {nome} = req.query;

        const fileContent = await readFile('./contatos.txt', {encoding:'utf-8'});

        let names = fileContent.split(', ');

        if(names.includes(nome as string)){
            res.json({
                message: nome + ' encontrado com sucesso'
            })
        }else{
            res.json({
                message: nome + ' não foi encontrado'
            })
        }
    }

}

export default ContactController;