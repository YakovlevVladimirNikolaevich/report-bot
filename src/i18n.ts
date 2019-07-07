export const Dict = {
    welcome:
        'Привет! Пришли мне выгрузку из Jira, я создам тебе отчет трудозатрат.',
    documentPrompt: 'Что сделать с файлом?',
    documentType: {
        worksheet: 'Трудозатраты',
        // TODO: use when report service is ready
        workact: 'Акт выполненных работ',
    },
    errors: {
        reportService: 'Поймал ошибку при обработке документа 😔 ',
        callbackActionNotFound: 'Не могу обработать эту кнопку 😔',
        callbackDataCorrupted:
            'Не могу оброаботать эту кнопку. Данные устарели 😔',
    },
};
