import { Response } from "express";

export class ApiResponse {
    response!: Response;
    status!: number | undefined;
    constructor(res: Response, status?: number) {
        this.response = res;
        this.status = status;
    }

    success(response: any, message: string = "Sucesso"): any {
        return this.response.status(this.status ?? 200).json({ message, response, status: true })
    }
    error(message: string = "Error"): any {
        return this.response.status(this.status ?? 500).json({ message, response: null, status: false })
    }
}