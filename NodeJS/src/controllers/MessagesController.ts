import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";


class MessagesControllers {

    async create(request: Request, response: Response) {
        const { admin_id, text, user_id } = request.body;
        const messagesService = new MessageService();


        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        });

        return response.json(message);
    }
}

export { MessagesControllers }