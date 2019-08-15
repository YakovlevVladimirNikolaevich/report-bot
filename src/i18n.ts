import { DocumentProcessingType } from './common/CommonConstants';

export const i18n = {
    act: 'Акт',
    welcome:
        'Привет! Пришли мне выгрузку из Jira, я создам тебе отчет трудозатрат.',
    documentPrompt: 'Что сделать с файлом?',
    actPrompt: 'Формат акта?',
    documentType: {
        [DocumentProcessingType.WORKSHEET]: 'Трудозатраты',
        // TODO: use when report service is ready
        [DocumentProcessingType.ACT]: 'Акт выполненных работ',
    },
    errors: {
        reportService: 'Поймал ошибку при обработке документа 😔 ',
        callbackActionNotFound: 'Не могу обработать эту кнопку 😔',
        callbackDataCorrupted:
            'Не могу обработать эту кнопку. Данные устарели 😔',
    },
};
