interface IMailTo {
    name: string;
    email: string;
};

interface IMailMessage {
    subject: string;
    body: string;
    attachement?: string[];
};

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
};
// Data Transfer Object (DDD)

interface IMailService {
    sendMail(request: IMessageDTO): void;
};

class EmailService implements IMailService{
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
};

export default EmailService;